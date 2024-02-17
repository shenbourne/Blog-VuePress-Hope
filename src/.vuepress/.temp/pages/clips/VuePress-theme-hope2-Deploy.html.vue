<template><div><div class="language-cardlink line-numbers-mode" data-ext="cardlink" data-title="cardlink"><pre v-pre class="language-cardlink"><code>url: https://juejin.cn/post/7261555752586084410
title: &quot;🚀VuePress-theme-hope2 搭建个人网站，万字长文保姆级教程，包含自动部署、评论、搜索等功能 - 掘金&quot;
description: &quot;VuePress 是一个以 Markdown 为中心的静态网站生成器。好处是可以使用 Markdown 来书写内容文档或者博客。 VuePress 诞生的初衷是为了支持 Vue.js 及其子项目的文档&quot;
host: juejin.cn
favicon: https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/static/favicons/favicon-32x32.png
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>VuePress 是一个以 Markdown 为中心的静态网站生成器。好处是可以使用 Markdown 来书写内容文档或者博客。</p>
<p>VuePress 诞生的初衷是为了支持 Vue.js 及其子项目的文档需求。</p>
<p>在明确你的目标之后，先不着急立马搭建项目。</p>
<h2 id="一、你喜欢哪个主题" tabindex="-1"><a class="header-anchor" href="#一、你喜欢哪个主题"><span>一、你喜欢哪个主题</span></a></h2>
<h3 id="_1-选择主题" tabindex="-1"><a class="header-anchor" href="#_1-选择主题"><span>1. 选择主题</span></a></h3>
<p>因为VuePress除了默认的主题外，提供了扩展主题、扩展插件的能力，不同的主题又组织了不同的插件集合来完成开箱即用的功能，</p>
<p>所以，你首先应该使用哪款主题作为你的个人完整风格。</p>
<p>比较热门你的主题有：</p>
<ul>
<li><a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fvuejs%2Fvuepress" title="https://github.com/vuejs/vuepress" target="_blank" rel="noopener noreferrer">vuepress默认主题<ExternalLinkIcon/></a> 21.7k⭐</li>
<li><a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fvuepress-theme-hope%2Fvuepress-theme-hope" title="https://github.com/vuepress-theme-hope/vuepress-theme-hope" target="_blank" rel="noopener noreferrer">vuepress-theme-hope<ExternalLinkIcon/></a> 1.4k⭐</li>
<li><a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fvuepress-reco%2Fvuepress-theme-reco-1.x" title="https://github.com/vuepress-reco/vuepress-theme-reco-1.x" target="_blank" rel="noopener noreferrer">vuepress-theme-reco，（2.0还在测试阶段）<ExternalLinkIcon/></a> 1.6k⭐</li>
<li><a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fxugaoyi%2Fvuepress-theme-vdoing" title="https://github.com/xugaoyi/vuepress-theme-vdoing" target="_blank" rel="noopener noreferrer">vuepress-theme-vdoing<ExternalLinkIcon/></a> 3.5k⭐</li>
</ul>
<p>不同主题的之间的最明显的差异就是默认的样式不同，其次就是默认提供的功能不同。</p>
<p>我们看看各个主题默认的样式</p>
<h4 id="_1-默认主题-案例" tabindex="-1"><a class="header-anchor" href="#_1-默认主题-案例"><span>1. <a href="https://vuepress.vuejs.org/" target="_blank" rel="noopener noreferrer">默认主题<ExternalLinkIcon/></a> 案例</span></a></h4>
<p>vue系列早先版本的官网大多数都是默认主题</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-7805ce56c9ab4c47a392f782f3f0a509~tplv-k3u1fbpfcp-zoom-in-crop-mark_1512_0_0_0.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_2-vuepress-theme-hope-案例" tabindex="-1"><a class="header-anchor" href="#_2-vuepress-theme-hope-案例"><span>2. <a href="https://theme-hope.vuejs.press/" target="_blank" rel="noopener noreferrer">vuepress-theme-hope<ExternalLinkIcon/></a> 案例</span></a></h4>
<p>蝉沐风的码场：<a href="https://www.chanmufeng.com/" target="_blank" rel="noopener noreferrer">www.chanmufeng.com/<ExternalLinkIcon/></a></p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-aa13444c25f46fc1028f935fab84932c_MD5.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>更多案例：<a href="https://theme-hope.vuejs.press/zh/demo/projects.html#%E4%BD%BF%E7%94%A8-vuepress-theme-hope-%E7%9A%84%E6%96%87%E6%A1%A3" target="_blank" rel="noopener noreferrer">真实项目 | vuepress-theme-hope<ExternalLinkIcon/></a></p>
<h4 id="_3-vuepress-theme-reco-案例" tabindex="-1"><a class="header-anchor" href="#_3-vuepress-theme-reco-案例"><span>3. <a href="http://v1.vuepress-reco.recoluan.com/" target="_blank" rel="noopener noreferrer">vuepress-theme-reco<ExternalLinkIcon/></a> 案例</span></a></h4>
<p>Chivas-Regal的博客：<a href="https://tech.chivas-regal.top/" target="_blank" rel="noopener noreferrer">Chivas-Regal<ExternalLinkIcon/></a></p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-5f5f76ddcbbddc12e11ec888c99f06d3_MD5.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>更多案例：<a href="http://v1.vuepress-reco.recoluan.com/views/other/theme-example.html" target="_blank" rel="noopener noreferrer">优秀博客案例 | vuepress-theme-reco<ExternalLinkIcon/></a></p>
<h4 id="_4-vuepress-theme-reco-2-0-案例" tabindex="-1"><a class="header-anchor" href="#_4-vuepress-theme-reco-2-0-案例"><span>4. <a href="https://vuepress-theme-reco.recoluan.com/" target="_blank" rel="noopener noreferrer">vuepress-theme-reco 2.0<ExternalLinkIcon/></a> 案例</span></a></h4>
<p>SlovinG's Blog：<a href="https://sloving.top/" target="_blank" rel="noopener noreferrer">SlovinG's Blog<ExternalLinkIcon/></a></p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-a4fc5d567fcf3f8ef1c439f05e75aa30_MD5.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>更多案例：<a href="https://vuepress-theme-reco.recoluan.com/docs/others/examples.html" target="_blank" rel="noopener noreferrer">案例 | vuepress-reco<ExternalLinkIcon/></a></p>
<h4 id="_5-vuepress-theme-vdoing-案例" tabindex="-1"><a class="header-anchor" href="#_5-vuepress-theme-vdoing-案例"><span>5. <a href="https://doc.xugaoyi.com/" target="_blank" rel="noopener noreferrer">vuepress-theme-vdoing<ExternalLinkIcon/></a> 案例</span></a></h4>
<p>Evan's blog：<a href="https://xugaoyi.com/" target="_blank" rel="noopener noreferrer">Evan's blog<ExternalLinkIcon/></a></p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-6f1884a664145f9a4a2117cd5271943d_MD5.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>更多案例：<a href="https://doc.xugaoyi.com/pages/5d571c/#%E7%89%B9%E5%88%AB%E7%94%A8%E6%88%B7" target="_blank" rel="noopener noreferrer">案例 | vuepress-theme-vdoing<ExternalLinkIcon/></a></p>
<p>大家可自行选择主题，此处以vuepress-theme-hope为例搭建博客。</p>
<p>主要功能是新增了一些图标、新增了Tag、新增了时间轴等常用功能，</p>
<p>缺点是：功能还不够丰富，图标比较少，无法有效添加摘要、阅读时间、字数统计等功能。</p>
<p>相反，vuepress-theme-hope 这些做的都不错，成为我新的选择。</p>
<h2 id="二、本地部署" tabindex="-1"><a class="header-anchor" href="#二、本地部署"><span>二、本地部署</span></a></h2>
<h3 id="运行环境设置" tabindex="-1"><a class="header-anchor" href="#运行环境设置"><span>运行环境设置</span></a></h3>
<h4 id="_1-编辑器" tabindex="-1"><a class="header-anchor" href="#_1-编辑器"><span>1. 编辑器</span></a></h4>
<p>一个方便快捷的编辑器在博客的搭建过程是功不可没的。推荐用VSCode编写和运行VuePress项目</p>
<ol>
<li>
<p>在<a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">下载界面<ExternalLinkIcon/></a>点击左侧的蓝色按钮，选择你的操作系统，并下载。</p>
</li>
<li>
<p>双击安装包打开，同意用户协议。</p>
</li>
<li>
<p>在下载过程中 ，请务必<strong>全选</strong>下列选项：</p>
</li>
</ol>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-2ee74344037e2e7951a0807c042cd89c_MD5.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="4">
<li>
<p>在 VS Code 初次启动后，若未提前安装 Git 可能会提示未找到 Git 软件，忽略即可。</p>
</li>
<li>
<p>推荐立即执行简体中文扩展安装以保证界面语言为简体中文。操作方法：</p>
<ol>
<li>单击左侧导航栏的“Extensions”按钮。</li>
<li>在弹出的输入框中输入“chinese”。</li>
<li>点击第一个选项卡上的“Install”按钮。若是繁体用户，则应点击第二个选项卡上的“Install”按钮。</li>
<li>在下载完成后，左下角会出现弹窗，点击弹窗中的“Change Language and Restart”，等待重启后即安装完毕。</li>
</ol>
</li>
</ol>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-c046280014369794e10d2751ecaaf526_MD5.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>[!tip]
当你安装 VS Code 并第一次打开的时候，VS Code 会自动检测当前系统语言并在右下角推荐你安装对应语言的扩展，点击按钮即可自动安装。</p>
</blockquote>
<h4 id="_2-node-js" tabindex="-1"><a class="header-anchor" href="#_2-node-js"><span>2. Node.js</span></a></h4>
<blockquote>
<p>[!Introduce]
<a href="https://nodejs.org/zh-cn/" target="_blank" rel="noopener noreferrer">Node.js®open in new window<ExternalLinkIcon/></a> 是一个基于 <a href="https://v8.dev/" target="_blank" rel="noopener noreferrer">Chrome V8 引擎open in new window<ExternalLinkIcon/></a> 的 JavaScript 运行时环境。</p>
</blockquote>
<p>你需要下载并安装最新的长期维护版。</p>
<ol>
<li>
<p>点击 <a href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer">下载地址<ExternalLinkIcon/></a> 左侧的绿色按钮 (LTS)。</p>
</li>
<li>
<p>运行安装包，保持全部默认即可</p>
</li>
</ol>
<blockquote>
<p>[!important]
如果你真的是个小白，请不要改默认安装目录，以免你在出现问题时找不到对应的文件夹。</p>
</blockquote>
<p>Node.js 本身只会占据几十 M 的空间!</p>
<h4 id="_3-pnpm" tabindex="-1"><a class="header-anchor" href="#_3-pnpm"><span>3. pnpm</span></a></h4>
<p>在你安装 Node.js 之后，在终端中输入下列命令启用 corepack:</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>corepack <span class="token builtin class-name">enable</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>[!tip]
我们推荐你使用 pnpm 作为项目管理器，因为 VuePress 和 VuePress Theme Hope 都是通过 pnpm 来管理依赖的。</p>
<p>pnpm 的一些功能可以保证你拥有正确的依赖，并且它能加速安装。</p>
</blockquote>
<p>但是如果在使用pnpm安装的时候出现了错误，改为使用npm是一种不赖的选择</p>
<h3 id="搭建项目" tabindex="-1"><a class="header-anchor" href="#搭建项目"><span>搭建项目</span></a></h3>
<h4 id="_1-选择项目位置" tabindex="-1"><a class="header-anchor" href="#_1-选择项目位置"><span>1. 选择项目位置</span></a></h4>
<p>为了避免偶然间触发一些奇怪的问题，而你自己不会解决，请尽量避免使用包含中文文字、表情符号或空格的文件路径 (不好的例子: <code v-pre>C:\Users\小张\Desktop\VuePress 项目\Hope 主题❤️\</code>)。</p>
<p>建议使用纯英文路径 (好的例子: <code v-pre>D:\projects\vuepress-theme-hope\</code>)</p>
<h4 id="_2-初始化项目" tabindex="-1"><a class="header-anchor" href="#_2-初始化项目"><span>2. 初始化项目</span></a></h4>
<p>如果你选择了一个主题，请务必使用该主题提供的脚手架工具创建项目。这样可以减少很多配置上的麻烦。</p>
<p>在选定的文件夹中打开终端。</p>
<Tabs id="267" :data='[{"id":"在Mac中打开终端"},{"id":"在Ubuntu中打开终端"},{"id":"在Windows中打开终端"}]' :active="2">
<template #title0="{ value, isActive }">在Mac中打开终端</template>
<template #title1="{ value, isActive }">在Ubuntu中打开终端</template>
<template #title2="{ value, isActive }">在Windows中打开终端</template>
<template #tab0="{ value, isActive }">
<p>右键点击文件夹，然后选择”New Terminal at Folder”。</p>
</template>
<template #tab1="{ value, isActive }">
<p>右键点击文件夹，然后选择”Open in Terminal”。</p>
</template>
<template #tab2="{ value, isActive }">
<p>使用文件管理器打开对应文件夹，然后在上方的地址栏中输入 <code v-pre>cmd</code> 并按下回车。</p>
</template>
</Tabs>
<CodeTabs id="284" :data='[{"id":"pnpm"},{"id":"yarn"},{"id":"npm"}]' :active="2" tab-id="shell">
<template #title0="{ value, isActive }">pnpm</template>
<template #title1="{ value, isActive }">yarn</template>
<template #title2="{ value, isActive }">npm</template>
<template #tab0="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> create vuepress-theme-hope my-docs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> create vuepress-theme-hope my-docs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
<template #tab2="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> init vuepress-theme-hope my-docs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
</CodeTabs>
<div class="hint-container tip">
<p class="hint-container-title">文件夹参数</p>
<p>这里的 <code v-pre>my-docs</code> 是一个参数，代表 VuePress Theme Hope 项目的文件夹名称，在本教程中，我们将项目生成至当前目录下的 <code v-pre>my-docs</code> 文件夹。</p>
<p>如果你有需求，你可以更改此参数来使用一个新文件夹名称。</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">中文显示</p>
<p>如果你的英语很不好，请在第一次选择中通过键盘 <code v-pre>↓</code> 选择 <code v-pre>简体中文</code> 并回车来在后续流程中使用中文进行显示。</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">开发服务器</p>
<p>如果你在模板初始化成功后选择立即启动开发服务器，稍等片刻，你就可以在浏览器地址栏输入 <code v-pre>localhost:8080/</code> 访问开发服务器了。</p>
</div>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="output"><pre v-pre class="language-javascript"><code>Need to install the following packages<span class="token operator">:</span>
	create<span class="token operator">-</span>vuepress<span class="token operator">-</span>theme<span class="token operator">-</span>hope@<span class="token number">2.0</span><span class="token number">.0</span><span class="token operator">-</span>beta<span class="token punctuation">.</span><span class="token number">233</span> 
