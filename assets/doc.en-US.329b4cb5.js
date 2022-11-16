import{d as t,c as a,a as e,o as n}from"./vue.10d3b379.js";const l={class:"markdown-body"},o=e(`<h1>Noticebar</h1><h3>Intro</h3><p>Used to display message notifications</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/noticebar&quot;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-noticebar</span> <span class="hljs-attr">:text</span>=<span class="hljs-string">&quot;text&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-noticebar</span>&gt;</span>
</code></pre><h3>Multiple lines</h3><p>Set <code class="">multiple</code> prop on the Noticebar to control the maximum number of lines which text can show.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-noticebar</span> <span class="hljs-attr">:text</span>=<span class="hljs-string">&quot;multipleText&quot;</span> <span class="hljs-attr">:multiple</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-noticebar</span>&gt;</span>
</code></pre><h3>Set style</h3><p>The font color is controlled by <code class="">color</code> prop, and the background color is controlled by <code class="">bgcolor</code> prop.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-noticebar</span> <span class="hljs-attr">:text</span>=<span class="hljs-string">&quot;text&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;red&quot;</span> <span class="hljs-attr">bgcolor</span>=<span class="hljs-string">&quot;#ddd&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-noticebar</span>&gt;</span>
</code></pre><h3>Scrollable</h3><p>To make the text scrollable, embed <code class="">quark-marquee</code> component in the Noticebar.</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/marquee&quot;</span>;
</code></pre><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-noticebar</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-marquee</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;text&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;multipleText&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-marquee</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-noticebar</span>&gt;</span>
</code></pre><h3>Hide Icon</h3><p>To hide right or left icon, add <code class="">righthide</code> or <code class="">lefthide</code> on the Noticebar.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-noticebar</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;hide right icon&quot;</span> <span class="hljs-attr">righthide</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-noticebar</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-noticebar</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;hide left icon&quot;</span> <span class="hljs-attr">lefthide</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-noticebar</span>&gt;</span>
</code></pre><h3>Custom ends</h3><p>To custom left or right content, set <code class="">slot=&quot;left&quot;</code> or <code class="">slot=&quot;right&quot;</code> on the specific component.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-noticebar</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;The way of the university is to be bright and virtuous.&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;left&quot;</span>&gt;</span>Left content<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;right&quot;</span>&gt;</span>Right content<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-noticebar</span>&gt;</span>
</code></pre><h3>Right event</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-noticebar</span>
  <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Try to click right icon&quot;</span>
  @<span class="hljs-attr">rightclick</span>=<span class="hljs-string">&quot;handleClick&quot;</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-noticebar</span>&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>text</td><td>Text</td><td><code class="">string</code></td><td></td></tr><tr><td>multiple</td><td>Maximum number of lines text can show</td><td><code class="">string</code></td><td><code class="">1</code></td></tr><tr><td>lefthide</td><td>Whether to hide left icon</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>righthide</td><td>Whether to hide right icon</td><td><code class="">boolean </code></td><td><code class="">false</code></td></tr><tr><td>keyword</td><td>keyword highlight</td><td><code class="">string</code></td><td></td></tr></tbody></table><h3>slot</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>left</td><td>Custom left content</td></tr><tr><td>text</td><td>Custom text</td></tr><tr><td>right</td><td>Custom right content</td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>Event</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>rightclick</td><td>Right click event</td><td><code class="">() =&gt; void</code></td></tr></tbody></table><h2>CSS Variables</h2><p>The component provides the following <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>, which can be used to customize styles. Please refer to <a href="#/zh-CN/guide/theme">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code class="">--noticebar-left-color</code></td><td>Left icon color</td><td><code class="">inherit</code></td></tr><tr><td><code class="">--noticebar-right-color</code></td><td>Right icon color</td><td><code class="">inherit</code></td></tr></tbody></table>`,35),c=[o],i={},g="",u=t({__name:"doc.en-US",setup(p,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(r,h)=>(n(),a("div",l,c))}});export{u as default,g as excerpt,i as frontmatter};
