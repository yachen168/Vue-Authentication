(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["reset-password"],{"0457":function(t,e,n){},"0813":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Navbar",{attrs:{isLogout:!0},on:{logout:function(e){return t.$store.dispatch("logout")}}}),n("form",[n("PageTitle",{attrs:{pageName:"重新設定新密碼"}}),n("CommonInput",{attrs:{label:"新密碼",placeholder:"請輸入新密碼(6 ~ 12 字元)",type:"password",content:t.resetedPassword},on:{"update:value":function(e){t.resetedPassword=e}}}),n("CommonInput",{attrs:{label:"確認新密碼",placeholder:"請再次輸入新密碼",type:"password",content:t.checkedPassword},on:{"update:value":function(e){t.checkedPassword=e}}}),n("FormButton",{attrs:{buttonText:"確認更改密碼",isDisabled:!t.isButtonDisabled},on:{clickHandler:function(e){return t.$store.dispatch("resetPassword",{remember_token:t.$store.getters.token,password:t.resetedPassword})}}}),n("FormButton",{attrs:{buttonText:"取消",isDisabled:!1},on:{clickHandler:function(e){return t.$router.push({name:"UserInfoEdit"})}}})],1)],1)},a=[],s=n("7106"),o=n("a026"),i=n("16b1"),c=n("a586"),u={components:{Navbar:s["a"],PageTitle:o["a"],CommonInput:i["a"],FormButton:c["a"]},data:function(){return{resetedPassword:"",checkedPassword:""}},computed:{isButtonDisabled:function(){var t=/^[A-z\d]{6,16}$/.test(this.resetedPassword),e=this.resetedPassword===this.checkedPassword;return t&&e}}},l=u,d=(n("7224"),n("2877")),p=Object(d["a"])(l,r,a,!1,null,"06394277",null);e["default"]=p.exports},"0b06":function(t,e,n){"use strict";var r=n("0457"),a=n.n(r);a.a},"16b1":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-field",{attrs:{label:t.label,type:t.type,placeholder:t.placeholder,value:t.content},on:{input:function(e){return t.$emit("update:value",e)}}})],1)},a=[],s={props:{content:{type:String,required:!0},label:{type:String,required:!0},type:{type:String},placeholder:{type:String,required:!0}}},o=s,i=(n("0b06"),n("2877")),c=Object(i["a"])(o,r,a,!1,null,"5c51e34a",null);e["a"]=c.exports},"253c":function(t,e,n){},"3b97":function(t,e,n){},"45cc":function(t,e,n){"use strict";var r=n("afb5"),a=n.n(r);a.a},7106:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar"},[t._m(0),t.isLogout?n("span",{staticClass:"logout",on:{click:function(e){return t.$emit("logout")}}},[t._v("登出")]):t._e()])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("LOGO")])])}],s={props:{isLogout:{type:Boolean,required:!0}}},o=s,i=(n("abc8"),n("2877")),c=Object(i["a"])(o,r,a,!1,null,"17f1e01c",null);e["a"]=c.exports},7224:function(t,e,n){"use strict";var r=n("253c"),a=n.n(r);a.a},a026:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"slot"},[t._t("default")],2),n("h1",[t._v(t._s(t.pageName))])])},a=[],s={props:{pageName:{type:String,required:!0}}},o=s,i=(n("d037"),n("2877")),c=Object(i["a"])(o,r,a,!1,null,"de469ac8",null);e["a"]=c.exports},a586:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("button",{staticClass:"login-button",class:{disabled:t.isDisabled},attrs:{disabled:t.isDisabled},on:{click:function(e){return e.preventDefault(),t.$emit("clickHandler")}}},[t._v(" "+t._s(t.buttonText)+" ")])])},a=[],s={props:{buttonText:{type:String,required:!0},isDisabled:{type:Boolean,required:!0}}},o=s,i=(n("45cc"),n("2877")),c=Object(i["a"])(o,r,a,!1,null,"61016e54",null);e["a"]=c.exports},abc8:function(t,e,n){"use strict";var r=n("3b97"),a=n.n(r);a.a},afb5:function(t,e,n){},d037:function(t,e,n){"use strict";var r=n("f590"),a=n.n(r);a.a},f590:function(t,e,n){}}]);
//# sourceMappingURL=reset-password.0111eb52.js.map