import { defineClientConfig } from "vuepress/client";
import { hasGlobalComponent } from "D:/Shenb/vuepress-theme-hope/blogs/node_modules/vuepress-shared/lib/client/index.js";

import Badge from "D:/Shenb/vuepress-theme-hope/blogs/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "D:/Shenb/vuepress-theme-hope/blogs/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";

import "D:/Shenb/vuepress-theme-hope/blogs/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
});
