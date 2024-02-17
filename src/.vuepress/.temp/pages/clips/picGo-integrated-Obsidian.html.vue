<template><div><h3 id="效果综述" tabindex="-1"><a class="header-anchor" href="#效果综述"><span>效果综述</span></a></h3>
<p>目前我的主力笔记软件是[[Obsidian]]，配图都是统一存放在同一文件夹 <code v-pre>890 Attachments</code> 内，使用[[Paste image rename]]使其与所引用的元文件名称一致，优点是<strong>方便跨文件引用以及安全隐私</strong>。但存在的弊端也很明显：<strong>随着文件数量增多会导致内存占用过大不利于跨平台同步以及迁移麻烦</strong>。这时可以考虑 webp 化或者干脆直接图床化。</p>
<p>刚好有朋友遇到这个问题，需要将 Vault 里的全部本地图片转为图床链接，解决思路的话比较清晰，相信大家都能想得到：</p>
<ol>
<li>上传全部图片到图床；</li>
<li>替换文件引用链接。</li>
</ol>
<p>那就以一个示例文件夹 <code v-pre>ob</code> 为例，尝试实现所有图片的图床化。</p>
<h3 id="上传图片" tabindex="-1"><a class="header-anchor" href="#上传图片"><span>上传图片</span></a></h3>
<p>这里我们需要借助一个插件：[[Image auto upload]]，可以将图片上传到 PicGo 中配置的图床。</p>
<figure><img src="https://pic2.zhimg.com/80/v2-331c4279a55a99ab3692fe8dc4ad8475_1440w.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>若勾选最后一个选项，图片上传图床后会被删除！！！</p>
<p>虽然插件只能上传一个文件中的所有图像文件，但也足够让我们打开思路了：<strong>那就把图片都丢到一个文件里</strong>！</p>
<p>文件夹内创建文件 <code v-pre>attachments.md</code>，运行这段 python 脚本：</p>
<div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre v-pre class="language-python"><code> <span class="token keyword">import</span> os
 <span class="token keyword">import</span> glob
 ​
 <span class="token comment"># 获取当前目录</span>
 current_dir <span class="token operator">=</span> os<span class="token punctuation">.</span>getcwd<span class="token punctuation">(</span><span class="token punctuation">)</span>
 ​
 <span class="token comment"># 获取所有图片文件路径</span>
 image_files <span class="token operator">=</span> glob<span class="token punctuation">.</span>glob<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>current_dir<span class="token punctuation">,</span> <span class="token string">'*.jpg'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> \
               glob<span class="token punctuation">.</span>glob<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>current_dir<span class="token punctuation">,</span> <span class="token string">'*.jpeg'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> \
               glob<span class="token punctuation">.</span>glob<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>current_dir<span class="token punctuation">,</span> <span class="token string">'*.png'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 可根据需要添加其他图片格式的glob语句</span>
 ​
 <span class="token comment"># 遍历图片文件，并将文件名添加到attachments.md文件中</span>
 <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">'attachments.md'</span><span class="token punctuation">,</span> <span class="token string">'w'</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">'utf-8'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">file</span><span class="token punctuation">:</span>
     <span class="token keyword">for</span> image_file <span class="token keyword">in</span> image_files<span class="token punctuation">:</span>
         image_filename <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>basename<span class="token punctuation">(</span>image_file<span class="token punctuation">)</span>
         <span class="token builtin">file</span><span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f'![[</span><span class="token interpolation"><span class="token punctuation">{</span>image_filename<span class="token punctuation">}</span></span><span class="token string">]]\n'</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行后会得到以下效果：</p>
