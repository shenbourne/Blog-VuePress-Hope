      export const typesMap = {"article":{"/":{"path":"/article/","indexes":[13,23,0,1,2,3,4,5,6,7,11,8,12,9,14,10,15,16,19,17,18,20,21,22]}},"star":{"/":{"path":"/star/","indexes":[13]}},"timeline":{"/":{"path":"/timeline/","indexes":[13]}}};
      
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

      