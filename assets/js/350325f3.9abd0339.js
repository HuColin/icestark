"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4603],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,h=m["".concat(i,".").concat(d)]||m[d]||u[d]||c;return n?a.createElement(h,o(o({ref:t},l),{},{components:n})):a.createElement(h,o({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<c;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6637:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return i},default:function(){return l}});var a=n(7462),r=n(3366),c=(n(7294),n(3905)),o={},p={unversionedId:"guide/advanced/performance",id:"guide/advanced/performance",isDocsHomePage:!1,title:"\u6027\u80fd\u4f18\u5316",description:"prefetch",source:"@site/docs/guide/advanced/performance.md",sourceDirName:"guide/advanced",slug:"/guide/advanced/performance",permalink:"/docs/guide/advanced/performance",editUrl:"https://github.com/ice-lab/icestark/tree/gh-pages/docs/guide/advanced/performance.md",version:"current",frontMatter:{},sidebar:"guide",previous:{title:"\u5e94\u7528\u95f4\u901a\u4fe1",permalink:"/docs/guide/advanced/communication"},next:{title:"\u5fae\u6a21\u5757",permalink:"/docs/guide/micro-module"}},i=[{value:"prefetch",id:"prefetch",children:[]},{value:"cached",id:"cached",children:[]},{value:"\u9875\u9762\u61d2\u52a0\u8f7d",id:"\u9875\u9762\u61d2\u52a0\u8f7d",children:[]},{value:"\u4f9d\u8d56\u5916\u7f6e",id:"\u4f9d\u8d56\u5916\u7f6e",children:[]},{value:"LoadingComponent",id:"loadingcomponent",children:[]}],s={toc:i};function l(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,c.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"prefetch"},"prefetch"),(0,c.kt)("p",null,"\u901a\u8fc7\u9884\u52a0\u8f7d\u5b50\u5e94\u7528\u8d44\u6e90\uff0c\u53ef\u4ee5\u63d0\u5347 ",(0,c.kt)("strong",{parentName:"p"},"\u975e\u9996\u5c4f\u9996\u6b21\u52a0\u8f7d\u5b50\u5e94\u7528")," \u7684\u6e32\u67d3\u901f\u5ea6\u3002\u7b80\u5355\u7528\u6cd5\u5982\u4e0b\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},"import { registerMicroApps, start } from '@ice/stark';\n\nregisterMicroApps([\n  {\n    name: 'waiter',\n    activePath: '/waiter',\n    title: '\u5546\u5bb6\u5e73\u53f0',\n    sandbox: true,\n    url: [\n      'https://iceworks.oss-cn-hangzhou.aliyuncs.com/icestark/child-seller-react/build/js/index.js',\n      'https://iceworks.oss-cn-hangzhou.aliyuncs.com/icestark/child-seller-react/build/css/index.css',\n    ],\n  },\n  {\n    name: 'seller',\n    activePath: '/seller',\n    title: '\u5c0f\u4e8c\u5e73\u53f0',\n    sandbox: true,\n    url: [\n      'https://iceworks.oss-cn-hangzhou.aliyuncs.com/icestark/child-waiter-vue/dist/js/app.js',\n      'https://iceworks.oss-cn-hangzhou.aliyuncs.com/icestark/child-waiter-vue/dist/css/app.css',\n    ],\n  }\n], {\n    afterMount: () => { console.log('mounted') },\n});\n\nstart({\n    prefetch: true,\n})\n")),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"prefetch")," \u503c\u652f\u6301\u4e09\u79cd\u5f62\u5f0f\uff1a"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("strong",{parentName:"li"},"\u5e03\u5c14\u503c"),"\uff1a\u5f53 ",(0,c.kt)("inlineCode",{parentName:"li"},"prefetch")," \u4e3a ",(0,c.kt)("inlineCode",{parentName:"li"},"true")," \u65f6\uff0c\u6240\u4ee5\u5fae\u5e94\u7528\u8d44\u6e90\u5747\u4f1a\u88ab ",(0,c.kt)("inlineCode",{parentName:"li"},"prefetch"),";"),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("strong",{parentName:"li"},"\u6570\u7ec4"),"\uff1a\u5f53\u4f20\u5165\u503c\u4e3a ",(0,c.kt)("inlineCode",{parentName:"li"},"name")," \u7684\u6570\u7ec4\u65f6\uff0c\u53ea\u8981\u6570\u7ec4\u4e2d\u7684\u5fae\u5e94\u7528\u8d44\u6e90\u4f1a\u88ab ",(0,c.kt)("inlineCode",{parentName:"li"},"prefetch"),";")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},"start({\n    prefetch: ['waiter'], // \u53ea\u6709 `name` \u4e3a waiter \u7684\u5fae\u5e94\u7528\u4f1a\u88ab prefetch\n})\n")),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("strong",{parentName:"li"},"\u51fd\u6570"),"\uff1a\u5f53\u4f20\u5165\u4e3a\u51fd\u6570\u65f6\uff0c",(0,c.kt)("inlineCode",{parentName:"li"},"prefetch")," \u52a0\u8f7d\u7684\u80fd\u529b\u9700\u8981\u81ea\u5df1\u5904\u7406\u3002")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},"start({\n    prefetch: (app) => app.name === 'waiter',\n})\n")),(0,c.kt)("p",null,"\u5f53\u60a8\u4f7f\u7528\u7684 ",(0,c.kt)("inlineCode",{parentName:"p"},"AppRouter")," \u63a5\u5165 icestark \u65f6\uff0c\u4e5f\u662f\u76f8\u540c\u7684\u4f7f\u7528\u65b9\u5f0f\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},"// src/App.jsx\nimport React from 'react';\nimport { AppRouter, AppRoute } from '@ice/stark';\nimport BasicLayout from '@/layouts/BasicLayout';\n\nconst App = () => {\n  return (\n    <BasicLayout>\n      <AppRouter\n        prefetch\n        // or prefetch={['waiter']}\n        // or prefetch={(app) => app.name === 'waiter'}\n        >\n        <AppRoute\n          name=\"waiter\"\n          activePath=\"/waiter\"\n          title=\"\u5546\u5bb6\u5e73\u53f0\"\n          url={[\n            'https://iceworks.oss-cn-hangzhou.aliyuncs.com/icestark/child-waiter-vue/dist/js/app.js',\n            'https://iceworks.oss-cn-hangzhou.aliyuncs.com/icestark/child-waiter-vue/dist/css/app.css',\n          ]}\n        />\n        ...\n      </AppRouter>\n    </BasicLayout>\n  );\n}\n")),(0,c.kt)("p",null,"\u8fd8\u53ef\u4ee5\u901a\u8fc7 ",(0,c.kt)("inlineCode",{parentName:"p"},"prefetchApps")," \u624b\u52a8\u63a7\u5236\u9700\u8981\u88ab ",(0,c.kt)("inlineCode",{parentName:"p"},"prefetch")," \u7684\u5e94\u7528\u3002"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},"// \u5728\u67d0\u4e2a\u6bd4\u8f83\u524d\u7684\u65f6\u673a\nprefetchApps([{\n    name: 'waiter',\n  url: [\n    'https://iceworks.oss-cn-hangzhou.aliyuncs.com/icestark/child-waiter-vue/dist/js/app.js',\n    'https://iceworks.oss-cn-hangzhou.aliyuncs.com/icestark/child-waiter-vue/dist/css/app.css',\n  ]\n}]);\n")),(0,c.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,c.kt)("div",{parentName:"div",className:"admonition-heading"},(0,c.kt)("h5",{parentName:"div"},(0,c.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,c.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,c.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,c.kt)("div",{parentName:"div",className:"admonition-content"},(0,c.kt)("p",{parentName:"div"},"\u6709\u5173 ",(0,c.kt)("code",null,"prefetch")," \u7684\u66f4\u591a\u8ba8\u8bba\u6216\u53cd\u9988\uff0c\u8bf7\u79fb\u6b65 ",(0,c.kt)("a",{href:"https://github.com/ice-lab/icestark/issues/188"},"RFC-prefetch")))),(0,c.kt)("h2",{id:"cached"},"cached"),(0,c.kt)("p",null,"icestark \u63d0\u4f9b\u5fae\u5e94\u7528\u5207\u6362\u65f6\u7f13\u5b58\u7684\u80fd\u529b\u3002\u5728\u5f00\u542f\u8be5\u5b57\u6bb5\u540e\uff0cicestark \u4e0d\u4f1a\u6e05\u7406\u4e0a\u4e2a\u5fae\u5e94\u7528\u7684\u9759\u6001\u8d44\u6e90\uff0c\u4e0d\u518d\u91cd\u590d\u6267\u884c\u811a\u672c\u8d44\u6e90\uff0c\u4ee5\u52a0\u5feb\u5fae\u5e94\u7528\u4e8c\u6b21\u52a0\u8f7d\u7684\u6267\u884c\u901f\u5ea6\u3002\u82e5\u9700\u8981\u5f00\u542f\u8be5\u80fd\u529b\uff0c\u9700\u914d\u7f6e\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},"// src/App.jsx\nimport { AppRouter, AppRoute } from '@ice/stark';\n\nconst App = () => {\n  return (\n    <AppRouter>\n      <AppRoute\n        name=\"waiter\"\n        activePath=\"/waiter\"\n        title=\"\u5546\u5bb6\u5e73\u53f0\",\n        cached\n        url={[\n          'https://iceworks.oss-cn-hangzhou.aliyuncs.com/icestark/child-waiter-vue/dist/js/app.js',\n          'https://iceworks.oss-cn-hangzhou.aliyuncs.com/icestark/child-waiter-vue/dist/css/app.css',\n        ]}\n      />\n      ...\n    </AppRouter>\n  );\n}\n")),(0,c.kt)("p",null,"\u5f53\u9700\u8981\u4f7f\u7528 ",(0,c.kt)("inlineCode",{parentName:"p"},"cached")," \u80fd\u529b\u65f6\uff0c\u4fdd\u8bc1\u5df2\u4e86\u89e3\u8be5\u80fd\u529b\u5e26\u6765\u7684\u526f\u4f5c\u7528\uff1a"),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},"\u7531\u4e8e\u5fae\u5e94\u7528\u5728\u5207\u6362\u65f6\u4e0d\u4f1a\u5378\u8f7d\u6837\u5f0f\u8d44\u6e90\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6837\u5f0f\u6c61\u67d3")),(0,c.kt)("p",null,"\u4e00\u822c\u6765\u8bf4\uff0c\u5fae\u5e94\u7528\u4e4b\u95f4\u7684\u6837\u5f0f\u901a\u8fc7 ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/css-modules/css-modules"},"CSS Modules")," \u4e0d\u4f1a\u9020\u6210\u6837\u5f0f\u7684\u5927\u91cf\u6c61\u67d3\uff0c\u9700\u8981\u8b66\u60d5\u7684\u662f\u4e09\u65b9\u7ec4\u4ef6\u5e93\uff08\u6bd4\u5982 AntD\u3001Fusion\uff09\u4ea7\u751f\u7684\u6c61\u67d3\uff0c\u5c24\u5176\u5f53\u67d0\u4e00\u5fae\u5e94\u7528\u5168\u5c40\u4fee\u6539\u4e86\u7ec4\u4ef6\u5e93\u7684\u6837\u5f0f\u3002"),(0,c.kt)("ol",{start:2},(0,c.kt)("li",{parentName:"ol"},"\u5728\u5f00\u542f\u6c99\u7bb1\u80fd\u529b\u65f6\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5185\u5b58\u6cc4\u9732\u95ee\u9898")),(0,c.kt)("h2",{id:"\u9875\u9762\u61d2\u52a0\u8f7d"},"\u9875\u9762\u61d2\u52a0\u8f7d"),(0,c.kt)("p",null,"\u73b0\u4ee3\u6846\u67b6\u5927\u591a\u652f\u6301 webpack ",(0,c.kt)("a",{parentName:"p",href:"https://webpack.js.org/guides/code-splitting/#dynamic-imports"},"Dynamic Imports"),"\uff0c\u7b80\u5355\u6765\u8bf4\uff0c\u5c31\u662f\u53ea\u6709\u8bbf\u95ee\u67d0\u9875\u9762\u65f6\uff0c\u9875\u9762\u7684\u811a\u672c\u548c\u6837\u5f0f\u8d44\u6e90\u624d\u4f1a\u52a0\u8f7d\u3002\u6bd4\u5982\u5728 React \u4e2d\u7684\u7528\u6cd5\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { Switch, Route } from 'react-router-dom';\n\nfunction App () {\n  return (\n    <Switch>\n      <Route path=\"/a\" component={React.lazy(() => import('./A'))} ></Route>\n      <Route path=\"/b\" component={React.lazy(() => import('./B'))} ></Route>\n      ...\n    </Switch>\n  >\n}\n")),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"\u66f4\u591a\u4ecb\u7ecd\u53ef\u53c2\u8003 ",(0,c.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/code-splitting.html#reactlazy"},"React.lazy"))),(0,c.kt)("p",null,"\u5728 Vue \u4e2d\u7684\u7528\u6cd5\u53ef\u53c2\u8003 ",(0,c.kt)("a",{parentName:"p",href:"https://router.vuejs.org/guide/advanced/lazy-loading.html#grouping-components-in-the-same-chunk"},"Lazy Loading Routes"),"\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},"const router = new Router({\n  routes: [\n    {\n      path: '/seller',\n      name: 'seller',\n      component: () => () => import(/* webpackChunkName: \"group-foo\" */ './Seller.vue')\n    }\n  ]\n})\n")),(0,c.kt)("p",null,"Dynamic Imports \u53ef\u4ee5\u5927\u5e45\u51cf\u5c11\u4e3b bunlde \u7684\u4ee3\u7801\u4f53\u79ef\uff0c\u4ece\u800c\u63d0\u5347\u5fae\u5e94\u7528\u52a0\u8f7d\u901f\u5ea6\u3002\u53e6\u5916\uff0c\u5728 icestark \u5fae\u5e94\u7528\u4e2d\u5f15\u5165 Dynamic Imports \u9700\u8981\u6ce8\u610f\u4ee5\u4e0b\u4e24\u70b9\uff1a"),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u5fae\u5e94\u7528\u7684 ",(0,c.kt)("a",{parentName:"li",href:"https://webpack.js.org/configuration/output/#outputpublicpath"},"publicPath"))),(0,c.kt)("p",null,"\u4e3a\u4e86\u907f\u514d webpack \u5728\u5fae\u5e94\u7528\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u8bbf\u95ee\u9519\u8bef\u7684\u9759\u6001\u5730\u5740\uff0c\u56e0\u6b64\u6700\u597d\u8bbe\u7f6e\u9759\u6001\u8d44\u6e90\u7684\u7edd\u5bf9\u8bbf\u95ee\u8def\u5f84\u3002\u6bd4\u5982\uff0c\u9759\u6001\u8d44\u6e90\u6253\u5305\u53d1\u9001\u5230 CDN \u670d\u52a1\u4e0a\uff0c\u5219\u914d\u7f6e\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},"// webpack.config.js\nmodule.exports = {\n  ...\n  output: {\n    publicPath: 'https://www.cdn.example/'\n  }\n}\n")),(0,c.kt)("p",null,"\u82e5\u9759\u6001\u8d44\u6e90\u5b58\u653e\u5728\u670d\u52a1\u5668\uff0c\u5219\u914d\u7f6e\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},"// webpack.config.js\nmodule.exports = {\n  ...\n  output: {\n    publicPath: 'https://www.seller.com/'\n  }\n}\n")),(0,c.kt)("ol",{start:2},(0,c.kt)("li",{parentName:"ol"},"\u5982\u679c\u4e3b\u5e94\u7528\u540c\u6837\u914d\u7f6e\u4e86 Dynamic Imports\uff0c\u914d\u7f6e ",(0,c.kt)("a",{parentName:"li",href:"/docs/api/ice-stark#shouldassetsremove"},"shouldAssetsRemove"))),(0,c.kt)("p",null,"icestark \u5185\u90e8\u4f1a\u5728\u5fae\u5e94\u7528\u5378\u8f7d\u65f6\uff0c\u540c\u65f6\u5378\u8f7d\u5fae\u5e94\u7528\u7684\u6837\u5f0f\u8d44\u6e90\uff0c\u9632\u6b62\u6837\u5f0f\u6c61\u67d3\u3002\u56e0\u6b64\uff0c\u5982\u82e5\u4e3b\u5e94\u7528\u914d\u7f6e\u4e86 Dynamic Imports\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,c.kt)("a",{parentName:"p",href:"/docs/api/ice-stark#shouldassetsremove"},"shouldAssetsRemove")," \u9632\u6b62\u9519\u8bef\u5730\u79fb\u9664\u4e3b\u5e94\u7528\u7684\u6837\u5f0f\u8d44\u6e90\u3002"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},"// src/App.jsx\nimport { AppRouter, AppRoute } from '@ice/stark';\n\nconst App = () => {\n  return (\n    <AppRouter\n      shouldAssetsRemove={(url, element) => {\n        // \u5982\u679c\u8bf7\u6c42\u4e3b\u5e94\u7528\u9759\u6001\u8d44\u6e90\uff0c\u8fd4\u56de false\n        if (url.includes('www.framework.com')) {\n          return false;\n        }\n        return true;\n      }}\n      >\n      ...\n    </AppRouter>\n  );\n}\n")),(0,c.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,c.kt)("div",{parentName:"div",className:"admonition-heading"},(0,c.kt)("h5",{parentName:"div"},(0,c.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,c.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,c.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,c.kt)("div",{parentName:"div",className:"admonition-content"},(0,c.kt)("p",{parentName:"div"},"\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\u4f7f\u7528 ",(0,c.kt)("inlineCode",{parentName:"p"},"shouldAssetsRemove")," \u53ea\u9488\u5bf9\u4e3b\u5e94\u7528\u7684\u8d44\u6e90\u8fdb\u884c\u76f8\u5173\u7684\u914d\u7f6e\uff08\u5fae\u5e94\u7528\u7684\u9759\u6001\u8d44\u6e90\u53ef\u4ea4\u7531 icestark \u8fdb\u884c\u52a0\u8f7d\u4e0e\u5378\u8f7d\uff09\u3002"))),(0,c.kt)("h2",{id:"\u4f9d\u8d56\u5916\u7f6e"},"\u4f9d\u8d56\u5916\u7f6e"),(0,c.kt)("p",null,"\u901a\u5e38\u4e3b\u5e94\u7528\u548c\u5fae\u5e94\u7528\u4f1a\u5171\u6709\u4e00\u4e9b\u57fa\u7840\u4f9d\u8d56\uff0c\u6bd4\u5982 ",(0,c.kt)("inlineCode",{parentName:"p"},"React"),"\u3001",(0,c.kt)("inlineCode",{parentName:"p"},"ReactDOM"),"\u3001\u7ec4\u4ef6\u5e93\u7b49\u3002\u53ef\u4ee5\u9002\u5f53\u8003\u8651\u5fae\u5e94\u7528\u5916\u7f6e\u6389\u8fd9\u4e9b\u57fa\u7840\u4f9d\u8d56\uff0c\u7531\u4e3b\u5e94\u7528\u7edf\u4e00\u52a0\u8f7d\u3002\u6bd4\u5982\uff0c\u901a\u8fc7 ",(0,c.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/externals"},"webpack Externals")," \u5916\u7f6e\u5fae\u5e94\u7528\u7684\u57fa\u7840\u4f9d\u8d56\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},"// webpack.config.js\nmmodule.exports = {\n  // ...\n  externals: {\n    'react': 'React',\n    'react-dom': 'ReactDOM',\n    'antd': 'antd'\n  },\n};\n")),(0,c.kt)("p",null,"\u5e76\u5728\u4e3b\u5e94\u7528\u7684 ",(0,c.kt)("inlineCode",{parentName:"p"},"index.html")," \u4e2d\u52a0\u8f7d\u57fa\u7840\u4f9d\u8d56\u7684 cdn \u7248\u672c\u3002"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8" />\n    <meta http-equiv="x-ua-compatible" content="ie=edge,chrome=1" />\n    <meta name="viewport" content="width=device-width" />\n    <title>icestark Framework App</title>\n  </head>\n\n  <body>\n    <div id="root"></div>\n    \x3c!-- \u5728\u4e3b\u5e94\u7528\u4e2d\u52a0\u8f7d\u57fa\u7840\u4f9d\u8d56 --\x3e\n    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/17.0.0/cjs/react.production.min.js"><\/script>\n    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.0/cjs/react-dom.production.min.js"><\/script>\n    <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/4.17.0-alpha.8/antd.min.js"><\/script>\n\n    \x3c!-- \u52a0\u8f7d\u4e3b\u5e94\u7528\u7684\u811a\u672c\u8d44\u6e90 --\x3e\n    <script src="//ice.alicdn.com/icestark/layout-app/build/js/index.js"><\/script>\n  </body>\n</html>\n')),(0,c.kt)("h2",{id:"loadingcomponent"},"LoadingComponent"),(0,c.kt)("p",null,"\u5fae\u5e94\u7528\u4e4b\u95f4\u5207\u6362\u9020\u6210\u7684\u7a7a\u767d\u753b\u9762\u8ba9\u4eba\u96be\u4ee5\u63a5\u53d7\uff0c\u4e3a\u4e86\u964d\u4f4e\u9875\u9762\u7a7a\u767d\u9020\u6210\u7684\u89c6\u89c9\u51b2\u51fb\uff0c\u53ef\u4ee5\u5728\u5fae\u5e94\u7528\u7684\u5207\u6362\u65f6\u6dfb\u52a0\u4e00\u4e2a \u201c\u8fc7\u6e21\u201d \u52a8\u753b\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},"import Loading from './Loading';\n\nconst App = () => {\n  return (\n    <AppRouter\n      LoadingComponent={Loading}\n      >\n      ...\n    </AppRouter>\n  );\n}\n")))}l.isMDXComponent=!0}}]);