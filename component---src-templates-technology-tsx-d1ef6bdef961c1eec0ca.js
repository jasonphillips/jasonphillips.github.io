(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/Rd+":function(e,t,n){"use strict";n("2Spj"),n("KKXr"),n("pIFo"),n("bWfx"),n("hHhE"),n("/SS/"),n("rE2o"),n("V+eJ"),n("WLL4"),n("jm62"),n("8+KV"),n("0l/t"),n("ioFf"),n("RW0V"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("EK0E"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI"));function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=f(this,p(t).call(this,e))).state={humanInteraction:!1},n}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(a=[{key:"createContactLink",value:function(e){var t,n;if(e.email)t="mailto:".concat(e.email),e.headers&&(t+="?".concat((n=e.headers,Object.keys(n).map((function(e){return"".concat(e,"=").concat(encodeURIComponent(n[e]))})).join("&"))));else if(e.tel)t="tel:".concat(e.tel);else if(e.sms)t="sms:".concat(e.sms);else if(e.facetime)t="facetime:".concat(e.facetime);else if(e.href)t=e.href;else{if("object"===l(e.children))return"";t=e.children}return t}},{key:"handleClick",value:function(e){var t=this.props.onClick;!1===this.state.humanInteraction&&(e.preventDefault(),t&&"function"==typeof t&&t(),window.location.href=this.createContactLink(this.props))}},{key:"handleCopiability",value:function(){this.setState({humanInteraction:!0})}},{key:"reverse",value:function(e){if(void 0!==e)return e.split("").reverse().join("").replace("(",")").replace(")","(")}},{key:"render",value:function(){var e=this.state.humanInteraction,t=this.props,n=t.element,a=void 0===n?"a":n,o=t.children,c=t.tel,s=t.sms,f=t.facetime,p=t.email,d=t.href,m=(t.headers,t.obfuscate),y=t.obfuscateChildren,h=t.linkText,b=t.style,v=u(t,["element","children","tel","sms","facetime","email","href","headers","obfuscate","obfuscateChildren","linkText","style"]),g=o||c||s||f||p||d,O=i({},b||{},{unicodeBidi:"bidi-override",direction:!0===e||!1===m||!1===y?"ltr":"rtl"}),j=!0===e||!1===m||"object"===l(o)||!1===y?g:this.reverse(g),w="a"===a?{href:!0===e||!1===m?this.createContactLink(this.props):h||"obfuscated",onClick:this.handleClick.bind(this)}:{},E=i({onFocus:this.handleCopiability.bind(this),onMouseOver:this.handleCopiability.bind(this),onContextMenu:this.handleCopiability.bind(this)},v,{},w,{style:O});return r.default.createElement(a,E,j)}}])&&s(n.prototype,a),o&&s(n,o),t}(r.Component);t.default=m},"9Dj+":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("q1tI"),a=n("/Rd+"),o=n("BNza");n("8ypT");t.default=function(e){var t=e.children,n=e.front;return r.createElement(r.Fragment,null,!n&&r.createElement(o.default,{siteTitle:"jason.phillips"}),r.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},r.createElement("main",{className:"max-w-screen-md"},t),r.createElement("footer",{style:{marginTop:"1em",opacity:"0.6"}},r.createElement("hr",null),r.createElement(a.default,{style:{display:"inline-block"},email:"jason.surname.phillips@gmail.com"}))))}},BNza:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("q1tI"),a=n("Wbzz").Link;t.default=function(e){var t=e.siteTitle;return r.createElement("header",{style:{borderBottom:"1px solid #555",marginBottom:"1.45rem",textAlign:"right"}},r.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0.75rem 1.0875rem"}},r.createElement("h1",{style:{marginTop:0,marginBottom:"-1rem"}},r.createElement(a,{to:"/",style:{color:"#555",textDecoration:"none"}},t))))}},WLL4:function(e,t,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperties:n("FJW5")})},Wbzz:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",(function(){return m})),n.d(t,"StaticQueryContext",(function(){return s})),n.d(t,"StaticQuery",(function(){return p})),n.d(t,"useStaticQuery",(function(){return d})),n.d(t,"prefetchPathname",(function(){return l}));var r=n("q1tI"),a=n.n(r),o=n("+ZDr"),i=n.n(o);n.d(t,"Link",(function(){return i.a})),n.d(t,"withAssetPrefix",(function(){return o.withAssetPrefix})),n.d(t,"withPrefix",(function(){return o.withPrefix})),n.d(t,"parsePath",(function(){return o.parsePath})),n.d(t,"navigate",(function(){return o.navigate})),n.d(t,"push",(function(){return o.push})),n.d(t,"replace",(function(){return o.replace})),n.d(t,"navigateTo",(function(){return o.navigateTo}));var c=n("lw3w"),u=n.n(c);n.d(t,"PageRenderer",(function(){return u.a}));var l=n("emEt").default.enqueue,s=a.a.createContext({});function f(e){var t=e.staticQueryData,n=e.data,r=e.query,o=e.render,i=n?n.data:t[r]&&t[r].data;return a.a.createElement(a.a.Fragment,null,i&&o(i),!i&&a.a.createElement("div",null,"Loading (StaticQuery)"))}var p=function(e){var t=e.data,n=e.query,r=e.render,o=e.children;return a.a.createElement(s.Consumer,null,(function(e){return a.a.createElement(f,{data:t,query:n,render:r||o,staticQueryData:e})}))},d=function(e){a.a.useContext;var t=a.a.useContext(s);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away. Unfortunately, something went wrong and the query was left in the compiled code.\n\nUnless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}},gPSe:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("Wbzz"),a=n("9Dj+"),o=n("q1tI");t.pageQuery="777133692",t.default=function(e){var t=e.data,n=t.markdownRemark,i=t.tags;if(!n||!n.frontmatter)return o.createElement("div",null);var c=n.frontmatter,u=n.html;return c.parent?(r.navigate("/technologies/"+c.parent),o.createElement("div",null)):o.createElement(a.default,null,o.createElement("div",{className:"project-container"},o.createElement("div",{className:"project"},o.createElement("h1",null,c.title),i.nodes.length>0&&o.createElement("div",{className:"tags-list"},"See also:"," ",(i.nodes||[]).map((function(e){return o.createElement("span",{key:e.fields.tag},o.createElement(r.Link,{to:e.fields.slug},e.frontmatter.title))}))),o.createElement("div",{className:"project-content",dangerouslySetInnerHTML:{__html:u||""}}))))}},jm62:function(e,t,n){var r=n("XKFU"),a=n("mQtv"),o=n("aCFj"),i=n("EemH"),c=n("8a7r");r(r.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,n,r=o(e),u=i.f,l=a(r),s={},f=0;l.length>f;)void 0!==(n=u(r,t=l[f++]))&&c(s,t,n);return s}})},lw3w:function(e,t,n){var r;e.exports=(r=n("rzlk"))&&r.default||r},mQtv:function(e,t,n){var r=n("kJMx"),a=n("JiEa"),o=n("y3w9"),i=n("dyZX").Reflect;e.exports=i&&i.ownKeys||function(e){var t=r.f(o(e)),n=a.f;return n?t.concat(n(e)):t}},rzlk:function(e,t,n){"use strict";n.r(t);n("91GP");var r=n("q1tI"),a=n.n(r),o=n("IOVJ");t.default=function(e){var t=e.location,n=e.pageResources;return n?a.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json)):null}}}]);
//# sourceMappingURL=component---src-templates-technology-tsx-d1ef6bdef961c1eec0ca.js.map