(this.webpackJsonpeditor=this.webpackJsonpeditor||[]).push([[0],{68:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(6),c=n(4),s=n(23),o=n(1),u=n(24),i=n.n(u),p=n(11),l=n.n(p),d=n(25),f=n.n(d).a.createInstance({name:"filecache"}),h=function(e){return{name:"fetch-plugin",setup:function(t){t.onLoad({filter:/(^index\.js$)/},(function(){return{loader:"jsx",contents:e}})),t.onLoad({filter:/.*/},function(){var e=Object(a.a)(Object(r.a)().mark((function e(t){var n;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getItem(t.path);case 2:if(!(n=e.sent)){e.next=5;break}return e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.onLoad({filter:/.css$/},function(){var e=Object(a.a)(Object(r.a)().mark((function e(t){var n,a,c,s,o,u;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get(t.path);case 2:return n=e.sent,a=n.data,c=n.request,s=a.replace(/\n/g,"").replace(/"/g,'\\"').replace(/'/g,"\\'"),o="\n          const style = document.createElement('style');\n          style.innerText = '".concat(s,"';\n          document.head.appendChild(style);\n        "),u={loader:"jsx",contents:o,resolveDir:new URL("./",c.responseURL).pathname},e.next=10,f.setItem(t.path,u);case 10:return e.abrupt("return",u);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.onLoad({filter:/.*/},function(){var e=Object(a.a)(Object(r.a)().mark((function e(t){var n,a,c,s;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get(t.path);case 2:return n=e.sent,a=n.data,c=n.request,s={loader:"jsx",contents:a,resolveDir:new URL("./",c.responseURL).pathname},e.next=8,f.setItem(t.path,s);case 8:return e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}},b=n(26),j="\n<html>\n  <head></head>\n  <body>\n    <div id=\"root\"></div>\n    <script>\n      window.addEventListener('message', (e) => {\n        try{\n          eval(e.data);\n        } catch (err) {\n          const root = document.querySelector('#root');\n          root.innerHTML = '<h2 style=\"color:orange\">Runtime Error!</h2><div>' + err + '</div>';\n        }\n      }, false);\n    <\/script>\n  </body>\n</html>\n",m=(n(66),n(5)),v=function(){var e=Object(o.useRef)(null),t=Object(o.useState)(),n=Object(c.a)(t,2),u=n[0],i=n[1],p=Object(o.useState)(""),l=Object(c.a)(p,2),d=l[0],f=l[1];Object(o.useEffect)((function(){v()}),[]);var v=function(){var e=Object(a.a)(Object(r.a)().mark((function e(){var t;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.startService({worker:!0,wasmURL:"https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm"});case 2:t=e.sent,i(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var t=Object(a.a)(Object(r.a)().mark((function t(){var n;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(u&&e.current&&e.current.contentWindow){t.next=2;break}return t.abrupt("return");case 2:return e.current.srcdoc=j,t.next=5,u.build({entryPoints:["index.js"],bundle:!0,write:!1,plugins:[{name:"unpkg-path-plugin",setup:function(e){e.onResolve({filter:/(^index\.js$)/},(function(){return{path:"index.js",namespace:"a"}})),e.onResolve({filter:/^\.+\//},(function(e){return{namespace:"a",path:new URL(e.path,"https://unpkg.com"+e.resolveDir+"/").href}})),e.onResolve({filter:/.*/},function(){var e=Object(a.a)(Object(r.a)().mark((function e(t){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{namespace:"a",path:"https://unpkg.com/".concat(t.path)});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},h(d)],define:{"process.env.NODE_ENV":'"production"'}});case 5:n=t.sent,e.current.contentWindow.postMessage(n.outputFiles[0].text,"*");case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"columns",children:[Object(m.jsxs)("div",{className:"column",children:[Object(m.jsx)("h1",{className:"title is-3",children:"Online Js editor"}),Object(m.jsx)(b.a,{theme:"vs-dark",height:"300px",defaultLanguage:"javascript",defaultValue:'/* Use "print()" to show items in the result widow */',options:{wordWrap:"on",minimap:{enabled:!1},lineNumbersMinChars:3,folding:!1,fontSize:16,automaticLayout:!0},onChange:function(e){e&&f(e)},onMount:function(e){var t;null===(t=e.getModel())||void 0===t||t.updateOptions({tabSize:2})}}),Object(m.jsx)("button",{className:"button is-primary",onClick:x,children:"Transpile!"})]}),Object(m.jsx)("div",{className:"column box",children:Object(m.jsx)("iframe",{width:"500px",ref:e,title:"code-result",sandbox:"allow-scripts",srcDoc:j})})]})};i.a.render(Object(m.jsx)(v,{}),document.querySelector("#root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.d318144b.chunk.js.map