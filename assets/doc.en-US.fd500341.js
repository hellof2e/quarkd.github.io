import{d as s,c as a,a as e,o}from"./vue.9478c7d4.js";const d={class:"markdown-body"},l=e(`<h1>Skeleton</h1><h3>Intro</h3><p>Used to display a set of placeholder graphics during the content loading process.</p><h2>Install</h2><pre><code class="language-jsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/skeleton&quot;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-skeleton</span> <span class="hljs-attr">:row</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-skeleton</span>&gt;</span>
</code></pre><h3>Show Avatar</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-skeleton</span> <span class="hljs-attr">titel</span> <span class="hljs-attr">avatar</span> <span class="hljs-attr">:row</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-skeleton</span>&gt;</span>
</code></pre><h3>Show Children</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-skeleton</span> <span class="hljs-attr">titel</span> <span class="hljs-attr">avatar</span> <span class="hljs-attr">:row</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">:hide</span>=<span class="hljs-string">&quot;hide&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Content<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-skeleton</span>&gt;</span>
</code></pre><h3>Setting row width</h3><p>use rowwidths property to set row width\uFF0Cuse \u2018,\u2019 to split.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-skeleton</span>
  <span class="hljs-attr">titel</span>
  <span class="hljs-attr">avatar</span>
  <span class="hljs-attr">:row</span>=<span class="hljs-string">&quot;3&quot;</span>
  <span class="hljs-attr">rowwidths</span>=<span class="hljs-string">&quot;100%,100%,60%&quot;</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-skeleton</span>&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>avatar</td><td>Whether to show avatar placeholder</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>avatarshape</td><td>Shape of avatar placeholder</td><td><code class="">round</code> or <code class="">square</code></td><td><code class="">round</code></td></tr><tr><td>titel</td><td>Whether to show title placeholder</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>row</td><td>Row count</td><td><code class="">number</code></td><td>-</td></tr><tr><td>rowwidths</td><td>Row width</td><td><code class="">string</code></td><td>-</td></tr><tr><td>hide</td><td>Whether to show skeleton, pass false to show child component</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr></tbody></table><h2>CSS Variables</h2><p>The component provides the following <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>, which can be used to customize styles. Please refer to <a href="#/theme">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code class="">--skeleton-avatar-size</code></td><td>Avatar placeholder size</td><td><code class="">32px</code></td></tr><tr><td><code class="">--skeleton-avatar-margin-right</code></td><td>Avatar placeholder margin right</td><td><code class="">16px</code></td></tr><tr><td><code class="">--skeleton-avatar-background-color</code></td><td>Avatar placeholder background color</td><td><code class="">#f2f3f5</code></td></tr><tr><td><code class="">--skeleton-title-width</code></td><td>Title placeholder width</td><td><code class="">40%</code></td></tr><tr><td><code class="">--skeleton-row-height</code></td><td>Row placeholder height</td><td><code class="">16px</code></td></tr><tr><td><code class="">--skeleton-row-background-color</code></td><td>Row placeholder background color</td><td><code class="">#f2f3f5</code></td></tr><tr><td><code class="">--skeleton-row-border-radius</code></td><td>Row placeholder border radius</td><td><code class="">0</code></td></tr><tr><td><code class="">--skeleton-row-margin-top</code></td><td>Row placeholder margin top</td><td><code class="">12px</code></td></tr></tbody></table>`,20),c=[l],i={},g="",u=s({__name:"doc.en-US",setup(n,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(r,p)=>(o(),a("div",d,c))}});export{u as default,g as excerpt,i as frontmatter};
