(this["webpackJsonpweather-react"]=this["webpackJsonpweather-react"]||[]).push([[1],{128:function(e,t,a){"use strict";var n=a(31),r=a.n(n);t.a=function(e,t,a){return r.a.tz(1e3*e,t).format(a)}},145:function(e,t,a){"use strict";var n=a(42),r=a.n(n),l=a(137),c=a(51),s=a(55),m=a.n(s),o=a(139),i=a.n(o),u=a(128),d=a(9),f=a(133),x=a(127);i()(m.a,{retryDelay:i.a.exponentialDelay});var b=function(e){return"".concat(f.a,"/forecast/coords/").concat(e,"?extend=hourly&exclude=minutely,flags")},p=function(){var e=Object(c.a)(r.a.mark((function e(t){var a,n,c,s,o,i,f,p;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.latlong,n={},c={},s={},!Object(x.a)(a)){e.next=15;break}return e.prev=5,e.next=8,m.a.get(b(a));case 8:o=e.sent.data,Object(x.a)(o)&&(i=o.timezone,n=Object(l.a)({timezone:i},o.currently,{sunrise:o.daily.data[0].sunriseTime,sunset:o.daily.data[0].sunsetTime}),f={},o.hourly.data.forEach((function(e){var t=Object(u.a)(e.time,i,"MM/DD/YYYY");Object.keys(f).includes(t)?f[t].push(Object(l.a)({timezone:i},e)):f[t]=[Object(l.a)({timezone:i},e)]})),p={},o.daily.data.forEach((function(e){var t=Object(u.a)(e.time,i,"MM/DD/YYYY");p[t]=Object(l.a)({timezone:i},e)})),c={timeFrames:f,days:p},Object(x.a)(o.alerts)&&(s=Object(l.a)({timezone:i},o.alerts[0]))),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),d.a(e.t0);case 15:return e.abrupt("return",{weatherCurrent:n,weatherForecast:c,alert:s});case 16:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(t){return e.apply(this,arguments)}}();t.a=p},146:function(e,t,a){"use strict";t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"mobile";return{width:"100%",slidesToShow:"time"===e?"tablet"===t?8:3:1,slidesToScroll:"time"===e?"tablet"===t?8:3:1,initialSlideHeight:"time"===e?100:200,slideWidth:"time"===e?"tablet"===t?1:.95:1,speed:1e3,easing:"easeSinInOut",defaultControlsConfig:{prevButtonStyle:{display:"none"},nextButtonStyle:{display:"none"},pagingDotsStyle:{fill:"#cfd9df",display:"flex",position:"relative",top:"day"===e?"25px":"35px",margin:"10px 5px"}}}}},148:function(e,t,a){"use strict";var n=a(30);t.a=function(e,t){switch(e){case"favorites":Object(n.a)({category:"Favorites",action:"Select Favorite",label:t});break;case"explore-life":Object(n.a)({category:"Explore Life",action:"Click on Explore Life",label:t});break;case"powered-by":Object(n.a)({category:"Powered By",action:"Click on Powered By",label:t})}}},150:function(e,t,a){"use strict";var n=a(137),r=a(1),l=a.n(r),c=a(14),s=a(53),m=a(31),o=a.n(m),i=function(e,t,a){return"sunrise"===e||"sunset"===e?o()(1e3*t).tz(a).format("H:mm"):o()().tz(a).format("H:mm")},u=function(e,t){var a=e.split(":")[0],n=t.split(":")[0];return Number(a)===Number(n)-1||Number(a)===Number(n)},d=function(e){var t=e.icon,a=e.timezone,n=e.sunrise,r=e.sunset,l=i("sunrise",n,a),c=i("sunset",r,a),m=i("hour",0,a),o=function(e,t,a){var n=e.split(":"),r=Object(s.a)(n,2),l=r[0],c=r[1],m=t.split(":"),o=Object(s.a)(m,2),i=o[0],u=o[1],d=a.split(":"),f=Object(s.a)(d,2),x=f[0],b=f[1];return l===i||l===x?Number(c)>=Number(u)||Number(c)<Number(b)?"day":"night":Number(l)>Number(i)&&Number(l)<Number(x)?"day":"night"}(m,l,c),d=u(m,l),f=u(m,c);if(t)switch(t){case"clear-day":return f?"dusk":d?"dawn":"clear-day";case"clear-night":return f?"dusk":d?"dawn":"clear-night";case"rain":case"snow":case"sleet":return"overcast-".concat(o);case"wind":return"cloudy-".concat(o);case"fog":return"overcast-".concat(o);case"cloudy":case"partly-cloudy-day":case"partly-cloudy-night":return"cloudy-".concat(o);case"hail":return"overcast-".concat(o);case"thunderstorm":return"thunderstorm";case"tornado":return"tornado";default:return"clear-day"}return"clear-day"},f=a(151),x=a(130),b=a(125),p=a(124),y=a(30),h=a(25),E=function(e){var t=e.address,a=e.latlong,n=e.weatherCurrent,c=Object(r.useContext)(x.a).updateFavorites,m=Object(r.useState)(""),i=Object(s.a)(m,2),u=i[0],d=i[1],E=Object(r.useState)(""),w=Object(s.a)(E,2),g=w[0],v=w[1],N=function(e,t){Object(y.a)({category:"Favorite City",action:"".concat(e," city"),label:t})},j=Object(r.useRef)(),O=function(){return!!localStorage.getItem("favorites")&&JSON.parse(localStorage.getItem("favorites")).filter((function(e){return e.address.cityName===t.cityName})).length>0},k=function(e){d(Object(b.a)(e)?"":e.format("MMMM Do, YYYY")),v(Object(b.a)(e)?"":e.format("dddd h:mm A")),j.current=e||null};return Object(r.useEffect)((function(){k(o()(1e3*n.time).tz(n.timezone));var e=setInterval((function(){if(n.time){var e=o.a.tz(j.current,n.timezone).add(1,"s");k(e)}}),1e3);return function(){clearInterval(e)}}),[n]),l.a.createElement("div",{className:"flex justify-between items-start"},l.a.createElement("div",{className:"pt-4 px-4"},l.a.createElement("p",{className:"font-bold"},t.cityName),l.a.createElement("div",{className:"sm:flex-col md:flex md:flex-row font-light"},Object(p.a)(u)||Object(p.a)(g)?null:l.a.createElement(r.Fragment,null,l.a.createElement("p",null,u,l.a.createElement("span",{className:"invisible md:visible"},"\xa0|\xa0")),l.a.createElement("p",null,g)))),l.a.createElement("div",{className:"mt-6 mr-6 cursor-pointer text-2xl",title:O()?"Remove this city from favorites":"Favorite this city",onClick:function(){if(localStorage.getItem("favorites")){var e=JSON.parse(localStorage.getItem("favorites")),n=e.filter((function(e){return e.address.cityName===t.cityName}));if(n.length){var r=e.findIndex((function(e){return e.address.cityName===n[0].address.cityName}));if(-1!==r){var l=Object(f.a)(e);l.splice(r,1),localStorage.setItem("favorites",JSON.stringify(l)),N("remove",t.cityName),c({favorites:l})}}else{var s=[].concat(Object(f.a)(e),[{address:t,latlong:a}]);localStorage.setItem("favorites",JSON.stringify(s)),N("add",t.cityName),c({favorites:s})}}else localStorage.setItem("favorites",JSON.stringify([{address:t,latlong:a}])),N("add",t.cityName),c({favorites:[{address:t,latlong:a}]})}},O()?l.a.createElement(h.b,null):l.a.createElement(h.e,null)))},w=a(134),g=function(e){return e>=0&&e<=45?"up":e>=46&&e<=90?"up-right":e>=91&&e<=135?"right":e>=136&&e<=180?"down-right":e>=181&&e<=225?"down":e>=226&&e<=270?"down-left":e>=271&&e<=315?"left":"up-left"},v=a(128),N=function(e){var t=e.icon,a=e.time,n=e.timezone,r=Object(v.a)(a,n,"H"),l=r>=6&&r<=18?"day":"night";if(t)switch(t){case"clear-day":return"day";case"clear-night":return"night";case"rain":return"".concat(l,"-rain");case"snow":return"".concat(l,"-snow");case"sleet":return"sleet";case"wind":case"fog":return"".concat(l,"-cloudy");case"cloudy":return"cloudy";case"partly-cloudy-day":return"day-cloudy";case"partly-cloudy-night":return"night-cloudy";case"hail":return"hail";case"thunderstorm":return"thunder";case"tornado":return"wi-tornado";default:return"wi-na"}return"wi-na"},j=function(e){return Math.round(5*(e-32)/9)},O=a(144),k=a(166),C=function(e){var t=e.type;return{"wi-day-fog":l.a.createElement(k.b,null),"wi-night-fog":l.a.createElement(k.m,null),"wi-day-windy":l.a.createElement(k.a,null),"wi-night-windy":l.a.createElement(k.l,null),"wi-tornado":l.a.createElement(k.p,null),"wi-na":l.a.createElement(k.k,null),up:l.a.createElement(k.h,null),"up-right":l.a.createElement(k.j,null),right:l.a.createElement(k.g,null),"down-right":l.a.createElement(k.e,null),down:l.a.createElement(k.c,null),"down-left":l.a.createElement(k.d,null),left:l.a.createElement(k.f,null),"up-left":l.a.createElement(k.i,null),sunrise:l.a.createElement(k.n,null),sunset:l.a.createElement(k.o,null)}[t]||l.a.createElement(k.k,null)},F=a(54),S=function(e){var t=e.weatherCurrent,a=Object(r.useContext)(w.a),n=a.weatherUnit,c=a.updateWeatherUnit,s=function(e){Object(y.a)({category:"Weather Unit",action:"Set Unit",label:e}),c(e)},m=function(e){return"F"===n?Math.round(t["".concat(e)]):j(t["".concat(e)])};return l.a.createElement(r.Fragment,null,l.a.createElement("div",{className:"sm:flex-col md:flex md:flex-row justify-between my-2 px-6 sm:mt-5 sm:mb-5 sm:px-4"},l.a.createElement("div",{className:"flex-col sm:w-full lg:w-1/2"},l.a.createElement("div",{className:"flex flex-row justify-center sm:justify-start sm:items-center"},l.a.createElement("div",{className:"flex flex-col justify-center items-center"},l.a.createElement("div",null,N(t).startsWith("wi")?l.a.createElement("p",{className:"text-6xl sm:mx-2 mt-2",title:t.summary},l.a.createElement(C,{type:N(t)})):l.a.createElement("img",{src:"".concat(F.a,"/weather/").concat(N(t),".svg"),alt:"icon",title:t.summary,className:"-mt-2 -ml-4 sm:mx-0 w-32 h-32 object-contain"})),l.a.createElement("p",{className:"hidden sm:flex sm:flex-no-wrap font-medium -mt-2 ml-3 capitalize"},t.summary)),l.a.createElement("div",{className:"flex justify-start items-center sm:-mt-3 sm:ml-3"},l.a.createElement("div",null,l.a.createElement("span",{className:"text-6xl font-bold"},m("temperature"))),l.a.createElement("p",{className:"-mt-8 text-3xl"},l.a.createElement("sup",null,"o")),l.a.createElement("div",{className:"-mt-10 mx-2 text-xl"},l.a.createElement("span",{className:"cursor-pointer ".concat("C"===n?"font-bold border-b border-light":"font-light opacity-75"),title:"Celcius",onClick:function(){return s("C")}},"C"),l.a.createElement("span",{className:"mx-1 opacity-25"},"|"),l.a.createElement("span",{className:"cursor-pointer ".concat("F"===n?"font-bold border-b border-light":"font-light opacity-75"),title:"Fahrenheit",onClick:function(){return s("F")}},"F"))))),l.a.createElement("div",{className:"flex flex-col justify-center items-center sm:mt-6 sm:w-full lg:w-1/2"},l.a.createElement("p",{className:"sm:hidden font-medium capitalize text-2xl -mt-2 mb-2"},t.summary),l.a.createElement("div",{className:"text-sm sm:text-lg ml-8"},l.a.createElement("div",{className:"flex flex-row sm:my-2"},l.a.createElement("p",{className:"font-light"},"Humidity:"),"\xa0",l.a.createElement("p",{className:"mx-1 font-bold"},Math.round(t.humidity)),l.a.createElement("p",{className:"text-sm mt-1"},l.a.createElement(O.a,null))),l.a.createElement("div",{className:"flex items-center sm:my-2"},l.a.createElement("p",null,l.a.createElement("span",{className:"font-light"},"Wind:"),"\xa0",l.a.createElement("span",{className:"font-bold"},function(){return"F"===n?"".concat(Math.round(t.windSpeed)," mph"):"".concat((e=t.windSpeed,Math.round(1.6*e))," kmph");var e}()," ")),l.a.createElement("p",{className:"text-3xl"},l.a.createElement(C,{type:g(t.windBearing)}))),l.a.createElement("p",null,l.a.createElement("span",{className:"font-light sm:my-2"},"Feels like:"),"\xa0",l.a.createElement("span",{className:"font-bold"},m("apparentTemperature")),l.a.createElement("sup",null,"o"))))))},z=a(52),M=a(138),T=function(e){var t=e.weatherCurrent,a=e.address,n=e.latlong;return l.a.createElement(M.a,null,l.a.createElement(r.Fragment,null,a&&t?l.a.createElement("div",null,l.a.createElement(E,{address:a,latlong:n,weatherCurrent:t}),l.a.createElement(S,{weatherCurrent:t})):l.a.createElement(z.a,null)))},Y=a(42),D=a.n(Y),I=a(51),H=a(149),J=function(e){var t=e.day,a=e.index,n=e.selectedIndex,s=Object(r.useContext)(w.a).weatherUnit,m=Object(r.useContext)(c.a),o=m.theme,i=m.colorTheme,u=function(e){return"F"===s?Math.round(t["temperature".concat(e)]):j(t["temperature".concat(e)])};return l.a.createElement("div",{className:"md:hover:bg-".concat(i," md:hover:text-").concat(o," items-center text-center sm:flex-1 sm:py-1 sm:pb-3 cursor-pointer  ").concat(a===n?"bg-".concat(i," text-").concat(o):""),onClick:function(){e.selectedDay({day:t})}},l.a.createElement("div",{className:"flex flex-row flex-no-wrap sm:flex-col sm:flex-wrap justify-around items-center px-2"},l.a.createElement("p",{className:"flex w-1/6 sm:w-full sm:justify-center text-base font-semibold"},Object(v.a)(t.time,t.timezone,"ddd")),l.a.createElement("div",{className:"flex w-1/6 sm:w-full"},N(t).startsWith("wi")?l.a.createElement("p",{className:"my-1 sm:mt-1 sm:mb-3 mx-auto text-3xl",title:t.summary},l.a.createElement(C,{type:N(t)})):l.a.createElement("img",{src:"".concat(F.a,"/weather/").concat(N(t),".svg"),alt:"icon",title:t.summary,className:"sm:-mt-2 sm:-mb-1 mx-auto w-12 h-12 sm:w-16 sm:h-16 object-contain"})),l.a.createElement("div",{className:"flex flex-row justify-center items-center font-light w-1/4 sm:w-full mt-1 sm:mt-0"},l.a.createElement("p",{className:"mx-2 text-xs sm:text-sm"},u("High"),l.a.createElement("sup",null,"o")),l.a.createElement("p",{className:"mx-2 text-xs"},u("Low"),l.a.createElement("sup",null,"o"))),l.a.createElement("div",{className:"".concat("flex"," flex-row justify-around sm:justify-center sm:flex sm:flex-col w-5/12 sm:w-full font-light mt-1")},l.a.createElement("div",{className:"flex flex-row justify-center items-center mx-2 sm:my-1 text-xs sm:text-sm"},l.a.createElement("p",{className:"text-xl lg:text-2xl text-sun mr-2 md:mr-3",title:"sunrise"},l.a.createElement(C,{type:"sunrise"})),l.a.createElement("p",null,Object(v.a)(t.sunriseTime,t.timezone,"h:mm"))),l.a.createElement("div",{className:"flex flex-row justify-center items-center mx-2 sm:my-1 text-xs sm:text-sm"},l.a.createElement("p",{className:"text-xl lg:text-2xl text-sun mr-2 md:mr-1",title:"sunset"},l.a.createElement(C,{type:"sunset"})),l.a.createElement("p",null,Object(v.a)(t.sunsetTime,t.timezone,"HH:mm"))))))},W=function(e){var t=e.Timeframe,a=Object(r.useContext)(w.a).weatherUnit,n=Object(r.useContext)(c.a).colorTheme,s=function(e){return"F"===a?Math.round(t["".concat(e)]):j(t["".concat(e)])};return l.a.createElement("div",{className:"border-none flex flex-col justify-start items-center mx-3 mb-3 w-full font-light text-".concat(n," md:text-light")},l.a.createElement("div",null,N(t).startsWith("wi")?l.a.createElement("p",{className:"text-5xl mt-4",title:t.summary},l.a.createElement(C,{type:N(t)})):l.a.createElement("img",{src:"".concat(F.a,"/weather/").concat(N(t),".svg"),alt:"icon",title:t.summary,className:"w-16 h-16 object-contain"})),l.a.createElement("p",{className:"text-base pb-1"},s("temperature"),l.a.createElement("sup",null,"o")),l.a.createElement("p",{className:"text-xs pb-1"},s("apparentTemperature"),l.a.createElement("sup",null,"o")),l.a.createElement("p",{className:"text-sm font-medium"},Object(v.a)(t.time,t.timezone,"h:mm A")))},B=a(146),U=a(129),R=function(e){var t=e.cityName,a=e.weatherCurrent,n=e.weatherForecast,c=Object(r.useState)(""),m=Object(s.a)(c,2),o=m[0],i=m[1],u=Object(r.useState)(0),d=Object(s.a)(u,2),f=d[0],x=d[1],y=a.time,h=a.timezone,E=function(){var e=Object(I.a)(D.a.mark((function e(){var t;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(b.a)(a.time)||(t=Object(v.a)(y,h,"MM/DD/YYYY"),Object(p.a)(n)||Object(b.a)(n)||(i(n.days[t]?t:""),w(n.days[t]?t:"")));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(e){var t=Object.keys(n.days).indexOf(e);x(-1!==t?t:0)};return Object(r.useEffect)((function(){E()}),[n]),l.a.createElement(M.a,null,l.a.createElement(r.Fragment,null,Object(p.a)(n.days)||Object(p.a)(o)?l.a.createElement("div",{className:"mb-3"},Object(p.a)(n.days)?l.a.createElement(U.a,{errorMessage:"No forecast data available for this city!",showCloseBtn:!1}):l.a.createElement(z.a,{loaderText:"Fetching 7 days weather forecast for ".concat(t)})):l.a.createElement(r.Fragment,null,l.a.createElement("div",{className:"sm:hidden pb-3"},n.timeFrames[o]?l.a.createElement(H.a,Object(B.a)("time"),n.timeFrames[o].map((function(e,t){return l.a.createElement(W,{Timeframe:e,key:t})}))):l.a.createElement(U.a,{errorMessage:"No hourly forecast available for ".concat(o)})),l.a.createElement("div",{className:"hidden sm:flex sm:pb-3 sm:mb-4"},n.timeFrames[o]?l.a.createElement(H.a,Object(B.a)("time","tablet"),n.timeFrames[o].map((function(e,t){return l.a.createElement(W,{Timeframe:e,key:t})}))):l.a.createElement(U.a,{errorMessage:"No hourly forecast available for ".concat(o)})),l.a.createElement("div",{className:"flex flex-col mt-4 sm:mt-0 sm:flex-row w-full rounded"},Object.keys(n.days).map((function(e,t){return l.a.createElement(J,{day:n.days[e],key:t,index:t,selectedIndex:f,selectedDay:function(){return function(e){i(e),w(e)}(e)}})}))))))},A=a(148),L=(a(172),function(e){var t=e.alert,a=t.timezone,n=t.title,s=t.time,m=t.expires,o=t.description,i=t.uri,u=Object(r.useContext)(c.a),d=u.theme,f=u.colorTheme,x=Object(v.a)(s,a,"dddd h:mm A"),b=Object(v.a)(m,a,"dddd h:mm A");return l.a.createElement("div",{className:"flex flex-col justify-center items-center"},l.a.createElement("div",{className:"sm:w-full lg:w-3/4 xl:max-w-5xl"},l.a.createElement("div",{className:"bg-".concat(d," border-t-4 border border-red-700 rounded-lg text-").concat(f," px-3 py-3 shadow-xl"),role:"alert"},l.a.createElement("div",{className:"flex"},l.a.createElement("div",{className:"py-1 px-2"},l.a.createElement(h.a,{className:"text-red-700 text-xl"})),l.a.createElement("div",null,l.a.createElement("div",{className:"flex flex-row justify-between items-center"},l.a.createElement("p",{className:"font-bold"},n),l.a.createElement("p",{className:"font-semibold text-xs"},l.a.createElement("span",null,x),"\xa0",l.a.createElement("span",null,"-"),"\xa0",l.a.createElement("span",null,b))),l.a.createElement("p",{className:"text-sm lowercase py-1"},o),l.a.createElement("a",{href:i,target:"_blank",rel:"noreferrer noopener",className:"link z-0 text-xs font-medium hover:text-".concat(d)},"View Details"))))))});t.a=function(e){var t=e.weatherCurrent,a=e.weatherForecast,s=e.alert,m=e.address,o=e.latlong,i=Object(r.useContext)(c.a),u=i.theme,f=i.colorTheme,x={borderTopLeftRadius:"1rem",borderTopRightRadius:"1rem"};return l.a.createElement(r.Fragment,null,l.a.createElement("div",{className:"flex flex-col justify-center items-center lg:px-5 pt-10"},l.a.createElement("div",{className:"sm:w-full lg:w-5/6 xl:max-w-6xl bg-".concat(u," text-").concat(f," border border-").concat(f," md:border-none rounded-t-2xl shadow-lg")},l.a.createElement("div",{className:"relative overflow-hidden"},l.a.createElement("img",{src:"".concat(F.a,"/weather-backgrounds/").concat(d(t),".jpg"),alt:"clear day",className:"w-full object-cover object-center weather-background",style:x}),l.a.createElement("div",null,["rain","snow","sleet","hail"].includes(t.icon)&&l.a.createElement("img",{src:"".concat(F.a,"/weather-backgrounds/").concat("snow"===t.icon?"snow":"rain",".svg"),alt:"clear day",className:"w-full object-cover object-center absolute top-0 right-0 bottom-0 left-0 weather-background",style:x})),l.a.createElement("div",{className:"block md:hidden absolute top-0 bottom-0 left-0 right-0 my-auto mx-auto text-light",style:Object(n.a)({background:"rgba(0,0,0,0.2)"},x)},l.a.createElement(T,{weatherCurrent:t,address:m,latlong:o})),l.a.createElement("div",{className:"hidden md:block absolute top-0 bottom-0 left-0 right-0 my-auto mx-auto text-light",style:Object(n.a)({background:"rgba(0,0,0,0.2)"},x)},l.a.createElement(T,{weatherCurrent:t,address:m,latlong:o}),l.a.createElement(R,{cityName:m.cityName,weatherCurrent:t,weatherForecast:a}))),l.a.createElement("div",{className:"block md:hidden"},l.a.createElement(R,{cityName:m.cityName,weatherCurrent:t,weatherForecast:a})))),l.a.createElement("div",{className:"relative"},l.a.createElement("p",{className:"mx-auto text-center pt-2 pb-10 text-xs font-light text-".concat(f," bg-").concat(u)},"Powered by\xa0",l.a.createElement("a",{href:"https://darksky.net/poweredby/",target:"_blank",rel:"noreferrer noopener",className:"link z-0 font-medium hover:text-".concat(u),onClick:function(){return Object(A.a)("powered-by","Dark Sky")}},"Dark Sky")),Object(p.a)(s)?null:l.a.createElement("div",{className:"my-1"},l.a.createElement(L,{alert:s}))))}},172:function(e,t,a){}}]);
//# sourceMappingURL=1.fafb3938.chunk.js.map