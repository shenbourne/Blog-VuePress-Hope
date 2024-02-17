export const categoriesMap = {"category":{"/":{"path":"/category/","map":{"分享":{"path":"/category/分享/","indexes":[0]},"安装教程":{"path":"/category/安装教程/","indexes":[1,2,3,4,5,6,7]},"tutorial":{"path":"/category/tutorial/","indexes":[8]},"配置教程":{"path":"/category/配置教程/","indexes":[9]},"使用指南":{"path":"/category/使用指南/","indexes":[10,11,12,13,14]},"指南":{"path":"/category/指南/","indexes":[15]},"故事":{"path":"/category/故事/","indexes":[16]}}}},"tag":{"/":{"path":"/tag/","map":{"crack":{"path":"/tag/crack/","indexes":[0,8]},"GitHub":{"path":"/tag/github/","indexes":[1,4,5,6]},"picGo":{"path":"/tag/picgo/","indexes":[1,3]},"Typora":{"path":"/tag/typora/","indexes":[1]},"Office":{"path":"/tag/office/","indexes":[8]},"OpenWrt":{"path":"/tag/openwrt/","indexes":[9,2]},"Docker":{"path":"/tag/docker/","indexes":[9]},"Obsidian":{"path":"/tag/obsidian/","indexes":[3]},"Git":{"path":"/tag/git/","indexes":[4,5]},"VuePress":{"path":"/tag/vuepress/","indexes":[5,6,7]},"禁用":{"path":"/tag/禁用/","indexes":[11]},"加密":{"path":"/tag/加密/","indexes":[12]},"布局":{"path":"/tag/布局/","indexes":[15]},"Markdown":{"path":"/tag/markdown/","indexes":[13]},"页面配置":{"path":"/tag/页面配置/","indexes":[10]},"使用指南":{"path":"/tag/使用指南/","indexes":[10]},"ISA":{"path":"/tag/isa/","indexes":[16]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
  });


