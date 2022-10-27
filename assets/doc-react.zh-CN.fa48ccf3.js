import{c as a,o as n,a as t}from"./vue.296e9791.js";const l={class:"markdown-body"},e=t(`<h1>Checkbox \u590D\u9009\u6846</h1><h3>\u4ECB\u7ECD</h3><p>\u590D\u9009\u6846 <br> \u7528\u4E8E\u5728\u9009\u4E2D\u548C\u975E\u9009\u4E2D\u72B6\u6001\u4E4B\u95F4\u8FDB\u884C\u5207\u6362\u3002</p><h3>\u5B89\u88C5\u4F7F\u7528</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Checkbox } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@quarkd/quark-react&#39;</span>
</code></pre><h3>\u590D\u9009\u6846\u57FA\u7840\u7528\u6CD5</h3><p>\u590D\u9009\u6846\u901A\u8FC7 <code>checked</code> \u7ED1\u5B9A\u52FE\u9009\u72B6\u6001\u3002</p><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {

  <span class="hljs-keyword">const</span> [checked, setCheck] = useState(<span class="hljs-literal">true</span>);

  <span class="hljs-keyword">const</span> handleChange = <span class="hljs-function">() =&gt;</span> {
    setCheck(<span class="hljs-function">() =&gt;</span> !checked);
  };

  <span class="hljs-keyword">return</span>(
    <span class="xml"><span class="hljs-tag">&lt;&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{checked}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{handleChange}</span>&gt;</span>Apple<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{false}</span>&gt;</span>Orange<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
    <span class="hljs-tag">&lt;/&gt;</span></span>
  )
}
</code></pre><h3>\u590D\u9009\u6846\u5F62\u72B6</h3><p>\u590D\u9009\u6846\u652F\u6301<code>round</code>\u3001<code>square</code>\u4E24\u79CD\u5F62\u72B6\uFF0C\u9ED8\u8BA4\u4E3A <code>round</code>\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{true}</span>&gt;</span>\u5706\u5F62(\u9ED8\u8BA4)<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{true}</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span>\u65B9\u5F62<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
</code></pre><h3>\u590D\u9009\u6846\u5927\u5C0F</h3><p>\u590D\u9009\u6846\u5927\u5C0F\u652F\u6301 <code>normal</code>\u3001<code>big</code> \u4E24\u79CD\uFF0C\u9ED8\u8BA4\u4E3A <code>normal</code>\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{true}</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;round&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;big&quot;</span>&gt;</span>\u9ED8\u8BA4\u5F62\u72B6-\u5927<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{true}</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;big&quot;</span>&gt;</span>\u65B9\u5F62-\u5927<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
</code></pre><h3>\u590D\u9009\u6846\u7981\u7528\u72B6\u6001</h3><p>\u590D\u9009\u6846\u652F\u6301\u7981\u7528</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{true}</span> <span class="hljs-attr">disabled</span>&gt;</span>\u5DF2\u9009-\u7981\u7528<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{true}</span> <span class="hljs-attr">disabled</span>&gt;</span>\u672A\u9009-\u7981\u7528<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
</code></pre><h3>\u590D\u9009\u6846\u7FA4\u7EC4</h3><p>\u590D\u9009\u6846\u652F\u6301\u6210\u7EC4\u51FA\u73B0 \u7531\u4E8E\u6280\u672F\u9650\u5236\uFF0C\u590D\u9009\u6846\u7EC4\u7684\u503C\u9700\u8981\u662F\u4E00\u4E2A\u7531\u6570\u7EC4\u901A\u8FC7join()\u65B9\u6CD5\u7EC4\u6210\u7684\u5B57\u7B26\u4E32</p><pre><code class="language-jsx">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt;  {
  <span class="hljs-keyword">const</span> [groupValue, setGroupValue] = useState([<span class="hljs-string">&#39;\u82F9\u679C&#39;</span>, <span class="hljs-string">&#39;\u6A58\u5B50&#39;</span>]);

  <span class="hljs-keyword">const</span> onGroupChange = <span class="hljs-function">(<span class="hljs-params">{ detail }</span>) =&gt;</span> {
    setGroupValue(<span class="hljs-function">() =&gt;</span> detail.value);
  };

  <span class="hljs-keyword">return</span>(
    <span class="xml"><span class="hljs-tag">&lt;&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">CheckboxGroup</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{groupValue.join()}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onGroupChange}</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;apple&quot;</span>&gt;</span>\u82F9\u679C<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;warning&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>\u6A58\u5B50<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;banana&quot;</span>&gt;</span>\u9999\u8549<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">CheckboxGroup</span>&gt;</span>
    <span class="hljs-tag">&lt;/&gt;</span></span>
  )
}
</code></pre><h3>\u81EA\u5B9A\u4E49\u590D\u9009\u6846\u98CE\u683C</h3><p>\u590D\u9009\u6846\u9009\u4E2D\u989C\u8272\u81EA\u5B9A\u4E49</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{true}</span>&gt;</span>\u590D\u9009\u6846-\u9009\u4E2D\u989C\u8272\u81EA\u5B9A\u4E49<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>

<span class="hljs-comment">&lt;!-- CSS --&gt;</span>
Checkbox {
  --radio-background: linear-gradient(225deg, #ff918d 0%, #f54640 100%);
}
</code></pre><h2>API</h2><h3>Checkbox Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>shape</td><td>\u5F62\u72B6\uFF0C\u53EF\u9009\u503C\u4E3A <code>round</code> <code>square</code></td><td><code>string</code></td><td><code>round</code></td></tr><tr><td>size</td><td>\u590D\u9009\u6846\u5927\u5C0F\uFF0C\u53EF\u9009\u503C\u4E3A <code>normal</code> <code>big</code></td><td><code>string</code></td><td><code>normal</code></td></tr><tr><td>disabled</td><td>\u590D\u9009\u6846\u7981\u7528\u72B6\u6001</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>checked</td><td>\u590D\u9009\u6846\u52FE\u9009\u72B6\u6001</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>onChange</td><td>\u590D\u9009\u6846\u52FE\u9009\u72B6\u6001\u53D8\u5316\u65F6\u56DE\u8C03\u51FD\u6570</td><td><code>(e:{detail: {value: string}})=&gt;void</code></td><td></td></tr></tbody></table><h3>Checkbox-group Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>value</td><td>\u6307\u5B9A\u9009\u4E2D\u7684\u9009\u9879</td><td><code>string</code></td><td>-</td></tr><tr><td>onChange</td><td>\u590D\u9009\u6846\u7EC4\u52FE\u9009\u72B6\u6001\u53D8\u5316\u65F6\u56DE\u8C03\u51FD\u6570</td><td><code>(e:{detail: {value: string[]}}) =&gt; void</code></td><td></td></tr></tbody></table><h2>\u6837\u5F0F\u53D8\u91CF</h2><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4EE5\u4E0B<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS\u53D8\u91CF</a>\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003<a href="#/zh-CN/guide/theme">\u4E3B\u9898\u5B9A\u5236</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--checkbox-font-size</code></td><td>Checkbox \u6587\u5B57\u5927\u5C0F</td><td><code>12px</code></td></tr><tr><td><code>--checkbox-color</code></td><td>Checkbox \u6587\u5B57\u989C\u8272</td><td><code>#242729</code></td></tr><tr><td><code>--checkbox-label-height</code></td><td>Checkbox \u6587\u5B57\u884C\u9AD8</td><td>\u548C\u9009\u62E9\u6846\u9AD8\u5EA6\u4E00\u81F4</td></tr><tr><td><code>--checkbox-size</code></td><td>Checkbox \u590D\u9009\u6846\u5C3A\u5BF8\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8E size \u5C5E\u6027</td><td><code>16px; big: 20px</code></td></tr><tr><td><code>--checkbox-background</code></td><td>Checkbox \u9009\u4E2D\u989C\u8272</td><td><code>#0088ff</code></td></tr></tbody></table>`,31),c=[e],g={__name:"doc-react.zh-CN",setup(p,{expose:s}){return s({frontmatter:{}}),(d,o)=>(n(),a("div",l,c))}};export{g as default};
