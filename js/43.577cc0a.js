webpackJsonp([43],{MNb0:function(t,o){t.exports={markdown:"<hr>\n<h2>order: 1\ntitle:\nzh-CN: 位置\nen-US: Placement\nsubtitle:\nzh-CN: 位置\nen-US: The attribute <code>placement</code> determines the position of the popover. Its value is <code>[orientation]-[alignment]</code> with four orientations <code>top</code>, <code>left</code>, <code>right</code>, <code>bottom</code> and three alignments <code>start</code>, <code>end</code>, <code>null</code>, and the default alignment is null.</h2>\n<pre><code class=\"language-js\">import { Popover, Button } from 'dashkit-ui';\n\nconst title = &lt;span&gt;Title&lt;/span&gt;;\nconst content = (\n  &lt;div&gt;\n    &lt;p&gt;Content&lt;/p&gt;\n    &lt;p&gt;Content&lt;/p&gt;\n  &lt;/div&gt;\n);\n\nReactDOM.render(\n  &lt;div className=&quot;popover-box&quot;&gt;\n    &lt;div className=&quot;popover-box-top&quot;&gt;\n      &lt;Popover content={content} title={title} placement=&quot;top-start&quot; trigger=&quot;focus&quot;&gt;\n        &lt;Button className=&quot;popover-button&quot;&gt;top-start&lt;/Button&gt;\n      &lt;/Popover&gt;\n      &lt;Popover content={content} title={title} placement=&quot;top&quot; trigger=&quot;focus&quot;&gt;\n        &lt;Button className=&quot;popover-button&quot;&gt;top&lt;/Button&gt;\n      &lt;/Popover&gt;\n      &lt;Popover content={content} title={title} placement=&quot;top-end&quot; trigger=&quot;focus&quot;&gt;\n        &lt;Button className=&quot;popover-button&quot;&gt;top-end&lt;/Button&gt;\n      &lt;/Popover&gt;\n    &lt;/div&gt;\n    &lt;div className=&quot;popover-box-left&quot;&gt;\n      &lt;Popover content={content} title={title} placement=&quot;left-start&quot; trigger=&quot;focus&quot;&gt;\n        &lt;Button className=&quot;popover-button&quot;&gt;left-start&lt;/Button&gt;\n      &lt;/Popover&gt;\n      &lt;Popover content={content} title={title} placement=&quot;left&quot; trigger=&quot;focus&quot;&gt;\n        &lt;Button className=&quot;popover-button&quot;&gt;left&lt;/Button&gt;\n      &lt;/Popover&gt;\n      &lt;Popover content={content} title={title} placement=&quot;left-end&quot; trigger=&quot;focus&quot;&gt;\n        &lt;Button className=&quot;popover-button&quot;&gt;left-end&lt;/Button&gt;\n      &lt;/Popover&gt;\n    &lt;/div&gt;\n    &lt;div className=&quot;popover-box-right&quot;&gt;\n      &lt;Popover content={content} title={title} placement=&quot;right-start&quot; trigger=&quot;focus&quot;&gt;\n        &lt;Button className=&quot;popover-button&quot;&gt;right-start&lt;/Button&gt;\n      &lt;/Popover&gt;\n      &lt;Popover content={content} title={title} placement=&quot;right&quot; trigger=&quot;focus&quot;&gt;\n        &lt;Button className=&quot;popover-button&quot;&gt;right&lt;/Button&gt;\n      &lt;/Popover&gt;\n      &lt;Popover content={content} title={title} placement=&quot;right-end&quot; trigger=&quot;focus&quot;&gt;\n        &lt;Button className=&quot;popover-button&quot;&gt;right-end&lt;/Button&gt;\n      &lt;/Popover&gt;\n    &lt;/div&gt;\n    &lt;div className=&quot;popover-box-bottom&quot;&gt;\n      &lt;Popover content={content} title={title} placement=&quot;bottom-start&quot; trigger=&quot;focus&quot;&gt;\n        &lt;Button className=&quot;popover-button&quot;&gt;bottom-start&lt;/Button&gt;\n      &lt;/Popover&gt;\n      &lt;Popover content={content} title={title} placement=&quot;bottom&quot; trigger=&quot;focus&quot;&gt;\n        &lt;Button className=&quot;popover-button&quot;&gt;bottom&lt;/Button&gt;\n      &lt;/Popover&gt;\n      &lt;Popover content={content} title={title} placement=&quot;bottom-end&quot; trigger=&quot;focus&quot;&gt;\n        &lt;Button className=&quot;popover-button&quot;&gt;bottom-end&lt;/Button&gt;\n      &lt;/Popover&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;,\n  mountNode,\n);\n</code></pre>\n",demos:{}}}});
//# sourceMappingURL=43.577cc0a.js.map