webpackJsonp([56],{Q28r:function(n,e){n.exports={markdown:"<hr>\n<h2>order: 2\ntitle:\nzh-CN: 回调\nen-US: Callback\nsubtitle:\nzh-CN: 可以设置<code>onClose</code>回调函数。\nen-US: Use <code>onClose</code> to set callback Function.</h2>\n<pre><code class=\"language-js\">import { Message, Button } from 'dashkit-ui';\n\nconst show = () =&gt; {\n  Message.show('Setup a callback function', 1.5, () =&gt; Message.success('Callback successfully!'));\n};\n\nReactDOM.render(&lt;Button onClick={show}&gt;Set up a callback&lt;/Button&gt;, mountNode);\n</code></pre>\n",demos:{}}}});
//# sourceMappingURL=56.38fc695.js.map