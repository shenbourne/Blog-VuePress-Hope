import comp from "F:/Git/Github Clone/vuepress-theme-hope/src/.vuepress/.temp/pages/clips/index.html.vue"
const data = JSON.parse("{\"path\":\"/clips/\",\"title\":\"剪藏\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"剪藏\",\"index\":false,\"icon\":\"book\",\"category\":[\"使用指南\"],\"article\":false,\"description\":\"\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/clips/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"ShenBourne\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"剪藏\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"ShenBourne\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"剪藏\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.05,\"words\":16},\"filePathRelative\":\"clips/README.md\",\"excerpt\":\"\",\"autoDesc\":true}")
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
