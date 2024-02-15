      export const typesMap = {"article":{"/":{"path":"/article/","indexes":[0,17,1,2,5,3,4,6,7,14,15,8,9,10,11,12,13,16]}},"star":{"/":{"path":"/star/","indexes":[0]}},"timeline":{"/":{"path":"/timeline/","indexes":[0]}}};
      
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

      