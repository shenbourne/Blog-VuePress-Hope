import comp from "D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/story/index.html.vue"
const data = JSON.parse("{\"path\":\"/story/\",\"title\":\"Story\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Story\",\"article\":false,\"feed\":false,\"sitemap\":false},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null}")
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
