import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "剪藏",
    icon: "pen-to-square",
    prefix: "/clips/",
    children: ["Office-Tool-Plus-Tutorial.md","OpenWrt-Docker-Expansion.md","OpenWrt-Install.md","VuePress-theme-hope2-Deploy.md","GitHub-and-picGo-Deploy.md"],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
