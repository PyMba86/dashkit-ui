webpackJsonp([71],{wu9A:function(n,t){n.exports={markdown:"<hr>\n<h2>order: 7\ntitle:\nzh-CN: 箭头\nen-US: Arrows\nsubtitle:\nzh-CN: 箭头\nen-US: Arrows.</h2>\n<pre><code class=\"language-js\">import { Icon } from 'dashkit-ui';\nimport types from 'dashkit-ui/icon/types';\n\nclass IconList extends React.Component {\n  render() {\n    const dataSource = types['arrows'];\n\n    return (\n      &lt;div className=&quot;icon-list clearfix&quot;&gt;\n        {dataSource.map((name, key) =&gt; (\n          &lt;div className=&quot;icon-item-wrapper&quot; key={key}&gt;\n            &lt;div className=&quot;icon-item&quot;&gt;\n              &lt;Icon type={name} /&gt;\n              &lt;span&gt;{name}&lt;/span&gt;\n            &lt;/div&gt;\n          &lt;/div&gt;\n        ))}\n      &lt;/div&gt;\n    );\n  }\n}\n\nReactDOM.render(&lt;IconList /&gt;, mountNode);\n</code></pre>\n",demos:{}}}});
//# sourceMappingURL=71.a252eb4.js.map