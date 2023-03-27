import{d as t,c as a,a as n,o as e}from"./vue.6229f161.js";const l={class:"markdown-body"},o=n(`<h1>Collapse</h1><h3>Intro</h3><p>Place the content in multiple folded panels, and click the panel title to expand or shrink the content.</p><h3>Install</h3><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/collapse&quot;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-collapse</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;title&quot;</span>&gt;</span>
  Life is far more than spinning around and being busy to the limit. Human experience is far broader and richer than this.
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-collapse</span>&gt;</span>
</code></pre><h3>Open state</h3><p>Control the open state of the accordion by setting the <code class="">open=true</code> property.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-collapse</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;title&quot;</span> <span class="hljs-attr">open</span>&gt;</span>
  Life is far more than spinning around and being busy to the limit. Human experience is far broader and richer than this.
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-collapse</span>&gt;</span>
</code></pre><h3>No icon style</h3><p>Set custom icons through <code class="">iconhide</code> property.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-collapse</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;title&quot;</span> <span class="hljs-attr">iconhide</span>&gt;</span>
  Life is far more than spinning around and being busy to the limit. Human experience is far broader and richer than this.
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-collapse</span>&gt;</span>
</code></pre><h3>Custom title</h3><p>Set custom title through <code class="">slot=&quot;title&quot;</code>.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-collapse</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;title&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;title&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;color: blueviolet&quot;</span>&gt;</span>custom title<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  Life is far more than spinning around and being busy to the limit. Human experience is far broader and richer than this.
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-collapse</span>&gt;</span>
</code></pre><h3>Custom icon</h3><p>Set custom icon through <code class="">slot=&quot;icon&quot;</code>.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-collapse</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;title&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span>&gt;</span>\u{1F389}\u{1F389}\u{1F389}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  Life is far more than spinning around and being busy to the limit. Human experience is far broader and richer than this.
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-collapse</span>&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>title</td><td>title</td><td><code class="">string</code></td><td></td></tr><tr><td>open</td><td>open</td><td><code class="">Boolean</code></td><td><code class="">false</code></td></tr></tbody></table><h2>CSS Variables</h2><p>The component provides the following <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>, which can be used to customize styles. Please refer to <a href="#/zh-CN/guide/theme">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Description</th><th>Default Value</th></tr></thead><tbody><tr><td><code class="">--callapse-title-fontsize</code></td><td>Title font size</td><td><code class="">14px</code></td></tr><tr><td><code class="">--callapse-title-color</code></td><td>Title color</td><td><code class="">#666</code></td></tr><tr><td><code class="">--callapse-content-fontsize</code></td><td>Content font size</td><td><code class="">14px</code></td></tr><tr><td><code class="">--callapse-content-color</code></td><td>Content color</td><td><code class="">#666</code></td></tr></tbody></table>`,25),c=[o],i={},u="",g=t({__name:"doc.en-US",setup(p,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(r,h)=>(e(),a("div",l,c))}});export{g as default,u as excerpt,i as frontmatter};