Ok to proceed<span class="token operator">?</span> <span class="token punctuation">(</span>y<span class="token punctuation">)</span> y
<span class="token operator">?</span> Select a language to display <span class="token operator">/</span> 选择显示语言 简体中文
<span class="token operator">?</span> 选择包管理器 npm
<span class="token operator">?</span> 你想要使用哪个打包器？ vite
生成 <span class="token keyword">package</span><span class="token punctuation">.</span>json<span class="token operator">...</span>
<span class="token operator">?</span> 设置应用名称 shenb<span class="token operator">-</span>blog
<span class="token operator">?</span> 设置应用版本号 <span class="token number">2.0</span><span class="token number">.0</span>
<span class="token operator">?</span> 设置应用描述 <span class="token constant">A</span> project <span class="token keyword">of</span> vuepress<span class="token operator">-</span>theme<span class="token operator">-</span>hope
<span class="token operator">?</span> 设置协议 <span class="token constant">MIT</span>
<span class="token operator">?</span> 项目需要用到多语言么？ No
<span class="token operator">?</span> 是否需要一个自动部署文档到 GitHub Pages 的工作流？ Yes
<span class="token operator">?</span> 你想要创建什么类型的项目？ blog
生成模板<span class="token operator">...</span>
<span class="token operator">?</span> 选择你想使用的源 当前源
安装依赖<span class="token operator">...</span>
这可能需要数分钟，请耐心等待<span class="token punctuation">.</span>
我们无法正确输出子进程的进度条，所以进程可能会看似未响应
added <span class="token number">293</span> packages <span class="token keyword">in</span> 26s
模板已成功生成<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>初始化目录结构如下</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-d6c8fb22be4f418abf38ef344030fd7c~tplv-k3u1fbpfcp-zoom-in-crop-mark_1512_0_0_0.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="首页配置" tabindex="-1"><a class="header-anchor" href="#首页配置"><span>首页配置</span></a></h3>
<p>其中，src 目录下的 <code v-pre>README.md</code>即为博客或者文档的首页。</p>
<p>等待下载完毕，执行 <code v-pre>npm run docs:dev</code></p>
<p>打开页面，可以看到博客的首页如下：</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-adc22b537dca1536f0fb1e74f80eca9e_MD5.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>可以通过设置<code v-pre>heroFullScreen: false</code>，关闭hero背景全屏。</p>
<p>下滑之后文章的列表如下：</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-715154480d5ac408e5dad8b62398cd75_MD5.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>文章的列表来自于项目中所有的markdown文件，你可以在每个md文件的frontmatter中设置文章的标题、封面、分类、标签、日期、是否在文章列表中显示。</p>
<div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">title</span><span class="token punctuation">:</span> 🚀🚀vue3自定义指令实践
<span class="token key atrule">isTimeLine</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">date</span><span class="token punctuation">:</span> <span class="token datetime number">2023-07-03</span>
<span class="token key atrule">category</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> 前端
<span class="token key atrule">tag</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> JavaScript
  <span class="token punctuation">-</span> Vue</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过设置<code v-pre>article</code> 为 <code v-pre>false</code>将文章在列表中排除。</p>
