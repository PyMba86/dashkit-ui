webpackJsonp([26],{"0zgs":function(n,e){n.exports={markdown:"<hr>\n<h2>order: 0\ntitle:\nzh-CN: 基本\nen-US: Basic\nsubtitle:\nzh-CN: 基本的使用。\nen-US: The most basic usage.</h2>\n<pre><code class=\"language-js\">import { Table } from 'dashkit-ui';\n\nconst columns = [\n  {\n    title: 'Date',\n    dataIndex: 'date',\n    width: 120,\n  },\n  {\n    title: 'Name',\n    dataIndex: 'name',\n    width: 100,\n  },\n  {\n    title: 'Address',\n    dataIndex: 'address',\n  },\n];\n\nconst dataSource = [\n  {\n    date: '2016-05-03',\n    name: 'Tom',\n    address: 'No. 189, Grove St, Los Angeles',\n  },\n  {\n    date: '2016-05-02',\n    name: 'Tom',\n    address: 'No. 189, Grove St, Los Angeles',\n  },\n  {\n    date: '2016-05-04',\n    name: 'Tom',\n    address: 'No. 189, Grove St, Los Angeles',\n  },\n  {\n    date: '2016-05-01',\n    name: 'Tom',\n    address: 'No. 189, Grove St, Los Angeles',\n  },\n];\n\nReactDOM.render(&lt;Table columns={columns} dataSource={dataSource} /&gt;, mountNode);\n</code></pre>\n",demos:{}}}});
//# sourceMappingURL=26.dbd7516.js.map