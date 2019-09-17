webpackJsonp([16],{"/F+7":function(e,n,t){e.exports={markdown:'<h1>Menu</h1>\n<p>Powerful and responsive navigation header, the menu. Includes support for branding, navigation, and more, including support for the collapse plugin</p>\n<div id="demos"></div>\n<h2>API</h2>\n<h3>Menu</h3>\n<div class="api-container">\n<table>\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>className</td>\n<td>className of the component</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>activeKey</td>\n<td>key of selected <code>MenuItem</code></td>\n<td><code>string</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>defaultActiveKey</td>\n<td>initial key of selected <code>MenuItem</code></td>\n<td><code>string</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>defaultOpenKeys</td>\n<td>opened key of <code>Submenu</code></td>\n<td><code>string</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>mode</td>\n<td>type of the menu</td>\n<td><code>\'horizontal\' | \'vertical\'</code></td>\n<td><code>vertical</code></td>\n</tr>\n<tr>\n<td>theme</td>\n<td>color theme of the menu</td>\n<td><code>\'dark\' | \'light\'</code></td>\n<td><code>light</code></td>\n</tr>\n<tr>\n<td>onSelect</td>\n<td>selected event handler</td>\n<td><code>Function</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>onOpen</td>\n<td>callback when a Submenu is opened</td>\n<td><code>Function</code></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>\n<h3>Menu.Item</h3>\n<div class="api-container">\n<table>\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>className</td>\n<td>className of the component</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>index</td>\n<td>key of the component</td>\n<td><code>string</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>disbaled the component</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>icon</td>\n<td>icon type</td>\n<td><code>IconType</code></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>\n<h3>Menu.ItemGroup</h3>\n<div class="api-container">\n<table>\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>className</td>\n<td>className of the component</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>title</td>\n<td>title of the component</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n</tr>\n</tbody>\n</table>\n</div>\n<h3>Menu.SubMenu</h3>\n<div class="api-container">\n<table>\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>className</td>\n<td>className of the component</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>title</td>\n<td>title of the component</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>icon</td>\n<td>icon type</td>\n<td><code>IconType</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>index</td>\n<td>key of the component</td>\n<td><code>string</code></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>\n',demos:{sidebar:t("Msqx"),theme:t("zTyw"),topbar:t("9UKx")}}},"9UKx":function(e,n,t){e.exports={code:'import { Menu, Grid } from \'dashkit-ui\';\nconst { Row, Col } = Grid;\nconst { Item, SubMenu } = Menu;\n\nclass MenuDemo extends React.Component {\n  render() {\n    const { theme } = this.props;\n    return (\n      <Menu\n        defaultActiveKey="Dashboard"\n        theme={theme}\n        mode="horizontal"\n        onSelect={this.onMenuSelect}\n        onOpen={this.onSubMenuOpen}\n      >\n        <Item icon="home" index="Dashboard">\n          Dashboard\n        </Item>\n        <SubMenu icon="book-open" title="Components" index="Components">\n          <Item index="Alert">Alert</Item>\n          <Item index="button">Button</Item>\n          <Item index="input">Input</Item>\n          <Item index="Layout">Layout</Item>\n          <SubMenu title="Menu" index="Menu">\n            <Item index="MenuItem">MenuItem</Item>\n            <Item index="MenuSubmenu">MenuSubmenu</Item>\n          </SubMenu>\n        </SubMenu>\n        <Item icon="git-branch" index="Changelog" disabled>\n          Changelog\n        </Item>\n        <SubMenu icon="layout" index="Layouts" title="Layouts">\n          <Item index="Slidenav">Slidenav</Item>\n          <Item index="Topnav">Topnav</Item>\n        </SubMenu>\n      </Menu>\n    );\n  }\n\n  onMenuSelect = index => {\n    console.log(`item selected: ${index}`);\n  };\n\n  onSubMenuOpen = index => {\n    console.log(`submunu opened: ${index}`);\n  };\n}\n\nReactDOM.render(\n  <div>\n    <Row>\n      <Col xs={12} className="menu-horizontal-item">\n        <MenuDemo theme="light" />\n      </Col>\n      <Col xs={12} className="menu-horizontal-item">\n        <MenuDemo theme="dark" />\n      </Col>\n    </Row>\n  </div>,\n  mountNode,\n);\n',meta:{order:1,title:{"zh-CN":"顶部导航","en-US":"Topbar"},subtitle:{"zh-CN":"<p>水平排列的菜单。</p>\n","en-US":"<p>Horizontal Menu.</p>\n"}},preview:function(){function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(n)}function n(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),e}function i(n,t){return!t||"object"!==e(t)&&"function"!=typeof t?d(n):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&c(e,n)}function c(e,n){return(c=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var m=t("GiK3"),s=(t("O27J"),t("qMEF")),h=s.Grid.Row,p=s.Grid.Col,b=s.Menu.Item,f=s.Menu.SubMenu,y=function(e){function t(){var e,o;n(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return o=i(this,(e=u(t)).call.apply(e,[this].concat(a))),l(d(o),"onMenuSelect",function(e){console.log("item selected: ".concat(e))}),l(d(o),"onSubMenuOpen",function(e){console.log("submunu opened: ".concat(e))}),o}return a(t,e),r(t,[{key:"render",value:function(){var e=this.props.theme;return m.createElement(s.Menu,{defaultActiveKey:"Dashboard",theme:e,mode:"horizontal",onSelect:this.onMenuSelect,onOpen:this.onSubMenuOpen},m.createElement(b,{icon:"home",index:"Dashboard"},"Dashboard"),m.createElement(f,{icon:"book-open",title:"Components",index:"Components"},m.createElement(b,{index:"Alert"},"Alert"),m.createElement(b,{index:"button"},"Button"),m.createElement(b,{index:"input"},"Input"),m.createElement(b,{index:"Layout"},"Layout"),m.createElement(f,{title:"Menu",index:"Menu"},m.createElement(b,{index:"MenuItem"},"MenuItem"),m.createElement(b,{index:"MenuSubmenu"},"MenuSubmenu"))),m.createElement(b,{icon:"git-branch",index:"Changelog",disabled:!0},"Changelog"),m.createElement(f,{icon:"layout",index:"Layouts",title:"Layouts"},m.createElement(b,{index:"Slidenav"},"Slidenav"),m.createElement(b,{index:"Topnav"},"Topnav")))}}]),t}(m.Component);return m.createElement("div",null,m.createElement(h,null,m.createElement(p,{xs:12,className:"menu-horizontal-item"},m.createElement(y,{theme:"light"})),m.createElement(p,{xs:12,className:"menu-horizontal-item"},m.createElement(y,{theme:"dark"}))))}}},Msqx:function(e,n,t){e.exports={code:'import { Menu, Grid } from \'dashkit-ui\';\nconst { Row, Col } = Grid;\nconst { Item, SubMenu, ItemGroup } = Menu;\n\nclass MenuDemo extends React.Component {\n  render() {\n    const { theme } = this.props;\n    return (\n      <Menu\n        defaultActiveKey="Dashboard"\n        defaultOpenKeys={[\'Layouts\', \'Menu\']}\n        theme={theme}\n        onSelect={this.onMenuSelect}\n        onOpen={this.onSubMenuOpen}\n      >\n        <Item icon="home" index="Dashboard">\n          Dashboard\n        </Item>\n        <Item icon="clipboard" index="Getting started">\n          Getting started\n        </Item>\n        <SubMenu icon="book-open" title="Components" index="Components">\n          <Item index="Alert">Alert</Item>\n          <Item index="button">Button</Item>\n          <Item index="input">Input</Item>\n          <Item index="Layout">Layout</Item>\n          <SubMenu title="Menu" index="Menu">\n            <Item index="MenuItem">MenuItem</Item>\n            <Item index="MenuSubmenu">MenuSubmenu</Item>\n          </SubMenu>\n        </SubMenu>\n        <Item icon="git-branch" index="Changelog" disabled>\n          Changelog\n        </Item>\n        <SubMenu icon="layout" index="Layouts" title="Layouts">\n          <Item index="Slidenav">Slidenav</Item>\n          <ItemGroup title="ItemGroup">\n            <Item index="ItemGroup1">ItemGroup1</Item>\n            <Item index="ItemGroup2">ItemGroup2</Item>\n          </ItemGroup>\n        </SubMenu>\n        <SubMenu icon="file" index="Empty submenu" title="Empty submenu" />\n      </Menu>\n    );\n  }\n\n  onMenuSelect = index => {\n    console.log(`item selected: ${index}`);\n  };\n\n  onSubMenuOpen = index => {\n    console.log(`submunu opened: ${index}`);\n  };\n}\n\nReactDOM.render(\n  <Row>\n    <Col xs={6} className="menu-vertical-item">\n      <MenuDemo theme="light" />\n    </Col>\n    <Col xs={6} className="menu-vertical-item">\n      <MenuDemo theme="dark" />\n    </Col>\n  </Row>,\n  mountNode,\n);\n',meta:{order:0,title:{"zh-CN":"侧边栏","en-US":"Sidebar"},subtitle:{"zh-CN":"<p>垂直排列的菜单。</p>\n","en-US":"<p>Vertical Menu.</p>\n"}},preview:function(){function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(n)}function n(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),e}function i(n,t){return!t||"object"!==e(t)&&"function"!=typeof t?d(n):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&c(e,n)}function c(e,n){return(c=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var m=t("GiK3"),s=(t("O27J"),t("qMEF")),h=s.Grid.Row,p=s.Grid.Col,b=s.Menu.Item,f=s.Menu.SubMenu,y=s.Menu.ItemGroup,M=function(e){function t(){var e,o;n(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return o=i(this,(e=u(t)).call.apply(e,[this].concat(a))),l(d(o),"onMenuSelect",function(e){console.log("item selected: ".concat(e))}),l(d(o),"onSubMenuOpen",function(e){console.log("submunu opened: ".concat(e))}),o}return a(t,e),r(t,[{key:"render",value:function(){var e=this.props.theme;return m.createElement(s.Menu,{defaultActiveKey:"Dashboard",defaultOpenKeys:["Layouts","Menu"],theme:e,onSelect:this.onMenuSelect,onOpen:this.onSubMenuOpen},m.createElement(b,{icon:"home",index:"Dashboard"},"Dashboard"),m.createElement(b,{icon:"clipboard",index:"Getting started"},"Getting started"),m.createElement(f,{icon:"book-open",title:"Components",index:"Components"},m.createElement(b,{index:"Alert"},"Alert"),m.createElement(b,{index:"button"},"Button"),m.createElement(b,{index:"input"},"Input"),m.createElement(b,{index:"Layout"},"Layout"),m.createElement(f,{title:"Menu",index:"Menu"},m.createElement(b,{index:"MenuItem"},"MenuItem"),m.createElement(b,{index:"MenuSubmenu"},"MenuSubmenu"))),m.createElement(b,{icon:"git-branch",index:"Changelog",disabled:!0},"Changelog"),m.createElement(f,{icon:"layout",index:"Layouts",title:"Layouts"},m.createElement(b,{index:"Slidenav"},"Slidenav"),m.createElement(y,{title:"ItemGroup"},m.createElement(b,{index:"ItemGroup1"},"ItemGroup1"),m.createElement(b,{index:"ItemGroup2"},"ItemGroup2"))),m.createElement(f,{icon:"file",index:"Empty submenu",title:"Empty submenu"}))}}]),t}(m.Component);return m.createElement(h,null,m.createElement(p,{xs:6,className:"menu-vertical-item"},m.createElement(M,{theme:"light"})),m.createElement(p,{xs:6,className:"menu-vertical-item"},m.createElement(M,{theme:"dark"})))}}},zTyw:function(e,n,t){e.exports={code:'import { Menu, Switch } from \'dashkit-ui\';\nconst { Item, SubMenu } = Menu;\n\nclass MenuDemo extends React.Component {\n  state = {\n    theme: \'light\',\n  };\n  render() {\n    const { theme } = this.state;\n    return (\n      <div className="menu-theme">\n        <Switch\n          className="menu-theme-switch"\n          checked={theme === \'dark\'}\n          onChange={this.handleSwitchChange}\n          checkedChildren="Dark"\n          unCheckedChildren="Light"\n        />\n\n        <Menu defaultActiveKey="Dashboard" defaultOpenKeys={[\'Layouts\', \'Menu\']} theme={theme}>\n          <Item icon="home" index="Dashboard">\n            Dashboard\n          </Item>\n          <Item icon="clipboard" index="Getting started">\n            Getting started\n          </Item>\n          <SubMenu icon="book-open" title="Components" index="Components">\n            <Item index="Alert">Alert</Item>\n            <Item index="button">Button</Item>\n            <Item index="input">Input</Item>\n            <Item index="Layout">Layout</Item>\n            <SubMenu title="Menu" index="Menu">\n              <Item index="MenuItem">MenuItem</Item>\n              <Item index="MenuSubmenu">MenuSubmenu</Item>\n            </SubMenu>\n          </SubMenu>\n          <Item icon="git-branch" index="Changelog" disabled>\n            Changelog\n          </Item>\n          <SubMenu icon="layout" index="Layouts" title="Layouts">\n            <Item index="Slidenav">Slidenav</Item>\n            <Item index="Topnav">Topnav</Item>\n          </SubMenu>\n          <SubMenu icon="file" index="Empty submenu" title="Empty submenu" />\n        </Menu>\n      </div>\n    );\n  }\n\n  handleSwitchChange = checked => {\n    this.setState({\n      theme: checked ? \'dark\' : \'light\',\n    });\n  };\n}\n\nReactDOM.render(<MenuDemo />, mountNode);\n',meta:{order:2,title:{"zh-CN":"主题","en-US":"Theme"},subtitle:{"zh-CN":"<p>主题。</p>\n","en-US":"<p>Provides <code>light</code> and <code>dark</code> themes.</p>\n"}},preview:function(){function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(n)}function n(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),e}function i(n,t){return!t||"object"!==e(t)&&"function"!=typeof t?d(n):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&c(e,n)}function c(e,n){return(c=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var m=t("GiK3"),s=(t("O27J"),t("qMEF")),h=s.Menu.Item,p=s.Menu.SubMenu,b=function(e){function t(){var e,o;n(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return o=i(this,(e=u(t)).call.apply(e,[this].concat(a))),l(d(o),"state",{theme:"light"}),l(d(o),"handleSwitchChange",function(e){o.setState({theme:e?"dark":"light"})}),o}return a(t,e),r(t,[{key:"render",value:function(){var e=this.state.theme;return m.createElement("div",{className:"menu-theme"},m.createElement(s.Switch,{className:"menu-theme-switch",checked:"dark"===e,onChange:this.handleSwitchChange,checkedChildren:"Dark",unCheckedChildren:"Light"}),m.createElement(s.Menu,{defaultActiveKey:"Dashboard",defaultOpenKeys:["Layouts","Menu"],theme:e},m.createElement(h,{icon:"home",index:"Dashboard"},"Dashboard"),m.createElement(h,{icon:"clipboard",index:"Getting started"},"Getting started"),m.createElement(p,{icon:"book-open",title:"Components",index:"Components"},m.createElement(h,{index:"Alert"},"Alert"),m.createElement(h,{index:"button"},"Button"),m.createElement(h,{index:"input"},"Input"),m.createElement(h,{index:"Layout"},"Layout"),m.createElement(p,{title:"Menu",index:"Menu"},m.createElement(h,{index:"MenuItem"},"MenuItem"),m.createElement(h,{index:"MenuSubmenu"},"MenuSubmenu"))),m.createElement(h,{icon:"git-branch",index:"Changelog",disabled:!0},"Changelog"),m.createElement(p,{icon:"layout",index:"Layouts",title:"Layouts"},m.createElement(h,{index:"Slidenav"},"Slidenav"),m.createElement(h,{index:"Topnav"},"Topnav")),m.createElement(p,{icon:"file",index:"Empty submenu",title:"Empty submenu"})))}}]),t}(m.Component);return m.createElement(b,null)}}}});
//# sourceMappingURL=16.0922da2.js.map