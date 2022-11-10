import{d as a,c as t,a as n,o as l}from"./vue.0f32cc38.js";const e={class:"markdown-body"},p=n(`<h1>Radio</h1><h3>Intro</h3><p>Single radio, Single selection among multiple options.</p><h2>Install</h2><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/radio&quot;</span>;
</code></pre><h3>Basic Usage</h3><p>Generally appear in groups. Use <code class="">value</code> to bind the name of checked radio.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-radio-group</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;apple&quot;</span>&gt;</span>Apple<span class="hljs-tag">&lt;/<span class="hljs-name">quark-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;banana&quot;</span>&gt;</span>Banana<span class="hljs-tag">&lt;/<span class="hljs-name">quark-radio</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-radio-group</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">value</span>: <span class="hljs-string">&quot;apple&quot;</span>, <span class="hljs-comment">// initial value: apple</span>
    };
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">onChange</span>(<span class="hljs-params">{ detail }</span>)</span> {
      <span class="hljs-built_in">this</span>.value = detail.value;
    },
  },
};
</code></pre><h3>Shape</h3><p>Radio shape supports <code class="">round</code> and <code class="">square</code>, the default is <code class="">round</code>.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-radio-group</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;apple&quot;</span>&gt;</span>Round(default)<span class="hljs-tag">&lt;/<span class="hljs-name">quark-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;banana&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span>Square<span class="hljs-tag">&lt;/<span class="hljs-name">quark-radio</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-radio-group</span>&gt;</span>
</code></pre><h3>Size</h3><p>Radio size supports <code class="">normal</code> and <code class="">big</code>, the default is <code class="">normal</code>.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-radio-group</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;apple&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;big&quot;</span>&gt;</span>Square(Big)<span class="hljs-tag">&lt;/<span class="hljs-name">quark-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;banana&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;big&quot;</span>&gt;</span>Round(Big)<span class="hljs-tag">&lt;/<span class="hljs-name">quark-radio</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-radio-group</span>&gt;</span>
</code></pre><h3>Disabled</h3><p>To disable radio, add <code class="">disabled</code> prop on the Radio.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-radio</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>checked - disabled<span class="hljs-tag">&lt;/<span class="hljs-name">quark-radio</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-radio</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>unchecked - disabled<span class="hljs-tag">&lt;/<span class="hljs-name">quark-radio</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-radio</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">disabled</span>
  &gt;</span>square - checked - disabled&lt;/quark-radio
&gt;
<span class="hljs-tag">&lt;<span class="hljs-name">quark-radio</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">disabled</span>
  &gt;</span>square - unchecked - disabled&lt;/quark-radio
&gt;
</code></pre><h3>Custom Style</h3><p>Custom checked color</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-radio</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>Radio-Custom checked color<span class="hljs-tag">&lt;/<span class="hljs-name">quark-radio</span>&gt;</span>
</code></pre><pre><code class="language-css">:quark-radio {
  --radio-background: <span class="hljs-built_in">linear-gradient</span>(<span class="hljs-number">225deg</span>, <span class="hljs-number">#ff918d</span> <span class="hljs-number">0%</span>, <span class="hljs-number">#f54640</span> <span class="hljs-number">100%</span>);
}
</code></pre><h2>API</h2><h3>Props: quark-radio</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>shape</td><td>Shape\uFF0Ccan be set to <code class="">round</code> <code class="">square</code></td><td><code class="">string</code></td><td><code class="">round</code></td></tr><tr><td>size</td><td>Size\uFF0Ccan be set to <code class="">normal</code> <code class="">big</code></td><td><code class="">string </code></td><td><code class="">normal</code></td></tr><tr><td>disabled</td><td>Disable radio</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr></tbody></table><h3>Props: quark-radio-group</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>value</td><td>Specific radio</td><td><code class="">String</code></td><td>-</td></tr></tbody></table><h3>Event: quark-radio-Group</h3><table><thead><tr><th>Event</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>change</td><td>Emitted when radio check status changed</td><td><code class="">(e: {detail: {value: string}}) =&gt; void</code></td></tr></tbody></table><h2>CSS Variables</h2><p>The component provides the following <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>, which can be used to customize styles. Please refer to <a href="#/zh-CN/guide/theme">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code class="">--radio-font-size</code></td><td>radio label font size</td><td><code class="">12px</code></td></tr><tr><td><code class="">--radio-color</code></td><td>radio label font color</td><td><code class="">#242729 </code></td></tr><tr><td><code class="">--radio-label-height</code></td><td>radio label line-height</td><td>same as the height of radio</td></tr><tr><td><code class="">--radio-size</code></td><td>radio size\uFF0CPriority is higher than <code class="">size</code> prop</td><td><code class="">16px; big: 20px</code></td></tr><tr><td><code class="">--radio-background</code></td><td>checked color</td><td><code class="">#0088ff</code></td></tr></tbody></table>`,32),c=[p],i={},u="",g=a({__name:"doc.en-US",setup(o,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(d,r)=>(l(),t("div",e,c))}});export{g as default,u as excerpt,i as frontmatter};
