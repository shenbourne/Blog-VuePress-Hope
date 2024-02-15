import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "博客演示",
  description: "vuepress-theme-hope 的博客演示",

  theme,

  plugins: [
    mdEnhancePlugin({
      // 启用 mermaid
      mermaid: true,
    }),
  ],

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
