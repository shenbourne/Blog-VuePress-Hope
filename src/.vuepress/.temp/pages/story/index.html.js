import comp from "F:/Git/Github Clone/vuepress-theme-hope/src/.vuepress/.temp/pages/story/index.html.vue"
const data = JSON.parse("{\"path\":\"/story/\",\"title\":\"Story\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Story\",\"article\":false,\"feed\":false,\"sitemap\":false,\"description\":\"\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/story/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"ShenBourne\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Story\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"ShenBourne\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Story\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null,\"excerpt\":\"\",\"autoDesc\":true}")
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
