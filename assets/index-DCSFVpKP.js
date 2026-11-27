const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CreateOrderPage-Bl6Mw6w4.js","assets/client-CG7M8TvS.js","assets/FleetImpact-D666L5_c.js","assets/FleetImpact-CTUOmyCT.css","assets/CarrierProvider-DhAnU5QC.js","assets/PortalShell-C5Ir9nqR.js","assets/ImportOrdersPage-Bl4mp2mk.js","assets/api-B1EnflDK.js","assets/PortalTables-Dtu0XXJs.js","assets/OrderDetailPage-Bm-CyaP0.js","assets/apiRoutes-KIAJf1KC.js","assets/index-jPvTCT1d.js","assets/DeliveryProgress-CtmDmGYd.js","assets/Status-DKt8rNyR.js","assets/arrow-left-CKYADNOU.js","assets/check-t_v-wtVN.js","assets/CheckOutlined-C9GD3mKe.js","assets/StatusPill-DkrItMpS.js","assets/BillingPage-JGYTw4-A.js","assets/LoginPage-DMPZVPV1.js","assets/OrdersPage-nheUd72r.js","assets/Select-BSeOWcGI.js","assets/RoleFormPage-r1Nyu2F3.js","assets/UsersRolesPage-DG7zzfyD.js","assets/TrackEntryPage-kkpLd52S.js","assets/useShipmentLookup-ElCk8QBJ.js","assets/TrackResultPage-BUWU66EW.js"])))=>i.map(i=>d[i]);
var Xc=Object.defineProperty;var Qc=(t,e,n)=>e in t?Xc(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var _e=(t,e,n)=>Qc(t,typeof e!="symbol"?e+"":e,n);import{r as S,g as Bi,R as k,j as d,p as Et,b as Zc}from"./client-CG7M8TvS.js";import{w as Ca,x as ed,y as td,z as nd,L as rd,A as Mn,E as id,G as st,H as sd,J as E,U as N,K as Hi,M as od,N as wr,Q as Pe,V as Vi,X as Ae,h as rr,Y as ad,Z as ld,u as Pa,S as Aa,_ as cd,$ as dd,a0 as ud,a1 as Ut,a2 as zn,a3 as ir,f as hd,a4 as fd,j as pd,k as gd,r as Ss,m as md,P as yd,n as bd,C as vd,I as wd,F as xd,p as Ed,q as Sd,t as Td,a5 as qe,T as Rd,B as _d,a6 as Id,a7 as W}from"./FleetImpact-D666L5_c.js";function Oa(){const t=S.useRef(!1);return Ca(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function Cd(){const t=Oa(),[e,n]=S.useState(0),r=S.useCallback(()=>{t.current&&n(e+1)},[e]);return[S.useCallback(()=>ed.postRender(r),[r]),e]}class Pd extends S.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Ad({children:t,isPresent:e}){const n=S.useId(),r=S.useRef(null),i=S.useRef({width:0,height:0,top:0,left:0});return S.useInsertionEffect(()=>{const{width:s,height:o,top:l,left:a}=i.current;if(e||!r.current||!s||!o)return;r.current.dataset.motionPopId=n;const c=document.createElement("style");return document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${o}px !important;
            top: ${l}px !important;
            left: ${a}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[e]),S.createElement(Pd,{isPresent:e,childRef:r,sizeRef:i},S.cloneElement(t,{ref:r}))}const jr=({children:t,initial:e,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:s,mode:o})=>{const l=td(Od),a=S.useId(),c=S.useMemo(()=>({id:a,initial:e,isPresent:n,custom:i,onExitComplete:u=>{l.set(u,!0);for(const h of l.values())if(!h)return;r&&r()},register:u=>(l.set(u,!1),()=>l.delete(u))}),s?void 0:[n]);return S.useMemo(()=>{l.forEach((u,h)=>l.set(h,!1))},[n]),S.useEffect(()=>{!n&&!l.size&&r&&r()},[n]),o==="popLayout"&&(t=S.createElement(Ad,{isPresent:n},t)),S.createElement(nd.Provider,{value:c},t)};function Od(){return new Map}function kd(t){return S.useEffect(()=>()=>t(),[])}const bt=t=>t.key||"";function Nd(t,e){t.forEach(n=>{const r=bt(n);e.set(r,n)})}function jd(t){const e=[];return S.Children.forEach(t,n=>{S.isValidElement(n)&&e.push(n)}),e}const zi=({children:t,custom:e,initial:n=!0,onExitComplete:r,exitBeforeEnter:i,presenceAffectsLayout:s=!0,mode:o="sync"})=>{const l=S.useContext(rd).forceRender||Cd()[0],a=Oa(),c=jd(t);let u=c;const h=S.useRef(new Map).current,f=S.useRef(u),g=S.useRef(new Map).current,m=S.useRef(!0);if(Ca(()=>{m.current=!1,Nd(c,g),f.current=u}),kd(()=>{m.current=!0,g.clear(),h.clear()}),m.current)return S.createElement(S.Fragment,null,u.map(w=>S.createElement(jr,{key:bt(w),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:s,mode:o},w)));u=[...u];const x=f.current.map(bt),b=c.map(bt),R=x.length;for(let w=0;w<R;w++){const v=x[w];b.indexOf(v)===-1&&!h.has(v)&&h.set(v,void 0)}return o==="wait"&&h.size&&(u=[]),h.forEach((w,v)=>{if(b.indexOf(v)!==-1)return;const y=g.get(v);if(!y)return;const _=x.indexOf(v);let I=w;if(!I){const P=()=>{h.delete(v);const A=Array.from(g.keys()).filter(F=>!b.includes(F));if(A.forEach(F=>g.delete(F)),f.current=c.filter(F=>{const z=bt(F);return z===v||A.includes(z)}),!h.size){if(a.current===!1)return;l(),r&&r()}};I=S.createElement(jr,{key:bt(y),isPresent:!1,onExitComplete:P,custom:e,presenceAffectsLayout:s,mode:o},y),h.set(v,I)}u.splice(_,0,I)}),u=u.map(w=>{const v=w.key;return h.has(v)?w:S.createElement(jr,{key:bt(w),isPresent:!0,presenceAffectsLayout:s,mode:o},w)}),S.createElement(S.Fragment,null,h.size?u:u.map(w=>S.cloneElement(w)))},Ld="modulepreload",Dd=function(t){return"/tms-official-web-preview/"+t},Ts={},Oe=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){let o=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),a=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));i=o(n.map(c=>{if(c=Dd(c),c in Ts)return;Ts[c]=!0;const u=c.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":Ld,u||(f.as="script"),f.crossOrigin="",f.href=c,a&&f.setAttribute("nonce",a),document.head.appendChild(f),u)return new Promise((g,m)=>{f.addEventListener("load",g),f.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})};var Lr,Rs;function Md(){if(Rs)return Lr;Rs=1;var t=typeof Element<"u",e=typeof Map=="function",n=typeof Set=="function",r=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function i(s,o){if(s===o)return!0;if(s&&o&&typeof s=="object"&&typeof o=="object"){if(s.constructor!==o.constructor)return!1;var l,a,c;if(Array.isArray(s)){if(l=s.length,l!=o.length)return!1;for(a=l;a--!==0;)if(!i(s[a],o[a]))return!1;return!0}var u;if(e&&s instanceof Map&&o instanceof Map){if(s.size!==o.size)return!1;for(u=s.entries();!(a=u.next()).done;)if(!o.has(a.value[0]))return!1;for(u=s.entries();!(a=u.next()).done;)if(!i(a.value[1],o.get(a.value[0])))return!1;return!0}if(n&&s instanceof Set&&o instanceof Set){if(s.size!==o.size)return!1;for(u=s.entries();!(a=u.next()).done;)if(!o.has(a.value[0]))return!1;return!0}if(r&&ArrayBuffer.isView(s)&&ArrayBuffer.isView(o)){if(l=s.length,l!=o.length)return!1;for(a=l;a--!==0;)if(s[a]!==o[a])return!1;return!0}if(s.constructor===RegExp)return s.source===o.source&&s.flags===o.flags;if(s.valueOf!==Object.prototype.valueOf&&typeof s.valueOf=="function"&&typeof o.valueOf=="function")return s.valueOf()===o.valueOf();if(s.toString!==Object.prototype.toString&&typeof s.toString=="function"&&typeof o.toString=="function")return s.toString()===o.toString();if(c=Object.keys(s),l=c.length,l!==Object.keys(o).length)return!1;for(a=l;a--!==0;)if(!Object.prototype.hasOwnProperty.call(o,c[a]))return!1;if(t&&s instanceof Element)return!1;for(a=l;a--!==0;)if(!((c[a]==="_owner"||c[a]==="__v"||c[a]==="__o")&&s.$$typeof)&&!i(s[c[a]],o[c[a]]))return!1;return!0}return s!==s&&o!==o}return Lr=function(o,l){try{return i(o,l)}catch(a){if((a.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw a}},Lr}var Fd=Md();const Ud=Bi(Fd);var Dr,_s;function $d(){if(_s)return Dr;_s=1;var t=function(e,n,r,i,s,o,l,a){if(!e){var c;if(n===void 0)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[r,i,s,o,l,a],h=0;c=new Error(n.replace(/%s/g,function(){return u[h++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}};return Dr=t,Dr}var Bd=$d();const Is=Bi(Bd);var Mr,Cs;function Hd(){return Cs||(Cs=1,Mr=function(e,n,r,i){var s=r?r.call(i,e,n):void 0;if(s!==void 0)return!!s;if(e===n)return!0;if(typeof e!="object"||!e||typeof n!="object"||!n)return!1;var o=Object.keys(e),l=Object.keys(n);if(o.length!==l.length)return!1;for(var a=Object.prototype.hasOwnProperty.bind(n),c=0;c<o.length;c++){var u=o[c];if(!a(u))return!1;var h=e[u],f=n[u];if(s=r?r.call(i,h,f,u):void 0,s===!1||s===void 0&&h!==f)return!1}return!0}),Mr}var Vd=Hd();const zd=Bi(Vd);var ka=(t=>(t.BASE="base",t.BODY="body",t.HEAD="head",t.HTML="html",t.LINK="link",t.META="meta",t.NOSCRIPT="noscript",t.SCRIPT="script",t.STYLE="style",t.TITLE="title",t.FRAGMENT="Symbol(react.fragment)",t))(ka||{}),Fr={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},Ps=Object.values(ka),xr={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Na=Object.entries(xr).reduce((t,[e,n])=>(t[n]=e,t),{}),xe="data-rh",Ht={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},Vt=(t,e)=>{for(let n=t.length-1;n>=0;n-=1){const r=t[n];if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}return null},Wd=t=>{let e=Vt(t,"title");const n=Vt(t,Ht.TITLE_TEMPLATE);if(Array.isArray(e)&&(e=e.join("")),n&&e)return n.replace(/%s/g,()=>e);const r=Vt(t,Ht.DEFAULT_TITLE);return e||r||void 0},Gd=t=>Vt(t,Ht.ON_CHANGE_CLIENT_STATE)||(()=>{}),Ur=(t,e)=>e.filter(n=>typeof n[t]<"u").map(n=>n[t]).reduce((n,r)=>({...n,...r}),{}),qd=(t,e)=>e.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,r)=>{if(!n.length){const i=Object.keys(r);for(let s=0;s<i.length;s+=1){const l=i[s].toLowerCase();if(t.indexOf(l)!==-1&&r[l])return n.concat(r)}}return n},[]),Kd=t=>console&&typeof console.warn=="function"&&console.warn(t),rn=(t,e,n)=>{const r={};return n.filter(i=>Array.isArray(i[t])?!0:(typeof i[t]<"u"&&Kd(`Helmet: ${t} should be of type "Array". Instead found type "${typeof i[t]}"`),!1)).map(i=>i[t]).reverse().reduce((i,s)=>{const o={};s.filter(a=>{let c;const u=Object.keys(a);for(let f=0;f<u.length;f+=1){const g=u[f],m=g.toLowerCase();e.indexOf(m)!==-1&&!(c==="rel"&&a[c].toLowerCase()==="canonical")&&!(m==="rel"&&a[m].toLowerCase()==="stylesheet")&&(c=m),e.indexOf(g)!==-1&&(g==="innerHTML"||g==="cssText"||g==="itemprop")&&(c=g)}if(!c||!a[c])return!1;const h=a[c].toLowerCase();return r[c]||(r[c]={}),o[c]||(o[c]={}),r[c][h]?!1:(o[c][h]=!0,!0)}).reverse().forEach(a=>i.push(a));const l=Object.keys(o);for(let a=0;a<l.length;a+=1){const c=l[a],u={...r[c],...o[c]};r[c]=u}return i},[]).reverse()},Jd=(t,e)=>{if(Array.isArray(t)&&t.length){for(let n=0;n<t.length;n+=1)if(t[n][e])return!0}return!1},Yd=t=>({baseTag:qd(["href"],t),bodyAttributes:Ur("bodyAttributes",t),defer:Vt(t,Ht.DEFER),encode:Vt(t,Ht.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Ur("htmlAttributes",t),linkTags:rn("link",["rel","href"],t),metaTags:rn("meta",["name","charset","http-equiv","property","itemprop"],t),noscriptTags:rn("noscript",["innerHTML"],t),onChangeClientState:Gd(t),scriptTags:rn("script",["src","innerHTML"],t),styleTags:rn("style",["cssText"],t),title:Wd(t),titleAttributes:Ur("titleAttributes",t),prioritizeSeoTags:Jd(t,Ht.PRIORITIZE_SEO_TAGS)}),ja=t=>Array.isArray(t)?t.join(""):t,Xd=(t,e)=>{const n=Object.keys(t);for(let r=0;r<n.length;r+=1)if(e[n[r]]&&e[n[r]].includes(t[n[r]]))return!0;return!1},$r=(t,e)=>Array.isArray(t)?t.reduce((n,r)=>(Xd(r,e)?n.priority.push(r):n.default.push(r),n),{priority:[],default:[]}):{default:t,priority:[]},As=(t,e)=>({...t,[e]:void 0}),Qd=["noscript","script","style"],fi=(t,e=!0)=>e===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),La=t=>Object.keys(t).reduce((e,n)=>{const r=typeof t[n]<"u"?`${n}="${t[n]}"`:`${n}`;return e?`${e} ${r}`:r},""),Zd=(t,e,n,r)=>{const i=La(n),s=ja(e);return i?`<${t} ${xe}="true" ${i}>${fi(s,r)}</${t}>`:`<${t} ${xe}="true">${fi(s,r)}</${t}>`},eu=(t,e,n=!0)=>e.reduce((r,i)=>{const s=i,o=Object.keys(s).filter(c=>!(c==="innerHTML"||c==="cssText")).reduce((c,u)=>{const h=typeof s[u]>"u"?u:`${u}="${fi(s[u],n)}"`;return c?`${c} ${h}`:h},""),l=s.innerHTML||s.cssText||"",a=Qd.indexOf(t)===-1;return`${r}<${t} ${xe}="true" ${o}${a?"/>":`>${l}</${t}>`}`},""),Da=(t,e={})=>Object.keys(t).reduce((n,r)=>{const i=xr[r];return n[i||r]=t[r],n},e),tu=(t,e,n)=>{const r={key:e,[xe]:!0},i=Da(n,r);return[k.createElement("title",i,e)]},Wn=(t,e)=>e.map((n,r)=>{const i={key:r,[xe]:!0};return Object.keys(n).forEach(s=>{const l=xr[s]||s;if(l==="innerHTML"||l==="cssText"){const a=n.innerHTML||n.cssText;i.dangerouslySetInnerHTML={__html:a}}else i[l]=n[s]}),k.createElement(t,i)}),ye=(t,e,n=!0)=>{switch(t){case"title":return{toComponent:()=>tu(t,e.title,e.titleAttributes),toString:()=>Zd(t,e.title,e.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>Da(e),toString:()=>La(e)};default:return{toComponent:()=>Wn(t,e),toString:()=>eu(t,e,n)}}},nu=({metaTags:t,linkTags:e,scriptTags:n,encode:r})=>{const i=$r(t,Fr.meta),s=$r(e,Fr.link),o=$r(n,Fr.script);return{priorityMethods:{toComponent:()=>[...Wn("meta",i.priority),...Wn("link",s.priority),...Wn("script",o.priority)],toString:()=>`${ye("meta",i.priority,r)} ${ye("link",s.priority,r)} ${ye("script",o.priority,r)}`},metaTags:i.default,linkTags:s.default,scriptTags:o.default}},ru=t=>{const{baseTag:e,bodyAttributes:n,encode:r=!0,htmlAttributes:i,noscriptTags:s,styleTags:o,title:l="",titleAttributes:a,prioritizeSeoTags:c}=t;let{linkTags:u,metaTags:h,scriptTags:f}=t,g={toComponent:()=>[],toString:()=>""};return c&&({priorityMethods:g,linkTags:u,metaTags:h,scriptTags:f}=nu(t)),{priority:g,base:ye("base",e,r),bodyAttributes:ye("bodyAttributes",n,r),htmlAttributes:ye("htmlAttributes",i,r),link:ye("link",u,r),meta:ye("meta",h,r),noscript:ye("noscript",s,r),script:ye("script",f,r),style:ye("style",o,r),title:ye("title",{title:l,titleAttributes:a},r)}},pi=ru,Fn=[],Wi=!!(typeof window<"u"&&window.document&&window.document.createElement),gi=class{constructor(t,e){_e(this,"instances",[]);_e(this,"canUseDOM",Wi);_e(this,"context");_e(this,"value",{setHelmet:t=>{this.context.helmet=t},helmetInstances:{get:()=>this.canUseDOM?Fn:this.instances,add:t=>{(this.canUseDOM?Fn:this.instances).push(t)},remove:t=>{const e=(this.canUseDOM?Fn:this.instances).indexOf(t);(this.canUseDOM?Fn:this.instances).splice(e,1)}}});this.context=t,this.canUseDOM=e||!1,e||(t.helmet=pi({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},iu=parseInt(k.version.split(".")[0],10),mi=iu>=19,su={},Ma=k.createContext(su),xt,Fa=(xt=class extends S.Component{constructor(n){super(n);_e(this,"helmetData");mi?this.helmetData=null:this.helmetData=new gi(this.props.context||{},xt.canUseDOM)}render(){return mi?k.createElement(k.Fragment,null,this.props.children):k.createElement(Ma.Provider,{value:this.helmetData.value},this.props.children)}},_e(xt,"canUseDOM",Wi),xt),Lt=(t,e)=>{const n=document.head||document.querySelector("head"),r=n.querySelectorAll(`${t}[${xe}]`),i=[].slice.call(r),s=[];let o;return e&&e.length&&e.forEach(l=>{const a=document.createElement(t);for(const c in l)if(Object.prototype.hasOwnProperty.call(l,c))if(c==="innerHTML")a.innerHTML=l.innerHTML;else if(c==="cssText"){const u=l.cssText;a.appendChild(document.createTextNode(u))}else{const u=c,h=typeof l[u]>"u"?"":l[u];a.setAttribute(c,h)}a.setAttribute(xe,"true"),i.some((c,u)=>(o=u,a.isEqualNode(c)))?i.splice(o,1):s.push(a)}),i.forEach(l=>{var a;return(a=l.parentNode)==null?void 0:a.removeChild(l)}),s.forEach(l=>n.appendChild(l)),{oldTags:i,newTags:s}},yi=(t,e)=>{const n=document.getElementsByTagName(t)[0];if(!n)return;const r=n.getAttribute(xe),i=r?r.split(","):[],s=[...i],o=Object.keys(e);for(const l of o){const a=e[l]||"";n.getAttribute(l)!==a&&n.setAttribute(l,a),i.indexOf(l)===-1&&i.push(l);const c=s.indexOf(l);c!==-1&&s.splice(c,1)}for(let l=s.length-1;l>=0;l-=1)n.removeAttribute(s[l]);i.length===s.length?n.removeAttribute(xe):n.getAttribute(xe)!==o.join(",")&&n.setAttribute(xe,o.join(","))},ou=(t,e)=>{typeof t<"u"&&document.title!==t&&(document.title=ja(t)),yi("title",e)},Os=(t,e)=>{const{baseTag:n,bodyAttributes:r,htmlAttributes:i,linkTags:s,metaTags:o,noscriptTags:l,onChangeClientState:a,scriptTags:c,styleTags:u,title:h,titleAttributes:f}=t;yi("body",r),yi("html",i),ou(h,f);const g={baseTag:Lt("base",n),linkTags:Lt("link",s),metaTags:Lt("meta",o),noscriptTags:Lt("noscript",l),scriptTags:Lt("script",c),styleTags:Lt("style",u)},m={},x={};Object.keys(g).forEach(b=>{const{newTags:R,oldTags:w}=g[b];R.length&&(m[b]=R),w.length&&(x[b]=g[b].oldTags)}),e&&e(),a(t,m,x)},sn=null,au=t=>{sn&&cancelAnimationFrame(sn),t.defer?sn=requestAnimationFrame(()=>{Os(t,()=>{sn=null})}):(Os(t),sn=null)},lu=au,ks=class extends S.Component{constructor(){super(...arguments);_e(this,"rendered",!1)}shouldComponentUpdate(e){return!zd(e,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:e}=this.props.context;e.remove(this),this.emitChange()}emitChange(){const{helmetInstances:e,setHelmet:n}=this.props.context;let r=null;const i=Yd(e.get().map(s=>{const{context:o,...l}=s.props;return l}));Fa.canUseDOM?lu(i):pi&&(r=pi(i)),n(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:e}=this.props.context;e.add(this),this.emitChange()}render(){return this.init(),null}},Gn=[],Ns=t=>{const e={};for(const n of Object.keys(t))e[Na[n]||n]=t[n];return e},pt=t=>{const e={};for(const n of Object.keys(t)){const r=xr[n];e[r||n]=t[n]}return e},js=(t,e)=>{if(!Wi)return;const n=document.getElementsByTagName(t)[0];if(!n)return;const r="data-rh-managed",i=n.getAttribute(r),s=i?i.split(","):[],o=Object.keys(e);for(const l of s)o.includes(l)||n.removeAttribute(l);for(const l of o){const a=e[l];a==null||a===!1?n.removeAttribute(l):a===!0?n.setAttribute(l,""):n.setAttribute(l,String(a))}o.length>0?n.setAttribute(r,o.join(",")):n.removeAttribute(r)},Br=()=>{const t={},e={};for(const n of Gn){const{htmlAttributes:r,bodyAttributes:i}=n.props;r&&Object.assign(t,Ns(r)),i&&Object.assign(e,Ns(i))}js("html",t),js("body",e)},cu=class extends S.Component{componentDidMount(){Gn.push(this),Br()}componentDidUpdate(){Br()}componentWillUnmount(){const t=Gn.indexOf(this);t!==-1&&Gn.splice(t,1),Br()}resolveTitle(){const{title:t,titleTemplate:e,defaultTitle:n}=this.props;return t&&e?e.replace(/%s/g,()=>Array.isArray(t)?t.join(""):t):t||n||void 0}renderTitle(){const t=this.resolveTitle();if(t===void 0)return null;const e=this.props.titleAttributes||{};return k.createElement("title",pt(e),t)}renderBase(){const{base:t}=this.props;return t?k.createElement("base",pt(t)):null}renderMeta(){const{meta:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>k.createElement("meta",{key:n,...pt(e)}))}renderLink(){const{link:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>k.createElement("link",{key:n,...pt(e)}))}renderScript(){const{script:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>{const{innerHTML:r,...i}=e,s=pt(i);return r&&(s.dangerouslySetInnerHTML={__html:r}),k.createElement("script",{key:n,...s})})}renderStyle(){const{style:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>{const{cssText:r,...i}=e,s=pt(i);return r&&(s.dangerouslySetInnerHTML={__html:r}),k.createElement("style",{key:n,...s})})}renderNoscript(){const{noscript:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>{const{innerHTML:r,...i}=e,s=pt(i);return r&&(s.dangerouslySetInnerHTML={__html:r}),k.createElement("noscript",{key:n,...s})})}render(){return k.createElement(k.Fragment,null,this.renderTitle(),this.renderBase(),this.renderMeta(),this.renderLink(),this.renderScript(),this.renderStyle(),this.renderNoscript())}},hi,du=(hi=class extends S.Component{shouldComponentUpdate(t){return!Ud(As(this.props,"helmetData"),As(t,"helmetData"))}mapNestedChildrenToProps(t,e){if(!e)return null;switch(t.type){case"script":case"noscript":return{innerHTML:e};case"style":return{cssText:e};default:throw new Error(`<${t.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(t,e,n,r){return{...e,[t.type]:[...e[t.type]||[],{...n,...this.mapNestedChildrenToProps(t,r)}]}}mapObjectTypeChildren(t,e,n,r){switch(t.type){case"title":return{...e,[t.type]:r,titleAttributes:{...n}};case"body":return{...e,bodyAttributes:{...n}};case"html":return{...e,htmlAttributes:{...n}};default:return{...e,[t.type]:{...n}}}}mapArrayTypeChildrenToProps(t,e){let n={...e};return Object.keys(t).forEach(r=>{n={...n,[r]:t[r]}}),n}warnOnInvalidChildren(t,e){return Is(Ps.some(n=>t.type===n),typeof t.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${Ps.join(", ")} are allowed. Helmet does not support rendering <${t.type}> elements. Refer to our API for more information.`),Is(!e||typeof e=="string"||Array.isArray(e)&&!e.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${t.type}>. Did you forget to wrap your children in braces? ( <${t.type}>{\`\`}</${t.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(t,e){let n={};return k.Children.forEach(t,r=>{if(!r||!r.props)return;const{children:i,...s}=r.props,o=Object.keys(s).reduce((a,c)=>(a[Na[c]||c]=s[c],a),{});let{type:l}=r;switch(typeof l=="symbol"?l=l.toString():this.warnOnInvalidChildren(r,i),l){case"Symbol(react.fragment)":e=this.mapChildrenToProps(i,e);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(r,n,o,i);break;default:e=this.mapObjectTypeChildren(r,e,o,i);break}}),this.mapArrayTypeChildrenToProps(n,e)}render(){const{children:t,...e}=this.props;let n={...e},{helmetData:r}=e;if(t&&(n=this.mapChildrenToProps(t,n)),r&&!(r instanceof gi)){const i=r;r=new gi(i.context,!0),delete n.helmetData}return mi?k.createElement(cu,{...n}):r?k.createElement(ks,{...n,context:r.value}):k.createElement(Ma.Consumer,null,i=>k.createElement(ks,{...n,context:i}))}},_e(hi,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),hi);const Ee={LIST:"ord_ls",ADD:"ord_add",IMPORT:"ord_imp",LIST_OWN:"ord_ls_own",LIST_SUB:"ord_ls_sub",LIST_ALL:"ord_ls_all"},hn={ROLE_LIST:"perm_role_ls",ROLE_ADD:"perm_role_add",ROLE_EDIT:"perm_role_edt",ROLE_DELETE:"perm_role_del",USER_LIST:"perm_asst_ls",USER_ADD:"perm_asst_add",USER_EDIT:"perm_asst_edt",USER_SUSPEND:"perm_asst_blk"};function uu(){return[...Object.values(Ee),...Object.values(hn)]}function hu(){return uu()}const fu=id`
  :root {
    --app-background: ${Mn.colors.light.background};
    --app-text: ${Mn.colors.light.text.primary};
  }
  :root[data-theme='dark'] {
    --app-background: ${Mn.colors.dark.background};
    --app-text: ${Mn.colors.dark.text.primary};
  }
  body {
    background-color: var(--app-background);
    color: var(--app-text);
  }
`;var pu=Object.defineProperty,sr=Object.getOwnPropertySymbols,Ua=Object.prototype.hasOwnProperty,$a=Object.prototype.propertyIsEnumerable,Ls=(t,e,n)=>e in t?pu(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,bi=(t,e)=>{for(var n in e||(e={}))Ua.call(e,n)&&Ls(t,n,e[n]);if(sr)for(var n of sr(e))$a.call(e,n)&&Ls(t,n,e[n]);return t},vi=(t,e)=>{var n={};for(var r in t)Ua.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&sr)for(var r of sr(t))e.indexOf(r)<0&&$a.call(t,r)&&(n[r]=t[r]);return n};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var _t;(t=>{const e=class D{constructor(a,c,u,h){if(this.version=a,this.errorCorrectionLevel=c,this.modules=[],this.isFunction=[],a<D.MIN_VERSION||a>D.MAX_VERSION)throw new RangeError("Version value out of range");if(h<-1||h>7)throw new RangeError("Mask value out of range");this.size=a*4+17;let f=[];for(let m=0;m<this.size;m++)f.push(!1);for(let m=0;m<this.size;m++)this.modules.push(f.slice()),this.isFunction.push(f.slice());this.drawFunctionPatterns();const g=this.addEccAndInterleave(u);if(this.drawCodewords(g),h==-1){let m=1e9;for(let x=0;x<8;x++){this.applyMask(x),this.drawFormatBits(x);const b=this.getPenaltyScore();b<m&&(h=x,m=b),this.applyMask(x)}}i(0<=h&&h<=7),this.mask=h,this.applyMask(h),this.drawFormatBits(h),this.isFunction=[]}static encodeText(a,c){const u=t.QrSegment.makeSegments(a);return D.encodeSegments(u,c)}static encodeBinary(a,c){const u=t.QrSegment.makeBytes(a);return D.encodeSegments([u],c)}static encodeSegments(a,c,u=1,h=40,f=-1,g=!0){if(!(D.MIN_VERSION<=u&&u<=h&&h<=D.MAX_VERSION)||f<-1||f>7)throw new RangeError("Invalid value");let m,x;for(m=u;;m++){const v=D.getNumDataCodewords(m,c)*8,y=o.getTotalBits(a,m);if(y<=v){x=y;break}if(m>=h)throw new RangeError("Data too long")}for(const v of[D.Ecc.MEDIUM,D.Ecc.QUARTILE,D.Ecc.HIGH])g&&x<=D.getNumDataCodewords(m,v)*8&&(c=v);let b=[];for(const v of a){n(v.mode.modeBits,4,b),n(v.numChars,v.mode.numCharCountBits(m),b);for(const y of v.getData())b.push(y)}i(b.length==x);const R=D.getNumDataCodewords(m,c)*8;i(b.length<=R),n(0,Math.min(4,R-b.length),b),n(0,(8-b.length%8)%8,b),i(b.length%8==0);for(let v=236;b.length<R;v^=253)n(v,8,b);let w=[];for(;w.length*8<b.length;)w.push(0);return b.forEach((v,y)=>w[y>>>3]|=v<<7-(y&7)),new D(m,c,w,f)}getModule(a,c){return 0<=a&&a<this.size&&0<=c&&c<this.size&&this.modules[c][a]}getModules(){return this.modules}drawFunctionPatterns(){for(let u=0;u<this.size;u++)this.setFunctionModule(6,u,u%2==0),this.setFunctionModule(u,6,u%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const a=this.getAlignmentPatternPositions(),c=a.length;for(let u=0;u<c;u++)for(let h=0;h<c;h++)u==0&&h==0||u==0&&h==c-1||u==c-1&&h==0||this.drawAlignmentPattern(a[u],a[h]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(a){const c=this.errorCorrectionLevel.formatBits<<3|a;let u=c;for(let f=0;f<10;f++)u=u<<1^(u>>>9)*1335;const h=(c<<10|u)^21522;i(h>>>15==0);for(let f=0;f<=5;f++)this.setFunctionModule(8,f,r(h,f));this.setFunctionModule(8,7,r(h,6)),this.setFunctionModule(8,8,r(h,7)),this.setFunctionModule(7,8,r(h,8));for(let f=9;f<15;f++)this.setFunctionModule(14-f,8,r(h,f));for(let f=0;f<8;f++)this.setFunctionModule(this.size-1-f,8,r(h,f));for(let f=8;f<15;f++)this.setFunctionModule(8,this.size-15+f,r(h,f));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let a=this.version;for(let u=0;u<12;u++)a=a<<1^(a>>>11)*7973;const c=this.version<<12|a;i(c>>>18==0);for(let u=0;u<18;u++){const h=r(c,u),f=this.size-11+u%3,g=Math.floor(u/3);this.setFunctionModule(f,g,h),this.setFunctionModule(g,f,h)}}drawFinderPattern(a,c){for(let u=-4;u<=4;u++)for(let h=-4;h<=4;h++){const f=Math.max(Math.abs(h),Math.abs(u)),g=a+h,m=c+u;0<=g&&g<this.size&&0<=m&&m<this.size&&this.setFunctionModule(g,m,f!=2&&f!=4)}}drawAlignmentPattern(a,c){for(let u=-2;u<=2;u++)for(let h=-2;h<=2;h++)this.setFunctionModule(a+h,c+u,Math.max(Math.abs(h),Math.abs(u))!=1)}setFunctionModule(a,c,u){this.modules[c][a]=u,this.isFunction[c][a]=!0}addEccAndInterleave(a){const c=this.version,u=this.errorCorrectionLevel;if(a.length!=D.getNumDataCodewords(c,u))throw new RangeError("Invalid argument");const h=D.NUM_ERROR_CORRECTION_BLOCKS[u.ordinal][c],f=D.ECC_CODEWORDS_PER_BLOCK[u.ordinal][c],g=Math.floor(D.getNumRawDataModules(c)/8),m=h-g%h,x=Math.floor(g/h);let b=[];const R=D.reedSolomonComputeDivisor(f);for(let v=0,y=0;v<h;v++){let _=a.slice(y,y+x-f+(v<m?0:1));y+=_.length;const I=D.reedSolomonComputeRemainder(_,R);v<m&&_.push(0),b.push(_.concat(I))}let w=[];for(let v=0;v<b[0].length;v++)b.forEach((y,_)=>{(v!=x-f||_>=m)&&w.push(y[v])});return i(w.length==g),w}drawCodewords(a){if(a.length!=Math.floor(D.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let c=0;for(let u=this.size-1;u>=1;u-=2){u==6&&(u=5);for(let h=0;h<this.size;h++)for(let f=0;f<2;f++){const g=u-f,x=(u+1&2)==0?this.size-1-h:h;!this.isFunction[x][g]&&c<a.length*8&&(this.modules[x][g]=r(a[c>>>3],7-(c&7)),c++)}}i(c==a.length*8)}applyMask(a){if(a<0||a>7)throw new RangeError("Mask value out of range");for(let c=0;c<this.size;c++)for(let u=0;u<this.size;u++){let h;switch(a){case 0:h=(u+c)%2==0;break;case 1:h=c%2==0;break;case 2:h=u%3==0;break;case 3:h=(u+c)%3==0;break;case 4:h=(Math.floor(u/3)+Math.floor(c/2))%2==0;break;case 5:h=u*c%2+u*c%3==0;break;case 6:h=(u*c%2+u*c%3)%2==0;break;case 7:h=((u+c)%2+u*c%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[c][u]&&h&&(this.modules[c][u]=!this.modules[c][u])}}getPenaltyScore(){let a=0;for(let f=0;f<this.size;f++){let g=!1,m=0,x=[0,0,0,0,0,0,0];for(let b=0;b<this.size;b++)this.modules[f][b]==g?(m++,m==5?a+=D.PENALTY_N1:m>5&&a++):(this.finderPenaltyAddHistory(m,x),g||(a+=this.finderPenaltyCountPatterns(x)*D.PENALTY_N3),g=this.modules[f][b],m=1);a+=this.finderPenaltyTerminateAndCount(g,m,x)*D.PENALTY_N3}for(let f=0;f<this.size;f++){let g=!1,m=0,x=[0,0,0,0,0,0,0];for(let b=0;b<this.size;b++)this.modules[b][f]==g?(m++,m==5?a+=D.PENALTY_N1:m>5&&a++):(this.finderPenaltyAddHistory(m,x),g||(a+=this.finderPenaltyCountPatterns(x)*D.PENALTY_N3),g=this.modules[b][f],m=1);a+=this.finderPenaltyTerminateAndCount(g,m,x)*D.PENALTY_N3}for(let f=0;f<this.size-1;f++)for(let g=0;g<this.size-1;g++){const m=this.modules[f][g];m==this.modules[f][g+1]&&m==this.modules[f+1][g]&&m==this.modules[f+1][g+1]&&(a+=D.PENALTY_N2)}let c=0;for(const f of this.modules)c=f.reduce((g,m)=>g+(m?1:0),c);const u=this.size*this.size,h=Math.ceil(Math.abs(c*20-u*10)/u)-1;return i(0<=h&&h<=9),a+=h*D.PENALTY_N4,i(0<=a&&a<=2568888),a}getAlignmentPatternPositions(){if(this.version==1)return[];{const a=Math.floor(this.version/7)+2,c=this.version==32?26:Math.ceil((this.version*4+4)/(a*2-2))*2;let u=[6];for(let h=this.size-7;u.length<a;h-=c)u.splice(1,0,h);return u}}static getNumRawDataModules(a){if(a<D.MIN_VERSION||a>D.MAX_VERSION)throw new RangeError("Version number out of range");let c=(16*a+128)*a+64;if(a>=2){const u=Math.floor(a/7)+2;c-=(25*u-10)*u-55,a>=7&&(c-=36)}return i(208<=c&&c<=29648),c}static getNumDataCodewords(a,c){return Math.floor(D.getNumRawDataModules(a)/8)-D.ECC_CODEWORDS_PER_BLOCK[c.ordinal][a]*D.NUM_ERROR_CORRECTION_BLOCKS[c.ordinal][a]}static reedSolomonComputeDivisor(a){if(a<1||a>255)throw new RangeError("Degree out of range");let c=[];for(let h=0;h<a-1;h++)c.push(0);c.push(1);let u=1;for(let h=0;h<a;h++){for(let f=0;f<c.length;f++)c[f]=D.reedSolomonMultiply(c[f],u),f+1<c.length&&(c[f]^=c[f+1]);u=D.reedSolomonMultiply(u,2)}return c}static reedSolomonComputeRemainder(a,c){let u=c.map(h=>0);for(const h of a){const f=h^u.shift();u.push(0),c.forEach((g,m)=>u[m]^=D.reedSolomonMultiply(g,f))}return u}static reedSolomonMultiply(a,c){if(a>>>8||c>>>8)throw new RangeError("Byte out of range");let u=0;for(let h=7;h>=0;h--)u=u<<1^(u>>>7)*285,u^=(c>>>h&1)*a;return i(u>>>8==0),u}finderPenaltyCountPatterns(a){const c=a[1];i(c<=this.size*3);const u=c>0&&a[2]==c&&a[3]==c*3&&a[4]==c&&a[5]==c;return(u&&a[0]>=c*4&&a[6]>=c?1:0)+(u&&a[6]>=c*4&&a[0]>=c?1:0)}finderPenaltyTerminateAndCount(a,c,u){return a&&(this.finderPenaltyAddHistory(c,u),c=0),c+=this.size,this.finderPenaltyAddHistory(c,u),this.finderPenaltyCountPatterns(u)}finderPenaltyAddHistory(a,c){c[0]==0&&(a+=this.size),c.pop(),c.unshift(a)}};e.MIN_VERSION=1,e.MAX_VERSION=40,e.PENALTY_N1=3,e.PENALTY_N2=3,e.PENALTY_N3=40,e.PENALTY_N4=10,e.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],e.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],t.QrCode=e;function n(l,a,c){if(a<0||a>31||l>>>a)throw new RangeError("Value out of range");for(let u=a-1;u>=0;u--)c.push(l>>>u&1)}function r(l,a){return(l>>>a&1)!=0}function i(l){if(!l)throw new Error("Assertion error")}const s=class G{constructor(a,c,u){if(this.mode=a,this.numChars=c,this.bitData=u,c<0)throw new RangeError("Invalid argument");this.bitData=u.slice()}static makeBytes(a){let c=[];for(const u of a)n(u,8,c);return new G(G.Mode.BYTE,a.length,c)}static makeNumeric(a){if(!G.isNumeric(a))throw new RangeError("String contains non-numeric characters");let c=[];for(let u=0;u<a.length;){const h=Math.min(a.length-u,3);n(parseInt(a.substring(u,u+h),10),h*3+1,c),u+=h}return new G(G.Mode.NUMERIC,a.length,c)}static makeAlphanumeric(a){if(!G.isAlphanumeric(a))throw new RangeError("String contains unencodable characters in alphanumeric mode");let c=[],u;for(u=0;u+2<=a.length;u+=2){let h=G.ALPHANUMERIC_CHARSET.indexOf(a.charAt(u))*45;h+=G.ALPHANUMERIC_CHARSET.indexOf(a.charAt(u+1)),n(h,11,c)}return u<a.length&&n(G.ALPHANUMERIC_CHARSET.indexOf(a.charAt(u)),6,c),new G(G.Mode.ALPHANUMERIC,a.length,c)}static makeSegments(a){return a==""?[]:G.isNumeric(a)?[G.makeNumeric(a)]:G.isAlphanumeric(a)?[G.makeAlphanumeric(a)]:[G.makeBytes(G.toUtf8ByteArray(a))]}static makeEci(a){let c=[];if(a<0)throw new RangeError("ECI assignment value out of range");if(a<128)n(a,8,c);else if(a<16384)n(2,2,c),n(a,14,c);else if(a<1e6)n(6,3,c),n(a,21,c);else throw new RangeError("ECI assignment value out of range");return new G(G.Mode.ECI,0,c)}static isNumeric(a){return G.NUMERIC_REGEX.test(a)}static isAlphanumeric(a){return G.ALPHANUMERIC_REGEX.test(a)}getData(){return this.bitData.slice()}static getTotalBits(a,c){let u=0;for(const h of a){const f=h.mode.numCharCountBits(c);if(h.numChars>=1<<f)return 1/0;u+=4+f+h.bitData.length}return u}static toUtf8ByteArray(a){a=encodeURI(a);let c=[];for(let u=0;u<a.length;u++)a.charAt(u)!="%"?c.push(a.charCodeAt(u)):(c.push(parseInt(a.substring(u+1,u+3),16)),u+=2);return c}};s.NUMERIC_REGEX=/^[0-9]*$/,s.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,s.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";let o=s;t.QrSegment=s})(_t||(_t={}));(t=>{(e=>{const n=class{constructor(i,s){this.ordinal=i,this.formatBits=s}};n.LOW=new n(0,1),n.MEDIUM=new n(1,0),n.QUARTILE=new n(2,3),n.HIGH=new n(3,2),e.Ecc=n})(t.QrCode||(t.QrCode={}))})(_t||(_t={}));(t=>{(e=>{const n=class{constructor(i,s){this.modeBits=i,this.numBitsCharCount=s}numCharCountBits(i){return this.numBitsCharCount[Math.floor((i+7)/17)]}};n.NUMERIC=new n(1,[10,12,14]),n.ALPHANUMERIC=new n(2,[9,11,13]),n.BYTE=new n(4,[8,16,16]),n.KANJI=new n(8,[8,10,12]),n.ECI=new n(7,[0,0,0]),e.Mode=n})(t.QrSegment||(t.QrSegment={}))})(_t||(_t={}));var $t=_t;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var gu={L:$t.QrCode.Ecc.LOW,M:$t.QrCode.Ecc.MEDIUM,Q:$t.QrCode.Ecc.QUARTILE,H:$t.QrCode.Ecc.HIGH},Ba=128,Ha="L",Va="#FFFFFF",za="#000000",Wa=!1,Ga=1,mu=4,yu=0,bu=.1;function qa(t,e=0){const n=[];return t.forEach(function(r,i){let s=null;r.forEach(function(o,l){if(!o&&s!==null){n.push(`M${s+e} ${i+e}h${l-s}v1H${s+e}z`),s=null;return}if(l===r.length-1){if(!o)return;s===null?n.push(`M${l+e},${i+e} h1v1H${l+e}z`):n.push(`M${s+e},${i+e} h${l+1-s}v1H${s+e}z`);return}o&&s===null&&(s=l)})}),n.join("")}function Ka(t,e){return t.slice().map((n,r)=>r<e.y||r>=e.y+e.h?n:n.map((i,s)=>s<e.x||s>=e.x+e.w?i:!1))}function vu(t,e,n,r){if(r==null)return null;const i=t.length+n*2,s=Math.floor(e*bu),o=i/e,l=(r.width||s)*o,a=(r.height||s)*o,c=r.x==null?t.length/2-l/2:r.x*o,u=r.y==null?t.length/2-a/2:r.y*o,h=r.opacity==null?1:r.opacity;let f=null;if(r.excavate){let m=Math.floor(c),x=Math.floor(u),b=Math.ceil(l+c-m),R=Math.ceil(a+u-x);f={x:m,y:x,w:b,h:R}}const g=r.crossOrigin;return{x:c,y:u,h:a,w:l,excavation:f,opacity:h,crossOrigin:g}}function wu(t,e){return e!=null?Math.max(Math.floor(e),0):t?mu:yu}function Ja({value:t,level:e,minVersion:n,includeMargin:r,marginSize:i,imageSettings:s,size:o,boostLevel:l}){let a=k.useMemo(()=>{const m=(Array.isArray(t)?t:[t]).reduce((x,b)=>(x.push(...$t.QrSegment.makeSegments(b)),x),[]);return $t.QrCode.encodeSegments(m,gu[e],n,void 0,void 0,l)},[t,e,n,l]);const{cells:c,margin:u,numCells:h,calculatedImageSettings:f}=k.useMemo(()=>{let g=a.getModules();const m=wu(r,i),x=g.length+m*2,b=vu(g,o,m,s);return{cells:g,margin:m,numCells:x,calculatedImageSettings:b}},[a,o,s,r,i]);return{qrcode:a,margin:u,cells:c,numCells:h,calculatedImageSettings:f}}var xu=(function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0})(),Eu=k.forwardRef(function(e,n){const r=e,{value:i,size:s=Ba,level:o=Ha,bgColor:l=Va,fgColor:a=za,includeMargin:c=Wa,minVersion:u=Ga,boostLevel:h,marginSize:f,imageSettings:g}=r,x=vi(r,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","marginSize","imageSettings"]),{style:b}=x,R=vi(x,["style"]),w=g==null?void 0:g.src,v=k.useRef(null),y=k.useRef(null),_=k.useCallback(te=>{v.current=te,typeof n=="function"?n(te):n&&(n.current=te)},[n]),[I,P]=k.useState(!1),{margin:A,cells:F,numCells:z,calculatedImageSettings:j}=Ja({value:i,level:o,minVersion:u,boostLevel:h,includeMargin:c,marginSize:f,imageSettings:g,size:s});k.useEffect(()=>{if(v.current!=null){const te=v.current,X=te.getContext("2d");if(!X)return;let ne=F;const de=y.current,re=j!=null&&de!==null&&de.complete&&de.naturalHeight!==0&&de.naturalWidth!==0;re&&j.excavation!=null&&(ne=Ka(F,j.excavation));const oe=window.devicePixelRatio||1;te.height=te.width=s*oe;const ue=s/z*oe;X.scale(ue,ue),X.fillStyle=l,X.fillRect(0,0,z,z),X.fillStyle=a,xu?X.fill(new Path2D(qa(ne,A))):F.forEach(function(dt,Nn){dt.forEach(function(Re,Q){Re&&X.fillRect(Q+A,Nn+A,1,1)})}),j&&(X.globalAlpha=j.opacity),re&&X.drawImage(de,j.x+A,j.y+A,j.w,j.h)}}),k.useEffect(()=>{P(!1)},[w]);const K=bi({height:s,width:s},b);let ee=null;return w!=null&&(ee=k.createElement("img",{src:w,key:w,style:{display:"none"},onLoad:()=>{P(!0)},ref:y,crossOrigin:j==null?void 0:j.crossOrigin})),k.createElement(k.Fragment,null,k.createElement("canvas",bi({style:K,height:s,width:s,ref:_,role:"img"},R)),ee)});Eu.displayName="QRCodeCanvas";var Ya=k.forwardRef(function(e,n){const r=e,{value:i,size:s=Ba,level:o=Ha,bgColor:l=Va,fgColor:a=za,includeMargin:c=Wa,minVersion:u=Ga,boostLevel:h,title:f,marginSize:g,imageSettings:m}=r,x=vi(r,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","title","marginSize","imageSettings"]),{margin:b,cells:R,numCells:w,calculatedImageSettings:v}=Ja({value:i,level:o,minVersion:u,boostLevel:h,includeMargin:c,marginSize:g,imageSettings:m,size:s});let y=R,_=null;m!=null&&v!=null&&(v.excavation!=null&&(y=Ka(R,v.excavation)),_=k.createElement("image",{href:m.src,height:v.h,width:v.w,x:v.x+b,y:v.y+b,preserveAspectRatio:"none",opacity:v.opacity,crossOrigin:v.crossOrigin}));const I=qa(y,b);return k.createElement("svg",bi({height:s,width:s,viewBox:`0 0 ${w} ${w}`,ref:n,role:"img"},x),!!f&&k.createElement("title",null,f),k.createElement("path",{fill:l,d:`M0,0 h${w}v${w}H0z`,shapeRendering:"crispEdges"}),k.createElement("path",{fill:a,d:I,shapeRendering:"crispEdges"}),_)});Ya.displayName="QRCodeSVG";function Su(){if(console&&console.warn){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];St(e[0])&&(e[0]=`react-i18next:: ${e[0]}`),console.warn(...e)}}const Ds={};function wi(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];St(e[0])&&Ds[e[0]]||(St(e[0])&&(Ds[e[0]]=new Date),Su(...e))}const Xa=(t,e)=>()=>{if(t.isInitialized)e();else{const n=()=>{setTimeout(()=>{t.off("initialized",n)},0),e()};t.on("initialized",n)}},Ms=(t,e,n)=>{t.loadNamespaces(e,Xa(t,n))},Fs=(t,e,n,r)=>{St(n)&&(n=[n]),n.forEach(i=>{t.options.ns.indexOf(i)<0&&t.options.ns.push(i)}),t.loadLanguages(e,Xa(t,r))},Tu=function(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const r=e.languages[0],i=e.options?e.options.fallbackLng:!1,s=e.languages[e.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const o=(l,a)=>{const c=e.services.backendConnector.state[`${l}|${a}`];return c===-1||c===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!o(e.isLanguageChangingTo,t)?!1:!!(e.hasResourceBundle(r,t)||!e.services.backendConnector.backend||e.options.resources&&!e.options.partialBundledLanguages||o(r,t)&&(!i||o(s,t)))},Ru=function(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!e.languages||!e.languages.length?(wi("i18n.languages were undefined or empty",e.languages),!0):e.options.ignoreJSONStructure!==void 0?e.hasLoadedNamespace(t,{lng:n.lng,precheck:(i,s)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&i.services.backendConnector.backend&&i.isLanguageChangingTo&&!s(i.isLanguageChangingTo,t))return!1}}):Tu(t,e,n)},St=t=>typeof t=="string",_u=t=>typeof t=="object"&&t!==null,Iu=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,Cu={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},Pu=t=>Cu[t],Au=t=>t.replace(Iu,Pu);let xi={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:Au};const Ou=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};xi={...xi,...t}},ku=()=>xi;let Qa;const Nu=t=>{Qa=t},ju=()=>Qa,Lu={type:"3rdParty",init(t){Ou(t.options.react),Nu(t)}},Du=S.createContext();class Mu{constructor(){_e(this,"getUsedNamespaces",()=>Object.keys(this.usedNamespaces));this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}}const Fu=(t,e)=>{const n=S.useRef();return S.useEffect(()=>{n.current=t},[t,e]),n.current},Za=(t,e,n,r)=>t.getFixedT(e,n,r),Uu=(t,e,n,r)=>S.useCallback(Za(t,e,n,r),[t,e,n,r]),Gi=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{i18n:n}=e,{i18n:r,defaultNS:i}=S.useContext(Du)||{},s=n||r||ju();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new Mu),!s){wi("You will need to pass in an i18next instance by using initReactI18next");const y=(I,P)=>St(P)?P:_u(P)&&St(P.defaultValue)?P.defaultValue:Array.isArray(I)?I[I.length-1]:I,_=[y,{},!1];return _.t=y,_.i18n={},_.ready=!1,_}s.options.react&&s.options.react.wait!==void 0&&wi("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const o={...ku(),...s.options.react,...e},{useSuspense:l,keyPrefix:a}=o;let c=t||i||s.options&&s.options.defaultNS;c=St(c)?[c]:c||["translation"],s.reportNamespaces.addUsedNamespaces&&s.reportNamespaces.addUsedNamespaces(c);const u=(s.isInitialized||s.initializedStoreOnce)&&c.every(y=>Ru(y,s,o)),h=Uu(s,e.lng||null,o.nsMode==="fallback"?c:c[0],a),f=()=>h,g=()=>Za(s,e.lng||null,o.nsMode==="fallback"?c:c[0],a),[m,x]=S.useState(f);let b=c.join();e.lng&&(b=`${e.lng}${b}`);const R=Fu(b),w=S.useRef(!0);S.useEffect(()=>{const{bindI18n:y,bindI18nStore:_}=o;w.current=!0,!u&&!l&&(e.lng?Fs(s,e.lng,c,()=>{w.current&&x(g)}):Ms(s,c,()=>{w.current&&x(g)})),u&&R&&R!==b&&w.current&&x(g);const I=()=>{w.current&&x(g)};return y&&s&&s.on(y,I),_&&s&&s.store.on(_,I),()=>{w.current=!1,y&&s&&y.split(" ").forEach(P=>s.off(P,I)),_&&s&&_.split(" ").forEach(P=>s.store.off(P,I))}},[s,b]),S.useEffect(()=>{w.current&&u&&x(f)},[s,a,u]);const v=[m,s,u];if(v.t=m,v.i18n=s,v.ready=u,u||!u&&!l)return v;throw new Promise(y=>{e.lng?Fs(s,e.lng,c,()=>y()):Ms(s,c,()=>y())})},el={portalLogin:"FF_PORTAL_LOGIN",guestTrack:"FF_GUEST_TRACK",aboutPage:"FF_ABOUT_PAGE",aboutV1:"FF_ABOUT_V1",homeAudienceSwitch:"FF_HOME_AUDIENCE_SWITCH",consigneeTrack:"FF_CONSIGNEE_TRACK",loginDestinations:"FF_LOGIN_DESTINATIONS",nextStopMap:"FF_NEXT_STOP_MAP"},tl="/portal/login";function ot(t){if(typeof window>"u")return!1;const e=el[t],n=new URLSearchParams(window.location.search);if(n.has(e))return n.get(e)==="true";try{return localStorage.getItem(e)==="true"}catch{return!1}}function $u(){if(typeof window>"u")return;const t=new URLSearchParams(window.location.search);for(const e of Object.values(el))if(t.has(e))try{localStorage.setItem(e,t.get(e)==="true"?"true":"false")}catch{}}function Us(t){return ot(t)}function qi(){return ot("portalLogin")?tl:"/"}const $s=Object.freeze({production:"https://app.senditgo.com",uat:"https://tms-uat.senditgo.com",development:"https://tms-dev.holieninnovation.com.tw"}),Bu="/fleet/login",Hu="/company/login",Vu=Object.freeze({development:"https://tms-dev.holieninnovation.com.tw/company/login"});function nl(t,e,n){const r=Object.prototype.hasOwnProperty.call($s,e)?$s[e]:null;if(!r||typeof t!="string"||t.trim()==="")return null;let i;try{i=new URL(t.trim())}catch{return null}return i.protocol!=="https:"||i.username||i.password||i.origin!==r||i.pathname!==n||i.search!==""||i.hash!==""?null:`${i.origin}${i.pathname}`}function zu(t,e){return nl(t,e,Bu)}function Wu(t,e){return nl(t,e,Hu)}function Gu(t){const e=[];if(t.portalLoginOn&&e.push({role:"shipper",href:tl,external:!1}),t.loginDestinationsOn){const n=zu(t.carrierLoginUrl,t.mode);n&&e.push({role:"carrier",href:n,external:!0});const r=Wu(t.consigneeLoginUrl,t.mode);r&&e.push({role:"consignee",href:r,external:!0})}return e}function Wx(t,e){return typeof t!="string"||!t.startsWith("/")||t.startsWith("//")||t.startsWith("/\\")||[...t].some(n=>n.charCodeAt(0)<32)?e:t}function Ki(){const t=Us("portalLogin"),e=Us("loginDestinations");return Gu({portalLoginOn:t,loginDestinationsOn:e,carrierLoginUrl:"https://app.senditgo.com/fleet/login",consigneeLoginUrl:Vu.production,mode:"production"})}const O=t=>typeof t=="string",on=()=>{let t,e;const n=new Promise((r,i)=>{t=r,e=i});return n.resolve=t,n.reject=e,n},Bs=t=>t==null?"":""+t,qu=(t,e,n)=>{t.forEach(r=>{e[r]&&(n[r]=e[r])})},Ku=/###/g,Hs=t=>t&&t.indexOf("###")>-1?t.replace(Ku,"."):t,Vs=t=>!t||O(t),fn=(t,e,n)=>{const r=O(e)?e.split("."):e;let i=0;for(;i<r.length-1;){if(Vs(t))return{};const s=Hs(r[i]);!t[s]&&n&&(t[s]=new n),Object.prototype.hasOwnProperty.call(t,s)?t=t[s]:t={},++i}return Vs(t)?{}:{obj:t,k:Hs(r[i])}},zs=(t,e,n)=>{const{obj:r,k:i}=fn(t,e,Object);if(r!==void 0||e.length===1){r[i]=n;return}let s=e[e.length-1],o=e.slice(0,e.length-1),l=fn(t,o,Object);for(;l.obj===void 0&&o.length;)s=`${o[o.length-1]}.${s}`,o=o.slice(0,o.length-1),l=fn(t,o,Object),l&&l.obj&&typeof l.obj[`${l.k}.${s}`]<"u"&&(l.obj=void 0);l.obj[`${l.k}.${s}`]=n},Ju=(t,e,n,r)=>{const{obj:i,k:s}=fn(t,e,Object);i[s]=i[s]||[],i[s].push(n)},or=(t,e)=>{const{obj:n,k:r}=fn(t,e);if(n)return n[r]},Yu=(t,e,n)=>{const r=or(t,n);return r!==void 0?r:or(e,n)},rl=(t,e,n)=>{for(const r in e)r!=="__proto__"&&r!=="constructor"&&(r in t?O(t[r])||t[r]instanceof String||O(e[r])||e[r]instanceof String?n&&(t[r]=e[r]):rl(t[r],e[r],n):t[r]=e[r]);return t},Dt=t=>t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var Xu={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const Qu=t=>O(t)?t.replace(/[&<>"'\/]/g,e=>Xu[e]):t;class Zu{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const n=this.regExpMap.get(e);if(n!==void 0)return n;const r=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,r),this.regExpQueue.push(e),r}}const eh=[" ",",","?","!",";"],th=new Zu(20),nh=(t,e,n)=>{e=e||"",n=n||"";const r=eh.filter(o=>e.indexOf(o)<0&&n.indexOf(o)<0);if(r.length===0)return!0;const i=th.getRegExp(`(${r.map(o=>o==="?"?"\\?":o).join("|")})`);let s=!i.test(t);if(!s){const o=t.indexOf(n);o>0&&!i.test(t.substring(0,o))&&(s=!0)}return s},Ei=function(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!t)return;if(t[e])return t[e];const r=e.split(n);let i=t;for(let s=0;s<r.length;){if(!i||typeof i!="object")return;let o,l="";for(let a=s;a<r.length;++a)if(a!==s&&(l+=n),l+=r[a],o=i[l],o!==void 0){if(["string","number","boolean"].indexOf(typeof o)>-1&&a<r.length-1)continue;s+=a-s+1;break}i=o}return i},ar=t=>t&&t.replace("_","-"),rh={type:"logger",log(t){this.output("log",t)},warn(t){this.output("warn",t)},error(t){this.output("error",t)},output(t,e){console&&console[t]&&console[t].apply(console,e)}};let ih=class Si{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,n)}init(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=n.prefix||"i18next:",this.logger=e||rh,this.options=n,this.debug=n.debug}log(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return this.forward(n,"log","",!0)}warn(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return this.forward(n,"warn","",!0)}error(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return this.forward(n,"error","")}deprecate(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return this.forward(n,"warn","WARNING DEPRECATED: ",!0)}forward(e,n,r,i){return i&&!this.debug?null:(O(e[0])&&(e[0]=`${r}${this.prefix} ${e[0]}`),this.logger[n](e))}create(e){return new Si(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new Si(this.logger,e)}};var Ce=new ih;class Er{constructor(){this.observers={}}on(e,n){return e.split(" ").forEach(r=>{this.observers[r]||(this.observers[r]=new Map);const i=this.observers[r].get(n)||0;this.observers[r].set(n,i+1)}),this}off(e,n){if(this.observers[e]){if(!n){delete this.observers[e];return}this.observers[e].delete(n)}}emit(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(o=>{let[l,a]=o;for(let c=0;c<a;c++)l(...r)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(o=>{let[l,a]=o;for(let c=0;c<a;c++)l.apply(l,[e,...r])})}}class Ws extends Er{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const n=this.options.ns.indexOf(e);n>-1&&this.options.ns.splice(n,1)}getResource(e,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const s=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,o=i.ignoreJSONStructure!==void 0?i.ignoreJSONStructure:this.options.ignoreJSONStructure;let l;e.indexOf(".")>-1?l=e.split("."):(l=[e,n],r&&(Array.isArray(r)?l.push(...r):O(r)&&s?l.push(...r.split(s)):l.push(r)));const a=or(this.data,l);return!a&&!n&&!r&&e.indexOf(".")>-1&&(e=l[0],n=l[1],r=l.slice(2).join(".")),a||!o||!O(r)?a:Ei(this.data&&this.data[e]&&this.data[e][n],r,s)}addResource(e,n,r,i){let s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const o=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator;let l=[e,n];r&&(l=l.concat(o?r.split(o):r)),e.indexOf(".")>-1&&(l=e.split("."),i=n,n=l[1]),this.addNamespaces(n),zs(this.data,l,i),s.silent||this.emit("added",e,n,r,i)}addResources(e,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const s in r)(O(r[s])||Array.isArray(r[s]))&&this.addResource(e,n,s,r[s],{silent:!0});i.silent||this.emit("added",e,n,r)}addResourceBundle(e,n,r,i,s){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},l=[e,n];e.indexOf(".")>-1&&(l=e.split("."),i=r,r=n,n=l[1]),this.addNamespaces(n);let a=or(this.data,l)||{};o.skipCopy||(r=JSON.parse(JSON.stringify(r))),i?rl(a,r,s):a={...a,...r},zs(this.data,l,a),o.silent||this.emit("added",e,n,r)}removeResourceBundle(e,n){this.hasResourceBundle(e,n)&&delete this.data[e][n],this.removeNamespaces(n),this.emit("removed",e,n)}hasResourceBundle(e,n){return this.getResource(e,n)!==void 0}getResourceBundle(e,n){return n||(n=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(e,n)}:this.getResource(e,n)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const n=this.getDataByLanguage(e);return!!(n&&Object.keys(n)||[]).find(i=>n[i]&&Object.keys(n[i]).length>0)}toJSON(){return this.data}}var il={processors:{},addPostProcessor(t){this.processors[t.name]=t},handle(t,e,n,r,i){return t.forEach(s=>{this.processors[s]&&(e=this.processors[s].process(e,n,r,i))}),e}};const Gs={};class lr extends Er{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),qu(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Ce.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const r=this.resolve(e,n);return r&&r.res!==void 0}extractFromKey(e,n){let r=n.nsSeparator!==void 0?n.nsSeparator:this.options.nsSeparator;r===void 0&&(r=":");const i=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let s=n.ns||this.options.defaultNS||[];const o=r&&e.indexOf(r)>-1,l=!this.options.userDefinedKeySeparator&&!n.keySeparator&&!this.options.userDefinedNsSeparator&&!n.nsSeparator&&!nh(e,r,i);if(o&&!l){const a=e.match(this.interpolator.nestingRegexp);if(a&&a.length>0)return{key:e,namespaces:O(s)?[s]:s};const c=e.split(r);(r!==i||r===i&&this.options.ns.indexOf(c[0])>-1)&&(s=c.shift()),e=c.join(i)}return{key:e,namespaces:O(s)?[s]:s}}translate(e,n,r){if(typeof n!="object"&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),typeof n=="object"&&(n={...n}),n||(n={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const i=n.returnDetails!==void 0?n.returnDetails:this.options.returnDetails,s=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,{key:o,namespaces:l}=this.extractFromKey(e[e.length-1],n),a=l[l.length-1],c=n.lng||this.language,u=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(c&&c.toLowerCase()==="cimode"){if(u){const y=n.nsSeparator||this.options.nsSeparator;return i?{res:`${a}${y}${o}`,usedKey:o,exactUsedKey:o,usedLng:c,usedNS:a,usedParams:this.getUsedParamsDetails(n)}:`${a}${y}${o}`}return i?{res:o,usedKey:o,exactUsedKey:o,usedLng:c,usedNS:a,usedParams:this.getUsedParamsDetails(n)}:o}const h=this.resolve(e,n);let f=h&&h.res;const g=h&&h.usedKey||o,m=h&&h.exactUsedKey||o,x=Object.prototype.toString.apply(f),b=["[object Number]","[object Function]","[object RegExp]"],R=n.joinArrays!==void 0?n.joinArrays:this.options.joinArrays,w=!this.i18nFormat||this.i18nFormat.handleAsObject,v=!O(f)&&typeof f!="boolean"&&typeof f!="number";if(w&&f&&v&&b.indexOf(x)<0&&!(O(R)&&Array.isArray(f))){if(!n.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const y=this.options.returnedObjectHandler?this.options.returnedObjectHandler(g,f,{...n,ns:l}):`key '${o} (${this.language})' returned an object instead of string.`;return i?(h.res=y,h.usedParams=this.getUsedParamsDetails(n),h):y}if(s){const y=Array.isArray(f),_=y?[]:{},I=y?m:g;for(const P in f)if(Object.prototype.hasOwnProperty.call(f,P)){const A=`${I}${s}${P}`;_[P]=this.translate(A,{...n,joinArrays:!1,ns:l}),_[P]===A&&(_[P]=f[P])}f=_}}else if(w&&O(R)&&Array.isArray(f))f=f.join(R),f&&(f=this.extendTranslation(f,e,n,r));else{let y=!1,_=!1;const I=n.count!==void 0&&!O(n.count),P=lr.hasDefaultValue(n),A=I?this.pluralResolver.getSuffix(c,n.count,n):"",F=n.ordinal&&I?this.pluralResolver.getSuffix(c,n.count,{ordinal:!1}):"",z=I&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),j=z&&n[`defaultValue${this.options.pluralSeparator}zero`]||n[`defaultValue${A}`]||n[`defaultValue${F}`]||n.defaultValue;!this.isValidLookup(f)&&P&&(y=!0,f=j),this.isValidLookup(f)||(_=!0,f=o);const ee=(n.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&_?void 0:f,te=P&&j!==f&&this.options.updateMissing;if(_||y||te){if(this.logger.log(te?"updateKey":"missingKey",c,a,o,te?j:f),s){const re=this.resolve(o,{...n,keySeparator:!1});re&&re.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let X=[];const ne=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if(this.options.saveMissingTo==="fallback"&&ne&&ne[0])for(let re=0;re<ne.length;re++)X.push(ne[re]);else this.options.saveMissingTo==="all"?X=this.languageUtils.toResolveHierarchy(n.lng||this.language):X.push(n.lng||this.language);const de=(re,oe,ue)=>{const dt=P&&ue!==f?ue:ee;this.options.missingKeyHandler?this.options.missingKeyHandler(re,a,oe,dt,te,n):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(re,a,oe,dt,te,n),this.emit("missingKey",re,a,oe,f)};this.options.saveMissing&&(this.options.saveMissingPlurals&&I?X.forEach(re=>{const oe=this.pluralResolver.getSuffixes(re,n);z&&n[`defaultValue${this.options.pluralSeparator}zero`]&&oe.indexOf(`${this.options.pluralSeparator}zero`)<0&&oe.push(`${this.options.pluralSeparator}zero`),oe.forEach(ue=>{de([re],o+ue,n[`defaultValue${ue}`]||j)})}):de(X,o,j))}f=this.extendTranslation(f,e,n,h,r),_&&f===o&&this.options.appendNamespaceToMissingKey&&(f=`${a}:${o}`),(_||y)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?f=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${a}:${o}`:o,y?f:void 0):f=this.options.parseMissingKeyHandler(f))}return i?(h.res=f,h.usedParams=this.getUsedParamsDetails(n),h):f}extendTranslation(e,n,r,i,s){var o=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...r},r.lng||this.language||i.usedLng,i.usedNS,i.usedKey,{resolved:i});else if(!r.skipInterpolation){r.interpolation&&this.interpolator.init({...r,interpolation:{...this.options.interpolation,...r.interpolation}});const c=O(e)&&(r&&r.interpolation&&r.interpolation.skipOnVariables!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let u;if(c){const f=e.match(this.interpolator.nestingRegexp);u=f&&f.length}let h=r.replace&&!O(r.replace)?r.replace:r;if(this.options.interpolation.defaultVariables&&(h={...this.options.interpolation.defaultVariables,...h}),e=this.interpolator.interpolate(e,h,r.lng||this.language||i.usedLng,r),c){const f=e.match(this.interpolator.nestingRegexp),g=f&&f.length;u<g&&(r.nest=!1)}!r.lng&&this.options.compatibilityAPI!=="v1"&&i&&i.res&&(r.lng=this.language||i.usedLng),r.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var f=arguments.length,g=new Array(f),m=0;m<f;m++)g[m]=arguments[m];return s&&s[0]===g[0]&&!r.context?(o.logger.warn(`It seems you are nesting recursively key: ${g[0]} in key: ${n[0]}`),null):o.translate(...g,n)},r)),r.interpolation&&this.interpolator.reset()}const l=r.postProcess||this.options.postProcess,a=O(l)?[l]:l;return e!=null&&a&&a.length&&r.applyPostProcessor!==!1&&(e=il.handle(a,e,n,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...i,usedParams:this.getUsedParamsDetails(r)},...r}:r,this)),e}resolve(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r,i,s,o,l;return O(e)&&(e=[e]),e.forEach(a=>{if(this.isValidLookup(r))return;const c=this.extractFromKey(a,n),u=c.key;i=u;let h=c.namespaces;this.options.fallbackNS&&(h=h.concat(this.options.fallbackNS));const f=n.count!==void 0&&!O(n.count),g=f&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),m=n.context!==void 0&&(O(n.context)||typeof n.context=="number")&&n.context!=="",x=n.lngs?n.lngs:this.languageUtils.toResolveHierarchy(n.lng||this.language,n.fallbackLng);h.forEach(b=>{this.isValidLookup(r)||(l=b,!Gs[`${x[0]}-${b}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(l)&&(Gs[`${x[0]}-${b}`]=!0,this.logger.warn(`key "${i}" for languages "${x.join(", ")}" won't get resolved as namespace "${l}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),x.forEach(R=>{if(this.isValidLookup(r))return;o=R;const w=[u];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(w,u,R,b,n);else{let y;f&&(y=this.pluralResolver.getSuffix(R,n.count,n));const _=`${this.options.pluralSeparator}zero`,I=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(f&&(w.push(u+y),n.ordinal&&y.indexOf(I)===0&&w.push(u+y.replace(I,this.options.pluralSeparator)),g&&w.push(u+_)),m){const P=`${u}${this.options.contextSeparator}${n.context}`;w.push(P),f&&(w.push(P+y),n.ordinal&&y.indexOf(I)===0&&w.push(P+y.replace(I,this.options.pluralSeparator)),g&&w.push(P+_))}}let v;for(;v=w.pop();)this.isValidLookup(r)||(s=v,r=this.getResource(R,b,v,n))}))})}),{res:r,usedKey:i,exactUsedKey:s,usedLng:o,usedNS:l}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,n,r,i):this.resourceStore.getResource(e,n,r,i)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],r=e.replace&&!O(e.replace);let i=r?e.replace:e;if(r&&typeof e.count<"u"&&(i.count=e.count),this.options.interpolation.defaultVariables&&(i={...this.options.interpolation.defaultVariables,...i}),!r){i={...i};for(const s of n)delete i[s]}return i}static hasDefaultValue(e){const n="defaultValue";for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&n===r.substring(0,n.length)&&e[r]!==void 0)return!0;return!1}}const Hr=t=>t.charAt(0).toUpperCase()+t.slice(1);class qs{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Ce.create("languageUtils")}getScriptPartFromCode(e){if(e=ar(e),!e||e.indexOf("-")<0)return null;const n=e.split("-");return n.length===2||(n.pop(),n[n.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(n.join("-"))}getLanguagePartFromCode(e){if(e=ar(e),!e||e.indexOf("-")<0)return e;const n=e.split("-");return this.formatLanguageCode(n[0])}formatLanguageCode(e){if(O(e)&&e.indexOf("-")>-1){if(typeof Intl<"u"&&typeof Intl.getCanonicalLocales<"u")try{let i=Intl.getCanonicalLocales(e)[0];if(i&&this.options.lowerCaseLng&&(i=i.toLowerCase()),i)return i}catch{}const n=["hans","hant","latn","cyrl","cans","mong","arab"];let r=e.split("-");return this.options.lowerCaseLng?r=r.map(i=>i.toLowerCase()):r.length===2?(r[0]=r[0].toLowerCase(),r[1]=r[1].toUpperCase(),n.indexOf(r[1].toLowerCase())>-1&&(r[1]=Hr(r[1].toLowerCase()))):r.length===3&&(r[0]=r[0].toLowerCase(),r[1].length===2&&(r[1]=r[1].toUpperCase()),r[0]!=="sgn"&&r[2].length===2&&(r[2]=r[2].toUpperCase()),n.indexOf(r[1].toLowerCase())>-1&&(r[1]=Hr(r[1].toLowerCase())),n.indexOf(r[2].toLowerCase())>-1&&(r[2]=Hr(r[2].toLowerCase()))),r.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let n;return e.forEach(r=>{if(n)return;const i=this.formatLanguageCode(r);(!this.options.supportedLngs||this.isSupportedCode(i))&&(n=i)}),!n&&this.options.supportedLngs&&e.forEach(r=>{if(n)return;const i=this.getLanguagePartFromCode(r);if(this.isSupportedCode(i))return n=i;n=this.options.supportedLngs.find(s=>{if(s===i)return s;if(!(s.indexOf("-")<0&&i.indexOf("-")<0)&&(s.indexOf("-")>0&&i.indexOf("-")<0&&s.substring(0,s.indexOf("-"))===i||s.indexOf(i)===0&&i.length>1))return s})}),n||(n=this.getFallbackCodes(this.options.fallbackLng)[0]),n}getFallbackCodes(e,n){if(!e)return[];if(typeof e=="function"&&(e=e(n)),O(e)&&(e=[e]),Array.isArray(e))return e;if(!n)return e.default||[];let r=e[n];return r||(r=e[this.getScriptPartFromCode(n)]),r||(r=e[this.formatLanguageCode(n)]),r||(r=e[this.getLanguagePartFromCode(n)]),r||(r=e.default),r||[]}toResolveHierarchy(e,n){const r=this.getFallbackCodes(n||this.options.fallbackLng||[],e),i=[],s=o=>{o&&(this.isSupportedCode(o)?i.push(o):this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`))};return O(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&s(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&s(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&s(this.getLanguagePartFromCode(e))):O(e)&&s(this.formatLanguageCode(e)),r.forEach(o=>{i.indexOf(o)<0&&s(this.formatLanguageCode(o))}),i}}let sh=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],oh={1:t=>+(t>1),2:t=>+(t!=1),3:t=>0,4:t=>t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,5:t=>t==0?0:t==1?1:t==2?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5,6:t=>t==1?0:t>=2&&t<=4?1:2,7:t=>t==1?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,8:t=>t==1?0:t==2?1:t!=8&&t!=11?2:3,9:t=>+(t>=2),10:t=>t==1?0:t==2?1:t<7?2:t<11?3:4,11:t=>t==1||t==11?0:t==2||t==12?1:t>2&&t<20?2:3,12:t=>+(t%10!=1||t%100==11),13:t=>+(t!==0),14:t=>t==1?0:t==2?1:t==3?2:3,15:t=>t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2,16:t=>t%10==1&&t%100!=11?0:t!==0?1:2,17:t=>t==1||t%10==1&&t%100!=11?0:1,18:t=>t==0?0:t==1?1:2,19:t=>t==1?0:t==0||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3,20:t=>t==1?0:t==0||t%100>0&&t%100<20?1:2,21:t=>t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0,22:t=>t==1?0:t==2?1:(t<0||t>10)&&t%10==0?2:3};const ah=["v1","v2","v3"],lh=["v4"],Ks={zero:0,one:1,two:2,few:3,many:4,other:5},ch=()=>{const t={};return sh.forEach(e=>{e.lngs.forEach(n=>{t[n]={numbers:e.nr,plurals:oh[e.fc]}})}),t};class dh{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=n,this.logger=Ce.create("pluralResolver"),(!this.options.compatibilityJSON||lh.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=ch(),this.pluralRulesCache={}}addRule(e,n){this.rules[e]=n}clearCache(){this.pluralRulesCache={}}getRule(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi()){const r=ar(e==="dev"?"en":e),i=n.ordinal?"ordinal":"cardinal",s=JSON.stringify({cleanedCode:r,type:i});if(s in this.pluralRulesCache)return this.pluralRulesCache[s];let o;try{o=new Intl.PluralRules(r,{type:i})}catch{if(!e.match(/-|_/))return;const a=this.languageUtils.getLanguagePartFromCode(e);o=this.getRule(a,n)}return this.pluralRulesCache[s]=o,o}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getRule(e,n);return this.shouldUseIntlApi()?r&&r.resolvedOptions().pluralCategories.length>1:r&&r.numbers.length>1}getPluralFormsOfKey(e,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,r).map(i=>`${n}${i}`)}getSuffixes(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getRule(e,n);return r?this.shouldUseIntlApi()?r.resolvedOptions().pluralCategories.sort((i,s)=>Ks[i]-Ks[s]).map(i=>`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${i}`):r.numbers.map(i=>this.getSuffix(e,i,n)):[]}getSuffix(e,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const i=this.getRule(e,r);return i?this.shouldUseIntlApi()?`${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${i.select(n)}`:this.getSuffixRetroCompatible(i,n):(this.logger.warn(`no plural rule found for: ${e}`),"")}getSuffixRetroCompatible(e,n){const r=e.noAbs?e.plurals(n):e.plurals(Math.abs(n));let i=e.numbers[r];this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1&&(i===2?i="plural":i===1&&(i=""));const s=()=>this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString();return this.options.compatibilityJSON==="v1"?i===1?"":typeof i=="number"?`_plural_${i.toString()}`:s():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1?s():this.options.prepend&&r.toString()?this.options.prepend+r.toString():r.toString()}shouldUseIntlApi(){return!ah.includes(this.options.compatibilityJSON)}}const Js=function(t,e,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,s=Yu(t,e,n);return!s&&i&&O(n)&&(s=Ei(t,n,r),s===void 0&&(s=Ei(e,n,r))),s},Vr=t=>t.replace(/\$/g,"$$$$");class uh{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Ce.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||(n=>n),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:n,escapeValue:r,useRawValueToEscape:i,prefix:s,prefixEscaped:o,suffix:l,suffixEscaped:a,formatSeparator:c,unescapeSuffix:u,unescapePrefix:h,nestingPrefix:f,nestingPrefixEscaped:g,nestingSuffix:m,nestingSuffixEscaped:x,nestingOptionsSeparator:b,maxReplaces:R,alwaysFormat:w}=e.interpolation;this.escape=n!==void 0?n:Qu,this.escapeValue=r!==void 0?r:!0,this.useRawValueToEscape=i!==void 0?i:!1,this.prefix=s?Dt(s):o||"{{",this.suffix=l?Dt(l):a||"}}",this.formatSeparator=c||",",this.unescapePrefix=u?"":h||"-",this.unescapeSuffix=this.unescapePrefix?"":u||"",this.nestingPrefix=f?Dt(f):g||Dt("$t("),this.nestingSuffix=m?Dt(m):x||Dt(")"),this.nestingOptionsSeparator=b||",",this.maxReplaces=R||1e3,this.alwaysFormat=w!==void 0?w:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(n,r)=>n&&n.source===r?(n.lastIndex=0,n):new RegExp(r,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,n,r,i){let s,o,l;const a=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=g=>{if(g.indexOf(this.formatSeparator)<0){const R=Js(n,a,g,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(R,void 0,r,{...i,...n,interpolationkey:g}):R}const m=g.split(this.formatSeparator),x=m.shift().trim(),b=m.join(this.formatSeparator).trim();return this.format(Js(n,a,x,this.options.keySeparator,this.options.ignoreJSONStructure),b,r,{...i,...n,interpolationkey:x})};this.resetRegExp();const u=i&&i.missingInterpolationHandler||this.options.missingInterpolationHandler,h=i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:g=>Vr(g)},{regex:this.regexp,safeValue:g=>this.escapeValue?Vr(this.escape(g)):Vr(g)}].forEach(g=>{for(l=0;s=g.regex.exec(e);){const m=s[1].trim();if(o=c(m),o===void 0)if(typeof u=="function"){const b=u(e,s,i);o=O(b)?b:""}else if(i&&Object.prototype.hasOwnProperty.call(i,m))o="";else if(h){o=s[0];continue}else this.logger.warn(`missed to pass in variable ${m} for interpolating ${e}`),o="";else!O(o)&&!this.useRawValueToEscape&&(o=Bs(o));const x=g.safeValue(o);if(e=e.replace(s[0],x),h?(g.regex.lastIndex+=o.length,g.regex.lastIndex-=s[0].length):g.regex.lastIndex=0,l++,l>=this.maxReplaces)break}}),e}nest(e,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i,s,o;const l=(a,c)=>{const u=this.nestingOptionsSeparator;if(a.indexOf(u)<0)return a;const h=a.split(new RegExp(`${u}[ ]*{`));let f=`{${h[1]}`;a=h[0],f=this.interpolate(f,o);const g=f.match(/'/g),m=f.match(/"/g);(g&&g.length%2===0&&!m||m.length%2!==0)&&(f=f.replace(/'/g,'"'));try{o=JSON.parse(f),c&&(o={...c,...o})}catch(x){return this.logger.warn(`failed parsing options string in nesting for key ${a}`,x),`${a}${u}${f}`}return o.defaultValue&&o.defaultValue.indexOf(this.prefix)>-1&&delete o.defaultValue,a};for(;i=this.nestingRegexp.exec(e);){let a=[];o={...r},o=o.replace&&!O(o.replace)?o.replace:o,o.applyPostProcessor=!1,delete o.defaultValue;let c=!1;if(i[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(i[1])){const u=i[1].split(this.formatSeparator).map(h=>h.trim());i[1]=u.shift(),a=u,c=!0}if(s=n(l.call(this,i[1].trim(),o),o),s&&i[0]===e&&!O(s))return s;O(s)||(s=Bs(s)),s||(this.logger.warn(`missed to resolve ${i[1]} for nesting ${e}`),s=""),c&&(s=a.reduce((u,h)=>this.format(u,h,r.lng,{...r,interpolationkey:i[1].trim()}),s.trim())),e=e.replace(i[0],s),this.regexp.lastIndex=0}return e}}const hh=t=>{let e=t.toLowerCase().trim();const n={};if(t.indexOf("(")>-1){const r=t.split("(");e=r[0].toLowerCase().trim();const i=r[1].substring(0,r[1].length-1);e==="currency"&&i.indexOf(":")<0?n.currency||(n.currency=i.trim()):e==="relativetime"&&i.indexOf(":")<0?n.range||(n.range=i.trim()):i.split(";").forEach(o=>{if(o){const[l,...a]=o.split(":"),c=a.join(":").trim().replace(/^'+|'+$/g,""),u=l.trim();n[u]||(n[u]=c),c==="false"&&(n[u]=!1),c==="true"&&(n[u]=!0),isNaN(c)||(n[u]=parseInt(c,10))}})}return{formatName:e,formatOptions:n}},Mt=t=>{const e={};return(n,r,i)=>{let s=i;i&&i.interpolationkey&&i.formatParams&&i.formatParams[i.interpolationkey]&&i[i.interpolationkey]&&(s={...s,[i.interpolationkey]:void 0});const o=r+JSON.stringify(s);let l=e[o];return l||(l=t(ar(r),i),e[o]=l),l(n)}};class fh{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Ce.create("formatter"),this.options=e,this.formats={number:Mt((n,r)=>{const i=new Intl.NumberFormat(n,{...r});return s=>i.format(s)}),currency:Mt((n,r)=>{const i=new Intl.NumberFormat(n,{...r,style:"currency"});return s=>i.format(s)}),datetime:Mt((n,r)=>{const i=new Intl.DateTimeFormat(n,{...r});return s=>i.format(s)}),relativetime:Mt((n,r)=>{const i=new Intl.RelativeTimeFormat(n,{...r});return s=>i.format(s,r.range||"day")}),list:Mt((n,r)=>{const i=new Intl.ListFormat(n,{...r});return s=>i.format(s)})},this.init(e)}init(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=n.interpolation.formatSeparator||","}add(e,n){this.formats[e.toLowerCase().trim()]=n}addCached(e,n){this.formats[e.toLowerCase().trim()]=Mt(n)}format(e,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const s=n.split(this.formatSeparator);if(s.length>1&&s[0].indexOf("(")>1&&s[0].indexOf(")")<0&&s.find(l=>l.indexOf(")")>-1)){const l=s.findIndex(a=>a.indexOf(")")>-1);s[0]=[s[0],...s.splice(1,l)].join(this.formatSeparator)}return s.reduce((l,a)=>{const{formatName:c,formatOptions:u}=hh(a);if(this.formats[c]){let h=l;try{const f=i&&i.formatParams&&i.formatParams[i.interpolationkey]||{},g=f.locale||f.lng||i.locale||i.lng||r;h=this.formats[c](l,g,{...u,...i,...f})}catch(f){this.logger.warn(f)}return h}else this.logger.warn(`there was no format function for ${c}`);return l},e)}}const ph=(t,e)=>{t.pending[e]!==void 0&&(delete t.pending[e],t.pendingCount--)};class gh extends Er{constructor(e,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=n,this.services=r,this.languageUtils=r.languageUtils,this.options=i,this.logger=Ce.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=i.maxParallelReads||10,this.readingCalls=0,this.maxRetries=i.maxRetries>=0?i.maxRetries:5,this.retryTimeout=i.retryTimeout>=1?i.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(r,i.backend,i)}queueLoad(e,n,r,i){const s={},o={},l={},a={};return e.forEach(c=>{let u=!0;n.forEach(h=>{const f=`${c}|${h}`;!r.reload&&this.store.hasResourceBundle(c,h)?this.state[f]=2:this.state[f]<0||(this.state[f]===1?o[f]===void 0&&(o[f]=!0):(this.state[f]=1,u=!1,o[f]===void 0&&(o[f]=!0),s[f]===void 0&&(s[f]=!0),a[h]===void 0&&(a[h]=!0)))}),u||(l[c]=!0)}),(Object.keys(s).length||Object.keys(o).length)&&this.queue.push({pending:o,pendingCount:Object.keys(o).length,loaded:{},errors:[],callback:i}),{toLoad:Object.keys(s),pending:Object.keys(o),toLoadLanguages:Object.keys(l),toLoadNamespaces:Object.keys(a)}}loaded(e,n,r){const i=e.split("|"),s=i[0],o=i[1];n&&this.emit("failedLoading",s,o,n),!n&&r&&this.store.addResourceBundle(s,o,r,void 0,void 0,{skipCopy:!0}),this.state[e]=n?-1:2,n&&r&&(this.state[e]=0);const l={};this.queue.forEach(a=>{Ju(a.loaded,[s],o),ph(a,e),n&&a.errors.push(n),a.pendingCount===0&&!a.done&&(Object.keys(a.loaded).forEach(c=>{l[c]||(l[c]={});const u=a.loaded[c];u.length&&u.forEach(h=>{l[c][h]===void 0&&(l[c][h]=!0)})}),a.done=!0,a.errors.length?a.callback(a.errors):a.callback())}),this.emit("loaded",l),this.queue=this.queue.filter(a=>!a.done)}read(e,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,o=arguments.length>5?arguments[5]:void 0;if(!e.length)return o(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:n,fcName:r,tried:i,wait:s,callback:o});return}this.readingCalls++;const l=(c,u)=>{if(this.readingCalls--,this.waitingReads.length>0){const h=this.waitingReads.shift();this.read(h.lng,h.ns,h.fcName,h.tried,h.wait,h.callback)}if(c&&u&&i<this.maxRetries){setTimeout(()=>{this.read.call(this,e,n,r,i+1,s*2,o)},s);return}o(c,u)},a=this.backend[r].bind(this.backend);if(a.length===2){try{const c=a(e,n);c&&typeof c.then=="function"?c.then(u=>l(null,u)).catch(l):l(null,c)}catch(c){l(c)}return}return a(e,n,l)}prepareLoading(e,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),i&&i();O(e)&&(e=this.languageUtils.toResolveHierarchy(e)),O(n)&&(n=[n]);const s=this.queueLoad(e,n,r,i);if(!s.toLoad.length)return s.pending.length||i(),null;s.toLoad.forEach(o=>{this.loadOne(o)})}load(e,n,r){this.prepareLoading(e,n,{},r)}reload(e,n,r){this.prepareLoading(e,n,{reload:!0},r)}loadOne(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const r=e.split("|"),i=r[0],s=r[1];this.read(i,s,"read",void 0,void 0,(o,l)=>{o&&this.logger.warn(`${n}loading namespace ${s} for language ${i} failed`,o),!o&&l&&this.logger.log(`${n}loaded namespace ${s} for language ${i}`,l),this.loaded(e,o,l)})}saveMissing(e,n,r,i,s){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},l=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(n)){this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(r==null||r==="")){if(this.backend&&this.backend.create){const a={...o,isUpdate:s},c=this.backend.create.bind(this.backend);if(c.length<6)try{let u;c.length===5?u=c(e,n,r,i,a):u=c(e,n,r,i),u&&typeof u.then=="function"?u.then(h=>l(null,h)).catch(l):l(null,u)}catch(u){l(u)}else c(e,n,r,i,l,a)}!e||!e[0]||this.store.addResource(e[0],n,r,i)}}}const Ys=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:t=>{let e={};if(typeof t[1]=="object"&&(e=t[1]),O(t[1])&&(e.defaultValue=t[1]),O(t[2])&&(e.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const n=t[3]||t[2];Object.keys(n).forEach(r=>{e[r]=n[r]})}return e},interpolation:{escapeValue:!0,format:t=>t,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),Xs=t=>(O(t.ns)&&(t.ns=[t.ns]),O(t.fallbackLng)&&(t.fallbackLng=[t.fallbackLng]),O(t.fallbackNS)&&(t.fallbackNS=[t.fallbackNS]),t.supportedLngs&&t.supportedLngs.indexOf("cimode")<0&&(t.supportedLngs=t.supportedLngs.concat(["cimode"])),t),Un=()=>{},mh=t=>{Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(n=>{typeof t[n]=="function"&&(t[n]=t[n].bind(t))})};class bn extends Er{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;if(super(),this.options=Xs(e),this.services={},this.logger=Ce,this.modules={external:[]},mh(this),n&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,n),this;setTimeout(()=>{this.init(e,n)},0)}}init(){var e=this;let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof n=="function"&&(r=n,n={}),!n.defaultNS&&n.defaultNS!==!1&&n.ns&&(O(n.ns)?n.defaultNS=n.ns:n.ns.indexOf("translation")<0&&(n.defaultNS=n.ns[0]));const i=Ys();this.options={...i,...this.options,...Xs(n)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...i.interpolation,...this.options.interpolation}),n.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=n.keySeparator),n.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=n.nsSeparator);const s=u=>u?typeof u=="function"?new u:u:null;if(!this.options.isClone){this.modules.logger?Ce.init(s(this.modules.logger),this.options):Ce.init(null,this.options);let u;this.modules.formatter?u=this.modules.formatter:typeof Intl<"u"&&(u=fh);const h=new qs(this.options);this.store=new Ws(this.options.resources,this.options);const f=this.services;f.logger=Ce,f.resourceStore=this.store,f.languageUtils=h,f.pluralResolver=new dh(h,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),u&&(!this.options.interpolation.format||this.options.interpolation.format===i.interpolation.format)&&(f.formatter=s(u),f.formatter.init(f,this.options),this.options.interpolation.format=f.formatter.format.bind(f.formatter)),f.interpolator=new uh(this.options),f.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},f.backendConnector=new gh(s(this.modules.backend),f.resourceStore,f,this.options),f.backendConnector.on("*",function(g){for(var m=arguments.length,x=new Array(m>1?m-1:0),b=1;b<m;b++)x[b-1]=arguments[b];e.emit(g,...x)}),this.modules.languageDetector&&(f.languageDetector=s(this.modules.languageDetector),f.languageDetector.init&&f.languageDetector.init(f,this.options.detection,this.options)),this.modules.i18nFormat&&(f.i18nFormat=s(this.modules.i18nFormat),f.i18nFormat.init&&f.i18nFormat.init(this)),this.translator=new lr(this.services,this.options),this.translator.on("*",function(g){for(var m=arguments.length,x=new Array(m>1?m-1:0),b=1;b<m;b++)x[b-1]=arguments[b];e.emit(g,...x)}),this.modules.external.forEach(g=>{g.init&&g.init(this)})}if(this.format=this.options.interpolation.format,r||(r=Un),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const u=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);u.length>0&&u[0]!=="dev"&&(this.options.lng=u[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(u=>{this[u]=function(){return e.store[u](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(u=>{this[u]=function(){return e.store[u](...arguments),e}});const a=on(),c=()=>{const u=(h,f)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),a.resolve(f),r(h,f)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return u(null,this.t.bind(this));this.changeLanguage(this.options.lng,u)};return this.options.resources||!this.options.initImmediate?c():setTimeout(c,0),a}loadResources(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Un;const i=O(e)?e:this.language;if(typeof e=="function"&&(r=e),!this.options.resources||this.options.partialBundledLanguages){if(i&&i.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return r();const s=[],o=l=>{if(!l||l==="cimode")return;this.services.languageUtils.toResolveHierarchy(l).forEach(c=>{c!=="cimode"&&s.indexOf(c)<0&&s.push(c)})};i?o(i):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(a=>o(a)),this.options.preload&&this.options.preload.forEach(l=>o(l)),this.services.backendConnector.load(s,this.options.ns,l=>{!l&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),r(l)})}else r(null)}reloadResources(e,n,r){const i=on();return typeof e=="function"&&(r=e,e=void 0),typeof n=="function"&&(r=n,n=void 0),e||(e=this.languages),n||(n=this.options.ns),r||(r=Un),this.services.backendConnector.reload(e,n,s=>{i.resolve(),r(s)}),i}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&il.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let n=0;n<this.languages.length;n++){const r=this.languages[n];if(!(["cimode","dev"].indexOf(r)>-1)&&this.store.hasLanguageSomeTranslations(r)){this.resolvedLanguage=r;break}}}changeLanguage(e,n){var r=this;this.isLanguageChangingTo=e;const i=on();this.emit("languageChanging",e);const s=a=>{this.language=a,this.languages=this.services.languageUtils.toResolveHierarchy(a),this.resolvedLanguage=void 0,this.setResolvedLanguage(a)},o=(a,c)=>{c?(s(c),this.translator.changeLanguage(c),this.isLanguageChangingTo=void 0,this.emit("languageChanged",c),this.logger.log("languageChanged",c)):this.isLanguageChangingTo=void 0,i.resolve(function(){return r.t(...arguments)}),n&&n(a,function(){return r.t(...arguments)})},l=a=>{!e&&!a&&this.services.languageDetector&&(a=[]);const c=O(a)?a:this.services.languageUtils.getBestMatchFromCodes(a);c&&(this.language||s(c),this.translator.language||this.translator.changeLanguage(c),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(c)),this.loadResources(c,u=>{o(u,c)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?l(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(l):this.services.languageDetector.detect(l):l(e),i}getFixedT(e,n,r){var i=this;const s=function(o,l){let a;if(typeof l!="object"){for(var c=arguments.length,u=new Array(c>2?c-2:0),h=2;h<c;h++)u[h-2]=arguments[h];a=i.options.overloadTranslationOptionHandler([o,l].concat(u))}else a={...l};a.lng=a.lng||s.lng,a.lngs=a.lngs||s.lngs,a.ns=a.ns||s.ns,a.keyPrefix!==""&&(a.keyPrefix=a.keyPrefix||r||s.keyPrefix);const f=i.options.keySeparator||".";let g;return a.keyPrefix&&Array.isArray(o)?g=o.map(m=>`${a.keyPrefix}${f}${m}`):g=a.keyPrefix?`${a.keyPrefix}${f}${o}`:o,i.t(g,a)};return O(e)?s.lng=e:s.lngs=e,s.ns=n,s.keyPrefix=r,s}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const r=n.lng||this.resolvedLanguage||this.languages[0],i=this.options?this.options.fallbackLng:!1,s=this.languages[this.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const o=(l,a)=>{const c=this.services.backendConnector.state[`${l}|${a}`];return c===-1||c===0||c===2};if(n.precheck){const l=n.precheck(this,o);if(l!==void 0)return l}return!!(this.hasResourceBundle(r,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||o(r,e)&&(!i||o(s,e)))}loadNamespaces(e,n){const r=on();return this.options.ns?(O(e)&&(e=[e]),e.forEach(i=>{this.options.ns.indexOf(i)<0&&this.options.ns.push(i)}),this.loadResources(i=>{r.resolve(),n&&n(i)}),r):(n&&n(),Promise.resolve())}loadLanguages(e,n){const r=on();O(e)&&(e=[e]);const i=this.options.preload||[],s=e.filter(o=>i.indexOf(o)<0&&this.services.languageUtils.isSupportedCode(o));return s.length?(this.options.preload=i.concat(s),this.loadResources(o=>{r.resolve(),n&&n(o)}),r):(n&&n(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";const n=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],r=this.services&&this.services.languageUtils||new qs(Ys());return n.indexOf(r.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return new bn(e,n)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Un;const r=e.forkResourceStore;r&&delete e.forkResourceStore;const i={...this.options,...e,isClone:!0},s=new bn(i);return(e.debug!==void 0||e.prefix!==void 0)&&(s.logger=s.logger.clone(e)),["store","services","language"].forEach(l=>{s[l]=this[l]}),s.services={...this.services},s.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},r&&(s.store=new Ws(this.store.data,i),s.services.resourceStore=s.store),s.translator=new lr(s.services,i),s.translator.on("*",function(l){for(var a=arguments.length,c=new Array(a>1?a-1:0),u=1;u<a;u++)c[u-1]=arguments[u];s.emit(l,...c)}),s.init(i,n),s.translator.options=i,s.translator.backendConnector.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},s}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const se=bn.createInstance();se.createInstance=bn.createInstance;se.createInstance;se.dir;se.init;se.loadResources;se.reloadResources;se.use;se.changeLanguage;se.getFixedT;se.t;se.exists;se.setDefaultNamespace;se.hasLoadedNamespace;se.loadNamespaces;se.loadLanguages;const yh="Sign In",bh="Sign Out",vh="Orders",wh="Language",xh="Loading",Eh="Retry",Sh="Cancel",Th="Get early access",Rh="Account Menu",_h="SenditGo home",Ih="Toggle theme",Ch="Clear form",Ph={shipper:{label:"Shipper",hint:"Create, import and track your orders"},carrier:{label:"Carrier",hint:"SenditGo Carrier fleet console",login:"Carrier login"},consignee:{label:"Consignee",hint:"Sign in to SenditGo Consignee",login:"Consignee login"}},Ah="Carrier login",Oh={signIn:yh,signOut:bh,orders:vh,language:wh,loading:xh,retry:Eh,cancel:Sh,getEarlyAccess:Th,accountMenu:Rh,brandHome:_h,toggleTheme:Ih,clearForm:Ch,loginRole:Ph,carrierLogin:Ah},kh={eyebrow:"Tenant Portal"},Nh={ariaLabel:"Platform Navigation",platform:"Platform",groups:{operations:"Operations",finance:"Finance",admin:"Admin"},orders:"Orders",createOrder:"Create Order",importOrders:"Import Orders",billing:"Billing",usersRoles:"Users & Roles"},jh={title:"Sign in to {{brand}}",lead:"Track orders, create shipments, and manage your team.",mobileLabel:"Mobile Number",mobilePlaceholder:"412 345 678",sendCode:"Send Code",otpLabel:"Verification Code",otpHint:"Enter the 6-digit code sent to {{phone}}.",verify:"Verify & Sign In",resend:"Resend Code",changeNumber:"Change Number",invalidPhone:"Enter a valid mobile number.",invalidOtp:"Enter the 6-digit code.",otpFailed:"That code didn't match. Check it and try again.",sendFailed:"We couldn't send the code. Try again in a moment.",loginFailed:"Sign-in failed. Try again.",devSignIn:"Dev Sign-In (Mock)"},Lh={title:"Orders",lead:"Find shipments, review status, and open the tracking detail without leaving the platform.",searchLabel:"Search",searchPlaceholder:"Order ID",statusLabel:"Status",allStatuses:"All statuses",applyFilters:"Apply",clearFilters:"Clear",colOrderId:"Order ID",colRoute:"Route",colCreated:"Created",colPackages:"Packages",colStatus:"Status",colActions:"Actions",viewDetails:"View",empty:"No orders match this view.",loadFailed:"We couldn't load your orders.",showingRange:"Showing {{from}}-{{to}} of {{total}}",prevPage:"Previous",nextPage:"Next",detailTitle:"Order {{id}}",detailLead:"Tracking detail, contact handoff, driver assignment, and package state.",detailLoadFailed:"We couldn't load this order.",backToOrders:"Back to orders",sender:"Sender",recipient:"Recipient",timeline:"Timeline",driver:"Driver",comment:"Comment",packagesTitle:"Packages",packageId:"Package ID",packageSize:"Size",packageWeight:"Weight",packagePrice:"Price",packageAbbrev:"pkgs",notAssigned:"Not assigned",none:"None",routeTo:"to",emptyFiltered:"No orders match these filters.",pickup:"Pickup",delivery:"Delivery",timezone:"Timezone",sizeCm:"{{length}} x {{width}} x {{height}} cm",weightKg:"{{weight}} kg"},Dh={title:"Create Order",lead:"Prepare a shipment draft with sender, recipient, package, and delivery notes.",sectionContact:"Contact Details",sectionPackage:"Package",senderName:"Sender Name",senderAddress:"Sender Address",senderMobile:"Sender Mobile",senderPostcode:"Sender Postcode",recipientName:"Recipient Name",recipientAddress:"Recipient Address",recipientMobile:"Recipient Mobile",recipientPostcode:"Recipient Postcode",packages:"Packages",weight:"Weight (kg)",reference:"Reference",notes:"Driver Notes",prepareDraft:"Prepare Draft",draftReady:"Your draft is complete and validated.",required:"Complete sender, recipient, addresses, and at least one package.",backendNotice:"Online order creation is coming soon. You can prepare and validate a draft here today."},Mh={title:"Import Orders",lead:"Upload a fleet-template CSV to open a preview session. Commit is not live yet.",uploadLabel:"CSV File",chooseFile:"Choose file",downloadTemplate:"Download template",columnsTitle:"Template",columnsBody:"Use the fleet import template (invoice, customer, sender and recipient address parts, SKU, qty, weight, and size). A 6-column file will not open a session.",previewTitle:"Preview session",sessionTitle:"Session {{id}}",sessionFile:"{{name}}",sessionCounts:"{{valid}} valid · {{invalid}} invalid · {{total}} rows",rowsParsed:"{{count}} row parsed",rowsParsed_other:"{{count}} rows parsed",backendNotice:"Online batch import is not live yet. Upload opens a mock preview session from the fleet CSV template — it does not create orders or price them.",previewEmpty:"Upload a fleet-template CSV to open a preview session.",noRows:"That file has no order rows. Add at least one row below the header and try again.",missingColumns:"The file is missing required columns: {{columns}}.",parseFailed:"We couldn't read that file. Export it as CSV and try again.",fileFormat:"Use a .csv exported from the fleet template.",uploadFailed:"We couldn't open a preview session. Try again.",templateFailed:"We couldn't download the template. Try again.",jobMissing:"That preview session is no longer available. Upload the file again.",clearSession:"Clear session",filterAll:"All",filterValid:"Valid",filterInvalid:"Invalid",colInvoice:"Invoice",colRoute:"Route",colPickup:"Pickup",colDelivery:"Delivery",colQty:"Qty",colWeight:"Weight",colReason:"Reason",rowValid:"Valid",rowInvalid:"Invalid"},Fh={title:"Users & Roles",lead:"Manage who can sign in to the portal and what each role can do.",usersTitle:"Users",name:"Name",email:"Email",role:"Role",status:"Status",actions:"Actions",active:"Active",inactive:"Inactive",you:"You",usersEmpty:"No users yet — add your first teammate.",usersLoadFailed:"We couldn't load users.",editUser:"Edit",saveUser:"Save",userUpdated:"{{name}}'s role is now {{role}}.",userUpdateFailed:"We couldn't update that user. Try again.",addUserTitle:"Add User",addUser:"Add User",addUserRequired:"Enter a name and pick a role.",addUserSuccess:"{{name}} has been added.",addUserFailed:"We couldn't add that user. Try again.",rolesTitle:"Roles",permissions:"Permissions",members:"Members",rolesEmpty:"No roles yet — create your first role.",rolesLoadFailed:"We couldn't load roles.",createRole:"Create Role",editRole:"Edit",deleteRole:"Delete",deleteConfirm:"Delete this role?",confirmDelete:"Confirm Delete",roleDeleted:"Role deleted.",deleteFailed:"We couldn't delete that role. Try again.",deleteBlocked_one:"Reassign {{count}} user before deleting this role.",deleteBlocked_other:"Reassign {{count}} users before deleting this role.",systemRole:"Built-in",roleFormCreateTitle:"Create Role",roleFormEditTitle:"Edit Role",roleFormLead:"Name the role and choose what it can do.",roleName:"Role Name",roleFormRequired:"Enter a role name and pick at least one permission.",roleFormSaveFailed:"We couldn't save the role. Try again.",roleFormLoadFailed:"We couldn't load that role.",roleFormNotFound:"This role was not found.",backToAdmin:"Back to Users & Roles",saveChanges:"Save Changes",groupOrders:"Orders",groupUsers:"Users",groupRoles:"Roles",selectRole:"Select a role",rolesUnavailable:"We couldn't load roles for selection.",roleFormSystem:"Built-in roles can't be edited.",invitePhone:"Mobile Number",pending:"Pending",resend:"Resend",revoke:"Revoke",suspend:"Suspend",reactivate:"Reactivate",suspended:"Suspended",activityTitle:"Activity",audit:{roleChanged:"{{actor}} changed {{target}}'s role to {{role}}",suspended:"{{actor}} suspended {{target}}",reactivated:"{{actor}} reactivated {{target}}",invited:"{{actor}} invited {{phone}} as {{role}}",inviteRevoked:"{{actor}} revoked the invite for {{phone}}",inviteResent:"{{actor}} resent the invite to {{phone}}",roleCreated:"{{actor}} created the role {{role}}",roleUpdated:"{{actor}} updated the role {{role}}",roleDeleted:"{{actor}} deleted the role {{role}}"},lastOwnerBlock:"You're the only owner. Assign another owner first.",selfDemoteConfirm:"You'll lose {{capabilities}}.",scopeOwn:"My Orders",scopeCompany:"Company Orders",inviteSectionTitle:"Invite by Phone",sendInvite:"Send Invite",inviteRequired:"Enter a valid +61 mobile number and choose a role.",inviteSentNotice:"Invite sent to {{phone}}.",inviteSendFailed:"We couldn't send that invite. Try again.",inviteResendFailed:"We couldn't resend that invite. Try again.",inviteRevokeFailed:"We couldn't revoke that invite. Try again.",invitesLoadFailed:"We couldn't load pending invites.",invitesEmpty:"No pending invites.",expiresOn:"Expires"},Uh={title:"Billing & Payments",lead:"How your account is billed, and the payment methods we support.",methodsTitle:"Payment Methods",status:{available:"Available",pending:"Coming Soon"},methods:{"on-account":{name:"On Account / Invoice",body:"Orders placed in the portal are billed to your company account and settled by invoice — no payment step at order time."},"stripe-card":{name:"Card Payments via Stripe",body:"Pay for orders by card, processed by Stripe. The portal integration is prepared and switches on once the payment API and account keys are issued."}},howTitle:"How Card Payments Will Work",how:{secure:{title:"Card details stay with Stripe",body:"Card numbers are entered in Stripe-hosted secure fields (Stripe Elements) and never touch SenditGo servers, keeping PCI compliance scope with Stripe."},intent:{title:"The backend creates the payment",body:"For each payment, the SenditGo backend creates a Stripe PaymentIntent for the order total and hands the portal its client secret."},confirm:{title:"The portal confirms it",body:"The portal confirms the payment with the per-environment publishable key; bank verification (3-D Secure) is handled by Stripe automatically when required."},receipt:{title:"Receipts flow back to the order",body:"Stripe notifies the backend by webhook, and the payment status and receipt attach to the order in your history."}},readinessTitle:"Integration status:",readinessBody:"The portal side is prepared — provider registry, per-environment key slots, and this page. Card payments switch on when the backend payment API is live and the Stripe keys are configured; on-account billing continues unchanged either way."},$h={ord_ls:"View Orders",ord_add:"Create Order",ord_imp:"Batch Import Orders",ord_ls_own:"View Own Orders",ord_ls_sub:"View Team Orders",ord_ls_all:"View All Company Orders",perm_role_ls:"View Roles",perm_role_add:"Create Role",perm_role_edt:"Edit Role",perm_role_del:"Delete Role",perm_asst_ls:"View Users",perm_asst_add:"Add Users",perm_asst_edt:"Edit Users",perm_asst_blk:"Suspend / Reactivate Users"},Bh={owner:{name:"Owner",desc:"Full access — manage orders company-wide, invite and suspend teammates, and manage roles."},manager:{name:"Manager",desc:"Runs orders company-wide and manages the team; cannot change roles or permissions."},staff:{name:"Staff",desc:"Views and creates orders for their team; cannot manage users or roles."},viewer:{name:"Viewer",desc:"Read-only access to their own orders."},capabilities:{viewOrders:"View orders",createOrders:"Create orders",importOrders:"Import orders",companyOrders:"View company-wide orders",inviteMembers:"Invite members",suspendMembers:"Suspend members",manageRoles:"Manage roles"}},Hh={common:kh,nav:Nh,login:jh,orders:Lh,createOrder:Dh,importOrders:Mh,admin:Fh,billing:Uh,permissions:$h,roles:Bh},Vh={1:"Payment pending",2:"To be scheduled",3:"Awaiting pickup",4:"In transit- supplier to fulfilment center",5:"In fulfilment center",6:"In transit- fulfilment center to customer",7:"Arrived at customer fulfilment center",8:"In transit",9:"Canceled",10:"Delivered",11:"Delivered & Signed",12:"Delivered with Exceptions",13:"Completed",14:"Full cancellation",15:"Complete Manually",16:"Delete Pending Confirmation"},zh={1:"Param Invalid.",2:"Param Required.",3:"Firebase Conn Error.",4:"Phone Number Required.",5:"Account Data Not Exist.",6:"Parse Error.",7:"Param Format Error.",8:"Email Or Password Not Correct.",9:"No Permission.",10:"Role Permission Name Duplicate.",11:"Role Permission Not Exist.",12:"Mobile Had Been Registered.",13:"Email Had Been Registered.",14:"Confirm Password Is Not Correct.",15:"Delivery Not Found.",16:"Delivery Duplicate Signature.",17:"Duplicate System Setting Keyword.",18:"Duplicate Chatroom Service Score.",19:"Chat Partner Haven'T Joined The Chatroom.",20:"Company/Fleet Is Not Exist.",21:"The Chatroom Has Reached The Maximum.",22:"Account Hasn'T Review Data.",23:"Record Not Found.",24:"Abnormal Account.",25:"Delivery Duplicate Score.",26:"Ip Format Error.",27:"Fleet Code Not Exist.",28:"Account In Audit.",29:"Fleet Code Has Benn Used.",30:"Fleet Not Found.",31:"Company Not Found.",32:"Fleet Has Been Loaned.",33:"Account Already Exists.",34:"Vehicle Is Using.",35:"Vehicle Not Found.",36:"Warehouse Not Found.",37:"The Address Format Is Incorrect.",38:"The Warehouse Route Setting Is Incorrect.",39:"Salesorder Not Found.",40:"Company Code Is Already In Use.",41:"Department Does Not Exist.",42:"Account Has Been Disabled.",43:"Salesorder Packages Have Not Been Completed Yet.",44:"Order Repeat Rating.",45:"Package Does Not Exist.",46:"Fleet Company Information Not Found.",47:"Team Rental Record Does Not Exist.",48:"The Driver'S Time Zone Is Incorrectly Read.",49:"Converting Driver'S Time Zone Is Incorrect.",50:"Keyword Does Not Exist.",51:"The City Does Not Exist.",52:"Json Format Conversion Failed.",53:"Errchangeroledriver.",54:"Errchangerolefleetdriver.",55:"Erraccountnotactive.",56:"Wrong License Type.",57:"Errchangerolemember.",58:"Errchangerolecompanymember.",59:"Errsalesordernotwaitforpay.",60:"Errdeliveryidincorrect.",61:"Platform Not Exist.",62:"Delivery Signature Record Not Exist.",63:"Delivery Plan Not Exist.",64:"Could Not Retrieve Coordinates From Geocoding Apis.",65:"Failed To Create An Order In Toll Shipment Api.",66:"Audit Accounts Not Exist.",67:"Audit Data Incomplete Or Content Mismatch.",68:"Could Not Parse Audit Data From Register Or Update.",69:"Invalid Review Status Id.",70:"The Phone Number Has Been Registered On This Role..",71:"Scheduledatetype Id Not Exist.",72:"Booking Date Invalid.",73:"Self-Account Removal Is Not Allowed.",74:"Cannot Modify Delivery Plan: Execution Has Already Started.",75:"Driver Is Not Available: Either Not Found, Currently Busy, Or Inactive.",76:"Simulation Start Time Must Be At Least 15 Minutes Before Current Local Time.",77:"Simulation Details Not Exist.",78:"An Error Occurred During The Simulation Calculation Process.",79:"Simulation Is Currently In Progress.",80:"Failed To Activate Simulation Result.",81:"Simulation Has Already Been Assigned And Cannot Be Modified Further.",82:"No Drivers Have Bookings Scheduled For Date.",83:"This Location Is Currently Not Available For Booking.",84:"Operation Failed Because The Delivery Plan Has Been Deleted.",85:"Route Injection Details Not Exist.",86:"Route Injection Calculating Failed.",87:"Route Injection Details Is Not Applicable.",88:"Route Injection Has Not Been Subscribed Or Failed During Subscription.",89:"Route Injection Failed: Python Server Calculating Failed.",92:"This route has a pending warehouse return. Please wait for the driver to complete it before making changes.",93:"Permission denied",100:"Database connection error.",101:"Database Write Error.",134:"This account has already been deleted.",142:"The warehouse-return stop must stay last when reordering.",200:"Token Not Exist.",201:"Token Parse Failed.",202:"Token Invalid.",203:"Token Expired.",204:"Logged out due to login at another location.",300:"Redis Connection Error.",301:"Redis Write Error.",401:"File Open Error.",402:"File Write Error.",403:"File Decode Error.",404:"File Format Error.",405:"File Close Error.",406:"File Delete Error.",500:"Aws Credential Error.",501:"Upload File Failed.",600:"Recaptcha Failed.",601:"Geocoding Failed.",700:"Websocket Write Error.",701:"Websocket Conn Failed.",800:"Netsuite Request Failed.",801:"Netsuite Response Error.",900:"Rabbitmq Conn Failed.",901:"Rabbitmq Read Message Failed.",902:"Rabbitmq Publish Message Failed.",1e3:"Pyserver Conn Failed.",1001:"PyServer Route Failed",1002:"Calculate Delivery Fee Failed",2010:"Payment Not Exist",2011:"Payment Not Pending",3e3:"Partial Success"},Wh={orderCreated:"Order Created",scheduled:"Scheduled",readyForPickup:"Ready for Pickup",inTransit:"In transit",delivered:"Delivered",completed:"Completed"},Gh={orderCreated:"Your order is confirmed and being prepared.",scheduled:"Your shipment is scheduled for pickup.",readyForPickup:"Your shipment is ready for pickup.",inTransit:"Your shipment is on its way.",delivered:"Your shipment has been delivered.",completed:"This shipment is complete.",exception:"Delivered — with an exception to review.",cancelled:"This shipment has been cancelled and will not be processed."},qh={orderCreated:"Order Created",packageReceived:"Package Received",packageReceivedInTransit:"Package Received - In Transit",pickedUpFromSender:"Picked Up from Sender",departedOriginCountry:"Departed Origin Country",customsProcessing:"Customs Processing",customsCleared:"Customs Cleared",departedHub:"Departed Hub",arrivedRegionalHub:"Arrived at Regional Hub",arrivedLocalFacility:"Arrived at Local Facility",outForDelivery:"In transit",outForDeliveryPartial:"In transit (partial shipment)",deliveredSigned:"Delivered & Signed",cancelledByCustomer:"Order Cancelled by Customer"},Kh={badgeLabel_one:"{{count}} Exception",badgeLabel_other:"{{count}} Exceptions",delay:{reason:"This shipment has been rescheduled. The estimated delivery date may change."},failedAttempt:{reason:"A delivery attempt was unsuccessful."},addressProblem:{reason:"We couldn't confirm the delivery address for this shipment."},customsHold:{reason:"This shipment is on hold for a customs or compliance check."}},Jh={service:"Service",shipDate:"Ship Date",origin:"Origin",destination:"Destination",weight:"Weight",shipper:"Shipper",recipient:"Recipient",packages:"Packages",estimatedDelivery:"Estimated Delivery"},Yh={gateTitle:"Verify to See Full Details",gateBody:"Confirm the mobile number linked to this shipment to see recipient details and proof of delivery.",verifyButton:"Verify",verified:"Verified — showing full shipment details.",verifyFailed:"That code didn't match. Check it and try again.",linkExpired:"That verification link has expired. Request a new one to see full details.",linkUsed:"That verification link has already been used.",linkInvalid:"That verification link isn't valid for this shipment."},Xh={title:"Travel History",colTime:"Time",colActivity:"Activity",colLocation:"Location",latest:"Latest",viewFullHistory:"View Full History",showLess:"Show Less"},Qh={title:"Proof of Delivery",photoAlt:"Delivery photo",signedBy:"Signed by {{initial}}",photoUnavailable:"Delivery photo unavailable"},Zh={title:"Get Help",contactSupport:"Contact Support",startReturn:"Start a Return"},ef={pageTitle:{entry:"Track a delivery — SenditGo",result:"Tracking result — SenditGo",consignee:"Track your delivery — SenditGo"},entry:{eyebrow:"Delivery tracking",title:"Track a delivery.",subtitle:"Enter your tracking number to see the latest delivery status. No account needed.",inputLabel:"Tracking number",placeholder:"Tracking number",submit:"Track",hint:"Tracking numbers are up to 9 letters and numbers, with no spaces or dashes.",submitBusy:"Tracking…",busyStatus:"Looking up your delivery…"},result:{back:"Track another delivery",title:"Tracking result.",subtitle:"Get the latest delivery status and tracking details for your shipment."},consignee:{eyebrow:"For recipients",title:"Track your delivery.",subtitle:"No account is required to see the current delivery status.",historyTitle:"Delivery history",historyToggle_one:"View details ({{count}} update)",historyToggle_other:"View details ({{count}} updates)",resultStatus:"{{status}}. {{label}}: {{value}}"},summary:{trackingNumber:"Tracking number",copy:"Copy tracking number",copied:"Tracking number copied",progress:"Delivery progress",copyFailed:"Couldn't copy. Select the tracking number to copy it."},chip:{cancelled:"Cancelled"},milestone:{orderCreated:"Order created",pickedUp:"Picked up",awaitingPickup:"Awaiting pickup",inTransit:"In transit",delivered:"Delivered",preparing:"Preparing"},milestoneState:{done:"completed",current:"current step",future:"not started"},eta:{label:"Estimated delivery",deliveredLabel:"Delivered",cancelledLabel:"Cancelled",today:"Today",tomorrow:"Tomorrow",toBeConfirmed:"To be confirmed",toBeConfirmedNote:"We'll show a date once the delivery is scheduled.",cancelledNote:"This delivery was cancelled and will not arrive.",todayAM:"This morning",todayPM:"This afternoon",tomorrowAM:"Tomorrow morning",tomorrowPM:"Tomorrow afternoon",dayAM:"{{day}}, morning",dayPM:"{{day}}, afternoon",previouslyExpected:"Previously expected {{date}}"},latest:{label:"Latest update",none:"No updates yet"},activity:{order_created:"Order created",scheduled:"Delivery scheduled",picked_up:"Picked up",arrived:"Arrived at destination",signed:"Delivery signed for",completed:"Delivery completed",rescheduled:"Delivery rescheduled",item_exception:"Item issue reported",cancelled:"Order cancelled"},details:{title:"Delivery details",trackingNumber:"Tracking number",shipDate:"Ship date",carrier:"Carrier",origin:"Origin",destination:"Destination",packages:"Packages",proof:"Proof of delivery",notShipped:"Not shipped yet",packageCount_one:"{{count}} package",packageCount_other:"{{count}} packages",affected_one:"{{count}} affected by an issue",affected_other:"{{count}} affected by an issue",proofType:{signature:"Signed for on delivery",contactless:"Contactless delivery",qrcode:"Confirmed by QR scan"}},history:{title:"Tracking history",date:"Date & time",activity:"Activity",location:"Location",empty:"No tracking updates yet."},exceptions:{title:"Delivery updates",rescheduled_one:"Delivery was rescheduled.",rescheduled_other:"Delivery was rescheduled {{count}} times.",items_missing:"Some items were reported missing.",items_damaged:"Some items were reported damaged.",wrong_delivery:"An item was reported as delivered to the wrong place.",cancelled:"The delivery was cancelled.",help:"Questions about this delivery? Our support team can help.",contact:"Contact support"},help:{title:"Need help?",body:"If you have any questions about this delivery, our team is here to help.",contact:"Contact support"},error:{format:"Check the tracking number. It should be up to 9 letters and numbers, with no spaces or dashes.",notFound:"We couldn't find a delivery with that tracking number. Check the number and try again.",rateLimited:"Too many lookups in a short time. Wait a minute, then try again.",unavailable:"Tracking is unavailable right now. Please try again shortly.",retry:"Try again",loading:"Loading delivery status"},nextStop:{public:{eyebrowLive:"Live map · next stop",eyebrowNext:"This address is the next stop",title:"The driver is on the way",mapRegion:"Map of the driver approaching the delivery address",mapUnavailable:"Map unavailable. The arrival time is shown here."},receiver:{eyebrowLive:"Live map · you're next",eyebrowNext:"You're the next stop",title:"Your driver is on the way",mapRegion:"Map of your driver approaching your delivery address",mapUnavailable:"Map unavailable. Your arrival time is shown here."},liveLocation:"Live location",etaMinutes_one:"About {{count}} minute away",etaMinutes_other:"About {{count}} minutes away",etaSoon:"Arriving soon",updatedNow:"Location updated just now",updated_one:"Location updated {{count}} minute ago",updated_other:"Location updated {{count}} minutes ago",stale_one:"Live location paused · last update {{count}} minute ago",stale_other:"Live location paused · last update {{count}} minutes ago",unavailable:"Live location is unavailable right now.",ended:"Live location has ended for this delivery.",errorRefused:"Live location is unavailable right now.",errorFailed:"Couldn't load the live location.",rateLimited:"Too many requests. Wait a minute, then try again.",retry:"Try again",sample:"Sample location · not a real driver",recenter:"Recenter"}},tf={step:Wh,headline:Gh,activity:qh,exception:Kh,facts:Jh,tier2:Yh,timeline:Xh,pod:Qh,help:Zh,guest:ef},Ti=["en"],nf={en:"EN"},rf=(()=>{try{const t=localStorage.getItem("lang");return t&&Ti.includes(t)?t:"en"}catch{return"en"}})();se.use(Lu).init({lng:rf,fallbackLng:"en",interpolation:{escapeValue:!1},resources:{en:{common:Oh,portal:Hh,statusCode:zh,salesOrderStatusId:Vh,tracking:tf}}});function sf(t){se.changeLanguage(t);try{localStorage.setItem("lang",t)}catch{}}const Qs=t=>{let e;const n=new Set,r=(c,u)=>{const h=typeof c=="function"?c(e):c;if(!Object.is(h,e)){const f=e;e=u??(typeof h!="object"||h===null)?h:Object.assign({},e,h),n.forEach(g=>g(e,f))}},i=()=>e,l={setState:r,getState:i,getInitialState:()=>a,subscribe:c=>(n.add(c),()=>n.delete(c))},a=e=t(r,i,l);return l},of=(t=>t?Qs(t):Qs),af=t=>t;function lf(t,e=af){const n=k.useSyncExternalStore(t.subscribe,k.useCallback(()=>e(t.getState()),[t,e]),()=>e(t.getInitialState()));return k.useDebugValue(n),n}const Zs=t=>{const e=of(t),n=r=>lf(e,r);return Object.assign(n,e),n},cf=(t=>t?Zs(t):Zs);function df(t,e){let n;try{n=t()}catch{return}return{getItem:i=>{var s;const o=a=>a===null?null:JSON.parse(a,void 0),l=(s=n.getItem(i))!=null?s:null;return l instanceof Promise?l.then(o):o(l)},setItem:(i,s)=>n.setItem(i,JSON.stringify(s,void 0)),removeItem:i=>n.removeItem(i)}}const Ri=t=>e=>{try{const n=t(e);return n instanceof Promise?n:{then(r){return Ri(r)(n)},catch(r){return this}}}catch(n){return{then(r){return this},catch(r){return Ri(r)(n)}}}},uf=(t,e)=>(n,r,i)=>{let s={storage:df(()=>window.localStorage),partialize:b=>b,version:0,merge:(b,R)=>({...R,...b}),...e},o=!1,l=0;const a=new Set,c=new Set;let u=s.storage;if(!u)return t((...b)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),n(...b)},r,i);const h=()=>{const b=s.partialize({...r()});return u.setItem(s.name,{state:b,version:s.version})},f=i.setState;i.setState=(...b)=>(f(...b),h());const g=t((...b)=>(n(...b),h()),r,i);i.getInitialState=()=>g;let m;const x=()=>{var b,R;if(!u)return;const w=++l;o=!1,a.forEach(y=>{var _;return y((_=r())!=null?_:g)});const v=((R=s.onRehydrateStorage)==null?void 0:R.call(s,(b=r())!=null?b:g))||void 0;return Ri(u.getItem.bind(u))(s.name).then(y=>{if(y)if(typeof y.version=="number"&&y.version!==s.version){if(s.migrate){const _=s.migrate(y.state,y.version);return _ instanceof Promise?_.then(I=>[!0,I]):[!0,_]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,y.state];return[!1,void 0]}).then(y=>{var _;if(w!==l)return;const[I,P]=y;if(m=s.merge(P,(_=r())!=null?_:g),n(m,!0),I)return h()}).then(()=>{w===l&&(v==null||v(r(),void 0),m=r(),o=!0,c.forEach(y=>y(m)))}).catch(y=>{w===l&&(v==null||v(void 0,y))})};return i.persist={setOptions:b=>{s={...s,...b},b.storage&&(u=b.storage)},clearStorage:()=>{++l,u==null||u.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>x(),hasHydrated:()=>o,onHydrate:b=>(a.add(b),()=>{a.delete(b)}),onFinishHydration:b=>(c.add(b),()=>{c.delete(b)})},s.skipHydration||x(),m||g},hf=uf;function sl(t,e){return function(){return t.apply(e,arguments)}}const{toString:ff}=Object.prototype,{getPrototypeOf:He}=Object,{iterator:En,toStringTag:ol}=Symbol,Ve=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),al=t=>typeof t=="string"&&(t==="__proto__"||t==="constructor"||t==="prototype"),Sr=(t,e,n)=>t===Object.prototype||!n&&e===null,pf=t=>{if(!Object.isExtensible(t))return!1;const e=Object.getOwnPropertyNames(t);return Object.getOwnPropertySymbols&&e.push(...Object.getOwnPropertySymbols(t)),e.every(n=>{if(al(n))return!1;const r=Object.getOwnPropertyDescriptor(t,n);return!!r&&r.configurable&&r.writable===!0})},Ji=(t,e)=>{let n=t;const r=[];for(;n!=null;){if(r.indexOf(n)!==-1)return!1;r.push(n);const i=He(n);if(Sr(n,i,n===t))return!1;if(Ve(n,e))return!0;n=i}return!1},gf=(t,e)=>t!=null&&Ji(t,e)?t[e]:void 0,mf=t=>{if(t==null||typeof t!="object"&&typeof t!="function")return t;const e=He(t);if(e===null&&pf(t))return t;const n=Object.create(null),r=Object.create(null),i=[];let s=t;for(;s!=null&&i.indexOf(s)===-1;){i.push(s);const o=s===t?e:He(s);if(Sr(s,o,s===t))break;const l=Object.getOwnPropertyNames(s);Object.getOwnPropertySymbols&&l.push(...Object.getOwnPropertySymbols(s));for(const a of l)al(a)||Ve(r,a)||(n[a]=t[a],r[a]=!0);s=o}return n},Yi=(t=>e=>{const n=ff.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),ve=t=>(t=t.toLowerCase(),e=>Yi(e)===t),Tr=t=>e=>typeof e===t,{isArray:It}=Array,Ct=Tr("undefined");function Xt(t){return t!==null&&!Ct(t)&&t.constructor!==null&&!Ct(t.constructor)&&fe(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const ll=ve("ArrayBuffer");function yf(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&ll(t.buffer),e}const bf=Tr("string"),fe=Tr("function"),vf=Tr("number"),Qt=t=>t!==null&&typeof t=="object",wf=t=>t===!0||t===!1,qn=t=>{if(!Qt(t))return!1;const e=He(t);return(e===null||e===Object.prototype||He(e)===null)&&(Sr(t,e,!0)||!Ve(t,ol)&&!Ve(t,En))},xf=t=>{if(!Qt(t)||Xt(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},Ef=ve("Date"),Sf=ve("File"),Tf=t=>!!(t&&typeof t.uri<"u"),Rf=t=>t&&typeof t.getParts<"u",_f=ve("Blob"),If=ve("FileList"),Cf=ve("Set"),Pf=t=>Qt(t)&&fe(t.pipe);function Af(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const eo=Af(),to=typeof eo.FormData<"u"?eo.FormData:void 0,Of=t=>{if(!t)return!1;if(to&&t instanceof to)return!0;const e=He(t);if(!e||e===Object.prototype||!fe(t.append))return!1;const n=Yi(t);return n==="formdata"||n==="object"&&fe(t.toString)&&t.toString()==="[object FormData]"},kf=ve("URLSearchParams"),[Nf,jf,Lf,Df]=["ReadableStream","Request","Response","Headers"].map(ve),Mf=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Sn(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,i;if(typeof t!="object"&&(t=[t]),It(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{if(Xt(t))return;const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let l;for(r=0;r<o;r++)l=s[r],e.call(null,t[l],l,t)}}function Ff(t,e){if(Xt(t))return null;e=e.toLowerCase();const n=Object.keys(t);let r=n.length,i;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const wt=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,cl=t=>!Ct(t)&&t!==wt;function _i(...t){const{caseless:e,skipUndefined:n}=cl(this)&&this||{},r={},i=e?Object.create(null):null,s=(o,l)=>{if(l==="__proto__"||l==="constructor"||l==="prototype")return;let a=l;if(i&&typeof l=="string"){const u=l.toLowerCase(),h=i[u];h!==void 0&&Ve(r,h)?a=h:i[u]=l}const c=Ve(r,a)?r[a]:void 0;qn(c)&&qn(o)?r[a]=_i(c,o):qn(o)?r[a]=_i({},o):It(o)?r[a]=o.slice():(!n||!Ct(o))&&(r[a]=o)};for(let o=0,l=t.length;o<l;o++){const a=t[o];if(!a||Xt(a)||(Sn(a,s),typeof a!="object"||It(a)||!Object.getOwnPropertySymbols))continue;const c=Object.getOwnPropertySymbols(a);for(let u=0;u<c.length;u++){const h=c[u];Yf.call(a,h)&&s(a[h],h)}}return r}const Uf=(t,e,n,{allOwnKeys:r}={})=>(Sn(e,(i,s)=>{n&&fe(i)?Object.defineProperty(t,s,{__proto__:null,value:sl(i,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,s,{__proto__:null,value:i,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),t),$f=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),Bf=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),Object.defineProperty(t.prototype,"constructor",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{__proto__:null,value:e.prototype}),n&&Object.assign(t.prototype,n)},Hf=(t,e,n,r)=>{let i,s,o;const l={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)o=i[s],(!r||r(o,t,e))&&!l[o]&&(e[o]=t[o],l[o]=!0);t=n!==!1&&He(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},Vf=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},zf=t=>{if(!t)return null;if(It(t))return t;let e=t.length;if(!Number.isSafeInteger(e)||e<0||e>4294967295)return null;const n=new Set,r=new Set;let i=t;for(;i!=null&&n.size<e;){if(r.has(i))return null;r.add(i);const o=He(i);if(Sr(i,o,i===t))break;Object.getOwnPropertyNames(i).forEach(l=>{const a=+l;Number.isInteger(a)&&a>=0&&a<e&&String(a)===l&&Ve(i,l)&&n.add(a)}),i=o}if(n.size!==e)return null;const s=new Array(e);for(;e-- >0;)s[e]=t[e];return s},Wf=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&He(Uint8Array)),Gf=(t,e)=>{const r=(t&&t[En]).call(t);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(t,s[0],s[1])}},qf=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},Kf=ve("HTMLFormElement"),Jf=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),{propertyIsEnumerable:Yf}=Object.prototype,Xf=ve("RegExp"),dl=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};Sn(n,(i,s)=>{let o;(o=e(i,s,t))!==!1&&(r[s]=o||i)}),Object.defineProperties(t,r)},Qf=t=>{dl(t,(e,n)=>{if(fe(t)&&["arguments","caller","callee"].includes(n))return!1;const r=t[n];if(fe(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Zf=(t,e)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return It(t)?r(t):r(String(t).split(e)),n},ep=()=>{},tp=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function np(t){return!!(t&&fe(t.append)&&t[ol]==="FormData"&&t[En])}const rp=t=>{const e=new WeakSet,n=r=>{if(Qt(r)){if(e.has(r))return;if(Xt(r))return r;if(!("toJSON"in r)){e.add(r);let i;if(Cf(r)){i=[];for(const s of r){const o=n(s);!Ct(o)&&i.push(o)}}else i=It(r)?[]:{},Sn(r,(s,o)=>{const l=n(s);!Ct(l)&&(i[o]=l)});return e.delete(r),i}}return r};return n(t)},ip=ve("AsyncFunction"),sp=t=>t&&(Qt(t)||fe(t))&&fe(t.then)&&fe(t.catch),ul=((t,e)=>t?setImmediate:e?((n,r)=>(wt.addEventListener("message",({source:i,data:s})=>{i===wt&&s===n&&r.length&&r.shift()()},!1),i=>{r.push(i),wt.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",fe(wt.postMessage)),op=typeof queueMicrotask<"u"?queueMicrotask.bind(wt):typeof process<"u"&&process.nextTick||ul,hl=t=>t!=null&&fe(t[En]),ap=t=>t!=null&&Ji(t,En)&&hl(t),p={isArray:It,isArrayBuffer:ll,isBuffer:Xt,isFormData:Of,isArrayBufferView:yf,isString:bf,isNumber:vf,isBoolean:wf,isObject:Qt,isPlainObject:qn,isEmptyObject:xf,isReadableStream:Nf,isRequest:jf,isResponse:Lf,isHeaders:Df,isUndefined:Ct,isDate:Ef,isFile:Sf,isReactNativeBlob:Tf,isReactNative:Rf,isBlob:_f,isRegExp:Xf,isFunction:fe,isStream:Pf,isURLSearchParams:kf,isTypedArray:Wf,isFileList:If,forEach:Sn,merge:_i,extend:Uf,trim:Mf,stripBOM:$f,inherits:Bf,toFlatObject:Hf,kindOf:Yi,kindOfTest:ve,endsWith:Vf,toArray:zf,forEachEntry:Gf,matchAll:qf,isHTMLForm:Kf,hasOwnProperty:Ve,hasOwnProp:Ve,hasOwnInPrototypeChain:Ji,getSafeProp:gf,toSafeFlatObject:mf,reduceDescriptors:dl,freezeMethods:Qf,toObjectSet:Zf,toCamelCase:Jf,noop:ep,toFiniteNumber:tp,findKey:Ff,global:wt,isContextDefined:cl,isSpecCompliantForm:np,toJSONObject:rp,isAsyncFn:ip,isThenable:sp,setImmediate:ul,asap:op,isIterable:hl,isSafeIterable:ap},lp=p.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),cp=t=>{const e=Object.create(null);let n,r,i;return t&&t.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim();const l=p.hasOwnProp(e,n);!n||l&&p.hasOwnProp(lp,n)||(n==="set-cookie"?l?e[n].push(r):e[n]=[r]:e[n]=l?e[n]+", "+r:r)}),e};function dp(t){let e=0,n=t.length;for(;e<n;){const r=t.charCodeAt(e);if(r!==9&&r!==32)break;e+=1}for(;n>e;){const r=t.charCodeAt(n-1);if(r!==9&&r!==32)break;n-=1}return e===0&&n===t.length?t:t.slice(e,n)}const up=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),hp=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function Xi(t,e){return p.isArray(t)?t.map(n=>Xi(n,e)):dp(String(t).replace(e,""))}const fp=t=>Xi(t,up),pp=t=>Xi(t,hp);function fl(t){const e=Object.create(null);return p.forEach(t.toJSON(),(n,r)=>{e[r]=pp(n)}),e}const no=Symbol("internals");function an(t){return t&&String(t).trim().toLowerCase()}function Kn(t){return t===!1||t==null?t:p.isArray(t)?t.map(Kn):fp(String(t))}function gp(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const mp=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function zr(t){let e=0,n=t.length;for(;e<n;){const r=t.charCodeAt(e);if(r!==9&&r!==32)break;e+=1}for(;n>e;){const r=t.charCodeAt(n-1);if(r!==9&&r!==32)break;n-=1}return e===0&&n===t.length?t:t.slice(e,n)}function yp(t){const e=t.length-1;if(e<1||t.charCodeAt(0)!==34||t.charCodeAt(e)!==34)return t;let n="";for(let r=1;r<e;r++){const i=t.charCodeAt(r);if(i===34||i===92&&(r+=1,r>=e))return t;n+=t[r]}return n}function bp(t){const e=Object.create(null),n=String(t);let r=0,i=!1,s=!1;function o(l){const a=zr(n.slice(r,l)),c=a.indexOf("=");if(c<1)return;const u=zr(a.slice(0,c));if(!mp.test(u))return;const h=u.toLowerCase();if(h==="__proto__"||h==="constructor"||h==="prototype")return;const f=zr(a.slice(c+1));e[h]=yp(f)}for(let l=0;l<n.length;l++){const a=n.charCodeAt(l);i?s?s=!1:a===92?s=!0:a===34&&(i=!1):a===34?i=!0:(a===44||a===59)&&(o(l),r=l+1)}return o(n.length),e}const vp=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim()),wp="__Proto__",ro=t=>t==="__proto__"?wp:t;function Wr(t,e,n,r,i){if(p.isFunction(r))return r.call(t,e,n);if(i&&(e=n),!!p.isString(e)){if(p.isString(r))return e.indexOf(r)!==-1;if(p.isRegExp(r))return r.test(e)}}function xp(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function Ep(t,e){const n=p.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{__proto__:null,value:function(i,s,o){return this[r].call(this,e,i,s,o)},configurable:!0})})}let Z=class{constructor(e){e&&this.set(e)}set(e,n,r){const i=this;function s(l,a,c){const u=an(a);if(!u)return;const h=p.findKey(i,u);(!h||i[h]===void 0||c===!0||c===void 0&&i[h]!==!1)&&(i[ro(h||a)]=Kn(l))}const o=(l,a)=>p.forEach(l,(c,u)=>s(c,u,a));if(p.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(p.isString(e)&&(e=e.trim())&&!vp(e))o(cp(e),n);else if(p.isObject(e)&&p.isSafeIterable(e)){let l=Object.create(null),a,c;for(const u of e){if(!p.isArray(u))throw new TypeError("Object iterator must return a key-value pair");c=u[0],p.hasOwnProp(l,c)?(a=l[c],l[c]=p.isArray(a)?[...a,u[1]]:[a,u[1]]):l[c]=u[1]}o(l,n)}else e!=null&&s(n,e,r);return this}get(e,n){if(e=an(e),e){const r=p.findKey(this,e);if(r){const i=this[r];if(!n)return i;if(n===!0)return gp(i);if(p.isFunction(n))return n.call(this,i,r);if(p.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=an(e),e){const r=p.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Wr(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let i=!1;function s(o){if(o=an(o),o){const l=p.findKey(r,o);l&&(!n||Wr(r,r[l],l,n))&&(delete r[l],i=!0)}}return p.isArray(e)?e.forEach(s):s(e),i}clear(e){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!e||Wr(this,this[s],s,e,!0))&&(delete this[s],i=!0)}return i}normalize(e){const n=this,r=Object.create(null);return p.forEach(this,(i,s)=>{const o=p.findKey(r,s);if(o){n[o]=Kn(i),delete n[s];return}const l=ro(e?xp(s):String(s).trim());l!==s&&delete n[s],n[l]=Kn(i),r[l]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return p.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=e&&p.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){const e=this.get("set-cookie");return p.isArray(e)?e:e==null||e===!1?[]:[e]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static parseParameters(e){return bp(e)}static concat(e,...n){const r=new this(e);return n.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[no]=this[no]={accessors:{}}).accessors,i=this.prototype;function s(o){const l=an(o);r[l]||(Ep(i,o),r[l]=!0)}return p.isArray(e)?e.forEach(s):s(e),this}};Z.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);p.reduceDescriptors(Z.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});p.freezeMethods(Z);const cr="[REDACTED ****]";function Sp(t){if(p.hasOwnProp(t,"toJSON"))return!0;let e=Object.getPrototypeOf(t);for(;e&&e!==Object.prototype;){if(p.hasOwnProp(e,"toJSON"))return!0;e=Object.getPrototypeOf(e)}return!1}function Tp(t,e){const n=new Set(e.map(s=>String(s).toLowerCase())),r=[],i=s=>{if(s===null||typeof s!="object"||p.isBuffer(s))return s;if(r.indexOf(s)!==-1)return;s instanceof Z&&(s=s.toJSON()),r.push(s);let o;if(p.isArray(s))o=[],s.forEach((l,a)=>{const c=i(l);p.isUndefined(c)||(o[a]=c)});else{if(!p.isPlainObject(s)&&Sp(s))return r.pop(),s;o=Object.create(null);for(const[l,a]of Object.entries(s)){const c=n.has(l.toLowerCase())?cr:i(a);p.isUndefined(c)||(o[l]=c)}}return r.pop(),o};return i(t)}function io(t){try{return String(t)}catch{return""}}function Rp(t){return t.errors.map(n=>{try{return n&&n.message?io(n.message):io(n)}catch{return""}}).filter(Boolean).join("; ")||t.name||"AggregateError"}const _p=`
Caused by: `,Ii=Symbol("causeStack");function Ip(t,e){const n=p.hasOwnProp(t,Ii)&&t[Ii];return n&&e.endsWith(n)?e.length-n.length:-1}function Cp(t,e){try{const n=e&&e.stack;if(typeof n!="string"||!n)return;const r=t.stack;if(typeof r!="string"||!r)return;const i=_p+n;t.stack=r+i,Object.defineProperty(t,Ii,{__proto__:null,value:i})}catch{}}let T=class pl extends Error{static from(e,n,r,i,s,o){let l=e.message;!l&&p.isArray(e.errors)&&e.errors.length&&(l=Rp(e));const a=new pl(l,n||e.code,r,i,s);return Object.defineProperty(a,"cause",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),a.name=e.name,Cp(a,e),e.status!=null&&a.status==null&&(a.status=e.status),o&&Object.assign(a,o),a}constructor(e,n,r,i,s){super(e),Object.defineProperty(this,"message",{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),r&&(this.config=r),i&&(this.request=i),s&&(this.response=s,this.status=s.status)}toJSON(){const e=this.config,n=e&&p.hasOwnProp(e,"redact")?e.redact:void 0,r=p.isArray(n)&&n.length>0?Tp(e,n):p.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:r,code:this.code,status:this.status}}};T.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";T.ERR_BAD_OPTION="ERR_BAD_OPTION";T.ECONNABORTED="ECONNABORTED";T.ETIMEDOUT="ETIMEDOUT";T.ECONNREFUSED="ECONNREFUSED";T.ERR_NETWORK="ERR_NETWORK";T.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";T.ERR_DEPRECATED="ERR_DEPRECATED";T.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";T.ERR_BAD_REQUEST="ERR_BAD_REQUEST";T.ERR_CANCELED="ERR_CANCELED";T.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";T.ERR_INVALID_URL="ERR_INVALID_URL";T.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const Pp=null,gl=100;function Ci(t){return p.isPlainObject(t)||p.isArray(t)}function ml(t){return p.endsWith(t,"[]")?t.slice(0,-2):t}function Gr(t,e,n){return t?t.concat(e).map(function(i,s){return i=ml(i),!n&&s?"["+i+"]":i}).join(n?".":""):e}function Ap(t){return p.isArray(t)&&!t.some(Ci)}const Op=p.toFlatObject(p,{},null,function(e){return/^is[A-Z]/.test(e)});function Rr(t,e,n){if(!p.isObject(t))throw new TypeError("target must be an object");e=e||new FormData;const r=(w,v)=>{const y=p.getSafeProp(n,w);return p.isUndefined(y)?v:y},i=r("metaTokens",!0),s=r("visitor")||x,o=r("dots",!1),l=r("indexes",!1),a=r("Blob")||typeof Blob<"u"&&Blob,c=r("maxDepth",gl),u=a&&p.isSpecCompliantForm(e),h=[];if(!p.isFunction(s))throw new TypeError("visitor must be a function");function f(w){if(w===null)return"";if(p.isDate(w))return w.toISOString();if(p.isBoolean(w))return w.toString();if(!u&&p.isBlob(w))throw new T("Blob is not supported. Use a Buffer instead.");if(p.isArrayBuffer(w)||p.isTypedArray(w)){if(u&&typeof a=="function")return new a([w]);throw new T("Blob is not supported. Use a Buffer instead.",T.ERR_NOT_SUPPORT)}return w}function g(w){if(w>c)throw new T("Object is too deeply nested ("+w+" levels). Max depth: "+c,T.ERR_FORM_DATA_DEPTH_EXCEEDED)}function m(w,v){if(c===1/0)return JSON.stringify(w);const y=[];return JSON.stringify(w,function(I,P){if(!p.isObject(P))return P;for(;y.length&&y[y.length-1]!==this;)y.pop();return y.push(P),g(v+y.length-1),P})}function x(w,v,y){let _=w;if(p.isReactNative(e)&&p.isReactNativeBlob(w))return e.append(Gr(y,v,o),f(w)),!1;if(w&&!y&&typeof w=="object"){if(p.endsWith(v,"{}"))v=i?v:v.slice(0,-2),w=m(w,1);else if(p.isArray(w)&&Ap(w)||(p.isFileList(w)||p.endsWith(v,"[]"))&&(_=p.toArray(w)))return v=ml(v),_.forEach(function(P,A){!(p.isUndefined(P)||P===null)&&e.append(l===!0?Gr([v],A,o):l===null?v:v+"[]",f(P))}),!1}return Ci(w)?!0:(e.append(Gr(y,v,o),f(w)),!1)}const b=Object.assign(Op,{defaultVisitor:x,convertValue:f,isVisitable:Ci});function R(w,v,y=0){if(!p.isUndefined(w)){if(g(y),h.indexOf(w)!==-1)throw new Error("Circular reference detected in "+v.join("."));h.push(w),p.forEach(w,function(I,P){(!(p.isUndefined(I)||I===null)&&s.call(e,I,p.isString(P)?P.trim():P,v,b))===!0&&R(I,v?v.concat(P):[P],y+1)}),h.pop()}}if(!p.isObject(t))throw new TypeError("data must be an object");return R(t),e}function so(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(t).replace(/[!'()~]|%20/g,function(r){return e[r]})}function Qi(t,e){this._pairs=[],t&&Rr(t,this,e)}const yl=Qi.prototype;yl.append=function(e,n){this._pairs.push([e,n])};yl.toString=function(e){const n=e?r=>e.call(this,r,so):so;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function kp(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function bl(t,e,n){if(!e)return t;t=t||"";const r=p.isFunction(n)?{serialize:n}:n,i=p.getSafeProp(r,"encode")||kp,s=p.getSafeProp(r,"serialize");let o;if(s?o=s(e,r):o=p.isURLSearchParams(e)?e.toString():new Qi(e,r).toString(i),o){const l=t.indexOf("#");l!==-1&&(t=t.slice(0,l)),t+=(t.indexOf("?")===-1?"?":"&")+o}return t}const ln=Symbol("internals");function vl(t){return t?t.length:0}function oo(t){if(t)for(;t.length&&t[t.length-1]===null;)t.pop()}function Np(t){return typeof t=="string"&&t!==""&&String(Number(t))===t?Number(t):t}function cn(t,e){const n=t.handlers,r=vl(n);n!==e.handlersRef?(e.handlersRef=n,e.handlerEntries.clear()):r!==e.handlersLength&&(r?e.handlerEntries.forEach(function(s,o){n[s.index]!==s.handler&&e.handlerEntries.delete(o)}):e.handlerEntries.clear()),e.handlersLength=r}class ao{constructor(){this.handlers=[],this[ln]={handlersRef:this.handlers,handlersLength:this.handlers.length,handlerEntries:new Map,iterationDepth:0,nextId:0}}use(e,n,r){const i={fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null},s=this[ln];this.handlers==null&&(this.handlers=[]),cn(this,s);const o=s.nextId++;return this.handlers.push(i),s.handlerEntries.set(o,{handler:i,index:this.handlers.length-1}),s.handlersLength=this.handlers.length,o}eject(e){const n=this[ln];cn(this,n);const r=Np(e),i=n.handlerEntries.get(r);if(i){if(n.handlerEntries.delete(r),this.handlers[i.index]!==i.handler)return;this.handlers[i.index]=null,n.iterationDepth||(oo(this.handlers),n.handlersLength=this.handlers.length)}}clear(){this.handlers&&(this.handlers=[],cn(this,this[ln]))}forEach(e){const n=this[ln];cn(this,n),n.iterationDepth++;try{p.forEach(this.handlers,function(i){i!==null&&e(i)})}finally{--n.iterationDepth||(cn(this,n),oo(this.handlers),n.handlersLength=vl(this.handlers))}}}const Zi={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0,encodeBasicAuthUsername:!1},jp=typeof URLSearchParams<"u"?URLSearchParams:Qi,Lp=typeof FormData<"u"?FormData:null,Dp=typeof Blob<"u"?Blob:null,Mp={isBrowser:!0,classes:{URLSearchParams:jp,FormData:Lp,Blob:Dp},protocols:["http","https","file","blob","url","data"]},es=typeof window<"u"&&typeof document<"u",Pi=typeof navigator=="object"&&navigator||void 0,Fp=es&&(!Pi||["ReactNative","NativeScript","NS"].indexOf(Pi.product)<0),Up=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",$p=es&&window.location.href||"http://localhost",Bp=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:es,hasStandardBrowserEnv:Fp,hasStandardBrowserWebWorkerEnv:Up,navigator:Pi,origin:$p},Symbol.toStringTag,{value:"Module"})),Y={...Bp,...Mp};function Hp(t,e){return Rr(t,new Y.classes.URLSearchParams,{visitor:function(n,r,i,s){return Y.isNode&&p.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)},...e})}const lo=gl;function wl(t){if(t>lo)throw new T("FormData field is too deeply nested ("+t+" levels). Max depth: "+lo,T.ERR_FORM_DATA_DEPTH_EXCEEDED)}function Vp(t){const e=[],n=/[^.[\]]+|\[([^.[\]]*)]/g;let r;for(;(r=n.exec(t))!==null;)wl(e.length),e.push(r[0]==="[]"?"":r[1]||r[0]);return e}function xl(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}function El(t){if(!p.isArray(t))return t;const e=Object.keys(t);return e.length!==t.length||e.some((n,r)=>n!==String(r))?xl(t):t}function zp(t){const e=[t];for(;e.length;){const n=e.pop();Object.keys(n).forEach(r=>{const i=n[r]=El(n[r]);(p.isArray(i)||p.isPlainObject(i))&&e.push(i)})}return t}function Sl(t){function e(n,r,i,s){wl(s);let o=n[s++];if(o==="__proto__")return!0;const l=Number.isFinite(+o),a=s>=n.length;return o=!o&&p.isArray(i)?i.length:o,a?(p.hasOwnProp(i,o)?(i[o]=El(i[o]),i[o]=p.isArray(i[o])?i[o].concat(r):[i[o],r]):i[o]=r,!l):((!p.hasOwnProp(i,o)||!p.isObject(i[o]))&&(i[o]=[]),e(n,r,i[o],s)&&p.isArray(i[o])&&(i[o]=xl(i[o])),!l)}if(p.isFormData(t)&&p.isFunction(t.entries)){const n={};return p.forEachEntry(t,(r,i)=>{e(Vp(r),i,n,0)}),zp(n)}return null}const Tl=Object.freeze(["get","delete","head","options","post","put","patch","purge","link","unlink","query"]),Ft=(t,e)=>t!=null&&p.hasOwnProp(t,e)?t[e]:void 0;function Wp(t,e,n){if(p.isString(t))try{return(e||JSON.parse)(t),p.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const Tn={transitional:Zi,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=p.isObject(e);if(s&&p.isHTMLForm(e)&&(e=new FormData(e)),p.isFormData(e))return i?JSON.stringify(Sl(e)):e;if(p.isArrayBuffer(e)||p.isBuffer(e)||p.isStream(e)||p.isFile(e)||p.isBlob(e)||p.isReadableStream(e))return e;if(p.isArrayBufferView(e))return e.buffer;if(p.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let l;if(s){const a=Ft(this,"formSerializer");if(r.indexOf("application/x-www-form-urlencoded")>-1)return Hp(e,a).toString();if((l=p.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=Ft(this,"env"),u=c&&c.FormData;return Rr(l?{"files[]":e}:e,u&&new u,a)}}return s||i?(n.setContentType("application/json",!1),Wp(e)):e}],transformResponse:[function(e){const n=Ft(this,"transitional")||Tn.transitional,r=n&&n.forcedJSONParsing,i=Ft(this,"responseType"),s=i==="json";if(p.isResponse(e)||p.isReadableStream(e))return e;if(e&&p.isString(e)&&(r&&!i||s)){const l=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e,Ft(this,"parseReviver"))}catch(a){if(l)throw a.name==="SyntaxError"?T.from(a,T.ERR_BAD_RESPONSE,this,null,Ft(this,"response")):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Y.classes.FormData,Blob:Y.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};p.forEach(Tl,t=>{Tn.headers[t]={}});function qr(t,e){const n=this||Tn,r=e||n,i=Z.from(r.headers);let s=r.data;return p.forEach(t,function(l){s=l.call(n,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function Rl(t){return!!(t&&t.__CANCEL__)}let Rn=class extends T{constructor(e,n,r){super(e??"canceled",T.ERR_CANCELED,n,r),this.name="CanceledError",this.__CANCEL__=!0}};function _l(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new T("Request failed with status code "+n.status,n.status>=400&&n.status<500?T.ERR_BAD_REQUEST:T.ERR_BAD_RESPONSE,n.config,n.request,n))}const Gp=/[\t\n\r]/g;function Il(t){if(typeof t!="string")return t;let e=0;for(;e<t.length&&t.charCodeAt(e)<=32;)e++;return t.slice(e).replace(Gp,"")}function Kr(t){const e=/^([-+\w]{1,25}):(?:\/\/)?/.exec(t);return e&&e[1].toLowerCase()||""}const co=t=>{try{return decodeURIComponent(t)}catch{return t}},Cl=Y.hasStandardBrowserEnv?{write(t,e,n,r,i,s,o){if(typeof document>"u")return;const l=[`${t}=${encodeURIComponent(e)}`];p.isNumber(n)&&l.push(`expires=${new Date(n).toUTCString()}`),p.isString(r)&&l.push(`path=${r}`),p.isString(i)&&l.push(`domain=${i}`),s===!0&&l.push("secure"),p.isString(o)&&l.push(`SameSite=${o}`),document.cookie=l.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie;if(!e)return null;const n=e.split(";");for(let r=0;r<n.length;r++){const i=n[r].replace(/^\s+/,""),s=i.indexOf("=");if(s!==-1&&i.slice(0,s)===t)return co(i.slice(s+1))}return null},async readAsync(t){try{const e=typeof window<"u"&&window.cookieStore;if(e&&p.isFunction(e.get)){const n=await e.get(t);return n?co(n.value):null}}catch{}return this.read(t)},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},async readAsync(){return null},remove(){}};function qp(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i=0,s=0,o;return e=e!==void 0?e:1e3,function(a){const c=Date.now(),u=r[s];o||(o=c),n[i]=a,r[i]=c;let h=s,f=0;for(;h!==i;)f+=n[h++],h=h%t;if(i=(i+1)%t,i===s&&(s=(s+1)%t),c-o<e)return;const g=u&&c-u;return g?Math.round(f*1e3/g):void 0}}function Kp(t,e){let n=0,r=1e3/e,i,s;const o=(u,h=Date.now())=>{n=h,i=null,s&&(clearTimeout(s),s=null),t(...u)};return[(...u)=>{const h=Date.now(),f=h-n;f>=r?o(u,h):(i=u,s||(s=setTimeout(()=>{s=null,o(i)},r-f)))},()=>i&&o(i),(...u)=>o(u)]}const dr=(t,e,n=3)=>{let r=0;const i=qp(50,250);return Kp(s=>{if(!s||!p.isNumber(s.loaded))return;const o=s.loaded,l=s.lengthComputable?s.total:void 0,a=Math.max(0,l!=null?Math.min(o,l):o),c=Math.max(0,a-r),u=i(c);r=Math.max(r,a);const h={loaded:a,total:l,progress:l?a/l:void 0,bytes:c,rate:u||void 0,estimated:u&&l?(l-a)/u:void 0,event:s,lengthComputable:l!=null,[e?"download":"upload"]:!0};t(h)},n)},uo=(t,e)=>{const n=t!=null;return[r=>e[0]({lengthComputable:n,total:t,loaded:r}),e[1]]},ho=(t,e=p.asap)=>(...n)=>e(()=>t(...n)),Jp=Y.hasStandardBrowserEnv?(t=>e=>(e=new URL(e,document.baseURI||Y.origin),t.protocol===e.protocol&&t.host===e.host&&t.port===e.port))(new URL(Y.origin)):()=>!0;function Yp(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Xp(t,e){if(!e)return t;let n=t.length;for(;n>0&&t.charCodeAt(n-1)===47;)n--;return t.slice(0,n)+"/"+e.replace(/^\/+/,"")}const Qp=/^https?:(?!\/\/)/i;function Zp(t){return t&&t.replace(/(^|&)([^=&]*=)?[^&]+/g,(e,n,r="")=>`${n}${r}${cr}`)}function eg(t){const e=t.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${cr}@`),n=e.indexOf("#"),i=(n===-1?e:e.slice(0,n)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${cr}`);return n===-1?i:`${i}#${Zp(e.slice(n+1))}`}function fo(t,e){if(typeof t=="string"){const n=Il(t);if(Qp.test(n))throw new T(`Invalid URL ${JSON.stringify(eg(n))}: missing "//" after protocol`,T.ERR_INVALID_URL,e)}}function Pl(t,e,n,r){fo(e,r);let i=!Yp(e);return t&&(i||n===!1)?(fo(t,r),Xp(t,e)):e}function tg(t){const e=[{value:t}],n=new WeakSet,r=new WeakSet;for(;e.length;){const{value:i,done:s}=e.pop();if(!p.isPlainObject(i)&&!p.isArray(i))continue;if(s){n.delete(i);continue}if(n.has(i))throw new T("Circular reference detected in params",T.ERR_BAD_OPTION_VALUE);if(r.has(i))continue;r.add(i),n.add(i),e.push({value:i,done:!0});const o=Object.keys(i);Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor&&Object.getOwnPropertySymbols(i).forEach(l=>{const a=Object.getOwnPropertyDescriptor(i,l);a&&a.enumerable&&o.push(l)}),o.forEach(l=>{if(l==="__proto__"||l==="constructor"||l==="prototype"){const a=Object.getOwnPropertyDescriptor(i,l);a&&p.hasOwnProp(a,"value")&&e.push({value:a.value})}else e.push({value:i[l]})})}}const po=t=>t instanceof Z?{...t}:t,Ai=t=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(t).concat(Object.getOwnPropertySymbols(t).filter(e=>{const n=Object.getOwnPropertyDescriptor(t,e);return n&&n.enumerable})):Object.keys(t);function ng(t,e){const n=[],r=new WeakMap,i={};function s(l,a){if(!p.isPlainObject(a))return p.isArray(a)?a.slice():a;const c=p.isPlainObject(l)?l:i;let u=r.get(a);if(u||(u=new WeakMap,r.set(a,u)),u.has(c))return u.get(c);const h={};return u.set(c,h),n.push({base:c,source:a,result:h}),h}const o=p.isUndefined(e)?s(void 0,t):s(t,e);for(;n.length;){const{base:l,source:a,result:c}=n.pop(),u=new Set(Ai(l)),h=new Set(Ai(a));new Set([...u,...h]).forEach(g=>{if(g==="__proto__"||g==="constructor"||g==="prototype")return;const m=h.has(g),x=m?a[g]:void 0,b=(!m||p.isPlainObject(x))&&u.has(g)?l[g]:void 0;c[g]=m?s(b,x):s(void 0,b)})}return tg(o),o}function it(t,e,n,r){return p.isPlainObject(t)&&p.isPlainObject(e)?p.merge.call({caseless:r},t,e):p.isPlainObject(e)?p.merge({},e):p.isArray(e)?e.slice():e}function Al(t,e,n,r){if(p.isUndefined(e)){if(!p.isUndefined(t))return it(void 0,t,n,r)}else return it(t,e,n,r)}function Jr(t,e){if(!p.isUndefined(e))return it(void 0,e)}function H(t,e){if(p.isUndefined(e)){if(!p.isUndefined(t))return it(void 0,t)}else return it(void 0,e)}function rg(t,e,n){const r=p.hasOwnProp(e,"transitional")?e.transitional:void 0;if(!p.isUndefined(r))if(p.isPlainObject(r)){if(p.hasOwnProp(r,n))return r[n]}else return;const i=p.hasOwnProp(t,"transitional")?t.transitional:void 0;if(p.isPlainObject(i)&&p.hasOwnProp(i,n))return i[n]}function Oi(t,e,n,r,i){if(p.hasOwnProp(i,n))return it(t,e);if(p.hasOwnProp(r,n))return it(void 0,t)}function ig(t,e,n){return Al(po(t),po(e),n,!0)}const sg=Object.freeze({__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0}),go={url:Jr,method:Jr,data:Jr,baseURL:H,transformRequest:H,transformResponse:H,params:ng,paramsSerializer:H,timeout:H,timeoutErrorMessage:H,withCredentials:H,withXSRFToken:H,adapter:H,responseType:H,xsrfCookieName:H,xsrfHeaderName:H,onUploadProgress:H,onDownloadProgress:H,decompress:H,maxContentLength:H,maxBodyLength:H,beforeRedirect:H,transport:H,httpAgent:H,httpsAgent:H,cancelToken:H,socketPath:H,allowedSocketPaths:H,responseEncoding:H,validateStatus:Oi,headers:ig};function Pt(t,e){t=t||{},e=e||{};const n=Object.create(null);Object.defineProperty(n,"hasOwnProperty",sg);const r=Ai({...t,...e});for(let i=0,s=r.length;i<s;i++){const o=r[i];if(o==="__proto__"||o==="constructor"||o==="prototype")continue;const l=p.hasOwnProp(go,o)?go[o]:Al,a=p.hasOwnProp(t,o)?t[o]:void 0,c=p.hasOwnProp(e,o)?e[o]:void 0,u=l===Oi?l(a,c,o,t,e):l(a,c,o);p.isUndefined(u)&&l!==Oi||(n[o]=u)}return p.hasOwnProp(e,"validateStatus")&&p.isUndefined(e.validateStatus)&&rg(t,e,"validateStatusUndefinedResolves")===!1&&(p.hasOwnProp(t,"validateStatus")?n.validateStatus=it(void 0,t.validateStatus):delete n.validateStatus),n}const og=["content-type","content-length"];function ag(t,e,n){if(n!=="content-only"){t.set(e);return}Object.entries(e||{}).forEach(([r,i])=>{og.includes(r.toLowerCase())&&t.set(r,i)})}const mo=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16))),lg=t=>Cl.read(t);function Ol(t,e=lg){const n=Pt({},t),r=g=>p.hasOwnProp(n,g)?n[g]:void 0,i=r("data");let s=r("withXSRFToken");const o=r("xsrfHeaderName"),l=r("xsrfCookieName");let a=r("headers");const c=r("auth"),u=r("baseURL"),h=r("allowAbsoluteUrls"),f=r("url");if(n.headers=a=Z.from(a),n.url=bl(Pl(u,f,h,n),r("params"),r("paramsSerializer")),c){const g=p.getSafeProp(c,"username")||"",m=p.getSafeProp(c,"password")||"",x=r("transitional"),b=x&&p.hasOwnProp(x,"encodeBasicAuthUsername")&&x.encodeBasicAuthUsername===!0;try{a.set("Authorization","Basic "+btoa((b?mo(g):g)+":"+(m?mo(m):"")))}catch(R){throw T.from(R,T.ERR_BAD_OPTION_VALUE,t)}}if(p.isFormData(i)){const g=p.getSafeProp(i,"getHeaders");Y.hasStandardBrowserEnv||Y.hasStandardBrowserWebWorkerEnv||p.isReactNative(i)?a.setContentType(void 0):p.isFunction(g)&&ag(a,g.call(i),r("formDataHeaderPolicy"))}if(Y.hasStandardBrowserEnv&&(p.isFunction(s)&&(s=s(n)),s===!0||s==null&&Jp(n.url))){const m=o&&l&&e(l);m&&a.set(o,m)}return n}const cg=typeof XMLHttpRequest<"u",dg=cg&&function(t){return new Promise(function(n,r){let i;try{const A=Y.hasStandardBrowserEnv&&typeof window<"u"&&window.cookieStore;i=A&&p.isFunction(A.get)}catch{}let s;const o=Ol(t,i?A=>(s=A,null):void 0);let l=o.data;const a=Z.from(o.headers).normalize();let{responseType:c,onUploadProgress:u,onDownloadProgress:h}=o,f,g,m,x,b,R,w;function v(){clearTimeout(g);try{b&&b()}catch(A){setTimeout(()=>{throw A})}try{R&&R()}catch(A){setTimeout(()=>{throw A})}y&&(x&&y.removeEventListener("progress",x),y.upload&&(m&&y.upload.removeEventListener("progress",m),b&&y.upload.removeEventListener("loadend",b))),o.cancelToken&&o.cancelToken.unsubscribe(f),o.signal&&o.signal.removeEventListener("abort",f)}let y=new XMLHttpRequest;y.open(o.method.toUpperCase(),o.url,!0),y.timeout=o.timeout;function _(A){if(!y)return;if(y.status===0&&(Kr(Il(o.url))||Kr(Y.origin))!=="file"&&!(y.responseURL&&y.responseURL.startsWith("file:"))){r(new T("Request aborted",T.ECONNABORTED,t,y)),v(),y=null;return}try{A?w&&w(A):R&&R()}catch(K){setTimeout(()=>{throw K})}if(!y)return;const F=Z.from("getAllResponseHeaders"in y&&y.getAllResponseHeaders()),j={data:!c||c==="text"||c==="json"?y.responseText:y.response,status:y.status,statusText:y.statusText,headers:F,config:t,request:y};_l(function(ee){n(ee),v()},function(ee){r(ee),v()},j),y=null}if("onloadend"in y?y.onloadend=_:y.onreadystatechange=function(){!y||y.readyState!==4||y.status===0&&!(y.responseURL&&y.responseURL.startsWith("file:"))||setTimeout(_)},y.onabort=function(){y&&(r(new T("Request aborted",T.ECONNABORTED,t,y)),v(),y=null)},y.onerror=function(F){const z=F&&F.message?F.message:"Network Error",j=new T(z,T.ERR_NETWORK,t,y);j.event=F||null,r(j),v(),y=null},y.ontimeout=function(){if(!y)return;let F=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const z=o.transitional||Zi;o.timeoutErrorMessage&&(F=o.timeoutErrorMessage),r(new T(F,z.clarifyTimeoutError?T.ETIMEDOUT:T.ECONNABORTED,t,y)),v(),y=null},l===void 0&&a.setContentType(null),p.isUndefined(o.withCredentials)||(y.withCredentials=!!o.withCredentials),c&&c!=="json"&&(y.responseType=o.responseType),h&&([x,R,w]=dr(h,!0),y.addEventListener("progress",x)),u&&y.upload&&([m,b]=dr(u),y.upload.addEventListener("progress",m),y.upload.addEventListener("loadend",b)),o.cancelToken||o.signal){if(f=A=>{if(!y)return;r(!A||A.type?new Rn(null,t,y):A);const F=y;v(),y=null,F.abort()},o.cancelToken&&o.cancelToken.subscribe(f),!y)return;o.signal&&(o.signal.aborted?f():o.signal.addEventListener("abort",f))}if(!y)return;const I=Kr(o.url);if(I&&!Y.protocols.includes(I)){r(new T("Unsupported protocol "+I+":",T.ERR_BAD_REQUEST,t)),v();return}const P=()=>{y&&("setRequestHeader"in y&&p.forEach(fl(a),function(F,z){y.setRequestHeader(z,F)}),y.send(l||null))};if(s){const A=typeof performance<"u"&&p.isFunction(performance.now)?()=>performance.now():Date.now,F=y.timeout>0?A()+Number(y.timeout):void 0,z=()=>{if(!y)return;const j=y;j.ontimeout(),j.abort()};if(F!==void 0){const j=()=>{const K=F-A();K>0?g=setTimeout(j,Math.min(K,2147483647)):z()};j()}Cl.readAsync(s).then(j=>{if(y){if(F!==void 0&&A()>=F){z();return}if(j){const K=p.hasOwnProp(o,"xsrfHeaderName")&&o.xsrfHeaderName;a.set(K,j)}P()}}).catch(j=>{y&&(r(T.from(j,null,t,y)),v(),y=null)})}else P()})},ug=(t,e)=>{if(t=t?t.filter(Boolean):[],!e&&!t.length)return;const n=new AbortController;let r=!1;const i=function(a){if(!r){r=!0,o();const c=a instanceof Error?a:this.reason;n.abort(c instanceof T?c:new Rn(c instanceof Error?c.message:c))}};let s=e&&setTimeout(()=>{s=null,i(new T(`timeout of ${e}ms exceeded`,T.ETIMEDOUT))},e);const o=()=>{t&&(s&&clearTimeout(s),s=null,t.forEach(a=>{const c=p.getSafeProp(a,"unsubscribe");p.isFunction(c)?c.call(a,i):a.removeEventListener("abort",i)}),t=null)};t.forEach(a=>{if(!r){if(a.aborted){i.call(a);return}a.addEventListener("abort",i,{once:!0})}});const{signal:l}=n;return l.unsubscribe=()=>p.asap(o),l},hg=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let r=0,i;for(;r<n;)i=r+e,yield t.slice(r,i),r=i},fg=async function*(t,e){for await(const n of pg(t))yield*hg(n,e)},pg=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:r}=await e.read();if(n)break;yield r}}finally{await e.cancel()}},yo=(t,e,n,r)=>{const i=fg(t,e);let s=0,o,l=a=>{o||(o=!0,r&&r(a))};return new ReadableStream({async pull(a){try{const{done:c,value:u}=await i.next();if(c){l(),a.close();return}let h=u.byteLength;if(n){let f=s+=h;n(f)}a.enqueue(new Uint8Array(u))}catch(c){throw l(c),c}},cancel(a){return l(a),i.return()}},{highWaterMark:2})},Ye=`\r
`,bo=t=>String(t).replace(/\r\n|\r|\n/g,Ye),vo=t=>String(t).replace(/[\r\n"]/g,e=>e==="\r"?"%0D":e===`
`?"%0A":"%22"),dn=(t,e)=>{let n=0;for(let r=0;r<t.length;r++){const i=t.charCodeAt(r);e&&(i===13||i===10)?(i===13&&t.charCodeAt(r+1)===10&&r++,n+=2):i<128?n++:i<2048?n+=2:i>=55296&&i<=56319&&t.charCodeAt(r+1)>=56320&&t.charCodeAt(r+1)<=57343?(n+=4,r++):n+=3}return n};class Jn extends TypeError{constructor(e,n){super(e),this.name="FormDataError",this.reason=n}}function gg(t,e,n,r,i){if(!p.isFunction(e))throw new Jn("Blob is not supported","blob");if(!p.isString(i)||!/^[A-Za-z0-9'()+_,./:=? -]{1,70}$/.test(i)||/ $/.test(i))throw new Jn("Invalid multipart boundary","boundary");const s="--"+i+"--"+Ye;let o=s.length;const l=[],a=u=>{if(o+u>n)throw r()};a(0);for(const[u,h]of t){const f=p.isString(h),g=f?dn(h,!0):h.size;if(!Number.isFinite(g)||g<0)throw new Jn("Unsupported FormData part size","part");a(g+dn(u,!0)+(!f&&h.name?dn(h.name,!1):0)+(!f&&h.type?dn(h.type,!1):0));let m="--"+i+Ye+'Content-Disposition: form-data; name="'+vo(bo(u))+'"';f||(m+='; filename="'+vo(p.isString(h.name)?h.name:"blob")+'"'+Ye+"Content-Type: "+String(h.type||"application/octet-stream").replace(/[\r\n]/g,"")),m+=Ye+Ye;const x=dn(m,!1)+g+Ye.length;a(x),o+=x,l.push({header:m,value:h,isString:f})}const c=[];for(const u of l)c.push(u.header,u.isString?bo(u.value):u.value,Ye);return c.push(s),new e(c,{type:"multipart/form-data; boundary="+i})}function mg(t,e,n,r,i){if(!p.isFunction(e))throw new T("Blob is not supported",T.ERR_NOT_SUPPORT);if(i===void 0)if(p.isFunction(Y.generateString))i="axios-"+Y.generateString(36,"0123456789abcdef");else{const s=p.global.crypto;if(!s||!p.isFunction(s.getRandomValues))throw new T("Random byte generation is not supported",T.ERR_NOT_SUPPORT);const o=new Uint8Array(18);s.getRandomValues(o),i="axios-"+Array.from(o,l=>("0"+l.toString(16)).slice(-2)).join("")}try{return gg(t,e,n,r,i)}catch(s){if(s instanceof Jn){const o=s.reason==="boundary"?T.ERR_BAD_OPTION_VALUE:T.ERR_BAD_REQUEST;throw new T(s.message,o)}throw s}}const wo=t=>t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102,kl=(t,e,n)=>e+2<n&&wo(t.charCodeAt(e+1))&&wo(t.charCodeAt(e+2)),xo=t=>t<=57?t-48:(t&223)-55,yg=t=>t>=65&&t<=90||t>=97&&t<=122||t>=48&&t<=57||t===43||t===47||t===45||t===95,bg=t=>t===9||t===10||t===12||t===13||t===32,vg=t=>{const e=Math.floor(t/4),n=t%4;return e*3+(n===2?1:n===3?2:0)},wg=t=>{const e=t.length;let n=0;return e>0&&t.charCodeAt(e-1)===61&&(n++,e>1&&t.charCodeAt(e-2)===61&&n++),Math.floor((e-n)*3/4)},xg=t=>{const e=t.length;let n=0,r=0,i=!1;for(let s=0;s<e;s++){let o=t.charCodeAt(s);if(o===37&&kl(t,s,e)&&(o=xo(t.charCodeAt(s+1))*16+xo(t.charCodeAt(s+2)),s+=2),!bg(o)){if(o===61){r++;continue}if(!yg(o)||r>0){i=!0;continue}n++}}return i||r>2||r>0&&(n+r)%4!==0||n%4===1?wg(t):vg(n)},Eg=(t,e,n)=>{if(!t||typeof t!="string"||!/^data:/i.test(t))return 0;const r=t.indexOf(",");if(r<0)return 0;const i=t.slice(5,r),s=t.slice(r+1);if(n.test(i))return e(s);let l=0;for(let a=0,c=s.length;a<c;a++){const u=s.charCodeAt(a);if(u===37&&kl(s,a,c))l+=1,a+=2;else if(u<128)l+=1;else if(u<2048)l+=2;else if(u>=55296&&u<=56319&&a+1<c){const h=s.charCodeAt(a+1);h>=56320&&h<=57343?(l+=4,a++):l+=3}else l+=3}return l};function Sg(t){const e=typeof t=="string"?t.indexOf("#"):-1;return Eg(e===-1?t:t.slice(0,e),xg,/; *base64[\t\n\f\r ]*$/i)}const ts="1.21.0",Eo=64*1024,So={cache:"default",redirect:"follow",referrer:"about:client",referrerPolicy:"",mode:"cors",integrity:"",keepalive:!1,priority:"auto",window:null},{isFunction:$n}=p,Tg=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16))),To=t=>{if(!p.isString(t))return t;try{return decodeURIComponent(t)}catch{return t}},Bn=(t,...e)=>{try{return!!t(...e)}catch{return!1}},Rg=t=>{const e=t.indexOf("://");let n=t;return e!==-1&&(n=n.slice(e+3)),n.includes("@")||n.includes(":")},_g=t=>{const e=p.global!==void 0&&p.global!==null?p.global:globalThis,{ReadableStream:n,TextEncoder:r}=e;t=p.merge.call({skipUndefined:!0},{Request:e.Request,Response:e.Response,Blob:e.Blob},t);const i=p.hasOwnProp(t,"fetch")?t.fetch:void 0,{Request:s,Response:o,Blob:l}=t,a=i?$n(i):typeof fetch=="function",c=$n(s),u=$n(o);if(!a)return!1;const h=a&&$n(n),f=a&&(typeof r=="function"?(v=>y=>v.encode(y))(new r):async v=>new Uint8Array(await new s(v).arrayBuffer())),g=c&&h&&Bn(()=>{let v=!1;const y=new s(Y.origin,{body:new n,method:"POST",get duplex(){return v=!0,"half"}}),_=y.headers.has("Content-Type");return y.body!=null&&y.body.cancel(),v&&!_}),m=u&&h&&Bn(()=>p.isReadableStream(new o("").body)),x=Object.assign(Object.create(null),So);c&&!Bn(()=>new s(Y.origin,x))&&(delete x.cache,Bn(()=>new s(Y.origin,x))||(x.cache=So.cache));const b={stream:m&&(v=>v.body)};a&&["text","arrayBuffer","blob","formData","stream"].forEach(v=>{!b[v]&&(b[v]=(y,_)=>{let I=y&&y[v];if(I)return I.call(y);throw new T(`Response type '${v}' is not supported`,T.ERR_NOT_SUPPORT,_)})});const R=async v=>{if(v==null)return 0;if(p.isBlob(v))return v.size;if(p.isArrayBufferView(v)||p.isArrayBuffer(v))return v.byteLength;if(p.isURLSearchParams(v)&&(v=v+""),p.isString(v))return(await f(v)).byteLength},w=async(v,y)=>{const _=p.toFiniteNumber(v.getContentLength());return _??R(y)};return async v=>{let{url:y,method:_,data:I,signal:P,cancelToken:A,timeout:F,onDownloadProgress:z,onUploadProgress:j,responseType:K,headers:ee,withCredentials:te="same-origin",fetchOptions:X,maxContentLength:ne,maxBodyLength:de,maxRedirects:re}=Ol(v);const oe=p.isNumber(ne)&&ne>-1,ue=p.isNumber(de)&&de>-1,dt=$=>p.hasOwnProp(v,$)?v[$]:void 0;let Nn=i||fetch;K=K?(K+"").toLowerCase():"text";let Re=ug([P,A&&A.toAbortSignal()],F),Q=null;const ut=Re&&Re.unsubscribe&&(()=>{Re.unsubscribe()});let ht,tn=null,Or=null;const kr=()=>new T("Request body larger than maxBodyLength limit",T.ERR_BAD_REQUEST,v,Q);try{let $;const me=dt("auth");if(me){const L=p.getSafeProp(me,"username")||"",ae=p.getSafeProp(me,"password")||"";$={username:L,password:ae}}let pe;if(Rg(y)){if(pe=new URL(y,Y.origin),!$&&(pe.username||pe.password)){const L=To(pe.username),ae=To(pe.password);$={username:L,password:ae}}(pe.username||pe.password)&&(pe.username="",pe.password="",y=pe.href)}if($&&(ee.delete("authorization"),ee.set("Authorization","Basic "+btoa(Tg(($.username||"")+":"+($.password||""))))),oe&&pe&&pe.protocol==="data:"&&Sg(pe.href)>ne)throw new T("maxContentLength size of "+ne+" exceeded",T.ERR_BAD_RESPONSE,v,Q);const jn=p.isSpecCompliantForm(I)&&Z.from(dt("headers")).getContentType();let Ln;if(p.isString(jn)&&/^multipart\/form-data(?:\s*;|$)/i.test(jn.trim())){const L=Z.parseParameters(jn);p.hasOwnProp(L,"boundary")&&(Ln=L.boundary)}if(p.isSpecCompliantForm(I)&&_!=="get"&&_!=="head"&&(ue||j&&g||Ln!==void 0)&&(I=mg(I,l,ue?de:1/0,kr,Ln),ee.setContentType(Ln===void 0?I.type:jn),ht=I.size),ue&&_!=="get"&&_!=="head"){const L=await R(I);if(typeof L=="number"&&isFinite(L)&&(ht=L,L>de))throw kr()}const Dn=ue&&(p.isReadableStream(I)||p.isStream(I)),ws=(L,ae,jt)=>yo(L,Eo,ft=>{if(ue&&ft>de)throw tn=kr();ae&&ae(ft)},jt);if(g&&_!=="get"&&_!=="head"&&(j||Dn)){if(ht=ht??await w(ee,I),ht!==0||Dn){let L=new s(y,{method:"POST",body:I,duplex:"half"}),ae;if(p.isFormData(I)&&(ae=L.headers.get("content-type"))&&ee.setContentType(ae),L.body){const[jt,ft]=j&&uo(ht,dr(ho(j)))||[];I=ws(L.body,jt,ft)}}}else if(Dn&&!c&&h&&_!=="get"&&_!=="head")I=ws(I);else if(Dn&&c&&!g&&_!=="get"&&_!=="head")throw new T("Stream request bodies are not supported by the current fetch implementation",T.ERR_NOT_SUPPORT,v,Q);p.isString(te)||(te=te?"include":"omit");const Jc=c&&"credentials"in s.prototype;if(p.isFormData(I)){const L=ee.getContentType();L&&/^multipart\/form-data/i.test(L)&&!/boundary=/i.test(L)&&ee.delete("content-type")}ee.set("User-Agent","axios/"+ts,!1);const we=X==null?X:Object.assign(Object.create(null),X);we&&(delete we.body,delete we.headers,delete we.method,delete we.signal,delete we.duplex,delete we.credentials);const Ne=Object.assign(Object.create(null),we,{signal:Re,method:_.toUpperCase(),headers:fl(ee.normalize()),body:I,duplex:"half",credentials:Jc?te:void 0});c&&(p.forEach(x,(L,ae)=>{Ne[ae]===void 0&&(Ne[ae]=L)}),Ne.signal===void 0&&(Ne.signal=null),Ne.body===void 0&&(Ne.body=null)),re===0&&(Ne.redirect="manual",we&&(we.redirect="manual")),Q=c&&new s(y,Ne);let je=await(c?Nn(Q,we):Nn(y,Ne));const xs=Z.from(je.headers);if(oe){const L=p.toFiniteNumber(xs.getContentLength());if(L!=null&&L>ne)throw new T("maxContentLength size of "+ne+" exceeded",T.ERR_BAD_RESPONSE,v,Q)}const Nr=m&&(K==="stream"||K==="response");if(m&&je.body&&(z||oe||Nr&&ut)){const L={};["status","statusText","headers"].forEach(nn=>{L[nn]=je[nn]});const ae=p.toFiniteNumber(xs.getContentLength()),[jt,ft]=z&&uo(ae,dr(ho(z),!0))||[];let Es=0;const Yc=nn=>{if(oe&&(Es=nn,Es>ne))throw Or=new T("maxContentLength size of "+ne+" exceeded",T.ERR_BAD_RESPONSE,v,Q);jt&&jt(nn)};je=new o(yo(je.body,Eo,Yc,()=>{ft&&ft(),ut&&ut()}),L)}K=K||"text";let Le=await b[p.findKey(b,K)||"text"](je,v);if(oe&&!m&&!Nr){let L;if(Le!=null&&(typeof Le.byteLength=="number"?L=Le.byteLength:typeof Le.size=="number"?L=Le.size:typeof Le=="string"&&(L=typeof r=="function"?new r().encode(Le).byteLength:Le.length)),typeof L=="number"&&L>ne)throw new T("maxContentLength size of "+ne+" exceeded",T.ERR_BAD_RESPONSE,v,Q)}return!Nr&&ut&&ut(),await new Promise((L,ae)=>{_l(L,ae,{data:Le,headers:Z.from(je.headers),status:je.status,statusText:je.statusText,config:v,request:Q})})}catch($){if(ut&&ut(),Re&&Re.aborted&&Re.reason instanceof T){const me=Re.reason;throw me.config=v,Q&&(me.request=Q),$!==me&&Object.defineProperty(me,"cause",{__proto__:null,value:$,writable:!0,enumerable:!1,configurable:!0}),me}if(tn)throw Q&&!tn.request&&(tn.request=Q),tn;if(Or)throw Or;if($ instanceof T)throw Q&&!$.request&&($.request=Q),$;if($&&$.name==="TypeError"&&/Load failed|fetch/i.test($.message)){const me=new T("Network Error",T.ERR_NETWORK,v,Q,$&&$.response);throw Object.defineProperty(me,"cause",{__proto__:null,value:$.cause||$,writable:!0,enumerable:!1,configurable:!0}),me}throw T.from($,$&&$.code,v,Q,$&&$.response)}}},Ig=new Map,Nl=t=>{const e=Object.create(null),n=t&&p.hasOwnProp(t,"env")&&t.env;["fetch","Request","Response","Blob"].forEach(g=>{n&&p.hasOwnProp(n,g)&&(e[g]=n[g])});const{fetch:r,Request:i,Response:s,Blob:o}=e,l=[i,s,r,o];let a=l.length,c=a,u,h,f=Ig;for(;c--;)u=l[c],h=f.get(u),h===void 0&&f.set(u,h=c?new Map:_g(e)),f=h;return h};Nl();const ns={http:Pp,xhr:dg,fetch:{get:Nl}};p.forEach(ns,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{__proto__:null,value:e})}catch{}Object.defineProperty(t,"adapterName",{__proto__:null,value:e})}});const Ro=t=>`- ${t}`,Cg=t=>p.isFunction(t)||t===null||t===!1;function Pg(t,e){t=p.isArray(t)?t:[t];const{length:n}=t;let r,i;const s={};for(let o=0;o<n;o++){r=t[o];let l;if(i=r,!Cg(r)&&(i=ns[(l=String(r)).toLowerCase()],i===void 0))throw new T(`Unknown adapter '${l}'`);if(i&&(p.isFunction(i)||(i=i.get(e))))break;s[l||"#"+o]=i}if(!i){const o=Object.entries(s).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let l=n?o.length>1?`since :
`+o.map(Ro).join(`
`):" "+Ro(o[0]):"as no adapter specified";throw new T("There is no suitable adapter to dispatch the request "+l,T.ERR_NOT_SUPPORT)}return i}const jl={getAdapter:Pg,adapters:ns};function Yr(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Rn(null,t)}function _o(t){return Math.max(0,Date.now()-t)}function Xr(t){const e=p.toSafeFlatObject(t);Yr(e),e.headers=Z.from(p.getSafeProp(e,"headers")),e.data=qr.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1);const n=jl.getAdapter(e.adapter||Tn.adapter,e),r=Date.now();return n(e).then(function(s){Yr(e),s.duration=_o(r),e.response=s;try{s.data=qr.call(e,e.transformResponse,s)}finally{delete e.response}return s.headers=Z.from(s.headers),s},function(s){if(!Rl(s)&&(Yr(e),s&&s.response)){s.response.duration=_o(r),e.response=s.response;try{s.response.data=qr.call(e,e.transformResponse,s.response)}finally{delete e.response}s.response.headers=Z.from(s.response.headers)}return Promise.reject(s)})}const _r={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{_r[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const Io={};_r.transitional=function(e,n,r){function i(s,o){return"[Axios v"+ts+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,l)=>{if(e===!1)throw new T(i(o," has been removed"+(n?" in "+n:"")),T.ERR_DEPRECATED);return n&&!Io[o]&&(Io[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,l):!0}};_r.spelling=function(e){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};function Ag(t,e,n){if(typeof t!="object"||t===null)throw new T("options must be an object",T.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const s=r[i],o=Object.prototype.hasOwnProperty.call(e,s)?e[s]:void 0;if(o){const l=t[s],a=l===void 0||o(l,s,t);if(a!==!0)throw new T("option "+s+" must be "+a,T.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new T("Unknown option "+s,T.ERR_BAD_OPTION)}}const Yn={assertOptions:Ag,validators:_r},ie=Yn.validators,Qr=t=>{if(t==null||p.isPlainObject(t)||t instanceof Z)return!0;try{return p.isObject(t)&&p.getSafeProp(t,Symbol.toStringTag)==="AxiosHeaders"&&["toJSON","set","get","has","delete","clear","normalize","concat","toString",Symbol.iterator].every(e=>p.isFunction(p.getSafeProp(t,e)))}catch{return!1}};let Tt=class{constructor(e){this.defaults=e||{},this.interceptors={request:new ao,response:new ao}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error)try{let i={};Error.captureStackTrace?Error.captureStackTrace(i):i=new Error;const s=i.stack;let o="";if(typeof s=="string"){const l=s.indexOf(`
`);o=l===-1?"":s.slice(l+1)}if(!r.stack)r.stack=o;else if(o){const l=o.indexOf(`
`),a=l===-1?-1:o.indexOf(`
`,l+1),c=a===-1?o:o.slice(a+1),u=String(r.stack),h=Ip(r,u),f=h===-1?u:u.slice(0,h),g=h===-1?"":u.slice(h);f.endsWith(c)||(r.stack=f+`
`+o+g)}}catch{}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Pt(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&Yn.assertOptions(r,{silentJSONParsing:ie.transitional(ie.boolean),forcedJSONParsing:ie.transitional(ie.boolean),clarifyTimeoutError:ie.transitional(ie.boolean),legacyInterceptorReqResOrdering:ie.transitional(ie.boolean),advertiseZstdAcceptEncoding:ie.transitional(ie.boolean),validateStatusUndefinedResolves:ie.transitional(ie.boolean),encodeBasicAuthUsername:ie.transitional(ie.boolean)},!1),i!=null&&(p.isFunction(i)?n.paramsSerializer={serialize:i}:Yn.assertOptions(i,{encode:ie.function,serialize:ie.function},!0)),n.allowAbsoluteUrls!==void 0||(p.hasOwnProp(this.defaults,"allowAbsoluteUrls")&&this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Yn.assertOptions(n,{baseUrl:ie.spelling("baseURL"),withXsrfToken:ie.spelling("withXSRFToken")},!0),n.method=(p.getSafeProp(n,"method")||p.getSafeProp(this.defaults,"method")||"get").toLowerCase();const o=p.getSafeProp(s,"common"),l=p.getSafeProp(s,n.method),a=s&&p.merge(Qr(o)?o:void 0,Qr(l)?l:void 0);s&&p.forEach(Tl.concat("common"),b=>{Qr(p.getSafeProp(s,b))&&delete s[b]}),n.headers=Z.concat(a,s);const c=[];let u=!0;this.interceptors.request.forEach(function(R){if(typeof R.runWhen=="function"&&R.runWhen(n)===!1)return;u=u&&R.synchronous;const w=n.transitional||Zi;w&&w.legacyInterceptorReqResOrdering?c.unshift(R.fulfilled,R.rejected):c.push(R.fulfilled,R.rejected)});const h=[];this.interceptors.response.forEach(function(R){h.push(R.fulfilled,R.rejected)});let f,g=0,m;if(!u){const b=[Xr.bind(this),void 0];for(b.unshift(...c),b.push(...h),m=b.length,f=Promise.resolve(n);g<m;)f=f.then(b[g++],b[g++]);return f}m=c.length;let x=n;for(;g<m;){const b=c[g++],R=c[g++];try{x=b?b(x):x}catch(w){if(!R){f=Promise.reject(w);break}try{const v=R.call(this,w);p.isThenable(v)&&(f=Promise.resolve(v).then(()=>Xr.call(this,x)))}catch(v){f=Promise.reject(v)}break}}if(!f)try{f=Xr.call(this,x)}catch(b){f=Promise.reject(b)}for(g=0,m=h.length;g<m;)f=f.then(h[g++],h[g++]);return f}getUri(e){e=Pt(this.defaults,e);const n=Pl(e.baseURL,e.url,e.allowAbsoluteUrls,e);return bl(n,e.params,e.paramsSerializer)}};p.forEach(["delete","get","head","options"],function(e){Tt.prototype[e]=async function(n,r){return this.request(Pt(r||{},{method:e,url:n,data:r&&p.hasOwnProp(r,"data")?r.data:void 0}))}});p.forEach(["post","put","patch","query"],function(e){function n(r){return async function(s,o,l){return this.request(Pt(l||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Tt.prototype[e]=n(),e!=="query"&&(Tt.prototype[e+"Form"]=n(!0))});let Og=class Ll{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(l=>{r.subscribe(l),s=l}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},e(function(s,o,l){r.reason||(r.reason=new Rn(s,o,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=r=>{e.abort(r)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new Ll(function(i){e=i}),cancel:e}}};function kg(t){return function(n){return t.apply(null,n)}}function Ng(t){return p.isObject(t)&&t.isAxiosError===!0}const Xn={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,ContentTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,UnprocessableContent:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Xn).forEach(([t,e])=>{Xn[e]===void 0&&(Xn[e]=t)});function Dl(t){const e=new Tt(t),n=sl(Tt.prototype.request,e);return p.extend(n,Tt.prototype,e,{allOwnKeys:!0}),p.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return Dl(Pt(t,i))},n}const q=Dl(Tn);q.Axios=Tt;q.CanceledError=Rn;q.CancelToken=Og;q.isCancel=Rl;q.VERSION=ts;q.toFormData=Rr;q.AxiosError=T;q.Cancel=q.CanceledError;q.all=function(e){return Promise.all(e)};q.spread=kg;q.isAxiosError=Ng;q.mergeConfig=Pt;q.AxiosHeaders=Z;q.formToJSON=t=>Sl(p.isHTMLForm(t)?new FormData(t):t);q.getAdapter=jl.getAdapter;q.HttpStatusCode=Xn;q.default=q;const{Axios:Jx,AxiosError:Yx,CanceledError:Xx,isCancel:Qx,CancelToken:Zx,VERSION:e0,all:t0,Cancel:n0,isAxiosError:r0,spread:i0,toFormData:s0,AxiosHeaders:o0,HttpStatusCode:a0,formToJSON:l0,getAdapter:c0,mergeConfig:d0,create:u0}=q,Co=!1,jg="senditgo",Lg="AIzaSyCCFkpD6mTpO7D4V2vPAx6qnABbrQFjmPw",Dg="tms-prod-5b64f.firebaseapp.com",Mg="tms-prod-5b64f",Fg="tms-prod-5b64f.firebasestorage.app",Ug="8390929152",$g="1:8390929152:web:f53f3ad71de3cf8f2ca1e5",Bg="G-0P0BSKZQN0";function ur(t){const e=document.cookie.split("; ").find(n=>n.startsWith(`${encodeURIComponent(t)}=`));if(e)return decodeURIComponent(e.slice(e.indexOf("=")+1))}function Po(t,e,n={}){const{maxAge:r,path:i="/",secure:s=!1,sameSite:o="strict"}=n;let l=`${encodeURIComponent(t)}=${encodeURIComponent(e)}`;l+=`; path=${i}`,l+=`; samesite=${o}`,typeof r=="number"&&(l+=`; max-age=${Math.floor(r)}`),s&&(l+="; Secure"),document.cookie=l}function Ao(t,e="/"){document.cookie=`${encodeURIComponent(t)}=; path=${e}; max-age=0`}function Ml(){Ao("X-Token"),Ao("X-Refresh-Token"),Ot.getState().logout()}function tt(){Ml();const t=qi();window.location.pathname!==t&&(window.location.href=t)}const Hg=7,Fl=200,Ul=[5,201,202,204],Vg=["/api/company/verifyToken","/api/company/refreshToken"],zg={baseURL:void 0},be=q.create(zg);let zt=!1,ki=[];function $l(t){ki.push(t)}function hr(t){ki.forEach(e=>e(t)),ki=[]}async function Bl(){var t,e;try{const n=be.defaults.headers.common["X-Refresh-Token"]||ur("X-Refresh-Token");if(!n)return null;const r=await q.post(`${Co?"/apis":""}/api/company/refreshToken`,{refreshToken:n},{headers:{"Content-type":"application/json;charset-UTF-8","X-Refresh-Token":n}});if(((t=r.data)==null?void 0:t.code)===0&&((e=r.data)!=null&&e.data)){const{token:i,refresh:s}=r.data.data;be.defaults.headers.common.Token=i,be.defaults.headers.common["X-Refresh-Token"]=s;const o={sameSite:"strict",maxAge:86400,secure:!Co};return Po("X-Token",i,o),Po("X-Refresh-Token",s,o),i}return null}catch{return null}}function Wg(t){if(typeof FormData<"u"&&t.data instanceof FormData?(t.headers.delete("Content-Type"),t.headers.delete("Content-type")):t.headers["Content-type"]="application/json;charset-UTF-8",!t.headers.get("Token")){const n=be.defaults.headers.common.Token||ur("X-Token");n&&t.headers.set("Token",n)}if(!t.headers.get("X-Refresh-Token")){const n=be.defaults.headers.common["X-Refresh-Token"]||ur("X-Refresh-Token");n&&t.headers.set("X-Refresh-Token",n)}return t}be.interceptors.request.use(Wg,t=>Promise.reject(t));const Hl=t=>Vg.some(e=>t===e||t.endsWith(e)),Vl=(t,e)=>t===Hg&&["session","login","another","terminated","kicked"].some(n=>e.includes(n)),Gg=async t=>{var i;const e=t.data,n=Number(e==null?void 0:e.code),r=t.config;if(n>0){const s=(r==null?void 0:r.url)||"";if(!Hl(s)){const o=((i=e==null?void 0:e.message)==null?void 0:i.toLowerCase())||"";if(Vl(n,o))return tt(),new Promise(()=>{});if(n===Fl){const l=r;if(l._retried)return tt(),new Promise(()=>{});if(!zt){zt=!0;const a=await Bl();return zt=!1,a?(hr(a),l._retried=!0,l.headers.Token=a,be(l)):(hr(null),tt(),new Promise(()=>{}))}return new Promise((a,c)=>{$l(u=>{if(!u){c(e);return}l._retried=!0,l.headers.Token=u,a(be(l))})})}if(Ul.includes(n))return tt(),new Promise(()=>{})}throw e}return e},qg=async t=>{var o,l;const e=t,n=(o=e.response)==null?void 0:o.data,r=Number(n==null?void 0:n.code),i=e.config,s=(i==null?void 0:i.url)||"";if(n&&!Hl(s)){const a=((l=n==null?void 0:n.message)==null?void 0:l.toLowerCase())||"";if(Vl(r,a))return tt(),new Promise(()=>{});if(r===Fl&&i){const c=i;if(c._retried)return tt(),new Promise(()=>{});if(!zt){zt=!0;const u=await Bl();return zt=!1,u?(hr(u),c._retried=!0,c.headers.Token=u,be(c)):(hr(null),tt(),new Promise(()=>{}))}return new Promise((u,h)=>{$l(f=>{if(!f){h(t);return}c._retried=!0,c.headers.Token=f,u(be(c))})})}if(Ul.includes(r))return tt(),new Promise(()=>{})}return Promise.reject(t)};be.interceptors.response.use(Gg,qg);const Kg=()=>{};var Oo={};/**
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
 */const zl=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Jg=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Wl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=s>>2,h=(s&3)<<4|l>>4;let f=(l&15)<<2|c>>6,g=c&63;a||(g=64,o||(f=64)),r.push(n[u],n[h],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(zl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Jg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||h==null)throw new Yg;const f=s<<2|l>>4;if(r.push(f),c!==64){const g=l<<4&240|c>>2;if(r.push(g),h!==64){const m=c<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Yg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Xg=function(t){const e=zl(t);return Wl.encodeByteArray(e,!0)},Gl=function(t){return Xg(t).replace(/\./g,"")},ql=function(t){try{return Wl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Qg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Zg=()=>Qg().__FIREBASE_DEFAULTS__,em=()=>{if(typeof process>"u"||typeof Oo>"u")return;const t=Oo.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},tm=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ql(t[1]);return e&&JSON.parse(e)},rs=()=>{try{return Kg()||Zg()||em()||tm()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},nm=t=>{var e,n;return(n=(e=rs())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Kl=()=>{var t;return(t=rs())==null?void 0:t.config},Jl=t=>{var e;return(e=rs())==null?void 0:e[`_${t}`]};/**
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
 */class Yl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ce())}function im(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function sm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function om(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function am(){const t=ce();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function lm(){try{return typeof indexedDB=="object"}catch{return!1}}function cm(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const dm="FirebaseError";class at extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=dm,Object.setPrototypeOf(this,at.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_n.prototype.create)}}class _n{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?um(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new at(i,l,r)}}function um(t,e){try{let n=0,r="";for(;n<t.length;){const i=t.indexOf("{$",n);if(i===-1){r+=t.substring(n);break}const s=t.indexOf("}",i+2);if(s===-1){r+=t.substring(n);break}const o=t.substring(i+2,s),l=e[o];r+=t.substring(n,i)+(l!=null?String(l):`<${o}?>`),n=s+1}return r}catch{return t}}function hm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Kt(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(ko(s)&&ko(o)){if(!Kt(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function ko(t){return t!==null&&typeof t=="object"}/**
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
 */function Zt(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function fm(t,e){const n=new pm(t,e);return n.subscribe.bind(n)}class pm{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");gm(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Zr),i.error===void 0&&(i.error=Zr),i.complete===void 0&&(i.complete=Zr);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gm(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Zr(){}/**
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
 */function kt(t){return t&&t._delegate?t._delegate:t}/**
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
 */function is(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function mm(t){return(await fetch(t,{credentials:"include"})).ok}class Jt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const vt="[DEFAULT]";/**
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
 */class ym{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Yl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vm(e))try{this.getOrInitializeService({instanceIdentifier:vt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=vt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vt){return this.instances.has(e)}getOptions(e=vt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:bm(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=vt){return this.component?this.component.multipleInstances?e:vt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bm(t){return t===vt?void 0:t}function vm(t){return t.instantiationMode==="EAGER"}/**
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
 */class wm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ym(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var B;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(B||(B={}));const xm={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},Em=B.INFO,Sm={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},Tm=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Sm[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xl{constructor(e){this.name=e,this._logLevel=Em,this._logHandler=Tm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in B))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...e),this._logHandler(this,B.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...e),this._logHandler(this,B.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,B.INFO,...e),this._logHandler(this,B.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,B.WARN,...e),this._logHandler(this,B.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...e),this._logHandler(this,B.ERROR,...e)}}const Rm=(t,e)=>e.some(n=>t instanceof n);let No,jo;function _m(){return No||(No=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Im(){return jo||(jo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ql=new WeakMap,Ni=new WeakMap,Zl=new WeakMap,ei=new WeakMap,ss=new WeakMap;function Cm(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(nt(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ql.set(n,t)}).catch(()=>{}),ss.set(e,t),e}function Pm(t){if(Ni.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ni.set(t,e)}let ji={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ni.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Zl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return nt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Am(t){ji=t(ji)}function Om(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ti(this),e,...n);return Zl.set(r,e.sort?e.sort():[e]),nt(r)}:Im().includes(t)?function(...e){return t.apply(ti(this),e),nt(Ql.get(this))}:function(...e){return nt(t.apply(ti(this),e))}}function km(t){return typeof t=="function"?Om(t):(t instanceof IDBTransaction&&Pm(t),Rm(t,_m())?new Proxy(t,ji):t)}function nt(t){if(t instanceof IDBRequest)return Cm(t);if(ei.has(t))return ei.get(t);const e=km(t);return e!==t&&(ei.set(t,e),ss.set(e,t)),e}const ti=t=>ss.get(t);function Nm(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=nt(o);return r&&o.addEventListener("upgradeneeded",a=>{r(nt(o.result),a.oldVersion,a.newVersion,nt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const jm=["get","getKey","getAll","getAllKeys","count"],Lm=["put","add","delete","clear"],ni=new Map;function Lo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ni.get(e))return ni.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Lm.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||jm.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return ni.set(e,s),s}Am(t=>({...t,get:(e,n,r)=>Lo(e,n)||t.get(e,n,r),has:(e,n)=>!!Lo(e,n)||t.has(e,n)}));/**
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
 */class Dm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Mm(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Mm(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Li="@firebase/app",Do="0.16.2";/**
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
 */const ze=new Xl("@firebase/app"),Fm="@firebase/app-compat",Um="@firebase/analytics-compat",$m="@firebase/analytics",Bm="@firebase/app-check-compat",Hm="@firebase/app-check",Vm="@firebase/auth",zm="@firebase/auth-compat",Wm="@firebase/database",Gm="@firebase/data-connect",qm="@firebase/database-compat",Km="@firebase/functions",Jm="@firebase/functions-compat",Ym="@firebase/installations",Xm="@firebase/installations-compat",Qm="@firebase/messaging",Zm="@firebase/messaging-compat",ey="@firebase/performance",ty="@firebase/performance-compat",ny="@firebase/remote-config",ry="@firebase/remote-config-compat",iy="@firebase/storage",sy="@firebase/storage-compat",oy="@firebase/firestore",ay="@firebase/ai",ly="@firebase/firestore-compat",cy="firebase",dy="12.19.0";/**
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
 */const Di="[DEFAULT]",uy={[Li]:"fire-core",[Fm]:"fire-core-compat",[$m]:"fire-analytics",[Um]:"fire-analytics-compat",[Hm]:"fire-app-check",[Bm]:"fire-app-check-compat",[Vm]:"fire-auth",[zm]:"fire-auth-compat",[Wm]:"fire-rtdb",[Gm]:"fire-data-connect",[qm]:"fire-rtdb-compat",[Km]:"fire-fn",[Jm]:"fire-fn-compat",[Ym]:"fire-iid",[Xm]:"fire-iid-compat",[Qm]:"fire-fcm",[Zm]:"fire-fcm-compat",[ey]:"fire-perf",[ty]:"fire-perf-compat",[ny]:"fire-rc",[ry]:"fire-rc-compat",[iy]:"fire-gcs",[sy]:"fire-gcs-compat",[oy]:"fire-fst",[ly]:"fire-fst-compat",[ay]:"fire-vertex","fire-js":"fire-js",[cy]:"fire-js-all"};/**
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
 */const fr=new Map,hy=new Map,Mi=new Map;function Mo(t,e){try{t.container.addComponent(e)}catch(n){ze.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function vn(t){const e=t.name;if(Mi.has(e))return ze.debug(`There were multiple attempts to register component ${e}.`),!1;Mi.set(e,t);for(const n of fr.values())Mo(n,t);for(const n of hy.values())Mo(n,t);return!0}function ec(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ie(t){return t==null?!1:t.settings!==void 0}/**
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
 */const fy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ue=new _n("app","Firebase",fy);/**
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
 */class py{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Jt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ue.create("app-deleted",{appName:this._name})}}/**
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
 */const In=dy;function tc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Di,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Ue.create("bad-app-name",{appName:String(i)});if(n||(n=Kl()),!n)throw Ue.create("no-options");const s=fr.get(i);if(s)if(Kt(n,s.options)){if(Kt(r,s.config))return s;throw Ue.create("duplicate-app",{appName:i,mismatchedParam:"config",oldValue:JSON.stringify(s.config),newValue:JSON.stringify(r)})}else throw Ue.create("duplicate-app",{appName:i,mismatchedParam:"options",oldValue:JSON.stringify(s.options),newValue:JSON.stringify(n)});const o=new wm(i);for(const a of Mi.values())o.addComponent(a);const l=new py(n,r,o);return fr.set(i,l),l}function gy(t=Di){const e=fr.get(t);if(!e&&t===Di&&Kl())return tc();if(!e)throw Ue.create("no-app",{appName:t});return e}function Wt(t,e,n){let r=uy[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ze.warn(o.join(" "));return}vn(new Jt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const my="firebase-heartbeat-database",yy=1,wn="firebase-heartbeat-store";let ri=null;function nc(){return ri||(ri=Nm(my,yy,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(wn)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ue.create("idb-open",{originalErrorMessage:t.message})})),ri}async function by(t){try{const n=(await nc()).transaction(wn),r=await n.objectStore(wn).get(rc(t));return await n.done,r}catch(e){if(e instanceof at)ze.warn(e.message);else{const n=Ue.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ze.warn(n.message)}}}async function Fo(t,e){try{const r=(await nc()).transaction(wn,"readwrite");await r.objectStore(wn).put(e,rc(t)),await r.done}catch(n){if(n instanceof at)ze.warn(n.message);else{const r=Ue.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ze.warn(r.message)}}}function rc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const vy=1024,wy=30;class xy{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Sy(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Uo();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>wy){const o=Ty(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ze.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Uo(),{heartbeatsToSend:r,unsentEntries:i}=Ey(this._heartbeatsCache.heartbeats),s=Gl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return ze.warn(n),""}}}function Uo(){return new Date().toISOString().substring(0,10)}function Ey(t,e=vy){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),$o(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),$o(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Sy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lm()?cm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await by(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Fo(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Fo(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function $o(t){return Gl(JSON.stringify({version:2,heartbeats:t})).length}function Ty(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function Ry(t){vn(new Jt("platform-logger",e=>new Dm(e),"PRIVATE")),vn(new Jt("heartbeat",e=>new xy(e),"PRIVATE")),Wt(Li,Do,t),Wt(Li,Do,"esm2020"),Wt("fire-js","")}/**
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
 */Ry("");var _y="firebase",Iy="12.19.0";/**
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
 */Wt(_y,Iy,"app");function ic(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Cy=ic,sc=new _n("auth","Firebase",ic());/**
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
 */const pr=new Xl("@firebase/auth");function Qn(t,...e){pr.logLevel<=B.WARN&&pr.warn(`Auth (${In}): ${t}`,...e)}function Zn(t,...e){pr.logLevel<=B.ERROR&&pr.error(`Auth (${In}): ${t}`,...e)}/**
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
 */function We(t,...e){throw as(t,...e)}function ge(t,...e){return as(t,...e)}function os(t,e,n){const r={...Cy(),[e]:n};return new _n("auth","Firebase",r).create(e,{appName:t.name})}function rt(t){return os(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function as(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return sc.create(t,...e)}function C(t,e,...n){if(!t)throw as(e,...n)}function $e(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Zn(e),new Error(e)}function Ge(t,e){t||$e(e)}/**
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
 */function Fi(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function oc(){return Bo()==="http:"||Bo()==="https:"}function Bo(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function Py(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(oc()||sm()||"connection"in navigator)?navigator.onLine:!0}function Ay(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Cn{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ge(n>e,"Short delay should be less than long delay!"),this.isMobile=rm()||om()}get(){return Py()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ls(t,e){Ge(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ac{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;$e("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;$e("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;$e("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Oy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ky=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Ny=new Cn(3e4,6e4);function ke(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Te(t,e,n,r,i={}){return lc(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Zt({...o,key:t.config.apiKey}).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:a,...s};return im()||(c.referrerPolicy="strict-origin-when-cross-origin"),t.emulatorConfig&&is(t.emulatorConfig.host)&&(c.credentials="include"),ac.fetch()(await cc(t,t.config.apiHost,n,l),c)})}async function lc(t,e,n){t._canInitEmulator=!1;const r={...Oy,...e};try{const i=new Ly(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw un(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,c]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw un(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw un(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw un(t,"user-disabled",o);const u=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw os(t,u,c);We(t,u)}}catch(i){if(i instanceof at)throw i;We(t,"network-request-failed",{message:String(i)})}}async function Ir(t,e,n,r,i={}){const s=await Te(t,e,n,r,i);return"mfaPendingCredential"in s&&We(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function cc(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?ls(t.config,i):`${t.config.apiScheme}://${i}`;return ky.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function jy(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ly{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ge(this.auth,"network-request-failed")),Ny.get())})}}function un(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ge(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */function Ho(t){return t!==void 0&&t.getResponse!==void 0}function Vo(t){return t!==void 0&&t.enterprise!==void 0}class dc{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return jy(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
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
 */async function Dy(t){return(await Te(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function uc(t,e){return Te(t,"GET","/v2/recaptchaConfig",ke(t,e))}/**
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
 */async function My(t,e){return Te(t,"POST","/v1/accounts:delete",e)}async function gr(t,e){return Te(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function pn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Fy(t,e=!1){const n=kt(t),r=await n.getIdToken(e),i=cs(r);C(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:pn(ii(i.auth_time)),issuedAtTime:pn(ii(i.iat)),expirationTime:pn(ii(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ii(t){return Number(t)*1e3}function cs(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Zn("JWT malformed, contained fewer than 3 sections"),null;try{const i=ql(n);return i?JSON.parse(i):(Zn("Failed to decode base64 JWT payload"),null)}catch(i){return Zn("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function zo(t){const e=cs(t);return C(e,"internal-error"),C(typeof e.exp<"u","internal-error"),C(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function xn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof at&&Uy(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Uy({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class $y{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ui{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=pn(this.lastLoginAt),this.creationTime=pn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function mr(t){var h;const e=t.auth,n=await t.getIdToken(),r=await xn(t,gr(e,{idToken:n}));C(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(h=i.providerUserInfo)!=null&&h.length?hc(i.providerUserInfo):[],o=Hy(t.providerData,s),l=t.isAnonymous,a=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?a:!1,u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Ui(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,u)}async function By(t){const e=kt(t);await mr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Hy(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function hc(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function Vy(t,e){const n=await lc(t,{},async()=>{const r=Zt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await cc(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const a={method:"POST",headers:l,body:r};return t.emulatorConfig&&is(t.emulatorConfig.host)&&(a.credentials="include"),ac.fetch()(o,a)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function zy(t,e){return Te(t,"POST","/v2/accounts:revokeToken",ke(t,e))}/**
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
 */class Gt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){C(e.idToken,"internal-error"),C(typeof e.idToken<"u","internal-error"),C(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zo(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){C(e.length!==0,"internal-error");const n=zo(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(C(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Vy(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Gt;return r&&(C(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(C(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(C(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gt,this.toJSON())}_performRefresh(){return $e("not implemented")}}/**
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
 */function Ke(t,e){C(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Se{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new $y(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ui(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await xn(this,this.stsTokenManager.getToken(this.auth,e));return C(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Fy(this,e)}reload(){return By(this)}_assign(e){this!==e&&(C(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Se({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){C(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await mr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ie(this.auth.app))return Promise.reject(rt(this.auth));const e=await this.getIdToken();return await xn(this,My(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,a=n._redirectEventId??void 0,c=n.createdAt??void 0,u=n.lastLoginAt??void 0,{uid:h,emailVerified:f,isAnonymous:g,providerData:m,stsTokenManager:x}=n;C(h&&x,e,"internal-error");const b=Gt.fromJSON(this.name,x);C(typeof h=="string",e,"internal-error"),Ke(r,e.name),Ke(i,e.name),C(typeof f=="boolean",e,"internal-error"),C(typeof g=="boolean",e,"internal-error"),Ke(s,e.name),Ke(o,e.name),Ke(l,e.name),Ke(a,e.name),Ke(c,e.name),Ke(u,e.name);const R=new Se({uid:h,auth:e,email:i,emailVerified:f,displayName:r,isAnonymous:g,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:b,createdAt:c,lastLoginAt:u});return m&&Array.isArray(m)&&(R.providerData=m.map(w=>({...w}))),a&&(R._redirectEventId=a),R}static async _fromIdTokenResponse(e,n,r=!1){const i=new Gt;i.updateFromServerResponse(n);const s=new Se({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await mr(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];C(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?hc(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Gt;l.updateFromIdToken(r);const a=new Se({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ui(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(a,c),a}}/**
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
 */const Wo=new Map;function Be(t){Ge(t instanceof Function,"Expected a class definition");let e=Wo.get(t);return e?(Ge(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Wo.set(t,e),e)}/**
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
 */class fc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}fc.type="NONE";const Go=fc;/**
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
 */function er(t,e,n){return`firebase:${t}:${e}:${n}`}class Rt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=er(this.userKey,i.apiKey,s),this.fullPersistenceKey=er("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await gr(this.auth,{idToken:e}).catch(()=>{});return n?Se._fromGetAccountInfoResponse(this.auth,n,e):null}return Se._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(e,n,r="authUser"){if(!n.length)return new Rt(Be(Go),e,r);const i=(await Promise.all(n.map(async c=>{try{if(await c._isAvailable())return c}catch{return}}))).filter(c=>c);let s=i[0]||Be(Go);const o=er(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const u=await c._get(o);if(u){let h;if(typeof u=="string"){const f=await gr(e,{idToken:u}).catch(()=>{});if(!f)break;h=await Se._fromGetAccountInfoResponse(e,f,u)}else h=Se._fromJSON(e,u);c!==s&&(l=h),s=c;break}}catch{}const a=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Rt(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Rt(s,e,r))}}/**
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
 */function qo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(yc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vc(e))return"Blackberry";if(wc(e))return"Webos";if(gc(e))return"Safari";if((e.includes("chrome/")||mc(e))&&!e.includes("edge/"))return"Chrome";if(bc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function pc(t=ce()){return/firefox\//i.test(t)}function gc(t=ce()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function mc(t=ce()){return/crios\//i.test(t)}function yc(t=ce()){return/iemobile/i.test(t)}function bc(t=ce()){return/android/i.test(t)}function vc(t=ce()){return/blackberry/i.test(t)}function wc(t=ce()){return/webos/i.test(t)}function ds(t=ce()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Wy(t=ce()){var e;return ds(t)&&!!((e=window.navigator)!=null&&e.standalone)}function Gy(){return am()&&document.documentMode===10}function xc(t=ce()){return ds(t)||bc(t)||wc(t)||vc(t)||/windows phone/i.test(t)||yc(t)}/**
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
 */function Ec(t,e=[]){let n;switch(t){case"Browser":n=qo(ce());break;case"Worker":n=`${qo(ce())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${In}/${r}`}/**
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
 */class qy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Ky(t,e={}){return Te(t,"GET","/v2/passwordPolicy",ke(t,e))}/**
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
 */const Jy=6;class Yy{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Jy,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Xy{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ko(this),this.idTokenSubscription=new Ko(this),this.beforeStateQueue=new qy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Be(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted){try{this.persistenceManager=await Rt.create(this,e)}catch(o){Qn(`Failed to initialize persistence: ${o}`),this.persistenceManager=await Rt.create(this,[])}finally{(r=this._resolvePersistenceManagerAvailable)==null||r.call(this)}if(!this._deleted){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(n)}catch(o){Qn(`Failed to initialize current user: ${o}`),await this.directlySetCurrentUser(null).catch(()=>{})}this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await gr(this,{idToken:e}),r=await Se._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Ie(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return C(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await mr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ay()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ie(this.app))return Promise.reject(rt(this));const n=e?kt(e):null;return n&&C(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&C(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ie(this.app)?Promise.reject(rt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ie(this.app)?Promise.reject(rt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Be(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ky(this),n=new Yy(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new _n("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await zy(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Be(e)||this._popupRedirectResolver;C(n,this,"argument-error"),this.redirectPersistenceManager=await Rt.create(this,[Be(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(C(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}).catch(a=>{if(!o)if(typeof n!="function"&&n.error)n.error(a);else if(r)r(a);else throw a}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){if(this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,this.persistenceManager)try{e?await this.persistenceManager.setCurrentUser(e):await this.persistenceManager.removeCurrentUser()}catch(n){const r=(n==null?void 0:n.message)||String(n),i=os(this,"internal-error",`An internal AuthError has occurred: ${r}`);throw i.customData={originalError:n},i}}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return C(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ec(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Ie(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&Qn(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function lt(t){return kt(t)}class Ko{constructor(e){this.auth=e,this.observer=null,this.addObserver=fm(n=>this.observer=n)}get next(){return C(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Pn={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Qy(t){Pn=t}function us(t){return Pn.loadJS(t)}function Zy(){return Pn.recaptchaV2Script}function eb(){return Pn.recaptchaEnterpriseScript}function tb(){return Pn.gapiScript}function Sc(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */const nb=500,rb=6e4,Hn=1e12;class ib{constructor(e){this.auth=e,this.counter=Hn,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new ab(e,this.auth.name,n||{})),this.counter++,r}reset(e){var r;const n=e||Hn;(r=this._widgets.get(n))==null||r.delete(),this._widgets.delete(n)}getResponse(e){var r;const n=e||Hn;return((r=this._widgets.get(n))==null?void 0:r.getResponse())||""}async execute(e){var r;const n=e||Hn;return(r=this._widgets.get(n))==null||r.execute(),""}}class sb{constructor(){this.enterprise=new ob}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class ob{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class ab{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;C(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=lb(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},rb)},nb))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function lb(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const cb="recaptcha-enterprise",gn="NO_RECAPTCHA",Jo="onFirebaseAuthREInstanceReady";class Fe{constructor(e){this.type=cb,this.auth=lt(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{uc(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new dc(a);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(a=>{l(a)})})}function i(s,o,l){const a=window.grecaptcha;Vo(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(gn)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new sb().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(async l=>{if(!n&&Vo(window.grecaptcha)&&Fe.scriptInjectionDeferred)await Fe.scriptInjectionDeferred.promise,i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=eb();a.length!==0&&(a+=l+`&onload=${Jo}`),Fe.scriptInjectionDeferred=new Yl,window[Jo]=()=>{var c;(c=Fe.scriptInjectionDeferred)==null||c.resolve()},us(a).then(()=>{var c;return(c=Fe.scriptInjectionDeferred)==null?void 0:c.promise}).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}Fe.scriptInjectionDeferred=null;async function si(t,e,n,r=!1,i=!1){const s=new Fe(t);let o;if(i)o=gn;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const a=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:a,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const a=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:a,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function oi(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("PHONE_PROVIDER")){const o=await si(t,e,n);return r(t,o).catch(async l=>{var a;if(((a=t._getRecaptchaConfig())==null?void 0:a.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const c=await si(t,e,n,!1,!0);return r(t,c)}return Promise.reject(l)})}else{const o=await si(t,e,n,!1,!0);return r(t,o)}}async function db(t){const e=lt(t),n=await uc(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new dc(n);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new Fe(e).verify()}/**
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
 */function ub(t,e){const n=ec(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Kt(s,e??{}))return i;We(i,"already-initialized")}return n.initialize({options:e})}function hb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Be);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function fb(t,e,n){const r=lt(t);C(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Tc(e),{host:o,port:l}=pb(e),a=l===null?"":`:${l}`,c={url:`${s}//${o}${a}/`},u=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){C(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),C(Kt(c,r.config.emulator)&&Kt(u,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,is(o)?mm(`${s}//${o}${a}`):gb()}function Tc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function pb(t){const e=Tc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Yo(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Yo(o)}}}function Yo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function gb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class hs{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return $e("not implemented")}_getIdTokenResponse(e){return $e("not implemented")}_linkToIdToken(e,n){return $e("not implemented")}_getReauthenticationResolver(e){return $e("not implemented")}}/**
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
 */async function qt(t,e){return Ir(t,"POST","/v1/accounts:signInWithIdp",ke(t,e))}/**
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
 */const mb="http://localhost";class At extends hs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new At(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):We("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new At(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return qt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,qt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,qt(e,n)}buildRequest(){const e={requestUri:mb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Zt(n)}return e}}/**
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
 */async function Xo(t,e){return Te(t,"POST","/v1/accounts:sendVerificationCode",ke(t,e))}async function yb(t,e){return Ir(t,"POST","/v1/accounts:signInWithPhoneNumber",ke(t,e))}async function bb(t,e){const n=await Ir(t,"POST","/v1/accounts:signInWithPhoneNumber",ke(t,e));if(n.temporaryProof)throw un(t,"account-exists-with-different-credential",n);return n}const vb={USER_NOT_FOUND:"user-not-found"};async function wb(t,e){const n={...e,operation:"REAUTH"};return Ir(t,"POST","/v1/accounts:signInWithPhoneNumber",ke(t,n),vb)}/**
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
 */class mn extends hs{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new mn({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new mn({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return yb(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return bb(e,{idToken:n,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return wb(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new mn({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */class Rc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class An extends Rc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Xe extends An{constructor(){super("facebook.com")}static credential(e){return At._fromParams({providerId:Xe.PROVIDER_ID,signInMethod:Xe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xe.credentialFromTaggedObject(e)}static credentialFromError(e){return Xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xe.credential(e.oauthAccessToken)}catch{return null}}}Xe.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xe.PROVIDER_ID="facebook.com";/**
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
 */class Qe extends An{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return At._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Qe.credential(n,r)}catch{return null}}}Qe.GOOGLE_SIGN_IN_METHOD="google.com";Qe.PROVIDER_ID="google.com";/**
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
 */class Ze extends An{constructor(){super("github.com")}static credential(e){return At._fromParams({providerId:Ze.PROVIDER_ID,signInMethod:Ze.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ze.credentialFromTaggedObject(e)}static credentialFromError(e){return Ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ze.credential(e.oauthAccessToken)}catch{return null}}}Ze.GITHUB_SIGN_IN_METHOD="github.com";Ze.PROVIDER_ID="github.com";/**
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
 */class et extends An{constructor(){super("twitter.com")}static credential(e,n){return At._fromParams({providerId:et.PROVIDER_ID,signInMethod:et.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return et.credentialFromTaggedObject(e)}static credentialFromError(e){return et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return et.credential(n,r)}catch{return null}}}et.TWITTER_SIGN_IN_METHOD="twitter.com";et.PROVIDER_ID="twitter.com";/**
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
 */class Yt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Se._fromIdTokenResponse(e,r,i),o=Qo(r);return new Yt({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Qo(r);return new Yt({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Qo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class yr extends at{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,yr.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new yr(e,n,r,i)}}function _c(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?yr._fromErrorAndOperation(t,s,e,r):s})}async function xb(t,e,n=!1){const r=await xn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Yt._forOperation(t,"link",r)}/**
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
 */async function Eb(t,e,n=!1){const{auth:r}=t;if(Ie(r.app))return Promise.reject(rt(r));const i="reauthenticate";try{const s=await xn(t,_c(r,i,e,t),n);C(s.idToken,r,"internal-error");const o=cs(s.idToken);C(o,r,"internal-error");const{sub:l}=o;return C(t.uid===l,r,"user-mismatch"),Yt._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&We(r,"user-mismatch"),s}}/**
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
 */async function Ic(t,e,n=!1){if(Ie(t.app))return Promise.reject(rt(t));const r="signIn",i=await _c(t,r,e),s=await Yt._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Sb(t,e){return Ic(lt(t),e)}function Tb(t,e,n,r){return kt(t).onIdTokenChanged(e,n,r)}function Rb(t,e,n){return kt(t).beforeAuthStateChanged(e,n)}/**
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
 */function Zo(t,e){return Te(t,"POST","/v2/accounts/mfaEnrollment:start",ke(t,e))}const br="__sak";/**
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
 */class Cc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(br,"1"),this.storage.removeItem(br),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const _b=1e3,Ib=10;class Pc extends Cc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=xc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Gy()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Ib):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},_b)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Pc.type="LOCAL";const Cb=Pc;/**
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
 */class Ac extends Cc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ac.type="SESSION";const Oc=Ac;/**
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
 */function Pb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Cr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Cr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),a=await Pb(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cr.receivers=[];/**
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
 */function fs(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Ab{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const c=fs("",20);i.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(f.data.response);break;default:clearTimeout(u),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function J(){return window}function Ob(t){J().location.href=t}/**
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
 */function ps(){return typeof J().WorkerGlobalScope<"u"&&typeof J().importScripts=="function"}async function kb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Nb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function jb(){return ps()?self:null}/**
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
 */const kc="firebaseLocalStorageDb",Lb=1,vr="firebaseLocalStorage",Nc="fbase_key";class On{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Pr(t,e){return t.transaction([vr],e?"readwrite":"readonly").objectStore(vr)}function Db(){const t=indexedDB.deleteDatabase(kc);return new On(t).toPromise()}function jc(){const t=indexedDB.open(kc,Lb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(vr,{keyPath:Nc})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(vr)?e(r):(r.close(),await Db(),e(await jc()))})})}async function ea(t,e,n){const r=Pr(t,!0).put({[Nc]:e,value:n});return new On(r).toPromise()}async function Mb(t,e){const n=Pr(t,!1).get(e),r=await new On(n).toPromise();return r===void 0?null:r.value}function ta(t,e){const n=Pr(t,!0).delete(e);return new On(n).toPromise()}const Fb=800,Ub=3;class Lc{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=jc(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Ub)throw r;if(this.dbPromise){const i=this.dbPromise;this.dbPromise=null;try{(await i).close()}catch{}}}}async initializeServiceWorkerMessaging(){return ps()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cr._getInstance(jb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await kb(),!this.activeServiceWorker)return;this.sender=new Ab(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Nb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await ea(e,br,"1"),await ta(e,br)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ea(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Mb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ta(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{const e=await this._withRetries(i=>{const s=Pr(i,!1).getAll();return new On(s).toPromise()});if(this.isClosing)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}catch(e){return this.isClosing||Qn(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Fb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}Lc.type="LOCAL";const $b=Lc;/**
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
 */function na(t,e){return Te(t,"POST","/v2/accounts/mfaSignIn:start",ke(t,e))}/**
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
 */const ai=Sc("rcb"),Bb=new Cn(3e4,6e4);class Hb{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=J().grecaptcha)!=null&&e.render)}load(e,n=""){return C(Vb(n),e,"argument-error"),this.shouldResolveImmediately(n)&&Ho(J().grecaptcha)?Promise.resolve(J().grecaptcha):new Promise((r,i)=>{const s=J().setTimeout(()=>{i(ge(e,"network-request-failed"))},Bb.get());J()[ai]=()=>{J().clearTimeout(s),delete J()[ai];const l=J().grecaptcha;if(!l||!Ho(l)){i(ge(e,"internal-error"));return}const a=l.render;l.render=(c,u)=>{const h=a(c,u);return this.counter++,h},this.hostLanguage=n,r(l)};const o=`${Zy()}?${Zt({onload:ai,render:"explicit",hl:n})}`;us(o).catch(()=>{clearTimeout(s),i(ge(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!((n=J().grecaptcha)!=null&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Vb(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class zb{async load(e){return new ib(e)}clearedOneInstance(){}}/**
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
 */const yn="recaptcha",Wb={theme:"light",type:"image"};class h0{constructor(e,n,r={...Wb}){this.parameters=r,this.type=yn,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=lt(e),this.isInvisible=this.parameters.size==="invisible",C(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;C(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new zb:new Hb,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){C(!this.parameters.sitekey,this.auth,"argument-error"),C(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),C(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=J()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){C(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){C(oc()&&!ps(),this.auth,"internal-error"),await Gb(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Dy(this.auth);C(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return C(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Gb(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class qb{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=mn._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function f0(t,e,n){if(Ie(t.app))return Promise.reject(rt(t));const r=lt(t),i=await Kb(r,e,kt(n));return new qb(i,s=>Sb(r,s))}async function Kb(t,e,n){var r;if(!t._getRecaptchaConfig())try{await db(t)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const s=i.session;if("phoneNumber"in i){C(s.type==="enroll",t,"internal-error");const o={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await oi(t,o,"mfaSmsEnrollment",async(u,h)=>{if(h.phoneEnrollmentInfo.captchaResponse===gn){C((n==null?void 0:n.type)===yn,u,"argument-error");const f=await li(u,h,n);return Zo(u,f)}return Zo(u,h)},"PHONE_PROVIDER").catch(u=>Promise.reject(u))).phoneSessionInfo.sessionInfo}else{C(s.type==="signin",t,"internal-error");const o=((r=i.multiFactorHint)==null?void 0:r.uid)||i.multiFactorUid;C(o,t,"missing-multi-factor-info");const l={mfaPendingCredential:s.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await oi(t,l,"mfaSmsSignIn",async(h,f)=>{if(f.phoneSignInInfo.captchaResponse===gn){C((n==null?void 0:n.type)===yn,h,"argument-error");const g=await li(h,f,n);return na(h,g)}return na(h,f)},"PHONE_PROVIDER").catch(h=>Promise.reject(h))).phoneResponseInfo.sessionInfo}}else{const s={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await oi(t,s,"sendVerificationCode",async(c,u)=>{if(u.captchaResponse===gn){C((n==null?void 0:n.type)===yn,c,"argument-error");const h=await li(c,u,n);return Xo(c,h)}return Xo(c,u)},"PHONE_PROVIDER").catch(c=>Promise.reject(c))).sessionInfo}}finally{n==null||n._reset()}}async function li(t,e,n){C(n.type===yn,t,"argument-error");const r=await n.verify();C(typeof r=="string",t,"argument-error");const i={...e};if("phoneEnrollmentInfo"in i){const s=i.phoneEnrollmentInfo.phoneNumber,o=i.phoneEnrollmentInfo.captchaResponse,l=i.phoneEnrollmentInfo.clientType,a=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:o,clientType:l,recaptchaVersion:a}}),i}else if("phoneSignInInfo"in i){const s=i.phoneSignInInfo.captchaResponse,o=i.phoneSignInInfo.clientType,l=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:o,recaptchaVersion:l}}),i}else return Object.assign(i,{recaptchaToken:r}),i}/**
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
 */function Jb(t,e){return e?Be(e):(C(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class gs extends hs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return qt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return qt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Yb(t){return Ic(t.auth,new gs(t),t.bypassAuthState)}function Xb(t){const{auth:e,user:n}=t;return C(n,e,"internal-error"),Eb(n,new gs(t),t.bypassAuthState)}async function Qb(t){const{auth:e,user:n}=t;return C(n,e,"internal-error"),xb(n,new gs(t),t.bypassAuthState)}/**
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
 */class Dc{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Yb;case"linkViaPopup":case"linkViaRedirect":return Qb;case"reauthViaPopup":case"reauthViaRedirect":return Xb;default:We(this.auth,"internal-error")}}resolve(e){Ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Zb=new Cn(2e3,1e4);class Bt extends Dc{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Bt.currentPopupAction&&Bt.currentPopupAction.cancel(),Bt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return C(e,this.auth,"internal-error"),e}async onExecution(){Ge(this.filter.length===1,"Popup operations only handle one event");const e=fs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ge(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(ge(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ge(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Zb.get())};e()}}Bt.currentPopupAction=null;/**
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
 */const ev="pendingRedirect",tr=new Map;class tv extends Dc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=tr.get(this.auth._key());if(!e){try{const r=await nv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}tr.set(this.auth._key(),e)}return this.bypassAuthState||tr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nv(t,e){const n=sv(e),r=iv(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function rv(t,e){tr.set(t._key(),e)}function iv(t){return Be(t._redirectPersistence)}function sv(t){return er(ev,t.config.apiKey,t.name)}async function ov(t,e,n=!1){if(Ie(t.app))return Promise.reject(rt(t));const r=lt(t),i=Jb(r,e),o=await new tv(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const av=600*1e3;class lv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cv(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Mc(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(ge(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=av&&this.cachedEventUids.clear(),this.cachedEventUids.has(ra(e))}saveEventToCache(e){this.cachedEventUids.add(ra(e)),this.lastProcessedEventTime=Date.now()}}function ra(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Mc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function cv(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Mc(t);default:return!1}}/**
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
 */async function dv(t,e={}){return Te(t,"GET","/v1/projects",e)}/**
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
 */const uv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hv=/^https?/;async function fv(t){if(t.config.emulator)return;const{authorizedDomains:e}=await dv(t);for(const n of e)try{if(pv(n))return}catch{}We(t,"unauthorized-domain")}function pv(t){const e=Fi(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!hv.test(n))return!1;if(uv.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const gv=new Cn(3e4,6e4);function ia(){const t=J().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function mv(t){return new Promise((e,n)=>{var i,s,o;function r(){ia(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ia(),n(ge(t,"network-request-failed"))},timeout:gv.get()})}if((s=(i=J().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=J().gapi)!=null&&o.load)r();else{const l=Sc("iframefcb");return J()[l]=()=>{gapi.load?r():n(ge(t,"network-request-failed"))},us(`${tb()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw nr=null,e})}let nr=null;function yv(t){return nr=nr||mv(t),nr}/**
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
 */const bv=new Cn(5e3,15e3),vv="__/auth/iframe",wv="emulator/auth/iframe",xv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ev=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Sv(t){const e=t.config;C(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ls(e,wv):`https://${t.config.authDomain}/${vv}`,r={apiKey:e.apiKey,appName:t.name,v:In},i=Ev.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Zt(r).slice(1)}`}async function Tv(t){const e=await yv(t),n=J().gapi;return C(n,t,"internal-error"),e.open({where:document.body,url:Sv(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xv,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ge(t,"network-request-failed"),l=J().setTimeout(()=>{s(o)},bv.get());function a(){J().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
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
 */const Rv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_v=500,Iv=600,Cv="_blank",Pv="http://localhost";class sa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Av(t,e,n,r=_v,i=Iv){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a={...Rv,width:r.toString(),height:i.toString(),top:s,left:o},c=ce().toLowerCase();n&&(l=mc(c)?Cv:n),pc(c)&&(e=e||Pv,a.scrollbars="yes");const u=Object.entries(a).reduce((f,[g,m])=>`${f}${g}=${m},`,"");if(Wy(c)&&l!=="_self")return Ov(e||"",l),new sa(null);const h=window.open(e||"",l,u);C(h,t,"popup-blocked");try{h.focus()}catch{}return new sa(h)}function Ov(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const kv="__/auth/handler",Nv="emulator/auth/handler",jv=encodeURIComponent("fac");async function oa(t,e,n,r,i,s){C(t.config.authDomain,t,"auth-domain-config-required"),C(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:In,eventId:i};if(e instanceof Rc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",hm(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof An){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const u of Object.keys(l))l[u]===void 0&&delete l[u];const a=await t._getAppCheckToken(),c=a?`#${jv}=${encodeURIComponent(a)}`:"";return`${Lv(t)}?${Zt(l).slice(1)}${c}`}function Lv({config:t}){return t.emulator?ls(t,Nv):`https://${t.authDomain}/${kv}`}/**
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
 */const ci="webStorageSupport";class Dv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Oc,this._completeRedirectFn=ov,this._overrideRedirectResult=rv}async _openPopup(e,n,r,i){var o;Ge((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await oa(e,n,r,Fi(),i);return Av(e,s,fs())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await oa(e,n,r,Fi(),i);return Ob(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ge(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Tv(e),r=new lv(e);return n.register("authEvent",i=>(C(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ci,{type:ci},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[ci];s!==void 0&&n(!!s),We(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=fv(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return xc()||gc()||ds()}}const Mv=Dv;var aa="@firebase/auth",la="1.13.6";/**
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
 */class Fv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){C(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Uv(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $v(t){vn(new Jt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;C(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ec(t)},c=new Xy(r,i,s,a);return hb(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),vn(new Jt("auth-internal",e=>{const n=lt(e.getProvider("auth").getImmediate());return(r=>new Fv(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wt(aa,la,Uv(t)),Wt(aa,la,"esm2020")}/**
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
 */const Bv=300,Hv=Jl("authIdTokenMaxAge")||Bv;let ca=null;const Vv=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Hv)return;const i=n==null?void 0:n.token;ca!==i&&(ca=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function zv(t=gy()){const e=ec(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ub(t,{popupRedirectResolver:Mv,persistence:[$b,Cb,Oc]}),r=Jl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Vv(s.toString());Rb(n,o,()=>o(n.currentUser)),Tb(n,l=>o(l))}}const i=nm("auth");return i&&fb(n,`http://${i}`),n}function Wv(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}Qy({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ge("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Wv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$v("Browser");const Gv={apiKey:Lg,authDomain:Dg,projectId:Mg,storageBucket:Fg,messagingSenderId:Ug,appId:$g,measurementId:Bg},qv=tc(Gv),Fc=zv(qv),Kv=()=>typeof window>"u"?!1:["localhost","127.0.0.1","[::1]"].includes(window.location.hostname);Kv()&&(Fc.settings.appVerificationDisabledForTesting=!0);function Jv(t){return t.includes(Ee.LIST_ALL)?"all":t.includes(Ee.LIST_SUB)?"sub":"own"}const Yv="/api/company/orders/claim";async function Xv(t){try{return(await be.post(Yv,{phone:t})).data.claimedOrderIds??[]}catch(e){return console.error("[portal auth] claimOrders failed",e),[]}}const Ot=cf()(hf(t=>({token:null,refresh:null,uid:null,name:null,companyUid:null,permissionList:[],login:e=>{var r,i;t({token:e.token,refresh:e.refresh,uid:e.uid,name:e.name,companyUid:e.companyUid??null,permissionList:e.permission.length>0?e.permission:hu()});const n=((r=e.verifiedPhone)==null?void 0:r.trim())||((i=Fc.currentUser)==null?void 0:i.phoneNumber)||"";n&&Xv(n)},logout:()=>t({token:null,refresh:null,uid:null,name:null,companyUid:null,permissionList:[]})}),{name:`${jg}:portal-auth`,onRehydrateStorage:()=>t=>{t!=null&&t.token&&!ur("X-Token")&&t.logout()}})),ms=()=>Ot(t=>t.token!==null),Uc=t=>Ot(e=>e.permissionList.includes(t)),p0=()=>Ot(t=>Jv(t.permissionList)),$c=sd`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background: var(--v29-primary-fill);
  color: var(--v29-on-primary);
  font-family: ${st};
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
`,Qv=E(Pe)`
  ${$c}
`,Bc=E.div`
  position: relative;
`,Zv=E.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid var(--v29-line);
  background: var(--v29-primary);
  color: var(--v29-on-primary);
  font-family: ${N};
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
`,Hc=E(Hi.div)`
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  min-width: 220px;
  padding: 8px;
  border-radius: 12px;
  background: var(--v29-card);
  border: 1px solid var(--v29-line-soft);
  box-shadow: var(--v29-popover-shadow);
  font-family: ${N};
`,ew=E.div`
  padding: 8px 10px 10px;
  border-bottom: 1px solid var(--v29-line-soft);
  margin-bottom: 6px;
  font-size: 13px;
  font-weight: 600;
  color: var(--v29-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Ar=`
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
`,tw=E(Pe)`
  ${Ar}
  font-family: ${N};
`,nw=E.button`
  ${Ar}
  font-family: ${N};
`,rw=E.button`
  ${$c}
  svg {
    width: 12px;
    height: 12px;
    transition: transform 0.2s ease;
  }
  &[aria-expanded='true'] svg {
    transform: rotate(180deg);
  }
`,iw=E.a`
  display: inline-flex;
  align-items: center;
  min-height: 36px;
  padding: 0 4px;
  font-family: ${N};
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
`,sw=E(Pe)`
  ${Ar}
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  font-family: ${N};
`,ow=E.a`
  ${Ar}
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  font-family: ${N};
`,aw=E.span`
  font-weight: 600;
`,lw=E.span`
  font-size: 12px;
  /* the full text colour: the muted grey drops below AA on the hover tint */
  color: var(--v29-text);
  opacity: 0.85;
`,cw=({destinations:t})=>{const{t:e}=Gi(),[n,r]=S.useState(!1),i=S.useRef(null),s=S.useRef(null);if(S.useEffect(()=>{if(!n)return;const o=a=>{var c;(c=i.current)!=null&&c.contains(a.target)||r(!1)},l=a=>{var c;a.key==="Escape"&&(r(!1),(c=s.current)==null||c.focus())};return document.addEventListener("pointerdown",o),document.addEventListener("keydown",l),()=>{document.removeEventListener("pointerdown",o),document.removeEventListener("keydown",l)}},[n]),t.length===0)return null;if(t.length===1){const[o]=t;return o.external?d.jsx(iw,{href:o.href,"data-login-role":o.role,children:e(`common:loginRole.${o.role}.login`)}):d.jsx(Qv,{to:o.href,"data-login-role":o.role,children:e("common:signIn")})}return d.jsxs(Bc,{ref:i,onBlur:o=>{var l;n&&!((l=i.current)!=null&&l.contains(o.relatedTarget))&&r(!1)},children:[d.jsxs(rw,{ref:s,type:"button","aria-expanded":n,"aria-controls":"nav-signin-destinations",onClick:()=>r(o=>!o),children:[e("common:signIn"),d.jsx("svg",{viewBox:"0 0 12 12","aria-hidden":"true",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:d.jsx("path",{d:"M2.5 4.5 6 8l3.5-3.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),d.jsx(zi,{children:n&&d.jsx(Hc,{id:"nav-signin-destinations",initial:{opacity:0,y:-6},animate:{opacity:1,y:0},exit:{opacity:0,y:-6},transition:{duration:.18,ease:wr},children:t.map(o=>{const l=d.jsxs(d.Fragment,{children:[d.jsx(aw,{children:e(`common:loginRole.${o.role}.label`)}),d.jsx(lw,{children:e(`common:loginRole.${o.role}.hint`)})]});return o.external?d.jsx(ow,{href:o.href,"data-login-role":o.role,children:l},o.role):d.jsx(sw,{to:o.href,"data-login-role":o.role,onClick:()=>r(!1),children:l},o.role)})})})]})},dw=E.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px 10px;
  font-size: 14px;
  color: var(--v29-muted);
`,uw=E.button`
  border: none;
  background: transparent;
  padding: 2px 6px;
  border-radius: 6px;
  font-family: ${N};
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
`,Vc=()=>{const{t,i18n:e}=Gi(),n=Ot(m=>m.token),r=Ot(m=>m.name),[i,s]=S.useState(!1),o=Uc(Ee.LIST),l=S.useRef(null),a=od(),c=Ki();if(S.useEffect(()=>{if(!i)return;const m=b=>{var R;(R=l.current)!=null&&R.contains(b.target)||s(!1)},x=b=>{b.key==="Escape"&&s(!1)};return document.addEventListener("pointerdown",m),document.addEventListener("keydown",x),()=>{document.removeEventListener("pointerdown",m),document.removeEventListener("keydown",x)}},[i]),!n)return d.jsx(cw,{destinations:c});const u=(r??"?").trim().charAt(0).toUpperCase()||"?",h=e.language,f=Ti.length>1,g=m=>{sf(m)};return d.jsxs(Bc,{ref:l,children:[d.jsx(Zv,{"aria-label":t("common:accountMenu"),"aria-expanded":i,onClick:()=>s(m=>!m),children:u}),d.jsx(zi,{children:i&&d.jsxs(Hc,{initial:{opacity:0,y:-6},animate:{opacity:1,y:0},exit:{opacity:0,y:-6},transition:{duration:.18,ease:wr},children:[d.jsx(ew,{children:r}),o&&d.jsx(tw,{to:"/portal/orders",onClick:()=>s(!1),children:t("common:orders")}),f&&d.jsxs(dw,{children:[d.jsx("span",{children:t("common:language")}),d.jsx("span",{children:Ti.map(m=>d.jsx(uw,{$active:h===m,onClick:()=>g(m),children:nf[m]},m))})]}),d.jsx(nw,{onClick:()=>{s(!1),Ml(),a(qi(),{replace:!0})},children:t("common:signOut")})]})})]})},hw=E.nav`
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
    --brand-logo-color: ${Vi};
  }

  @media (max-width: 720px) {
    padding: 12px 20px;
  }
`,fw=E.div`
  display: flex;
  align-items: center;
  gap: 16px;
  @media (max-width: 480px) {
    gap: 8px;
  }
`,pw=E.span`
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
`,gw=E.button`
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
`,mw=E(Pe)`
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 8px;
  font-family: ${st};
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
`,yw=({theme:t,onToggleTheme:e,audience:n="public"})=>{const{t:r}=Gi(),{pathname:i}=Ae(),s=ms(),o=i.startsWith("/portal")&&s,l=Ki(),a=l.length>0,c=l.some(h=>h.role==="shipper"),u=n==="receiver";return d.jsxs(hw,{children:[d.jsx(Pe,{to:"/","aria-label":r("common:brandHome"),style:{display:"inline-flex"},children:d.jsxs(pw,{$compact:a&&!u,children:[d.jsx("span",{className:"nav-wordmark","aria-hidden":"true",children:d.jsx(rr,{height:28,ariaLabel:""})}),d.jsx("span",{className:"nav-mark","aria-hidden":"true",children:d.jsx(rr,{height:28,variant:"mark",ariaLabel:""})})]})}),d.jsxs(fw,{children:[d.jsx(gw,{onClick:e,"aria-label":r("common:toggleTheme"),children:t==="dark"?d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[d.jsx("circle",{cx:"12",cy:"12",r:"5"}),d.jsx("path",{d:"M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"})]}):d.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:d.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})}),!o&&!u&&d.jsx(mw,{to:"/contact",$ghost:c,$hideOnNarrow:c,children:r("common:getEarlyAccess")}),!u&&(a||s)&&d.jsx(Vc,{})]})]})},da="senditgo-v38-cookie-consent",ua="--cookie-consent-offset",zc=720;function ha(t){return t<=zc}function bw(t){return t<=0?0:Math.round(t)}function Wc(t,e,n){if(n<=0){t.removeProperty(ua),e.style.paddingBottom="";return}const r=`${n}px`;t.setProperty(ua,r),e.style.paddingBottom=r}function fa(t,e){Wc(t,e,0)}const vw=E(Hi.div)`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background: var(--v29-card);
  border-top: 1px solid var(--v29-line-soft);
  box-shadow: var(--v29-popover-shadow);
  font-family: ${N};
  color: var(--v29-text);
  padding: 12px clamp(16px, 3vw, 32px) max(12px, env(safe-area-inset-bottom, 0px));
  display: flex;
  justify-content: center;
`,ww=E.div`
  width: 100%;
  max-width: 1180px;
  display: flex;
  align-items: ${t=>t.$stack?"stretch":"center"};
  justify-content: space-between;
  flex-direction: ${t=>t.$stack?"column":"row"};
  gap: ${t=>t.$stack?"12px":"20px"};
  text-align: ${t=>t.$stack?"center":"left"};
`,xw=E.p`
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
`,Ew=E.div`
  display: flex;
  align-items: center;
  justify-content: ${t=>t.$stack?"center":"flex-end"};
  gap: 8px;
  flex-shrink: 0;
`,pa=E.button`
  appearance: none;
  border: none;
  cursor: pointer;
  min-height: 44px;
  padding: 8px 18px;
  border-radius: var(--v29-radius-button);
  font-family: ${N};
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
`;function Sw(){const[t,e]=S.useState(()=>typeof window>"u"?!1:ha(window.innerWidth));return S.useEffect(()=>{const n=window.matchMedia(`(max-width: ${zc}px)`),r=()=>e(ha(window.innerWidth));return r(),n.addEventListener("change",r),()=>n.removeEventListener("change",r)},[]),t}const Gc=()=>{const[t,e]=S.useState(()=>{try{return localStorage.getItem(da)||null}catch{return null}}),[n,r]=S.useState(!1),i=S.useRef(null),s=Sw();S.useEffect(()=>{if(t!==null)return;const a=window.setTimeout(()=>r(!0),1100);return()=>window.clearTimeout(a)},[t]);const o=t===null&&n;S.useEffect(()=>{if(!o){fa(document.documentElement.style,document.body);return}const a=i.current;if(!a)return;const c=()=>{Wc(document.documentElement.style,document.body,bw(a.offsetHeight))};c();const u=new ResizeObserver(c);return u.observe(a),()=>{u.disconnect(),fa(document.documentElement.style,document.body)}},[o,s]);const l=a=>{e(a);try{localStorage.setItem(da,a)}catch{}};return d.jsx(zi,{children:o&&d.jsx(vw,{ref:i,role:"region","aria-label":"Cookie consent",initial:{y:"100%"},animate:{y:0},exit:{y:"100%"},transition:{duration:.35,ease:wr},children:d.jsxs(ww,{$stack:s,children:[d.jsxs(xw,{children:[d.jsx("span",{className:"lede",children:"We use a few optional analytics cookies"})," to see how this page performs — nothing is set until you choose. Decline and only the essentials run. Read our ",d.jsx(Pe,{to:"/privacy",children:"Privacy Policy"}),"."]}),d.jsxs(Ew,{$stack:s,children:[d.jsx(pa,{$variant:"decline",type:"button",onClick:()=>l("declined"),children:"Decline"}),d.jsx(pa,{$variant:"accept",type:"button",onClick:()=>l("accepted"),children:"Accept"})]})]})},"consent")})},Tw=E.main`
  flex: 1;
  width: 100%;
  max-width: 760px;
  min-width: 0;
  margin: 0 auto;
  padding: 120px 32px 96px;

  @media (max-width: 720px) {
    padding: 96px 20px 64px;
  }
`,Nt=ad,en=E(dd).attrs({as:"h1"})``,kn=ld,M=E(ud)`
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
`,ct=({children:t})=>{const{mode:e,toggleTheme:n}=Pa();return d.jsxs(d.Fragment,{children:[d.jsx(Aa,{}),d.jsxs(cd,{children:[d.jsx(yw,{theme:e,onToggleTheme:n}),d.jsx(Tw,{children:t}),d.jsx(Gc,{})]})]})},ga="https://apps.apple.com/app/sendit-go/id000000000",ma="https://play.google.com/store/apps/details?id=tw.com.holieninnovation.senditgo",Rw=()=>{if(typeof navigator>"u")return"other";const t=navigator.userAgent||"",e=navigator.platform==="MacIntel"&&(navigator.maxTouchPoints??0)>1;return/iPad|iPhone|iPod/.test(t)||e?"ios":/Android/i.test(t)?"android":"other"},_w=E.div`
  display: grid;
  gap: 14px;
  width: 100%;
  max-width: 420px;
  margin: 32px auto 24px;
`,ya=E.a`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 14px 28px;
  border-radius: 8px;
  background: var(--v29-primary);
  color: #fff;
  font-family: ${N};
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
`,ba=E.span`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`,Iw=E.p`
  font-family: ${N};
  font-size: 13px;
  color: var(--v29-muted);
  margin: 16px 0 0;
  text-align: center;
`,Cw=E.div`
  margin: 40px auto 0;
  display: grid;
  justify-items: center;
  gap: 12px;
`,Pw=E.div`
  background: #FFFFFF;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid var(--v29-line-soft);
  box-shadow: 0 4px 24px -8px rgba(0, 0, 0, 0.15);
  line-height: 0;
`,Aw=E.span`
  font-family: ${N};
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--v29-muted);
`,Ow=()=>d.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:d.jsx("path",{d:"M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.49-.12-1.1.473-2.25 1.182-2.99.795-.85 2.142-1.49 2.982-1.58zM20.93 17.49c-.45 1.04-.66 1.5-1.24 2.42-.81 1.28-1.96 2.86-3.38 2.88-1.26.01-1.59-.82-3.3-.82s-2.07.81-3.3.83c-1.42.02-2.49-1.39-3.31-2.66-2.28-3.55-2.52-7.71-1.11-9.92.99-1.55 2.55-2.45 4.02-2.45 1.5 0 2.45.82 3.69.82 1.21 0 1.95-.82 3.69-.82 1.32 0 2.71.72 3.7 1.96-3.25 1.78-2.72 6.42-.49 7.74z"})}),kw=()=>d.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:d.jsx("path",{d:"M17.6 9.48l1.84-3.18a.4.4 0 0 0-.69-.4l-1.86 3.23a11.85 11.85 0 0 0-9.78 0L5.25 5.9a.4.4 0 0 0-.69.4l1.84 3.18A11.49 11.49 0 0 0 .5 19h23a11.49 11.49 0 0 0-5.9-9.52zM7 15.25a1.06 1.06 0 1 1 1.06-1.06A1.06 1.06 0 0 1 7 15.25zm10 0a1.06 1.06 0 1 1 1.06-1.06A1.06 1.06 0 0 1 17 15.25z"})}),Nw=()=>{const[t,e]=S.useState("other");S.useEffect(()=>{const r=Rw();e(r),r==="ios"?window.location.replace(ga):r==="android"&&window.location.replace(ma)},[]);const n=S.useMemo(()=>typeof window<"u"?`${window.location.origin}${Et("/install")}`:"https://senditgo.com/install",[]);return d.jsxs(ct,{children:[d.jsxs(_w,{children:[d.jsxs(ya,{href:ga,"aria-label":"Download on the App Store",children:[d.jsx(ba,{children:d.jsx(Ow,{})}),d.jsxs("span",{children:[d.jsx("span",{className:"small",children:"Download on the"}),d.jsx("span",{className:"big",children:"App Store"})]})]}),d.jsxs(ya,{href:ma,"aria-label":"Get it on Google Play",children:[d.jsx(ba,{children:d.jsx(kw,{})}),d.jsxs("span",{children:[d.jsx("span",{className:"small",children:"Get it on"}),d.jsx("span",{className:"big",children:"Google Play"})]})]})]}),t==="other"&&d.jsx(Iw,{children:"On a desktop? Scan the code below with your phone."}),d.jsxs(Cw,{children:[d.jsx(Pw,{children:d.jsx(Ya,{value:n,size:144,level:"M",bgColor:"#FFFFFF",fgColor:Vi,"aria-label":"Scan to install the SenditGo driver app"})}),d.jsx(Aw,{children:"Scan to install"})]})]})},le="[PLACEHOLDER — Yi]",Je={eyebrow:"About",title:`${le} — the one line that says what SenditGo is for`,belief:`${le} — one sentence on what we believe about delivery work and why this company exists.`,blocks:[{heading:"Where we started",body:`${le} — the origin: what was broken for fleet operators, and what made it worth building software for.`},{heading:"How we work",body:`${le} — how the team builds and supports the product, and what a customer can expect from us day to day.`},{heading:"Where we are going",body:`${le} — the direction over the next few years, in plain terms and without dates we cannot keep.`}],valuesHeading:"What we hold to",values:[{heading:`${le} — value one`,body:`${le} — one or two lines on what it means in practice.`},{heading:`${le} — value two`,body:`${le} — one or two lines on what it means in practice.`},{heading:`${le} — value three`,body:`${le} — one or two lines on what it means in practice.`},{heading:`${le} — value four`,body:`${le} — one or two lines on what it means in practice.`}],closing:{heading:"Work with us",body:`${le} — the closing invitation, and where to go next.`}},jw=E.p`
  margin: 0 0 24px;
  padding: 12px 16px;
  border-left: 3px solid ${"var(--v29-primary)"};
  background: color-mix(in srgb, var(--v29-primary) 8%, transparent);
  font-family: ${N};
  font-size: 13.5px;
  color: var(--v29-text);
`,Lw=E.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 8px;
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`,Dw=E.div`
  padding: 20px;
  border-radius: var(--v29-radius-container, 16px);
  background: var(--v29-card);
  box-shadow: var(--v29-card-shadow);
  h3 {
    margin: 0 0 8px;
    font-family: ${N};
    font-size: 15px;
    font-weight: 700;
    color: var(--v29-text);
  }
  p {
    margin: 0;
    font-family: ${N};
    font-size: 14px;
    line-height: 1.6;
    color: var(--v29-muted);
  }
`,Mw=()=>d.jsxs(ct,{children:[d.jsx(Nt,{children:Je.eyebrow}),d.jsx(en,{children:Je.title}),d.jsxs(jw,{children:["This page is a structure waiting for its words. Every line marked"," ",d.jsx("strong",{children:le})," is a slot, not copy."]}),d.jsx(kn,{children:Je.belief}),Je.blocks.map(t=>d.jsxs(M,{children:[d.jsx("h2",{children:t.heading}),d.jsx("p",{children:t.body})]},t.heading)),d.jsxs(M,{children:[d.jsx("h2",{children:Je.valuesHeading}),d.jsx(Lw,{children:Je.values.map((t,e)=>d.jsxs(Dw,{children:[d.jsx("h3",{children:t.heading}),d.jsx("p",{children:t.body})]},e))})]}),d.jsxs(M,{children:[d.jsx("h2",{children:Je.closing.heading}),d.jsx("p",{children:Je.closing.body})]})]}),De="[PLACEHOLDER — Yi]",U={eyebrow:"About",title:"Moving delivery forward.",opening:"We believe running a delivery operation should feel clear, connected and manageable — even when everything around it is moving.",beliefSlot:`${De}: final one-line company belief / purpose statement.`,whoWeAre:"SenditGo builds technology for the people who plan, manage and carry out delivery every day. We bring the moving parts of an operation together so teams can spend less time working around disconnected systems and more time getting things where they need to go.",reality:{heading:"Built for the reality of delivery",body:["Delivery doesn't happen in a perfect environment. Plans change. Orders change. Drivers move. Customers are waiting. Managers need to make decisions with the information they have right now.","SenditGo exists to make that work simpler.","Our aim is to give operators and drivers a shared view of what is happening — from orders and shifts to routes, delivery progress and proof of delivery — and make the next action easier to understand."],slot:`${De}: what problem do we ultimately want SenditGo to solve for the industry? 1–2 sentences.`},heading:{heading:"Where we're heading",body:"We see a future where delivery operations don't have to be held together by spreadsheets, manual handovers and information scattered between different systems.",slot:`${De}: long-term ambition for SenditGo.`,pull:"We want reliable, intelligent delivery technology to feel like part of the operation itself — quietly helping people make better decisions, respond faster and keep goods moving."},origin:{heading:"It started with a real operational problem",body:["SenditGo began by looking closely at the everyday problems inside transportation and logistics: information living in different places, repeated manual work, limited visibility and software that doesn't always reflect what happens in the field.","Instead of treating those as separate problems, we started building a connected system around the operation as a whole.","Today, that means bringing fleet management, delivery operations and the driver experience together across web and mobile."],slot:`${De}: 2–3 factual sentences about the real origin of SenditGo. No legal-company history required.`},howWeBuild:{heading:"How we choose to build",intro:"These are not HR slogans. Each one should tell a customer something about the kind of company they are dealing with.",values:[{heading:"Solve the real problem",body:"We start with what people are actually trying to get done. Technology matters when it improves the work, not simply because it is new."},{heading:"Make complexity feel simple",body:"Logistics is complex enough. We do the difficult work behind the scenes so the experience in front of the user can stay clear."},{heading:"Build for the people doing the work",body:"Drivers, operators and managers experience the same operation differently. We listen to the people using the product and design around the realities of their day."},{heading:"Own the outcome",body:"Shipping a feature isn't the finish line. We care about whether what we build works in practice and makes the operation better."},{heading:"Improve together",body:"Good products come from different perspectives. We share what we know, challenge ideas constructively and keep learning from customers and one another."}],extraSlot:{heading:`${De}: optional SenditGo-specific value`,body:`${De}: adapted from responsibility / resourcefulness / partnership / global perspective — in SenditGo words, not a parent-company paste.`}},standard:{heading:"The standard we're working toward",slot:`${De}: a short statement describing what success looks like for SenditGo.`,example:"Delivery technology that people can trust without having to think about it.",body:"When the system is doing its job, teams have the information they need, drivers know what comes next, managers can respond to change, and the technology stays out of the way."},stillBuilding:{heading:"And we're still building",body:"What we have today is one part of a much longer journey.",slot:`${De}: what SenditGo wants to become over the next several years, without dates, market-size claims or unreleased product promises.`,close:"We'll continue listening to the people running real operations, improving what already exists and exploring where better technology can remove the next source of friction."},invite:{heading:"Come build what moves next",body:"The best delivery systems aren't built from assumptions. They're shaped by the people running operations, solving problems and moving things every day.",slot:`${De}: final CTA depending on what this page should drive.`}},Fw=E.h1`
  font-family: ${st};
  font-style: italic;
  font-weight: 700;
  font-size: clamp(1.9rem, 1.3rem + 2.6vw, 3rem);
  letter-spacing: 0.01em;
  line-height: 1.08;
  margin: 0 0 16px;
  color: var(--v29-text);
`,Uw=E.p`
  margin: 0 0 28px;
  padding: 12px 16px;
  border-left: 3px solid var(--v29-primary);
  background: color-mix(in srgb, var(--v29-primary) 8%, transparent);
  font-family: ${N};
  font-size: 13.5px;
  color: var(--v29-text);
`,gt=E.p`
  margin: 16px 0 0;
  padding: 12px 16px;
  border-left: 3px solid color-mix(in srgb, var(--v29-muted) 50%, transparent);
  background: color-mix(in srgb, var(--v29-muted) 8%, transparent);
  font-family: ${N};
  font-size: 13.5px;
  line-height: 1.55;
  color: var(--v29-muted);
`,va=E.blockquote`
  margin: 20px 0 0;
  padding: 4px 0 4px 20px;
  border-left: 3px solid var(--v29-primary);
  font-family: ${st};
  font-size: 20px;
  font-weight: 900;
  line-height: 1.35;
  color: var(--v29-text);
`,$w=E.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 16px;
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`,wa=E.div`
  padding: 20px;
  border-radius: var(--v29-radius-container, 16px);
  background: var(--v29-card);
  box-shadow: var(--v29-card-shadow);
  h3 {
    margin: 0 0 8px;
    font-family: ${N};
    font-size: 15px;
    font-weight: 700;
    color: var(--v29-text);
  }
  p {
    margin: 0;
    font-family: ${N};
    font-size: 14px;
    line-height: 1.6;
    color: var(--v29-muted);
  }
`,Bw=E.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
`,Hw=E(Pe)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 20px;
  border-radius: 999px;
  background: var(--v29-primary);
  color: var(--v29-on-primary);
  font-family: ${N};
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  &:hover {
    background: var(--v29-primary-hover);
  }
`,Vw=()=>d.jsxs(ct,{children:[d.jsxs(Uw,{children:["Demo only — ",d.jsx("code",{children:"/about-v1"}),". Live ",d.jsx("code",{children:"/about"})," is unchanged and still dark."]}),d.jsx(Nt,{children:U.eyebrow}),d.jsx(Fw,{children:U.title}),d.jsx(kn,{children:U.opening}),d.jsx(gt,{children:U.beliefSlot}),d.jsx(M,{children:d.jsx("p",{children:U.whoWeAre})}),d.jsxs(M,{children:[d.jsx("h2",{children:U.reality.heading}),U.reality.body.map(t=>d.jsx("p",{children:t},t)),d.jsx(gt,{children:U.reality.slot})]}),d.jsxs(M,{children:[d.jsx("h2",{children:U.heading.heading}),d.jsx("p",{children:U.heading.body}),d.jsx(gt,{children:U.heading.slot}),d.jsx(va,{children:U.heading.pull})]}),d.jsxs(M,{children:[d.jsx("h2",{children:U.origin.heading}),U.origin.body.map(t=>d.jsx("p",{children:t},t)),d.jsx(gt,{children:U.origin.slot})]}),d.jsxs(M,{children:[d.jsx("h2",{children:U.howWeBuild.heading}),d.jsx("p",{children:U.howWeBuild.intro}),d.jsxs($w,{children:[U.howWeBuild.values.map(t=>d.jsxs(wa,{children:[d.jsx("h3",{children:t.heading}),d.jsx("p",{children:t.body})]},t.heading)),d.jsxs(wa,{children:[d.jsx("h3",{children:U.howWeBuild.extraSlot.heading}),d.jsx("p",{children:U.howWeBuild.extraSlot.body})]})]})]}),d.jsxs(M,{children:[d.jsx("h2",{children:U.standard.heading}),d.jsx(gt,{children:U.standard.slot}),d.jsx(va,{children:U.standard.example}),d.jsx("p",{style:{marginTop:16},children:U.standard.body})]}),d.jsxs(M,{children:[d.jsx("h2",{children:U.stillBuilding.heading}),d.jsx("p",{children:U.stillBuilding.body}),d.jsx(gt,{children:U.stillBuilding.slot}),d.jsx("p",{children:U.stillBuilding.close})]}),d.jsxs(M,{children:[d.jsx("h2",{children:U.invite.heading}),d.jsx("p",{children:U.invite.body}),d.jsx(gt,{children:U.invite.slot}),d.jsx(Bw,{children:d.jsx(Hw,{to:"/contact",children:"Talk to us"})})]})]}),zw=()=>d.jsxs(ct,{children:[d.jsx(Nt,{children:"About us"}),d.jsx(en,{children:"One connected delivery operation."}),d.jsx(kn,{children:"SenditGo brings route planning, dispatch, live tracking and proof of delivery together for local and last-mile fleets."}),d.jsxs(M,{style:{paddingTop:40},children:[d.jsx("h2",{children:"Built around the delivery day."}),d.jsx("p",{children:"Build runs, assign orders and review the day in Order Management. Drivers follow their run and record delivery details, while dispatchers keep track of progress in one place."})]}),d.jsxs(M,{children:[d.jsx("h2",{children:"Meet SAM, your planning engine."}),d.jsx("p",{children:"SAM stands for Smart Adaptive Model. It brings your delivery requirements and available vehicles together to help you build a workable route plan."}),d.jsx("p",{children:"Delivery locations and time windows, your warehouse and vehicle capacity give the plan its starting point. You review the proposed plan in Order Management and stay in control of what goes out."})]}),d.jsxs(M,{children:[d.jsx("h2",{children:"Talk through your operation."}),d.jsxs("p",{children:["Tell us about your fleet, your delivery day and what you need from your next system. ",d.jsx(Pe,{to:"/contact",children:"Talk to us"})," about a demo, pricing or integrations."]})]})]}),V={legalName:"Senditgo Co., Ltd.",jurisdiction:"Taiwan, R.O.C.",address:"24F.-6, No. 213, Chaofu Rd., Xitun Dist., Taichung City, Taiwan (R.O.C.)",supportEmail:"info@holieninnovation.com.tw"},Ww=["demo","pricing","solution","integrations","general"],xa={name:"fleet_size",label:"How many vehicles?",type:"select",required:!0,options:["1–5","6–20","21–50","51–200","More than 200"]},Vn={name:"company",label:"Company",type:"text",required:!0,autoComplete:"organization"},qc={demo:{type:"demo",label:"Book a product demo",lede:"Tell us a little about your operation and we will bring the right screens.",fields:[Vn,xa,{name:"preferred_time",label:"When suits you?",type:"text",required:!1,hint:"A day and a rough time is enough. We will confirm by email."}]},pricing:{type:"pricing",label:"Plans and pricing",lede:"Pricing depends on how many vehicles you run, so start there.",fields:[Vn,xa,{name:"start_date",label:"When are you looking to start?",type:"text",required:!1}]},solution:{type:"solution",label:"Find the right solution",lede:"Describe the job you are trying to do and we will tell you honestly whether we fit.",fields:[Vn,{name:"operation",label:"What does your delivery day look like?",type:"textarea",required:!0,hint:"Types of drops, how many a day, what goes wrong most often."}]},integrations:{type:"integrations",label:"Integrations",lede:"Tell us what you already run and we will tell you how it connects.",fields:[Vn,{name:"system_name",label:"Which system?",type:"text",required:!0,hint:"The order, warehouse or accounting system you want connected."},{name:"integration_need",label:"What should move between them?",type:"textarea",required:!1}]},general:{type:"general",label:"General",lede:"Anything else — we read every one.",fields:[{name:"message",label:"Your message",type:"textarea",required:!0}]}};Ww.map(t=>({value:t,label:qc[t].label}));function $i(t){return t?qc[t].fields:[]}function Gw(t,e,n){const r=[];t||r.push("enquiry_type"),n.name.trim()||r.push("name"),qw(n.email)||r.push("email");for(const i of $i(t))i.required&&!(e[i.name]??"").trim()&&r.push(i.name);return r}function qw(t){const e=t.trim();return e.length>4&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}E.form`
  display: grid;
  gap: 16px;
  font-family: ${N};
  max-width: 640px;
`;E.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;E.div`
  display: grid;
  gap: 6px;
`;E.label`
  font-size: 13px;
  font-weight: 600;
  color: var(--v29-text);
`;const ys=`
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
`;E.input`
  ${ys}
`;E.textarea`
  ${ys};
  min-height: 120px;
  resize: vertical;
`;E.select`
  ${ys};
  appearance: none;
  background-image: var(--v29-select-caret);
  background-repeat: no-repeat;
  background-position: right 14px center;
  padding-right: 42px;
`;E.p`
  margin: 0;
  font-size: 12.5px;
  color: var(--v29-muted);
`;E.p`
  margin: 0;
  font-size: 13px;
  color: var(--v29-muted);
`;E.p`
  margin: 0;
  font-size: 13.5px;
  color: var(--v29-danger, #c0392b);
`;E.p`
  margin: 0;
  font-size: 14px;
  color: var(--v29-success, #1b7f4b);
`;E.button`
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
`;const Kw=()=>{var b;const[t,e]=S.useState(""),[n,r]=S.useState(""),[i,s]=S.useState(""),[o,l]=S.useState(""),[a,c]=S.useState({}),[u,h]=S.useState(!1);u&&Gw(t,a,{name:n,email:i});const[f,g]=S.useState("idle");S.useId(),S.useRef(null);const m=S.useRef(null),x=(b=$i(t)[0])==null?void 0:b.name;return S.useEffect(()=>{var w;if(!t||!x)return;const R=(w=m.current)==null?void 0:w.querySelector(`[name="${x}"]`);R==null||R.focus()},[t,x]),{...Object.fromEntries($i(t).map(R=>[R.name,R.label]))},d.jsxs(ct,{children:[d.jsx(Nt,{children:"Contact"}),d.jsx(en,{children:"Talk to us."}),d.jsx(M,{children:d.jsxs("p",{children:["Email ",d.jsx("a",{href:`mailto:${V.supportEmail}`,children:V.supportEmail})," to contact the SenditGo team."]})})]})},Jw=E.p`
  font-family: ${N};
  font-size: 13px;
  color: var(--v29-muted);
  margin: 0 0 32px;
  letter-spacing: 0.02em;
`,Ea=E.div`
  max-width: 100%;
  overflow-x: auto;
  &:focus-visible {
    outline: 2px solid var(--v29-primary);
    outline-offset: 2px;
  }
`,Sa=E.p`
  @media (min-width: 561px) {
    display: none;
  }
`,Ta=E.table`
  width: 100%;
  border-collapse: collapse;
  @media (max-width: 560px) {
    min-width: 520px;
  }
  margin: 8px 0 16px;
  font-family: ${N};
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
`,Yw=()=>d.jsxs(ct,{children:[d.jsx(Nt,{children:"Privacy"}),d.jsx(en,{children:"Privacy policy."}),d.jsx(Jw,{children:"Last updated: 18 May 2026"}),d.jsxs(kn,{children:["This policy explains what ",V.legalName," collects through the SenditGo driver app and this website, why, how long we keep it, and the rights you have. The data controller is ",V.legalName]}),d.jsx(M,{children:d.jsxs("p",{children:["For a summary of the app’s data collection and protections, see"," ",d.jsx("a",{href:Et("/data-safety"),children:"Data safety"}),". To remove your account and its associated data, see ",d.jsx("a",{href:Et("/account-deletion"),children:"Delete account"}),"."]})}),d.jsxs(M,{children:[d.jsx("h2",{children:"1. Who we are"}),d.jsxs("p",{children:["SenditGo is operated by ",V.legalName,", a company registered in"," ",V.jurisdiction," with its principal address at ",V.address,". We are the developer of record on the App Store and Google Play and the entity responsible for handling personal information under the Australian Privacy Act 1988 (Cth). For any privacy question, reach us at"," ",d.jsx("a",{href:`mailto:${V.supportEmail}`,children:V.supportEmail}),"."]})]}),d.jsxs(M,{children:[d.jsx("h2",{id:"privacy-collection",children:"2. What we collect"}),d.jsx("p",{children:"We collect only the data needed to run a dispatch operation — no advertising profiles, no sale to third parties."}),d.jsx(Sa,{id:"privacy-collection-hint",children:"Swipe or scroll sideways to read the table."}),d.jsx(Ea,{role:"region","aria-labelledby":"privacy-collection","aria-describedby":"privacy-collection-hint",tabIndex:0,children:d.jsxs(Ta,{children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{children:"Category"}),d.jsx("th",{children:"Examples"}),d.jsx("th",{children:"Why"})]})}),d.jsxs("tbody",{children:[d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"Account"})}),d.jsx("td",{children:"Mobile number, name, email, employer (your operator)"}),d.jsx("td",{children:"Sign-in, identifying you to your operator"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"Location"})}),d.jsx("td",{children:"GPS coordinates while a shift is active"}),d.jsx("td",{children:"Live driver tracking, ETA, geofence events"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"Delivery content"})}),d.jsx("td",{children:"Photos, signatures, notes captured at the door"}),d.jsx("td",{children:"Proof of delivery for your operator and their customer"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"Device & usage"})}),d.jsx("td",{children:"Device model, OS version, app version, crash logs"}),d.jsx("td",{children:"Stability, diagnostics, security"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"Communications"})}),d.jsx("td",{children:"In-app messages between driver and dispatcher"}),d.jsx("td",{children:"Operational coordination"})]})]})]})})]}),d.jsxs(M,{children:[d.jsx("h2",{children:"3. How we use it"}),d.jsxs("ul",{children:[d.jsx("li",{children:"To run the dispatch service: assign jobs, track progress, record proof of delivery."}),d.jsx("li",{children:"To keep the app secure: detect abuse, verify sign-ins, prevent fraud."}),d.jsx("li",{children:"To improve the product: diagnose crashes, measure feature usage in aggregate."}),d.jsx("li",{children:"To meet legal obligations under the Privacy Act 1988 (Cth) and applicable tax law."})]}),d.jsxs("p",{children:["We do ",d.jsx("strong",{children:"not"})," use your data for behavioural advertising and we do not sell it."]})]}),d.jsxs(M,{children:[d.jsx("h2",{children:"4. Legal basis"}),d.jsx("p",{children:"Under the Australian Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs), we process personal information because it is necessary to perform the dispatch service you (or your employer on your behalf) signed up for, to comply with our legal obligations, and — for product improvement and security — for our legitimate interests in operating a reliable, safe service. Where required (e.g. for any optional analytics cookies on this website), we ask for consent and you can withdraw it at any time."})]}),d.jsxs(M,{children:[d.jsx("h2",{children:"5. Who sees your data"}),d.jsxs("ul",{children:[d.jsxs("li",{children:[d.jsx("strong",{children:"Your operator"})," (the company running the SenditGo back-office that you drive for) — they see your shift activity, route, and proof-of-delivery records. They are a separate data controller for their business records."]}),d.jsxs("li",{children:[d.jsx("strong",{children:"Service providers"})," we use to run the platform: cloud hosting (currently AWS, region asia-east), map tiles (Mapbox), push notification delivery (Apple/Google), and crash reporting. Each is bound by a written data-processing agreement."]}),d.jsxs("li",{children:[d.jsx("strong",{children:"Authorities"})," if compelled by a valid legal order under Australian law."]})]}),d.jsxs("p",{children:["A current list of sub-processors is available on request via"," ",d.jsx("a",{href:`mailto:${V.supportEmail}`,children:V.supportEmail}),"."]})]}),d.jsxs(M,{children:[d.jsx("h2",{children:"6. International transfers"}),d.jsx("p",{children:"Our primary infrastructure is hosted in the Asia-Pacific region. Limited categories of data (e.g. crash reports, push delivery metadata) may be processed by service providers operating from other jurisdictions; in every case the provider is bound by a data-processing agreement and we rely on standard contractual clauses or equivalent safeguards where required."})]}),d.jsxs(M,{children:[d.jsx("h2",{id:"privacy-retention",children:"7. How long we keep it"}),d.jsx(Sa,{id:"privacy-retention-hint",children:"Swipe or scroll sideways to read the table."}),d.jsx(Ea,{role:"region","aria-labelledby":"privacy-retention","aria-describedby":"privacy-retention-hint",tabIndex:0,children:d.jsxs(Ta,{children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{children:"Data"}),d.jsx("th",{children:"Retention"})]})}),d.jsxs("tbody",{children:[d.jsxs("tr",{children:[d.jsx("td",{children:"Active account data"}),d.jsx("td",{children:"Until you delete your account"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:"Location pings"}),d.jsx("td",{children:"90 days, then aggregated for trend reporting (no longer linked to you)"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:"Proof-of-delivery records"}),d.jsx("td",{children:"Retained by your operator per their own retention policy; typically 5–7 years for tax records"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:"Crash and diagnostic logs"}),d.jsx("td",{children:"180 days"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:"Backups"}),d.jsx("td",{children:"Rolling 90-day encrypted backups; deleted data expires within this window"})]})]})]})})]}),d.jsxs(M,{children:[d.jsx("h2",{children:"8. Your rights"}),d.jsx("p",{children:"You can:"}),d.jsxs("ul",{children:[d.jsx("li",{children:"Ask what we hold about you and request a copy."}),d.jsx("li",{children:"Correct anything inaccurate."}),d.jsxs("li",{children:["Delete your account and associated personal data — see the"," ",d.jsx("a",{href:Et("/account-deletion"),children:"account deletion page"})," for the in-app and web paths."]}),d.jsx("li",{children:"Object to specific processing where we rely on legitimate interest."}),d.jsx("li",{children:"Lodge a complaint with the relevant supervisory authority."})]}),d.jsxs("p",{children:["To exercise any of these, email"," ",d.jsx("a",{href:`mailto:${V.supportEmail}`,children:V.supportEmail}),". We respond within 30 days."]})]}),d.jsxs(M,{children:[d.jsx("h2",{children:"9. Children"}),d.jsx("p",{children:"SenditGo is a workplace app for professional drivers and dispatchers. It is not directed at, and we do not knowingly collect data from, anyone under 16."})]}),d.jsxs(M,{children:[d.jsx("h2",{children:"10. Security"}),d.jsx("p",{children:"Traffic is encrypted in transit (TLS 1.2+). Production data is encrypted at rest. Access is restricted by role and audited. We rotate secrets and patch dependencies on a regular cycle. If we ever experience a breach affecting your personal data, we will notify you and the relevant authority in line with applicable law."})]}),d.jsxs(M,{children:[d.jsx("h2",{children:"11. Changes to this policy"}),d.jsx("p",{children:"We will update this policy as the product and the law evolve. The “Last updated” date at the top of this page reflects the latest revision. Material changes will be highlighted in the app and on the home page before they take effect."})]}),d.jsxs(M,{children:[d.jsx("h2",{children:"12. Contact"}),d.jsxs("p",{children:[V.legalName,d.jsx("br",{}),V.address,d.jsx("br",{}),"Email:"," ",d.jsx("a",{href:`mailto:${V.supportEmail}`,children:V.supportEmail})]})]})]});E.form`
  display: grid;
  gap: 14px;
  font-family: ${N};
`;E.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;const Kc=`
  width: 100%;
  padding: 14px 16px;
  border-radius: 12px;
  font-size: 15px;
  font-family: ${N};
  transition: border-color 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;

  &:focus {
    outline: none;
  }
`;E.input`
  ${Kc};
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
`;E.textarea`
  ${Kc};
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
`;E.button`
  justify-self: end;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 26px;
  border-radius: 8px;
  background: var(--v29-primary);
  color: #fff;
  font-family: ${N};
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
`;E.p`
  margin: 4px 0 0;
  font-family: ${N};
  font-size: 14px;
  color: ${t=>t.$kind==="success"?"var(--v29-success, #1B7F4B)":"var(--v29-danger, #C0392B)"};
`;E.p`
  margin: -8px 0 0;
  font-family: ${N};
  font-size: 13px;
  color: var(--v29-danger, #C0392B);
`;E.ol`
  counter-reset: step;
  list-style: none;
  margin: 0 0 24px;
  padding: 0;
  display: grid;
  gap: 12px;
`;E.li`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  font-family: ${N};
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
    font-family: ${N};
    font-size: 13px;
    font-weight: 600;
    display: grid;
    place-items: center;
  }

  strong {
    color: var(--v29-text);
    font-weight: 600;
  }
`;E.div`
  background: var(--v29-card);
  border-radius: 14px;
  padding: 16px 20px;
  font-family: ${N};
  font-size: 14.5px;
  line-height: 1.65;
  color: var(--v29-muted);
  margin: 0 0 16px;
  box-shadow: 0 4px 24px -8px rgba(0, 0, 0, 0.15);
  border: 1px solid var(--v29-line-soft);
`;E.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin: 12px 0 16px;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;E.div`
  border-radius: 14px;
  padding: 20px 22px;
  background: var(--v29-card);
  box-shadow: 0 4px 24px -8px rgba(0, 0, 0, 0.15);
  border: 1px solid var(--v29-line-soft);

  h3 {
    margin: 0 0 10px;
    font-family: ${N};
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--v29-muted);
  }
  ul {
    margin: 0;
    padding-left: 18px;
    font-family: ${N};
    font-size: 14px;
    line-height: 1.6;
    color: var(--v29-muted);
  }
  li {
    margin-bottom: 6px;
  }
`;E.div`
  background: var(--v29-card);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 24px -8px rgba(0, 0, 0, 0.15);
  border: 1px solid var(--v29-line-soft);
`;const Xw=()=>d.jsxs(ct,{children:[d.jsx(Nt,{children:"Account support"}),d.jsx(en,{children:"Delete your account."}),d.jsx(M,{children:d.jsxs("p",{children:["For help with your account, email ",d.jsx("a",{href:`mailto:${V.supportEmail}`,children:V.supportEmail}),"."]})})]}),Ra=E.table`
  width: 100%;
  border-collapse: collapse;
  margin: 8px 0 16px;
  font-family: ${N};
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
`,he=E.span`
  display: inline-flex;
  font-family: ${N};
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
  color: ${t=>t.$tone==="yes"?"#FFFFFF":t.$tone==="no"?Ut:"var(--v29-text)"};
`,Qw=E.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin: 12px 0 32px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`,di=E.div`
  background: var(--v29-card);
  border-radius: 16px;
  padding: 20px 22px;
  font-family: ${N};
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
`,Zw=()=>d.jsxs(ct,{children:[d.jsx(Nt,{children:"Data Safety Disclosure"}),d.jsx(en,{children:"What we collect, why, and who receives it."}),d.jsxs(kn,{children:["This Disclosure sets out the categories of personal data that"," ",V.legalName," (“Senditgo”, “we” or “us”) collects through the SenditGo driver application, the purposes for which it is processed, and the third parties with whom it is shared. It is published in conjunction with, and maintained to mirror, the data declarations made in our Apple App Store and Google Play listings, in accordance with the Australian Privacy Act 1988 (Cth), the Australian Privacy Principles, and applicable store policies."]}),d.jsxs(Qw,{children:[d.jsxs(di,{children:[d.jsx("strong",{children:"No third-party advertising"}),d.jsx("span",{children:"Senditgo does not serve third-party advertising within the application and does not construct advertising or behavioural profiles from user data."})]}),d.jsxs(di,{children:[d.jsx("strong",{children:"No sale of personal data"}),d.jsx("span",{children:"Senditgo does not sell, rent, or otherwise transfer personal data to data brokers, marketing intermediaries, or unaffiliated third parties."})]}),d.jsxs(di,{children:[d.jsx("strong",{children:"Encryption in transit and at rest"}),d.jsx("span",{children:"Communications between the application and our servers are protected by TLS 1.2 or higher. Production data is encrypted at rest under managed keys."})]})]}),d.jsxs(M,{children:[d.jsx("h2",{children:"Data we collect"}),d.jsxs(Ra,{children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{children:"Type"}),d.jsx("th",{children:"Purpose"}),d.jsx("th",{children:"Required?"}),d.jsx("th",{children:"Linked to you"})]})}),d.jsxs("tbody",{children:[d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"Mobile number"})}),d.jsx("td",{children:"Account creation, OTP sign-in"}),d.jsx("td",{children:d.jsx(he,{$tone:"yes",children:"Required"})}),d.jsx("td",{children:d.jsx(he,{$tone:"yes",children:"Yes"})})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"Name & email"})}),d.jsx("td",{children:"Identifying you to your operator, contact"}),d.jsx("td",{children:d.jsx(he,{$tone:"yes",children:"Required"})}),d.jsx("td",{children:d.jsx(he,{$tone:"yes",children:"Yes"})})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"Precise location"})}),d.jsx("td",{children:"Live driver tracking, ETA, geofence events"}),d.jsx("td",{children:d.jsx(he,{$tone:"opt",children:"Active shift only"})}),d.jsx("td",{children:d.jsx(he,{$tone:"yes",children:"Yes"})})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"Photos & signatures"})}),d.jsx("td",{children:"Proof of delivery captured at the door"}),d.jsx("td",{children:d.jsx(he,{$tone:"opt",children:"Per delivery"})}),d.jsx("td",{children:d.jsx(he,{$tone:"yes",children:"Yes"})})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"In-app messages"})}),d.jsx("td",{children:"Driver ↔ dispatcher coordination"}),d.jsx("td",{children:d.jsx(he,{$tone:"opt",children:"Optional"})}),d.jsx("td",{children:d.jsx(he,{$tone:"yes",children:"Yes"})})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"Device & app info"})}),d.jsx("td",{children:"Crash reports, performance diagnostics"}),d.jsx("td",{children:d.jsx(he,{$tone:"yes",children:"Required"})}),d.jsx("td",{children:d.jsx(he,{$tone:"opt",children:"Pseudonymous"})})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"Push notification token"})}),d.jsx("td",{children:"Job assignments, dispatcher messages"}),d.jsx("td",{children:d.jsx(he,{$tone:"opt",children:"Optional"})}),d.jsx("td",{children:d.jsx(he,{$tone:"yes",children:"Yes"})})]})]})]})]}),d.jsxs(M,{children:[d.jsx("h2",{children:"Who we share data with"}),d.jsxs(Ra,{children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{children:"Recipient"}),d.jsx("th",{children:"What they receive"}),d.jsx("th",{children:"Why"})]})}),d.jsxs("tbody",{children:[d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"Your operator"})}),d.jsx("td",{children:"Shift activity, route, proof-of-delivery records"}),d.jsx("td",{children:"Running their dispatch operation; their legitimate business records"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"Cloud hosting (AWS)"})}),d.jsx("td",{children:"All production data, encrypted"}),d.jsx("td",{children:"Infrastructure provider, bound by data-processing agreement"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"Map tiles (Mapbox)"})}),d.jsx("td",{children:"Anonymised location to fetch map tiles"}),d.jsx("td",{children:"Render maps inside the app"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"Push delivery (Apple/Google)"})}),d.jsx("td",{children:"Push token + payload metadata"}),d.jsx("td",{children:"Deliver notifications to your device"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"Crash reporting"})}),d.jsx("td",{children:"Crash stack trace, device model, OS version"}),d.jsx("td",{children:"Diagnose and fix bugs"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"Authorities"})}),d.jsx("td",{children:"Only what a valid legal order under Australian law requires"}),d.jsx("td",{children:"Legal compliance"})]})]})]})]}),d.jsxs(M,{children:[d.jsx("h2",{children:"User controls"}),d.jsxs("ul",{children:[d.jsxs("li",{children:[d.jsx("strong",{children:"Location."})," Precise location is collected only while a shift is active. Users may revoke the operating system location permission at any time, in which case the application reverts to a reduced-precision mode."]}),d.jsxs("li",{children:[d.jsx("strong",{children:"Push notifications."})," Notifications are optional and may be disabled in system settings without affecting other functionality."]}),d.jsxs("li",{children:[d.jsx("strong",{children:"Account and data deletion."})," Deletion is available both in-application and via the web. See the dedicated"," ",d.jsx("a",{href:Et("/account-deletion"),children:"account deletion"})," page for the relevant procedure."]}),d.jsxs("li",{children:[d.jsx("strong",{children:"Access, correction, and complaint."})," Users may exercise their statutory rights under the Australian Privacy Act 1988 (Cth) — including the right to lodge a complaint with the Office of the Australian Information Commissioner (OAIC) — as described in the ",d.jsx("a",{href:Et("/privacy"),children:"privacy policy"}),"."]})]})]}),d.jsxs(M,{children:[d.jsx("h2",{children:"Publication and reconciliation"}),d.jsxs("p",{children:["This page constitutes the authoritative record of Senditgo’s data declarations. Identical content is published in the"," ",d.jsx("strong",{children:"Data Safety"})," section of our Google Play listing and in the ",d.jsx("strong",{children:"Privacy Nutrition Labels"})," on our Apple App Store listing. Where a discrepancy is identified between this page and the store declarations, the matter may be reported to"," ",d.jsx("a",{href:`mailto:${V.supportEmail}`,children:V.supportEmail})," ","and Senditgo will reconcile the records within fourteen (14) days."]})]}),d.jsxs(M,{children:[d.jsx("h2",{children:"Further information"}),d.jsxs("p",{children:["For a fuller description of how personal data is collected, the legal bases on which it is processed, retention periods, international transfers, and the rights available to users, please refer to the",d.jsx("a",{href:Et("/privacy"),children:" Senditgo Privacy Policy"}),". General enquiries may be directed to"," ",d.jsx("a",{href:`mailto:${V.supportEmail}`,children:V.supportEmail}),"."]})]})]}),ex=E.div`
  background: var(--v29-page);
  color: var(--v29-text);
  font-family: ${N};
  -webkit-font-smoothing: antialiased;
  transition: background 0.3s ease, color 0.3s ease;

  &[data-motion-paused='true'] *,
  &[data-motion-paused='true'] *::before,
  &[data-motion-paused='true'] *::after {
    animation-play-state: paused !important;
  }
`,bs=E.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 var(--page-gutter);
`,vs=E.section`
  position: relative;
  padding: var(--section-space) 0;
  background: ${t=>t.$alt?"var(--v29-surface-alt)":"transparent"};
`,tx=E(vs)`
  padding-bottom: clamp(20px, 2.5vw, 36px);
`,nx=E.nav`
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
    --brand-logo-color: ${Vi};
  }
`,rx=E.div`
  display: flex;
  align-items: center;
  gap: 12px;
  @media (max-width: 480px) {
    gap: 8px;
  }
`,ix=E.span`
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
`,sx=E.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid var(--v29-line);
  background: transparent;
  color: ${zn};
  cursor: pointer;
  transition: border-color 0.25s ease, background 0.25s ease;
  svg {
    width: 16px;
    height: 16px;
    display: block;
  }
  &:hover {
    border-color: ${zn};
    background: rgba(0, 127, 255, 0.08);
  }
  &:focus-visible {
    outline: 2px solid ${zn};
    outline-offset: 2px;
  }
  @media (max-width: 480px) {
    width: 44px;
    height: 44px;
  }
`,ox=E(Pe)`
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 8px;
  font-family: ${st};
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
    background: ${ir};
    color: #fff;
    &:hover { background: ${ir}; transform: translateY(-1px); }
    &:focus-visible {
      outline: 2px solid var(--v29-primary);
      outline-offset: 2px;
    }
  `}
`,ax=E.header`
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
`,lx=E(bs)`
  position: relative;
  z-index: 2;
  width: 100%;
  padding-top: 120px;
  padding-bottom: 72px;
`,cx=E(Hi.div)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border-radius: 999px;
  border: 1px solid rgba(0, 127, 255, 0.25);
  background: rgba(12, 27, 51, 0.6);
  backdrop-filter: blur(12px);
  color: #f4f7fb;
  font-family: ${N};
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
    background: ${Ut};
    flex-shrink: 0;
    box-shadow: 0 0 8px ${Ut};
    animation: badge-pulse 2s infinite ease-in-out;
    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  }

  @keyframes badge-pulse {
    0% {
      transform: scale(1);
      box-shadow: 0 0 4px ${Ut};
      opacity: 1;
    }
    50% {
      transform: scale(1.4);
      box-shadow: 0 0 12px ${Ut};
      opacity: 0.8;
    }
    100% {
      transform: scale(1);
      box-shadow: 0 0 4px ${Ut};
      opacity: 1;
    }
  }
`,dx=E.h1`
  font-family: ${st};
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
    color: ${zn};
  }
`,ux=E.p`
  font-size: clamp(1.05rem, 1rem + 0.35vw, 1.2rem);
  line-height: 1.6;
  color: #dbe5f1;
  max-width: 52ch;
  margin: 0 0 36px;
`,hx=E.div`
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
`,fx=E(Pe)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  border-radius: 8px;
  background: ${ir};
  color: #fff;
  font-family: ${st};
  font-style: italic;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.2s ease;
  &:hover {
    background: ${ir};
    transform: translateY(-1px);
  }
`,px=E.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  border-radius: 8px;
  border: 1.5px solid rgba(255, 255, 255, 0.55);
  background: transparent;
  color: #fff;
  font-family: ${st};
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
`,_a=E(vs)`
  scroll-margin-block-start: var(--nav-h, 73px);
  padding-block: var(--section-space);
`,ui=E(bs)`
  max-width: var(--walkthrough-width);
`,gx=()=>{const t=hd();S.useLayoutEffect(()=>{const c=()=>{var h;const u=window.location.hash.slice(1);if(["sam","sam-steps","console","fleet-walkthrough","fleet-toolkit","sam-options","fleet-recordings","activity","fleet-insights","fleet-features","platform","delivery-proof","delivery-tracking"].includes(u)){const f=["fleet-walkthrough","fleet-recordings","fleet-insights"].includes(u)?"console":u==="fleet-toolkit"?"fleet-features":u==="sam-options"?"sam":u==="delivery-proof"?"platform":u;(h=document.getElementById(f))==null||h.scrollIntoView({block:"start",behavior:"instant"})}};return c(),window.addEventListener("hashchange",c),()=>window.removeEventListener("hashchange",c)},[]);const{mode:e,toggleTheme:n}=Pa(),r=Ki(),i=r.length>0,s=r.some(c=>c.role==="shipper"),o=ms(),l=S.useRef(null),a=S.useRef(null);return d.jsxs(ex,{"data-motion-paused":t,children:[d.jsx(Aa,{}),d.jsxs(nx,{"data-home-nav":!0,ref:a,children:[d.jsxs(ix,{$compact:i,role:"img","aria-label":"SenditGo",children:[d.jsx("span",{className:"nav-wordmark","aria-hidden":"true",children:d.jsx(rr,{height:30,ariaLabel:""})}),d.jsx("span",{className:"nav-mark","aria-hidden":"true",children:d.jsx(rr,{height:30,variant:"mark",ariaLabel:""})})]}),d.jsxs(rx,{children:[d.jsx(sx,{onClick:n,"aria-label":"Toggle dark / light",children:e==="dark"?d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[d.jsx("circle",{cx:"12",cy:"12",r:"4"}),d.jsx("path",{d:"M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"})]}):d.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:d.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})}),d.jsx(ox,{to:"/contact",$ghost:s,$hideOnNarrow:s,children:"Get early access"}),(i||o)&&d.jsx(Vc,{})]})]}),d.jsxs(ax,{children:[d.jsx(fd,{opening:!0}),d.jsxs(lx,{children:[d.jsxs(cx,{initial:t?!1:{opacity:0,y:-12},animate:{opacity:1,y:0},transition:t?{duration:0}:{duration:.8,ease:wr,delay:.08},children:[d.jsx("span",{className:"dot"}),"Intelligent transport management. Launching 2027."]}),d.jsxs(dx,{children:["Set the outcome. Fleet-wide intelligence handles the rest",d.jsx("span",{className:"go",children:"."})]}),d.jsx(ux,{children:"SenditGo’s AI, SAM, weighs thousands of combinations across every stop, window and driver, then hands back a dispatch-ready plan in seconds—with the routes, allocations and knock-on effects already considered."}),d.jsxs(hx,{children:[d.jsx(fx,{to:"/contact",children:"Get early access"}),d.jsx(px,{onClick:c=>{var u;c.preventDefault(),(u=l.current)==null||u.scrollIntoView({behavior:t?"auto":"smooth",block:"start"})},href:"#console",children:"See it in action"})]})]})]}),d.jsx(_a,{id:"sam","aria-labelledby":"sam-title",$alt:!0,children:d.jsxs(ui,{children:[d.jsx(pd,{id:"sam-title"}),d.jsx(gd,{duration:Ss.duration,sceneId:"dispatch-scene",reducedMotion:t,renderScene:c=>d.jsx(md,{stage:c,concept:Ss})})]})}),d.jsx(vs,{id:"console","aria-labelledby":"product-features-title",ref:l,children:d.jsx(ui,{children:d.jsx(yd,{})})}),d.jsx(bd,{navRef:a}),d.jsx(_a,{id:"delivery-tracking","aria-label":"Delivery tracking",$alt:!0,children:d.jsx(ui,{children:d.jsx(vd,{})})}),d.jsx(tx,{id:"activity","aria-labelledby":"activity-title",children:d.jsxs(bs,{children:[d.jsx(wd,{id:"activity-title"}),d.jsx(xd,{})]})}),d.jsx(Ed,{}),d.jsx(Sd,{}),d.jsx(Td,{}),d.jsx(Gc,{})]})},mx=[{id:"operations",labelKey:"nav.groups.operations",items:[{id:"orders",labelKey:"nav.orders",path:"/portal/orders",permission:Ee.LIST},{id:"create-order",labelKey:"nav.createOrder",path:"/portal/orders/new",permission:Ee.ADD},{id:"import-orders",labelKey:"nav.importOrders",path:"/portal/orders/import",permission:Ee.IMPORT}]},{id:"finance",labelKey:"nav.groups.finance",items:[{id:"billing",labelKey:"nav.billing",path:"/portal/billing",permission:null}]},{id:"admin",labelKey:"nav.groups.admin",items:[{id:"users-roles",labelKey:"nav.usersRoles",path:"/portal/admin/users",permission:hn.USER_LIST}]}],Me=({children:t})=>{const e=ms(),n=Ae();if(!e){const r=ot("portalLogin");return d.jsx(qe,{to:qi(),replace:!0,state:r?{from:`${n.pathname}${n.search}`}:void 0})}return d.jsx(d.Fragment,{children:t})},mt=({children:t,code:e})=>Uc(e)?d.jsx(d.Fragment,{children:t}):d.jsx(qe,{to:"/portal",replace:!0}),yx=S.lazy(()=>Oe(()=>import("./CreateOrderPage-Bl6Mw6w4.js"),__vite__mapDeps([0,1,2,3,4,5]))),bx=S.lazy(()=>Oe(()=>import("./ImportOrdersPage-Bl4mp2mk.js"),__vite__mapDeps([6,1,2,3,7,4,8,5]))),vx=S.lazy(()=>Oe(()=>import("./OrderDetailPage-Bm-CyaP0.js"),__vite__mapDeps([9,1,2,3,10,7,11,4,12,13,14,15,16,17,5,8]))),wx=S.lazy(()=>Oe(()=>import("./BillingPage-JGYTw4-A.js"),__vite__mapDeps([18,1,2,3,4,13,5]))),xx=S.lazy(()=>Oe(()=>import("./LoginPage-DMPZVPV1.js"),__vite__mapDeps([19,1,2,3,10,7,11,4,5]))),Ex=S.lazy(()=>Oe(()=>import("./OrdersPage-nheUd72r.js"),__vite__mapDeps([20,1,2,3,10,7,11,4,21,16,17,13,5]))),Ia=S.lazy(()=>Oe(()=>import("./RoleFormPage-r1Nyu2F3.js"),__vite__mapDeps([22,1,2,3,10,7,11,4,5,14]))),Sx=S.lazy(()=>Oe(()=>import("./UsersRolesPage-DG7zzfyD.js"),__vite__mapDeps([23,1,2,3,10,7,11,4,8,5,21,16,15]))),Tx=S.lazy(()=>Oe(()=>import("./TrackEntryPage-kkpLd52S.js"),__vite__mapDeps([24,1,2,3,25,12,4,13,14,15,11,16]))),Rx=S.lazy(()=>Oe(()=>import("./TrackResultPage-BUWU66EW.js"),__vite__mapDeps([26,1,2,3,25,12,4,13,14,15,11,16]))),_x=E.div`
  min-height: 100vh;
  background-color: var(--app-background);
  color: var(--app-text);
  transition: background-color 0.3s ease, color 0.3s ease;
`,Ix="https://www.senditgo.com",yt={"/":{title:"SenditGo — Transportation Management System",description:"SenditGo — intelligent transport management, launching 2027. Our AI, SAM, weighs thousands of combinations and hands back a dispatch-ready plan in seconds. Get early access."},"/install":{title:"Get the SenditGo driver app",description:"Install the SenditGo driver app for iOS or Android — scan the QR code or tap your store to download and start running deliveries."},"/company":{title:"About SenditGo",description:"SenditGo is intelligent transport management for local and last-mile fleets, launching 2027."},"/about":{title:"About SenditGo",description:"Who SenditGo is, how we work, and where we are going — intelligent transport management for local and last-mile fleets."},"/about-v1":{title:"About SenditGo — story demo",description:"Local demo of the SenditGo story About page. Not a shipping surface."},"/contact":{title:"Contact SenditGo",description:"Book a product demo, ask about plans and pricing, integrations, or find the right solution for your fleet."},"/privacy":{title:"Privacy Policy — SenditGo",description:"How SenditGo collects, uses, and protects personal and operational data across its fleet platform and driver app."},"/account-deletion":{title:"Account & Data Deletion — SenditGo",description:"How to request deletion of your SenditGo account and the associated data, and what gets removed."},"/data-safety":{title:"Data Safety — SenditGo",description:"How SenditGo handles, secures, and shares operational and location data across the platform and driver app."},"/portal/login":{title:"Sign In — SenditGo",description:"Sign in to the SenditGo portal."},"/portal/orders":{title:"Orders — SenditGo",description:"Track and manage your SenditGo orders."},"/portal/orders/new":{title:"Create Order — SenditGo",description:"Prepare a shipment draft in the SenditGo portal."},"/portal/orders/import":{title:"Import Orders — SenditGo",description:"Validate a CSV order batch before import."},"/portal/orders/:salesOrderId":{title:"Order Detail — SenditGo",description:"Review SenditGo order tracking, handoff, and package detail."},"/portal/billing":{title:"Billing & Payments — SenditGo",description:"How your SenditGo account is billed and paid."},"/portal/admin/users":{title:"Users & Roles — SenditGo",description:"Manage portal users, roles, and permissions in SenditGo."},"/portal/admin/roles/new":{title:"Create Role — SenditGo",description:"Create a portal role and choose its permissions."},"/portal/admin/roles/:roleId":{title:"Edit Role — SenditGo",description:"Edit a portal role and its permissions."}};function Cx(t){const e=t.toLowerCase();return e.startsWith("/track/")?yt["/track"]??yt["/"]:e.startsWith("/portal/orders/")&&e!=="/portal/orders/new"&&e!=="/portal/orders/import"?yt["/portal/orders/:salesOrderId"]:e.startsWith("/portal/admin/roles/")?e==="/portal/admin/roles/new"?yt["/portal/admin/roles/new"]:yt["/portal/admin/roles/:roleId"]:yt[e]??yt["/"]}function Px(){const{pathname:t}=Ae(),e=t.replace(/\/+$/,"")||"/",n=Cx(e),r=`${Ix}${e}`,i=t.toLowerCase(),s=i.startsWith("/portal"),o=i.startsWith("/track/"),l=i==="/about-v1";return d.jsxs(du,{children:[d.jsx("title",{children:n.title}),d.jsx("meta",{name:"description",content:n.description}),d.jsx("link",{rel:"canonical",href:r}),(s||o||l)&&d.jsx("meta",{name:"robots",content:"noindex"}),d.jsx("meta",{property:"og:title",content:n.title}),d.jsx("meta",{property:"og:description",content:n.description}),d.jsx("meta",{property:"og:url",content:r}),d.jsx("meta",{name:"twitter:title",content:n.title}),d.jsx("meta",{name:"twitter:description",content:n.description})]})}function Ax(){const{search:t}=Ae();return S.useEffect(()=>{$u()},[t]),null}function Ox(){const{search:t}=Ae();return ot("aboutPage")?d.jsx(Mw,{}):d.jsx(qe,{to:{pathname:"/company",search:t},replace:!0})}function kx(){const{search:t}=Ae();return ot("aboutV1")?d.jsx(Vw,{}):d.jsx(qe,{to:{pathname:"/",search:t},replace:!0})}function Nx(){const{search:t}=Ae();return ot("guestTrack")?d.jsx(Tx,{}):d.jsx(qe,{to:{pathname:"/",search:t},replace:!0})}function jx(){const{search:t}=Ae();return ot("guestTrack")?d.jsx(Rx,{}):d.jsx(qe,{to:{pathname:"/",search:t},replace:!0})}function Lx(){const{search:t}=Ae();return d.jsx(qe,{to:{pathname:"/",search:t},replace:!0})}function Dx(){const{search:t}=Ae();return ot("portalLogin")?d.jsx(xx,{}):d.jsx(qe,{to:{pathname:"/",search:t},replace:!0})}function Mx(){var n;const t=Ot(r=>r.permissionList),e=((n=mx.flatMap(r=>r.items).find(r=>r.permission===null||t.includes(r.permission)))==null?void 0:n.path)??"/portal/billing";return d.jsx(qe,{to:e,replace:!0})}function Fx(){return d.jsxs(Rd,{children:[d.jsx(fu,{}),d.jsx(_x,{children:d.jsxs(_d,{basename:"/tms-official-web-preview/",children:[d.jsx(Ax,{}),d.jsx(Px,{}),d.jsx(S.Suspense,{fallback:d.jsx("div",{role:"status",children:"Loading…"}),children:d.jsxs(Id,{children:[d.jsx(W,{path:"/",element:d.jsx(gx,{})}),d.jsx(W,{path:"/install",element:d.jsx(Nw,{})}),d.jsx(W,{path:"/company",element:d.jsx(zw,{})}),d.jsx(W,{path:"/about",element:d.jsx(Ox,{})}),d.jsx(W,{path:"/about-v1",element:d.jsx(kx,{})}),d.jsx(W,{path:"/contact",element:d.jsx(Kw,{})}),d.jsx(W,{path:"/privacy",element:d.jsx(Yw,{})}),d.jsx(W,{path:"/account-deletion",element:d.jsx(Xw,{})}),d.jsx(W,{path:"/data-safety",element:d.jsx(Zw,{})}),d.jsx(W,{path:"/portal/login",caseSensitive:!0,element:d.jsx(Dx,{})}),d.jsx(W,{path:"/track",caseSensitive:!0,element:d.jsx(Nx,{})}),d.jsx(W,{path:"/track/:token",caseSensitive:!0,element:d.jsx(jx,{})}),d.jsx(W,{caseSensitive:!0,path:"/portal/orders",element:d.jsx(Me,{children:d.jsx(mt,{code:Ee.LIST,children:d.jsx(Ex,{})})})}),d.jsx(W,{caseSensitive:!0,path:"/portal/orders/new",element:d.jsx(Me,{children:d.jsx(mt,{code:Ee.ADD,children:d.jsx(yx,{})})})}),d.jsx(W,{caseSensitive:!0,path:"/portal/orders/import",element:d.jsx(Me,{children:d.jsx(mt,{code:Ee.IMPORT,children:d.jsx(bx,{})})})}),d.jsx(W,{caseSensitive:!0,path:"/portal/orders/:salesOrderId",element:d.jsx(Me,{children:d.jsx(mt,{code:Ee.LIST,children:d.jsx(vx,{})})})}),d.jsx(W,{caseSensitive:!0,path:"/portal/billing",element:d.jsx(Me,{children:d.jsx(wx,{})})}),d.jsx(W,{caseSensitive:!0,path:"/portal/admin/users",element:d.jsx(Me,{children:d.jsx(mt,{code:hn.USER_LIST,children:d.jsx(Sx,{})})})}),d.jsx(W,{caseSensitive:!0,path:"/portal/admin/roles/new",element:d.jsx(Me,{children:d.jsx(mt,{code:hn.ROLE_ADD,children:d.jsx(Ia,{})})})}),d.jsx(W,{caseSensitive:!0,path:"/portal/admin/roles/:roleId",element:d.jsx(Me,{children:d.jsx(mt,{code:hn.ROLE_EDIT,children:d.jsx(Ia,{})})})}),d.jsx(W,{path:"/portal",caseSensitive:!0,element:d.jsx(Me,{children:d.jsx(Mx,{})})}),d.jsx(W,{path:"*",element:d.jsx(Lx,{})})]})})]})})]})}async function Ux(){}Ux().then(()=>{Zc.createRoot(document.getElementById("root")).render(d.jsx(k.StrictMode,{children:d.jsx(Fa,{children:d.jsx(Fx,{})})}))});export{Gc as C,du as H,Co as I,hn as P,h0 as R,yw as S,Oe as _,Ot as a,p0 as b,Us as c,Wx as d,f0 as e,Fc as f,Po as g,Ee as h,uu as i,Uc as j,q as k,mx as l,ms as m,V as n,be as s,Gi as u};
