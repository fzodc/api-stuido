(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"1Wnm":function(e,a,t){"use strict";t.r(a);t("KbV2");var r,n,l,s,i,p,o,c=t("I+kI"),m=(t("PCp+"),t("HnZV")),u=(t("rTtu"),t("jksg")),d=t("zAuD"),h=t.n(d),y=t("mK77"),v=t.n(y),E=t("43Yg"),g=t.n(E),f=t("/tCh"),C=t.n(f),b=t("scpF"),I=t.n(b),T=t("O/V9"),w=t.n(T),S=t("8aBX"),x=t.n(S),F=(t("YyIT"),t("2pDd")),k=t("uqIC"),P=t.n(k),q=t("LneV"),V=t("7xWr"),M=t.n(V),A=t("xtmb"),j=t.n(A),D=t("WCBp"),O=t("iFb4"),N=t("eUr/"),B=t("34ay"),W=t("DnsZ"),K=(t("RmDK"),t("/6XP")),R=K["a"].Option,L=(r=Object(q["connect"])(function(e){var a=e.wsdlModel,t=e.loading;return{parse:a.parse,loading:t.models.parse}}),r((l=function(e){function a(){var e,t;g()(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return t=I()(this,(e=w()(a)).call.apply(e,[this].concat(n))),t.componentDidMount=function(){var e=t.props,a=e.dispatch,r=e.wsdlId;a({type:"wsdlModel/parseWsdl",payload:{wsdlId:r}})},t.componentWillReceiveProps=function(e){var a=t.props,r=a.wsdlId,n=a.dispatch;if(r!==e.wsdlId){var l=e.wsdlId;n({type:"wsdlModel/parseWsdl",payload:{wsdlId:l}})}},t.getOptionWhithList=function(e){if(e&&!(e.length<1))return e.map(function(e){return P.a.createElement(R,{key:e,value:e},e)})},t.selectChangeItem=function(e){var a=t.props.onChange;a(e)},t}return x()(a,e),C()(a,[{key:"getOption",value:function(){var e=this.props.parse,a=e||{addActionNames:[]},t=a.addActionNames;return this.getOptionWhithList(t)}},{key:"render",value:function(){var e=this.props.value;return P.a.createElement(K["a"],{style:{width:"100%"},value:e,onSelect:this.selectChangeItem},this.getOption())}}]),a}(k["PureComponent"]),n=l))||n),Y=L,H=W["a"].WS,U=W["a"].REST,_=W["a"].HTTP,X=Object(B["g"])(),G={labelCol:{span:8},wrapperCol:{span:16}},z=(s=Object(q["connect"])(function(e){var a=e.apiCreateModel;return{data:a.apiService}}),i=F["a"].create(),s(p=i((o=function(e){function a(){var e,t;g()(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return t=I()(this,(e=w()(a)).call.apply(e,[this].concat(n))),t.state={wsdlId:null},t.setUrl=function(e){console.log(e);var a=t.props.form,r=e||{wsdlUrlPath:""},n=r.wsdlUrlPath,l=n.replace(H.PATH_PREFIX,"");console.log(l);var s={requestUrl:l};a.setFieldsValue(s)},t.handleChange=function(e){var a=t.props.dispatch,r=e.target.value;console.log("value:",r);var n={serviceType:r};"2"===r?a({type:"apiCreateModel/saveStepFormData",payload:v()({},n,{reqMethod:"post",pathPrefix:H.PATH_PREFIX}),stepType:1}):"1"===r?a({type:"apiCreateModel/saveStepFormData",payload:v()({},n,{pathPrefix:U.PATH_PREFIX}),stepType:1}):"3"===r&&a({type:"apiCreateModel/saveStepFormData",payload:v()({},n,{pathPrefix:_.PATH_PREFIX}),stepType:1})},t.handleWsdl=function(e){var a=t.props.form,r=null;a.setFieldsValue({actionName:r}),t.setState({wsdlId:e})},t}return x()(a,e),C()(a,[{key:"render",value:function(){var e=this.props,a=e.form,t=e.dispatch,r=e.data,n=a.getFieldDecorator,l=a.validateFields,s=a.getFieldValue,i=function(){M.a.push("/apiGateway/apiCreate/info")},p=function(){l(function(e,a){e||(console.log("values:",a),t({type:"apiCreateModel/saveStepFormData",payload:v()({},a),stepType:1}),M.a.push("/apiGateway/apiCreate/producer"))})},o=r.serviceType!==H.SERVICE_TYPE?{display:"none"}:null,d=r.serviceType===H.SERVICE_TYPE?{display:"none"}:null,y=r.serviceType===H.SERVICE_TYPE?[{required:!0,message:"please operate"}]:[],E=this.state.wsdlId;return console.log(o,r.serviceType,r),P.a.createElement(k["Fragment"],null,P.a.createElement(F["a"],{layout:"horizontal",className:j.a.stepForm,hideRequiredMark:!0},P.a.createElement(F["a"].Item,h()({},G,{className:j.a.stepFormText,label:"Api\u540d\u79f0\uff1a"}),r.name),P.a.createElement(u["a"],{style:{margin:"24px 0"}}),P.a.createElement("span",null,P.a.createElement(F["a"].Item,h()({},G,{label:"\u670d\u52a1\u7c7b\u578b"}),n("serviceType",{initialValue:r.serviceType,rules:[{required:!0,message:"please choose\u670d\u52a1\u7c7b\u578b"}]})(P.a.createElement(O["a"],{javaCode:"apiService",javaKey:"service_type",onChange:this.handleChange})))),P.a.createElement(F["a"].Item,h()({},G,{label:"WSDL",style:o}),n("wsdlId",{initialValue:r.wsdlId,rules:[{required:"2"===s("serviceType"),message:"please choose"}]})(P.a.createElement(N["a"],{userId:X,onSetUrl:this.setUrl,status:1,onChange:this.handleWsdl}))),P.a.createElement(F["a"].Item,h()({},G,{label:"\u8bf7\u6c42PATH"}),n("requestUrl",{initialValue:r.requestUrl,rules:[{required:!0,message:"please enter\u8bf7\u6c42PATH"}]})(P.a.createElement(m["a"],{addonBefore:r.pathPrefix,placeholder:"please enter\u8bf7\u6c42PATH"}))),P.a.createElement(F["a"].Item,h()({},G,{label:"\u8bf7\u6c42\u7c7b\u578b",style:d}),n("reqMethod",{initialValue:r.reqMethod,rules:[{required:!0,message:"please chooseHTTP Method"}]})(P.a.createElement(D["a"],{javaCode:"common",javaKey:"req_method"}))),P.a.createElement(F["a"].Item,h()({},G,{label:"Action Name",style:o}),n("actionName",{rules:y})(P.a.createElement(Y,{wsdlId:E}))),P.a.createElement(F["a"].Item,{style:{marginBottom:8},wrapperCol:{xs:{span:24,offset:0},sm:{span:G.wrapperCol.span,offset:G.labelCol.span}},label:""},P.a.createElement(c["a"],{type:"primary",onClick:p},"\u4e0b\u4e00\u6b65"),P.a.createElement(c["a"],{onClick:i,style:{marginLeft:8},htmlType:"button"},"\u4e0a\u4e00\u6b65"))),P.a.createElement(u["a"],{style:{margin:"40px 0 24px"}}),P.a.createElement("div",{className:j.a.desc},P.a.createElement("h3",null,"\u8bf4\u660e"),P.a.createElement("h4",null,"\u8def\u5f84"),P.a.createElement("p",null,"\u8fd9\u4e2a\u6b65\u9aa4\u4e3b\u8981\u662f\u8bbe\u7f6e\u5bf9\u5916\u66b4\u9732\u7684\u8def\u5f84,\u5916\u90e8\u7cfb\u7edf\u8c03\u7528\u7684\u65f6\u5019\u9700\u8981\u8def\u5f84\u52a0\u914d\u5408\u6388\u6743\u7684app key\u8fdb\u884c\u8c03\u7528\u3002")))}}]),a}(P.a.PureComponent),p=o))||p)||p);a["default"]=z},"9Yki":function(e,a,t){"use strict";t.r(a);t("rTtu");var r,n,l,s=t("jksg"),i=(t("KbV2"),t("I+kI")),p=(t("PCp+"),t("HnZV")),o=t("zAuD"),c=t.n(o),m=t("mK77"),u=t.n(m),d=t("43Yg"),h=t.n(d),y=t("/tCh"),v=t.n(y),E=t("scpF"),g=t.n(E),f=t("O/V9"),C=t.n(f),b=t("8aBX"),I=t.n(b),T=(t("YyIT"),t("2pDd")),w=t("uqIC"),S=t.n(w),x=t("LneV"),F=t("7xWr"),k=t.n(F),P=t("xtmb"),q=t.n(P),V=t("mC/d"),M=t("iFb4"),A={labelCol:{span:5},wrapperCol:{span:19}},j=(r=Object(x["connect"])(function(e){var a=e.apiCreateModel,t=e.loading;return{apiService:a.apiService,detailLoading:t.effects["apiGatewayModel/apiInfo"]}}),n=T["a"].create(),r(l=n(l=function(e){function a(){return h()(this,a),g()(this,C()(a).apply(this,arguments))}return I()(a,e),v()(a,[{key:"componentDidMount",value:function(){var e=this.props,a=e.dispatch,t=e.apiService;console.log("step1 componentDidMount:",t,t.apiId),void 0===t.apiId&&void 0!==t.name||(console.log("step1 componentDidMount2:",t.apiId,void 0!==t.apiId),a({type:"apiCreateModel/initDataForAdd"}))}},{key:"render",value:function(){var e=this.props,a=e.form,t=e.dispatch,r=e.apiService,n=a.getFieldDecorator,l=a.validateFields,o=function(){l(function(e,a){e||(t({type:"apiCreateModel/saveStepFormData",payload:u()({},a),stepType:1}),k.a.push("/apiGateway/apiCreate/consumer"))})};return console.log("step1 data in render:",r),S.a.createElement(w["Fragment"],null,S.a.createElement(T["a"],{layout:"horizontal",className:q.a.stepForm,hideRequiredMark:!0},S.a.createElement(T["a"].Item,c()({},A,{label:"\u5206\u7ec4"}),n("groupId",{initialValue:r.groupId,rules:[{required:!0,message:"please choose\u5206\u7ec4"}]})(S.a.createElement(V["a"],{hideRoot:!0,isDisabled:1}))),S.a.createElement(T["a"].Item,c()({},A,{label:"Api\u540d\u79f0"}),n("name",{initialValue:r.name,rules:[{required:!0,message:"please enterApi\u540d\u79f0"}]})(S.a.createElement(p["a"],{placeholder:"please enterApi\u540d\u79f0"}))),S.a.createElement(T["a"].Item,c()({},A,{label:"Api Range"}),n("apiType",{initialValue:r.apiType,rules:[{required:!0,message:"please choose Api Range"}]})(S.a.createElement(M["a"],{javaCode:"apiService",javaKey:"api_type"}))),S.a.createElement(T["a"].Item,{wrapperCol:{xs:{span:24,offset:0},sm:{span:A.wrapperCol.span,offset:A.labelCol.span}},label:""},S.a.createElement(i["a"],{type:"primary",onClick:o},"\u4e0b\u4e00\u6b65"))),S.a.createElement(s["a"],{style:{margin:"40px 0 24px"}}),S.a.createElement("div",{className:q.a.desc},S.a.createElement("h3",null,"\u8bf4\u660e"),S.a.createElement("h4",null,"\u914d\u7f6e\u8bf4\u660e"),S.a.createElement("p",null,"\u7b2c\u4e00\u6b65\u914d\u7f6e\u57fa\u7840\u4fe1\u606f\uff0c\u7b2c\u4e8c\u6b65\u914d\u7f6e\u8bf7\u6c42\u4fe1\u606f\uff0c\u7b2c\u4e09\u6b65\u914d\u7f6e\u540e\u7aef\u670d\u52a1\u4fe1\u606f\u3002")))}}]),a}(S.a.PureComponent))||l)||l);a["default"]=j},cX7L:function(e,a,t){"use strict";t.r(a);t("KbV2");var r,n,l,s=t("I+kI"),i=(t("PCp+"),t("HnZV")),p=(t("SCjY"),t("Kw9K")),o=(t("rTtu"),t("jksg")),c=t("zAuD"),m=t.n(c),u=t("mK77"),d=t.n(u),h=t("43Yg"),y=t.n(h),v=t("/tCh"),E=t.n(v),g=t("scpF"),f=t.n(g),C=t("O/V9"),b=t.n(C),I=t("8aBX"),T=t.n(I),w=(t("YyIT"),t("2pDd")),S=t("uqIC"),x=t.n(S),F=t("LneV"),k=t("7xWr"),P=t.n(k),q=t("xtmb"),V=t.n(q),M=t("nPZ7"),A=t("WCBp"),j=t("iFb4"),D=t("kmo5"),O=t("34ay"),N={labelCol:{span:8},wrapperCol:{span:16}},B=(r=Object(F["connect"])(function(e){var a=e.apiCreateModel,t=e.loading;return{submitting:t.effects["apiCreateModel/submitStepForm"],apiService:a.apiService}}),n=w["a"].create(),r(l=n(l=function(e){function a(){return y()(this,a),f()(this,b()(a).apply(this,arguments))}return T()(a,e),E()(a,[{key:"render",value:function(){var e=this.props,a=e.form,t=e.apiService,r=e.dispatch,n=e.submitting,l=t.apiServiceBackends&&t.apiServiceBackends.length>0?t.apiServiceBackends[0]:{},c=a.getFieldDecorator,u=a.validateFields,h=function(){P.a.push("/apiGateway/apiCreate/consumer")},y=function(e){e.preventDefault(),u(function(e,a){var n=d()({},l,a),s=[n];t.apiServiceBackends=s;var i=Object(O["g"])(),p=Object(M["c"])(1,t,i);e||r({type:"apiCreateModel/submitStepForm",payload:p})})},v=Object(O["g"])();return x.a.createElement(w["a"],{layout:"horizontal",className:V.a.stepForm},x.a.createElement(w["a"].Item,m()({},N,{className:V.a.stepFormText,label:"Api\u5bf9\u5916\u66b4\u9732\u7684\u8def\u5f84\uff1a"}),t.requestUrl),x.a.createElement(o["a"],{style:{margin:"24px 0"}}),x.a.createElement(w["a"].Item,m()({},N,{label:"\u8c03\u7528\u7c7b\u578b"}),c("callType",{initialValue:t.callType,rules:[{required:!0,message:"please choose \u8c03\u7528\u7c7b\u578b"}]})(x.a.createElement(p["a"].Group,null,x.a.createElement(p["a"],{value:"1"},"External Service"),x.a.createElement(p["a"],{value:"2"},"Internal MicroService")))),x.a.createElement(w["a"].Item,m()({},N,{label:"\u670d\u52a1\u63d0\u4f9b\u8005"}),c("orgId",{rules:[{required:!0,message:"please choose\u670d\u52a1\u63d0\u4f9b\u8005"}]})(x.a.createElement(D["a"],{orgType:"0,1",userId:v}))),x.a.createElement(w["a"].Item,m()({},N,{label:"\u670d\u52a1\u7c7b\u578b"}),c("serviceType",{initialValue:l.serviceType,rules:[{required:!0,message:"please choose\u63d0\u4f9b\u65b9\u670d\u52a1\u7c7b\u578b"}]})(x.a.createElement(j["a"],{javaCode:"apiServiceBackend",javaKey:"service_type"}))),x.a.createElement(w["a"].Item,m()({},N,{label:"\u670d\u52a1\u5730\u5740"}),c("url",{initialValue:l.url,rules:[{required:!0,message:"please enter\u63d0\u4f9b\u65b9\u5730\u5740"}]})(x.a.createElement(i["a"],{placeholder:"http://ip:port"}))),x.a.createElement(w["a"].Item,m()({},N,{label:"\u670d\u52a1\u8def\u5f84"}),c("reqPath",{initialValue:l.reqPath,rules:[]})(x.a.createElement(i["a"],{placeholder:"Only For Rest:/xxx/xxx"}))),x.a.createElement(w["a"].Item,m()({},N,{label:"\u670d\u52a1\u8bf7\u6c42\u7c7b\u578b"}),c("reqMethod",{initialValue:l.reqMethod,rules:[{required:!0,message:"please chooseHTTP Method"}]})(x.a.createElement(A["a"],{javaCode:"common",javaKey:"req_method"}))),x.a.createElement(w["a"].Item,m()({},N,{label:"\u670d\u52a1\u8fde\u63a5\u8d85\u65f6\uff08ms\uff09"}),c("connectTimeout",{initialValue:l.connectTimeout,rules:[{required:!0,message:"\u670d\u52a1\u8fde\u63a5\u8d85\u65f6\uff08ms\uff09"},{pattern:/^[0-9]*[1-9][0-9]*$/,message:"Malformed number"}]})(x.a.createElement(i["a"],{placeholder:"please enter\u670d\u52a1\u8fde\u63a5\u8d85\u65f6\uff08ms\uff09"}))),x.a.createElement(w["a"].Item,m()({},N,{label:"\u670d\u52a1\u8bf7\u6c42\u8d85\u65f6\uff08ms\uff09"}),c("socketTimeout",{initialValue:l.socketTimeout,rules:[{required:!0,message:"\u670d\u52a1\u8bf7\u6c42\u8d85\u65f6\uff08ms\uff09"}]})(x.a.createElement(i["a"],{placeholder:"please enter\u670d\u52a1\u8bf7\u6c42\u8d85\u65f6\uff08ms\uff09"}))),x.a.createElement(w["a"].Item,{style:{marginBottom:8},wrapperCol:{xs:{span:24,offset:0},sm:{span:N.wrapperCol.span,offset:N.labelCol.span}},label:""},x.a.createElement(s["a"],{type:"primary",onClick:y,loading:n,htmlType:"submit"},"\u63d0\u4ea4"),x.a.createElement(s["a"],{onClick:h,style:{marginLeft:8},htmlType:"button"},"\u4e0a\u4e00\u6b65")))}}]),a}(x.a.PureComponent))||l)||l);a["default"]=B},rS1p:function(e,a,t){"use strict";t.r(a);t("KbV2");var r,n,l=t("I+kI"),s=(t("cZcT"),t("T+5x")),i=(t("4WAF"),t("Qfhr")),p=t("43Yg"),o=t.n(p),c=t("/tCh"),m=t.n(c),u=t("scpF"),d=t.n(u),h=t("O/V9"),y=t.n(h),v=t("8aBX"),E=t.n(v),g=t("uqIC"),f=t.n(g),C=t("LneV"),b=t("7xWr"),I=t.n(b),T=t("ALo4"),w=t("MMK4"),S=t("xtmb"),x=t.n(S),F=(r=Object(C["connect"])(function(e){var a=e.apiCreateModel;return{apiService:a.apiService}}),r(n=function(e){function a(){return o()(this,a),d()(this,y()(a).apply(this,arguments))}return E()(a,e),m()(a,[{key:"render",value:function(){var e=this.props.apiService,a=e.apiServiceBackends?e.apiServiceBackends[0]:[{}],t=function(){I.a.push("/apiGateway/apiCreate/info")},r=function(){var a=e.apiId;I.a.push({pathname:"/apiGateway/apiUpdate",state:{apiId:a,apiService:e}})},n=function(){I.a.push({pathname:"/apiGateway/apiList/list",state:{refresh:!0}})},p=f.a.createElement("div",{className:x.a.information},f.a.createElement(s["a"],null,f.a.createElement(i["a"],{xs:24,sm:8,className:x.a.label},"api name\uff1a"),f.a.createElement(i["a"],{xs:24,sm:16},e.name)),f.a.createElement(s["a"],null,f.a.createElement(i["a"],{xs:24,sm:8,className:x.a.label},"api path\uff1a"),f.a.createElement(i["a"],{xs:24,sm:16},e.requestUrl)),f.a.createElement(s["a"],null,f.a.createElement(i["a"],{xs:24,sm:8,className:x.a.label},"\u843d\u5730\u65b9\u5730\u5740\uff1a"),f.a.createElement(i["a"],{xs:24,sm:16},a.url)),f.a.createElement(s["a"],null,f.a.createElement(i["a"],{xs:24,sm:8,className:x.a.label},"\u843d\u5730\u65b9\u670d\u52a1\u7c7b\u578b\uff1a"),f.a.createElement(i["a"],{xs:24,sm:16},Object(w["b"])("apiService","service_type",a.serviceType)))),o=f.a.createElement(g["Fragment"],null,f.a.createElement(l["a"],{type:"primary",onClick:t,htmlType:"button"},"\u518d\u521b\u5efa\u4e00\u7b14"),f.a.createElement(l["a"],{onClick:r,htmlType:"button"},"\u9ad8\u7ea7\u914d\u7f6e"),f.a.createElement(l["a"],{onClick:n,htmlType:"button"},"\u8fd4\u56de\u5217\u8868"));return f.a.createElement(T["a"],{type:"success",title:"\u64cd\u4f5c\u6210\u529f",description:"\u64cd\u4f5c\u6210\u529f\uff0c\u8bf7\u5230Api\u5217\u8868\u786e\u8ba4\u8be5Api\u662f\u5426\u9700\u8981\u53d1\u5e03\uff01",extra:p,actions:o,className:x.a.result})}}]),a}(f.a.PureComponent))||n);a["default"]=F},w6iC:function(e,a,t){"use strict";t.r(a);t("ssvk");var r=t("Qo4C"),n=t("43Yg"),l=t.n(n),s=t("/tCh"),i=t.n(s),p=t("scpF"),o=t.n(p),c=t("O/V9"),m=t.n(c),u=t("8aBX"),d=t.n(u),h=(t("YL8Q"),t("5Uzr")),y=t("uqIC"),v=t.n(y),E=t("gcl2"),g=t.n(E),f=h["a"].Step,C=function(e){function a(){return l()(this,a),o()(this,m()(a).apply(this,arguments))}return d()(a,e),i()(a,[{key:"getCurrentStep",value:function(){var e=this.props.location,a=e.pathname,t=a.split("/");switch(t[t.length-1]){case"info":return 0;case"consumer":return 1;case"producer":return 2;case"result":return 3;case"advance":return 3;default:return 0}}},{key:"render",value:function(){var e=this.props,a=e.location,t=e.children;return console.log(a.pathname,t),v.a.createElement(r["a"],{bordered:!1},v.a.createElement(y["Fragment"],null,v.a.createElement(h["a"],{current:this.getCurrentStep(),className:g.a.steps},v.a.createElement(f,{title:"\u57fa\u672c\u4fe1\u606f"}),v.a.createElement(f,{title:"\u5b9a\u4e49\u8bf7\u6c42\u4fe1\u606f"}),v.a.createElement(f,{title:"\u5b9a\u4e49Api\u540e\u7aef\u670d\u52a1"}),v.a.createElement(f,{title:"\u9ad8\u7ea7\u914d\u7f6e\uff0f\u5b8c\u6210"})),t))}}]),a}(y["PureComponent"]);a["default"]=C},xtmb:function(e,a,t){e.exports={stepForm:"antd-pro-pages-api-gateway-api-create-style-stepForm",stepFormText:"antd-pro-pages-api-gateway-api-create-style-stepFormText",result:"antd-pro-pages-api-gateway-api-create-style-result",desc:"antd-pro-pages-api-gateway-api-create-style-desc",information:"antd-pro-pages-api-gateway-api-create-style-information",label:"antd-pro-pages-api-gateway-api-create-style-label",money:"antd-pro-pages-api-gateway-api-create-style-money",uppercase:"antd-pro-pages-api-gateway-api-create-style-uppercase"}}}]);