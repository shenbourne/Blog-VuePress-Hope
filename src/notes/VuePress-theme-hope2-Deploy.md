---
title: VuePress-theme-hope2 部署个人网站
icon: fab fa-markdown
order: 2
category:
  - 安装教程
tag:
  - VuePress
  - GitHub
  - Git
---

```cardlink
url: https://juejin.cn/post/7261555752586084410
title: "🚀VuePress-theme-hope2 搭建个人网站，万字长文保姆级教程，包含自动部署、评论、搜索等功能 - 掘金"
description: "VuePress 是一个以 Markdown 为中心的静态网站生成器。好处是可以使用 Markdown 来书写内容文档或者博客。 VuePress 诞生的初衷是为了支持 Vue.js 及其子项目的文档"
host: juejin.cn
favicon: https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/static/favicons/favicon-32x32.png
```
  

> 文章同步在公众号：萌萌哒草头将军，欢迎关注
> 
> 我的博客地址：[mmdctjj.github.io/blogs2/](https://link.juejin.cn?target=https%3A%2F%2Fmmdctjj.github.io%2Fblogs2%2F "https://mmdctjj.github.io/blogs2/")
> 
> 对应仓库地址：[github.com/mmdctjj/blo…](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fmmdctjj%2Fblogs2 "https://github.com/mmdctjj/blogs2")

VuePress 是一个以 Markdown 为中心的静态网站生成器。好处是可以使用 Markdown 来书写内容文档或者博客。

VuePress 诞生的初衷是为了支持 Vue.js 及其子项目的文档需求。

在明确你的目标之后，先不着急立马搭建项目。

# 🗺️ 你喜欢哪个主题

## 🚀 选择主题

因为VuePress除了默认的主题外，提供了扩展主题、扩展插件的能力，不同的主题又组织了不同的插件集合来完成开箱即用的功能，

所以，你首先应该使用哪款主题作为你的个人完整风格。

比较热门你的主题有：

- [vuepress默认主题](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fvuejs%2Fvuepress "https://github.com/vuejs/vuepress") 21.7k⭐
- [vuepress-theme-hope](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fvuepress-theme-hope%2Fvuepress-theme-hope "https://github.com/vuepress-theme-hope/vuepress-theme-hope") 1.4k⭐
- [vuepress-theme-reco，（2.0还在测试阶段）](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fvuepress-reco%2Fvuepress-theme-reco-1.x "https://github.com/vuepress-reco/vuepress-theme-reco-1.x") 1.6k⭐
- [vuepress-theme-vdoing](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fxugaoyi%2Fvuepress-theme-vdoing "https://github.com/xugaoyi/vuepress-theme-vdoing") 3.5k⭐

不同主题的之间的最明显的差异就是默认的样式不同，其次就是默认提供的功能不同。

我们看看各个主题默认的样式

### 💎  [默认主题](https://vuepress.vuejs.org/) 案例

vue系列早先版本的官网大多数都是默认主题

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-7805ce56c9ab4c47a392f782f3f0a509~tplv-k3u1fbpfcp-zoom-in-crop-mark_1512_0_0_0.webp)

### 💎  [vuepress-theme-hope](https://theme-hope.vuejs.press/) 案例 

蝉沐风的码场：[www.chanmufeng.com/](https://www.chanmufeng.com/)

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-aa13444c25f46fc1028f935fab84932c_MD5.jpeg)

更多案例：[真实项目 | vuepress-theme-hope](https://theme-hope.vuejs.press/zh/demo/projects.html#%E4%BD%BF%E7%94%A8-vuepress-theme-hope-%E7%9A%84%E6%96%87%E6%A1%A3)

### 💎  [vuepress-theme-reco](http://v1.vuepress-reco.recoluan.com/) 案例 

Chivas-Regal的博客：[Chivas-Regal](https://tech.chivas-regal.top/)

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-5f5f76ddcbbddc12e11ec888c99f06d3_MD5.jpeg)

更多案例：[优秀博客案例 | vuepress-theme-reco](http://v1.vuepress-reco.recoluan.com/views/other/theme-example.html)

### 💎  [vuepress-theme-reco 2.0](https://vuepress-theme-reco.recoluan.com/) 案例 

 SlovinG's Blog：[SlovinG's Blog](https://sloving.top/)

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-a4fc5d567fcf3f8ef1c439f05e75aa30_MD5.jpeg)

更多案例：[案例 | vuepress-reco](https://vuepress-theme-reco.recoluan.com/docs/others/examples.html)

### 💎  [vuepress-theme-vdoing](https://doc.xugaoyi.com/) 案例 

Evan's blog：[Evan's blog](https://xugaoyi.com/)

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-6f1884a664145f9a4a2117cd5271943d_MD5.jpeg)

更多案例：[案例 | vuepress-theme-vdoing](https://doc.xugaoyi.com/pages/5d571c/#%E7%89%B9%E5%88%AB%E7%94%A8%E6%88%B7)

大家可自行选择主题，此处以vuepress-theme-hope为例搭建博客。

主要功能是新增了一些图标、新增了Tag、新增了时间轴等常用功能，

缺点是：功能还不够丰富，图标比较少，无法有效添加摘要、阅读时间、字数统计等功能。

相反，vuepress-theme-hope 这些做的都不错，成为我新的选择。

# 🗺️ 本地部署

<!-- @include: VuePress-theme-hope2-Local-deploy.md -->

# 🗺️ 使用Git上传到GitHub

<!-- @include: Use-Git-to-Submit-Local-Code-to-GitHub.md -->

# 🗺️ 本地部署

<!-- @include: VuePress-theme-hope2-GitHub-deploy.md -->


# 🎉 最后

vuepress-theme-hope 主题通过默认的配置就提供了丰富的开箱即用的功能，使得配置体验相比较与vuepress-theme-reco有了明显的提升。这是我替换博客主题最大的体验，

今天的分享就到这了，如果文中有错误的地方，还请在评论中告诉我，感激不尽。

---

作者：萌萌哒草头将军  
链接：https://juejin.cn/post/7261555752586084410  
来源：稀土掘金  
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。