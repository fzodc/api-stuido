(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[53],{ZwiU:function(e,a,t){"use strict";t.r(a);t("PCp+");var n=t("HnZV"),o=t("uqIC"),p=t.n(o),i=t("p0YK"),r=t.n(i),s=t("zHco"),c=t("SfOC"),m=[{path:"/user",component:"../layouts/UserLayout",routes:[{path:"/user",redirect:"/user/login"},{path:"/user/login",name:"login",component:"./User/Login"},{path:"/user/loading",name:"loading",component:"./User/Loading"},{path:"/user/register",name:"register",component:"./User/Register"},{path:"/user/register-result",name:"register.result",component:"./User/RegisterResult"},{component:"404"}]},{path:"/",component:"../layouts/BasicLayout",Routes:["src/pages/Authorized"],routes:[{path:"/",redirect:"/dashboard/analysis",authority:["admin","manager","user"]},{path:"/dashboard",name:"dashboard",icon:"dashboard",routes:[{path:"/dashboard/analysis",name:"analysis",component:"./Dashboard/Analysis"}]},{path:"/apiGateway",icon:"gateway",name:"apiGateway",authority:["user"],routes:[{path:"/apiGateway/apiList",name:"apiList",component:"./ApiGateway/Info",authority:["user"],routes:[{path:"/apiGateway/apiList",redirect:"/apiGateway/apiList/list"},{path:"/apiGateway/apiList/list",component:"./ApiGateway/ApiList"},{path:"/apiGateway/apiList/callList",component:"./ApiGateway/CallApiList"}]},{path:"/apiGateway/apiUpdate",name:"apiUpdate",component:"./ApiGateway/ApiUpdate"},{path:"/apiGateway/apiDocUpdate",name:"apiDocUpdate",component:"./ApiGateway/ApiDocUpdate"},{path:"/apiGateway/apiDetail",name:"apiDetail",hideInMenu:!0,component:"./ApiGateway/ApiDetail"},{path:"/apiGateway/callApiDetail",name:"callApiDetail",hideInMenu:!0,component:"./ApiGateway/CallApiDetail"},{path:"/apiGateway/apiDebug",name:"apiDebug",component:"./ApiGateway/ApiDebugMenu",routes:[{path:"/apiGateway/apiDebug",component:"./ApiGateway/ApiDebug"}]},{path:"/apiGateway/apiLog",name:"apiLog",hideInMenu:!0,component:"./ApiGateway/ApiLog"},{path:"/apiGateway/wsdlList",name:"wsdlList",component:"./ApiGateway/WsdlList"},{path:"/apiGateway/wsdlAuth",name:"wsdlAuth",component:"./ApiGateway/WsdlAuth"},{path:"/apiGateway/apiCreate",name:"apiCreate",component:"./ApiGateway/ApiCreate",hideChildrenInMenu:!0,routes:[{path:"/apiGateway/apiCreate",redirect:"/apiGateway/apiCreate/info"},{path:"/apiGateway/apiCreate/info",name:"info",component:"./ApiGateway/ApiCreate/Step1"},{path:"/apiGateway/apiCreate/consumer",name:"consumer",component:"./ApiGateway/ApiCreate/Step2"},{path:"/apiGateway/apiCreate/producer",name:"producer",component:"./ApiGateway/ApiCreate/Step3"},{path:"/apiGateway/apiCreate/result",name:"result",component:"./ApiGateway/ApiCreate/Step4"}]},{path:"/apiGateway/wsdl",name:"wsdl",component:"./ApiGateway/Wsdl",hideInMenu:!0,hideChildrenInMenu:!0,routes:[{path:"/apiGateway/wsdl",redirect:"/apiGateway/wsdl/info"},{path:"/apiGateway/wsdl/info",name:"info",component:"./ApiGateway/Wsdl/Step1"},{path:"/apiGateway/wsdl/consumer",name:"consumer",component:"./ApiGateway/Wsdl/Step2"},{path:"/apiGateway/wsdl/producer",name:"producer",component:"./ApiGateway/Wsdl/Step3"},{path:"/apiGateway/wsdl/result",name:"result",component:"./ApiGateway/Wsdl/Step4"}]},{path:"/apiGateway/adapterSpec",name:"adapterSpec",component:"./ApiGateway/AdapterSpec"},{path:"/apiGateway/adapterAttrSpec",name:"adapterAttrSpec",component:"./ApiGateway/AdapterAttrSpec",hideInMenu:!0}]},{path:"/baseData",icon:"table",name:"baseData",authority:["manager","user"],routes:[{path:"/baseData/org",name:"org",component:"./BaseData/Org"},{path:"/baseData/appkey",name:"appkey",component:"./BaseData/Appkey"},{path:"/baseData/group",name:"group",component:"./BaseData/Group"},{path:"/baseData/attrSpec",name:"attrSpec",component:"./BaseData/AttrSpec"},{path:"/baseData/appkey",name:"appkey",component:"./BaseData/Appkey"},{path:"/baseData/tenant",name:"tenant",component:"./BaseData/Tenant"},{path:"/baseData/tenantManager",name:"tenantManager",component:"./BaseData/TenantManager"},{path:"/baseData/gsix",name:"gsix",component:"./BaseData/TenantGsix"},{path:"/baseData/orgGsix",name:"orgGsix",component:"./BaseData/OrgGsix"}]},{path:"/userManager",icon:"team",name:"userManager",authority:["admin"],routes:[{path:"/userManager/user",name:"user",component:"./UserManager/User"},{path:"/userManager/role",name:"role",component:"./UserManager/Role"},{path:"/userManager/privilege",name:"privilege",component:"./UserManager/Privilege"}]},{path:"/admin",icon:"table",name:"admin",authority:["admin"],routes:[{path:"/admin/apiLogList",name:"apiLogList",component:"./ApiLog/ApiLogList"},{path:"/admin/logPage",name:"logPage",component:"./Admin/LogPage"},{path:"/admin/refreshCache",name:"refreshCache",component:"./Admin/RefreshCache"}]},{path:"/resourcesDistribute",icon:"table",name:"resourcesDistribute",authority:["admin"],routes:[{path:"/resourcesDistribute/configuration",name:"configuration",component:"./ResourcesDistribute/Configuration"},{path:"/resourcesDistribute/authResource",name:"authResource",component:"./ResourcesDistribute/AuthResource"},{path:"/resourcesDistribute/authClient",name:"authClient",component:"./ResourcesDistribute/AuthClient"}]},{path:"/test",icon:"table",name:"test",authority:["admin"],routes:[{path:"/test/test1",name:"test1",component:"./Test/Test1"},{path:"/test/test2",name:"test2",component:"./Test/Test2"},{path:"/test/test3",name:"test3",component:"./Test/Test3"},{path:"/test/test4",name:"test4",component:"./Test/Test4"},{path:"/test/test5",name:"test5",component:"./Test/Test5"},{path:"/test/test6",name:"test6",component:"./Test/Test6"},{path:"/test/orgTransfer",name:"orgTransfer",component:"./ApiGateway/OrgTransfer"}]},{name:"account",icon:"user",path:"/account",routes:[{path:"/account/settings",name:"settings",component:"./Account/Settings/Info",routes:[{path:"/account/settings",redirect:"/account/settings/base"},{path:"/account/settings/base",component:"./Account/Settings/BaseView"},{path:"/account/settings/security",component:"./Account/Settings/SecurityView"},{path:"/account/settings/binding",component:"./Account/Settings/BindingView"},{path:"/account/settings/notification",component:"./Account/Settings/NotificationView"},{path:"/account/settings/tenant",component:"./Account/Settings/TenantView"}]}]},{name:"editor",icon:"highlight",path:"/editor",authority:["admin"],routes:[{path:"/editor/flow",name:"flow",component:"./Editor/GGEditor/Flow"},{path:"/editor/mind",name:"mind",component:"./Editor/GGEditor/Mind"},{path:"/editor/koni",name:"koni",component:"./Editor/GGEditor/Koni"}]},{name:"exception",icon:"warning",path:"/exception",routes:[{path:"/exception/403",name:"not-permission",component:"./Exception/403"},{path:"/exception/404",name:"not-find",component:"./Exception/404"},{path:"/exception/500",name:"server-error",component:"./Exception/500"},{path:"/exception/trigger",name:"trigger",hideInMenu:!0,component:"./Exception/TriggerException"}]},{component:"404"}]}],u=t("34ay"),l=t("Nxxd"),h=t("814e"),d=Object(c["g"])(m),g=[],w=[],y=[],G=[];Object(c["i"])(g,d,!1,!1),Object(c["i"])(w,d,!0,!0),Object(c["c"])(w,y,0),Object(c["d"])(w,G,0);var A=Object(c["h"])(w),b=A.join("\n"),D=n["a"].TextArea,E=Object(u["d"])(),f=Object(c["f"])(E),C=Object(u["f"])(),L=new Date,S=[{a1:"dd",b1:1,d1:L,d2:"2018-02-02",obj1:{b1:"11"},arr1:[{c1:2},{c2:3}]}],T=[{name:"root",type:Object(h["m"])(S),remark:"root",parent:"-"}],M="array"===Object(h["m"])(S)?S[0]:S;Object(h["l"])(M,T,"root"),console.log(T);a["default"]=function(){return p.a.createElement(s["a"],null,p.a.createElement("div",null,"Token:",p.a.createElement(D,{rows:3,value:"Bearer ".concat(C)}),p.a.createElement("br",null),"log:",p.a.createElement(r.a,{src:Object(l["a"])(),collapsed:"true"}),p.a.createElement("br",null),"ant\u6846\u67b6\u7684\u539f\u59cb\u83dc\u5355\u6570\u636e:",p.a.createElement(r.a,{src:d,collapsed:"true"}),p.a.createElement("br",null),"\u8f6c\u6362\u4e3a\u6811\u5f62\u8868\u683c\u683c\u5f0f:",p.a.createElement(r.a,{src:g,collapsed:"true"}),p.a.createElement("br",null),"\u8f6c\u6362\u4e3a\u6811\u5f62\u4e0b\u62c9\u6846\u683c\u5f0f:",p.a.createElement(r.a,{src:G,collapsed:"true"}),p.a.createElement("br",null),"\u8f6c\u6362\u4e3a\u540e\u53f0\u8fd4\u56de\u7684\u6a21\u62df\u6570\u636e:",p.a.createElement(r.a,{src:w,collapsed:"true"}),p.a.createElement("br",null),"\u4ecestorage\u83b7\u53d6\u7684\u6743\u9650\u6570\u636e:",p.a.createElement(r.a,{src:E,collapsed:"true"}),p.a.createElement("br",null),"\u7528\u4e8e\u529f\u80fd\u6743\u7684\u683c\u5f0f\u5316\u7684\u6743\u9650\u6570\u636e:",p.a.createElement(r.a,{src:f,collapsed:"true"}),p.a.createElement("br",null),"\u8f6c\u6362\u4e3aInsert Sql:",p.a.createElement(D,{rows:20,value:b}),"\u8f6c\u6362\u4e3aant\u83dc\u5355\u6570\u636e:",p.a.createElement(r.a,{src:y,collapsed:"true"}),p.a.createElement("br",null)))}}}]);