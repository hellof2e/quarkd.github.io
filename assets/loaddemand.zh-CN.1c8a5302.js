import{d as a,c as u,a as e,o as t}from"./vue.66de799b.js";const o={class:"markdown-body"},n=e(`<h1>\u6309\u9700\u52A0\u8F7D</h1><h2>Vue</h2><p><code class="">Vue</code> \u91C7\u7528\u624B\u52A8\u6309\u9700\u52A0\u8F7D\u7684\u65B9\u5F0F\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/button&quot;</span>;
</code></pre><h2>React</h2><p>\u501F\u52A9 <code class="">babel</code> \u63D2\u4EF6<a href="https://github.com/umijs/babel-plugin-import">babel-plugin-import</a>\u5B9E\u73B0\u6309\u9700\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { Button } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><p>\u5728 <code class="">.babelrc</code> \u8FD9\u6837\u914D\u7F6E</p><pre><code class="language-js"><span class="hljs-built_in">module</span>.exports = {
  <span class="hljs-attr">plugins</span>: [[<span class="hljs-string">&quot;import&quot;</span>, { <span class="hljs-attr">libraryName</span>: <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span> }]],
};
</code></pre><p>\u6216\u8005\u4E5F\u53EF\u4EE5\u91C7\u7528\u624B\u52A8\u6309\u9700\u52A0\u8F7D\u7684\u65B9\u5F0F\uFF0C\u4F46\u4E0D\u63A8\u8350\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> Button <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react/lib/button&quot;</span>;
</code></pre>`,11),p=[n],i={},h="",m=a({__name:"loaddemand.zh-CN",setup(r,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(c,l)=>(t(),u("div",o,p))}});export{m as default,h as excerpt,i as frontmatter};