<p>站点的基本信息、顶部的hero信息、项目链接、底部的footer信息都可以在<code v-pre>README.md</code>中配置。</p>
<p>我的配置如下：具体可以参考：<a href="https://theme-hope.vuejs.press/zh/config/frontmatter/blog-home.html" target="_blank" rel="noopener noreferrer">博客主页 Frontmatter 配置 | vuepress-theme-hope<ExternalLinkIcon/></a></p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>home: false
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="导航栏" tabindex="-1"><a class="header-anchor" href="#导航栏"><span>导航栏</span></a></h3>
<p>在开始之前你需要明确，你的导航栏需求是啥样的（大白话就是哪些栏目需要在侧边栏展示，哪些在侧边栏展示）</p>
<p>我的思路是，根据文章的分类，将相同的分类文章放在同一目录下，每个目录对应一个导航栏目。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-afe5a87db78a22a56906383692d3af57_MD5.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>导航栏的相关设置在 <code v-pre>navbar.ts</code>文件中。</p>
<p>默认为字符串，对应 src 目录下的文件路径，你可以省略 <code v-pre>.md</code> 扩展名，以 <code v-pre>/</code> 结尾的路径会被推断为 <code v-pre>/README.md</code>。</p>
<p>例如：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="\src.vuepress\navbar.ts"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> navbar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vuepress-theme-hope"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">navbar</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token string">"/"</span><span class="token punctuation">,</span> <span class="token comment">// 对应首页，即src/README.md</span>
  <span class="token string">'/react/'</span><span class="token punctuation">,</span> <span class="token comment">// 对应src/react/README.md</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以是对象，基本格式如下：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="\src.vuepress\navbar.ts"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> navbar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vuepress-theme-hope"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">navbar</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"博文"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">"pen-to-square"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">prefix</span><span class="token operator">:</span> <span class="token string">"/posts/"</span><span class="token punctuation">,</span> <span class="token comment">// 对应 src/posts 目录</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"苹果"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">"pen-to-square"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">prefix</span><span class="token operator">:</span> <span class="token string">"apple/"</span><span class="token punctuation">,</span> <span class="token comment">// 对应 src/posts/apple 目录</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"苹果1"</span><span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">"pen-to-square"</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">"1"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"苹果2"</span><span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">"pen-to-square"</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">"2"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token string">"3"</span><span class="token punctuation">,</span>
          <span class="token string">"4"</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string">"tomato"</span><span class="token punctuation">,</span>
      <span class="token string">"strawberry"</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"V2 文档"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">"book"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">"https://theme-hope.vuejs.press/zh/"</span><span class="token punctuation">,</span> <span class="token comment">// link代码外链地址</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我的设置为：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="\src.vuepress\navbar.ts"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> navbar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vuepress-theme-hope"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">navbar</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token string">"/"</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'React系列'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'react'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/react/'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'Vue系列'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'vue'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/vue/'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'Vite系列'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'tool'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/vite/'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'新框架尝鲜系列'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'geometry'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/framework/'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'杂谈'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'article'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/posts/'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'标签'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'tag'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/tag/javascript/'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'分类'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'categoryselected'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/category/前端/'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'时间轴'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'time'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/timeline/'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我将一些默认的路由也加进了导航栏配置中，比如时间轴、标签、分类等。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-9cc52ff1585e6e6202033698b3484606_MD5.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="侧边栏" tabindex="-1"><a class="header-anchor" href="#侧边栏"><span>侧边栏</span></a></h3>
