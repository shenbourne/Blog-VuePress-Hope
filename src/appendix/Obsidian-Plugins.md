---
title: Obsidian插件
icon: pic
order: 2
category:
  - 安装教程
tag:
  - Obsidian
  - picGo
---

## “Paste image rename”：Obsidian本地图片通过picGo上传图床

<!-- #region PasteImageRename -->

### 1. 效果综述

目前我的主力笔记软件是[[Obsidian]]，配图都是统一存放在同一文件夹 `890 Attachments` 内，使用[[Paste image rename]]使其与所引用的元文件名称一致，优点是**方便跨文件引用以及安全隐私**。但存在的弊端也很明显：**随着文件数量增多会导致内存占用过大不利于跨平台同步以及迁移麻烦**。这时可以考虑 webp 化或者干脆直接图床化。

刚好有朋友遇到这个问题，需要将 Vault 里的全部本地图片转为图床链接，解决思路的话比较清晰，相信大家都能想得到：

1. 上传全部图片到图床；
2. 替换文件引用链接。

那就以一个示例文件夹 `ob` 为例，尝试实现所有图片的图床化。

### 2. 上传图片

这里我们需要借助一个插件：**“Image auto upload”**，可以将图片上传到 PicGo 中配置的图床。

![](https://pic2.zhimg.com/80/v2-331c4279a55a99ab3692fe8dc4ad8475_1440w.webp)

若勾选最后一个选项，图片上传图床后会被删除！！！

虽然插件只能上传一个文件中的所有图像文件，但也足够让我们打开思路了：**那就把图片都丢到一个文件里**！

文件夹内创建文件 `attachments.md`，运行这段 python 脚本：

```python
 import os
 import glob
 ​
 # 获取当前目录
 current_dir = os.getcwd()
 ​
 # 获取所有图片文件路径
 image_files = glob.glob(os.path.join(current_dir, '*.jpg')) + \
               glob.glob(os.path.join(current_dir, '*.jpeg')) + \
               glob.glob(os.path.join(current_dir, '*.png'))  # 可根据需要添加其他图片格式的glob语句
 ​
 # 遍历图片文件，并将文件名添加到attachments.md文件中
 with open('attachments.md', 'w', encoding='utf-8') as file:
     for image_file in image_files:
         image_filename = os.path.basename(image_file)
         file.write(f'![[{image_filename}]]\n')
```

执行后会得到以下效果：

![](https://pic1.zhimg.com/80/v2-bcc89b9880e2fdcafd476d758fe372a8_1440w.webp)

图片汇总

然后回到 Obsidian 按 `Ctrl-P` 调出命令面板，执行 `Image auto upload Plugin: Upload all images` 后会自动替换成图床链接：

![](https://pic3.zhimg.com/80/v2-f45acd103c8ffbb0aea543bc672427e2_1440w.webp)

上传后自动替换链接

### 3. 替换文件引用链接

重新读取 `attachments.md`，获取图片名与图床链接的对应关系并存储为字典：

```python
 import re
 ​
 # 定义正则表达式模式
 pattern = r'\!\[(.*?)\]\((.*?)\)'
 ​
 # 以utf-8编码读取attachments.md文件
 with open('attachments.md', 'r', encoding='utf-8') as file:
     content = file.read()
 ​
 # 创建空字典
 img_dict = {}
 ​
 # 使用正则表达式匹配并存储图片信息到字典中
 matches = re.findall(pattern, content)
 for match in matches:
     img_name = match[0]
     img_link = match[1]
     img_dict[img_name] = img_link
```

接着我们需要来遍历整个 Vault 并进行图片引用链接的替换，首先需要注意的是 Obsidian 存在两种引用内部图片的格式：

- OB 链接：`![[img.png]]`
- MD 链接：`![img_name](img.png)`

两种格式我们都需要进行替换：

```python
 import os
 import re
 ​
 # 定义正则表达式模式
 pattern1 = r'\!\[(.*?)\]\((.*?)\.(png|jpg|jpeg)\)'
 pattern2 = r'\!\[\[(.*?)\.(png|jpg|jpeg)\]\]'
 ​
 # 遍历当前文件夹下的所有Markdown文件
 for root, dirs, files in os.walk('.'):
     for file in files:
         if file.endswith('.md'):
             # 以utf-8编码读取Markdown文件
             file_path = os.path.join(root, file)
             with open(file_path, 'r', encoding='utf-8') as f:
                 content = f.read()
 ​
             # 使用正则表达式替换图片链接
             content = re.sub(pattern1, lambda match: '![{}]({})'.format(match.group(2), img_dict.get(match.group(2), '')), content)
             content = re.sub(pattern2, lambda match: '![{}]({})'.format(match.group(1), img_dict.get(match.group(1), '')), content)
 ​
             # 将替换后的内容写回Markdown文件
             with open(file_path, 'w', encoding='utf-8') as f:
                 f.write(content)
```

执行完脚本，我们会发现 Vault 内所有的内部图片都转换成了图床链接的形式。

![](https://pic3.zhimg.com/80/v2-2c6afcf09490201540c5937b5c23d332_1440w.webp)

前后对比

最后再强调一遍，**执行以上操作前务必做好备份！以防操作失误无法挽回！**

<!-- #endregion PasteImageRename -->

## “Remotely save”：本地和云端同步文件

<!-- #region RemotelySave -->

### 1. 效果综述

本地和云之间同步笔记。

- 支持黑曜石移动版。保管库可以在移动和桌面设备之间同步，云服务作为“代理”。
- 支持端到端加密。如果用户指定密码，文件将在发送到云之前使用 openssl 格式进行加密。
- 支持定时自动同步。您还可以使用侧边栏功能区或使用命令面板中的命令手动触发同步（甚至可以将热键组合绑定到命令，然后按热键组合）。

### 2. 配置插件

在应用商店下载 **“Remotely save”**，启动插件后进行插件配置。

**“选择远程服务”** 选择 **“S3或兼容S3的服务”**

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407142051685.png)


打开 Bucket 预览页面


![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407140125160.png)

**“服务地址（Endpoint）”** 和 **“区域（Region）”** 分别是 **“外网访问”** 节点和 **“ECS的经典网络访问”** 节点

**“Access Key ID”** 、**“Secret Access Key”** 分别是在上文 **'阿里云OSS/授权设置"** 中创建子账号后， 自己记录下来的 **"AccessKey ID"** 和 **"AccessKey Scret**

**"存储桶（Bucket）"** 对应阿里云 OSS 内的 bucket 名字

<!-- #endregion RemotelySave -->