import { defineClientConfig } from "vuepress/client";
import { useHint } from "D:/Shenb/vuepress-theme-hope/blogs/node_modules/vuepress-plugin-md-enhance/lib/client/composables/hint.js";
import "D:/Shenb/vuepress-theme-hope/blogs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import Mermaid from "D:/Shenb/vuepress-theme-hope/blogs/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";
import { injectMermaidConfig } from "D:/Shenb/vuepress-theme-hope/blogs/node_modules/vuepress-plugin-md-enhance/lib/client//index.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    injectMermaidConfig(app);
    app.component("Mermaid", Mermaid);
  },
  setup: () => {
useHint();
  }
});