<p>侧边栏的配置在 <code v-pre>sidebar.ts</code>中</p>
<p>侧边栏的配置，我们可以分两种情况：全局导航栏、根据每个导航栏栏目分离式导航栏。</p>
<h4 id="_1-全局侧边栏配置" tabindex="-1"><a class="header-anchor" href="#_1-全局侧边栏配置"><span>1. 全局侧边栏配置</span></a></h4>
<p>你可以设置侧边栏导航和导航栏的路由一一对应，这样就相当于是全局的侧边栏。</p>
<p>对于侧边栏的具体条目，可以通过设置<code v-pre>children: &quot;structure&quot;</code>根据当前目录下的文件名称自动生成。</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="\src.vuepress\sidebar.ts"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> sidebar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vuepress-theme-hope"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">sidebar</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token string-property property">"/"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"React系列"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">"react"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">prefix</span><span class="token operator">:</span> <span class="token string">"react/"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">"structure"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"Vue系列"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">"vue"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">prefix</span><span class="token operator">:</span> <span class="token string">"vue/"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">"structure"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"Vite系列"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">"tool"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">prefix</span><span class="token operator">:</span> <span class="token string">"vite/"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">"structure"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"新框架尝鲜系列"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">"geometry"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">prefix</span><span class="token operator">:</span> <span class="token string">"framework/"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">"structure"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"杂谈"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">"study"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">prefix</span><span class="token operator">:</span> <span class="token string">"posts/"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">"structure"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// "intro",</span>
    <span class="token comment">// "slides",</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时页面侧边栏如下图</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-750678252dca76d05e961648cd4c4603_MD5.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_2-分离式导航栏" tabindex="-1"><a class="header-anchor" href="#_2-分离式导航栏"><span>2. 分离式导航栏</span></a></h4>
