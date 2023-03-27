import{d as a,c as t,a as l,o as n}from"./vue.afdebf4a.js";const e={class:"markdown-body"},d=l(`<h1>Field</h1><h3>Intro</h3><p>Input Component</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/field&quot;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-field</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Please enter text&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;label&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-field</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;password&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;123456&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;password&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-field</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;12345678901&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;11&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;number&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-field</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;12345&quot;</span> <span class="hljs-attr">maxlength</span>=<span class="hljs-string">&quot;5&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;up to 5 digits&quot;</span> /&gt;</span>
</code></pre><h3>Custom Label</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-field</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;custom label&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;label&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;label&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Subject<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Subsubject<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-field</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-field</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;disable label&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;no label&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;oneLine&quot;</span> /&gt;</span>
</code></pre><h3>Disabled &amp; Readonly</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-field</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;be disabled&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;disabled&quot;</span> <span class="hljs-attr">disabled</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-field</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;disable label&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-field</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;be readonly&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;readonly&quot;</span> <span class="hljs-attr">readonly</span> /&gt;</span>
</code></pre><h3>Required Fields</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-field</span>
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Please enter text&quot;</span>
  <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;label&quot;</span>
  <span class="hljs-attr">required</span>
  <span class="hljs-attr">errormsg</span>=<span class="hljs-string">&quot;can not be empty&quot;</span>
/&gt;</span>
</code></pre><h3>CSS Style</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;theme&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;css style&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;css&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-css"><span class="hljs-selector-class">.theme</span> {
  --field-<span class="hljs-selector-tag">label</span>-<span class="hljs-attribute">width</span>: <span class="hljs-number">100px</span>;
  --field-<span class="hljs-selector-tag">label</span>-text-<span class="hljs-attribute">color</span>: green;
  --field-<span class="hljs-selector-tag">label</span>-<span class="hljs-attribute">font-size</span>: <span class="hljs-number">18px</span>;
  --field-<span class="hljs-selector-tag">label</span>-<span class="hljs-attribute">margin-right</span>: <span class="hljs-number">10px</span>;
  --field-<span class="hljs-selector-tag">input</span>-text-<span class="hljs-attribute">color</span>: <span class="hljs-number">#999</span>;
  --field-<span class="hljs-selector-tag">input</span>-<span class="hljs-attribute">font-size</span>: <span class="hljs-number">20px</span>;
  --field-placeholder-text-<span class="hljs-attribute">color</span>: red;
  --field-placeholder-<span class="hljs-attribute">font-size</span>: <span class="hljs-number">12px</span>;
  --field-disabled-text-<span class="hljs-attribute">color</span>: <span class="hljs-number">#eee</span>;
}
</code></pre><h3>Event</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-field</span>
  <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;emit blurred event&quot;</span>
  <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span>
  @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;change&quot;</span>
  @<span class="hljs-attr">blur</span>=<span class="hljs-string">&quot;blur&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js">  <span class="hljs-function"><span class="hljs-title">change</span>(<span class="hljs-params">e</span>)</span> {
    <span class="hljs-built_in">this</span>.$data.value = e.detail.value;
  },
  <span class="hljs-function"><span class="hljs-title">blur</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-built_in">this</span>.$data.value = <span class="hljs-built_in">this</span>.$data.value * <span class="hljs-number">10</span>;
  },
</code></pre><h3>set rules</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-field</span>
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;placeholder&quot;</span>
  <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;label&quot;</span>
  <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;custom-rule&quot;</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-field</span>&gt;</span>
</code></pre><pre><code class="language-js">&lt;script&gt;
  <span class="hljs-function"><span class="hljs-title">mounted</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> field = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">&#39;custom-rule&#39;</span>);
    field.setRules([
      {
        <span class="hljs-attr">validator</span>: <span class="hljs-built_in">this</span>.validatorPhone,
        <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;please input right phone&#39;</span>
      }
    ])
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">validatorPhone</span>(<span class="hljs-params">value</span>)</span> {
      <span class="hljs-keyword">if</span> (!<span class="hljs-regexp">/^1[3456789]\\d{9}$/</span>.test(value)) {
        <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
      }
      <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
    }
  }
&lt;script&gt;
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>label</td><td>Input description, hide when no value passed. Or can be set to slot = \u2018label\u2019</td><td><code class="">string</code></td><td></td></tr><tr><td>type</td><td>Input type, default is text</td><td><code class="">string</code></td><td><code class="">text</code></td></tr><tr><td>value</td><td>Input value</td><td><code class="">string</code></td><td>-</td></tr><tr><td>defaultvalue</td><td>Default value</td><td><code class="">string</code></td><td>-</td></tr><tr><td>name</td><td>As the identifier when submitting the form</td><td><code class="">string</code></td><td>-</td></tr><tr><td>placeholder</td><td>Default info placeholder</td><td><code class="">string</code></td><td>-</td></tr><tr><td>min</td><td>Inherit native input properties</td><td><code class="">string</code></td><td>-</td></tr><tr><td>minlength</td><td>Inherit native input properties</td><td><code class="">string</code></td><td>-</td></tr><tr><td>max</td><td>Inherit native input properties</td><td><code class="">string</code></td><td>-</td></tr><tr><td>maxlength</td><td>Inherit native input properties</td><td><code class="">string</code></td><td>-</td></tr><tr><td>disabled</td><td>Whether to disable input</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>readonly</td><td>Whether input be readonly</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>required</td><td>Whether input value be required</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>errormsg</td><td>Error text</td><td><code class="">string</code></td><td>-</td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>Event</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>change</td><td>Emitted when input value changed</td><td><code class="">(e:{detail:{value: string}}) =&gt; void</code></td></tr><tr><td>focus</td><td>Emitted when input is focused</td><td><code class="">(e:{detail:{value: string}}) =&gt; void</code></td></tr><tr><td>blur</td><td>Emitted when input is blurred</td><td><code class="">(e:{detail:{value: string}}) =&gt; void</code></td></tr></tbody></table><h3>Method</h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>setRules</td><td>Used to set form validation rules</td><td><code class="">(rule: Rule[]) =&gt; void</code></td></tr></tbody></table><h3>Type definition</h3><pre><code class="language-js">type Rule = {
  <span class="hljs-attr">message</span>: string, <span class="hljs-comment">// error message</span>
  <span class="hljs-attr">validator</span>: <span class="hljs-function">(<span class="hljs-params">value: string | number</span>) =&gt;</span> boolean, <span class="hljs-comment">// rule</span>
};
</code></pre><h2>CSS Variables</h2><p>The component provides the following <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>, which can be used to customize styles. Please refer to <a href="#/theme">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code class="">--field-label-width</code></td><td>label width</td><td><code class="">119px</code></td></tr><tr><td><code class="">--field-label-font-size</code></td><td>label font size</td><td><code class="">15px</code></td></tr><tr><td><code class="">--field-label-text-color</code></td><td>label font color</td><td><code class="">#242729</code></td></tr><tr><td><code class="">--field-label-font-weight</code></td><td>label font weight</td><td></td></tr><tr><td><code class="">--field-label-margin-right</code></td><td>label right margin</td><td><code class="">12px</code></td></tr><tr><td><code class="">--field-input-text-color</code></td><td>input font color</td><td><code class="">#242729</code></td></tr><tr><td><code class="">--field-input-align</code></td><td>input justification</td><td><code class="">left</code></td></tr><tr><td><code class="">--field-input-font-size</code></td><td>input font size</td><td><code class="">15px</code></td></tr><tr><td><code class="">--field-placeholder-text-color</code></td><td>input placeholder text color</td><td><code class="">#bcc4cc</code></td></tr><tr><td><code class="">--field-placeholder-font-size</code></td><td>input placeholder font size</td><td><code class="">15px</code></td></tr><tr><td><code class="">--field-disabled-text-color</code></td><td>disable font color</td><td><code class="">#c8c9cc</code></td></tr><tr><td><code class="">--field-error-font-size</code></td><td>error text font size</td><td><code class="">12px</code></td></tr><tr><td><code class="">--field-error-text-color</code></td><td>error text font color</td><td><code class="">#F72626</code></td></tr><tr><td><code class="">--field-error-text-align</code></td><td>error text justification</td><td><code class="">left</code></td></tr></tbody></table>`,34),p=[d],i={},u="",j=a({__name:"doc.en-US",setup(c,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(r,o)=>(n(),t("div",e,p))}});export{j as default,u as excerpt,i as frontmatter};
