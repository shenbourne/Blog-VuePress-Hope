import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "剪藏",
    icon: "pen-to-square",
    prefix: "/notes/",
    children: [
      {
        text: "OpenWrt 安装教程",
        icon: "arrow",
        link: "OpenWrt-Install"
      },
      {
        text: "VuePress-theme-hope2 搭建个人网站",
        icon: "arrow",
        link: "VuePress-theme-hope2-Deploy"
      },
      {
        text: "使用Github+picGo搭建图床",
        icon: "arrow",
        link: "GitHub-and-picGo-Deploy"
      },
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