<p>分离式菜单配置更简洁，如下所示：当设置<code v-pre>structure</code>时，默认根据目录下的文件自动生成侧边栏。</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="\src.vuepress\sidebar.ts"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> sidebar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vuepress-theme-hope"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">sidebar</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token string-property property">"/react/"</span><span class="token operator">:</span>  <span class="token string">"structure"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"/framework/"</span><span class="token operator">:</span>  <span class="token string">"structure"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"/vite/"</span><span class="token operator">:</span>  <span class="token string">"structure"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"/vue/"</span><span class="token operator">:</span>  <span class="token string">"structure"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"/posts/"</span><span class="token operator">:</span>  <span class="token string">"structure"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-cc16a07b5d6cdcc2ce8bd805dfe53dd2_MD5.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_3-自动生成目录页面" tabindex="-1"><a class="header-anchor" href="#_3-自动生成目录页面"><span>3. 自动生成目录页面</span></a></h4>
<p>另外，我们还根据文件夹下的文件列表自动为每个文件夹生成目录页面。我们只需要在<code v-pre>theme.ts</code>中添加如下设置。</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="\src.vuepress\theme.ts"><pre v-pre class="language-javascript"><code><span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">autoCatalog</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>就可以自动生成目录页面了。例如：</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-9b379d0629ac655174377c76c8f00c1d_MD5.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="搜索功能" tabindex="-1"><a class="header-anchor" href="#搜索功能"><span><a href="https://theme-hope.vuejs.press/zh/guide/feature/search.html" target="_blank" rel="noopener noreferrer">搜索<ExternalLinkIcon/></a>功能</span></a></h3>
<p>该主题内置了几种常见搜索插件的支持，你只需下载你喜欢的插件和配置文件即可，我使用的是<code v-pre>vuepress-plugin-search-pro</code>插件，配置参考的官方配置。</p>
<ol>
<li>安装 <code v-pre>vuepress-plugin-search-pro</code></li>
</ol>
<CodeTabs id="455" :data='[{"id":"pnpm"},{"id":"yarn"},{"id":""}]' :active="2" tab-id="shell">
<template #title0="{ value, isActive }">pnpm</template>
<template #title1="{ value, isActive }">yarn</template>
<template #title2="{ value, isActive }"></template>
<template #tab0="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> vuepress-plugin-search-pro
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> vuepress-plugin-search-pro
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
<template #tab2="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> vuepress-plugin-search-pro
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
</CodeTabs>
<ol start="2">
<li>在主题选项中配置 <code v-pre>plugins.searchPro</code>。</li>
</ol>
<p>你可以将 <code v-pre>plugins.searchPro</code> 设置为 <code v-pre>true</code> 来直接启用它，或者将其设置为一个对象来自定义插件。</p>
<p>%%</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">searchProPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 索引全部内容</span>
      <span class="token literal-property property">indexContent</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token comment">// 为分类和标签添加索引</span>
      <span class="token literal-property property">customFields</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token function-variable function">getter</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">page</span><span class="token punctuation">)</span> <span class="token operator">=></span> page<span class="token punctuation">.</span>frontmatter<span class="token punctuation">.</span>category <span class="token keyword">as</span> any<span class="token punctuation">,</span>
          <span class="token literal-property property">formatter</span><span class="token operator">:</span> <span class="token string">"分类：$content"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token function-variable function">getter</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">page</span><span class="token punctuation">)</span> <span class="token operator">=></span> page<span class="token punctuation">.</span>frontmatter<span class="token punctuation">.</span>tag <span class="token keyword">as</span> any<span class="token punctuation">,</span>
          <span class="token literal-property property">formatter</span><span class="token operator">:</span> <span class="token string">"标签：$content"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>%%</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="\src.vuepress\config.ts"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vuepress"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> hopeTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vuepress-theme-hope"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">searchPro</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token comment">// searchPro: {</span>
      <span class="token comment">//   插件选项</span>
      <span class="token comment">// },</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-fb8aa9698875c3683416ea56928db52b_MD5.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="三、使用git上传到github" tabindex="-1"><a class="header-anchor" href="#三、使用git上传到github"><span>三、使用Git上传到GitHub</span></a></h2>
