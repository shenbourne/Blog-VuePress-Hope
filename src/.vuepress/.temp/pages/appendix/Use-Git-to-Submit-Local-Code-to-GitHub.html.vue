<template><div><h3 id="_1-1-安装git" tabindex="-1"><a class="header-anchor" href="#_1-1-安装git"><span>1.1 安装git</span></a></h3>
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
</div></template>


