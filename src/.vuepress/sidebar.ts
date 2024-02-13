import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "如何使用",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "剪藏",
      icon: "book",
      prefix: "notes/",
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
    "intro",
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    },
  ],
});
