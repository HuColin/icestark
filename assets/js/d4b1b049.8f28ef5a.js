(self.webpackChunksite=self.webpackChunksite||[]).push([[502],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),f=a,E=m["".concat(u,".").concat(f)]||m[f]||s[f]||o;return n?r.createElement(E,i(i({ref:t},p),{},{components:n})):r.createElement(E,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4643:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i={title:"icestark 2.6.0",author:"\u90a3\u5412",author_url:"https://github.com/maoxiaoke",author_image_url:"https://avatars.githubusercontent.com/u/13417006?v=4",tags:["v2","announcement"],description:"Announcing icestark 2.6.0",hide_table_of_contents:!1},c={permalink:"/blog/02-icestark-2-6-0",source:"@site/blog/02-icestark-2-6-0.md",title:"icestark 2.6.0",description:"Announcing icestark 2.6.0",date:"2021-09-27T02:43:44.794Z",formattedDate:"September 27, 2021",tags:[{label:"v2",permalink:"/blog/tags/v-2"},{label:"announcement",permalink:"/blog/tags/announcement"}],readingTime:2.095,truncated:!0,prevItem:{title:"icestark 2.5.0",permalink:"/blog/01-icestark-2-5-0"}},u=[{value:"Announcing icestark 2.6.0",id:"announcing-icestark-260",children:[]}],l={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"announcing-icestark-260"},"Announcing icestark 2.6.0"),(0,o.kt)("p",null,"\u975e\u5e38\u9ad8\u5174\u5730\u544a\u8bc9\u5927\u5bb6\uff0c\u5728 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ice-lab/icestark/pull/369"},"2.6.0")," \u8fd9\u4e2a\u7248\u672c\u4e2d\uff0c\u6211\u4eec\u652f\u6301\u4e86 ES modules \u6a21\u5757\u7c7b\u578b\u7684\u5fae\u5e94\u7528\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u5982\u679c\u60a8\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://vitejs.dev/"},"Vite")," \u6216\u8005 ",(0,o.kt)("a",{parentName:"p",href:"https://ice.work/docs/guide/basic/Vite/"},"icejs Vite \u6a21\u5f0f")," \u5f00\u53d1\u7684\u5e94\u7528\uff0c\u53ef\u4ee5\u4f7f\u7528 icestark \u6765\u6784\u5efa\u60a8\u7684\u5fae\u524d\u7aef\u67b6\u6784\u3002"),(0,o.kt)("p",null,"\u672c\u6b21\u66f4\u65b0\u4e3b\u8981\u5305\u62ec\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#%E6%94%AF%E6%8C%81-ES-modules-%E7%B1%BB%E5%9E%8B%E5%BE%AE%E5%BA%94%E7%94%A8"},"\u652f\u6301 ES modules \u7c7b\u578b\u5fae\u5e94\u7528")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#%E6%94%AF%E6%8C%81-angular-%E5%BE%AE%E5%BA%94%E7%94%A8"},"\u5b8c\u5584 Angular \u5fae\u5e94\u7528\u652f\u6301")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#%E4%BF%AE%E5%A4%8D%E5%AF%B9-locationhash-%E8%B5%8B%E5%80%BC-onroutechange-%E8%A7%A6%E5%8F%91%E4%B8%A4%E6%AC%A1%E7%9A%84%E9%94%99%E8%AF%AF"},"\u4fee\u590d location.hash \u8d4b\u503c onRouteChange \u89e6\u53d1\u4e24\u6b21\u7684\u9519\u8bef")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#%E5%AF%B9%E9%A1%B9%E7%9B%AE%E9%85%8D%E7%BD%AE%E7%9A%84%E6%94%B9%E9%80%A0"},"\u5bf9\u9879\u76ee\u914d\u7f6e\u7684\u6539\u9020")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#ice.js-%E6%8F%92%E4%BB%B6%E6%94%AF%E6%8C%81-ES-modules-%E8%B5%84%E6%BA%90"},"ice.js \u63d2\u4ef6\u652f\u6301 ES modules \u8d44\u6e90"))))}p.isMDXComponent=!0}}]);