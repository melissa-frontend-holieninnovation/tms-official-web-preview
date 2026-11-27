const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/NextStopMapCanvas-BDiCcoZs.js","assets/client-BJSWU-2m.js","assets/FleetImpact-BVCdjzlA.js","assets/FleetImpact-Ba9A0HOr.css","assets/check-CUhVZmZQ.js"])))=>i.map(i=>d[i]);
var pm=Object.defineProperty;var fm=(t,e,n)=>e in t?pm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ft=(t,e,n)=>fm(t,typeof e!="symbol"?e+"":e,n);import{c as ot,r as S,g as zo,R as W,j as a,p as Wt,b as mm}from"./client-BJSWU-2m.js";import{p as Gu,q as gm,t as xm,w as ym,L as vm,x as bm,y as tt,z as B,A as f,U as _,E as Ho,G as _r,I as Bs,J as Fe,K as Vo,M as Ke,h as as,N as Xt,Q as Qt,u as zs,S as Hs,V as Wo,H as en,X as wm,Y as un,Z as Ki,_ as os,f as km,P as Sm,j as Em,k as _m,r as Fl,m as jm,n as Tm,C as Im,F as Rm,$ as Zu,a0 as Cm,R as Yu,a1 as qo,a2 as Am,a3 as ct,a4 as Om,a5 as Pm,T as Nm,B as Lm,a6 as $m,a7 as Ee}from"./FleetImpact-BVCdjzlA.js";import{A as Ko,C as Vs}from"./check-CUhVZmZQ.js";const Go=ot("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),Dm=ot("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),Mm=ot("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]),Fm=ot("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]),Um=ot("FilePlus",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"12",x2:"12",y1:"18",y2:"12",key:"1tsf04"}],["line",{x1:"9",x2:"15",y1:"15",y2:"15",key:"110plj"}]]),Bm=ot("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),zm=ot("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]),Hm=ot("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),Ul=ot("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]),Vm=ot("ShieldCheck",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]),Wm=ot("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]),qm=ot("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]),Km=ot("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);function Ju(){const t=S.useRef(!1);return Gu(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function Gm(){const t=Ju(),[e,n]=S.useState(0),r=S.useCallback(()=>{t.current&&n(e+1)},[e]);return[S.useCallback(()=>gm.postRender(r),[r]),e]}class Zm extends S.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Ym({children:t,isPresent:e}){const n=S.useId(),r=S.useRef(null),i=S.useRef({width:0,height:0,top:0,left:0});return S.useInsertionEffect(()=>{const{width:s,height:o,top:l,left:c}=i.current;if(e||!r.current||!s||!o)return;r.current.dataset.motionPopId=n;const d=document.createElement("style");return document.head.appendChild(d),d.sheet&&d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${o}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(d)}},[e]),S.createElement(Zm,{isPresent:e,childRef:r,sizeRef:i},S.cloneElement(t,{ref:r}))}const pa=({children:t,initial:e,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:s,mode:o})=>{const l=xm(Jm),c=S.useId(),d=S.useMemo(()=>({id:c,initial:e,isPresent:n,custom:i,onExitComplete:u=>{l.set(u,!0);for(const h of l.values())if(!h)return;r&&r()},register:u=>(l.set(u,!1),()=>l.delete(u))}),s?void 0:[n]);return S.useMemo(()=>{l.forEach((u,h)=>l.set(h,!1))},[n]),S.useEffect(()=>{!n&&!l.size&&r&&r()},[n]),o==="popLayout"&&(t=S.createElement(Ym,{isPresent:n},t)),S.createElement(ym.Provider,{value:d},t)};function Jm(){return new Map}function Xm(t){return S.useEffect(()=>()=>t(),[])}const $n=t=>t.key||"";function Qm(t,e){t.forEach(n=>{const r=$n(n);e.set(r,n)})}function eg(t){const e=[];return S.Children.forEach(t,n=>{S.isValidElement(n)&&e.push(n)}),e}const Zo=({children:t,custom:e,initial:n=!0,onExitComplete:r,exitBeforeEnter:i,presenceAffectsLayout:s=!0,mode:o="sync"})=>{const l=S.useContext(vm).forceRender||Gm()[0],c=Ju(),d=eg(t);let u=d;const h=S.useRef(new Map).current,p=S.useRef(u),m=S.useRef(new Map).current,x=S.useRef(!0);if(Gu(()=>{x.current=!1,Qm(d,m),p.current=u}),Xm(()=>{x.current=!0,m.clear(),h.clear()}),x.current)return S.createElement(S.Fragment,null,u.map(E=>S.createElement(pa,{key:$n(E),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:s,mode:o},E)));u=[...u];const y=p.current.map($n),v=d.map($n),j=y.length;for(let E=0;E<j;E++){const w=y[E];v.indexOf(w)===-1&&!h.has(w)&&h.set(w,void 0)}return o==="wait"&&h.size&&(u=[]),h.forEach((E,w)=>{if(v.indexOf(w)!==-1)return;const b=m.get(w);if(!b)return;const I=y.indexOf(w);let R=E;if(!R){const $=()=>{h.delete(w);const N=Array.from(m.keys()).filter(D=>!v.includes(D));if(N.forEach(D=>m.delete(D)),p.current=d.filter(D=>{const z=$n(D);return z===w||N.includes(z)}),!h.size){if(c.current===!1)return;l(),r&&r()}};R=S.createElement(pa,{key:$n(b),isPresent:!1,onExitComplete:$,custom:e,presenceAffectsLayout:s,mode:o},b),h.set(w,R)}u.splice(I,0,R)}),u=u.map(E=>{const w=E.key;return h.has(w)?E:S.createElement(pa,{key:$n(E),isPresent:!0,presenceAffectsLayout:s,mode:o},E)}),S.createElement(S.Fragment,null,h.size?u:u.map(E=>S.cloneElement(E)))},tg="modulepreload",ng=function(t){return"/tms-official-web-preview/"+t},Bl={},rg=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){let o=function(d){return Promise.all(d.map(u=>Promise.resolve(u).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));i=o(n.map(d=>{if(d=ng(d),d in Bl)return;Bl[d]=!0;const u=d.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${h}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":tg,u||(p.as="script"),p.crossOrigin="",p.href=d,c&&p.setAttribute("nonce",c),document.head.appendChild(p),u)return new Promise((m,x)=>{p.addEventListener("load",m),p.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${d}`)))})}))}function s(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})};var fa,zl;function ig(){if(zl)return fa;zl=1;var t=typeof Element<"u",e=typeof Map=="function",n=typeof Set=="function",r=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function i(s,o){if(s===o)return!0;if(s&&o&&typeof s=="object"&&typeof o=="object"){if(s.constructor!==o.constructor)return!1;var l,c,d;if(Array.isArray(s)){if(l=s.length,l!=o.length)return!1;for(c=l;c--!==0;)if(!i(s[c],o[c]))return!1;return!0}var u;if(e&&s instanceof Map&&o instanceof Map){if(s.size!==o.size)return!1;for(u=s.entries();!(c=u.next()).done;)if(!o.has(c.value[0]))return!1;for(u=s.entries();!(c=u.next()).done;)if(!i(c.value[1],o.get(c.value[0])))return!1;return!0}if(n&&s instanceof Set&&o instanceof Set){if(s.size!==o.size)return!1;for(u=s.entries();!(c=u.next()).done;)if(!o.has(c.value[0]))return!1;return!0}if(r&&ArrayBuffer.isView(s)&&ArrayBuffer.isView(o)){if(l=s.length,l!=o.length)return!1;for(c=l;c--!==0;)if(s[c]!==o[c])return!1;return!0}if(s.constructor===RegExp)return s.source===o.source&&s.flags===o.flags;if(s.valueOf!==Object.prototype.valueOf&&typeof s.valueOf=="function"&&typeof o.valueOf=="function")return s.valueOf()===o.valueOf();if(s.toString!==Object.prototype.toString&&typeof s.toString=="function"&&typeof o.toString=="function")return s.toString()===o.toString();if(d=Object.keys(s),l=d.length,l!==Object.keys(o).length)return!1;for(c=l;c--!==0;)if(!Object.prototype.hasOwnProperty.call(o,d[c]))return!1;if(t&&s instanceof Element)return!1;for(c=l;c--!==0;)if(!((d[c]==="_owner"||d[c]==="__v"||d[c]==="__o")&&s.$$typeof)&&!i(s[d[c]],o[d[c]]))return!1;return!0}return s!==s&&o!==o}return fa=function(o,l){try{return i(o,l)}catch(c){if((c.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw c}},fa}var sg=ig();const ag=zo(sg);var ma,Hl;function og(){if(Hl)return ma;Hl=1;var t=function(e,n,r,i,s,o,l,c){if(!e){var d;if(n===void 0)d=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[r,i,s,o,l,c],h=0;d=new Error(n.replace(/%s/g,function(){return u[h++]})),d.name="Invariant Violation"}throw d.framesToPop=1,d}};return ma=t,ma}var lg=og();const Vl=zo(lg);var ga,Wl;function cg(){return Wl||(Wl=1,ga=function(e,n,r,i){var s=r?r.call(i,e,n):void 0;if(s!==void 0)return!!s;if(e===n)return!0;if(typeof e!="object"||!e||typeof n!="object"||!n)return!1;var o=Object.keys(e),l=Object.keys(n);if(o.length!==l.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(n),d=0;d<o.length;d++){var u=o[d];if(!c(u))return!1;var h=e[u],p=n[u];if(s=r?r.call(i,h,p,u):void 0,s===!1||s===void 0&&h!==p)return!1}return!0}),ga}var dg=cg();const ug=zo(dg);var Xu=(t=>(t.BASE="base",t.BODY="body",t.HEAD="head",t.HTML="html",t.LINK="link",t.META="meta",t.NOSCRIPT="noscript",t.SCRIPT="script",t.STYLE="style",t.TITLE="title",t.FRAGMENT="Symbol(react.fragment)",t))(Xu||{}),xa={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},ql=Object.values(Xu),Ws={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Qu=Object.entries(Ws).reduce((t,[e,n])=>(t[n]=e,t),{}),mt="data-rh",ur={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},hr=(t,e)=>{for(let n=t.length-1;n>=0;n-=1){const r=t[n];if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}return null},hg=t=>{let e=hr(t,"title");const n=hr(t,ur.TITLE_TEMPLATE);if(Array.isArray(e)&&(e=e.join("")),n&&e)return n.replace(/%s/g,()=>e);const r=hr(t,ur.DEFAULT_TITLE);return e||r||void 0},pg=t=>hr(t,ur.ON_CHANGE_CLIENT_STATE)||(()=>{}),ya=(t,e)=>e.filter(n=>typeof n[t]<"u").map(n=>n[t]).reduce((n,r)=>({...n,...r}),{}),fg=(t,e)=>e.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,r)=>{if(!n.length){const i=Object.keys(r);for(let s=0;s<i.length;s+=1){const l=i[s].toLowerCase();if(t.indexOf(l)!==-1&&r[l])return n.concat(r)}}return n},[]),mg=t=>console&&typeof console.warn=="function"&&console.warn(t),Dr=(t,e,n)=>{const r={};return n.filter(i=>Array.isArray(i[t])?!0:(typeof i[t]<"u"&&mg(`Helmet: ${t} should be of type "Array". Instead found type "${typeof i[t]}"`),!1)).map(i=>i[t]).reverse().reduce((i,s)=>{const o={};s.filter(c=>{let d;const u=Object.keys(c);for(let p=0;p<u.length;p+=1){const m=u[p],x=m.toLowerCase();e.indexOf(x)!==-1&&!(d==="rel"&&c[d].toLowerCase()==="canonical")&&!(x==="rel"&&c[x].toLowerCase()==="stylesheet")&&(d=x),e.indexOf(m)!==-1&&(m==="innerHTML"||m==="cssText"||m==="itemprop")&&(d=m)}if(!d||!c[d])return!1;const h=c[d].toLowerCase();return r[d]||(r[d]={}),o[d]||(o[d]={}),r[d][h]?!1:(o[d][h]=!0,!0)}).reverse().forEach(c=>i.push(c));const l=Object.keys(o);for(let c=0;c<l.length;c+=1){const d=l[c],u={...r[d],...o[d]};r[d]=u}return i},[]).reverse()},gg=(t,e)=>{if(Array.isArray(t)&&t.length){for(let n=0;n<t.length;n+=1)if(t[n][e])return!0}return!1},xg=t=>({baseTag:fg(["href"],t),bodyAttributes:ya("bodyAttributes",t),defer:hr(t,ur.DEFER),encode:hr(t,ur.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:ya("htmlAttributes",t),linkTags:Dr("link",["rel","href"],t),metaTags:Dr("meta",["name","charset","http-equiv","property","itemprop"],t),noscriptTags:Dr("noscript",["innerHTML"],t),onChangeClientState:pg(t),scriptTags:Dr("script",["src","innerHTML"],t),styleTags:Dr("style",["cssText"],t),title:hg(t),titleAttributes:ya("titleAttributes",t),prioritizeSeoTags:gg(t,ur.PRIORITIZE_SEO_TAGS)}),eh=t=>Array.isArray(t)?t.join(""):t,yg=(t,e)=>{const n=Object.keys(t);for(let r=0;r<n.length;r+=1)if(e[n[r]]&&e[n[r]].includes(t[n[r]]))return!0;return!1},va=(t,e)=>Array.isArray(t)?t.reduce((n,r)=>(yg(r,e)?n.priority.push(r):n.default.push(r),n),{priority:[],default:[]}):{default:t,priority:[]},Kl=(t,e)=>({...t,[e]:void 0}),vg=["noscript","script","style"],io=(t,e=!0)=>e===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),th=t=>Object.keys(t).reduce((e,n)=>{const r=typeof t[n]<"u"?`${n}="${t[n]}"`:`${n}`;return e?`${e} ${r}`:r},""),bg=(t,e,n,r)=>{const i=th(n),s=eh(e);return i?`<${t} ${mt}="true" ${i}>${io(s,r)}</${t}>`:`<${t} ${mt}="true">${io(s,r)}</${t}>`},wg=(t,e,n=!0)=>e.reduce((r,i)=>{const s=i,o=Object.keys(s).filter(d=>!(d==="innerHTML"||d==="cssText")).reduce((d,u)=>{const h=typeof s[u]>"u"?u:`${u}="${io(s[u],n)}"`;return d?`${d} ${h}`:h},""),l=s.innerHTML||s.cssText||"",c=vg.indexOf(t)===-1;return`${r}<${t} ${mt}="true" ${o}${c?"/>":`>${l}</${t}>`}`},""),nh=(t,e={})=>Object.keys(t).reduce((n,r)=>{const i=Ws[r];return n[i||r]=t[r],n},e),kg=(t,e,n)=>{const r={key:e,[mt]:!0},i=nh(n,r);return[W.createElement("title",i,e)]},Gi=(t,e)=>e.map((n,r)=>{const i={key:r,[mt]:!0};return Object.keys(n).forEach(s=>{const l=Ws[s]||s;if(l==="innerHTML"||l==="cssText"){const c=n.innerHTML||n.cssText;i.dangerouslySetInnerHTML={__html:c}}else i[l]=n[s]}),W.createElement(t,i)}),lt=(t,e,n=!0)=>{switch(t){case"title":return{toComponent:()=>kg(t,e.title,e.titleAttributes),toString:()=>bg(t,e.title,e.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>nh(e),toString:()=>th(e)};default:return{toComponent:()=>Gi(t,e),toString:()=>wg(t,e,n)}}},Sg=({metaTags:t,linkTags:e,scriptTags:n,encode:r})=>{const i=va(t,xa.meta),s=va(e,xa.link),o=va(n,xa.script);return{priorityMethods:{toComponent:()=>[...Gi("meta",i.priority),...Gi("link",s.priority),...Gi("script",o.priority)],toString:()=>`${lt("meta",i.priority,r)} ${lt("link",s.priority,r)} ${lt("script",o.priority,r)}`},metaTags:i.default,linkTags:s.default,scriptTags:o.default}},Eg=t=>{const{baseTag:e,bodyAttributes:n,encode:r=!0,htmlAttributes:i,noscriptTags:s,styleTags:o,title:l="",titleAttributes:c,prioritizeSeoTags:d}=t;let{linkTags:u,metaTags:h,scriptTags:p}=t,m={toComponent:()=>[],toString:()=>""};return d&&({priorityMethods:m,linkTags:u,metaTags:h,scriptTags:p}=Sg(t)),{priority:m,base:lt("base",e,r),bodyAttributes:lt("bodyAttributes",n,r),htmlAttributes:lt("htmlAttributes",i,r),link:lt("link",u,r),meta:lt("meta",h,r),noscript:lt("noscript",s,r),script:lt("script",p,r),style:lt("style",o,r),title:lt("title",{title:l,titleAttributes:c},r)}},so=Eg,Li=[],Yo=!!(typeof window<"u"&&window.document&&window.document.createElement),ao=class{constructor(t,e){ft(this,"instances",[]);ft(this,"canUseDOM",Yo);ft(this,"context");ft(this,"value",{setHelmet:t=>{this.context.helmet=t},helmetInstances:{get:()=>this.canUseDOM?Li:this.instances,add:t=>{(this.canUseDOM?Li:this.instances).push(t)},remove:t=>{const e=(this.canUseDOM?Li:this.instances).indexOf(t);(this.canUseDOM?Li:this.instances).splice(e,1)}}});this.context=t,this.canUseDOM=e||!1,e||(t.helmet=so({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},_g=parseInt(W.version.split(".")[0],10),oo=_g>=19,jg={},rh=W.createContext(jg),Bn,ih=(Bn=class extends S.Component{constructor(n){super(n);ft(this,"helmetData");oo?this.helmetData=null:this.helmetData=new ao(this.props.context||{},Bn.canUseDOM)}render(){return oo?W.createElement(W.Fragment,null,this.props.children):W.createElement(rh.Provider,{value:this.helmetData.value},this.props.children)}},ft(Bn,"canUseDOM",Yo),Bn),rr=(t,e)=>{const n=document.head||document.querySelector("head"),r=n.querySelectorAll(`${t}[${mt}]`),i=[].slice.call(r),s=[];let o;return e&&e.length&&e.forEach(l=>{const c=document.createElement(t);for(const d in l)if(Object.prototype.hasOwnProperty.call(l,d))if(d==="innerHTML")c.innerHTML=l.innerHTML;else if(d==="cssText"){const u=l.cssText;c.appendChild(document.createTextNode(u))}else{const u=d,h=typeof l[u]>"u"?"":l[u];c.setAttribute(d,h)}c.setAttribute(mt,"true"),i.some((d,u)=>(o=u,c.isEqualNode(d)))?i.splice(o,1):s.push(c)}),i.forEach(l=>{var c;return(c=l.parentNode)==null?void 0:c.removeChild(l)}),s.forEach(l=>n.appendChild(l)),{oldTags:i,newTags:s}},lo=(t,e)=>{const n=document.getElementsByTagName(t)[0];if(!n)return;const r=n.getAttribute(mt),i=r?r.split(","):[],s=[...i],o=Object.keys(e);for(const l of o){const c=e[l]||"";n.getAttribute(l)!==c&&n.setAttribute(l,c),i.indexOf(l)===-1&&i.push(l);const d=s.indexOf(l);d!==-1&&s.splice(d,1)}for(let l=s.length-1;l>=0;l-=1)n.removeAttribute(s[l]);i.length===s.length?n.removeAttribute(mt):n.getAttribute(mt)!==o.join(",")&&n.setAttribute(mt,o.join(","))},Tg=(t,e)=>{typeof t<"u"&&document.title!==t&&(document.title=eh(t)),lo("title",e)},Gl=(t,e)=>{const{baseTag:n,bodyAttributes:r,htmlAttributes:i,linkTags:s,metaTags:o,noscriptTags:l,onChangeClientState:c,scriptTags:d,styleTags:u,title:h,titleAttributes:p}=t;lo("body",r),lo("html",i),Tg(h,p);const m={baseTag:rr("base",n),linkTags:rr("link",s),metaTags:rr("meta",o),noscriptTags:rr("noscript",l),scriptTags:rr("script",d),styleTags:rr("style",u)},x={},y={};Object.keys(m).forEach(v=>{const{newTags:j,oldTags:E}=m[v];j.length&&(x[v]=j),E.length&&(y[v]=m[v].oldTags)}),e&&e(),c(t,x,y)},Mr=null,Ig=t=>{Mr&&cancelAnimationFrame(Mr),t.defer?Mr=requestAnimationFrame(()=>{Gl(t,()=>{Mr=null})}):(Gl(t),Mr=null)},Rg=Ig,Zl=class extends S.Component{constructor(){super(...arguments);ft(this,"rendered",!1)}shouldComponentUpdate(e){return!ug(e,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:e}=this.props.context;e.remove(this),this.emitChange()}emitChange(){const{helmetInstances:e,setHelmet:n}=this.props.context;let r=null;const i=xg(e.get().map(s=>{const{context:o,...l}=s.props;return l}));ih.canUseDOM?Rg(i):so&&(r=so(i)),n(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:e}=this.props.context;e.add(this),this.emitChange()}render(){return this.init(),null}},Zi=[],Yl=t=>{const e={};for(const n of Object.keys(t))e[Qu[n]||n]=t[n];return e},On=t=>{const e={};for(const n of Object.keys(t)){const r=Ws[n];e[r||n]=t[n]}return e},Jl=(t,e)=>{if(!Yo)return;const n=document.getElementsByTagName(t)[0];if(!n)return;const r="data-rh-managed",i=n.getAttribute(r),s=i?i.split(","):[],o=Object.keys(e);for(const l of s)o.includes(l)||n.removeAttribute(l);for(const l of o){const c=e[l];c==null||c===!1?n.removeAttribute(l):c===!0?n.setAttribute(l,""):n.setAttribute(l,String(c))}o.length>0?n.setAttribute(r,o.join(",")):n.removeAttribute(r)},ba=()=>{const t={},e={};for(const n of Zi){const{htmlAttributes:r,bodyAttributes:i}=n.props;r&&Object.assign(t,Yl(r)),i&&Object.assign(e,Yl(i))}Jl("html",t),Jl("body",e)},Cg=class extends S.Component{componentDidMount(){Zi.push(this),ba()}componentDidUpdate(){ba()}componentWillUnmount(){const t=Zi.indexOf(this);t!==-1&&Zi.splice(t,1),ba()}resolveTitle(){const{title:t,titleTemplate:e,defaultTitle:n}=this.props;return t&&e?e.replace(/%s/g,()=>Array.isArray(t)?t.join(""):t):t||n||void 0}renderTitle(){const t=this.resolveTitle();if(t===void 0)return null;const e=this.props.titleAttributes||{};return W.createElement("title",On(e),t)}renderBase(){const{base:t}=this.props;return t?W.createElement("base",On(t)):null}renderMeta(){const{meta:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>W.createElement("meta",{key:n,...On(e)}))}renderLink(){const{link:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>W.createElement("link",{key:n,...On(e)}))}renderScript(){const{script:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>{const{innerHTML:r,...i}=e,s=On(i);return r&&(s.dangerouslySetInnerHTML={__html:r}),W.createElement("script",{key:n,...s})})}renderStyle(){const{style:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>{const{cssText:r,...i}=e,s=On(i);return r&&(s.dangerouslySetInnerHTML={__html:r}),W.createElement("style",{key:n,...s})})}renderNoscript(){const{noscript:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>{const{innerHTML:r,...i}=e,s=On(i);return r&&(s.dangerouslySetInnerHTML={__html:r}),W.createElement("noscript",{key:n,...s})})}render(){return W.createElement(W.Fragment,null,this.renderTitle(),this.renderBase(),this.renderMeta(),this.renderLink(),this.renderScript(),this.renderStyle(),this.renderNoscript())}},ro,sh=(ro=class extends S.Component{shouldComponentUpdate(t){return!ag(Kl(this.props,"helmetData"),Kl(t,"helmetData"))}mapNestedChildrenToProps(t,e){if(!e)return null;switch(t.type){case"script":case"noscript":return{innerHTML:e};case"style":return{cssText:e};default:throw new Error(`<${t.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(t,e,n,r){return{...e,[t.type]:[...e[t.type]||[],{...n,...this.mapNestedChildrenToProps(t,r)}]}}mapObjectTypeChildren(t,e,n,r){switch(t.type){case"title":return{...e,[t.type]:r,titleAttributes:{...n}};case"body":return{...e,bodyAttributes:{...n}};case"html":return{...e,htmlAttributes:{...n}};default:return{...e,[t.type]:{...n}}}}mapArrayTypeChildrenToProps(t,e){let n={...e};return Object.keys(t).forEach(r=>{n={...n,[r]:t[r]}}),n}warnOnInvalidChildren(t,e){return Vl(ql.some(n=>t.type===n),typeof t.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${ql.join(", ")} are allowed. Helmet does not support rendering <${t.type}> elements. Refer to our API for more information.`),Vl(!e||typeof e=="string"||Array.isArray(e)&&!e.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${t.type}>. Did you forget to wrap your children in braces? ( <${t.type}>{\`\`}</${t.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(t,e){let n={};return W.Children.forEach(t,r=>{if(!r||!r.props)return;const{children:i,...s}=r.props,o=Object.keys(s).reduce((c,d)=>(c[Qu[d]||d]=s[d],c),{});let{type:l}=r;switch(typeof l=="symbol"?l=l.toString():this.warnOnInvalidChildren(r,i),l){case"Symbol(react.fragment)":e=this.mapChildrenToProps(i,e);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(r,n,o,i);break;default:e=this.mapObjectTypeChildren(r,e,o,i);break}}),this.mapArrayTypeChildrenToProps(n,e)}render(){const{children:t,...e}=this.props;let n={...e},{helmetData:r}=e;if(t&&(n=this.mapChildrenToProps(t,n)),r&&!(r instanceof ao)){const i=r;r=new ao(i.context,!0),delete n.helmetData}return oo?W.createElement(Cg,{...n}):r?W.createElement(Zl,{...n,context:r.value}):W.createElement(rh.Consumer,null,i=>W.createElement(Zl,{...n,context:i}))}},ft(ro,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),ro);const me={LIST:"ord_ls",ADD:"ord_add",IMPORT:"ord_imp",LIST_OWN:"ord_ls_own",LIST_SUB:"ord_ls_sub",LIST_ALL:"ord_ls_all"},re={ROLE_LIST:"perm_role_ls",ROLE_ADD:"perm_role_add",ROLE_EDIT:"perm_role_edt",ROLE_DELETE:"perm_role_del",USER_LIST:"perm_asst_ls",USER_ADD:"perm_asst_add",USER_EDIT:"perm_asst_edt",USER_SUSPEND:"perm_asst_blk"};function ah(){return[...Object.values(me),...Object.values(re)]}function Ag(){return ah()}const Og=bm`
  body {
    background-color: ${t=>t.theme.background};
    color: ${t=>t.theme.text.primary};
  }
`;var Pg=Object.defineProperty,ls=Object.getOwnPropertySymbols,oh=Object.prototype.hasOwnProperty,lh=Object.prototype.propertyIsEnumerable,Xl=(t,e,n)=>e in t?Pg(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,co=(t,e)=>{for(var n in e||(e={}))oh.call(e,n)&&Xl(t,n,e[n]);if(ls)for(var n of ls(e))lh.call(e,n)&&Xl(t,n,e[n]);return t},uo=(t,e)=>{var n={};for(var r in t)oh.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&ls)for(var r of ls(t))e.indexOf(r)<0&&lh.call(t,r)&&(n[r]=t[r]);return n};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var qn;(t=>{const e=class Q{constructor(c,d,u,h){if(this.version=c,this.errorCorrectionLevel=d,this.modules=[],this.isFunction=[],c<Q.MIN_VERSION||c>Q.MAX_VERSION)throw new RangeError("Version value out of range");if(h<-1||h>7)throw new RangeError("Mask value out of range");this.size=c*4+17;let p=[];for(let x=0;x<this.size;x++)p.push(!1);for(let x=0;x<this.size;x++)this.modules.push(p.slice()),this.isFunction.push(p.slice());this.drawFunctionPatterns();const m=this.addEccAndInterleave(u);if(this.drawCodewords(m),h==-1){let x=1e9;for(let y=0;y<8;y++){this.applyMask(y),this.drawFormatBits(y);const v=this.getPenaltyScore();v<x&&(h=y,x=v),this.applyMask(y)}}i(0<=h&&h<=7),this.mask=h,this.applyMask(h),this.drawFormatBits(h),this.isFunction=[]}static encodeText(c,d){const u=t.QrSegment.makeSegments(c);return Q.encodeSegments(u,d)}static encodeBinary(c,d){const u=t.QrSegment.makeBytes(c);return Q.encodeSegments([u],d)}static encodeSegments(c,d,u=1,h=40,p=-1,m=!0){if(!(Q.MIN_VERSION<=u&&u<=h&&h<=Q.MAX_VERSION)||p<-1||p>7)throw new RangeError("Invalid value");let x,y;for(x=u;;x++){const w=Q.getNumDataCodewords(x,d)*8,b=o.getTotalBits(c,x);if(b<=w){y=b;break}if(x>=h)throw new RangeError("Data too long")}for(const w of[Q.Ecc.MEDIUM,Q.Ecc.QUARTILE,Q.Ecc.HIGH])m&&y<=Q.getNumDataCodewords(x,w)*8&&(d=w);let v=[];for(const w of c){n(w.mode.modeBits,4,v),n(w.numChars,w.mode.numCharCountBits(x),v);for(const b of w.getData())v.push(b)}i(v.length==y);const j=Q.getNumDataCodewords(x,d)*8;i(v.length<=j),n(0,Math.min(4,j-v.length),v),n(0,(8-v.length%8)%8,v),i(v.length%8==0);for(let w=236;v.length<j;w^=253)n(w,8,v);let E=[];for(;E.length*8<v.length;)E.push(0);return v.forEach((w,b)=>E[b>>>3]|=w<<7-(b&7)),new Q(x,d,E,p)}getModule(c,d){return 0<=c&&c<this.size&&0<=d&&d<this.size&&this.modules[d][c]}getModules(){return this.modules}drawFunctionPatterns(){for(let u=0;u<this.size;u++)this.setFunctionModule(6,u,u%2==0),this.setFunctionModule(u,6,u%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const c=this.getAlignmentPatternPositions(),d=c.length;for(let u=0;u<d;u++)for(let h=0;h<d;h++)u==0&&h==0||u==0&&h==d-1||u==d-1&&h==0||this.drawAlignmentPattern(c[u],c[h]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(c){const d=this.errorCorrectionLevel.formatBits<<3|c;let u=d;for(let p=0;p<10;p++)u=u<<1^(u>>>9)*1335;const h=(d<<10|u)^21522;i(h>>>15==0);for(let p=0;p<=5;p++)this.setFunctionModule(8,p,r(h,p));this.setFunctionModule(8,7,r(h,6)),this.setFunctionModule(8,8,r(h,7)),this.setFunctionModule(7,8,r(h,8));for(let p=9;p<15;p++)this.setFunctionModule(14-p,8,r(h,p));for(let p=0;p<8;p++)this.setFunctionModule(this.size-1-p,8,r(h,p));for(let p=8;p<15;p++)this.setFunctionModule(8,this.size-15+p,r(h,p));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let c=this.version;for(let u=0;u<12;u++)c=c<<1^(c>>>11)*7973;const d=this.version<<12|c;i(d>>>18==0);for(let u=0;u<18;u++){const h=r(d,u),p=this.size-11+u%3,m=Math.floor(u/3);this.setFunctionModule(p,m,h),this.setFunctionModule(m,p,h)}}drawFinderPattern(c,d){for(let u=-4;u<=4;u++)for(let h=-4;h<=4;h++){const p=Math.max(Math.abs(h),Math.abs(u)),m=c+h,x=d+u;0<=m&&m<this.size&&0<=x&&x<this.size&&this.setFunctionModule(m,x,p!=2&&p!=4)}}drawAlignmentPattern(c,d){for(let u=-2;u<=2;u++)for(let h=-2;h<=2;h++)this.setFunctionModule(c+h,d+u,Math.max(Math.abs(h),Math.abs(u))!=1)}setFunctionModule(c,d,u){this.modules[d][c]=u,this.isFunction[d][c]=!0}addEccAndInterleave(c){const d=this.version,u=this.errorCorrectionLevel;if(c.length!=Q.getNumDataCodewords(d,u))throw new RangeError("Invalid argument");const h=Q.NUM_ERROR_CORRECTION_BLOCKS[u.ordinal][d],p=Q.ECC_CODEWORDS_PER_BLOCK[u.ordinal][d],m=Math.floor(Q.getNumRawDataModules(d)/8),x=h-m%h,y=Math.floor(m/h);let v=[];const j=Q.reedSolomonComputeDivisor(p);for(let w=0,b=0;w<h;w++){let I=c.slice(b,b+y-p+(w<x?0:1));b+=I.length;const R=Q.reedSolomonComputeRemainder(I,j);w<x&&I.push(0),v.push(I.concat(R))}let E=[];for(let w=0;w<v[0].length;w++)v.forEach((b,I)=>{(w!=y-p||I>=x)&&E.push(b[w])});return i(E.length==m),E}drawCodewords(c){if(c.length!=Math.floor(Q.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let d=0;for(let u=this.size-1;u>=1;u-=2){u==6&&(u=5);for(let h=0;h<this.size;h++)for(let p=0;p<2;p++){const m=u-p,y=(u+1&2)==0?this.size-1-h:h;!this.isFunction[y][m]&&d<c.length*8&&(this.modules[y][m]=r(c[d>>>3],7-(d&7)),d++)}}i(d==c.length*8)}applyMask(c){if(c<0||c>7)throw new RangeError("Mask value out of range");for(let d=0;d<this.size;d++)for(let u=0;u<this.size;u++){let h;switch(c){case 0:h=(u+d)%2==0;break;case 1:h=d%2==0;break;case 2:h=u%3==0;break;case 3:h=(u+d)%3==0;break;case 4:h=(Math.floor(u/3)+Math.floor(d/2))%2==0;break;case 5:h=u*d%2+u*d%3==0;break;case 6:h=(u*d%2+u*d%3)%2==0;break;case 7:h=((u+d)%2+u*d%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[d][u]&&h&&(this.modules[d][u]=!this.modules[d][u])}}getPenaltyScore(){let c=0;for(let p=0;p<this.size;p++){let m=!1,x=0,y=[0,0,0,0,0,0,0];for(let v=0;v<this.size;v++)this.modules[p][v]==m?(x++,x==5?c+=Q.PENALTY_N1:x>5&&c++):(this.finderPenaltyAddHistory(x,y),m||(c+=this.finderPenaltyCountPatterns(y)*Q.PENALTY_N3),m=this.modules[p][v],x=1);c+=this.finderPenaltyTerminateAndCount(m,x,y)*Q.PENALTY_N3}for(let p=0;p<this.size;p++){let m=!1,x=0,y=[0,0,0,0,0,0,0];for(let v=0;v<this.size;v++)this.modules[v][p]==m?(x++,x==5?c+=Q.PENALTY_N1:x>5&&c++):(this.finderPenaltyAddHistory(x,y),m||(c+=this.finderPenaltyCountPatterns(y)*Q.PENALTY_N3),m=this.modules[v][p],x=1);c+=this.finderPenaltyTerminateAndCount(m,x,y)*Q.PENALTY_N3}for(let p=0;p<this.size-1;p++)for(let m=0;m<this.size-1;m++){const x=this.modules[p][m];x==this.modules[p][m+1]&&x==this.modules[p+1][m]&&x==this.modules[p+1][m+1]&&(c+=Q.PENALTY_N2)}let d=0;for(const p of this.modules)d=p.reduce((m,x)=>m+(x?1:0),d);const u=this.size*this.size,h=Math.ceil(Math.abs(d*20-u*10)/u)-1;return i(0<=h&&h<=9),c+=h*Q.PENALTY_N4,i(0<=c&&c<=2568888),c}getAlignmentPatternPositions(){if(this.version==1)return[];{const c=Math.floor(this.version/7)+2,d=this.version==32?26:Math.ceil((this.version*4+4)/(c*2-2))*2;let u=[6];for(let h=this.size-7;u.length<c;h-=d)u.splice(1,0,h);return u}}static getNumRawDataModules(c){if(c<Q.MIN_VERSION||c>Q.MAX_VERSION)throw new RangeError("Version number out of range");let d=(16*c+128)*c+64;if(c>=2){const u=Math.floor(c/7)+2;d-=(25*u-10)*u-55,c>=7&&(d-=36)}return i(208<=d&&d<=29648),d}static getNumDataCodewords(c,d){return Math.floor(Q.getNumRawDataModules(c)/8)-Q.ECC_CODEWORDS_PER_BLOCK[d.ordinal][c]*Q.NUM_ERROR_CORRECTION_BLOCKS[d.ordinal][c]}static reedSolomonComputeDivisor(c){if(c<1||c>255)throw new RangeError("Degree out of range");let d=[];for(let h=0;h<c-1;h++)d.push(0);d.push(1);let u=1;for(let h=0;h<c;h++){for(let p=0;p<d.length;p++)d[p]=Q.reedSolomonMultiply(d[p],u),p+1<d.length&&(d[p]^=d[p+1]);u=Q.reedSolomonMultiply(u,2)}return d}static reedSolomonComputeRemainder(c,d){let u=d.map(h=>0);for(const h of c){const p=h^u.shift();u.push(0),d.forEach((m,x)=>u[x]^=Q.reedSolomonMultiply(m,p))}return u}static reedSolomonMultiply(c,d){if(c>>>8||d>>>8)throw new RangeError("Byte out of range");let u=0;for(let h=7;h>=0;h--)u=u<<1^(u>>>7)*285,u^=(d>>>h&1)*c;return i(u>>>8==0),u}finderPenaltyCountPatterns(c){const d=c[1];i(d<=this.size*3);const u=d>0&&c[2]==d&&c[3]==d*3&&c[4]==d&&c[5]==d;return(u&&c[0]>=d*4&&c[6]>=d?1:0)+(u&&c[6]>=d*4&&c[0]>=d?1:0)}finderPenaltyTerminateAndCount(c,d,u){return c&&(this.finderPenaltyAddHistory(d,u),d=0),d+=this.size,this.finderPenaltyAddHistory(d,u),this.finderPenaltyCountPatterns(u)}finderPenaltyAddHistory(c,d){d[0]==0&&(c+=this.size),d.pop(),d.unshift(c)}};e.MIN_VERSION=1,e.MAX_VERSION=40,e.PENALTY_N1=3,e.PENALTY_N2=3,e.PENALTY_N3=40,e.PENALTY_N4=10,e.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],e.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],t.QrCode=e;function n(l,c,d){if(c<0||c>31||l>>>c)throw new RangeError("Value out of range");for(let u=c-1;u>=0;u--)d.push(l>>>u&1)}function r(l,c){return(l>>>c&1)!=0}function i(l){if(!l)throw new Error("Assertion error")}const s=class _e{constructor(c,d,u){if(this.mode=c,this.numChars=d,this.bitData=u,d<0)throw new RangeError("Invalid argument");this.bitData=u.slice()}static makeBytes(c){let d=[];for(const u of c)n(u,8,d);return new _e(_e.Mode.BYTE,c.length,d)}static makeNumeric(c){if(!_e.isNumeric(c))throw new RangeError("String contains non-numeric characters");let d=[];for(let u=0;u<c.length;){const h=Math.min(c.length-u,3);n(parseInt(c.substring(u,u+h),10),h*3+1,d),u+=h}return new _e(_e.Mode.NUMERIC,c.length,d)}static makeAlphanumeric(c){if(!_e.isAlphanumeric(c))throw new RangeError("String contains unencodable characters in alphanumeric mode");let d=[],u;for(u=0;u+2<=c.length;u+=2){let h=_e.ALPHANUMERIC_CHARSET.indexOf(c.charAt(u))*45;h+=_e.ALPHANUMERIC_CHARSET.indexOf(c.charAt(u+1)),n(h,11,d)}return u<c.length&&n(_e.ALPHANUMERIC_CHARSET.indexOf(c.charAt(u)),6,d),new _e(_e.Mode.ALPHANUMERIC,c.length,d)}static makeSegments(c){return c==""?[]:_e.isNumeric(c)?[_e.makeNumeric(c)]:_e.isAlphanumeric(c)?[_e.makeAlphanumeric(c)]:[_e.makeBytes(_e.toUtf8ByteArray(c))]}static makeEci(c){let d=[];if(c<0)throw new RangeError("ECI assignment value out of range");if(c<128)n(c,8,d);else if(c<16384)n(2,2,d),n(c,14,d);else if(c<1e6)n(6,3,d),n(c,21,d);else throw new RangeError("ECI assignment value out of range");return new _e(_e.Mode.ECI,0,d)}static isNumeric(c){return _e.NUMERIC_REGEX.test(c)}static isAlphanumeric(c){return _e.ALPHANUMERIC_REGEX.test(c)}getData(){return this.bitData.slice()}static getTotalBits(c,d){let u=0;for(const h of c){const p=h.mode.numCharCountBits(d);if(h.numChars>=1<<p)return 1/0;u+=4+p+h.bitData.length}return u}static toUtf8ByteArray(c){c=encodeURI(c);let d=[];for(let u=0;u<c.length;u++)c.charAt(u)!="%"?d.push(c.charCodeAt(u)):(d.push(parseInt(c.substring(u+1,u+3),16)),u+=2);return d}};s.NUMERIC_REGEX=/^[0-9]*$/,s.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,s.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";let o=s;t.QrSegment=s})(qn||(qn={}));(t=>{(e=>{const n=class{constructor(i,s){this.ordinal=i,this.formatBits=s}};n.LOW=new n(0,1),n.MEDIUM=new n(1,0),n.QUARTILE=new n(2,3),n.HIGH=new n(3,2),e.Ecc=n})(t.QrCode||(t.QrCode={}))})(qn||(qn={}));(t=>{(e=>{const n=class{constructor(i,s){this.modeBits=i,this.numBitsCharCount=s}numCharCountBits(i){return this.numBitsCharCount[Math.floor((i+7)/17)]}};n.NUMERIC=new n(1,[10,12,14]),n.ALPHANUMERIC=new n(2,[9,11,13]),n.BYTE=new n(4,[8,16,16]),n.KANJI=new n(8,[8,10,12]),n.ECI=new n(7,[0,0,0]),e.Mode=n})(t.QrSegment||(t.QrSegment={}))})(qn||(qn={}));var lr=qn;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var Ng={L:lr.QrCode.Ecc.LOW,M:lr.QrCode.Ecc.MEDIUM,Q:lr.QrCode.Ecc.QUARTILE,H:lr.QrCode.Ecc.HIGH},ch=128,dh="L",uh="#FFFFFF",hh="#000000",ph=!1,fh=1,Lg=4,$g=0,Dg=.1;function mh(t,e=0){const n=[];return t.forEach(function(r,i){let s=null;r.forEach(function(o,l){if(!o&&s!==null){n.push(`M${s+e} ${i+e}h${l-s}v1H${s+e}z`),s=null;return}if(l===r.length-1){if(!o)return;s===null?n.push(`M${l+e},${i+e} h1v1H${l+e}z`):n.push(`M${s+e},${i+e} h${l+1-s}v1H${s+e}z`);return}o&&s===null&&(s=l)})}),n.join("")}function gh(t,e){return t.slice().map((n,r)=>r<e.y||r>=e.y+e.h?n:n.map((i,s)=>s<e.x||s>=e.x+e.w?i:!1))}function Mg(t,e,n,r){if(r==null)return null;const i=t.length+n*2,s=Math.floor(e*Dg),o=i/e,l=(r.width||s)*o,c=(r.height||s)*o,d=r.x==null?t.length/2-l/2:r.x*o,u=r.y==null?t.length/2-c/2:r.y*o,h=r.opacity==null?1:r.opacity;let p=null;if(r.excavate){let x=Math.floor(d),y=Math.floor(u),v=Math.ceil(l+d-x),j=Math.ceil(c+u-y);p={x,y,w:v,h:j}}const m=r.crossOrigin;return{x:d,y:u,h:c,w:l,excavation:p,opacity:h,crossOrigin:m}}function Fg(t,e){return e!=null?Math.max(Math.floor(e),0):t?Lg:$g}function xh({value:t,level:e,minVersion:n,includeMargin:r,marginSize:i,imageSettings:s,size:o,boostLevel:l}){let c=W.useMemo(()=>{const x=(Array.isArray(t)?t:[t]).reduce((y,v)=>(y.push(...lr.QrSegment.makeSegments(v)),y),[]);return lr.QrCode.encodeSegments(x,Ng[e],n,void 0,void 0,l)},[t,e,n,l]);const{cells:d,margin:u,numCells:h,calculatedImageSettings:p}=W.useMemo(()=>{let m=c.getModules();const x=Fg(r,i),y=m.length+x*2,v=Mg(m,o,x,s);return{cells:m,margin:x,numCells:y,calculatedImageSettings:v}},[c,o,s,r,i]);return{qrcode:c,margin:u,cells:d,numCells:h,calculatedImageSettings:p}}var Ug=(function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0})(),Bg=W.forwardRef(function(e,n){const r=e,{value:i,size:s=ch,level:o=dh,bgColor:l=uh,fgColor:c=hh,includeMargin:d=ph,minVersion:u=fh,boostLevel:h,marginSize:p,imageSettings:m}=r,y=uo(r,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","marginSize","imageSettings"]),{style:v}=y,j=uo(y,["style"]),E=m==null?void 0:m.src,w=W.useRef(null),b=W.useRef(null),I=W.useCallback(he=>{w.current=he,typeof n=="function"?n(he):n&&(n.current=he)},[n]),[R,$]=W.useState(!1),{margin:N,cells:D,numCells:z,calculatedImageSettings:F}=xh({value:i,level:o,minVersion:u,boostLevel:h,includeMargin:d,marginSize:p,imageSettings:m,size:s});W.useEffect(()=>{if(w.current!=null){const he=w.current,de=he.getContext("2d");if(!de)return;let ae=D;const Se=b.current,be=F!=null&&Se!==null&&Se.complete&&Se.naturalHeight!==0&&Se.naturalWidth!==0;be&&F.excavation!=null&&(ae=gh(D,F.excavation));const Te=window.devicePixelRatio||1;he.height=he.width=s*Te;const O=s/z*Te;de.scale(O,O),de.fillStyle=l,de.fillRect(0,0,z,z),de.fillStyle=c,Ug?de.fill(new Path2D(mh(ae,N))):D.forEach(function(pe,Ie){pe.forEach(function(Ue,fe){Ue&&de.fillRect(fe+N,Ie+N,1,1)})}),F&&(de.globalAlpha=F.opacity),be&&de.drawImage(Se,F.x+N,F.y+N,F.w,F.h)}}),W.useEffect(()=>{$(!1)},[E]);const Z=co({height:s,width:s},v);let ce=null;return E!=null&&(ce=W.createElement("img",{src:E,key:E,style:{display:"none"},onLoad:()=>{$(!0)},ref:b,crossOrigin:F==null?void 0:F.crossOrigin})),W.createElement(W.Fragment,null,W.createElement("canvas",co({style:Z,height:s,width:s,ref:I,role:"img"},j)),ce)});Bg.displayName="QRCodeCanvas";var yh=W.forwardRef(function(e,n){const r=e,{value:i,size:s=ch,level:o=dh,bgColor:l=uh,fgColor:c=hh,includeMargin:d=ph,minVersion:u=fh,boostLevel:h,title:p,marginSize:m,imageSettings:x}=r,y=uo(r,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","title","marginSize","imageSettings"]),{margin:v,cells:j,numCells:E,calculatedImageSettings:w}=xh({value:i,level:o,minVersion:u,boostLevel:h,includeMargin:d,marginSize:m,imageSettings:x,size:s});let b=j,I=null;x!=null&&w!=null&&(w.excavation!=null&&(b=gh(j,w.excavation)),I=W.createElement("image",{href:x.src,height:w.h,width:w.w,x:w.x+v,y:w.y+v,preserveAspectRatio:"none",opacity:w.opacity,crossOrigin:w.crossOrigin}));const R=mh(b,v);return W.createElement("svg",co({height:s,width:s,viewBox:`0 0 ${E} ${E}`,ref:n,role:"img"},y),!!p&&W.createElement("title",null,p),W.createElement("path",{fill:l,d:`M0,0 h${E}v${E}H0z`,shapeRendering:"crispEdges"}),W.createElement("path",{fill:c,d:R,shapeRendering:"crispEdges"}),I)});yh.displayName="QRCodeSVG";function zg(){if(console&&console.warn){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];zn(e[0])&&(e[0]=`react-i18next:: ${e[0]}`),console.warn(...e)}}const Ql={};function ho(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];zn(e[0])&&Ql[e[0]]||(zn(e[0])&&(Ql[e[0]]=new Date),zg(...e))}const vh=(t,e)=>()=>{if(t.isInitialized)e();else{const n=()=>{setTimeout(()=>{t.off("initialized",n)},0),e()};t.on("initialized",n)}},ec=(t,e,n)=>{t.loadNamespaces(e,vh(t,n))},tc=(t,e,n,r)=>{zn(n)&&(n=[n]),n.forEach(i=>{t.options.ns.indexOf(i)<0&&t.options.ns.push(i)}),t.loadLanguages(e,vh(t,r))},Hg=function(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const r=e.languages[0],i=e.options?e.options.fallbackLng:!1,s=e.languages[e.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const o=(l,c)=>{const d=e.services.backendConnector.state[`${l}|${c}`];return d===-1||d===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!o(e.isLanguageChangingTo,t)?!1:!!(e.hasResourceBundle(r,t)||!e.services.backendConnector.backend||e.options.resources&&!e.options.partialBundledLanguages||o(r,t)&&(!i||o(s,t)))},Vg=function(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!e.languages||!e.languages.length?(ho("i18n.languages were undefined or empty",e.languages),!0):e.options.ignoreJSONStructure!==void 0?e.hasLoadedNamespace(t,{lng:n.lng,precheck:(i,s)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&i.services.backendConnector.backend&&i.isLanguageChangingTo&&!s(i.isLanguageChangingTo,t))return!1}}):Hg(t,e,n)},zn=t=>typeof t=="string",Wg=t=>typeof t=="object"&&t!==null,qg=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,Kg={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},Gg=t=>Kg[t],Zg=t=>t.replace(qg,Gg);let po={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:Zg};const Yg=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};po={...po,...t}},Jg=()=>po;let bh;const Xg=t=>{bh=t},Qg=()=>bh,ex={type:"3rdParty",init(t){Yg(t.options.react),Xg(t)}},tx=S.createContext();class nx{constructor(){ft(this,"getUsedNamespaces",()=>Object.keys(this.usedNamespaces));this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}}const rx=(t,e)=>{const n=S.useRef();return S.useEffect(()=>{n.current=t},[t,e]),n.current},wh=(t,e,n,r)=>t.getFixedT(e,n,r),ix=(t,e,n,r)=>S.useCallback(wh(t,e,n,r),[t,e,n,r]),G=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{i18n:n}=e,{i18n:r,defaultNS:i}=S.useContext(tx)||{},s=n||r||Qg();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new nx),!s){ho("You will need to pass in an i18next instance by using initReactI18next");const b=(R,$)=>zn($)?$:Wg($)&&zn($.defaultValue)?$.defaultValue:Array.isArray(R)?R[R.length-1]:R,I=[b,{},!1];return I.t=b,I.i18n={},I.ready=!1,I}s.options.react&&s.options.react.wait!==void 0&&ho("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const o={...Jg(),...s.options.react,...e},{useSuspense:l,keyPrefix:c}=o;let d=t||i||s.options&&s.options.defaultNS;d=zn(d)?[d]:d||["translation"],s.reportNamespaces.addUsedNamespaces&&s.reportNamespaces.addUsedNamespaces(d);const u=(s.isInitialized||s.initializedStoreOnce)&&d.every(b=>Vg(b,s,o)),h=ix(s,e.lng||null,o.nsMode==="fallback"?d:d[0],c),p=()=>h,m=()=>wh(s,e.lng||null,o.nsMode==="fallback"?d:d[0],c),[x,y]=S.useState(p);let v=d.join();e.lng&&(v=`${e.lng}${v}`);const j=rx(v),E=S.useRef(!0);S.useEffect(()=>{const{bindI18n:b,bindI18nStore:I}=o;E.current=!0,!u&&!l&&(e.lng?tc(s,e.lng,d,()=>{E.current&&y(m)}):ec(s,d,()=>{E.current&&y(m)})),u&&j&&j!==v&&E.current&&y(m);const R=()=>{E.current&&y(m)};return b&&s&&s.on(b,R),I&&s&&s.store.on(I,R),()=>{E.current=!1,b&&s&&b.split(" ").forEach($=>s.off($,R)),I&&s&&I.split(" ").forEach($=>s.store.off($,R))}},[s,v]),S.useEffect(()=>{E.current&&u&&y(p)},[s,c,u]);const w=[x,s,u];if(w.t=x,w.i18n=s,w.ready=u,u||!u&&!l)return w;throw new Promise(b=>{e.lng?tc(s,e.lng,d,()=>b()):ec(s,d,()=>b())})},kh={portalLogin:"FF_PORTAL_LOGIN",guestTrack:"FF_GUEST_TRACK",aboutPage:"FF_ABOUT_PAGE",aboutV1:"FF_ABOUT_V1",homeAudienceSwitch:"FF_HOME_AUDIENCE_SWITCH",consigneeTrack:"FF_CONSIGNEE_TRACK",loginDestinations:"FF_LOGIN_DESTINATIONS",nextStopMap:"FF_NEXT_STOP_MAP"},Sh="/portal/login";function jn(t){if(typeof window>"u")return!1;const e=kh[t],n=new URLSearchParams(window.location.search);if(n.has(e))return n.get(e)==="true";try{return localStorage.getItem(e)==="true"}catch{return!1}}function sx(){if(typeof window>"u")return;const t=new URLSearchParams(window.location.search);for(const e of Object.values(kh))if(t.has(e))try{localStorage.setItem(e,t.get(e)==="true"?"true":"false")}catch{}}function yr(t){return jn(t)}function Jo(){return jn("portalLogin")?Sh:"/"}const nc=Object.freeze({production:"https://app.senditgo.com",uat:"https://tms-uat.senditgo.com",development:"https://tms-dev.holieninnovation.com.tw"}),ax="/fleet/login",ox="/company/login",lx=Object.freeze({development:"https://tms-dev.holieninnovation.com.tw/company/login"});function Eh(t,e,n){const r=Object.prototype.hasOwnProperty.call(nc,e)?nc[e]:null;if(!r||typeof t!="string"||t.trim()==="")return null;let i;try{i=new URL(t.trim())}catch{return null}return i.protocol!=="https:"||i.username||i.password||i.origin!==r||i.pathname!==n||i.search!==""||i.hash!==""?null:`${i.origin}${i.pathname}`}function cx(t,e){return Eh(t,e,ax)}function dx(t,e){return Eh(t,e,ox)}function ux(t){const e=[];if(t.portalLoginOn&&e.push({role:"shipper",href:Sh,external:!1}),t.loginDestinationsOn){const n=cx(t.carrierLoginUrl,t.mode);n&&e.push({role:"carrier",href:n,external:!0});const r=dx(t.consigneeLoginUrl,t.mode);r&&e.push({role:"consignee",href:r,external:!0})}return e}function hx(t,e){return typeof t!="string"||!t.startsWith("/")||t.startsWith("//")||t.startsWith("/\\")||[...t].some(n=>n.charCodeAt(0)<32)?e:t}function Xo(){const t=yr("portalLogin"),e=yr("loginDestinations");return ux({portalLoginOn:t,loginDestinationsOn:e,carrierLoginUrl:"https://app.senditgo.com/fleet/login",consigneeLoginUrl:lx.production,mode:"production"})}const q=t=>typeof t=="string",Fr=()=>{let t,e;const n=new Promise((r,i)=>{t=r,e=i});return n.resolve=t,n.reject=e,n},rc=t=>t==null?"":""+t,px=(t,e,n)=>{t.forEach(r=>{e[r]&&(n[r]=e[r])})},fx=/###/g,ic=t=>t&&t.indexOf("###")>-1?t.replace(fx,"."):t,sc=t=>!t||q(t),Zr=(t,e,n)=>{const r=q(e)?e.split("."):e;let i=0;for(;i<r.length-1;){if(sc(t))return{};const s=ic(r[i]);!t[s]&&n&&(t[s]=new n),Object.prototype.hasOwnProperty.call(t,s)?t=t[s]:t={},++i}return sc(t)?{}:{obj:t,k:ic(r[i])}},ac=(t,e,n)=>{const{obj:r,k:i}=Zr(t,e,Object);if(r!==void 0||e.length===1){r[i]=n;return}let s=e[e.length-1],o=e.slice(0,e.length-1),l=Zr(t,o,Object);for(;l.obj===void 0&&o.length;)s=`${o[o.length-1]}.${s}`,o=o.slice(0,o.length-1),l=Zr(t,o,Object),l&&l.obj&&typeof l.obj[`${l.k}.${s}`]<"u"&&(l.obj=void 0);l.obj[`${l.k}.${s}`]=n},mx=(t,e,n,r)=>{const{obj:i,k:s}=Zr(t,e,Object);i[s]=i[s]||[],i[s].push(n)},cs=(t,e)=>{const{obj:n,k:r}=Zr(t,e);if(n)return n[r]},gx=(t,e,n)=>{const r=cs(t,n);return r!==void 0?r:cs(e,n)},_h=(t,e,n)=>{for(const r in e)r!=="__proto__"&&r!=="constructor"&&(r in t?q(t[r])||t[r]instanceof String||q(e[r])||e[r]instanceof String?n&&(t[r]=e[r]):_h(t[r],e[r],n):t[r]=e[r]);return t},ir=t=>t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var xx={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const yx=t=>q(t)?t.replace(/[&<>"'\/]/g,e=>xx[e]):t;class vx{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const n=this.regExpMap.get(e);if(n!==void 0)return n;const r=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,r),this.regExpQueue.push(e),r}}const bx=[" ",",","?","!",";"],wx=new vx(20),kx=(t,e,n)=>{e=e||"",n=n||"";const r=bx.filter(o=>e.indexOf(o)<0&&n.indexOf(o)<0);if(r.length===0)return!0;const i=wx.getRegExp(`(${r.map(o=>o==="?"?"\\?":o).join("|")})`);let s=!i.test(t);if(!s){const o=t.indexOf(n);o>0&&!i.test(t.substring(0,o))&&(s=!0)}return s},fo=function(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!t)return;if(t[e])return t[e];const r=e.split(n);let i=t;for(let s=0;s<r.length;){if(!i||typeof i!="object")return;let o,l="";for(let c=s;c<r.length;++c)if(c!==s&&(l+=n),l+=r[c],o=i[l],o!==void 0){if(["string","number","boolean"].indexOf(typeof o)>-1&&c<r.length-1)continue;s+=c-s+1;break}i=o}return i},ds=t=>t&&t.replace("_","-"),Sx={type:"logger",log(t){this.output("log",t)},warn(t){this.output("warn",t)},error(t){this.output("error",t)},output(t,e){console&&console[t]&&console[t].apply(console,e)}};let Ex=class mo{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,n)}init(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=n.prefix||"i18next:",this.logger=e||Sx,this.options=n,this.debug=n.debug}log(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return this.forward(n,"log","",!0)}warn(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return this.forward(n,"warn","",!0)}error(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return this.forward(n,"error","")}deprecate(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return this.forward(n,"warn","WARNING DEPRECATED: ",!0)}forward(e,n,r,i){return i&&!this.debug?null:(q(e[0])&&(e[0]=`${r}${this.prefix} ${e[0]}`),this.logger[n](e))}create(e){return new mo(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new mo(this.logger,e)}};var Tt=new Ex;class qs{constructor(){this.observers={}}on(e,n){return e.split(" ").forEach(r=>{this.observers[r]||(this.observers[r]=new Map);const i=this.observers[r].get(n)||0;this.observers[r].set(n,i+1)}),this}off(e,n){if(this.observers[e]){if(!n){delete this.observers[e];return}this.observers[e].delete(n)}}emit(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(o=>{let[l,c]=o;for(let d=0;d<c;d++)l(...r)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(o=>{let[l,c]=o;for(let d=0;d<c;d++)l.apply(l,[e,...r])})}}class oc extends qs{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const n=this.options.ns.indexOf(e);n>-1&&this.options.ns.splice(n,1)}getResource(e,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const s=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,o=i.ignoreJSONStructure!==void 0?i.ignoreJSONStructure:this.options.ignoreJSONStructure;let l;e.indexOf(".")>-1?l=e.split("."):(l=[e,n],r&&(Array.isArray(r)?l.push(...r):q(r)&&s?l.push(...r.split(s)):l.push(r)));const c=cs(this.data,l);return!c&&!n&&!r&&e.indexOf(".")>-1&&(e=l[0],n=l[1],r=l.slice(2).join(".")),c||!o||!q(r)?c:fo(this.data&&this.data[e]&&this.data[e][n],r,s)}addResource(e,n,r,i){let s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const o=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator;let l=[e,n];r&&(l=l.concat(o?r.split(o):r)),e.indexOf(".")>-1&&(l=e.split("."),i=n,n=l[1]),this.addNamespaces(n),ac(this.data,l,i),s.silent||this.emit("added",e,n,r,i)}addResources(e,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const s in r)(q(r[s])||Array.isArray(r[s]))&&this.addResource(e,n,s,r[s],{silent:!0});i.silent||this.emit("added",e,n,r)}addResourceBundle(e,n,r,i,s){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},l=[e,n];e.indexOf(".")>-1&&(l=e.split("."),i=r,r=n,n=l[1]),this.addNamespaces(n);let c=cs(this.data,l)||{};o.skipCopy||(r=JSON.parse(JSON.stringify(r))),i?_h(c,r,s):c={...c,...r},ac(this.data,l,c),o.silent||this.emit("added",e,n,r)}removeResourceBundle(e,n){this.hasResourceBundle(e,n)&&delete this.data[e][n],this.removeNamespaces(n),this.emit("removed",e,n)}hasResourceBundle(e,n){return this.getResource(e,n)!==void 0}getResourceBundle(e,n){return n||(n=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(e,n)}:this.getResource(e,n)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const n=this.getDataByLanguage(e);return!!(n&&Object.keys(n)||[]).find(i=>n[i]&&Object.keys(n[i]).length>0)}toJSON(){return this.data}}var jh={processors:{},addPostProcessor(t){this.processors[t.name]=t},handle(t,e,n,r,i){return t.forEach(s=>{this.processors[s]&&(e=this.processors[s].process(e,n,r,i))}),e}};const lc={};class us extends qs{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),px(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Tt.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const r=this.resolve(e,n);return r&&r.res!==void 0}extractFromKey(e,n){let r=n.nsSeparator!==void 0?n.nsSeparator:this.options.nsSeparator;r===void 0&&(r=":");const i=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let s=n.ns||this.options.defaultNS||[];const o=r&&e.indexOf(r)>-1,l=!this.options.userDefinedKeySeparator&&!n.keySeparator&&!this.options.userDefinedNsSeparator&&!n.nsSeparator&&!kx(e,r,i);if(o&&!l){const c=e.match(this.interpolator.nestingRegexp);if(c&&c.length>0)return{key:e,namespaces:q(s)?[s]:s};const d=e.split(r);(r!==i||r===i&&this.options.ns.indexOf(d[0])>-1)&&(s=d.shift()),e=d.join(i)}return{key:e,namespaces:q(s)?[s]:s}}translate(e,n,r){if(typeof n!="object"&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),typeof n=="object"&&(n={...n}),n||(n={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const i=n.returnDetails!==void 0?n.returnDetails:this.options.returnDetails,s=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,{key:o,namespaces:l}=this.extractFromKey(e[e.length-1],n),c=l[l.length-1],d=n.lng||this.language,u=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(d&&d.toLowerCase()==="cimode"){if(u){const b=n.nsSeparator||this.options.nsSeparator;return i?{res:`${c}${b}${o}`,usedKey:o,exactUsedKey:o,usedLng:d,usedNS:c,usedParams:this.getUsedParamsDetails(n)}:`${c}${b}${o}`}return i?{res:o,usedKey:o,exactUsedKey:o,usedLng:d,usedNS:c,usedParams:this.getUsedParamsDetails(n)}:o}const h=this.resolve(e,n);let p=h&&h.res;const m=h&&h.usedKey||o,x=h&&h.exactUsedKey||o,y=Object.prototype.toString.apply(p),v=["[object Number]","[object Function]","[object RegExp]"],j=n.joinArrays!==void 0?n.joinArrays:this.options.joinArrays,E=!this.i18nFormat||this.i18nFormat.handleAsObject,w=!q(p)&&typeof p!="boolean"&&typeof p!="number";if(E&&p&&w&&v.indexOf(y)<0&&!(q(j)&&Array.isArray(p))){if(!n.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const b=this.options.returnedObjectHandler?this.options.returnedObjectHandler(m,p,{...n,ns:l}):`key '${o} (${this.language})' returned an object instead of string.`;return i?(h.res=b,h.usedParams=this.getUsedParamsDetails(n),h):b}if(s){const b=Array.isArray(p),I=b?[]:{},R=b?x:m;for(const $ in p)if(Object.prototype.hasOwnProperty.call(p,$)){const N=`${R}${s}${$}`;I[$]=this.translate(N,{...n,joinArrays:!1,ns:l}),I[$]===N&&(I[$]=p[$])}p=I}}else if(E&&q(j)&&Array.isArray(p))p=p.join(j),p&&(p=this.extendTranslation(p,e,n,r));else{let b=!1,I=!1;const R=n.count!==void 0&&!q(n.count),$=us.hasDefaultValue(n),N=R?this.pluralResolver.getSuffix(d,n.count,n):"",D=n.ordinal&&R?this.pluralResolver.getSuffix(d,n.count,{ordinal:!1}):"",z=R&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),F=z&&n[`defaultValue${this.options.pluralSeparator}zero`]||n[`defaultValue${N}`]||n[`defaultValue${D}`]||n.defaultValue;!this.isValidLookup(p)&&$&&(b=!0,p=F),this.isValidLookup(p)||(I=!0,p=o);const ce=(n.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&I?void 0:p,he=$&&F!==p&&this.options.updateMissing;if(I||b||he){if(this.logger.log(he?"updateKey":"missingKey",d,c,o,he?F:p),s){const be=this.resolve(o,{...n,keySeparator:!1});be&&be.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let de=[];const ae=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if(this.options.saveMissingTo==="fallback"&&ae&&ae[0])for(let be=0;be<ae.length;be++)de.push(ae[be]);else this.options.saveMissingTo==="all"?de=this.languageUtils.toResolveHierarchy(n.lng||this.language):de.push(n.lng||this.language);const Se=(be,Te,O)=>{const pe=$&&O!==p?O:ce;this.options.missingKeyHandler?this.options.missingKeyHandler(be,c,Te,pe,he,n):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(be,c,Te,pe,he,n),this.emit("missingKey",be,c,Te,p)};this.options.saveMissing&&(this.options.saveMissingPlurals&&R?de.forEach(be=>{const Te=this.pluralResolver.getSuffixes(be,n);z&&n[`defaultValue${this.options.pluralSeparator}zero`]&&Te.indexOf(`${this.options.pluralSeparator}zero`)<0&&Te.push(`${this.options.pluralSeparator}zero`),Te.forEach(O=>{Se([be],o+O,n[`defaultValue${O}`]||F)})}):Se(de,o,F))}p=this.extendTranslation(p,e,n,h,r),I&&p===o&&this.options.appendNamespaceToMissingKey&&(p=`${c}:${o}`),(I||b)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?p=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${c}:${o}`:o,b?p:void 0):p=this.options.parseMissingKeyHandler(p))}return i?(h.res=p,h.usedParams=this.getUsedParamsDetails(n),h):p}extendTranslation(e,n,r,i,s){var o=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...r},r.lng||this.language||i.usedLng,i.usedNS,i.usedKey,{resolved:i});else if(!r.skipInterpolation){r.interpolation&&this.interpolator.init({...r,interpolation:{...this.options.interpolation,...r.interpolation}});const d=q(e)&&(r&&r.interpolation&&r.interpolation.skipOnVariables!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let u;if(d){const p=e.match(this.interpolator.nestingRegexp);u=p&&p.length}let h=r.replace&&!q(r.replace)?r.replace:r;if(this.options.interpolation.defaultVariables&&(h={...this.options.interpolation.defaultVariables,...h}),e=this.interpolator.interpolate(e,h,r.lng||this.language||i.usedLng,r),d){const p=e.match(this.interpolator.nestingRegexp),m=p&&p.length;u<m&&(r.nest=!1)}!r.lng&&this.options.compatibilityAPI!=="v1"&&i&&i.res&&(r.lng=this.language||i.usedLng),r.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var p=arguments.length,m=new Array(p),x=0;x<p;x++)m[x]=arguments[x];return s&&s[0]===m[0]&&!r.context?(o.logger.warn(`It seems you are nesting recursively key: ${m[0]} in key: ${n[0]}`),null):o.translate(...m,n)},r)),r.interpolation&&this.interpolator.reset()}const l=r.postProcess||this.options.postProcess,c=q(l)?[l]:l;return e!=null&&c&&c.length&&r.applyPostProcessor!==!1&&(e=jh.handle(c,e,n,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...i,usedParams:this.getUsedParamsDetails(r)},...r}:r,this)),e}resolve(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r,i,s,o,l;return q(e)&&(e=[e]),e.forEach(c=>{if(this.isValidLookup(r))return;const d=this.extractFromKey(c,n),u=d.key;i=u;let h=d.namespaces;this.options.fallbackNS&&(h=h.concat(this.options.fallbackNS));const p=n.count!==void 0&&!q(n.count),m=p&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),x=n.context!==void 0&&(q(n.context)||typeof n.context=="number")&&n.context!=="",y=n.lngs?n.lngs:this.languageUtils.toResolveHierarchy(n.lng||this.language,n.fallbackLng);h.forEach(v=>{this.isValidLookup(r)||(l=v,!lc[`${y[0]}-${v}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(l)&&(lc[`${y[0]}-${v}`]=!0,this.logger.warn(`key "${i}" for languages "${y.join(", ")}" won't get resolved as namespace "${l}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),y.forEach(j=>{if(this.isValidLookup(r))return;o=j;const E=[u];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(E,u,j,v,n);else{let b;p&&(b=this.pluralResolver.getSuffix(j,n.count,n));const I=`${this.options.pluralSeparator}zero`,R=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(p&&(E.push(u+b),n.ordinal&&b.indexOf(R)===0&&E.push(u+b.replace(R,this.options.pluralSeparator)),m&&E.push(u+I)),x){const $=`${u}${this.options.contextSeparator}${n.context}`;E.push($),p&&(E.push($+b),n.ordinal&&b.indexOf(R)===0&&E.push($+b.replace(R,this.options.pluralSeparator)),m&&E.push($+I))}}let w;for(;w=E.pop();)this.isValidLookup(r)||(s=w,r=this.getResource(j,v,w,n))}))})}),{res:r,usedKey:i,exactUsedKey:s,usedLng:o,usedNS:l}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,n,r,i):this.resourceStore.getResource(e,n,r,i)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],r=e.replace&&!q(e.replace);let i=r?e.replace:e;if(r&&typeof e.count<"u"&&(i.count=e.count),this.options.interpolation.defaultVariables&&(i={...this.options.interpolation.defaultVariables,...i}),!r){i={...i};for(const s of n)delete i[s]}return i}static hasDefaultValue(e){const n="defaultValue";for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&n===r.substring(0,n.length)&&e[r]!==void 0)return!0;return!1}}const wa=t=>t.charAt(0).toUpperCase()+t.slice(1);class cc{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Tt.create("languageUtils")}getScriptPartFromCode(e){if(e=ds(e),!e||e.indexOf("-")<0)return null;const n=e.split("-");return n.length===2||(n.pop(),n[n.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(n.join("-"))}getLanguagePartFromCode(e){if(e=ds(e),!e||e.indexOf("-")<0)return e;const n=e.split("-");return this.formatLanguageCode(n[0])}formatLanguageCode(e){if(q(e)&&e.indexOf("-")>-1){if(typeof Intl<"u"&&typeof Intl.getCanonicalLocales<"u")try{let i=Intl.getCanonicalLocales(e)[0];if(i&&this.options.lowerCaseLng&&(i=i.toLowerCase()),i)return i}catch{}const n=["hans","hant","latn","cyrl","cans","mong","arab"];let r=e.split("-");return this.options.lowerCaseLng?r=r.map(i=>i.toLowerCase()):r.length===2?(r[0]=r[0].toLowerCase(),r[1]=r[1].toUpperCase(),n.indexOf(r[1].toLowerCase())>-1&&(r[1]=wa(r[1].toLowerCase()))):r.length===3&&(r[0]=r[0].toLowerCase(),r[1].length===2&&(r[1]=r[1].toUpperCase()),r[0]!=="sgn"&&r[2].length===2&&(r[2]=r[2].toUpperCase()),n.indexOf(r[1].toLowerCase())>-1&&(r[1]=wa(r[1].toLowerCase())),n.indexOf(r[2].toLowerCase())>-1&&(r[2]=wa(r[2].toLowerCase()))),r.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let n;return e.forEach(r=>{if(n)return;const i=this.formatLanguageCode(r);(!this.options.supportedLngs||this.isSupportedCode(i))&&(n=i)}),!n&&this.options.supportedLngs&&e.forEach(r=>{if(n)return;const i=this.getLanguagePartFromCode(r);if(this.isSupportedCode(i))return n=i;n=this.options.supportedLngs.find(s=>{if(s===i)return s;if(!(s.indexOf("-")<0&&i.indexOf("-")<0)&&(s.indexOf("-")>0&&i.indexOf("-")<0&&s.substring(0,s.indexOf("-"))===i||s.indexOf(i)===0&&i.length>1))return s})}),n||(n=this.getFallbackCodes(this.options.fallbackLng)[0]),n}getFallbackCodes(e,n){if(!e)return[];if(typeof e=="function"&&(e=e(n)),q(e)&&(e=[e]),Array.isArray(e))return e;if(!n)return e.default||[];let r=e[n];return r||(r=e[this.getScriptPartFromCode(n)]),r||(r=e[this.formatLanguageCode(n)]),r||(r=e[this.getLanguagePartFromCode(n)]),r||(r=e.default),r||[]}toResolveHierarchy(e,n){const r=this.getFallbackCodes(n||this.options.fallbackLng||[],e),i=[],s=o=>{o&&(this.isSupportedCode(o)?i.push(o):this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`))};return q(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&s(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&s(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&s(this.getLanguagePartFromCode(e))):q(e)&&s(this.formatLanguageCode(e)),r.forEach(o=>{i.indexOf(o)<0&&s(this.formatLanguageCode(o))}),i}}let _x=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],jx={1:t=>+(t>1),2:t=>+(t!=1),3:t=>0,4:t=>t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,5:t=>t==0?0:t==1?1:t==2?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5,6:t=>t==1?0:t>=2&&t<=4?1:2,7:t=>t==1?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,8:t=>t==1?0:t==2?1:t!=8&&t!=11?2:3,9:t=>+(t>=2),10:t=>t==1?0:t==2?1:t<7?2:t<11?3:4,11:t=>t==1||t==11?0:t==2||t==12?1:t>2&&t<20?2:3,12:t=>+(t%10!=1||t%100==11),13:t=>+(t!==0),14:t=>t==1?0:t==2?1:t==3?2:3,15:t=>t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2,16:t=>t%10==1&&t%100!=11?0:t!==0?1:2,17:t=>t==1||t%10==1&&t%100!=11?0:1,18:t=>t==0?0:t==1?1:2,19:t=>t==1?0:t==0||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3,20:t=>t==1?0:t==0||t%100>0&&t%100<20?1:2,21:t=>t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0,22:t=>t==1?0:t==2?1:(t<0||t>10)&&t%10==0?2:3};const Tx=["v1","v2","v3"],Ix=["v4"],dc={zero:0,one:1,two:2,few:3,many:4,other:5},Rx=()=>{const t={};return _x.forEach(e=>{e.lngs.forEach(n=>{t[n]={numbers:e.nr,plurals:jx[e.fc]}})}),t};class Cx{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=n,this.logger=Tt.create("pluralResolver"),(!this.options.compatibilityJSON||Ix.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=Rx(),this.pluralRulesCache={}}addRule(e,n){this.rules[e]=n}clearCache(){this.pluralRulesCache={}}getRule(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi()){const r=ds(e==="dev"?"en":e),i=n.ordinal?"ordinal":"cardinal",s=JSON.stringify({cleanedCode:r,type:i});if(s in this.pluralRulesCache)return this.pluralRulesCache[s];let o;try{o=new Intl.PluralRules(r,{type:i})}catch{if(!e.match(/-|_/))return;const c=this.languageUtils.getLanguagePartFromCode(e);o=this.getRule(c,n)}return this.pluralRulesCache[s]=o,o}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getRule(e,n);return this.shouldUseIntlApi()?r&&r.resolvedOptions().pluralCategories.length>1:r&&r.numbers.length>1}getPluralFormsOfKey(e,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,r).map(i=>`${n}${i}`)}getSuffixes(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getRule(e,n);return r?this.shouldUseIntlApi()?r.resolvedOptions().pluralCategories.sort((i,s)=>dc[i]-dc[s]).map(i=>`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${i}`):r.numbers.map(i=>this.getSuffix(e,i,n)):[]}getSuffix(e,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const i=this.getRule(e,r);return i?this.shouldUseIntlApi()?`${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${i.select(n)}`:this.getSuffixRetroCompatible(i,n):(this.logger.warn(`no plural rule found for: ${e}`),"")}getSuffixRetroCompatible(e,n){const r=e.noAbs?e.plurals(n):e.plurals(Math.abs(n));let i=e.numbers[r];this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1&&(i===2?i="plural":i===1&&(i=""));const s=()=>this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString();return this.options.compatibilityJSON==="v1"?i===1?"":typeof i=="number"?`_plural_${i.toString()}`:s():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1?s():this.options.prepend&&r.toString()?this.options.prepend+r.toString():r.toString()}shouldUseIntlApi(){return!Tx.includes(this.options.compatibilityJSON)}}const uc=function(t,e,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,s=gx(t,e,n);return!s&&i&&q(n)&&(s=fo(t,n,r),s===void 0&&(s=fo(e,n,r))),s},ka=t=>t.replace(/\$/g,"$$$$");class Ax{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Tt.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||(n=>n),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:n,escapeValue:r,useRawValueToEscape:i,prefix:s,prefixEscaped:o,suffix:l,suffixEscaped:c,formatSeparator:d,unescapeSuffix:u,unescapePrefix:h,nestingPrefix:p,nestingPrefixEscaped:m,nestingSuffix:x,nestingSuffixEscaped:y,nestingOptionsSeparator:v,maxReplaces:j,alwaysFormat:E}=e.interpolation;this.escape=n!==void 0?n:yx,this.escapeValue=r!==void 0?r:!0,this.useRawValueToEscape=i!==void 0?i:!1,this.prefix=s?ir(s):o||"{{",this.suffix=l?ir(l):c||"}}",this.formatSeparator=d||",",this.unescapePrefix=u?"":h||"-",this.unescapeSuffix=this.unescapePrefix?"":u||"",this.nestingPrefix=p?ir(p):m||ir("$t("),this.nestingSuffix=x?ir(x):y||ir(")"),this.nestingOptionsSeparator=v||",",this.maxReplaces=j||1e3,this.alwaysFormat=E!==void 0?E:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(n,r)=>n&&n.source===r?(n.lastIndex=0,n):new RegExp(r,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,n,r,i){let s,o,l;const c=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},d=m=>{if(m.indexOf(this.formatSeparator)<0){const j=uc(n,c,m,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(j,void 0,r,{...i,...n,interpolationkey:m}):j}const x=m.split(this.formatSeparator),y=x.shift().trim(),v=x.join(this.formatSeparator).trim();return this.format(uc(n,c,y,this.options.keySeparator,this.options.ignoreJSONStructure),v,r,{...i,...n,interpolationkey:y})};this.resetRegExp();const u=i&&i.missingInterpolationHandler||this.options.missingInterpolationHandler,h=i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:m=>ka(m)},{regex:this.regexp,safeValue:m=>this.escapeValue?ka(this.escape(m)):ka(m)}].forEach(m=>{for(l=0;s=m.regex.exec(e);){const x=s[1].trim();if(o=d(x),o===void 0)if(typeof u=="function"){const v=u(e,s,i);o=q(v)?v:""}else if(i&&Object.prototype.hasOwnProperty.call(i,x))o="";else if(h){o=s[0];continue}else this.logger.warn(`missed to pass in variable ${x} for interpolating ${e}`),o="";else!q(o)&&!this.useRawValueToEscape&&(o=rc(o));const y=m.safeValue(o);if(e=e.replace(s[0],y),h?(m.regex.lastIndex+=o.length,m.regex.lastIndex-=s[0].length):m.regex.lastIndex=0,l++,l>=this.maxReplaces)break}}),e}nest(e,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i,s,o;const l=(c,d)=>{const u=this.nestingOptionsSeparator;if(c.indexOf(u)<0)return c;const h=c.split(new RegExp(`${u}[ ]*{`));let p=`{${h[1]}`;c=h[0],p=this.interpolate(p,o);const m=p.match(/'/g),x=p.match(/"/g);(m&&m.length%2===0&&!x||x.length%2!==0)&&(p=p.replace(/'/g,'"'));try{o=JSON.parse(p),d&&(o={...d,...o})}catch(y){return this.logger.warn(`failed parsing options string in nesting for key ${c}`,y),`${c}${u}${p}`}return o.defaultValue&&o.defaultValue.indexOf(this.prefix)>-1&&delete o.defaultValue,c};for(;i=this.nestingRegexp.exec(e);){let c=[];o={...r},o=o.replace&&!q(o.replace)?o.replace:o,o.applyPostProcessor=!1,delete o.defaultValue;let d=!1;if(i[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(i[1])){const u=i[1].split(this.formatSeparator).map(h=>h.trim());i[1]=u.shift(),c=u,d=!0}if(s=n(l.call(this,i[1].trim(),o),o),s&&i[0]===e&&!q(s))return s;q(s)||(s=rc(s)),s||(this.logger.warn(`missed to resolve ${i[1]} for nesting ${e}`),s=""),d&&(s=c.reduce((u,h)=>this.format(u,h,r.lng,{...r,interpolationkey:i[1].trim()}),s.trim())),e=e.replace(i[0],s),this.regexp.lastIndex=0}return e}}const Ox=t=>{let e=t.toLowerCase().trim();const n={};if(t.indexOf("(")>-1){const r=t.split("(");e=r[0].toLowerCase().trim();const i=r[1].substring(0,r[1].length-1);e==="currency"&&i.indexOf(":")<0?n.currency||(n.currency=i.trim()):e==="relativetime"&&i.indexOf(":")<0?n.range||(n.range=i.trim()):i.split(";").forEach(o=>{if(o){const[l,...c]=o.split(":"),d=c.join(":").trim().replace(/^'+|'+$/g,""),u=l.trim();n[u]||(n[u]=d),d==="false"&&(n[u]=!1),d==="true"&&(n[u]=!0),isNaN(d)||(n[u]=parseInt(d,10))}})}return{formatName:e,formatOptions:n}},sr=t=>{const e={};return(n,r,i)=>{let s=i;i&&i.interpolationkey&&i.formatParams&&i.formatParams[i.interpolationkey]&&i[i.interpolationkey]&&(s={...s,[i.interpolationkey]:void 0});const o=r+JSON.stringify(s);let l=e[o];return l||(l=t(ds(r),i),e[o]=l),l(n)}};class Px{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Tt.create("formatter"),this.options=e,this.formats={number:sr((n,r)=>{const i=new Intl.NumberFormat(n,{...r});return s=>i.format(s)}),currency:sr((n,r)=>{const i=new Intl.NumberFormat(n,{...r,style:"currency"});return s=>i.format(s)}),datetime:sr((n,r)=>{const i=new Intl.DateTimeFormat(n,{...r});return s=>i.format(s)}),relativetime:sr((n,r)=>{const i=new Intl.RelativeTimeFormat(n,{...r});return s=>i.format(s,r.range||"day")}),list:sr((n,r)=>{const i=new Intl.ListFormat(n,{...r});return s=>i.format(s)})},this.init(e)}init(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=n.interpolation.formatSeparator||","}add(e,n){this.formats[e.toLowerCase().trim()]=n}addCached(e,n){this.formats[e.toLowerCase().trim()]=sr(n)}format(e,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const s=n.split(this.formatSeparator);if(s.length>1&&s[0].indexOf("(")>1&&s[0].indexOf(")")<0&&s.find(l=>l.indexOf(")")>-1)){const l=s.findIndex(c=>c.indexOf(")")>-1);s[0]=[s[0],...s.splice(1,l)].join(this.formatSeparator)}return s.reduce((l,c)=>{const{formatName:d,formatOptions:u}=Ox(c);if(this.formats[d]){let h=l;try{const p=i&&i.formatParams&&i.formatParams[i.interpolationkey]||{},m=p.locale||p.lng||i.locale||i.lng||r;h=this.formats[d](l,m,{...u,...i,...p})}catch(p){this.logger.warn(p)}return h}else this.logger.warn(`there was no format function for ${d}`);return l},e)}}const Nx=(t,e)=>{t.pending[e]!==void 0&&(delete t.pending[e],t.pendingCount--)};class Lx extends qs{constructor(e,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=n,this.services=r,this.languageUtils=r.languageUtils,this.options=i,this.logger=Tt.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=i.maxParallelReads||10,this.readingCalls=0,this.maxRetries=i.maxRetries>=0?i.maxRetries:5,this.retryTimeout=i.retryTimeout>=1?i.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(r,i.backend,i)}queueLoad(e,n,r,i){const s={},o={},l={},c={};return e.forEach(d=>{let u=!0;n.forEach(h=>{const p=`${d}|${h}`;!r.reload&&this.store.hasResourceBundle(d,h)?this.state[p]=2:this.state[p]<0||(this.state[p]===1?o[p]===void 0&&(o[p]=!0):(this.state[p]=1,u=!1,o[p]===void 0&&(o[p]=!0),s[p]===void 0&&(s[p]=!0),c[h]===void 0&&(c[h]=!0)))}),u||(l[d]=!0)}),(Object.keys(s).length||Object.keys(o).length)&&this.queue.push({pending:o,pendingCount:Object.keys(o).length,loaded:{},errors:[],callback:i}),{toLoad:Object.keys(s),pending:Object.keys(o),toLoadLanguages:Object.keys(l),toLoadNamespaces:Object.keys(c)}}loaded(e,n,r){const i=e.split("|"),s=i[0],o=i[1];n&&this.emit("failedLoading",s,o,n),!n&&r&&this.store.addResourceBundle(s,o,r,void 0,void 0,{skipCopy:!0}),this.state[e]=n?-1:2,n&&r&&(this.state[e]=0);const l={};this.queue.forEach(c=>{mx(c.loaded,[s],o),Nx(c,e),n&&c.errors.push(n),c.pendingCount===0&&!c.done&&(Object.keys(c.loaded).forEach(d=>{l[d]||(l[d]={});const u=c.loaded[d];u.length&&u.forEach(h=>{l[d][h]===void 0&&(l[d][h]=!0)})}),c.done=!0,c.errors.length?c.callback(c.errors):c.callback())}),this.emit("loaded",l),this.queue=this.queue.filter(c=>!c.done)}read(e,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,o=arguments.length>5?arguments[5]:void 0;if(!e.length)return o(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:n,fcName:r,tried:i,wait:s,callback:o});return}this.readingCalls++;const l=(d,u)=>{if(this.readingCalls--,this.waitingReads.length>0){const h=this.waitingReads.shift();this.read(h.lng,h.ns,h.fcName,h.tried,h.wait,h.callback)}if(d&&u&&i<this.maxRetries){setTimeout(()=>{this.read.call(this,e,n,r,i+1,s*2,o)},s);return}o(d,u)},c=this.backend[r].bind(this.backend);if(c.length===2){try{const d=c(e,n);d&&typeof d.then=="function"?d.then(u=>l(null,u)).catch(l):l(null,d)}catch(d){l(d)}return}return c(e,n,l)}prepareLoading(e,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),i&&i();q(e)&&(e=this.languageUtils.toResolveHierarchy(e)),q(n)&&(n=[n]);const s=this.queueLoad(e,n,r,i);if(!s.toLoad.length)return s.pending.length||i(),null;s.toLoad.forEach(o=>{this.loadOne(o)})}load(e,n,r){this.prepareLoading(e,n,{},r)}reload(e,n,r){this.prepareLoading(e,n,{reload:!0},r)}loadOne(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const r=e.split("|"),i=r[0],s=r[1];this.read(i,s,"read",void 0,void 0,(o,l)=>{o&&this.logger.warn(`${n}loading namespace ${s} for language ${i} failed`,o),!o&&l&&this.logger.log(`${n}loaded namespace ${s} for language ${i}`,l),this.loaded(e,o,l)})}saveMissing(e,n,r,i,s){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},l=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(n)){this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(r==null||r==="")){if(this.backend&&this.backend.create){const c={...o,isUpdate:s},d=this.backend.create.bind(this.backend);if(d.length<6)try{let u;d.length===5?u=d(e,n,r,i,c):u=d(e,n,r,i),u&&typeof u.then=="function"?u.then(h=>l(null,h)).catch(l):l(null,u)}catch(u){l(u)}else d(e,n,r,i,l,c)}!e||!e[0]||this.store.addResource(e[0],n,r,i)}}}const hc=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:t=>{let e={};if(typeof t[1]=="object"&&(e=t[1]),q(t[1])&&(e.defaultValue=t[1]),q(t[2])&&(e.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const n=t[3]||t[2];Object.keys(n).forEach(r=>{e[r]=n[r]})}return e},interpolation:{escapeValue:!0,format:t=>t,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),pc=t=>(q(t.ns)&&(t.ns=[t.ns]),q(t.fallbackLng)&&(t.fallbackLng=[t.fallbackLng]),q(t.fallbackNS)&&(t.fallbackNS=[t.fallbackNS]),t.supportedLngs&&t.supportedLngs.indexOf("cimode")<0&&(t.supportedLngs=t.supportedLngs.concat(["cimode"])),t),$i=()=>{},$x=t=>{Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(n=>{typeof t[n]=="function"&&(t[n]=t[n].bind(t))})};class ti extends qs{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;if(super(),this.options=pc(e),this.services={},this.logger=Tt,this.modules={external:[]},$x(this),n&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,n),this;setTimeout(()=>{this.init(e,n)},0)}}init(){var e=this;let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof n=="function"&&(r=n,n={}),!n.defaultNS&&n.defaultNS!==!1&&n.ns&&(q(n.ns)?n.defaultNS=n.ns:n.ns.indexOf("translation")<0&&(n.defaultNS=n.ns[0]));const i=hc();this.options={...i,...this.options,...pc(n)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...i.interpolation,...this.options.interpolation}),n.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=n.keySeparator),n.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=n.nsSeparator);const s=u=>u?typeof u=="function"?new u:u:null;if(!this.options.isClone){this.modules.logger?Tt.init(s(this.modules.logger),this.options):Tt.init(null,this.options);let u;this.modules.formatter?u=this.modules.formatter:typeof Intl<"u"&&(u=Px);const h=new cc(this.options);this.store=new oc(this.options.resources,this.options);const p=this.services;p.logger=Tt,p.resourceStore=this.store,p.languageUtils=h,p.pluralResolver=new Cx(h,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),u&&(!this.options.interpolation.format||this.options.interpolation.format===i.interpolation.format)&&(p.formatter=s(u),p.formatter.init(p,this.options),this.options.interpolation.format=p.formatter.format.bind(p.formatter)),p.interpolator=new Ax(this.options),p.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},p.backendConnector=new Lx(s(this.modules.backend),p.resourceStore,p,this.options),p.backendConnector.on("*",function(m){for(var x=arguments.length,y=new Array(x>1?x-1:0),v=1;v<x;v++)y[v-1]=arguments[v];e.emit(m,...y)}),this.modules.languageDetector&&(p.languageDetector=s(this.modules.languageDetector),p.languageDetector.init&&p.languageDetector.init(p,this.options.detection,this.options)),this.modules.i18nFormat&&(p.i18nFormat=s(this.modules.i18nFormat),p.i18nFormat.init&&p.i18nFormat.init(this)),this.translator=new us(this.services,this.options),this.translator.on("*",function(m){for(var x=arguments.length,y=new Array(x>1?x-1:0),v=1;v<x;v++)y[v-1]=arguments[v];e.emit(m,...y)}),this.modules.external.forEach(m=>{m.init&&m.init(this)})}if(this.format=this.options.interpolation.format,r||(r=$i),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const u=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);u.length>0&&u[0]!=="dev"&&(this.options.lng=u[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(u=>{this[u]=function(){return e.store[u](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(u=>{this[u]=function(){return e.store[u](...arguments),e}});const c=Fr(),d=()=>{const u=(h,p)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),c.resolve(p),r(h,p)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return u(null,this.t.bind(this));this.changeLanguage(this.options.lng,u)};return this.options.resources||!this.options.initImmediate?d():setTimeout(d,0),c}loadResources(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:$i;const i=q(e)?e:this.language;if(typeof e=="function"&&(r=e),!this.options.resources||this.options.partialBundledLanguages){if(i&&i.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return r();const s=[],o=l=>{if(!l||l==="cimode")return;this.services.languageUtils.toResolveHierarchy(l).forEach(d=>{d!=="cimode"&&s.indexOf(d)<0&&s.push(d)})};i?o(i):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(c=>o(c)),this.options.preload&&this.options.preload.forEach(l=>o(l)),this.services.backendConnector.load(s,this.options.ns,l=>{!l&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),r(l)})}else r(null)}reloadResources(e,n,r){const i=Fr();return typeof e=="function"&&(r=e,e=void 0),typeof n=="function"&&(r=n,n=void 0),e||(e=this.languages),n||(n=this.options.ns),r||(r=$i),this.services.backendConnector.reload(e,n,s=>{i.resolve(),r(s)}),i}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&jh.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let n=0;n<this.languages.length;n++){const r=this.languages[n];if(!(["cimode","dev"].indexOf(r)>-1)&&this.store.hasLanguageSomeTranslations(r)){this.resolvedLanguage=r;break}}}changeLanguage(e,n){var r=this;this.isLanguageChangingTo=e;const i=Fr();this.emit("languageChanging",e);const s=c=>{this.language=c,this.languages=this.services.languageUtils.toResolveHierarchy(c),this.resolvedLanguage=void 0,this.setResolvedLanguage(c)},o=(c,d)=>{d?(s(d),this.translator.changeLanguage(d),this.isLanguageChangingTo=void 0,this.emit("languageChanged",d),this.logger.log("languageChanged",d)):this.isLanguageChangingTo=void 0,i.resolve(function(){return r.t(...arguments)}),n&&n(c,function(){return r.t(...arguments)})},l=c=>{!e&&!c&&this.services.languageDetector&&(c=[]);const d=q(c)?c:this.services.languageUtils.getBestMatchFromCodes(c);d&&(this.language||s(d),this.translator.language||this.translator.changeLanguage(d),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(d)),this.loadResources(d,u=>{o(u,d)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?l(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(l):this.services.languageDetector.detect(l):l(e),i}getFixedT(e,n,r){var i=this;const s=function(o,l){let c;if(typeof l!="object"){for(var d=arguments.length,u=new Array(d>2?d-2:0),h=2;h<d;h++)u[h-2]=arguments[h];c=i.options.overloadTranslationOptionHandler([o,l].concat(u))}else c={...l};c.lng=c.lng||s.lng,c.lngs=c.lngs||s.lngs,c.ns=c.ns||s.ns,c.keyPrefix!==""&&(c.keyPrefix=c.keyPrefix||r||s.keyPrefix);const p=i.options.keySeparator||".";let m;return c.keyPrefix&&Array.isArray(o)?m=o.map(x=>`${c.keyPrefix}${p}${x}`):m=c.keyPrefix?`${c.keyPrefix}${p}${o}`:o,i.t(m,c)};return q(e)?s.lng=e:s.lngs=e,s.ns=n,s.keyPrefix=r,s}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const r=n.lng||this.resolvedLanguage||this.languages[0],i=this.options?this.options.fallbackLng:!1,s=this.languages[this.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const o=(l,c)=>{const d=this.services.backendConnector.state[`${l}|${c}`];return d===-1||d===0||d===2};if(n.precheck){const l=n.precheck(this,o);if(l!==void 0)return l}return!!(this.hasResourceBundle(r,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||o(r,e)&&(!i||o(s,e)))}loadNamespaces(e,n){const r=Fr();return this.options.ns?(q(e)&&(e=[e]),e.forEach(i=>{this.options.ns.indexOf(i)<0&&this.options.ns.push(i)}),this.loadResources(i=>{r.resolve(),n&&n(i)}),r):(n&&n(),Promise.resolve())}loadLanguages(e,n){const r=Fr();q(e)&&(e=[e]);const i=this.options.preload||[],s=e.filter(o=>i.indexOf(o)<0&&this.services.languageUtils.isSupportedCode(o));return s.length?(this.options.preload=i.concat(s),this.loadResources(o=>{r.resolve(),n&&n(o)}),r):(n&&n(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";const n=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],r=this.services&&this.services.languageUtils||new cc(hc());return n.indexOf(r.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return new ti(e,n)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:$i;const r=e.forkResourceStore;r&&delete e.forkResourceStore;const i={...this.options,...e,isClone:!0},s=new ti(i);return(e.debug!==void 0||e.prefix!==void 0)&&(s.logger=s.logger.clone(e)),["store","services","language"].forEach(l=>{s[l]=this[l]}),s.services={...this.services},s.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},r&&(s.store=new oc(this.store.data,i),s.services.resourceStore=s.store),s.translator=new us(s.services,i),s.translator.on("*",function(l){for(var c=arguments.length,d=new Array(c>1?c-1:0),u=1;u<c;u++)d[u-1]=arguments[u];s.emit(l,...d)}),s.init(i,n),s.translator.options=i,s.translator.backendConnector.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},s}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const ze=ti.createInstance();ze.createInstance=ti.createInstance;ze.createInstance;ze.dir;ze.init;ze.loadResources;ze.reloadResources;ze.use;ze.changeLanguage;ze.getFixedT;ze.t;ze.exists;ze.setDefaultNamespace;ze.hasLoadedNamespace;ze.loadNamespaces;ze.loadLanguages;const Dx="Sign In",Mx="Sign Out",Fx="Orders",Ux="Language",Bx="Loading",zx="Retry",Hx="Cancel",Vx="Get early access",Wx="Account Menu",qx="SenditGo home",Kx="Toggle theme",Gx="Clear form",Zx={shipper:{label:"Shipper",hint:"Create, import and track your orders"},carrier:{label:"Carrier",hint:"SenditGo Carrier fleet console",login:"Carrier login"},consignee:{label:"Consignee",hint:"Sign in to SenditGo Consignee",login:"Consignee login"}},Yx="Carrier login",Jx={signIn:Dx,signOut:Mx,orders:Fx,language:Ux,loading:Bx,retry:zx,cancel:Hx,getEarlyAccess:Vx,accountMenu:Wx,brandHome:qx,toggleTheme:Kx,clearForm:Gx,loginRole:Zx,carrierLogin:Yx},Xx={eyebrow:"Tenant Portal"},Qx={ariaLabel:"Platform Navigation",platform:"Platform",groups:{operations:"Operations",finance:"Finance",admin:"Admin"},orders:"Orders",createOrder:"Create Order",importOrders:"Import Orders",billing:"Billing",usersRoles:"Users & Roles"},ey={title:"Sign in to {{brand}}",lead:"Track orders, create shipments, and manage your team.",mobileLabel:"Mobile Number",mobilePlaceholder:"412 345 678",sendCode:"Send Code",otpLabel:"Verification Code",otpHint:"Enter the 6-digit code sent to {{phone}}.",verify:"Verify & Sign In",resend:"Resend Code",changeNumber:"Change Number",invalidPhone:"Enter a valid mobile number.",invalidOtp:"Enter the 6-digit code.",otpFailed:"That code didn't match. Check it and try again.",sendFailed:"We couldn't send the code. Try again in a moment.",loginFailed:"Sign-in failed. Try again.",devSignIn:"Dev Sign-In (Mock)"},ty={title:"Orders",lead:"Find shipments, review status, and open the tracking detail without leaving the platform.",searchLabel:"Search",searchPlaceholder:"Order ID",statusLabel:"Status",allStatuses:"All statuses",applyFilters:"Apply",clearFilters:"Clear",colOrderId:"Order ID",colRoute:"Route",colCreated:"Created",colPackages:"Packages",colStatus:"Status",colActions:"Actions",viewDetails:"View",empty:"No orders match this view.",loadFailed:"We couldn't load your orders.",showingRange:"Showing {{from}}-{{to}} of {{total}}",prevPage:"Previous",nextPage:"Next",detailTitle:"Order {{id}}",detailLead:"Tracking detail, contact handoff, driver assignment, and package state.",detailLoadFailed:"We couldn't load this order.",backToOrders:"Back to orders",sender:"Sender",recipient:"Recipient",timeline:"Timeline",driver:"Driver",comment:"Comment",packagesTitle:"Packages",packageId:"Package ID",packageSize:"Size",packageWeight:"Weight",packagePrice:"Price",packageAbbrev:"pkgs",notAssigned:"Not assigned",none:"None",routeTo:"to",emptyFiltered:"No orders match these filters.",pickup:"Pickup",delivery:"Delivery",timezone:"Timezone",sizeCm:"{{length}} x {{width}} x {{height}} cm",weightKg:"{{weight}} kg"},ny={title:"Create Order",lead:"Prepare a shipment draft with sender, recipient, package, and delivery notes.",sectionContact:"Contact Details",sectionPackage:"Package",senderName:"Sender Name",senderAddress:"Sender Address",senderMobile:"Sender Mobile",senderPostcode:"Sender Postcode",recipientName:"Recipient Name",recipientAddress:"Recipient Address",recipientMobile:"Recipient Mobile",recipientPostcode:"Recipient Postcode",packages:"Packages",weight:"Weight (kg)",reference:"Reference",notes:"Driver Notes",prepareDraft:"Prepare Draft",draftReady:"Your draft is complete and validated.",required:"Complete sender, recipient, addresses, and at least one package.",backendNotice:"Online order creation is coming soon. You can prepare and validate a draft here today."},ry={title:"Import Orders",lead:"Upload a fleet-template CSV to open a preview session. Commit is not live yet.",uploadLabel:"CSV File",chooseFile:"Choose file",downloadTemplate:"Download template",columnsTitle:"Template",columnsBody:"Use the fleet import template (invoice, customer, sender and recipient address parts, SKU, qty, weight, and size). A 6-column file will not open a session.",previewTitle:"Preview session",sessionTitle:"Session {{id}}",sessionFile:"{{name}}",sessionCounts:"{{valid}} valid · {{invalid}} invalid · {{total}} rows",rowsParsed:"{{count}} row parsed",rowsParsed_other:"{{count}} rows parsed",backendNotice:"Online batch import is not live yet. Upload opens a mock preview session from the fleet CSV template — it does not create orders or price them.",previewEmpty:"Upload a fleet-template CSV to open a preview session.",noRows:"That file has no order rows. Add at least one row below the header and try again.",missingColumns:"The file is missing required columns: {{columns}}.",parseFailed:"We couldn't read that file. Export it as CSV and try again.",fileFormat:"Use a .csv exported from the fleet template.",uploadFailed:"We couldn't open a preview session. Try again.",templateFailed:"We couldn't download the template. Try again.",jobMissing:"That preview session is no longer available. Upload the file again.",clearSession:"Clear session",filterAll:"All",filterValid:"Valid",filterInvalid:"Invalid",colInvoice:"Invoice",colRoute:"Route",colPickup:"Pickup",colDelivery:"Delivery",colQty:"Qty",colWeight:"Weight",colReason:"Reason",rowValid:"Valid",rowInvalid:"Invalid"},iy={title:"Users & Roles",lead:"Manage who can sign in to the portal and what each role can do.",usersTitle:"Users",name:"Name",email:"Email",role:"Role",status:"Status",actions:"Actions",active:"Active",inactive:"Inactive",you:"You",usersEmpty:"No users yet — add your first teammate.",usersLoadFailed:"We couldn't load users.",editUser:"Edit",saveUser:"Save",userUpdated:"{{name}}'s role is now {{role}}.",userUpdateFailed:"We couldn't update that user. Try again.",addUserTitle:"Add User",addUser:"Add User",addUserRequired:"Enter a name and pick a role.",addUserSuccess:"{{name}} has been added.",addUserFailed:"We couldn't add that user. Try again.",rolesTitle:"Roles",permissions:"Permissions",members:"Members",rolesEmpty:"No roles yet — create your first role.",rolesLoadFailed:"We couldn't load roles.",createRole:"Create Role",editRole:"Edit",deleteRole:"Delete",deleteConfirm:"Delete this role?",confirmDelete:"Confirm Delete",roleDeleted:"Role deleted.",deleteFailed:"We couldn't delete that role. Try again.",deleteBlocked_one:"Reassign {{count}} user before deleting this role.",deleteBlocked_other:"Reassign {{count}} users before deleting this role.",systemRole:"Built-in",roleFormCreateTitle:"Create Role",roleFormEditTitle:"Edit Role",roleFormLead:"Name the role and choose what it can do.",roleName:"Role Name",roleFormRequired:"Enter a role name and pick at least one permission.",roleFormSaveFailed:"We couldn't save the role. Try again.",roleFormLoadFailed:"We couldn't load that role.",roleFormNotFound:"This role was not found.",backToAdmin:"Back to Users & Roles",saveChanges:"Save Changes",groupOrders:"Orders",groupUsers:"Users",groupRoles:"Roles",selectRole:"Select a role",rolesUnavailable:"We couldn't load roles for selection.",roleFormSystem:"Built-in roles can't be edited.",invitePhone:"Mobile Number",pending:"Pending",resend:"Resend",revoke:"Revoke",suspend:"Suspend",reactivate:"Reactivate",suspended:"Suspended",activityTitle:"Activity",audit:{roleChanged:"{{actor}} changed {{target}}'s role to {{role}}",suspended:"{{actor}} suspended {{target}}",reactivated:"{{actor}} reactivated {{target}}",invited:"{{actor}} invited {{phone}} as {{role}}",inviteRevoked:"{{actor}} revoked the invite for {{phone}}",inviteResent:"{{actor}} resent the invite to {{phone}}",roleCreated:"{{actor}} created the role {{role}}",roleUpdated:"{{actor}} updated the role {{role}}",roleDeleted:"{{actor}} deleted the role {{role}}"},lastOwnerBlock:"You're the only owner. Assign another owner first.",selfDemoteConfirm:"You'll lose {{capabilities}}.",scopeOwn:"My Orders",scopeCompany:"Company Orders",inviteSectionTitle:"Invite by Phone",sendInvite:"Send Invite",inviteRequired:"Enter a valid +61 mobile number and choose a role.",inviteSentNotice:"Invite sent to {{phone}}.",inviteSendFailed:"We couldn't send that invite. Try again.",inviteResendFailed:"We couldn't resend that invite. Try again.",inviteRevokeFailed:"We couldn't revoke that invite. Try again.",invitesLoadFailed:"We couldn't load pending invites.",invitesEmpty:"No pending invites.",expiresOn:"Expires"},sy={title:"Billing & Payments",lead:"How your account is billed, and the payment methods we support.",methodsTitle:"Payment Methods",status:{available:"Available",pending:"Coming Soon"},methods:{"on-account":{name:"On Account / Invoice",body:"Orders placed in the portal are billed to your company account and settled by invoice — no payment step at order time."},"stripe-card":{name:"Card Payments via Stripe",body:"Pay for orders by card, processed by Stripe. The portal integration is prepared and switches on once the payment API and account keys are issued."}},howTitle:"How Card Payments Will Work",how:{secure:{title:"Card details stay with Stripe",body:"Card numbers are entered in Stripe-hosted secure fields (Stripe Elements) and never touch SenditGo servers, keeping PCI compliance scope with Stripe."},intent:{title:"The backend creates the payment",body:"For each payment, the SenditGo backend creates a Stripe PaymentIntent for the order total and hands the portal its client secret."},confirm:{title:"The portal confirms it",body:"The portal confirms the payment with the per-environment publishable key; bank verification (3-D Secure) is handled by Stripe automatically when required."},receipt:{title:"Receipts flow back to the order",body:"Stripe notifies the backend by webhook, and the payment status and receipt attach to the order in your history."}},readinessTitle:"Integration status:",readinessBody:"The portal side is prepared — provider registry, per-environment key slots, and this page. Card payments switch on when the backend payment API is live and the Stripe keys are configured; on-account billing continues unchanged either way."},ay={ord_ls:"View Orders",ord_add:"Create Order",ord_imp:"Batch Import Orders",ord_ls_own:"View Own Orders",ord_ls_sub:"View Team Orders",ord_ls_all:"View All Company Orders",perm_role_ls:"View Roles",perm_role_add:"Create Role",perm_role_edt:"Edit Role",perm_role_del:"Delete Role",perm_asst_ls:"View Users",perm_asst_add:"Add Users",perm_asst_edt:"Edit Users",perm_asst_blk:"Suspend / Reactivate Users"},oy={owner:{name:"Owner",desc:"Full access — manage orders company-wide, invite and suspend teammates, and manage roles."},manager:{name:"Manager",desc:"Runs orders company-wide and manages the team; cannot change roles or permissions."},staff:{name:"Staff",desc:"Views and creates orders for their team; cannot manage users or roles."},viewer:{name:"Viewer",desc:"Read-only access to their own orders."},capabilities:{viewOrders:"View orders",createOrders:"Create orders",importOrders:"Import orders",companyOrders:"View company-wide orders",inviteMembers:"Invite members",suspendMembers:"Suspend members",manageRoles:"Manage roles"}},ly={common:Xx,nav:Qx,login:ey,orders:ty,createOrder:ny,importOrders:ry,admin:iy,billing:sy,permissions:ay,roles:oy},cy={1:"Payment pending",2:"To be scheduled",3:"Awaiting pickup",4:"In transit- supplier to fulfilment center",5:"In fulfilment center",6:"In transit- fulfilment center to customer",7:"Arrived at customer fulfilment center",8:"In transit",9:"Canceled",10:"Delivered",11:"Delivered & Signed",12:"Delivered with Exceptions",13:"Completed",14:"Full cancellation",15:"Complete Manually",16:"Delete Pending Confirmation"},dy={1:"Param Invalid.",2:"Param Required.",3:"Firebase Conn Error.",4:"Phone Number Required.",5:"Account Data Not Exist.",6:"Parse Error.",7:"Param Format Error.",8:"Email Or Password Not Correct.",9:"No Permission.",10:"Role Permission Name Duplicate.",11:"Role Permission Not Exist.",12:"Mobile Had Been Registered.",13:"Email Had Been Registered.",14:"Confirm Password Is Not Correct.",15:"Delivery Not Found.",16:"Delivery Duplicate Signature.",17:"Duplicate System Setting Keyword.",18:"Duplicate Chatroom Service Score.",19:"Chat Partner Haven'T Joined The Chatroom.",20:"Company/Fleet Is Not Exist.",21:"The Chatroom Has Reached The Maximum.",22:"Account Hasn'T Review Data.",23:"Record Not Found.",24:"Abnormal Account.",25:"Delivery Duplicate Score.",26:"Ip Format Error.",27:"Fleet Code Not Exist.",28:"Account In Audit.",29:"Fleet Code Has Benn Used.",30:"Fleet Not Found.",31:"Company Not Found.",32:"Fleet Has Been Loaned.",33:"Account Already Exists.",34:"Vehicle Is Using.",35:"Vehicle Not Found.",36:"Warehouse Not Found.",37:"The Address Format Is Incorrect.",38:"The Warehouse Route Setting Is Incorrect.",39:"Salesorder Not Found.",40:"Company Code Is Already In Use.",41:"Department Does Not Exist.",42:"Account Has Been Disabled.",43:"Salesorder Packages Have Not Been Completed Yet.",44:"Order Repeat Rating.",45:"Package Does Not Exist.",46:"Fleet Company Information Not Found.",47:"Team Rental Record Does Not Exist.",48:"The Driver'S Time Zone Is Incorrectly Read.",49:"Converting Driver'S Time Zone Is Incorrect.",50:"Keyword Does Not Exist.",51:"The City Does Not Exist.",52:"Json Format Conversion Failed.",53:"Errchangeroledriver.",54:"Errchangerolefleetdriver.",55:"Erraccountnotactive.",56:"Wrong License Type.",57:"Errchangerolemember.",58:"Errchangerolecompanymember.",59:"Errsalesordernotwaitforpay.",60:"Errdeliveryidincorrect.",61:"Platform Not Exist.",62:"Delivery Signature Record Not Exist.",63:"Delivery Plan Not Exist.",64:"Could Not Retrieve Coordinates From Geocoding Apis.",65:"Failed To Create An Order In Toll Shipment Api.",66:"Audit Accounts Not Exist.",67:"Audit Data Incomplete Or Content Mismatch.",68:"Could Not Parse Audit Data From Register Or Update.",69:"Invalid Review Status Id.",70:"The Phone Number Has Been Registered On This Role..",71:"Scheduledatetype Id Not Exist.",72:"Booking Date Invalid.",73:"Self-Account Removal Is Not Allowed.",74:"Cannot Modify Delivery Plan: Execution Has Already Started.",75:"Driver Is Not Available: Either Not Found, Currently Busy, Or Inactive.",76:"Simulation Start Time Must Be At Least 15 Minutes Before Current Local Time.",77:"Simulation Details Not Exist.",78:"An Error Occurred During The Simulation Calculation Process.",79:"Simulation Is Currently In Progress.",80:"Failed To Activate Simulation Result.",81:"Simulation Has Already Been Assigned And Cannot Be Modified Further.",82:"No Drivers Have Bookings Scheduled For Date.",83:"This Location Is Currently Not Available For Booking.",84:"Operation Failed Because The Delivery Plan Has Been Deleted.",85:"Route Injection Details Not Exist.",86:"Route Injection Calculating Failed.",87:"Route Injection Details Is Not Applicable.",88:"Route Injection Has Not Been Subscribed Or Failed During Subscription.",89:"Route Injection Failed: Python Server Calculating Failed.",92:"This route has a pending warehouse return. Please wait for the driver to complete it before making changes.",93:"Permission denied",100:"Database connection error.",101:"Database Write Error.",134:"This account has already been deleted.",142:"The warehouse-return stop must stay last when reordering.",200:"Token Not Exist.",201:"Token Parse Failed.",202:"Token Invalid.",203:"Token Expired.",204:"Logged out due to login at another location.",300:"Redis Connection Error.",301:"Redis Write Error.",401:"File Open Error.",402:"File Write Error.",403:"File Decode Error.",404:"File Format Error.",405:"File Close Error.",406:"File Delete Error.",500:"Aws Credential Error.",501:"Upload File Failed.",600:"Recaptcha Failed.",601:"Geocoding Failed.",700:"Websocket Write Error.",701:"Websocket Conn Failed.",800:"Netsuite Request Failed.",801:"Netsuite Response Error.",900:"Rabbitmq Conn Failed.",901:"Rabbitmq Read Message Failed.",902:"Rabbitmq Publish Message Failed.",1e3:"Pyserver Conn Failed.",1001:"PyServer Route Failed",1002:"Calculate Delivery Fee Failed",2010:"Payment Not Exist",2011:"Payment Not Pending",3e3:"Partial Success"},uy={orderCreated:"Order Created",scheduled:"Scheduled",readyForPickup:"Ready for Pickup",inTransit:"In transit",delivered:"Delivered",completed:"Completed"},hy={orderCreated:"Your order is confirmed and being prepared.",scheduled:"Your shipment is scheduled for pickup.",readyForPickup:"Your shipment is ready for pickup.",inTransit:"Your shipment is on its way.",delivered:"Your shipment has been delivered.",completed:"This shipment is complete.",exception:"Delivered — with an exception to review.",cancelled:"This shipment has been cancelled and will not be processed."},py={orderCreated:"Order Created",packageReceived:"Package Received",packageReceivedInTransit:"Package Received - In Transit",pickedUpFromSender:"Picked Up from Sender",departedOriginCountry:"Departed Origin Country",customsProcessing:"Customs Processing",customsCleared:"Customs Cleared",departedHub:"Departed Hub",arrivedRegionalHub:"Arrived at Regional Hub",arrivedLocalFacility:"Arrived at Local Facility",outForDelivery:"In transit",outForDeliveryPartial:"In transit (partial shipment)",deliveredSigned:"Delivered & Signed",cancelledByCustomer:"Order Cancelled by Customer"},fy={badgeLabel_one:"{{count}} Exception",badgeLabel_other:"{{count}} Exceptions",delay:{reason:"This shipment has been rescheduled. The estimated delivery date may change."},failedAttempt:{reason:"A delivery attempt was unsuccessful."},addressProblem:{reason:"We couldn't confirm the delivery address for this shipment."},customsHold:{reason:"This shipment is on hold for a customs or compliance check."}},my={service:"Service",shipDate:"Ship Date",origin:"Origin",destination:"Destination",weight:"Weight",shipper:"Shipper",recipient:"Recipient",packages:"Packages",estimatedDelivery:"Estimated Delivery"},gy={gateTitle:"Verify to See Full Details",gateBody:"Confirm the mobile number linked to this shipment to see recipient details and proof of delivery.",verifyButton:"Verify",verified:"Verified — showing full shipment details.",verifyFailed:"That code didn't match. Check it and try again.",linkExpired:"That verification link has expired. Request a new one to see full details.",linkUsed:"That verification link has already been used.",linkInvalid:"That verification link isn't valid for this shipment."},xy={title:"Travel History",colTime:"Time",colActivity:"Activity",colLocation:"Location",latest:"Latest",viewFullHistory:"View Full History",showLess:"Show Less"},yy={title:"Proof of Delivery",photoAlt:"Delivery photo",signedBy:"Signed by {{initial}}",photoUnavailable:"Delivery photo unavailable"},vy={title:"Get Help",contactSupport:"Contact Support",startReturn:"Start a Return"},by={pageTitle:{entry:"Track a delivery — SenditGo",result:"Tracking result — SenditGo",consignee:"Track your delivery — SenditGo"},entry:{eyebrow:"Delivery tracking",title:"Track a delivery.",subtitle:"Enter your tracking number to see the latest delivery status. No account needed.",inputLabel:"Tracking number",placeholder:"Tracking number",submit:"Track",hint:"Tracking numbers are up to 9 letters and numbers, with no spaces or dashes.",submitBusy:"Tracking…",busyStatus:"Looking up your delivery…"},result:{back:"Track another delivery",title:"Tracking result.",subtitle:"Get the latest delivery status and tracking details for your shipment."},consignee:{eyebrow:"For recipients",title:"Track your delivery.",subtitle:"No account is required to see the current delivery status.",historyTitle:"Delivery history",historyToggle_one:"View details ({{count}} update)",historyToggle_other:"View details ({{count}} updates)",resultStatus:"{{status}}. {{label}}: {{value}}"},summary:{trackingNumber:"Tracking number",copy:"Copy tracking number",copied:"Tracking number copied",progress:"Delivery progress",copyFailed:"Couldn't copy. Select the tracking number to copy it."},chip:{cancelled:"Cancelled"},milestone:{orderCreated:"Order created",pickedUp:"Picked up",awaitingPickup:"Awaiting pickup",inTransit:"In transit",delivered:"Delivered",preparing:"Preparing"},milestoneState:{done:"completed",current:"current step",future:"not started"},eta:{label:"Estimated delivery",deliveredLabel:"Delivered",cancelledLabel:"Cancelled",today:"Today",tomorrow:"Tomorrow",toBeConfirmed:"To be confirmed",toBeConfirmedNote:"We'll show a date once the delivery is scheduled.",cancelledNote:"This delivery was cancelled and will not arrive.",todayAM:"This morning",todayPM:"This afternoon",tomorrowAM:"Tomorrow morning",tomorrowPM:"Tomorrow afternoon",dayAM:"{{day}}, morning",dayPM:"{{day}}, afternoon",previouslyExpected:"Previously expected {{date}}"},latest:{label:"Latest update",none:"No updates yet"},activity:{order_created:"Order created",scheduled:"Delivery scheduled",picked_up:"Picked up",arrived:"Arrived at destination",signed:"Delivery signed for",completed:"Delivery completed",rescheduled:"Delivery rescheduled",item_exception:"Item issue reported",cancelled:"Order cancelled"},details:{title:"Delivery details",trackingNumber:"Tracking number",shipDate:"Ship date",carrier:"Carrier",origin:"Origin",destination:"Destination",packages:"Packages",proof:"Proof of delivery",notShipped:"Not shipped yet",packageCount_one:"{{count}} package",packageCount_other:"{{count}} packages",affected_one:"{{count}} affected by an issue",affected_other:"{{count}} affected by an issue",proofType:{signature:"Signed for on delivery",contactless:"Contactless delivery",qrcode:"Confirmed by QR scan"}},history:{title:"Tracking history",date:"Date & time",activity:"Activity",location:"Location",empty:"No tracking updates yet."},exceptions:{title:"Delivery updates",rescheduled_one:"Delivery was rescheduled.",rescheduled_other:"Delivery was rescheduled {{count}} times.",items_missing:"Some items were reported missing.",items_damaged:"Some items were reported damaged.",wrong_delivery:"An item was reported as delivered to the wrong place.",cancelled:"The delivery was cancelled.",help:"Questions about this delivery? Our support team can help.",contact:"Contact support"},help:{title:"Need help?",body:"If you have any questions about this delivery, our team is here to help.",contact:"Contact support"},error:{format:"Check the tracking number. It should be up to 9 letters and numbers, with no spaces or dashes.",notFound:"We couldn't find a delivery with that tracking number. Check the number and try again.",rateLimited:"Too many lookups in a short time. Wait a minute, then try again.",unavailable:"Tracking is unavailable right now. Please try again shortly.",retry:"Try again",loading:"Loading delivery status"},nextStop:{public:{eyebrowLive:"Live map · next stop",eyebrowNext:"This address is the next stop",title:"The driver is on the way",mapRegion:"Map of the driver approaching the delivery address",mapUnavailable:"Map unavailable. The arrival time is shown here."},receiver:{eyebrowLive:"Live map · you're next",eyebrowNext:"You're the next stop",title:"Your driver is on the way",mapRegion:"Map of your driver approaching your delivery address",mapUnavailable:"Map unavailable. Your arrival time is shown here."},liveLocation:"Live location",etaMinutes_one:"About {{count}} minute away",etaMinutes_other:"About {{count}} minutes away",etaSoon:"Arriving soon",updatedNow:"Location updated just now",updated_one:"Location updated {{count}} minute ago",updated_other:"Location updated {{count}} minutes ago",stale_one:"Live location paused · last update {{count}} minute ago",stale_other:"Live location paused · last update {{count}} minutes ago",unavailable:"Live location is unavailable right now.",ended:"Live location has ended for this delivery.",errorRefused:"Live location is unavailable right now.",errorFailed:"Couldn't load the live location.",rateLimited:"Too many requests. Wait a minute, then try again.",retry:"Try again",sample:"Sample location · not a real driver",recenter:"Recenter"}},wy={step:uy,headline:hy,activity:py,exception:fy,facts:my,tier2:gy,timeline:xy,pod:yy,help:vy,guest:by},go=["en"],ky={en:"EN"},Sy=(()=>{try{const t=localStorage.getItem("lang");return t&&go.includes(t)?t:"en"}catch{return"en"}})();ze.use(ex).init({lng:Sy,fallbackLng:"en",interpolation:{escapeValue:!1},resources:{en:{common:Jx,portal:ly,statusCode:dy,salesOrderStatusId:cy,tracking:wy}}});function Ey(t){ze.changeLanguage(t);try{localStorage.setItem("lang",t)}catch{}}const fc=t=>{let e;const n=new Set,r=(d,u)=>{const h=typeof d=="function"?d(e):d;if(!Object.is(h,e)){const p=e;e=u??(typeof h!="object"||h===null)?h:Object.assign({},e,h),n.forEach(m=>m(e,p))}},i=()=>e,l={setState:r,getState:i,getInitialState:()=>c,subscribe:d=>(n.add(d),()=>n.delete(d))},c=e=t(r,i,l);return l},_y=(t=>t?fc(t):fc),jy=t=>t;function Ty(t,e=jy){const n=W.useSyncExternalStore(t.subscribe,W.useCallback(()=>e(t.getState()),[t,e]),()=>e(t.getInitialState()));return W.useDebugValue(n),n}const mc=t=>{const e=_y(t),n=r=>Ty(e,r);return Object.assign(n,e),n},Iy=(t=>t?mc(t):mc);function Ry(t,e){let n;try{n=t()}catch{return}return{getItem:i=>{var s;const o=c=>c===null?null:JSON.parse(c,void 0),l=(s=n.getItem(i))!=null?s:null;return l instanceof Promise?l.then(o):o(l)},setItem:(i,s)=>n.setItem(i,JSON.stringify(s,void 0)),removeItem:i=>n.removeItem(i)}}const xo=t=>e=>{try{const n=t(e);return n instanceof Promise?n:{then(r){return xo(r)(n)},catch(r){return this}}}catch(n){return{then(r){return this},catch(r){return xo(r)(n)}}}},Cy=(t,e)=>(n,r,i)=>{let s={storage:Ry(()=>window.localStorage),partialize:v=>v,version:0,merge:(v,j)=>({...j,...v}),...e},o=!1,l=0;const c=new Set,d=new Set;let u=s.storage;if(!u)return t((...v)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),n(...v)},r,i);const h=()=>{const v=s.partialize({...r()});return u.setItem(s.name,{state:v,version:s.version})},p=i.setState;i.setState=(...v)=>(p(...v),h());const m=t((...v)=>(n(...v),h()),r,i);i.getInitialState=()=>m;let x;const y=()=>{var v,j;if(!u)return;const E=++l;o=!1,c.forEach(b=>{var I;return b((I=r())!=null?I:m)});const w=((j=s.onRehydrateStorage)==null?void 0:j.call(s,(v=r())!=null?v:m))||void 0;return xo(u.getItem.bind(u))(s.name).then(b=>{if(b)if(typeof b.version=="number"&&b.version!==s.version){if(s.migrate){const I=s.migrate(b.state,b.version);return I instanceof Promise?I.then(R=>[!0,R]):[!0,I]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,b.state];return[!1,void 0]}).then(b=>{var I;if(E!==l)return;const[R,$]=b;if(x=s.merge($,(I=r())!=null?I:m),n(x,!0),R)return h()}).then(()=>{E===l&&(w==null||w(r(),void 0),x=r(),o=!0,d.forEach(b=>b(x)))}).catch(b=>{E===l&&(w==null||w(void 0,b))})};return i.persist={setOptions:v=>{s={...s,...v},v.storage&&(u=v.storage)},clearStorage:()=>{++l,u==null||u.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>y(),hasHydrated:()=>o,onHydrate:v=>(c.add(v),()=>{c.delete(v)}),onFinishHydration:v=>(d.add(v),()=>{d.delete(v)})},s.skipHydration||y(),x||m},Ay=Cy;function Th(t,e){return function(){return t.apply(e,arguments)}}const{toString:Oy}=Object.prototype,{getPrototypeOf:qt}=Object,{iterator:bi,toStringTag:Ih}=Symbol,Kt=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),Rh=t=>typeof t=="string"&&(t==="__proto__"||t==="constructor"||t==="prototype"),Ks=(t,e,n)=>t===Object.prototype||!n&&e===null,Py=t=>{if(!Object.isExtensible(t))return!1;const e=Object.getOwnPropertyNames(t);return Object.getOwnPropertySymbols&&e.push(...Object.getOwnPropertySymbols(t)),e.every(n=>{if(Rh(n))return!1;const r=Object.getOwnPropertyDescriptor(t,n);return!!r&&r.configurable&&r.writable===!0})},Qo=(t,e)=>{let n=t;const r=[];for(;n!=null;){if(r.indexOf(n)!==-1)return!1;r.push(n);const i=qt(n);if(Ks(n,i,n===t))return!1;if(Kt(n,e))return!0;n=i}return!1},Ny=(t,e)=>t!=null&&Qo(t,e)?t[e]:void 0,Ly=t=>{if(t==null||typeof t!="object"&&typeof t!="function")return t;const e=qt(t);if(e===null&&Py(t))return t;const n=Object.create(null),r=Object.create(null),i=[];let s=t;for(;s!=null&&i.indexOf(s)===-1;){i.push(s);const o=s===t?e:qt(s);if(Ks(s,o,s===t))break;const l=Object.getOwnPropertyNames(s);Object.getOwnPropertySymbols&&l.push(...Object.getOwnPropertySymbols(s));for(const c of l)Rh(c)||Kt(r,c)||(n[c]=t[c],r[c]=!0);s=o}return n},el=(t=>e=>{const n=Oy.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),ut=t=>(t=t.toLowerCase(),e=>el(e)===t),Gs=t=>e=>typeof e===t,{isArray:Kn}=Array,Gn=Gs("undefined");function jr(t){return t!==null&&!Gn(t)&&t.constructor!==null&&!Gn(t.constructor)&&et(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Ch=ut("ArrayBuffer");function $y(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Ch(t.buffer),e}const Dy=Gs("string"),et=Gs("function"),My=Gs("number"),Tr=t=>t!==null&&typeof t=="object",Fy=t=>t===!0||t===!1,Yi=t=>{if(!Tr(t))return!1;const e=qt(t);return(e===null||e===Object.prototype||qt(e)===null)&&(Ks(t,e,!0)||!Kt(t,Ih)&&!Kt(t,bi))},Uy=t=>{if(!Tr(t)||jr(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},By=ut("Date"),zy=ut("File"),Hy=t=>!!(t&&typeof t.uri<"u"),Vy=t=>t&&typeof t.getParts<"u",Wy=ut("Blob"),qy=ut("FileList"),Ky=ut("Set"),Gy=t=>Tr(t)&&et(t.pipe);function Zy(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const gc=Zy(),xc=typeof gc.FormData<"u"?gc.FormData:void 0,Yy=t=>{if(!t)return!1;if(xc&&t instanceof xc)return!0;const e=qt(t);if(!e||e===Object.prototype||!et(t.append))return!1;const n=el(t);return n==="formdata"||n==="object"&&et(t.toString)&&t.toString()==="[object FormData]"},Jy=ut("URLSearchParams"),[Xy,Qy,ev,tv]=["ReadableStream","Request","Response","Headers"].map(ut),nv=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function wi(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,i;if(typeof t!="object"&&(t=[t]),Kn(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{if(jr(t))return;const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let l;for(r=0;r<o;r++)l=s[r],e.call(null,t[l],l,t)}}function rv(t,e){if(jr(t))return null;e=e.toLowerCase();const n=Object.keys(t);let r=n.length,i;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const Mn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Ah=t=>!Gn(t)&&t!==Mn;function yo(...t){const{caseless:e,skipUndefined:n}=Ah(this)&&this||{},r={},i=e?Object.create(null):null,s=(o,l)=>{if(l==="__proto__"||l==="constructor"||l==="prototype")return;let c=l;if(i&&typeof l=="string"){const u=l.toLowerCase(),h=i[u];h!==void 0&&Kt(r,h)?c=h:i[u]=l}const d=Kt(r,c)?r[c]:void 0;Yi(d)&&Yi(o)?r[c]=yo(d,o):Yi(o)?r[c]=yo({},o):Kn(o)?r[c]=o.slice():(!n||!Gn(o))&&(r[c]=o)};for(let o=0,l=t.length;o<l;o++){const c=t[o];if(!c||jr(c)||(wi(c,s),typeof c!="object"||Kn(c)||!Object.getOwnPropertySymbols))continue;const d=Object.getOwnPropertySymbols(c);for(let u=0;u<d.length;u++){const h=d[u];mv.call(c,h)&&s(c[h],h)}}return r}const iv=(t,e,n,{allOwnKeys:r}={})=>(wi(e,(i,s)=>{n&&et(i)?Object.defineProperty(t,s,{__proto__:null,value:Th(i,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,s,{__proto__:null,value:i,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),t),sv=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),av=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),Object.defineProperty(t.prototype,"constructor",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{__proto__:null,value:e.prototype}),n&&Object.assign(t.prototype,n)},ov=(t,e,n,r)=>{let i,s,o;const l={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)o=i[s],(!r||r(o,t,e))&&!l[o]&&(e[o]=t[o],l[o]=!0);t=n!==!1&&qt(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},lv=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},cv=t=>{if(!t)return null;if(Kn(t))return t;let e=t.length;if(!Number.isSafeInteger(e)||e<0||e>4294967295)return null;const n=new Set,r=new Set;let i=t;for(;i!=null&&n.size<e;){if(r.has(i))return null;r.add(i);const o=qt(i);if(Ks(i,o,i===t))break;Object.getOwnPropertyNames(i).forEach(l=>{const c=+l;Number.isInteger(c)&&c>=0&&c<e&&String(c)===l&&Kt(i,l)&&n.add(c)}),i=o}if(n.size!==e)return null;const s=new Array(e);for(;e-- >0;)s[e]=t[e];return s},dv=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&qt(Uint8Array)),uv=(t,e)=>{const r=(t&&t[bi]).call(t);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(t,s[0],s[1])}},hv=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},pv=ut("HTMLFormElement"),fv=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),{propertyIsEnumerable:mv}=Object.prototype,gv=ut("RegExp"),Oh=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};wi(n,(i,s)=>{let o;(o=e(i,s,t))!==!1&&(r[s]=o||i)}),Object.defineProperties(t,r)},xv=t=>{Oh(t,(e,n)=>{if(et(t)&&["arguments","caller","callee"].includes(n))return!1;const r=t[n];if(et(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},yv=(t,e)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return Kn(t)?r(t):r(String(t).split(e)),n},vv=()=>{},bv=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function wv(t){return!!(t&&et(t.append)&&t[Ih]==="FormData"&&t[bi])}const kv=t=>{const e=new WeakSet,n=r=>{if(Tr(r)){if(e.has(r))return;if(jr(r))return r;if(!("toJSON"in r)){e.add(r);let i;if(Ky(r)){i=[];for(const s of r){const o=n(s);!Gn(o)&&i.push(o)}}else i=Kn(r)?[]:{},wi(r,(s,o)=>{const l=n(s);!Gn(l)&&(i[o]=l)});return e.delete(r),i}}return r};return n(t)},Sv=ut("AsyncFunction"),Ev=t=>t&&(Tr(t)||et(t))&&et(t.then)&&et(t.catch),Ph=((t,e)=>t?setImmediate:e?((n,r)=>(Mn.addEventListener("message",({source:i,data:s})=>{i===Mn&&s===n&&r.length&&r.shift()()},!1),i=>{r.push(i),Mn.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",et(Mn.postMessage)),_v=typeof queueMicrotask<"u"?queueMicrotask.bind(Mn):typeof process<"u"&&process.nextTick||Ph,Nh=t=>t!=null&&et(t[bi]),jv=t=>t!=null&&Qo(t,bi)&&Nh(t),g={isArray:Kn,isArrayBuffer:Ch,isBuffer:jr,isFormData:Yy,isArrayBufferView:$y,isString:Dy,isNumber:My,isBoolean:Fy,isObject:Tr,isPlainObject:Yi,isEmptyObject:Uy,isReadableStream:Xy,isRequest:Qy,isResponse:ev,isHeaders:tv,isUndefined:Gn,isDate:By,isFile:zy,isReactNativeBlob:Hy,isReactNative:Vy,isBlob:Wy,isRegExp:gv,isFunction:et,isStream:Gy,isURLSearchParams:Jy,isTypedArray:dv,isFileList:qy,forEach:wi,merge:yo,extend:iv,trim:nv,stripBOM:sv,inherits:av,toFlatObject:ov,kindOf:el,kindOfTest:ut,endsWith:lv,toArray:cv,forEachEntry:uv,matchAll:hv,isHTMLForm:pv,hasOwnProperty:Kt,hasOwnProp:Kt,hasOwnInPrototypeChain:Qo,getSafeProp:Ny,toSafeFlatObject:Ly,reduceDescriptors:Oh,freezeMethods:xv,toObjectSet:yv,toCamelCase:fv,noop:vv,toFiniteNumber:bv,findKey:rv,global:Mn,isContextDefined:Ah,isSpecCompliantForm:wv,toJSONObject:kv,isAsyncFn:Sv,isThenable:Ev,setImmediate:Ph,asap:_v,isIterable:Nh,isSafeIterable:jv},Tv=g.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Iv=t=>{const e=Object.create(null);let n,r,i;return t&&t.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim();const l=g.hasOwnProp(e,n);!n||l&&g.hasOwnProp(Tv,n)||(n==="set-cookie"?l?e[n].push(r):e[n]=[r]:e[n]=l?e[n]+", "+r:r)}),e};function Rv(t){let e=0,n=t.length;for(;e<n;){const r=t.charCodeAt(e);if(r!==9&&r!==32)break;e+=1}for(;n>e;){const r=t.charCodeAt(n-1);if(r!==9&&r!==32)break;n-=1}return e===0&&n===t.length?t:t.slice(e,n)}const Cv=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),Av=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function tl(t,e){return g.isArray(t)?t.map(n=>tl(n,e)):Rv(String(t).replace(e,""))}const Ov=t=>tl(t,Cv),Pv=t=>tl(t,Av);function Lh(t){const e=Object.create(null);return g.forEach(t.toJSON(),(n,r)=>{e[r]=Pv(n)}),e}const yc=Symbol("internals");function Ur(t){return t&&String(t).trim().toLowerCase()}function Ji(t){return t===!1||t==null?t:g.isArray(t)?t.map(Ji):Ov(String(t))}function Nv(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const Lv=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function Sa(t){let e=0,n=t.length;for(;e<n;){const r=t.charCodeAt(e);if(r!==9&&r!==32)break;e+=1}for(;n>e;){const r=t.charCodeAt(n-1);if(r!==9&&r!==32)break;n-=1}return e===0&&n===t.length?t:t.slice(e,n)}function $v(t){const e=t.length-1;if(e<1||t.charCodeAt(0)!==34||t.charCodeAt(e)!==34)return t;let n="";for(let r=1;r<e;r++){const i=t.charCodeAt(r);if(i===34||i===92&&(r+=1,r>=e))return t;n+=t[r]}return n}function Dv(t){const e=Object.create(null),n=String(t);let r=0,i=!1,s=!1;function o(l){const c=Sa(n.slice(r,l)),d=c.indexOf("=");if(d<1)return;const u=Sa(c.slice(0,d));if(!Lv.test(u))return;const h=u.toLowerCase();if(h==="__proto__"||h==="constructor"||h==="prototype")return;const p=Sa(c.slice(d+1));e[h]=$v(p)}for(let l=0;l<n.length;l++){const c=n.charCodeAt(l);i?s?s=!1:c===92?s=!0:c===34&&(i=!1):c===34?i=!0:(c===44||c===59)&&(o(l),r=l+1)}return o(n.length),e}const Mv=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim()),Fv="__Proto__",vc=t=>t==="__proto__"?Fv:t;function Ea(t,e,n,r,i){if(g.isFunction(r))return r.call(t,e,n);if(i&&(e=n),!!g.isString(e)){if(g.isString(r))return e.indexOf(r)!==-1;if(g.isRegExp(r))return r.test(e)}}function Uv(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function Bv(t,e){const n=g.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{__proto__:null,value:function(i,s,o){return this[r].call(this,e,i,s,o)},configurable:!0})})}let $e=class{constructor(e){e&&this.set(e)}set(e,n,r){const i=this;function s(l,c,d){const u=Ur(c);if(!u)return;const h=g.findKey(i,u);(!h||i[h]===void 0||d===!0||d===void 0&&i[h]!==!1)&&(i[vc(h||c)]=Ji(l))}const o=(l,c)=>g.forEach(l,(d,u)=>s(d,u,c));if(g.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(g.isString(e)&&(e=e.trim())&&!Mv(e))o(Iv(e),n);else if(g.isObject(e)&&g.isSafeIterable(e)){let l=Object.create(null),c,d;for(const u of e){if(!g.isArray(u))throw new TypeError("Object iterator must return a key-value pair");d=u[0],g.hasOwnProp(l,d)?(c=l[d],l[d]=g.isArray(c)?[...c,u[1]]:[c,u[1]]):l[d]=u[1]}o(l,n)}else e!=null&&s(n,e,r);return this}get(e,n){if(e=Ur(e),e){const r=g.findKey(this,e);if(r){const i=this[r];if(!n)return i;if(n===!0)return Nv(i);if(g.isFunction(n))return n.call(this,i,r);if(g.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Ur(e),e){const r=g.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Ea(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let i=!1;function s(o){if(o=Ur(o),o){const l=g.findKey(r,o);l&&(!n||Ea(r,r[l],l,n))&&(delete r[l],i=!0)}}return g.isArray(e)?e.forEach(s):s(e),i}clear(e){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!e||Ea(this,this[s],s,e,!0))&&(delete this[s],i=!0)}return i}normalize(e){const n=this,r=Object.create(null);return g.forEach(this,(i,s)=>{const o=g.findKey(r,s);if(o){n[o]=Ji(i),delete n[s];return}const l=vc(e?Uv(s):String(s).trim());l!==s&&delete n[s],n[l]=Ji(i),r[l]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return g.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=e&&g.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){const e=this.get("set-cookie");return g.isArray(e)?e:e==null||e===!1?[]:[e]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static parseParameters(e){return Dv(e)}static concat(e,...n){const r=new this(e);return n.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[yc]=this[yc]={accessors:{}}).accessors,i=this.prototype;function s(o){const l=Ur(o);r[l]||(Bv(i,o),r[l]=!0)}return g.isArray(e)?e.forEach(s):s(e),this}};$e.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);g.reduceDescriptors($e.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});g.freezeMethods($e);const hs="[REDACTED ****]";function zv(t){if(g.hasOwnProp(t,"toJSON"))return!0;let e=Object.getPrototypeOf(t);for(;e&&e!==Object.prototype;){if(g.hasOwnProp(e,"toJSON"))return!0;e=Object.getPrototypeOf(e)}return!1}function Hv(t,e){const n=new Set(e.map(s=>String(s).toLowerCase())),r=[],i=s=>{if(s===null||typeof s!="object"||g.isBuffer(s))return s;if(r.indexOf(s)!==-1)return;s instanceof $e&&(s=s.toJSON()),r.push(s);let o;if(g.isArray(s))o=[],s.forEach((l,c)=>{const d=i(l);g.isUndefined(d)||(o[c]=d)});else{if(!g.isPlainObject(s)&&zv(s))return r.pop(),s;o=Object.create(null);for(const[l,c]of Object.entries(s)){const d=n.has(l.toLowerCase())?hs:i(c);g.isUndefined(d)||(o[l]=d)}}return r.pop(),o};return i(t)}function bc(t){try{return String(t)}catch{return""}}function Vv(t){return t.errors.map(n=>{try{return n&&n.message?bc(n.message):bc(n)}catch{return""}}).filter(Boolean).join("; ")||t.name||"AggregateError"}const Wv=`
Caused by: `,vo=Symbol("causeStack");function qv(t,e){const n=g.hasOwnProp(t,vo)&&t[vo];return n&&e.endsWith(n)?e.length-n.length:-1}function Kv(t,e){try{const n=e&&e.stack;if(typeof n!="string"||!n)return;const r=t.stack;if(typeof r!="string"||!r)return;const i=Wv+n;t.stack=r+i,Object.defineProperty(t,vo,{__proto__:null,value:i})}catch{}}let A=class $h extends Error{static from(e,n,r,i,s,o){let l=e.message;!l&&g.isArray(e.errors)&&e.errors.length&&(l=Vv(e));const c=new $h(l,n||e.code,r,i,s);return Object.defineProperty(c,"cause",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),c.name=e.name,Kv(c,e),e.status!=null&&c.status==null&&(c.status=e.status),o&&Object.assign(c,o),c}constructor(e,n,r,i,s){super(e),Object.defineProperty(this,"message",{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),r&&(this.config=r),i&&(this.request=i),s&&(this.response=s,this.status=s.status)}toJSON(){const e=this.config,n=e&&g.hasOwnProp(e,"redact")?e.redact:void 0,r=g.isArray(n)&&n.length>0?Hv(e,n):g.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:r,code:this.code,status:this.status}}};A.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";A.ERR_BAD_OPTION="ERR_BAD_OPTION";A.ECONNABORTED="ECONNABORTED";A.ETIMEDOUT="ETIMEDOUT";A.ECONNREFUSED="ECONNREFUSED";A.ERR_NETWORK="ERR_NETWORK";A.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";A.ERR_DEPRECATED="ERR_DEPRECATED";A.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";A.ERR_BAD_REQUEST="ERR_BAD_REQUEST";A.ERR_CANCELED="ERR_CANCELED";A.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";A.ERR_INVALID_URL="ERR_INVALID_URL";A.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const Gv=null,Dh=100;function bo(t){return g.isPlainObject(t)||g.isArray(t)}function Mh(t){return g.endsWith(t,"[]")?t.slice(0,-2):t}function _a(t,e,n){return t?t.concat(e).map(function(i,s){return i=Mh(i),!n&&s?"["+i+"]":i}).join(n?".":""):e}function Zv(t){return g.isArray(t)&&!t.some(bo)}const Yv=g.toFlatObject(g,{},null,function(e){return/^is[A-Z]/.test(e)});function Zs(t,e,n){if(!g.isObject(t))throw new TypeError("target must be an object");e=e||new FormData;const r=(E,w)=>{const b=g.getSafeProp(n,E);return g.isUndefined(b)?w:b},i=r("metaTokens",!0),s=r("visitor")||y,o=r("dots",!1),l=r("indexes",!1),c=r("Blob")||typeof Blob<"u"&&Blob,d=r("maxDepth",Dh),u=c&&g.isSpecCompliantForm(e),h=[];if(!g.isFunction(s))throw new TypeError("visitor must be a function");function p(E){if(E===null)return"";if(g.isDate(E))return E.toISOString();if(g.isBoolean(E))return E.toString();if(!u&&g.isBlob(E))throw new A("Blob is not supported. Use a Buffer instead.");if(g.isArrayBuffer(E)||g.isTypedArray(E)){if(u&&typeof c=="function")return new c([E]);throw new A("Blob is not supported. Use a Buffer instead.",A.ERR_NOT_SUPPORT)}return E}function m(E){if(E>d)throw new A("Object is too deeply nested ("+E+" levels). Max depth: "+d,A.ERR_FORM_DATA_DEPTH_EXCEEDED)}function x(E,w){if(d===1/0)return JSON.stringify(E);const b=[];return JSON.stringify(E,function(R,$){if(!g.isObject($))return $;for(;b.length&&b[b.length-1]!==this;)b.pop();return b.push($),m(w+b.length-1),$})}function y(E,w,b){let I=E;if(g.isReactNative(e)&&g.isReactNativeBlob(E))return e.append(_a(b,w,o),p(E)),!1;if(E&&!b&&typeof E=="object"){if(g.endsWith(w,"{}"))w=i?w:w.slice(0,-2),E=x(E,1);else if(g.isArray(E)&&Zv(E)||(g.isFileList(E)||g.endsWith(w,"[]"))&&(I=g.toArray(E)))return w=Mh(w),I.forEach(function($,N){!(g.isUndefined($)||$===null)&&e.append(l===!0?_a([w],N,o):l===null?w:w+"[]",p($))}),!1}return bo(E)?!0:(e.append(_a(b,w,o),p(E)),!1)}const v=Object.assign(Yv,{defaultVisitor:y,convertValue:p,isVisitable:bo});function j(E,w,b=0){if(!g.isUndefined(E)){if(m(b),h.indexOf(E)!==-1)throw new Error("Circular reference detected in "+w.join("."));h.push(E),g.forEach(E,function(R,$){(!(g.isUndefined(R)||R===null)&&s.call(e,R,g.isString($)?$.trim():$,w,v))===!0&&j(R,w?w.concat($):[$],b+1)}),h.pop()}}if(!g.isObject(t))throw new TypeError("data must be an object");return j(t),e}function wc(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(t).replace(/[!'()~]|%20/g,function(r){return e[r]})}function nl(t,e){this._pairs=[],t&&Zs(t,this,e)}const Fh=nl.prototype;Fh.append=function(e,n){this._pairs.push([e,n])};Fh.toString=function(e){const n=e?r=>e.call(this,r,wc):wc;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function Jv(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Uh(t,e,n){if(!e)return t;t=t||"";const r=g.isFunction(n)?{serialize:n}:n,i=g.getSafeProp(r,"encode")||Jv,s=g.getSafeProp(r,"serialize");let o;if(s?o=s(e,r):o=g.isURLSearchParams(e)?e.toString():new nl(e,r).toString(i),o){const l=t.indexOf("#");l!==-1&&(t=t.slice(0,l)),t+=(t.indexOf("?")===-1?"?":"&")+o}return t}const Br=Symbol("internals");function Bh(t){return t?t.length:0}function kc(t){if(t)for(;t.length&&t[t.length-1]===null;)t.pop()}function Xv(t){return typeof t=="string"&&t!==""&&String(Number(t))===t?Number(t):t}function zr(t,e){const n=t.handlers,r=Bh(n);n!==e.handlersRef?(e.handlersRef=n,e.handlerEntries.clear()):r!==e.handlersLength&&(r?e.handlerEntries.forEach(function(s,o){n[s.index]!==s.handler&&e.handlerEntries.delete(o)}):e.handlerEntries.clear()),e.handlersLength=r}class Sc{constructor(){this.handlers=[],this[Br]={handlersRef:this.handlers,handlersLength:this.handlers.length,handlerEntries:new Map,iterationDepth:0,nextId:0}}use(e,n,r){const i={fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null},s=this[Br];this.handlers==null&&(this.handlers=[]),zr(this,s);const o=s.nextId++;return this.handlers.push(i),s.handlerEntries.set(o,{handler:i,index:this.handlers.length-1}),s.handlersLength=this.handlers.length,o}eject(e){const n=this[Br];zr(this,n);const r=Xv(e),i=n.handlerEntries.get(r);if(i){if(n.handlerEntries.delete(r),this.handlers[i.index]!==i.handler)return;this.handlers[i.index]=null,n.iterationDepth||(kc(this.handlers),n.handlersLength=this.handlers.length)}}clear(){this.handlers&&(this.handlers=[],zr(this,this[Br]))}forEach(e){const n=this[Br];zr(this,n),n.iterationDepth++;try{g.forEach(this.handlers,function(i){i!==null&&e(i)})}finally{--n.iterationDepth||(zr(this,n),kc(this.handlers),n.handlersLength=Bh(this.handlers))}}}const rl={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0,encodeBasicAuthUsername:!1},Qv=typeof URLSearchParams<"u"?URLSearchParams:nl,eb=typeof FormData<"u"?FormData:null,tb=typeof Blob<"u"?Blob:null,nb={isBrowser:!0,classes:{URLSearchParams:Qv,FormData:eb,Blob:tb},protocols:["http","https","file","blob","url","data"]},il=typeof window<"u"&&typeof document<"u",wo=typeof navigator=="object"&&navigator||void 0,rb=il&&(!wo||["ReactNative","NativeScript","NS"].indexOf(wo.product)<0),ib=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",sb=il&&window.location.href||"http://localhost",ab=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:il,hasStandardBrowserEnv:rb,hasStandardBrowserWebWorkerEnv:ib,navigator:wo,origin:sb},Symbol.toStringTag,{value:"Module"})),Pe={...ab,...nb};function ob(t,e){return Zs(t,new Pe.classes.URLSearchParams,{visitor:function(n,r,i,s){return Pe.isNode&&g.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)},...e})}const Ec=Dh;function zh(t){if(t>Ec)throw new A("FormData field is too deeply nested ("+t+" levels). Max depth: "+Ec,A.ERR_FORM_DATA_DEPTH_EXCEEDED)}function lb(t){const e=[],n=/[^.[\]]+|\[([^.[\]]*)]/g;let r;for(;(r=n.exec(t))!==null;)zh(e.length),e.push(r[0]==="[]"?"":r[1]||r[0]);return e}function Hh(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}function Vh(t){if(!g.isArray(t))return t;const e=Object.keys(t);return e.length!==t.length||e.some((n,r)=>n!==String(r))?Hh(t):t}function cb(t){const e=[t];for(;e.length;){const n=e.pop();Object.keys(n).forEach(r=>{const i=n[r]=Vh(n[r]);(g.isArray(i)||g.isPlainObject(i))&&e.push(i)})}return t}function Wh(t){function e(n,r,i,s){zh(s);let o=n[s++];if(o==="__proto__")return!0;const l=Number.isFinite(+o),c=s>=n.length;return o=!o&&g.isArray(i)?i.length:o,c?(g.hasOwnProp(i,o)?(i[o]=Vh(i[o]),i[o]=g.isArray(i[o])?i[o].concat(r):[i[o],r]):i[o]=r,!l):((!g.hasOwnProp(i,o)||!g.isObject(i[o]))&&(i[o]=[]),e(n,r,i[o],s)&&g.isArray(i[o])&&(i[o]=Hh(i[o])),!l)}if(g.isFormData(t)&&g.isFunction(t.entries)){const n={};return g.forEachEntry(t,(r,i)=>{e(lb(r),i,n,0)}),cb(n)}return null}const qh=Object.freeze(["get","delete","head","options","post","put","patch","purge","link","unlink","query"]),ar=(t,e)=>t!=null&&g.hasOwnProp(t,e)?t[e]:void 0;function db(t,e,n){if(g.isString(t))try{return(e||JSON.parse)(t),g.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const ki={transitional:rl,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=g.isObject(e);if(s&&g.isHTMLForm(e)&&(e=new FormData(e)),g.isFormData(e))return i?JSON.stringify(Wh(e)):e;if(g.isArrayBuffer(e)||g.isBuffer(e)||g.isStream(e)||g.isFile(e)||g.isBlob(e)||g.isReadableStream(e))return e;if(g.isArrayBufferView(e))return e.buffer;if(g.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let l;if(s){const c=ar(this,"formSerializer");if(r.indexOf("application/x-www-form-urlencoded")>-1)return ob(e,c).toString();if((l=g.isFileList(e))||r.indexOf("multipart/form-data")>-1){const d=ar(this,"env"),u=d&&d.FormData;return Zs(l?{"files[]":e}:e,u&&new u,c)}}return s||i?(n.setContentType("application/json",!1),db(e)):e}],transformResponse:[function(e){const n=ar(this,"transitional")||ki.transitional,r=n&&n.forcedJSONParsing,i=ar(this,"responseType"),s=i==="json";if(g.isResponse(e)||g.isReadableStream(e))return e;if(e&&g.isString(e)&&(r&&!i||s)){const l=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e,ar(this,"parseReviver"))}catch(c){if(l)throw c.name==="SyntaxError"?A.from(c,A.ERR_BAD_RESPONSE,this,null,ar(this,"response")):c}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Pe.classes.FormData,Blob:Pe.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};g.forEach(qh,t=>{ki.headers[t]={}});function ja(t,e){const n=this||ki,r=e||n,i=$e.from(r.headers);let s=r.data;return g.forEach(t,function(l){s=l.call(n,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function Kh(t){return!!(t&&t.__CANCEL__)}let Si=class extends A{constructor(e,n,r){super(e??"canceled",A.ERR_CANCELED,n,r),this.name="CanceledError",this.__CANCEL__=!0}};function Gh(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new A("Request failed with status code "+n.status,n.status>=400&&n.status<500?A.ERR_BAD_REQUEST:A.ERR_BAD_RESPONSE,n.config,n.request,n))}const ub=/[\t\n\r]/g;function Zh(t){if(typeof t!="string")return t;let e=0;for(;e<t.length&&t.charCodeAt(e)<=32;)e++;return t.slice(e).replace(ub,"")}function Ta(t){const e=/^([-+\w]{1,25}):(?:\/\/)?/.exec(t);return e&&e[1].toLowerCase()||""}const _c=t=>{try{return decodeURIComponent(t)}catch{return t}},Yh=Pe.hasStandardBrowserEnv?{write(t,e,n,r,i,s,o){if(typeof document>"u")return;const l=[`${t}=${encodeURIComponent(e)}`];g.isNumber(n)&&l.push(`expires=${new Date(n).toUTCString()}`),g.isString(r)&&l.push(`path=${r}`),g.isString(i)&&l.push(`domain=${i}`),s===!0&&l.push("secure"),g.isString(o)&&l.push(`SameSite=${o}`),document.cookie=l.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie;if(!e)return null;const n=e.split(";");for(let r=0;r<n.length;r++){const i=n[r].replace(/^\s+/,""),s=i.indexOf("=");if(s!==-1&&i.slice(0,s)===t)return _c(i.slice(s+1))}return null},async readAsync(t){try{const e=typeof window<"u"&&window.cookieStore;if(e&&g.isFunction(e.get)){const n=await e.get(t);return n?_c(n.value):null}}catch{}return this.read(t)},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},async readAsync(){return null},remove(){}};function hb(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i=0,s=0,o;return e=e!==void 0?e:1e3,function(c){const d=Date.now(),u=r[s];o||(o=d),n[i]=c,r[i]=d;let h=s,p=0;for(;h!==i;)p+=n[h++],h=h%t;if(i=(i+1)%t,i===s&&(s=(s+1)%t),d-o<e)return;const m=u&&d-u;return m?Math.round(p*1e3/m):void 0}}function pb(t,e){let n=0,r=1e3/e,i,s;const o=(u,h=Date.now())=>{n=h,i=null,s&&(clearTimeout(s),s=null),t(...u)};return[(...u)=>{const h=Date.now(),p=h-n;p>=r?o(u,h):(i=u,s||(s=setTimeout(()=>{s=null,o(i)},r-p)))},()=>i&&o(i),(...u)=>o(u)]}const ps=(t,e,n=3)=>{let r=0;const i=hb(50,250);return pb(s=>{if(!s||!g.isNumber(s.loaded))return;const o=s.loaded,l=s.lengthComputable?s.total:void 0,c=Math.max(0,l!=null?Math.min(o,l):o),d=Math.max(0,c-r),u=i(d);r=Math.max(r,c);const h={loaded:c,total:l,progress:l?c/l:void 0,bytes:d,rate:u||void 0,estimated:u&&l?(l-c)/u:void 0,event:s,lengthComputable:l!=null,[e?"download":"upload"]:!0};t(h)},n)},jc=(t,e)=>{const n=t!=null;return[r=>e[0]({lengthComputable:n,total:t,loaded:r}),e[1]]},Tc=(t,e=g.asap)=>(...n)=>e(()=>t(...n)),fb=Pe.hasStandardBrowserEnv?(t=>e=>(e=new URL(e,document.baseURI||Pe.origin),t.protocol===e.protocol&&t.host===e.host&&t.port===e.port))(new URL(Pe.origin)):()=>!0;function mb(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function gb(t,e){if(!e)return t;let n=t.length;for(;n>0&&t.charCodeAt(n-1)===47;)n--;return t.slice(0,n)+"/"+e.replace(/^\/+/,"")}const xb=/^https?:(?!\/\/)/i;function yb(t){return t&&t.replace(/(^|&)([^=&]*=)?[^&]+/g,(e,n,r="")=>`${n}${r}${hs}`)}function vb(t){const e=t.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${hs}@`),n=e.indexOf("#"),i=(n===-1?e:e.slice(0,n)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${hs}`);return n===-1?i:`${i}#${yb(e.slice(n+1))}`}function Ic(t,e){if(typeof t=="string"){const n=Zh(t);if(xb.test(n))throw new A(`Invalid URL ${JSON.stringify(vb(n))}: missing "//" after protocol`,A.ERR_INVALID_URL,e)}}function Jh(t,e,n,r){Ic(e,r);let i=!mb(e);return t&&(i||n===!1)?(Ic(t,r),gb(t,e)):e}function bb(t){const e=[{value:t}],n=new WeakSet,r=new WeakSet;for(;e.length;){const{value:i,done:s}=e.pop();if(!g.isPlainObject(i)&&!g.isArray(i))continue;if(s){n.delete(i);continue}if(n.has(i))throw new A("Circular reference detected in params",A.ERR_BAD_OPTION_VALUE);if(r.has(i))continue;r.add(i),n.add(i),e.push({value:i,done:!0});const o=Object.keys(i);Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor&&Object.getOwnPropertySymbols(i).forEach(l=>{const c=Object.getOwnPropertyDescriptor(i,l);c&&c.enumerable&&o.push(l)}),o.forEach(l=>{if(l==="__proto__"||l==="constructor"||l==="prototype"){const c=Object.getOwnPropertyDescriptor(i,l);c&&g.hasOwnProp(c,"value")&&e.push({value:c.value})}else e.push({value:i[l]})})}}const Rc=t=>t instanceof $e?{...t}:t,ko=t=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(t).concat(Object.getOwnPropertySymbols(t).filter(e=>{const n=Object.getOwnPropertyDescriptor(t,e);return n&&n.enumerable})):Object.keys(t);function wb(t,e){const n=[],r=new WeakMap,i={};function s(l,c){if(!g.isPlainObject(c))return g.isArray(c)?c.slice():c;const d=g.isPlainObject(l)?l:i;let u=r.get(c);if(u||(u=new WeakMap,r.set(c,u)),u.has(d))return u.get(d);const h={};return u.set(d,h),n.push({base:d,source:c,result:h}),h}const o=g.isUndefined(e)?s(void 0,t):s(t,e);for(;n.length;){const{base:l,source:c,result:d}=n.pop(),u=new Set(ko(l)),h=new Set(ko(c));new Set([...u,...h]).forEach(m=>{if(m==="__proto__"||m==="constructor"||m==="prototype")return;const x=h.has(m),y=x?c[m]:void 0,v=(!x||g.isPlainObject(y))&&u.has(m)?l[m]:void 0;d[m]=x?s(v,y):s(void 0,v)})}return bb(o),o}function wn(t,e,n,r){return g.isPlainObject(t)&&g.isPlainObject(e)?g.merge.call({caseless:r},t,e):g.isPlainObject(e)?g.merge({},e):g.isArray(e)?e.slice():e}function Xh(t,e,n,r){if(g.isUndefined(e)){if(!g.isUndefined(t))return wn(void 0,t,n,r)}else return wn(t,e,n,r)}function Ia(t,e){if(!g.isUndefined(e))return wn(void 0,e)}function ge(t,e){if(g.isUndefined(e)){if(!g.isUndefined(t))return wn(void 0,t)}else return wn(void 0,e)}function kb(t,e,n){const r=g.hasOwnProp(e,"transitional")?e.transitional:void 0;if(!g.isUndefined(r))if(g.isPlainObject(r)){if(g.hasOwnProp(r,n))return r[n]}else return;const i=g.hasOwnProp(t,"transitional")?t.transitional:void 0;if(g.isPlainObject(i)&&g.hasOwnProp(i,n))return i[n]}function So(t,e,n,r,i){if(g.hasOwnProp(i,n))return wn(t,e);if(g.hasOwnProp(r,n))return wn(void 0,t)}function Sb(t,e,n){return Xh(Rc(t),Rc(e),n,!0)}const Eb=Object.freeze({__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0}),Cc={url:Ia,method:Ia,data:Ia,baseURL:ge,transformRequest:ge,transformResponse:ge,params:wb,paramsSerializer:ge,timeout:ge,timeoutErrorMessage:ge,withCredentials:ge,withXSRFToken:ge,adapter:ge,responseType:ge,xsrfCookieName:ge,xsrfHeaderName:ge,onUploadProgress:ge,onDownloadProgress:ge,decompress:ge,maxContentLength:ge,maxBodyLength:ge,beforeRedirect:ge,transport:ge,httpAgent:ge,httpsAgent:ge,cancelToken:ge,socketPath:ge,allowedSocketPaths:ge,responseEncoding:ge,validateStatus:So,headers:Sb};function Zn(t,e){t=t||{},e=e||{};const n=Object.create(null);Object.defineProperty(n,"hasOwnProperty",Eb);const r=ko({...t,...e});for(let i=0,s=r.length;i<s;i++){const o=r[i];if(o==="__proto__"||o==="constructor"||o==="prototype")continue;const l=g.hasOwnProp(Cc,o)?Cc[o]:Xh,c=g.hasOwnProp(t,o)?t[o]:void 0,d=g.hasOwnProp(e,o)?e[o]:void 0,u=l===So?l(c,d,o,t,e):l(c,d,o);g.isUndefined(u)&&l!==So||(n[o]=u)}return g.hasOwnProp(e,"validateStatus")&&g.isUndefined(e.validateStatus)&&kb(t,e,"validateStatusUndefinedResolves")===!1&&(g.hasOwnProp(t,"validateStatus")?n.validateStatus=wn(void 0,t.validateStatus):delete n.validateStatus),n}const _b=["content-type","content-length"];function jb(t,e,n){if(n!=="content-only"){t.set(e);return}Object.entries(e||{}).forEach(([r,i])=>{_b.includes(r.toLowerCase())&&t.set(r,i)})}const Ac=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16))),Tb=t=>Yh.read(t);function Qh(t,e=Tb){const n=Zn({},t),r=m=>g.hasOwnProp(n,m)?n[m]:void 0,i=r("data");let s=r("withXSRFToken");const o=r("xsrfHeaderName"),l=r("xsrfCookieName");let c=r("headers");const d=r("auth"),u=r("baseURL"),h=r("allowAbsoluteUrls"),p=r("url");if(n.headers=c=$e.from(c),n.url=Uh(Jh(u,p,h,n),r("params"),r("paramsSerializer")),d){const m=g.getSafeProp(d,"username")||"",x=g.getSafeProp(d,"password")||"",y=r("transitional"),v=y&&g.hasOwnProp(y,"encodeBasicAuthUsername")&&y.encodeBasicAuthUsername===!0;try{c.set("Authorization","Basic "+btoa((v?Ac(m):m)+":"+(x?Ac(x):"")))}catch(j){throw A.from(j,A.ERR_BAD_OPTION_VALUE,t)}}if(g.isFormData(i)){const m=g.getSafeProp(i,"getHeaders");Pe.hasStandardBrowserEnv||Pe.hasStandardBrowserWebWorkerEnv||g.isReactNative(i)?c.setContentType(void 0):g.isFunction(m)&&jb(c,m.call(i),r("formDataHeaderPolicy"))}if(Pe.hasStandardBrowserEnv&&(g.isFunction(s)&&(s=s(n)),s===!0||s==null&&fb(n.url))){const x=o&&l&&e(l);x&&c.set(o,x)}return n}const Ib=typeof XMLHttpRequest<"u",Rb=Ib&&function(t){return new Promise(function(n,r){let i;try{const N=Pe.hasStandardBrowserEnv&&typeof window<"u"&&window.cookieStore;i=N&&g.isFunction(N.get)}catch{}let s;const o=Qh(t,i?N=>(s=N,null):void 0);let l=o.data;const c=$e.from(o.headers).normalize();let{responseType:d,onUploadProgress:u,onDownloadProgress:h}=o,p,m,x,y,v,j,E;function w(){clearTimeout(m);try{v&&v()}catch(N){setTimeout(()=>{throw N})}try{j&&j()}catch(N){setTimeout(()=>{throw N})}b&&(y&&b.removeEventListener("progress",y),b.upload&&(x&&b.upload.removeEventListener("progress",x),v&&b.upload.removeEventListener("loadend",v))),o.cancelToken&&o.cancelToken.unsubscribe(p),o.signal&&o.signal.removeEventListener("abort",p)}let b=new XMLHttpRequest;b.open(o.method.toUpperCase(),o.url,!0),b.timeout=o.timeout;function I(N){if(!b)return;if(b.status===0&&(Ta(Zh(o.url))||Ta(Pe.origin))!=="file"&&!(b.responseURL&&b.responseURL.startsWith("file:"))){r(new A("Request aborted",A.ECONNABORTED,t,b)),w(),b=null;return}try{N?E&&E(N):j&&j()}catch(Z){setTimeout(()=>{throw Z})}if(!b)return;const D=$e.from("getAllResponseHeaders"in b&&b.getAllResponseHeaders()),F={data:!d||d==="text"||d==="json"?b.responseText:b.response,status:b.status,statusText:b.statusText,headers:D,config:t,request:b};Gh(function(ce){n(ce),w()},function(ce){r(ce),w()},F),b=null}if("onloadend"in b?b.onloadend=I:b.onreadystatechange=function(){!b||b.readyState!==4||b.status===0&&!(b.responseURL&&b.responseURL.startsWith("file:"))||setTimeout(I)},b.onabort=function(){b&&(r(new A("Request aborted",A.ECONNABORTED,t,b)),w(),b=null)},b.onerror=function(D){const z=D&&D.message?D.message:"Network Error",F=new A(z,A.ERR_NETWORK,t,b);F.event=D||null,r(F),w(),b=null},b.ontimeout=function(){if(!b)return;let D=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const z=o.transitional||rl;o.timeoutErrorMessage&&(D=o.timeoutErrorMessage),r(new A(D,z.clarifyTimeoutError?A.ETIMEDOUT:A.ECONNABORTED,t,b)),w(),b=null},l===void 0&&c.setContentType(null),g.isUndefined(o.withCredentials)||(b.withCredentials=!!o.withCredentials),d&&d!=="json"&&(b.responseType=o.responseType),h&&([y,j,E]=ps(h,!0),b.addEventListener("progress",y)),u&&b.upload&&([x,v]=ps(u),b.upload.addEventListener("progress",x),b.upload.addEventListener("loadend",v)),o.cancelToken||o.signal){if(p=N=>{if(!b)return;r(!N||N.type?new Si(null,t,b):N);const D=b;w(),b=null,D.abort()},o.cancelToken&&o.cancelToken.subscribe(p),!b)return;o.signal&&(o.signal.aborted?p():o.signal.addEventListener("abort",p))}if(!b)return;const R=Ta(o.url);if(R&&!Pe.protocols.includes(R)){r(new A("Unsupported protocol "+R+":",A.ERR_BAD_REQUEST,t)),w();return}const $=()=>{b&&("setRequestHeader"in b&&g.forEach(Lh(c),function(D,z){b.setRequestHeader(z,D)}),b.send(l||null))};if(s){const N=typeof performance<"u"&&g.isFunction(performance.now)?()=>performance.now():Date.now,D=b.timeout>0?N()+Number(b.timeout):void 0,z=()=>{if(!b)return;const F=b;F.ontimeout(),F.abort()};if(D!==void 0){const F=()=>{const Z=D-N();Z>0?m=setTimeout(F,Math.min(Z,2147483647)):z()};F()}Yh.readAsync(s).then(F=>{if(b){if(D!==void 0&&N()>=D){z();return}if(F){const Z=g.hasOwnProp(o,"xsrfHeaderName")&&o.xsrfHeaderName;c.set(Z,F)}$()}}).catch(F=>{b&&(r(A.from(F,null,t,b)),w(),b=null)})}else $()})},Cb=(t,e)=>{if(t=t?t.filter(Boolean):[],!e&&!t.length)return;const n=new AbortController;let r=!1;const i=function(c){if(!r){r=!0,o();const d=c instanceof Error?c:this.reason;n.abort(d instanceof A?d:new Si(d instanceof Error?d.message:d))}};let s=e&&setTimeout(()=>{s=null,i(new A(`timeout of ${e}ms exceeded`,A.ETIMEDOUT))},e);const o=()=>{t&&(s&&clearTimeout(s),s=null,t.forEach(c=>{const d=g.getSafeProp(c,"unsubscribe");g.isFunction(d)?d.call(c,i):c.removeEventListener("abort",i)}),t=null)};t.forEach(c=>{if(!r){if(c.aborted){i.call(c);return}c.addEventListener("abort",i,{once:!0})}});const{signal:l}=n;return l.unsubscribe=()=>g.asap(o),l},Ab=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let r=0,i;for(;r<n;)i=r+e,yield t.slice(r,i),r=i},Ob=async function*(t,e){for await(const n of Pb(t))yield*Ab(n,e)},Pb=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:r}=await e.read();if(n)break;yield r}}finally{await e.cancel()}},Oc=(t,e,n,r)=>{const i=Ob(t,e);let s=0,o,l=c=>{o||(o=!0,r&&r(c))};return new ReadableStream({async pull(c){try{const{done:d,value:u}=await i.next();if(d){l(),c.close();return}let h=u.byteLength;if(n){let p=s+=h;n(p)}c.enqueue(new Uint8Array(u))}catch(d){throw l(d),d}},cancel(c){return l(c),i.return()}},{highWaterMark:2})},dn=`\r
`,Pc=t=>String(t).replace(/\r\n|\r|\n/g,dn),Nc=t=>String(t).replace(/[\r\n"]/g,e=>e==="\r"?"%0D":e===`
`?"%0A":"%22"),Hr=(t,e)=>{let n=0;for(let r=0;r<t.length;r++){const i=t.charCodeAt(r);e&&(i===13||i===10)?(i===13&&t.charCodeAt(r+1)===10&&r++,n+=2):i<128?n++:i<2048?n+=2:i>=55296&&i<=56319&&t.charCodeAt(r+1)>=56320&&t.charCodeAt(r+1)<=57343?(n+=4,r++):n+=3}return n};class Xi extends TypeError{constructor(e,n){super(e),this.name="FormDataError",this.reason=n}}function Nb(t,e,n,r,i){if(!g.isFunction(e))throw new Xi("Blob is not supported","blob");if(!g.isString(i)||!/^[A-Za-z0-9'()+_,./:=? -]{1,70}$/.test(i)||/ $/.test(i))throw new Xi("Invalid multipart boundary","boundary");const s="--"+i+"--"+dn;let o=s.length;const l=[],c=u=>{if(o+u>n)throw r()};c(0);for(const[u,h]of t){const p=g.isString(h),m=p?Hr(h,!0):h.size;if(!Number.isFinite(m)||m<0)throw new Xi("Unsupported FormData part size","part");c(m+Hr(u,!0)+(!p&&h.name?Hr(h.name,!1):0)+(!p&&h.type?Hr(h.type,!1):0));let x="--"+i+dn+'Content-Disposition: form-data; name="'+Nc(Pc(u))+'"';p||(x+='; filename="'+Nc(g.isString(h.name)?h.name:"blob")+'"'+dn+"Content-Type: "+String(h.type||"application/octet-stream").replace(/[\r\n]/g,"")),x+=dn+dn;const y=Hr(x,!1)+m+dn.length;c(y),o+=y,l.push({header:x,value:h,isString:p})}const d=[];for(const u of l)d.push(u.header,u.isString?Pc(u.value):u.value,dn);return d.push(s),new e(d,{type:"multipart/form-data; boundary="+i})}function Lb(t,e,n,r,i){if(!g.isFunction(e))throw new A("Blob is not supported",A.ERR_NOT_SUPPORT);if(i===void 0)if(g.isFunction(Pe.generateString))i="axios-"+Pe.generateString(36,"0123456789abcdef");else{const s=g.global.crypto;if(!s||!g.isFunction(s.getRandomValues))throw new A("Random byte generation is not supported",A.ERR_NOT_SUPPORT);const o=new Uint8Array(18);s.getRandomValues(o),i="axios-"+Array.from(o,l=>("0"+l.toString(16)).slice(-2)).join("")}try{return Nb(t,e,n,r,i)}catch(s){if(s instanceof Xi){const o=s.reason==="boundary"?A.ERR_BAD_OPTION_VALUE:A.ERR_BAD_REQUEST;throw new A(s.message,o)}throw s}}const Lc=t=>t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102,ep=(t,e,n)=>e+2<n&&Lc(t.charCodeAt(e+1))&&Lc(t.charCodeAt(e+2)),$c=t=>t<=57?t-48:(t&223)-55,$b=t=>t>=65&&t<=90||t>=97&&t<=122||t>=48&&t<=57||t===43||t===47||t===45||t===95,Db=t=>t===9||t===10||t===12||t===13||t===32,Mb=t=>{const e=Math.floor(t/4),n=t%4;return e*3+(n===2?1:n===3?2:0)},Fb=t=>{const e=t.length;let n=0;return e>0&&t.charCodeAt(e-1)===61&&(n++,e>1&&t.charCodeAt(e-2)===61&&n++),Math.floor((e-n)*3/4)},Ub=t=>{const e=t.length;let n=0,r=0,i=!1;for(let s=0;s<e;s++){let o=t.charCodeAt(s);if(o===37&&ep(t,s,e)&&(o=$c(t.charCodeAt(s+1))*16+$c(t.charCodeAt(s+2)),s+=2),!Db(o)){if(o===61){r++;continue}if(!$b(o)||r>0){i=!0;continue}n++}}return i||r>2||r>0&&(n+r)%4!==0||n%4===1?Fb(t):Mb(n)},Bb=(t,e,n)=>{if(!t||typeof t!="string"||!/^data:/i.test(t))return 0;const r=t.indexOf(",");if(r<0)return 0;const i=t.slice(5,r),s=t.slice(r+1);if(n.test(i))return e(s);let l=0;for(let c=0,d=s.length;c<d;c++){const u=s.charCodeAt(c);if(u===37&&ep(s,c,d))l+=1,c+=2;else if(u<128)l+=1;else if(u<2048)l+=2;else if(u>=55296&&u<=56319&&c+1<d){const h=s.charCodeAt(c+1);h>=56320&&h<=57343?(l+=4,c++):l+=3}else l+=3}return l};function zb(t){const e=typeof t=="string"?t.indexOf("#"):-1;return Bb(e===-1?t:t.slice(0,e),Ub,/; *base64[\t\n\f\r ]*$/i)}const sl="1.21.0",Dc=64*1024,Mc={cache:"default",redirect:"follow",referrer:"about:client",referrerPolicy:"",mode:"cors",integrity:"",keepalive:!1,priority:"auto",window:null},{isFunction:Di}=g,Hb=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16))),Fc=t=>{if(!g.isString(t))return t;try{return decodeURIComponent(t)}catch{return t}},Mi=(t,...e)=>{try{return!!t(...e)}catch{return!1}},Vb=t=>{const e=t.indexOf("://");let n=t;return e!==-1&&(n=n.slice(e+3)),n.includes("@")||n.includes(":")},Wb=t=>{const e=g.global!==void 0&&g.global!==null?g.global:globalThis,{ReadableStream:n,TextEncoder:r}=e;t=g.merge.call({skipUndefined:!0},{Request:e.Request,Response:e.Response,Blob:e.Blob},t);const i=g.hasOwnProp(t,"fetch")?t.fetch:void 0,{Request:s,Response:o,Blob:l}=t,c=i?Di(i):typeof fetch=="function",d=Di(s),u=Di(o);if(!c)return!1;const h=c&&Di(n),p=c&&(typeof r=="function"?(w=>b=>w.encode(b))(new r):async w=>new Uint8Array(await new s(w).arrayBuffer())),m=d&&h&&Mi(()=>{let w=!1;const b=new s(Pe.origin,{body:new n,method:"POST",get duplex(){return w=!0,"half"}}),I=b.headers.has("Content-Type");return b.body!=null&&b.body.cancel(),w&&!I}),x=u&&h&&Mi(()=>g.isReadableStream(new o("").body)),y=Object.assign(Object.create(null),Mc);d&&!Mi(()=>new s(Pe.origin,y))&&(delete y.cache,Mi(()=>new s(Pe.origin,y))||(y.cache=Mc.cache));const v={stream:x&&(w=>w.body)};c&&["text","arrayBuffer","blob","formData","stream"].forEach(w=>{!v[w]&&(v[w]=(b,I)=>{let R=b&&b[w];if(R)return R.call(b);throw new A(`Response type '${w}' is not supported`,A.ERR_NOT_SUPPORT,I)})});const j=async w=>{if(w==null)return 0;if(g.isBlob(w))return w.size;if(g.isArrayBufferView(w)||g.isArrayBuffer(w))return w.byteLength;if(g.isURLSearchParams(w)&&(w=w+""),g.isString(w))return(await p(w)).byteLength},E=async(w,b)=>{const I=g.toFiniteNumber(w.getContentLength());return I??j(b)};return async w=>{let{url:b,method:I,data:R,signal:$,cancelToken:N,timeout:D,onDownloadProgress:z,onUploadProgress:F,responseType:Z,headers:ce,withCredentials:he="same-origin",fetchOptions:de,maxContentLength:ae,maxBodyLength:Se,maxRedirects:be}=Qh(w);const Te=g.isNumber(ae)&&ae>-1,O=g.isNumber(Se)&&Se>-1,pe=ne=>g.hasOwnProp(w,ne)?w[ne]:void 0;let Ie=i||fetch;Z=Z?(Z+"").toLowerCase():"text";let Ue=Cb([$,N&&N.toAbortSignal()],D),fe=null;const Be=Ue&&Ue.unsubscribe&&(()=>{Ue.unsubscribe()});let Nt,tn=null,nn=null;const Et=()=>new A("Request body larger than maxBodyLength limit",A.ERR_BAD_REQUEST,w,fe);try{let ne;const Ne=pe("auth");if(Ne){const Y=g.getSafeProp(Ne,"username")||"",De=g.getSafeProp(Ne,"password")||"";ne={username:Y,password:De}}let He;if(Vb(b)){if(He=new URL(b,Pe.origin),!ne&&(He.username||He.password)){const Y=Fc(He.username),De=Fc(He.password);ne={username:Y,password:De}}(He.username||He.password)&&(He.username="",He.password="",b=He.href)}if(ne&&(ce.delete("authorization"),ce.set("Authorization","Basic "+btoa(Hb((ne.username||"")+":"+(ne.password||""))))),Te&&He&&He.protocol==="data:"&&zb(He.href)>ae)throw new A("maxContentLength size of "+ae+" exceeded",A.ERR_BAD_RESPONSE,w,fe);const Lt=g.isSpecCompliantForm(R)&&$e.from(pe("headers")).getContentType();let rn;if(g.isString(Lt)&&/^multipart\/form-data(?:\s*;|$)/i.test(Lt.trim())){const Y=$e.parseParameters(Lt);g.hasOwnProp(Y,"boundary")&&(rn=Y.boundary)}if(g.isSpecCompliantForm(R)&&I!=="get"&&I!=="head"&&(O||F&&m||rn!==void 0)&&(R=Lb(R,l,O?Se:1/0,Et,rn),ce.setContentType(rn===void 0?R.type:Lt),Nt=R.size),O&&I!=="get"&&I!=="head"){const Y=await j(R);if(typeof Y=="number"&&isFinite(Y)&&(Nt=Y,Y>Se))throw Et()}const sn=O&&(g.isReadableStream(R)||g.isStream(R)),nr=(Y,De,$t)=>Oc(Y,Dc,pt=>{if(O&&pt>Se)throw tn=Et();De&&De(pt)},$t);if(m&&I!=="get"&&I!=="head"&&(F||sn)){if(Nt=Nt??await E(ce,R),Nt!==0||sn){let Y=new s(b,{method:"POST",body:R,duplex:"half"}),De;if(g.isFormData(R)&&(De=Y.headers.get("content-type"))&&ce.setContentType(De),Y.body){const[$t,pt]=F&&jc(Nt,ps(Tc(F)))||[];R=nr(Y.body,$t,pt)}}}else if(sn&&!d&&h&&I!=="get"&&I!=="head")R=nr(R);else if(sn&&d&&!m&&I!=="get"&&I!=="head")throw new A("Stream request bodies are not supported by the current fetch implementation",A.ERR_NOT_SUPPORT,w,fe);g.isString(he)||(he=he?"include":"omit");const an=d&&"credentials"in s.prototype;if(g.isFormData(R)){const Y=ce.getContentType();Y&&/^multipart\/form-data/i.test(Y)&&!/boundary=/i.test(Y)&&ce.delete("content-type")}ce.set("User-Agent","axios/"+sl,!1);const Re=de==null?de:Object.assign(Object.create(null),de);Re&&(delete Re.body,delete Re.headers,delete Re.method,delete Re.signal,delete Re.duplex,delete Re.credentials);const Ve=Object.assign(Object.create(null),Re,{signal:Ue,method:I.toUpperCase(),headers:Lh(ce.normalize()),body:R,duplex:"half",credentials:an?he:void 0});d&&(g.forEach(y,(Y,De)=>{Ve[De]===void 0&&(Ve[De]=Y)}),Ve.signal===void 0&&(Ve.signal=null),Ve.body===void 0&&(Ve.body=null)),be===0&&(Ve.redirect="manual",Re&&(Re.redirect="manual")),fe=d&&new s(b,Ve);let rt=await(d?Ie(fe,Re):Ie(b,Ve));const Ar=$e.from(rt.headers);if(Te){const Y=g.toFiniteNumber(Ar.getContentLength());if(Y!=null&&Y>ae)throw new A("maxContentLength size of "+ae+" exceeded",A.ERR_BAD_RESPONSE,w,fe)}const Or=x&&(Z==="stream"||Z==="response");if(x&&rt.body&&(z||Te||Or&&Be)){const Y={};["status","statusText","headers"].forEach(An=>{Y[An]=rt[An]});const De=g.toFiniteNumber(Ar.getContentLength()),[$t,pt]=z&&jc(De,ps(Tc(z),!0))||[];let Pr=0;const da=An=>{if(Te&&(Pr=An,Pr>ae))throw nn=new A("maxContentLength size of "+ae+" exceeded",A.ERR_BAD_RESPONSE,w,fe);$t&&$t(An)};rt=new o(Oc(rt.body,Dc,da,()=>{pt&&pt(),Be&&Be()}),Y)}Z=Z||"text";let ht=await v[g.findKey(v,Z)||"text"](rt,w);if(Te&&!x&&!Or){let Y;if(ht!=null&&(typeof ht.byteLength=="number"?Y=ht.byteLength:typeof ht.size=="number"?Y=ht.size:typeof ht=="string"&&(Y=typeof r=="function"?new r().encode(ht).byteLength:ht.length)),typeof Y=="number"&&Y>ae)throw new A("maxContentLength size of "+ae+" exceeded",A.ERR_BAD_RESPONSE,w,fe)}return!Or&&Be&&Be(),await new Promise((Y,De)=>{Gh(Y,De,{data:ht,headers:$e.from(rt.headers),status:rt.status,statusText:rt.statusText,config:w,request:fe})})}catch(ne){if(Be&&Be(),Ue&&Ue.aborted&&Ue.reason instanceof A){const Ne=Ue.reason;throw Ne.config=w,fe&&(Ne.request=fe),ne!==Ne&&Object.defineProperty(Ne,"cause",{__proto__:null,value:ne,writable:!0,enumerable:!1,configurable:!0}),Ne}if(tn)throw fe&&!tn.request&&(tn.request=fe),tn;if(nn)throw nn;if(ne instanceof A)throw fe&&!ne.request&&(ne.request=fe),ne;if(ne&&ne.name==="TypeError"&&/Load failed|fetch/i.test(ne.message)){const Ne=new A("Network Error",A.ERR_NETWORK,w,fe,ne&&ne.response);throw Object.defineProperty(Ne,"cause",{__proto__:null,value:ne.cause||ne,writable:!0,enumerable:!1,configurable:!0}),Ne}throw A.from(ne,ne&&ne.code,w,fe,ne&&ne.response)}}},qb=new Map,tp=t=>{const e=Object.create(null),n=t&&g.hasOwnProp(t,"env")&&t.env;["fetch","Request","Response","Blob"].forEach(m=>{n&&g.hasOwnProp(n,m)&&(e[m]=n[m])});const{fetch:r,Request:i,Response:s,Blob:o}=e,l=[i,s,r,o];let c=l.length,d=c,u,h,p=qb;for(;d--;)u=l[d],h=p.get(u),h===void 0&&p.set(u,h=d?new Map:Wb(e)),p=h;return h};tp();const al={http:Gv,xhr:Rb,fetch:{get:tp}};g.forEach(al,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{__proto__:null,value:e})}catch{}Object.defineProperty(t,"adapterName",{__proto__:null,value:e})}});const Uc=t=>`- ${t}`,Kb=t=>g.isFunction(t)||t===null||t===!1;function Gb(t,e){t=g.isArray(t)?t:[t];const{length:n}=t;let r,i;const s={};for(let o=0;o<n;o++){r=t[o];let l;if(i=r,!Kb(r)&&(i=al[(l=String(r)).toLowerCase()],i===void 0))throw new A(`Unknown adapter '${l}'`);if(i&&(g.isFunction(i)||(i=i.get(e))))break;s[l||"#"+o]=i}if(!i){const o=Object.entries(s).map(([c,d])=>`adapter ${c} `+(d===!1?"is not supported by the environment":"is not available in the build"));let l=n?o.length>1?`since :
`+o.map(Uc).join(`
`):" "+Uc(o[0]):"as no adapter specified";throw new A("There is no suitable adapter to dispatch the request "+l,A.ERR_NOT_SUPPORT)}return i}const np={getAdapter:Gb,adapters:al};function Ra(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Si(null,t)}function Bc(t){return Math.max(0,Date.now()-t)}function Ca(t){const e=g.toSafeFlatObject(t);Ra(e),e.headers=$e.from(g.getSafeProp(e,"headers")),e.data=ja.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1);const n=np.getAdapter(e.adapter||ki.adapter,e),r=Date.now();return n(e).then(function(s){Ra(e),s.duration=Bc(r),e.response=s;try{s.data=ja.call(e,e.transformResponse,s)}finally{delete e.response}return s.headers=$e.from(s.headers),s},function(s){if(!Kh(s)&&(Ra(e),s&&s.response)){s.response.duration=Bc(r),e.response=s.response;try{s.response.data=ja.call(e,e.transformResponse,s.response)}finally{delete e.response}s.response.headers=$e.from(s.response.headers)}return Promise.reject(s)})}const Ys={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Ys[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const zc={};Ys.transitional=function(e,n,r){function i(s,o){return"[Axios v"+sl+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,l)=>{if(e===!1)throw new A(i(o," has been removed"+(n?" in "+n:"")),A.ERR_DEPRECATED);return n&&!zc[o]&&(zc[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,l):!0}};Ys.spelling=function(e){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};function Zb(t,e,n){if(typeof t!="object"||t===null)throw new A("options must be an object",A.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const s=r[i],o=Object.prototype.hasOwnProperty.call(e,s)?e[s]:void 0;if(o){const l=t[s],c=l===void 0||o(l,s,t);if(c!==!0)throw new A("option "+s+" must be "+c,A.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new A("Unknown option "+s,A.ERR_BAD_OPTION)}}const Qi={assertOptions:Zb,validators:Ys},Me=Qi.validators,Aa=t=>{if(t==null||g.isPlainObject(t)||t instanceof $e)return!0;try{return g.isObject(t)&&g.getSafeProp(t,Symbol.toStringTag)==="AxiosHeaders"&&["toJSON","set","get","has","delete","clear","normalize","concat","toString",Symbol.iterator].every(e=>g.isFunction(g.getSafeProp(t,e)))}catch{return!1}};let Hn=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Sc,response:new Sc}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error)try{let i={};Error.captureStackTrace?Error.captureStackTrace(i):i=new Error;const s=i.stack;let o="";if(typeof s=="string"){const l=s.indexOf(`
`);o=l===-1?"":s.slice(l+1)}if(!r.stack)r.stack=o;else if(o){const l=o.indexOf(`
`),c=l===-1?-1:o.indexOf(`
`,l+1),d=c===-1?o:o.slice(c+1),u=String(r.stack),h=qv(r,u),p=h===-1?u:u.slice(0,h),m=h===-1?"":u.slice(h);p.endsWith(d)||(r.stack=p+`
`+o+m)}}catch{}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Zn(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&Qi.assertOptions(r,{silentJSONParsing:Me.transitional(Me.boolean),forcedJSONParsing:Me.transitional(Me.boolean),clarifyTimeoutError:Me.transitional(Me.boolean),legacyInterceptorReqResOrdering:Me.transitional(Me.boolean),advertiseZstdAcceptEncoding:Me.transitional(Me.boolean),validateStatusUndefinedResolves:Me.transitional(Me.boolean),encodeBasicAuthUsername:Me.transitional(Me.boolean)},!1),i!=null&&(g.isFunction(i)?n.paramsSerializer={serialize:i}:Qi.assertOptions(i,{encode:Me.function,serialize:Me.function},!0)),n.allowAbsoluteUrls!==void 0||(g.hasOwnProp(this.defaults,"allowAbsoluteUrls")&&this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Qi.assertOptions(n,{baseUrl:Me.spelling("baseURL"),withXsrfToken:Me.spelling("withXSRFToken")},!0),n.method=(g.getSafeProp(n,"method")||g.getSafeProp(this.defaults,"method")||"get").toLowerCase();const o=g.getSafeProp(s,"common"),l=g.getSafeProp(s,n.method),c=s&&g.merge(Aa(o)?o:void 0,Aa(l)?l:void 0);s&&g.forEach(qh.concat("common"),v=>{Aa(g.getSafeProp(s,v))&&delete s[v]}),n.headers=$e.concat(c,s);const d=[];let u=!0;this.interceptors.request.forEach(function(j){if(typeof j.runWhen=="function"&&j.runWhen(n)===!1)return;u=u&&j.synchronous;const E=n.transitional||rl;E&&E.legacyInterceptorReqResOrdering?d.unshift(j.fulfilled,j.rejected):d.push(j.fulfilled,j.rejected)});const h=[];this.interceptors.response.forEach(function(j){h.push(j.fulfilled,j.rejected)});let p,m=0,x;if(!u){const v=[Ca.bind(this),void 0];for(v.unshift(...d),v.push(...h),x=v.length,p=Promise.resolve(n);m<x;)p=p.then(v[m++],v[m++]);return p}x=d.length;let y=n;for(;m<x;){const v=d[m++],j=d[m++];try{y=v?v(y):y}catch(E){if(!j){p=Promise.reject(E);break}try{const w=j.call(this,E);g.isThenable(w)&&(p=Promise.resolve(w).then(()=>Ca.call(this,y)))}catch(w){p=Promise.reject(w)}break}}if(!p)try{p=Ca.call(this,y)}catch(v){p=Promise.reject(v)}for(m=0,x=h.length;m<x;)p=p.then(h[m++],h[m++]);return p}getUri(e){e=Zn(this.defaults,e);const n=Jh(e.baseURL,e.url,e.allowAbsoluteUrls,e);return Uh(n,e.params,e.paramsSerializer)}};g.forEach(["delete","get","head","options"],function(e){Hn.prototype[e]=async function(n,r){return this.request(Zn(r||{},{method:e,url:n,data:r&&g.hasOwnProp(r,"data")?r.data:void 0}))}});g.forEach(["post","put","patch","query"],function(e){function n(r){return async function(s,o,l){return this.request(Zn(l||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Hn.prototype[e]=n(),e!=="query"&&(Hn.prototype[e+"Form"]=n(!0))});let Yb=class rp{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(l=>{r.subscribe(l),s=l}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},e(function(s,o,l){r.reason||(r.reason=new Si(s,o,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=r=>{e.abort(r)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new rp(function(i){e=i}),cancel:e}}};function Jb(t){return function(n){return t.apply(null,n)}}function Xb(t){return g.isObject(t)&&t.isAxiosError===!0}const es={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,ContentTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,UnprocessableContent:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(es).forEach(([t,e])=>{es[e]===void 0&&(es[e]=t)});function ip(t){const e=new Hn(t),n=Th(Hn.prototype.request,e);return g.extend(n,Hn.prototype,e,{allOwnKeys:!0}),g.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return ip(Zn(t,i))},n}const ve=ip(ki);ve.Axios=Hn;ve.CanceledError=Si;ve.CancelToken=Yb;ve.isCancel=Kh;ve.VERSION=sl;ve.toFormData=Zs;ve.AxiosError=A;ve.Cancel=ve.CanceledError;ve.all=function(e){return Promise.all(e)};ve.spread=Jb;ve.isAxiosError=Xb;ve.mergeConfig=Zn;ve.AxiosHeaders=$e;ve.formToJSON=t=>Wh(g.isHTMLForm(t)?new FormData(t):t);ve.getAdapter=np.getAdapter;ve.HttpStatusCode=es;ve.default=ve;const{Axios:aA,AxiosError:oA,CanceledError:lA,isCancel:cA,CancelToken:dA,VERSION:uA,all:hA,Cancel:pA,isAxiosError:fA,spread:mA,toFormData:gA,AxiosHeaders:xA,HttpStatusCode:yA,formToJSON:vA,getAdapter:bA,mergeConfig:wA,create:kA}=ve,fs=!1,Qb="senditgo",ew="AIzaSyCCFkpD6mTpO7D4V2vPAx6qnABbrQFjmPw",tw="tms-prod-5b64f.firebaseapp.com",nw="tms-prod-5b64f",rw="tms-prod-5b64f.firebasestorage.app",iw="8390929152",sw="1:8390929152:web:f53f3ad71de3cf8f2ca1e5",aw="G-0P0BSKZQN0";function ms(t){const e=document.cookie.split("; ").find(n=>n.startsWith(`${encodeURIComponent(t)}=`));if(e)return decodeURIComponent(e.slice(e.indexOf("=")+1))}function gs(t,e,n={}){const{maxAge:r,path:i="/",secure:s=!1,sameSite:o="strict"}=n;let l=`${encodeURIComponent(t)}=${encodeURIComponent(e)}`;l+=`; path=${i}`,l+=`; samesite=${o}`,typeof r=="number"&&(l+=`; max-age=${Math.floor(r)}`),s&&(l+="; Secure"),document.cookie=l}function Hc(t,e="/"){document.cookie=`${encodeURIComponent(t)}=; path=${e}; max-age=0`}function sp(){Hc("X-Token"),Hc("X-Refresh-Token"),dt.getState().logout()}function xn(){sp();const t=Jo();window.location.pathname!==t&&(window.location.href=t)}const ow=7,ap=200,op=[5,201,202,204],lw=["/api/company/verifyToken","/api/company/refreshToken"],cw={baseURL:void 0},se=ve.create(cw);let pr=!1,Eo=[];function lp(t){Eo.push(t)}function xs(t){Eo.forEach(e=>e(t)),Eo=[]}async function cp(){var t,e;try{const n=se.defaults.headers.common["X-Refresh-Token"]||ms("X-Refresh-Token");if(!n)return null;const r=await ve.post(`${fs?"/apis":""}/api/company/refreshToken`,{refreshToken:n},{headers:{"Content-type":"application/json;charset-UTF-8","X-Refresh-Token":n}});if(((t=r.data)==null?void 0:t.code)===0&&((e=r.data)!=null&&e.data)){const{token:i,refresh:s}=r.data.data;se.defaults.headers.common.Token=i,se.defaults.headers.common["X-Refresh-Token"]=s;const o={sameSite:"strict",maxAge:86400,secure:!fs};return gs("X-Token",i,o),gs("X-Refresh-Token",s,o),i}return null}catch{return null}}function dw(t){if(typeof FormData<"u"&&t.data instanceof FormData?(t.headers.delete("Content-Type"),t.headers.delete("Content-type")):t.headers["Content-type"]="application/json;charset-UTF-8",!t.headers.get("Token")){const n=se.defaults.headers.common.Token||ms("X-Token");n&&t.headers.set("Token",n)}if(!t.headers.get("X-Refresh-Token")){const n=se.defaults.headers.common["X-Refresh-Token"]||ms("X-Refresh-Token");n&&t.headers.set("X-Refresh-Token",n)}return t}se.interceptors.request.use(dw,t=>Promise.reject(t));const dp=t=>lw.some(e=>t===e||t.endsWith(e)),up=(t,e)=>t===ow&&["session","login","another","terminated","kicked"].some(n=>e.includes(n)),uw=async t=>{var i;const e=t.data,n=Number(e==null?void 0:e.code),r=t.config;if(n>0){const s=(r==null?void 0:r.url)||"";if(!dp(s)){const o=((i=e==null?void 0:e.message)==null?void 0:i.toLowerCase())||"";if(up(n,o))return xn(),new Promise(()=>{});if(n===ap){const l=r;if(l._retried)return xn(),new Promise(()=>{});if(!pr){pr=!0;const c=await cp();return pr=!1,c?(xs(c),l._retried=!0,l.headers.Token=c,se(l)):(xs(null),xn(),new Promise(()=>{}))}return new Promise((c,d)=>{lp(u=>{if(!u){d(e);return}l._retried=!0,l.headers.Token=u,c(se(l))})})}if(op.includes(n))return xn(),new Promise(()=>{})}throw e}return e},hw=async t=>{var o,l;const e=t,n=(o=e.response)==null?void 0:o.data,r=Number(n==null?void 0:n.code),i=e.config,s=(i==null?void 0:i.url)||"";if(n&&!dp(s)){const c=((l=n==null?void 0:n.message)==null?void 0:l.toLowerCase())||"";if(up(r,c))return xn(),new Promise(()=>{});if(r===ap&&i){const d=i;if(d._retried)return xn(),new Promise(()=>{});if(!pr){pr=!0;const u=await cp();return pr=!1,u?(xs(u),d._retried=!0,d.headers.Token=u,se(d)):(xs(null),xn(),new Promise(()=>{}))}return new Promise((u,h)=>{lp(p=>{if(!p){h(t);return}d._retried=!0,d.headers.Token=p,u(se(d))})})}if(op.includes(r))return xn(),new Promise(()=>{})}return Promise.reject(t)};se.interceptors.response.use(uw,hw);const pw=()=>{};var Vc={};/**
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
 */const hp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},fw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},pp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,d=c?t[i+2]:0,u=s>>2,h=(s&3)<<4|l>>4;let p=(l&15)<<2|d>>6,m=d&63;c||(m=64,o||(p=64)),r.push(n[u],n[h],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(hp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):fw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||d==null||h==null)throw new mw;const p=s<<2|l>>4;if(r.push(p),d!==64){const m=l<<4&240|d>>2;if(r.push(m),h!==64){const x=d<<6&192|h;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class mw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gw=function(t){const e=hp(t);return pp.encodeByteArray(e,!0)},fp=function(t){return gw(t).replace(/\./g,"")},mp=function(t){try{return pp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function xw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const yw=()=>xw().__FIREBASE_DEFAULTS__,vw=()=>{if(typeof process>"u"||typeof Vc>"u")return;const t=Vc.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},bw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&mp(t[1]);return e&&JSON.parse(e)},ol=()=>{try{return pw()||yw()||vw()||bw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ww=t=>{var e,n;return(n=(e=ol())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},gp=()=>{var t;return(t=ol())==null?void 0:t.config},xp=t=>{var e;return(e=ol())==null?void 0:e[`_${t}`]};/**
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
 */class yp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ze())}function Sw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ew(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function _w(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jw(){const t=Ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Tw(){try{return typeof indexedDB=="object"}catch{return!1}}function Iw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const Rw="FirebaseError";class Tn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Rw,Object.setPrototypeOf(this,Tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ei.prototype.create)}}class Ei{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Cw(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Tn(i,l,r)}}function Cw(t,e){try{let n=0,r="";for(;n<t.length;){const i=t.indexOf("{$",n);if(i===-1){r+=t.substring(n);break}const s=t.indexOf("}",i+2);if(s===-1){r+=t.substring(n);break}const o=t.substring(i+2,s),l=e[o];r+=t.substring(n,i)+(l!=null?String(l):`<${o}?>`),n=s+1}return r}catch{return t}}function Aw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function vr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Wc(s)&&Wc(o)){if(!vr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Wc(t){return t!==null&&typeof t=="object"}/**
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
 */function Ir(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ow(t,e){const n=new Pw(t,e);return n.subscribe.bind(n)}class Pw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Nw(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Oa),i.error===void 0&&(i.error=Oa),i.complete===void 0&&(i.complete=Oa);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Nw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Oa(){}/**
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
 */function Qn(t){return t&&t._delegate?t._delegate:t}/**
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
 */function ll(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Lw(t){return(await fetch(t,{credentials:"include"})).ok}class br{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Dn="[DEFAULT]";/**
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
 */class $w{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new yp;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Mw(e))try{this.getOrInitializeService({instanceIdentifier:Dn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Dn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dn){return this.instances.has(e)}getOptions(e=Dn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Dw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Dn){return this.component?this.component.multipleInstances?e:Dn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Dw(t){return t===Dn?void 0:t}function Mw(t){return t.instantiationMode==="EAGER"}/**
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
 */class Fw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new $w(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const Uw={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},Bw=ue.INFO,zw={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},Hw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=zw[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vp{constructor(e){this.name=e,this._logLevel=Bw,this._logHandler=Hw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Uw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const Vw=(t,e)=>e.some(n=>t instanceof n);let qc,Kc;function Ww(){return qc||(qc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qw(){return Kc||(Kc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bp=new WeakMap,_o=new WeakMap,wp=new WeakMap,Pa=new WeakMap,cl=new WeakMap;function Kw(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(vn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&bp.set(n,t)}).catch(()=>{}),cl.set(e,t),e}function Gw(t){if(_o.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});_o.set(t,e)}let jo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _o.get(t);if(e==="objectStoreNames")return t.objectStoreNames||wp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Zw(t){jo=t(jo)}function Yw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Na(this),e,...n);return wp.set(r,e.sort?e.sort():[e]),vn(r)}:qw().includes(t)?function(...e){return t.apply(Na(this),e),vn(bp.get(this))}:function(...e){return vn(t.apply(Na(this),e))}}function Jw(t){return typeof t=="function"?Yw(t):(t instanceof IDBTransaction&&Gw(t),Vw(t,Ww())?new Proxy(t,jo):t)}function vn(t){if(t instanceof IDBRequest)return Kw(t);if(Pa.has(t))return Pa.get(t);const e=Jw(t);return e!==t&&(Pa.set(t,e),cl.set(e,t)),e}const Na=t=>cl.get(t);function Xw(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=vn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(vn(o.result),c.oldVersion,c.newVersion,vn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const Qw=["get","getKey","getAll","getAllKeys","count"],e0=["put","add","delete","clear"],La=new Map;function Gc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(La.get(e))return La.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=e0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Qw.includes(n)))return;const s=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let d=c.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),i&&c.done]))[0]};return La.set(e,s),s}Zw(t=>({...t,get:(e,n,r)=>Gc(e,n)||t.get(e,n,r),has:(e,n)=>!!Gc(e,n)||t.has(e,n)}));/**
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
 */class t0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(n0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function n0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const To="@firebase/app",Zc="0.16.2";/**
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
 */const Gt=new vp("@firebase/app"),r0="@firebase/app-compat",i0="@firebase/analytics-compat",s0="@firebase/analytics",a0="@firebase/app-check-compat",o0="@firebase/app-check",l0="@firebase/auth",c0="@firebase/auth-compat",d0="@firebase/database",u0="@firebase/data-connect",h0="@firebase/database-compat",p0="@firebase/functions",f0="@firebase/functions-compat",m0="@firebase/installations",g0="@firebase/installations-compat",x0="@firebase/messaging",y0="@firebase/messaging-compat",v0="@firebase/performance",b0="@firebase/performance-compat",w0="@firebase/remote-config",k0="@firebase/remote-config-compat",S0="@firebase/storage",E0="@firebase/storage-compat",_0="@firebase/firestore",j0="@firebase/ai",T0="@firebase/firestore-compat",I0="firebase",R0="12.19.0";/**
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
 */const Io="[DEFAULT]",C0={[To]:"fire-core",[r0]:"fire-core-compat",[s0]:"fire-analytics",[i0]:"fire-analytics-compat",[o0]:"fire-app-check",[a0]:"fire-app-check-compat",[l0]:"fire-auth",[c0]:"fire-auth-compat",[d0]:"fire-rtdb",[u0]:"fire-data-connect",[h0]:"fire-rtdb-compat",[p0]:"fire-fn",[f0]:"fire-fn-compat",[m0]:"fire-iid",[g0]:"fire-iid-compat",[x0]:"fire-fcm",[y0]:"fire-fcm-compat",[v0]:"fire-perf",[b0]:"fire-perf-compat",[w0]:"fire-rc",[k0]:"fire-rc-compat",[S0]:"fire-gcs",[E0]:"fire-gcs-compat",[_0]:"fire-fst",[T0]:"fire-fst-compat",[j0]:"fire-vertex","fire-js":"fire-js",[I0]:"fire-js-all"};/**
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
 */const ys=new Map,A0=new Map,Ro=new Map;function Yc(t,e){try{t.container.addComponent(e)}catch(n){Gt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ni(t){const e=t.name;if(Ro.has(e))return Gt.debug(`There were multiple attempts to register component ${e}.`),!1;Ro.set(e,t);for(const n of ys.values())Yc(n,t);for(const n of A0.values())Yc(n,t);return!0}function kp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function _t(t){return t==null?!1:t.settings!==void 0}/**
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
 */const O0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},zt=new Ei("app","Firebase",O0);/**
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
 */class P0{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new br("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zt.create("app-deleted",{appName:this._name})}}/**
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
 */const _i=R0;function Sp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Io,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw zt.create("bad-app-name",{appName:String(i)});if(n||(n=gp()),!n)throw zt.create("no-options");const s=ys.get(i);if(s)if(vr(n,s.options)){if(vr(r,s.config))return s;throw zt.create("duplicate-app",{appName:i,mismatchedParam:"config",oldValue:JSON.stringify(s.config),newValue:JSON.stringify(r)})}else throw zt.create("duplicate-app",{appName:i,mismatchedParam:"options",oldValue:JSON.stringify(s.options),newValue:JSON.stringify(n)});const o=new Fw(i);for(const c of Ro.values())o.addComponent(c);const l=new P0(n,r,o);return ys.set(i,l),l}function N0(t=Io){const e=ys.get(t);if(!e&&t===Io&&gp())return Sp();if(!e)throw zt.create("no-app",{appName:t});return e}function fr(t,e,n){let r=C0[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gt.warn(o.join(" "));return}ni(new br(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const L0="firebase-heartbeat-database",$0=1,ri="firebase-heartbeat-store";let $a=null;function Ep(){return $a||($a=Xw(L0,$0,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ri)}catch(n){console.warn(n)}}}}).catch(t=>{throw zt.create("idb-open",{originalErrorMessage:t.message})})),$a}async function D0(t){try{const n=(await Ep()).transaction(ri),r=await n.objectStore(ri).get(_p(t));return await n.done,r}catch(e){if(e instanceof Tn)Gt.warn(e.message);else{const n=zt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gt.warn(n.message)}}}async function Jc(t,e){try{const r=(await Ep()).transaction(ri,"readwrite");await r.objectStore(ri).put(e,_p(t)),await r.done}catch(n){if(n instanceof Tn)Gt.warn(n.message);else{const r=zt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gt.warn(r.message)}}}function _p(t){return`${t.name}!${t.options.appId}`}/**
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
 */const M0=1024,F0=30;class U0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new z0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Xc();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>F0){const o=H0(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Gt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Xc(),{heartbeatsToSend:r,unsentEntries:i}=B0(this._heartbeatsCache.heartbeats),s=fp(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Gt.warn(n),""}}}function Xc(){return new Date().toISOString().substring(0,10)}function B0(t,e=M0){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Qc(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Qc(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class z0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Tw()?Iw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await D0(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Jc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Jc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Qc(t){return fp(JSON.stringify({version:2,heartbeats:t})).length}function H0(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function V0(t){ni(new br("platform-logger",e=>new t0(e),"PRIVATE")),ni(new br("heartbeat",e=>new U0(e),"PRIVATE")),fr(To,Zc,t),fr(To,Zc,"esm2020"),fr("fire-js","")}/**
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
 */V0("");var W0="firebase",q0="12.19.0";/**
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
 */fr(W0,q0,"app");function jp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const K0=jp,Tp=new Ei("auth","Firebase",jp());/**
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
 */const vs=new vp("@firebase/auth");function ts(t,...e){vs.logLevel<=ue.WARN&&vs.warn(`Auth (${_i}): ${t}`,...e)}function ns(t,...e){vs.logLevel<=ue.ERROR&&vs.error(`Auth (${_i}): ${t}`,...e)}/**
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
 */function Zt(t,...e){throw ul(t,...e)}function st(t,...e){return ul(t,...e)}function dl(t,e,n){const r={...K0(),[e]:n};return new Ei("auth","Firebase",r).create(e,{appName:t.name})}function bn(t){return dl(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ul(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Tp.create(t,...e)}function M(t,e,...n){if(!t)throw ul(e,...n)}function Ht(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ns(e),new Error(e)}function Yt(t,e){t||Ht(e)}/**
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
 */function Co(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function Ip(){return ed()==="http:"||ed()==="https:"}function ed(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function G0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ip()||Ew()||"connection"in navigator)?navigator.onLine:!0}function Z0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ji{constructor(e,n){this.shortDelay=e,this.longDelay=n,Yt(n>e,"Short delay should be less than long delay!"),this.isMobile=kw()||_w()}get(){return G0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function hl(t,e){Yt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Rp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ht("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ht("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ht("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Y0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const J0=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],X0=new ji(3e4,6e4);function Pt(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function wt(t,e,n,r,i={}){return Cp(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Ir({...o,key:t.config.apiKey}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const d={method:e,headers:c,...s};return Sw()||(d.referrerPolicy="strict-origin-when-cross-origin"),t.emulatorConfig&&ll(t.emulatorConfig.host)&&(d.credentials="include"),Rp.fetch()(await Ap(t,t.config.apiHost,n,l),d)})}async function Cp(t,e,n){t._canInitEmulator=!1;const r={...Y0,...e};try{const i=new e1(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Wr(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[c,d]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Wr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Wr(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw dl(t,u,d);Zt(t,u)}}catch(i){if(i instanceof Tn)throw i;Zt(t,"network-request-failed",{message:String(i)})}}async function Js(t,e,n,r,i={}){const s=await wt(t,e,n,r,i);return"mfaPendingCredential"in s&&Zt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function Ap(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?hl(t.config,i):`${t.config.apiScheme}://${i}`;return J0.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function Q0(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class e1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(st(this.auth,"network-request-failed")),X0.get())})}}function Wr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=st(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */function td(t){return t!==void 0&&t.getResponse!==void 0}function nd(t){return t!==void 0&&t.enterprise!==void 0}class Op{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Q0(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
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
 */async function t1(t){return(await wt(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Pp(t,e){return wt(t,"GET","/v2/recaptchaConfig",Pt(t,e))}/**
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
 */async function n1(t,e){return wt(t,"POST","/v1/accounts:delete",e)}async function bs(t,e){return wt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Yr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function r1(t,e=!1){const n=Qn(t),r=await n.getIdToken(e),i=pl(r);M(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Yr(Da(i.auth_time)),issuedAtTime:Yr(Da(i.iat)),expirationTime:Yr(Da(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Da(t){return Number(t)*1e3}function pl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ns("JWT malformed, contained fewer than 3 sections"),null;try{const i=mp(n);return i?JSON.parse(i):(ns("Failed to decode base64 JWT payload"),null)}catch(i){return ns("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function rd(t){const e=pl(t);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ii(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Tn&&i1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function i1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class s1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ao{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yr(this.lastLoginAt),this.creationTime=Yr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ws(t){var h;const e=t.auth,n=await t.getIdToken(),r=await ii(t,bs(e,{idToken:n}));M(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(h=i.providerUserInfo)!=null&&h.length?Np(i.providerUserInfo):[],o=o1(t.providerData,s),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),d=l?c:!1,u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Ao(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,u)}async function a1(t){const e=Qn(t);await ws(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function o1(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Np(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function l1(t,e){const n=await Cp(t,{},async()=>{const r=Ir({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await Ap(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&ll(t.emulatorConfig.host)&&(c.credentials="include"),Rp.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function c1(t,e){return wt(t,"POST","/v2/accounts:revokeToken",Pt(t,e))}/**
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
 */class mr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){M(e.length!==0,"internal-error");const n=rd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(M(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await l1(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new mr;return r&&(M(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(M(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(M(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mr,this.toJSON())}_performRefresh(){return Ht("not implemented")}}/**
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
 */function on(t,e){M(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class gt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new s1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ao(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ii(this,this.stsTokenManager.getToken(this.auth,e));return M(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return r1(this,e)}reload(){return a1(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new gt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ws(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_t(this.auth.app))return Promise.reject(bn(this.auth));const e=await this.getIdToken();return await ii(this,n1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,c=n._redirectEventId??void 0,d=n.createdAt??void 0,u=n.lastLoginAt??void 0,{uid:h,emailVerified:p,isAnonymous:m,providerData:x,stsTokenManager:y}=n;M(h&&y,e,"internal-error");const v=mr.fromJSON(this.name,y);M(typeof h=="string",e,"internal-error"),on(r,e.name),on(i,e.name),M(typeof p=="boolean",e,"internal-error"),M(typeof m=="boolean",e,"internal-error"),on(s,e.name),on(o,e.name),on(l,e.name),on(c,e.name),on(d,e.name),on(u,e.name);const j=new gt({uid:h,auth:e,email:i,emailVerified:p,displayName:r,isAnonymous:m,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:v,createdAt:d,lastLoginAt:u});return x&&Array.isArray(x)&&(j.providerData=x.map(E=>({...E}))),c&&(j._redirectEventId=c),j}static async _fromIdTokenResponse(e,n,r=!1){const i=new mr;i.updateFromServerResponse(n);const s=new gt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ws(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];M(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Np(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new mr;l.updateFromIdToken(r);const c=new gt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ao(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,d),c}}/**
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
 */const id=new Map;function Vt(t){Yt(t instanceof Function,"Expected a class definition");let e=id.get(t);return e?(Yt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,id.set(t,e),e)}/**
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
 */class Lp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Lp.type="NONE";const sd=Lp;/**
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
 */function rs(t,e,n){return`firebase:${t}:${e}:${n}`}class Vn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=rs(this.userKey,i.apiKey,s),this.fullPersistenceKey=rs("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await bs(this.auth,{idToken:e}).catch(()=>{});return n?gt._fromGetAccountInfoResponse(this.auth,n,e):null}return gt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(e,n,r="authUser"){if(!n.length)return new Vn(Vt(sd),e,r);const i=(await Promise.all(n.map(async d=>{try{if(await d._isAvailable())return d}catch{return}}))).filter(d=>d);let s=i[0]||Vt(sd);const o=rs(r,e.config.apiKey,e.name);let l=null;for(const d of n)try{const u=await d._get(o);if(u){let h;if(typeof u=="string"){const p=await bs(e,{idToken:u}).catch(()=>{});if(!p)break;h=await gt._fromGetAccountInfoResponse(e,p,u)}else h=gt._fromJSON(e,u);d!==s&&(l=h),s=d;break}}catch{}const c=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Vn(s,e,r):(s=c[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==s)try{await d._remove(o)}catch{}})),new Vn(s,e,r))}}/**
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
 */function ad(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Fp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($p(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Bp(e))return"Blackberry";if(zp(e))return"Webos";if(Dp(e))return"Safari";if((e.includes("chrome/")||Mp(e))&&!e.includes("edge/"))return"Chrome";if(Up(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $p(t=Ze()){return/firefox\//i.test(t)}function Dp(t=Ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Mp(t=Ze()){return/crios\//i.test(t)}function Fp(t=Ze()){return/iemobile/i.test(t)}function Up(t=Ze()){return/android/i.test(t)}function Bp(t=Ze()){return/blackberry/i.test(t)}function zp(t=Ze()){return/webos/i.test(t)}function fl(t=Ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function d1(t=Ze()){var e;return fl(t)&&!!((e=window.navigator)!=null&&e.standalone)}function u1(){return jw()&&document.documentMode===10}function Hp(t=Ze()){return fl(t)||Up(t)||zp(t)||Bp(t)||/windows phone/i.test(t)||Fp(t)}/**
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
 */function Vp(t,e=[]){let n;switch(t){case"Browser":n=ad(Ze());break;case"Worker":n=`${ad(Ze())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${_i}/${r}`}/**
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
 */class h1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const c=e(s);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function p1(t,e={}){return wt(t,"GET","/v2/passwordPolicy",Pt(t,e))}/**
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
 */const f1=6;class m1{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??f1,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class g1{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new od(this),this.idTokenSubscription=new od(this),this.beforeStateQueue=new h1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Tp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Vt(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted){try{this.persistenceManager=await Vn.create(this,e)}catch(o){ts(`Failed to initialize persistence: ${o}`),this.persistenceManager=await Vn.create(this,[])}finally{(r=this._resolvePersistenceManagerAvailable)==null||r.call(this)}if(!this._deleted){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(n)}catch(o){ts(`Failed to initialize current user: ${o}`),await this.directlySetCurrentUser(null).catch(()=>{})}this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await bs(this,{idToken:e}),r=await gt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(_t(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ws(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Z0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(_t(this.app))return Promise.reject(bn(this));const n=e?Qn(e):null;return n&&M(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return _t(this.app)?Promise.reject(bn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return _t(this.app)?Promise.reject(bn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Vt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await p1(this),n=new m1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ei("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await c1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Vt(e)||this._popupRedirectResolver;M(n,this,"argument-error"),this.redirectPersistenceManager=await Vn.create(this,[Vt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}).catch(c=>{if(!o)if(typeof n!="function"&&n.error)n.error(c);else if(r)r(c);else throw c}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){if(this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,this.persistenceManager)try{e?await this.persistenceManager.setCurrentUser(e):await this.persistenceManager.removeCurrentUser()}catch(n){const r=(n==null?void 0:n.message)||String(n),i=dl(this,"internal-error",`An internal AuthError has occurred: ${r}`);throw i.customData={originalError:n},i}}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(_t(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&ts(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function In(t){return Qn(t)}class od{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ow(n=>this.observer=n)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ti={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function x1(t){Ti=t}function ml(t){return Ti.loadJS(t)}function y1(){return Ti.recaptchaV2Script}function v1(){return Ti.recaptchaEnterpriseScript}function b1(){return Ti.gapiScript}function Wp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */const w1=500,k1=6e4,Fi=1e12;class S1{constructor(e){this.auth=e,this.counter=Fi,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new j1(e,this.auth.name,n||{})),this.counter++,r}reset(e){var r;const n=e||Fi;(r=this._widgets.get(n))==null||r.delete(),this._widgets.delete(n)}getResponse(e){var r;const n=e||Fi;return((r=this._widgets.get(n))==null?void 0:r.getResponse())||""}async execute(e){var r;const n=e||Fi;return(r=this._widgets.get(n))==null||r.execute(),""}}class E1{constructor(){this.enterprise=new _1}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class _1{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class j1{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;M(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=T1(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},k1)},w1))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function T1(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const I1="recaptcha-enterprise",Jr="NO_RECAPTCHA",ld="onFirebaseAuthREInstanceReady";class Bt{constructor(e){this.type=I1,this.auth=In(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{Pp(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new Op(c);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,o(d.siteKey)}}).catch(c=>{l(c)})})}function i(s,o,l){const c=window.grecaptcha;nd(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(d=>{o(d)}).catch(()=>{o(Jr)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new E1().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(async l=>{if(!n&&nd(window.grecaptcha)&&Bt.scriptInjectionDeferred)await Bt.scriptInjectionDeferred.promise,i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=v1();c.length!==0&&(c+=l+`&onload=${ld}`),Bt.scriptInjectionDeferred=new yp,window[ld]=()=>{var d;(d=Bt.scriptInjectionDeferred)==null||d.resolve()},ml(c).then(()=>{var d;return(d=Bt.scriptInjectionDeferred)==null?void 0:d.promise}).then(()=>{i(l,s,o)}).catch(d=>{o(d)})}}).catch(l=>{o(l)})})}}Bt.scriptInjectionDeferred=null;async function Ma(t,e,n,r=!1,i=!1){const s=new Bt(t);let o;if(i)o=Jr;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,d=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Fa(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("PHONE_PROVIDER")){const o=await Ma(t,e,n);return r(t,o).catch(async l=>{var c;if(((c=t._getRecaptchaConfig())==null?void 0:c.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const d=await Ma(t,e,n,!1,!0);return r(t,d)}return Promise.reject(l)})}else{const o=await Ma(t,e,n,!1,!0);return r(t,o)}}async function R1(t){const e=In(t),n=await Pp(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new Op(n);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new Bt(e).verify()}/**
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
 */function C1(t,e){const n=kp(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(vr(s,e??{}))return i;Zt(i,"already-initialized")}return n.initialize({options:e})}function A1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Vt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function O1(t,e,n){const r=In(t);M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=qp(e),{host:o,port:l}=P1(e),c=l===null?"":`:${l}`,d={url:`${s}//${o}${c}/`},u=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){M(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),M(vr(d,r.config.emulator)&&vr(u,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,ll(o)?Lw(`${s}//${o}${c}`):N1()}function qp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function P1(t){const e=qp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:cd(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:cd(o)}}}function cd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function N1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class gl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ht("not implemented")}_getIdTokenResponse(e){return Ht("not implemented")}_linkToIdToken(e,n){return Ht("not implemented")}_getReauthenticationResolver(e){return Ht("not implemented")}}/**
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
 */async function gr(t,e){return Js(t,"POST","/v1/accounts:signInWithIdp",Pt(t,e))}/**
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
 */const L1="http://localhost";class Yn extends gl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Yn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Zt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new Yn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return gr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,gr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,gr(e,n)}buildRequest(){const e={requestUri:L1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ir(n)}return e}}/**
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
 */async function dd(t,e){return wt(t,"POST","/v1/accounts:sendVerificationCode",Pt(t,e))}async function $1(t,e){return Js(t,"POST","/v1/accounts:signInWithPhoneNumber",Pt(t,e))}async function D1(t,e){const n=await Js(t,"POST","/v1/accounts:signInWithPhoneNumber",Pt(t,e));if(n.temporaryProof)throw Wr(t,"account-exists-with-different-credential",n);return n}const M1={USER_NOT_FOUND:"user-not-found"};async function F1(t,e){const n={...e,operation:"REAUTH"};return Js(t,"POST","/v1/accounts:signInWithPhoneNumber",Pt(t,n),M1)}/**
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
 */class Xr extends gl{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Xr({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Xr({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return $1(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return D1(e,{idToken:n,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return F1(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Xr({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */class Kp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ii extends Kp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class hn extends Ii{constructor(){super("facebook.com")}static credential(e){return Yn._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hn.credential(e.oauthAccessToken)}catch{return null}}}hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";hn.PROVIDER_ID="facebook.com";/**
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
 */class pn extends Ii{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Yn._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return pn.credential(n,r)}catch{return null}}}pn.GOOGLE_SIGN_IN_METHOD="google.com";pn.PROVIDER_ID="google.com";/**
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
 */class fn extends Ii{constructor(){super("github.com")}static credential(e){return Yn._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.GITHUB_SIGN_IN_METHOD="github.com";fn.PROVIDER_ID="github.com";/**
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
 */class mn extends Ii{constructor(){super("twitter.com")}static credential(e,n){return Yn._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return mn.credential(n,r)}catch{return null}}}mn.TWITTER_SIGN_IN_METHOD="twitter.com";mn.PROVIDER_ID="twitter.com";/**
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
 */class wr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await gt._fromIdTokenResponse(e,r,i),o=ud(r);return new wr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ud(r);return new wr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ud(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ks extends Tn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ks.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ks(e,n,r,i)}}function Gp(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ks._fromErrorAndOperation(t,s,e,r):s})}async function U1(t,e,n=!1){const r=await ii(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return wr._forOperation(t,"link",r)}/**
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
 */async function B1(t,e,n=!1){const{auth:r}=t;if(_t(r.app))return Promise.reject(bn(r));const i="reauthenticate";try{const s=await ii(t,Gp(r,i,e,t),n);M(s.idToken,r,"internal-error");const o=pl(s.idToken);M(o,r,"internal-error");const{sub:l}=o;return M(t.uid===l,r,"user-mismatch"),wr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Zt(r,"user-mismatch"),s}}/**
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
 */async function Zp(t,e,n=!1){if(_t(t.app))return Promise.reject(bn(t));const r="signIn",i=await Gp(t,r,e),s=await wr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function z1(t,e){return Zp(In(t),e)}function H1(t,e,n,r){return Qn(t).onIdTokenChanged(e,n,r)}function V1(t,e,n){return Qn(t).beforeAuthStateChanged(e,n)}/**
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
 */function hd(t,e){return wt(t,"POST","/v2/accounts/mfaEnrollment:start",Pt(t,e))}const Ss="__sak";/**
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
 */class Yp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ss,"1"),this.storage.removeItem(Ss),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const W1=1e3,q1=10;class Jp extends Yp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Hp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);u1()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,q1):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},W1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Jp.type="LOCAL";const K1=Jp;/**
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
 */class Xp extends Yp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Xp.type="SESSION";const Qp=Xp;/**
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
 */function G1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Xs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Xs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async d=>d(n.origin,s)),c=await G1(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xs.receivers=[];/**
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
 */function xl(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Z1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,c)=>{const d=xl("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const p=h;if(p.data.eventId===d)switch(p.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(p.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Oe(){return window}function Y1(t){Oe().location.href=t}/**
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
 */function yl(){return typeof Oe().WorkerGlobalScope<"u"&&typeof Oe().importScripts=="function"}async function J1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function X1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function Q1(){return yl()?self:null}/**
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
 */const ef="firebaseLocalStorageDb",ek=1,Es="firebaseLocalStorage",tf="fbase_key";class Ri{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Qs(t,e){return t.transaction([Es],e?"readwrite":"readonly").objectStore(Es)}function tk(){const t=indexedDB.deleteDatabase(ef);return new Ri(t).toPromise()}function nf(){const t=indexedDB.open(ef,ek);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Es,{keyPath:tf})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Es)?e(r):(r.close(),await tk(),e(await nf()))})})}async function pd(t,e,n){const r=Qs(t,!0).put({[tf]:e,value:n});return new Ri(r).toPromise()}async function nk(t,e){const n=Qs(t,!1).get(e),r=await new Ri(n).toPromise();return r===void 0?null:r.value}function fd(t,e){const n=Qs(t,!0).delete(e);return new Ri(n).toPromise()}const rk=800,ik=3;class rf{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=nf(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ik)throw r;if(this.dbPromise){const i=this.dbPromise;this.dbPromise=null;try{(await i).close()}catch{}}}}async initializeServiceWorkerMessaging(){return yl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xs._getInstance(Q1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await J1(),!this.activeServiceWorker)return;this.sender=new Z1(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||X1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await pd(e,Ss,"1"),await fd(e,Ss)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>pd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>nk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>fd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{const e=await this._withRetries(i=>{const s=Qs(i,!1).getAll();return new Ri(s).toPromise()});if(this.isClosing)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}catch(e){return this.isClosing||ts(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}rf.type="LOCAL";const sk=rf;/**
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
 */function md(t,e){return wt(t,"POST","/v2/accounts/mfaSignIn:start",Pt(t,e))}/**
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
 */const Ua=Wp("rcb"),ak=new ji(3e4,6e4);class ok{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=Oe().grecaptcha)!=null&&e.render)}load(e,n=""){return M(lk(n),e,"argument-error"),this.shouldResolveImmediately(n)&&td(Oe().grecaptcha)?Promise.resolve(Oe().grecaptcha):new Promise((r,i)=>{const s=Oe().setTimeout(()=>{i(st(e,"network-request-failed"))},ak.get());Oe()[Ua]=()=>{Oe().clearTimeout(s),delete Oe()[Ua];const l=Oe().grecaptcha;if(!l||!td(l)){i(st(e,"internal-error"));return}const c=l.render;l.render=(d,u)=>{const h=c(d,u);return this.counter++,h},this.hostLanguage=n,r(l)};const o=`${y1()}?${Ir({onload:Ua,render:"explicit",hl:n})}`;ml(o).catch(()=>{clearTimeout(s),i(st(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!((n=Oe().grecaptcha)!=null&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function lk(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class ck{async load(e){return new S1(e)}clearedOneInstance(){}}/**
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
 */const Qr="recaptcha",dk={theme:"light",type:"image"};class uk{constructor(e,n,r={...dk}){this.parameters=r,this.type=Qr,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=In(e),this.isInvisible=this.parameters.size==="invisible",M(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;M(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new ck:new ok,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){M(!this.parameters.sitekey,this.auth,"argument-error"),M(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),M(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Oe()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){M(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){M(Ip()&&!yl(),this.auth,"internal-error"),await hk(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await t1(this.auth);M(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return M(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function hk(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class pk{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Xr._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function fk(t,e,n){if(_t(t.app))return Promise.reject(bn(t));const r=In(t),i=await mk(r,e,Qn(n));return new pk(i,s=>z1(r,s))}async function mk(t,e,n){var r;if(!t._getRecaptchaConfig())try{await R1(t)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const s=i.session;if("phoneNumber"in i){M(s.type==="enroll",t,"internal-error");const o={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Fa(t,o,"mfaSmsEnrollment",async(u,h)=>{if(h.phoneEnrollmentInfo.captchaResponse===Jr){M((n==null?void 0:n.type)===Qr,u,"argument-error");const p=await Ba(u,h,n);return hd(u,p)}return hd(u,h)},"PHONE_PROVIDER").catch(u=>Promise.reject(u))).phoneSessionInfo.sessionInfo}else{M(s.type==="signin",t,"internal-error");const o=((r=i.multiFactorHint)==null?void 0:r.uid)||i.multiFactorUid;M(o,t,"missing-multi-factor-info");const l={mfaPendingCredential:s.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Fa(t,l,"mfaSmsSignIn",async(h,p)=>{if(p.phoneSignInInfo.captchaResponse===Jr){M((n==null?void 0:n.type)===Qr,h,"argument-error");const m=await Ba(h,p,n);return md(h,m)}return md(h,p)},"PHONE_PROVIDER").catch(h=>Promise.reject(h))).phoneResponseInfo.sessionInfo}}else{const s={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Fa(t,s,"sendVerificationCode",async(d,u)=>{if(u.captchaResponse===Jr){M((n==null?void 0:n.type)===Qr,d,"argument-error");const h=await Ba(d,u,n);return dd(d,h)}return dd(d,u)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).sessionInfo}}finally{n==null||n._reset()}}async function Ba(t,e,n){M(n.type===Qr,t,"argument-error");const r=await n.verify();M(typeof r=="string",t,"argument-error");const i={...e};if("phoneEnrollmentInfo"in i){const s=i.phoneEnrollmentInfo.phoneNumber,o=i.phoneEnrollmentInfo.captchaResponse,l=i.phoneEnrollmentInfo.clientType,c=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:o,clientType:l,recaptchaVersion:c}}),i}else if("phoneSignInInfo"in i){const s=i.phoneSignInInfo.captchaResponse,o=i.phoneSignInInfo.clientType,l=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:o,recaptchaVersion:l}}),i}else return Object.assign(i,{recaptchaToken:r}),i}/**
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
 */function gk(t,e){return e?Vt(e):(M(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class vl extends gl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return gr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return gr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function xk(t){return Zp(t.auth,new vl(t),t.bypassAuthState)}function yk(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),B1(n,new vl(t),t.bypassAuthState)}async function vk(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),U1(n,new vl(t),t.bypassAuthState)}/**
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
 */class sf{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xk;case"linkViaPopup":case"linkViaRedirect":return vk;case"reauthViaPopup":case"reauthViaRedirect":return yk;default:Zt(this.auth,"internal-error")}}resolve(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const bk=new ji(2e3,1e4);class cr extends sf{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,cr.currentPopupAction&&cr.currentPopupAction.cancel(),cr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){Yt(this.filter.length===1,"Popup operations only handle one event");const e=xl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(st(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(st(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(st(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,bk.get())};e()}}cr.currentPopupAction=null;/**
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
 */const wk="pendingRedirect",is=new Map;class kk extends sf{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=is.get(this.auth._key());if(!e){try{const r=await Sk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}is.set(this.auth._key(),e)}return this.bypassAuthState||is.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Sk(t,e){const n=jk(e),r=_k(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Ek(t,e){is.set(t._key(),e)}function _k(t){return Vt(t._redirectPersistence)}function jk(t){return rs(wk,t.config.apiKey,t.name)}async function Tk(t,e,n=!1){if(_t(t.app))return Promise.reject(bn(t));const r=In(t),i=gk(r,e),o=await new kk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Ik=600*1e3;class Rk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ck(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!af(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(st(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ik&&this.cachedEventUids.clear(),this.cachedEventUids.has(gd(e))}saveEventToCache(e){this.cachedEventUids.add(gd(e)),this.lastProcessedEventTime=Date.now()}}function gd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function af({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ck(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return af(t);default:return!1}}/**
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
 */async function Ak(t,e={}){return wt(t,"GET","/v1/projects",e)}/**
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
 */const Ok=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Pk=/^https?/;async function Nk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ak(t);for(const n of e)try{if(Lk(n))return}catch{}Zt(t,"unauthorized-domain")}function Lk(t){const e=Co(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Pk.test(n))return!1;if(Ok.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const $k=new ji(3e4,6e4);function xd(){const t=Oe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Dk(t){return new Promise((e,n)=>{var i,s,o;function r(){xd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{xd(),n(st(t,"network-request-failed"))},timeout:$k.get()})}if((s=(i=Oe().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Oe().gapi)!=null&&o.load)r();else{const l=Wp("iframefcb");return Oe()[l]=()=>{gapi.load?r():n(st(t,"network-request-failed"))},ml(`${b1()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw ss=null,e})}let ss=null;function Mk(t){return ss=ss||Dk(t),ss}/**
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
 */const Fk=new ji(5e3,15e3),Uk="__/auth/iframe",Bk="emulator/auth/iframe",zk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Hk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Vk(t){const e=t.config;M(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?hl(e,Bk):`https://${t.config.authDomain}/${Uk}`,r={apiKey:e.apiKey,appName:t.name,v:_i},i=Hk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ir(r).slice(1)}`}async function Wk(t){const e=await Mk(t),n=Oe().gapi;return M(n,t,"internal-error"),e.open({where:document.body,url:Vk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=st(t,"network-request-failed"),l=Oe().setTimeout(()=>{s(o)},Fk.get());function c(){Oe().clearTimeout(l),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const qk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Kk=500,Gk=600,Zk="_blank",Yk="http://localhost";class yd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Jk(t,e,n,r=Kk,i=Gk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c={...qk,width:r.toString(),height:i.toString(),top:s,left:o},d=Ze().toLowerCase();n&&(l=Mp(d)?Zk:n),$p(d)&&(e=e||Yk,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[m,x])=>`${p}${m}=${x},`,"");if(d1(d)&&l!=="_self")return Xk(e||"",l),new yd(null);const h=window.open(e||"",l,u);M(h,t,"popup-blocked");try{h.focus()}catch{}return new yd(h)}function Xk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Qk="__/auth/handler",eS="emulator/auth/handler",tS=encodeURIComponent("fac");async function vd(t,e,n,r,i,s){M(t.config.authDomain,t,"auth-domain-config-required"),M(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:_i,eventId:i};if(e instanceof Kp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Aw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof Ii){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const u of Object.keys(l))l[u]===void 0&&delete l[u];const c=await t._getAppCheckToken(),d=c?`#${tS}=${encodeURIComponent(c)}`:"";return`${nS(t)}?${Ir(l).slice(1)}${d}`}function nS({config:t}){return t.emulator?hl(t,eS):`https://${t.authDomain}/${Qk}`}/**
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
 */const za="webStorageSupport";class rS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qp,this._completeRedirectFn=Tk,this._overrideRedirectResult=Ek}async _openPopup(e,n,r,i){var o;Yt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await vd(e,n,r,Co(),i);return Jk(e,s,xl())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await vd(e,n,r,Co(),i);return Y1(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Yt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Wk(e),r=new Rk(e);return n.register("authEvent",i=>(M(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(za,{type:za},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[za];s!==void 0&&n(!!s),Zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Nk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Hp()||Dp()||fl()}}const iS=rS;var bd="@firebase/auth",wd="1.13.6";/**
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
 */class sS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function aS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function oS(t){ni(new br("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;M(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vp(t)},d=new g1(r,i,s,c);return A1(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ni(new br("auth-internal",e=>{const n=In(e.getProvider("auth").getImmediate());return(r=>new sS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),fr(bd,wd,aS(t)),fr(bd,wd,"esm2020")}/**
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
 */const lS=300,cS=xp("authIdTokenMaxAge")||lS;let kd=null;const dS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>cS)return;const i=n==null?void 0:n.token;kd!==i&&(kd=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function uS(t=N0()){const e=kp(t,"auth");if(e.isInitialized())return e.getImmediate();const n=C1(t,{popupRedirectResolver:iS,persistence:[sk,K1,Qp]}),r=xp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=dS(s.toString());V1(n,o,()=>o(n.currentUser)),H1(n,l=>o(l))}}const i=ww("auth");return i&&O1(n,`http://${i}`),n}function hS(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}x1({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=st("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",hS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});oS("Browser");const pS={apiKey:ew,authDomain:tw,projectId:nw,storageBucket:rw,messagingSenderId:iw,appId:sw,measurementId:aw},fS=Sp(pS),_s=uS(fS),mS=()=>typeof window>"u"?!1:["localhost","127.0.0.1","[::1]"].includes(window.location.hostname);mS()&&(_s.settings.appVerificationDisabledForTesting=!0);function gS(t){return t.includes(me.LIST_ALL)?"all":t.includes(me.LIST_SUB)?"sub":"own"}const xS="/api/company/orders/claim";async function yS(t){try{return(await se.post(xS,{phone:t})).data.claimedOrderIds??[]}catch(e){return console.error("[portal auth] claimOrders failed",e),[]}}const dt=Iy()(Ay(t=>({token:null,refresh:null,uid:null,name:null,companyUid:null,permissionList:[],login:e=>{var r,i;t({token:e.token,refresh:e.refresh,uid:e.uid,name:e.name,companyUid:e.companyUid??null,permissionList:e.permission.length>0?e.permission:Ag()});const n=((r=e.verifiedPhone)==null?void 0:r.trim())||((i=_s.currentUser)==null?void 0:i.phoneNumber)||"";n&&yS(n)},logout:()=>t({token:null,refresh:null,uid:null,name:null,companyUid:null,permissionList:[]})}),{name:`${Qb}:portal-auth`,onRehydrateStorage:()=>t=>{t!=null&&t.token&&!ms("X-Token")&&t.logout()}})),ea=()=>dt(t=>t.token!==null),Ut=t=>dt(e=>e.permissionList.includes(t)),of=()=>dt(t=>gS(t.permissionList)),lf=B`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background: var(--v29-primary-fill);
  color: var(--v29-on-primary);
  font-family: ${tt};
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
`,vS=f(Fe)`
  ${lf}
`,cf=f.div`
  position: relative;
`,bS=f.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid var(--v29-line);
  background: var(--v29-primary);
  color: var(--v29-on-primary);
  font-family: ${_};
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
`,df=f(Ho.div)`
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  min-width: 220px;
  padding: 8px;
  border-radius: 12px;
  background: var(--v29-card);
  border: 1px solid var(--v29-line-soft);
  box-shadow: var(--v29-popover-shadow);
  font-family: ${_};
`,wS=f.div`
  padding: 8px 10px 10px;
  border-bottom: 1px solid var(--v29-line-soft);
  margin-bottom: 6px;
  font-size: 13px;
  font-weight: 600;
  color: var(--v29-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ta=`
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
`,kS=f(Fe)`
  ${ta}
  font-family: ${_};
`,SS=f.button`
  ${ta}
  font-family: ${_};
`,ES=f.button`
  ${lf}
  svg {
    width: 12px;
    height: 12px;
    transition: transform 0.2s ease;
  }
  &[aria-expanded='true'] svg {
    transform: rotate(180deg);
  }
`,_S=f.a`
  display: inline-flex;
  align-items: center;
  min-height: 36px;
  padding: 0 4px;
  font-family: ${_};
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
`,jS=f(Fe)`
  ${ta}
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  font-family: ${_};
`,TS=f.a`
  ${ta}
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  font-family: ${_};
`,IS=f.span`
  font-weight: 600;
`,RS=f.span`
  font-size: 12px;
  /* the full text colour: the muted grey drops below AA on the hover tint */
  color: var(--v29-text);
  opacity: 0.85;
`,CS=({destinations:t})=>{const{t:e}=G(),[n,r]=S.useState(!1),i=S.useRef(null),s=S.useRef(null);if(S.useEffect(()=>{if(!n)return;const o=c=>{var d;(d=i.current)!=null&&d.contains(c.target)||r(!1)},l=c=>{var d;c.key==="Escape"&&(r(!1),(d=s.current)==null||d.focus())};return document.addEventListener("pointerdown",o),document.addEventListener("keydown",l),()=>{document.removeEventListener("pointerdown",o),document.removeEventListener("keydown",l)}},[n]),t.length===0)return null;if(t.length===1){const[o]=t;return o.external?a.jsx(_S,{href:o.href,"data-login-role":o.role,children:e(`common:loginRole.${o.role}.login`)}):a.jsx(vS,{to:o.href,"data-login-role":o.role,children:e("common:signIn")})}return a.jsxs(cf,{ref:i,onBlur:o=>{var l;n&&!((l=i.current)!=null&&l.contains(o.relatedTarget))&&r(!1)},children:[a.jsxs(ES,{ref:s,type:"button","aria-expanded":n,"aria-controls":"nav-signin-destinations",onClick:()=>r(o=>!o),children:[e("common:signIn"),a.jsx("svg",{viewBox:"0 0 12 12","aria-hidden":"true",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:a.jsx("path",{d:"M2.5 4.5 6 8l3.5-3.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),a.jsx(Zo,{children:n&&a.jsx(df,{id:"nav-signin-destinations",initial:{opacity:0,y:-6},animate:{opacity:1,y:0},exit:{opacity:0,y:-6},transition:{duration:.18,ease:Bs},children:t.map(o=>{const l=a.jsxs(a.Fragment,{children:[a.jsx(IS,{children:e(`common:loginRole.${o.role}.label`)}),a.jsx(RS,{children:e(`common:loginRole.${o.role}.hint`)})]});return o.external?a.jsx(TS,{href:o.href,"data-login-role":o.role,children:l},o.role):a.jsx(jS,{to:o.href,"data-login-role":o.role,onClick:()=>r(!1),children:l},o.role)})})})]})},AS=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px 10px;
  font-size: 14px;
  color: var(--v29-muted);
`,OS=f.button`
  border: none;
  background: transparent;
  padding: 2px 6px;
  border-radius: 6px;
  font-family: ${_};
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
`,uf=()=>{const{t,i18n:e}=G(),n=dt(x=>x.token),r=dt(x=>x.name),[i,s]=S.useState(!1),o=Ut(me.LIST),l=S.useRef(null),c=_r(),d=Xo();if(S.useEffect(()=>{if(!i)return;const x=v=>{var j;(j=l.current)!=null&&j.contains(v.target)||s(!1)},y=v=>{v.key==="Escape"&&s(!1)};return document.addEventListener("pointerdown",x),document.addEventListener("keydown",y),()=>{document.removeEventListener("pointerdown",x),document.removeEventListener("keydown",y)}},[i]),!n)return a.jsx(CS,{destinations:d});const u=(r??"?").trim().charAt(0).toUpperCase()||"?",h=e.language,p=go.length>1,m=x=>{Ey(x)};return a.jsxs(cf,{ref:l,children:[a.jsx(bS,{"aria-label":t("common:accountMenu"),"aria-expanded":i,onClick:()=>s(x=>!x),children:u}),a.jsx(Zo,{children:i&&a.jsxs(df,{initial:{opacity:0,y:-6},animate:{opacity:1,y:0},exit:{opacity:0,y:-6},transition:{duration:.18,ease:Bs},children:[a.jsx(wS,{children:r}),o&&a.jsx(kS,{to:"/portal/orders",onClick:()=>s(!1),children:t("common:orders")}),p&&a.jsxs(AS,{children:[a.jsx("span",{children:t("common:language")}),a.jsx("span",{children:go.map(x=>a.jsx(OS,{$active:h===x,onClick:()=>m(x),children:ky[x]},x))})]}),a.jsx(SS,{onClick:()=>{s(!1),sp(),c(Jo(),{replace:!0})},children:t("common:signOut")})]})})]})},PS=f.nav`
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
    --brand-logo-color: ${Vo};
  }

  @media (max-width: 720px) {
    padding: 12px 20px;
  }
`,NS=f.div`
  display: flex;
  align-items: center;
  gap: 16px;
  @media (max-width: 480px) {
    gap: 8px;
  }
`,LS=f.span`
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
`,$S=f.button`
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
`,DS=f(Fe)`
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 8px;
  font-family: ${tt};
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
`,bl=({theme:t,onToggleTheme:e,audience:n="public"})=>{const{t:r}=G(),{pathname:i}=Ke(),s=ea(),o=i.startsWith("/portal")&&s,l=Xo(),c=l.length>0,d=l.some(h=>h.role==="shipper"),u=n==="receiver";return a.jsxs(PS,{children:[a.jsx(Fe,{to:"/","aria-label":r("common:brandHome"),style:{display:"inline-flex"},children:a.jsxs(LS,{$compact:c&&!u,children:[a.jsx("span",{className:"nav-wordmark","aria-hidden":"true",children:a.jsx(as,{height:28,ariaLabel:""})}),a.jsx("span",{className:"nav-mark","aria-hidden":"true",children:a.jsx(as,{height:28,variant:"mark",ariaLabel:""})})]})}),a.jsxs(NS,{children:[a.jsx($S,{onClick:e,"aria-label":r("common:toggleTheme"),children:t==="dark"?a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("circle",{cx:"12",cy:"12",r:"5"}),a.jsx("path",{d:"M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"})]}):a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})}),!o&&!u&&a.jsx(DS,{to:"/contact",$ghost:d,$hideOnNarrow:d,children:r("common:getEarlyAccess")}),!u&&(c||s)&&a.jsx(uf,{})]})]})},Sd="senditgo-v38-cookie-consent",Ed="--cookie-consent-offset",hf=720;function _d(t){return t<=hf}function MS(t){return t<=0?0:Math.round(t)}function pf(t,e,n){if(n<=0){t.removeProperty(Ed),e.style.paddingBottom="";return}const r=`${n}px`;t.setProperty(Ed,r),e.style.paddingBottom=r}function jd(t,e){pf(t,e,0)}const FS=f(Ho.div)`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background: var(--v29-card);
  border-top: 1px solid var(--v29-line-soft);
  box-shadow: var(--v29-popover-shadow);
  font-family: ${_};
  color: var(--v29-text);
  padding: 12px clamp(16px, 3vw, 32px) max(12px, env(safe-area-inset-bottom, 0px));
  display: flex;
  justify-content: center;
`,US=f.div`
  width: 100%;
  max-width: 1180px;
  display: flex;
  align-items: ${t=>t.$stack?"stretch":"center"};
  justify-content: space-between;
  flex-direction: ${t=>t.$stack?"column":"row"};
  gap: ${t=>t.$stack?"12px":"20px"};
  text-align: ${t=>t.$stack?"center":"left"};
`,BS=f.p`
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
`,zS=f.div`
  display: flex;
  align-items: center;
  justify-content: ${t=>t.$stack?"center":"flex-end"};
  gap: 8px;
  flex-shrink: 0;
`,Td=f.button`
  appearance: none;
  border: none;
  cursor: pointer;
  min-height: 44px;
  padding: 8px 18px;
  border-radius: var(--v29-radius-button);
  font-family: ${_};
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
`;function HS(){const[t,e]=S.useState(()=>typeof window>"u"?!1:_d(window.innerWidth));return S.useEffect(()=>{const n=window.matchMedia(`(max-width: ${hf}px)`),r=()=>e(_d(window.innerWidth));return r(),n.addEventListener("change",r),()=>n.removeEventListener("change",r)},[]),t}const na=()=>{const[t,e]=S.useState(()=>{try{return localStorage.getItem(Sd)||null}catch{return null}}),[n,r]=S.useState(!1),i=S.useRef(null),s=HS();S.useEffect(()=>{if(t!==null)return;const c=window.setTimeout(()=>r(!0),1100);return()=>window.clearTimeout(c)},[t]);const o=t===null&&n;S.useEffect(()=>{if(!o){jd(document.documentElement.style,document.body);return}const c=i.current;if(!c)return;const d=()=>{pf(document.documentElement.style,document.body,MS(c.offsetHeight))};d();const u=new ResizeObserver(d);return u.observe(c),()=>{u.disconnect(),jd(document.documentElement.style,document.body)}},[o,s]);const l=c=>{e(c);try{localStorage.setItem(Sd,c)}catch{}};return a.jsx(Zo,{children:o&&a.jsx(FS,{ref:i,role:"region","aria-label":"Cookie consent",initial:{y:"100%"},animate:{y:0},exit:{y:"100%"},transition:{duration:.35,ease:Bs},children:a.jsxs(US,{$stack:s,children:[a.jsxs(BS,{children:[a.jsx("span",{className:"lede",children:"We use a few optional analytics cookies"})," to see how this page performs — nothing is set until you choose. Decline and only the essentials run. Read our ",a.jsx(Fe,{to:"/privacy",children:"Privacy Policy"}),"."]}),a.jsxs(zS,{$stack:s,children:[a.jsx(Td,{$variant:"decline",type:"button",onClick:()=>l("declined"),children:"Decline"}),a.jsx(Td,{$variant:"accept",type:"button",onClick:()=>l("accepted"),children:"Accept"})]})]})},"consent")})},VS=f.main`
  flex: 1;
  width: 100%;
  max-width: 760px;
  min-width: 0;
  margin: 0 auto;
  padding: 120px 32px 96px;

  @media (max-width: 720px) {
    padding: 96px 20px 64px;
  }
`,er=Xt,Rr=f(en).attrs({as:"h1"})``,Ci=Qt,ee=f(wm)`
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
`,Rn=({children:t})=>{const{mode:e,toggleTheme:n}=zs();return a.jsxs(a.Fragment,{children:[a.jsx(Hs,{}),a.jsxs(Wo,{children:[a.jsx(bl,{theme:e,onToggleTheme:n}),a.jsx(VS,{children:t}),a.jsx(na,{})]})]})},Id="https://apps.apple.com/app/sendit-go/id000000000",Rd="https://play.google.com/store/apps/details?id=tw.com.holieninnovation.senditgo",WS=()=>{if(typeof navigator>"u")return"other";const t=navigator.userAgent||"",e=navigator.platform==="MacIntel"&&(navigator.maxTouchPoints??0)>1;return/iPad|iPhone|iPod/.test(t)||e?"ios":/Android/i.test(t)?"android":"other"},qS=f.div`
  display: grid;
  gap: 14px;
  width: 100%;
  max-width: 420px;
  margin: 32px auto 24px;
`,Cd=f.a`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 14px 28px;
  border-radius: 8px;
  background: var(--v29-primary);
  color: #fff;
  font-family: ${_};
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
`,Ad=f.span`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`,KS=f.p`
  font-family: ${_};
  font-size: 13px;
  color: var(--v29-muted);
  margin: 16px 0 0;
  text-align: center;
`,GS=f.div`
  margin: 40px auto 0;
  display: grid;
  justify-items: center;
  gap: 12px;
`,ZS=f.div`
  background: #FFFFFF;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid var(--v29-line-soft);
  box-shadow: 0 4px 24px -8px rgba(0, 0, 0, 0.15);
  line-height: 0;
`,YS=f.span`
  font-family: ${_};
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--v29-muted);
`,JS=()=>a.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:a.jsx("path",{d:"M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.49-.12-1.1.473-2.25 1.182-2.99.795-.85 2.142-1.49 2.982-1.58zM20.93 17.49c-.45 1.04-.66 1.5-1.24 2.42-.81 1.28-1.96 2.86-3.38 2.88-1.26.01-1.59-.82-3.3-.82s-2.07.81-3.3.83c-1.42.02-2.49-1.39-3.31-2.66-2.28-3.55-2.52-7.71-1.11-9.92.99-1.55 2.55-2.45 4.02-2.45 1.5 0 2.45.82 3.69.82 1.21 0 1.95-.82 3.69-.82 1.32 0 2.71.72 3.7 1.96-3.25 1.78-2.72 6.42-.49 7.74z"})}),XS=()=>a.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:a.jsx("path",{d:"M17.6 9.48l1.84-3.18a.4.4 0 0 0-.69-.4l-1.86 3.23a11.85 11.85 0 0 0-9.78 0L5.25 5.9a.4.4 0 0 0-.69.4l1.84 3.18A11.49 11.49 0 0 0 .5 19h23a11.49 11.49 0 0 0-5.9-9.52zM7 15.25a1.06 1.06 0 1 1 1.06-1.06A1.06 1.06 0 0 1 7 15.25zm10 0a1.06 1.06 0 1 1 1.06-1.06A1.06 1.06 0 0 1 17 15.25z"})}),QS=()=>{const[t,e]=S.useState("other");S.useEffect(()=>{const r=WS();e(r),r==="ios"?window.location.replace(Id):r==="android"&&window.location.replace(Rd)},[]);const n=S.useMemo(()=>typeof window<"u"?`${window.location.origin}${Wt("/install")}`:"https://senditgo.com/install",[]);return a.jsxs(Rn,{children:[a.jsxs(qS,{children:[a.jsxs(Cd,{href:Id,"aria-label":"Download on the App Store",children:[a.jsx(Ad,{children:a.jsx(JS,{})}),a.jsxs("span",{children:[a.jsx("span",{className:"small",children:"Download on the"}),a.jsx("span",{className:"big",children:"App Store"})]})]}),a.jsxs(Cd,{href:Rd,"aria-label":"Get it on Google Play",children:[a.jsx(Ad,{children:a.jsx(XS,{})}),a.jsxs("span",{children:[a.jsx("span",{className:"small",children:"Get it on"}),a.jsx("span",{className:"big",children:"Google Play"})]})]})]}),t==="other"&&a.jsx(KS,{children:"On a desktop? Scan the code below with your phone."}),a.jsxs(GS,{children:[a.jsx(ZS,{children:a.jsx(yh,{value:n,size:144,level:"M",bgColor:"#FFFFFF",fgColor:Vo,"aria-label":"Scan to install the SenditGo driver app"})}),a.jsx(YS,{children:"Scan to install"})]})]})},Ge="[PLACEHOLDER — Yi]",ln={eyebrow:"About",title:`${Ge} — the one line that says what SenditGo is for`,belief:`${Ge} — one sentence on what we believe about delivery work and why this company exists.`,blocks:[{heading:"Where we started",body:`${Ge} — the origin: what was broken for fleet operators, and what made it worth building software for.`},{heading:"How we work",body:`${Ge} — how the team builds and supports the product, and what a customer can expect from us day to day.`},{heading:"Where we are going",body:`${Ge} — the direction over the next few years, in plain terms and without dates we cannot keep.`}],valuesHeading:"What we hold to",values:[{heading:`${Ge} — value one`,body:`${Ge} — one or two lines on what it means in practice.`},{heading:`${Ge} — value two`,body:`${Ge} — one or two lines on what it means in practice.`},{heading:`${Ge} — value three`,body:`${Ge} — one or two lines on what it means in practice.`},{heading:`${Ge} — value four`,body:`${Ge} — one or two lines on what it means in practice.`}],closing:{heading:"Work with us",body:`${Ge} — the closing invitation, and where to go next.`}},eE=f.p`
  margin: 0 0 24px;
  padding: 12px 16px;
  border-left: 3px solid ${"var(--v29-primary)"};
  background: color-mix(in srgb, var(--v29-primary) 8%, transparent);
  font-family: ${_};
  font-size: 13.5px;
  color: var(--v29-text);
`,tE=f.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 8px;
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`,nE=f.div`
  padding: 20px;
  border-radius: var(--v29-radius-container, 16px);
  background: var(--v29-card);
  box-shadow: var(--v29-card-shadow);
  h3 {
    margin: 0 0 8px;
    font-family: ${_};
    font-size: 15px;
    font-weight: 700;
    color: var(--v29-text);
  }
  p {
    margin: 0;
    font-family: ${_};
    font-size: 14px;
    line-height: 1.6;
    color: var(--v29-muted);
  }
`,rE=()=>a.jsxs(Rn,{children:[a.jsx(er,{children:ln.eyebrow}),a.jsx(Rr,{children:ln.title}),a.jsxs(eE,{children:["This page is a structure waiting for its words. Every line marked"," ",a.jsx("strong",{children:Ge})," is a slot, not copy."]}),a.jsx(Ci,{children:ln.belief}),ln.blocks.map(t=>a.jsxs(ee,{children:[a.jsx("h2",{children:t.heading}),a.jsx("p",{children:t.body})]},t.heading)),a.jsxs(ee,{children:[a.jsx("h2",{children:ln.valuesHeading}),a.jsx(tE,{children:ln.values.map((t,e)=>a.jsxs(nE,{children:[a.jsx("h3",{children:t.heading}),a.jsx("p",{children:t.body})]},e))})]}),a.jsxs(ee,{children:[a.jsx("h2",{children:ln.closing.heading}),a.jsx("p",{children:ln.closing.body})]})]}),Dt="[PLACEHOLDER — Yi]",ie={eyebrow:"About",title:"Moving delivery forward.",opening:"We believe running a delivery operation should feel clear, connected and manageable — even when everything around it is moving.",beliefSlot:`${Dt}: final one-line company belief / purpose statement.`,whoWeAre:"SenditGo builds technology for the people who plan, manage and carry out delivery every day. We bring the moving parts of an operation together so teams can spend less time working around disconnected systems and more time getting things where they need to go.",reality:{heading:"Built for the reality of delivery",body:["Delivery doesn't happen in a perfect environment. Plans change. Orders change. Drivers move. Customers are waiting. Managers need to make decisions with the information they have right now.","SenditGo exists to make that work simpler.","Our aim is to give operators and drivers a shared view of what is happening — from orders and shifts to routes, delivery progress and proof of delivery — and make the next action easier to understand."],slot:`${Dt}: what problem do we ultimately want SenditGo to solve for the industry? 1–2 sentences.`},heading:{heading:"Where we're heading",body:"We see a future where delivery operations don't have to be held together by spreadsheets, manual handovers and information scattered between different systems.",slot:`${Dt}: long-term ambition for SenditGo.`,pull:"We want reliable, intelligent delivery technology to feel like part of the operation itself — quietly helping people make better decisions, respond faster and keep goods moving."},origin:{heading:"It started with a real operational problem",body:["SenditGo began by looking closely at the everyday problems inside transportation and logistics: information living in different places, repeated manual work, limited visibility and software that doesn't always reflect what happens in the field.","Instead of treating those as separate problems, we started building a connected system around the operation as a whole.","Today, that means bringing fleet management, delivery operations and the driver experience together across web and mobile."],slot:`${Dt}: 2–3 factual sentences about the real origin of SenditGo. No legal-company history required.`},howWeBuild:{heading:"How we choose to build",intro:"These are not HR slogans. Each one should tell a customer something about the kind of company they are dealing with.",values:[{heading:"Solve the real problem",body:"We start with what people are actually trying to get done. Technology matters when it improves the work, not simply because it is new."},{heading:"Make complexity feel simple",body:"Logistics is complex enough. We do the difficult work behind the scenes so the experience in front of the user can stay clear."},{heading:"Build for the people doing the work",body:"Drivers, operators and managers experience the same operation differently. We listen to the people using the product and design around the realities of their day."},{heading:"Own the outcome",body:"Shipping a feature isn't the finish line. We care about whether what we build works in practice and makes the operation better."},{heading:"Improve together",body:"Good products come from different perspectives. We share what we know, challenge ideas constructively and keep learning from customers and one another."}],extraSlot:{heading:`${Dt}: optional SenditGo-specific value`,body:`${Dt}: adapted from responsibility / resourcefulness / partnership / global perspective — in SenditGo words, not a parent-company paste.`}},standard:{heading:"The standard we're working toward",slot:`${Dt}: a short statement describing what success looks like for SenditGo.`,example:"Delivery technology that people can trust without having to think about it.",body:"When the system is doing its job, teams have the information they need, drivers know what comes next, managers can respond to change, and the technology stays out of the way."},stillBuilding:{heading:"And we're still building",body:"What we have today is one part of a much longer journey.",slot:`${Dt}: what SenditGo wants to become over the next several years, without dates, market-size claims or unreleased product promises.`,close:"We'll continue listening to the people running real operations, improving what already exists and exploring where better technology can remove the next source of friction."},invite:{heading:"Come build what moves next",body:"The best delivery systems aren't built from assumptions. They're shaped by the people running operations, solving problems and moving things every day.",slot:`${Dt}: final CTA depending on what this page should drive.`}},iE=f.h1`
  font-family: ${tt};
  font-style: italic;
  font-weight: 700;
  font-size: clamp(1.9rem, 1.3rem + 2.6vw, 3rem);
  letter-spacing: 0.01em;
  line-height: 1.08;
  margin: 0 0 16px;
  color: var(--v29-text);
`,sE=f.p`
  margin: 0 0 28px;
  padding: 12px 16px;
  border-left: 3px solid var(--v29-primary);
  background: color-mix(in srgb, var(--v29-primary) 8%, transparent);
  font-family: ${_};
  font-size: 13.5px;
  color: var(--v29-text);
`,Pn=f.p`
  margin: 16px 0 0;
  padding: 12px 16px;
  border-left: 3px solid color-mix(in srgb, var(--v29-muted) 50%, transparent);
  background: color-mix(in srgb, var(--v29-muted) 8%, transparent);
  font-family: ${_};
  font-size: 13.5px;
  line-height: 1.55;
  color: var(--v29-muted);
`,Od=f.blockquote`
  margin: 20px 0 0;
  padding: 4px 0 4px 20px;
  border-left: 3px solid var(--v29-primary);
  font-family: ${tt};
  font-size: 20px;
  font-weight: 900;
  line-height: 1.35;
  color: var(--v29-text);
`,aE=f.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 16px;
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`,Pd=f.div`
  padding: 20px;
  border-radius: var(--v29-radius-container, 16px);
  background: var(--v29-card);
  box-shadow: var(--v29-card-shadow);
  h3 {
    margin: 0 0 8px;
    font-family: ${_};
    font-size: 15px;
    font-weight: 700;
    color: var(--v29-text);
  }
  p {
    margin: 0;
    font-family: ${_};
    font-size: 14px;
    line-height: 1.6;
    color: var(--v29-muted);
  }
`,oE=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
`,lE=f(Fe)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 20px;
  border-radius: 999px;
  background: var(--v29-primary);
  color: var(--v29-on-primary);
  font-family: ${_};
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  &:hover {
    background: var(--v29-primary-hover);
  }
`,cE=()=>a.jsxs(Rn,{children:[a.jsxs(sE,{children:["Demo only — ",a.jsx("code",{children:"/about-v1"}),". Live ",a.jsx("code",{children:"/about"})," is unchanged and still dark."]}),a.jsx(er,{children:ie.eyebrow}),a.jsx(iE,{children:ie.title}),a.jsx(Ci,{children:ie.opening}),a.jsx(Pn,{children:ie.beliefSlot}),a.jsx(ee,{children:a.jsx("p",{children:ie.whoWeAre})}),a.jsxs(ee,{children:[a.jsx("h2",{children:ie.reality.heading}),ie.reality.body.map(t=>a.jsx("p",{children:t},t)),a.jsx(Pn,{children:ie.reality.slot})]}),a.jsxs(ee,{children:[a.jsx("h2",{children:ie.heading.heading}),a.jsx("p",{children:ie.heading.body}),a.jsx(Pn,{children:ie.heading.slot}),a.jsx(Od,{children:ie.heading.pull})]}),a.jsxs(ee,{children:[a.jsx("h2",{children:ie.origin.heading}),ie.origin.body.map(t=>a.jsx("p",{children:t},t)),a.jsx(Pn,{children:ie.origin.slot})]}),a.jsxs(ee,{children:[a.jsx("h2",{children:ie.howWeBuild.heading}),a.jsx("p",{children:ie.howWeBuild.intro}),a.jsxs(aE,{children:[ie.howWeBuild.values.map(t=>a.jsxs(Pd,{children:[a.jsx("h3",{children:t.heading}),a.jsx("p",{children:t.body})]},t.heading)),a.jsxs(Pd,{children:[a.jsx("h3",{children:ie.howWeBuild.extraSlot.heading}),a.jsx("p",{children:ie.howWeBuild.extraSlot.body})]})]})]}),a.jsxs(ee,{children:[a.jsx("h2",{children:ie.standard.heading}),a.jsx(Pn,{children:ie.standard.slot}),a.jsx(Od,{children:ie.standard.example}),a.jsx("p",{style:{marginTop:16},children:ie.standard.body})]}),a.jsxs(ee,{children:[a.jsx("h2",{children:ie.stillBuilding.heading}),a.jsx("p",{children:ie.stillBuilding.body}),a.jsx(Pn,{children:ie.stillBuilding.slot}),a.jsx("p",{children:ie.stillBuilding.close})]}),a.jsxs(ee,{children:[a.jsx("h2",{children:ie.invite.heading}),a.jsx("p",{children:ie.invite.body}),a.jsx(Pn,{children:ie.invite.slot}),a.jsx(oE,{children:a.jsx(lE,{to:"/contact",children:"Talk to us"})})]})]}),dE=()=>a.jsxs(Rn,{children:[a.jsx(er,{children:"About us"}),a.jsx(Rr,{children:"One connected delivery operation."}),a.jsx(Ci,{children:"SenditGo brings route planning, dispatch, live tracking and proof of delivery together for local and last-mile fleets."}),a.jsxs(ee,{style:{paddingTop:40},children:[a.jsx("h2",{children:"Built around the delivery day."}),a.jsx("p",{children:"Build runs, assign orders and review the day in Order Management. Drivers follow their run and record delivery details, while dispatchers keep track of progress in one place."})]}),a.jsxs(ee,{children:[a.jsx("h2",{children:"Meet SAM, your planning engine."}),a.jsx("p",{children:"SAM stands for Smart Adaptive Model. It brings your delivery requirements and available vehicles together to help you build a workable route plan."}),a.jsx("p",{children:"Delivery locations and time windows, your warehouse and vehicle capacity give the plan its starting point. You review the proposed plan in Order Management and stay in control of what goes out."})]}),a.jsxs(ee,{children:[a.jsx("h2",{children:"Talk through your operation."}),a.jsxs("p",{children:["Tell us about your fleet, your delivery day and what you need from your next system. ",a.jsx(Fe,{to:"/contact",children:"Talk to us"})," about a demo, pricing or integrations."]})]})]}),xe={legalName:"Senditgo Co., Ltd.",jurisdiction:"Taiwan, R.O.C.",address:"24F.-6, No. 213, Chaofu Rd., Xitun Dist., Taichung City, Taiwan (R.O.C.)",supportEmail:"info@holieninnovation.com.tw"},uE=["demo","pricing","solution","integrations","general"],Nd={name:"fleet_size",label:"How many vehicles?",type:"select",required:!0,options:["1–5","6–20","21–50","51–200","More than 200"]},Ui={name:"company",label:"Company",type:"text",required:!0,autoComplete:"organization"},ff={demo:{type:"demo",label:"Book a product demo",lede:"Tell us a little about your operation and we will bring the right screens.",fields:[Ui,Nd,{name:"preferred_time",label:"When suits you?",type:"text",required:!1,hint:"A day and a rough time is enough. We will confirm by email."}]},pricing:{type:"pricing",label:"Plans and pricing",lede:"Pricing depends on how many vehicles you run, so start there.",fields:[Ui,Nd,{name:"start_date",label:"When are you looking to start?",type:"text",required:!1}]},solution:{type:"solution",label:"Find the right solution",lede:"Describe the job you are trying to do and we will tell you honestly whether we fit.",fields:[Ui,{name:"operation",label:"What does your delivery day look like?",type:"textarea",required:!0,hint:"Types of drops, how many a day, what goes wrong most often."}]},integrations:{type:"integrations",label:"Integrations",lede:"Tell us what you already run and we will tell you how it connects.",fields:[Ui,{name:"system_name",label:"Which system?",type:"text",required:!0,hint:"The order, warehouse or accounting system you want connected."},{name:"integration_need",label:"What should move between them?",type:"textarea",required:!1}]},general:{type:"general",label:"General",lede:"Anything else — we read every one.",fields:[{name:"message",label:"Your message",type:"textarea",required:!0}]}};uE.map(t=>({value:t,label:ff[t].label}));function Oo(t){return t?ff[t].fields:[]}function hE(t,e,n){const r=[];t||r.push("enquiry_type"),n.name.trim()||r.push("name"),pE(n.email)||r.push("email");for(const i of Oo(t))i.required&&!(e[i.name]??"").trim()&&r.push(i.name);return r}function pE(t){const e=t.trim();return e.length>4&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}f.form`
  display: grid;
  gap: 16px;
  font-family: ${_};
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
`;const wl=`
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
  ${wl}
`;f.textarea`
  ${wl};
  min-height: 120px;
  resize: vertical;
`;f.select`
  ${wl};
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
`;const fE=()=>{var v;const[t,e]=S.useState(""),[n,r]=S.useState(""),[i,s]=S.useState(""),[o,l]=S.useState(""),[c,d]=S.useState({}),[u,h]=S.useState(!1);u&&hE(t,c,{name:n,email:i});const[p,m]=S.useState("idle");S.useId(),S.useRef(null);const x=S.useRef(null),y=(v=Oo(t)[0])==null?void 0:v.name;return S.useEffect(()=>{var E;if(!t||!y)return;const j=(E=x.current)==null?void 0:E.querySelector(`[name="${y}"]`);j==null||j.focus()},[t,y]),{...Object.fromEntries(Oo(t).map(j=>[j.name,j.label]))},a.jsxs(Rn,{children:[a.jsx(er,{children:"Contact"}),a.jsx(Rr,{children:"Talk to us."}),a.jsx(ee,{children:a.jsxs("p",{children:["Email ",a.jsx("a",{href:`mailto:${xe.supportEmail}`,children:xe.supportEmail})," to contact the SenditGo team."]})})]})},mE=f.p`
  font-family: ${_};
  font-size: 13px;
  color: var(--v29-muted);
  margin: 0 0 32px;
  letter-spacing: 0.02em;
`,Ld=f.div`
  max-width: 100%;
  overflow-x: auto;
  &:focus-visible {
    outline: 2px solid var(--v29-primary);
    outline-offset: 2px;
  }
`,$d=f.p`
  @media (min-width: 561px) {
    display: none;
  }
`,Dd=f.table`
  width: 100%;
  border-collapse: collapse;
  @media (max-width: 560px) {
    min-width: 520px;
  }
  margin: 8px 0 16px;
  font-family: ${_};
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
`,gE=()=>a.jsxs(Rn,{children:[a.jsx(er,{children:"Privacy"}),a.jsx(Rr,{children:"Privacy policy."}),a.jsx(mE,{children:"Last updated: 18 May 2026"}),a.jsxs(Ci,{children:["This policy explains what ",xe.legalName," collects through the SenditGo driver app and this website, why, how long we keep it, and the rights you have. The data controller is ",xe.legalName]}),a.jsx(ee,{children:a.jsxs("p",{children:["For a summary of the app’s data collection and protections, see"," ",a.jsx("a",{href:Wt("/data-safety"),children:"Data safety"}),". To remove your account and its associated data, see ",a.jsx("a",{href:Wt("/account-deletion"),children:"Delete account"}),"."]})}),a.jsxs(ee,{children:[a.jsx("h2",{children:"1. Who we are"}),a.jsxs("p",{children:["SenditGo is operated by ",xe.legalName,", a company registered in"," ",xe.jurisdiction," with its principal address at ",xe.address,". We are the developer of record on the App Store and Google Play and the entity responsible for handling personal information under the Australian Privacy Act 1988 (Cth). For any privacy question, reach us at"," ",a.jsx("a",{href:`mailto:${xe.supportEmail}`,children:xe.supportEmail}),"."]})]}),a.jsxs(ee,{children:[a.jsx("h2",{id:"privacy-collection",children:"2. What we collect"}),a.jsx("p",{children:"We collect only the data needed to run a dispatch operation — no advertising profiles, no sale to third parties."}),a.jsx($d,{id:"privacy-collection-hint",children:"Swipe or scroll sideways to read the table."}),a.jsx(Ld,{role:"region","aria-labelledby":"privacy-collection","aria-describedby":"privacy-collection-hint",tabIndex:0,children:a.jsxs(Dd,{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Category"}),a.jsx("th",{children:"Examples"}),a.jsx("th",{children:"Why"})]})}),a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("strong",{children:"Account"})}),a.jsx("td",{children:"Mobile number, name, email, employer (your operator)"}),a.jsx("td",{children:"Sign-in, identifying you to your operator"})]}),a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("strong",{children:"Location"})}),a.jsx("td",{children:"GPS coordinates while a shift is active"}),a.jsx("td",{children:"Live driver tracking, ETA, geofence events"})]}),a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("strong",{children:"Delivery content"})}),a.jsx("td",{children:"Photos, signatures, notes captured at the door"}),a.jsx("td",{children:"Proof of delivery for your operator and their customer"})]}),a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("strong",{children:"Device & usage"})}),a.jsx("td",{children:"Device model, OS version, app version, crash logs"}),a.jsx("td",{children:"Stability, diagnostics, security"})]}),a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("strong",{children:"Communications"})}),a.jsx("td",{children:"In-app messages between driver and dispatcher"}),a.jsx("td",{children:"Operational coordination"})]})]})]})})]}),a.jsxs(ee,{children:[a.jsx("h2",{children:"3. How we use it"}),a.jsxs("ul",{children:[a.jsx("li",{children:"To run the dispatch service: assign jobs, track progress, record proof of delivery."}),a.jsx("li",{children:"To keep the app secure: detect abuse, verify sign-ins, prevent fraud."}),a.jsx("li",{children:"To improve the product: diagnose crashes, measure feature usage in aggregate."}),a.jsx("li",{children:"To meet legal obligations under the Privacy Act 1988 (Cth) and applicable tax law."})]}),a.jsxs("p",{children:["We do ",a.jsx("strong",{children:"not"})," use your data for behavioural advertising and we do not sell it."]})]}),a.jsxs(ee,{children:[a.jsx("h2",{children:"4. Legal basis"}),a.jsx("p",{children:"Under the Australian Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs), we process personal information because it is necessary to perform the dispatch service you (or your employer on your behalf) signed up for, to comply with our legal obligations, and — for product improvement and security — for our legitimate interests in operating a reliable, safe service. Where required (e.g. for any optional analytics cookies on this website), we ask for consent and you can withdraw it at any time."})]}),a.jsxs(ee,{children:[a.jsx("h2",{children:"5. Who sees your data"}),a.jsxs("ul",{children:[a.jsxs("li",{children:[a.jsx("strong",{children:"Your operator"})," (the company running the SenditGo back-office that you drive for) — they see your shift activity, route, and proof-of-delivery records. They are a separate data controller for their business records."]}),a.jsxs("li",{children:[a.jsx("strong",{children:"Service providers"})," we use to run the platform: cloud hosting (currently AWS, region asia-east), map tiles (Mapbox), push notification delivery (Apple/Google), and crash reporting. Each is bound by a written data-processing agreement."]}),a.jsxs("li",{children:[a.jsx("strong",{children:"Authorities"})," if compelled by a valid legal order under Australian law."]})]}),a.jsxs("p",{children:["A current list of sub-processors is available on request via"," ",a.jsx("a",{href:`mailto:${xe.supportEmail}`,children:xe.supportEmail}),"."]})]}),a.jsxs(ee,{children:[a.jsx("h2",{children:"6. International transfers"}),a.jsx("p",{children:"Our primary infrastructure is hosted in the Asia-Pacific region. Limited categories of data (e.g. crash reports, push delivery metadata) may be processed by service providers operating from other jurisdictions; in every case the provider is bound by a data-processing agreement and we rely on standard contractual clauses or equivalent safeguards where required."})]}),a.jsxs(ee,{children:[a.jsx("h2",{id:"privacy-retention",children:"7. How long we keep it"}),a.jsx($d,{id:"privacy-retention-hint",children:"Swipe or scroll sideways to read the table."}),a.jsx(Ld,{role:"region","aria-labelledby":"privacy-retention","aria-describedby":"privacy-retention-hint",tabIndex:0,children:a.jsxs(Dd,{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Data"}),a.jsx("th",{children:"Retention"})]})}),a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx("td",{children:"Active account data"}),a.jsx("td",{children:"Until you delete your account"})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"Location pings"}),a.jsx("td",{children:"90 days, then aggregated for trend reporting (no longer linked to you)"})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"Proof-of-delivery records"}),a.jsx("td",{children:"Retained by your operator per their own retention policy; typically 5–7 years for tax records"})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"Crash and diagnostic logs"}),a.jsx("td",{children:"180 days"})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"Backups"}),a.jsx("td",{children:"Rolling 90-day encrypted backups; deleted data expires within this window"})]})]})]})})]}),a.jsxs(ee,{children:[a.jsx("h2",{children:"8. Your rights"}),a.jsx("p",{children:"You can:"}),a.jsxs("ul",{children:[a.jsx("li",{children:"Ask what we hold about you and request a copy."}),a.jsx("li",{children:"Correct anything inaccurate."}),a.jsxs("li",{children:["Delete your account and associated personal data — see the"," ",a.jsx("a",{href:Wt("/account-deletion"),children:"account deletion page"})," for the in-app and web paths."]}),a.jsx("li",{children:"Object to specific processing where we rely on legitimate interest."}),a.jsx("li",{children:"Lodge a complaint with the relevant supervisory authority."})]}),a.jsxs("p",{children:["To exercise any of these, email"," ",a.jsx("a",{href:`mailto:${xe.supportEmail}`,children:xe.supportEmail}),". We respond within 30 days."]})]}),a.jsxs(ee,{children:[a.jsx("h2",{children:"9. Children"}),a.jsx("p",{children:"SenditGo is a workplace app for professional drivers and dispatchers. It is not directed at, and we do not knowingly collect data from, anyone under 16."})]}),a.jsxs(ee,{children:[a.jsx("h2",{children:"10. Security"}),a.jsx("p",{children:"Traffic is encrypted in transit (TLS 1.2+). Production data is encrypted at rest. Access is restricted by role and audited. We rotate secrets and patch dependencies on a regular cycle. If we ever experience a breach affecting your personal data, we will notify you and the relevant authority in line with applicable law."})]}),a.jsxs(ee,{children:[a.jsx("h2",{children:"11. Changes to this policy"}),a.jsx("p",{children:"We will update this policy as the product and the law evolve. The “Last updated” date at the top of this page reflects the latest revision. Material changes will be highlighted in the app and on the home page before they take effect."})]}),a.jsxs(ee,{children:[a.jsx("h2",{children:"12. Contact"}),a.jsxs("p",{children:[xe.legalName,a.jsx("br",{}),xe.address,a.jsx("br",{}),"Email:"," ",a.jsx("a",{href:`mailto:${xe.supportEmail}`,children:xe.supportEmail})]})]})]});f.form`
  display: grid;
  gap: 14px;
  font-family: ${_};
`;f.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;const mf=`
  width: 100%;
  padding: 14px 16px;
  border-radius: 12px;
  font-size: 15px;
  font-family: ${_};
  transition: border-color 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;

  &:focus {
    outline: none;
  }
`;f.input`
  ${mf};
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
  ${mf};
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
  font-family: ${_};
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
  font-family: ${_};
  font-size: 14px;
  color: ${t=>t.$kind==="success"?"var(--v29-success, #1B7F4B)":"var(--v29-danger, #C0392B)"};
`;f.p`
  margin: -8px 0 0;
  font-family: ${_};
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
  font-family: ${_};
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
    font-family: ${_};
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
  font-family: ${_};
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
    font-family: ${_};
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--v29-muted);
  }
  ul {
    margin: 0;
    padding-left: 18px;
    font-family: ${_};
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
`;const xE=()=>a.jsxs(Rn,{children:[a.jsx(er,{children:"Account support"}),a.jsx(Rr,{children:"Delete your account."}),a.jsx(ee,{children:a.jsxs("p",{children:["For help with your account, email ",a.jsx("a",{href:`mailto:${xe.supportEmail}`,children:xe.supportEmail}),"."]})})]}),Md=f.table`
  width: 100%;
  border-collapse: collapse;
  margin: 8px 0 16px;
  font-family: ${_};
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
`,Je=f.span`
  display: inline-flex;
  font-family: ${_};
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
  color: ${t=>t.$tone==="yes"?"#FFFFFF":t.$tone==="no"?un:"var(--v29-text)"};
`,yE=f.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin: 12px 0 32px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`,Ha=f.div`
  background: var(--v29-card);
  border-radius: 16px;
  padding: 20px 22px;
  font-family: ${_};
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
`,vE=()=>a.jsxs(Rn,{children:[a.jsx(er,{children:"Data Safety Disclosure"}),a.jsx(Rr,{children:"What we collect, why, and who receives it."}),a.jsxs(Ci,{children:["This Disclosure sets out the categories of personal data that"," ",xe.legalName," (“Senditgo”, “we” or “us”) collects through the SenditGo driver application, the purposes for which it is processed, and the third parties with whom it is shared. It is published in conjunction with, and maintained to mirror, the data declarations made in our Apple App Store and Google Play listings, in accordance with the Australian Privacy Act 1988 (Cth), the Australian Privacy Principles, and applicable store policies."]}),a.jsxs(yE,{children:[a.jsxs(Ha,{children:[a.jsx("strong",{children:"No third-party advertising"}),a.jsx("span",{children:"Senditgo does not serve third-party advertising within the application and does not construct advertising or behavioural profiles from user data."})]}),a.jsxs(Ha,{children:[a.jsx("strong",{children:"No sale of personal data"}),a.jsx("span",{children:"Senditgo does not sell, rent, or otherwise transfer personal data to data brokers, marketing intermediaries, or unaffiliated third parties."})]}),a.jsxs(Ha,{children:[a.jsx("strong",{children:"Encryption in transit and at rest"}),a.jsx("span",{children:"Communications between the application and our servers are protected by TLS 1.2 or higher. Production data is encrypted at rest under managed keys."})]})]}),a.jsxs(ee,{children:[a.jsx("h2",{children:"Data we collect"}),a.jsxs(Md,{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Type"}),a.jsx("th",{children:"Purpose"}),a.jsx("th",{children:"Required?"}),a.jsx("th",{children:"Linked to you"})]})}),a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("strong",{children:"Mobile number"})}),a.jsx("td",{children:"Account creation, OTP sign-in"}),a.jsx("td",{children:a.jsx(Je,{$tone:"yes",children:"Required"})}),a.jsx("td",{children:a.jsx(Je,{$tone:"yes",children:"Yes"})})]}),a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("strong",{children:"Name & email"})}),a.jsx("td",{children:"Identifying you to your operator, contact"}),a.jsx("td",{children:a.jsx(Je,{$tone:"yes",children:"Required"})}),a.jsx("td",{children:a.jsx(Je,{$tone:"yes",children:"Yes"})})]}),a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("strong",{children:"Precise location"})}),a.jsx("td",{children:"Live driver tracking, ETA, geofence events"}),a.jsx("td",{children:a.jsx(Je,{$tone:"opt",children:"Active shift only"})}),a.jsx("td",{children:a.jsx(Je,{$tone:"yes",children:"Yes"})})]}),a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("strong",{children:"Photos & signatures"})}),a.jsx("td",{children:"Proof of delivery captured at the door"}),a.jsx("td",{children:a.jsx(Je,{$tone:"opt",children:"Per delivery"})}),a.jsx("td",{children:a.jsx(Je,{$tone:"yes",children:"Yes"})})]}),a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("strong",{children:"In-app messages"})}),a.jsx("td",{children:"Driver ↔ dispatcher coordination"}),a.jsx("td",{children:a.jsx(Je,{$tone:"opt",children:"Optional"})}),a.jsx("td",{children:a.jsx(Je,{$tone:"yes",children:"Yes"})})]}),a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("strong",{children:"Device & app info"})}),a.jsx("td",{children:"Crash reports, performance diagnostics"}),a.jsx("td",{children:a.jsx(Je,{$tone:"yes",children:"Required"})}),a.jsx("td",{children:a.jsx(Je,{$tone:"opt",children:"Pseudonymous"})})]}),a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("strong",{children:"Push notification token"})}),a.jsx("td",{children:"Job assignments, dispatcher messages"}),a.jsx("td",{children:a.jsx(Je,{$tone:"opt",children:"Optional"})}),a.jsx("td",{children:a.jsx(Je,{$tone:"yes",children:"Yes"})})]})]})]})]}),a.jsxs(ee,{children:[a.jsx("h2",{children:"Who we share data with"}),a.jsxs(Md,{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Recipient"}),a.jsx("th",{children:"What they receive"}),a.jsx("th",{children:"Why"})]})}),a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("strong",{children:"Your operator"})}),a.jsx("td",{children:"Shift activity, route, proof-of-delivery records"}),a.jsx("td",{children:"Running their dispatch operation; their legitimate business records"})]}),a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("strong",{children:"Cloud hosting (AWS)"})}),a.jsx("td",{children:"All production data, encrypted"}),a.jsx("td",{children:"Infrastructure provider, bound by data-processing agreement"})]}),a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("strong",{children:"Map tiles (Mapbox)"})}),a.jsx("td",{children:"Anonymised location to fetch map tiles"}),a.jsx("td",{children:"Render maps inside the app"})]}),a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("strong",{children:"Push delivery (Apple/Google)"})}),a.jsx("td",{children:"Push token + payload metadata"}),a.jsx("td",{children:"Deliver notifications to your device"})]}),a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("strong",{children:"Crash reporting"})}),a.jsx("td",{children:"Crash stack trace, device model, OS version"}),a.jsx("td",{children:"Diagnose and fix bugs"})]}),a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("strong",{children:"Authorities"})}),a.jsx("td",{children:"Only what a valid legal order under Australian law requires"}),a.jsx("td",{children:"Legal compliance"})]})]})]})]}),a.jsxs(ee,{children:[a.jsx("h2",{children:"User controls"}),a.jsxs("ul",{children:[a.jsxs("li",{children:[a.jsx("strong",{children:"Location."})," Precise location is collected only while a shift is active. Users may revoke the operating system location permission at any time, in which case the application reverts to a reduced-precision mode."]}),a.jsxs("li",{children:[a.jsx("strong",{children:"Push notifications."})," Notifications are optional and may be disabled in system settings without affecting other functionality."]}),a.jsxs("li",{children:[a.jsx("strong",{children:"Account and data deletion."})," Deletion is available both in-application and via the web. See the dedicated"," ",a.jsx("a",{href:Wt("/account-deletion"),children:"account deletion"})," page for the relevant procedure."]}),a.jsxs("li",{children:[a.jsx("strong",{children:"Access, correction, and complaint."})," Users may exercise their statutory rights under the Australian Privacy Act 1988 (Cth) — including the right to lodge a complaint with the Office of the Australian Information Commissioner (OAIC) — as described in the ",a.jsx("a",{href:Wt("/privacy"),children:"privacy policy"}),"."]})]})]}),a.jsxs(ee,{children:[a.jsx("h2",{children:"Publication and reconciliation"}),a.jsxs("p",{children:["This page constitutes the authoritative record of Senditgo’s data declarations. Identical content is published in the"," ",a.jsx("strong",{children:"Data Safety"})," section of our Google Play listing and in the ",a.jsx("strong",{children:"Privacy Nutrition Labels"})," on our Apple App Store listing. Where a discrepancy is identified between this page and the store declarations, the matter may be reported to"," ",a.jsx("a",{href:`mailto:${xe.supportEmail}`,children:xe.supportEmail})," ","and Senditgo will reconcile the records within fourteen (14) days."]})]}),a.jsxs(ee,{children:[a.jsx("h2",{children:"Further information"}),a.jsxs("p",{children:["For a fuller description of how personal data is collected, the legal bases on which it is processed, retention periods, international transfers, and the rights available to users, please refer to the",a.jsx("a",{href:Wt("/privacy"),children:" Senditgo Privacy Policy"}),". General enquiries may be directed to"," ",a.jsx("a",{href:`mailto:${xe.supportEmail}`,children:xe.supportEmail}),"."]})]})]}),bE="(max-width: 600px) and (max-aspect-ratio: 3/4)",Fd=Wt("/videos/broll/broll-hero-melbourne-dusk"),wE=f.div`
  background: var(--v29-page);
  color: var(--v29-text);
  font-family: ${_};
  -webkit-font-smoothing: antialiased;
  transition: background 0.3s ease, color 0.3s ease;

  &[data-motion-paused='true'] *,
  &[data-motion-paused='true'] *::before,
  &[data-motion-paused='true'] *::after {
    animation-play-state: paused !important;
  }
`,js=f.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 var(--page-gutter);
`,kl=f.section`
  position: relative;
  padding: var(--section-space) 0;
  background: ${t=>t.$alt?"var(--v29-surface-alt)":"transparent"};
`,kE=f(kl)`
  padding-bottom: clamp(20px, 2.5vw, 36px);
`,SE=f.p`
  font-family: ${_};
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
    background: ${un};
    ${t=>t.$glow&&`box-shadow: 0 0 6px ${un};`}
  }
`,EE=f.nav`
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
    --brand-logo-color: ${Vo};
  }
`,_E=f.div`
  display: flex;
  align-items: center;
  gap: 12px;
  @media (max-width: 480px) {
    gap: 8px;
  }
`,jE=f.span`
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
`,TE=f.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid var(--v29-line);
  background: transparent;
  color: ${Ki};
  cursor: pointer;
  transition: border-color 0.25s ease, background 0.25s ease;
  svg {
    width: 16px;
    height: 16px;
    display: block;
  }
  &:hover {
    border-color: ${Ki};
    background: rgba(0, 127, 255, 0.08);
  }
  &:focus-visible {
    outline: 2px solid ${Ki};
    outline-offset: 2px;
  }
  @media (max-width: 480px) {
    width: 44px;
    height: 44px;
  }
`,IE=f(Fe)`
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 8px;
  font-family: ${tt};
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
    background: ${os};
    color: #fff;
    &:hover { background: ${os}; transform: translateY(-1px); }
    &:focus-visible {
      outline: 2px solid var(--v29-primary);
      outline-offset: 2px;
    }
  `}
`,RE=f.header`
  position: relative;
  min-height: 100vh;
  padding-bottom: var(--cookie-consent-offset, 0px);
  display: flex;
  align-items: center;
  background: #071120;
  --film-scrim: rgba(7, 17, 32, .775);
  [data-theme='light'] & {
    --film-scrim: linear-gradient(90deg, rgba(7, 17, 32, .69) 0%, rgba(7, 17, 32, .67) 49%, rgba(7, 17, 32, .32) 85%);
  }
  @media (max-width: 700px) {
    [data-theme='light'] & {
      --film-scrim: linear-gradient(180deg, rgba(7, 17, 32, .39), rgba(7, 17, 32, .68) 30%, rgba(7, 17, 32, .68) 76%, rgba(7, 17, 32, .42));
    }
  }
`,CE=f.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,AE=f.div`
  position: absolute;
  inset: 0;
  background: var(--film-scrim);
  pointer-events: none;
`,OE=f(js)`
  position: relative;
  z-index: 2;
  width: 100%;
  padding-top: 120px;
  padding-bottom: 72px;
`,PE=f(Ho.div)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border-radius: 999px;
  border: 1px solid rgba(0, 127, 255, 0.25);
  background: rgba(12, 27, 51, 0.6);
  backdrop-filter: blur(12px);
  color: #f4f7fb;
  font-family: ${_};
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
    background: ${un};
    flex-shrink: 0;
    box-shadow: 0 0 8px ${un};
    animation: badge-pulse 2s infinite ease-in-out;
    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  }

  @keyframes badge-pulse {
    0% {
      transform: scale(1);
      box-shadow: 0 0 4px ${un};
      opacity: 1;
    }
    50% {
      transform: scale(1.4);
      box-shadow: 0 0 12px ${un};
      opacity: 0.8;
    }
    100% {
      transform: scale(1);
      box-shadow: 0 0 4px ${un};
      opacity: 1;
    }
  }
`,NE=f.h1`
  font-family: ${tt};
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
    color: ${Ki};
  }
`,LE=f.p`
  font-size: clamp(1.05rem, 1rem + 0.35vw, 1.2rem);
  line-height: 1.6;
  color: #dbe5f1;
  max-width: 52ch;
  margin: 0 0 36px;
`,$E=f.div`
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
`,DE=f(Fe)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  border-radius: 8px;
  background: ${os};
  color: #fff;
  font-family: ${tt};
  font-style: italic;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.2s ease;
  &:hover {
    background: ${os};
    transform: translateY(-1px);
  }
`,ME=f.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  border-radius: 8px;
  border: 1.5px solid rgba(255, 255, 255, 0.55);
  background: transparent;
  color: #fff;
  font-family: ${tt};
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
`,Ud=f(kl)`
  scroll-margin-block-start: var(--nav-h, 73px);
  padding-block: var(--section-space);
  @media (min-width: 1000px) and (max-height: 940px) {
    &#sam { padding-block: 12px; }
  }
`,Bd=f(js)`
  max-width: var(--walkthrough-width);
`,FE=()=>{const t=km(),e=S.useRef(null);S.useLayoutEffect(()=>{const u=()=>{var p;const h=window.location.hash.slice(1);if(["sam","sam-steps","fleet-walkthrough","fleet-toolkit","sam-options","fleet-recordings","activity","fleet-insights","fleet-features","platform","delivery-proof","delivery-tracking"].includes(h)){const m=["fleet-walkthrough","fleet-recordings","fleet-insights"].includes(h)?"console":h==="fleet-toolkit"?"fleet-features":h==="sam-options"?"sam":h==="delivery-proof"?"platform":h;(p=document.getElementById(m))==null||p.scrollIntoView({block:"start",behavior:"instant"})}};return u(),window.addEventListener("hashchange",u),()=>window.removeEventListener("hashchange",u)},[]);const{mode:n,toggleTheme:r}=zs(),i=Xo(),s=i.length>0,o=i.some(u=>u.role==="shipper"),l=ea(),c=S.useRef(null),d=S.useRef(null);return S.useEffect(()=>{var y;const u=[...((y=e.current)==null?void 0:y.querySelectorAll("video[data-page-video]"))??[]],h=v=>{var w;const j=v.getBoundingClientRect(),E=j.bottom>0&&j.top<window.innerHeight;t||document.hidden||!E||v.dataset.active==="false"?v.pause():(w=v.play())==null||w.catch(()=>{})},p=new IntersectionObserver(v=>{v.forEach(j=>h(j.target))}),m=()=>u.forEach(h),x=u.map(v=>{const j=Array.from(v.querySelectorAll("source")),E=j.filter(N=>N.media).map(N=>matchMedia(N.media)),w=()=>j.find(N=>!N.media||matchMedia(N.media).matches);let b=w(),I;const R=()=>{I!==void 0&&Number.isFinite(v.duration)&&(v.currentTime=Math.min(I,v.duration)),I=void 0,h(v)},$=()=>{const N=w();N!==b&&(b=N,v.readyState>=1&&(I=v.currentTime),v.load(),h(v))};return E.forEach(N=>N.addEventListener("change",$)),v.addEventListener("loadedmetadata",R),()=>{E.forEach(N=>N.removeEventListener("change",$)),v.removeEventListener("loadedmetadata",R)}});return u.forEach(v=>p.observe(v)),m(),document.addEventListener("visibilitychange",m),()=>{p.disconnect(),x.forEach(v=>v()),document.removeEventListener("visibilitychange",m),u.forEach(v=>v.pause())}},[t]),a.jsxs(wE,{ref:e,"data-motion-paused":t,children:[a.jsx(Hs,{}),a.jsxs(EE,{"data-home-nav":!0,ref:d,children:[a.jsxs(jE,{$compact:s,role:"img","aria-label":"SenditGo",children:[a.jsx("span",{className:"nav-wordmark","aria-hidden":"true",children:a.jsx(as,{height:30,ariaLabel:""})}),a.jsx("span",{className:"nav-mark","aria-hidden":"true",children:a.jsx(as,{height:30,variant:"mark",ariaLabel:""})})]}),a.jsxs(_E,{children:[a.jsx(TE,{onClick:r,"aria-label":"Toggle dark / light",children:n==="dark"?a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("circle",{cx:"12",cy:"12",r:"4"}),a.jsx("path",{d:"M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"})]}):a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})}),a.jsx(IE,{to:"/contact",$ghost:o,$hideOnNarrow:o,children:"Get early access"}),(s||l)&&a.jsx(uf,{})]})]}),a.jsxs(RE,{children:[a.jsxs(CE,{"data-page-video":!0,autoPlay:!t,loop:!0,muted:!0,playsInline:!0,preload:t?"none":"auto",poster:Wt("/images/broll/broll-hero-melbourne-dusk-first.webp"),children:[a.jsx("source",{media:bE,src:Fd+"-portrait.mp4",type:"video/mp4"}),a.jsx("source",{src:Fd+".mp4?v=native2",type:"video/mp4"})]}),a.jsx(AE,{"aria-hidden":"true"}),a.jsxs(OE,{children:[a.jsxs(PE,{initial:t?!1:{opacity:0,y:-12},animate:{opacity:1,y:0},transition:t?{duration:0}:{duration:.8,ease:Bs,delay:.08},children:[a.jsx("span",{className:"dot"}),"Intelligent transport management. Launching 2027."]}),a.jsxs(NE,{children:["Set the outcome. Fleet-wide intelligence handles the rest",a.jsx("span",{className:"go",children:"."})]}),a.jsx(LE,{children:"SenditGo’s AI, SAM, weighs thousands of combinations across every stop, window and driver, then hands back a dispatch-ready plan in seconds—with the routes, allocations and knock-on effects already considered."}),a.jsxs($E,{children:[a.jsx(DE,{to:"/contact",children:"Get early access"}),a.jsx(ME,{onClick:u=>{var h;u.preventDefault(),(h=c.current)==null||h.scrollIntoView({behavior:t?"auto":"smooth",block:"start"})},href:"#console",children:"See it in action"})]})]})]}),a.jsx(kl,{id:"console","aria-labelledby":"product-features-title",ref:c,children:a.jsx(Bd,{children:a.jsx(Sm,{})})}),a.jsx(Ud,{id:"sam","aria-labelledby":"sam-title",$alt:!0,children:a.jsxs(Bd,{children:[a.jsx(Em,{id:"sam-title"}),a.jsx(_m,{duration:Fl.duration,sceneId:"dispatch-scene",reducedMotion:t,renderScene:u=>a.jsx(jm,{stage:u,concept:Fl})})]})}),a.jsx(Tm,{navRef:d}),a.jsx(Ud,{id:"delivery-tracking","aria-label":"Delivery tracking",$alt:!0,children:a.jsx(js,{children:a.jsx(Im,{})})}),a.jsx(kE,{id:"activity","aria-labelledby":"activity-title",children:a.jsxs(js,{children:[a.jsx(SE,{children:"On the road"}),a.jsx(en,{id:"activity-title",children:"One fleet, two periods."}),a.jsx(Rm,{})]})}),a.jsx(na,{})]})},Cr=f.header`
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
`,ei=f.div`
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
`,UE=f.div`
  display: flex;
  align-items: flex-end;
  gap: 14px;
  flex-wrap: wrap;
  padding: 18px;
  border-bottom: 1px solid var(--v29-line-soft);
  background: var(--v29-raised);
`,Ae=f.label`
  display: grid;
  gap: 6px;
  min-width: 180px;
  font-family: ${_};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--v29-muted);
`,jt=f.span.attrs({"aria-hidden":!0})`
  color: var(--v29-danger);
  margin-left: 2px;
`,We=f.input`
  width: 100%;
  min-height: 42px;
  padding: 10px 12px;
  border-radius: var(--v29-radius-field);
  border: 1px solid var(--v29-line-soft);
  background: var(--v29-page);
  color: var(--v29-text);
  font-family: ${_};
  font-size: 14px;
  letter-spacing: 0;

  &:focus {
    outline: none;
    border-color: var(--v29-primary);
    box-shadow: 0 0 0 3px
      color-mix(in srgb, var(--v29-primary) 18%, transparent);
  }
`,gf=f.select`
  appearance: none;
  min-height: 42px;
  padding: 10px 40px 10px 12px;
  border-radius: var(--v29-radius-button);
  border: 1px solid var(--v29-line-soft);
  background: var(--v29-page) var(--v29-select-caret) no-repeat right 12px
    center / 16px 16px;
  color: var(--v29-text);
  font-family: ${_};
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: var(--v29-primary);
    box-shadow: 0 0 0 3px
      color-mix(in srgb, var(--v29-primary) 18%, transparent);
  }
`,BE=f.textarea`
  width: 100%;
  min-height: 96px;
  padding: 12px;
  border-radius: var(--v29-radius-field);
  border: 1px solid var(--v29-line-soft);
  background: var(--v29-page);
  color: var(--v29-text);
  font-family: ${_};
  font-size: 14px;
  line-height: 1.5;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: var(--v29-primary);
    box-shadow: 0 0 0 3px
      color-mix(in srgb, var(--v29-primary) 18%, transparent);
  }
`,yn=f.button`
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
  font-family: ${tt};
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
  font-family: ${_};
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
`,Vr=f(we)`
  border-color: var(--v29-danger);
  color: var(--v29-danger);

  &:hover:not(:disabled) {
    border-color: var(--v29-danger);
    background: var(--v29-danger-bg);
  }

  &:focus-visible {
    outline-color: var(--v29-danger);
  }
`,zE=f.label`
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 40px;
  padding: 4px 6px;
  border-radius: 7px;
  font-family: ${_};
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
  font-family: ${_};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--v29-muted);

  svg {
    width: 16px;
    height: 16px;
  }
`,Qe=f.div`
  padding: 54px 24px;
  text-align: center;
  font-family: ${_};
  color: var(--v29-muted);
  font-size: 15px;
`,HE=f.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`,zd=f.div`
  display: grid;
  gap: 6px;
  font-family: ${_};

  strong {
    color: var(--v29-text);
    font-size: 15px;
  }

  span {
    color: var(--v29-muted);
    font-size: 14px;
    line-height: 1.5;
  }
`,VE=f.table`
  width: 100%;
  min-width: 680px;
  border-collapse: collapse;
  font-family: ${_};
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
`,ra=f.dl`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 16px;
  margin: 0;

  div {
    display: grid;
    gap: 5px;
  }

  dt {
    font-family: ${_};
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--v29-muted);
  }

  dd {
    margin: 0;
    font-family: ${_};
    font-size: 14px;
    color: var(--v29-text);
  }
`,Ts=f.p`
  margin: 0;
  padding: 14px 16px;
  border-radius: var(--v29-radius-container);
  background: color-mix(in srgb, var(--v29-primary) 9%, transparent);
  color: var(--v29-text);
  font-family: ${_};
  font-size: 14px;
  line-height: 1.55;
`,WE=Zu`
  0%, 100% { opacity: 0.55; }
  50% { opacity: 1; }
`,it=f.div`
  height: 52px;
  margin: 10px 18px;
  border-radius: var(--v29-radius-field);
  background: var(--v29-line-soft);
  animation: ${WE} 1.4s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Xe=f.p`
  margin: 0;
  font-family: ${_};
  font-size: 14px;
  line-height: 1.55;
  color: ${t=>t.$danger?"var(--v29-danger)":"var(--v29-muted)"};
`,xf=[{id:"operations",labelKey:"nav.groups.operations",items:[{id:"orders",labelKey:"nav.orders",path:"/portal/orders",permission:me.LIST},{id:"create-order",labelKey:"nav.createOrder",path:"/portal/orders/new",permission:me.ADD},{id:"import-orders",labelKey:"nav.importOrders",path:"/portal/orders/import",permission:me.IMPORT}]},{id:"finance",labelKey:"nav.groups.finance",items:[{id:"billing",labelKey:"nav.billing",path:"/portal/billing",permission:null}]},{id:"admin",labelKey:"nav.groups.admin",items:[{id:"users-roles",labelKey:"nav.usersRoles",path:"/portal/admin/users",permission:re.USER_LIST}]}],qE=f.nav`
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
`,KE=f.div`
  padding: 0 8px 2px;
  font-family: ${_};
  font-size: 13px;
  font-weight: 700;
  color: var(--v29-text);

  @media (max-width: 980px) {
    display: none;
  }
`,GE=f.div`
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
`,ZE=f.span`
  padding: 0 8px;
  font-family: ${_};
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--v29-muted);

  @media (max-width: 640px) {
    display: none;
  }
`,YE=f.div`
  display: grid;
  gap: 2px;

  @media (max-width: 980px) {
    display: flex;
    gap: 4px;
  }

  @media (max-width: 640px) {
    display: contents;
  }
`,JE=f(Cm)`
  display: inline-flex;
  align-items: center;
  min-height: 40px;
  padding: 9px 10px;
  border-radius: 7px;
  border: 1px solid transparent;
  font-family: ${_};
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
`,XE=()=>{const{t}=G("portal"),{pathname:e}=Ke(),n=dt(s=>s.permissionList),r=e==="/portal/orders"||e.startsWith("/portal/orders/")&&e!=="/portal/orders/new"&&e!=="/portal/orders/import",i=xf.map(s=>({...s,items:s.items.filter(o=>o.permission===null||n.includes(o.permission))})).filter(s=>s.items.length>0);return i.length===0?null:a.jsxs(qE,{"aria-label":t("nav.ariaLabel"),children:[a.jsx(KE,{children:t("nav.platform")}),i.map(s=>a.jsxs(GE,{children:[a.jsx(ZE,{children:t(s.labelKey)}),a.jsx(YE,{children:s.items.map(o=>a.jsx(JE,{to:o.path,end:o.path==="/portal/orders","data-active":o.path==="/portal/orders"&&r?"true":void 0,children:t(o.labelKey)},o.id))})]},s.id))]})},QE=f.main`
  flex: 1;
  width: 100%;
  padding: ${t=>t.$authenticated?"72px 0 0":"120px clamp(20px, 4vw, 48px) 96px"};

  @media (max-width: 720px) {
    padding: ${t=>t.$authenticated?"72px 0 0":"96px 20px 64px"};
  }
`,e_=f.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 28px clamp(20px, 3vw, 44px) 56px;

  @media (max-width: 980px) {
    padding: 18px 20px 48px;
  }
`,t_=f.div`
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
`,n_=f.div`
  min-width: 0;
`,Cn=({children:t,publicChrome:e=!1})=>{const n=ea(),{mode:r,toggleTheme:i}=zs(),s=n&&!e;return a.jsxs(a.Fragment,{children:[a.jsx(Hs,{}),a.jsxs(Wo,{children:[a.jsx(bl,{theme:r,onToggleTheme:i}),a.jsx(QE,{$authenticated:s,children:s?a.jsx(e_,{children:a.jsxs(t_,{children:[a.jsx(XE,{}),a.jsx(n_,{children:t})]})}):t}),a.jsx(na,{})]})]})},Hd={senderName:"",senderMobile:"",senderAddress:"",senderPostcode:"",recipientName:"",recipientMobile:"",recipientAddress:"",recipientPostcode:"",packages:"1",weight:"",reference:"",notes:""},Vd=f.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`,Va=f.div`
  grid-column: 1 / -1;
`,r_=f.form`
  display: grid;
  gap: 18px;
`,i_=t=>{const e=Number(t.packages);return!!(t.senderName.trim()&&t.senderAddress.trim()&&t.recipientName.trim()&&t.recipientAddress.trim()&&Number.isFinite(e)&&e>0)},s_=()=>{const{t}=G(),[e,n]=S.useState(Hd),[r,i]=S.useState("idle"),s=c=>d=>{n(u=>({...u,[c]:d.target.value})),i("idle")},o=c=>{c.preventDefault(),i(i_(e)?"ready":"error")},l=()=>{n(Hd),i("idle")};return a.jsxs(Cn,{children:[a.jsx(Cr,{children:a.jsxs("div",{children:[a.jsx(Xt,{children:t("portal:common.eyebrow")}),a.jsx(en,{children:t("portal:createOrder.title")}),a.jsx(Qt,{children:t("portal:createOrder.lead")})]})}),a.jsxs(r_,{onSubmit:o,children:[a.jsx(oe,{children:a.jsx(ye,{children:a.jsx(Ts,{children:t("portal:createOrder.backendNotice")})})}),a.jsx(oe,{children:a.jsxs(ye,{children:[a.jsx(Le,{children:t("portal:createOrder.sectionContact")}),a.jsxs(Vd,{children:[a.jsxs(Ae,{children:[t("portal:createOrder.senderName"),a.jsx(jt,{children:"*"}),a.jsx(We,{"aria-required":"true",value:e.senderName,onChange:s("senderName")})]}),a.jsxs(Ae,{children:[t("portal:createOrder.senderMobile"),a.jsx(We,{inputMode:"tel",value:e.senderMobile,onChange:s("senderMobile")})]}),a.jsx(Va,{children:a.jsxs(Ae,{children:[t("portal:createOrder.senderAddress"),a.jsx(jt,{children:"*"}),a.jsx(We,{"aria-required":"true",value:e.senderAddress,onChange:s("senderAddress")})]})}),a.jsxs(Ae,{children:[t("portal:createOrder.senderPostcode"),a.jsx(We,{value:e.senderPostcode,onChange:s("senderPostcode")})]}),a.jsxs(Ae,{children:[t("portal:createOrder.recipientName"),a.jsx(jt,{children:"*"}),a.jsx(We,{"aria-required":"true",value:e.recipientName,onChange:s("recipientName")})]}),a.jsxs(Ae,{children:[t("portal:createOrder.recipientMobile"),a.jsx(We,{inputMode:"tel",value:e.recipientMobile,onChange:s("recipientMobile")})]}),a.jsx(Va,{children:a.jsxs(Ae,{children:[t("portal:createOrder.recipientAddress"),a.jsx(jt,{children:"*"}),a.jsx(We,{"aria-required":"true",value:e.recipientAddress,onChange:s("recipientAddress")})]})}),a.jsxs(Ae,{children:[t("portal:createOrder.recipientPostcode"),a.jsx(We,{value:e.recipientPostcode,onChange:s("recipientPostcode")})]})]})]})}),a.jsx(oe,{children:a.jsxs(ye,{children:[a.jsx(Le,{children:t("portal:createOrder.sectionPackage")}),a.jsxs(Vd,{children:[a.jsxs(Ae,{children:[t("portal:createOrder.packages"),a.jsx(jt,{children:"*"}),a.jsx(We,{"aria-required":"true",inputMode:"numeric",min:"1",type:"number",value:e.packages,onChange:s("packages")})]}),a.jsxs(Ae,{children:[t("portal:createOrder.weight"),a.jsx(We,{inputMode:"decimal",min:"0",step:"0.1",type:"number",value:e.weight,onChange:s("weight")})]}),a.jsxs(Ae,{children:[t("portal:createOrder.reference"),a.jsx(We,{value:e.reference,onChange:s("reference")})]}),a.jsx(Va,{children:a.jsxs(Ae,{children:[t("portal:createOrder.notes"),a.jsx(BE,{value:e.notes,onChange:s("notes")})]})})]})]})}),a.jsxs(ei,{children:[a.jsxs(we,{type:"button",onClick:l,children:[a.jsx(Yu,{"aria-hidden":"true"}),t("common:clearForm")]}),a.jsxs(yn,{type:"submit",children:[a.jsx(Um,{"aria-hidden":"true"}),t("portal:createOrder.prepareDraft")]})]}),r==="error"&&a.jsx(Xe,{$danger:!0,role:"alert",children:t("portal:createOrder.required")}),r==="ready"&&a.jsx(oe,{children:a.jsxs(ye,{children:[a.jsx(Le,{children:t("portal:createOrder.draftReady")}),a.jsxs(ra,{children:[a.jsxs("div",{children:[a.jsx("dt",{children:t("portal:createOrder.senderName")}),a.jsx("dd",{children:e.senderName})]}),a.jsxs("div",{children:[a.jsx("dt",{children:t("portal:createOrder.recipientName")}),a.jsx("dd",{children:e.recipientName})]}),a.jsxs("div",{children:[a.jsx("dt",{children:t("portal:createOrder.packages")}),a.jsx("dd",{children:e.packages})]}),a.jsxs("div",{children:[a.jsx("dt",{children:t("portal:createOrder.reference")}),a.jsx("dd",{children:e.reference.trim()||"-"})]})]})]})})]})]})},nt={VERIFY_TOKEN:"/api/company/verifyToken",SALES_ORDER_LIST:"/api/company/salesOrderList",SALES_ORDER:"/api/company/salesOrder/:salesOrderId",IMPORTS:"/api/company/imports",IMPORTS_TEMPLATE:"/api/company/imports/template",IMPORT_JOB:"/api/company/imports/:jobId",IMPORT_JOB_ROWS:"/api/company/imports/:jobId/rows",RBAC_ROLES:"/api/company/rbac/roles",RBAC_ROLE:"/api/company/rbac/roles/:roleId",ASSISTANT:"/api/company/assistant"};function Ai(t,e){return Object.entries(e).reduce((n,[r,i])=>n.replace(`:${r}`,encodeURIComponent(i)),t)}const a_=t=>{const e=new FormData;return e.append("file",t),se.post(nt.IMPORTS,e)},o_=t=>se.get(Ai(nt.IMPORT_JOB,{jobId:t})),l_=(t,e="all")=>se.get(Ai(nt.IMPORT_JOB_ROWS,{jobId:t}),{params:{status:e}}),c_=()=>se.get(nt.IMPORTS_TEMPLATE),Fn=f.div`
  overflow-x: auto;
`,Un=f.table`
  width: 100%;
  min-width: 720px;
  border-collapse: collapse;
  font-family: ${_};
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
`,Wd=f.div`
  display: grid;
  gap: 18px;
`,d_=f.div`
  display: grid;
  gap: 14px;
`,u_=f.div`
  position: relative;
  display: grid;
  gap: 8px;
`,h_=f.label`
  font-family: ${_};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--v29-muted);
  cursor: pointer;
`,p_=f.input`
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
`,f_=f.div`
  display: grid;
  gap: 10px;
  justify-items: start;
`,m_=f.div`
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
  font-family: ${_};
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
`,g_=f.p`
  margin: 0;
  font-family: ${_};
  font-size: 14px;
  line-height: 1.55;
  color: var(--v29-danger);
`,x_=f.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
`,y_=f.div`
  display: grid;
  gap: 4px;
  font-family: ${_};

  strong {
    font-size: 15px;
    color: var(--v29-text);
  }

  span {
    font-size: 13px;
    color: var(--v29-muted);
  }
`,v_=f.div`
  display: inline-flex;
  gap: 4px;
  padding: 4px;
  margin-bottom: 14px;
  border-radius: 11px;
  background: var(--v29-raised);
  border: 1px solid var(--v29-line-soft);
`,Wa=f.button`
  appearance: none;
  cursor: pointer;
  border: none;
  border-radius: 7px;
  padding: 7px 12px;
  font-family: ${_};
  font-size: 13px;
  font-weight: 600;
  color: ${t=>t.$active?"var(--v29-primary)":"var(--v29-muted)"};
  background: ${t=>t.$active?"var(--v29-card)":"transparent"};
  box-shadow: ${t=>t.$active?"var(--v29-card-shadow)":"none"};

  &:focus-visible {
    outline: 2px solid var(--v29-primary);
    outline-offset: 2px;
  }
`,b_=f.span`
  display: inline-block;
  padding: 3px 8px;
  border: none;
  border-radius: var(--v29-radius-tag);
  font-family: ${_};
  font-size: 12px;
  font-weight: 600;
  color: ${t=>t.$invalid?"var(--v29-danger)":"var(--v29-primary)"};
  background: ${t=>t.$invalid?"var(--v29-danger-bg)":"color-mix(in srgb, var(--v29-primary) 10%, transparent)"};
`,w_=f.div`
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
`,k_=f.button`
  border: none;
  background: transparent;
  min-height: 36px;
  padding: 0 8px;
  border-radius: var(--v29-radius-button);
  color: var(--v29-muted);
  font-family: ${_};
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
`,S_=t=>typeof t=="object"&&t!==null&&"code"in t&&"message"in t,qd="import-orders-csv-file",Kd="import-orders-choose-file",Gd="import-orders-csv-label",E_=()=>{const{t}=G(),e=S.useRef(null),n=S.useRef(!1),[r,i]=S.useState(""),[s,o]=S.useState({kind:"idle"}),[l,c]=S.useState(""),d=y=>{if(S_(y)){const v=y.data&&typeof y.data=="object"?y.data.missing:void 0;if(y.message==="missing columns")return t("portal:importOrders.missingColumns",{columns:(v??[]).join(", ")});if(y.message==="no rows")return t("portal:importOrders.noRows");if(y.code===130)return t("portal:importOrders.fileFormat")}return t("portal:importOrders.uploadFailed")},u=async(y,v)=>{const[j,E]=await Promise.all([o_(y),l_(y,v)]);o({kind:"ready",summary:j.data,rows:E.data.rows,filter:v})},h=async y=>{var j;const v=(j=y.target.files)==null?void 0:j[0];if(!v){y.target.value="";return}if(n.current){y.target.value="";return}n.current=!0,c(""),i(v.name),o({kind:"uploading"});try{const E=await a_(v);await u(E.data.jobId,"all")}catch(E){o({kind:"error",message:d(E)})}finally{n.current=!1,y.target.value=""}},p=async y=>{if(!(s.kind!=="ready"||s.filter===y))try{await u(s.summary.jobId,y)}catch{o({kind:"error",message:t("portal:importOrders.jobMissing")})}},m=async()=>{try{const y=await c_(),v=new Blob([y.data.csv],{type:"text/csv;charset=utf-8"}),j=URL.createObjectURL(v),E=document.createElement("a");E.href=j,E.download=y.data.filename,E.click(),URL.revokeObjectURL(j),c("")}catch{const y=t("portal:importOrders.templateFailed");if(s.kind==="ready"){c(y);return}o({kind:"error",message:y})}},x=()=>{i(""),c(""),o({kind:"idle"})};return a.jsxs(Cn,{children:[a.jsx(Cr,{children:a.jsxs("div",{children:[a.jsx(Xt,{children:t("portal:common.eyebrow")}),a.jsx(en,{children:t("portal:importOrders.title")}),a.jsx(Qt,{children:t("portal:importOrders.lead")})]})}),a.jsxs(Wd,{children:[a.jsx(oe,{children:a.jsx(ye,{children:a.jsx(Ts,{children:t("portal:importOrders.backendNotice")})})}),a.jsx(oe,{children:a.jsx(ye,{children:a.jsxs(d_,{children:[a.jsx(Le,{children:t("portal:importOrders.columnsTitle")}),a.jsx(Ts,{children:t("portal:importOrders.columnsBody")}),a.jsxs(u_,{children:[a.jsx(h_,{id:Gd,htmlFor:qd,children:t("portal:importOrders.uploadLabel")}),a.jsx(p_,{id:qd,ref:e,accept:".csv,text/csv",type:"file",tabIndex:-1,"aria-labelledby":`${Gd} ${Kd}`,onChange:h}),a.jsxs(f_,{children:[a.jsx(yn,{id:Kd,type:"button",onClick:()=>{var y;return(y=e.current)==null?void 0:y.click()},children:t("portal:importOrders.chooseFile")}),r?a.jsxs(m_,{"aria-live":"polite",children:[a.jsx(Wm,{"aria-hidden":"true"}),a.jsx("span",{title:r,children:r})]}):null,a.jsx(we,{type:"button",onClick:m,children:t("portal:importOrders.downloadTemplate")})]})]}),(s.kind==="error"||l)&&a.jsx(g_,{role:"alert",children:s.kind==="error"?s.message:l})]})})}),a.jsx(oe,{children:a.jsxs(ye,{children:[a.jsx(Le,{children:t("portal:importOrders.previewTitle")}),s.kind==="uploading"&&a.jsxs("div",{"aria-busy":"true","aria-label":t("common:loading"),children:[a.jsx(it,{}),a.jsx(it,{})]}),(s.kind==="idle"||s.kind==="error")&&a.jsx(Qe,{children:t("portal:importOrders.previewEmpty")}),s.kind==="ready"&&a.jsxs(Wd,{children:[a.jsxs(x_,{children:[a.jsxs(y_,{children:[a.jsx("strong",{children:t("portal:importOrders.sessionTitle",{id:s.summary.jobId})}),a.jsxs("span",{children:[t("portal:importOrders.sessionFile",{name:s.summary.fileName})," · ",t("portal:importOrders.sessionCounts",{valid:s.summary.validRows,invalid:s.summary.invalidRows,total:s.summary.totalRows})]})]}),a.jsx(k_,{type:"button",onClick:x,children:t("portal:importOrders.clearSession")})]}),a.jsxs(v_,{"aria-label":t("portal:importOrders.previewTitle"),children:[a.jsx(Wa,{type:"button","aria-pressed":s.filter==="all",$active:s.filter==="all",onClick:()=>{p("all")},children:t("portal:importOrders.filterAll")}),s.summary.validRows>0&&a.jsx(Wa,{type:"button","aria-pressed":s.filter==="valid",$active:s.filter==="valid",onClick:()=>{p("valid")},children:t("portal:importOrders.filterValid")}),s.summary.invalidRows>0&&a.jsx(Wa,{type:"button","aria-pressed":s.filter==="invalid",$active:s.filter==="invalid",onClick:()=>{p("invalid")},children:t("portal:importOrders.filterInvalid")})]}),a.jsx(Fn,{children:a.jsxs(Un,{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{scope:"col",children:t("portal:orders.colStatus")}),a.jsx("th",{scope:"col",children:t("portal:importOrders.colInvoice")}),a.jsx("th",{scope:"col",children:t("portal:importOrders.colRoute")}),a.jsx("th",{scope:"col",children:t("portal:importOrders.colPickup")}),a.jsx("th",{scope:"col",children:t("portal:importOrders.colDelivery")}),a.jsx("th",{scope:"col",children:t("portal:importOrders.colQty")}),a.jsx("th",{scope:"col",children:t("portal:importOrders.colWeight")}),a.jsx("th",{scope:"col",children:t("portal:importOrders.colReason")})]})}),a.jsx("tbody",{children:s.rows.map(y=>a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx(b_,{$invalid:y.status==="invalid",children:y.status==="invalid"?t("portal:importOrders.rowInvalid"):t("portal:importOrders.rowValid")})}),a.jsx("td",{children:y.invoiceNumber||"—"}),a.jsx("td",{children:a.jsxs(w_,{title:`${y.senderAddress} → ${y.recipientAddress}`,"aria-label":`${y.senderName} ${t("portal:orders.routeTo")} ${y.recipientName}`,children:[a.jsxs("span",{"aria-hidden":"true",children:[y.senderName," · ",y.senderAddress]}),a.jsxs("span",{"aria-hidden":"true",children:["→ ",y.recipientName," · ",y.recipientAddress]})]})}),a.jsx("td",{children:y.pickupDate||"—"}),a.jsx("td",{children:y.deliveryDate||"—"}),a.jsx("td",{children:y.qty||"—"}),a.jsx("td",{children:y.weight||"—"}),a.jsx("td",{children:y.rejectReasons.length?y.rejectReasons.join(", "):"—"})]},y.rowId))})]})})]})]})})]})]})};var te;(function(t){t.assertEqual=i=>i;function e(i){}t.assertIs=e;function n(i){throw new Error}t.assertNever=n,t.arrayToEnum=i=>{const s={};for(const o of i)s[o]=o;return s},t.getValidEnumValues=i=>{const s=t.objectKeys(i).filter(l=>typeof i[i[l]]!="number"),o={};for(const l of s)o[l]=i[l];return t.objectValues(o)},t.objectValues=i=>t.objectKeys(i).map(function(s){return i[s]}),t.objectKeys=typeof Object.keys=="function"?i=>Object.keys(i):i=>{const s=[];for(const o in i)Object.prototype.hasOwnProperty.call(i,o)&&s.push(o);return s},t.find=(i,s)=>{for(const o of i)if(s(o))return o},t.isInteger=typeof Number.isInteger=="function"?i=>Number.isInteger(i):i=>typeof i=="number"&&isFinite(i)&&Math.floor(i)===i;function r(i,s=" | "){return i.map(o=>typeof o=="string"?`'${o}'`:o).join(s)}t.joinValues=r,t.jsonStringifyReplacer=(i,s)=>typeof s=="bigint"?s.toString():s})(te||(te={}));var Po;(function(t){t.mergeShapes=(e,n)=>({...e,...n})})(Po||(Po={}));const L=te.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),gn=t=>{switch(typeof t){case"undefined":return L.undefined;case"string":return L.string;case"number":return isNaN(t)?L.nan:L.number;case"boolean":return L.boolean;case"function":return L.function;case"bigint":return L.bigint;case"symbol":return L.symbol;case"object":return Array.isArray(t)?L.array:t===null?L.null:t.then&&typeof t.then=="function"&&t.catch&&typeof t.catch=="function"?L.promise:typeof Map<"u"&&t instanceof Map?L.map:typeof Set<"u"&&t instanceof Set?L.set:typeof Date<"u"&&t instanceof Date?L.date:L.object;default:return L.unknown}},C=te.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),__=t=>JSON.stringify(t,null,2).replace(/"([^"]+)":/g,"$1:");class at extends Error{constructor(e){super(),this.issues=[],this.addIssue=r=>{this.issues=[...this.issues,r]},this.addIssues=(r=[])=>{this.issues=[...this.issues,...r]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const n=e||function(s){return s.message},r={_errors:[]},i=s=>{for(const o of s.issues)if(o.code==="invalid_union")o.unionErrors.map(i);else if(o.code==="invalid_return_type")i(o.returnTypeError);else if(o.code==="invalid_arguments")i(o.argumentsError);else if(o.path.length===0)r._errors.push(n(o));else{let l=r,c=0;for(;c<o.path.length;){const d=o.path[c];c===o.path.length-1?(l[d]=l[d]||{_errors:[]},l[d]._errors.push(n(o))):l[d]=l[d]||{_errors:[]},l=l[d],c++}}};return i(this),r}static assert(e){if(!(e instanceof at))throw new Error(`Not a ZodError: ${e}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,te.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=n=>n.message){const n={},r=[];for(const i of this.issues)i.path.length>0?(n[i.path[0]]=n[i.path[0]]||[],n[i.path[0]].push(e(i))):r.push(e(i));return{formErrors:r,fieldErrors:n}}get formErrors(){return this.flatten()}}at.create=t=>new at(t);const kr=(t,e)=>{let n;switch(t.code){case C.invalid_type:t.received===L.undefined?n="Required":n=`Expected ${t.expected}, received ${t.received}`;break;case C.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(t.expected,te.jsonStringifyReplacer)}`;break;case C.unrecognized_keys:n=`Unrecognized key(s) in object: ${te.joinValues(t.keys,", ")}`;break;case C.invalid_union:n="Invalid input";break;case C.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${te.joinValues(t.options)}`;break;case C.invalid_enum_value:n=`Invalid enum value. Expected ${te.joinValues(t.options)}, received '${t.received}'`;break;case C.invalid_arguments:n="Invalid function arguments";break;case C.invalid_return_type:n="Invalid function return type";break;case C.invalid_date:n="Invalid date";break;case C.invalid_string:typeof t.validation=="object"?"includes"in t.validation?(n=`Invalid input: must include "${t.validation.includes}"`,typeof t.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${t.validation.position}`)):"startsWith"in t.validation?n=`Invalid input: must start with "${t.validation.startsWith}"`:"endsWith"in t.validation?n=`Invalid input: must end with "${t.validation.endsWith}"`:te.assertNever(t.validation):t.validation!=="regex"?n=`Invalid ${t.validation}`:n="Invalid";break;case C.too_small:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at least":"more than"} ${t.minimum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at least":"over"} ${t.minimum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(t.minimum))}`:n="Invalid input";break;case C.too_big:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at most":"less than"} ${t.maximum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at most":"under"} ${t.maximum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="bigint"?n=`BigInt must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly":t.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(t.maximum))}`:n="Invalid input";break;case C.custom:n="Invalid input";break;case C.invalid_intersection_types:n="Intersection results could not be merged";break;case C.not_multiple_of:n=`Number must be a multiple of ${t.multipleOf}`;break;case C.not_finite:n="Number must be finite";break;default:n=e.defaultError,te.assertNever(t)}return{message:n}};let yf=kr;function j_(t){yf=t}function Is(){return yf}const Rs=t=>{const{data:e,path:n,errorMaps:r,issueData:i}=t,s=[...n,...i.path||[]],o={...i,path:s};if(i.message!==void 0)return{...i,path:s,message:i.message};let l="";const c=r.filter(d=>!!d).slice().reverse();for(const d of c)l=d(o,{data:e,defaultError:l}).message;return{...i,path:s,message:l}},T_=[];function P(t,e){const n=Is(),r=Rs({issueData:e,data:t.data,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,n,n===kr?void 0:kr].filter(i=>!!i)});t.common.issues.push(r)}class qe{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,n){const r=[];for(const i of n){if(i.status==="aborted")return V;i.status==="dirty"&&e.dirty(),r.push(i.value)}return{status:e.value,value:r}}static async mergeObjectAsync(e,n){const r=[];for(const i of n){const s=await i.key,o=await i.value;r.push({key:s,value:o})}return qe.mergeObjectSync(e,r)}static mergeObjectSync(e,n){const r={};for(const i of n){const{key:s,value:o}=i;if(s.status==="aborted"||o.status==="aborted")return V;s.status==="dirty"&&e.dirty(),o.status==="dirty"&&e.dirty(),s.value!=="__proto__"&&(typeof o.value<"u"||i.alwaysSet)&&(r[s.value]=o.value)}return{status:e.value,value:r}}}const V=Object.freeze({status:"aborted"}),dr=t=>({status:"dirty",value:t}),Ye=t=>({status:"valid",value:t}),No=t=>t.status==="aborted",Lo=t=>t.status==="dirty",si=t=>t.status==="valid",ai=t=>typeof Promise<"u"&&t instanceof Promise;function Cs(t,e,n,r){if(typeof e=="function"?t!==e||!0:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e.get(t)}function vf(t,e,n,r,i){if(typeof e=="function"?t!==e||!0:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return e.set(t,n),n}var U;(function(t){t.errToObj=e=>typeof e=="string"?{message:e}:e||{},t.toString=e=>typeof e=="string"?e:e==null?void 0:e.message})(U||(U={}));var qr,Kr;class Rt{constructor(e,n,r,i){this._cachedPath=[],this.parent=e,this.data=n,this._path=r,this._key=i}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const Zd=(t,e)=>{if(si(e))return{success:!0,data:e.value};if(!t.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new at(t.common.issues);return this._error=n,this._error}}};function K(t){if(!t)return{};const{errorMap:e,invalid_type_error:n,required_error:r,description:i}=t;if(e&&(n||r))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:i}:{errorMap:(o,l)=>{var c,d;const{message:u}=t;return o.code==="invalid_enum_value"?{message:u??l.defaultError}:typeof l.data>"u"?{message:(c=u??r)!==null&&c!==void 0?c:l.defaultError}:o.code!=="invalid_type"?{message:l.defaultError}:{message:(d=u??n)!==null&&d!==void 0?d:l.defaultError}},description:i}}class J{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return gn(e.data)}_getOrReturnCtx(e,n){return n||{common:e.parent.common,data:e.data,parsedType:gn(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new qe,ctx:{common:e.parent.common,data:e.data,parsedType:gn(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const n=this._parse(e);if(ai(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(e){const n=this._parse(e);return Promise.resolve(n)}parse(e,n){const r=this.safeParse(e,n);if(r.success)return r.data;throw r.error}safeParse(e,n){var r;const i={common:{issues:[],async:(r=n==null?void 0:n.async)!==null&&r!==void 0?r:!1,contextualErrorMap:n==null?void 0:n.errorMap},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:gn(e)},s=this._parseSync({data:e,path:i.path,parent:i});return Zd(i,s)}async parseAsync(e,n){const r=await this.safeParseAsync(e,n);if(r.success)return r.data;throw r.error}async safeParseAsync(e,n){const r={common:{issues:[],contextualErrorMap:n==null?void 0:n.errorMap,async:!0},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:gn(e)},i=this._parse({data:e,path:r.path,parent:r}),s=await(ai(i)?i:Promise.resolve(i));return Zd(r,s)}refine(e,n){const r=i=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(i):n;return this._refinement((i,s)=>{const o=e(i),l=()=>s.addIssue({code:C.custom,...r(i)});return typeof Promise<"u"&&o instanceof Promise?o.then(c=>c?!0:(l(),!1)):o?!0:(l(),!1)})}refinement(e,n){return this._refinement((r,i)=>e(r)?!0:(i.addIssue(typeof n=="function"?n(r,i):n),!1))}_refinement(e){return new bt({schema:this,typeName:H.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return It.create(this,this._def)}nullable(){return _n.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return yt.create(this,this._def)}promise(){return Er.create(this,this._def)}or(e){return di.create([this,e],this._def)}and(e){return ui.create(this,e,this._def)}transform(e){return new bt({...K(this._def),schema:this,typeName:H.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const n=typeof e=="function"?e:()=>e;return new gi({...K(this._def),innerType:this,defaultValue:n,typeName:H.ZodDefault})}brand(){return new Sl({typeName:H.ZodBranded,type:this,...K(this._def)})}catch(e){const n=typeof e=="function"?e:()=>e;return new xi({...K(this._def),innerType:this,catchValue:n,typeName:H.ZodCatch})}describe(e){const n=this.constructor;return new n({...this._def,description:e})}pipe(e){return Oi.create(this,e)}readonly(){return yi.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const I_=/^c[^\s-]{8,}$/i,R_=/^[0-9a-z]+$/,C_=/^[0-9A-HJKMNP-TV-Z]{26}$/,A_=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,O_=/^[a-z0-9_-]{21}$/i,P_=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,N_=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,L_="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let qa;const $_=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,D_=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,M_=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,bf="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",F_=new RegExp(`^${bf}$`);function wf(t){let e="([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";return t.precision?e=`${e}\\.\\d{${t.precision}}`:t.precision==null&&(e=`${e}(\\.\\d+)?`),e}function U_(t){return new RegExp(`^${wf(t)}$`)}function kf(t){let e=`${bf}T${wf(t)}`;const n=[];return n.push(t.local?"Z?":"Z"),t.offset&&n.push("([+-]\\d{2}:?\\d{2})"),e=`${e}(${n.join("|")})`,new RegExp(`^${e}$`)}function B_(t,e){return!!((e==="v4"||!e)&&$_.test(t)||(e==="v6"||!e)&&D_.test(t))}class xt extends J{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==L.string){const s=this._getOrReturnCtx(e);return P(s,{code:C.invalid_type,expected:L.string,received:s.parsedType}),V}const r=new qe;let i;for(const s of this._def.checks)if(s.kind==="min")e.data.length<s.value&&(i=this._getOrReturnCtx(e,i),P(i,{code:C.too_small,minimum:s.value,type:"string",inclusive:!0,exact:!1,message:s.message}),r.dirty());else if(s.kind==="max")e.data.length>s.value&&(i=this._getOrReturnCtx(e,i),P(i,{code:C.too_big,maximum:s.value,type:"string",inclusive:!0,exact:!1,message:s.message}),r.dirty());else if(s.kind==="length"){const o=e.data.length>s.value,l=e.data.length<s.value;(o||l)&&(i=this._getOrReturnCtx(e,i),o?P(i,{code:C.too_big,maximum:s.value,type:"string",inclusive:!0,exact:!0,message:s.message}):l&&P(i,{code:C.too_small,minimum:s.value,type:"string",inclusive:!0,exact:!0,message:s.message}),r.dirty())}else if(s.kind==="email")N_.test(e.data)||(i=this._getOrReturnCtx(e,i),P(i,{validation:"email",code:C.invalid_string,message:s.message}),r.dirty());else if(s.kind==="emoji")qa||(qa=new RegExp(L_,"u")),qa.test(e.data)||(i=this._getOrReturnCtx(e,i),P(i,{validation:"emoji",code:C.invalid_string,message:s.message}),r.dirty());else if(s.kind==="uuid")A_.test(e.data)||(i=this._getOrReturnCtx(e,i),P(i,{validation:"uuid",code:C.invalid_string,message:s.message}),r.dirty());else if(s.kind==="nanoid")O_.test(e.data)||(i=this._getOrReturnCtx(e,i),P(i,{validation:"nanoid",code:C.invalid_string,message:s.message}),r.dirty());else if(s.kind==="cuid")I_.test(e.data)||(i=this._getOrReturnCtx(e,i),P(i,{validation:"cuid",code:C.invalid_string,message:s.message}),r.dirty());else if(s.kind==="cuid2")R_.test(e.data)||(i=this._getOrReturnCtx(e,i),P(i,{validation:"cuid2",code:C.invalid_string,message:s.message}),r.dirty());else if(s.kind==="ulid")C_.test(e.data)||(i=this._getOrReturnCtx(e,i),P(i,{validation:"ulid",code:C.invalid_string,message:s.message}),r.dirty());else if(s.kind==="url")try{new URL(e.data)}catch{i=this._getOrReturnCtx(e,i),P(i,{validation:"url",code:C.invalid_string,message:s.message}),r.dirty()}else s.kind==="regex"?(s.regex.lastIndex=0,s.regex.test(e.data)||(i=this._getOrReturnCtx(e,i),P(i,{validation:"regex",code:C.invalid_string,message:s.message}),r.dirty())):s.kind==="trim"?e.data=e.data.trim():s.kind==="includes"?e.data.includes(s.value,s.position)||(i=this._getOrReturnCtx(e,i),P(i,{code:C.invalid_string,validation:{includes:s.value,position:s.position},message:s.message}),r.dirty()):s.kind==="toLowerCase"?e.data=e.data.toLowerCase():s.kind==="toUpperCase"?e.data=e.data.toUpperCase():s.kind==="startsWith"?e.data.startsWith(s.value)||(i=this._getOrReturnCtx(e,i),P(i,{code:C.invalid_string,validation:{startsWith:s.value},message:s.message}),r.dirty()):s.kind==="endsWith"?e.data.endsWith(s.value)||(i=this._getOrReturnCtx(e,i),P(i,{code:C.invalid_string,validation:{endsWith:s.value},message:s.message}),r.dirty()):s.kind==="datetime"?kf(s).test(e.data)||(i=this._getOrReturnCtx(e,i),P(i,{code:C.invalid_string,validation:"datetime",message:s.message}),r.dirty()):s.kind==="date"?F_.test(e.data)||(i=this._getOrReturnCtx(e,i),P(i,{code:C.invalid_string,validation:"date",message:s.message}),r.dirty()):s.kind==="time"?U_(s).test(e.data)||(i=this._getOrReturnCtx(e,i),P(i,{code:C.invalid_string,validation:"time",message:s.message}),r.dirty()):s.kind==="duration"?P_.test(e.data)||(i=this._getOrReturnCtx(e,i),P(i,{validation:"duration",code:C.invalid_string,message:s.message}),r.dirty()):s.kind==="ip"?B_(e.data,s.version)||(i=this._getOrReturnCtx(e,i),P(i,{validation:"ip",code:C.invalid_string,message:s.message}),r.dirty()):s.kind==="base64"?M_.test(e.data)||(i=this._getOrReturnCtx(e,i),P(i,{validation:"base64",code:C.invalid_string,message:s.message}),r.dirty()):te.assertNever(s);return{status:r.value,value:e.data}}_regex(e,n,r){return this.refinement(i=>e.test(i),{validation:n,code:C.invalid_string,...U.errToObj(r)})}_addCheck(e){return new xt({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...U.errToObj(e)})}url(e){return this._addCheck({kind:"url",...U.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...U.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...U.errToObj(e)})}nanoid(e){return this._addCheck({kind:"nanoid",...U.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...U.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...U.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...U.errToObj(e)})}base64(e){return this._addCheck({kind:"base64",...U.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...U.errToObj(e)})}datetime(e){var n,r;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,offset:(n=e==null?void 0:e.offset)!==null&&n!==void 0?n:!1,local:(r=e==null?void 0:e.local)!==null&&r!==void 0?r:!1,...U.errToObj(e==null?void 0:e.message)})}date(e){return this._addCheck({kind:"date",message:e})}time(e){return typeof e=="string"?this._addCheck({kind:"time",precision:null,message:e}):this._addCheck({kind:"time",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,...U.errToObj(e==null?void 0:e.message)})}duration(e){return this._addCheck({kind:"duration",...U.errToObj(e)})}regex(e,n){return this._addCheck({kind:"regex",regex:e,...U.errToObj(n)})}includes(e,n){return this._addCheck({kind:"includes",value:e,position:n==null?void 0:n.position,...U.errToObj(n==null?void 0:n.message)})}startsWith(e,n){return this._addCheck({kind:"startsWith",value:e,...U.errToObj(n)})}endsWith(e,n){return this._addCheck({kind:"endsWith",value:e,...U.errToObj(n)})}min(e,n){return this._addCheck({kind:"min",value:e,...U.errToObj(n)})}max(e,n){return this._addCheck({kind:"max",value:e,...U.errToObj(n)})}length(e,n){return this._addCheck({kind:"length",value:e,...U.errToObj(n)})}nonempty(e){return this.min(1,U.errToObj(e))}trim(){return new xt({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new xt({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new xt({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isDate(){return!!this._def.checks.find(e=>e.kind==="date")}get isTime(){return!!this._def.checks.find(e=>e.kind==="time")}get isDuration(){return!!this._def.checks.find(e=>e.kind==="duration")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(e=>e.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get isBase64(){return!!this._def.checks.find(e=>e.kind==="base64")}get minLength(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxLength(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}}xt.create=t=>{var e;return new xt({checks:[],typeName:H.ZodString,coerce:(e=t==null?void 0:t.coerce)!==null&&e!==void 0?e:!1,...K(t)})};function z_(t,e){const n=(t.toString().split(".")[1]||"").length,r=(e.toString().split(".")[1]||"").length,i=n>r?n:r,s=parseInt(t.toFixed(i).replace(".","")),o=parseInt(e.toFixed(i).replace(".",""));return s%o/Math.pow(10,i)}class kn extends J{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==L.number){const s=this._getOrReturnCtx(e);return P(s,{code:C.invalid_type,expected:L.number,received:s.parsedType}),V}let r;const i=new qe;for(const s of this._def.checks)s.kind==="int"?te.isInteger(e.data)||(r=this._getOrReturnCtx(e,r),P(r,{code:C.invalid_type,expected:"integer",received:"float",message:s.message}),i.dirty()):s.kind==="min"?(s.inclusive?e.data<s.value:e.data<=s.value)&&(r=this._getOrReturnCtx(e,r),P(r,{code:C.too_small,minimum:s.value,type:"number",inclusive:s.inclusive,exact:!1,message:s.message}),i.dirty()):s.kind==="max"?(s.inclusive?e.data>s.value:e.data>=s.value)&&(r=this._getOrReturnCtx(e,r),P(r,{code:C.too_big,maximum:s.value,type:"number",inclusive:s.inclusive,exact:!1,message:s.message}),i.dirty()):s.kind==="multipleOf"?z_(e.data,s.value)!==0&&(r=this._getOrReturnCtx(e,r),P(r,{code:C.not_multiple_of,multipleOf:s.value,message:s.message}),i.dirty()):s.kind==="finite"?Number.isFinite(e.data)||(r=this._getOrReturnCtx(e,r),P(r,{code:C.not_finite,message:s.message}),i.dirty()):te.assertNever(s);return{status:i.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,U.toString(n))}gt(e,n){return this.setLimit("min",e,!1,U.toString(n))}lte(e,n){return this.setLimit("max",e,!0,U.toString(n))}lt(e,n){return this.setLimit("max",e,!1,U.toString(n))}setLimit(e,n,r,i){return new kn({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:r,message:U.toString(i)}]})}_addCheck(e){return new kn({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:U.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:U.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:U.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:U.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:U.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:U.toString(n)})}finite(e){return this._addCheck({kind:"finite",message:U.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:U.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:U.toString(e)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&te.isInteger(e.value))}get isFinite(){let e=null,n=null;for(const r of this._def.checks){if(r.kind==="finite"||r.kind==="int"||r.kind==="multipleOf")return!0;r.kind==="min"?(n===null||r.value>n)&&(n=r.value):r.kind==="max"&&(e===null||r.value<e)&&(e=r.value)}return Number.isFinite(n)&&Number.isFinite(e)}}kn.create=t=>new kn({checks:[],typeName:H.ZodNumber,coerce:(t==null?void 0:t.coerce)||!1,...K(t)});class Sn extends J{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==L.bigint){const s=this._getOrReturnCtx(e);return P(s,{code:C.invalid_type,expected:L.bigint,received:s.parsedType}),V}let r;const i=new qe;for(const s of this._def.checks)s.kind==="min"?(s.inclusive?e.data<s.value:e.data<=s.value)&&(r=this._getOrReturnCtx(e,r),P(r,{code:C.too_small,type:"bigint",minimum:s.value,inclusive:s.inclusive,message:s.message}),i.dirty()):s.kind==="max"?(s.inclusive?e.data>s.value:e.data>=s.value)&&(r=this._getOrReturnCtx(e,r),P(r,{code:C.too_big,type:"bigint",maximum:s.value,inclusive:s.inclusive,message:s.message}),i.dirty()):s.kind==="multipleOf"?e.data%s.value!==BigInt(0)&&(r=this._getOrReturnCtx(e,r),P(r,{code:C.not_multiple_of,multipleOf:s.value,message:s.message}),i.dirty()):te.assertNever(s);return{status:i.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,U.toString(n))}gt(e,n){return this.setLimit("min",e,!1,U.toString(n))}lte(e,n){return this.setLimit("max",e,!0,U.toString(n))}lt(e,n){return this.setLimit("max",e,!1,U.toString(n))}setLimit(e,n,r,i){return new Sn({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:r,message:U.toString(i)}]})}_addCheck(e){return new Sn({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:U.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:U.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:U.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:U.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:U.toString(n)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}}Sn.create=t=>{var e;return new Sn({checks:[],typeName:H.ZodBigInt,coerce:(e=t==null?void 0:t.coerce)!==null&&e!==void 0?e:!1,...K(t)})};class oi extends J{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==L.boolean){const r=this._getOrReturnCtx(e);return P(r,{code:C.invalid_type,expected:L.boolean,received:r.parsedType}),V}return Ye(e.data)}}oi.create=t=>new oi({typeName:H.ZodBoolean,coerce:(t==null?void 0:t.coerce)||!1,...K(t)});class Jn extends J{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==L.date){const s=this._getOrReturnCtx(e);return P(s,{code:C.invalid_type,expected:L.date,received:s.parsedType}),V}if(isNaN(e.data.getTime())){const s=this._getOrReturnCtx(e);return P(s,{code:C.invalid_date}),V}const r=new qe;let i;for(const s of this._def.checks)s.kind==="min"?e.data.getTime()<s.value&&(i=this._getOrReturnCtx(e,i),P(i,{code:C.too_small,message:s.message,inclusive:!0,exact:!1,minimum:s.value,type:"date"}),r.dirty()):s.kind==="max"?e.data.getTime()>s.value&&(i=this._getOrReturnCtx(e,i),P(i,{code:C.too_big,message:s.message,inclusive:!0,exact:!1,maximum:s.value,type:"date"}),r.dirty()):te.assertNever(s);return{status:r.value,value:new Date(e.data.getTime())}}_addCheck(e){return new Jn({...this._def,checks:[...this._def.checks,e]})}min(e,n){return this._addCheck({kind:"min",value:e.getTime(),message:U.toString(n)})}max(e,n){return this._addCheck({kind:"max",value:e.getTime(),message:U.toString(n)})}get minDate(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e!=null?new Date(e):null}}Jn.create=t=>new Jn({checks:[],coerce:(t==null?void 0:t.coerce)||!1,typeName:H.ZodDate,...K(t)});class As extends J{_parse(e){if(this._getType(e)!==L.symbol){const r=this._getOrReturnCtx(e);return P(r,{code:C.invalid_type,expected:L.symbol,received:r.parsedType}),V}return Ye(e.data)}}As.create=t=>new As({typeName:H.ZodSymbol,...K(t)});class li extends J{_parse(e){if(this._getType(e)!==L.undefined){const r=this._getOrReturnCtx(e);return P(r,{code:C.invalid_type,expected:L.undefined,received:r.parsedType}),V}return Ye(e.data)}}li.create=t=>new li({typeName:H.ZodUndefined,...K(t)});class ci extends J{_parse(e){if(this._getType(e)!==L.null){const r=this._getOrReturnCtx(e);return P(r,{code:C.invalid_type,expected:L.null,received:r.parsedType}),V}return Ye(e.data)}}ci.create=t=>new ci({typeName:H.ZodNull,...K(t)});class Sr extends J{constructor(){super(...arguments),this._any=!0}_parse(e){return Ye(e.data)}}Sr.create=t=>new Sr({typeName:H.ZodAny,...K(t)});class Wn extends J{constructor(){super(...arguments),this._unknown=!0}_parse(e){return Ye(e.data)}}Wn.create=t=>new Wn({typeName:H.ZodUnknown,...K(t)});class Jt extends J{_parse(e){const n=this._getOrReturnCtx(e);return P(n,{code:C.invalid_type,expected:L.never,received:n.parsedType}),V}}Jt.create=t=>new Jt({typeName:H.ZodNever,...K(t)});class Os extends J{_parse(e){if(this._getType(e)!==L.undefined){const r=this._getOrReturnCtx(e);return P(r,{code:C.invalid_type,expected:L.void,received:r.parsedType}),V}return Ye(e.data)}}Os.create=t=>new Os({typeName:H.ZodVoid,...K(t)});class yt extends J{_parse(e){const{ctx:n,status:r}=this._processInputParams(e),i=this._def;if(n.parsedType!==L.array)return P(n,{code:C.invalid_type,expected:L.array,received:n.parsedType}),V;if(i.exactLength!==null){const o=n.data.length>i.exactLength.value,l=n.data.length<i.exactLength.value;(o||l)&&(P(n,{code:o?C.too_big:C.too_small,minimum:l?i.exactLength.value:void 0,maximum:o?i.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:i.exactLength.message}),r.dirty())}if(i.minLength!==null&&n.data.length<i.minLength.value&&(P(n,{code:C.too_small,minimum:i.minLength.value,type:"array",inclusive:!0,exact:!1,message:i.minLength.message}),r.dirty()),i.maxLength!==null&&n.data.length>i.maxLength.value&&(P(n,{code:C.too_big,maximum:i.maxLength.value,type:"array",inclusive:!0,exact:!1,message:i.maxLength.message}),r.dirty()),n.common.async)return Promise.all([...n.data].map((o,l)=>i.type._parseAsync(new Rt(n,o,n.path,l)))).then(o=>qe.mergeArray(r,o));const s=[...n.data].map((o,l)=>i.type._parseSync(new Rt(n,o,n.path,l)));return qe.mergeArray(r,s)}get element(){return this._def.type}min(e,n){return new yt({...this._def,minLength:{value:e,message:U.toString(n)}})}max(e,n){return new yt({...this._def,maxLength:{value:e,message:U.toString(n)}})}length(e,n){return new yt({...this._def,exactLength:{value:e,message:U.toString(n)}})}nonempty(e){return this.min(1,e)}}yt.create=(t,e)=>new yt({type:t,minLength:null,maxLength:null,exactLength:null,typeName:H.ZodArray,...K(e)});function or(t){if(t instanceof ke){const e={};for(const n in t.shape){const r=t.shape[n];e[n]=It.create(or(r))}return new ke({...t._def,shape:()=>e})}else return t instanceof yt?new yt({...t._def,type:or(t.element)}):t instanceof It?It.create(or(t.unwrap())):t instanceof _n?_n.create(or(t.unwrap())):t instanceof Ct?Ct.create(t.items.map(e=>or(e))):t}class ke extends J{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),n=te.objectKeys(e);return this._cached={shape:e,keys:n}}_parse(e){if(this._getType(e)!==L.object){const d=this._getOrReturnCtx(e);return P(d,{code:C.invalid_type,expected:L.object,received:d.parsedType}),V}const{status:r,ctx:i}=this._processInputParams(e),{shape:s,keys:o}=this._getCached(),l=[];if(!(this._def.catchall instanceof Jt&&this._def.unknownKeys==="strip"))for(const d in i.data)o.includes(d)||l.push(d);const c=[];for(const d of o){const u=s[d],h=i.data[d];c.push({key:{status:"valid",value:d},value:u._parse(new Rt(i,h,i.path,d)),alwaysSet:d in i.data})}if(this._def.catchall instanceof Jt){const d=this._def.unknownKeys;if(d==="passthrough")for(const u of l)c.push({key:{status:"valid",value:u},value:{status:"valid",value:i.data[u]}});else if(d==="strict")l.length>0&&(P(i,{code:C.unrecognized_keys,keys:l}),r.dirty());else if(d!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const d=this._def.catchall;for(const u of l){const h=i.data[u];c.push({key:{status:"valid",value:u},value:d._parse(new Rt(i,h,i.path,u)),alwaysSet:u in i.data})}}return i.common.async?Promise.resolve().then(async()=>{const d=[];for(const u of c){const h=await u.key,p=await u.value;d.push({key:h,value:p,alwaysSet:u.alwaysSet})}return d}).then(d=>qe.mergeObjectSync(r,d)):qe.mergeObjectSync(r,c)}get shape(){return this._def.shape()}strict(e){return U.errToObj,new ke({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(n,r)=>{var i,s,o,l;const c=(o=(s=(i=this._def).errorMap)===null||s===void 0?void 0:s.call(i,n,r).message)!==null&&o!==void 0?o:r.defaultError;return n.code==="unrecognized_keys"?{message:(l=U.errToObj(e).message)!==null&&l!==void 0?l:c}:{message:c}}}:{}})}strip(){return new ke({...this._def,unknownKeys:"strip"})}passthrough(){return new ke({...this._def,unknownKeys:"passthrough"})}extend(e){return new ke({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new ke({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:H.ZodObject})}setKey(e,n){return this.augment({[e]:n})}catchall(e){return new ke({...this._def,catchall:e})}pick(e){const n={};return te.objectKeys(e).forEach(r=>{e[r]&&this.shape[r]&&(n[r]=this.shape[r])}),new ke({...this._def,shape:()=>n})}omit(e){const n={};return te.objectKeys(this.shape).forEach(r=>{e[r]||(n[r]=this.shape[r])}),new ke({...this._def,shape:()=>n})}deepPartial(){return or(this)}partial(e){const n={};return te.objectKeys(this.shape).forEach(r=>{const i=this.shape[r];e&&!e[r]?n[r]=i:n[r]=i.optional()}),new ke({...this._def,shape:()=>n})}required(e){const n={};return te.objectKeys(this.shape).forEach(r=>{if(e&&!e[r])n[r]=this.shape[r];else{let s=this.shape[r];for(;s instanceof It;)s=s._def.innerType;n[r]=s}}),new ke({...this._def,shape:()=>n})}keyof(){return Sf(te.objectKeys(this.shape))}}ke.create=(t,e)=>new ke({shape:()=>t,unknownKeys:"strip",catchall:Jt.create(),typeName:H.ZodObject,...K(e)});ke.strictCreate=(t,e)=>new ke({shape:()=>t,unknownKeys:"strict",catchall:Jt.create(),typeName:H.ZodObject,...K(e)});ke.lazycreate=(t,e)=>new ke({shape:t,unknownKeys:"strip",catchall:Jt.create(),typeName:H.ZodObject,...K(e)});class di extends J{_parse(e){const{ctx:n}=this._processInputParams(e),r=this._def.options;function i(s){for(const l of s)if(l.result.status==="valid")return l.result;for(const l of s)if(l.result.status==="dirty")return n.common.issues.push(...l.ctx.common.issues),l.result;const o=s.map(l=>new at(l.ctx.common.issues));return P(n,{code:C.invalid_union,unionErrors:o}),V}if(n.common.async)return Promise.all(r.map(async s=>{const o={...n,common:{...n.common,issues:[]},parent:null};return{result:await s._parseAsync({data:n.data,path:n.path,parent:o}),ctx:o}})).then(i);{let s;const o=[];for(const c of r){const d={...n,common:{...n.common,issues:[]},parent:null},u=c._parseSync({data:n.data,path:n.path,parent:d});if(u.status==="valid")return u;u.status==="dirty"&&!s&&(s={result:u,ctx:d}),d.common.issues.length&&o.push(d.common.issues)}if(s)return n.common.issues.push(...s.ctx.common.issues),s.result;const l=o.map(c=>new at(c));return P(n,{code:C.invalid_union,unionErrors:l}),V}}get options(){return this._def.options}}di.create=(t,e)=>new di({options:t,typeName:H.ZodUnion,...K(e)});const Ft=t=>t instanceof pi?Ft(t.schema):t instanceof bt?Ft(t.innerType()):t instanceof fi?[t.value]:t instanceof En?t.options:t instanceof mi?te.objectValues(t.enum):t instanceof gi?Ft(t._def.innerType):t instanceof li?[void 0]:t instanceof ci?[null]:t instanceof It?[void 0,...Ft(t.unwrap())]:t instanceof _n?[null,...Ft(t.unwrap())]:t instanceof Sl||t instanceof yi?Ft(t.unwrap()):t instanceof xi?Ft(t._def.innerType):[];class ia extends J{_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==L.object)return P(n,{code:C.invalid_type,expected:L.object,received:n.parsedType}),V;const r=this.discriminator,i=n.data[r],s=this.optionsMap.get(i);return s?n.common.async?s._parseAsync({data:n.data,path:n.path,parent:n}):s._parseSync({data:n.data,path:n.path,parent:n}):(P(n,{code:C.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),V)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,n,r){const i=new Map;for(const s of n){const o=Ft(s.shape[e]);if(!o.length)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const l of o){if(i.has(l))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(l)}`);i.set(l,s)}}return new ia({typeName:H.ZodDiscriminatedUnion,discriminator:e,options:n,optionsMap:i,...K(r)})}}function $o(t,e){const n=gn(t),r=gn(e);if(t===e)return{valid:!0,data:t};if(n===L.object&&r===L.object){const i=te.objectKeys(e),s=te.objectKeys(t).filter(l=>i.indexOf(l)!==-1),o={...t,...e};for(const l of s){const c=$o(t[l],e[l]);if(!c.valid)return{valid:!1};o[l]=c.data}return{valid:!0,data:o}}else if(n===L.array&&r===L.array){if(t.length!==e.length)return{valid:!1};const i=[];for(let s=0;s<t.length;s++){const o=t[s],l=e[s],c=$o(o,l);if(!c.valid)return{valid:!1};i.push(c.data)}return{valid:!0,data:i}}else return n===L.date&&r===L.date&&+t==+e?{valid:!0,data:t}:{valid:!1}}class ui extends J{_parse(e){const{status:n,ctx:r}=this._processInputParams(e),i=(s,o)=>{if(No(s)||No(o))return V;const l=$o(s.value,o.value);return l.valid?((Lo(s)||Lo(o))&&n.dirty(),{status:n.value,value:l.data}):(P(r,{code:C.invalid_intersection_types}),V)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([s,o])=>i(s,o)):i(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}}ui.create=(t,e,n)=>new ui({left:t,right:e,typeName:H.ZodIntersection,...K(n)});class Ct extends J{_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==L.array)return P(r,{code:C.invalid_type,expected:L.array,received:r.parsedType}),V;if(r.data.length<this._def.items.length)return P(r,{code:C.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),V;!this._def.rest&&r.data.length>this._def.items.length&&(P(r,{code:C.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const s=[...r.data].map((o,l)=>{const c=this._def.items[l]||this._def.rest;return c?c._parse(new Rt(r,o,r.path,l)):null}).filter(o=>!!o);return r.common.async?Promise.all(s).then(o=>qe.mergeArray(n,o)):qe.mergeArray(n,s)}get items(){return this._def.items}rest(e){return new Ct({...this._def,rest:e})}}Ct.create=(t,e)=>{if(!Array.isArray(t))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Ct({items:t,typeName:H.ZodTuple,rest:null,...K(e)})};class hi extends J{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==L.object)return P(r,{code:C.invalid_type,expected:L.object,received:r.parsedType}),V;const i=[],s=this._def.keyType,o=this._def.valueType;for(const l in r.data)i.push({key:s._parse(new Rt(r,l,r.path,l)),value:o._parse(new Rt(r,r.data[l],r.path,l)),alwaysSet:l in r.data});return r.common.async?qe.mergeObjectAsync(n,i):qe.mergeObjectSync(n,i)}get element(){return this._def.valueType}static create(e,n,r){return n instanceof J?new hi({keyType:e,valueType:n,typeName:H.ZodRecord,...K(r)}):new hi({keyType:xt.create(),valueType:e,typeName:H.ZodRecord,...K(n)})}}class Ps extends J{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==L.map)return P(r,{code:C.invalid_type,expected:L.map,received:r.parsedType}),V;const i=this._def.keyType,s=this._def.valueType,o=[...r.data.entries()].map(([l,c],d)=>({key:i._parse(new Rt(r,l,r.path,[d,"key"])),value:s._parse(new Rt(r,c,r.path,[d,"value"]))}));if(r.common.async){const l=new Map;return Promise.resolve().then(async()=>{for(const c of o){const d=await c.key,u=await c.value;if(d.status==="aborted"||u.status==="aborted")return V;(d.status==="dirty"||u.status==="dirty")&&n.dirty(),l.set(d.value,u.value)}return{status:n.value,value:l}})}else{const l=new Map;for(const c of o){const d=c.key,u=c.value;if(d.status==="aborted"||u.status==="aborted")return V;(d.status==="dirty"||u.status==="dirty")&&n.dirty(),l.set(d.value,u.value)}return{status:n.value,value:l}}}}Ps.create=(t,e,n)=>new Ps({valueType:e,keyType:t,typeName:H.ZodMap,...K(n)});class Xn extends J{_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==L.set)return P(r,{code:C.invalid_type,expected:L.set,received:r.parsedType}),V;const i=this._def;i.minSize!==null&&r.data.size<i.minSize.value&&(P(r,{code:C.too_small,minimum:i.minSize.value,type:"set",inclusive:!0,exact:!1,message:i.minSize.message}),n.dirty()),i.maxSize!==null&&r.data.size>i.maxSize.value&&(P(r,{code:C.too_big,maximum:i.maxSize.value,type:"set",inclusive:!0,exact:!1,message:i.maxSize.message}),n.dirty());const s=this._def.valueType;function o(c){const d=new Set;for(const u of c){if(u.status==="aborted")return V;u.status==="dirty"&&n.dirty(),d.add(u.value)}return{status:n.value,value:d}}const l=[...r.data.values()].map((c,d)=>s._parse(new Rt(r,c,r.path,d)));return r.common.async?Promise.all(l).then(c=>o(c)):o(l)}min(e,n){return new Xn({...this._def,minSize:{value:e,message:U.toString(n)}})}max(e,n){return new Xn({...this._def,maxSize:{value:e,message:U.toString(n)}})}size(e,n){return this.min(e,n).max(e,n)}nonempty(e){return this.min(1,e)}}Xn.create=(t,e)=>new Xn({valueType:t,minSize:null,maxSize:null,typeName:H.ZodSet,...K(e)});class xr extends J{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==L.function)return P(n,{code:C.invalid_type,expected:L.function,received:n.parsedType}),V;function r(l,c){return Rs({data:l,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Is(),kr].filter(d=>!!d),issueData:{code:C.invalid_arguments,argumentsError:c}})}function i(l,c){return Rs({data:l,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Is(),kr].filter(d=>!!d),issueData:{code:C.invalid_return_type,returnTypeError:c}})}const s={errorMap:n.common.contextualErrorMap},o=n.data;if(this._def.returns instanceof Er){const l=this;return Ye(async function(...c){const d=new at([]),u=await l._def.args.parseAsync(c,s).catch(m=>{throw d.addIssue(r(c,m)),d}),h=await Reflect.apply(o,this,u);return await l._def.returns._def.type.parseAsync(h,s).catch(m=>{throw d.addIssue(i(h,m)),d})})}else{const l=this;return Ye(function(...c){const d=l._def.args.safeParse(c,s);if(!d.success)throw new at([r(c,d.error)]);const u=Reflect.apply(o,this,d.data),h=l._def.returns.safeParse(u,s);if(!h.success)throw new at([i(u,h.error)]);return h.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new xr({...this._def,args:Ct.create(e).rest(Wn.create())})}returns(e){return new xr({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,n,r){return new xr({args:e||Ct.create([]).rest(Wn.create()),returns:n||Wn.create(),typeName:H.ZodFunction,...K(r)})}}class pi extends J{get schema(){return this._def.getter()}_parse(e){const{ctx:n}=this._processInputParams(e);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}pi.create=(t,e)=>new pi({getter:t,typeName:H.ZodLazy,...K(e)});class fi extends J{_parse(e){if(e.data!==this._def.value){const n=this._getOrReturnCtx(e);return P(n,{received:n.data,code:C.invalid_literal,expected:this._def.value}),V}return{status:"valid",value:e.data}}get value(){return this._def.value}}fi.create=(t,e)=>new fi({value:t,typeName:H.ZodLiteral,...K(e)});function Sf(t,e){return new En({values:t,typeName:H.ZodEnum,...K(e)})}class En extends J{constructor(){super(...arguments),qr.set(this,void 0)}_parse(e){if(typeof e.data!="string"){const n=this._getOrReturnCtx(e),r=this._def.values;return P(n,{expected:te.joinValues(r),received:n.parsedType,code:C.invalid_type}),V}if(Cs(this,qr)||vf(this,qr,new Set(this._def.values)),!Cs(this,qr).has(e.data)){const n=this._getOrReturnCtx(e),r=this._def.values;return P(n,{received:n.data,code:C.invalid_enum_value,options:r}),V}return Ye(e.data)}get options(){return this._def.values}get enum(){const e={};for(const n of this._def.values)e[n]=n;return e}get Values(){const e={};for(const n of this._def.values)e[n]=n;return e}get Enum(){const e={};for(const n of this._def.values)e[n]=n;return e}extract(e,n=this._def){return En.create(e,{...this._def,...n})}exclude(e,n=this._def){return En.create(this.options.filter(r=>!e.includes(r)),{...this._def,...n})}}qr=new WeakMap;En.create=Sf;class mi extends J{constructor(){super(...arguments),Kr.set(this,void 0)}_parse(e){const n=te.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(e);if(r.parsedType!==L.string&&r.parsedType!==L.number){const i=te.objectValues(n);return P(r,{expected:te.joinValues(i),received:r.parsedType,code:C.invalid_type}),V}if(Cs(this,Kr)||vf(this,Kr,new Set(te.getValidEnumValues(this._def.values))),!Cs(this,Kr).has(e.data)){const i=te.objectValues(n);return P(r,{received:r.data,code:C.invalid_enum_value,options:i}),V}return Ye(e.data)}get enum(){return this._def.values}}Kr=new WeakMap;mi.create=(t,e)=>new mi({values:t,typeName:H.ZodNativeEnum,...K(e)});class Er extends J{unwrap(){return this._def.type}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==L.promise&&n.common.async===!1)return P(n,{code:C.invalid_type,expected:L.promise,received:n.parsedType}),V;const r=n.parsedType===L.promise?n.data:Promise.resolve(n.data);return Ye(r.then(i=>this._def.type.parseAsync(i,{path:n.path,errorMap:n.common.contextualErrorMap})))}}Er.create=(t,e)=>new Er({type:t,typeName:H.ZodPromise,...K(e)});class bt extends J{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===H.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:n,ctx:r}=this._processInputParams(e),i=this._def.effect||null,s={addIssue:o=>{P(r,o),o.fatal?n.abort():n.dirty()},get path(){return r.path}};if(s.addIssue=s.addIssue.bind(s),i.type==="preprocess"){const o=i.transform(r.data,s);if(r.common.async)return Promise.resolve(o).then(async l=>{if(n.value==="aborted")return V;const c=await this._def.schema._parseAsync({data:l,path:r.path,parent:r});return c.status==="aborted"?V:c.status==="dirty"||n.value==="dirty"?dr(c.value):c});{if(n.value==="aborted")return V;const l=this._def.schema._parseSync({data:o,path:r.path,parent:r});return l.status==="aborted"?V:l.status==="dirty"||n.value==="dirty"?dr(l.value):l}}if(i.type==="refinement"){const o=l=>{const c=i.refinement(l,s);if(r.common.async)return Promise.resolve(c);if(c instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return l};if(r.common.async===!1){const l=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return l.status==="aborted"?V:(l.status==="dirty"&&n.dirty(),o(l.value),{status:n.value,value:l.value})}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(l=>l.status==="aborted"?V:(l.status==="dirty"&&n.dirty(),o(l.value).then(()=>({status:n.value,value:l.value}))))}if(i.type==="transform")if(r.common.async===!1){const o=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!si(o))return o;const l=i.transform(o.value,s);if(l instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:l}}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(o=>si(o)?Promise.resolve(i.transform(o.value,s)).then(l=>({status:n.value,value:l})):o);te.assertNever(i)}}bt.create=(t,e,n)=>new bt({schema:t,typeName:H.ZodEffects,effect:e,...K(n)});bt.createWithPreprocess=(t,e,n)=>new bt({schema:e,effect:{type:"preprocess",transform:t},typeName:H.ZodEffects,...K(n)});class It extends J{_parse(e){return this._getType(e)===L.undefined?Ye(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}It.create=(t,e)=>new It({innerType:t,typeName:H.ZodOptional,...K(e)});class _n extends J{_parse(e){return this._getType(e)===L.null?Ye(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}_n.create=(t,e)=>new _n({innerType:t,typeName:H.ZodNullable,...K(e)});class gi extends J{_parse(e){const{ctx:n}=this._processInputParams(e);let r=n.data;return n.parsedType===L.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}gi.create=(t,e)=>new gi({innerType:t,typeName:H.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...K(e)});class xi extends J{_parse(e){const{ctx:n}=this._processInputParams(e),r={...n,common:{...n.common,issues:[]}},i=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return ai(i)?i.then(s=>({status:"valid",value:s.status==="valid"?s.value:this._def.catchValue({get error(){return new at(r.common.issues)},input:r.data})})):{status:"valid",value:i.status==="valid"?i.value:this._def.catchValue({get error(){return new at(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}}xi.create=(t,e)=>new xi({innerType:t,typeName:H.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...K(e)});class Ns extends J{_parse(e){if(this._getType(e)!==L.nan){const r=this._getOrReturnCtx(e);return P(r,{code:C.invalid_type,expected:L.nan,received:r.parsedType}),V}return{status:"valid",value:e.data}}}Ns.create=t=>new Ns({typeName:H.ZodNaN,...K(t)});const H_=Symbol("zod_brand");class Sl extends J{_parse(e){const{ctx:n}=this._processInputParams(e),r=n.data;return this._def.type._parse({data:r,path:n.path,parent:n})}unwrap(){return this._def.type}}class Oi extends J{_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.common.async)return(async()=>{const s=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return s.status==="aborted"?V:s.status==="dirty"?(n.dirty(),dr(s.value)):this._def.out._parseAsync({data:s.value,path:r.path,parent:r})})();{const i=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return i.status==="aborted"?V:i.status==="dirty"?(n.dirty(),{status:"dirty",value:i.value}):this._def.out._parseSync({data:i.value,path:r.path,parent:r})}}static create(e,n){return new Oi({in:e,out:n,typeName:H.ZodPipeline})}}class yi extends J{_parse(e){const n=this._def.innerType._parse(e),r=i=>(si(i)&&(i.value=Object.freeze(i.value)),i);return ai(n)?n.then(i=>r(i)):r(n)}unwrap(){return this._def.innerType}}yi.create=(t,e)=>new yi({innerType:t,typeName:H.ZodReadonly,...K(e)});function Ef(t,e={},n){return t?Sr.create().superRefine((r,i)=>{var s,o;if(!t(r)){const l=typeof e=="function"?e(r):typeof e=="string"?{message:e}:e,c=(o=(s=l.fatal)!==null&&s!==void 0?s:n)!==null&&o!==void 0?o:!0,d=typeof l=="string"?{message:l}:l;i.addIssue({code:"custom",...d,fatal:c})}}):Sr.create()}const V_={object:ke.lazycreate};var H;(function(t){t.ZodString="ZodString",t.ZodNumber="ZodNumber",t.ZodNaN="ZodNaN",t.ZodBigInt="ZodBigInt",t.ZodBoolean="ZodBoolean",t.ZodDate="ZodDate",t.ZodSymbol="ZodSymbol",t.ZodUndefined="ZodUndefined",t.ZodNull="ZodNull",t.ZodAny="ZodAny",t.ZodUnknown="ZodUnknown",t.ZodNever="ZodNever",t.ZodVoid="ZodVoid",t.ZodArray="ZodArray",t.ZodObject="ZodObject",t.ZodUnion="ZodUnion",t.ZodDiscriminatedUnion="ZodDiscriminatedUnion",t.ZodIntersection="ZodIntersection",t.ZodTuple="ZodTuple",t.ZodRecord="ZodRecord",t.ZodMap="ZodMap",t.ZodSet="ZodSet",t.ZodFunction="ZodFunction",t.ZodLazy="ZodLazy",t.ZodLiteral="ZodLiteral",t.ZodEnum="ZodEnum",t.ZodEffects="ZodEffects",t.ZodNativeEnum="ZodNativeEnum",t.ZodOptional="ZodOptional",t.ZodNullable="ZodNullable",t.ZodDefault="ZodDefault",t.ZodCatch="ZodCatch",t.ZodPromise="ZodPromise",t.ZodBranded="ZodBranded",t.ZodPipeline="ZodPipeline",t.ZodReadonly="ZodReadonly"})(H||(H={}));const W_=(t,e={message:`Input not instance of ${t.name}`})=>Ef(n=>n instanceof t,e),_f=xt.create,jf=kn.create,q_=Ns.create,K_=Sn.create,Tf=oi.create,G_=Jn.create,Z_=As.create,Y_=li.create,J_=ci.create,X_=Sr.create,Q_=Wn.create,ej=Jt.create,tj=Os.create,nj=yt.create,rj=ke.create,ij=ke.strictCreate,sj=di.create,aj=ia.create,oj=ui.create,lj=Ct.create,cj=hi.create,dj=Ps.create,uj=Xn.create,hj=xr.create,pj=pi.create,fj=fi.create,mj=En.create,gj=mi.create,xj=Er.create,Yd=bt.create,yj=It.create,vj=_n.create,bj=bt.createWithPreprocess,wj=Oi.create,kj=()=>_f().optional(),Sj=()=>jf().optional(),Ej=()=>Tf().optional(),_j={string:(t=>xt.create({...t,coerce:!0})),number:(t=>kn.create({...t,coerce:!0})),boolean:(t=>oi.create({...t,coerce:!0})),bigint:(t=>Sn.create({...t,coerce:!0})),date:(t=>Jn.create({...t,coerce:!0}))},jj=V;var k=Object.freeze({__proto__:null,defaultErrorMap:kr,setErrorMap:j_,getErrorMap:Is,makeIssue:Rs,EMPTY_PATH:T_,addIssueToContext:P,ParseStatus:qe,INVALID:V,DIRTY:dr,OK:Ye,isAborted:No,isDirty:Lo,isValid:si,isAsync:ai,get util(){return te},get objectUtil(){return Po},ZodParsedType:L,getParsedType:gn,ZodType:J,datetimeRegex:kf,ZodString:xt,ZodNumber:kn,ZodBigInt:Sn,ZodBoolean:oi,ZodDate:Jn,ZodSymbol:As,ZodUndefined:li,ZodNull:ci,ZodAny:Sr,ZodUnknown:Wn,ZodNever:Jt,ZodVoid:Os,ZodArray:yt,ZodObject:ke,ZodUnion:di,ZodDiscriminatedUnion:ia,ZodIntersection:ui,ZodTuple:Ct,ZodRecord:hi,ZodMap:Ps,ZodSet:Xn,ZodFunction:xr,ZodLazy:pi,ZodLiteral:fi,ZodEnum:En,ZodNativeEnum:mi,ZodPromise:Er,ZodEffects:bt,ZodTransformer:bt,ZodOptional:It,ZodNullable:_n,ZodDefault:gi,ZodCatch:xi,ZodNaN:Ns,BRAND:H_,ZodBranded:Sl,ZodPipeline:Oi,ZodReadonly:yi,custom:Ef,Schema:J,ZodSchema:J,late:V_,get ZodFirstPartyTypeKind(){return H},coerce:_j,any:X_,array:nj,bigint:K_,boolean:Tf,date:G_,discriminatedUnion:aj,effect:Yd,enum:mj,function:hj,instanceof:W_,intersection:oj,lazy:pj,literal:fj,map:dj,nan:q_,nativeEnum:gj,never:ej,null:J_,nullable:vj,number:jf,object:rj,oboolean:Ej,onumber:Sj,optional:yj,ostring:kj,pipeline:wj,preprocess:bj,promise:xj,record:cj,set:uj,strictObject:ij,string:_f,symbol:Z_,transformer:Yd,tuple:lj,undefined:Y_,union:sj,unknown:Q_,void:tj,NEVER:jj,ZodIssueCode:C,quotelessJson:__,ZodError:at});function Tj(t,e){let n={...t};for(let r of e)delete n[r];return n}var Ij=/:([a-zA-Z_][a-zA-Z0-9_]*)/g;function Rj(t){let e=t.url,n=t.params;return n&&(e=e.replace(Ij,(r,i)=>i in n?`${n[i]}`:r)),e}function Jd(t,e,n){return t.find(r=>r.method===e&&r.path===n)}function Cj(t){let e=new FormData;for(let n in t)e.append(n,t[n]);return{data:e}}var Ls=class extends Error{constructor(t,e,n,r){super(t),this.config=e,this.data=n,this.cause=r}},Aj={name:"form-data",request:async(t,e)=>{if(typeof e.data!="object"||Array.isArray(e.data))throw new Ls("Zodios: multipart/form-data body must be an object",e);let n=Cj(e.data);return{...e,data:n.data,headers:{...e.headers,...n.headers}}}};function Oj(){return Aj}var Pj={name:"form-url",request:async(t,e)=>{if(typeof e.data!="object"||Array.isArray(e.data))throw new Ls("Zodios: application/x-www-form-urlencoded body must be an object",e);return{...e,data:new URLSearchParams(e.data).toString(),headers:{...e.headers,"Content-Type":"application/x-www-form-urlencoded"}}}};function Nj(){return Pj}function Xd(t,e){return{request:async(n,r)=>({...r,headers:{...r.headers,[t]:e}})}}function Qd(t){return[!0,"response","all"].includes(t)}function eu(t){return[!0,"request","all"].includes(t)}function Lj({validate:t,transform:e,sendDefaults:n}){return{name:"zod-validation",request:eu(t)?async(r,i)=>{let s=Jd(r,i.method,i.url);if(!s)throw new Error(`No endpoint found for ${i.method} ${i.url}`);let{parameters:o}=s;if(!o)return i;let l={...i,queries:{...i.queries},headers:{...i.headers},params:{...i.params}},c={Query:h=>{var p;return(p=l.queries)==null?void 0:p[h]},Body:h=>l.data,Header:h=>{var p;return(p=l.headers)==null?void 0:p[h]},Path:h=>{var p;return(p=l.params)==null?void 0:p[h]}},d={Query:(h,p)=>l.queries[h]=p,Body:(h,p)=>l.data=p,Header:(h,p)=>l.headers[h]=p,Path:(h,p)=>l.params[h]=p},u=eu(e);for(let h of o){let{name:p,schema:m,type:x}=h,y=c[x](p);if(n||y!==void 0){let v=await m.safeParseAsync(y);if(!v.success)throw new Ls(`Zodios: Invalid ${x} parameter '${p}'`,i,y,v.error);u&&d[x](p,v.data)}}return l}:void 0,response:Qd(t)?async(r,i,s)=>{var o,l,c,d;let u=Jd(r,i.method,i.url);if(!u)throw new Error(`No endpoint found for ${i.method} ${i.url}`);if((l=(o=s.headers)==null?void 0:o["content-type"])!=null&&l.includes("application/json")||(d=(c=s.headers)==null?void 0:c["content-type"])!=null&&d.includes("application/vnd.api+json")){let h=await u.response.safeParseAsync(s.data);if(!h.success)throw new Ls(`Zodios: Invalid response from endpoint '${u.method} ${u.path}'
status: ${s.status} ${s.statusText}
cause:
${h.error.message}
received:
${JSON.stringify(s.data,null,2)}`,i,s.data,h.error);Qd(e)&&(s.data=h.data)}return s}:void 0}}var tu=class{constructor(t,e){this.plugins=[],this.key=`${t}-${e}`}indexOf(t){return this.plugins.findIndex(e=>(e==null?void 0:e.name)===t)}use(t){if(t.name){let e=this.indexOf(t.name);if(e!==-1)return this.plugins[e]=t,{key:this.key,value:e}}return this.plugins.push(t),{key:this.key,value:this.plugins.length-1}}eject(t){if(typeof t=="string"){let e=this.indexOf(t);if(e===-1)throw new Error(`Plugin with name '${t}' not found`);this.plugins[e]=void 0}else{if(t.key!==this.key)throw new Error(`Plugin with key '${t.key}' is not registered for endpoint '${this.key}'`);this.plugins[t.value]=void 0}}async interceptRequest(t,e){let n=e;for(let r of this.plugins)r!=null&&r.request&&(n=await r.request(t,n));return n}async interceptResponse(t,e,n){let r=n;for(let i=this.plugins.length-1;i>=0;i--){let s=this.plugins[i];s&&(r=r.then(s!=null&&s.response?o=>s.response(t,e,o):void 0,s!=null&&s.error?o=>s.error(t,e,o):void 0))}return r}count(){return this.plugins.reduce((t,e)=>e?t+1:t,0)}};function If(t){let e=new Set;for(let r of t){let i=`${r.method} ${r.path}`;if(e.has(i))throw new Error(`Zodios: Duplicate path '${i}'`);e.add(i)}let n=new Set;for(let r of t)if(r.alias){if(n.has(r.alias))throw new Error(`Zodios: Duplicate alias '${r.alias}'`);n.add(r.alias)}for(let r of t)if(r.parameters&&r.parameters.filter(i=>i.type==="Body").length>1)throw new Error(`Zodios: Multiple body parameters in endpoint '${r.path}'`)}function $j(t){return If(t),t}var Dj=class{constructor(t,e,n){this.endpointPlugins=new Map;let r;if(!t)throw Array.isArray(e)?new Error("Zodios: missing base url"):new Error("Zodios: missing api description");let i;if(typeof t=="string"&&Array.isArray(e))i=t,this.api=e,r=n||{};else if(Array.isArray(t)&&!Array.isArray(e))this.api=t,r=e||{};else throw new Error("Zodios: api must be an array");If(this.api),this.options={validate:!0,transform:!0,sendDefaults:!1,...r},this.options.axiosInstance?this.axiosInstance=this.options.axiosInstance:this.axiosInstance=ve.create({...this.options.axiosConfig}),i&&(this.axiosInstance.defaults.baseURL=i),this.injectAliasEndpoints(),this.initPlugins(),[!0,"all","request","response"].includes(this.options.validate)&&this.use(Lj(this.options))}initPlugins(){this.endpointPlugins.set("any-any",new tu("any","any")),this.api.forEach(t=>{let e=new tu(t.method,t.path);switch(t.requestFormat){case"binary":e.use(Xd("Content-Type","application/octet-stream"));break;case"form-data":e.use(Oj());break;case"form-url":e.use(Nj());break;case"text":e.use(Xd("Content-Type","text/plain"));break}this.endpointPlugins.set(`${t.method}-${t.path}`,e)})}getAnyEndpointPlugins(){return this.endpointPlugins.get("any-any")}findAliasEndpointPlugins(t){let e=this.api.find(n=>n.alias===t);if(e)return this.endpointPlugins.get(`${e.method}-${e.path}`)}findEnpointPlugins(t,e){return this.endpointPlugins.get(`${t}-${e}`)}get baseURL(){return this.axiosInstance.defaults.baseURL}get axios(){return this.axiosInstance}use(...t){if(typeof t[0]=="object")return this.getAnyEndpointPlugins().use(t[0]);if(typeof t[0]=="string"&&typeof t[1]=="object"){let e=this.findAliasEndpointPlugins(t[0]);if(!e)throw new Error(`Zodios: no alias '${t[0]}' found to register plugin`);return e.use(t[1])}else if(typeof t[0]=="string"&&typeof t[1]=="string"&&typeof t[2]=="object"){let e=this.findEnpointPlugins(t[0],t[1]);if(!e)throw new Error(`Zodios: no endpoint '${t[0]} ${t[1]}' found to register plugin`);return e.use(t[2])}throw new Error("Zodios: invalid plugin registration")}eject(t){var e;if(typeof t=="string"){this.getAnyEndpointPlugins().eject(t);return}(e=this.endpointPlugins.get(t.key))==null||e.eject(t)}injectAliasEndpoints(){this.api.forEach(t=>{t.alias&&(["post","put","patch","delete"].includes(t.method)?this[t.alias]=(e,n)=>this.request({...n,method:t.method,url:t.path,data:e}):this[t.alias]=e=>this.request({...e,method:t.method,url:t.path}))})}async request(t){let e=t,n=this.getAnyEndpointPlugins(),r=this.findEnpointPlugins(e.method,e.url);e=await n.interceptRequest(this.api,e),r&&(e=await r.interceptRequest(this.api,e));let i=this.axiosInstance.request({...Tj(e,["params","queries"]),url:Rj(e),params:e.queries});return r&&(i=r.interceptResponse(this.api,e,i)),i=n.interceptResponse(this.api,e,i),(await i).data}async get(t,...[e]){return this.request({...e,method:"get",url:t})}async post(t,e,...[n]){return this.request({...n,method:"post",url:t,data:e})}async put(t,e,...[n]){return this.request({...n,method:"put",url:t,data:e})}async patch(t,e,...[n]){return this.request({...n,method:"patch",url:t,data:e})}async delete(t,e,...[n]){return this.request({...n,method:"delete",url:t,data:e})}},Mj=Dj;const Rf=k.object({name:k.string().optional(),score:k.number().nullish(),roles:k.array(k.number().int()).optional(),roleId:k.number().int().optional(),statusId:k.number().int().optional(),comment:k.string().optional(),token:k.string(),refresh:k.string(),permissionId:k.number().int().optional(),permission:k.array(k.string())}).passthrough(),Fj=k.object({salesOrderId:k.string(),salesOrderStatusId:k.number().int(),pickup:k.string().optional(),delivery:k.string().optional(),createdTime:k.string().optional(),price:k.number().optional(),packages:k.number().int().optional(),pickedup:k.number().int().optional(),timeZone:k.string().optional(),drivers:k.array(k.object({driverId:k.string(),driver:k.string(),chatroomId:k.string()}).partial().passthrough()).nullish(),createdByUid:k.string().optional(),consigneePhone:k.string().optional()}).passthrough(),Cf=k.object({total:k.number().int(),page:k.number().int().optional(),salesOrders:k.array(Fj)}).passthrough(),$s=k.object({name:k.string(),firstName:k.string(),middleName:k.string(),lastName:k.string(),mobile:k.string(),address:k.string(),postcode:k.string(),cityId:k.number().int()}).partial().passthrough(),Af=k.object({sid:k.string(),weight:k.number().optional(),height:k.number().optional(),width:k.number().optional(),length:k.number().optional(),pricing:k.number().optional(),salesOrderStatusId:k.number().int().optional()}).passthrough(),Uj=k.object({salesOrderId:k.string(),salesOrderStatusId:k.number().int().optional(),sender:$s.optional(),recipient:$s.optional(),createDate:k.string().optional(),pickupDate:k.string().optional(),deliveryDate:k.string().optional(),comment:k.string().optional(),fleetUid:k.string().optional(),driverId:k.string().optional(),driver:k.string().optional(),timeZone:k.string().optional(),chatroomId:k.string().optional(),packages:k.array(Af).optional()}).passthrough(),Ds=k.object({roleId:k.number().int(),roleName:k.string(),permissions:k.array(k.string()),memberCount:k.number().int(),isSystem:k.boolean().optional()}).passthrough(),Of=k.object({roles:k.array(Ds)}).passthrough(),nu=k.object({roleName:k.string().min(1),permissions:k.array(k.string()).min(1)}).passthrough();k.object({}).partial().passthrough();const Ms=k.object({uid:k.string(),name:k.string(),email:k.string().optional(),roleId:k.number().int(),roleName:k.string().optional(),statusId:k.number().int().optional()}).passthrough(),Pf=k.object({total:k.number().int(),users:k.array(Ms)}).passthrough(),Bj=k.object({name:k.string(),email:k.string().optional(),roleId:k.number().int()}).passthrough(),zj=k.object({uid:k.string(),roleId:k.number().int().optional(),statusId:k.number().int().optional()}).passthrough(),El=k.object({id:k.number().int(),phone:k.string(),roleId:k.number().int(),roleName:k.string().optional(),invitedAt:k.string(),expiresAt:k.string()}).passthrough(),Nf=k.object({invites:k.array(El)}).passthrough(),Hj=k.object({phone:k.string(),roleId:k.number().int()}).passthrough(),Vj=k.object({id:k.number().int(),actor:k.string(),action:k.string(),target:k.string(),when:k.string()}).passthrough(),Wj=k.object({entries:k.array(Vj)}).passthrough(),kt={ApiVerifyTokenResponse:Rf,ApiSalesOrderListResponse:Cf,ApiSalesOrderDetail:Uj,ApiRole:Ds,ApiRoleListResponse:Of,ApiAssistantUser:Ms,ApiAssistantListResponse:Pf,ApiInvite:El,ApiInviteListResponse:Nf},qj=$j([{method:"get",path:"/company/assistant",alias:"getAssistantList",requestFormat:"json",response:Pf},{method:"post",path:"/company/assistant",alias:"postAssistant",requestFormat:"json",parameters:[{name:"body",type:"Body",schema:Bj}],response:Ms},{method:"put",path:"/company/assistant",alias:"putAssistant",requestFormat:"json",parameters:[{name:"body",type:"Body",schema:zj}],response:Ms},{method:"get",path:"/company/rbac/audit",alias:"getAuditLog",requestFormat:"json",response:Wj},{method:"get",path:"/company/rbac/invites",alias:"getInviteList",requestFormat:"json",response:Nf},{method:"post",path:"/company/rbac/invites",alias:"postInvite",requestFormat:"json",parameters:[{name:"body",type:"Body",schema:Hj}],response:El},{method:"delete",path:"/company/rbac/invites/:inviteId",alias:"deleteInvite",requestFormat:"json",parameters:[{name:"inviteId",type:"Path",schema:k.number().int()}],response:k.object({}).partial().passthrough()},{method:"get",path:"/company/rbac/roles",alias:"getRoleList",description:`Path mirrors the company app&#x27;s RBAC_ROLES constant so the real tenant API drops in. The portal expects &#x60;permissions&#x60; (grant codes) and &#x60;memberCount&#x60; embedded per role — the delete guard reads memberCount, so no separate delete-check round-trip is needed at portal scale. Permission note: the portal calls this holding perm_role_ls, but ALSO holding only perm_asst_add / perm_asst_edt (the add-user and edit-user role selects need options) — the backend must let the read-list ride those write codes, or the selects render optionless for such grants.
`,requestFormat:"json",response:Of},{method:"post",path:"/company/rbac/roles",alias:"postRole",requestFormat:"json",parameters:[{name:"body",type:"Body",schema:nu}],response:Ds},{method:"put",path:"/company/rbac/roles/:roleId",alias:"putRole",requestFormat:"json",parameters:[{name:"body",type:"Body",schema:nu},{name:"roleId",type:"Path",schema:k.number().int()}],response:Ds},{method:"delete",path:"/company/rbac/roles/:roleId",alias:"deleteRole",requestFormat:"json",parameters:[{name:"roleId",type:"Path",schema:k.number().int()}],response:k.object({}).partial().passthrough()},{method:"get",path:"/company/salesOrder/:salesOrderId",alias:"getSalesOrder",requestFormat:"json",parameters:[{name:"salesOrderId",type:"Path",schema:k.string()}],response:k.object({salesOrderId:k.string(),salesOrderStatusId:k.number().int().optional(),sender:$s.optional(),recipient:$s.optional(),createDate:k.string().optional(),pickupDate:k.string().optional(),deliveryDate:k.string().optional(),comment:k.string().optional(),fleetUid:k.string().optional(),driverId:k.string().optional(),driver:k.string().optional(),timeZone:k.string().optional(),chatroomId:k.string().optional(),packages:k.array(Af).optional()}).passthrough()},{method:"get",path:"/company/salesOrderList",alias:"getSalesOrderList",requestFormat:"json",parameters:[{name:"page",type:"Query",schema:k.number().int()},{name:"limit",type:"Query",schema:k.number().int().optional()},{name:"salesOrderStatusId",type:"Query",schema:k.number().int().optional()},{name:"searchCol",type:"Query",schema:k.number().int().optional()},{name:"content",type:"Query",schema:k.string().optional()},{name:"sortCol",type:"Query",schema:k.number().int().optional()},{name:"sort",type:"Query",schema:k.boolean().optional()},{name:"scope",type:"Query",schema:k.enum(["own","sub","all"]).optional()}],response:Cf},{method:"post",path:"/company/verifyToken",alias:"postVerifyToken",requestFormat:"json",parameters:[{name:"body",type:"Body",schema:k.object({token:k.string()}).passthrough()}],response:Rf}]);new Mj(qj);function St(t,e){return n=>{const r=t.safeParse(n.data);if(r.success)return{...n,data:r.data};const i=o=>!o||typeof o!="object"?{type:typeof o}:{keys:Object.keys(o)},s={endpoint:e,issues:r.error.issues,received:i(n.data)};return console.error("[api drift]",s),n}}const Kj=t=>se.post(nt.VERIFY_TOKEN,t).then(St(kt.ApiVerifyTokenResponse,"postVerifyToken")).then(e=>(se.defaults.headers.common.Token=e.data.token,se.defaults.headers.common["X-Refresh-Token"]=e.data.refresh,e)),Gj=t=>se.get(nt.SALES_ORDER_LIST,{params:t}).then(St(kt.ApiSalesOrderListResponse,"getSalesOrderList")),Zj=t=>se.get(Ai(nt.SALES_ORDER,{salesOrderId:t})).then(St(kt.ApiSalesOrderDetail,"getSalesOrder")),Lf=()=>se.get(nt.RBAC_ROLES).then(St(kt.ApiRoleListResponse,"getRoleList")),Yj=t=>se.post(nt.RBAC_ROLES,t).then(St(kt.ApiRole,"postRole")),Jj=(t,e)=>se.put(Ai(nt.RBAC_ROLE,{roleId:String(t)}),e).then(St(kt.ApiRole,"putRole")),Xj=t=>se.delete(Ai(nt.RBAC_ROLE,{roleId:String(t)})),Qj=()=>se.get(nt.ASSISTANT).then(St(kt.ApiAssistantListResponse,"getAssistantList")),eT=t=>se.post(nt.ASSISTANT,t).then(St(kt.ApiAssistantUser,"postAssistant")),ru=t=>se.put(nt.ASSISTANT,t).then(St(kt.ApiAssistantUser,"putAssistant")),iu="Australia/Sydney";function tT(t){if(!t)return iu;try{return new Intl.DateTimeFormat("en-AU",{timeZone:t}).format(0),t}catch{return iu}}function _l(t,e,n){const r={};for(const i of new Intl.DateTimeFormat("en-AU",{timeZone:tT(e),...n}).formatToParts(t))r[i.type]=i.value;return r}const nT=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function vt(t,e,n=!1){const r=_l(new Date(t),e,{weekday:"short",day:"numeric",month:"numeric",year:"numeric"}),i=nT[Number(r.month)-1]??r.month;return`${r.weekday}, ${Number(r.day)} ${i}${n?` ${r.year}`:""}`}function Pi(t,e){const n=_l(new Date(t),e,{hour:"numeric",minute:"2-digit",hour12:!0});return`${n.hour}:${n.minute} ${(n.dayPeriod??"").toUpperCase()}`.trim()}function $f(t,e){const n=_l(t,e,{year:"numeric",month:"2-digit",day:"2-digit"});return`${n.year}-${n.month}-${n.day}`}function Bi(t,e=!1){return vt(`${t}T12:00:00.000Z`,"UTC",e)}function rT(t,e,n=new Date){const r=$f(n,e);if(t===r)return"today";const[i,s,o]=r.split("-").map(Number),l=new Date(Date.UTC(i,s-1,o+1)).toISOString().slice(0,10);return t===l?"tomorrow":null}function iT(t,e,n=new Date){const[r,i,s]=$f(n,e).split("-").map(Number),[o,l,c]=t.split("-").map(Number);return Math.round((Date.UTC(o,l-1,c)-Date.UTC(r,i-1,s))/864e5)}function Ni(t){return t?`${t.suburb}, ${t.state}`:null}function Df(t){return t?`${t.suburb} ${t.state} ${t.postcode}`.trim():null}const jl={public:"sg-track-lookup",consignee:"sg-track-delivery-lookup"},sT=["sendit-go.track.recentlyTracked.v1"];function Mf(t,e){try{sessionStorage.setItem(jl[t],e)}catch{}}function Ff(t){try{return sessionStorage.getItem(jl[t])}catch{return null}}function aT(t){try{sessionStorage.removeItem(jl[t])}catch{}}function oT(){try{for(const t of sT)localStorage.removeItem(t)}catch{}}const lT=["in_transit","delivered","completed"],cT=["delivered","completed"];function Ka(t,...e){for(const n of e){const r=t.travelHistory.find(i=>i.activity===n);if(r)return r.time}return null}function Ga(t){const e=t.travelHistory[t.travelHistory.length-1];return e?e.time:null}function dT(t){return t==="delivered"?"flag":t==="inTransit"?"truck":"box"}function su(t,e,n,r,i={}){return t.map((s,o)=>{const l=o<e?"done":o===e?"current":"future",c=l==="done"?"check":l==="current"&&n==="amber"?"truck":dT(s);return{key:s,labelKey:`tracking:guest.milestone.${l==="current"&&i[s]?i[s]:s}`,state:l,tone:l==="current"?n:"blue",icon:c,at:l==="future"?null:r[s]??null}})}const au=["orderCreated","pickedUp","inTransit","delivered"],ou=["preparing","inTransit","delivered"];function Tl(t,e){const{stage:n}=t;if(n==="cancelled")return null;const r=Ka(t,"order_created"),i=Ka(t,"picked_up"),s=Ka(t,"signed","completed","arrived"),o=cT.includes(n),l=lT.includes(n);if(e==="public"){const d=o?au.length:l?2:1;return su(au,d,d===2?"amber":"blue",{orderCreated:r,pickedUp:l||o?i:null,inTransit:o?i:Ga(t),delivered:s},{pickedUp:"awaitingPickup"})}const c=o?ou.length:l?1:0;return su(ou,c,c===1?"amber":"blue",{preparing:l||o?r:Ga(t),inTransit:o?i:Ga(t),delivered:s})}function Uf(t,e){const n=Tl(t,e);if(!n)return{labelKey:"tracking:guest.chip.cancelled",tone:"red"};const r=n.find(i=>i.state==="current");return r?{labelKey:r.labelKey,tone:r.tone}:{labelKey:"tracking:guest.milestone.delivered",tone:"blue"}}const uT=B`
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
`,hT=B`
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
`,je={blue:"#007FFF",primaryFill:"#003DF2",amber:"#EA8118",onPrimary:"#FFFFFF"},Bf=640,zf=f.div`
  ${uT}
  [data-theme='dark'] & {
    ${hT}
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
  @media (max-width: ${Bf}px) {
    ${t}
  }
`,vi=f.span`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  border: 0;
`,pT=f.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* the shared SiteNav is fixed: 16px + 41px CTA + 16px + 1px hairline */
  padding-top: 74px;
  @media (max-width: 720px) {
    padding-top: 69px;
  }
`,sa=f.div`
  width: 100%;
  max-width: calc(1288px + 2 * clamp(16px, 5.3vw, 76px));
  margin: 0 auto;
  padding: 0 clamp(16px, 5.3vw, 76px);
  ${le(B`
    padding: 0 16px;
  `)}
`,Il=({title:t,audience:e,children:n})=>{const{mode:r,toggleTheme:i}=zs();return S.useEffect(()=>{oT()},[]),a.jsxs(a.Fragment,{children:[a.jsx(Hs,{}),a.jsxs(sh,{children:[a.jsx("title",{children:t}),a.jsx("meta",{name:"robots",content:"noindex"})]}),a.jsxs(Wo,{children:[a.jsx(bl,{theme:r,onToggleTheme:i,audience:e}),a.jsx(pT,{children:a.jsx(zf,{children:n})}),a.jsx(na,{})]})]})},fT=f.section`
  background: var(--trk-band);
  /* white band on a white page: a hairline marks where the header ends */
  border-bottom: 1px solid var(--trk-border);
  padding: 28px 0 21px;
  ${le(B`
    padding: 20px 0 18px;
  `)}
`,mT=f.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding-left: 4px;
  ${le(B`
    gap: 8px;
    padding-left: 2px;
  `)}
`,gT=f(Fe)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: ${_};
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
    outline: 2px solid ${je.blue};
    outline-offset: 2px;
  }

  ${le(B`
    font-size: 12px;
    line-height: 15px;
    min-height: 44px;
    margin: -14px 0;
  `)}
`,xT=f.p`
  margin: 0;
  font-family: ${_};
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  /* #007FFF as 12px text on the band is 3.6:1; text uses the primary ink */
  color: var(--trk-link);
`,yT=f.h1`
  margin: 0;
  font-family: ${tt};
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
`,vT=f.p`
  margin: 0;
  font-family: ${_};
  font-size: 18px;
  line-height: 22px;
  color: var(--trk-muted);
  ${le(B`
    font-size: 13px;
    line-height: 17px;
    max-width: 340px;
  `)}
`,Rl=({title:t,subtitle:e,eyebrow:n,backTo:r,focusTitle:i})=>{const s=S.useRef(null);return S.useEffect(()=>{var o;i&&((o=s.current)==null||o.focus())},[i]),a.jsx(fT,{"data-testid":"track-title-band",children:a.jsx(sa,{children:a.jsxs(mT,{children:[r&&a.jsxs(gT,{to:r.to,children:[a.jsx(Ko,{"aria-hidden":"true"}),r.label]}),n&&a.jsx(xT,{children:n}),a.jsx(yT,{ref:s,tabIndex:i?-1:void 0,children:t}),a.jsx(vT,{children:e})]})})})},Cl=f.div`
  padding: 0 0 48px;
  ${le(B`
    padding: 16px 0 32px;
  `)}
`,aa=f.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${le(B`
    gap: 14px;
  `)}
`,At=f.section`
  background: var(--trk-card);
  border: 1px solid var(--trk-border);
  border-radius: 14px;
  padding: 22px 26px 27px;
  min-width: 0;
  ${le(B`
    border-radius: 12px;
    padding: 16px;
  `)}
`,Al=f.h2`
  margin: 0 0 18px;
  font-family: ${tt};
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
`,Ot=f.span`
  font-family: ${_};
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
`,bT={amber:B`
    background: var(--trk-chip-amber-bg);
    color: var(--trk-amber-ink);
    --dot: ${je.amber};
  `,blue:B`
    background: var(--trk-chip-blue-bg);
    color: var(--trk-blue-ink);
    --dot: ${je.blue};
  `,red:B`
    background: var(--trk-chip-red-bg);
    color: var(--trk-red-ink);
    --dot: var(--trk-red-ink);
  `},wT=f.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 999px;
  font-family: ${_};
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  white-space: nowrap;
  ${({$tone:t})=>bT[t]}

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
`,kT=({shipment:t,taxonomy:e})=>{const{t:n}=G(),r=Uf(t,e);return a.jsx(wT,{$tone:r.tone,"data-testid":"status-chip","data-tone":r.tone,children:n(r.labelKey)})},ST=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-height: 60px;
  ${le(B`
    min-height: 54px;
    align-items: flex-start;
  `)}
`,ET=f.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`,_T=f.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,jT=f.span`
  font-family: ${_};
  font-size: 30px;
  font-weight: 700;
  line-height: 36px;
  color: var(--trk-ink);
  letter-spacing: 0.01em;
  ${le(B`
    font-size: 20px;
    line-height: 24px;
  `)}
`,TT=f.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: ${je.blue};
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background: var(--trk-tint);
  }

  &:focus-visible {
    outline: 2px solid ${je.blue};
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
`,Hf=({shipment:t,taxonomy:e})=>{const{t:n}=G(),[r,i]=S.useState("idle"),s=async()=>{try{await navigator.clipboard.writeText(t.orderId),i("copied")}catch{i("failed")}window.setTimeout(()=>i("idle"),4e3)};return a.jsxs(ST,{children:[a.jsxs(ET,{children:[a.jsx(Ot,{children:n("tracking:guest.summary.trackingNumber")}),a.jsxs(_T,{children:[a.jsx(jT,{"data-testid":"tracking-number",children:t.orderId}),a.jsx(TT,{type:"button",onClick:s,"aria-label":n("tracking:guest.summary.copy"),children:r==="copied"?a.jsx(Vs,{"aria-hidden":"true"}):a.jsx(Fm,{"aria-hidden":"true"})}),a.jsx(vi,{role:"status","aria-live":"polite",children:r==="copied"?n("tracking:guest.summary.copied"):r==="failed"?n("tracking:guest.summary.copyFailed"):""})]})]}),a.jsx(kT,{shipment:t,taxonomy:e})]})},IT=f.div`
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
`,RT=f.span`
  align-self: center;
  width: 1px;
  height: 60px;
  background: var(--trk-border);
  ${le(B`
    display: none;
  `)}
`,lu=f.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;

  .value {
    font-family: ${_};
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    color: var(--trk-ink);
  }

  .sub {
    font-family: ${_};
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
            ${Ot} {
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
`;function CT(t){return t.travelHistory[t.travelHistory.length-1]??null}function AT(t){const e=t.travelHistory.find(n=>n.activity==="signed")??t.travelHistory.find(n=>n.activity==="completed")??t.travelHistory.find(n=>n.activity==="arrived");return(e==null?void 0:e.time)??null}function OT(t){var e,n;return((e=t.travelHistory.find(r=>r.activity==="cancelled"))==null?void 0:e.time)??((n=t.exceptions.find(r=>r.type==="cancelled"))==null?void 0:n.occurredAt)??null}function oa(t,e=new Date){const{t:n}=G(),r=t.timezone,i=Df(t.destination);if(t.stage==="delivered"||t.stage==="completed"){const u=AT(t);return{label:n("tracking:guest.eta.deliveredLabel"),value:u?`${vt(u,r)}, ${Pi(u,r)}`:n("tracking:guest.eta.deliveredLabel"),sub:[u?vt(u,r,!0):null,i].filter(Boolean).join(" · "),neutral:!1}}if(t.stage==="cancelled"){const u=OT(t);return{label:n("tracking:guest.eta.cancelledLabel"),value:u?vt(u,r,!0):n("tracking:guest.eta.cancelledLabel"),sub:n("tracking:guest.eta.cancelledNote"),neutral:!0}}const s=t.estimatedDelivery;if(!s)return{label:n("tracking:guest.eta.label"),value:n("tracking:guest.eta.toBeConfirmed"),sub:[n("tracking:guest.eta.toBeConfirmedNote"),i].filter(Boolean).join(" · "),neutral:!1};const o=iT(s.date,r,e);if(o<0)return{label:n("tracking:guest.eta.label"),value:n("tracking:guest.eta.toBeConfirmed"),sub:[n("tracking:guest.eta.previouslyExpected",{date:Bi(s.date,!0)}),i].filter(Boolean).join(" · "),neutral:!1};const l=rT(s.date,r,e),c=s.timeWindow??"",d=l?n(`tracking:guest.eta.${l}${c}`):c?n(`tracking:guest.eta.day${c}`,{day:Bi(s.date,o>7)}):Bi(s.date,o>7);return{label:n("tracking:guest.eta.label"),value:d,sub:[Bi(s.date,!0),i].filter(Boolean).join(" · "),neutral:!1}}const PT=({shipment:t,now:e})=>{const{t:n}=G(),r=oa(t,e),i=CT(t),s=t.timezone;return a.jsxs(IT,{"data-testid":"eta-panel",$neutral:r.neutral,children:[a.jsxs(lu,{$primary:!0,children:[a.jsx(Ot,{children:r.label}),a.jsx("span",{className:"value","data-testid":"eta-value",children:r.value}),r.sub&&a.jsx("span",{className:"sub",children:r.sub})]}),a.jsx(RT,{"aria-hidden":"true"}),a.jsxs(lu,{children:[a.jsx(Ot,{children:n("tracking:guest.latest.label")}),a.jsx("span",{className:"value","data-testid":"latest-value",children:n(i?`tracking:guest.activity.${i.activity}`:"tracking:guest.latest.none")}),i&&a.jsx("span",{className:"sub",children:[vt(i.time,s,!0),Pi(i.time,s),Ni(i.location)].filter(Boolean).join(" · ")})]})]})},NT=f.dl`
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
  ${le(B`
    gap: 0;
  `)}
`,LT=f.div`
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
    font-family: ${_};
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
`;function Vf(t){const{t:e}=G(),n=t.timezone,r=[];r.push(["trackingNumber",e("tracking:guest.details.trackingNumber"),t.orderId]),r.push(["shipDate",e("tracking:guest.details.shipDate"),t.shipDate?vt(t.shipDate,n,!0):t.stage==="cancelled"?"—":e("tracking:guest.details.notShipped")]),t.carrierName&&r.push(["carrier",e("tracking:guest.details.carrier"),t.carrierName]),r.push(["origin",e("tracking:guest.details.origin"),Ni(t.origin)??"—"]),r.push(["destination",e("tracking:guest.details.destination"),Df(t.destination)??"—"]);const i=e("tracking:guest.details.packageCount",{count:t.packages.current}),s=t.packages.affected>0?` · ${e("tracking:guest.details.affected",{count:t.packages.affected})}`:"";return r.push(["packages",e("tracking:guest.details.packages"),`${i}${s}`]),t.proofType&&r.push(["proof",e("tracking:guest.details.proof"),e(`tracking:guest.details.proofType.${t.proofType}`)]),r}const $T=({shipment:t})=>{const{t:e}=G(),n=Vf(t);return a.jsxs(At,{"data-testid":"details-card","aria-labelledby":"trk-details-title",children:[a.jsx(Al,{id:"trk-details-title",children:e("tracking:guest.details.title")}),a.jsx(NT,{children:n.map(([r,i,s])=>a.jsxs(LT,{"data-row":r,children:[a.jsx("dt",{children:a.jsx(Ot,{children:i})}),a.jsx("dd",{children:s})]},r))})]})},DT=f.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 12px;
  /* header lands 12px under the 47px title, as in 567:894 */
  margin: -18px 0 -12px;
  table-layout: fixed;
  font-family: ${_};

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
`,MT=f.ol`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  font-family: ${_};

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
`,FT=f.div`
  display: none;
  ${le(B`
    display: block;
  `)}
`,Wf=({shipment:t,testId:e})=>{const{t:n}=G(),r=t.timezone,i=[...t.travelHistory].reverse();return a.jsx(MT,{"data-testid":e,children:i.map((s,o)=>a.jsxs("li",{children:[a.jsx("span",{className:"what",children:n(`tracking:guest.activity.${s.activity}`)}),a.jsx("span",{className:"when",children:[vt(s.time,r),Pi(s.time,r),Ni(s.location)].filter(Boolean).join(" · ")})]},`${s.time}-${s.activity}-${o}`))})},UT=f.p`
  margin: 0;
  font-family: ${_};
  font-size: 14px;
  color: var(--trk-muted);
`,BT=({shipment:t})=>{const{t:e}=G(),n=t.timezone,r=[...t.travelHistory].reverse();return a.jsxs(At,{"data-testid":"history-card","aria-labelledby":"trk-history-title",children:[a.jsx(Al,{id:"trk-history-title",children:e("tracking:guest.history.title")}),r.length===0?a.jsx(UT,{children:e("tracking:guest.history.empty")}):a.jsxs(a.Fragment,{children:[a.jsxs(DT,{"data-testid":"history-table",children:[a.jsxs("colgroup",{children:[a.jsx("col",{className:"when"}),a.jsx("col",{className:"what"}),a.jsx("col",{className:"where"})]}),a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{scope:"col",children:e("tracking:guest.history.date")}),a.jsx("th",{scope:"col",children:e("tracking:guest.history.activity")}),a.jsx("th",{scope:"col",children:e("tracking:guest.history.location")})]})}),a.jsx("tbody",{children:r.map((i,s)=>a.jsxs("tr",{className:s===0?"latest":void 0,children:[a.jsxs("td",{className:"when",children:[vt(i.time,n,!0),a.jsx("br",{}),Pi(i.time,n)]}),a.jsx("td",{className:"what",children:e(`tracking:guest.activity.${i.activity}`)}),a.jsx("td",{className:"where",children:Ni(i.location)??"—"})]},`${i.time}-${i.activity}-${s}`))})]}),a.jsx(FT,{children:a.jsx(Wf,{shipment:t,testId:"history-list"})})]})]})},zT=f.h2`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 10px;
  font-family: ${_};
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: var(--trk-ink);

  svg {
    width: 20px;
    height: 20px;
    color: ${je.amber};
    flex-shrink: 0;
  }
`,HT=f.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-family: ${_};
  font-size: 14px;
  line-height: 1.45;
  color: var(--trk-ink);

  .when {
    color: var(--trk-muted);
    font-size: 13px;
  }
`;function qf(t){return`mailto:${xe.supportEmail}?subject=${encodeURIComponent(t)}`}const la=f.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 46px;
  padding: 0 18px;
  border-radius: 8px;
  border: 1px solid var(--trk-border);
  background: var(--trk-card);
  font-family: ${_};
  font-size: 14px;
  font-weight: 600;
  color: var(--trk-ink);
  text-decoration: none;
  cursor: pointer;

  &:hover {
    border-color: ${je.blue};
  }

  &:focus-visible {
    outline: 2px solid ${je.blue};
    outline-offset: 2px;
  }
`,VT=f.div`
  margin-top: 12px;
`,Kf=({shipment:t,showContact:e=!0})=>{const{t:n}=G(),r=t.exceptions.filter(s=>s.type!=="cancelled"||t.stage!=="cancelled");if(r.length===0)return null;const i=t.timezone;return a.jsxs(At,{"data-testid":"exceptions-card","aria-labelledby":"trk-exceptions-title",role:"region",children:[a.jsxs(zT,{id:"trk-exceptions-title",children:[a.jsx(Go,{"aria-hidden":"true"}),n("tracking:guest.exceptions.title")]}),a.jsx(HT,{children:r.map((s,o)=>a.jsxs("li",{children:[n(`tracking:guest.exceptions.${s.type}`,{count:s.count??1})," ",s.occurredAt&&a.jsx("span",{className:"when",children:vt(s.occurredAt,i,!0)})]},`${s.type}-${o}`))}),e&&a.jsx(VT,{children:a.jsx(la,{href:qf(`Delivery update — ${t.orderId}`),children:n("tracking:guest.exceptions.contact")})})]})},WT=f.form`
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
    border-color: ${je.blue};
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
`,qT=f.input`
  flex: 1;
  min-width: 0;
  height: 46px;
  border: 0;
  outline: none;
  background: transparent;
  font-family: ${_};
  font-size: 17px;
  color: var(--trk-ink);
  text-transform: uppercase;

  &::placeholder {
    text-transform: none;
    color: var(--trk-muted);
  }
`,KT=Zu`
  to {
    transform: rotate(360deg);
  }
`,GT=f.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.35);
  border-top-color: #ffffff;
  animation: ${KT} 0.8s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    border-color: #ffffff;
  }
`,ZT=f.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 48px;
  min-width: 144px;
  padding: 0 22px;
  border: 0;
  border-radius: 8px;
  background: ${je.primaryFill};
  color: ${je.onPrimary};
  font-family: ${tt};
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
    outline: 2px solid ${je.blue};
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
`,YT=f.p`
  margin: 8px 0 0;
  font-family: ${_};
  font-size: 13px;
  line-height: 1.4;
  color: ${({$tone:t})=>t==="error"?"var(--trk-red-ink)":t==="notice"?"var(--trk-ink)":"var(--trk-muted)"};
  font-weight: ${({$tone:t})=>t==="notice"?600:400};
`;function Gf(t,e){return!t||t.kind==="ok"?null:{tone:t.kind==="format"||t.kind==="notFound"?"error":"notice",text:e(`tracking:guest.error.${t.kind}`)}}const Zf=({value:t,onChange:e,onSubmit:n,busy:r,message:i})=>{const{t:s}=G(),o=(i==null?void 0:i.tone)??"hint";return a.jsxs("div",{children:[a.jsxs(WT,{role:"search",noValidate:!0,onSubmit:l=>{l.preventDefault(),!r&&n()},children:[a.jsx(Hm,{"aria-hidden":"true"}),a.jsx(qT,{id:"trk-order-id",name:"orderId",value:t,onChange:l=>e(l.target.value),placeholder:s("tracking:guest.entry.placeholder"),"aria-label":s("tracking:guest.entry.inputLabel"),"aria-describedby":"trk-order-id-hint","aria-invalid":o==="error"?!0:void 0,autoComplete:"off",autoCapitalize:"characters",spellCheck:!1,maxLength:32}),a.jsxs(ZT,{type:"submit","aria-disabled":r||void 0,"aria-busy":r||void 0,children:[r&&a.jsx(GT,{"aria-hidden":"true"}),s(r?"tracking:guest.entry.submitBusy":"tracking:guest.entry.submit")]})]}),a.jsx(YT,{id:"trk-order-id-hint",role:i?"alert":void 0,$tone:o,children:(i==null?void 0:i.text)??s("tracking:guest.entry.hint")}),a.jsx(vi,{role:"status","aria-live":"polite",children:r?s("tracking:guest.entry.busyStatus"):""})]})},zi=f.span`
  display: block;
  width: ${({$w:t})=>t};
  height: ${({$h:t})=>t??14}px;
  border-radius: 6px;
  background: var(--trk-rail-future);
`,JT=f(At)`
  display: flex;
  flex-direction: column;
  gap: 18px;
`,Yf=()=>{const{t}=G();return a.jsxs(JT,{"aria-busy":"true","aria-label":t("tracking:guest.error.loading"),"data-testid":"result-loading",children:[a.jsx(zi,{$w:"140px",$h:11}),a.jsx(zi,{$w:"260px",$h:30}),a.jsx(zi,{$w:"100%",$h:16}),a.jsx(zi,{$w:"100%",$h:72})]})},XT=f.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  font-family: ${_};
  font-size: 15px;
  line-height: 1.5;
  color: var(--trk-ink);

  p {
    margin: 0;
  }
`,QT=({text:t,onRetry:e,testId:n,children:r})=>{const{t:i}=G();return a.jsx(At,{"data-testid":n,role:"alert",children:a.jsxs(XT,{children:[a.jsx("p",{children:t}),e&&a.jsxs(la,{as:"button",type:"button",onClick:e,children:[a.jsx(Yu,{"aria-hidden":"true",width:16,height:16}),i("tracking:guest.error.retry")]}),r]})})},Za=k.tuple([k.number().min(-180).max(180),k.number().min(-90).max(90)]),Ya=k.string().datetime({offset:!0}),e2=["not_next_stop","verification_required","gps_unavailable","driver_offline","trip_completed","expired","resequenced"];k.object({eligible:k.literal(!1),reason:k.enum(e2)}).strict();k.object({eligible:k.literal(!0),expiresAt:Ya,driver:k.object({position:Za,capturedAt:Ya,heading:k.number().min(0).max(360).nullable().optional()}).strict(),destination:k.object({position:Za}).strict(),approach:k.object({coordinates:k.array(Za).min(2).max(1e3),source:k.string().min(1)}).strict().nullable().optional(),eta:k.object({minutes:k.number().int().min(0).max(240),computedAt:Ya}).strict().nullable().optional(),driverDisplay:k.object({initials:k.string().regex(/^[A-Z]{1,2}$/)}).strict().nullable().optional()}).strict();const t2=async()=>({kind:"unsupported"}),n2=120*1e3;function Jf(t,e){return e-Date.parse(t.driver.capturedAt)>n2}function r2(t,e){return e>=Date.parse(t.expiresAt)}const cu=30*1e3,i2=60*1e3,s2=15*1e3,a2=2**31-1,o2=2;async function l2(){return t2}const du=()=>({wasEligible:!1,freshStreak:0,recovering:!1,staleData:null});function c2(t,e,n){switch(t.kind){case"unsupported":return{view:{status:"off"},keepPolling:!1};case"not_eligible":switch(t.reason){case"gps_unavailable":case"driver_offline":return n.wasEligible=!0,n.freshStreak=0,{view:{status:"unavailable",reason:t.reason},keepPolling:!0};case"expired":case"resequenced":return n.wasEligible?{view:{status:"ended",reason:t.reason},keepPolling:!0}:{view:{status:"off"},keepPolling:!0};case"trip_completed":return{view:{status:"off"},keepPolling:!1};default:return{view:{status:"off"},keepPolling:!0}}case"eligible":return n.wasEligible=!0,r2(t.data,e)?{view:{status:"ended",reason:"expired"},keepPolling:!0}:Jf(t.data,e)?(n.freshStreak=0,n.recovering=!0,n.staleData=t.data,{view:{status:"stale",data:t.data},keepPolling:!0}):(n.freshStreak+=1,n.recovering&&n.freshStreak<o2?{view:{status:"stale",data:n.staleData??t.data},keepPolling:!0}:(n.recovering=!1,n.staleData=null,{view:{status:"live",data:t.data},keepPolling:!0}));case"refused":return{view:n.wasEligible?{status:"error",reason:"refused"}:{status:"off"},keepPolling:!1};case"rate_limited":return{view:n.wasEligible?{status:"rate_limited",retryAfter:e+i2}:{status:"off"},keepPolling:!1};default:return{view:n.wasEligible?{status:"error",reason:"failed"}:{status:"off"},keepPolling:!1}}}function d2({enabled:t,orderId:e,stage:n,accessToken:r,source:i}){const[s,o]=S.useState({status:"off"}),[l,c]=S.useState(0),d=S.useRef(s);d.current=s;const u=S.useRef(du()),h=t&&n==="in_transit";S.useEffect(()=>{u.current=du()},[h,e,r]);const p=`${h}|${e}|${r??""}`,m=S.useRef(p);S.useEffect(()=>{if(m.current!==p&&(m.current=p,o({status:"off"})),!h){o({status:"off"});return}let y=!0,v,j;const E=R=>{o(R)},w=R=>{if(j&&clearTimeout(j),R.status!=="live"&&R.status!=="stale")return;const $=Date.parse(R.data.expiresAt)-Date.now();j=setTimeout(()=>{y&&E({status:"ended",reason:"expired"})},Math.min(Math.max(0,$),a2))},b=async()=>{if(typeof document<"u"&&document.hidden){v=setTimeout(b,cu);return}let R;try{R=await(i??await l2())({orderId:e,accessToken:r})}catch{R={kind:"error"}}if(!y)return;const{view:$,keepPolling:N}=c2(R,Date.now(),u.current);E($),w($),N&&(v=setTimeout(b,cu))};b();const I=setInterval(()=>{const R=d.current;R.status==="live"&&Jf(R.data,Date.now())&&(u.current.freshStreak=0,u.current.recovering=!0,u.current.staleData=R.data,E({status:"stale",data:R.data}))},s2);return()=>{y=!1,v&&clearTimeout(v),j&&clearTimeout(j),clearInterval(I)}},[h,e,r,i,l,p]);const x=S.useCallback(()=>c(y=>y+1),[]);return{view:m.current===p?s:{status:"off"},retry:x}}const u2=S.lazy(()=>rg(()=>import("./NextStopMapCanvas-BDiCcoZs.js"),__vite__mapDeps([0,1,2,3,4]))),h2=f.div`
  display: grid;
  gap: 16px;
  grid-template-columns: minmax(0, 1fr);
  ${({$wide:t})=>t&&B`
      @media (min-width: 900px) {
        grid-template-columns: minmax(0, 360fr) minmax(0, 808fr);
        align-items: stretch;
      }
    `}
`,uu=f.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
`,p2=f(Ot)`
  color: var(--trk-link);
`,f2=f.p`
  margin: 0;
  font-family: ${_};
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  color: var(--trk-ink);
`,hu=f.p`
  margin: 0;
  font-family: ${_};
  font-size: 13px;
  line-height: 18px;
  color: var(--trk-muted);
`,pu=f.p`
  margin: 0;
  font-family: ${_};
  font-size: 15px;
  line-height: 21px;
  color: var(--trk-ink);
`;f.p`
  align-self: flex-start;
  margin: 4px 0 0;
  padding: 3px 10px;
  border-radius: 999px;
  border: 1px dashed var(--trk-border);
  font-family: ${_};
  font-size: 12px;
  font-weight: 600;
  color: var(--trk-muted);
`;const m2=f.div`
  height: ${({$wide:t})=>t?"342px":"300px"};
  ${le(B`
    height: 220px;
  `)}
`,g2=f.div`
  height: 100%;
  border-radius: 12px;
  border: 1px solid var(--trk-border);
  background: var(--trk-section);
`,x2=f.button`
  align-self: flex-start;
  min-height: 36px;
  padding: 6px 14px;
  border: 1px solid var(--trk-border);
  border-radius: 8px;
  background: var(--trk-card);
  color: var(--trk-ink);
  font-family: ${_};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  &:focus-visible {
    outline: 2px solid ${je.blue};
    outline-offset: 2px;
  }
  @media (pointer: coarse) {
    min-height: 44px;
  }
`;class y2 extends W.Component{constructor(){super(...arguments);ft(this,"state",{failed:!1})}static getDerivedStateFromError(){return{failed:!0}}render(){return this.state.failed?this.props.fallback:this.props.children}}function v2(t,e){const[n,r]=S.useState(()=>Date.now());return S.useEffect(()=>{if(!e)return;r(Date.now());const i=setInterval(()=>r(Date.now()),t);return()=>clearInterval(i)},[t,e]),n}function Ja(t,e){return Math.max(0,Math.round((e-Date.parse(t))/6e4))}const Ol=({enabled:t,shipment:e,audience:n,layout:r,accessToken:i,source:s})=>{const{t:o}=G(),{view:l,retry:c}=d2({enabled:t,orderId:e.orderId,stage:e.stage,accessToken:i,source:s}),d=v2(15*1e3,l.status!=="off"),u=!1,h=w=>`tracking:guest.nextStop.${n}.${w}`,p=w=>{switch(w.status){case"live":return w.data.eta?o("tracking:guest.nextStop.etaMinutes",{count:w.data.eta.minutes}):o("tracking:guest.nextStop.etaSoon");case"stale":return o("tracking:guest.nextStop.stale",{count:Math.max(1,Ja(w.data.driver.capturedAt,d))});case"unavailable":return o("tracking:guest.nextStop.unavailable");case"ended":return o("tracking:guest.nextStop.ended");case"error":return o(w.reason==="refused"?"tracking:guest.nextStop.errorRefused":"tracking:guest.nextStop.errorFailed");case"rate_limited":return o("tracking:guest.nextStop.rateLimited");default:return""}},[m,x]=S.useState(""),y=S.useRef("off");if(S.useEffect(()=>{l.status!==y.current&&(y.current=l.status,x(l.status==="off"?"":p(l)))},[l]),l.status==="off")return null;if(l.status==="ended"||l.status==="error"||l.status==="rate_limited"){const w=l.status==="error"||l.status==="rate_limited"&&d>=l.retryAfter;return a.jsxs(At,{"data-testid":"next-stop-card","data-state":l.status,"aria-label":o("tracking:guest.nextStop.liveLocation"),children:[a.jsx(vi,{role:"status","aria-live":"polite",children:m}),a.jsxs(uu,{children:[a.jsx(Ot,{children:o("tracking:guest.nextStop.liveLocation")}),a.jsx(pu,{"data-testid":"next-stop-message",children:p(l)}),w&&a.jsx(x2,{type:"button",onClick:c,children:o("tracking:guest.nextStop.retry")})]})]})}const v=l.status==="live",j=r==="wide"&&v,E=a.jsx(hu,{"data-testid":"next-stop-map-unavailable",children:o(h("mapUnavailable"))});return a.jsxs(At,{"data-testid":"next-stop-card","data-state":l.status,"aria-labelledby":"trk-next-stop-title",children:[a.jsx(vi,{role:"status","aria-live":"polite",children:m}),a.jsxs(h2,{$wide:j,children:[a.jsxs(uu,{children:[a.jsx(p2,{children:o(h(v?"eyebrowLive":"eyebrowNext"))}),a.jsx(Al,{id:"trk-next-stop-title",children:o(h("title"))}),l.status==="live"?a.jsxs(a.Fragment,{children:[a.jsx(f2,{"data-testid":"next-stop-eta",children:p(l)}),a.jsx(hu,{children:Ja(l.data.driver.capturedAt,d)===0?o("tracking:guest.nextStop.updatedNow"):o("tracking:guest.nextStop.updated",{count:Ja(l.data.driver.capturedAt,d)})})]}):a.jsx(pu,{"data-testid":"next-stop-message",children:p(l)}),u]}),v&&a.jsx(y2,{fallback:E,children:a.jsx(m2,{$wide:r==="wide",children:a.jsx(S.Suspense,{fallback:a.jsx(g2,{"aria-hidden":"true"}),children:a.jsx(u2,{data:l.data,title:o(h("mapRegion"))})})})})]})]})},b2={1:"neutral",2:"neutral",3:"active",4:"active",5:"active",6:"active",7:"active",8:"active",9:"danger",10:"done",11:"done",12:"warning",13:"done",14:"danger",15:"done",16:"danger"},w2=f.span`
  display: inline-block;
  max-width: 100%;
  padding: 3px 8px;
  border: none;
  border-radius: var(--v29-radius-tag);
  font-family: ${_};
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: middle;

  ${({$tone:t})=>{switch(t){case"active":return"color: var(--v29-primary); background: color-mix(in srgb, var(--v29-primary) 10%, transparent);";case"done":return"color: var(--v29-on-primary); background: var(--v29-primary);";case"warning":return"color: var(--v29-warning); background: var(--v29-warning-bg);";case"danger":return"color: var(--v29-danger); background: var(--v29-danger-bg);";default:return"color: var(--v29-muted); background: var(--v29-line-soft);"}}}
`,Xf=t=>b2[t]??"neutral",Fs=({statusId:t})=>{const{t:e}=G();return a.jsx(w2,{$tone:Xf(t),children:e(`salesOrderStatusId:${t}`,String(t))})},ca=["orderCreated","scheduled","readyForPickup","inTransit","delivered","completed"],k2={1:0,2:1,3:2,4:3,5:3,6:3,7:3,8:3,9:0,10:4,11:4,12:5,13:5,14:0,15:5,16:0};function S2(t,e){return t==="cancelled"?"tracking:headline.cancelled":t==="exception"?"tracking:headline.exception":`tracking:headline.${ca[e]??"inTransit"}`}function Qf(t){const e=Xf(t),n=e==="danger"?"cancelled":e==="warning"?"exception":"normal",r=k2[t]??0;return{stepIndex:r,variant:n,showStepper:n!=="cancelled",headlineKey:S2(n,r)}}const E2=new Intl.DateTimeFormat("en-AU",{weekday:"long",day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});function _2(t){const e=new Date(`${t}T00:00:00Z`);return Number.isNaN(e.getTime())?t:E2.format(e)}const fu=f.div`
  margin: 0 0 16px;
`,j2=f.img`
  display: block;
  width: 100%;
  max-width: 320px;
  height: auto;
  border-radius: 8px;
  border: 1px solid var(--v29-line-soft);
`,T2=f.div`
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
  font-family: ${_};
  font-size: 13px;
  text-align: center;
`,I2=({pod:t})=>{const{t:e}=G(),[n,r]=S.useState(!1);return t?a.jsx(oe,{children:a.jsxs(ye,{children:[a.jsx(Le,{children:e("tracking:pod.title","Proof of Delivery")}),t.photoUrl&&!n&&a.jsx(fu,{children:a.jsx(j2,{src:t.photoUrl,alt:e("tracking:pod.photoAlt"),onError:()=>r(!0)})}),t.photoUrl&&n&&a.jsx(fu,{children:a.jsx(T2,{children:e("tracking:pod.photoUnavailable")})}),a.jsxs(ra,{children:[a.jsxs("div",{children:[a.jsx("dt",{children:e("tracking:activity.deliveredSigned")}),a.jsx("dd",{children:_2(t.deliveredAt)})]}),t.signedByInitial&&a.jsxs("div",{children:[a.jsx("dt",{children:e("tracking:pod.signedBy","Signed By")}),a.jsx("dd",{children:t.signedByInitial})]})]})]})}):null},R2=f.ul`
  display: grid;
  gap: 12px;
  margin: 14px 0 0;
  padding: 0;
  list-style: none;
`,C2=f.li`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  padding: 14px 16px;
  border-radius: 8px;
  border-left: 3px solid var(--v29-warning);
  background: var(--v29-warning-bg);
`,A2=f.p`
  margin: 0;
  flex: 1 1 260px;
  font-family: ${_};
  font-size: 14px;
  line-height: 1.5;
  color: var(--v29-text);
`,O2=f(we)`
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
`,P2=f(Le)`
  color: var(--v29-warning);

  svg {
    color: var(--v29-warning);
  }
`,mu="tracking-exceptions-title",N2=({items:t})=>{const{t:e}=G();return t.length===0?null:a.jsx(oe,{"aria-labelledby":mu,children:a.jsxs(ye,{children:[a.jsxs(P2,{id:mu,children:[a.jsx(Go,{"aria-hidden":"true"}),e("tracking:exception.badgeLabel",{count:t.length})]}),a.jsx(R2,{children:t.map((n,r)=>a.jsxs(C2,{children:[a.jsx(A2,{children:e(`tracking:exception.${n.subReasonKey}.reason`)}),n.supportHref&&a.jsx(O2,{as:"a",href:n.supportHref,children:e("tracking:help.contactSupport")})]},`${n.subReasonKey}-${r}`))})]})})};function L2(t,e){return t<e?"done":t===e&&e<ca.length-1?"current":t===e?"done":"future"}const $2=f.ol`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 2px;
  margin: 0;
  padding: 0;
  list-style: none;
  container-type: inline-size;
`,D2=f.li`
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
`,M2=f.span`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  font-family: ${_};
  font-size: 11px;
  font-weight: 700;
  box-sizing: border-box;

  ${({$state:t})=>{switch(t){case"done":return"background: var(--v29-primary); color: var(--v29-on-primary); border: 2px solid var(--v29-primary);";case"current":return"background: var(--v29-warning-bg); color: var(--v29-warning); border: 2px solid var(--v29-warning);";default:return"background: var(--v29-line-soft); color: var(--v29-muted); border: 2px solid transparent;"}}}
`,F2=f.span`
  font-family: ${_};
  font-size: 11px;
  line-height: 1.3;
  width: 100%;
  overflow-wrap: anywhere;
  color: ${({$state:t})=>t==="future"?"var(--v29-muted)":"var(--v29-text)"};
  font-weight: ${({$state:t})=>t==="current"?700:500};

  @container (max-width: 340px) {
    ${({$compactVisible:t})=>t?"width: max-content;":`
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip-path: inset(50%);
    `}
  }
`,U2=({step:t})=>{const{t:e}=G();return t.showStepper?a.jsx($2,{children:ca.map((n,r)=>{const i=L2(r,t.stepIndex);return a.jsxs(D2,{$state:i,"aria-current":i==="current"?"step":void 0,children:[a.jsx(M2,{$state:i,"aria-hidden":"true",children:i==="future"?r+1:a.jsx(Vs,{size:13,strokeWidth:3})}),a.jsx(F2,{$state:i,$compactVisible:r===t.stepIndex,children:e(`tracking:step.${n}`)})]},n)})}):null},B2=f.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
`,z2=f.span`
  display: block;
  font-family: ${_};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--v29-muted);
`,H2=f.span`
  display: block;
  margin-top: 4px;
  font-family: ${_};
  font-size: 20px;
  font-weight: 700;
  color: var(--v29-text);
  word-break: break-word;
`,V2=f.p`
  margin: 12px 0 0;
  font-family: ${_};
  font-size: 15px;
  line-height: 1.5;
  color: var(--v29-text);
`,gu=f.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin: 12px 0 0;
  padding: 14px 16px;
  border-radius: 8px;
  border-left: 3px solid
    ${({$tone:t})=>t==="danger"?"var(--v29-danger)":"var(--v29-warning)"};
  background: ${({$tone:t})=>t==="danger"?"var(--v29-danger-bg)":"var(--v29-warning-bg)"};
  font-family: ${_};
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
`,W2=f(Xe)`
  margin-top: 6px;
`,q2=f.div`
  margin-top: 14px;
`,K2=f.div`
  margin-top: 18px;
`,G2=new Intl.DateTimeFormat("en-AU",{day:"numeric",month:"short",year:"numeric"});function Z2(t){const e=new Date(t);return Number.isNaN(e.getTime())?t:G2.format(e)}const Y2=({salesOrderId:t,statusId:e,eta:n,latestEvent:r})=>{const{t:i}=G(),s=e!=null?Qf(e):void 0;return a.jsx(oe,{children:a.jsxs(ye,{children:[a.jsxs(B2,{children:[a.jsxs("div",{children:[a.jsx(z2,{children:i("portal:orders.colOrderId")}),a.jsx(H2,{children:t})]}),e!=null&&a.jsx(Fs,{statusId:e})]}),s&&(s.variant==="cancelled"?a.jsxs(gu,{$tone:"danger",role:"alert",children:[a.jsx(Km,{"aria-hidden":"true"}),a.jsx("span",{children:i(s.headlineKey)})]}):s.variant==="exception"?a.jsxs(gu,{$tone:"warning",role:"status",children:[a.jsx(Go,{"aria-hidden":"true"}),a.jsx("span",{children:i(s.headlineKey)})]}):a.jsx(V2,{children:i(s.headlineKey)})),r&&a.jsxs(W2,{children:[i(r.activityKey)," · ",Z2(r.date)," ·"," ",r.locationLabel]}),n&&a.jsx(q2,{children:a.jsx(ra,{children:a.jsxs("div",{children:[a.jsx("dt",{children:i("tracking:facts.estimatedDelivery")}),a.jsx("dd",{children:n.window?`${n.dateLabel} (${n.window})`:n.dateLabel})]})})}),s&&a.jsx(K2,{children:a.jsx(U2,{step:s})})]})})},xu=3,yu=new Intl.DateTimeFormat("en-AU",{weekday:"long",day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}),J2=new Intl.DateTimeFormat("en-AU",{weekday:"short",day:"numeric",month:"short",timeZone:"UTC"});function Xa(t,e){const n=new Date(`${t}T00:00:00Z`);return Number.isNaN(n.getTime())?t:e.format(n)}function X2(t){return[...t].sort((e,n)=>e.date===n.date?0:e.date>n.date?-1:1)}function Q2(t){const e=[];return t.forEach(n=>{const r=e[e.length-1];r&&r.date===n.date?r.events.push(n):e.push({date:n.date,events:[n]})}),e}const eI=f.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0 0 18px;
`,tI=f.span`
  font-family: ${_};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--v29-muted);
`,nI=f.span`
  font-family: ${_};
  font-size: 14px;
  color: var(--v29-text);
`,rI=f(Fn)`
  @media (max-width: 640px) {
    display: none;
  }
`,iI=f(Un)`
  min-width: 560px;
`,sI=f.span`
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`,vu=f.span`
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--v29-primary) 12%, transparent);
  color: var(--v29-primary);
  font-family: ${_};
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;
`,aI=f.div`
  display: none;

  @media (max-width: 640px) {
    display: grid;
    gap: 4px;
  }
`,oI=f.p`
  margin: 14px 0 4px;
  padding: 8px 2px 4px;
  font-family: ${_};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--v29-muted);
  border-bottom: 1px solid var(--v29-line-soft);

  &:first-child {
    margin-top: 0;
  }
`,lI=f.div`
  display: grid;
  gap: 4px;
  padding: 10px 2px;
  border-bottom: 1px solid var(--v29-line-soft);
  font-family: ${_};

  &:last-child {
    border-bottom: none;
  }
`,cI=f.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  color: var(--v29-text);
  font-size: 14px;
  font-weight: 600;
`,dI=f.p`
  margin: 0;
  color: var(--v29-muted);
  font-size: 13px;
`,uI=f.div`
  margin-top: 16px;
`,hI=({events:t,eta:e})=>{const{t:n}=G(),[r,i]=S.useState(!1),s=S.useMemo(()=>X2(t??[]),[t]),o=s.length>xu,l=r?s:s.slice(0,xu),c=S.useMemo(()=>Q2(l),[l]);return s.length===0&&!e?null:a.jsx(oe,{children:a.jsxs(ye,{children:[a.jsx(Le,{children:n("tracking:timeline.title","Shipment History")}),e&&a.jsxs(eI,{children:[a.jsx(tI,{children:n("tracking:facts.estimatedDelivery")}),a.jsxs(nI,{children:[e.dateLabel,e.window?` · ${e.window}`:""]})]}),s.length>0&&a.jsxs(a.Fragment,{children:[a.jsx(rI,{children:a.jsxs(iI,{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{scope:"col",children:n("tracking:timeline.colTime","Time")}),a.jsx("th",{scope:"col",children:n("tracking:timeline.colActivity","Activity")}),a.jsx("th",{scope:"col",children:n("tracking:timeline.colLocation","Location")})]})}),a.jsx("tbody",{children:c.map((d,u)=>a.jsxs(W.Fragment,{children:[a.jsx("tr",{children:a.jsx("th",{colSpan:3,children:Xa(d.date,yu)})}),d.events.map((h,p)=>{const m=u===0&&p===0;return a.jsxs("tr",{children:[a.jsx("td",{children:Xa(h.date,J2)}),a.jsx("td",{children:a.jsxs(sI,{children:[n(h.activityKey),m&&a.jsx(vu,{children:n("tracking:timeline.latest","Latest")})]})}),a.jsx("td",{children:h.locationLabel})]},`${h.date}-${h.activityKey}-${p}`)})]},d.date))})]})}),a.jsx(aI,{children:c.map((d,u)=>a.jsxs(W.Fragment,{children:[a.jsx(oI,{children:Xa(d.date,yu)}),d.events.map((h,p)=>{const m=u===0&&p===0;return a.jsxs(lI,{children:[a.jsxs(cI,{children:[n(h.activityKey),m&&a.jsx(vu,{children:n("tracking:timeline.latest","Latest")})]}),a.jsx(dI,{children:h.locationLabel})]},`${h.date}-${h.activityKey}-${p}`)})]},d.date))}),o&&a.jsx(uI,{children:a.jsx(we,{type:"button","aria-expanded":r,onClick:()=>i(d=>!d),children:r?a.jsxs(a.Fragment,{children:[a.jsx(Mm,{"aria-hidden":"true"}),n("tracking:timeline.showLess","Show Less")]}):a.jsxs(a.Fragment,{children:[a.jsx(Dm,{"aria-hidden":"true"}),n("tracking:timeline.viewFullHistory","View Full History")]})})})]})]})})},pI=f.div`
  display: grid;
  gap: 18px;
`,fI=f.div`
  overflow-x: auto;
`,mI=f.div`
  margin-top: 14px;
`,bu=new Intl.NumberFormat("en-AU",{style:"currency",currency:"AUD"});function gI(t){return t.destinationStreet??t.destinationSuburbStatePostcode}const xI=({projection:t,level:e,onRequestTier2:n,eta:r,timeline:i,pod:s,exceptions:o})=>{const{t:l}=G(),c=t.salesOrderStatusId,d=gI(t),u=t.packages??[],h=!!(t.shipperName||t.recipientName),p=u.some(y=>y.weightKg!=null),m=u.some(y=>y.pricing!=null),x=u.some(y=>y.salesOrderStatusId!=null);return a.jsxs(pI,{children:[a.jsx(Y2,{salesOrderId:t.salesOrderId,statusId:c,eta:r}),o&&a.jsx(N2,{items:o}),a.jsx(oe,{children:a.jsx(ye,{children:a.jsxs(ra,{children:[t.shipDate&&a.jsxs("div",{children:[a.jsx("dt",{children:l("tracking:facts.shipDate")}),a.jsx("dd",{children:t.shipDate})]}),t.originCityCountry&&a.jsxs("div",{children:[a.jsx("dt",{children:l("tracking:facts.origin")}),a.jsx("dd",{children:t.originCityCountry})]}),d&&a.jsxs("div",{children:[a.jsx("dt",{children:l("tracking:facts.destination")}),a.jsx("dd",{children:d})]}),a.jsxs("div",{children:[a.jsx("dt",{children:l("tracking:facts.packages")}),a.jsx("dd",{children:t.packageCount})]}),t.totalWeightKg!=null&&a.jsxs("div",{children:[a.jsx("dt",{children:l("tracking:facts.weight")}),a.jsx("dd",{children:l("portal:orders.weightKg",{weight:t.totalWeightKg})})]}),t.totalPricing!=null&&a.jsxs("div",{children:[a.jsx("dt",{children:l("portal:orders.packagePrice")}),a.jsx("dd",{children:bu.format(t.totalPricing)})]}),t.comment&&a.jsxs("div",{children:[a.jsx("dt",{children:l("portal:orders.comment")}),a.jsx("dd",{children:t.comment})]})]})})}),i&&a.jsx(hI,{events:i}),s&&a.jsx(I2,{pod:s}),e==="guest_t1"&&n&&a.jsx(oe,{children:a.jsxs(ye,{children:[a.jsx(Le,{children:l("tracking:tier2.gateTitle")}),a.jsx(Ts,{children:l("tracking:tier2.gateBody")}),a.jsx(mI,{children:a.jsx(yn,{type:"button",onClick:n,children:l("tracking:tier2.verifyButton")})})]})}),h&&a.jsxs(HE,{children:[t.shipperName&&a.jsx(oe,{children:a.jsxs(ye,{children:[a.jsx(Le,{children:l("portal:orders.sender")}),a.jsxs(zd,{children:[a.jsx("strong",{children:t.shipperName}),t.senderPhone&&a.jsx("span",{children:t.senderPhone})]})]})}),t.recipientName&&a.jsx(oe,{children:a.jsxs(ye,{children:[a.jsx(Le,{children:l("portal:orders.recipient")}),a.jsxs(zd,{children:[a.jsx("strong",{children:t.recipientName}),t.recipientPhone&&a.jsx("span",{children:t.recipientPhone})]})]})})]}),u.length>0&&a.jsx(oe,{children:a.jsxs(ye,{children:[a.jsx(Le,{children:l("portal:orders.packagesTitle")}),a.jsx(fI,{children:a.jsxs(VE,{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{scope:"col",children:l("portal:orders.packageId")}),p&&a.jsx("th",{scope:"col",children:l("portal:orders.packageWeight")}),m&&a.jsx("th",{scope:"col",children:l("portal:orders.packagePrice")}),x&&a.jsx("th",{scope:"col",children:l("portal:orders.colStatus")})]})}),a.jsx("tbody",{children:u.map(y=>a.jsxs("tr",{children:[a.jsx("td",{children:y.sid}),p&&a.jsx("td",{children:y.weightKg!=null?l("portal:orders.weightKg",{weight:y.weightKg}):"—"}),m&&a.jsx("td",{children:y.pricing!=null?bu.format(y.pricing):"—"}),x&&a.jsx("td",{children:y.salesOrderStatusId!=null?a.jsx(Fs,{statusId:y.salesOrderStatusId}):"—"})]},y.sid))})]})})]})})]})};function yI({isAuthenticated:t,isOwner:e,orderScope:n,guestTier:r}){return e?"owner":n==="sub"||n==="all"?"staff":"guest_t1"}const vI=new Set(["NSW","VIC","QLD","WA","SA","TAS","NT","ACT"]);function wu(t){const e=typeof(t==null?void 0:t.address)=="string"?t.address.trim():"",n=typeof(t==null?void 0:t.postcode)=="string"?t.postcode.trim():"";if(!e)return{};const r=e.split(",").map(c=>c.trim()).filter(Boolean),i=r.length>1?r[r.length-1]:r[0],s=r.length>1?r.slice(0,-1).join(", "):void 0,o=[e,n].filter(Boolean).join(" ").trim()||void 0,l=[i,n].filter(Boolean).join(" ").trim()||void 0;return{street:s,suburbState:i,full:o,coarse:l}}function ku(t){if(!t)return;const e=t.split(" ").filter(Boolean),n=e[e.length-1];return n&&vI.has(n.toUpperCase())?e.slice(0,-1).join(" ").trim()||void 0:t}function bI(t,e){const n=10**e;return Math.round(t*n)/n}function Su(t,e){const n=t.filter(r=>typeof r=="number");if(n.length)return bI(n.reduce((r,i)=>r+i,0),e)}function wI(t,e){let n={sid:t.sid,salesOrderStatusId:t.salesOrderStatusId};return e!=="guest_t1"&&typeof t.weight=="number"&&(n={...n,weightKg:t.weight}),e==="owner"&&typeof t.pricing=="number"&&(n={...n,pricing:t.pricing}),n}function kI(t,e){var o,l,c,d;const n=t.packages??[],r=wu(t.sender),i=wu(t.recipient);let s={salesOrderId:t.salesOrderId,salesOrderStatusId:t.salesOrderStatusId,shipDate:t.pickupDate,packageCount:n.length,originCityCountry:ku(r.suburbState)?`${ku(r.suburbState)}, Australia`:void 0,destinationSuburbStatePostcode:i.coarse,packages:n.map(u=>wI(u,e))};return e!=="guest_t1"&&(s={...s,destinationStreet:i.full,shipperName:(o=t.sender)==null?void 0:o.name,recipientName:(l=t.recipient)==null?void 0:l.name,totalWeightKg:Su(n.map(u=>u.weight),1)}),e==="owner"&&(s={...s,senderPhone:(c=t.sender)==null?void 0:c.mobile,recipientPhone:(d=t.recipient)==null?void 0:d.mobile,comment:t.comment,totalPricing:Su(n.map(u=>u.pricing),2)}),s}const SI=f(zf)`
  flex: none;
  &::before { display: none; }
`,EI=f(Fe)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 42px;
  padding: 10px 16px;
  border-radius: 8px;
  border: 1px solid var(--v29-line);
  color: var(--v29-text);
  font-family: ${_};
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
`;function _I(t){const e=t==null?void 0:t.createdByUid;return typeof e=="string"?e:void 0}const jI=()=>{const{t}=G(),{salesOrderId:e=""}=qo(),n=Ke(),[r,i]=S.useState({kind:"loading"}),s=dt(m=>m.uid),o=of(),l=yr("nextStopMap"),c=S.useCallback(()=>{i({kind:"loading"}),Zj(e).then(m=>i({kind:"ready",detail:m.data})).catch(()=>i({kind:"error"}))},[e]);S.useEffect(()=>{c()},[c]);const d=r.kind==="ready"?r.detail:null,u=_I(d),p=yI({isAuthenticated:!0,isOwner:!!(s&&u&&u===s),orderScope:o});return a.jsxs(Cn,{children:[a.jsxs(Cr,{children:[a.jsxs("div",{children:[a.jsx(Xt,{children:t("portal:common.eyebrow")}),a.jsx(en,{children:t("portal:orders.detailTitle",{id:e})}),a.jsx(Qt,{children:t("portal:orders.detailLead")})]}),a.jsxs(EI,{to:{pathname:"/portal/orders",search:n.search},children:[a.jsx(Ko,{"aria-hidden":"true"}),t("portal:orders.backToOrders")]})]}),r.kind==="loading"&&a.jsx(oe,{children:a.jsx(ye,{"aria-busy":"true","aria-label":t("common:loading"),children:a.jsx(it,{})})}),r.kind==="error"&&a.jsx(oe,{children:a.jsxs(Qe,{role:"alert",children:[t("portal:orders.detailLoadFailed"),a.jsx(we,{type:"button",onClick:c,children:t("common:retry")})]})}),d&&a.jsx(xI,{projection:kI(d,p),level:p}),l&&(p==="owner"||p==="staff")&&(d==null?void 0:d.salesOrderId)===e&&ca[Qf(d.salesOrderStatusId??0).stepIndex]==="inTransit"&&a.jsx(SI,{children:a.jsx(Ol,{enabled:!0,shipment:{orderId:e,stage:"in_transit"},audience:"public",layout:"wide"})})]})},TI=[{id:"on-account",status:"available"},{id:"stripe-card",status:"pending"}],II=f.header`
  margin-bottom: 34px;
`,Eu=f.h3`
  font-family: ${_};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--v29-muted);
  margin: 40px 0 14px;
`,RI=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
`,CI=f.div`
  border-radius: 16px;
  border: 1px solid var(--v29-line-soft);
  background: var(--v29-card);
  box-shadow: var(--v29-card-shadow);
  padding: 22px 24px;
`,AI=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 10px;
`,OI=f.h4`
  font-family: ${_};
  font-size: 16px;
  font-weight: 700;
  color: var(--v29-text);
  margin: 0;
`,PI=f.p`
  font-family: ${_};
  font-size: 14px;
  line-height: 1.65;
  color: var(--v29-muted);
  margin: 0;
`,NI=f.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 3px 10px;
  border-radius: 999px;
  font-family: ${_};
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
`,LI=f.ol`
  margin: 0;
  padding: 0;
  list-style: none;
  counter-reset: billing-step;
  display: grid;
  gap: 12px;
`,$I=f.li`
  display: flex;
  gap: 14px;
  align-items: flex-start;
  font-family: ${_};
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
`,DI=f.div`
  margin-top: 28px;
  border-radius: 12px;
  background: var(--v29-raised);
  padding: 18px 20px;
  font-family: ${_};
  font-size: 13.5px;
  line-height: 1.65;
  color: var(--v29-muted);
  max-width: 78ch;

  strong {
    color: var(--v29-text);
    font-weight: 600;
  }
`,MI=()=>{const{t}=G("portal");return a.jsxs(Cn,{children:[a.jsxs(II,{children:[a.jsx(Xt,{children:t("common.eyebrow")}),a.jsx(en,{children:t("billing.title")}),a.jsx(Qt,{children:t("billing.lead")})]}),a.jsx(Eu,{children:t("billing.methodsTitle")}),a.jsx(RI,{children:TI.map(e=>a.jsxs(CI,{children:[a.jsxs(AI,{children:[a.jsx(OI,{children:t(`billing.methods.${e.id}.name`)}),a.jsx(NI,{$status:e.status,children:t(`billing.status.${e.status}`)})]}),a.jsx(PI,{children:t(`billing.methods.${e.id}.body`)})]},e.id))}),a.jsx(Eu,{children:t("billing.howTitle")}),a.jsx(LI,{children:["secure","intent","confirm","receipt"].map(e=>a.jsx($I,{children:a.jsxs("span",{children:[a.jsx("strong",{children:t(`billing.how.${e}.title`)})," — ",t(`billing.how.${e}.body`)]})},e))}),a.jsxs(DI,{children:[a.jsx("strong",{children:t("billing.readinessTitle")})," ",t("billing.readinessBody")]})]})};class Gr extends Error{}Gr.prototype.name="InvalidTokenError";function FI(t){return decodeURIComponent(atob(t).replace(/(.)/g,(e,n)=>{let r=n.charCodeAt(0).toString(16).toUpperCase();return r.length<2&&(r="0"+r),"%"+r}))}function UI(t){let e=t.replace(/-/g,"+").replace(/_/g,"/");switch(e.length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return FI(e)}catch{return atob(e)}}function BI(t,e){if(typeof t!="string")throw new Gr("Invalid token specified: must be a string");e||(e={});const n=e.header===!0?0:1,r=t.split(".")[n];if(typeof r!="string")throw new Gr(`Invalid token specified: missing part #${n+1}`);let i;try{i=UI(r)}catch(s){throw new Gr(`Invalid token specified: invalid base64 for part #${n+1} (${s.message})`)}try{return JSON.parse(i)}catch(s){throw new Gr(`Invalid token specified: invalid json for part #${n+1} (${s.message})`)}}const zI={name:"SenditGo"},_u="portal-recaptcha-container",HI=f.div`
  display: flex;
  justify-content: center;
  padding-top: clamp(8px, 6vh, 64px);
`,VI=f.div`
  width: 100%;
  max-width: 440px;
  padding: 36px 32px 32px;
  border-radius: 16px;
  background: var(--v29-card);
  border: 1px solid var(--v29-line-soft);
  box-shadow: var(--v29-card-shadow);
`,WI=f.h1`
  font-family: ${tt};
  font-style: italic;
  font-weight: 700;
  font-size: 28px;
  letter-spacing: 0.01em;
  line-height: 1.15;
  margin: 0 0 10px;
  color: var(--v29-text);
`,ju=f.label`
  display: block;
  font-family: ${_};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--v29-muted);
  margin: 26px 0 8px;
`,Pl=`
  font-family: ${_};
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
`,qI=f.div`
  display: flex;
  gap: 10px;
`,KI=f.span`
  ${Pl};
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  color: var(--v29-muted);
  user-select: none;
`,GI=f.input`
  ${Pl};
  flex: 1;
  min-width: 0;
`,ZI=f.input`
  ${Pl};
  width: 100%;
  text-align: center;
  font-size: 22px;
  letter-spacing: 0.45em;
  font-variant-numeric: tabular-nums;
`,Tu=f.span`
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
`,Iu=f.button`
  width: 100%;
  margin-top: 26px;
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  background: var(--v29-primary);
  color: var(--v29-on-primary);
  font-family: ${tt};
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
`,Ru=f.button`
  border: none;
  background: transparent;
  padding: 4px 6px;
  font-family: ${_};
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
`,YI=f.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
`,Cu=f.p`
  margin: 14px 0 0;
  font-family: ${_};
  font-size: 13.5px;
  color: var(--v29-danger);
`,JI=f.p`
  margin: 6px 0 0;
  font-family: ${_};
  font-size: 13.5px;
  color: var(--v29-muted);
`;f.div`
  margin-top: 18px;
  text-align: center;
`;const XI=()=>{var N;const{t}=G(),e=_r(),n=Ke(),r=dt(D=>D.login),i=dt(D=>D.token),[s,o]=S.useState("phone"),[l,c]=S.useState(""),[d,u]=S.useState(""),[h,p]=S.useState(!1),[m,x]=S.useState(null),y=S.useRef(null),v=S.useRef(null),j=hx((N=n.state)==null?void 0:N.from,"/portal/orders");S.useEffect(()=>{i&&e(j,{replace:!0})},[i]),S.useEffect(()=>()=>{var D;(D=y.current)==null||D.clear(),y.current=null},[]);const E=()=>`+61${l.replace(/[^\d]/g,"").replace(/^0/,"")}`,w=D=>{const z=BI(D.data.token),Z=Number.isFinite(z.exp)?z.exp-Math.floor(Date.now()/1e3):86400,he={maxAge:Math.max(60,Z),secure:!fs,sameSite:"strict"};gs("X-Token",D.data.token,he),gs("X-Refresh-Token",D.data.refresh,he),r({token:D.data.token,refresh:D.data.refresh,uid:z.uid,name:D.data.name||z.name||"",companyUid:z.companyUid,permission:D.data.permission??[]}),e(j,{replace:!0})},b=D=>{const z=D==null?void 0:D.code;return typeof z=="number"&&z>0?t(`statusCode:${z}`,t("portal:login.loginFailed")):t("portal:login.loginFailed")},I=async()=>{var z,F;if(x(null),l.replace(/[^\d]/g,"").length<8){x(t("portal:login.invalidPhone"));return}p(!0);try{(z=y.current)==null||z.clear(),y.current=new uk(_s,_u,{size:"invisible"}),v.current=await fk(_s,E(),y.current),u(""),o("otp")}catch(Z){console.error("[portal login] send code failed",Z.code),x(t("portal:login.sendFailed")),(F=y.current)==null||F.clear(),y.current=null}finally{p(!1)}},R=async D=>{D.preventDefault(),await I()},$=async D=>{if(D.preventDefault(),x(null),d.replace(/[^\d]/g,"").length!==6){x(t("portal:login.invalidOtp"));return}if(!v.current){o("phone");return}p(!0);try{const F=await(await v.current.confirm(d)).user.getIdToken(),Z=await Kj({token:F});w(Z)}catch(z){const F=z==null?void 0:z.code;x(typeof F=="string"?t("portal:login.otpFailed"):b(z))}finally{p(!1)}};return a.jsx(Cn,{children:a.jsx(HI,{children:a.jsxs(VI,{children:[a.jsx(Xt,{children:t("portal:common.eyebrow")}),a.jsx(WI,{children:t("portal:login.title",{brand:zI.name})}),a.jsx(Qt,{children:t("portal:login.lead")}),s==="phone"?a.jsxs("form",{onSubmit:R,noValidate:!0,children:[a.jsx(ju,{htmlFor:"portal-login-mobile",children:t("portal:login.mobileLabel")}),a.jsxs(qI,{children:[a.jsx(KI,{"aria-hidden":"true",children:"+61"}),a.jsx(GI,{id:"portal-login-mobile",type:"tel",inputMode:"tel",autoComplete:"tel",placeholder:t("portal:login.mobilePlaceholder"),value:l,onChange:D=>c(D.target.value)})]}),m&&a.jsx(Cu,{role:"alert",children:m}),a.jsxs(Iu,{type:"submit",disabled:h,"aria-busy":h,children:[h&&a.jsx(Tu,{"aria-hidden":"true"}),t("portal:login.sendCode")]})]}):a.jsxs("form",{onSubmit:$,noValidate:!0,children:[a.jsx(ju,{htmlFor:"portal-login-otp",children:t("portal:login.otpLabel")}),a.jsx(ZI,{id:"portal-login-otp",type:"text",inputMode:"numeric",autoComplete:"one-time-code",maxLength:6,placeholder:"••••••",value:d,onChange:D=>u(D.target.value.replace(/[^\d]/g,""))}),a.jsx(JI,{children:t("portal:login.otpHint",{phone:E()})}),m&&a.jsx(Cu,{role:"alert",children:m}),a.jsxs(Iu,{type:"submit",disabled:h,"aria-busy":h,children:[h&&a.jsx(Tu,{"aria-hidden":"true"}),t("portal:login.verify")]}),a.jsxs(YI,{children:[a.jsx(Ru,{type:"button",disabled:h,onClick:()=>{o("phone"),u(""),x(null)},children:t("portal:login.changeNumber")}),a.jsx(Ru,{type:"button",disabled:h,onClick:()=>{I()},children:t("portal:login.resend")})]})]}),fs,a.jsx("div",{id:_u})]})})})},Qa=5,QI=[1,2,3,8,11,12,13,9,14,16],eR=f(Fn)`
  @media (max-width: 640px) {
    display: none;
  }
`,tR=f(Un)`
  tbody tr {
    cursor: pointer;
    transition: background 0.15s ease;
  }
  tbody tr:hover,
  tbody tr:focus-within {
    background: color-mix(in srgb, var(--v29-primary) 5%, transparent);
  }
`,Au=f(Fe)`
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
`,nR=f.div`
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
`,em=f.span`
  font-variant-numeric: tabular-nums;
`,Ou=f(em)`
  display: inline-block;
  min-width: 132px;
  white-space: nowrap;
`,rR=f.p`
  margin: 0;
  font-family: ${_};
  font-size: 13px;
  color: var(--v29-muted);
`,iR=f.div`
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
`,sR=f.div`
  display: flex;
  gap: 8px;
`,aR=f.button`
  border: none;
  background: transparent;
  min-height: 42px;
  padding: 0 10px;
  border-radius: var(--v29-radius-button);
  color: var(--v29-muted);
  font-family: ${_};
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
`,oR=f.div`
  display: none;

  @media (max-width: 640px) {
    display: grid;
  }
`,lR=f.article`
  display: grid;
  gap: 12px;
  padding: 16px 18px;
  border-bottom: 1px solid var(--v29-line-soft);
  font-family: ${_};
  cursor: pointer;
  transition: background 0.15s ease;

  &:hover,
  &:focus-within,
  &:active {
    background: color-mix(in srgb, var(--v29-primary) 5%, transparent);
  }
`,cR=f.div`
  display: grid;
  justify-items: start;
  gap: 8px;
  min-width: 0;
`,dR=f.div`
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
`,uR=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  color: var(--v29-muted);
  font-size: 13px;
`,hR=f.div`
  display: inline-flex;
  gap: 4px;
  padding: 4px;
  margin-bottom: 18px;
  border-radius: 11px;
  background: var(--v29-raised);
  border: 1px solid var(--v29-line-soft);
`,Pu=f.button`
  appearance: none;
  cursor: pointer;
  border: none;
  border-radius: 7px;
  padding: 9px 16px;
  font-family: ${_};
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
`,pR=()=>{const{t}=G(),[e,n]=Am(),[r,i]=S.useState({kind:"loading"}),s=Number(e.get("page")??"1"),o=Number.isFinite(s)&&s>0?Math.floor(s):1,l=e.get("q")??"",c=e.get("status")??"",d=c?Number(c):void 0,u=d!==void 0&&Number.isFinite(d)?d:void 0,[h,p]=S.useState(l),m=_r(),x=Ke(),y=O=>({pathname:`/portal/orders/${O}`,search:x.search}),v=of(),j=v!=="own",E=e.get("scope")==="company"?"company":"mine",w=j?E:"mine";S.useEffect(()=>{p(l)},[l]);const b=S.useCallback(()=>{i({kind:"loading"}),Gj({page:o,limit:Qa,salesOrderStatusId:u,searchCol:l?1:void 0,content:l||void 0,sortCol:1,sort:!1,scope:w==="company"?v:"own"}).then(pe=>{i({kind:"ready",rows:pe.data.salesOrders??[],total:pe.data.total??0})}).catch(()=>{i({kind:"error"})})},[o,l,u,w,v]);S.useEffect(()=>{b()},[b]);const I=O=>{const pe=O.page??o,Ie=O.query??l,Ue=O.status??c,fe=O.tab??w,Be=new URLSearchParams;pe>1&&Be.set("page",String(pe)),Ie.trim()&&Be.set("q",Ie.trim()),Ue&&Be.set("status",Ue),fe==="company"&&Be.set("scope","company"),n(Be)},R=()=>{const O=h.trim();O!==l&&I({page:1,query:O})},$=O=>{O.preventDefault(),R()},N=()=>{p(""),I({page:1,query:"",status:""})},D=!!(l||c),z=(O,pe)=>{var Ie;O.defaultPrevented||O.metaKey||O.ctrlKey||O.shiftKey||O.altKey||(Ie=window.getSelection())!=null&&Ie.toString()||m(y(pe))},F=O=>{O!==w&&I({page:1,tab:O})},Z=S.useRef(null),ce=S.useRef(null),he=O=>{var Ie;if(!j||O.key!=="ArrowLeft"&&O.key!=="ArrowRight")return;O.preventDefault();const pe=w==="mine"?"company":"mine";F(pe),(Ie=(pe==="mine"?Z:ce).current)==null||Ie.focus()},de=r.kind==="ready"?r.total:0,ae=de===0?0:(o-1)*Qa+1,Se=Math.min(o*Qa,de),be=o>1,Te=Se<de;return a.jsxs(Cn,{children:[a.jsx(Cr,{children:a.jsxs("div",{children:[a.jsx(Xt,{children:t("portal:common.eyebrow")}),a.jsx(en,{id:"orders-heading",children:t("portal:orders.title")}),a.jsx(Qt,{children:t("portal:orders.lead")})]})}),j&&a.jsxs(hR,{role:"tablist","aria-labelledby":"orders-heading",onKeyDown:he,children:[a.jsx(Pu,{ref:Z,type:"button",role:"tab",id:"orders-tab-mine","aria-selected":w==="mine","aria-controls":"orders-panel",tabIndex:w==="mine"?0:-1,$active:w==="mine",onClick:()=>F("mine"),children:t("portal:admin.scopeOwn")}),a.jsx(Pu,{ref:ce,type:"button",role:"tab",id:"orders-tab-company","aria-selected":w==="company","aria-controls":"orders-panel",tabIndex:w==="company"?0:-1,$active:w==="company",onClick:()=>F("company"),children:t("portal:admin.scopeCompany")})]}),a.jsxs(oe,{id:"orders-panel",role:j?"tabpanel":void 0,"aria-labelledby":j?w==="mine"?"orders-tab-mine":"orders-tab-company":void 0,children:[a.jsx("form",{onSubmit:$,children:a.jsxs(UE,{children:[a.jsxs(Ae,{children:[t("portal:orders.searchLabel"),a.jsx(We,{type:"search",inputMode:"search",value:h,placeholder:t("portal:orders.searchPlaceholder"),onChange:O=>p(O.target.value),onBlur:R})]}),a.jsxs(Ae,{children:[t("portal:orders.statusLabel"),a.jsxs(gf,{value:c,onChange:O=>I({page:1,status:O.target.value}),children:[a.jsx("option",{value:"",children:t("portal:orders.allStatuses")}),QI.map(O=>a.jsx("option",{value:O,children:t(`salesOrderStatusId:${O}`,String(O))},O))]})]}),D&&a.jsx(aR,{type:"button",onClick:N,children:t("portal:orders.clearFilters")})]})}),r.kind==="loading"&&a.jsxs("div",{"aria-busy":"true","aria-label":t("common:loading"),children:[a.jsx(it,{}),a.jsx(it,{}),a.jsx(it,{})]}),r.kind==="error"&&a.jsxs(Qe,{role:"alert",children:[t("portal:orders.loadFailed"),a.jsx("br",{}),a.jsx(we,{onClick:b,children:t("common:retry")})]}),r.kind==="ready"&&r.rows.length===0&&a.jsx(Qe,{children:l||c?a.jsxs(a.Fragment,{children:[t("portal:orders.emptyFiltered"),a.jsx(we,{type:"button",onClick:N,children:t("portal:orders.clearFilters")})]}):t("portal:orders.empty")}),r.kind==="ready"&&r.rows.length>0&&a.jsxs(a.Fragment,{children:[a.jsx(eR,{children:a.jsxs(tR,{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{scope:"col",children:t("portal:orders.colOrderId")}),a.jsx("th",{scope:"col",children:t("portal:orders.colRoute")}),a.jsx("th",{scope:"col",children:t("portal:orders.colCreated")}),a.jsx("th",{scope:"col",children:t("portal:orders.colPackages")}),a.jsx("th",{scope:"col",children:t("portal:orders.colStatus")})]})}),a.jsx("tbody",{children:r.rows.map(O=>a.jsxs("tr",{onClick:pe=>z(pe,O.salesOrderId),children:[a.jsx("td",{children:a.jsx(Au,{to:y(O.salesOrderId),children:O.salesOrderId})}),a.jsx("td",{children:a.jsxs(nR,{title:`${O.pickup} → ${O.delivery}`,"aria-label":`${O.pickup} ${t("portal:orders.routeTo")} ${O.delivery}`,children:[a.jsx("span",{"aria-hidden":"true",children:O.pickup}),a.jsxs("span",{"aria-hidden":"true",children:["→ ",O.delivery]})]})}),a.jsx("td",{children:a.jsx(Ou,{children:O.createdTime})}),a.jsx("td",{children:a.jsx(em,{children:O.packages})}),a.jsx("td",{children:a.jsx(Fs,{statusId:O.salesOrderStatusId})})]},O.salesOrderId))})]})}),a.jsx(oR,{children:r.rows.map(O=>a.jsxs(lR,{onClick:pe=>z(pe,O.salesOrderId),children:[a.jsxs(cR,{children:[a.jsx(Au,{to:y(O.salesOrderId),children:O.salesOrderId}),a.jsx(Fs,{statusId:O.salesOrderStatusId})]}),a.jsxs(dR,{"aria-label":`${O.pickup} ${t("portal:orders.routeTo")} ${O.delivery}`,children:[a.jsx("span",{"aria-hidden":"true",children:O.pickup}),a.jsxs("span",{"aria-hidden":"true",children:["→ ",O.delivery]})]}),a.jsxs(uR,{children:[a.jsx(Ou,{children:O.createdTime}),a.jsxs("span",{children:[O.packages," ",t("portal:orders.packageAbbrev")]})]})]},O.salesOrderId))})]}),r.kind==="ready"&&r.rows.length>0&&a.jsxs(iR,{children:[a.jsx(rR,{children:t("portal:orders.showingRange",{from:ae,to:Se,total:de})}),a.jsxs(sR,{children:[a.jsx(we,{type:"button",disabled:!be,onClick:()=>I({page:o-1}),children:t("portal:orders.prevPage")}),a.jsx(we,{type:"button",disabled:!Te,onClick:()=>I({page:o+1}),children:t("portal:orders.nextPage")})]})]})]})]})},fR=[{id:"orders",labelKey:"portal:admin.groupOrders",codes:Object.values(me)},{id:"users",labelKey:"portal:admin.groupUsers",codes:[re.USER_LIST,re.USER_ADD,re.USER_EDIT,re.USER_SUSPEND]},{id:"roles",labelKey:"portal:admin.groupRoles",codes:[re.ROLE_LIST,re.ROLE_ADD,re.ROLE_EDIT,re.ROLE_DELETE]}],mR=f.form`
  display: grid;
  gap: 18px;
`,gR=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 18px;
`,xR=f.fieldset`
  margin: 0;
  padding: 0;
  border: none;
  display: grid;
  gap: 2px;
  align-content: start;
`,yR=f.legend`
  padding: 0 0 8px;
  font-family: ${_};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--v29-muted);
`,vR=f(Fe)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: ${_};
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
`,Nu=()=>{const{t}=G(),e=_r(),{roleId:n}=qo(),r=n!==void 0,[i,s]=S.useState(r?{kind:"loading"}:{kind:"ready",role:null}),[o,l]=S.useState(""),[c,d]=S.useState(new Set),[u,h]=S.useState(!1),[p,m]=S.useState(null),x=S.useRef(0),y=S.useCallback(()=>{if(!r)return;const E=++x.current;s({kind:"loading"}),Lf().then(w=>{if(x.current!==E)return;const b=w.data.roles.find(I=>I.roleId===Number(n));if(!b){s({kind:"not-found"});return}if(b.isSystem){s({kind:"locked"});return}l(b.roleName),d(new Set(b.permissions)),s({kind:"ready",role:b})}).catch(()=>{x.current===E&&s({kind:"error"})})},[r,n]);S.useEffect(()=>{y()},[y]),S.useEffect(()=>{r||(l(""),d(new Set),s({kind:"ready",role:null}),m(null))},[r]);const v=E=>{d(w=>{const b=new Set(w);return b.has(E)?b.delete(E):b.add(E),b}),m(null)},j=E=>{if(E.preventDefault(),!o.trim()||c.size===0){m(t("portal:admin.roleFormRequired"));return}h(!0),m(null);const w={roleName:o.trim(),permissions:Array.from(c)};(r?Jj(Number(n),w):Yj(w)).then(()=>e("/portal/admin/users")).catch(()=>{m(t("portal:admin.roleFormSaveFailed")),h(!1)})};return a.jsxs(Cn,{children:[a.jsxs(Cr,{children:[a.jsxs("div",{children:[a.jsx(Xt,{children:t("portal:common.eyebrow")}),a.jsx(en,{children:t(r?"portal:admin.roleFormEditTitle":"portal:admin.roleFormCreateTitle")}),a.jsx(Qt,{children:t("portal:admin.roleFormLead")})]}),a.jsxs(vR,{to:"/portal/admin/users",children:[a.jsx(Ko,{"aria-hidden":"true"}),t("portal:admin.backToAdmin")]})]}),i.kind==="loading"&&a.jsx(oe,{children:a.jsx(Qe,{"aria-busy":"true",children:t("common:loading")})}),i.kind==="error"&&a.jsx(oe,{children:a.jsxs(Qe,{role:"alert",children:[t("portal:admin.roleFormLoadFailed"),a.jsx(we,{type:"button",onClick:y,children:t("common:retry")})]})}),i.kind==="not-found"&&a.jsx(oe,{children:a.jsx(Qe,{children:t("portal:admin.roleFormNotFound")})}),i.kind==="locked"&&a.jsx(oe,{children:a.jsx(Qe,{children:t("portal:admin.roleFormSystem")})}),i.kind==="ready"&&a.jsxs(mR,{onSubmit:j,children:[a.jsx(oe,{children:a.jsx(ye,{children:a.jsxs(Ae,{children:[a.jsxs("span",{children:[t("portal:admin.roleName"),a.jsx(jt,{children:"*"})]}),a.jsx(We,{"aria-required":"true",value:o,onChange:E=>{l(E.target.value),m(null)}})]})})}),a.jsx(oe,{children:a.jsxs(ye,{children:[a.jsx(Le,{children:t("portal:admin.permissions")}),a.jsx(gR,{children:fR.map(E=>a.jsxs(xR,{children:[a.jsx(yR,{children:t(E.labelKey)}),E.codes.map(w=>a.jsxs(zE,{children:[a.jsx("input",{type:"checkbox",checked:c.has(w),onChange:()=>v(w)}),t(`portal:permissions.${w}`,w)]},w))]},E.id))})]})}),a.jsxs(ei,{children:[a.jsx(we,{as:Fe,to:"/portal/admin/users",children:t("common:cancel")}),a.jsxs(yn,{type:"submit",disabled:u,children:[a.jsx(zm,{"aria-hidden":"true"}),t(r?"portal:admin.saveChanges":"portal:admin.createRole")]})]}),p&&a.jsx(Xe,{$danger:!0,role:"alert",children:p})]})]})},bR=ah(),wR=[me.LIST,me.ADD,me.IMPORT,me.LIST_ALL,re.USER_LIST,re.USER_ADD,re.USER_EDIT,re.USER_SUSPEND],kR=[me.LIST,me.ADD,me.LIST_SUB],SR=[me.LIST,me.LIST_OWN],Do=[{id:"owner",nameKey:"portal:roles.owner.name",descriptionKey:"portal:roles.owner.desc",permissions:bR,scope:"all"},{id:"manager",nameKey:"portal:roles.manager.name",descriptionKey:"portal:roles.manager.desc",permissions:wR,scope:"all"},{id:"staff",nameKey:"portal:roles.staff.name",descriptionKey:"portal:roles.staff.desc",permissions:kR,scope:"sub"},{id:"viewer",nameKey:"portal:roles.viewer.name",descriptionKey:"portal:roles.viewer.desc",permissions:SR,scope:"own"}],Nl=[{id:"viewOrders",labelKey:"portal:roles.capabilities.viewOrders",group:"orders",codes:[me.LIST]},{id:"createOrders",labelKey:"portal:roles.capabilities.createOrders",group:"orders",codes:[me.ADD]},{id:"importOrders",labelKey:"portal:roles.capabilities.importOrders",group:"orders",codes:[me.IMPORT]},{id:"companyOrders",labelKey:"portal:roles.capabilities.companyOrders",group:"orders",codes:[me.LIST_ALL,me.LIST_SUB]},{id:"inviteMembers",labelKey:"portal:roles.capabilities.inviteMembers",group:"team",codes:[re.USER_ADD]},{id:"suspendMembers",labelKey:"portal:roles.capabilities.suspendMembers",group:"team",codes:[re.USER_SUSPEND]},{id:"manageRoles",labelKey:"portal:roles.capabilities.manageRoles",group:"team",codes:[re.ROLE_ADD,re.ROLE_EDIT,re.ROLE_DELETE]}],ER=(t,e)=>e.codes.some(n=>t.permissions.includes(n)),_R=[re.ROLE_ADD,re.ROLE_EDIT,re.ROLE_DELETE],Mo=t=>!!t&&_R.some(e=>t.permissions.includes(e)),tm=t=>t.statusId===void 0||t.statusId===1,Fo=(t,e)=>t.find(n=>n.roleId===e),jR=(t,e,n)=>t.filter(r=>r.uid!==n&&tm(r)&&Mo(Fo(e,r.roleId))).length,Lu=(t,e,n,r)=>{const i=e.roleId??t.roleId,s=e.statusId??t.statusId??1,o=tm(t)&&Mo(Fo(r,t.roleId)),l=s===1&&Mo(Fo(r,i));return o&&!l&&jR(n,r,t.uid)===0},$u=t=>!!t&&typeof t=="object"&&t.reason==="lastOwner",TR=(t,e)=>Nl.filter(n=>n.codes.some(r=>t.includes(r))&&!n.codes.some(r=>e.includes(r))),IR=t=>t.length===0?"":t.length===1?t[0]:`${t.slice(0,-1).join(", ")} and ${t[t.length-1]}`,RR=t=>!!t.isSystem,CR=(t,e)=>e.codes.some(n=>t.includes(n)),AR=(t,e)=>t.length===e.length&&t.every(n=>e.includes(n)),Du=t=>Do.find(e=>AR(e.permissions,t)),Ll="/api/company/rbac/invites",OR=()=>se.get(Ll).then(St(kt.ApiInviteListResponse,"getInviteList")),Mu=t=>se.post(Ll,t).then(St(kt.ApiInvite,"postInvite")),Fu=t=>se.delete(`${Ll}/${t}`),PR=f.div`
  display: grid;
  gap: 8px;
`,NR=f.details`
  font-family: ${_};
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
`,LR=f.ul`
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
`,$R=f.span`
  display: inline-flex;
  color: ${t=>t.$active?"var(--v29-primary)":"var(--v29-muted)"};

  svg {
    width: 16px;
    height: 16px;
  }
`,DR=f.div`
  margin-top: 26px;
  padding-top: 22px;
  border-top: 1px solid var(--v29-line-soft);
`,eo=({value:t,onChange:e,roleOptions:n,placeholder:r,ariaLabel:i,ariaRequired:s})=>{const{t:o}=G(),l=n.find(u=>String(u.roleId)===t),c=l?Du(l.permissions):void 0,d=l?Nl.filter(u=>CR(l.permissions,u)):[];return a.jsxs(PR,{children:[a.jsxs(gf,{"aria-label":i,"aria-required":s,value:t,onChange:u=>e(u.target.value),children:[r&&a.jsx("option",{value:"",children:r}),n.map(u=>{const h=Du(u.permissions);return a.jsx("option",{value:u.roleId,children:h?o(h.nameKey):u.roleName},u.roleId)})]}),l&&a.jsxs(a.Fragment,{children:[c&&a.jsx(Xe,{children:o(c.descriptionKey)}),a.jsxs(NR,{children:[a.jsx("summary",{children:o("portal:admin.permissions")}),a.jsx(LR,{children:d.map(u=>a.jsxs("li",{children:[a.jsx(Vs,{"aria-hidden":"true"}),o(u.labelKey)]},u.id))})]})]})]})},MR=f.div`
  display: grid;
  gap: 18px;
`,Uu=f.div`
  display: grid;
  grid-template-columns: ${t=>t.$single?"1fr":"minmax(0, 1.3fr) minmax(280px, 0.7fr)"};
  gap: 18px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,Bu=f.form`
  display: grid;
  gap: 14px;
`,FR=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`,Uo=f.span`
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding: 5px 9px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--v29-primary) 9%, transparent);
  color: var(--v29-primary);
  font-family: ${_};
  font-size: 12px;
  font-weight: 700;
`,Hi=f(Uo)`
  background: var(--v29-line-soft);
  color: var(--v29-muted);
`,to=f.div`
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
`,UR=f.div`
  display: flex;
  gap: 8px;
`,BR=f.span`
  display: inline-flex;
  align-items: center;
  min-height: 42px;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid var(--v29-line-soft);
  background: var(--v29-raised);
  color: var(--v29-muted);
  font-family: ${_};
  font-size: 14px;
  user-select: none;
`,zR=new Intl.DateTimeFormat("en-AU",{day:"numeric",month:"short",year:"numeric"}),HR=t=>{const e=new Date(t);return Number.isNaN(e.getTime())?t:zR.format(e)},VR=()=>{const{t}=G(),e=dt(T=>T.uid),n=Ut(re.USER_ADD),r=Ut(re.USER_EDIT),i=Ut(re.USER_SUSPEND),s=Ut(re.ROLE_LIST),o=Ut(re.ROLE_ADD),l=Ut(re.ROLE_EDIT),c=Ut(re.ROLE_DELETE),d=s||n||r||i,[u,h]=S.useState({kind:"loading"}),[p,m]=S.useState({kind:"loading"}),[x,y]=S.useState({name:"",email:"",roleId:""}),[v,j]=S.useState(!1),[E,w]=S.useState(null),[b,I]=S.useState(null),[R,$]=S.useState(""),[N,D]=S.useState(!1),[z,F]=S.useState(null),[Z,ce]=S.useState(null),[he,de]=S.useState(null),[ae,Se]=S.useState(null),[be,Te]=S.useState(!1),[O,pe]=S.useState(null),[Ie,Ue]=S.useState({kind:"loading"}),[fe,Be]=S.useState({mobile:"",roleId:""}),[Nt,tn]=S.useState(!1),[nn,Et]=S.useState(null),[ne,Ne]=S.useState(null),[He,Lt]=S.useState(null),rn=S.useRef(0),sn=S.useRef(0),nr=S.useRef(0),an=S.useCallback(()=>{const T=++rn.current;h({kind:"loading"}),Qj().then(X=>{rn.current===T&&h({kind:"ready",users:X.data.users})}).catch(()=>{rn.current===T&&h({kind:"error"})})},[]),Re=S.useCallback(()=>{const T=++sn.current;m({kind:"loading"}),Lf().then(X=>{sn.current===T&&m({kind:"ready",roles:X.data.roles})}).catch(()=>{sn.current===T&&m({kind:"error"})})},[]),Ve=S.useCallback(()=>{const T=++nr.current;Ue({kind:"loading"}),OR().then(X=>{nr.current===T&&Ue({kind:"ready",invites:X.data.invites})}).catch(()=>{nr.current===T&&Ue({kind:"error"})})},[]);S.useEffect(()=>{an()},[an]),S.useEffect(()=>{d&&Re()},[d,Re]),S.useEffect(()=>{Ve()},[Ve]);const rt=p.kind==="ready"?p.roles:[],Ar=T=>X=>{y(Ce=>({...Ce,[T]:X.target.value})),w(null)},Or=T=>{y(X=>({...X,roleId:T})),w(null)},ht=T=>{T.preventDefault();const X=Number(x.roleId);if(!x.name.trim()||!X){w({kind:"error",text:t("portal:admin.addUserRequired")});return}j(!0),w(null),eT({name:x.name.trim(),email:x.email.trim(),roleId:X}).then(Ce=>{w({kind:"success",text:t("portal:admin.addUserSuccess",{name:Ce.data.name})}),y({name:"",email:"",roleId:""}),an(),d&&Re()}).catch(()=>w({kind:"error",text:t("portal:admin.addUserFailed")})).finally(()=>j(!1))},Y=T=>{I(T.uid),$(String(T.roleId)),F(null),ce(null)},De=(T,X)=>{D(!0),ru({uid:T.uid,roleId:X}).then(Ce=>{F({kind:"success",text:t("portal:admin.userUpdated",{name:Ce.data.name,role:Ce.data.roleName})}),I(null),ce(null),an(),d&&Re()}).catch(Ce=>F({kind:"error",text:$u(Ce)?t("portal:admin.lastOwnerBlock"):t("portal:admin.userUpdateFailed")})).finally(()=>D(!1))},$t=T=>{const X=Number(R);if(!X){F({kind:"error",text:t("portal:admin.rolesUnavailable")});return}const Ce=p.kind==="ready"?p.roles:[],Nr=u.kind==="ready"?u.users:[];if(Lu(T,{roleId:X},Nr,Ce)){F({kind:"error",text:t("portal:admin.lastOwnerBlock")});return}const Lr=T.uid===e,hm=(Z==null?void 0:Z.uid)===T.uid;if(Lr&&!hm&&X!==T.roleId){const ua=Ce.find($r=>$r.roleId===T.roleId),ha=Ce.find($r=>$r.roleId===X),Ml=TR((ua==null?void 0:ua.permissions)??[],(ha==null?void 0:ha.permissions)??[]);if(Ml.length>0){ce({uid:T.uid,message:t("portal:admin.selfDemoteConfirm",{capabilities:IR(Ml.map($r=>t($r.labelKey)))})});return}}De(T,X)},pt=T=>T.statusId===void 0||T.statusId===1,Pr=T=>{const X=pt(T)?2:1,Ce=p.kind==="ready"?p.roles:[],Nr=u.kind==="ready"?u.users:[];if(Lu(T,{statusId:X},Nr,Ce)){F({kind:"error",text:t("portal:admin.lastOwnerBlock")});return}de(T.uid),ru({uid:T.uid,statusId:X}).then(()=>{F(null),an()}).catch(Lr=>F({kind:"error",text:$u(Lr)?t("portal:admin.lastOwnerBlock"):t("portal:admin.userUpdateFailed")})).finally(()=>de(null))},da=T=>{T.preventDefault();const X=Number(fe.roleId),Ce=fe.mobile.replace(/[^\d]/g,"");if(!Ce||!X){Et({kind:"error",text:t("portal:admin.inviteRequired","Enter a mobile number and pick a role.")});return}const Nr=`+61${Ce.replace(/^0/,"")}`;tn(!0),Et(null),Mu({phone:Nr,roleId:X}).then(Lr=>{Et({kind:"success",text:t("portal:admin.inviteSentNotice",{phone:Lr.data.phone,defaultValue:"Invite sent to {{phone}}."})}),Be({mobile:"",roleId:""}),Ve()}).catch(()=>Et({kind:"error",text:t("portal:admin.inviteSendFailed","We couldn't send that invite. Try again.")})).finally(()=>tn(!1))},An=T=>{Lt(T.id),Ne(null),Mu({phone:T.phone,roleId:T.roleId}).then(()=>Fu(T.id)).then(()=>{Ne(null),Ve()}).catch(()=>Ne({kind:"error",text:t("portal:admin.inviteResendFailed","We couldn't resend that invite. Try again.")})).finally(()=>Lt(null))},om=T=>{Lt(T.id),Ne(null),Fu(T.id).then(()=>{Ne(null),Ve()}).catch(()=>Ne({kind:"error",text:t("portal:admin.inviteRevokeFailed","We couldn't revoke that invite. Try again.")})).finally(()=>Lt(null))},lm=T=>{if(pe(null),T.memberCount>0){Se({roleId:T.roleId,kind:"blocked",memberCount:T.memberCount});return}Se({roleId:T.roleId,kind:"confirm"})},cm=T=>{Te(!0),Xj(T.roleId).then(()=>{pe({kind:"success",text:t("portal:admin.roleDeleted")}),Se(null),Re()}).catch(()=>pe({kind:"error",text:t("portal:admin.deleteFailed")})).finally(()=>Te(!1))},dm=r||i?5:4,um=n?5:4;return a.jsxs(Cn,{children:[a.jsx(Cr,{children:a.jsxs("div",{children:[a.jsx(Xt,{children:t("portal:common.eyebrow")}),a.jsx(en,{children:t("portal:admin.title")}),a.jsx(Qt,{children:t("portal:admin.lead")})]})}),a.jsxs(MR,{children:[a.jsxs(Uu,{$single:!n,children:[a.jsx(oe,{children:a.jsxs(ye,{children:[a.jsx(Le,{children:t("portal:admin.usersTitle")}),u.kind==="loading"&&a.jsxs("div",{"aria-busy":"true","aria-label":t("common:loading"),children:[a.jsx(it,{}),a.jsx(it,{}),a.jsx(it,{})]}),u.kind==="error"&&a.jsxs(Qe,{role:"alert",children:[t("portal:admin.usersLoadFailed"),a.jsx(we,{type:"button",onClick:an,children:t("common:retry")})]}),u.kind==="ready"&&u.users.length===0&&a.jsx(Qe,{children:t("portal:admin.usersEmpty")}),u.kind==="ready"&&u.users.length>0&&a.jsx(Fn,{children:a.jsxs(Un,{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{scope:"col",children:t("portal:admin.name")}),a.jsx("th",{scope:"col",children:t("portal:admin.email")}),a.jsx("th",{scope:"col",children:t("portal:admin.role")}),a.jsx("th",{scope:"col",children:t("portal:admin.status")}),(r||i)&&a.jsx("th",{scope:"col",children:t("portal:admin.actions")})]})}),a.jsxs("tbody",{children:[u.users.map(T=>a.jsxs("tr",{children:[a.jsxs("td",{children:[T.name," ",T.uid===e&&a.jsx(Hi,{children:t("portal:admin.you")})]}),a.jsx("td",{children:T.email||"-"}),a.jsx("td",{children:b===T.uid?a.jsx(eo,{ariaLabel:t("portal:admin.role"),value:R,onChange:X=>{$(X),ce(null),F(null)},roleOptions:rt}):T.roleName||"-"}),a.jsx("td",{children:pt(T)?a.jsx(Uo,{children:t("portal:admin.active")}):a.jsx(Hi,{children:t("portal:admin.suspended")})}),(r||i)&&a.jsx("td",{children:a.jsx(to,{children:b===T.uid?a.jsxs(a.Fragment,{children:[(Z==null?void 0:Z.uid)===T.uid&&a.jsx(Xe,{$danger:!0,role:"alert",children:Z.message}),(Z==null?void 0:Z.uid)===T.uid?a.jsx(Vr,{type:"button",disabled:N,onClick:()=>$t(T),children:t("portal:admin.saveUser")}):a.jsx(yn,{type:"button",disabled:N,onClick:()=>$t(T),children:t("portal:admin.saveUser")}),a.jsx(we,{type:"button",disabled:N,onClick:()=>{I(null),ce(null)},children:t("common:cancel")})]}):a.jsxs(a.Fragment,{children:[r&&a.jsx(we,{type:"button",onClick:()=>Y(T),children:t("portal:admin.editUser")}),i&&(pt(T)?a.jsx(Vr,{type:"button",disabled:he===T.uid,onClick:()=>Pr(T),children:t("portal:admin.suspend")}):a.jsx(we,{type:"button",disabled:he===T.uid,onClick:()=>Pr(T),children:t("portal:admin.reactivate")}))]})})})]},T.uid)),z&&a.jsx("tr",{children:a.jsx("td",{colSpan:dm,children:a.jsx(Xe,{$danger:z.kind==="error",role:z.kind==="error"?"alert":"status",children:z.text})})})]})]})})]})}),n&&a.jsx(oe,{children:a.jsxs(ye,{children:[a.jsx(Le,{children:t("portal:admin.addUserTitle")}),a.jsxs(Bu,{onSubmit:ht,children:[a.jsxs(Ae,{children:[a.jsxs("span",{children:[t("portal:admin.name"),a.jsx(jt,{children:"*"})]}),a.jsx(We,{"aria-required":"true",value:x.name,onChange:Ar("name")})]}),a.jsxs(Ae,{children:[t("portal:admin.email"),a.jsx(We,{inputMode:"email",type:"email",value:x.email,onChange:Ar("email")})]}),a.jsxs(Ae,{children:[a.jsxs("span",{children:[t("portal:admin.role"),a.jsx(jt,{children:"*"})]}),a.jsx(eo,{ariaRequired:!0,value:x.roleId,onChange:Or,roleOptions:rt,placeholder:t("portal:admin.selectRole")})]}),p.kind==="error"&&a.jsxs(Xe,{$danger:!0,role:"alert",children:[t("portal:admin.rolesUnavailable")," ",a.jsx(we,{type:"button",onClick:Re,children:t("common:retry")})]}),a.jsx(ei,{children:a.jsxs(yn,{type:"submit",disabled:v,children:[a.jsx(Ul,{"aria-hidden":"true"}),t("portal:admin.addUser")]})}),E&&a.jsx(Xe,{$danger:E.kind==="error",role:E.kind==="error"?"alert":"status",children:E.text})]})]})})]}),a.jsxs(Uu,{$single:!n,children:[a.jsx(oe,{children:a.jsxs(ye,{children:[a.jsxs(Le,{children:[a.jsx(qm,{"aria-hidden":"true"}),t("portal:admin.pending")]}),Ie.kind==="loading"&&a.jsxs("div",{"aria-busy":"true","aria-label":t("common:loading"),children:[a.jsx(it,{}),a.jsx(it,{})]}),Ie.kind==="error"&&a.jsxs(Qe,{role:"alert",children:[t("portal:admin.invitesLoadFailed","We couldn't load invites."),a.jsx(we,{type:"button",onClick:Ve,children:t("common:retry")})]}),Ie.kind==="ready"&&Ie.invites.length===0&&a.jsx(Qe,{children:t("portal:admin.invitesEmpty","No pending invites.")}),Ie.kind==="ready"&&Ie.invites.length>0&&a.jsx(Fn,{children:a.jsxs(Un,{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{scope:"col",children:t("portal:admin.invitePhone")}),a.jsx("th",{scope:"col",children:t("portal:admin.role")}),a.jsx("th",{scope:"col",children:t("portal:admin.status")}),a.jsx("th",{scope:"col",children:t("portal:admin.expiresOn","Expires")}),n&&a.jsx("th",{scope:"col",children:t("portal:admin.actions")})]})}),a.jsxs("tbody",{children:[Ie.invites.map(T=>a.jsxs("tr",{children:[a.jsx("td",{children:T.phone}),a.jsx("td",{children:T.roleName||"-"}),a.jsx("td",{children:a.jsx(Hi,{children:t("portal:admin.pending")})}),a.jsx("td",{children:HR(T.expiresAt)}),n&&a.jsx("td",{children:a.jsxs(to,{children:[a.jsx(we,{type:"button",disabled:He===T.id,onClick:()=>An(T),children:t("portal:admin.resend")}),a.jsx(Vr,{type:"button",disabled:He===T.id,onClick:()=>om(T),children:t("portal:admin.revoke")})]})})]},T.id)),ne&&a.jsx("tr",{children:a.jsx("td",{colSpan:um,children:a.jsx(Xe,{$danger:ne.kind==="error",role:ne.kind==="error"?"alert":"status",children:ne.text})})})]})]})})]})}),n&&a.jsx(oe,{children:a.jsxs(ye,{children:[a.jsx(Le,{children:t("portal:admin.inviteSectionTitle","Invite by Phone")}),a.jsxs(Bu,{onSubmit:da,children:[a.jsxs(Ae,{children:[a.jsxs("span",{children:[t("portal:admin.invitePhone"),a.jsx(jt,{children:"*"})]}),a.jsxs(UR,{children:[a.jsx(BR,{"aria-hidden":"true",children:"+61"}),a.jsx(We,{type:"tel",inputMode:"tel",autoComplete:"tel","aria-required":"true",value:fe.mobile,onChange:T=>{Be(X=>({...X,mobile:T.target.value})),Et(null)}})]})]}),a.jsxs(Ae,{children:[a.jsxs("span",{children:[t("portal:admin.role"),a.jsx(jt,{children:"*"})]}),a.jsx(eo,{ariaRequired:!0,value:fe.roleId,onChange:T=>{Be(X=>({...X,roleId:T})),Et(null)},roleOptions:rt,placeholder:t("portal:admin.selectRole")})]}),p.kind==="error"&&a.jsxs(Xe,{$danger:!0,role:"alert",children:[t("portal:admin.rolesUnavailable")," ",a.jsx(we,{type:"button",onClick:Re,children:t("common:retry")})]}),a.jsx(ei,{children:a.jsxs(yn,{type:"submit",disabled:Nt,children:[a.jsx(Ul,{"aria-hidden":"true"}),t("portal:admin.sendInvite","Send Invite")]})}),nn&&a.jsx(Xe,{$danger:nn.kind==="error",role:nn.kind==="error"?"alert":"status",children:nn.text})]})]})})]}),s&&a.jsx(oe,{children:a.jsxs(ye,{children:[a.jsxs(Le,{children:[a.jsx(Vm,{"aria-hidden":"true"}),t("portal:admin.rolesTitle")]}),p.kind==="loading"&&a.jsxs("div",{"aria-busy":"true","aria-label":t("common:loading"),children:[a.jsx(it,{}),a.jsx(it,{})]}),p.kind==="error"&&a.jsxs(Qe,{role:"alert",children:[t("portal:admin.rolesLoadFailed"),a.jsx(we,{type:"button",onClick:Re,children:t("common:retry")})]}),p.kind==="ready"&&p.roles.length===0&&a.jsx(Qe,{children:t("portal:admin.rolesEmpty")}),p.kind==="ready"&&p.roles.length>0&&a.jsx(Fn,{children:a.jsxs(Un,{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{scope:"col",children:t("portal:admin.role")}),a.jsx("th",{scope:"col",children:t("portal:admin.permissions")}),a.jsx("th",{scope:"col",children:t("portal:admin.members")}),(l||c)&&a.jsx("th",{scope:"col",children:t("portal:admin.actions")})]})}),a.jsx("tbody",{children:p.roles.map(T=>a.jsxs("tr",{children:[a.jsxs("td",{children:[T.roleName," ",T.isSystem&&a.jsx(Hi,{children:t("portal:admin.systemRole")})]}),a.jsx("td",{children:a.jsx(FR,{children:T.permissions.map(X=>a.jsx(Uo,{children:t(`portal:permissions.${X}`,X)},X))})}),a.jsx("td",{children:T.memberCount}),(l||c)&&a.jsx("td",{children:RR(T)?null:a.jsx(to,{children:(ae==null?void 0:ae.roleId)===T.roleId&&ae.kind==="confirm"?a.jsxs(a.Fragment,{children:[a.jsx(Xe,{$danger:!0,children:t("portal:admin.deleteConfirm")}),a.jsx(Vr,{type:"button",disabled:be,onClick:()=>cm(T),children:t("portal:admin.confirmDelete")}),a.jsx(we,{type:"button",disabled:be,onClick:()=>Se(null),children:t("common:cancel")})]}):a.jsxs(a.Fragment,{children:[l&&a.jsx(we,{as:Fe,to:`/portal/admin/roles/${T.roleId}`,children:t("portal:admin.editRole")}),c&&a.jsx(Vr,{type:"button",onClick:()=>lm(T),children:t("portal:admin.deleteRole")}),(ae==null?void 0:ae.roleId)===T.roleId&&ae.kind==="blocked"&&a.jsx(Xe,{$danger:!0,role:"alert",children:t("portal:admin.deleteBlocked",{count:ae.memberCount})})]})})})]},T.roleId))})]})}),a.jsxs(DR,{children:[a.jsx(Le,{children:t("portal:admin.permissions")}),a.jsx(Fn,{children:a.jsxs(Un,{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{scope:"col"}),Do.map(T=>a.jsx("th",{scope:"col",children:t(T.nameKey)},T.id))]})}),a.jsx("tbody",{children:Nl.map(T=>a.jsxs("tr",{children:[a.jsx("th",{scope:"row",children:t(T.labelKey)}),Do.map(X=>{const Ce=ER(X,T);return a.jsx("td",{children:a.jsx($R,{$active:Ce,children:Ce?a.jsx(Vs,{"aria-hidden":"true"}):a.jsx("span",{"aria-hidden":"true",children:"–"})})},X.id)})]},T.id))})]})})]}),O&&a.jsx(Xe,{$danger:O.kind==="error",role:O.kind==="error"?"alert":"status",children:O.text}),o&&a.jsx(ei,{children:a.jsxs(yn,{as:Fe,to:"/portal/admin/roles/new",children:[a.jsx(Bm,{"aria-hidden":"true"}),t("portal:admin.createRole")]})})]})})]})]})},Mt=({children:t})=>{const e=ea(),n=Ke();if(!e){const r=jn("portalLogin");return a.jsx(ct,{to:Jo(),replace:!0,state:r?{from:`${n.pathname}${n.search}`}:void 0})}return a.jsx(a.Fragment,{children:t})},Nn=({children:t,code:e})=>Ut(e)?a.jsx(a.Fragment,{children:t}):a.jsx(ct,{to:"/portal",replace:!0});function WR(t){return a.jsx("svg",{viewBox:"106.147 26.99 14.656 13.858","aria-hidden":"true",focusable:"false",...t,children:a.jsx("path",{fill:"currentColor",d:Om})})}const qR={check:a.jsx("path",{d:"M5 10.5L8.4 14L15 6.5",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"}),truck:a.jsxs(a.Fragment,{children:[a.jsx("path",{d:"M11 13V5H3V13H11ZM11 13H17V10.5L14.5 8H11V13Z",strokeWidth:"1.7",strokeLinejoin:"round"}),a.jsx("path",{d:"M6 16C6.82843 16 7.5 15.3284 7.5 14.5C7.5 13.6716 6.82843 13 6 13C5.17157 13 4.5 13.6716 4.5 14.5C4.5 15.3284 5.17157 16 6 16Z",strokeWidth:"1.5"}),a.jsx("path",{d:"M14 16C14.8284 16 15.5 15.3284 15.5 14.5C15.5 13.6716 14.8284 13 14 13C13.1716 13 12.5 13.6716 12.5 14.5C12.5 15.3284 13.1716 16 14 16Z",strokeWidth:"1.5"})]}),box:a.jsxs(a.Fragment,{children:[a.jsx("path",{d:"M4 6.5L10 3L16 6.5V13.5L10 17L4 13.5V6.5Z",strokeWidth:"1.7"}),a.jsx("path",{d:"M4.5 6.5L10 9.5M10 9.5L15.5 6.5M10 9.5V16.5",strokeWidth:"1.7"})]}),flag:a.jsx("path",{d:"M6 17V3M6 4H14L12.5 7L14 10H6",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round"})},KR=({icon:t,className:e})=>a.jsx("svg",{className:e,viewBox:"0 0 20 20",fill:"none",stroke:"currentColor","aria-hidden":"true",focusable:"false",children:qR[t]}),Vi=.4,Wi=.5;function Us(t,e){return 100/(t-1+2*e)}function zu(t,e,n){return(n+t)*Us(e,n)}function qi(t,e,n){return(n+t+.5)*Us(e,n)}function cn(t){return`${Math.round(t*1e3)/1e3}%`}const tr=t=>B`
  @media (max-width: ${Bf}px) {
    ${t}
  }
`,GR=f.div`
  position: relative;
  width: 100%;
  max-width: 1100px;
  height: 130px;
  margin: 0 auto;
  font-family: ${_};
  ${tr(B`
    height: 112px;
  `)}
`,ZR=f.div`
  position: absolute;
  inset: 0 34px;
  ${tr(B`
    inset: 0;
  `)}
`,YR=f.ol`
  position: absolute;
  inset: 0;
  margin: 0;
  padding: 0;
  list-style: none;
`,JR=f.div`
  position: absolute;
  top: 29px;
  left: 0;
  right: 0;
  --point-depth: 9px;
  height: 18px;
  border-radius: 6px;
  overflow: hidden;
  background: var(--trk-rail-future);
  ${tr(B`
    top: 28px;
    --point-depth: 7px;
    height: 14px;
    border-radius: 5px;
  `)}
`,nm=f.span`
  position: absolute;
  inset-block: 0;
  left: calc(var(--seg-l) - var(--underlap));
  width: calc(var(--seg-w) + var(--underlap));
  --underlap: ${({$underPoint:t})=>t?"var(--point-depth)":"0px"};
  background: ${({$fill:t})=>t};
  ${tr(B`
    left: calc(var(--seg-lm) - var(--underlap));
    width: calc(var(--seg-wm) + var(--underlap));
  `)}
`,XR=f(nm)`
  &[data-final="true"] { clip-path: none; }
  clip-path: polygon(0 0, calc(100% - var(--point-depth)) 0, 100% 50%,
    calc(100% - var(--point-depth)) 100%, 0 100%);
`,QR=f(WR)`
  position: absolute;
  top: 50%;
  right: 4px;
  color: ${je.onPrimary};
  width: 13.75px;
  height: 13px;
  transform: translateY(-50%);
  pointer-events: none;

  ${tr(B`
    right: 3px;
    width: 10.58px;
    height: 10px;
  `)}
`,eC=f.li`
  position: static;
  height: 0;
  margin: 0;
`,tC={done:B`
    background: ${je.blue};
    color: ${je.onPrimary};
  `,"current-blue":B`
    background: ${je.blue};
    color: ${je.onPrimary};
  `,"current-amber":B`
    background: ${je.amber};
    color: ${je.onPrimary};
  `,future:B`
    background: var(--trk-marker-future);
    color: var(--trk-icon-future);
  `},nC=f.span`
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
  ${({$variant:t})=>tC[t]}

  svg {
    width: 20px;
    height: 20px;
  }

  ${({$current:t})=>tr(B`
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
`,rC=f.span`
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

  ${({$state:t})=>tr(B`
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
`,iC=f.span`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  border: 0;
`;function sC(t){return t.state==="done"?je.blue:t.state==="current"?t.tone==="amber"?"var(--trk-rail-current-amber)":"var(--trk-rail-current-blue)":"var(--trk-rail-future)"}function aC(t){return t.state==="current"?t.tone==="amber"?"current-amber":"current-blue":t.state}const rm=({milestones:t,timezone:e,label:n})=>{const{t:r}=G(),i=t.length,s=Us(i,Vi),o=Us(i,Wi),l=t.findIndex(u=>u.state!=="done"),c=l===-1?i:l,d=(u,h=u)=>{const p=u===0?0:qi(u-1,i,Vi),m=h===i-1?100:qi(h,i,Vi),x=u===0?0:qi(u-1,i,Wi),y=h===i-1?100:qi(h,i,Wi);return{"--seg-l":cn(p),"--seg-w":cn(m-p),"--seg-lm":cn(x),"--seg-wm":cn(y-x)}};return a.jsx(GR,{"data-testid":"milestone-rail","data-count":i,children:a.jsxs(ZR,{style:{"--col":cn(s),"--col-m":cn(o)},children:[a.jsxs(JR,{"aria-hidden":"true","data-testid":"milestone-rail-track",children:[t.slice(c).map((u,h)=>a.jsx(nm,{"data-testid":"milestone-rail-segment","data-state":u.state,$underPoint:c>0&&h===0,$fill:sC(u),style:d(c+h)},u.key)),c>0&&a.jsx(XR,{"data-testid":"milestone-rail-complete","data-final":c===i,$fill:je.blue,style:d(0,c-1),children:c<i&&a.jsx(QR,{})})]}),a.jsx(YR,{"aria-label":n,children:t.map((u,h)=>{const p=u.state==="current";return a.jsxs(eC,{"data-testid":"milestone","data-key":u.key,"data-state":u.state,"data-tone":p?u.tone:void 0,"aria-current":p?"step":void 0,style:{"--x":cn(zu(h,i,Vi)),"--x-m":cn(zu(h,i,Wi))},children:[a.jsx(nC,{"aria-hidden":"true","data-testid":"milestone-marker",$variant:aC(u),$current:p,children:a.jsx(KR,{icon:u.icon})}),a.jsxs(rC,{$state:u.state,children:[a.jsx("span",{className:"label",children:r(u.labelKey)}),a.jsx("span",{className:"date",children:u.at?vt(u.at,e):"—"}),a.jsx(iC,{children:r(`tracking:guest.milestoneState.${u.state}`)})]})]},u.key)})})]})})},oC=f(At)`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 24px 28px 22px;
  ${le(B`
    gap: 12px;
    padding: 16px 14px 14px;
  `)}
`,lC=f.div`
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
  font-family: ${_};
  font-size: 12px;
  font-weight: 600;
  color: var(--trk-muted);
`;const $l=()=>null,cC=({shipment:t,asOf:e})=>{const{t:n}=G(),r=Tl(t,"public");return a.jsxs(oC,{"data-testid":"summary-card","aria-label":n("tracking:guest.summary.progress"),children:[a.jsx(Hf,{shipment:t,taxonomy:"public"}),r&&a.jsx(rm,{milestones:r,timezone:t.timezone,label:n("tracking:guest.summary.progress")}),a.jsx(PT,{shipment:t,now:e})]})},im=({result:t,onRetry:e,backTo:n})=>{const{t:r}=G(),i=t.kind;return a.jsx(QT,{testId:`lookup-${i}`,text:r(`tracking:guest.error.${i}`),onRetry:i==="unavailable"?e:void 0,children:n&&a.jsx(la,{as:Fe,to:n,children:r("tracking:guest.result.back")})})},dC=({loading:t,result:e,onRetry:n,nextStopMapOn:r,asOf:i})=>a.jsx(Cl,{children:a.jsx(sa,{children:a.jsxs(aa,{children:[a.jsx($l,{}),t&&a.jsx(Yf,{}),!t&&(e==null?void 0:e.kind)==="ok"&&a.jsxs(a.Fragment,{children:[a.jsx(cC,{shipment:e.shipment,asOf:i}),a.jsx(Kf,{shipment:e.shipment}),a.jsx(Ol,{enabled:r,shipment:e.shipment,audience:"public",layout:"wide"}),a.jsxs(lC,{children:[a.jsx($T,{shipment:e.shipment}),a.jsx(BT,{shipment:e.shipment})]})]}),!t&&e&&e.kind!=="ok"&&a.jsx(im,{result:e,onRetry:n,backTo:"/track"})]})})}),uC={baseURL:void 0},sm=ve.create(uC),hC=async t=>{const e=t.data;if(Number(e==null?void 0:e.code)>0)throw e;return e};sm.interceptors.response.use(hC,t=>Promise.reject(t));const pC="/api/v2/guest/shipment/track",Hu=["created","scheduled","ready_for_pickup","in_transit","delivered","completed","cancelled"],fC=["order_created","scheduled","picked_up","arrived","signed","completed","rescheduled","item_exception","cancelled"],mC=["rescheduled","items_missing","items_damaged","wrong_delivery","cancelled"],no=k.object({suburb:k.string(),state:k.string(),postcode:k.string()}),am=k.object({orderId:k.string(),carrierName:k.string().nullable(),stage:k.enum(Hu),badge:k.enum([...Hu,"exception"]),proofType:k.enum(["signature","contactless","qrcode"]).nullable(),estimatedDelivery:k.object({date:k.string(),timeWindow:k.enum(["AM","PM"]).nullable()}).nullable(),shipDate:k.string().nullable(),origin:no.nullable(),destination:no.nullable(),packages:k.object({current:k.number().int(),affected:k.number().int()}),timezone:k.string().nullable().transform(t=>t??""),exceptions:k.array(k.object({type:k.enum(mC),occurredAt:k.string().nullable(),count:k.number().int().optional()})),travelHistory:k.array(k.object({time:k.string(),activity:k.enum(fC),location:no.nullable()}))}),gC=/name|phone|mobile|email|street|address|driver|^lat|lat$|lng|latitude|longitude|coordinate|polyline|^path$|gps|position|route|^stops?$|^plan|vehicle|plate|signature|photo|image|price|pricing|^uid$|uid$/i,xC=new Set(["carrierName"]);function Bo(t,e=""){return Array.isArray(t)?t.flatMap((n,r)=>Bo(n,`${e}[${r}]`)):t&&typeof t=="object"?Object.entries(t).flatMap(([n,r])=>{const i=e?`${e}.${n}`:n;return[...!xC.has(n)&&gC.test(n)?[i]:[],...Bo(r,i)]}):[]}function yC(t){const e=t.trim();return/^[A-Za-z0-9]{1,9}$/.test(e)?e.toUpperCase():null}function Vu(t){const e=Number(t==null?void 0:t.code);if(e===39)return{kind:"notFound"};if(e===7)return{kind:"format"};if(e!==0)return{kind:"unavailable"};if(Bo(t==null?void 0:t.data).length>0)return{kind:"unavailable"};const n=am.safeParse(t==null?void 0:t.data);return n.success?{kind:"ok",shipment:n.data}:{kind:"unavailable"}}async function vC(t){var e;try{const n=await sm.post(pC,{orderId:t});return Vu(n)}catch(n){return((e=n==null?void 0:n.response)==null?void 0:e.status)===429?{kind:"rateLimited"}:n&&typeof n=="object"&&"code"in n&&typeof n.code=="number"?Vu(n):{kind:"unavailable"}}}function Dl(t){const[e,n]=S.useState(()=>t!=null&&t.shipment?{kind:"done",orderId:t.orderId,result:{kind:"ok",shipment:t.shipment}}:{kind:"idle"}),r=S.useRef(0),i=S.useRef(!0);S.useEffect(()=>(i.current=!0,()=>{i.current=!1}),[]);const s=S.useCallback(async l=>{const c=++r.current,d=yC(l);if(!d){const h={kind:"format"};return n({kind:"done",orderId:l.trim(),result:h}),h}n({kind:"loading",orderId:d});const u=await vC(d);return!i.current||c!==r.current?null:(n({kind:"done",orderId:d,result:u}),u)},[]),o=S.useRef(t&&!t.shipment?t.orderId:null);return S.useEffect(()=>{if(o.current){const l=o.current;o.current=null,s(l)}},[s]),{state:e,lookup:s}}const bC=()=>{const{t}=G(),e=_r(),{state:n,lookup:r}=Dl(),[i,s]=S.useState(""),o=async()=>{const c=await r(i);(c==null?void 0:c.kind)==="ok"&&(Mf("public",c.shipment.orderId),e("/track/result",{state:{orderId:c.shipment.orderId,shipment:c.shipment}}))},l=n.kind==="done"?n.result:null;return a.jsxs(Il,{title:t("tracking:guest.pageTitle.entry"),audience:"public",children:[a.jsx(Rl,{eyebrow:t("tracking:guest.entry.eyebrow"),title:t("tracking:guest.entry.title"),subtitle:t("tracking:guest.entry.subtitle")}),a.jsx(Cl,{children:a.jsx(sa,{children:a.jsxs(aa,{style:{paddingTop:24},children:[a.jsx($l,{}),a.jsx(Zf,{value:i,onChange:s,onSubmit:o,busy:n.kind==="loading",message:Gf(l,t)})]})})})]})},wC=f.div`
  display: grid;
  /* 567:463 / 567:507: the status column is 830px, flush with the search bar */
  grid-template-columns: minmax(0, 830px) minmax(0, 1fr);
  gap: 14px;
  align-items: start;
  @media (max-width: 1024px) {
    grid-template-columns: minmax(0, 1fr);
  }
`,kC=f.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,SC=f(At)`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 24px 26px;
  ${le(B`
    gap: 12px;
    padding: 16px 14px 14px;
  `)}
`,EC=f.p`
  margin: -6px 0 4px;
  font-family: ${_};
  font-size: 26px;
  font-weight: 700;
  line-height: 31px;
  color: var(--trk-ink);
  ${le(B`
    font-size: 20px;
    line-height: 24px;
  `)}
`,Wu=f.p`
  margin: -8px 0 0;
  font-family: ${_};
  font-size: ${({$strong:t})=>t?18:14}px;
  font-weight: ${({$strong:t})=>t?600:400};
  line-height: 1.3;
  color: ${({$strong:t})=>t?"var(--trk-ink)":"var(--trk-muted)"};
  ${({$strong:t})=>le(B`
      font-size: ${t?15:12}px;
    `)}
`,qu=f(At)`
  padding: 22px;
  ${le(B`
    padding: 16px;
  `)}
`,Ku=f(Ot).attrs({as:"h2"})`
  display: block;
  margin: 0;
`,_C=f.dl`
  margin: 10px 0 0;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    min-height: 38px;
  }

  dt {
    font-family: ${_};
    font-size: 12px;
    color: var(--trk-muted);
  }

  dd {
    margin: 0;
    font-family: ${_};
    font-size: 13px;
    text-align: right;
    color: var(--trk-ink);
  }
`,jC=f.p`
  margin: 12px 0 14px;
  font-family: ${_};
  font-size: 14px;
  line-height: 1.45;
  color: var(--trk-muted);
`,TC=f(la)`
  width: 100%;
`,IC=f.div`
  width: min(100%, 830px);
`,RC=f.details`
  summary {
    cursor: pointer;
    font-family: ${_};
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
`;function CC(t,e){const n=oa(t,e),r=Vf(t).filter(([s])=>s!=="shipDate"),i=r.findIndex(([s])=>s==="packages");return r.splice(i<0?r.length:i,0,["eta",n.label,n.value]),r}const AC=({shipment:t,nextStopMapOn:e,nextStopPanel:n,asOf:r})=>{const{t:i}=G(),s=oa(t,r),o=CC(t,r),l=Tl(t,"consignee"),c=t.travelHistory[t.travelHistory.length-1]??null,d=t.timezone,u=t.travelHistory.length;return a.jsxs(wC,{children:[a.jsxs(aa,{children:[a.jsxs(SC,{"data-testid":"consignee-status-card",children:[a.jsx(Hf,{shipment:t,taxonomy:"consignee"}),a.jsx(Ot,{children:s.label}),a.jsx(EC,{"data-testid":"eta-value",children:s.value}),l&&a.jsx(rm,{milestones:l,timezone:d,label:i("tracking:guest.summary.progress")}),a.jsx(Ot,{children:i("tracking:guest.latest.label")}),a.jsx(Wu,{$strong:!0,"data-testid":"latest-value",children:i(c?`tracking:guest.activity.${c.activity}`:"tracking:guest.latest.none")}),c&&a.jsx(Wu,{children:[vt(c.time,d,!0),Pi(c.time,d),Ni(c.location)].filter(Boolean).join(" · ")}),u>0&&a.jsxs(RC,{"data-testid":"consignee-history",children:[a.jsx("summary",{children:i("tracking:guest.consignee.historyToggle",{count:u})}),a.jsx(Wf,{shipment:t})]})]}),a.jsx(Kf,{shipment:t,showContact:!1}),n??a.jsx(Ol,{enabled:e,shipment:t,audience:"receiver",layout:"column"})]}),a.jsxs(kC,{children:[a.jsxs(qu,{"data-testid":"consignee-details-card","aria-labelledby":"trk-c1-details",children:[a.jsx(Ku,{id:"trk-c1-details",children:i("tracking:guest.details.title")}),a.jsx(_C,{children:o.map(([h,p,m])=>a.jsxs("div",{"data-row":h,children:[a.jsx("dt",{children:p}),a.jsx("dd",{children:m})]},h))})]}),a.jsxs(qu,{"data-testid":"consignee-help-card","aria-labelledby":"trk-c1-help",children:[a.jsx(Ku,{id:"trk-c1-help",children:i("tracking:guest.help.title")}),a.jsx(jC,{children:i("tracking:guest.help.body")}),a.jsx(TC,{href:qf(`Delivery question — ${t.orderId}`),children:i("tracking:guest.help.contact")})]})]})]})},OC=({shipment:t,loading:e})=>{const{t:n}=G();return a.jsx(vi,{role:"status","aria-live":"polite","data-testid":"consignee-announcer",children:e?n("tracking:guest.error.loading"):t?a.jsx(PC,{shipment:t}):""})},PC=({shipment:t})=>{const{t:e}=G(),n=oa(t),r=Uf(t,"consignee");return a.jsx(a.Fragment,{children:e("tracking:guest.consignee.resultStatus",{status:e(r.labelKey),label:n.label,value:n.value})})},NC=()=>{const{t}=G(),e=yr("nextStopMap"),[n]=S.useState(()=>Ff("consignee")),{state:r,lookup:i}=Dl(n?{orderId:n}:null),[s,o]=S.useState(n??""),l=async h=>{const p=await i(h);p&&(p.kind==="ok"?Mf("consignee",p.shipment.orderId):(p.kind==="notFound"||p.kind==="format")&&aT("consignee"))};S.useEffect(()=>{r.kind==="done"&&r.result.kind==="ok"&&o(r.result.shipment.orderId)},[r]);const c=r.kind==="done"?r.result:null,d=r.kind==="done"?r.orderId:s,u=(c==null?void 0:c.kind)==="format"?Gf(c,t):null;return a.jsxs(Il,{title:t("tracking:guest.pageTitle.consignee"),audience:"receiver",children:[a.jsx(Rl,{eyebrow:t("tracking:guest.consignee.eyebrow"),title:t("tracking:guest.consignee.title"),subtitle:t("tracking:guest.consignee.subtitle")}),a.jsx(Cl,{children:a.jsx(sa,{children:a.jsxs(aa,{style:{paddingTop:18},children:[a.jsx($l,{}),a.jsx(IC,{children:a.jsx(Zf,{value:s,onChange:o,onSubmit:()=>void l(s),busy:r.kind==="loading",message:u})}),a.jsx(OC,{loading:r.kind==="loading",shipment:(c==null?void 0:c.kind)==="ok"?c.shipment:null}),r.kind==="loading"&&a.jsx(Yf,{}),(c==null?void 0:c.kind)==="ok"&&a.jsx(AC,{shipment:c.shipment,nextStopMapOn:e}),c&&c.kind!=="ok"&&c.kind!=="format"&&a.jsx(im,{result:c,onRetry:()=>void l(d)})]})})})]})},LC=()=>{const{t}=G(),e=Ke(),n=_r(),r=Pm(),i=yr("nextStopMap"),s=e.state??null,[o]=S.useState(()=>{const h=typeof(s==null?void 0:s.orderId)=="string"?s.orderId:null;if(h){const m=r==="PUSH"?am.safeParse(s==null?void 0:s.shipment):null;return{orderId:h,shipment:m!=null&&m.success?m.data:null}}const p=Ff("public");return p?{orderId:p,shipment:null}:null}),{state:l,lookup:c}=Dl(o);if(S.useEffect(()=>{(s==null?void 0:s.shipment)!==void 0&&o&&n(e.pathname,{replace:!0,state:{orderId:o.orderId}})},[]),!o)return a.jsx(ct,{to:"/track",replace:!0});const d=l.kind!=="done",u=l.kind==="done"?l.result:null;return a.jsxs(Il,{title:t("tracking:guest.pageTitle.result"),audience:"public",children:[a.jsx(Rl,{backTo:{to:"/track",label:t("tracking:guest.result.back")},title:t("tracking:guest.result.title"),subtitle:t("tracking:guest.result.subtitle"),focusTitle:!0}),a.jsx(dC,{loading:d,result:u,onRetry:()=>void c(o.orderId),nextStopMapOn:i})]})},$C=()=>{const{token:t=""}=qo(),{search:e}=Ke(),n=yr("consigneeTrack");return t==="result"?a.jsx(LC,{}):t==="delivery"?n?a.jsx(NC,{}):a.jsx(ct,{to:{pathname:"/track",search:e},replace:!0}):a.jsx(ct,{to:{pathname:"/track",search:e},replace:!0})},DC=f.div`
  min-height: 100vh;
  background-color: ${t=>t.theme.background};
  color: ${t=>t.theme.text.primary};
  transition: background-color 0.3s ease, color 0.3s ease;
`,MC="https://www.senditgo.com",Ln={"/":{title:"SenditGo — Transportation Management System",description:"SenditGo — intelligent transport management, launching 2027. Our AI, SAM, weighs thousands of combinations and hands back a dispatch-ready plan in seconds. Get early access."},"/install":{title:"Get the SenditGo driver app",description:"Install the SenditGo driver app for iOS or Android — scan the QR code or tap your store to download and start running deliveries."},"/company":{title:"About SenditGo",description:"SenditGo is intelligent transport management for local and last-mile fleets, launching 2027."},"/about":{title:"About SenditGo",description:"Who SenditGo is, how we work, and where we are going — intelligent transport management for local and last-mile fleets."},"/about-v1":{title:"About SenditGo — story demo",description:"Local demo of the SenditGo story About page. Not a shipping surface."},"/contact":{title:"Contact SenditGo",description:"Book a product demo, ask about plans and pricing, integrations, or find the right solution for your fleet."},"/privacy":{title:"Privacy Policy — SenditGo",description:"How SenditGo collects, uses, and protects personal and operational data across its fleet platform and driver app."},"/account-deletion":{title:"Account & Data Deletion — SenditGo",description:"How to request deletion of your SenditGo account and the associated data, and what gets removed."},"/data-safety":{title:"Data Safety — SenditGo",description:"How SenditGo handles, secures, and shares operational and location data across the platform and driver app."},"/portal/login":{title:"Sign In — SenditGo",description:"Sign in to the SenditGo portal."},"/portal/orders":{title:"Orders — SenditGo",description:"Track and manage your SenditGo orders."},"/portal/orders/new":{title:"Create Order — SenditGo",description:"Prepare a shipment draft in the SenditGo portal."},"/portal/orders/import":{title:"Import Orders — SenditGo",description:"Validate a CSV order batch before import."},"/portal/orders/:salesOrderId":{title:"Order Detail — SenditGo",description:"Review SenditGo order tracking, handoff, and package detail."},"/portal/billing":{title:"Billing & Payments — SenditGo",description:"How your SenditGo account is billed and paid."},"/portal/admin/users":{title:"Users & Roles — SenditGo",description:"Manage portal users, roles, and permissions in SenditGo."},"/portal/admin/roles/new":{title:"Create Role — SenditGo",description:"Create a portal role and choose its permissions."},"/portal/admin/roles/:roleId":{title:"Edit Role — SenditGo",description:"Edit a portal role and its permissions."}};function FC(t){const e=t.toLowerCase();return e.startsWith("/track/")?Ln["/track"]??Ln["/"]:e.startsWith("/portal/orders/")&&e!=="/portal/orders/new"&&e!=="/portal/orders/import"?Ln["/portal/orders/:salesOrderId"]:e.startsWith("/portal/admin/roles/")?e==="/portal/admin/roles/new"?Ln["/portal/admin/roles/new"]:Ln["/portal/admin/roles/:roleId"]:Ln[e]??Ln["/"]}function UC(){const{pathname:t}=Ke(),e=t.replace(/\/+$/,"")||"/",n=FC(e),r=`${MC}${e}`,i=t.toLowerCase(),s=i.startsWith("/portal"),o=i.startsWith("/track/"),l=i==="/about-v1";return a.jsxs(sh,{children:[a.jsx("title",{children:n.title}),a.jsx("meta",{name:"description",content:n.description}),a.jsx("link",{rel:"canonical",href:r}),(s||o||l)&&a.jsx("meta",{name:"robots",content:"noindex"}),a.jsx("meta",{property:"og:title",content:n.title}),a.jsx("meta",{property:"og:description",content:n.description}),a.jsx("meta",{property:"og:url",content:r}),a.jsx("meta",{name:"twitter:title",content:n.title}),a.jsx("meta",{name:"twitter:description",content:n.description})]})}function BC(){const{search:t}=Ke();return S.useEffect(()=>{sx()},[t]),null}function zC(){const{search:t}=Ke();return jn("aboutPage")?a.jsx(rE,{}):a.jsx(ct,{to:{pathname:"/company",search:t},replace:!0})}function HC(){const{search:t}=Ke();return jn("aboutV1")?a.jsx(cE,{}):a.jsx(ct,{to:{pathname:"/",search:t},replace:!0})}function VC(){const{search:t}=Ke();return jn("guestTrack")?a.jsx(bC,{}):a.jsx(ct,{to:{pathname:"/",search:t},replace:!0})}function WC(){const{search:t}=Ke();return jn("guestTrack")?a.jsx($C,{}):a.jsx(ct,{to:{pathname:"/",search:t},replace:!0})}function qC(){const{search:t}=Ke();return a.jsx(ct,{to:{pathname:"/",search:t},replace:!0})}function KC(){const{search:t}=Ke();return jn("portalLogin")?a.jsx(XI,{}):a.jsx(ct,{to:{pathname:"/",search:t},replace:!0})}function GC(){var n;const t=dt(r=>r.permissionList),e=((n=xf.flatMap(r=>r.items).find(r=>r.permission===null||t.includes(r.permission)))==null?void 0:n.path)??"/portal/billing";return a.jsx(ct,{to:e,replace:!0})}function ZC(){return a.jsxs(Nm,{children:[a.jsx(Og,{}),a.jsx(DC,{children:a.jsxs(Lm,{basename:"/tms-official-web-preview/",children:[a.jsx(BC,{}),a.jsx(UC,{}),a.jsxs($m,{children:[a.jsx(Ee,{path:"/",element:a.jsx(FE,{})}),a.jsx(Ee,{path:"/install",element:a.jsx(QS,{})}),a.jsx(Ee,{path:"/company",element:a.jsx(dE,{})}),a.jsx(Ee,{path:"/about",element:a.jsx(zC,{})}),a.jsx(Ee,{path:"/about-v1",element:a.jsx(HC,{})}),a.jsx(Ee,{path:"/contact",element:a.jsx(fE,{})}),a.jsx(Ee,{path:"/privacy",element:a.jsx(gE,{})}),a.jsx(Ee,{path:"/account-deletion",element:a.jsx(xE,{})}),a.jsx(Ee,{path:"/data-safety",element:a.jsx(vE,{})}),a.jsx(Ee,{path:"/portal/login",caseSensitive:!0,element:a.jsx(KC,{})}),a.jsx(Ee,{path:"/track",caseSensitive:!0,element:a.jsx(VC,{})}),a.jsx(Ee,{path:"/track/:token",caseSensitive:!0,element:a.jsx(WC,{})}),a.jsx(Ee,{caseSensitive:!0,path:"/portal/orders",element:a.jsx(Mt,{children:a.jsx(Nn,{code:me.LIST,children:a.jsx(pR,{})})})}),a.jsx(Ee,{caseSensitive:!0,path:"/portal/orders/new",element:a.jsx(Mt,{children:a.jsx(Nn,{code:me.ADD,children:a.jsx(s_,{})})})}),a.jsx(Ee,{caseSensitive:!0,path:"/portal/orders/import",element:a.jsx(Mt,{children:a.jsx(Nn,{code:me.IMPORT,children:a.jsx(E_,{})})})}),a.jsx(Ee,{caseSensitive:!0,path:"/portal/orders/:salesOrderId",element:a.jsx(Mt,{children:a.jsx(Nn,{code:me.LIST,children:a.jsx(jI,{})})})}),a.jsx(Ee,{caseSensitive:!0,path:"/portal/billing",element:a.jsx(Mt,{children:a.jsx(MI,{})})}),a.jsx(Ee,{caseSensitive:!0,path:"/portal/admin/users",element:a.jsx(Mt,{children:a.jsx(Nn,{code:re.USER_LIST,children:a.jsx(VR,{})})})}),a.jsx(Ee,{caseSensitive:!0,path:"/portal/admin/roles/new",element:a.jsx(Mt,{children:a.jsx(Nn,{code:re.ROLE_ADD,children:a.jsx(Nu,{})})})}),a.jsx(Ee,{caseSensitive:!0,path:"/portal/admin/roles/:roleId",element:a.jsx(Mt,{children:a.jsx(Nn,{code:re.ROLE_EDIT,children:a.jsx(Nu,{})})})}),a.jsx(Ee,{path:"/portal",caseSensitive:!0,element:a.jsx(Mt,{children:a.jsx(GC,{})})}),a.jsx(Ee,{path:"*",element:a.jsx(qC,{})})]})]})})]})}async function YC(){}YC().then(()=>{mm.createRoot(document.getElementById("root")).render(a.jsx(W.StrictMode,{children:a.jsx(ih,{children:a.jsx(ZC,{})})}))});
