---
title: 华为鸿蒙系统4.2安装谷歌服务套件GMS教程
icon: router
order: 2
category:
  - 安装教程
tag:
  - Synology
cover: https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202409282247838.png
---

<SiteInfo
  name="华为鸿蒙系统4.2安装谷歌服务套件GMS教程"
  desc="提醒：在开始安装谷歌框架前还是建议关闭应用分身，像微信双开之类的，因为有朋友反馈，开着应用双开安装谷歌框架可能会报错。"
  url="https://www.youtube.com/watch?v=eK78luv5A3Y"
  logo="https://www.gstatic.com/youtube/img/branding/favicon/favicon_144x144.png"
  preview="https://i.ytimg.com/vi/eK78luv5A3Y/maxresdefault.jpg"
/>

::: warning

必须全程打开科学上网！！！

:::

## 准备工作：

<u> 1. 进入 `设置` -> `生物识别和密码` -> `添加锁屏密码` </u>

- 为后续安装方便，此处没有添加锁屏密码的应添加锁屏密码。

<u> 2. 进入 `设置` -> `应用和服务` -> `应用管理` </u>

- 点击右上角 `::` -> `显示系统程序`（点击 `::` 后出现 `隐藏系统程序` 即代表成功）

- 搜索栏搜索 `谷歌`，卸载 `谷歌服务助手` 。

- 搜索栏搜索 `MicroG`，卸载所有服务/框架。

- 搜索栏搜索 `google`，删除所有应用/服务。

- 搜索栏搜索 `备份`，点击进入详细属性后下滑点击 `存储` -> `删除数据` 。

<u> 3. 进入 `设置` -> `应用和服务` -> `应用分身` </u>

- 最新的方法可以不关闭应用分身，若为保险可关闭应用分身。

<u> 4. 进入 `设置` -> `隐私` -> `隐私空间` </u>

- 建议关闭隐私空间。

<u> 5. 进入 `设置` -> 下拉 `系统和更新` </u>

- 点击 `系统导航方式`，为防止出现问题，建议关闭悬浮导航。

- 点击 `纯净模式`，关闭增强防护。

## 一、下载文件包，准备安装

### 1. 下载基本文件

