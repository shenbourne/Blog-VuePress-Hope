<template><div><p>Office Tool Plus 是一个强大且实用的 Office 部署工具。</p>
<p>Office Tool Plus 基于 <a href="https://aka.ms/ODT" target="_blank" rel="noopener noreferrer">Office 部署工具<ExternalLinkIcon/></a> 制作，可以很方便的部署 Office，高速下载引擎可帮助您更快地下载 Office。</p>
<p>你也可以使用 Office Tool Plus 的其他功能或者是内置的小工具方便、快捷地管理 Office 哦！</p>
<!-- more -->
<h2 id="一、office-tool-plus-下载" tabindex="-1"><a class="header-anchor" href="#一、office-tool-plus-下载"><span>一、Office Tool Plus 下载</span></a></h2>
<p>先再官网下载 Office Tool Plus，官网网址：<a href="https://otp.landian.vip/zh-cn/" target="_blank" rel="noopener noreferrer">otp.landian.vip<ExternalLinkIcon/></a></p>
<p>打开<a href="https://otp.landian.vip/zh-cn/download.html" target="_blank" rel="noopener noreferrer">下载地址<ExternalLinkIcon/></a>，选择适应的下载源和版本。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402160244851.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<p>下载后解压至硬盘中，双击“Office Tool Plus.exe”打开应用程序。若遇到防火墙提示，请选择“允许”或“仍要运行”。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402160248614.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<h2 id="二、部署-office-应用" tabindex="-1"><a class="header-anchor" href="#二、部署-office-应用"><span>二、部署 Office 应用</span></a></h2>
<p>主页内容是一堆快捷方式。若没安装对应应用，会打开该应用的 website 主页；若已安装了对应应用，则会打开该应用。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402160255173.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<h3 id="_1-选择需要安装的-office-应用" tabindex="-1"><a class="header-anchor" href="#_1-选择需要安装的-office-应用"><span>1. 选择需要安装的 Office 应用</span></a></h3>
<p>打开 “部署 &gt; 产品” ，点击 “添加产品”，选择需要安装的应用，然后点击 “确定”。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402160257311.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<h3 id="_2-选择要安装的应用程序" tabindex="-1"><a class="header-anchor" href="#_2-选择要安装的应用程序"><span>2. 选择要安装的应用程序</span></a></h3>
<p>此处我选择的 “Office 专业版 2021”。在下面的 “应用程序” 选择准备安装的应用。例如此处，我为了演示只选择了 “Publisher”</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402160306724.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<h3 id="_3-部署设置" tabindex="-1"><a class="header-anchor" href="#_3-部署设置"><span>3. 部署设置</span></a></h3>
<p>a. 选择<strong>体系结构</strong> <em>跟电脑cpu挂钩</em></p>
<ul>
<li>32位：仅推荐在32位(x86)电脑选择。</li>
<li>64位：推荐64位(x64或amd64)电脑选择。</li>
<li>arm：独立于上述三种所用的指令集，一般不推荐选择。但注意，苹果M系列芯片均采用 arm 架构，这些电脑应选择 arm64</li>
</ul>
<details class="hint-container details"><summary>常见指令集架构</summary>
<p>x86 是 Intel 在 1978 年推出的一种 32 位指令集。从 386 时代开始的，一直沿用至今，是一种cisc指令集，所有 Intel 早期的 cpu，amd 早期的 cpu 都支持这种指令集，Intel 官方文档里面称为 “IA-32”。</p>
<p>在2001年，Intel 发布了其最新的 64 位指令集架构 IA-64。但是一反常态，该指令集不能向下兼容 x86，即当时已经发布的软件均无法在该指令集下的 cpu 中运行，市场反应冷淡。现在电脑一般不会存在该指令集架构。</p>
<p>在2003年，amd推出了AMD64，是 x86 的 64 位扩展（即能向下兼容 x86），获得市场的热烈反响。现存许多产品，尤其是在 Intel 发布 x86-64 之前进入市场的 64 位产品，往往采用该指令集架构。</p>
<p>在2004年，Intel 推出了支持 x86 的 64 位指令集架构 x86-64（现在一般简称为x64），后英特尔将其命名为 “Intel 64”。但 Intel 在此架构中吸纳 AMD64，常常被媒体嘲笑。</p>
<p>ARM（英文为Advanced RISC Machine，或Acorn RISC Machine）也是一个架构，非常适用于移动通信这种低成本，高性能，低耗电的领域。常常出现在手机端等，在电脑中很少见。</p>
<p>苹果电脑在采用M系列芯片之前，采用的都是Intel芯片，是x86-64架构。但苹果的M系列芯片采用的是 arm 架构。</p>
<p>Windows电脑区分x32和x64的方法：</p>
<p>按下 Win+R，打开 “运行”，输入 “cmd”，按下 Enter 启动命令提示符</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402160407495.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<p>在命令提示符中输入 <code v-pre>systeminfo</code>，等待数秒。查看“系统类型”，若是 “x64-based PC”，则应分辨是哪个指令集架构。</p>
<Tabs id="110" :data='[{"id":"amd64处理器实例"},{"id":"x86-64处理器实例"}]' :active="1">
<template #title0="{ value, isActive }">amd64处理器实例</template>
<template #title1="{ value, isActive }">x86-64处理器实例</template>
<template #tab0="{ value, isActive }">
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402160411994.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<p>一般 AMD cpu 的 64 位 pc 是 amd64 指令集架构</p>
</template>
<template #tab1="{ value, isActive }">
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402160409577.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<p>一般 Intel cpu 的 64 位 pc 是 x86-64 指令集架构</p>
</template>
</Tabs>
<p>总结：3个指令集家族的父子关系</p>
<Mermaid id="mermaid-131" code="eJxLy8kvT85ILCpRCHHi4iwuTUovSizIUKiwMOPi5EzJLEpNLsnMz1NwCgFyEw2jgeKxCrq6dgqJRiC2rplJLLqEcXRibgpYPDUvBclIT0egaqBiT8doMBNDQWJRLlA6OT+vJBpEZOaVZualH9oOglC1AAdkNJg="></Mermaid><p>总结：x86家族的指令集架构分类</p>
<ol>
<li>x86：一般没有别名，在早期的 32 位 cpu 会出现</li>
<li>x64：别名 x86-64、Intel 64、EM64T 等，一般会在 64 位的 Intel 处理器中出现</li>
<li>amd64：一般没有别名，会在 64 位的 amd 处理器中出现</li>
</ol>
</details>
<p>b. <strong>通道</strong> 保持默认的“当前通道”。</p>
<p>c. <strong>部署模式</strong> 保持默认的“安装”。</p>
<p>d. <strong>安装模块</strong> 保持默认的“Office 部署工具”。</p>
<p>e. 推荐勾选 <strong>下载后再部署</strong>（即让 Office Tool Plus 下载完所有的文件之后再安装），<strong>其他两个圆圈</strong>可按需勾选。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402162154481.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<p>滑动到最下方，点击“高级设置”，可以在其中的“源路径”设置待安装的位置</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402162157537.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<h3 id="_4-开始部署" tabindex="-1"><a class="header-anchor" href="#_4-开始部署"><span>4. 开始部署</span></a></h3>
<p>打开 “部署 &gt; 部署 Office”，点击 “开始部署”，下载需要的文件并安装。</p>
<p>下方的进度条会显示正在下载的文件名和下载速度以及预计时间。（图片中没有）</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402162159995.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<p>下载完成后，Office Tool Plus 会自动安装软件。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402162209404.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<p>这个过程通常不需要很久，如果一直卡在这个过程，请检查 “部署设置” 阶段是否配置错误（尤其是位数）</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402162209832.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<h2 id="三、激活-office" tabindex="-1"><a class="header-anchor" href="#三、激活-office"><span>三、激活 Office</span></a></h2>
<h3 id="_1-安装许可证" tabindex="-1"><a class="header-anchor" href="#_1-安装许可证"><span>1. 安装许可证</span></a></h3>
<p>打开 “激活 &gt; 许可证管理”，点击 “安装许可证” 右侧的 “安装” 按钮。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402162212021.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<p>在 “许可证列表” 中选择刚刚安装的版本。例如我刚刚安装的是 “Office 专业版 2021”，则此处我选择“Office专业版2021”</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402162213415.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">无法安装许可证/未发现许可证 可能的解决方法</p>
<p>原因①：硬件问题 即设备未及时更新或打补丁 缺少了重要文件</p>
<p>可尝试在本软件中，“安装许可证”右侧的小三角下拉菜单中，清除所有的许可证，并重新安装，确保所有许可证文件都已正确安装</p>
<p>原因②：这个可能比较荒谬，但不可否认的是可能存在，即例如 WPS 等同类型软件惹的祸……</p>
</div>
<h3 id="_2-配置-kms-地址" tabindex="-1"><a class="header-anchor" href="#_2-配置-kms-地址"><span>2. 配置 KMS 地址</span></a></h3>
<div class="hint-container note">
<p class="hint-container-title">KMS 科普</p>
<p>KMS最初是为了大批量的授权而诞生的。比如公司内数十台甚至上百台电脑，要统一对他们的 Office 进行激活，使用 KMS 要比人工一个个去激活要快得多。</p>
<p>这里的KMS地址指的是一个服务器的地址，通过向该服务器获取激活信息，从而达到激活的目的。</p>
</div>
<p>打开 “激活 &gt; KMS 管理”，在 “KMS 主机” 右侧输入 KMS 主机名称。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402162216088.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<p>通过<a href="https://www.coolhub.top/tech-articles/kms_list.html" target="_blank" rel="noopener noreferrer">此链接<ExternalLinkIcon/></a>可以查看所有可用的 KMS 地址及其实时可用性。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402162227670.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<p>KMS地址的选择可自行决定，在左侧选择一个 KMS 地址，并输入至 Office Tool Plus 中。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402162228496.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">未在此电脑上发现批量许可证 解决办法</p>
<p>重新选择一个带有“批量版”字样的许可证，比如 Office Mondo 2016 批量许可证；再输入一个可用的 KMS 地址。</p>
</div>
<h3 id="_3-开始激活" tabindex="-1"><a class="header-anchor" href="#_3-开始激活"><span>3. 开始激活</span></a></h3>
<p>最后一步，点击右上角的“激活”按钮：</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402162230086.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<p>画红框的产品激活成功。激活失败的，可以点击错误代码查看错误原因。上文只列举了部分比较常见的错误解决方法。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402162232414.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
</div></template>


