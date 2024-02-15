<template><div><div class="language-cardlink line-numbers-mode" data-ext="cardlink" data-title="cardlink"><pre v-pre class="language-cardlink"><code>url: https://juejin.cn/post/7261555752586084410
title: &quot;🚀VuePress-theme-hope2 搭建个人网站，万字长文保姆级教程，包含自动部署、评论、搜索等功能 - 掘金&quot;
description: &quot;VuePress 是一个以 Markdown 为中心的静态网站生成器。好处是可以使用 Markdown 来书写内容文档或者博客。 VuePress 诞生的初衷是为了支持 Vue.js 及其子项目的文档&quot;
host: juejin.cn
favicon: https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/static/favicons/favicon-32x32.png
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>VuePress 是一个以 Markdown 为中心的静态网站生成器。好处是可以使用 Markdown 来书写内容文档或者博客。</p>
<p>VuePress 诞生的初衷是为了支持 Vue.js 及其子项目的文档需求。</p>
<p>在明确你的目标之后，先不着急立马搭建项目。</p>
<h2 id="一、你喜欢哪个主题" tabindex="-1"><a class="header-anchor" href="#一、你喜欢哪个主题"><span>一、你喜欢哪个主题</span></a></h2>
<h3 id="选择主题" tabindex="-1"><a class="header-anchor" href="#选择主题"><span>选择主题</span></a></h3>
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
<p><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-7805ce56c9ab4c47a392f782f3f0a509~tplv-k3u1fbpfcp-zoom-in-crop-mark_1512_0_0_0.webp" alt=""></p>
<h4 id="_2-vuepress-theme-hope-案例" tabindex="-1"><a class="header-anchor" href="#_2-vuepress-theme-hope-案例"><span>2. <a href="https://theme-hope.vuejs.press/" target="_blank" rel="noopener noreferrer">vuepress-theme-hope<ExternalLinkIcon/></a> 案例</span></a></h4>
<p>蝉沐风的码场：<a href="https://www.chanmufeng.com/" target="_blank" rel="noopener noreferrer">www.chanmufeng.com/<ExternalLinkIcon/></a></p>
<p><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-aa13444c25f46fc1028f935fab84932c_MD5.jpeg" alt=""></p>
<p>更多案例：<a href="https://theme-hope.vuejs.press/zh/demo/projects.html#%E4%BD%BF%E7%94%A8-vuepress-theme-hope-%E7%9A%84%E6%96%87%E6%A1%A3" target="_blank" rel="noopener noreferrer">真实项目 | vuepress-theme-hope<ExternalLinkIcon/></a></p>
<h4 id="_3-vuepress-theme-reco-案例" tabindex="-1"><a class="header-anchor" href="#_3-vuepress-theme-reco-案例"><span>3. <a href="http://v1.vuepress-reco.recoluan.com/" target="_blank" rel="noopener noreferrer">vuepress-theme-reco<ExternalLinkIcon/></a> 案例</span></a></h4>
<p>Chivas-Regal的博客：<a href="https://tech.chivas-regal.top/" target="_blank" rel="noopener noreferrer">Chivas-Regal<ExternalLinkIcon/></a></p>
<p><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-5f5f76ddcbbddc12e11ec888c99f06d3_MD5.jpeg" alt=""></p>
<p>更多案例：<a href="http://v1.vuepress-reco.recoluan.com/views/other/theme-example.html" target="_blank" rel="noopener noreferrer">优秀博客案例 | vuepress-theme-reco<ExternalLinkIcon/></a></p>
<h4 id="_4-vuepress-theme-reco-2-0-案例" tabindex="-1"><a class="header-anchor" href="#_4-vuepress-theme-reco-2-0-案例"><span>4. <a href="https://vuepress-theme-reco.recoluan.com/" target="_blank" rel="noopener noreferrer">vuepress-theme-reco 2.0<ExternalLinkIcon/></a> 案例</span></a></h4>
<p>SlovinG's Blog：<a href="https://sloving.top/" target="_blank" rel="noopener noreferrer">SlovinG's Blog<ExternalLinkIcon/></a></p>
<p><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-a4fc5d567fcf3f8ef1c439f05e75aa30_MD5.jpeg" alt=""></p>
<p>更多案例：<a href="https://vuepress-theme-reco.recoluan.com/docs/others/examples.html" target="_blank" rel="noopener noreferrer">案例 | vuepress-reco<ExternalLinkIcon/></a></p>
<h4 id="_5-vuepress-theme-vdoing-案例" tabindex="-1"><a class="header-anchor" href="#_5-vuepress-theme-vdoing-案例"><span>5. <a href="https://doc.xugaoyi.com/" target="_blank" rel="noopener noreferrer">vuepress-theme-vdoing<ExternalLinkIcon/></a> 案例</span></a></h4>
<p>Evan's blog：<a href="https://xugaoyi.com/" target="_blank" rel="noopener noreferrer">Evan's blog<ExternalLinkIcon/></a></p>
<p><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-6f1884a664145f9a4a2117cd5271943d_MD5.jpeg" alt=""></p>
<p>更多案例：<a href="https://doc.xugaoyi.com/pages/5d571c/#%E7%89%B9%E5%88%AB%E7%94%A8%E6%88%B7" target="_blank" rel="noopener noreferrer">案例 | vuepress-theme-vdoing<ExternalLinkIcon/></a></p>
<p>大家可自行选择主题，此处以vuepress-theme-hope为例搭建博客。</p>
<p>主要功能是新增了一些图标、新增了Tag、新增了时间轴等常用功能，</p>
<p>缺点是：功能还不够丰富，图标比较少，无法有效添加摘要、阅读时间、字数统计等功能。</p>
<p>相反，vuepress-theme-hope 这些做的都不错，成为我新的选择。</p>
<h2 id="二、本地部署" tabindex="-1"><a class="header-anchor" href="#二、本地部署"><span>二、本地部署</span></a></h2>
<!-- @include: VuePress-theme-hope2-Local-deploy.md -->
<h2 id="三、使用git上传到github" tabindex="-1"><a class="header-anchor" href="#三、使用git上传到github"><span>三、使用Git上传到GitHub</span></a></h2>
<!-- @include: Use-Git-to-Submit-Local-Code-to-GitHub.md -->
<h2 id="四、本地部署" tabindex="-1"><a class="header-anchor" href="#四、本地部署"><span>四、本地部署</span></a></h2>
<!-- @include: VuePress-theme-hope2-GitHub-deploy.md -->
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