<figure><img src="https://pic1.zhimg.com/80/v2-bcc89b9880e2fdcafd476d758fe372a8_1440w.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>图片汇总</p>
<p>然后回到 Obsidian 按 <code v-pre>Ctrl-P</code> 调出命令面板，执行 <code v-pre>Image auto upload Plugin: Upload all images</code> 后会自动替换成图床链接：</p>
<figure><img src="https://pic3.zhimg.com/80/v2-f45acd103c8ffbb0aea543bc672427e2_1440w.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>上传后自动替换链接</p>
<h3 id="替换文件引用链接" tabindex="-1"><a class="header-anchor" href="#替换文件引用链接"><span>替换文件引用链接</span></a></h3>
<p>重新读取 <code v-pre>attachments.md</code>，获取图片名与图床链接的对应关系并存储为字典：</p>
<div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre v-pre class="language-python"><code> <span class="token keyword">import</span> re
 ​
 <span class="token comment"># 定义正则表达式模式</span>
 pattern <span class="token operator">=</span> <span class="token string">r'\!\[(.*?)\]\((.*?)\)'</span>
 ​
 <span class="token comment"># 以utf-8编码读取attachments.md文件</span>
 <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">'attachments.md'</span><span class="token punctuation">,</span> <span class="token string">'r'</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">'utf-8'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">file</span><span class="token punctuation">:</span>
     content <span class="token operator">=</span> <span class="token builtin">file</span><span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
 ​
 <span class="token comment"># 创建空字典</span>
 img_dict <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
 ​
 <span class="token comment"># 使用正则表达式匹配并存储图片信息到字典中</span>
 matches <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span>pattern<span class="token punctuation">,</span> content<span class="token punctuation">)</span>
 <span class="token keyword">for</span> <span class="token keyword">match</span> <span class="token keyword">in</span> matches<span class="token punctuation">:</span>
     img_name <span class="token operator">=</span> <span class="token keyword">match</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
     img_link <span class="token operator">=</span> <span class="token keyword">match</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
     img_dict<span class="token punctuation">[</span>img_name<span class="token punctuation">]</span> <span class="token operator">=</span> img_link
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着我们需要来遍历整个 Vault 并进行图片引用链接的替换，首先需要注意的是 Obsidian 存在两种引用内部图片的格式：</p>
<ul>
<li>OB 链接：<code v-pre>![[img.png]]</code></li>
<li>MD 链接：<code v-pre>![img_name](img.png)</code></li>
</ul>
<p>两种格式我们都需要进行替换：</p>
<div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre v-pre class="language-python"><code> <span class="token keyword">import</span> os
 <span class="token keyword">import</span> re
 ​
 <span class="token comment"># 定义正则表达式模式</span>
 pattern1 <span class="token operator">=</span> <span class="token string">r'\!\[(.*?)\]\((.*?)\.(png|jpg|jpeg)\)'</span>
 pattern2 <span class="token operator">=</span> <span class="token string">r'\!\[\[(.*?)\.(png|jpg|jpeg)\]\]'</span>
 ​
 <span class="token comment"># 遍历当前文件夹下的所有Markdown文件</span>
 <span class="token keyword">for</span> root<span class="token punctuation">,</span> dirs<span class="token punctuation">,</span> files <span class="token keyword">in</span> os<span class="token punctuation">.</span>walk<span class="token punctuation">(</span><span class="token string">'.'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
     <span class="token keyword">for</span> <span class="token builtin">file</span> <span class="token keyword">in</span> files<span class="token punctuation">:</span>
         <span class="token keyword">if</span> <span class="token builtin">file</span><span class="token punctuation">.</span>endswith<span class="token punctuation">(</span><span class="token string">'.md'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
             <span class="token comment"># 以utf-8编码读取Markdown文件</span>
             file_path <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token builtin">file</span><span class="token punctuation">)</span>
             <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>file_path<span class="token punctuation">,</span> <span class="token string">'r'</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">'utf-8'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
                 content <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
 ​
             <span class="token comment"># 使用正则表达式替换图片链接</span>
             content <span class="token operator">=</span> re<span class="token punctuation">.</span>sub<span class="token punctuation">(</span>pattern1<span class="token punctuation">,</span> <span class="token keyword">lambda</span> <span class="token keyword">match</span><span class="token punctuation">:</span> <span class="token string">'![{}]({})'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token keyword">match</span><span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> img_dict<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token keyword">match</span><span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> content<span class="token punctuation">)</span>
             content <span class="token operator">=</span> re<span class="token punctuation">.</span>sub<span class="token punctuation">(</span>pattern2<span class="token punctuation">,</span> <span class="token keyword">lambda</span> <span class="token keyword">match</span><span class="token punctuation">:</span> <span class="token string">'![{}]({})'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token keyword">match</span><span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> img_dict<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token keyword">match</span><span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> content<span class="token punctuation">)</span>
 ​
             <span class="token comment"># 将替换后的内容写回Markdown文件</span>
             <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>file_path<span class="token punctuation">,</span> <span class="token string">'w'</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">'utf-8'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
                 f<span class="token punctuation">.</span>write<span class="token punctuation">(</span>content<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行完脚本，我们会发现 Vault 内所有的内部图片都转换成了图床链接的形式。</p>
<figure><img src="https://pic3.zhimg.com/80/v2-2c6afcf09490201540c5937b5c23d332_1440w.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>前后对比</p>
<p>最后再强调一遍，<strong>执行以上操作前务必做好备份！以防操作失误无法挽回！</strong></p>
<p>出处：https://zhuanlan.zhihu.com/p/646068563</p>
</div></template>