Mediafire云盘下载：[https://www.mediafire.com/file/5tl1mf...](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbktIb3R6d2lmWmpCa0M0RDlTRlRNYjhTQ2NUZ3xBQ3Jtc0trd2N3TFR0ajd3Tlh6TXExcGVMd252cmhWNWVHTVNxNE1VWlkxRk5KS1VBTmVOQzYtTTJHeWwtaUM0dVlKcE1NSy1mNUpWRDRPSzlsTjJERXA1TzZiTFZGSGlROXFWTTJsTXJnWkxhR0dVM0FCYlpGVQ&q=https%3A%2F%2Fwww.mediafire.com%2Ffile%2F5tl1mfylfaf1k9f%2Fmobile6.zip%2Ffile&v=eK78luv5A3Y) 

iCloud云盘下载（备用）：[https://www.icloud.com/iclouddrive/0c...](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbFRiMFVscjBlbzMyZVFfUHI5c3RseW01NFhCZ3xBQ3Jtc0tsSzl3VTlBZWVTTGJYNmVERDktRTQwVTh6eUxKWGNuNEMwMVFBWUFhM0lXRVBqa0M3TU5uc2dpTFJTR2RhMnphZUthM1p4alFsMXR4bG5rdzN6Z19OZFdRemt6Y3FqWWJtYzlLOWc3MjJybzRzcVJKNA&q=https%3A%2F%2Fwww.icloud.com%2Ficlouddrive%2F0cfyakESrH6ZB-RGMOq_QhMIQ%23mobile6&v=eK78luv5A3Y)

打开网址并下载 `mobile6.zip` 到手机，并解压缩。

``` tree
├─GMS
│      01.microg.android.gms.apk
│      02.Google Play Store_40.9.25-23.apk
│      03.com.google.android.gsf-8.apk
│      04.Contacts Sync-29-v10.apk
│
└─Huawei
    └─Backup
        └─backupFiles
            └─2019-12-07_02-08-38-841
                    com.lzplay.helper.apk
                    com.lzplay.helper.tar
                    info.xml
```

<u> 个人备用地址（更新于2024/09/28）：</u>

Dropbox云盘下载：[https://www.dropbox.com/scl/fo/j3d...](https://www.dropbox.com/scl/fo/j3d5iuybo6oor4eq7khy7/AGp4c9k6lO_BjTOGWERfVw0?rlkey=7svdbmsurk8svs7qqhtodoler&st=ppsxbi55&dl=0)

Github库：[https://github.com/shenbourne07/Per...](https://github.com/shenbourne07/Personal-Cloud)

若下载的为压缩包；则先解压缩。

### 2. 添加备份选项

点击系统自带 `文件管理` -> 底部 `浏览` -> ` 内部存储` ->  下滑 `Download` -> 下滑 
`mobile6`

![Step1](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202409281126093.jpg)

长按 `Huawei` 文件夹 -> 底部栏 `复制` -> 底部栏 `其他位置` -> 单击 `内部存储` -> 点击右上角 `√`

出现弹窗 “是否合并” 时候，点击 `应用到全部` -> 点击 `合并`

出现弹窗 “是否替换” 时候，点击 `应用到全部` -> 点击 `替换`

![Step2](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202409281618749.jpg)

## 二、安装谷歌套件

### 1. 激活谷歌服务助手

<u> <b> <i> 恢复谷歌服务助手 </i> </b> </u>

进入 `设置` -> 下拉 `系统和更新`

点击 `日期和时间`，关闭 `自动设置`，将日期调整为 `2019年`

点击 `备份和恢复`，点击右上角 `::` -> `从内部存储恢复` 

- 若没有 `从内部存储恢复`，则是应用没有开启权限。

- 此时应该点击 `备份和恢复`，点击 `外部存储`，允许一系列权限，返回退出 `备份和恢复`。

- 之后再点击进入 `备份和恢复`，即可看到 `从内部存储恢复

点击 2019年12月7日的存档，点击 `应用和数据` -> 点击`恢复` -> 输入密码 `a12345678`

- 如果没有该存档，则是第二步 [添加备份选项](#_2-添加备份选项) 复制错误

<u> <b> <i> 激活谷歌服务助手 </i> </b> </u>

等待恢复完毕后，回到桌面，点击 `谷歌服务助手`，点击 `激活`，并给予权限

- 出现错误不用管，确保已经点击 `激活` 即可。此时即可以退出软件。

<u> <b> <i> 恢复系统时间 </i> </b> </u>

进入 `设置` -> 下拉 `系统和更新` -> `日期和时间` -> 打开 `自动设置`

### 2. 安装 GMS 套件

点击系统自带 `文件管理` -> 底部 `浏览` -> ` 内部存储` ->  下滑 `Download` -> 下滑 
`mobile6`

![Step1](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202409281126093.jpg)

点击 `GMS` 文件夹，按照 `01` 到 `04` 依次安装谷歌套件。无论要求的权限，一律允许。

- 进入安装界面后，打勾 ‘以了解此应用未经检测……’，点击继续安装，输入刚刚设置的锁屏密码。

- 安装完成后，点击 `完成` 继续安装下一个应用。

## 三、配置 GMS 套件

### 1. 配置 `MicroG 服务`

- 进入 `设置` -> `应用和服务` -> `应用管理`

	- 点击右上角 `::` -> `显示系统程序`（点击 `::` 后出现 `隐藏系统程序` 即代表成功）

- 搜索栏搜索 `MicroG`，点击 `MicroG 服务`。

- 进入属性界面，点击右上角 `设置` 图标 -> `Google账号` -> `自我检查`，点开所有选项

- 进入属性界面，点击右上角 `设置` 图标 -> `Google账号` -> `添加Google账号`

	- 若出现网络错误，则是科学上网配置出错

![配置 `MicroG 服务`](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202409281752831.jpg)

### 2.  给予应用权限

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202409281805188.jpg)

对于以上四个应用，应当：

- 给予所有权限（建议全部选择 始终允许）

- 点击 `通知管理`，打开 `允许通知`，给予 `横幅通知` 权限

- 下拉允许 `显示在其他应用上层`（如果有）

![给予应用权限](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202409281808862.jpg)


## 四、注意事项+补充

点开 `Google Play 商店`，如果没有报错成功进入商店页面，则代表成功

- 若报错，则应重启手机；或者检查是否正确配置科学上网。

进入 `设置` -> 下拉 `用户和账户` -> `Google` -> 点击你登录的账户 -> `立即同步`

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202409281816240.jpg)

