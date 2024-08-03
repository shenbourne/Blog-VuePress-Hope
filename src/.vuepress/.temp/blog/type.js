      export const typesMap = {"article":{"/":{"path":"/article/","indexes":[16,24,0,1,2,3,4,5,6,11,7,14,8,15,9,17,10,18,19,22,20,21,12,13,23]}},"star":{"/":{"path":"/star/","indexes":[16]}},"timeline":{"/":{"path":"/timeline/","indexes":[16]}}};
      
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

      