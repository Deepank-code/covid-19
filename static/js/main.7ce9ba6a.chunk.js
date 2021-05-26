(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{457:function(e,t,c){},458:function(e,t,c){},464:function(e,t,c){},465:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(9),n=c.n(a),r=c(61),i=c.n(r),o=c(101),d=c(62),j=c(497),l=c(498),u=c(499),h=c(491),b=c(495),v=(c(162),c(457),c(496)),O=(c(458),c(5));var f=function(e){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(h.a,{className:"card",children:Object(O.jsxs)(b.a,{children:[Object(O.jsx)(v.a,{className:"secheading",color:"primary",variant:"h5",children:e.heading}),Object(O.jsx)("h2",{className:"cases",children:e.cases}),Object(O.jsxs)(v.a,{className:"total",color:"#9c27b0",children:["Total   ",e.total]})]})})})};c(464);var x=function(e){return Object(O.jsxs)("div",{className:"table",children:[e.countries.map((function(e){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.country}),Object(O.jsx)("td",{children:e.cases})]})})),";"]})};var p=function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)("worldwide"),r=Object(d.a)(n,2),v=r[0],p=r[1],m=Object(s.useState)({}),N=Object(d.a)(m,2),g=N[0],y=N[1],w=Object(s.useState)([]),k=Object(d.a)(w,2),S=k[0],W=k[1];Object(s.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){y(e)}))}),[]),Object(s.useEffect)((function(){(function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}}));a(t),W(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var _=function(){var e=Object(o.a)(i.a.mark((function e(t){var c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.target.value,s="worldwide"===c?"https://disease.sh/v3/covid-19/countries/all":"https://disease.sh/v3/covid-19/countries/".concat(c),e.next=4,fetch(s).then((function(e){return e.json()})).then((function(e){p(c),y(e)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return console.log(g),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"app",children:[Object(O.jsxs)("div",{className:"app_left",children:[Object(O.jsxs)("div",{className:"app_header",children:[Object(O.jsx)("div",{className:"heading",children:Object(O.jsx)("h1",{children:"Covid 19 Tracker"})}),Object(O.jsx)(j.a,{children:Object(O.jsxs)(l.a,{className:"menu",variant:"outlined",value:v,onChange:_,children:[Object(O.jsx)(u.a,{value:"worldwide",children:"WorldWide"}),c.map((function(e){return Object(O.jsx)(u.a,{className:"slide",value:e.value,children:e.name})}))]})})]}),Object(O.jsxs)("div",{className:"app_stats",children:[Object(O.jsx)(f,{className:"active",heading:"Active cases",cases:g.todayCases,total:g.cases}),Object(O.jsx)(f,{className:"recov",heading:"Recovery stats",cases:g.todayRecovered,total:g.recovered}),Object(O.jsx)(f,{className:"death",heading:"Death stats",cases:g.todayDeaths,total:g.deaths})]})]}),Object(O.jsx)(h.a,{className:"app_right",children:Object(O.jsxs)(b.a,{children:[Object(O.jsx)("h2",{className:"tableh",children:" Live cases by country"}),Object(O.jsx)(x,{countries:S}),Object(O.jsx)("h3",{children:"WorldWide cases stats"}),Object(O.jsx)("div",{className:"globe"})]})})]})})};n.a.render(Object(O.jsx)(p,{}),document.getElementById("root"))}},[[465,1,2]]]);
//# sourceMappingURL=main.7ce9ba6a.chunk.js.map