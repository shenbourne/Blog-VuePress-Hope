import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "博客演示",
  description: "vuepress-theme-hope 的博客演示",

  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        enableAll: true,
      },

    },
  }),

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
