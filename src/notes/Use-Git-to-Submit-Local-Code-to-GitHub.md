---
title: 使用Git将本地代码提交到GitHub
icon: fab fa-markdown
order: 2
category:
  - 安装教程
---

## 🚀 初次使用

### 💎 安装git

1. 打开[Windows下载界面](https://git-scm.com/download/win)，点击正文最前面的“Click here to download”超链接下载git（或者点击[此处](https://github.com/git-for-windows/git/releases/download/v2.43.0.windows.1/Git-2.43.0-64-bit.exe)直接下载git）。

::: tip

其他操作系统请去[Git官网](https://git-scm.com/)自行选择下载版本

:::

2. 双击安装程序，其中选项全部保持默认即可。

3. 安装完成后，在任一文件夹右键打开菜单，如果出现`Open Git GUI here`和`Open Git Bash here`，则说明安装成功。

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/Use-Git-to-Submit-Local-Code-to-GitHub-fdab1192e7c25f6e4e916c95e3209318_MD5.jpeg)

### 💎 将选定仓库初始化为git仓库

1. 在指定文件夹空白处右键鼠标，单击`Open Git Bash here`打开git终端，输入`git init`

```shell
git init
```

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/Use-Git-to-Submit-Local-Code-to-GitHub-b06e48a1494862051793abd10fdeb2dc_MD5.jpeg)

文件夹中出现`.git`文件，则说明初始化成功

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/Use-Git-to-Submit-Local-Code-to-GitHub-956ea4c7e5ae605e24b3fd2b4c9d1640_MD5.jpeg)

### 💎 将本地代码上传至git版本库

1. 将本地代码放入暂存区，输入`git add .`

```shell
git add .
```

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/Use-Git-to-Submit-Local-Code-to-GitHub-40d6636cd494153fa6a17508ccf0ee00_MD5.jpeg)

检查：输入`git status`文件都显示绿色即成功

```shell
git status
```

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/Use-Git-to-Submit-Local-Code-to-GitHub-b6afea351cbbf9aa195ca0371595b1d7_MD5.jpeg)

2. 输入`git commit -m '提交信息'`把暂存区文件放到版本库中

```shell
git commit -m '提交信息'
```

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/Use-Git-to-Submit-Local-Code-to-GitHub-c49d04ce6bec29d45d13203ba703ad5c_MD5.jpeg)

如果没有创建用户信息，则会让你创建一个，账户密码随便填即可。例：

```shell
git config --global user.email "<>"
```

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/Use-Git-to-Submit-Local-Code-to-GitHub-b6c6f0089f486bf05aea89f9d2fa0204_MD5.jpeg)

### 💎 将本地git库与GitHub库连接

1. 创建新的GitHub库

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/Use-Git-to-Submit-Local-Code-to-GitHub-92418a072cf36f81ea35b827074ae6e3_MD5.jpeg)

::: tip
 
为方便其他操作，一般建议将库命名为`<username>.github.io`（如图）

:::

2. 如果第一次使用，需要部署公钥(如果在最后一步将代码提交到github出现因为公钥报错，那就新建一个公钥)

生成公钥指令：

```shell
ssh-keygen -t rsa -C "*@*.com"    #邮箱可以任意填写
```

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/Use-Git-to-Submit-Local-Code-to-GitHub-a52270fa564e3a1af368c77e6689dab6_MD5.jpeg)

查看公钥指令：

```shell
cat ~/.ssh/id_rsa.pub    #查看之后copy 
```

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/Use-Git-to-Submit-Local-Code-to-GitHub-2b7cec9fa59c3303a4a3120cb8378b31_MD5.jpeg)

GitHub线上添加公钥：项目仓库 > Settings > Deploy keys > Add deploy key

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/Use-Git-to-Submit-Local-Code-to-GitHub-a1d0113f27c075b2779427922a3b2bd4_MD5.jpeg)

注意勾选“Allow write access”

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/Use-Git-to-Submit-Local-Code-to-GitHub-8a1f8430f1ec199f9b9ee6bc023bf38f_MD5.jpeg)

3. 本地仓库与远程仓库建立连接，添加远程源，这里我们采用ssh协议的remote源

```shell
git remote add origin <url>    #origin是远程源的名字
```

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/Use-Git-to-Submit-Local-Code-to-GitHub-80c02e42c1030d27db3e94fc9dd5009f_MD5.jpeg)

## 🚀 提交和拉取远程仓库

::: tip

 origin是远程源的源名，可以自定义；master是分支名，是默认的主分支

:::

1. 提交本地仓库代码到远程仓库

```shell
git push -u origin master    
```

2. 拉取远程仓库

```shell
git pull origin master
```

::: details Git错误 error: src refspec xxx does not match any / error: failed to push some refs to 解决方法

**错误原因**：GitHub仓库和本地Git仓库默认名不同。

（由于受到"Black Lives Matter"运动的影响，GitHub 从今年 10 月 1 日起，在该平台上创建的所有新的源代码仓库将默认被命名为 “main”，而不是原先的"master"。）

**解决方法**：把本地的 master 仓库名称修改为远端的 main。命令如下：

```shell
git branch -m oldBranchName newBranchName
```

:::

::: details Git错误 error：src refspec master does not match any 解决方法

**错误原因**：

- 本地需要提交的目录中存在空目录

- 本地的origin和remote origin/master 没有建立关联

**解决方法**：

- 针对第一种错误情况，应在空目录中创建项目

```shell
touch README
git add README
git commit -m "change"
git push origin master
```

- 针对第二种错误情况，应重新建立本地和远程关联

```shell
git remote remove origin
git remote add origin git@github.com:XXX/XXX.github.io.git
git push origin master
```

:::

## 🚀 git 回滚到指定版本并推送到远程分支

-- 本地分支回滚到指定版本 

```shell
git reset --hard <commit ID号> 
```

::: tip 获取commit ID号的方法

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/Use-Git-to-Submit-Local-Code-to-GitHub-b04a8595f9db44dfcb62727c10636f58_MD5.jpeg)

复制下来的ji即为该版本的commit ID号

-- 强制推送到远程分支 

```shell
git push -f origin <branch name>
```

:::

出处：

[提交本地代码到github - 只会玩辅助 - 博客园](https://www.cnblogs.com/wangcuican/p/12522239.html)

[Git 常见错误 之 error: src refspec xxx does not match any / error: failed to push some refs to 简单解决方法\_error: src refspec master does not match any-CSDN博客](https://blog.csdn.net/u014361280/article/details/109703556)
