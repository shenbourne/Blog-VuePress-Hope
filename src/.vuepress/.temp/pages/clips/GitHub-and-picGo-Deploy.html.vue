<template><div><blockquote>
<p>作者注：建议使用Github替换Gitee。</p>
<p>作者两年亲身体验告诉大家，Github做图床十分靠谱！！有CDN加速访问巨快！！</p>
<p>别担心不稳定！别担心访问慢！这些问题统统不存在。</p>
</blockquote>
<h2 id="一、配置github" tabindex="-1"><a class="header-anchor" href="#一、配置github"><span>一、配置GitHub</span></a></h2>
<h3 id="_1-注册github账号" tabindex="-1"><a class="header-anchor" href="#_1-注册github账号"><span>1. 注册Github账号</span></a></h3>
<p>首先你需要一个github账号，如果没有的话，先注册。</p>
<p>github官网地址： <a href="https://link.zhihu.com/?target=https%3A//github.com/" target="_blank" rel="noopener noreferrer">https://github.com/<ExternalLinkIcon/></a></p>
<p>注册过程省略，因为这是保姆都不管的事情。</p>
<p>友情提示：可能在注册过程中会出现 “Unable to verify your captcha response… …”，一直不能正常注册。</p>
<p>网上有各种解决方案：换浏览器、换电脑… …</p>
<h3 id="_2-创建一个新仓库-用于存放图片" tabindex="-1"><a class="header-anchor" href="#_2-创建一个新仓库-用于存放图片"><span>2. 创建一个新仓库，用于存放图片</span></a></h3>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-59b7f87b4fbe21a2492e4b9e529fe87c_1440w.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>填写仓库名称和描述，且仓库必须是public的，否则存储的图片不能正常访问。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-d3733c14e8c9b53cb5cf9f7607d51c8a_1440w.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_3-生成一个token-用于picgo访问github" tabindex="-1"><a class="header-anchor" href="#_3-生成一个token-用于picgo访问github"><span>3. 生成一个token，用于picGo访问github</span></a></h3>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-4d227062bcfa58dba6c0582c982b737b_1440w.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>选择左侧菜单的Developer settings</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-4d227062bcfa58dba6c0582c982b737b_1440w.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>之后选择左侧Personal access tokens，再点击Generate new token</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-2d5bcabac97557591c4203009d306750_1440w.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>填写Note，勾选repo.</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-346da4ccf189eb5997abe2fadadca331_1440w.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>注意，生成的token只会在这里显示一次，所以记得单独保存下来哦。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-354ea85a4bd9cfc99157b86cae9a2332_1440w.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>至此，Github的配置完成。</p>
<h2 id="二、下载picgo-并进行配置" tabindex="-1"><a class="header-anchor" href="#二、下载picgo-并进行配置"><span>二、下载picGo，并进行配置</span></a></h2>
<h3 id="_1-下载picgo" tabindex="-1"><a class="header-anchor" href="#_1-下载picgo"><span>1. 下载picGo</span></a></h3>
<p>网络不好的情况下，PicGo下载可能会多次失败，所以我把下载好的应用放在百度网盘了。</p>
<p>大家按需取用。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-279f576c0dc0861fd7edcf1d43e5675f_1440w.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>网盘地址：<a href="https://link.zhihu.com/?target=https%3A//pan.baidu.com/s/1LvkzLJyZcjpflK2Evq3X9A" target="_blank" rel="noopener noreferrer">https://pan.baidu.com/s/1LvkzLJyZcjpflK2Evq3X9A<ExternalLinkIcon/></a> 提取码：s6x7</p>
<p>下载完成，双击启动安装即可。</p>
<p>如果安装成功，picGo不能正常使用，则可以用兼容模式启动。【此问题因电脑而异，也是我在配置过程中踩过的坑。】</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-3f60ccb549e01c95a1702ceca9bda95d_1440w.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_2-配置picgo" tabindex="-1"><a class="header-anchor" href="#_2-配置picgo"><span>2. 配置picGo</span></a></h3>
<p>仓库名：[github用户名]/[第一步新建的仓库名称]</p>
<p>分支：默认master，从2020.10.01开始，github的默认分支名变更为main</p>
<p>设定token：第一步创建的token</p>
<p>指定存储路径：可填可不填，如果填写了，图片就会存储在img文件夹下</p>
<p>设定自定义域名：https://cdn.jsdelivr.net/gh/[github用户名]/[仓库名]@main，注意，此处的分支一定要填写@main，否则默认使用master分支。而现在github创建的默认分支名为main，如果不指定，则会出现图片不能上传的情况。【踩坑两小时】</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-62e4faaa7999d1d32fa80aec44b4034e_1440w.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>至此，github+picGo的配置完成，可以在上传区进行图片上传了。</p>
<h3 id="_3-补充说明" tabindex="-1"><a class="header-anchor" href="#_3-补充说明"><span>3. 补充说明</span></a></h3>
<p>1.原本github的自定义域名应该是：https://raw.githubusercontent.com/[username]/[仓库名]</p>
<p>但是使用这种方式访问图片巨慢，所以教程中使用了jsdelivr作为cdn加速。改变域名即可，不需要任何其他配置。</p>
<p>2.配置完成，可能出现不能上传的情况，请大家耐心检查，也许某一步的配置出现了问题，就像检查bug一样耐心、细心。想象一下图床搭建成功后，写起文章来的丝滑感，是不是又有动力了？</p>
<h2 id="三、备选-配置gitee" tabindex="-1"><a class="header-anchor" href="#三、备选-配置gitee"><span>三、备选-配置Gitee</span></a></h2>
<h3 id="_1-gitee设置" tabindex="-1"><a class="header-anchor" href="#_1-gitee设置"><span>1. Gitee设置</span></a></h3>
<p>安装好picgo后在picgo的插件设置搜索<code v-pre>gitee</code>然后选择安装gitee-uploader</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-b5d16df86a9dd216d75e06b57ffb9c12_1440w.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>然后到<a href="https://link.zhihu.com/?target=https%3A//gitee.com/" target="_blank" rel="noopener noreferrer">gitee<ExternalLinkIcon/></a>新建一个仓库用来做我们的图床</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-75f73b3c61eccc848c09c509ef51c6b8_1440w.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>新建仓库的要点如下：</p>
<ol>
<li><strong>输入一个仓库名称</strong></li>
<li><strong>其次将仓库设为公开</strong></li>
<li><strong>勾选使用Readme文件初始化这个仓库</strong></li>
</ol>
<p>起一个仓库的名字，按照下面的流程来创建，记得要公开</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-79d759f28a769709c478f2fc7ca4b59f_1440w.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_2-创建私人令牌" tabindex="-1"><a class="header-anchor" href="#_2-创建私人令牌"><span>2. 创建私人令牌</span></a></h3>
<p>点击头像进入设置然后点击私人令牌然后点击生成新令牌</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-d4991c62c5e5733ed8d71ac0e214c687_1440w.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-72dc3cbb5136d7c49b691ace8d94444b_1440w.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-18f2eecd4f6c9c4091f5634dc041ca16_1440w.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>输入你的gitee登录密码</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-0a99d1f96cf97761ec0049ffb3d767a3_1440w.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-cd0242aaf5099ecd6371decfa6cc687a_1440w.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_3-在picgo中配置gitee图床" tabindex="-1"><a class="header-anchor" href="#_3-在picgo中配置gitee图床"><span>3. 在picgo中配置gitee图床</span></a></h3>
<p>进入picgo后点击图床设置点击gitee，然后在repo中填入之前我们创建的用户名/仓库名，这里的用户名要与你的个人空间地址一致，例如我的个人空间地址是zdqs，所以我这里就填写zdqs</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-d43f961421502cd473ea24dbfef8452b_1440w.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>branch一般默认是master，token就写我们的私人令牌，path可以不写只要repo和token写了就行了</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-4b1950c44d1a37a0497facfb55066501_1440w.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="四、picgo集成typora" tabindex="-1"><a class="header-anchor" href="#四、picgo集成typora"><span>四、PicGo集成Typora</span></a></h2>
<p>使用MarkDown语法写文章，我使用的编辑器是typora，一款超级好用的编辑器。在一个编辑框内，编辑完成后，可以马上显示MarkDown语法效果。</p>
<p>举个栗子：</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-ce0b207c19d6ca32ac22937f1dc6cfcd_1440w.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>并且typora可以和picGo联合在一起使用，当你在编辑器中插入、粘贴图片时，typora+picGo的组合方式，可以自动把图片上传至github保存。</p>
<h3 id="_1-下载安装typora" tabindex="-1"><a class="header-anchor" href="#_1-下载安装typora"><span>1. 下载安装Typora</span></a></h3>
<p>Typora新版本是收费的，所以建议大家使用旧版本就可以了，完全能满足写作需求。</p>
<p>旧版本安装包和picGo放在一起了（下载地址见上文），大家按需取用即可。</p>
<p>下载完成后正常步骤安装即可。</p>
<h3 id="_2-配置typora" tabindex="-1"><a class="header-anchor" href="#_2-配置typora"><span>2. 配置Typora</span></a></h3>
<p>在typora顶部菜单界面，选择“文件” - &gt; “偏好设置”，设置图片存储方式。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-f595cf5c8a0e3b62944c68deb8fb5878_1440w.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>选择图片存储方式：上传图片。</p>
<p>上传服务：PicGo(app)</p>
<p>PicGo路径：picGo安装的地址</p>
<p>设置完成，点击“验证图片上传”，提示上传成功，即代表配置成功。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-e27e9f198aef7bdea365549b2257025d_1440w.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>注意一点，typora图片验证中的端口，需要与picGo中的server设置内的端口一致，否则typora中不能正常上传。</p>
<h3 id="_3-picgo监听端口设置" tabindex="-1"><a class="header-anchor" href="#_3-picgo监听端口设置"><span>3. picGo监听端口设置</span></a></h3>
<p>选择“PicGo设置”–&gt;“设置server”</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-8ff622935a6b0597a21e68e7575e16ef_1440w.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>【此处有坑】如果监听端口不是36677，则需要修改为36677。否则会出现picGo能正常上传 图片，而typora上传图片失败的情况。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-304589efaed9a1ba3caf5e8827e77582_1440w.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>最后，在苹果电脑中可以使用<strong>Typora+Ipic+Github</strong>的方式，有兴趣的话可以自行尝试</p>
<p><strong>总结：github+picGo+typora他们三个是好基友。</strong></p>
<h2 id="五、picgo集成obsidian" tabindex="-1"><a class="header-anchor" href="#五、picgo集成obsidian"><span>五、picGo集成Obsidian</span></a></h2>
<h3 id="_1-效果综述" tabindex="-1"><a class="header-anchor" href="#_1-效果综述"><span>1. 效果综述</span></a></h3>
<p>目前我的主力笔记软件是[[Obsidian]]，配图都是统一存放在同一文件夹 <code v-pre>890 Attachments</code> 内，使用[[Paste image rename]]使其与所引用的元文件名称一致，优点是<strong>方便跨文件引用以及安全隐私</strong>。但存在的弊端也很明显：<strong>随着文件数量增多会导致内存占用过大不利于跨平台同步以及迁移麻烦</strong>。这时可以考虑 webp 化或者干脆直接图床化。</p>
<p>刚好有朋友遇到这个问题，需要将 Vault 里的全部本地图片转为图床链接，解决思路的话比较清晰，相信大家都能想得到：</p>
<ol>
<li>上传全部图片到图床；</li>
<li>替换文件引用链接。</li>
</ol>
<p>那就以一个示例文件夹 <code v-pre>ob</code> 为例，尝试实现所有图片的图床化。</p>
<h3 id="_2-上传图片" tabindex="-1"><a class="header-anchor" href="#_2-上传图片"><span>2. 上传图片</span></a></h3>
<p>这里我们需要借助一个插件：<strong>“Image auto upload”</strong>，可以将图片上传到 PicGo 中配置的图床。</p>
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
<h3 id="_3-替换文件引用链接" tabindex="-1"><a class="header-anchor" href="#_3-替换文件引用链接"><span>3. 替换文件引用链接</span></a></h3>
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
<hr>
<blockquote>
<p>作者：小小芋子</p>
<p>链接：https://zhuanlan.zhihu.com/p/489236769</p>
<p>来源：知乎</p>
</blockquote>
</div></template>


