      export const typesMap = {"article":{"/":{"path":"/article/","indexes":[9,17,0,1,2,3,4,5,8,6,7,10,11,14,12,13,15,16]}},"star":{"/":{"path":"/star/","indexes":[9]}},"timeline":{"/":{"path":"/timeline/","indexes":[9]}}};
      
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

      