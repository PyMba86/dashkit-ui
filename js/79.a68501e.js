webpackJsonp([79],{wSo7:function(t,o){t.exports={markdown:"<hr>\n<h2>order: 6\ntitle:\nzh-CN: 分布\nen-US: Distribution\nsubtitle:\nzh-CN: 可以使用<code>around</code> <code>between</code>, 将元素对齐到行开头或结尾以及列的顶部、底部或中心\nen-US: Use <code>around</code> <code>between</code> to distribute the contents of a row or column.</h2>\n<pre><code class=\"language-js\">import { Grid } from 'dashkit-ui';\nconst { Row, Col } = Grid;\n\nReactDOM.render(\n  &lt;div className=&quot;grid-alignment&quot;&gt;\n    &lt;h4 className=&quot;grid-title grid-title-first&quot;&gt;.around-&lt;/h4&gt;\n    &lt;Row&gt;\n      &lt;Col xs={12}&gt;\n        &lt;div className=&quot;grid-box&quot;&gt;\n          &lt;Row around=&quot;xs&quot;&gt;\n            &lt;Col xs={2}&gt;\n              &lt;div className=&quot;grid-box grid-box-nested&quot; /&gt;\n            &lt;/Col&gt;\n            &lt;Col xs={2}&gt;\n              &lt;div className=&quot;grid-box grid-box-nested&quot; /&gt;\n            &lt;/Col&gt;\n            &lt;Col xs={2}&gt;\n              &lt;div className=&quot;grid-box grid-box-nested&quot; /&gt;\n            &lt;/Col&gt;\n          &lt;/Row&gt;\n        &lt;/div&gt;\n      &lt;/Col&gt;\n    &lt;/Row&gt;\n\n    &lt;h4 className=&quot;grid-title&quot;&gt;.between-&lt;/h4&gt;\n    &lt;Row&gt;\n      &lt;Col xs={12}&gt;\n        &lt;div className=&quot;grid-box&quot;&gt;\n          &lt;Row between=&quot;xs&quot;&gt;\n            &lt;Col xs={2}&gt;\n              &lt;div className=&quot;grid-box grid-box-nested&quot; /&gt;\n            &lt;/Col&gt;\n            &lt;Col xs={2}&gt;\n              &lt;div className=&quot;grid-box grid-box-nested&quot; /&gt;\n            &lt;/Col&gt;\n            &lt;Col xs={2}&gt;\n              &lt;div className=&quot;grid-box grid-box-nested&quot; /&gt;\n            &lt;/Col&gt;\n          &lt;/Row&gt;\n        &lt;/div&gt;\n      &lt;/Col&gt;\n    &lt;/Row&gt;\n  &lt;/div&gt;,\n  mountNode,\n);\n</code></pre>\n",demos:{}}}});
//# sourceMappingURL=79.a68501e.js.map