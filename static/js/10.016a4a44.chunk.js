(this["webpackJsonpweather-react"]=this["webpackJsonpweather-react"]||[]).push([[10],{176:function(e,t,a){"use strict";a.r(t);var r=a(42),n=a.n(r),c=a(51),s=a(53),l=a(1),u=a.n(l),o=a(130),i=a(145),f=a(150),d=a(52),b=a(129),j=a(9),m=a(127);t.default=function(){var e=Object(l.useContext)(o.a),t=Object(l.useState)({}),a=Object(s.a)(t,2),r=a[0],O=a[1],h=Object(l.useState)({}),w=Object(s.a)(h,2),v=w[0],p=w[1],g=Object(l.useState)({}),E=Object(s.a)(g,2),x=E[0],F=E[1],S=Object(l.useState)(!1),y=Object(s.a)(S,2),N=y[0],k=y[1],C=Object(l.useState)(!1),I=Object(s.a)(C,2),J=I[0],M=I[1],T=function(){if(Object(m.a)(e.address)){var t=e.address.cityName;return Object(m.a)(t)&&!t.includes("undefined")&&!t.includes("null")}return!1},q=function(e,t,a){Object(m.a)(e)&&Object(m.a)(t)&&(p(e),O(t),F(a))},z=function(){var t=Object(c.a)(n.a.mark((function t(){var a,r,c,s;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(i.a)(e);case 3:a=t.sent,r=a.weatherCurrent,c=a.weatherForecast,s=a.alert,q(r,c,s),M(!1),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),M(!0),j.a(t.t0);case 15:return t.prev=15,k(!1),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[0,11,15,18]])})));return function(){return t.apply(this,arguments)}}();return Object(l.useEffect)((function(){k(!0),z();var e=setInterval((function(){z()}),36e5);return function(){clearInterval(e)}}),[e.address]),u.a.createElement(l.Fragment,null,N?u.a.createElement(d.a,{loaderText:"Fetching weather forecast ".concat(T()?"for ".concat(e.address.cityName):""," \ud83d\ude0e")}):u.a.createElement(l.Fragment,null,J?u.a.createElement("div",null,T()?u.a.createElement("div",{className:"flex justify-center"},u.a.createElement("div",{className:"sm:w-full lg:w-2/3 xl:w-1/2"},u.a.createElement(b.a,{errorMessage:"Something went wrong. Failed to fetch weather forecast ".concat(T()?"for ".concat(e.address.cityName):"","! \ud83d\ude22")}))):null):u.a.createElement(l.Fragment,null,Object(m.a)(v)?u.a.createElement(f.a,{weatherCurrent:v,weatherForecast:r,alert:x,address:e.address,latlong:e.latlong}):null)))}}}]);
//# sourceMappingURL=10.016a4a44.chunk.js.map