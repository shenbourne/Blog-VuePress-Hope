import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    "intro",
    {
      text: "剪藏",
      icon: "book",
      prefix: "clips/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "本地部署教程合集",
      icon: "local",
      prefix: "local/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "云端部署教程合集",
      icon: "cloud",
      prefix: "cloud/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "分享",
      icon: "book",
      prefix: "sharing/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    },
  ],
});
