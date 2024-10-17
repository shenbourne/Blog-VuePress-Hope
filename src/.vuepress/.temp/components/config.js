import { defineClientConfig } from "vuepress/client";
import { hasGlobalComponent } from "F:/Git/Github Clone/vuepress-theme-hope/node_modules/.pnpm/vuepress-shared@2.0.0-rc.22_vuepress@2.0.0-rc.6_@vuepress+bundler-vite@2.0.0-rc.6_@types+node_nvsawcg3wg4nndyarh4sovit54/node_modules/vuepress-shared/lib/client/index.js";

import { useScriptTag } from "F:/Git/Github Clone/vuepress-theme-hope/node_modules/.pnpm/@vueuse+core@10.11.1_vue@3.5.12/node_modules/@vueuse/core/index.mjs";
import FontIcon from "F:/Git/Github Clone/vuepress-theme-hope/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.22_vuepress@2.0.0-rc.6_@vuepress+bundler-vite@2.0.0-rc.6__pttoffb5tbwx3ruz2ph3g44s2m/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import Badge from "F:/Git/Github Clone/vuepress-theme-hope/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.22_vuepress@2.0.0-rc.6_@vuepress+bundler-vite@2.0.0-rc.6__pttoffb5tbwx3ruz2ph3g44s2m/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "F:/Git/Github Clone/vuepress-theme-hope/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.22_vuepress@2.0.0-rc.6_@vuepress+bundler-vite@2.0.0-rc.6__pttoffb5tbwx3ruz2ph3g44s2m/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";
import VPBanner from "F:/Git/Github Clone/vuepress-theme-hope/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.22_vuepress@2.0.0-rc.6_@vuepress+bundler-vite@2.0.0-rc.6__pttoffb5tbwx3ruz2ph3g44s2m/node_modules/vuepress-plugin-components/lib/client/components/VPBanner.js";
import SiteInfo from "F:/Git/Github Clone/vuepress-theme-hope/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.22_vuepress@2.0.0-rc.6_@vuepress+bundler-vite@2.0.0-rc.6__pttoffb5tbwx3ruz2ph3g44s2m/node_modules/vuepress-plugin-components/lib/client/components/SiteInfo.js";

import "F:/Git/Github Clone/vuepress-theme-hope/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.22_vuepress@2.0.0-rc.6_@vuepress+bundler-vite@2.0.0-rc.6__pttoffb5tbwx3ruz2ph3g44s2m/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    if(!hasGlobalComponent("VPBanner")) app.component("VPBanner", VPBanner);
    if(!hasGlobalComponent("SiteInfo")) app.component("SiteInfo", SiteInfo);
    
  },
  setup: () => {
    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/brands.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/solid.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/fontawesome.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

  },
  rootComponents: [

  ],
});
