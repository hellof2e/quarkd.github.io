import{d as a,c as t,a as u,o as d}from"./vue.477dc652.js";const c={class:"markdown-body"},l=u(`<h1>Search \u641C\u7D22</h1><h3>\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u641C\u7D22\u573A\u666F\u7684\u8F93\u5165\u6846\u7EC4\u4EF6\u3002</p><h2>\u5B89\u88C5</h2><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/search&quot;</span>;
</code></pre><h2>\u57FA\u672C\u7528\u6CD5</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-search</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;123&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-search</span>&gt;</span>
</code></pre><h2>\u5706\u89D2</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-search</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;round&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;123&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-search</span>&gt;</span>
</code></pre><h3>\u9690\u85CF\u53D6\u6D88\u6309\u94AE</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-search</span> <span class="hljs-attr">hideaction</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-search</span>&gt;</span>
</code></pre><h3>\u663E\u793A\u8FD4\u56DE\u6309\u94AE</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-search</span> <span class="hljs-attr">showback</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-search</span>&gt;</span>
</code></pre><h3>\u6DF1\u8272\u6A21\u5F0F</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-search</span> <span class="hljs-attr">dark</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-search</span>&gt;</span>
</code></pre><h3>\u63D2\u69FD</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-search</span> <span class="hljs-attr">hideaction</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;action&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\u4E3B\u8981\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-search</span>&gt;</span>
</code></pre><h3>\u4E8B\u4EF6\u7ED1\u5B9A</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-search</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;search&quot;</span> <span class="hljs-attr">showback</span> @<span class="hljs-attr">focus</span>=<span class="hljs-string">&quot;onFocus&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-javascript">methods: {
    <span class="hljs-function"><span class="hljs-title">onBlur</span>(<span class="hljs-params">{ detail }</span>)</span> {
        <span class="hljs-built_in">console</span>.log(detail.value)
    },
    <span class="hljs-function"><span class="hljs-title">onChange</span>(<span class="hljs-params">{ detail }</span>)</span> {
        <span class="hljs-built_in">console</span>.log(detail.value)
    }
}
</code></pre><h3>\u81EA\u5B9A\u4E49\u6837\u5F0F</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-search</span> <span class="hljs-attr">showback</span> <span class="hljs-attr">iconcolor</span>=<span class="hljs-string">&quot;aqua&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-css"><span class="hljs-comment">/* CSS \u7701\u7565\u53F7\u5C55\u793A */</span>
:quark-search {
  --search-background: <span class="hljs-built_in">linear-gradient</span>(<span class="hljs-number">135deg</span>, <span class="hljs-number">#667eea</span>, <span class="hljs-number">#764ba2</span>);
  --search-action-text-<span class="hljs-attribute">color</span>: aqua;
}
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>value</td><td>\u8F93\u5165\u6846\u7684\u503C</td><td></td><td></td></tr><tr><td>shape</td><td>\u641C\u7D20\u6846\u5F62\u72B6</td><td><code class="">square</code> <code class="">round</code></td><td><code class="">square</code></td></tr><tr><td>dark</td><td>\u6DF1\u8272\u6A21\u5F0F</td><td><code class="">boolean</code></td><td><code class="">fasle</code></td></tr><tr><td>showback</td><td>\u662F\u5426\u663E\u793A\u8FD4\u56DE\u6309\u94AE</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>hideaction</td><td>\u9690\u85CF\u53F3\u4FA7\u53D6\u6D88\u6309\u94AE</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>actiontext</td><td>\u53D6\u6D88\u6309\u94AE\u6587\u5B57</td><td><code class="">string</code></td><td><code class="">\u53D6\u6D88</code></td></tr><tr><td>iconcolor</td><td>\u8FD4\u56DE\u6309\u94AE\u989C\u8272 \u6DF1\u8272\u6A21\u5F0F\u4E0B\u4E3A\u767D\u8272</td><td><code class="">string</code></td><td><code class="">#242729</code></td></tr><tr><td>placeholder</td><td>\u5360\u4F4D\u63D0\u793A\u6587\u5B57</td><td><code class="">string</code></td><td><code class="">\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD</code></td></tr><tr><td>maxlength</td><td>\u8F93\u5165\u7684\u6700\u5927\u5B57\u7B26\u6570</td><td><code class="">string</code> or <code class="">number</code></td><td></td></tr><tr><td>autofocus</td><td>\u662F\u5426\u81EA\u52A8\u805A\u7126\uFF0CiOS \u7CFB\u7EDF\u4E0D\u652F\u6301\u8BE5\u5C5E\u6027</td><td><code class="">boolean</code></td><td></td></tr><tr><td>clearable</td><td>\u662F\u5426\u542F\u7528\u6E05\u9664\u56FE\u6807\uFF0C\u70B9\u51FB\u6E05\u9664\u56FE\u6807\u540E\u4F1A\u6E05\u7A7A\u8F93\u5165\u6846</td><td><code class="">boolean</code></td><td><code class="">true</code></td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528\u8F93\u5165\u6846</td><td><code class="">boolean</code></td><td><code class="">fasle</code></td></tr><tr><td>readonly</td><td>\u662F\u5426\u5C06\u8F93\u5165\u6846\u8BBE\u4E3A\u53EA\u8BFB\u72B6\u6001\uFF0C\u53EA\u8BFB\u72B6\u6001\u4E0B\u65E0\u6CD5\u8F93\u5165\u5185\u5BB9</td><td><code class="">boolean</code></td><td><code class="">fasle</code></td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>focus</td><td>\u8F93\u5165\u6846\u805A\u7126\u56DE\u8C03\u51FD\u6570</td><td><code class="">(e:{detail:{value:string}}) =&gt; void </code></td></tr><tr><td>blur</td><td>\u8F93\u5165\u6846\u5931\u7126\u56DE\u8C03\u51FD\u6570</td><td><code class="">(e:{detail:{value:string}}) =&gt; void </code></td></tr><tr><td>search</td><td>\u786E\u5B9A\u641C\u7D22\u65F6\u89E6\u53D1</td><td><code class="">(e:{detail:{value:string}}) =&gt; void </code></td></tr><tr><td>change</td><td>\u8F93\u5165\u6846\u53D8\u5316\u56DE\u8C03\u51FD\u6570</td><td><code class="">(e:{detail:{value:string}}) =&gt; void </code></td></tr><tr><td>cancel</td><td>\u53D6\u6D88\u56DE\u8C03\u51FD\u6570</td><td><code class="">() =&gt; void </code></td></tr><tr><td>back</td><td>\u8FD4\u56DE\u56DE\u8C03\u51FD\u6570</td><td><code class="">() =&gt; void </code></td></tr></tbody></table><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4EE5\u4E0B<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS \u53D8\u91CF</a>\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003<a href="#/zh-CN/guide/theme">\u4E3B\u9898\u5B9A\u5236</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code class="">--field-font-size</code></td><td>\u8F93\u5165\u6846\u6587\u5B57\u5927\u5C0F</td><td><code class="">14px</code></td></tr><tr><td><code class="">--search-background</code></td><td>\u641C\u7D22\u6846\u80CC\u666F\u8272</td><td><code class="">#fff</code></td></tr><tr><td><code class="">--search-dark-background</code></td><td>\u6DF1\u8272\u6A21\u5F0F \u641C\u7D22\u6846\u80CC\u666F\u8272</td><td><code class="">#08f</code></td></tr><tr><td><code class="">--search-action-text-color</code></td><td>\u53D6\u6D88\u6309\u94AE\u6587\u5B57\u989C\u8272</td><td><code class="">#242729 </code></td></tr><tr><td><code class="">--search-action-font-size</code></td><td>\u53D6\u6D88\u6309\u94AE\u6587\u5B57\u5927\u5C0F</td><td><code class="">16px </code></td></tr></tbody></table>`,31),e=[l],h={},g="",F=a({__name:"doc.zh-CN",setup(n,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(o,r)=>(d(),t("div",c,e))}});export{F as default,g as excerpt,h as frontmatter};
