<template><div><blockquote>
<p>作者注：在当今软件开发的世界中，Docker 技术已经成为了不可或缺的一部分。</p>
<p>然而，最近由于ZC的原因，国内的知名公开镜像源失效了，许多开发者在使用 Docker 镜像时常常面临一个问题：镜像拉取速度往往较慢，有些镜像无法拉取。</p>
<p>为了解决这一问题，大佬技术爬爬虾写了名为 docker_image_pusher 的开源项目，它利用 Github Action 将国外的 Docker 镜像转存到阿里云私有仓库，以提供给国内服务器使用，免费且易于使用。</p>
<p>今天我们就介绍下如何将国外的docker镜像转存到自己的阿里云镜像仓库。</p>
</blockquote>
<h2 id="一、配置阿里云docker镜像仓库" tabindex="-1"><a class="header-anchor" href="#一、配置阿里云docker镜像仓库"><span>一、配置阿里云docker镜像仓库</span></a></h2>
<h3 id="_1-登录阿里云容器镜像服务" tabindex="-1"><a class="header-anchor" href="#_1-登录阿里云容器镜像服务"><span>1. 登录阿里云容器镜像服务</span></a></h3>
<p>首先我们需要登录到阿里云容器镜像服务<a href="https://cr.console.aliyun.com/" target="_blank" rel="noopener noreferrer">cr.console.aliyun.com<ExternalLinkIcon/></a></p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040210385.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<p>个人实例可以免费创建3个命名空间，300个镜像，对于我们个人来说已经足够了。</p>
<h3 id="_2-创建命令空间" tabindex="-1"><a class="header-anchor" href="#_2-创建命令空间"><span>2. 创建命令空间</span></a></h3>
<p>在个人实例下创建一个命名空间，我们需要记住此处创建的命令空间，后边会用到。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040212712.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<h3 id="_3-设置凭证" tabindex="-1"><a class="header-anchor" href="#_3-设置凭证"><span>3. 设置凭证</span></a></h3>
<p>在访问凭证中设置固定密码，我们需要记住密码，以及此处的用户名和仓库地址，后边会用到。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040213516.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<h2 id="二、docker-image-pusher-配置" tabindex="-1"><a class="header-anchor" href="#二、docker-image-pusher-配置"><span>二、docker_image_pusher 配置</span></a></h2>
<h3 id="_1-项目简介" tabindex="-1"><a class="header-anchor" href="#_1-项目简介"><span>1. 项目简介</span></a></h3>
<p>项目地址：<a href="https://github.com/tech-shrimp/docker_image_pusher" target="_blank" rel="noopener noreferrer">github.com/tech-shrimp/docker_image_pusher<ExternalLinkIcon/></a></p>
<p>使用Github Action将国外的Docker镜像转存到阿里云私有仓库，供国内服务器使用，免费易用</p>
<ul>
<li>支持DockerHub, gcr.io, k8s.io, ghcr.io等任意仓库</li>
<li>支持最大40GB的大型镜像</li>
<li>使用阿里云的官方线路，速度快</li>
</ul>
<h3 id="_2-fork项目" tabindex="-1"><a class="header-anchor" href="#_2-fork项目"><span>2. Fork项目</span></a></h3>
<p>登录Github，Fork项目</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040216184.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<h3 id="_3-配置环境变量" tabindex="-1"><a class="header-anchor" href="#_3-配置环境变量"><span>3. 配置环境变量</span></a></h3>
<p>点击 <code v-pre>Settings</code> -&gt; <code v-pre>Secret and variables</code> -&gt; <code v-pre>Actions</code> -&gt; <code v-pre>New Repository secret</code>，依次将我们之前配置的阿里云容器镜像服务的值配置到此处：</p>
<ul>
<li>
<p><code v-pre>ALIYUN_NAME_SPACE</code>: 命名空间</p>
</li>
<li>
<p><code v-pre>ALIYUN_REGISTRY</code>: 仓库地址</p>
</li>
<li>
<p><code v-pre>ALIYUN_REGISTRY_PASSWORD</code>: 密码</p>
</li>
<li>
<p><code v-pre> ALIYUN_REGISTRY_USER</code>: 用户名</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040219290.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
</li>
</ul>
<h3 id="_4-转存镜像" tabindex="-1"><a class="header-anchor" href="#_4-转存镜像"><span>4. 转存镜像</span></a></h3>
<p>配置完成后修改项目的images.txt文件，将我们要转存的镜像添加上去，提交代码。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040221090.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<p>提交之后会自动进入Github Action构建，如下图所示则为构建成功了。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040221821.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<h3 id="_5-获取镜像名称" tabindex="-1"><a class="header-anchor" href="#_5-获取镜像名称"><span>5. 获取镜像名称</span></a></h3>
<p>Docker存在名称相同，但是属于不同命名空间的情况。 如果存在，应当把命名空间作为前缀加在镜像名称前。</p>
<p>通过 <a href="https://hub.docker.com/" target="_blank" rel="noopener noreferrer">hub.docker.com<ExternalLinkIcon/></a> 可以查询命名空间。一般选择下载量和 Star 数最多的结果。</p>
<p>下面是一个例子：</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040253833.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<h3 id="_6-查看镜像" tabindex="-1"><a class="header-anchor" href="#_6-查看镜像"><span>6. 查看镜像</span></a></h3>
<p>转存成功后我们在阿里云容器镜像服务<a href="https://cr.console.aliyun.com/" target="_blank" rel="noopener noreferrer">cr.console.aliyun.com<ExternalLinkIcon/></a>中就可以看到我们转存的镜像了</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040223973.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<p>点击镜像名称就可以看到我们的镜像地址和基本信息了：</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040254072.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<h2 id="三、1panel-使用阿里云镜像仓库" tabindex="-1"><a class="header-anchor" href="#三、1panel-使用阿里云镜像仓库"><span>三、1Panel 使用阿里云镜像仓库</span></a></h2>
<h3 id="_1-添加阿里云镜像仓库" tabindex="-1"><a class="header-anchor" href="#_1-添加阿里云镜像仓库"><span>1. 添加阿里云镜像仓库</span></a></h3>
<p>打开 1Panel 容器 - 仓库界面，点击&quot;添加仓库&quot;，输入信息</p>
<ul>
<li>用户名：你的账号名称</li>
<li>密码：在“访问凭证”中设置的密码</li>
<li>下载地址：registry.cn-hangzhou.aliyuncs.com/[你的命名空间名称]</li>
</ul>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040230685.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<h3 id="_2-解决应用商店下载应用443-i-o-timeout的错误" tabindex="-1"><a class="header-anchor" href="#_2-解决应用商店下载应用443-i-o-timeout的错误"><span>2. 解决应用商店下载应用<code v-pre>443: i/o timeout</code>的错误</span></a></h3>
<p>在Github仓库的<code v-pre>images.txt</code>填写对应镜像后，原本下载时显示<code v-pre>443: i/o timeout</code>的软件就能正常下载了</p>
<h3 id="_3-1panel-推送镜像" tabindex="-1"><a class="header-anchor" href="#_3-1panel-推送镜像"><span>3. 1Panel 推送镜像</span></a></h3>
<p>推送镜像到阿里云镜像仓库</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040244141.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<p>查看镜像推送成功</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040244052.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
</div></template>


