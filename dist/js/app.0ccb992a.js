(function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],f=0,p=[];f<u.length;f++)a=u[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(p.length)p.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return i.p+"js/"+({authentication:"authentication","user-info":"user-info"}[e]||e)+"."+{authentication:"41142442","chunk-0e64e6d4":"a9eacae5","user-info":"56e0c89b"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={authentication:1,"chunk-0e64e6d4":1,"user-info":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({authentication:"authentication","user-info":"user-info"}[e]||e)+"."+{authentication:"fc2ec773","chunk-0e64e6d4":"c9d70a32","user-info":"318629a5"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===o))return t()}var p=document.getElementsByTagName("style");for(u=0;u<p.length;u++){s=p[u],f=s.getAttribute("data-href");if(f===r||f===o)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],l.parentNode.removeChild(l),n(c)},l.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(l)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=u(e);var p=new Error;s=function(t){f.onerror=f.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}o[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/Vue-Authentication/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var l=f;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],c=(n("5c0b"),n("2877")),u={},i=Object(c["a"])(u,a,o,!1,null,null,null),s=i.exports,f=(n("d3b7"),n("96cf"),n("1da1")),p=(n("99af"),n("e7e5"),n("d399")),l=n("8468"),h=n("5530"),m=n("2f62"),d=n("bc3a"),g=n.n(d),b="https://k88d02.ml",v=g.a.create({baseURL:"".concat(b,"/api"),headers:{"Content-Type":"application/json",Accept:"application/json"}});v.interceptors.request.use((function(e){var t=localStorage.getItem("remember_token");return t&&(e.headers.Authorization="".concat(t)),e}),(function(e){return Promise.reject(e)})),v.interceptors.response.use((function(e){return e}),(function(e){return 401!==e.response.status&&402!==e.response.status||y.push("/login"),Promise.reject(e)})),r["a"].use(m["a"]);var w=new m["a"].Store({state:{token:"",userInfo:{}},mutations:{setUserInfo:function(e,t){if(t.image_path){var n="".concat(b).concat(t.image_path);e.userInfo=Object(h["a"])(Object(h["a"])({},t),{},{image_path:n})}else e.userInfo=t},uploadFile:function(e,t){e.userInfo.image_path="".concat(b).concat(t)},setToken:function(e,t){e.token=t}},actions:{register:function(e,t){return Object(f["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return Object(l["a"])(e),n.prev=1,n.next=4,v.post("/register",t);case 4:p["a"].success("註冊成功"),y.push("/login"),n.next=11;break;case 8:n.prev=8,n.t0=n["catch"](1),p["a"].fail("註冊失敗，格式有誤或該帳號已經存在");case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))()},login:function(e,t){return Object(f["a"])(regeneratorRuntime.mark((function n(){var r,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.prev=1,n.next=4,v.post("/login",t);case 4:a=n.sent,o=a.data.data["remember_token"],p["a"].success("登入成功"),localStorage.setItem("remember_token",o),r("setToken",o),y.push("/userinfo"),n.next=15;break;case 12:n.prev=12,n.t0=n["catch"](1),p["a"].fail("帳號密碼錯誤");case 15:case"end":return n.stop()}}),n,null,[[1,12]])})))()},logout:function(e,t){return Object(f["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return Object(l["a"])(e),n.prev=1,n.next=4,v.post("/logout",t);case 4:localStorage.setItem("remember_token",""),p["a"].success("已登出"),y.push("/login"),n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](1),p["a"].fail("發生錯誤");case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))()},fetchUserInfo:function(e,t){return Object(f["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,v.post("/info",t);case 3:a=n.sent,r("setUserInfo",a.data.data);case 5:case"end":return n.stop()}}),n)})))()},uploadFile:function(e,t){return Object(f["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.prev=1,n.next=4,v.post("/uploadImageAPI",t,{headers:{"Content-Type":"image/png",Accept:"application/json"}});case 4:a=n.sent,r("uploadFile",a.data.data.url),n.next=11;break;case 8:n.prev=8,n.t0=n["catch"](1),p["a"].fail("發生錯誤");case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))()},resetPassword:function(e,t){return Object(f["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return Object(l["a"])(e),n.prev=1,n.next=4,v.post("/reset",t);case 4:localStorage.setItem("remember_token",""),p["a"].success("新密碼設定成功，請重新登入"),y.push("/login"),n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](1),p["a"].fail("發生錯誤");case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))()},forgetPassword:function(e,t){return Object(f["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return Object(l["a"])(e),n.prev=1,n.next=4,v.post("/forget",t);case 4:p["a"].success("新密碼設定成功，請重新登入"),y.push("/login"),n.next=11;break;case 8:n.prev=8,n.t0=n["catch"](1),p["a"].fail("發生錯誤");case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))()},setToken:function(e){var t=e.commit,n=localStorage.getItem("remember_token");t("setToken",n)}},getters:{userInfo:function(e){return e.userInfo},token:function(e){return e.token}},modules:{}}),k=n("8c4f");r["a"].use(k["a"]);var x=[{path:"/",name:"Register",component:function(){return n.e("authentication").then(n.bind(null,"73cf"))}},{path:"/login",name:"Login",component:function(){return n.e("authentication").then(n.bind(null,"a55b"))}},{path:"/forgetpassword",name:"ForgetPassword",component:function(){return n.e("authentication").then(n.bind(null,"5373"))}},{path:"/userinfo",name:"UserInfo",redirect:"/userinfo/view",meta:{isToken:!0},component:function(){return n.e("user-info").then(n.bind(null,"ee96"))},children:[{path:"view",name:"UserInfoView",component:function(){return n.e("user-info").then(n.bind(null,"8665"))},beforeEnter:function(e,t,n){return Object(f["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,w.dispatch("setToken");case 2:return e.next=4,w.dispatch("fetchUserInfo",{remember_token:w.getters.token});case 4:n();case 5:case"end":return e.stop()}}),e)})))()}},{path:"edit",name:"UserInfoEdit",component:function(){return n.e("chunk-0e64e6d4").then(n.bind(null,"3c48"))},beforeEnter:function(e,t,n){return Object(f["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,w.dispatch("setToken");case 2:return e.next=4,w.dispatch("fetchUserInfo",{remember_token:w.getters.token});case 4:n();case 5:case"end":return e.stop()}}),e)})))()}},{path:"resetpassword",name:"ResetPassword",component:function(){return n.e("user-info").then(n.bind(null,"0813"))}}]}],j=new k["a"]({mode:"history",base:"/Vue-Authentication/",routes:x});j.beforeEach((function(e,t,n){localStorage.getItem("remember_token")||!e.meta.isToken?n():j.push("/login")}));var y=j,O=(n("e930"),n("8f80")),_=(n("be7f"),n("565f"));r["a"].use(_["a"]),r["a"].use(O["a"]),r["a"].config.productionTip=!1,new r["a"]({router:y,store:w,render:function(e){return e(s)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.0ccb992a.js.map