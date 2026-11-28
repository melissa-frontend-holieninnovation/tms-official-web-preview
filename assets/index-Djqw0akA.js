const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CreateOrderPage-BOGx0Tlq.js","assets/client-CG7M8TvS.js","assets/FleetImpact-TI7flhUD.js","assets/FleetImpact-UQ0qSUmE.css","assets/CarrierProvider-CfWM4CGS.js","assets/PortalShell-DOEEzvvX.js","assets/ImportOrdersPage-pSj6nlAz.js","assets/api-B1EnflDK.js","assets/PortalTables-CyMmq9B-.js","assets/OrderDetailPage-Bkr9SMQX.js","assets/apiRoutes-DCZcBwxc.js","assets/index-jPvTCT1d.js","assets/DeliveryProgress-D3iERBQ_.js","assets/Status-D4Myjj3-.js","assets/arrow-left-CKYADNOU.js","assets/check-t_v-wtVN.js","assets/CheckOutlined-ijjMcJg_.js","assets/StatusPill-DNU1dA2u.js","assets/BillingPage-Drwo7ZBJ.js","assets/LoginPage-Vd-zoLAk.js","assets/OrdersPage-BBO8bWmE.js","assets/Select-IbSZ9-5e.js","assets/RoleFormPage-opPsarHk.js","assets/UsersRolesPage-DHsCW_dH.js","assets/TrackEntryPage-odxJGABm.js","assets/useShipmentLookup-B3GhsAeH.js","assets/TrackResultPage-DKTIWAtJ.js"])))=>i.map(i=>d[i]);
var td=Object.defineProperty;var nd=(t,e,n)=>e in t?td(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var _e=(t,e,n)=>nd(t,typeof e!="symbol"?e+"":e,n);import{r as S,g as Hi,R as j,j as l,p as Ie,b as rd}from"./client-CG7M8TvS.js";import{w as Aa,x as id,y as sd,z as od,L as ad,A as Mn,E as ld,G as at,H as cd,J as E,U as N,K as Vi,M as dd,N as wr,Q as Ae,V as zi,X as ke,h as rr,Y as ka,Z as ud,_ as hd,u as Oa,S as ja,$ as fd,t as Na,a0 as pd,a1 as md,a2 as $t,a3 as zn,a4 as ir,f as gd,a5 as yd,j as bd,k as vd,r as Ts,m as wd,P as xd,n as Ed,C as Sd,I as Td,F as Rd,p as _d,q as Cd,a6 as Ke,T as Id,B as Pd,a7 as Ad,a8 as V}from"./FleetImpact-TI7flhUD.js";function La(){const t=S.useRef(!1);return Aa(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function kd(){const t=La(),[e,n]=S.useState(0),r=S.useCallback(()=>{t.current&&n(e+1)},[e]);return[S.useCallback(()=>id.postRender(r),[r]),e]}class Od extends S.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function jd({children:t,isPresent:e}){const n=S.useId(),r=S.useRef(null),i=S.useRef({width:0,height:0,top:0,left:0});return S.useInsertionEffect(()=>{const{width:s,height:o,top:c,left:a}=i.current;if(e||!r.current||!s||!o)return;r.current.dataset.motionPopId=n;const d=document.createElement("style");return document.head.appendChild(d),d.sheet&&d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${o}px !important;
            top: ${c}px !important;
            left: ${a}px !important;
          }
        `),()=>{document.head.removeChild(d)}},[e]),S.createElement(Od,{isPresent:e,childRef:r,sizeRef:i},S.cloneElement(t,{ref:r}))}const Nr=({children:t,initial:e,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:s,mode:o})=>{const c=sd(Nd),a=S.useId(),d=S.useMemo(()=>({id:a,initial:e,isPresent:n,custom:i,onExitComplete:u=>{c.set(u,!0);for(const h of c.values())if(!h)return;r&&r()},register:u=>(c.set(u,!1),()=>c.delete(u))}),s?void 0:[n]);return S.useMemo(()=>{c.forEach((u,h)=>c.set(h,!1))},[n]),S.useEffect(()=>{!n&&!c.size&&r&&r()},[n]),o==="popLayout"&&(t=S.createElement(jd,{isPresent:n},t)),S.createElement(od.Provider,{value:d},t)};function Nd(){return new Map}function Ld(t){return S.useEffect(()=>()=>t(),[])}const wt=t=>t.key||"";function Dd(t,e){t.forEach(n=>{const r=wt(n);e.set(r,n)})}function Md(t){const e=[];return S.Children.forEach(t,n=>{S.isValidElement(n)&&e.push(n)}),e}const Wi=({children:t,custom:e,initial:n=!0,onExitComplete:r,exitBeforeEnter:i,presenceAffectsLayout:s=!0,mode:o="sync"})=>{const c=S.useContext(ad).forceRender||kd()[0],a=La(),d=Md(t);let u=d;const h=S.useRef(new Map).current,f=S.useRef(u),m=S.useRef(new Map).current,g=S.useRef(!0);if(Aa(()=>{g.current=!1,Dd(d,m),f.current=u}),Ld(()=>{g.current=!0,m.clear(),h.clear()}),g.current)return S.createElement(S.Fragment,null,u.map(w=>S.createElement(Nr,{key:wt(w),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:s,mode:o},w)));u=[...u];const x=f.current.map(wt),b=d.map(wt),R=x.length;for(let w=0;w<R;w++){const v=x[w];b.indexOf(v)===-1&&!h.has(v)&&h.set(v,void 0)}return o==="wait"&&h.size&&(u=[]),h.forEach((w,v)=>{if(b.indexOf(v)!==-1)return;const y=m.get(v);if(!y)return;const _=x.indexOf(v);let C=w;if(!C){const P=()=>{h.delete(v);const A=Array.from(m.keys()).filter(F=>!b.includes(F));if(A.forEach(F=>m.delete(F)),f.current=d.filter(F=>{const W=wt(F);return W===v||A.includes(W)}),!h.size){if(a.current===!1)return;c(),r&&r()}};C=S.createElement(Nr,{key:wt(y),isPresent:!1,onExitComplete:P,custom:e,presenceAffectsLayout:s,mode:o},y),h.set(v,C)}u.splice(_,0,C)}),u=u.map(w=>{const v=w.key;return h.has(v)?w:S.createElement(Nr,{key:wt(w),isPresent:!0,presenceAffectsLayout:s,mode:o},w)}),S.createElement(S.Fragment,null,h.size?u:u.map(w=>S.cloneElement(w)))},Fd="modulepreload",Ud=function(t){return"/tms-official-web-preview/"+t},Rs={},Oe=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){let o=function(d){return Promise.all(d.map(u=>Promise.resolve(u).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),a=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));i=o(n.map(d=>{if(d=Ud(d),d in Rs)return;Rs[d]=!0;const u=d.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${h}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":Fd,u||(f.as="script"),f.crossOrigin="",f.href=d,a&&f.setAttribute("nonce",a),document.head.appendChild(f),u)return new Promise((m,g)=>{f.addEventListener("load",m),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${d}`)))})}))}function s(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return i.then(o=>{for(const c of o||[])c.status==="rejected"&&s(c.reason);return e().catch(s)})};var Lr,_s;function $d(){if(_s)return Lr;_s=1;var t=typeof Element<"u",e=typeof Map=="function",n=typeof Set=="function",r=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function i(s,o){if(s===o)return!0;if(s&&o&&typeof s=="object"&&typeof o=="object"){if(s.constructor!==o.constructor)return!1;var c,a,d;if(Array.isArray(s)){if(c=s.length,c!=o.length)return!1;for(a=c;a--!==0;)if(!i(s[a],o[a]))return!1;return!0}var u;if(e&&s instanceof Map&&o instanceof Map){if(s.size!==o.size)return!1;for(u=s.entries();!(a=u.next()).done;)if(!o.has(a.value[0]))return!1;for(u=s.entries();!(a=u.next()).done;)if(!i(a.value[1],o.get(a.value[0])))return!1;return!0}if(n&&s instanceof Set&&o instanceof Set){if(s.size!==o.size)return!1;for(u=s.entries();!(a=u.next()).done;)if(!o.has(a.value[0]))return!1;return!0}if(r&&ArrayBuffer.isView(s)&&ArrayBuffer.isView(o)){if(c=s.length,c!=o.length)return!1;for(a=c;a--!==0;)if(s[a]!==o[a])return!1;return!0}if(s.constructor===RegExp)return s.source===o.source&&s.flags===o.flags;if(s.valueOf!==Object.prototype.valueOf&&typeof s.valueOf=="function"&&typeof o.valueOf=="function")return s.valueOf()===o.valueOf();if(s.toString!==Object.prototype.toString&&typeof s.toString=="function"&&typeof o.toString=="function")return s.toString()===o.toString();if(d=Object.keys(s),c=d.length,c!==Object.keys(o).length)return!1;for(a=c;a--!==0;)if(!Object.prototype.hasOwnProperty.call(o,d[a]))return!1;if(t&&s instanceof Element)return!1;for(a=c;a--!==0;)if(!((d[a]==="_owner"||d[a]==="__v"||d[a]==="__o")&&s.$$typeof)&&!i(s[d[a]],o[d[a]]))return!1;return!0}return s!==s&&o!==o}return Lr=function(o,c){try{return i(o,c)}catch(a){if((a.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw a}},Lr}var Bd=$d();const Hd=Hi(Bd);var Dr,Cs;function Vd(){if(Cs)return Dr;Cs=1;var t=function(e,n,r,i,s,o,c,a){if(!e){var d;if(n===void 0)d=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[r,i,s,o,c,a],h=0;d=new Error(n.replace(/%s/g,function(){return u[h++]})),d.name="Invariant Violation"}throw d.framesToPop=1,d}};return Dr=t,Dr}var zd=Vd();const Is=Hi(zd);var Mr,Ps;function Wd(){return Ps||(Ps=1,Mr=function(e,n,r,i){var s=r?r.call(i,e,n):void 0;if(s!==void 0)return!!s;if(e===n)return!0;if(typeof e!="object"||!e||typeof n!="object"||!n)return!1;var o=Object.keys(e),c=Object.keys(n);if(o.length!==c.length)return!1;for(var a=Object.prototype.hasOwnProperty.bind(n),d=0;d<o.length;d++){var u=o[d];if(!a(u))return!1;var h=e[u],f=n[u];if(s=r?r.call(i,h,f,u):void 0,s===!1||s===void 0&&h!==f)return!1}return!0}),Mr}var qd=Wd();const Gd=Hi(qd);var Da=(t=>(t.BASE="base",t.BODY="body",t.HEAD="head",t.HTML="html",t.LINK="link",t.META="meta",t.NOSCRIPT="noscript",t.SCRIPT="script",t.STYLE="style",t.TITLE="title",t.FRAGMENT="Symbol(react.fragment)",t))(Da||{}),Fr={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},As=Object.values(Da),xr={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Ma=Object.entries(xr).reduce((t,[e,n])=>(t[n]=e,t),{}),xe="data-rh",Vt={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},zt=(t,e)=>{for(let n=t.length-1;n>=0;n-=1){const r=t[n];if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}return null},Kd=t=>{let e=zt(t,"title");const n=zt(t,Vt.TITLE_TEMPLATE);if(Array.isArray(e)&&(e=e.join("")),n&&e)return n.replace(/%s/g,()=>e);const r=zt(t,Vt.DEFAULT_TITLE);return e||r||void 0},Yd=t=>zt(t,Vt.ON_CHANGE_CLIENT_STATE)||(()=>{}),Ur=(t,e)=>e.filter(n=>typeof n[t]<"u").map(n=>n[t]).reduce((n,r)=>({...n,...r}),{}),Jd=(t,e)=>e.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,r)=>{if(!n.length){const i=Object.keys(r);for(let s=0;s<i.length;s+=1){const c=i[s].toLowerCase();if(t.indexOf(c)!==-1&&r[c])return n.concat(r)}}return n},[]),Xd=t=>console&&typeof console.warn=="function"&&console.warn(t),sn=(t,e,n)=>{const r={};return n.filter(i=>Array.isArray(i[t])?!0:(typeof i[t]<"u"&&Xd(`Helmet: ${t} should be of type "Array". Instead found type "${typeof i[t]}"`),!1)).map(i=>i[t]).reverse().reduce((i,s)=>{const o={};s.filter(a=>{let d;const u=Object.keys(a);for(let f=0;f<u.length;f+=1){const m=u[f],g=m.toLowerCase();e.indexOf(g)!==-1&&!(d==="rel"&&a[d].toLowerCase()==="canonical")&&!(g==="rel"&&a[g].toLowerCase()==="stylesheet")&&(d=g),e.indexOf(m)!==-1&&(m==="innerHTML"||m==="cssText"||m==="itemprop")&&(d=m)}if(!d||!a[d])return!1;const h=a[d].toLowerCase();return r[d]||(r[d]={}),o[d]||(o[d]={}),r[d][h]?!1:(o[d][h]=!0,!0)}).reverse().forEach(a=>i.push(a));const c=Object.keys(o);for(let a=0;a<c.length;a+=1){const d=c[a],u={...r[d],...o[d]};r[d]=u}return i},[]).reverse()},Qd=(t,e)=>{if(Array.isArray(t)&&t.length){for(let n=0;n<t.length;n+=1)if(t[n][e])return!0}return!1},Zd=t=>({baseTag:Jd(["href"],t),bodyAttributes:Ur("bodyAttributes",t),defer:zt(t,Vt.DEFER),encode:zt(t,Vt.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Ur("htmlAttributes",t),linkTags:sn("link",["rel","href"],t),metaTags:sn("meta",["name","charset","http-equiv","property","itemprop"],t),noscriptTags:sn("noscript",["innerHTML"],t),onChangeClientState:Yd(t),scriptTags:sn("script",["src","innerHTML"],t),styleTags:sn("style",["cssText"],t),title:Kd(t),titleAttributes:Ur("titleAttributes",t),prioritizeSeoTags:Qd(t,Vt.PRIORITIZE_SEO_TAGS)}),Fa=t=>Array.isArray(t)?t.join(""):t,eu=(t,e)=>{const n=Object.keys(t);for(let r=0;r<n.length;r+=1)if(e[n[r]]&&e[n[r]].includes(t[n[r]]))return!0;return!1},$r=(t,e)=>Array.isArray(t)?t.reduce((n,r)=>(eu(r,e)?n.priority.push(r):n.default.push(r),n),{priority:[],default:[]}):{default:t,priority:[]},ks=(t,e)=>({...t,[e]:void 0}),tu=["noscript","script","style"],fi=(t,e=!0)=>e===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),Ua=t=>Object.keys(t).reduce((e,n)=>{const r=typeof t[n]<"u"?`${n}="${t[n]}"`:`${n}`;return e?`${e} ${r}`:r},""),nu=(t,e,n,r)=>{const i=Ua(n),s=Fa(e);return i?`<${t} ${xe}="true" ${i}>${fi(s,r)}</${t}>`:`<${t} ${xe}="true">${fi(s,r)}</${t}>`},ru=(t,e,n=!0)=>e.reduce((r,i)=>{const s=i,o=Object.keys(s).filter(d=>!(d==="innerHTML"||d==="cssText")).reduce((d,u)=>{const h=typeof s[u]>"u"?u:`${u}="${fi(s[u],n)}"`;return d?`${d} ${h}`:h},""),c=s.innerHTML||s.cssText||"",a=tu.indexOf(t)===-1;return`${r}<${t} ${xe}="true" ${o}${a?"/>":`>${c}</${t}>`}`},""),$a=(t,e={})=>Object.keys(t).reduce((n,r)=>{const i=xr[r];return n[i||r]=t[r],n},e),iu=(t,e,n)=>{const r={key:e,[xe]:!0},i=$a(n,r);return[j.createElement("title",i,e)]},Wn=(t,e)=>e.map((n,r)=>{const i={key:r,[xe]:!0};return Object.keys(n).forEach(s=>{const c=xr[s]||s;if(c==="innerHTML"||c==="cssText"){const a=n.innerHTML||n.cssText;i.dangerouslySetInnerHTML={__html:a}}else i[c]=n[s]}),j.createElement(t,i)}),ye=(t,e,n=!0)=>{switch(t){case"title":return{toComponent:()=>iu(t,e.title,e.titleAttributes),toString:()=>nu(t,e.title,e.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>$a(e),toString:()=>Ua(e)};default:return{toComponent:()=>Wn(t,e),toString:()=>ru(t,e,n)}}},su=({metaTags:t,linkTags:e,scriptTags:n,encode:r})=>{const i=$r(t,Fr.meta),s=$r(e,Fr.link),o=$r(n,Fr.script);return{priorityMethods:{toComponent:()=>[...Wn("meta",i.priority),...Wn("link",s.priority),...Wn("script",o.priority)],toString:()=>`${ye("meta",i.priority,r)} ${ye("link",s.priority,r)} ${ye("script",o.priority,r)}`},metaTags:i.default,linkTags:s.default,scriptTags:o.default}},ou=t=>{const{baseTag:e,bodyAttributes:n,encode:r=!0,htmlAttributes:i,noscriptTags:s,styleTags:o,title:c="",titleAttributes:a,prioritizeSeoTags:d}=t;let{linkTags:u,metaTags:h,scriptTags:f}=t,m={toComponent:()=>[],toString:()=>""};return d&&({priorityMethods:m,linkTags:u,metaTags:h,scriptTags:f}=su(t)),{priority:m,base:ye("base",e,r),bodyAttributes:ye("bodyAttributes",n,r),htmlAttributes:ye("htmlAttributes",i,r),link:ye("link",u,r),meta:ye("meta",h,r),noscript:ye("noscript",s,r),script:ye("script",f,r),style:ye("style",o,r),title:ye("title",{title:c,titleAttributes:a},r)}},pi=ou,Fn=[],qi=!!(typeof window<"u"&&window.document&&window.document.createElement),mi=class{constructor(t,e){_e(this,"instances",[]);_e(this,"canUseDOM",qi);_e(this,"context");_e(this,"value",{setHelmet:t=>{this.context.helmet=t},helmetInstances:{get:()=>this.canUseDOM?Fn:this.instances,add:t=>{(this.canUseDOM?Fn:this.instances).push(t)},remove:t=>{const e=(this.canUseDOM?Fn:this.instances).indexOf(t);(this.canUseDOM?Fn:this.instances).splice(e,1)}}});this.context=t,this.canUseDOM=e||!1,e||(t.helmet=pi({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},au=parseInt(j.version.split(".")[0],10),gi=au>=19,lu={},Ba=j.createContext(lu),St,Ha=(St=class extends S.Component{constructor(n){super(n);_e(this,"helmetData");gi?this.helmetData=null:this.helmetData=new mi(this.props.context||{},St.canUseDOM)}render(){return gi?j.createElement(j.Fragment,null,this.props.children):j.createElement(Ba.Provider,{value:this.helmetData.value},this.props.children)}},_e(St,"canUseDOM",qi),St),Dt=(t,e)=>{const n=document.head||document.querySelector("head"),r=n.querySelectorAll(`${t}[${xe}]`),i=[].slice.call(r),s=[];let o;return e&&e.length&&e.forEach(c=>{const a=document.createElement(t);for(const d in c)if(Object.prototype.hasOwnProperty.call(c,d))if(d==="innerHTML")a.innerHTML=c.innerHTML;else if(d==="cssText"){const u=c.cssText;a.appendChild(document.createTextNode(u))}else{const u=d,h=typeof c[u]>"u"?"":c[u];a.setAttribute(d,h)}a.setAttribute(xe,"true"),i.some((d,u)=>(o=u,a.isEqualNode(d)))?i.splice(o,1):s.push(a)}),i.forEach(c=>{var a;return(a=c.parentNode)==null?void 0:a.removeChild(c)}),s.forEach(c=>n.appendChild(c)),{oldTags:i,newTags:s}},yi=(t,e)=>{const n=document.getElementsByTagName(t)[0];if(!n)return;const r=n.getAttribute(xe),i=r?r.split(","):[],s=[...i],o=Object.keys(e);for(const c of o){const a=e[c]||"";n.getAttribute(c)!==a&&n.setAttribute(c,a),i.indexOf(c)===-1&&i.push(c);const d=s.indexOf(c);d!==-1&&s.splice(d,1)}for(let c=s.length-1;c>=0;c-=1)n.removeAttribute(s[c]);i.length===s.length?n.removeAttribute(xe):n.getAttribute(xe)!==o.join(",")&&n.setAttribute(xe,o.join(","))},cu=(t,e)=>{typeof t<"u"&&document.title!==t&&(document.title=Fa(t)),yi("title",e)},Os=(t,e)=>{const{baseTag:n,bodyAttributes:r,htmlAttributes:i,linkTags:s,metaTags:o,noscriptTags:c,onChangeClientState:a,scriptTags:d,styleTags:u,title:h,titleAttributes:f}=t;yi("body",r),yi("html",i),cu(h,f);const m={baseTag:Dt("base",n),linkTags:Dt("link",s),metaTags:Dt("meta",o),noscriptTags:Dt("noscript",c),scriptTags:Dt("script",d),styleTags:Dt("style",u)},g={},x={};Object.keys(m).forEach(b=>{const{newTags:R,oldTags:w}=m[b];R.length&&(g[b]=R),w.length&&(x[b]=m[b].oldTags)}),e&&e(),a(t,g,x)},on=null,du=t=>{on&&cancelAnimationFrame(on),t.defer?on=requestAnimationFrame(()=>{Os(t,()=>{on=null})}):(Os(t),on=null)},uu=du,js=class extends S.Component{constructor(){super(...arguments);_e(this,"rendered",!1)}shouldComponentUpdate(e){return!Gd(e,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:e}=this.props.context;e.remove(this),this.emitChange()}emitChange(){const{helmetInstances:e,setHelmet:n}=this.props.context;let r=null;const i=Zd(e.get().map(s=>{const{context:o,...c}=s.props;return c}));Ha.canUseDOM?uu(i):pi&&(r=pi(i)),n(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:e}=this.props.context;e.add(this),this.emitChange()}render(){return this.init(),null}},qn=[],Ns=t=>{const e={};for(const n of Object.keys(t))e[Ma[n]||n]=t[n];return e},gt=t=>{const e={};for(const n of Object.keys(t)){const r=xr[n];e[r||n]=t[n]}return e},Ls=(t,e)=>{if(!qi)return;const n=document.getElementsByTagName(t)[0];if(!n)return;const r="data-rh-managed",i=n.getAttribute(r),s=i?i.split(","):[],o=Object.keys(e);for(const c of s)o.includes(c)||n.removeAttribute(c);for(const c of o){const a=e[c];a==null||a===!1?n.removeAttribute(c):a===!0?n.setAttribute(c,""):n.setAttribute(c,String(a))}o.length>0?n.setAttribute(r,o.join(",")):n.removeAttribute(r)},Br=()=>{const t={},e={};for(const n of qn){const{htmlAttributes:r,bodyAttributes:i}=n.props;r&&Object.assign(t,Ns(r)),i&&Object.assign(e,Ns(i))}Ls("html",t),Ls("body",e)},hu=class extends S.Component{componentDidMount(){qn.push(this),Br()}componentDidUpdate(){Br()}componentWillUnmount(){const t=qn.indexOf(this);t!==-1&&qn.splice(t,1),Br()}resolveTitle(){const{title:t,titleTemplate:e,defaultTitle:n}=this.props;return t&&e?e.replace(/%s/g,()=>Array.isArray(t)?t.join(""):t):t||n||void 0}renderTitle(){const t=this.resolveTitle();if(t===void 0)return null;const e=this.props.titleAttributes||{};return j.createElement("title",gt(e),t)}renderBase(){const{base:t}=this.props;return t?j.createElement("base",gt(t)):null}renderMeta(){const{meta:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>j.createElement("meta",{key:n,...gt(e)}))}renderLink(){const{link:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>j.createElement("link",{key:n,...gt(e)}))}renderScript(){const{script:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>{const{innerHTML:r,...i}=e,s=gt(i);return r&&(s.dangerouslySetInnerHTML={__html:r}),j.createElement("script",{key:n,...s})})}renderStyle(){const{style:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>{const{cssText:r,...i}=e,s=gt(i);return r&&(s.dangerouslySetInnerHTML={__html:r}),j.createElement("style",{key:n,...s})})}renderNoscript(){const{noscript:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>{const{innerHTML:r,...i}=e,s=gt(i);return r&&(s.dangerouslySetInnerHTML={__html:r}),j.createElement("noscript",{key:n,...s})})}render(){return j.createElement(j.Fragment,null,this.renderTitle(),this.renderBase(),this.renderMeta(),this.renderLink(),this.renderScript(),this.renderStyle(),this.renderNoscript())}},hi,fu=(hi=class extends S.Component{shouldComponentUpdate(t){return!Hd(ks(this.props,"helmetData"),ks(t,"helmetData"))}mapNestedChildrenToProps(t,e){if(!e)return null;switch(t.type){case"script":case"noscript":return{innerHTML:e};case"style":return{cssText:e};default:throw new Error(`<${t.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(t,e,n,r){return{...e,[t.type]:[...e[t.type]||[],{...n,...this.mapNestedChildrenToProps(t,r)}]}}mapObjectTypeChildren(t,e,n,r){switch(t.type){case"title":return{...e,[t.type]:r,titleAttributes:{...n}};case"body":return{...e,bodyAttributes:{...n}};case"html":return{...e,htmlAttributes:{...n}};default:return{...e,[t.type]:{...n}}}}mapArrayTypeChildrenToProps(t,e){let n={...e};return Object.keys(t).forEach(r=>{n={...n,[r]:t[r]}}),n}warnOnInvalidChildren(t,e){return Is(As.some(n=>t.type===n),typeof t.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${As.join(", ")} are allowed. Helmet does not support rendering <${t.type}> elements. Refer to our API for more information.`),Is(!e||typeof e=="string"||Array.isArray(e)&&!e.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${t.type}>. Did you forget to wrap your children in braces? ( <${t.type}>{\`\`}</${t.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(t,e){let n={};return j.Children.forEach(t,r=>{if(!r||!r.props)return;const{children:i,...s}=r.props,o=Object.keys(s).reduce((a,d)=>(a[Ma[d]||d]=s[d],a),{});let{type:c}=r;switch(typeof c=="symbol"?c=c.toString():this.warnOnInvalidChildren(r,i),c){case"Symbol(react.fragment)":e=this.mapChildrenToProps(i,e);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(r,n,o,i);break;default:e=this.mapObjectTypeChildren(r,e,o,i);break}}),this.mapArrayTypeChildrenToProps(n,e)}render(){const{children:t,...e}=this.props;let n={...e},{helmetData:r}=e;if(t&&(n=this.mapChildrenToProps(t,n)),r&&!(r instanceof mi)){const i=r;r=new mi(i.context,!0),delete n.helmetData}return gi?j.createElement(hu,{...n}):r?j.createElement(js,{...n,context:r.value}):j.createElement(Ba.Consumer,null,i=>j.createElement(js,{...n,context:i}))}},_e(hi,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),hi);const Ee={LIST:"ord_ls",ADD:"ord_add",IMPORT:"ord_imp",LIST_OWN:"ord_ls_own",LIST_SUB:"ord_ls_sub",LIST_ALL:"ord_ls_all"},fn={ROLE_LIST:"perm_role_ls",ROLE_ADD:"perm_role_add",ROLE_EDIT:"perm_role_edt",ROLE_DELETE:"perm_role_del",USER_LIST:"perm_asst_ls",USER_ADD:"perm_asst_add",USER_EDIT:"perm_asst_edt",USER_SUSPEND:"perm_asst_blk"};function pu(){return[...Object.values(Ee),...Object.values(fn)]}function mu(){return pu()}const gu=ld`
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
`;var yu=Object.defineProperty,sr=Object.getOwnPropertySymbols,Va=Object.prototype.hasOwnProperty,za=Object.prototype.propertyIsEnumerable,Ds=(t,e,n)=>e in t?yu(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,bi=(t,e)=>{for(var n in e||(e={}))Va.call(e,n)&&Ds(t,n,e[n]);if(sr)for(var n of sr(e))za.call(e,n)&&Ds(t,n,e[n]);return t},vi=(t,e)=>{var n={};for(var r in t)Va.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&sr)for(var r of sr(t))e.indexOf(r)<0&&za.call(t,r)&&(n[r]=t[r]);return n};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var Ct;(t=>{const e=class M{constructor(a,d,u,h){if(this.version=a,this.errorCorrectionLevel=d,this.modules=[],this.isFunction=[],a<M.MIN_VERSION||a>M.MAX_VERSION)throw new RangeError("Version value out of range");if(h<-1||h>7)throw new RangeError("Mask value out of range");this.size=a*4+17;let f=[];for(let g=0;g<this.size;g++)f.push(!1);for(let g=0;g<this.size;g++)this.modules.push(f.slice()),this.isFunction.push(f.slice());this.drawFunctionPatterns();const m=this.addEccAndInterleave(u);if(this.drawCodewords(m),h==-1){let g=1e9;for(let x=0;x<8;x++){this.applyMask(x),this.drawFormatBits(x);const b=this.getPenaltyScore();b<g&&(h=x,g=b),this.applyMask(x)}}i(0<=h&&h<=7),this.mask=h,this.applyMask(h),this.drawFormatBits(h),this.isFunction=[]}static encodeText(a,d){const u=t.QrSegment.makeSegments(a);return M.encodeSegments(u,d)}static encodeBinary(a,d){const u=t.QrSegment.makeBytes(a);return M.encodeSegments([u],d)}static encodeSegments(a,d,u=1,h=40,f=-1,m=!0){if(!(M.MIN_VERSION<=u&&u<=h&&h<=M.MAX_VERSION)||f<-1||f>7)throw new RangeError("Invalid value");let g,x;for(g=u;;g++){const v=M.getNumDataCodewords(g,d)*8,y=o.getTotalBits(a,g);if(y<=v){x=y;break}if(g>=h)throw new RangeError("Data too long")}for(const v of[M.Ecc.MEDIUM,M.Ecc.QUARTILE,M.Ecc.HIGH])m&&x<=M.getNumDataCodewords(g,v)*8&&(d=v);let b=[];for(const v of a){n(v.mode.modeBits,4,b),n(v.numChars,v.mode.numCharCountBits(g),b);for(const y of v.getData())b.push(y)}i(b.length==x);const R=M.getNumDataCodewords(g,d)*8;i(b.length<=R),n(0,Math.min(4,R-b.length),b),n(0,(8-b.length%8)%8,b),i(b.length%8==0);for(let v=236;b.length<R;v^=253)n(v,8,b);let w=[];for(;w.length*8<b.length;)w.push(0);return b.forEach((v,y)=>w[y>>>3]|=v<<7-(y&7)),new M(g,d,w,f)}getModule(a,d){return 0<=a&&a<this.size&&0<=d&&d<this.size&&this.modules[d][a]}getModules(){return this.modules}drawFunctionPatterns(){for(let u=0;u<this.size;u++)this.setFunctionModule(6,u,u%2==0),this.setFunctionModule(u,6,u%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const a=this.getAlignmentPatternPositions(),d=a.length;for(let u=0;u<d;u++)for(let h=0;h<d;h++)u==0&&h==0||u==0&&h==d-1||u==d-1&&h==0||this.drawAlignmentPattern(a[u],a[h]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(a){const d=this.errorCorrectionLevel.formatBits<<3|a;let u=d;for(let f=0;f<10;f++)u=u<<1^(u>>>9)*1335;const h=(d<<10|u)^21522;i(h>>>15==0);for(let f=0;f<=5;f++)this.setFunctionModule(8,f,r(h,f));this.setFunctionModule(8,7,r(h,6)),this.setFunctionModule(8,8,r(h,7)),this.setFunctionModule(7,8,r(h,8));for(let f=9;f<15;f++)this.setFunctionModule(14-f,8,r(h,f));for(let f=0;f<8;f++)this.setFunctionModule(this.size-1-f,8,r(h,f));for(let f=8;f<15;f++)this.setFunctionModule(8,this.size-15+f,r(h,f));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let a=this.version;for(let u=0;u<12;u++)a=a<<1^(a>>>11)*7973;const d=this.version<<12|a;i(d>>>18==0);for(let u=0;u<18;u++){const h=r(d,u),f=this.size-11+u%3,m=Math.floor(u/3);this.setFunctionModule(f,m,h),this.setFunctionModule(m,f,h)}}drawFinderPattern(a,d){for(let u=-4;u<=4;u++)for(let h=-4;h<=4;h++){const f=Math.max(Math.abs(h),Math.abs(u)),m=a+h,g=d+u;0<=m&&m<this.size&&0<=g&&g<this.size&&this.setFunctionModule(m,g,f!=2&&f!=4)}}drawAlignmentPattern(a,d){for(let u=-2;u<=2;u++)for(let h=-2;h<=2;h++)this.setFunctionModule(a+h,d+u,Math.max(Math.abs(h),Math.abs(u))!=1)}setFunctionModule(a,d,u){this.modules[d][a]=u,this.isFunction[d][a]=!0}addEccAndInterleave(a){const d=this.version,u=this.errorCorrectionLevel;if(a.length!=M.getNumDataCodewords(d,u))throw new RangeError("Invalid argument");const h=M.NUM_ERROR_CORRECTION_BLOCKS[u.ordinal][d],f=M.ECC_CODEWORDS_PER_BLOCK[u.ordinal][d],m=Math.floor(M.getNumRawDataModules(d)/8),g=h-m%h,x=Math.floor(m/h);let b=[];const R=M.reedSolomonComputeDivisor(f);for(let v=0,y=0;v<h;v++){let _=a.slice(y,y+x-f+(v<g?0:1));y+=_.length;const C=M.reedSolomonComputeRemainder(_,R);v<g&&_.push(0),b.push(_.concat(C))}let w=[];for(let v=0;v<b[0].length;v++)b.forEach((y,_)=>{(v!=x-f||_>=g)&&w.push(y[v])});return i(w.length==m),w}drawCodewords(a){if(a.length!=Math.floor(M.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let d=0;for(let u=this.size-1;u>=1;u-=2){u==6&&(u=5);for(let h=0;h<this.size;h++)for(let f=0;f<2;f++){const m=u-f,x=(u+1&2)==0?this.size-1-h:h;!this.isFunction[x][m]&&d<a.length*8&&(this.modules[x][m]=r(a[d>>>3],7-(d&7)),d++)}}i(d==a.length*8)}applyMask(a){if(a<0||a>7)throw new RangeError("Mask value out of range");for(let d=0;d<this.size;d++)for(let u=0;u<this.size;u++){let h;switch(a){case 0:h=(u+d)%2==0;break;case 1:h=d%2==0;break;case 2:h=u%3==0;break;case 3:h=(u+d)%3==0;break;case 4:h=(Math.floor(u/3)+Math.floor(d/2))%2==0;break;case 5:h=u*d%2+u*d%3==0;break;case 6:h=(u*d%2+u*d%3)%2==0;break;case 7:h=((u+d)%2+u*d%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[d][u]&&h&&(this.modules[d][u]=!this.modules[d][u])}}getPenaltyScore(){let a=0;for(let f=0;f<this.size;f++){let m=!1,g=0,x=[0,0,0,0,0,0,0];for(let b=0;b<this.size;b++)this.modules[f][b]==m?(g++,g==5?a+=M.PENALTY_N1:g>5&&a++):(this.finderPenaltyAddHistory(g,x),m||(a+=this.finderPenaltyCountPatterns(x)*M.PENALTY_N3),m=this.modules[f][b],g=1);a+=this.finderPenaltyTerminateAndCount(m,g,x)*M.PENALTY_N3}for(let f=0;f<this.size;f++){let m=!1,g=0,x=[0,0,0,0,0,0,0];for(let b=0;b<this.size;b++)this.modules[b][f]==m?(g++,g==5?a+=M.PENALTY_N1:g>5&&a++):(this.finderPenaltyAddHistory(g,x),m||(a+=this.finderPenaltyCountPatterns(x)*M.PENALTY_N3),m=this.modules[b][f],g=1);a+=this.finderPenaltyTerminateAndCount(m,g,x)*M.PENALTY_N3}for(let f=0;f<this.size-1;f++)for(let m=0;m<this.size-1;m++){const g=this.modules[f][m];g==this.modules[f][m+1]&&g==this.modules[f+1][m]&&g==this.modules[f+1][m+1]&&(a+=M.PENALTY_N2)}let d=0;for(const f of this.modules)d=f.reduce((m,g)=>m+(g?1:0),d);const u=this.size*this.size,h=Math.ceil(Math.abs(d*20-u*10)/u)-1;return i(0<=h&&h<=9),a+=h*M.PENALTY_N4,i(0<=a&&a<=2568888),a}getAlignmentPatternPositions(){if(this.version==1)return[];{const a=Math.floor(this.version/7)+2,d=this.version==32?26:Math.ceil((this.version*4+4)/(a*2-2))*2;let u=[6];for(let h=this.size-7;u.length<a;h-=d)u.splice(1,0,h);return u}}static getNumRawDataModules(a){if(a<M.MIN_VERSION||a>M.MAX_VERSION)throw new RangeError("Version number out of range");let d=(16*a+128)*a+64;if(a>=2){const u=Math.floor(a/7)+2;d-=(25*u-10)*u-55,a>=7&&(d-=36)}return i(208<=d&&d<=29648),d}static getNumDataCodewords(a,d){return Math.floor(M.getNumRawDataModules(a)/8)-M.ECC_CODEWORDS_PER_BLOCK[d.ordinal][a]*M.NUM_ERROR_CORRECTION_BLOCKS[d.ordinal][a]}static reedSolomonComputeDivisor(a){if(a<1||a>255)throw new RangeError("Degree out of range");let d=[];for(let h=0;h<a-1;h++)d.push(0);d.push(1);let u=1;for(let h=0;h<a;h++){for(let f=0;f<d.length;f++)d[f]=M.reedSolomonMultiply(d[f],u),f+1<d.length&&(d[f]^=d[f+1]);u=M.reedSolomonMultiply(u,2)}return d}static reedSolomonComputeRemainder(a,d){let u=d.map(h=>0);for(const h of a){const f=h^u.shift();u.push(0),d.forEach((m,g)=>u[g]^=M.reedSolomonMultiply(m,f))}return u}static reedSolomonMultiply(a,d){if(a>>>8||d>>>8)throw new RangeError("Byte out of range");let u=0;for(let h=7;h>=0;h--)u=u<<1^(u>>>7)*285,u^=(d>>>h&1)*a;return i(u>>>8==0),u}finderPenaltyCountPatterns(a){const d=a[1];i(d<=this.size*3);const u=d>0&&a[2]==d&&a[3]==d*3&&a[4]==d&&a[5]==d;return(u&&a[0]>=d*4&&a[6]>=d?1:0)+(u&&a[6]>=d*4&&a[0]>=d?1:0)}finderPenaltyTerminateAndCount(a,d,u){return a&&(this.finderPenaltyAddHistory(d,u),d=0),d+=this.size,this.finderPenaltyAddHistory(d,u),this.finderPenaltyCountPatterns(u)}finderPenaltyAddHistory(a,d){d[0]==0&&(a+=this.size),d.pop(),d.unshift(a)}};e.MIN_VERSION=1,e.MAX_VERSION=40,e.PENALTY_N1=3,e.PENALTY_N2=3,e.PENALTY_N3=40,e.PENALTY_N4=10,e.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],e.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],t.QrCode=e;function n(c,a,d){if(a<0||a>31||c>>>a)throw new RangeError("Value out of range");for(let u=a-1;u>=0;u--)d.push(c>>>u&1)}function r(c,a){return(c>>>a&1)!=0}function i(c){if(!c)throw new Error("Assertion error")}const s=class q{constructor(a,d,u){if(this.mode=a,this.numChars=d,this.bitData=u,d<0)throw new RangeError("Invalid argument");this.bitData=u.slice()}static makeBytes(a){let d=[];for(const u of a)n(u,8,d);return new q(q.Mode.BYTE,a.length,d)}static makeNumeric(a){if(!q.isNumeric(a))throw new RangeError("String contains non-numeric characters");let d=[];for(let u=0;u<a.length;){const h=Math.min(a.length-u,3);n(parseInt(a.substring(u,u+h),10),h*3+1,d),u+=h}return new q(q.Mode.NUMERIC,a.length,d)}static makeAlphanumeric(a){if(!q.isAlphanumeric(a))throw new RangeError("String contains unencodable characters in alphanumeric mode");let d=[],u;for(u=0;u+2<=a.length;u+=2){let h=q.ALPHANUMERIC_CHARSET.indexOf(a.charAt(u))*45;h+=q.ALPHANUMERIC_CHARSET.indexOf(a.charAt(u+1)),n(h,11,d)}return u<a.length&&n(q.ALPHANUMERIC_CHARSET.indexOf(a.charAt(u)),6,d),new q(q.Mode.ALPHANUMERIC,a.length,d)}static makeSegments(a){return a==""?[]:q.isNumeric(a)?[q.makeNumeric(a)]:q.isAlphanumeric(a)?[q.makeAlphanumeric(a)]:[q.makeBytes(q.toUtf8ByteArray(a))]}static makeEci(a){let d=[];if(a<0)throw new RangeError("ECI assignment value out of range");if(a<128)n(a,8,d);else if(a<16384)n(2,2,d),n(a,14,d);else if(a<1e6)n(6,3,d),n(a,21,d);else throw new RangeError("ECI assignment value out of range");return new q(q.Mode.ECI,0,d)}static isNumeric(a){return q.NUMERIC_REGEX.test(a)}static isAlphanumeric(a){return q.ALPHANUMERIC_REGEX.test(a)}getData(){return this.bitData.slice()}static getTotalBits(a,d){let u=0;for(const h of a){const f=h.mode.numCharCountBits(d);if(h.numChars>=1<<f)return 1/0;u+=4+f+h.bitData.length}return u}static toUtf8ByteArray(a){a=encodeURI(a);let d=[];for(let u=0;u<a.length;u++)a.charAt(u)!="%"?d.push(a.charCodeAt(u)):(d.push(parseInt(a.substring(u+1,u+3),16)),u+=2);return d}};s.NUMERIC_REGEX=/^[0-9]*$/,s.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,s.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";let o=s;t.QrSegment=s})(Ct||(Ct={}));(t=>{(e=>{const n=class{constructor(i,s){this.ordinal=i,this.formatBits=s}};n.LOW=new n(0,1),n.MEDIUM=new n(1,0),n.QUARTILE=new n(2,3),n.HIGH=new n(3,2),e.Ecc=n})(t.QrCode||(t.QrCode={}))})(Ct||(Ct={}));(t=>{(e=>{const n=class{constructor(i,s){this.modeBits=i,this.numBitsCharCount=s}numCharCountBits(i){return this.numBitsCharCount[Math.floor((i+7)/17)]}};n.NUMERIC=new n(1,[10,12,14]),n.ALPHANUMERIC=new n(2,[9,11,13]),n.BYTE=new n(4,[8,16,16]),n.KANJI=new n(8,[8,10,12]),n.ECI=new n(7,[0,0,0]),e.Mode=n})(t.QrSegment||(t.QrSegment={}))})(Ct||(Ct={}));var Bt=Ct;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var bu={L:Bt.QrCode.Ecc.LOW,M:Bt.QrCode.Ecc.MEDIUM,Q:Bt.QrCode.Ecc.QUARTILE,H:Bt.QrCode.Ecc.HIGH},Wa=128,qa="L",Ga="#FFFFFF",Ka="#000000",Ya=!1,Ja=1,vu=4,wu=0,xu=.1;function Xa(t,e=0){const n=[];return t.forEach(function(r,i){let s=null;r.forEach(function(o,c){if(!o&&s!==null){n.push(`M${s+e} ${i+e}h${c-s}v1H${s+e}z`),s=null;return}if(c===r.length-1){if(!o)return;s===null?n.push(`M${c+e},${i+e} h1v1H${c+e}z`):n.push(`M${s+e},${i+e} h${c+1-s}v1H${s+e}z`);return}o&&s===null&&(s=c)})}),n.join("")}function Qa(t,e){return t.slice().map((n,r)=>r<e.y||r>=e.y+e.h?n:n.map((i,s)=>s<e.x||s>=e.x+e.w?i:!1))}function Eu(t,e,n,r){if(r==null)return null;const i=t.length+n*2,s=Math.floor(e*xu),o=i/e,c=(r.width||s)*o,a=(r.height||s)*o,d=r.x==null?t.length/2-c/2:r.x*o,u=r.y==null?t.length/2-a/2:r.y*o,h=r.opacity==null?1:r.opacity;let f=null;if(r.excavate){let g=Math.floor(d),x=Math.floor(u),b=Math.ceil(c+d-g),R=Math.ceil(a+u-x);f={x:g,y:x,w:b,h:R}}const m=r.crossOrigin;return{x:d,y:u,h:a,w:c,excavation:f,opacity:h,crossOrigin:m}}function Su(t,e){return e!=null?Math.max(Math.floor(e),0):t?vu:wu}function Za({value:t,level:e,minVersion:n,includeMargin:r,marginSize:i,imageSettings:s,size:o,boostLevel:c}){let a=j.useMemo(()=>{const g=(Array.isArray(t)?t:[t]).reduce((x,b)=>(x.push(...Bt.QrSegment.makeSegments(b)),x),[]);return Bt.QrCode.encodeSegments(g,bu[e],n,void 0,void 0,c)},[t,e,n,c]);const{cells:d,margin:u,numCells:h,calculatedImageSettings:f}=j.useMemo(()=>{let m=a.getModules();const g=Su(r,i),x=m.length+g*2,b=Eu(m,o,g,s);return{cells:m,margin:g,numCells:x,calculatedImageSettings:b}},[a,o,s,r,i]);return{qrcode:a,margin:u,cells:d,numCells:h,calculatedImageSettings:f}}var Tu=(function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0})(),Ru=j.forwardRef(function(e,n){const r=e,{value:i,size:s=Wa,level:o=qa,bgColor:c=Ga,fgColor:a=Ka,includeMargin:d=Ya,minVersion:u=Ja,boostLevel:h,marginSize:f,imageSettings:m}=r,x=vi(r,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","marginSize","imageSettings"]),{style:b}=x,R=vi(x,["style"]),w=m==null?void 0:m.src,v=j.useRef(null),y=j.useRef(null),_=j.useCallback(te=>{v.current=te,typeof n=="function"?n(te):n&&(n.current=te)},[n]),[C,P]=j.useState(!1),{margin:A,cells:F,numCells:W,calculatedImageSettings:L}=Za({value:i,level:o,minVersion:u,boostLevel:h,includeMargin:d,marginSize:f,imageSettings:m,size:s});j.useEffect(()=>{if(v.current!=null){const te=v.current,X=te.getContext("2d");if(!X)return;let ne=F;const de=y.current,re=L!=null&&de!==null&&de.complete&&de.naturalHeight!==0&&de.naturalWidth!==0;re&&L.excavation!=null&&(ne=Qa(F,L.excavation));const oe=window.devicePixelRatio||1;te.height=te.width=s*oe;const ue=s/W*oe;X.scale(ue,ue),X.fillStyle=c,X.fillRect(0,0,W,W),X.fillStyle=a,Tu?X.fill(new Path2D(Xa(ne,A))):F.forEach(function(ht,jn){ht.forEach(function(Re,Q){Re&&X.fillRect(Q+A,jn+A,1,1)})}),L&&(X.globalAlpha=L.opacity),re&&X.drawImage(de,L.x+A,L.y+A,L.w,L.h)}}),j.useEffect(()=>{P(!1)},[w]);const K=bi({height:s,width:s},b);let ee=null;return w!=null&&(ee=j.createElement("img",{src:w,key:w,style:{display:"none"},onLoad:()=>{P(!0)},ref:y,crossOrigin:L==null?void 0:L.crossOrigin})),j.createElement(j.Fragment,null,j.createElement("canvas",bi({style:K,height:s,width:s,ref:_,role:"img"},R)),ee)});Ru.displayName="QRCodeCanvas";var el=j.forwardRef(function(e,n){const r=e,{value:i,size:s=Wa,level:o=qa,bgColor:c=Ga,fgColor:a=Ka,includeMargin:d=Ya,minVersion:u=Ja,boostLevel:h,title:f,marginSize:m,imageSettings:g}=r,x=vi(r,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","title","marginSize","imageSettings"]),{margin:b,cells:R,numCells:w,calculatedImageSettings:v}=Za({value:i,level:o,minVersion:u,boostLevel:h,includeMargin:d,marginSize:m,imageSettings:g,size:s});let y=R,_=null;g!=null&&v!=null&&(v.excavation!=null&&(y=Qa(R,v.excavation)),_=j.createElement("image",{href:g.src,height:v.h,width:v.w,x:v.x+b,y:v.y+b,preserveAspectRatio:"none",opacity:v.opacity,crossOrigin:v.crossOrigin}));const C=Xa(y,b);return j.createElement("svg",bi({height:s,width:s,viewBox:`0 0 ${w} ${w}`,ref:n,role:"img"},x),!!f&&j.createElement("title",null,f),j.createElement("path",{fill:c,d:`M0,0 h${w}v${w}H0z`,shapeRendering:"crispEdges"}),j.createElement("path",{fill:a,d:C,shapeRendering:"crispEdges"}),_)});el.displayName="QRCodeSVG";function _u(){if(console&&console.warn){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];Tt(e[0])&&(e[0]=`react-i18next:: ${e[0]}`),console.warn(...e)}}const Ms={};function wi(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];Tt(e[0])&&Ms[e[0]]||(Tt(e[0])&&(Ms[e[0]]=new Date),_u(...e))}const tl=(t,e)=>()=>{if(t.isInitialized)e();else{const n=()=>{setTimeout(()=>{t.off("initialized",n)},0),e()};t.on("initialized",n)}},Fs=(t,e,n)=>{t.loadNamespaces(e,tl(t,n))},Us=(t,e,n,r)=>{Tt(n)&&(n=[n]),n.forEach(i=>{t.options.ns.indexOf(i)<0&&t.options.ns.push(i)}),t.loadLanguages(e,tl(t,r))},Cu=function(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const r=e.languages[0],i=e.options?e.options.fallbackLng:!1,s=e.languages[e.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const o=(c,a)=>{const d=e.services.backendConnector.state[`${c}|${a}`];return d===-1||d===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!o(e.isLanguageChangingTo,t)?!1:!!(e.hasResourceBundle(r,t)||!e.services.backendConnector.backend||e.options.resources&&!e.options.partialBundledLanguages||o(r,t)&&(!i||o(s,t)))},Iu=function(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!e.languages||!e.languages.length?(wi("i18n.languages were undefined or empty",e.languages),!0):e.options.ignoreJSONStructure!==void 0?e.hasLoadedNamespace(t,{lng:n.lng,precheck:(i,s)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&i.services.backendConnector.backend&&i.isLanguageChangingTo&&!s(i.isLanguageChangingTo,t))return!1}}):Cu(t,e,n)},Tt=t=>typeof t=="string",Pu=t=>typeof t=="object"&&t!==null,Au=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,ku={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},Ou=t=>ku[t],ju=t=>t.replace(Au,Ou);let xi={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:ju};const Nu=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};xi={...xi,...t}},Lu=()=>xi;let nl;const Du=t=>{nl=t},Mu=()=>nl,Fu={type:"3rdParty",init(t){Nu(t.options.react),Du(t)}},Uu=S.createContext();class $u{constructor(){_e(this,"getUsedNamespaces",()=>Object.keys(this.usedNamespaces));this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}}const Bu=(t,e)=>{const n=S.useRef();return S.useEffect(()=>{n.current=t},[t,e]),n.current},rl=(t,e,n,r)=>t.getFixedT(e,n,r),Hu=(t,e,n,r)=>S.useCallback(rl(t,e,n,r),[t,e,n,r]),Gi=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{i18n:n}=e,{i18n:r,defaultNS:i}=S.useContext(Uu)||{},s=n||r||Mu();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new $u),!s){wi("You will need to pass in an i18next instance by using initReactI18next");const y=(C,P)=>Tt(P)?P:Pu(P)&&Tt(P.defaultValue)?P.defaultValue:Array.isArray(C)?C[C.length-1]:C,_=[y,{},!1];return _.t=y,_.i18n={},_.ready=!1,_}s.options.react&&s.options.react.wait!==void 0&&wi("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const o={...Lu(),...s.options.react,...e},{useSuspense:c,keyPrefix:a}=o;let d=t||i||s.options&&s.options.defaultNS;d=Tt(d)?[d]:d||["translation"],s.reportNamespaces.addUsedNamespaces&&s.reportNamespaces.addUsedNamespaces(d);const u=(s.isInitialized||s.initializedStoreOnce)&&d.every(y=>Iu(y,s,o)),h=Hu(s,e.lng||null,o.nsMode==="fallback"?d:d[0],a),f=()=>h,m=()=>rl(s,e.lng||null,o.nsMode==="fallback"?d:d[0],a),[g,x]=S.useState(f);let b=d.join();e.lng&&(b=`${e.lng}${b}`);const R=Bu(b),w=S.useRef(!0);S.useEffect(()=>{const{bindI18n:y,bindI18nStore:_}=o;w.current=!0,!u&&!c&&(e.lng?Us(s,e.lng,d,()=>{w.current&&x(m)}):Fs(s,d,()=>{w.current&&x(m)})),u&&R&&R!==b&&w.current&&x(m);const C=()=>{w.current&&x(m)};return y&&s&&s.on(y,C),_&&s&&s.store.on(_,C),()=>{w.current=!1,y&&s&&y.split(" ").forEach(P=>s.off(P,C)),_&&s&&_.split(" ").forEach(P=>s.store.off(P,C))}},[s,b]),S.useEffect(()=>{w.current&&u&&x(f)},[s,a,u]);const v=[g,s,u];if(v.t=g,v.i18n=s,v.ready=u,u||!u&&!c)return v;throw new Promise(y=>{e.lng?Us(s,e.lng,d,()=>y()):Fs(s,d,()=>y())})},il={portalLogin:"FF_PORTAL_LOGIN",guestTrack:"FF_GUEST_TRACK",aboutPage:"FF_ABOUT_PAGE",aboutV1:"FF_ABOUT_V1",homeAudienceSwitch:"FF_HOME_AUDIENCE_SWITCH",consigneeTrack:"FF_CONSIGNEE_TRACK",loginDestinations:"FF_LOGIN_DESTINATIONS",nextStopMap:"FF_NEXT_STOP_MAP"},sl="/portal/login";function lt(t){if(typeof window>"u")return!1;const e=il[t],n=new URLSearchParams(window.location.search);if(n.has(e))return n.get(e)==="true";try{return localStorage.getItem(e)==="true"}catch{return!1}}function Vu(){if(typeof window>"u")return;const t=new URLSearchParams(window.location.search);for(const e of Object.values(il))if(t.has(e))try{localStorage.setItem(e,t.get(e)==="true"?"true":"false")}catch{}}function $s(t){return lt(t)}function Ki(){return lt("portalLogin")?sl:"/"}const Bs=Object.freeze({production:"https://app.senditgo.com",uat:"https://tms-uat.senditgo.com",development:"https://tms-dev.holieninnovation.com.tw"}),zu="/fleet/login",Wu="/company/login",qu=Object.freeze({development:"https://tms-dev.holieninnovation.com.tw/company/login"});function ol(t,e,n){const r=Object.prototype.hasOwnProperty.call(Bs,e)?Bs[e]:null;if(!r||typeof t!="string"||t.trim()==="")return null;let i;try{i=new URL(t.trim())}catch{return null}return i.protocol!=="https:"||i.username||i.password||i.origin!==r||i.pathname!==n||i.search!==""||i.hash!==""?null:`${i.origin}${i.pathname}`}function Gu(t,e){return ol(t,e,zu)}function Ku(t,e){return ol(t,e,Wu)}function Yu(t){const e=[];if(t.portalLoginOn&&e.push({role:"shipper",href:sl,external:!1}),t.loginDestinationsOn){const n=Gu(t.carrierLoginUrl,t.mode);n&&e.push({role:"carrier",href:n,external:!0});const r=Ku(t.consigneeLoginUrl,t.mode);r&&e.push({role:"consignee",href:r,external:!0})}return e}function Qx(t,e){return typeof t!="string"||!t.startsWith("/")||t.startsWith("//")||t.startsWith("/\\")||[...t].some(n=>n.charCodeAt(0)<32)?e:t}function Yi(){const t=$s("portalLogin"),e=$s("loginDestinations");return Yu({portalLoginOn:t,loginDestinationsOn:e,carrierLoginUrl:"https://app.senditgo.com/fleet/login",consigneeLoginUrl:qu.production,mode:"production"})}const k=t=>typeof t=="string",an=()=>{let t,e;const n=new Promise((r,i)=>{t=r,e=i});return n.resolve=t,n.reject=e,n},Hs=t=>t==null?"":""+t,Ju=(t,e,n)=>{t.forEach(r=>{e[r]&&(n[r]=e[r])})},Xu=/###/g,Vs=t=>t&&t.indexOf("###")>-1?t.replace(Xu,"."):t,zs=t=>!t||k(t),pn=(t,e,n)=>{const r=k(e)?e.split("."):e;let i=0;for(;i<r.length-1;){if(zs(t))return{};const s=Vs(r[i]);!t[s]&&n&&(t[s]=new n),Object.prototype.hasOwnProperty.call(t,s)?t=t[s]:t={},++i}return zs(t)?{}:{obj:t,k:Vs(r[i])}},Ws=(t,e,n)=>{const{obj:r,k:i}=pn(t,e,Object);if(r!==void 0||e.length===1){r[i]=n;return}let s=e[e.length-1],o=e.slice(0,e.length-1),c=pn(t,o,Object);for(;c.obj===void 0&&o.length;)s=`${o[o.length-1]}.${s}`,o=o.slice(0,o.length-1),c=pn(t,o,Object),c&&c.obj&&typeof c.obj[`${c.k}.${s}`]<"u"&&(c.obj=void 0);c.obj[`${c.k}.${s}`]=n},Qu=(t,e,n,r)=>{const{obj:i,k:s}=pn(t,e,Object);i[s]=i[s]||[],i[s].push(n)},or=(t,e)=>{const{obj:n,k:r}=pn(t,e);if(n)return n[r]},Zu=(t,e,n)=>{const r=or(t,n);return r!==void 0?r:or(e,n)},al=(t,e,n)=>{for(const r in e)r!=="__proto__"&&r!=="constructor"&&(r in t?k(t[r])||t[r]instanceof String||k(e[r])||e[r]instanceof String?n&&(t[r]=e[r]):al(t[r],e[r],n):t[r]=e[r]);return t},Mt=t=>t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var eh={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const th=t=>k(t)?t.replace(/[&<>"'\/]/g,e=>eh[e]):t;class nh{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const n=this.regExpMap.get(e);if(n!==void 0)return n;const r=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,r),this.regExpQueue.push(e),r}}const rh=[" ",",","?","!",";"],ih=new nh(20),sh=(t,e,n)=>{e=e||"",n=n||"";const r=rh.filter(o=>e.indexOf(o)<0&&n.indexOf(o)<0);if(r.length===0)return!0;const i=ih.getRegExp(`(${r.map(o=>o==="?"?"\\?":o).join("|")})`);let s=!i.test(t);if(!s){const o=t.indexOf(n);o>0&&!i.test(t.substring(0,o))&&(s=!0)}return s},Ei=function(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!t)return;if(t[e])return t[e];const r=e.split(n);let i=t;for(let s=0;s<r.length;){if(!i||typeof i!="object")return;let o,c="";for(let a=s;a<r.length;++a)if(a!==s&&(c+=n),c+=r[a],o=i[c],o!==void 0){if(["string","number","boolean"].indexOf(typeof o)>-1&&a<r.length-1)continue;s+=a-s+1;break}i=o}return i},ar=t=>t&&t.replace("_","-"),oh={type:"logger",log(t){this.output("log",t)},warn(t){this.output("warn",t)},error(t){this.output("error",t)},output(t,e){console&&console[t]&&console[t].apply(console,e)}};let ah=class Si{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,n)}init(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=n.prefix||"i18next:",this.logger=e||oh,this.options=n,this.debug=n.debug}log(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return this.forward(n,"log","",!0)}warn(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return this.forward(n,"warn","",!0)}error(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return this.forward(n,"error","")}deprecate(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return this.forward(n,"warn","WARNING DEPRECATED: ",!0)}forward(e,n,r,i){return i&&!this.debug?null:(k(e[0])&&(e[0]=`${r}${this.prefix} ${e[0]}`),this.logger[n](e))}create(e){return new Si(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new Si(this.logger,e)}};var Pe=new ah;class Er{constructor(){this.observers={}}on(e,n){return e.split(" ").forEach(r=>{this.observers[r]||(this.observers[r]=new Map);const i=this.observers[r].get(n)||0;this.observers[r].set(n,i+1)}),this}off(e,n){if(this.observers[e]){if(!n){delete this.observers[e];return}this.observers[e].delete(n)}}emit(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(o=>{let[c,a]=o;for(let d=0;d<a;d++)c(...r)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(o=>{let[c,a]=o;for(let d=0;d<a;d++)c.apply(c,[e,...r])})}}class qs extends Er{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const n=this.options.ns.indexOf(e);n>-1&&this.options.ns.splice(n,1)}getResource(e,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const s=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,o=i.ignoreJSONStructure!==void 0?i.ignoreJSONStructure:this.options.ignoreJSONStructure;let c;e.indexOf(".")>-1?c=e.split("."):(c=[e,n],r&&(Array.isArray(r)?c.push(...r):k(r)&&s?c.push(...r.split(s)):c.push(r)));const a=or(this.data,c);return!a&&!n&&!r&&e.indexOf(".")>-1&&(e=c[0],n=c[1],r=c.slice(2).join(".")),a||!o||!k(r)?a:Ei(this.data&&this.data[e]&&this.data[e][n],r,s)}addResource(e,n,r,i){let s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const o=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator;let c=[e,n];r&&(c=c.concat(o?r.split(o):r)),e.indexOf(".")>-1&&(c=e.split("."),i=n,n=c[1]),this.addNamespaces(n),Ws(this.data,c,i),s.silent||this.emit("added",e,n,r,i)}addResources(e,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const s in r)(k(r[s])||Array.isArray(r[s]))&&this.addResource(e,n,s,r[s],{silent:!0});i.silent||this.emit("added",e,n,r)}addResourceBundle(e,n,r,i,s){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},c=[e,n];e.indexOf(".")>-1&&(c=e.split("."),i=r,r=n,n=c[1]),this.addNamespaces(n);let a=or(this.data,c)||{};o.skipCopy||(r=JSON.parse(JSON.stringify(r))),i?al(a,r,s):a={...a,...r},Ws(this.data,c,a),o.silent||this.emit("added",e,n,r)}removeResourceBundle(e,n){this.hasResourceBundle(e,n)&&delete this.data[e][n],this.removeNamespaces(n),this.emit("removed",e,n)}hasResourceBundle(e,n){return this.getResource(e,n)!==void 0}getResourceBundle(e,n){return n||(n=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(e,n)}:this.getResource(e,n)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const n=this.getDataByLanguage(e);return!!(n&&Object.keys(n)||[]).find(i=>n[i]&&Object.keys(n[i]).length>0)}toJSON(){return this.data}}var ll={processors:{},addPostProcessor(t){this.processors[t.name]=t},handle(t,e,n,r,i){return t.forEach(s=>{this.processors[s]&&(e=this.processors[s].process(e,n,r,i))}),e}};const Gs={};class lr extends Er{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),Ju(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Pe.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const r=this.resolve(e,n);return r&&r.res!==void 0}extractFromKey(e,n){let r=n.nsSeparator!==void 0?n.nsSeparator:this.options.nsSeparator;r===void 0&&(r=":");const i=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let s=n.ns||this.options.defaultNS||[];const o=r&&e.indexOf(r)>-1,c=!this.options.userDefinedKeySeparator&&!n.keySeparator&&!this.options.userDefinedNsSeparator&&!n.nsSeparator&&!sh(e,r,i);if(o&&!c){const a=e.match(this.interpolator.nestingRegexp);if(a&&a.length>0)return{key:e,namespaces:k(s)?[s]:s};const d=e.split(r);(r!==i||r===i&&this.options.ns.indexOf(d[0])>-1)&&(s=d.shift()),e=d.join(i)}return{key:e,namespaces:k(s)?[s]:s}}translate(e,n,r){if(typeof n!="object"&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),typeof n=="object"&&(n={...n}),n||(n={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const i=n.returnDetails!==void 0?n.returnDetails:this.options.returnDetails,s=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,{key:o,namespaces:c}=this.extractFromKey(e[e.length-1],n),a=c[c.length-1],d=n.lng||this.language,u=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(d&&d.toLowerCase()==="cimode"){if(u){const y=n.nsSeparator||this.options.nsSeparator;return i?{res:`${a}${y}${o}`,usedKey:o,exactUsedKey:o,usedLng:d,usedNS:a,usedParams:this.getUsedParamsDetails(n)}:`${a}${y}${o}`}return i?{res:o,usedKey:o,exactUsedKey:o,usedLng:d,usedNS:a,usedParams:this.getUsedParamsDetails(n)}:o}const h=this.resolve(e,n);let f=h&&h.res;const m=h&&h.usedKey||o,g=h&&h.exactUsedKey||o,x=Object.prototype.toString.apply(f),b=["[object Number]","[object Function]","[object RegExp]"],R=n.joinArrays!==void 0?n.joinArrays:this.options.joinArrays,w=!this.i18nFormat||this.i18nFormat.handleAsObject,v=!k(f)&&typeof f!="boolean"&&typeof f!="number";if(w&&f&&v&&b.indexOf(x)<0&&!(k(R)&&Array.isArray(f))){if(!n.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const y=this.options.returnedObjectHandler?this.options.returnedObjectHandler(m,f,{...n,ns:c}):`key '${o} (${this.language})' returned an object instead of string.`;return i?(h.res=y,h.usedParams=this.getUsedParamsDetails(n),h):y}if(s){const y=Array.isArray(f),_=y?[]:{},C=y?g:m;for(const P in f)if(Object.prototype.hasOwnProperty.call(f,P)){const A=`${C}${s}${P}`;_[P]=this.translate(A,{...n,joinArrays:!1,ns:c}),_[P]===A&&(_[P]=f[P])}f=_}}else if(w&&k(R)&&Array.isArray(f))f=f.join(R),f&&(f=this.extendTranslation(f,e,n,r));else{let y=!1,_=!1;const C=n.count!==void 0&&!k(n.count),P=lr.hasDefaultValue(n),A=C?this.pluralResolver.getSuffix(d,n.count,n):"",F=n.ordinal&&C?this.pluralResolver.getSuffix(d,n.count,{ordinal:!1}):"",W=C&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),L=W&&n[`defaultValue${this.options.pluralSeparator}zero`]||n[`defaultValue${A}`]||n[`defaultValue${F}`]||n.defaultValue;!this.isValidLookup(f)&&P&&(y=!0,f=L),this.isValidLookup(f)||(_=!0,f=o);const ee=(n.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&_?void 0:f,te=P&&L!==f&&this.options.updateMissing;if(_||y||te){if(this.logger.log(te?"updateKey":"missingKey",d,a,o,te?L:f),s){const re=this.resolve(o,{...n,keySeparator:!1});re&&re.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let X=[];const ne=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if(this.options.saveMissingTo==="fallback"&&ne&&ne[0])for(let re=0;re<ne.length;re++)X.push(ne[re]);else this.options.saveMissingTo==="all"?X=this.languageUtils.toResolveHierarchy(n.lng||this.language):X.push(n.lng||this.language);const de=(re,oe,ue)=>{const ht=P&&ue!==f?ue:ee;this.options.missingKeyHandler?this.options.missingKeyHandler(re,a,oe,ht,te,n):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(re,a,oe,ht,te,n),this.emit("missingKey",re,a,oe,f)};this.options.saveMissing&&(this.options.saveMissingPlurals&&C?X.forEach(re=>{const oe=this.pluralResolver.getSuffixes(re,n);W&&n[`defaultValue${this.options.pluralSeparator}zero`]&&oe.indexOf(`${this.options.pluralSeparator}zero`)<0&&oe.push(`${this.options.pluralSeparator}zero`),oe.forEach(ue=>{de([re],o+ue,n[`defaultValue${ue}`]||L)})}):de(X,o,L))}f=this.extendTranslation(f,e,n,h,r),_&&f===o&&this.options.appendNamespaceToMissingKey&&(f=`${a}:${o}`),(_||y)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?f=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${a}:${o}`:o,y?f:void 0):f=this.options.parseMissingKeyHandler(f))}return i?(h.res=f,h.usedParams=this.getUsedParamsDetails(n),h):f}extendTranslation(e,n,r,i,s){var o=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...r},r.lng||this.language||i.usedLng,i.usedNS,i.usedKey,{resolved:i});else if(!r.skipInterpolation){r.interpolation&&this.interpolator.init({...r,interpolation:{...this.options.interpolation,...r.interpolation}});const d=k(e)&&(r&&r.interpolation&&r.interpolation.skipOnVariables!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let u;if(d){const f=e.match(this.interpolator.nestingRegexp);u=f&&f.length}let h=r.replace&&!k(r.replace)?r.replace:r;if(this.options.interpolation.defaultVariables&&(h={...this.options.interpolation.defaultVariables,...h}),e=this.interpolator.interpolate(e,h,r.lng||this.language||i.usedLng,r),d){const f=e.match(this.interpolator.nestingRegexp),m=f&&f.length;u<m&&(r.nest=!1)}!r.lng&&this.options.compatibilityAPI!=="v1"&&i&&i.res&&(r.lng=this.language||i.usedLng),r.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var f=arguments.length,m=new Array(f),g=0;g<f;g++)m[g]=arguments[g];return s&&s[0]===m[0]&&!r.context?(o.logger.warn(`It seems you are nesting recursively key: ${m[0]} in key: ${n[0]}`),null):o.translate(...m,n)},r)),r.interpolation&&this.interpolator.reset()}const c=r.postProcess||this.options.postProcess,a=k(c)?[c]:c;return e!=null&&a&&a.length&&r.applyPostProcessor!==!1&&(e=ll.handle(a,e,n,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...i,usedParams:this.getUsedParamsDetails(r)},...r}:r,this)),e}resolve(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r,i,s,o,c;return k(e)&&(e=[e]),e.forEach(a=>{if(this.isValidLookup(r))return;const d=this.extractFromKey(a,n),u=d.key;i=u;let h=d.namespaces;this.options.fallbackNS&&(h=h.concat(this.options.fallbackNS));const f=n.count!==void 0&&!k(n.count),m=f&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),g=n.context!==void 0&&(k(n.context)||typeof n.context=="number")&&n.context!=="",x=n.lngs?n.lngs:this.languageUtils.toResolveHierarchy(n.lng||this.language,n.fallbackLng);h.forEach(b=>{this.isValidLookup(r)||(c=b,!Gs[`${x[0]}-${b}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(c)&&(Gs[`${x[0]}-${b}`]=!0,this.logger.warn(`key "${i}" for languages "${x.join(", ")}" won't get resolved as namespace "${c}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),x.forEach(R=>{if(this.isValidLookup(r))return;o=R;const w=[u];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(w,u,R,b,n);else{let y;f&&(y=this.pluralResolver.getSuffix(R,n.count,n));const _=`${this.options.pluralSeparator}zero`,C=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(f&&(w.push(u+y),n.ordinal&&y.indexOf(C)===0&&w.push(u+y.replace(C,this.options.pluralSeparator)),m&&w.push(u+_)),g){const P=`${u}${this.options.contextSeparator}${n.context}`;w.push(P),f&&(w.push(P+y),n.ordinal&&y.indexOf(C)===0&&w.push(P+y.replace(C,this.options.pluralSeparator)),m&&w.push(P+_))}}let v;for(;v=w.pop();)this.isValidLookup(r)||(s=v,r=this.getResource(R,b,v,n))}))})}),{res:r,usedKey:i,exactUsedKey:s,usedLng:o,usedNS:c}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,n,r,i):this.resourceStore.getResource(e,n,r,i)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],r=e.replace&&!k(e.replace);let i=r?e.replace:e;if(r&&typeof e.count<"u"&&(i.count=e.count),this.options.interpolation.defaultVariables&&(i={...this.options.interpolation.defaultVariables,...i}),!r){i={...i};for(const s of n)delete i[s]}return i}static hasDefaultValue(e){const n="defaultValue";for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&n===r.substring(0,n.length)&&e[r]!==void 0)return!0;return!1}}const Hr=t=>t.charAt(0).toUpperCase()+t.slice(1);class Ks{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Pe.create("languageUtils")}getScriptPartFromCode(e){if(e=ar(e),!e||e.indexOf("-")<0)return null;const n=e.split("-");return n.length===2||(n.pop(),n[n.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(n.join("-"))}getLanguagePartFromCode(e){if(e=ar(e),!e||e.indexOf("-")<0)return e;const n=e.split("-");return this.formatLanguageCode(n[0])}formatLanguageCode(e){if(k(e)&&e.indexOf("-")>-1){if(typeof Intl<"u"&&typeof Intl.getCanonicalLocales<"u")try{let i=Intl.getCanonicalLocales(e)[0];if(i&&this.options.lowerCaseLng&&(i=i.toLowerCase()),i)return i}catch{}const n=["hans","hant","latn","cyrl","cans","mong","arab"];let r=e.split("-");return this.options.lowerCaseLng?r=r.map(i=>i.toLowerCase()):r.length===2?(r[0]=r[0].toLowerCase(),r[1]=r[1].toUpperCase(),n.indexOf(r[1].toLowerCase())>-1&&(r[1]=Hr(r[1].toLowerCase()))):r.length===3&&(r[0]=r[0].toLowerCase(),r[1].length===2&&(r[1]=r[1].toUpperCase()),r[0]!=="sgn"&&r[2].length===2&&(r[2]=r[2].toUpperCase()),n.indexOf(r[1].toLowerCase())>-1&&(r[1]=Hr(r[1].toLowerCase())),n.indexOf(r[2].toLowerCase())>-1&&(r[2]=Hr(r[2].toLowerCase()))),r.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let n;return e.forEach(r=>{if(n)return;const i=this.formatLanguageCode(r);(!this.options.supportedLngs||this.isSupportedCode(i))&&(n=i)}),!n&&this.options.supportedLngs&&e.forEach(r=>{if(n)return;const i=this.getLanguagePartFromCode(r);if(this.isSupportedCode(i))return n=i;n=this.options.supportedLngs.find(s=>{if(s===i)return s;if(!(s.indexOf("-")<0&&i.indexOf("-")<0)&&(s.indexOf("-")>0&&i.indexOf("-")<0&&s.substring(0,s.indexOf("-"))===i||s.indexOf(i)===0&&i.length>1))return s})}),n||(n=this.getFallbackCodes(this.options.fallbackLng)[0]),n}getFallbackCodes(e,n){if(!e)return[];if(typeof e=="function"&&(e=e(n)),k(e)&&(e=[e]),Array.isArray(e))return e;if(!n)return e.default||[];let r=e[n];return r||(r=e[this.getScriptPartFromCode(n)]),r||(r=e[this.formatLanguageCode(n)]),r||(r=e[this.getLanguagePartFromCode(n)]),r||(r=e.default),r||[]}toResolveHierarchy(e,n){const r=this.getFallbackCodes(n||this.options.fallbackLng||[],e),i=[],s=o=>{o&&(this.isSupportedCode(o)?i.push(o):this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`))};return k(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&s(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&s(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&s(this.getLanguagePartFromCode(e))):k(e)&&s(this.formatLanguageCode(e)),r.forEach(o=>{i.indexOf(o)<0&&s(this.formatLanguageCode(o))}),i}}let lh=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],ch={1:t=>+(t>1),2:t=>+(t!=1),3:t=>0,4:t=>t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,5:t=>t==0?0:t==1?1:t==2?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5,6:t=>t==1?0:t>=2&&t<=4?1:2,7:t=>t==1?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,8:t=>t==1?0:t==2?1:t!=8&&t!=11?2:3,9:t=>+(t>=2),10:t=>t==1?0:t==2?1:t<7?2:t<11?3:4,11:t=>t==1||t==11?0:t==2||t==12?1:t>2&&t<20?2:3,12:t=>+(t%10!=1||t%100==11),13:t=>+(t!==0),14:t=>t==1?0:t==2?1:t==3?2:3,15:t=>t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2,16:t=>t%10==1&&t%100!=11?0:t!==0?1:2,17:t=>t==1||t%10==1&&t%100!=11?0:1,18:t=>t==0?0:t==1?1:2,19:t=>t==1?0:t==0||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3,20:t=>t==1?0:t==0||t%100>0&&t%100<20?1:2,21:t=>t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0,22:t=>t==1?0:t==2?1:(t<0||t>10)&&t%10==0?2:3};const dh=["v1","v2","v3"],uh=["v4"],Ys={zero:0,one:1,two:2,few:3,many:4,other:5},hh=()=>{const t={};return lh.forEach(e=>{e.lngs.forEach(n=>{t[n]={numbers:e.nr,plurals:ch[e.fc]}})}),t};class fh{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=n,this.logger=Pe.create("pluralResolver"),(!this.options.compatibilityJSON||uh.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=hh(),this.pluralRulesCache={}}addRule(e,n){this.rules[e]=n}clearCache(){this.pluralRulesCache={}}getRule(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi()){const r=ar(e==="dev"?"en":e),i=n.ordinal?"ordinal":"cardinal",s=JSON.stringify({cleanedCode:r,type:i});if(s in this.pluralRulesCache)return this.pluralRulesCache[s];let o;try{o=new Intl.PluralRules(r,{type:i})}catch{if(!e.match(/-|_/))return;const a=this.languageUtils.getLanguagePartFromCode(e);o=this.getRule(a,n)}return this.pluralRulesCache[s]=o,o}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getRule(e,n);return this.shouldUseIntlApi()?r&&r.resolvedOptions().pluralCategories.length>1:r&&r.numbers.length>1}getPluralFormsOfKey(e,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,r).map(i=>`${n}${i}`)}getSuffixes(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getRule(e,n);return r?this.shouldUseIntlApi()?r.resolvedOptions().pluralCategories.sort((i,s)=>Ys[i]-Ys[s]).map(i=>`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${i}`):r.numbers.map(i=>this.getSuffix(e,i,n)):[]}getSuffix(e,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const i=this.getRule(e,r);return i?this.shouldUseIntlApi()?`${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${i.select(n)}`:this.getSuffixRetroCompatible(i,n):(this.logger.warn(`no plural rule found for: ${e}`),"")}getSuffixRetroCompatible(e,n){const r=e.noAbs?e.plurals(n):e.plurals(Math.abs(n));let i=e.numbers[r];this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1&&(i===2?i="plural":i===1&&(i=""));const s=()=>this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString();return this.options.compatibilityJSON==="v1"?i===1?"":typeof i=="number"?`_plural_${i.toString()}`:s():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1?s():this.options.prepend&&r.toString()?this.options.prepend+r.toString():r.toString()}shouldUseIntlApi(){return!dh.includes(this.options.compatibilityJSON)}}const Js=function(t,e,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,s=Zu(t,e,n);return!s&&i&&k(n)&&(s=Ei(t,n,r),s===void 0&&(s=Ei(e,n,r))),s},Vr=t=>t.replace(/\$/g,"$$$$");class ph{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Pe.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||(n=>n),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:n,escapeValue:r,useRawValueToEscape:i,prefix:s,prefixEscaped:o,suffix:c,suffixEscaped:a,formatSeparator:d,unescapeSuffix:u,unescapePrefix:h,nestingPrefix:f,nestingPrefixEscaped:m,nestingSuffix:g,nestingSuffixEscaped:x,nestingOptionsSeparator:b,maxReplaces:R,alwaysFormat:w}=e.interpolation;this.escape=n!==void 0?n:th,this.escapeValue=r!==void 0?r:!0,this.useRawValueToEscape=i!==void 0?i:!1,this.prefix=s?Mt(s):o||"{{",this.suffix=c?Mt(c):a||"}}",this.formatSeparator=d||",",this.unescapePrefix=u?"":h||"-",this.unescapeSuffix=this.unescapePrefix?"":u||"",this.nestingPrefix=f?Mt(f):m||Mt("$t("),this.nestingSuffix=g?Mt(g):x||Mt(")"),this.nestingOptionsSeparator=b||",",this.maxReplaces=R||1e3,this.alwaysFormat=w!==void 0?w:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(n,r)=>n&&n.source===r?(n.lastIndex=0,n):new RegExp(r,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,n,r,i){let s,o,c;const a=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},d=m=>{if(m.indexOf(this.formatSeparator)<0){const R=Js(n,a,m,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(R,void 0,r,{...i,...n,interpolationkey:m}):R}const g=m.split(this.formatSeparator),x=g.shift().trim(),b=g.join(this.formatSeparator).trim();return this.format(Js(n,a,x,this.options.keySeparator,this.options.ignoreJSONStructure),b,r,{...i,...n,interpolationkey:x})};this.resetRegExp();const u=i&&i.missingInterpolationHandler||this.options.missingInterpolationHandler,h=i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:m=>Vr(m)},{regex:this.regexp,safeValue:m=>this.escapeValue?Vr(this.escape(m)):Vr(m)}].forEach(m=>{for(c=0;s=m.regex.exec(e);){const g=s[1].trim();if(o=d(g),o===void 0)if(typeof u=="function"){const b=u(e,s,i);o=k(b)?b:""}else if(i&&Object.prototype.hasOwnProperty.call(i,g))o="";else if(h){o=s[0];continue}else this.logger.warn(`missed to pass in variable ${g} for interpolating ${e}`),o="";else!k(o)&&!this.useRawValueToEscape&&(o=Hs(o));const x=m.safeValue(o);if(e=e.replace(s[0],x),h?(m.regex.lastIndex+=o.length,m.regex.lastIndex-=s[0].length):m.regex.lastIndex=0,c++,c>=this.maxReplaces)break}}),e}nest(e,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i,s,o;const c=(a,d)=>{const u=this.nestingOptionsSeparator;if(a.indexOf(u)<0)return a;const h=a.split(new RegExp(`${u}[ ]*{`));let f=`{${h[1]}`;a=h[0],f=this.interpolate(f,o);const m=f.match(/'/g),g=f.match(/"/g);(m&&m.length%2===0&&!g||g.length%2!==0)&&(f=f.replace(/'/g,'"'));try{o=JSON.parse(f),d&&(o={...d,...o})}catch(x){return this.logger.warn(`failed parsing options string in nesting for key ${a}`,x),`${a}${u}${f}`}return o.defaultValue&&o.defaultValue.indexOf(this.prefix)>-1&&delete o.defaultValue,a};for(;i=this.nestingRegexp.exec(e);){let a=[];o={...r},o=o.replace&&!k(o.replace)?o.replace:o,o.applyPostProcessor=!1,delete o.defaultValue;let d=!1;if(i[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(i[1])){const u=i[1].split(this.formatSeparator).map(h=>h.trim());i[1]=u.shift(),a=u,d=!0}if(s=n(c.call(this,i[1].trim(),o),o),s&&i[0]===e&&!k(s))return s;k(s)||(s=Hs(s)),s||(this.logger.warn(`missed to resolve ${i[1]} for nesting ${e}`),s=""),d&&(s=a.reduce((u,h)=>this.format(u,h,r.lng,{...r,interpolationkey:i[1].trim()}),s.trim())),e=e.replace(i[0],s),this.regexp.lastIndex=0}return e}}const mh=t=>{let e=t.toLowerCase().trim();const n={};if(t.indexOf("(")>-1){const r=t.split("(");e=r[0].toLowerCase().trim();const i=r[1].substring(0,r[1].length-1);e==="currency"&&i.indexOf(":")<0?n.currency||(n.currency=i.trim()):e==="relativetime"&&i.indexOf(":")<0?n.range||(n.range=i.trim()):i.split(";").forEach(o=>{if(o){const[c,...a]=o.split(":"),d=a.join(":").trim().replace(/^'+|'+$/g,""),u=c.trim();n[u]||(n[u]=d),d==="false"&&(n[u]=!1),d==="true"&&(n[u]=!0),isNaN(d)||(n[u]=parseInt(d,10))}})}return{formatName:e,formatOptions:n}},Ft=t=>{const e={};return(n,r,i)=>{let s=i;i&&i.interpolationkey&&i.formatParams&&i.formatParams[i.interpolationkey]&&i[i.interpolationkey]&&(s={...s,[i.interpolationkey]:void 0});const o=r+JSON.stringify(s);let c=e[o];return c||(c=t(ar(r),i),e[o]=c),c(n)}};class gh{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Pe.create("formatter"),this.options=e,this.formats={number:Ft((n,r)=>{const i=new Intl.NumberFormat(n,{...r});return s=>i.format(s)}),currency:Ft((n,r)=>{const i=new Intl.NumberFormat(n,{...r,style:"currency"});return s=>i.format(s)}),datetime:Ft((n,r)=>{const i=new Intl.DateTimeFormat(n,{...r});return s=>i.format(s)}),relativetime:Ft((n,r)=>{const i=new Intl.RelativeTimeFormat(n,{...r});return s=>i.format(s,r.range||"day")}),list:Ft((n,r)=>{const i=new Intl.ListFormat(n,{...r});return s=>i.format(s)})},this.init(e)}init(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=n.interpolation.formatSeparator||","}add(e,n){this.formats[e.toLowerCase().trim()]=n}addCached(e,n){this.formats[e.toLowerCase().trim()]=Ft(n)}format(e,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const s=n.split(this.formatSeparator);if(s.length>1&&s[0].indexOf("(")>1&&s[0].indexOf(")")<0&&s.find(c=>c.indexOf(")")>-1)){const c=s.findIndex(a=>a.indexOf(")")>-1);s[0]=[s[0],...s.splice(1,c)].join(this.formatSeparator)}return s.reduce((c,a)=>{const{formatName:d,formatOptions:u}=mh(a);if(this.formats[d]){let h=c;try{const f=i&&i.formatParams&&i.formatParams[i.interpolationkey]||{},m=f.locale||f.lng||i.locale||i.lng||r;h=this.formats[d](c,m,{...u,...i,...f})}catch(f){this.logger.warn(f)}return h}else this.logger.warn(`there was no format function for ${d}`);return c},e)}}const yh=(t,e)=>{t.pending[e]!==void 0&&(delete t.pending[e],t.pendingCount--)};class bh extends Er{constructor(e,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=n,this.services=r,this.languageUtils=r.languageUtils,this.options=i,this.logger=Pe.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=i.maxParallelReads||10,this.readingCalls=0,this.maxRetries=i.maxRetries>=0?i.maxRetries:5,this.retryTimeout=i.retryTimeout>=1?i.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(r,i.backend,i)}queueLoad(e,n,r,i){const s={},o={},c={},a={};return e.forEach(d=>{let u=!0;n.forEach(h=>{const f=`${d}|${h}`;!r.reload&&this.store.hasResourceBundle(d,h)?this.state[f]=2:this.state[f]<0||(this.state[f]===1?o[f]===void 0&&(o[f]=!0):(this.state[f]=1,u=!1,o[f]===void 0&&(o[f]=!0),s[f]===void 0&&(s[f]=!0),a[h]===void 0&&(a[h]=!0)))}),u||(c[d]=!0)}),(Object.keys(s).length||Object.keys(o).length)&&this.queue.push({pending:o,pendingCount:Object.keys(o).length,loaded:{},errors:[],callback:i}),{toLoad:Object.keys(s),pending:Object.keys(o),toLoadLanguages:Object.keys(c),toLoadNamespaces:Object.keys(a)}}loaded(e,n,r){const i=e.split("|"),s=i[0],o=i[1];n&&this.emit("failedLoading",s,o,n),!n&&r&&this.store.addResourceBundle(s,o,r,void 0,void 0,{skipCopy:!0}),this.state[e]=n?-1:2,n&&r&&(this.state[e]=0);const c={};this.queue.forEach(a=>{Qu(a.loaded,[s],o),yh(a,e),n&&a.errors.push(n),a.pendingCount===0&&!a.done&&(Object.keys(a.loaded).forEach(d=>{c[d]||(c[d]={});const u=a.loaded[d];u.length&&u.forEach(h=>{c[d][h]===void 0&&(c[d][h]=!0)})}),a.done=!0,a.errors.length?a.callback(a.errors):a.callback())}),this.emit("loaded",c),this.queue=this.queue.filter(a=>!a.done)}read(e,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,o=arguments.length>5?arguments[5]:void 0;if(!e.length)return o(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:n,fcName:r,tried:i,wait:s,callback:o});return}this.readingCalls++;const c=(d,u)=>{if(this.readingCalls--,this.waitingReads.length>0){const h=this.waitingReads.shift();this.read(h.lng,h.ns,h.fcName,h.tried,h.wait,h.callback)}if(d&&u&&i<this.maxRetries){setTimeout(()=>{this.read.call(this,e,n,r,i+1,s*2,o)},s);return}o(d,u)},a=this.backend[r].bind(this.backend);if(a.length===2){try{const d=a(e,n);d&&typeof d.then=="function"?d.then(u=>c(null,u)).catch(c):c(null,d)}catch(d){c(d)}return}return a(e,n,c)}prepareLoading(e,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),i&&i();k(e)&&(e=this.languageUtils.toResolveHierarchy(e)),k(n)&&(n=[n]);const s=this.queueLoad(e,n,r,i);if(!s.toLoad.length)return s.pending.length||i(),null;s.toLoad.forEach(o=>{this.loadOne(o)})}load(e,n,r){this.prepareLoading(e,n,{},r)}reload(e,n,r){this.prepareLoading(e,n,{reload:!0},r)}loadOne(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const r=e.split("|"),i=r[0],s=r[1];this.read(i,s,"read",void 0,void 0,(o,c)=>{o&&this.logger.warn(`${n}loading namespace ${s} for language ${i} failed`,o),!o&&c&&this.logger.log(`${n}loaded namespace ${s} for language ${i}`,c),this.loaded(e,o,c)})}saveMissing(e,n,r,i,s){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},c=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(n)){this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(r==null||r==="")){if(this.backend&&this.backend.create){const a={...o,isUpdate:s},d=this.backend.create.bind(this.backend);if(d.length<6)try{let u;d.length===5?u=d(e,n,r,i,a):u=d(e,n,r,i),u&&typeof u.then=="function"?u.then(h=>c(null,h)).catch(c):c(null,u)}catch(u){c(u)}else d(e,n,r,i,c,a)}!e||!e[0]||this.store.addResource(e[0],n,r,i)}}}const Xs=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:t=>{let e={};if(typeof t[1]=="object"&&(e=t[1]),k(t[1])&&(e.defaultValue=t[1]),k(t[2])&&(e.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const n=t[3]||t[2];Object.keys(n).forEach(r=>{e[r]=n[r]})}return e},interpolation:{escapeValue:!0,format:t=>t,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),Qs=t=>(k(t.ns)&&(t.ns=[t.ns]),k(t.fallbackLng)&&(t.fallbackLng=[t.fallbackLng]),k(t.fallbackNS)&&(t.fallbackNS=[t.fallbackNS]),t.supportedLngs&&t.supportedLngs.indexOf("cimode")<0&&(t.supportedLngs=t.supportedLngs.concat(["cimode"])),t),Un=()=>{},vh=t=>{Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(n=>{typeof t[n]=="function"&&(t[n]=t[n].bind(t))})};class vn extends Er{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;if(super(),this.options=Qs(e),this.services={},this.logger=Pe,this.modules={external:[]},vh(this),n&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,n),this;setTimeout(()=>{this.init(e,n)},0)}}init(){var e=this;let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof n=="function"&&(r=n,n={}),!n.defaultNS&&n.defaultNS!==!1&&n.ns&&(k(n.ns)?n.defaultNS=n.ns:n.ns.indexOf("translation")<0&&(n.defaultNS=n.ns[0]));const i=Xs();this.options={...i,...this.options,...Qs(n)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...i.interpolation,...this.options.interpolation}),n.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=n.keySeparator),n.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=n.nsSeparator);const s=u=>u?typeof u=="function"?new u:u:null;if(!this.options.isClone){this.modules.logger?Pe.init(s(this.modules.logger),this.options):Pe.init(null,this.options);let u;this.modules.formatter?u=this.modules.formatter:typeof Intl<"u"&&(u=gh);const h=new Ks(this.options);this.store=new qs(this.options.resources,this.options);const f=this.services;f.logger=Pe,f.resourceStore=this.store,f.languageUtils=h,f.pluralResolver=new fh(h,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),u&&(!this.options.interpolation.format||this.options.interpolation.format===i.interpolation.format)&&(f.formatter=s(u),f.formatter.init(f,this.options),this.options.interpolation.format=f.formatter.format.bind(f.formatter)),f.interpolator=new ph(this.options),f.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},f.backendConnector=new bh(s(this.modules.backend),f.resourceStore,f,this.options),f.backendConnector.on("*",function(m){for(var g=arguments.length,x=new Array(g>1?g-1:0),b=1;b<g;b++)x[b-1]=arguments[b];e.emit(m,...x)}),this.modules.languageDetector&&(f.languageDetector=s(this.modules.languageDetector),f.languageDetector.init&&f.languageDetector.init(f,this.options.detection,this.options)),this.modules.i18nFormat&&(f.i18nFormat=s(this.modules.i18nFormat),f.i18nFormat.init&&f.i18nFormat.init(this)),this.translator=new lr(this.services,this.options),this.translator.on("*",function(m){for(var g=arguments.length,x=new Array(g>1?g-1:0),b=1;b<g;b++)x[b-1]=arguments[b];e.emit(m,...x)}),this.modules.external.forEach(m=>{m.init&&m.init(this)})}if(this.format=this.options.interpolation.format,r||(r=Un),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const u=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);u.length>0&&u[0]!=="dev"&&(this.options.lng=u[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(u=>{this[u]=function(){return e.store[u](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(u=>{this[u]=function(){return e.store[u](...arguments),e}});const a=an(),d=()=>{const u=(h,f)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),a.resolve(f),r(h,f)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return u(null,this.t.bind(this));this.changeLanguage(this.options.lng,u)};return this.options.resources||!this.options.initImmediate?d():setTimeout(d,0),a}loadResources(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Un;const i=k(e)?e:this.language;if(typeof e=="function"&&(r=e),!this.options.resources||this.options.partialBundledLanguages){if(i&&i.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return r();const s=[],o=c=>{if(!c||c==="cimode")return;this.services.languageUtils.toResolveHierarchy(c).forEach(d=>{d!=="cimode"&&s.indexOf(d)<0&&s.push(d)})};i?o(i):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(a=>o(a)),this.options.preload&&this.options.preload.forEach(c=>o(c)),this.services.backendConnector.load(s,this.options.ns,c=>{!c&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),r(c)})}else r(null)}reloadResources(e,n,r){const i=an();return typeof e=="function"&&(r=e,e=void 0),typeof n=="function"&&(r=n,n=void 0),e||(e=this.languages),n||(n=this.options.ns),r||(r=Un),this.services.backendConnector.reload(e,n,s=>{i.resolve(),r(s)}),i}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&ll.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let n=0;n<this.languages.length;n++){const r=this.languages[n];if(!(["cimode","dev"].indexOf(r)>-1)&&this.store.hasLanguageSomeTranslations(r)){this.resolvedLanguage=r;break}}}changeLanguage(e,n){var r=this;this.isLanguageChangingTo=e;const i=an();this.emit("languageChanging",e);const s=a=>{this.language=a,this.languages=this.services.languageUtils.toResolveHierarchy(a),this.resolvedLanguage=void 0,this.setResolvedLanguage(a)},o=(a,d)=>{d?(s(d),this.translator.changeLanguage(d),this.isLanguageChangingTo=void 0,this.emit("languageChanged",d),this.logger.log("languageChanged",d)):this.isLanguageChangingTo=void 0,i.resolve(function(){return r.t(...arguments)}),n&&n(a,function(){return r.t(...arguments)})},c=a=>{!e&&!a&&this.services.languageDetector&&(a=[]);const d=k(a)?a:this.services.languageUtils.getBestMatchFromCodes(a);d&&(this.language||s(d),this.translator.language||this.translator.changeLanguage(d),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(d)),this.loadResources(d,u=>{o(u,d)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?c(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(c):this.services.languageDetector.detect(c):c(e),i}getFixedT(e,n,r){var i=this;const s=function(o,c){let a;if(typeof c!="object"){for(var d=arguments.length,u=new Array(d>2?d-2:0),h=2;h<d;h++)u[h-2]=arguments[h];a=i.options.overloadTranslationOptionHandler([o,c].concat(u))}else a={...c};a.lng=a.lng||s.lng,a.lngs=a.lngs||s.lngs,a.ns=a.ns||s.ns,a.keyPrefix!==""&&(a.keyPrefix=a.keyPrefix||r||s.keyPrefix);const f=i.options.keySeparator||".";let m;return a.keyPrefix&&Array.isArray(o)?m=o.map(g=>`${a.keyPrefix}${f}${g}`):m=a.keyPrefix?`${a.keyPrefix}${f}${o}`:o,i.t(m,a)};return k(e)?s.lng=e:s.lngs=e,s.ns=n,s.keyPrefix=r,s}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const r=n.lng||this.resolvedLanguage||this.languages[0],i=this.options?this.options.fallbackLng:!1,s=this.languages[this.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const o=(c,a)=>{const d=this.services.backendConnector.state[`${c}|${a}`];return d===-1||d===0||d===2};if(n.precheck){const c=n.precheck(this,o);if(c!==void 0)return c}return!!(this.hasResourceBundle(r,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||o(r,e)&&(!i||o(s,e)))}loadNamespaces(e,n){const r=an();return this.options.ns?(k(e)&&(e=[e]),e.forEach(i=>{this.options.ns.indexOf(i)<0&&this.options.ns.push(i)}),this.loadResources(i=>{r.resolve(),n&&n(i)}),r):(n&&n(),Promise.resolve())}loadLanguages(e,n){const r=an();k(e)&&(e=[e]);const i=this.options.preload||[],s=e.filter(o=>i.indexOf(o)<0&&this.services.languageUtils.isSupportedCode(o));return s.length?(this.options.preload=i.concat(s),this.loadResources(o=>{r.resolve(),n&&n(o)}),r):(n&&n(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";const n=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],r=this.services&&this.services.languageUtils||new Ks(Xs());return n.indexOf(r.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return new vn(e,n)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Un;const r=e.forkResourceStore;r&&delete e.forkResourceStore;const i={...this.options,...e,isClone:!0},s=new vn(i);return(e.debug!==void 0||e.prefix!==void 0)&&(s.logger=s.logger.clone(e)),["store","services","language"].forEach(c=>{s[c]=this[c]}),s.services={...this.services},s.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},r&&(s.store=new qs(this.store.data,i),s.services.resourceStore=s.store),s.translator=new lr(s.services,i),s.translator.on("*",function(c){for(var a=arguments.length,d=new Array(a>1?a-1:0),u=1;u<a;u++)d[u-1]=arguments[u];s.emit(c,...d)}),s.init(i,n),s.translator.options=i,s.translator.backendConnector.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},s}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const se=vn.createInstance();se.createInstance=vn.createInstance;se.createInstance;se.dir;se.init;se.loadResources;se.reloadResources;se.use;se.changeLanguage;se.getFixedT;se.t;se.exists;se.setDefaultNamespace;se.hasLoadedNamespace;se.loadNamespaces;se.loadLanguages;const wh="Sign In",xh="Sign Out",Eh="Orders",Sh="Language",Th="Loading",Rh="Retry",_h="Cancel",Ch="Get early access",Ih="Account Menu",Ph="SenditGo home",Ah="Toggle theme",kh="Clear form",Oh={shipper:{label:"Shipper",hint:"Create, import and track your orders"},carrier:{label:"Carrier",hint:"SenditGo Carrier fleet console",login:"Carrier login"},consignee:{label:"Consignee",hint:"Sign in to SenditGo Consignee",login:"Consignee login"}},jh="Carrier login",Nh={signIn:wh,signOut:xh,orders:Eh,language:Sh,loading:Th,retry:Rh,cancel:_h,getEarlyAccess:Ch,accountMenu:Ih,brandHome:Ph,toggleTheme:Ah,clearForm:kh,loginRole:Oh,carrierLogin:jh},Lh={eyebrow:"Tenant Portal"},Dh={ariaLabel:"Platform Navigation",platform:"Platform",groups:{operations:"Operations",finance:"Finance",admin:"Admin"},orders:"Orders",createOrder:"Create Order",importOrders:"Import Orders",billing:"Billing",usersRoles:"Users & Roles"},Mh={title:"Sign in to {{brand}}",lead:"Track orders, create shipments, and manage your team.",mobileLabel:"Mobile Number",mobilePlaceholder:"412 345 678",sendCode:"Send Code",otpLabel:"Verification Code",otpHint:"Enter the 6-digit code sent to {{phone}}.",verify:"Verify & Sign In",resend:"Resend Code",changeNumber:"Change Number",invalidPhone:"Enter a valid mobile number.",invalidOtp:"Enter the 6-digit code.",otpFailed:"That code didn't match. Check it and try again.",sendFailed:"We couldn't send the code. Try again in a moment.",loginFailed:"Sign-in failed. Try again.",devSignIn:"Dev Sign-In (Mock)"},Fh={title:"Orders",lead:"Find shipments, review status, and open the tracking detail without leaving the platform.",searchLabel:"Search",searchPlaceholder:"Order ID",statusLabel:"Status",allStatuses:"All statuses",applyFilters:"Apply",clearFilters:"Clear",colOrderId:"Order ID",colRoute:"Route",colCreated:"Created",colPackages:"Packages",colStatus:"Status",colActions:"Actions",viewDetails:"View",empty:"No orders match this view.",loadFailed:"We couldn't load your orders.",showingRange:"Showing {{from}}-{{to}} of {{total}}",prevPage:"Previous",nextPage:"Next",detailTitle:"Order {{id}}",detailLead:"Tracking detail, contact handoff, driver assignment, and package state.",detailLoadFailed:"We couldn't load this order.",backToOrders:"Back to orders",sender:"Sender",recipient:"Recipient",timeline:"Timeline",driver:"Driver",comment:"Comment",packagesTitle:"Packages",packageId:"Package ID",packageSize:"Size",packageWeight:"Weight",packagePrice:"Price",packageAbbrev:"pkgs",notAssigned:"Not assigned",none:"None",routeTo:"to",emptyFiltered:"No orders match these filters.",pickup:"Pickup",delivery:"Delivery",timezone:"Timezone",sizeCm:"{{length}} x {{width}} x {{height}} cm",weightKg:"{{weight}} kg"},Uh={title:"Create Order",lead:"Prepare a shipment draft with sender, recipient, package, and delivery notes.",sectionContact:"Contact Details",sectionPackage:"Package",senderName:"Sender Name",senderAddress:"Sender Address",senderMobile:"Sender Mobile",senderPostcode:"Sender Postcode",recipientName:"Recipient Name",recipientAddress:"Recipient Address",recipientMobile:"Recipient Mobile",recipientPostcode:"Recipient Postcode",packages:"Packages",weight:"Weight (kg)",reference:"Reference",notes:"Driver Notes",prepareDraft:"Prepare Draft",draftReady:"Your draft is complete and validated.",required:"Complete sender, recipient, addresses, and at least one package.",backendNotice:"Online order creation is coming soon. You can prepare and validate a draft here today."},$h={title:"Import Orders",lead:"Upload a fleet-template CSV to open a preview session. Commit is not live yet.",uploadLabel:"CSV File",chooseFile:"Choose file",downloadTemplate:"Download template",columnsTitle:"Template",columnsBody:"Use the fleet import template (invoice, customer, sender and recipient address parts, SKU, qty, weight, and size). A 6-column file will not open a session.",previewTitle:"Preview session",sessionTitle:"Session {{id}}",sessionFile:"{{name}}",sessionCounts:"{{valid}} valid · {{invalid}} invalid · {{total}} rows",rowsParsed:"{{count}} row parsed",rowsParsed_other:"{{count}} rows parsed",backendNotice:"Online batch import is not live yet. Upload opens a mock preview session from the fleet CSV template — it does not create orders or price them.",previewEmpty:"Upload a fleet-template CSV to open a preview session.",noRows:"That file has no order rows. Add at least one row below the header and try again.",missingColumns:"The file is missing required columns: {{columns}}.",parseFailed:"We couldn't read that file. Export it as CSV and try again.",fileFormat:"Use a .csv exported from the fleet template.",uploadFailed:"We couldn't open a preview session. Try again.",templateFailed:"We couldn't download the template. Try again.",jobMissing:"That preview session is no longer available. Upload the file again.",clearSession:"Clear session",filterAll:"All",filterValid:"Valid",filterInvalid:"Invalid",colInvoice:"Invoice",colRoute:"Route",colPickup:"Pickup",colDelivery:"Delivery",colQty:"Qty",colWeight:"Weight",colReason:"Reason",rowValid:"Valid",rowInvalid:"Invalid"},Bh={title:"Users & Roles",lead:"Manage who can sign in to the portal and what each role can do.",usersTitle:"Users",name:"Name",email:"Email",role:"Role",status:"Status",actions:"Actions",active:"Active",inactive:"Inactive",you:"You",usersEmpty:"No users yet — add your first teammate.",usersLoadFailed:"We couldn't load users.",editUser:"Edit",saveUser:"Save",userUpdated:"{{name}}'s role is now {{role}}.",userUpdateFailed:"We couldn't update that user. Try again.",addUserTitle:"Add User",addUser:"Add User",addUserRequired:"Enter a name and pick a role.",addUserSuccess:"{{name}} has been added.",addUserFailed:"We couldn't add that user. Try again.",rolesTitle:"Roles",permissions:"Permissions",members:"Members",rolesEmpty:"No roles yet — create your first role.",rolesLoadFailed:"We couldn't load roles.",createRole:"Create Role",editRole:"Edit",deleteRole:"Delete",deleteConfirm:"Delete this role?",confirmDelete:"Confirm Delete",roleDeleted:"Role deleted.",deleteFailed:"We couldn't delete that role. Try again.",deleteBlocked_one:"Reassign {{count}} user before deleting this role.",deleteBlocked_other:"Reassign {{count}} users before deleting this role.",systemRole:"Built-in",roleFormCreateTitle:"Create Role",roleFormEditTitle:"Edit Role",roleFormLead:"Name the role and choose what it can do.",roleName:"Role Name",roleFormRequired:"Enter a role name and pick at least one permission.",roleFormSaveFailed:"We couldn't save the role. Try again.",roleFormLoadFailed:"We couldn't load that role.",roleFormNotFound:"This role was not found.",backToAdmin:"Back to Users & Roles",saveChanges:"Save Changes",groupOrders:"Orders",groupUsers:"Users",groupRoles:"Roles",selectRole:"Select a role",rolesUnavailable:"We couldn't load roles for selection.",roleFormSystem:"Built-in roles can't be edited.",invitePhone:"Mobile Number",pending:"Pending",resend:"Resend",revoke:"Revoke",suspend:"Suspend",reactivate:"Reactivate",suspended:"Suspended",activityTitle:"Activity",audit:{roleChanged:"{{actor}} changed {{target}}'s role to {{role}}",suspended:"{{actor}} suspended {{target}}",reactivated:"{{actor}} reactivated {{target}}",invited:"{{actor}} invited {{phone}} as {{role}}",inviteRevoked:"{{actor}} revoked the invite for {{phone}}",inviteResent:"{{actor}} resent the invite to {{phone}}",roleCreated:"{{actor}} created the role {{role}}",roleUpdated:"{{actor}} updated the role {{role}}",roleDeleted:"{{actor}} deleted the role {{role}}"},lastOwnerBlock:"You're the only owner. Assign another owner first.",selfDemoteConfirm:"You'll lose {{capabilities}}.",scopeOwn:"My Orders",scopeCompany:"Company Orders",inviteSectionTitle:"Invite by Phone",sendInvite:"Send Invite",inviteRequired:"Enter a valid +61 mobile number and choose a role.",inviteSentNotice:"Invite sent to {{phone}}.",inviteSendFailed:"We couldn't send that invite. Try again.",inviteResendFailed:"We couldn't resend that invite. Try again.",inviteRevokeFailed:"We couldn't revoke that invite. Try again.",invitesLoadFailed:"We couldn't load pending invites.",invitesEmpty:"No pending invites.",expiresOn:"Expires"},Hh={title:"Billing & Payments",lead:"How your account is billed, and the payment methods we support.",methodsTitle:"Payment Methods",status:{available:"Available",pending:"Coming Soon"},methods:{"on-account":{name:"On Account / Invoice",body:"Orders placed in the portal are billed to your company account and settled by invoice — no payment step at order time."},"stripe-card":{name:"Card Payments via Stripe",body:"Pay for orders by card, processed by Stripe. The portal integration is prepared and switches on once the payment API and account keys are issued."}},howTitle:"How Card Payments Will Work",how:{secure:{title:"Card details stay with Stripe",body:"Card numbers are entered in Stripe-hosted secure fields (Stripe Elements) and never touch SenditGo servers, keeping PCI compliance scope with Stripe."},intent:{title:"The backend creates the payment",body:"For each payment, the SenditGo backend creates a Stripe PaymentIntent for the order total and hands the portal its client secret."},confirm:{title:"The portal confirms it",body:"The portal confirms the payment with the per-environment publishable key; bank verification (3-D Secure) is handled by Stripe automatically when required."},receipt:{title:"Receipts flow back to the order",body:"Stripe notifies the backend by webhook, and the payment status and receipt attach to the order in your history."}},readinessTitle:"Integration status:",readinessBody:"The portal side is prepared — provider registry, per-environment key slots, and this page. Card payments switch on when the backend payment API is live and the Stripe keys are configured; on-account billing continues unchanged either way."},Vh={ord_ls:"View Orders",ord_add:"Create Order",ord_imp:"Batch Import Orders",ord_ls_own:"View Own Orders",ord_ls_sub:"View Team Orders",ord_ls_all:"View All Company Orders",perm_role_ls:"View Roles",perm_role_add:"Create Role",perm_role_edt:"Edit Role",perm_role_del:"Delete Role",perm_asst_ls:"View Users",perm_asst_add:"Add Users",perm_asst_edt:"Edit Users",perm_asst_blk:"Suspend / Reactivate Users"},zh={owner:{name:"Owner",desc:"Full access — manage orders company-wide, invite and suspend teammates, and manage roles."},manager:{name:"Manager",desc:"Runs orders company-wide and manages the team; cannot change roles or permissions."},staff:{name:"Staff",desc:"Views and creates orders for their team; cannot manage users or roles."},viewer:{name:"Viewer",desc:"Read-only access to their own orders."},capabilities:{viewOrders:"View orders",createOrders:"Create orders",importOrders:"Import orders",companyOrders:"View company-wide orders",inviteMembers:"Invite members",suspendMembers:"Suspend members",manageRoles:"Manage roles"}},Wh={common:Lh,nav:Dh,login:Mh,orders:Fh,createOrder:Uh,importOrders:$h,admin:Bh,billing:Hh,permissions:Vh,roles:zh},qh={1:"Payment pending",2:"To be scheduled",3:"Awaiting pickup",4:"In transit- supplier to fulfilment center",5:"In fulfilment center",6:"In transit- fulfilment center to customer",7:"Arrived at customer fulfilment center",8:"In transit",9:"Canceled",10:"Delivered",11:"Delivered & Signed",12:"Delivered with Exceptions",13:"Completed",14:"Full cancellation",15:"Complete Manually",16:"Delete Pending Confirmation"},Gh={1:"Param Invalid.",2:"Param Required.",3:"Firebase Conn Error.",4:"Phone Number Required.",5:"Account Data Not Exist.",6:"Parse Error.",7:"Param Format Error.",8:"Email Or Password Not Correct.",9:"No Permission.",10:"Role Permission Name Duplicate.",11:"Role Permission Not Exist.",12:"Mobile Had Been Registered.",13:"Email Had Been Registered.",14:"Confirm Password Is Not Correct.",15:"Delivery Not Found.",16:"Delivery Duplicate Signature.",17:"Duplicate System Setting Keyword.",18:"Duplicate Chatroom Service Score.",19:"Chat Partner Haven'T Joined The Chatroom.",20:"Company/Fleet Is Not Exist.",21:"The Chatroom Has Reached The Maximum.",22:"Account Hasn'T Review Data.",23:"Record Not Found.",24:"Abnormal Account.",25:"Delivery Duplicate Score.",26:"Ip Format Error.",27:"Fleet Code Not Exist.",28:"Account In Audit.",29:"Fleet Code Has Benn Used.",30:"Fleet Not Found.",31:"Company Not Found.",32:"Fleet Has Been Loaned.",33:"Account Already Exists.",34:"Vehicle Is Using.",35:"Vehicle Not Found.",36:"Warehouse Not Found.",37:"The Address Format Is Incorrect.",38:"The Warehouse Route Setting Is Incorrect.",39:"Salesorder Not Found.",40:"Company Code Is Already In Use.",41:"Department Does Not Exist.",42:"Account Has Been Disabled.",43:"Salesorder Packages Have Not Been Completed Yet.",44:"Order Repeat Rating.",45:"Package Does Not Exist.",46:"Fleet Company Information Not Found.",47:"Team Rental Record Does Not Exist.",48:"The Driver'S Time Zone Is Incorrectly Read.",49:"Converting Driver'S Time Zone Is Incorrect.",50:"Keyword Does Not Exist.",51:"The City Does Not Exist.",52:"Json Format Conversion Failed.",53:"Errchangeroledriver.",54:"Errchangerolefleetdriver.",55:"Erraccountnotactive.",56:"Wrong License Type.",57:"Errchangerolemember.",58:"Errchangerolecompanymember.",59:"Errsalesordernotwaitforpay.",60:"Errdeliveryidincorrect.",61:"Platform Not Exist.",62:"Delivery Signature Record Not Exist.",63:"Delivery Plan Not Exist.",64:"Could Not Retrieve Coordinates From Geocoding Apis.",65:"Failed To Create An Order In Toll Shipment Api.",66:"Audit Accounts Not Exist.",67:"Audit Data Incomplete Or Content Mismatch.",68:"Could Not Parse Audit Data From Register Or Update.",69:"Invalid Review Status Id.",70:"The Phone Number Has Been Registered On This Role..",71:"Scheduledatetype Id Not Exist.",72:"Booking Date Invalid.",73:"Self-Account Removal Is Not Allowed.",74:"Cannot Modify Delivery Plan: Execution Has Already Started.",75:"Driver Is Not Available: Either Not Found, Currently Busy, Or Inactive.",76:"Simulation Start Time Must Be At Least 15 Minutes Before Current Local Time.",77:"Simulation Details Not Exist.",78:"An Error Occurred During The Simulation Calculation Process.",79:"Simulation Is Currently In Progress.",80:"Failed To Activate Simulation Result.",81:"Simulation Has Already Been Assigned And Cannot Be Modified Further.",82:"No Drivers Have Bookings Scheduled For Date.",83:"This Location Is Currently Not Available For Booking.",84:"Operation Failed Because The Delivery Plan Has Been Deleted.",85:"Route Injection Details Not Exist.",86:"Route Injection Calculating Failed.",87:"Route Injection Details Is Not Applicable.",88:"Route Injection Has Not Been Subscribed Or Failed During Subscription.",89:"Route Injection Failed: Python Server Calculating Failed.",92:"This route has a pending warehouse return. Please wait for the driver to complete it before making changes.",93:"Permission denied",100:"Database connection error.",101:"Database Write Error.",134:"This account has already been deleted.",142:"The warehouse-return stop must stay last when reordering.",200:"Token Not Exist.",201:"Token Parse Failed.",202:"Token Invalid.",203:"Token Expired.",204:"Logged out due to login at another location.",300:"Redis Connection Error.",301:"Redis Write Error.",401:"File Open Error.",402:"File Write Error.",403:"File Decode Error.",404:"File Format Error.",405:"File Close Error.",406:"File Delete Error.",500:"Aws Credential Error.",501:"Upload File Failed.",600:"Recaptcha Failed.",601:"Geocoding Failed.",700:"Websocket Write Error.",701:"Websocket Conn Failed.",800:"Netsuite Request Failed.",801:"Netsuite Response Error.",900:"Rabbitmq Conn Failed.",901:"Rabbitmq Read Message Failed.",902:"Rabbitmq Publish Message Failed.",1e3:"Pyserver Conn Failed.",1001:"PyServer Route Failed",1002:"Calculate Delivery Fee Failed",2010:"Payment Not Exist",2011:"Payment Not Pending",3e3:"Partial Success"},Kh={orderCreated:"Order Created",scheduled:"Scheduled",readyForPickup:"Ready for Pickup",inTransit:"In transit",delivered:"Delivered",completed:"Completed"},Yh={orderCreated:"Your order is confirmed and being prepared.",scheduled:"Your shipment is scheduled for pickup.",readyForPickup:"Your shipment is ready for pickup.",inTransit:"Your shipment is on its way.",delivered:"Your shipment has been delivered.",completed:"This shipment is complete.",exception:"Delivered — with an exception to review.",cancelled:"This shipment has been cancelled and will not be processed."},Jh={orderCreated:"Order Created",packageReceived:"Package Received",packageReceivedInTransit:"Package Received - In Transit",pickedUpFromSender:"Picked Up from Sender",departedOriginCountry:"Departed Origin Country",customsProcessing:"Customs Processing",customsCleared:"Customs Cleared",departedHub:"Departed Hub",arrivedRegionalHub:"Arrived at Regional Hub",arrivedLocalFacility:"Arrived at Local Facility",outForDelivery:"In transit",outForDeliveryPartial:"In transit (partial shipment)",deliveredSigned:"Delivered & Signed",cancelledByCustomer:"Order Cancelled by Customer"},Xh={badgeLabel_one:"{{count}} Exception",badgeLabel_other:"{{count}} Exceptions",delay:{reason:"This shipment has been rescheduled. The estimated delivery date may change."},failedAttempt:{reason:"A delivery attempt was unsuccessful."},addressProblem:{reason:"We couldn't confirm the delivery address for this shipment."},customsHold:{reason:"This shipment is on hold for a customs or compliance check."}},Qh={service:"Service",shipDate:"Ship Date",origin:"Origin",destination:"Destination",weight:"Weight",shipper:"Shipper",recipient:"Recipient",packages:"Packages",estimatedDelivery:"Estimated Delivery"},Zh={gateTitle:"Verify to See Full Details",gateBody:"Confirm the mobile number linked to this shipment to see recipient details and proof of delivery.",verifyButton:"Verify",verified:"Verified — showing full shipment details.",verifyFailed:"That code didn't match. Check it and try again.",linkExpired:"That verification link has expired. Request a new one to see full details.",linkUsed:"That verification link has already been used.",linkInvalid:"That verification link isn't valid for this shipment."},ef={title:"Travel History",colTime:"Time",colActivity:"Activity",colLocation:"Location",latest:"Latest",viewFullHistory:"View Full History",showLess:"Show Less"},tf={title:"Proof of Delivery",photoAlt:"Delivery photo",signedBy:"Signed by {{initial}}",photoUnavailable:"Delivery photo unavailable"},nf={title:"Get Help",contactSupport:"Contact Support",startReturn:"Start a Return"},rf={pageTitle:{entry:"Track a delivery — SenditGo",result:"Tracking result — SenditGo",consignee:"Track your delivery — SenditGo"},entry:{eyebrow:"Delivery tracking",title:"Track a delivery.",subtitle:"Enter your tracking number to see the latest delivery status. No account needed.",inputLabel:"Tracking number",placeholder:"Tracking number",submit:"Track",hint:"Tracking numbers are up to 9 letters and numbers, with no spaces or dashes.",submitBusy:"Tracking…",busyStatus:"Looking up your delivery…"},result:{back:"Track another delivery",title:"Tracking result.",subtitle:"Get the latest delivery status and tracking details for your shipment."},consignee:{eyebrow:"For recipients",title:"Track your delivery.",subtitle:"No account is required to see the current delivery status.",historyTitle:"Delivery history",historyToggle_one:"View details ({{count}} update)",historyToggle_other:"View details ({{count}} updates)",resultStatus:"{{status}}. {{label}}: {{value}}"},summary:{trackingNumber:"Tracking number",copy:"Copy tracking number",copied:"Tracking number copied",progress:"Delivery progress",copyFailed:"Couldn't copy. Select the tracking number to copy it."},chip:{cancelled:"Cancelled"},milestone:{orderCreated:"Order created",pickedUp:"Picked up",awaitingPickup:"Awaiting pickup",inTransit:"In transit",delivered:"Delivered",preparing:"Preparing"},milestoneState:{done:"completed",current:"current step",future:"not started"},eta:{label:"Estimated delivery",deliveredLabel:"Delivered",cancelledLabel:"Cancelled",today:"Today",tomorrow:"Tomorrow",toBeConfirmed:"To be confirmed",toBeConfirmedNote:"We'll show a date once the delivery is scheduled.",cancelledNote:"This delivery was cancelled and will not arrive.",todayAM:"This morning",todayPM:"This afternoon",tomorrowAM:"Tomorrow morning",tomorrowPM:"Tomorrow afternoon",dayAM:"{{day}}, morning",dayPM:"{{day}}, afternoon",previouslyExpected:"Previously expected {{date}}"},latest:{label:"Latest update",none:"No updates yet"},activity:{order_created:"Order created",scheduled:"Delivery scheduled",picked_up:"Picked up",arrived:"Arrived at destination",signed:"Delivery signed for",completed:"Delivery completed",rescheduled:"Delivery rescheduled",item_exception:"Item issue reported",cancelled:"Order cancelled"},details:{title:"Delivery details",trackingNumber:"Tracking number",shipDate:"Ship date",carrier:"Carrier",origin:"Origin",destination:"Destination",packages:"Packages",proof:"Proof of delivery",notShipped:"Not shipped yet",packageCount_one:"{{count}} package",packageCount_other:"{{count}} packages",affected_one:"{{count}} affected by an issue",affected_other:"{{count}} affected by an issue",proofType:{signature:"Signed for on delivery",contactless:"Contactless delivery",qrcode:"Confirmed by QR scan"}},history:{title:"Tracking history",date:"Date & time",activity:"Activity",location:"Location",empty:"No tracking updates yet."},exceptions:{title:"Delivery updates",rescheduled_one:"Delivery was rescheduled.",rescheduled_other:"Delivery was rescheduled {{count}} times.",items_missing:"Some items were reported missing.",items_damaged:"Some items were reported damaged.",wrong_delivery:"An item was reported as delivered to the wrong place.",cancelled:"The delivery was cancelled.",help:"Questions about this delivery? Our support team can help.",contact:"Contact support"},help:{title:"Need help?",body:"If you have any questions about this delivery, our team is here to help.",contact:"Contact support"},error:{format:"Check the tracking number. It should be up to 9 letters and numbers, with no spaces or dashes.",notFound:"We couldn't find a delivery with that tracking number. Check the number and try again.",rateLimited:"Too many lookups in a short time. Wait a minute, then try again.",unavailable:"Tracking is unavailable right now. Please try again shortly.",retry:"Try again",loading:"Loading delivery status"},nextStop:{public:{eyebrowLive:"Live map · next stop",eyebrowNext:"This address is the next stop",title:"The driver is on the way",mapRegion:"Map of the driver approaching the delivery address",mapUnavailable:"Map unavailable. The arrival time is shown here."},receiver:{eyebrowLive:"Live map · you're next",eyebrowNext:"You're the next stop",title:"Your driver is on the way",mapRegion:"Map of your driver approaching your delivery address",mapUnavailable:"Map unavailable. Your arrival time is shown here."},liveLocation:"Live location",etaMinutes_one:"About {{count}} minute away",etaMinutes_other:"About {{count}} minutes away",etaSoon:"Arriving soon",updatedNow:"Location updated just now",updated_one:"Location updated {{count}} minute ago",updated_other:"Location updated {{count}} minutes ago",stale_one:"Live location paused · last update {{count}} minute ago",stale_other:"Live location paused · last update {{count}} minutes ago",unavailable:"Live location is unavailable right now.",ended:"Live location has ended for this delivery.",errorRefused:"Live location is unavailable right now.",errorFailed:"Couldn't load the live location.",rateLimited:"Too many requests. Wait a minute, then try again.",retry:"Try again",sample:"Sample location · not a real driver",recenter:"Recenter"}},sf={step:Kh,headline:Yh,activity:Jh,exception:Xh,facts:Qh,tier2:Zh,timeline:ef,pod:tf,help:nf,guest:rf},Ti=["en"],of={en:"EN"},af=(()=>{try{const t=localStorage.getItem("lang");return t&&Ti.includes(t)?t:"en"}catch{return"en"}})();se.use(Fu).init({lng:af,fallbackLng:"en",interpolation:{escapeValue:!1},resources:{en:{common:Nh,portal:Wh,statusCode:Gh,salesOrderStatusId:qh,tracking:sf}}});function lf(t){se.changeLanguage(t);try{localStorage.setItem("lang",t)}catch{}}const Zs=t=>{let e;const n=new Set,r=(d,u)=>{const h=typeof d=="function"?d(e):d;if(!Object.is(h,e)){const f=e;e=u??(typeof h!="object"||h===null)?h:Object.assign({},e,h),n.forEach(m=>m(e,f))}},i=()=>e,c={setState:r,getState:i,getInitialState:()=>a,subscribe:d=>(n.add(d),()=>n.delete(d))},a=e=t(r,i,c);return c},cf=(t=>t?Zs(t):Zs),df=t=>t;function uf(t,e=df){const n=j.useSyncExternalStore(t.subscribe,j.useCallback(()=>e(t.getState()),[t,e]),()=>e(t.getInitialState()));return j.useDebugValue(n),n}const eo=t=>{const e=cf(t),n=r=>uf(e,r);return Object.assign(n,e),n},hf=(t=>t?eo(t):eo);function ff(t,e){let n;try{n=t()}catch{return}return{getItem:i=>{var s;const o=a=>a===null?null:JSON.parse(a,void 0),c=(s=n.getItem(i))!=null?s:null;return c instanceof Promise?c.then(o):o(c)},setItem:(i,s)=>n.setItem(i,JSON.stringify(s,void 0)),removeItem:i=>n.removeItem(i)}}const Ri=t=>e=>{try{const n=t(e);return n instanceof Promise?n:{then(r){return Ri(r)(n)},catch(r){return this}}}catch(n){return{then(r){return this},catch(r){return Ri(r)(n)}}}},pf=(t,e)=>(n,r,i)=>{let s={storage:ff(()=>window.localStorage),partialize:b=>b,version:0,merge:(b,R)=>({...R,...b}),...e},o=!1,c=0;const a=new Set,d=new Set;let u=s.storage;if(!u)return t((...b)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),n(...b)},r,i);const h=()=>{const b=s.partialize({...r()});return u.setItem(s.name,{state:b,version:s.version})},f=i.setState;i.setState=(...b)=>(f(...b),h());const m=t((...b)=>(n(...b),h()),r,i);i.getInitialState=()=>m;let g;const x=()=>{var b,R;if(!u)return;const w=++c;o=!1,a.forEach(y=>{var _;return y((_=r())!=null?_:m)});const v=((R=s.onRehydrateStorage)==null?void 0:R.call(s,(b=r())!=null?b:m))||void 0;return Ri(u.getItem.bind(u))(s.name).then(y=>{if(y)if(typeof y.version=="number"&&y.version!==s.version){if(s.migrate){const _=s.migrate(y.state,y.version);return _ instanceof Promise?_.then(C=>[!0,C]):[!0,_]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,y.state];return[!1,void 0]}).then(y=>{var _;if(w!==c)return;const[C,P]=y;if(g=s.merge(P,(_=r())!=null?_:m),n(g,!0),C)return h()}).then(()=>{w===c&&(v==null||v(r(),void 0),g=r(),o=!0,d.forEach(y=>y(g)))}).catch(y=>{w===c&&(v==null||v(void 0,y))})};return i.persist={setOptions:b=>{s={...s,...b},b.storage&&(u=b.storage)},clearStorage:()=>{++c,u==null||u.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>x(),hasHydrated:()=>o,onHydrate:b=>(a.add(b),()=>{a.delete(b)}),onFinishHydration:b=>(d.add(b),()=>{d.delete(b)})},s.skipHydration||x(),g||m},mf=pf;function cl(t,e){return function(){return t.apply(e,arguments)}}const{toString:gf}=Object.prototype,{getPrototypeOf:Ve}=Object,{iterator:Sn,toStringTag:dl}=Symbol,ze=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),ul=t=>typeof t=="string"&&(t==="__proto__"||t==="constructor"||t==="prototype"),Sr=(t,e,n)=>t===Object.prototype||!n&&e===null,yf=t=>{if(!Object.isExtensible(t))return!1;const e=Object.getOwnPropertyNames(t);return Object.getOwnPropertySymbols&&e.push(...Object.getOwnPropertySymbols(t)),e.every(n=>{if(ul(n))return!1;const r=Object.getOwnPropertyDescriptor(t,n);return!!r&&r.configurable&&r.writable===!0})},Ji=(t,e)=>{let n=t;const r=[];for(;n!=null;){if(r.indexOf(n)!==-1)return!1;r.push(n);const i=Ve(n);if(Sr(n,i,n===t))return!1;if(ze(n,e))return!0;n=i}return!1},bf=(t,e)=>t!=null&&Ji(t,e)?t[e]:void 0,vf=t=>{if(t==null||typeof t!="object"&&typeof t!="function")return t;const e=Ve(t);if(e===null&&yf(t))return t;const n=Object.create(null),r=Object.create(null),i=[];let s=t;for(;s!=null&&i.indexOf(s)===-1;){i.push(s);const o=s===t?e:Ve(s);if(Sr(s,o,s===t))break;const c=Object.getOwnPropertyNames(s);Object.getOwnPropertySymbols&&c.push(...Object.getOwnPropertySymbols(s));for(const a of c)ul(a)||ze(r,a)||(n[a]=t[a],r[a]=!0);s=o}return n},Xi=(t=>e=>{const n=gf.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),ve=t=>(t=t.toLowerCase(),e=>Xi(e)===t),Tr=t=>e=>typeof e===t,{isArray:It}=Array,Pt=Tr("undefined");function Qt(t){return t!==null&&!Pt(t)&&t.constructor!==null&&!Pt(t.constructor)&&fe(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const hl=ve("ArrayBuffer");function wf(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&hl(t.buffer),e}const xf=Tr("string"),fe=Tr("function"),Ef=Tr("number"),Zt=t=>t!==null&&typeof t=="object",Sf=t=>t===!0||t===!1,Gn=t=>{if(!Zt(t))return!1;const e=Ve(t);return(e===null||e===Object.prototype||Ve(e)===null)&&(Sr(t,e,!0)||!ze(t,dl)&&!ze(t,Sn))},Tf=t=>{if(!Zt(t)||Qt(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},Rf=ve("Date"),_f=ve("File"),Cf=t=>!!(t&&typeof t.uri<"u"),If=t=>t&&typeof t.getParts<"u",Pf=ve("Blob"),Af=ve("FileList"),kf=ve("Set"),Of=t=>Zt(t)&&fe(t.pipe);function jf(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const to=jf(),no=typeof to.FormData<"u"?to.FormData:void 0,Nf=t=>{if(!t)return!1;if(no&&t instanceof no)return!0;const e=Ve(t);if(!e||e===Object.prototype||!fe(t.append))return!1;const n=Xi(t);return n==="formdata"||n==="object"&&fe(t.toString)&&t.toString()==="[object FormData]"},Lf=ve("URLSearchParams"),[Df,Mf,Ff,Uf]=["ReadableStream","Request","Response","Headers"].map(ve),$f=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Tn(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,i;if(typeof t!="object"&&(t=[t]),It(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{if(Qt(t))return;const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let c;for(r=0;r<o;r++)c=s[r],e.call(null,t[c],c,t)}}function Bf(t,e){if(Qt(t))return null;e=e.toLowerCase();const n=Object.keys(t);let r=n.length,i;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const Et=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,fl=t=>!Pt(t)&&t!==Et;function _i(...t){const{caseless:e,skipUndefined:n}=fl(this)&&this||{},r={},i=e?Object.create(null):null,s=(o,c)=>{if(c==="__proto__"||c==="constructor"||c==="prototype")return;let a=c;if(i&&typeof c=="string"){const u=c.toLowerCase(),h=i[u];h!==void 0&&ze(r,h)?a=h:i[u]=c}const d=ze(r,a)?r[a]:void 0;Gn(d)&&Gn(o)?r[a]=_i(d,o):Gn(o)?r[a]=_i({},o):It(o)?r[a]=o.slice():(!n||!Pt(o))&&(r[a]=o)};for(let o=0,c=t.length;o<c;o++){const a=t[o];if(!a||Qt(a)||(Tn(a,s),typeof a!="object"||It(a)||!Object.getOwnPropertySymbols))continue;const d=Object.getOwnPropertySymbols(a);for(let u=0;u<d.length;u++){const h=d[u];Zf.call(a,h)&&s(a[h],h)}}return r}const Hf=(t,e,n,{allOwnKeys:r}={})=>(Tn(e,(i,s)=>{n&&fe(i)?Object.defineProperty(t,s,{__proto__:null,value:cl(i,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,s,{__proto__:null,value:i,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),t),Vf=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),zf=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),Object.defineProperty(t.prototype,"constructor",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{__proto__:null,value:e.prototype}),n&&Object.assign(t.prototype,n)},Wf=(t,e,n,r)=>{let i,s,o;const c={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)o=i[s],(!r||r(o,t,e))&&!c[o]&&(e[o]=t[o],c[o]=!0);t=n!==!1&&Ve(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},qf=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},Gf=t=>{if(!t)return null;if(It(t))return t;let e=t.length;if(!Number.isSafeInteger(e)||e<0||e>4294967295)return null;const n=new Set,r=new Set;let i=t;for(;i!=null&&n.size<e;){if(r.has(i))return null;r.add(i);const o=Ve(i);if(Sr(i,o,i===t))break;Object.getOwnPropertyNames(i).forEach(c=>{const a=+c;Number.isInteger(a)&&a>=0&&a<e&&String(a)===c&&ze(i,c)&&n.add(a)}),i=o}if(n.size!==e)return null;const s=new Array(e);for(;e-- >0;)s[e]=t[e];return s},Kf=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Ve(Uint8Array)),Yf=(t,e)=>{const r=(t&&t[Sn]).call(t);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(t,s[0],s[1])}},Jf=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},Xf=ve("HTMLFormElement"),Qf=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),{propertyIsEnumerable:Zf}=Object.prototype,ep=ve("RegExp"),pl=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};Tn(n,(i,s)=>{let o;(o=e(i,s,t))!==!1&&(r[s]=o||i)}),Object.defineProperties(t,r)},tp=t=>{pl(t,(e,n)=>{if(fe(t)&&["arguments","caller","callee"].includes(n))return!1;const r=t[n];if(fe(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},np=(t,e)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return It(t)?r(t):r(String(t).split(e)),n},rp=()=>{},ip=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function sp(t){return!!(t&&fe(t.append)&&t[dl]==="FormData"&&t[Sn])}const op=t=>{const e=new WeakSet,n=r=>{if(Zt(r)){if(e.has(r))return;if(Qt(r))return r;if(!("toJSON"in r)){e.add(r);let i;if(kf(r)){i=[];for(const s of r){const o=n(s);!Pt(o)&&i.push(o)}}else i=It(r)?[]:{},Tn(r,(s,o)=>{const c=n(s);!Pt(c)&&(i[o]=c)});return e.delete(r),i}}return r};return n(t)},ap=ve("AsyncFunction"),lp=t=>t&&(Zt(t)||fe(t))&&fe(t.then)&&fe(t.catch),ml=((t,e)=>t?setImmediate:e?((n,r)=>(Et.addEventListener("message",({source:i,data:s})=>{i===Et&&s===n&&r.length&&r.shift()()},!1),i=>{r.push(i),Et.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",fe(Et.postMessage)),cp=typeof queueMicrotask<"u"?queueMicrotask.bind(Et):typeof process<"u"&&process.nextTick||ml,gl=t=>t!=null&&fe(t[Sn]),dp=t=>t!=null&&Ji(t,Sn)&&gl(t),p={isArray:It,isArrayBuffer:hl,isBuffer:Qt,isFormData:Nf,isArrayBufferView:wf,isString:xf,isNumber:Ef,isBoolean:Sf,isObject:Zt,isPlainObject:Gn,isEmptyObject:Tf,isReadableStream:Df,isRequest:Mf,isResponse:Ff,isHeaders:Uf,isUndefined:Pt,isDate:Rf,isFile:_f,isReactNativeBlob:Cf,isReactNative:If,isBlob:Pf,isRegExp:ep,isFunction:fe,isStream:Of,isURLSearchParams:Lf,isTypedArray:Kf,isFileList:Af,forEach:Tn,merge:_i,extend:Hf,trim:$f,stripBOM:Vf,inherits:zf,toFlatObject:Wf,kindOf:Xi,kindOfTest:ve,endsWith:qf,toArray:Gf,forEachEntry:Yf,matchAll:Jf,isHTMLForm:Xf,hasOwnProperty:ze,hasOwnProp:ze,hasOwnInPrototypeChain:Ji,getSafeProp:bf,toSafeFlatObject:vf,reduceDescriptors:pl,freezeMethods:tp,toObjectSet:np,toCamelCase:Qf,noop:rp,toFiniteNumber:ip,findKey:Bf,global:Et,isContextDefined:fl,isSpecCompliantForm:sp,toJSONObject:op,isAsyncFn:ap,isThenable:lp,setImmediate:ml,asap:cp,isIterable:gl,isSafeIterable:dp},up=p.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),hp=t=>{const e=Object.create(null);let n,r,i;return t&&t.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim();const c=p.hasOwnProp(e,n);!n||c&&p.hasOwnProp(up,n)||(n==="set-cookie"?c?e[n].push(r):e[n]=[r]:e[n]=c?e[n]+", "+r:r)}),e};function fp(t){let e=0,n=t.length;for(;e<n;){const r=t.charCodeAt(e);if(r!==9&&r!==32)break;e+=1}for(;n>e;){const r=t.charCodeAt(n-1);if(r!==9&&r!==32)break;n-=1}return e===0&&n===t.length?t:t.slice(e,n)}const pp=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),mp=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function Qi(t,e){return p.isArray(t)?t.map(n=>Qi(n,e)):fp(String(t).replace(e,""))}const gp=t=>Qi(t,pp),yp=t=>Qi(t,mp);function yl(t){const e=Object.create(null);return p.forEach(t.toJSON(),(n,r)=>{e[r]=yp(n)}),e}const ro=Symbol("internals");function ln(t){return t&&String(t).trim().toLowerCase()}function Kn(t){return t===!1||t==null?t:p.isArray(t)?t.map(Kn):gp(String(t))}function bp(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const vp=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function zr(t){let e=0,n=t.length;for(;e<n;){const r=t.charCodeAt(e);if(r!==9&&r!==32)break;e+=1}for(;n>e;){const r=t.charCodeAt(n-1);if(r!==9&&r!==32)break;n-=1}return e===0&&n===t.length?t:t.slice(e,n)}function wp(t){const e=t.length-1;if(e<1||t.charCodeAt(0)!==34||t.charCodeAt(e)!==34)return t;let n="";for(let r=1;r<e;r++){const i=t.charCodeAt(r);if(i===34||i===92&&(r+=1,r>=e))return t;n+=t[r]}return n}function xp(t){const e=Object.create(null),n=String(t);let r=0,i=!1,s=!1;function o(c){const a=zr(n.slice(r,c)),d=a.indexOf("=");if(d<1)return;const u=zr(a.slice(0,d));if(!vp.test(u))return;const h=u.toLowerCase();if(h==="__proto__"||h==="constructor"||h==="prototype")return;const f=zr(a.slice(d+1));e[h]=wp(f)}for(let c=0;c<n.length;c++){const a=n.charCodeAt(c);i?s?s=!1:a===92?s=!0:a===34&&(i=!1):a===34?i=!0:(a===44||a===59)&&(o(c),r=c+1)}return o(n.length),e}const Ep=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim()),Sp="__Proto__",io=t=>t==="__proto__"?Sp:t;function Wr(t,e,n,r,i){if(p.isFunction(r))return r.call(t,e,n);if(i&&(e=n),!!p.isString(e)){if(p.isString(r))return e.indexOf(r)!==-1;if(p.isRegExp(r))return r.test(e)}}function Tp(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function Rp(t,e){const n=p.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{__proto__:null,value:function(i,s,o){return this[r].call(this,e,i,s,o)},configurable:!0})})}let Z=class{constructor(e){e&&this.set(e)}set(e,n,r){const i=this;function s(c,a,d){const u=ln(a);if(!u)return;const h=p.findKey(i,u);(!h||i[h]===void 0||d===!0||d===void 0&&i[h]!==!1)&&(i[io(h||a)]=Kn(c))}const o=(c,a)=>p.forEach(c,(d,u)=>s(d,u,a));if(p.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(p.isString(e)&&(e=e.trim())&&!Ep(e))o(hp(e),n);else if(p.isObject(e)&&p.isSafeIterable(e)){let c=Object.create(null),a,d;for(const u of e){if(!p.isArray(u))throw new TypeError("Object iterator must return a key-value pair");d=u[0],p.hasOwnProp(c,d)?(a=c[d],c[d]=p.isArray(a)?[...a,u[1]]:[a,u[1]]):c[d]=u[1]}o(c,n)}else e!=null&&s(n,e,r);return this}get(e,n){if(e=ln(e),e){const r=p.findKey(this,e);if(r){const i=this[r];if(!n)return i;if(n===!0)return bp(i);if(p.isFunction(n))return n.call(this,i,r);if(p.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=ln(e),e){const r=p.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Wr(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let i=!1;function s(o){if(o=ln(o),o){const c=p.findKey(r,o);c&&(!n||Wr(r,r[c],c,n))&&(delete r[c],i=!0)}}return p.isArray(e)?e.forEach(s):s(e),i}clear(e){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!e||Wr(this,this[s],s,e,!0))&&(delete this[s],i=!0)}return i}normalize(e){const n=this,r=Object.create(null);return p.forEach(this,(i,s)=>{const o=p.findKey(r,s);if(o){n[o]=Kn(i),delete n[s];return}const c=io(e?Tp(s):String(s).trim());c!==s&&delete n[s],n[c]=Kn(i),r[c]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return p.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=e&&p.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){const e=this.get("set-cookie");return p.isArray(e)?e:e==null||e===!1?[]:[e]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static parseParameters(e){return xp(e)}static concat(e,...n){const r=new this(e);return n.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[ro]=this[ro]={accessors:{}}).accessors,i=this.prototype;function s(o){const c=ln(o);r[c]||(Rp(i,o),r[c]=!0)}return p.isArray(e)?e.forEach(s):s(e),this}};Z.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);p.reduceDescriptors(Z.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});p.freezeMethods(Z);const cr="[REDACTED ****]";function _p(t){if(p.hasOwnProp(t,"toJSON"))return!0;let e=Object.getPrototypeOf(t);for(;e&&e!==Object.prototype;){if(p.hasOwnProp(e,"toJSON"))return!0;e=Object.getPrototypeOf(e)}return!1}function Cp(t,e){const n=new Set(e.map(s=>String(s).toLowerCase())),r=[],i=s=>{if(s===null||typeof s!="object"||p.isBuffer(s))return s;if(r.indexOf(s)!==-1)return;s instanceof Z&&(s=s.toJSON()),r.push(s);let o;if(p.isArray(s))o=[],s.forEach((c,a)=>{const d=i(c);p.isUndefined(d)||(o[a]=d)});else{if(!p.isPlainObject(s)&&_p(s))return r.pop(),s;o=Object.create(null);for(const[c,a]of Object.entries(s)){const d=n.has(c.toLowerCase())?cr:i(a);p.isUndefined(d)||(o[c]=d)}}return r.pop(),o};return i(t)}function so(t){try{return String(t)}catch{return""}}function Ip(t){return t.errors.map(n=>{try{return n&&n.message?so(n.message):so(n)}catch{return""}}).filter(Boolean).join("; ")||t.name||"AggregateError"}const Pp=`
Caused by: `,Ci=Symbol("causeStack");function Ap(t,e){const n=p.hasOwnProp(t,Ci)&&t[Ci];return n&&e.endsWith(n)?e.length-n.length:-1}function kp(t,e){try{const n=e&&e.stack;if(typeof n!="string"||!n)return;const r=t.stack;if(typeof r!="string"||!r)return;const i=Pp+n;t.stack=r+i,Object.defineProperty(t,Ci,{__proto__:null,value:i})}catch{}}let T=class bl extends Error{static from(e,n,r,i,s,o){let c=e.message;!c&&p.isArray(e.errors)&&e.errors.length&&(c=Ip(e));const a=new bl(c,n||e.code,r,i,s);return Object.defineProperty(a,"cause",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),a.name=e.name,kp(a,e),e.status!=null&&a.status==null&&(a.status=e.status),o&&Object.assign(a,o),a}constructor(e,n,r,i,s){super(e),Object.defineProperty(this,"message",{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),r&&(this.config=r),i&&(this.request=i),s&&(this.response=s,this.status=s.status)}toJSON(){const e=this.config,n=e&&p.hasOwnProp(e,"redact")?e.redact:void 0,r=p.isArray(n)&&n.length>0?Cp(e,n):p.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:r,code:this.code,status:this.status}}};T.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";T.ERR_BAD_OPTION="ERR_BAD_OPTION";T.ECONNABORTED="ECONNABORTED";T.ETIMEDOUT="ETIMEDOUT";T.ECONNREFUSED="ECONNREFUSED";T.ERR_NETWORK="ERR_NETWORK";T.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";T.ERR_DEPRECATED="ERR_DEPRECATED";T.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";T.ERR_BAD_REQUEST="ERR_BAD_REQUEST";T.ERR_CANCELED="ERR_CANCELED";T.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";T.ERR_INVALID_URL="ERR_INVALID_URL";T.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const Op=null,vl=100;function Ii(t){return p.isPlainObject(t)||p.isArray(t)}function wl(t){return p.endsWith(t,"[]")?t.slice(0,-2):t}function qr(t,e,n){return t?t.concat(e).map(function(i,s){return i=wl(i),!n&&s?"["+i+"]":i}).join(n?".":""):e}function jp(t){return p.isArray(t)&&!t.some(Ii)}const Np=p.toFlatObject(p,{},null,function(e){return/^is[A-Z]/.test(e)});function Rr(t,e,n){if(!p.isObject(t))throw new TypeError("target must be an object");e=e||new FormData;const r=(w,v)=>{const y=p.getSafeProp(n,w);return p.isUndefined(y)?v:y},i=r("metaTokens",!0),s=r("visitor")||x,o=r("dots",!1),c=r("indexes",!1),a=r("Blob")||typeof Blob<"u"&&Blob,d=r("maxDepth",vl),u=a&&p.isSpecCompliantForm(e),h=[];if(!p.isFunction(s))throw new TypeError("visitor must be a function");function f(w){if(w===null)return"";if(p.isDate(w))return w.toISOString();if(p.isBoolean(w))return w.toString();if(!u&&p.isBlob(w))throw new T("Blob is not supported. Use a Buffer instead.");if(p.isArrayBuffer(w)||p.isTypedArray(w)){if(u&&typeof a=="function")return new a([w]);throw new T("Blob is not supported. Use a Buffer instead.",T.ERR_NOT_SUPPORT)}return w}function m(w){if(w>d)throw new T("Object is too deeply nested ("+w+" levels). Max depth: "+d,T.ERR_FORM_DATA_DEPTH_EXCEEDED)}function g(w,v){if(d===1/0)return JSON.stringify(w);const y=[];return JSON.stringify(w,function(C,P){if(!p.isObject(P))return P;for(;y.length&&y[y.length-1]!==this;)y.pop();return y.push(P),m(v+y.length-1),P})}function x(w,v,y){let _=w;if(p.isReactNative(e)&&p.isReactNativeBlob(w))return e.append(qr(y,v,o),f(w)),!1;if(w&&!y&&typeof w=="object"){if(p.endsWith(v,"{}"))v=i?v:v.slice(0,-2),w=g(w,1);else if(p.isArray(w)&&jp(w)||(p.isFileList(w)||p.endsWith(v,"[]"))&&(_=p.toArray(w)))return v=wl(v),_.forEach(function(P,A){!(p.isUndefined(P)||P===null)&&e.append(c===!0?qr([v],A,o):c===null?v:v+"[]",f(P))}),!1}return Ii(w)?!0:(e.append(qr(y,v,o),f(w)),!1)}const b=Object.assign(Np,{defaultVisitor:x,convertValue:f,isVisitable:Ii});function R(w,v,y=0){if(!p.isUndefined(w)){if(m(y),h.indexOf(w)!==-1)throw new Error("Circular reference detected in "+v.join("."));h.push(w),p.forEach(w,function(C,P){(!(p.isUndefined(C)||C===null)&&s.call(e,C,p.isString(P)?P.trim():P,v,b))===!0&&R(C,v?v.concat(P):[P],y+1)}),h.pop()}}if(!p.isObject(t))throw new TypeError("data must be an object");return R(t),e}function oo(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(t).replace(/[!'()~]|%20/g,function(r){return e[r]})}function Zi(t,e){this._pairs=[],t&&Rr(t,this,e)}const xl=Zi.prototype;xl.append=function(e,n){this._pairs.push([e,n])};xl.toString=function(e){const n=e?r=>e.call(this,r,oo):oo;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function Lp(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function El(t,e,n){if(!e)return t;t=t||"";const r=p.isFunction(n)?{serialize:n}:n,i=p.getSafeProp(r,"encode")||Lp,s=p.getSafeProp(r,"serialize");let o;if(s?o=s(e,r):o=p.isURLSearchParams(e)?e.toString():new Zi(e,r).toString(i),o){const c=t.indexOf("#");c!==-1&&(t=t.slice(0,c)),t+=(t.indexOf("?")===-1?"?":"&")+o}return t}const cn=Symbol("internals");function Sl(t){return t?t.length:0}function ao(t){if(t)for(;t.length&&t[t.length-1]===null;)t.pop()}function Dp(t){return typeof t=="string"&&t!==""&&String(Number(t))===t?Number(t):t}function dn(t,e){const n=t.handlers,r=Sl(n);n!==e.handlersRef?(e.handlersRef=n,e.handlerEntries.clear()):r!==e.handlersLength&&(r?e.handlerEntries.forEach(function(s,o){n[s.index]!==s.handler&&e.handlerEntries.delete(o)}):e.handlerEntries.clear()),e.handlersLength=r}class lo{constructor(){this.handlers=[],this[cn]={handlersRef:this.handlers,handlersLength:this.handlers.length,handlerEntries:new Map,iterationDepth:0,nextId:0}}use(e,n,r){const i={fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null},s=this[cn];this.handlers==null&&(this.handlers=[]),dn(this,s);const o=s.nextId++;return this.handlers.push(i),s.handlerEntries.set(o,{handler:i,index:this.handlers.length-1}),s.handlersLength=this.handlers.length,o}eject(e){const n=this[cn];dn(this,n);const r=Dp(e),i=n.handlerEntries.get(r);if(i){if(n.handlerEntries.delete(r),this.handlers[i.index]!==i.handler)return;this.handlers[i.index]=null,n.iterationDepth||(ao(this.handlers),n.handlersLength=this.handlers.length)}}clear(){this.handlers&&(this.handlers=[],dn(this,this[cn]))}forEach(e){const n=this[cn];dn(this,n),n.iterationDepth++;try{p.forEach(this.handlers,function(i){i!==null&&e(i)})}finally{--n.iterationDepth||(dn(this,n),ao(this.handlers),n.handlersLength=Sl(this.handlers))}}}const es={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0,encodeBasicAuthUsername:!1},Mp=typeof URLSearchParams<"u"?URLSearchParams:Zi,Fp=typeof FormData<"u"?FormData:null,Up=typeof Blob<"u"?Blob:null,$p={isBrowser:!0,classes:{URLSearchParams:Mp,FormData:Fp,Blob:Up},protocols:["http","https","file","blob","url","data"]},ts=typeof window<"u"&&typeof document<"u",Pi=typeof navigator=="object"&&navigator||void 0,Bp=ts&&(!Pi||["ReactNative","NativeScript","NS"].indexOf(Pi.product)<0),Hp=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Vp=ts&&window.location.href||"http://localhost",zp=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ts,hasStandardBrowserEnv:Bp,hasStandardBrowserWebWorkerEnv:Hp,navigator:Pi,origin:Vp},Symbol.toStringTag,{value:"Module"})),J={...zp,...$p};function Wp(t,e){return Rr(t,new J.classes.URLSearchParams,{visitor:function(n,r,i,s){return J.isNode&&p.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)},...e})}const co=vl;function Tl(t){if(t>co)throw new T("FormData field is too deeply nested ("+t+" levels). Max depth: "+co,T.ERR_FORM_DATA_DEPTH_EXCEEDED)}function qp(t){const e=[],n=/[^.[\]]+|\[([^.[\]]*)]/g;let r;for(;(r=n.exec(t))!==null;)Tl(e.length),e.push(r[0]==="[]"?"":r[1]||r[0]);return e}function Rl(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}function _l(t){if(!p.isArray(t))return t;const e=Object.keys(t);return e.length!==t.length||e.some((n,r)=>n!==String(r))?Rl(t):t}function Gp(t){const e=[t];for(;e.length;){const n=e.pop();Object.keys(n).forEach(r=>{const i=n[r]=_l(n[r]);(p.isArray(i)||p.isPlainObject(i))&&e.push(i)})}return t}function Cl(t){function e(n,r,i,s){Tl(s);let o=n[s++];if(o==="__proto__")return!0;const c=Number.isFinite(+o),a=s>=n.length;return o=!o&&p.isArray(i)?i.length:o,a?(p.hasOwnProp(i,o)?(i[o]=_l(i[o]),i[o]=p.isArray(i[o])?i[o].concat(r):[i[o],r]):i[o]=r,!c):((!p.hasOwnProp(i,o)||!p.isObject(i[o]))&&(i[o]=[]),e(n,r,i[o],s)&&p.isArray(i[o])&&(i[o]=Rl(i[o])),!c)}if(p.isFormData(t)&&p.isFunction(t.entries)){const n={};return p.forEachEntry(t,(r,i)=>{e(qp(r),i,n,0)}),Gp(n)}return null}const Il=Object.freeze(["get","delete","head","options","post","put","patch","purge","link","unlink","query"]),Ut=(t,e)=>t!=null&&p.hasOwnProp(t,e)?t[e]:void 0;function Kp(t,e,n){if(p.isString(t))try{return(e||JSON.parse)(t),p.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const Rn={transitional:es,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=p.isObject(e);if(s&&p.isHTMLForm(e)&&(e=new FormData(e)),p.isFormData(e))return i?JSON.stringify(Cl(e)):e;if(p.isArrayBuffer(e)||p.isBuffer(e)||p.isStream(e)||p.isFile(e)||p.isBlob(e)||p.isReadableStream(e))return e;if(p.isArrayBufferView(e))return e.buffer;if(p.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let c;if(s){const a=Ut(this,"formSerializer");if(r.indexOf("application/x-www-form-urlencoded")>-1)return Wp(e,a).toString();if((c=p.isFileList(e))||r.indexOf("multipart/form-data")>-1){const d=Ut(this,"env"),u=d&&d.FormData;return Rr(c?{"files[]":e}:e,u&&new u,a)}}return s||i?(n.setContentType("application/json",!1),Kp(e)):e}],transformResponse:[function(e){const n=Ut(this,"transitional")||Rn.transitional,r=n&&n.forcedJSONParsing,i=Ut(this,"responseType"),s=i==="json";if(p.isResponse(e)||p.isReadableStream(e))return e;if(e&&p.isString(e)&&(r&&!i||s)){const c=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e,Ut(this,"parseReviver"))}catch(a){if(c)throw a.name==="SyntaxError"?T.from(a,T.ERR_BAD_RESPONSE,this,null,Ut(this,"response")):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:J.classes.FormData,Blob:J.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};p.forEach(Il,t=>{Rn.headers[t]={}});function Gr(t,e){const n=this||Rn,r=e||n,i=Z.from(r.headers);let s=r.data;return p.forEach(t,function(c){s=c.call(n,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function Pl(t){return!!(t&&t.__CANCEL__)}let _n=class extends T{constructor(e,n,r){super(e??"canceled",T.ERR_CANCELED,n,r),this.name="CanceledError",this.__CANCEL__=!0}};function Al(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new T("Request failed with status code "+n.status,n.status>=400&&n.status<500?T.ERR_BAD_REQUEST:T.ERR_BAD_RESPONSE,n.config,n.request,n))}const Yp=/[\t\n\r]/g;function kl(t){if(typeof t!="string")return t;let e=0;for(;e<t.length&&t.charCodeAt(e)<=32;)e++;return t.slice(e).replace(Yp,"")}function Kr(t){const e=/^([-+\w]{1,25}):(?:\/\/)?/.exec(t);return e&&e[1].toLowerCase()||""}const uo=t=>{try{return decodeURIComponent(t)}catch{return t}},Ol=J.hasStandardBrowserEnv?{write(t,e,n,r,i,s,o){if(typeof document>"u")return;const c=[`${t}=${encodeURIComponent(e)}`];p.isNumber(n)&&c.push(`expires=${new Date(n).toUTCString()}`),p.isString(r)&&c.push(`path=${r}`),p.isString(i)&&c.push(`domain=${i}`),s===!0&&c.push("secure"),p.isString(o)&&c.push(`SameSite=${o}`),document.cookie=c.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie;if(!e)return null;const n=e.split(";");for(let r=0;r<n.length;r++){const i=n[r].replace(/^\s+/,""),s=i.indexOf("=");if(s!==-1&&i.slice(0,s)===t)return uo(i.slice(s+1))}return null},async readAsync(t){try{const e=typeof window<"u"&&window.cookieStore;if(e&&p.isFunction(e.get)){const n=await e.get(t);return n?uo(n.value):null}}catch{}return this.read(t)},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},async readAsync(){return null},remove(){}};function Jp(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i=0,s=0,o;return e=e!==void 0?e:1e3,function(a){const d=Date.now(),u=r[s];o||(o=d),n[i]=a,r[i]=d;let h=s,f=0;for(;h!==i;)f+=n[h++],h=h%t;if(i=(i+1)%t,i===s&&(s=(s+1)%t),d-o<e)return;const m=u&&d-u;return m?Math.round(f*1e3/m):void 0}}function Xp(t,e){let n=0,r=1e3/e,i,s;const o=(u,h=Date.now())=>{n=h,i=null,s&&(clearTimeout(s),s=null),t(...u)};return[(...u)=>{const h=Date.now(),f=h-n;f>=r?o(u,h):(i=u,s||(s=setTimeout(()=>{s=null,o(i)},r-f)))},()=>i&&o(i),(...u)=>o(u)]}const dr=(t,e,n=3)=>{let r=0;const i=Jp(50,250);return Xp(s=>{if(!s||!p.isNumber(s.loaded))return;const o=s.loaded,c=s.lengthComputable?s.total:void 0,a=Math.max(0,c!=null?Math.min(o,c):o),d=Math.max(0,a-r),u=i(d);r=Math.max(r,a);const h={loaded:a,total:c,progress:c?a/c:void 0,bytes:d,rate:u||void 0,estimated:u&&c?(c-a)/u:void 0,event:s,lengthComputable:c!=null,[e?"download":"upload"]:!0};t(h)},n)},ho=(t,e)=>{const n=t!=null;return[r=>e[0]({lengthComputable:n,total:t,loaded:r}),e[1]]},fo=(t,e=p.asap)=>(...n)=>e(()=>t(...n)),Qp=J.hasStandardBrowserEnv?(t=>e=>(e=new URL(e,document.baseURI||J.origin),t.protocol===e.protocol&&t.host===e.host&&t.port===e.port))(new URL(J.origin)):()=>!0;function Zp(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function em(t,e){if(!e)return t;let n=t.length;for(;n>0&&t.charCodeAt(n-1)===47;)n--;return t.slice(0,n)+"/"+e.replace(/^\/+/,"")}const tm=/^https?:(?!\/\/)/i;function nm(t){return t&&t.replace(/(^|&)([^=&]*=)?[^&]+/g,(e,n,r="")=>`${n}${r}${cr}`)}function rm(t){const e=t.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${cr}@`),n=e.indexOf("#"),i=(n===-1?e:e.slice(0,n)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${cr}`);return n===-1?i:`${i}#${nm(e.slice(n+1))}`}function po(t,e){if(typeof t=="string"){const n=kl(t);if(tm.test(n))throw new T(`Invalid URL ${JSON.stringify(rm(n))}: missing "//" after protocol`,T.ERR_INVALID_URL,e)}}function jl(t,e,n,r){po(e,r);let i=!Zp(e);return t&&(i||n===!1)?(po(t,r),em(t,e)):e}function im(t){const e=[{value:t}],n=new WeakSet,r=new WeakSet;for(;e.length;){const{value:i,done:s}=e.pop();if(!p.isPlainObject(i)&&!p.isArray(i))continue;if(s){n.delete(i);continue}if(n.has(i))throw new T("Circular reference detected in params",T.ERR_BAD_OPTION_VALUE);if(r.has(i))continue;r.add(i),n.add(i),e.push({value:i,done:!0});const o=Object.keys(i);Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor&&Object.getOwnPropertySymbols(i).forEach(c=>{const a=Object.getOwnPropertyDescriptor(i,c);a&&a.enumerable&&o.push(c)}),o.forEach(c=>{if(c==="__proto__"||c==="constructor"||c==="prototype"){const a=Object.getOwnPropertyDescriptor(i,c);a&&p.hasOwnProp(a,"value")&&e.push({value:a.value})}else e.push({value:i[c]})})}}const mo=t=>t instanceof Z?{...t}:t,Ai=t=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(t).concat(Object.getOwnPropertySymbols(t).filter(e=>{const n=Object.getOwnPropertyDescriptor(t,e);return n&&n.enumerable})):Object.keys(t);function sm(t,e){const n=[],r=new WeakMap,i={};function s(c,a){if(!p.isPlainObject(a))return p.isArray(a)?a.slice():a;const d=p.isPlainObject(c)?c:i;let u=r.get(a);if(u||(u=new WeakMap,r.set(a,u)),u.has(d))return u.get(d);const h={};return u.set(d,h),n.push({base:d,source:a,result:h}),h}const o=p.isUndefined(e)?s(void 0,t):s(t,e);for(;n.length;){const{base:c,source:a,result:d}=n.pop(),u=new Set(Ai(c)),h=new Set(Ai(a));new Set([...u,...h]).forEach(m=>{if(m==="__proto__"||m==="constructor"||m==="prototype")return;const g=h.has(m),x=g?a[m]:void 0,b=(!g||p.isPlainObject(x))&&u.has(m)?c[m]:void 0;d[m]=g?s(b,x):s(void 0,b)})}return im(o),o}function ot(t,e,n,r){return p.isPlainObject(t)&&p.isPlainObject(e)?p.merge.call({caseless:r},t,e):p.isPlainObject(e)?p.merge({},e):p.isArray(e)?e.slice():e}function Nl(t,e,n,r){if(p.isUndefined(e)){if(!p.isUndefined(t))return ot(void 0,t,n,r)}else return ot(t,e,n,r)}function Yr(t,e){if(!p.isUndefined(e))return ot(void 0,e)}function H(t,e){if(p.isUndefined(e)){if(!p.isUndefined(t))return ot(void 0,t)}else return ot(void 0,e)}function om(t,e,n){const r=p.hasOwnProp(e,"transitional")?e.transitional:void 0;if(!p.isUndefined(r))if(p.isPlainObject(r)){if(p.hasOwnProp(r,n))return r[n]}else return;const i=p.hasOwnProp(t,"transitional")?t.transitional:void 0;if(p.isPlainObject(i)&&p.hasOwnProp(i,n))return i[n]}function ki(t,e,n,r,i){if(p.hasOwnProp(i,n))return ot(t,e);if(p.hasOwnProp(r,n))return ot(void 0,t)}function am(t,e,n){return Nl(mo(t),mo(e),n,!0)}const lm=Object.freeze({__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0}),go={url:Yr,method:Yr,data:Yr,baseURL:H,transformRequest:H,transformResponse:H,params:sm,paramsSerializer:H,timeout:H,timeoutErrorMessage:H,withCredentials:H,withXSRFToken:H,adapter:H,responseType:H,xsrfCookieName:H,xsrfHeaderName:H,onUploadProgress:H,onDownloadProgress:H,decompress:H,maxContentLength:H,maxBodyLength:H,beforeRedirect:H,transport:H,httpAgent:H,httpsAgent:H,cancelToken:H,socketPath:H,allowedSocketPaths:H,responseEncoding:H,validateStatus:ki,headers:am};function At(t,e){t=t||{},e=e||{};const n=Object.create(null);Object.defineProperty(n,"hasOwnProperty",lm);const r=Ai({...t,...e});for(let i=0,s=r.length;i<s;i++){const o=r[i];if(o==="__proto__"||o==="constructor"||o==="prototype")continue;const c=p.hasOwnProp(go,o)?go[o]:Nl,a=p.hasOwnProp(t,o)?t[o]:void 0,d=p.hasOwnProp(e,o)?e[o]:void 0,u=c===ki?c(a,d,o,t,e):c(a,d,o);p.isUndefined(u)&&c!==ki||(n[o]=u)}return p.hasOwnProp(e,"validateStatus")&&p.isUndefined(e.validateStatus)&&om(t,e,"validateStatusUndefinedResolves")===!1&&(p.hasOwnProp(t,"validateStatus")?n.validateStatus=ot(void 0,t.validateStatus):delete n.validateStatus),n}const cm=["content-type","content-length"];function dm(t,e,n){if(n!=="content-only"){t.set(e);return}Object.entries(e||{}).forEach(([r,i])=>{cm.includes(r.toLowerCase())&&t.set(r,i)})}const yo=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16))),um=t=>Ol.read(t);function Ll(t,e=um){const n=At({},t),r=m=>p.hasOwnProp(n,m)?n[m]:void 0,i=r("data");let s=r("withXSRFToken");const o=r("xsrfHeaderName"),c=r("xsrfCookieName");let a=r("headers");const d=r("auth"),u=r("baseURL"),h=r("allowAbsoluteUrls"),f=r("url");if(n.headers=a=Z.from(a),n.url=El(jl(u,f,h,n),r("params"),r("paramsSerializer")),d){const m=p.getSafeProp(d,"username")||"",g=p.getSafeProp(d,"password")||"",x=r("transitional"),b=x&&p.hasOwnProp(x,"encodeBasicAuthUsername")&&x.encodeBasicAuthUsername===!0;try{a.set("Authorization","Basic "+btoa((b?yo(m):m)+":"+(g?yo(g):"")))}catch(R){throw T.from(R,T.ERR_BAD_OPTION_VALUE,t)}}if(p.isFormData(i)){const m=p.getSafeProp(i,"getHeaders");J.hasStandardBrowserEnv||J.hasStandardBrowserWebWorkerEnv||p.isReactNative(i)?a.setContentType(void 0):p.isFunction(m)&&dm(a,m.call(i),r("formDataHeaderPolicy"))}if(J.hasStandardBrowserEnv&&(p.isFunction(s)&&(s=s(n)),s===!0||s==null&&Qp(n.url))){const g=o&&c&&e(c);g&&a.set(o,g)}return n}const hm=typeof XMLHttpRequest<"u",fm=hm&&function(t){return new Promise(function(n,r){let i;try{const A=J.hasStandardBrowserEnv&&typeof window<"u"&&window.cookieStore;i=A&&p.isFunction(A.get)}catch{}let s;const o=Ll(t,i?A=>(s=A,null):void 0);let c=o.data;const a=Z.from(o.headers).normalize();let{responseType:d,onUploadProgress:u,onDownloadProgress:h}=o,f,m,g,x,b,R,w;function v(){clearTimeout(m);try{b&&b()}catch(A){setTimeout(()=>{throw A})}try{R&&R()}catch(A){setTimeout(()=>{throw A})}y&&(x&&y.removeEventListener("progress",x),y.upload&&(g&&y.upload.removeEventListener("progress",g),b&&y.upload.removeEventListener("loadend",b))),o.cancelToken&&o.cancelToken.unsubscribe(f),o.signal&&o.signal.removeEventListener("abort",f)}let y=new XMLHttpRequest;y.open(o.method.toUpperCase(),o.url,!0),y.timeout=o.timeout;function _(A){if(!y)return;if(y.status===0&&(Kr(kl(o.url))||Kr(J.origin))!=="file"&&!(y.responseURL&&y.responseURL.startsWith("file:"))){r(new T("Request aborted",T.ECONNABORTED,t,y)),v(),y=null;return}try{A?w&&w(A):R&&R()}catch(K){setTimeout(()=>{throw K})}if(!y)return;const F=Z.from("getAllResponseHeaders"in y&&y.getAllResponseHeaders()),L={data:!d||d==="text"||d==="json"?y.responseText:y.response,status:y.status,statusText:y.statusText,headers:F,config:t,request:y};Al(function(ee){n(ee),v()},function(ee){r(ee),v()},L),y=null}if("onloadend"in y?y.onloadend=_:y.onreadystatechange=function(){!y||y.readyState!==4||y.status===0&&!(y.responseURL&&y.responseURL.startsWith("file:"))||setTimeout(_)},y.onabort=function(){y&&(r(new T("Request aborted",T.ECONNABORTED,t,y)),v(),y=null)},y.onerror=function(F){const W=F&&F.message?F.message:"Network Error",L=new T(W,T.ERR_NETWORK,t,y);L.event=F||null,r(L),v(),y=null},y.ontimeout=function(){if(!y)return;let F=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const W=o.transitional||es;o.timeoutErrorMessage&&(F=o.timeoutErrorMessage),r(new T(F,W.clarifyTimeoutError?T.ETIMEDOUT:T.ECONNABORTED,t,y)),v(),y=null},c===void 0&&a.setContentType(null),p.isUndefined(o.withCredentials)||(y.withCredentials=!!o.withCredentials),d&&d!=="json"&&(y.responseType=o.responseType),h&&([x,R,w]=dr(h,!0),y.addEventListener("progress",x)),u&&y.upload&&([g,b]=dr(u),y.upload.addEventListener("progress",g),y.upload.addEventListener("loadend",b)),o.cancelToken||o.signal){if(f=A=>{if(!y)return;r(!A||A.type?new _n(null,t,y):A);const F=y;v(),y=null,F.abort()},o.cancelToken&&o.cancelToken.subscribe(f),!y)return;o.signal&&(o.signal.aborted?f():o.signal.addEventListener("abort",f))}if(!y)return;const C=Kr(o.url);if(C&&!J.protocols.includes(C)){r(new T("Unsupported protocol "+C+":",T.ERR_BAD_REQUEST,t)),v();return}const P=()=>{y&&("setRequestHeader"in y&&p.forEach(yl(a),function(F,W){y.setRequestHeader(W,F)}),y.send(c||null))};if(s){const A=typeof performance<"u"&&p.isFunction(performance.now)?()=>performance.now():Date.now,F=y.timeout>0?A()+Number(y.timeout):void 0,W=()=>{if(!y)return;const L=y;L.ontimeout(),L.abort()};if(F!==void 0){const L=()=>{const K=F-A();K>0?m=setTimeout(L,Math.min(K,2147483647)):W()};L()}Ol.readAsync(s).then(L=>{if(y){if(F!==void 0&&A()>=F){W();return}if(L){const K=p.hasOwnProp(o,"xsrfHeaderName")&&o.xsrfHeaderName;a.set(K,L)}P()}}).catch(L=>{y&&(r(T.from(L,null,t,y)),v(),y=null)})}else P()})},pm=(t,e)=>{if(t=t?t.filter(Boolean):[],!e&&!t.length)return;const n=new AbortController;let r=!1;const i=function(a){if(!r){r=!0,o();const d=a instanceof Error?a:this.reason;n.abort(d instanceof T?d:new _n(d instanceof Error?d.message:d))}};let s=e&&setTimeout(()=>{s=null,i(new T(`timeout of ${e}ms exceeded`,T.ETIMEDOUT))},e);const o=()=>{t&&(s&&clearTimeout(s),s=null,t.forEach(a=>{const d=p.getSafeProp(a,"unsubscribe");p.isFunction(d)?d.call(a,i):a.removeEventListener("abort",i)}),t=null)};t.forEach(a=>{if(!r){if(a.aborted){i.call(a);return}a.addEventListener("abort",i,{once:!0})}});const{signal:c}=n;return c.unsubscribe=()=>p.asap(o),c},mm=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let r=0,i;for(;r<n;)i=r+e,yield t.slice(r,i),r=i},gm=async function*(t,e){for await(const n of ym(t))yield*mm(n,e)},ym=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:r}=await e.read();if(n)break;yield r}}finally{await e.cancel()}},bo=(t,e,n,r)=>{const i=gm(t,e);let s=0,o,c=a=>{o||(o=!0,r&&r(a))};return new ReadableStream({async pull(a){try{const{done:d,value:u}=await i.next();if(d){c(),a.close();return}let h=u.byteLength;if(n){let f=s+=h;n(f)}a.enqueue(new Uint8Array(u))}catch(d){throw c(d),d}},cancel(a){return c(a),i.return()}},{highWaterMark:2})},Qe=`\r
`,vo=t=>String(t).replace(/\r\n|\r|\n/g,Qe),wo=t=>String(t).replace(/[\r\n"]/g,e=>e==="\r"?"%0D":e===`
`?"%0A":"%22"),un=(t,e)=>{let n=0;for(let r=0;r<t.length;r++){const i=t.charCodeAt(r);e&&(i===13||i===10)?(i===13&&t.charCodeAt(r+1)===10&&r++,n+=2):i<128?n++:i<2048?n+=2:i>=55296&&i<=56319&&t.charCodeAt(r+1)>=56320&&t.charCodeAt(r+1)<=57343?(n+=4,r++):n+=3}return n};class Yn extends TypeError{constructor(e,n){super(e),this.name="FormDataError",this.reason=n}}function bm(t,e,n,r,i){if(!p.isFunction(e))throw new Yn("Blob is not supported","blob");if(!p.isString(i)||!/^[A-Za-z0-9'()+_,./:=? -]{1,70}$/.test(i)||/ $/.test(i))throw new Yn("Invalid multipart boundary","boundary");const s="--"+i+"--"+Qe;let o=s.length;const c=[],a=u=>{if(o+u>n)throw r()};a(0);for(const[u,h]of t){const f=p.isString(h),m=f?un(h,!0):h.size;if(!Number.isFinite(m)||m<0)throw new Yn("Unsupported FormData part size","part");a(m+un(u,!0)+(!f&&h.name?un(h.name,!1):0)+(!f&&h.type?un(h.type,!1):0));let g="--"+i+Qe+'Content-Disposition: form-data; name="'+wo(vo(u))+'"';f||(g+='; filename="'+wo(p.isString(h.name)?h.name:"blob")+'"'+Qe+"Content-Type: "+String(h.type||"application/octet-stream").replace(/[\r\n]/g,"")),g+=Qe+Qe;const x=un(g,!1)+m+Qe.length;a(x),o+=x,c.push({header:g,value:h,isString:f})}const d=[];for(const u of c)d.push(u.header,u.isString?vo(u.value):u.value,Qe);return d.push(s),new e(d,{type:"multipart/form-data; boundary="+i})}function vm(t,e,n,r,i){if(!p.isFunction(e))throw new T("Blob is not supported",T.ERR_NOT_SUPPORT);if(i===void 0)if(p.isFunction(J.generateString))i="axios-"+J.generateString(36,"0123456789abcdef");else{const s=p.global.crypto;if(!s||!p.isFunction(s.getRandomValues))throw new T("Random byte generation is not supported",T.ERR_NOT_SUPPORT);const o=new Uint8Array(18);s.getRandomValues(o),i="axios-"+Array.from(o,c=>("0"+c.toString(16)).slice(-2)).join("")}try{return bm(t,e,n,r,i)}catch(s){if(s instanceof Yn){const o=s.reason==="boundary"?T.ERR_BAD_OPTION_VALUE:T.ERR_BAD_REQUEST;throw new T(s.message,o)}throw s}}const xo=t=>t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102,Dl=(t,e,n)=>e+2<n&&xo(t.charCodeAt(e+1))&&xo(t.charCodeAt(e+2)),Eo=t=>t<=57?t-48:(t&223)-55,wm=t=>t>=65&&t<=90||t>=97&&t<=122||t>=48&&t<=57||t===43||t===47||t===45||t===95,xm=t=>t===9||t===10||t===12||t===13||t===32,Em=t=>{const e=Math.floor(t/4),n=t%4;return e*3+(n===2?1:n===3?2:0)},Sm=t=>{const e=t.length;let n=0;return e>0&&t.charCodeAt(e-1)===61&&(n++,e>1&&t.charCodeAt(e-2)===61&&n++),Math.floor((e-n)*3/4)},Tm=t=>{const e=t.length;let n=0,r=0,i=!1;for(let s=0;s<e;s++){let o=t.charCodeAt(s);if(o===37&&Dl(t,s,e)&&(o=Eo(t.charCodeAt(s+1))*16+Eo(t.charCodeAt(s+2)),s+=2),!xm(o)){if(o===61){r++;continue}if(!wm(o)||r>0){i=!0;continue}n++}}return i||r>2||r>0&&(n+r)%4!==0||n%4===1?Sm(t):Em(n)},Rm=(t,e,n)=>{if(!t||typeof t!="string"||!/^data:/i.test(t))return 0;const r=t.indexOf(",");if(r<0)return 0;const i=t.slice(5,r),s=t.slice(r+1);if(n.test(i))return e(s);let c=0;for(let a=0,d=s.length;a<d;a++){const u=s.charCodeAt(a);if(u===37&&Dl(s,a,d))c+=1,a+=2;else if(u<128)c+=1;else if(u<2048)c+=2;else if(u>=55296&&u<=56319&&a+1<d){const h=s.charCodeAt(a+1);h>=56320&&h<=57343?(c+=4,a++):c+=3}else c+=3}return c};function _m(t){const e=typeof t=="string"?t.indexOf("#"):-1;return Rm(e===-1?t:t.slice(0,e),Tm,/; *base64[\t\n\f\r ]*$/i)}const ns="1.21.0",So=64*1024,To={cache:"default",redirect:"follow",referrer:"about:client",referrerPolicy:"",mode:"cors",integrity:"",keepalive:!1,priority:"auto",window:null},{isFunction:$n}=p,Cm=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16))),Ro=t=>{if(!p.isString(t))return t;try{return decodeURIComponent(t)}catch{return t}},Bn=(t,...e)=>{try{return!!t(...e)}catch{return!1}},Im=t=>{const e=t.indexOf("://");let n=t;return e!==-1&&(n=n.slice(e+3)),n.includes("@")||n.includes(":")},Pm=t=>{const e=p.global!==void 0&&p.global!==null?p.global:globalThis,{ReadableStream:n,TextEncoder:r}=e;t=p.merge.call({skipUndefined:!0},{Request:e.Request,Response:e.Response,Blob:e.Blob},t);const i=p.hasOwnProp(t,"fetch")?t.fetch:void 0,{Request:s,Response:o,Blob:c}=t,a=i?$n(i):typeof fetch=="function",d=$n(s),u=$n(o);if(!a)return!1;const h=a&&$n(n),f=a&&(typeof r=="function"?(v=>y=>v.encode(y))(new r):async v=>new Uint8Array(await new s(v).arrayBuffer())),m=d&&h&&Bn(()=>{let v=!1;const y=new s(J.origin,{body:new n,method:"POST",get duplex(){return v=!0,"half"}}),_=y.headers.has("Content-Type");return y.body!=null&&y.body.cancel(),v&&!_}),g=u&&h&&Bn(()=>p.isReadableStream(new o("").body)),x=Object.assign(Object.create(null),To);d&&!Bn(()=>new s(J.origin,x))&&(delete x.cache,Bn(()=>new s(J.origin,x))||(x.cache=To.cache));const b={stream:g&&(v=>v.body)};a&&["text","arrayBuffer","blob","formData","stream"].forEach(v=>{!b[v]&&(b[v]=(y,_)=>{let C=y&&y[v];if(C)return C.call(y);throw new T(`Response type '${v}' is not supported`,T.ERR_NOT_SUPPORT,_)})});const R=async v=>{if(v==null)return 0;if(p.isBlob(v))return v.size;if(p.isArrayBufferView(v)||p.isArrayBuffer(v))return v.byteLength;if(p.isURLSearchParams(v)&&(v=v+""),p.isString(v))return(await f(v)).byteLength},w=async(v,y)=>{const _=p.toFiniteNumber(v.getContentLength());return _??R(y)};return async v=>{let{url:y,method:_,data:C,signal:P,cancelToken:A,timeout:F,onDownloadProgress:W,onUploadProgress:L,responseType:K,headers:ee,withCredentials:te="same-origin",fetchOptions:X,maxContentLength:ne,maxBodyLength:de,maxRedirects:re}=Ll(v);const oe=p.isNumber(ne)&&ne>-1,ue=p.isNumber(de)&&de>-1,ht=$=>p.hasOwnProp(v,$)?v[$]:void 0;let jn=i||fetch;K=K?(K+"").toLowerCase():"text";let Re=pm([P,A&&A.toAbortSignal()],F),Q=null;const ft=Re&&Re.unsubscribe&&(()=>{Re.unsubscribe()});let pt,nn=null,kr=null;const Or=()=>new T("Request body larger than maxBodyLength limit",T.ERR_BAD_REQUEST,v,Q);try{let $;const ge=ht("auth");if(ge){const D=p.getSafeProp(ge,"username")||"",ae=p.getSafeProp(ge,"password")||"";$={username:D,password:ae}}let pe;if(Im(y)){if(pe=new URL(y,J.origin),!$&&(pe.username||pe.password)){const D=Ro(pe.username),ae=Ro(pe.password);$={username:D,password:ae}}(pe.username||pe.password)&&(pe.username="",pe.password="",y=pe.href)}if($&&(ee.delete("authorization"),ee.set("Authorization","Basic "+btoa(Cm(($.username||"")+":"+($.password||""))))),oe&&pe&&pe.protocol==="data:"&&_m(pe.href)>ne)throw new T("maxContentLength size of "+ne+" exceeded",T.ERR_BAD_RESPONSE,v,Q);const Nn=p.isSpecCompliantForm(C)&&Z.from(ht("headers")).getContentType();let Ln;if(p.isString(Nn)&&/^multipart\/form-data(?:\s*;|$)/i.test(Nn.trim())){const D=Z.parseParameters(Nn);p.hasOwnProp(D,"boundary")&&(Ln=D.boundary)}if(p.isSpecCompliantForm(C)&&_!=="get"&&_!=="head"&&(ue||L&&m||Ln!==void 0)&&(C=vm(C,c,ue?de:1/0,Or,Ln),ee.setContentType(Ln===void 0?C.type:Nn),pt=C.size),ue&&_!=="get"&&_!=="head"){const D=await R(C);if(typeof D=="number"&&isFinite(D)&&(pt=D,D>de))throw Or()}const Dn=ue&&(p.isReadableStream(C)||p.isStream(C)),xs=(D,ae,Lt)=>bo(D,So,mt=>{if(ue&&mt>de)throw nn=Or();ae&&ae(mt)},Lt);if(m&&_!=="get"&&_!=="head"&&(L||Dn)){if(pt=pt??await w(ee,C),pt!==0||Dn){let D=new s(y,{method:"POST",body:C,duplex:"half"}),ae;if(p.isFormData(C)&&(ae=D.headers.get("content-type"))&&ee.setContentType(ae),D.body){const[Lt,mt]=L&&ho(pt,dr(fo(L)))||[];C=xs(D.body,Lt,mt)}}}else if(Dn&&!d&&h&&_!=="get"&&_!=="head")C=xs(C);else if(Dn&&d&&!m&&_!=="get"&&_!=="head")throw new T("Stream request bodies are not supported by the current fetch implementation",T.ERR_NOT_SUPPORT,v,Q);p.isString(te)||(te=te?"include":"omit");const Zc=d&&"credentials"in s.prototype;if(p.isFormData(C)){const D=ee.getContentType();D&&/^multipart\/form-data/i.test(D)&&!/boundary=/i.test(D)&&ee.delete("content-type")}ee.set("User-Agent","axios/"+ns,!1);const we=X==null?X:Object.assign(Object.create(null),X);we&&(delete we.body,delete we.headers,delete we.method,delete we.signal,delete we.duplex,delete we.credentials);const Ne=Object.assign(Object.create(null),we,{signal:Re,method:_.toUpperCase(),headers:yl(ee.normalize()),body:C,duplex:"half",credentials:Zc?te:void 0});d&&(p.forEach(x,(D,ae)=>{Ne[ae]===void 0&&(Ne[ae]=D)}),Ne.signal===void 0&&(Ne.signal=null),Ne.body===void 0&&(Ne.body=null)),re===0&&(Ne.redirect="manual",we&&(we.redirect="manual")),Q=d&&new s(y,Ne);let Le=await(d?jn(Q,we):jn(y,Ne));const Es=Z.from(Le.headers);if(oe){const D=p.toFiniteNumber(Es.getContentLength());if(D!=null&&D>ne)throw new T("maxContentLength size of "+ne+" exceeded",T.ERR_BAD_RESPONSE,v,Q)}const jr=g&&(K==="stream"||K==="response");if(g&&Le.body&&(W||oe||jr&&ft)){const D={};["status","statusText","headers"].forEach(rn=>{D[rn]=Le[rn]});const ae=p.toFiniteNumber(Es.getContentLength()),[Lt,mt]=W&&ho(ae,dr(fo(W),!0))||[];let Ss=0;const ed=rn=>{if(oe&&(Ss=rn,Ss>ne))throw kr=new T("maxContentLength size of "+ne+" exceeded",T.ERR_BAD_RESPONSE,v,Q);Lt&&Lt(rn)};Le=new o(bo(Le.body,So,ed,()=>{mt&&mt(),ft&&ft()}),D)}K=K||"text";let De=await b[p.findKey(b,K)||"text"](Le,v);if(oe&&!g&&!jr){let D;if(De!=null&&(typeof De.byteLength=="number"?D=De.byteLength:typeof De.size=="number"?D=De.size:typeof De=="string"&&(D=typeof r=="function"?new r().encode(De).byteLength:De.length)),typeof D=="number"&&D>ne)throw new T("maxContentLength size of "+ne+" exceeded",T.ERR_BAD_RESPONSE,v,Q)}return!jr&&ft&&ft(),await new Promise((D,ae)=>{Al(D,ae,{data:De,headers:Z.from(Le.headers),status:Le.status,statusText:Le.statusText,config:v,request:Q})})}catch($){if(ft&&ft(),Re&&Re.aborted&&Re.reason instanceof T){const ge=Re.reason;throw ge.config=v,Q&&(ge.request=Q),$!==ge&&Object.defineProperty(ge,"cause",{__proto__:null,value:$,writable:!0,enumerable:!1,configurable:!0}),ge}if(nn)throw Q&&!nn.request&&(nn.request=Q),nn;if(kr)throw kr;if($ instanceof T)throw Q&&!$.request&&($.request=Q),$;if($&&$.name==="TypeError"&&/Load failed|fetch/i.test($.message)){const ge=new T("Network Error",T.ERR_NETWORK,v,Q,$&&$.response);throw Object.defineProperty(ge,"cause",{__proto__:null,value:$.cause||$,writable:!0,enumerable:!1,configurable:!0}),ge}throw T.from($,$&&$.code,v,Q,$&&$.response)}}},Am=new Map,Ml=t=>{const e=Object.create(null),n=t&&p.hasOwnProp(t,"env")&&t.env;["fetch","Request","Response","Blob"].forEach(m=>{n&&p.hasOwnProp(n,m)&&(e[m]=n[m])});const{fetch:r,Request:i,Response:s,Blob:o}=e,c=[i,s,r,o];let a=c.length,d=a,u,h,f=Am;for(;d--;)u=c[d],h=f.get(u),h===void 0&&f.set(u,h=d?new Map:Pm(e)),f=h;return h};Ml();const rs={http:Op,xhr:fm,fetch:{get:Ml}};p.forEach(rs,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{__proto__:null,value:e})}catch{}Object.defineProperty(t,"adapterName",{__proto__:null,value:e})}});const _o=t=>`- ${t}`,km=t=>p.isFunction(t)||t===null||t===!1;function Om(t,e){t=p.isArray(t)?t:[t];const{length:n}=t;let r,i;const s={};for(let o=0;o<n;o++){r=t[o];let c;if(i=r,!km(r)&&(i=rs[(c=String(r)).toLowerCase()],i===void 0))throw new T(`Unknown adapter '${c}'`);if(i&&(p.isFunction(i)||(i=i.get(e))))break;s[c||"#"+o]=i}if(!i){const o=Object.entries(s).map(([a,d])=>`adapter ${a} `+(d===!1?"is not supported by the environment":"is not available in the build"));let c=n?o.length>1?`since :
`+o.map(_o).join(`
`):" "+_o(o[0]):"as no adapter specified";throw new T("There is no suitable adapter to dispatch the request "+c,T.ERR_NOT_SUPPORT)}return i}const Fl={getAdapter:Om,adapters:rs};function Jr(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new _n(null,t)}function Co(t){return Math.max(0,Date.now()-t)}function Xr(t){const e=p.toSafeFlatObject(t);Jr(e),e.headers=Z.from(p.getSafeProp(e,"headers")),e.data=Gr.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1);const n=Fl.getAdapter(e.adapter||Rn.adapter,e),r=Date.now();return n(e).then(function(s){Jr(e),s.duration=Co(r),e.response=s;try{s.data=Gr.call(e,e.transformResponse,s)}finally{delete e.response}return s.headers=Z.from(s.headers),s},function(s){if(!Pl(s)&&(Jr(e),s&&s.response)){s.response.duration=Co(r),e.response=s.response;try{s.response.data=Gr.call(e,e.transformResponse,s.response)}finally{delete e.response}s.response.headers=Z.from(s.response.headers)}return Promise.reject(s)})}const _r={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{_r[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const Io={};_r.transitional=function(e,n,r){function i(s,o){return"[Axios v"+ns+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,c)=>{if(e===!1)throw new T(i(o," has been removed"+(n?" in "+n:"")),T.ERR_DEPRECATED);return n&&!Io[o]&&(Io[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,c):!0}};_r.spelling=function(e){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};function jm(t,e,n){if(typeof t!="object"||t===null)throw new T("options must be an object",T.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const s=r[i],o=Object.prototype.hasOwnProperty.call(e,s)?e[s]:void 0;if(o){const c=t[s],a=c===void 0||o(c,s,t);if(a!==!0)throw new T("option "+s+" must be "+a,T.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new T("Unknown option "+s,T.ERR_BAD_OPTION)}}const Jn={assertOptions:jm,validators:_r},ie=Jn.validators,Qr=t=>{if(t==null||p.isPlainObject(t)||t instanceof Z)return!0;try{return p.isObject(t)&&p.getSafeProp(t,Symbol.toStringTag)==="AxiosHeaders"&&["toJSON","set","get","has","delete","clear","normalize","concat","toString",Symbol.iterator].every(e=>p.isFunction(p.getSafeProp(t,e)))}catch{return!1}};let Rt=class{constructor(e){this.defaults=e||{},this.interceptors={request:new lo,response:new lo}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error)try{let i={};Error.captureStackTrace?Error.captureStackTrace(i):i=new Error;const s=i.stack;let o="";if(typeof s=="string"){const c=s.indexOf(`
`);o=c===-1?"":s.slice(c+1)}if(!r.stack)r.stack=o;else if(o){const c=o.indexOf(`
`),a=c===-1?-1:o.indexOf(`
`,c+1),d=a===-1?o:o.slice(a+1),u=String(r.stack),h=Ap(r,u),f=h===-1?u:u.slice(0,h),m=h===-1?"":u.slice(h);f.endsWith(d)||(r.stack=f+`
`+o+m)}}catch{}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=At(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&Jn.assertOptions(r,{silentJSONParsing:ie.transitional(ie.boolean),forcedJSONParsing:ie.transitional(ie.boolean),clarifyTimeoutError:ie.transitional(ie.boolean),legacyInterceptorReqResOrdering:ie.transitional(ie.boolean),advertiseZstdAcceptEncoding:ie.transitional(ie.boolean),validateStatusUndefinedResolves:ie.transitional(ie.boolean),encodeBasicAuthUsername:ie.transitional(ie.boolean)},!1),i!=null&&(p.isFunction(i)?n.paramsSerializer={serialize:i}:Jn.assertOptions(i,{encode:ie.function,serialize:ie.function},!0)),n.allowAbsoluteUrls!==void 0||(p.hasOwnProp(this.defaults,"allowAbsoluteUrls")&&this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Jn.assertOptions(n,{baseUrl:ie.spelling("baseURL"),withXsrfToken:ie.spelling("withXSRFToken")},!0),n.method=(p.getSafeProp(n,"method")||p.getSafeProp(this.defaults,"method")||"get").toLowerCase();const o=p.getSafeProp(s,"common"),c=p.getSafeProp(s,n.method),a=s&&p.merge(Qr(o)?o:void 0,Qr(c)?c:void 0);s&&p.forEach(Il.concat("common"),b=>{Qr(p.getSafeProp(s,b))&&delete s[b]}),n.headers=Z.concat(a,s);const d=[];let u=!0;this.interceptors.request.forEach(function(R){if(typeof R.runWhen=="function"&&R.runWhen(n)===!1)return;u=u&&R.synchronous;const w=n.transitional||es;w&&w.legacyInterceptorReqResOrdering?d.unshift(R.fulfilled,R.rejected):d.push(R.fulfilled,R.rejected)});const h=[];this.interceptors.response.forEach(function(R){h.push(R.fulfilled,R.rejected)});let f,m=0,g;if(!u){const b=[Xr.bind(this),void 0];for(b.unshift(...d),b.push(...h),g=b.length,f=Promise.resolve(n);m<g;)f=f.then(b[m++],b[m++]);return f}g=d.length;let x=n;for(;m<g;){const b=d[m++],R=d[m++];try{x=b?b(x):x}catch(w){if(!R){f=Promise.reject(w);break}try{const v=R.call(this,w);p.isThenable(v)&&(f=Promise.resolve(v).then(()=>Xr.call(this,x)))}catch(v){f=Promise.reject(v)}break}}if(!f)try{f=Xr.call(this,x)}catch(b){f=Promise.reject(b)}for(m=0,g=h.length;m<g;)f=f.then(h[m++],h[m++]);return f}getUri(e){e=At(this.defaults,e);const n=jl(e.baseURL,e.url,e.allowAbsoluteUrls,e);return El(n,e.params,e.paramsSerializer)}};p.forEach(["delete","get","head","options"],function(e){Rt.prototype[e]=async function(n,r){return this.request(At(r||{},{method:e,url:n,data:r&&p.hasOwnProp(r,"data")?r.data:void 0}))}});p.forEach(["post","put","patch","query"],function(e){function n(r){return async function(s,o,c){return this.request(At(c||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Rt.prototype[e]=n(),e!=="query"&&(Rt.prototype[e+"Form"]=n(!0))});let Nm=class Ul{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(c=>{r.subscribe(c),s=c}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},e(function(s,o,c){r.reason||(r.reason=new _n(s,o,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=r=>{e.abort(r)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new Ul(function(i){e=i}),cancel:e}}};function Lm(t){return function(n){return t.apply(null,n)}}function Dm(t){return p.isObject(t)&&t.isAxiosError===!0}const Xn={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,ContentTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,UnprocessableContent:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Xn).forEach(([t,e])=>{Xn[e]===void 0&&(Xn[e]=t)});function $l(t){const e=new Rt(t),n=cl(Rt.prototype.request,e);return p.extend(n,Rt.prototype,e,{allOwnKeys:!0}),p.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return $l(At(t,i))},n}const G=$l(Rn);G.Axios=Rt;G.CanceledError=_n;G.CancelToken=Nm;G.isCancel=Pl;G.VERSION=ns;G.toFormData=Rr;G.AxiosError=T;G.Cancel=G.CanceledError;G.all=function(e){return Promise.all(e)};G.spread=Lm;G.isAxiosError=Dm;G.mergeConfig=At;G.AxiosHeaders=Z;G.formToJSON=t=>Cl(p.isHTMLForm(t)?new FormData(t):t);G.getAdapter=Fl.getAdapter;G.HttpStatusCode=Xn;G.default=G;const{Axios:n0,AxiosError:r0,CanceledError:i0,isCancel:s0,CancelToken:o0,VERSION:a0,all:l0,Cancel:c0,isAxiosError:d0,spread:u0,toFormData:h0,AxiosHeaders:f0,HttpStatusCode:p0,formToJSON:m0,getAdapter:g0,mergeConfig:y0,create:b0}=G,Po=!1,Mm="senditgo",Fm="AIzaSyCCFkpD6mTpO7D4V2vPAx6qnABbrQFjmPw",Um="tms-prod-5b64f.firebaseapp.com",$m="tms-prod-5b64f",Bm="tms-prod-5b64f.firebasestorage.app",Hm="8390929152",Vm="1:8390929152:web:f53f3ad71de3cf8f2ca1e5",zm="G-0P0BSKZQN0";function ur(t){const e=document.cookie.split("; ").find(n=>n.startsWith(`${encodeURIComponent(t)}=`));if(e)return decodeURIComponent(e.slice(e.indexOf("=")+1))}function Ao(t,e,n={}){const{maxAge:r,path:i="/",secure:s=!1,sameSite:o="strict"}=n;let c=`${encodeURIComponent(t)}=${encodeURIComponent(e)}`;c+=`; path=${i}`,c+=`; samesite=${o}`,typeof r=="number"&&(c+=`; max-age=${Math.floor(r)}`),s&&(c+="; Secure"),document.cookie=c}function ko(t,e="/"){document.cookie=`${encodeURIComponent(t)}=; path=${e}; max-age=0`}function Bl(){ko("X-Token"),ko("X-Refresh-Token"),Ot.getState().logout()}function rt(){Bl();const t=Ki();window.location.pathname!==t&&(window.location.href=t)}const Wm=7,Hl=200,Vl=[5,201,202,204],qm=["/api/company/verifyToken","/api/company/refreshToken"],Gm={baseURL:void 0},be=G.create(Gm);let Wt=!1,Oi=[];function zl(t){Oi.push(t)}function hr(t){Oi.forEach(e=>e(t)),Oi=[]}async function Wl(){var t,e;try{const n=be.defaults.headers.common["X-Refresh-Token"]||ur("X-Refresh-Token");if(!n)return null;const r=await G.post(`${Po?"/apis":""}/api/company/refreshToken`,{refreshToken:n},{headers:{"Content-type":"application/json;charset-UTF-8","X-Refresh-Token":n}});if(((t=r.data)==null?void 0:t.code)===0&&((e=r.data)!=null&&e.data)){const{token:i,refresh:s}=r.data.data;be.defaults.headers.common.Token=i,be.defaults.headers.common["X-Refresh-Token"]=s;const o={sameSite:"strict",maxAge:86400,secure:!Po};return Ao("X-Token",i,o),Ao("X-Refresh-Token",s,o),i}return null}catch{return null}}function Km(t){if(typeof FormData<"u"&&t.data instanceof FormData?(t.headers.delete("Content-Type"),t.headers.delete("Content-type")):t.headers["Content-type"]="application/json;charset-UTF-8",!t.headers.get("Token")){const n=be.defaults.headers.common.Token||ur("X-Token");n&&t.headers.set("Token",n)}if(!t.headers.get("X-Refresh-Token")){const n=be.defaults.headers.common["X-Refresh-Token"]||ur("X-Refresh-Token");n&&t.headers.set("X-Refresh-Token",n)}return t}be.interceptors.request.use(Km,t=>Promise.reject(t));const ql=t=>qm.some(e=>t===e||t.endsWith(e)),Gl=(t,e)=>t===Wm&&["session","login","another","terminated","kicked"].some(n=>e.includes(n)),Ym=async t=>{var i;const e=t.data,n=Number(e==null?void 0:e.code),r=t.config;if(n>0){const s=(r==null?void 0:r.url)||"";if(!ql(s)){const o=((i=e==null?void 0:e.message)==null?void 0:i.toLowerCase())||"";if(Gl(n,o))return rt(),new Promise(()=>{});if(n===Hl){const c=r;if(c._retried)return rt(),new Promise(()=>{});if(!Wt){Wt=!0;const a=await Wl();return Wt=!1,a?(hr(a),c._retried=!0,c.headers.Token=a,be(c)):(hr(null),rt(),new Promise(()=>{}))}return new Promise((a,d)=>{zl(u=>{if(!u){d(e);return}c._retried=!0,c.headers.Token=u,a(be(c))})})}if(Vl.includes(n))return rt(),new Promise(()=>{})}throw e}return e},Jm=async t=>{var o,c;const e=t,n=(o=e.response)==null?void 0:o.data,r=Number(n==null?void 0:n.code),i=e.config,s=(i==null?void 0:i.url)||"";if(n&&!ql(s)){const a=((c=n==null?void 0:n.message)==null?void 0:c.toLowerCase())||"";if(Gl(r,a))return rt(),new Promise(()=>{});if(r===Hl&&i){const d=i;if(d._retried)return rt(),new Promise(()=>{});if(!Wt){Wt=!0;const u=await Wl();return Wt=!1,u?(hr(u),d._retried=!0,d.headers.Token=u,be(d)):(hr(null),rt(),new Promise(()=>{}))}return new Promise((u,h)=>{zl(f=>{if(!f){h(t);return}d._retried=!0,d.headers.Token=f,u(be(d))})})}if(Vl.includes(r))return rt(),new Promise(()=>{})}return Promise.reject(t)};be.interceptors.response.use(Ym,Jm);const Xm=()=>{};var Oo={};/**
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
 */const Kl=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Qm=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],c=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Yl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,c=o?t[i+1]:0,a=i+2<t.length,d=a?t[i+2]:0,u=s>>2,h=(s&3)<<4|c>>4;let f=(c&15)<<2|d>>6,m=d&63;a||(m=64,o||(f=64)),r.push(n[u],n[h],n[f],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Kl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Qm(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],c=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||c==null||d==null||h==null)throw new Zm;const f=s<<2|c>>4;if(r.push(f),d!==64){const m=c<<4&240|d>>2;if(r.push(m),h!==64){const g=d<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Zm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const eg=function(t){const e=Kl(t);return Yl.encodeByteArray(e,!0)},Jl=function(t){return eg(t).replace(/\./g,"")},Xl=function(t){try{return Yl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function tg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ng=()=>tg().__FIREBASE_DEFAULTS__,rg=()=>{if(typeof process>"u"||typeof Oo>"u")return;const t=Oo.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ig=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Xl(t[1]);return e&&JSON.parse(e)},is=()=>{try{return Xm()||ng()||rg()||ig()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},sg=t=>{var e,n;return(n=(e=is())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Ql=()=>{var t;return(t=is())==null?void 0:t.config},Zl=t=>{var e;return(e=is())==null?void 0:e[`_${t}`]};/**
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
 */class ec{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function og(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ce())}function ag(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function lg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function cg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dg(){const t=ce();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ug(){try{return typeof indexedDB=="object"}catch{return!1}}function hg(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const fg="FirebaseError";class ct extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=fg,Object.setPrototypeOf(this,ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Cn.prototype.create)}}class Cn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?pg(s,r):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new ct(i,c,r)}}function pg(t,e){try{let n=0,r="";for(;n<t.length;){const i=t.indexOf("{$",n);if(i===-1){r+=t.substring(n);break}const s=t.indexOf("}",i+2);if(s===-1){r+=t.substring(n);break}const o=t.substring(i+2,s),c=e[o];r+=t.substring(n,i)+(c!=null?String(c):`<${o}?>`),n=s+1}return r}catch{return t}}function mg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Yt(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(jo(s)&&jo(o)){if(!Yt(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function jo(t){return t!==null&&typeof t=="object"}/**
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
 */function en(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function gg(t,e){const n=new yg(t,e);return n.subscribe.bind(n)}class yg{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");bg(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Zr),i.error===void 0&&(i.error=Zr),i.complete===void 0&&(i.complete=Zr);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bg(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Zr(){}/**
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
 */function jt(t){return t&&t._delegate?t._delegate:t}/**
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
 */function ss(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function vg(t){return(await fetch(t,{credentials:"include"})).ok}class Jt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const xt="[DEFAULT]";/**
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
 */class wg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ec;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Eg(e))try{this.getOrInitializeService({instanceIdentifier:xt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=xt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xt){return this.instances.has(e)}getOptions(e=xt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:xg(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=xt){return this.component?this.component.multipleInstances?e:xt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xg(t){return t===xt?void 0:t}function Eg(t){return t.instantiationMode==="EAGER"}/**
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
 */class Sg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new wg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var B;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(B||(B={}));const Tg={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},Rg=B.INFO,_g={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},Cg=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=_g[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class tc{constructor(e){this.name=e,this._logLevel=Rg,this._logHandler=Cg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in B))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Tg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...e),this._logHandler(this,B.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...e),this._logHandler(this,B.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,B.INFO,...e),this._logHandler(this,B.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,B.WARN,...e),this._logHandler(this,B.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...e),this._logHandler(this,B.ERROR,...e)}}const Ig=(t,e)=>e.some(n=>t instanceof n);let No,Lo;function Pg(){return No||(No=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ag(){return Lo||(Lo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const nc=new WeakMap,ji=new WeakMap,rc=new WeakMap,ei=new WeakMap,os=new WeakMap;function kg(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(it(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&nc.set(n,t)}).catch(()=>{}),os.set(e,t),e}function Og(t){if(ji.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ji.set(t,e)}let Ni={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ji.get(t);if(e==="objectStoreNames")return t.objectStoreNames||rc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return it(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function jg(t){Ni=t(Ni)}function Ng(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ti(this),e,...n);return rc.set(r,e.sort?e.sort():[e]),it(r)}:Ag().includes(t)?function(...e){return t.apply(ti(this),e),it(nc.get(this))}:function(...e){return it(t.apply(ti(this),e))}}function Lg(t){return typeof t=="function"?Ng(t):(t instanceof IDBTransaction&&Og(t),Ig(t,Pg())?new Proxy(t,Ni):t)}function it(t){if(t instanceof IDBRequest)return kg(t);if(ei.has(t))return ei.get(t);const e=Lg(t);return e!==t&&(ei.set(t,e),os.set(e,t)),e}const ti=t=>os.get(t);function Dg(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),c=it(o);return r&&o.addEventListener("upgradeneeded",a=>{r(it(o.result),a.oldVersion,a.newVersion,it(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const Mg=["get","getKey","getAll","getAllKeys","count"],Fg=["put","add","delete","clear"],ni=new Map;function Do(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ni.get(e))return ni.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Fg.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Mg.includes(n)))return;const s=async function(o,...c){const a=this.transaction(o,i?"readwrite":"readonly");let d=a.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[n](...c),i&&a.done]))[0]};return ni.set(e,s),s}jg(t=>({...t,get:(e,n,r)=>Do(e,n)||t.get(e,n,r),has:(e,n)=>!!Do(e,n)||t.has(e,n)}));/**
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
 */class Ug{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($g(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function $g(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Li="@firebase/app",Mo="0.16.2";/**
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
 */const We=new tc("@firebase/app"),Bg="@firebase/app-compat",Hg="@firebase/analytics-compat",Vg="@firebase/analytics",zg="@firebase/app-check-compat",Wg="@firebase/app-check",qg="@firebase/auth",Gg="@firebase/auth-compat",Kg="@firebase/database",Yg="@firebase/data-connect",Jg="@firebase/database-compat",Xg="@firebase/functions",Qg="@firebase/functions-compat",Zg="@firebase/installations",ey="@firebase/installations-compat",ty="@firebase/messaging",ny="@firebase/messaging-compat",ry="@firebase/performance",iy="@firebase/performance-compat",sy="@firebase/remote-config",oy="@firebase/remote-config-compat",ay="@firebase/storage",ly="@firebase/storage-compat",cy="@firebase/firestore",dy="@firebase/ai",uy="@firebase/firestore-compat",hy="firebase",fy="12.19.0";/**
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
 */const Di="[DEFAULT]",py={[Li]:"fire-core",[Bg]:"fire-core-compat",[Vg]:"fire-analytics",[Hg]:"fire-analytics-compat",[Wg]:"fire-app-check",[zg]:"fire-app-check-compat",[qg]:"fire-auth",[Gg]:"fire-auth-compat",[Kg]:"fire-rtdb",[Yg]:"fire-data-connect",[Jg]:"fire-rtdb-compat",[Xg]:"fire-fn",[Qg]:"fire-fn-compat",[Zg]:"fire-iid",[ey]:"fire-iid-compat",[ty]:"fire-fcm",[ny]:"fire-fcm-compat",[ry]:"fire-perf",[iy]:"fire-perf-compat",[sy]:"fire-rc",[oy]:"fire-rc-compat",[ay]:"fire-gcs",[ly]:"fire-gcs-compat",[cy]:"fire-fst",[uy]:"fire-fst-compat",[dy]:"fire-vertex","fire-js":"fire-js",[hy]:"fire-js-all"};/**
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
 */const fr=new Map,my=new Map,Mi=new Map;function Fo(t,e){try{t.container.addComponent(e)}catch(n){We.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function wn(t){const e=t.name;if(Mi.has(e))return We.debug(`There were multiple attempts to register component ${e}.`),!1;Mi.set(e,t);for(const n of fr.values())Fo(n,t);for(const n of my.values())Fo(n,t);return!0}function ic(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ce(t){return t==null?!1:t.settings!==void 0}/**
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
 */const gy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$e=new Cn("app","Firebase",gy);/**
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
 */class yy{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Jt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $e.create("app-deleted",{appName:this._name})}}/**
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
 */const In=fy;function sc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Di,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw $e.create("bad-app-name",{appName:String(i)});if(n||(n=Ql()),!n)throw $e.create("no-options");const s=fr.get(i);if(s)if(Yt(n,s.options)){if(Yt(r,s.config))return s;throw $e.create("duplicate-app",{appName:i,mismatchedParam:"config",oldValue:JSON.stringify(s.config),newValue:JSON.stringify(r)})}else throw $e.create("duplicate-app",{appName:i,mismatchedParam:"options",oldValue:JSON.stringify(s.options),newValue:JSON.stringify(n)});const o=new Sg(i);for(const a of Mi.values())o.addComponent(a);const c=new yy(n,r,o);return fr.set(i,c),c}function by(t=Di){const e=fr.get(t);if(!e&&t===Di&&Ql())return sc();if(!e)throw $e.create("no-app",{appName:t});return e}function qt(t,e,n){let r=py[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),We.warn(o.join(" "));return}wn(new Jt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const vy="firebase-heartbeat-database",wy=1,xn="firebase-heartbeat-store";let ri=null;function oc(){return ri||(ri=Dg(vy,wy,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(xn)}catch(n){console.warn(n)}}}}).catch(t=>{throw $e.create("idb-open",{originalErrorMessage:t.message})})),ri}async function xy(t){try{const n=(await oc()).transaction(xn),r=await n.objectStore(xn).get(ac(t));return await n.done,r}catch(e){if(e instanceof ct)We.warn(e.message);else{const n=$e.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});We.warn(n.message)}}}async function Uo(t,e){try{const r=(await oc()).transaction(xn,"readwrite");await r.objectStore(xn).put(e,ac(t)),await r.done}catch(n){if(n instanceof ct)We.warn(n.message);else{const r=$e.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});We.warn(r.message)}}}function ac(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ey=1024,Sy=30;class Ty{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _y(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=$o();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>Sy){const o=Cy(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){We.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=$o(),{heartbeatsToSend:r,unsentEntries:i}=Ry(this._heartbeatsCache.heartbeats),s=Jl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return We.warn(n),""}}}function $o(){return new Date().toISOString().substring(0,10)}function Ry(t,e=Ey){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Bo(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Bo(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class _y{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ug()?hg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await xy(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Uo(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Uo(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Bo(t){return Jl(JSON.stringify({version:2,heartbeats:t})).length}function Cy(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function Iy(t){wn(new Jt("platform-logger",e=>new Ug(e),"PRIVATE")),wn(new Jt("heartbeat",e=>new Ty(e),"PRIVATE")),qt(Li,Mo,t),qt(Li,Mo,"esm2020"),qt("fire-js","")}/**
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
 */Iy("");var Py="firebase",Ay="12.19.0";/**
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
 */qt(Py,Ay,"app");function lc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ky=lc,cc=new Cn("auth","Firebase",lc());/**
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
 */const pr=new tc("@firebase/auth");function Qn(t,...e){pr.logLevel<=B.WARN&&pr.warn(`Auth (${In}): ${t}`,...e)}function Zn(t,...e){pr.logLevel<=B.ERROR&&pr.error(`Auth (${In}): ${t}`,...e)}/**
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
 */function qe(t,...e){throw ls(t,...e)}function me(t,...e){return ls(t,...e)}function as(t,e,n){const r={...ky(),[e]:n};return new Cn("auth","Firebase",r).create(e,{appName:t.name})}function st(t){return as(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ls(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return cc.create(t,...e)}function I(t,e,...n){if(!t)throw ls(e,...n)}function Be(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Zn(e),new Error(e)}function Ge(t,e){t||Be(e)}/**
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
 */function Fi(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function dc(){return Ho()==="http:"||Ho()==="https:"}function Ho(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function Oy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dc()||lg()||"connection"in navigator)?navigator.onLine:!0}function jy(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Pn{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ge(n>e,"Short delay should be less than long delay!"),this.isMobile=og()||cg()}get(){return Oy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function cs(t,e){Ge(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class uc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Be("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Be("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Be("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ny={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Ly=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Dy=new Pn(3e4,6e4);function je(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Te(t,e,n,r,i={}){return hc(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const c=en({...o,key:t.config.apiKey}).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const d={method:e,headers:a,...s};return ag()||(d.referrerPolicy="strict-origin-when-cross-origin"),t.emulatorConfig&&ss(t.emulatorConfig.host)&&(d.credentials="include"),uc.fetch()(await fc(t,t.config.apiHost,n,c),d)})}async function hc(t,e,n){t._canInitEmulator=!1;const r={...Ny,...e};try{const i=new Fy(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw hn(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const c=s.ok?o.errorMessage:o.error.message,[a,d]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw hn(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw hn(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw hn(t,"user-disabled",o);const u=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw as(t,u,d);qe(t,u)}}catch(i){if(i instanceof ct)throw i;qe(t,"network-request-failed",{message:String(i)})}}async function Cr(t,e,n,r,i={}){const s=await Te(t,e,n,r,i);return"mfaPendingCredential"in s&&qe(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function fc(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?cs(t.config,i):`${t.config.apiScheme}://${i}`;return Ly.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function My(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Fy{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(me(this.auth,"network-request-failed")),Dy.get())})}}function hn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=me(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */function Vo(t){return t!==void 0&&t.getResponse!==void 0}function zo(t){return t!==void 0&&t.enterprise!==void 0}class pc{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return My(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
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
 */async function Uy(t){return(await Te(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function mc(t,e){return Te(t,"GET","/v2/recaptchaConfig",je(t,e))}/**
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
 */async function $y(t,e){return Te(t,"POST","/v1/accounts:delete",e)}async function mr(t,e){return Te(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function mn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function By(t,e=!1){const n=jt(t),r=await n.getIdToken(e),i=ds(r);I(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:mn(ii(i.auth_time)),issuedAtTime:mn(ii(i.iat)),expirationTime:mn(ii(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ii(t){return Number(t)*1e3}function ds(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Zn("JWT malformed, contained fewer than 3 sections"),null;try{const i=Xl(n);return i?JSON.parse(i):(Zn("Failed to decode base64 JWT payload"),null)}catch(i){return Zn("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Wo(t){const e=ds(t);return I(e,"internal-error"),I(typeof e.exp<"u","internal-error"),I(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function En(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ct&&Hy(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Hy({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Vy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ui{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=mn(this.lastLoginAt),this.creationTime=mn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function gr(t){var h;const e=t.auth,n=await t.getIdToken(),r=await En(t,mr(e,{idToken:n}));I(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(h=i.providerUserInfo)!=null&&h.length?gc(i.providerUserInfo):[],o=Wy(t.providerData,s),c=t.isAnonymous,a=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),d=c?a:!1,u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Ui(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,u)}async function zy(t){const e=jt(t);await gr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Wy(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function gc(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function qy(t,e){const n=await hc(t,{},async()=>{const r=en({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await fc(t,i,"/v1/token",`key=${s}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const a={method:"POST",headers:c,body:r};return t.emulatorConfig&&ss(t.emulatorConfig.host)&&(a.credentials="include"),uc.fetch()(o,a)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Gy(t,e){return Te(t,"POST","/v2/accounts:revokeToken",je(t,e))}/**
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
 */class Gt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){I(e.idToken,"internal-error"),I(typeof e.idToken<"u","internal-error"),I(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wo(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){I(e.length!==0,"internal-error");const n=Wo(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(I(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await qy(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Gt;return r&&(I(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(I(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(I(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gt,this.toJSON())}_performRefresh(){return Be("not implemented")}}/**
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
 */function Je(t,e){I(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Se{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new Vy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ui(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await En(this,this.stsTokenManager.getToken(this.auth,e));return I(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return By(this,e)}reload(){return zy(this)}_assign(e){this!==e&&(I(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Se({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){I(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await gr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ce(this.auth.app))return Promise.reject(st(this.auth));const e=await this.getIdToken();return await En(this,$y(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,c=n.tenantId??void 0,a=n._redirectEventId??void 0,d=n.createdAt??void 0,u=n.lastLoginAt??void 0,{uid:h,emailVerified:f,isAnonymous:m,providerData:g,stsTokenManager:x}=n;I(h&&x,e,"internal-error");const b=Gt.fromJSON(this.name,x);I(typeof h=="string",e,"internal-error"),Je(r,e.name),Je(i,e.name),I(typeof f=="boolean",e,"internal-error"),I(typeof m=="boolean",e,"internal-error"),Je(s,e.name),Je(o,e.name),Je(c,e.name),Je(a,e.name),Je(d,e.name),Je(u,e.name);const R=new Se({uid:h,auth:e,email:i,emailVerified:f,displayName:r,isAnonymous:m,photoURL:o,phoneNumber:s,tenantId:c,stsTokenManager:b,createdAt:d,lastLoginAt:u});return g&&Array.isArray(g)&&(R.providerData=g.map(w=>({...w}))),a&&(R._redirectEventId=a),R}static async _fromIdTokenResponse(e,n,r=!1){const i=new Gt;i.updateFromServerResponse(n);const s=new Se({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await gr(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];I(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?gc(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),c=new Gt;c.updateFromIdToken(r);const a=new Se({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:o}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ui(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(a,d),a}}/**
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
 */const qo=new Map;function He(t){Ge(t instanceof Function,"Expected a class definition");let e=qo.get(t);return e?(Ge(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,qo.set(t,e),e)}/**
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
 */class yc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}yc.type="NONE";const Go=yc;/**
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
 */function er(t,e,n){return`firebase:${t}:${e}:${n}`}class _t{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=er(this.userKey,i.apiKey,s),this.fullPersistenceKey=er("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await mr(this.auth,{idToken:e}).catch(()=>{});return n?Se._fromGetAccountInfoResponse(this.auth,n,e):null}return Se._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(e,n,r="authUser"){if(!n.length)return new _t(He(Go),e,r);const i=(await Promise.all(n.map(async d=>{try{if(await d._isAvailable())return d}catch{return}}))).filter(d=>d);let s=i[0]||He(Go);const o=er(r,e.config.apiKey,e.name);let c=null;for(const d of n)try{const u=await d._get(o);if(u){let h;if(typeof u=="string"){const f=await mr(e,{idToken:u}).catch(()=>{});if(!f)break;h=await Se._fromGetAccountInfoResponse(e,f,u)}else h=Se._fromJSON(e,u);d!==s&&(c=h),s=d;break}}catch{}const a=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new _t(s,e,r):(s=a[0],c&&await s._set(o,c.toJSON()),await Promise.all(n.map(async d=>{if(d!==s)try{await d._remove(o)}catch{}})),new _t(s,e,r))}}/**
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
 */function Ko(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(xc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(bc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Sc(e))return"Blackberry";if(Tc(e))return"Webos";if(vc(e))return"Safari";if((e.includes("chrome/")||wc(e))&&!e.includes("edge/"))return"Chrome";if(Ec(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function bc(t=ce()){return/firefox\//i.test(t)}function vc(t=ce()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function wc(t=ce()){return/crios\//i.test(t)}function xc(t=ce()){return/iemobile/i.test(t)}function Ec(t=ce()){return/android/i.test(t)}function Sc(t=ce()){return/blackberry/i.test(t)}function Tc(t=ce()){return/webos/i.test(t)}function us(t=ce()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ky(t=ce()){var e;return us(t)&&!!((e=window.navigator)!=null&&e.standalone)}function Yy(){return dg()&&document.documentMode===10}function Rc(t=ce()){return us(t)||Ec(t)||Tc(t)||Sc(t)||/windows phone/i.test(t)||xc(t)}/**
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
 */function _c(t,e=[]){let n;switch(t){case"Browser":n=Ko(ce());break;case"Worker":n=`${Ko(ce())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${In}/${r}`}/**
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
 */class Jy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,c)=>{try{const a=e(s);o(a)}catch(a){c(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Xy(t,e={}){return Te(t,"GET","/v2/passwordPolicy",je(t,e))}/**
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
 */const Qy=6;class Zy{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Qy,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class eb{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yo(this),this.idTokenSubscription=new Yo(this),this.beforeStateQueue=new Jy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=He(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted){try{this.persistenceManager=await _t.create(this,e)}catch(o){Qn(`Failed to initialize persistence: ${o}`),this.persistenceManager=await _t.create(this,[])}finally{(r=this._resolvePersistenceManagerAvailable)==null||r.call(this)}if(!this._deleted){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(n)}catch(o){Qn(`Failed to initialize current user: ${o}`),await this.directlySetCurrentUser(null).catch(()=>{})}this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await mr(this,{idToken:e}),r=await Se._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Ce(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,c=r==null?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a!=null&&a.user)&&(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return I(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await gr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ce(this.app))return Promise.reject(st(this));const n=e?jt(e):null;return n&&I(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&I(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ce(this.app)?Promise.reject(st(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ce(this.app)?Promise.reject(st(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(He(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Xy(this),n=new Zy(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Cn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Gy(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&He(e)||this._popupRedirectResolver;I(n,this,"argument-error"),this.redirectPersistenceManager=await _t.create(this,[He(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(I(c,this,"internal-error"),c.then(()=>{o||s(this.currentUser)}).catch(a=>{if(!o)if(typeof n!="function"&&n.error)n.error(a);else if(r)r(a);else throw a}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){if(this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,this.persistenceManager)try{e?await this.persistenceManager.setCurrentUser(e):await this.persistenceManager.removeCurrentUser()}catch(n){const r=(n==null?void 0:n.message)||String(n),i=as(this,"internal-error",`An internal AuthError has occurred: ${r}`);throw i.customData={originalError:n},i}}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return I(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_c(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Ce(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&Qn(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function dt(t){return jt(t)}class Yo{constructor(e){this.auth=e,this.observer=null,this.addObserver=gg(n=>this.observer=n)}get next(){return I(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let An={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function tb(t){An=t}function hs(t){return An.loadJS(t)}function nb(){return An.recaptchaV2Script}function rb(){return An.recaptchaEnterpriseScript}function ib(){return An.gapiScript}function Cc(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */const sb=500,ob=6e4,Hn=1e12;class ab{constructor(e){this.auth=e,this.counter=Hn,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new db(e,this.auth.name,n||{})),this.counter++,r}reset(e){var r;const n=e||Hn;(r=this._widgets.get(n))==null||r.delete(),this._widgets.delete(n)}getResponse(e){var r;const n=e||Hn;return((r=this._widgets.get(n))==null?void 0:r.getResponse())||""}async execute(e){var r;const n=e||Hn;return(r=this._widgets.get(n))==null||r.execute(),""}}class lb{constructor(){this.enterprise=new cb}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class cb{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class db{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;I(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=ub(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},ob)},sb))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function ub(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const hb="recaptcha-enterprise",gn="NO_RECAPTCHA",Jo="onFirebaseAuthREInstanceReady";class Ue{constructor(e){this.type=hb,this.auth=dt(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,c)=>{mc(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new pc(a);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,o(d.siteKey)}}).catch(a=>{c(a)})})}function i(s,o,c){const a=window.grecaptcha;zo(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(d=>{o(d)}).catch(()=>{o(gn)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new lb().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(async c=>{if(!n&&zo(window.grecaptcha)&&Ue.scriptInjectionDeferred)await Ue.scriptInjectionDeferred.promise,i(c,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=rb();a.length!==0&&(a+=c+`&onload=${Jo}`),Ue.scriptInjectionDeferred=new ec,window[Jo]=()=>{var d;(d=Ue.scriptInjectionDeferred)==null||d.resolve()},hs(a).then(()=>{var d;return(d=Ue.scriptInjectionDeferred)==null?void 0:d.promise}).then(()=>{i(c,s,o)}).catch(d=>{o(d)})}}).catch(c=>{o(c)})})}}Ue.scriptInjectionDeferred=null;async function si(t,e,n,r=!1,i=!1){const s=new Ue(t);let o;if(i)o=gn;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const c={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const a=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:a,recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const a=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:a,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function oi(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("PHONE_PROVIDER")){const o=await si(t,e,n);return r(t,o).catch(async c=>{var a;if(((a=t._getRecaptchaConfig())==null?void 0:a.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(c.code==="auth/missing-recaptcha-token"||c.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const d=await si(t,e,n,!1,!0);return r(t,d)}return Promise.reject(c)})}else{const o=await si(t,e,n,!1,!0);return r(t,o)}}async function fb(t){const e=dt(t),n=await mc(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new pc(n);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new Ue(e).verify()}/**
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
 */function pb(t,e){const n=ic(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Yt(s,e??{}))return i;qe(i,"already-initialized")}return n.initialize({options:e})}function mb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(He);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function gb(t,e,n){const r=dt(t);I(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Ic(e),{host:o,port:c}=yb(e),a=c===null?"":`:${c}`,d={url:`${s}//${o}${a}/`},u=Object.freeze({host:o,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){I(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),I(Yt(d,r.config.emulator)&&Yt(u,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,ss(o)?vg(`${s}//${o}${a}`):bb()}function Ic(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function yb(t){const e=Ic(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Xo(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Xo(o)}}}function Xo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function bb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class fs{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Be("not implemented")}_getIdTokenResponse(e){return Be("not implemented")}_linkToIdToken(e,n){return Be("not implemented")}_getReauthenticationResolver(e){return Be("not implemented")}}/**
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
 */async function Kt(t,e){return Cr(t,"POST","/v1/accounts:signInWithIdp",je(t,e))}/**
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
 */const vb="http://localhost";class kt extends fs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new kt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new kt(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Kt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Kt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Kt(e,n)}buildRequest(){const e={requestUri:vb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=en(n)}return e}}/**
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
 */async function Qo(t,e){return Te(t,"POST","/v1/accounts:sendVerificationCode",je(t,e))}async function wb(t,e){return Cr(t,"POST","/v1/accounts:signInWithPhoneNumber",je(t,e))}async function xb(t,e){const n=await Cr(t,"POST","/v1/accounts:signInWithPhoneNumber",je(t,e));if(n.temporaryProof)throw hn(t,"account-exists-with-different-credential",n);return n}const Eb={USER_NOT_FOUND:"user-not-found"};async function Sb(t,e){const n={...e,operation:"REAUTH"};return Cr(t,"POST","/v1/accounts:signInWithPhoneNumber",je(t,n),Eb)}/**
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
 */class yn extends fs{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new yn({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new yn({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return wb(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return xb(e,{idToken:n,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return Sb(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new yn({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */class Pc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class kn extends Pc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ze extends kn{constructor(){super("facebook.com")}static credential(e){return kt._fromParams({providerId:Ze.PROVIDER_ID,signInMethod:Ze.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ze.credentialFromTaggedObject(e)}static credentialFromError(e){return Ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ze.credential(e.oauthAccessToken)}catch{return null}}}Ze.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ze.PROVIDER_ID="facebook.com";/**
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
 */class et extends kn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return kt._fromParams({providerId:et.PROVIDER_ID,signInMethod:et.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return et.credentialFromTaggedObject(e)}static credentialFromError(e){return et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return et.credential(n,r)}catch{return null}}}et.GOOGLE_SIGN_IN_METHOD="google.com";et.PROVIDER_ID="google.com";/**
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
 */class tt extends kn{constructor(){super("github.com")}static credential(e){return kt._fromParams({providerId:tt.PROVIDER_ID,signInMethod:tt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tt.credentialFromTaggedObject(e)}static credentialFromError(e){return tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tt.credential(e.oauthAccessToken)}catch{return null}}}tt.GITHUB_SIGN_IN_METHOD="github.com";tt.PROVIDER_ID="github.com";/**
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
 */class nt extends kn{constructor(){super("twitter.com")}static credential(e,n){return kt._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return nt.credential(n,r)}catch{return null}}}nt.TWITTER_SIGN_IN_METHOD="twitter.com";nt.PROVIDER_ID="twitter.com";/**
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
 */class Xt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Se._fromIdTokenResponse(e,r,i),o=Zo(r);return new Xt({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Zo(r);return new Xt({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Zo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class yr extends ct{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,yr.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new yr(e,n,r,i)}}function Ac(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?yr._fromErrorAndOperation(t,s,e,r):s})}async function Tb(t,e,n=!1){const r=await En(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Xt._forOperation(t,"link",r)}/**
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
 */async function Rb(t,e,n=!1){const{auth:r}=t;if(Ce(r.app))return Promise.reject(st(r));const i="reauthenticate";try{const s=await En(t,Ac(r,i,e,t),n);I(s.idToken,r,"internal-error");const o=ds(s.idToken);I(o,r,"internal-error");const{sub:c}=o;return I(t.uid===c,r,"user-mismatch"),Xt._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&qe(r,"user-mismatch"),s}}/**
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
 */async function kc(t,e,n=!1){if(Ce(t.app))return Promise.reject(st(t));const r="signIn",i=await Ac(t,r,e),s=await Xt._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function _b(t,e){return kc(dt(t),e)}function Cb(t,e,n,r){return jt(t).onIdTokenChanged(e,n,r)}function Ib(t,e,n){return jt(t).beforeAuthStateChanged(e,n)}/**
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
 */function ea(t,e){return Te(t,"POST","/v2/accounts/mfaEnrollment:start",je(t,e))}const br="__sak";/**
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
 */class Oc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(br,"1"),this.storage.removeItem(br),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Pb=1e3,Ab=10;class jc extends Oc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Rc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Yy()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Ab):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Pb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}jc.type="LOCAL";const kb=jc;/**
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
 */class Nc extends Oc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Nc.type="SESSION";const Lc=Nc;/**
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
 */function Ob(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ir{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ir(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(o).map(async d=>d(n.origin,s)),a=await Ob(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ir.receivers=[];/**
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
 */function ps(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class jb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((c,a)=>{const d=ps("",20);i.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===d)switch(f.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(f.data.response);break;default:clearTimeout(u),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Y(){return window}function Nb(t){Y().location.href=t}/**
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
 */function ms(){return typeof Y().WorkerGlobalScope<"u"&&typeof Y().importScripts=="function"}async function Lb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Db(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function Mb(){return ms()?self:null}/**
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
 */const Dc="firebaseLocalStorageDb",Fb=1,vr="firebaseLocalStorage",Mc="fbase_key";class On{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Pr(t,e){return t.transaction([vr],e?"readwrite":"readonly").objectStore(vr)}function Ub(){const t=indexedDB.deleteDatabase(Dc);return new On(t).toPromise()}function Fc(){const t=indexedDB.open(Dc,Fb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(vr,{keyPath:Mc})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(vr)?e(r):(r.close(),await Ub(),e(await Fc()))})})}async function ta(t,e,n){const r=Pr(t,!0).put({[Mc]:e,value:n});return new On(r).toPromise()}async function $b(t,e){const n=Pr(t,!1).get(e),r=await new On(n).toPromise();return r===void 0?null:r.value}function na(t,e){const n=Pr(t,!0).delete(e);return new On(n).toPromise()}const Bb=800,Hb=3;class Uc{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=Fc(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Hb)throw r;if(this.dbPromise){const i=this.dbPromise;this.dbPromise=null;try{(await i).close()}catch{}}}}async initializeServiceWorkerMessaging(){return ms()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ir._getInstance(Mb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await Lb(),!this.activeServiceWorker)return;this.sender=new jb(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Db()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await ta(e,br,"1"),await na(e,br)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ta(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>$b(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>na(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{const e=await this._withRetries(i=>{const s=Pr(i,!1).getAll();return new On(s).toPromise()});if(this.isClosing)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}catch(e){return this.isClosing||Qn(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Bb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}Uc.type="LOCAL";const Vb=Uc;/**
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
 */function ra(t,e){return Te(t,"POST","/v2/accounts/mfaSignIn:start",je(t,e))}/**
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
 */const ai=Cc("rcb"),zb=new Pn(3e4,6e4);class Wb{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=Y().grecaptcha)!=null&&e.render)}load(e,n=""){return I(qb(n),e,"argument-error"),this.shouldResolveImmediately(n)&&Vo(Y().grecaptcha)?Promise.resolve(Y().grecaptcha):new Promise((r,i)=>{const s=Y().setTimeout(()=>{i(me(e,"network-request-failed"))},zb.get());Y()[ai]=()=>{Y().clearTimeout(s),delete Y()[ai];const c=Y().grecaptcha;if(!c||!Vo(c)){i(me(e,"internal-error"));return}const a=c.render;c.render=(d,u)=>{const h=a(d,u);return this.counter++,h},this.hostLanguage=n,r(c)};const o=`${nb()}?${en({onload:ai,render:"explicit",hl:n})}`;hs(o).catch(()=>{clearTimeout(s),i(me(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!((n=Y().grecaptcha)!=null&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function qb(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class Gb{async load(e){return new ab(e)}clearedOneInstance(){}}/**
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
 */const bn="recaptcha",Kb={theme:"light",type:"image"};class v0{constructor(e,n,r={...Kb}){this.parameters=r,this.type=bn,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=dt(e),this.isInvisible=this.parameters.size==="invisible",I(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;I(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Gb:new Wb,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){I(!this.parameters.sitekey,this.auth,"argument-error"),I(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),I(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Y()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){I(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){I(dc()&&!ms(),this.auth,"internal-error"),await Yb(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Uy(this.auth);I(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return I(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Yb(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class Jb{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=yn._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function w0(t,e,n){if(Ce(t.app))return Promise.reject(st(t));const r=dt(t),i=await Xb(r,e,jt(n));return new Jb(i,s=>_b(r,s))}async function Xb(t,e,n){var r;if(!t._getRecaptchaConfig())try{await fb(t)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const s=i.session;if("phoneNumber"in i){I(s.type==="enroll",t,"internal-error");const o={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await oi(t,o,"mfaSmsEnrollment",async(u,h)=>{if(h.phoneEnrollmentInfo.captchaResponse===gn){I((n==null?void 0:n.type)===bn,u,"argument-error");const f=await li(u,h,n);return ea(u,f)}return ea(u,h)},"PHONE_PROVIDER").catch(u=>Promise.reject(u))).phoneSessionInfo.sessionInfo}else{I(s.type==="signin",t,"internal-error");const o=((r=i.multiFactorHint)==null?void 0:r.uid)||i.multiFactorUid;I(o,t,"missing-multi-factor-info");const c={mfaPendingCredential:s.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await oi(t,c,"mfaSmsSignIn",async(h,f)=>{if(f.phoneSignInInfo.captchaResponse===gn){I((n==null?void 0:n.type)===bn,h,"argument-error");const m=await li(h,f,n);return ra(h,m)}return ra(h,f)},"PHONE_PROVIDER").catch(h=>Promise.reject(h))).phoneResponseInfo.sessionInfo}}else{const s={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await oi(t,s,"sendVerificationCode",async(d,u)=>{if(u.captchaResponse===gn){I((n==null?void 0:n.type)===bn,d,"argument-error");const h=await li(d,u,n);return Qo(d,h)}return Qo(d,u)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).sessionInfo}}finally{n==null||n._reset()}}async function li(t,e,n){I(n.type===bn,t,"argument-error");const r=await n.verify();I(typeof r=="string",t,"argument-error");const i={...e};if("phoneEnrollmentInfo"in i){const s=i.phoneEnrollmentInfo.phoneNumber,o=i.phoneEnrollmentInfo.captchaResponse,c=i.phoneEnrollmentInfo.clientType,a=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:o,clientType:c,recaptchaVersion:a}}),i}else if("phoneSignInInfo"in i){const s=i.phoneSignInInfo.captchaResponse,o=i.phoneSignInInfo.clientType,c=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:o,recaptchaVersion:c}}),i}else return Object.assign(i,{recaptchaToken:r}),i}/**
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
 */function Qb(t,e){return e?He(e):(I(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class gs extends fs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Kt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Kt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Kt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Zb(t){return kc(t.auth,new gs(t),t.bypassAuthState)}function ev(t){const{auth:e,user:n}=t;return I(n,e,"internal-error"),Rb(n,new gs(t),t.bypassAuthState)}async function tv(t){const{auth:e,user:n}=t;return I(n,e,"internal-error"),Tb(n,new gs(t),t.bypassAuthState)}/**
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
 */class $c{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Zb;case"linkViaPopup":case"linkViaRedirect":return tv;case"reauthViaPopup":case"reauthViaRedirect":return ev;default:qe(this.auth,"internal-error")}}resolve(e){Ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const nv=new Pn(2e3,1e4);class Ht extends $c{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ht.currentPopupAction&&Ht.currentPopupAction.cancel(),Ht.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return I(e,this.auth,"internal-error"),e}async onExecution(){Ge(this.filter.length===1,"Popup operations only handle one event");const e=ps();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(me(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(me(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ht.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(me(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nv.get())};e()}}Ht.currentPopupAction=null;/**
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
 */const rv="pendingRedirect",tr=new Map;class iv extends $c{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=tr.get(this.auth._key());if(!e){try{const r=await sv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}tr.set(this.auth._key(),e)}return this.bypassAuthState||tr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sv(t,e){const n=lv(e),r=av(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function ov(t,e){tr.set(t._key(),e)}function av(t){return He(t._redirectPersistence)}function lv(t){return er(rv,t.config.apiKey,t.name)}async function cv(t,e,n=!1){if(Ce(t.app))return Promise.reject(st(t));const r=dt(t),i=Qb(r,e),o=await new iv(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const dv=600*1e3;class uv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hv(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Bc(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(me(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=dv&&this.cachedEventUids.clear(),this.cachedEventUids.has(ia(e))}saveEventToCache(e){this.cachedEventUids.add(ia(e)),this.lastProcessedEventTime=Date.now()}}function ia(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Bc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function hv(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bc(t);default:return!1}}/**
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
 */async function fv(t,e={}){return Te(t,"GET","/v1/projects",e)}/**
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
 */const pv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mv=/^https?/;async function gv(t){if(t.config.emulator)return;const{authorizedDomains:e}=await fv(t);for(const n of e)try{if(yv(n))return}catch{}qe(t,"unauthorized-domain")}function yv(t){const e=Fi(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!mv.test(n))return!1;if(pv.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const bv=new Pn(3e4,6e4);function sa(){const t=Y().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function vv(t){return new Promise((e,n)=>{var i,s,o;function r(){sa(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sa(),n(me(t,"network-request-failed"))},timeout:bv.get()})}if((s=(i=Y().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Y().gapi)!=null&&o.load)r();else{const c=Cc("iframefcb");return Y()[c]=()=>{gapi.load?r():n(me(t,"network-request-failed"))},hs(`${ib()}?onload=${c}`).catch(a=>n(a))}}).catch(e=>{throw nr=null,e})}let nr=null;function wv(t){return nr=nr||vv(t),nr}/**
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
 */const xv=new Pn(5e3,15e3),Ev="__/auth/iframe",Sv="emulator/auth/iframe",Tv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Rv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _v(t){const e=t.config;I(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?cs(e,Sv):`https://${t.config.authDomain}/${Ev}`,r={apiKey:e.apiKey,appName:t.name,v:In},i=Rv.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${en(r).slice(1)}`}async function Cv(t){const e=await wv(t),n=Y().gapi;return I(n,t,"internal-error"),e.open({where:document.body,url:_v(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Tv,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=me(t,"network-request-failed"),c=Y().setTimeout(()=>{s(o)},xv.get());function a(){Y().clearTimeout(c),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
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
 */const Iv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Pv=500,Av=600,kv="_blank",Ov="http://localhost";class oa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jv(t,e,n,r=Pv,i=Av){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const a={...Iv,width:r.toString(),height:i.toString(),top:s,left:o},d=ce().toLowerCase();n&&(c=wc(d)?kv:n),bc(d)&&(e=e||Ov,a.scrollbars="yes");const u=Object.entries(a).reduce((f,[m,g])=>`${f}${m}=${g},`,"");if(Ky(d)&&c!=="_self")return Nv(e||"",c),new oa(null);const h=window.open(e||"",c,u);I(h,t,"popup-blocked");try{h.focus()}catch{}return new oa(h)}function Nv(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Lv="__/auth/handler",Dv="emulator/auth/handler",Mv=encodeURIComponent("fac");async function aa(t,e,n,r,i,s){I(t.config.authDomain,t,"auth-domain-config-required"),I(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:In,eventId:i};if(e instanceof Pc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",mg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof kn){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const u of Object.keys(c))c[u]===void 0&&delete c[u];const a=await t._getAppCheckToken(),d=a?`#${Mv}=${encodeURIComponent(a)}`:"";return`${Fv(t)}?${en(c).slice(1)}${d}`}function Fv({config:t}){return t.emulator?cs(t,Dv):`https://${t.authDomain}/${Lv}`}/**
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
 */const ci="webStorageSupport";class Uv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Lc,this._completeRedirectFn=cv,this._overrideRedirectResult=ov}async _openPopup(e,n,r,i){var o;Ge((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await aa(e,n,r,Fi(),i);return jv(e,s,ps())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await aa(e,n,r,Fi(),i);return Nb(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ge(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Cv(e),r=new uv(e);return n.register("authEvent",i=>(I(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ci,{type:ci},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[ci];s!==void 0&&n(!!s),qe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=gv(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Rc()||vc()||us()}}const $v=Uv;var la="@firebase/auth",ca="1.13.6";/**
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
 */class Bv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){I(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Hv(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Vv(t){wn(new Jt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;I(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_c(t)},d=new eb(r,i,s,a);return mb(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),wn(new Jt("auth-internal",e=>{const n=dt(e.getProvider("auth").getImmediate());return(r=>new Bv(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qt(la,ca,Hv(t)),qt(la,ca,"esm2020")}/**
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
 */const zv=300,Wv=Zl("authIdTokenMaxAge")||zv;let da=null;const qv=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Wv)return;const i=n==null?void 0:n.token;da!==i&&(da=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Gv(t=by()){const e=ic(t,"auth");if(e.isInitialized())return e.getImmediate();const n=pb(t,{popupRedirectResolver:$v,persistence:[Vb,kb,Lc]}),r=Zl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=qv(s.toString());Ib(n,o,()=>o(n.currentUser)),Cb(n,c=>o(c))}}const i=sg("auth");return i&&gb(n,`http://${i}`),n}function Kv(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}tb({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=me("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Kv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Vv("Browser");const Yv={apiKey:Fm,authDomain:Um,projectId:$m,storageBucket:Bm,messagingSenderId:Hm,appId:Vm,measurementId:zm},Jv=sc(Yv),Hc=Gv(Jv),Xv=()=>typeof window>"u"?!1:["localhost","127.0.0.1","[::1]"].includes(window.location.hostname);Xv()&&(Hc.settings.appVerificationDisabledForTesting=!0);function Qv(t){return t.includes(Ee.LIST_ALL)?"all":t.includes(Ee.LIST_SUB)?"sub":"own"}const Zv="/api/company/orders/claim";async function ew(t){try{return(await be.post(Zv,{phone:t})).data.claimedOrderIds??[]}catch(e){return console.error("[portal auth] claimOrders failed",e),[]}}const Ot=hf()(mf(t=>({token:null,refresh:null,uid:null,name:null,companyUid:null,permissionList:[],login:e=>{var r,i;t({token:e.token,refresh:e.refresh,uid:e.uid,name:e.name,companyUid:e.companyUid??null,permissionList:e.permission.length>0?e.permission:mu()});const n=((r=e.verifiedPhone)==null?void 0:r.trim())||((i=Hc.currentUser)==null?void 0:i.phoneNumber)||"";n&&ew(n)},logout:()=>t({token:null,refresh:null,uid:null,name:null,companyUid:null,permissionList:[]})}),{name:`${Mm}:portal-auth`,onRehydrateStorage:()=>t=>{t!=null&&t.token&&!ur("X-Token")&&t.logout()}})),ys=()=>Ot(t=>t.token!==null),Vc=t=>Ot(e=>e.permissionList.includes(t)),x0=()=>Ot(t=>Qv(t.permissionList)),zc=cd`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background: var(--v29-primary-fill);
  color: var(--v29-on-primary);
  font-family: ${at};
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
`,tw=E(Ae)`
  ${zc}
`,Wc=E.div`
  position: relative;
`,nw=E.button`
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
`,qc=E(Vi.div)`
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
`,rw=E.div`
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
`,iw=E(Ae)`
  ${Ar}
  font-family: ${N};
`,sw=E.button`
  ${Ar}
  font-family: ${N};
`,ow=E.button`
  ${zc}
  svg {
    width: 12px;
    height: 12px;
    transition: transform 0.2s ease;
  }
  &[aria-expanded='true'] svg {
    transform: rotate(180deg);
  }
`,aw=E.a`
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
`,lw=E(Ae)`
  ${Ar}
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  font-family: ${N};
`,cw=E.a`
  ${Ar}
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  font-family: ${N};
`,dw=E.span`
  font-weight: 600;
`,uw=E.span`
  font-size: 12px;
  /* the full text colour: the muted grey drops below AA on the hover tint */
  color: var(--v29-text);
  opacity: 0.85;
`,hw=({destinations:t})=>{const{t:e}=Gi(),[n,r]=S.useState(!1),i=S.useRef(null),s=S.useRef(null);if(S.useEffect(()=>{if(!n)return;const o=a=>{var d;(d=i.current)!=null&&d.contains(a.target)||r(!1)},c=a=>{var d;a.key==="Escape"&&(r(!1),(d=s.current)==null||d.focus())};return document.addEventListener("pointerdown",o),document.addEventListener("keydown",c),()=>{document.removeEventListener("pointerdown",o),document.removeEventListener("keydown",c)}},[n]),t.length===0)return null;if(t.length===1){const[o]=t;return o.external?l.jsx(aw,{href:o.href,"data-login-role":o.role,children:e(`common:loginRole.${o.role}.login`)}):l.jsx(tw,{to:o.href,"data-login-role":o.role,children:e("common:signIn")})}return l.jsxs(Wc,{ref:i,onBlur:o=>{var c;n&&!((c=i.current)!=null&&c.contains(o.relatedTarget))&&r(!1)},children:[l.jsxs(ow,{ref:s,type:"button","aria-expanded":n,"aria-controls":"nav-signin-destinations",onClick:()=>r(o=>!o),children:[e("common:signIn"),l.jsx("svg",{viewBox:"0 0 12 12","aria-hidden":"true",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:l.jsx("path",{d:"M2.5 4.5 6 8l3.5-3.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),l.jsx(Wi,{children:n&&l.jsx(qc,{id:"nav-signin-destinations",initial:{opacity:0,y:-6},animate:{opacity:1,y:0},exit:{opacity:0,y:-6},transition:{duration:.18,ease:wr},children:t.map(o=>{const c=l.jsxs(l.Fragment,{children:[l.jsx(dw,{children:e(`common:loginRole.${o.role}.label`)}),l.jsx(uw,{children:e(`common:loginRole.${o.role}.hint`)})]});return o.external?l.jsx(cw,{href:o.href,"data-login-role":o.role,children:c},o.role):l.jsx(lw,{to:o.href,"data-login-role":o.role,onClick:()=>r(!1),children:c},o.role)})})})]})},fw=E.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px 10px;
  font-size: 14px;
  color: var(--v29-muted);
`,pw=E.button`
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
`,Gc=()=>{const{t,i18n:e}=Gi(),n=Ot(g=>g.token),r=Ot(g=>g.name),[i,s]=S.useState(!1),o=Vc(Ee.LIST),c=S.useRef(null),a=dd(),d=Yi();if(S.useEffect(()=>{if(!i)return;const g=b=>{var R;(R=c.current)!=null&&R.contains(b.target)||s(!1)},x=b=>{b.key==="Escape"&&s(!1)};return document.addEventListener("pointerdown",g),document.addEventListener("keydown",x),()=>{document.removeEventListener("pointerdown",g),document.removeEventListener("keydown",x)}},[i]),!n)return l.jsx(hw,{destinations:d});const u=(r??"?").trim().charAt(0).toUpperCase()||"?",h=e.language,f=Ti.length>1,m=g=>{lf(g)};return l.jsxs(Wc,{ref:c,children:[l.jsx(nw,{"aria-label":t("common:accountMenu"),"aria-expanded":i,onClick:()=>s(g=>!g),children:u}),l.jsx(Wi,{children:i&&l.jsxs(qc,{initial:{opacity:0,y:-6},animate:{opacity:1,y:0},exit:{opacity:0,y:-6},transition:{duration:.18,ease:wr},children:[l.jsx(rw,{children:r}),o&&l.jsx(iw,{to:"/portal/orders",onClick:()=>s(!1),children:t("common:orders")}),f&&l.jsxs(fw,{children:[l.jsx("span",{children:t("common:language")}),l.jsx("span",{children:Ti.map(g=>l.jsx(pw,{$active:h===g,onClick:()=>m(g),children:of[g]},g))})]}),l.jsx(sw,{onClick:()=>{s(!1),Bl(),a(Ki(),{replace:!0})},children:t("common:signOut")})]})})]})},mw=E.nav`
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
    --brand-logo-color: ${zi};
  }

  @media (max-width: 720px) {
    padding: 12px 20px;
  }
`,gw=E.div`
  display: flex;
  align-items: center;
  gap: 16px;
  @media (max-width: 480px) {
    gap: 8px;
  }
`,yw=E.span`
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
`,bw=E.button`
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
`,vw=E(Ae)`
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 8px;
  font-family: ${at};
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
`,ww=({theme:t,onToggleTheme:e,audience:n="public"})=>{const{t:r}=Gi(),{pathname:i}=ke(),s=ys(),o=i.startsWith("/portal")&&s,c=Yi(),a=c.length>0,d=c.some(h=>h.role==="shipper"),u=n==="receiver";return l.jsxs(mw,{children:[l.jsx(Ae,{to:"/","aria-label":r("common:brandHome"),style:{display:"inline-flex"},children:l.jsxs(yw,{$compact:a&&!u,children:[l.jsx("span",{className:"nav-wordmark","aria-hidden":"true",children:l.jsx(rr,{height:28,ariaLabel:""})}),l.jsx("span",{className:"nav-mark","aria-hidden":"true",children:l.jsx(rr,{height:28,variant:"mark",ariaLabel:""})})]})}),l.jsxs(gw,{children:[l.jsx(bw,{onClick:e,"aria-label":r("common:toggleTheme"),children:t==="dark"?l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[l.jsx("circle",{cx:"12",cy:"12",r:"5"}),l.jsx("path",{d:"M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"})]}):l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:l.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})}),!o&&!u&&l.jsx(vw,{to:"/contact",$ghost:d,$hideOnNarrow:d,children:r("common:getEarlyAccess")}),!u&&(a||s)&&l.jsx(Gc,{})]})]})},ua="senditgo-v38-cookie-consent",ha="--cookie-consent-offset",Kc=720;function fa(t){return t<=Kc}function xw(t){return t<=0?0:Math.round(t)}function Yc(t,e,n){if(n<=0){t.removeProperty(ha),e.style.paddingBottom="";return}const r=`${n}px`;t.setProperty(ha,r),e.style.paddingBottom=r}function pa(t,e){Yc(t,e,0)}const Ew=E(Vi.div)`
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
`,Sw=E.div`
  width: 100%;
  max-width: 1180px;
  display: flex;
  align-items: ${t=>t.$stack?"stretch":"center"};
  justify-content: space-between;
  flex-direction: ${t=>t.$stack?"column":"row"};
  gap: ${t=>t.$stack?"12px":"20px"};
  text-align: ${t=>t.$stack?"center":"left"};
`,Tw=E.p`
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
`,Rw=E.div`
  display: flex;
  align-items: center;
  justify-content: ${t=>t.$stack?"center":"flex-end"};
  gap: 8px;
  flex-shrink: 0;
`,ma=E.button`
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
    background: var(--v29-primary-fill);
    color: var(--v29-on-primary);
    &:hover { background: var(--v29-primary-hover); }
  `:`
    background: transparent;
    color: var(--v29-muted);
    border: 1px solid var(--v29-line-soft);
    &:hover { color: var(--v29-text); border-color: var(--v29-muted); }
  `}
`;function _w(){const[t,e]=S.useState(()=>typeof window>"u"?!1:fa(window.innerWidth));return S.useEffect(()=>{const n=window.matchMedia(`(max-width: ${Kc}px)`),r=()=>e(fa(window.innerWidth));return r(),n.addEventListener("change",r),()=>n.removeEventListener("change",r)},[]),t}const $i="senditgo:edit-cookie-preferences",Cw=E.button`
  background: transparent;
  font: inherit;
  font-weight: 600;
  color: var(--v29-text);
  cursor: pointer;
  padding: 0;
  min-height: 44px;
  margin-bottom: 8px;
  border: 0;
  text-decoration: underline;
  text-underline-offset: 3px;
`;function Iw(){return l.jsx(Cw,{type:"button",onClick:()=>window.dispatchEvent(new Event($i)),children:"Change cookie preferences"})}const Jc=()=>{const[t,e]=S.useState(()=>{try{return localStorage.getItem(ua)||null}catch{return null}}),[n,r]=S.useState(!1),i=S.useRef(null),s=_w(),o=S.useRef(null);S.useEffect(()=>{const d=()=>{o.current=document.activeElement instanceof HTMLElement?document.activeElement:null,e(null),r(!0),requestAnimationFrame(()=>{var u,h;return(h=(u=i.current)==null?void 0:u.querySelector("button"))==null?void 0:h.focus()})};return window.addEventListener($i,d),()=>window.removeEventListener($i,d)},[]),S.useEffect(()=>{if(t!==null)return;const d=window.setTimeout(()=>r(!0),1100);return()=>window.clearTimeout(d)},[t]);const c=t===null&&n;S.useEffect(()=>{if(!c){pa(document.documentElement.style,document.body);return}const d=i.current;if(!d)return;const u=()=>{Yc(document.documentElement.style,document.body,xw(d.offsetHeight))};u();const h=new ResizeObserver(u);return h.observe(d),()=>{h.disconnect(),pa(document.documentElement.style,document.body)}},[c,s]);const a=d=>{var u;e(d),(u=o.current)==null||u.focus(),o.current=null;try{localStorage.setItem(ua,d)}catch{}};return l.jsx(Wi,{children:c&&l.jsx(Ew,{ref:i,role:"region","aria-label":"Cookie consent",initial:{y:"100%"},animate:{y:0},exit:{y:"100%"},transition:{duration:.35,ease:wr},children:l.jsxs(Sw,{$stack:s,children:[l.jsxs(Tw,{children:[l.jsx("span",{className:"lede",children:"Cookie preferences."})," Choose whether to allow optional analytics cookies. We store your choice in this browser. Read our ",l.jsx(Ae,{to:ka,children:"Privacy Policy"}),"."]}),l.jsxs(Rw,{$stack:s,children:[l.jsx(ma,{$variant:"decline",type:"button",onClick:()=>a("declined"),children:"Decline"}),l.jsx(ma,{$variant:"accept",type:"button",onClick:()=>a("accepted"),children:"Accept"})]})]})},"consent")})},Pw=E.main`
  flex: 1;
  width: 100%;
  max-width: 760px;
  min-width: 0;
  margin: 0 auto;
  padding: 120px 32px 96px;

  @media (max-width: 720px) {
    padding: 96px 20px 64px;
  }
`,ut=ud,Nt=E(pd).attrs({as:"h1"})``,tn=hd,O=E(md)`
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
`,Ye=({children:t})=>{const{mode:e,toggleTheme:n}=Oa();return l.jsxs(l.Fragment,{children:[l.jsx(ja,{}),l.jsxs(fd,{children:[l.jsx(ww,{theme:e,onToggleTheme:n}),l.jsx(Pw,{children:t}),l.jsx(Na,{}),l.jsx(Jc,{})]})]})},ga="https://apps.apple.com/app/sendit-go/id000000000",ya="https://play.google.com/store/apps/details?id=tw.com.holieninnovation.senditgo",Aw=()=>{if(typeof navigator>"u")return"other";const t=navigator.userAgent||"",e=navigator.platform==="MacIntel"&&(navigator.maxTouchPoints??0)>1;return/iPad|iPhone|iPod/.test(t)||e?"ios":/Android/i.test(t)?"android":"other"},kw=E.div`
  display: grid;
  gap: 14px;
  width: 100%;
  max-width: 420px;
  margin: 32px auto 24px;
`,ba=E.a`
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
`,va=E.span`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`,Ow=E.p`
  font-family: ${N};
  font-size: 13px;
  color: var(--v29-muted);
  margin: 16px 0 0;
  text-align: center;
`,jw=E.div`
  margin: 40px auto 0;
  display: grid;
  justify-items: center;
  gap: 12px;
`,Nw=E.div`
  background: #FFFFFF;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid var(--v29-line-soft);
  box-shadow: 0 4px 24px -8px rgba(0, 0, 0, 0.15);
  line-height: 0;
`,Lw=E.span`
  font-family: ${N};
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--v29-muted);
`,Dw=()=>l.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:l.jsx("path",{d:"M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.49-.12-1.1.473-2.25 1.182-2.99.795-.85 2.142-1.49 2.982-1.58zM20.93 17.49c-.45 1.04-.66 1.5-1.24 2.42-.81 1.28-1.96 2.86-3.38 2.88-1.26.01-1.59-.82-3.3-.82s-2.07.81-3.3.83c-1.42.02-2.49-1.39-3.31-2.66-2.28-3.55-2.52-7.71-1.11-9.92.99-1.55 2.55-2.45 4.02-2.45 1.5 0 2.45.82 3.69.82 1.21 0 1.95-.82 3.69-.82 1.32 0 2.71.72 3.7 1.96-3.25 1.78-2.72 6.42-.49 7.74z"})}),Mw=()=>l.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:l.jsx("path",{d:"M17.6 9.48l1.84-3.18a.4.4 0 0 0-.69-.4l-1.86 3.23a11.85 11.85 0 0 0-9.78 0L5.25 5.9a.4.4 0 0 0-.69.4l1.84 3.18A11.49 11.49 0 0 0 .5 19h23a11.49 11.49 0 0 0-5.9-9.52zM7 15.25a1.06 1.06 0 1 1 1.06-1.06A1.06 1.06 0 0 1 7 15.25zm10 0a1.06 1.06 0 1 1 1.06-1.06A1.06 1.06 0 0 1 17 15.25z"})}),Fw=()=>{const[t,e]=S.useState("other");S.useEffect(()=>{const r=Aw();e(r),r==="ios"?window.location.replace(ga):r==="android"&&window.location.replace(ya)},[]);const n=S.useMemo(()=>typeof window<"u"?`${window.location.origin}${Ie("/install")}`:"https://senditgo.com/install",[]);return l.jsxs(Ye,{children:[l.jsxs(kw,{children:[l.jsxs(ba,{href:ga,"aria-label":"Download on the App Store",children:[l.jsx(va,{children:l.jsx(Dw,{})}),l.jsxs("span",{children:[l.jsx("span",{className:"small",children:"Download on the"}),l.jsx("span",{className:"big",children:"App Store"})]})]}),l.jsxs(ba,{href:ya,"aria-label":"Get it on Google Play",children:[l.jsx(va,{children:l.jsx(Mw,{})}),l.jsxs("span",{children:[l.jsx("span",{className:"small",children:"Get it on"}),l.jsx("span",{className:"big",children:"Google Play"})]})]})]}),t==="other"&&l.jsx(Ow,{children:"On a desktop? Scan the code below with your phone."}),l.jsxs(jw,{children:[l.jsx(Nw,{children:l.jsx(el,{value:n,size:144,level:"M",bgColor:"#FFFFFF",fgColor:zi,"aria-label":"Scan to install the SenditGo driver app"})}),l.jsx(Lw,{children:"Scan to install"})]})]})},le="[PLACEHOLDER — Yi]",Xe={eyebrow:"About",title:`${le} — the one line that says what SenditGo is for`,belief:`${le} — one sentence on what we believe about delivery work and why this company exists.`,blocks:[{heading:"Where we started",body:`${le} — the origin: what was broken for fleet operators, and what made it worth building software for.`},{heading:"How we work",body:`${le} — how the team builds and supports the product, and what a customer can expect from us day to day.`},{heading:"Where we are going",body:`${le} — the direction over the next few years, in plain terms and without dates we cannot keep.`}],valuesHeading:"What we hold to",values:[{heading:`${le} — value one`,body:`${le} — one or two lines on what it means in practice.`},{heading:`${le} — value two`,body:`${le} — one or two lines on what it means in practice.`},{heading:`${le} — value three`,body:`${le} — one or two lines on what it means in practice.`},{heading:`${le} — value four`,body:`${le} — one or two lines on what it means in practice.`}],closing:{heading:"Work with us",body:`${le} — the closing invitation, and where to go next.`}},Uw=E.p`
  margin: 0 0 24px;
  padding: 12px 16px;
  border-left: 3px solid ${"var(--v29-primary)"};
  background: color-mix(in srgb, var(--v29-primary) 8%, transparent);
  font-family: ${N};
  font-size: 13.5px;
  color: var(--v29-text);
`,$w=E.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 8px;
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`,Bw=E.div`
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
`,Hw=()=>l.jsxs(Ye,{children:[l.jsx(ut,{children:Xe.eyebrow}),l.jsx(Nt,{children:Xe.title}),l.jsxs(Uw,{children:["This page is a structure waiting for its words. Every line marked"," ",l.jsx("strong",{children:le})," is a slot, not copy."]}),l.jsx(tn,{children:Xe.belief}),Xe.blocks.map(t=>l.jsxs(O,{children:[l.jsx("h2",{children:t.heading}),l.jsx("p",{children:t.body})]},t.heading)),l.jsxs(O,{children:[l.jsx("h2",{children:Xe.valuesHeading}),l.jsx($w,{children:Xe.values.map((t,e)=>l.jsxs(Bw,{children:[l.jsx("h3",{children:t.heading}),l.jsx("p",{children:t.body})]},e))})]}),l.jsxs(O,{children:[l.jsx("h2",{children:Xe.closing.heading}),l.jsx("p",{children:Xe.closing.body})]})]}),Me="[PLACEHOLDER — Yi]",U={eyebrow:"About",title:"Moving delivery forward.",opening:"We believe running a delivery operation should feel clear, connected and manageable — even when everything around it is moving.",beliefSlot:`${Me}: final one-line company belief / purpose statement.`,whoWeAre:"SenditGo builds technology for the people who plan, manage and carry out delivery every day. We bring the moving parts of an operation together so teams can spend less time working around disconnected systems and more time getting things where they need to go.",reality:{heading:"Built for the reality of delivery",body:["Delivery doesn't happen in a perfect environment. Plans change. Orders change. Drivers move. Customers are waiting. Managers need to make decisions with the information they have right now.","SenditGo exists to make that work simpler.","Our aim is to give operators and drivers a shared view of what is happening — from orders and shifts to routes, delivery progress and proof of delivery — and make the next action easier to understand."],slot:`${Me}: what problem do we ultimately want SenditGo to solve for the industry? 1–2 sentences.`},heading:{heading:"Where we're heading",body:"We see a future where delivery operations don't have to be held together by spreadsheets, manual handovers and information scattered between different systems.",slot:`${Me}: long-term ambition for SenditGo.`,pull:"We want reliable, intelligent delivery technology to feel like part of the operation itself — quietly helping people make better decisions, respond faster and keep goods moving."},origin:{heading:"It started with a real operational problem",body:["SenditGo began by looking closely at the everyday problems inside transportation and logistics: information living in different places, repeated manual work, limited visibility and software that doesn't always reflect what happens in the field.","Instead of treating those as separate problems, we started building a connected system around the operation as a whole.","Today, that means bringing fleet management, delivery operations and the driver experience together across web and mobile."],slot:`${Me}: 2–3 factual sentences about the real origin of SenditGo. No legal-company history required.`},howWeBuild:{heading:"How we choose to build",intro:"These are not HR slogans. Each one should tell a customer something about the kind of company they are dealing with.",values:[{heading:"Solve the real problem",body:"We start with what people are actually trying to get done. Technology matters when it improves the work, not simply because it is new."},{heading:"Make complexity feel simple",body:"Logistics is complex enough. We do the difficult work behind the scenes so the experience in front of the user can stay clear."},{heading:"Build for the people doing the work",body:"Drivers, operators and managers experience the same operation differently. We listen to the people using the product and design around the realities of their day."},{heading:"Own the outcome",body:"Shipping a feature isn't the finish line. We care about whether what we build works in practice and makes the operation better."},{heading:"Improve together",body:"Good products come from different perspectives. We share what we know, challenge ideas constructively and keep learning from customers and one another."}],extraSlot:{heading:`${Me}: optional SenditGo-specific value`,body:`${Me}: adapted from responsibility / resourcefulness / partnership / global perspective — in SenditGo words, not a parent-company paste.`}},standard:{heading:"The standard we're working toward",slot:`${Me}: a short statement describing what success looks like for SenditGo.`,example:"Delivery technology that people can trust without having to think about it.",body:"When the system is doing its job, teams have the information they need, drivers know what comes next, managers can respond to change, and the technology stays out of the way."},stillBuilding:{heading:"And we're still building",body:"What we have today is one part of a much longer journey.",slot:`${Me}: what SenditGo wants to become over the next several years, without dates, market-size claims or unreleased product promises.`,close:"We'll continue listening to the people running real operations, improving what already exists and exploring where better technology can remove the next source of friction."},invite:{heading:"Come build what moves next",body:"The best delivery systems aren't built from assumptions. They're shaped by the people running operations, solving problems and moving things every day.",slot:`${Me}: final CTA depending on what this page should drive.`}},Vw=E.h1`
  font-family: ${at};
  font-style: italic;
  font-weight: 700;
  font-size: clamp(1.9rem, 1.3rem + 2.6vw, 3rem);
  letter-spacing: 0.01em;
  line-height: 1.08;
  margin: 0 0 16px;
  color: var(--v29-text);
`,zw=E.p`
  margin: 0 0 28px;
  padding: 12px 16px;
  border-left: 3px solid var(--v29-primary);
  background: color-mix(in srgb, var(--v29-primary) 8%, transparent);
  font-family: ${N};
  font-size: 13.5px;
  color: var(--v29-text);
`,yt=E.p`
  margin: 16px 0 0;
  padding: 12px 16px;
  border-left: 3px solid color-mix(in srgb, var(--v29-muted) 50%, transparent);
  background: color-mix(in srgb, var(--v29-muted) 8%, transparent);
  font-family: ${N};
  font-size: 13.5px;
  line-height: 1.55;
  color: var(--v29-muted);
`,wa=E.blockquote`
  margin: 20px 0 0;
  padding: 4px 0 4px 20px;
  border-left: 3px solid var(--v29-primary);
  font-family: ${at};
  font-size: 20px;
  font-weight: 900;
  line-height: 1.35;
  color: var(--v29-text);
`,Ww=E.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 16px;
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`,xa=E.div`
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
`,qw=E.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
`,Gw=E(Ae)`
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
`,Kw=()=>l.jsxs(Ye,{children:[l.jsxs(zw,{children:["Demo only — ",l.jsx("code",{children:"/about-v1"}),". Live ",l.jsx("code",{children:"/about"})," is unchanged and still dark."]}),l.jsx(ut,{children:U.eyebrow}),l.jsx(Vw,{children:U.title}),l.jsx(tn,{children:U.opening}),l.jsx(yt,{children:U.beliefSlot}),l.jsx(O,{children:l.jsx("p",{children:U.whoWeAre})}),l.jsxs(O,{children:[l.jsx("h2",{children:U.reality.heading}),U.reality.body.map(t=>l.jsx("p",{children:t},t)),l.jsx(yt,{children:U.reality.slot})]}),l.jsxs(O,{children:[l.jsx("h2",{children:U.heading.heading}),l.jsx("p",{children:U.heading.body}),l.jsx(yt,{children:U.heading.slot}),l.jsx(wa,{children:U.heading.pull})]}),l.jsxs(O,{children:[l.jsx("h2",{children:U.origin.heading}),U.origin.body.map(t=>l.jsx("p",{children:t},t)),l.jsx(yt,{children:U.origin.slot})]}),l.jsxs(O,{children:[l.jsx("h2",{children:U.howWeBuild.heading}),l.jsx("p",{children:U.howWeBuild.intro}),l.jsxs(Ww,{children:[U.howWeBuild.values.map(t=>l.jsxs(xa,{children:[l.jsx("h3",{children:t.heading}),l.jsx("p",{children:t.body})]},t.heading)),l.jsxs(xa,{children:[l.jsx("h3",{children:U.howWeBuild.extraSlot.heading}),l.jsx("p",{children:U.howWeBuild.extraSlot.body})]})]})]}),l.jsxs(O,{children:[l.jsx("h2",{children:U.standard.heading}),l.jsx(yt,{children:U.standard.slot}),l.jsx(wa,{children:U.standard.example}),l.jsx("p",{style:{marginTop:16},children:U.standard.body})]}),l.jsxs(O,{children:[l.jsx("h2",{children:U.stillBuilding.heading}),l.jsx("p",{children:U.stillBuilding.body}),l.jsx(yt,{children:U.stillBuilding.slot}),l.jsx("p",{children:U.stillBuilding.close})]}),l.jsxs(O,{children:[l.jsx("h2",{children:U.invite.heading}),l.jsx("p",{children:U.invite.body}),l.jsx(yt,{children:U.invite.slot}),l.jsx(qw,{children:l.jsx(Gw,{to:"/contact",children:"Talk to us"})})]})]}),Yw=()=>l.jsxs(Ye,{children:[l.jsx(ut,{children:"About us"}),l.jsx(Nt,{children:"One connected delivery operation."}),l.jsx(tn,{children:"SenditGo brings route planning, dispatch, live tracking and proof of delivery together for local and last-mile fleets."}),l.jsxs(O,{style:{paddingTop:40},children:[l.jsx("h2",{children:"Built around the delivery day."}),l.jsx("p",{children:"Build runs, assign orders and review the day in Order Management. Drivers follow their run and record delivery details, while dispatchers keep track of progress in one place."})]}),l.jsxs(O,{children:[l.jsx("h2",{children:"Meet SAM, your planning engine."}),l.jsx("p",{children:"SAM stands for Smart Adaptive Model. It brings your delivery requirements and available vehicles together to help you build a workable route plan."}),l.jsx("p",{children:"Delivery locations and time windows, your warehouse and vehicle capacity give the plan its starting point. You review the proposed plan in Order Management and stay in control of what goes out."})]}),l.jsxs(O,{children:[l.jsx("h2",{children:"Talk through your operation."}),l.jsxs("p",{children:["Tell us about your fleet, your delivery day and what you need from your next system. ",l.jsx(Ae,{to:"/contact",children:"Talk to us"})," about a demo, pricing or integrations."]})]})]}),z={legalName:"Senditgo Co., Ltd.",jurisdiction:"Taiwan, R.O.C.",address:"24F.-6, No. 213, Chaofu Rd., Xitun Dist., Taichung City, Taiwan (R.O.C.)",supportEmail:"info@holieninnovation.com.tw"},Jw=["demo","pricing","solution","integrations","general"],Ea={name:"fleet_size",label:"How many vehicles?",type:"select",required:!0,options:["1–5","6–20","21–50","51–200","More than 200"]},Vn={name:"company",label:"Company",type:"text",required:!0,autoComplete:"organization"},Xc={demo:{type:"demo",label:"Book a product demo",lede:"Tell us a little about your operation and we will bring the right screens.",fields:[Vn,Ea,{name:"preferred_time",label:"When suits you?",type:"text",required:!1,hint:"A day and a rough time is enough. We will confirm by email."}]},pricing:{type:"pricing",label:"Plans and pricing",lede:"Pricing depends on how many vehicles you run, so start there.",fields:[Vn,Ea,{name:"start_date",label:"When are you looking to start?",type:"text",required:!1}]},solution:{type:"solution",label:"Find the right solution",lede:"Describe the job you are trying to do and we will tell you honestly whether we fit.",fields:[Vn,{name:"operation",label:"What does your delivery day look like?",type:"textarea",required:!0,hint:"Types of drops, how many a day, what goes wrong most often."}]},integrations:{type:"integrations",label:"Integrations",lede:"Tell us what you already run and we will tell you how it connects.",fields:[Vn,{name:"system_name",label:"Which system?",type:"text",required:!0,hint:"The order, warehouse or accounting system you want connected."},{name:"integration_need",label:"What should move between them?",type:"textarea",required:!1}]},general:{type:"general",label:"General",lede:"Anything else — we read every one.",fields:[{name:"message",label:"Your message",type:"textarea",required:!0}]}};Jw.map(t=>({value:t,label:Xc[t].label}));function Bi(t){return t?Xc[t].fields:[]}function Xw(t,e,n){const r=[];t||r.push("enquiry_type"),n.name.trim()||r.push("name"),Qw(n.email)||r.push("email");for(const i of Bi(t))i.required&&!(e[i.name]??"").trim()&&r.push(i.name);return r}function Qw(t){const e=t.trim();return e.length>4&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}E.form`
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
`;const bs=`
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
  ${bs}
`;E.textarea`
  ${bs};
  min-height: 120px;
  resize: vertical;
`;E.select`
  ${bs};
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
`;const Zw=()=>{var b;const[t,e]=S.useState(""),[n,r]=S.useState(""),[i,s]=S.useState(""),[o,c]=S.useState(""),[a,d]=S.useState({}),[u,h]=S.useState(!1);u&&Xw(t,a,{name:n,email:i});const[f,m]=S.useState("idle");S.useId(),S.useRef(null);const g=S.useRef(null),x=(b=Bi(t)[0])==null?void 0:b.name;return S.useEffect(()=>{var w;if(!t||!x)return;const R=(w=g.current)==null?void 0:w.querySelector(`[name="${x}"]`);R==null||R.focus()},[t,x]),{...Object.fromEntries(Bi(t).map(R=>[R.name,R.label]))},l.jsxs(Ye,{children:[l.jsx(ut,{children:"Contact"}),l.jsx(Nt,{children:"Talk to us."}),l.jsx(O,{children:l.jsxs("p",{children:["Email ",l.jsx("a",{href:`mailto:${z.supportEmail}`,children:z.supportEmail})," to contact the SenditGo team."]})})]})},ex=E.p`
  font-family: ${N};
  font-size: 13px;
  color: var(--v29-muted);
  margin: 0 0 32px;
  letter-spacing: 0.02em;
`,Sa=E.div`
  max-width: 100%;
  overflow-x: auto;
  &:focus-visible {
    outline: 2px solid var(--v29-primary);
    outline-offset: 2px;
  }
`,Ta=E.p`
  @media (min-width: 561px) {
    display: none;
  }
`,Ra=E.table`
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
`,tx=()=>l.jsxs(Ye,{children:[l.jsx(ut,{children:"Privacy"}),l.jsx(Nt,{children:"Privacy policy."}),l.jsx(ex,{children:"Last updated: 18 May 2026"}),l.jsxs(tn,{children:["This policy explains what ",z.legalName," collects through the SenditGo driver app, why, how long we keep it, and the rights you have. The data controller is ",z.legalName]}),l.jsx(O,{children:l.jsxs("p",{children:["For public website visits, enquiries and expressions of interest, read the"," ",l.jsx("a",{href:Ie(ka),children:"website Privacy Policy"}),". For a summary of the app’s data collection and protections, see"," ",l.jsx("a",{href:Ie("/data-safety"),children:"Data safety"}),". To remove your account and its associated data, see ",l.jsx("a",{href:Ie("/account-deletion"),children:"Delete account"}),"."]})}),l.jsxs(O,{children:[l.jsx("h2",{children:"1. Who we are"}),l.jsxs("p",{children:["SenditGo is operated by ",z.legalName,", a company registered in"," ",z.jurisdiction," with its principal address at ",z.address,". We are the developer of record on the App Store and Google Play and the entity responsible for handling personal information under the Australian Privacy Act 1988 (Cth). For any privacy question, reach us at"," ",l.jsx("a",{href:`mailto:${z.supportEmail}`,children:z.supportEmail}),"."]})]}),l.jsxs(O,{children:[l.jsx("h2",{id:"privacy-collection",children:"2. What we collect"}),l.jsx("p",{children:"We collect only the data needed to run a dispatch operation — no advertising profiles, no sale to third parties."}),l.jsx(Ta,{id:"privacy-collection-hint",children:"Swipe or scroll sideways to read the table."}),l.jsx(Sa,{role:"region","aria-labelledby":"privacy-collection","aria-describedby":"privacy-collection-hint",tabIndex:0,children:l.jsxs(Ra,{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"Category"}),l.jsx("th",{children:"Examples"}),l.jsx("th",{children:"Why"})]})}),l.jsxs("tbody",{children:[l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("strong",{children:"Account"})}),l.jsx("td",{children:"Mobile number, name, email, employer (your operator)"}),l.jsx("td",{children:"Sign-in, identifying you to your operator"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("strong",{children:"Location"})}),l.jsx("td",{children:"GPS coordinates while a shift is active"}),l.jsx("td",{children:"Live driver tracking, ETA, geofence events"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("strong",{children:"Delivery content"})}),l.jsx("td",{children:"Photos, signatures, notes captured at the door"}),l.jsx("td",{children:"Proof of delivery for your operator and their customer"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("strong",{children:"Device & usage"})}),l.jsx("td",{children:"Device model, OS version, app version, crash logs"}),l.jsx("td",{children:"Stability, diagnostics, security"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("strong",{children:"Communications"})}),l.jsx("td",{children:"In-app messages between driver and dispatcher"}),l.jsx("td",{children:"Operational coordination"})]})]})]})})]}),l.jsxs(O,{children:[l.jsx("h2",{children:"3. How we use it"}),l.jsxs("ul",{children:[l.jsx("li",{children:"To run the dispatch service: assign jobs, track progress, record proof of delivery."}),l.jsx("li",{children:"To keep the app secure: detect abuse, verify sign-ins, prevent fraud."}),l.jsx("li",{children:"To improve the product: diagnose crashes, measure feature usage in aggregate."}),l.jsx("li",{children:"To meet legal obligations under the Privacy Act 1988 (Cth) and applicable tax law."})]}),l.jsxs("p",{children:["We do ",l.jsx("strong",{children:"not"})," use your data for behavioural advertising and we do not sell it."]})]}),l.jsxs(O,{children:[l.jsx("h2",{children:"4. Legal basis"}),l.jsx("p",{children:"Under the Australian Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs), we process personal information because it is necessary to perform the dispatch service you (or your employer on your behalf) signed up for, to comply with our legal obligations, and — for product improvement and security — for our legitimate interests in operating a reliable, safe service. Where required, we ask for consent and you can withdraw it at any time."})]}),l.jsxs(O,{children:[l.jsx("h2",{children:"5. Who sees your data"}),l.jsxs("ul",{children:[l.jsxs("li",{children:[l.jsx("strong",{children:"Your operator"})," (the company running the SenditGo back-office that you drive for) — they see your shift activity, route, and proof-of-delivery records. They are a separate data controller for their business records."]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Service providers"})," we use to run the platform: cloud hosting (currently AWS, region asia-east), map tiles (Mapbox), push notification delivery (Apple/Google), and crash reporting. Each is bound by a written data-processing agreement."]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Authorities"})," if compelled by a valid legal order under Australian law."]})]}),l.jsxs("p",{children:["A current list of sub-processors is available on request via"," ",l.jsx("a",{href:`mailto:${z.supportEmail}`,children:z.supportEmail}),"."]})]}),l.jsxs(O,{children:[l.jsx("h2",{children:"6. International transfers"}),l.jsx("p",{children:"Our primary infrastructure is hosted in the Asia-Pacific region. Limited categories of data (e.g. crash reports, push delivery metadata) may be processed by service providers operating from other jurisdictions; in every case the provider is bound by a data-processing agreement and we rely on standard contractual clauses or equivalent safeguards where required."})]}),l.jsxs(O,{children:[l.jsx("h2",{id:"privacy-retention",children:"7. How long we keep it"}),l.jsx(Ta,{id:"privacy-retention-hint",children:"Swipe or scroll sideways to read the table."}),l.jsx(Sa,{role:"region","aria-labelledby":"privacy-retention","aria-describedby":"privacy-retention-hint",tabIndex:0,children:l.jsxs(Ra,{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"Data"}),l.jsx("th",{children:"Retention"})]})}),l.jsxs("tbody",{children:[l.jsxs("tr",{children:[l.jsx("td",{children:"Active account data"}),l.jsx("td",{children:"Until you delete your account"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"Location pings"}),l.jsx("td",{children:"90 days, then aggregated for trend reporting (no longer linked to you)"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"Proof-of-delivery records"}),l.jsx("td",{children:"Retained by your operator per their own retention policy; typically 5–7 years for tax records"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"Crash and diagnostic logs"}),l.jsx("td",{children:"180 days"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"Backups"}),l.jsx("td",{children:"Rolling 90-day encrypted backups; deleted data expires within this window"})]})]})]})})]}),l.jsxs(O,{children:[l.jsx("h2",{children:"8. Your rights"}),l.jsx("p",{children:"You can:"}),l.jsxs("ul",{children:[l.jsx("li",{children:"Ask what we hold about you and request a copy."}),l.jsx("li",{children:"Correct anything inaccurate."}),l.jsxs("li",{children:["Delete your account and associated personal data — see the"," ",l.jsx("a",{href:Ie("/account-deletion"),children:"account deletion page"})," for the in-app and web paths."]}),l.jsx("li",{children:"Object to specific processing where we rely on legitimate interest."}),l.jsx("li",{children:"Lodge a complaint with the relevant supervisory authority."})]}),l.jsxs("p",{children:["To exercise any of these, email"," ",l.jsx("a",{href:`mailto:${z.supportEmail}`,children:z.supportEmail}),". We respond within 30 days."]})]}),l.jsxs(O,{children:[l.jsx("h2",{children:"9. Children"}),l.jsx("p",{children:"SenditGo is a workplace app for professional drivers and dispatchers. It is not directed at, and we do not knowingly collect data from, anyone under 16."})]}),l.jsxs(O,{children:[l.jsx("h2",{children:"10. Security"}),l.jsx("p",{children:"Traffic is encrypted in transit (TLS 1.2+). Production data is encrypted at rest. Access is restricted by role and audited. We rotate secrets and patch dependencies on a regular cycle. If we ever experience a breach affecting your personal data, we will notify you and the relevant authority in line with applicable law."})]}),l.jsxs(O,{children:[l.jsx("h2",{children:"11. Changes to this policy"}),l.jsx("p",{children:"We will update this policy as the product and the law evolve. The “Last updated” date at the top of this page reflects the latest revision. Material changes will be highlighted in the app and on the home page before they take effect."})]}),l.jsxs(O,{children:[l.jsx("h2",{children:"12. Contact"}),l.jsxs("p",{children:[z.legalName,l.jsx("br",{}),z.address,l.jsx("br",{}),"Email:"," ",l.jsx("a",{href:`mailto:${z.supportEmail}`,children:z.supportEmail})]})]})]}),nx=E.article`
  header { margin-bottom: clamp(32px, 5vw, 52px); }
  section { padding-bottom: clamp(24px, 4vw, 36px); }
  section:last-child { padding-bottom: 0; }
  h2 { line-height: 1.3; }
  address { font-style: normal; line-height: 1.7; }
  a { overflow-wrap: anywhere; }
  a:focus-visible, button:focus-visible {
    outline: 2px solid var(--v29-eyebrow-text);
    outline-offset: 3px;
  }
  .review-links { margin: 16px 0 0; font-size: 14px; }
  .review-links a { color: var(--v29-text); text-underline-offset: 3px; }
`,rx=E.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  margin-bottom: 16px;
  font-size: 15px;
  line-height: 1.6;
  color: var(--v29-muted);
  th, td {
    text-align: start;
    vertical-align: top;
    padding: 12px 0;
    border-bottom: 1px solid var(--v29-line-soft);
    overflow-wrap: break-word;
  }
  th { color: var(--v29-text); font-weight: 600; }
  tr > :first-child { width: 31%; padding-right: clamp(12px, 2vw, 24px); }
`;function _a(){return l.jsx(Ye,{children:l.jsxs(nx,{children:[l.jsxs("header",{children:[l.jsx(ut,{children:"SenditGo website · Interim policy"}),l.jsx(Nt,{children:"Privacy Policy"}),l.jsx(tn,{children:"How we handle your personal information when you visit the website, register interest in SenditGo or make an enquiry."}),l.jsx("p",{className:"review-links",children:l.jsx("a",{href:Ie("/design-review/privacy-policy/policy.txt"),children:"Open plain text"})})]}),l.jsxs(O,{children:[l.jsx("h2",{children:"1. Who we are"}),l.jsx("p",{children:"2019 Group Pty Ltd (ABN 16 633 010 723) is the contact for privacy enquiries about the public SenditGo website. Our contact details are in section 9."}),l.jsxs("p",{children:["This policy covers the public website and expressions of interest. Separate information is available for the ",l.jsx("a",{href:Ie("/privacy"),children:"driver app and delivery services"}),". We handle personal information in accordance with applicable privacy laws, including the Australian Privacy Act 1988 and Australian Privacy Principles, and the New Zealand Privacy Act 2020 where it applies."]})]}),l.jsxs(O,{children:[l.jsx("h2",{children:"2. What we collect"}),l.jsxs(rx,{"aria-label":"Information collected through the website",children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{scope:"col",children:"When"}),l.jsx("th",{scope:"col",children:"What we collect"})]})}),l.jsxs("tbody",{children:[l.jsxs("tr",{children:[l.jsx("th",{scope:"row",children:"You enquire or register interest"}),l.jsx("td",{children:"Your name, email address, enquiry type and the details you submit. Depending on your enquiry, these can include your business name, fleet size, delivery operations, software systems and preferred dates. Providing a phone number is optional."})]}),l.jsxs("tr",{children:[l.jsx("th",{scope:"row",children:"You browse"}),l.jsx("td",{children:"Our hosting and font providers receive technical information, such as your IP address and browser details, to deliver the pages you request."})]})]})]}),l.jsx("p",{children:"You can browse without identifying yourself. We need your contact details to respond to an enquiry. Please leave out sensitive information, individual delivery records, tracking numbers and personal information about other people."})]}),l.jsxs(O,{children:[l.jsx("h2",{children:"3. How we use it"}),l.jsx("p",{children:"We use your information to respond to your enquiry, assess interest in SenditGo and follow up about the early access, trial or launch information you requested. We also use information to operate, secure and improve the website and meet our legal obligations."}),l.jsx("p",{children:"We do not sell personal information or use it for behavioural advertising."})]}),l.jsxs(O,{children:[l.jsx("h2",{children:"4. Cookies and third-party services"}),l.jsx("p",{children:"The website stores your theme and cookie preferences in your browser. The marketing pages do not currently use optional analytics cookies. You can change your preference at any time."}),l.jsx(Iw,{}),l.jsx("p",{children:"Google Fonts receives technical information to deliver typefaces. The delivery demonstrations are recordings served by the website. Watching them does not send a location or tracking number to a map provider."})]}),l.jsxs(O,{children:[l.jsx("h2",{children:"5. Who we share it with and where it goes"}),l.jsx("p",{children:"Authorised personnel and service providers may handle personal information to host the website, process enquiries and send email. Where the enquiry form is available, it sends the information you enter to our Google-hosted form processor."}),l.jsx("p",{children:"Service providers or support staff may process information overseas. We handle overseas disclosures in accordance with applicable privacy requirements and may also disclose information where required or authorised by law."})]}),l.jsxs(O,{children:[l.jsx("h2",{children:"6. Marketing"}),l.jsx("p",{children:"Enquiring about SenditGo allows us to respond to that request. We send other news or offers about SenditGo or 2019 Group services only if you separately agree to receive them."}),l.jsx("p",{children:"You can unsubscribe using the instructions in a marketing message or contact us using the details in section 9. We process applicable marketing unsubscribe requests free of charge within five working days."})]}),l.jsxs(O,{children:[l.jsx("h2",{children:"7. Security and retention"}),l.jsx("p",{children:"We take reasonable steps to protect personal information from loss, misuse and unauthorised access. We retain enquiry and expression of interest records for as long as needed to respond, manage the relationship and meet legal obligations. You can ask us to delete your information."})]}),l.jsxs(O,{children:[l.jsx("h2",{children:"8. Your rights and complaints"}),l.jsx("p",{children:"Use the details in section 9 to request access, ask us to correct your information or make a privacy complaint. We aim to respond to complaints within 30 days. We handle access and correction requests within applicable statutory time limits. In New Zealand, we usually respond to access requests within 20 working days, subject to any lawful extension."}),l.jsxs("p",{children:["If you are dissatisfied with our response, in Australia you can ",l.jsx("a",{href:"https://www.oaic.gov.au/privacy/privacy-complaints/lodge-a-privacy-complaint-with-us",children:"contact the Office of the Australian Information Commissioner"})," on 1300 363 992. In New Zealand, contact the ",l.jsx("a",{href:"https://www.privacy.org.nz/",children:"Office of the Privacy Commissioner"})," on 0800 803 909."]}),l.jsx("p",{children:"If a data breach meets applicable notification requirements, we will notify affected individuals and the relevant regulators as required by law."})]}),l.jsxs(O,{children:[l.jsx("h2",{children:"9. Contact us"}),l.jsx("p",{children:"For privacy enquiries, access and correction requests or complaints, contact:"}),l.jsxs("address",{children:["2019 Group Pty Ltd (ABN 16 633 010 723)",l.jsx("br",{}),l.jsx("a",{href:"mailto:support@2019group.com.au",children:"support@2019group.com.au"})]})]}),l.jsxs(O,{children:[l.jsx("h2",{children:"10. Changes to this policy"}),l.jsx("p",{children:"We will update this policy as our website and information-handling practices change. The current version will be available on this page."})]})]})})}E.form`
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
`;const Qc=`
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
  ${Qc};
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
  ${Qc};
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
`;const ix=()=>l.jsxs(Ye,{children:[l.jsx(ut,{children:"Account support"}),l.jsx(Nt,{children:"Delete your account."}),l.jsx(O,{children:l.jsxs("p",{children:["For help with your account, email ",l.jsx("a",{href:`mailto:${z.supportEmail}`,children:z.supportEmail}),"."]})})]}),Ca=E.table`
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
  color: ${t=>t.$tone==="yes"?"#FFFFFF":t.$tone==="no"?$t:"var(--v29-text)"};
`,sx=E.div`
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
`,ox=()=>l.jsxs(Ye,{children:[l.jsx(ut,{children:"Data Safety Disclosure"}),l.jsx(Nt,{children:"What we collect, why, and who receives it."}),l.jsxs(tn,{children:["This Disclosure sets out the categories of personal data that"," ",z.legalName," (“Senditgo”, “we” or “us”) collects through the SenditGo driver application, the purposes for which it is processed, and the third parties with whom it is shared. It is published in conjunction with, and maintained to mirror, the data declarations made in our Apple App Store and Google Play listings, in accordance with the Australian Privacy Act 1988 (Cth), the Australian Privacy Principles, and applicable store policies."]}),l.jsxs(sx,{children:[l.jsxs(di,{children:[l.jsx("strong",{children:"No third-party advertising"}),l.jsx("span",{children:"Senditgo does not serve third-party advertising within the application and does not construct advertising or behavioural profiles from user data."})]}),l.jsxs(di,{children:[l.jsx("strong",{children:"No sale of personal data"}),l.jsx("span",{children:"Senditgo does not sell, rent, or otherwise transfer personal data to data brokers, marketing intermediaries, or unaffiliated third parties."})]}),l.jsxs(di,{children:[l.jsx("strong",{children:"Encryption in transit and at rest"}),l.jsx("span",{children:"Communications between the application and our servers are protected by TLS 1.2 or higher. Production data is encrypted at rest under managed keys."})]})]}),l.jsxs(O,{children:[l.jsx("h2",{children:"Data we collect"}),l.jsxs(Ca,{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"Type"}),l.jsx("th",{children:"Purpose"}),l.jsx("th",{children:"Required?"}),l.jsx("th",{children:"Linked to you"})]})}),l.jsxs("tbody",{children:[l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("strong",{children:"Mobile number"})}),l.jsx("td",{children:"Account creation, OTP sign-in"}),l.jsx("td",{children:l.jsx(he,{$tone:"yes",children:"Required"})}),l.jsx("td",{children:l.jsx(he,{$tone:"yes",children:"Yes"})})]}),l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("strong",{children:"Name & email"})}),l.jsx("td",{children:"Identifying you to your operator, contact"}),l.jsx("td",{children:l.jsx(he,{$tone:"yes",children:"Required"})}),l.jsx("td",{children:l.jsx(he,{$tone:"yes",children:"Yes"})})]}),l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("strong",{children:"Precise location"})}),l.jsx("td",{children:"Live driver tracking, ETA, geofence events"}),l.jsx("td",{children:l.jsx(he,{$tone:"opt",children:"Active shift only"})}),l.jsx("td",{children:l.jsx(he,{$tone:"yes",children:"Yes"})})]}),l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("strong",{children:"Photos & signatures"})}),l.jsx("td",{children:"Proof of delivery captured at the door"}),l.jsx("td",{children:l.jsx(he,{$tone:"opt",children:"Per delivery"})}),l.jsx("td",{children:l.jsx(he,{$tone:"yes",children:"Yes"})})]}),l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("strong",{children:"In-app messages"})}),l.jsx("td",{children:"Driver ↔ dispatcher coordination"}),l.jsx("td",{children:l.jsx(he,{$tone:"opt",children:"Optional"})}),l.jsx("td",{children:l.jsx(he,{$tone:"yes",children:"Yes"})})]}),l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("strong",{children:"Device & app info"})}),l.jsx("td",{children:"Crash reports, performance diagnostics"}),l.jsx("td",{children:l.jsx(he,{$tone:"yes",children:"Required"})}),l.jsx("td",{children:l.jsx(he,{$tone:"opt",children:"Pseudonymous"})})]}),l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("strong",{children:"Push notification token"})}),l.jsx("td",{children:"Job assignments, dispatcher messages"}),l.jsx("td",{children:l.jsx(he,{$tone:"opt",children:"Optional"})}),l.jsx("td",{children:l.jsx(he,{$tone:"yes",children:"Yes"})})]})]})]})]}),l.jsxs(O,{children:[l.jsx("h2",{children:"Who we share data with"}),l.jsxs(Ca,{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"Recipient"}),l.jsx("th",{children:"What they receive"}),l.jsx("th",{children:"Why"})]})}),l.jsxs("tbody",{children:[l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("strong",{children:"Your operator"})}),l.jsx("td",{children:"Shift activity, route, proof-of-delivery records"}),l.jsx("td",{children:"Running their dispatch operation; their legitimate business records"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("strong",{children:"Cloud hosting (AWS)"})}),l.jsx("td",{children:"All production data, encrypted"}),l.jsx("td",{children:"Infrastructure provider, bound by data-processing agreement"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("strong",{children:"Map tiles (Mapbox)"})}),l.jsx("td",{children:"Anonymised location to fetch map tiles"}),l.jsx("td",{children:"Render maps inside the app"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("strong",{children:"Push delivery (Apple/Google)"})}),l.jsx("td",{children:"Push token + payload metadata"}),l.jsx("td",{children:"Deliver notifications to your device"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("strong",{children:"Crash reporting"})}),l.jsx("td",{children:"Crash stack trace, device model, OS version"}),l.jsx("td",{children:"Diagnose and fix bugs"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("strong",{children:"Authorities"})}),l.jsx("td",{children:"Only what a valid legal order under Australian law requires"}),l.jsx("td",{children:"Legal compliance"})]})]})]})]}),l.jsxs(O,{children:[l.jsx("h2",{children:"User controls"}),l.jsxs("ul",{children:[l.jsxs("li",{children:[l.jsx("strong",{children:"Location."})," Precise location is collected only while a shift is active. Users may revoke the operating system location permission at any time, in which case the application reverts to a reduced-precision mode."]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Push notifications."})," Notifications are optional and may be disabled in system settings without affecting other functionality."]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Account and data deletion."})," Deletion is available both in-application and via the web. See the dedicated"," ",l.jsx("a",{href:Ie("/account-deletion"),children:"account deletion"})," page for the relevant procedure."]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Access, correction, and complaint."})," Users may exercise their statutory rights under the Australian Privacy Act 1988 (Cth) — including the right to lodge a complaint with the Office of the Australian Information Commissioner (OAIC) — as described in the ",l.jsx("a",{href:Ie("/privacy"),children:"privacy policy"}),"."]})]})]}),l.jsxs(O,{children:[l.jsx("h2",{children:"Publication and reconciliation"}),l.jsxs("p",{children:["This page constitutes the authoritative record of Senditgo’s data declarations. Identical content is published in the"," ",l.jsx("strong",{children:"Data Safety"})," section of our Google Play listing and in the ",l.jsx("strong",{children:"Privacy Nutrition Labels"})," on our Apple App Store listing. Where a discrepancy is identified between this page and the store declarations, the matter may be reported to"," ",l.jsx("a",{href:`mailto:${z.supportEmail}`,children:z.supportEmail})," ","and Senditgo will reconcile the records within fourteen (14) days."]})]}),l.jsxs(O,{children:[l.jsx("h2",{children:"Further information"}),l.jsxs("p",{children:["For a fuller description of how personal data is collected, the legal bases on which it is processed, retention periods, international transfers, and the rights available to users, please refer to the",l.jsx("a",{href:Ie("/privacy"),children:" Senditgo Privacy Policy"}),". General enquiries may be directed to"," ",l.jsx("a",{href:`mailto:${z.supportEmail}`,children:z.supportEmail}),"."]})]})]}),ax=E.div`
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
`,vs=E.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 var(--page-gutter);
`,ws=E.section`
  position: relative;
  padding: var(--section-space) 0;
  background: ${t=>t.$alt?"var(--v29-surface-alt)":"transparent"};
`,lx=E(ws)`
  padding-bottom: clamp(20px, 2.5vw, 36px);
`,cx=E.nav`
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
    --brand-logo-color: ${zi};
  }
`,dx=E.div`
  display: flex;
  align-items: center;
  gap: 12px;
  @media (max-width: 480px) {
    gap: 8px;
  }
`,ux=E.span`
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
`,hx=E.button`
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
`,fx=E(Ae)`
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 8px;
  font-family: ${at};
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
`,px=E.header`
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
`,mx=E(vs)`
  position: relative;
  z-index: 2;
  width: 100%;
  padding-top: 120px;
  padding-bottom: 72px;
`,gx=E(Vi.div)`
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
    background: ${$t};
    flex-shrink: 0;
    box-shadow: 0 0 8px ${$t};
    animation: badge-pulse 2s infinite ease-in-out;
    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  }

  @keyframes badge-pulse {
    0% {
      transform: scale(1);
      box-shadow: 0 0 4px ${$t};
      opacity: 1;
    }
    50% {
      transform: scale(1.4);
      box-shadow: 0 0 12px ${$t};
      opacity: 0.8;
    }
    100% {
      transform: scale(1);
      box-shadow: 0 0 4px ${$t};
      opacity: 1;
    }
  }
`,yx=E.h1`
  font-family: ${at};
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
`,bx=E.p`
  font-size: clamp(1.05rem, 1rem + 0.35vw, 1.2rem);
  line-height: 1.6;
  color: #dbe5f1;
  max-width: 52ch;
  margin: 0 0 36px;
`,vx=E.div`
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
`,wx=E(Ae)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  border-radius: 8px;
  background: ${ir};
  color: #fff;
  font-family: ${at};
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
`,xx=E.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  border-radius: 8px;
  border: 1.5px solid rgba(255, 255, 255, 0.55);
  background: transparent;
  color: #fff;
  font-family: ${at};
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
`,Ia=E(ws)`
  scroll-margin-block-start: var(--nav-h, 73px);
  padding-block: var(--section-space);
`,ui=E(vs)`
  max-width: var(--walkthrough-width);
`,Ex=()=>{const t=gd();S.useLayoutEffect(()=>{const d=()=>{var h;const u=window.location.hash.slice(1);if(["sam","sam-steps","console","fleet-walkthrough","fleet-toolkit","sam-options","fleet-recordings","activity","fleet-insights","fleet-features","platform","delivery-proof","delivery-tracking"].includes(u)){const f=["fleet-walkthrough","fleet-recordings","fleet-insights"].includes(u)?"console":u==="fleet-toolkit"?"fleet-features":u==="sam-options"?"sam":u==="delivery-proof"?"platform":u;(h=document.getElementById(f))==null||h.scrollIntoView({block:"start",behavior:"instant"})}};return d(),window.addEventListener("hashchange",d),()=>window.removeEventListener("hashchange",d)},[]);const{mode:e,toggleTheme:n}=Oa(),r=Yi(),i=r.length>0,s=r.some(d=>d.role==="shipper"),o=ys(),c=S.useRef(null),a=S.useRef(null);return l.jsxs(ax,{"data-motion-paused":t,children:[l.jsx(ja,{}),l.jsxs(cx,{"data-home-nav":!0,ref:a,children:[l.jsxs(ux,{$compact:i,role:"img","aria-label":"SenditGo",children:[l.jsx("span",{className:"nav-wordmark","aria-hidden":"true",children:l.jsx(rr,{height:30,ariaLabel:""})}),l.jsx("span",{className:"nav-mark","aria-hidden":"true",children:l.jsx(rr,{height:30,variant:"mark",ariaLabel:""})})]}),l.jsxs(dx,{children:[l.jsx(hx,{onClick:n,"aria-label":"Toggle dark / light",children:e==="dark"?l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[l.jsx("circle",{cx:"12",cy:"12",r:"4"}),l.jsx("path",{d:"M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"})]}):l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:l.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})}),l.jsx(fx,{to:"/contact",$ghost:s,$hideOnNarrow:s,children:"Get early access"}),(i||o)&&l.jsx(Gc,{})]})]}),l.jsxs(px,{children:[l.jsx(yd,{opening:!0}),l.jsxs(mx,{children:[l.jsxs(gx,{initial:t?!1:{opacity:0,y:-12},animate:{opacity:1,y:0},transition:t?{duration:0}:{duration:.8,ease:wr,delay:.08},children:[l.jsx("span",{className:"dot"}),"Intelligent transport management. Launching 2027."]}),l.jsxs(yx,{children:["Set the outcome. Fleet-wide intelligence handles the rest",l.jsx("span",{className:"go",children:"."})]}),l.jsx(bx,{children:"SenditGo’s AI, SAM, weighs thousands of combinations across every stop, window and driver, then hands back a dispatch-ready plan in seconds—with the routes, allocations and knock-on effects already considered."}),l.jsxs(vx,{children:[l.jsx(wx,{to:"/contact",children:"Get early access"}),l.jsx(xx,{onClick:d=>{var u;d.preventDefault(),(u=c.current)==null||u.scrollIntoView({behavior:t?"auto":"smooth",block:"start"})},href:"#console",children:"See it in action"})]})]})]}),l.jsx(Ia,{id:"sam","aria-labelledby":"sam-title",$alt:!0,children:l.jsxs(ui,{children:[l.jsx(bd,{id:"sam-title"}),l.jsx(vd,{duration:Ts.duration,sceneId:"dispatch-scene",reducedMotion:t,renderScene:d=>l.jsx(wd,{stage:d,concept:Ts})})]})}),l.jsx(ws,{id:"console","aria-labelledby":"product-features-title",ref:c,children:l.jsx(ui,{children:l.jsx(xd,{})})}),l.jsx(Ed,{navRef:a}),l.jsx(Ia,{id:"delivery-tracking","aria-label":"Delivery tracking",$alt:!0,children:l.jsx(ui,{children:l.jsx(Sd,{})})}),l.jsx(lx,{id:"activity","aria-labelledby":"activity-title",children:l.jsxs(vs,{children:[l.jsx(Td,{id:"activity-title"}),l.jsx(Rd,{})]})}),l.jsx(_d,{}),l.jsx(Cd,{}),l.jsx(Na,{}),l.jsx(Jc,{})]})},Sx=[{id:"operations",labelKey:"nav.groups.operations",items:[{id:"orders",labelKey:"nav.orders",path:"/portal/orders",permission:Ee.LIST},{id:"create-order",labelKey:"nav.createOrder",path:"/portal/orders/new",permission:Ee.ADD},{id:"import-orders",labelKey:"nav.importOrders",path:"/portal/orders/import",permission:Ee.IMPORT}]},{id:"finance",labelKey:"nav.groups.finance",items:[{id:"billing",labelKey:"nav.billing",path:"/portal/billing",permission:null}]},{id:"admin",labelKey:"nav.groups.admin",items:[{id:"users-roles",labelKey:"nav.usersRoles",path:"/portal/admin/users",permission:fn.USER_LIST}]}],Fe=({children:t})=>{const e=ys(),n=ke();if(!e){const r=lt("portalLogin");return l.jsx(Ke,{to:Ki(),replace:!0,state:r?{from:`${n.pathname}${n.search}`}:void 0})}return l.jsx(l.Fragment,{children:t})},bt=({children:t,code:e})=>Vc(e)?l.jsx(l.Fragment,{children:t}):l.jsx(Ke,{to:"/portal",replace:!0}),Tx=S.lazy(()=>Oe(()=>import("./CreateOrderPage-BOGx0Tlq.js"),__vite__mapDeps([0,1,2,3,4,5]))),Rx=S.lazy(()=>Oe(()=>import("./ImportOrdersPage-pSj6nlAz.js"),__vite__mapDeps([6,1,2,3,7,4,8,5]))),_x=S.lazy(()=>Oe(()=>import("./OrderDetailPage-Bkr9SMQX.js"),__vite__mapDeps([9,1,2,3,10,7,11,4,12,13,14,15,16,17,5,8]))),Cx=S.lazy(()=>Oe(()=>import("./BillingPage-Drwo7ZBJ.js"),__vite__mapDeps([18,1,2,3,4,13,5]))),Ix=S.lazy(()=>Oe(()=>import("./LoginPage-Vd-zoLAk.js"),__vite__mapDeps([19,1,2,3,10,7,11,4,5]))),Px=S.lazy(()=>Oe(()=>import("./OrdersPage-BBO8bWmE.js"),__vite__mapDeps([20,1,2,3,10,7,11,4,21,16,17,13,5]))),Pa=S.lazy(()=>Oe(()=>import("./RoleFormPage-opPsarHk.js"),__vite__mapDeps([22,1,2,3,10,7,11,4,5,14]))),Ax=S.lazy(()=>Oe(()=>import("./UsersRolesPage-DHsCW_dH.js"),__vite__mapDeps([23,1,2,3,10,7,11,4,8,5,21,16,15]))),kx=S.lazy(()=>Oe(()=>import("./TrackEntryPage-odxJGABm.js"),__vite__mapDeps([24,1,2,3,25,12,4,13,14,15,11,16]))),Ox=S.lazy(()=>Oe(()=>import("./TrackResultPage-DKTIWAtJ.js"),__vite__mapDeps([26,1,2,3,25,12,4,13,14,15,11,16]))),jx=E.div`
  min-height: 100vh;
  background-color: var(--app-background);
  color: var(--app-text);
  transition: background-color 0.3s ease, color 0.3s ease;
`,Nx="https://www.senditgo.com",vt={"/":{title:"SenditGo — Transportation Management System",description:"SenditGo — intelligent transport management, launching 2027. Our AI, SAM, weighs thousands of combinations and hands back a dispatch-ready plan in seconds. Get early access."},"/install":{title:"Get the SenditGo driver app",description:"Install the SenditGo driver app for iOS or Android — scan the QR code or tap your store to download and start running deliveries."},"/company":{title:"About SenditGo",description:"SenditGo is intelligent transport management for local and last-mile fleets, launching 2027."},"/about":{title:"About SenditGo",description:"Who SenditGo is, how we work, and where we are going — intelligent transport management for local and last-mile fleets."},"/about-v1":{title:"About SenditGo — story demo",description:"Local demo of the SenditGo story About page. Not a shipping surface."},"/contact":{title:"Contact SenditGo",description:"Book a product demo, ask about plans and pricing, integrations, or find the right solution for your fleet."},"/privacy-policy":{title:"Website Privacy Policy — SenditGo",description:"How we handle information when you visit the SenditGo marketing website, register interest or make an enquiry."},"/privacy":{title:"Privacy Policy — SenditGo",description:"How SenditGo collects, uses, and protects personal and operational data across its fleet platform and driver app."},"/account-deletion":{title:"Account & Data Deletion — SenditGo",description:"How to request deletion of your SenditGo account and the associated data, and what gets removed."},"/data-safety":{title:"Data Safety — SenditGo",description:"How SenditGo handles, secures, and shares operational and location data across the platform and driver app."},"/portal/login":{title:"Sign In — SenditGo",description:"Sign in to the SenditGo portal."},"/portal/orders":{title:"Orders — SenditGo",description:"Track and manage your SenditGo orders."},"/portal/orders/new":{title:"Create Order — SenditGo",description:"Prepare a shipment draft in the SenditGo portal."},"/portal/orders/import":{title:"Import Orders — SenditGo",description:"Validate a CSV order batch before import."},"/portal/orders/:salesOrderId":{title:"Order Detail — SenditGo",description:"Review SenditGo order tracking, handoff, and package detail."},"/portal/billing":{title:"Billing & Payments — SenditGo",description:"How your SenditGo account is billed and paid."},"/portal/admin/users":{title:"Users & Roles — SenditGo",description:"Manage portal users, roles, and permissions in SenditGo."},"/portal/admin/roles/new":{title:"Create Role — SenditGo",description:"Create a portal role and choose its permissions."},"/portal/admin/roles/:roleId":{title:"Edit Role — SenditGo",description:"Edit a portal role and its permissions."}};function Lx(t){const e=t.toLowerCase();return e.startsWith("/track/")?vt["/track"]??vt["/"]:e.startsWith("/portal/orders/")&&e!=="/portal/orders/new"&&e!=="/portal/orders/import"?vt["/portal/orders/:salesOrderId"]:e.startsWith("/portal/admin/roles/")?e==="/portal/admin/roles/new"?vt["/portal/admin/roles/new"]:vt["/portal/admin/roles/:roleId"]:vt[e]??vt["/"]}function Dx(){const{pathname:t}=ke(),e=t.replace(/\/+$/,"")||"/",n=e==="/design-review/privacy-policy"?"/privacy-policy":e,r=Lx(n),i=`${Nx}${n}`,s=t.toLowerCase(),o=s.startsWith("/portal"),c=s.startsWith("/track/"),a=s==="/about-v1";return l.jsxs(fu,{children:[l.jsx("title",{children:r.title}),l.jsx("meta",{name:"description",content:r.description}),l.jsx("link",{rel:"canonical",href:i}),(o||c||a)&&l.jsx("meta",{name:"robots",content:"noindex"}),l.jsx("meta",{property:"og:title",content:r.title}),l.jsx("meta",{property:"og:description",content:r.description}),l.jsx("meta",{property:"og:url",content:i}),l.jsx("meta",{name:"twitter:title",content:r.title}),l.jsx("meta",{name:"twitter:description",content:r.description})]})}function Mx(){const{search:t}=ke();return S.useEffect(()=>{Vu()},[t]),null}function Fx(){const{search:t}=ke();return lt("aboutPage")?l.jsx(Hw,{}):l.jsx(Ke,{to:{pathname:"/company",search:t},replace:!0})}function Ux(){const{search:t}=ke();return lt("aboutV1")?l.jsx(Kw,{}):l.jsx(Ke,{to:{pathname:"/",search:t},replace:!0})}function $x(){const{search:t}=ke();return lt("guestTrack")?l.jsx(kx,{}):l.jsx(Ke,{to:{pathname:"/",search:t},replace:!0})}function Bx(){const{search:t}=ke();return lt("guestTrack")?l.jsx(Ox,{}):l.jsx(Ke,{to:{pathname:"/",search:t},replace:!0})}function Hx(){const{search:t}=ke();return l.jsx(Ke,{to:{pathname:"/",search:t},replace:!0})}function Vx(){const{search:t}=ke();return lt("portalLogin")?l.jsx(Ix,{}):l.jsx(Ke,{to:{pathname:"/",search:t},replace:!0})}function zx(){var n;const t=Ot(r=>r.permissionList),e=((n=Sx.flatMap(r=>r.items).find(r=>r.permission===null||t.includes(r.permission)))==null?void 0:n.path)??"/portal/billing";return l.jsx(Ke,{to:e,replace:!0})}function Wx(){return l.jsxs(Id,{children:[l.jsx(gu,{}),l.jsx(jx,{children:l.jsxs(Pd,{basename:"/tms-official-web-preview/",children:[l.jsx(Mx,{}),l.jsx(Dx,{}),l.jsx(S.Suspense,{fallback:l.jsx("div",{role:"status",children:"Loading…"}),children:l.jsxs(Ad,{children:[l.jsx(V,{path:"/",element:l.jsx(Ex,{})}),l.jsx(V,{path:"/install",element:l.jsx(Fw,{})}),l.jsx(V,{path:"/company",element:l.jsx(Yw,{})}),l.jsx(V,{path:"/about",element:l.jsx(Fx,{})}),l.jsx(V,{path:"/about-v1",element:l.jsx(Ux,{})}),l.jsx(V,{path:"/contact",element:l.jsx(Zw,{})}),l.jsx(V,{path:"/privacy",element:l.jsx(tx,{})}),l.jsx(V,{path:"/privacy-policy",element:l.jsx(_a,{})}),l.jsx(V,{path:"/design-review/privacy-policy",element:l.jsx(_a,{})}),l.jsx(V,{path:"/account-deletion",element:l.jsx(ix,{})}),l.jsx(V,{path:"/data-safety",element:l.jsx(ox,{})}),l.jsx(V,{path:"/portal/login",caseSensitive:!0,element:l.jsx(Vx,{})}),l.jsx(V,{path:"/track",caseSensitive:!0,element:l.jsx($x,{})}),l.jsx(V,{path:"/track/:token",caseSensitive:!0,element:l.jsx(Bx,{})}),l.jsx(V,{caseSensitive:!0,path:"/portal/orders",element:l.jsx(Fe,{children:l.jsx(bt,{code:Ee.LIST,children:l.jsx(Px,{})})})}),l.jsx(V,{caseSensitive:!0,path:"/portal/orders/new",element:l.jsx(Fe,{children:l.jsx(bt,{code:Ee.ADD,children:l.jsx(Tx,{})})})}),l.jsx(V,{caseSensitive:!0,path:"/portal/orders/import",element:l.jsx(Fe,{children:l.jsx(bt,{code:Ee.IMPORT,children:l.jsx(Rx,{})})})}),l.jsx(V,{caseSensitive:!0,path:"/portal/orders/:salesOrderId",element:l.jsx(Fe,{children:l.jsx(bt,{code:Ee.LIST,children:l.jsx(_x,{})})})}),l.jsx(V,{caseSensitive:!0,path:"/portal/billing",element:l.jsx(Fe,{children:l.jsx(Cx,{})})}),l.jsx(V,{caseSensitive:!0,path:"/portal/admin/users",element:l.jsx(Fe,{children:l.jsx(bt,{code:fn.USER_LIST,children:l.jsx(Ax,{})})})}),l.jsx(V,{caseSensitive:!0,path:"/portal/admin/roles/new",element:l.jsx(Fe,{children:l.jsx(bt,{code:fn.ROLE_ADD,children:l.jsx(Pa,{})})})}),l.jsx(V,{caseSensitive:!0,path:"/portal/admin/roles/:roleId",element:l.jsx(Fe,{children:l.jsx(bt,{code:fn.ROLE_EDIT,children:l.jsx(Pa,{})})})}),l.jsx(V,{path:"/portal",caseSensitive:!0,element:l.jsx(Fe,{children:l.jsx(zx,{})})}),l.jsx(V,{path:"*",element:l.jsx(Hx,{})})]})})]})})]})}async function qx(){}qx().then(()=>{rd.createRoot(document.getElementById("root")).render(l.jsx(j.StrictMode,{children:l.jsx(Ha,{children:l.jsx(Wx,{})})}))});export{Jc as C,fu as H,Po as I,fn as P,v0 as R,ww as S,Oe as _,Ot as a,x0 as b,$s as c,Qx as d,w0 as e,Hc as f,Ao as g,Ee as h,pu as i,Vc as j,G as k,Sx as l,ys as m,z as n,be as s,Gi as u};
