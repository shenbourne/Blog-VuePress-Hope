---
title: VuePress-theme-hope2 将个人网站部署到GitHub
icon: page
order: 2
category:
  - 安装教程
tag:
  - VuePress
  - GitHub
---

### 部署到 GitHub Pages

如果你在使用模板，且在创建过程中选择了创建自动部署文档的 GitHub 工作流，那么你唯一要做的就是在 `docs/.config.js` 中设置正确的 [`base`](https://vuejs.press/zh/reference/config.html#base) 选项。

- 如果你打算发布到 `https://<USERNAME>.github.io/`，则可以省略这一步，因为 `base` 默认即是 `"/"`。
    
- 如果你打算发布到 `https://<USERNAME>.github.io/<REPO>/`（也就是说你的仓库在 `https://github.com/<USERNAME>/<REPO>`），则将 `base` 设置为 `"/<REPO>/"`。
    
当操作完成后，你应该前往 GitHub 仓库的设置页面，选择 `gh-pages` 作为 GitHub Pages 的源。
    
::: warning Github 教程

关于 GitHub 的相关教程，你可以参考 [GitHub 简介](https://mister-hope.com/code/github/)。

:::

::: tip 不过我在部署时遇到问题：

```js
Dependencies lock file is not found in /home/{username}/runners.../repository_name. Supported file patterns: package-lock.json,yarn.lock
```

需要修改下`workflows`文件：去除npm cache设置

```sh
 - name: 设置 Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18
        #  cache: npm
```

cicd执行成功后，会多一个部署`gh-pages`分支。

:::

部署`gh-pages`分支是文件流中配置的，你可以修改

```sh
      - name: 部署文档
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          # 这是文档部署到的分支名称
          branch: gh-pages
          folder: src/.dist
```

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-e14fe5461cdfb08b6e0a1932d492ae4c_MD5.jpeg)

接着最重要的一步，到仓库的设置页面设置如下的内容：

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-a55a2d45b21f581296d09b02a062a037_MD5.jpeg)

该设置的意思是，将选中的分支内容部署在github自带的页面服务中。

接着点击`save`按钮，就可以去对应的站点访问了。

我的站点：[mmdctjj.github.io/blogs2/](https://link.juejin.cn?target=https%3A%2F%2Fmmdctjj.github.io%2Fblogs2%2F "https://mmdctjj.github.io/blogs2/")

### 添加评论功能

不同的插件，评论的实现原理不同，我接触过最早的原理是通过将评论信息映射到仓库的issue中。

然而，后来开始流行`Discussions`，这也是`vuepress-theme-hope`推荐的方式，

> 如果你的博客面向程序员，请使用`Giscus`，面向大众请选择`Waline`, 所以我选择了`Giscus`

首先需要你创建一个空的仓库。其次，由于评论需要用户登录到GitHub，所以，我们还需要提供登录应用的服务。

这里我们不用担心，因为Github为我们提供了简单的登陆应用的功能：`giscus`,

首先安装Giscus：[GitHub Apps - giscus · GitHub](https://github.com/apps/giscus)

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-e13154e3efd91f784218615bc9adf9ca_MD5.jpeg)

点击`install`按钮，在配置详情页中选择对应的生效仓库。（这里我选择仅仅对评论仓库生效）

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-ea99fa53fe4252254d77627d4f0bf988_MD5.jpeg)

然后回到评论仓库，点击`seething`，选中`Feature`下的`Discussions`

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-a102162cac6499c56a4540d346d717fb_MD5.jpeg)

点击`set up discussions`，默认的文本不需要修改，点击提交即可出现如下页面，说明该功能启用成功。

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-a6d3618658113f74ca726cee63af6663_MD5.jpeg)

接着，我们前往[giscus.app/zh-CN](https://giscus.app/zh-CN) 设置你的仓库和分类

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-3cb268874b44a1c4aa62dbb4fd6d6496_MD5.jpeg)

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-bc8fc4bd00b33c61d4f728f3bb7e7527_MD5.jpeg)

在启用栏目复制以下几个信息。

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-0a298ebbbc92b19922ed10f8f6cf4bdd_MD5.jpeg)

接着将以下信息复到`theme.ts`即可：

```js title="\src\.vuepress\theme.ts"
  plugins: {
    comment: {
      // You should generate and use your own comment service
      provider: "Giscus",
      repo: "mmdctjj/blogs-comments",
      repoId: "xxxx", // 替换下
      category: "Announcements",
      categoryId: "xxxx" // 替换下
    },
 }
```

此时当我们评论之后，在评论仓库查看，

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-14d4de4f357aebc829a2a4840e049577_MD5.jpeg)

### Github pages使用自定义域名访问

1. 购买域名并配置DNS（以cloudflare为例）

2. 点进自己域名，并添加DNS记录

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-7faca8c480b85853fca02061b3c21fe4_MD5.jpeg)

3. 配置记录

|key|value|comment|
|---|---|---|
|记录类型|需选择“CNAME”|CNAME记录可以将\<username>.github.io指向购买的域名|
|名称|可填写“www”或“blog”|这取决你网站的个人用途。如我填写“blog”时，shenbourne.github.io会指向blog.shenbourne.com|
|目标|填写“\<username>.github.io”|此处username为GitHub用户名。例如我的用户名是shenbourne，则我填写“shenbourne.github.io”

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-ffe655d90d28fa9c9f4fb09e378236dd_MD5.jpeg)

填好后点击保存

4. 绑定到Github Pages：项目仓库 > Settings > Pages > Custom domain，在Custom domain中填写你在步骤2中配置好的域名，点击“Save”。

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-4103fe51569ff733913576ed9068e648_MD5.jpeg)

GitHub会花费一点时间做DNS check，成功时你能看到成功的提示。

5. 再耐心等待一段时间（通常是十余分钟）后，在浏览器输入自定义的域名，即可打开你的博客
