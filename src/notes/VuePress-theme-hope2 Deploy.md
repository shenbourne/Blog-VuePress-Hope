---
title: VuePress-theme-hope2 搭建个人网站
icon: fab fa-markdown
order: 2
category:
  - 搭建教程
tag:
  - VuePress
  - Deploy
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

## 🚀 你喜欢哪个主题

因为VuePress除了默认的主题外，提供了扩展主题、扩展插件的能力，不同的主题又组织了不同的插件集合来完成开箱即用的功能，

所以，你首先应该使用哪款主题作为你的个人完整风格。

比较热门你的主题有：

- [vuepress默认主题](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fvuejs%2Fvuepress "https://github.com/vuejs/vuepress") 21.7k⭐
- [vuepress-theme-hope](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fvuepress-theme-hope%2Fvuepress-theme-hope "https://github.com/vuepress-theme-hope/vuepress-theme-hope") 1.4k⭐
- [vuepress-theme-reco，（2.0还在测试阶段）](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fvuepress-reco%2Fvuepress-theme-reco-1.x "https://github.com/vuepress-reco/vuepress-theme-reco-1.x") 1.6k⭐
- [vuepress-theme-vdoing](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fxugaoyi%2Fvuepress-theme-vdoing "https://github.com/xugaoyi/vuepress-theme-vdoing") 3.5k⭐

不同主题的之间的最明显的差异就是默认的样式不同，其次就是默认提供的功能不同。

比较热门的主题有：

