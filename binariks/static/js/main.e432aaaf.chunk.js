(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{160:function(e,t,a){},162:function(e,t,a){"use strict";a.r(t);var n,r,o=a(0),c=a.n(o),l=a(16),s=a.n(l),i=(a(161),a(66),a(67),a(32)),u=a(50),m=a(51),d=a(56),h=a(52),p=a(55),v=a(53),f=(a(160),[0,0]),b=function(e){function t(){var e,a;Object(u.a)(this,t);for(var o=arguments.length,c=new Array(o),l=0;l<o;l++)c[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).state={currencies:["EUR","BGN","NZD","ILS","RUB","CAD","USD","PHP","CHF","ZAR","AUD","JPY","TRY","HKD","MYR","THB","HRK","NOK","IDR","DKK","CZK","HUF","GBP","MXN","LTL","KRW","SGD","BRL","PLN","INR","RON","CNY","SEK"],base:"EUR",amount:"",convertTo:"USD",result:"",resultOld:"",date:"",labels:["01-01-2015","13-05-2019"],datasets:[{label:"Currency exchange rate",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointHitRadius:10,data:f}]},a.handleSelect=function(e){var t;a.setState((t={},Object(i.a)(t,e.target.name,e.target.value),Object(i.a)(t,"result",null),t),a.calc)},a.handleInput=function(e){a.setState({amount:e.target.value,result:null,date:null},a.calc)},a.calc=function(){var e=a.state.amount;e!==isNaN&&(fetch("https://api.exchangeratesapi.io/2015-01-01?base=".concat(a.state.base)).then(function(e){return e.json()}).then(function(t){var r=(t.rates[a.state.convertTo]*e).toFixed(4);a.setState({resultOld:r}),n=r,f[0]=n}),fetch("https://api.exchangeratesapi.io/latest?base=".concat(a.state.base)).then(function(e){return e.json()}).then(function(t){var n=(t.rates[a.state.convertTo]*e).toFixed(4);a.setState({result:n}),r=n,f[1]=r}))},a.swap=function(e){var t=a.state.base,n=a.state.convertTo;e.preventDefault(),a.setState({convertTo:t,base:n,result:null},a.calc)},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.currencies,a=e.base,n=e.amount,r=e.convertTo,o=e.result;e.resultOld,e.date;return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"header"},c.a.createElement("h1",{className:"header__title"},"Currency converter app")),c.a.createElement("div",{className:"calc"},c.a.createElement("form",{className:"form"},c.a.createElement("input",{type:"number",value:n,onChange:this.handleInput,className:"form__input form__input_number",placeholder:"Input amount"}),c.a.createElement("select",{name:"base",value:a,onChange:this.handleSelect,className:"form__select"},t.map(function(e){return c.a.createElement("option",{key:e,value:e},e)}))),c.a.createElement("div",{className:"swap"},c.a.createElement("h1",{onClick:this.swap,className:"swap__symbol"},"\u21c6")),c.a.createElement("form",{className:"form"},c.a.createElement("input",{disabled:!0,value:""===n?"0":null===o?"Calculating...":o,className:"form__input"}),c.a.createElement("select",{name:"convertTo",value:r,onChange:this.handleSelect,className:"form__select"},t.map(function(e){return c.a.createElement("option",{key:e,value:e},e)})))),c.a.createElement("div",{className:"container_center"},c.a.createElement("div",{className:"container__chart"},c.a.createElement("h2",null,"Currency exchange history"),c.a.createElement(v.a,{data:this.state}))))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},57:function(e,t,a){e.exports=a(162)},67:function(e,t,a){}},[[57,1,2]]]);
//# sourceMappingURL=main.e432aaaf.chunk.js.map