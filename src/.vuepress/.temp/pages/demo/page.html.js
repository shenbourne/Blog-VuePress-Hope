import comp from "D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/demo/page.html.vue"
const data = JSON.parse("{\"path\":\"/demo/page.html\",\"title\":\"页面配置\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"页面配置\",\"cover\":\"/assets/images/cover1.jpg\",\"icon\":\"file\",\"order\":3,\"author\":\"Ms.Hope\",\"date\":\"2020-01-01T00:00:00.000Z\",\"category\":[\"使用指南\"],\"tag\":[\"页面配置\",\"使用指南\"],\"sticky\":true,\"star\":true,\"footer\":\"这是测试显示的页脚\",\"copyright\":\"无版权\"},\"headers\":[{\"level\":2,\"title\":\"页面标题\",\"slug\":\"页面标题\",\"link\":\"#页面标题\",\"children\":[]},{\"level\":2,\"title\":\"页面信息\",\"slug\":\"页面信息\",\"link\":\"#页面信息\",\"children\":[]},{\"level\":2,\"title\":\"页面内容\",\"slug\":\"页面内容\",\"link\":\"#页面内容\",\"children\":[]},{\"level\":2,\"title\":\"组件\",\"slug\":\"组件\",\"link\":\"#组件\",\"children\":[]}],\"readingTime\":{\"minutes\":1.76,\"words\":529},\"filePathRelative\":\"demo/page.md\",\"localizedDate\":\"2020年1月1日\"}")
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
