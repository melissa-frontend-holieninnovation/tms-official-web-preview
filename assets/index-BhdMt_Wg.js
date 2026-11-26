const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/NextStopMapCanvas-DqwRXS87.js","assets/client-DsmHrVTZ.js","assets/FleetImpact-W7WFJknD.js","assets/FleetImpact-Bz85omOT.css","assets/check-BkDh3qQO.js"])))=>i.map(i=>d[i]);
var bm=Object.defineProperty;var wm=(t,e,n)=>e in t?bm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var yt=(t,e,n)=>wm(t,typeof e!="symbol"?e+"":e,n);import{c as ct,r as S,g as Ko,R as W,j as s,p as ut,b as km}from"./client-DsmHrVTZ.js";import{g as th,h as Sm,j as jm,k as Em,L as _m,l as Tm,m as Ue,n as B,o as f,U as E,p as Go,q as Ir,E as Vs,r as De,s as Zo,t as Ze,b as ds,v as ht,w as tn,x as nn,u as Ws,S as qs,y as Yo,H as Tn,z as Im,O as nt,A as us,a as Rm,P as Cm,c as Om,d as Am,D as Pm,e as Nm,C as Lm,F as $m,G as nh,N as Dm,R as rh,I as Jo,J as Mm,K as pt,M as Fm,Q as Um,T as Bm,B as zm,V as Hm,W as je}from"./FleetImpact-W7WFJknD.js";import{A as Xo,C as Ks}from"./check-BkDh3qQO.js";const Qo=ct("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),Vm=ct("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),Wm=ct("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]),qm=ct("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]),Km=ct("FilePlus",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"12",x2:"12",y1:"18",y2:"12",key:"1tsf04"}],["line",{x1:"9",x2:"15",y1:"15",y2:"15",key:"110plj"}]]),Gm=ct("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),Zm=ct("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]),Ym=ct("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),Vl=ct("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]),Jm=ct("ShieldCheck",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]),Xm=ct("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]),Qm=ct("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]),eg=ct("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);function ih(){const t=S.useRef(!1);return th(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function tg(){const t=ih(),[e,n]=S.useState(0),r=S.useCallback(()=>{t.current&&n(e+1)},[e]);return[S.useCallback(()=>Sm.postRender(r),[r]),e]}class ng extends S.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function rg({children:t,isPresent:e}){const n=S.useId(),r=S.useRef(null),i=S.useRef({width:0,height:0,top:0,left:0});return S.useInsertionEffect(()=>{const{width:a,height:o,top:l,left:c}=i.current;if(e||!r.current||!a||!o)return;r.current.dataset.motionPopId=n;const d=document.createElement("style");return document.head.appendChild(d),d.sheet&&d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${o}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(d)}},[e]),S.createElement(ng,{isPresent:e,childRef:r,sizeRef:i},S.cloneElement(t,{ref:r}))}const ya=({children:t,initial:e,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:o})=>{const l=jm(ig),c=S.useId(),d=S.useMemo(()=>({id:c,initial:e,isPresent:n,custom:i,onExitComplete:u=>{l.set(u,!0);for(const h of l.values())if(!h)return;r&&r()},register:u=>(l.set(u,!1),()=>l.delete(u))}),a?void 0:[n]);return S.useMemo(()=>{l.forEach((u,h)=>l.set(h,!1))},[n]),S.useEffect(()=>{!n&&!l.size&&r&&r()},[n]),o==="popLayout"&&(t=S.createElement(rg,{isPresent:n},t)),S.createElement(Em.Provider,{value:d},t)};function ig(){return new Map}function sg(t){return S.useEffect(()=>()=>t(),[])}const Mn=t=>t.key||"";function ag(t,e){t.forEach(n=>{const r=Mn(n);e.set(r,n)})}function og(t){const e=[];return S.Children.forEach(t,n=>{S.isValidElement(n)&&e.push(n)}),e}const el=({children:t,custom:e,initial:n=!0,onExitComplete:r,exitBeforeEnter:i,presenceAffectsLayout:a=!0,mode:o="sync"})=>{const l=S.useContext(_m).forceRender||tg()[0],c=ih(),d=og(t);let u=d;const h=S.useRef(new Map).current,p=S.useRef(u),m=S.useRef(new Map).current,x=S.useRef(!0);if(th(()=>{x.current=!1,ag(d,m),p.current=u}),sg(()=>{x.current=!0,m.clear(),h.clear()}),x.current)return S.createElement(S.Fragment,null,u.map(j=>S.createElement(ya,{key:Mn(j),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:a,mode:o},j)));u=[...u];const y=p.current.map(Mn),b=d.map(Mn),_=y.length;for(let j=0;j<_;j++){const w=y[j];b.indexOf(w)===-1&&!h.has(w)&&h.set(w,void 0)}return o==="wait"&&h.size&&(u=[]),h.forEach((j,w)=>{if(b.indexOf(w)!==-1)return;const v=m.get(w);if(!v)return;const I=y.indexOf(w);let C=j;if(!C){const D=()=>{h.delete(w);const F=Array.from(m.keys()).filter(L=>!b.includes(L));if(F.forEach(L=>m.delete(L)),p.current=d.filter(L=>{const z=Mn(L);return z===w||F.includes(z)}),!h.size){if(c.current===!1)return;l(),r&&r()}};C=S.createElement(ya,{key:Mn(v),isPresent:!1,onExitComplete:D,custom:e,presenceAffectsLayout:a,mode:o},v),h.set(w,C)}u.splice(I,0,C)}),u=u.map(j=>{const w=j.key;return h.has(w)?j:S.createElement(ya,{key:Mn(j),isPresent:!0,presenceAffectsLayout:a,mode:o},j)}),S.createElement(S.Fragment,null,h.size?u:u.map(j=>S.cloneElement(j)))},lg="modulepreload",cg=function(t){return"/tms-official-web-preview/"+t},Wl={},dg=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){let o=function(d){return Promise.all(d.map(u=>Promise.resolve(u).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));i=o(n.map(d=>{if(d=cg(d),d in Wl)return;Wl[d]=!0;const u=d.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${h}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":lg,u||(p.as="script"),p.crossOrigin="",p.href=d,c&&p.setAttribute("nonce",c),document.head.appendChild(p),u)return new Promise((m,x)=>{p.addEventListener("load",m),p.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${d}`)))})}))}function a(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&a(l.reason);return e().catch(a)})};var va,ql;function ug(){if(ql)return va;ql=1;var t=typeof Element<"u",e=typeof Map=="function",n=typeof Set=="function",r=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function i(a,o){if(a===o)return!0;if(a&&o&&typeof a=="object"&&typeof o=="object"){if(a.constructor!==o.constructor)return!1;var l,c,d;if(Array.isArray(a)){if(l=a.length,l!=o.length)return!1;for(c=l;c--!==0;)if(!i(a[c],o[c]))return!1;return!0}var u;if(e&&a instanceof Map&&o instanceof Map){if(a.size!==o.size)return!1;for(u=a.entries();!(c=u.next()).done;)if(!o.has(c.value[0]))return!1;for(u=a.entries();!(c=u.next()).done;)if(!i(c.value[1],o.get(c.value[0])))return!1;return!0}if(n&&a instanceof Set&&o instanceof Set){if(a.size!==o.size)return!1;for(u=a.entries();!(c=u.next()).done;)if(!o.has(c.value[0]))return!1;return!0}if(r&&ArrayBuffer.isView(a)&&ArrayBuffer.isView(o)){if(l=a.length,l!=o.length)return!1;for(c=l;c--!==0;)if(a[c]!==o[c])return!1;return!0}if(a.constructor===RegExp)return a.source===o.source&&a.flags===o.flags;if(a.valueOf!==Object.prototype.valueOf&&typeof a.valueOf=="function"&&typeof o.valueOf=="function")return a.valueOf()===o.valueOf();if(a.toString!==Object.prototype.toString&&typeof a.toString=="function"&&typeof o.toString=="function")return a.toString()===o.toString();if(d=Object.keys(a),l=d.length,l!==Object.keys(o).length)return!1;for(c=l;c--!==0;)if(!Object.prototype.hasOwnProperty.call(o,d[c]))return!1;if(t&&a instanceof Element)return!1;for(c=l;c--!==0;)if(!((d[c]==="_owner"||d[c]==="__v"||d[c]==="__o")&&a.$$typeof)&&!i(a[d[c]],o[d[c]]))return!1;return!0}return a!==a&&o!==o}return va=function(o,l){try{return i(o,l)}catch(c){if((c.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw c}},va}var hg=ug();const pg=Ko(hg);var ba,Kl;function fg(){if(Kl)return ba;Kl=1;var t=function(e,n,r,i,a,o,l,c){if(!e){var d;if(n===void 0)d=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[r,i,a,o,l,c],h=0;d=new Error(n.replace(/%s/g,function(){return u[h++]})),d.name="Invariant Violation"}throw d.framesToPop=1,d}};return ba=t,ba}var mg=fg();const Gl=Ko(mg);var wa,Zl;function gg(){return Zl||(Zl=1,wa=function(e,n,r,i){var a=r?r.call(i,e,n):void 0;if(a!==void 0)return!!a;if(e===n)return!0;if(typeof e!="object"||!e||typeof n!="object"||!n)return!1;var o=Object.keys(e),l=Object.keys(n);if(o.length!==l.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(n),d=0;d<o.length;d++){var u=o[d];if(!c(u))return!1;var h=e[u],p=n[u];if(a=r?r.call(i,h,p,u):void 0,a===!1||a===void 0&&h!==p)return!1}return!0}),wa}var xg=gg();const yg=Ko(xg);var sh=(t=>(t.BASE="base",t.BODY="body",t.HEAD="head",t.HTML="html",t.LINK="link",t.META="meta",t.NOSCRIPT="noscript",t.SCRIPT="script",t.STYLE="style",t.TITLE="title",t.FRAGMENT="Symbol(react.fragment)",t))(sh||{}),ka={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},Yl=Object.values(sh),Gs={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},ah=Object.entries(Gs).reduce((t,[e,n])=>(t[n]=e,t),{}),vt="data-rh",pr={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},fr=(t,e)=>{for(let n=t.length-1;n>=0;n-=1){const r=t[n];if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}return null},vg=t=>{let e=fr(t,"title");const n=fr(t,pr.TITLE_TEMPLATE);if(Array.isArray(e)&&(e=e.join("")),n&&e)return n.replace(/%s/g,()=>e);const r=fr(t,pr.DEFAULT_TITLE);return e||r||void 0},bg=t=>fr(t,pr.ON_CHANGE_CLIENT_STATE)||(()=>{}),Sa=(t,e)=>e.filter(n=>typeof n[t]<"u").map(n=>n[t]).reduce((n,r)=>({...n,...r}),{}),wg=(t,e)=>e.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,r)=>{if(!n.length){const i=Object.keys(r);for(let a=0;a<i.length;a+=1){const l=i[a].toLowerCase();if(t.indexOf(l)!==-1&&r[l])return n.concat(r)}}return n},[]),kg=t=>console&&typeof console.warn=="function"&&console.warn(t),Ur=(t,e,n)=>{const r={};return n.filter(i=>Array.isArray(i[t])?!0:(typeof i[t]<"u"&&kg(`Helmet: ${t} should be of type "Array". Instead found type "${typeof i[t]}"`),!1)).map(i=>i[t]).reverse().reduce((i,a)=>{const o={};a.filter(c=>{let d;const u=Object.keys(c);for(let p=0;p<u.length;p+=1){const m=u[p],x=m.toLowerCase();e.indexOf(x)!==-1&&!(d==="rel"&&c[d].toLowerCase()==="canonical")&&!(x==="rel"&&c[x].toLowerCase()==="stylesheet")&&(d=x),e.indexOf(m)!==-1&&(m==="innerHTML"||m==="cssText"||m==="itemprop")&&(d=m)}if(!d||!c[d])return!1;const h=c[d].toLowerCase();return r[d]||(r[d]={}),o[d]||(o[d]={}),r[d][h]?!1:(o[d][h]=!0,!0)}).reverse().forEach(c=>i.push(c));const l=Object.keys(o);for(let c=0;c<l.length;c+=1){const d=l[c],u={...r[d],...o[d]};r[d]=u}return i},[]).reverse()},Sg=(t,e)=>{if(Array.isArray(t)&&t.length){for(let n=0;n<t.length;n+=1)if(t[n][e])return!0}return!1},jg=t=>({baseTag:wg(["href"],t),bodyAttributes:Sa("bodyAttributes",t),defer:fr(t,pr.DEFER),encode:fr(t,pr.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Sa("htmlAttributes",t),linkTags:Ur("link",["rel","href"],t),metaTags:Ur("meta",["name","charset","http-equiv","property","itemprop"],t),noscriptTags:Ur("noscript",["innerHTML"],t),onChangeClientState:bg(t),scriptTags:Ur("script",["src","innerHTML"],t),styleTags:Ur("style",["cssText"],t),title:vg(t),titleAttributes:Sa("titleAttributes",t),prioritizeSeoTags:Sg(t,pr.PRIORITIZE_SEO_TAGS)}),oh=t=>Array.isArray(t)?t.join(""):t,Eg=(t,e)=>{const n=Object.keys(t);for(let r=0;r<n.length;r+=1)if(e[n[r]]&&e[n[r]].includes(t[n[r]]))return!0;return!1},ja=(t,e)=>Array.isArray(t)?t.reduce((n,r)=>(Eg(r,e)?n.priority.push(r):n.default.push(r),n),{priority:[],default:[]}):{default:t,priority:[]},Jl=(t,e)=>({...t,[e]:void 0}),_g=["noscript","script","style"],co=(t,e=!0)=>e===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),lh=t=>Object.keys(t).reduce((e,n)=>{const r=typeof t[n]<"u"?`${n}="${t[n]}"`:`${n}`;return e?`${e} ${r}`:r},""),Tg=(t,e,n,r)=>{const i=lh(n),a=oh(e);return i?`<${t} ${vt}="true" ${i}>${co(a,r)}</${t}>`:`<${t} ${vt}="true">${co(a,r)}</${t}>`},Ig=(t,e,n=!0)=>e.reduce((r,i)=>{const a=i,o=Object.keys(a).filter(d=>!(d==="innerHTML"||d==="cssText")).reduce((d,u)=>{const h=typeof a[u]>"u"?u:`${u}="${co(a[u],n)}"`;return d?`${d} ${h}`:h},""),l=a.innerHTML||a.cssText||"",c=_g.indexOf(t)===-1;return`${r}<${t} ${vt}="true" ${o}${c?"/>":`>${l}</${t}>`}`},""),ch=(t,e={})=>Object.keys(t).reduce((n,r)=>{const i=Gs[r];return n[i||r]=t[r],n},e),Rg=(t,e,n)=>{const r={key:e,[vt]:!0},i=ch(n,r);return[W.createElement("title",i,e)]},Xi=(t,e)=>e.map((n,r)=>{const i={key:r,[vt]:!0};return Object.keys(n).forEach(a=>{const l=Gs[a]||a;if(l==="innerHTML"||l==="cssText"){const c=n.innerHTML||n.cssText;i.dangerouslySetInnerHTML={__html:c}}else i[l]=n[a]}),W.createElement(t,i)}),dt=(t,e,n=!0)=>{switch(t){case"title":return{toComponent:()=>Rg(t,e.title,e.titleAttributes),toString:()=>Tg(t,e.title,e.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>ch(e),toString:()=>lh(e)};default:return{toComponent:()=>Xi(t,e),toString:()=>Ig(t,e,n)}}},Cg=({metaTags:t,linkTags:e,scriptTags:n,encode:r})=>{const i=ja(t,ka.meta),a=ja(e,ka.link),o=ja(n,ka.script);return{priorityMethods:{toComponent:()=>[...Xi("meta",i.priority),...Xi("link",a.priority),...Xi("script",o.priority)],toString:()=>`${dt("meta",i.priority,r)} ${dt("link",a.priority,r)} ${dt("script",o.priority,r)}`},metaTags:i.default,linkTags:a.default,scriptTags:o.default}},Og=t=>{const{baseTag:e,bodyAttributes:n,encode:r=!0,htmlAttributes:i,noscriptTags:a,styleTags:o,title:l="",titleAttributes:c,prioritizeSeoTags:d}=t;let{linkTags:u,metaTags:h,scriptTags:p}=t,m={toComponent:()=>[],toString:()=>""};return d&&({priorityMethods:m,linkTags:u,metaTags:h,scriptTags:p}=Cg(t)),{priority:m,base:dt("base",e,r),bodyAttributes:dt("bodyAttributes",n,r),htmlAttributes:dt("htmlAttributes",i,r),link:dt("link",u,r),meta:dt("meta",h,r),noscript:dt("noscript",a,r),script:dt("script",p,r),style:dt("style",o,r),title:dt("title",{title:l,titleAttributes:c},r)}},uo=Og,Mi=[],tl=!!(typeof window<"u"&&window.document&&window.document.createElement),ho=class{constructor(t,e){yt(this,"instances",[]);yt(this,"canUseDOM",tl);yt(this,"context");yt(this,"value",{setHelmet:t=>{this.context.helmet=t},helmetInstances:{get:()=>this.canUseDOM?Mi:this.instances,add:t=>{(this.canUseDOM?Mi:this.instances).push(t)},remove:t=>{const e=(this.canUseDOM?Mi:this.instances).indexOf(t);(this.canUseDOM?Mi:this.instances).splice(e,1)}}});this.context=t,this.canUseDOM=e||!1,e||(t.helmet=uo({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},Ag=parseInt(W.version.split(".")[0],10),po=Ag>=19,Pg={},dh=W.createContext(Pg),Hn,uh=(Hn=class extends S.Component{constructor(n){super(n);yt(this,"helmetData");po?this.helmetData=null:this.helmetData=new ho(this.props.context||{},Hn.canUseDOM)}render(){return po?W.createElement(W.Fragment,null,this.props.children):W.createElement(dh.Provider,{value:this.helmetData.value},this.props.children)}},yt(Hn,"canUseDOM",tl),Hn),sr=(t,e)=>{const n=document.head||document.querySelector("head"),r=n.querySelectorAll(`${t}[${vt}]`),i=[].slice.call(r),a=[];let o;return e&&e.length&&e.forEach(l=>{const c=document.createElement(t);for(const d in l)if(Object.prototype.hasOwnProperty.call(l,d))if(d==="innerHTML")c.innerHTML=l.innerHTML;else if(d==="cssText"){const u=l.cssText;c.appendChild(document.createTextNode(u))}else{const u=d,h=typeof l[u]>"u"?"":l[u];c.setAttribute(d,h)}c.setAttribute(vt,"true"),i.some((d,u)=>(o=u,c.isEqualNode(d)))?i.splice(o,1):a.push(c)}),i.forEach(l=>{var c;return(c=l.parentNode)==null?void 0:c.removeChild(l)}),a.forEach(l=>n.appendChild(l)),{oldTags:i,newTags:a}},fo=(t,e)=>{const n=document.getElementsByTagName(t)[0];if(!n)return;const r=n.getAttribute(vt),i=r?r.split(","):[],a=[...i],o=Object.keys(e);for(const l of o){const c=e[l]||"";n.getAttribute(l)!==c&&n.setAttribute(l,c),i.indexOf(l)===-1&&i.push(l);const d=a.indexOf(l);d!==-1&&a.splice(d,1)}for(let l=a.length-1;l>=0;l-=1)n.removeAttribute(a[l]);i.length===a.length?n.removeAttribute(vt):n.getAttribute(vt)!==o.join(",")&&n.setAttribute(vt,o.join(","))},Ng=(t,e)=>{typeof t<"u"&&document.title!==t&&(document.title=oh(t)),fo("title",e)},Xl=(t,e)=>{const{baseTag:n,bodyAttributes:r,htmlAttributes:i,linkTags:a,metaTags:o,noscriptTags:l,onChangeClientState:c,scriptTags:d,styleTags:u,title:h,titleAttributes:p}=t;fo("body",r),fo("html",i),Ng(h,p);const m={baseTag:sr("base",n),linkTags:sr("link",a),metaTags:sr("meta",o),noscriptTags:sr("noscript",l),scriptTags:sr("script",d),styleTags:sr("style",u)},x={},y={};Object.keys(m).forEach(b=>{const{newTags:_,oldTags:j}=m[b];_.length&&(x[b]=_),j.length&&(y[b]=m[b].oldTags)}),e&&e(),c(t,x,y)},Br=null,Lg=t=>{Br&&cancelAnimationFrame(Br),t.defer?Br=requestAnimationFrame(()=>{Xl(t,()=>{Br=null})}):(Xl(t),Br=null)},$g=Lg,Ql=class extends S.Component{constructor(){super(...arguments);yt(this,"rendered",!1)}shouldComponentUpdate(e){return!yg(e,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:e}=this.props.context;e.remove(this),this.emitChange()}emitChange(){const{helmetInstances:e,setHelmet:n}=this.props.context;let r=null;const i=jg(e.get().map(a=>{const{context:o,...l}=a.props;return l}));uh.canUseDOM?$g(i):uo&&(r=uo(i)),n(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:e}=this.props.context;e.add(this),this.emitChange()}render(){return this.init(),null}},Qi=[],ec=t=>{const e={};for(const n of Object.keys(t))e[ah[n]||n]=t[n];return e},Nn=t=>{const e={};for(const n of Object.keys(t)){const r=Gs[n];e[r||n]=t[n]}return e},tc=(t,e)=>{if(!tl)return;const n=document.getElementsByTagName(t)[0];if(!n)return;const r="data-rh-managed",i=n.getAttribute(r),a=i?i.split(","):[],o=Object.keys(e);for(const l of a)o.includes(l)||n.removeAttribute(l);for(const l of o){const c=e[l];c==null||c===!1?n.removeAttribute(l):c===!0?n.setAttribute(l,""):n.setAttribute(l,String(c))}o.length>0?n.setAttribute(r,o.join(",")):n.removeAttribute(r)},Ea=()=>{const t={},e={};for(const n of Qi){const{htmlAttributes:r,bodyAttributes:i}=n.props;r&&Object.assign(t,ec(r)),i&&Object.assign(e,ec(i))}tc("html",t),tc("body",e)},Dg=class extends S.Component{componentDidMount(){Qi.push(this),Ea()}componentDidUpdate(){Ea()}componentWillUnmount(){const t=Qi.indexOf(this);t!==-1&&Qi.splice(t,1),Ea()}resolveTitle(){const{title:t,titleTemplate:e,defaultTitle:n}=this.props;return t&&e?e.replace(/%s/g,()=>Array.isArray(t)?t.join(""):t):t||n||void 0}renderTitle(){const t=this.resolveTitle();if(t===void 0)return null;const e=this.props.titleAttributes||{};return W.createElement("title",Nn(e),t)}renderBase(){const{base:t}=this.props;return t?W.createElement("base",Nn(t)):null}renderMeta(){const{meta:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>W.createElement("meta",{key:n,...Nn(e)}))}renderLink(){const{link:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>W.createElement("link",{key:n,...Nn(e)}))}renderScript(){const{script:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>{const{innerHTML:r,...i}=e,a=Nn(i);return r&&(a.dangerouslySetInnerHTML={__html:r}),W.createElement("script",{key:n,...a})})}renderStyle(){const{style:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>{const{cssText:r,...i}=e,a=Nn(i);return r&&(a.dangerouslySetInnerHTML={__html:r}),W.createElement("style",{key:n,...a})})}renderNoscript(){const{noscript:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>{const{innerHTML:r,...i}=e,a=Nn(i);return r&&(a.dangerouslySetInnerHTML={__html:r}),W.createElement("noscript",{key:n,...a})})}render(){return W.createElement(W.Fragment,null,this.renderTitle(),this.renderBase(),this.renderMeta(),this.renderLink(),this.renderScript(),this.renderStyle(),this.renderNoscript())}},lo,hh=(lo=class extends S.Component{shouldComponentUpdate(t){return!pg(Jl(this.props,"helmetData"),Jl(t,"helmetData"))}mapNestedChildrenToProps(t,e){if(!e)return null;switch(t.type){case"script":case"noscript":return{innerHTML:e};case"style":return{cssText:e};default:throw new Error(`<${t.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(t,e,n,r){return{...e,[t.type]:[...e[t.type]||[],{...n,...this.mapNestedChildrenToProps(t,r)}]}}mapObjectTypeChildren(t,e,n,r){switch(t.type){case"title":return{...e,[t.type]:r,titleAttributes:{...n}};case"body":return{...e,bodyAttributes:{...n}};case"html":return{...e,htmlAttributes:{...n}};default:return{...e,[t.type]:{...n}}}}mapArrayTypeChildrenToProps(t,e){let n={...e};return Object.keys(t).forEach(r=>{n={...n,[r]:t[r]}}),n}warnOnInvalidChildren(t,e){return Gl(Yl.some(n=>t.type===n),typeof t.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${Yl.join(", ")} are allowed. Helmet does not support rendering <${t.type}> elements. Refer to our API for more information.`),Gl(!e||typeof e=="string"||Array.isArray(e)&&!e.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${t.type}>. Did you forget to wrap your children in braces? ( <${t.type}>{\`\`}</${t.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(t,e){let n={};return W.Children.forEach(t,r=>{if(!r||!r.props)return;const{children:i,...a}=r.props,o=Object.keys(a).reduce((c,d)=>(c[ah[d]||d]=a[d],c),{});let{type:l}=r;switch(typeof l=="symbol"?l=l.toString():this.warnOnInvalidChildren(r,i),l){case"Symbol(react.fragment)":e=this.mapChildrenToProps(i,e);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(r,n,o,i);break;default:e=this.mapObjectTypeChildren(r,e,o,i);break}}),this.mapArrayTypeChildrenToProps(n,e)}render(){const{children:t,...e}=this.props;let n={...e},{helmetData:r}=e;if(t&&(n=this.mapChildrenToProps(t,n)),r&&!(r instanceof ho)){const i=r;r=new ho(i.context,!0),delete n.helmetData}return po?W.createElement(Dg,{...n}):r?W.createElement(Ql,{...n,context:r.value}):W.createElement(dh.Consumer,null,i=>W.createElement(Ql,{...n,context:i}))}},yt(lo,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),lo);const me={LIST:"ord_ls",ADD:"ord_add",IMPORT:"ord_imp",LIST_OWN:"ord_ls_own",LIST_SUB:"ord_ls_sub",LIST_ALL:"ord_ls_all"},re={ROLE_LIST:"perm_role_ls",ROLE_ADD:"perm_role_add",ROLE_EDIT:"perm_role_edt",ROLE_DELETE:"perm_role_del",USER_LIST:"perm_asst_ls",USER_ADD:"perm_asst_add",USER_EDIT:"perm_asst_edt",USER_SUSPEND:"perm_asst_blk"};function ph(){return[...Object.values(me),...Object.values(re)]}function Mg(){return ph()}const Fg=Tm`
  body {
    background-color: ${t=>t.theme.background};
    color: ${t=>t.theme.text.primary};
  }
`;var Ug=Object.defineProperty,hs=Object.getOwnPropertySymbols,fh=Object.prototype.hasOwnProperty,mh=Object.prototype.propertyIsEnumerable,nc=(t,e,n)=>e in t?Ug(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,mo=(t,e)=>{for(var n in e||(e={}))fh.call(e,n)&&nc(t,n,e[n]);if(hs)for(var n of hs(e))mh.call(e,n)&&nc(t,n,e[n]);return t},go=(t,e)=>{var n={};for(var r in t)fh.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&hs)for(var r of hs(t))e.indexOf(r)<0&&mh.call(t,r)&&(n[r]=t[r]);return n};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var Gn;(t=>{const e=class Q{constructor(c,d,u,h){if(this.version=c,this.errorCorrectionLevel=d,this.modules=[],this.isFunction=[],c<Q.MIN_VERSION||c>Q.MAX_VERSION)throw new RangeError("Version value out of range");if(h<-1||h>7)throw new RangeError("Mask value out of range");this.size=c*4+17;let p=[];for(let x=0;x<this.size;x++)p.push(!1);for(let x=0;x<this.size;x++)this.modules.push(p.slice()),this.isFunction.push(p.slice());this.drawFunctionPatterns();const m=this.addEccAndInterleave(u);if(this.drawCodewords(m),h==-1){let x=1e9;for(let y=0;y<8;y++){this.applyMask(y),this.drawFormatBits(y);const b=this.getPenaltyScore();b<x&&(h=y,x=b),this.applyMask(y)}}i(0<=h&&h<=7),this.mask=h,this.applyMask(h),this.drawFormatBits(h),this.isFunction=[]}static encodeText(c,d){const u=t.QrSegment.makeSegments(c);return Q.encodeSegments(u,d)}static encodeBinary(c,d){const u=t.QrSegment.makeBytes(c);return Q.encodeSegments([u],d)}static encodeSegments(c,d,u=1,h=40,p=-1,m=!0){if(!(Q.MIN_VERSION<=u&&u<=h&&h<=Q.MAX_VERSION)||p<-1||p>7)throw new RangeError("Invalid value");let x,y;for(x=u;;x++){const w=Q.getNumDataCodewords(x,d)*8,v=o.getTotalBits(c,x);if(v<=w){y=v;break}if(x>=h)throw new RangeError("Data too long")}for(const w of[Q.Ecc.MEDIUM,Q.Ecc.QUARTILE,Q.Ecc.HIGH])m&&y<=Q.getNumDataCodewords(x,w)*8&&(d=w);let b=[];for(const w of c){n(w.mode.modeBits,4,b),n(w.numChars,w.mode.numCharCountBits(x),b);for(const v of w.getData())b.push(v)}i(b.length==y);const _=Q.getNumDataCodewords(x,d)*8;i(b.length<=_),n(0,Math.min(4,_-b.length),b),n(0,(8-b.length%8)%8,b),i(b.length%8==0);for(let w=236;b.length<_;w^=253)n(w,8,b);let j=[];for(;j.length*8<b.length;)j.push(0);return b.forEach((w,v)=>j[v>>>3]|=w<<7-(v&7)),new Q(x,d,j,p)}getModule(c,d){return 0<=c&&c<this.size&&0<=d&&d<this.size&&this.modules[d][c]}getModules(){return this.modules}drawFunctionPatterns(){for(let u=0;u<this.size;u++)this.setFunctionModule(6,u,u%2==0),this.setFunctionModule(u,6,u%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const c=this.getAlignmentPatternPositions(),d=c.length;for(let u=0;u<d;u++)for(let h=0;h<d;h++)u==0&&h==0||u==0&&h==d-1||u==d-1&&h==0||this.drawAlignmentPattern(c[u],c[h]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(c){const d=this.errorCorrectionLevel.formatBits<<3|c;let u=d;for(let p=0;p<10;p++)u=u<<1^(u>>>9)*1335;const h=(d<<10|u)^21522;i(h>>>15==0);for(let p=0;p<=5;p++)this.setFunctionModule(8,p,r(h,p));this.setFunctionModule(8,7,r(h,6)),this.setFunctionModule(8,8,r(h,7)),this.setFunctionModule(7,8,r(h,8));for(let p=9;p<15;p++)this.setFunctionModule(14-p,8,r(h,p));for(let p=0;p<8;p++)this.setFunctionModule(this.size-1-p,8,r(h,p));for(let p=8;p<15;p++)this.setFunctionModule(8,this.size-15+p,r(h,p));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let c=this.version;for(let u=0;u<12;u++)c=c<<1^(c>>>11)*7973;const d=this.version<<12|c;i(d>>>18==0);for(let u=0;u<18;u++){const h=r(d,u),p=this.size-11+u%3,m=Math.floor(u/3);this.setFunctionModule(p,m,h),this.setFunctionModule(m,p,h)}}drawFinderPattern(c,d){for(let u=-4;u<=4;u++)for(let h=-4;h<=4;h++){const p=Math.max(Math.abs(h),Math.abs(u)),m=c+h,x=d+u;0<=m&&m<this.size&&0<=x&&x<this.size&&this.setFunctionModule(m,x,p!=2&&p!=4)}}drawAlignmentPattern(c,d){for(let u=-2;u<=2;u++)for(let h=-2;h<=2;h++)this.setFunctionModule(c+h,d+u,Math.max(Math.abs(h),Math.abs(u))!=1)}setFunctionModule(c,d,u){this.modules[d][c]=u,this.isFunction[d][c]=!0}addEccAndInterleave(c){const d=this.version,u=this.errorCorrectionLevel;if(c.length!=Q.getNumDataCodewords(d,u))throw new RangeError("Invalid argument");const h=Q.NUM_ERROR_CORRECTION_BLOCKS[u.ordinal][d],p=Q.ECC_CODEWORDS_PER_BLOCK[u.ordinal][d],m=Math.floor(Q.getNumRawDataModules(d)/8),x=h-m%h,y=Math.floor(m/h);let b=[];const _=Q.reedSolomonComputeDivisor(p);for(let w=0,v=0;w<h;w++){let I=c.slice(v,v+y-p+(w<x?0:1));v+=I.length;const C=Q.reedSolomonComputeRemainder(I,_);w<x&&I.push(0),b.push(I.concat(C))}let j=[];for(let w=0;w<b[0].length;w++)b.forEach((v,I)=>{(w!=y-p||I>=x)&&j.push(v[w])});return i(j.length==m),j}drawCodewords(c){if(c.length!=Math.floor(Q.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let d=0;for(let u=this.size-1;u>=1;u-=2){u==6&&(u=5);for(let h=0;h<this.size;h++)for(let p=0;p<2;p++){const m=u-p,y=(u+1&2)==0?this.size-1-h:h;!this.isFunction[y][m]&&d<c.length*8&&(this.modules[y][m]=r(c[d>>>3],7-(d&7)),d++)}}i(d==c.length*8)}applyMask(c){if(c<0||c>7)throw new RangeError("Mask value out of range");for(let d=0;d<this.size;d++)for(let u=0;u<this.size;u++){let h;switch(c){case 0:h=(u+d)%2==0;break;case 1:h=d%2==0;break;case 2:h=u%3==0;break;case 3:h=(u+d)%3==0;break;case 4:h=(Math.floor(u/3)+Math.floor(d/2))%2==0;break;case 5:h=u*d%2+u*d%3==0;break;case 6:h=(u*d%2+u*d%3)%2==0;break;case 7:h=((u+d)%2+u*d%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[d][u]&&h&&(this.modules[d][u]=!this.modules[d][u])}}getPenaltyScore(){let c=0;for(let p=0;p<this.size;p++){let m=!1,x=0,y=[0,0,0,0,0,0,0];for(let b=0;b<this.size;b++)this.modules[p][b]==m?(x++,x==5?c+=Q.PENALTY_N1:x>5&&c++):(this.finderPenaltyAddHistory(x,y),m||(c+=this.finderPenaltyCountPatterns(y)*Q.PENALTY_N3),m=this.modules[p][b],x=1);c+=this.finderPenaltyTerminateAndCount(m,x,y)*Q.PENALTY_N3}for(let p=0;p<this.size;p++){let m=!1,x=0,y=[0,0,0,0,0,0,0];for(let b=0;b<this.size;b++)this.modules[b][p]==m?(x++,x==5?c+=Q.PENALTY_N1:x>5&&c++):(this.finderPenaltyAddHistory(x,y),m||(c+=this.finderPenaltyCountPatterns(y)*Q.PENALTY_N3),m=this.modules[b][p],x=1);c+=this.finderPenaltyTerminateAndCount(m,x,y)*Q.PENALTY_N3}for(let p=0;p<this.size-1;p++)for(let m=0;m<this.size-1;m++){const x=this.modules[p][m];x==this.modules[p][m+1]&&x==this.modules[p+1][m]&&x==this.modules[p+1][m+1]&&(c+=Q.PENALTY_N2)}let d=0;for(const p of this.modules)d=p.reduce((m,x)=>m+(x?1:0),d);const u=this.size*this.size,h=Math.ceil(Math.abs(d*20-u*10)/u)-1;return i(0<=h&&h<=9),c+=h*Q.PENALTY_N4,i(0<=c&&c<=2568888),c}getAlignmentPatternPositions(){if(this.version==1)return[];{const c=Math.floor(this.version/7)+2,d=this.version==32?26:Math.ceil((this.version*4+4)/(c*2-2))*2;let u=[6];for(let h=this.size-7;u.length<c;h-=d)u.splice(1,0,h);return u}}static getNumRawDataModules(c){if(c<Q.MIN_VERSION||c>Q.MAX_VERSION)throw new RangeError("Version number out of range");let d=(16*c+128)*c+64;if(c>=2){const u=Math.floor(c/7)+2;d-=(25*u-10)*u-55,c>=7&&(d-=36)}return i(208<=d&&d<=29648),d}static getNumDataCodewords(c,d){return Math.floor(Q.getNumRawDataModules(c)/8)-Q.ECC_CODEWORDS_PER_BLOCK[d.ordinal][c]*Q.NUM_ERROR_CORRECTION_BLOCKS[d.ordinal][c]}static reedSolomonComputeDivisor(c){if(c<1||c>255)throw new RangeError("Degree out of range");let d=[];for(let h=0;h<c-1;h++)d.push(0);d.push(1);let u=1;for(let h=0;h<c;h++){for(let p=0;p<d.length;p++)d[p]=Q.reedSolomonMultiply(d[p],u),p+1<d.length&&(d[p]^=d[p+1]);u=Q.reedSolomonMultiply(u,2)}return d}static reedSolomonComputeRemainder(c,d){let u=d.map(h=>0);for(const h of c){const p=h^u.shift();u.push(0),d.forEach((m,x)=>u[x]^=Q.reedSolomonMultiply(m,p))}return u}static reedSolomonMultiply(c,d){if(c>>>8||d>>>8)throw new RangeError("Byte out of range");let u=0;for(let h=7;h>=0;h--)u=u<<1^(u>>>7)*285,u^=(d>>>h&1)*c;return i(u>>>8==0),u}finderPenaltyCountPatterns(c){const d=c[1];i(d<=this.size*3);const u=d>0&&c[2]==d&&c[3]==d*3&&c[4]==d&&c[5]==d;return(u&&c[0]>=d*4&&c[6]>=d?1:0)+(u&&c[6]>=d*4&&c[0]>=d?1:0)}finderPenaltyTerminateAndCount(c,d,u){return c&&(this.finderPenaltyAddHistory(d,u),d=0),d+=this.size,this.finderPenaltyAddHistory(d,u),this.finderPenaltyCountPatterns(u)}finderPenaltyAddHistory(c,d){d[0]==0&&(c+=this.size),d.pop(),d.unshift(c)}};e.MIN_VERSION=1,e.MAX_VERSION=40,e.PENALTY_N1=3,e.PENALTY_N2=3,e.PENALTY_N3=40,e.PENALTY_N4=10,e.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],e.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],t.QrCode=e;function n(l,c,d){if(c<0||c>31||l>>>c)throw new RangeError("Value out of range");for(let u=c-1;u>=0;u--)d.push(l>>>u&1)}function r(l,c){return(l>>>c&1)!=0}function i(l){if(!l)throw new Error("Assertion error")}const a=class Ee{constructor(c,d,u){if(this.mode=c,this.numChars=d,this.bitData=u,d<0)throw new RangeError("Invalid argument");this.bitData=u.slice()}static makeBytes(c){let d=[];for(const u of c)n(u,8,d);return new Ee(Ee.Mode.BYTE,c.length,d)}static makeNumeric(c){if(!Ee.isNumeric(c))throw new RangeError("String contains non-numeric characters");let d=[];for(let u=0;u<c.length;){const h=Math.min(c.length-u,3);n(parseInt(c.substring(u,u+h),10),h*3+1,d),u+=h}return new Ee(Ee.Mode.NUMERIC,c.length,d)}static makeAlphanumeric(c){if(!Ee.isAlphanumeric(c))throw new RangeError("String contains unencodable characters in alphanumeric mode");let d=[],u;for(u=0;u+2<=c.length;u+=2){let h=Ee.ALPHANUMERIC_CHARSET.indexOf(c.charAt(u))*45;h+=Ee.ALPHANUMERIC_CHARSET.indexOf(c.charAt(u+1)),n(h,11,d)}return u<c.length&&n(Ee.ALPHANUMERIC_CHARSET.indexOf(c.charAt(u)),6,d),new Ee(Ee.Mode.ALPHANUMERIC,c.length,d)}static makeSegments(c){return c==""?[]:Ee.isNumeric(c)?[Ee.makeNumeric(c)]:Ee.isAlphanumeric(c)?[Ee.makeAlphanumeric(c)]:[Ee.makeBytes(Ee.toUtf8ByteArray(c))]}static makeEci(c){let d=[];if(c<0)throw new RangeError("ECI assignment value out of range");if(c<128)n(c,8,d);else if(c<16384)n(2,2,d),n(c,14,d);else if(c<1e6)n(6,3,d),n(c,21,d);else throw new RangeError("ECI assignment value out of range");return new Ee(Ee.Mode.ECI,0,d)}static isNumeric(c){return Ee.NUMERIC_REGEX.test(c)}static isAlphanumeric(c){return Ee.ALPHANUMERIC_REGEX.test(c)}getData(){return this.bitData.slice()}static getTotalBits(c,d){let u=0;for(const h of c){const p=h.mode.numCharCountBits(d);if(h.numChars>=1<<p)return 1/0;u+=4+p+h.bitData.length}return u}static toUtf8ByteArray(c){c=encodeURI(c);let d=[];for(let u=0;u<c.length;u++)c.charAt(u)!="%"?d.push(c.charCodeAt(u)):(d.push(parseInt(c.substring(u+1,u+3),16)),u+=2);return d}};a.NUMERIC_REGEX=/^[0-9]*$/,a.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,a.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";let o=a;t.QrSegment=a})(Gn||(Gn={}));(t=>{(e=>{const n=class{constructor(i,a){this.ordinal=i,this.formatBits=a}};n.LOW=new n(0,1),n.MEDIUM=new n(1,0),n.QUARTILE=new n(2,3),n.HIGH=new n(3,2),e.Ecc=n})(t.QrCode||(t.QrCode={}))})(Gn||(Gn={}));(t=>{(e=>{const n=class{constructor(i,a){this.modeBits=i,this.numBitsCharCount=a}numCharCountBits(i){return this.numBitsCharCount[Math.floor((i+7)/17)]}};n.NUMERIC=new n(1,[10,12,14]),n.ALPHANUMERIC=new n(2,[9,11,13]),n.BYTE=new n(4,[8,16,16]),n.KANJI=new n(8,[8,10,12]),n.ECI=new n(7,[0,0,0]),e.Mode=n})(t.QrSegment||(t.QrSegment={}))})(Gn||(Gn={}));var dr=Gn;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var Bg={L:dr.QrCode.Ecc.LOW,M:dr.QrCode.Ecc.MEDIUM,Q:dr.QrCode.Ecc.QUARTILE,H:dr.QrCode.Ecc.HIGH},gh=128,xh="L",yh="#FFFFFF",vh="#000000",bh=!1,wh=1,zg=4,Hg=0,Vg=.1;function kh(t,e=0){const n=[];return t.forEach(function(r,i){let a=null;r.forEach(function(o,l){if(!o&&a!==null){n.push(`M${a+e} ${i+e}h${l-a}v1H${a+e}z`),a=null;return}if(l===r.length-1){if(!o)return;a===null?n.push(`M${l+e},${i+e} h1v1H${l+e}z`):n.push(`M${a+e},${i+e} h${l+1-a}v1H${a+e}z`);return}o&&a===null&&(a=l)})}),n.join("")}function Sh(t,e){return t.slice().map((n,r)=>r<e.y||r>=e.y+e.h?n:n.map((i,a)=>a<e.x||a>=e.x+e.w?i:!1))}function Wg(t,e,n,r){if(r==null)return null;const i=t.length+n*2,a=Math.floor(e*Vg),o=i/e,l=(r.width||a)*o,c=(r.height||a)*o,d=r.x==null?t.length/2-l/2:r.x*o,u=r.y==null?t.length/2-c/2:r.y*o,h=r.opacity==null?1:r.opacity;let p=null;if(r.excavate){let x=Math.floor(d),y=Math.floor(u),b=Math.ceil(l+d-x),_=Math.ceil(c+u-y);p={x,y,w:b,h:_}}const m=r.crossOrigin;return{x:d,y:u,h:c,w:l,excavation:p,opacity:h,crossOrigin:m}}function qg(t,e){return e!=null?Math.max(Math.floor(e),0):t?zg:Hg}function jh({value:t,level:e,minVersion:n,includeMargin:r,marginSize:i,imageSettings:a,size:o,boostLevel:l}){let c=W.useMemo(()=>{const x=(Array.isArray(t)?t:[t]).reduce((y,b)=>(y.push(...dr.QrSegment.makeSegments(b)),y),[]);return dr.QrCode.encodeSegments(x,Bg[e],n,void 0,void 0,l)},[t,e,n,l]);const{cells:d,margin:u,numCells:h,calculatedImageSettings:p}=W.useMemo(()=>{let m=c.getModules();const x=qg(r,i),y=m.length+x*2,b=Wg(m,o,x,a);return{cells:m,margin:x,numCells:y,calculatedImageSettings:b}},[c,o,a,r,i]);return{qrcode:c,margin:u,cells:d,numCells:h,calculatedImageSettings:p}}var Kg=(function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0})(),Gg=W.forwardRef(function(e,n){const r=e,{value:i,size:a=gh,level:o=xh,bgColor:l=yh,fgColor:c=vh,includeMargin:d=bh,minVersion:u=wh,boostLevel:h,marginSize:p,imageSettings:m}=r,y=go(r,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","marginSize","imageSettings"]),{style:b}=y,_=go(y,["style"]),j=m==null?void 0:m.src,w=W.useRef(null),v=W.useRef(null),I=W.useCallback(he=>{w.current=he,typeof n=="function"?n(he):n&&(n.current=he)},[n]),[C,D]=W.useState(!1),{margin:F,cells:L,numCells:z,calculatedImageSettings:M}=jh({value:i,level:o,minVersion:u,boostLevel:h,includeMargin:d,marginSize:p,imageSettings:m,size:a});W.useEffect(()=>{if(w.current!=null){const he=w.current,de=he.getContext("2d");if(!de)return;let ae=L;const Se=v.current,be=M!=null&&Se!==null&&Se.complete&&Se.naturalHeight!==0&&Se.naturalWidth!==0;be&&M.excavation!=null&&(ae=Sh(L,M.excavation));const Te=window.devicePixelRatio||1;he.height=he.width=a*Te;const A=a/z*Te;de.scale(A,A),de.fillStyle=l,de.fillRect(0,0,z,z),de.fillStyle=c,Kg?de.fill(new Path2D(kh(ae,F))):L.forEach(function(pe,Ie){pe.forEach(function(Be,fe){Be&&de.fillRect(fe+F,Ie+F,1,1)})}),M&&(de.globalAlpha=M.opacity),be&&de.drawImage(Se,M.x+F,M.y+F,M.w,M.h)}}),W.useEffect(()=>{D(!1)},[j]);const Z=mo({height:a,width:a},b);let ce=null;return j!=null&&(ce=W.createElement("img",{src:j,key:j,style:{display:"none"},onLoad:()=>{D(!0)},ref:v,crossOrigin:M==null?void 0:M.crossOrigin})),W.createElement(W.Fragment,null,W.createElement("canvas",mo({style:Z,height:a,width:a,ref:I,role:"img"},_)),ce)});Gg.displayName="QRCodeCanvas";var Eh=W.forwardRef(function(e,n){const r=e,{value:i,size:a=gh,level:o=xh,bgColor:l=yh,fgColor:c=vh,includeMargin:d=bh,minVersion:u=wh,boostLevel:h,title:p,marginSize:m,imageSettings:x}=r,y=go(r,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","title","marginSize","imageSettings"]),{margin:b,cells:_,numCells:j,calculatedImageSettings:w}=jh({value:i,level:o,minVersion:u,boostLevel:h,includeMargin:d,marginSize:m,imageSettings:x,size:a});let v=_,I=null;x!=null&&w!=null&&(w.excavation!=null&&(v=Sh(_,w.excavation)),I=W.createElement("image",{href:x.src,height:w.h,width:w.w,x:w.x+b,y:w.y+b,preserveAspectRatio:"none",opacity:w.opacity,crossOrigin:w.crossOrigin}));const C=kh(v,b);return W.createElement("svg",mo({height:a,width:a,viewBox:`0 0 ${j} ${j}`,ref:n,role:"img"},y),!!p&&W.createElement("title",null,p),W.createElement("path",{fill:l,d:`M0,0 h${j}v${j}H0z`,shapeRendering:"crispEdges"}),W.createElement("path",{fill:c,d:C,shapeRendering:"crispEdges"}),I)});Eh.displayName="QRCodeSVG";function Zg(){if(console&&console.warn){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];Vn(e[0])&&(e[0]=`react-i18next:: ${e[0]}`),console.warn(...e)}}const rc={};function xo(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];Vn(e[0])&&rc[e[0]]||(Vn(e[0])&&(rc[e[0]]=new Date),Zg(...e))}const _h=(t,e)=>()=>{if(t.isInitialized)e();else{const n=()=>{setTimeout(()=>{t.off("initialized",n)},0),e()};t.on("initialized",n)}},ic=(t,e,n)=>{t.loadNamespaces(e,_h(t,n))},sc=(t,e,n,r)=>{Vn(n)&&(n=[n]),n.forEach(i=>{t.options.ns.indexOf(i)<0&&t.options.ns.push(i)}),t.loadLanguages(e,_h(t,r))},Yg=function(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const r=e.languages[0],i=e.options?e.options.fallbackLng:!1,a=e.languages[e.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const o=(l,c)=>{const d=e.services.backendConnector.state[`${l}|${c}`];return d===-1||d===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!o(e.isLanguageChangingTo,t)?!1:!!(e.hasResourceBundle(r,t)||!e.services.backendConnector.backend||e.options.resources&&!e.options.partialBundledLanguages||o(r,t)&&(!i||o(a,t)))},Jg=function(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!e.languages||!e.languages.length?(xo("i18n.languages were undefined or empty",e.languages),!0):e.options.ignoreJSONStructure!==void 0?e.hasLoadedNamespace(t,{lng:n.lng,precheck:(i,a)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&i.services.backendConnector.backend&&i.isLanguageChangingTo&&!a(i.isLanguageChangingTo,t))return!1}}):Yg(t,e,n)},Vn=t=>typeof t=="string",Xg=t=>typeof t=="object"&&t!==null,Qg=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,ex={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},tx=t=>ex[t],nx=t=>t.replace(Qg,tx);let yo={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:nx};const rx=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};yo={...yo,...t}},ix=()=>yo;let Th;const sx=t=>{Th=t},ax=()=>Th,ox={type:"3rdParty",init(t){rx(t.options.react),sx(t)}},lx=S.createContext();class cx{constructor(){yt(this,"getUsedNamespaces",()=>Object.keys(this.usedNamespaces));this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}}const dx=(t,e)=>{const n=S.useRef();return S.useEffect(()=>{n.current=t},[t,e]),n.current},Ih=(t,e,n,r)=>t.getFixedT(e,n,r),ux=(t,e,n,r)=>S.useCallback(Ih(t,e,n,r),[t,e,n,r]),G=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{i18n:n}=e,{i18n:r,defaultNS:i}=S.useContext(lx)||{},a=n||r||ax();if(a&&!a.reportNamespaces&&(a.reportNamespaces=new cx),!a){xo("You will need to pass in an i18next instance by using initReactI18next");const v=(C,D)=>Vn(D)?D:Xg(D)&&Vn(D.defaultValue)?D.defaultValue:Array.isArray(C)?C[C.length-1]:C,I=[v,{},!1];return I.t=v,I.i18n={},I.ready=!1,I}a.options.react&&a.options.react.wait!==void 0&&xo("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const o={...ix(),...a.options.react,...e},{useSuspense:l,keyPrefix:c}=o;let d=t||i||a.options&&a.options.defaultNS;d=Vn(d)?[d]:d||["translation"],a.reportNamespaces.addUsedNamespaces&&a.reportNamespaces.addUsedNamespaces(d);const u=(a.isInitialized||a.initializedStoreOnce)&&d.every(v=>Jg(v,a,o)),h=ux(a,e.lng||null,o.nsMode==="fallback"?d:d[0],c),p=()=>h,m=()=>Ih(a,e.lng||null,o.nsMode==="fallback"?d:d[0],c),[x,y]=S.useState(p);let b=d.join();e.lng&&(b=`${e.lng}${b}`);const _=dx(b),j=S.useRef(!0);S.useEffect(()=>{const{bindI18n:v,bindI18nStore:I}=o;j.current=!0,!u&&!l&&(e.lng?sc(a,e.lng,d,()=>{j.current&&y(m)}):ic(a,d,()=>{j.current&&y(m)})),u&&_&&_!==b&&j.current&&y(m);const C=()=>{j.current&&y(m)};return v&&a&&a.on(v,C),I&&a&&a.store.on(I,C),()=>{j.current=!1,v&&a&&v.split(" ").forEach(D=>a.off(D,C)),I&&a&&I.split(" ").forEach(D=>a.store.off(D,C))}},[a,b]),S.useEffect(()=>{j.current&&u&&y(p)},[a,c,u]);const w=[x,a,u];if(w.t=x,w.i18n=a,w.ready=u,u||!u&&!l)return w;throw new Promise(v=>{e.lng?sc(a,e.lng,d,()=>v()):ic(a,d,()=>v())})},Rh={portalLogin:"FF_PORTAL_LOGIN",guestTrack:"FF_GUEST_TRACK",aboutPage:"FF_ABOUT_PAGE",aboutV1:"FF_ABOUT_V1",homeAudienceSwitch:"FF_HOME_AUDIENCE_SWITCH",consigneeTrack:"FF_CONSIGNEE_TRACK",loginDestinations:"FF_LOGIN_DESTINATIONS",nextStopMap:"FF_NEXT_STOP_MAP"},Ch="/portal/login";function In(t){if(typeof window>"u")return!1;const e=Rh[t],n=new URLSearchParams(window.location.search);if(n.has(e))return n.get(e)==="true";try{return localStorage.getItem(e)==="true"}catch{return!1}}function hx(){if(typeof window>"u")return;const t=new URLSearchParams(window.location.search);for(const e of Object.values(Rh))if(t.has(e))try{localStorage.setItem(e,t.get(e)==="true"?"true":"false")}catch{}}function wr(t){return In(t)}function nl(){return In("portalLogin")?Ch:"/"}const ac=Object.freeze({production:"https://app.senditgo.com",uat:"https://tms-uat.senditgo.com",development:"https://tms-dev.holieninnovation.com.tw"}),px="/fleet/login",fx="/company/login",mx=Object.freeze({development:"https://tms-dev.holieninnovation.com.tw/company/login"});function Oh(t,e,n){const r=Object.prototype.hasOwnProperty.call(ac,e)?ac[e]:null;if(!r||typeof t!="string"||t.trim()==="")return null;let i;try{i=new URL(t.trim())}catch{return null}return i.protocol!=="https:"||i.username||i.password||i.origin!==r||i.pathname!==n||i.search!==""||i.hash!==""?null:`${i.origin}${i.pathname}`}function gx(t,e){return Oh(t,e,px)}function xx(t,e){return Oh(t,e,fx)}function yx(t){const e=[];if(t.portalLoginOn&&e.push({role:"shipper",href:Ch,external:!1}),t.loginDestinationsOn){const n=gx(t.carrierLoginUrl,t.mode);n&&e.push({role:"carrier",href:n,external:!0});const r=xx(t.consigneeLoginUrl,t.mode);r&&e.push({role:"consignee",href:r,external:!0})}return e}function vx(t,e){return typeof t!="string"||!t.startsWith("/")||t.startsWith("//")||t.startsWith("/\\")||[...t].some(n=>n.charCodeAt(0)<32)?e:t}function rl(){const t=wr("portalLogin"),e=wr("loginDestinations");return yx({portalLoginOn:t,loginDestinationsOn:e,carrierLoginUrl:"https://app.senditgo.com/fleet/login",consigneeLoginUrl:mx.production,mode:"production"})}const q=t=>typeof t=="string",zr=()=>{let t,e;const n=new Promise((r,i)=>{t=r,e=i});return n.resolve=t,n.reject=e,n},oc=t=>t==null?"":""+t,bx=(t,e,n)=>{t.forEach(r=>{e[r]&&(n[r]=e[r])})},wx=/###/g,lc=t=>t&&t.indexOf("###")>-1?t.replace(wx,"."):t,cc=t=>!t||q(t),Xr=(t,e,n)=>{const r=q(e)?e.split("."):e;let i=0;for(;i<r.length-1;){if(cc(t))return{};const a=lc(r[i]);!t[a]&&n&&(t[a]=new n),Object.prototype.hasOwnProperty.call(t,a)?t=t[a]:t={},++i}return cc(t)?{}:{obj:t,k:lc(r[i])}},dc=(t,e,n)=>{const{obj:r,k:i}=Xr(t,e,Object);if(r!==void 0||e.length===1){r[i]=n;return}let a=e[e.length-1],o=e.slice(0,e.length-1),l=Xr(t,o,Object);for(;l.obj===void 0&&o.length;)a=`${o[o.length-1]}.${a}`,o=o.slice(0,o.length-1),l=Xr(t,o,Object),l&&l.obj&&typeof l.obj[`${l.k}.${a}`]<"u"&&(l.obj=void 0);l.obj[`${l.k}.${a}`]=n},kx=(t,e,n,r)=>{const{obj:i,k:a}=Xr(t,e,Object);i[a]=i[a]||[],i[a].push(n)},ps=(t,e)=>{const{obj:n,k:r}=Xr(t,e);if(n)return n[r]},Sx=(t,e,n)=>{const r=ps(t,n);return r!==void 0?r:ps(e,n)},Ah=(t,e,n)=>{for(const r in e)r!=="__proto__"&&r!=="constructor"&&(r in t?q(t[r])||t[r]instanceof String||q(e[r])||e[r]instanceof String?n&&(t[r]=e[r]):Ah(t[r],e[r],n):t[r]=e[r]);return t},ar=t=>t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var jx={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const Ex=t=>q(t)?t.replace(/[&<>"'\/]/g,e=>jx[e]):t;class _x{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const n=this.regExpMap.get(e);if(n!==void 0)return n;const r=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,r),this.regExpQueue.push(e),r}}const Tx=[" ",",","?","!",";"],Ix=new _x(20),Rx=(t,e,n)=>{e=e||"",n=n||"";const r=Tx.filter(o=>e.indexOf(o)<0&&n.indexOf(o)<0);if(r.length===0)return!0;const i=Ix.getRegExp(`(${r.map(o=>o==="?"?"\\?":o).join("|")})`);let a=!i.test(t);if(!a){const o=t.indexOf(n);o>0&&!i.test(t.substring(0,o))&&(a=!0)}return a},vo=function(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!t)return;if(t[e])return t[e];const r=e.split(n);let i=t;for(let a=0;a<r.length;){if(!i||typeof i!="object")return;let o,l="";for(let c=a;c<r.length;++c)if(c!==a&&(l+=n),l+=r[c],o=i[l],o!==void 0){if(["string","number","boolean"].indexOf(typeof o)>-1&&c<r.length-1)continue;a+=c-a+1;break}i=o}return i},fs=t=>t&&t.replace("_","-"),Cx={type:"logger",log(t){this.output("log",t)},warn(t){this.output("warn",t)},error(t){this.output("error",t)},output(t,e){console&&console[t]&&console[t].apply(console,e)}};let Ox=class bo{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,n)}init(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=n.prefix||"i18next:",this.logger=e||Cx,this.options=n,this.debug=n.debug}log(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return this.forward(n,"log","",!0)}warn(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return this.forward(n,"warn","",!0)}error(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return this.forward(n,"error","")}deprecate(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return this.forward(n,"warn","WARNING DEPRECATED: ",!0)}forward(e,n,r,i){return i&&!this.debug?null:(q(e[0])&&(e[0]=`${r}${this.prefix} ${e[0]}`),this.logger[n](e))}create(e){return new bo(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new bo(this.logger,e)}};var Ot=new Ox;class Zs{constructor(){this.observers={}}on(e,n){return e.split(" ").forEach(r=>{this.observers[r]||(this.observers[r]=new Map);const i=this.observers[r].get(n)||0;this.observers[r].set(n,i+1)}),this}off(e,n){if(this.observers[e]){if(!n){delete this.observers[e];return}this.observers[e].delete(n)}}emit(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(o=>{let[l,c]=o;for(let d=0;d<c;d++)l(...r)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(o=>{let[l,c]=o;for(let d=0;d<c;d++)l.apply(l,[e,...r])})}}class uc extends Zs{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const n=this.options.ns.indexOf(e);n>-1&&this.options.ns.splice(n,1)}getResource(e,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const a=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,o=i.ignoreJSONStructure!==void 0?i.ignoreJSONStructure:this.options.ignoreJSONStructure;let l;e.indexOf(".")>-1?l=e.split("."):(l=[e,n],r&&(Array.isArray(r)?l.push(...r):q(r)&&a?l.push(...r.split(a)):l.push(r)));const c=ps(this.data,l);return!c&&!n&&!r&&e.indexOf(".")>-1&&(e=l[0],n=l[1],r=l.slice(2).join(".")),c||!o||!q(r)?c:vo(this.data&&this.data[e]&&this.data[e][n],r,a)}addResource(e,n,r,i){let a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const o=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator;let l=[e,n];r&&(l=l.concat(o?r.split(o):r)),e.indexOf(".")>-1&&(l=e.split("."),i=n,n=l[1]),this.addNamespaces(n),dc(this.data,l,i),a.silent||this.emit("added",e,n,r,i)}addResources(e,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const a in r)(q(r[a])||Array.isArray(r[a]))&&this.addResource(e,n,a,r[a],{silent:!0});i.silent||this.emit("added",e,n,r)}addResourceBundle(e,n,r,i,a){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},l=[e,n];e.indexOf(".")>-1&&(l=e.split("."),i=r,r=n,n=l[1]),this.addNamespaces(n);let c=ps(this.data,l)||{};o.skipCopy||(r=JSON.parse(JSON.stringify(r))),i?Ah(c,r,a):c={...c,...r},dc(this.data,l,c),o.silent||this.emit("added",e,n,r)}removeResourceBundle(e,n){this.hasResourceBundle(e,n)&&delete this.data[e][n],this.removeNamespaces(n),this.emit("removed",e,n)}hasResourceBundle(e,n){return this.getResource(e,n)!==void 0}getResourceBundle(e,n){return n||(n=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(e,n)}:this.getResource(e,n)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const n=this.getDataByLanguage(e);return!!(n&&Object.keys(n)||[]).find(i=>n[i]&&Object.keys(n[i]).length>0)}toJSON(){return this.data}}var Ph={processors:{},addPostProcessor(t){this.processors[t.name]=t},handle(t,e,n,r,i){return t.forEach(a=>{this.processors[a]&&(e=this.processors[a].process(e,n,r,i))}),e}};const hc={};class ms extends Zs{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),bx(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Ot.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const r=this.resolve(e,n);return r&&r.res!==void 0}extractFromKey(e,n){let r=n.nsSeparator!==void 0?n.nsSeparator:this.options.nsSeparator;r===void 0&&(r=":");const i=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let a=n.ns||this.options.defaultNS||[];const o=r&&e.indexOf(r)>-1,l=!this.options.userDefinedKeySeparator&&!n.keySeparator&&!this.options.userDefinedNsSeparator&&!n.nsSeparator&&!Rx(e,r,i);if(o&&!l){const c=e.match(this.interpolator.nestingRegexp);if(c&&c.length>0)return{key:e,namespaces:q(a)?[a]:a};const d=e.split(r);(r!==i||r===i&&this.options.ns.indexOf(d[0])>-1)&&(a=d.shift()),e=d.join(i)}return{key:e,namespaces:q(a)?[a]:a}}translate(e,n,r){if(typeof n!="object"&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),typeof n=="object"&&(n={...n}),n||(n={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const i=n.returnDetails!==void 0?n.returnDetails:this.options.returnDetails,a=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,{key:o,namespaces:l}=this.extractFromKey(e[e.length-1],n),c=l[l.length-1],d=n.lng||this.language,u=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(d&&d.toLowerCase()==="cimode"){if(u){const v=n.nsSeparator||this.options.nsSeparator;return i?{res:`${c}${v}${o}`,usedKey:o,exactUsedKey:o,usedLng:d,usedNS:c,usedParams:this.getUsedParamsDetails(n)}:`${c}${v}${o}`}return i?{res:o,usedKey:o,exactUsedKey:o,usedLng:d,usedNS:c,usedParams:this.getUsedParamsDetails(n)}:o}const h=this.resolve(e,n);let p=h&&h.res;const m=h&&h.usedKey||o,x=h&&h.exactUsedKey||o,y=Object.prototype.toString.apply(p),b=["[object Number]","[object Function]","[object RegExp]"],_=n.joinArrays!==void 0?n.joinArrays:this.options.joinArrays,j=!this.i18nFormat||this.i18nFormat.handleAsObject,w=!q(p)&&typeof p!="boolean"&&typeof p!="number";if(j&&p&&w&&b.indexOf(y)<0&&!(q(_)&&Array.isArray(p))){if(!n.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const v=this.options.returnedObjectHandler?this.options.returnedObjectHandler(m,p,{...n,ns:l}):`key '${o} (${this.language})' returned an object instead of string.`;return i?(h.res=v,h.usedParams=this.getUsedParamsDetails(n),h):v}if(a){const v=Array.isArray(p),I=v?[]:{},C=v?x:m;for(const D in p)if(Object.prototype.hasOwnProperty.call(p,D)){const F=`${C}${a}${D}`;I[D]=this.translate(F,{...n,joinArrays:!1,ns:l}),I[D]===F&&(I[D]=p[D])}p=I}}else if(j&&q(_)&&Array.isArray(p))p=p.join(_),p&&(p=this.extendTranslation(p,e,n,r));else{let v=!1,I=!1;const C=n.count!==void 0&&!q(n.count),D=ms.hasDefaultValue(n),F=C?this.pluralResolver.getSuffix(d,n.count,n):"",L=n.ordinal&&C?this.pluralResolver.getSuffix(d,n.count,{ordinal:!1}):"",z=C&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),M=z&&n[`defaultValue${this.options.pluralSeparator}zero`]||n[`defaultValue${F}`]||n[`defaultValue${L}`]||n.defaultValue;!this.isValidLookup(p)&&D&&(v=!0,p=M),this.isValidLookup(p)||(I=!0,p=o);const ce=(n.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&I?void 0:p,he=D&&M!==p&&this.options.updateMissing;if(I||v||he){if(this.logger.log(he?"updateKey":"missingKey",d,c,o,he?M:p),a){const be=this.resolve(o,{...n,keySeparator:!1});be&&be.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let de=[];const ae=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if(this.options.saveMissingTo==="fallback"&&ae&&ae[0])for(let be=0;be<ae.length;be++)de.push(ae[be]);else this.options.saveMissingTo==="all"?de=this.languageUtils.toResolveHierarchy(n.lng||this.language):de.push(n.lng||this.language);const Se=(be,Te,A)=>{const pe=D&&A!==p?A:ce;this.options.missingKeyHandler?this.options.missingKeyHandler(be,c,Te,pe,he,n):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(be,c,Te,pe,he,n),this.emit("missingKey",be,c,Te,p)};this.options.saveMissing&&(this.options.saveMissingPlurals&&C?de.forEach(be=>{const Te=this.pluralResolver.getSuffixes(be,n);z&&n[`defaultValue${this.options.pluralSeparator}zero`]&&Te.indexOf(`${this.options.pluralSeparator}zero`)<0&&Te.push(`${this.options.pluralSeparator}zero`),Te.forEach(A=>{Se([be],o+A,n[`defaultValue${A}`]||M)})}):Se(de,o,M))}p=this.extendTranslation(p,e,n,h,r),I&&p===o&&this.options.appendNamespaceToMissingKey&&(p=`${c}:${o}`),(I||v)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?p=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${c}:${o}`:o,v?p:void 0):p=this.options.parseMissingKeyHandler(p))}return i?(h.res=p,h.usedParams=this.getUsedParamsDetails(n),h):p}extendTranslation(e,n,r,i,a){var o=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...r},r.lng||this.language||i.usedLng,i.usedNS,i.usedKey,{resolved:i});else if(!r.skipInterpolation){r.interpolation&&this.interpolator.init({...r,interpolation:{...this.options.interpolation,...r.interpolation}});const d=q(e)&&(r&&r.interpolation&&r.interpolation.skipOnVariables!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let u;if(d){const p=e.match(this.interpolator.nestingRegexp);u=p&&p.length}let h=r.replace&&!q(r.replace)?r.replace:r;if(this.options.interpolation.defaultVariables&&(h={...this.options.interpolation.defaultVariables,...h}),e=this.interpolator.interpolate(e,h,r.lng||this.language||i.usedLng,r),d){const p=e.match(this.interpolator.nestingRegexp),m=p&&p.length;u<m&&(r.nest=!1)}!r.lng&&this.options.compatibilityAPI!=="v1"&&i&&i.res&&(r.lng=this.language||i.usedLng),r.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var p=arguments.length,m=new Array(p),x=0;x<p;x++)m[x]=arguments[x];return a&&a[0]===m[0]&&!r.context?(o.logger.warn(`It seems you are nesting recursively key: ${m[0]} in key: ${n[0]}`),null):o.translate(...m,n)},r)),r.interpolation&&this.interpolator.reset()}const l=r.postProcess||this.options.postProcess,c=q(l)?[l]:l;return e!=null&&c&&c.length&&r.applyPostProcessor!==!1&&(e=Ph.handle(c,e,n,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...i,usedParams:this.getUsedParamsDetails(r)},...r}:r,this)),e}resolve(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r,i,a,o,l;return q(e)&&(e=[e]),e.forEach(c=>{if(this.isValidLookup(r))return;const d=this.extractFromKey(c,n),u=d.key;i=u;let h=d.namespaces;this.options.fallbackNS&&(h=h.concat(this.options.fallbackNS));const p=n.count!==void 0&&!q(n.count),m=p&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),x=n.context!==void 0&&(q(n.context)||typeof n.context=="number")&&n.context!=="",y=n.lngs?n.lngs:this.languageUtils.toResolveHierarchy(n.lng||this.language,n.fallbackLng);h.forEach(b=>{this.isValidLookup(r)||(l=b,!hc[`${y[0]}-${b}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(l)&&(hc[`${y[0]}-${b}`]=!0,this.logger.warn(`key "${i}" for languages "${y.join(", ")}" won't get resolved as namespace "${l}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),y.forEach(_=>{if(this.isValidLookup(r))return;o=_;const j=[u];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(j,u,_,b,n);else{let v;p&&(v=this.pluralResolver.getSuffix(_,n.count,n));const I=`${this.options.pluralSeparator}zero`,C=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(p&&(j.push(u+v),n.ordinal&&v.indexOf(C)===0&&j.push(u+v.replace(C,this.options.pluralSeparator)),m&&j.push(u+I)),x){const D=`${u}${this.options.contextSeparator}${n.context}`;j.push(D),p&&(j.push(D+v),n.ordinal&&v.indexOf(C)===0&&j.push(D+v.replace(C,this.options.pluralSeparator)),m&&j.push(D+I))}}let w;for(;w=j.pop();)this.isValidLookup(r)||(a=w,r=this.getResource(_,b,w,n))}))})}),{res:r,usedKey:i,exactUsedKey:a,usedLng:o,usedNS:l}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,n,r,i):this.resourceStore.getResource(e,n,r,i)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],r=e.replace&&!q(e.replace);let i=r?e.replace:e;if(r&&typeof e.count<"u"&&(i.count=e.count),this.options.interpolation.defaultVariables&&(i={...this.options.interpolation.defaultVariables,...i}),!r){i={...i};for(const a of n)delete i[a]}return i}static hasDefaultValue(e){const n="defaultValue";for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&n===r.substring(0,n.length)&&e[r]!==void 0)return!0;return!1}}const _a=t=>t.charAt(0).toUpperCase()+t.slice(1);class pc{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Ot.create("languageUtils")}getScriptPartFromCode(e){if(e=fs(e),!e||e.indexOf("-")<0)return null;const n=e.split("-");return n.length===2||(n.pop(),n[n.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(n.join("-"))}getLanguagePartFromCode(e){if(e=fs(e),!e||e.indexOf("-")<0)return e;const n=e.split("-");return this.formatLanguageCode(n[0])}formatLanguageCode(e){if(q(e)&&e.indexOf("-")>-1){if(typeof Intl<"u"&&typeof Intl.getCanonicalLocales<"u")try{let i=Intl.getCanonicalLocales(e)[0];if(i&&this.options.lowerCaseLng&&(i=i.toLowerCase()),i)return i}catch{}const n=["hans","hant","latn","cyrl","cans","mong","arab"];let r=e.split("-");return this.options.lowerCaseLng?r=r.map(i=>i.toLowerCase()):r.length===2?(r[0]=r[0].toLowerCase(),r[1]=r[1].toUpperCase(),n.indexOf(r[1].toLowerCase())>-1&&(r[1]=_a(r[1].toLowerCase()))):r.length===3&&(r[0]=r[0].toLowerCase(),r[1].length===2&&(r[1]=r[1].toUpperCase()),r[0]!=="sgn"&&r[2].length===2&&(r[2]=r[2].toUpperCase()),n.indexOf(r[1].toLowerCase())>-1&&(r[1]=_a(r[1].toLowerCase())),n.indexOf(r[2].toLowerCase())>-1&&(r[2]=_a(r[2].toLowerCase()))),r.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let n;return e.forEach(r=>{if(n)return;const i=this.formatLanguageCode(r);(!this.options.supportedLngs||this.isSupportedCode(i))&&(n=i)}),!n&&this.options.supportedLngs&&e.forEach(r=>{if(n)return;const i=this.getLanguagePartFromCode(r);if(this.isSupportedCode(i))return n=i;n=this.options.supportedLngs.find(a=>{if(a===i)return a;if(!(a.indexOf("-")<0&&i.indexOf("-")<0)&&(a.indexOf("-")>0&&i.indexOf("-")<0&&a.substring(0,a.indexOf("-"))===i||a.indexOf(i)===0&&i.length>1))return a})}),n||(n=this.getFallbackCodes(this.options.fallbackLng)[0]),n}getFallbackCodes(e,n){if(!e)return[];if(typeof e=="function"&&(e=e(n)),q(e)&&(e=[e]),Array.isArray(e))return e;if(!n)return e.default||[];let r=e[n];return r||(r=e[this.getScriptPartFromCode(n)]),r||(r=e[this.formatLanguageCode(n)]),r||(r=e[this.getLanguagePartFromCode(n)]),r||(r=e.default),r||[]}toResolveHierarchy(e,n){const r=this.getFallbackCodes(n||this.options.fallbackLng||[],e),i=[],a=o=>{o&&(this.isSupportedCode(o)?i.push(o):this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`))};return q(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&a(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&a(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&a(this.getLanguagePartFromCode(e))):q(e)&&a(this.formatLanguageCode(e)),r.forEach(o=>{i.indexOf(o)<0&&a(this.formatLanguageCode(o))}),i}}let Ax=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],Px={1:t=>+(t>1),2:t=>+(t!=1),3:t=>0,4:t=>t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,5:t=>t==0?0:t==1?1:t==2?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5,6:t=>t==1?0:t>=2&&t<=4?1:2,7:t=>t==1?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,8:t=>t==1?0:t==2?1:t!=8&&t!=11?2:3,9:t=>+(t>=2),10:t=>t==1?0:t==2?1:t<7?2:t<11?3:4,11:t=>t==1||t==11?0:t==2||t==12?1:t>2&&t<20?2:3,12:t=>+(t%10!=1||t%100==11),13:t=>+(t!==0),14:t=>t==1?0:t==2?1:t==3?2:3,15:t=>t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2,16:t=>t%10==1&&t%100!=11?0:t!==0?1:2,17:t=>t==1||t%10==1&&t%100!=11?0:1,18:t=>t==0?0:t==1?1:2,19:t=>t==1?0:t==0||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3,20:t=>t==1?0:t==0||t%100>0&&t%100<20?1:2,21:t=>t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0,22:t=>t==1?0:t==2?1:(t<0||t>10)&&t%10==0?2:3};const Nx=["v1","v2","v3"],Lx=["v4"],fc={zero:0,one:1,two:2,few:3,many:4,other:5},$x=()=>{const t={};return Ax.forEach(e=>{e.lngs.forEach(n=>{t[n]={numbers:e.nr,plurals:Px[e.fc]}})}),t};class Dx{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=n,this.logger=Ot.create("pluralResolver"),(!this.options.compatibilityJSON||Lx.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=$x(),this.pluralRulesCache={}}addRule(e,n){this.rules[e]=n}clearCache(){this.pluralRulesCache={}}getRule(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi()){const r=fs(e==="dev"?"en":e),i=n.ordinal?"ordinal":"cardinal",a=JSON.stringify({cleanedCode:r,type:i});if(a in this.pluralRulesCache)return this.pluralRulesCache[a];let o;try{o=new Intl.PluralRules(r,{type:i})}catch{if(!e.match(/-|_/))return;const c=this.languageUtils.getLanguagePartFromCode(e);o=this.getRule(c,n)}return this.pluralRulesCache[a]=o,o}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getRule(e,n);return this.shouldUseIntlApi()?r&&r.resolvedOptions().pluralCategories.length>1:r&&r.numbers.length>1}getPluralFormsOfKey(e,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,r).map(i=>`${n}${i}`)}getSuffixes(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getRule(e,n);return r?this.shouldUseIntlApi()?r.resolvedOptions().pluralCategories.sort((i,a)=>fc[i]-fc[a]).map(i=>`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${i}`):r.numbers.map(i=>this.getSuffix(e,i,n)):[]}getSuffix(e,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const i=this.getRule(e,r);return i?this.shouldUseIntlApi()?`${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${i.select(n)}`:this.getSuffixRetroCompatible(i,n):(this.logger.warn(`no plural rule found for: ${e}`),"")}getSuffixRetroCompatible(e,n){const r=e.noAbs?e.plurals(n):e.plurals(Math.abs(n));let i=e.numbers[r];this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1&&(i===2?i="plural":i===1&&(i=""));const a=()=>this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString();return this.options.compatibilityJSON==="v1"?i===1?"":typeof i=="number"?`_plural_${i.toString()}`:a():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1?a():this.options.prepend&&r.toString()?this.options.prepend+r.toString():r.toString()}shouldUseIntlApi(){return!Nx.includes(this.options.compatibilityJSON)}}const mc=function(t,e,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,a=Sx(t,e,n);return!a&&i&&q(n)&&(a=vo(t,n,r),a===void 0&&(a=vo(e,n,r))),a},Ta=t=>t.replace(/\$/g,"$$$$");class Mx{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Ot.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||(n=>n),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:n,escapeValue:r,useRawValueToEscape:i,prefix:a,prefixEscaped:o,suffix:l,suffixEscaped:c,formatSeparator:d,unescapeSuffix:u,unescapePrefix:h,nestingPrefix:p,nestingPrefixEscaped:m,nestingSuffix:x,nestingSuffixEscaped:y,nestingOptionsSeparator:b,maxReplaces:_,alwaysFormat:j}=e.interpolation;this.escape=n!==void 0?n:Ex,this.escapeValue=r!==void 0?r:!0,this.useRawValueToEscape=i!==void 0?i:!1,this.prefix=a?ar(a):o||"{{",this.suffix=l?ar(l):c||"}}",this.formatSeparator=d||",",this.unescapePrefix=u?"":h||"-",this.unescapeSuffix=this.unescapePrefix?"":u||"",this.nestingPrefix=p?ar(p):m||ar("$t("),this.nestingSuffix=x?ar(x):y||ar(")"),this.nestingOptionsSeparator=b||",",this.maxReplaces=_||1e3,this.alwaysFormat=j!==void 0?j:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(n,r)=>n&&n.source===r?(n.lastIndex=0,n):new RegExp(r,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,n,r,i){let a,o,l;const c=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},d=m=>{if(m.indexOf(this.formatSeparator)<0){const _=mc(n,c,m,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(_,void 0,r,{...i,...n,interpolationkey:m}):_}const x=m.split(this.formatSeparator),y=x.shift().trim(),b=x.join(this.formatSeparator).trim();return this.format(mc(n,c,y,this.options.keySeparator,this.options.ignoreJSONStructure),b,r,{...i,...n,interpolationkey:y})};this.resetRegExp();const u=i&&i.missingInterpolationHandler||this.options.missingInterpolationHandler,h=i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:m=>Ta(m)},{regex:this.regexp,safeValue:m=>this.escapeValue?Ta(this.escape(m)):Ta(m)}].forEach(m=>{for(l=0;a=m.regex.exec(e);){const x=a[1].trim();if(o=d(x),o===void 0)if(typeof u=="function"){const b=u(e,a,i);o=q(b)?b:""}else if(i&&Object.prototype.hasOwnProperty.call(i,x))o="";else if(h){o=a[0];continue}else this.logger.warn(`missed to pass in variable ${x} for interpolating ${e}`),o="";else!q(o)&&!this.useRawValueToEscape&&(o=oc(o));const y=m.safeValue(o);if(e=e.replace(a[0],y),h?(m.regex.lastIndex+=o.length,m.regex.lastIndex-=a[0].length):m.regex.lastIndex=0,l++,l>=this.maxReplaces)break}}),e}nest(e,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i,a,o;const l=(c,d)=>{const u=this.nestingOptionsSeparator;if(c.indexOf(u)<0)return c;const h=c.split(new RegExp(`${u}[ ]*{`));let p=`{${h[1]}`;c=h[0],p=this.interpolate(p,o);const m=p.match(/'/g),x=p.match(/"/g);(m&&m.length%2===0&&!x||x.length%2!==0)&&(p=p.replace(/'/g,'"'));try{o=JSON.parse(p),d&&(o={...d,...o})}catch(y){return this.logger.warn(`failed parsing options string in nesting for key ${c}`,y),`${c}${u}${p}`}return o.defaultValue&&o.defaultValue.indexOf(this.prefix)>-1&&delete o.defaultValue,c};for(;i=this.nestingRegexp.exec(e);){let c=[];o={...r},o=o.replace&&!q(o.replace)?o.replace:o,o.applyPostProcessor=!1,delete o.defaultValue;let d=!1;if(i[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(i[1])){const u=i[1].split(this.formatSeparator).map(h=>h.trim());i[1]=u.shift(),c=u,d=!0}if(a=n(l.call(this,i[1].trim(),o),o),a&&i[0]===e&&!q(a))return a;q(a)||(a=oc(a)),a||(this.logger.warn(`missed to resolve ${i[1]} for nesting ${e}`),a=""),d&&(a=c.reduce((u,h)=>this.format(u,h,r.lng,{...r,interpolationkey:i[1].trim()}),a.trim())),e=e.replace(i[0],a),this.regexp.lastIndex=0}return e}}const Fx=t=>{let e=t.toLowerCase().trim();const n={};if(t.indexOf("(")>-1){const r=t.split("(");e=r[0].toLowerCase().trim();const i=r[1].substring(0,r[1].length-1);e==="currency"&&i.indexOf(":")<0?n.currency||(n.currency=i.trim()):e==="relativetime"&&i.indexOf(":")<0?n.range||(n.range=i.trim()):i.split(";").forEach(o=>{if(o){const[l,...c]=o.split(":"),d=c.join(":").trim().replace(/^'+|'+$/g,""),u=l.trim();n[u]||(n[u]=d),d==="false"&&(n[u]=!1),d==="true"&&(n[u]=!0),isNaN(d)||(n[u]=parseInt(d,10))}})}return{formatName:e,formatOptions:n}},or=t=>{const e={};return(n,r,i)=>{let a=i;i&&i.interpolationkey&&i.formatParams&&i.formatParams[i.interpolationkey]&&i[i.interpolationkey]&&(a={...a,[i.interpolationkey]:void 0});const o=r+JSON.stringify(a);let l=e[o];return l||(l=t(fs(r),i),e[o]=l),l(n)}};class Ux{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Ot.create("formatter"),this.options=e,this.formats={number:or((n,r)=>{const i=new Intl.NumberFormat(n,{...r});return a=>i.format(a)}),currency:or((n,r)=>{const i=new Intl.NumberFormat(n,{...r,style:"currency"});return a=>i.format(a)}),datetime:or((n,r)=>{const i=new Intl.DateTimeFormat(n,{...r});return a=>i.format(a)}),relativetime:or((n,r)=>{const i=new Intl.RelativeTimeFormat(n,{...r});return a=>i.format(a,r.range||"day")}),list:or((n,r)=>{const i=new Intl.ListFormat(n,{...r});return a=>i.format(a)})},this.init(e)}init(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=n.interpolation.formatSeparator||","}add(e,n){this.formats[e.toLowerCase().trim()]=n}addCached(e,n){this.formats[e.toLowerCase().trim()]=or(n)}format(e,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const a=n.split(this.formatSeparator);if(a.length>1&&a[0].indexOf("(")>1&&a[0].indexOf(")")<0&&a.find(l=>l.indexOf(")")>-1)){const l=a.findIndex(c=>c.indexOf(")")>-1);a[0]=[a[0],...a.splice(1,l)].join(this.formatSeparator)}return a.reduce((l,c)=>{const{formatName:d,formatOptions:u}=Fx(c);if(this.formats[d]){let h=l;try{const p=i&&i.formatParams&&i.formatParams[i.interpolationkey]||{},m=p.locale||p.lng||i.locale||i.lng||r;h=this.formats[d](l,m,{...u,...i,...p})}catch(p){this.logger.warn(p)}return h}else this.logger.warn(`there was no format function for ${d}`);return l},e)}}const Bx=(t,e)=>{t.pending[e]!==void 0&&(delete t.pending[e],t.pendingCount--)};class zx extends Zs{constructor(e,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=n,this.services=r,this.languageUtils=r.languageUtils,this.options=i,this.logger=Ot.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=i.maxParallelReads||10,this.readingCalls=0,this.maxRetries=i.maxRetries>=0?i.maxRetries:5,this.retryTimeout=i.retryTimeout>=1?i.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(r,i.backend,i)}queueLoad(e,n,r,i){const a={},o={},l={},c={};return e.forEach(d=>{let u=!0;n.forEach(h=>{const p=`${d}|${h}`;!r.reload&&this.store.hasResourceBundle(d,h)?this.state[p]=2:this.state[p]<0||(this.state[p]===1?o[p]===void 0&&(o[p]=!0):(this.state[p]=1,u=!1,o[p]===void 0&&(o[p]=!0),a[p]===void 0&&(a[p]=!0),c[h]===void 0&&(c[h]=!0)))}),u||(l[d]=!0)}),(Object.keys(a).length||Object.keys(o).length)&&this.queue.push({pending:o,pendingCount:Object.keys(o).length,loaded:{},errors:[],callback:i}),{toLoad:Object.keys(a),pending:Object.keys(o),toLoadLanguages:Object.keys(l),toLoadNamespaces:Object.keys(c)}}loaded(e,n,r){const i=e.split("|"),a=i[0],o=i[1];n&&this.emit("failedLoading",a,o,n),!n&&r&&this.store.addResourceBundle(a,o,r,void 0,void 0,{skipCopy:!0}),this.state[e]=n?-1:2,n&&r&&(this.state[e]=0);const l={};this.queue.forEach(c=>{kx(c.loaded,[a],o),Bx(c,e),n&&c.errors.push(n),c.pendingCount===0&&!c.done&&(Object.keys(c.loaded).forEach(d=>{l[d]||(l[d]={});const u=c.loaded[d];u.length&&u.forEach(h=>{l[d][h]===void 0&&(l[d][h]=!0)})}),c.done=!0,c.errors.length?c.callback(c.errors):c.callback())}),this.emit("loaded",l),this.queue=this.queue.filter(c=>!c.done)}read(e,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,o=arguments.length>5?arguments[5]:void 0;if(!e.length)return o(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:n,fcName:r,tried:i,wait:a,callback:o});return}this.readingCalls++;const l=(d,u)=>{if(this.readingCalls--,this.waitingReads.length>0){const h=this.waitingReads.shift();this.read(h.lng,h.ns,h.fcName,h.tried,h.wait,h.callback)}if(d&&u&&i<this.maxRetries){setTimeout(()=>{this.read.call(this,e,n,r,i+1,a*2,o)},a);return}o(d,u)},c=this.backend[r].bind(this.backend);if(c.length===2){try{const d=c(e,n);d&&typeof d.then=="function"?d.then(u=>l(null,u)).catch(l):l(null,d)}catch(d){l(d)}return}return c(e,n,l)}prepareLoading(e,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),i&&i();q(e)&&(e=this.languageUtils.toResolveHierarchy(e)),q(n)&&(n=[n]);const a=this.queueLoad(e,n,r,i);if(!a.toLoad.length)return a.pending.length||i(),null;a.toLoad.forEach(o=>{this.loadOne(o)})}load(e,n,r){this.prepareLoading(e,n,{},r)}reload(e,n,r){this.prepareLoading(e,n,{reload:!0},r)}loadOne(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const r=e.split("|"),i=r[0],a=r[1];this.read(i,a,"read",void 0,void 0,(o,l)=>{o&&this.logger.warn(`${n}loading namespace ${a} for language ${i} failed`,o),!o&&l&&this.logger.log(`${n}loaded namespace ${a} for language ${i}`,l),this.loaded(e,o,l)})}saveMissing(e,n,r,i,a){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},l=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(n)){this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(r==null||r==="")){if(this.backend&&this.backend.create){const c={...o,isUpdate:a},d=this.backend.create.bind(this.backend);if(d.length<6)try{let u;d.length===5?u=d(e,n,r,i,c):u=d(e,n,r,i),u&&typeof u.then=="function"?u.then(h=>l(null,h)).catch(l):l(null,u)}catch(u){l(u)}else d(e,n,r,i,l,c)}!e||!e[0]||this.store.addResource(e[0],n,r,i)}}}const gc=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:t=>{let e={};if(typeof t[1]=="object"&&(e=t[1]),q(t[1])&&(e.defaultValue=t[1]),q(t[2])&&(e.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const n=t[3]||t[2];Object.keys(n).forEach(r=>{e[r]=n[r]})}return e},interpolation:{escapeValue:!0,format:t=>t,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),xc=t=>(q(t.ns)&&(t.ns=[t.ns]),q(t.fallbackLng)&&(t.fallbackLng=[t.fallbackLng]),q(t.fallbackNS)&&(t.fallbackNS=[t.fallbackNS]),t.supportedLngs&&t.supportedLngs.indexOf("cimode")<0&&(t.supportedLngs=t.supportedLngs.concat(["cimode"])),t),Fi=()=>{},Hx=t=>{Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(n=>{typeof t[n]=="function"&&(t[n]=t[n].bind(t))})};class ii extends Zs{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;if(super(),this.options=xc(e),this.services={},this.logger=Ot,this.modules={external:[]},Hx(this),n&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,n),this;setTimeout(()=>{this.init(e,n)},0)}}init(){var e=this;let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof n=="function"&&(r=n,n={}),!n.defaultNS&&n.defaultNS!==!1&&n.ns&&(q(n.ns)?n.defaultNS=n.ns:n.ns.indexOf("translation")<0&&(n.defaultNS=n.ns[0]));const i=gc();this.options={...i,...this.options,...xc(n)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...i.interpolation,...this.options.interpolation}),n.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=n.keySeparator),n.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=n.nsSeparator);const a=u=>u?typeof u=="function"?new u:u:null;if(!this.options.isClone){this.modules.logger?Ot.init(a(this.modules.logger),this.options):Ot.init(null,this.options);let u;this.modules.formatter?u=this.modules.formatter:typeof Intl<"u"&&(u=Ux);const h=new pc(this.options);this.store=new uc(this.options.resources,this.options);const p=this.services;p.logger=Ot,p.resourceStore=this.store,p.languageUtils=h,p.pluralResolver=new Dx(h,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),u&&(!this.options.interpolation.format||this.options.interpolation.format===i.interpolation.format)&&(p.formatter=a(u),p.formatter.init(p,this.options),this.options.interpolation.format=p.formatter.format.bind(p.formatter)),p.interpolator=new Mx(this.options),p.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},p.backendConnector=new zx(a(this.modules.backend),p.resourceStore,p,this.options),p.backendConnector.on("*",function(m){for(var x=arguments.length,y=new Array(x>1?x-1:0),b=1;b<x;b++)y[b-1]=arguments[b];e.emit(m,...y)}),this.modules.languageDetector&&(p.languageDetector=a(this.modules.languageDetector),p.languageDetector.init&&p.languageDetector.init(p,this.options.detection,this.options)),this.modules.i18nFormat&&(p.i18nFormat=a(this.modules.i18nFormat),p.i18nFormat.init&&p.i18nFormat.init(this)),this.translator=new ms(this.services,this.options),this.translator.on("*",function(m){for(var x=arguments.length,y=new Array(x>1?x-1:0),b=1;b<x;b++)y[b-1]=arguments[b];e.emit(m,...y)}),this.modules.external.forEach(m=>{m.init&&m.init(this)})}if(this.format=this.options.interpolation.format,r||(r=Fi),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const u=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);u.length>0&&u[0]!=="dev"&&(this.options.lng=u[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(u=>{this[u]=function(){return e.store[u](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(u=>{this[u]=function(){return e.store[u](...arguments),e}});const c=zr(),d=()=>{const u=(h,p)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),c.resolve(p),r(h,p)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return u(null,this.t.bind(this));this.changeLanguage(this.options.lng,u)};return this.options.resources||!this.options.initImmediate?d():setTimeout(d,0),c}loadResources(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Fi;const i=q(e)?e:this.language;if(typeof e=="function"&&(r=e),!this.options.resources||this.options.partialBundledLanguages){if(i&&i.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return r();const a=[],o=l=>{if(!l||l==="cimode")return;this.services.languageUtils.toResolveHierarchy(l).forEach(d=>{d!=="cimode"&&a.indexOf(d)<0&&a.push(d)})};i?o(i):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(c=>o(c)),this.options.preload&&this.options.preload.forEach(l=>o(l)),this.services.backendConnector.load(a,this.options.ns,l=>{!l&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),r(l)})}else r(null)}reloadResources(e,n,r){const i=zr();return typeof e=="function"&&(r=e,e=void 0),typeof n=="function"&&(r=n,n=void 0),e||(e=this.languages),n||(n=this.options.ns),r||(r=Fi),this.services.backendConnector.reload(e,n,a=>{i.resolve(),r(a)}),i}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&Ph.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let n=0;n<this.languages.length;n++){const r=this.languages[n];if(!(["cimode","dev"].indexOf(r)>-1)&&this.store.hasLanguageSomeTranslations(r)){this.resolvedLanguage=r;break}}}changeLanguage(e,n){var r=this;this.isLanguageChangingTo=e;const i=zr();this.emit("languageChanging",e);const a=c=>{this.language=c,this.languages=this.services.languageUtils.toResolveHierarchy(c),this.resolvedLanguage=void 0,this.setResolvedLanguage(c)},o=(c,d)=>{d?(a(d),this.translator.changeLanguage(d),this.isLanguageChangingTo=void 0,this.emit("languageChanged",d),this.logger.log("languageChanged",d)):this.isLanguageChangingTo=void 0,i.resolve(function(){return r.t(...arguments)}),n&&n(c,function(){return r.t(...arguments)})},l=c=>{!e&&!c&&this.services.languageDetector&&(c=[]);const d=q(c)?c:this.services.languageUtils.getBestMatchFromCodes(c);d&&(this.language||a(d),this.translator.language||this.translator.changeLanguage(d),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(d)),this.loadResources(d,u=>{o(u,d)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?l(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(l):this.services.languageDetector.detect(l):l(e),i}getFixedT(e,n,r){var i=this;const a=function(o,l){let c;if(typeof l!="object"){for(var d=arguments.length,u=new Array(d>2?d-2:0),h=2;h<d;h++)u[h-2]=arguments[h];c=i.options.overloadTranslationOptionHandler([o,l].concat(u))}else c={...l};c.lng=c.lng||a.lng,c.lngs=c.lngs||a.lngs,c.ns=c.ns||a.ns,c.keyPrefix!==""&&(c.keyPrefix=c.keyPrefix||r||a.keyPrefix);const p=i.options.keySeparator||".";let m;return c.keyPrefix&&Array.isArray(o)?m=o.map(x=>`${c.keyPrefix}${p}${x}`):m=c.keyPrefix?`${c.keyPrefix}${p}${o}`:o,i.t(m,c)};return q(e)?a.lng=e:a.lngs=e,a.ns=n,a.keyPrefix=r,a}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const r=n.lng||this.resolvedLanguage||this.languages[0],i=this.options?this.options.fallbackLng:!1,a=this.languages[this.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const o=(l,c)=>{const d=this.services.backendConnector.state[`${l}|${c}`];return d===-1||d===0||d===2};if(n.precheck){const l=n.precheck(this,o);if(l!==void 0)return l}return!!(this.hasResourceBundle(r,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||o(r,e)&&(!i||o(a,e)))}loadNamespaces(e,n){const r=zr();return this.options.ns?(q(e)&&(e=[e]),e.forEach(i=>{this.options.ns.indexOf(i)<0&&this.options.ns.push(i)}),this.loadResources(i=>{r.resolve(),n&&n(i)}),r):(n&&n(),Promise.resolve())}loadLanguages(e,n){const r=zr();q(e)&&(e=[e]);const i=this.options.preload||[],a=e.filter(o=>i.indexOf(o)<0&&this.services.languageUtils.isSupportedCode(o));return a.length?(this.options.preload=i.concat(a),this.loadResources(o=>{r.resolve(),n&&n(o)}),r):(n&&n(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";const n=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],r=this.services&&this.services.languageUtils||new pc(gc());return n.indexOf(r.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return new ii(e,n)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Fi;const r=e.forkResourceStore;r&&delete e.forkResourceStore;const i={...this.options,...e,isClone:!0},a=new ii(i);return(e.debug!==void 0||e.prefix!==void 0)&&(a.logger=a.logger.clone(e)),["store","services","language"].forEach(l=>{a[l]=this[l]}),a.services={...this.services},a.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},r&&(a.store=new uc(this.store.data,i),a.services.resourceStore=a.store),a.translator=new ms(a.services,i),a.translator.on("*",function(l){for(var c=arguments.length,d=new Array(c>1?c-1:0),u=1;u<c;u++)d[u-1]=arguments[u];a.emit(l,...d)}),a.init(i,n),a.translator.options=i,a.translator.backendConnector.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},a}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const He=ii.createInstance();He.createInstance=ii.createInstance;He.createInstance;He.dir;He.init;He.loadResources;He.reloadResources;He.use;He.changeLanguage;He.getFixedT;He.t;He.exists;He.setDefaultNamespace;He.hasLoadedNamespace;He.loadNamespaces;He.loadLanguages;const Vx="Sign In",Wx="Sign Out",qx="Orders",Kx="Language",Gx="Loading",Zx="Retry",Yx="Cancel",Jx="Get early access",Xx="Account Menu",Qx="SenditGo home",ey="Toggle theme",ty="Clear form",ny={shipper:{label:"Shipper",hint:"Create, import and track your orders"},carrier:{label:"Carrier",hint:"SenditGo Carrier fleet console",login:"Carrier login"},consignee:{label:"Consignee",hint:"Sign in to SenditGo Consignee",login:"Consignee login"}},ry="Carrier login",iy={signIn:Vx,signOut:Wx,orders:qx,language:Kx,loading:Gx,retry:Zx,cancel:Yx,getEarlyAccess:Jx,accountMenu:Xx,brandHome:Qx,toggleTheme:ey,clearForm:ty,loginRole:ny,carrierLogin:ry},sy={eyebrow:"Tenant Portal"},ay={ariaLabel:"Platform Navigation",platform:"Platform",groups:{operations:"Operations",finance:"Finance",admin:"Admin"},orders:"Orders",createOrder:"Create Order",importOrders:"Import Orders",billing:"Billing",usersRoles:"Users & Roles"},oy={title:"Sign in to {{brand}}",lead:"Track orders, create shipments, and manage your team.",mobileLabel:"Mobile Number",mobilePlaceholder:"412 345 678",sendCode:"Send Code",otpLabel:"Verification Code",otpHint:"Enter the 6-digit code sent to {{phone}}.",verify:"Verify & Sign In",resend:"Resend Code",changeNumber:"Change Number",invalidPhone:"Enter a valid mobile number.",invalidOtp:"Enter the 6-digit code.",otpFailed:"That code didn't match. Check it and try again.",sendFailed:"We couldn't send the code. Try again in a moment.",loginFailed:"Sign-in failed. Try again.",devSignIn:"Dev Sign-In (Mock)"},ly={title:"Orders",lead:"Find shipments, review status, and open the tracking detail without leaving the platform.",searchLabel:"Search",searchPlaceholder:"Order ID",statusLabel:"Status",allStatuses:"All statuses",applyFilters:"Apply",clearFilters:"Clear",colOrderId:"Order ID",colRoute:"Route",colCreated:"Created",colPackages:"Packages",colStatus:"Status",colActions:"Actions",viewDetails:"View",empty:"No orders match this view.",loadFailed:"We couldn't load your orders.",showingRange:"Showing {{from}}-{{to}} of {{total}}",prevPage:"Previous",nextPage:"Next",detailTitle:"Order {{id}}",detailLead:"Tracking detail, contact handoff, driver assignment, and package state.",detailLoadFailed:"We couldn't load this order.",backToOrders:"Back to orders",sender:"Sender",recipient:"Recipient",timeline:"Timeline",driver:"Driver",comment:"Comment",packagesTitle:"Packages",packageId:"Package ID",packageSize:"Size",packageWeight:"Weight",packagePrice:"Price",packageAbbrev:"pkgs",notAssigned:"Not assigned",none:"None",routeTo:"to",emptyFiltered:"No orders match these filters.",pickup:"Pickup",delivery:"Delivery",timezone:"Timezone",sizeCm:"{{length}} x {{width}} x {{height}} cm",weightKg:"{{weight}} kg"},cy={title:"Create Order",lead:"Prepare a shipment draft with sender, recipient, package, and delivery notes.",sectionContact:"Contact Details",sectionPackage:"Package",senderName:"Sender Name",senderAddress:"Sender Address",senderMobile:"Sender Mobile",senderPostcode:"Sender Postcode",recipientName:"Recipient Name",recipientAddress:"Recipient Address",recipientMobile:"Recipient Mobile",recipientPostcode:"Recipient Postcode",packages:"Packages",weight:"Weight (kg)",reference:"Reference",notes:"Driver Notes",prepareDraft:"Prepare Draft",draftReady:"Your draft is complete and validated.",required:"Complete sender, recipient, addresses, and at least one package.",backendNotice:"Online order creation is coming soon. You can prepare and validate a draft here today."},dy={title:"Import Orders",lead:"Upload a fleet-template CSV to open a preview session. Commit is not live yet.",uploadLabel:"CSV File",chooseFile:"Choose file",downloadTemplate:"Download template",columnsTitle:"Template",columnsBody:"Use the fleet import template (invoice, customer, sender and recipient address parts, SKU, qty, weight, and size). A 6-column file will not open a session.",previewTitle:"Preview session",sessionTitle:"Session {{id}}",sessionFile:"{{name}}",sessionCounts:"{{valid}} valid · {{invalid}} invalid · {{total}} rows",rowsParsed:"{{count}} row parsed",rowsParsed_other:"{{count}} rows parsed",backendNotice:"Online batch import is not live yet. Upload opens a mock preview session from the fleet CSV template — it does not create orders or price them.",previewEmpty:"Upload a fleet-template CSV to open a preview session.",noRows:"That file has no order rows. Add at least one row below the header and try again.",missingColumns:"The file is missing required columns: {{columns}}.",parseFailed:"We couldn't read that file. Export it as CSV and try again.",fileFormat:"Use a .csv exported from the fleet template.",uploadFailed:"We couldn't open a preview session. Try again.",templateFailed:"We couldn't download the template. Try again.",jobMissing:"That preview session is no longer available. Upload the file again.",clearSession:"Clear session",filterAll:"All",filterValid:"Valid",filterInvalid:"Invalid",colInvoice:"Invoice",colRoute:"Route",colPickup:"Pickup",colDelivery:"Delivery",colQty:"Qty",colWeight:"Weight",colReason:"Reason",rowValid:"Valid",rowInvalid:"Invalid"},uy={title:"Users & Roles",lead:"Manage who can sign in to the portal and what each role can do.",usersTitle:"Users",name:"Name",email:"Email",role:"Role",status:"Status",actions:"Actions",active:"Active",inactive:"Inactive",you:"You",usersEmpty:"No users yet — add your first teammate.",usersLoadFailed:"We couldn't load users.",editUser:"Edit",saveUser:"Save",userUpdated:"{{name}}'s role is now {{role}}.",userUpdateFailed:"We couldn't update that user. Try again.",addUserTitle:"Add User",addUser:"Add User",addUserRequired:"Enter a name and pick a role.",addUserSuccess:"{{name}} has been added.",addUserFailed:"We couldn't add that user. Try again.",rolesTitle:"Roles",permissions:"Permissions",members:"Members",rolesEmpty:"No roles yet — create your first role.",rolesLoadFailed:"We couldn't load roles.",createRole:"Create Role",editRole:"Edit",deleteRole:"Delete",deleteConfirm:"Delete this role?",confirmDelete:"Confirm Delete",roleDeleted:"Role deleted.",deleteFailed:"We couldn't delete that role. Try again.",deleteBlocked_one:"Reassign {{count}} user before deleting this role.",deleteBlocked_other:"Reassign {{count}} users before deleting this role.",systemRole:"Built-in",roleFormCreateTitle:"Create Role",roleFormEditTitle:"Edit Role",roleFormLead:"Name the role and choose what it can do.",roleName:"Role Name",roleFormRequired:"Enter a role name and pick at least one permission.",roleFormSaveFailed:"We couldn't save the role. Try again.",roleFormLoadFailed:"We couldn't load that role.",roleFormNotFound:"This role was not found.",backToAdmin:"Back to Users & Roles",saveChanges:"Save Changes",groupOrders:"Orders",groupUsers:"Users",groupRoles:"Roles",selectRole:"Select a role",rolesUnavailable:"We couldn't load roles for selection.",roleFormSystem:"Built-in roles can't be edited.",invitePhone:"Mobile Number",pending:"Pending",resend:"Resend",revoke:"Revoke",suspend:"Suspend",reactivate:"Reactivate",suspended:"Suspended",activityTitle:"Activity",audit:{roleChanged:"{{actor}} changed {{target}}'s role to {{role}}",suspended:"{{actor}} suspended {{target}}",reactivated:"{{actor}} reactivated {{target}}",invited:"{{actor}} invited {{phone}} as {{role}}",inviteRevoked:"{{actor}} revoked the invite for {{phone}}",inviteResent:"{{actor}} resent the invite to {{phone}}",roleCreated:"{{actor}} created the role {{role}}",roleUpdated:"{{actor}} updated the role {{role}}",roleDeleted:"{{actor}} deleted the role {{role}}"},lastOwnerBlock:"You're the only owner. Assign another owner first.",selfDemoteConfirm:"You'll lose {{capabilities}}.",scopeOwn:"My Orders",scopeCompany:"Company Orders",inviteSectionTitle:"Invite by Phone",sendInvite:"Send Invite",inviteRequired:"Enter a valid +61 mobile number and choose a role.",inviteSentNotice:"Invite sent to {{phone}}.",inviteSendFailed:"We couldn't send that invite. Try again.",inviteResendFailed:"We couldn't resend that invite. Try again.",inviteRevokeFailed:"We couldn't revoke that invite. Try again.",invitesLoadFailed:"We couldn't load pending invites.",invitesEmpty:"No pending invites.",expiresOn:"Expires"},hy={title:"Billing & Payments",lead:"How your account is billed, and the payment methods we support.",methodsTitle:"Payment Methods",status:{available:"Available",pending:"Coming Soon"},methods:{"on-account":{name:"On Account / Invoice",body:"Orders placed in the portal are billed to your company account and settled by invoice — no payment step at order time."},"stripe-card":{name:"Card Payments via Stripe",body:"Pay for orders by card, processed by Stripe. The portal integration is prepared and switches on once the payment API and account keys are issued."}},howTitle:"How Card Payments Will Work",how:{secure:{title:"Card details stay with Stripe",body:"Card numbers are entered in Stripe-hosted secure fields (Stripe Elements) and never touch SenditGo servers, keeping PCI compliance scope with Stripe."},intent:{title:"The backend creates the payment",body:"For each payment, the SenditGo backend creates a Stripe PaymentIntent for the order total and hands the portal its client secret."},confirm:{title:"The portal confirms it",body:"The portal confirms the payment with the per-environment publishable key; bank verification (3-D Secure) is handled by Stripe automatically when required."},receipt:{title:"Receipts flow back to the order",body:"Stripe notifies the backend by webhook, and the payment status and receipt attach to the order in your history."}},readinessTitle:"Integration status:",readinessBody:"The portal side is prepared — provider registry, per-environment key slots, and this page. Card payments switch on when the backend payment API is live and the Stripe keys are configured; on-account billing continues unchanged either way."},py={ord_ls:"View Orders",ord_add:"Create Order",ord_imp:"Batch Import Orders",ord_ls_own:"View Own Orders",ord_ls_sub:"View Team Orders",ord_ls_all:"View All Company Orders",perm_role_ls:"View Roles",perm_role_add:"Create Role",perm_role_edt:"Edit Role",perm_role_del:"Delete Role",perm_asst_ls:"View Users",perm_asst_add:"Add Users",perm_asst_edt:"Edit Users",perm_asst_blk:"Suspend / Reactivate Users"},fy={owner:{name:"Owner",desc:"Full access — manage orders company-wide, invite and suspend teammates, and manage roles."},manager:{name:"Manager",desc:"Runs orders company-wide and manages the team; cannot change roles or permissions."},staff:{name:"Staff",desc:"Views and creates orders for their team; cannot manage users or roles."},viewer:{name:"Viewer",desc:"Read-only access to their own orders."},capabilities:{viewOrders:"View orders",createOrders:"Create orders",importOrders:"Import orders",companyOrders:"View company-wide orders",inviteMembers:"Invite members",suspendMembers:"Suspend members",manageRoles:"Manage roles"}},my={common:sy,nav:ay,login:oy,orders:ly,createOrder:cy,importOrders:dy,admin:uy,billing:hy,permissions:py,roles:fy},gy={1:"Payment pending",2:"To be scheduled",3:"Awaiting pickup",4:"In transit- supplier to fulfilment center",5:"In fulfilment center",6:"In transit- fulfilment center to customer",7:"Arrived at customer fulfilment center",8:"In transit",9:"Canceled",10:"Delivered",11:"Delivered & Signed",12:"Delivered with Exceptions",13:"Completed",14:"Full cancellation",15:"Complete Manually",16:"Delete Pending Confirmation"},xy={1:"Param Invalid.",2:"Param Required.",3:"Firebase Conn Error.",4:"Phone Number Required.",5:"Account Data Not Exist.",6:"Parse Error.",7:"Param Format Error.",8:"Email Or Password Not Correct.",9:"No Permission.",10:"Role Permission Name Duplicate.",11:"Role Permission Not Exist.",12:"Mobile Had Been Registered.",13:"Email Had Been Registered.",14:"Confirm Password Is Not Correct.",15:"Delivery Not Found.",16:"Delivery Duplicate Signature.",17:"Duplicate System Setting Keyword.",18:"Duplicate Chatroom Service Score.",19:"Chat Partner Haven'T Joined The Chatroom.",20:"Company/Fleet Is Not Exist.",21:"The Chatroom Has Reached The Maximum.",22:"Account Hasn'T Review Data.",23:"Record Not Found.",24:"Abnormal Account.",25:"Delivery Duplicate Score.",26:"Ip Format Error.",27:"Fleet Code Not Exist.",28:"Account In Audit.",29:"Fleet Code Has Benn Used.",30:"Fleet Not Found.",31:"Company Not Found.",32:"Fleet Has Been Loaned.",33:"Account Already Exists.",34:"Vehicle Is Using.",35:"Vehicle Not Found.",36:"Warehouse Not Found.",37:"The Address Format Is Incorrect.",38:"The Warehouse Route Setting Is Incorrect.",39:"Salesorder Not Found.",40:"Company Code Is Already In Use.",41:"Department Does Not Exist.",42:"Account Has Been Disabled.",43:"Salesorder Packages Have Not Been Completed Yet.",44:"Order Repeat Rating.",45:"Package Does Not Exist.",46:"Fleet Company Information Not Found.",47:"Team Rental Record Does Not Exist.",48:"The Driver'S Time Zone Is Incorrectly Read.",49:"Converting Driver'S Time Zone Is Incorrect.",50:"Keyword Does Not Exist.",51:"The City Does Not Exist.",52:"Json Format Conversion Failed.",53:"Errchangeroledriver.",54:"Errchangerolefleetdriver.",55:"Erraccountnotactive.",56:"Wrong License Type.",57:"Errchangerolemember.",58:"Errchangerolecompanymember.",59:"Errsalesordernotwaitforpay.",60:"Errdeliveryidincorrect.",61:"Platform Not Exist.",62:"Delivery Signature Record Not Exist.",63:"Delivery Plan Not Exist.",64:"Could Not Retrieve Coordinates From Geocoding Apis.",65:"Failed To Create An Order In Toll Shipment Api.",66:"Audit Accounts Not Exist.",67:"Audit Data Incomplete Or Content Mismatch.",68:"Could Not Parse Audit Data From Register Or Update.",69:"Invalid Review Status Id.",70:"The Phone Number Has Been Registered On This Role..",71:"Scheduledatetype Id Not Exist.",72:"Booking Date Invalid.",73:"Self-Account Removal Is Not Allowed.",74:"Cannot Modify Delivery Plan: Execution Has Already Started.",75:"Driver Is Not Available: Either Not Found, Currently Busy, Or Inactive.",76:"Simulation Start Time Must Be At Least 15 Minutes Before Current Local Time.",77:"Simulation Details Not Exist.",78:"An Error Occurred During The Simulation Calculation Process.",79:"Simulation Is Currently In Progress.",80:"Failed To Activate Simulation Result.",81:"Simulation Has Already Been Assigned And Cannot Be Modified Further.",82:"No Drivers Have Bookings Scheduled For Date.",83:"This Location Is Currently Not Available For Booking.",84:"Operation Failed Because The Delivery Plan Has Been Deleted.",85:"Route Injection Details Not Exist.",86:"Route Injection Calculating Failed.",87:"Route Injection Details Is Not Applicable.",88:"Route Injection Has Not Been Subscribed Or Failed During Subscription.",89:"Route Injection Failed: Python Server Calculating Failed.",92:"This route has a pending warehouse return. Please wait for the driver to complete it before making changes.",93:"Permission denied",100:"Database connection error.",101:"Database Write Error.",134:"This account has already been deleted.",142:"The warehouse-return stop must stay last when reordering.",200:"Token Not Exist.",201:"Token Parse Failed.",202:"Token Invalid.",203:"Token Expired.",204:"Logged out due to login at another location.",300:"Redis Connection Error.",301:"Redis Write Error.",401:"File Open Error.",402:"File Write Error.",403:"File Decode Error.",404:"File Format Error.",405:"File Close Error.",406:"File Delete Error.",500:"Aws Credential Error.",501:"Upload File Failed.",600:"Recaptcha Failed.",601:"Geocoding Failed.",700:"Websocket Write Error.",701:"Websocket Conn Failed.",800:"Netsuite Request Failed.",801:"Netsuite Response Error.",900:"Rabbitmq Conn Failed.",901:"Rabbitmq Read Message Failed.",902:"Rabbitmq Publish Message Failed.",1e3:"Pyserver Conn Failed.",1001:"PyServer Route Failed",1002:"Calculate Delivery Fee Failed",2010:"Payment Not Exist",2011:"Payment Not Pending",3e3:"Partial Success"},yy={orderCreated:"Order Created",scheduled:"Scheduled",readyForPickup:"Ready for Pickup",inTransit:"In transit",delivered:"Delivered",completed:"Completed"},vy={orderCreated:"Your order is confirmed and being prepared.",scheduled:"Your shipment is scheduled for pickup.",readyForPickup:"Your shipment is ready for pickup.",inTransit:"Your shipment is on its way.",delivered:"Your shipment has been delivered.",completed:"This shipment is complete.",exception:"Delivered — with an exception to review.",cancelled:"This shipment has been cancelled and will not be processed."},by={orderCreated:"Order Created",packageReceived:"Package Received",packageReceivedInTransit:"Package Received - In Transit",pickedUpFromSender:"Picked Up from Sender",departedOriginCountry:"Departed Origin Country",customsProcessing:"Customs Processing",customsCleared:"Customs Cleared",departedHub:"Departed Hub",arrivedRegionalHub:"Arrived at Regional Hub",arrivedLocalFacility:"Arrived at Local Facility",outForDelivery:"In transit",outForDeliveryPartial:"In transit (partial shipment)",deliveredSigned:"Delivered & Signed",cancelledByCustomer:"Order Cancelled by Customer"},wy={badgeLabel_one:"{{count}} Exception",badgeLabel_other:"{{count}} Exceptions",delay:{reason:"This shipment has been rescheduled. The estimated delivery date may change."},failedAttempt:{reason:"A delivery attempt was unsuccessful."},addressProblem:{reason:"We couldn't confirm the delivery address for this shipment."},customsHold:{reason:"This shipment is on hold for a customs or compliance check."}},ky={service:"Service",shipDate:"Ship Date",origin:"Origin",destination:"Destination",weight:"Weight",shipper:"Shipper",recipient:"Recipient",packages:"Packages",estimatedDelivery:"Estimated Delivery"},Sy={gateTitle:"Verify to See Full Details",gateBody:"Confirm the mobile number linked to this shipment to see recipient details and proof of delivery.",verifyButton:"Verify",verified:"Verified — showing full shipment details.",verifyFailed:"That code didn't match. Check it and try again.",linkExpired:"That verification link has expired. Request a new one to see full details.",linkUsed:"That verification link has already been used.",linkInvalid:"That verification link isn't valid for this shipment."},jy={title:"Travel History",colTime:"Time",colActivity:"Activity",colLocation:"Location",latest:"Latest",viewFullHistory:"View Full History",showLess:"Show Less"},Ey={title:"Proof of Delivery",photoAlt:"Delivery photo",signedBy:"Signed by {{initial}}",photoUnavailable:"Delivery photo unavailable"},_y={title:"Get Help",contactSupport:"Contact Support",startReturn:"Start a Return"},Ty={pageTitle:{entry:"Track a delivery — SenditGo",result:"Tracking result — SenditGo",consignee:"Track your delivery — SenditGo"},entry:{eyebrow:"Delivery tracking",title:"Track a delivery.",subtitle:"Enter your tracking number to see the latest delivery status. No account needed.",inputLabel:"Tracking number",placeholder:"Tracking number",submit:"Track",hint:"Tracking numbers are up to 9 letters and numbers, with no spaces or dashes.",submitBusy:"Tracking…",busyStatus:"Looking up your delivery…"},result:{back:"Track another delivery",title:"Tracking result.",subtitle:"Get the latest delivery status and tracking details for your shipment."},consignee:{eyebrow:"For recipients",title:"Track your delivery.",subtitle:"No account is required to see the current delivery status.",historyTitle:"Delivery history",historyToggle_one:"View details ({{count}} update)",historyToggle_other:"View details ({{count}} updates)",resultStatus:"{{status}}. {{label}}: {{value}}"},summary:{trackingNumber:"Tracking number",copy:"Copy tracking number",copied:"Tracking number copied",progress:"Delivery progress",copyFailed:"Couldn't copy. Select the tracking number to copy it."},chip:{cancelled:"Cancelled"},milestone:{orderCreated:"Order created",pickedUp:"Picked up",awaitingPickup:"Awaiting pickup",inTransit:"In transit",delivered:"Delivered",preparing:"Preparing"},milestoneState:{done:"completed",current:"current step",future:"not started"},eta:{label:"Estimated delivery",deliveredLabel:"Delivered",cancelledLabel:"Cancelled",today:"Today",tomorrow:"Tomorrow",toBeConfirmed:"To be confirmed",toBeConfirmedNote:"We'll show a date once the delivery is scheduled.",cancelledNote:"This delivery was cancelled and will not arrive.",todayAM:"This morning",todayPM:"This afternoon",tomorrowAM:"Tomorrow morning",tomorrowPM:"Tomorrow afternoon",dayAM:"{{day}}, morning",dayPM:"{{day}}, afternoon",previouslyExpected:"Previously expected {{date}}"},latest:{label:"Latest update",none:"No updates yet"},activity:{order_created:"Order created",scheduled:"Delivery scheduled",picked_up:"Picked up",arrived:"Arrived at destination",signed:"Delivery signed for",completed:"Delivery completed",rescheduled:"Delivery rescheduled",item_exception:"Item issue reported",cancelled:"Order cancelled"},details:{title:"Delivery details",trackingNumber:"Tracking number",shipDate:"Ship date",carrier:"Carrier",origin:"Origin",destination:"Destination",packages:"Packages",proof:"Proof of delivery",notShipped:"Not shipped yet",packageCount_one:"{{count}} package",packageCount_other:"{{count}} packages",affected_one:"{{count}} affected by an issue",affected_other:"{{count}} affected by an issue",proofType:{signature:"Signed for on delivery",contactless:"Contactless delivery",qrcode:"Confirmed by QR scan"}},history:{title:"Tracking history",date:"Date & time",activity:"Activity",location:"Location",empty:"No tracking updates yet."},exceptions:{title:"Delivery updates",rescheduled_one:"Delivery was rescheduled.",rescheduled_other:"Delivery was rescheduled {{count}} times.",items_missing:"Some items were reported missing.",items_damaged:"Some items were reported damaged.",wrong_delivery:"An item was reported as delivered to the wrong place.",cancelled:"The delivery was cancelled.",help:"Questions about this delivery? Our support team can help.",contact:"Contact support"},help:{title:"Need help?",body:"If you have any questions about this delivery, our team is here to help.",contact:"Contact support"},error:{format:"Check the tracking number. It should be up to 9 letters and numbers, with no spaces or dashes.",notFound:"We couldn't find a delivery with that tracking number. Check the number and try again.",rateLimited:"Too many lookups in a short time. Wait a minute, then try again.",unavailable:"Tracking is unavailable right now. Please try again shortly.",retry:"Try again",loading:"Loading delivery status"},nextStop:{public:{eyebrowLive:"Live map · next stop",eyebrowNext:"This address is the next stop",title:"The driver is on the way",mapRegion:"Map of the driver approaching the delivery address",mapUnavailable:"Map unavailable. The arrival time is shown here."},receiver:{eyebrowLive:"Live map · you're next",eyebrowNext:"You're the next stop",title:"Your driver is on the way",mapRegion:"Map of your driver approaching your delivery address",mapUnavailable:"Map unavailable. Your arrival time is shown here."},liveLocation:"Live location",etaMinutes_one:"About {{count}} minute away",etaMinutes_other:"About {{count}} minutes away",etaSoon:"Arriving soon",updatedNow:"Location updated just now",updated_one:"Location updated {{count}} minute ago",updated_other:"Location updated {{count}} minutes ago",stale_one:"Live location paused · last update {{count}} minute ago",stale_other:"Live location paused · last update {{count}} minutes ago",unavailable:"Live location is unavailable right now.",ended:"Live location has ended for this delivery.",errorRefused:"Live location is unavailable right now.",errorFailed:"Couldn't load the live location.",rateLimited:"Too many requests. Wait a minute, then try again.",retry:"Try again",sample:"Sample location · not a real driver",recenter:"Recenter"}},Iy={step:yy,headline:vy,activity:by,exception:wy,facts:ky,tier2:Sy,timeline:jy,pod:Ey,help:_y,guest:Ty},wo=["en"],Ry={en:"EN"},Cy=(()=>{try{const t=localStorage.getItem("lang");return t&&wo.includes(t)?t:"en"}catch{return"en"}})();He.use(ox).init({lng:Cy,fallbackLng:"en",interpolation:{escapeValue:!1},resources:{en:{common:iy,portal:my,statusCode:xy,salesOrderStatusId:gy,tracking:Iy}}});function Oy(t){He.changeLanguage(t);try{localStorage.setItem("lang",t)}catch{}}const yc=t=>{let e;const n=new Set,r=(d,u)=>{const h=typeof d=="function"?d(e):d;if(!Object.is(h,e)){const p=e;e=u??(typeof h!="object"||h===null)?h:Object.assign({},e,h),n.forEach(m=>m(e,p))}},i=()=>e,l={setState:r,getState:i,getInitialState:()=>c,subscribe:d=>(n.add(d),()=>n.delete(d))},c=e=t(r,i,l);return l},Ay=(t=>t?yc(t):yc),Py=t=>t;function Ny(t,e=Py){const n=W.useSyncExternalStore(t.subscribe,W.useCallback(()=>e(t.getState()),[t,e]),()=>e(t.getInitialState()));return W.useDebugValue(n),n}const vc=t=>{const e=Ay(t),n=r=>Ny(e,r);return Object.assign(n,e),n},Ly=(t=>t?vc(t):vc);function $y(t,e){let n;try{n=t()}catch{return}return{getItem:i=>{var a;const o=c=>c===null?null:JSON.parse(c,void 0),l=(a=n.getItem(i))!=null?a:null;return l instanceof Promise?l.then(o):o(l)},setItem:(i,a)=>n.setItem(i,JSON.stringify(a,void 0)),removeItem:i=>n.removeItem(i)}}const ko=t=>e=>{try{const n=t(e);return n instanceof Promise?n:{then(r){return ko(r)(n)},catch(r){return this}}}catch(n){return{then(r){return this},catch(r){return ko(r)(n)}}}},Dy=(t,e)=>(n,r,i)=>{let a={storage:$y(()=>window.localStorage),partialize:b=>b,version:0,merge:(b,_)=>({..._,...b}),...e},o=!1,l=0;const c=new Set,d=new Set;let u=a.storage;if(!u)return t((...b)=>{console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`),n(...b)},r,i);const h=()=>{const b=a.partialize({...r()});return u.setItem(a.name,{state:b,version:a.version})},p=i.setState;i.setState=(...b)=>(p(...b),h());const m=t((...b)=>(n(...b),h()),r,i);i.getInitialState=()=>m;let x;const y=()=>{var b,_;if(!u)return;const j=++l;o=!1,c.forEach(v=>{var I;return v((I=r())!=null?I:m)});const w=((_=a.onRehydrateStorage)==null?void 0:_.call(a,(b=r())!=null?b:m))||void 0;return ko(u.getItem.bind(u))(a.name).then(v=>{if(v)if(typeof v.version=="number"&&v.version!==a.version){if(a.migrate){const I=a.migrate(v.state,v.version);return I instanceof Promise?I.then(C=>[!0,C]):[!0,I]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,v.state];return[!1,void 0]}).then(v=>{var I;if(j!==l)return;const[C,D]=v;if(x=a.merge(D,(I=r())!=null?I:m),n(x,!0),C)return h()}).then(()=>{j===l&&(w==null||w(r(),void 0),x=r(),o=!0,d.forEach(v=>v(x)))}).catch(v=>{j===l&&(w==null||w(void 0,v))})};return i.persist={setOptions:b=>{a={...a,...b},b.storage&&(u=b.storage)},clearStorage:()=>{++l,u==null||u.removeItem(a.name)},getOptions:()=>a,rehydrate:()=>y(),hasHydrated:()=>o,onHydrate:b=>(c.add(b),()=>{c.delete(b)}),onFinishHydration:b=>(d.add(b),()=>{d.delete(b)})},a.skipHydration||y(),x||m},My=Dy;function Nh(t,e){return function(){return t.apply(e,arguments)}}const{toString:Fy}=Object.prototype,{getPrototypeOf:Zt}=Object,{iterator:Si,toStringTag:Lh}=Symbol,Yt=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),$h=t=>typeof t=="string"&&(t==="__proto__"||t==="constructor"||t==="prototype"),Ys=(t,e,n)=>t===Object.prototype||!n&&e===null,Uy=t=>{if(!Object.isExtensible(t))return!1;const e=Object.getOwnPropertyNames(t);return Object.getOwnPropertySymbols&&e.push(...Object.getOwnPropertySymbols(t)),e.every(n=>{if($h(n))return!1;const r=Object.getOwnPropertyDescriptor(t,n);return!!r&&r.configurable&&r.writable===!0})},il=(t,e)=>{let n=t;const r=[];for(;n!=null;){if(r.indexOf(n)!==-1)return!1;r.push(n);const i=Zt(n);if(Ys(n,i,n===t))return!1;if(Yt(n,e))return!0;n=i}return!1},By=(t,e)=>t!=null&&il(t,e)?t[e]:void 0,zy=t=>{if(t==null||typeof t!="object"&&typeof t!="function")return t;const e=Zt(t);if(e===null&&Uy(t))return t;const n=Object.create(null),r=Object.create(null),i=[];let a=t;for(;a!=null&&i.indexOf(a)===-1;){i.push(a);const o=a===t?e:Zt(a);if(Ys(a,o,a===t))break;const l=Object.getOwnPropertyNames(a);Object.getOwnPropertySymbols&&l.push(...Object.getOwnPropertySymbols(a));for(const c of l)$h(c)||Yt(r,c)||(n[c]=t[c],r[c]=!0);a=o}return n},sl=(t=>e=>{const n=Fy.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),mt=t=>(t=t.toLowerCase(),e=>sl(e)===t),Js=t=>e=>typeof e===t,{isArray:Zn}=Array,Yn=Js("undefined");function Rr(t){return t!==null&&!Yn(t)&&t.constructor!==null&&!Yn(t.constructor)&&rt(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Dh=mt("ArrayBuffer");function Hy(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Dh(t.buffer),e}const Vy=Js("string"),rt=Js("function"),Wy=Js("number"),Cr=t=>t!==null&&typeof t=="object",qy=t=>t===!0||t===!1,es=t=>{if(!Cr(t))return!1;const e=Zt(t);return(e===null||e===Object.prototype||Zt(e)===null)&&(Ys(t,e,!0)||!Yt(t,Lh)&&!Yt(t,Si))},Ky=t=>{if(!Cr(t)||Rr(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},Gy=mt("Date"),Zy=mt("File"),Yy=t=>!!(t&&typeof t.uri<"u"),Jy=t=>t&&typeof t.getParts<"u",Xy=mt("Blob"),Qy=mt("FileList"),ev=mt("Set"),tv=t=>Cr(t)&&rt(t.pipe);function nv(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const bc=nv(),wc=typeof bc.FormData<"u"?bc.FormData:void 0,rv=t=>{if(!t)return!1;if(wc&&t instanceof wc)return!0;const e=Zt(t);if(!e||e===Object.prototype||!rt(t.append))return!1;const n=sl(t);return n==="formdata"||n==="object"&&rt(t.toString)&&t.toString()==="[object FormData]"},iv=mt("URLSearchParams"),[sv,av,ov,lv]=["ReadableStream","Request","Response","Headers"].map(mt),cv=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ji(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,i;if(typeof t!="object"&&(t=[t]),Zn(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{if(Rr(t))return;const a=n?Object.getOwnPropertyNames(t):Object.keys(t),o=a.length;let l;for(r=0;r<o;r++)l=a[r],e.call(null,t[l],l,t)}}function dv(t,e){if(Rr(t))return null;e=e.toLowerCase();const n=Object.keys(t);let r=n.length,i;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const Un=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Mh=t=>!Yn(t)&&t!==Un;function So(...t){const{caseless:e,skipUndefined:n}=Mh(this)&&this||{},r={},i=e?Object.create(null):null,a=(o,l)=>{if(l==="__proto__"||l==="constructor"||l==="prototype")return;let c=l;if(i&&typeof l=="string"){const u=l.toLowerCase(),h=i[u];h!==void 0&&Yt(r,h)?c=h:i[u]=l}const d=Yt(r,c)?r[c]:void 0;es(d)&&es(o)?r[c]=So(d,o):es(o)?r[c]=So({},o):Zn(o)?r[c]=o.slice():(!n||!Yn(o))&&(r[c]=o)};for(let o=0,l=t.length;o<l;o++){const c=t[o];if(!c||Rr(c)||(ji(c,a),typeof c!="object"||Zn(c)||!Object.getOwnPropertySymbols))continue;const d=Object.getOwnPropertySymbols(c);for(let u=0;u<d.length;u++){const h=d[u];kv.call(c,h)&&a(c[h],h)}}return r}const uv=(t,e,n,{allOwnKeys:r}={})=>(ji(e,(i,a)=>{n&&rt(i)?Object.defineProperty(t,a,{__proto__:null,value:Nh(i,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,a,{__proto__:null,value:i,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),t),hv=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),pv=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),Object.defineProperty(t.prototype,"constructor",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{__proto__:null,value:e.prototype}),n&&Object.assign(t.prototype,n)},fv=(t,e,n,r)=>{let i,a,o;const l={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),a=i.length;a-- >0;)o=i[a],(!r||r(o,t,e))&&!l[o]&&(e[o]=t[o],l[o]=!0);t=n!==!1&&Zt(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},mv=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},gv=t=>{if(!t)return null;if(Zn(t))return t;let e=t.length;if(!Number.isSafeInteger(e)||e<0||e>4294967295)return null;const n=new Set,r=new Set;let i=t;for(;i!=null&&n.size<e;){if(r.has(i))return null;r.add(i);const o=Zt(i);if(Ys(i,o,i===t))break;Object.getOwnPropertyNames(i).forEach(l=>{const c=+l;Number.isInteger(c)&&c>=0&&c<e&&String(c)===l&&Yt(i,l)&&n.add(c)}),i=o}if(n.size!==e)return null;const a=new Array(e);for(;e-- >0;)a[e]=t[e];return a},xv=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Zt(Uint8Array)),yv=(t,e)=>{const r=(t&&t[Si]).call(t);let i;for(;(i=r.next())&&!i.done;){const a=i.value;e.call(t,a[0],a[1])}},vv=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},bv=mt("HTMLFormElement"),wv=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),{propertyIsEnumerable:kv}=Object.prototype,Sv=mt("RegExp"),Fh=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};ji(n,(i,a)=>{let o;(o=e(i,a,t))!==!1&&(r[a]=o||i)}),Object.defineProperties(t,r)},jv=t=>{Fh(t,(e,n)=>{if(rt(t)&&["arguments","caller","callee"].includes(n))return!1;const r=t[n];if(rt(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Ev=(t,e)=>{const n={},r=i=>{i.forEach(a=>{n[a]=!0})};return Zn(t)?r(t):r(String(t).split(e)),n},_v=()=>{},Tv=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function Iv(t){return!!(t&&rt(t.append)&&t[Lh]==="FormData"&&t[Si])}const Rv=t=>{const e=new WeakSet,n=r=>{if(Cr(r)){if(e.has(r))return;if(Rr(r))return r;if(!("toJSON"in r)){e.add(r);let i;if(ev(r)){i=[];for(const a of r){const o=n(a);!Yn(o)&&i.push(o)}}else i=Zn(r)?[]:{},ji(r,(a,o)=>{const l=n(a);!Yn(l)&&(i[o]=l)});return e.delete(r),i}}return r};return n(t)},Cv=mt("AsyncFunction"),Ov=t=>t&&(Cr(t)||rt(t))&&rt(t.then)&&rt(t.catch),Uh=((t,e)=>t?setImmediate:e?((n,r)=>(Un.addEventListener("message",({source:i,data:a})=>{i===Un&&a===n&&r.length&&r.shift()()},!1),i=>{r.push(i),Un.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",rt(Un.postMessage)),Av=typeof queueMicrotask<"u"?queueMicrotask.bind(Un):typeof process<"u"&&process.nextTick||Uh,Bh=t=>t!=null&&rt(t[Si]),Pv=t=>t!=null&&il(t,Si)&&Bh(t),g={isArray:Zn,isArrayBuffer:Dh,isBuffer:Rr,isFormData:rv,isArrayBufferView:Hy,isString:Vy,isNumber:Wy,isBoolean:qy,isObject:Cr,isPlainObject:es,isEmptyObject:Ky,isReadableStream:sv,isRequest:av,isResponse:ov,isHeaders:lv,isUndefined:Yn,isDate:Gy,isFile:Zy,isReactNativeBlob:Yy,isReactNative:Jy,isBlob:Xy,isRegExp:Sv,isFunction:rt,isStream:tv,isURLSearchParams:iv,isTypedArray:xv,isFileList:Qy,forEach:ji,merge:So,extend:uv,trim:cv,stripBOM:hv,inherits:pv,toFlatObject:fv,kindOf:sl,kindOfTest:mt,endsWith:mv,toArray:gv,forEachEntry:yv,matchAll:vv,isHTMLForm:bv,hasOwnProperty:Yt,hasOwnProp:Yt,hasOwnInPrototypeChain:il,getSafeProp:By,toSafeFlatObject:zy,reduceDescriptors:Fh,freezeMethods:jv,toObjectSet:Ev,toCamelCase:wv,noop:_v,toFiniteNumber:Tv,findKey:dv,global:Un,isContextDefined:Mh,isSpecCompliantForm:Iv,toJSONObject:Rv,isAsyncFn:Cv,isThenable:Ov,setImmediate:Uh,asap:Av,isIterable:Bh,isSafeIterable:Pv},Nv=g.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Lv=t=>{const e=Object.create(null);let n,r,i;return t&&t.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim();const l=g.hasOwnProp(e,n);!n||l&&g.hasOwnProp(Nv,n)||(n==="set-cookie"?l?e[n].push(r):e[n]=[r]:e[n]=l?e[n]+", "+r:r)}),e};function $v(t){let e=0,n=t.length;for(;e<n;){const r=t.charCodeAt(e);if(r!==9&&r!==32)break;e+=1}for(;n>e;){const r=t.charCodeAt(n-1);if(r!==9&&r!==32)break;n-=1}return e===0&&n===t.length?t:t.slice(e,n)}const Dv=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),Mv=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function al(t,e){return g.isArray(t)?t.map(n=>al(n,e)):$v(String(t).replace(e,""))}const Fv=t=>al(t,Dv),Uv=t=>al(t,Mv);function zh(t){const e=Object.create(null);return g.forEach(t.toJSON(),(n,r)=>{e[r]=Uv(n)}),e}const kc=Symbol("internals");function Hr(t){return t&&String(t).trim().toLowerCase()}function ts(t){return t===!1||t==null?t:g.isArray(t)?t.map(ts):Fv(String(t))}function Bv(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const zv=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function Ia(t){let e=0,n=t.length;for(;e<n;){const r=t.charCodeAt(e);if(r!==9&&r!==32)break;e+=1}for(;n>e;){const r=t.charCodeAt(n-1);if(r!==9&&r!==32)break;n-=1}return e===0&&n===t.length?t:t.slice(e,n)}function Hv(t){const e=t.length-1;if(e<1||t.charCodeAt(0)!==34||t.charCodeAt(e)!==34)return t;let n="";for(let r=1;r<e;r++){const i=t.charCodeAt(r);if(i===34||i===92&&(r+=1,r>=e))return t;n+=t[r]}return n}function Vv(t){const e=Object.create(null),n=String(t);let r=0,i=!1,a=!1;function o(l){const c=Ia(n.slice(r,l)),d=c.indexOf("=");if(d<1)return;const u=Ia(c.slice(0,d));if(!zv.test(u))return;const h=u.toLowerCase();if(h==="__proto__"||h==="constructor"||h==="prototype")return;const p=Ia(c.slice(d+1));e[h]=Hv(p)}for(let l=0;l<n.length;l++){const c=n.charCodeAt(l);i?a?a=!1:c===92?a=!0:c===34&&(i=!1):c===34?i=!0:(c===44||c===59)&&(o(l),r=l+1)}return o(n.length),e}const Wv=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim()),qv="__Proto__",Sc=t=>t==="__proto__"?qv:t;function Ra(t,e,n,r,i){if(g.isFunction(r))return r.call(t,e,n);if(i&&(e=n),!!g.isString(e)){if(g.isString(r))return e.indexOf(r)!==-1;if(g.isRegExp(r))return r.test(e)}}function Kv(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function Gv(t,e){const n=g.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{__proto__:null,value:function(i,a,o){return this[r].call(this,e,i,a,o)},configurable:!0})})}let $e=class{constructor(e){e&&this.set(e)}set(e,n,r){const i=this;function a(l,c,d){const u=Hr(c);if(!u)return;const h=g.findKey(i,u);(!h||i[h]===void 0||d===!0||d===void 0&&i[h]!==!1)&&(i[Sc(h||c)]=ts(l))}const o=(l,c)=>g.forEach(l,(d,u)=>a(d,u,c));if(g.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(g.isString(e)&&(e=e.trim())&&!Wv(e))o(Lv(e),n);else if(g.isObject(e)&&g.isSafeIterable(e)){let l=Object.create(null),c,d;for(const u of e){if(!g.isArray(u))throw new TypeError("Object iterator must return a key-value pair");d=u[0],g.hasOwnProp(l,d)?(c=l[d],l[d]=g.isArray(c)?[...c,u[1]]:[c,u[1]]):l[d]=u[1]}o(l,n)}else e!=null&&a(n,e,r);return this}get(e,n){if(e=Hr(e),e){const r=g.findKey(this,e);if(r){const i=this[r];if(!n)return i;if(n===!0)return Bv(i);if(g.isFunction(n))return n.call(this,i,r);if(g.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Hr(e),e){const r=g.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Ra(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let i=!1;function a(o){if(o=Hr(o),o){const l=g.findKey(r,o);l&&(!n||Ra(r,r[l],l,n))&&(delete r[l],i=!0)}}return g.isArray(e)?e.forEach(a):a(e),i}clear(e){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const a=n[r];(!e||Ra(this,this[a],a,e,!0))&&(delete this[a],i=!0)}return i}normalize(e){const n=this,r=Object.create(null);return g.forEach(this,(i,a)=>{const o=g.findKey(r,a);if(o){n[o]=ts(i),delete n[a];return}const l=Sc(e?Kv(a):String(a).trim());l!==a&&delete n[a],n[l]=ts(i),r[l]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return g.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=e&&g.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){const e=this.get("set-cookie");return g.isArray(e)?e:e==null||e===!1?[]:[e]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static parseParameters(e){return Vv(e)}static concat(e,...n){const r=new this(e);return n.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[kc]=this[kc]={accessors:{}}).accessors,i=this.prototype;function a(o){const l=Hr(o);r[l]||(Gv(i,o),r[l]=!0)}return g.isArray(e)?e.forEach(a):a(e),this}};$e.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);g.reduceDescriptors($e.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});g.freezeMethods($e);const gs="[REDACTED ****]";function Zv(t){if(g.hasOwnProp(t,"toJSON"))return!0;let e=Object.getPrototypeOf(t);for(;e&&e!==Object.prototype;){if(g.hasOwnProp(e,"toJSON"))return!0;e=Object.getPrototypeOf(e)}return!1}function Yv(t,e){const n=new Set(e.map(a=>String(a).toLowerCase())),r=[],i=a=>{if(a===null||typeof a!="object"||g.isBuffer(a))return a;if(r.indexOf(a)!==-1)return;a instanceof $e&&(a=a.toJSON()),r.push(a);let o;if(g.isArray(a))o=[],a.forEach((l,c)=>{const d=i(l);g.isUndefined(d)||(o[c]=d)});else{if(!g.isPlainObject(a)&&Zv(a))return r.pop(),a;o=Object.create(null);for(const[l,c]of Object.entries(a)){const d=n.has(l.toLowerCase())?gs:i(c);g.isUndefined(d)||(o[l]=d)}}return r.pop(),o};return i(t)}function jc(t){try{return String(t)}catch{return""}}function Jv(t){return t.errors.map(n=>{try{return n&&n.message?jc(n.message):jc(n)}catch{return""}}).filter(Boolean).join("; ")||t.name||"AggregateError"}const Xv=`
Caused by: `,jo=Symbol("causeStack");function Qv(t,e){const n=g.hasOwnProp(t,jo)&&t[jo];return n&&e.endsWith(n)?e.length-n.length:-1}function eb(t,e){try{const n=e&&e.stack;if(typeof n!="string"||!n)return;const r=t.stack;if(typeof r!="string"||!r)return;const i=Xv+n;t.stack=r+i,Object.defineProperty(t,jo,{__proto__:null,value:i})}catch{}}let O=class Hh extends Error{static from(e,n,r,i,a,o){let l=e.message;!l&&g.isArray(e.errors)&&e.errors.length&&(l=Jv(e));const c=new Hh(l,n||e.code,r,i,a);return Object.defineProperty(c,"cause",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),c.name=e.name,eb(c,e),e.status!=null&&c.status==null&&(c.status=e.status),o&&Object.assign(c,o),c}constructor(e,n,r,i,a){super(e),Object.defineProperty(this,"message",{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),r&&(this.config=r),i&&(this.request=i),a&&(this.response=a,this.status=a.status)}toJSON(){const e=this.config,n=e&&g.hasOwnProp(e,"redact")?e.redact:void 0,r=g.isArray(n)&&n.length>0?Yv(e,n):g.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:r,code:this.code,status:this.status}}};O.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";O.ERR_BAD_OPTION="ERR_BAD_OPTION";O.ECONNABORTED="ECONNABORTED";O.ETIMEDOUT="ETIMEDOUT";O.ECONNREFUSED="ECONNREFUSED";O.ERR_NETWORK="ERR_NETWORK";O.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";O.ERR_DEPRECATED="ERR_DEPRECATED";O.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";O.ERR_BAD_REQUEST="ERR_BAD_REQUEST";O.ERR_CANCELED="ERR_CANCELED";O.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";O.ERR_INVALID_URL="ERR_INVALID_URL";O.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const tb=null,Vh=100;function Eo(t){return g.isPlainObject(t)||g.isArray(t)}function Wh(t){return g.endsWith(t,"[]")?t.slice(0,-2):t}function Ca(t,e,n){return t?t.concat(e).map(function(i,a){return i=Wh(i),!n&&a?"["+i+"]":i}).join(n?".":""):e}function nb(t){return g.isArray(t)&&!t.some(Eo)}const rb=g.toFlatObject(g,{},null,function(e){return/^is[A-Z]/.test(e)});function Xs(t,e,n){if(!g.isObject(t))throw new TypeError("target must be an object");e=e||new FormData;const r=(j,w)=>{const v=g.getSafeProp(n,j);return g.isUndefined(v)?w:v},i=r("metaTokens",!0),a=r("visitor")||y,o=r("dots",!1),l=r("indexes",!1),c=r("Blob")||typeof Blob<"u"&&Blob,d=r("maxDepth",Vh),u=c&&g.isSpecCompliantForm(e),h=[];if(!g.isFunction(a))throw new TypeError("visitor must be a function");function p(j){if(j===null)return"";if(g.isDate(j))return j.toISOString();if(g.isBoolean(j))return j.toString();if(!u&&g.isBlob(j))throw new O("Blob is not supported. Use a Buffer instead.");if(g.isArrayBuffer(j)||g.isTypedArray(j)){if(u&&typeof c=="function")return new c([j]);throw new O("Blob is not supported. Use a Buffer instead.",O.ERR_NOT_SUPPORT)}return j}function m(j){if(j>d)throw new O("Object is too deeply nested ("+j+" levels). Max depth: "+d,O.ERR_FORM_DATA_DEPTH_EXCEEDED)}function x(j,w){if(d===1/0)return JSON.stringify(j);const v=[];return JSON.stringify(j,function(C,D){if(!g.isObject(D))return D;for(;v.length&&v[v.length-1]!==this;)v.pop();return v.push(D),m(w+v.length-1),D})}function y(j,w,v){let I=j;if(g.isReactNative(e)&&g.isReactNativeBlob(j))return e.append(Ca(v,w,o),p(j)),!1;if(j&&!v&&typeof j=="object"){if(g.endsWith(w,"{}"))w=i?w:w.slice(0,-2),j=x(j,1);else if(g.isArray(j)&&nb(j)||(g.isFileList(j)||g.endsWith(w,"[]"))&&(I=g.toArray(j)))return w=Wh(w),I.forEach(function(D,F){!(g.isUndefined(D)||D===null)&&e.append(l===!0?Ca([w],F,o):l===null?w:w+"[]",p(D))}),!1}return Eo(j)?!0:(e.append(Ca(v,w,o),p(j)),!1)}const b=Object.assign(rb,{defaultVisitor:y,convertValue:p,isVisitable:Eo});function _(j,w,v=0){if(!g.isUndefined(j)){if(m(v),h.indexOf(j)!==-1)throw new Error("Circular reference detected in "+w.join("."));h.push(j),g.forEach(j,function(C,D){(!(g.isUndefined(C)||C===null)&&a.call(e,C,g.isString(D)?D.trim():D,w,b))===!0&&_(C,w?w.concat(D):[D],v+1)}),h.pop()}}if(!g.isObject(t))throw new TypeError("data must be an object");return _(t),e}function Ec(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(t).replace(/[!'()~]|%20/g,function(r){return e[r]})}function ol(t,e){this._pairs=[],t&&Xs(t,this,e)}const qh=ol.prototype;qh.append=function(e,n){this._pairs.push([e,n])};qh.toString=function(e){const n=e?r=>e.call(this,r,Ec):Ec;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function ib(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Kh(t,e,n){if(!e)return t;t=t||"";const r=g.isFunction(n)?{serialize:n}:n,i=g.getSafeProp(r,"encode")||ib,a=g.getSafeProp(r,"serialize");let o;if(a?o=a(e,r):o=g.isURLSearchParams(e)?e.toString():new ol(e,r).toString(i),o){const l=t.indexOf("#");l!==-1&&(t=t.slice(0,l)),t+=(t.indexOf("?")===-1?"?":"&")+o}return t}const Vr=Symbol("internals");function Gh(t){return t?t.length:0}function _c(t){if(t)for(;t.length&&t[t.length-1]===null;)t.pop()}function sb(t){return typeof t=="string"&&t!==""&&String(Number(t))===t?Number(t):t}function Wr(t,e){const n=t.handlers,r=Gh(n);n!==e.handlersRef?(e.handlersRef=n,e.handlerEntries.clear()):r!==e.handlersLength&&(r?e.handlerEntries.forEach(function(a,o){n[a.index]!==a.handler&&e.handlerEntries.delete(o)}):e.handlerEntries.clear()),e.handlersLength=r}class Tc{constructor(){this.handlers=[],this[Vr]={handlersRef:this.handlers,handlersLength:this.handlers.length,handlerEntries:new Map,iterationDepth:0,nextId:0}}use(e,n,r){const i={fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null},a=this[Vr];this.handlers==null&&(this.handlers=[]),Wr(this,a);const o=a.nextId++;return this.handlers.push(i),a.handlerEntries.set(o,{handler:i,index:this.handlers.length-1}),a.handlersLength=this.handlers.length,o}eject(e){const n=this[Vr];Wr(this,n);const r=sb(e),i=n.handlerEntries.get(r);if(i){if(n.handlerEntries.delete(r),this.handlers[i.index]!==i.handler)return;this.handlers[i.index]=null,n.iterationDepth||(_c(this.handlers),n.handlersLength=this.handlers.length)}}clear(){this.handlers&&(this.handlers=[],Wr(this,this[Vr]))}forEach(e){const n=this[Vr];Wr(this,n),n.iterationDepth++;try{g.forEach(this.handlers,function(i){i!==null&&e(i)})}finally{--n.iterationDepth||(Wr(this,n),_c(this.handlers),n.handlersLength=Gh(this.handlers))}}}const ll={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0,encodeBasicAuthUsername:!1},ab=typeof URLSearchParams<"u"?URLSearchParams:ol,ob=typeof FormData<"u"?FormData:null,lb=typeof Blob<"u"?Blob:null,cb={isBrowser:!0,classes:{URLSearchParams:ab,FormData:ob,Blob:lb},protocols:["http","https","file","blob","url","data"]},cl=typeof window<"u"&&typeof document<"u",_o=typeof navigator=="object"&&navigator||void 0,db=cl&&(!_o||["ReactNative","NativeScript","NS"].indexOf(_o.product)<0),ub=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",hb=cl&&window.location.href||"http://localhost",pb=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:cl,hasStandardBrowserEnv:db,hasStandardBrowserWebWorkerEnv:ub,navigator:_o,origin:hb},Symbol.toStringTag,{value:"Module"})),Pe={...pb,...cb};function fb(t,e){return Xs(t,new Pe.classes.URLSearchParams,{visitor:function(n,r,i,a){return Pe.isNode&&g.isBuffer(n)?(this.append(r,n.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)},...e})}const Ic=Vh;function Zh(t){if(t>Ic)throw new O("FormData field is too deeply nested ("+t+" levels). Max depth: "+Ic,O.ERR_FORM_DATA_DEPTH_EXCEEDED)}function mb(t){const e=[],n=/[^.[\]]+|\[([^.[\]]*)]/g;let r;for(;(r=n.exec(t))!==null;)Zh(e.length),e.push(r[0]==="[]"?"":r[1]||r[0]);return e}function Yh(t){const e={},n=Object.keys(t);let r;const i=n.length;let a;for(r=0;r<i;r++)a=n[r],e[a]=t[a];return e}function Jh(t){if(!g.isArray(t))return t;const e=Object.keys(t);return e.length!==t.length||e.some((n,r)=>n!==String(r))?Yh(t):t}function gb(t){const e=[t];for(;e.length;){const n=e.pop();Object.keys(n).forEach(r=>{const i=n[r]=Jh(n[r]);(g.isArray(i)||g.isPlainObject(i))&&e.push(i)})}return t}function Xh(t){function e(n,r,i,a){Zh(a);let o=n[a++];if(o==="__proto__")return!0;const l=Number.isFinite(+o),c=a>=n.length;return o=!o&&g.isArray(i)?i.length:o,c?(g.hasOwnProp(i,o)?(i[o]=Jh(i[o]),i[o]=g.isArray(i[o])?i[o].concat(r):[i[o],r]):i[o]=r,!l):((!g.hasOwnProp(i,o)||!g.isObject(i[o]))&&(i[o]=[]),e(n,r,i[o],a)&&g.isArray(i[o])&&(i[o]=Yh(i[o])),!l)}if(g.isFormData(t)&&g.isFunction(t.entries)){const n={};return g.forEachEntry(t,(r,i)=>{e(mb(r),i,n,0)}),gb(n)}return null}const Qh=Object.freeze(["get","delete","head","options","post","put","patch","purge","link","unlink","query"]),lr=(t,e)=>t!=null&&g.hasOwnProp(t,e)?t[e]:void 0;function xb(t,e,n){if(g.isString(t))try{return(e||JSON.parse)(t),g.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const Ei={transitional:ll,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,a=g.isObject(e);if(a&&g.isHTMLForm(e)&&(e=new FormData(e)),g.isFormData(e))return i?JSON.stringify(Xh(e)):e;if(g.isArrayBuffer(e)||g.isBuffer(e)||g.isStream(e)||g.isFile(e)||g.isBlob(e)||g.isReadableStream(e))return e;if(g.isArrayBufferView(e))return e.buffer;if(g.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let l;if(a){const c=lr(this,"formSerializer");if(r.indexOf("application/x-www-form-urlencoded")>-1)return fb(e,c).toString();if((l=g.isFileList(e))||r.indexOf("multipart/form-data")>-1){const d=lr(this,"env"),u=d&&d.FormData;return Xs(l?{"files[]":e}:e,u&&new u,c)}}return a||i?(n.setContentType("application/json",!1),xb(e)):e}],transformResponse:[function(e){const n=lr(this,"transitional")||Ei.transitional,r=n&&n.forcedJSONParsing,i=lr(this,"responseType"),a=i==="json";if(g.isResponse(e)||g.isReadableStream(e))return e;if(e&&g.isString(e)&&(r&&!i||a)){const l=!(n&&n.silentJSONParsing)&&a;try{return JSON.parse(e,lr(this,"parseReviver"))}catch(c){if(l)throw c.name==="SyntaxError"?O.from(c,O.ERR_BAD_RESPONSE,this,null,lr(this,"response")):c}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Pe.classes.FormData,Blob:Pe.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};g.forEach(Qh,t=>{Ei.headers[t]={}});function Oa(t,e){const n=this||Ei,r=e||n,i=$e.from(r.headers);let a=r.data;return g.forEach(t,function(l){a=l.call(n,a,i.normalize(),e?e.status:void 0)}),i.normalize(),a}function ep(t){return!!(t&&t.__CANCEL__)}let _i=class extends O{constructor(e,n,r){super(e??"canceled",O.ERR_CANCELED,n,r),this.name="CanceledError",this.__CANCEL__=!0}};function tp(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new O("Request failed with status code "+n.status,n.status>=400&&n.status<500?O.ERR_BAD_REQUEST:O.ERR_BAD_RESPONSE,n.config,n.request,n))}const yb=/[\t\n\r]/g;function np(t){if(typeof t!="string")return t;let e=0;for(;e<t.length&&t.charCodeAt(e)<=32;)e++;return t.slice(e).replace(yb,"")}function Aa(t){const e=/^([-+\w]{1,25}):(?:\/\/)?/.exec(t);return e&&e[1].toLowerCase()||""}const Rc=t=>{try{return decodeURIComponent(t)}catch{return t}},rp=Pe.hasStandardBrowserEnv?{write(t,e,n,r,i,a,o){if(typeof document>"u")return;const l=[`${t}=${encodeURIComponent(e)}`];g.isNumber(n)&&l.push(`expires=${new Date(n).toUTCString()}`),g.isString(r)&&l.push(`path=${r}`),g.isString(i)&&l.push(`domain=${i}`),a===!0&&l.push("secure"),g.isString(o)&&l.push(`SameSite=${o}`),document.cookie=l.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie;if(!e)return null;const n=e.split(";");for(let r=0;r<n.length;r++){const i=n[r].replace(/^\s+/,""),a=i.indexOf("=");if(a!==-1&&i.slice(0,a)===t)return Rc(i.slice(a+1))}return null},async readAsync(t){try{const e=typeof window<"u"&&window.cookieStore;if(e&&g.isFunction(e.get)){const n=await e.get(t);return n?Rc(n.value):null}}catch{}return this.read(t)},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},async readAsync(){return null},remove(){}};function vb(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i=0,a=0,o;return e=e!==void 0?e:1e3,function(c){const d=Date.now(),u=r[a];o||(o=d),n[i]=c,r[i]=d;let h=a,p=0;for(;h!==i;)p+=n[h++],h=h%t;if(i=(i+1)%t,i===a&&(a=(a+1)%t),d-o<e)return;const m=u&&d-u;return m?Math.round(p*1e3/m):void 0}}function bb(t,e){let n=0,r=1e3/e,i,a;const o=(u,h=Date.now())=>{n=h,i=null,a&&(clearTimeout(a),a=null),t(...u)};return[(...u)=>{const h=Date.now(),p=h-n;p>=r?o(u,h):(i=u,a||(a=setTimeout(()=>{a=null,o(i)},r-p)))},()=>i&&o(i),(...u)=>o(u)]}const xs=(t,e,n=3)=>{let r=0;const i=vb(50,250);return bb(a=>{if(!a||!g.isNumber(a.loaded))return;const o=a.loaded,l=a.lengthComputable?a.total:void 0,c=Math.max(0,l!=null?Math.min(o,l):o),d=Math.max(0,c-r),u=i(d);r=Math.max(r,c);const h={loaded:c,total:l,progress:l?c/l:void 0,bytes:d,rate:u||void 0,estimated:u&&l?(l-c)/u:void 0,event:a,lengthComputable:l!=null,[e?"download":"upload"]:!0};t(h)},n)},Cc=(t,e)=>{const n=t!=null;return[r=>e[0]({lengthComputable:n,total:t,loaded:r}),e[1]]},Oc=(t,e=g.asap)=>(...n)=>e(()=>t(...n)),wb=Pe.hasStandardBrowserEnv?(t=>e=>(e=new URL(e,document.baseURI||Pe.origin),t.protocol===e.protocol&&t.host===e.host&&t.port===e.port))(new URL(Pe.origin)):()=>!0;function kb(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Sb(t,e){if(!e)return t;let n=t.length;for(;n>0&&t.charCodeAt(n-1)===47;)n--;return t.slice(0,n)+"/"+e.replace(/^\/+/,"")}const jb=/^https?:(?!\/\/)/i;function Eb(t){return t&&t.replace(/(^|&)([^=&]*=)?[^&]+/g,(e,n,r="")=>`${n}${r}${gs}`)}function _b(t){const e=t.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${gs}@`),n=e.indexOf("#"),i=(n===-1?e:e.slice(0,n)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${gs}`);return n===-1?i:`${i}#${Eb(e.slice(n+1))}`}function Ac(t,e){if(typeof t=="string"){const n=np(t);if(jb.test(n))throw new O(`Invalid URL ${JSON.stringify(_b(n))}: missing "//" after protocol`,O.ERR_INVALID_URL,e)}}function ip(t,e,n,r){Ac(e,r);let i=!kb(e);return t&&(i||n===!1)?(Ac(t,r),Sb(t,e)):e}function Tb(t){const e=[{value:t}],n=new WeakSet,r=new WeakSet;for(;e.length;){const{value:i,done:a}=e.pop();if(!g.isPlainObject(i)&&!g.isArray(i))continue;if(a){n.delete(i);continue}if(n.has(i))throw new O("Circular reference detected in params",O.ERR_BAD_OPTION_VALUE);if(r.has(i))continue;r.add(i),n.add(i),e.push({value:i,done:!0});const o=Object.keys(i);Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor&&Object.getOwnPropertySymbols(i).forEach(l=>{const c=Object.getOwnPropertyDescriptor(i,l);c&&c.enumerable&&o.push(l)}),o.forEach(l=>{if(l==="__proto__"||l==="constructor"||l==="prototype"){const c=Object.getOwnPropertyDescriptor(i,l);c&&g.hasOwnProp(c,"value")&&e.push({value:c.value})}else e.push({value:i[l]})})}}const Pc=t=>t instanceof $e?{...t}:t,To=t=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(t).concat(Object.getOwnPropertySymbols(t).filter(e=>{const n=Object.getOwnPropertyDescriptor(t,e);return n&&n.enumerable})):Object.keys(t);function Ib(t,e){const n=[],r=new WeakMap,i={};function a(l,c){if(!g.isPlainObject(c))return g.isArray(c)?c.slice():c;const d=g.isPlainObject(l)?l:i;let u=r.get(c);if(u||(u=new WeakMap,r.set(c,u)),u.has(d))return u.get(d);const h={};return u.set(d,h),n.push({base:d,source:c,result:h}),h}const o=g.isUndefined(e)?a(void 0,t):a(t,e);for(;n.length;){const{base:l,source:c,result:d}=n.pop(),u=new Set(To(l)),h=new Set(To(c));new Set([...u,...h]).forEach(m=>{if(m==="__proto__"||m==="constructor"||m==="prototype")return;const x=h.has(m),y=x?c[m]:void 0,b=(!x||g.isPlainObject(y))&&u.has(m)?l[m]:void 0;d[m]=x?a(b,y):a(void 0,b)})}return Tb(o),o}function kn(t,e,n,r){return g.isPlainObject(t)&&g.isPlainObject(e)?g.merge.call({caseless:r},t,e):g.isPlainObject(e)?g.merge({},e):g.isArray(e)?e.slice():e}function sp(t,e,n,r){if(g.isUndefined(e)){if(!g.isUndefined(t))return kn(void 0,t,n,r)}else return kn(t,e,n,r)}function Pa(t,e){if(!g.isUndefined(e))return kn(void 0,e)}function ge(t,e){if(g.isUndefined(e)){if(!g.isUndefined(t))return kn(void 0,t)}else return kn(void 0,e)}function Rb(t,e,n){const r=g.hasOwnProp(e,"transitional")?e.transitional:void 0;if(!g.isUndefined(r))if(g.isPlainObject(r)){if(g.hasOwnProp(r,n))return r[n]}else return;const i=g.hasOwnProp(t,"transitional")?t.transitional:void 0;if(g.isPlainObject(i)&&g.hasOwnProp(i,n))return i[n]}function Io(t,e,n,r,i){if(g.hasOwnProp(i,n))return kn(t,e);if(g.hasOwnProp(r,n))return kn(void 0,t)}function Cb(t,e,n){return sp(Pc(t),Pc(e),n,!0)}const Ob=Object.freeze({__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0}),Nc={url:Pa,method:Pa,data:Pa,baseURL:ge,transformRequest:ge,transformResponse:ge,params:Ib,paramsSerializer:ge,timeout:ge,timeoutErrorMessage:ge,withCredentials:ge,withXSRFToken:ge,adapter:ge,responseType:ge,xsrfCookieName:ge,xsrfHeaderName:ge,onUploadProgress:ge,onDownloadProgress:ge,decompress:ge,maxContentLength:ge,maxBodyLength:ge,beforeRedirect:ge,transport:ge,httpAgent:ge,httpsAgent:ge,cancelToken:ge,socketPath:ge,allowedSocketPaths:ge,responseEncoding:ge,validateStatus:Io,headers:Cb};function Jn(t,e){t=t||{},e=e||{};const n=Object.create(null);Object.defineProperty(n,"hasOwnProperty",Ob);const r=To({...t,...e});for(let i=0,a=r.length;i<a;i++){const o=r[i];if(o==="__proto__"||o==="constructor"||o==="prototype")continue;const l=g.hasOwnProp(Nc,o)?Nc[o]:sp,c=g.hasOwnProp(t,o)?t[o]:void 0,d=g.hasOwnProp(e,o)?e[o]:void 0,u=l===Io?l(c,d,o,t,e):l(c,d,o);g.isUndefined(u)&&l!==Io||(n[o]=u)}return g.hasOwnProp(e,"validateStatus")&&g.isUndefined(e.validateStatus)&&Rb(t,e,"validateStatusUndefinedResolves")===!1&&(g.hasOwnProp(t,"validateStatus")?n.validateStatus=kn(void 0,t.validateStatus):delete n.validateStatus),n}const Ab=["content-type","content-length"];function Pb(t,e,n){if(n!=="content-only"){t.set(e);return}Object.entries(e||{}).forEach(([r,i])=>{Ab.includes(r.toLowerCase())&&t.set(r,i)})}const Lc=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16))),Nb=t=>rp.read(t);function ap(t,e=Nb){const n=Jn({},t),r=m=>g.hasOwnProp(n,m)?n[m]:void 0,i=r("data");let a=r("withXSRFToken");const o=r("xsrfHeaderName"),l=r("xsrfCookieName");let c=r("headers");const d=r("auth"),u=r("baseURL"),h=r("allowAbsoluteUrls"),p=r("url");if(n.headers=c=$e.from(c),n.url=Kh(ip(u,p,h,n),r("params"),r("paramsSerializer")),d){const m=g.getSafeProp(d,"username")||"",x=g.getSafeProp(d,"password")||"",y=r("transitional"),b=y&&g.hasOwnProp(y,"encodeBasicAuthUsername")&&y.encodeBasicAuthUsername===!0;try{c.set("Authorization","Basic "+btoa((b?Lc(m):m)+":"+(x?Lc(x):"")))}catch(_){throw O.from(_,O.ERR_BAD_OPTION_VALUE,t)}}if(g.isFormData(i)){const m=g.getSafeProp(i,"getHeaders");Pe.hasStandardBrowserEnv||Pe.hasStandardBrowserWebWorkerEnv||g.isReactNative(i)?c.setContentType(void 0):g.isFunction(m)&&Pb(c,m.call(i),r("formDataHeaderPolicy"))}if(Pe.hasStandardBrowserEnv&&(g.isFunction(a)&&(a=a(n)),a===!0||a==null&&wb(n.url))){const x=o&&l&&e(l);x&&c.set(o,x)}return n}const Lb=typeof XMLHttpRequest<"u",$b=Lb&&function(t){return new Promise(function(n,r){let i;try{const F=Pe.hasStandardBrowserEnv&&typeof window<"u"&&window.cookieStore;i=F&&g.isFunction(F.get)}catch{}let a;const o=ap(t,i?F=>(a=F,null):void 0);let l=o.data;const c=$e.from(o.headers).normalize();let{responseType:d,onUploadProgress:u,onDownloadProgress:h}=o,p,m,x,y,b,_,j;function w(){clearTimeout(m);try{b&&b()}catch(F){setTimeout(()=>{throw F})}try{_&&_()}catch(F){setTimeout(()=>{throw F})}v&&(y&&v.removeEventListener("progress",y),v.upload&&(x&&v.upload.removeEventListener("progress",x),b&&v.upload.removeEventListener("loadend",b))),o.cancelToken&&o.cancelToken.unsubscribe(p),o.signal&&o.signal.removeEventListener("abort",p)}let v=new XMLHttpRequest;v.open(o.method.toUpperCase(),o.url,!0),v.timeout=o.timeout;function I(F){if(!v)return;if(v.status===0&&(Aa(np(o.url))||Aa(Pe.origin))!=="file"&&!(v.responseURL&&v.responseURL.startsWith("file:"))){r(new O("Request aborted",O.ECONNABORTED,t,v)),w(),v=null;return}try{F?j&&j(F):_&&_()}catch(Z){setTimeout(()=>{throw Z})}if(!v)return;const L=$e.from("getAllResponseHeaders"in v&&v.getAllResponseHeaders()),M={data:!d||d==="text"||d==="json"?v.responseText:v.response,status:v.status,statusText:v.statusText,headers:L,config:t,request:v};tp(function(ce){n(ce),w()},function(ce){r(ce),w()},M),v=null}if("onloadend"in v?v.onloadend=I:v.onreadystatechange=function(){!v||v.readyState!==4||v.status===0&&!(v.responseURL&&v.responseURL.startsWith("file:"))||setTimeout(I)},v.onabort=function(){v&&(r(new O("Request aborted",O.ECONNABORTED,t,v)),w(),v=null)},v.onerror=function(L){const z=L&&L.message?L.message:"Network Error",M=new O(z,O.ERR_NETWORK,t,v);M.event=L||null,r(M),w(),v=null},v.ontimeout=function(){if(!v)return;let L=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const z=o.transitional||ll;o.timeoutErrorMessage&&(L=o.timeoutErrorMessage),r(new O(L,z.clarifyTimeoutError?O.ETIMEDOUT:O.ECONNABORTED,t,v)),w(),v=null},l===void 0&&c.setContentType(null),g.isUndefined(o.withCredentials)||(v.withCredentials=!!o.withCredentials),d&&d!=="json"&&(v.responseType=o.responseType),h&&([y,_,j]=xs(h,!0),v.addEventListener("progress",y)),u&&v.upload&&([x,b]=xs(u),v.upload.addEventListener("progress",x),v.upload.addEventListener("loadend",b)),o.cancelToken||o.signal){if(p=F=>{if(!v)return;r(!F||F.type?new _i(null,t,v):F);const L=v;w(),v=null,L.abort()},o.cancelToken&&o.cancelToken.subscribe(p),!v)return;o.signal&&(o.signal.aborted?p():o.signal.addEventListener("abort",p))}if(!v)return;const C=Aa(o.url);if(C&&!Pe.protocols.includes(C)){r(new O("Unsupported protocol "+C+":",O.ERR_BAD_REQUEST,t)),w();return}const D=()=>{v&&("setRequestHeader"in v&&g.forEach(zh(c),function(L,z){v.setRequestHeader(z,L)}),v.send(l||null))};if(a){const F=typeof performance<"u"&&g.isFunction(performance.now)?()=>performance.now():Date.now,L=v.timeout>0?F()+Number(v.timeout):void 0,z=()=>{if(!v)return;const M=v;M.ontimeout(),M.abort()};if(L!==void 0){const M=()=>{const Z=L-F();Z>0?m=setTimeout(M,Math.min(Z,2147483647)):z()};M()}rp.readAsync(a).then(M=>{if(v){if(L!==void 0&&F()>=L){z();return}if(M){const Z=g.hasOwnProp(o,"xsrfHeaderName")&&o.xsrfHeaderName;c.set(Z,M)}D()}}).catch(M=>{v&&(r(O.from(M,null,t,v)),w(),v=null)})}else D()})},Db=(t,e)=>{if(t=t?t.filter(Boolean):[],!e&&!t.length)return;const n=new AbortController;let r=!1;const i=function(c){if(!r){r=!0,o();const d=c instanceof Error?c:this.reason;n.abort(d instanceof O?d:new _i(d instanceof Error?d.message:d))}};let a=e&&setTimeout(()=>{a=null,i(new O(`timeout of ${e}ms exceeded`,O.ETIMEDOUT))},e);const o=()=>{t&&(a&&clearTimeout(a),a=null,t.forEach(c=>{const d=g.getSafeProp(c,"unsubscribe");g.isFunction(d)?d.call(c,i):c.removeEventListener("abort",i)}),t=null)};t.forEach(c=>{if(!r){if(c.aborted){i.call(c);return}c.addEventListener("abort",i,{once:!0})}});const{signal:l}=n;return l.unsubscribe=()=>g.asap(o),l},Mb=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let r=0,i;for(;r<n;)i=r+e,yield t.slice(r,i),r=i},Fb=async function*(t,e){for await(const n of Ub(t))yield*Mb(n,e)},Ub=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:r}=await e.read();if(n)break;yield r}}finally{await e.cancel()}},$c=(t,e,n,r)=>{const i=Fb(t,e);let a=0,o,l=c=>{o||(o=!0,r&&r(c))};return new ReadableStream({async pull(c){try{const{done:d,value:u}=await i.next();if(d){l(),c.close();return}let h=u.byteLength;if(n){let p=a+=h;n(p)}c.enqueue(new Uint8Array(u))}catch(d){throw l(d),d}},cancel(c){return l(c),i.return()}},{highWaterMark:2})},hn=`\r
`,Dc=t=>String(t).replace(/\r\n|\r|\n/g,hn),Mc=t=>String(t).replace(/[\r\n"]/g,e=>e==="\r"?"%0D":e===`
`?"%0A":"%22"),qr=(t,e)=>{let n=0;for(let r=0;r<t.length;r++){const i=t.charCodeAt(r);e&&(i===13||i===10)?(i===13&&t.charCodeAt(r+1)===10&&r++,n+=2):i<128?n++:i<2048?n+=2:i>=55296&&i<=56319&&t.charCodeAt(r+1)>=56320&&t.charCodeAt(r+1)<=57343?(n+=4,r++):n+=3}return n};class ns extends TypeError{constructor(e,n){super(e),this.name="FormDataError",this.reason=n}}function Bb(t,e,n,r,i){if(!g.isFunction(e))throw new ns("Blob is not supported","blob");if(!g.isString(i)||!/^[A-Za-z0-9'()+_,./:=? -]{1,70}$/.test(i)||/ $/.test(i))throw new ns("Invalid multipart boundary","boundary");const a="--"+i+"--"+hn;let o=a.length;const l=[],c=u=>{if(o+u>n)throw r()};c(0);for(const[u,h]of t){const p=g.isString(h),m=p?qr(h,!0):h.size;if(!Number.isFinite(m)||m<0)throw new ns("Unsupported FormData part size","part");c(m+qr(u,!0)+(!p&&h.name?qr(h.name,!1):0)+(!p&&h.type?qr(h.type,!1):0));let x="--"+i+hn+'Content-Disposition: form-data; name="'+Mc(Dc(u))+'"';p||(x+='; filename="'+Mc(g.isString(h.name)?h.name:"blob")+'"'+hn+"Content-Type: "+String(h.type||"application/octet-stream").replace(/[\r\n]/g,"")),x+=hn+hn;const y=qr(x,!1)+m+hn.length;c(y),o+=y,l.push({header:x,value:h,isString:p})}const d=[];for(const u of l)d.push(u.header,u.isString?Dc(u.value):u.value,hn);return d.push(a),new e(d,{type:"multipart/form-data; boundary="+i})}function zb(t,e,n,r,i){if(!g.isFunction(e))throw new O("Blob is not supported",O.ERR_NOT_SUPPORT);if(i===void 0)if(g.isFunction(Pe.generateString))i="axios-"+Pe.generateString(36,"0123456789abcdef");else{const a=g.global.crypto;if(!a||!g.isFunction(a.getRandomValues))throw new O("Random byte generation is not supported",O.ERR_NOT_SUPPORT);const o=new Uint8Array(18);a.getRandomValues(o),i="axios-"+Array.from(o,l=>("0"+l.toString(16)).slice(-2)).join("")}try{return Bb(t,e,n,r,i)}catch(a){if(a instanceof ns){const o=a.reason==="boundary"?O.ERR_BAD_OPTION_VALUE:O.ERR_BAD_REQUEST;throw new O(a.message,o)}throw a}}const Fc=t=>t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102,op=(t,e,n)=>e+2<n&&Fc(t.charCodeAt(e+1))&&Fc(t.charCodeAt(e+2)),Uc=t=>t<=57?t-48:(t&223)-55,Hb=t=>t>=65&&t<=90||t>=97&&t<=122||t>=48&&t<=57||t===43||t===47||t===45||t===95,Vb=t=>t===9||t===10||t===12||t===13||t===32,Wb=t=>{const e=Math.floor(t/4),n=t%4;return e*3+(n===2?1:n===3?2:0)},qb=t=>{const e=t.length;let n=0;return e>0&&t.charCodeAt(e-1)===61&&(n++,e>1&&t.charCodeAt(e-2)===61&&n++),Math.floor((e-n)*3/4)},Kb=t=>{const e=t.length;let n=0,r=0,i=!1;for(let a=0;a<e;a++){let o=t.charCodeAt(a);if(o===37&&op(t,a,e)&&(o=Uc(t.charCodeAt(a+1))*16+Uc(t.charCodeAt(a+2)),a+=2),!Vb(o)){if(o===61){r++;continue}if(!Hb(o)||r>0){i=!0;continue}n++}}return i||r>2||r>0&&(n+r)%4!==0||n%4===1?qb(t):Wb(n)},Gb=(t,e,n)=>{if(!t||typeof t!="string"||!/^data:/i.test(t))return 0;const r=t.indexOf(",");if(r<0)return 0;const i=t.slice(5,r),a=t.slice(r+1);if(n.test(i))return e(a);let l=0;for(let c=0,d=a.length;c<d;c++){const u=a.charCodeAt(c);if(u===37&&op(a,c,d))l+=1,c+=2;else if(u<128)l+=1;else if(u<2048)l+=2;else if(u>=55296&&u<=56319&&c+1<d){const h=a.charCodeAt(c+1);h>=56320&&h<=57343?(l+=4,c++):l+=3}else l+=3}return l};function Zb(t){const e=typeof t=="string"?t.indexOf("#"):-1;return Gb(e===-1?t:t.slice(0,e),Kb,/; *base64[\t\n\f\r ]*$/i)}const dl="1.21.0",Bc=64*1024,zc={cache:"default",redirect:"follow",referrer:"about:client",referrerPolicy:"",mode:"cors",integrity:"",keepalive:!1,priority:"auto",window:null},{isFunction:Ui}=g,Yb=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16))),Hc=t=>{if(!g.isString(t))return t;try{return decodeURIComponent(t)}catch{return t}},Bi=(t,...e)=>{try{return!!t(...e)}catch{return!1}},Jb=t=>{const e=t.indexOf("://");let n=t;return e!==-1&&(n=n.slice(e+3)),n.includes("@")||n.includes(":")},Xb=t=>{const e=g.global!==void 0&&g.global!==null?g.global:globalThis,{ReadableStream:n,TextEncoder:r}=e;t=g.merge.call({skipUndefined:!0},{Request:e.Request,Response:e.Response,Blob:e.Blob},t);const i=g.hasOwnProp(t,"fetch")?t.fetch:void 0,{Request:a,Response:o,Blob:l}=t,c=i?Ui(i):typeof fetch=="function",d=Ui(a),u=Ui(o);if(!c)return!1;const h=c&&Ui(n),p=c&&(typeof r=="function"?(w=>v=>w.encode(v))(new r):async w=>new Uint8Array(await new a(w).arrayBuffer())),m=d&&h&&Bi(()=>{let w=!1;const v=new a(Pe.origin,{body:new n,method:"POST",get duplex(){return w=!0,"half"}}),I=v.headers.has("Content-Type");return v.body!=null&&v.body.cancel(),w&&!I}),x=u&&h&&Bi(()=>g.isReadableStream(new o("").body)),y=Object.assign(Object.create(null),zc);d&&!Bi(()=>new a(Pe.origin,y))&&(delete y.cache,Bi(()=>new a(Pe.origin,y))||(y.cache=zc.cache));const b={stream:x&&(w=>w.body)};c&&["text","arrayBuffer","blob","formData","stream"].forEach(w=>{!b[w]&&(b[w]=(v,I)=>{let C=v&&v[w];if(C)return C.call(v);throw new O(`Response type '${w}' is not supported`,O.ERR_NOT_SUPPORT,I)})});const _=async w=>{if(w==null)return 0;if(g.isBlob(w))return w.size;if(g.isArrayBufferView(w)||g.isArrayBuffer(w))return w.byteLength;if(g.isURLSearchParams(w)&&(w=w+""),g.isString(w))return(await p(w)).byteLength},j=async(w,v)=>{const I=g.toFiniteNumber(w.getContentLength());return I??_(v)};return async w=>{let{url:v,method:I,data:C,signal:D,cancelToken:F,timeout:L,onDownloadProgress:z,onUploadProgress:M,responseType:Z,headers:ce,withCredentials:he="same-origin",fetchOptions:de,maxContentLength:ae,maxBodyLength:Se,maxRedirects:be}=ap(w);const Te=g.isNumber(ae)&&ae>-1,A=g.isNumber(Se)&&Se>-1,pe=ne=>g.hasOwnProp(w,ne)?w[ne]:void 0;let Ie=i||fetch;Z=Z?(Z+"").toLowerCase():"text";let Be=Db([D,F&&F.toAbortSignal()],L),fe=null;const ze=Be&&Be.unsubscribe&&(()=>{Be.unsubscribe()});let Mt,rn=null,sn=null;const It=()=>new O("Request body larger than maxBodyLength limit",O.ERR_BAD_REQUEST,w,fe);try{let ne;const Ne=pe("auth");if(Ne){const Y=g.getSafeProp(Ne,"username")||"",Me=g.getSafeProp(Ne,"password")||"";ne={username:Y,password:Me}}let Ve;if(Jb(v)){if(Ve=new URL(v,Pe.origin),!ne&&(Ve.username||Ve.password)){const Y=Hc(Ve.username),Me=Hc(Ve.password);ne={username:Y,password:Me}}(Ve.username||Ve.password)&&(Ve.username="",Ve.password="",v=Ve.href)}if(ne&&(ce.delete("authorization"),ce.set("Authorization","Basic "+btoa(Yb((ne.username||"")+":"+(ne.password||""))))),Te&&Ve&&Ve.protocol==="data:"&&Zb(Ve.href)>ae)throw new O("maxContentLength size of "+ae+" exceeded",O.ERR_BAD_RESPONSE,w,fe);const Ft=g.isSpecCompliantForm(C)&&$e.from(pe("headers")).getContentType();let an;if(g.isString(Ft)&&/^multipart\/form-data(?:\s*;|$)/i.test(Ft.trim())){const Y=$e.parseParameters(Ft);g.hasOwnProp(Y,"boundary")&&(an=Y.boundary)}if(g.isSpecCompliantForm(C)&&I!=="get"&&I!=="head"&&(A||M&&m||an!==void 0)&&(C=zb(C,l,A?Se:1/0,It,an),ce.setContentType(an===void 0?C.type:Ft),Mt=C.size),A&&I!=="get"&&I!=="head"){const Y=await _(C);if(typeof Y=="number"&&isFinite(Y)&&(Mt=Y,Y>Se))throw It()}const on=A&&(g.isReadableStream(C)||g.isStream(C)),ir=(Y,Me,Ut)=>$c(Y,Bc,xt=>{if(A&&xt>Se)throw rn=It();Me&&Me(xt)},Ut);if(m&&I!=="get"&&I!=="head"&&(M||on)){if(Mt=Mt??await j(ce,C),Mt!==0||on){let Y=new a(v,{method:"POST",body:C,duplex:"half"}),Me;if(g.isFormData(C)&&(Me=Y.headers.get("content-type"))&&ce.setContentType(Me),Y.body){const[Ut,xt]=M&&Cc(Mt,xs(Oc(M)))||[];C=ir(Y.body,Ut,xt)}}}else if(on&&!d&&h&&I!=="get"&&I!=="head")C=ir(C);else if(on&&d&&!m&&I!=="get"&&I!=="head")throw new O("Stream request bodies are not supported by the current fetch implementation",O.ERR_NOT_SUPPORT,w,fe);g.isString(he)||(he=he?"include":"omit");const ln=d&&"credentials"in a.prototype;if(g.isFormData(C)){const Y=ce.getContentType();Y&&/^multipart\/form-data/i.test(Y)&&!/boundary=/i.test(Y)&&ce.delete("content-type")}ce.set("User-Agent","axios/"+dl,!1);const Re=de==null?de:Object.assign(Object.create(null),de);Re&&(delete Re.body,delete Re.headers,delete Re.method,delete Re.signal,delete Re.duplex,delete Re.credentials);const We=Object.assign(Object.create(null),Re,{signal:Be,method:I.toUpperCase(),headers:zh(ce.normalize()),body:C,duplex:"half",credentials:ln?he:void 0});d&&(g.forEach(y,(Y,Me)=>{We[Me]===void 0&&(We[Me]=Y)}),We.signal===void 0&&(We.signal=null),We.body===void 0&&(We.body=null)),be===0&&(We.redirect="manual",Re&&(Re.redirect="manual")),fe=d&&new a(v,We);let st=await(d?Ie(fe,Re):Ie(v,We));const Nr=$e.from(st.headers);if(Te){const Y=g.toFiniteNumber(Nr.getContentLength());if(Y!=null&&Y>ae)throw new O("maxContentLength size of "+ae+" exceeded",O.ERR_BAD_RESPONSE,w,fe)}const Lr=x&&(Z==="stream"||Z==="response");if(x&&st.body&&(z||Te||Lr&&ze)){const Y={};["status","statusText","headers"].forEach(Pn=>{Y[Pn]=st[Pn]});const Me=g.toFiniteNumber(Nr.getContentLength()),[Ut,xt]=z&&Cc(Me,xs(Oc(z),!0))||[];let $r=0;const ma=Pn=>{if(Te&&($r=Pn,$r>ae))throw sn=new O("maxContentLength size of "+ae+" exceeded",O.ERR_BAD_RESPONSE,w,fe);Ut&&Ut(Pn)};st=new o($c(st.body,Bc,ma,()=>{xt&&xt(),ze&&ze()}),Y)}Z=Z||"text";let gt=await b[g.findKey(b,Z)||"text"](st,w);if(Te&&!x&&!Lr){let Y;if(gt!=null&&(typeof gt.byteLength=="number"?Y=gt.byteLength:typeof gt.size=="number"?Y=gt.size:typeof gt=="string"&&(Y=typeof r=="function"?new r().encode(gt).byteLength:gt.length)),typeof Y=="number"&&Y>ae)throw new O("maxContentLength size of "+ae+" exceeded",O.ERR_BAD_RESPONSE,w,fe)}return!Lr&&ze&&ze(),await new Promise((Y,Me)=>{tp(Y,Me,{data:gt,headers:$e.from(st.headers),status:st.status,statusText:st.statusText,config:w,request:fe})})}catch(ne){if(ze&&ze(),Be&&Be.aborted&&Be.reason instanceof O){const Ne=Be.reason;throw Ne.config=w,fe&&(Ne.request=fe),ne!==Ne&&Object.defineProperty(Ne,"cause",{__proto__:null,value:ne,writable:!0,enumerable:!1,configurable:!0}),Ne}if(rn)throw fe&&!rn.request&&(rn.request=fe),rn;if(sn)throw sn;if(ne instanceof O)throw fe&&!ne.request&&(ne.request=fe),ne;if(ne&&ne.name==="TypeError"&&/Load failed|fetch/i.test(ne.message)){const Ne=new O("Network Error",O.ERR_NETWORK,w,fe,ne&&ne.response);throw Object.defineProperty(Ne,"cause",{__proto__:null,value:ne.cause||ne,writable:!0,enumerable:!1,configurable:!0}),Ne}throw O.from(ne,ne&&ne.code,w,fe,ne&&ne.response)}}},Qb=new Map,lp=t=>{const e=Object.create(null),n=t&&g.hasOwnProp(t,"env")&&t.env;["fetch","Request","Response","Blob"].forEach(m=>{n&&g.hasOwnProp(n,m)&&(e[m]=n[m])});const{fetch:r,Request:i,Response:a,Blob:o}=e,l=[i,a,r,o];let c=l.length,d=c,u,h,p=Qb;for(;d--;)u=l[d],h=p.get(u),h===void 0&&p.set(u,h=d?new Map:Xb(e)),p=h;return h};lp();const ul={http:tb,xhr:$b,fetch:{get:lp}};g.forEach(ul,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{__proto__:null,value:e})}catch{}Object.defineProperty(t,"adapterName",{__proto__:null,value:e})}});const Vc=t=>`- ${t}`,ew=t=>g.isFunction(t)||t===null||t===!1;function tw(t,e){t=g.isArray(t)?t:[t];const{length:n}=t;let r,i;const a={};for(let o=0;o<n;o++){r=t[o];let l;if(i=r,!ew(r)&&(i=ul[(l=String(r)).toLowerCase()],i===void 0))throw new O(`Unknown adapter '${l}'`);if(i&&(g.isFunction(i)||(i=i.get(e))))break;a[l||"#"+o]=i}if(!i){const o=Object.entries(a).map(([c,d])=>`adapter ${c} `+(d===!1?"is not supported by the environment":"is not available in the build"));let l=n?o.length>1?`since :
`+o.map(Vc).join(`
`):" "+Vc(o[0]):"as no adapter specified";throw new O("There is no suitable adapter to dispatch the request "+l,O.ERR_NOT_SUPPORT)}return i}const cp={getAdapter:tw,adapters:ul};function Na(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new _i(null,t)}function Wc(t){return Math.max(0,Date.now()-t)}function La(t){const e=g.toSafeFlatObject(t);Na(e),e.headers=$e.from(g.getSafeProp(e,"headers")),e.data=Oa.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1);const n=cp.getAdapter(e.adapter||Ei.adapter,e),r=Date.now();return n(e).then(function(a){Na(e),a.duration=Wc(r),e.response=a;try{a.data=Oa.call(e,e.transformResponse,a)}finally{delete e.response}return a.headers=$e.from(a.headers),a},function(a){if(!ep(a)&&(Na(e),a&&a.response)){a.response.duration=Wc(r),e.response=a.response;try{a.response.data=Oa.call(e,e.transformResponse,a.response)}finally{delete e.response}a.response.headers=$e.from(a.response.headers)}return Promise.reject(a)})}const Qs={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Qs[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const qc={};Qs.transitional=function(e,n,r){function i(a,o){return"[Axios v"+dl+"] Transitional option '"+a+"'"+o+(r?". "+r:"")}return(a,o,l)=>{if(e===!1)throw new O(i(o," has been removed"+(n?" in "+n:"")),O.ERR_DEPRECATED);return n&&!qc[o]&&(qc[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(a,o,l):!0}};Qs.spelling=function(e){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};function nw(t,e,n){if(typeof t!="object"||t===null)throw new O("options must be an object",O.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const a=r[i],o=Object.prototype.hasOwnProperty.call(e,a)?e[a]:void 0;if(o){const l=t[a],c=l===void 0||o(l,a,t);if(c!==!0)throw new O("option "+a+" must be "+c,O.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new O("Unknown option "+a,O.ERR_BAD_OPTION)}}const rs={assertOptions:nw,validators:Qs},Fe=rs.validators,$a=t=>{if(t==null||g.isPlainObject(t)||t instanceof $e)return!0;try{return g.isObject(t)&&g.getSafeProp(t,Symbol.toStringTag)==="AxiosHeaders"&&["toJSON","set","get","has","delete","clear","normalize","concat","toString",Symbol.iterator].every(e=>g.isFunction(g.getSafeProp(t,e)))}catch{return!1}};let Wn=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Tc,response:new Tc}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error)try{let i={};Error.captureStackTrace?Error.captureStackTrace(i):i=new Error;const a=i.stack;let o="";if(typeof a=="string"){const l=a.indexOf(`
`);o=l===-1?"":a.slice(l+1)}if(!r.stack)r.stack=o;else if(o){const l=o.indexOf(`
`),c=l===-1?-1:o.indexOf(`
`,l+1),d=c===-1?o:o.slice(c+1),u=String(r.stack),h=Qv(r,u),p=h===-1?u:u.slice(0,h),m=h===-1?"":u.slice(h);p.endsWith(d)||(r.stack=p+`
`+o+m)}}catch{}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Jn(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:a}=n;r!==void 0&&rs.assertOptions(r,{silentJSONParsing:Fe.transitional(Fe.boolean),forcedJSONParsing:Fe.transitional(Fe.boolean),clarifyTimeoutError:Fe.transitional(Fe.boolean),legacyInterceptorReqResOrdering:Fe.transitional(Fe.boolean),advertiseZstdAcceptEncoding:Fe.transitional(Fe.boolean),validateStatusUndefinedResolves:Fe.transitional(Fe.boolean),encodeBasicAuthUsername:Fe.transitional(Fe.boolean)},!1),i!=null&&(g.isFunction(i)?n.paramsSerializer={serialize:i}:rs.assertOptions(i,{encode:Fe.function,serialize:Fe.function},!0)),n.allowAbsoluteUrls!==void 0||(g.hasOwnProp(this.defaults,"allowAbsoluteUrls")&&this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),rs.assertOptions(n,{baseUrl:Fe.spelling("baseURL"),withXsrfToken:Fe.spelling("withXSRFToken")},!0),n.method=(g.getSafeProp(n,"method")||g.getSafeProp(this.defaults,"method")||"get").toLowerCase();const o=g.getSafeProp(a,"common"),l=g.getSafeProp(a,n.method),c=a&&g.merge($a(o)?o:void 0,$a(l)?l:void 0);a&&g.forEach(Qh.concat("common"),b=>{$a(g.getSafeProp(a,b))&&delete a[b]}),n.headers=$e.concat(c,a);const d=[];let u=!0;this.interceptors.request.forEach(function(_){if(typeof _.runWhen=="function"&&_.runWhen(n)===!1)return;u=u&&_.synchronous;const j=n.transitional||ll;j&&j.legacyInterceptorReqResOrdering?d.unshift(_.fulfilled,_.rejected):d.push(_.fulfilled,_.rejected)});const h=[];this.interceptors.response.forEach(function(_){h.push(_.fulfilled,_.rejected)});let p,m=0,x;if(!u){const b=[La.bind(this),void 0];for(b.unshift(...d),b.push(...h),x=b.length,p=Promise.resolve(n);m<x;)p=p.then(b[m++],b[m++]);return p}x=d.length;let y=n;for(;m<x;){const b=d[m++],_=d[m++];try{y=b?b(y):y}catch(j){if(!_){p=Promise.reject(j);break}try{const w=_.call(this,j);g.isThenable(w)&&(p=Promise.resolve(w).then(()=>La.call(this,y)))}catch(w){p=Promise.reject(w)}break}}if(!p)try{p=La.call(this,y)}catch(b){p=Promise.reject(b)}for(m=0,x=h.length;m<x;)p=p.then(h[m++],h[m++]);return p}getUri(e){e=Jn(this.defaults,e);const n=ip(e.baseURL,e.url,e.allowAbsoluteUrls,e);return Kh(n,e.params,e.paramsSerializer)}};g.forEach(["delete","get","head","options"],function(e){Wn.prototype[e]=async function(n,r){return this.request(Jn(r||{},{method:e,url:n,data:r&&g.hasOwnProp(r,"data")?r.data:void 0}))}});g.forEach(["post","put","patch","query"],function(e){function n(r){return async function(a,o,l){return this.request(Jn(l||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:a,data:o}))}}Wn.prototype[e]=n(),e!=="query"&&(Wn.prototype[e+"Form"]=n(!0))});let rw=class dp{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(a){n=a});const r=this;this.promise.then(i=>{if(!r._listeners)return;let a=r._listeners.length;for(;a-- >0;)r._listeners[a](i);r._listeners=null}),this.promise.then=i=>{let a;const o=new Promise(l=>{r.subscribe(l),a=l}).then(i);return o.cancel=function(){r.unsubscribe(a)},o},e(function(a,o,l){r.reason||(r.reason=new _i(a,o,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=r=>{e.abort(r)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new dp(function(i){e=i}),cancel:e}}};function iw(t){return function(n){return t.apply(null,n)}}function sw(t){return g.isObject(t)&&t.isAxiosError===!0}const is={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,ContentTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,UnprocessableContent:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(is).forEach(([t,e])=>{is[e]===void 0&&(is[e]=t)});function up(t){const e=new Wn(t),n=Nh(Wn.prototype.request,e);return g.extend(n,Wn.prototype,e,{allOwnKeys:!0}),g.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return up(Jn(t,i))},n}const ve=up(Ei);ve.Axios=Wn;ve.CanceledError=_i;ve.CancelToken=rw;ve.isCancel=ep;ve.VERSION=dl;ve.toFormData=Xs;ve.AxiosError=O;ve.Cancel=ve.CanceledError;ve.all=function(e){return Promise.all(e)};ve.spread=iw;ve.isAxiosError=sw;ve.mergeConfig=Jn;ve.AxiosHeaders=$e;ve.formToJSON=t=>Xh(g.isHTMLForm(t)?new FormData(t):t);ve.getAdapter=cp.getAdapter;ve.HttpStatusCode=is;ve.default=ve;const{Axios:IO,AxiosError:RO,CanceledError:CO,isCancel:OO,CancelToken:AO,VERSION:PO,all:NO,Cancel:LO,isAxiosError:$O,spread:DO,toFormData:MO,AxiosHeaders:FO,HttpStatusCode:UO,formToJSON:BO,getAdapter:zO,mergeConfig:HO,create:VO}=ve,ys=!1,aw="senditgo",ow="AIzaSyCCFkpD6mTpO7D4V2vPAx6qnABbrQFjmPw",lw="tms-prod-5b64f.firebaseapp.com",cw="tms-prod-5b64f",dw="tms-prod-5b64f.firebasestorage.app",uw="8390929152",hw="1:8390929152:web:f53f3ad71de3cf8f2ca1e5",pw="G-0P0BSKZQN0";function vs(t){const e=document.cookie.split("; ").find(n=>n.startsWith(`${encodeURIComponent(t)}=`));if(e)return decodeURIComponent(e.slice(e.indexOf("=")+1))}function bs(t,e,n={}){const{maxAge:r,path:i="/",secure:a=!1,sameSite:o="strict"}=n;let l=`${encodeURIComponent(t)}=${encodeURIComponent(e)}`;l+=`; path=${i}`,l+=`; samesite=${o}`,typeof r=="number"&&(l+=`; max-age=${Math.floor(r)}`),a&&(l+="; Secure"),document.cookie=l}function Kc(t,e="/"){document.cookie=`${encodeURIComponent(t)}=; path=${e}; max-age=0`}function hp(){Kc("X-Token"),Kc("X-Refresh-Token"),ft.getState().logout()}function yn(){hp();const t=nl();window.location.pathname!==t&&(window.location.href=t)}const fw=7,pp=200,fp=[5,201,202,204],mw=["/api/company/verifyToken","/api/company/refreshToken"],gw={baseURL:void 0},se=ve.create(gw);let mr=!1,Ro=[];function mp(t){Ro.push(t)}function ws(t){Ro.forEach(e=>e(t)),Ro=[]}async function gp(){var t,e;try{const n=se.defaults.headers.common["X-Refresh-Token"]||vs("X-Refresh-Token");if(!n)return null;const r=await ve.post(`${ys?"/apis":""}/api/company/refreshToken`,{refreshToken:n},{headers:{"Content-type":"application/json;charset-UTF-8","X-Refresh-Token":n}});if(((t=r.data)==null?void 0:t.code)===0&&((e=r.data)!=null&&e.data)){const{token:i,refresh:a}=r.data.data;se.defaults.headers.common.Token=i,se.defaults.headers.common["X-Refresh-Token"]=a;const o={sameSite:"strict",maxAge:86400,secure:!ys};return bs("X-Token",i,o),bs("X-Refresh-Token",a,o),i}return null}catch{return null}}function xw(t){if(typeof FormData<"u"&&t.data instanceof FormData?(t.headers.delete("Content-Type"),t.headers.delete("Content-type")):t.headers["Content-type"]="application/json;charset-UTF-8",!t.headers.get("Token")){const n=se.defaults.headers.common.Token||vs("X-Token");n&&t.headers.set("Token",n)}if(!t.headers.get("X-Refresh-Token")){const n=se.defaults.headers.common["X-Refresh-Token"]||vs("X-Refresh-Token");n&&t.headers.set("X-Refresh-Token",n)}return t}se.interceptors.request.use(xw,t=>Promise.reject(t));const xp=t=>mw.some(e=>t===e||t.endsWith(e)),yp=(t,e)=>t===fw&&["session","login","another","terminated","kicked"].some(n=>e.includes(n)),yw=async t=>{var i;const e=t.data,n=Number(e==null?void 0:e.code),r=t.config;if(n>0){const a=(r==null?void 0:r.url)||"";if(!xp(a)){const o=((i=e==null?void 0:e.message)==null?void 0:i.toLowerCase())||"";if(yp(n,o))return yn(),new Promise(()=>{});if(n===pp){const l=r;if(l._retried)return yn(),new Promise(()=>{});if(!mr){mr=!0;const c=await gp();return mr=!1,c?(ws(c),l._retried=!0,l.headers.Token=c,se(l)):(ws(null),yn(),new Promise(()=>{}))}return new Promise((c,d)=>{mp(u=>{if(!u){d(e);return}l._retried=!0,l.headers.Token=u,c(se(l))})})}if(fp.includes(n))return yn(),new Promise(()=>{})}throw e}return e},vw=async t=>{var o,l;const e=t,n=(o=e.response)==null?void 0:o.data,r=Number(n==null?void 0:n.code),i=e.config,a=(i==null?void 0:i.url)||"";if(n&&!xp(a)){const c=((l=n==null?void 0:n.message)==null?void 0:l.toLowerCase())||"";if(yp(r,c))return yn(),new Promise(()=>{});if(r===pp&&i){const d=i;if(d._retried)return yn(),new Promise(()=>{});if(!mr){mr=!0;const u=await gp();return mr=!1,u?(ws(u),d._retried=!0,d.headers.Token=u,se(d)):(ws(null),yn(),new Promise(()=>{}))}return new Promise((u,h)=>{mp(p=>{if(!p){h(t);return}d._retried=!0,d.headers.Token=p,u(se(d))})})}if(fp.includes(r))return yn(),new Promise(()=>{})}return Promise.reject(t)};se.interceptors.response.use(yw,vw);const bw=()=>{};var Gc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ww=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=t[n++];e[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(a&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const a=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|o&63)}}return e.join("")},bp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const a=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,d=c?t[i+2]:0,u=a>>2,h=(a&3)<<4|l>>4;let p=(l&15)<<2|d>>6,m=d&63;c||(m=64,o||(p=64)),r.push(n[u],n[h],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(vp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ww(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const a=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,a==null||l==null||d==null||h==null)throw new kw;const p=a<<2|l>>4;if(r.push(p),d!==64){const m=l<<4&240|d>>2;if(r.push(m),h!==64){const x=d<<6&192|h;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class kw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Sw=function(t){const e=vp(t);return bp.encodeByteArray(e,!0)},wp=function(t){return Sw(t).replace(/\./g,"")},kp=function(t){try{return bp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew=()=>jw().__FIREBASE_DEFAULTS__,_w=()=>{if(typeof process>"u"||typeof Gc>"u")return;const t=Gc.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Tw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&kp(t[1]);return e&&JSON.parse(e)},hl=()=>{try{return bw()||Ew()||_w()||Tw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Iw=t=>{var e,n;return(n=(e=hl())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Sp=()=>{var t;return(t=hl())==null?void 0:t.config},jp=t=>{var e;return(e=hl())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Je())}function Cw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ow(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Aw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Pw(){const t=Je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Nw(){try{return typeof indexedDB=="object"}catch{return!1}}function Lw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var a;e(((a=i.error)==null?void 0:a.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w="FirebaseError";class Rn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=$w,Object.setPrototypeOf(this,Rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ti.prototype.create)}}class Ti{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,a=this.errors[e],o=a?Dw(a,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Rn(i,l,r)}}function Dw(t,e){try{let n=0,r="";for(;n<t.length;){const i=t.indexOf("{$",n);if(i===-1){r+=t.substring(n);break}const a=t.indexOf("}",i+2);if(a===-1){r+=t.substring(n);break}const o=t.substring(i+2,a),l=e[o];r+=t.substring(n,i)+(l!=null?String(l):`<${o}?>`),n=a+1}return r}catch{return t}}function Mw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function kr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const a=t[i],o=e[i];if(Zc(a)&&Zc(o)){if(!kr(a,o))return!1}else if(a!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Zc(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Fw(t,e){const n=new Uw(t,e);return n.subscribe.bind(n)}class Uw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Bw(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Da),i.error===void 0&&(i.error=Da),i.complete===void 0&&(i.complete=Da);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Bw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Da(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function zw(t){return(await fetch(t,{credentials:"include"})).ok}class Sr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ep;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ww(e))try{this.getOrInitializeService({instanceIdentifier:Fn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:i});r.resolve(a)}catch{}}}}clearInstance(e=Fn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fn){return this.instances.has(e)}getOptions(e=Fn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[a,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(a);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const a=this.instances.get(r);return a&&e(a,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Vw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Fn){return this.component?this.component.multipleInstances?e:Fn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vw(t){return t===Fn?void 0:t}function Ww(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Hw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const Kw={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},Gw=ue.INFO,Zw={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},Yw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Zw[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _p{constructor(e){this.name=e,this._logLevel=Gw,this._logHandler=Yw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Kw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const Jw=(t,e)=>e.some(n=>t instanceof n);let Yc,Jc;function Xw(){return Yc||(Yc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qw(){return Jc||(Jc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Tp=new WeakMap,Co=new WeakMap,Ip=new WeakMap,Ma=new WeakMap,fl=new WeakMap;function e0(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",a),t.removeEventListener("error",o)},a=()=>{n(bn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",a),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Tp.set(n,t)}).catch(()=>{}),fl.set(e,t),e}function t0(t){if(Co.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",a),t.removeEventListener("error",o),t.removeEventListener("abort",o)},a=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",a),t.addEventListener("error",o),t.addEventListener("abort",o)});Co.set(t,e)}let Oo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Co.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ip.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return bn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function n0(t){Oo=t(Oo)}function r0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Fa(this),e,...n);return Ip.set(r,e.sort?e.sort():[e]),bn(r)}:Qw().includes(t)?function(...e){return t.apply(Fa(this),e),bn(Tp.get(this))}:function(...e){return bn(t.apply(Fa(this),e))}}function i0(t){return typeof t=="function"?r0(t):(t instanceof IDBTransaction&&t0(t),Jw(t,Xw())?new Proxy(t,Oo):t)}function bn(t){if(t instanceof IDBRequest)return e0(t);if(Ma.has(t))return Ma.get(t);const e=i0(t);return e!==t&&(Ma.set(t,e),fl.set(e,t)),e}const Fa=t=>fl.get(t);function s0(t,e,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){const o=indexedDB.open(t,e),l=bn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(bn(o.result),c.oldVersion,c.newVersion,bn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{a&&c.addEventListener("close",()=>a()),i&&c.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const a0=["get","getKey","getAll","getAllKeys","count"],o0=["put","add","delete","clear"],Ua=new Map;function Xc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ua.get(e))return Ua.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=o0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||a0.includes(n)))return;const a=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let d=c.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),i&&c.done]))[0]};return Ua.set(e,a),a}n0(t=>({...t,get:(e,n,r)=>Xc(e,n)||t.get(e,n,r),has:(e,n)=>!!Xc(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(c0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function c0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ao="@firebase/app",Qc="0.16.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt=new _p("@firebase/app"),d0="@firebase/app-compat",u0="@firebase/analytics-compat",h0="@firebase/analytics",p0="@firebase/app-check-compat",f0="@firebase/app-check",m0="@firebase/auth",g0="@firebase/auth-compat",x0="@firebase/database",y0="@firebase/data-connect",v0="@firebase/database-compat",b0="@firebase/functions",w0="@firebase/functions-compat",k0="@firebase/installations",S0="@firebase/installations-compat",j0="@firebase/messaging",E0="@firebase/messaging-compat",_0="@firebase/performance",T0="@firebase/performance-compat",I0="@firebase/remote-config",R0="@firebase/remote-config-compat",C0="@firebase/storage",O0="@firebase/storage-compat",A0="@firebase/firestore",P0="@firebase/ai",N0="@firebase/firestore-compat",L0="firebase",$0="12.19.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po="[DEFAULT]",D0={[Ao]:"fire-core",[d0]:"fire-core-compat",[h0]:"fire-analytics",[u0]:"fire-analytics-compat",[f0]:"fire-app-check",[p0]:"fire-app-check-compat",[m0]:"fire-auth",[g0]:"fire-auth-compat",[x0]:"fire-rtdb",[y0]:"fire-data-connect",[v0]:"fire-rtdb-compat",[b0]:"fire-fn",[w0]:"fire-fn-compat",[k0]:"fire-iid",[S0]:"fire-iid-compat",[j0]:"fire-fcm",[E0]:"fire-fcm-compat",[_0]:"fire-perf",[T0]:"fire-perf-compat",[I0]:"fire-rc",[R0]:"fire-rc-compat",[C0]:"fire-gcs",[O0]:"fire-gcs-compat",[A0]:"fire-fst",[N0]:"fire-fst-compat",[P0]:"fire-vertex","fire-js":"fire-js",[L0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks=new Map,M0=new Map,No=new Map;function ed(t,e){try{t.container.addComponent(e)}catch(n){Jt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function si(t){const e=t.name;if(No.has(e))return Jt.debug(`There were multiple attempts to register component ${e}.`),!1;No.set(e,t);for(const n of ks.values())ed(n,t);for(const n of M0.values())ed(n,t);return!0}function Rp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Rt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qt=new Ti("app","Firebase",F0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Sr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=$0;function Cp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Po,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw qt.create("bad-app-name",{appName:String(i)});if(n||(n=Sp()),!n)throw qt.create("no-options");const a=ks.get(i);if(a)if(kr(n,a.options)){if(kr(r,a.config))return a;throw qt.create("duplicate-app",{appName:i,mismatchedParam:"config",oldValue:JSON.stringify(a.config),newValue:JSON.stringify(r)})}else throw qt.create("duplicate-app",{appName:i,mismatchedParam:"options",oldValue:JSON.stringify(a.options),newValue:JSON.stringify(n)});const o=new qw(i);for(const c of No.values())o.addComponent(c);const l=new U0(n,r,o);return ks.set(i,l),l}function B0(t=Po){const e=ks.get(t);if(!e&&t===Po&&Sp())return Cp();if(!e)throw qt.create("no-app",{appName:t});return e}function gr(t,e,n){let r=D0[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&a&&o.push("and"),a&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Jt.warn(o.join(" "));return}si(new Sr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0="firebase-heartbeat-database",H0=1,ai="firebase-heartbeat-store";let Ba=null;function Op(){return Ba||(Ba=s0(z0,H0,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ai)}catch(n){console.warn(n)}}}}).catch(t=>{throw qt.create("idb-open",{originalErrorMessage:t.message})})),Ba}async function V0(t){try{const n=(await Op()).transaction(ai),r=await n.objectStore(ai).get(Ap(t));return await n.done,r}catch(e){if(e instanceof Rn)Jt.warn(e.message);else{const n=qt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Jt.warn(n.message)}}}async function td(t,e){try{const r=(await Op()).transaction(ai,"readwrite");await r.objectStore(ai).put(e,Ap(t)),await r.done}catch(n){if(n instanceof Rn)Jt.warn(n.message);else{const r=qt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Jt.warn(r.message)}}}function Ap(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W0=1024,q0=30;class K0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Z0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=nd();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(o=>o.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:i}),this._heartbeatsCache.heartbeats.length>q0){const o=Y0(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Jt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=nd(),{heartbeatsToSend:r,unsentEntries:i}=G0(this._heartbeatsCache.heartbeats),a=wp(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(n){return Jt.warn(n),""}}}function nd(){return new Date().toISOString().substring(0,10)}function G0(t,e=W0){const n=[];let r=t.slice();for(const i of t){const a=n.find(o=>o.agent===i.agent);if(a){if(a.dates.push(i.date),rd(n)>e){a.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),rd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Z0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Nw()?Lw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await V0(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return td(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return td(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function rd(t){return wp(JSON.stringify({version:2,heartbeats:t})).length}function Y0(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J0(t){si(new Sr("platform-logger",e=>new l0(e),"PRIVATE")),si(new Sr("heartbeat",e=>new K0(e),"PRIVATE")),gr(Ao,Qc,t),gr(Ao,Qc,"esm2020"),gr("fire-js","")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */J0("");var X0="firebase",Q0="12.19.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gr(X0,Q0,"app");function Pp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const e1=Pp,Np=new Ti("auth","Firebase",Pp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=new _p("@firebase/auth");function ss(t,...e){Ss.logLevel<=ue.WARN&&Ss.warn(`Auth (${Ii}): ${t}`,...e)}function as(t,...e){Ss.logLevel<=ue.ERROR&&Ss.error(`Auth (${Ii}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(t,...e){throw gl(t,...e)}function ot(t,...e){return gl(t,...e)}function ml(t,e,n){const r={...e1(),[e]:n};return new Ti("auth","Firebase",r).create(e,{appName:t.name})}function wn(t){return ml(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function gl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Np.create(t,...e)}function $(t,e,...n){if(!t)throw gl(e,...n)}function Kt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw as(e),new Error(e)}function Qt(t,e){t||Kt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function Lp(){return id()==="http:"||id()==="https:"}function id(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Lp()||Ow()||"connection"in navigator)?navigator.onLine:!0}function n1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,n){this.shortDelay=e,this.longDelay=n,Qt(n>e,"Short delay should be less than long delay!"),this.isMobile=Rw()||Aw()}get(){return t1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(t,e){Qt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Kt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Kt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Kt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],s1=new Ri(3e4,6e4);function Dt(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Et(t,e,n,r,i={}){return Dp(t,i,async()=>{let a={},o={};r&&(e==="GET"?o=r:a={body:JSON.stringify(r)});const l=Or({...o,key:t.config.apiKey}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const d={method:e,headers:c,...a};return Cw()||(d.referrerPolicy="strict-origin-when-cross-origin"),t.emulatorConfig&&pl(t.emulatorConfig.host)&&(d.credentials="include"),$p.fetch()(await Mp(t,t.config.apiHost,n,l),d)})}async function Dp(t,e,n){t._canInitEmulator=!1;const r={...r1,...e};try{const i=new o1(t),a=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await a.json();if("needConfirmation"in o)throw Gr(t,"account-exists-with-different-credential",o);if(a.ok&&!("errorMessage"in o))return o;{const l=a.ok?o.errorMessage:o.error.message,[c,d]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Gr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Gr(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw ml(t,u,d);Xt(t,u)}}catch(i){if(i instanceof Rn)throw i;Xt(t,"network-request-failed",{message:String(i)})}}async function ea(t,e,n,r,i={}){const a=await Et(t,e,n,r,i);return"mfaPendingCredential"in a&&Xt(t,"multi-factor-auth-required",{_serverResponse:a}),a}async function Mp(t,e,n,r){const i=`${e}${n}?${r}`,a=t,o=a.config.emulator?xl(t.config,i):`${t.config.apiScheme}://${i}`;return i1.includes(n)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(o).toString():o}function a1(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class o1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ot(this.auth,"network-request-failed")),s1.get())})}}function Gr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ot(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(t){return t!==void 0&&t.getResponse!==void 0}function ad(t){return t!==void 0&&t.enterprise!==void 0}class Fp{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return a1(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l1(t){return(await Et(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Up(t,e){return Et(t,"GET","/v2/recaptchaConfig",Dt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c1(t,e){return Et(t,"POST","/v1/accounts:delete",e)}async function js(t,e){return Et(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function d1(t,e=!1){const n=tr(t),r=await n.getIdToken(e),i=yl(r);$(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,o=a==null?void 0:a.sign_in_provider;return{claims:i,token:r,authTime:Qr(za(i.auth_time)),issuedAtTime:Qr(za(i.iat)),expirationTime:Qr(za(i.exp)),signInProvider:o||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function za(t){return Number(t)*1e3}function yl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return as("JWT malformed, contained fewer than 3 sections"),null;try{const i=kp(n);return i?JSON.parse(i):(as("Failed to decode base64 JWT payload"),null)}catch(i){return as("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function od(t){const e=yl(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Rn&&u1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function u1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qr(this.lastLoginAt),this.creationTime=Qr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Es(t){var h;const e=t.auth,n=await t.getIdToken(),r=await oi(t,js(e,{idToken:n}));$(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const a=(h=i.providerUserInfo)!=null&&h.length?Bp(i.providerUserInfo):[],o=f1(t.providerData,a),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),d=l?c:!1,u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new $o(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,u)}async function p1(t){const e=tr(t);await Es(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function f1(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Bp(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m1(t,e){const n=await Dp(t,{},async()=>{const r=Or({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:a}=t.config,o=await Mp(t,i,"/v1/token",`key=${a}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&pl(t.emulatorConfig.host)&&(c.credentials="include"),$p.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function g1(t,e){return Et(t,"POST","/v2/accounts:revokeToken",Dt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):od(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){$(e.length!==0,"internal-error");const n=od(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:a}=await m1(e,n);this.updateTokensAndExpiration(r,i,Number(a))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:a}=n,o=new xr;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&($(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),a&&($(typeof a=="number","internal-error",{appName:e}),o.expirationTime=a),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xr,this.toJSON())}_performRefresh(){return Kt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class bt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new h1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new $o(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await oi(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return d1(this,e)}reload(){return p1(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new bt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Es(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Rt(this.auth.app))return Promise.reject(wn(this.auth));const e=await this.getIdToken();return await oi(this,c1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,a=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,c=n._redirectEventId??void 0,d=n.createdAt??void 0,u=n.lastLoginAt??void 0,{uid:h,emailVerified:p,isAnonymous:m,providerData:x,stsTokenManager:y}=n;$(h&&y,e,"internal-error");const b=xr.fromJSON(this.name,y);$(typeof h=="string",e,"internal-error"),cn(r,e.name),cn(i,e.name),$(typeof p=="boolean",e,"internal-error"),$(typeof m=="boolean",e,"internal-error"),cn(a,e.name),cn(o,e.name),cn(l,e.name),cn(c,e.name),cn(d,e.name),cn(u,e.name);const _=new bt({uid:h,auth:e,email:i,emailVerified:p,displayName:r,isAnonymous:m,photoURL:o,phoneNumber:a,tenantId:l,stsTokenManager:b,createdAt:d,lastLoginAt:u});return x&&Array.isArray(x)&&(_.providerData=x.map(j=>({...j}))),c&&(_._redirectEventId=c),_}static async _fromIdTokenResponse(e,n,r=!1){const i=new xr;i.updateFromServerResponse(n);const a=new bt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Es(a),a}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];$(i.localId!==void 0,"internal-error");const a=i.providerUserInfo!==void 0?Bp(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(a!=null&&a.length),l=new xr;l.updateFromIdToken(r);const c=new bt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new $o(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(a!=null&&a.length)};return Object.assign(c,d),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld=new Map;function Gt(t){Qt(t instanceof Function,"Expected a class definition");let e=ld.get(t);return e?(Qt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ld.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}zp.type="NONE";const cd=zp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(t,e,n){return`firebase:${t}:${e}:${n}`}class qn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:a}=this.auth;this.fullUserKey=os(this.userKey,i.apiKey,a),this.fullPersistenceKey=os("persistence",i.apiKey,a),this.boundEventHandler=n._onStorageEvent.bind(n);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await js(this.auth,{idToken:e}).catch(()=>{});return n?bt._fromGetAccountInfoResponse(this.auth,n,e):null}return bt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(e,n,r="authUser"){if(!n.length)return new qn(Gt(cd),e,r);const i=(await Promise.all(n.map(async d=>{try{if(await d._isAvailable())return d}catch{return}}))).filter(d=>d);let a=i[0]||Gt(cd);const o=os(r,e.config.apiKey,e.name);let l=null;for(const d of n)try{const u=await d._get(o);if(u){let h;if(typeof u=="string"){const p=await js(e,{idToken:u}).catch(()=>{});if(!p)break;h=await bt._fromGetAccountInfoResponse(e,p,u)}else h=bt._fromJSON(e,u);d!==a&&(l=h),a=d;break}}catch{}const c=i.filter(d=>d._shouldAllowMigration);return!a._shouldAllowMigration||!c.length?new qn(a,e,r):(a=c[0],l&&await a._set(o,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==a)try{await d._remove(o)}catch{}})),new qn(a,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Hp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Gp(e))return"Blackberry";if(Zp(e))return"Webos";if(Vp(e))return"Safari";if((e.includes("chrome/")||Wp(e))&&!e.includes("edge/"))return"Chrome";if(Kp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Hp(t=Je()){return/firefox\//i.test(t)}function Vp(t=Je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Wp(t=Je()){return/crios\//i.test(t)}function qp(t=Je()){return/iemobile/i.test(t)}function Kp(t=Je()){return/android/i.test(t)}function Gp(t=Je()){return/blackberry/i.test(t)}function Zp(t=Je()){return/webos/i.test(t)}function vl(t=Je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function x1(t=Je()){var e;return vl(t)&&!!((e=window.navigator)!=null&&e.standalone)}function y1(){return Pw()&&document.documentMode===10}function Yp(t=Je()){return vl(t)||Kp(t)||Zp(t)||Gp(t)||/windows phone/i.test(t)||qp(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jp(t,e=[]){let n;switch(t){case"Browser":n=dd(Je());break;case"Worker":n=`${dd(Je())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ii}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=a=>new Promise((o,l)=>{try{const c=e(a);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b1(t,e={}){return Et(t,"GET","/v2/passwordPolicy",Dt(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1=6;class k1{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??w1,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ud(this),this.idTokenSubscription=new ud(this),this.beforeStateQueue=new v1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Np,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Gt(n)),this._initializationPromise=this.queue(async()=>{var r,i,a;if(!this._deleted){try{this.persistenceManager=await qn.create(this,e)}catch(o){ss(`Failed to initialize persistence: ${o}`),this.persistenceManager=await qn.create(this,[])}finally{(r=this._resolvePersistenceManagerAvailable)==null||r.call(this)}if(!this._deleted){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(n)}catch(o){ss(`Failed to initialize current user: ${o}`),await this.directlySetCurrentUser(null).catch(()=>{})}this.lastNotifiedUid=((a=this.currentUser)==null?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await js(this,{idToken:e}),r=await bt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var a;if(Rt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(a=this.redirectUser)==null?void 0:a._redirectEventId,l=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Es(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=n1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Rt(this.app))return Promise.reject(wn(this));const n=e?tr(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Rt(this.app)?Promise.reject(wn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Rt(this.app)?Promise.reject(wn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Gt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await b1(this),n=new k1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ti("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await g1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Gt(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await qn.create(this,[Gt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const a=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if($(l,this,"internal-error"),l.then(()=>{o||a(this.currentUser)}).catch(c=>{if(!o)if(typeof n!="function"&&n.error)n.error(c);else if(r)r(c);else throw c}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){if(this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,this.persistenceManager)try{e?await this.persistenceManager.setCurrentUser(e):await this.persistenceManager.removeCurrentUser()}catch(n){const r=(n==null?void 0:n.message)||String(n),i=ml(this,"internal-error",`An internal AuthError has occurred: ${r}`);throw i.customData={originalError:n},i}}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Jp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Rt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&ss(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Cn(t){return tr(t)}class ud{constructor(e){this.auth=e,this.observer=null,this.addObserver=Fw(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ci={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function j1(t){Ci=t}function bl(t){return Ci.loadJS(t)}function E1(){return Ci.recaptchaV2Script}function _1(){return Ci.recaptchaEnterpriseScript}function T1(){return Ci.gapiScript}function Xp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I1=500,R1=6e4,zi=1e12;class C1{constructor(e){this.auth=e,this.counter=zi,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new P1(e,this.auth.name,n||{})),this.counter++,r}reset(e){var r;const n=e||zi;(r=this._widgets.get(n))==null||r.delete(),this._widgets.delete(n)}getResponse(e){var r;const n=e||zi;return((r=this._widgets.get(n))==null?void 0:r.getResponse())||""}async execute(e){var r;const n=e||zi;return(r=this._widgets.get(n))==null||r.execute(),""}}class O1{constructor(){this.enterprise=new A1}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class A1{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class P1{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;$(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=N1(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},R1)},I1))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function N1(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L1="recaptcha-enterprise",ei="NO_RECAPTCHA",hd="onFirebaseAuthREInstanceReady";class Wt{constructor(e){this.type=L1,this.auth=Cn(e)}async verify(e="verify",n=!1){async function r(a){if(!n){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(o,l)=>{Up(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new Fp(c);return a.tenantId==null?a._agentRecaptchaConfig=d:a._tenantRecaptchaConfigs[a.tenantId]=d,o(d.siteKey)}}).catch(c=>{l(c)})})}function i(a,o,l){const c=window.grecaptcha;ad(c)?c.enterprise.ready(()=>{c.enterprise.execute(a,{action:e}).then(d=>{o(d)}).catch(()=>{o(ei)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new O1().execute("siteKey",{action:"verify"}):new Promise((a,o)=>{r(this.auth).then(async l=>{if(!n&&ad(window.grecaptcha)&&Wt.scriptInjectionDeferred)await Wt.scriptInjectionDeferred.promise,i(l,a,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=_1();c.length!==0&&(c+=l+`&onload=${hd}`),Wt.scriptInjectionDeferred=new Ep,window[hd]=()=>{var d;(d=Wt.scriptInjectionDeferred)==null||d.resolve()},bl(c).then(()=>{var d;return(d=Wt.scriptInjectionDeferred)==null?void 0:d.promise}).then(()=>{i(l,a,o)}).catch(d=>{o(d)})}}).catch(l=>{o(l)})})}}Wt.scriptInjectionDeferred=null;async function Ha(t,e,n,r=!1,i=!1){const a=new Wt(t);let o;if(i)o=ei;else try{o=await a.verify(n)}catch{o=await a.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,d=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Va(t,e,n,r,i){var a;if((a=t._getRecaptchaConfig())!=null&&a.isProviderEnabled("PHONE_PROVIDER")){const o=await Ha(t,e,n);return r(t,o).catch(async l=>{var c;if(((c=t._getRecaptchaConfig())==null?void 0:c.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const d=await Ha(t,e,n,!1,!0);return r(t,d)}return Promise.reject(l)})}else{const o=await Ha(t,e,n,!1,!0);return r(t,o)}}async function $1(t){const e=Cn(t),n=await Up(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new Fp(n);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new Wt(e).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D1(t,e){const n=Rp(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),a=n.getOptions();if(kr(a,e??{}))return i;Xt(i,"already-initialized")}return n.initialize({options:e})}function M1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Gt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function F1(t,e,n){const r=Cn(t);$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,a=Qp(e),{host:o,port:l}=U1(e),c=l===null?"":`:${l}`,d={url:`${a}//${o}${c}/`},u=Object.freeze({host:o,port:l,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){$(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),$(kr(d,r.config.emulator)&&kr(u,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,pl(o)?zw(`${a}//${o}${c}`):B1()}function Qp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function U1(t){const e=Qp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const a=i[1];return{host:a,port:pd(r.substr(a.length+1))}}else{const[a,o]=r.split(":");return{host:a,port:pd(o)}}}function pd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function B1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Kt("not implemented")}_getIdTokenResponse(e){return Kt("not implemented")}_linkToIdToken(e,n){return Kt("not implemented")}_getReauthenticationResolver(e){return Kt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yr(t,e){return ea(t,"POST","/v1/accounts:signInWithIdp",Dt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z1="http://localhost";class Xn extends wl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Xn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Xt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...a}=n;if(!r||!i)return null;const o=new Xn(r,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return yr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,yr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,yr(e,n)}buildRequest(){const e={requestUri:z1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Or(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fd(t,e){return Et(t,"POST","/v1/accounts:sendVerificationCode",Dt(t,e))}async function H1(t,e){return ea(t,"POST","/v1/accounts:signInWithPhoneNumber",Dt(t,e))}async function V1(t,e){const n=await ea(t,"POST","/v1/accounts:signInWithPhoneNumber",Dt(t,e));if(n.temporaryProof)throw Gr(t,"account-exists-with-different-credential",n);return n}const W1={USER_NOT_FOUND:"user-not-found"};async function q1(t,e){const n={...e,operation:"REAUTH"};return ea(t,"POST","/v1/accounts:signInWithPhoneNumber",Dt(t,n),W1)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends wl{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new ti({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new ti({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return H1(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return V1(e,{idToken:n,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return q1(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:a}=e;return!r&&!n&&!i&&!a?null:new ti({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi extends ef{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends Oi{constructor(){super("facebook.com")}static credential(e){return Xn._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pn.credential(e.oauthAccessToken)}catch{return null}}}pn.FACEBOOK_SIGN_IN_METHOD="facebook.com";pn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends Oi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Xn._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return fn.credential(n,r)}catch{return null}}}fn.GOOGLE_SIGN_IN_METHOD="google.com";fn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends Oi{constructor(){super("github.com")}static credential(e){return Xn._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mn.credential(e.oauthAccessToken)}catch{return null}}}mn.GITHUB_SIGN_IN_METHOD="github.com";mn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends Oi{constructor(){super("twitter.com")}static credential(e,n){return Xn._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return gn.credential(n,r)}catch{return null}}}gn.TWITTER_SIGN_IN_METHOD="twitter.com";gn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const a=await bt._fromIdTokenResponse(e,r,i),o=md(r);return new jr({user:a,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=md(r);return new jr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function md(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s extends Rn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,_s.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new _s(e,n,r,i)}}function tf(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?_s._fromErrorAndOperation(t,a,e,r):a})}async function K1(t,e,n=!1){const r=await oi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return jr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G1(t,e,n=!1){const{auth:r}=t;if(Rt(r.app))return Promise.reject(wn(r));const i="reauthenticate";try{const a=await oi(t,tf(r,i,e,t),n);$(a.idToken,r,"internal-error");const o=yl(a.idToken);$(o,r,"internal-error");const{sub:l}=o;return $(t.uid===l,r,"user-mismatch"),jr._forOperation(t,i,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Xt(r,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nf(t,e,n=!1){if(Rt(t.app))return Promise.reject(wn(t));const r="signIn",i=await tf(t,r,e),a=await jr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(a.user),a}async function Z1(t,e){return nf(Cn(t),e)}function Y1(t,e,n,r){return tr(t).onIdTokenChanged(e,n,r)}function J1(t,e,n){return tr(t).beforeAuthStateChanged(e,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(t,e){return Et(t,"POST","/v2/accounts/mfaEnrollment:start",Dt(t,e))}const Ts="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ts,"1"),this.storage.removeItem(Ts),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1=1e3,Q1=10;class sf extends rf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Yp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},a=this.storage.getItem(r);y1()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Q1):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},X1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}sf.type="LOCAL";const ek=sf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af extends rf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}af.type="SESSION";const of=af;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ta(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:a}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async d=>d(n.origin,a)),c=await tk(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ta.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,o;return new Promise((l,c)=>{const d=kl("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const p=h;if(p.data.eventId===d)switch(p.data.status){case"ack":clearTimeout(u),a=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),l(p.data.response);break;default:clearTimeout(u),clearTimeout(a),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(){return window}function rk(t){Ae().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(){return typeof Ae().WorkerGlobalScope<"u"&&typeof Ae().importScripts=="function"}async function ik(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function ak(){return Sl()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf="firebaseLocalStorageDb",ok=1,Is="firebaseLocalStorage",cf="fbase_key";class Ai{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function na(t,e){return t.transaction([Is],e?"readwrite":"readonly").objectStore(Is)}function lk(){const t=indexedDB.deleteDatabase(lf);return new Ai(t).toPromise()}function df(){const t=indexedDB.open(lf,ok);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Is,{keyPath:cf})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Is)?e(r):(r.close(),await lk(),e(await df()))})})}async function xd(t,e,n){const r=na(t,!0).put({[cf]:e,value:n});return new Ai(r).toPromise()}async function ck(t,e){const n=na(t,!1).get(e),r=await new Ai(n).toPromise();return r===void 0?null:r.value}function yd(t,e){const n=na(t,!0).delete(e);return new Ai(n).toPromise()}const dk=800,uk=3;class uf{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=df(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>uk)throw r;if(this.dbPromise){const i=this.dbPromise;this.dbPromise=null;try{(await i).close()}catch{}}}}async initializeServiceWorkerMessaging(){return Sl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ta._getInstance(ak()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await ik(),!this.activeServiceWorker)return;this.sender=new nk(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await xd(e,Ts,"1"),await yd(e,Ts)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>xd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ck(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>yd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{const e=await this._withRetries(i=>{const a=na(i,!1).getAll();return new Ai(a).toPromise()});if(this.isClosing)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:a}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}catch(e){return this.isClosing||ss(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}uf.type="LOCAL";const hk=uf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(t,e){return Et(t,"POST","/v2/accounts/mfaSignIn:start",Dt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa=Xp("rcb"),pk=new Ri(3e4,6e4);class fk{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=Ae().grecaptcha)!=null&&e.render)}load(e,n=""){return $(mk(n),e,"argument-error"),this.shouldResolveImmediately(n)&&sd(Ae().grecaptcha)?Promise.resolve(Ae().grecaptcha):new Promise((r,i)=>{const a=Ae().setTimeout(()=>{i(ot(e,"network-request-failed"))},pk.get());Ae()[Wa]=()=>{Ae().clearTimeout(a),delete Ae()[Wa];const l=Ae().grecaptcha;if(!l||!sd(l)){i(ot(e,"internal-error"));return}const c=l.render;l.render=(d,u)=>{const h=c(d,u);return this.counter++,h},this.hostLanguage=n,r(l)};const o=`${E1()}?${Or({onload:Wa,render:"explicit",hl:n})}`;bl(o).catch(()=>{clearTimeout(a),i(ot(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!((n=Ae().grecaptcha)!=null&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function mk(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class gk{async load(e){return new C1(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni="recaptcha",xk={theme:"light",type:"image"};class yk{constructor(e,n,r={...xk}){this.parameters=r,this.type=ni,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Cn(e),this.isInvisible=this.parameters.size==="invisible",$(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;$(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new gk:new fk,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const a=o=>{o&&(this.tokenChangeListeners.delete(a),i(o))};this.tokenChangeListeners.add(a),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){$(!this.parameters.sitekey,this.auth,"argument-error"),$(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),$(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Ae()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){$(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){$(Lp()&&!Sl(),this.auth,"internal-error"),await vk(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await l1(this.auth);$(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return $(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function vk(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bk{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=ti._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function wk(t,e,n){if(Rt(t.app))return Promise.reject(wn(t));const r=Cn(t),i=await kk(r,e,tr(n));return new bk(i,a=>Z1(r,a))}async function kk(t,e,n){var r;if(!t._getRecaptchaConfig())try{await $1(t)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const a=i.session;if("phoneNumber"in i){$(a.type==="enroll",t,"internal-error");const o={idToken:a.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Va(t,o,"mfaSmsEnrollment",async(u,h)=>{if(h.phoneEnrollmentInfo.captchaResponse===ei){$((n==null?void 0:n.type)===ni,u,"argument-error");const p=await qa(u,h,n);return gd(u,p)}return gd(u,h)},"PHONE_PROVIDER").catch(u=>Promise.reject(u))).phoneSessionInfo.sessionInfo}else{$(a.type==="signin",t,"internal-error");const o=((r=i.multiFactorHint)==null?void 0:r.uid)||i.multiFactorUid;$(o,t,"missing-multi-factor-info");const l={mfaPendingCredential:a.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Va(t,l,"mfaSmsSignIn",async(h,p)=>{if(p.phoneSignInInfo.captchaResponse===ei){$((n==null?void 0:n.type)===ni,h,"argument-error");const m=await qa(h,p,n);return vd(h,m)}return vd(h,p)},"PHONE_PROVIDER").catch(h=>Promise.reject(h))).phoneResponseInfo.sessionInfo}}else{const a={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Va(t,a,"sendVerificationCode",async(d,u)=>{if(u.captchaResponse===ei){$((n==null?void 0:n.type)===ni,d,"argument-error");const h=await qa(d,u,n);return fd(d,h)}return fd(d,u)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).sessionInfo}}finally{n==null||n._reset()}}async function qa(t,e,n){$(n.type===ni,t,"argument-error");const r=await n.verify();$(typeof r=="string",t,"argument-error");const i={...e};if("phoneEnrollmentInfo"in i){const a=i.phoneEnrollmentInfo.phoneNumber,o=i.phoneEnrollmentInfo.captchaResponse,l=i.phoneEnrollmentInfo.clientType,c=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:a,recaptchaToken:r,captchaResponse:o,clientType:l,recaptchaVersion:c}}),i}else if("phoneSignInInfo"in i){const a=i.phoneSignInInfo.captchaResponse,o=i.phoneSignInInfo.clientType,l=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:a,clientType:o,recaptchaVersion:l}}),i}else return Object.assign(i,{recaptchaToken:r}),i}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sk(t,e){return e?Gt(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl extends wl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return yr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return yr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return yr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function jk(t){return nf(t.auth,new jl(t),t.bypassAuthState)}function Ek(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),G1(n,new jl(t),t.bypassAuthState)}async function _k(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),K1(n,new jl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e,n,r,i,a=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:a,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jk;case"linkViaPopup":case"linkViaRedirect":return _k;case"reauthViaPopup":case"reauthViaRedirect":return Ek;default:Xt(this.auth,"internal-error")}}resolve(e){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk=new Ri(2e3,1e4);class ur extends hf{constructor(e,n,r,i,a){super(e,n,i,a),this.provider=r,this.authWindow=null,this.pollId=null,ur.currentPopupAction&&ur.currentPopupAction.cancel(),ur.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){Qt(this.filter.length===1,"Popup operations only handle one event");const e=kl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ur.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ot(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Tk.get())};e()}}ur.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ik="pendingRedirect",ls=new Map;class Rk extends hf{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ls.get(this.auth._key());if(!e){try{const r=await Ck(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ls.set(this.auth._key(),e)}return this.bypassAuthState||ls.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ck(t,e){const n=Pk(e),r=Ak(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Ok(t,e){ls.set(t._key(),e)}function Ak(t){return Gt(t._redirectPersistence)}function Pk(t){return os(Ik,t.config.apiKey,t.name)}async function Nk(t,e,n=!1){if(Rt(t.app))return Promise.reject(wn(t));const r=Cn(t),i=Sk(r,e),o=await new Rk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk=600*1e3;class $k{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Dk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!pf(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(ot(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Lk&&this.cachedEventUids.clear(),this.cachedEventUids.has(bd(e))}saveEventToCache(e){this.cachedEventUids.add(bd(e)),this.lastProcessedEventTime=Date.now()}}function bd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function pf({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Dk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pf(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mk(t,e={}){return Et(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Uk=/^https?/;async function Bk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Mk(t);for(const n of e)try{if(zk(n))return}catch{}Xt(t,"unauthorized-domain")}function zk(t){const e=Lo(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Uk.test(n))return!1;if(Fk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk=new Ri(3e4,6e4);function wd(){const t=Ae().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Vk(t){return new Promise((e,n)=>{var i,a,o;function r(){wd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wd(),n(ot(t,"network-request-failed"))},timeout:Hk.get()})}if((a=(i=Ae().gapi)==null?void 0:i.iframes)!=null&&a.Iframe)e(gapi.iframes.getContext());else if((o=Ae().gapi)!=null&&o.load)r();else{const l=Xp("iframefcb");return Ae()[l]=()=>{gapi.load?r():n(ot(t,"network-request-failed"))},bl(`${T1()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw cs=null,e})}let cs=null;function Wk(t){return cs=cs||Vk(t),cs}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk=new Ri(5e3,15e3),Kk="__/auth/iframe",Gk="emulator/auth/iframe",Zk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Yk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Jk(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?xl(e,Gk):`https://${t.config.authDomain}/${Kk}`,r={apiKey:e.apiKey,appName:t.name,v:Ii},i=Yk.get(t.config.apiHost);i&&(r.eid=i);const a=t._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${Or(r).slice(1)}`}async function Xk(t){const e=await Wk(t),n=Ae().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:Jk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Zk,dontclear:!0},r=>new Promise(async(i,a)=>{await r.restyle({setHideOnLeave:!1});const o=ot(t,"network-request-failed"),l=Ae().setTimeout(()=>{a(o)},qk.get());function c(){Ae().clearTimeout(l),i(r)}r.ping(c).then(c,()=>{a(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},eS=500,tS=600,nS="_blank",rS="http://localhost";class kd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function iS(t,e,n,r=eS,i=tS){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c={...Qk,width:r.toString(),height:i.toString(),top:a,left:o},d=Je().toLowerCase();n&&(l=Wp(d)?nS:n),Hp(d)&&(e=e||rS,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[m,x])=>`${p}${m}=${x},`,"");if(x1(d)&&l!=="_self")return sS(e||"",l),new kd(null);const h=window.open(e||"",l,u);$(h,t,"popup-blocked");try{h.focus()}catch{}return new kd(h)}function sS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS="__/auth/handler",oS="emulator/auth/handler",lS=encodeURIComponent("fac");async function Sd(t,e,n,r,i,a){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ii,eventId:i};if(e instanceof ef){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Mw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof Oi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const u of Object.keys(l))l[u]===void 0&&delete l[u];const c=await t._getAppCheckToken(),d=c?`#${lS}=${encodeURIComponent(c)}`:"";return`${cS(t)}?${Or(l).slice(1)}${d}`}function cS({config:t}){return t.emulator?xl(t,oS):`https://${t.authDomain}/${aS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka="webStorageSupport";class dS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=of,this._completeRedirectFn=Nk,this._overrideRedirectResult=Ok}async _openPopup(e,n,r,i){var o;Qt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await Sd(e,n,r,Lo(),i);return iS(e,a,kl())}async _openRedirect(e,n,r,i){await this._originValidation(e);const a=await Sd(e,n,r,Lo(),i);return rk(a),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:a}=this.eventManagers[n];return i?Promise.resolve(i):(Qt(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Xk(e),r=new $k(e);return n.register("authEvent",i=>($(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ka,{type:Ka},i=>{var o;const a=(o=i==null?void 0:i[0])==null?void 0:o[Ka];a!==void 0&&n(!!a),Xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Bk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Yp()||Vp()||vl()}}const uS=dS;var jd="@firebase/auth",Ed="1.13.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fS(t){si(new Sr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jp(t)},d=new S1(r,i,a,c);return M1(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),si(new Sr("auth-internal",e=>{const n=Cn(e.getProvider("auth").getImmediate());return(r=>new hS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),gr(jd,Ed,pS(t)),gr(jd,Ed,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS=300,gS=jp("authIdTokenMaxAge")||mS;let _d=null;const xS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>gS)return;const i=n==null?void 0:n.token;_d!==i&&(_d=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function yS(t=B0()){const e=Rp(t,"auth");if(e.isInitialized())return e.getImmediate();const n=D1(t,{popupRedirectResolver:uS,persistence:[hk,ek,of]}),r=jp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const o=xS(a.toString());J1(n,o,()=>o(n.currentUser)),Y1(n,l=>o(l))}}const i=Iw("auth");return i&&F1(n,`http://${i}`),n}function vS(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}j1({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const a=ot("internal-error");a.customData=i,n(a)},r.type="text/javascript",r.charset="UTF-8",vS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fS("Browser");const bS={apiKey:ow,authDomain:lw,projectId:cw,storageBucket:dw,messagingSenderId:uw,appId:hw,measurementId:pw},wS=Cp(bS),Rs=yS(wS),kS=()=>typeof window>"u"?!1:["localhost","127.0.0.1","[::1]"].includes(window.location.hostname);kS()&&(Rs.settings.appVerificationDisabledForTesting=!0);function SS(t){return t.includes(me.LIST_ALL)?"all":t.includes(me.LIST_SUB)?"sub":"own"}const jS="/api/company/orders/claim";async function ES(t){try{return(await se.post(jS,{phone:t})).data.claimedOrderIds??[]}catch(e){return console.error("[portal auth] claimOrders failed",e),[]}}const ft=Ly()(My(t=>({token:null,refresh:null,uid:null,name:null,companyUid:null,permissionList:[],login:e=>{var r,i;t({token:e.token,refresh:e.refresh,uid:e.uid,name:e.name,companyUid:e.companyUid??null,permissionList:e.permission.length>0?e.permission:Mg()});const n=((r=e.verifiedPhone)==null?void 0:r.trim())||((i=Rs.currentUser)==null?void 0:i.phoneNumber)||"";n&&ES(n)},logout:()=>t({token:null,refresh:null,uid:null,name:null,companyUid:null,permissionList:[]})}),{name:`${aw}:portal-auth`,onRehydrateStorage:()=>t=>{t!=null&&t.token&&!vs("X-Token")&&t.logout()}})),ra=()=>ft(t=>t.token!==null),Vt=t=>ft(e=>e.permissionList.includes(t)),ff=()=>ft(t=>SS(t.permissionList)),mf=B`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background: var(--v29-primary-fill);
  color: var(--v29-on-primary);
  font-family: ${Ue};
  font-style: italic;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-1px);
  }
  &:focus-visible {
    outline: 2px solid var(--v29-primary);
    outline-offset: 2px;
  }
  @media (max-width: 480px) {
    min-height: 44px;
  }
`,_S=f(De)`
  ${mf}
`,gf=f.div`
  position: relative;
`,TS=f.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid var(--v29-line);
  background: var(--v29-primary);
  color: var(--v29-on-primary);
  font-family: ${E};
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: box-shadow 0.2s ease;
  &:hover {
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--v29-primary) 20%, transparent);
  }
  &:focus-visible {
    outline: 2px solid var(--v29-primary);
    outline-offset: 2px;
  }
  @media (max-width: 480px) {
    width: 44px;
    height: 44px;
  }
`,xf=f(Go.div)`
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  min-width: 220px;
  padding: 8px;
  border-radius: 12px;
  background: var(--v29-card);
  border: 1px solid var(--v29-line-soft);
  box-shadow: var(--v29-popover-shadow);
  font-family: ${E};
`,IS=f.div`
  padding: 8px 10px 10px;
  border-bottom: 1px solid var(--v29-line-soft);
  margin-bottom: 6px;
  font-size: 13px;
  font-weight: 600;
  color: var(--v29-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ia=`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 9px 10px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: var(--v29-text);
  font-size: 14px;
  text-align: left;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background: color-mix(in srgb, var(--v29-primary) 8%, transparent);
  }
  &:focus-visible {
    outline: 2px solid var(--v29-primary);
    outline-offset: -2px;
  }
`,RS=f(De)`
  ${ia}
  font-family: ${E};
`,CS=f.button`
  ${ia}
  font-family: ${E};
`,OS=f.button`
  ${mf}
  svg {
    width: 12px;
    height: 12px;
    transition: transform 0.2s ease;
  }
  &[aria-expanded='true'] svg {
    transform: rotate(180deg);
  }
`,AS=f.a`
  display: inline-flex;
  align-items: center;
  min-height: 36px;
  padding: 0 4px;
  font-family: ${E};
  font-size: 14px;
  font-weight: 600;
  color: var(--v29-text);
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &:focus-visible {
    outline: 2px solid var(--v29-primary);
    outline-offset: 2px;
    border-radius: 4px;
  }
  @media (max-width: 480px) {
    min-height: 44px;
  }
`,PS=f(De)`
  ${ia}
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  font-family: ${E};
`,NS=f.a`
  ${ia}
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  font-family: ${E};
`,LS=f.span`
  font-weight: 600;
`,$S=f.span`
  font-size: 12px;
  /* the full text colour: the muted grey drops below AA on the hover tint */
  color: var(--v29-text);
  opacity: 0.85;
`,DS=({destinations:t})=>{const{t:e}=G(),[n,r]=S.useState(!1),i=S.useRef(null),a=S.useRef(null);if(S.useEffect(()=>{if(!n)return;const o=c=>{var d;(d=i.current)!=null&&d.contains(c.target)||r(!1)},l=c=>{var d;c.key==="Escape"&&(r(!1),(d=a.current)==null||d.focus())};return document.addEventListener("pointerdown",o),document.addEventListener("keydown",l),()=>{document.removeEventListener("pointerdown",o),document.removeEventListener("keydown",l)}},[n]),t.length===0)return null;if(t.length===1){const[o]=t;return o.external?s.jsx(AS,{href:o.href,"data-login-role":o.role,children:e(`common:loginRole.${o.role}.login`)}):s.jsx(_S,{to:o.href,"data-login-role":o.role,children:e("common:signIn")})}return s.jsxs(gf,{ref:i,onBlur:o=>{var l;n&&!((l=i.current)!=null&&l.contains(o.relatedTarget))&&r(!1)},children:[s.jsxs(OS,{ref:a,type:"button","aria-expanded":n,"aria-controls":"nav-signin-destinations",onClick:()=>r(o=>!o),children:[e("common:signIn"),s.jsx("svg",{viewBox:"0 0 12 12","aria-hidden":"true",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:s.jsx("path",{d:"M2.5 4.5 6 8l3.5-3.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),s.jsx(el,{children:n&&s.jsx(xf,{id:"nav-signin-destinations",initial:{opacity:0,y:-6},animate:{opacity:1,y:0},exit:{opacity:0,y:-6},transition:{duration:.18,ease:Vs},children:t.map(o=>{const l=s.jsxs(s.Fragment,{children:[s.jsx(LS,{children:e(`common:loginRole.${o.role}.label`)}),s.jsx($S,{children:e(`common:loginRole.${o.role}.hint`)})]});return o.external?s.jsx(NS,{href:o.href,"data-login-role":o.role,children:l},o.role):s.jsx(PS,{to:o.href,"data-login-role":o.role,onClick:()=>r(!1),children:l},o.role)})})})]})},MS=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px 10px;
  font-size: 14px;
  color: var(--v29-muted);
`,FS=f.button`
  border: none;
  background: transparent;
  padding: 2px 6px;
  border-radius: 6px;
  font-family: ${E};
  font-size: 13px;
  font-weight: ${t=>t.$active?700:400};
  color: ${t=>t.$active?"var(--v29-primary)":"var(--v29-muted)"};
  cursor: pointer;
  &:hover {
    color: var(--v29-primary);
  }
  &:focus-visible {
    outline: 2px solid var(--v29-primary);
    outline-offset: 1px;
  }
`,yf=()=>{const{t,i18n:e}=G(),n=ft(x=>x.token),r=ft(x=>x.name),[i,a]=S.useState(!1),o=Vt(me.LIST),l=S.useRef(null),c=Ir(),d=rl();if(S.useEffect(()=>{if(!i)return;const x=b=>{var _;(_=l.current)!=null&&_.contains(b.target)||a(!1)},y=b=>{b.key==="Escape"&&a(!1)};return document.addEventListener("pointerdown",x),document.addEventListener("keydown",y),()=>{document.removeEventListener("pointerdown",x),document.removeEventListener("keydown",y)}},[i]),!n)return s.jsx(DS,{destinations:d});const u=(r??"?").trim().charAt(0).toUpperCase()||"?",h=e.language,p=wo.length>1,m=x=>{Oy(x)};return s.jsxs(gf,{ref:l,children:[s.jsx(TS,{"aria-label":t("common:accountMenu"),"aria-expanded":i,onClick:()=>a(x=>!x),children:u}),s.jsx(el,{children:i&&s.jsxs(xf,{initial:{opacity:0,y:-6},animate:{opacity:1,y:0},exit:{opacity:0,y:-6},transition:{duration:.18,ease:Vs},children:[s.jsx(IS,{children:r}),o&&s.jsx(RS,{to:"/portal/orders",onClick:()=>a(!1),children:t("common:orders")}),p&&s.jsxs(MS,{children:[s.jsx("span",{children:t("common:language")}),s.jsx("span",{children:wo.map(x=>s.jsx(FS,{$active:h===x,onClick:()=>m(x),children:Ry[x]},x))})]}),s.jsx(CS,{onClick:()=>{a(!1),hp(),c(nl(),{replace:!0})},children:t("common:signOut")})]})})]})},US=f.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px clamp(20px, 4vw, 48px);
  background: var(--v29-nav);
  backdrop-filter: saturate(140%) blur(18px);
  -webkit-backdrop-filter: saturate(140%) blur(18px);
  border-bottom: 1px solid var(--v29-line-soft);

  --brand-logo-color: #ffffff;
  [data-theme='light'] & {
    --brand-logo-color: ${Zo};
  }

  @media (max-width: 720px) {
    padding: 12px 20px;
  }
`,BS=f.div`
  display: flex;
  align-items: center;
  gap: 16px;
  @media (max-width: 480px) {
    gap: 8px;
  }
`,zS=f.span`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  min-width: 44px;
  .nav-mark {
    display: none;
  }
  @media (max-width: 480px) {
    min-height: 44px;
    ${({$compact:t})=>t?`
      .nav-wordmark { display: none; }
      .nav-mark { display: inline-flex; }
    `:""}
  }
`,HS=f.button`
  appearance: none;
  border: 1px solid var(--v29-line);
  background: transparent;
  color: var(--v29-primary);
  width: 38px;
  height: 38px;
  border-radius: 8px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.15s ease, border-color 0.15s ease;

  svg {
    width: 16px;
    height: 16px;
  }

  @media (max-width: 480px) {
    width: 44px;
    height: 44px;
    flex-shrink: 0;
  }

  &:hover {
    border-color: var(--v29-primary);
    transform: translateY(-1px);
  }
  &:focus-visible {
    outline: 2px solid var(--v29-primary);
    outline-offset: 2px;
  }
`,VS=f(De)`
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 8px;
  font-family: ${Ue};
  font-style: italic;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;
  @media (max-width: 480px) {
    min-height: 44px;
    ${({$hideOnNarrow:t})=>t?"display: none;":""}
  }
  ${({$ghost:t})=>t?`
    border: 1.5px solid var(--v29-line);
    background: transparent;
    color: var(--v29-text);
    &:hover {
      border-color: var(--v29-primary);
      background: color-mix(in srgb, var(--v29-primary) 8%, transparent);
      transform: translateY(-1px);
    }
  `:`
    border: none;
    background: var(--v29-primary-fill);
    color: var(--v29-on-primary);
    &:hover {
      transform: translateY(-1px);
    }
  `}
  &:focus-visible {
    outline: 2px solid var(--v29-primary);
    outline-offset: 2px;
  }
`,El=({theme:t,onToggleTheme:e,audience:n="public"})=>{const{t:r}=G(),{pathname:i}=Ze(),a=ra(),o=i.startsWith("/portal")&&a,l=rl(),c=l.length>0,d=l.some(h=>h.role==="shipper"),u=n==="receiver";return s.jsxs(US,{children:[s.jsx(De,{to:"/","aria-label":r("common:brandHome"),style:{display:"inline-flex"},children:s.jsxs(zS,{$compact:c&&!u,children:[s.jsx("span",{className:"nav-wordmark","aria-hidden":"true",children:s.jsx(ds,{height:28,ariaLabel:""})}),s.jsx("span",{className:"nav-mark","aria-hidden":"true",children:s.jsx(ds,{height:28,variant:"mark",ariaLabel:""})})]})}),s.jsxs(BS,{children:[s.jsx(HS,{onClick:e,"aria-label":r("common:toggleTheme"),children:t==="dark"?s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("circle",{cx:"12",cy:"12",r:"5"}),s.jsx("path",{d:"M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"})]}):s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})}),!o&&!u&&s.jsx(VS,{to:"/contact",$ghost:d,$hideOnNarrow:d,children:r("common:getEarlyAccess")}),!u&&(c||a)&&s.jsx(yf,{})]})]})},WS=f.footer`
  background: var(--v29-page);
  border-top: 1px solid var(--v29-line-soft);
  padding: 16px 0;
  font-family: ${E};
`,qS=f.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 16px 32px;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 clamp(20px, 4vw, 48px);
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`,KS=f.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 13px;
  color: var(--v29-muted);
  p {
    margin: 0;
    max-width: 42ch;
    line-height: 1.6;
  }
`,GS=f.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 8px 24px;
  a {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    font-size: 13px;
    font-weight: 600;
    color: var(--v29-muted);
    text-decoration: none;
    transition: color 0.2s ease;
    &:hover {
      color: ${ht};
    }
    &:focus-visible {
      outline: 2px solid ${ht};
      outline-offset: 3px;
    }
  }
  @media (max-width: 720px) {
    justify-content: flex-start;
  }
`,sa=()=>s.jsx(WS,{children:s.jsxs(qS,{children:[s.jsx(KS,{children:s.jsx("p",{children:"© 2026 SenditGo. All rights reserved."})}),s.jsxs(GS,{"aria-label":"Footer",children:[s.jsx("a",{href:ut("/design-review/privacy-policy/"),children:"Privacy Policy"}),s.jsx(De,{to:"/contact",children:"Contact Us"})]})]})}),Td="senditgo-v38-cookie-consent",Id="--cookie-consent-offset",vf=720;function Rd(t){return t<=vf}function ZS(t){return t<=0?0:Math.round(t)}function bf(t,e,n){if(n<=0){t.removeProperty(Id),e.style.paddingBottom="";return}const r=`${n}px`;t.setProperty(Id,r),e.style.paddingBottom=r}function Cd(t,e){bf(t,e,0)}const YS=f(Go.div)`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background: var(--v29-card);
  border-top: 1px solid var(--v29-line-soft);
  box-shadow: var(--v29-popover-shadow);
  font-family: ${E};
  color: var(--v29-text);
  padding: 12px clamp(16px, 3vw, 32px) max(12px, env(safe-area-inset-bottom, 0px));
  display: flex;
  justify-content: center;
`,JS=f.div`
  width: 100%;
  max-width: 1180px;
  display: flex;
  align-items: ${t=>t.$stack?"stretch":"center"};
  justify-content: space-between;
  flex-direction: ${t=>t.$stack?"column":"row"};
  gap: ${t=>t.$stack?"12px":"20px"};
  text-align: ${t=>t.$stack?"center":"left"};
`,XS=f.p`
  margin: 0;
  font-size: 13px;
  line-height: 1.45;
  color: var(--v29-muted);
  max-width: 72ch;
  .lede {
    font-weight: 600;
    color: var(--v29-text);
  }
  a {
    color: var(--v29-primary);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
    &:focus-visible {
      outline: 2px solid var(--v29-primary);
      outline-offset: 2px;
    }
  }
`,QS=f.div`
  display: flex;
  align-items: center;
  justify-content: ${t=>t.$stack?"center":"flex-end"};
  gap: 8px;
  flex-shrink: 0;
`,Od=f.button`
  appearance: none;
  border: none;
  cursor: pointer;
  min-height: 44px;
  padding: 8px 18px;
  border-radius: var(--v29-radius-button);
  font-family: ${E};
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.02em;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;

  &:focus-visible {
    outline: 2px solid var(--v29-primary);
    outline-offset: 2px;
  }

  ${t=>t.$variant==="accept"?`
    background: var(--v29-primary);
    color: var(--v29-on-primary);
    &:hover { background: var(--v29-primary-hover); }
  `:`
    background: transparent;
    color: var(--v29-muted);
    border: 1px solid var(--v29-line-soft);
    &:hover { color: var(--v29-text); border-color: var(--v29-muted); }
  `}
`;function ej(){const[t,e]=S.useState(()=>typeof window>"u"?!1:Rd(window.innerWidth));return S.useEffect(()=>{const n=window.matchMedia(`(max-width: ${vf}px)`),r=()=>e(Rd(window.innerWidth));return r(),n.addEventListener("change",r),()=>n.removeEventListener("change",r)},[]),t}const aa=()=>{const[t,e]=S.useState(()=>{try{return localStorage.getItem(Td)||null}catch{return null}}),[n,r]=S.useState(!1),i=S.useRef(null),a=ej();S.useEffect(()=>{if(t!==null)return;const c=window.setTimeout(()=>r(!0),1100);return()=>window.clearTimeout(c)},[t]);const o=t===null&&n;S.useEffect(()=>{if(!o){Cd(document.documentElement.style,document.body);return}const c=i.current;if(!c)return;const d=()=>{bf(document.documentElement.style,document.body,ZS(c.offsetHeight))};d();const u=new ResizeObserver(d);return u.observe(c),()=>{u.disconnect(),Cd(document.documentElement.style,document.body)}},[o,a]);const l=c=>{e(c);try{localStorage.setItem(Td,c)}catch{}};return s.jsx(el,{children:o&&s.jsx(YS,{ref:i,role:"region","aria-label":"Cookie consent",initial:{y:"100%"},animate:{y:0},exit:{y:"100%"},transition:{duration:.35,ease:Vs},children:s.jsxs(JS,{$stack:a,children:[s.jsxs(XS,{children:[s.jsx("span",{className:"lede",children:"We use a few optional analytics cookies"})," to see how this page performs — nothing is set until you choose. Decline and only the essentials run. Read our ",s.jsx(De,{to:"/privacy",children:"Privacy Policy"}),"."]}),s.jsxs(QS,{$stack:a,children:[s.jsx(Od,{$variant:"decline",type:"button",onClick:()=>l("declined"),children:"Decline"}),s.jsx(Od,{$variant:"accept",type:"button",onClick:()=>l("accepted"),children:"Accept"})]})]})},"consent")})},tj=f.main`
  flex: 1;
  width: 100%;
  max-width: 760px;
  min-width: 0;
  margin: 0 auto;
  padding: 120px 32px 96px;

  @media (max-width: 720px) {
    padding: 96px 20px 64px;
  }
`,nr=tn,Ar=f(Tn).attrs({as:"h1"})``,Pi=nn,ee=f(Im)`
  padding: 0 0 44px 0;

  h2 {
    font-size: 22px;
    font-weight: 700;
    margin: 0 0 14px;
    color: var(--v29-text);
  }
  p,
  li {
    font-size: 15px;
    line-height: 1.7;
    color: var(--v29-muted);
  }
  p {
    margin: 0 0 12px;
  }
  ul {
    margin: 0 0 12px;
    padding-left: 20px;
  }
  li {
    margin-bottom: 6px;
  }
  strong {
    color: var(--v29-text);
    font-weight: 600;
  }
  a {
    color: var(--v29-text);
    text-decoration: underline;
    text-decoration-color: var(--v29-line);
    text-underline-offset: 3px;
    text-decoration-thickness: 1px;
    transition: text-decoration-color 0.15s ease;
  }
  a:hover {
    text-decoration-color: var(--v29-text);
  }
`,On=({children:t})=>{const{mode:e,toggleTheme:n}=Ws();return s.jsxs(s.Fragment,{children:[s.jsx(qs,{}),s.jsxs(Yo,{children:[s.jsx(El,{theme:e,onToggleTheme:n}),s.jsx(tj,{children:t}),s.jsx(sa,{}),s.jsx(aa,{})]})]})},Ad="https://apps.apple.com/app/sendit-go/id000000000",Pd="https://play.google.com/store/apps/details?id=tw.com.holieninnovation.senditgo",nj=()=>{if(typeof navigator>"u")return"other";const t=navigator.userAgent||"",e=navigator.platform==="MacIntel"&&(navigator.maxTouchPoints??0)>1;return/iPad|iPhone|iPod/.test(t)||e?"ios":/Android/i.test(t)?"android":"other"},rj=f.div`
  display: grid;
  gap: 14px;
  width: 100%;
  max-width: 420px;
  margin: 32px auto 24px;
`,Nd=f.a`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 14px 28px;
  border-radius: 8px;
  background: var(--v29-primary);
  color: #fff;
  font-family: ${E};
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.15s ease, background 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 4px 14px color-mix(in srgb, var(--v29-primary) 25%, transparent);

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background: var(--v29-primary-hover);
    transform: translateY(-1px);
    box-shadow: 0 6px 20px color-mix(in srgb, var(--v29-primary) 35%, transparent);
  }

  .small {
    display: block;
    font-size: 10px;
    color: rgba(255, 255, 255, 0.75);
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: 2px;
  }
  .big {
    display: block;
    font-size: 17px;
    font-weight: 600;
    letter-spacing: -0.005em;
  }
`,Ld=f.span`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`,ij=f.p`
  font-family: ${E};
  font-size: 13px;
  color: var(--v29-muted);
  margin: 16px 0 0;
  text-align: center;
`,sj=f.div`
  margin: 40px auto 0;
  display: grid;
  justify-items: center;
  gap: 12px;
`,aj=f.div`
  background: #FFFFFF;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid var(--v29-line-soft);
  box-shadow: 0 4px 24px -8px rgba(0, 0, 0, 0.15);
  line-height: 0;
`,oj=f.span`
  font-family: ${E};
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--v29-muted);
`,lj=()=>s.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:s.jsx("path",{d:"M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.49-.12-1.1.473-2.25 1.182-2.99.795-.85 2.142-1.49 2.982-1.58zM20.93 17.49c-.45 1.04-.66 1.5-1.24 2.42-.81 1.28-1.96 2.86-3.38 2.88-1.26.01-1.59-.82-3.3-.82s-2.07.81-3.3.83c-1.42.02-2.49-1.39-3.31-2.66-2.28-3.55-2.52-7.71-1.11-9.92.99-1.55 2.55-2.45 4.02-2.45 1.5 0 2.45.82 3.69.82 1.21 0 1.95-.82 3.69-.82 1.32 0 2.71.72 3.7 1.96-3.25 1.78-2.72 6.42-.49 7.74z"})}),cj=()=>s.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:s.jsx("path",{d:"M17.6 9.48l1.84-3.18a.4.4 0 0 0-.69-.4l-1.86 3.23a11.85 11.85 0 0 0-9.78 0L5.25 5.9a.4.4 0 0 0-.69.4l1.84 3.18A11.49 11.49 0 0 0 .5 19h23a11.49 11.49 0 0 0-5.9-9.52zM7 15.25a1.06 1.06 0 1 1 1.06-1.06A1.06 1.06 0 0 1 7 15.25zm10 0a1.06 1.06 0 1 1 1.06-1.06A1.06 1.06 0 0 1 17 15.25z"})}),dj=()=>{const[t,e]=S.useState("other");S.useEffect(()=>{const r=nj();e(r),r==="ios"?window.location.replace(Ad):r==="android"&&window.location.replace(Pd)},[]);const n=S.useMemo(()=>typeof window<"u"?`${window.location.origin}${ut("/install")}`:"https://senditgo.com/install",[]);return s.jsxs(On,{children:[s.jsxs(rj,{children:[s.jsxs(Nd,{href:Ad,"aria-label":"Download on the App Store",children:[s.jsx(Ld,{children:s.jsx(lj,{})}),s.jsxs("span",{children:[s.jsx("span",{className:"small",children:"Download on the"}),s.jsx("span",{className:"big",children:"App Store"})]})]}),s.jsxs(Nd,{href:Pd,"aria-label":"Get it on Google Play",children:[s.jsx(Ld,{children:s.jsx(cj,{})}),s.jsxs("span",{children:[s.jsx("span",{className:"small",children:"Get it on"}),s.jsx("span",{className:"big",children:"Google Play"})]})]})]}),t==="other"&&s.jsx(ij,{children:"On a desktop? Scan the code below with your phone."}),s.jsxs(sj,{children:[s.jsx(aj,{children:s.jsx(Eh,{value:n,size:144,level:"M",bgColor:"#FFFFFF",fgColor:Zo,"aria-label":"Scan to install the SenditGo driver app"})}),s.jsx(oj,{children:"Scan to install"})]})]})},Ye="[PLACEHOLDER — Yi]",dn={eyebrow:"About",title:`${Ye} — the one line that says what SenditGo is for`,belief:`${Ye} — one sentence on what we believe about delivery work and why this company exists.`,blocks:[{heading:"Where we started",body:`${Ye} — the origin: what was broken for fleet operators, and what made it worth building software for.`},{heading:"How we work",body:`${Ye} — how the team builds and supports the product, and what a customer can expect from us day to day.`},{heading:"Where we are going",body:`${Ye} — the direction over the next few years, in plain terms and without dates we cannot keep.`}],valuesHeading:"What we hold to",values:[{heading:`${Ye} — value one`,body:`${Ye} — one or two lines on what it means in practice.`},{heading:`${Ye} — value two`,body:`${Ye} — one or two lines on what it means in practice.`},{heading:`${Ye} — value three`,body:`${Ye} — one or two lines on what it means in practice.`},{heading:`${Ye} — value four`,body:`${Ye} — one or two lines on what it means in practice.`}],closing:{heading:"Work with us",body:`${Ye} — the closing invitation, and where to go next.`}},uj=f.p`
  margin: 0 0 24px;
  padding: 12px 16px;
  border-left: 3px solid ${"var(--v29-primary)"};
  background: color-mix(in srgb, var(--v29-primary) 8%, transparent);
  font-family: ${E};
  font-size: 13.5px;
  color: var(--v29-text);
`,hj=f.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 8px;
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`,pj=f.div`
  padding: 20px;
  border-radius: var(--v29-radius-container, 16px);
  background: var(--v29-card);
  box-shadow: var(--v29-card-shadow);
  h3 {
    margin: 0 0 8px;
    font-family: ${E};
    font-size: 15px;
    font-weight: 700;
    color: var(--v29-text);
  }
  p {
    margin: 0;
    font-family: ${E};
    font-size: 14px;
    line-height: 1.6;
    color: var(--v29-muted);
  }
`,fj=()=>s.jsxs(On,{children:[s.jsx(nr,{children:dn.eyebrow}),s.jsx(Ar,{children:dn.title}),s.jsxs(uj,{children:["This page is a structure waiting for its words. Every line marked"," ",s.jsx("strong",{children:Ye})," is a slot, not copy."]}),s.jsx(Pi,{children:dn.belief}),dn.blocks.map(t=>s.jsxs(ee,{children:[s.jsx("h2",{children:t.heading}),s.jsx("p",{children:t.body})]},t.heading)),s.jsxs(ee,{children:[s.jsx("h2",{children:dn.valuesHeading}),s.jsx(hj,{children:dn.values.map((t,e)=>s.jsxs(pj,{children:[s.jsx("h3",{children:t.heading}),s.jsx("p",{children:t.body})]},e))})]}),s.jsxs(ee,{children:[s.jsx("h2",{children:dn.closing.heading}),s.jsx("p",{children:dn.closing.body})]})]}),Bt="[PLACEHOLDER — Yi]",ie={eyebrow:"About",title:"Moving delivery forward.",opening:"We believe running a delivery operation should feel clear, connected and manageable — even when everything around it is moving.",beliefSlot:`${Bt}: final one-line company belief / purpose statement.`,whoWeAre:"SenditGo builds technology for the people who plan, manage and carry out delivery every day. We bring the moving parts of an operation together so teams can spend less time working around disconnected systems and more time getting things where they need to go.",reality:{heading:"Built for the reality of delivery",body:["Delivery doesn't happen in a perfect environment. Plans change. Orders change. Drivers move. Customers are waiting. Managers need to make decisions with the information they have right now.","SenditGo exists to make that work simpler.","Our aim is to give operators and drivers a shared view of what is happening — from orders and shifts to routes, delivery progress and proof of delivery — and make the next action easier to understand."],slot:`${Bt}: what problem do we ultimately want SenditGo to solve for the industry? 1–2 sentences.`},heading:{heading:"Where we're heading",body:"We see a future where delivery operations don't have to be held together by spreadsheets, manual handovers and information scattered between different systems.",slot:`${Bt}: long-term ambition for SenditGo.`,pull:"We want reliable, intelligent delivery technology to feel like part of the operation itself — quietly helping people make better decisions, respond faster and keep goods moving."},origin:{heading:"It started with a real operational problem",body:["SenditGo began by looking closely at the everyday problems inside transportation and logistics: information living in different places, repeated manual work, limited visibility and software that doesn't always reflect what happens in the field.","Instead of treating those as separate problems, we started building a connected system around the operation as a whole.","Today, that means bringing fleet management, delivery operations and the driver experience together across web and mobile."],slot:`${Bt}: 2–3 factual sentences about the real origin of SenditGo. No legal-company history required.`},howWeBuild:{heading:"How we choose to build",intro:"These are not HR slogans. Each one should tell a customer something about the kind of company they are dealing with.",values:[{heading:"Solve the real problem",body:"We start with what people are actually trying to get done. Technology matters when it improves the work, not simply because it is new."},{heading:"Make complexity feel simple",body:"Logistics is complex enough. We do the difficult work behind the scenes so the experience in front of the user can stay clear."},{heading:"Build for the people doing the work",body:"Drivers, operators and managers experience the same operation differently. We listen to the people using the product and design around the realities of their day."},{heading:"Own the outcome",body:"Shipping a feature isn't the finish line. We care about whether what we build works in practice and makes the operation better."},{heading:"Improve together",body:"Good products come from different perspectives. We share what we know, challenge ideas constructively and keep learning from customers and one another."}],extraSlot:{heading:`${Bt}: optional SenditGo-specific value`,body:`${Bt}: adapted from responsibility / resourcefulness / partnership / global perspective — in SenditGo words, not a parent-company paste.`}},standard:{heading:"The standard we're working toward",slot:`${Bt}: a short statement describing what success looks like for SenditGo.`,example:"Delivery technology that people can trust without having to think about it.",body:"When the system is doing its job, teams have the information they need, drivers know what comes next, managers can respond to change, and the technology stays out of the way."},stillBuilding:{heading:"And we're still building",body:"What we have today is one part of a much longer journey.",slot:`${Bt}: what SenditGo wants to become over the next several years, without dates, market-size claims or unreleased product promises.`,close:"We'll continue listening to the people running real operations, improving what already exists and exploring where better technology can remove the next source of friction."},invite:{heading:"Come build what moves next",body:"The best delivery systems aren't built from assumptions. They're shaped by the people running operations, solving problems and moving things every day.",slot:`${Bt}: final CTA depending on what this page should drive.`}},mj=f.h1`
  font-family: ${Ue};
  font-style: italic;
  font-weight: 700;
  font-size: clamp(1.9rem, 1.3rem + 2.6vw, 3rem);
  letter-spacing: 0.01em;
  line-height: 1.08;
  margin: 0 0 16px;
  color: var(--v29-text);
`,gj=f.p`
  margin: 0 0 28px;
  padding: 12px 16px;
  border-left: 3px solid var(--v29-primary);
  background: color-mix(in srgb, var(--v29-primary) 8%, transparent);
  font-family: ${E};
  font-size: 13.5px;
  color: var(--v29-text);
`,Ln=f.p`
  margin: 16px 0 0;
  padding: 12px 16px;
  border-left: 3px solid color-mix(in srgb, var(--v29-muted) 50%, transparent);
  background: color-mix(in srgb, var(--v29-muted) 8%, transparent);
  font-family: ${E};
  font-size: 13.5px;
  line-height: 1.55;
  color: var(--v29-muted);
`,$d=f.blockquote`
  margin: 20px 0 0;
  padding: 4px 0 4px 20px;
  border-left: 3px solid var(--v29-primary);
  font-family: ${Ue};
  font-size: 20px;
  font-weight: 900;
  line-height: 1.35;
  color: var(--v29-text);
`,xj=f.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 16px;
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`,Dd=f.div`
  padding: 20px;
  border-radius: var(--v29-radius-container, 16px);
  background: var(--v29-card);
  box-shadow: var(--v29-card-shadow);
  h3 {
    margin: 0 0 8px;
    font-family: ${E};
    font-size: 15px;
    font-weight: 700;
    color: var(--v29-text);
  }
  p {
    margin: 0;
    font-family: ${E};
    font-size: 14px;
    line-height: 1.6;
    color: var(--v29-muted);
  }
`,yj=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
`,vj=f(De)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 20px;
  border-radius: 999px;
  background: var(--v29-primary);
  color: var(--v29-on-primary);
  font-family: ${E};
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  &:hover {
    background: var(--v29-primary-hover);
  }
`,bj=()=>s.jsxs(On,{children:[s.jsxs(gj,{children:["Demo only — ",s.jsx("code",{children:"/about-v1"}),". Live ",s.jsx("code",{children:"/about"})," is unchanged and still dark."]}),s.jsx(nr,{children:ie.eyebrow}),s.jsx(mj,{children:ie.title}),s.jsx(Pi,{children:ie.opening}),s.jsx(Ln,{children:ie.beliefSlot}),s.jsx(ee,{children:s.jsx("p",{children:ie.whoWeAre})}),s.jsxs(ee,{children:[s.jsx("h2",{children:ie.reality.heading}),ie.reality.body.map(t=>s.jsx("p",{children:t},t)),s.jsx(Ln,{children:ie.reality.slot})]}),s.jsxs(ee,{children:[s.jsx("h2",{children:ie.heading.heading}),s.jsx("p",{children:ie.heading.body}),s.jsx(Ln,{children:ie.heading.slot}),s.jsx($d,{children:ie.heading.pull})]}),s.jsxs(ee,{children:[s.jsx("h2",{children:ie.origin.heading}),ie.origin.body.map(t=>s.jsx("p",{children:t},t)),s.jsx(Ln,{children:ie.origin.slot})]}),s.jsxs(ee,{children:[s.jsx("h2",{children:ie.howWeBuild.heading}),s.jsx("p",{children:ie.howWeBuild.intro}),s.jsxs(xj,{children:[ie.howWeBuild.values.map(t=>s.jsxs(Dd,{children:[s.jsx("h3",{children:t.heading}),s.jsx("p",{children:t.body})]},t.heading)),s.jsxs(Dd,{children:[s.jsx("h3",{children:ie.howWeBuild.extraSlot.heading}),s.jsx("p",{children:ie.howWeBuild.extraSlot.body})]})]})]}),s.jsxs(ee,{children:[s.jsx("h2",{children:ie.standard.heading}),s.jsx(Ln,{children:ie.standard.slot}),s.jsx($d,{children:ie.standard.example}),s.jsx("p",{style:{marginTop:16},children:ie.standard.body})]}),s.jsxs(ee,{children:[s.jsx("h2",{children:ie.stillBuilding.heading}),s.jsx("p",{children:ie.stillBuilding.body}),s.jsx(Ln,{children:ie.stillBuilding.slot}),s.jsx("p",{children:ie.stillBuilding.close})]}),s.jsxs(ee,{children:[s.jsx("h2",{children:ie.invite.heading}),s.jsx("p",{children:ie.invite.body}),s.jsx(Ln,{children:ie.invite.slot}),s.jsx(yj,{children:s.jsx(vj,{to:"/contact",children:"Talk to us"})})]})]}),wj=()=>s.jsxs(On,{children:[s.jsx(nr,{children:"About us"}),s.jsx(Ar,{children:"One connected delivery operation."}),s.jsx(Pi,{children:"SenditGo brings route planning, dispatch, live tracking and proof of delivery together for local and last-mile fleets."}),s.jsxs(ee,{style:{paddingTop:40},children:[s.jsx("h2",{children:"Built around the delivery day."}),s.jsx("p",{children:"Build runs, assign orders and review the day in Order Management. Drivers follow their run and record delivery details, while dispatchers keep track of progress in one place."})]}),s.jsxs(ee,{children:[s.jsx("h2",{children:"Meet SAM, your planning engine."}),s.jsx("p",{children:"SAM stands for Smart Adaptive Model. It brings your delivery requirements and available vehicles together to help you build a workable route plan."}),s.jsx("p",{children:"Delivery locations and time windows, your warehouse and vehicle capacity give the plan its starting point. You review the proposed plan in Order Management and stay in control of what goes out."})]}),s.jsxs(ee,{children:[s.jsx("h2",{children:"Talk through your operation."}),s.jsxs("p",{children:["Tell us about your fleet, your delivery day and what you need from your next system. ",s.jsx(De,{to:"/contact",children:"Talk to us"})," about a demo, pricing or integrations."]})]})]}),xe={legalName:"Senditgo Co., Ltd.",jurisdiction:"Taiwan, R.O.C.",address:"24F.-6, No. 213, Chaofu Rd., Xitun Dist., Taichung City, Taiwan (R.O.C.)",supportEmail:"info@holieninnovation.com.tw"},kj=["demo","pricing","solution","integrations","general"],Md={name:"fleet_size",label:"How many vehicles?",type:"select",required:!0,options:["1–5","6–20","21–50","51–200","More than 200"]},Hi={name:"company",label:"Company",type:"text",required:!0,autoComplete:"organization"},wf={demo:{type:"demo",label:"Book a product demo",lede:"Tell us a little about your operation and we will bring the right screens.",fields:[Hi,Md,{name:"preferred_time",label:"When suits you?",type:"text",required:!1,hint:"A day and a rough time is enough. We will confirm by email."}]},pricing:{type:"pricing",label:"Plans and pricing",lede:"Pricing depends on how many vehicles you run, so start there.",fields:[Hi,Md,{name:"start_date",label:"When are you looking to start?",type:"text",required:!1}]},solution:{type:"solution",label:"Find the right solution",lede:"Describe the job you are trying to do and we will tell you honestly whether we fit.",fields:[Hi,{name:"operation",label:"What does your delivery day look like?",type:"textarea",required:!0,hint:"Types of drops, how many a day, what goes wrong most often."}]},integrations:{type:"integrations",label:"Integrations",lede:"Tell us what you already run and we will tell you how it connects.",fields:[Hi,{name:"system_name",label:"Which system?",type:"text",required:!0,hint:"The order, warehouse or accounting system you want connected."},{name:"integration_need",label:"What should move between them?",type:"textarea",required:!1}]},general:{type:"general",label:"General",lede:"Anything else — we read every one.",fields:[{name:"message",label:"Your message",type:"textarea",required:!0}]}};kj.map(t=>({value:t,label:wf[t].label}));function Do(t){return t?wf[t].fields:[]}function Sj(t,e,n){const r=[];t||r.push("enquiry_type"),n.name.trim()||r.push("name"),jj(n.email)||r.push("email");for(const i of Do(t))i.required&&!(e[i.name]??"").trim()&&r.push(i.name);return r}function jj(t){const e=t.trim();return e.length>4&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}f.form`
  display: grid;
  gap: 16px;
  font-family: ${E};
  max-width: 640px;
`;f.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;f.div`
  display: grid;
  gap: 6px;
`;f.label`
  font-size: 13px;
  font-weight: 600;
  color: var(--v29-text);
`;const _l=`
  width: 100%;
  padding: 13px 15px;
  border-radius: var(--v29-radius-field, 12px);
  font-size: 16px;
  font-family: inherit;
  background: var(--v29-page);
  border: 1px solid var(--v29-line-soft);
  color: var(--v29-text);
  &::placeholder { color: var(--v29-muted); }
  &:focus {
    outline: none;
    background: var(--v29-card);
    border-color: var(--v29-primary);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--v29-primary) 20%, transparent);
  }
  &[aria-invalid='true'] {
    border-color: var(--v29-danger, #c0392b);
  }
`;f.input`
  ${_l}
`;f.textarea`
  ${_l};
  min-height: 120px;
  resize: vertical;
`;f.select`
  ${_l};
  appearance: none;
  background-image: var(--v29-select-caret);
  background-repeat: no-repeat;
  background-position: right 14px center;
  padding-right: 42px;
`;f.p`
  margin: 0;
  font-size: 12.5px;
  color: var(--v29-muted);
`;f.p`
  margin: 0;
  font-size: 13px;
  color: var(--v29-muted);
`;f.p`
  margin: 0;
  font-size: 13.5px;
  color: var(--v29-danger, #c0392b);
`;f.p`
  margin: 0;
  font-size: 14px;
  color: var(--v29-success, #1b7f4b);
`;f.button`
  justify-self: start;
  padding: 13px 26px;
  border-radius: var(--v29-radius-button, 8px);
  background: var(--v29-primary-fill);
  color: var(--v29-on-primary);
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  min-height: 44px;
  &:hover:not(:disabled) {
    background: var(--v29-primary-fill);
    transform: translateY(-1px);
  }
  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
  &:focus-visible {
    outline: 2px solid var(--v29-primary);
    outline-offset: 2px;
  }
`;const Ej=()=>{var b;const[t,e]=S.useState(""),[n,r]=S.useState(""),[i,a]=S.useState(""),[o,l]=S.useState(""),[c,d]=S.useState({}),[u,h]=S.useState(!1);u&&Sj(t,c,{name:n,email:i});const[p,m]=S.useState("idle");S.useId(),S.useRef(null);const x=S.useRef(null),y=(b=Do(t)[0])==null?void 0:b.name;return S.useEffect(()=>{var j;if(!t||!y)return;const _=(j=x.current)==null?void 0:j.querySelector(`[name="${y}"]`);_==null||_.focus()},[t,y]),{...Object.fromEntries(Do(t).map(_=>[_.name,_.label]))},s.jsxs(On,{children:[s.jsx(nr,{children:"Contact"}),s.jsx(Ar,{children:"Talk to us."}),s.jsx(ee,{children:s.jsxs("p",{children:["Email ",s.jsx("a",{href:`mailto:${xe.supportEmail}`,children:xe.supportEmail})," to contact the SenditGo team."]})})]})},_j=f.p`
  font-family: ${E};
  font-size: 13px;
  color: var(--v29-muted);
  margin: 0 0 32px;
  letter-spacing: 0.02em;
`,Fd=f.div`
  max-width: 100%;
  overflow-x: auto;
  &:focus-visible {
    outline: 2px solid var(--v29-primary);
    outline-offset: 2px;
  }
`,Ud=f.p`
  @media (min-width: 561px) {
    display: none;
  }
`,Bd=f.table`
  width: 100%;
  border-collapse: collapse;
  @media (max-width: 560px) {
    min-width: 520px;
  }
  margin: 8px 0 16px;
  font-family: ${E};
  font-size: 14.5px;
  line-height: 1.6;

  th,
  td {
    text-align: left;
    padding: 12px 14px;
    border-bottom: 1px solid var(--v29-line-soft);
    vertical-align: top;
    color: var(--v29-muted);
  }
  th {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--v29-muted);
  }
  td strong {
    color: var(--v29-text);
    font-weight: 600;
  }
`,Tj=()=>s.jsxs(On,{children:[s.jsx(nr,{children:"Privacy"}),s.jsx(Ar,{children:"Privacy policy."}),s.jsx(_j,{children:"Last updated: 18 May 2026"}),s.jsxs(Pi,{children:["This policy explains what ",xe.legalName," collects through the SenditGo driver app and this website, why, how long we keep it, and the rights you have. The data controller is ",xe.legalName]}),s.jsx(ee,{children:s.jsxs("p",{children:["For a summary of the app’s data collection and protections, see"," ",s.jsx("a",{href:ut("/data-safety"),children:"Data safety"}),". To remove your account and its associated data, see ",s.jsx("a",{href:ut("/account-deletion"),children:"Delete account"}),"."]})}),s.jsxs(ee,{children:[s.jsx("h2",{children:"1. Who we are"}),s.jsxs("p",{children:["SenditGo is operated by ",xe.legalName,", a company registered in"," ",xe.jurisdiction," with its principal address at ",xe.address,". We are the developer of record on the App Store and Google Play and the entity responsible for handling personal information under the Australian Privacy Act 1988 (Cth). For any privacy question, reach us at"," ",s.jsx("a",{href:`mailto:${xe.supportEmail}`,children:xe.supportEmail}),"."]})]}),s.jsxs(ee,{children:[s.jsx("h2",{id:"privacy-collection",children:"2. What we collect"}),s.jsx("p",{children:"We collect only the data needed to run a dispatch operation — no advertising profiles, no sale to third parties."}),s.jsx(Ud,{id:"privacy-collection-hint",children:"Swipe or scroll sideways to read the table."}),s.jsx(Fd,{role:"region","aria-labelledby":"privacy-collection","aria-describedby":"privacy-collection-hint",tabIndex:0,children:s.jsxs(Bd,{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Category"}),s.jsx("th",{children:"Examples"}),s.jsx("th",{children:"Why"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"Account"})}),s.jsx("td",{children:"Mobile number, name, email, employer (your operator)"}),s.jsx("td",{children:"Sign-in, identifying you to your operator"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"Location"})}),s.jsx("td",{children:"GPS coordinates while a shift is active"}),s.jsx("td",{children:"Live driver tracking, ETA, geofence events"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"Delivery content"})}),s.jsx("td",{children:"Photos, signatures, notes captured at the door"}),s.jsx("td",{children:"Proof of delivery for your operator and their customer"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"Device & usage"})}),s.jsx("td",{children:"Device model, OS version, app version, crash logs"}),s.jsx("td",{children:"Stability, diagnostics, security"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"Communications"})}),s.jsx("td",{children:"In-app messages between driver and dispatcher"}),s.jsx("td",{children:"Operational coordination"})]})]})]})})]}),s.jsxs(ee,{children:[s.jsx("h2",{children:"3. How we use it"}),s.jsxs("ul",{children:[s.jsx("li",{children:"To run the dispatch service: assign jobs, track progress, record proof of delivery."}),s.jsx("li",{children:"To keep the app secure: detect abuse, verify sign-ins, prevent fraud."}),s.jsx("li",{children:"To improve the product: diagnose crashes, measure feature usage in aggregate."}),s.jsx("li",{children:"To meet legal obligations under the Privacy Act 1988 (Cth) and applicable tax law."})]}),s.jsxs("p",{children:["We do ",s.jsx("strong",{children:"not"})," use your data for behavioural advertising and we do not sell it."]})]}),s.jsxs(ee,{children:[s.jsx("h2",{children:"4. Legal basis"}),s.jsx("p",{children:"Under the Australian Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs), we process personal information because it is necessary to perform the dispatch service you (or your employer on your behalf) signed up for, to comply with our legal obligations, and — for product improvement and security — for our legitimate interests in operating a reliable, safe service. Where required (e.g. for any optional analytics cookies on this website), we ask for consent and you can withdraw it at any time."})]}),s.jsxs(ee,{children:[s.jsx("h2",{children:"5. Who sees your data"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Your operator"})," (the company running the SenditGo back-office that you drive for) — they see your shift activity, route, and proof-of-delivery records. They are a separate data controller for their business records."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Service providers"})," we use to run the platform: cloud hosting (currently AWS, region asia-east), map tiles (Mapbox), push notification delivery (Apple/Google), and crash reporting. Each is bound by a written data-processing agreement."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Authorities"})," if compelled by a valid legal order under Australian law."]})]}),s.jsxs("p",{children:["A current list of sub-processors is available on request via"," ",s.jsx("a",{href:`mailto:${xe.supportEmail}`,children:xe.supportEmail}),"."]})]}),s.jsxs(ee,{children:[s.jsx("h2",{children:"6. International transfers"}),s.jsx("p",{children:"Our primary infrastructure is hosted in the Asia-Pacific region. Limited categories of data (e.g. crash reports, push delivery metadata) may be processed by service providers operating from other jurisdictions; in every case the provider is bound by a data-processing agreement and we rely on standard contractual clauses or equivalent safeguards where required."})]}),s.jsxs(ee,{children:[s.jsx("h2",{id:"privacy-retention",children:"7. How long we keep it"}),s.jsx(Ud,{id:"privacy-retention-hint",children:"Swipe or scroll sideways to read the table."}),s.jsx(Fd,{role:"region","aria-labelledby":"privacy-retention","aria-describedby":"privacy-retention-hint",tabIndex:0,children:s.jsxs(Bd,{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Data"}),s.jsx("th",{children:"Retention"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"Active account data"}),s.jsx("td",{children:"Until you delete your account"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"Location pings"}),s.jsx("td",{children:"90 days, then aggregated for trend reporting (no longer linked to you)"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"Proof-of-delivery records"}),s.jsx("td",{children:"Retained by your operator per their own retention policy; typically 5–7 years for tax records"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"Crash and diagnostic logs"}),s.jsx("td",{children:"180 days"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"Backups"}),s.jsx("td",{children:"Rolling 90-day encrypted backups; deleted data expires within this window"})]})]})]})})]}),s.jsxs(ee,{children:[s.jsx("h2",{children:"8. Your rights"}),s.jsx("p",{children:"You can:"}),s.jsxs("ul",{children:[s.jsx("li",{children:"Ask what we hold about you and request a copy."}),s.jsx("li",{children:"Correct anything inaccurate."}),s.jsxs("li",{children:["Delete your account and associated personal data — see the"," ",s.jsx("a",{href:ut("/account-deletion"),children:"account deletion page"})," for the in-app and web paths."]}),s.jsx("li",{children:"Object to specific processing where we rely on legitimate interest."}),s.jsx("li",{children:"Lodge a complaint with the relevant supervisory authority."})]}),s.jsxs("p",{children:["To exercise any of these, email"," ",s.jsx("a",{href:`mailto:${xe.supportEmail}`,children:xe.supportEmail}),". We respond within 30 days."]})]}),s.jsxs(ee,{children:[s.jsx("h2",{children:"9. Children"}),s.jsx("p",{children:"SenditGo is a workplace app for professional drivers and dispatchers. It is not directed at, and we do not knowingly collect data from, anyone under 16."})]}),s.jsxs(ee,{children:[s.jsx("h2",{children:"10. Security"}),s.jsx("p",{children:"Traffic is encrypted in transit (TLS 1.2+). Production data is encrypted at rest. Access is restricted by role and audited. We rotate secrets and patch dependencies on a regular cycle. If we ever experience a breach affecting your personal data, we will notify you and the relevant authority in line with applicable law."})]}),s.jsxs(ee,{children:[s.jsx("h2",{children:"11. Changes to this policy"}),s.jsx("p",{children:"We will update this policy as the product and the law evolve. The “Last updated” date at the top of this page reflects the latest revision. Material changes will be highlighted in the app and on the home page before they take effect."})]}),s.jsxs(ee,{children:[s.jsx("h2",{children:"12. Contact"}),s.jsxs("p",{children:[xe.legalName,s.jsx("br",{}),xe.address,s.jsx("br",{}),"Email:"," ",s.jsx("a",{href:`mailto:${xe.supportEmail}`,children:xe.supportEmail})]})]})]});f.form`
  display: grid;
  gap: 14px;
  font-family: ${E};
`;f.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;const kf=`
  width: 100%;
  padding: 14px 16px;
  border-radius: 12px;
  font-size: 15px;
  font-family: ${E};
  transition: border-color 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;

  &:focus {
    outline: none;
  }
`;f.input`
  ${kf};
  background: var(--v29-page);
  border: 1px solid var(--v29-line-soft);
  color: var(--v29-text);

  &::placeholder {
    color: var(--v29-muted);
  }
  &:focus {
    background: var(--v29-card);
    border-color: var(--v29-primary);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--v29-primary) 20%, transparent);
  }
`;f.textarea`
  ${kf};
  background: var(--v29-page);
  border: 1px solid var(--v29-line-soft);
  color: var(--v29-text);
  min-height: 120px;
  resize: vertical;

  &::placeholder {
    color: var(--v29-muted);
  }
  &:focus {
    background: var(--v29-card);
    border-color: var(--v29-primary);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--v29-primary) 20%, transparent);
  }
`;f.button`
  justify-self: end;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 26px;
  border-radius: 8px;
  background: var(--v29-primary);
  color: #fff;
  font-family: ${E};
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.01em;
  border: none;
  cursor: pointer;
  transition: transform 0.15s ease, background 0.15s ease;

  &:hover:not(:disabled) {
    background: var(--v29-primary-hover);
    transform: translateY(-1px);
  }
  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`;f.p`
  margin: 4px 0 0;
  font-family: ${E};
  font-size: 14px;
  color: ${t=>t.$kind==="success"?"var(--v29-success, #1B7F4B)":"var(--v29-danger, #C0392B)"};
`;f.p`
  margin: -8px 0 0;
  font-family: ${E};
  font-size: 13px;
  color: var(--v29-danger, #C0392B);
`;f.ol`
  counter-reset: step;
  list-style: none;
  margin: 0 0 24px;
  padding: 0;
  display: grid;
  gap: 12px;
`;f.li`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  font-family: ${E};
  font-size: 15px;
  line-height: 1.65;
  color: var(--v29-muted);

  strong {
    color: var(--v29-text);
    font-weight: 600;
  }

  &::before {
    counter-increment: step;
    content: counter(step);
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    margin-top: 1px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: var(--v29-primary);
    color: #FFF;
    font-family: ${E};
    font-size: 13px;
    font-weight: 600;
    display: grid;
    place-items: center;
  }

  strong {
    color: var(--v29-text);
    font-weight: 600;
  }
`;f.div`
  background: var(--v29-card);
  border-radius: 14px;
  padding: 16px 20px;
  font-family: ${E};
  font-size: 14.5px;
  line-height: 1.65;
  color: var(--v29-muted);
  margin: 0 0 16px;
  box-shadow: 0 4px 24px -8px rgba(0, 0, 0, 0.15);
  border: 1px solid var(--v29-line-soft);
`;f.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin: 12px 0 16px;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;f.div`
  border-radius: 14px;
  padding: 20px 22px;
  background: var(--v29-card);
  box-shadow: 0 4px 24px -8px rgba(0, 0, 0, 0.15);
  border: 1px solid var(--v29-line-soft);

  h3 {
    margin: 0 0 10px;
    font-family: ${E};
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--v29-muted);
  }
  ul {
    margin: 0;
    padding-left: 18px;
    font-family: ${E};
    font-size: 14px;
    line-height: 1.6;
    color: var(--v29-muted);
  }
  li {
    margin-bottom: 6px;
  }
`;f.div`
  background: var(--v29-card);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 24px -8px rgba(0, 0, 0, 0.15);
  border: 1px solid var(--v29-line-soft);
`;const Ij=()=>s.jsxs(On,{children:[s.jsx(nr,{children:"Account support"}),s.jsx(Ar,{children:"Delete your account."}),s.jsx(ee,{children:s.jsxs("p",{children:["For help with your account, email ",s.jsx("a",{href:`mailto:${xe.supportEmail}`,children:xe.supportEmail}),"."]})})]}),zd=f.table`
  width: 100%;
  border-collapse: collapse;
  margin: 8px 0 16px;
  font-family: ${E};
  font-size: 14.5px;
  line-height: 1.6;

  th, td {
    text-align: left;
    padding: 14px 16px;
    border-bottom: 1px solid var(--v29-line-soft);
    vertical-align: top;
    color: var(--v29-muted);
  }
  th {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--v29-muted);
  }
  tbody tr:last-child td {
    border-bottom: none;
  }
  strong {
    color: var(--v29-text);
    font-weight: 600;
  }
`,Qe=f.span`
  display: inline-flex;
  font-family: ${E};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 999px;
  /* Pills must stay on a single line — wrapping ("Active shift /
     only") reads as unintentional and looks unprofessional next to
     the firm one-word badges around it. */
  white-space: nowrap;
  background: ${t=>t.$tone==="yes"?"var(--v29-primary)":t.$tone==="no"?"rgba(234, 129, 24, 0.12)":"var(--v29-line-soft)"};
  color: ${t=>t.$tone==="yes"?"#FFFFFF":t.$tone==="no"?nt:"var(--v29-text)"};
`,Rj=f.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin: 12px 0 32px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`,Ga=f.div`
  background: var(--v29-card);
  border-radius: 16px;
  padding: 20px 22px;
  font-family: ${E};
  box-shadow: 0 4px 24px -8px rgba(0, 0, 0, 0.15);
  border: 1px solid var(--v29-line-soft);

  strong {
    display: block;
    color: var(--v29-text);
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 6px;
    letter-spacing: 0.01em;
  }
  span {
    font-size: 13.5px;
    color: var(--v29-muted);
    line-height: 1.6;
  }
`,Cj=()=>s.jsxs(On,{children:[s.jsx(nr,{children:"Data Safety Disclosure"}),s.jsx(Ar,{children:"What we collect, why, and who receives it."}),s.jsxs(Pi,{children:["This Disclosure sets out the categories of personal data that"," ",xe.legalName," (“Senditgo”, “we” or “us”) collects through the SenditGo driver application, the purposes for which it is processed, and the third parties with whom it is shared. It is published in conjunction with, and maintained to mirror, the data declarations made in our Apple App Store and Google Play listings, in accordance with the Australian Privacy Act 1988 (Cth), the Australian Privacy Principles, and applicable store policies."]}),s.jsxs(Rj,{children:[s.jsxs(Ga,{children:[s.jsx("strong",{children:"No third-party advertising"}),s.jsx("span",{children:"Senditgo does not serve third-party advertising within the application and does not construct advertising or behavioural profiles from user data."})]}),s.jsxs(Ga,{children:[s.jsx("strong",{children:"No sale of personal data"}),s.jsx("span",{children:"Senditgo does not sell, rent, or otherwise transfer personal data to data brokers, marketing intermediaries, or unaffiliated third parties."})]}),s.jsxs(Ga,{children:[s.jsx("strong",{children:"Encryption in transit and at rest"}),s.jsx("span",{children:"Communications between the application and our servers are protected by TLS 1.2 or higher. Production data is encrypted at rest under managed keys."})]})]}),s.jsxs(ee,{children:[s.jsx("h2",{children:"Data we collect"}),s.jsxs(zd,{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Type"}),s.jsx("th",{children:"Purpose"}),s.jsx("th",{children:"Required?"}),s.jsx("th",{children:"Linked to you"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"Mobile number"})}),s.jsx("td",{children:"Account creation, OTP sign-in"}),s.jsx("td",{children:s.jsx(Qe,{$tone:"yes",children:"Required"})}),s.jsx("td",{children:s.jsx(Qe,{$tone:"yes",children:"Yes"})})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"Name & email"})}),s.jsx("td",{children:"Identifying you to your operator, contact"}),s.jsx("td",{children:s.jsx(Qe,{$tone:"yes",children:"Required"})}),s.jsx("td",{children:s.jsx(Qe,{$tone:"yes",children:"Yes"})})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"Precise location"})}),s.jsx("td",{children:"Live driver tracking, ETA, geofence events"}),s.jsx("td",{children:s.jsx(Qe,{$tone:"opt",children:"Active shift only"})}),s.jsx("td",{children:s.jsx(Qe,{$tone:"yes",children:"Yes"})})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"Photos & signatures"})}),s.jsx("td",{children:"Proof of delivery captured at the door"}),s.jsx("td",{children:s.jsx(Qe,{$tone:"opt",children:"Per delivery"})}),s.jsx("td",{children:s.jsx(Qe,{$tone:"yes",children:"Yes"})})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"In-app messages"})}),s.jsx("td",{children:"Driver ↔ dispatcher coordination"}),s.jsx("td",{children:s.jsx(Qe,{$tone:"opt",children:"Optional"})}),s.jsx("td",{children:s.jsx(Qe,{$tone:"yes",children:"Yes"})})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"Device & app info"})}),s.jsx("td",{children:"Crash reports, performance diagnostics"}),s.jsx("td",{children:s.jsx(Qe,{$tone:"yes",children:"Required"})}),s.jsx("td",{children:s.jsx(Qe,{$tone:"opt",children:"Pseudonymous"})})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"Push notification token"})}),s.jsx("td",{children:"Job assignments, dispatcher messages"}),s.jsx("td",{children:s.jsx(Qe,{$tone:"opt",children:"Optional"})}),s.jsx("td",{children:s.jsx(Qe,{$tone:"yes",children:"Yes"})})]})]})]})]}),s.jsxs(ee,{children:[s.jsx("h2",{children:"Who we share data with"}),s.jsxs(zd,{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Recipient"}),s.jsx("th",{children:"What they receive"}),s.jsx("th",{children:"Why"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"Your operator"})}),s.jsx("td",{children:"Shift activity, route, proof-of-delivery records"}),s.jsx("td",{children:"Running their dispatch operation; their legitimate business records"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"Cloud hosting (AWS)"})}),s.jsx("td",{children:"All production data, encrypted"}),s.jsx("td",{children:"Infrastructure provider, bound by data-processing agreement"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"Map tiles (Mapbox)"})}),s.jsx("td",{children:"Anonymised location to fetch map tiles"}),s.jsx("td",{children:"Render maps inside the app"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"Push delivery (Apple/Google)"})}),s.jsx("td",{children:"Push token + payload metadata"}),s.jsx("td",{children:"Deliver notifications to your device"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"Crash reporting"})}),s.jsx("td",{children:"Crash stack trace, device model, OS version"}),s.jsx("td",{children:"Diagnose and fix bugs"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"Authorities"})}),s.jsx("td",{children:"Only what a valid legal order under Australian law requires"}),s.jsx("td",{children:"Legal compliance"})]})]})]})]}),s.jsxs(ee,{children:[s.jsx("h2",{children:"User controls"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Location."})," Precise location is collected only while a shift is active. Users may revoke the operating system location permission at any time, in which case the application reverts to a reduced-precision mode."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Push notifications."})," Notifications are optional and may be disabled in system settings without affecting other functionality."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Account and data deletion."})," Deletion is available both in-application and via the web. See the dedicated"," ",s.jsx("a",{href:ut("/account-deletion"),children:"account deletion"})," page for the relevant procedure."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Access, correction, and complaint."})," Users may exercise their statutory rights under the Australian Privacy Act 1988 (Cth) — including the right to lodge a complaint with the Office of the Australian Information Commissioner (OAIC) — as described in the ",s.jsx("a",{href:ut("/privacy"),children:"privacy policy"}),"."]})]})]}),s.jsxs(ee,{children:[s.jsx("h2",{children:"Publication and reconciliation"}),s.jsxs("p",{children:["This page constitutes the authoritative record of Senditgo’s data declarations. Identical content is published in the"," ",s.jsx("strong",{children:"Data Safety"})," section of our Google Play listing and in the ",s.jsx("strong",{children:"Privacy Nutrition Labels"})," on our Apple App Store listing. Where a discrepancy is identified between this page and the store declarations, the matter may be reported to"," ",s.jsx("a",{href:`mailto:${xe.supportEmail}`,children:xe.supportEmail})," ","and Senditgo will reconcile the records within fourteen (14) days."]})]}),s.jsxs(ee,{children:[s.jsx("h2",{children:"Further information"}),s.jsxs("p",{children:["For a fuller description of how personal data is collected, the legal bases on which it is processed, retention periods, international transfers, and the rights available to users, please refer to the",s.jsx("a",{href:ut("/privacy"),children:" Senditgo Privacy Policy"}),". General enquiries may be directed to"," ",s.jsx("a",{href:`mailto:${xe.supportEmail}`,children:xe.supportEmail}),"."]})]})]}),Vi={hero:ut("/videos/broll/broll-hero-melbourne-dusk.mp4"),cta:ut("/videos/broll/broll-warehouse-aisle.mp4"),heroPoster:ut("/images/broll/broll-hero-melbourne-dusk-poster.jpg"),ctaPoster:ut("/images/broll/broll-warehouse-aisle-poster.jpg")},Oj=f.div`
  background: var(--v29-page);
  color: var(--v29-text);
  font-family: ${E};
  -webkit-font-smoothing: antialiased;
  transition: background 0.3s ease, color 0.3s ease;

  &[data-motion-paused='true'] *,
  &[data-motion-paused='true'] *::before,
  &[data-motion-paused='true'] *::after {
    animation-play-state: paused !important;
  }
`,vr=f.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 var(--page-gutter);
`,Tl=f.section`
  position: relative;
  padding: var(--section-space) 0;
  background: ${t=>t.$alt?"var(--v29-surface-alt)":"transparent"};
`,Aj=f(Tl)`
  padding-bottom: clamp(20px, 2.5vw, 36px);
`,Hd=f.p`
  font-family: ${E};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--v29-eyebrow-text);
  margin: 0 0 14px;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${nt};
    ${t=>t.$glow&&`box-shadow: 0 0 6px ${nt};`}
  }
`,Pj=f.section`
  position: relative;
  z-index: 5;
  background: var(--v29-surface-alt);
  padding: var(--section-space) 0;
  border-top: 1px solid var(--v29-line-soft);
`,Nj=f.div`
  margin: 0 0 var(--section-content-gap);
`,Lj=f.h2`
  font-family: ${Ue};
  font-style: italic;
  font-weight: 700;
  font-size: clamp(1.9rem, 1.3rem + 2.6vw, 3rem);
  letter-spacing: 0.01em;
  line-height: 1.08;
  color: var(--v29-text);
  margin: 0;
  max-width: 18ch;
  .accent {
    color: var(--v29-accent-display);
  }
`,$j=f.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: clamp(14px, 1.4vw, 20px);
  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`,Ke=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  min-height: 260px;
  padding: 32px 24px 24px;
  text-decoration: none;
  color: var(--v29-text);
  background: var(--v29-card);
  border: 1px solid var(--v29-line-soft);
  border-radius: 16px;
  box-shadow: var(--v29-card-shadow);
  transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;

  &:hover,
  &:focus-visible {
    transform: translateY(-2px);
    border-color: var(--v29-line);
    box-shadow: var(--v29-card-shadow-hover);
  }
  /* Keyboard focus shows the same ring as the page's other controls. */
  &:focus-visible {
    outline: 2px solid var(--v29-primary);
    outline-offset: 2px;
  }

  &:hover > *,
  &:focus-visible > * {
    animation-play-state: running;
  }
`,Wi=f.div`
  text-align: center;
  .label {
    font-family: ${Ue};
    font-size: clamp(1.15rem, 1rem + 0.5vw, 1.3rem);
    font-weight: 700;
    font-style: italic;
    letter-spacing: -0.01em;
    line-height: 1.2;
    color: var(--v29-text);
    margin: 0;
  }
  .desc {
    font-family: ${E};
    font-size: 14px;
    line-height: 1.6;
    color: var(--v29-muted);
    margin: 12px 0 0;
  }
`,oa=f.div`
  position: relative;
  width: 160px;
  height: 160px;
  overflow: visible;
`,Dj=f(oa)`
  .radar-grid {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: none;
  }
  .grid-circle {
    stroke: var(--v29-line-soft);
    stroke-width: 1;
    opacity: 0.6;
  }
  .grid-axis {
    stroke: var(--v29-line-soft);
    stroke-width: 1;
    opacity: 0.5;
    stroke-dasharray: 2 4;
  }
  .radar-sweep {
    position: absolute;
    top: 10%;
    left: 10%;
    width: 80%;
    height: 80%;
    border-radius: 50%;
    background: conic-gradient(
      from 0deg,
      rgba(0, 127, 255, 0.25) 0%,
      rgba(0, 127, 255, 0.08) 15%,
      transparent 40%,
      transparent 100%
    );
    z-index: 2;
    animation: radarScan 4s linear infinite;
    transform-origin: center;
  }
  .radar-node {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    z-index: 3;
  }
  .n1 {
    top: 35%;
    left: 65%;
    background: ${nt};
    animation: radarPing1 4s linear infinite;
  }
  .n2 {
    top: 70%;
    left: 60%;
    background: ${ht};
    animation: radarPing2 4s linear infinite;
  }
  .n3 {
    top: 60%;
    left: 30%;
    background: ${nt};
    animation: radarPing3 4s linear infinite;
  }
  .n4 {
    top: 25%;
    left: 40%;
    background: ${ht};
    animation: radarPing4 4s linear infinite;
  }
  .radar-sweep,
  .n1,
  .n2,
  .n3,
  .n4 {
    animation-play-state: paused;
  }
  @keyframes radarScan {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes radarPing1 {
    0%,
    8% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.8);
    }
    12.5% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1.3);
    }
    22%,
    100% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.8);
    }
  }
  @keyframes radarPing2 {
    0%,
    35% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.8);
    }
    40% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1.3);
    }
    50%,
    100% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.8);
    }
  }
  @keyframes radarPing3 {
    0%,
    57% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.8);
    }
    62.5% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1.3);
    }
    72%,
    100% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.8);
    }
  }
  @keyframes radarPing4 {
    0%,
    85% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.8);
    }
    90% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1.3);
    }
    98%,
    100% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.8);
    }
  }
  ${Ke}:focus-visible &,
  ${Ke}[data-play='on'] & {
    .radar-sweep,
    .n1,
    .n2,
    .n3,
    .n4 {
      animation-play-state: running;
    }
  }
  /* Only where there is something to hover with: on a touch screen a tap
     leaves :hover stuck, and the picture would loop until the next tap. */
  @media (hover: hover) {
    ${Ke}:hover & {
      .radar-sweep,
      .n1,
      .n2,
      .n3,
      .n4 {
        animation-play-state: running;
      }
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .radar-sweep,
    .n1,
    .n2,
    .n3,
    .n4 {
      animation: none;
    }
    .n1,
    .n3 {
      opacity: 0.8;
    }
  }
`,Mj=f(oa)`
  svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    fill: none;
  }
  .axis {
    stroke: var(--v29-line-soft);
    stroke-width: 1.5;
    stroke-linecap: round;
  }
  .bar {
    fill: rgba(0, 127, 255, 0.14);
    stroke: ${ht};
    stroke-width: 1.5;
    stroke-opacity: 0.55;
    transform-box: fill-box;
    transform-origin: bottom;
  }
  .b4 {
    fill: rgba(0, 127, 255, 0.5);
    stroke-opacity: 1;
  }
  .trend,
  .trend-head {
    stroke: ${nt};
    stroke-width: 2.5;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  .trend {
    stroke-dasharray: 116;
    stroke-dashoffset: 0;
  }
  .b2 {
    animation: costDrop2 4s ease-in-out infinite;
  }
  .b3 {
    animation: costDrop3 4s ease-in-out infinite;
  }
  .b4 {
    animation: costDrop4 4s ease-in-out infinite;
  }
  .trend {
    animation: costTrend 4s ease-in-out infinite;
  }
  .trend-head {
    animation: costHead 4s ease-in-out infinite;
  }
  .b2,
  .b3,
  .b4,
  .trend,
  .trend-head {
    animation-play-state: paused;
  }
  /* 0% is the finished picture, so the paused plate reads correctly. */
  @keyframes costDrop2 {
    0%,
    70%,
    100% {
      transform: scaleY(1);
    }
    12%,
    24% {
      transform: scaleY(1.31);
    }
  }
  @keyframes costDrop3 {
    0%,
    70%,
    100% {
      transform: scaleY(1);
    }
    12%,
    24% {
      transform: scaleY(1.83);
    }
  }
  @keyframes costDrop4 {
    0%,
    70%,
    100% {
      transform: scaleY(1);
    }
    12%,
    24% {
      transform: scaleY(2.8);
    }
  }
  @keyframes costTrend {
    0%,
    70%,
    100% {
      stroke-dashoffset: 0;
    }
    12%,
    24% {
      stroke-dashoffset: 116;
    }
  }
  @keyframes costHead {
    0%,
    72%,
    100% {
      opacity: 1;
    }
    12%,
    62% {
      opacity: 0;
    }
  }
  ${Ke}:focus-visible &,
  ${Ke}[data-play='on'] & {
    .b2,
    .b3,
    .b4,
    .trend,
    .trend-head {
      animation-play-state: running;
    }
  }
  @media (hover: hover) {
    ${Ke}:hover & {
      .b2,
      .b3,
      .b4,
      .trend,
      .trend-head {
        animation-play-state: running;
      }
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .b2,
    .b3,
    .b4,
    .trend,
    .trend-head {
      animation: none;
    }
  }
`,Fj=f(oa)`
  svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    fill: none;
  }
  .orbit {
    transform-origin: 80px 80px;
    animation: returnLoop 6s linear infinite;
    animation-play-state: paused;
  }
  .loop,
  .loop-head {
    stroke: ${ht};
    stroke-width: 2.5;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-opacity: 0.75;
  }
  .house {
    fill: rgba(0, 127, 255, 0.12);
    stroke: ${ht};
    stroke-width: 2;
    stroke-linejoin: round;
  }
  .check {
    stroke: ${nt};
    stroke-width: 3;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  @keyframes returnLoop {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  ${Ke}:focus-visible &,
  ${Ke}[data-play='on'] & {
    .orbit {
      animation-play-state: running;
    }
  }
  @media (hover: hover) {
    ${Ke}:hover & {
      .orbit {
        animation-play-state: running;
      }
    }
  }
  /* On a touch screen the turn starts by itself, so it is over within five
     seconds like the other three. */
  @media (hover: none), (pointer: coarse) {
    .orbit {
      animation-duration: 5s;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .orbit {
      animation: none;
    }
  }
`,Uj=f(oa)`
  svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    fill: none;
  }
  .face {
    fill: rgba(0, 127, 255, 0.05);
    stroke: var(--v29-line-soft);
    stroke-width: 1.5;
  }
  .tick {
    stroke: var(--v29-muted);
    stroke-width: 1.5;
    stroke-linecap: round;
    opacity: 0.55;
  }
  .saved {
    stroke: ${nt};
    stroke-width: 6;
    stroke-linecap: round;
    stroke-dasharray: 118;
    stroke-dashoffset: 0;
    animation: timeSaved 5s ease-in-out infinite;
  }
  .hand {
    stroke: var(--v29-text);
    stroke-width: 3;
    stroke-linecap: round;
  }
  .hand-moving {
    transform-origin: 80px 80px;
    transform: rotate(120deg);
    animation: timeHand 5s ease-in-out infinite;
  }
  .pin {
    fill: ${ht};
  }
  .saved,
  .hand-moving {
    animation-play-state: paused;
  }
  /* 0% is the finished picture, so the paused plate reads correctly. The
     hand only ever turns anticlockwise: it winds back to twelve, holds,
     fades, and reappears at four. */
  @keyframes timeSaved {
    0%,
    8% {
      stroke-dashoffset: 0;
      opacity: 1;
    }
    58%,
    74% {
      stroke-dashoffset: 118;
      opacity: 1;
    }
    80% {
      stroke-dashoffset: 118;
      opacity: 0;
    }
    80.01% {
      stroke-dashoffset: 0;
      opacity: 0;
    }
    92%,
    100% {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }
  @keyframes timeHand {
    0%,
    8% {
      transform: rotate(120deg);
      opacity: 1;
    }
    58%,
    74% {
      transform: rotate(0deg);
      opacity: 1;
    }
    80% {
      transform: rotate(0deg);
      opacity: 0;
    }
    80.01% {
      transform: rotate(120deg);
      opacity: 0;
    }
    92%,
    100% {
      transform: rotate(120deg);
      opacity: 1;
    }
  }
  ${Ke}:focus-visible &,
  ${Ke}[data-play='on'] & {
    .saved,
    .hand-moving {
      animation-play-state: running;
    }
  }
  @media (hover: hover) {
    ${Ke}:hover & {
      .saved,
      .hand-moving {
        animation-play-state: running;
      }
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .saved,
    .hand-moving {
      animation: none;
    }
  }
`,Bj=f.h2`
  font-family: ${Ue};
  font-style: italic;
  font-weight: 700;
  font-size: clamp(1.9rem, 1.3rem + 2.6vw, 3rem);
  letter-spacing: 0.01em;
  line-height: 1.08;
  margin: 0 0 16px;
  color: var(--v29-text);
`,zj=f.p`
  font-size: clamp(1rem, 0.95rem + 0.3vw, 1.125rem);
  line-height: 1.65;
  color: var(--v29-muted);
  max-width: 56ch;
  margin: 0;
`,Hj=f.nav`
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 60;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px clamp(20px, 4vw, 48px);
  background: var(--v29-nav);
  backdrop-filter: saturate(140%) blur(18px);
  -webkit-backdrop-filter: saturate(140%) blur(18px);
  border-bottom: 1px solid var(--v29-line-soft);
  /* Guide rule: on dark, the logomark keeps full colour and only the
     logotype reverses to white (BrandLogo reads --brand-logo-color). */
  --brand-logo-color: #ffffff;
  [data-theme='light'] & {
    --brand-logo-color: ${Zo};
  }
`,Vj=f.div`
  display: flex;
  align-items: center;
  gap: 12px;
  @media (max-width: 480px) {
    gap: 8px;
  }
`,Wj=f.span`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  .nav-mark {
    display: none;
  }
  @media (max-width: 480px) {
    ${({$compact:t})=>t?`
      .nav-wordmark { display: none; }
      .nav-mark { display: inline-flex; }
    `:""}
  }
`,qj=f.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid var(--v29-line);
  background: transparent;
  color: ${ht};
  cursor: pointer;
  transition: border-color 0.25s ease, background 0.25s ease;
  svg {
    width: 16px;
    height: 16px;
    display: block;
  }
  &:hover {
    border-color: ${ht};
    background: rgba(0, 127, 255, 0.08);
  }
  &:focus-visible {
    outline: 2px solid ${ht};
    outline-offset: 2px;
  }
  @media (max-width: 480px) {
    width: 44px;
    height: 44px;
  }
`,Kj=f(De)`
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 8px;
  font-family: ${Ue};
  font-style: italic;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
  @media (max-width: 480px) {
    min-height: 44px;
    ${({$hideOnNarrow:t})=>t?"display: none;":""}
  }
  /* Narrow phones: a tighter button, so its words stay on one line down to
     about 350 px and the logo keeps some air beside it. */
  @media (max-width: 380px) {
    padding: 10px 12px;
    letter-spacing: 0.06em;
  }
  ${({$ghost:t})=>t?`
    border: 1.5px solid var(--v29-line);
    background: transparent;
    color: var(--v29-text);
    &:hover {
      border-color: var(--v29-primary);
      background: color-mix(in srgb, var(--v29-primary) 8%, transparent);
      transform: translateY(-1px);
    }
    &:focus-visible {
      outline: 2px solid var(--v29-primary);
      outline-offset: 2px;
    }
  `:`
    background: ${us};
    color: #fff;
    &:hover { background: ${us}; transform: translateY(-1px); }
    &:focus-visible {
      outline: 2px solid var(--v29-primary);
      outline-offset: 2px;
    }
  `}
`,Gj=f.header`
  position: relative;
  min-height: 100vh;
  padding-bottom: var(--cookie-consent-offset, 0px);
  display: flex;
  align-items: center;
  background: #071120;
`,Zj=f.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
`,Yj=f.div`
  position: absolute;
  inset: 0;
  background: rgba(7, 17, 32, 0.55);
`,Jj=f(vr)`
  position: relative;
  z-index: 2;
  width: 100%;
  padding-top: 120px;
  padding-bottom: 72px;
`,Xj=f(Go.div)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border-radius: 999px;
  border: 1px solid rgba(0, 127, 255, 0.25);
  background: rgba(12, 27, 51, 0.6);
  backdrop-filter: blur(12px);
  color: #f4f7fb;
  font-family: ${E};
  font-size: 11.5px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 28px;
  align-self: flex-start;
  width: fit-content;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);

  /* Two lines on phones, breaking between the two sentences. */
  @media (max-width: 464px) {
    max-width: 308px;
    align-items: flex-start;
    border-radius: 18px;
    .dot {
      margin-top: 5px;
    }
  }

  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${nt};
    flex-shrink: 0;
    box-shadow: 0 0 8px ${nt};
    animation: badge-pulse 2s infinite ease-in-out;
    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  }

  @keyframes badge-pulse {
    0% {
      transform: scale(1);
      box-shadow: 0 0 4px ${nt};
      opacity: 1;
    }
    50% {
      transform: scale(1.4);
      box-shadow: 0 0 12px ${nt};
      opacity: 0.8;
    }
    100% {
      transform: scale(1);
      box-shadow: 0 0 4px ${nt};
      opacity: 1;
    }
  }
`,Qj=f.h1`
  font-family: ${Ue};
  font-style: italic;
  font-weight: 700;
  /* The second term keeps "Fleet-wide" whole on a phone-width column. */
  font-size: clamp(2rem, min(1.6rem + 5.2vw, (100vw - 40px) / 8.45), 5rem);
  line-height: 1.04;
  letter-spacing: 0.005em;
  color: #fff;
  margin: 0 0 20px;
  max-width: 17ch;
  .go {
    color: ${ht};
  }
`,eE=f.p`
  font-size: clamp(1.05rem, 1rem + 0.35vw, 1.2rem);
  line-height: 1.6;
  color: #c3d2e6;
  max-width: 52ch;
  margin: 0 0 36px;
`,Vd=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 48px;
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
    a {
      justify-content: center;
      min-height: 48px;
    }
  }
`,Wd=f(De)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  border-radius: 8px;
  background: ${us};
  color: #fff;
  font-family: ${Ue};
  font-style: italic;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.2s ease;
  &:hover {
    background: ${us};
    transform: translateY(-1px);
  }
`,tE=f.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  border-radius: 8px;
  border: 1.5px solid rgba(255, 255, 255, 0.55);
  background: transparent;
  color: #fff;
  font-family: ${Ue};
  font-style: italic;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: #fff;
  }
`,qd=f(Tl)`
  scroll-margin-block-start: var(--nav-h, 73px);
  padding-block: var(--section-space);
  @media (min-width: 1000px) and (max-height: 940px) {
    &#sam { padding-block: 12px; }
  }
`,Kd=f(vr)`
  max-width: var(--walkthrough-width);
`,nE=f.section`
  position: relative;
  min-height: clamp(320px, 52vh, 520px);
  display: flex;
  align-items: center;
  background: #071120;
  overflow: hidden;
`,rE=f.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.45;
`,iE=f(vr)`
  position: relative;
  z-index: 2;
  text-align: center;
  padding-top: 72px;
  padding-bottom: 72px;
  h2 {
    font-family: ${Ue};
    font-style: italic;
    font-weight: 700;
    font-size: clamp(2.2rem, 1.5rem + 3.6vw, 3.8rem);
    color: #fff;
    margin: 0 0 14px;
  }
  p {
    color: #c3d2e6;
    font-size: 1.05rem;
    margin: 0 0 32px;
  }
`,sE="(hover: none), (pointer: coarse)",Gd=.6;function aE(){const t=S.useRef(null);return S.useEffect(()=>{const e=t.current;if(!e||typeof IntersectionObserver!="function"||typeof window.matchMedia!="function"||!window.matchMedia(sE).matches)return;const n=[...e.children],r=new IntersectionObserver(o=>{o.forEach(l=>{l.intersectionRatio>=Gd&&(l.target.dataset.play="on")})},{threshold:Gd}),i=o=>{o.currentTarget.dataset.play="on"},a=o=>{delete o.currentTarget.dataset.play};return n.forEach(o=>{r.observe(o),o.addEventListener("click",i),o.addEventListener("animationiteration",a)}),()=>{r.disconnect(),n.forEach(o=>{o.removeEventListener("click",i),o.removeEventListener("animationiteration",a),delete o.dataset.play})}},[]),t}const oE=()=>{const t=Rm(),e=S.useRef(null);S.useLayoutEffect(()=>{const h=()=>{var m;const p=window.location.hash.slice(1);if(["sam","sam-steps","fleet-walkthrough","fleet-toolkit","sam-options","fleet-recordings","activity","fleet-insights","fleet-features","platform","delivery-proof","delivery-tracking"].includes(p)){const x=["fleet-walkthrough","fleet-recordings","fleet-insights"].includes(p)?"console":p==="fleet-toolkit"?"fleet-features":p==="sam-options"?"sam":p==="delivery-proof"?"platform":p;(m=document.getElementById(x))==null||m.scrollIntoView({block:"start",behavior:"instant"})}};return h(),window.addEventListener("hashchange",h),()=>window.removeEventListener("hashchange",h)},[]);const n=aE(),{mode:r,toggleTheme:i}=Ws(),a=rl(),o=a.length>0,l=a.some(h=>h.role==="shipper"),c=ra(),d=S.useRef(null),u=S.useRef(null);return S.useEffect(()=>{var y;const h=[...((y=e.current)==null?void 0:y.querySelectorAll("video[data-page-video]"))??[]],p=b=>{var w;const _=b.getBoundingClientRect(),j=_.bottom>0&&_.top<window.innerHeight;t||document.hidden||!j||b.dataset.active==="false"?b.pause():(w=b.play())==null||w.catch(()=>{})},m=new IntersectionObserver(b=>{b.forEach(_=>p(_.target))}),x=()=>h.forEach(p);return h.forEach(b=>m.observe(b)),x(),document.addEventListener("visibilitychange",x),()=>{m.disconnect(),document.removeEventListener("visibilitychange",x),h.forEach(b=>b.pause())}},[t,r]),s.jsxs(Oj,{ref:e,"data-motion-paused":t,children:[s.jsx(qs,{}),s.jsxs(Hj,{ref:u,children:[s.jsxs(Wj,{$compact:o,role:"img","aria-label":"SenditGo",children:[s.jsx("span",{className:"nav-wordmark","aria-hidden":"true",children:s.jsx(ds,{height:30,ariaLabel:""})}),s.jsx("span",{className:"nav-mark","aria-hidden":"true",children:s.jsx(ds,{height:30,variant:"mark",ariaLabel:""})})]}),s.jsxs(Vj,{children:[s.jsx(qj,{onClick:i,"aria-label":"Toggle dark / light",children:r==="dark"?s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("circle",{cx:"12",cy:"12",r:"4"}),s.jsx("path",{d:"M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"})]}):s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})}),s.jsx(Kj,{to:"/contact",$ghost:l,$hideOnNarrow:l,children:"Get early access"}),(o||c)&&s.jsx(yf,{})]})]}),s.jsxs(Gj,{children:[s.jsx(Zj,{"data-page-video":!0,src:Vi.hero,autoPlay:!t,loop:!0,muted:!0,playsInline:!0,preload:"auto",poster:Vi.heroPoster}),s.jsx(Yj,{}),s.jsxs(Jj,{children:[s.jsxs(Xj,{initial:t?!1:{opacity:0,y:-12},animate:{opacity:1,y:0},transition:t?{duration:0}:{duration:.8,ease:Vs,delay:.08},children:[s.jsx("span",{className:"dot"}),"Intelligent transport management. Launching 2027."]}),s.jsxs(Qj,{children:["Set the outcome. Fleet-wide intelligence handles the rest",s.jsx("span",{className:"go",children:"."})]}),s.jsx(eE,{children:"SenditGo’s AI, SAM, weighs thousands of combinations across every stop, window and driver, then hands back a dispatch-ready plan in seconds—with the routes, allocations and knock-on effects already considered."}),s.jsxs(Vd,{children:[s.jsx(Wd,{to:"/contact",children:"Get early access"}),s.jsx(tE,{onClick:h=>{var p;h.preventDefault(),(p=d.current)==null||p.scrollIntoView({behavior:t?"auto":"smooth",block:"start"})},href:"#console",children:"See it in action"})]})]})]}),s.jsx(Tl,{id:"console","aria-labelledby":"product-features-title",ref:d,children:s.jsx(Kd,{children:s.jsx(Cm,{})})}),s.jsx(qd,{id:"sam","aria-labelledby":"sam-title",$alt:!0,children:s.jsxs(Kd,{children:[s.jsx(Om,{id:"sam-title"}),s.jsx(Am,{sceneId:"dispatch-scene",reducedMotion:t,renderScene:h=>s.jsx(Pm,{stage:h})})]})}),s.jsx(Nm,{navRef:u}),s.jsx(qd,{id:"delivery-tracking","aria-label":"Consignee delivery tracking",$alt:!0,children:s.jsx(vr,{children:s.jsx(Lm,{})})}),s.jsx(Aj,{id:"activity","aria-labelledby":"activity-title",children:s.jsxs(vr,{children:[s.jsx(Hd,{children:"On the road"}),s.jsx(Bj,{id:"activity-title",children:"One fleet, two periods."}),s.jsx($m,{})]})}),s.jsx(Pj,{id:"features",children:s.jsxs(vr,{children:[s.jsxs(Nj,{children:[s.jsx(Hd,{$glow:!0,children:"The difference it makes"}),s.jsxs(Lj,{children:["Not just smarter runs. ",s.jsx("br",{}),"A"," ",s.jsx("span",{className:"accent",children:"smarter operation."})]}),s.jsx(zj,{style:{margin:"18px 0 0"},children:"When the planning runs itself, everything downstream gets easier — your costs, your day, your customers, your peace of mind."})]}),s.jsxs($j,{ref:n,children:[s.jsxs(Ke,{role:"group",tabIndex:0,"aria-label":"Stop fighting fires",children:[s.jsxs(Dj,{children:[s.jsx("div",{className:"radar-sweep"}),s.jsxs("svg",{className:"radar-grid",viewBox:"0 0 160 160","aria-hidden":"true",children:[s.jsx("circle",{className:"grid-circle",cx:"80",cy:"80",r:"70"}),s.jsx("circle",{className:"grid-circle",cx:"80",cy:"80",r:"48"}),s.jsx("circle",{className:"grid-circle",cx:"80",cy:"80",r:"26"}),s.jsx("line",{className:"grid-axis",x1:"80",y1:"8",x2:"80",y2:"152"}),s.jsx("line",{className:"grid-axis",x1:"8",y1:"80",x2:"152",y2:"80"}),s.jsx("circle",{cx:"80",cy:"80",r:"2.5",fill:nt})]}),s.jsx("div",{className:"radar-node n1"}),s.jsx("div",{className:"radar-node n2"}),s.jsx("div",{className:"radar-node n3"}),s.jsx("div",{className:"radar-node n4"})]}),s.jsxs(Wi,{children:[s.jsx("p",{className:"label",children:"Stop fighting fires"}),s.jsx("p",{className:"desc",children:"Run the day, don’t rescue it. Catch the slipping run, the missed drop, the driver gone quiet — before any of it catches you."})]})]}),s.jsxs(Ke,{role:"group",tabIndex:0,"aria-label":"Leaner costs",children:[s.jsx(Mj,{children:s.jsxs("svg",{viewBox:"0 0 160 160","aria-hidden":"true",children:[s.jsx("line",{className:"axis",x1:"24",y1:"128",x2:"142",y2:"128"}),s.jsx("rect",{className:"bar b1",x:"32",y:"44",width:"18",height:"84",rx:"3"}),s.jsx("rect",{className:"bar b2",x:"60",y:"64",width:"18",height:"64",rx:"3"}),s.jsx("rect",{className:"bar b3",x:"88",y:"82",width:"18",height:"46",rx:"3"}),s.jsx("rect",{className:"bar b4",x:"116",y:"98",width:"18",height:"30",rx:"3"}),s.jsx("path",{className:"trend",d:"M 30 26 L 58 46 L 86 64 L 128 82"}),s.jsx("path",{className:"trend-head",d:"M 115 85 L 129 82.5 L 123 70"})]})}),s.jsxs(Wi,{children:[s.jsx("p",{className:"label",children:"Leaner costs"}),s.jsx("p",{className:"desc",children:"Every run, tuned to cost less. Shorter routes and smarter allocation add up — across a day, a week, a fleet."})]})]}),s.jsxs(Ke,{role:"group",tabIndex:0,"aria-label":"Customers who come back",children:[s.jsx(Fj,{children:s.jsxs("svg",{viewBox:"0 0 160 160","aria-hidden":"true",children:[s.jsxs("g",{className:"orbit",children:[s.jsx("path",{className:"loop",d:"M 80 22 A 58 58 0 1 1 29.8 51"}),s.jsx("path",{className:"loop-head",d:"M 18.9 56.1 L 29.8 51 L 30.9 63"})]}),s.jsx("path",{className:"house",d:"M 56 102 V 77 L 80 57 L 104 77 V 102 Z"}),s.jsx("path",{className:"check",d:"M 68 83 L 77 92 L 93 74"})]})}),s.jsxs(Wi,{children:[s.jsx("p",{className:"label",children:"Customers who come back"}),s.jsx("p",{className:"desc",children:"Delivery they can count on. On-time drops, live tracking, proof at the door — the reliability that turns a one-off into a regular."})]})]}),s.jsxs(Ke,{role:"group",tabIndex:0,"aria-label":"Time back in your week",children:[s.jsx(Uj,{children:s.jsxs("svg",{viewBox:"0 0 160 160","aria-hidden":"true",children:[s.jsx("circle",{className:"face",cx:"80",cy:"80",r:"56"}),s.jsx("line",{className:"tick",x1:"80",y1:"30",x2:"80",y2:"36"}),s.jsx("line",{className:"tick",x1:"130",y1:"80",x2:"124",y2:"80"}),s.jsx("line",{className:"tick",x1:"80",y1:"130",x2:"80",y2:"124"}),s.jsx("line",{className:"tick",x1:"30",y1:"80",x2:"36",y2:"80"}),s.jsx("path",{className:"saved",d:"M 80 24 A 56 56 0 0 1 128.5 108"}),s.jsx("line",{className:"hand",x1:"80",y1:"80",x2:"80",y2:"40"}),s.jsx("line",{className:"hand hand-moving",x1:"80",y1:"80",x2:"80",y2:"46"}),s.jsx("circle",{className:"pin",cx:"80",cy:"80",r:"4"})]})}),s.jsxs(Wi,{children:[s.jsx("p",{className:"label",children:"Time back in your week"}),s.jsx("p",{className:"desc",children:"Hours you’d have spent planning, returned. The engine handles the heavy lifting, so you run the business instead of the whiteboard."})]})]})]})]})}),s.jsxs(nE,{children:[s.jsx(rE,{"data-page-video":!0,src:Vi.cta,loop:!0,muted:!0,playsInline:!0,preload:"none",poster:Vi.ctaPoster}),s.jsxs(iE,{children:[s.jsx("h2",{children:"Your smartest runs start here."}),s.jsx("p",{children:"Set the outcome — early access is open now."}),s.jsx(Vd,{style:{justifyContent:"center",marginBottom:0},children:s.jsx(Wd,{to:"/contact",children:"Get early access"})})]})]}),s.jsx(sa,{}),s.jsx(aa,{})]})},Pr=f.header`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 22px;

  h2 {
    margin-bottom: 10px;
    font-size: 40px;
    line-height: 1.05;
  }

  p {
    max-width: 68ch;
  }

  @media (max-width: 720px) {
    align-items: stretch;
    flex-direction: column;

    h2 {
      font-size: 32px;
    }
  }
`,ri=f.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  flex-wrap: wrap;
`,oe=f.section`
  border-radius: var(--v29-radius-container);
  border: 1px solid var(--v29-line-soft);
  background: var(--v29-card);
  box-shadow: var(--v29-card-shadow);
  overflow: hidden;
`,ye=f.div`
  padding: 22px 24px;

  @media (max-width: 720px) {
    padding: 20px;
  }
`,lE=f.div`
  display: flex;
  align-items: flex-end;
  gap: 14px;
  flex-wrap: wrap;
  padding: 18px;
  border-bottom: 1px solid var(--v29-line-soft);
  background: var(--v29-raised);
`,Oe=f.label`
  display: grid;
  gap: 6px;
  min-width: 180px;
  font-family: ${E};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--v29-muted);
`,Ct=f.span.attrs({"aria-hidden":!0})`
  color: var(--v29-danger);
  margin-left: 2px;
`,qe=f.input`
  width: 100%;
  min-height: 42px;
  padding: 10px 12px;
  border-radius: var(--v29-radius-field);
  border: 1px solid var(--v29-line-soft);
  background: var(--v29-page);
  color: var(--v29-text);
  font-family: ${E};
  font-size: 14px;
  letter-spacing: 0;

  &:focus {
    outline: none;
    border-color: var(--v29-primary);
    box-shadow: 0 0 0 3px
      color-mix(in srgb, var(--v29-primary) 18%, transparent);
  }
`,Sf=f.select`
  appearance: none;
  min-height: 42px;
  padding: 10px 40px 10px 12px;
  border-radius: var(--v29-radius-button);
  border: 1px solid var(--v29-line-soft);
  background: var(--v29-page) var(--v29-select-caret) no-repeat right 12px
    center / 16px 16px;
  color: var(--v29-text);
  font-family: ${E};
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: var(--v29-primary);
    box-shadow: 0 0 0 3px
      color-mix(in srgb, var(--v29-primary) 18%, transparent);
  }
`,cE=f.textarea`
  width: 100%;
  min-height: 96px;
  padding: 12px;
  border-radius: var(--v29-radius-field);
  border: 1px solid var(--v29-line-soft);
  background: var(--v29-page);
  color: var(--v29-text);
  font-family: ${E};
  font-size: 14px;
  line-height: 1.5;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: var(--v29-primary);
    box-shadow: 0 0 0 3px
      color-mix(in srgb, var(--v29-primary) 18%, transparent);
  }
`,vn=f.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 42px;
  padding: 10px 18px;
  border: none;
  border-radius: var(--v29-radius-button);
  background: var(--v29-primary);
  color: var(--v29-on-primary);
  font-family: ${Ue};
  font-style: italic;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.2s ease;

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover:not(:disabled) {
    background: var(--v29-primary-hover);
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid var(--v29-primary);
    outline-offset: 2px;
  }

  &:disabled {
    background: var(--v29-line-soft);
    color: var(--v29-muted);
    cursor: not-allowed;
  }
`,we=f.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 42px;
  padding: 10px 16px;
  border-radius: var(--v29-radius-button);
  border: 1px solid var(--v29-line-soft);
  background: transparent;
  color: var(--v29-text);
  font-family: ${E};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: border-color 0.2s ease, background 0.2s ease;

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover:not(:disabled) {
    border-color: var(--v29-primary);
    background: color-mix(in srgb, var(--v29-primary) 8%, transparent);
  }

  &:focus-visible {
    outline: 2px solid var(--v29-primary);
    outline-offset: 2px;
  }

  &:disabled {
    color: var(--v29-muted);
    cursor: not-allowed;
  }
`,Kr=f(we)`
  border-color: var(--v29-danger);
  color: var(--v29-danger);

  &:hover:not(:disabled) {
    border-color: var(--v29-danger);
    background: var(--v29-danger-bg);
  }

  &:focus-visible {
    outline-color: var(--v29-danger);
  }
`,dE=f.label`
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 40px;
  padding: 4px 6px;
  border-radius: 7px;
  font-family: ${E};
  font-size: 14px;
  color: var(--v29-text);
  cursor: pointer;

  &:hover {
    background: color-mix(in srgb, var(--v29-primary) 6%, transparent);
  }

  input {
    width: 16px;
    height: 16px;
    accent-color: var(--v29-primary);
    cursor: pointer;
  }

  input:focus-visible {
    outline: 2px solid var(--v29-primary);
    outline-offset: 2px;
  }
`,Le=f.h3`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 14px;
  font-family: ${E};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--v29-muted);

  svg {
    width: 16px;
    height: 16px;
  }
`,tt=f.div`
  padding: 54px 24px;
  text-align: center;
  font-family: ${E};
  color: var(--v29-muted);
  font-size: 15px;
`,uE=f.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`,Zd=f.div`
  display: grid;
  gap: 6px;
  font-family: ${E};

  strong {
    color: var(--v29-text);
    font-size: 15px;
  }

  span {
    color: var(--v29-muted);
    font-size: 14px;
    line-height: 1.5;
  }
`,hE=f.table`
  width: 100%;
  min-width: 680px;
  border-collapse: collapse;
  font-family: ${E};
  font-size: 14px;

  th,
  td {
    padding: 12px 14px;
    border-bottom: 1px solid var(--v29-line-soft);
    text-align: left;
  }

  th {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--v29-muted);
    background: var(--v29-raised);
  }

  td {
    color: var(--v29-text);
  }
`,la=f.dl`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 16px;
  margin: 0;

  div {
    display: grid;
    gap: 5px;
  }

  dt {
    font-family: ${E};
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--v29-muted);
  }

  dd {
    margin: 0;
    font-family: ${E};
    font-size: 14px;
    color: var(--v29-text);
  }
`,Cs=f.p`
  margin: 0;
  padding: 14px 16px;
  border-radius: var(--v29-radius-container);
  background: color-mix(in srgb, var(--v29-primary) 9%, transparent);
  color: var(--v29-text);
  font-family: ${E};
  font-size: 14px;
  line-height: 1.55;
`,pE=nh`
  0%, 100% { opacity: 0.55; }
  50% { opacity: 1; }
`,at=f.div`
  height: 52px;
  margin: 10px 18px;
  border-radius: var(--v29-radius-field);
  background: var(--v29-line-soft);
  animation: ${pE} 1.4s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,et=f.p`
  margin: 0;
  font-family: ${E};
  font-size: 14px;
  line-height: 1.55;
  color: ${t=>t.$danger?"var(--v29-danger)":"var(--v29-muted)"};
`,jf=[{id:"operations",labelKey:"nav.groups.operations",items:[{id:"orders",labelKey:"nav.orders",path:"/portal/orders",permission:me.LIST},{id:"create-order",labelKey:"nav.createOrder",path:"/portal/orders/new",permission:me.ADD},{id:"import-orders",labelKey:"nav.importOrders",path:"/portal/orders/import",permission:me.IMPORT}]},{id:"finance",labelKey:"nav.groups.finance",items:[{id:"billing",labelKey:"nav.billing",path:"/portal/billing",permission:null}]},{id:"admin",labelKey:"nav.groups.admin",items:[{id:"users-roles",labelKey:"nav.usersRoles",path:"/portal/admin/users",permission:re.USER_LIST}]}],fE=f.nav`
  position: sticky;
  top: 92px;
  align-self: start;
  display: grid;
  gap: 18px;
  padding: 16px 12px 18px 0;
  border-right: 1px solid var(--v29-line-soft);

  @media (max-width: 980px) {
    position: static;
    display: flex;
    align-items: flex-start;
    gap: 20px;
    padding: 12px 0;
    border-right: none;
    border-bottom: 1px solid var(--v29-line-soft);
    overflow-x: auto;
  }

  @media (max-width: 640px) {
    flex-wrap: wrap;
    gap: 6px;
    padding: 8px 0;
    overflow-x: visible;
  }
`,mE=f.div`
  padding: 0 8px 2px;
  font-family: ${E};
  font-size: 13px;
  font-weight: 700;
  color: var(--v29-text);

  @media (max-width: 980px) {
    display: none;
  }
`,gE=f.div`
  display: grid;
  gap: 7px;
  min-width: 0;

  @media (max-width: 980px) {
    flex: 0 0 auto;
    min-width: max-content;
  }

  @media (max-width: 640px) {
    display: contents;
  }
`,xE=f.span`
  padding: 0 8px;
  font-family: ${E};
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--v29-muted);

  @media (max-width: 640px) {
    display: none;
  }
`,yE=f.div`
  display: grid;
  gap: 2px;

  @media (max-width: 980px) {
    display: flex;
    gap: 4px;
  }

  @media (max-width: 640px) {
    display: contents;
  }
`,vE=f(Dm)`
  display: inline-flex;
  align-items: center;
  min-height: 40px;
  padding: 9px 10px;
  border-radius: 7px;
  border: 1px solid transparent;
  font-family: ${E};
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0;
  text-transform: none;
  text-decoration: none;
  color: var(--v29-muted);
  white-space: nowrap;
  transition: color 0.15s ease, border-color 0.15s ease,
    background 0.15s ease;

  &:hover {
    color: var(--v29-text);
    background: var(--v29-raised);
  }
  &:focus-visible {
    outline: 2px solid var(--v29-primary);
    outline-offset: 2px;
  }
  &.active,
  &[data-active='true'] {
    color: var(--v29-primary);
    border-color: color-mix(in srgb, var(--v29-primary) 18%, transparent);
    background: color-mix(in srgb, var(--v29-primary) 10%, transparent);
  }
`,bE=()=>{const{t}=G("portal"),{pathname:e}=Ze(),n=ft(a=>a.permissionList),r=e==="/portal/orders"||e.startsWith("/portal/orders/")&&e!=="/portal/orders/new"&&e!=="/portal/orders/import",i=jf.map(a=>({...a,items:a.items.filter(o=>o.permission===null||n.includes(o.permission))})).filter(a=>a.items.length>0);return i.length===0?null:s.jsxs(fE,{"aria-label":t("nav.ariaLabel"),children:[s.jsx(mE,{children:t("nav.platform")}),i.map(a=>s.jsxs(gE,{children:[s.jsx(xE,{children:t(a.labelKey)}),s.jsx(yE,{children:a.items.map(o=>s.jsx(vE,{to:o.path,end:o.path==="/portal/orders","data-active":o.path==="/portal/orders"&&r?"true":void 0,children:t(o.labelKey)},o.id))})]},a.id))]})},wE=f.main`
  flex: 1;
  width: 100%;
  padding: ${t=>t.$authenticated?"72px 0 0":"120px clamp(20px, 4vw, 48px) 96px"};

  @media (max-width: 720px) {
    padding: ${t=>t.$authenticated?"72px 0 0":"96px 20px 64px"};
  }
`,kE=f.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 28px clamp(20px, 3vw, 44px) 56px;

  @media (max-width: 980px) {
    padding: 18px 20px 48px;
  }
`,SE=f.div`
  display: grid;
  grid-template-columns: 236px minmax(0, 1fr);
  gap: 28px;
  border-radius: 12px;
  border: 1px solid var(--v29-line-soft);
  background: var(--v29-card);
  box-shadow: var(--v29-shell-shadow);
  padding: 24px clamp(20px, 2.4vw, 32px) 32px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    gap: 18px;
    padding: 16px 18px 24px;
  }
`,jE=f.div`
  min-width: 0;
`,An=({children:t,publicChrome:e=!1})=>{const n=ra(),{mode:r,toggleTheme:i}=Ws(),a=n&&!e;return s.jsxs(s.Fragment,{children:[s.jsx(qs,{}),s.jsxs(Yo,{children:[s.jsx(El,{theme:r,onToggleTheme:i}),s.jsx(wE,{$authenticated:a,children:a?s.jsx(kE,{children:s.jsxs(SE,{children:[s.jsx(bE,{}),s.jsx(jE,{children:t})]})}):t}),!a&&s.jsx(sa,{}),s.jsx(aa,{})]})]})},Yd={senderName:"",senderMobile:"",senderAddress:"",senderPostcode:"",recipientName:"",recipientMobile:"",recipientAddress:"",recipientPostcode:"",packages:"1",weight:"",reference:"",notes:""},Jd=f.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`,Za=f.div`
  grid-column: 1 / -1;
`,EE=f.form`
  display: grid;
  gap: 18px;
`,_E=t=>{const e=Number(t.packages);return!!(t.senderName.trim()&&t.senderAddress.trim()&&t.recipientName.trim()&&t.recipientAddress.trim()&&Number.isFinite(e)&&e>0)},TE=()=>{const{t}=G(),[e,n]=S.useState(Yd),[r,i]=S.useState("idle"),a=c=>d=>{n(u=>({...u,[c]:d.target.value})),i("idle")},o=c=>{c.preventDefault(),i(_E(e)?"ready":"error")},l=()=>{n(Yd),i("idle")};return s.jsxs(An,{children:[s.jsx(Pr,{children:s.jsxs("div",{children:[s.jsx(tn,{children:t("portal:common.eyebrow")}),s.jsx(Tn,{children:t("portal:createOrder.title")}),s.jsx(nn,{children:t("portal:createOrder.lead")})]})}),s.jsxs(EE,{onSubmit:o,children:[s.jsx(oe,{children:s.jsx(ye,{children:s.jsx(Cs,{children:t("portal:createOrder.backendNotice")})})}),s.jsx(oe,{children:s.jsxs(ye,{children:[s.jsx(Le,{children:t("portal:createOrder.sectionContact")}),s.jsxs(Jd,{children:[s.jsxs(Oe,{children:[t("portal:createOrder.senderName"),s.jsx(Ct,{children:"*"}),s.jsx(qe,{"aria-required":"true",value:e.senderName,onChange:a("senderName")})]}),s.jsxs(Oe,{children:[t("portal:createOrder.senderMobile"),s.jsx(qe,{inputMode:"tel",value:e.senderMobile,onChange:a("senderMobile")})]}),s.jsx(Za,{children:s.jsxs(Oe,{children:[t("portal:createOrder.senderAddress"),s.jsx(Ct,{children:"*"}),s.jsx(qe,{"aria-required":"true",value:e.senderAddress,onChange:a("senderAddress")})]})}),s.jsxs(Oe,{children:[t("portal:createOrder.senderPostcode"),s.jsx(qe,{value:e.senderPostcode,onChange:a("senderPostcode")})]}),s.jsxs(Oe,{children:[t("portal:createOrder.recipientName"),s.jsx(Ct,{children:"*"}),s.jsx(qe,{"aria-required":"true",value:e.recipientName,onChange:a("recipientName")})]}),s.jsxs(Oe,{children:[t("portal:createOrder.recipientMobile"),s.jsx(qe,{inputMode:"tel",value:e.recipientMobile,onChange:a("recipientMobile")})]}),s.jsx(Za,{children:s.jsxs(Oe,{children:[t("portal:createOrder.recipientAddress"),s.jsx(Ct,{children:"*"}),s.jsx(qe,{"aria-required":"true",value:e.recipientAddress,onChange:a("recipientAddress")})]})}),s.jsxs(Oe,{children:[t("portal:createOrder.recipientPostcode"),s.jsx(qe,{value:e.recipientPostcode,onChange:a("recipientPostcode")})]})]})]})}),s.jsx(oe,{children:s.jsxs(ye,{children:[s.jsx(Le,{children:t("portal:createOrder.sectionPackage")}),s.jsxs(Jd,{children:[s.jsxs(Oe,{children:[t("portal:createOrder.packages"),s.jsx(Ct,{children:"*"}),s.jsx(qe,{"aria-required":"true",inputMode:"numeric",min:"1",type:"number",value:e.packages,onChange:a("packages")})]}),s.jsxs(Oe,{children:[t("portal:createOrder.weight"),s.jsx(qe,{inputMode:"decimal",min:"0",step:"0.1",type:"number",value:e.weight,onChange:a("weight")})]}),s.jsxs(Oe,{children:[t("portal:createOrder.reference"),s.jsx(qe,{value:e.reference,onChange:a("reference")})]}),s.jsx(Za,{children:s.jsxs(Oe,{children:[t("portal:createOrder.notes"),s.jsx(cE,{value:e.notes,onChange:a("notes")})]})})]})]})}),s.jsxs(ri,{children:[s.jsxs(we,{type:"button",onClick:l,children:[s.jsx(rh,{"aria-hidden":"true"}),t("common:clearForm")]}),s.jsxs(vn,{type:"submit",children:[s.jsx(Km,{"aria-hidden":"true"}),t("portal:createOrder.prepareDraft")]})]}),r==="error"&&s.jsx(et,{$danger:!0,role:"alert",children:t("portal:createOrder.required")}),r==="ready"&&s.jsx(oe,{children:s.jsxs(ye,{children:[s.jsx(Le,{children:t("portal:createOrder.draftReady")}),s.jsxs(la,{children:[s.jsxs("div",{children:[s.jsx("dt",{children:t("portal:createOrder.senderName")}),s.jsx("dd",{children:e.senderName})]}),s.jsxs("div",{children:[s.jsx("dt",{children:t("portal:createOrder.recipientName")}),s.jsx("dd",{children:e.recipientName})]}),s.jsxs("div",{children:[s.jsx("dt",{children:t("portal:createOrder.packages")}),s.jsx("dd",{children:e.packages})]}),s.jsxs("div",{children:[s.jsx("dt",{children:t("portal:createOrder.reference")}),s.jsx("dd",{children:e.reference.trim()||"-"})]})]})]})})]})]})},it={VERIFY_TOKEN:"/api/company/verifyToken",SALES_ORDER_LIST:"/api/company/salesOrderList",SALES_ORDER:"/api/company/salesOrder/:salesOrderId",IMPORTS:"/api/company/imports",IMPORTS_TEMPLATE:"/api/company/imports/template",IMPORT_JOB:"/api/company/imports/:jobId",IMPORT_JOB_ROWS:"/api/company/imports/:jobId/rows",RBAC_ROLES:"/api/company/rbac/roles",RBAC_ROLE:"/api/company/rbac/roles/:roleId",ASSISTANT:"/api/company/assistant"};function Ni(t,e){return Object.entries(e).reduce((n,[r,i])=>n.replace(`:${r}`,encodeURIComponent(i)),t)}const IE=t=>{const e=new FormData;return e.append("file",t),se.post(it.IMPORTS,e)},RE=t=>se.get(Ni(it.IMPORT_JOB,{jobId:t})),CE=(t,e="all")=>se.get(Ni(it.IMPORT_JOB_ROWS,{jobId:t}),{params:{status:e}}),OE=()=>se.get(it.IMPORTS_TEMPLATE),Bn=f.div`
  overflow-x: auto;
`,zn=f.table`
  width: 100%;
  min-width: 720px;
  border-collapse: collapse;
  font-family: ${E};
  font-size: 14px;

  th,
  td {
    padding: 13px 16px;
    border-bottom: 1px solid var(--v29-line-soft);
    text-align: left;
    vertical-align: top;
  }

  th {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--v29-muted);
    background: var(--v29-raised);
    white-space: nowrap;
  }

  td {
    color: var(--v29-text);
  }

  tbody tr:last-child td {
    border-bottom: none;
  }
`,Xd=f.div`
  display: grid;
  gap: 18px;
`,AE=f.div`
  display: grid;
  gap: 14px;
`,PE=f.div`
  position: relative;
  display: grid;
  gap: 8px;
`,NE=f.label`
  font-family: ${E};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--v29-muted);
  cursor: pointer;
`,LE=f.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
`,$E=f.div`
  display: grid;
  gap: 10px;
  justify-items: start;
`,DE=f.div`
  display: flex;
  align-items: center;
  gap: 10px;
  box-sizing: border-box;
  min-height: 42px;
  max-width: 100%;
  padding: 10px 12px;
  border-radius: var(--v29-radius-field);
  border: 1px solid var(--v29-line-soft);
  background: var(--v29-page);
  font-family: ${E};
  font-size: 14px;
  color: var(--v29-text);

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  svg {
    flex-shrink: 0;
    width: 18px;
    height: 18px;
    color: var(--v29-muted);
  }
`,ME=f.p`
  margin: 0;
  font-family: ${E};
  font-size: 14px;
  line-height: 1.55;
  color: var(--v29-danger);
`,FE=f.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
`,UE=f.div`
  display: grid;
  gap: 4px;
  font-family: ${E};

  strong {
    font-size: 15px;
    color: var(--v29-text);
  }

  span {
    font-size: 13px;
    color: var(--v29-muted);
  }
`,BE=f.div`
  display: inline-flex;
  gap: 4px;
  padding: 4px;
  margin-bottom: 14px;
  border-radius: 11px;
  background: var(--v29-raised);
  border: 1px solid var(--v29-line-soft);
`,Ya=f.button`
  appearance: none;
  cursor: pointer;
  border: none;
  border-radius: 7px;
  padding: 7px 12px;
  font-family: ${E};
  font-size: 13px;
  font-weight: 600;
  color: ${t=>t.$active?"var(--v29-primary)":"var(--v29-muted)"};
  background: ${t=>t.$active?"var(--v29-card)":"transparent"};
  box-shadow: ${t=>t.$active?"var(--v29-card-shadow)":"none"};

  &:focus-visible {
    outline: 2px solid var(--v29-primary);
    outline-offset: 2px;
  }
`,zE=f.span`
  display: inline-block;
  padding: 3px 8px;
  border: none;
  border-radius: var(--v29-radius-tag);
  font-family: ${E};
  font-size: 12px;
  font-weight: 600;
  color: ${t=>t.$invalid?"var(--v29-danger)":"var(--v29-primary)"};
  background: ${t=>t.$invalid?"var(--v29-danger-bg)":"color-mix(in srgb, var(--v29-primary) 10%, transparent)"};
`,HE=f.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 180px;
  max-width: 320px;
  color: var(--v29-muted);
  font-size: 13px;
  line-height: 1.4;

  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span:first-child {
    color: var(--v29-text);
  }
`,VE=f.button`
  border: none;
  background: transparent;
  min-height: 36px;
  padding: 0 8px;
  border-radius: var(--v29-radius-button);
  color: var(--v29-muted);
  font-family: ${E};
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    color: var(--v29-text);
  }

  &:focus-visible {
    outline: 2px solid var(--v29-primary);
    outline-offset: 2px;
  }
`,WE=t=>typeof t=="object"&&t!==null&&"code"in t&&"message"in t,Qd="import-orders-csv-file",eu="import-orders-choose-file",tu="import-orders-csv-label",qE=()=>{const{t}=G(),e=S.useRef(null),n=S.useRef(!1),[r,i]=S.useState(""),[a,o]=S.useState({kind:"idle"}),[l,c]=S.useState(""),d=y=>{if(WE(y)){const b=y.data&&typeof y.data=="object"?y.data.missing:void 0;if(y.message==="missing columns")return t("portal:importOrders.missingColumns",{columns:(b??[]).join(", ")});if(y.message==="no rows")return t("portal:importOrders.noRows");if(y.code===130)return t("portal:importOrders.fileFormat")}return t("portal:importOrders.uploadFailed")},u=async(y,b)=>{const[_,j]=await Promise.all([RE(y),CE(y,b)]);o({kind:"ready",summary:_.data,rows:j.data.rows,filter:b})},h=async y=>{var _;const b=(_=y.target.files)==null?void 0:_[0];if(!b){y.target.value="";return}if(n.current){y.target.value="";return}n.current=!0,c(""),i(b.name),o({kind:"uploading"});try{const j=await IE(b);await u(j.data.jobId,"all")}catch(j){o({kind:"error",message:d(j)})}finally{n.current=!1,y.target.value=""}},p=async y=>{if(!(a.kind!=="ready"||a.filter===y))try{await u(a.summary.jobId,y)}catch{o({kind:"error",message:t("portal:importOrders.jobMissing")})}},m=async()=>{try{const y=await OE(),b=new Blob([y.data.csv],{type:"text/csv;charset=utf-8"}),_=URL.createObjectURL(b),j=document.createElement("a");j.href=_,j.download=y.data.filename,j.click(),URL.revokeObjectURL(_),c("")}catch{const y=t("portal:importOrders.templateFailed");if(a.kind==="ready"){c(y);return}o({kind:"error",message:y})}},x=()=>{i(""),c(""),o({kind:"idle"})};return s.jsxs(An,{children:[s.jsx(Pr,{children:s.jsxs("div",{children:[s.jsx(tn,{children:t("portal:common.eyebrow")}),s.jsx(Tn,{children:t("portal:importOrders.title")}),s.jsx(nn,{children:t("portal:importOrders.lead")})]})}),s.jsxs(Xd,{children:[s.jsx(oe,{children:s.jsx(ye,{children:s.jsx(Cs,{children:t("portal:importOrders.backendNotice")})})}),s.jsx(oe,{children:s.jsx(ye,{children:s.jsxs(AE,{children:[s.jsx(Le,{children:t("portal:importOrders.columnsTitle")}),s.jsx(Cs,{children:t("portal:importOrders.columnsBody")}),s.jsxs(PE,{children:[s.jsx(NE,{id:tu,htmlFor:Qd,children:t("portal:importOrders.uploadLabel")}),s.jsx(LE,{id:Qd,ref:e,accept:".csv,text/csv",type:"file",tabIndex:-1,"aria-labelledby":`${tu} ${eu}`,onChange:h}),s.jsxs($E,{children:[s.jsx(vn,{id:eu,type:"button",onClick:()=>{var y;return(y=e.current)==null?void 0:y.click()},children:t("portal:importOrders.chooseFile")}),r?s.jsxs(DE,{"aria-live":"polite",children:[s.jsx(Xm,{"aria-hidden":"true"}),s.jsx("span",{title:r,children:r})]}):null,s.jsx(we,{type:"button",onClick:m,children:t("portal:importOrders.downloadTemplate")})]})]}),(a.kind==="error"||l)&&s.jsx(ME,{role:"alert",children:a.kind==="error"?a.message:l})]})})}),s.jsx(oe,{children:s.jsxs(ye,{children:[s.jsx(Le,{children:t("portal:importOrders.previewTitle")}),a.kind==="uploading"&&s.jsxs("div",{"aria-busy":"true","aria-label":t("common:loading"),children:[s.jsx(at,{}),s.jsx(at,{})]}),(a.kind==="idle"||a.kind==="error")&&s.jsx(tt,{children:t("portal:importOrders.previewEmpty")}),a.kind==="ready"&&s.jsxs(Xd,{children:[s.jsxs(FE,{children:[s.jsxs(UE,{children:[s.jsx("strong",{children:t("portal:importOrders.sessionTitle",{id:a.summary.jobId})}),s.jsxs("span",{children:[t("portal:importOrders.sessionFile",{name:a.summary.fileName})," · ",t("portal:importOrders.sessionCounts",{valid:a.summary.validRows,invalid:a.summary.invalidRows,total:a.summary.totalRows})]})]}),s.jsx(VE,{type:"button",onClick:x,children:t("portal:importOrders.clearSession")})]}),s.jsxs(BE,{"aria-label":t("portal:importOrders.previewTitle"),children:[s.jsx(Ya,{type:"button","aria-pressed":a.filter==="all",$active:a.filter==="all",onClick:()=>{p("all")},children:t("portal:importOrders.filterAll")}),a.summary.validRows>0&&s.jsx(Ya,{type:"button","aria-pressed":a.filter==="valid",$active:a.filter==="valid",onClick:()=>{p("valid")},children:t("portal:importOrders.filterValid")}),a.summary.invalidRows>0&&s.jsx(Ya,{type:"button","aria-pressed":a.filter==="invalid",$active:a.filter==="invalid",onClick:()=>{p("invalid")},children:t("portal:importOrders.filterInvalid")})]}),s.jsx(Bn,{children:s.jsxs(zn,{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{scope:"col",children:t("portal:orders.colStatus")}),s.jsx("th",{scope:"col",children:t("portal:importOrders.colInvoice")}),s.jsx("th",{scope:"col",children:t("portal:importOrders.colRoute")}),s.jsx("th",{scope:"col",children:t("portal:importOrders.colPickup")}),s.jsx("th",{scope:"col",children:t("portal:importOrders.colDelivery")}),s.jsx("th",{scope:"col",children:t("portal:importOrders.colQty")}),s.jsx("th",{scope:"col",children:t("portal:importOrders.colWeight")}),s.jsx("th",{scope:"col",children:t("portal:importOrders.colReason")})]})}),s.jsx("tbody",{children:a.rows.map(y=>s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(zE,{$invalid:y.status==="invalid",children:y.status==="invalid"?t("portal:importOrders.rowInvalid"):t("portal:importOrders.rowValid")})}),s.jsx("td",{children:y.invoiceNumber||"—"}),s.jsx("td",{children:s.jsxs(HE,{title:`${y.senderAddress} → ${y.recipientAddress}`,"aria-label":`${y.senderName} ${t("portal:orders.routeTo")} ${y.recipientName}`,children:[s.jsxs("span",{"aria-hidden":"true",children:[y.senderName," · ",y.senderAddress]}),s.jsxs("span",{"aria-hidden":"true",children:["→ ",y.recipientName," · ",y.recipientAddress]})]})}),s.jsx("td",{children:y.pickupDate||"—"}),s.jsx("td",{children:y.deliveryDate||"—"}),s.jsx("td",{children:y.qty||"—"}),s.jsx("td",{children:y.weight||"—"}),s.jsx("td",{children:y.rejectReasons.length?y.rejectReasons.join(", "):"—"})]},y.rowId))})]})})]})]})})]})]})};var te;(function(t){t.assertEqual=i=>i;function e(i){}t.assertIs=e;function n(i){throw new Error}t.assertNever=n,t.arrayToEnum=i=>{const a={};for(const o of i)a[o]=o;return a},t.getValidEnumValues=i=>{const a=t.objectKeys(i).filter(l=>typeof i[i[l]]!="number"),o={};for(const l of a)o[l]=i[l];return t.objectValues(o)},t.objectValues=i=>t.objectKeys(i).map(function(a){return i[a]}),t.objectKeys=typeof Object.keys=="function"?i=>Object.keys(i):i=>{const a=[];for(const o in i)Object.prototype.hasOwnProperty.call(i,o)&&a.push(o);return a},t.find=(i,a)=>{for(const o of i)if(a(o))return o},t.isInteger=typeof Number.isInteger=="function"?i=>Number.isInteger(i):i=>typeof i=="number"&&isFinite(i)&&Math.floor(i)===i;function r(i,a=" | "){return i.map(o=>typeof o=="string"?`'${o}'`:o).join(a)}t.joinValues=r,t.jsonStringifyReplacer=(i,a)=>typeof a=="bigint"?a.toString():a})(te||(te={}));var Mo;(function(t){t.mergeShapes=(e,n)=>({...e,...n})})(Mo||(Mo={}));const N=te.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),xn=t=>{switch(typeof t){case"undefined":return N.undefined;case"string":return N.string;case"number":return isNaN(t)?N.nan:N.number;case"boolean":return N.boolean;case"function":return N.function;case"bigint":return N.bigint;case"symbol":return N.symbol;case"object":return Array.isArray(t)?N.array:t===null?N.null:t.then&&typeof t.then=="function"&&t.catch&&typeof t.catch=="function"?N.promise:typeof Map<"u"&&t instanceof Map?N.map:typeof Set<"u"&&t instanceof Set?N.set:typeof Date<"u"&&t instanceof Date?N.date:N.object;default:return N.unknown}},R=te.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),KE=t=>JSON.stringify(t,null,2).replace(/"([^"]+)":/g,"$1:");class lt extends Error{constructor(e){super(),this.issues=[],this.addIssue=r=>{this.issues=[...this.issues,r]},this.addIssues=(r=[])=>{this.issues=[...this.issues,...r]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const n=e||function(a){return a.message},r={_errors:[]},i=a=>{for(const o of a.issues)if(o.code==="invalid_union")o.unionErrors.map(i);else if(o.code==="invalid_return_type")i(o.returnTypeError);else if(o.code==="invalid_arguments")i(o.argumentsError);else if(o.path.length===0)r._errors.push(n(o));else{let l=r,c=0;for(;c<o.path.length;){const d=o.path[c];c===o.path.length-1?(l[d]=l[d]||{_errors:[]},l[d]._errors.push(n(o))):l[d]=l[d]||{_errors:[]},l=l[d],c++}}};return i(this),r}static assert(e){if(!(e instanceof lt))throw new Error(`Not a ZodError: ${e}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,te.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=n=>n.message){const n={},r=[];for(const i of this.issues)i.path.length>0?(n[i.path[0]]=n[i.path[0]]||[],n[i.path[0]].push(e(i))):r.push(e(i));return{formErrors:r,fieldErrors:n}}get formErrors(){return this.flatten()}}lt.create=t=>new lt(t);const Er=(t,e)=>{let n;switch(t.code){case R.invalid_type:t.received===N.undefined?n="Required":n=`Expected ${t.expected}, received ${t.received}`;break;case R.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(t.expected,te.jsonStringifyReplacer)}`;break;case R.unrecognized_keys:n=`Unrecognized key(s) in object: ${te.joinValues(t.keys,", ")}`;break;case R.invalid_union:n="Invalid input";break;case R.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${te.joinValues(t.options)}`;break;case R.invalid_enum_value:n=`Invalid enum value. Expected ${te.joinValues(t.options)}, received '${t.received}'`;break;case R.invalid_arguments:n="Invalid function arguments";break;case R.invalid_return_type:n="Invalid function return type";break;case R.invalid_date:n="Invalid date";break;case R.invalid_string:typeof t.validation=="object"?"includes"in t.validation?(n=`Invalid input: must include "${t.validation.includes}"`,typeof t.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${t.validation.position}`)):"startsWith"in t.validation?n=`Invalid input: must start with "${t.validation.startsWith}"`:"endsWith"in t.validation?n=`Invalid input: must end with "${t.validation.endsWith}"`:te.assertNever(t.validation):t.validation!=="regex"?n=`Invalid ${t.validation}`:n="Invalid";break;case R.too_small:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at least":"more than"} ${t.minimum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at least":"over"} ${t.minimum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(t.minimum))}`:n="Invalid input";break;case R.too_big:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at most":"less than"} ${t.maximum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at most":"under"} ${t.maximum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="bigint"?n=`BigInt must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly":t.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(t.maximum))}`:n="Invalid input";break;case R.custom:n="Invalid input";break;case R.invalid_intersection_types:n="Intersection results could not be merged";break;case R.not_multiple_of:n=`Number must be a multiple of ${t.multipleOf}`;break;case R.not_finite:n="Number must be finite";break;default:n=e.defaultError,te.assertNever(t)}return{message:n}};let Ef=Er;function GE(t){Ef=t}function Os(){return Ef}const As=t=>{const{data:e,path:n,errorMaps:r,issueData:i}=t,a=[...n,...i.path||[]],o={...i,path:a};if(i.message!==void 0)return{...i,path:a,message:i.message};let l="";const c=r.filter(d=>!!d).slice().reverse();for(const d of c)l=d(o,{data:e,defaultError:l}).message;return{...i,path:a,message:l}},ZE=[];function P(t,e){const n=Os(),r=As({issueData:e,data:t.data,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,n,n===Er?void 0:Er].filter(i=>!!i)});t.common.issues.push(r)}class Ge{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,n){const r=[];for(const i of n){if(i.status==="aborted")return V;i.status==="dirty"&&e.dirty(),r.push(i.value)}return{status:e.value,value:r}}static async mergeObjectAsync(e,n){const r=[];for(const i of n){const a=await i.key,o=await i.value;r.push({key:a,value:o})}return Ge.mergeObjectSync(e,r)}static mergeObjectSync(e,n){const r={};for(const i of n){const{key:a,value:o}=i;if(a.status==="aborted"||o.status==="aborted")return V;a.status==="dirty"&&e.dirty(),o.status==="dirty"&&e.dirty(),a.value!=="__proto__"&&(typeof o.value<"u"||i.alwaysSet)&&(r[a.value]=o.value)}return{status:e.value,value:r}}}const V=Object.freeze({status:"aborted"}),hr=t=>({status:"dirty",value:t}),Xe=t=>({status:"valid",value:t}),Fo=t=>t.status==="aborted",Uo=t=>t.status==="dirty",li=t=>t.status==="valid",ci=t=>typeof Promise<"u"&&t instanceof Promise;function Ps(t,e,n,r){if(typeof e=="function"?t!==e||!0:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e.get(t)}function _f(t,e,n,r,i){if(typeof e=="function"?t!==e||!0:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return e.set(t,n),n}var U;(function(t){t.errToObj=e=>typeof e=="string"?{message:e}:e||{},t.toString=e=>typeof e=="string"?e:e==null?void 0:e.message})(U||(U={}));var Zr,Yr;class Pt{constructor(e,n,r,i){this._cachedPath=[],this.parent=e,this.data=n,this._path=r,this._key=i}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const nu=(t,e)=>{if(li(e))return{success:!0,data:e.value};if(!t.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new lt(t.common.issues);return this._error=n,this._error}}};function K(t){if(!t)return{};const{errorMap:e,invalid_type_error:n,required_error:r,description:i}=t;if(e&&(n||r))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:i}:{errorMap:(o,l)=>{var c,d;const{message:u}=t;return o.code==="invalid_enum_value"?{message:u??l.defaultError}:typeof l.data>"u"?{message:(c=u??r)!==null&&c!==void 0?c:l.defaultError}:o.code!=="invalid_type"?{message:l.defaultError}:{message:(d=u??n)!==null&&d!==void 0?d:l.defaultError}},description:i}}class J{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return xn(e.data)}_getOrReturnCtx(e,n){return n||{common:e.parent.common,data:e.data,parsedType:xn(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new Ge,ctx:{common:e.parent.common,data:e.data,parsedType:xn(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const n=this._parse(e);if(ci(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(e){const n=this._parse(e);return Promise.resolve(n)}parse(e,n){const r=this.safeParse(e,n);if(r.success)return r.data;throw r.error}safeParse(e,n){var r;const i={common:{issues:[],async:(r=n==null?void 0:n.async)!==null&&r!==void 0?r:!1,contextualErrorMap:n==null?void 0:n.errorMap},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:xn(e)},a=this._parseSync({data:e,path:i.path,parent:i});return nu(i,a)}async parseAsync(e,n){const r=await this.safeParseAsync(e,n);if(r.success)return r.data;throw r.error}async safeParseAsync(e,n){const r={common:{issues:[],contextualErrorMap:n==null?void 0:n.errorMap,async:!0},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:xn(e)},i=this._parse({data:e,path:r.path,parent:r}),a=await(ci(i)?i:Promise.resolve(i));return nu(r,a)}refine(e,n){const r=i=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(i):n;return this._refinement((i,a)=>{const o=e(i),l=()=>a.addIssue({code:R.custom,...r(i)});return typeof Promise<"u"&&o instanceof Promise?o.then(c=>c?!0:(l(),!1)):o?!0:(l(),!1)})}refinement(e,n){return this._refinement((r,i)=>e(r)?!0:(i.addIssue(typeof n=="function"?n(r,i):n),!1))}_refinement(e){return new jt({schema:this,typeName:H.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return At.create(this,this._def)}nullable(){return _n.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return kt.create(this,this._def)}promise(){return Tr.create(this,this._def)}or(e){return pi.create([this,e],this._def)}and(e){return fi.create(this,e,this._def)}transform(e){return new jt({...K(this._def),schema:this,typeName:H.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const n=typeof e=="function"?e:()=>e;return new vi({...K(this._def),innerType:this,defaultValue:n,typeName:H.ZodDefault})}brand(){return new Il({typeName:H.ZodBranded,type:this,...K(this._def)})}catch(e){const n=typeof e=="function"?e:()=>e;return new bi({...K(this._def),innerType:this,catchValue:n,typeName:H.ZodCatch})}describe(e){const n=this.constructor;return new n({...this._def,description:e})}pipe(e){return Li.create(this,e)}readonly(){return wi.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const YE=/^c[^\s-]{8,}$/i,JE=/^[0-9a-z]+$/,XE=/^[0-9A-HJKMNP-TV-Z]{26}$/,QE=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,e_=/^[a-z0-9_-]{21}$/i,t_=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,n_=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,r_="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let Ja;const i_=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,s_=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,a_=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,Tf="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",o_=new RegExp(`^${Tf}$`);function If(t){let e="([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";return t.precision?e=`${e}\\.\\d{${t.precision}}`:t.precision==null&&(e=`${e}(\\.\\d+)?`),e}function l_(t){return new RegExp(`^${If(t)}$`)}function Rf(t){let e=`${Tf}T${If(t)}`;const n=[];return n.push(t.local?"Z?":"Z"),t.offset&&n.push("([+-]\\d{2}:?\\d{2})"),e=`${e}(${n.join("|")})`,new RegExp(`^${e}$`)}function c_(t,e){return!!((e==="v4"||!e)&&i_.test(t)||(e==="v6"||!e)&&s_.test(t))}class wt extends J{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==N.string){const a=this._getOrReturnCtx(e);return P(a,{code:R.invalid_type,expected:N.string,received:a.parsedType}),V}const r=new Ge;let i;for(const a of this._def.checks)if(a.kind==="min")e.data.length<a.value&&(i=this._getOrReturnCtx(e,i),P(i,{code:R.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),r.dirty());else if(a.kind==="max")e.data.length>a.value&&(i=this._getOrReturnCtx(e,i),P(i,{code:R.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),r.dirty());else if(a.kind==="length"){const o=e.data.length>a.value,l=e.data.length<a.value;(o||l)&&(i=this._getOrReturnCtx(e,i),o?P(i,{code:R.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}):l&&P(i,{code:R.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}),r.dirty())}else if(a.kind==="email")n_.test(e.data)||(i=this._getOrReturnCtx(e,i),P(i,{validation:"email",code:R.invalid_string,message:a.message}),r.dirty());else if(a.kind==="emoji")Ja||(Ja=new RegExp(r_,"u")),Ja.test(e.data)||(i=this._getOrReturnCtx(e,i),P(i,{validation:"emoji",code:R.invalid_string,message:a.message}),r.dirty());else if(a.kind==="uuid")QE.test(e.data)||(i=this._getOrReturnCtx(e,i),P(i,{validation:"uuid",code:R.invalid_string,message:a.message}),r.dirty());else if(a.kind==="nanoid")e_.test(e.data)||(i=this._getOrReturnCtx(e,i),P(i,{validation:"nanoid",code:R.invalid_string,message:a.message}),r.dirty());else if(a.kind==="cuid")YE.test(e.data)||(i=this._getOrReturnCtx(e,i),P(i,{validation:"cuid",code:R.invalid_string,message:a.message}),r.dirty());else if(a.kind==="cuid2")JE.test(e.data)||(i=this._getOrReturnCtx(e,i),P(i,{validation:"cuid2",code:R.invalid_string,message:a.message}),r.dirty());else if(a.kind==="ulid")XE.test(e.data)||(i=this._getOrReturnCtx(e,i),P(i,{validation:"ulid",code:R.invalid_string,message:a.message}),r.dirty());else if(a.kind==="url")try{new URL(e.data)}catch{i=this._getOrReturnCtx(e,i),P(i,{validation:"url",code:R.invalid_string,message:a.message}),r.dirty()}else a.kind==="regex"?(a.regex.lastIndex=0,a.regex.test(e.data)||(i=this._getOrReturnCtx(e,i),P(i,{validation:"regex",code:R.invalid_string,message:a.message}),r.dirty())):a.kind==="trim"?e.data=e.data.trim():a.kind==="includes"?e.data.includes(a.value,a.position)||(i=this._getOrReturnCtx(e,i),P(i,{code:R.invalid_string,validation:{includes:a.value,position:a.position},message:a.message}),r.dirty()):a.kind==="toLowerCase"?e.data=e.data.toLowerCase():a.kind==="toUpperCase"?e.data=e.data.toUpperCase():a.kind==="startsWith"?e.data.startsWith(a.value)||(i=this._getOrReturnCtx(e,i),P(i,{code:R.invalid_string,validation:{startsWith:a.value},message:a.message}),r.dirty()):a.kind==="endsWith"?e.data.endsWith(a.value)||(i=this._getOrReturnCtx(e,i),P(i,{code:R.invalid_string,validation:{endsWith:a.value},message:a.message}),r.dirty()):a.kind==="datetime"?Rf(a).test(e.data)||(i=this._getOrReturnCtx(e,i),P(i,{code:R.invalid_string,validation:"datetime",message:a.message}),r.dirty()):a.kind==="date"?o_.test(e.data)||(i=this._getOrReturnCtx(e,i),P(i,{code:R.invalid_string,validation:"date",message:a.message}),r.dirty()):a.kind==="time"?l_(a).test(e.data)||(i=this._getOrReturnCtx(e,i),P(i,{code:R.invalid_string,validation:"time",message:a.message}),r.dirty()):a.kind==="duration"?t_.test(e.data)||(i=this._getOrReturnCtx(e,i),P(i,{validation:"duration",code:R.invalid_string,message:a.message}),r.dirty()):a.kind==="ip"?c_(e.data,a.version)||(i=this._getOrReturnCtx(e,i),P(i,{validation:"ip",code:R.invalid_string,message:a.message}),r.dirty()):a.kind==="base64"?a_.test(e.data)||(i=this._getOrReturnCtx(e,i),P(i,{validation:"base64",code:R.invalid_string,message:a.message}),r.dirty()):te.assertNever(a);return{status:r.value,value:e.data}}_regex(e,n,r){return this.refinement(i=>e.test(i),{validation:n,code:R.invalid_string,...U.errToObj(r)})}_addCheck(e){return new wt({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...U.errToObj(e)})}url(e){return this._addCheck({kind:"url",...U.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...U.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...U.errToObj(e)})}nanoid(e){return this._addCheck({kind:"nanoid",...U.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...U.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...U.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...U.errToObj(e)})}base64(e){return this._addCheck({kind:"base64",...U.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...U.errToObj(e)})}datetime(e){var n,r;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,offset:(n=e==null?void 0:e.offset)!==null&&n!==void 0?n:!1,local:(r=e==null?void 0:e.local)!==null&&r!==void 0?r:!1,...U.errToObj(e==null?void 0:e.message)})}date(e){return this._addCheck({kind:"date",message:e})}time(e){return typeof e=="string"?this._addCheck({kind:"time",precision:null,message:e}):this._addCheck({kind:"time",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,...U.errToObj(e==null?void 0:e.message)})}duration(e){return this._addCheck({kind:"duration",...U.errToObj(e)})}regex(e,n){return this._addCheck({kind:"regex",regex:e,...U.errToObj(n)})}includes(e,n){return this._addCheck({kind:"includes",value:e,position:n==null?void 0:n.position,...U.errToObj(n==null?void 0:n.message)})}startsWith(e,n){return this._addCheck({kind:"startsWith",value:e,...U.errToObj(n)})}endsWith(e,n){return this._addCheck({kind:"endsWith",value:e,...U.errToObj(n)})}min(e,n){return this._addCheck({kind:"min",value:e,...U.errToObj(n)})}max(e,n){return this._addCheck({kind:"max",value:e,...U.errToObj(n)})}length(e,n){return this._addCheck({kind:"length",value:e,...U.errToObj(n)})}nonempty(e){return this.min(1,U.errToObj(e))}trim(){return new wt({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new wt({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new wt({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isDate(){return!!this._def.checks.find(e=>e.kind==="date")}get isTime(){return!!this._def.checks.find(e=>e.kind==="time")}get isDuration(){return!!this._def.checks.find(e=>e.kind==="duration")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(e=>e.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get isBase64(){return!!this._def.checks.find(e=>e.kind==="base64")}get minLength(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxLength(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}}wt.create=t=>{var e;return new wt({checks:[],typeName:H.ZodString,coerce:(e=t==null?void 0:t.coerce)!==null&&e!==void 0?e:!1,...K(t)})};function d_(t,e){const n=(t.toString().split(".")[1]||"").length,r=(e.toString().split(".")[1]||"").length,i=n>r?n:r,a=parseInt(t.toFixed(i).replace(".","")),o=parseInt(e.toFixed(i).replace(".",""));return a%o/Math.pow(10,i)}class Sn extends J{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==N.number){const a=this._getOrReturnCtx(e);return P(a,{code:R.invalid_type,expected:N.number,received:a.parsedType}),V}let r;const i=new Ge;for(const a of this._def.checks)a.kind==="int"?te.isInteger(e.data)||(r=this._getOrReturnCtx(e,r),P(r,{code:R.invalid_type,expected:"integer",received:"float",message:a.message}),i.dirty()):a.kind==="min"?(a.inclusive?e.data<a.value:e.data<=a.value)&&(r=this._getOrReturnCtx(e,r),P(r,{code:R.too_small,minimum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),i.dirty()):a.kind==="max"?(a.inclusive?e.data>a.value:e.data>=a.value)&&(r=this._getOrReturnCtx(e,r),P(r,{code:R.too_big,maximum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),i.dirty()):a.kind==="multipleOf"?d_(e.data,a.value)!==0&&(r=this._getOrReturnCtx(e,r),P(r,{code:R.not_multiple_of,multipleOf:a.value,message:a.message}),i.dirty()):a.kind==="finite"?Number.isFinite(e.data)||(r=this._getOrReturnCtx(e,r),P(r,{code:R.not_finite,message:a.message}),i.dirty()):te.assertNever(a);return{status:i.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,U.toString(n))}gt(e,n){return this.setLimit("min",e,!1,U.toString(n))}lte(e,n){return this.setLimit("max",e,!0,U.toString(n))}lt(e,n){return this.setLimit("max",e,!1,U.toString(n))}setLimit(e,n,r,i){return new Sn({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:r,message:U.toString(i)}]})}_addCheck(e){return new Sn({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:U.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:U.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:U.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:U.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:U.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:U.toString(n)})}finite(e){return this._addCheck({kind:"finite",message:U.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:U.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:U.toString(e)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&te.isInteger(e.value))}get isFinite(){let e=null,n=null;for(const r of this._def.checks){if(r.kind==="finite"||r.kind==="int"||r.kind==="multipleOf")return!0;r.kind==="min"?(n===null||r.value>n)&&(n=r.value):r.kind==="max"&&(e===null||r.value<e)&&(e=r.value)}return Number.isFinite(n)&&Number.isFinite(e)}}Sn.create=t=>new Sn({checks:[],typeName:H.ZodNumber,coerce:(t==null?void 0:t.coerce)||!1,...K(t)});class jn extends J{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==N.bigint){const a=this._getOrReturnCtx(e);return P(a,{code:R.invalid_type,expected:N.bigint,received:a.parsedType}),V}let r;const i=new Ge;for(const a of this._def.checks)a.kind==="min"?(a.inclusive?e.data<a.value:e.data<=a.value)&&(r=this._getOrReturnCtx(e,r),P(r,{code:R.too_small,type:"bigint",minimum:a.value,inclusive:a.inclusive,message:a.message}),i.dirty()):a.kind==="max"?(a.inclusive?e.data>a.value:e.data>=a.value)&&(r=this._getOrReturnCtx(e,r),P(r,{code:R.too_big,type:"bigint",maximum:a.value,inclusive:a.inclusive,message:a.message}),i.dirty()):a.kind==="multipleOf"?e.data%a.value!==BigInt(0)&&(r=this._getOrReturnCtx(e,r),P(r,{code:R.not_multiple_of,multipleOf:a.value,message:a.message}),i.dirty()):te.assertNever(a);return{status:i.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,U.toString(n))}gt(e,n){return this.setLimit("min",e,!1,U.toString(n))}lte(e,n){return this.setLimit("max",e,!0,U.toString(n))}lt(e,n){return this.setLimit("max",e,!1,U.toString(n))}setLimit(e,n,r,i){return new jn({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:r,message:U.toString(i)}]})}_addCheck(e){return new jn({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:U.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:U.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:U.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:U.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:U.toString(n)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}}jn.create=t=>{var e;return new jn({checks:[],typeName:H.ZodBigInt,coerce:(e=t==null?void 0:t.coerce)!==null&&e!==void 0?e:!1,...K(t)})};class di extends J{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==N.boolean){const r=this._getOrReturnCtx(e);return P(r,{code:R.invalid_type,expected:N.boolean,received:r.parsedType}),V}return Xe(e.data)}}di.create=t=>new di({typeName:H.ZodBoolean,coerce:(t==null?void 0:t.coerce)||!1,...K(t)});class Qn extends J{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==N.date){const a=this._getOrReturnCtx(e);return P(a,{code:R.invalid_type,expected:N.date,received:a.parsedType}),V}if(isNaN(e.data.getTime())){const a=this._getOrReturnCtx(e);return P(a,{code:R.invalid_date}),V}const r=new Ge;let i;for(const a of this._def.checks)a.kind==="min"?e.data.getTime()<a.value&&(i=this._getOrReturnCtx(e,i),P(i,{code:R.too_small,message:a.message,inclusive:!0,exact:!1,minimum:a.value,type:"date"}),r.dirty()):a.kind==="max"?e.data.getTime()>a.value&&(i=this._getOrReturnCtx(e,i),P(i,{code:R.too_big,message:a.message,inclusive:!0,exact:!1,maximum:a.value,type:"date"}),r.dirty()):te.assertNever(a);return{status:r.value,value:new Date(e.data.getTime())}}_addCheck(e){return new Qn({...this._def,checks:[...this._def.checks,e]})}min(e,n){return this._addCheck({kind:"min",value:e.getTime(),message:U.toString(n)})}max(e,n){return this._addCheck({kind:"max",value:e.getTime(),message:U.toString(n)})}get minDate(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e!=null?new Date(e):null}}Qn.create=t=>new Qn({checks:[],coerce:(t==null?void 0:t.coerce)||!1,typeName:H.ZodDate,...K(t)});class Ns extends J{_parse(e){if(this._getType(e)!==N.symbol){const r=this._getOrReturnCtx(e);return P(r,{code:R.invalid_type,expected:N.symbol,received:r.parsedType}),V}return Xe(e.data)}}Ns.create=t=>new Ns({typeName:H.ZodSymbol,...K(t)});class ui extends J{_parse(e){if(this._getType(e)!==N.undefined){const r=this._getOrReturnCtx(e);return P(r,{code:R.invalid_type,expected:N.undefined,received:r.parsedType}),V}return Xe(e.data)}}ui.create=t=>new ui({typeName:H.ZodUndefined,...K(t)});class hi extends J{_parse(e){if(this._getType(e)!==N.null){const r=this._getOrReturnCtx(e);return P(r,{code:R.invalid_type,expected:N.null,received:r.parsedType}),V}return Xe(e.data)}}hi.create=t=>new hi({typeName:H.ZodNull,...K(t)});class _r extends J{constructor(){super(...arguments),this._any=!0}_parse(e){return Xe(e.data)}}_r.create=t=>new _r({typeName:H.ZodAny,...K(t)});class Kn extends J{constructor(){super(...arguments),this._unknown=!0}_parse(e){return Xe(e.data)}}Kn.create=t=>new Kn({typeName:H.ZodUnknown,...K(t)});class en extends J{_parse(e){const n=this._getOrReturnCtx(e);return P(n,{code:R.invalid_type,expected:N.never,received:n.parsedType}),V}}en.create=t=>new en({typeName:H.ZodNever,...K(t)});class Ls extends J{_parse(e){if(this._getType(e)!==N.undefined){const r=this._getOrReturnCtx(e);return P(r,{code:R.invalid_type,expected:N.void,received:r.parsedType}),V}return Xe(e.data)}}Ls.create=t=>new Ls({typeName:H.ZodVoid,...K(t)});class kt extends J{_parse(e){const{ctx:n,status:r}=this._processInputParams(e),i=this._def;if(n.parsedType!==N.array)return P(n,{code:R.invalid_type,expected:N.array,received:n.parsedType}),V;if(i.exactLength!==null){const o=n.data.length>i.exactLength.value,l=n.data.length<i.exactLength.value;(o||l)&&(P(n,{code:o?R.too_big:R.too_small,minimum:l?i.exactLength.value:void 0,maximum:o?i.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:i.exactLength.message}),r.dirty())}if(i.minLength!==null&&n.data.length<i.minLength.value&&(P(n,{code:R.too_small,minimum:i.minLength.value,type:"array",inclusive:!0,exact:!1,message:i.minLength.message}),r.dirty()),i.maxLength!==null&&n.data.length>i.maxLength.value&&(P(n,{code:R.too_big,maximum:i.maxLength.value,type:"array",inclusive:!0,exact:!1,message:i.maxLength.message}),r.dirty()),n.common.async)return Promise.all([...n.data].map((o,l)=>i.type._parseAsync(new Pt(n,o,n.path,l)))).then(o=>Ge.mergeArray(r,o));const a=[...n.data].map((o,l)=>i.type._parseSync(new Pt(n,o,n.path,l)));return Ge.mergeArray(r,a)}get element(){return this._def.type}min(e,n){return new kt({...this._def,minLength:{value:e,message:U.toString(n)}})}max(e,n){return new kt({...this._def,maxLength:{value:e,message:U.toString(n)}})}length(e,n){return new kt({...this._def,exactLength:{value:e,message:U.toString(n)}})}nonempty(e){return this.min(1,e)}}kt.create=(t,e)=>new kt({type:t,minLength:null,maxLength:null,exactLength:null,typeName:H.ZodArray,...K(e)});function cr(t){if(t instanceof ke){const e={};for(const n in t.shape){const r=t.shape[n];e[n]=At.create(cr(r))}return new ke({...t._def,shape:()=>e})}else return t instanceof kt?new kt({...t._def,type:cr(t.element)}):t instanceof At?At.create(cr(t.unwrap())):t instanceof _n?_n.create(cr(t.unwrap())):t instanceof Nt?Nt.create(t.items.map(e=>cr(e))):t}class ke extends J{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),n=te.objectKeys(e);return this._cached={shape:e,keys:n}}_parse(e){if(this._getType(e)!==N.object){const d=this._getOrReturnCtx(e);return P(d,{code:R.invalid_type,expected:N.object,received:d.parsedType}),V}const{status:r,ctx:i}=this._processInputParams(e),{shape:a,keys:o}=this._getCached(),l=[];if(!(this._def.catchall instanceof en&&this._def.unknownKeys==="strip"))for(const d in i.data)o.includes(d)||l.push(d);const c=[];for(const d of o){const u=a[d],h=i.data[d];c.push({key:{status:"valid",value:d},value:u._parse(new Pt(i,h,i.path,d)),alwaysSet:d in i.data})}if(this._def.catchall instanceof en){const d=this._def.unknownKeys;if(d==="passthrough")for(const u of l)c.push({key:{status:"valid",value:u},value:{status:"valid",value:i.data[u]}});else if(d==="strict")l.length>0&&(P(i,{code:R.unrecognized_keys,keys:l}),r.dirty());else if(d!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const d=this._def.catchall;for(const u of l){const h=i.data[u];c.push({key:{status:"valid",value:u},value:d._parse(new Pt(i,h,i.path,u)),alwaysSet:u in i.data})}}return i.common.async?Promise.resolve().then(async()=>{const d=[];for(const u of c){const h=await u.key,p=await u.value;d.push({key:h,value:p,alwaysSet:u.alwaysSet})}return d}).then(d=>Ge.mergeObjectSync(r,d)):Ge.mergeObjectSync(r,c)}get shape(){return this._def.shape()}strict(e){return U.errToObj,new ke({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(n,r)=>{var i,a,o,l;const c=(o=(a=(i=this._def).errorMap)===null||a===void 0?void 0:a.call(i,n,r).message)!==null&&o!==void 0?o:r.defaultError;return n.code==="unrecognized_keys"?{message:(l=U.errToObj(e).message)!==null&&l!==void 0?l:c}:{message:c}}}:{}})}strip(){return new ke({...this._def,unknownKeys:"strip"})}passthrough(){return new ke({...this._def,unknownKeys:"passthrough"})}extend(e){return new ke({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new ke({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:H.ZodObject})}setKey(e,n){return this.augment({[e]:n})}catchall(e){return new ke({...this._def,catchall:e})}pick(e){const n={};return te.objectKeys(e).forEach(r=>{e[r]&&this.shape[r]&&(n[r]=this.shape[r])}),new ke({...this._def,shape:()=>n})}omit(e){const n={};return te.objectKeys(this.shape).forEach(r=>{e[r]||(n[r]=this.shape[r])}),new ke({...this._def,shape:()=>n})}deepPartial(){return cr(this)}partial(e){const n={};return te.objectKeys(this.shape).forEach(r=>{const i=this.shape[r];e&&!e[r]?n[r]=i:n[r]=i.optional()}),new ke({...this._def,shape:()=>n})}required(e){const n={};return te.objectKeys(this.shape).forEach(r=>{if(e&&!e[r])n[r]=this.shape[r];else{let a=this.shape[r];for(;a instanceof At;)a=a._def.innerType;n[r]=a}}),new ke({...this._def,shape:()=>n})}keyof(){return Cf(te.objectKeys(this.shape))}}ke.create=(t,e)=>new ke({shape:()=>t,unknownKeys:"strip",catchall:en.create(),typeName:H.ZodObject,...K(e)});ke.strictCreate=(t,e)=>new ke({shape:()=>t,unknownKeys:"strict",catchall:en.create(),typeName:H.ZodObject,...K(e)});ke.lazycreate=(t,e)=>new ke({shape:t,unknownKeys:"strip",catchall:en.create(),typeName:H.ZodObject,...K(e)});class pi extends J{_parse(e){const{ctx:n}=this._processInputParams(e),r=this._def.options;function i(a){for(const l of a)if(l.result.status==="valid")return l.result;for(const l of a)if(l.result.status==="dirty")return n.common.issues.push(...l.ctx.common.issues),l.result;const o=a.map(l=>new lt(l.ctx.common.issues));return P(n,{code:R.invalid_union,unionErrors:o}),V}if(n.common.async)return Promise.all(r.map(async a=>{const o={...n,common:{...n.common,issues:[]},parent:null};return{result:await a._parseAsync({data:n.data,path:n.path,parent:o}),ctx:o}})).then(i);{let a;const o=[];for(const c of r){const d={...n,common:{...n.common,issues:[]},parent:null},u=c._parseSync({data:n.data,path:n.path,parent:d});if(u.status==="valid")return u;u.status==="dirty"&&!a&&(a={result:u,ctx:d}),d.common.issues.length&&o.push(d.common.issues)}if(a)return n.common.issues.push(...a.ctx.common.issues),a.result;const l=o.map(c=>new lt(c));return P(n,{code:R.invalid_union,unionErrors:l}),V}}get options(){return this._def.options}}pi.create=(t,e)=>new pi({options:t,typeName:H.ZodUnion,...K(e)});const Ht=t=>t instanceof gi?Ht(t.schema):t instanceof jt?Ht(t.innerType()):t instanceof xi?[t.value]:t instanceof En?t.options:t instanceof yi?te.objectValues(t.enum):t instanceof vi?Ht(t._def.innerType):t instanceof ui?[void 0]:t instanceof hi?[null]:t instanceof At?[void 0,...Ht(t.unwrap())]:t instanceof _n?[null,...Ht(t.unwrap())]:t instanceof Il||t instanceof wi?Ht(t.unwrap()):t instanceof bi?Ht(t._def.innerType):[];class ca extends J{_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==N.object)return P(n,{code:R.invalid_type,expected:N.object,received:n.parsedType}),V;const r=this.discriminator,i=n.data[r],a=this.optionsMap.get(i);return a?n.common.async?a._parseAsync({data:n.data,path:n.path,parent:n}):a._parseSync({data:n.data,path:n.path,parent:n}):(P(n,{code:R.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),V)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,n,r){const i=new Map;for(const a of n){const o=Ht(a.shape[e]);if(!o.length)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const l of o){if(i.has(l))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(l)}`);i.set(l,a)}}return new ca({typeName:H.ZodDiscriminatedUnion,discriminator:e,options:n,optionsMap:i,...K(r)})}}function Bo(t,e){const n=xn(t),r=xn(e);if(t===e)return{valid:!0,data:t};if(n===N.object&&r===N.object){const i=te.objectKeys(e),a=te.objectKeys(t).filter(l=>i.indexOf(l)!==-1),o={...t,...e};for(const l of a){const c=Bo(t[l],e[l]);if(!c.valid)return{valid:!1};o[l]=c.data}return{valid:!0,data:o}}else if(n===N.array&&r===N.array){if(t.length!==e.length)return{valid:!1};const i=[];for(let a=0;a<t.length;a++){const o=t[a],l=e[a],c=Bo(o,l);if(!c.valid)return{valid:!1};i.push(c.data)}return{valid:!0,data:i}}else return n===N.date&&r===N.date&&+t==+e?{valid:!0,data:t}:{valid:!1}}class fi extends J{_parse(e){const{status:n,ctx:r}=this._processInputParams(e),i=(a,o)=>{if(Fo(a)||Fo(o))return V;const l=Bo(a.value,o.value);return l.valid?((Uo(a)||Uo(o))&&n.dirty(),{status:n.value,value:l.data}):(P(r,{code:R.invalid_intersection_types}),V)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([a,o])=>i(a,o)):i(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}}fi.create=(t,e,n)=>new fi({left:t,right:e,typeName:H.ZodIntersection,...K(n)});class Nt extends J{_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==N.array)return P(r,{code:R.invalid_type,expected:N.array,received:r.parsedType}),V;if(r.data.length<this._def.items.length)return P(r,{code:R.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),V;!this._def.rest&&r.data.length>this._def.items.length&&(P(r,{code:R.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const a=[...r.data].map((o,l)=>{const c=this._def.items[l]||this._def.rest;return c?c._parse(new Pt(r,o,r.path,l)):null}).filter(o=>!!o);return r.common.async?Promise.all(a).then(o=>Ge.mergeArray(n,o)):Ge.mergeArray(n,a)}get items(){return this._def.items}rest(e){return new Nt({...this._def,rest:e})}}Nt.create=(t,e)=>{if(!Array.isArray(t))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Nt({items:t,typeName:H.ZodTuple,rest:null,...K(e)})};class mi extends J{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==N.object)return P(r,{code:R.invalid_type,expected:N.object,received:r.parsedType}),V;const i=[],a=this._def.keyType,o=this._def.valueType;for(const l in r.data)i.push({key:a._parse(new Pt(r,l,r.path,l)),value:o._parse(new Pt(r,r.data[l],r.path,l)),alwaysSet:l in r.data});return r.common.async?Ge.mergeObjectAsync(n,i):Ge.mergeObjectSync(n,i)}get element(){return this._def.valueType}static create(e,n,r){return n instanceof J?new mi({keyType:e,valueType:n,typeName:H.ZodRecord,...K(r)}):new mi({keyType:wt.create(),valueType:e,typeName:H.ZodRecord,...K(n)})}}class $s extends J{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==N.map)return P(r,{code:R.invalid_type,expected:N.map,received:r.parsedType}),V;const i=this._def.keyType,a=this._def.valueType,o=[...r.data.entries()].map(([l,c],d)=>({key:i._parse(new Pt(r,l,r.path,[d,"key"])),value:a._parse(new Pt(r,c,r.path,[d,"value"]))}));if(r.common.async){const l=new Map;return Promise.resolve().then(async()=>{for(const c of o){const d=await c.key,u=await c.value;if(d.status==="aborted"||u.status==="aborted")return V;(d.status==="dirty"||u.status==="dirty")&&n.dirty(),l.set(d.value,u.value)}return{status:n.value,value:l}})}else{const l=new Map;for(const c of o){const d=c.key,u=c.value;if(d.status==="aborted"||u.status==="aborted")return V;(d.status==="dirty"||u.status==="dirty")&&n.dirty(),l.set(d.value,u.value)}return{status:n.value,value:l}}}}$s.create=(t,e,n)=>new $s({valueType:e,keyType:t,typeName:H.ZodMap,...K(n)});class er extends J{_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==N.set)return P(r,{code:R.invalid_type,expected:N.set,received:r.parsedType}),V;const i=this._def;i.minSize!==null&&r.data.size<i.minSize.value&&(P(r,{code:R.too_small,minimum:i.minSize.value,type:"set",inclusive:!0,exact:!1,message:i.minSize.message}),n.dirty()),i.maxSize!==null&&r.data.size>i.maxSize.value&&(P(r,{code:R.too_big,maximum:i.maxSize.value,type:"set",inclusive:!0,exact:!1,message:i.maxSize.message}),n.dirty());const a=this._def.valueType;function o(c){const d=new Set;for(const u of c){if(u.status==="aborted")return V;u.status==="dirty"&&n.dirty(),d.add(u.value)}return{status:n.value,value:d}}const l=[...r.data.values()].map((c,d)=>a._parse(new Pt(r,c,r.path,d)));return r.common.async?Promise.all(l).then(c=>o(c)):o(l)}min(e,n){return new er({...this._def,minSize:{value:e,message:U.toString(n)}})}max(e,n){return new er({...this._def,maxSize:{value:e,message:U.toString(n)}})}size(e,n){return this.min(e,n).max(e,n)}nonempty(e){return this.min(1,e)}}er.create=(t,e)=>new er({valueType:t,minSize:null,maxSize:null,typeName:H.ZodSet,...K(e)});class br extends J{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==N.function)return P(n,{code:R.invalid_type,expected:N.function,received:n.parsedType}),V;function r(l,c){return As({data:l,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Os(),Er].filter(d=>!!d),issueData:{code:R.invalid_arguments,argumentsError:c}})}function i(l,c){return As({data:l,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Os(),Er].filter(d=>!!d),issueData:{code:R.invalid_return_type,returnTypeError:c}})}const a={errorMap:n.common.contextualErrorMap},o=n.data;if(this._def.returns instanceof Tr){const l=this;return Xe(async function(...c){const d=new lt([]),u=await l._def.args.parseAsync(c,a).catch(m=>{throw d.addIssue(r(c,m)),d}),h=await Reflect.apply(o,this,u);return await l._def.returns._def.type.parseAsync(h,a).catch(m=>{throw d.addIssue(i(h,m)),d})})}else{const l=this;return Xe(function(...c){const d=l._def.args.safeParse(c,a);if(!d.success)throw new lt([r(c,d.error)]);const u=Reflect.apply(o,this,d.data),h=l._def.returns.safeParse(u,a);if(!h.success)throw new lt([i(u,h.error)]);return h.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new br({...this._def,args:Nt.create(e).rest(Kn.create())})}returns(e){return new br({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,n,r){return new br({args:e||Nt.create([]).rest(Kn.create()),returns:n||Kn.create(),typeName:H.ZodFunction,...K(r)})}}class gi extends J{get schema(){return this._def.getter()}_parse(e){const{ctx:n}=this._processInputParams(e);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}gi.create=(t,e)=>new gi({getter:t,typeName:H.ZodLazy,...K(e)});class xi extends J{_parse(e){if(e.data!==this._def.value){const n=this._getOrReturnCtx(e);return P(n,{received:n.data,code:R.invalid_literal,expected:this._def.value}),V}return{status:"valid",value:e.data}}get value(){return this._def.value}}xi.create=(t,e)=>new xi({value:t,typeName:H.ZodLiteral,...K(e)});function Cf(t,e){return new En({values:t,typeName:H.ZodEnum,...K(e)})}class En extends J{constructor(){super(...arguments),Zr.set(this,void 0)}_parse(e){if(typeof e.data!="string"){const n=this._getOrReturnCtx(e),r=this._def.values;return P(n,{expected:te.joinValues(r),received:n.parsedType,code:R.invalid_type}),V}if(Ps(this,Zr)||_f(this,Zr,new Set(this._def.values)),!Ps(this,Zr).has(e.data)){const n=this._getOrReturnCtx(e),r=this._def.values;return P(n,{received:n.data,code:R.invalid_enum_value,options:r}),V}return Xe(e.data)}get options(){return this._def.values}get enum(){const e={};for(const n of this._def.values)e[n]=n;return e}get Values(){const e={};for(const n of this._def.values)e[n]=n;return e}get Enum(){const e={};for(const n of this._def.values)e[n]=n;return e}extract(e,n=this._def){return En.create(e,{...this._def,...n})}exclude(e,n=this._def){return En.create(this.options.filter(r=>!e.includes(r)),{...this._def,...n})}}Zr=new WeakMap;En.create=Cf;class yi extends J{constructor(){super(...arguments),Yr.set(this,void 0)}_parse(e){const n=te.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(e);if(r.parsedType!==N.string&&r.parsedType!==N.number){const i=te.objectValues(n);return P(r,{expected:te.joinValues(i),received:r.parsedType,code:R.invalid_type}),V}if(Ps(this,Yr)||_f(this,Yr,new Set(te.getValidEnumValues(this._def.values))),!Ps(this,Yr).has(e.data)){const i=te.objectValues(n);return P(r,{received:r.data,code:R.invalid_enum_value,options:i}),V}return Xe(e.data)}get enum(){return this._def.values}}Yr=new WeakMap;yi.create=(t,e)=>new yi({values:t,typeName:H.ZodNativeEnum,...K(e)});class Tr extends J{unwrap(){return this._def.type}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==N.promise&&n.common.async===!1)return P(n,{code:R.invalid_type,expected:N.promise,received:n.parsedType}),V;const r=n.parsedType===N.promise?n.data:Promise.resolve(n.data);return Xe(r.then(i=>this._def.type.parseAsync(i,{path:n.path,errorMap:n.common.contextualErrorMap})))}}Tr.create=(t,e)=>new Tr({type:t,typeName:H.ZodPromise,...K(e)});class jt extends J{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===H.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:n,ctx:r}=this._processInputParams(e),i=this._def.effect||null,a={addIssue:o=>{P(r,o),o.fatal?n.abort():n.dirty()},get path(){return r.path}};if(a.addIssue=a.addIssue.bind(a),i.type==="preprocess"){const o=i.transform(r.data,a);if(r.common.async)return Promise.resolve(o).then(async l=>{if(n.value==="aborted")return V;const c=await this._def.schema._parseAsync({data:l,path:r.path,parent:r});return c.status==="aborted"?V:c.status==="dirty"||n.value==="dirty"?hr(c.value):c});{if(n.value==="aborted")return V;const l=this._def.schema._parseSync({data:o,path:r.path,parent:r});return l.status==="aborted"?V:l.status==="dirty"||n.value==="dirty"?hr(l.value):l}}if(i.type==="refinement"){const o=l=>{const c=i.refinement(l,a);if(r.common.async)return Promise.resolve(c);if(c instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return l};if(r.common.async===!1){const l=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return l.status==="aborted"?V:(l.status==="dirty"&&n.dirty(),o(l.value),{status:n.value,value:l.value})}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(l=>l.status==="aborted"?V:(l.status==="dirty"&&n.dirty(),o(l.value).then(()=>({status:n.value,value:l.value}))))}if(i.type==="transform")if(r.common.async===!1){const o=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!li(o))return o;const l=i.transform(o.value,a);if(l instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:l}}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(o=>li(o)?Promise.resolve(i.transform(o.value,a)).then(l=>({status:n.value,value:l})):o);te.assertNever(i)}}jt.create=(t,e,n)=>new jt({schema:t,typeName:H.ZodEffects,effect:e,...K(n)});jt.createWithPreprocess=(t,e,n)=>new jt({schema:e,effect:{type:"preprocess",transform:t},typeName:H.ZodEffects,...K(n)});class At extends J{_parse(e){return this._getType(e)===N.undefined?Xe(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}At.create=(t,e)=>new At({innerType:t,typeName:H.ZodOptional,...K(e)});class _n extends J{_parse(e){return this._getType(e)===N.null?Xe(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}_n.create=(t,e)=>new _n({innerType:t,typeName:H.ZodNullable,...K(e)});class vi extends J{_parse(e){const{ctx:n}=this._processInputParams(e);let r=n.data;return n.parsedType===N.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}vi.create=(t,e)=>new vi({innerType:t,typeName:H.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...K(e)});class bi extends J{_parse(e){const{ctx:n}=this._processInputParams(e),r={...n,common:{...n.common,issues:[]}},i=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return ci(i)?i.then(a=>({status:"valid",value:a.status==="valid"?a.value:this._def.catchValue({get error(){return new lt(r.common.issues)},input:r.data})})):{status:"valid",value:i.status==="valid"?i.value:this._def.catchValue({get error(){return new lt(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}}bi.create=(t,e)=>new bi({innerType:t,typeName:H.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...K(e)});class Ds extends J{_parse(e){if(this._getType(e)!==N.nan){const r=this._getOrReturnCtx(e);return P(r,{code:R.invalid_type,expected:N.nan,received:r.parsedType}),V}return{status:"valid",value:e.data}}}Ds.create=t=>new Ds({typeName:H.ZodNaN,...K(t)});const u_=Symbol("zod_brand");class Il extends J{_parse(e){const{ctx:n}=this._processInputParams(e),r=n.data;return this._def.type._parse({data:r,path:n.path,parent:n})}unwrap(){return this._def.type}}class Li extends J{_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.common.async)return(async()=>{const a=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return a.status==="aborted"?V:a.status==="dirty"?(n.dirty(),hr(a.value)):this._def.out._parseAsync({data:a.value,path:r.path,parent:r})})();{const i=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return i.status==="aborted"?V:i.status==="dirty"?(n.dirty(),{status:"dirty",value:i.value}):this._def.out._parseSync({data:i.value,path:r.path,parent:r})}}static create(e,n){return new Li({in:e,out:n,typeName:H.ZodPipeline})}}class wi extends J{_parse(e){const n=this._def.innerType._parse(e),r=i=>(li(i)&&(i.value=Object.freeze(i.value)),i);return ci(n)?n.then(i=>r(i)):r(n)}unwrap(){return this._def.innerType}}wi.create=(t,e)=>new wi({innerType:t,typeName:H.ZodReadonly,...K(e)});function Of(t,e={},n){return t?_r.create().superRefine((r,i)=>{var a,o;if(!t(r)){const l=typeof e=="function"?e(r):typeof e=="string"?{message:e}:e,c=(o=(a=l.fatal)!==null&&a!==void 0?a:n)!==null&&o!==void 0?o:!0,d=typeof l=="string"?{message:l}:l;i.addIssue({code:"custom",...d,fatal:c})}}):_r.create()}const h_={object:ke.lazycreate};var H;(function(t){t.ZodString="ZodString",t.ZodNumber="ZodNumber",t.ZodNaN="ZodNaN",t.ZodBigInt="ZodBigInt",t.ZodBoolean="ZodBoolean",t.ZodDate="ZodDate",t.ZodSymbol="ZodSymbol",t.ZodUndefined="ZodUndefined",t.ZodNull="ZodNull",t.ZodAny="ZodAny",t.ZodUnknown="ZodUnknown",t.ZodNever="ZodNever",t.ZodVoid="ZodVoid",t.ZodArray="ZodArray",t.ZodObject="ZodObject",t.ZodUnion="ZodUnion",t.ZodDiscriminatedUnion="ZodDiscriminatedUnion",t.ZodIntersection="ZodIntersection",t.ZodTuple="ZodTuple",t.ZodRecord="ZodRecord",t.ZodMap="ZodMap",t.ZodSet="ZodSet",t.ZodFunction="ZodFunction",t.ZodLazy="ZodLazy",t.ZodLiteral="ZodLiteral",t.ZodEnum="ZodEnum",t.ZodEffects="ZodEffects",t.ZodNativeEnum="ZodNativeEnum",t.ZodOptional="ZodOptional",t.ZodNullable="ZodNullable",t.ZodDefault="ZodDefault",t.ZodCatch="ZodCatch",t.ZodPromise="ZodPromise",t.ZodBranded="ZodBranded",t.ZodPipeline="ZodPipeline",t.ZodReadonly="ZodReadonly"})(H||(H={}));const p_=(t,e={message:`Input not instance of ${t.name}`})=>Of(n=>n instanceof t,e),Af=wt.create,Pf=Sn.create,f_=Ds.create,m_=jn.create,Nf=di.create,g_=Qn.create,x_=Ns.create,y_=ui.create,v_=hi.create,b_=_r.create,w_=Kn.create,k_=en.create,S_=Ls.create,j_=kt.create,E_=ke.create,__=ke.strictCreate,T_=pi.create,I_=ca.create,R_=fi.create,C_=Nt.create,O_=mi.create,A_=$s.create,P_=er.create,N_=br.create,L_=gi.create,$_=xi.create,D_=En.create,M_=yi.create,F_=Tr.create,ru=jt.create,U_=At.create,B_=_n.create,z_=jt.createWithPreprocess,H_=Li.create,V_=()=>Af().optional(),W_=()=>Pf().optional(),q_=()=>Nf().optional(),K_={string:(t=>wt.create({...t,coerce:!0})),number:(t=>Sn.create({...t,coerce:!0})),boolean:(t=>di.create({...t,coerce:!0})),bigint:(t=>jn.create({...t,coerce:!0})),date:(t=>Qn.create({...t,coerce:!0}))},G_=V;var k=Object.freeze({__proto__:null,defaultErrorMap:Er,setErrorMap:GE,getErrorMap:Os,makeIssue:As,EMPTY_PATH:ZE,addIssueToContext:P,ParseStatus:Ge,INVALID:V,DIRTY:hr,OK:Xe,isAborted:Fo,isDirty:Uo,isValid:li,isAsync:ci,get util(){return te},get objectUtil(){return Mo},ZodParsedType:N,getParsedType:xn,ZodType:J,datetimeRegex:Rf,ZodString:wt,ZodNumber:Sn,ZodBigInt:jn,ZodBoolean:di,ZodDate:Qn,ZodSymbol:Ns,ZodUndefined:ui,ZodNull:hi,ZodAny:_r,ZodUnknown:Kn,ZodNever:en,ZodVoid:Ls,ZodArray:kt,ZodObject:ke,ZodUnion:pi,ZodDiscriminatedUnion:ca,ZodIntersection:fi,ZodTuple:Nt,ZodRecord:mi,ZodMap:$s,ZodSet:er,ZodFunction:br,ZodLazy:gi,ZodLiteral:xi,ZodEnum:En,ZodNativeEnum:yi,ZodPromise:Tr,ZodEffects:jt,ZodTransformer:jt,ZodOptional:At,ZodNullable:_n,ZodDefault:vi,ZodCatch:bi,ZodNaN:Ds,BRAND:u_,ZodBranded:Il,ZodPipeline:Li,ZodReadonly:wi,custom:Of,Schema:J,ZodSchema:J,late:h_,get ZodFirstPartyTypeKind(){return H},coerce:K_,any:b_,array:j_,bigint:m_,boolean:Nf,date:g_,discriminatedUnion:I_,effect:ru,enum:D_,function:N_,instanceof:p_,intersection:R_,lazy:L_,literal:$_,map:A_,nan:f_,nativeEnum:M_,never:k_,null:v_,nullable:B_,number:Pf,object:E_,oboolean:q_,onumber:W_,optional:U_,ostring:V_,pipeline:H_,preprocess:z_,promise:F_,record:O_,set:P_,strictObject:__,string:Af,symbol:x_,transformer:ru,tuple:C_,undefined:y_,union:T_,unknown:w_,void:S_,NEVER:G_,ZodIssueCode:R,quotelessJson:KE,ZodError:lt});function Z_(t,e){let n={...t};for(let r of e)delete n[r];return n}var Y_=/:([a-zA-Z_][a-zA-Z0-9_]*)/g;function J_(t){let e=t.url,n=t.params;return n&&(e=e.replace(Y_,(r,i)=>i in n?`${n[i]}`:r)),e}function iu(t,e,n){return t.find(r=>r.method===e&&r.path===n)}function X_(t){let e=new FormData;for(let n in t)e.append(n,t[n]);return{data:e}}var Ms=class extends Error{constructor(t,e,n,r){super(t),this.config=e,this.data=n,this.cause=r}},Q_={name:"form-data",request:async(t,e)=>{if(typeof e.data!="object"||Array.isArray(e.data))throw new Ms("Zodios: multipart/form-data body must be an object",e);let n=X_(e.data);return{...e,data:n.data,headers:{...e.headers,...n.headers}}}};function e2(){return Q_}var t2={name:"form-url",request:async(t,e)=>{if(typeof e.data!="object"||Array.isArray(e.data))throw new Ms("Zodios: application/x-www-form-urlencoded body must be an object",e);return{...e,data:new URLSearchParams(e.data).toString(),headers:{...e.headers,"Content-Type":"application/x-www-form-urlencoded"}}}};function n2(){return t2}function su(t,e){return{request:async(n,r)=>({...r,headers:{...r.headers,[t]:e}})}}function au(t){return[!0,"response","all"].includes(t)}function ou(t){return[!0,"request","all"].includes(t)}function r2({validate:t,transform:e,sendDefaults:n}){return{name:"zod-validation",request:ou(t)?async(r,i)=>{let a=iu(r,i.method,i.url);if(!a)throw new Error(`No endpoint found for ${i.method} ${i.url}`);let{parameters:o}=a;if(!o)return i;let l={...i,queries:{...i.queries},headers:{...i.headers},params:{...i.params}},c={Query:h=>{var p;return(p=l.queries)==null?void 0:p[h]},Body:h=>l.data,Header:h=>{var p;return(p=l.headers)==null?void 0:p[h]},Path:h=>{var p;return(p=l.params)==null?void 0:p[h]}},d={Query:(h,p)=>l.queries[h]=p,Body:(h,p)=>l.data=p,Header:(h,p)=>l.headers[h]=p,Path:(h,p)=>l.params[h]=p},u=ou(e);for(let h of o){let{name:p,schema:m,type:x}=h,y=c[x](p);if(n||y!==void 0){let b=await m.safeParseAsync(y);if(!b.success)throw new Ms(`Zodios: Invalid ${x} parameter '${p}'`,i,y,b.error);u&&d[x](p,b.data)}}return l}:void 0,response:au(t)?async(r,i,a)=>{var o,l,c,d;let u=iu(r,i.method,i.url);if(!u)throw new Error(`No endpoint found for ${i.method} ${i.url}`);if((l=(o=a.headers)==null?void 0:o["content-type"])!=null&&l.includes("application/json")||(d=(c=a.headers)==null?void 0:c["content-type"])!=null&&d.includes("application/vnd.api+json")){let h=await u.response.safeParseAsync(a.data);if(!h.success)throw new Ms(`Zodios: Invalid response from endpoint '${u.method} ${u.path}'
status: ${a.status} ${a.statusText}
cause:
${h.error.message}
received:
${JSON.stringify(a.data,null,2)}`,i,a.data,h.error);au(e)&&(a.data=h.data)}return a}:void 0}}var lu=class{constructor(t,e){this.plugins=[],this.key=`${t}-${e}`}indexOf(t){return this.plugins.findIndex(e=>(e==null?void 0:e.name)===t)}use(t){if(t.name){let e=this.indexOf(t.name);if(e!==-1)return this.plugins[e]=t,{key:this.key,value:e}}return this.plugins.push(t),{key:this.key,value:this.plugins.length-1}}eject(t){if(typeof t=="string"){let e=this.indexOf(t);if(e===-1)throw new Error(`Plugin with name '${t}' not found`);this.plugins[e]=void 0}else{if(t.key!==this.key)throw new Error(`Plugin with key '${t.key}' is not registered for endpoint '${this.key}'`);this.plugins[t.value]=void 0}}async interceptRequest(t,e){let n=e;for(let r of this.plugins)r!=null&&r.request&&(n=await r.request(t,n));return n}async interceptResponse(t,e,n){let r=n;for(let i=this.plugins.length-1;i>=0;i--){let a=this.plugins[i];a&&(r=r.then(a!=null&&a.response?o=>a.response(t,e,o):void 0,a!=null&&a.error?o=>a.error(t,e,o):void 0))}return r}count(){return this.plugins.reduce((t,e)=>e?t+1:t,0)}};function Lf(t){let e=new Set;for(let r of t){let i=`${r.method} ${r.path}`;if(e.has(i))throw new Error(`Zodios: Duplicate path '${i}'`);e.add(i)}let n=new Set;for(let r of t)if(r.alias){if(n.has(r.alias))throw new Error(`Zodios: Duplicate alias '${r.alias}'`);n.add(r.alias)}for(let r of t)if(r.parameters&&r.parameters.filter(i=>i.type==="Body").length>1)throw new Error(`Zodios: Multiple body parameters in endpoint '${r.path}'`)}function i2(t){return Lf(t),t}var s2=class{constructor(t,e,n){this.endpointPlugins=new Map;let r;if(!t)throw Array.isArray(e)?new Error("Zodios: missing base url"):new Error("Zodios: missing api description");let i;if(typeof t=="string"&&Array.isArray(e))i=t,this.api=e,r=n||{};else if(Array.isArray(t)&&!Array.isArray(e))this.api=t,r=e||{};else throw new Error("Zodios: api must be an array");Lf(this.api),this.options={validate:!0,transform:!0,sendDefaults:!1,...r},this.options.axiosInstance?this.axiosInstance=this.options.axiosInstance:this.axiosInstance=ve.create({...this.options.axiosConfig}),i&&(this.axiosInstance.defaults.baseURL=i),this.injectAliasEndpoints(),this.initPlugins(),[!0,"all","request","response"].includes(this.options.validate)&&this.use(r2(this.options))}initPlugins(){this.endpointPlugins.set("any-any",new lu("any","any")),this.api.forEach(t=>{let e=new lu(t.method,t.path);switch(t.requestFormat){case"binary":e.use(su("Content-Type","application/octet-stream"));break;case"form-data":e.use(e2());break;case"form-url":e.use(n2());break;case"text":e.use(su("Content-Type","text/plain"));break}this.endpointPlugins.set(`${t.method}-${t.path}`,e)})}getAnyEndpointPlugins(){return this.endpointPlugins.get("any-any")}findAliasEndpointPlugins(t){let e=this.api.find(n=>n.alias===t);if(e)return this.endpointPlugins.get(`${e.method}-${e.path}`)}findEnpointPlugins(t,e){return this.endpointPlugins.get(`${t}-${e}`)}get baseURL(){return this.axiosInstance.defaults.baseURL}get axios(){return this.axiosInstance}use(...t){if(typeof t[0]=="object")return this.getAnyEndpointPlugins().use(t[0]);if(typeof t[0]=="string"&&typeof t[1]=="object"){let e=this.findAliasEndpointPlugins(t[0]);if(!e)throw new Error(`Zodios: no alias '${t[0]}' found to register plugin`);return e.use(t[1])}else if(typeof t[0]=="string"&&typeof t[1]=="string"&&typeof t[2]=="object"){let e=this.findEnpointPlugins(t[0],t[1]);if(!e)throw new Error(`Zodios: no endpoint '${t[0]} ${t[1]}' found to register plugin`);return e.use(t[2])}throw new Error("Zodios: invalid plugin registration")}eject(t){var e;if(typeof t=="string"){this.getAnyEndpointPlugins().eject(t);return}(e=this.endpointPlugins.get(t.key))==null||e.eject(t)}injectAliasEndpoints(){this.api.forEach(t=>{t.alias&&(["post","put","patch","delete"].includes(t.method)?this[t.alias]=(e,n)=>this.request({...n,method:t.method,url:t.path,data:e}):this[t.alias]=e=>this.request({...e,method:t.method,url:t.path}))})}async request(t){let e=t,n=this.getAnyEndpointPlugins(),r=this.findEnpointPlugins(e.method,e.url);e=await n.interceptRequest(this.api,e),r&&(e=await r.interceptRequest(this.api,e));let i=this.axiosInstance.request({...Z_(e,["params","queries"]),url:J_(e),params:e.queries});return r&&(i=r.interceptResponse(this.api,e,i)),i=n.interceptResponse(this.api,e,i),(await i).data}async get(t,...[e]){return this.request({...e,method:"get",url:t})}async post(t,e,...[n]){return this.request({...n,method:"post",url:t,data:e})}async put(t,e,...[n]){return this.request({...n,method:"put",url:t,data:e})}async patch(t,e,...[n]){return this.request({...n,method:"patch",url:t,data:e})}async delete(t,e,...[n]){return this.request({...n,method:"delete",url:t,data:e})}},a2=s2;const $f=k.object({name:k.string().optional(),score:k.number().nullish(),roles:k.array(k.number().int()).optional(),roleId:k.number().int().optional(),statusId:k.number().int().optional(),comment:k.string().optional(),token:k.string(),refresh:k.string(),permissionId:k.number().int().optional(),permission:k.array(k.string())}).passthrough(),o2=k.object({salesOrderId:k.string(),salesOrderStatusId:k.number().int(),pickup:k.string().optional(),delivery:k.string().optional(),createdTime:k.string().optional(),price:k.number().optional(),packages:k.number().int().optional(),pickedup:k.number().int().optional(),timeZone:k.string().optional(),drivers:k.array(k.object({driverId:k.string(),driver:k.string(),chatroomId:k.string()}).partial().passthrough()).nullish(),createdByUid:k.string().optional(),consigneePhone:k.string().optional()}).passthrough(),Df=k.object({total:k.number().int(),page:k.number().int().optional(),salesOrders:k.array(o2)}).passthrough(),Fs=k.object({name:k.string(),firstName:k.string(),middleName:k.string(),lastName:k.string(),mobile:k.string(),address:k.string(),postcode:k.string(),cityId:k.number().int()}).partial().passthrough(),Mf=k.object({sid:k.string(),weight:k.number().optional(),height:k.number().optional(),width:k.number().optional(),length:k.number().optional(),pricing:k.number().optional(),salesOrderStatusId:k.number().int().optional()}).passthrough(),l2=k.object({salesOrderId:k.string(),salesOrderStatusId:k.number().int().optional(),sender:Fs.optional(),recipient:Fs.optional(),createDate:k.string().optional(),pickupDate:k.string().optional(),deliveryDate:k.string().optional(),comment:k.string().optional(),fleetUid:k.string().optional(),driverId:k.string().optional(),driver:k.string().optional(),timeZone:k.string().optional(),chatroomId:k.string().optional(),packages:k.array(Mf).optional()}).passthrough(),Us=k.object({roleId:k.number().int(),roleName:k.string(),permissions:k.array(k.string()),memberCount:k.number().int(),isSystem:k.boolean().optional()}).passthrough(),Ff=k.object({roles:k.array(Us)}).passthrough(),cu=k.object({roleName:k.string().min(1),permissions:k.array(k.string()).min(1)}).passthrough();k.object({}).partial().passthrough();const Bs=k.object({uid:k.string(),name:k.string(),email:k.string().optional(),roleId:k.number().int(),roleName:k.string().optional(),statusId:k.number().int().optional()}).passthrough(),Uf=k.object({total:k.number().int(),users:k.array(Bs)}).passthrough(),c2=k.object({name:k.string(),email:k.string().optional(),roleId:k.number().int()}).passthrough(),d2=k.object({uid:k.string(),roleId:k.number().int().optional(),statusId:k.number().int().optional()}).passthrough(),Rl=k.object({id:k.number().int(),phone:k.string(),roleId:k.number().int(),roleName:k.string().optional(),invitedAt:k.string(),expiresAt:k.string()}).passthrough(),Bf=k.object({invites:k.array(Rl)}).passthrough(),u2=k.object({phone:k.string(),roleId:k.number().int()}).passthrough(),h2=k.object({id:k.number().int(),actor:k.string(),action:k.string(),target:k.string(),when:k.string()}).passthrough(),p2=k.object({entries:k.array(h2)}).passthrough(),_t={ApiVerifyTokenResponse:$f,ApiSalesOrderListResponse:Df,ApiSalesOrderDetail:l2,ApiRole:Us,ApiRoleListResponse:Ff,ApiAssistantUser:Bs,ApiAssistantListResponse:Uf,ApiInvite:Rl,ApiInviteListResponse:Bf},f2=i2([{method:"get",path:"/company/assistant",alias:"getAssistantList",requestFormat:"json",response:Uf},{method:"post",path:"/company/assistant",alias:"postAssistant",requestFormat:"json",parameters:[{name:"body",type:"Body",schema:c2}],response:Bs},{method:"put",path:"/company/assistant",alias:"putAssistant",requestFormat:"json",parameters:[{name:"body",type:"Body",schema:d2}],response:Bs},{method:"get",path:"/company/rbac/audit",alias:"getAuditLog",requestFormat:"json",response:p2},{method:"get",path:"/company/rbac/invites",alias:"getInviteList",requestFormat:"json",response:Bf},{method:"post",path:"/company/rbac/invites",alias:"postInvite",requestFormat:"json",parameters:[{name:"body",type:"Body",schema:u2}],response:Rl},{method:"delete",path:"/company/rbac/invites/:inviteId",alias:"deleteInvite",requestFormat:"json",parameters:[{name:"inviteId",type:"Path",schema:k.number().int()}],response:k.object({}).partial().passthrough()},{method:"get",path:"/company/rbac/roles",alias:"getRoleList",description:`Path mirrors the company app&#x27;s RBAC_ROLES constant so the real tenant API drops in. The portal expects &#x60;permissions&#x60; (grant codes) and &#x60;memberCount&#x60; embedded per role — the delete guard reads memberCount, so no separate delete-check round-trip is needed at portal scale. Permission note: the portal calls this holding perm_role_ls, but ALSO holding only perm_asst_add / perm_asst_edt (the add-user and edit-user role selects need options) — the backend must let the read-list ride those write codes, or the selects render optionless for such grants.
`,requestFormat:"json",response:Ff},{method:"post",path:"/company/rbac/roles",alias:"postRole",requestFormat:"json",parameters:[{name:"body",type:"Body",schema:cu}],response:Us},{method:"put",path:"/company/rbac/roles/:roleId",alias:"putRole",requestFormat:"json",parameters:[{name:"body",type:"Body",schema:cu},{name:"roleId",type:"Path",schema:k.number().int()}],response:Us},{method:"delete",path:"/company/rbac/roles/:roleId",alias:"deleteRole",requestFormat:"json",parameters:[{name:"roleId",type:"Path",schema:k.number().int()}],response:k.object({}).partial().passthrough()},{method:"get",path:"/company/salesOrder/:salesOrderId",alias:"getSalesOrder",requestFormat:"json",parameters:[{name:"salesOrderId",type:"Path",schema:k.string()}],response:k.object({salesOrderId:k.string(),salesOrderStatusId:k.number().int().optional(),sender:Fs.optional(),recipient:Fs.optional(),createDate:k.string().optional(),pickupDate:k.string().optional(),deliveryDate:k.string().optional(),comment:k.string().optional(),fleetUid:k.string().optional(),driverId:k.string().optional(),driver:k.string().optional(),timeZone:k.string().optional(),chatroomId:k.string().optional(),packages:k.array(Mf).optional()}).passthrough()},{method:"get",path:"/company/salesOrderList",alias:"getSalesOrderList",requestFormat:"json",parameters:[{name:"page",type:"Query",schema:k.number().int()},{name:"limit",type:"Query",schema:k.number().int().optional()},{name:"salesOrderStatusId",type:"Query",schema:k.number().int().optional()},{name:"searchCol",type:"Query",schema:k.number().int().optional()},{name:"content",type:"Query",schema:k.string().optional()},{name:"sortCol",type:"Query",schema:k.number().int().optional()},{name:"sort",type:"Query",schema:k.boolean().optional()},{name:"scope",type:"Query",schema:k.enum(["own","sub","all"]).optional()}],response:Df},{method:"post",path:"/company/verifyToken",alias:"postVerifyToken",requestFormat:"json",parameters:[{name:"body",type:"Body",schema:k.object({token:k.string()}).passthrough()}],response:$f}]);new a2(f2);function Tt(t,e){return n=>{const r=t.safeParse(n.data);if(r.success)return{...n,data:r.data};const i=o=>!o||typeof o!="object"?{type:typeof o}:{keys:Object.keys(o)},a={endpoint:e,issues:r.error.issues,received:i(n.data)};return console.error("[api drift]",a),n}}const m2=t=>se.post(it.VERIFY_TOKEN,t).then(Tt(_t.ApiVerifyTokenResponse,"postVerifyToken")).then(e=>(se.defaults.headers.common.Token=e.data.token,se.defaults.headers.common["X-Refresh-Token"]=e.data.refresh,e)),g2=t=>se.get(it.SALES_ORDER_LIST,{params:t}).then(Tt(_t.ApiSalesOrderListResponse,"getSalesOrderList")),x2=t=>se.get(Ni(it.SALES_ORDER,{salesOrderId:t})).then(Tt(_t.ApiSalesOrderDetail,"getSalesOrder")),zf=()=>se.get(it.RBAC_ROLES).then(Tt(_t.ApiRoleListResponse,"getRoleList")),y2=t=>se.post(it.RBAC_ROLES,t).then(Tt(_t.ApiRole,"postRole")),v2=(t,e)=>se.put(Ni(it.RBAC_ROLE,{roleId:String(t)}),e).then(Tt(_t.ApiRole,"putRole")),b2=t=>se.delete(Ni(it.RBAC_ROLE,{roleId:String(t)})),w2=()=>se.get(it.ASSISTANT).then(Tt(_t.ApiAssistantListResponse,"getAssistantList")),k2=t=>se.post(it.ASSISTANT,t).then(Tt(_t.ApiAssistantUser,"postAssistant")),du=t=>se.put(it.ASSISTANT,t).then(Tt(_t.ApiAssistantUser,"putAssistant")),uu="Australia/Sydney";function S2(t){if(!t)return uu;try{return new Intl.DateTimeFormat("en-AU",{timeZone:t}).format(0),t}catch{return uu}}function Cl(t,e,n){const r={};for(const i of new Intl.DateTimeFormat("en-AU",{timeZone:S2(e),...n}).formatToParts(t))r[i.type]=i.value;return r}const j2=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function St(t,e,n=!1){const r=Cl(new Date(t),e,{weekday:"short",day:"numeric",month:"numeric",year:"numeric"}),i=j2[Number(r.month)-1]??r.month;return`${r.weekday}, ${Number(r.day)} ${i}${n?` ${r.year}`:""}`}function $i(t,e){const n=Cl(new Date(t),e,{hour:"numeric",minute:"2-digit",hour12:!0});return`${n.hour}:${n.minute} ${(n.dayPeriod??"").toUpperCase()}`.trim()}function Hf(t,e){const n=Cl(t,e,{year:"numeric",month:"2-digit",day:"2-digit"});return`${n.year}-${n.month}-${n.day}`}function qi(t,e=!1){return St(`${t}T12:00:00.000Z`,"UTC",e)}function E2(t,e,n=new Date){const r=Hf(n,e);if(t===r)return"today";const[i,a,o]=r.split("-").map(Number),l=new Date(Date.UTC(i,a-1,o+1)).toISOString().slice(0,10);return t===l?"tomorrow":null}function _2(t,e,n=new Date){const[r,i,a]=Hf(n,e).split("-").map(Number),[o,l,c]=t.split("-").map(Number);return Math.round((Date.UTC(o,l-1,c)-Date.UTC(r,i-1,a))/864e5)}function Di(t){return t?`${t.suburb}, ${t.state}`:null}function Vf(t){return t?`${t.suburb} ${t.state} ${t.postcode}`.trim():null}const Ol={public:"sg-track-lookup",consignee:"sg-track-delivery-lookup"},T2=["sendit-go.track.recentlyTracked.v1"];function Wf(t,e){try{sessionStorage.setItem(Ol[t],e)}catch{}}function qf(t){try{return sessionStorage.getItem(Ol[t])}catch{return null}}function I2(t){try{sessionStorage.removeItem(Ol[t])}catch{}}function R2(){try{for(const t of T2)localStorage.removeItem(t)}catch{}}const C2=["in_transit","delivered","completed"],O2=["delivered","completed"];function Xa(t,...e){for(const n of e){const r=t.travelHistory.find(i=>i.activity===n);if(r)return r.time}return null}function Qa(t){const e=t.travelHistory[t.travelHistory.length-1];return e?e.time:null}function A2(t){return t==="delivered"?"flag":t==="inTransit"?"truck":"box"}function hu(t,e,n,r,i={}){return t.map((a,o)=>{const l=o<e?"done":o===e?"current":"future",c=l==="done"?"check":l==="current"&&n==="amber"?"truck":A2(a);return{key:a,labelKey:`tracking:guest.milestone.${l==="current"&&i[a]?i[a]:a}`,state:l,tone:l==="current"?n:"blue",icon:c,at:l==="future"?null:r[a]??null}})}const pu=["orderCreated","pickedUp","inTransit","delivered"],fu=["preparing","inTransit","delivered"];function Al(t,e){const{stage:n}=t;if(n==="cancelled")return null;const r=Xa(t,"order_created"),i=Xa(t,"picked_up"),a=Xa(t,"signed","completed","arrived"),o=O2.includes(n),l=C2.includes(n);if(e==="public"){const d=o?pu.length:l?2:1;return hu(pu,d,d===2?"amber":"blue",{orderCreated:r,pickedUp:l||o?i:null,inTransit:o?i:Qa(t),delivered:a},{pickedUp:"awaitingPickup"})}const c=o?fu.length:l?1:0;return hu(fu,c,c===1?"amber":"blue",{preparing:l||o?r:Qa(t),inTransit:o?i:Qa(t),delivered:a})}function Kf(t,e){const n=Al(t,e);if(!n)return{labelKey:"tracking:guest.chip.cancelled",tone:"red"};const r=n.find(i=>i.state==="current");return r?{labelKey:r.labelKey,tone:r.tone}:{labelKey:"tracking:guest.milestone.delivered",tone:"blue"}}const P2=B`
  --trk-page: #ffffff;
  --trk-band: #ffffff;
  --trk-card: #ffffff;
  --trk-section: #f8fafc;
  --trk-border: #e5e7eb;
  --trk-ink: #071120;
  --trk-label-ink: #0b1020;
  /* #6E7480 in the reference; darkened to clear 4.5:1 on white and on the
     #f8fafc section fill (5.6 / 5.3) — AA, recorded as a deviation. */
  --trk-muted: #646a76;
  /* interaction only (hover); not a surface */
  --trk-tint: #eaf4ff;
  --trk-table-head: var(--trk-section);
  --trk-link: #003df2;
  --trk-history-date: #003df2;
  --trk-halo: #ffffff;
  --trk-rail-future: #f4f7fb;
  --trk-rail-current-amber: #fff2e5;
  --trk-rail-current-blue: #eaf4ff;
  --trk-marker-future: #dbe0e9;
  --trk-icon-future: #536173;
  --trk-chip-amber-bg: #fff5e6;
  --trk-amber-ink: #a85500;
  --trk-chip-blue-bg: #eaf4ff;
  --trk-blue-ink: #003df2;
  --trk-chip-red-bg: #fdecec;
  --trk-red-ink: #b42318;
  /* #007FFF as 10px text on the tint is 3.6:1; the label uses the primary
     ink instead. #007FFF stays on marks, tints and focus rings. */
  --trk-eta-label-mobile: #003df2;
`,N2=B`
  --trk-page: var(--v29-page);
  --trk-band: var(--v29-raised);
  --trk-card: var(--v29-card);
  --trk-border: var(--v29-line-soft);
  --trk-ink: var(--v29-text);
  --trk-label-ink: var(--v29-text);
  --trk-muted: var(--v29-muted);
  --trk-tint: rgba(0, 127, 255, 0.14);
  --trk-section: rgba(147, 163, 188, 0.08);
  --trk-table-head: var(--trk-section);
  --trk-link: #6fb4ff;
  --trk-history-date: #6fb4ff;
  --trk-halo: var(--v29-card);
  --trk-rail-future: rgba(147, 163, 188, 0.18);
  --trk-rail-current-amber: rgba(234, 129, 24, 0.38);
  --trk-rail-current-blue: rgba(0, 127, 255, 0.22);
  --trk-marker-future: #2a3d5c;
  --trk-icon-future: #93a3bc;
  --trk-chip-amber-bg: rgba(234, 129, 24, 0.16);
  --trk-amber-ink: #f5a93b;
  --trk-chip-blue-bg: rgba(0, 127, 255, 0.16);
  --trk-blue-ink: #6fb4ff;
  --trk-chip-red-bg: rgba(229, 72, 77, 0.16);
  --trk-red-ink: #f26b6f;
  --trk-eta-label-mobile: #6fb4ff;
`,_e={blue:"#007FFF",primaryFill:"#003DF2",amber:"#EA8118",onPrimary:"#FFFFFF"},Gf=640,Zf=f.div`
  ${P2}
  [data-theme='dark'] & {
    ${N2}
  }
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  background: var(--trk-page);
  color: var(--trk-ink);

  /* The shared SiteNav is fixed and its height varies by breakpoint (69–74px),
     so paint the band colour up under it: no strip of page colour between the
     header and the title band at any width (visible in dark theme, where band
     and page differ; in light both are white). */
  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: -80px;
    height: 80px;
    background: var(--trk-band);
  }
`,le=t=>B`
  @media (max-width: ${Gf}px) {
    ${t}
  }
`,ki=f.span`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  border: 0;
`,L2=f.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* the shared SiteNav is fixed: 16px + 41px CTA + 16px + 1px hairline */
  padding-top: 74px;
  @media (max-width: 720px) {
    padding-top: 69px;
  }
`,da=f.div`
  width: 100%;
  max-width: calc(1288px + 2 * clamp(16px, 5.3vw, 76px));
  margin: 0 auto;
  padding: 0 clamp(16px, 5.3vw, 76px);
  ${le(B`
    padding: 0 16px;
  `)}
`,Pl=({title:t,audience:e,children:n})=>{const{mode:r,toggleTheme:i}=Ws();return S.useEffect(()=>{R2()},[]),s.jsxs(s.Fragment,{children:[s.jsx(qs,{}),s.jsxs(hh,{children:[s.jsx("title",{children:t}),s.jsx("meta",{name:"robots",content:"noindex"})]}),s.jsxs(Yo,{children:[s.jsx(El,{theme:r,onToggleTheme:i,audience:e}),s.jsx(L2,{children:s.jsx(Zf,{children:n})}),s.jsx(sa,{}),s.jsx(aa,{})]})]})},$2=f.section`
  background: var(--trk-band);
  /* white band on a white page: a hairline marks where the header ends */
  border-bottom: 1px solid var(--trk-border);
  padding: 28px 0 21px;
  ${le(B`
    padding: 20px 0 18px;
  `)}
`,D2=f.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding-left: 4px;
  ${le(B`
    gap: 8px;
    padding-left: 2px;
  `)}
`,M2=f(De)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: ${E};
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  color: var(--trk-link);
  text-decoration: none;
  border-radius: 4px;

  svg {
    width: 14px;
    height: 14px;
  }

  &:hover {
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid ${_e.blue};
    outline-offset: 2px;
  }

  ${le(B`
    font-size: 12px;
    line-height: 15px;
    min-height: 44px;
    margin: -14px 0;
  `)}
`,F2=f.p`
  margin: 0;
  font-family: ${E};
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  /* #007FFF as 12px text on the band is 3.6:1; text uses the primary ink */
  color: var(--trk-link);
`,U2=f.h1`
  margin: 0;
  font-family: ${Ue};
  font-style: italic;
  font-weight: 700;
  font-size: 62px;
  /* the reference's 98px text box at 62px (567:846) */
  line-height: 98px;
  color: var(--trk-ink);

  &:focus {
    outline: none;
  }

  ${le(B`
    font-size: 40px;
    line-height: 49px;
  `)}
`,B2=f.p`
  margin: 0;
  font-family: ${E};
  font-size: 18px;
  line-height: 22px;
  color: var(--trk-muted);
  ${le(B`
    font-size: 13px;
    line-height: 17px;
    max-width: 340px;
  `)}
`,Nl=({title:t,subtitle:e,eyebrow:n,backTo:r,focusTitle:i})=>{const a=S.useRef(null);return S.useEffect(()=>{var o;i&&((o=a.current)==null||o.focus())},[i]),s.jsx($2,{"data-testid":"track-title-band",children:s.jsx(da,{children:s.jsxs(D2,{children:[r&&s.jsxs(M2,{to:r.to,children:[s.jsx(Xo,{"aria-hidden":"true"}),r.label]}),n&&s.jsx(F2,{children:n}),s.jsx(U2,{ref:a,tabIndex:i?-1:void 0,children:t}),s.jsx(B2,{children:e})]})})})},Ll=f.div`
  padding: 0 0 48px;
  ${le(B`
    padding: 16px 0 32px;
  `)}
`,ua=f.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${le(B`
    gap: 14px;
  `)}
`,Lt=f.section`
  background: var(--trk-card);
  border: 1px solid var(--trk-border);
  border-radius: 14px;
  padding: 22px 26px 27px;
  min-width: 0;
  ${le(B`
    border-radius: 12px;
    padding: 16px;
  `)}
`,$l=f.h2`
  margin: 0 0 18px;
  font-family: ${Ue};
  font-style: italic;
  font-weight: 700;
  font-size: 30px;
  /* the reference's 47px title box (567:873 / 567:893) */
  line-height: 47px;
  color: var(--trk-ink);
  ${le(B`
    font-size: 22px;
    line-height: 1.25;
    margin-bottom: 10px;
  `)}
`,$t=f.span`
  font-family: ${E};
  font-size: 11px;
  font-weight: 700;
  line-height: 13px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--trk-muted);
  ${le(B`
    font-size: 10px;
    line-height: 12px;
  `)}
`,z2={amber:B`
    background: var(--trk-chip-amber-bg);
    color: var(--trk-amber-ink);
    --dot: ${_e.amber};
  `,blue:B`
    background: var(--trk-chip-blue-bg);
    color: var(--trk-blue-ink);
    --dot: ${_e.blue};
  `,red:B`
    background: var(--trk-chip-red-bg);
    color: var(--trk-red-ink);
    --dot: var(--trk-red-ink);
  `},H2=f.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 999px;
  font-family: ${E};
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  white-space: nowrap;
  ${({$tone:t})=>z2[t]}

  &::before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--dot);
    flex-shrink: 0;
  }

  ${le(B`
    gap: 6px;
    padding: 6px 10px;
    font-size: 11px;
    line-height: 13px;

    &::before {
      width: 8px;
      height: 8px;
    }
  `)}
`,V2=({shipment:t,taxonomy:e})=>{const{t:n}=G(),r=Kf(t,e);return s.jsx(H2,{$tone:r.tone,"data-testid":"status-chip","data-tone":r.tone,children:n(r.labelKey)})},W2=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-height: 60px;
  ${le(B`
    min-height: 54px;
    align-items: flex-start;
  `)}
`,q2=f.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`,K2=f.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,G2=f.span`
  font-family: ${E};
  font-size: 30px;
  font-weight: 700;
  line-height: 36px;
  color: var(--trk-ink);
  letter-spacing: 0.01em;
  ${le(B`
    font-size: 20px;
    line-height: 24px;
  `)}
`,Z2=f.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: ${_e.blue};
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background: var(--trk-tint);
  }

  &:focus-visible {
    outline: 2px solid ${_e.blue};
    outline-offset: 2px;
  }

  ${le(B`
    width: 44px;
    height: 44px;
    margin: -10px -10px -10px -6px;

    svg {
      width: 18px;
      height: 18px;
    }
  `)}
`,Yf=({shipment:t,taxonomy:e})=>{const{t:n}=G(),[r,i]=S.useState("idle"),a=async()=>{try{await navigator.clipboard.writeText(t.orderId),i("copied")}catch{i("failed")}window.setTimeout(()=>i("idle"),4e3)};return s.jsxs(W2,{children:[s.jsxs(q2,{children:[s.jsx($t,{children:n("tracking:guest.summary.trackingNumber")}),s.jsxs(K2,{children:[s.jsx(G2,{"data-testid":"tracking-number",children:t.orderId}),s.jsx(Z2,{type:"button",onClick:a,"aria-label":n("tracking:guest.summary.copy"),children:r==="copied"?s.jsx(Ks,{"aria-hidden":"true"}):s.jsx(qm,{"aria-hidden":"true"})}),s.jsx(ki,{role:"status","aria-live":"polite",children:r==="copied"?n("tracking:guest.summary.copied"):r==="failed"?n("tracking:guest.summary.copyFailed"):""})]})]}),s.jsx(V2,{shipment:t,taxonomy:e})]})},Y2=f.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 1px minmax(0, 1fr);
  column-gap: 96px;
  align-items: start;
  min-height: 96px;
  padding: 12px 20px;
  border-radius: 10px;
  /* neutral section fill for every state (no blue panel wash); the cancelled
     state keeps its muted label, the live state its blue micro-label accent */
  background: var(--trk-section);
  border: 1px solid var(--trk-border);
  ${({$neutral:t})=>le(B`
      display: flex;
      flex-direction: column;
      align-items: stretch;
      gap: 12px;
      min-height: 0;
      padding: 0;
      background: transparent;
      border: 0;
      --eta-mobile-bg: var(--trk-section);
      --eta-mobile-label: ${t?"var(--trk-muted)":"var(--trk-eta-label-mobile)"};
    `)}
`,J2=f.span`
  align-self: center;
  width: 1px;
  height: 60px;
  background: var(--trk-border);
  ${le(B`
    display: none;
  `)}
`,mu=f.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;

  .value {
    font-family: ${E};
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    color: var(--trk-ink);
  }

  .sub {
    font-family: ${E};
    font-size: 13px;
    line-height: 16px;
    color: var(--trk-muted);
  }

  ${({$primary:t})=>le(B`
      gap: 3px;
      ${t?B`
            padding: 10px 12px 12px;
            border-radius: 9px;
            background: var(--eta-mobile-bg);
            ${$t} {
              color: var(--eta-mobile-label);
            }
            .value {
              font-size: 17px;
              line-height: 21px;
            }
          `:B`
            .value {
              font-size: 15px;
              font-weight: 600;
              line-height: 18px;
            }
          `}
      .sub {
        font-size: 11px;
        line-height: 14px;
      }
    `)}
`;function X2(t){return t.travelHistory[t.travelHistory.length-1]??null}function Q2(t){const e=t.travelHistory.find(n=>n.activity==="signed")??t.travelHistory.find(n=>n.activity==="completed")??t.travelHistory.find(n=>n.activity==="arrived");return(e==null?void 0:e.time)??null}function eT(t){var e,n;return((e=t.travelHistory.find(r=>r.activity==="cancelled"))==null?void 0:e.time)??((n=t.exceptions.find(r=>r.type==="cancelled"))==null?void 0:n.occurredAt)??null}function ha(t,e=new Date){const{t:n}=G(),r=t.timezone,i=Vf(t.destination);if(t.stage==="delivered"||t.stage==="completed"){const u=Q2(t);return{label:n("tracking:guest.eta.deliveredLabel"),value:u?`${St(u,r)}, ${$i(u,r)}`:n("tracking:guest.eta.deliveredLabel"),sub:[u?St(u,r,!0):null,i].filter(Boolean).join(" · "),neutral:!1}}if(t.stage==="cancelled"){const u=eT(t);return{label:n("tracking:guest.eta.cancelledLabel"),value:u?St(u,r,!0):n("tracking:guest.eta.cancelledLabel"),sub:n("tracking:guest.eta.cancelledNote"),neutral:!0}}const a=t.estimatedDelivery;if(!a)return{label:n("tracking:guest.eta.label"),value:n("tracking:guest.eta.toBeConfirmed"),sub:[n("tracking:guest.eta.toBeConfirmedNote"),i].filter(Boolean).join(" · "),neutral:!1};const o=_2(a.date,r,e);if(o<0)return{label:n("tracking:guest.eta.label"),value:n("tracking:guest.eta.toBeConfirmed"),sub:[n("tracking:guest.eta.previouslyExpected",{date:qi(a.date,!0)}),i].filter(Boolean).join(" · "),neutral:!1};const l=E2(a.date,r,e),c=a.timeWindow??"",d=l?n(`tracking:guest.eta.${l}${c}`):c?n(`tracking:guest.eta.day${c}`,{day:qi(a.date,o>7)}):qi(a.date,o>7);return{label:n("tracking:guest.eta.label"),value:d,sub:[qi(a.date,!0),i].filter(Boolean).join(" · "),neutral:!1}}const tT=({shipment:t,now:e})=>{const{t:n}=G(),r=ha(t,e),i=X2(t),a=t.timezone;return s.jsxs(Y2,{"data-testid":"eta-panel",$neutral:r.neutral,children:[s.jsxs(mu,{$primary:!0,children:[s.jsx($t,{children:r.label}),s.jsx("span",{className:"value","data-testid":"eta-value",children:r.value}),r.sub&&s.jsx("span",{className:"sub",children:r.sub})]}),s.jsx(J2,{"aria-hidden":"true"}),s.jsxs(mu,{children:[s.jsx($t,{children:n("tracking:guest.latest.label")}),s.jsx("span",{className:"value","data-testid":"latest-value",children:n(i?`tracking:guest.activity.${i.activity}`:"tracking:guest.latest.none")}),i&&s.jsx("span",{className:"sub",children:[St(i.time,a,!0),$i(i.time,a),Di(i.location)].filter(Boolean).join(" · ")})]})]})},nT=f.dl`
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
  ${le(B`
    gap: 0;
  `)}
`,rT=f.div`
  display: grid;
  grid-template-columns: 183px minmax(0, 1fr);
  align-items: center;
  min-height: 24px;

  dt {
    margin: 0;
    display: flex;
  }

  dd {
    margin: 0;
    font-family: ${E};
    font-size: 14px;
    line-height: 17px;
    color: var(--trk-ink);
  }

  ${le(B`
    grid-template-columns: auto minmax(0, 1fr);
    gap: 12px;
    min-height: 32px;
    padding: 6px 0;

    dd {
      font-size: 12px;
      line-height: 15px;
      text-align: right;
    }

    /* the app frame (567:1070) leaves the number to the summary above */
    &[data-row='trackingNumber'] {
      display: none;
    }
  `)}
`;function Jf(t){const{t:e}=G(),n=t.timezone,r=[];r.push(["trackingNumber",e("tracking:guest.details.trackingNumber"),t.orderId]),r.push(["shipDate",e("tracking:guest.details.shipDate"),t.shipDate?St(t.shipDate,n,!0):t.stage==="cancelled"?"—":e("tracking:guest.details.notShipped")]),t.carrierName&&r.push(["carrier",e("tracking:guest.details.carrier"),t.carrierName]),r.push(["origin",e("tracking:guest.details.origin"),Di(t.origin)??"—"]),r.push(["destination",e("tracking:guest.details.destination"),Vf(t.destination)??"—"]);const i=e("tracking:guest.details.packageCount",{count:t.packages.current}),a=t.packages.affected>0?` · ${e("tracking:guest.details.affected",{count:t.packages.affected})}`:"";return r.push(["packages",e("tracking:guest.details.packages"),`${i}${a}`]),t.proofType&&r.push(["proof",e("tracking:guest.details.proof"),e(`tracking:guest.details.proofType.${t.proofType}`)]),r}const iT=({shipment:t})=>{const{t:e}=G(),n=Jf(t);return s.jsxs(Lt,{"data-testid":"details-card","aria-labelledby":"trk-details-title",children:[s.jsx($l,{id:"trk-details-title",children:e("tracking:guest.details.title")}),s.jsx(nT,{children:n.map(([r,i,a])=>s.jsxs(rT,{"data-row":r,children:[s.jsx("dt",{children:s.jsx($t,{children:i})}),s.jsx("dd",{children:a})]},r))})]})},sT=f.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 12px;
  /* header lands 12px under the 47px title, as in 567:894 */
  margin: -18px 0 -12px;
  table-layout: fixed;
  font-family: ${E};

  th {
    height: 32px;
    padding: 0 12px;
    background: var(--trk-table-head);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    text-align: left;
    color: var(--trk-muted);
  }

  td {
    height: 54px;
    padding: 0 12px;
    font-size: 13px;
    line-height: 16px;
    vertical-align: middle;
    color: var(--trk-ink);
  }

  td.when {
    color: var(--trk-history-date);
  }

  td.where {
    color: var(--trk-muted);
  }

  tr.latest td {
    background: var(--trk-section);
  }

  tr.latest td.what {
    font-weight: 600;
  }

  /* 567:898 column starts at 0 / 208 / 546 of a 740 row */
  col.when {
    width: 28.1%;
  }

  col.what {
    width: 45.7%;
  }

  ${le(B`
    display: none;
  `)}
`,aT=f.ol`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  font-family: ${E};

  li {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 6px 0;
  }

  .what {
    font-size: 12px;
    font-weight: 600;
    line-height: 15px;
    color: var(--trk-ink);
  }

  .when {
    font-size: 10px;
    line-height: 13px;
    color: var(--trk-muted);
  }
`,oT=f.div`
  display: none;
  ${le(B`
    display: block;
  `)}
`,Xf=({shipment:t,testId:e})=>{const{t:n}=G(),r=t.timezone,i=[...t.travelHistory].reverse();return s.jsx(aT,{"data-testid":e,children:i.map((a,o)=>s.jsxs("li",{children:[s.jsx("span",{className:"what",children:n(`tracking:guest.activity.${a.activity}`)}),s.jsx("span",{className:"when",children:[St(a.time,r),$i(a.time,r),Di(a.location)].filter(Boolean).join(" · ")})]},`${a.time}-${a.activity}-${o}`))})},lT=f.p`
  margin: 0;
  font-family: ${E};
  font-size: 14px;
  color: var(--trk-muted);
`,cT=({shipment:t})=>{const{t:e}=G(),n=t.timezone,r=[...t.travelHistory].reverse();return s.jsxs(Lt,{"data-testid":"history-card","aria-labelledby":"trk-history-title",children:[s.jsx($l,{id:"trk-history-title",children:e("tracking:guest.history.title")}),r.length===0?s.jsx(lT,{children:e("tracking:guest.history.empty")}):s.jsxs(s.Fragment,{children:[s.jsxs(sT,{"data-testid":"history-table",children:[s.jsxs("colgroup",{children:[s.jsx("col",{className:"when"}),s.jsx("col",{className:"what"}),s.jsx("col",{className:"where"})]}),s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{scope:"col",children:e("tracking:guest.history.date")}),s.jsx("th",{scope:"col",children:e("tracking:guest.history.activity")}),s.jsx("th",{scope:"col",children:e("tracking:guest.history.location")})]})}),s.jsx("tbody",{children:r.map((i,a)=>s.jsxs("tr",{className:a===0?"latest":void 0,children:[s.jsxs("td",{className:"when",children:[St(i.time,n,!0),s.jsx("br",{}),$i(i.time,n)]}),s.jsx("td",{className:"what",children:e(`tracking:guest.activity.${i.activity}`)}),s.jsx("td",{className:"where",children:Di(i.location)??"—"})]},`${i.time}-${i.activity}-${a}`))})]}),s.jsx(oT,{children:s.jsx(Xf,{shipment:t,testId:"history-list"})})]})]})},dT=f.h2`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 10px;
  font-family: ${E};
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: var(--trk-ink);

  svg {
    width: 20px;
    height: 20px;
    color: ${_e.amber};
    flex-shrink: 0;
  }
`,uT=f.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-family: ${E};
  font-size: 14px;
  line-height: 1.45;
  color: var(--trk-ink);

  .when {
    color: var(--trk-muted);
    font-size: 13px;
  }
`;function Qf(t){return`mailto:${xe.supportEmail}?subject=${encodeURIComponent(t)}`}const pa=f.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 46px;
  padding: 0 18px;
  border-radius: 8px;
  border: 1px solid var(--trk-border);
  background: var(--trk-card);
  font-family: ${E};
  font-size: 14px;
  font-weight: 600;
  color: var(--trk-ink);
  text-decoration: none;
  cursor: pointer;

  &:hover {
    border-color: ${_e.blue};
  }

  &:focus-visible {
    outline: 2px solid ${_e.blue};
    outline-offset: 2px;
  }
`,hT=f.div`
  margin-top: 12px;
`,em=({shipment:t,showContact:e=!0})=>{const{t:n}=G(),r=t.exceptions.filter(a=>a.type!=="cancelled"||t.stage!=="cancelled");if(r.length===0)return null;const i=t.timezone;return s.jsxs(Lt,{"data-testid":"exceptions-card","aria-labelledby":"trk-exceptions-title",role:"region",children:[s.jsxs(dT,{id:"trk-exceptions-title",children:[s.jsx(Qo,{"aria-hidden":"true"}),n("tracking:guest.exceptions.title")]}),s.jsx(uT,{children:r.map((a,o)=>s.jsxs("li",{children:[n(`tracking:guest.exceptions.${a.type}`,{count:a.count??1})," ",a.occurredAt&&s.jsx("span",{className:"when",children:St(a.occurredAt,i,!0)})]},`${a.type}-${o}`))}),e&&s.jsx(hT,{children:s.jsx(pa,{href:Qf(`Delivery update — ${t.orderId}`),children:n("tracking:guest.exceptions.contact")})})]})},pT=f.form`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  max-width: 830px;
  min-height: 58px;
  padding: 5px 5px 5px 18px;
  border-radius: 10px;
  border: 1px solid var(--trk-border);
  background: var(--trk-card);

  &:focus-within {
    border-color: ${_e.blue};
    box-shadow: 0 0 0 3px rgba(0, 127, 255, 0.18);
  }

  > svg {
    width: 22px;
    height: 22px;
    color: var(--trk-muted);
    flex-shrink: 0;
  }

  ${le(B`
    padding-left: 12px;
  `)}
`,fT=f.input`
  flex: 1;
  min-width: 0;
  height: 46px;
  border: 0;
  outline: none;
  background: transparent;
  font-family: ${E};
  font-size: 17px;
  color: var(--trk-ink);
  text-transform: uppercase;

  &::placeholder {
    text-transform: none;
    color: var(--trk-muted);
  }
`,mT=nh`
  to {
    transform: rotate(360deg);
  }
`,gT=f.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.35);
  border-top-color: #ffffff;
  animation: ${mT} 0.8s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    border-color: #ffffff;
  }
`,xT=f.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 48px;
  min-width: 144px;
  padding: 0 22px;
  border: 0;
  border-radius: 8px;
  background: ${_e.primaryFill};
  color: ${_e.onPrimary};
  font-family: ${Ue};
  font-style: italic;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover:not([aria-disabled='true']) {
    transform: translateY(-1px);
  }

  &[aria-disabled='true'] {
    cursor: progress;
  }

  &:focus-visible {
    outline: 2px solid ${_e.blue};
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover:not([aria-disabled='true']) {
      transform: none;
    }
  }

  ${le(B`
    min-width: 96px;
    padding: 0 16px;
  `)}
`,yT=f.p`
  margin: 8px 0 0;
  font-family: ${E};
  font-size: 13px;
  line-height: 1.4;
  color: ${({$tone:t})=>t==="error"?"var(--trk-red-ink)":t==="notice"?"var(--trk-ink)":"var(--trk-muted)"};
  font-weight: ${({$tone:t})=>t==="notice"?600:400};
`;function tm(t,e){return!t||t.kind==="ok"?null:{tone:t.kind==="format"||t.kind==="notFound"?"error":"notice",text:e(`tracking:guest.error.${t.kind}`)}}const nm=({value:t,onChange:e,onSubmit:n,busy:r,message:i})=>{const{t:a}=G(),o=(i==null?void 0:i.tone)??"hint";return s.jsxs("div",{children:[s.jsxs(pT,{role:"search",noValidate:!0,onSubmit:l=>{l.preventDefault(),!r&&n()},children:[s.jsx(Ym,{"aria-hidden":"true"}),s.jsx(fT,{id:"trk-order-id",name:"orderId",value:t,onChange:l=>e(l.target.value),placeholder:a("tracking:guest.entry.placeholder"),"aria-label":a("tracking:guest.entry.inputLabel"),"aria-describedby":"trk-order-id-hint","aria-invalid":o==="error"?!0:void 0,autoComplete:"off",autoCapitalize:"characters",spellCheck:!1,maxLength:32}),s.jsxs(xT,{type:"submit","aria-disabled":r||void 0,"aria-busy":r||void 0,children:[r&&s.jsx(gT,{"aria-hidden":"true"}),a(r?"tracking:guest.entry.submitBusy":"tracking:guest.entry.submit")]})]}),s.jsx(yT,{id:"trk-order-id-hint",role:i?"alert":void 0,$tone:o,children:(i==null?void 0:i.text)??a("tracking:guest.entry.hint")}),s.jsx(ki,{role:"status","aria-live":"polite",children:r?a("tracking:guest.entry.busyStatus"):""})]})},Ki=f.span`
  display: block;
  width: ${({$w:t})=>t};
  height: ${({$h:t})=>t??14}px;
  border-radius: 6px;
  background: var(--trk-rail-future);
`,vT=f(Lt)`
  display: flex;
  flex-direction: column;
  gap: 18px;
`,rm=()=>{const{t}=G();return s.jsxs(vT,{"aria-busy":"true","aria-label":t("tracking:guest.error.loading"),"data-testid":"result-loading",children:[s.jsx(Ki,{$w:"140px",$h:11}),s.jsx(Ki,{$w:"260px",$h:30}),s.jsx(Ki,{$w:"100%",$h:16}),s.jsx(Ki,{$w:"100%",$h:72})]})},bT=f.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  font-family: ${E};
  font-size: 15px;
  line-height: 1.5;
  color: var(--trk-ink);

  p {
    margin: 0;
  }
`,wT=({text:t,onRetry:e,testId:n,children:r})=>{const{t:i}=G();return s.jsx(Lt,{"data-testid":n,role:"alert",children:s.jsxs(bT,{children:[s.jsx("p",{children:t}),e&&s.jsxs(pa,{as:"button",type:"button",onClick:e,children:[s.jsx(rh,{"aria-hidden":"true",width:16,height:16}),i("tracking:guest.error.retry")]}),r]})})},eo=k.tuple([k.number().min(-180).max(180),k.number().min(-90).max(90)]),to=k.string().datetime({offset:!0}),kT=["not_next_stop","verification_required","gps_unavailable","driver_offline","trip_completed","expired","resequenced"];k.object({eligible:k.literal(!1),reason:k.enum(kT)}).strict();k.object({eligible:k.literal(!0),expiresAt:to,driver:k.object({position:eo,capturedAt:to,heading:k.number().min(0).max(360).nullable().optional()}).strict(),destination:k.object({position:eo}).strict(),approach:k.object({coordinates:k.array(eo).min(2).max(1e3),source:k.string().min(1)}).strict().nullable().optional(),eta:k.object({minutes:k.number().int().min(0).max(240),computedAt:to}).strict().nullable().optional(),driverDisplay:k.object({initials:k.string().regex(/^[A-Z]{1,2}$/)}).strict().nullable().optional()}).strict();const ST=async()=>({kind:"unsupported"}),jT=120*1e3;function im(t,e){return e-Date.parse(t.driver.capturedAt)>jT}function ET(t,e){return e>=Date.parse(t.expiresAt)}const gu=30*1e3,_T=60*1e3,TT=15*1e3,IT=2**31-1,RT=2;async function CT(){return ST}const xu=()=>({wasEligible:!1,freshStreak:0,recovering:!1,staleData:null});function OT(t,e,n){switch(t.kind){case"unsupported":return{view:{status:"off"},keepPolling:!1};case"not_eligible":switch(t.reason){case"gps_unavailable":case"driver_offline":return n.wasEligible=!0,n.freshStreak=0,{view:{status:"unavailable",reason:t.reason},keepPolling:!0};case"expired":case"resequenced":return n.wasEligible?{view:{status:"ended",reason:t.reason},keepPolling:!0}:{view:{status:"off"},keepPolling:!0};case"trip_completed":return{view:{status:"off"},keepPolling:!1};default:return{view:{status:"off"},keepPolling:!0}}case"eligible":return n.wasEligible=!0,ET(t.data,e)?{view:{status:"ended",reason:"expired"},keepPolling:!0}:im(t.data,e)?(n.freshStreak=0,n.recovering=!0,n.staleData=t.data,{view:{status:"stale",data:t.data},keepPolling:!0}):(n.freshStreak+=1,n.recovering&&n.freshStreak<RT?{view:{status:"stale",data:n.staleData??t.data},keepPolling:!0}:(n.recovering=!1,n.staleData=null,{view:{status:"live",data:t.data},keepPolling:!0}));case"refused":return{view:n.wasEligible?{status:"error",reason:"refused"}:{status:"off"},keepPolling:!1};case"rate_limited":return{view:n.wasEligible?{status:"rate_limited",retryAfter:e+_T}:{status:"off"},keepPolling:!1};default:return{view:n.wasEligible?{status:"error",reason:"failed"}:{status:"off"},keepPolling:!1}}}function AT({enabled:t,orderId:e,stage:n,accessToken:r,source:i}){const[a,o]=S.useState({status:"off"}),[l,c]=S.useState(0),d=S.useRef(a);d.current=a;const u=S.useRef(xu()),h=t&&n==="in_transit";S.useEffect(()=>{u.current=xu()},[h,e,r]);const p=`${h}|${e}|${r??""}`,m=S.useRef(p);S.useEffect(()=>{if(m.current!==p&&(m.current=p,o({status:"off"})),!h){o({status:"off"});return}let y=!0,b,_;const j=C=>{o(C)},w=C=>{if(_&&clearTimeout(_),C.status!=="live"&&C.status!=="stale")return;const D=Date.parse(C.data.expiresAt)-Date.now();_=setTimeout(()=>{y&&j({status:"ended",reason:"expired"})},Math.min(Math.max(0,D),IT))},v=async()=>{if(typeof document<"u"&&document.hidden){b=setTimeout(v,gu);return}let C;try{C=await(i??await CT())({orderId:e,accessToken:r})}catch{C={kind:"error"}}if(!y)return;const{view:D,keepPolling:F}=OT(C,Date.now(),u.current);j(D),w(D),F&&(b=setTimeout(v,gu))};v();const I=setInterval(()=>{const C=d.current;C.status==="live"&&im(C.data,Date.now())&&(u.current.freshStreak=0,u.current.recovering=!0,u.current.staleData=C.data,j({status:"stale",data:C.data}))},TT);return()=>{y=!1,b&&clearTimeout(b),_&&clearTimeout(_),clearInterval(I)}},[h,e,r,i,l,p]);const x=S.useCallback(()=>c(y=>y+1),[]);return{view:m.current===p?a:{status:"off"},retry:x}}const PT=S.lazy(()=>dg(()=>import("./NextStopMapCanvas-DqwRXS87.js"),__vite__mapDeps([0,1,2,3,4]))),NT=f.div`
  display: grid;
  gap: 16px;
  grid-template-columns: minmax(0, 1fr);
  ${({$wide:t})=>t&&B`
      @media (min-width: 900px) {
        grid-template-columns: minmax(0, 360fr) minmax(0, 808fr);
        align-items: stretch;
      }
    `}
`,yu=f.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
`,LT=f($t)`
  color: var(--trk-link);
`,$T=f.p`
  margin: 0;
  font-family: ${E};
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  color: var(--trk-ink);
`,vu=f.p`
  margin: 0;
  font-family: ${E};
  font-size: 13px;
  line-height: 18px;
  color: var(--trk-muted);
`,bu=f.p`
  margin: 0;
  font-family: ${E};
  font-size: 15px;
  line-height: 21px;
  color: var(--trk-ink);
`;f.p`
  align-self: flex-start;
  margin: 4px 0 0;
  padding: 3px 10px;
  border-radius: 999px;
  border: 1px dashed var(--trk-border);
  font-family: ${E};
  font-size: 12px;
  font-weight: 600;
  color: var(--trk-muted);
`;const DT=f.div`
  height: ${({$wide:t})=>t?"342px":"300px"};
  ${le(B`
    height: 220px;
  `)}
`,MT=f.div`
  height: 100%;
  border-radius: 12px;
  border: 1px solid var(--trk-border);
  background: var(--trk-section);
`,FT=f.button`
  align-self: flex-start;
  min-height: 36px;
  padding: 6px 14px;
  border: 1px solid var(--trk-border);
  border-radius: 8px;
  background: var(--trk-card);
  color: var(--trk-ink);
  font-family: ${E};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  &:focus-visible {
    outline: 2px solid ${_e.blue};
    outline-offset: 2px;
  }
  @media (pointer: coarse) {
    min-height: 44px;
  }
`;class UT extends W.Component{constructor(){super(...arguments);yt(this,"state",{failed:!1})}static getDerivedStateFromError(){return{failed:!0}}render(){return this.state.failed?this.props.fallback:this.props.children}}function BT(t,e){const[n,r]=S.useState(()=>Date.now());return S.useEffect(()=>{if(!e)return;r(Date.now());const i=setInterval(()=>r(Date.now()),t);return()=>clearInterval(i)},[t,e]),n}function no(t,e){return Math.max(0,Math.round((e-Date.parse(t))/6e4))}const Dl=({enabled:t,shipment:e,audience:n,layout:r,accessToken:i,source:a})=>{const{t:o}=G(),{view:l,retry:c}=AT({enabled:t,orderId:e.orderId,stage:e.stage,accessToken:i,source:a}),d=BT(15*1e3,l.status!=="off"),u=!1,h=w=>`tracking:guest.nextStop.${n}.${w}`,p=w=>{switch(w.status){case"live":return w.data.eta?o("tracking:guest.nextStop.etaMinutes",{count:w.data.eta.minutes}):o("tracking:guest.nextStop.etaSoon");case"stale":return o("tracking:guest.nextStop.stale",{count:Math.max(1,no(w.data.driver.capturedAt,d))});case"unavailable":return o("tracking:guest.nextStop.unavailable");case"ended":return o("tracking:guest.nextStop.ended");case"error":return o(w.reason==="refused"?"tracking:guest.nextStop.errorRefused":"tracking:guest.nextStop.errorFailed");case"rate_limited":return o("tracking:guest.nextStop.rateLimited");default:return""}},[m,x]=S.useState(""),y=S.useRef("off");if(S.useEffect(()=>{l.status!==y.current&&(y.current=l.status,x(l.status==="off"?"":p(l)))},[l]),l.status==="off")return null;if(l.status==="ended"||l.status==="error"||l.status==="rate_limited"){const w=l.status==="error"||l.status==="rate_limited"&&d>=l.retryAfter;return s.jsxs(Lt,{"data-testid":"next-stop-card","data-state":l.status,"aria-label":o("tracking:guest.nextStop.liveLocation"),children:[s.jsx(ki,{role:"status","aria-live":"polite",children:m}),s.jsxs(yu,{children:[s.jsx($t,{children:o("tracking:guest.nextStop.liveLocation")}),s.jsx(bu,{"data-testid":"next-stop-message",children:p(l)}),w&&s.jsx(FT,{type:"button",onClick:c,children:o("tracking:guest.nextStop.retry")})]})]})}const b=l.status==="live",_=r==="wide"&&b,j=s.jsx(vu,{"data-testid":"next-stop-map-unavailable",children:o(h("mapUnavailable"))});return s.jsxs(Lt,{"data-testid":"next-stop-card","data-state":l.status,"aria-labelledby":"trk-next-stop-title",children:[s.jsx(ki,{role:"status","aria-live":"polite",children:m}),s.jsxs(NT,{$wide:_,children:[s.jsxs(yu,{children:[s.jsx(LT,{children:o(h(b?"eyebrowLive":"eyebrowNext"))}),s.jsx($l,{id:"trk-next-stop-title",children:o(h("title"))}),l.status==="live"?s.jsxs(s.Fragment,{children:[s.jsx($T,{"data-testid":"next-stop-eta",children:p(l)}),s.jsx(vu,{children:no(l.data.driver.capturedAt,d)===0?o("tracking:guest.nextStop.updatedNow"):o("tracking:guest.nextStop.updated",{count:no(l.data.driver.capturedAt,d)})})]}):s.jsx(bu,{"data-testid":"next-stop-message",children:p(l)}),u]}),b&&s.jsx(UT,{fallback:j,children:s.jsx(DT,{$wide:r==="wide",children:s.jsx(S.Suspense,{fallback:s.jsx(MT,{"aria-hidden":"true"}),children:s.jsx(PT,{data:l.data,title:o(h("mapRegion"))})})})})]})]})},zT={1:"neutral",2:"neutral",3:"active",4:"active",5:"active",6:"active",7:"active",8:"active",9:"danger",10:"done",11:"done",12:"warning",13:"done",14:"danger",15:"done",16:"danger"},HT=f.span`
  display: inline-block;
  max-width: 100%;
  padding: 3px 8px;
  border: none;
  border-radius: var(--v29-radius-tag);
  font-family: ${E};
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: middle;

  ${({$tone:t})=>{switch(t){case"active":return"color: var(--v29-primary); background: color-mix(in srgb, var(--v29-primary) 10%, transparent);";case"done":return"color: var(--v29-on-primary); background: var(--v29-primary);";case"warning":return"color: var(--v29-warning); background: var(--v29-warning-bg);";case"danger":return"color: var(--v29-danger); background: var(--v29-danger-bg);";default:return"color: var(--v29-muted); background: var(--v29-line-soft);"}}}
`,sm=t=>zT[t]??"neutral",zs=({statusId:t})=>{const{t:e}=G();return s.jsx(HT,{$tone:sm(t),children:e(`salesOrderStatusId:${t}`,String(t))})},fa=["orderCreated","scheduled","readyForPickup","inTransit","delivered","completed"],VT={1:0,2:1,3:2,4:3,5:3,6:3,7:3,8:3,9:0,10:4,11:4,12:5,13:5,14:0,15:5,16:0};function WT(t,e){return t==="cancelled"?"tracking:headline.cancelled":t==="exception"?"tracking:headline.exception":`tracking:headline.${fa[e]??"inTransit"}`}function am(t){const e=sm(t),n=e==="danger"?"cancelled":e==="warning"?"exception":"normal",r=VT[t]??0;return{stepIndex:r,variant:n,showStepper:n!=="cancelled",headlineKey:WT(n,r)}}const qT=new Intl.DateTimeFormat("en-AU",{weekday:"long",day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});function KT(t){const e=new Date(`${t}T00:00:00Z`);return Number.isNaN(e.getTime())?t:qT.format(e)}const wu=f.div`
  margin: 0 0 16px;
`,GT=f.img`
  display: block;
  width: 100%;
  max-width: 320px;
  height: auto;
  border-radius: 8px;
  border: 1px solid var(--v29-line-soft);
`,ZT=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 320px;
  min-height: 120px;
  padding: 16px;
  border-radius: 8px;
  border: 1px dashed var(--v29-line-soft);
  background: var(--v29-raised);
  color: var(--v29-muted);
  font-family: ${E};
  font-size: 13px;
  text-align: center;
`,YT=({pod:t})=>{const{t:e}=G(),[n,r]=S.useState(!1);return t?s.jsx(oe,{children:s.jsxs(ye,{children:[s.jsx(Le,{children:e("tracking:pod.title","Proof of Delivery")}),t.photoUrl&&!n&&s.jsx(wu,{children:s.jsx(GT,{src:t.photoUrl,alt:e("tracking:pod.photoAlt"),onError:()=>r(!0)})}),t.photoUrl&&n&&s.jsx(wu,{children:s.jsx(ZT,{children:e("tracking:pod.photoUnavailable")})}),s.jsxs(la,{children:[s.jsxs("div",{children:[s.jsx("dt",{children:e("tracking:activity.deliveredSigned")}),s.jsx("dd",{children:KT(t.deliveredAt)})]}),t.signedByInitial&&s.jsxs("div",{children:[s.jsx("dt",{children:e("tracking:pod.signedBy","Signed By")}),s.jsx("dd",{children:t.signedByInitial})]})]})]})}):null},JT=f.ul`
  display: grid;
  gap: 12px;
  margin: 14px 0 0;
  padding: 0;
  list-style: none;
`,XT=f.li`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  padding: 14px 16px;
  border-radius: 8px;
  border-left: 3px solid var(--v29-warning);
  background: var(--v29-warning-bg);
`,QT=f.p`
  margin: 0;
  flex: 1 1 260px;
  font-family: ${E};
  font-size: 14px;
  line-height: 1.5;
  color: var(--v29-text);
`,eI=f(we)`
  /* Shrink-and-wrap on a narrow phone rather than push past the row edge —
   * the row has no horizontal scroll, so a fixed-width button would overflow
   * the ~248px available inside SurfaceBody at 320px (ux-review §6). */
  flex: 0 1 auto;
  max-width: 100%;
  white-space: normal;
  /* Warning tie is the amber BORDER (+ the panel's amber icon/title/row),
   * while the LABEL keeps SecondaryButton's neutral --v29-text. Neutral text
   * clears WCAG AA over the amber row tint in every state and both themes
   * (~14:1) — unlike amber-on-tint, which computed to ~4.09:1 at rest and
   * reverted to the same sub-AA value on hover (ux-review §5). */
  border-color: var(--v29-warning);

  &:hover:not(:disabled) {
    border-color: var(--v29-warning);
    /* A solid-ish amber wash (mixed into the card, not the translucent row
     * tint) so the neutral label still clears AA on hover. */
    background: color-mix(in srgb, var(--v29-warning) 12%, var(--v29-card));
  }

  &:focus-visible {
    outline-color: var(--v29-warning);
  }
`,tI=f(Le)`
  color: var(--v29-warning);

  svg {
    color: var(--v29-warning);
  }
`,ku="tracking-exceptions-title",nI=({items:t})=>{const{t:e}=G();return t.length===0?null:s.jsx(oe,{"aria-labelledby":ku,children:s.jsxs(ye,{children:[s.jsxs(tI,{id:ku,children:[s.jsx(Qo,{"aria-hidden":"true"}),e("tracking:exception.badgeLabel",{count:t.length})]}),s.jsx(JT,{children:t.map((n,r)=>s.jsxs(XT,{children:[s.jsx(QT,{children:e(`tracking:exception.${n.subReasonKey}.reason`)}),n.supportHref&&s.jsx(eI,{as:"a",href:n.supportHref,children:e("tracking:help.contactSupport")})]},`${n.subReasonKey}-${r}`))})]})})};function rI(t,e){return t<e?"done":t===e&&e<fa.length-1?"current":t===e?"done":"future"}const iI=f.ol`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 2px;
  margin: 0;
  padding: 0;
  list-style: none;
`,sI=f.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  min-width: 0;
  text-align: center;

  &:not(:first-child)::before {
    content: '';
    position: absolute;
    top: 11px;
    left: -50%;
    width: 100%;
    height: 2px;
    background: ${({$state:t})=>t==="future"?"var(--v29-line-soft)":"var(--v29-primary)"};
  }
`,aI=f.span`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  font-family: ${E};
  font-size: 11px;
  font-weight: 700;
  box-sizing: border-box;

  ${({$state:t})=>{switch(t){case"done":return"background: var(--v29-primary); color: var(--v29-on-primary); border: 2px solid var(--v29-primary);";case"current":return"background: var(--v29-warning-bg); color: var(--v29-warning); border: 2px solid var(--v29-warning);";default:return"background: var(--v29-line-soft); color: var(--v29-muted); border: 2px solid transparent;"}}}
`,oI=f.span`
  font-family: ${E};
  font-size: 11px;
  line-height: 1.3;
  overflow-wrap: break-word;
  color: ${({$state:t})=>t==="future"?"var(--v29-muted)":"var(--v29-text)"};
  font-weight: ${({$state:t})=>t==="current"?700:500};
`,lI=({step:t})=>{const{t:e}=G();return t.showStepper?s.jsx(iI,{children:fa.map((n,r)=>{const i=rI(r,t.stepIndex);return s.jsxs(sI,{$state:i,"aria-current":i==="current"?"step":void 0,children:[s.jsx(aI,{$state:i,"aria-hidden":"true",children:i==="future"?r+1:s.jsx(Ks,{size:13,strokeWidth:3})}),s.jsx(oI,{$state:i,children:e(`tracking:step.${n}`)})]},n)})}):null},cI=f.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
`,dI=f.span`
  display: block;
  font-family: ${E};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--v29-muted);
`,uI=f.span`
  display: block;
  margin-top: 4px;
  font-family: ${E};
  font-size: 20px;
  font-weight: 700;
  color: var(--v29-text);
  word-break: break-word;
`,hI=f.p`
  margin: 12px 0 0;
  font-family: ${E};
  font-size: 15px;
  line-height: 1.5;
  color: var(--v29-text);
`,Su=f.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin: 12px 0 0;
  padding: 14px 16px;
  border-radius: 8px;
  border-left: 3px solid
    ${({$tone:t})=>t==="danger"?"var(--v29-danger)":"var(--v29-warning)"};
  background: ${({$tone:t})=>t==="danger"?"var(--v29-danger-bg)":"var(--v29-warning-bg)"};
  font-family: ${E};
  font-size: 15px;
  line-height: 1.5;
  color: var(--v29-text);

  svg {
    flex-shrink: 0;
    width: 18px;
    height: 18px;
    margin-top: 1px;
    color: ${({$tone:t})=>t==="danger"?"var(--v29-danger)":"var(--v29-warning)"};
  }
`,pI=f(et)`
  margin-top: 6px;
`,fI=f.div`
  margin-top: 14px;
`,mI=f.div`
  margin-top: 18px;
`,gI=new Intl.DateTimeFormat("en-AU",{day:"numeric",month:"short",year:"numeric"});function xI(t){const e=new Date(t);return Number.isNaN(e.getTime())?t:gI.format(e)}const yI=({salesOrderId:t,statusId:e,eta:n,latestEvent:r})=>{const{t:i}=G(),a=e!=null?am(e):void 0;return s.jsx(oe,{children:s.jsxs(ye,{children:[s.jsxs(cI,{children:[s.jsxs("div",{children:[s.jsx(dI,{children:i("portal:orders.colOrderId")}),s.jsx(uI,{children:t})]}),e!=null&&s.jsx(zs,{statusId:e})]}),a&&(a.variant==="cancelled"?s.jsxs(Su,{$tone:"danger",role:"alert",children:[s.jsx(eg,{"aria-hidden":"true"}),s.jsx("span",{children:i(a.headlineKey)})]}):a.variant==="exception"?s.jsxs(Su,{$tone:"warning",role:"status",children:[s.jsx(Qo,{"aria-hidden":"true"}),s.jsx("span",{children:i(a.headlineKey)})]}):s.jsx(hI,{children:i(a.headlineKey)})),r&&s.jsxs(pI,{children:[i(r.activityKey)," · ",xI(r.date)," ·"," ",r.locationLabel]}),n&&s.jsx(fI,{children:s.jsx(la,{children:s.jsxs("div",{children:[s.jsx("dt",{children:i("tracking:facts.estimatedDelivery")}),s.jsx("dd",{children:n.window?`${n.dateLabel} (${n.window})`:n.dateLabel})]})})}),a&&s.jsx(mI,{children:s.jsx(lI,{step:a})})]})})},ju=3,Eu=new Intl.DateTimeFormat("en-AU",{weekday:"long",day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}),vI=new Intl.DateTimeFormat("en-AU",{weekday:"short",day:"numeric",month:"short",timeZone:"UTC"});function ro(t,e){const n=new Date(`${t}T00:00:00Z`);return Number.isNaN(n.getTime())?t:e.format(n)}function bI(t){return[...t].sort((e,n)=>e.date===n.date?0:e.date>n.date?-1:1)}function wI(t){const e=[];return t.forEach(n=>{const r=e[e.length-1];r&&r.date===n.date?r.events.push(n):e.push({date:n.date,events:[n]})}),e}const kI=f.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0 0 18px;
`,SI=f.span`
  font-family: ${E};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--v29-muted);
`,jI=f.span`
  font-family: ${E};
  font-size: 14px;
  color: var(--v29-text);
`,EI=f(Bn)`
  @media (max-width: 640px) {
    display: none;
  }
`,_I=f(zn)`
  min-width: 560px;
`,TI=f.span`
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`,_u=f.span`
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--v29-primary) 12%, transparent);
  color: var(--v29-primary);
  font-family: ${E};
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;
`,II=f.div`
  display: none;

  @media (max-width: 640px) {
    display: grid;
    gap: 4px;
  }
`,RI=f.p`
  margin: 14px 0 4px;
  padding: 8px 2px 4px;
  font-family: ${E};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--v29-muted);
  border-bottom: 1px solid var(--v29-line-soft);

  &:first-child {
    margin-top: 0;
  }
`,CI=f.div`
  display: grid;
  gap: 4px;
  padding: 10px 2px;
  border-bottom: 1px solid var(--v29-line-soft);
  font-family: ${E};

  &:last-child {
    border-bottom: none;
  }
`,OI=f.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  color: var(--v29-text);
  font-size: 14px;
  font-weight: 600;
`,AI=f.p`
  margin: 0;
  color: var(--v29-muted);
  font-size: 13px;
`,PI=f.div`
  margin-top: 16px;
`,NI=({events:t,eta:e})=>{const{t:n}=G(),[r,i]=S.useState(!1),a=S.useMemo(()=>bI(t??[]),[t]),o=a.length>ju,l=r?a:a.slice(0,ju),c=S.useMemo(()=>wI(l),[l]);return a.length===0&&!e?null:s.jsx(oe,{children:s.jsxs(ye,{children:[s.jsx(Le,{children:n("tracking:timeline.title","Shipment History")}),e&&s.jsxs(kI,{children:[s.jsx(SI,{children:n("tracking:facts.estimatedDelivery")}),s.jsxs(jI,{children:[e.dateLabel,e.window?` · ${e.window}`:""]})]}),a.length>0&&s.jsxs(s.Fragment,{children:[s.jsx(EI,{children:s.jsxs(_I,{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{scope:"col",children:n("tracking:timeline.colTime","Time")}),s.jsx("th",{scope:"col",children:n("tracking:timeline.colActivity","Activity")}),s.jsx("th",{scope:"col",children:n("tracking:timeline.colLocation","Location")})]})}),s.jsx("tbody",{children:c.map((d,u)=>s.jsxs(W.Fragment,{children:[s.jsx("tr",{children:s.jsx("th",{colSpan:3,children:ro(d.date,Eu)})}),d.events.map((h,p)=>{const m=u===0&&p===0;return s.jsxs("tr",{children:[s.jsx("td",{children:ro(h.date,vI)}),s.jsx("td",{children:s.jsxs(TI,{children:[n(h.activityKey),m&&s.jsx(_u,{children:n("tracking:timeline.latest","Latest")})]})}),s.jsx("td",{children:h.locationLabel})]},`${h.date}-${h.activityKey}-${p}`)})]},d.date))})]})}),s.jsx(II,{children:c.map((d,u)=>s.jsxs(W.Fragment,{children:[s.jsx(RI,{children:ro(d.date,Eu)}),d.events.map((h,p)=>{const m=u===0&&p===0;return s.jsxs(CI,{children:[s.jsxs(OI,{children:[n(h.activityKey),m&&s.jsx(_u,{children:n("tracking:timeline.latest","Latest")})]}),s.jsx(AI,{children:h.locationLabel})]},`${h.date}-${h.activityKey}-${p}`)})]},d.date))}),o&&s.jsx(PI,{children:s.jsx(we,{type:"button","aria-expanded":r,onClick:()=>i(d=>!d),children:r?s.jsxs(s.Fragment,{children:[s.jsx(Wm,{"aria-hidden":"true"}),n("tracking:timeline.showLess","Show Less")]}):s.jsxs(s.Fragment,{children:[s.jsx(Vm,{"aria-hidden":"true"}),n("tracking:timeline.viewFullHistory","View Full History")]})})})]})]})})},LI=f.div`
  display: grid;
  gap: 18px;
`,$I=f.div`
  overflow-x: auto;
`,DI=f.div`
  margin-top: 14px;
`,Tu=new Intl.NumberFormat("en-AU",{style:"currency",currency:"AUD"});function MI(t){return t.destinationStreet??t.destinationSuburbStatePostcode}const FI=({projection:t,level:e,onRequestTier2:n,eta:r,timeline:i,pod:a,exceptions:o})=>{const{t:l}=G(),c=t.salesOrderStatusId,d=MI(t),u=t.packages??[],h=!!(t.shipperName||t.recipientName),p=u.some(y=>y.weightKg!=null),m=u.some(y=>y.pricing!=null),x=u.some(y=>y.salesOrderStatusId!=null);return s.jsxs(LI,{children:[s.jsx(yI,{salesOrderId:t.salesOrderId,statusId:c,eta:r}),o&&s.jsx(nI,{items:o}),s.jsx(oe,{children:s.jsx(ye,{children:s.jsxs(la,{children:[t.shipDate&&s.jsxs("div",{children:[s.jsx("dt",{children:l("tracking:facts.shipDate")}),s.jsx("dd",{children:t.shipDate})]}),t.originCityCountry&&s.jsxs("div",{children:[s.jsx("dt",{children:l("tracking:facts.origin")}),s.jsx("dd",{children:t.originCityCountry})]}),d&&s.jsxs("div",{children:[s.jsx("dt",{children:l("tracking:facts.destination")}),s.jsx("dd",{children:d})]}),s.jsxs("div",{children:[s.jsx("dt",{children:l("tracking:facts.packages")}),s.jsx("dd",{children:t.packageCount})]}),t.totalWeightKg!=null&&s.jsxs("div",{children:[s.jsx("dt",{children:l("tracking:facts.weight")}),s.jsx("dd",{children:l("portal:orders.weightKg",{weight:t.totalWeightKg})})]}),t.totalPricing!=null&&s.jsxs("div",{children:[s.jsx("dt",{children:l("portal:orders.packagePrice")}),s.jsx("dd",{children:Tu.format(t.totalPricing)})]}),t.comment&&s.jsxs("div",{children:[s.jsx("dt",{children:l("portal:orders.comment")}),s.jsx("dd",{children:t.comment})]})]})})}),i&&s.jsx(NI,{events:i}),a&&s.jsx(YT,{pod:a}),e==="guest_t1"&&n&&s.jsx(oe,{children:s.jsxs(ye,{children:[s.jsx(Le,{children:l("tracking:tier2.gateTitle")}),s.jsx(Cs,{children:l("tracking:tier2.gateBody")}),s.jsx(DI,{children:s.jsx(vn,{type:"button",onClick:n,children:l("tracking:tier2.verifyButton")})})]})}),h&&s.jsxs(uE,{children:[t.shipperName&&s.jsx(oe,{children:s.jsxs(ye,{children:[s.jsx(Le,{children:l("portal:orders.sender")}),s.jsxs(Zd,{children:[s.jsx("strong",{children:t.shipperName}),t.senderPhone&&s.jsx("span",{children:t.senderPhone})]})]})}),t.recipientName&&s.jsx(oe,{children:s.jsxs(ye,{children:[s.jsx(Le,{children:l("portal:orders.recipient")}),s.jsxs(Zd,{children:[s.jsx("strong",{children:t.recipientName}),t.recipientPhone&&s.jsx("span",{children:t.recipientPhone})]})]})})]}),u.length>0&&s.jsx(oe,{children:s.jsxs(ye,{children:[s.jsx(Le,{children:l("portal:orders.packagesTitle")}),s.jsx($I,{children:s.jsxs(hE,{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{scope:"col",children:l("portal:orders.packageId")}),p&&s.jsx("th",{scope:"col",children:l("portal:orders.packageWeight")}),m&&s.jsx("th",{scope:"col",children:l("portal:orders.packagePrice")}),x&&s.jsx("th",{scope:"col",children:l("portal:orders.colStatus")})]})}),s.jsx("tbody",{children:u.map(y=>s.jsxs("tr",{children:[s.jsx("td",{children:y.sid}),p&&s.jsx("td",{children:y.weightKg!=null?l("portal:orders.weightKg",{weight:y.weightKg}):"—"}),m&&s.jsx("td",{children:y.pricing!=null?Tu.format(y.pricing):"—"}),x&&s.jsx("td",{children:y.salesOrderStatusId!=null?s.jsx(zs,{statusId:y.salesOrderStatusId}):"—"})]},y.sid))})]})})]})})]})};function UI({isAuthenticated:t,isOwner:e,orderScope:n,guestTier:r}){return e?"owner":n==="sub"||n==="all"?"staff":"guest_t1"}const BI=new Set(["NSW","VIC","QLD","WA","SA","TAS","NT","ACT"]);function Iu(t){const e=typeof(t==null?void 0:t.address)=="string"?t.address.trim():"",n=typeof(t==null?void 0:t.postcode)=="string"?t.postcode.trim():"";if(!e)return{};const r=e.split(",").map(c=>c.trim()).filter(Boolean),i=r.length>1?r[r.length-1]:r[0],a=r.length>1?r.slice(0,-1).join(", "):void 0,o=[e,n].filter(Boolean).join(" ").trim()||void 0,l=[i,n].filter(Boolean).join(" ").trim()||void 0;return{street:a,suburbState:i,full:o,coarse:l}}function Ru(t){if(!t)return;const e=t.split(" ").filter(Boolean),n=e[e.length-1];return n&&BI.has(n.toUpperCase())?e.slice(0,-1).join(" ").trim()||void 0:t}function zI(t,e){const n=10**e;return Math.round(t*n)/n}function Cu(t,e){const n=t.filter(r=>typeof r=="number");if(n.length)return zI(n.reduce((r,i)=>r+i,0),e)}function HI(t,e){let n={sid:t.sid,salesOrderStatusId:t.salesOrderStatusId};return e!=="guest_t1"&&typeof t.weight=="number"&&(n={...n,weightKg:t.weight}),e==="owner"&&typeof t.pricing=="number"&&(n={...n,pricing:t.pricing}),n}function VI(t,e){var o,l,c,d;const n=t.packages??[],r=Iu(t.sender),i=Iu(t.recipient);let a={salesOrderId:t.salesOrderId,salesOrderStatusId:t.salesOrderStatusId,shipDate:t.pickupDate,packageCount:n.length,originCityCountry:Ru(r.suburbState)?`${Ru(r.suburbState)}, Australia`:void 0,destinationSuburbStatePostcode:i.coarse,packages:n.map(u=>HI(u,e))};return e!=="guest_t1"&&(a={...a,destinationStreet:i.full,shipperName:(o=t.sender)==null?void 0:o.name,recipientName:(l=t.recipient)==null?void 0:l.name,totalWeightKg:Cu(n.map(u=>u.weight),1)}),e==="owner"&&(a={...a,senderPhone:(c=t.sender)==null?void 0:c.mobile,recipientPhone:(d=t.recipient)==null?void 0:d.mobile,comment:t.comment,totalPricing:Cu(n.map(u=>u.pricing),2)}),a}const WI=f(Zf)`
  flex: none;
  &::before { display: none; }
`,qI=f(De)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 42px;
  padding: 10px 16px;
  border-radius: 8px;
  border: 1px solid var(--v29-line);
  color: var(--v29-text);
  font-family: ${E};
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover {
    border-color: var(--v29-primary);
  }

  &:focus-visible {
    outline: 2px solid var(--v29-primary);
    outline-offset: 2px;
  }
`;function KI(t){const e=t==null?void 0:t.createdByUid;return typeof e=="string"?e:void 0}const GI=()=>{const{t}=G(),{salesOrderId:e=""}=Jo(),n=Ze(),[r,i]=S.useState({kind:"loading"}),a=ft(m=>m.uid),o=ff(),l=wr("nextStopMap"),c=S.useCallback(()=>{i({kind:"loading"}),x2(e).then(m=>i({kind:"ready",detail:m.data})).catch(()=>i({kind:"error"}))},[e]);S.useEffect(()=>{c()},[c]);const d=r.kind==="ready"?r.detail:null,u=KI(d),p=UI({isAuthenticated:!0,isOwner:!!(a&&u&&u===a),orderScope:o});return s.jsxs(An,{children:[s.jsxs(Pr,{children:[s.jsxs("div",{children:[s.jsx(tn,{children:t("portal:common.eyebrow")}),s.jsx(Tn,{children:t("portal:orders.detailTitle",{id:e})}),s.jsx(nn,{children:t("portal:orders.detailLead")})]}),s.jsxs(qI,{to:{pathname:"/portal/orders",search:n.search},children:[s.jsx(Xo,{"aria-hidden":"true"}),t("portal:orders.backToOrders")]})]}),r.kind==="loading"&&s.jsx(oe,{children:s.jsx(ye,{"aria-busy":"true","aria-label":t("common:loading"),children:s.jsx(at,{})})}),r.kind==="error"&&s.jsx(oe,{children:s.jsxs(tt,{role:"alert",children:[t("portal:orders.detailLoadFailed"),s.jsx(we,{type:"button",onClick:c,children:t("common:retry")})]})}),d&&s.jsx(FI,{projection:VI(d,p),level:p}),l&&(p==="owner"||p==="staff")&&(d==null?void 0:d.salesOrderId)===e&&fa[am(d.salesOrderStatusId??0).stepIndex]==="inTransit"&&s.jsx(WI,{children:s.jsx(Dl,{enabled:!0,shipment:{orderId:e,stage:"in_transit"},audience:"public",layout:"wide"})})]})},ZI=[{id:"on-account",status:"available"},{id:"stripe-card",status:"pending"}],YI=f.header`
  margin-bottom: 34px;
`,Ou=f.h3`
  font-family: ${E};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--v29-muted);
  margin: 40px 0 14px;
`,JI=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
`,XI=f.div`
  border-radius: 16px;
  border: 1px solid var(--v29-line-soft);
  background: var(--v29-card);
  box-shadow: var(--v29-card-shadow);
  padding: 22px 24px;
`,QI=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 10px;
`,eR=f.h4`
  font-family: ${E};
  font-size: 16px;
  font-weight: 700;
  color: var(--v29-text);
  margin: 0;
`,tR=f.p`
  font-family: ${E};
  font-size: 14px;
  line-height: 1.65;
  color: var(--v29-muted);
  margin: 0;
`,nR=f.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 3px 10px;
  border-radius: 999px;
  font-family: ${E};
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: currentColor;
  }

  ${({$status:t})=>t==="available"?"color: var(--v29-primary); background: color-mix(in srgb, var(--v29-primary) 10%, transparent);":"color: var(--v29-muted); background: var(--v29-line-soft);"}
`,rR=f.ol`
  margin: 0;
  padding: 0;
  list-style: none;
  counter-reset: billing-step;
  display: grid;
  gap: 12px;
`,iR=f.li`
  display: flex;
  gap: 14px;
  align-items: flex-start;
  font-family: ${E};
  font-size: 14px;
  line-height: 1.65;
  color: var(--v29-muted);
  max-width: 72ch;

  strong {
    color: var(--v29-text);
    font-weight: 600;
  }

  &::before {
    counter-increment: billing-step;
    content: counter(billing-step);
    flex-shrink: 0;
    width: 26px;
    height: 26px;
    margin-top: 1px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: color-mix(in srgb, var(--v29-primary) 10%, transparent);
    color: var(--v29-primary);
    font-size: 13px;
    font-weight: 700;
  }
`,sR=f.div`
  margin-top: 28px;
  border-radius: 12px;
  background: var(--v29-raised);
  padding: 18px 20px;
  font-family: ${E};
  font-size: 13.5px;
  line-height: 1.65;
  color: var(--v29-muted);
  max-width: 78ch;

  strong {
    color: var(--v29-text);
    font-weight: 600;
  }
`,aR=()=>{const{t}=G("portal");return s.jsxs(An,{children:[s.jsxs(YI,{children:[s.jsx(tn,{children:t("common.eyebrow")}),s.jsx(Tn,{children:t("billing.title")}),s.jsx(nn,{children:t("billing.lead")})]}),s.jsx(Ou,{children:t("billing.methodsTitle")}),s.jsx(JI,{children:ZI.map(e=>s.jsxs(XI,{children:[s.jsxs(QI,{children:[s.jsx(eR,{children:t(`billing.methods.${e.id}.name`)}),s.jsx(nR,{$status:e.status,children:t(`billing.status.${e.status}`)})]}),s.jsx(tR,{children:t(`billing.methods.${e.id}.body`)})]},e.id))}),s.jsx(Ou,{children:t("billing.howTitle")}),s.jsx(rR,{children:["secure","intent","confirm","receipt"].map(e=>s.jsx(iR,{children:s.jsxs("span",{children:[s.jsx("strong",{children:t(`billing.how.${e}.title`)})," — ",t(`billing.how.${e}.body`)]})},e))}),s.jsxs(sR,{children:[s.jsx("strong",{children:t("billing.readinessTitle")})," ",t("billing.readinessBody")]})]})};class Jr extends Error{}Jr.prototype.name="InvalidTokenError";function oR(t){return decodeURIComponent(atob(t).replace(/(.)/g,(e,n)=>{let r=n.charCodeAt(0).toString(16).toUpperCase();return r.length<2&&(r="0"+r),"%"+r}))}function lR(t){let e=t.replace(/-/g,"+").replace(/_/g,"/");switch(e.length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return oR(e)}catch{return atob(e)}}function cR(t,e){if(typeof t!="string")throw new Jr("Invalid token specified: must be a string");e||(e={});const n=e.header===!0?0:1,r=t.split(".")[n];if(typeof r!="string")throw new Jr(`Invalid token specified: missing part #${n+1}`);let i;try{i=lR(r)}catch(a){throw new Jr(`Invalid token specified: invalid base64 for part #${n+1} (${a.message})`)}try{return JSON.parse(i)}catch(a){throw new Jr(`Invalid token specified: invalid json for part #${n+1} (${a.message})`)}}const dR={name:"SenditGo"},Au="portal-recaptcha-container",uR=f.div`
  display: flex;
  justify-content: center;
  padding-top: clamp(8px, 6vh, 64px);
`,hR=f.div`
  width: 100%;
  max-width: 440px;
  padding: 36px 32px 32px;
  border-radius: 16px;
  background: var(--v29-card);
  border: 1px solid var(--v29-line-soft);
  box-shadow: var(--v29-card-shadow);
`,pR=f.h1`
  font-family: ${Ue};
  font-style: italic;
  font-weight: 700;
  font-size: 28px;
  letter-spacing: 0.01em;
  line-height: 1.15;
  margin: 0 0 10px;
  color: var(--v29-text);
`,Pu=f.label`
  display: block;
  font-family: ${E};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--v29-muted);
  margin: 26px 0 8px;
`,Ml=`
  font-family: ${E};
  font-size: 15px;
  padding: 14px 16px;
  border-radius: 12px;
  background: var(--v29-page);
  border: 1px solid var(--v29-line-soft);
  color: var(--v29-text);
  transition: border-color 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
  &::placeholder { color: var(--v29-muted); }
  &:focus {
    outline: none;
    background: var(--v29-card);
    border-color: var(--v29-primary);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--v29-primary) 20%, transparent);
  }
`,fR=f.div`
  display: flex;
  gap: 10px;
`,mR=f.span`
  ${Ml};
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  color: var(--v29-muted);
  user-select: none;
`,gR=f.input`
  ${Ml};
  flex: 1;
  min-width: 0;
`,xR=f.input`
  ${Ml};
  width: 100%;
  text-align: center;
  font-size: 22px;
  letter-spacing: 0.45em;
  font-variant-numeric: tabular-nums;
`,Nu=f.span`
  display: inline-block;
  width: 14px;
  height: 14px;
  margin-right: 8px;
  border-radius: 50%;
  border: 2px solid color-mix(in srgb, var(--v29-on-primary) 35%, transparent);
  border-top-color: var(--v29-on-primary);
  animation: portal-login-spin 0.7s linear infinite;
  vertical-align: -2px;

  @keyframes portal-login-spin {
    to { transform: rotate(360deg); }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Lu=f.button`
  width: 100%;
  margin-top: 26px;
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  background: var(--v29-primary);
  color: var(--v29-on-primary);
  font-family: ${Ue};
  font-style: italic;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
  &:hover:not(:disabled) {
    background: var(--v29-primary-hover);
    transform: translateY(-1px);
  }
  &:focus-visible {
    outline: 2px solid var(--v29-primary);
    outline-offset: 2px;
  }
  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`,$u=f.button`
  border: none;
  background: transparent;
  padding: 4px 6px;
  font-family: ${E};
  font-size: 13px;
  color: var(--v29-primary);
  cursor: pointer;
  border-radius: 6px;
  &:hover {
    text-decoration: underline;
  }
  &:focus-visible {
    outline: 2px solid var(--v29-primary);
    outline-offset: 1px;
  }
  &:disabled {
    color: var(--v29-muted);
    cursor: not-allowed;
    text-decoration: none;
  }
`,yR=f.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
`,Du=f.p`
  margin: 14px 0 0;
  font-family: ${E};
  font-size: 13.5px;
  color: var(--v29-danger);
`,vR=f.p`
  margin: 6px 0 0;
  font-family: ${E};
  font-size: 13.5px;
  color: var(--v29-muted);
`;f.div`
  margin-top: 18px;
  text-align: center;
`;const bR=()=>{var F;const{t}=G(),e=Ir(),n=Ze(),r=ft(L=>L.login),i=ft(L=>L.token),[a,o]=S.useState("phone"),[l,c]=S.useState(""),[d,u]=S.useState(""),[h,p]=S.useState(!1),[m,x]=S.useState(null),y=S.useRef(null),b=S.useRef(null),_=vx((F=n.state)==null?void 0:F.from,"/portal/orders");S.useEffect(()=>{i&&e(_,{replace:!0})},[i]),S.useEffect(()=>()=>{var L;(L=y.current)==null||L.clear(),y.current=null},[]);const j=()=>`+61${l.replace(/[^\d]/g,"").replace(/^0/,"")}`,w=L=>{const z=cR(L.data.token),Z=Number.isFinite(z.exp)?z.exp-Math.floor(Date.now()/1e3):86400,he={maxAge:Math.max(60,Z),secure:!ys,sameSite:"strict"};bs("X-Token",L.data.token,he),bs("X-Refresh-Token",L.data.refresh,he),r({token:L.data.token,refresh:L.data.refresh,uid:z.uid,name:L.data.name||z.name||"",companyUid:z.companyUid,permission:L.data.permission??[]}),e(_,{replace:!0})},v=L=>{const z=L==null?void 0:L.code;return typeof z=="number"&&z>0?t(`statusCode:${z}`,t("portal:login.loginFailed")):t("portal:login.loginFailed")},I=async()=>{var z,M;if(x(null),l.replace(/[^\d]/g,"").length<8){x(t("portal:login.invalidPhone"));return}p(!0);try{(z=y.current)==null||z.clear(),y.current=new yk(Rs,Au,{size:"invisible"}),b.current=await wk(Rs,j(),y.current),u(""),o("otp")}catch(Z){console.error("[portal login] send code failed",Z.code),x(t("portal:login.sendFailed")),(M=y.current)==null||M.clear(),y.current=null}finally{p(!1)}},C=async L=>{L.preventDefault(),await I()},D=async L=>{if(L.preventDefault(),x(null),d.replace(/[^\d]/g,"").length!==6){x(t("portal:login.invalidOtp"));return}if(!b.current){o("phone");return}p(!0);try{const M=await(await b.current.confirm(d)).user.getIdToken(),Z=await m2({token:M});w(Z)}catch(z){const M=z==null?void 0:z.code;x(typeof M=="string"?t("portal:login.otpFailed"):v(z))}finally{p(!1)}};return s.jsx(An,{children:s.jsx(uR,{children:s.jsxs(hR,{children:[s.jsx(tn,{children:t("portal:common.eyebrow")}),s.jsx(pR,{children:t("portal:login.title",{brand:dR.name})}),s.jsx(nn,{children:t("portal:login.lead")}),a==="phone"?s.jsxs("form",{onSubmit:C,noValidate:!0,children:[s.jsx(Pu,{htmlFor:"portal-login-mobile",children:t("portal:login.mobileLabel")}),s.jsxs(fR,{children:[s.jsx(mR,{"aria-hidden":"true",children:"+61"}),s.jsx(gR,{id:"portal-login-mobile",type:"tel",inputMode:"tel",autoComplete:"tel",placeholder:t("portal:login.mobilePlaceholder"),value:l,onChange:L=>c(L.target.value)})]}),m&&s.jsx(Du,{role:"alert",children:m}),s.jsxs(Lu,{type:"submit",disabled:h,"aria-busy":h,children:[h&&s.jsx(Nu,{"aria-hidden":"true"}),t("portal:login.sendCode")]})]}):s.jsxs("form",{onSubmit:D,noValidate:!0,children:[s.jsx(Pu,{htmlFor:"portal-login-otp",children:t("portal:login.otpLabel")}),s.jsx(xR,{id:"portal-login-otp",type:"text",inputMode:"numeric",autoComplete:"one-time-code",maxLength:6,placeholder:"••••••",value:d,onChange:L=>u(L.target.value.replace(/[^\d]/g,""))}),s.jsx(vR,{children:t("portal:login.otpHint",{phone:j()})}),m&&s.jsx(Du,{role:"alert",children:m}),s.jsxs(Lu,{type:"submit",disabled:h,"aria-busy":h,children:[h&&s.jsx(Nu,{"aria-hidden":"true"}),t("portal:login.verify")]}),s.jsxs(yR,{children:[s.jsx($u,{type:"button",disabled:h,onClick:()=>{o("phone"),u(""),x(null)},children:t("portal:login.changeNumber")}),s.jsx($u,{type:"button",disabled:h,onClick:()=>{I()},children:t("portal:login.resend")})]})]}),ys,s.jsx("div",{id:Au})]})})})},io=5,wR=[1,2,3,8,11,12,13,9,14,16],kR=f(Bn)`
  @media (max-width: 640px) {
    display: none;
  }
`,SR=f(zn)`
  tbody tr {
    cursor: pointer;
    transition: background 0.15s ease;
  }
  tbody tr:hover,
  tbody tr:focus-within {
    background: color-mix(in srgb, var(--v29-primary) 5%, transparent);
  }
`,Mu=f(De)`
  color: var(--v29-text);
  font-weight: 600;
  white-space: nowrap;
  text-decoration: none;

  &:hover {
    color: var(--v29-primary);
    text-decoration-color: currentColor;
  }
  &:focus-visible {
    outline: 2px solid var(--v29-primary);
    outline-offset: 2px;
    border-radius: 4px;
  }
`,jR=f.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 200px;
  max-width: 340px;
  color: var(--v29-muted);
  font-size: 13px;
  line-height: 1.4;

  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span:first-child {
    color: var(--v29-text);
  }
`,om=f.span`
  font-variant-numeric: tabular-nums;
`,Fu=f(om)`
  display: inline-block;
  min-width: 132px;
  white-space: nowrap;
`,ER=f.p`
  margin: 0;
  font-family: ${E};
  font-size: 13px;
  color: var(--v29-muted);
`,_R=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 18px;
  border-top: 1px solid var(--v29-line-soft);
  background: var(--v29-raised);

  @media (max-width: 640px) {
    align-items: stretch;
    flex-direction: column;
  }
`,TR=f.div`
  display: flex;
  gap: 8px;
`,IR=f.button`
  border: none;
  background: transparent;
  min-height: 42px;
  padding: 0 10px;
  border-radius: var(--v29-radius-button);
  color: var(--v29-muted);
  font-family: ${E};
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.15s ease;

  &:hover {
    color: var(--v29-text);
  }

  &:focus-visible {
    outline: 2px solid var(--v29-primary);
    outline-offset: 2px;
  }
`,RR=f.div`
  display: none;

  @media (max-width: 640px) {
    display: grid;
  }
`,CR=f.article`
  display: grid;
  gap: 12px;
  padding: 16px 18px;
  border-bottom: 1px solid var(--v29-line-soft);
  font-family: ${E};
  cursor: pointer;
  transition: background 0.15s ease;

  &:hover,
  &:focus-within,
  &:active {
    background: color-mix(in srgb, var(--v29-primary) 5%, transparent);
  }
`,OR=f.div`
  display: grid;
  justify-items: start;
  gap: 8px;
  min-width: 0;
`,AR=f.div`
  display: grid;
  gap: 4px;
  color: var(--v29-muted);
  font-size: 14px;
  line-height: 1.45;

  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span:first-child {
    color: var(--v29-text);
  }
`,PR=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  color: var(--v29-muted);
  font-size: 13px;
`,NR=f.div`
  display: inline-flex;
  gap: 4px;
  padding: 4px;
  margin-bottom: 18px;
  border-radius: 11px;
  background: var(--v29-raised);
  border: 1px solid var(--v29-line-soft);
`,Uu=f.button`
  appearance: none;
  cursor: pointer;
  border: none;
  border-radius: 7px;
  padding: 9px 16px;
  font-family: ${E};
  font-size: 13.5px;
  font-weight: 600;
  white-space: nowrap;
  color: ${t=>t.$active?"var(--v29-primary)":"var(--v29-muted)"};
  background: ${t=>t.$active?"var(--v29-card)":"transparent"};
  box-shadow: ${t=>t.$active?"var(--v29-card-shadow)":"none"};
  transition: color 0.15s ease, background 0.15s ease;

  &:hover {
    color: ${t=>t.$active?"var(--v29-primary)":"var(--v29-text)"};
  }
  &:focus-visible {
    outline: 2px solid var(--v29-primary);
    outline-offset: 2px;
  }
`,LR=()=>{const{t}=G(),[e,n]=Mm(),[r,i]=S.useState({kind:"loading"}),a=Number(e.get("page")??"1"),o=Number.isFinite(a)&&a>0?Math.floor(a):1,l=e.get("q")??"",c=e.get("status")??"",d=c?Number(c):void 0,u=d!==void 0&&Number.isFinite(d)?d:void 0,[h,p]=S.useState(l),m=Ir(),x=Ze(),y=A=>({pathname:`/portal/orders/${A}`,search:x.search}),b=ff(),_=b!=="own",j=e.get("scope")==="company"?"company":"mine",w=_?j:"mine";S.useEffect(()=>{p(l)},[l]);const v=S.useCallback(()=>{i({kind:"loading"}),g2({page:o,limit:io,salesOrderStatusId:u,searchCol:l?1:void 0,content:l||void 0,sortCol:1,sort:!1,scope:w==="company"?b:"own"}).then(pe=>{i({kind:"ready",rows:pe.data.salesOrders??[],total:pe.data.total??0})}).catch(()=>{i({kind:"error"})})},[o,l,u,w,b]);S.useEffect(()=>{v()},[v]);const I=A=>{const pe=A.page??o,Ie=A.query??l,Be=A.status??c,fe=A.tab??w,ze=new URLSearchParams;pe>1&&ze.set("page",String(pe)),Ie.trim()&&ze.set("q",Ie.trim()),Be&&ze.set("status",Be),fe==="company"&&ze.set("scope","company"),n(ze)},C=()=>{const A=h.trim();A!==l&&I({page:1,query:A})},D=A=>{A.preventDefault(),C()},F=()=>{p(""),I({page:1,query:"",status:""})},L=!!(l||c),z=(A,pe)=>{var Ie;A.defaultPrevented||A.metaKey||A.ctrlKey||A.shiftKey||A.altKey||(Ie=window.getSelection())!=null&&Ie.toString()||m(y(pe))},M=A=>{A!==w&&I({page:1,tab:A})},Z=S.useRef(null),ce=S.useRef(null),he=A=>{var Ie;if(!_||A.key!=="ArrowLeft"&&A.key!=="ArrowRight")return;A.preventDefault();const pe=w==="mine"?"company":"mine";M(pe),(Ie=(pe==="mine"?Z:ce).current)==null||Ie.focus()},de=r.kind==="ready"?r.total:0,ae=de===0?0:(o-1)*io+1,Se=Math.min(o*io,de),be=o>1,Te=Se<de;return s.jsxs(An,{children:[s.jsx(Pr,{children:s.jsxs("div",{children:[s.jsx(tn,{children:t("portal:common.eyebrow")}),s.jsx(Tn,{id:"orders-heading",children:t("portal:orders.title")}),s.jsx(nn,{children:t("portal:orders.lead")})]})}),_&&s.jsxs(NR,{role:"tablist","aria-labelledby":"orders-heading",onKeyDown:he,children:[s.jsx(Uu,{ref:Z,type:"button",role:"tab",id:"orders-tab-mine","aria-selected":w==="mine","aria-controls":"orders-panel",tabIndex:w==="mine"?0:-1,$active:w==="mine",onClick:()=>M("mine"),children:t("portal:admin.scopeOwn")}),s.jsx(Uu,{ref:ce,type:"button",role:"tab",id:"orders-tab-company","aria-selected":w==="company","aria-controls":"orders-panel",tabIndex:w==="company"?0:-1,$active:w==="company",onClick:()=>M("company"),children:t("portal:admin.scopeCompany")})]}),s.jsxs(oe,{id:"orders-panel",role:_?"tabpanel":void 0,"aria-labelledby":_?w==="mine"?"orders-tab-mine":"orders-tab-company":void 0,children:[s.jsx("form",{onSubmit:D,children:s.jsxs(lE,{children:[s.jsxs(Oe,{children:[t("portal:orders.searchLabel"),s.jsx(qe,{type:"search",inputMode:"search",value:h,placeholder:t("portal:orders.searchPlaceholder"),onChange:A=>p(A.target.value),onBlur:C})]}),s.jsxs(Oe,{children:[t("portal:orders.statusLabel"),s.jsxs(Sf,{value:c,onChange:A=>I({page:1,status:A.target.value}),children:[s.jsx("option",{value:"",children:t("portal:orders.allStatuses")}),wR.map(A=>s.jsx("option",{value:A,children:t(`salesOrderStatusId:${A}`,String(A))},A))]})]}),L&&s.jsx(IR,{type:"button",onClick:F,children:t("portal:orders.clearFilters")})]})}),r.kind==="loading"&&s.jsxs("div",{"aria-busy":"true","aria-label":t("common:loading"),children:[s.jsx(at,{}),s.jsx(at,{}),s.jsx(at,{})]}),r.kind==="error"&&s.jsxs(tt,{role:"alert",children:[t("portal:orders.loadFailed"),s.jsx("br",{}),s.jsx(we,{onClick:v,children:t("common:retry")})]}),r.kind==="ready"&&r.rows.length===0&&s.jsx(tt,{children:l||c?s.jsxs(s.Fragment,{children:[t("portal:orders.emptyFiltered"),s.jsx(we,{type:"button",onClick:F,children:t("portal:orders.clearFilters")})]}):t("portal:orders.empty")}),r.kind==="ready"&&r.rows.length>0&&s.jsxs(s.Fragment,{children:[s.jsx(kR,{children:s.jsxs(SR,{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{scope:"col",children:t("portal:orders.colOrderId")}),s.jsx("th",{scope:"col",children:t("portal:orders.colRoute")}),s.jsx("th",{scope:"col",children:t("portal:orders.colCreated")}),s.jsx("th",{scope:"col",children:t("portal:orders.colPackages")}),s.jsx("th",{scope:"col",children:t("portal:orders.colStatus")})]})}),s.jsx("tbody",{children:r.rows.map(A=>s.jsxs("tr",{onClick:pe=>z(pe,A.salesOrderId),children:[s.jsx("td",{children:s.jsx(Mu,{to:y(A.salesOrderId),children:A.salesOrderId})}),s.jsx("td",{children:s.jsxs(jR,{title:`${A.pickup} → ${A.delivery}`,"aria-label":`${A.pickup} ${t("portal:orders.routeTo")} ${A.delivery}`,children:[s.jsx("span",{"aria-hidden":"true",children:A.pickup}),s.jsxs("span",{"aria-hidden":"true",children:["→ ",A.delivery]})]})}),s.jsx("td",{children:s.jsx(Fu,{children:A.createdTime})}),s.jsx("td",{children:s.jsx(om,{children:A.packages})}),s.jsx("td",{children:s.jsx(zs,{statusId:A.salesOrderStatusId})})]},A.salesOrderId))})]})}),s.jsx(RR,{children:r.rows.map(A=>s.jsxs(CR,{onClick:pe=>z(pe,A.salesOrderId),children:[s.jsxs(OR,{children:[s.jsx(Mu,{to:y(A.salesOrderId),children:A.salesOrderId}),s.jsx(zs,{statusId:A.salesOrderStatusId})]}),s.jsxs(AR,{"aria-label":`${A.pickup} ${t("portal:orders.routeTo")} ${A.delivery}`,children:[s.jsx("span",{"aria-hidden":"true",children:A.pickup}),s.jsxs("span",{"aria-hidden":"true",children:["→ ",A.delivery]})]}),s.jsxs(PR,{children:[s.jsx(Fu,{children:A.createdTime}),s.jsxs("span",{children:[A.packages," ",t("portal:orders.packageAbbrev")]})]})]},A.salesOrderId))})]}),r.kind==="ready"&&r.rows.length>0&&s.jsxs(_R,{children:[s.jsx(ER,{children:t("portal:orders.showingRange",{from:ae,to:Se,total:de})}),s.jsxs(TR,{children:[s.jsx(we,{type:"button",disabled:!be,onClick:()=>I({page:o-1}),children:t("portal:orders.prevPage")}),s.jsx(we,{type:"button",disabled:!Te,onClick:()=>I({page:o+1}),children:t("portal:orders.nextPage")})]})]})]})]})},$R=[{id:"orders",labelKey:"portal:admin.groupOrders",codes:Object.values(me)},{id:"users",labelKey:"portal:admin.groupUsers",codes:[re.USER_LIST,re.USER_ADD,re.USER_EDIT,re.USER_SUSPEND]},{id:"roles",labelKey:"portal:admin.groupRoles",codes:[re.ROLE_LIST,re.ROLE_ADD,re.ROLE_EDIT,re.ROLE_DELETE]}],DR=f.form`
  display: grid;
  gap: 18px;
`,MR=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 18px;
`,FR=f.fieldset`
  margin: 0;
  padding: 0;
  border: none;
  display: grid;
  gap: 2px;
  align-content: start;
`,UR=f.legend`
  padding: 0 0 8px;
  font-family: ${E};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--v29-muted);
`,BR=f(De)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: ${E};
  font-size: 14px;
  font-weight: 600;
  color: var(--v29-primary);
  text-decoration: none;

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover {
    text-decoration: underline;
  }
`,Bu=()=>{const{t}=G(),e=Ir(),{roleId:n}=Jo(),r=n!==void 0,[i,a]=S.useState(r?{kind:"loading"}:{kind:"ready",role:null}),[o,l]=S.useState(""),[c,d]=S.useState(new Set),[u,h]=S.useState(!1),[p,m]=S.useState(null),x=S.useRef(0),y=S.useCallback(()=>{if(!r)return;const j=++x.current;a({kind:"loading"}),zf().then(w=>{if(x.current!==j)return;const v=w.data.roles.find(I=>I.roleId===Number(n));if(!v){a({kind:"not-found"});return}if(v.isSystem){a({kind:"locked"});return}l(v.roleName),d(new Set(v.permissions)),a({kind:"ready",role:v})}).catch(()=>{x.current===j&&a({kind:"error"})})},[r,n]);S.useEffect(()=>{y()},[y]),S.useEffect(()=>{r||(l(""),d(new Set),a({kind:"ready",role:null}),m(null))},[r]);const b=j=>{d(w=>{const v=new Set(w);return v.has(j)?v.delete(j):v.add(j),v}),m(null)},_=j=>{if(j.preventDefault(),!o.trim()||c.size===0){m(t("portal:admin.roleFormRequired"));return}h(!0),m(null);const w={roleName:o.trim(),permissions:Array.from(c)};(r?v2(Number(n),w):y2(w)).then(()=>e("/portal/admin/users")).catch(()=>{m(t("portal:admin.roleFormSaveFailed")),h(!1)})};return s.jsxs(An,{children:[s.jsxs(Pr,{children:[s.jsxs("div",{children:[s.jsx(tn,{children:t("portal:common.eyebrow")}),s.jsx(Tn,{children:t(r?"portal:admin.roleFormEditTitle":"portal:admin.roleFormCreateTitle")}),s.jsx(nn,{children:t("portal:admin.roleFormLead")})]}),s.jsxs(BR,{to:"/portal/admin/users",children:[s.jsx(Xo,{"aria-hidden":"true"}),t("portal:admin.backToAdmin")]})]}),i.kind==="loading"&&s.jsx(oe,{children:s.jsx(tt,{"aria-busy":"true",children:t("common:loading")})}),i.kind==="error"&&s.jsx(oe,{children:s.jsxs(tt,{role:"alert",children:[t("portal:admin.roleFormLoadFailed"),s.jsx(we,{type:"button",onClick:y,children:t("common:retry")})]})}),i.kind==="not-found"&&s.jsx(oe,{children:s.jsx(tt,{children:t("portal:admin.roleFormNotFound")})}),i.kind==="locked"&&s.jsx(oe,{children:s.jsx(tt,{children:t("portal:admin.roleFormSystem")})}),i.kind==="ready"&&s.jsxs(DR,{onSubmit:_,children:[s.jsx(oe,{children:s.jsx(ye,{children:s.jsxs(Oe,{children:[s.jsxs("span",{children:[t("portal:admin.roleName"),s.jsx(Ct,{children:"*"})]}),s.jsx(qe,{"aria-required":"true",value:o,onChange:j=>{l(j.target.value),m(null)}})]})})}),s.jsx(oe,{children:s.jsxs(ye,{children:[s.jsx(Le,{children:t("portal:admin.permissions")}),s.jsx(MR,{children:$R.map(j=>s.jsxs(FR,{children:[s.jsx(UR,{children:t(j.labelKey)}),j.codes.map(w=>s.jsxs(dE,{children:[s.jsx("input",{type:"checkbox",checked:c.has(w),onChange:()=>b(w)}),t(`portal:permissions.${w}`,w)]},w))]},j.id))})]})}),s.jsxs(ri,{children:[s.jsx(we,{as:De,to:"/portal/admin/users",children:t("common:cancel")}),s.jsxs(vn,{type:"submit",disabled:u,children:[s.jsx(Zm,{"aria-hidden":"true"}),t(r?"portal:admin.saveChanges":"portal:admin.createRole")]})]}),p&&s.jsx(et,{$danger:!0,role:"alert",children:p})]})]})},zR=ph(),HR=[me.LIST,me.ADD,me.IMPORT,me.LIST_ALL,re.USER_LIST,re.USER_ADD,re.USER_EDIT,re.USER_SUSPEND],VR=[me.LIST,me.ADD,me.LIST_SUB],WR=[me.LIST,me.LIST_OWN],zo=[{id:"owner",nameKey:"portal:roles.owner.name",descriptionKey:"portal:roles.owner.desc",permissions:zR,scope:"all"},{id:"manager",nameKey:"portal:roles.manager.name",descriptionKey:"portal:roles.manager.desc",permissions:HR,scope:"all"},{id:"staff",nameKey:"portal:roles.staff.name",descriptionKey:"portal:roles.staff.desc",permissions:VR,scope:"sub"},{id:"viewer",nameKey:"portal:roles.viewer.name",descriptionKey:"portal:roles.viewer.desc",permissions:WR,scope:"own"}],Fl=[{id:"viewOrders",labelKey:"portal:roles.capabilities.viewOrders",group:"orders",codes:[me.LIST]},{id:"createOrders",labelKey:"portal:roles.capabilities.createOrders",group:"orders",codes:[me.ADD]},{id:"importOrders",labelKey:"portal:roles.capabilities.importOrders",group:"orders",codes:[me.IMPORT]},{id:"companyOrders",labelKey:"portal:roles.capabilities.companyOrders",group:"orders",codes:[me.LIST_ALL,me.LIST_SUB]},{id:"inviteMembers",labelKey:"portal:roles.capabilities.inviteMembers",group:"team",codes:[re.USER_ADD]},{id:"suspendMembers",labelKey:"portal:roles.capabilities.suspendMembers",group:"team",codes:[re.USER_SUSPEND]},{id:"manageRoles",labelKey:"portal:roles.capabilities.manageRoles",group:"team",codes:[re.ROLE_ADD,re.ROLE_EDIT,re.ROLE_DELETE]}],qR=(t,e)=>e.codes.some(n=>t.permissions.includes(n)),KR=[re.ROLE_ADD,re.ROLE_EDIT,re.ROLE_DELETE],Ho=t=>!!t&&KR.some(e=>t.permissions.includes(e)),lm=t=>t.statusId===void 0||t.statusId===1,Vo=(t,e)=>t.find(n=>n.roleId===e),GR=(t,e,n)=>t.filter(r=>r.uid!==n&&lm(r)&&Ho(Vo(e,r.roleId))).length,zu=(t,e,n,r)=>{const i=e.roleId??t.roleId,a=e.statusId??t.statusId??1,o=lm(t)&&Ho(Vo(r,t.roleId)),l=a===1&&Ho(Vo(r,i));return o&&!l&&GR(n,r,t.uid)===0},Hu=t=>!!t&&typeof t=="object"&&t.reason==="lastOwner",ZR=(t,e)=>Fl.filter(n=>n.codes.some(r=>t.includes(r))&&!n.codes.some(r=>e.includes(r))),YR=t=>t.length===0?"":t.length===1?t[0]:`${t.slice(0,-1).join(", ")} and ${t[t.length-1]}`,JR=t=>!!t.isSystem,XR=(t,e)=>e.codes.some(n=>t.includes(n)),QR=(t,e)=>t.length===e.length&&t.every(n=>e.includes(n)),Vu=t=>zo.find(e=>QR(e.permissions,t)),Ul="/api/company/rbac/invites",eC=()=>se.get(Ul).then(Tt(_t.ApiInviteListResponse,"getInviteList")),Wu=t=>se.post(Ul,t).then(Tt(_t.ApiInvite,"postInvite")),qu=t=>se.delete(`${Ul}/${t}`),tC=f.div`
  display: grid;
  gap: 8px;
`,nC=f.details`
  font-family: ${E};
  font-size: 13px;

  summary {
    cursor: pointer;
    color: var(--v29-primary);
    font-weight: 700;
  }

  summary:focus-visible {
    outline: 2px solid var(--v29-primary);
    outline-offset: 2px;
  }
`,rC=f.ul`
  margin: 8px 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 6px;

  li {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--v29-text);
  }

  svg {
    width: 15px;
    height: 15px;
    color: var(--v29-primary);
    flex-shrink: 0;
  }
`,iC=f.span`
  display: inline-flex;
  color: ${t=>t.$active?"var(--v29-primary)":"var(--v29-muted)"};

  svg {
    width: 16px;
    height: 16px;
  }
`,sC=f.div`
  margin-top: 26px;
  padding-top: 22px;
  border-top: 1px solid var(--v29-line-soft);
`,so=({value:t,onChange:e,roleOptions:n,placeholder:r,ariaLabel:i,ariaRequired:a})=>{const{t:o}=G(),l=n.find(u=>String(u.roleId)===t),c=l?Vu(l.permissions):void 0,d=l?Fl.filter(u=>XR(l.permissions,u)):[];return s.jsxs(tC,{children:[s.jsxs(Sf,{"aria-label":i,"aria-required":a,value:t,onChange:u=>e(u.target.value),children:[r&&s.jsx("option",{value:"",children:r}),n.map(u=>{const h=Vu(u.permissions);return s.jsx("option",{value:u.roleId,children:h?o(h.nameKey):u.roleName},u.roleId)})]}),l&&s.jsxs(s.Fragment,{children:[c&&s.jsx(et,{children:o(c.descriptionKey)}),s.jsxs(nC,{children:[s.jsx("summary",{children:o("portal:admin.permissions")}),s.jsx(rC,{children:d.map(u=>s.jsxs("li",{children:[s.jsx(Ks,{"aria-hidden":"true"}),o(u.labelKey)]},u.id))})]})]})]})},aC=f.div`
  display: grid;
  gap: 18px;
`,Ku=f.div`
  display: grid;
  grid-template-columns: ${t=>t.$single?"1fr":"minmax(0, 1.3fr) minmax(280px, 0.7fr)"};
  gap: 18px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,Gu=f.form`
  display: grid;
  gap: 14px;
`,oC=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`,Wo=f.span`
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding: 5px 9px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--v29-primary) 9%, transparent);
  color: var(--v29-primary);
  font-family: ${E};
  font-size: 12px;
  font-weight: 700;
`,Gi=f(Wo)`
  background: var(--v29-line-soft);
  color: var(--v29-muted);
`,ao=f.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;

  button,
  a {
    min-height: 34px;
    padding: 6px 12px;
    font-size: 13px;
  }
`,lC=f.div`
  display: flex;
  gap: 8px;
`,cC=f.span`
  display: inline-flex;
  align-items: center;
  min-height: 42px;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid var(--v29-line-soft);
  background: var(--v29-raised);
  color: var(--v29-muted);
  font-family: ${E};
  font-size: 14px;
  user-select: none;
`,dC=new Intl.DateTimeFormat("en-AU",{day:"numeric",month:"short",year:"numeric"}),uC=t=>{const e=new Date(t);return Number.isNaN(e.getTime())?t:dC.format(e)},hC=()=>{const{t}=G(),e=ft(T=>T.uid),n=Vt(re.USER_ADD),r=Vt(re.USER_EDIT),i=Vt(re.USER_SUSPEND),a=Vt(re.ROLE_LIST),o=Vt(re.ROLE_ADD),l=Vt(re.ROLE_EDIT),c=Vt(re.ROLE_DELETE),d=a||n||r||i,[u,h]=S.useState({kind:"loading"}),[p,m]=S.useState({kind:"loading"}),[x,y]=S.useState({name:"",email:"",roleId:""}),[b,_]=S.useState(!1),[j,w]=S.useState(null),[v,I]=S.useState(null),[C,D]=S.useState(""),[F,L]=S.useState(!1),[z,M]=S.useState(null),[Z,ce]=S.useState(null),[he,de]=S.useState(null),[ae,Se]=S.useState(null),[be,Te]=S.useState(!1),[A,pe]=S.useState(null),[Ie,Be]=S.useState({kind:"loading"}),[fe,ze]=S.useState({mobile:"",roleId:""}),[Mt,rn]=S.useState(!1),[sn,It]=S.useState(null),[ne,Ne]=S.useState(null),[Ve,Ft]=S.useState(null),an=S.useRef(0),on=S.useRef(0),ir=S.useRef(0),ln=S.useCallback(()=>{const T=++an.current;h({kind:"loading"}),w2().then(X=>{an.current===T&&h({kind:"ready",users:X.data.users})}).catch(()=>{an.current===T&&h({kind:"error"})})},[]),Re=S.useCallback(()=>{const T=++on.current;m({kind:"loading"}),zf().then(X=>{on.current===T&&m({kind:"ready",roles:X.data.roles})}).catch(()=>{on.current===T&&m({kind:"error"})})},[]),We=S.useCallback(()=>{const T=++ir.current;Be({kind:"loading"}),eC().then(X=>{ir.current===T&&Be({kind:"ready",invites:X.data.invites})}).catch(()=>{ir.current===T&&Be({kind:"error"})})},[]);S.useEffect(()=>{ln()},[ln]),S.useEffect(()=>{d&&Re()},[d,Re]),S.useEffect(()=>{We()},[We]);const st=p.kind==="ready"?p.roles:[],Nr=T=>X=>{y(Ce=>({...Ce,[T]:X.target.value})),w(null)},Lr=T=>{y(X=>({...X,roleId:T})),w(null)},gt=T=>{T.preventDefault();const X=Number(x.roleId);if(!x.name.trim()||!X){w({kind:"error",text:t("portal:admin.addUserRequired")});return}_(!0),w(null),k2({name:x.name.trim(),email:x.email.trim(),roleId:X}).then(Ce=>{w({kind:"success",text:t("portal:admin.addUserSuccess",{name:Ce.data.name})}),y({name:"",email:"",roleId:""}),ln(),d&&Re()}).catch(()=>w({kind:"error",text:t("portal:admin.addUserFailed")})).finally(()=>_(!1))},Y=T=>{I(T.uid),D(String(T.roleId)),M(null),ce(null)},Me=(T,X)=>{L(!0),du({uid:T.uid,roleId:X}).then(Ce=>{M({kind:"success",text:t("portal:admin.userUpdated",{name:Ce.data.name,role:Ce.data.roleName})}),I(null),ce(null),ln(),d&&Re()}).catch(Ce=>M({kind:"error",text:Hu(Ce)?t("portal:admin.lastOwnerBlock"):t("portal:admin.userUpdateFailed")})).finally(()=>L(!1))},Ut=T=>{const X=Number(C);if(!X){M({kind:"error",text:t("portal:admin.rolesUnavailable")});return}const Ce=p.kind==="ready"?p.roles:[],Dr=u.kind==="ready"?u.users:[];if(zu(T,{roleId:X},Dr,Ce)){M({kind:"error",text:t("portal:admin.lastOwnerBlock")});return}const Mr=T.uid===e,vm=(Z==null?void 0:Z.uid)===T.uid;if(Mr&&!vm&&X!==T.roleId){const ga=Ce.find(Fr=>Fr.roleId===T.roleId),xa=Ce.find(Fr=>Fr.roleId===X),Hl=ZR((ga==null?void 0:ga.permissions)??[],(xa==null?void 0:xa.permissions)??[]);if(Hl.length>0){ce({uid:T.uid,message:t("portal:admin.selfDemoteConfirm",{capabilities:YR(Hl.map(Fr=>t(Fr.labelKey)))})});return}}Me(T,X)},xt=T=>T.statusId===void 0||T.statusId===1,$r=T=>{const X=xt(T)?2:1,Ce=p.kind==="ready"?p.roles:[],Dr=u.kind==="ready"?u.users:[];if(zu(T,{statusId:X},Dr,Ce)){M({kind:"error",text:t("portal:admin.lastOwnerBlock")});return}de(T.uid),du({uid:T.uid,statusId:X}).then(()=>{M(null),ln()}).catch(Mr=>M({kind:"error",text:Hu(Mr)?t("portal:admin.lastOwnerBlock"):t("portal:admin.userUpdateFailed")})).finally(()=>de(null))},ma=T=>{T.preventDefault();const X=Number(fe.roleId),Ce=fe.mobile.replace(/[^\d]/g,"");if(!Ce||!X){It({kind:"error",text:t("portal:admin.inviteRequired","Enter a mobile number and pick a role.")});return}const Dr=`+61${Ce.replace(/^0/,"")}`;rn(!0),It(null),Wu({phone:Dr,roleId:X}).then(Mr=>{It({kind:"success",text:t("portal:admin.inviteSentNotice",{phone:Mr.data.phone,defaultValue:"Invite sent to {{phone}}."})}),ze({mobile:"",roleId:""}),We()}).catch(()=>It({kind:"error",text:t("portal:admin.inviteSendFailed","We couldn't send that invite. Try again.")})).finally(()=>rn(!1))},Pn=T=>{Ft(T.id),Ne(null),Wu({phone:T.phone,roleId:T.roleId}).then(()=>qu(T.id)).then(()=>{Ne(null),We()}).catch(()=>Ne({kind:"error",text:t("portal:admin.inviteResendFailed","We couldn't resend that invite. Try again.")})).finally(()=>Ft(null))},fm=T=>{Ft(T.id),Ne(null),qu(T.id).then(()=>{Ne(null),We()}).catch(()=>Ne({kind:"error",text:t("portal:admin.inviteRevokeFailed","We couldn't revoke that invite. Try again.")})).finally(()=>Ft(null))},mm=T=>{if(pe(null),T.memberCount>0){Se({roleId:T.roleId,kind:"blocked",memberCount:T.memberCount});return}Se({roleId:T.roleId,kind:"confirm"})},gm=T=>{Te(!0),b2(T.roleId).then(()=>{pe({kind:"success",text:t("portal:admin.roleDeleted")}),Se(null),Re()}).catch(()=>pe({kind:"error",text:t("portal:admin.deleteFailed")})).finally(()=>Te(!1))},xm=r||i?5:4,ym=n?5:4;return s.jsxs(An,{children:[s.jsx(Pr,{children:s.jsxs("div",{children:[s.jsx(tn,{children:t("portal:common.eyebrow")}),s.jsx(Tn,{children:t("portal:admin.title")}),s.jsx(nn,{children:t("portal:admin.lead")})]})}),s.jsxs(aC,{children:[s.jsxs(Ku,{$single:!n,children:[s.jsx(oe,{children:s.jsxs(ye,{children:[s.jsx(Le,{children:t("portal:admin.usersTitle")}),u.kind==="loading"&&s.jsxs("div",{"aria-busy":"true","aria-label":t("common:loading"),children:[s.jsx(at,{}),s.jsx(at,{}),s.jsx(at,{})]}),u.kind==="error"&&s.jsxs(tt,{role:"alert",children:[t("portal:admin.usersLoadFailed"),s.jsx(we,{type:"button",onClick:ln,children:t("common:retry")})]}),u.kind==="ready"&&u.users.length===0&&s.jsx(tt,{children:t("portal:admin.usersEmpty")}),u.kind==="ready"&&u.users.length>0&&s.jsx(Bn,{children:s.jsxs(zn,{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{scope:"col",children:t("portal:admin.name")}),s.jsx("th",{scope:"col",children:t("portal:admin.email")}),s.jsx("th",{scope:"col",children:t("portal:admin.role")}),s.jsx("th",{scope:"col",children:t("portal:admin.status")}),(r||i)&&s.jsx("th",{scope:"col",children:t("portal:admin.actions")})]})}),s.jsxs("tbody",{children:[u.users.map(T=>s.jsxs("tr",{children:[s.jsxs("td",{children:[T.name," ",T.uid===e&&s.jsx(Gi,{children:t("portal:admin.you")})]}),s.jsx("td",{children:T.email||"-"}),s.jsx("td",{children:v===T.uid?s.jsx(so,{ariaLabel:t("portal:admin.role"),value:C,onChange:X=>{D(X),ce(null),M(null)},roleOptions:st}):T.roleName||"-"}),s.jsx("td",{children:xt(T)?s.jsx(Wo,{children:t("portal:admin.active")}):s.jsx(Gi,{children:t("portal:admin.suspended")})}),(r||i)&&s.jsx("td",{children:s.jsx(ao,{children:v===T.uid?s.jsxs(s.Fragment,{children:[(Z==null?void 0:Z.uid)===T.uid&&s.jsx(et,{$danger:!0,role:"alert",children:Z.message}),(Z==null?void 0:Z.uid)===T.uid?s.jsx(Kr,{type:"button",disabled:F,onClick:()=>Ut(T),children:t("portal:admin.saveUser")}):s.jsx(vn,{type:"button",disabled:F,onClick:()=>Ut(T),children:t("portal:admin.saveUser")}),s.jsx(we,{type:"button",disabled:F,onClick:()=>{I(null),ce(null)},children:t("common:cancel")})]}):s.jsxs(s.Fragment,{children:[r&&s.jsx(we,{type:"button",onClick:()=>Y(T),children:t("portal:admin.editUser")}),i&&(xt(T)?s.jsx(Kr,{type:"button",disabled:he===T.uid,onClick:()=>$r(T),children:t("portal:admin.suspend")}):s.jsx(we,{type:"button",disabled:he===T.uid,onClick:()=>$r(T),children:t("portal:admin.reactivate")}))]})})})]},T.uid)),z&&s.jsx("tr",{children:s.jsx("td",{colSpan:xm,children:s.jsx(et,{$danger:z.kind==="error",role:z.kind==="error"?"alert":"status",children:z.text})})})]})]})})]})}),n&&s.jsx(oe,{children:s.jsxs(ye,{children:[s.jsx(Le,{children:t("portal:admin.addUserTitle")}),s.jsxs(Gu,{onSubmit:gt,children:[s.jsxs(Oe,{children:[s.jsxs("span",{children:[t("portal:admin.name"),s.jsx(Ct,{children:"*"})]}),s.jsx(qe,{"aria-required":"true",value:x.name,onChange:Nr("name")})]}),s.jsxs(Oe,{children:[t("portal:admin.email"),s.jsx(qe,{inputMode:"email",type:"email",value:x.email,onChange:Nr("email")})]}),s.jsxs(Oe,{children:[s.jsxs("span",{children:[t("portal:admin.role"),s.jsx(Ct,{children:"*"})]}),s.jsx(so,{ariaRequired:!0,value:x.roleId,onChange:Lr,roleOptions:st,placeholder:t("portal:admin.selectRole")})]}),p.kind==="error"&&s.jsxs(et,{$danger:!0,role:"alert",children:[t("portal:admin.rolesUnavailable")," ",s.jsx(we,{type:"button",onClick:Re,children:t("common:retry")})]}),s.jsx(ri,{children:s.jsxs(vn,{type:"submit",disabled:b,children:[s.jsx(Vl,{"aria-hidden":"true"}),t("portal:admin.addUser")]})}),j&&s.jsx(et,{$danger:j.kind==="error",role:j.kind==="error"?"alert":"status",children:j.text})]})]})})]}),s.jsxs(Ku,{$single:!n,children:[s.jsx(oe,{children:s.jsxs(ye,{children:[s.jsxs(Le,{children:[s.jsx(Qm,{"aria-hidden":"true"}),t("portal:admin.pending")]}),Ie.kind==="loading"&&s.jsxs("div",{"aria-busy":"true","aria-label":t("common:loading"),children:[s.jsx(at,{}),s.jsx(at,{})]}),Ie.kind==="error"&&s.jsxs(tt,{role:"alert",children:[t("portal:admin.invitesLoadFailed","We couldn't load invites."),s.jsx(we,{type:"button",onClick:We,children:t("common:retry")})]}),Ie.kind==="ready"&&Ie.invites.length===0&&s.jsx(tt,{children:t("portal:admin.invitesEmpty","No pending invites.")}),Ie.kind==="ready"&&Ie.invites.length>0&&s.jsx(Bn,{children:s.jsxs(zn,{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{scope:"col",children:t("portal:admin.invitePhone")}),s.jsx("th",{scope:"col",children:t("portal:admin.role")}),s.jsx("th",{scope:"col",children:t("portal:admin.status")}),s.jsx("th",{scope:"col",children:t("portal:admin.expiresOn","Expires")}),n&&s.jsx("th",{scope:"col",children:t("portal:admin.actions")})]})}),s.jsxs("tbody",{children:[Ie.invites.map(T=>s.jsxs("tr",{children:[s.jsx("td",{children:T.phone}),s.jsx("td",{children:T.roleName||"-"}),s.jsx("td",{children:s.jsx(Gi,{children:t("portal:admin.pending")})}),s.jsx("td",{children:uC(T.expiresAt)}),n&&s.jsx("td",{children:s.jsxs(ao,{children:[s.jsx(we,{type:"button",disabled:Ve===T.id,onClick:()=>Pn(T),children:t("portal:admin.resend")}),s.jsx(Kr,{type:"button",disabled:Ve===T.id,onClick:()=>fm(T),children:t("portal:admin.revoke")})]})})]},T.id)),ne&&s.jsx("tr",{children:s.jsx("td",{colSpan:ym,children:s.jsx(et,{$danger:ne.kind==="error",role:ne.kind==="error"?"alert":"status",children:ne.text})})})]})]})})]})}),n&&s.jsx(oe,{children:s.jsxs(ye,{children:[s.jsx(Le,{children:t("portal:admin.inviteSectionTitle","Invite by Phone")}),s.jsxs(Gu,{onSubmit:ma,children:[s.jsxs(Oe,{children:[s.jsxs("span",{children:[t("portal:admin.invitePhone"),s.jsx(Ct,{children:"*"})]}),s.jsxs(lC,{children:[s.jsx(cC,{"aria-hidden":"true",children:"+61"}),s.jsx(qe,{type:"tel",inputMode:"tel",autoComplete:"tel","aria-required":"true",value:fe.mobile,onChange:T=>{ze(X=>({...X,mobile:T.target.value})),It(null)}})]})]}),s.jsxs(Oe,{children:[s.jsxs("span",{children:[t("portal:admin.role"),s.jsx(Ct,{children:"*"})]}),s.jsx(so,{ariaRequired:!0,value:fe.roleId,onChange:T=>{ze(X=>({...X,roleId:T})),It(null)},roleOptions:st,placeholder:t("portal:admin.selectRole")})]}),p.kind==="error"&&s.jsxs(et,{$danger:!0,role:"alert",children:[t("portal:admin.rolesUnavailable")," ",s.jsx(we,{type:"button",onClick:Re,children:t("common:retry")})]}),s.jsx(ri,{children:s.jsxs(vn,{type:"submit",disabled:Mt,children:[s.jsx(Vl,{"aria-hidden":"true"}),t("portal:admin.sendInvite","Send Invite")]})}),sn&&s.jsx(et,{$danger:sn.kind==="error",role:sn.kind==="error"?"alert":"status",children:sn.text})]})]})})]}),a&&s.jsx(oe,{children:s.jsxs(ye,{children:[s.jsxs(Le,{children:[s.jsx(Jm,{"aria-hidden":"true"}),t("portal:admin.rolesTitle")]}),p.kind==="loading"&&s.jsxs("div",{"aria-busy":"true","aria-label":t("common:loading"),children:[s.jsx(at,{}),s.jsx(at,{})]}),p.kind==="error"&&s.jsxs(tt,{role:"alert",children:[t("portal:admin.rolesLoadFailed"),s.jsx(we,{type:"button",onClick:Re,children:t("common:retry")})]}),p.kind==="ready"&&p.roles.length===0&&s.jsx(tt,{children:t("portal:admin.rolesEmpty")}),p.kind==="ready"&&p.roles.length>0&&s.jsx(Bn,{children:s.jsxs(zn,{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{scope:"col",children:t("portal:admin.role")}),s.jsx("th",{scope:"col",children:t("portal:admin.permissions")}),s.jsx("th",{scope:"col",children:t("portal:admin.members")}),(l||c)&&s.jsx("th",{scope:"col",children:t("portal:admin.actions")})]})}),s.jsx("tbody",{children:p.roles.map(T=>s.jsxs("tr",{children:[s.jsxs("td",{children:[T.roleName," ",T.isSystem&&s.jsx(Gi,{children:t("portal:admin.systemRole")})]}),s.jsx("td",{children:s.jsx(oC,{children:T.permissions.map(X=>s.jsx(Wo,{children:t(`portal:permissions.${X}`,X)},X))})}),s.jsx("td",{children:T.memberCount}),(l||c)&&s.jsx("td",{children:JR(T)?null:s.jsx(ao,{children:(ae==null?void 0:ae.roleId)===T.roleId&&ae.kind==="confirm"?s.jsxs(s.Fragment,{children:[s.jsx(et,{$danger:!0,children:t("portal:admin.deleteConfirm")}),s.jsx(Kr,{type:"button",disabled:be,onClick:()=>gm(T),children:t("portal:admin.confirmDelete")}),s.jsx(we,{type:"button",disabled:be,onClick:()=>Se(null),children:t("common:cancel")})]}):s.jsxs(s.Fragment,{children:[l&&s.jsx(we,{as:De,to:`/portal/admin/roles/${T.roleId}`,children:t("portal:admin.editRole")}),c&&s.jsx(Kr,{type:"button",onClick:()=>mm(T),children:t("portal:admin.deleteRole")}),(ae==null?void 0:ae.roleId)===T.roleId&&ae.kind==="blocked"&&s.jsx(et,{$danger:!0,role:"alert",children:t("portal:admin.deleteBlocked",{count:ae.memberCount})})]})})})]},T.roleId))})]})}),s.jsxs(sC,{children:[s.jsx(Le,{children:t("portal:admin.permissions")}),s.jsx(Bn,{children:s.jsxs(zn,{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{scope:"col"}),zo.map(T=>s.jsx("th",{scope:"col",children:t(T.nameKey)},T.id))]})}),s.jsx("tbody",{children:Fl.map(T=>s.jsxs("tr",{children:[s.jsx("th",{scope:"row",children:t(T.labelKey)}),zo.map(X=>{const Ce=qR(X,T);return s.jsx("td",{children:s.jsx(iC,{$active:Ce,children:Ce?s.jsx(Ks,{"aria-hidden":"true"}):s.jsx("span",{"aria-hidden":"true",children:"–"})})},X.id)})]},T.id))})]})})]}),A&&s.jsx(et,{$danger:A.kind==="error",role:A.kind==="error"?"alert":"status",children:A.text}),o&&s.jsx(ri,{children:s.jsxs(vn,{as:De,to:"/portal/admin/roles/new",children:[s.jsx(Gm,{"aria-hidden":"true"}),t("portal:admin.createRole")]})})]})})]})]})},zt=({children:t})=>{const e=ra(),n=Ze();if(!e){const r=In("portalLogin");return s.jsx(pt,{to:nl(),replace:!0,state:r?{from:`${n.pathname}${n.search}`}:void 0})}return s.jsx(s.Fragment,{children:t})},$n=({children:t,code:e})=>Vt(e)?s.jsx(s.Fragment,{children:t}):s.jsx(pt,{to:"/portal",replace:!0}),pC={check:s.jsx("path",{d:"M5 10.5L8.4 14L15 6.5",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"}),truck:s.jsxs(s.Fragment,{children:[s.jsx("path",{d:"M11 13V5H3V13H11ZM11 13H17V10.5L14.5 8H11V13Z",strokeWidth:"1.7",strokeLinejoin:"round"}),s.jsx("path",{d:"M6 16C6.82843 16 7.5 15.3284 7.5 14.5C7.5 13.6716 6.82843 13 6 13C5.17157 13 4.5 13.6716 4.5 14.5C4.5 15.3284 5.17157 16 6 16Z",strokeWidth:"1.5"}),s.jsx("path",{d:"M14 16C14.8284 16 15.5 15.3284 15.5 14.5C15.5 13.6716 14.8284 13 14 13C13.1716 13 12.5 13.6716 12.5 14.5C12.5 15.3284 13.1716 16 14 16Z",strokeWidth:"1.5"})]}),box:s.jsxs(s.Fragment,{children:[s.jsx("path",{d:"M4 6.5L10 3L16 6.5V13.5L10 17L4 13.5V6.5Z",strokeWidth:"1.7"}),s.jsx("path",{d:"M4.5 6.5L10 9.5M10 9.5L15.5 6.5M10 9.5V16.5",strokeWidth:"1.7"})]}),flag:s.jsx("path",{d:"M6 17V3M6 4H14L12.5 7L14 10H6",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round"})},fC=({icon:t,className:e})=>s.jsx("svg",{className:e,viewBox:"0 0 20 20",fill:"none",stroke:"currentColor","aria-hidden":"true",focusable:"false",children:pC[t]}),mC=({className:t})=>s.jsx("svg",{className:t,viewBox:"106.147 26.9902 14.655 13.8576","aria-hidden":"true",focusable:"false",children:s.jsx("path",{d:Fm,fill:"currentColor"})}),Zi=.4,Yi=.5;function Hs(t,e){return 100/(t-1+2*e)}function Zu(t,e,n){return(n+t)*Hs(e,n)}function Ji(t,e,n){return(n+t+.5)*Hs(e,n)}function un(t){return`${Math.round(t*1e3)/1e3}%`}const rr=t=>B`
  @media (max-width: ${Gf}px) {
    ${t}
  }
`,gC=f.div`
  position: relative;
  width: 100%;
  max-width: 1100px;
  height: 130px;
  margin: 0 auto;
  font-family: ${E};
  ${rr(B`
    height: 112px;
  `)}
`,xC=f.div`
  position: absolute;
  inset: 0 34px;
  ${rr(B`
    inset: 0;
  `)}
`,yC=f.ol`
  position: absolute;
  inset: 0;
  margin: 0;
  padding: 0;
  list-style: none;
`,vC=f.div`
  position: absolute;
  top: 30px;
  left: 0;
  right: 0;
  --point-depth: 8px;
  height: 16px;
  border-radius: 6px;
  overflow: hidden;
  background: var(--trk-rail-future);
  ${rr(B`
    --point-depth: 5px;
    height: 10px;
    border-radius: 5px;
  `)}
`,cm=f.span`
  position: absolute;
  inset-block: 0;
  left: calc(var(--seg-l) - var(--underlap));
  width: calc(var(--seg-w) + var(--underlap));
  --underlap: ${({$underPoint:t})=>t?"var(--point-depth)":"0px"};
  background: ${({$fill:t})=>t};
  ${rr(B`
    left: calc(var(--seg-lm) - var(--underlap));
    width: calc(var(--seg-wm) + var(--underlap));
  `)}
`,bC=f(cm)`
  &[data-final="true"] { clip-path: none; }
  clip-path: polygon(0 0, calc(100% - var(--point-depth)) 0, 100% 50%,
    calc(100% - var(--point-depth)) 100%, 0 100%);
`,wC=f(mC)`
  position: absolute;
  top: 50%;
  right: 4px;
  width: 10px;
  height: auto;
  transform: translateY(-50%);
  color: ${_e.onPrimary};

  ${rr(B`
    right: 3px;
    width: 6px;
  `)}
`,kC=f.li`
  position: static;
  height: 0;
  margin: 0;
`,SC={done:B`
    background: ${_e.blue};
    color: ${_e.onPrimary};
  `,"current-blue":B`
    background: ${_e.blue};
    color: ${_e.onPrimary};
  `,"current-amber":B`
    background: ${_e.amber};
    color: ${_e.onPrimary};
  `,future:B`
    background: var(--trk-marker-future);
    color: var(--trk-icon-future);
  `},jC=f.span`
  position: absolute;
  top: 38px;
  left: var(--x);
  width: ${({$current:t})=>t?46:42}px;
  height: ${({$current:t})=>t?46:42}px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 0 ${({$current:t})=>t?5:4}px var(--trk-halo);
  display: flex;
  align-items: center;
  justify-content: center;
  ${({$variant:t})=>SC[t]}

  svg {
    width: 20px;
    height: 20px;
  }

  ${({$current:t})=>rr(B`
      top: 35px;
      left: var(--x-m);
      width: ${t?32:28}px;
      height: ${t?32:28}px;
      box-shadow: 0 0 0 3px var(--trk-halo);

      svg {
        width: 16px;
        height: 16px;
      }
    `)}
`,EC=f.span`
  position: absolute;
  top: 72px;
  left: var(--x);
  width: min(160px, calc(var(--col) - 8px));
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  text-align: center;

  .label {
    font-size: 13px;
    font-weight: 600;
    line-height: 1.25;
    color: var(--trk-label-ink);
  }

  .date {
    font-size: 12px;
    line-height: 1.25;
    color: var(--trk-muted);
  }

  ${({$state:t})=>rr(B`
      top: 62px;
      left: var(--x-m);
      /* +8px so "Order created" (65.8px at 10px) stays on one line down to
         360px; neighbouring labels are short enough to share the overlap */
      width: calc(var(--col-m) + 8px);
      gap: 3px;

      .label {
        font-size: 10px;
        font-weight: ${t==="current"?600:400};
        color: ${t==="future"?"var(--trk-muted)":"var(--trk-label-ink)"};
      }

      .date {
        font-size: 10px;
      }
    `)}
`,_C=f.span`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  border: 0;
`;function TC(t){return t.state==="done"?_e.blue:t.state==="current"?t.tone==="amber"?"var(--trk-rail-current-amber)":"var(--trk-rail-current-blue)":"var(--trk-rail-future)"}function IC(t){return t.state==="current"?t.tone==="amber"?"current-amber":"current-blue":t.state}const dm=({milestones:t,timezone:e,label:n})=>{const{t:r}=G(),i=t.length,a=Hs(i,Zi),o=Hs(i,Yi),l=t.findIndex(u=>u.state!=="done"),c=l===-1?i:l,d=(u,h=u)=>{const p=u===0?0:Ji(u-1,i,Zi),m=h===i-1?100:Ji(h,i,Zi),x=u===0?0:Ji(u-1,i,Yi),y=h===i-1?100:Ji(h,i,Yi);return{"--seg-l":un(p),"--seg-w":un(m-p),"--seg-lm":un(x),"--seg-wm":un(y-x)}};return s.jsx(gC,{"data-testid":"milestone-rail","data-count":i,children:s.jsxs(xC,{style:{"--col":un(a),"--col-m":un(o)},children:[s.jsxs(vC,{"aria-hidden":"true","data-testid":"milestone-rail-track",children:[t.slice(c).map((u,h)=>s.jsx(cm,{"data-testid":"milestone-rail-segment","data-state":u.state,$underPoint:c>0&&h===0,$fill:TC(u),style:d(c+h)},u.key)),c>0&&s.jsx(bC,{"data-testid":"milestone-rail-complete","data-final":c===i,$fill:_e.blue,style:d(0,c-1),children:c<i&&s.jsx(wC,{})})]}),s.jsx(yC,{"aria-label":n,children:t.map((u,h)=>{const p=u.state==="current";return s.jsxs(kC,{"data-testid":"milestone","data-key":u.key,"data-state":u.state,"data-tone":p?u.tone:void 0,"aria-current":p?"step":void 0,style:{"--x":un(Zu(h,i,Zi)),"--x-m":un(Zu(h,i,Yi))},children:[s.jsx(jC,{"aria-hidden":"true","data-testid":"milestone-marker",$variant:IC(u),$current:p,children:s.jsx(fC,{icon:u.icon})}),s.jsxs(EC,{$state:u.state,children:[s.jsx("span",{className:"label",children:r(u.labelKey)}),s.jsx("span",{className:"date",children:u.at?St(u.at,e):"—"}),s.jsx(_C,{children:r(`tracking:guest.milestoneState.${u.state}`)})]})]},u.key)})})]})})},RC=f(Lt)`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 24px 28px 22px;
  ${le(B`
    gap: 12px;
    padding: 16px 14px 14px;
  `)}
`,CC=f.div`
  display: grid;
  grid-template-columns: minmax(0, 480fr) minmax(0, 792fr);
  gap: 16px;
  /* content-driven heights (2026-10-20): each card is as tall as its own
     content, so a long history no longer stretches Details into empty space
     (213px at 1440 with seven events). Neither card has a fixed height. */
  align-items: start;
  @media (max-width: 1024px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 14px;
  }
`;f.p`
  align-self: flex-start;
  margin: 0;
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px dashed var(--trk-border);
  font-family: ${E};
  font-size: 12px;
  font-weight: 600;
  color: var(--trk-muted);
`;const Bl=()=>null,OC=({shipment:t,asOf:e})=>{const{t:n}=G(),r=Al(t,"public");return s.jsxs(RC,{"data-testid":"summary-card","aria-label":n("tracking:guest.summary.progress"),children:[s.jsx(Yf,{shipment:t,taxonomy:"public"}),r&&s.jsx(dm,{milestones:r,timezone:t.timezone,label:n("tracking:guest.summary.progress")}),s.jsx(tT,{shipment:t,now:e})]})},um=({result:t,onRetry:e,backTo:n})=>{const{t:r}=G(),i=t.kind;return s.jsx(wT,{testId:`lookup-${i}`,text:r(`tracking:guest.error.${i}`),onRetry:i==="unavailable"?e:void 0,children:n&&s.jsx(pa,{as:De,to:n,children:r("tracking:guest.result.back")})})},AC=({loading:t,result:e,onRetry:n,nextStopMapOn:r,asOf:i})=>s.jsx(Ll,{children:s.jsx(da,{children:s.jsxs(ua,{children:[s.jsx(Bl,{}),t&&s.jsx(rm,{}),!t&&(e==null?void 0:e.kind)==="ok"&&s.jsxs(s.Fragment,{children:[s.jsx(OC,{shipment:e.shipment,asOf:i}),s.jsx(em,{shipment:e.shipment}),s.jsx(Dl,{enabled:r,shipment:e.shipment,audience:"public",layout:"wide"}),s.jsxs(CC,{children:[s.jsx(iT,{shipment:e.shipment}),s.jsx(cT,{shipment:e.shipment})]})]}),!t&&e&&e.kind!=="ok"&&s.jsx(um,{result:e,onRetry:n,backTo:"/track"})]})})}),PC={baseURL:void 0},hm=ve.create(PC),NC=async t=>{const e=t.data;if(Number(e==null?void 0:e.code)>0)throw e;return e};hm.interceptors.response.use(NC,t=>Promise.reject(t));const LC="/api/v2/guest/shipment/track",Yu=["created","scheduled","ready_for_pickup","in_transit","delivered","completed","cancelled"],$C=["order_created","scheduled","picked_up","arrived","signed","completed","rescheduled","item_exception","cancelled"],DC=["rescheduled","items_missing","items_damaged","wrong_delivery","cancelled"],oo=k.object({suburb:k.string(),state:k.string(),postcode:k.string()}),pm=k.object({orderId:k.string(),carrierName:k.string().nullable(),stage:k.enum(Yu),badge:k.enum([...Yu,"exception"]),proofType:k.enum(["signature","contactless","qrcode"]).nullable(),estimatedDelivery:k.object({date:k.string(),timeWindow:k.enum(["AM","PM"]).nullable()}).nullable(),shipDate:k.string().nullable(),origin:oo.nullable(),destination:oo.nullable(),packages:k.object({current:k.number().int(),affected:k.number().int()}),timezone:k.string().nullable().transform(t=>t??""),exceptions:k.array(k.object({type:k.enum(DC),occurredAt:k.string().nullable(),count:k.number().int().optional()})),travelHistory:k.array(k.object({time:k.string(),activity:k.enum($C),location:oo.nullable()}))}),MC=/name|phone|mobile|email|street|address|driver|^lat|lat$|lng|latitude|longitude|coordinate|polyline|^path$|gps|position|route|^stops?$|^plan|vehicle|plate|signature|photo|image|price|pricing|^uid$|uid$/i,FC=new Set(["carrierName"]);function qo(t,e=""){return Array.isArray(t)?t.flatMap((n,r)=>qo(n,`${e}[${r}]`)):t&&typeof t=="object"?Object.entries(t).flatMap(([n,r])=>{const i=e?`${e}.${n}`:n;return[...!FC.has(n)&&MC.test(n)?[i]:[],...qo(r,i)]}):[]}function UC(t){const e=t.trim();return/^[A-Za-z0-9]{1,9}$/.test(e)?e.toUpperCase():null}function Ju(t){const e=Number(t==null?void 0:t.code);if(e===39)return{kind:"notFound"};if(e===7)return{kind:"format"};if(e!==0)return{kind:"unavailable"};if(qo(t==null?void 0:t.data).length>0)return{kind:"unavailable"};const n=pm.safeParse(t==null?void 0:t.data);return n.success?{kind:"ok",shipment:n.data}:{kind:"unavailable"}}async function BC(t){var e;try{const n=await hm.post(LC,{orderId:t});return Ju(n)}catch(n){return((e=n==null?void 0:n.response)==null?void 0:e.status)===429?{kind:"rateLimited"}:n&&typeof n=="object"&&"code"in n&&typeof n.code=="number"?Ju(n):{kind:"unavailable"}}}function zl(t){const[e,n]=S.useState(()=>t!=null&&t.shipment?{kind:"done",orderId:t.orderId,result:{kind:"ok",shipment:t.shipment}}:{kind:"idle"}),r=S.useRef(0),i=S.useRef(!0);S.useEffect(()=>(i.current=!0,()=>{i.current=!1}),[]);const a=S.useCallback(async l=>{const c=++r.current,d=UC(l);if(!d){const h={kind:"format"};return n({kind:"done",orderId:l.trim(),result:h}),h}n({kind:"loading",orderId:d});const u=await BC(d);return!i.current||c!==r.current?null:(n({kind:"done",orderId:d,result:u}),u)},[]),o=S.useRef(t&&!t.shipment?t.orderId:null);return S.useEffect(()=>{if(o.current){const l=o.current;o.current=null,a(l)}},[a]),{state:e,lookup:a}}const zC=()=>{const{t}=G(),e=Ir(),{state:n,lookup:r}=zl(),[i,a]=S.useState(""),o=async()=>{const c=await r(i);(c==null?void 0:c.kind)==="ok"&&(Wf("public",c.shipment.orderId),e("/track/result",{state:{orderId:c.shipment.orderId,shipment:c.shipment}}))},l=n.kind==="done"?n.result:null;return s.jsxs(Pl,{title:t("tracking:guest.pageTitle.entry"),audience:"public",children:[s.jsx(Nl,{eyebrow:t("tracking:guest.entry.eyebrow"),title:t("tracking:guest.entry.title"),subtitle:t("tracking:guest.entry.subtitle")}),s.jsx(Ll,{children:s.jsx(da,{children:s.jsxs(ua,{style:{paddingTop:24},children:[s.jsx(Bl,{}),s.jsx(nm,{value:i,onChange:a,onSubmit:o,busy:n.kind==="loading",message:tm(l,t)})]})})})]})},HC=f.div`
  display: grid;
  /* 567:463 / 567:507: the status column is 830px, flush with the search bar */
  grid-template-columns: minmax(0, 830px) minmax(0, 1fr);
  gap: 14px;
  align-items: start;
  @media (max-width: 1024px) {
    grid-template-columns: minmax(0, 1fr);
  }
`,VC=f.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,WC=f(Lt)`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 24px 26px;
  ${le(B`
    gap: 12px;
    padding: 16px 14px 14px;
  `)}
`,qC=f.p`
  margin: -6px 0 4px;
  font-family: ${E};
  font-size: 26px;
  font-weight: 700;
  line-height: 31px;
  color: var(--trk-ink);
  ${le(B`
    font-size: 20px;
    line-height: 24px;
  `)}
`,Xu=f.p`
  margin: -8px 0 0;
  font-family: ${E};
  font-size: ${({$strong:t})=>t?18:14}px;
  font-weight: ${({$strong:t})=>t?600:400};
  line-height: 1.3;
  color: ${({$strong:t})=>t?"var(--trk-ink)":"var(--trk-muted)"};
  ${({$strong:t})=>le(B`
      font-size: ${t?15:12}px;
    `)}
`,Qu=f(Lt)`
  padding: 22px;
  ${le(B`
    padding: 16px;
  `)}
`,eh=f($t).attrs({as:"h2"})`
  display: block;
  margin: 0;
`,KC=f.dl`
  margin: 10px 0 0;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    min-height: 38px;
  }

  dt {
    font-family: ${E};
    font-size: 12px;
    color: var(--trk-muted);
  }

  dd {
    margin: 0;
    font-family: ${E};
    font-size: 13px;
    text-align: right;
    color: var(--trk-ink);
  }
`,GC=f.p`
  margin: 12px 0 14px;
  font-family: ${E};
  font-size: 14px;
  line-height: 1.45;
  color: var(--trk-muted);
`,ZC=f(pa)`
  width: 100%;
`,YC=f.div`
  width: min(100%, 830px);
`,JC=f.details`
  summary {
    cursor: pointer;
    font-family: ${E};
    font-size: 14px;
    font-weight: 600;
    color: var(--trk-link);
    min-height: 44px;
    display: flex;
    align-items: center;
    border-radius: 6px;

    &:focus-visible {
      outline: 2px solid #007fff;
      outline-offset: 2px;
    }
  }

  ol {
    margin-top: 6px;
  }
`;function XC(t,e){const n=ha(t,e),r=Jf(t).filter(([a])=>a!=="shipDate"),i=r.findIndex(([a])=>a==="packages");return r.splice(i<0?r.length:i,0,["eta",n.label,n.value]),r}const QC=({shipment:t,nextStopMapOn:e,nextStopPanel:n,asOf:r})=>{const{t:i}=G(),a=ha(t,r),o=XC(t,r),l=Al(t,"consignee"),c=t.travelHistory[t.travelHistory.length-1]??null,d=t.timezone,u=t.travelHistory.length;return s.jsxs(HC,{children:[s.jsxs(ua,{children:[s.jsxs(WC,{"data-testid":"consignee-status-card",children:[s.jsx(Yf,{shipment:t,taxonomy:"consignee"}),s.jsx($t,{children:a.label}),s.jsx(qC,{"data-testid":"eta-value",children:a.value}),l&&s.jsx(dm,{milestones:l,timezone:d,label:i("tracking:guest.summary.progress")}),s.jsx($t,{children:i("tracking:guest.latest.label")}),s.jsx(Xu,{$strong:!0,"data-testid":"latest-value",children:i(c?`tracking:guest.activity.${c.activity}`:"tracking:guest.latest.none")}),c&&s.jsx(Xu,{children:[St(c.time,d,!0),$i(c.time,d),Di(c.location)].filter(Boolean).join(" · ")}),u>0&&s.jsxs(JC,{"data-testid":"consignee-history",children:[s.jsx("summary",{children:i("tracking:guest.consignee.historyToggle",{count:u})}),s.jsx(Xf,{shipment:t})]})]}),s.jsx(em,{shipment:t,showContact:!1}),n??s.jsx(Dl,{enabled:e,shipment:t,audience:"receiver",layout:"column"})]}),s.jsxs(VC,{children:[s.jsxs(Qu,{"data-testid":"consignee-details-card","aria-labelledby":"trk-c1-details",children:[s.jsx(eh,{id:"trk-c1-details",children:i("tracking:guest.details.title")}),s.jsx(KC,{children:o.map(([h,p,m])=>s.jsxs("div",{"data-row":h,children:[s.jsx("dt",{children:p}),s.jsx("dd",{children:m})]},h))})]}),s.jsxs(Qu,{"data-testid":"consignee-help-card","aria-labelledby":"trk-c1-help",children:[s.jsx(eh,{id:"trk-c1-help",children:i("tracking:guest.help.title")}),s.jsx(GC,{children:i("tracking:guest.help.body")}),s.jsx(ZC,{href:Qf(`Delivery question — ${t.orderId}`),children:i("tracking:guest.help.contact")})]})]})]})},eO=({shipment:t,loading:e})=>{const{t:n}=G();return s.jsx(ki,{role:"status","aria-live":"polite","data-testid":"consignee-announcer",children:e?n("tracking:guest.error.loading"):t?s.jsx(tO,{shipment:t}):""})},tO=({shipment:t})=>{const{t:e}=G(),n=ha(t),r=Kf(t,"consignee");return s.jsx(s.Fragment,{children:e("tracking:guest.consignee.resultStatus",{status:e(r.labelKey),label:n.label,value:n.value})})},nO=()=>{const{t}=G(),e=wr("nextStopMap"),[n]=S.useState(()=>qf("consignee")),{state:r,lookup:i}=zl(n?{orderId:n}:null),[a,o]=S.useState(n??""),l=async h=>{const p=await i(h);p&&(p.kind==="ok"?Wf("consignee",p.shipment.orderId):(p.kind==="notFound"||p.kind==="format")&&I2("consignee"))};S.useEffect(()=>{r.kind==="done"&&r.result.kind==="ok"&&o(r.result.shipment.orderId)},[r]);const c=r.kind==="done"?r.result:null,d=r.kind==="done"?r.orderId:a,u=(c==null?void 0:c.kind)==="format"?tm(c,t):null;return s.jsxs(Pl,{title:t("tracking:guest.pageTitle.consignee"),audience:"receiver",children:[s.jsx(Nl,{eyebrow:t("tracking:guest.consignee.eyebrow"),title:t("tracking:guest.consignee.title"),subtitle:t("tracking:guest.consignee.subtitle")}),s.jsx(Ll,{children:s.jsx(da,{children:s.jsxs(ua,{style:{paddingTop:18},children:[s.jsx(Bl,{}),s.jsx(YC,{children:s.jsx(nm,{value:a,onChange:o,onSubmit:()=>void l(a),busy:r.kind==="loading",message:u})}),s.jsx(eO,{loading:r.kind==="loading",shipment:(c==null?void 0:c.kind)==="ok"?c.shipment:null}),r.kind==="loading"&&s.jsx(rm,{}),(c==null?void 0:c.kind)==="ok"&&s.jsx(QC,{shipment:c.shipment,nextStopMapOn:e}),c&&c.kind!=="ok"&&c.kind!=="format"&&s.jsx(um,{result:c,onRetry:()=>void l(d)})]})})})]})},rO=()=>{const{t}=G(),e=Ze(),n=Ir(),r=Um(),i=wr("nextStopMap"),a=e.state??null,[o]=S.useState(()=>{const h=typeof(a==null?void 0:a.orderId)=="string"?a.orderId:null;if(h){const m=r==="PUSH"?pm.safeParse(a==null?void 0:a.shipment):null;return{orderId:h,shipment:m!=null&&m.success?m.data:null}}const p=qf("public");return p?{orderId:p,shipment:null}:null}),{state:l,lookup:c}=zl(o);if(S.useEffect(()=>{(a==null?void 0:a.shipment)!==void 0&&o&&n(e.pathname,{replace:!0,state:{orderId:o.orderId}})},[]),!o)return s.jsx(pt,{to:"/track",replace:!0});const d=l.kind!=="done",u=l.kind==="done"?l.result:null;return s.jsxs(Pl,{title:t("tracking:guest.pageTitle.result"),audience:"public",children:[s.jsx(Nl,{backTo:{to:"/track",label:t("tracking:guest.result.back")},title:t("tracking:guest.result.title"),subtitle:t("tracking:guest.result.subtitle"),focusTitle:!0}),s.jsx(AC,{loading:d,result:u,onRetry:()=>void c(o.orderId),nextStopMapOn:i})]})},iO=()=>{const{token:t=""}=Jo(),{search:e}=Ze(),n=wr("consigneeTrack");return t==="result"?s.jsx(rO,{}):t==="delivery"?n?s.jsx(nO,{}):s.jsx(pt,{to:{pathname:"/track",search:e},replace:!0}):s.jsx(pt,{to:{pathname:"/track",search:e},replace:!0})},sO=f.div`
  min-height: 100vh;
  background-color: ${t=>t.theme.background};
  color: ${t=>t.theme.text.primary};
  transition: background-color 0.3s ease, color 0.3s ease;
`,aO="https://www.senditgo.com",Dn={"/":{title:"SenditGo — Transportation Management System",description:"SenditGo — intelligent transport management, launching 2027. Our AI, SAM, weighs thousands of combinations and hands back a dispatch-ready plan in seconds. Get early access."},"/install":{title:"Get the SenditGo driver app",description:"Install the SenditGo driver app for iOS or Android — scan the QR code or tap your store to download and start running deliveries."},"/company":{title:"About SenditGo",description:"SenditGo is intelligent transport management for local and last-mile fleets, launching 2027."},"/about":{title:"About SenditGo",description:"Who SenditGo is, how we work, and where we are going — intelligent transport management for local and last-mile fleets."},"/about-v1":{title:"About SenditGo — story demo",description:"Local demo of the SenditGo story About page. Not a shipping surface."},"/contact":{title:"Contact SenditGo",description:"Book a product demo, ask about plans and pricing, integrations, or find the right solution for your fleet."},"/privacy":{title:"Privacy Policy — SenditGo",description:"How SenditGo collects, uses, and protects personal and operational data across its fleet platform and driver app."},"/account-deletion":{title:"Account & Data Deletion — SenditGo",description:"How to request deletion of your SenditGo account and the associated data, and what gets removed."},"/data-safety":{title:"Data Safety — SenditGo",description:"How SenditGo handles, secures, and shares operational and location data across the platform and driver app."},"/portal/login":{title:"Sign In — SenditGo",description:"Sign in to the SenditGo portal."},"/portal/orders":{title:"Orders — SenditGo",description:"Track and manage your SenditGo orders."},"/portal/orders/new":{title:"Create Order — SenditGo",description:"Prepare a shipment draft in the SenditGo portal."},"/portal/orders/import":{title:"Import Orders — SenditGo",description:"Validate a CSV order batch before import."},"/portal/orders/:salesOrderId":{title:"Order Detail — SenditGo",description:"Review SenditGo order tracking, handoff, and package detail."},"/portal/billing":{title:"Billing & Payments — SenditGo",description:"How your SenditGo account is billed and paid."},"/portal/admin/users":{title:"Users & Roles — SenditGo",description:"Manage portal users, roles, and permissions in SenditGo."},"/portal/admin/roles/new":{title:"Create Role — SenditGo",description:"Create a portal role and choose its permissions."},"/portal/admin/roles/:roleId":{title:"Edit Role — SenditGo",description:"Edit a portal role and its permissions."}};function oO(t){const e=t.toLowerCase();return e.startsWith("/track/")?Dn["/track"]??Dn["/"]:e.startsWith("/portal/orders/")&&e!=="/portal/orders/new"&&e!=="/portal/orders/import"?Dn["/portal/orders/:salesOrderId"]:e.startsWith("/portal/admin/roles/")?e==="/portal/admin/roles/new"?Dn["/portal/admin/roles/new"]:Dn["/portal/admin/roles/:roleId"]:Dn[e]??Dn["/"]}function lO(){const{pathname:t}=Ze(),e=t.replace(/\/+$/,"")||"/",n=oO(e),r=`${aO}${e}`,i=t.toLowerCase(),a=i.startsWith("/portal"),o=i.startsWith("/track/"),l=i==="/about-v1";return s.jsxs(hh,{children:[s.jsx("title",{children:n.title}),s.jsx("meta",{name:"description",content:n.description}),s.jsx("link",{rel:"canonical",href:r}),(a||o||l)&&s.jsx("meta",{name:"robots",content:"noindex"}),s.jsx("meta",{property:"og:title",content:n.title}),s.jsx("meta",{property:"og:description",content:n.description}),s.jsx("meta",{property:"og:url",content:r}),s.jsx("meta",{name:"twitter:title",content:n.title}),s.jsx("meta",{name:"twitter:description",content:n.description})]})}function cO(){const{search:t}=Ze();return S.useEffect(()=>{hx()},[t]),null}function dO(){const{search:t}=Ze();return In("aboutPage")?s.jsx(fj,{}):s.jsx(pt,{to:{pathname:"/company",search:t},replace:!0})}function uO(){const{search:t}=Ze();return In("aboutV1")?s.jsx(bj,{}):s.jsx(pt,{to:{pathname:"/",search:t},replace:!0})}function hO(){const{search:t}=Ze();return In("guestTrack")?s.jsx(zC,{}):s.jsx(pt,{to:{pathname:"/",search:t},replace:!0})}function pO(){const{search:t}=Ze();return In("guestTrack")?s.jsx(iO,{}):s.jsx(pt,{to:{pathname:"/",search:t},replace:!0})}function fO(){const{search:t}=Ze();return s.jsx(pt,{to:{pathname:"/",search:t},replace:!0})}function mO(){const{search:t}=Ze();return In("portalLogin")?s.jsx(bR,{}):s.jsx(pt,{to:{pathname:"/",search:t},replace:!0})}function gO(){var n;const t=ft(r=>r.permissionList),e=((n=jf.flatMap(r=>r.items).find(r=>r.permission===null||t.includes(r.permission)))==null?void 0:n.path)??"/portal/billing";return s.jsx(pt,{to:e,replace:!0})}function xO(){return s.jsxs(Bm,{children:[s.jsx(Fg,{}),s.jsx(sO,{children:s.jsxs(zm,{basename:"/tms-official-web-preview/",children:[s.jsx(cO,{}),s.jsx(lO,{}),s.jsxs(Hm,{children:[s.jsx(je,{path:"/",element:s.jsx(oE,{})}),s.jsx(je,{path:"/install",element:s.jsx(dj,{})}),s.jsx(je,{path:"/company",element:s.jsx(wj,{})}),s.jsx(je,{path:"/about",element:s.jsx(dO,{})}),s.jsx(je,{path:"/about-v1",element:s.jsx(uO,{})}),s.jsx(je,{path:"/contact",element:s.jsx(Ej,{})}),s.jsx(je,{path:"/privacy",element:s.jsx(Tj,{})}),s.jsx(je,{path:"/account-deletion",element:s.jsx(Ij,{})}),s.jsx(je,{path:"/data-safety",element:s.jsx(Cj,{})}),s.jsx(je,{path:"/portal/login",caseSensitive:!0,element:s.jsx(mO,{})}),s.jsx(je,{path:"/track",caseSensitive:!0,element:s.jsx(hO,{})}),s.jsx(je,{path:"/track/:token",caseSensitive:!0,element:s.jsx(pO,{})}),s.jsx(je,{caseSensitive:!0,path:"/portal/orders",element:s.jsx(zt,{children:s.jsx($n,{code:me.LIST,children:s.jsx(LR,{})})})}),s.jsx(je,{caseSensitive:!0,path:"/portal/orders/new",element:s.jsx(zt,{children:s.jsx($n,{code:me.ADD,children:s.jsx(TE,{})})})}),s.jsx(je,{caseSensitive:!0,path:"/portal/orders/import",element:s.jsx(zt,{children:s.jsx($n,{code:me.IMPORT,children:s.jsx(qE,{})})})}),s.jsx(je,{caseSensitive:!0,path:"/portal/orders/:salesOrderId",element:s.jsx(zt,{children:s.jsx($n,{code:me.LIST,children:s.jsx(GI,{})})})}),s.jsx(je,{caseSensitive:!0,path:"/portal/billing",element:s.jsx(zt,{children:s.jsx(aR,{})})}),s.jsx(je,{caseSensitive:!0,path:"/portal/admin/users",element:s.jsx(zt,{children:s.jsx($n,{code:re.USER_LIST,children:s.jsx(hC,{})})})}),s.jsx(je,{caseSensitive:!0,path:"/portal/admin/roles/new",element:s.jsx(zt,{children:s.jsx($n,{code:re.ROLE_ADD,children:s.jsx(Bu,{})})})}),s.jsx(je,{caseSensitive:!0,path:"/portal/admin/roles/:roleId",element:s.jsx(zt,{children:s.jsx($n,{code:re.ROLE_EDIT,children:s.jsx(Bu,{})})})}),s.jsx(je,{path:"/portal",caseSensitive:!0,element:s.jsx(zt,{children:s.jsx(gO,{})})}),s.jsx(je,{path:"*",element:s.jsx(fO,{})})]})]})})]})}async function yO(){}yO().then(()=>{km.createRoot(document.getElementById("root")).render(s.jsx(W.StrictMode,{children:s.jsx(uh,{children:s.jsx(xO,{})})}))});