- [vuepress默认主题](https://github.com/vuejs/vuepress) 22.2k⭐
- [vuepress-theme-hope](https://github.com/vuepress-theme-hope/vuepress-theme-hope) 1.7k⭐
- [vuepress-theme-reco](https://github.com/vuepress-reco/vuepress-theme-reco) 472⭐
- [vuepress-theme-vdoing](https://github.com/xugaoyi/vuepress-theme-vdoing) 4k⭐

不同主题的之间的最明显的差异就是默认的样式不同，其次就是默认提供的功能不同。

我们看看各个主题默认的样式

### [默认主题](https://vuepress.vuejs.org/) 案例

vue系列早先版本的官网大多数都是默认主题

![](/assets/VuePress-theme-hope2-Deploy/7805ce56c9ab4c47a392f782f3f0a509~tplv-k3u1fbpfcp-zoom-in-crop-mark_1512_0_0_0.webp)

### [vuepress-theme-hope](https://theme-hope.vuejs.press/) 案例 

蝉沐风的码场：[www.chanmufeng.com/](https://www.chanmufeng.com/)

![](/assets/VuePress-theme-hope2-Deploy/aa13444c25f46fc1028f935fab84932c_MD5.jpeg)

更多案例：[真实项目 | vuepress-theme-hope](https://theme-hope.vuejs.press/zh/demo/projects.html#%E4%BD%BF%E7%94%A8-vuepress-theme-hope-%E7%9A%84%E6%96%87%E6%A1%A3)

### [vuepress-theme-reco](http://v1.vuepress-reco.recoluan.com/) 案例 

Chivas-Regal的博客：[Chivas-Regal](https://tech.chivas-regal.top/)

![](/assets/VuePress-theme-hope2-Deploy/5f5f76ddcbbddc12e11ec888c99f06d3_MD5.jpeg)

更多案例：[优秀博客案例 | vuepress-theme-reco](http://v1.vuepress-reco.recoluan.com/views/other/theme-example.html)

### [vuepress-theme-reco 2.0](https://vuepress-theme-reco.recoluan.com/) 案例 

 SlovinG's Blog：[SlovinG's Blog](https://sloving.top/)

![](/assets/VuePress-theme-hope2-Deploy/a4fc5d567fcf3f8ef1c439f05e75aa30_MD5.jpeg)

更多案例：[案例 | vuepress-reco](https://vuepress-theme-reco.recoluan.com/docs/others/examples.html)

### [vuepress-theme-vdoing](https://doc.xugaoyi.com/) 案例 

Evan's blog：[Evan's blog](https://xugaoyi.com/)

![](/assets/VuePress-theme-hope2-Deploy/6f1884a664145f9a4a2117cd5271943d_MD5.jpeg)

更多案例：[案例 | vuepress-theme-vdoing](https://doc.xugaoyi.com/pages/5d571c/#%E7%89%B9%E5%88%AB%E7%94%A8%E6%88%B7)

大家可自行选择主题，此处以vuepress-theme-hope为例搭建博客。

主要功能是新增了一些图标、新增了Tag、新增了时间轴等常用功能，

缺点是：功能还不够丰富，图标比较少，无法有效添加摘要、阅读时间、字数统计等功能。

相反，vuepress-theme-hope 这些做的都不错，成为我新的选择。

## 🚀 运行环境设置

### 💎 编辑器

一个方便快捷的编辑器在博客的搭建过程是功不可没的。推荐用VSCode编写和运行VuePress项目

1. 在[下载界面](https://code.visualstudio.com/)点击左侧的蓝色按钮，选择你的操作系统，并下载。

2. 双击安装包打开，同意用户协议。

3. 在下载过程中 ，请务必**全选**下列选项：

![](/assets/VuePress-theme-hope2-Deploy/2ee74344037e2e7951a0807c042cd89c_MD5.jpeg)

4. 在 VS Code 初次启动后，若未提前安装 Git 可能会提示未找到 Git 软件，忽略即可。

5. 推荐立即执行简体中文扩展安装以保证界面语言为简体中文。操作方法：

	1. 单击左侧导航栏的“Extensions”按钮。
	2. 在弹出的输入框中输入“chinese”。
	3. 点击第一个选项卡上的“Install”按钮。若是繁体用户，则应点击第二个选项卡上的“Install”按钮。
	4. 在下载完成后，左下角会出现弹窗，点击弹窗中的“Change Language and Restart”，等待重启后即安装完毕。

![](/assets/VuePress-theme-hope2-Deploy/c046280014369794e10d2751ecaaf526_MD5.jpeg)

> [!tip]
>当你安装 VS Code 并第一次打开的时候，VS Code 会自动检测当前系统语言并在右下角推荐你安装对应语言的扩展，点击按钮即可自动安装。

### 💎 Node.js

> [!Introduce]
> [Node.js®open in new window](https://nodejs.org/zh-cn/) 是一个基于 [Chrome V8 引擎open in new window](https://v8.dev/) 的 JavaScript 运行时环境。

你需要下载并安装最新的长期维护版。

1. 点击 [下载地址](https://nodejs.org/en) 左侧的绿色按钮 (LTS)。

2. 运行安装包，保持全部默认即可

> [!important]
>如果你真的是个小白，请不要改默认安装目录，以免你在出现问题时找不到对应的文件夹。

Node.js 本身只会占据几十 M 的空间!

### 💎 pnpm

在你安装 Node.js 之后，在终端中输入下列命令启用 corepack:

```shell
corepack enable
```

> [!tip]
>我们推荐你使用 pnpm 作为项目管理器，因为 VuePress 和 VuePress Theme Hope 都是通过 pnpm 来管理依赖的。
>
>pnpm 的一些功能可以保证你拥有正确的依赖，并且它能加速安装。

但是如果在使用pnpm安装的时候出现了错误，改为使用npm是一种不赖的选择

## 🚀 搭建项目

 ### 💎 选择项目位置

为了避免偶然间触发一些奇怪的问题，而你自己不会解决，请尽量避免使用包含中文文字、表情符号或空格的文件路径 (不好的例子: `C:\Users\小张\Desktop\VuePress 项目\Hope 主题❤️\`)。

建议使用纯英文路径 (好的例子: `D:\projects\vuepress-theme-hope\`)

### 💎 初始化项目

如果你选择了一个主题，请务必使用该主题提供的脚手架工具创建项目。这样可以减少很多配置上的麻烦。

### 初始化项目

如果你选择了一个主题，请务必使用该主题提供的脚手架工具创建项目。这样可以减少很多配置上的麻烦。

在选定的文件夹中打开终端。

::: tabs

@tab 在Mac中打开终端

右键点击文件夹，然后选择”New Terminal at Folder”。

@tab 在Ubuntu中打开终端

右键点击文件夹，然后选择”Open in Terminal”。

@tab:active 在Windows中打开终端

使用文件管理器打开对应文件夹，然后在上方的地址栏中输入 `cmd` 并按下回车。

:::

::: code-tabs#shell

@tab pnpm

```shell
pnpm create vuepress-theme-hope my-docs
```

@tab yarn

```shell
yarn create vuepress-theme-hope my-docs
```

@tab:active npm

```shell
npm init vuepress-theme-hope my-docs
```

:::

::: tip 文件夹参数

这里的 `my-docs` 是一个参数，代表 VuePress Theme Hope 项目的文件夹名称，在本教程中，我们将项目生成至当前目录下的 `my-docs` 文件夹。

如果你有需求，你可以更改此参数来使用一个新文件夹名称。

:::

::: tip 中文显示

如果你的英语很不好，请在第一次选择中通过键盘 `↓` 选择 `简体中文` 并回车来在后续流程中使用中文进行显示。

:::

::: tip 开发服务器

如果你在模板初始化成功后选择立即启动开发服务器，稍等片刻，你就可以在浏览器地址栏输入 `localhost:8080/` 访问开发服务器了。

:::

```js title="output"
Need to install the following packages:
	create-vuepress-theme-hope@2.0.0-beta.233 
Ok to proceed? (y) y
? Select a language to display / 选择显示语言 简体中文
? 选择包管理器 npm
? 你想要使用哪个打包器？ vite
生成 package.json...
? 设置应用名称 shenb-blog
? 设置应用版本号 2.0.0
? 设置应用描述 A project of vuepress-theme-hope
? 设置协议 MIT
? 项目需要用到多语言么？ No
? 是否需要一个自动部署文档到 GitHub Pages 的工作流？ Yes
? 你想要创建什么类型的项目？ blog
生成模板...
? 选择你想使用的源 当前源
安装依赖...
这可能需要数分钟，请耐心等待.
我们无法正确输出子进程的进度条，所以进程可能会看似未响应
added 293 packages in 26s
模板已成功生成!
```

初始化目录结构如下

![](/assets/VuePress-theme-hope2-Deploy/d6c8fb22be4f418abf38ef344030fd7c~tplv-k3u1fbpfcp-zoom-in-crop-mark_1512_0_0_0.webp)

## 🚀 首页配置

其中，src 目录下的 `README.md`即为博客或者文档的首页。

等待下载完毕，执行 `npm run docs:dev`

打开页面，可以看到博客的首页如下：

![](/assets/VuePress-theme-hope2-Deploy/adc22b537dca1536f0fb1e74f80eca9e_MD5.jpeg)

可以通过设置`heroFullScreen: false`，关闭hero背景全屏。

下滑之后文章的列表如下：

![](/assets/VuePress-theme-hope2-Deploy/715154480d5ac408e5dad8b62398cd75_MD5.jpeg)

文章的列表来自于项目中所有的markdown文件，你可以在每个md文件的frontmatter中设置文章的标题、封面、分类、标签、日期、是否在文章列表中显示。

```md
---
title: 🚀🚀vue3自定义指令实践
isTimeLine: true
date: 2023-07-03
category:
  - 前端
tag:
  - JavaScript
  - Vue
---
```


通过设置`article` 为 `false`将文章在列表中排除。

站点的基本信息、顶部的hero信息、项目链接、底部的footer信息都可以在`README.md`中配置。

我的配置如下：具体可以参考：[博客主页 Frontmatter 配置 | vuepress-theme-hope](https://theme-hope.vuejs.press/zh/config/frontmatter/blog-home.html)

```
home: false
layout: BlogHome
icon: home
title: 首页
heroImage: /logo.svg
heroText: 萌萌哒草头将军
heroFullScreen: false
tagline: 千里之行，始于足下
projects:
  - icon: react
    name: RaETable
    desc: 一款开箱即用的antd表格组件库
    link: https://mmdctjj.github.io/raetable
  - icon: setting
    name: console-loader
    desc: 自动清除其他开发者console的loader
    link: https://github.com/mmdctjj/remove-others-console-loader


footer: 萌萌哒草头将军

```

## 🚀 导航栏

在开始之前你需要明确，你的导航栏需求是啥样的（大白话就是哪些栏目需要在侧边栏展示，哪些在侧边栏展示）

我的思路是，根据文章的分类，将相同的分类文章放在同一目录下，每个目录对应一个导航栏目。

![](/assets/VuePress-theme-hope2-Deploy/afe5a87db78a22a56906383692d3af57_MD5.jpeg)

导航栏的相关设置在 `navbar.ts`文件中。

默认为字符串，对应 src 目录下的文件路径，你可以省略 `.md` 扩展名，以 `/` 结尾的路径会被推断为 `/README.md`。

例如：

```js title="\src\.vuepress\navbar.ts"
import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/", // 对应首页，即src/README.md
  '/react/', // 对应src/react/README.md
]);

```

也可以是对象，基本格式如下：


```js title="\src\.vuepress\navbar.ts"
import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/posts/", // 对应 src/posts 目录
    children: [
      {
        text: "苹果",
        icon: "pen-to-square",
        prefix: "apple/", // 对应 src/posts/apple 目录
        children: [
          { text: "苹果1", icon: "pen-to-square", link: "1" },
          { text: "苹果2", icon: "pen-to-square", link: "2" },
          "3",
          "4",
        ],
      },
      "tomato",
      "strawberry",
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/", // link代码外链地址
  },
]);

```

我的设置为：

```js title="\src\.vuepress\navbar.ts"
import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: 'React系列',
    icon: 'react',
    link: '/react/'
  },
  {
    text: 'Vue系列',
    icon: 'vue',
    link: '/vue/'
  },
  {
    text: 'Vite系列',
    icon: 'tool',
    link: '/vite/'
  },
  {
    text: '新框架尝鲜系列',
    icon: 'geometry',
    link: '/framework/'
  },
  {
    text: '杂谈',
    icon: 'article',
    link: '/posts/'
  },
  {
    text: '标签',
    icon: 'tag',
    link: '/tag/javascript/'
  },
  {
    text: '分类',
    icon: 'categoryselected',
    link: '/category/前端/'
  },
  {
    text: '时间轴',
    icon: 'time',
    link: '/timeline/'
  },
]);

```

我将一些默认的路由也加进了导航栏配置中，比如时间轴、标签、分类等。

![](/assets/VuePress-theme-hope2-Deploy/9cc52ff1585e6e6202033698b3484606_MD5.jpeg)

## 🚀 侧边栏

侧边栏的配置在 `sidebar.ts`中

侧边栏的配置，我们可以分两种情况：全局导航栏、根据每个导航栏栏目分离式导航栏。

### 💎 全局侧边栏配置

你可以设置侧边栏导航和导航栏的路由一一对应，这样就相当于是全局的侧边栏。

对于侧边栏的具体条目，可以通过设置`children: "structure"`根据当前目录下的文件名称自动生成。


```js title="\src\.vuepress\sidebar.ts"
import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "React系列",
      icon: "react",
      prefix: "react/",
      children: "structure",
    },
    {
      text: "Vue系列",
      icon: "vue",
      prefix: "vue/",
      children: "structure",
    },
    {
      text: "Vite系列",
      icon: "tool",
      prefix: "vite/",
      children: "structure",
    },
    {
      text: "新框架尝鲜系列",
      icon: "geometry",
      prefix: "framework/",
      children: "structure",
    },
    {
      text: "杂谈",
      icon: "study",
      prefix: "posts/",
      children: "structure",
    },
    // "intro",
    // "slides",
  ],
});


```

此时页面侧边栏如下图

![](/assets/VuePress-theme-hope2-Deploy/750678252dca76d05e961648cd4c4603_MD5.jpeg)

### 💎 分离式导航栏

分离式菜单配置更简洁，如下所示：当设置`structure`时，默认根据目录下的文件自动生成侧边栏。

```js title="\src\.vuepress\sidebar.ts"
import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/react/":  "structure",
  "/framework/":  "structure",
  "/vite/":  "structure",
  "/vue/":  "structure",
  "/posts/":  "structure",
});

```

![](/assets/VuePress-theme-hope2-Deploy/cc16a07b5d6cdcc2ce8bd805dfe53dd2_MD5.jpeg)

### 💎 自动生成目录页面

另外，我们还根据文件夹下的文件列表自动为每个文件夹生成目录页面。我们只需要在`theme.ts`中添加如下设置。


```js title="\src\.vuepress\theme.ts"
plugins: {
    autoCatalog: {
      index: true
    },
}
```

就可以自动生成目录页面了。例如：

![](/assets/VuePress-theme-hope2-Deploy/9b379d0629ac655174377c76c8f00c1d_MD5.jpeg)


## 🚀 [搜索](https://theme-hope.vuejs.press/zh/guide/feature/search.html)功能

该主题内置了几种常见搜索插件的支持，你只需下载你喜欢的插件和配置文件即可，我使用的是`vuepress-plugin-search-pro`插件，配置参考的官方配置。

1. 安装 `vuepress-plugin-search-pro`

::: code-tabs#shell

@tab pnpm

```sh
pnpm add -D vuepress-plugin-search-pro
```

@tab yarn

```sh
yarn add -D vuepress-plugin-search-pro
```

@tab:active

```sh
npm i -D vuepress-plugin-search-pro
```

:::

2. 在主题选项中配置 `plugins.searchPro`。

你可以将 `plugins.searchPro` 设置为 `true` 来直接启用它，或者将其设置为一个对象来自定义插件。

%%
```js
plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category as any,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag as any,
          formatter: "标签：$content",
        },
      ],
    }),
  ]

