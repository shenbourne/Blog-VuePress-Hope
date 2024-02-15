import comp from "D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/story/x86-x64-amd64-arm.html.vue"
const data = JSON.parse("{\"path\":\"/story/x86-x64-amd64-arm.html\",\"title\":\"x64、amd64、arm之争\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"x64、amd64、arm之争\",\"icon\":\"Apache\",\"order\":2,\"category\":[\"故事\"],\"tag\":[\"ISA\"]},\"headers\":[],\"readingTime\":{\"minutes\":1.89,\"words\":566},\"filePathRelative\":\"story/x86-x64-amd64-arm.md\"}")
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
