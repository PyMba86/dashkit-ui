webpackJsonp([24],{MxVA:function(n,t){n.exports={markdown:"<hr>\n<h2>order: 2\ntitle:\nzh-CN: 禁用\nen-US: Disabled\nsubtitle:\nzh-CN: 基本的使用。\nen-US: Disabled usage.</h2>\n<pre><code class=\"language-js\">import { Tooltip, Button } from 'dashkit-ui';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      disabled: false,\n    };\n  }\n\n  render() {\n    const { disabled } = this.state;\n\n    return (\n      &lt;Tooltip content=&quot;prompt text&quot; disabled={disabled}&gt;\n        &lt;Button onClick={this.handleClick}&gt;\n          click to {disabled ? 'active' : 'close'} tooltip function\n        &lt;/Button&gt;\n      &lt;/Tooltip&gt;\n    );\n  }\n\n  handleClick = () =&gt; {\n    const { disabled } = this.state;\n\n    this.setState({\n      disabled: !disabled,\n    });\n  };\n}\n\nReactDOM.render(&lt;Demo /&gt;, mountNode);\n</code></pre>\n",demos:{}}}});
//# sourceMappingURL=24.e209346.js.map