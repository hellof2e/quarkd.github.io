import{c as a,o as s,a as d}from"./vue.ac8d90f1.js";const e={class:"markdown-body"},c=d(`<h1>Tag \u6807\u7B7E</h1><h3>\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u6807\u8BB0\u548C\u5206\u7C7B\u7684\u6807\u7B7E\u3002</p><h3>\u5B89\u88C5\u4F7F\u7528</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&#39;quarkd/lib/tag&#39;</span>;
</code></pre><h3>\u57FA\u672C\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-tag</span>&gt;</span>\u6B63<span class="hljs-tag">&lt;/<span class="hljs-name">quark-tag</span>&gt;</span>
</code></pre><h3>\u6807\u7B7E\u7C7B\u578B</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-tag</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u6B63<span class="hljs-tag">&lt;/<span class="hljs-name">quark-tag</span>&gt;</span>
</code></pre><h3>\u6807\u7B7E\u5927\u5C0F</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-tag</span>&gt;</span>\u6B63<span class="hljs-tag">&lt;/<span class="hljs-name">quark-tag</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-tag</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span>&gt;</span>\u6B63<span class="hljs-tag">&lt;/<span class="hljs-name">quark-tag</span>&gt;</span>
</code></pre><h3>\u7A7A\u5FC3\u6807\u7B7E</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-tag</span> <span class="hljs-attr">plain</span>&gt;</span>\u6B63<span class="hljs-tag">&lt;/<span class="hljs-name">quark-tag</span>&gt;</span>
</code></pre><h3>\u81EA\u5B9A\u4E49\u6837\u5F0F</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-tag</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#ffe1e1&quot;</span> <span class="hljs-attr">textcolor</span>=<span class="hljs-string">&quot;#ad0000&quot;</span>&gt;</span>\u6B63<span class="hljs-tag">&lt;/<span class="hljs-name">quark-tag</span>&gt;</span>
</code></pre><h3>\u5706\u89D2\u6807\u7B7E</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-tag</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span> <span class="hljs-attr">round</span>&gt;</span>\u6B63<span class="hljs-tag">&lt;/<span class="hljs-name">quark-tag</span>&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>type</td><td>\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A <code>primary</code> <code>danger</code> <code>orange</code> <code>success</code> <code>warning</code> <code>gray</code></td><td><code>string</code></td><td><code>primary</code></td></tr><tr><td>size</td><td>\u6807\u7B7E\u5927\u5C0F\uFF0C\u53EF\u9009\u503C\u4E3A <code>small</code> <code>large</code></td><td><code>string</code></td><td><code>small</code></td></tr><tr><td>plain</td><td>\u662F\u5426\u7A7A\u5FC3</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>round</td><td>\u662F\u5426\u5706\u89D2\u6807\u7B7E</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>color</td><td>\u6807\u7B7E\u989C\u8272</td><td><code>string</code></td><td>-</td></tr><tr><td>textcolor</td><td>\u6807\u7B7E\u6587\u5B57\u989C\u8272</td><td><code>string</code></td><td>-</td></tr></tbody></table><h2>\u6837\u5F0F\u53D8\u91CF</h2><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4EE5\u4E0B<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS\u53D8\u91CF</a>\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003<a href="#/zh-CN/guide/theme">\u4E3B\u9898\u5B9A\u5236</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--tag-border-radius</code></td><td>tag \u5706\u89D2</td><td><code>4px</code></td></tr><tr><td><code>--tag-hspacing</code></td><td>tag \u6587\u5B57\u5DE6\u53F3\u8FB9\u8DDD</td><td>small <code>4px</code>, large <code>6px</code></td></tr><tr><td><code>--tag-vspacing</code></td><td>tag \u6587\u5B57\u4E0A\u4E0B\u8FB9\u8DDD</td><td><code>2px</code></td></tr><tr><td><code>--tag-font-size</code></td><td>\u6587\u5B57\u5927\u5C0F</td><td>small <code>11px</code>, large <code>14px</code></td></tr><tr><td><code>--tag-font-weight</code></td><td>\u5B57\u91CD</td><td>small <code>400</code>, large <code>500</code></td></tr><tr><td><code>--tag-font-family</code></td><td>\u5B57\u4F53</td><td>small <code>PingFangSC-Regular, PingFang SC</code>, large <code>PingFangSC-Medium, PingFang SC</code></td></tr><tr><td><code>--tag-line-height</code></td><td>\u884C\u9AD8</td><td>small <code>12px</code>, large <code>20px</code></td></tr><tr><td><code>--tag-text-color</code></td><td>\u5B57\u4F53\u989C\u8272</td><td><code>#fff</code></td></tr><tr><td><code>--tag-background</code></td><td>tag \u80CC\u666F</td><td></td></tr><tr><td><code>--tag-border-color</code></td><td>\u63CF\u8FB9\u989C\u8272\uFF0C\u7A7A\u5FC3\u6807\u7B7E\u751F\u6548</td><td></td></tr></tbody></table>`,23),l=[c],h={__name:"doc.zh-CN",setup(n,{expose:t}){return t({frontmatter:{}}),(r,p)=>(s(),a("div",e,l))}};export{h as default};
