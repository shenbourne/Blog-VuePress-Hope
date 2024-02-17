import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import theme from "./theme.js";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "ShenBourne",
  description: "ShenBourne 的博客",

  theme,
  

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
