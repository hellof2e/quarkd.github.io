import{d as a,c as t,a as n,o as l}from"./vue.667b3574.js";const e={class:"markdown-body"},p=n(`<h1>Badge</h1><h3>Intro</h3><p>When new content or pending information is available, a red dot, number or desc show on the top-right.</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/badge&quot;</span>;
</code></pre><h3>Basic Usage</h3><p>Show Badge content by setting <code class="">content</code> prop, or just show a red dot by setting <code class="">type</code> prop to dot.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;dot&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;round&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;9&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;label&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;text badge&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-badge</span>&gt;</span>
</code></pre><h3>Type</h3><p>There are <code class="">dot</code>\u3001<code class="">round</code>\u3001<code class="">label</code> in Quark\uFF0Cthe default is <code class="">round</code>.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;dot&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;round&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;9&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-badge</span>&gt;</span>
</code></pre><h3>Size</h3><p>There are <code class="">normal</code>\u3001<code class="">big</code> in Quark\uFF0Cthe default is <code class="">normal</code>.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;dot&quot;</span>&gt;</span>
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
</code></pre><h3>Border</h3><p>To show border of badge, add <code class="">border</code> prop on the Badge. The default border color is white.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;label&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;normal badge&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;label&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;white-border badge&quot;</span> <span class="hljs-attr">border</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-badge</span>&gt;</span>
</code></pre><h3>Max</h3><p>The maximun can be added to a badge by setting <code class="">max</code> prop on the Badge, the default is 99. Show \u2026 when the number of <code class="">content</code> prop on the Badge exceeds.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-badge</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;9&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-badge</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;100&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;99&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-badge</span>&gt;</span>
</code></pre><h3>Custom style - background color</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-badge</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;bg-color&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-badge</span>&gt;</span>
</code></pre><pre><code class="language-css"><span class="hljs-selector-class">.bg-color</span> {
  --badge-<span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(<span class="hljs-number">90deg</span>, blue, pink);
}
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>type</td><td>Type\uFF0Ccan be set to <code class="">dot</code> <code class="">round</code> <code class="">label</code></td><td><code class="">string</code></td><td><code class="">round</code></td></tr><tr><td>content</td><td>Content</td><td><code class="">string</code></td><td>-</td></tr><tr><td>size</td><td>Size\uFF0Ccan be set to <code class="">normal</code> <code class="">big</code></td><td><code class="">string</code></td><td><code class="">normal</code></td></tr><tr><td>border</td><td>Whether to show the border of badge. The default border color is white.</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>max</td><td>Max value</td><td><code class="">number</code></td><td><code class="">99</code></td></tr></tbody></table><h2>CSS Variables</h2><p>The component provides the following <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>, which can be used to customize styles. Please refer to <a href="#/zh-CN/guide/theme">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code class="">--badge-text-color</code></td><td>Badge text color</td><td><code class="">#FFFFFF</code></td></tr><tr><td><code class="">--badge-background</code></td><td>Badge background color</td><td><code class="">#F72626</code></td></tr><tr><td><code class="">--badge-padding-column</code></td><td>Top and bottom padding of badge</td><td><code class="">2px</code></td></tr><tr><td><code class="">--badge-padding-row</code></td><td>Left and right padding of badge</td><td><code class="">4px</code></td></tr><tr><td><code class="">--badge-font-size</code></td><td>Badge font size</td><td><code class="">10px</code></td></tr><tr><td><code class="">--badge-font-weight</code></td><td>Badge font weight</td><td><code class="">500</code></td></tr><tr><td><code class="">--badge-dot-size</code></td><td>Badge dot size</td><td><code class="">6px</code></td></tr><tr><td><code class="">--badge-font-family</code></td><td>Badge font-family</td><td><code class="">system default style</code></td></tr><tr><td><code class="">--badge-border-color</code></td><td>Badge border color</td><td><code class="">#FFFFFF</code></td></tr></tbody></table>`,29),c=[p],g={},j="",u=a({__name:"doc.en-US",setup(d,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(o,h)=>(l(),t("div",e,c))}});export{u as default,j as excerpt,g as frontmatter};
