import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as g,o as a,c as s,a as e,b as n,d as i,e as r}from"./app-YthWqx6j.js";const c={},p=e("h3",{id:"_1-购买阿里云-oss",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-购买阿里云-oss"},[e("span",null,"1. 购买阿里云 OSS")])],-1),l={href:"https://common-buy.aliyun.com/?spm=5176.7933691.J_5253785160.2.31174c59Y8lFmm&commodityCode=ossbag#/buy",target:"_blank",rel:"noopener noreferrer"},d=e("p",null,[n("截止截稿40G价格仅为9元/年，由于 "),e("strong",null,"“99计划”"),n(" 500GB价格仅为118元/年。")],-1),m=e("figure",null,[e("img",{src:"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407122251892.png",alt:"image.png",tabindex:"0",loading:"lazy"}),e("figcaption",null,"image.png")],-1),h=e("h3",{id:"_2-创建-bucket",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-创建-bucket"},[e("span",null,"2. 创建 Bucket")])],-1),u={href:"https://oss.console.aliyun.com/overview",target:"_blank",rel:"noopener noreferrer"},b=e("strong",null,"“创建 Bucket”",-1),S=e("strong",null,"“Bucket名称”",-1),v=e("strong",null,"“地域”",-1),_=e("strong",null,"“确定”",-1),f=r(`<div class="hint-container tip"><p class="hint-container-title">“地域” 的选择</p><p><strong>“地域”</strong> 为连接速度，一般选择常居地附近。但仅相同区域内的产品内网可以互通，不同区域内的产品将使用外网访问，并产生相应的流量费用。</p></div><figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407122302780.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h3 id="_3-跨域设置" tabindex="-1"><a class="header-anchor" href="#_3-跨域设置"><span>3. 跨域设置</span></a></h3><p>进入 Bucket 概览页面。具体网址为 <code>https://oss.console.aliyun.com/bucket/oss-cn-heyuan/[your-bucket-name]</code></p><p>进入 <strong>“数据安全”</strong> -&gt; <strong>“跨域设置”</strong>。选择 <strong>“创建规则”</strong>，在 <strong>“来源”</strong> 填入如下信息</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>app://obsidian.md
capacitor://localhost
http://localhost
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <strong>“允许 Methods”</strong> 全部勾选，支持所有请求。</p><p>在 <strong>“允许 Header”</strong> 填入：<code>*</code></p><figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407122313984.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>点击 <strong>“确定”</strong> 完成跨区设置</p><h3 id="_4-授权设置" tabindex="-1"><a class="header-anchor" href="#_4-授权设置"><span>4. 授权设置</span></a></h3><div class="hint-container note"><p class="hint-container-title">Step 1</p><p>为笔记 bucket 创建一个子账号，以达成对资源的管理</p></div><p>将鼠标移动至页面右上角，在弹出的悬浮框中选择 <strong>“AccessKey 管理”</strong></p><figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407122333781.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>在新页面的弹窗中选择 <strong>“开始使用子账户 AccessKey”</strong>。如果出现安全问题， 可以直接把这个子用户删除掉</p><figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407122335490.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>选择完毕进入新页面，选择 <strong>“创建用户”</strong></p><figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407122337600.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>在 <strong>“创建用户”</strong> 页面，输入 <strong>“登录名称”</strong> 和 <strong>“显示名称”</strong>（什么名字自己定），勾选 <strong>“OpenAPI 调用访问”</strong>。</p><figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407122343017.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>创建完成后复制 <strong>“AccessKey ID”</strong> 和 <strong>“AccessKey Secrect”</strong>。务必妥善保存亮着，在页面关闭后无法再次获取。</p><figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407122347395.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><div class="hint-container note"><p class="hint-container-title">Step 2</p><p>为新创建的用户分配管理权限</p></div><p>返回 Bucket 概览页面，进入 <strong>“权限管理”</strong> -&gt; <strong>“Bucket 授权策略”</strong>，点击 <strong>“新建授权”</strong>。</p><p><strong>“授权用户”</strong> 选择子账号，在选择框中选择刚刚创建的子账号。<strong>“授权操作”</strong> 选择 <strong>“完全控制”</strong>。</p><figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407140045290.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>点击 <strong>“确定”</strong> 完成新建</p>`,27);function y(k,x){const t=g("ExternalLinkIcon");return a(),s("div",null,[p,e("p",null,[n("进入 "),e("a",l,[n("对象存储 OSS 资源包"),i(t)]),n("，选择适合自己的套餐。")]),d,m,h,e("p",null,[n("进入 "),e("a",u,[n("OSS管理控制台"),i(t)]),n("，选择 "),b,n("，填入 "),S,n(" 和 "),v,n(" 。其他保持默认即可，点击 "),_,n(" 完成创建")]),f])}const B=o(c,[["render",y],["__file","Aliyun-OSS-Setting.html.vue"]]),j=JSON.parse('{"path":"/appendix/Aliyun-OSS-Setting.html","title":"阿里云OSS基础设置","lang":"zh-CN","frontmatter":{"title":"阿里云OSS基础设置","icon":"pic","order":2,"category":["安装教程"],"tag":["Obsidian","picGo"],"description":"1. 购买阿里云 OSS 进入 对象存储 OSS 资源包，选择适合自己的套餐。 截止截稿40G价格仅为9元/年，由于 “99计划” 500GB价格仅为118元/年。 image.pngimage.png 2. 创建 Bucket 进入 OSS管理控制台，选择 “创建 Bucket”，填入 “Bucket名称” 和 “地域” 。其他保持默认即可，点击 “...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/appendix/Aliyun-OSS-Setting.html"}],["meta",{"property":"og:site_name","content":"ShenBourne"}],["meta",{"property":"og:title","content":"阿里云OSS基础设置"}],["meta",{"property":"og:description","content":"1. 购买阿里云 OSS 进入 对象存储 OSS 资源包，选择适合自己的套餐。 截止截稿40G价格仅为9元/年，由于 “99计划” 500GB价格仅为118元/年。 image.pngimage.png 2. 创建 Bucket 进入 OSS管理控制台，选择 “创建 Bucket”，填入 “Bucket名称” 和 “地域” 。其他保持默认即可，点击 “..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407122251892.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-20T13:50:07.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"阿里云OSS基础设置"}],["meta",{"property":"article:author","content":"ShenBourne"}],["meta",{"property":"article:tag","content":"Obsidian"}],["meta",{"property":"article:tag","content":"picGo"}],["meta",{"property":"article:modified_time","content":"2024-07-20T13:50:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"阿里云OSS基础设置\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407122251892.png\\",\\"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407122302780.png\\",\\"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407122313984.png\\",\\"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407122333781.png\\",\\"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407122335490.png\\",\\"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407122337600.png\\",\\"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407122343017.png\\",\\"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407122347395.png\\",\\"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407140045290.png\\"],\\"dateModified\\":\\"2024-07-20T13:50:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ShenBourne\\",\\"url\\":\\"https://blog.shenbourne.com\\"}]}"]]},"headers":[{"level":3,"title":"1. 购买阿里云 OSS","slug":"_1-购买阿里云-oss","link":"#_1-购买阿里云-oss","children":[]},{"level":3,"title":"2. 创建 Bucket","slug":"_2-创建-bucket","link":"#_2-创建-bucket","children":[]},{"level":3,"title":"3. 跨域设置","slug":"_3-跨域设置","link":"#_3-跨域设置","children":[]},{"level":3,"title":"4. 授权设置","slug":"_4-授权设置","link":"#_4-授权设置","children":[]}],"git":{"createdTime":1721483407000,"updatedTime":1721483407000,"contributors":[{"name":"shenbourne","email":"shenbourne@163.com","commits":1}]},"readingTime":{"minutes":1.9,"words":570},"filePathRelative":"appendix/Aliyun-OSS-Setting.md","localizedDate":"2024年7月20日","excerpt":"<h3>1. 购买阿里云 OSS</h3>\\n<p>进入 <a href=\\"https://common-buy.aliyun.com/?spm=5176.7933691.J_5253785160.2.31174c59Y8lFmm&amp;commodityCode=ossbag#/buy\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">对象存储 OSS 资源包</a>，选择适合自己的套餐。</p>\\n<p>截止截稿40G价格仅为9元/年，由于 <strong>“99计划”</strong> 500GB价格仅为118元/年。</p>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407122251892.png\\" alt=\\"image.png\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image.png</figcaption></figure>","autoDesc":true}');export{B as comp,j as data};
