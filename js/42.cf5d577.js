webpackJsonp([42],{Z93z:function(t,o){t.exports={markdown:"<hr>\n<h2>order: 3\ntitle:\nzh-CN: 基本\nen-US: Trigger\nsubtitle:\nzh-CN: 事件触发, <code>hover</code>, <code>click</code>, <code>focus</code>\nen-US: Trigger events.</h2>\n<pre><code class=\"language-js\">import { Popover, Button } from 'dashkit-ui';\nconst title = &lt;span&gt;Title&lt;/span&gt;;\n\nReactDOM.render(\n  &lt;div&gt;\n    &lt;Popover content=&quot;hover event&quot; title={title} trigger=&quot;hover&quot;&gt;\n      &lt;Button type=&quot;primary&quot;&gt;Hover me&lt;/Button&gt;\n    &lt;/Popover&gt;\n    &lt;Popover content=&quot;click event&quot; title={title} trigger=&quot;click&quot;&gt;\n      &lt;Button style={{ marginLeft: 10 }} type=&quot;primary&quot;&gt;\n        Click me\n      &lt;/Button&gt;\n    &lt;/Popover&gt;\n    &lt;Popover content=&quot;focus event&quot; title={title} trigger=&quot;focus&quot;&gt;\n      &lt;Button style={{ marginLeft: 10 }} type=&quot;primary&quot;&gt;\n        Focus me\n      &lt;/Button&gt;\n    &lt;/Popover&gt;\n  &lt;/div&gt;,\n  mountNode,\n);\n</code></pre>\n",demos:{}}}});
//# sourceMappingURL=42.cf5d577.js.map