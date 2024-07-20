---
title: 阿里云OSS基础设置
icon: pic
order: 2
category:
  - 安装教程
tag:
  - Obsidian
  - picGo
---

### 1. 购买阿里云 OSS

进入 [对象存储 OSS 资源包](https://common-buy.aliyun.com/?spm=5176.7933691.J_5253785160.2.31174c59Y8lFmm&commodityCode=ossbag#/buy)，选择适合自己的套餐。

截止截稿40G价格仅为9元/年，由于 **“99计划”** 500GB价格仅为118元/年。

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407122251892.png)

### 2. 创建 Bucket

进入 [OSS管理控制台](https://oss.console.aliyun.com/overview)，选择 **“创建 Bucket”**，填入 **“Bucket名称”** 和 **“地域”** 。其他保持默认即可，点击 **“确定”** 完成创建

::: tip “地域” 的选择

**“地域”** 为连接速度，一般选择常居地附近。但仅相同区域内的产品内网可以互通，不同区域内的产品将使用外网访问，并产生相应的流量费用。

:::

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407122302780.png)


### 3. 跨域设置

进入 Bucket 概览页面。具体网址为 `https://oss.console.aliyun.com/bucket/oss-cn-heyuan/[your-bucket-name]`

进入 **“数据安全”** -> **“跨域设置”**。选择 **“创建规则”**，在 **“来源”** 填入如下信息

```
app://obsidian.md
capacitor://localhost
http://localhost
```

在 **“允许 Methods”** 全部勾选，支持所有请求。

在 **“允许 Header”** 填入：`*`

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407122313984.png)

点击 **“确定”** 完成跨区设置

### 4. 授权设置

::: note Step 1

为笔记 bucket 创建一个子账号，以达成对资源的管理

:::

将鼠标移动至页面右上角，在弹出的悬浮框中选择 **“AccessKey 管理”**

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407122333781.png)

在新页面的弹窗中选择 **“开始使用子账户 AccessKey”**。如果出现安全问题， 可以直接把这个子用户删除掉

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407122335490.png)

选择完毕进入新页面，选择 **“创建用户”**

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407122337600.png)

在 **“创建用户”** 页面，输入 **“登录名称”** 和 **“显示名称”**（什么名字自己定），勾选 **“OpenAPI 调用访问”**。

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407122343017.png)

创建完成后复制 **“AccessKey ID”** 和 **“AccessKey Secrect”**。务必妥善保存亮着，在页面关闭后无法再次获取。

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407122347395.png)

::: note Step 2

为新创建的用户分配管理权限

:::

返回 Bucket 概览页面，进入 **“权限管理”** -> **“Bucket 授权策略”**，点击 **“新建授权”**。

**“授权用户”** 选择子账号，在选择框中选择刚刚创建的子账号。**“授权操作”** 选择 **“完全控制”**。

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407140045290.png)

点击 **“确定”** 完成新建