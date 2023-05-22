import{d as a,c as t,a as n,o as l}from"./vue.f39d0a77.js";const u={class:"markdown-body"},p=n(`<h1>\u52A0\u8F7D\u52A8\u753B Loading</h1><h3>\u4ECB\u7ECD</h3><p>\u52A0\u8F7D\u56FE\u6807\uFF0C\u7528\u4E8E\u8868\u793A\u52A0\u8F7D\u4E2D\u7684\u8FC7\u6E21\u72B6\u6001\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Loading } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>\u57FA\u672C\u4F7F\u7528</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Loading</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Loading</span>&gt;</span>
</code></pre><h3>\u52A0\u8F7D\u7C7B\u578B</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;circular&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Loading</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">Loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;spinner&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Loading</span>&gt;</span>
</code></pre><h3>\u81EA\u5B9A\u4E49\u5927\u5C0F</h3><p>\u9ED8\u8BA4\u5355\u4F4D\u4E3A <code class="">px</code>\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Loading</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Loading</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Loading</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;30&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Loading</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Loading</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;40&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Loading</span>&gt;</span>
</code></pre><h3>\u81EA\u5B9A\u4E49\u989C\u8272</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Loading</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;30&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Loading</span>&gt;</span> // \u9ED8\u8BA4\u989C\u8272
<span class="hljs-tag">&lt;<span class="hljs-name">Loading</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;30&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;green&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Loading</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Loading</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;30&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#08f&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Loading</span>&gt;</span>
</code></pre><h3>\u52A0\u8F7D\u6587\u6848</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Loading</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;30&quot;</span>&gt;</span>\u52A0\u8F7D\u4E2D...<span class="hljs-tag">&lt;/<span class="hljs-name">Loading</span>&gt;</span>
</code></pre><h3>\u5782\u76F4\u6392\u5217</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Loading</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;30&quot;</span> <span class="hljs-attr">vertical</span>&gt;</span>\u52A0\u8F7D\u4E2D...<span class="hljs-tag">&lt;/<span class="hljs-name">Loading</span>&gt;</span>
</code></pre><h3>\u81EA\u5B9A\u4E49\u6587\u672C\u6837\u5F0F</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Loading</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;30&quot;</span> <span class="hljs-attr">vertical</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;custom-text&quot;</span>&gt;</span>\u52A0\u8F7D\u4E2D...<span class="hljs-tag">&lt;/<span class="hljs-name">Loading</span>&gt;</span>
</code></pre><pre><code class="language-css"><span class="hljs-selector-class">.custom-text</span> {
  --loading-text-<span class="hljs-attribute">color</span>: <span class="hljs-number">#0088ff</span>;
}
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>type</td><td>\u56FE\u6807\u7C7B\u578B\uFF0C <code class="">circular</code> <code class="">spinner</code></td><td><code class="">string</code></td><td><code class="">spinner</code></td></tr><tr><td>color</td><td>\u56FE\u6807\u989C\u8272</td><td><code class="">string</code></td><td><code class="">#879099</code></td></tr><tr><td>size</td><td>\u56FE\u6807\u5927\u5C0F\uFF0C\u5982 <code class="">20px</code> <code class="">2em</code> <code class="">2rem</code> <code class="">20vm</code> <code class="">20vh</code></td><td><code class="">string or number</code></td><td><code class="">30px</code></td></tr><tr><td>vertical</td><td>\u6587\u6848\u662F\u5426\u5782\u76F4\u6392\u5217</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr></tbody></table><h2>\u6837\u5F0F\u53D8\u91CF</h2><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4EE5\u4E0B<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS \u53D8\u91CF</a>\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003<a href="#/zh-CN/guide/theme">\u4E3B\u9898\u5B9A\u5236</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code class="">--loading-text-color</code></td><td>\u52A0\u8F7D\u6587\u6848\u989C\u8272</td><td><code class="">#969799</code></td></tr><tr><td><code class="">--loading-text-font-size</code></td><td>\u52A0\u8F7D\u6587\u6848\u6587\u5B57\u5927\u5C0F</td><td><code class="">14px</code></td></tr></tbody></table>`,27),c=[p],r={},g="",j=a({__name:"doc-react.zh-CN",setup(e,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(o,d)=>(l(),t("div",u,c))}});export{j as default,g as excerpt,r as frontmatter};
