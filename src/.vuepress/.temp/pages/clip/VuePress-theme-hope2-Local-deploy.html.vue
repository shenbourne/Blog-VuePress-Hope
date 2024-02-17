<template><div><h3 id="运行环境设置" tabindex="-1"><a class="header-anchor" href="#运行环境设置"><span>运行环境设置</span></a></h3>
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
<Tabs id="141" :data='[{"id":"在Mac中打开终端"},{"id":"在Ubuntu中打开终端"},{"id":"在Windows中打开终端"}]' :active="2">
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
<CodeTabs id="158" :data='[{"id":"pnpm"},{"id":"yarn"},{"id":"npm"}]' :active="2" tab-id="shell">
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
<CodeTabs id="329" :data='[{"id":"pnpm"},{"id":"yarn"},{"id":""}]' :active="2" tab-id="shell">
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
</div></template>


