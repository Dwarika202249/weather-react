(this["webpackJsonpweather-react"]=this["webpackJsonpweather-react"]||[]).push([[6],{128:function(e,t,a){"use strict";var r=a(125),n=a(175);t.a=function(e){return!Object(r.a)(e)&&!Object(n.a)(e)}},130:function(e,t,a){"use strict";var r=a(1),n=a.n(r),c=a(14);t.a=function(e){var t=Object(r.useContext)(c.a).theme;return n.a.createElement("div",{className:"w-full ml-auto mr-auto h-auto bg-".concat(t," border border-red-400 text-red-700 mt-5 px-4 py-2 rounded relative"),role:"alert"},n.a.createElement("span",{className:"w-5/6 block break-words"},e.errorMessage),e.showCloseBtn&&n.a.createElement("span",{className:"absolute top-0 bottom-0 right-0 ml-3 mr-1 py-3",onClick:e.closeError},n.a.createElement("svg",{className:"fill-current h-6 w-6 text-red-500",role:"button",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},n.a.createElement("title",null,"Close"),n.a.createElement("path",{d:"M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"}))))}},131:function(e,t,a){"use strict";a.d(t,"a",(function(){return x})),a.d(t,"b",(function(){return O}));var r=a(152),n=a(24),c=a.n(n),s=a(31),o=a(137),i=a(132),l=a(133),u=a(136),d=a(135),m=a(1),h=a.n(m),f=a(10),p=a(55),v=a.n(p),b=a(8),y=a(144),g=a(65),w=a(138),E=a(128),j=a(126),x=h.a.createContext(null),O=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),u=0;u<n;u++)l[u]=arguments[u];return(e=t.call.apply(t,[this].concat(l))).updateState=function(t){e.setState(Object(o.a)({},t))},e.updateFavorites=function(t){e.setState(Object(o.a)({},t))},e.state={address:{cityName:"",cityId:""},latlong:"",favorites:[],updateState:e.updateState,updateFavorites:e.updateFavorites},e.formatCoords=function(e,t){return"".concat(e,",").concat(t)},e.updateAddress=function(){var t=Object(s.a)(c.a.mark((function t(a){var r,n,s,o,i,l,u;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={},t.prev=1,t.next=4,v.a.get("".concat(w.a,"/address/coords/").concat(a));case 4:n=t.sent.data.hits,r=n[0],Object(E.a)(r)&&(s=r.city?r.city[0]:"",o=r.administrative?r.administrative[0]:"",i=r.country?r.country:"",l="".concat(Object(y.a)(s)).concat(Object(y.a)(o)).concat(Object(y.a)(i,!1)),u=r.objectID?r.objectID:"",e.updateState({address:{cityName:l,cityId:u},latlong:a})),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),b.a(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}(),e.getIPAddress=Object(s.a)(c.a.mark((function t(){var a,r,n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(g.a)();case 3:a=t.sent,r=a.lat,n=a.lon,Object(j.a)(r)||Object(j.a)(n)||e.updateAddress(e.formatCoords(r,n)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),b.a(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])}))),e.getAddress=Object(s.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:"geolocation"in navigator?navigator.geolocation.getCurrentPosition(function(){var t=Object(s.a)(c.a.mark((function t(a){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=e.formatCoords(a.coords.latitude,a.coords.longitude),e.updateAddress(r);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),(function(t){console.error(t),e.getIPAddress()})):e.getIPAddress();case 1:case"end":return t.stop()}}),t)}))),e.getFavorites=function(){localStorage.getItem("favorites")&&e.setState({favorites:Object(r.a)(JSON.parse(localStorage.getItem("favorites")))})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getAddress(),this.getFavorites()}},{key:"render",value:function(){return h.a.createElement(x.Provider,{value:this.state},this.props.children)}}]),a}(m.Component);x.propTypes={address:f.PropTypes.objectOf(f.PropTypes.string),favorites:f.PropTypes.array,updateState:f.PropTypes.func,updateFavorites:f.PropTypes.func}},134:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return o}));var r=a(52),n=a(1),c=a.n(n),s=c.a.createContext({weatherUnit:"C"}),o=function(e){var t=e.children,a=Object(n.useState)("C"),o=Object(r.a)(a,2),i=o[0],l=o[1];return Object(n.useEffect)((function(){localStorage.getItem("unit")?l(JSON.parse(localStorage.getItem("unit"))):localStorage.setItem("unit",JSON.stringify("C"))}),[]),c.a.createElement(s.Provider,{value:{weatherUnit:i,updateWeatherUnit:function(e){l(e),localStorage.setItem("unit",JSON.stringify(e))}}},t)}},138:function(e,t,a){"use strict";t.a="https://weather-react-api.now.sh"},139:function(e,t,a){"use strict";var r=a(132),n=a(133),c=a(136),s=a(135),o=a(1),i=a.n(o),l=a(130),u=a(8),d=a(127),m=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={hasError:!1,eventId:null},e}return Object(n.a)(a,[{key:"componentDidCatch",value:function(e,t){var a=this;u.c((function(r){r.setExtras(t);var n=u.a(e);a.setState({eventId:n})}))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,this.state.hasError?i.a.createElement("div",{className:"flex"},i.a.createElement("div",{className:"w-1/6"}),i.a.createElement("div",{className:"flex-col w-2/3 justify-center text-center"},i.a.createElement(l.a,{errorMessage:"Something went wrong. Reload the page!"}),i.a.createElement("button",{className:"font-semibold py-3 px-6 rounded-full capitalize text-sun",onClick:function(){return d.b({eventId:e.state.eventId})}},"Report feedback"))):this.props.children)}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),a}(o.Component);t.a=m},144:function(e,t,a){"use strict";var r=a(128);t.a=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return Object(r.a)(e)?"".concat(e).concat(t?", ":""):""}},165:function(e,t,a){},179:function(e,t,a){"use strict";a.r(t),a.d(t,"HomeContainer",(function(){return z}));var r=a(132),n=a(133),c=a(136),s=a(135),o=a(1),i=a.n(o),l=a(24),u=a.n(l),d=a(31),m=a(55),h=a.n(m),f=a(140),p=a.n(f),v=a(156),b=a.n(v),y=(a(165),a(14)),g=function(e){var t=Object(o.useContext)(y.a),a=t.theme,r=t.colorTheme;return i.a.createElement("p",{className:"px-5 py-1 cursor-pointer item text-".concat(r," hover:text-").concat(a," hover:bg-").concat(r),onClick:e.addressSelected},e.address.cityName)},w=a(53),E=a(130),j=a(131),x=a(145),O=a(166),S=function(e){var t=e.type,a=e.color,r={search:i.a.createElement(x.b,null),up:i.a.createElement(O.b,null),down:i.a.createElement(O.a,null)};return i.a.createElement("p",{className:"opacity-75 text-2xl fill-".concat(a)},r[t])},C=function(e){var t=Object(o.useContext)(y.a),a=t.theme,r=t.colorTheme;return i.a.createElement("div",{className:"h-12 mx-5 mt-5"},i.a.createElement("div",{className:"relative"},i.a.createElement("div",{className:"absolute top-0 left-0 ml-5 mt-3"},i.a.createElement(S,{type:"search",color:r})),i.a.createElement("input",{style:{backgroundColor:"".concat("dark"===a?"#3a3a3a":"#e2e8f0"),letterSpacing:"0.05em"},className:"data-hj-whitelist block appearance-none w-full border-none rounded-full shadow py-3 pl-12 pr-6 mb-3 leading-tight focus:outline-none focus:bg-gray-200 truncate text-".concat(r),id:"grid-first-name",type:"text",placeholder:"Type city name to find weather forecast",onChange:e.citySearch,value:e.city}),e.showCaret?i.a.createElement("div",{className:"flex right-0 absolute top-0 mr-4 mt-3 cursor-pointer",onClick:e.caretClicked},e.showAddresses?i.a.createElement(S,{type:"up",color:r}):i.a.createElement(S,{type:"down",color:r})):null))},k=a(8),N=a(32),A=a(144),I=a(138),P=a(128);p()(h.a,{retryDelay:p.a.exponentialDelay});var M=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={showCaret:!1,showAddresses:!1,showLoader:!1,city:"",addresses:[],errorMessage:""},e.debounceAddress=b()(e.getAddresses,1250),e.searchCity=function(t){e.setState({city:t.target.value,errorMessage:""}),e.debounceAddress()},e.toggleAddresses=function(){e.setState((function(e){return{showAddresses:!e.showAddresses}}))},e.setCity=function(){var t=Object(d.a)(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a&&(e.setState({city:a.cityName.split(",")[0],showAddresses:!1}),Object(N.a)({category:"Address",action:"City Search",label:a.cityName}),e.context.updateState({address:a,latlong:a.latlong}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(n.a)(a,[{key:"handleError",value:function(e){this.setState({errorMessage:e})}},{key:"getAddresses",value:function(){var e=Object(d.a)(u.a.mark((function e(){var t,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.city.trim()){e.next=19;break}return e.prev=1,this.setState({showLoader:!0}),t=Object(P.a)(this.context.latlong)?this.context.latlong:"00,00",e.next=6,h.a.get("".concat(I.a,"/places/query/").concat(this.state.city,"/").concat(t));case 6:a=e.sent.data.hits,Object(P.a)(a)?(r=a.map((function(e){var t="".concat(e.locale_names.en?e.locale_names.en[0]:e.locale_names.default[0]),a="".concat(e.administrative?e.administrative[0]:""),r="".concat(e.country.en?e.country.en:e.country.default),n="".concat(Object(A.a)(t)).concat(Object(A.a)(a)).concat(Object(A.a)(r,!1)),c=e._geoloc,s=c.lat,o=c.lng;return{cityName:n,cityId:e.objectID,latlong:"".concat(s,",").concat(o)}})),this.setState({addresses:r,showCaret:!0,showAddresses:!0,errorMessage:""})):(this.setState({showAddresses:!1}),this.handleError("No matching cities found. Try searching with a valid city name!")),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),k.a(e.t0),this.handleError("Something went wrong. Please try again or search with a different city name!");case 14:return e.prev=14,this.setState({showLoader:!1}),e.finish(14);case 17:e.next=20;break;case 19:this.clearState();case 20:case"end":return e.stop()}}),e,this,[[1,10,14,17]])})));return function(){return e.apply(this,arguments)}}()},{key:"clearState",value:function(){this.setState({showCaret:!1,showAddresses:!1,showLoader:!1,addresses:[],errorMessage:""})}},{key:"render",value:function(){var e=this;return i.a.createElement(o.Fragment,null,i.a.createElement("div",{className:"flex justify-center mt-5"},i.a.createElement("div",{className:"w-full sm:w-5/6 md:w-2/3 xl:max-w-5xl"},i.a.createElement(C,{city:this.state.city,showCaret:this.state.showCaret,showAddresses:this.state.showAddresses,citySearch:this.searchCity,caretClicked:this.toggleAddresses}))),i.a.createElement("div",{className:"flex justify-center"},i.a.createElement("div",{className:"w-full sm:w-5/6 md:w-2/3 xl:max-w-5xl"},this.state.showLoader?i.a.createElement(w.a,null):this.state.showAddresses&&i.a.createElement("div",{className:"mx-10 mt-0 border-solid border-2 border-gray-400 rounded-b-xl address-list"},this.state.addresses.map((function(t,a){return i.a.createElement(g,{address:t,key:a,addressSelected:function(){return e.setCity(t)}})}))),this.state.errorMessage.length>0&&i.a.createElement("div",{className:"flex justify-center"},i.a.createElement("div",{className:"w-5/6"},i.a.createElement(E.a,{errorMessage:this.state.errorMessage,showCloseBtn:!0,closeError:function(){e.setState({errorMessage:""})}}))))))}}]),a}(o.Component);M.contextType=j.a;var T=M,F=a(134),D=a(139),L=Object(o.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(10)]).then(a.bind(null,177))})),J=Object(o.lazy)((function(){return Promise.all([a.e(0),a.e(7),a.e(1),a.e(9)]).then(a.bind(null,181))})),z=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return i.a.createElement(o.Fragment,null,i.a.createElement(F.b,null,i.a.createElement(j.b,null,i.a.createElement(T,null),i.a.createElement(D.a,null,i.a.createElement(o.Suspense,{fallback:i.a.createElement(w.a,{loaderText:"Loading components"})},i.a.createElement(L,null),i.a.createElement(J,null))))))}}]),a}(o.Component);z.contextType=y.a;t.default=z}}]);
//# sourceMappingURL=6.0769bb1f.chunk.js.map