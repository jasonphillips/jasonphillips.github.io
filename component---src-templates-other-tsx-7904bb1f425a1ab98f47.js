(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/Rd+":function(e,t,n){"use strict";n("2Spj"),n("KKXr"),n("pIFo"),n("bWfx"),n("hHhE"),n("/SS/"),n("rE2o"),n("V+eJ"),n("WLL4"),n("jm62"),n("8+KV"),n("0l/t"),n("ioFf"),n("RW0V"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("EK0E"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n("q1tI"));function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=f(this,p(t).call(this,e))).state={humanInteraction:!1},n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(a=[{key:"createContactLink",value:function(e){var t,n;if(e.email)t="mailto:".concat(e.email),e.headers&&(t+="?".concat((n=e.headers,Object.keys(n).map((function(e){return"".concat(e,"=").concat(encodeURIComponent(n[e]))})).join("&"))));else if(e.tel)t="tel:".concat(e.tel);else if(e.sms)t="sms:".concat(e.sms);else if(e.facetime)t="facetime:".concat(e.facetime);else if(e.href)t=e.href;else{if("object"===l(e.children))return"";t=e.children}return t}},{key:"handleClick",value:function(e){var t=this.props.onClick;!1===this.state.humanInteraction&&(e.preventDefault(),t&&"function"==typeof t&&t(),window.location.href=this.createContactLink(this.props))}},{key:"handleCopiability",value:function(){this.setState({humanInteraction:!0})}},{key:"reverse",value:function(e){if(void 0!==e)return e.split("").reverse().join("").replace("(",")").replace(")","(")}},{key:"render",value:function(){var e=this.state.humanInteraction,t=this.props,n=t.element,a=void 0===n?"a":n,i=t.children,c=t.tel,s=t.sms,f=t.facetime,p=t.email,d=t.href,m=(t.headers,t.obfuscate),y=t.obfuscateChildren,h=t.linkText,b=t.style,v=u(t,["element","children","tel","sms","facetime","email","href","headers","obfuscate","obfuscateChildren","linkText","style"]),g=i||c||s||f||p||d,O=o({},b||{},{unicodeBidi:"bidi-override",direction:!0===e||!1===m||!1===y?"ltr":"rtl"}),j=!0===e||!1===m||"object"===l(i)||!1===y?g:this.reverse(g),w="a"===a?{href:!0===e||!1===m?this.createContactLink(this.props):h||"obfuscated",onClick:this.handleClick.bind(this)}:{},E=o({onFocus:this.handleCopiability.bind(this),onMouseOver:this.handleCopiability.bind(this),onContextMenu:this.handleCopiability.bind(this)},v,{},w,{style:O});return r.default.createElement(a,E,j)}}])&&s(n.prototype,a),i&&s(n,i),t}(r.Component);t.default=m},"9Dj+":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("q1tI"),a=n("Wbzz"),i=n("/Rd+"),o=n("BNza");n("8ypT");t.default=function(e){var t=e.children,n=e.front,c=a.useStaticQuery("856328897");return r.createElement(r.Fragment,null,!n&&r.createElement(o.default,{siteTitle:c.site.siteMetadata.title}),r.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},r.createElement("main",{className:"max-w-screen-md"},t),r.createElement("footer",{style:{marginTop:"1em",opacity:"0.6"}},r.createElement("hr",null),r.createElement(i.default,{style:{display:"inline-block"},email:"jason.surname.phillips@gmail.com"}))))}},BNza:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("q1tI"),a=n("Wbzz").Link;t.default=function(e){var t=e.siteTitle;return r.createElement("header",{style:{borderBottom:"1px solid #555",marginBottom:"1.45rem",textAlign:"right"}},r.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0.75rem 1.0875rem"}},r.createElement("h1",{style:{marginTop:0,marginBottom:"-1rem"}},r.createElement(a,{to:"/",style:{color:"#555",textDecoration:"none"}},t))))}},TC2q:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("9Dj+"),a=n("q1tI");t.pageQuery="4025674678",t.default=function(e){var t=e.data.markdownRemark;if(!t||!t.frontmatter)return a.createElement("div",null);var n=t.frontmatter,i=t.html;return a.createElement(r.default,null,a.createElement("div",{className:"project-container"},a.createElement("div",{className:"project"},a.createElement("h1",null,n.title),a.createElement("div",null,(n.tags||[]).map((function(e){return a.createElement("span",{key:e||""},e)}))),a.createElement("div",{className:"project-content",dangerouslySetInnerHTML:{__html:i||""}}))))}},WLL4:function(e,t,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperties:n("FJW5")})},Wbzz:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",(function(){return m})),n.d(t,"StaticQueryContext",(function(){return s})),n.d(t,"StaticQuery",(function(){return p})),n.d(t,"useStaticQuery",(function(){return d})),n.d(t,"prefetchPathname",(function(){return l}));var r=n("q1tI"),a=n.n(r),i=n("+ZDr"),o=n.n(i);n.d(t,"Link",(function(){return o.a})),n.d(t,"withAssetPrefix",(function(){return i.withAssetPrefix})),n.d(t,"withPrefix",(function(){return i.withPrefix})),n.d(t,"parsePath",(function(){return i.parsePath})),n.d(t,"navigate",(function(){return i.navigate})),n.d(t,"push",(function(){return i.push})),n.d(t,"replace",(function(){return i.replace})),n.d(t,"navigateTo",(function(){return i.navigateTo}));var c=n("lw3w"),u=n.n(c);n.d(t,"PageRenderer",(function(){return u.a}));var l=n("emEt").default.enqueue,s=a.a.createContext({});function f(e){var t=e.staticQueryData,n=e.data,r=e.query,i=e.render,o=n?n.data:t[r]&&t[r].data;return a.a.createElement(a.a.Fragment,null,o&&i(o),!o&&a.a.createElement("div",null,"Loading (StaticQuery)"))}var p=function(e){var t=e.data,n=e.query,r=e.render,i=e.children;return a.a.createElement(s.Consumer,null,(function(e){return a.a.createElement(f,{data:t,query:n,render:r||i,staticQueryData:e})}))},d=function(e){a.a.useContext;var t=a.a.useContext(s);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away. Unfortunately, something went wrong and the query was left in the compiled code.\n\nUnless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}},jm62:function(e,t,n){var r=n("XKFU"),a=n("mQtv"),i=n("aCFj"),o=n("EemH"),c=n("8a7r");r(r.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,n,r=i(e),u=o.f,l=a(r),s={},f=0;l.length>f;)void 0!==(n=u(r,t=l[f++]))&&c(s,t,n);return s}})},lw3w:function(e,t,n){var r;e.exports=(r=n("rzlk"))&&r.default||r},mQtv:function(e,t,n){var r=n("kJMx"),a=n("JiEa"),i=n("y3w9"),o=n("dyZX").Reflect;e.exports=o&&o.ownKeys||function(e){var t=r.f(i(e)),n=a.f;return n?t.concat(n(e)):t}},rzlk:function(e,t,n){"use strict";n.r(t);n("91GP");var r=n("q1tI"),a=n.n(r),i=n("IOVJ");t.default=function(e){var t=e.location,n=e.pageResources;return n?a.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json)):null}}}]);
//# sourceMappingURL=component---src-templates-other-tsx-7904bb1f425a1ab98f47.js.map