<h3 id="_1-1-安装git" tabindex="-1"><a class="header-anchor" href="#_1-1-安装git"><span>1.1 安装git</span></a></h3>
<ol>
<li>打开<a href="https://git-scm.com/download/win" target="_blank" rel="noopener noreferrer">Windows下载界面<ExternalLinkIcon/></a>，点击正文最前面的“Click here to download”超链接下载git（或者点击<a href="https://github.com/git-for-windows/git/releases/download/v2.43.0.windows.1/Git-2.43.0-64-bit.exe" target="_blank" rel="noopener noreferrer">此处<ExternalLinkIcon/></a>直接下载git）。</li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>其他操作系统请去<a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">Git官网<ExternalLinkIcon/></a>自行选择下载版本</p>
</div>
<ol start="2">
<li>
<p>双击安装程序，其中选项全部保持默认即可。</p>
</li>
<li>
<p>安装完成后，在任一文件夹右键打开菜单，如果出现<code v-pre>Open Git GUI here</code>和<code v-pre>Open Git Bash here</code>，则说明安装成功。</p>
</li>
</ol>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/Use-Git-to-Submit-Local-Code-to-GitHub-fdab1192e7c25f6e4e916c95e3209318_MD5.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_1-2-将选定仓库初始化为git仓库" tabindex="-1"><a class="header-anchor" href="#_1-2-将选定仓库初始化为git仓库"><span>1.2 将选定仓库初始化为git仓库</span></a></h3>
<ol>
<li>在指定文件夹空白处右键鼠标，单击<code v-pre>Open Git Bash here</code>打开git终端，输入<code v-pre>git init</code></li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/Use-Git-to-Submit-Local-Code-to-GitHub-b06e48a1494862051793abd10fdeb2dc_MD5.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>文件夹中出现<code v-pre>.git</code>文件，则说明初始化成功</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/Use-Git-to-Submit-Local-Code-to-GitHub-956ea4c7e5ae605e24b3fd2b4c9d1640_MD5.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_1-3-将本地代码上传至git版本库" tabindex="-1"><a class="header-anchor" href="#_1-3-将本地代码上传至git版本库"><span>1.3 将本地代码上传至git版本库</span></a></h3>
<ol>
<li>将本地代码放入暂存区，输入<code v-pre>git add .</code></li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/Use-Git-to-Submit-Local-Code-to-GitHub-40d6636cd494153fa6a17508ccf0ee00_MD5.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>检查：输入<code v-pre>git status</code>文件都显示绿色即成功</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/Use-Git-to-Submit-Local-Code-to-GitHub-b6afea351cbbf9aa195ca0371595b1d7_MD5.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="2">
<li>输入<code v-pre>git commit -m '提交信息'</code>把暂存区文件放到版本库中</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">'提交信息'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/Use-Git-to-Submit-Local-Code-to-GitHub-c49d04ce6bec29d45d13203ba703ad5c_MD5.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>如果没有创建用户信息，则会让你创建一个，账户密码随便填即可。例：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">"&lt;>"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/Use-Git-to-Submit-Local-Code-to-GitHub-b6c6f0089f486bf05aea89f9d2fa0204_MD5.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_1-4-将本地git库与github库连接" tabindex="-1"><a class="header-anchor" href="#_1-4-将本地git库与github库连接"><span>1.4 将本地git库与GitHub库连接</span></a></h3>
<ol>
<li>创建新的GitHub库</li>
</ol>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/Use-Git-to-Submit-Local-Code-to-GitHub-92418a072cf36f81ea35b827074ae6e3_MD5.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>为方便其他操作，一般建议将库命名为<code v-pre>&lt;username&gt;.github.io</code>（如图）</p>
</div>
<ol start="2">
<li>如果第一次使用，需要部署公钥(如果在最后一步将代码提交到github出现因为公钥报错，那就新建一个公钥)</li>
</ol>
<p>生成公钥指令：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">"*@*.com"</span>    <span class="token comment">#邮箱可以任意填写</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/Use-Git-to-Submit-Local-Code-to-GitHub-a52270fa564e3a1af368c77e6689dab6_MD5.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>查看公钥指令：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> ~/.ssh/id_rsa.pub    <span class="token comment">#查看之后copy </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/Use-Git-to-Submit-Local-Code-to-GitHub-2b7cec9fa59c3303a4a3120cb8378b31_MD5.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>GitHub线上添加公钥：项目仓库 &gt; Settings &gt; Deploy keys &gt; Add deploy key</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/Use-Git-to-Submit-Local-Code-to-GitHub-a1d0113f27c075b2779427922a3b2bd4_MD5.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>注意勾选“Allow write access”</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/Use-Git-to-Submit-Local-Code-to-GitHub-8a1f8430f1ec199f9b9ee6bc023bf38f_MD5.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="3">
<li>本地仓库与远程仓库建立连接，添加远程源，这里我们采用ssh协议的remote源</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> origin <span class="token operator">&lt;</span>url<span class="token operator">></span>    <span class="token comment">#origin是远程源的名字</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/Use-Git-to-Submit-Local-Code-to-GitHub-80c02e42c1030d27db3e94fc9dd5009f_MD5.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_2-提交和拉取远程仓库" tabindex="-1"><a class="header-anchor" href="#_2-提交和拉取远程仓库"><span>2. 提交和拉取远程仓库</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>origin是远程源的源名，可以自定义；master是分支名，是默认的主分支</p>
</div>
<ol>
<li>提交本地仓库代码到远程仓库 *若本地仓库名称改为“main”，则应将下文代码中的“master”改为“main”</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> push <span class="token parameter variable">-u</span> origin master    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>拉取远程仓库 *若本地仓库名称改为“main”，则应将下文代码中的“master”改为“main”</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> pull origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><details class="hint-container details"><summary>Git错误 error: src refspec xxx does not match any / error: failed to push some refs to 解决方法</summary>
<p><strong>错误原因</strong>：GitHub仓库和本地Git仓库默认名不同。</p>
<p>（由于受到&quot;Black Lives Matter&quot;运动的影响，GitHub 从今年 10 月 1 日起，在该平台上创建的所有新的源代码仓库将默认被命名为 “main”，而不是原先的&quot;master&quot;。）</p>
<p><strong>解决方法</strong>：把本地的 master 仓库名称修改为远端的 main。命令如下：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> branch <span class="token parameter variable">-m</span> oldBranchName newBranchName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details>
<details class="hint-container details"><summary>Git错误 error：src refspec master does not match any 解决方法</summary>
<p><strong>错误原因</strong>：</p>
<ul>
<li>
<p>本地需要提交的目录中存在空目录</p>
</li>
<li>
<p>本地的origin和remote origin/master 没有建立关联</p>
</li>
</ul>
<p><strong>解决方法</strong>：</p>
<ul>
<li>针对第一种错误情况，应在空目录中创建项目</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">touch</span> README
<span class="token function">git</span> <span class="token function">add</span> README
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"change"</span>
<span class="token function">git</span> push origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>针对第二种错误情况，应重新建立本地和远程关联</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> remote remove origin
<span class="token function">git</span> remote <span class="token function">add</span> origin git@github.com:XXX/XXX.github.io.git
<span class="token function">git</span> push origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h3 id="_3-git-回滚到指定版本并推送到远程分支" tabindex="-1"><a class="header-anchor" href="#_3-git-回滚到指定版本并推送到远程分支"><span>3. git 回滚到指定版本并推送到远程分支</span></a></h3>
<p>-- 本地分支回滚到指定版本</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> reset <span class="token parameter variable">--hard</span> <span class="token operator">&lt;</span>commit ID号<span class="token operator">></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">获取commit ID号的方法</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/Use-Git-to-Submit-Local-Code-to-GitHub-b04a8595f9db44dfcb62727c10636f58_MD5.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>复制下来的ji即为该版本的commit ID号</p>
<p>-- 强制推送到远程分支</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> push <span class="token parameter variable">-f</span> origin <span class="token operator">&lt;</span>branch name<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div>
<p>出处：</p>
<p><a href="https://www.cnblogs.com/wangcuican/p/12522239.html" target="_blank" rel="noopener noreferrer">提交本地代码到github - 只会玩辅助 - 博客园<ExternalLinkIcon/></a></p>
<p><a href="https://blog.csdn.net/u014361280/article/details/109703556" target="_blank" rel="noopener noreferrer">Git 常见错误 之 error: src refspec xxx does not match any / error: failed to push some refs to 简单解决方法_error: src refspec master does not match any-CSDN博客<ExternalLinkIcon/></a></p>
<h2 id="四、本地部署" tabindex="-1"><a class="header-anchor" href="#四、本地部署"><span>四、本地部署</span></a></h2>
<h3 id="_1-部署到-github-pages" tabindex="-1"><a class="header-anchor" href="#_1-部署到-github-pages"><span>1. 部署到 GitHub Pages</span></a></h3>
<p>如果你在使用模板，且在创建过程中选择了创建自动部署文档的 GitHub 工作流，那么你唯一要做的就是在 <code v-pre>docs/.config.js</code> 中设置正确的 <a href="https://vuejs.press/zh/reference/config.html#base" target="_blank" rel="noopener noreferrer"><code v-pre>base</code><ExternalLinkIcon/></a> 选项。</p>
<ul>
<li>
<p>如果你打算发布到 <code v-pre>https://&lt;USERNAME&gt;.github.io/</code>，则可以省略这一步，因为 <code v-pre>base</code> 默认即是 <code v-pre>&quot;/&quot;</code>。</p>
</li>
<li>
<p>如果你打算发布到 <code v-pre>https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;/</code>（也就是说你的仓库在 <code v-pre>https://github.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code>），则将 <code v-pre>base</code> 设置为 <code v-pre>&quot;/&lt;REPO&gt;/&quot;</code>。</p>
</li>
</ul>
<p>当操作完成后，你应该前往 GitHub 仓库的设置页面，选择 <code v-pre>gh-pages</code> 作为 GitHub Pages 的源。</p>
<div class="hint-container warning">
<p class="hint-container-title">Github 教程</p>
<p>关于 GitHub 的相关教程，你可以参考 <a href="https://mister-hope.com/code/github/" target="_blank" rel="noopener noreferrer">GitHub 简介<ExternalLinkIcon/></a>。</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">不过我在部署时遇到问题：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>Dependencies lock file is not found <span class="token keyword">in</span> <span class="token operator">/</span>home<span class="token operator">/</span><span class="token punctuation">{</span>username<span class="token punctuation">}</span><span class="token operator">/</span>runners<span class="token operator">...</span><span class="token operator">/</span>repository_name<span class="token punctuation">.</span> Supported file patterns<span class="token operator">:</span> <span class="token keyword">package</span><span class="token operator">-</span>lock<span class="token punctuation">.</span>json<span class="token punctuation">,</span>yarn<span class="token punctuation">.</span>lock
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>需要修改下<code v-pre>workflows</code>文件：去除npm cache设置</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code> - name: 设置 Node.js
        uses: actions/setup-node@v3
        with:
          node-version: <span class="token number">18</span>
        <span class="token comment">#  cache: npm</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cicd执行成功后，会多一个部署<code v-pre>gh-pages</code>分支。</p>
