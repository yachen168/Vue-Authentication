(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e64e6d4"],{"3c48":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"edit-page"},[r("PageTitle",{attrs:{pageName:"個人檔案"}}),r("EditBanner",{attrs:{title:"個人照片"}},[r("div",{staticClass:"avatar-wrapper"},[r("van-uploader",{ref:"files",staticClass:"upload-avatar",attrs:{"after-read":t.afterRead}}),t.$store.getters.userInfo.image_path?r("img",{attrs:{src:t.$store.getters.userInfo.image_path,alt:"avatar"}}):r("img",{attrs:{src:a("92ef"),alt:"avatar"}})],1)]),r("EditBanner",{attrs:{title:"暱稱"},on:{openDialog:function(e){t.isNameDialogShow=!0}}},[r("span",[t._v(t._s(t.$store.getters.userInfo["name"]?t.$store.getters.userInfo["name"]:"-"))])]),r("EditBanner",{attrs:{title:"信箱"}},[r("span",[t._v(t._s(t.$store.getters.userInfo.email))])]),r("EditBanner",{attrs:{title:"密碼"}},[r("p",{staticClass:"reset-password",on:{click:function(e){return t.$router.push({name:"ResetPassword"})}}},[t._v(" 重設密碼 ")])])],1)},s=[],n=a("a026"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"edit-banner"},[a("span",[t._v(t._s(t.title))]),a("span",[t._t("default")],2)])},o=[],c={props:{title:{type:String,required:!0}}},l=c,u=(a("a058"),a("2877")),p=Object(u["a"])(l,i,o,!1,null,"c3be82cc",null),d=p.exports,f={components:{PageTitle:n["a"],EditBanner:d},data:function(){return{isNameDialogShow:!1,isDescriptionDialogShow:!1,content:""}},methods:{afterRead:function(t){var e=localStorage.getItem("remember_token"),a=new FormData;a.append("photo",t.file),a.append("remember_token",e),this.$store.dispatch("uploadFile",a)}}},g=f,m=(a("98be"),Object(u["a"])(g,r,s,!1,null,"b514565a",null));e["default"]=m.exports},"7e11":function(t,e,a){},"92ef":function(t,e,a){t.exports=a.p+"img/avatar.dbeaefc9.jpg"},"98be":function(t,e,a){"use strict";var r=a("7e11"),s=a.n(r);s.a},a026:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("div",{staticClass:"slot"},[t._t("default")],2),a("h1",[t._v(t._s(t.pageName))])])},s=[],n={props:{pageName:{type:String,required:!0}}},i=n,o=(a("d037"),a("2877")),c=Object(o["a"])(i,r,s,!1,null,"de469ac8",null);e["a"]=c.exports},a058:function(t,e,a){"use strict";var r=a("bd2f"),s=a.n(r);s.a},bd2f:function(t,e,a){},d037:function(t,e,a){"use strict";var r=a("f590"),s=a.n(r);s.a},f590:function(t,e,a){}}]);
//# sourceMappingURL=chunk-0e64e6d4.a9eacae5.js.map