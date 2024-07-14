import comp from "F:/Git/Github Clone/vuepress-theme-hope/src/.vuepress/.temp/pages/clips/index.html.vue"
const data = JSON.parse("{\"path\":\"/clips/\",\"title\":\"剪藏\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"剪藏\",\"index\":false,\"icon\":\"laptop-code\",\"category\":[\"使用指南\"],\"description\":\"\"},\"headers\":[],\"readingTime\":{\"minutes\":0.05,\"words\":15},\"filePathRelative\":\"clips/README.md\",\"excerpt\":\"\",\"autoDesc\":true}")
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
