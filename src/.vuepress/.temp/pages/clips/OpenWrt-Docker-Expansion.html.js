import comp from "D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/clips/OpenWrt-Docker-Expansion.html.vue"
const data = JSON.parse("{\"path\":\"/clips/OpenWrt-Docker-Expansion.html\",\"title\":\"OpenWrt 为 Docker 扩容\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"OpenWrt 为 Docker 扩容\",\"icon\":\"expansion\",\"order\":-1,\"category\":[\"配置教程\"],\"tag\":[\"OpenWrt\",\"Docker\"],\"description\":\"OpenWrt 默认只给 Docker 约 200 MB 的空间，完全不够折腾的，一拉取镜像就提示 “no space left on device” 。必须要扩容！ 打开系统 > 磁盘管理 image.pngimage.png 选择对应磁盘，点击“修改进入修改界面” f5be80847444639c6b86876b11c40c8.pngf5be808...\"},\"headers\":[],\"readingTime\":{\"minutes\":0.73,\"words\":218},\"filePathRelative\":\"clips/OpenWrt-Docker-Expansion.md\",\"excerpt\":\"<p>OpenWrt 默认只给 Docker 约 200 MB 的空间，完全不够折腾的，一拉取镜像就提示 “no space left on device” 。必须要扩容！</p>\\n<p><strong>打开<code>系统 &gt; 磁盘管理</code></strong></p>\\n<figure><img src=\\\"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402151450335.png\\\" alt=\\\"image.png\\\" tabindex=\\\"0\\\" loading=\\\"lazy\\\"><figcaption>image.png</figcaption></figure>\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
