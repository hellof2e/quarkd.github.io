import{d as a,c as n,a as l,o as t}from"./vue.ad30c62b.js";const p={class:"markdown-body"},e=l(`<h1>Swipe</h1><h3>Intro</h3><p>Used to loop a group of pictures or content.</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Swipe, SwipeItem } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Swipe</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">SwipeItem</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">SwipeItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">SwipeItem</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">SwipeItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">SwipeItem</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">SwipeItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">SwipeItem</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">SwipeItem</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Swipe</span>&gt;</span>
</code></pre><h3>Round Indicator</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Swipe</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;round&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">SwipeItem</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">SwipeItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">SwipeItem</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">SwipeItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">SwipeItem</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">SwipeItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">SwipeItem</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">SwipeItem</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Swipe</span>&gt;</span>
</code></pre><h3>Autoplay</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Swipe</span> <span class="hljs-attr">autoplay</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">SwipeItem</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">SwipeItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">SwipeItem</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">SwipeItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">SwipeItem</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">SwipeItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">SwipeItem</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">SwipeItem</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Swipe</span>&gt;</span>
</code></pre><h3>Default SwipeItem</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Swipe</span> <span class="hljs-attr">defaultindex</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">SwipeItem</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">SwipeItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">SwipeItem</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">SwipeItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">SwipeItem</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">SwipeItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">SwipeItem</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">SwipeItem</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Swipe</span>&gt;</span>
</code></pre><h3>Set SwipeItem Size</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Swipe</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;custom-style&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">SwipeItem</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">SwipeItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">SwipeItem</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">SwipeItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">SwipeItem</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">SwipeItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">SwipeItem</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">SwipeItem</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Swipe</span>&gt;</span>
</code></pre><h3>Set Indicator color</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Swipe</span> <span class="hljs-attr">activecolor</span>=<span class="hljs-string">&quot;red&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">SwipeItem</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">SwipeItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">SwipeItem</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">SwipeItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">SwipeItem</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">SwipeItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">SwipeItem</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">SwipeItem</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Swipe</span>&gt;</span>
</code></pre><h3>Custom Indicator</h3><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> handleChange = <span class="hljs-function">(<span class="hljs-params">e</span>) =&gt;</span> {
    <span class="hljs-keyword">const</span> indicator = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">&#39;indicator&#39;</span>);
    indicator.innerHTML = <span class="hljs-string">\`<span class="hljs-subst">\${e.detail.index + <span class="hljs-number">1</span>}</span> / 4\`</span>;
  };
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Swipe</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{handleChange}</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">SwipeItem</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">SwipeItem</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">SwipeItem</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">SwipeItem</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">SwipeItem</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">SwipeItem</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">SwipeItem</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">SwipeItem</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;indicator&quot;</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;indicators&quot;</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;custom-indicator&quot;</span>&gt;</span>
          {&#39; &#39;}
          1 / 4{&#39; &#39;}
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Swipe</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
}

&lt;style&gt;
.custom-indicator {
  <span class="hljs-attr">position</span>: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  color: #fff;
  font-size: 12px;
  background: rgba(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.1</span>);
  z-index: <span class="hljs-number">2</span>;
}
&lt;/style&gt;
</code></pre><h3>Change Event</h3><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> handleChange = <span class="hljs-function">(<span class="hljs-params">e</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(e.detail.index);
  };
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Swipe</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{handleChange}</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">SwipeItem</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">SwipeItem</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">SwipeItem</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">SwipeItem</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">SwipeItem</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">SwipeItem</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">SwipeItem</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">SwipeItem</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Swipe</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attibute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>type</td><td>Indicator type, can be set to <code class="">round</code></td><td><code class="">string</code></td><td></td></tr><tr><td>duration</td><td></td><td><code class="">number</code></td><td><code class="">500</code></td></tr><tr><td>interval</td><td>Animation duration</td><td><code class="">number </code></td><td><code class="">3000</code></td></tr><tr><td>defaultindex</td><td>Default SwipeItem</td><td><code class="">number </code></td><td><code class="">0</code></td></tr><tr><td>autoplay</td><td>Whether to enable autoplay</td><td><code class=""> boolean</code></td><td><code class="">false</code></td></tr><tr><td>activecolor</td><td>Selected indicator color</td><td><code class="">string</code></td><td><code class="">#0088ff</code></td></tr><tr><td>inactivecolor</td><td>Not selected indicator color</td><td><code class="">string</code></td><td><code class="">#d3dae0</code></td></tr><tr><td>onChange</td><td>Emitted when current swipe changed</td><td><code class="">\uFF08e: {detail:{index: number}}\uFF09=&gt; void</code></td><td></td></tr></tbody></table><h2>CSS Variables</h2><p>The component provides the following <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>, which can be used to customize styles. Please refer to <a href="#/zh-CN/guide/theme">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code class="">--swipe-width</code></td><td>SwipeItem width</td><td><code class="">100%</code></td></tr><tr><td><code class="">--swipe-height</code></td><td>SwipeItem height</td><td><code class="">100%</code></td></tr><tr><td><code class="">--swipe-border-radius</code></td><td>SwipeItem border radius</td><td><code class="">0</code></td></tr><tr><td><code class="">--swipe-indicator-activecolor</code></td><td>Indicator color</td><td><code class="">#0088ff</code></td></tr><tr><td><code class="">--swipe-indicator-margin</code></td><td>Indicator margin</td><td><code class="">2px</code></td></tr></tbody></table>`,27),c=[e],i={},m="",o=a({__name:"doc-react.en-US",setup(h,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(g,j)=>(t(),n("div",p,c))}});export{o as default,m as excerpt,i as frontmatter};
