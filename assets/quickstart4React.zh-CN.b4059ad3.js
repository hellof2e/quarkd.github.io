import{d as u,c as a,a as n,o as t}from"./vue.c4355146.js";const l={class:"markdown-body"},e=n(`<h1>React \u9879\u76EE</h1><pre><code class="language-bash">npm i @quarkd/quark-react
</code></pre><h2>React</h2><pre><code class="language-jsx"><span class="hljs-keyword">import</span> { Button } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;

<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Demo</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">React</span>.<span class="hljs-title">Component</span> </span>{
  <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> (
      <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">&quot;() =&gt; handleClick()&quot;</span>&gt;</span>
        Button
      <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span></span>
    );
  }
}
</code></pre><h2>\u6309\u9700\u52A0\u8F7D</h2><p>\u501F\u52A9 <code class="">babel</code> \u63D2\u4EF6<a href="https://github.com/umijs/babel-plugin-import">babel-plugin-import</a>\u5B9E\u73B0\u6309\u9700\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { Button } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><p>\u5728 <code class="">.babelrc</code> \u914D\u7F6E\u5982\u4E0B\uFF1A</p><pre><code class="language-js"><span class="hljs-built_in">module</span>.exports = {
  <span class="hljs-attr">plugins</span>: [[<span class="hljs-string">&quot;import&quot;</span>, { <span class="hljs-attr">libraryName</span>: <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span> }]],
};
</code></pre><p>\u6216\u8005\u60A8\u4E5F\u53EF\u4EE5\u91C7\u7528\u624B\u52A8\u6309\u9700\u52A0\u8F7D\u7684\u65B9\u5F0F\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> Button <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react/lib/button&quot;</span>;
</code></pre><br><details><summary>@quarkd/quark-react \u5185\u90E8\u539F\u7406</summary><p>\u7531\u4E8E <code class="">quarkd</code> \u63D0\u4F9B\u7684\u7EC4\u4EF6\u5747\u4E3A\u539F\u751F\u81EA\u5B9A\u4E49\u5143\u7D20\uFF08\u7C7B\u6BD4 div\uFF09\uFF0C\u56E0\u6B64\u7EC4\u4EF6\u5185\u6D3E\u53D1\uFF08dispatch\uFF09\u7684\u4E8B\u4EF6\u9700\u8981\u4F7F\u7528 <code class="">addEventLisener</code> \u63A5\u6536\u3002\u6BD4\u5982 <code class="">dialog</code> \u7EC4\u4EF6\u5185\u90E8\u7684\u81EA\u5B9A\u4E49\u5173\u95ED\u4E8B\u4EF6 <code class="">close</code>\u3002\u800C Vue \u6280\u672F\u6808\u5219\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 <code class="">@xx</code> \u5373\u53EF\u63A5\u6536\u539F\u751F\u6D3E\u53D1\u7684\u4E8B\u4EF6\uFF0C\u56E0\u6B64\u4E0D\u9700\u8981\u4F7F\u7528 <code class="">addEventLisener</code> \u63A5\u6536\u3002 <br><br> \u4E3A\u4E86\u63D0\u5347\u5F00\u53D1\u4F53\u9A8C\uFF0C\u6211\u4EEC\u5BF9 <code class="">quarkd</code> \u8FDB\u884C\u4E86 <a href="https://github.com/BBKolton/reactify-wc/">Reactify(React \u5316)</a>\uFF01</p></details><h2>Polyfill</h2><blockquote><p>Quarkd(Web components) \u652F\u6301\u73B0\u4EE3\u6D4F\u89C8\u5668\uFF0C\u5982\u9700\u517C\u5BB9\u66F4\u4F4E\u7248\u672C\uFF08 iOS 10 \u4EE5\u4E0B\uFF0CAndroid 7 \u4EE5\u4E0B\uFF09\uFF0C\u8BF7\u5728 HTML \u5934\u90E8\u52A0\u5165 polyfill\u3002</p></blockquote><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://unpkg.com/@webcomponents/webcomponentsjs@^2/&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre><p>\u66F4\u591A\u8BE6\u60C5\uFF0C\u53C2\u8003\u5B98\u65B9 Polyfill <a href="https://www.webcomponents.org/polyfills">\u70B9\u51FB\u67E5\u770B\u66F4\u591A</a>\u3002</p>`,17),p=[e],F={},h="",E=u({__name:"quickstart4React.zh-CN",setup(c,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(o,r)=>(t(),a("div",l,p))}});export{E as default,h as excerpt,F as frontmatter};
