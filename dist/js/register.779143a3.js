(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["register"],{"0457":function(t,e,n){},"0b06":function(t,e,n){"use strict";var r=n("0457"),a=n.n(r);a.a},"16b1":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-field",{attrs:{label:t.label,type:t.type,placeholder:t.placeholder,value:t.content},on:{input:function(e){return t.$emit("update:value",e)}}})],1)},a=[],i={props:{content:{type:String,required:!0},label:{type:String,required:!0},type:{type:String},placeholder:{type:String,required:!0}}},o=i,s=(n("0b06"),n("2877")),u=Object(s["a"])(o,r,a,!1,null,"5c51e34a",null);e["a"]=u.exports},"3b97":function(t,e,n){},"45cc":function(t,e,n){"use strict";var r=n("afb5"),a=n.n(r);a.a},7106:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar"},[t._m(0),t.isLogout?n("span",{staticClass:"logout",on:{click:function(e){return t.$emit("logout")}}},[t._v("登出")]):t._e()])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("LOGO")])])}],i={props:{isLogout:{type:Boolean,required:!0}}},o=i,s=(n("abc8"),n("2877")),u=Object(s["a"])(o,r,a,!1,null,"17f1e01c",null);e["a"]=u.exports},"73cf":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Navbar",{attrs:{isLogout:!1},on:{logout:function(e){return t.$store.dispatch("logout")}}}),n("form",{staticClass:"register"},[n("PageTitle",{attrs:{pageName:"註冊帳號"}},[n("div",{on:{click:function(e){return t.$router.push({name:"Login"})}}},[t._v(" 切換登入 ")])]),n("CommonInput",{attrs:{label:"用戶暱稱",placeholder:"例如: 小明",content:t.registerInfo.name},on:{"update:value":function(e){t.registerInfo.name=e}}}),n("CommonInput",{attrs:{label:"帳號 (電子信箱)",placeholder:"請輸入帳號",content:t.registerInfo.email},on:{"update:value":function(e){t.registerInfo.email=e}}}),n("CommonInput",{attrs:{label:"密碼 (須 6~12 字)",placeholder:"請輸入密碼",type:"password",content:t.registerInfo.password},on:{"update:value":function(e){t.registerInfo.password=e}}}),n("FormButton",{attrs:{buttonText:"註冊",isDisabled:!t.isButtonDisabled},on:{clickHandler:function(e){return t.$store.dispatch("register",t.registerInfo)}}})],1)],1)},a=[],i=(n("b0c0"),n("7106")),o=n("a026"),s=n("16b1"),u=n("a586"),c={components:{Navbar:i["a"],PageTitle:o["a"],CommonInput:s["a"],FormButton:u["a"]},data:function(){return{registerInfo:{name:"",email:"",password:""}}},computed:{isButtonDisabled:function(){var t=/^[A-z|\u4e00-\u9fa5]+/.test(this.registerInfo.name),e=/^[A-z0-9]+@[A-z]+\.com{1}$/.test(this.registerInfo.email),n=/^[A-z\d]{6,16}$/.test(this.registerInfo.password);return t&&e&&n}}},l=c,f=n("2877"),p=Object(f["a"])(l,r,a,!1,null,"6039fdde",null);e["default"]=p.exports},a026:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"slot"},[t._t("default")],2),n("h1",[t._v(t._s(t.pageName))])])},a=[],i={props:{pageName:{type:String,required:!0}}},o=i,s=(n("d037"),n("2877")),u=Object(s["a"])(o,r,a,!1,null,"de469ac8",null);e["a"]=u.exports},a586:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("button",{staticClass:"login-button",class:{disabled:t.isDisabled},attrs:{disabled:t.isDisabled},on:{click:function(e){return e.preventDefault(),t.$emit("clickHandler")}}},[t._v(" "+t._s(t.buttonText)+" ")])])},a=[],i={props:{buttonText:{type:String,required:!0},isDisabled:{type:Boolean,required:!0}}},o=i,s=(n("45cc"),n("2877")),u=Object(s["a"])(o,r,a,!1,null,"61016e54",null);e["a"]=u.exports},abc8:function(t,e,n){"use strict";var r=n("3b97"),a=n.n(r);a.a},afb5:function(t,e,n){},b0c0:function(t,e,n){var r=n("83ab"),a=n("9bf2").f,i=Function.prototype,o=i.toString,s=/^\s*function ([^ (]*)/,u="name";r&&!(u in i)&&a(i,u,{configurable:!0,get:function(){try{return o.call(this).match(s)[1]}catch(t){return""}}})},d037:function(t,e,n){"use strict";var r=n("f590"),a=n.n(r);a.a},f590:function(t,e,n){}}]);
//# sourceMappingURL=register.779143a3.js.map