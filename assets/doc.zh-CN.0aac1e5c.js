import{c as a,o as n,a as t}from"./vue.296e9791.js";const l={class:"markdown-body"},p=t(`<h1>ActionSheet</h1><h3>\u4ECB\u7ECD</h3><p>ActionSheet \u52A8\u4F5C\u9762\u677F</p><h3>\u5B89\u88C5\u4F7F\u7528</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> ActionSheet <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;quarkd/lib/action-sheet&#39;</span>;
</code></pre><h3>\u57FA\u672C\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showActionSheet()&quot;</span>&gt;</span>\u70B9\u51FB<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> ActionSheet <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;quarkd/lib/action-sheet&#39;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">showActionSheet</span>(<span class="hljs-params"></span>)</span> {
       <span class="hljs-keyword">const</span> actionSheet = ActionSheet({
            <span class="hljs-attr">actions</span>: [{ <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E00&#39;</span> }, { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E8C&#39;</span> }, { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E09&#39;</span> }],
            <span class="hljs-attr">select</span>: <span class="hljs-function">(<span class="hljs-params">index, action</span>) =&gt;</span> {},
            <span class="hljs-attr">cancel</span>: <span class="hljs-function">() =&gt;</span> {},
            <span class="hljs-attr">close</span>: <span class="hljs-function">() =&gt;</span> {}
        });
    },
 }
}
</code></pre><h3>\u5E26\u6807\u9898</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showActionSheet()&quot;</span>&gt;</span>\u70B9\u51FB<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> ActionSheet <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;quarkd/lib/action-sheet&#39;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">showActionSheet</span>(<span class="hljs-params"></span>)</span> {
       <span class="hljs-keyword">const</span> pop = ActionSheet({
        <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u6211\u662F\u6807\u9898\u4FE1\u606F&#39;</span>,
        <span class="hljs-attr">actions</span>: [{ <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E00&#39;</span> }, { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E8C&#39;</span> }, { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E09&#39;</span> }],
        <span class="hljs-attr">select</span>: <span class="hljs-function">(<span class="hljs-params">index, action</span>) =&gt;</span> {},
        <span class="hljs-attr">cancel</span>: <span class="hljs-function">() =&gt;</span> {},
        <span class="hljs-attr">close</span>: <span class="hljs-function">() =&gt;</span> {}
      });
    },
 }
}
</code></pre><h3>\u5E26\u53D6\u6D88\u6309\u94AE</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showActionSheet()&quot;</span>&gt;</span>\u70B9\u51FB<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> ActionSheet <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;quarkd/lib/action-sheet&#39;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">showActionSheet</span>(<span class="hljs-params"></span>)</span> {
       <span class="hljs-keyword">const</span> pop = ActionSheet({
        <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u6211\u662F\u6807\u9898\u4FE1\u606F&#39;</span>,
        <span class="hljs-attr">cancelText</span>: <span class="hljs-string">&#39;\u53D6\u6D88&#39;</span>,
        <span class="hljs-attr">actions</span>: [{ <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E00&#39;</span> }, { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E8C&#39;</span> }, { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E09&#39;</span> }],
        <span class="hljs-attr">select</span>: <span class="hljs-function">(<span class="hljs-params">index, action</span>) =&gt;</span> {},
        <span class="hljs-attr">cancel</span>: <span class="hljs-function">() =&gt;</span> {},
        <span class="hljs-attr">close</span>: <span class="hljs-function">() =&gt;</span> {}
      });
    },
 }
}
</code></pre><h3>\u81EA\u5B9A\u4E49\u6807\u9898\u6837\u5F0F</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showActionSheet()&quot;</span>&gt;</span>\u70B9\u51FB<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> ActionSheet <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;quarkd/lib/action-sheet&#39;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">showActionSheet</span>(<span class="hljs-params"></span>)</span> {
       <span class="hljs-keyword">const</span> pop = ActionSheet({
        <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u6211\u662F\u6807\u9898\u4FE1\u606F&#39;</span>,
        <span class="hljs-attr">titleColor</span>: <span class="hljs-string">&#39;red&#39;</span>,
        <span class="hljs-attr">titleFontSize</span>: <span class="hljs-number">20</span>,
        <span class="hljs-attr">actions</span>: [{ <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E00&#39;</span> }, { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E8C&#39;</span> }, { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E09&#39;</span> }],
        <span class="hljs-attr">select</span>: <span class="hljs-function">(<span class="hljs-params">index, action</span>) =&gt;</span> {},
        <span class="hljs-attr">cancel</span>: <span class="hljs-function">() =&gt;</span> {},
        <span class="hljs-attr">close</span>: <span class="hljs-function">() =&gt;</span> {}
      });
    },
 }
}
</code></pre><h3>\u81EA\u5B9A\u4E49\u9009\u9879\u6837\u5F0F</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showActionSheet()&quot;</span>&gt;</span>\u70B9\u51FB<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> ActionSheet <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;quarkd/lib/action-sheet&#39;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">showActionSheet</span>(<span class="hljs-params"></span>)</span> {
       <span class="hljs-keyword">const</span> pop = ActionSheet({
        <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u6211\u662F\u6807\u9898\u4FE1\u606F&#39;</span>,
        <span class="hljs-attr">titleColor</span>: <span class="hljs-string">&#39;red&#39;</span>,
        <span class="hljs-attr">titleFontSize</span>: <span class="hljs-number">20</span>,
        <span class="hljs-attr">actions</span>: [
            { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E00&#39;</span>,<span class="hljs-attr">color</span>: <span class="hljs-string">&#39;#999&#39;</span>, <span class="hljs-attr">fontSize</span>: <span class="hljs-number">20</span> }, 
            { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E8C&#39;</span> }, 
            { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E09&#39;</span> }
        ],
        <span class="hljs-attr">select</span>: <span class="hljs-function">(<span class="hljs-params">index, action</span>) =&gt;</span> {},
        <span class="hljs-attr">cancel</span>: <span class="hljs-function">() =&gt;</span> {},
        <span class="hljs-attr">close</span>: <span class="hljs-function">() =&gt;</span> {}
      });
    },
 }
}
</code></pre><h3>\u81EA\u5B9A\u4E49\u53D6\u6D88\u6309\u94AE\u6837\u5F0F</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showActionSheet()&quot;</span>&gt;</span>\u70B9\u51FB<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> ActionSheet <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;quarkd/lib/action-sheet&#39;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">showActionSheet</span>(<span class="hljs-params"></span>)</span> {
       <span class="hljs-keyword">const</span> pop = ActionSheet({
        <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u6211\u662F\u6807\u9898\u4FE1\u606F&#39;</span>,
        <span class="hljs-attr">cancelText</span>: <span class="hljs-string">&#39;\u53D6\u6D88&#39;</span>,
        <span class="hljs-attr">cancelTextColor</span>: <span class="hljs-string">&#39;red&#39;</span>,
        <span class="hljs-attr">cancelTextFontSize</span>: <span class="hljs-number">20</span>,
        <span class="hljs-attr">actions</span>: [{ <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E00&#39;</span> }, { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E8C&#39;</span> }, { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E09&#39;</span> }],
        <span class="hljs-attr">select</span>: <span class="hljs-function">(<span class="hljs-params">index, action</span>) =&gt;</span> {},
        <span class="hljs-attr">cancel</span>: <span class="hljs-function">() =&gt;</span> {},
        <span class="hljs-attr">close</span>: <span class="hljs-function">() =&gt;</span> {}
      });
    },
 }
}
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u6807\u9898\u6587\u5B57</td><td><code>string</code></td><td></td></tr><tr><td>actions</td><td>\u9009\u9879\u6309\u94AE</td><td><code>Action []</code></td><td><code>require</code></td></tr><tr><td>cancelText</td><td>\u53D6\u6D88\u6309\u94AE</td><td><code>string</code></td><td></td></tr><tr><td>titleColor</td><td>\u6807\u9898\u6587\u5B57\u989C\u8272</td><td><code>string </code></td><td><code>#969799</code></td></tr><tr><td>titleFontSize</td><td>\u6807\u9898\u6587\u5B57\u5927\u5C0F</td><td><code>number </code></td><td><code>14</code></td></tr><tr><td>cancelTextColor</td><td>\u53D6\u6D88\u6309\u94AE\u6587\u5B57\u989C\u8272</td><td><code>string </code></td><td><code>#646566</code></td></tr><tr><td>cancelTextFontSize</td><td>\u53D6\u6D88\u6309\u94AE\u6587\u5B57\u5927\u5C0F</td><td><code>number </code></td><td><code>16</code></td></tr><tr><td>zIndex</td><td>actionsheet\u5C42\u7EA7</td><td><code>number </code></td><td><code>999</code></td></tr><tr><td>select</td><td>\u9009\u9879\u9009\u4E2D\u56DE\u8C03</td><td><code>(index: number, action: Action) =&gt; void</code></td><td></td></tr><tr><td>cancel</td><td>\u53D6\u6D88\u6309\u94AE\u70B9\u51FB\u56DE\u8C03</td><td><code>() =&gt; void </code></td><td></td></tr><tr><td>close</td><td>\u8499\u7248\u70B9\u51FB\u56DE\u8C03</td><td><code>() =&gt; void </code></td><td></td></tr></tbody></table><h3>Action\u7684\u6570\u636E\u7ED3\u6784\u5982\u4E0B</h3><pre><code class="language-js">type Action = {
  <span class="hljs-attr">name</span>: string;
  color?: string;
  fontSize?: number;
};

type ActionParams = {
  title?: string;
  actions: Action[],
  cancelText?: string,
  titleColor?: string,
  titleFontSize?: number,
  cancelTextColor?: string,
  cancelTextFontSize?: number,
  <span class="hljs-attr">select</span>: <span class="hljs-function">(<span class="hljs-params">index: number, action: Action</span>) =&gt;</span> <span class="hljs-keyword">void</span>,
  cancel?: <span class="hljs-function">() =&gt;</span> <span class="hljs-keyword">void</span>,
  close?: <span class="hljs-function">() =&gt;</span> <span class="hljs-keyword">void</span>,
  zIndex?: number
}

</code></pre>`,28),c=[p],j={__name:"doc.zh-CN",setup(e,{expose:s}){return s({frontmatter:{}}),(o,r)=>(n(),a("div",l,c))}};export{j as default};
