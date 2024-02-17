      export const typesMap = {"article":{"/":{"path":"/article/","indexes":[10,17,0,1,8,9,2,3,4,5,6,7,11,12,15,13,14,16]}},"star":{"/":{"path":"/star/","indexes":[10]}},"timeline":{"/":{"path":"/timeline/","indexes":[10]}}};
      
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

      