import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
import { MR_HOPE_AVATAR } from "./logo.js";

export default hopeTheme({
  hostname: "https://mister-hope.github.io",

  author: {
    name: "ShenBourne",
    url: "https://blog.shenbourne.com",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/avatar1.png",

  repo: "shenbourne/vuepress-theme-hope",

  docsDir: "src",

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  footer: "默认页脚",
  displayFooter: true,

  // 博客相关
  blog: {
    description: "一个在校学生",
    intro: "/intro.html",
    medias: {
    //Baidu: "https://example.com",
      BiliBili: "https://space.bilibili.com/1715969297",
    //Youtube: "https://www.youtube.com/channel/UCRPbhgjYqX38BYNtoK_2UAA",
    //Bitbucket: "https://example.com",
    //Dingding: "https://example.com",
    //Discord: "https://example.com",
    //Dribbble: "https://example.com",
    //Evernote: "https://example.com",
    //Facebook: "https://example.com",
    //Flipboard: "https://example.com",
      Gitee: "https://gitee.com/shenbourne",
      GitHub: "https://github.com/shenbourne",
    //Gitlab: "https://example.com",
      Gmail: "mailto:shenbourne07@gmail.com",
      Email: "mailto:shenbourne@163.com",
    //Instagram: "https://example.com",
    //Lark: "https://example.com",
    //Lines: "https://example.com",
    //Linkedin: "https://example.com",
    //Pinterest: "https://example.com",
    //Pocket: "https://example.com",
    //QQ: "http://wpa.qq.com/msgrd?v=3&uin=2643451023&site=qq&menu=yes",
    //Qzone: "https://example.com",
    //Reddit: "https://example.com",
    //Rss: "https://example.com",
      Steam: "https://steamcommunity.com/profiles/76561199142417936/",
    //Wechat: "https://example.com",
    //Weibo: "https://example.com",
    //Whatsapp: "https://example.com",
    //Twitter: "https://example.com",
    //Zhihu: "https://example.com",
    //MrHope: ["https://mister-hope.com", MR_HOPE_AVATAR],
    //more:https://theme-hope.vuejs.press/zh/guide/blog/blogger.html#%E5%BA%A7%E5%8F%B3%E9%93%AD%E3%80%81%E7%A4%BE%E4%BA%A4%E5%AA%92%E4%BD%93%E4%B8%8E%E4%B8%AA%E4%BA%BA%E4%BB%8B%E7%BB%8D%E9%A1%B5%E5%9C%B0%E5%9D%80
    },
  },

  // 加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 在这里配置主题提供的插件
  plugins: {
    blog: true,

    // 在启用之前需要安装 @waline/client
    // 警告: 这是一个仅供演示的测试服务器，在生产环境中请自行部署并使用自己的服务器！
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },

    components: {
      components: ["Badge", "VPCard", "VPBanner", "SiteInfo"],
    },

    sitemap: {
      hostname: 'https://hope.shenbourne.com'
    },

    '@vssue/vuepress-plugin-vssue': {
      // 设置 `platform` 而不是 `api`
      platform: 'github',
      // 其他的 Vssue 配置
      owner: 'shenbourne',
      repo: 'vuepress-theme-hope',
      clientId: 'Ov23liep2yx0Rr2ZrDAM',
      clientSecret: 'aa0bf131513c8d904b2c76a2dfee0378d76e997a',
      showComment: true,
    },

    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,

      // https://theme-hope.vuejs.press/zh/guide/markdown/chart/markmap.html
      markmap: true,

      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,


      // 在启用之前安装 chart.js
      // chart: true,

      // insert component easily

      // 在启用之前安装 echarts
      // echarts: true,

      // 在启用之前安装 flowchart.ts
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // 在启用之前安装 katex
      katex: true,

      // 在启用之前安装 mathjax-full
      mathjax: true,

      // 在启用之前安装 mermaid
      mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // 在启用之前安装 reveal.js
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      // 在启用之前安装 @vue/repl
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    // 如果你需要 PWA。安装 vuepress-plugin-pwa2 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
