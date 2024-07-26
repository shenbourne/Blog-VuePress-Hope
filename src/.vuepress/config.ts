import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import theme from "./theme.js";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "ShenBourne",
  description: "Bourne Shen 的博客",

  head: [
    ['meta', { name: 'baidu-site-verification', content: 'codeva-QjpSgXKOie' }],
    ['meta', { name: 'msvalidate.01', content: '5C3477780F9F5FC1EC4506DC1B8B70B0' }]
  ],

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