</div>
<p>部署<code v-pre>gh-pages</code>分支是文件流中配置的，你可以修改</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>      - name: 部署文档
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          <span class="token comment"># 这是文档部署到的分支名称</span>
          branch: gh-pages
          folder: src/.dist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-e14fe5461cdfb08b6e0a1932d492ae4c_MD5.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>接着最重要的一步，到仓库的设置页面设置如下的内容：</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-a55a2d45b21f581296d09b02a062a037_MD5.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>该设置的意思是，将选中的分支内容部署在github自带的页面服务中。</p>
<p>接着点击<code v-pre>save</code>按钮，就可以去对应的站点访问了。</p>
<p>我的站点：<a href="https://link.juejin.cn?target=https%3A%2F%2Fmmdctjj.github.io%2Fblogs2%2F" title="https://mmdctjj.github.io/blogs2/" target="_blank" rel="noopener noreferrer">mmdctjj.github.io/blogs2/<ExternalLinkIcon/></a></p>
<h3 id="_2-添加评论功能" tabindex="-1"><a class="header-anchor" href="#_2-添加评论功能"><span>2. 添加评论功能</span></a></h3>
<p>不同的插件，评论的实现原理不同，我接触过最早的原理是通过将评论信息映射到仓库的issue中。</p>
<p>然而，后来开始流行<code v-pre>Discussions</code>，这也是<code v-pre>vuepress-theme-hope</code>推荐的方式，</p>
<blockquote>
<p>如果你的博客面向程序员，请使用<code v-pre>Giscus</code>，面向大众请选择<code v-pre>Waline</code>, 所以我选择了<code v-pre>Giscus</code></p>
</blockquote>
<p>首先需要你创建一个空的仓库。其次，由于评论需要用户登录到GitHub，所以，我们还需要提供登录应用的服务。</p>
<p>这里我们不用担心，因为Github为我们提供了简单的登陆应用的功能：<code v-pre>giscus</code>,</p>
<p>首先安装Giscus：<a href="https://github.com/apps/giscus" target="_blank" rel="noopener noreferrer">GitHub Apps - giscus · GitHub<ExternalLinkIcon/></a></p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-e13154e3efd91f784218615bc9adf9ca_MD5.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>点击<code v-pre>install</code>按钮，在配置详情页中选择对应的生效仓库。（这里我选择仅仅对评论仓库生效）</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-ea99fa53fe4252254d77627d4f0bf988_MD5.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>然后回到评论仓库，点击<code v-pre>seething</code>，选中<code v-pre>Feature</code>下的<code v-pre>Discussions</code></p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-a102162cac6499c56a4540d346d717fb_MD5.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>点击<code v-pre>set up discussions</code>，默认的文本不需要修改，点击提交即可出现如下页面，说明该功能启用成功。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-a6d3618658113f74ca726cee63af6663_MD5.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>接着，我们前往<a href="https://giscus.app/zh-CN" target="_blank" rel="noopener noreferrer">giscus.app/zh-CN<ExternalLinkIcon/></a> 设置你的仓库和分类</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-3cb268874b44a1c4aa62dbb4fd6d6496_MD5.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-bc8fc4bd00b33c61d4f728f3bb7e7527_MD5.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>在启用栏目复制以下几个信息。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-0a298ebbbc92b19922ed10f8f6cf4bdd_MD5.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>接着将以下信息复到<code v-pre>theme.ts</code>即可：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="\src.vuepress\theme.ts"><pre v-pre class="language-javascript"><code>  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">comment</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// You should generate and use your own comment service</span>
      <span class="token literal-property property">provider</span><span class="token operator">:</span> <span class="token string">"Giscus"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">repo</span><span class="token operator">:</span> <span class="token string">"mmdctjj/blogs-comments"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">repoId</span><span class="token operator">:</span> <span class="token string">"xxxx"</span><span class="token punctuation">,</span> <span class="token comment">// 替换下</span>
      <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token string">"Announcements"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">categoryId</span><span class="token operator">:</span> <span class="token string">"xxxx"</span> <span class="token comment">// 替换下</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时当我们评论之后，在评论仓库查看，</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-14d4de4f357aebc829a2a4840e049577_MD5.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_3-github-pages使用自定义域名访问" tabindex="-1"><a class="header-anchor" href="#_3-github-pages使用自定义域名访问"><span>3. Github pages使用自定义域名访问</span></a></h3>
