(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[31],{sbSs:function(e,t,a){"use strict";a.r(t);a("j+Ep");var n=a("/Dxd"),r=a("43Yg"),o=a.n(r),l=a("/tCh"),u=a.n(l),s=a("scpF"),d=a.n(s),c=a("O/V9"),i=a.n(c),m=a("8aBX"),p=a.n(m),g=a("uqIC"),h=a.n(g),v=a("Oia7"),f=a("zHco"),S=a("MMK4"),w=a("SfOC"),D=a("34ay"),b=function(e){function t(){var e,a;o()(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return a=d()(this,(e=i()(t)).call.apply(e,[this].concat(r))),a.state={columnSchemas:{}},a.handleConversionData=function(e){var t=[];return console.log("-----flat to tree---list:",e),e.length>5?(Object(w["a"])(e,t,0),console.log("-----flat to tree---5",t),t):e},a}return p()(t,e),u()(t,[{key:"componentWillMount",value:function(){var e=Object(S["d"])("common","status"),t=Object(D["g"])(),a="0,1",n={userId:t,orgType:a},r={tableName:"api_group",key:"groupId",name:"groupName",privileges:["group_save","group_statusBatch"],userId:t,columnDetails:[{name:"groupId",title:"Group ID",add:!0,disabledAct:"true"},{name:"tenantId",title:"Tenant ID",add:!0,addHidden:!0,rules:[]},{name:"groupName",title:"Group Name",sorter:!0,query:!0,add:!0},{name:"parentGroupId",title:"parent",add:!0,tag:"groupTreeSelect",detail:!1,columnHidden:!0,rules:[],defaultValue:"0"},{name:"status",title:"Status",columnHidden:!1,query:!1,add:!0,tag:"commonSelect",tableName:"group",enumData:e,addHidden:!0,rules:[]},{name:"groupDesc",title:"Group Desc",tag:"textArea",columnHidden:!0,add:!0,rows:3,rules:[]},{name:"org",title:"Org Name",tag:"OrgSelectView",columnHidden:!0,add:!0,rows:3,tagAttr:n},{name:"orgName",title:"Org Name"}]};this.setState({columnSchemas:r})}},{key:"render",value:function(){var e=this.state.columnSchemas;return h.a.createElement(f["a"],null,h.a.createElement(v["a"],{columnSchemas:e,pageSize:"999",size:"small",onConversionData:this.handleConversionData}),h.a.createElement(n["a"],null))}}]),t}(g["PureComponent"]);t["default"]=b}}]);