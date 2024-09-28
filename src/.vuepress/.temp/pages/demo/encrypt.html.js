import comp from "F:/Git/Github Clone/vuepress-theme-hope/src/.vuepress/.temp/pages/demo/encrypt.html.vue"
const data = JSON.parse("{\"path\":\"/demo/encrypt.html\",\"title\":\"密码加密的文章\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"lock\",\"category\":[\"使用指南\"],\"tag\":[\"加密\"],\"article\":false,\"feed\":false,\"seo\":false,\"head\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.52,\"words\":156},\"filePathRelative\":\"demo/encrypt.md\"}")
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
