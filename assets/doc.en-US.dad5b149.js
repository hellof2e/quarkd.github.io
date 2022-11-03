import{c as a,o as s,a as e}from"./vue.7f40998a.js";const d={class:"markdown-body"},o=e(`<h1>Tag</h1><h3>Intro</h3><p>Tags for tagging and classification.</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&#39;quarkd/lib/tag&#39;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-tag</span>&gt;</span>Q<span class="hljs-tag">&lt;/<span class="hljs-name">quark-tag</span>&gt;</span>
</code></pre><h3>Type</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-tag</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Q<span class="hljs-tag">&lt;/<span class="hljs-name">quark-tag</span>&gt;</span>
</code></pre><h3>Size</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-tag</span>&gt;</span>Q<span class="hljs-tag">&lt;/<span class="hljs-name">quark-tag</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-tag</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span>&gt;</span>Q<span class="hljs-tag">&lt;/<span class="hljs-name">quark-tag</span>&gt;</span>
</code></pre><h3>Plain tag</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-tag</span> <span class="hljs-attr">plain</span>&gt;</span>Q<span class="hljs-tag">&lt;/<span class="hljs-name">quark-tag</span>&gt;</span>
</code></pre><h3>Custom style</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-tag</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#ffe1e1&quot;</span> <span class="hljs-attr">textcolor</span>=<span class="hljs-string">&quot;#ad0000&quot;</span>&gt;</span>Q<span class="hljs-tag">&lt;/<span class="hljs-name">quark-tag</span>&gt;</span>
</code></pre><h3>Round tag</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-tag</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span> <span class="hljs-attr">round</span>&gt;</span>Q<span class="hljs-tag">&lt;/<span class="hljs-name">quark-tag</span>&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>type</td><td>Tag type\uFF0Ccan be set to <code>primary</code> <code>danger</code> <code>orange</code> <code>success</code> <code>warning</code> <code>gray</code></td><td><code>string</code></td><td><code>primary</code></td></tr><tr><td>size</td><td>Tag size\uFF0Ccan be set to <code>small</code> <code>large</code></td><td><code>string</code></td><td><code>small</code></td></tr><tr><td>plain</td><td>Whether to be plain style</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>round</td><td>Whether to be round style</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>color</td><td>Tag color</td><td><code>string</code></td><td>-</td></tr><tr><td>textcolor</td><td>Tag text color</td><td><code>string</code></td><td>-</td></tr></tbody></table><h2>CSS Variables</h2><p>The component provides the following <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>, which can be used to customize styles. Please refer to <a href="#/theme">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code>--tag-border-radius</code></td><td>tag round</td><td><code>4px</code></td></tr><tr><td><code>--tag-hspacing</code></td><td>tag</td><td>small <code>4px</code>, large <code>6px</code></td></tr><tr><td><code>--tag-vspacing</code></td><td>tag text left and right margins</td><td><code>2px</code></td></tr><tr><td><code>--tag-font-size</code></td><td>tag font size</td><td>small <code>11px</code>, large <code>14px</code></td></tr><tr><td><code>--tag-font-weight</code></td><td>tag font weight</td><td>small <code>400</code>, large <code>500</code></td></tr><tr><td><code>--tag-font-family</code></td><td>tag font family</td><td>small <code>PingFangSC-Regular, PingFang SC</code>, large <code>PingFangSC-Medium, PingFang SC</code></td></tr><tr><td><code>--tag-line-height</code></td><td>tag line height</td><td>small <code>12px</code>, large <code>20px</code></td></tr><tr><td><code>--tag-text-color</code></td><td>tag text color</td><td><code>#fff</code></td></tr><tr><td><code>--tag-background</code></td><td>tag background</td><td></td></tr><tr><td><code>--tag-border-color </code></td><td>tag border color, only plain tag works</td><td></td></tr></tbody></table>`,23),n=[o],h={__name:"doc.en-US",setup(l,{expose:t}){return t({frontmatter:{}}),(r,p)=>(s(),a("div",d,n))}};export{h as default};
