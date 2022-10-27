import{c as t,o as a,a as n}from"./vue.296e9791.js";const e={class:"markdown-body"},o=n(`<h1>Countdown</h1><h3>Intro</h3><p>Used to display the countdown value in real time.</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { CountDown } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@quarkd/quark-react&#39;</span>
</code></pre><h3>Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">CountDown</span> <span class="hljs-attr">time</span>=<span class="hljs-string">&#39;7200000&#39;</span>/&gt;</span>
</code></pre><h3>Custom Format</h3><p>The format property controls that the spacer supports only one bit string.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">CountDown</span> <span class="hljs-attr">time</span>=<span class="hljs-string">&#39;360000&#39;</span> <span class="hljs-attr">format</span>=<span class="hljs-string">&#39;MM:SS&#39;</span>/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">CountDown</span> <span class="hljs-attr">time</span>=<span class="hljs-string">&#39;360000&#39;</span> <span class="hljs-attr">format</span>=<span class="hljs-string">&#39;MM-SS&#39;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">CountDown</span> <span class="hljs-attr">time</span>=<span class="hljs-string">&#39;360000&#39;</span> <span class="hljs-attr">format</span>=<span class="hljs-string">&#39;MM SS&#39;</span>/&gt;</span>
</code></pre><h3>End the callback</h3><p>When the countdown is 0, an end event is triggered.</p><pre><code class="language-jsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> onEnd = <span class="hljs-function">() =&gt;</span> {
    Toast.text(<span class="hljs-string">&#39;countdown finished&#39;</span>)
  }
  <span class="hljs-keyword">return</span>(
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">CountDown</span> <span class="hljs-attr">time</span>=<span class="hljs-string">&#39;5000&#39;</span> <span class="hljs-attr">onEnd</span>=<span class="hljs-string">{onEnd}/</span>&gt;</span></span>
  )
}
</code></pre><h3>Custom Style</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">CountDown</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;css&quot;</span> <span class="hljs-attr">time</span>=<span class="hljs-string">&#39;360000&#39;</span> /&gt;</span>
</code></pre><pre><code class="language-css"><span class="hljs-selector-class">.css</span> {
  <span class="hljs-attribute">font-size</span>: <span class="hljs-number">20px</span>;
  <span class="hljs-attribute">color</span>: <span class="hljs-number">#333</span>;
  <span class="hljs-attribute">letter-spacing</span>: <span class="hljs-number">2px</span>;
  --countdown-num-<span class="hljs-attribute">min-width</span>: <span class="hljs-number">20px</span>;
  --countdown-num-<span class="hljs-attribute">background</span>: <span class="hljs-number">#fff</span>;
  --countdown-num-<span class="hljs-attribute">padding</span>: <span class="hljs-number">0</span> <span class="hljs-number">10px</span>;
  --countdown-num-<span class="hljs-attribute">border-radius</span>: <span class="hljs-number">6px</span>;
  --countdown-dot-<span class="hljs-attribute">color</span>: <span class="hljs-number">#333</span>;
  --countdown-dot-<span class="hljs-attribute">margin</span>: <span class="hljs-number">6px</span>;
}
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>time</td><td>Standard timestamp</td><td><code>string</code></td><td></td></tr><tr><td>format</td><td>HH MM SS\u3001 MM:SS The spacer customizes a one-bit string</td><td><code>string</code></td><td><code>HH:MM:SS</code></td></tr><tr><td>onEnd</td><td>Emitted when the countdown is 0.</td><td><code>() =&gt; void</code></td><td></td></tr></tbody></table><h2>CSS Variables</h2><p>The component provides the following <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>, which can be used to customize styles. Please refer to <a href="#/zh-CN/guide/theme">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code>--countdown-num-min-width</code></td><td>The min width of digital content</td><td><code>18px</code></td></tr><tr><td><code>--countdown-num-background</code></td><td>Digital content background color</td><td><code>#F4433D</code></td></tr><tr><td><code>--countdown-num-padding</code></td><td>Digital content padding</td><td><code>0 4px</code></td></tr><tr><td><code>--countdown-num-border-radius</code></td><td>Digital border-radius</td><td><code>4px</code></td></tr><tr><td><code>--countdown-dot-color</code></td><td>Dot color</td><td><code>#fff</code></td></tr><tr><td><code>--countdown-dot-margin</code></td><td>Dot margin</td><td><code>0 2px</code></td></tr></tbody></table>`,22),l=[o],i={__name:"doc-react.en-US",setup(d,{expose:s}){return s({frontmatter:{}}),(c,r)=>(a(),t("div",e,l))}};export{i as default};
