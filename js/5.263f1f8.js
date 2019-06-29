webpackJsonp([5],{B6SE:function(e,t,n){e.exports={code:'import { Switch } from \'dashkit-ui\';\n\nReactDOM.render(\n  <div className="switch-list">\n    <Switch size="large" />\n    <Switch size="default" />\n    <Switch size="small" />\n  </div>,\n  mountNode,\n);\n',meta:{order:1,title:{"zh-CN":"尺寸","en-US":"Sizes"},subtitle:{"zh-CN":"<p>可以设置<code>size</code>属性来定义尺寸，属性值包括<code>large</code>、<code>default</code>、<code>small</code>，默认是<code>default</code>。</p>\n","en-US":"<p>If a large or small switch is desired, set the size property to either <code>large</code> or <code>small</code> respectively. Omit the <code>size</code> property for a button with the default size.</p>\n"}},preview:function(){var e=n("GiK3"),t=(n("O27J"),n("qMEF"));return e.createElement("div",{className:"switch-list"},e.createElement(t.Switch,{size:"large"}),e.createElement(t.Switch,{size:"default"}),e.createElement(t.Switch,{size:"small"}))}}},VURt:function(e,t,n){e.exports={code:"import { Switch } from 'dashkit-ui';\n\nReactDOM.render(<Switch checked={true} disabled={true} />, mountNode);\n",meta:{order:2,title:{"zh-CN":"禁用","en-US":"Disabled"},subtitle:{"zh-CN":"<p>使用<code>disabled</code>来决定是否禁用switch，默认值是<code>false</code>。</p>\n","en-US":"<p>Add the <code>disabled</code> property to determine if the switch is disabled.</p>\n"}},preview:function(){var e=n("GiK3"),t=(n("O27J"),n("qMEF"));return e.createElement(t.Switch,{checked:!0,disabled:!0})}}},XqTR:function(e,t,n){e.exports={markdown:'<h1>Switch</h1>\n<p>Replaces a standard checkbox input with a switch button.</p>\n<div id="demos"></div>\n<h2>API</h2>\n<div class="api-container">\n<table>\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>className</td>\n<td>className of the component</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>size</td>\n<td>switch size, can be set to <code>small</code> <code>large</code> or omitted</td>\n<td>string</td>\n<td>default</td>\n</tr>\n<tr>\n<td>checked</td>\n<td>determine whether the <code>Switch</code> is checked</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>defaultChecked</td>\n<td>initail checked</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>to disable the component</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>checkedChildren</td>\n<td>content to be shown when the state is checked</td>\n<td>React.ReactNode</td>\n<td>-</td>\n</tr>\n<tr>\n<td>unCheckedChildren</td>\n<td>content to be shown when the state is unchecked</td>\n<td>React.ReactNode</td>\n<td>-</td>\n</tr>\n<tr>\n<td>onChange</td>\n<td><code>change</code> event handler</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>onClick</td>\n<td>trigger when clicked</td>\n<td>-</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>\n',demos:{basic:n("v7vg"),children:n("ae6Q"),disabled:n("VURt"),size:n("B6SE")}}},ae6Q:function(e,t,n){e.exports={code:'import { Switch } from \'dashkit-ui\';\n\nReactDOM.render(\n  <div className="switch-list">\n    <Switch size="large" checkedChildren="Open" unCheckedChildren="Close" />\n    <Switch size="default" checkedChildren="Open" unCheckedChildren="Close" />\n    <Switch size="small" checkedChildren="Open" unCheckedChildren="Close" />\n  </div>,\n  mountNode,\n);\n',meta:{order:4,title:{"zh-CN":"子组件","en-US":"Children"},subtitle:{"zh-CN":"<p>自定义文字的使用。</p>\n","en-US":"<p>use <code>checkedChildren</code> and <code>unCheckedChildren</code> to define children.</p>\n"}},preview:function(){var e=n("GiK3"),t=(n("O27J"),n("qMEF"));return e.createElement("div",{className:"switch-list"},e.createElement(t.Switch,{size:"large",checkedChildren:"Open",unCheckedChildren:"Close"}),e.createElement(t.Switch,{size:"default",checkedChildren:"Open",unCheckedChildren:"Close"}),e.createElement(t.Switch,{size:"small",checkedChildren:"Open",unCheckedChildren:"Close"}))}}},v7vg:function(e,t,n){e.exports={code:"import { Switch } from 'dashkit-ui';\n\nfunction onChange(checked) {\n  console.log(`switch to ${checked}`);\n}\n\nReactDOM.render(<Switch defaultChecked onChange={onChange} />, mountNode);\n",meta:{order:0,title:{"zh-CN":"基本","en-US":"Basic"},subtitle:{"zh-CN":"<p>基本的使用。</p>\n","en-US":"<p>The most basic usage.</p>\n"}},preview:function(){function e(e){console.log("switch to ".concat(e))}var t=n("GiK3"),d=(n("O27J"),n("qMEF"));return t.createElement(d.Switch,{defaultChecked:!0,onChange:e})}}}});
//# sourceMappingURL=5.263f1f8.js.map