<ol>
<li>
<p>购买域名并配置DNS（以cloudflare为例）</p>
</li>
<li>
<p>点进自己域名，并添加DNS记录</p>
</li>
</ol>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-7faca8c480b85853fca02061b3c21fe4_MD5.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="3">
<li>配置记录</li>
</ol>
<table>
<thead>
<tr>
<th>key</th>
<th>value</th>
<th>comment</th>
</tr>
</thead>
<tbody>
<tr>
<td>记录类型</td>
<td>需选择“CNAME”</td>
<td>CNAME记录可以将&lt;username&gt;.github.io指向购买的域名</td>
</tr>
<tr>
<td>名称</td>
<td>可填写“www”或“blog”</td>
<td>这取决你网站的个人用途。如我填写“blog”时，shenbourne.github.io会指向blog.shenbourne.com</td>
</tr>
<tr>
<td>目标</td>
<td>填写“&lt;username&gt;.github.io”</td>
<td>此处username为GitHub用户名。例如我的用户名是shenbourne，则我填写“shenbourne.github.io”</td>
</tr>
</tbody>
</table>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-ffe655d90d28fa9c9f4fb09e378236dd_MD5.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>填好后点击保存</p>
<ol start="4">
<li>绑定到Github Pages：项目仓库 &gt; Settings &gt; Pages &gt; Custom domain，在Custom domain中填写你在步骤2中配置好的域名，点击“Save”。</li>
</ol>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-4103fe51569ff733913576ed9068e648_MD5.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>GitHub会花费一点时间做DNS check，成功时你能看到成功的提示。</p>
<ol start="5">
<li>再耐心等待一段时间（通常是十余分钟）后，在浏览器输入自定义的域名，即可打开你的博客</li>
</ol>
<h2 id="五、最后" tabindex="-1"><a class="header-anchor" href="#五、最后"><span>五、最后</span></a></h2>
<p>vuepress-theme-hope 主题通过默认的配置就提供了丰富的开箱即用的功能，使得配置体验相比较与vuepress-theme-reco有了明显的提升。这是我替换博客主题最大的体验，</p>
<p>今天的分享就到这了，如果文中有错误的地方，还请在评论中告诉我，感激不尽。</p>
<hr>
<blockquote>
<p>作者：萌萌哒草头将军</p>
<p>链接：https://juejin.cn/post/7261555752586084410</p>
<p>来源：稀土掘金</p>
</blockquote>
</div></template>


