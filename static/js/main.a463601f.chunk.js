(this.webpackJsonpeditor=this.webpackJsonpeditor||[]).push([[0],{41:function(e,t,n){},83:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var r,a=n(3),i=n(5),c=n(7),o=n(1),s=n(10),u=n.n(s),d="\n<html>\n  <head></head>\n  <body>\n    <div id=\"root\"></div>\n    <script>\n      window.addEventListener('message', (e) => {\n        try{\n          eval(e.data);\n        } catch (err) {\n          const root = document.querySelector('#root');\n          root.innerHTML = '<h2 style=\"color:orange\">Runtime Error!</h2><div>' + err + '</div>';\n        }\n      }, false);\n    <\/script>\n  </body>\n</html>\n",p=(n(40),n(41),n(32)),l=n(15),h=n.n(l),f=n(33),m=n.n(f).a.createInstance({name:"filecache"}),b=function(e){return{name:"fetch-plugin",setup:function(t){t.onLoad({filter:/(^index\.js$)/},(function(){return{loader:"jsx",contents:e}})),t.onLoad({filter:/.*/},function(){var e=Object(i.a)(Object(a.a)().mark((function e(t){var n;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.getItem(t.path);case 2:if(!(n=e.sent)){e.next=5;break}return e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.onLoad({filter:/.css$/},function(){var e=Object(i.a)(Object(a.a)().mark((function e(t){var n,r,i,c,o,s;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get(t.path);case 2:return n=e.sent,r=n.data,i=n.request,c=r.replace(/\n/g,"").replace(/"/g,'\\"').replace(/'/g,"\\'"),o="\n          const style = document.createElement('style');\n          style.innerText = '".concat(c,"';\n          document.head.appendChild(style);\n        "),s={loader:"jsx",contents:o,resolveDir:new URL("./",i.responseURL).pathname},e.next=10,m.setItem(t.path,s);case 10:return e.abrupt("return",s);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.onLoad({filter:/.*/},function(){var e=Object(i.a)(Object(a.a)().mark((function e(t){var n,r,i,c;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get(t.path);case 2:return n=e.sent,r=n.data,i=n.request,c={loader:"jsx",contents:r,resolveDir:new URL("./",i.responseURL).pathname},e.next=8,m.setItem(t.path,c);case 8:return e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}},j=function(){var e=Object(i.a)(Object(a.a)().mark((function e(t){var n;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=4;break}return e.next=3,p.startService({worker:!0,wasmURL:"https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm"});case 3:r=e.sent;case 4:return e.next=6,r.build({entryPoints:["index.js"],bundle:!0,write:!1,target:"es2015",plugins:[{name:"unpkg-path-plugin",setup:function(e){e.onResolve({filter:/(^index\.js$)/},(function(){return{path:"index.js",namespace:"a"}})),e.onResolve({filter:/^\.+\//},(function(e){return{namespace:"a",path:new URL(e.path,"https://unpkg.com"+e.resolveDir+"/").href}})),e.onResolve({filter:/.*/},function(){var e=Object(i.a)(Object(a.a)().mark((function e(t){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{namespace:"a",path:"https://unpkg.com/".concat(t.path)});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},b(t)],define:{"process.env.NODE_ENV":'"production"'}});case 6:return n=e.sent,e.abrupt("return",n.outputFiles[0].text);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=j,v=function(){var e=Object(i.a)(Object(a.a)().mark((function e(t){var n;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n='const print = (string) => {\n    const output = JSON.stringify(string);\n    if (output == undefined || !output) {\n      throw new Error("Invalid use of print");\n    }\n    const para = document.createElement("p");\n    const node = document.createTextNode(output);\n    para.appendChild(node);\n    const element = document.getElementById("root");\n    element.appendChild(para);\n  }\n  ',e.t0=n,e.next=4,w(t);case 4:return n=e.t0+=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=v,O=n(6),g=n(34),y=(n(83),n(2)),k=function(e){var t,n=e.direction,r=e.children;return t="s"===n?{maxConstraints:[1/0,.7*window.innerHeight],height:.5*window.innerHeight,width:1/0,resizeHandles:[n],minConstraints:[1/0,.2*window.innerHeight]}:{maxConstraints:[.8*window.innerWidth,1/0],width:.5*window.innerWidth,height:.5*window.innerHeight,resizeHandles:[n],minConstraints:[.3*window.innerWidth,1/0]},Object(y.jsx)(g.ResizableBox,Object(O.a)(Object(O.a)({},t),{},{children:r}))},N=n(35),L=function(e){var t=e.onChange,n=e.onMount;return Object(y.jsx)(N.a,{theme:"vs-dark",height:"100%",width:"100%",defaultLanguage:"javascript",defaultValue:"// Use print() to show any content in preview window!",options:{wordWrap:"on",minimap:{enabled:!1},lineNumbersMinChars:3,folding:!1,fontSize:16,automaticLayout:!0},onChange:t,onMount:n})},C=function(){var e=Object(o.useRef)(null),t=Object(o.useState)(""),n=Object(c.a)(t,2),r=n[0],s=n[1],u=function(){var t=Object(i.a)(Object(a.a)().mark((function t(){var n;return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.current&&e.current.contentWindow){t.next=2;break}return t.abrupt("return");case 2:return e.current.srcdoc=d,t.next=5,x(r);case 5:n=t.sent,e.current.contentWindow.postMessage(n,"*");case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(y.jsxs)("div",{className:"main-container",children:[Object(y.jsxs)("div",{className:"main-header",children:[Object(y.jsx)("h1",{className:"title is-2 main-title",children:"Online JS Editor"}),Object(y.jsx)("div",{className:"intro-header",children:"Welcome to a simple online code editor! You can test all sorts of code in this isolated environment and test how individual components of your code may function! This is totally useful! Totally not a pet project!!"}),Object(y.jsx)("div",{className:"intro-header",children:"You can use the 'print()' function to display items in the preview window"})]}),Object(y.jsx)(k,{direction:"s",children:Object(y.jsxs)("div",{className:"main-content-area",children:[Object(y.jsx)("div",{className:"editor-area",children:Object(y.jsx)(L,{onChange:function(e){e&&s(e)},onMount:function(e){var t;null===(t=e.getModel())||void 0===t||t.updateOptions({tabSize:2}),u()}})}),Object(y.jsx)("div",{className:"iframe-zone",children:Object(y.jsx)("iframe",{style:{backgroundColor:"white"},height:"100%",width:"100%",ref:e,title:"code-result",sandbox:"allow-scripts",srcDoc:d})})]})}),Object(y.jsx)("div",{className:"compile-button",children:Object(y.jsx)("button",{className:"button is-primary",onClick:u,children:"Run!"})})]})};u.a.render(Object(y.jsx)(C,{}),document.querySelector("#root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.a463601f.chunk.js.map