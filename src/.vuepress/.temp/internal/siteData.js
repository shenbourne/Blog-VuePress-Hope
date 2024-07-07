export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"ShenBourne\",\"description\":\"ShenBourne 的博客\",\"head\":[[\"meta\",{\"name\":\"baidu-site-verification\",\"content\":\"codeva-QjpSgXKOie\"}],[\"meta\",{\"name\":\"msvalidate.01\",\"content\":\"5C3477780F9F5FC1EC4506DC1B8B70B0\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
