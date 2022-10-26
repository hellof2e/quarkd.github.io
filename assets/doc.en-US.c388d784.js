import{c as a,o as t,a as n}from"./vue.ac8d90f1.js";const l={class:"markdown-body"},e=n(`<h1>Radio</h1><h3>Intro</h3><p>Single radio, Single selection among multiple options.</p><h2>Install</h2><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&#39;quarkd/lib/radio&#39;</span>;
</code></pre><h3>Basic Usage</h3><p>Generally appear in groups. Use <code>value</code> to bind the name of checked radio.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-radio-group</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;apple&quot;</span>&gt;</span>Apple<span class="hljs-tag">&lt;/<span class="hljs-name">quark-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;banana&quot;</span>&gt;</span>Banana<span class="hljs-tag">&lt;/<span class="hljs-name">quark-radio</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-radio-group</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;apple&#39;</span> <span class="hljs-comment">// initial value: apple</span>
    }
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">onChange</span>(<span class="hljs-params">{detail}</span>)</span> {
      <span class="hljs-built_in">this</span>.value = detail.value
    }
  }
}
</code></pre><h3>Shape</h3><p>Radio shape supports <code>round</code> and <code>square</code>, the default is <code>round</code>.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-radio-group</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;apple&quot;</span>&gt;</span>Round(default)<span class="hljs-tag">&lt;/<span class="hljs-name">quark-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;banana&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span>Square<span class="hljs-tag">&lt;/<span class="hljs-name">quark-radio</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-radio-group</span>&gt;</span>
</code></pre><h3>Size</h3><p>Radio size supports <code>normal</code> and <code>big</code>, the default is <code>normal</code>.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-radio-group</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;apple&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;big&quot;</span>&gt;</span>Square(Big)<span class="hljs-tag">&lt;/<span class="hljs-name">quark-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;banana&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;big&quot;</span>&gt;</span>Round(Big)<span class="hljs-tag">&lt;/<span class="hljs-name">quark-radio</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-radio-group</span>&gt;</span>
</code></pre><h3>Disabled</h3><p>To disable radio, add <code>disabled</code> prop on the Radio.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-radio</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>checked - disabled<span class="hljs-tag">&lt;/<span class="hljs-name">quark-radio</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-radio</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>unchecked - disabled<span class="hljs-tag">&lt;/<span class="hljs-name">quark-radio</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-radio</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>square - checked - disabled<span class="hljs-tag">&lt;/<span class="hljs-name">quark-radio</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-radio</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>square - unchecked - disabled<span class="hljs-tag">&lt;/<span class="hljs-name">quark-radio</span>&gt;</span>
</code></pre><h3>Custom Style</h3><p>Custom checked color</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-radio</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>Radio-Custom checked color<span class="hljs-tag">&lt;/<span class="hljs-name">quark-radio</span>&gt;</span>
</code></pre><pre><code class="language-css">:quark-radio {
  --radio-background: <span class="hljs-built_in">linear-gradient</span>(<span class="hljs-number">225deg</span>, <span class="hljs-number">#ff918d</span> <span class="hljs-number">0%</span>, <span class="hljs-number">#f54640</span> <span class="hljs-number">100%</span>);
}
</code></pre><h2>API</h2><h3>Props: quark-radio</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>shape</td><td>Shape\uFF0Ccan be set to <code>round</code> <code>square</code></td><td><code>string</code></td><td><code>round</code></td></tr><tr><td>size</td><td>Size\uFF0Ccan be set to <code>normal</code> <code>big</code></td><td><code>string </code></td><td><code>normal</code></td></tr><tr><td>disabled</td><td>Disable radio</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3>Props: quark-radio-group</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>value</td><td>Specific radio</td><td><code>String</code></td><td>-</td></tr></tbody></table><h3>Event: quark-radio-Group</h3><table><thead><tr><th>Event</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>change</td><td>Emitted when radio check status changed</td><td><code>(e: {detail: {value: string}}) =&gt; void</code></td></tr></tbody></table><h2>CSS Variables</h2><p>The component provides the following <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>, which can be used to customize styles. Please refer to <a href="#/zh-CN/guide/theme">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code>--radio-font-size</code></td><td>radio label font size</td><td><code>12px</code></td></tr><tr><td><code>--radio-color</code></td><td>radio label font color</td><td><code>#242729 </code></td></tr><tr><td><code>--radio-label-height</code></td><td>radio label line-height</td><td>same as the height of radio</td></tr><tr><td><code>--radio-size</code></td><td>radio size\uFF0CPriority is higher than <code>size</code> prop</td><td><code>16px; big: 20px</code></td></tr><tr><td><code>--radio-background</code></td><td>checked color</td><td><code>#0088ff</code></td></tr></tbody></table>`,32),p=[e],i={__name:"doc.en-US",setup(o,{expose:s}){return s({frontmatter:{}}),(c,r)=>(t(),a("div",l,p))}};export{i as default};
