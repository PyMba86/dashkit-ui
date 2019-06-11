webpackJsonp([8],{Hx5Y:function(t,e,n){t.exports={code:'import { Input } from \'dashkit-ui\';\nconst inputStyle = {\n  marginRight: 10,\n};\nReactDOM.render(\n  <div>\n    <Input defaultValue="Hello." style={inputStyle} />\n    <Input disabled defaultValue="Hello." />\n  </div>,\n  mountNode,\n);\n',meta:{order:0,title:{"zh-CN":"基本","en-US":"Basic"},subtitle:{"zh-CN":"<p>基本用法。</p>\n","en-US":"<p>Basic usage.</p>\n"}},preview:function(){var t=n("GiK3"),e=(n("O27J"),n("qMEF")),d={marginRight:10};return t.createElement("div",null,t.createElement(e.Input,{defaultValue:"Hello.",style:d}),t.createElement(e.Input,{disabled:!0,defaultValue:"Hello."}))}}},Ixv2:function(t,e,n){t.exports={markdown:"<h1>Input</h1>\n<p>Dashkit supports all of Bootstrap's default form styling in addition to a handful of new input types and features.</p>\n<div id=\"demos\"></div>\n<h2>API</h2>\n<table>\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>className</td>\n<td>className of the component</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>size</td>\n<td>input size, can be set to <code>small</code> <code>large</code> or omitted</td>\n<td>string</td>\n<td>default</td>\n</tr>\n<tr>\n<td>name</td>\n<td>name of the component</td>\n<td>string</td>\n<td>-</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>disable the componnet</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>value</td>\n<td>The input content value</td>\n<td>string</td>\n<td>-</td>\n</tr>\n<tr>\n<td>defaultValue</td>\n<td>The initial input content</td>\n<td>string</td>\n<td>-</td>\n</tr>\n<tr>\n<td>placeholder</td>\n<td>The placeholder of input</td>\n<td>string</td>\n<td>-</td>\n</tr>\n<tr>\n<td>type</td>\n<td>type of input</td>\n<td><code>'text' | 'password' | 'number'</code></td>\n<td>text</td>\n</tr>\n<tr>\n<td>digits</td>\n<td>digits of number input</td>\n<td>number</td>\n<td>-</td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>The prefix icon for the Input.</td>\n<td>icon type</td>\n<td>-</td>\n</tr>\n<tr>\n<td>prefixClassName</td>\n<td>The className of prefix icon</td>\n<td>string</td>\n<td>-</td>\n</tr>\n<tr>\n<td>suffix</td>\n<td>The prefix icon for the Input.</td>\n<td>icon type</td>\n<td>-</td>\n</tr>\n<tr>\n<td>suffixClassName</td>\n<td>The className of suffix icon</td>\n<td>string</td>\n<td>-</td>\n</tr>\n<tr>\n<td>wrapperClassName</td>\n<td>The className of suffix icon</td>\n<td>string</td>\n<td>-</td>\n</tr>\n<tr>\n<td>wrapperRef</td>\n<td>ref of the wrapper</td>\n<td><code>React.RefObject&lt;HTMLDivElement&gt;</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>value of input is changed</td>\n<td><code>React.RefObject&lt;HTMLDivElement&gt;</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>onFocus</td>\n<td>Called when focus</td>\n<td><code>(event: React.ChangeEvent&lt;HTMLInputElement&gt;) =&gt; void;</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>onBlur</td>\n<td>Called when blur</td>\n<td><code>(event: React.ChangeEvent&lt;HTMLInputElement&gt;) =&gt; void;</code></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n",demos:{basic:n("Hx5Y"),disabled:n("Jqvo"),"prefix-sufix":n("Muxd"),size:n("gQx+")}}},Jqvo:function(t,e,n){t.exports={code:"import { Input } from 'dashkit-ui';\n\nReactDOM.render(<Input placeholder=\"This is a diabled Input\" disabled={true} />, mountNode);\n",meta:{order:2,title:{"zh-CN":"禁用","en-US":"Disabled"},subtitle:{"zh-CN":"<p>使用<code>disabled</code>来决定是否禁用输入框，默认值是<code>false</code>。</p>\n","en-US":"<p>Add the <code>disabled</code> property to determine if the input is disabled.</p>\n"}},preview:function(){var t=n("GiK3"),e=(n("O27J"),n("qMEF"));return t.createElement(e.Input,{placeholder:"This is a diabled Input",disabled:!0})}}},Muxd:function(t,e,n){t.exports={code:'import { Input, Tooltip, Icon } from \'dashkit-ui\';\n\nReactDOM.render(<Input placeholder="Enter your username" prefix="user" suffix="info" />, mountNode);\n',meta:{order:3,title:{"zh-CN":"前缀后缀","en-US":"prefix and suffix"},subtitle:{"zh-CN":"<p>使用<code>prefix</code>或者<code>suffix</code>来增加前缀或者后缀。</p>\n","en-US":"<p>Add <code>prefix</code> or <code>suffix</code> icons inside input..</p>\n"}},preview:function(){var t=n("GiK3"),e=(n("O27J"),n("qMEF"));return t.createElement(e.Input,{placeholder:"Enter your username",prefix:"user",suffix:"info"})}}},"gQx+":function(t,e,n){t.exports={code:'import { Input } from \'dashkit-ui\';\nconst inputStyle = {\n  marginRight: 10,\n  marginBottom: 10,\n};\n\nReactDOM.render(\n  <div className="input-list">\n    <Input placeholder="large size" size="large" style={inputStyle} />\n    <Input placeholder="default size" size="default" style={inputStyle} />\n    <Input placeholder="small size" size="small" style={inputStyle} />\n  </div>,\n  mountNode,\n);\n',meta:{order:1,title:{"zh-CN":"尺寸","en-US":"Size"},subtitle:{"zh-CN":"<p>可以设置<code>size</code>属性来定义尺寸，属性值包括<code>large</code>、<code>default</code>、<code>small</code>，默认是<code>default</code>。</p>\n","en-US":"<p>If a large or small button is desired, set the size property to either <code>large</code> or <code>small</code> respectively. Omit the <code>size</code> property for a button with the default size.</p>\n"}},preview:function(){var t=n("GiK3"),e=(n("O27J"),n("qMEF")),d={marginRight:10,marginBottom:10};return t.createElement("div",{className:"input-list"},t.createElement(e.Input,{placeholder:"large size",size:"large",style:d}),t.createElement(e.Input,{placeholder:"default size",size:"default",style:d}),t.createElement(e.Input,{placeholder:"small size",size:"small",style:d}))}}}});
//# sourceMappingURL=8.7ed0bba.js.map