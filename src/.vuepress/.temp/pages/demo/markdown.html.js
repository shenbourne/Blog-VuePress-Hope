import comp from "D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/demo/markdown.html.vue"
const data = JSON.parse("{\"path\":\"/demo/markdown.html\",\"title\":\"Markdown 展示\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Markdown 展示\",\"icon\":\"fab fa-markdown\",\"order\":2,\"category\":[\"使用指南\"],\"tag\":[\"Markdown\"]},\"headers\":[{\"level\":2,\"title\":\"Markdown 介绍\",\"slug\":\"markdown-介绍\",\"link\":\"#markdown-介绍\",\"children\":[]},{\"level\":2,\"title\":\"Markdown 配置\",\"slug\":\"markdown-配置\",\"link\":\"#markdown-配置\",\"children\":[]},{\"level\":2,\"title\":\"Markdown 扩展\",\"slug\":\"markdown-扩展\",\"link\":\"#markdown-扩展\",\"children\":[{\"level\":3,\"title\":\"VuePress 扩展\",\"slug\":\"vuepress-扩展\",\"link\":\"#vuepress-扩展\",\"children\":[]},{\"level\":3,\"title\":\"主题扩展\",\"slug\":\"主题扩展\",\"link\":\"#主题扩展\",\"children\":[]},{\"level\":3,\"title\":\"图片增强\",\"slug\":\"图片增强\",\"link\":\"#图片增强\",\"children\":[]}]}],\"readingTime\":{\"minutes\":3.08,\"words\":924},\"filePathRelative\":\"demo/markdown.md\"}")
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