```
%%

```js title="\src\.vuepress\config.ts"
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  theme: hopeTheme({
    plugins: {
      searchPro: true,
      // searchPro: {
      //   插件选项
      // },
    },
  }),
});

```
效果如下：

![](/assets/VuePress-theme-hope2-Deploy/fb8aa9698875c3683416ea56928db52b_MD5.jpeg)

## 🚀 自动部署

该主题已经自动添加了`workflows`文件，你只需添加仓库，修改触发分支。

不过我在部署时遇到问题：

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

cicd执行成功后，会多一个部署`gh-pages`分支，这是文件流中配置的，你可以修改

```sh
      - name: 部署文档
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          # 这是文档部署到的分支名称
          branch: gh-pages
          folder: src/.vuepress/dist
```

![](/assets/VuePress-theme-hope2-Deploy/e14fe5461cdfb08b6e0a1932d492ae4c_MD5.jpeg)

接着最重要的一步，到仓库的设置页面设置如下的内容：

![](/assets/VuePress-theme-hope2-Deploy/a55a2d45b21f581296d09b02a062a037_MD5.jpeg)

该设置的意思是，将选中的分支内容部署在github自带的页面服务中。

接着点击`save`按钮，就可以去对应的站点访问了。

我的站点：[mmdctjj.github.io/blogs2/](https://link.juejin.cn?target=https%3A%2F%2Fmmdctjj.github.io%2Fblogs2%2F "https://mmdctjj.github.io/blogs2/")

## 🚀 添加评论功能

不同的插件，评论的实现原理不同，我接触过最早的原理是通过将评论信息映射到仓库的issue中。

然而，后来开始流行`Discussions`，这也是`vuepress-theme-hope`推荐的方式，

> 如果你的博客面向程序员，请使用`Giscus`，面向大众请选择`Waline`, 所以我选择了`Giscus`

首先需要你创建一个空的仓库。其次，由于评论需要用户登录到GitHub，所以，我们还需要提供登录应用的服务。

这里我们不用担心，因为Github为我们提供了简单的登陆应用的功能：`giscus`,

首先安装Giscus：[GitHub Apps - giscus · GitHub](https://github.com/apps/giscus)

![](/assets/VuePress-theme-hope2-Deploy/e13154e3efd91f784218615bc9adf9ca_MD5.jpeg)

点击`install`按钮，在配置详情页中选择对应的生效仓库。（这里我选择仅仅对评论仓库生效）

![](/assets/VuePress-theme-hope2-Deploy/ea99fa53fe4252254d77627d4f0bf988_MD5.jpeg)

然后回到评论仓库，点击`seething`，选中`Feature`下的`Discussions`

![](/assets/VuePress-theme-hope2-Deploy/a102162cac6499c56a4540d346d717fb_MD5.jpeg)

点击`set up discussions`，默认的文本不需要修改，点击提交即可出现如下页面，说明该功能启用成功。

![](/assets/VuePress-theme-hope2-Deploy/a6d3618658113f74ca726cee63af6663_MD5.jpeg)

接着，我们前往[giscus.app/zh-CN](https://giscus.app/zh-CN) 设置你的仓库和分类

![](/assets/VuePress-theme-hope2-Deploy/3cb268874b44a1c4aa62dbb4fd6d6496_MD5.jpeg)

![](/assets/VuePress-theme-hope2-Deploy/bc8fc4bd00b33c61d4f728f3bb7e7527_MD5.jpeg)

在启用栏目复制以下几个信息。

![](/assets/VuePress-theme-hope2-Deploy/0a298ebbbc92b19922ed10f8f6cf4bdd_MD5.jpeg)

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

![](/assets/VuePress-theme-hope2-Deploy/14d4de4f357aebc829a2a4840e049577_MD5.jpeg)

## 🎉 最后

vuepress-theme-hope 主题通过默认的配置就提供了丰富的开箱即用的功能，使得配置体验相比较与vuepress-theme-reco有了明显的提升。这是我替换博客主题最大的体验，

今天的分享就到这了，如果文中有错误的地方，还请在评论中告诉我，感激不尽。

---

作者：萌萌哒草头将军  
链接：https://juejin.cn/post/7261555752586084410  
来源：稀土掘金  
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。