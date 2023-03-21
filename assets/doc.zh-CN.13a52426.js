import{d as a,c as t,a as n,o as l}from"./vue.c3d4c3bf.js";const u={class:"markdown-body"},p=n(`<h1>Badge \u5FBD\u6807</h1><h3>\u4ECB\u7ECD</h3><p>\u51FA\u73B0\u5728\u56FE\u6807\u6216\u6587\u5B57\u53F3\u4E0A\u89D2\u7684\u7EA2\u8272\u5706\u70B9\u3001\u6570\u5B57\u6216\u8005\u6587\u5B57\uFF0C\u8868\u793A\u6709\u65B0\u5185\u5BB9\u6216\u8005\u5F85\u5904\u7406\u7684\u4FE1\u606F\u3002</p><p>ps\uFF1A\u7531\u4E8E\u6D4F\u89C8\u5668\u6700\u5C0F\u5B57\u4F53\u5927\u5C0F\u4E3A12px\uFF0C\u56E0\u6B64demo\u4E2D\u5C55\u793A\u9AD8\u5EA6\u7565\u6709\u8BEF\u5DEE\u3002</p><h3>\u5B89\u88C5\u4F7F\u7528</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/badge&quot;</span>;
</code></pre><h3>\u5FBD\u6807\u72EC\u7ACB\u4F7F\u7528</h3><p>\u8BBE\u7F6E <code class="">content</code> \u5C5E\u6027\u540E\uFF0CBadge \u663E\u793A\u5BF9\u5E94\u7684\u5185\u5BB9\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E <code class="">type</code> \u5C5E\u6027\u4E3A dot \u6765\u663E\u793A\u5C0F\u7EA2\u70B9\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;dot&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;round&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;9&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;label&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;\u6587\u5B57\u5FBD\u6807&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-badge</span>&gt;</span>
</code></pre><h3>\u5FBD\u6807\u7C7B\u578B</h3><p>\u5FBD\u6807\u652F\u6301<code class="">dot</code>\u3001<code class="">round</code>\u3001<code class="">label</code>\u4E09\u79CD\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u4E3A <code class="">round</code>\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;dot&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;round&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;9&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-badge</span>&gt;</span>
</code></pre><h3>\u5FBD\u6807\u5927\u5C0F</h3><p>\u5FBD\u6807\u5927\u5C0F\u652F\u6301 <code class="">normal</code>\u3001<code class="">big</code> \u4E24\u79CD\uFF0C\u9ED8\u8BA4\u4E3A <code class="">normal</code>\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;dot&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-badge</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;9&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;dot&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;big&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-badge</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;big&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;9&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-badge</span>&gt;</span>
</code></pre><h3>\u5FBD\u6807\u98CE\u683C</h3><p>\u5FBD\u6807\u8FB9\u6846\u652F\u6301\u767D\u8272\u8FB9\u6846</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;label&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;\u666E\u901A\u5FBD\u6807&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;label&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;\u8FB9\u6846\u5FBD\u6807&quot;</span> <span class="hljs-attr">border</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-badge</span>&gt;</span>
</code></pre><h3>\u6570\u5B57\u5FBD\u6807</h3><p>\u6570\u5B57\u5FBD\u6807\u652F\u6301\u6700\u5927\u503C, \u8D85\u51FA\u663E\u793A\u2026, \u9ED8\u8BA4\u6700\u5927 99</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-badge</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;9&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-badge</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;100&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;99&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-badge</span>&gt;</span>
</code></pre><h3>\u81EA\u5B9A\u4E49\u6837\u5F0F-\u80CC\u666F\u8272</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-badge</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;bg-color&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-badge</span>&gt;</span>
</code></pre><pre><code class="language-css"><span class="hljs-selector-class">.bg-color</span> {
  --badge-<span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(<span class="hljs-number">90deg</span>, blue, pink);
}
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>type</td><td>\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A <code class="">dot</code> <code class="">round</code> <code class="">label</code></td><td><code class="">string</code></td><td><code class="">round</code></td></tr><tr><td>content</td><td>\u663E\u793A\u5185\u5BB9</td><td><code class="">string</code></td><td>\u65E0</td></tr><tr><td>size</td><td>\u5FBD\u6807\u5927\u5C0F\uFF0C\u53EF\u9009\u503C\u4E3A <code class="">normal</code> <code class="">big</code></td><td><code class="">string</code></td><td><code class="">normal</code></td></tr><tr><td>border</td><td>\u662F\u5426\u663E\u793A\u8FB9\u6846(\u9ED8\u8BA4\u767D\u8272)</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>max</td><td>\u6570\u5B57\u663E\u793A\u6700\u5927\u503C</td><td><code class="">number</code></td><td><code class="">99</code></td></tr></tbody></table><h2>\u6837\u5F0F\u53D8\u91CF</h2><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4EE5\u4E0B<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS \u53D8\u91CF</a>\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003<a href="#/zh-CN/guide/theme">\u4E3B\u9898\u5B9A\u5236</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code class="">--badge-text-color</code></td><td>badge \u6587\u5B57\u989C\u8272</td><td><code class="">#FFFFFF</code></td></tr><tr><td><code class="">--badge-background</code></td><td>badge \u80CC\u666F</td><td><code class="">#F72626</code></td></tr><tr><td><code class="">--badge-padding-column</code></td><td>badge \u7AD6\u76F4\u65B9\u5411\u5185\u8FB9\u8DDD</td><td><code class="">0</code></td></tr><tr><td><code class="">--badge-padding-row</code></td><td>badge \u6C34\u5E73\u65B9\u5411\u5185\u8FB9\u8DDD</td><td><code class="">normal: 4px</code> <code class="">big: 6px</code></td></tr><tr><td><code class="">--badge-font-size</code></td><td>badge \u6587\u5B57\u5927\u5C0F</td><td><code class="">normal: 10px</code> <code class="">label: 11px</code> <code class="">big: 12px</code></td></tr><tr><td><code class="">--badge-font-weight</code></td><td>badge \u6587\u5B57\u7C97\u7EC6</td><td><code class="">500</code></td></tr><tr><td><code class="">--badge-line-height</code></td><td>badge \u6587\u5B57\u884C\u9AD8</td><td><code class="">normal: 14px</code> <code class="">label: 16px</code> <code class="">big: 20px</code></td></tr><tr><td><code class="">--badge-dot-size</code></td><td>badge dot \u6A21\u5F0F\u5927\u5C0F</td><td><code class="">8px</code></td></tr><tr><td><code class="">--badge-font-family</code></td><td>badge font-family</td><td><code class="">\u8DDF\u968F\u7CFB\u7EDF</code></td></tr><tr><td><code class="">--badge-border-color</code></td><td>badge \u8FB9\u6846\u989C\u8272</td><td><code class="">#FFFFFF</code></td></tr></tbody></table>`,30),c=[p],h={},r="",j=a({__name:"doc.zh-CN",setup(d,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(e,o)=>(l(),t("div",u,c))}});export{j as default,r as excerpt,h as frontmatter};
