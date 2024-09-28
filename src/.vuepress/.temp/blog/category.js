export const categoriesMap = {"category":{"/":{"path":"/category/","map":{"安装教程":{"path":"/category/安装教程/","indexes":[0,1,2,3,4,5,6,7,8,9,10,11]},"分享":{"path":"/category/分享/","indexes":[12,13,14,15]},"配置教程":{"path":"/category/配置教程/","indexes":[16,17]},"科普":{"path":"/category/科普/","indexes":[18,19]},"故事":{"path":"/category/故事/","indexes":[20]},"数学":{"path":"/category/数学/","indexes":[21]}}}},"tag":{"/":{"path":"/tag/","map":{"Obsidian":{"path":"/tag/obsidian/","indexes":[0,1,7,16]},"picGo":{"path":"/tag/picgo/","indexes":[0,1,7]},"GitHub":{"path":"/tag/github/","indexes":[2,3,5,7,11,15]},"Git":{"path":"/tag/git/","indexes":[2,11]},"VuePress":{"path":"/tag/vuepress/","indexes":[3,4,11]},"Aliyun":{"path":"/tag/aliyun/","indexes":[5,16]},"Docker":{"path":"/tag/docker/","indexes":[5,17]},"1Panel":{"path":"/tag/1panel/","indexes":[5]},"Synology":{"path":"/tag/synology/","indexes":[6,8]},"Paradox":{"path":"/tag/paradox/","indexes":[12]},"Typora":{"path":"/tag/typora/","indexes":[7]},"OSS":{"path":"/tag/oss/","indexes":[16]},"Office":{"path":"/tag/office/","indexes":[9]},"crack":{"path":"/tag/crack/","indexes":[9,13,14]},"OpenWrt":{"path":"/tag/openwrt/","indexes":[17,10]},"study":{"path":"/tag/study/","indexes":[18]},"Network":{"path":"/tag/network/","indexes":[19]},"ISA":{"path":"/tag/isa/","indexes":[20]},"证毕QED":{"path":"/tag/证毕qed/","indexes":[21]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
  });


