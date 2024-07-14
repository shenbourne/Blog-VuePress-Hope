      export const typesMap = {"article":{"/":{"path":"/article/","indexes":[12,21,0,1,2,3,4,5,6,10,7,11,8,9,13,14,17,15,16,18,19,20]}},"star":{"/":{"path":"/star/","indexes":[12]}},"timeline":{"/":{"path":"/timeline/","indexes":[12]}}};
      
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

      