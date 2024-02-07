<template><div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> navbar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vuepress-theme-hope"</span><span class="token punctuation">;</span>

  

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">navbar</span><span class="token punctuation">(</span><span class="token punctuation">[</span>

  <span class="token string">"/"</span><span class="token punctuation">,</span>

  <span class="token string">"/demo/"</span><span class="token punctuation">,</span>

  <span class="token punctuation">{</span>

    text<span class="token operator">:</span> <span class="token string">"博文"</span><span class="token punctuation">,</span>

    icon<span class="token operator">:</span> <span class="token string">"pen-to-square"</span><span class="token punctuation">,</span>

    prefix<span class="token operator">:</span> <span class="token string">"/posts/"</span><span class="token punctuation">,</span>

    children<span class="token operator">:</span> <span class="token punctuation">[</span>

      <span class="token punctuation">{</span>

        text<span class="token operator">:</span> <span class="token string">"苹果"</span><span class="token punctuation">,</span>

        icon<span class="token operator">:</span> <span class="token string">"pen-to-square"</span><span class="token punctuation">,</span>

        prefix<span class="token operator">:</span> <span class="token string">"apple/"</span><span class="token punctuation">,</span>

        children<span class="token operator">:</span> <span class="token punctuation">[</span>

          <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"苹果1"</span><span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">"pen-to-square"</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">"1"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>

          <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"苹果2"</span><span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">"pen-to-square"</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">"2"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>

          <span class="token string">"3"</span><span class="token punctuation">,</span>

          <span class="token string">"4"</span><span class="token punctuation">,</span>

        <span class="token punctuation">]</span><span class="token punctuation">,</span>

      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token punctuation">{</span>

        text<span class="token operator">:</span> <span class="token string">"香蕉"</span><span class="token punctuation">,</span>

        icon<span class="token operator">:</span> <span class="token string">"pen-to-square"</span><span class="token punctuation">,</span>

        prefix<span class="token operator">:</span> <span class="token string">"banana/"</span><span class="token punctuation">,</span>

        children<span class="token operator">:</span> <span class="token punctuation">[</span>

          <span class="token punctuation">{</span>

            text<span class="token operator">:</span> <span class="token string">"香蕉 1"</span><span class="token punctuation">,</span>

            icon<span class="token operator">:</span> <span class="token string">"pen-to-square"</span><span class="token punctuation">,</span>

            link<span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>

          <span class="token punctuation">}</span><span class="token punctuation">,</span>

          <span class="token punctuation">{</span>

            text<span class="token operator">:</span> <span class="token string">"香蕉 2"</span><span class="token punctuation">,</span>

            icon<span class="token operator">:</span> <span class="token string">"pen-to-square"</span><span class="token punctuation">,</span>

            link<span class="token operator">:</span> <span class="token string">"2"</span><span class="token punctuation">,</span>

          <span class="token punctuation">}</span><span class="token punctuation">,</span>

          <span class="token string">"3"</span><span class="token punctuation">,</span>

          <span class="token string">"4"</span><span class="token punctuation">,</span>

        <span class="token punctuation">]</span><span class="token punctuation">,</span>

      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"樱桃"</span><span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">"pen-to-square"</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">"cherry"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"火龙果"</span><span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">"pen-to-square"</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">"dragonfruit"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token string">"tomato"</span><span class="token punctuation">,</span>

      <span class="token string">"strawberry"</span><span class="token punctuation">,</span>

    <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token punctuation">{</span>

    text<span class="token operator">:</span> <span class="token string">"V2 文档"</span><span class="token punctuation">,</span>

    icon<span class="token operator">:</span> <span class="token string">"book"</span><span class="token punctuation">,</span>

    link<span class="token operator">:</span> <span class="token string">"https://theme-hope.vuejs.press/zh/"</span><span class="token punctuation">,</span>

  <span class="token punctuation">}</span><span class="token punctuation">,</span>

<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


