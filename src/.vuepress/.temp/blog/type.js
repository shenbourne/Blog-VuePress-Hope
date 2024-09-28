      export const typesMap = {"article":{"/":{"path":"/article/","indexes":[20,33,0,1,2,3,4,5,6,12,7,8,16,9,17,10,18,21,11,22,23,30,24,25,19,26,13,14,15,27,28,31,32,29]}},"star":{"/":{"path":"/star/","indexes":[20]}},"timeline":{"/":{"path":"/timeline/","indexes":[20]}}};
      
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

      