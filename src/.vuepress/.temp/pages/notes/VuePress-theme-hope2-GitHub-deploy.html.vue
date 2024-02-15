<template><div><h3 id="部署到-github-pages" tabindex="-1"><a class="header-anchor" href="#部署到-github-pages"><span>部署到 GitHub Pages</span></a></h3>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-e14fe5461cdfb08b6e0a1932d492ae4c_MD5.jpeg" alt=""></p>
<p>接着最重要的一步，到仓库的设置页面设置如下的内容：</p>
<p><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-a55a2d45b21f581296d09b02a062a037_MD5.jpeg" alt=""></p>
<p>该设置的意思是，将选中的分支内容部署在github自带的页面服务中。</p>
<p>接着点击<code v-pre>save</code>按钮，就可以去对应的站点访问了。</p>
<p>我的站点：<a href="https://link.juejin.cn?target=https%3A%2F%2Fmmdctjj.github.io%2Fblogs2%2F" title="https://mmdctjj.github.io/blogs2/" target="_blank" rel="noopener noreferrer">mmdctjj.github.io/blogs2/<ExternalLinkIcon/></a></p>
<h3 id="添加评论功能" tabindex="-1"><a class="header-anchor" href="#添加评论功能"><span>添加评论功能</span></a></h3>
<p>不同的插件，评论的实现原理不同，我接触过最早的原理是通过将评论信息映射到仓库的issue中。</p>
<p>然而，后来开始流行<code v-pre>Discussions</code>，这也是<code v-pre>vuepress-theme-hope</code>推荐的方式，</p>
<blockquote>
<p>如果你的博客面向程序员，请使用<code v-pre>Giscus</code>，面向大众请选择<code v-pre>Waline</code>, 所以我选择了<code v-pre>Giscus</code></p>
</blockquote>
<p>首先需要你创建一个空的仓库。其次，由于评论需要用户登录到GitHub，所以，我们还需要提供登录应用的服务。</p>
<p>这里我们不用担心，因为Github为我们提供了简单的登陆应用的功能：<code v-pre>giscus</code>,</p>
<p>首先安装Giscus：<a href="https://github.com/apps/giscus" target="_blank" rel="noopener noreferrer">GitHub Apps - giscus · GitHub<ExternalLinkIcon/></a></p>
<p><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-e13154e3efd91f784218615bc9adf9ca_MD5.jpeg" alt=""></p>
<p>点击<code v-pre>install</code>按钮，在配置详情页中选择对应的生效仓库。（这里我选择仅仅对评论仓库生效）</p>
<p><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-ea99fa53fe4252254d77627d4f0bf988_MD5.jpeg" alt=""></p>
<p>然后回到评论仓库，点击<code v-pre>seething</code>，选中<code v-pre>Feature</code>下的<code v-pre>Discussions</code></p>
<p><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-a102162cac6499c56a4540d346d717fb_MD5.jpeg" alt=""></p>
<p>点击<code v-pre>set up discussions</code>，默认的文本不需要修改，点击提交即可出现如下页面，说明该功能启用成功。</p>
<p><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-a6d3618658113f74ca726cee63af6663_MD5.jpeg" alt=""></p>
<p>接着，我们前往<a href="https://giscus.app/zh-CN" target="_blank" rel="noopener noreferrer">giscus.app/zh-CN<ExternalLinkIcon/></a> 设置你的仓库和分类</p>
<p><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-3cb268874b44a1c4aa62dbb4fd6d6496_MD5.jpeg" alt=""></p>
<p><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-bc8fc4bd00b33c61d4f728f3bb7e7527_MD5.jpeg" alt=""></p>
<p>在启用栏目复制以下几个信息。</p>
<p><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-0a298ebbbc92b19922ed10f8f6cf4bdd_MD5.jpeg" alt=""></p>
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
<p><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-14d4de4f357aebc829a2a4840e049577_MD5.jpeg" alt=""></p>
<h3 id="github-pages使用自定义域名访问" tabindex="-1"><a class="header-anchor" href="#github-pages使用自定义域名访问"><span>Github pages使用自定义域名访问</span></a></h3>
<ol>
<li>
<p>购买域名并配置DNS（以cloudflare为例）</p>
</li>
<li>
<p>点进自己域名，并添加DNS记录</p>
</li>
</ol>
<p><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-7faca8c480b85853fca02061b3c21fe4_MD5.jpeg" alt=""></p>
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
<p><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-ffe655d90d28fa9c9f4fb09e378236dd_MD5.jpeg" alt=""></p>
<p>填好后点击保存</p>
<ol start="4">
<li>绑定到Github Pages：项目仓库 &gt; Settings &gt; Pages &gt; Custom domain，在Custom domain中填写你在步骤2中配置好的域名，点击“Save”。</li>
</ol>
<p><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-4103fe51569ff733913576ed9068e648_MD5.jpeg" alt=""></p>
<p>GitHub会花费一点时间做DNS check，成功时你能看到成功的提示。</p>
<ol start="5">
<li>再耐心等待一段时间（通常是十余分钟）后，在浏览器输入自定义的域名，即可打开你的博客</li>
</ol>
</div></template>


