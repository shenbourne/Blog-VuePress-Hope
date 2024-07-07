      export const typesMap = {"article":{"/":{"path":"/article/","indexes":[11,20,0,1,2,3,4,5,6,7,10,8,9,12,13,16,14,15,17,18,19]}},"star":{"/":{"path":"/star/","indexes":[11]}},"timeline":{"/":{"path":"/timeline/","indexes":[11]}}};
      
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

      