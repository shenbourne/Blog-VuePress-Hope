import comp from "F:/Git/Github Clone/vuepress-theme-hope/src/.vuepress/.temp/pages/demo/encrypt.html.vue"
const data = JSON.parse("{\"path\":\"/demo/encrypt.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"feed\":false,\"seo\":false},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":\"demo/encrypt.md\"}")
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
