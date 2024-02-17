export const categoriesMap = {"category":{"/":{"path":"/category/","map":{"安装教程":{"path":"/category/安装教程/","indexes":[0,1,2,3,4,5,6,7]},"配置教程":{"path":"/category/配置教程/","indexes":[8]},"使用指南":{"path":"/category/使用指南/","indexes":[9,10,11,12,13]},"指南":{"path":"/category/指南/","indexes":[14]},"分享":{"path":"/category/分享/","indexes":[15]},"故事":{"path":"/category/故事/","indexes":[16]}}}},"tag":{"/":{"path":"/tag/","map":{"Obsidian":{"path":"/tag/obsidian/","indexes":[0,4]},"picGo":{"path":"/tag/picgo/","indexes":[0,4]},"GitHub":{"path":"/tag/github/","indexes":[1,2,4,7]},"Git":{"path":"/tag/git/","indexes":[1,7]},"VuePress":{"path":"/tag/vuepress/","indexes":[2,3,7]},"Typora":{"path":"/tag/typora/","indexes":[4]},"Office":{"path":"/tag/office/","indexes":[5]},"crack":{"path":"/tag/crack/","indexes":[5,15]},"OpenWrt":{"path":"/tag/openwrt/","indexes":[8,6]},"Docker":{"path":"/tag/docker/","indexes":[8]},"禁用":{"path":"/tag/禁用/","indexes":[10]},"加密":{"path":"/tag/加密/","indexes":[11]},"布局":{"path":"/tag/布局/","indexes":[14]},"Markdown":{"path":"/tag/markdown/","indexes":[12]},"页面配置":{"path":"/tag/页面配置/","indexes":[9]},"使用指南":{"path":"/tag/使用指南/","indexes":[9]},"ISA":{"path":"/tag/isa/","indexes":[16]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
  });


