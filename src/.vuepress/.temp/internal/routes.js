export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/intro.html", { loader: () => import(/* webpackChunkName: "v-6d318e63" */"D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/intro.html.js"), meta: {"v":"/assets/images/cover3.jpg","e":"\n<p>将你的个人介绍和档案放置在此处。</p>\n","y":"a","t":"介绍页","i":"circle-info"} }],
  ["/", { loader: () => import(/* webpackChunkName: "v-4ec95bbd" */"D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/index.html.js"), meta: {"y":"h","t":"博客主页","i":"home"} }],
  ["/clips/Crack-Websites-Sharing.html", { loader: () => import(/* webpackChunkName: "v-077be3dd" */"D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/clips/Crack-Websites-Sharing.html.js"), meta: {"c":["分享"],"g":["crack"],"e":"<h2><a class=\"header-anchor\" href=\"#一、吾爱破解\"><span>一、</span></a><a href=\"https://www.52pojie.cn/\" target=\"_blank\" rel=\"noopener noreferrer\">吾爱破解</a></h2>\n<p>首推，说起破解界的一哥，当属吾爱论坛，始创于2008年，几乎是元老级别了。</p>\n<p>我平时找什么破解软件，大部分都是从这里找的，因为信得过它的专业，就是界面有些丑。这个网站，不只分享破解软件，还是个技术论坛，平时有什么问题，还可以在上面谈论，当然如果自己电脑不小心中了病毒，也是可以向上面求救，总之强大得一批，可以说明吾爱论坛有很多深藏于世的高手。事了拂衣去,深藏功与名~</p>","y":"a","t":"破解网站分享","i":"router","O":2} }],
  ["/clips/GitHub-and-picGo-Deploy.html", { loader: () => import(/* webpackChunkName: "v-edbdc80e" */"D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/clips/GitHub-and-picGo-Deploy.html.js"), meta: {"c":["安装教程"],"g":["GitHub","picGo","Typora"],"e":"<blockquote>\n<p>作者注：建议使用Github替换Gitee。</p>\n<p>作者两年亲身体验告诉大家，Github做图床十分靠谱！！有CDN加速访问巨快！！</p>\n<p>别担心不稳定！别担心访问慢！这些问题统统不存在。</p>\n</blockquote>\n<h2>一、配置GitHub</h2>\n<h3>注册Github账号</h3>\n<p>首先你需要一个github账号，如果没有的话，先注册。</p>\n<p>github官网地址：&nbsp;<a href=\"https://link.zhihu.com/?target=https%3A//github.com/\" target=\"_blank\" rel=\"noopener noreferrer\">https://github.com/</a></p>","y":"a","t":"使用Github+picGo搭建图床","i":"pic","O":2} }],
  ["/clips/Office-Tool-Plus-Tutorial.html", { loader: () => import(/* webpackChunkName: "v-5e8370ee" */"D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/clips/Office-Tool-Plus-Tutorial.html.js"), meta: {"c":["tutorial"],"g":["Office","crack"],"e":"<h2>1. Office Tool Plus 下载</h2>\n<p>先再官网下载 Office Tool Plus，官网网址：<a href=\"https://otp.landian.vip/zh-cn/\" target=\"_blank\" rel=\"noopener noreferrer\">otp.landian.vip</a></p>\n<p>打开<a href=\"https://otp.landian.vip/zh-cn/download.html\" target=\"_blank\" rel=\"noopener noreferrer\">下载地址</a>，选择适应的下载源和版本。</p>\n<figure><img src=\"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402160244851.png\" alt=\"image.png\" tabindex=\"0\" loading=\"lazy\"><figcaption>image.png</figcaption></figure>","y":"a","t":"Office Tool Plus 使用指南","i":"github","O":2} }],
  ["/clips/OpenWrt-Docker-Expansion.html", { loader: () => import(/* webpackChunkName: "v-0b4d3007" */"D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/clips/OpenWrt-Docker-Expansion.html.js"), meta: {"c":["配置教程"],"g":["OpenWrt","Docker"],"e":"<p>OpenWrt 默认只给 Docker 约 200 MB 的空间，完全不够折腾的，一拉取镜像就提示 “no space left on device” 。必须要扩容！</p>\n<p><strong>打开<code>系统 &gt; 磁盘管理</code></strong></p>\n<figure><img src=\"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402151450335.png\" alt=\"image.png\" tabindex=\"0\" loading=\"lazy\"><figcaption>image.png</figcaption></figure>","y":"a","t":"OpenWrt软路由为Docker扩容","i":"expansion","O":-1} }],
  ["/clips/OpenWrt-Install.html", { loader: () => import(/* webpackChunkName: "v-1a4a8afe" */"D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/clips/OpenWrt-Install.html.js"), meta: {"c":["安装教程"],"g":["OpenWrt"],"e":"<h2>1 准备u盘</h2>\n<p>准备u盘（后续会被完全擦除），打开wePE（一种常用的WinPE <a href=\"WinPE:%E6%9E%81%E5%BA%A6%E7%B2%BE%E7%AE%80%E7%9A%84%E3%80%81%E5%8F%AF%E4%BB%A5%E5%9C%A8U%E7%9B%98%E8%BF%90%E8%A1%8C%E7%9A%84Windows%E7%B3%BB%E7%BB%9F\">^1</a>安装工具，其中还包括了许多常用工具）<a href=\"https://www.wepe.com.cn/download.html\" target=\"_blank\" rel=\"noopener noreferrer\">微PE官网</a></p>","y":"a","t":"OpenWrt 安装教程","i":"router","O":2} }],
  ["/clips/picGo-integrated-Obsidian.html", { loader: () => import(/* webpackChunkName: "v-338009fe" */"D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/clips/picGo-integrated-Obsidian.html.js"), meta: {"c":["安装教程"],"g":["Obsidian","picGo"],"e":"<h3>效果综述</h3>\n<p>目前我的主力笔记软件是[[Obsidian]]，配图都是统一存放在同一文件夹&nbsp;<code>890 Attachments</code>&nbsp;内，使用[[Paste image rename]]使其与所引用的元文件名称一致，优点是<strong>方便跨文件引用以及安全隐私</strong>。但存在的弊端也很明显：<strong>随着文件数量增多会导致内存占用过大不利于跨平台同步以及迁移麻烦</strong>。这时可以考虑 webp 化或者干脆直接图床化。</p>\n<p>刚好有朋友遇到这个问题，需要将 Vault 里的全部本地图片转为图床链接，解决思路的话比较清晰，相信大家都能想得到：</p>","y":"a","t":"Obsidian本地图片通过picGo上传图床","i":"pic","O":2} }],
  ["/clips/Use-Git-to-Submit-Local-Code-to-GitHub.html", { loader: () => import(/* webpackChunkName: "v-0902c948" */"D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/clips/Use-Git-to-Submit-Local-Code-to-GitHub.html.js"), meta: {"c":["安装教程"],"g":["GitHub","Git"],"e":"<h3>安装git</h3>\n<ol>\n<li>打开<a href=\"https://git-scm.com/download/win\" target=\"_blank\" rel=\"noopener noreferrer\">Windows下载界面</a>，点击正文最前面的“Click here to download”超链接下载git（或者点击<a href=\"https://github.com/git-for-windows/git/releases/download/v2.43.0.windows.1/Git-2.43.0-64-bit.exe\" target=\"_blank\" rel=\"noopener noreferrer\">此处</a>直接下载git）。</li>\n</ol>","y":"a","t":"使用Git将本地代码提交到GitHub","i":"github","O":2} }],
  ["/clips/VuePress-theme-hope2-Deploy.html", { loader: () => import(/* webpackChunkName: "v-5d3dc1e9" */"D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/clips/VuePress-theme-hope2-Deploy.html.js"), meta: {"c":["安装教程"],"g":["VuePress","GitHub","Git"],"e":"<div class=\"language-cardlink\" data-ext=\"cardlink\" data-title=\"cardlink\"><pre class=\"language-cardlink\"><code>url: https://juejin.cn/post/7261555752586084410\ntitle: \"🚀VuePress-theme-hope2 搭建个人网站，万字长文保姆级教程，包含自动部署、评论、搜索等功能 - 掘金\"\ndescription: \"VuePress 是一个以 Markdown 为中心的静态网站生成器。好处是可以使用&nbsp;Markdown&nbsp;来书写内容文档或者博客。 VuePress 诞生的初衷是为了支持 Vue.js 及其子项目的文档\"\nhost: juejin.cn\nfavicon: https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/static/favicons/favicon-32x32.png\n</code></pre></div>","y":"a","t":"VuePress-theme-hope2 部署个人网站","i":"page","O":2} }],
  ["/clips/VuePress-theme-hope2-GitHub-deploy.html", { loader: () => import(/* webpackChunkName: "v-26624fd1" */"D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/clips/VuePress-theme-hope2-GitHub-deploy.html.js"), meta: {"c":["安装教程"],"g":["VuePress","GitHub"],"e":"<h3>部署到 GitHub Pages</h3>\n<p>如果你在使用模板，且在创建过程中选择了创建自动部署文档的 GitHub 工作流，那么你唯一要做的就是在&nbsp;<code>docs/.config.js</code>&nbsp;中设置正确的&nbsp;<a href=\"https://vuejs.press/zh/reference/config.html#base\" target=\"_blank\" rel=\"noopener noreferrer\"><code>base</code></a> 选项。</p>\n<ul>\n<li>\n<p>如果你打算发布到&nbsp;<code>https://&lt;USERNAME&gt;.github.io/</code>，则可以省略这一步，因为&nbsp;<code>base</code>&nbsp;默认即是&nbsp;<code>\"/\"</code>。</p>\n</li>\n<li>\n<p>如果你打算发布到&nbsp;<code>https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;/</code>（也就是说你的仓库在&nbsp;<code>https://github.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code>），则将&nbsp;<code>base</code>&nbsp;设置为&nbsp;<code>\"/&lt;REPO&gt;/\"</code>。</p>\n</li>\n</ul>","y":"a","t":"VuePress-theme-hope2 将个人网站部署到GitHub","i":"page","O":2} }],
  ["/clips/VuePress-theme-hope2-Local-deploy.html", { loader: () => import(/* webpackChunkName: "v-9bcdc572" */"D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/clips/VuePress-theme-hope2-Local-deploy.html.js"), meta: {"c":["安装教程"],"g":["VuePress"],"e":"<h3>运行环境设置</h3>\n<h4>1. 编辑器</h4>\n<p>一个方便快捷的编辑器在博客的搭建过程是功不可没的。推荐用VSCode编写和运行VuePress项目</p>\n<ol>\n<li>\n<p>在<a href=\"https://code.visualstudio.com/\" target=\"_blank\" rel=\"noopener noreferrer\">下载界面</a>点击左侧的蓝色按钮，选择你的操作系统，并下载。</p>\n</li>\n<li>\n<p>双击安装包打开，同意用户协议。</p>\n</li>\n<li>\n<p>在下载过程中 ，请务必<strong>全选</strong>下列选项：</p>\n</li>\n</ol>","y":"a","t":"VuePress-theme-hope2 本地部署个人网站","i":"page","O":2} }],
  ["/demo/disable.html", { loader: () => import(/* webpackChunkName: "v-c3be2b32" */"D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/demo/disable.html.js"), meta: {"c":["使用指南"],"g":["禁用"],"e":"<p>你可以通过设置页面的 Frontmatter，在页面禁用功能与布局。</p>\n","y":"a","t":"布局与功能禁用","i":"gears","O":4} }],
  ["/demo/encrypt.html", { loader: () => import(/* webpackChunkName: "v-64ab010a" */"D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/demo/encrypt.html.js"), meta: {"c":["使用指南"],"g":["加密"],"n":true,"y":"a","t":"密码加密的文章","i":"lock"} }],
  ["/demo/layout.html", { loader: () => import(/* webpackChunkName: "v-74022db9" */"D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/demo/layout.html.js"), meta: {"c":["指南"],"g":["布局"],"e":"<p>布局包括:</p>\n<ul>\n<li><a href=\"https://theme-hope.vuejs.press/zh/guide/layout/navbar.html\" target=\"_blank\" rel=\"noopener noreferrer\">导航栏</a></li>\n<li><a href=\"https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html\" target=\"_blank\" rel=\"noopener noreferrer\">侧边栏</a></li>\n<li><a href=\"https://theme-hope.vuejs.press/zh/guide/layout/footer.html\" target=\"_blank\" rel=\"noopener noreferrer\">页脚</a></li>\n</ul>","y":"a","t":"布局","i":"object-group","O":2} }],
  ["/demo/markdown.html", { loader: () => import(/* webpackChunkName: "v-793f96d8" */"D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/demo/markdown.html.js"), meta: {"c":["使用指南"],"g":["Markdown"],"e":"<p>VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。</p>\n<p>你应该创建和编写 Markdown 文件，以便 VuePress 可以根据文件结构将它们转换为不同的页面。</p>\n","y":"a","t":"Markdown 展示","i":"fab fa-markdown","O":2} }],
  ["/demo/page.html", { loader: () => import(/* webpackChunkName: "v-124387f4" */"D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/demo/page.html.js"), meta: {"a":"Ms.Hope","d":1577836800000,"l":"2020年1月1日","c":["使用指南"],"g":["页面配置","使用指南"],"u":true,"v":"/assets/images/cover1.jpg","e":"<p><code>more</code> 注释之前的内容被视为文章摘要。</p>\n","y":"a","t":"页面配置","i":"file","O":3} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "v-53116c3d" */"D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/demo/index.html.js"), meta: {"c":["使用指南"],"y":"a","t":"主要功能与配置演示","i":"laptop-code"} }],
  ["/story/x86-x64-amd64-arm.html", { loader: () => import(/* webpackChunkName: "v-f958fc1c" */"D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/story/x86-x64-amd64-arm.html.js"), meta: {"c":["故事"],"g":["ISA"],"e":"<p>x86 是 Intel 在 1978 年推出的一种 32 位指令集。从 386 时代开始的，一直沿用至今，是一种cisc指令集，所有 Intel 早期的 cpu，amd 早期的 cpu 都支持这种指令集，Intel 官方文档里面称为 “IA-32”。</p>\n<p>在2001年，Intel 发布了其最新的 64 位指令集架构 IA-64。但是一反常态，该指令集不能向下兼容 x86，即当时已经发布的软件均无法在该指令集下的 cpu 中运行，市场反应冷淡。现在电脑一般不会存在该指令集架构。</p>\n<p>在2003年，amd推出了AMD64，是 x86 的 64 位扩展（即能向下兼容 x86），获得市场的热烈反响。现存许多产品，尤其是在 Intel 发布 x86-64 之前进入市场的 64 位产品，往往采用该指令集架构。</p>","y":"a","t":"x64、amd64、arm之争","i":"Apache","O":2} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "v-8fe89ed2" */"D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/404.html.js"), meta: {"y":"p","t":""} }],
  ["/clips/", { loader: () => import(/* webpackChunkName: "v-f76a1cae" */"D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/clips/index.html.js"), meta: {"y":"p","t":"Clips"} }],
  ["/story/", { loader: () => import(/* webpackChunkName: "v-7ab26ed2" */"D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/story/index.html.js"), meta: {"y":"p","t":"Story"} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "v-4a79ed7c" */"D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/category/index.html.js"), meta: {"y":"p","t":"分类","I":false} }],
  ["/category/%E5%88%86%E4%BA%AB/", { loader: () => import(/* webpackChunkName: "v-7e078b54" */"D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/category/分享/index.html.js"), meta: {"y":"p","t":"分享 分类","I":false} }],
  ["/category/%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B/", { loader: () => import(/* webpackChunkName: "v-a6d9f8a6" */"D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/category/安装教程/index.html.js"), meta: {"y":"p","t":"安装教程 分类","I":false} }],
  ["/category/tutorial/", { loader: () => import(/* webpackChunkName: "v-6c6e96fd" */"D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/category/tutorial/index.html.js"), meta: {"y":"p","t":"tutorial 分类","I":false} }],
  ["/category/%E9%85%8D%E7%BD%AE%E6%95%99%E7%A8%8B/", { loader: () => import(/* webpackChunkName: "v-5719b668" */"D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/category/配置教程/index.html.js"), meta: {"y":"p","t":"配置教程 分类","I":false} }],
  ["/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/", { loader: () => import(/* webpackChunkName: "v-9ade34fc" */"D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/category/使用指南/index.html.js"), meta: {"y":"p","t":"使用指南 分类","I":false} }],
  ["/category/%E6%8C%87%E5%8D%97/", { loader: () => import(/* webpackChunkName: "v-54de69ab" */"D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/category/指南/index.html.js"), meta: {"y":"p","t":"指南 分类","I":false} }],
  ["/category/%E6%95%85%E4%BA%8B/", { loader: () => import(/* webpackChunkName: "v-3681bb35" */"D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/category/故事/index.html.js"), meta: {"y":"p","t":"故事 分类","I":false} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "v-2d1b5e52" */"D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/tag/index.html.js"), meta: {"y":"p","t":"标签","I":false} }],
  ["/tag/crack/", { loader: () => import(/* webpackChunkName: "v-2595a187" */"D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/tag/crack/index.html.js"), meta: {"y":"p","t":"标签: crack","I":false} }],
  ["/tag/github/", { loader: () => import(/* webpackChunkName: "v-3f4a3f88" */"D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/tag/github/index.html.js"), meta: {"y":"p","t":"标签: GitHub","I":false} }],
  ["/tag/picgo/", { loader: () => import(/* webpackChunkName: "v-0dd56c4f" */"D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/tag/picgo/index.html.js"), meta: {"y":"p","t":"标签: picGo","I":false} }],
  ["/tag/typora/", { loader: () => import(/* webpackChunkName: "v-637084f8" */"D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/tag/typora/index.html.js"), meta: {"y":"p","t":"标签: Typora","I":false} }],
  ["/tag/office/", { loader: () => import(/* webpackChunkName: "v-69a00b0f" */"D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/tag/office/index.html.js"), meta: {"y":"p","t":"标签: Office","I":false} }],
  ["/tag/openwrt/", { loader: () => import(/* webpackChunkName: "v-151cdef2" */"D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/tag/openwrt/index.html.js"), meta: {"y":"p","t":"标签: OpenWrt","I":false} }],
  ["/tag/docker/", { loader: () => import(/* webpackChunkName: "v-50add5aa" */"D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/tag/docker/index.html.js"), meta: {"y":"p","t":"标签: Docker","I":false} }],
  ["/tag/obsidian/", { loader: () => import(/* webpackChunkName: "v-5738a660" */"D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/tag/obsidian/index.html.js"), meta: {"y":"p","t":"标签: Obsidian","I":false} }],
  ["/tag/git/", { loader: () => import(/* webpackChunkName: "v-16aa6b2f" */"D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/tag/git/index.html.js"), meta: {"y":"p","t":"标签: Git","I":false} }],
  ["/tag/vuepress/", { loader: () => import(/* webpackChunkName: "v-1aca676e" */"D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/tag/vuepress/index.html.js"), meta: {"y":"p","t":"标签: VuePress","I":false} }],
  ["/tag/%E7%A6%81%E7%94%A8/", { loader: () => import(/* webpackChunkName: "v-058aaba4" */"D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/tag/禁用/index.html.js"), meta: {"y":"p","t":"标签: 禁用","I":false} }],
  ["/tag/%E5%8A%A0%E5%AF%86/", { loader: () => import(/* webpackChunkName: "v-b3798e36" */"D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/tag/加密/index.html.js"), meta: {"y":"p","t":"标签: 加密","I":false} }],
  ["/tag/%E5%B8%83%E5%B1%80/", { loader: () => import(/* webpackChunkName: "v-2edf170e" */"D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/tag/布局/index.html.js"), meta: {"y":"p","t":"标签: 布局","I":false} }],
  ["/tag/markdown/", { loader: () => import(/* webpackChunkName: "v-9d27a488" */"D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/tag/markdown/index.html.js"), meta: {"y":"p","t":"标签: Markdown","I":false} }],
  ["/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/", { loader: () => import(/* webpackChunkName: "v-2ad4e486" */"D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/tag/页面配置/index.html.js"), meta: {"y":"p","t":"标签: 页面配置","I":false} }],
  ["/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/", { loader: () => import(/* webpackChunkName: "v-3e733a72" */"D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/tag/使用指南/index.html.js"), meta: {"y":"p","t":"标签: 使用指南","I":false} }],
  ["/tag/isa/", { loader: () => import(/* webpackChunkName: "v-cd560d2c" */"D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/tag/isa/index.html.js"), meta: {"y":"p","t":"标签: ISA","I":false} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "v-7be5f476" */"D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/article/index.html.js"), meta: {"y":"p","t":"文章","I":false} }],
  ["/star/", { loader: () => import(/* webpackChunkName: "v-8847cf24" */"D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/star/index.html.js"), meta: {"y":"p","t":"星标","I":false} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "v-d5b24bc2" */"D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"y":"p","t":"时间轴","I":false} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
