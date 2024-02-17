import comp from "D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/clip/OpenWrt-Install.html.vue"
const data = JSON.parse("{\"path\":\"/clip/OpenWrt-Install.html\",\"title\":\"OpenWrt 安装教程\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"OpenWrt 安装教程\",\"icon\":\"router\",\"order\":2,\"category\":[\"安装教程\"],\"tag\":[\"OpenWrt\"],\"description\":\"1 准备u盘 准备u盘（后续会被完全擦除），打开wePE（一种常用的WinPE ^1安装工具，其中还包括了许多常用工具）微PE官网 点击“安装到U盘” 设置微PE选项 将DiskImage和esir的OpenWrt镜像放到u盘中 将u盘从电脑拔下 2 写入OpenWrt WinPE安装 插入软路由，给软路由接一套键鼠 插电开机，开机过程中狂按Esc（也...\"},\"headers\":[{\"level\":2,\"title\":\"1 准备u盘\",\"slug\":\"_1-准备u盘\",\"link\":\"#_1-准备u盘\",\"children\":[]},{\"level\":2,\"title\":\"2 写入OpenWrt\",\"slug\":\"_2-写入openwrt\",\"link\":\"#_2-写入openwrt\",\"children\":[{\"level\":3,\"title\":\"WinPE安装\",\"slug\":\"winpe安装\",\"link\":\"#winpe安装\",\"children\":[]},{\"level\":3,\"title\":\"写入镜像\",\"slug\":\"写入镜像\",\"link\":\"#写入镜像\",\"children\":[]}]},{\"level\":2,\"title\":\"3 初始配置OpenWrt\",\"slug\":\"_3-初始配置openwrt\",\"link\":\"#_3-初始配置openwrt\",\"children\":[{\"level\":3,\"title\":\"设置密码\",\"slug\":\"设置密码\",\"link\":\"#设置密码\",\"children\":[]},{\"level\":3,\"title\":\"配置软路由网络和端口\",\"slug\":\"配置软路由网络和端口\",\"link\":\"#配置软路由网络和端口\",\"children\":[]},{\"level\":3,\"title\":\"进入OpenWrt面板\",\"slug\":\"进入openwrt面板\",\"link\":\"#进入openwrt面板\",\"children\":[]}]},{\"level\":2,\"title\":\"3.1 OpenWrt的主路由设置\",\"slug\":\"_3-1-openwrt的主路由设置\",\"link\":\"#_3-1-openwrt的主路由设置\",\"children\":[]},{\"level\":2,\"title\":\"3.2 OpenWrt的旁路由设置\",\"slug\":\"_3-2-openwrt的旁路由设置\",\"link\":\"#_3-2-openwrt的旁路由设置\",\"children\":[{\"level\":3,\"title\":\"旁路由上的设置\",\"slug\":\"旁路由上的设置\",\"link\":\"#旁路由上的设置\",\"children\":[]},{\"level\":3,\"title\":\"所有流量都经过旁路由的设置\",\"slug\":\"所有流量都经过旁路由的设置\",\"link\":\"#所有流量都经过旁路由的设置\",\"children\":[]},{\"level\":3,\"title\":\"个别机器流量经过旁路由的设置\",\"slug\":\"个别机器流量经过旁路由的设置\",\"link\":\"#个别机器流量经过旁路由的设置\",\"children\":[]},{\"level\":3,\"title\":\"后话\",\"slug\":\"后话\",\"link\":\"#后话\",\"children\":[]}]},{\"level\":2,\"title\":\"4 获取IPv6地址\",\"slug\":\"_4-获取ipv6地址\",\"link\":\"#_4-获取ipv6地址\",\"children\":[{\"level\":3,\"title\":\"软路由获取IPv6地址\",\"slug\":\"软路由获取ipv6地址\",\"link\":\"#软路由获取ipv6地址\",\"children\":[]},{\"level\":3,\"title\":\"下游设备分配IPv6地址和局域网IPv4地址\",\"slug\":\"下游设备分配ipv6地址和局域网ipv4地址\",\"link\":\"#下游设备分配ipv6地址和局域网ipv4地址\",\"children\":[]}]}],\"readingTime\":{\"minutes\":5.17,\"words\":1552},\"filePathRelative\":\"clip/OpenWrt-Install.md\",\"excerpt\":\"<h2>1 准备u盘</h2>\\n<p>准备u盘（后续会被完全擦除），打开wePE（一种常用的WinPE <a href=\\\"WinPE:%E6%9E%81%E5%BA%A6%E7%B2%BE%E7%AE%80%E7%9A%84%E3%80%81%E5%8F%AF%E4%BB%A5%E5%9C%A8U%E7%9B%98%E8%BF%90%E8%A1%8C%E7%9A%84Windows%E7%B3%BB%E7%BB%9F\\\">^1</a>安装工具，其中还包括了许多常用工具）<a href=\\\"https://www.wepe.com.cn/download.html\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">微PE官网</a></p>\",\"autoDesc\":true}")
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
