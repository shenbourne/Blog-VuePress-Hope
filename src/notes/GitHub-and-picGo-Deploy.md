---
title: 使用Github+picGo搭建图床
icon: pic
order: 2
category:
  - 安装教程
tag:
  - GitHub
  - picGo
  - Typora
---

> 作者注：建议使用Github替换Gitee。
>
> 作者两年亲身体验告诉大家，Github做图床十分靠谱！！有CDN加速访问巨快！！
>
> 别担心不稳定！别担心访问慢！这些问题统统不存在。

## 一、配置GitHub

### 注册Github账号

首先你需要一个github账号，如果没有的话，先注册。

github官网地址： [https://github.com/](https://link.zhihu.com/?target=https%3A//github.com/)

注册过程省略，因为这是保姆都不管的事情。

友情提示：可能在注册过程中会出现 “Unable to verify your captcha response… …”，一直不能正常注册。

网上有各种解决方案：换浏览器、换电脑… …

### 创建一个新仓库，用于存放图片

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-59b7f87b4fbe21a2492e4b9e529fe87c_1440w.webp)

填写仓库名称和描述，且仓库必须是public的，否则存储的图片不能正常访问。

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-d3733c14e8c9b53cb5cf9f7607d51c8a_1440w.webp)

### 生成一个token，用于picGo访问github

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-4d227062bcfa58dba6c0582c982b737b_1440w.webp)

选择左侧菜单的Developer settings

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-4d227062bcfa58dba6c0582c982b737b_1440w.webp)

之后选择左侧Personal access tokens，再点击Generate new token

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-2d5bcabac97557591c4203009d306750_1440w.webp)

填写Note，勾选repo.

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-346da4ccf189eb5997abe2fadadca331_1440w.webp)

注意，生成的token只会在这里显示一次，所以记得单独保存下来哦。

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-354ea85a4bd9cfc99157b86cae9a2332_1440w.webp)

至此，Github的配置完成。

## 二、下载picGo，并进行配置

### 下载picGo

网络不好的情况下，PicGo下载可能会多次失败，所以我把下载好的应用放在百度网盘了。

大家按需取用。

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-279f576c0dc0861fd7edcf1d43e5675f_1440w.webp)

网盘地址：[https://pan.baidu.com/s/1LvkzLJyZcjpflK2Evq3X9A](https://link.zhihu.com/?target=https%3A//pan.baidu.com/s/1LvkzLJyZcjpflK2Evq3X9A) 提取码：s6x7

下载完成，双击启动安装即可。

如果安装成功，picGo不能正常使用，则可以用兼容模式启动。【此问题因电脑而异，也是我在配置过程中踩过的坑。】

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-3f60ccb549e01c95a1702ceca9bda95d_1440w.webp)

### 配置picGo

仓库名：[github用户名]/[第一步新建的仓库名称]

分支：默认master，从2020.10.01开始，github的默认分支名变更为main

设定token：第一步创建的token

指定存储路径：可填可不填，如果填写了，图片就会存储在img文件夹下

设定自定义域名：https://cdn.jsdelivr.net/gh/[github用户名]/[仓库名]@main，注意，此处的分支一定要填写@main，否则默认使用master分支。而现在github创建的默认分支名为main，如果不指定，则会出现图片不能上传的情况。【踩坑两小时】

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-62e4faaa7999d1d32fa80aec44b4034e_1440w.webp)

至此，github+picGo的配置完成，可以在上传区进行图片上传了。

### 补充

1.原本github的自定义域名应该是：https://raw.githubusercontent.com/[username]/[仓库名]

但是使用这种方式访问图片巨慢，所以教程中使用了jsdelivr作为cdn加速。改变域名即可，不需要任何其他配置。

2.配置完成，可能出现不能上传的情况，请大家耐心检查，也许某一步的配置出现了问题，就像检查bug一样耐心、细心。想象一下图床搭建成功后，写起文章来的丝滑感，是不是又有动力了？

