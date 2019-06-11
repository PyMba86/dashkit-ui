webpackJsonp([36],{"5CSr":function(n,t){n.exports={markdown:"<hr>\n<h2>order: 3\ntitle:\nzh-CN: 选项\nen-US: FilterOption\nsubtitle:\nzh-CN: 处理选项用法。\nen-US: Use <code>filterOption</code> to flilter options.</h2>\n<pre><code class=\"language-js\">import { Select } from 'dashkit-ui';\nconst { Option, OptionGroup } = Select;\nconst data = [\n  'red',\n  'orange',\n  'yellow',\n  'green',\n  'cyan',\n  'blue',\n  'violet',\n  'red1',\n  'orange1',\n  'yellow1',\n  'green1',\n  'cyan1',\n  'blue1',\n  'violet1',\n];\nconst stations = {\n  'Circle Line': ['Buona Vista', 'Kent Ridge', 'Bishan', 'Dhoby Ghaut'],\n  'East West Line': ['Chinese Garden', 'Jurong East'],\n};\n\nfunction onChange(value) {\n  console.log(`value: ${value}`);\n}\n\nfunction filterOption(inputValue, itemValue) {\n  return itemValue.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1;\n}\nconst Demo = () =&gt; (\n  &lt;div&gt;\n    &lt;Select onChange={onChange}&gt;\n      {data.map(color =&gt; (\n        &lt;Option key={color} value={color} filterOption={filterOption}&gt;\n          {color}\n        &lt;/Option&gt;\n      ))}\n      &lt;Option value=&quot;disabled&quot; disabled filterOption={filterOption}&gt;\n        disabled\n      &lt;/Option&gt;\n    &lt;/Select&gt;\n    &lt;Select onChange={onChange} style={{ marginLeft: 10 }}&gt;\n      {Object.keys(stations).map(key =&gt; (\n        &lt;OptionGroup key={key} label={key}&gt;\n          {stations[key].map(station =&gt; (\n            &lt;Option key={station} value={station} filterOption={filterOption}&gt;\n              {station}\n            &lt;/Option&gt;\n          ))}\n        &lt;/OptionGroup&gt;\n      ))}\n    &lt;/Select&gt;\n  &lt;/div&gt;\n);\nReactDOM.render(&lt;Demo /&gt;, mountNode);\n</code></pre>\n",demos:{}}}});
//# sourceMappingURL=36.b3684f1.js.map