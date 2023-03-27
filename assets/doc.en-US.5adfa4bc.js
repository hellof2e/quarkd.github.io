import{d as e,c as s,a,o as d}from"./vue.1e33bcf4.js";const o={class:"markdown-body"},l=a(`<h1>Image</h1><h3>Intro</h3><p>Enhanced img tag with multiple image fill modes, support for image lazy loading, loading hint, loading failure hint.</p><h3>Install</h3><pre><code class="language-jsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/image&quot;</span>;
</code></pre><h3>Basic Usage</h3><p>The basic usage is consistent with the native img tag, and native attributes such as src, width, height, and alt can be set.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-image</span>
  <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/13459/_zZAz_2546.jpg_wh300.jpg&quot;</span>
  <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;100&quot;</span>
  <span class="hljs-attr">:height</span>=<span class="hljs-string">&quot;100&quot;</span>
/&gt;</span>
</code></pre><h3>Round</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-image</span>
  <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/13459/_zZAz_2546.jpg_wh300.jpg&quot;</span>
  <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;100px&quot;</span>
  <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;100px&quot;</span>
  <span class="hljs-attr">round</span>
/&gt;</span>
</code></pre><h3>Lazy load</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-image</span>
  <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/13459/_zZAz_2546.jpg_wh300.jpg&quot;</span>
  <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;100px&quot;</span>
  <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;100px&quot;</span>
  <span class="hljs-attr">lazy</span>
/&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>width</td><td>Width\uFF0Cdefault unit is px</td><td><code class="">number</code> or <code class="">string</code></td><td>-</td></tr><tr><td>height</td><td>Height\uFF0Cdefault unit is px</td><td><code class="">number</code> or <code class="">string</code></td><td>-</td></tr><tr><td>fit</td><td>Fit mode, same as <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit">object-fit</a></td><td><code class="">string</code></td><td><code class="">fill</code></td></tr><tr><td>lazy</td><td>Whether to enable lazy load</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>round</td><td>Whether to be round</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>radius</td><td>Border Radius</td><td><code class="">number</code> or <code class="">string</code></td><td>-</td></tr><tr><td>alt</td><td>Alternate textual description of image</td><td><code class="">string</code></td><td>-</td></tr></tbody></table><h3>Fit optional value</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>contain</td><td>Keep aspect ratio, fully display the long side of the image</td></tr><tr><td>cover</td><td>Keep aspect ratio, fully display the short side of the image, cutting the long side</td></tr><tr><td>fill</td><td>Stretch and resize image to fill the content box</td></tr><tr><td>none</td><td>Not resize image</td></tr><tr><td>scale-down</td><td>Take the smaller of <code class="">none</code> or <code class="">contain</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th style="text-align:center;">Event</th><th style="text-align:center;">Description</th><th style="text-align:center;">Type</th></tr></thead><tbody><tr><td style="text-align:center;">load</td><td style="text-align:center;">Emitted when image loaded</td><td style="text-align:center;"><code class="">\uFF08\uFF09=&gt;void</code></td></tr><tr><td style="text-align:center;">error</td><td style="text-align:center;">Emitted when image load failed</td><td style="text-align:center;"><code class="">\uFF08\uFF09=&gt;void</code></td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>loading</td><td>Custom loading placeholder</td></tr><tr><td>error</td><td>Custom error placeholder</td></tr></tbody></table><h2>CSS Variables</h2><p>The component provides the following <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>, which can be used to customize styles. Please refer to <a href="#/zh-CN/guide/theme">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code class="">--image-height</code></td><td>Image height</td><td><code class="">100%</code></td></tr><tr><td><code class="">--image-width</code></td><td>Image width</td><td><code class="">100%</code></td></tr></tbody></table>`,24),n=[l],p={},g="",u=e({__name:"doc.en-US",setup(r,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(c,h)=>(d(),s("div",o,n))}});export{u as default,g as excerpt,p as frontmatter};