## 三、备选-配置Gitee

### Gitee设置

安装好picgo后在picgo的插件设置搜索`gitee`然后选择安装gitee-uploader

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-b5d16df86a9dd216d75e06b57ffb9c12_1440w.webp)

然后到[gitee](https://link.zhihu.com/?target=https%3A//gitee.com/)新建一个仓库用来做我们的图床

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-75f73b3c61eccc848c09c509ef51c6b8_1440w.webp)

新建仓库的要点如下：

1. **输入一个仓库名称**
2. **其次将仓库设为公开**
3. **勾选使用Readme文件初始化这个仓库**
 
起一个仓库的名字，按照下面的流程来创建，记得要公开

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-79d759f28a769709c478f2fc7ca4b59f_1440w.webp)

### 创建私人令牌

点击头像进入设置然后点击私人令牌然后点击生成新令牌

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-d4991c62c5e5733ed8d71ac0e214c687_1440w.webp)

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-72dc3cbb5136d7c49b691ace8d94444b_1440w.webp)

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-18f2eecd4f6c9c4091f5634dc041ca16_1440w.webp)

输入你的gitee登录密码

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-0a99d1f96cf97761ec0049ffb3d767a3_1440w.webp)

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-cd0242aaf5099ecd6371decfa6cc687a_1440w.webp)

### 在picgo中配置gitee图床

进入picgo后点击图床设置点击gitee，然后在repo中填入之前我们创建的用户名/仓库名，这里的用户名要与你的个人空间地址一致，例如我的个人空间地址是zdqs，所以我这里就填写zdqs

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-d43f961421502cd473ea24dbfef8452b_1440w.webp)

branch一般默认是master，token就写我们的私人令牌，path可以不写只要repo和token写了就行了

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-4b1950c44d1a37a0497facfb55066501_1440w.webp)

## 四、PicGo集成Typora

使用MarkDown语法写文章，我使用的编辑器是typora，一款超级好用的编辑器。在一个编辑框内，编辑完成后，可以马上显示MarkDown语法效果。

举个栗子：

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-ce0b207c19d6ca32ac22937f1dc6cfcd_1440w.webp)

并且typora可以和picGo联合在一起使用，当你在编辑器中插入、粘贴图片时，typora+picGo的组合方式，可以自动把图片上传至github保存。

### 下载安装Typora

Typora新版本是收费的，所以建议大家使用旧版本就可以了，完全能满足写作需求。

旧版本安装包和picGo放在一起了（下载地址见上文），大家按需取用即可。

下载完成后正常步骤安装即可。

### 配置Typora

在typora顶部菜单界面，选择“文件” - > “偏好设置”，设置图片存储方式。

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-f595cf5c8a0e3b62944c68deb8fb5878_1440w.webp)

选择图片存储方式：上传图片。

上传服务：PicGo(app)

PicGo路径：picGo安装的地址

设置完成，点击“验证图片上传”，提示上传成功，即代表配置成功。

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-e27e9f198aef7bdea365549b2257025d_1440w.webp)

注意一点，typora图片验证中的端口，需要与picGo中的server设置内的端口一致，否则typora中不能正常上传。

  

### picGo监听端口设置

选择“PicGo设置”–>“设置server”

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-8ff622935a6b0597a21e68e7575e16ef_1440w.webp)

【此处有坑】如果监听端口不是36677，则需要修改为36677。否则会出现picGo能正常上传 图片，而typora上传图片失败的情况。

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-304589efaed9a1ba3caf5e8827e77582_1440w.webp)

最后，在苹果电脑中可以使用**Typora+Ipic+Github**的方式，有兴趣的话可以自行尝试

**总结：github+picGo+typora他们三个是好基友。**

## 五、picGo集成Obsidian

<!-- @include: picGo-integrated-Obsidian.md -->

---

> 作者：小小芋子
> 链接：https://zhuanlan.zhihu.com/p/489236769
> 来源：知乎  