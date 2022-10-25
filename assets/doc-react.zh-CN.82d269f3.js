import{c as a,o as t,a as n}from"./vue.81f12a40.js";const e={class:"markdown-body"},l=n(`<h1>Switch \u5F00\u5173</h1><h3>\u4ECB\u7ECD</h3><p>\u7528\u6765\u6253\u5F00\u6216\u5173\u95ED\u9009\u9879\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Switch } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>\u57FA\u672C\u4F7F\u7528</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Swtich</span> <span class="hljs-attr">checked</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Swtich</span>&gt;</span>
</code></pre><h3>\u7981\u7528\u72B6\u6001</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Swtich</span> <span class="hljs-attr">disabled</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Swtich</span>&gt;</span>
</code></pre><h3>\u81EA\u5B9A\u4E49\u5927\u5C0F</h3><p>\u53EF\u4EE5\u901A\u8FC7 <code>size</code> \u6216\u4FEE\u6539\u5143\u7D20 <code>font-size</code> \u6765\u63A7\u5236\u5927\u5C0F\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Swtich</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;26px&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Swtich</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Swtich</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;font-size: 26px&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Swtich</span>&gt;</span>
</code></pre><h3>\u81EA\u5B9A\u4E49\u989C\u8272</h3><p>\u53EF\u4EE5\u901A\u8FC7 <code>color</code> \u5C5E\u6027\u63A7\u5236\u989C\u8272\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Swtich</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;red&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Swtich</span>&gt;</span>
</code></pre><h3>change\u4E8B\u4EF6</h3><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
    <span class="hljs-keyword">const</span> [checked, setChecked] = useState(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> handleChange = <span class="hljs-function">(<span class="hljs-params">e</span>) =&gt;</span> {
        setChecked(e.detail.value)
    }
    <span class="hljs-keyword">return</span> (
        <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Swtich</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">&quot;console.log(event)&quot;</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{checked}</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Swtich</span>&gt;</span></span>
    )
}

</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>checked</td><td>\u5F00/\u5173</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>disabled</td><td>\u7981\u7528</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>\u5F00\u5173\u5927\u5C0F</td><td><code>number</code></td><td><code>16px </code></td></tr><tr><td>color</td><td>\u989C\u8272</td><td><code>string</code></td><td>-</td></tr><tr><td>onChange</td><td>change \u56DE\u8C03\u51FD\u6570</td><td><code>e: {detail:{value: string}}\uFF09=&gt;void </code></td><td></td></tr></tbody></table><h2>\u6837\u5F0F\u53D8\u91CF</h2><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4EE5\u4E0B<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS\u53D8\u91CF</a>\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003<a href="#/zh-CN/guide/theme">\u4E3B\u9898\u5B9A\u5236</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--switch-label-width</code></td><td>\u901A\u8FC7\u8BE5\u53D8\u91CF\u63A7\u5236 switch \u5BBD\u5EA6</td><td><code>50px / 3.125em</code></td></tr></tbody></table>`,23),c=[l],g={__name:"doc-react.zh-CN",setup(p,{expose:s}){return s({frontmatter:{}}),(d,o)=>(t(),a("div",e,c))}};export{g as default};
