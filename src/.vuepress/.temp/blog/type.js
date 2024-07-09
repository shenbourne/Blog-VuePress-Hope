      export const typesMap = {"article":{"/":{"path":"/article/","indexes":[10,20,0,1,2,3,11,12,15,13,14,4,5,6,7,16,8,9,17,18,19]}},"star":{"/":{"path":"/star/","indexes":[10]}},"timeline":{"/":{"path":"/timeline/","indexes":[10]}}};
      
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

      