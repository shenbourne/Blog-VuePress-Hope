---
title: 使用Github Action将Docker镜像转存到阿里云私有仓库
icon: docker
order: 2
category:
  - 安装教程
tag:
  - GitHub
  - Aliyun
  - Docker
  - 1Panel
---

> 作者注：在当今软件开发的世界中，Docker 技术已经成为了不可或缺的一部分。
> 
> 然而，最近由于ZC的原因，国内的知名公开镜像源失效了，许多开发者在使用 Docker 镜像时常常面临一个问题：镜像拉取速度往往较慢，有些镜像无法拉取。
> 
> 为了解决这一问题，大佬技术爬爬虾写了名为 docker_image_pusher 的开源项目，它利用 Github Action 将国外的 Docker 镜像转存到阿里云私有仓库，以提供给国内服务器使用，免费且易于使用。
> 
> 今天我们就介绍下如何将国外的docker镜像转存到自己的阿里云镜像仓库。

## 一、配置阿里云docker镜像仓库

### 1. 登录阿里云容器镜像服务

首先我们需要登录到阿里云容器镜像服务[cr.console.aliyun.com](https://cr.console.aliyun.com/)

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040210385.png)

个人实例可以免费创建3个命名空间，300个镜像，对于我们个人来说已经足够了。

### 2. 创建命令空间

在个人实例下创建一个命名空间，我们需要记住此处创建的命令空间，后边会用到。

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040212712.png)

### 3. 设置凭证

在访问凭证中设置固定密码，我们需要记住密码，以及此处的用户名和仓库地址，后边会用到。

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040213516.png)

## 二、docker_image_pusher 配置

### 1. 项目简介

项目地址：[github.com/tech-shrimp/docker_image_pusher](https://github.com/tech-shrimp/docker_image_pusher)

使用Github Action将国外的Docker镜像转存到阿里云私有仓库，供国内服务器使用，免费易用

- 支持DockerHub, gcr.io, k8s.io, ghcr.io等任意仓库
- 支持最大40GB的大型镜像
- 使用阿里云的官方线路，速度快

### 2. Fork项目

登录Github，Fork项目

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040216184.png)

### 3. 配置环境变量

点击 `Settings` -> `Secret and variables` -> `Actions` -> `New Repository secret`，依次将我们之前配置的阿里云容器镜像服务的值配置到此处：

- `ALIYUN_NAME_SPACE`: 命名空间
- `ALIYUN_REGISTRY`: 仓库地址
- `ALIYUN_REGISTRY_PASSWORD`: 密码
- ` ALIYUN_REGISTRY_USER`: 用户名

  ![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040219290.png)

### 4. 转存镜像

配置完成后修改项目的images.txt文件，将我们要转存的镜像添加上去，提交代码。

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040221090.png)

提交之后会自动进入Github Action构建，如下图所示则为构建成功了。

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040221821.png)

### 5. 获取镜像名称

Docker存在名称相同，但是属于不同命名空间的情况。 如果存在，应当把命名空间作为前缀加在镜像名称前。 

通过 [hub.docker.com](https://hub.docker.com/) 可以查询命名空间。一般选择下载量和 Star 数最多的结果。

下面是一个例子：

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040253833.png)


### 6. 查看镜像

转存成功后我们在阿里云容器镜像服务[cr.console.aliyun.com](https://cr.console.aliyun.com/)中就可以看到我们转存的镜像了

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040223973.png)

点击镜像名称就可以看到我们的镜像地址和基本信息了：

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040254072.png)



## 三、1Panel 使用阿里云镜像仓库

### 1. 添加阿里云镜像仓库

打开 1Panel 容器 - 仓库界面，点击"添加仓库"，输入信息

- 用户名：你的账号名称
- 密码：在“访问凭证”中设置的密码
- 下载地址：registry.cn-hangzhou.aliyuncs.com/[你的命名空间名称]

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040230685.png)

### 2. 解决应用商店下载应用`443: i/o timeout`的错误

在Github仓库的`images.txt`填写对应镜像后，原本下载时显示`443: i/o timeout`的软件就能正常下载了

### 3. 1Panel 推送镜像

推送镜像到阿里云镜像仓库  

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040244141.png)

查看镜像推送成功  

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040244052.png)
