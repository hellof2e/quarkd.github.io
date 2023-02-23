import{d as a,c as t,a as u,o as n}from"./vue.5dc7ce94.js";const l={class:"markdown-body"},p=u(`<h1>Popupextra</h1><h3>\u4ECB\u7ECD</h3><p>\u6D6E\u5C42</p><h3>\u5B89\u88C5</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { PopupExtra } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>\u57FA\u672C\u4F7F\u7528</h3><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [open, setOpen] = useState(<span class="hljs-literal">false</span>);

  <span class="hljs-keyword">const</span> handleClose = <span class="hljs-function">() =&gt;</span> setOpen(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> handleOpen = <span class="hljs-function">() =&gt;</span> setOpen(<span class="hljs-literal">true</span>);

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span>
        <span class="hljs-attr">onClick</span>=<span class="hljs-string">{handleOpen}</span>
      &gt;</span>
        \u57FA\u672C\u4F7F\u7528
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">PopupExtra</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5927\u6807\u9898\u6587\u6848&quot;</span>
        <span class="hljs-attr">subtitle</span>=<span class="hljs-string">&quot;\u526F\u6807\u9898\u6587\u6848&quot;</span>
        <span class="hljs-attr">onClose</span>=<span class="hljs-string">{handleClose}</span>
        <span class="hljs-attr">open</span>=<span class="hljs-string">{open}</span>
      &gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;popup-body&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">h4</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;&quot;</span>&gt;</span>1.\u6B63\u6B63\u6B63\u6B63\u6B63\u6B63\u6B63\u6B63\u6B63\u6B63\u6B63<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u5B6B\u5B50\u66F0\uFF1A\u5175\u8005\uFF0C\u570B\u4E4B\u5927\u4E8B\uFF0C\u6B7B\u751F\u4E4B\u5730\uFF0C\u5B58\u4EA1\u4E4B\u9053\u3002<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">PopupExtra</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};
</code></pre><h3>\u81EA\u5B9A\u4E49\u6807\u9898</h3><p>\u901A\u8FC7\u8BBE\u7F6E <code class="">slot=&#39;title&#39;</code> \u53EF\u4EE5\u8986\u76D6\u5C5E\u6027\u4E2D\u7684 <code class="">title</code>\uFF0C\u4ECE\u800C\u5B9E\u73B0\u81EA\u5B9A\u4E49 <code class="">title</code>\u3002</p><pre><code class="language-js">&lt;PopupExtra
  subtitle=<span class="hljs-string">&quot;\u526F\u6807\u9898\u6587\u6848&quot;</span>
  open={open}
  onClose={<span class="hljs-function">() =&gt;</span> setOpen(<span class="hljs-literal">false</span>)}
&gt;
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;title&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;color: red&quot;</span>&gt;</span>\u81EA\u5B9A\u4E49<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\u5927\u6807\u9898\u6587\u6848
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>

  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;popup-body&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">h4</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;&quot;</span>&gt;</span>1.\u6B63\u6B63\u6B63\u6B63\u6B63\u6B63\u6B63\u6B63\u6B63\u6B63\u6B63<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u5B6B\u5B50\u66F0\uFF1A\u5175\u8005\uFF0C\u570B\u4E4B\u5927\u4E8B\uFF0C\u6B7B\u751F\u4E4B\u5730\uFF0C\u5B58\u4EA1\u4E4B\u9053\uFF0C\u4E0D\u53EF\u4E0D\u5BDF\u4E5F\u3002<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
&lt;/PopupExtra&gt;
</code></pre><h3>\u5173\u95ED\u6D6E\u5C42</h3><p>\u8BBE\u7F6E <code class="">closed</code> \u65B9\u6CD5</p><pre><code class="language-js">&lt;PopupExtra open={open} onClose={<span class="hljs-function">() =&gt;</span> setOpen(<span class="hljs-literal">false</span>)} /&gt;
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>open</td><td>\u5F39\u7A97\u72B6\u6001</td><td><code class="">boolean</code></td><td><code class="">require</code></td></tr><tr><td>title</td><td>\u4E3B\u6807\u9898</td><td><code class="">string</code></td><td></td></tr><tr><td>subtitle</td><td>\u526F\u6807\u9898</td><td><code class="">string</code></td><td></td></tr><tr><td>hideclose</td><td>\u662F\u5426\u9690\u85CF\u53F3\u4E0A\u89D2\u5173\u95ED\u6309\u94AE</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>round</td><td>\u662F\u5426\u5706\u89D2</td><td><code class="">boolean</code></td><td><code class="">true</code></td></tr><tr><td>safearea</td><td>\u662F\u5426\u5F00\u542F\u5E95\u90E8\u5B89\u5168\u533A\u57DF\u9002\u914D</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>zindex</td><td>popup \u5C42\u7EA7\u8BBE\u7F6E</td><td><code class="">number\u3001string</code></td><td>-</td></tr><tr><td>onClose</td><td>\u7EC4\u4EF6\u5173\u95ED\u56DE\u8C03</td><td><code class="">() =&gt; void</code></td><td></td></tr></tbody></table><h2>\u6837\u5F0F\u53D8\u91CF</h2><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4EE5\u4E0B<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS \u53D8\u91CF</a>\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003<a href="#/zh-CN/guide/theme">\u4E3B\u9898\u5B9A\u5236</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code class="">--popup-extra-title-color</code></td><td>\u4E3B\u6807\u9898\u989C\u8272</td><td><code class="">#242729</code></td></tr><tr><td><code class="">--popup-extra-subtitle-color</code></td><td>\u526F\u6807\u9898\u989C\u8272</td><td><code class="">#879099</code></td></tr><tr><td><code class="">--popup-extra-mask-color</code></td><td>\u8499\u5C42\u80CC\u666F</td><td><code class="">rgba(0, 0, 0, 0.7)</code></td></tr><tr><td><code class="">--popup-extra-z-index</code></td><td>\u7EC4\u4EF6\u5C42\u7EA7</td><td><code class="">999</code></td></tr><tr><td><code class="">--popup-extra-max-height</code></td><td>popup \u5185\u5BB9\u533A\u57DF\u6700\u5927\u9AD8\u5EA6</td><td><code class="">90%</code></td></tr><tr><td><code class="">--popup-extra-min-height</code></td><td>popup \u5185\u5BB9\u533A\u57DF\u6700\u5C0F\u9AD8\u5EA6</td><td>-</td></tr><tr><td><code class="">--popup-extra-border-radius</code></td><td>popup \u5706\u89D2\u5927\u5C0F</td><td><code class="">16px</code></td></tr><tr><td><code class="">--popup-extra-title-font-family</code></td><td>popup \u4E3B\u6807\u9898 font-family</td><td><code class="">PingFangSC-Medium, PingFang SC, sans-serif</code></td></tr><tr><td><code class="">--popup-extra-subtitle-font-family</code></td><td>popup \u526F\u6807\u9898 font-family</td><td><code class="">PingFangSC-Regular, PingFang SC, sans-serif</code></td></tr></tbody></table>`,19),e=[p],h={},g="",j=a({__name:"doc-react.zh-CN",setup(d,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(c,o)=>(n(),t("div",l,e))}});export{j as default,g as excerpt,h as frontmatter};
