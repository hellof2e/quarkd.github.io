import{d as a,c as t,a as n,o as l}from"./vue.157e3f29.js";const e={class:"markdown-body"},c=n(`<h1>Tab</h1><h3>Introduce</h3><p>Used to switch between different content areas.</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Tabs, TabContent } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Tabs</span> <span class="hljs-attr">activekey</span>=<span class="hljs-string">&quot;{1}&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab1&quot;</span>&gt;</span> tab1 content <span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab2&quot;</span>&gt;</span> tab2 content <span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab3&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span> tab3 content <span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab4&quot;</span>&gt;</span> tab4 content <span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Tabs</span>&gt;</span>
</code></pre><h3>Match By Name</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Tabs</span> <span class="hljs-attr">activekey</span>=<span class="hljs-string">{</span>&#39;<span class="hljs-attr">d</span>&#39;}&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab1&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;a&quot;</span>&gt;</span>
    tab1 content
  <span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab2&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;b&quot;</span>&gt;</span>
    tab2 content
  <span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab3&quot;</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;c&quot;</span>&gt;</span>
    tab3 content
  <span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab4&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;d&quot;</span>&gt;</span>
    tab4 content
  <span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Tabs</span>&gt;</span>
</code></pre><h3>Swipe Tabs</h3><p>Horizontal scrolling is automatically supported when the length exceeds the viewport.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Tabs</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab1&quot;</span>&gt;</span>tab1<span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab2&quot;</span>&gt;</span>tab2<span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
  ...
  <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab10&quot;</span>&gt;</span>tab10<span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Tabs</span>&gt;</span>
</code></pre><h3>Click Tab Event</h3><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [activeName, setActiveName] = useState(<span class="hljs-string">&quot;d&quot;</span>);
  <span class="hljs-keyword">const</span> onChange = <span class="hljs-function">(<span class="hljs-params">{ detail }</span>) =&gt;</span> {
    setActiveName(<span class="hljs-function">() =&gt;</span> detail.name);
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\`current selection: <span class="hljs-subst">\${detail.label}</span>\`</span>);
  };

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;demo tab-demo&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Tabs</span> <span class="hljs-attr">activekey</span>=<span class="hljs-string">{activeName}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onChange}</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab1&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;a&quot;</span>&gt;</span>
          tab1 content
        <span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab2&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;b&quot;</span>&gt;</span>
          tab2 content
        <span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab3&quot;</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;c&quot;</span>&gt;</span>
          tab3 content
        <span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab4&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;d&quot;</span>&gt;</span>
          tab4 content
        <span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Tabs</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};
</code></pre><h3>Sticky</h3><p>In sticky mode, the nav-item will be fixed to top when scroll to top.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Tabs</span> <span class="hljs-attr">sticky</span> <span class="hljs-attr">offsettop</span>=<span class="hljs-string">&quot;17vw&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab1&quot;</span>&gt;</span> tab1 content <span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab2&quot;</span>&gt;</span> tab2 content <span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab3&quot;</span>&gt;</span> tab3 content <span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab4&quot;</span>&gt;</span> tab4 content <span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Tabs</span>&gt;</span>
</code></pre><h2>API</h2><h3>Tabs props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default Value</th></tr></thead><tbody><tr><td>activekey</td><td>The currently activated tab, corresponding to the <code class="">name</code> in <code class="">quark-tab-content</code></td><td><code class="">string</code></td><td>-</td></tr><tr><td>sticky</td><td>Whether to use sticky mode</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>offsettop</td><td>Sticky offset top , supports vm</td><td><code class="">string</code></td><td><code class="">0vw</code></td></tr><tr><td>linewidth</td><td>Width of tab line</td><td><code class="">string</code></td><td><code class="">40px</code></td></tr><tr><td>onChange</td><td>change callback</td><td><code class="">(e: {detail: { name: string\uFF0Clabel: number }}) =&gt; void</code></td><td>-</td></tr></tbody></table><h3>TabContent props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default Value</th></tr></thead><tbody><tr><td>label</td><td>tab show name</td><td><code class="">string</code></td><td>-</td></tr><tr><td>disabled</td><td>tab Whether to disable tab</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>name</td><td>tab match label(matches activekey)</td><td><code class="">string</code></td><td>-</td></tr></tbody></table><h2>CSS Variables</h2><p>The component provides the following<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>\uFF0Cwhich can be used to customize styles\uFF0CPlease refer to<a href="#/zh-CN/guide/theme">Theme customization</a>.</p><table><thead><tr><th>Name</th><th>Description</th><th>Default Value</th></tr></thead><tbody><tr><td><code class="">--tab-item-color</code></td><td><code class="">tab-item</code> Font color</td><td><code class="">#5E6266</code></td></tr><tr><td><code class="">--tab-item-active-color</code></td><td><code class="">tab-item</code> Active state <code class="">active</code> font color</td><td><code class="">#333333</code></td></tr><tr><td><code class="">--tab-item-disabled-color</code></td><td><code class="">tab-item</code> Disabled state font color</td><td><code class="">#c8c9cc</code></td></tr><tr><td><code class="">--tab-item-min-width</code></td><td><code class="">tab-item</code> Minimum width (determines the maximum number of display in a line)</td><td><code class="">20vw</code>(Display up to 5 in a row)</td></tr><tr><td><code class="">--tab-item-height</code></td><td><code class="">tab-item</code> Height setting</td><td><code class="">44px </code></td></tr><tr><td><code class="">--tab-item-font-size</code></td><td><code class="">tab-item</code> Font size</td><td><code class="">16px</code></td></tr><tr><td><code class="">--tab-active-line-color</code></td><td><code class="">tab-item</code> active state <code class="">underline</code> color</td><td><code class="">#0088ff </code></td></tr><tr><td><code class="">--tabs-background-color</code></td><td>tabs Background color</td><td><code class="">#ffffff</code></td></tr><tr><td><code class="">--tab-item-background-color</code></td><td><code class="">tab-item</code> Background color</td><td><code class="">#ffffff </code></td></tr></tbody></table>`,25),p=[c],j={},b="",g=a({__name:"doc-react.en-US",setup(o,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(d,h)=>(l(),t("div",e,p))}});export{g as default,b as excerpt,j as frontmatter};
