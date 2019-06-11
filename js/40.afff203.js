webpackJsonp([40],{quWe:function(t,e){t.exports={markdown:"<hr>\n<h2>order: 2\ntitle:\nzh-CN: 禁用\nen-US: Disabled\nsubtitle:\nzh-CN: 使用<code>disabled</code>禁用radio.\nen-US: Use <code>disabled</code> to disable Radio.</h2>\n<pre><code class=\"language-js\">import { Radio, Button } from 'dashkit-ui';\n\nclass App extends React.Component {\n  state = {\n    disabled: true,\n  };\n\n  toggleDisabled = () =&gt; {\n    this.setState({\n      disabled: !this.state.disabled,\n    });\n  };\n\n  render() {\n    const { disabled } = this.state;\n    return (\n      &lt;div&gt;\n        &lt;div className=&quot;checkbox-list&quot;&gt;\n          &lt;Radio disabled={disabled}&gt;Disabled 1&lt;/Radio&gt;\n          &lt;Radio defaultChecked disabled={disabled}&gt;\n            Disabled 2\n          &lt;/Radio&gt;\n        &lt;/div&gt;\n        &lt;div style={{ marginTop: 20 }}&gt;\n          &lt;Button type=&quot;primary&quot; onClick={this.toggleDisabled} size=&quot;small&quot;&gt;\n            Toggle disabled\n          &lt;/Button&gt;\n        &lt;/div&gt;\n      &lt;/div&gt;\n    );\n  }\n}\n\nReactDOM.render(&lt;App /&gt;, mountNode);\n</code></pre>\n",demos:{}}}});
//# sourceMappingURL=40.afff203.js.map