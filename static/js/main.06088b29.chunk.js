(this["webpackJsonpweather-react"]=this["webpackJsonpweather-react"]||[]).push([[1],{13:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(49),c=a(1),r=a.n(c),l=a(30),o=a.n(l),i=a(18),s=r.a.createContext({theme:"light",toggleTheme:function(){}}),m=function(e){var t=e.children,a=Object(c.useState)(""),l=Object(n.a)(a,2),m=l[0],u=l[1],f="light"===m?"dark":"light",b=function(e){localStorage.setItem("theme",JSON.stringify(e))};return Object(c.useEffect)((function(){localStorage.getItem("theme")?u(JSON.parse(localStorage.getItem("theme"))):function(){var e=o()().format("H");e>=6&&e<18?(u("light"),b("light")):(u("dark"),b("dark"))}()}),[]),r.a.createElement(s.Provider,{value:{theme:m,colorTheme:f,toggleTheme:function(){var e="light"===m?"dark":"light";!function(e){Object(i.a)({category:"Theme",action:"Toggle Theme",label:e})}(e),u(e),b(e)}}},t)}},18:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return r}));var n=a(26),c=function(e){var t=e.variable,a=e.value,c=e.label;n.a.timing({category:"Load Performance",variable:t,value:a,label:c})},r=function(e){var t=e.category,a=e.action,c=e.label;n.a.event({category:t,action:a,label:c})}},48:function(e,t,a){"use strict";var n=a(1),c=a.n(n),r=(a(84),a(13));t.a=function(e){var t=e.loaderText,a=Object(n.useContext)(r.a).theme;return c.a.createElement("div",{className:"flex flex-col w-full justify-center items-center"},c.a.createElement("div",{className:"spinner"},c.a.createElement("div",{className:"double-bounce1"}),c.a.createElement("div",{className:"double-bounce2"})),t&&c.a.createElement("div",{className:"mx-auto text-center text-sm font-light text-".concat("light"===a?"dark":"light")},t,c.a.createElement("span",{className:"text-2xl text-fade"},"...")))}},66:function(e,t,a){e.exports=a(85)},71:function(e,t,a){},81:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(43),l=a.n(r),o=a(20),i=(a(71),a(92)),s=a(8),m=a(19),u=a(26),f=a(13),b=a(59),h=a.n(b),g=(a(81),a(28)),v=function(e){var t=e.iconType;return c.a.createElement("div",null,"light"===t?c.a.createElement("p",{className:"text-toggle"},c.a.createElement(g.e,null)):c.a.createElement("p",{className:"text-toggle"},c.a.createElement(g.b,null)))},d=a(91),E=function(){var e=Object(n.useContext)(f.a),t=e.theme,a=e.toggleTheme;return c.a.createElement("div",{className:"flex justify-between items-center px-5 py-5"},c.a.createElement("div",null,c.a.createElement(o.b,{to:"/"},c.a.createElement("img",{src:"./logo.png",alt:"Logo",className:"h-12 w-12 object-contain object-center cursor-pointer"}))),c.a.createElement("div",null,Object(d.a)(t)?null:c.a.createElement(h.a,{checked:"light"===t,icons:{checked:c.a.createElement(v,{iconType:"light"}),unchecked:c.a.createElement(v,{iconType:"dark"})},onChange:a})))},p=a(30),x=a.n(p),y=a(18),k=function(){var e=Object(n.useContext)(f.a),t=e.theme,a=e.colorTheme,r=function(e,t){Object(y.a)({category:"Footer Links",action:e,label:t})};return c.a.createElement("div",{className:"text-".concat(a," pb-3"),style:{backgroundColor:"dark"===t?"#292929":"#e8ebee"}},c.a.createElement("div",{className:"flex flex-col text-center sm:flex sm:flex-row justify-around p-5 text-".concat(a," text-sm")},c.a.createElement("p",{className:"my-2 sm:my-0 w-full sm:w-1/3"},c.a.createElement("a",{href:"https://github.com/iamsainikhil/weather-react/",target:"_blank",rel:"noreferrer noopener",className:"link z-0 hover:text-".concat(t),onClick:function(){return r("Visit GitHub","GitHub Link")}},"GitHub")),c.a.createElement("p",{className:"flex flex-no-wrap justify-center my-2 sm:my-0 w-full sm:w-1/2"},"Made with\xa0",c.a.createElement("span",{title:"Love",role:"img","aria-label":"Love",className:"text-lg"},"\u2764\ufe0f"),"\xa0using\xa0",c.a.createElement("span",{title:"React",role:"img","aria-label":"React",className:"text-lg text-react"},c.a.createElement(g.c,null))),c.a.createElement("p",{className:"my-2 sm:my-0 w-full sm:w-1/3"},c.a.createElement(o.b,{to:"/privacy-policy",className:"link z-0 hover:text-".concat(t)},"Privacy Policy"))),c.a.createElement("p",{className:"mx-auto text-center text-sm"},"\xa9 ",x()().format("YYYY")," ",c.a.createElement("a",{className:"link z-0 hover:text-".concat(t),href:"https://iamsainikhil.github.io",target:"_blank",rel:"noreferrer noopener",onClick:function(){return r("Visit Portfolio","Portfolio Link")}},"Sai Nikhil")))},w=a(48),N=Object(n.lazy)((function(){return Promise.all([a.e(4),a.e(7)]).then(a.bind(null,175))})),j=Object(n.lazy)((function(){return a.e(8).then(a.bind(null,173))}));u.a.initialize("".concat("UA-85329633-7"));var O=function(){var e=Object(n.useContext)(f.a).theme;return new PerformanceObserver((function(e){e.getEntries().forEach((function(e){Object(y.b)({variable:"Sever Latency",value:e.responseStart-e.requestStart,label:"navigation"}),Object(y.b)({variable:"Download Time",value:e.responseEnd-e.responseStart,label:"navigation"}),Object(y.b)({variable:"Total App Load Time",value:e.responseEnd-e.requestStart,label:"navigation"})}))})).observe({entryTypes:["navigation"]}),c.a.createElement("div",{className:" bg-".concat(e," tracking-wider border-box wrapper")},c.a.createElement("div",null,c.a.createElement(E,null)),c.a.createElement("div",null,c.a.createElement(n.Suspense,{fallback:c.a.createElement(w.a,{loaderText:"Loading components"})},c.a.createElement(m.c,null,c.a.createElement(m.a,{path:"/",exact:!0,component:N}),c.a.createElement(m.a,{path:"/privacy-policy",exact:!0,component:j})))),c.a.createElement("div",null,c.a.createElement(k,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=a(40),S=a.n(T),L=a(63),C=a.n(L);S.a.init("".concat("fqwvbn/weather-react")),C()(S.a);i.a({dsn:"".concat("https://2f774997cac543cf8235ad8680447518@sentry.io/3657916")}),S.a.getSessionURL((function(e){s.b((function(t){t.setExtra("sessionURL",e)}))}));var P=c.a.createElement(o.a,{basename:"/weather-react"},c.a.createElement(f.b,null,c.a.createElement(O,null)));l.a.render(P,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[66,2,3]]]);
//# sourceMappingURL=main.06088b29.chunk.js.map