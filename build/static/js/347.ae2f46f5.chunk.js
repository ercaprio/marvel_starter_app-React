"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[347],{425:(e,c,t)=>{t.d(c,{A:()=>i});const a=t.p+"static/media/error.42292aa12b6bc303ce99.gif";var n=t(579);const i=()=>(0,n.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:a,alt:"error"})},968:(e,c,t)=>{t.r(c),t.d(c,{default:()=>u});var a=t(216),n=t(43),i=t(502),s=t(425),r=t(897),o=t(579);const l=e=>{let{comic:c}=e;const{title:t,description:n,pageCount:i,thumbnail:s,language:r,price:l}=c,u=(0,a.Zp)();return(0,o.jsxs)("div",{className:"single-comic",children:[(0,o.jsx)("img",{src:s,alt:t,className:"single-comic__img"}),(0,o.jsxs)("div",{className:"single-comic__info",children:[(0,o.jsx)("h2",{className:"single-comic__name",children:t}),(0,o.jsx)("p",{className:"single-comic__descr",children:n}),(0,o.jsx)("p",{className:"single-comic__descr",children:i}),(0,o.jsxs)("p",{className:"single-comic__descr",children:["Language: ",r]}),(0,o.jsx)("div",{className:"single-comic__price",children:l})]}),(0,o.jsx)("div",{onClick:()=>u(-1),className:"single-comic__back",children:"Back to all"})]})},u=()=>{const{comicId:e}=(0,a.g)(),[c,t]=(0,n.useState)(null),{loading:u,error:m,getComic:d,clearError:h}=(0,r.A)();(0,n.useEffect)((()=>{g()}),[e]);const g=()=>{h(),d(e).then(p)},p=e=>{t(e)},b=m?(0,o.jsx)(s.A,{}):null,f=u?(0,o.jsx)(i.A,{}):null,v=u||m||!c?null:(0,o.jsx)(l,{comic:c});return(0,o.jsxs)(o.Fragment,{children:[b,f,v]})}},897:(e,c,t)=>{t.d(c,{A:()=>n});var a=t(43);const n=()=>{const{loading:e,request:c,error:t,clearError:n}=(()=>{const[e,c]=(0,a.useState)(!1),[t,n]=(0,a.useState)(null);return{loading:e,request:(0,a.useCallback)((async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"Content-Type":"application/json"};c(!0);try{const n=await fetch(e,{method:t,body:a,headers:i});if(!n.ok)throw new Error("Could not fetch ".concat(e,", status: ").concat(n.status));const s=await n.json();return c(!1),s}catch(s){throw c(!1),n(s.message),s}}),[]),error:t,clearError:(0,a.useCallback)((()=>n(null)),[])}})(),i="https://gateway.marvel.com:443/v1/public/",s="apikey=33c17539858fd8200918eb1fb94ca45f",r=e=>{var c;return{id:e.id,title:e.title,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",language:(null===(c=e.textObjects[0])||void 0===c?void 0:c.language)||"en-us",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"NOT AVAILABLE"}},o=e=>{let c="";return c=e.description.length>220?e.description.slice(0,220)+"...":e.description,{id:e.id,name:e.name,description:c||"There is no description for this character.",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}};return{loading:e,error:t,clearError:n,getAllCharacters:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:210;return(await c("".concat(i,"characters?limit=9&offset=").concat(e,"}&").concat(s))).data.results.map(o)},getCharacter:async e=>{const t=await c("".concat(i,"characters/").concat(e,"?").concat(s));return o(t.data.results[0])},getAllComics:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:210;return(await c("".concat(i,"comics?limit=8&offset=").concat(e,"}&").concat(s))).data.results.map(r)},getComic:async e=>{const t=await c("".concat(i,"comics/").concat(e,"?").concat(s));return r(t.data.results[0])}}}}}]);
//# sourceMappingURL=347.ae2f46f5.chunk.js.map