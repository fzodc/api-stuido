(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[33],{fMx1:function(e,n,t){"use strict";t.r(n);t("ssvk");var a,r,o,i=t("Qo4C"),c=t("mK77"),l=t.n(c),s=t("43Yg"),u=t.n(s),d=t("/tCh"),p=t.n(d),f=t("scpF"),h=t.n(f),g=t("O/V9"),v=t.n(g),y=t("8aBX"),m=t.n(y),w=t("uqIC"),b=t.n(w),k=t("LneV"),C=t("zHco"),E=t("34ay"),x=t("jCnN"),N=t.n(x),O=t("M3vg"),j=t.n(O);function A(e){var n=e.data,t=void 0===n?[]:n,a=b.a.useRef(null),r=null;return Object(w["useEffect"])(function(){r||(r=new j.a.Graph({container:N.a.findDOMNode(a.current),width:window.innerWidth,height:window.innerHeight,modes:{default:["drag-canvas"]},defaultNode:{labelCfg:{style:{fill:"#000000A6",fontSize:15},position:"center"},style:{stroke:"#72CC4A",width:50}},defaultEdge:{color:"blue",style:{endArrow:!0}}})),r.data(t),r.on("node:click",function(e){console.log(e)}),r.render()},[]),b.a.createElement("div",{ref:a}," ")}var M=(a=Object(k["connect"])(function(e){var n=e.uniComp,t=e.loading;return{uniComp:n,loading:t.models.uniComp}}),a((o=function(e){function n(){var e,t;u()(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return t=h()(this,(e=v()(n)).call.apply(e,[this].concat(r))),t.state={org:{}},t.getPayloadGix=function(){var e=t.state.org,n=[],a=[];if(e&&e.id){n.push({id:"".concat(e.id),shape:"circle",label:e.orgName,x:600,y:300});var r=e.callSystems,o=e.targetSystems;r&&r.forEach(function(t,r){var o=80*(r+1)+50,i={x:250,y:o},c=l()({id:"".concat(t.appkey),shape:"circle",label:t.systemName},i);if(n){var s=n.filter(function(e){return e.id===c.id});0===s.length&&n.push(c)}else n.push(c);var u={target:"".concat(e.id),source:"".concat(t.appkey)};a.push(u)}),o&&o.forEach(function(t,r){var o=100*(r+1)+50,i={x:950,y:o},c=l()({id:"".concat(t.appkey),shape:"circle",label:t.systemName},i);if(n){var s=n.filter(function(e){return e.id===c.id});0===s.length&&n.push(c)}else n.push(c);var u={source:"".concat(e.id),target:"".concat(t.appkey)};a.push(u)});var i={nodes:n,edges:a};return b.a.createElement(A,{data:i})}return""},t}return m()(n,e),p()(n,[{key:"componentWillMount",value:function(){var e=this,n=this.props.location,t=n.state,a=t||{id:-1},r=a.id,o=Object(E["g"])(),i=this.props.dispatch,c={userId:o,id:r};i({type:"uniComp/orgView",payload:c,callback:function(n){var t=n.data;e.setState({org:t})}})}},{key:"render",value:function(){var e=this.getPayloadGix();return b.a.createElement(C["a"],null,b.a.createElement(i["a"],{bordered:!1},e))}}]),n}(w["PureComponent"]),r=o))||r);n["default"]=M}}]);