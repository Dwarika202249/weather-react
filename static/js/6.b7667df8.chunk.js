(this["webpackJsonpweather-react"]=this["webpackJsonpweather-react"]||[]).push([[6],{109:function(e,t,a){"use strict";t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"mobile";return{width:"100%",slidesToShow:"time"===e?"tablet"===t?8:3:1,slidesToScroll:"time"===e?"tablet"===t?8:3:1,initialSlideHeight:"time"===e?100:200,slideWidth:"time"===e?"tablet"===t?1:.95:1,speed:1e3,easing:"easeSinInOut",defaultControlsConfig:{prevButtonStyle:{display:"none"},nextButtonStyle:{display:"none"},pagingDotsStyle:{fill:"#A1A6B4",display:"flex",position:"relative",top:"day"===e?"25px":"35px",margin:"10px 5px"}}}}},113:function(e,t,a){"use strict";var n=a(94),r=a.n(n),c=a(104),l=a(102),s=a.n(l),m=a(108),o=a.n(m),i=a(172),u=a(91),d=a(95),f=a(8);o()(s.a,{retryDelay:o.a.exponentialDelay});var b=function(e){return"".concat("https://cors-anywhere.herokuapp.com","/https://api.darksky.net/forecast/").concat("4e27157cf1858c6667c07568e8e21a56","/").concat(e,"?extend=hourly&exclude=minutely,flags")};t.a=function(e){var t,a,n;return r.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:if(t=e.latlong,a={},n={},Object(i.a)(t)||Object(u.a)(t)){l.next=6;break}return l.next=6,r.a.awrap(s.a.get(b(t)).then((function(e){var t=e.data;if(!Object(u.a)(t)&&!Object(i.a)(t)){var r=t.timezone;a=Object(c.a)({timezone:r},t.currently,{sunrise:t.daily.data[0].sunriseTime,sunset:t.daily.data[0].sunsetTime});var l={};t.hourly.data.forEach((function(e){var t=Object(d.a)(e.time,r,"MM/DD/YYYY");Object.keys(l).includes(t)?l[t].push(Object(c.a)({timezone:r},e)):l[t]=[Object(c.a)({timezone:r},e)]}));var s={};t.daily.data.forEach((function(e){var t=Object(d.a)(e.time,r,"MM/DD/YYYY");s[t]=Object(c.a)({timezone:r},e)})),n={timeFrames:l,days:s}}})).catch((function(e){return f.a(e)})));case 6:return l.abrupt("return",{weatherCurrent:a,weatherForecast:n});case 7:case"end":return l.stop()}}))}},114:function(e,t,a){"use strict";var n=a(18);t.a=function(e,t){switch(e){case"favorites":Object(n.a)({category:"Favorites",action:"Select Favorite",label:t});break;case"explore-life":Object(n.a)({category:"Explore Life",action:"Click on Explore Life",label:t});break;case"powered-by":Object(n.a)({category:"Powered By",action:"Click on Powered By",label:t})}}},116:function(e,t,a){"use strict";var n=a(1),r=a.n(n),c=a(117),l=a(49),s=a(101),m=a(172),o=a(91),i=a(30),u=a.n(i),d=a(18),f=a(28),b=function(e){var t=e.address,a=e.latlong,i=e.urbanArea,b=e.weatherCurrent,x=Object(n.useContext)(s.a).updateFavorites,p=Object(n.useState)(""),h=Object(l.a)(p,2),y=h[0],E=h[1],v=Object(n.useState)(""),g=Object(l.a)(v,2),j=g[0],w=g[1],O=function(e,t){Object(d.a)({category:"Favorite City",action:"".concat(e," city"),label:t})},N=Object(n.useRef)(),k=function(){return!!localStorage.getItem("favorites")&&JSON.parse(localStorage.getItem("favorites")).filter((function(e){return e.address.cityName===t.cityName})).length>0},C=function(e){E(Object(m.a)(e)?"":e.format("MMMM Do, YYYY")),w(Object(m.a)(e)?"":e.format("dddd h:mm A")),N.current=e||null};return Object(n.useEffect)((function(){C(u()(1e3*b.time).tz(b.timezone));var e=setInterval((function(){if(b.time){var e=u.a.tz(N.current,b.timezone).add(1,"s");C(e)}}),1e3);return function(){clearInterval(e)}}),[b]),r.a.createElement("div",{className:"flex justify-between items-start"},r.a.createElement("div",{className:"pt-4 px-4"},r.a.createElement("p",{className:"font-bold"},t.cityName),r.a.createElement("div",{className:"sm:flex-col md:flex md:flex-row font-light"},Object(o.a)(y)||Object(o.a)(j)?null:r.a.createElement(n.Fragment,null,r.a.createElement("p",null,y,r.a.createElement("span",{className:"invisible md:visible"},"\xa0|\xa0")),r.a.createElement("p",null,j)))),r.a.createElement("div",{className:"mt-6 mr-4 cursor-pointer text-xl",title:k()?"Remove this city from favorites":"Favorite this city",onClick:function(){if(localStorage.getItem("favorites")){var e=JSON.parse(localStorage.getItem("favorites")),n=e.filter((function(e){return e.address.cityName===t.cityName}));if(n.length){var r=e.findIndex((function(e){return e.address.cityName===n[0].address.cityName}));if(-1!==r){var l=Object(c.a)(e);l.splice(r,1),localStorage.setItem("favorites",JSON.stringify(l)),O("remove",t.cityName),x({favorites:l})}}else{var s=[].concat(Object(c.a)(e),[{address:t,latlong:a,urbanArea:i}]);localStorage.setItem("favorites",JSON.stringify(s)),O("add",t.cityName),x({favorites:s})}}else localStorage.setItem("favorites",JSON.stringify([{address:t,latlong:a,urbanArea:i}])),O("add",t.cityName),x({favorites:[{address:t,latlong:a,urbanArea:i}]})}},k()?r.a.createElement(f.a,null):r.a.createElement(f.d,null)))},x=a(96),p=function(e){return e>=0&&e<=45?"up":e>=46&&e<=90?"up-right":e>=91&&e<=135?"right":e>=136&&e<=180?"down-right":e>=181&&e<=225?"down":e>=226&&e<=270?"down-left":e>=271&&e<=315?"left":"up-left"},h=a(98),y=a(97),E=a(112),v=a(99),g=function(e){var t=e.weatherCurrent,a=Object(n.useContext)(x.a),c=a.weatherUnit,l=a.updateWeatherUnit,s=function(e){Object(d.a)({category:"Weather Unit",action:"Set Unit",label:e}),l(e)},m=function(e){return"F"===c?Math.round(t["".concat(e)]):Object(y.a)(t["".concat(e)])};return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"sm:flex-col md:flex md:flex-row justify-between my-2 px-6 sm:mt-5 sm:mb-5 sm:px-4"},r.a.createElement("div",{className:"flex-col sm:w-full lg:w-1/2"},r.a.createElement("div",{className:"flex flex-row justify-between sm:justify-start"},r.a.createElement("div",{className:"flex flex-col justify-center items-center"},r.a.createElement("div",null,Object(h.a)(t).startsWith("wi")?r.a.createElement("p",{className:"text-6xl sm:mx-2 mt-2",title:t.summary},r.a.createElement(v.a,{type:Object(h.a)(t)})):r.a.createElement("img",{src:"./weather/".concat(Object(h.a)(t),".svg"),alt:"icon",title:t.summary,className:"-mt-2 -ml-4 sm:mx-0 w-32 h-32 object-contain"})),r.a.createElement("p",{className:"hidden sm:flex font-medium -mt-2 ml-3 capitalize"},t.summary)),r.a.createElement("div",{className:"flex justify-start items-center sm:-mt-3 sm:ml-3"},r.a.createElement("div",null,r.a.createElement("span",{className:"text-6xl font-bold"},m("temperature"))),r.a.createElement("p",{className:"-mt-8 text-3xl"},r.a.createElement("sup",null,"o")),r.a.createElement("div",{className:"-mt-10 mx-2 text-xl"},r.a.createElement("span",{className:"cursor-pointer ".concat("F"===c?"font-bold":"font-light opacity-75"),title:"Fahrenheit",onClick:function(){return s("F")}},"F"),r.a.createElement("span",{className:"mx-1 opacity-25"},"|"),r.a.createElement("span",{className:"cursor-pointer ".concat("C"===c?"font-bold":"font-light opacity-75"),title:"celsius",onClick:function(){return s("C")}},"C"))))),r.a.createElement("div",{className:"flex flex-col justify-center items-center sm:mt-6 sm:w-full lg:w-1/2"},r.a.createElement("p",{className:"sm:hidden font-medium capitalize text-2xl -mt-2 mb-2"},t.summary),r.a.createElement("div",{className:"text-sm sm:text-lg ml-8"},r.a.createElement("div",{className:"flex flex-row sm:my-2"},r.a.createElement("p",{className:"font-light"},"Humidity:"),"\xa0",r.a.createElement("p",{className:"mx-1"},Math.round(t.humidity)),r.a.createElement("p",{className:"text-sm mt-1"},r.a.createElement(E.a,null))),r.a.createElement("div",{className:"flex items-center sm:my-2"},r.a.createElement("p",null,r.a.createElement("span",{className:"font-light"},"Wind:"),"\xa0",function(){return"F"===c?"".concat(Math.round(t.windSpeed)," mph"):"".concat((e=t.windSpeed,Math.round(1.6*e))," kmph");var e}()," "),r.a.createElement("p",{className:"text-3xl"},r.a.createElement(v.a,{type:p(t.windBearing)}))),r.a.createElement("p",null,r.a.createElement("span",{className:"font-light sm:my-2"},"Feels like:"),"\xa0",m("apparentTemperature"),r.a.createElement("sup",null,"o"))))))},j=a(48),w=a(103);t.a=function(e){var t=e.weatherCurrent,a=e.address,c=e.latlong,l=e.urbanArea;return r.a.createElement(w.a,null,r.a.createElement(n.Fragment,null,a&&t?r.a.createElement("div",null,r.a.createElement(b,{address:a,latlong:c,urbanArea:l,weatherCurrent:t}),r.a.createElement(g,{weatherCurrent:t})):r.a.createElement(j.a,null)))}},118:function(e,t,a){"use strict";var n=a(94),r=a.n(n),c=a(49),l=a(1),s=a.n(l),m=a(172),o=a(91),i=a(115),u=a(96),d=a(97),f=a(98),b=a(95),x=a(99),p=a(13),h=function(e){var t=e.day,a=e.index,n=e.selectedIndex,r=Object(l.useContext)(u.a).weatherUnit,c=Object(l.useContext)(p.a),m=c.theme,o=c.colorTheme,i=function(e){return"F"===r?Math.round(t["temperature".concat(e)]):Object(d.a)(t["temperature".concat(e)])};return s.a.createElement("div",{className:"md:border-t md:border-b-0 md:border-light md:hover:border-light md:hover:bg-light md:hover:text-black items-center text-center sm:flex-1 sm:py-1 sm:pb-3 cursor-pointer transition-all duration-1000 ease-in-out ".concat(a===n?"bg-".concat(o," text-").concat(m," md:border-").concat(o):""," ").concat("md:border-r".concat(7===a||a===n-1?"-0":""," md:border-l").concat(0===a||a===n+1?"-0":"")),onClick:function(){e.selectedDay({day:t})}},s.a.createElement("div",{className:"flex flex-row flex-no-wrap sm:flex-col sm:flex-wrap justify-around items-center px-2"},s.a.createElement("p",{className:"flex w-1/6 sm:w-full sm:justify-center text-base font-light sm:font-medium"},Object(b.a)(t.time,t.timezone,"ddd")),s.a.createElement("div",{className:"flex w-1/6 sm:w-full"},Object(f.a)(t).startsWith("wi")?s.a.createElement("p",{className:"my-1 sm:mt-1 sm:mb-3 mx-auto text-3xl",title:t.summary},s.a.createElement(x.a,{type:Object(f.a)(t)})):s.a.createElement("img",{src:"./weather/".concat(Object(f.a)(t),".svg"),alt:"icon",title:t.summary,className:"sm:-mt-3 sm:-mb-1 mx-auto w-12 h-12 sm:w-16 sm:h-16 object-contain"})),s.a.createElement("div",{className:"flex flex-row justify-center items-center font-light w-1/4 sm:w-full mt-1 sm:mt-0"},s.a.createElement("p",{className:"mx-2 text-xs sm:text-sm"},i("High"),s.a.createElement("sup",null,"o")),s.a.createElement("p",{className:"mx-2 text-xs"},i("Low"),s.a.createElement("sup",null,"o"))),s.a.createElement("div",{className:"".concat("flex"," flex-row justify-around sm:justify-center sm:flex sm:flex-col w-5/12 sm:w-full font-light mt-1")},s.a.createElement("div",{className:"flex flex-row justify-center items-center mx-2 sm:my-1 text-xs sm:text-sm"},s.a.createElement("p",{className:"text-xl text-sun mr-2",title:"sunrise"},s.a.createElement(x.a,{type:"sunrise"})),s.a.createElement("p",null,Object(b.a)(t.sunriseTime,t.timezone,"h:mm"))),s.a.createElement("div",{className:"flex flex-row justify-center items-center mx-2 sm:my-1 text-xs sm:text-sm"},s.a.createElement("p",{className:"text-xl text-sun mr-1",title:"sunset"},s.a.createElement(x.a,{type:"sunset"})),s.a.createElement("p",null,Object(b.a)(t.sunsetTime,t.timezone,"HH:mm"))))))},y=function(e){var t=e.Timeframe,a=Object(l.useContext)(u.a).weatherUnit,n=Object(l.useContext)(p.a).colorTheme,r=function(e){return"F"===a?Math.round(t["".concat(e)]):Object(d.a)(t["".concat(e)])};return s.a.createElement("div",{className:"border-none flex flex-col justify-start items-center mx-3 mb-3 w-full font-light text-".concat(n," md:text-light")},s.a.createElement("div",null,Object(f.a)(t).startsWith("wi")?s.a.createElement("p",{className:"text-5xl mt-4",title:t.summary},s.a.createElement(x.a,{type:Object(f.a)(t)})):s.a.createElement("img",{src:"./weather/".concat(Object(f.a)(t),".svg"),alt:"icon",title:t.summary,className:"w-16 h-16 object-contain"})),s.a.createElement("p",{className:"text-lg"},r("temperature"),s.a.createElement("sup",null,"o")),s.a.createElement("p",{className:"text-sm"},r("apparentTemperature"),s.a.createElement("sup",null,"o")),s.a.createElement("p",{className:"text-sm font-medium"},Object(b.a)(t.time,t.timezone,"h:mm A")))},E=a(48),v=a(109),g=a(100),j=a(103);t.a=function(e){var t=e.cityName,a=e.weatherCurrent,n=e.weatherForecast,u=Object(l.useState)(""),d=Object(c.a)(u,2),f=d[0],x=d[1],p=Object(l.useState)(0),w=Object(c.a)(p,2),O=w[0],N=w[1],k=a.time,C=a.timezone,S=function(e){var t=Object.keys(n.days).indexOf(e);N(-1!==t?t:0)};return Object(l.useEffect)((function(){!function(){var e;r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:Object(m.a)(a.time)||(e=Object(b.a)(k,C,"MM/DD/YYYY"),Object(o.a)(n)||Object(m.a)(n)||(x(n.days[e]?e:""),S(n.days[e]?e:"")));case 1:case"end":return t.stop()}}))}()}),[n]),s.a.createElement(j.a,null,s.a.createElement(l.Fragment,null,Object(o.a)(n.days)||Object(o.a)(f)?s.a.createElement("div",{className:"mb-3"},Object(o.a)(n.days)?s.a.createElement(g.a,{errorMessage:"No forecast data available for this city!",showCloseBtn:!1}):s.a.createElement(E.a,{loaderText:"Fetching 7 days weather forecast for ".concat(t)})):s.a.createElement(l.Fragment,null,s.a.createElement("div",{className:"sm:hidden pb-3"},n.timeFrames[f]?s.a.createElement(i.a,Object(v.a)("time"),n.timeFrames[f].map((function(e,t){return s.a.createElement(y,{Timeframe:e,key:t})}))):s.a.createElement(g.a,{errorMessage:"No hourly forecast available for ".concat(f)})),s.a.createElement("div",{className:"hidden sm:flex sm:pb-3 sm:mb-4"},n.timeFrames[f]?s.a.createElement(i.a,Object(v.a)("time","tablet"),n.timeFrames[f].map((function(e,t){return s.a.createElement(y,{Timeframe:e,key:t})}))):s.a.createElement(g.a,{errorMessage:"No hourly forecast available for ".concat(f)})),s.a.createElement("div",{className:"flex flex-col mt-4 sm:mt-0 sm:flex-row w-full rounded"},Object.keys(n.days).map((function(e,t){return s.a.createElement(h,{day:n.days[e],key:t,index:t,selectedIndex:O,selectedDay:function(){return function(e){x(e),S(e)}(e)}})}))))))}},176:function(e,t,a){"use strict";a.r(t);var n=a(94),r=a.n(n),c=a(104),l=a(49),s=a(1),m=a.n(s),o=a(101),i=a(116),u=a(118),d=a(113),f=a(91),b=a(172),x=a(174),p=a(115),h=a(109),y=a(13),E=function(e){return(!Object(b.a)(e.photos)||!Object(f.a)(e.photos))&&e.photos.length>0},v=function(e){return function(e){var t=(E(e)?e.photos[0]:{mobile:"",web:""}).image,a=E(e)?e.photos[0].attribution:{photographer:"",site:"",source:""};return{image:t,photographer:a.photographer,site:a.site,source:a.source}}(e).image},g={background:"rgba(0,0,0,0.7)",borderTopLeftRadius:"1rem",borderTopRightRadius:"1rem"},j=function(e){var t=e.favorite,a=e.favoriteSelected,n=e.index,r=e.selectedIndex,c=Object(s.useContext)(y.a),l=c.theme,o=c.colorTheme;return m.a.createElement("div",{className:"relative w-full h-16"},E(t.urbanArea)?m.a.createElement(s.Fragment,null,m.a.createElement("img",{src:v(t.urbanArea).web,alt:"city",className:"h-full w-full object-cover object-center rounded-2xl"})):null,m.a.createElement("div",{className:"".concat(E(t.urbanArea)?"absolute top-0 left-0 right-0 bottom-0 text-light ".concat(n===r?"sm:shadow-outline":"sm:outline-none"):"h-16 text-".concat(o," bg-").concat(l," hover:bg-").concat(o," hover:text-").concat(l," border ").concat(n===r?"sm:border-teal-600":"sm:border-".concat(o))," pt-5 lg:pt-1/2 font-semibold rounded-2xl cursor-pointer text-center justify-center"),style:E(t.urbanArea)?g:null,onClick:a},t.address.cityName.split(", ")[0]))},w=a(48),O=a(100),N=a(8),k=a(114);t.default=function(){var e=Object(s.useContext)(o.a).favorites,t=Object(s.useContext)(y.a),a=t.theme,n=t.colorTheme,E=Object(s.useState)({}),v=Object(l.a)(E,2),g=v[0],C=v[1],S=Object(s.useState)({}),F=Object(l.a)(S,2),T=F[0],z=F[1],M=Object(s.useState)(!1),A=Object(l.a)(M,2),I=A[0],Y=A[1],D=Object(s.useState)(null),B=Object(l.a)(D,2),J=B[0],R=B[1],W=Object(s.useRef)(null),H=Object(s.useRef)(0),U=function(){if(Object(f.a)(g)||Object(b.a)(g))return!1;var e=g.address.cityName;return!Object(f.a)(e)&&!Object(b.a)(e)&&"undefined, undefined, undefined"!==e},L=function(t){e[t]&&(Object(k.a)("favorites",e[t].address.cityName),C(Object(c.a)({},e[t]))),R(t)},P=function(){return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:if(Object(b.a)(g)||!Object.keys(g).length){e.next=4;break}return Y(!0),e.next=4,r.a.awrap(Object(d.a)(g).then((function(e){Object(f.a)(e)||Object(b.a)(e)||(z((function(t){return Object(c.a)({},t,{},e)})),_())})).catch((function(e){return N.a(e)})).finally((function(){return Y(!1)})));case 4:case"end":return e.stop()}}))},_=function(){var e;e=W,window.scrollTo(0,e.current.offsetTop)};return Object(s.useEffect)((function(){P(),Object(f.a)(g)||Object(b.a)(g)||(Object(b.a)(Object(x.a)(e,(function(e){return e.address.cityName===g.address.cityName})))?L(J):e.length>H.current&&L(e.length-1)),H.current=e.length;var t=setInterval((function(){P()}),36e5);return function(){clearInterval(t)}}),[g,e]),m.a.createElement(s.Fragment,null,e.length>0?m.a.createElement("div",{className:"bg-".concat(a," pt-10 pb-24 mb-0")},m.a.createElement("p",{className:"text-center font-bold text-2xl text-".concat(n)},"Favorites"),m.a.createElement("div",{className:"sm:hidden px-5 py-5"},m.a.createElement(p.a,Object.assign({},Object(h.a)("favorite"),{slideIndex:J,afterSlide:function(e){return L(e)}}),e.map((function(e,t){return m.a.createElement(j,{key:e.latlong,favorite:e,index:t,selectedIndex:J,favoriteSelected:function(){return L(t)}})})))),m.a.createElement("div",{className:"hidden sm:flex justify-center items-center"},m.a.createElement("div",{className:"sm:w-5/6 xl:max-w-6xl px-5 py-5"},m.a.createElement("div",{className:"flex sm:flex-row flex-wrap justify-center"},e.map((function(e,t){return m.a.createElement("div",{className:"m-2 sm:w-1/2 md:w-1/4",key:e.latlong},m.a.createElement(j,{key:e.latlong,favorite:e,index:t,selectedIndex:J,favoriteSelected:function(){return L(t)}}))}))))),m.a.createElement("div",{ref:W},Object(f.a)(T.weatherCurrent)||Object(b.a)(T.weatherCurrent)?m.a.createElement(s.Fragment,null,I?m.a.createElement(w.a,{loaderText:"Fetching weather forecast ".concat(U()?"for ".concat(g.address.cityName):""," \ud83d\ude0e")}):m.a.createElement("div",null,U()?m.a.createElement("div",{className:"flex justify-center"},m.a.createElement("div",{className:"sm:w-full lg:w-2/3 xl:w-1/2"},m.a.createElement(O.a,{errorMessage:"Something went wrong. Failed to fetch weather forecast ".concat(U()?"for ".concat(g.address.cityName):"","! \ud83d\ude22")}))):null)):m.a.createElement(s.Fragment,null,m.a.createElement("div",{className:"flex justify-center px-5 pt-10"},m.a.createElement("div",{className:"sm:w-full lg:w-5/6 xl:max-w-6xl border border-".concat(n," bg-{theme} text-").concat(n," rounded-t-2xl shadow-lg")},m.a.createElement(i.a,{weatherCurrent:T.weatherCurrent,address:g.address,latlong:g.latlong,urbanArea:g.urbanArea}),m.a.createElement(u.a,{cityName:g.address.cityName,weatherCurrent:T.weatherCurrent,weatherForecast:T.weatherForecast}))),m.a.createElement("p",{className:"mx-auto text-center pt-2 pb-10 text-xs font-light text-".concat(n," bg-").concat(a)},"Powered by\xa0",m.a.createElement("a",{href:"https://darksky.net/poweredby/",target:"_blank",rel:"noreferrer noopener",className:"link z-0 font-medium hover:text-".concat(a),onClick:function(){return Object(k.a)("powered-by","Dark Sky")}},"Dark Sky")),m.a.createElement("div",{className:"bg-".concat(a)},g.urbanArea.slug?m.a.createElement("div",{className:"mx-auto text-center pb-5"},m.a.createElement("p",null,m.a.createElement("a",{href:"https://teleport.org/cities/".concat(g.urbanArea.slug),target:"_blank",rel:"noreferrer noopener",className:"hover:no-underline",onClick:function(){return Object(k.a)("explore-life",g.urbanArea.name)}},m.a.createElement("button",{className:"bg-".concat(n," text-").concat(a," font-semibold py-3 px-6 rounded-full capitalize")},"Explore life in ",g.urbanArea.name))),m.a.createElement("p",{className:"py-1 text-xs font-light text-".concat(n)},"Powered by\xa0",m.a.createElement("a",{href:"https://teleport.org/",target:"_blank",rel:"noreferrer noopener",className:"link z-0 font-medium hover:text-".concat(a),onClick:function(){return Object(k.a)("powered-by","Teleport")}},"Teleport"))):null)))):null)}},95:function(e,t,a){"use strict";var n=a(30),r=a.n(n);t.a=function(e,t,a){return r.a.tz(1e3*e,t).format(a)}},97:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e){return Math.round(5*(e-32)/9)}},98:function(e,t,a){"use strict";var n=a(30),r=a.n(n);t.a=function(e){var t=e.icon,a=e.time,n=e.timezone,c=r()(1e3*a).tz(n).format("H"),l=c>=6&&c<=18?"day":"night";if(t)switch(t){case"clear-day":return"day";case"clear-night":return"night";case"rain":return"".concat(l,"-rain");case"snow":return"".concat(l,"-snow");case"sleet":return"sleet";case"wind":case"fog":return"".concat(l,"-cloudy");case"cloudy":return"cloudy";case"partly-cloudy-day":return"day-cloudy";case"partly-cloudy-night":return"night-cloudy";case"hail":return"hail";case"thunderstorm":return"thunder";case"tornado":return"wi-tornado";default:return"wi-na"}return"wi-na"}},99:function(e,t,a){"use strict";var n=a(1),r=a.n(n),c=a(131);t.a=function(e){var t=e.type;return{"wi-day-fog":r.a.createElement(c.b,null),"wi-night-fog":r.a.createElement(c.m,null),"wi-day-windy":r.a.createElement(c.a,null),"wi-night-windy":r.a.createElement(c.l,null),"wi-tornado":r.a.createElement(c.p,null),"wi-na":r.a.createElement(c.k,null),up:r.a.createElement(c.h,null),"up-right":r.a.createElement(c.j,null),right:r.a.createElement(c.g,null),"down-right":r.a.createElement(c.e,null),down:r.a.createElement(c.c,null),"down-left":r.a.createElement(c.d,null),left:r.a.createElement(c.f,null),"up-left":r.a.createElement(c.i,null),sunrise:r.a.createElement(c.n,null),sunset:r.a.createElement(c.o,null)}[t]||r.a.createElement(c.k,null)}}}]);
//# sourceMappingURL=6.b7667df8.chunk.js.map