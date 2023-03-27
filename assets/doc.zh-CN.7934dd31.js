import{d as a,c as u,a as t,o as n}from"./vue.90a030a7.js";const l={class:"markdown-body"},p=t(`<h1>Radio \u5355\u9009\u6846</h1><h3>\u4ECB\u7ECD</h3><p>\u5355\u9009\u6846\uFF0C\u7528\u4E8E\u5728\u591A\u4E2A\u9009\u9879\u4E2D\u9009\u62E9\u5355\u4E2A\u7ED3\u679C\u3002</p><h3>\u5B89\u88C5\u4F7F\u7528</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/radio&quot;</span>;
</code></pre><h3>\u5355\u9009\u6846\u57FA\u7840\u7528\u6CD5</h3><p>\u4E00\u822C\u6210\u7EC4\u51FA\u73B0\uFF0C\u901A\u8FC7 value \u548C name \u7684\u5339\u914D\u6765\u7ED1\u5B9A\u52FE\u9009\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-radio-group</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;apple&quot;</span>&gt;</span>\u82F9\u679C<span class="hljs-tag">&lt;/<span class="hljs-name">quark-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;banana&quot;</span>&gt;</span>\u9999\u8549<span class="hljs-tag">&lt;/<span class="hljs-name">quark-radio</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-radio-group</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">value</span>: <span class="hljs-string">&quot;apple&quot;</span>, <span class="hljs-comment">// value \u521D\u59CB\u503C: apple</span>
    };
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">onChange</span>(<span class="hljs-params">{ detail }</span>)</span> {
      <span class="hljs-built_in">this</span>.value = detail.value;
    },
  },
};
</code></pre><h3>\u5355\u9009\u6846\u5F62\u72B6</h3><p>\u5355\u9009\u6846\u652F\u6301<code class="">round</code>\u3001<code class="">square</code>\u4E24\u79CD\u5F62\u72B6\uFF0C\u9ED8\u8BA4\u4E3A <code class="">round</code>\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-radio-group</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;apple&quot;</span>&gt;</span>\u5706\u5F62(\u9ED8\u8BA4)<span class="hljs-tag">&lt;/<span class="hljs-name">quark-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;banana&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span>\u65B9\u5F62<span class="hljs-tag">&lt;/<span class="hljs-name">quark-radio</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-radio-group</span>&gt;</span>
</code></pre><h3>\u5355\u9009\u6846\u5927\u5C0F</h3><p>\u5355\u9009\u6846\u5927\u5C0F\u652F\u6301 <code class="">normal</code>\u3001<code class="">big</code> \u4E24\u79CD\uFF0C\u9ED8\u8BA4\u4E3A <code class="">normal</code>\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-radio-group</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;apple&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;big&quot;</span>&gt;</span>\u65B9\u5F62(\u5927)<span class="hljs-tag">&lt;/<span class="hljs-name">quark-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;banana&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;big&quot;</span>&gt;</span>\u5706\u5F62(\u5927)<span class="hljs-tag">&lt;/<span class="hljs-name">quark-radio</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-radio-group</span>&gt;</span>
</code></pre><h3>\u5355\u9009\u6846\u7981\u7528</h3><p>\u5355\u9009\u6846\u652F\u6301\u7981\u7528</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-radio</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>\u5DF2\u9009-\u7981\u7528<span class="hljs-tag">&lt;/<span class="hljs-name">quark-radio</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-radio</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>\u672A\u9009-\u7981\u7528<span class="hljs-tag">&lt;/<span class="hljs-name">quark-radio</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-radio</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>\u65B9\u5F62-\u5DF2\u9009-\u7981\u7528<span class="hljs-tag">&lt;/<span class="hljs-name">quark-radio</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-radio</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">disabled</span>
  &gt;</span>\u65B9\u5F62-\u672A\u9009-\u7981\u7528&lt;/quark-radio
&gt;
</code></pre><h3>\u5355\u9009\u6846\u98CE\u683C</h3><p>\u5355\u9009\u6846\u9009\u4E2D\u989C\u8272\u81EA\u5B9A\u4E49</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-radio</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>\u9009\u4E2D\u989C\u8272\u81EA\u5B9A\u4E49<span class="hljs-tag">&lt;/<span class="hljs-name">quark-radio</span>&gt;</span>
</code></pre><pre><code class="language-css">:quark-radio {
  --radio-background: <span class="hljs-built_in">linear-gradient</span>(<span class="hljs-number">225deg</span>, <span class="hljs-number">#ff918d</span> <span class="hljs-number">0%</span>, <span class="hljs-number">#f54640</span> <span class="hljs-number">100%</span>);
}
</code></pre><h2>API</h2><h3>Props: quark-radio</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>shape</td><td>\u5F62\u72B6\uFF0C\u53EF\u9009\u503C\u4E3A <code class="">round</code> <code class="">square</code></td><td><code class="">string</code></td><td><code class="">round</code></td></tr><tr><td>size</td><td>\u5355\u9009\u6846\u5927\u5C0F\uFF0C\u53EF\u9009\u503C\u4E3A <code class="">normal</code> <code class="">big</code></td><td><code class="">string</code></td><td><code class="">normal</code></td></tr><tr><td>disabled</td><td>\u5355\u9009\u6846\u7981\u7528\u72B6\u6001</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr></tbody></table><h3>Props: quark-radio-group</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>value</td><td>\u6307\u5B9A\u9009\u4E2D\u7684\u9009\u9879</td><td><code class="">string</code></td><td>-</td></tr></tbody></table><h3>Event: quark-radio-Group</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>change</td><td>\u53D8\u5316\u65F6\u56DE\u8C03\u51FD\u6570</td><td><code class="">(e: { detail: { value: string } }) =&gt; void</code></td></tr></tbody></table><h2>\u6837\u5F0F\u53D8\u91CF</h2><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4EE5\u4E0B<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS \u53D8\u91CF</a>\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003<a href="#/zh-CN/guide/theme">\u4E3B\u9898\u5B9A\u5236</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code class="">--radio-font-size</code></td><td>radio \u6587\u5B57\u5927\u5C0F</td><td><code class="">12px</code></td></tr><tr><td><code class="">--radio-color</code></td><td>radio \u6587\u5B57\u989C\u8272</td><td><code class="">#242729 </code></td></tr><tr><td><code class="">--radio-label-height</code></td><td>radio \u6587\u5B57\u884C\u9AD8</td><td>\u548C\u9009\u62E9\u6846\u9AD8\u5EA6\u4E00\u81F4</td></tr><tr><td><code class="">--radio-size</code></td><td>radio \u5355\u9009\u6846\u5C3A\u5BF8\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8E size \u5C5E\u6027</td><td><code class="">16px; big: 20px</code></td></tr><tr><td><code class="">--radio-background</code></td><td>radio \u9009\u4E2D\u989C\u8272</td><td><code class="">#0088ff</code></td></tr></tbody></table>`,32),c=[p],h={},g="",j=a({__name:"doc.zh-CN",setup(e,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(d,r)=>(n(),u("div",l,c))}});export{j as default,g as excerpt,h as frontmatter};
