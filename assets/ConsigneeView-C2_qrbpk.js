const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/NextStopMapCanvas-BCI-UpAi.js","assets/client-CHJZYcBI.js","assets/googleMapLoader-BSXzeEKU.js"])))=>i.map(i=>d[i]);
var ub=Object.defineProperty;var db=(t,e,n)=>e in t?ub(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var dt=(t,e,n)=>db(t,typeof e!="symbol"?e+"":e,n);import{R as X,r as m,j as d,c as Kr,p as Ne,g as tu,C as hb,A as fb}from"./client-CHJZYcBI.js";const pb={eyebrow:"Smart Adaptive Model",closing:"Less time on the whiteboard. More time on the road.",title:"Meet SAM. The best offsider your dispatch desk ever had.",copy:"SAM takes your drops, delivery windows and fleet, and turns them into a route plan that fits: the right stops in the right order on the right vehicle. Then SAM hands it back to you. Your fleet, your call."},Sd=[{stage:"load",title:"Load your runs.",copy:"Drop addresses, delivery windows, your depot and what each vehicle can carry. That’s all SAM needs to get going."},{stage:"plan",title:"SAM does the heavy lifting.",copy:"SAM works every stop around your distance, drive-time and capacity limits. It hands back a run sheet for each vehicle with the stop order, kilometres and time on the road."},{stage:"approve",title:"You sign it off.",copy:"Check the plan in Order Management, adjust what you need, then dispatch. SAM does the legwork. You run the show."}];var me="-ms-",Ts="-moz-",ae="-webkit-",um="comm",ia="rule",nu="decl",mb="@import",gb="@namespace",dm="@keyframes",yb="@layer",hm=Math.abs,ru=String.fromCharCode,Jc=Object.assign;function vb(t,e){return Le(t,0)^45?(((e<<2^Le(t,0))<<2^Le(t,1))<<2^Le(t,2))<<2^Le(t,3):0}function fm(t){return t.trim()}function Vt(t,e){return(t=e.exec(t))?t[0]:t}function ne(t,e,n){return t.replace(e,n)}function eo(t,e,n){return t.indexOf(e,n)}function Le(t,e){return t.charCodeAt(e)|0}function Xn(t,e,n){return t.slice(e,n)}function ht(t){return t.length}function pm(t){return t.length}function vs(t,e){return e.push(t),t}function bb(t,e){return t.map(e).join("")}function Ed(t,e){return t.filter(function(n){return!Vt(n,e)})}var oa=1,Lr=1,mm=0,it=0,Pe=0,Gr="";function aa(t,e,n,r,s,i,o,a){return{value:t,root:e,parent:n,type:r,props:s,children:i,line:oa,column:Lr,length:o,return:"",siblings:a}}function sn(t,e){return Jc(aa("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function dr(t){for(;t.root;)t=sn(t.root,{children:[t]});vs(t,t.siblings)}function xb(){return Pe}function wb(){return Pe=it>0?Le(Gr,--it):0,Lr--,Pe===10&&(Lr=1,oa--),Pe}function yt(){return Pe=it<mm?Le(Gr,it++):0,Lr++,Pe===10&&(Lr=1,oa++),Pe}function mn(){return Le(Gr,it)}function to(){return it}function ca(t,e){return Xn(Gr,t,e)}function Vs(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function kb(t){return oa=Lr=1,mm=ht(Gr=t),it=0,[]}function Sb(t){return Gr="",t}function Va(t){return fm(ca(it-1,Yc(t===91?t+2:t===40?t+1:t)))}function Eb(t){for(;(Pe=mn())&&Pe<33;)yt();return Vs(t)>2||Vs(Pe)>3?"":" "}function _b(t,e){for(;--e&&yt()&&!(Pe<48||Pe>102||Pe>57&&Pe<65||Pe>70&&Pe<97););return ca(t,to()+(e<6&&mn()==32&&yt()==32))}function Yc(t){for(;yt();)switch(Pe){case t:return it;case 34:case 39:t!==34&&t!==39&&Yc(Pe);break;case 40:t===41&&Yc(t);break;case 92:yt();break}return it}function Tb(t,e){for(;yt()&&t+Pe!==57;)if(t+Pe===84&&mn()===47)break;return"/*"+ca(e,it-1)+"*"+ru(t===47?t:yt())}function Cb(t){for(;!Vs(mn());)yt();return ca(t,it)}function Rb(t){return Sb(no("",null,null,null,[""],t=kb(t),0,[0],t))}function no(t,e,n,r,s,i,o,a,c){for(var l=0,u=0,h=o,f=0,p=0,g=0,y=1,v=1,S=1,b=0,x="",w=s,E=i,_=r,C=x;v;)switch(g=b,b=yt()){case 40:if(g!=108&&Le(C,h-1)==58){eo(C+=ne(Va(b),"&","&\f"),"&\f",hm(l?a[l-1]:0))!=-1&&(S=-1);break}case 34:case 39:case 91:C+=Va(b);break;case 9:case 10:case 13:case 32:C+=Eb(g);break;case 92:C+=_b(to()-1,7);continue;case 47:switch(mn()){case 42:case 47:vs(Ab(Tb(yt(),to()),e,n,c),c),(Vs(g||1)==5||Vs(mn()||1)==5)&&ht(C)&&Xn(C,-1,void 0)!==" "&&(C+=" ");break;default:C+="/"}break;case 123*y:a[l++]=ht(C)*S;case 125*y:case 59:case 0:switch(b){case 0:case 125:v=0;case 59+u:S==-1&&(C=ne(C,/\f/g,"")),p>0&&(ht(C)-h||y===0&&g===47)&&vs(p>32?Td(C+";",r,n,h-1,c):Td(ne(C," ","")+";",r,n,h-2,c),c);break;case 59:C+=";";default:if(vs(_=_d(C,e,n,l,u,s,a,x,w=[],E=[],h,i),i),b===123)if(u===0)no(C,e,_,_,w,i,h,a,E);else{switch(f){case 99:if(Le(C,3)===110)break;case 108:if(Le(C,2)===97)break;default:u=0;case 100:case 109:case 115:}u?no(t,_,_,r&&vs(_d(t,_,_,0,0,s,a,x,s,w=[],h,E),E),s,E,h,a,r?w:E):no(C,_,_,_,[""],E,0,a,E)}}l=u=p=0,y=S=1,x=C="",h=o;break;case 58:h=1+ht(C),p=g;default:if(y<1){if(b==123)--y;else if(b==125&&y++==0&&wb()==125)continue}switch(C+=ru(b),b*y){case 38:S=u>0?1:(C+="\f",-1);break;case 44:a[l++]=(ht(C)-1)*S,S=1;break;case 64:mn()===45&&(C+=Va(yt())),f=mn(),u=h=ht(x=C+=Cb(to())),b++;break;case 45:g===45&&ht(C)==2&&(y=0)}}return i}function _d(t,e,n,r,s,i,o,a,c,l,u,h){for(var f=s-1,p=s===0?i:[""],g=pm(p),y=0,v=0,S=0;y<r;++y)for(var b=0,x=Xn(t,f+1,f=hm(v=o[y])),w=t;b<g;++b)(w=fm(v>0?p[b]+" "+x:ne(x,/&\f/g,p[b])))&&(c[S++]=w);return aa(t,e,n,s===0?ia:a,c,l,u,h)}function Ab(t,e,n,r){return aa(t,e,n,um,ru(xb()),Xn(t,2,-2),0,r)}function Td(t,e,n,r,s){return aa(t,e,n,nu,Xn(t,0,r),Xn(t,r+1,-1),r,s)}function gm(t,e,n){switch(vb(t,e)){case 5103:return ae+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return ae+t+t;case 4855:return ae+t.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+t;case 4789:return Ts+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ae+t+Ts+t+me+t+t;case 5936:switch(Le(t,e+11)){case 114:return ae+t+me+ne(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ae+t+me+ne(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ae+t+me+ne(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return ae+t+me+t+t;case 6165:return ae+t+me+"flex-"+t+t;case 5187:return ae+t+ne(t,/(\w+).+(:[^]+)/,ae+"box-$1$2"+me+"flex-$1$2")+t;case 5443:return ae+t+me+"flex-item-"+ne(t,/flex-|-self/g,"")+(Vt(t,/flex-|baseline/)?"":me+"grid-row-"+ne(t,/flex-|-self/g,""))+t;case 4675:return ae+t+me+"flex-line-pack"+ne(t,/align-content|flex-|-self/g,"")+t;case 5548:return ae+t+me+ne(t,"shrink","negative")+t;case 5292:return ae+t+me+ne(t,"basis","preferred-size")+t;case 6060:return ae+"box-"+ne(t,"-grow","")+ae+t+me+ne(t,"grow","positive")+t;case 4554:return ae+ne(t,/([^-])(transform)/g,"$1"+ae+"$2")+t;case 6187:return ne(ne(ne(t,/(zoom-|grab)/,ae+"$1"),/(image-set)/,ae+"$1"),t,"")+t;case 5495:case 3959:return ne(t,/(image-set\([^]*)/,ae+"$1$`$1");case 4968:return ne(ne(t,/(.+:)(flex-)?(.*)/,ae+"box-pack:$3"+me+"flex-pack:$3"),/space-between/,"justify")+ae+t+t;case 4200:if(!Vt(t,/flex-|baseline/))return me+"grid-column-align"+Xn(t,e)+t;break;case 2592:case 3360:return me+ne(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,s){return e=s,Vt(r.props,/grid-\w+-end/)})?~eo(t+(n=n[e].value),"span",0)?t:me+ne(t,"-start","")+t+me+"grid-row-span:"+(~eo(n,"span",0)?Vt(n,/\d+/):+Vt(n,/\d+/)-+Vt(t,/\d+/))+";":me+ne(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Vt(r.props,/grid-\w+-start/)})?t:me+ne(ne(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return ne(t,/(.+)-inline(.+)/,ae+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ht(t)-1-e>6)switch(Le(t,e+1)){case 109:if(Le(t,e+4)!==45)break;case 102:return ne(t,/(.+:)(.+)-([^]+)/,"$1"+ae+"$2-$3$1"+Ts+(Le(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~eo(t,"stretch",0)?gm(ne(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return ne(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,s,i,o,a,c,l){return me+s+":"+i+l+(o?me+s+"-span:"+(a?c:+c-+i)+l:"")+t});case 4949:if(Le(t,e+6)===121)return ne(t,":",":"+ae)+t;break;case 6444:switch(Le(t,Le(t,14)===45?18:11)){case 120:return ne(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ae+(Le(t,14)===45?"inline-":"")+"box$3$1"+ae+"$2$3$1"+me+"$2box$3")+t;case 100:return ne(t,":",":"+me)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ne(t,"scroll-","scroll-snap-")+t}return t}function Eo(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function Pb(t,e,n,r){switch(t.type){case yb:if(t.children.length)break;case mb:case gb:case nu:return t.return=t.return||t.value;case um:return"";case dm:return t.return=t.value+"{"+Eo(t.children,r)+"}";case ia:if(!ht(t.value=t.props.join(",")))return""}return ht(n=Eo(t.children,r))?t.return=t.value+"{"+n+"}":""}function Ib(t){var e=pm(t);return function(n,r,s,i){for(var o="",a=0;a<e;a++)o+=t[a](n,r,s,i)||"";return o}}function Ob(t){return function(e){e.root||(e=e.return)&&t(e)}}function Nb(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case nu:t.return=gm(t.value,t.length,n);return;case dm:return Eo([sn(t,{value:ne(t.value,"@","@"+ae)})],r);case ia:if(t.length)return bb(n=t.props,function(s){switch(Vt(s,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":dr(sn(t,{props:[ne(s,/:(read-\w+)/,":"+Ts+"$1")]})),dr(sn(t,{props:[s]})),Jc(t,{props:Ed(n,r)});break;case"::placeholder":dr(sn(t,{props:[ne(s,/:(plac\w+)/,":"+ae+"input-$1")]})),dr(sn(t,{props:[ne(s,/:(plac\w+)/,":"+Ts+"$1")]})),dr(sn(t,{props:[ne(s,/:(plac\w+)/,me+"input-$1")]})),dr(sn(t,{props:[s]})),Jc(t,{props:Ed(n,r)});break}return""})}}var _r={};function Gt(t,...e){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${t} for more information.${e.length>0?` Args: ${e.join(", ")}`:""}`)}var Ua,Ba;const jr=typeof process<"u"&&_r!==void 0&&(_r.REACT_APP_SC_ATTR||_r.SC_ATTR)||"data-styled",ym="active",vm="data-styled-version",la="6.6.0",su=`/*!sc*/
`,Cs=typeof window<"u"&&typeof document<"u";if(!X.createContext)throw Gt(19);function Cd(t){if(typeof process<"u"&&_r!==void 0){const e=_r[t];if(e!==void 0&&e!=="")return e!=="false"}}const Lb=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(Ba=(Ua=Cd("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&Ua!==void 0?Ua:Cd("SC_DISABLE_SPEEDY"))!==null&&Ba!==void 0?Ba:typeof process<"u"&&_r!==void 0&&!1),bm="sc-keyframes-",jb={};let ro=new Map,_o=new Map,so=1;const bs=t=>{if(ro.has(t))return ro.get(t);for(;_o.has(so);)so++;const e=so++;return ro.set(t,e),_o.set(e,t),e},Db=t=>_o.get(t),Mb=(t,e)=>{so=e+1,ro.set(t,e),_o.set(e,t)},iu=Object.freeze([]),Dr=Object.freeze({});function xm(t,e,n=Dr){return t.theme!==n.theme&&t.theme||e||n.theme}const Fb=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,$b=/(^-|-$)/g;function wm(t){return t.replace(Fb,"-").replace($b,"")}const Vb=/(a)(d)/gi,Rd=t=>String.fromCharCode(t+(t>25?39:97));function ou(t){let e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=Rd(e%52)+n;return(Rd(e%52)+n).replace(Vb,"$1-$2")}const Xc=5381,qn=(t,e)=>{let n=e.length;for(;n;)t=33*t^e.charCodeAt(--n);return t},km=t=>qn(Xc,t);function au(t){return ou(km(t)>>>0)}function Ub(t){return t.displayName||t.name||"Component"}function Qc(t){return typeof t=="string"&&!0}function Bb(t){return Qc(t)?`styled.${t}`:`Styled(${Ub(t)})`}const Sm=Symbol.for("react.memo"),Hb=Symbol.for("react.forward_ref"),zb={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},Wb={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Em={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},qb={[Hb]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[Sm]:Em};function Ad(t){return("type"in(e=t)&&e.type.$$typeof)===Sm?Em:"$$typeof"in t?qb[t.$$typeof]:zb;var e}const Kb=Object.defineProperty,Gb=Object.getOwnPropertyNames,Zb=Object.getOwnPropertySymbols,Jb=Object.getOwnPropertyDescriptor,Yb=Object.getPrototypeOf,Xb=Object.prototype;function _m(t,e,n){if(typeof e!="string"){const r=Yb(e);r&&r!==Xb&&_m(t,r,n);const s=Gb(e).concat(Zb(e)),i=Ad(t),o=Ad(e);for(let a=0;a<s.length;++a){const c=s[a];if(!(c in Wb||n&&n[c]||o&&c in o||i&&c in i)){const l=Jb(e,c);try{Kb(t,c,l)}catch{}}}}return t}function Zr(t){return typeof t=="function"}const Qb=Symbol.for("react.forward_ref");function cu(t){return t!=null&&(typeof t=="object"||typeof t=="function")&&t.$$typeof===Qb&&"styledComponentId"in t}function xs(t,e){return t&&e?t+" "+e:t||e||""}function To(t,e){return t.join("")}function Us(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function el(t,e,n=!1){if(!n&&!Us(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(let r=0;r<e.length;r++)t[r]=el(t[r],e[r]);else if(Us(e))for(const r in e)t[r]=el(t[r],e[r]);return t}function lu(t,e){Object.defineProperty(t,"toString",{value:e})}const ex=class{constructor(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}indexOfGroup(t){if(t===this._cGroup)return this._cIndex;let e=this._cIndex;if(t>this._cGroup)for(let n=this._cGroup;n<t;n++)e+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=t;n--)e-=this.groupSizes[n];return this._cGroup=t,this._cIndex=e,e}insertRules(t,e){if(t>=this.groupSizes.length){const s=this.groupSizes,i=s.length;let o=i;for(;t>=o;)if(o<<=1,o<0)throw Gt(16,`${t}`);this.groupSizes=new Uint32Array(o),this.groupSizes.set(s),this.length=o;for(let a=i;a<o;a++)this.groupSizes[a]=0}let n=this.indexOfGroup(t+1),r=0;for(let s=0,i=e.length;s<i;s++)this.tag.insertRule(n,e[s])&&(this.groupSizes[t]++,n++,r++);r>0&&this._cGroup>t&&(this._cIndex+=r)}clearGroup(t){if(t<this.length){const e=this.groupSizes[t],n=this.indexOfGroup(t),r=n+e;this.groupSizes[t]=0;for(let s=n;s<r;s++)this.tag.deleteRule(n);e>0&&this._cGroup>t&&(this._cIndex-=e)}}getGroup(t){let e="";if(t>=this.length||this.groupSizes[t]===0)return e;const n=this.groupSizes[t],r=this.indexOfGroup(t),s=r+n;for(let i=r;i<s;i++)e+=this.tag.getRule(i)+su;return e}},tx=`style[${jr}][${vm}="${la}"]`,nx=new RegExp(`^${jr}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Pd=t=>typeof ShadowRoot<"u"&&t instanceof ShadowRoot||"host"in t&&t.nodeType===11,tl=t=>{if(!t)return document;if(Pd(t))return t;if("getRootNode"in t){const e=t.getRootNode();if(Pd(e))return e}return document},rx=(t,e,n)=>{const r=n.split(",");let s;for(let i=0,o=r.length;i<o;i++)(s=r[i])&&t.registerName(e,s)},sx=(t,e)=>{var n;const r=((n=e.textContent)!==null&&n!==void 0?n:"").split(su),s=[];for(let i=0,o=r.length;i<o;i++){const a=r[i].trim();if(!a)continue;const c=a.match(nx);if(c){const l=0|parseInt(c[1],10),u=c[2];l!==0&&(Mb(u,l),rx(t,u,c[3]),t.getTag().insertRules(l,s)),s.length=0}else s.push(a)}},Ha=t=>{const n=tl(t.options.target).querySelectorAll(tx);for(let r=0,s=n.length;r<s;r++){const i=n[r];i&&i.getAttribute(jr)!==ym&&(sx(t,i),i.parentNode&&i.parentNode.removeChild(i))}};let ss=!1;function ix(){if(ss!==!1)return ss;if(typeof document<"u"){const t=document.head.querySelector('meta[property="csp-nonce"]');if(t)return ss=t.nonce||t.getAttribute("content")||void 0;const e=document.head.querySelector('meta[name="sc-nonce"]');if(e)return ss=e.getAttribute("content")||void 0}return ss=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const Tm=(t,e)=>{if(typeof document>"u")throw Gt(20);const n=document.head,r=t||n,s=document.createElement("style"),i=(c=>{const l=Array.from(c.querySelectorAll(`style[${jr}]`));return l[l.length-1]})(r),o=i!==void 0?i.nextSibling:null;s.setAttribute(jr,ym),s.setAttribute(vm,la);const a=e||ix();return a&&s.setAttribute("nonce",a),r.insertBefore(s,o),s},ox=class{constructor(t,e){this.element=Tm(t,e),this.element.appendChild(document.createTextNode("")),this.sheet=(n=>{var r;if(n.sheet)return n.sheet;const s=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets;for(let i=0,o=s.length;i<o;i++){const a=s[i];if(a.ownerNode===n)return a}throw Gt(17)})(this.element),this.length=0}insertRule(t,e){try{return this.sheet.insertRule(e,t),this.length++,!0}catch{return!1}}deleteRule(t){this.sheet.deleteRule(t),this.length--}getRule(t){const e=this.sheet.cssRules[t];return e&&e.cssText?e.cssText:""}},ax=class{constructor(t,e){this.element=Tm(t,e),this.nodes=this.element.childNodes,this.length=0}insertRule(t,e){if(t<=this.length&&t>=0){const n=document.createTextNode(e);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1}deleteRule(t){this.element.removeChild(this.nodes[t]),this.length--}getRule(t){return t<this.length?this.nodes[t].textContent:""}};let Id=Cs;const cx={isServer:!Cs,useCSSOMInjection:!Lb};class fi{static registerId(e){return bs(e)}constructor(e=Dr,n={},r){this.options=Object.assign(Object.assign({},cx),e),this.gs=n,this.keyframeIds=new Set,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Cs&&Id&&(Id=!1,Ha(this)),lu(this,()=>(s=>{const i=s.getTag(),{length:o}=i;let a="";for(let c=0;c<o;c++){const l=Db(c);if(l===void 0)continue;const u=s.names.get(l);if(u===void 0||!u.size)continue;const h=i.getGroup(c);if(h.length===0)continue;const f=jr+".g"+c+'[id="'+l+'"]';let p="";for(const g of u)g.length>0&&(p+=g+",");a+=h+f+'{content:"'+p+'"}'+su}return a})(this))}rehydrate(){!this.server&&Cs&&Ha(this)}reconstructWithOptions(e,n=!0){const r=new fi(Object.assign(Object.assign({},this.options),e),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&Cs&&e.target!==this.options.target&&tl(this.options.target)!==tl(e.target)&&Ha(r),r}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||(this.tag=(e=(({useCSSOMInjection:n,target:r,nonce:s})=>n?new ox(r,s):new ax(r,s))(this.options),new ex(e)));var e}hasNameForId(e,n){var r,s;return(s=(r=this.names.get(e))===null||r===void 0?void 0:r.has(n))!==null&&s!==void 0&&s}registerName(e,n){bs(e),e.startsWith(bm)&&this.keyframeIds.add(e);const r=this.names.get(e);r?r.add(n):this.names.set(e,new Set([n]))}insertRules(e,n,r){this.registerName(e,n),this.getTag().insertRules(bs(e),r)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup(bs(e)),this.clearNames(e)}clearTag(){this.tag=void 0}}const Cm=new WeakSet,lx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function ux(t,e){return e==null||typeof e=="boolean"||e===""?"":typeof e!="number"||e===0||t in lx||t.startsWith("--")?String(e).trim():e+"px"}const Un=47;function Od(t){if(t.charCodeAt(0)===45&&t.charCodeAt(1)===45)return t;let e="";for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);e+=r>=65&&r<=90?"-"+String.fromCharCode(r+32):t[n]}return e.startsWith("ms-")?"-"+e:e}const Rm=Symbol.for("sc-keyframes");function dx(t){return typeof t=="object"&&t!==null&&Rm in t}function Am(t){return Zr(t)&&!(t.prototype&&t.prototype.isReactComponent)}const Pm=t=>t==null||t===!1||t==="",hx=Symbol.for("react.client.reference");function Nd(t){return t.$$typeof===hx}function Im(t,e){for(const n in t){const r=t[n];t.hasOwnProperty(n)&&!Pm(r)&&(Array.isArray(r)&&Cm.has(r)||Zr(r)?e.push(Od(n)+":",r,";"):Us(r)?(e.push(n+" {"),Im(r,e),e.push("}")):e.push(Od(n)+": "+ux(n,r)+";"))}}function yn(t,e,n,r,s=[]){if(Pm(t))return s;const i=typeof t;if(i==="string")return s.push(t),s;if(i==="function"){if(Nd(t))return s;if(Am(t)&&e){const o=t(e);return yn(o,e,n,r,s)}return s.push(t),s}if(Array.isArray(t)){for(let o=0;o<t.length;o++)yn(t[o],e,n,r,s);return s}return cu(t)?(s.push(`.${t.styledComponentId}`),s):dx(t)?(n?(t.inject(n,r),s.push(t.getName(r))):s.push(t),s):Nd(t)?s:Us(t)?t.toString!==Object.prototype.toString?(s.push(t.toString()),s):(Im(t,s),s):(s.push(t.toString()),s)}const fx=km(la);class px{constructor(e,n,r){this.rules=e,this.componentId=n,this.baseHash=qn(fx,n),this.baseStyle=r,fi.registerId(n)}generateAndInjectStyles(e,n,r){let s=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";{let i="";for(let o=0;o<this.rules.length;o++){const a=this.rules[o];if(typeof a=="string")i+=a;else if(a)if(Am(a)){const c=a(e);typeof c=="string"?i+=c:c!=null&&c!==!1&&(i+=To(yn(c,e,n,r)))}else i+=To(yn(a,e,n,r))}if(i){this.dynamicNameCache||(this.dynamicNameCache=new Map);const o=r.hash?r.hash+i:i;let a=this.dynamicNameCache.get(o);if(!a){if(a=ou(qn(qn(this.baseHash,r.hash),i)>>>0),this.dynamicNameCache.size>=200){const c=this.dynamicNameCache.keys().next().value;c!==void 0&&this.dynamicNameCache.delete(c)}this.dynamicNameCache.set(o,a)}if(!n.hasNameForId(this.componentId,a)){const c=r(i,"."+a,void 0,this.componentId);n.insertRules(this.componentId,a,c)}s=xs(s,a)}}return s}}const mx=/&/g;function Om(t,e){let n=0;for(;--e>=0&&t.charCodeAt(e)===92;)n++;return!(1&~n)}function za(t){const e=t.length;let n="",r=0,s=0,i=0,o=!1,a=!1;for(let c=0;c<e;c++){const l=t.charCodeAt(c);if(i!==0||o||l!==Un||t.charCodeAt(c+1)!==42)if(o)l===42&&t.charCodeAt(c+1)===Un&&(o=!1,c++);else if(l!==34&&l!==39||Om(t,c)){if(i===0)if(l===123)s++;else if(l===125){if(s--,s<0){a=!0;let u=c+1;for(;u<e;){const h=t.charCodeAt(u);if(h===59||h===10)break;u++}u<e&&t.charCodeAt(u)===59&&u++,s=0,c=u-1,r=u;continue}s===0&&(n+=t.substring(r,c+1),r=c+1)}else l===59&&s===0&&(n+=t.substring(r,c+1),r=c+1)}else i===0?i=l:i===l&&(i=0);else o=!0,c++}return a||s!==0||i!==0?(r<e&&s===0&&i===0&&(n+=t.substring(r)),n):t}function Nm(t,e){const n=e+" ",r=","+n;for(let s=0;s<t.length;s++){const i=t[s];if(i.type==="rule"){i.value=(n+i.value).replaceAll(",",r);const o=i.props,a=[];for(let c=0;c<o.length;c++)a[c]=n+o[c];i.props=a}Array.isArray(i.children)&&i.type!=="@keyframes"&&Nm(i.children,e)}return t}function gx({options:t=Dr,plugins:e=iu}=Dr){let n,r,s;const i=(f,p,g)=>g.startsWith(r)&&g.endsWith(r)&&g.replaceAll(r,"").length>0?`.${n}`:f,o=e.slice();o.push(f=>{f.type===ia&&f.value.includes("&")&&(s||(s=new RegExp(`\\${r}\\b`,"g")),f.props[0]=f.props[0].replace(mx,r).replace(s,i))}),t.prefix&&o.push(Nb),o.push(Pb);let a=[];const c=Ib(o.concat(Ob(f=>a.push(f)))),l=(f,p="",g="",y="&")=>{n=y,r=p,s=void 0;const v=(function(b){const x=b.indexOf("//")!==-1,w=b.indexOf("}")!==-1;if(!x&&!w)return b;if(!x)return za(b);const E=b.length;let _="",C=0,R=0,O=0,$=0,B=0,q=!1;for(;R<E;){const H=b.charCodeAt(R);if(H!==34&&H!==39||Om(b,R))if(O===0)if(H===Un&&R+1<E&&b.charCodeAt(R+1)===42){for(R+=2;R+1<E&&(b.charCodeAt(R)!==42||b.charCodeAt(R+1)!==Un);)R++;R+=2}else if(H!==40)if(H!==41)if($>0)R++;else if(H===42&&R+1<E&&b.charCodeAt(R+1)===Un)_+=b.substring(C,R),R+=2,C=R,q=!0;else if(H===Un&&R+1<E&&b.charCodeAt(R+1)===Un){for(_+=b.substring(C,R);R<E&&b.charCodeAt(R)!==10;)R++;C=R,q=!0}else H===123?B++:H===125&&B--,R++;else $>0&&$--,R++;else $++,R++;else R++;else O===0?O=H:O===H&&(O=0),R++}return q?(C<E&&(_+=b.substring(C)),B===0?_:za(_)):B===0?b:za(b)})(f);let S=Rb(g||p?g+" "+p+" { "+v+" }":v);return t.namespace&&(S=Nm(S,t.namespace)),a=[],Eo(S,c),a},u=t;let h=Xc;for(let f=0;f<e.length;f++)e[f].name||Gt(15),h=qn(h,e[f].name);return u!=null&&u.namespace&&(h=qn(h,u.namespace)),u!=null&&u.prefix&&(h=qn(h,"p")),l.hash=h!==Xc?h.toString():"",l}const yx=new fi,nl=gx(),Lm=X.createContext({shouldForwardProp:void 0,styleSheet:yx,stylis:nl,stylisPlugins:void 0});Lm.Consumer;function jm(){return X.useContext(Lm)}const Bs=X.createContext(void 0);Bs.Consumer;function vx(t){const e=X.useContext(Bs),n=X.useMemo(()=>(function(r,s){if(!r)throw Gt(14);if(Zr(r))return r(s);if(Array.isArray(r)||typeof r!="object")throw Gt(8);return s?Object.assign(Object.assign({},s),r):r})(t.theme,e),[t.theme,e]);return t.children?X.createElement(Bs.Provider,{value:n},t.children):null}const Wa={};function bx(t,e){const n=typeof t!="string"?"sc":wm(t);Wa[n]=(Wa[n]||0)+1;const r=n+"-"+au(la+n+Wa[n]);return e?e+"-"+r:r}function xx(t,e,n){const r=cu(t),s=t,i=!Qc(t),{attrs:o=iu,componentId:a=bx(e.displayName,e.parentComponentId),displayName:c=Bb(t)}=e,l=e.displayName&&e.componentId?wm(e.displayName)+"-"+e.componentId:e.componentId||a,u=r&&s.attrs?s.attrs.concat(o).filter(Boolean):o;let{shouldForwardProp:h}=e;if(r&&s.shouldForwardProp){const y=s.shouldForwardProp;if(e.shouldForwardProp){const v=e.shouldForwardProp;h=(S,b)=>y(S,b)&&v(S,b)}else h=y}const f=new px(n,l,r?s.componentStyle:void 0);function p(y,v){return(function(S,b,x){const{attrs:w,componentStyle:E,defaultProps:_,foldedComponentIds:C,styledComponentId:R,target:O}=S,$=X.useContext(Bs),B=jm(),q=S.shouldForwardProp||B.shouldForwardProp,H=xm(b,$,_)||Dr,[ee,oe]=(function(D,de,we){const M=Object.assign(Object.assign({},de),{className:void 0,theme:we});let Ee=null;const _e=D.length>1;for(let Te=0;Te<D.length;Te++){const ke=D[Te],Je=Zr(ke)?ke(_e?Object.assign({},M):M):ke;for(const J in Je)J==="className"?M.className=xs(M.className,Je[J]):J==="style"?M.style=Object.assign(Object.assign({},M.style),Je[J]):Je[J]===void 0?J in M&&(M[J]!==void 0&&(Ee||(Ee=[])).push(J),M[J]=void 0):M[J]=Je[J]}return"className"in de&&typeof de.className=="string"&&(M.className=xs(M.className,de.className)),[M,Ee]})(w,b,H),te=E.generateAndInjectStyles(ee,B.styleSheet,B.stylis),he=ee.as||O,le=Qc(he),U=(function(D,de,we,M,Ee,_e){const Te={};for(const ke in D)ke[0]==="$"||ke==="as"||ke==="theme"&&D.theme===we||(ke==="forwardedAs"?D.forwardedAs!==void 0&&(Te.as=D.forwardedAs):D[ke]===void 0?ke==="className"||Ee||_e!==null&&_e.indexOf(ke)!==-1||M&&!M(ke,de)||(Te[ke]=void 0):M&&!M(ke,de)||(Te[ke]=D[ke]));return Te})(ee,he,H,q,le,oe);let P=xs(C,R);return te&&(P+=" "+te),ee.className&&(P+=" "+ee.className),U[le&&he.includes("-")?"class":"className"]=P,x&&(U.ref=x),m.createElement(he,U)})(g,y,v)}p.displayName=c;let g=X.forwardRef(p);return g.attrs=u,g.componentStyle=f,g.displayName=c,g.shouldForwardProp=h,g.foldedComponentIds=r?xs(s.foldedComponentIds,s.styledComponentId):"",g.styledComponentId=l,g.target=r?s.target:t,Object.defineProperty(g,"defaultProps",{get(){return this._foldedDefaultProps},set(y){this._foldedDefaultProps=r?(function(v,...S){for(const b of S)el(v,b,!0);return v})({},s.defaultProps,y):y}}),lu(g,()=>`.${g.styledComponentId}`),i&&_m(g,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}var wx=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function Ld(t,e){const n=[t[0]];for(let r=0,s=e.length;r<s;r+=1)n.push(e[r],t[r+1]);return n}const jd=t=>(Cm.add(t),t);function V(t,...e){if(Zr(t)||Us(t))return jd(yn(Ld(iu,[t,...e])));const n=t;return e.length===0&&n.length===1&&typeof n[0]=="string"?yn(n):jd(yn(Ld(n,e)))}function rl(t,e,n=Dr){if(!e)throw Gt(1,e);const r=(s,...i)=>t(e,n,V(s,...i));return r.attrs=s=>rl(t,e,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,s).filter(Boolean)})),r.withConfig=s=>rl(t,e,Object.assign(Object.assign({},n),s)),r}const Dm=t=>rl(xx,t),T=Dm;wx.forEach(t=>{T[t]=Dm(t)});class kx{constructor(e,n){this.instanceRules=new Map,this.rules=e,this.componentId=n,this.isStatic=(function(r){for(let s=0;s<r.length;s+=1){const i=r[s];if(Zr(i)&&!cu(i))return!1}return!0})(e),fi.registerId(this.componentId)}removeStyles(e,n){this.instanceRules.delete(e),this.rebuildGroup(n)}renderStyles(e,n,r,s){const i=this.componentId;if(this.isStatic){if(r.hasNameForId(i,i+e))this.instanceRules.has(e)||this.computeRules(e,n,r,s);else{const a=this.computeRules(e,n,r,s);r.insertRules(i,a.name,a.rules)}return}const o=this.instanceRules.get(e);if(this.computeRules(e,n,r,s),!r.server&&o){const a=o.rules,c=this.instanceRules.get(e).rules;if(a.length===c.length){let l=!0;for(let u=0;u<a.length;u++)if(a[u]!==c[u]){l=!1;break}if(l)return}}this.rebuildGroup(r)}computeRules(e,n,r,s){const i=To(yn(this.rules,n,r,s)),o={name:this.componentId+e,rules:s(i,"")};return this.instanceRules.set(e,o),o}rebuildGroup(e){const n=this.componentId;e.clearRules(n);for(const r of this.instanceRules.values())e.insertRules(n,r.name,r.rules)}}function Sx(t,...e){const n=V(t,...e),r=`sc-global-${au(JSON.stringify(n))}`,s=new kx(n,r),i=a=>{const c=jm(),l=X.useContext(Bs);let u;{const h=X.useRef(null);h.current===null&&(h.current=c.styleSheet.allocateGSInstance(r)),u=h.current}c.styleSheet.server&&o(u,a,c.styleSheet,l,c.stylis);{const h=s.isStatic?[u,c.styleSheet,s]:[u,a,c.styleSheet,l,c.stylis,s],f=X.useRef(s);X.useLayoutEffect(()=>{c.styleSheet.server||(f.current!==s&&(c.styleSheet.clearRules(r),f.current=s),o(u,a,c.styleSheet,l,c.stylis))},h),X.useLayoutEffect(()=>()=>{c.styleSheet.server||s.removeStyles(u,c.styleSheet)},[u,c.styleSheet,s])}return c.styleSheet.server&&s.instanceRules.delete(u),null};function o(a,c,l,u,h){if(s.isStatic)s.renderStyles(a,jb,l,h);else{const f=Object.assign(Object.assign({},c),{theme:xm(c,u,i.defaultProps)});s.renderStyles(a,f,l,h)}}return X.memo(i)}var Mm;class Ex{constructor(e,n){this[Mm]=!0,this.inject=(r,s=nl)=>{const i=this.getName(s);if(!r.hasNameForId(this.id,i)){const o=s(this.rules,i,"@keyframes");r.insertRules(this.id,i,o)}},this.name=e,this.id=bm+e,this.rules=n,bs(this.id),lu(this,()=>{throw Gt(12,String(this.name))})}getName(e=nl){return e.hash?this.name+ou(+e.hash>>>0):this.name}}function _x(t,...e){const n=To(V(t,...e)),r=au(n);return new Ex(r,n)}Mm=Rm;const Ln={primary:"#007FFF",primaryHover:"#1A8CFF",deep:"#003DF2",cyan:"#00FFE1",ink:"#3E3A39"},$i={colors:{light:{background:"#FFFFFF",surface:"#FAFBFC",muted:"#F2F4F7",border:"rgba(15, 23, 42, 0.08)",borderStrong:"rgba(15, 23, 42, 0.16)",primary:Ln.primary,primaryHover:Ln.primaryHover,secondary:Ln.deep,accent:Ln.cyan,ink:Ln.ink,text:{primary:"#0F172A",secondary:"#475569",tertiary:"#94A3B8",inverse:"#FFFFFF"}},dark:{background:"#0A0F1F",surface:"#0F1730",muted:"#152043",border:"rgba(255, 255, 255, 0.08)",borderStrong:"rgba(255, 255, 255, 0.18)",primary:"#1A8CFF",primaryHover:"#3399FF",secondary:Ln.deep,accent:Ln.cyan,ink:"#E2E8F0",text:{primary:"#F1F5F9",secondary:"#CBD5E1",tertiary:"#94A3B8",inverse:"#0F172A"}}},spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"64px"},borderRadius:{sm:"6px",md:"10px",lg:"16px",xl:"24px",full:"9999px"},shadows:{sm:"0 1px 2px rgba(15, 23, 42, 0.06)",md:"0 4px 14px rgba(15, 23, 42, 0.08)",lg:"0 18px 40px -16px rgba(15, 23, 42, 0.18)",glow:"0 24px 60px -24px rgba(0, 127, 255, 0.45)"}},Fm=m.createContext(void 0),$m="theme",Tx="senditgo-v29-theme",Cx=()=>{const t=localStorage.getItem($m)??localStorage.getItem(Tx);return t==="light"||t==="dark"?t:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"},YD=({children:t})=>{const[e,n]=m.useState(Cx);m.useLayoutEffect(()=>{localStorage.setItem($m,e),document.documentElement.setAttribute("data-theme",e)},[e]);const r=()=>{n(i=>i==="light"?"dark":"light")},s={...$i.colors[e],spacing:$i.spacing,borderRadius:$i.borderRadius,shadows:$i.shadows};return d.jsx(Fm.Provider,{value:{mode:e,toggleTheme:r},children:d.jsx(vx,{theme:s,children:t})})},pi=()=>{const t=m.useContext(Fm);if(!t)throw new Error("useTheme must be used within ThemeProvider");return t},Rx="/tms-official-web-preview/assets/toolkit-interface-384-BD5X_Dy8.webp",Ax="/tms-official-web-preview/assets/toolkit-interface-768-BIqX8NMj.webp",Px="/tms-official-web-preview/assets/toolkit-interface-dark-384-_zzkj-gt.webp",Ix="/tms-official-web-preview/assets/toolkit-interface-dark-768-hUfL3IYJ.webp",Ox="/tms-official-web-preview/assets/toolkit-operations-384-C3DQUoVN.webp",Nx="/tms-official-web-preview/assets/toolkit-operations-768-BPIr1NH0.webp",Lx="/tms-official-web-preview/assets/toolkit-operations-dark-384-CdJGoAH4.webp",jx="/tms-official-web-preview/assets/toolkit-operations-dark-768-CoX4dIS8.webp",Dx="/tms-official-web-preview/assets/toolkit-oversight-384--ljWiKY7.webp",Mx="/tms-official-web-preview/assets/toolkit-oversight-768-eikqp8UE.webp",Fx="/tms-official-web-preview/assets/toolkit-oversight-dark-384-CyqW1AB6.webp",$x="/tms-official-web-preview/assets/toolkit-oversight-dark-768-CBXwWGcc.webp",Vx="/tms-official-web-preview/assets/toolkit-proof-384-C9HV_F_D.webp",Ux="/tms-official-web-preview/assets/toolkit-proof-768-D5CI5Llc.webp",Bx="/tms-official-web-preview/assets/toolkit-proof-dark-384-CtWnQBvn.webp",Hx="/tms-official-web-preview/assets/toolkit-proof-dark-768-C2sUxCIP.webp",zx="/tms-official-web-preview/assets/toolkit-routing-384-de3lhomN.webp",Wx="/tms-official-web-preview/assets/toolkit-routing-768-wriyTI0K.webp",qx="/tms-official-web-preview/assets/toolkit-routing-dark-384-DMU8GjE3.webp",Kx="/tms-official-web-preview/assets/toolkit-routing-dark-768-DSoHj5vs.webp",Gx="/tms-official-web-preview/assets/toolkit-tracking-384-CUEK-8JU.webp",Zx="/tms-official-web-preview/assets/toolkit-tracking-768-CuLtsDdS.webp",Jx="/tms-official-web-preview/assets/toolkit-tracking-dark-384-CcehiMsG.webp",Yx="/tms-official-web-preview/assets/toolkit-tracking-dark-768-DVdhSqli.webp",Xx=Kr("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),Qx=Kr("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),e1=Kr("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]),t1=Kr("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]),n1=Kr("RotateCw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]),r1=Kr("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),s1={"toolkit-routing":{placeholder:"data:image/webp;base64,UklGRvoAAABXRUJQVlA4IO4AAABwBgCdASooABcAPsVQoEwnpKMiOrZoAPAYiWIAxQtMR+WSnmV6nGFk9yWvFR5yFQ02ZJUFJXs7WfF3QAAA/vZYnpQmUPBsubwt9+33cHKkJt3YBpWugVBqzcabGfDzwdE3mz1OGwMJqpfP8JB8sZerJ2K4rgRRBVrvVV5WlnFvsbFHRHnEOX7sy//+dOGg0ehrBIGB5alIV1FXpfTOTz3LLORvp349BKBZBnX1Rr+rUU2fPlW7HHpUKEPUvUPffEa3HdXWzB0cqiY8JgZooOQy2LkO1FuMIxYmG4cdLGRXmAqpyiU0oRefKZQSAAAA",mobileRevision:"71a84d4d7bd9",revision:"bcc59ce4d5e2"},"toolkit-routing-dark":{placeholder:"data:image/webp;base64,UklGRpoAAABXRUJQVlA4II4AAACwBACdASooABcAPtFSoEwoJKMiMBqtUQAaCUAYdYegcWvjNP0aCDN0bZuhHeAAAP7xD/aTxU91ljfTXNQW2/8BpqukG03jc/0l7BdR1OmjThnEWdifze2TQFAr6HFnyer1BGQtKHwESZBaqJSYZkpQKiWQnLv45F6JqZ8AxqhfIgT+yR3+T952d29JdhgA",mobileRevision:"603544466b31",revision:"e77621823e00"},"toolkit-proof":{placeholder:"data:image/webp;base64,UklGRqIAAABXRUJQVlA4IJYAAADQBQCdASooABcAPtVapE0oJSMiMBVaqQAaiWcAyngKv/kbQs/10D2dM7EDvYEZFOypmNDGbWEAAP7t6ZP8J6y8tX5jRy6LKvIEsENnst5RdsAAdTotiBjLtewXbTeJZEFRmol5vdRW3denTJJ613zTIUKzQ0BBnGSxndGFyXjiBSDzhRBm0LJjImeKgZRxpZkcz+q3CAA=",mobileRevision:"e88fd6023e6b",revision:"bf1a7e1fb696"},"toolkit-proof-dark":{placeholder:"data:image/webp;base64,UklGRqoAAABXRUJQVlA4IJ4AAABwBQCdASooABcAPtVipU8oJaMiKrgKAQAaiWMAuwAJJqTFxae9EXsj/w8YBmgQx9eyO5JgAP7vXGkZ37FklBKYwpBRkbhMYKU2rcAApyiwK1dAeaKzvTKqMOnbfkSwyzMnX7RzWCLCvKfnoPVANqaJGVj1ga3x2OtFgcz1iJ6pFpYofa+i3qXtv8YXHkmF9n4j3w4s3icvtd8toGAAAA==",mobileRevision:"9a6648d1dec7",revision:"7c22b5b5adaf"},"toolkit-oversight":{placeholder:"data:image/webp;base64,UklGRrgAAABXRUJQVlA4IKwAAADwBQCdASooABcAPslMoUwnpCMiOrZoAPAZCWUAy6QWbZ3D1JgUlvjeIrfc2ezZi4gaSyWQAIOQAAD+8gpSO1Gc0gzdCIP6GmKuwiYrNnxtxflpWqgSNmIMOokaGoqMkGeviVmjeg2TwRqn2Xuj1r6gVIhXVU0qnl2NsCS58Er51bmX6+FcGH1l5VeRNOYmTWOIGy6BEwpzh3D/56ZZMliMAasrbPp4+IswAAAA",mobileRevision:"a436678a73f0",revision:"8c62dc2ee0a0"},"toolkit-oversight-dark":{placeholder:"data:image/webp;base64,UklGRrAAAABXRUJQVlA4IKQAAAAwBQCdASooABcAPtVWo0yoJKMiNVQIAQAaiWUAwrm/gYNKpHgqJUKZUny+qxQnIqK08AD+9Ea1VHNDuHd7Wgl2NrjQp4yTzgXZ5ILTdG5gRUU30xWv0Dzbwj7EGQrVcbSZcH3qcv+6oJolUUxpcQJ5KRUr3w3jtoV/bOKn1bbPqAQo2MmXPO4qqZp73jBk5CM6f4PEmDD/4is95SaLhoMknT5AAA==",mobileRevision:"825d0c5d6b8e",revision:"4b2a1bfddfda"},"toolkit-operations":{placeholder:"data:image/webp;base64,UklGRsQAAABXRUJQVlA4ILgAAAAwBgCdASooABcAPtVYpU2oJKMiMBVaqQAaiWNdgFvTYdmb/0JqgGVovh7p1MY4VN7bE3s9k3xAU7rwAP7wwX9S7atzgGOdoMy//HgDrwgT9G6hdkNuXF6+sNQhyT0TPPZqN6idQHMbzG0Zx3FxF4r2/KVkJdeCb6Bbp5VkRpqXELLl0xx754rU4dmS853r8Fgdgb9xgExxZAuq5q857dFJBW7WjEhNz0Bz1xVq5A5NTrs+KHxl2AAA",mobileRevision:"716bb68a9eee",revision:"232b66ff1c9d"},"toolkit-operations-dark":{placeholder:"data:image/webp;base64,UklGRowAAABXRUJQVlA4IIAAAAAQBQCdASooABcAPtVkplCoJSMipWsxABqJZQC7AAt8ezT9JNSP/5syNIV+myCGryAAAP7w6yNwMoUW3A291Tvuap0D2M1qKSxBMkOYDxkoohAmaKzkpe4GhIGWUh+YAcZJfAgvmbgrs08/q+wLi6W8FOa2TGr8gweo8GpHp0AAAA==",mobileRevision:"b732a674636a",revision:"805515881174"},"toolkit-tracking":{placeholder:"data:image/webp;base64,UklGRoIAAABXRUJQVlA4IHYAAACQBACdASooABcAPtVYpUwoJSOiMAgBABqJZwAAW+x007TkYYApw63omsBvlQAA/vPMYMit2EJizrniOrt4Uto8jtV5MC4vxlP4VVwb3UifQEgffCblJwdyMo0WGDqpVjsdCjprv+Q2CcFIx/YI77zHAwqCNAAA",mobileRevision:"25253a6c18c8",revision:"5b3f1e5aa0b2"},"toolkit-tracking-dark":{placeholder:"data:image/webp;base64,UklGRoQAAABXRUJQVlA4IHgAAABwBACdASooABcAPtVcp08oJKMiKrgKAQAaiWUAygAKHh4d4bwbHmQGueALAAD+8XpaQsThvoRxCiicHzfCkxoZGOB8p2PSj2ikAPH2b+6Ky8DlM0yWiBADBHGLEY/0AkiS5pNiW0MNbJi2PeZneZEoSY9KolYAAAA=",mobileRevision:"6817702dd554",revision:"e2002c5fa228"},"toolkit-interface":{placeholder:"data:image/webp;base64,UklGRnwAAABXRUJQVlA4IHAAAABwBACdASooABcAPtVkqlCoJSOipWmZABqJaQDK8A4SBKHKM87oPZFp0h6QAAD+8QY9I0Wjh5OArIqOuRhe06mbtCgb9hq155kbhDzTXukf0eWRNPerUnX45+RhfvTmDSpRDRYgFKbISRHLCFYV8AAA",mobileRevision:"eaa5e6b02ff1",revision:"24ebd3b4c031"},"toolkit-interface-dark":{placeholder:"data:image/webp;base64,UklGRoQAAABXRUJQVlA4IHgAAAAQBQCdASooABcAPtVipU+oJaMiJW5hABqJZwDC+AkNgNCwwiHZLgNMm+273MG2ClAAAP7xAmPsysmGvulpxW+h/w1UwuWyOlG/yvxxqPhE/UoGKaUSDs85p+mwLCVepBhPnKY5yuJt2GSuTr7ZUnkg5dOEEIrgAAA=",mobileRevision:"752bc5146ead",revision:"ce4c4a19bd1e"}},Vm="(prefers-reduced-motion: reduce)";function i1(t){const e=window.matchMedia(Vm);return e.addEventListener("change",t),()=>e.removeEventListener("change",t)}function uu(){return m.useSyncExternalStore(i1,()=>window.matchMedia(Vm).matches,()=>!0)}const sl="https://melissa-frontend-holieninnovation.github.io/senditgo-carrier-demo/walkthrough",o1=sl+"/fleet-en.vtt";function a1(t){return t==="light"?{src:sl+"/fleet-d8deddb2.mp4",poster:sl+"/fleet-poster.jpg"}:{src:Ne("/sam-loops/fleet-walkthrough-dark.mp4"),poster:Ne("/sam-loops/fleet-walkthrough-dark.webp")}}function ua({src:t,videoRef:e,onLoadedMetadata:n,onTimeUpdate:r,canResume:s,...i}){const o=m.useRef(null),a=e??o,[c,l]=m.useState(t),u=m.useRef(null);return m.useLayoutEffect(()=>{var f;if(c===t)return;const h=a.current;t||(u.current=null),t&&c&&h&&h.readyState>=1&&!u.current&&(u.current={time:h.currentTime,rate:h.playbackRate,playing:!h.paused&&!h.ended,captions:(f=h.textTracks[0])==null?void 0:f.mode}),l(t)},[t,c,a]),m.useLayoutEffect(()=>{var h,f;!c&&((h=a.current)==null?void 0:h.networkState)!==HTMLMediaElement.NETWORK_EMPTY&&((f=a.current)==null||f.load())},[c,a]),d.jsx("video",{...i,ref:a,src:c,onTimeUpdate:h=>{!u.current&&c===t&&(r==null||r(h))},onLoadedMetadata:h=>{const f=h.currentTarget,p=u.current;if(!p){n==null||n(h);return}!t||f.currentSrc!==new URL(t,document.baseURI).href||(u.current=null,f.currentTime=Math.min(p.time,f.duration),f.playbackRate=p.rate,p.captions&&f.textTracks[0]&&(f.textTracks[0].mode=p.captions),p.playing&&!document.hidden&&(!s||s(f))&&f.play().catch(()=>{}))}})}const c1=Object.assign({"../assets/feature-posters/toolkit-interface-384.webp":Rx,"../assets/feature-posters/toolkit-interface-768.webp":Ax,"../assets/feature-posters/toolkit-interface-dark-384.webp":Px,"../assets/feature-posters/toolkit-interface-dark-768.webp":Ix,"../assets/feature-posters/toolkit-operations-384.webp":Ox,"../assets/feature-posters/toolkit-operations-768.webp":Nx,"../assets/feature-posters/toolkit-operations-dark-384.webp":Lx,"../assets/feature-posters/toolkit-operations-dark-768.webp":jx,"../assets/feature-posters/toolkit-oversight-384.webp":Dx,"../assets/feature-posters/toolkit-oversight-768.webp":Mx,"../assets/feature-posters/toolkit-oversight-dark-384.webp":Fx,"../assets/feature-posters/toolkit-oversight-dark-768.webp":$x,"../assets/feature-posters/toolkit-proof-384.webp":Vx,"../assets/feature-posters/toolkit-proof-768.webp":Ux,"../assets/feature-posters/toolkit-proof-dark-384.webp":Bx,"../assets/feature-posters/toolkit-proof-dark-768.webp":Hx,"../assets/feature-posters/toolkit-routing-384.webp":zx,"../assets/feature-posters/toolkit-routing-768.webp":Wx,"../assets/feature-posters/toolkit-routing-dark-384.webp":qx,"../assets/feature-posters/toolkit-routing-dark-768.webp":Kx,"../assets/feature-posters/toolkit-tracking-384.webp":Gx,"../assets/feature-posters/toolkit-tracking-768.webp":Zx,"../assets/feature-posters/toolkit-tracking-dark-384.webp":Jx,"../assets/feature-posters/toolkit-tracking-dark-768.webp":Yx});function l1({name:t,film:e,id:n,open:r,warm:s,onOpen:i,onWarm:o,children:a}){var U;const c=m.useRef(null),l=m.useRef(null),u=m.useRef(),h=m.useRef(),[f]=m.useState(()=>window.matchMedia("(max-width: 600px)").matches),[p,g]=m.useState(!1),[y,v]=m.useState(!1),[S,b]=m.useState(!1),[x,w]=m.useState(""),[E,_]=m.useState(""),C=uu(),R=(U=navigator.connection)==null?void 0:U.saveData,O=s1[e],$=Ne("/sam-loops/"+e+(f?"-mobile.mp4?v="+O.mobileRevision:".mp4?v="+O.revision)),B=x===$,q=E===$,H=m.useCallback(()=>r&&y&&!document.hidden,[r,y]);m.useEffect(()=>{const P=c.current;if(!P)return;if(typeof IntersectionObserver>"u"){g(!0),v(!0);return}const D=new IntersectionObserver(([we],M)=>{we.isIntersecting&&(g(!0),o(n,!1),M.disconnect())},{rootMargin:"480px 0px"}),de=new IntersectionObserver(([we])=>v(we.isIntersecting));return D.observe(P),de.observe(P),()=>{D.disconnect(),de.disconnect(),clearTimeout(u.current)}},[n,o]);const ee=s&&!R&&!C;m.useLayoutEffect(()=>{const P=l.current;if(!P)return;function D(){P&&(H()?P.error||P.play().catch(de=>{de.name!=="AbortError"&&P.currentSrc===new URL($,document.baseURI).href&&_($)}):P.pause())}return D(),document.addEventListener("visibilitychange",D),()=>document.removeEventListener("visibilitychange",D)},[H,$]),m.useLayoutEffect(()=>{w(""),_("");const P=l.current;return()=>{var D;h.current!==void 0&&((D=P==null?void 0:P.cancelVideoFrameCallback)==null||D.call(P,h.current))}},[$]);function oe(P){const D=new URL($,document.baseURI).href,de=()=>{P.currentSrc===D&&P.readyState>=2&&(w($),b(!0))};P.requestVideoFrameCallback?(h.current!==void 0&&P.cancelVideoFrameCallback(h.current),h.current=P.requestVideoFrameCallback(de)):de()}function te(){const P=l.current;if(r&&!q){P==null||P.pause(),i(null);return}g(!0),v(!0),P&&!P.hasAttribute("src")&&(P.src=$),o(n,!0),(q||P!=null&&P.error)&&(_(""),w(""),P==null||P.load()),i(n),P==null||P.play().catch(D=>{D.name!=="AbortError"&&P.currentSrc===new URL($,document.baseURI).href&&_($)})}function he(){g(!0),o(n,!0)}const le=P=>c1["../assets/feature-posters/"+e+"-"+P+".webp"];return d.jsxs("article",{ref:c,"data-open":r,className:"toolkit-flip",onPointerEnter:P=>{P.pointerType!=="touch"&&(u.current=setTimeout(he,100))},onPointerLeave:()=>clearTimeout(u.current),onFocus:he,onKeyDown:P=>{P.key==="Escape"&&r&&i(null)},children:[d.jsxs("div",{className:"toolkit-flip-inner",children:[d.jsx("div",{className:"toolkit-flip-front","aria-hidden":r,children:a}),d.jsx("div",{className:"toolkit-flip-back","aria-hidden":!r,children:d.jsxs("div",{id:"feature-film-"+n,className:"toolkit-card-preview","aria-busy":r&&!B&&!q,style:{backgroundImage:'url("'+O.placeholder+'")'},children:[d.jsx(ua,{videoRef:l,src:r||ee||S?$:void 0,"aria-label":t,muted:!0,loop:!0,playsInline:!0,preload:r||ee?"auto":S?"metadata":"none",canResume:H,onLoadedMetadata:P=>{H()&&P.currentTarget.paused&&P.currentTarget.play().catch(()=>{})},onPlaying:P=>oe(P.currentTarget),onError:()=>{w(""),_($)}}),d.jsx("img",{alt:"",className:"product-loop-poster","data-covered":B&&!q,width:"384",height:"216",decoding:"async",src:p?le(384):O.placeholder,srcSet:p?le(384)+" 384w, "+le(768)+" 768w":void 0,sizes:"(max-width:560px) 90vw, (max-width:960px) 45vw, 360px",onError:P=>{P.currentTarget.removeAttribute("srcset"),P.currentTarget.src=O.placeholder}})]})})]}),d.jsxs("button",{type:"button",className:"product-loop-toggle toolkit-flip-toggle","aria-expanded":r,"aria-controls":"feature-film-"+n,"aria-label":(r?q?"Retry ":"Pause ":"Play ")+t,onClick:te,children:[r&&q&&d.jsx(n1,{className:"film-retry","aria-hidden":"true"}),r&&!B&&!q&&d.jsx("span",{className:"film-buffering","aria-hidden":"true"})]})]})}const u1=[{id:"routing",name:"Routing Engine",tagline:"Tune it to the job",body:"Optimise for fewest drivers when payroll's tight, or fastest delivery when the clock's the boss. One dial, your call."},{id:"proof",name:"Proof of Delivery",tagline:"Every drop, on the record",body:"Signature, photo, location and timestamp logged automatically. When a delivery’s questioned, the answer’s already there."},{id:"oversight",name:"Total fleet oversight",tagline:"Know before it’s a problem",body:"Every run tracked live, and anything slipping flags itself — so you’re acting early, not explaining later."},{id:"operations",name:"Operations Deck",tagline:"Run the whole day from one place",body:"Build runs, reassign drops, reorder stops — a few taps and the plan reshapes around you. No spreadsheets, no phone calls, no fuss."},{id:"tracking",name:"Live Tracking",tagline:"Customers track their own delivery",body:"Live ETA from dispatch to door, with the driver on the map the moment they’re next in line"},{id:"interface",name:"Intuitive UI",tagline:"Simple enough for day one",body:"An interface your drivers pick up in a shift and your dispatchers never fight. Power that stays out of the way"}],d1={routing:d.jsxs(d.Fragment,{children:[d.jsx("path",{d:"M6 25h6l5-6v-6l5-6h7"}),d.jsx("path",{className:"toolkit-mark-secondary",d:"M17 17h6l5 5",strokeDasharray:"2 3.5"}),d.jsx("rect",{x:"3",y:"22",width:"6",height:"6",rx:"1.5",fill:"currentColor",stroke:"none"}),d.jsx("path",{d:"m25 3 5 4-5 4"})]}),proof:d.jsxs(d.Fragment,{children:[d.jsx("path",{className:"toolkit-mark-wash",d:"m4 9 10-5 10 5-10 5z"}),d.jsx("path",{d:"m4 9 10-5 10 5-10 5z M4 9v12l10 5v-12 M24 9v5"}),d.jsx("path",{className:"toolkit-mark-secondary",d:"m9 6.5 10 5"}),d.jsx("path",{d:"m19 22 4 4 8-9",strokeWidth:"3"})]}),oversight:d.jsxs(d.Fragment,{children:[d.jsx("path",{className:"toolkit-mark-wash",d:"M3 6h27v6H3z"}),d.jsx("rect",{x:"3",y:"6",width:"27",height:"19",rx:"2.5"}),d.jsx("path",{className:"toolkit-mark-secondary",d:"M3 12h27 M13 29h7 M16.5 25v4"}),d.jsx("path",{d:"M7 20h4l3-5 4 6 3-4h5"})]}),operations:d.jsxs(d.Fragment,{children:[d.jsx("rect",{x:"3",y:"5",width:"7",height:"5",rx:"1.2",fill:"currentColor",stroke:"none"}),d.jsx("rect",{x:"3",y:"14",width:"7",height:"5",rx:"1.2"}),d.jsx("rect",{x:"3",y:"23",width:"7",height:"5",rx:"1.2"}),d.jsx("path",{className:"toolkit-mark-secondary",d:"M15 7.5h14 M15 25.5h5"}),d.jsx("path",{d:"M15 16.5h5l6 7h4m-3.5-4 4 4-4 4"})]}),tracking:d.jsxs(d.Fragment,{children:[d.jsx("path",{className:"toolkit-mark-wash",d:"M25 13c0 6-8.5 15-8.5 15S8 19 8 13a8.5 8.5 0 1 1 17 0Z"}),d.jsx("path",{d:"M25 13c0 6-8.5 15-8.5 15S8 19 8 13a8.5 8.5 0 1 1 17 0Z"}),d.jsx("circle",{cx:"16.5",cy:"13",r:"2.8",fill:"currentColor",stroke:"none"}),d.jsx("path",{className:"toolkit-mark-secondary",d:"M4.5 8.5a13 13 0 0 0 0 9 M28.5 8.5a13 13 0 0 1 0 9"})]}),interface:d.jsxs(d.Fragment,{children:[d.jsx("path",{className:"toolkit-mark-wash",d:"M3 6h25v6H3z"}),d.jsx("path",{d:"M14 26H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h21a2 2 0 0 1 2 2v7"}),d.jsx("path",{className:"toolkit-mark-secondary",d:"M3 12h25 M8 17h5"}),d.jsx("path",{d:"m18 16 12 7-5.5 1.3-2.6 5.2z",fill:"currentColor",strokeWidth:"1.2"})]})};function h1({card:t}){return d.jsxs(d.Fragment,{children:[d.jsxs("h3",{className:"toolkit-heading toolkit-feature-title",children:[d.jsx("svg",{className:"toolkit-mark",viewBox:"0 0 34 33","aria-hidden":"true",focusable:"false",fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinejoin:"round",strokeLinecap:"round",children:d1[t.id]}),t.name]}),d.jsx("p",{className:"toolkit-tagline",children:t.tagline}),d.jsx("p",{className:"toolkit-body",children:t.body})]})}function XD(){const{mode:t}=pi(),[e,n]=m.useState(null),[r,s]=m.useState(null),i=m.useCallback((o,a)=>s(c=>a?o:c??o),[]);return d.jsx("div",{id:"fleet-features",className:"fleet-toolkit","aria-label":"Product features",role:"group",children:u1.map(o=>d.jsx(l1,{id:o.id,name:o.name,film:`toolkit-${o.id}${t==="dark"?"-dark":""}`,open:e===o.id,warm:r===o.id&&(!e||e===o.id),onOpen:n,onWarm:i,children:d.jsx(h1,{card:o})},o.id))})}/**
 * react-router v7.18.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var du=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Um=/^[\\/]{2}/;function f1(t,e){return e+t.replace(/\\/g,"/")}var Dd="popstate";function Md(t){return typeof t=="object"&&t!=null&&"pathname"in t&&"search"in t&&"hash"in t&&"state"in t&&"key"in t}function p1(t={}){function e(r,s){var l;let i=(l=s.state)==null?void 0:l.masked,{pathname:o,search:a,hash:c}=i||r.location;return il("",{pathname:o,search:a,hash:c},s.state&&s.state.usr||null,s.state&&s.state.key||"default",i?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function n(r,s){return typeof s=="string"?s:Qn(s)}return g1(e,n,null,t)}function ge(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ot(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function m1(){return Math.random().toString(36).substring(2,10)}function Fd(t,e){return{usr:t.state,key:t.key,idx:e,masked:t.mask?{pathname:t.pathname,search:t.search,hash:t.hash}:void 0}}function il(t,e,n=null,r,s){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?Jr(e):e,state:n,key:e&&e.key||r||m1(),mask:s}}function Qn({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Jr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substring(r),t=t.substring(0,r)),t&&(e.pathname=t)}return e}function g1(t,e,n,r={}){let{window:s=document.defaultView,v5Compat:i=!1}=r,o=s.history,a="POP",c=null,l=u();l==null&&(l=0,o.replaceState({...o.state,idx:l},""));function u(){return(o.state||{idx:null}).idx}function h(){a="POP";let v=u(),S=v==null?null:v-l;l=v,c&&c({action:a,location:y.location,delta:S})}function f(v,S){a="PUSH";let b=Md(v)?v:il(y.location,v,S);l=u()+1;let x=Fd(b,l),w=y.createHref(b.mask||b);try{o.pushState(x,"",w)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;s.location.assign(w)}i&&c&&c({action:a,location:y.location,delta:1})}function p(v,S){a="REPLACE";let b=Md(v)?v:il(y.location,v,S);l=u();let x=Fd(b,l),w=y.createHref(b.mask||b);o.replaceState(x,"",w),i&&c&&c({action:a,location:y.location,delta:0})}function g(v){return y1(s,v)}let y={get action(){return a},get location(){return t(s,o)},listen(v){if(c)throw new Error("A history only accepts one active listener");return s.addEventListener(Dd,h),c=v,()=>{s.removeEventListener(Dd,h),c=null}},createHref(v){return e(s,v)},createURL:g,encodeLocation(v){let S=g(v);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:f,replace:p,go(v){return o.go(v)}};return y}function y1(t,e,n=!1){let r="http://localhost";t&&(r=t.location.origin!=="null"?t.location.origin:t.location.href),ge(r,"No window.location.(origin|href) available to create URL");let s=typeof e=="string"?e:Qn(e);return s=s.replace(/ $/,"%20"),!n&&Um.test(s)&&(s=r+s),new URL(s,r)}function Bm(t,e,n="/"){return v1(t,e,n,!1)}function v1(t,e,n,r,s){let i=typeof e=="string"?Jr(e):e,o=Zt(i.pathname||"/",n);if(o==null)return null;let a=b1(t),c=null,l=P1(o);for(let u=0;c==null&&u<a.length;++u)c=A1(a[u],l,r);return c}function b1(t){let e=Hm(t);return x1(e),e}function Hm(t,e=[],n=[],r="",s=!1){let i=(o,a,c=s,l)=>{let u={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};if(u.relativePath.startsWith("/")){if(!u.relativePath.startsWith(r)&&c)return;ge(u.relativePath.startsWith(r),`Absolute route path "${u.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),u.relativePath=u.relativePath.slice(r.length)}let h=vt([r,u.relativePath]),f=n.concat(u);o.children&&o.children.length>0&&(ge(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),Hm(o.children,e,f,h,c)),!(o.path==null&&!o.index)&&e.push({path:h,score:C1(h,o.index),routesMeta:f.map((p,g)=>{let[y,v]=qm(p.relativePath,p.caseSensitive,g===f.length-1);return{...p,matcher:y,compiledParams:v}})})};return t.forEach((o,a)=>{var c;if(o.path===""||!((c=o.path)!=null&&c.includes("?")))i(o,a);else for(let l of zm(o.path))i(o,a,!0,l)}),e}function zm(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let o=zm(r.join("/")),a=[];return a.push(...o.map(c=>c===""?i:[i,c].join("/"))),s&&a.push(...o),a.map(c=>t.startsWith("/")&&c===""?"/":c)}function x1(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:R1(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var w1=/^:[\w-]+$/,k1=3,S1=2,E1=1,_1=10,T1=-2,$d=t=>t==="*";function C1(t,e){let n=t.split("/"),r=n.length;return n.some($d)&&(r+=T1),e&&(r+=S1),n.filter(s=>!$d(s)).reduce((s,i)=>s+(w1.test(i)?k1:i===""?E1:_1),r)}function R1(t,e){return t.length===e.length&&t.slice(0,-1).every((r,s)=>r===e[s])?t[t.length-1]-e[e.length-1]:0}function A1(t,e,n=!1){let{routesMeta:r}=t,s={},i="/",o=[];for(let a=0;a<r.length;++a){let c=r[a],l=a===r.length-1,u=i==="/"?e:e.slice(i.length)||"/",h={path:c.relativePath,caseSensitive:c.caseSensitive,end:l},f=c.matcher&&c.compiledParams?Wm(h,u,c.matcher,c.compiledParams):Co(h,u),p=c.route;if(!f&&l&&n&&!r[r.length-1].route.index&&(f=Co({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},u)),!f)return null;Object.assign(s,f.params),o.push({params:s,pathname:vt([i,f.pathname]),pathnameBase:N1(vt([i,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(i=vt([i,f.pathnameBase]))}return o}function Co(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=qm(t.path,t.caseSensitive,t.end);return Wm(t,e,n,r)}function Wm(t,e,n,r){let s=e.match(n);if(!s)return null;let i=s[0],o=Mr(i,1),a=s.slice(1);return{params:r.reduce((l,{paramName:u,isOptional:h},f)=>{if(u==="*"){let g=a[f]||"";o=Mr(i.slice(0,i.length-g.length),1)}const p=a[f];return h&&!p?l[u]=void 0:l[u]=(p||"").replace(/%2F/g,"/"),l},{}),pathname:i,pathnameBase:o,pattern:t}}function qm(t,e=!1,n=!0){ot(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,c,l,u)=>{if(r.push({paramName:a,isOptional:c!=null}),c){let h=u.charAt(l+o.length);return h&&h!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(r.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function P1(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ot(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function Zt(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function I1(t,e="/"){let{pathname:n,search:r="",hash:s=""}=typeof t=="string"?Jr(t):t,i;return n?(n=Km(n),n.startsWith("/")||n.startsWith("\\")?i=Vd(n.substring(1),"/"):i=Vd(n,e)):i=e,{pathname:i,search:L1(r),hash:j1(s)}}function Vd(t,e){let n=Mr(e).split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function qa(t,e,n,r){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function O1(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function hu(t){let e=O1(t);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function da(t,e,n,r=!1){let s;typeof t=="string"?s=Jr(t):(s={...t},ge(!s.pathname||!s.pathname.includes("?"),qa("?","pathname","search",s)),ge(!s.pathname||!s.pathname.includes("#"),qa("#","pathname","hash",s)),ge(!s.search||!s.search.includes("#"),qa("#","search","hash",s)));let i=t===""||s.pathname==="",o=i?"/":s.pathname,a;if(o==null)a=n;else{let h=e.length-1;if(!r&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),h-=1;s.pathname=f.join("/")}a=h>=0?e[h]:"/"}let c=I1(s,a),l=o&&o!=="/"&&o.endsWith("/"),u=(i||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(l||u)&&(c.pathname+="/"),c}var Km=t=>t.replace(/[\\/]{2,}/g,"/"),vt=t=>Km(t.join("/"));function Mr(t,e=0){let n=t.length;for(;n>e&&t.charCodeAt(n-1)===47;)n--;return n===t.length?t:t.slice(0,n)}var N1=t=>Mr(t).replace(/^\/*/,"/"),L1=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,j1=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,D1=class{constructor(t,e,n,r=!1){this.status=t,this.statusText=e||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function M1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function F1(t){let e=t.map(n=>n.route.path).filter(Boolean);return vt(e)||"/"}var Gm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Zm(t,e){let n=t;if(typeof n!="string"||!du.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,s=!1;if(Gm)try{let i=new URL(window.location.href),o=Um.test(n)?new URL(f1(n,i.protocol)):new URL(n),a=Zt(o.pathname,e);o.origin===i.origin&&a!=null?n=a+o.search+o.hash:s=!0}catch{ot(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:s,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Ud=new URL("http://localhost");function fu(t){if(t.createURL)return t.createURL("/");try{return new URL(t.createHref("/"),Ud)}catch{return Ud}}function Ka(t,e){return t.origin===e.origin&&(t.origin!=="null"||t.protocol===e.protocol&&t.host===e.host)}function $1(t,e){if(t.startsWith("//"))return!0;let n=e.protocol.toLowerCase();return t.toLowerCase().startsWith(n)?e.host===""||t.slice(n.length).startsWith("//"):!1}function pu(t,e,n,r){let s=null;try{s=t==null?null:new URL(t,n)}catch{}let i=new URL(e,n),o=s!=null&&!Ka(s,n),a=!Ka(i,n);if(r==="reject"){if(o||a)throw new Error("External navigation is not allowed")}else if(a&&(s==null||!$1(t,s)||!Ka(s,i)))throw new Error("External navigation is not allowed")}var Jm=["POST","PUT","PATCH","DELETE"];new Set(Jm);var V1=["GET",...Jm];new Set(V1);var U1=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function B1(t){try{return U1.includes(new URL(t).protocol)}catch{return!1}}var Yr=m.createContext(null);Yr.displayName="DataRouter";var ha=m.createContext(null);ha.displayName="DataRouterState";var Ym=m.createContext(!1);function H1(){return m.useContext(Ym)}var Xm=m.createContext({isTransitioning:!1});Xm.displayName="ViewTransition";var z1=m.createContext(new Map);z1.displayName="Fetchers";var W1=m.createContext(null);W1.displayName="Await";var et=m.createContext(null);et.displayName="Navigation";var Xr=m.createContext(null);Xr.displayName="Location";var St=m.createContext({outlet:null,matches:[],isDataRoute:!1});St.displayName="Route";var mu=m.createContext(null);mu.displayName="RouteError";var Qm="REACT_ROUTER_ERROR",q1="REDIRECT",K1="ROUTE_ERROR_RESPONSE";function G1(t){if(t.startsWith(`${Qm}:${q1}:{`))try{let e=JSON.parse(t.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function Z1(t){if(t.startsWith(`${Qm}:${K1}:{`))try{let e=JSON.parse(t.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new D1(e.status,e.statusText,e.data)}catch{}}function J1(t,{relative:e}={}){ge(Qr(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=m.useContext(et),{hash:s,pathname:i,search:o}=mi(t,{relative:e}),a=i;return n!=="/"&&(a=i==="/"?n:vt([n,i])),r.createHref({pathname:a,search:o,hash:s})}function Qr(){return m.useContext(Xr)!=null}function at(){return ge(Qr(),"useLocation() may be used only in the context of a <Router> component."),m.useContext(Xr).location}function QD(){return m.useContext(Xr).navigationType}var eg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function tg(t){m.useContext(et).static||m.useLayoutEffect(t)}function fa(){let{isDataRoute:t}=m.useContext(St);return t?lw():Y1()}function Y1(){ge(Qr(),"useNavigate() may be used only in the context of a <Router> component.");let t=m.useContext(Yr),{basename:e,navigator:n}=m.useContext(et),{matches:r}=m.useContext(St),{pathname:s}=at(),i=JSON.stringify(hu(r)),o=m.useRef(!1);return tg(()=>{o.current=!0}),m.useCallback((c,l={})=>{if(ot(o.current,eg),!o.current)return;if(typeof c=="number"){n.go(c);return}let u=da(c,JSON.parse(i),s,l.relative==="path");t==null&&e!=="/"&&(u.pathname=u.pathname==="/"?e:vt([e,u.pathname])),pu(typeof c=="string"?c:Qn(c),n.createHref(u),fu(n),"reject"),(l.replace?n.replace:n.push)(u,l.state,l)},[e,n,i,s,t])}m.createContext(null);function eM(){let{matches:t}=m.useContext(St),e=t[t.length-1];return(e==null?void 0:e.params)??{}}function mi(t,{relative:e}={}){let{matches:n}=m.useContext(St),{pathname:r}=at(),s=JSON.stringify(hu(n));return m.useMemo(()=>da(t,JSON.parse(s),r,e==="path"),[t,s,r,e])}function X1(t,e){return ng(t,e)}function ng(t,e,n){var v;ge(Qr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=m.useContext(et),{matches:s}=m.useContext(St),i=s[s.length-1],o=i?i.params:{},a=i?i.pathname:"/",c=i?i.pathnameBase:"/",l=i&&i.route;{let S=l&&l.path||"";sg(a,!l||S.endsWith("*")||S.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${a}" (under <Route path="${S}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${S}"> to <Route path="${S==="/"?"*":`${S}/*`}">.`)}let u=at(),h;if(e){let S=typeof e=="string"?Jr(e):e;ge(c==="/"||((v=S.pathname)==null?void 0:v.startsWith(c)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${S.pathname}" was given in the \`location\` prop.`),h=S}else h=u;let f=h.pathname||"/",p=f;if(c!=="/"){let S=c.replace(/^\//,"").split("/");p="/"+f.replace(/^\//,"").split("/").slice(S.length).join("/")}let g=n&&n.state.matches.length?n.state.matches.map(S=>Object.assign(S,{route:n.manifest[S.route.id]||S.route})):Bm(t,{pathname:p});ot(l||g!=null,`No routes matched location "${h.pathname}${h.search}${h.hash}" `),ot(g==null||g[g.length-1].route.element!==void 0||g[g.length-1].route.Component!==void 0||g[g.length-1].route.lazy!==void 0,`Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let y=rw(g&&g.map(S=>Object.assign({},S,{params:Object.assign({},o,S.params),pathname:vt([c,r.encodeLocation?r.encodeLocation(S.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?c:vt([c,r.encodeLocation?r.encodeLocation(S.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:S.pathnameBase])})),s,n);return e&&y?m.createElement(Xr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...h},navigationType:"POP"}},y):y}function Q1(){let t=cw(),e=M1(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:r},i={padding:"2px 4px",backgroundColor:r},o=null;return console.error("Error handled by React Router default ErrorBoundary:",t),o=m.createElement(m.Fragment,null,m.createElement("p",null,"💿 Hey developer 👋"),m.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",m.createElement("code",{style:i},"ErrorBoundary")," or"," ",m.createElement("code",{style:i},"errorElement")," prop on your route.")),m.createElement(m.Fragment,null,m.createElement("h2",null,"Unexpected Application Error!"),m.createElement("h3",{style:{fontStyle:"italic"}},e),n?m.createElement("pre",{style:s},n):null,o)}var ew=m.createElement(Q1,null),rg=class extends m.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){this.props.onError?this.props.onError(t,e):console.error("React Router caught the following error during render",t)}render(){let t=this.state.error;if(this.context&&typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){const n=Z1(t.digest);n&&(t=n)}let e=t!==void 0?m.createElement(St.Provider,{value:this.props.routeContext},m.createElement(mu.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?m.createElement(tw,{error:t},e):e}};rg.contextType=Ym;var Ga=new WeakMap;function tw({children:t,error:e}){let{basename:n,navigator:r}=m.useContext(et);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let s=G1(e.digest);if(s){let i=Ga.get(e);if(i)throw i;let o=Zm(s.location,n),a=o.absoluteURL||o.to;if(pu(s.location,a,fu(r),"allow-explicit"),B1(a))throw new Error("Invalid redirect location");if(Gm&&!Ga.get(e))if(o.isExternal||s.reloadDocument)window.location.href=a;else{const c=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(o.to,{replace:s.replace}));throw Ga.set(e,c),c}return m.createElement("meta",{httpEquiv:"refresh",content:`0;url=${a}`})}}return t}function nw({routeContext:t,match:e,children:n}){let r=m.useContext(Yr);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),m.createElement(St.Provider,{value:t},n)}function rw(t,e=[],n){let r=n==null?void 0:n.state;if(t==null){if(!r)return null;if(r.errors)t=r.matches;else if(e.length===0&&!r.initialized&&r.matches.length>0)t=r.matches;else return null}let s=t,i=r==null?void 0:r.errors;if(i!=null){let u=s.findIndex(h=>h.route.id&&(i==null?void 0:i[h.route.id])!==void 0);ge(u>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),s=s.slice(0,Math.min(s.length,u+1))}let o=!1,a=-1;if(n&&r){o=r.renderFallback;for(let u=0;u<s.length;u++){let h=s[u];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(a=u),h.route.id){let{loaderData:f,errors:p}=r,g=h.route.loader&&!f.hasOwnProperty(h.route.id)&&(!p||p[h.route.id]===void 0);if(h.route.lazy||g){n.isStatic&&(o=!0),a>=0?s=s.slice(0,a+1):s=[s[0]];break}}}}let c=n==null?void 0:n.onError,l=r&&c?(u,h)=>{var f,p;c(u,{location:r.location,params:((p=(f=r.matches)==null?void 0:f[0])==null?void 0:p.params)??{},pattern:F1(r.matches),errorInfo:h})}:void 0;return s.reduceRight((u,h,f)=>{let p,g=!1,y=null,v=null;r&&(p=i&&h.route.id?i[h.route.id]:void 0,y=h.route.errorElement||ew,o&&(a<0&&f===0?(sg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),g=!0,v=null):a===f&&(g=!0,v=h.route.hydrateFallbackElement||null)));let S=e.concat(s.slice(0,f+1)),b=()=>{let x;return p?x=y:g?x=v:h.route.Component?x=m.createElement(h.route.Component,null):h.route.element?x=h.route.element:x=u,m.createElement(nw,{match:h,routeContext:{outlet:u,matches:S,isDataRoute:r!=null},children:x})};return r&&(h.route.ErrorBoundary||h.route.errorElement||f===0)?m.createElement(rg,{location:r.location,revalidation:r.revalidation,component:y,error:p,children:b(),routeContext:{outlet:null,matches:S,isDataRoute:!0},onError:l}):b()},null)}function gu(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function sw(t){let e=m.useContext(Yr);return ge(e,gu(t)),e}function iw(t){let e=m.useContext(ha);return ge(e,gu(t)),e}function ow(t){let e=m.useContext(St);return ge(e,gu(t)),e}function yu(t){let e=ow(t),n=e.matches[e.matches.length-1];return ge(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function aw(){return yu("useRouteId")}function cw(){var r;let t=m.useContext(mu),e=iw("useRouteError"),n=yu("useRouteError");return t!==void 0?t:(r=e.errors)==null?void 0:r[n]}function lw(){let{router:t}=sw("useNavigate"),e=yu("useNavigate"),n=m.useRef(!1);return tg(()=>{n.current=!0}),m.useCallback(async(s,i={})=>{ot(n.current,eg),n.current&&(typeof s=="number"?await t.navigate(s):await t.navigate(s,{fromRouteId:e,...i}))},[t,e])}var Bd={};function sg(t,e,n){!e&&!Bd[t]&&(Bd[t]=!0,ot(!1,n))}m.memo(uw);function uw({routes:t,manifest:e,future:n,state:r,isStatic:s,onError:i}){return ng(t,void 0,{manifest:e,state:r,isStatic:s,onError:i})}function tM({to:t,replace:e,state:n,relative:r}){ge(Qr(),"<Navigate> may be used only in the context of a <Router> component.");let{static:s,navigator:i}=m.useContext(et);ot(!s,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:o}=m.useContext(St),{pathname:a}=at(),c=fa(),l=da(t,hu(o),a,r==="path");pu(typeof t=="string"?t:Qn(t),i.createHref(l),fu(i),"reject");let u=JSON.stringify(l);return m.useEffect(()=>{c(JSON.parse(u),{replace:e,state:n,relative:r})},[c,u,r,e,n]),null}function dw(t){ge(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function hw({basename:t="/",children:e=null,location:n,navigationType:r="POP",navigator:s,static:i=!1,useTransitions:o}){ge(!Qr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let a=t.replace(/^\/*/,"/"),c=m.useMemo(()=>({basename:a,navigator:s,static:i,useTransitions:o,future:{}}),[a,s,i,o]);typeof n=="string"&&(n=Jr(n));let{pathname:l="/",search:u="",hash:h="",state:f=null,key:p="default",mask:g}=n,y=m.useMemo(()=>{let v=Zt(l,a);return v==null?null:{location:{pathname:v,search:u,hash:h,state:f,key:p,mask:g},navigationType:r}},[a,l,u,h,f,p,r,g]);return ot(y!=null,`<Router basename="${a}"> is not able to match the URL "${l}${u}${h}" because it does not start with the basename, so the <Router> won't render anything.`),y==null?null:m.createElement(et.Provider,{value:c},m.createElement(Xr.Provider,{children:e,value:y}))}function nM({children:t,location:e}){return X1(ol(t),e)}function ol(t,e=[]){let n=[];return m.Children.forEach(t,(r,s)=>{if(!m.isValidElement(r))return;let i=[...e,s];if(r.type===m.Fragment){n.push.apply(n,ol(r.props.children,i));return}ge(r.type===dw,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ge(!r.props.index||!r.props.children,"An index route cannot have child routes.");let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ol(r.props.children,i)),n.push(o)}),n}var io="get",oo="application/x-www-form-urlencoded";function pa(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function fw(t){return pa(t)&&t.tagName.toLowerCase()==="button"}function pw(t){return pa(t)&&t.tagName.toLowerCase()==="form"}function mw(t){return pa(t)&&t.tagName.toLowerCase()==="input"}function gw(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function yw(t,e){return t.button===0&&(!e||e==="_self")&&!gw(t)}function al(t=""){return new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,n)=>{let r=t[n];return e.concat(Array.isArray(r)?r.map(s=>[n,s]):[[n,r]])},[]))}function vw(t,e){let n=al(t);return e&&e.forEach((r,s)=>{n.has(s)||e.getAll(s).forEach(i=>{n.append(s,i)})}),n}var Vi=null;function bw(){if(Vi===null)try{new FormData(document.createElement("form"),0),Vi=!1}catch{Vi=!0}return Vi}var xw=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Za(t){return t!=null&&!xw.has(t)?(ot(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${oo}"`),null):t}function ww(t,e){let n,r,s,i,o;if(pw(t)){let a=t.getAttribute("action");r=a?Zt(a,e):null,n=t.getAttribute("method")||io,s=Za(t.getAttribute("enctype"))||oo,i=new FormData(t)}else if(fw(t)||mw(t)&&(t.type==="submit"||t.type==="image")){let a=t.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=t.getAttribute("formaction")||a.getAttribute("action");if(r=c?Zt(c,e):null,n=t.getAttribute("formmethod")||a.getAttribute("method")||io,s=Za(t.getAttribute("formenctype"))||Za(a.getAttribute("enctype"))||oo,i=new FormData(a,t),!bw()){let{name:l,type:u,value:h}=t;if(u==="image"){let f=l?`${l}.`:"";i.append(`${f}x`,"0"),i.append(`${f}y`,"0")}else l&&i.append(l,h)}}else{if(pa(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=io,r=null,s=oo,o=t}return i&&s==="text/plain"&&(o=i,i=void 0),{action:r,method:n.toLowerCase(),encType:s,formData:i,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function vu(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ig(t,e,n,r){let s=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return n?s.pathname.endsWith("/")?s.pathname=`${s.pathname}_.${r}`:s.pathname=`${s.pathname}.${r}`:s.pathname==="/"?s.pathname=`_root.${r}`:e&&Zt(s.pathname,e)==="/"?s.pathname=`${Mr(e)}/_root.${r}`:s.pathname=`${Mr(s.pathname)}.${r}`,s}async function kw(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Sw(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function Ew(t,e,n){let r=await Promise.all(t.map(async s=>{let i=e.routes[s.route.id];if(i){let o=await kw(i,n);return o.links?o.links():[]}return[]}));return Rw(r.flat(1).filter(Sw).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function Hd(t,e,n,r,s,i){let o=(c,l)=>n[l]?c.route.id!==n[l].route.id:!0,a=(c,l)=>{var u;return n[l].pathname!==c.pathname||((u=n[l].route.path)==null?void 0:u.endsWith("*"))&&n[l].params["*"]!==c.params["*"]};return i==="assets"?e.filter((c,l)=>o(c,l)||a(c,l)):i==="data"?e.filter((c,l)=>{var h;let u=r.routes[c.route.id];if(!u||!u.hasLoader)return!1;if(o(c,l)||a(c,l))return!0;if(c.route.shouldRevalidate){let f=c.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:((h=n[0])==null?void 0:h.params)||{},nextUrl:new URL(t,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof f=="boolean")return f}return!0}):[]}function _w(t,e,{includeHydrateFallback:n}={}){return Tw(t.map(r=>{let s=e.routes[r.route.id];if(!s)return[];let i=[s.module];return s.clientActionModule&&(i=i.concat(s.clientActionModule)),s.clientLoaderModule&&(i=i.concat(s.clientLoaderModule)),n&&s.hydrateFallbackModule&&(i=i.concat(s.hydrateFallbackModule)),s.imports&&(i=i.concat(s.imports)),i}).flat(1))}function Tw(t){return[...new Set(t)]}function Cw(t){let e={},n=Object.keys(t).sort();for(let r of n)e[r]=t[r];return e}function Rw(t,e){let n=new Set;return new Set(e),t.reduce((r,s)=>{let i=JSON.stringify(Cw(s));return n.has(i)||(n.add(i),r.push({key:i,link:s})),r},[])}function bu(){let t=m.useContext(Yr);return vu(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function Aw(){let t=m.useContext(ha);return vu(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var xu=m.createContext(void 0);xu.displayName="FrameworkContext";function ma(){let t=m.useContext(xu);return vu(t,"You must render this element inside a <HydratedRouter> element"),t}function Pw(t,e){let n=m.useContext(xu),[r,s]=m.useState(!1),[i,o]=m.useState(!1),{onFocus:a,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:h}=e,f=m.useRef(null);m.useEffect(()=>{if(t==="render"&&o(!0),t==="viewport"){let y=S=>{S.forEach(b=>{o(b.isIntersecting)})},v=new IntersectionObserver(y,{threshold:.5});return f.current&&v.observe(f.current),()=>{v.disconnect()}}},[t]),m.useEffect(()=>{if(r){let y=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(y)}}},[r]);let p=()=>{s(!0)},g=()=>{s(!1),o(!1)};return n?t!=="intent"?[i,f,{}]:[i,f,{onFocus:is(a,p),onBlur:is(c,g),onMouseEnter:is(l,p),onMouseLeave:is(u,g),onTouchStart:is(h,p)}]:[!1,f,{}]}function is(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function Iw({page:t,...e}){let n=H1(),{nonce:r}=ma(),{router:s}=bu(),i=m.useMemo(()=>Bm(s.routes,t,s.basename),[s.routes,t,s.basename]);return i?(e.nonce==null&&r&&(e={...e,nonce:r}),n?m.createElement(Nw,{page:t,matches:i,...e}):m.createElement(Lw,{page:t,matches:i,...e})):null}function Ow(t){let{manifest:e,routeModules:n}=ma(),[r,s]=m.useState([]);return m.useEffect(()=>{let i=!1;return Ew(t,e,n).then(o=>{i||s(o)}),()=>{i=!0}},[t,e,n]),r}function Nw({page:t,matches:e,...n}){let r=at(),{future:s}=ma(),{basename:i}=bu(),o=m.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let a=ig(t,i,s.v8_trailingSlashAwareDataRequests,"rsc"),c=!1,l=[];for(let u of e)typeof u.route.shouldRevalidate=="function"?c=!0:l.push(u.route.id);return c&&l.length>0&&a.searchParams.set("_routes",l.join(",")),[a.pathname+a.search]},[i,s.v8_trailingSlashAwareDataRequests,t,r,e]);return m.createElement(m.Fragment,null,o.map(a=>m.createElement("link",{key:a,rel:"prefetch",as:"fetch",href:a,...n})))}function Lw({page:t,matches:e,...n}){let r=at(),{future:s,manifest:i,routeModules:o}=ma(),{basename:a}=bu(),{loaderData:c,matches:l}=Aw(),u=m.useMemo(()=>Hd(t,e,l,i,r,"data"),[t,e,l,i,r]),h=m.useMemo(()=>Hd(t,e,l,i,r,"assets"),[t,e,l,i,r]),f=m.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let y=new Set,v=!1;if(e.forEach(b=>{var w;let x=i.routes[b.route.id];!x||!x.hasLoader||(!u.some(E=>E.route.id===b.route.id)&&b.route.id in c&&((w=o[b.route.id])!=null&&w.shouldRevalidate)||x.hasClientLoader?v=!0:y.add(b.route.id))}),y.size===0)return[];let S=ig(t,a,s.v8_trailingSlashAwareDataRequests,"data");return v&&y.size>0&&S.searchParams.set("_routes",e.filter(b=>y.has(b.route.id)).map(b=>b.route.id).join(",")),[S.pathname+S.search]},[a,s.v8_trailingSlashAwareDataRequests,c,r,i,u,e,t,o]),p=m.useMemo(()=>_w(h,i),[h,i]),g=Ow(h);return m.createElement(m.Fragment,null,f.map(y=>m.createElement("link",{key:y,rel:"prefetch",as:"fetch",href:y,...n})),p.map(y=>m.createElement("link",{key:y,rel:"modulepreload",href:y,...n})),g.map(({key:y,link:v})=>m.createElement("link",{key:y,nonce:n.nonce,...v,crossOrigin:v.crossOrigin??n.crossOrigin})))}function jw(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var Dw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Dw&&(window.__reactRouterVersion="7.18.5")}catch{}function rM({basename:t,children:e,useTransitions:n,window:r}){let s=m.useRef();s.current==null&&(s.current=p1({window:r,v5Compat:!0}));let i=s.current,[o,a]=m.useState({action:i.action,location:i.location}),c=m.useCallback(l=>{n===!1?a(l):m.startTransition(()=>a(l))},[n]);return m.useLayoutEffect(()=>i.listen(c),[i,c]),m.createElement(hw,{basename:t,children:e,location:o.location,navigationType:o.action,navigator:i,useTransitions:n})}var ct=m.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:s,reloadDocument:i,replace:o,mask:a,state:c,target:l,to:u,preventScrollReset:h,viewTransition:f,defaultShouldRevalidate:p,...g},y){let{basename:v,navigator:S,useTransitions:b}=m.useContext(et),x=typeof u=="string"&&du.test(u),w=Zm(u,v);u=w.to;let E=J1(u,{relative:s}),_=at(),C=null;if(a){let oe=da(a,[],_.mask?_.mask.pathname:"/",!0);v!=="/"&&(oe.pathname=oe.pathname==="/"?v:vt([v,oe.pathname])),C=S.createHref(oe)}let[R,O,$]=Pw(r,g),B=Vw(u,{replace:o,mask:a,state:c,target:l,preventScrollReset:h,relative:s,viewTransition:f,defaultShouldRevalidate:p,useTransitions:b});function q(oe){e&&e(oe),oe.defaultPrevented||B(oe)}let H=!(w.isExternal||i),ee=m.createElement("a",{...g,...$,href:(H?C:void 0)||w.absoluteURL||E,onClick:H?q:e,ref:jw(y,O),target:l,"data-discover":!x&&n==="render"?"true":void 0});return R&&!x?m.createElement(m.Fragment,null,ee,m.createElement(Iw,{page:E})):ee});ct.displayName="Link";var Mw=m.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:s=!1,style:i,to:o,viewTransition:a,children:c,...l},u){let h=mi(o,{relative:l.relative}),f=at(),p=m.useContext(ha),{navigator:g,basename:y}=m.useContext(et),v=p!=null&&Ww(h)&&a===!0,S=g.encodeLocation?g.encodeLocation(h).pathname:h.pathname,b=f.pathname,x=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;n||(b=b.toLowerCase(),x=x?x.toLowerCase():null,S=S.toLowerCase()),x&&y&&(x=Zt(x,y)||x);const w=S!=="/"&&S.endsWith("/")?S.length-1:S.length;let E=b===S||!s&&b.startsWith(S)&&b.charAt(w)==="/",_=x!=null&&(x===S||!s&&x.startsWith(S)&&x.charAt(S.length)==="/"),C={isActive:E,isPending:_,isTransitioning:v},R=E?e:void 0,O;typeof r=="function"?O=r(C):O=[r,E?"active":null,_?"pending":null,v?"transitioning":null].filter(Boolean).join(" ");let $=typeof i=="function"?i(C):i;return m.createElement(ct,{...l,"aria-current":R,className:O,ref:u,style:$,to:o,viewTransition:a},typeof c=="function"?c(C):c)});Mw.displayName="NavLink";var Fw=m.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:s,state:i,method:o=io,action:a,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:h,defaultShouldRevalidate:f,...p},g)=>{let{useTransitions:y}=m.useContext(et),v=Hw(),S=zw(a,{relative:l}),b=o.toLowerCase()==="get"?"get":"post",x=typeof a=="string"&&du.test(a),w=E=>{if(c&&c(E),E.defaultPrevented)return;E.preventDefault();let _=E.nativeEvent.submitter,C=(_==null?void 0:_.getAttribute("formmethod"))||o,R=()=>v(_||E.currentTarget,{fetcherKey:e,method:C,navigate:n,replace:s,state:i,relative:l,preventScrollReset:u,viewTransition:h,defaultShouldRevalidate:f});y&&n!==!1?m.startTransition(()=>R()):R()};return m.createElement("form",{ref:g,method:b,action:S,onSubmit:r?c:w,...p,"data-discover":!x&&t==="render"?"true":void 0})});Fw.displayName="Form";function $w(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function og(t){let e=m.useContext(Yr);return ge(e,$w(t)),e}function Vw(t,{target:e,replace:n,mask:r,state:s,preventScrollReset:i,relative:o,viewTransition:a,defaultShouldRevalidate:c,useTransitions:l}={}){let u=fa(),h=at(),f=mi(t,{relative:o});return m.useCallback(p=>{if(yw(p,e)){p.preventDefault();let g=n!==void 0?n:Qn(h)===Qn(f),y=()=>u(t,{replace:g,mask:r,state:s,preventScrollReset:i,relative:o,viewTransition:a,defaultShouldRevalidate:c});l?m.startTransition(()=>y()):y()}},[h,u,f,n,r,s,e,t,i,o,a,c,l])}function sM(t){ot(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let e=m.useRef(al(t)),n=m.useRef(!1),r=at(),s=m.useMemo(()=>vw(r.search,n.current?null:e.current),[r.search]),i=fa(),o=m.useCallback((a,c)=>{const l=al(typeof a=="function"?a(new URLSearchParams(s)):a);n.current=!0,i("?"+l,c)},[i,s]);return[s,o]}var Uw=0,Bw=()=>`__${String(++Uw)}__`;function Hw(){let{router:t}=og("useSubmit"),{basename:e}=m.useContext(et),n=aw(),r=t.fetch,s=t.navigate;return m.useCallback(async(i,o={})=>{let{action:a,method:c,encType:l,formData:u,body:h}=ww(i,e);if(o.navigate===!1){let f=o.fetcherKey||Bw();await r(f,n,o.action||a,{defaultShouldRevalidate:o.defaultShouldRevalidate,preventScrollReset:o.preventScrollReset,formData:u,body:h,formMethod:o.method||c,formEncType:o.encType||l,flushSync:o.flushSync})}else await s(o.action||a,{defaultShouldRevalidate:o.defaultShouldRevalidate,preventScrollReset:o.preventScrollReset,formData:u,body:h,formMethod:o.method||c,formEncType:o.encType||l,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,s,e,n])}function zw(t,{relative:e}={}){let{basename:n}=m.useContext(et),r=m.useContext(St);ge(r,"useFormAction must be used inside a RouteContext");let[s]=r.matches.slice(-1),i={...mi(t||".",{relative:e})},o=at();if(t==null){i.search=o.search;let a=new URLSearchParams(i.search),c=a.getAll("index");if(c.some(u=>u==="")){a.delete("index"),c.filter(h=>h).forEach(h=>a.append("index",h));let u=a.toString();i.search=u?`?${u}`:""}}return(!t||t===".")&&s.route.index&&(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(i.pathname=i.pathname==="/"?n:vt([n,i.pathname])),Qn(i)}function Ww(t,{relative:e}={}){let n=m.useContext(Xm);ge(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=og("useViewTransitionState"),s=mi(t,{relative:e});if(!n.isTransitioning)return!1;let i=Zt(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Zt(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Co(s.pathname,o)!=null||Co(s.pathname,i)!=null}const wu=m.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),ga=m.createContext({}),ya=m.createContext(null),va=typeof document<"u",gi=va?m.useLayoutEffect:m.useEffect,ag=m.createContext({strict:!1}),ku=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),qw="framerAppearId",cg="data-"+ku(qw);function Kw(t,e,n,r){const{visualElement:s}=m.useContext(ga),i=m.useContext(ag),o=m.useContext(ya),a=m.useContext(wu).reducedMotion,c=m.useRef();r=r||i.renderer,!c.current&&r&&(c.current=r(t,{visualState:e,parent:s,props:n,presenceContext:o,blockInitialAnimation:o?o.initial===!1:!1,reducedMotionConfig:a}));const l=c.current;m.useInsertionEffect(()=>{l&&l.update(n,o)});const u=m.useRef(!!(n[cg]&&!window.HandoffComplete));return gi(()=>{l&&(l.render(),u.current&&l.animationState&&l.animationState.animateChanges())}),m.useEffect(()=>{l&&(l.updateFeatures(),!u.current&&l.animationState&&l.animationState.animateChanges(),u.current&&(u.current=!1,window.HandoffComplete=!0))}),l}function vr(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function Gw(t,e,n){return m.useCallback(r=>{r&&t.mount&&t.mount(r),e&&(r?e.mount(r):e.unmount()),n&&(typeof n=="function"?n(r):vr(n)&&(n.current=r))},[e])}function Hs(t){return typeof t=="string"||Array.isArray(t)}function ba(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const Su=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Eu=["initial",...Su];function xa(t){return ba(t.animate)||Eu.some(e=>Hs(t[e]))}function lg(t){return!!(xa(t)||t.variants)}function Zw(t,e){if(xa(t)){const{initial:n,animate:r}=t;return{initial:n===!1||Hs(n)?n:void 0,animate:Hs(r)?r:void 0}}return t.inherit!==!1?e:{}}function Jw(t){const{initial:e,animate:n}=Zw(t,m.useContext(ga));return m.useMemo(()=>({initial:e,animate:n}),[zd(e),zd(n)])}function zd(t){return Array.isArray(t)?t.join(" "):t}const Wd={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},zs={};for(const t in Wd)zs[t]={isEnabled:e=>Wd[t].some(n=>!!e[n])};function Yw(t){for(const e in t)zs[e]={...zs[e],...t[e]}}const _u=m.createContext({}),ug=m.createContext({}),Xw=Symbol.for("motionComponentSymbol");function Qw({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:r,Component:s}){t&&Yw(t);function i(a,c){let l;const u={...m.useContext(wu),...a,layoutId:ek(a)},{isStatic:h}=u,f=Jw(a),p=r(a,h);if(!h&&va){f.visualElement=Kw(s,p,u,e);const g=m.useContext(ug),y=m.useContext(ag).strict;f.visualElement&&(l=f.visualElement.loadFeatures(u,y,t,g))}return m.createElement(ga.Provider,{value:f},l&&f.visualElement?m.createElement(l,{visualElement:f.visualElement,...u}):null,n(s,a,Gw(p,f.visualElement,c),p,h,f.visualElement))}const o=m.forwardRef(i);return o[Xw]=s,o}function ek({layoutId:t}){const e=m.useContext(_u).id;return e&&t!==void 0?e+"-"+t:t}function tk(t){function e(r,s={}){return Qw(t(r,s))}if(typeof Proxy>"u")return e;const n=new Map;return new Proxy(e,{get:(r,s)=>(n.has(s)||n.set(s,e(s)),n.get(s))})}const nk=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Tu(t){return typeof t!="string"||t.includes("-")?!1:!!(nk.indexOf(t)>-1||/[A-Z]/.test(t))}const Ro={};function rk(t){Object.assign(Ro,t)}const yi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],or=new Set(yi);function dg(t,{layout:e,layoutId:n}){return or.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Ro[t]||t==="opacity")}const Ze=t=>!!(t&&t.getVelocity),sk={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},ik=yi.length;function ok(t,{enableHardwareAcceleration:e=!0,allowTransformNone:n=!0},r,s){let i="";for(let o=0;o<ik;o++){const a=yi[o];if(t[a]!==void 0){const c=sk[a]||a;i+=`${c}(${t[a]}) `}}return e&&!t.z&&(i+="translateZ(0)"),i=i.trim(),s?i=s(t,r?"":i):n&&r&&(i="none"),i}const hg=t=>e=>typeof e=="string"&&e.startsWith(t),fg=hg("--"),cl=hg("var(--"),ak=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,ck=(t,e)=>e&&typeof t=="number"?e.transform(t):t,Sn=(t,e,n)=>Math.min(Math.max(n,t),e),ar={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Rs={...ar,transform:t=>Sn(0,1,t)},Ui={...ar,default:1},As=t=>Math.round(t*1e5)/1e5,wa=/(-)?([\d]*\.?[\d])+/g,pg=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,lk=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function vi(t){return typeof t=="string"}const bi=t=>({test:e=>vi(e)&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),on=bi("deg"),At=bi("%"),z=bi("px"),uk=bi("vh"),dk=bi("vw"),qd={...At,parse:t=>At.parse(t)/100,transform:t=>At.transform(t*100)},Kd={...ar,transform:Math.round},mg={borderWidth:z,borderTopWidth:z,borderRightWidth:z,borderBottomWidth:z,borderLeftWidth:z,borderRadius:z,radius:z,borderTopLeftRadius:z,borderTopRightRadius:z,borderBottomRightRadius:z,borderBottomLeftRadius:z,width:z,maxWidth:z,height:z,maxHeight:z,size:z,top:z,right:z,bottom:z,left:z,padding:z,paddingTop:z,paddingRight:z,paddingBottom:z,paddingLeft:z,margin:z,marginTop:z,marginRight:z,marginBottom:z,marginLeft:z,rotate:on,rotateX:on,rotateY:on,rotateZ:on,scale:Ui,scaleX:Ui,scaleY:Ui,scaleZ:Ui,skew:on,skewX:on,skewY:on,distance:z,translateX:z,translateY:z,translateZ:z,x:z,y:z,z,perspective:z,transformPerspective:z,opacity:Rs,originX:qd,originY:qd,originZ:z,zIndex:Kd,fillOpacity:Rs,strokeOpacity:Rs,numOctaves:Kd};function Cu(t,e,n,r){const{style:s,vars:i,transform:o,transformOrigin:a}=t;let c=!1,l=!1,u=!0;for(const h in e){const f=e[h];if(fg(h)){i[h]=f;continue}const p=mg[h],g=ck(f,p);if(or.has(h)){if(c=!0,o[h]=g,!u)continue;f!==(p.default||0)&&(u=!1)}else h.startsWith("origin")?(l=!0,a[h]=g):s[h]=g}if(e.transform||(c||r?s.transform=ok(t.transform,n,u,r):s.transform&&(s.transform="none")),l){const{originX:h="50%",originY:f="50%",originZ:p=0}=a;s.transformOrigin=`${h} ${f} ${p}`}}const Ru=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function gg(t,e,n){for(const r in e)!Ze(e[r])&&!dg(r,n)&&(t[r]=e[r])}function hk({transformTemplate:t},e,n){return m.useMemo(()=>{const r=Ru();return Cu(r,e,{enableHardwareAcceleration:!n},t),Object.assign({},r.vars,r.style)},[e])}function fk(t,e,n){const r=t.style||{},s={};return gg(s,r,t),Object.assign(s,hk(t,e,n)),t.transformValues?t.transformValues(s):s}function pk(t,e,n){const r={},s=fk(t,e,n);return t.drag&&t.dragListener!==!1&&(r.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(r.tabIndex=0),r.style=s,r}const mk=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Ao(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||mk.has(t)}let yg=t=>!Ao(t);function gk(t){t&&(yg=e=>e.startsWith("on")?!Ao(e):t(e))}try{gk(require("@emotion/is-prop-valid").default)}catch{}function yk(t,e,n){const r={};for(const s in t)s==="values"&&typeof t.values=="object"||(yg(s)||n===!0&&Ao(s)||!e&&!Ao(s)||t.draggable&&s.startsWith("onDrag"))&&(r[s]=t[s]);return r}function Gd(t,e,n){return typeof t=="string"?t:z.transform(e+n*t)}function vk(t,e,n){const r=Gd(e,t.x,t.width),s=Gd(n,t.y,t.height);return`${r} ${s}`}const bk={offset:"stroke-dashoffset",array:"stroke-dasharray"},xk={offset:"strokeDashoffset",array:"strokeDasharray"};function wk(t,e,n=1,r=0,s=!0){t.pathLength=1;const i=s?bk:xk;t[i.offset]=z.transform(-r);const o=z.transform(e),a=z.transform(n);t[i.array]=`${o} ${a}`}function Au(t,{attrX:e,attrY:n,attrScale:r,originX:s,originY:i,pathLength:o,pathSpacing:a=1,pathOffset:c=0,...l},u,h,f){if(Cu(t,l,u,f),h){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:p,style:g,dimensions:y}=t;p.transform&&(y&&(g.transform=p.transform),delete p.transform),y&&(s!==void 0||i!==void 0||g.transform)&&(g.transformOrigin=vk(y,s!==void 0?s:.5,i!==void 0?i:.5)),e!==void 0&&(p.x=e),n!==void 0&&(p.y=n),r!==void 0&&(p.scale=r),o!==void 0&&wk(p,o,a,c,!1)}const vg=()=>({...Ru(),attrs:{}}),Pu=t=>typeof t=="string"&&t.toLowerCase()==="svg";function kk(t,e,n,r){const s=m.useMemo(()=>{const i=vg();return Au(i,e,{enableHardwareAcceleration:!1},Pu(r),t.transformTemplate),{...i.attrs,style:{...i.style}}},[e]);if(t.style){const i={};gg(i,t.style,t),s.style={...i,...s.style}}return s}function Sk(t=!1){return(n,r,s,{latestValues:i},o)=>{const c=(Tu(n)?kk:pk)(r,i,o,n),u={...yk(r,typeof n=="string",t),...c,ref:s},{children:h}=r,f=m.useMemo(()=>Ze(h)?h.get():h,[h]);return m.createElement(n,{...u,children:f})}}function bg(t,{style:e,vars:n},r,s){Object.assign(t.style,e,s&&s.getProjectionStyles(r));for(const i in n)t.style.setProperty(i,n[i])}const xg=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function wg(t,e,n,r){bg(t,e,void 0,r);for(const s in e.attrs)t.setAttribute(xg.has(s)?s:ku(s),e.attrs[s])}function Iu(t,e){const{style:n}=t,r={};for(const s in n)(Ze(n[s])||e.style&&Ze(e.style[s])||dg(s,t))&&(r[s]=n[s]);return r}function kg(t,e){const n=Iu(t,e);for(const r in t)if(Ze(t[r])||Ze(e[r])){const s=yi.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[s]=t[r]}return n}function Ou(t,e,n,r={},s={}){return typeof e=="function"&&(e=e(n!==void 0?n:t.custom,r,s)),typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"&&(e=e(n!==void 0?n:t.custom,r,s)),e}function xi(t){const e=m.useRef(null);return e.current===null&&(e.current=t()),e.current}const Po=t=>Array.isArray(t),Ek=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),_k=t=>Po(t)?t[t.length-1]||0:t;function ao(t){const e=Ze(t)?t.get():t;return Ek(e)?e.toValue():e}function Tk({scrapeMotionValuesFromProps:t,createRenderState:e,onMount:n},r,s,i){const o={latestValues:Ck(r,s,i,t),renderState:e()};return n&&(o.mount=a=>n(r,a,o)),o}const Sg=t=>(e,n)=>{const r=m.useContext(ga),s=m.useContext(ya),i=()=>Tk(t,e,r,s);return n?i():xi(i)};function Ck(t,e,n,r){const s={},i=r(t,{});for(const f in i)s[f]=ao(i[f]);let{initial:o,animate:a}=t;const c=xa(t),l=lg(t);e&&l&&!c&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const h=u?a:o;return h&&typeof h!="boolean"&&!ba(h)&&(Array.isArray(h)?h:[h]).forEach(p=>{const g=Ou(t,p);if(!g)return;const{transitionEnd:y,transition:v,...S}=g;for(const b in S){let x=S[b];if(Array.isArray(x)){const w=u?x.length-1:0;x=x[w]}x!==null&&(s[b]=x)}for(const b in y)s[b]=y[b]}),s}const Se=t=>t;class Zd{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const n=this.order.indexOf(e);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}function Rk(t){let e=new Zd,n=new Zd,r=0,s=!1,i=!1;const o=new WeakSet,a={schedule:(c,l=!1,u=!1)=>{const h=u&&s,f=h?e:n;return l&&o.add(c),f.add(c)&&h&&s&&(r=e.order.length),c},cancel:c=>{n.remove(c),o.delete(c)},process:c=>{if(s){i=!0;return}if(s=!0,[e,n]=[n,e],n.clear(),r=e.order.length,r)for(let l=0;l<r;l++){const u=e.order[l];u(c),o.has(u)&&(a.schedule(u),t())}s=!1,i&&(i=!1,a.process(c))}};return a}const Bi=["prepare","read","update","preRender","render","postRender"],Ak=40;function Pk(t,e){let n=!1,r=!0;const s={delta:0,timestamp:0,isProcessing:!1},i=Bi.reduce((h,f)=>(h[f]=Rk(()=>n=!0),h),{}),o=h=>i[h].process(s),a=()=>{const h=performance.now();n=!1,s.delta=r?1e3/60:Math.max(Math.min(h-s.timestamp,Ak),1),s.timestamp=h,s.isProcessing=!0,Bi.forEach(o),s.isProcessing=!1,n&&e&&(r=!1,t(a))},c=()=>{n=!0,r=!0,s.isProcessing||t(a)};return{schedule:Bi.reduce((h,f)=>{const p=i[f];return h[f]=(g,y=!1,v=!1)=>(n||c(),p.schedule(g,y,v)),h},{}),cancel:h=>Bi.forEach(f=>i[f].cancel(h)),state:s,steps:i}}const{schedule:ce,cancel:wt,state:Me,steps:Ja}=Pk(typeof requestAnimationFrame<"u"?requestAnimationFrame:Se,!0),Ik={useVisualState:Sg({scrapeMotionValuesFromProps:kg,createRenderState:vg,onMount:(t,e,{renderState:n,latestValues:r})=>{ce.read(()=>{try{n.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),ce.render(()=>{Au(n,r,{enableHardwareAcceleration:!1},Pu(e.tagName),t.transformTemplate),wg(e,n)})}})},Ok={useVisualState:Sg({scrapeMotionValuesFromProps:Iu,createRenderState:Ru})};function Nk(t,{forwardMotionProps:e=!1},n,r){return{...Tu(t)?Ik:Ok,preloadedFeatures:n,useRender:Sk(e),createVisualElement:r,Component:t}}function Bt(t,e,n,r={passive:!0}){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n)}const Eg=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1;function ka(t,e="page"){return{point:{x:t[e+"X"],y:t[e+"Y"]}}}const Lk=t=>e=>Eg(e)&&t(e,ka(e));function qt(t,e,n,r){return Bt(t,e,Lk(n),r)}const jk=(t,e)=>n=>e(t(n)),vn=(...t)=>t.reduce(jk);function _g(t){let e=null;return()=>{const n=()=>{e=null};return e===null?(e=t,n):!1}}const Jd=_g("dragHorizontal"),Yd=_g("dragVertical");function Tg(t){let e=!1;if(t==="y")e=Yd();else if(t==="x")e=Jd();else{const n=Jd(),r=Yd();n&&r?e=()=>{n(),r()}:(n&&n(),r&&r())}return e}function Cg(){const t=Tg(!0);return t?(t(),!1):!0}class Pn{constructor(e){this.isMounted=!1,this.node=e}update(){}}function Xd(t,e){const n="pointer"+(e?"enter":"leave"),r="onHover"+(e?"Start":"End"),s=(i,o)=>{if(i.pointerType==="touch"||Cg())return;const a=t.getProps();t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",e),a[r]&&ce.update(()=>a[r](i,o))};return qt(t.current,n,s,{passive:!t.getProps()[r]})}class Dk extends Pn{mount(){this.unmount=vn(Xd(this.node,!0),Xd(this.node,!1))}unmount(){}}class Mk extends Pn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=vn(Bt(this.node.current,"focus",()=>this.onFocus()),Bt(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const Rg=(t,e)=>e?t===e?!0:Rg(t,e.parentElement):!1;function Ya(t,e){if(!e)return;const n=new PointerEvent("pointer"+t);e(n,ka(n))}class Fk extends Pn{constructor(){super(...arguments),this.removeStartListeners=Se,this.removeEndListeners=Se,this.removeAccessibleListeners=Se,this.startPointerPress=(e,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),i=qt(window,"pointerup",(a,c)=>{if(!this.checkPressEnd())return;const{onTap:l,onTapCancel:u,globalTapTarget:h}=this.node.getProps();ce.update(()=>{!h&&!Rg(this.node.current,a.target)?u&&u(a,c):l&&l(a,c)})},{passive:!(r.onTap||r.onPointerUp)}),o=qt(window,"pointercancel",(a,c)=>this.cancelPress(a,c),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=vn(i,o),this.startPress(e,n)},this.startAccessiblePress=()=>{const e=i=>{if(i.key!=="Enter"||this.isPressing)return;const o=a=>{a.key!=="Enter"||!this.checkPressEnd()||Ya("up",(c,l)=>{const{onTap:u}=this.node.getProps();u&&ce.update(()=>u(c,l))})};this.removeEndListeners(),this.removeEndListeners=Bt(this.node.current,"keyup",o),Ya("down",(a,c)=>{this.startPress(a,c)})},n=Bt(this.node.current,"keydown",e),r=()=>{this.isPressing&&Ya("cancel",(i,o)=>this.cancelPress(i,o))},s=Bt(this.node.current,"blur",r);this.removeAccessibleListeners=vn(n,s)}}startPress(e,n){this.isPressing=!0;const{onTapStart:r,whileTap:s}=this.node.getProps();s&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&ce.update(()=>r(e,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Cg()}cancelPress(e,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&ce.update(()=>r(e,n))}mount(){const e=this.node.getProps(),n=qt(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),r=Bt(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=vn(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const ll=new WeakMap,Xa=new WeakMap,$k=t=>{const e=ll.get(t.target);e&&e(t)},Vk=t=>{t.forEach($k)};function Uk({root:t,...e}){const n=t||document;Xa.has(n)||Xa.set(n,{});const r=Xa.get(n),s=JSON.stringify(e);return r[s]||(r[s]=new IntersectionObserver(Vk,{root:t,...e})),r[s]}function Bk(t,e,n){const r=Uk(e);return ll.set(t,n),r.observe(t),()=>{ll.delete(t),r.unobserve(t)}}const Hk={some:0,all:1};class zk extends Pn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:r,amount:s="some",once:i}=e,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof s=="number"?s:Hk[s]},a=c=>{const{isIntersecting:l}=c;if(this.isInView===l||(this.isInView=l,i&&!l&&this.hasEnteredView))return;l&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",l);const{onViewportEnter:u,onViewportLeave:h}=this.node.getProps(),f=l?u:h;f&&f(c)};return Bk(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(Wk(e,n))&&this.startObserver()}unmount(){}}function Wk({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const qk={inView:{Feature:zk},tap:{Feature:Fk},focus:{Feature:Mk},hover:{Feature:Dk}};function Ag(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}function Kk(t){const e={};return t.values.forEach((n,r)=>e[r]=n.get()),e}function Gk(t){const e={};return t.values.forEach((n,r)=>e[r]=n.getVelocity()),e}function Sa(t,e,n){const r=t.getProps();return Ou(r,e,n!==void 0?n:r.custom,Kk(t),Gk(t))}let Zk=Se,Nu=Se;const Kn=t=>t*1e3,Kt=t=>t/1e3,Jk={current:!1},Pg=t=>Array.isArray(t)&&typeof t[0]=="number";function Ig(t){return!!(!t||typeof t=="string"&&Og[t]||Pg(t)||Array.isArray(t)&&t.every(Ig))}const ws=([t,e,n,r])=>`cubic-bezier(${t}, ${e}, ${n}, ${r})`,Og={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ws([0,.65,.55,1]),circOut:ws([.55,0,1,.45]),backIn:ws([.31,.01,.66,-.59]),backOut:ws([.33,1.53,.69,.99])};function Ng(t){if(t)return Pg(t)?ws(t):Array.isArray(t)?t.map(Ng):Og[t]}function Yk(t,e,n,{delay:r=0,duration:s,repeat:i=0,repeatType:o="loop",ease:a,times:c}={}){const l={[e]:n};c&&(l.offset=c);const u=Ng(a);return Array.isArray(u)&&(l.easing=u),t.animate(l,{delay:r,duration:s,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:i+1,direction:o==="reverse"?"alternate":"normal"})}function Xk(t,{repeat:e,repeatType:n="loop"}){const r=e&&n!=="loop"&&e%2===1?0:t.length-1;return t[r]}const Lg=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,Qk=1e-7,eS=12;function tS(t,e,n,r,s){let i,o,a=0;do o=e+(n-e)/2,i=Lg(o,r,s)-t,i>0?n=o:e=o;while(Math.abs(i)>Qk&&++a<eS);return o}function wi(t,e,n,r){if(t===e&&n===r)return Se;const s=i=>tS(i,0,1,t,n);return i=>i===0||i===1?i:Lg(s(i),e,r)}const nS=wi(.42,0,1,1),rS=wi(0,0,.58,1),jg=wi(.42,0,.58,1),sS=t=>Array.isArray(t)&&typeof t[0]!="number",Dg=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,Mg=t=>e=>1-t(1-e),Lu=t=>1-Math.sin(Math.acos(t)),Fg=Mg(Lu),iS=Dg(Lu),$g=wi(.33,1.53,.69,.99),ju=Mg($g),oS=Dg(ju),aS=t=>(t*=2)<1?.5*ju(t):.5*(2-Math.pow(2,-10*(t-1))),cS={linear:Se,easeIn:nS,easeInOut:jg,easeOut:rS,circIn:Lu,circInOut:iS,circOut:Fg,backIn:ju,backInOut:oS,backOut:$g,anticipate:aS},Qd=t=>{if(Array.isArray(t)){Nu(t.length===4);const[e,n,r,s]=t;return wi(e,n,r,s)}else if(typeof t=="string")return cS[t];return t},Du=(t,e)=>n=>!!(vi(n)&&lk.test(n)&&n.startsWith(t)||e&&Object.prototype.hasOwnProperty.call(n,e)),Vg=(t,e,n)=>r=>{if(!vi(r))return r;const[s,i,o,a]=r.match(wa);return{[t]:parseFloat(s),[e]:parseFloat(i),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},lS=t=>Sn(0,255,t),Qa={...ar,transform:t=>Math.round(lS(t))},Bn={test:Du("rgb","red"),parse:Vg("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:r=1})=>"rgba("+Qa.transform(t)+", "+Qa.transform(e)+", "+Qa.transform(n)+", "+As(Rs.transform(r))+")"};function uS(t){let e="",n="",r="",s="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),r=t.substring(5,7),s=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),r=t.substring(3,4),s=t.substring(4,5),e+=e,n+=n,r+=r,s+=s),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:s?parseInt(s,16)/255:1}}const ul={test:Du("#"),parse:uS,transform:Bn.transform},br={test:Du("hsl","hue"),parse:Vg("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:r=1})=>"hsla("+Math.round(t)+", "+At.transform(As(e))+", "+At.transform(As(n))+", "+As(Rs.transform(r))+")"},He={test:t=>Bn.test(t)||ul.test(t)||br.test(t),parse:t=>Bn.test(t)?Bn.parse(t):br.test(t)?br.parse(t):ul.parse(t),transform:t=>vi(t)?t:t.hasOwnProperty("red")?Bn.transform(t):br.transform(t)},ve=(t,e,n)=>-n*t+n*e+t;function ec(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function dS({hue:t,saturation:e,lightness:n,alpha:r}){t/=360,e/=100,n/=100;let s=0,i=0,o=0;if(!e)s=i=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,c=2*n-a;s=ec(c,a,t+1/3),i=ec(c,a,t),o=ec(c,a,t-1/3)}return{red:Math.round(s*255),green:Math.round(i*255),blue:Math.round(o*255),alpha:r}}const tc=(t,e,n)=>{const r=t*t;return Math.sqrt(Math.max(0,n*(e*e-r)+r))},hS=[ul,Bn,br],fS=t=>hS.find(e=>e.test(t));function eh(t){const e=fS(t);let n=e.parse(t);return e===br&&(n=dS(n)),n}const Ug=(t,e)=>{const n=eh(t),r=eh(e),s={...n};return i=>(s.red=tc(n.red,r.red,i),s.green=tc(n.green,r.green,i),s.blue=tc(n.blue,r.blue,i),s.alpha=ve(n.alpha,r.alpha,i),Bn.transform(s))};function pS(t){var e,n;return isNaN(t)&&vi(t)&&(((e=t.match(wa))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(pg))===null||n===void 0?void 0:n.length)||0)>0}const Bg={regex:ak,countKey:"Vars",token:"${v}",parse:Se},Hg={regex:pg,countKey:"Colors",token:"${c}",parse:He.parse},zg={regex:wa,countKey:"Numbers",token:"${n}",parse:ar.parse};function nc(t,{regex:e,countKey:n,token:r,parse:s}){const i=t.tokenised.match(e);i&&(t["num"+n]=i.length,t.tokenised=t.tokenised.replace(e,r),t.values.push(...i.map(s)))}function Io(t){const e=t.toString(),n={value:e,tokenised:e,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&nc(n,Bg),nc(n,Hg),nc(n,zg),n}function Wg(t){return Io(t).values}function qg(t){const{values:e,numColors:n,numVars:r,tokenised:s}=Io(t),i=e.length;return o=>{let a=s;for(let c=0;c<i;c++)c<r?a=a.replace(Bg.token,o[c]):c<r+n?a=a.replace(Hg.token,He.transform(o[c])):a=a.replace(zg.token,As(o[c]));return a}}const mS=t=>typeof t=="number"?0:t;function gS(t){const e=Wg(t);return qg(t)(e.map(mS))}const En={test:pS,parse:Wg,createTransformer:qg,getAnimatableNone:gS},Kg=(t,e)=>n=>`${n>0?e:t}`;function Gg(t,e){return typeof t=="number"?n=>ve(t,e,n):He.test(t)?Ug(t,e):t.startsWith("var(")?Kg(t,e):Jg(t,e)}const Zg=(t,e)=>{const n=[...t],r=n.length,s=t.map((i,o)=>Gg(i,e[o]));return i=>{for(let o=0;o<r;o++)n[o]=s[o](i);return n}},yS=(t,e)=>{const n={...t,...e},r={};for(const s in n)t[s]!==void 0&&e[s]!==void 0&&(r[s]=Gg(t[s],e[s]));return s=>{for(const i in r)n[i]=r[i](s);return n}},Jg=(t,e)=>{const n=En.createTransformer(e),r=Io(t),s=Io(e);return r.numVars===s.numVars&&r.numColors===s.numColors&&r.numNumbers>=s.numNumbers?vn(Zg(r.values,s.values),n):Kg(t,e)},Fr=(t,e,n)=>{const r=e-t;return r===0?1:(n-t)/r},th=(t,e)=>n=>ve(t,e,n);function vS(t){return typeof t=="number"?th:typeof t=="string"?He.test(t)?Ug:Jg:Array.isArray(t)?Zg:typeof t=="object"?yS:th}function bS(t,e,n){const r=[],s=n||vS(t[0]),i=t.length-1;for(let o=0;o<i;o++){let a=s(t[o],t[o+1]);if(e){const c=Array.isArray(e)?e[o]||Se:e;a=vn(c,a)}r.push(a)}return r}function Ea(t,e,{clamp:n=!0,ease:r,mixer:s}={}){const i=t.length;if(Nu(i===e.length),i===1)return()=>e[0];t[0]>t[i-1]&&(t=[...t].reverse(),e=[...e].reverse());const o=bS(e,r,s),a=o.length,c=l=>{let u=0;if(a>1)for(;u<t.length-2&&!(l<t[u+1]);u++);const h=Fr(t[u],t[u+1],l);return o[u](h)};return n?l=>c(Sn(t[0],t[i-1],l)):c}function xS(t,e){const n=t[t.length-1];for(let r=1;r<=e;r++){const s=Fr(0,e,r);t.push(ve(n,1,s))}}function Yg(t){const e=[0];return xS(e,t.length-1),e}function wS(t,e){return t.map(n=>n*e)}function kS(t,e){return t.map(()=>e||jg).splice(0,t.length-1)}function Oo({duration:t=300,keyframes:e,times:n,ease:r="easeInOut"}){const s=sS(r)?r.map(Qd):Qd(r),i={done:!1,value:e[0]},o=wS(n&&n.length===e.length?n:Yg(e),t),a=Ea(o,e,{ease:Array.isArray(s)?s:kS(e,s)});return{calculatedDuration:t,next:c=>(i.value=a(c),i.done=c>=t,i)}}function Mu(t,e){return e?t*(1e3/e):0}const SS=5;function Xg(t,e,n){const r=Math.max(e-SS,0);return Mu(n-t(r),e-r)}const rc=.001,ES=.01,_S=10,TS=.05,CS=1;function RS({duration:t=800,bounce:e=.25,velocity:n=0,mass:r=1}){let s,i,o=1-e;o=Sn(TS,CS,o),t=Sn(ES,_S,Kt(t)),o<1?(s=l=>{const u=l*o,h=u*t,f=u-n,p=dl(l,o),g=Math.exp(-h);return rc-f/p*g},i=l=>{const h=l*o*t,f=h*n+n,p=Math.pow(o,2)*Math.pow(l,2)*t,g=Math.exp(-h),y=dl(Math.pow(l,2),o);return(-s(l)+rc>0?-1:1)*((f-p)*g)/y}):(s=l=>{const u=Math.exp(-l*t),h=(l-n)*t+1;return-rc+u*h},i=l=>{const u=Math.exp(-l*t),h=(n-l)*(t*t);return u*h});const a=5/t,c=PS(s,i,a);if(t=Kn(t),isNaN(c))return{stiffness:100,damping:10,duration:t};{const l=Math.pow(c,2)*r;return{stiffness:l,damping:o*2*Math.sqrt(r*l),duration:t}}}const AS=12;function PS(t,e,n){let r=n;for(let s=1;s<AS;s++)r=r-t(r)/e(r);return r}function dl(t,e){return t*Math.sqrt(1-e*e)}const IS=["duration","bounce"],OS=["stiffness","damping","mass"];function nh(t,e){return e.some(n=>t[n]!==void 0)}function NS(t){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!nh(t,OS)&&nh(t,IS)){const n=RS(t);e={...e,...n,mass:1},e.isResolvedFromDuration=!0}return e}function Qg({keyframes:t,restDelta:e,restSpeed:n,...r}){const s=t[0],i=t[t.length-1],o={done:!1,value:s},{stiffness:a,damping:c,mass:l,duration:u,velocity:h,isResolvedFromDuration:f}=NS({...r,velocity:-Kt(r.velocity||0)}),p=h||0,g=c/(2*Math.sqrt(a*l)),y=i-s,v=Kt(Math.sqrt(a/l)),S=Math.abs(y)<5;n||(n=S?.01:2),e||(e=S?.005:.5);let b;if(g<1){const x=dl(v,g);b=w=>{const E=Math.exp(-g*v*w);return i-E*((p+g*v*y)/x*Math.sin(x*w)+y*Math.cos(x*w))}}else if(g===1)b=x=>i-Math.exp(-v*x)*(y+(p+v*y)*x);else{const x=v*Math.sqrt(g*g-1);b=w=>{const E=Math.exp(-g*v*w),_=Math.min(x*w,300);return i-E*((p+g*v*y)*Math.sinh(_)+x*y*Math.cosh(_))/x}}return{calculatedDuration:f&&u||null,next:x=>{const w=b(x);if(f)o.done=x>=u;else{let E=p;x!==0&&(g<1?E=Xg(b,x,w):E=0);const _=Math.abs(E)<=n,C=Math.abs(i-w)<=e;o.done=_&&C}return o.value=o.done?i:w,o}}}function rh({keyframes:t,velocity:e=0,power:n=.8,timeConstant:r=325,bounceDamping:s=10,bounceStiffness:i=500,modifyTarget:o,min:a,max:c,restDelta:l=.5,restSpeed:u}){const h=t[0],f={done:!1,value:h},p=R=>a!==void 0&&R<a||c!==void 0&&R>c,g=R=>a===void 0?c:c===void 0||Math.abs(a-R)<Math.abs(c-R)?a:c;let y=n*e;const v=h+y,S=o===void 0?v:o(v);S!==v&&(y=S-h);const b=R=>-y*Math.exp(-R/r),x=R=>S+b(R),w=R=>{const O=b(R),$=x(R);f.done=Math.abs(O)<=l,f.value=f.done?S:$};let E,_;const C=R=>{p(f.value)&&(E=R,_=Qg({keyframes:[f.value,g(f.value)],velocity:Xg(x,R,f.value),damping:s,stiffness:i,restDelta:l,restSpeed:u}))};return C(0),{calculatedDuration:null,next:R=>{let O=!1;return!_&&E===void 0&&(O=!0,w(R),C(R)),E!==void 0&&R>E?_.next(R-E):(!O&&w(R),f)}}}const LS=t=>{const e=({timestamp:n})=>t(n);return{start:()=>ce.update(e,!0),stop:()=>wt(e),now:()=>Me.isProcessing?Me.timestamp:performance.now()}},sh=2e4;function ih(t){let e=0;const n=50;let r=t.next(e);for(;!r.done&&e<sh;)e+=n,r=t.next(e);return e>=sh?1/0:e}const jS={decay:rh,inertia:rh,tween:Oo,keyframes:Oo,spring:Qg};function No({autoplay:t=!0,delay:e=0,driver:n=LS,keyframes:r,type:s="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:a="loop",onPlay:c,onStop:l,onComplete:u,onUpdate:h,...f}){let p=1,g=!1,y,v;const S=()=>{v=new Promise(D=>{y=D})};S();let b;const x=jS[s]||Oo;let w;x!==Oo&&typeof r[0]!="number"&&(w=Ea([0,100],r,{clamp:!1}),r=[0,100]);const E=x({...f,keyframes:r});let _;a==="mirror"&&(_=x({...f,keyframes:[...r].reverse(),velocity:-(f.velocity||0)}));let C="idle",R=null,O=null,$=null;E.calculatedDuration===null&&i&&(E.calculatedDuration=ih(E));const{calculatedDuration:B}=E;let q=1/0,H=1/0;B!==null&&(q=B+o,H=q*(i+1)-o);let ee=0;const oe=D=>{if(O===null)return;p>0&&(O=Math.min(O,D)),p<0&&(O=Math.min(D-H/p,O)),R!==null?ee=R:ee=Math.round(D-O)*p;const de=ee-e*(p>=0?1:-1),we=p>=0?de<0:de>H;ee=Math.max(de,0),C==="finished"&&R===null&&(ee=H);let M=ee,Ee=E;if(i){const Je=Math.min(ee,H)/q;let J=Math.floor(Je),Ce=Je%1;!Ce&&Je>=1&&(Ce=1),Ce===1&&J--,J=Math.min(J,i+1),!!(J%2)&&(a==="reverse"?(Ce=1-Ce,o&&(Ce-=o/q)):a==="mirror"&&(Ee=_)),M=Sn(0,1,Ce)*q}const _e=we?{done:!1,value:r[0]}:Ee.next(M);w&&(_e.value=w(_e.value));let{done:Te}=_e;!we&&B!==null&&(Te=p>=0?ee>=H:ee<=0);const ke=R===null&&(C==="finished"||C==="running"&&Te);return h&&h(_e.value),ke&&le(),_e},te=()=>{b&&b.stop(),b=void 0},he=()=>{C="idle",te(),y(),S(),O=$=null},le=()=>{C="finished",u&&u(),te(),y()},U=()=>{if(g)return;b||(b=n(oe));const D=b.now();c&&c(),R!==null?O=D-R:(!O||C==="finished")&&(O=D),C==="finished"&&S(),$=O,R=null,C="running",b.start()};t&&U();const P={then(D,de){return v.then(D,de)},get time(){return Kt(ee)},set time(D){D=Kn(D),ee=D,R!==null||!b||p===0?R=D:O=b.now()-D/p},get duration(){const D=E.calculatedDuration===null?ih(E):E.calculatedDuration;return Kt(D)},get speed(){return p},set speed(D){D===p||!b||(p=D,P.time=Kt(ee))},get state(){return C},play:U,pause:()=>{C="paused",R=ee},stop:()=>{g=!0,C!=="idle"&&(C="idle",l&&l(),he())},cancel:()=>{$!==null&&oe($),he()},complete:()=>{C="finished"},sample:D=>(O=0,oe(D))};return P}function DS(t){let e;return()=>(e===void 0&&(e=t()),e)}const MS=DS(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),FS=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),Hi=10,$S=2e4,VS=(t,e)=>e.type==="spring"||t==="backgroundColor"||!Ig(e.ease);function US(t,e,{onUpdate:n,onComplete:r,...s}){if(!(MS()&&FS.has(e)&&!s.repeatDelay&&s.repeatType!=="mirror"&&s.damping!==0&&s.type!=="inertia"))return!1;let o=!1,a,c,l=!1;const u=()=>{c=new Promise(x=>{a=x})};u();let{keyframes:h,duration:f=300,ease:p,times:g}=s;if(VS(e,s)){const x=No({...s,repeat:0,delay:0});let w={done:!1,value:h[0]};const E=[];let _=0;for(;!w.done&&_<$S;)w=x.sample(_),E.push(w.value),_+=Hi;g=void 0,h=E,f=_-Hi,p="linear"}const y=Yk(t.owner.current,e,h,{...s,duration:f,ease:p,times:g}),v=()=>{l=!1,y.cancel()},S=()=>{l=!0,ce.update(v),a(),u()};return y.onfinish=()=>{l||(t.set(Xk(h,s)),r&&r(),S())},{then(x,w){return c.then(x,w)},attachTimeline(x){return y.timeline=x,y.onfinish=null,Se},get time(){return Kt(y.currentTime||0)},set time(x){y.currentTime=Kn(x)},get speed(){return y.playbackRate},set speed(x){y.playbackRate=x},get duration(){return Kt(f)},play:()=>{o||(y.play(),wt(v))},pause:()=>y.pause(),stop:()=>{if(o=!0,y.playState==="idle")return;const{currentTime:x}=y;if(x){const w=No({...s,autoplay:!1});t.setWithVelocity(w.sample(x-Hi).value,w.sample(x).value,Hi)}S()},complete:()=>{l||y.finish()},cancel:S}}function BS({keyframes:t,delay:e,onUpdate:n,onComplete:r}){const s=()=>(n&&n(t[t.length-1]),r&&r(),{time:0,speed:1,duration:0,play:Se,pause:Se,stop:Se,then:i=>(i(),Promise.resolve()),cancel:Se,complete:Se});return e?No({keyframes:[0,1],duration:0,delay:e,onComplete:s}):s()}const HS={type:"spring",stiffness:500,damping:25,restSpeed:10},zS=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),WS={type:"keyframes",duration:.8},qS={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},KS=(t,{keyframes:e})=>e.length>2?WS:or.has(t)?t.startsWith("scale")?zS(e[1]):HS:qS,hl=(t,e)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(En.test(e)||e==="0")&&!e.startsWith("url(")),GS=new Set(["brightness","contrast","saturate","opacity"]);function ZS(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[r]=n.match(wa)||[];if(!r)return t;const s=n.replace(r,"");let i=GS.has(e)?1:0;return r!==n&&(i*=100),e+"("+i+s+")"}const JS=/([a-z-]*)\(.*?\)/g,fl={...En,getAnimatableNone:t=>{const e=t.match(JS);return e?e.map(ZS).join(" "):t}},YS={...mg,color:He,backgroundColor:He,outlineColor:He,fill:He,stroke:He,borderColor:He,borderTopColor:He,borderRightColor:He,borderBottomColor:He,borderLeftColor:He,filter:fl,WebkitFilter:fl},Fu=t=>YS[t];function ey(t,e){let n=Fu(t);return n!==fl&&(n=En),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const ty=t=>/^0[^.\s]+$/.test(t);function XS(t){if(typeof t=="number")return t===0;if(t!==null)return t==="none"||t==="0"||ty(t)}function QS(t,e,n,r){const s=hl(e,n);let i;Array.isArray(n)?i=[...n]:i=[null,n];const o=r.from!==void 0?r.from:t.get();let a;const c=[];for(let l=0;l<i.length;l++)i[l]===null&&(i[l]=l===0?o:i[l-1]),XS(i[l])&&c.push(l),typeof i[l]=="string"&&i[l]!=="none"&&i[l]!=="0"&&(a=i[l]);if(s&&c.length&&a)for(let l=0;l<c.length;l++){const u=c[l];i[u]=ey(e,a)}return i}function eE({when:t,delay:e,delayChildren:n,staggerChildren:r,staggerDirection:s,repeat:i,repeatType:o,repeatDelay:a,from:c,elapsed:l,...u}){return!!Object.keys(u).length}function $u(t,e){return t[e]||t.default||t}const tE={skipAnimations:!1},Vu=(t,e,n,r={})=>s=>{const i=$u(r,t)||{},o=i.delay||r.delay||0;let{elapsed:a=0}=r;a=a-Kn(o);const c=QS(e,t,n,i),l=c[0],u=c[c.length-1],h=hl(t,l),f=hl(t,u);let p={keyframes:c,velocity:e.getVelocity(),ease:"easeOut",...i,delay:-a,onUpdate:g=>{e.set(g),i.onUpdate&&i.onUpdate(g)},onComplete:()=>{s(),i.onComplete&&i.onComplete()}};if(eE(i)||(p={...p,...KS(t,p)}),p.duration&&(p.duration=Kn(p.duration)),p.repeatDelay&&(p.repeatDelay=Kn(p.repeatDelay)),!h||!f||Jk.current||i.type===!1||tE.skipAnimations)return BS(p);if(!r.isHandoff&&e.owner&&e.owner.current instanceof HTMLElement&&!e.owner.getProps().onUpdate){const g=US(e,t,p);if(g)return g}return No(p)};function Lo(t){return!!(Ze(t)&&t.add)}const ny=t=>/^\-?\d*\.?\d+$/.test(t);function Uu(t,e){t.indexOf(e)===-1&&t.push(e)}function Bu(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class Hu{constructor(){this.subscriptions=[]}add(e){return Uu(this.subscriptions,e),()=>Bu(this.subscriptions,e)}notify(e,n,r){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](e,n,r);else for(let i=0;i<s;i++){const o=this.subscriptions[i];o&&o(e,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const nE=t=>!isNaN(parseFloat(t)),Ps={current:void 0};class rE{constructor(e,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,s=!0)=>{this.prev=this.current,this.current=r;const{delta:i,timestamp:o}=Me;this.lastUpdated!==o&&(this.timeDelta=i,this.lastUpdated=o,ce.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),s&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>ce.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=e,this.canTrackVelocity=nE(this.current),this.owner=n.owner}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new Hu);const r=this.events[e].add(n);return e==="change"?()=>{r(),ce.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,r){this.set(n),this.prev=e,this.timeDelta=r}jump(e){this.updateAndNotify(e),this.prev=e,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return Ps.current&&Ps.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Mu(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ft(t,e){return new rE(t,e)}const ry=t=>e=>e.test(t),sE={test:t=>t==="auto",parse:t=>t},sy=[ar,z,At,on,dk,uk,sE],os=t=>sy.find(ry(t)),iE=[...sy,He,En],oE=t=>iE.find(ry(t));function aE(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,ft(n))}function cE(t,e){const n=Sa(t,e);let{transitionEnd:r={},transition:s={},...i}=n?t.makeTargetAnimatable(n,!1):{};i={...i,...r};for(const o in i){const a=_k(i[o]);aE(t,o,a)}}function lE(t,e,n){var r,s;const i=Object.keys(e).filter(a=>!t.hasValue(a)),o=i.length;if(o)for(let a=0;a<o;a++){const c=i[a],l=e[c];let u=null;Array.isArray(l)&&(u=l[0]),u===null&&(u=(s=(r=n[c])!==null&&r!==void 0?r:t.readValue(c))!==null&&s!==void 0?s:e[c]),u!=null&&(typeof u=="string"&&(ny(u)||ty(u))?u=parseFloat(u):!oE(u)&&En.test(l)&&(u=ey(c,l)),t.addValue(c,ft(u,{owner:t})),n[c]===void 0&&(n[c]=u),u!==null&&t.setBaseTarget(c,u))}}function uE(t,e){return e?(e[t]||e.default||e).from:void 0}function dE(t,e,n){const r={};for(const s in t){const i=uE(s,e);if(i!==void 0)r[s]=i;else{const o=n.getValue(s);o&&(r[s]=o.get())}}return r}function hE({protectedKeys:t,needsAnimating:e},n){const r=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,r}function fE(t,e){const n=t.get();if(Array.isArray(e)){for(let r=0;r<e.length;r++)if(e[r]!==n)return!0}else return n!==e}function iy(t,e,{delay:n=0,transitionOverride:r,type:s}={}){let{transition:i=t.getDefaultTransition(),transitionEnd:o,...a}=t.makeTargetAnimatable(e);const c=t.getValue("willChange");r&&(i=r);const l=[],u=s&&t.animationState&&t.animationState.getState()[s];for(const h in a){const f=t.getValue(h),p=a[h];if(!f||p===void 0||u&&hE(u,h))continue;const g={delay:n,elapsed:0,...$u(i||{},h)};if(window.HandoffAppearAnimations){const S=t.getProps()[cg];if(S){const b=window.HandoffAppearAnimations(S,h,f,ce);b!==null&&(g.elapsed=b,g.isHandoff=!0)}}let y=!g.isHandoff&&!fE(f,p);if(g.type==="spring"&&(f.getVelocity()||g.velocity)&&(y=!1),f.animation&&(y=!1),y)continue;f.start(Vu(h,f,p,t.shouldReduceMotion&&or.has(h)?{type:!1}:g));const v=f.animation;Lo(c)&&(c.add(h),v.then(()=>c.remove(h))),l.push(v)}return o&&Promise.all(l).then(()=>{o&&cE(t,o)}),l}function pl(t,e,n={}){const r=Sa(t,e,n.custom);let{transition:s=t.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(s=n.transitionOverride);const i=r?()=>Promise.all(iy(t,r,n)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:l=0,staggerChildren:u,staggerDirection:h}=s;return pE(t,e,l+c,u,h,n)}:()=>Promise.resolve(),{when:a}=s;if(a){const[c,l]=a==="beforeChildren"?[i,o]:[o,i];return c().then(()=>l())}else return Promise.all([i(),o(n.delay)])}function pE(t,e,n=0,r=0,s=1,i){const o=[],a=(t.variantChildren.size-1)*r,c=s===1?(l=0)=>l*r:(l=0)=>a-l*r;return Array.from(t.variantChildren).sort(mE).forEach((l,u)=>{l.notify("AnimationStart",e),o.push(pl(l,e,{...i,delay:n+c(u)}).then(()=>l.notify("AnimationComplete",e)))}),Promise.all(o)}function mE(t,e){return t.sortNodePosition(e)}function gE(t,e,n={}){t.notify("AnimationStart",e);let r;if(Array.isArray(e)){const s=e.map(i=>pl(t,i,n));r=Promise.all(s)}else if(typeof e=="string")r=pl(t,e,n);else{const s=typeof e=="function"?Sa(t,e,n.custom):e;r=Promise.all(iy(t,s,n))}return r.then(()=>t.notify("AnimationComplete",e))}const yE=[...Su].reverse(),vE=Su.length;function bE(t){return e=>Promise.all(e.map(({animation:n,options:r})=>gE(t,n,r)))}function xE(t){let e=bE(t);const n=kE();let r=!0;const s=(c,l)=>{const u=Sa(t,l);if(u){const{transition:h,transitionEnd:f,...p}=u;c={...c,...p,...f}}return c};function i(c){e=c(t)}function o(c,l){const u=t.getProps(),h=t.getVariantContext(!0)||{},f=[],p=new Set;let g={},y=1/0;for(let S=0;S<vE;S++){const b=yE[S],x=n[b],w=u[b]!==void 0?u[b]:h[b],E=Hs(w),_=b===l?x.isActive:null;_===!1&&(y=S);let C=w===h[b]&&w!==u[b]&&E;if(C&&r&&t.manuallyAnimateOnMount&&(C=!1),x.protectedKeys={...g},!x.isActive&&_===null||!w&&!x.prevProp||ba(w)||typeof w=="boolean")continue;let O=wE(x.prevProp,w)||b===l&&x.isActive&&!C&&E||S>y&&E,$=!1;const B=Array.isArray(w)?w:[w];let q=B.reduce(s,{});_===!1&&(q={});const{prevResolvedValues:H={}}=x,ee={...H,...q},oe=te=>{O=!0,p.has(te)&&($=!0,p.delete(te)),x.needsAnimating[te]=!0};for(const te in ee){const he=q[te],le=H[te];if(g.hasOwnProperty(te))continue;let U=!1;Po(he)&&Po(le)?U=!Ag(he,le):U=he!==le,U?he!==void 0?oe(te):p.add(te):he!==void 0&&p.has(te)?oe(te):x.protectedKeys[te]=!0}x.prevProp=w,x.prevResolvedValues=q,x.isActive&&(g={...g,...q}),r&&t.blockInitialAnimation&&(O=!1),O&&(!C||$)&&f.push(...B.map(te=>({animation:te,options:{type:b,...c}})))}if(p.size){const S={};p.forEach(b=>{const x=t.getBaseTarget(b);x!==void 0&&(S[b]=x)}),f.push({animation:S})}let v=!!f.length;return r&&(u.initial===!1||u.initial===u.animate)&&!t.manuallyAnimateOnMount&&(v=!1),r=!1,v?e(f):Promise.resolve()}function a(c,l,u){var h;if(n[c].isActive===l)return Promise.resolve();(h=t.variantChildren)===null||h===void 0||h.forEach(p=>{var g;return(g=p.animationState)===null||g===void 0?void 0:g.setActive(c,l)}),n[c].isActive=l;const f=o(u,c);for(const p in n)n[p].protectedKeys={};return f}return{animateChanges:o,setActive:a,setAnimateFunction:i,getState:()=>n}}function wE(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!Ag(e,t):!1}function jn(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function kE(){return{animate:jn(!0),whileInView:jn(),whileHover:jn(),whileTap:jn(),whileDrag:jn(),whileFocus:jn(),exit:jn()}}class SE extends Pn{constructor(e){super(e),e.animationState||(e.animationState=xE(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();this.unmount(),ba(e)&&(this.unmount=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let EE=0;class _E extends Pn{constructor(){super(...arguments),this.id=EE++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n,custom:r}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===s)return;const i=this.node.animationState.setActive("exit",!e,{custom:r??this.node.getProps().custom});n&&!e&&i.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const TE={animation:{Feature:SE},exit:{Feature:_E}},oh=(t,e)=>Math.abs(t-e);function CE(t,e){const n=oh(t.x,e.x),r=oh(t.y,e.y);return Math.sqrt(n**2+r**2)}class oy{constructor(e,n,{transformPagePoint:r,contextWindow:s,dragSnapToOrigin:i=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const h=ic(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,p=CE(h.offset,{x:0,y:0})>=3;if(!f&&!p)return;const{point:g}=h,{timestamp:y}=Me;this.history.push({...g,timestamp:y});const{onStart:v,onMove:S}=this.handlers;f||(v&&v(this.lastMoveEvent,h),this.startEvent=this.lastMoveEvent),S&&S(this.lastMoveEvent,h)},this.handlePointerMove=(h,f)=>{this.lastMoveEvent=h,this.lastMoveEventInfo=sc(f,this.transformPagePoint),ce.update(this.updatePoint,!0)},this.handlePointerUp=(h,f)=>{this.end();const{onEnd:p,onSessionEnd:g,resumeAnimation:y}=this.handlers;if(this.dragSnapToOrigin&&y&&y(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=ic(h.type==="pointercancel"?this.lastMoveEventInfo:sc(f,this.transformPagePoint),this.history);this.startEvent&&p&&p(h,v),g&&g(h,v)},!Eg(e))return;this.dragSnapToOrigin=i,this.handlers=n,this.transformPagePoint=r,this.contextWindow=s||window;const o=ka(e),a=sc(o,this.transformPagePoint),{point:c}=a,{timestamp:l}=Me;this.history=[{...c,timestamp:l}];const{onSessionStart:u}=n;u&&u(e,ic(a,this.history)),this.removeListeners=vn(qt(this.contextWindow,"pointermove",this.handlePointerMove),qt(this.contextWindow,"pointerup",this.handlePointerUp),qt(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),wt(this.updatePoint)}}function sc(t,e){return e?{point:e(t.point)}:t}function ah(t,e){return{x:t.x-e.x,y:t.y-e.y}}function ic({point:t},e){return{point:t,delta:ah(t,ay(e)),offset:ah(t,RE(e)),velocity:AE(e,.1)}}function RE(t){return t[0]}function ay(t){return t[t.length-1]}function AE(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,r=null;const s=ay(t);for(;n>=0&&(r=t[n],!(s.timestamp-r.timestamp>Kn(e)));)n--;if(!r)return{x:0,y:0};const i=Kt(s.timestamp-r.timestamp);if(i===0)return{x:0,y:0};const o={x:(s.x-r.x)/i,y:(s.y-r.y)/i};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function Qe(t){return t.max-t.min}function ml(t,e=0,n=.01){return Math.abs(t-e)<=n}function ch(t,e,n,r=.5){t.origin=r,t.originPoint=ve(e.min,e.max,t.origin),t.scale=Qe(n)/Qe(e),(ml(t.scale,1,1e-4)||isNaN(t.scale))&&(t.scale=1),t.translate=ve(n.min,n.max,t.origin)-t.originPoint,(ml(t.translate)||isNaN(t.translate))&&(t.translate=0)}function Is(t,e,n,r){ch(t.x,e.x,n.x,r?r.originX:void 0),ch(t.y,e.y,n.y,r?r.originY:void 0)}function lh(t,e,n){t.min=n.min+e.min,t.max=t.min+Qe(e)}function PE(t,e,n){lh(t.x,e.x,n.x),lh(t.y,e.y,n.y)}function uh(t,e,n){t.min=e.min-n.min,t.max=t.min+Qe(e)}function Os(t,e,n){uh(t.x,e.x,n.x),uh(t.y,e.y,n.y)}function IE(t,{min:e,max:n},r){return e!==void 0&&t<e?t=r?ve(e,t,r.min):Math.max(t,e):n!==void 0&&t>n&&(t=r?ve(n,t,r.max):Math.min(t,n)),t}function dh(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function OE(t,{top:e,left:n,bottom:r,right:s}){return{x:dh(t.x,n,s),y:dh(t.y,e,r)}}function hh(t,e){let n=e.min-t.min,r=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,r]=[r,n]),{min:n,max:r}}function NE(t,e){return{x:hh(t.x,e.x),y:hh(t.y,e.y)}}function LE(t,e){let n=.5;const r=Qe(t),s=Qe(e);return s>r?n=Fr(e.min,e.max-r,t.min):r>s&&(n=Fr(t.min,t.max-s,e.min)),Sn(0,1,n)}function jE(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const gl=.35;function DE(t=gl){return t===!1?t=0:t===!0&&(t=gl),{x:fh(t,"left","right"),y:fh(t,"top","bottom")}}function fh(t,e,n){return{min:ph(t,e),max:ph(t,n)}}function ph(t,e){return typeof t=="number"?t:t[e]||0}const mh=()=>({translate:0,scale:1,origin:0,originPoint:0}),xr=()=>({x:mh(),y:mh()}),gh=()=>({min:0,max:0}),Re=()=>({x:gh(),y:gh()});function nt(t){return[t("x"),t("y")]}function cy({top:t,left:e,right:n,bottom:r}){return{x:{min:e,max:n},y:{min:t,max:r}}}function ME({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function FE(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),r=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function oc(t){return t===void 0||t===1}function yl({scale:t,scaleX:e,scaleY:n}){return!oc(t)||!oc(e)||!oc(n)}function Mn(t){return yl(t)||ly(t)||t.z||t.rotate||t.rotateX||t.rotateY}function ly(t){return yh(t.x)||yh(t.y)}function yh(t){return t&&t!=="0%"}function jo(t,e,n){const r=t-n,s=e*r;return n+s}function vh(t,e,n,r,s){return s!==void 0&&(t=jo(t,s,r)),jo(t,n,r)+e}function vl(t,e=0,n=1,r,s){t.min=vh(t.min,e,n,r,s),t.max=vh(t.max,e,n,r,s)}function uy(t,{x:e,y:n}){vl(t.x,e.translate,e.scale,e.originPoint),vl(t.y,n.translate,n.scale,n.originPoint)}function $E(t,e,n,r=!1){const s=n.length;if(!s)return;e.x=e.y=1;let i,o;for(let a=0;a<s;a++){i=n[a],o=i.projectionDelta;const c=i.instance;c&&c.style&&c.style.display==="contents"||(r&&i.options.layoutScroll&&i.scroll&&i!==i.root&&wr(t,{x:-i.scroll.offset.x,y:-i.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,uy(t,o)),r&&Mn(i.latestValues)&&wr(t,i.latestValues))}e.x=bh(e.x),e.y=bh(e.y)}function bh(t){return Number.isInteger(t)||t>1.0000000000001||t<.999999999999?t:1}function ln(t,e){t.min=t.min+e,t.max=t.max+e}function xh(t,e,[n,r,s]){const i=e[s]!==void 0?e[s]:.5,o=ve(t.min,t.max,i);vl(t,e[n],e[r],o,e.scale)}const VE=["x","scaleX","originX"],UE=["y","scaleY","originY"];function wr(t,e){xh(t.x,e,VE),xh(t.y,e,UE)}function dy(t,e){return cy(FE(t.getBoundingClientRect(),e))}function BE(t,e,n){const r=dy(t,n),{scroll:s}=e;return s&&(ln(r.x,s.offset.x),ln(r.y,s.offset.y)),r}const hy=({current:t})=>t?t.ownerDocument.defaultView:null,HE=new WeakMap;class zE{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Re(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const s=u=>{const{dragSnapToOrigin:h}=this.getProps();h?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(ka(u,"page").point)},i=(u,h)=>{const{drag:f,dragPropagation:p,onDragStart:g}=this.getProps();if(f&&!p&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Tg(f),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),nt(v=>{let S=this.getAxisMotionValue(v).get()||0;if(At.test(S)){const{projection:b}=this.visualElement;if(b&&b.layout){const x=b.layout.layoutBox[v];x&&(S=Qe(x)*(parseFloat(S)/100))}}this.originPoint[v]=S}),g&&ce.update(()=>g(u,h),!1,!0);const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},o=(u,h)=>{const{dragPropagation:f,dragDirectionLock:p,onDirectionLock:g,onDrag:y}=this.getProps();if(!f&&!this.openGlobalLock)return;const{offset:v}=h;if(p&&this.currentDirection===null){this.currentDirection=WE(v),this.currentDirection!==null&&g&&g(this.currentDirection);return}this.updateAxis("x",h.point,v),this.updateAxis("y",h.point,v),this.visualElement.render(),y&&y(u,h)},a=(u,h)=>this.stop(u,h),c=()=>nt(u=>{var h;return this.getAnimationState(u)==="paused"&&((h=this.getAxisMotionValue(u).animation)===null||h===void 0?void 0:h.play())}),{dragSnapToOrigin:l}=this.getProps();this.panSession=new oy(e,{onSessionStart:s,onStart:i,onMove:o,onSessionEnd:a,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:l,contextWindow:hy(this.visualElement)})}stop(e,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:s}=n;this.startAnimation(s);const{onDragEnd:i}=this.getProps();i&&ce.update(()=>i(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,r){const{drag:s}=this.getProps();if(!r||!zi(e,s,this.currentDirection))return;const i=this.getAxisMotionValue(e);let o=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(o=IE(o,this.constraints[e],this.elastic[e])),i.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:r}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,i=this.constraints;n&&vr(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&s?this.constraints=OE(s.layoutBox,n):this.constraints=!1,this.elastic=DE(r),i!==this.constraints&&s&&this.constraints&&!this.hasMutatedConstraints&&nt(o=>{this.getAxisMotionValue(o)&&(this.constraints[o]=jE(s.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!vr(e))return!1;const r=e.current,{projection:s}=this.visualElement;if(!s||!s.layout)return!1;const i=BE(r,s.root,this.visualElement.getTransformPagePoint());let o=NE(s.layout.layoutBox,i);if(n){const a=n(ME(o));this.hasMutatedConstraints=!!a,a&&(o=cy(a))}return o}startAnimation(e){const{drag:n,dragMomentum:r,dragElastic:s,dragTransition:i,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),c=this.constraints||{},l=nt(u=>{if(!zi(u,n,this.currentDirection))return;let h=c&&c[u]||{};o&&(h={min:0,max:0});const f=s?200:1e6,p=s?40:1e7,g={type:"inertia",velocity:r?e[u]:0,bounceStiffness:f,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...i,...h};return this.startAxisValueAnimation(u,g)});return Promise.all(l).then(a)}startAxisValueAnimation(e,n){const r=this.getAxisMotionValue(e);return r.start(Vu(e,r,0,n))}stopAnimation(){nt(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){nt(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n="_drag"+e.toUpperCase(),r=this.visualElement.getProps(),s=r[n];return s||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){nt(n=>{const{drag:r}=this.getProps();if(!zi(n,r,this.currentDirection))return;const{projection:s}=this.visualElement,i=this.getAxisMotionValue(n);if(s&&s.layout){const{min:o,max:a}=s.layout.layoutBox[n];i.set(e[n]-ve(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!vr(n)||!r||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};nt(o=>{const a=this.getAxisMotionValue(o);if(a){const c=a.get();s[o]=LE({min:c,max:c},this.constraints[o])}});const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),nt(o=>{if(!zi(o,e,null))return;const a=this.getAxisMotionValue(o),{min:c,max:l}=this.constraints[o];a.set(ve(c,l,s[o]))})}addListeners(){if(!this.visualElement.current)return;HE.set(this.visualElement,this);const e=this.visualElement.current,n=qt(e,"pointerdown",c=>{const{drag:l,dragListener:u=!0}=this.getProps();l&&u&&this.start(c)}),r=()=>{const{dragConstraints:c}=this.getProps();vr(c)&&(this.constraints=this.resolveRefConstraints())},{projection:s}=this.visualElement,i=s.addEventListener("measure",r);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),r();const o=Bt(window,"resize",()=>this.scalePositionWithinConstraints()),a=s.addEventListener("didUpdate",(({delta:c,hasLayoutChanged:l})=>{this.isDragging&&l&&(nt(u=>{const h=this.getAxisMotionValue(u);h&&(this.originPoint[u]+=c[u].translate,h.set(h.get()+c[u].translate))}),this.visualElement.render())}));return()=>{o(),n(),i(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:s=!1,dragConstraints:i=!1,dragElastic:o=gl,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:r,dragPropagation:s,dragConstraints:i,dragElastic:o,dragMomentum:a}}}function zi(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function WE(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class qE extends Pn{constructor(e){super(e),this.removeGroupControls=Se,this.removeListeners=Se,this.controls=new zE(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Se}unmount(){this.removeGroupControls(),this.removeListeners()}}const wh=t=>(e,n)=>{t&&ce.update(()=>t(e,n))};class KE extends Pn{constructor(){super(...arguments),this.removePointerDownListener=Se}onPointerDown(e){this.session=new oy(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:hy(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:r,onPanEnd:s}=this.node.getProps();return{onSessionStart:wh(e),onStart:wh(n),onMove:r,onEnd:(i,o)=>{delete this.session,s&&ce.update(()=>s(i,o))}}}mount(){this.removePointerDownListener=qt(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function GE(){const t=m.useContext(ya);if(t===null)return[!0,null];const{isPresent:e,onExitComplete:n,register:r}=t,s=m.useId();return m.useEffect(()=>r(s),[]),!e&&n?[!1,()=>n&&n(s)]:[!0]}const co={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function kh(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const as={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(z.test(t))t=parseFloat(t);else return t;const n=kh(t,e.target.x),r=kh(t,e.target.y);return`${n}% ${r}%`}},ZE={correct:(t,{treeScale:e,projectionDelta:n})=>{const r=t,s=En.parse(t);if(s.length>5)return r;const i=En.createTransformer(t),o=typeof s[0]!="number"?1:0,a=n.x.scale*e.x,c=n.y.scale*e.y;s[0+o]/=a,s[1+o]/=c;const l=ve(a,c,.5);return typeof s[2+o]=="number"&&(s[2+o]/=l),typeof s[3+o]=="number"&&(s[3+o]/=l),i(s)}};class JE extends X.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:r,layoutId:s}=this.props,{projection:i}=e;rk(YE),i&&(n.group&&n.group.add(i),r&&r.register&&s&&r.register(i),i.root.didUpdate(),i.addEventListener("animationComplete",()=>{this.safeToRemove()}),i.setOptions({...i.options,onExitComplete:()=>this.safeToRemove()})),co.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:r,drag:s,isPresent:i}=this.props,o=r.projection;return o&&(o.isPresent=i,s||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?o.promote():o.relegate()||ce.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),queueMicrotask(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:s}=e;s&&(s.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(s),r&&r.deregister&&r.deregister(s))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function fy(t){const[e,n]=GE(),r=m.useContext(_u);return X.createElement(JE,{...t,layoutGroup:r,switchLayoutGroup:m.useContext(ug),isPresent:e,safeToRemove:n})}const YE={borderRadius:{...as,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:as,borderTopRightRadius:as,borderBottomLeftRadius:as,borderBottomRightRadius:as,boxShadow:ZE},py=["TopLeft","TopRight","BottomLeft","BottomRight"],XE=py.length,Sh=t=>typeof t=="string"?parseFloat(t):t,Eh=t=>typeof t=="number"||z.test(t);function QE(t,e,n,r,s,i){s?(t.opacity=ve(0,n.opacity!==void 0?n.opacity:1,e_(r)),t.opacityExit=ve(e.opacity!==void 0?e.opacity:1,0,t_(r))):i&&(t.opacity=ve(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let o=0;o<XE;o++){const a=`border${py[o]}Radius`;let c=_h(e,a),l=_h(n,a);if(c===void 0&&l===void 0)continue;c||(c=0),l||(l=0),c===0||l===0||Eh(c)===Eh(l)?(t[a]=Math.max(ve(Sh(c),Sh(l),r),0),(At.test(l)||At.test(c))&&(t[a]+="%")):t[a]=l}(e.rotate||n.rotate)&&(t.rotate=ve(e.rotate||0,n.rotate||0,r))}function _h(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const e_=my(0,.5,Fg),t_=my(.5,.95,Se);function my(t,e,n){return r=>r<t?0:r>e?1:n(Fr(t,e,r))}function Th(t,e){t.min=e.min,t.max=e.max}function tt(t,e){Th(t.x,e.x),Th(t.y,e.y)}function Ch(t,e,n,r,s){return t-=e,t=jo(t,1/n,r),s!==void 0&&(t=jo(t,1/s,r)),t}function n_(t,e=0,n=1,r=.5,s,i=t,o=t){if(At.test(e)&&(e=parseFloat(e),e=ve(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=ve(i.min,i.max,r);t===i&&(a-=e),t.min=Ch(t.min,e,n,a,s),t.max=Ch(t.max,e,n,a,s)}function Rh(t,e,[n,r,s],i,o){n_(t,e[n],e[r],e[s],e.scale,i,o)}const r_=["x","scaleX","originX"],s_=["y","scaleY","originY"];function Ah(t,e,n,r){Rh(t.x,e,r_,n?n.x:void 0,r?r.x:void 0),Rh(t.y,e,s_,n?n.y:void 0,r?r.y:void 0)}function Ph(t){return t.translate===0&&t.scale===1}function gy(t){return Ph(t.x)&&Ph(t.y)}function i_(t,e){return t.x.min===e.x.min&&t.x.max===e.x.max&&t.y.min===e.y.min&&t.y.max===e.y.max}function yy(t,e){return Math.round(t.x.min)===Math.round(e.x.min)&&Math.round(t.x.max)===Math.round(e.x.max)&&Math.round(t.y.min)===Math.round(e.y.min)&&Math.round(t.y.max)===Math.round(e.y.max)}function Ih(t){return Qe(t.x)/Qe(t.y)}class o_{constructor(){this.members=[]}add(e){Uu(this.members,e),e.scheduleRender()}remove(e){if(Bu(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(s=>e===s);if(n===0)return!1;let r;for(let s=n;s>=0;s--){const i=this.members[s];if(i.isPresent!==!1){r=i;break}}return r?(this.promote(r),!0):!1}promote(e,n){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,n&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:s}=e.options;s===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:r}=e;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Oh(t,e,n){let r="";const s=t.x.translate/e.x,i=t.y.translate/e.y;if((s||i)&&(r=`translate3d(${s}px, ${i}px, 0) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),n){const{rotate:c,rotateX:l,rotateY:u}=n;c&&(r+=`rotate(${c}deg) `),l&&(r+=`rotateX(${l}deg) `),u&&(r+=`rotateY(${u}deg) `)}const o=t.x.scale*e.x,a=t.y.scale*e.y;return(o!==1||a!==1)&&(r+=`scale(${o}, ${a})`),r||"none"}const a_=(t,e)=>t.depth-e.depth;class c_{constructor(){this.children=[],this.isDirty=!1}add(e){Uu(this.children,e),this.isDirty=!0}remove(e){Bu(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(a_),this.isDirty=!1,this.children.forEach(e)}}function l_(t,e){const n=performance.now(),r=({timestamp:s})=>{const i=s-n;i>=e&&(wt(r),t(i-e))};return ce.read(r,!0),()=>wt(r)}function u_(t){window.MotionDebug&&window.MotionDebug.record(t)}function d_(t){return t instanceof SVGElement&&t.tagName!=="svg"}function h_(t,e,n){const r=Ze(t)?t:ft(t);return r.start(Vu("",r,e,n)),r.animation}const Nh=["","X","Y","Z"],f_={visibility:"hidden"},Lh=1e3;let p_=0;const Fn={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function vy({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:r,resetTransform:s}){return class{constructor(o={},a=e==null?void 0:e()){this.id=p_++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Fn.totalNodes=Fn.resolvedTargetDeltas=Fn.recalculatedProjection=0,this.nodes.forEach(y_),this.nodes.forEach(k_),this.nodes.forEach(S_),this.nodes.forEach(v_),u_(Fn)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new c_)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Hu),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const c=this.eventHandlers.get(o);c&&c.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=d_(o),this.instance=o;const{layoutId:c,layout:l,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(l||c)&&(this.isLayoutDirty=!0),t){let h;const f=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,h&&h(),h=l_(f,250),co.hasAnimatedSinceResize&&(co.hasAnimatedSinceResize=!1,this.nodes.forEach(Dh))})}c&&this.root.registerSharedNode(c,this),this.options.animate!==!1&&u&&(c||l)&&this.addEventListener("didUpdate",({delta:h,hasLayoutChanged:f,hasRelativeTargetChanged:p,layout:g})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||u.getDefaultTransition()||R_,{onLayoutAnimationStart:v,onLayoutAnimationComplete:S}=u.getProps(),b=!this.targetLayout||!yy(this.targetLayout,g)||p,x=!f&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||x||f&&(b||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(h,x);const w={...$u(y,"layout"),onPlay:v,onComplete:S};(u.shouldReduceMotion||this.options.layoutRoot)&&(w.delay=0,w.type=!1),this.startAnimation(w)}else f||Dh(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=g})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,wt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(E_),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const h=this.path[u];h.shouldResetTransform=!0,h.updateScroll("snapshot"),h.options.layoutRoot&&h.willUpdate(!1)}const{layoutId:a,layout:c}=this.options;if(a===void 0&&!c)return;const l=this.getTransformTemplate();this.prevTransformTemplateValue=l?l(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(jh);return}this.isUpdating||this.nodes.forEach(x_),this.isUpdating=!1,this.nodes.forEach(w_),this.nodes.forEach(m_),this.nodes.forEach(g_),this.clearAllSnapshots();const a=performance.now();Me.delta=Sn(0,1e3/60,a-Me.timestamp),Me.timestamp=a,Me.isProcessing=!0,Ja.update.process(Me),Ja.preRender.process(Me),Ja.render.process(Me),Me.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(b_),this.sharedNodes.forEach(__)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ce.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ce.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Re(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:o,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!s)return;const o=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!gy(this.projectionDelta),c=this.getTransformTemplate(),l=c?c(this.latestValues,""):void 0,u=l!==this.prevTransformTemplateValue;o&&(a||Mn(this.latestValues)||u)&&(s(this.instance,l),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let c=this.removeElementScroll(a);return o&&(c=this.removeTransform(c)),A_(c),{animationId:this.root.animationId,measuredBox:a,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:o}=this.options;if(!o)return Re();const a=o.measureViewportBox(),{scroll:c}=this.root;return c&&(ln(a.x,c.offset.x),ln(a.y,c.offset.y)),a}removeElementScroll(o){const a=Re();tt(a,o);for(let c=0;c<this.path.length;c++){const l=this.path[c],{scroll:u,options:h}=l;if(l!==this.root&&u&&h.layoutScroll){if(u.isRoot){tt(a,o);const{scroll:f}=this.root;f&&(ln(a.x,-f.offset.x),ln(a.y,-f.offset.y))}ln(a.x,u.offset.x),ln(a.y,u.offset.y)}}return a}applyTransform(o,a=!1){const c=Re();tt(c,o);for(let l=0;l<this.path.length;l++){const u=this.path[l];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&wr(c,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),Mn(u.latestValues)&&wr(c,u.latestValues)}return Mn(this.latestValues)&&wr(c,this.latestValues),c}removeTransform(o){const a=Re();tt(a,o);for(let c=0;c<this.path.length;c++){const l=this.path[c];if(!l.instance||!Mn(l.latestValues))continue;yl(l.latestValues)&&l.updateSnapshot();const u=Re(),h=l.measurePageBox();tt(u,h),Ah(a,l.latestValues,l.snapshot?l.snapshot.layoutBox:void 0,u)}return Mn(this.latestValues)&&Ah(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Me.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const c=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=c.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=c.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=c.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==c;if(!(o||l&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:h,layoutId:f}=this.options;if(!(!this.layout||!(h||f))){if(this.resolvedRelativeTargetAt=Me.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Re(),this.relativeTargetOrigin=Re(),Os(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),tt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Re(),this.targetWithTransforms=Re()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),PE(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):tt(this.target,this.layout.layoutBox),uy(this.target,this.targetDelta)):tt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Re(),this.relativeTargetOrigin=Re(),Os(this.relativeTargetOrigin,this.target,p.target),tt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Fn.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||yl(this.parent.latestValues)||ly(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),c=!!this.resumingFrom||this!==a;let l=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(l=!1),c&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===Me.timestamp&&(l=!1),l)return;const{layout:u,layoutId:h}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||h))return;tt(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,p=this.treeScale.y;$E(this.layoutCorrected,this.treeScale,this.path,c),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox);const{target:g}=a;if(!g){this.projectionTransform&&(this.projectionDelta=xr(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=xr(),this.projectionDeltaWithTransform=xr());const y=this.projectionTransform;Is(this.projectionDelta,this.layoutCorrected,g,this.latestValues),this.projectionTransform=Oh(this.projectionDelta,this.treeScale),(this.projectionTransform!==y||this.treeScale.x!==f||this.treeScale.y!==p)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",g)),Fn.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),o){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(o,a=!1){const c=this.snapshot,l=c?c.latestValues:{},u={...this.latestValues},h=xr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const f=Re(),p=c?c.source:void 0,g=this.layout?this.layout.source:void 0,y=p!==g,v=this.getStack(),S=!v||v.members.length<=1,b=!!(y&&!S&&this.options.crossfade===!0&&!this.path.some(C_));this.animationProgress=0;let x;this.mixTargetDelta=w=>{const E=w/1e3;Mh(h.x,o.x,E),Mh(h.y,o.y,E),this.setTargetDelta(h),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Os(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),T_(this.relativeTarget,this.relativeTargetOrigin,f,E),x&&i_(this.relativeTarget,x)&&(this.isProjectionDirty=!1),x||(x=Re()),tt(x,this.relativeTarget)),y&&(this.animationValues=u,QE(u,l,this.latestValues,E,b,S)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=E},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(wt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ce.update(()=>{co.hasAnimatedSinceResize=!0,this.currentAnimation=h_(0,Lh,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Lh),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:c,layout:l,latestValues:u}=o;if(!(!a||!c||!l)){if(this!==o&&this.layout&&l&&by(this.options.animationType,this.layout.layoutBox,l.layoutBox)){c=this.target||Re();const h=Qe(this.layout.layoutBox.x);c.x.min=o.target.x.min,c.x.max=c.x.min+h;const f=Qe(this.layout.layoutBox.y);c.y.min=o.target.y.min,c.y.max=c.y.min+f}tt(a,c),wr(a,u),Is(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new o_),this.sharedNodes.get(o).add(a);const l=a.options.initialPromotionConfig;a.promote({transition:l?l.transition:void 0,preserveFollowOpacity:l&&l.shouldPreserveFollowOpacity?l.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:c}={}){const l=this.getStack();l&&l.promote(this,c),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:c}=o;if((c.rotate||c.rotateX||c.rotateY||c.rotateZ)&&(a=!0),!a)return;const l={};for(let u=0;u<Nh.length;u++){const h="rotate"+Nh[u];c[h]&&(l[h]=c[h],o.setStaticValue(h,0))}o.render();for(const u in l)o.setStaticValue(u,l[u]);o.scheduleRender()}getProjectionStyles(o){var a,c;if(!this.instance||this.isSVG)return;if(!this.isVisible)return f_;const l={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,l.opacity="",l.pointerEvents=ao(o==null?void 0:o.pointerEvents)||"",l.transform=u?u(this.latestValues,""):"none",l;const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){const y={};return this.options.layoutId&&(y.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,y.pointerEvents=ao(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!Mn(this.latestValues)&&(y.transform=u?u({},""):"none",this.hasProjected=!1),y}const f=h.animationValues||h.latestValues;this.applyTransformsToTarget(),l.transform=Oh(this.projectionDeltaWithTransform,this.treeScale,f),u&&(l.transform=u(f,l.transform));const{x:p,y:g}=this.projectionDelta;l.transformOrigin=`${p.origin*100}% ${g.origin*100}% 0`,h.animationValues?l.opacity=h===this?(c=(a=f.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&c!==void 0?c:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:l.opacity=h===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const y in Ro){if(f[y]===void 0)continue;const{correct:v,applyTo:S}=Ro[y],b=l.transform==="none"?f[y]:v(f[y],h);if(S){const x=S.length;for(let w=0;w<x;w++)l[S[w]]=b}else l[y]=b}return this.options.layoutId&&(l.pointerEvents=h===this?ao(o==null?void 0:o.pointerEvents)||"":"none"),l}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(jh),this.root.sharedNodes.clear()}}}function m_(t){t.updateLayout()}function g_(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:s}=t.layout,{animationType:i}=t.options,o=n.source!==t.layout.source;i==="size"?nt(h=>{const f=o?n.measuredBox[h]:n.layoutBox[h],p=Qe(f);f.min=r[h].min,f.max=f.min+p}):by(i,n.layoutBox,r)&&nt(h=>{const f=o?n.measuredBox[h]:n.layoutBox[h],p=Qe(r[h]);f.max=f.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[h].max=t.relativeTarget[h].min+p)});const a=xr();Is(a,r,n.layoutBox);const c=xr();o?Is(c,t.applyTransform(s,!0),n.measuredBox):Is(c,r,n.layoutBox);const l=!gy(a);let u=!1;if(!t.resumeFrom){const h=t.getClosestProjectingParent();if(h&&!h.resumeFrom){const{snapshot:f,layout:p}=h;if(f&&p){const g=Re();Os(g,n.layoutBox,f.layoutBox);const y=Re();Os(y,r,p.layoutBox),yy(g,y)||(u=!0),h.options.layoutRoot&&(t.relativeTarget=y,t.relativeTargetOrigin=g,t.relativeParent=h)}}}t.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:c,layoutDelta:a,hasLayoutChanged:l,hasRelativeTargetChanged:u})}else if(t.isLead()){const{onExitComplete:r}=t.options;r&&r()}t.options.transition=void 0}function y_(t){Fn.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function v_(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function b_(t){t.clearSnapshot()}function jh(t){t.clearMeasurements()}function x_(t){t.isLayoutDirty=!1}function w_(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Dh(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function k_(t){t.resolveTargetDelta()}function S_(t){t.calcProjection()}function E_(t){t.resetRotation()}function __(t){t.removeLeadSnapshot()}function Mh(t,e,n){t.translate=ve(e.translate,0,n),t.scale=ve(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function Fh(t,e,n,r){t.min=ve(e.min,n.min,r),t.max=ve(e.max,n.max,r)}function T_(t,e,n,r){Fh(t.x,e.x,n.x,r),Fh(t.y,e.y,n.y,r)}function C_(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const R_={duration:.45,ease:[.4,0,.1,1]},$h=t=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(t),Vh=$h("applewebkit/")&&!$h("chrome/")?Math.round:Se;function Uh(t){t.min=Vh(t.min),t.max=Vh(t.max)}function A_(t){Uh(t.x),Uh(t.y)}function by(t,e,n){return t==="position"||t==="preserve-aspect"&&!ml(Ih(e),Ih(n),.2)}const P_=vy({attachResizeListener:(t,e)=>Bt(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),ac={current:void 0},xy=vy({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!ac.current){const t=new P_({});t.mount(window),t.setOptions({layoutScroll:!0}),ac.current=t}return ac.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),I_={pan:{Feature:KE},drag:{Feature:qE,ProjectionNode:xy,MeasureLayout:fy}},O_=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function N_(t){const e=O_.exec(t);if(!e)return[,];const[,n,r]=e;return[n,r]}function bl(t,e,n=1){const[r,s]=N_(t);if(!r)return;const i=window.getComputedStyle(e).getPropertyValue(r);if(i){const o=i.trim();return ny(o)?parseFloat(o):o}else return cl(s)?bl(s,e,n+1):s}function L_(t,{...e},n){const r=t.current;if(!(r instanceof Element))return{target:e,transitionEnd:n};n&&(n={...n}),t.values.forEach(s=>{const i=s.get();if(!cl(i))return;const o=bl(i,r);o&&s.set(o)});for(const s in e){const i=e[s];if(!cl(i))continue;const o=bl(i,r);o&&(e[s]=o,n||(n={}),n[s]===void 0&&(n[s]=i))}return{target:e,transitionEnd:n}}const j_=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),wy=t=>j_.has(t),D_=t=>Object.keys(t).some(wy),Bh=t=>t===ar||t===z,Hh=(t,e)=>parseFloat(t.split(", ")[e]),zh=(t,e)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const s=r.match(/^matrix3d\((.+)\)$/);if(s)return Hh(s[1],e);{const i=r.match(/^matrix\((.+)\)$/);return i?Hh(i[1],t):0}},M_=new Set(["x","y","z"]),F_=yi.filter(t=>!M_.has(t));function $_(t){const e=[];return F_.forEach(n=>{const r=t.getValue(n);r!==void 0&&(e.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),e.length&&t.render(),e}const $r={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:zh(4,13),y:zh(5,14)};$r.translateX=$r.x;$r.translateY=$r.y;const V_=(t,e,n)=>{const r=e.measureViewportBox(),s=e.current,i=getComputedStyle(s),{display:o}=i,a={};o==="none"&&e.setStaticValue("display",t.display||"block"),n.forEach(l=>{a[l]=$r[l](r,i)}),e.render();const c=e.measureViewportBox();return n.forEach(l=>{const u=e.getValue(l);u&&u.jump(a[l]),t[l]=$r[l](c,i)}),t},U_=(t,e,n={},r={})=>{e={...e},r={...r};const s=Object.keys(e).filter(wy);let i=[],o=!1;const a=[];if(s.forEach(c=>{const l=t.getValue(c);if(!t.hasValue(c))return;let u=n[c],h=os(u);const f=e[c];let p;if(Po(f)){const g=f.length,y=f[0]===null?1:0;u=f[y],h=os(u);for(let v=y;v<g&&f[v]!==null;v++)p?Nu(os(f[v])===p):p=os(f[v])}else p=os(f);if(h!==p)if(Bh(h)&&Bh(p)){const g=l.get();typeof g=="string"&&l.set(parseFloat(g)),typeof f=="string"?e[c]=parseFloat(f):Array.isArray(f)&&p===z&&(e[c]=f.map(parseFloat))}else h!=null&&h.transform&&(p!=null&&p.transform)&&(u===0||f===0)?u===0?l.set(p.transform(u)):e[c]=h.transform(f):(o||(i=$_(t),o=!0),a.push(c),r[c]=r[c]!==void 0?r[c]:e[c],l.jump(f))}),a.length){const c=a.indexOf("height")>=0?window.pageYOffset:null,l=V_(e,t,a);return i.length&&i.forEach(([u,h])=>{t.getValue(u).set(h)}),t.render(),va&&c!==null&&window.scrollTo({top:c}),{target:l,transitionEnd:r}}else return{target:e,transitionEnd:r}};function B_(t,e,n,r){return D_(e)?U_(t,e,n,r):{target:e,transitionEnd:r}}const H_=(t,e,n,r)=>{const s=L_(t,e,r);return e=s.target,r=s.transitionEnd,B_(t,e,n,r)},xl={current:null},ky={current:!1};function z_(){if(ky.current=!0,!!va)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>xl.current=t.matches;t.addListener(e),e()}else xl.current=!1}function W_(t,e,n){const{willChange:r}=e;for(const s in e){const i=e[s],o=n[s];if(Ze(i))t.addValue(s,i),Lo(r)&&r.add(s);else if(Ze(o))t.addValue(s,ft(i,{owner:t})),Lo(r)&&r.remove(s);else if(o!==i)if(t.hasValue(s)){const a=t.getValue(s);!a.hasAnimated&&a.set(i)}else{const a=t.getStaticValue(s);t.addValue(s,ft(a!==void 0?a:i,{owner:t}))}}for(const s in n)e[s]===void 0&&t.removeValue(s);return e}const Wh=new WeakMap,Sy=Object.keys(zs),q_=Sy.length,qh=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],K_=Eu.length;class G_{constructor({parent:e,props:n,presenceContext:r,reducedMotionConfig:s,visualState:i},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>ce.render(this.render,!1,!0);const{latestValues:a,renderState:c}=i;this.latestValues=a,this.baseTarget={...a},this.initialValues=n.initial?{...a}:{},this.renderState=c,this.parent=e,this.props=n,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=s,this.options=o,this.isControllingVariants=xa(n),this.isVariantNode=lg(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:l,...u}=this.scrapeMotionValuesFromProps(n,{});for(const h in u){const f=u[h];a[h]!==void 0&&Ze(f)&&(f.set(a[h],!1),Lo(l)&&l.add(h))}}scrapeMotionValuesFromProps(e,n){return{}}mount(e){this.current=e,Wh.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),ky.current||z_(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:xl.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Wh.delete(this.current),this.projection&&this.projection.unmount(),wt(this.notifyUpdate),wt(this.render),this.valueSubscriptions.forEach(e=>e()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,n){const r=or.has(e),s=n.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&ce.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),i=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,()=>{s(),i()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}loadFeatures({children:e,...n},r,s,i){let o,a;for(let c=0;c<q_;c++){const l=Sy[c],{isEnabled:u,Feature:h,ProjectionNode:f,MeasureLayout:p}=zs[l];f&&(o=f),u(n)&&(!this.features[l]&&h&&(this.features[l]=new h(this)),p&&(a=p))}if((this.type==="html"||this.type==="svg")&&!this.projection&&o){this.projection=new o(this.latestValues,this.parent&&this.parent.projection);const{layoutId:c,layout:l,drag:u,dragConstraints:h,layoutScroll:f,layoutRoot:p}=n;this.projection.setOptions({layoutId:c,layout:l,alwaysMeasureLayout:!!u||h&&vr(h),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof l=="string"?l:"both",initialPromotionConfig:i,layoutScroll:f,layoutRoot:p})}return a}updateFeatures(){for(const e in this.features){const n=this.features[e];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Re()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}makeTargetAnimatable(e,n=!0){return this.makeTargetAnimatableFromInstance(e,this.props,n)}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<qh.length;r++){const s=qh[r];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const i=e["on"+s];i&&(this.propEventSubscriptions[s]=this.on(s,i))}this.prevMotionValues=W_(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(e=!1){if(e)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<K_;r++){const s=Eu[r],i=this.props[s];(Hs(i)||i===!1)&&(n[s]=i)}return n}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){n!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,n)),this.values.set(e,n),this.latestValues[e]=n.get()}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&n!==void 0&&(r=ft(n,{owner:this}),this.addValue(e,r)),r}readValue(e){var n;return this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(n=this.getBaseTargetFromProps(this.props,e))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,e,this.options)}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:r}=this.props,s=typeof r=="string"||typeof r=="object"?(n=Ou(this.props,r))===null||n===void 0?void 0:n[e]:void 0;if(r&&s!==void 0)return s;const i=this.getBaseTargetFromProps(this.props,e);return i!==void 0&&!Ze(i)?i:this.initialValues[e]!==void 0&&s===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new Hu),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class Ey extends G_{sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:r}){delete n[e],delete r[e]}makeTargetAnimatableFromInstance({transition:e,transitionEnd:n,...r},{transformValues:s},i){let o=dE(r,e||{},this);if(s&&(n&&(n=s(n)),r&&(r=s(r)),o&&(o=s(o))),i){lE(this,r,o);const a=H_(this,r,o,n);n=a.transitionEnd,r=a.target}return{transition:e,transitionEnd:n,...r}}}function Z_(t){return window.getComputedStyle(t)}class J_ extends Ey{constructor(){super(...arguments),this.type="html"}readValueFromInstance(e,n){if(or.has(n)){const r=Fu(n);return r&&r.default||0}else{const r=Z_(e),s=(fg(n)?r.getPropertyValue(n):r[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:n}){return dy(e,n)}build(e,n,r,s){Cu(e,n,r,s.transformTemplate)}scrapeMotionValuesFromProps(e,n){return Iu(e,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Ze(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(e,n,r,s){bg(e,n,r,s)}}class Y_ extends Ey{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(or.has(n)){const r=Fu(n);return r&&r.default||0}return n=xg.has(n)?n:ku(n),e.getAttribute(n)}measureInstanceViewportBox(){return Re()}scrapeMotionValuesFromProps(e,n){return kg(e,n)}build(e,n,r,s){Au(e,n,r,this.isSVGTag,s.transformTemplate)}renderInstance(e,n,r,s){wg(e,n,r,s)}mount(e){this.isSVGTag=Pu(e.tagName),super.mount(e)}}const X_=(t,e)=>Tu(t)?new Y_(e,{enableHardwareAcceleration:!1}):new J_(e,{enableHardwareAcceleration:!0}),Q_={layout:{ProjectionNode:xy,MeasureLayout:fy}},eT={...TE,...qk,...I_,...Q_},ze=tk((t,e)=>Nk(t,e,eT,X_));function _y(){const t=m.useRef(!1);return gi(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function tT(){const t=_y(),[e,n]=m.useState(0),r=m.useCallback(()=>{t.current&&n(e+1)},[e]);return[m.useCallback(()=>ce.postRender(r),[r]),e]}class nT extends m.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function rT({children:t,isPresent:e}){const n=m.useId(),r=m.useRef(null),s=m.useRef({width:0,height:0,top:0,left:0});return m.useInsertionEffect(()=>{const{width:i,height:o,top:a,left:c}=s.current;if(e||!r.current||!i||!o)return;r.current.dataset.motionPopId=n;const l=document.createElement("style");return document.head.appendChild(l),l.sheet&&l.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${i}px !important;
            height: ${o}px !important;
            top: ${a}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(l)}},[e]),m.createElement(nT,{isPresent:e,childRef:r,sizeRef:s},m.cloneElement(t,{ref:r}))}const cc=({children:t,initial:e,isPresent:n,onExitComplete:r,custom:s,presenceAffectsLayout:i,mode:o})=>{const a=xi(sT),c=m.useId(),l=m.useMemo(()=>({id:c,initial:e,isPresent:n,custom:s,onExitComplete:u=>{a.set(u,!0);for(const h of a.values())if(!h)return;r&&r()},register:u=>(a.set(u,!1),()=>a.delete(u))}),i?void 0:[n]);return m.useMemo(()=>{a.forEach((u,h)=>a.set(h,!1))},[n]),m.useEffect(()=>{!n&&!a.size&&r&&r()},[n]),o==="popLayout"&&(t=m.createElement(rT,{isPresent:n},t)),m.createElement(ya.Provider,{value:l},t)};function sT(){return new Map}function iT(t){return m.useEffect(()=>()=>t(),[])}const $n=t=>t.key||"";function oT(t,e){t.forEach(n=>{const r=$n(n);e.set(r,n)})}function aT(t){const e=[];return m.Children.forEach(t,n=>{m.isValidElement(n)&&e.push(n)}),e}const zu=({children:t,custom:e,initial:n=!0,onExitComplete:r,exitBeforeEnter:s,presenceAffectsLayout:i=!0,mode:o="sync"})=>{const a=m.useContext(_u).forceRender||tT()[0],c=_y(),l=aT(t);let u=l;const h=m.useRef(new Map).current,f=m.useRef(u),p=m.useRef(new Map).current,g=m.useRef(!0);if(gi(()=>{g.current=!1,oT(l,p),f.current=u}),iT(()=>{g.current=!0,p.clear(),h.clear()}),g.current)return m.createElement(m.Fragment,null,u.map(b=>m.createElement(cc,{key:$n(b),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:i,mode:o},b)));u=[...u];const y=f.current.map($n),v=l.map($n),S=y.length;for(let b=0;b<S;b++){const x=y[b];v.indexOf(x)===-1&&!h.has(x)&&h.set(x,void 0)}return o==="wait"&&h.size&&(u=[]),h.forEach((b,x)=>{if(v.indexOf(x)!==-1)return;const w=p.get(x);if(!w)return;const E=y.indexOf(x);let _=b;if(!_){const C=()=>{h.delete(x);const R=Array.from(p.keys()).filter(O=>!v.includes(O));if(R.forEach(O=>p.delete(O)),f.current=l.filter(O=>{const $=$n(O);return $===x||R.includes($)}),!h.size){if(c.current===!1)return;a(),r&&r()}};_=m.createElement(cc,{key:$n(w),isPresent:!1,onExitComplete:C,custom:e,presenceAffectsLayout:i,mode:o},w),h.set(x,_)}u.splice(E,0,_)}),u=u.map(b=>{const x=b.key;return h.has(x)?b:m.createElement(cc,{key:$n(b),isPresent:!0,presenceAffectsLayout:i,mode:o},b)}),m.createElement(m.Fragment,null,h.size?u:u.map(b=>m.cloneElement(b)))};function Ty(t){const e=xi(()=>ft(t)),{isStatic:n}=m.useContext(wu);if(n){const[,r]=m.useState(t);m.useEffect(()=>e.on("change",r),[])}return e}const cT=t=>t&&typeof t=="object"&&t.mix,lT=t=>cT(t)?t.mix:void 0;function uT(...t){const e=!Array.isArray(t[0]),n=e?0:-1,r=t[0+n],s=t[1+n],i=t[2+n],o=t[3+n],a=Ea(s,i,{mixer:lT(i[0]),...o});return e?a(r):a}function Cy(t,e){const n=Ty(e()),r=()=>n.set(e());return r(),gi(()=>{const s=()=>ce.update(r,!1,!0),i=t.map(o=>o.on("change",s));return()=>{i.forEach(o=>o()),wt(r)}}),n}function dT(t){Ps.current=[],t();const e=Cy(Ps.current,t);return Ps.current=void 0,e}function Ue(t,e,n,r){if(typeof t=="function")return dT(t);const s=typeof e=="function"?e:uT(e,n,r);return Array.isArray(t)?Kh(t,s):Kh([t],([i])=>s(i))}function Kh(t,e){const n=xi(()=>[]);return Cy(t,()=>{n.length=0;const r=t.length;for(let s=0;s<r;s++)n[s]=t[s].get();return e(n)})}function hT(t,e,n){m.useInsertionEffect(()=>t.on(e,n),[t,e,n])}function fT(t,e,n){return typeof t=="string"?t=document.querySelectorAll(t):t instanceof Element&&(t=[t]),Array.from(t||[])}const lo=new WeakMap;let an;function pT(t,e){if(e){const{inlineSize:n,blockSize:r}=e[0];return{width:n,height:r}}else return t instanceof SVGElement&&"getBBox"in t?t.getBBox():{width:t.offsetWidth,height:t.offsetHeight}}function mT({target:t,contentRect:e,borderBoxSize:n}){var r;(r=lo.get(t))===null||r===void 0||r.forEach(s=>{s({target:t,contentSize:e,get size(){return pT(t,n)}})})}function gT(t){t.forEach(mT)}function yT(){typeof ResizeObserver>"u"||(an=new ResizeObserver(gT))}function vT(t,e){an||yT();const n=fT(t);return n.forEach(r=>{let s=lo.get(r);s||(s=new Set,lo.set(r,s)),s.add(e),an==null||an.observe(r)}),()=>{n.forEach(r=>{const s=lo.get(r);s==null||s.delete(e),s!=null&&s.size||an==null||an.unobserve(r)})}}const uo=new Set;let Ns;function bT(){Ns=()=>{const t={width:window.innerWidth,height:window.innerHeight},e={target:window,size:t,contentSize:t};uo.forEach(n=>n(e))},window.addEventListener("resize",Ns)}function xT(t){return uo.add(t),Ns||bT(),()=>{uo.delete(t),!uo.size&&Ns&&(Ns=void 0)}}function wT(t,e){return typeof t=="function"?xT(t):vT(t,e)}const kT=50,Gh=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),ST=()=>({time:0,x:Gh(),y:Gh()}),ET={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function Zh(t,e,n,r){const s=n[e],{length:i,position:o}=ET[e],a=s.current,c=n.time;s.current=t["scroll"+o],s.scrollLength=t["scroll"+i]-t["client"+i],s.offset.length=0,s.offset[0]=0,s.offset[1]=s.scrollLength,s.progress=Fr(0,s.scrollLength,s.current);const l=r-c;s.velocity=l>kT?0:Mu(s.current-a,l)}function _T(t,e,n){Zh(t,"x",e,n),Zh(t,"y",e,n),e.time=n}function TT(t,e){const n={x:0,y:0};let r=t;for(;r&&r!==e;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if(r.tagName==="svg"){const s=r.getBoundingClientRect();r=r.parentElement;const i=r.getBoundingClientRect();n.x+=s.left-i.left,n.y+=s.top-i.top}else if(r instanceof SVGGraphicsElement){const{x:s,y:i}=r.getBBox();n.x+=s,n.y+=i;let o=null,a=r.parentNode;for(;!o;)a.tagName==="svg"&&(o=a),a=r.parentNode;r=o}else break;return n}const CT={All:[[0,0],[1,1]]},wl={start:0,center:.5,end:1};function Jh(t,e,n=0){let r=0;if(wl[t]!==void 0&&(t=wl[t]),typeof t=="string"){const s=parseFloat(t);t.endsWith("px")?r=s:t.endsWith("%")?t=s/100:t.endsWith("vw")?r=s/100*document.documentElement.clientWidth:t.endsWith("vh")?r=s/100*document.documentElement.clientHeight:t=s}return typeof t=="number"&&(r=e*t),n+r}const RT=[0,0];function AT(t,e,n,r){let s=Array.isArray(t)?t:RT,i=0,o=0;return typeof t=="number"?s=[t,t]:typeof t=="string"&&(t=t.trim(),t.includes(" ")?s=t.split(" "):s=[t,wl[t]?t:"0"]),i=Jh(s[0],n,r),o=Jh(s[1],e),i-o}const PT={x:0,y:0};function IT(t){return"getBBox"in t&&t.tagName!=="svg"?t.getBBox():{width:t.clientWidth,height:t.clientHeight}}function OT(t,e,n){let{offset:r=CT.All}=n;const{target:s=t,axis:i="y"}=n,o=i==="y"?"height":"width",a=s!==t?TT(s,t):PT,c=s===t?{width:t.scrollWidth,height:t.scrollHeight}:IT(s),l={width:t.clientWidth,height:t.clientHeight};e[i].offset.length=0;let u=!e[i].interpolate;const h=r.length;for(let f=0;f<h;f++){const p=AT(r[f],l[o],c[o],a[i]);!u&&p!==e[i].interpolatorOffsets[f]&&(u=!0),e[i].offset[f]=p}u&&(e[i].interpolate=Ea(e[i].offset,Yg(r)),e[i].interpolatorOffsets=[...e[i].offset]),e[i].progress=e[i].interpolate(e[i].current)}function NT(t,e=t,n){if(n.x.targetOffset=0,n.y.targetOffset=0,e!==t){let r=e;for(;r&&r!==t;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=e===t?e.scrollWidth:e.clientWidth,n.y.targetLength=e===t?e.scrollHeight:e.clientHeight,n.x.containerLength=t.clientWidth,n.y.containerLength=t.clientHeight}function LT(t,e,n,r={}){return{measure:()=>NT(t,r.target,n),update:s=>{_T(t,n,s),(r.offset||r.target)&&OT(t,n,r)},notify:()=>e(n)}}const cs=new WeakMap,Yh=new WeakMap,lc=new WeakMap,Xh=t=>t===document.documentElement?window:t;function jT(t,{container:e=document.documentElement,...n}={}){let r=lc.get(e);r||(r=new Set,lc.set(e,r));const s=ST(),i=LT(e,t,s,n);if(r.add(i),!cs.has(e)){const a=()=>{for(const f of r)f.measure()},c=()=>{for(const f of r)f.update(Me.timestamp)},l=()=>{for(const f of r)f.notify()},u=()=>{ce.read(a,!1,!0),ce.read(c,!1,!0),ce.update(l,!1,!0)};cs.set(e,u);const h=Xh(e);window.addEventListener("resize",u,{passive:!0}),e!==document.documentElement&&Yh.set(e,wT(e,u)),h.addEventListener("scroll",u,{passive:!0})}const o=cs.get(e);return ce.read(o,!1,!0),()=>{var a;wt(o);const c=lc.get(e);if(!c||(c.delete(i),c.size))return;const l=cs.get(e);cs.delete(e),l&&(Xh(e).removeEventListener("scroll",l),(a=Yh.get(e))===null||a===void 0||a(),window.removeEventListener("resize",l))}}function Qh(t,e){Zk(!!(!e||e.current))}const DT=()=>({scrollX:ft(0),scrollY:ft(0),scrollXProgress:ft(0),scrollYProgress:ft(0)});function MT({container:t,target:e,layoutEffect:n=!0,...r}={}){const s=xi(DT);return(n?gi:m.useEffect)(()=>(Qh("target",e),Qh("container",t),jT(({x:o,y:a})=>{s.scrollX.set(o.current),s.scrollXProgress.set(o.progress),s.scrollY.set(a.current),s.scrollYProgress.set(a.progress)},{...r,container:(t==null?void 0:t.current)||void 0,target:(e==null?void 0:e.current)||void 0})),[t,e,JSON.stringify(r.offset)]),s}const ef="#007FFF",oM="#003DF2",Ws="#EA8118",Ry="#3E3A39",nn="'Magistral', 'Inter', sans-serif",G="'Inter', 'Roboto', sans-serif",Hn=[.22,1,.36,1],FT=Sx`
  @font-face {
    font-family: 'Magistral';
    font-style: italic;
    font-weight: 700;
    src: local('Magistral'), url('${Ne("/fonts/magistral-bold-italic.woff")}') format('woff');
    font-display: swap;
  }
  @font-face {
    font-family: 'Magistral';
    font-style: normal;
    font-weight: 900;
    src: local('Magistral'), url('${Ne("/fonts/magistral-black.woff")}') format('woff');
    font-display: swap;
  }

  :root, [data-theme='dark'] {
    --v29-primary: #007FFF;
    --v29-eyebrow-text: #3399FF;
    --v29-accent-art: ${Ws};
    --v29-accent-text: #EA8118;
    --v29-primary-hover: #003DF2;
    --v29-on-primary: #FFFFFF;
    --v29-page: #071120;
    --v29-raised: #0C1B33;
    --v29-card: #102341;
    --v29-text: #F4F7FB;
    --v29-muted: #93A3BC;
    --v29-line: rgba(0, 127, 255, 0.24);
    --v29-line-soft: rgba(147, 163, 188, 0.16);
    --v29-nav: rgba(7, 17, 32, 0.82);
    --v29-surface-alt: #0A1830;
    --v29-card-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.05),
      0 1px 3px rgba(0, 0, 0, 0.2);
    --v29-card-shadow-hover:
      inset 0 1px 0 rgba(255, 255, 255, 0.1),
      0 12px 30px -8px rgba(0, 0, 0, 0.6),
      0 4px 12px -2px rgba(107, 132, 161, 0.2);
    --v29-popover-shadow: 0 18px 40px -12px rgba(0, 0, 0, 0.65);
    /* Fleet-web workspace panel shadow (tokens.ts SHADOW_DARK.lg there). */
    --v29-shell-shadow:
      0 4px 12px rgba(0, 0, 0, 0.55),
      0 2px 4px rgba(0, 0, 0, 0.4);
    /* Semantic status pair — dark values are lightened to clear WCAG AA on
       the navy cards (#102341). */
    --v29-danger: #F26B6F;
    --v29-danger-bg: rgba(229, 72, 77, 0.16);
    --v29-warning: #F5A93B;
    --v29-warning-bg: rgba(234, 129, 24, 0.16);
    /* Native-select caret (chevron-down, lucide geometry) — a data-URI per
       theme because background-image cannot take currentColor. Muted ink. */
    --v29-select-caret: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2393A3BC' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
  }
  [data-theme='light'] {
    --v29-primary: #007FFF;
    --v29-eyebrow-text: #003DF2;
    --v29-accent-text: #A85500;
    --v29-primary-hover: #003DF2;
    --v29-on-primary: #FFFFFF;
    --v29-page: #FFFFFF;
    --v29-raised: #F5F5F7;
    --v29-card: #FFFFFF;
    --v29-text: ${Ry};
    --v29-muted: #6E7480;
    --v29-line: rgba(0, 61, 242, 0.16);
    --v29-line-soft: rgba(62, 58, 57, 0.12);
    --v29-nav: rgba(255, 255, 255, 0.86);
    --v29-surface-alt: #F5F5F7;
    --v29-card-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.7),
      0 1px 3px rgba(11, 15, 26, 0.05);
    --v29-card-shadow-hover:
      inset 0 1px 0 rgba(255, 255, 255, 0.7),
      0 12px 30px -8px rgba(11, 15, 26, 0.08),
      0 4px 12px -2px rgba(11, 15, 26, 0.03);
    --v29-popover-shadow: 0 18px 40px -12px rgba(15, 23, 42, 0.28);
    /* Fleet-web workspace panel shadow (tokens.ts SHADOW.lg there). */
    --v29-shell-shadow:
      0 4px 12px rgba(10, 31, 68, 0.08),
      0 2px 4px rgba(10, 31, 68, 0.04);
    --v29-danger: #B42318;
    --v29-danger-bg: rgba(229, 72, 77, 0.12);
    --v29-warning: #B25E09;
    --v29-warning-bg: rgba(234, 129, 24, 0.14);
    --v29-select-caret: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236E7480' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
  }

  /* Fixed brand ink for DARK TEXT ON AN ALWAYS-WHITE SUB-SURFACE — the guest
     /track search field and the Not-Found card, which are always
     --v29-on-primary (white) regardless of theme, so their text must always
     be dark. Declared OUTSIDE the light/dark blocks on purpose: it does not
     invert (a fixed swatch, like the logo), because the surface it sits on
     never inverts either. The /track hero BAND itself uses the theme's own
     --v29-primary (brand blue, flat, no gradient) — this token is not a
     surface background. */
  :root {
    --v29-navy: #0D1F3C;

    /* Filled primary action — owner decision OD-2 (2026-10-01): on the
       Official Website and Consignee web the solid primary is #003DF2 with a
       white label (7.1:1), in both themes. #007FFF (--v29-primary) stays the
       brand / accent / focus / tint colour. Hover is not decided yet (OD-2
       OPEN), so the interim hover keeps this fill and only lifts. */
    --v29-primary-fill: #003DF2;

    /* Control geometry — house web-adapt at portal 42px height, not macOS
       System Settings pixels. This-Mac Settings (26.5.1 Light) measure:
       24pt push buttons 4.5pt, Search 14pt capsule, pop-ups 20pt circles,
       fill-only ΔL≈19. Do not paste those onto these tokens. Partition
       (fields squarer, buttons rounder, tags squarer still):
       - fields: --v29-radius-field 6px
       - buttons + native <select>: --v29-radius-button 13px
       - panels: --v29-radius-container 12px
       Stroke: --v29-line-soft is a 1px web hairline (~12% light ink), not
       Settings fill-only (~7.5% if a CSS stroke is required). Do not mint
       a third gray. Geometry does not invert with theme. */
    --v29-radius-field: 6px;
    --v29-radius-button: 13px;
    /* Panels / popovers — existing 12px popover-panel tier. */
    --v29-radius-container: 12px;
    /* Status tag radius — fleet tag law (StatusIndicator: border:none +
       RADIUS.sm = 4px there). Tags are squarer than any control. */
    --v29-radius-tag: 4px;
  }

  html { overflow-x: hidden; }
  body { margin: 0; background: var(--v29-page); color: var(--v29-text); font-family: ${G}; -webkit-font-smoothing: antialiased; }
  
  /* Make sure the main content is readable */
  * { box-sizing: border-box; }
`,_t={phoneDelivery:Ne("/videos/pod-review/navigation-to-qr-proof-v2.mp4?v=workshop-1"),phoneDeliveryDark:Ne("/videos/pod-review/navigation-to-qr-proof-v2-dark.mp4?v=workshop-1"),phoneConnections:Ne("/videos/broll/broll-phone-highway.mp4"),phoneEfficiency:Ne("/videos/broll/broll-phone-topdown.mp4"),phoneOutcomes:Ne("/videos/broll/broll-phone-vanbay.mp4"),phoneAppPoster:Ne("/images/phone-appvideo-poster.jpg?v=workshop-1"),phoneAppPosterDark:Ne("/images/phone-appvideo-poster-dark.jpg?v=workshop-1"),phoneConnectionsPoster:Ne("/images/broll/broll-phone-highway-poster.jpg"),phoneEfficiencyPoster:Ne("/images/broll/broll-phone-topdown-poster.jpg"),phoneOutcomesPoster:Ne("/images/broll/broll-phone-vanbay-poster.jpg")},_a="@media (max-width: 1100px) and (min-height: 561px), (max-width: 600px)",$T="@media (max-height: 560px) and (min-width: 601px)",VT=T.section`
  position: relative;
  z-index: 5;
  background: var(--v29-page);
  border-top: 1px solid var(--v29-line-soft);
`,UT=T.div`
  height: 400vh;
  position: relative;
`,BT=T.div`
  position: sticky;
  top: 0;
  height: 100vh;
  display: grid;
  place-items: center;
  overflow: hidden;
  /* The phone's height: as tall as the screen allows under the nav, with room
     left beneath it for its shadow. The copy columns size themselves off half
     its width. */
  --phone-h: min(620px, calc(100vh - 136px));
  --phone-aspect: calc(288 / 620);
  --phone-half: calc(var(--phone-h) * var(--phone-aspect) / 2);
  /* Short screens: keep the phone clear of the fixed nav. */
  @media (max-height: 780px) {
    padding: 72px 0 44px;
  }
  /* Stacked. The words sit directly above the phone at one fixed distance, and
     the pair is centred in the screen under the nav. All four captions share
     the first row and hang from its bottom edge, so a shorter caption never
     opens a wider gap and the phone never moves between slides. The second row
     gives the phone whatever height is left, up to a cap. */
  ${_a} {
    --stack-gap: clamp(20px, 3vh, 32px);
    --phone-cap: min(600px, 64vh);
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto minmax(0, var(--phone-cap));
    /* If the words ever outgrow the screen, lose the bottom, not the top. */
    align-content: safe center;
    row-gap: var(--stack-gap);
    /* The words start a clear step below the fixed nav. How tall the nav is
       depends on the screen (its button wraps on the narrowest phones), so
       the page measures it: see useNavHeight. 73 px is its usual height on a
       phone, used until that has run. */
    padding: calc(var(--nav-h, 73px) + 19px) 0
      max(48px, calc(env(safe-area-inset-bottom) + 40px));
    /* Fit the part of the screen a phone browser always shows. */
    @supports (height: 100svh) {
      height: 100svh;
      --stack-gap: clamp(20px, 3svh, 32px);
      --phone-cap: min(600px, 64svh);
    }
  }
  /* A small phone with its browser bars showing: give the phone every pixel. */
  @media (max-width: 600px) and (max-height: 640px) {
    --stack-gap: 16px;
    padding-top: calc(var(--nav-h, 73px) + 16px);
    padding-bottom: 36px;
  }
`,HT=T.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(
    50% 70% at 50% 50%,
    rgba(0, 127, 255, 0.08),
    transparent 75%
  );
  pointer-events: none;
`,zT=T.div`
  position: relative;
  height: var(--phone-h);
  aspect-ratio: var(--phone-aspect);
  z-index: 2;
  /* The phone inside sizes its corners, bezel and depth from this box. */
  container-type: size;
  ${_a} {
    grid-area: 2 / 1;
    height: 100%;
  }
`,WT=T(ze.div)`
  position: absolute;
  left: -26%;
  right: -26%;
  bottom: -8.5%;
  height: 14%;
  border-radius: 50%;
  background: radial-gradient(
    closest-side,
    rgba(9, 18, 38, 0.2),
    rgba(9, 18, 38, 0.07) 58%,
    rgba(9, 18, 38, 0)
  );
  filter: blur(18px);
  pointer-events: none;
  /* The tight, dark line where the phone meets the floor. */
  &::after {
    content: '';
    position: absolute;
    left: 27%;
    right: 27%;
    top: 36%;
    height: 16%;
    border-radius: 50%;
    background: radial-gradient(
      closest-side,
      rgba(9, 18, 38, 0.5),
      rgba(9, 18, 38, 0)
    );
  }
  /* On navy a dark shadow disappears: the floor catches the screen's light. */
  html[data-theme='dark'] & {
    background: radial-gradient(
      closest-side,
      rgba(0, 127, 255, 0.22),
      rgba(0, 127, 255, 0.07) 55%,
      rgba(0, 127, 255, 0)
    );
    &::after {
      background: radial-gradient(
        closest-side,
        rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0)
      );
    }
  }
`,qT=T(ze.div)`
  position: absolute;
  inset: 0;
  transform-style: preserve-3d;
`,KT=T.div`
  position: absolute;
  inset: 0;
  --phone-radius: 44px;
  --phone-bezel: 8px;
  /* A real phone is about a twentieth as thick as it is tall. */
  --phone-depth: 26px;
  /* The stacked phone is smaller. */
  ${_a} {
    --phone-radius: 34px;
    --phone-bezel: 6px;
    --phone-depth: 20px;
  }
  /* Where the browser can measure the phone, keep those proportions at every
     size, so a small phone is still a phone and not a capsule. */
  @supports (width: 1cqh) {
    --phone-radius: 7.1cqh;
    --phone-bezel: 1.3cqh;
    --phone-depth: 4.2cqh;
  }
  border-radius: var(--phone-radius);
  /* The face: a polished rim around the glass, lit from the top-left. */
  background: linear-gradient(
    140deg,
    #66728a 0%,
    #1a2233 16%,
    #070b14 46%,
    #131b2b 78%,
    #4a566e 100%
  );
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.3), inset 0 0 0 3px #05080f;
  transform-style: preserve-3d;
`,GT=Array.from({length:10},(t,e)=>-(e+1)/10),ZT=T.div`
  position: absolute;
  inset: 0;
  border-radius: inherit;
  transform-style: preserve-3d;
  pointer-events: none;
  span {
    position: absolute;
    inset: 0;
    border-radius: inherit;
    /* Brushed titanium band, bright where the light lands. */
    background: linear-gradient(
      180deg,
      #e3e7ee 0%,
      #b6bfce 9%,
      #8c96aa 42%,
      #6d778c 80%,
      #4b5366 100%
    );
  }
  /* The chamfer next to the face catches a highlight. */
  span:first-child {
    background: linear-gradient(180deg, #f6f8fb 0%, #cbd2de 18%, #949eb1 100%);
  }
  /* Back glass. */
  span:last-child {
    background: linear-gradient(180deg, #303949, #161c29);
  }
`,Wi=T.span`
  position: absolute;
  ${t=>t.$side==="left"?"left: -3px;":"right: -3px;"}
  top: ${t=>t.$top}%;
  height: ${t=>t.$height}%;
  width: 4px;
  border-radius: 2px;
  background: linear-gradient(180deg, #eef1f6, #8c96aa);
  transform: translateZ(calc(var(--phone-depth) * -0.5));
  pointer-events: none;
`,JT=T.div`
  position: absolute;
  inset: var(--phone-bezel);
  border-radius: calc(var(--phone-radius) - var(--phone-bezel));
  overflow: hidden;
  background: #000;
  isolation: isolate;
  /* Camera cut-out. */
  &::before {
    content: '';
    position: absolute;
    top: 2%;
    left: 50%;
    width: 30%;
    height: 3.6%;
    border-radius: 999px;
    background: #000;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.06);
    transform: translateX(-50%);
    z-index: 3;
  }
  /* Glass: a band of reflected light that crosses the screen as the phone
     turns (--sheen comes from the rig), and a darkened rim. */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(
      108deg,
      rgba(255, 255, 255, 0) 32%,
      rgba(255, 255, 255, 0.16) 45%,
      rgba(255, 255, 255, 0.04) 53%,
      rgba(255, 255, 255, 0) 64%
    );
    background-size: 260% 100%;
    background-position: var(--sheen, 30%) 0;
    box-shadow: inset 0 0 18px rgba(0, 0, 0, 0.55);
    pointer-events: none;
    z-index: 2;
  }
`,uc=T(ze.video)`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,YT=T(ze.div)`
  /* Fit the complete recording across the glass, below the camera cut-out. */
  position:absolute; inset:auto 0 0; aspect-ratio:750 / 1550; background:var(--v29-surface-alt);
  video { display:block; width:100%; height:100%; object-fit:contain; }
`,XT=T.button`
  position: absolute;
  inset: 0;
  z-index: 4;
  width: 100%;
  height: 100%;
  padding: 0;
  border: 0;
  border-radius: inherit;
  background: transparent;
  cursor: pointer;
  &:focus-visible { outline: 3px solid var(--v29-eyebrow-text); outline-offset: -4px; }
`,QT=T.span`
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  font: 600 12px/1.25 ${G};
  color: var(--v29-muted);
`,qi=T(ze.div)`
  --edge: ${t=>t.$side==="left"?"max(64px, 7vw)":"max(48px, 5vw)"};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${t=>t.$side==="left"?"left: var(--edge);":"right: var(--edge);"}
  ${t=>t.$side==="left"?"text-align: left;":"text-align: right;"}
  /* Only as wide as the space beside the phone, so the copy can't run under it. */
  width: min(420px, calc(50vw - var(--phone-half) - 16px - var(--edge)));
  padding: 0 24px;
  pointer-events: auto;
  z-index: 3;

  .eyebrow {
    font-family: ${G};
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--v29-eyebrow-text);
    margin: 0 0 16px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    &::before {
      content: '';
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: ${Ws};
      box-shadow: 0 0 6px ${Ws};
    }
  }
  h2 {
    font-family: ${nn};
    font-style: italic;
    font-size: clamp(2rem, 1.4rem + 2.6vw, 3rem);
    font-weight: 700;
    letter-spacing: -0.018em;
    line-height: 1.04;
    margin: 0 0 16px;
    color: var(--v29-text);
    text-wrap: balance;
  }
  .accent {
    font-style: italic;
    font-weight: 700;
  }
  p {
    font-family: ${G};
    font-size: clamp(1rem, 0.9rem + 0.4vw, 1.125rem);
    line-height: 1.6;
    color: var(--v29-muted);
    margin: 0;
  }
  /* The column narrows here, so the heading scales down with it. */
  @media (min-width: 1101px) and (max-width: 1439px) {
    h2 {
      font-size: clamp(2rem, 3vw, 3rem);
    }
  }
  /* Centred on the phone, which sits 14 px low here (see PinnedStage). */
  @media (max-height: 780px) {
    top: calc(50% + 14px);
  }
  ${$T} {
    --edge: clamp(12px, 4vw, 96px);
    padding: 0 12px;
    h2 {
      /* Sized by the height, and by the width so a narrow column still fits
         whole words. */
      font-size: clamp(1.35rem, min(7.5vh, 4.2vw), 2.4rem);
      margin-bottom: 8px;
    }
    p {
      font-size: 0.875rem;
      line-height: 1.5;
    }
    .eyebrow {
      margin-bottom: 8px;
    }
  }
  /* Stacked: every caption takes the same grid cell above the phone and hangs
     from its bottom edge (see PinnedStage). */
  ${_a} {
    position: relative;
    grid-area: 1 / 1;
    align-self: end;
    top: auto;
    left: auto;
    right: auto;
    transform: none;
    width: 100%;
    max-width: 36rem;
    padding: 0 24px;
    text-align: center;
    z-index: 6;
    h2 {
      font-size: clamp(1.75rem, 1.25rem + 2.5vw, 2.5rem);
      margin-bottom: 10px;
    }
    p {
      font-size: clamp(0.95rem, 0.9rem + 0.25vw, 1.0625rem);
      line-height: 1.5;
      text-wrap: pretty;
    }
    .eyebrow {
      margin-bottom: 10px;
    }
  }
  /* A small phone with its browser bars showing: smaller words, bigger phone. */
  @media (max-width: 600px) and (max-height: 640px) {
    h2 {
      font-size: 1.5rem;
      margin-bottom: 6px;
    }
    p {
      font-size: 0.875rem;
      line-height: 1.45;
    }
    .eyebrow {
      margin-bottom: 6px;
    }
  }
`;function eC(t,e){m.useLayoutEffect(()=>{const n=t==null?void 0:t.current,r=e.current;if(!n||!r||typeof ResizeObserver!="function")return;const s=()=>r.style.setProperty("--nav-h",`${Math.ceil(n.getBoundingClientRect().height)}px`);s();const i=new ResizeObserver(s);return i.observe(n,{box:"border-box"}),()=>i.disconnect()},[t,e])}function aM({navRef:t,suspended:e=!1}){const n=uu(),{mode:r}=pi(),[s,i]=m.useState(null),[o,a]=m.useState(!1),c=s??!n;m.useEffect(()=>{i(null)},[n]);const l=m.useRef(null),u=m.useRef(null),[h,f]=m.useState(!1);m.useEffect(()=>{const U=u.current;if(!U||typeof IntersectionObserver!="function")return;const P=new IntersectionObserver(([D])=>f(D.isIntersecting),{rootMargin:"320px 0px"});return P.observe(U),()=>P.disconnect()},[]),eC(t,l);const{scrollYProgress:p}=MT({target:l,offset:["start start","end end"]}),g=Ue(p,U=>Math.min(3,Math.floor(U*4))),[y,v]=m.useState(0);hT(g,"change",U=>v(U)),m.useEffect(()=>{var we;const U=[...((we=l.current)==null?void 0:we.querySelectorAll("video[data-pin-video]"))??[]],P=M=>{var Te;const Ee=M.getBoundingClientRect(),_e=Ee.bottom>0&&Ee.top<window.innerHeight;!c||e||document.hidden||!_e||M.dataset.active==="false"?(M.pause(),M.dataset.pinStory&&(!_e||M.dataset.active==="false")&&M.readyState>=1&&M.currentTime>0&&(M.currentTime=0)):(Te=M.play())==null||Te.catch(()=>{})},D=new IntersectionObserver(M=>{M.forEach(Ee=>P(Ee.target))}),de=()=>U.forEach(P);return U.forEach(M=>D.observe(M)),de(),document.addEventListener("visibilitychange",de),()=>{D.disconnect(),document.removeEventListener("visibilitychange",de),U.forEach(M=>M.pause())}},[c,e,y]);function S(U){const P=U.target;P.dataset.active==="true"&&a(!P.paused)}function b(){var P,D;const U=(P=l.current)==null?void 0:P.querySelector('video[data-active="true"]');U&&(i(U.paused),U.paused?(D=U.play())==null||D.catch(()=>a(!1)):U.pause())}const x=Ue(p,[0,.2,.3,.45,.55,.7,.8,1],[-2.5,-2.5,15,15,-15,-15,15,15]),w=Ty(-2.5),E=Ue(x,[-15,15],["7%","-7%"]),_=Ue(x,[-15,15],["12%","88%"]),C=Ue(p,[0,.03,.22,.27],[0,1,1,0]),R=Ue(p,[.23,.28,.47,.52],[0,1,1,0]),O=Ue(p,[.48,.53,.72,.77],[0,1,1,0]),$=Ue(p,[.73,.78,1],[0,1,1]),B=Ue(p,[0,.02,.05,.22,.24],["var(--v29-muted)","var(--v29-muted)","var(--v29-text)","var(--v29-text)","var(--v29-muted)"]),q=Ue(p,[.25,.27,.3,.47,.49],["var(--v29-muted)","var(--v29-muted)","var(--v29-text)","var(--v29-text)","var(--v29-muted)"]),H=Ue(p,[.5,.52,.55,.72,.74],["var(--v29-muted)","var(--v29-muted)","var(--v29-text)","var(--v29-text)","var(--v29-muted)"]),ee=Ue(p,[.75,.77,.8,.97,.99],["var(--v29-muted)","var(--v29-muted)","var(--v29-text)","var(--v29-text)","var(--v29-muted)"]),oe=Ue(p,[0,.02,.05,.22,.24],["var(--v29-muted)","var(--v29-muted)","var(--v29-accent-text)","var(--v29-accent-text)","var(--v29-muted)"]),te=Ue(p,[.25,.27,.3,.47,.49],["var(--v29-muted)","var(--v29-muted)","var(--v29-accent-text)","var(--v29-accent-text)","var(--v29-muted)"]),he=Ue(p,[.5,.52,.55,.72,.74],["var(--v29-muted)","var(--v29-muted)","var(--v29-accent-text)","var(--v29-accent-text)","var(--v29-muted)"]),le=Ue(p,[.75,.77,.8,.97,.99],["var(--v29-muted)","var(--v29-muted)","var(--v29-accent-text)","var(--v29-accent-text)","var(--v29-muted)"]);return d.jsx(VT,{id:"platform",children:d.jsx(UT,{ref:l,onPlayCapture:S,onPauseCapture:S,onLoadedMetadataCapture:S,children:d.jsxs(BT,{children:[d.jsx(HT,{}),d.jsxs(qi,{$side:"left",style:{opacity:n?y===0?1:0:C,pointerEvents:y===0?"auto":"none"},children:[d.jsx("p",{className:"eyebrow",children:"Lower cost per run"}),d.jsxs(ze.h2,{style:{color:n?"var(--v29-text)":B},children:["Every run,"," ",d.jsx(ze.span,{className:"accent",style:{color:n?"var(--v29-accent-text)":oe},children:"leaner."})]}),d.jsx("p",{children:"Shorter routes, fewer kilometres, fewer drivers idle — the plan that costs you the least, worked out every single run."})]}),d.jsxs(qi,{$side:"right",style:{opacity:n?y===1?1:0:R,pointerEvents:y===1?"auto":"none"},children:[d.jsx("p",{className:"eyebrow",children:"Built to scale"}),d.jsxs(ze.h2,{style:{color:n?"var(--v29-text)":q},children:["From one van to the"," ",d.jsx(ze.span,{className:"accent",style:{color:n?"var(--v29-accent-text)":te},children:"whole fleet."})]}),d.jsx("p",{children:"Ten drops or ten thousand, it plans the same — add drivers, warehouses and volume without changing a thing."})]}),d.jsxs(qi,{$side:"left",style:{opacity:n?y===2?1:0:O,pointerEvents:y===2?"auto":"none"},children:[d.jsx("p",{className:"eyebrow",children:"Made for trade"}),d.jsxs(ze.h2,{style:{color:n?"var(--v29-text)":H},children:["Built for the way"," ",d.jsx(ze.span,{className:"accent",style:{color:n?"var(--v29-accent-text)":he},children:"trade moves."})]}),d.jsx("p",{children:"Urgent drops, tight windows, drivers out all day — made for the pressure of industrial, automotive and logistics fleets."})]}),d.jsxs(qi,{$side:"right",style:{opacity:n?y===3?1:0:$,pointerEvents:y===3?"auto":"none"},children:[d.jsx("p",{className:"eyebrow",children:"Ready from day one"}),d.jsxs(ze.h2,{style:{color:n?"var(--v29-text)":ee},children:["Up and"," ",d.jsx(ze.span,{className:"accent",style:{color:n?"var(--v29-accent-text)":le},children:"running fast."})]}),d.jsx("p",{children:"Drivers pick it up in a shift, dispatch in an afternoon — no long rollout, no fighting the software."})]}),d.jsxs(zT,{ref:u,"data-testid":"home-phone",children:[d.jsx(WT,{"aria-hidden":"true",style:{x:n?"5%":E}}),d.jsx(qT,{"data-testid":"home-phone-rig",style:{rotateY:n?w:x,transformPerspective:1300,"--sheen":n?"22%":_},children:d.jsxs(KT,{"data-testid":"home-phone-face",children:[d.jsx(ZT,{"data-testid":"home-phone-body","aria-hidden":"true",children:GT.map(U=>d.jsx("span",{style:{transform:`translateZ(calc(var(--phone-depth) * ${U}))`}},U))}),d.jsx(Wi,{"aria-hidden":"true",$side:"left",$top:17,$height:5}),d.jsx(Wi,{"aria-hidden":"true",$side:"left",$top:25,$height:9}),d.jsx(Wi,{"aria-hidden":"true",$side:"left",$top:36,$height:9}),d.jsx(Wi,{"aria-hidden":"true",$side:"right",$top:29,$height:14}),d.jsxs(JT,{children:[d.jsx(YT,{animate:{opacity:y===0?1:0},transition:{duration:n?0:.9,ease:Hn},children:d.jsx(ua,{"data-pin-video":!0,"data-pin-story":"delivery","data-active":y===0,src:r==="dark"?_t.phoneDeliveryDark:_t.phoneDelivery,"aria-label":"Driver navigation, then the driver submits proof and the consignee opens the same QR-labelled package photo",poster:r==="dark"?_t.phoneAppPosterDark:_t.phoneAppPoster,muted:!0,loop:!0,playsInline:!0,preload:h&&y===0?"metadata":"none",canResume:U=>{const P=U.getBoundingClientRect();return c&&!e&&y===0&&P.bottom>0&&P.top<innerHeight}})}),d.jsx(uc,{"data-pin-video":!0,"data-active":y===1,src:_t.phoneConnections,poster:_t.phoneConnectionsPoster,loop:!0,muted:!0,playsInline:!0,preload:h&&y===1?"metadata":"none",animate:{opacity:y===1?1:0},transition:{duration:n?0:.9,ease:Hn}}),d.jsx(uc,{"data-pin-video":!0,"data-active":y===2,src:_t.phoneEfficiency,poster:_t.phoneEfficiencyPoster,loop:!0,muted:!0,playsInline:!0,preload:h&&y===2?"metadata":"none",animate:{opacity:y===2?1:0},transition:{duration:n?0:.9,ease:Hn}}),d.jsx(uc,{"data-pin-video":!0,"data-active":y===3,src:_t.phoneOutcomes,poster:_t.phoneOutcomesPoster,loop:!0,muted:!0,playsInline:!0,preload:h&&y===3?"metadata":"none",animate:{opacity:y===3?1:0},transition:{duration:n?0:.9,ease:Hn}}),d.jsx(XT,{type:"button","aria-label":(o?"Pause":"Play")+" phone recording",onClick:b})]})]})}),y===0&&d.jsx(QT,{children:"Synthetic delivery · POD prototype"})]})]})})})}const tC="data:image/svg+xml,%3csvg%20width='50'%20height='48'%20viewBox='0%200%2050%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_92_17068)'%3e%3cpath%20d='M11.6425%2039.3715H34.8459V14.2129H9.565V37.2912C9.565%2038.4369%2010.4939%2039.3686%2011.6425%2039.3686V39.3715Z'%20fill='%2300FFE1'/%3e%3cpath%20d='M49.0411%200.0194683L49.0466%200.013906H49.0411H49.0383H49.0328L49.0466%200H26.0992C24.6111%200%2023.1845%200.58961%2022.1331%201.64368L9.565%2014.2118H23.6544V14.2257H34.832L34.8459%2039.3676L47.3418%2026.8718C48.432%2025.7815%2049.0466%2024.302%2049.0439%2022.7584L49.0383%200.0194683H49.0411Z'%20fill='%23007FFF'/%3e%3cpath%20d='M31.6722%204.74023L26.9358%209.47658H39.5902L39.6013%2022.0391L44.321%2017.3196V4.74023H31.6722Z'%20fill='white'/%3e%3cpath%20d='M28.7572%2018.9852C29.4886%2018.9852%2030.081%2019.5776%2030.081%2020.309V42.9534C30.0782%2043.7043%2029.7778%2044.4246%2029.2467%2044.9559L27.0273%2047.1752C26.5044%2047.6981%2025.798%2047.9901%2025.0609%2047.9901H2.89776C1.36255%2047.9901%200.116577%2046.7441%200.116577%2045.2089V32.638C0.116577%2031.5228%200.291791%2030.4102%200.633877%2029.3478L3.40393%2020.7735C3.7488%2019.7055%204.74168%2018.9824%205.86528%2018.9824H28.7544L28.7572%2018.9852Z'%20fill='%23007FFF'/%3e%3cpath%20d='M28.5579%2018.7285H9.36496V37.0343C9.36496%2038.1801%2010.2939%2039.1118%2011.4425%2039.1118H29.879V30.0395V20.0523C29.879%2019.3209%2029.2866%2018.7285%2028.5551%2018.7285H28.5579Z'%20fill='%23003DF2'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_92_17068'%3e%3crect%20width='49.16'%20height='47.9895'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",nC=T.img`
  height: ${t=>t.$height}px;
  width: auto;
  display: block;
  user-select: none;
  -webkit-user-drag: none;
`,rC=T.svg`
  height: ${t=>t.$height}px;
  width: auto;
  display: block;
  color: ${t=>t.theme.text.primary};
  user-select: none;

  /* Allow parent to override the wordmark color by setting --brand-logo-color.
     Used by surfaces (e.g. /demo) that pin a palette regardless of theme. */
  color: var(--brand-logo-color, ${t=>t.theme.text.primary});
`,sC=({height:t,ariaLabel:e})=>d.jsxs(rC,{$height:t,viewBox:"0 0 176 54",role:"img","aria-label":e,xmlns:"http://www.w3.org/2000/svg",children:[d.jsxs("g",{clipPath:"url(#sendit-go-clip)",children:[d.jsx("path",{d:"M65.9433 17.1938H78.3877C78.9324 17.1938 79.832 17.0631 79.832 16.316C79.832 15.762 79.253 15.5659 78.5807 15.3387L71.3811 12.7738C69.0715 11.9926 68.1408 10.265 68.1408 7.85585C68.1408 7.13994 68.2373 6.06607 68.3961 5.31592C69.1338 1.73326 70.8084 -0.000488281 74.9793 -0.000488281L89.3878 0.0648774L88.2019 5.72991L77.0897 5.63964C76.545 5.63964 75.3591 5.63964 75.3591 6.51741C75.3591 7.33292 76.4485 7.42942 77.0275 7.62551L83.231 9.76702C86.023 10.6448 87.3366 12.0455 87.3366 14.685C87.3366 15.3698 87.209 16.4437 87.0471 17.2249C86.244 21.1313 84.8029 22.8588 80.3113 22.8588H64.7854L65.9402 17.1938H65.9433Z",fill:"currentColor"}),d.jsx("path",{d:"M94.8598 22.8617C90.7698 22.8617 88.8835 21.296 88.8835 17.6542C88.8835 16.4714 88.98 15.3851 89.3629 13.6607C90.9939 6.37393 93.0701 5.73584 100.419 5.73584C105.692 5.73584 108.406 6.53579 108.406 10.4017C108.406 11.2328 108.31 12.3191 108.086 13.2124C107.606 15.1298 106.775 16.4091 104.537 16.4091H95.3018C95.2365 16.6644 95.2053 16.8885 95.2053 17.0815C95.2053 18.1678 96.0675 18.5195 97.9538 18.5195H106.165L105.237 22.8648H94.8536L94.8598 22.8617ZM100.771 12.4436C101.795 12.4436 101.922 12.0296 102.016 11.6437C102.047 11.516 102.047 11.2297 102.047 11.1643C102.047 10.1745 100.385 10.078 99.4915 10.078C97.5741 10.078 96.5842 10.3332 96.136 12.4436H100.771Z",fill:"currentColor"}),d.jsx("path",{d:"M110.741 9.43997C111.286 6.88448 112.755 5.92578 114.99 5.92578H122.849C126.173 5.92578 128.346 7.68443 128.346 10.6881C128.346 11.1675 128.281 11.871 128.187 12.3192L125.949 22.8648H119.687L121.604 13.9191C121.7 13.4086 121.763 12.8328 121.763 12.4499C121.763 10.8842 120.869 10.4049 118.824 10.4049H118.059C117.1 10.4049 116.717 10.7255 116.524 11.6842L114.127 22.868H107.865L110.741 9.44619V9.43997Z",fill:"currentColor"}),d.jsx("path",{d:"M135.601 22.8616C131.256 22.8616 129.435 20.3061 129.435 16.6612C129.435 15.7678 129.532 14.7749 129.722 13.754C130.746 8.63987 132.501 5.92564 138.574 5.92564H143.302L144.547 0.00537109H150.81L146.723 19.3474C146.244 21.5854 144.999 22.8616 142.44 22.8616H135.601ZM142.347 10.3985H139.47C137.267 10.3985 136.401 12.7641 136.084 14.3921C135.925 15.0955 135.891 15.7336 135.891 16.3406C135.891 17.5234 136.339 18.3856 137.905 18.3856H139.057C140.336 18.3856 140.719 18.065 141.005 16.7888L142.347 10.3985Z",fill:"currentColor"}),d.jsx("path",{d:"M154.327 5.44385H160.59L156.854 22.856H150.592L154.327 5.44385Z",fill:"currentColor"}),d.jsx("path",{d:"M154.679 3.7505L155.479 0.012207H161.741L160.941 3.7505H154.679Z",fill:"currentColor"}),d.jsx("path",{d:"M167.036 22.8684C164.226 22.8684 161.763 21.4615 161.763 18.4578C161.763 18.0438 161.795 17.4991 161.891 17.1162L163.401 9.91667H161.004L161.963 5.44379H164.359L165.511 0.012207H171.774L170.622 5.44379H175.447L174.488 9.91667H169.663L168.761 14.2401C168.633 14.7817 168.568 15.6782 168.568 16.1264C168.568 17.468 169.43 18.3955 171.699 18.3955H172.689L171.73 22.8684H167.033H167.036Z",fill:"currentColor"}),d.jsx("path",{d:"M102.356 43.8573C102.356 44.6946 102.3 45.6128 102.076 46.7023C100.765 52.8373 98.6456 53.7026 92.2304 53.7026C87.1817 53.7026 84.7849 52.3642 84.7849 48.4858C84.7849 47.6485 84.8409 46.6743 85.065 45.5848C86.3475 39.4498 88.4672 38.5845 94.8824 38.5845C99.9311 38.5845 102.356 39.9509 102.356 43.8542V43.8573ZM90.3908 47.7886C90.3908 49.043 90.976 49.7963 92.7907 49.7963C95.2995 49.7963 96.0247 48.6539 96.5009 46.4221C96.641 45.8089 96.7531 44.9716 96.7531 44.4985C96.7531 43.2441 96.1679 42.4909 94.3532 42.4909C91.8444 42.4909 91.1192 43.6332 90.6429 45.865C90.5029 46.4782 90.3908 47.3155 90.3908 47.7886Z",fill:"currentColor"}),d.jsx("path",{d:"M75.2291 46.5436C75.005 47.5023 74.4634 47.9505 73.5016 47.9505H71.9701C69.2839 47.9505 68.0389 47.2781 68.0389 44.9468C68.0389 44.2464 68.1696 43.0605 68.3906 42.0084C69.315 37.5324 70.8496 36.7014 74.3669 36.7014L104.454 36.692L107.227 33.9186L104.485 31.1764H104.488L104.448 31.1328L73.1187 31.1422C65.1285 31.1422 62.4143 33.6665 60.9762 41.3672C60.6899 42.8986 60.5623 44.3367 60.5623 45.616C60.5623 50.6647 63.1209 53.5097 69.0007 53.5097H77.4359C79.6739 53.5097 81.2396 52.2304 81.719 49.9955L83.0948 41.1805H75.8734L75.2322 46.5467L75.2291 46.5436Z",fill:"currentColor"}),d.jsx("path",{d:"M120.795 33.919H120.802L114.517 27.6346C114.103 27.2206 113.546 26.9902 112.961 26.9902H106.147L110.01 30.853H110.007L113.073 33.9221L106.147 40.8478H112.961C113.543 40.8478 114.103 40.6174 114.517 40.2035L120.798 33.919H120.795Z",fill:"#007FFF"}),d.jsx("path",{d:"M13.4487 44.0648H39.4176V15.9077H11.1235V41.7365C11.1235 43.0189 12.1632 44.0617 13.4487 44.0617V44.0648Z",fill:"#00FFE1"}),d.jsx("path",{d:"M55.3045 0.0237417L55.3108 0.0175164H55.3045H55.3014H55.2952L55.3108 0.00195312H29.6283C27.963 0.00195312 26.3662 0.661836 25.1896 1.84153L11.1235 15.9076H26.8922V15.9232H39.402L39.4176 44.0616L53.4027 30.0764C54.6229 28.8563 55.3108 27.2003 55.3077 25.4728L55.3014 0.0237417H55.3045Z",fill:"#007FFF"}),d.jsx("path",{d:"M35.866 5.30615L30.5652 10.607H44.7278L44.7402 24.6669L50.0224 19.3847V5.30615H35.866Z",fill:"white"}),d.jsx("path",{d:"M32.6042 21.2492C33.4228 21.2492 34.0858 21.9122 34.0858 22.7308V48.0741C34.0827 48.9145 33.7465 49.7206 33.152 50.3152L30.6681 52.7991C30.0829 53.3842 29.2923 53.7111 28.4674 53.7111H3.6627C1.94452 53.7111 0.550049 52.3166 0.550049 50.5984V36.5292C0.550049 35.281 0.746146 34.036 1.129 32.847L4.22921 23.2506C4.61517 22.0554 5.72639 21.2461 6.9839 21.2461H32.601L32.6042 21.2492Z",fill:"#007FFF"}),d.jsx("path",{d:"M32.604 21.2495H11.1235V41.737C11.1235 43.0194 12.1632 44.0622 13.4487 44.0622H34.0825V33.9087V22.7311C34.0825 21.9125 33.4195 21.2495 32.6008 21.2495H32.604Z",fill:"#003DF2"})]}),d.jsx("defs",{children:d.jsx("clipPath",{id:"sendit-go-clip",children:d.jsx("rect",{width:"174.9",height:"53.7151",fill:"white",transform:"translate(0.550049)"})})})]}),tf=({variant:t="full",height:e=32,ariaLabel:n="SenditGo"})=>t==="mark"?d.jsx(nC,{src:tC,alt:n,$height:e,draggable:!1}):d.jsx(sC,{height:e,ariaLabel:n});function iC(t,e){return t.kg<=e.kg&&t.litres<=e.litres}const kr=540,oC=10;function Ls(t){return[Math.floor(t/60),t%60].map(e=>String(e).padStart(2,"0")).join(":")}const bn=[{van:"Van B",x:257,y:109,arrow:"translate(201 109)",kg:120,litres:900,opens:540,closes:600,drive:15,km:8,leg:"M131 59H165Q178 59 178 72V96Q178 109 191 109H257"},{van:"Van B",x:350,y:166,arrow:"translate(350 138) rotate(90)",kg:180,litres:1500,opens:570,closes:660,drive:20,km:11,leg:"M257 109H336Q350 109 350 123V166"},{van:"Van A",x:467,y:222,arrow:"translate(411 222)",kg:150,litres:1200,opens:600,closes:720,drive:45,km:22,leg:"M131 109H165Q178 109 178 122V209Q178 222 191 222H467"}];function aC(){const t={"Van A":kr+35,"Van B":kr};return bn.map(e=>{const n=t[e.van]+e.drive;return t[e.van]=Math.max(n,e.opens)+oC,{...e,arrival:n,finish:t[e.van],eta:Ls(n),window:Ls(e.opens)+"–"+Ls(e.closes)}})}const Fe=aC(),cC=["Van B","Van A"].map(t=>{const e=Fe.filter(s=>s.van===t),n=e[0].arrival-e[0].drive,r=e.reduce((s,i)=>s+i.km,0);return t+" · "+r+" km / "+(e[e.length-1].finish-n)+" min"}).join(" · "),dc=Math.max(...bn.map(t=>t.closes)),lC=Fe.every(t=>t.arrival>=t.opens&&t.finish<=t.closes),Ay=Fe.reduce((t,e)=>t+e.kg,0),Py=Fe.reduce((t,e)=>t+e.litres,0),kl=t=>(t/1e3).toLocaleString("en-AU",{maximumFractionDigits:2}),ki=[{name:"Van B",kg:500,litres:2800,y:59},{name:"Van A",kg:600,litres:4500,y:109}],uC={kg:Ay,litres:Py};function dC(t){return bn.filter(e=>e.van===t.name).reduce((e,n)=>({kg:e.kg+n.kg,litres:e.litres+n.litres}),{kg:0,litres:0})}const xn=[{name:"test-b",at:0,camera:"van-b"},{name:"result-b",at:1750,camera:"van-b"},{name:"test-a",at:3150,camera:"van-a"},{name:"selection",at:4900,camera:"van-a"},{name:"return",at:6300,camera:"return"},{name:"window-1",at:7e3,camera:"route"},{name:"window-2",at:8100,camera:"route"},{name:"window-3",at:9200,camera:"route"},{name:"ready",at:10550,camera:"route"}],hC=xn[xn.length-1].at+850,Sl=xn.findIndex(t=>t.name==="window-1"),qs=bn.map((t,e)=>({at:e*740,kg:bn.slice(0,e+1).reduce((n,r)=>n+r.kg,0),litres:bn.slice(0,e+1).reduce((n,r)=>n+r.litres,0)})),fC=qs[qs.length-1].at+920,ks=[{name:"proposed",at:0,caption:"Review the proposed stop sequence"},...Fe.map((t,e)=>({name:"check-"+(e+1),at:950+e*900,caption:"Stop "+(e+1)+" · planned arrival "+t.eta})),{name:"ready",at:950+Fe.length*900+450,caption:"Both routes reviewed · plan applied"}];function pC(t){const e=t.length-1,[n,r]=m.useState(()=>typeof window<"u"&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches?0:e);return m.useEffect(()=>{const s=window.matchMedia("(prefers-reduced-motion: reduce)");let i=[];const o=()=>i.forEach(window.clearTimeout),a=()=>{o(),r(s.matches?e:0),i=s.matches?[]:t.slice(1).map(({at:c},l)=>window.setTimeout(()=>r(l+1),c))};return a(),s.addEventListener("change",a),()=>{o(),s.removeEventListener("change",a)}},[t,e]),n}const hc=[...bn.map(t=>t.leg),"M131 59H178V-8","M178 59V239Q178 253 192 253H529","M-8 154H178","M178 51H509","M351 -8V109","M435 -8V166H528","M350 166H435","M257 109V268","M178 222H350","M467 222H530","M350 222V273"],mC=[[194,17,30,18],[253,16,39,20],[378,17,27,15],[466,16,27,19],[203,70,25,16],[274,71,32,18],[371,70,24,18],[457,73,31,17],[199,133,34,20],[272,154,26,20],[292,130,32,18],[381,159,23,21],[459,125,28,22],[214,186,28,17],[385,184,26,16],[469,189,25,18],[266,232,18,12],[375,231,35,13]];function gC(){return d.jsxs("g",{"aria-hidden":"true",children:[d.jsx("rect",{className:"dispatch-land",width:"520",height:"273",rx:"8"}),d.jsx("g",{className:"dispatch-footprints",children:mC.map(([t,e,n,r])=>d.jsxs("g",{transform:`translate(${t} ${e})`,children:[d.jsx("rect",{className:"building-roof",width:n,height:r,rx:"2"}),d.jsx("path",{d:`M4 5h${n-8}`}),n>=30&&d.jsxs("g",{className:"dispatch-rooftop-unit",children:[d.jsx("rect",{x:"5",y:"8",width:"10",height:"6",rx:"1"}),d.jsx("path",{d:"M7 10h6m-6 2h6"})]})]},t+","+e))}),d.jsx("g",{className:"dispatch-greens",children:[[248,67],[258,67],[403,195],[412,192],[478,180],[470,182],[67,177]].map(([t,e])=>d.jsxs("g",{transform:`translate(${t} ${e})`,children:[d.jsx("ellipse",{cx:"2",cy:"3",rx:"5",ry:"3"}),d.jsx("circle",{r:"4"})]},t))}),d.jsxs("g",{fill:"none",strokeLinejoin:"round",strokeLinecap:"round",children:[d.jsx("g",{className:"dispatch-road-edge",children:hc.map(t=>d.jsx("path",{d:t},t))}),d.jsx("g",{className:"dispatch-road-bed",children:hc.map(t=>d.jsx("path",{d:t},t))}),d.jsx("g",{className:"dispatch-road-mark",children:hc.map(t=>d.jsx("path",{d:t},t))})]})]})}function yC(){return d.jsxs("g",{className:"dispatch-warehouse",transform:"translate(0 -90)",children:[d.jsx("path",{className:"warehouse-yard",d:"M19 105q0-8 8-8h72l51 18v110q0 9-9 9H26q-7 0-7-7Z"}),d.jsx("path",{className:"warehouse-shadow",d:"M27 94h74l19 14v115H47l-20-13Z"}),d.jsx("path",{className:"warehouse-front",d:"m28 205 73 0 14 11H42Z"}),d.jsx("path",{className:"warehouse-side",d:"m28 94 73 0 14 11v111l-14-11Z"}),d.jsx("rect",{className:"warehouse-roof",x:"28",y:"94",width:"73",height:"111",rx:"2"}),[39,48,57,66,75,84,93].map(t=>d.jsx("path",{className:"warehouse-seam",d:`M${t} 97v105`},t)),d.jsx("path",{className:"warehouse-skylight",d:"M39 105h14v29H39z M62 105h14v29H62z"}),d.jsx("text",{x:"64.5",y:"155",textAnchor:"middle",className:"warehouse-name",children:"Warehouse"}),ki.map(t=>d.jsxs("g",{transform:`translate(102 ${t.y+80})`,children:[d.jsx("path",{className:"warehouse-door",d:"m0 0 11 5v17L0 17Z"}),d.jsx("path",{className:"warehouse-shutter",d:"m2 5 7 3m-7 1 7 3m-7 1 7 3"}),d.jsx("path",{className:"warehouse-sill",d:"m0 17 11 5"})]},t.name)),d.jsx("g",{className:"dispatch-cartons",children:[0,1,2].map(t=>d.jsxs("g",{style:{"--arrival":`${t*.2}s`},transform:`translate(${38+t*18} 215)`,children:[d.jsx("path",{d:"m0 3 7-3 7 3v9l-7 3-7-3Z"}),d.jsx("path",{d:"m0 3 7 3 7-3m-7 3v9"})]},t))})]})}function vC({selected:t}){return d.jsxs("g",{transform:t?void 0:"scale(.80 .93)",className:"dispatch-vehicle "+(t?"vehicle-a":"vehicle-b"),children:[d.jsxs("g",{className:"van-wheels",fill:"var(--v29-navy)",children:[d.jsx("rect",{x:"-12",y:"-7",width:"6",height:"3",rx:"1"}),d.jsx("rect",{x:"6",y:"-7",width:"5",height:"3",rx:"1"}),d.jsx("rect",{x:"-12",y:"4",width:"6",height:"3",rx:"1"}),d.jsx("rect",{x:"6",y:"4",width:"5",height:"3",rx:"1"})]}),d.jsx("path",{d:"M-15-5.5h19l6 1 4 2v5l-4 2-6 1h-19q-1.5 0-1.5-2v-7q0-2 1.5-2Z",fill:"var(--v29-on-primary)",stroke:"var(--v29-navy)",strokeWidth:"1.25"}),d.jsx("path",{d:"m4-4 5 1.3v5.4L4 4Z",fill:"#46708b"}),d.jsx("path",{d:"M-13.5-4v8M-10-3h10m-10 6h10",stroke:"#a5b7c4",strokeWidth:"1"}),t&&d.jsx("path",{className:"van-livery",d:"M-10-1h6l2 1-2 1h-6l2-1Z"}),d.jsx("path",{d:"M12-2.3v1m0 2.6v1",stroke:"#d8a253",strokeWidth:"1.3"})]})}function bC({beat:t}){return d.jsxs("g",{className:"intake-scale",transform:"translate(8 158)",children:[d.jsx("rect",{className:"scale-housing",width:"148",height:"103",rx:"7"}),d.jsx("text",{className:"scale-heading",x:"10",y:"16",children:"WAREHOUSE INTAKE"}),d.jsx("path",{className:"scale-platform",d:"m12 52 17-8h94l12 8-16 8H24Z"}),Fe.slice(0,t+1).map((e,n)=>d.jsx("g",{transform:`translate(${19+n*34} 23)`,children:d.jsxs("g",{className:"intake-freight",children:[d.jsx("path",{className:"freight-front",d:"m0 7 19 4v19L0 26Z"}),d.jsx("path",{className:"freight-side",d:"m19 11 13-7v19l-13 7Z"}),d.jsx("path",{className:"freight-top",d:"m0 7 13-7 19 4-13 7Z"}),d.jsx("path",{className:"freight-tape",d:"m6 3.8 19 4v5l-4 2v-5L2 5.8Z"}),d.jsx("text",{x:"6",y:"22",children:n+1})]})},e.leg)),d.jsx("path",{className:"scale-divider",d:"M9 64h130"}),d.jsxs("text",{className:"intake-total",x:"10",y:"92",children:[qs[t].kg,d.jsx("tspan",{dx:"4",children:"kg"})]}),d.jsxs("text",{className:"intake-volume",x:"138",y:"92",textAnchor:"end",children:[kl(qs[t].litres)," m³"]})]})}function xC({beat:t}){const e=Math.min(t,Fe.length),n=ks[t].name==="ready";return d.jsxs("g",{className:"dispatch-sheet",transform:"translate(8 158)",children:[d.jsx("rect",{className:"sheet-paper",x:"3",y:"3",width:"145",height:"101",rx:"4"}),d.jsx("rect",{className:"sheet-paper",width:"145",height:"101",rx:"4"}),d.jsx("text",{className:"sheet-overline",x:"10",y:"17",children:"TWO PROPOSED ROUTES"}),d.jsxs("text",{className:"sheet-name",x:"10",y:"48",children:[e," / ",Fe.length]}),d.jsx("text",{className:"sheet-count",x:"135",textAnchor:"end",y:"47",children:"checked"}),d.jsx("path",{className:"sheet-rule",d:"M5 60h135"}),d.jsx("g",{transform:"translate(10 68)",children:d.jsxs("g",{className:"review-status","data-reviewed":n,children:[d.jsx("rect",{width:"125",height:"25",rx:"2"}),n?d.jsx("path",{className:"dispatch-check",d:"m8 13 4 4 8-9",pathLength:"1"}):d.jsxs("g",{className:"sheet-clock",children:[d.jsx("circle",{cx:"14",cy:"12.5",r:"6"}),d.jsx("path",{d:"M14 9v4l3 1"})]}),d.jsx("text",{className:"sheet-status",x:"27",y:"17.5",children:n?"Plan applied":"In review"})]})})]})}function wC({beat:t}){return d.jsxs("g",{className:"loading-bay","data-focus":xn[t].camera,"aria-hidden":"true",children:[d.jsx("rect",{className:"dock-ground",width:"520",height:"270"}),d.jsxs("g",{transform:"translate(8 0) scale(1.38)",children:[d.jsx("path",{className:"dock-edge",d:"M12 26h101v153H12"}),d.jsx("path",{className:"dock-guide",d:"M20 63h123m-123 76h123"}),d.jsx("g",{className:"dock-rollers",children:[63,139].map(e=>d.jsxs("g",{transform:`translate(23 ${e})`,children:[d.jsx("rect",{x:"0",y:"-15",width:"97",height:"30",rx:"2"}),Array.from({length:12},(n,r)=>d.jsx("path",{d:`M${5+r*8} -12v24`},r))]},e))}),d.jsx("text",{className:"dock-heading",x:"24",y:"103",children:"Loading bays"}),ki.map((e,n)=>{const r=n===0?63:139,s=e.litres*.03,i=146+s;return d.jsxs("g",{className:"cutaway-van","data-vehicle":e.name,transform:`translate(0 ${r})`,children:[d.jsx("text",{className:"cargo-van-name",x:"145",y:"-29",children:e.name}),d.jsxs("g",{transform:"scale(1 1.30)",children:[d.jsx("g",{className:"cargo-tyres",children:[157,i+15].map(o=>d.jsxs("g",{children:[d.jsx("rect",{x:o,y:"-22",width:"15",height:"5",rx:"2"}),d.jsx("rect",{x:o,y:"17",width:"15",height:"5",rx:"2"})]},o))}),d.jsx("path",{className:"cargo-body",d:`M144 -19H${i+13}q18 0 21 11V8q-3 11-21 11H144Z`}),d.jsx("rect",{className:"cargo-lining",x:"146",y:"-15",width:s,height:"30",rx:"2"}),d.jsx("path",{className:"cargo-runners",d:`M150 -10h${s-10}m-${s-10} 20h${s-10}`}),d.jsx("path",{className:"cargo-glass",d:`M${i+8} -15l10 2q7 2 8 6V7q-1 4-8 6l-10 2q6-15 0-30Z`}),d.jsx("path",{className:"cargo-trim",d:`M${i+2} -16v32m10-34 2-4m-2 40 2 4`}),d.jsx("path",{className:"cargo-lights",d:`M${i+31}-9v4m0 10v4M145-16v4m0 24v4`}),d.jsx("path",{className:"cargo-rear-door",d:"m144-18-14-5m14 41-14 5"}),d.jsx("path",{className:"cargo-threshold",d:"M144-14v28"})]})]},e.name)}),bn.map((e,n)=>{const r=e.litres*.03-2,s=n===2,i=[157,185,t<2?83:245][n],o=s&&t>=2?139:63;return d.jsxs("g",{className:"dock-package package-"+(n+1),"data-stop":n+1,"data-destination":s&&t<2?"Dock":e.van,style:{"--x":i+"px","--y":o+"px"},children:[d.jsx("path",{className:"package-skid",d:`M1-13h${r-2}M1 13h${r-2}`}),d.jsx("rect",{x:"0",y:"-12",width:r,height:"24",rx:"1.6"}),d.jsx("path",{className:"cargo-tape",d:`M${r-5} -11v22`}),d.jsx("text",{x:(r-4)/2,y:".5",children:n+1})]},e.leg)})]})]})}function kC({van:t}){const e=t===ki[0];return d.jsxs("g",{className:"dispatch-bay "+(e?"bay-b":"bay-a"),children:[d.jsx("path",{className:"bay-outline",d:`M116 ${t.y-11}h32v22h-32`}),d.jsx("g",{className:"bay-label",transform:`translate(116 ${e?42:134})`,children:d.jsx("text",{children:t.name})}),d.jsx("g",{transform:`translate(131 ${t.y})`,children:d.jsx(vC,{selected:!e})})]})}function SC({index:t,stage:e,reached:n,checked:r}){const s=Fe[t],i=s.arrival>=s.opens&&s.finish<=s.closes;return d.jsxs("g",{transform:`translate(${s.x} ${s.y})`,className:"dispatch-stop","data-stop":t+1,"data-checked":r,"data-reached":n,children:[d.jsx("circle",{className:"stop-halo",r:"13"}),e==="plan"&&n&&d.jsx("circle",{className:"stop-scan",r:"12","aria-hidden":"true"}),d.jsx("circle",{className:"stop-badge",r:"8.5"}),d.jsx("text",{className:"stop-index",y:".5",children:t+1}),e==="load"&&n&&d.jsxs("g",{className:"load-pin",transform:"translate(0 -24)",children:[d.jsx("rect",{x:"-32",y:"-11",width:"64",height:"22",rx:"4"}),d.jsxs("text",{y:"1",children:[s.kg," kg"]})]}),e!=="load"&&n&&d.jsxs("g",{className:"stop-confirmation",transform:t===1?"translate(52 0)":void 0,children:[t===1&&d.jsx("path",{className:"stop-label-leader",d:"M-41 0h11l14-16"}),d.jsxs("g",{className:"stop-time",transform:"translate(0 -24)",children:[d.jsx("rect",{x:"-25",y:"-9",width:"50",height:"18",rx:"4"}),d.jsx("text",{x:e==="plan"||r?5:0,y:".25",children:s.eta}),(e==="plan"&&i||r)&&d.jsx("path",{className:"window-check",d:"m-20 0 3 3 5-6"})]}),e==="plan"&&d.jsxs("g",{className:"map-window",transform:"translate(0 -48)",children:[d.jsx("rect",{x:"-43",y:"-9",width:"86",height:"18",rx:"4"}),d.jsx("text",{y:".25",children:s.window})]})]})]})}function EC({beat:t}){return d.jsx("div",{className:"dispatch-meter-pair",children:ki.map((e,n)=>{const r=t<2,s=r&&n===0?uC:dC(e),i=r&&n===1,o=[{label:"Weight",fits:s.kg<=e.kg},{label:"Space",fits:s.litres<=e.litres}];return d.jsxs("div",{className:"dispatch-meter","data-fits":!i&&iC(s,e),children:[d.jsxs("div",{className:"dispatch-meter-name",children:[d.jsx("b",{children:e.name}),d.jsx("span",{children:i?"Available":r?"Stops 1–3":n===0?"Stops 1 & 2":"Stop 3"})]}),o.map(a=>d.jsxs("div",{className:"dispatch-measure","data-exceeded":!i&&!a.fits,children:[d.jsx("span",{children:a.label}),d.jsx("strong",{children:i?"—":a.fits?"✓ Fits":"Short"})]},a.label))]},e.name)})})}function _C({requested:t}){const e=n=>(n-kr)/(dc-kr)*100+"%";return d.jsxs("section",{className:"dispatch-chart","aria-label":"Illustrative delivery schedule",children:[d.jsxs("header",{children:[d.jsx("b",{children:"Delivery windows"}),d.jsx("span",{children:t?"Requested intervals":"Planned arrivals"})]}),d.jsx("ol",{className:"dispatch-manifest",children:Fe.map((n,r)=>d.jsxs("li",{style:{"--check-at":.6+r*.3+"s"},children:[d.jsxs("span",{className:"dispatch-stop-key",children:["Stop ",r+1]}),d.jsxs("div",{className:"dispatch-time-track","aria-hidden":"true",children:[d.jsx("i",{style:{left:e(n.opens),width:(n.closes-n.opens)/(dc-kr)*100+"%"}}),!t&&d.jsx("em",{style:{left:e(n.arrival)}})]}),d.jsx("b",{children:t?n.kg+" kg":d.jsxs(d.Fragment,{children:[d.jsx("span",{className:"dispatch-eta",children:"ETA "}),n.eta]})}),d.jsx("small",{children:n.window})]},n.leg))}),d.jsxs("div",{className:"dispatch-axis","aria-hidden":"true",children:[d.jsx("span",{children:Ls(kr)}),d.jsx("span",{children:Ls(dc)})]})]})}function TC({stage:t,beat:e}){return d.jsx("figcaption",{className:"dispatch-mobile-caption",children:d.jsxs("div",{className:"dispatch-evidence",children:[d.jsxs("div",{className:"dispatch-stage-summary",children:[d.jsxs("section",{className:"dispatch-decision","aria-hidden":t!=="plan",children:[d.jsx("span",{className:"dispatch-kicker",children:"Illustrative load"}),d.jsxs("h4",{children:[Ay," kg · ",kl(Py)," m³"]}),d.jsx(EC,{beat:e})]}),t!=="plan"&&d.jsxs("section",{className:"dispatch-docket","aria-label":t==="load"?"Warehouse manifest":"Proposed routes",children:[d.jsxs("header",{children:[d.jsx("b",{children:t==="load"?"Incoming orders":"Proposed routes"}),d.jsx("span",{children:t==="load"?"Warehouse manifest":cC})]}),d.jsx("ol",{className:t==="load"?"intake-orders":"review-itinerary",children:Fe.map((n,r)=>{const s=t==="load"?r<=e:r<e;return d.jsxs("li",{"data-van":n.van,"data-recorded":s,"data-current":t==="approve"&&e===r+1,children:[d.jsx("span",{className:"docket-marker","aria-hidden":"true",children:t==="approve"&&s?"✓":r+1}),d.jsxs("small",{children:[t==="approve"?n.van+" · ":"","Stop ",r+1]}),d.jsx("strong",{children:t==="load"?n.kg+" kg · "+kl(n.litres)+" m³":"ETA "+n.eta}),d.jsx("span",{className:"docket-detail",children:t==="load"?n.window:s?"Reviewed":"Planned"})]},n.leg)})})]})]}),d.jsx(_C,{requested:t==="load"})]})},t)}function CC(t){switch(xn[t].name){case"test-b":return"Check the three orders against Van B";case"result-b":return"Van B meets the weight limit. Order 3 needs more space.";case"test-a":return"Move order 3 to Van A";case"selection":return"Both vans have room for their assigned orders";case"return":return"Check each route against its delivery windows";case"ready":return lC?"Order 3 goes to Van A. Both routes fit all three delivery windows.":"Review the plan";default:return`Checking stop ${t-Sl+1} · ETA ${Fe[t-Sl].eta}`}}function RC({stage:t}){const e=t==="approve",n=pC(t==="load"?qs:e?ks:xn),r=t==="load"?n:t==="plan"?n-Sl:Fe.length-1;return d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"dispatch-map",children:[t==="load"&&d.jsxs("div",{className:"map-decision-caption",children:[d.jsx("b",{children:"Warehouse"}),d.jsx("span",{children:n===Fe.length-1?"Manifest ready for planning":"Registering order "+(n+1)},n)]}),t==="plan"&&d.jsxs("div",{className:"map-decision-caption","aria-hidden":"true",children:[d.jsx("b",{children:"SAM"}),d.jsx("span",{children:CC(n)},n)]}),e&&d.jsxs("div",{className:"map-decision-caption review-caption","data-review-beat":ks[n].name,children:[d.jsx("b",{children:"Order Management"}),d.jsx("span",{children:ks[n].caption},n)]}),d.jsxs("svg",{"data-intake":t==="load"?n+1:void 0,"data-review-beat":e?ks[n].name:void 0,"data-plan-beat":t==="plan"?xn[n].name:void 0,id:"dispatch-scene",className:"dispatch-scene scene-"+t,viewBox:"0 0 520 270",role:"img","aria-label":{load:"Three orders at the warehouse total 450 kilograms and 3.6 cubic metres. Two white vans wait at their loading bays.",plan:"Van B meets the weight limit but has insufficient cargo space for three orders. Order 3 moves to Van A through its rear doors. Van B serves stops 1 and 2. Van A serves stop 3. Both proposed routes fit their delivery windows.",approve:"Both vans wait at the warehouse while the dispatcher reviews and applies their proposed routes in Order Management before dispatch."}[t],children:[d.jsxs("g",{className:"dispatch-camera","aria-hidden":t==="plan"&&n<4,"data-camera":t==="plan"?xn[n].camera:"route",children:[d.jsx(gC,{}),t!=="load"&&d.jsx("g",{className:"dispatch-itinerary",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:Fe.map((s,i)=>d.jsxs("g",{"data-route":s.van,"data-routed":i<=r,children:[d.jsx("path",{className:"leg-halo",d:s.leg,pathLength:"1"}),d.jsx("path",{className:"leg-ink",d:s.leg,pathLength:"1"}),e&&i<n&&d.jsx("path",{className:"leg-reviewed",d:s.leg,pathLength:"1"}),d.jsx("polygon",{className:"route-arrow",transform:s.arrow,points:"-5,-4 -1,-4 4,0 -1,4 -5,4 0,0"})]},s.leg))}),d.jsx(yC,{}),ki.map(s=>d.jsx(kC,{van:s},s.name)),Fe.map((s,i)=>d.jsx(SC,{index:i,stage:t,reached:i<=r,checked:e&&i<n},s.leg)),t==="load"&&d.jsx(bC,{beat:n}),e&&d.jsx(xC,{beat:n})]}),t==="plan"&&n<=4&&d.jsx(wC,{beat:n})]})]}),d.jsx(TC,{stage:t,beat:n})]})}function cM({stage:t}){return d.jsx("figure",{className:"dispatch-figure dispatch-"+t,children:d.jsx(RC,{stage:t},t)})}function lM({sceneId:t,renderScene:e,reducedMotion:n}){const[r,s]=m.useState("load"),[i,o]=m.useState(0),a=m.useRef(!1),[c,l]=m.useState(!1),u=m.useRef(null);return m.useEffect(()=>{if(n||!u.current||typeof IntersectionObserver>"u")return;let h=!1;const f=new IntersectionObserver(([p])=>{l(p.isIntersecting),p.isIntersecting&&!a.current&&o(g=>g+1),!p.isIntersecting&&h&&(a.current=!1,s("load")),h=p.isIntersecting});return f.observe(u.current),()=>f.disconnect()},[n]),m.useEffect(()=>{if(n||a.current||!c||r==="approve")return;const h=window.setTimeout(()=>s(r==="load"?"plan":"approve"),r==="load"?fC:hC);return()=>window.clearTimeout(h)},[i,n,r,c]),d.jsxs("div",{className:"sam-walkthrough",children:[d.jsx("div",{id:"sam-steps",className:"sam-chapters",role:"group","aria-label":"SAM planning steps",children:Sd.map((h,f)=>d.jsx("button",{type:"button","data-number":String(f+1).padStart(2,"0"),"aria-label":h.title,"aria-controls":t,"aria-pressed":r===h.stage,onClick:()=>{s(h.stage),a.current=!0,o(p=>p+1)},children:h.title},h.stage))}),d.jsx("div",{className:"sam-chapter-description",children:Sd.map(h=>d.jsx("p",{className:"sam-chapter-copy","data-active":h.stage===r,children:h.copy},h.stage))}),d.jsxs("div",{className:"sam-chapter-visual",children:[d.jsx("span",{ref:u,className:"sam-viewport-marker","aria-hidden":"true"}),d.jsx(m.Fragment,{children:e(r)},i)]}),d.jsx("p",{className:"sam-chapter-closing",children:pb.closing})]})}function AC({id:t,children:e}){return d.jsx("div",{className:"studio-display",id:t,children:d.jsxs("div",{className:"studio-display-art",children:[d.jsx("img",{src:Ne("/images/studio-display.png"),alt:""}),d.jsx("div",{className:"studio-display-screen",children:e})]})})}function PC({src:t,poster:e,label:n,autoPlayOnView:r,playbackRate:s=1,id:i}){const o=m.useRef(null),a=m.useRef(!1),c=m.useRef(null),l=uu(),[u,h]=m.useState(!1),[f,p]=m.useState(!1),g=m.useCallback(()=>a.current&&!document.hidden&&(c.current??(r&&!l)),[r,l]),y=m.useCallback(()=>{var b;const S=o.current;S&&(g()?S.paused&&((b=S.play())==null||b.catch(()=>h(!S.paused))):S.paused||S.pause())},[g]);m.useEffect(()=>{const S=o.current;if(!S)return;l&&c.current&&(c.current=null);const b=typeof IntersectionObserver<"u"?new IntersectionObserver(([x])=>{a.current=x.isIntersecting&&x.intersectionRatio>0,y()},{threshold:[0,.01]}):null;return b==null||b.observe(S),document.addEventListener("visibilitychange",y),y(),()=>{b==null||b.disconnect(),document.removeEventListener("visibilitychange",y),S.paused||S.pause(),!S.isConnected&&S.networkState!==HTMLMediaElement.NETWORK_EMPTY&&(S.removeAttribute("src"),S.load())}},[l,y]);const v=()=>{const S=o.current;if(!S)return;const b=S.getBoundingClientRect();a.current=b.bottom>0&&b.top<window.innerHeight&&b.right>0&&b.left<window.innerWidth,c.current=S.paused,y()};return d.jsxs("div",{className:"product-loop",children:[d.jsx(ua,{id:i,videoRef:o,src:t,poster:e,"aria-label":n,muted:!0,playsInline:!0,loop:!0,preload:r||f?"metadata":"none",canResume:g,onLoadedMetadata:S=>{S.currentTarget.playbackRate=s,y()},onPlay:()=>{h(!0),p(!0)},onPause:()=>h(!1)}),d.jsx("button",{type:"button",className:"product-loop-toggle","aria-label":(u?"Pause ":"Play ")+n,onClick:v})]})}const Iy=[{name:"Manage Orders",file:"chapter-track"},{name:"Distribute Orders",file:"chapter-reassign"},{name:"Track Runs",file:"chapter-run-map"},{name:"Delivery performance",file:"insight-delivery-performance"},{name:"Route tracking",file:"insight-route-tracking"},{name:"Order density",file:"insight-order-density"}],Oy={name:"Full walkthrough",file:"fleet-walkthrough"},IC=[...Iy,{name:"Compare route changes",file:"toolkit-route-comparison"},{name:"Inspect delivery proof",file:"toolkit-proof"},{name:"Track a delivery",file:"toolkit-tracking"},Oy];function nf(t,e){return Ne("/sam-loops/"+t+(e==="dark"?"-dark":""))}function OC({id:t}){const{mode:e}=pi(),n=m.useRef(null),r=m.useRef(!1);return m.useEffect(()=>{const s=n.current;if(!s)return;const i=()=>{(document.hidden||!r.current)&&s.pause()},o=new IntersectionObserver(a=>{r.current=a[a.length-1].isIntersecting,i()});return o.observe(s),document.addEventListener("visibilitychange",i),()=>{o.disconnect(),document.removeEventListener("visibilitychange",i)}},[]),d.jsx(ua,{id:t,videoRef:n,"aria-label":"Narrated Fleet walkthrough",controls:!0,playsInline:!0,crossOrigin:"anonymous",preload:"metadata",canResume:()=>r.current,...a1(e),children:d.jsx("track",{kind:"captions",srcLang:"en",label:"English",src:o1})})}function uM({review:t=!1,startWithInsights:e=!1}){const{mode:n}=pi(),r=t?IC:Iy,[s,i]=m.useState(e?r.findIndex(g=>g.file==="insight-delivery-performance"):0),o=m.useRef([]),a=r[s],c=nf(a.file,n),l=t?"review-feature-screen":"home-feature-screen",u=g=>l+"-tab-"+g,h=l+"-panel";function f(g){i(g);const y=document.getElementById(l);if(!y)return;const v=y.getBoundingClientRect();Math.min(v.bottom,window.innerHeight)-Math.max(v.top,0)<v.height/2&&y.scrollIntoView({block:"center",behavior:"instant"})}function p(g,y){var b;const S={ArrowRight:(y+1)%r.length,ArrowLeft:(y+r.length-1)%r.length,Home:0,End:r.length-1}[g.key];S!==void 0&&(g.preventDefault(),f(S),(b=o.current[S])==null||b.focus({preventScroll:!0}))}return d.jsxs("div",{className:"mac-walkthrough",id:t?"review-fleet-walkthrough":void 0,children:[d.jsx("div",{role:"tabpanel",id:h,"aria-labelledby":u(s),style:{"--mac-preview-image":'url("'+c+'-thumb.webp")'},children:d.jsx(AC,{id:t?"fleet-insights":void 0,children:a===Oy?d.jsx(OC,{id:l}):d.jsx(PC,{id:l,label:a.name,autoPlayOnView:!0,playbackRate:a.file==="chapter-run-map"||a.file==="insight-route-tracking"?1.25:1,src:c+".mp4",poster:c+".jpg"},a.file)})}),d.jsx("div",{className:"mac-thumbnails",role:"tablist","aria-label":"Fleet workflows",children:r.map((g,y)=>d.jsxs("button",{id:u(y),role:"tab",type:"button","aria-controls":h,"aria-selected":s===y,tabIndex:s===y?0:-1,ref:v=>{o.current[y]=v},onClick:()=>f(y),onKeyDown:v=>p(v,y),children:[d.jsx("img",{alt:"",width:"112",height:"63",loading:"lazy",src:nf(g.file,n)+"-thumb.webp"}),d.jsx("span",{children:g.name})]},g.file))})]})}const NC="* Recorded activity for one fleet, 19 Sep–16 Oct and 17 Oct–13 Nov 2026. Route-time coverage rose from 64% to 86%, and the driver mix changed. The figures describe these periods and do not establish savings caused by SenditGo.",Tr=[{id:"proof",label:"Completed deliveries with digital proof",before:80.2,after:91.6,unit:"%",earlierSample:"1,517 of 1,891 deliveries",laterSample:"2,000 of 2,184 deliveries",photo:"phone-vanbay"},{id:"route",label:"Route time per stop",before:25.4,after:23.8,unit:" min",earlierSample:"1,214 measured stops",laterSample:"1,777 measured stops",photo:"phone-rooftops"},{id:"travel",label:"Travel time between stops",before:16.7,after:16.1,unit:" min",earlierSample:"956 measured legs",laterSample:"1,452 measured legs",photo:"phone-highway"}];function Ks({metric:t}){const e=t.after-t.before,n=Math.max(1,Math.min(8,Math.round(Math.abs(e)*10)));return d.jsxs("span",{className:"impact-number",style:{"--roll-end":`${-100*n/(n+1)}%`},children:[d.jsxs("span",{className:"impact-number-final",children:[t.after,d.jsx("small",{children:t.unit})]}),d.jsxs("span",{"aria-hidden":"true",className:"impact-odometer",children:[d.jsx("span",{className:"impact-number-window",children:d.jsx("span",{className:"impact-number-strip",children:Array.from({length:n+1},(r,s)=>d.jsx("span",{children:(t.before+e*s/n).toFixed(1)},s))})}),d.jsx("small",{children:t.unit})]})]})}const LC=4200;function jC({source:t,poster:e}){return d.jsx("video",{className:"field-film-excerpt",src:t,poster:e,preload:"none",autoPlay:!0,muted:!0,playsInline:!0,"aria-hidden":"true",onPlaying:n=>n.currentTarget.classList.add("film-ready"),onError:n=>n.currentTarget.classList.remove("film-ready"),onTimeUpdate:n=>{n.currentTarget.currentTime>=3.5&&n.currentTarget.pause()}})}function DC(){const t=m.useRef(null),[e,n]=m.useState(0),[r,s]=m.useState(!1);return m.useEffect(()=>{const i=t.current;if(!i||typeof IntersectionObserver>"u")return;const o=window.matchMedia("(prefers-reduced-motion: reduce)");let a=!1;const c=()=>{const u=a&&!o.matches&&!document.hidden;s(u),u||n(0)},l=new IntersectionObserver(([u])=>{a=u.isIntersecting,c()},{rootMargin:"0px 0px -112px"});return l.observe(i),o.addEventListener("change",c),document.addEventListener("visibilitychange",c),()=>{l.disconnect(),o.removeEventListener("change",c),document.removeEventListener("visibilitychange",c)}},[]),m.useEffect(()=>{if(!r||e>=Tr.length-1)return;const i=window.setTimeout(()=>n(o=>o+1),LC);return()=>window.clearTimeout(i)},[r,e]),d.jsxs("div",{className:"field-film-stage",id:"field-film-stage","data-chapter":Tr[e].id,children:[d.jsx("span",{ref:t,className:"field-playback-marker","aria-hidden":"true"}),Tr.map((i,o)=>{const a=r&&e===o,c=Ne("/images/broll/broll-"+i.photo+"-poster.jpg");return d.jsxs("figure",{className:"field-story","data-metric":i.id,"data-impact-motion":a?"running":void 0,"aria-labelledby":"field-"+i.id,children:[d.jsxs("div",{className:"field-shot","aria-hidden":"true",children:[d.jsx("img",{src:c,alt:"",loading:"lazy",width:"600",height:"1242"}),a&&d.jsx(jC,{poster:c,source:Ne("/videos/broll/broll-"+i.photo+".mp4")})]}),d.jsxs("figcaption",{className:"field-reading",children:[d.jsx("h3",{id:"field-"+i.id,children:i.label}),d.jsxs("dl",{className:"field-pair",children:[d.jsxs("div",{className:"field-before",children:[d.jsx("dt",{children:"Earlier"}),d.jsxs("dd",{children:[i.before,d.jsx("small",{children:i.unit})]})]}),d.jsxs("div",{className:"field-after",children:[d.jsx("dt",{children:"Later"}),d.jsxs("dd",{children:[d.jsx(Qx,{className:"field-connector",size:22,"aria-hidden":"true"}),d.jsx(Ks,{metric:i})]})]})]}),d.jsxs("p",{className:"field-difference",children:[i.earlierSample," → ",i.laterSample]})]})]},i.id)})]})}const dM=[{id:"tickers",title:"Impact tickers"},{id:"mosaic",title:"Proof coverage"},{id:"report",title:"Dispatch report"},{id:"field",title:"Field report"}];function MC(){return d.jsx("div",{className:"impact-tickers",children:Tr.map(t=>d.jsxs("article",{"data-metric":t.id,"aria-describedby":"activity-source",children:[d.jsx("h3",{children:t.label}),d.jsxs("div",{className:"impact-ticker-values",children:[d.jsxs("div",{children:[d.jsx("span",{className:"ticker-period",children:"Earlier"}),d.jsxs("span",{className:"impact-ticker-baseline",children:[t.before,d.jsx("small",{children:t.unit})]}),d.jsx("p",{children:t.earlierSample})]}),d.jsx("span",{className:"impact-ticker-arrow","aria-hidden":"true",children:"→"}),d.jsxs("div",{children:[d.jsx("span",{className:"ticker-period",children:"Later"}),d.jsxs("strong",{children:[d.jsx(Ks,{metric:t}),d.jsx("sup",{"aria-hidden":"true",children:"*"})]}),d.jsx("p",{children:t.laterSample})]})]})]},t.id))})}function FC(){const[t,...e]=Tr;return d.jsxs("div",{className:"impact-mosaic",children:[d.jsxs("div",{id:"proof-in-100",className:"impact-proof","data-metric":t.id,children:[d.jsxs("div",{className:"impact-proof-reading",children:[d.jsx("h3",{children:t.label}),d.jsxs("p",{className:"proof-improvement",children:[d.jsxs("strong",{children:["+",(t.after-t.before).toFixed(1)]})," percentage points"]}),d.jsxs("ul",{className:"proof-legend","aria-label":"Completed deliveries with digital proof by period",children:[d.jsxs("li",{className:"proof-existing",children:["Earlier · ",t.earlierSample]}),d.jsxs("li",{className:"proof-added",children:["Later · ",t.laterSample]})]})]}),d.jsxs("figure",{className:"proof-gauge","aria-label":"Digital proof coverage in the later period",children:[d.jsx("svg",{viewBox:"0 0 240 214","aria-hidden":"true",children:d.jsxs("g",{fill:"none",strokeWidth:"10",children:[d.jsx("path",{className:"gauge-track",d:"M46 193 A105 105 0 1 1 194 193"}),d.jsx("path",{className:"gauge-later",d:"M46 193 A105 105 0 1 1 194 193",pathLength:"100",strokeDasharray:`${t.after} 100`}),d.jsx("path",{className:"gauge-earlier",d:"M46 193 A105 105 0 1 1 194 193",pathLength:"100",strokeDasharray:`${t.before} 100`})]})}),d.jsxs("figcaption",{className:"proof-gauge-reading",children:[d.jsx("strong",{className:"impact-hero-value",children:d.jsx(Ks,{metric:t})}),d.jsx("span",{children:"Later · with digital proof"})]}),d.jsxs("div",{className:"proof-baseline",children:[d.jsxs("p",{children:["Earlier ",d.jsxs("b",{children:[t.before,"%"]})]}),d.jsx("div",{"aria-hidden":"true",children:d.jsx("i",{style:{width:t.before+"%"}})})]})]})]}),d.jsx("div",{className:"impact-timings",children:e.map(n=>d.jsxs("div",{"data-metric":n.id,children:[d.jsx("h3",{children:n.label}),d.jsxs("dl",{className:"timing-comparison",style:{"--before-width":`${n.before/30*100}%`,"--after-width":`${n.after/30*100}%`},children:[d.jsxs("div",{children:[d.jsxs("dt",{children:["Earlier · ",n.earlierSample]}),d.jsxs("dd",{children:[n.before," min"]})]}),d.jsxs("div",{children:[d.jsxs("dt",{children:["Later · ",n.laterSample]}),d.jsx("dd",{children:d.jsx(Ks,{metric:n})})]})]})]},n.id))})]})}function $C(){return d.jsxs("table",{className:"impact-report","aria-label":"Recorded fleet activity across two periods",children:[d.jsx("thead",{children:d.jsx("tr",{children:["Measure","Earlier","Later"].map(t=>d.jsx("th",{scope:"col",children:t},t))})}),d.jsx("tbody",{children:Tr.map(t=>d.jsxs("tr",{"data-metric":t.id,children:[d.jsx("th",{scope:"row",children:t.label}),d.jsxs("td",{children:[t.before,d.jsx("small",{children:t.unit}),d.jsx("span",{className:"report-sample",children:t.earlierSample})]}),d.jsxs("td",{children:[d.jsx(Ks,{metric:t}),d.jsx("span",{className:"report-sample",children:t.laterSample})]})]},t.id))})]})}const VC="tickers";function hM({previewStyle:t=VC}={}){const e=m.useRef(null);return m.useEffect(()=>{if(t==="field"||!e.current||typeof IntersectionObserver>"u")return;const n=Array.from(e.current.querySelectorAll("[data-metric]")),r=window.matchMedia("(prefers-reduced-motion: reduce)"),s=new IntersectionObserver(o=>{for(const a of o){if(r.matches)continue;const c=a.target;a.isIntersecting?a.intersectionRatio>=.22&&(c.dataset.impactMotion="running"):c.dataset.impactMotion="waiting"}},{threshold:[0,.22]}),i=()=>{s.disconnect();for(const o of n)r.matches?delete o.dataset.impactMotion:(o.dataset.impactMotion="waiting",s.observe(o))};return i(),r.addEventListener("change",i),()=>{s.disconnect(),r.removeEventListener("change",i);for(const o of n)delete o.dataset.impactMotion}},[t]),d.jsxs("div",{ref:e,className:"fleet-impact","data-impact":t,children:[t==="tickers"?d.jsx(MC,{}):t==="report"?d.jsx($C,{}):t==="field"?d.jsx(DC,{}):d.jsx(FC,{}),d.jsx("p",{id:"activity-source",children:NC})]})}function UC(){if(console&&console.warn){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];Gn(e[0])&&(e[0]=`react-i18next:: ${e[0]}`),console.warn(...e)}}const rf={};function El(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];Gn(e[0])&&rf[e[0]]||(Gn(e[0])&&(rf[e[0]]=new Date),UC(...e))}const Ny=(t,e)=>()=>{if(t.isInitialized)e();else{const n=()=>{setTimeout(()=>{t.off("initialized",n)},0),e()};t.on("initialized",n)}},sf=(t,e,n)=>{t.loadNamespaces(e,Ny(t,n))},of=(t,e,n,r)=>{Gn(n)&&(n=[n]),n.forEach(s=>{t.options.ns.indexOf(s)<0&&t.options.ns.push(s)}),t.loadLanguages(e,Ny(t,r))},BC=function(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const r=e.languages[0],s=e.options?e.options.fallbackLng:!1,i=e.languages[e.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const o=(a,c)=>{const l=e.services.backendConnector.state[`${a}|${c}`];return l===-1||l===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!o(e.isLanguageChangingTo,t)?!1:!!(e.hasResourceBundle(r,t)||!e.services.backendConnector.backend||e.options.resources&&!e.options.partialBundledLanguages||o(r,t)&&(!s||o(i,t)))},HC=function(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!e.languages||!e.languages.length?(El("i18n.languages were undefined or empty",e.languages),!0):e.options.ignoreJSONStructure!==void 0?e.hasLoadedNamespace(t,{lng:n.lng,precheck:(s,i)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&s.services.backendConnector.backend&&s.isLanguageChangingTo&&!i(s.isLanguageChangingTo,t))return!1}}):BC(t,e,n)},Gn=t=>typeof t=="string",zC=t=>typeof t=="object"&&t!==null,WC=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,qC={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},KC=t=>qC[t],GC=t=>t.replace(WC,KC);let _l={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:GC};const ZC=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};_l={..._l,...t}},JC=()=>_l;let Ly;const YC=t=>{Ly=t},XC=()=>Ly,QC={type:"3rdParty",init(t){ZC(t.options.react),YC(t)}},e2=m.createContext();class t2{constructor(){dt(this,"getUsedNamespaces",()=>Object.keys(this.usedNamespaces));this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}}const n2=(t,e)=>{const n=m.useRef();return m.useEffect(()=>{n.current=t},[t,e]),n.current},jy=(t,e,n,r)=>t.getFixedT(e,n,r),r2=(t,e,n,r)=>m.useCallback(jy(t,e,n,r),[t,e,n,r]),xe=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{i18n:n}=e,{i18n:r,defaultNS:s}=m.useContext(e2)||{},i=n||r||XC();if(i&&!i.reportNamespaces&&(i.reportNamespaces=new t2),!i){El("You will need to pass in an i18next instance by using initReactI18next");const w=(_,C)=>Gn(C)?C:zC(C)&&Gn(C.defaultValue)?C.defaultValue:Array.isArray(_)?_[_.length-1]:_,E=[w,{},!1];return E.t=w,E.i18n={},E.ready=!1,E}i.options.react&&i.options.react.wait!==void 0&&El("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const o={...JC(),...i.options.react,...e},{useSuspense:a,keyPrefix:c}=o;let l=t||s||i.options&&i.options.defaultNS;l=Gn(l)?[l]:l||["translation"],i.reportNamespaces.addUsedNamespaces&&i.reportNamespaces.addUsedNamespaces(l);const u=(i.isInitialized||i.initializedStoreOnce)&&l.every(w=>HC(w,i,o)),h=r2(i,e.lng||null,o.nsMode==="fallback"?l:l[0],c),f=()=>h,p=()=>jy(i,e.lng||null,o.nsMode==="fallback"?l:l[0],c),[g,y]=m.useState(f);let v=l.join();e.lng&&(v=`${e.lng}${v}`);const S=n2(v),b=m.useRef(!0);m.useEffect(()=>{const{bindI18n:w,bindI18nStore:E}=o;b.current=!0,!u&&!a&&(e.lng?of(i,e.lng,l,()=>{b.current&&y(p)}):sf(i,l,()=>{b.current&&y(p)})),u&&S&&S!==v&&b.current&&y(p);const _=()=>{b.current&&y(p)};return w&&i&&i.on(w,_),E&&i&&i.store.on(E,_),()=>{b.current=!1,w&&i&&w.split(" ").forEach(C=>i.off(C,_)),E&&i&&E.split(" ").forEach(C=>i.store.off(C,_))}},[i,v]),m.useEffect(()=>{b.current&&u&&y(f)},[i,c,u]);const x=[g,i,u];if(x.t=g,x.i18n=i,x.ready=u,u||!u&&!a)return x;throw new Promise(w=>{e.lng?of(i,e.lng,l,()=>w()):sf(i,l,()=>w())})},Y=t=>typeof t=="string",ls=()=>{let t,e;const n=new Promise((r,s)=>{t=r,e=s});return n.resolve=t,n.reject=e,n},af=t=>t==null?"":""+t,s2=(t,e,n)=>{t.forEach(r=>{e[r]&&(n[r]=e[r])})},i2=/###/g,cf=t=>t&&t.indexOf("###")>-1?t.replace(i2,"."):t,lf=t=>!t||Y(t),js=(t,e,n)=>{const r=Y(e)?e.split("."):e;let s=0;for(;s<r.length-1;){if(lf(t))return{};const i=cf(r[s]);!t[i]&&n&&(t[i]=new n),Object.prototype.hasOwnProperty.call(t,i)?t=t[i]:t={},++s}return lf(t)?{}:{obj:t,k:cf(r[s])}},uf=(t,e,n)=>{const{obj:r,k:s}=js(t,e,Object);if(r!==void 0||e.length===1){r[s]=n;return}let i=e[e.length-1],o=e.slice(0,e.length-1),a=js(t,o,Object);for(;a.obj===void 0&&o.length;)i=`${o[o.length-1]}.${i}`,o=o.slice(0,o.length-1),a=js(t,o,Object),a&&a.obj&&typeof a.obj[`${a.k}.${i}`]<"u"&&(a.obj=void 0);a.obj[`${a.k}.${i}`]=n},o2=(t,e,n,r)=>{const{obj:s,k:i}=js(t,e,Object);s[i]=s[i]||[],s[i].push(n)},Do=(t,e)=>{const{obj:n,k:r}=js(t,e);if(n)return n[r]},a2=(t,e,n)=>{const r=Do(t,n);return r!==void 0?r:Do(e,n)},Dy=(t,e,n)=>{for(const r in e)r!=="__proto__"&&r!=="constructor"&&(r in t?Y(t[r])||t[r]instanceof String||Y(e[r])||e[r]instanceof String?n&&(t[r]=e[r]):Dy(t[r],e[r],n):t[r]=e[r]);return t},hr=t=>t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var c2={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const l2=t=>Y(t)?t.replace(/[&<>"'\/]/g,e=>c2[e]):t;class u2{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const n=this.regExpMap.get(e);if(n!==void 0)return n;const r=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,r),this.regExpQueue.push(e),r}}const d2=[" ",",","?","!",";"],h2=new u2(20),f2=(t,e,n)=>{e=e||"",n=n||"";const r=d2.filter(o=>e.indexOf(o)<0&&n.indexOf(o)<0);if(r.length===0)return!0;const s=h2.getRegExp(`(${r.map(o=>o==="?"?"\\?":o).join("|")})`);let i=!s.test(t);if(!i){const o=t.indexOf(n);o>0&&!s.test(t.substring(0,o))&&(i=!0)}return i},Tl=function(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!t)return;if(t[e])return t[e];const r=e.split(n);let s=t;for(let i=0;i<r.length;){if(!s||typeof s!="object")return;let o,a="";for(let c=i;c<r.length;++c)if(c!==i&&(a+=n),a+=r[c],o=s[a],o!==void 0){if(["string","number","boolean"].indexOf(typeof o)>-1&&c<r.length-1)continue;i+=c-i+1;break}s=o}return s},Mo=t=>t&&t.replace("_","-"),p2={type:"logger",log(t){this.output("log",t)},warn(t){this.output("warn",t)},error(t){this.output("error",t)},output(t,e){console&&console[t]&&console[t].apply(console,e)}};let m2=class Cl{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,n)}init(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=n.prefix||"i18next:",this.logger=e||p2,this.options=n,this.debug=n.debug}log(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return this.forward(n,"log","",!0)}warn(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return this.forward(n,"warn","",!0)}error(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return this.forward(n,"error","")}deprecate(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return this.forward(n,"warn","WARNING DEPRECATED: ",!0)}forward(e,n,r,s){return s&&!this.debug?null:(Y(e[0])&&(e[0]=`${r}${this.prefix} ${e[0]}`),this.logger[n](e))}create(e){return new Cl(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new Cl(this.logger,e)}};var Rt=new m2;class Ta{constructor(){this.observers={}}on(e,n){return e.split(" ").forEach(r=>{this.observers[r]||(this.observers[r]=new Map);const s=this.observers[r].get(n)||0;this.observers[r].set(n,s+1)}),this}off(e,n){if(this.observers[e]){if(!n){delete this.observers[e];return}this.observers[e].delete(n)}}emit(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(o=>{let[a,c]=o;for(let l=0;l<c;l++)a(...r)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(o=>{let[a,c]=o;for(let l=0;l<c;l++)a.apply(a,[e,...r])})}}class df extends Ta{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const n=this.options.ns.indexOf(e);n>-1&&this.options.ns.splice(n,1)}getResource(e,n,r){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const i=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,o=s.ignoreJSONStructure!==void 0?s.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;e.indexOf(".")>-1?a=e.split("."):(a=[e,n],r&&(Array.isArray(r)?a.push(...r):Y(r)&&i?a.push(...r.split(i)):a.push(r)));const c=Do(this.data,a);return!c&&!n&&!r&&e.indexOf(".")>-1&&(e=a[0],n=a[1],r=a.slice(2).join(".")),c||!o||!Y(r)?c:Tl(this.data&&this.data[e]&&this.data[e][n],r,i)}addResource(e,n,r,s){let i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const o=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator;let a=[e,n];r&&(a=a.concat(o?r.split(o):r)),e.indexOf(".")>-1&&(a=e.split("."),s=n,n=a[1]),this.addNamespaces(n),uf(this.data,a,s),i.silent||this.emit("added",e,n,r,s)}addResources(e,n,r){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const i in r)(Y(r[i])||Array.isArray(r[i]))&&this.addResource(e,n,i,r[i],{silent:!0});s.silent||this.emit("added",e,n,r)}addResourceBundle(e,n,r,s,i){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},a=[e,n];e.indexOf(".")>-1&&(a=e.split("."),s=r,r=n,n=a[1]),this.addNamespaces(n);let c=Do(this.data,a)||{};o.skipCopy||(r=JSON.parse(JSON.stringify(r))),s?Dy(c,r,i):c={...c,...r},uf(this.data,a,c),o.silent||this.emit("added",e,n,r)}removeResourceBundle(e,n){this.hasResourceBundle(e,n)&&delete this.data[e][n],this.removeNamespaces(n),this.emit("removed",e,n)}hasResourceBundle(e,n){return this.getResource(e,n)!==void 0}getResourceBundle(e,n){return n||(n=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(e,n)}:this.getResource(e,n)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const n=this.getDataByLanguage(e);return!!(n&&Object.keys(n)||[]).find(s=>n[s]&&Object.keys(n[s]).length>0)}toJSON(){return this.data}}var My={processors:{},addPostProcessor(t){this.processors[t.name]=t},handle(t,e,n,r,s){return t.forEach(i=>{this.processors[i]&&(e=this.processors[i].process(e,n,r,s))}),e}};const hf={};class Fo extends Ta{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),s2(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Rt.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const r=this.resolve(e,n);return r&&r.res!==void 0}extractFromKey(e,n){let r=n.nsSeparator!==void 0?n.nsSeparator:this.options.nsSeparator;r===void 0&&(r=":");const s=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let i=n.ns||this.options.defaultNS||[];const o=r&&e.indexOf(r)>-1,a=!this.options.userDefinedKeySeparator&&!n.keySeparator&&!this.options.userDefinedNsSeparator&&!n.nsSeparator&&!f2(e,r,s);if(o&&!a){const c=e.match(this.interpolator.nestingRegexp);if(c&&c.length>0)return{key:e,namespaces:Y(i)?[i]:i};const l=e.split(r);(r!==s||r===s&&this.options.ns.indexOf(l[0])>-1)&&(i=l.shift()),e=l.join(s)}return{key:e,namespaces:Y(i)?[i]:i}}translate(e,n,r){if(typeof n!="object"&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),typeof n=="object"&&(n={...n}),n||(n={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const s=n.returnDetails!==void 0?n.returnDetails:this.options.returnDetails,i=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,{key:o,namespaces:a}=this.extractFromKey(e[e.length-1],n),c=a[a.length-1],l=n.lng||this.language,u=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(l&&l.toLowerCase()==="cimode"){if(u){const w=n.nsSeparator||this.options.nsSeparator;return s?{res:`${c}${w}${o}`,usedKey:o,exactUsedKey:o,usedLng:l,usedNS:c,usedParams:this.getUsedParamsDetails(n)}:`${c}${w}${o}`}return s?{res:o,usedKey:o,exactUsedKey:o,usedLng:l,usedNS:c,usedParams:this.getUsedParamsDetails(n)}:o}const h=this.resolve(e,n);let f=h&&h.res;const p=h&&h.usedKey||o,g=h&&h.exactUsedKey||o,y=Object.prototype.toString.apply(f),v=["[object Number]","[object Function]","[object RegExp]"],S=n.joinArrays!==void 0?n.joinArrays:this.options.joinArrays,b=!this.i18nFormat||this.i18nFormat.handleAsObject,x=!Y(f)&&typeof f!="boolean"&&typeof f!="number";if(b&&f&&x&&v.indexOf(y)<0&&!(Y(S)&&Array.isArray(f))){if(!n.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const w=this.options.returnedObjectHandler?this.options.returnedObjectHandler(p,f,{...n,ns:a}):`key '${o} (${this.language})' returned an object instead of string.`;return s?(h.res=w,h.usedParams=this.getUsedParamsDetails(n),h):w}if(i){const w=Array.isArray(f),E=w?[]:{},_=w?g:p;for(const C in f)if(Object.prototype.hasOwnProperty.call(f,C)){const R=`${_}${i}${C}`;E[C]=this.translate(R,{...n,joinArrays:!1,ns:a}),E[C]===R&&(E[C]=f[C])}f=E}}else if(b&&Y(S)&&Array.isArray(f))f=f.join(S),f&&(f=this.extendTranslation(f,e,n,r));else{let w=!1,E=!1;const _=n.count!==void 0&&!Y(n.count),C=Fo.hasDefaultValue(n),R=_?this.pluralResolver.getSuffix(l,n.count,n):"",O=n.ordinal&&_?this.pluralResolver.getSuffix(l,n.count,{ordinal:!1}):"",$=_&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),B=$&&n[`defaultValue${this.options.pluralSeparator}zero`]||n[`defaultValue${R}`]||n[`defaultValue${O}`]||n.defaultValue;!this.isValidLookup(f)&&C&&(w=!0,f=B),this.isValidLookup(f)||(E=!0,f=o);const H=(n.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&E?void 0:f,ee=C&&B!==f&&this.options.updateMissing;if(E||w||ee){if(this.logger.log(ee?"updateKey":"missingKey",l,c,o,ee?B:f),i){const le=this.resolve(o,{...n,keySeparator:!1});le&&le.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let oe=[];const te=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if(this.options.saveMissingTo==="fallback"&&te&&te[0])for(let le=0;le<te.length;le++)oe.push(te[le]);else this.options.saveMissingTo==="all"?oe=this.languageUtils.toResolveHierarchy(n.lng||this.language):oe.push(n.lng||this.language);const he=(le,U,P)=>{const D=C&&P!==f?P:H;this.options.missingKeyHandler?this.options.missingKeyHandler(le,c,U,D,ee,n):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(le,c,U,D,ee,n),this.emit("missingKey",le,c,U,f)};this.options.saveMissing&&(this.options.saveMissingPlurals&&_?oe.forEach(le=>{const U=this.pluralResolver.getSuffixes(le,n);$&&n[`defaultValue${this.options.pluralSeparator}zero`]&&U.indexOf(`${this.options.pluralSeparator}zero`)<0&&U.push(`${this.options.pluralSeparator}zero`),U.forEach(P=>{he([le],o+P,n[`defaultValue${P}`]||B)})}):he(oe,o,B))}f=this.extendTranslation(f,e,n,h,r),E&&f===o&&this.options.appendNamespaceToMissingKey&&(f=`${c}:${o}`),(E||w)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?f=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${c}:${o}`:o,w?f:void 0):f=this.options.parseMissingKeyHandler(f))}return s?(h.res=f,h.usedParams=this.getUsedParamsDetails(n),h):f}extendTranslation(e,n,r,s,i){var o=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...r},r.lng||this.language||s.usedLng,s.usedNS,s.usedKey,{resolved:s});else if(!r.skipInterpolation){r.interpolation&&this.interpolator.init({...r,interpolation:{...this.options.interpolation,...r.interpolation}});const l=Y(e)&&(r&&r.interpolation&&r.interpolation.skipOnVariables!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let u;if(l){const f=e.match(this.interpolator.nestingRegexp);u=f&&f.length}let h=r.replace&&!Y(r.replace)?r.replace:r;if(this.options.interpolation.defaultVariables&&(h={...this.options.interpolation.defaultVariables,...h}),e=this.interpolator.interpolate(e,h,r.lng||this.language||s.usedLng,r),l){const f=e.match(this.interpolator.nestingRegexp),p=f&&f.length;u<p&&(r.nest=!1)}!r.lng&&this.options.compatibilityAPI!=="v1"&&s&&s.res&&(r.lng=this.language||s.usedLng),r.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var f=arguments.length,p=new Array(f),g=0;g<f;g++)p[g]=arguments[g];return i&&i[0]===p[0]&&!r.context?(o.logger.warn(`It seems you are nesting recursively key: ${p[0]} in key: ${n[0]}`),null):o.translate(...p,n)},r)),r.interpolation&&this.interpolator.reset()}const a=r.postProcess||this.options.postProcess,c=Y(a)?[a]:a;return e!=null&&c&&c.length&&r.applyPostProcessor!==!1&&(e=My.handle(c,e,n,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...s,usedParams:this.getUsedParamsDetails(r)},...r}:r,this)),e}resolve(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r,s,i,o,a;return Y(e)&&(e=[e]),e.forEach(c=>{if(this.isValidLookup(r))return;const l=this.extractFromKey(c,n),u=l.key;s=u;let h=l.namespaces;this.options.fallbackNS&&(h=h.concat(this.options.fallbackNS));const f=n.count!==void 0&&!Y(n.count),p=f&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),g=n.context!==void 0&&(Y(n.context)||typeof n.context=="number")&&n.context!=="",y=n.lngs?n.lngs:this.languageUtils.toResolveHierarchy(n.lng||this.language,n.fallbackLng);h.forEach(v=>{this.isValidLookup(r)||(a=v,!hf[`${y[0]}-${v}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(a)&&(hf[`${y[0]}-${v}`]=!0,this.logger.warn(`key "${s}" for languages "${y.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),y.forEach(S=>{if(this.isValidLookup(r))return;o=S;const b=[u];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(b,u,S,v,n);else{let w;f&&(w=this.pluralResolver.getSuffix(S,n.count,n));const E=`${this.options.pluralSeparator}zero`,_=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(f&&(b.push(u+w),n.ordinal&&w.indexOf(_)===0&&b.push(u+w.replace(_,this.options.pluralSeparator)),p&&b.push(u+E)),g){const C=`${u}${this.options.contextSeparator}${n.context}`;b.push(C),f&&(b.push(C+w),n.ordinal&&w.indexOf(_)===0&&b.push(C+w.replace(_,this.options.pluralSeparator)),p&&b.push(C+E))}}let x;for(;x=b.pop();)this.isValidLookup(r)||(i=x,r=this.getResource(S,v,x,n))}))})}),{res:r,usedKey:s,exactUsedKey:i,usedLng:o,usedNS:a}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,n,r){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,n,r,s):this.resourceStore.getResource(e,n,r,s)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],r=e.replace&&!Y(e.replace);let s=r?e.replace:e;if(r&&typeof e.count<"u"&&(s.count=e.count),this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),!r){s={...s};for(const i of n)delete s[i]}return s}static hasDefaultValue(e){const n="defaultValue";for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&n===r.substring(0,n.length)&&e[r]!==void 0)return!0;return!1}}const fc=t=>t.charAt(0).toUpperCase()+t.slice(1);class ff{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Rt.create("languageUtils")}getScriptPartFromCode(e){if(e=Mo(e),!e||e.indexOf("-")<0)return null;const n=e.split("-");return n.length===2||(n.pop(),n[n.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(n.join("-"))}getLanguagePartFromCode(e){if(e=Mo(e),!e||e.indexOf("-")<0)return e;const n=e.split("-");return this.formatLanguageCode(n[0])}formatLanguageCode(e){if(Y(e)&&e.indexOf("-")>-1){if(typeof Intl<"u"&&typeof Intl.getCanonicalLocales<"u")try{let s=Intl.getCanonicalLocales(e)[0];if(s&&this.options.lowerCaseLng&&(s=s.toLowerCase()),s)return s}catch{}const n=["hans","hant","latn","cyrl","cans","mong","arab"];let r=e.split("-");return this.options.lowerCaseLng?r=r.map(s=>s.toLowerCase()):r.length===2?(r[0]=r[0].toLowerCase(),r[1]=r[1].toUpperCase(),n.indexOf(r[1].toLowerCase())>-1&&(r[1]=fc(r[1].toLowerCase()))):r.length===3&&(r[0]=r[0].toLowerCase(),r[1].length===2&&(r[1]=r[1].toUpperCase()),r[0]!=="sgn"&&r[2].length===2&&(r[2]=r[2].toUpperCase()),n.indexOf(r[1].toLowerCase())>-1&&(r[1]=fc(r[1].toLowerCase())),n.indexOf(r[2].toLowerCase())>-1&&(r[2]=fc(r[2].toLowerCase()))),r.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let n;return e.forEach(r=>{if(n)return;const s=this.formatLanguageCode(r);(!this.options.supportedLngs||this.isSupportedCode(s))&&(n=s)}),!n&&this.options.supportedLngs&&e.forEach(r=>{if(n)return;const s=this.getLanguagePartFromCode(r);if(this.isSupportedCode(s))return n=s;n=this.options.supportedLngs.find(i=>{if(i===s)return i;if(!(i.indexOf("-")<0&&s.indexOf("-")<0)&&(i.indexOf("-")>0&&s.indexOf("-")<0&&i.substring(0,i.indexOf("-"))===s||i.indexOf(s)===0&&s.length>1))return i})}),n||(n=this.getFallbackCodes(this.options.fallbackLng)[0]),n}getFallbackCodes(e,n){if(!e)return[];if(typeof e=="function"&&(e=e(n)),Y(e)&&(e=[e]),Array.isArray(e))return e;if(!n)return e.default||[];let r=e[n];return r||(r=e[this.getScriptPartFromCode(n)]),r||(r=e[this.formatLanguageCode(n)]),r||(r=e[this.getLanguagePartFromCode(n)]),r||(r=e.default),r||[]}toResolveHierarchy(e,n){const r=this.getFallbackCodes(n||this.options.fallbackLng||[],e),s=[],i=o=>{o&&(this.isSupportedCode(o)?s.push(o):this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`))};return Y(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&i(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&i(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&i(this.getLanguagePartFromCode(e))):Y(e)&&i(this.formatLanguageCode(e)),r.forEach(o=>{s.indexOf(o)<0&&i(this.formatLanguageCode(o))}),s}}let g2=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],y2={1:t=>+(t>1),2:t=>+(t!=1),3:t=>0,4:t=>t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,5:t=>t==0?0:t==1?1:t==2?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5,6:t=>t==1?0:t>=2&&t<=4?1:2,7:t=>t==1?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,8:t=>t==1?0:t==2?1:t!=8&&t!=11?2:3,9:t=>+(t>=2),10:t=>t==1?0:t==2?1:t<7?2:t<11?3:4,11:t=>t==1||t==11?0:t==2||t==12?1:t>2&&t<20?2:3,12:t=>+(t%10!=1||t%100==11),13:t=>+(t!==0),14:t=>t==1?0:t==2?1:t==3?2:3,15:t=>t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2,16:t=>t%10==1&&t%100!=11?0:t!==0?1:2,17:t=>t==1||t%10==1&&t%100!=11?0:1,18:t=>t==0?0:t==1?1:2,19:t=>t==1?0:t==0||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3,20:t=>t==1?0:t==0||t%100>0&&t%100<20?1:2,21:t=>t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0,22:t=>t==1?0:t==2?1:(t<0||t>10)&&t%10==0?2:3};const v2=["v1","v2","v3"],b2=["v4"],pf={zero:0,one:1,two:2,few:3,many:4,other:5},x2=()=>{const t={};return g2.forEach(e=>{e.lngs.forEach(n=>{t[n]={numbers:e.nr,plurals:y2[e.fc]}})}),t};class w2{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=n,this.logger=Rt.create("pluralResolver"),(!this.options.compatibilityJSON||b2.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=x2(),this.pluralRulesCache={}}addRule(e,n){this.rules[e]=n}clearCache(){this.pluralRulesCache={}}getRule(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi()){const r=Mo(e==="dev"?"en":e),s=n.ordinal?"ordinal":"cardinal",i=JSON.stringify({cleanedCode:r,type:s});if(i in this.pluralRulesCache)return this.pluralRulesCache[i];let o;try{o=new Intl.PluralRules(r,{type:s})}catch{if(!e.match(/-|_/))return;const c=this.languageUtils.getLanguagePartFromCode(e);o=this.getRule(c,n)}return this.pluralRulesCache[i]=o,o}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getRule(e,n);return this.shouldUseIntlApi()?r&&r.resolvedOptions().pluralCategories.length>1:r&&r.numbers.length>1}getPluralFormsOfKey(e,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,r).map(s=>`${n}${s}`)}getSuffixes(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getRule(e,n);return r?this.shouldUseIntlApi()?r.resolvedOptions().pluralCategories.sort((s,i)=>pf[s]-pf[i]).map(s=>`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${s}`):r.numbers.map(s=>this.getSuffix(e,s,n)):[]}getSuffix(e,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const s=this.getRule(e,r);return s?this.shouldUseIntlApi()?`${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${s.select(n)}`:this.getSuffixRetroCompatible(s,n):(this.logger.warn(`no plural rule found for: ${e}`),"")}getSuffixRetroCompatible(e,n){const r=e.noAbs?e.plurals(n):e.plurals(Math.abs(n));let s=e.numbers[r];this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1&&(s===2?s="plural":s===1&&(s=""));const i=()=>this.options.prepend&&s.toString()?this.options.prepend+s.toString():s.toString();return this.options.compatibilityJSON==="v1"?s===1?"":typeof s=="number"?`_plural_${s.toString()}`:i():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1?i():this.options.prepend&&r.toString()?this.options.prepend+r.toString():r.toString()}shouldUseIntlApi(){return!v2.includes(this.options.compatibilityJSON)}}const mf=function(t,e,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,i=a2(t,e,n);return!i&&s&&Y(n)&&(i=Tl(t,n,r),i===void 0&&(i=Tl(e,n,r))),i},pc=t=>t.replace(/\$/g,"$$$$");class k2{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Rt.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||(n=>n),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:n,escapeValue:r,useRawValueToEscape:s,prefix:i,prefixEscaped:o,suffix:a,suffixEscaped:c,formatSeparator:l,unescapeSuffix:u,unescapePrefix:h,nestingPrefix:f,nestingPrefixEscaped:p,nestingSuffix:g,nestingSuffixEscaped:y,nestingOptionsSeparator:v,maxReplaces:S,alwaysFormat:b}=e.interpolation;this.escape=n!==void 0?n:l2,this.escapeValue=r!==void 0?r:!0,this.useRawValueToEscape=s!==void 0?s:!1,this.prefix=i?hr(i):o||"{{",this.suffix=a?hr(a):c||"}}",this.formatSeparator=l||",",this.unescapePrefix=u?"":h||"-",this.unescapeSuffix=this.unescapePrefix?"":u||"",this.nestingPrefix=f?hr(f):p||hr("$t("),this.nestingSuffix=g?hr(g):y||hr(")"),this.nestingOptionsSeparator=v||",",this.maxReplaces=S||1e3,this.alwaysFormat=b!==void 0?b:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(n,r)=>n&&n.source===r?(n.lastIndex=0,n):new RegExp(r,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,n,r,s){let i,o,a;const c=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},l=p=>{if(p.indexOf(this.formatSeparator)<0){const S=mf(n,c,p,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(S,void 0,r,{...s,...n,interpolationkey:p}):S}const g=p.split(this.formatSeparator),y=g.shift().trim(),v=g.join(this.formatSeparator).trim();return this.format(mf(n,c,y,this.options.keySeparator,this.options.ignoreJSONStructure),v,r,{...s,...n,interpolationkey:y})};this.resetRegExp();const u=s&&s.missingInterpolationHandler||this.options.missingInterpolationHandler,h=s&&s.interpolation&&s.interpolation.skipOnVariables!==void 0?s.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:p=>pc(p)},{regex:this.regexp,safeValue:p=>this.escapeValue?pc(this.escape(p)):pc(p)}].forEach(p=>{for(a=0;i=p.regex.exec(e);){const g=i[1].trim();if(o=l(g),o===void 0)if(typeof u=="function"){const v=u(e,i,s);o=Y(v)?v:""}else if(s&&Object.prototype.hasOwnProperty.call(s,g))o="";else if(h){o=i[0];continue}else this.logger.warn(`missed to pass in variable ${g} for interpolating ${e}`),o="";else!Y(o)&&!this.useRawValueToEscape&&(o=af(o));const y=p.safeValue(o);if(e=e.replace(i[0],y),h?(p.regex.lastIndex+=o.length,p.regex.lastIndex-=i[0].length):p.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),e}nest(e,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s,i,o;const a=(c,l)=>{const u=this.nestingOptionsSeparator;if(c.indexOf(u)<0)return c;const h=c.split(new RegExp(`${u}[ ]*{`));let f=`{${h[1]}`;c=h[0],f=this.interpolate(f,o);const p=f.match(/'/g),g=f.match(/"/g);(p&&p.length%2===0&&!g||g.length%2!==0)&&(f=f.replace(/'/g,'"'));try{o=JSON.parse(f),l&&(o={...l,...o})}catch(y){return this.logger.warn(`failed parsing options string in nesting for key ${c}`,y),`${c}${u}${f}`}return o.defaultValue&&o.defaultValue.indexOf(this.prefix)>-1&&delete o.defaultValue,c};for(;s=this.nestingRegexp.exec(e);){let c=[];o={...r},o=o.replace&&!Y(o.replace)?o.replace:o,o.applyPostProcessor=!1,delete o.defaultValue;let l=!1;if(s[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(s[1])){const u=s[1].split(this.formatSeparator).map(h=>h.trim());s[1]=u.shift(),c=u,l=!0}if(i=n(a.call(this,s[1].trim(),o),o),i&&s[0]===e&&!Y(i))return i;Y(i)||(i=af(i)),i||(this.logger.warn(`missed to resolve ${s[1]} for nesting ${e}`),i=""),l&&(i=c.reduce((u,h)=>this.format(u,h,r.lng,{...r,interpolationkey:s[1].trim()}),i.trim())),e=e.replace(s[0],i),this.regexp.lastIndex=0}return e}}const S2=t=>{let e=t.toLowerCase().trim();const n={};if(t.indexOf("(")>-1){const r=t.split("(");e=r[0].toLowerCase().trim();const s=r[1].substring(0,r[1].length-1);e==="currency"&&s.indexOf(":")<0?n.currency||(n.currency=s.trim()):e==="relativetime"&&s.indexOf(":")<0?n.range||(n.range=s.trim()):s.split(";").forEach(o=>{if(o){const[a,...c]=o.split(":"),l=c.join(":").trim().replace(/^'+|'+$/g,""),u=a.trim();n[u]||(n[u]=l),l==="false"&&(n[u]=!1),l==="true"&&(n[u]=!0),isNaN(l)||(n[u]=parseInt(l,10))}})}return{formatName:e,formatOptions:n}},fr=t=>{const e={};return(n,r,s)=>{let i=s;s&&s.interpolationkey&&s.formatParams&&s.formatParams[s.interpolationkey]&&s[s.interpolationkey]&&(i={...i,[s.interpolationkey]:void 0});const o=r+JSON.stringify(i);let a=e[o];return a||(a=t(Mo(r),s),e[o]=a),a(n)}};class E2{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Rt.create("formatter"),this.options=e,this.formats={number:fr((n,r)=>{const s=new Intl.NumberFormat(n,{...r});return i=>s.format(i)}),currency:fr((n,r)=>{const s=new Intl.NumberFormat(n,{...r,style:"currency"});return i=>s.format(i)}),datetime:fr((n,r)=>{const s=new Intl.DateTimeFormat(n,{...r});return i=>s.format(i)}),relativetime:fr((n,r)=>{const s=new Intl.RelativeTimeFormat(n,{...r});return i=>s.format(i,r.range||"day")}),list:fr((n,r)=>{const s=new Intl.ListFormat(n,{...r});return i=>s.format(i)})},this.init(e)}init(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=n.interpolation.formatSeparator||","}add(e,n){this.formats[e.toLowerCase().trim()]=n}addCached(e,n){this.formats[e.toLowerCase().trim()]=fr(n)}format(e,n,r){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const i=n.split(this.formatSeparator);if(i.length>1&&i[0].indexOf("(")>1&&i[0].indexOf(")")<0&&i.find(a=>a.indexOf(")")>-1)){const a=i.findIndex(c=>c.indexOf(")")>-1);i[0]=[i[0],...i.splice(1,a)].join(this.formatSeparator)}return i.reduce((a,c)=>{const{formatName:l,formatOptions:u}=S2(c);if(this.formats[l]){let h=a;try{const f=s&&s.formatParams&&s.formatParams[s.interpolationkey]||{},p=f.locale||f.lng||s.locale||s.lng||r;h=this.formats[l](a,p,{...u,...s,...f})}catch(f){this.logger.warn(f)}return h}else this.logger.warn(`there was no format function for ${l}`);return a},e)}}const _2=(t,e)=>{t.pending[e]!==void 0&&(delete t.pending[e],t.pendingCount--)};class T2 extends Ta{constructor(e,n,r){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=n,this.services=r,this.languageUtils=r.languageUtils,this.options=s,this.logger=Rt.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=s.maxParallelReads||10,this.readingCalls=0,this.maxRetries=s.maxRetries>=0?s.maxRetries:5,this.retryTimeout=s.retryTimeout>=1?s.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(r,s.backend,s)}queueLoad(e,n,r,s){const i={},o={},a={},c={};return e.forEach(l=>{let u=!0;n.forEach(h=>{const f=`${l}|${h}`;!r.reload&&this.store.hasResourceBundle(l,h)?this.state[f]=2:this.state[f]<0||(this.state[f]===1?o[f]===void 0&&(o[f]=!0):(this.state[f]=1,u=!1,o[f]===void 0&&(o[f]=!0),i[f]===void 0&&(i[f]=!0),c[h]===void 0&&(c[h]=!0)))}),u||(a[l]=!0)}),(Object.keys(i).length||Object.keys(o).length)&&this.queue.push({pending:o,pendingCount:Object.keys(o).length,loaded:{},errors:[],callback:s}),{toLoad:Object.keys(i),pending:Object.keys(o),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(c)}}loaded(e,n,r){const s=e.split("|"),i=s[0],o=s[1];n&&this.emit("failedLoading",i,o,n),!n&&r&&this.store.addResourceBundle(i,o,r,void 0,void 0,{skipCopy:!0}),this.state[e]=n?-1:2,n&&r&&(this.state[e]=0);const a={};this.queue.forEach(c=>{o2(c.loaded,[i],o),_2(c,e),n&&c.errors.push(n),c.pendingCount===0&&!c.done&&(Object.keys(c.loaded).forEach(l=>{a[l]||(a[l]={});const u=c.loaded[l];u.length&&u.forEach(h=>{a[l][h]===void 0&&(a[l][h]=!0)})}),c.done=!0,c.errors.length?c.callback(c.errors):c.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(c=>!c.done)}read(e,n,r){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,o=arguments.length>5?arguments[5]:void 0;if(!e.length)return o(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:n,fcName:r,tried:s,wait:i,callback:o});return}this.readingCalls++;const a=(l,u)=>{if(this.readingCalls--,this.waitingReads.length>0){const h=this.waitingReads.shift();this.read(h.lng,h.ns,h.fcName,h.tried,h.wait,h.callback)}if(l&&u&&s<this.maxRetries){setTimeout(()=>{this.read.call(this,e,n,r,s+1,i*2,o)},i);return}o(l,u)},c=this.backend[r].bind(this.backend);if(c.length===2){try{const l=c(e,n);l&&typeof l.then=="function"?l.then(u=>a(null,u)).catch(a):a(null,l)}catch(l){a(l)}return}return c(e,n,a)}prepareLoading(e,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),s&&s();Y(e)&&(e=this.languageUtils.toResolveHierarchy(e)),Y(n)&&(n=[n]);const i=this.queueLoad(e,n,r,s);if(!i.toLoad.length)return i.pending.length||s(),null;i.toLoad.forEach(o=>{this.loadOne(o)})}load(e,n,r){this.prepareLoading(e,n,{},r)}reload(e,n,r){this.prepareLoading(e,n,{reload:!0},r)}loadOne(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const r=e.split("|"),s=r[0],i=r[1];this.read(s,i,"read",void 0,void 0,(o,a)=>{o&&this.logger.warn(`${n}loading namespace ${i} for language ${s} failed`,o),!o&&a&&this.logger.log(`${n}loaded namespace ${i} for language ${s}`,a),this.loaded(e,o,a)})}saveMissing(e,n,r,s,i){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},a=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(n)){this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(r==null||r==="")){if(this.backend&&this.backend.create){const c={...o,isUpdate:i},l=this.backend.create.bind(this.backend);if(l.length<6)try{let u;l.length===5?u=l(e,n,r,s,c):u=l(e,n,r,s),u&&typeof u.then=="function"?u.then(h=>a(null,h)).catch(a):a(null,u)}catch(u){a(u)}else l(e,n,r,s,a,c)}!e||!e[0]||this.store.addResource(e[0],n,r,s)}}}const gf=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:t=>{let e={};if(typeof t[1]=="object"&&(e=t[1]),Y(t[1])&&(e.defaultValue=t[1]),Y(t[2])&&(e.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const n=t[3]||t[2];Object.keys(n).forEach(r=>{e[r]=n[r]})}return e},interpolation:{escapeValue:!0,format:t=>t,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),yf=t=>(Y(t.ns)&&(t.ns=[t.ns]),Y(t.fallbackLng)&&(t.fallbackLng=[t.fallbackLng]),Y(t.fallbackNS)&&(t.fallbackNS=[t.fallbackNS]),t.supportedLngs&&t.supportedLngs.indexOf("cimode")<0&&(t.supportedLngs=t.supportedLngs.concat(["cimode"])),t),Ki=()=>{},C2=t=>{Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(n=>{typeof t[n]=="function"&&(t[n]=t[n].bind(t))})};class Gs extends Ta{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;if(super(),this.options=yf(e),this.services={},this.logger=Rt,this.modules={external:[]},C2(this),n&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,n),this;setTimeout(()=>{this.init(e,n)},0)}}init(){var e=this;let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof n=="function"&&(r=n,n={}),!n.defaultNS&&n.defaultNS!==!1&&n.ns&&(Y(n.ns)?n.defaultNS=n.ns:n.ns.indexOf("translation")<0&&(n.defaultNS=n.ns[0]));const s=gf();this.options={...s,...this.options,...yf(n)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...s.interpolation,...this.options.interpolation}),n.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=n.keySeparator),n.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=n.nsSeparator);const i=u=>u?typeof u=="function"?new u:u:null;if(!this.options.isClone){this.modules.logger?Rt.init(i(this.modules.logger),this.options):Rt.init(null,this.options);let u;this.modules.formatter?u=this.modules.formatter:typeof Intl<"u"&&(u=E2);const h=new ff(this.options);this.store=new df(this.options.resources,this.options);const f=this.services;f.logger=Rt,f.resourceStore=this.store,f.languageUtils=h,f.pluralResolver=new w2(h,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),u&&(!this.options.interpolation.format||this.options.interpolation.format===s.interpolation.format)&&(f.formatter=i(u),f.formatter.init(f,this.options),this.options.interpolation.format=f.formatter.format.bind(f.formatter)),f.interpolator=new k2(this.options),f.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},f.backendConnector=new T2(i(this.modules.backend),f.resourceStore,f,this.options),f.backendConnector.on("*",function(p){for(var g=arguments.length,y=new Array(g>1?g-1:0),v=1;v<g;v++)y[v-1]=arguments[v];e.emit(p,...y)}),this.modules.languageDetector&&(f.languageDetector=i(this.modules.languageDetector),f.languageDetector.init&&f.languageDetector.init(f,this.options.detection,this.options)),this.modules.i18nFormat&&(f.i18nFormat=i(this.modules.i18nFormat),f.i18nFormat.init&&f.i18nFormat.init(this)),this.translator=new Fo(this.services,this.options),this.translator.on("*",function(p){for(var g=arguments.length,y=new Array(g>1?g-1:0),v=1;v<g;v++)y[v-1]=arguments[v];e.emit(p,...y)}),this.modules.external.forEach(p=>{p.init&&p.init(this)})}if(this.format=this.options.interpolation.format,r||(r=Ki),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const u=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);u.length>0&&u[0]!=="dev"&&(this.options.lng=u[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(u=>{this[u]=function(){return e.store[u](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(u=>{this[u]=function(){return e.store[u](...arguments),e}});const c=ls(),l=()=>{const u=(h,f)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),c.resolve(f),r(h,f)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return u(null,this.t.bind(this));this.changeLanguage(this.options.lng,u)};return this.options.resources||!this.options.initImmediate?l():setTimeout(l,0),c}loadResources(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ki;const s=Y(e)?e:this.language;if(typeof e=="function"&&(r=e),!this.options.resources||this.options.partialBundledLanguages){if(s&&s.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return r();const i=[],o=a=>{if(!a||a==="cimode")return;this.services.languageUtils.toResolveHierarchy(a).forEach(l=>{l!=="cimode"&&i.indexOf(l)<0&&i.push(l)})};s?o(s):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(c=>o(c)),this.options.preload&&this.options.preload.forEach(a=>o(a)),this.services.backendConnector.load(i,this.options.ns,a=>{!a&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),r(a)})}else r(null)}reloadResources(e,n,r){const s=ls();return typeof e=="function"&&(r=e,e=void 0),typeof n=="function"&&(r=n,n=void 0),e||(e=this.languages),n||(n=this.options.ns),r||(r=Ki),this.services.backendConnector.reload(e,n,i=>{s.resolve(),r(i)}),s}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&My.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let n=0;n<this.languages.length;n++){const r=this.languages[n];if(!(["cimode","dev"].indexOf(r)>-1)&&this.store.hasLanguageSomeTranslations(r)){this.resolvedLanguage=r;break}}}changeLanguage(e,n){var r=this;this.isLanguageChangingTo=e;const s=ls();this.emit("languageChanging",e);const i=c=>{this.language=c,this.languages=this.services.languageUtils.toResolveHierarchy(c),this.resolvedLanguage=void 0,this.setResolvedLanguage(c)},o=(c,l)=>{l?(i(l),this.translator.changeLanguage(l),this.isLanguageChangingTo=void 0,this.emit("languageChanged",l),this.logger.log("languageChanged",l)):this.isLanguageChangingTo=void 0,s.resolve(function(){return r.t(...arguments)}),n&&n(c,function(){return r.t(...arguments)})},a=c=>{!e&&!c&&this.services.languageDetector&&(c=[]);const l=Y(c)?c:this.services.languageUtils.getBestMatchFromCodes(c);l&&(this.language||i(l),this.translator.language||this.translator.changeLanguage(l),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(l)),this.loadResources(l,u=>{o(u,l)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(e),s}getFixedT(e,n,r){var s=this;const i=function(o,a){let c;if(typeof a!="object"){for(var l=arguments.length,u=new Array(l>2?l-2:0),h=2;h<l;h++)u[h-2]=arguments[h];c=s.options.overloadTranslationOptionHandler([o,a].concat(u))}else c={...a};c.lng=c.lng||i.lng,c.lngs=c.lngs||i.lngs,c.ns=c.ns||i.ns,c.keyPrefix!==""&&(c.keyPrefix=c.keyPrefix||r||i.keyPrefix);const f=s.options.keySeparator||".";let p;return c.keyPrefix&&Array.isArray(o)?p=o.map(g=>`${c.keyPrefix}${f}${g}`):p=c.keyPrefix?`${c.keyPrefix}${f}${o}`:o,s.t(p,c)};return Y(e)?i.lng=e:i.lngs=e,i.ns=n,i.keyPrefix=r,i}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const r=n.lng||this.resolvedLanguage||this.languages[0],s=this.options?this.options.fallbackLng:!1,i=this.languages[this.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const o=(a,c)=>{const l=this.services.backendConnector.state[`${a}|${c}`];return l===-1||l===0||l===2};if(n.precheck){const a=n.precheck(this,o);if(a!==void 0)return a}return!!(this.hasResourceBundle(r,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||o(r,e)&&(!s||o(i,e)))}loadNamespaces(e,n){const r=ls();return this.options.ns?(Y(e)&&(e=[e]),e.forEach(s=>{this.options.ns.indexOf(s)<0&&this.options.ns.push(s)}),this.loadResources(s=>{r.resolve(),n&&n(s)}),r):(n&&n(),Promise.resolve())}loadLanguages(e,n){const r=ls();Y(e)&&(e=[e]);const s=this.options.preload||[],i=e.filter(o=>s.indexOf(o)<0&&this.services.languageUtils.isSupportedCode(o));return i.length?(this.options.preload=s.concat(i),this.loadResources(o=>{r.resolve(),n&&n(o)}),r):(n&&n(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";const n=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],r=this.services&&this.services.languageUtils||new ff(gf());return n.indexOf(r.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return new Gs(e,n)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ki;const r=e.forkResourceStore;r&&delete e.forkResourceStore;const s={...this.options,...e,isClone:!0},i=new Gs(s);return(e.debug!==void 0||e.prefix!==void 0)&&(i.logger=i.logger.clone(e)),["store","services","language"].forEach(a=>{i[a]=this[a]}),i.services={...this.services},i.services.utils={hasLoadedNamespace:i.hasLoadedNamespace.bind(i)},r&&(i.store=new df(this.store.data,s),i.services.resourceStore=i.store),i.translator=new Fo(i.services,s),i.translator.on("*",function(a){for(var c=arguments.length,l=new Array(c>1?c-1:0),u=1;u<c;u++)l[u-1]=arguments[u];i.emit(a,...l)}),i.init(s,n),i.translator.options=s,i.translator.backendConnector.services.utils={hasLoadedNamespace:i.hasLoadedNamespace.bind(i)},i}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const $e=Gs.createInstance();$e.createInstance=Gs.createInstance;$e.createInstance;$e.dir;$e.init;$e.loadResources;$e.reloadResources;$e.use;$e.changeLanguage;$e.getFixedT;$e.t;$e.exists;$e.setDefaultNamespace;$e.hasLoadedNamespace;$e.loadNamespaces;$e.loadLanguages;const R2="Sign In",A2="Sign Out",P2="Orders",I2="Language",O2="Loading",N2="Retry",L2="Cancel",j2="Get early access",D2="Account Menu",M2="SenditGo home",F2="Toggle theme",$2="Clear form",V2={shipper:{label:"Shipper",hint:"Create, import and track your orders"},carrier:{label:"Carrier",hint:"SenditGo Carrier fleet console",login:"Carrier login"},consignee:{label:"Consignee",hint:"Sign in to SenditGo Consignee",login:"Consignee login"}},U2="Carrier login",B2={signIn:R2,signOut:A2,orders:P2,language:I2,loading:O2,retry:N2,cancel:L2,getEarlyAccess:j2,accountMenu:D2,brandHome:M2,toggleTheme:F2,clearForm:$2,loginRole:V2,carrierLogin:U2},H2={eyebrow:"Tenant Portal"},z2={ariaLabel:"Platform Navigation",platform:"Platform",groups:{operations:"Operations",finance:"Finance",admin:"Admin"},orders:"Orders",createOrder:"Create Order",importOrders:"Import Orders",billing:"Billing",usersRoles:"Users & Roles"},W2={title:"Sign in to {{brand}}",lead:"Track orders, create shipments, and manage your team.",mobileLabel:"Mobile Number",mobilePlaceholder:"412 345 678",sendCode:"Send Code",otpLabel:"Verification Code",otpHint:"Enter the 6-digit code sent to {{phone}}.",verify:"Verify & Sign In",resend:"Resend Code",changeNumber:"Change Number",invalidPhone:"Enter a valid mobile number.",invalidOtp:"Enter the 6-digit code.",otpFailed:"That code didn't match. Check it and try again.",sendFailed:"We couldn't send the code. Try again in a moment.",loginFailed:"Sign-in failed. Try again.",devSignIn:"Dev Sign-In (Mock)"},q2={title:"Orders",lead:"Find shipments, review status, and open the tracking detail without leaving the platform.",searchLabel:"Search",searchPlaceholder:"Order ID",statusLabel:"Status",allStatuses:"All statuses",applyFilters:"Apply",clearFilters:"Clear",colOrderId:"Order ID",colRoute:"Route",colCreated:"Created",colPackages:"Packages",colStatus:"Status",colActions:"Actions",viewDetails:"View",empty:"No orders match this view.",loadFailed:"We couldn't load your orders.",showingRange:"Showing {{from}}-{{to}} of {{total}}",prevPage:"Previous",nextPage:"Next",detailTitle:"Order {{id}}",detailLead:"Tracking detail, contact handoff, driver assignment, and package state.",detailLoadFailed:"We couldn't load this order.",backToOrders:"Back to orders",sender:"Sender",recipient:"Recipient",timeline:"Timeline",driver:"Driver",comment:"Comment",packagesTitle:"Packages",packageId:"Package ID",packageSize:"Size",packageWeight:"Weight",packagePrice:"Price",packageAbbrev:"pkgs",notAssigned:"Not assigned",none:"None",routeTo:"to",emptyFiltered:"No orders match these filters.",pickup:"Pickup",delivery:"Delivery",timezone:"Timezone",sizeCm:"{{length}} x {{width}} x {{height}} cm",weightKg:"{{weight}} kg"},K2={title:"Create Order",lead:"Prepare a shipment draft with sender, recipient, package, and delivery notes.",sectionContact:"Contact Details",sectionPackage:"Package",senderName:"Sender Name",senderAddress:"Sender Address",senderMobile:"Sender Mobile",senderPostcode:"Sender Postcode",recipientName:"Recipient Name",recipientAddress:"Recipient Address",recipientMobile:"Recipient Mobile",recipientPostcode:"Recipient Postcode",packages:"Packages",weight:"Weight (kg)",reference:"Reference",notes:"Driver Notes",prepareDraft:"Prepare Draft",draftReady:"Your draft is complete and validated.",required:"Complete sender, recipient, addresses, and at least one package.",backendNotice:"Online order creation is coming soon. You can prepare and validate a draft here today."},G2={title:"Import Orders",lead:"Upload a fleet-template CSV to open a preview session. Commit is not live yet.",uploadLabel:"CSV File",chooseFile:"Choose file",downloadTemplate:"Download template",columnsTitle:"Template",columnsBody:"Use the fleet import template (invoice, customer, sender and recipient address parts, SKU, qty, weight, and size). A 6-column file will not open a session.",previewTitle:"Preview session",sessionTitle:"Session {{id}}",sessionFile:"{{name}}",sessionCounts:"{{valid}} valid · {{invalid}} invalid · {{total}} rows",rowsParsed:"{{count}} row parsed",rowsParsed_other:"{{count}} rows parsed",backendNotice:"Online batch import is not live yet. Upload opens a mock preview session from the fleet CSV template — it does not create orders or price them.",previewEmpty:"Upload a fleet-template CSV to open a preview session.",noRows:"That file has no order rows. Add at least one row below the header and try again.",missingColumns:"The file is missing required columns: {{columns}}.",parseFailed:"We couldn't read that file. Export it as CSV and try again.",fileFormat:"Use a .csv exported from the fleet template.",uploadFailed:"We couldn't open a preview session. Try again.",templateFailed:"We couldn't download the template. Try again.",jobMissing:"That preview session is no longer available. Upload the file again.",clearSession:"Clear session",filterAll:"All",filterValid:"Valid",filterInvalid:"Invalid",colInvoice:"Invoice",colRoute:"Route",colPickup:"Pickup",colDelivery:"Delivery",colQty:"Qty",colWeight:"Weight",colReason:"Reason",rowValid:"Valid",rowInvalid:"Invalid"},Z2={title:"Users & Roles",lead:"Manage who can sign in to the portal and what each role can do.",usersTitle:"Users",name:"Name",email:"Email",role:"Role",status:"Status",actions:"Actions",active:"Active",inactive:"Inactive",you:"You",usersEmpty:"No users yet — add your first teammate.",usersLoadFailed:"We couldn't load users.",editUser:"Edit",saveUser:"Save",userUpdated:"{{name}}'s role is now {{role}}.",userUpdateFailed:"We couldn't update that user. Try again.",addUserTitle:"Add User",addUser:"Add User",addUserRequired:"Enter a name and pick a role.",addUserSuccess:"{{name}} has been added.",addUserFailed:"We couldn't add that user. Try again.",rolesTitle:"Roles",permissions:"Permissions",members:"Members",rolesEmpty:"No roles yet — create your first role.",rolesLoadFailed:"We couldn't load roles.",createRole:"Create Role",editRole:"Edit",deleteRole:"Delete",deleteConfirm:"Delete this role?",confirmDelete:"Confirm Delete",roleDeleted:"Role deleted.",deleteFailed:"We couldn't delete that role. Try again.",deleteBlocked_one:"Reassign {{count}} user before deleting this role.",deleteBlocked_other:"Reassign {{count}} users before deleting this role.",systemRole:"Built-in",roleFormCreateTitle:"Create Role",roleFormEditTitle:"Edit Role",roleFormLead:"Name the role and choose what it can do.",roleName:"Role Name",roleFormRequired:"Enter a role name and pick at least one permission.",roleFormSaveFailed:"We couldn't save the role. Try again.",roleFormLoadFailed:"We couldn't load that role.",roleFormNotFound:"This role was not found.",backToAdmin:"Back to Users & Roles",saveChanges:"Save Changes",groupOrders:"Orders",groupUsers:"Users",groupRoles:"Roles",selectRole:"Select a role",rolesUnavailable:"We couldn't load roles for selection.",roleFormSystem:"Built-in roles can't be edited.",invitePhone:"Mobile Number",pending:"Pending",resend:"Resend",revoke:"Revoke",suspend:"Suspend",reactivate:"Reactivate",suspended:"Suspended",activityTitle:"Activity",audit:{roleChanged:"{{actor}} changed {{target}}'s role to {{role}}",suspended:"{{actor}} suspended {{target}}",reactivated:"{{actor}} reactivated {{target}}",invited:"{{actor}} invited {{phone}} as {{role}}",inviteRevoked:"{{actor}} revoked the invite for {{phone}}",inviteResent:"{{actor}} resent the invite to {{phone}}",roleCreated:"{{actor}} created the role {{role}}",roleUpdated:"{{actor}} updated the role {{role}}",roleDeleted:"{{actor}} deleted the role {{role}}"},lastOwnerBlock:"You're the only owner. Assign another owner first.",selfDemoteConfirm:"You'll lose {{capabilities}}.",scopeOwn:"My Orders",scopeCompany:"Company Orders",inviteSectionTitle:"Invite by Phone",sendInvite:"Send Invite",inviteRequired:"Enter a valid +61 mobile number and choose a role.",inviteSentNotice:"Invite sent to {{phone}}.",inviteSendFailed:"We couldn't send that invite. Try again.",inviteResendFailed:"We couldn't resend that invite. Try again.",inviteRevokeFailed:"We couldn't revoke that invite. Try again.",invitesLoadFailed:"We couldn't load pending invites.",invitesEmpty:"No pending invites.",expiresOn:"Expires"},J2={title:"Billing & Payments",lead:"How your account is billed, and the payment methods we support.",methodsTitle:"Payment Methods",status:{available:"Available",pending:"Coming Soon"},methods:{"on-account":{name:"On Account / Invoice",body:"Orders placed in the portal are billed to your company account and settled by invoice — no payment step at order time."},"stripe-card":{name:"Card Payments via Stripe",body:"Pay for orders by card, processed by Stripe. The portal integration is prepared and switches on once the payment API and account keys are issued."}},howTitle:"How Card Payments Will Work",how:{secure:{title:"Card details stay with Stripe",body:"Card numbers are entered in Stripe-hosted secure fields (Stripe Elements) and never touch SenditGo servers, keeping PCI compliance scope with Stripe."},intent:{title:"The backend creates the payment",body:"For each payment, the SenditGo backend creates a Stripe PaymentIntent for the order total and hands the portal its client secret."},confirm:{title:"The portal confirms it",body:"The portal confirms the payment with the per-environment publishable key; bank verification (3-D Secure) is handled by Stripe automatically when required."},receipt:{title:"Receipts flow back to the order",body:"Stripe notifies the backend by webhook, and the payment status and receipt attach to the order in your history."}},readinessTitle:"Integration status:",readinessBody:"The portal side is prepared — provider registry, per-environment key slots, and this page. Card payments switch on when the backend payment API is live and the Stripe keys are configured; on-account billing continues unchanged either way."},Y2={ord_ls:"View Orders",ord_add:"Create Order",ord_imp:"Batch Import Orders",ord_ls_own:"View Own Orders",ord_ls_sub:"View Team Orders",ord_ls_all:"View All Company Orders",perm_role_ls:"View Roles",perm_role_add:"Create Role",perm_role_edt:"Edit Role",perm_role_del:"Delete Role",perm_asst_ls:"View Users",perm_asst_add:"Add Users",perm_asst_edt:"Edit Users",perm_asst_blk:"Suspend / Reactivate Users"},X2={owner:{name:"Owner",desc:"Full access — manage orders company-wide, invite and suspend teammates, and manage roles."},manager:{name:"Manager",desc:"Runs orders company-wide and manages the team; cannot change roles or permissions."},staff:{name:"Staff",desc:"Views and creates orders for their team; cannot manage users or roles."},viewer:{name:"Viewer",desc:"Read-only access to their own orders."},capabilities:{viewOrders:"View orders",createOrders:"Create orders",importOrders:"Import orders",companyOrders:"View company-wide orders",inviteMembers:"Invite members",suspendMembers:"Suspend members",manageRoles:"Manage roles"}},Q2={common:H2,nav:z2,login:W2,orders:q2,createOrder:K2,importOrders:G2,admin:Z2,billing:J2,permissions:Y2,roles:X2},eR={1:"Payment pending",2:"To be scheduled",3:"Awaiting pickup",4:"In transit- supplier to fulfilment center",5:"In fulfilment center",6:"In transit- fulfilment center to customer",7:"Arrived at customer fulfilment center",8:"In transit",9:"Canceled",10:"Delivered",11:"Delivered & Signed",12:"Delivered with Exceptions",13:"Completed",14:"Full cancellation",15:"Complete Manually",16:"Delete Pending Confirmation"},tR={1:"Param Invalid.",2:"Param Required.",3:"Firebase Conn Error.",4:"Phone Number Required.",5:"Account Data Not Exist.",6:"Parse Error.",7:"Param Format Error.",8:"Email Or Password Not Correct.",9:"No Permission.",10:"Role Permission Name Duplicate.",11:"Role Permission Not Exist.",12:"Mobile Had Been Registered.",13:"Email Had Been Registered.",14:"Confirm Password Is Not Correct.",15:"Delivery Not Found.",16:"Delivery Duplicate Signature.",17:"Duplicate System Setting Keyword.",18:"Duplicate Chatroom Service Score.",19:"Chat Partner Haven'T Joined The Chatroom.",20:"Company/Fleet Is Not Exist.",21:"The Chatroom Has Reached The Maximum.",22:"Account Hasn'T Review Data.",23:"Record Not Found.",24:"Abnormal Account.",25:"Delivery Duplicate Score.",26:"Ip Format Error.",27:"Fleet Code Not Exist.",28:"Account In Audit.",29:"Fleet Code Has Benn Used.",30:"Fleet Not Found.",31:"Company Not Found.",32:"Fleet Has Been Loaned.",33:"Account Already Exists.",34:"Vehicle Is Using.",35:"Vehicle Not Found.",36:"Warehouse Not Found.",37:"The Address Format Is Incorrect.",38:"The Warehouse Route Setting Is Incorrect.",39:"Salesorder Not Found.",40:"Company Code Is Already In Use.",41:"Department Does Not Exist.",42:"Account Has Been Disabled.",43:"Salesorder Packages Have Not Been Completed Yet.",44:"Order Repeat Rating.",45:"Package Does Not Exist.",46:"Fleet Company Information Not Found.",47:"Team Rental Record Does Not Exist.",48:"The Driver'S Time Zone Is Incorrectly Read.",49:"Converting Driver'S Time Zone Is Incorrect.",50:"Keyword Does Not Exist.",51:"The City Does Not Exist.",52:"Json Format Conversion Failed.",53:"Errchangeroledriver.",54:"Errchangerolefleetdriver.",55:"Erraccountnotactive.",56:"Wrong License Type.",57:"Errchangerolemember.",58:"Errchangerolecompanymember.",59:"Errsalesordernotwaitforpay.",60:"Errdeliveryidincorrect.",61:"Platform Not Exist.",62:"Delivery Signature Record Not Exist.",63:"Delivery Plan Not Exist.",64:"Could Not Retrieve Coordinates From Geocoding Apis.",65:"Failed To Create An Order In Toll Shipment Api.",66:"Audit Accounts Not Exist.",67:"Audit Data Incomplete Or Content Mismatch.",68:"Could Not Parse Audit Data From Register Or Update.",69:"Invalid Review Status Id.",70:"The Phone Number Has Been Registered On This Role..",71:"Scheduledatetype Id Not Exist.",72:"Booking Date Invalid.",73:"Self-Account Removal Is Not Allowed.",74:"Cannot Modify Delivery Plan: Execution Has Already Started.",75:"Driver Is Not Available: Either Not Found, Currently Busy, Or Inactive.",76:"Simulation Start Time Must Be At Least 15 Minutes Before Current Local Time.",77:"Simulation Details Not Exist.",78:"An Error Occurred During The Simulation Calculation Process.",79:"Simulation Is Currently In Progress.",80:"Failed To Activate Simulation Result.",81:"Simulation Has Already Been Assigned And Cannot Be Modified Further.",82:"No Drivers Have Bookings Scheduled For Date.",83:"This Location Is Currently Not Available For Booking.",84:"Operation Failed Because The Delivery Plan Has Been Deleted.",85:"Route Injection Details Not Exist.",86:"Route Injection Calculating Failed.",87:"Route Injection Details Is Not Applicable.",88:"Route Injection Has Not Been Subscribed Or Failed During Subscription.",89:"Route Injection Failed: Python Server Calculating Failed.",92:"This route has a pending warehouse return. Please wait for the driver to complete it before making changes.",93:"Permission denied",100:"Database connection error.",101:"Database Write Error.",134:"This account has already been deleted.",142:"The warehouse-return stop must stay last when reordering.",200:"Token Not Exist.",201:"Token Parse Failed.",202:"Token Invalid.",203:"Token Expired.",204:"Logged out due to login at another location.",300:"Redis Connection Error.",301:"Redis Write Error.",401:"File Open Error.",402:"File Write Error.",403:"File Decode Error.",404:"File Format Error.",405:"File Close Error.",406:"File Delete Error.",500:"Aws Credential Error.",501:"Upload File Failed.",600:"Recaptcha Failed.",601:"Geocoding Failed.",700:"Websocket Write Error.",701:"Websocket Conn Failed.",800:"Netsuite Request Failed.",801:"Netsuite Response Error.",900:"Rabbitmq Conn Failed.",901:"Rabbitmq Read Message Failed.",902:"Rabbitmq Publish Message Failed.",1e3:"Pyserver Conn Failed.",1001:"PyServer Route Failed",1002:"Calculate Delivery Fee Failed",2010:"Payment Not Exist",2011:"Payment Not Pending",3e3:"Partial Success"},nR={orderCreated:"Order Created",scheduled:"Scheduled",readyForPickup:"Ready for Pickup",inTransit:"In transit",delivered:"Delivered",completed:"Completed"},rR={orderCreated:"Your order is confirmed and being prepared.",scheduled:"Your shipment is scheduled for pickup.",readyForPickup:"Your shipment is ready for pickup.",inTransit:"Your shipment is on its way.",delivered:"Your shipment has been delivered.",completed:"This shipment is complete.",exception:"Delivered — with an exception to review.",cancelled:"This shipment has been cancelled and will not be processed."},sR={orderCreated:"Order Created",packageReceived:"Package Received",packageReceivedInTransit:"Package Received - In Transit",pickedUpFromSender:"Picked Up from Sender",departedOriginCountry:"Departed Origin Country",customsProcessing:"Customs Processing",customsCleared:"Customs Cleared",departedHub:"Departed Hub",arrivedRegionalHub:"Arrived at Regional Hub",arrivedLocalFacility:"Arrived at Local Facility",outForDelivery:"In transit",outForDeliveryPartial:"In transit (partial shipment)",deliveredSigned:"Delivered & Signed",cancelledByCustomer:"Order Cancelled by Customer"},iR={badgeLabel_one:"{{count}} Exception",badgeLabel_other:"{{count}} Exceptions",delay:{reason:"This shipment has been rescheduled. The estimated delivery date may change."},failedAttempt:{reason:"A delivery attempt was unsuccessful."},addressProblem:{reason:"We couldn't confirm the delivery address for this shipment."},customsHold:{reason:"This shipment is on hold for a customs or compliance check."}},oR={service:"Service",shipDate:"Ship Date",origin:"Origin",destination:"Destination",weight:"Weight",shipper:"Shipper",recipient:"Recipient",packages:"Packages",estimatedDelivery:"Estimated Delivery"},aR={gateTitle:"Verify to See Full Details",gateBody:"Confirm the mobile number linked to this shipment to see recipient details and proof of delivery.",verifyButton:"Verify",verified:"Verified — showing full shipment details.",verifyFailed:"That code didn't match. Check it and try again.",linkExpired:"That verification link has expired. Request a new one to see full details.",linkUsed:"That verification link has already been used.",linkInvalid:"That verification link isn't valid for this shipment."},cR={title:"Travel History",colTime:"Time",colActivity:"Activity",colLocation:"Location",latest:"Latest",viewFullHistory:"View Full History",showLess:"Show Less"},lR={title:"Proof of Delivery",photoAlt:"Delivery photo",signedBy:"Signed by {{initial}}",photoUnavailable:"Delivery photo unavailable"},uR={title:"Get Help",contactSupport:"Contact Support",startReturn:"Start a Return"},dR={pageTitle:{entry:"Track a delivery — SenditGo",result:"Tracking result — SenditGo",consignee:"Track your delivery — SenditGo"},entry:{eyebrow:"Delivery tracking",title:"Track a delivery.",subtitle:"Enter your tracking number to see the latest delivery status. No account needed.",inputLabel:"Tracking number",placeholder:"Tracking number",submit:"Track",hint:"Tracking numbers are up to 9 letters and numbers, with no spaces or dashes.",submitBusy:"Tracking…",busyStatus:"Looking up your delivery…"},result:{back:"Track another delivery",title:"Tracking result.",subtitle:"Get the latest delivery status and tracking details for your shipment."},consignee:{eyebrow:"For recipients",title:"Track your delivery.",subtitle:"No account is required to see the current delivery status.",historyTitle:"Delivery history",historyToggle_one:"View details ({{count}} update)",historyToggle_other:"View details ({{count}} updates)",resultStatus:"{{status}}. {{label}}: {{value}}"},summary:{trackingNumber:"Tracking number",copy:"Copy tracking number",copied:"Tracking number copied",progress:"Delivery progress",copyFailed:"Couldn't copy. Select the tracking number to copy it."},chip:{cancelled:"Cancelled"},milestone:{orderCreated:"Order created",pickedUp:"Picked up",awaitingPickup:"Awaiting pickup",inTransit:"In transit",delivered:"Delivered",preparing:"Preparing"},milestoneState:{done:"completed",current:"current step",future:"not started"},eta:{label:"Estimated delivery",deliveredLabel:"Delivered",cancelledLabel:"Cancelled",today:"Today",tomorrow:"Tomorrow",toBeConfirmed:"To be confirmed",toBeConfirmedNote:"We'll show a date once the delivery is scheduled.",cancelledNote:"This delivery was cancelled and will not arrive.",todayAM:"This morning",todayPM:"This afternoon",tomorrowAM:"Tomorrow morning",tomorrowPM:"Tomorrow afternoon",dayAM:"{{day}}, morning",dayPM:"{{day}}, afternoon",previouslyExpected:"Previously expected {{date}}"},latest:{label:"Latest update",none:"No updates yet"},activity:{order_created:"Order created",scheduled:"Delivery scheduled",picked_up:"Picked up",arrived:"Arrived at destination",signed:"Delivery signed for",completed:"Delivery completed",rescheduled:"Delivery rescheduled",item_exception:"Item issue reported",cancelled:"Order cancelled"},details:{title:"Delivery details",trackingNumber:"Tracking number",shipDate:"Ship date",carrier:"Carrier",origin:"Origin",destination:"Destination",packages:"Packages",proof:"Proof of delivery",notShipped:"Not shipped yet",packageCount_one:"{{count}} package",packageCount_other:"{{count}} packages",affected_one:"{{count}} affected by an issue",affected_other:"{{count}} affected by an issue",proofType:{signature:"Signed for on delivery",contactless:"Contactless delivery",qrcode:"Confirmed by QR scan"}},history:{title:"Tracking history",date:"Date & time",activity:"Activity",location:"Location",empty:"No tracking updates yet."},exceptions:{title:"Delivery updates",rescheduled_one:"Delivery was rescheduled.",rescheduled_other:"Delivery was rescheduled {{count}} times.",items_missing:"Some items were reported missing.",items_damaged:"Some items were reported damaged.",wrong_delivery:"An item was reported as delivered to the wrong place.",cancelled:"The delivery was cancelled.",help:"Questions about this delivery? Our support team can help.",contact:"Contact support"},help:{title:"Need help?",body:"If you have any questions about this delivery, our team is here to help.",contact:"Contact support"},error:{format:"Check the tracking number. It should be up to 9 letters and numbers, with no spaces or dashes.",notFound:"We couldn't find a delivery with that tracking number. Check the number and try again.",rateLimited:"Too many lookups in a short time. Wait a minute, then try again.",unavailable:"Tracking is unavailable right now. Please try again shortly.",retry:"Try again",loading:"Loading delivery status"},nextStop:{public:{eyebrowLive:"Live map · next stop",eyebrowNext:"This address is the next stop",title:"The driver is on the way",mapRegion:"Map of the driver approaching the delivery address",mapUnavailable:"Map unavailable. The arrival time is shown here."},receiver:{eyebrowLive:"Live map · you're next",eyebrowNext:"You're the next stop",title:"Your driver is on the way",mapRegion:"Map of your driver approaching your delivery address",mapUnavailable:"Map unavailable. Your arrival time is shown here."},liveLocation:"Live location",etaMinutes_one:"About {{count}} minute away",etaMinutes_other:"About {{count}} minutes away",etaSoon:"Arriving soon",updatedNow:"Location updated just now",updated_one:"Location updated {{count}} minute ago",updated_other:"Location updated {{count}} minutes ago",stale_one:"Live location paused · last update {{count}} minute ago",stale_other:"Live location paused · last update {{count}} minutes ago",unavailable:"Live location is unavailable right now.",ended:"Live location has ended for this delivery.",errorRefused:"Live location is unavailable right now.",errorFailed:"Couldn't load the live location.",rateLimited:"Too many requests. Wait a minute, then try again.",retry:"Try again",sample:"Sample location · not a real driver",recenter:"Recenter"}},hR={step:nR,headline:rR,activity:sR,exception:iR,facts:oR,tier2:aR,timeline:cR,pod:lR,help:uR,guest:dR},Rl=["en"],fR={en:"EN"},pR=(()=>{try{const t=localStorage.getItem("lang");return t&&Rl.includes(t)?t:"en"}catch{return"en"}})();$e.use(QC).init({lng:pR,fallbackLng:"en",interpolation:{escapeValue:!1},resources:{en:{common:B2,portal:Q2,statusCode:tR,salesOrderStatusId:eR,tracking:hR}}});function mR(t){$e.changeLanguage(t);try{localStorage.setItem("lang",t)}catch{}}const vf=!1,gR="senditgo",yR="AIzaSyCCFkpD6mTpO7D4V2vPAx6qnABbrQFjmPw",vR="tms-prod-5b64f.firebaseapp.com",bR="tms-prod-5b64f",xR="tms-prod-5b64f.firebasestorage.app",wR="8390929152",kR="1:8390929152:web:f53f3ad71de3cf8f2ca1e5",SR="G-0P0BSKZQN0",bf="Australia/Sydney";function ER(t){if(!t)return bf;try{return new Intl.DateTimeFormat("en-AU",{timeZone:t}).format(0),t}catch{return bf}}function Wu(t,e,n){const r={};for(const s of new Intl.DateTimeFormat("en-AU",{timeZone:ER(e),...n}).formatToParts(t))r[s.type]=s.value;return r}const _R=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function bt(t,e,n=!1){const r=Wu(new Date(t),e,{weekday:"short",day:"numeric",month:"numeric",year:"numeric"}),s=_R[Number(r.month)-1]??r.month;return`${r.weekday}, ${Number(r.day)} ${s}${n?` ${r.year}`:""}`}function Si(t,e){const n=Wu(new Date(t),e,{hour:"numeric",minute:"2-digit",hour12:!0});return`${n.hour}:${n.minute} ${(n.dayPeriod??"").toUpperCase()}`.trim()}function Fy(t,e){const n=Wu(t,e,{year:"numeric",month:"2-digit",day:"2-digit"});return`${n.year}-${n.month}-${n.day}`}function Gi(t,e=!1){return bt(`${t}T12:00:00.000Z`,"UTC",e)}function TR(t,e,n=new Date){const r=Fy(n,e);if(t===r)return"today";const[s,i,o]=r.split("-").map(Number),a=new Date(Date.UTC(s,i-1,o+1)).toISOString().slice(0,10);return t===a?"tomorrow":null}function CR(t,e,n=new Date){const[r,s,i]=Fy(n,e).split("-").map(Number),[o,a,c]=t.split("-").map(Number);return Math.round((Date.UTC(o,a-1,c)-Date.UTC(r,s-1,i))/864e5)}function Ei(t){return t?`${t.suburb}, ${t.state}`:null}function $y(t){return t?`${t.suburb} ${t.state} ${t.postcode}`.trim():null}const RR={check:d.jsx("path",{d:"M5 10.5L8.4 14L15 6.5",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"}),truck:d.jsxs(d.Fragment,{children:[d.jsx("path",{d:"M11 13V5H3V13H11ZM11 13H17V10.5L14.5 8H11V13Z",strokeWidth:"1.7",strokeLinejoin:"round"}),d.jsx("path",{d:"M6 16C6.82843 16 7.5 15.3284 7.5 14.5C7.5 13.6716 6.82843 13 6 13C5.17157 13 4.5 13.6716 4.5 14.5C4.5 15.3284 5.17157 16 6 16Z",strokeWidth:"1.5"}),d.jsx("path",{d:"M14 16C14.8284 16 15.5 15.3284 15.5 14.5C15.5 13.6716 14.8284 13 14 13C13.1716 13 12.5 13.6716 12.5 14.5C12.5 15.3284 13.1716 16 14 16Z",strokeWidth:"1.5"})]}),box:d.jsxs(d.Fragment,{children:[d.jsx("path",{d:"M4 6.5L10 3L16 6.5V13.5L10 17L4 13.5V6.5Z",strokeWidth:"1.7"}),d.jsx("path",{d:"M4.5 6.5L10 9.5M10 9.5L15.5 6.5M10 9.5V16.5",strokeWidth:"1.7"})]}),flag:d.jsx("path",{d:"M6 17V3M6 4H14L12.5 7L14 10H6",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round"})},AR=({icon:t,className:e})=>d.jsx("svg",{className:e,viewBox:"0 0 20 20",fill:"none",stroke:"currentColor","aria-hidden":"true",focusable:"false",children:RR[t]}),PR=({className:t,style:e})=>d.jsx("svg",{className:t,style:e,viewBox:"0 0 10 14",fill:"none","aria-hidden":"true",focusable:"false",children:d.jsx("path",{d:"M1.6665 1.27274L6.6665 7.00001L1.6665 12.7273",stroke:"#FFFFFF",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})}),IR=V`
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
`,OR=V`
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
`,Ie={blue:"#007FFF",primaryFill:"#003DF2",amber:"#EA8118",onPrimary:"#FFFFFF"},Vy=640,NR=T.div`
  ${IR}
  [data-theme='dark'] & {
    ${OR}
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
`,us=.4,ds=.5;function $o(t,e){return 100/(t-1+2*e)}function xf(t,e,n){return(n+t)*$o(e,n)}function pr(t,e,n){return(n+t+.5)*$o(e,n)}function Tt(t){return`${Math.round(t*1e3)/1e3}%`}const cr=t=>V`
  @media (max-width: ${Vy}px) {
    ${t}
  }
`,LR=T.div`
  position: relative;
  width: 100%;
  max-width: 1100px;
  height: 130px;
  margin: 0 auto;
  font-family: ${G};
  ${cr(V`
    height: 112px;
  `)}
`,jR=T.div`
  position: absolute;
  inset: 0 34px;
  ${cr(V`
    inset: 0;
  `)}
`,DR=T.ol`
  position: absolute;
  inset: 0;
  margin: 0;
  padding: 0;
  list-style: none;
`,MR=T.div`
  position: absolute;
  top: 30px;
  left: 0;
  right: 0;
  height: 16px;
  border-radius: 6px;
  overflow: hidden;
  background: var(--trk-rail-future);
  ${cr(V`
    height: 10px;
    border-radius: 5px;
  `)}
`,FR=T.span`
  position: absolute;
  top: 0;
  bottom: 0;
  left: var(--seg-l);
  /* +1px so fractional edges overlap instead of leaving a hairline of the
     base colour between two segments of the same state */
  width: calc(var(--seg-w) + 1px);
  background: ${({$fill:t})=>t};
  ${cr(V`
    left: var(--seg-lm);
    width: calc(var(--seg-wm) + 1px);
  `)}
`,$R=T(PR)`
  position: absolute;
  top: 31px;
  left: var(--join);
  width: 10px;
  height: 14px;
  /* right edge on the join, as in the master: the chevron that leads into
     the current section stays on the completed blue */
  transform: translateX(-100%);
  ${cr(V`
    top: 30px;
    left: var(--join-m);
    width: 7px;
    height: 10px;
  `)}
`,VR=T.li`
  position: static;
  height: 0;
  margin: 0;
`,UR={done:V`
    background: ${Ie.blue};
    color: ${Ie.onPrimary};
  `,"current-blue":V`
    background: ${Ie.blue};
    color: ${Ie.onPrimary};
  `,"current-amber":V`
    background: ${Ie.amber};
    color: ${Ie.onPrimary};
  `,future:V`
    background: var(--trk-marker-future);
    color: var(--trk-icon-future);
  `},BR=T.span`
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
  ${({$variant:t})=>UR[t]}

  svg {
    width: 20px;
    height: 20px;
  }

  ${({$current:t})=>cr(V`
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
`,HR=T.span`
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

  ${({$state:t})=>cr(V`
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
`,zR=T.span`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  border: 0;
`;function WR(t){return t.state==="done"?Ie.blue:t.state==="current"?t.tone==="amber"?"var(--trk-rail-current-amber)":"var(--trk-rail-current-blue)":"var(--trk-rail-future)"}function qR(t){return t.state==="current"?t.tone==="amber"?"current-amber":"current-blue":t.state}const Uy=({milestones:t,timezone:e,label:n})=>{const{t:r}=xe(),s=t.length,i=$o(s,us),o=$o(s,ds),a=c=>{const l=c===0?0:pr(c-1,s,us),u=c===s-1?100:pr(c,s,us),h=c===0?0:pr(c-1,s,ds),f=c===s-1?100:pr(c,s,ds);return{"--seg-l":Tt(l),"--seg-w":Tt(u-l),"--seg-lm":Tt(h),"--seg-wm":Tt(f-h)}};return d.jsx(LR,{"data-testid":"milestone-rail","data-count":s,children:d.jsxs(jR,{style:{"--col":Tt(i),"--col-m":Tt(o)},children:[d.jsx(MR,{"aria-hidden":"true","data-testid":"milestone-rail-track",children:t.map((c,l)=>d.jsx(FR,{"data-testid":"milestone-rail-segment","data-state":c.state,$fill:WR(c),style:a(l)},c.key))}),t.slice(0,-1).map((c,l)=>d.jsx($R,{style:{"--join":Tt(pr(l,s,us)),"--join-m":Tt(pr(l,s,ds))}},`join-${c.key}`)),d.jsx(DR,{"aria-label":n,children:t.map((c,l)=>{const u=c.state==="current";return d.jsxs(VR,{"data-testid":"milestone","data-key":c.key,"data-state":c.state,"data-tone":u?c.tone:void 0,"aria-current":u?"step":void 0,style:{"--x":Tt(xf(l,s,us)),"--x-m":Tt(xf(l,s,ds))},children:[d.jsx(BR,{"aria-hidden":"true","data-testid":"milestone-marker",$variant:qR(c),$current:u,children:d.jsx(AR,{icon:c.icon})}),d.jsxs(HR,{$state:c.state,children:[d.jsx("span",{className:"label",children:r(c.labelKey)}),d.jsx("span",{className:"date",children:c.at?bt(c.at,e):"—"}),d.jsx(zR,{children:r(`tracking:guest.milestoneState.${c.state}`)})]})]},c.key)})})]})})},KR=["in_transit","delivered","completed"],GR=["delivered","completed"];function mc(t,...e){for(const n of e){const r=t.travelHistory.find(s=>s.activity===n);if(r)return r.time}return null}function gc(t){const e=t.travelHistory[t.travelHistory.length-1];return e?e.time:null}function ZR(t){return t==="delivered"?"flag":t==="inTransit"?"truck":"box"}function wf(t,e,n,r,s={}){return t.map((i,o)=>{const a=o<e?"done":o===e?"current":"future",c=a==="done"?"check":a==="current"&&n==="amber"?"truck":ZR(i);return{key:i,labelKey:`tracking:guest.milestone.${a==="current"&&s[i]?s[i]:i}`,state:a,tone:a==="current"?n:"blue",icon:c,at:a==="future"?null:r[i]??null}})}const kf=["orderCreated","pickedUp","inTransit","delivered"],Sf=["preparing","inTransit","delivered"];function qu(t,e){const{stage:n}=t;if(n==="cancelled")return null;const r=mc(t,"order_created"),s=mc(t,"picked_up"),i=mc(t,"signed","completed","arrived"),o=GR.includes(n),a=KR.includes(n);if(e==="public"){const l=o?kf.length:a?2:1;return wf(kf,l,l===2?"amber":"blue",{orderCreated:r,pickedUp:a||o?s:null,inTransit:o?s:gc(t),delivered:i},{pickedUp:"awaitingPickup"})}const c=o?Sf.length:a?1:0;return wf(Sf,c,c===1?"amber":"blue",{preparing:a||o?r:gc(t),inTransit:o?s:gc(t),delivered:i})}function By(t,e){const n=qu(t,e);if(!n)return{labelKey:"tracking:guest.chip.cancelled",tone:"red"};const r=n.find(s=>s.state==="current");return r?{labelKey:r.labelKey,tone:r.tone}:{labelKey:"tracking:guest.milestone.delivered",tone:"blue"}}var yc,Ef;function JR(){if(Ef)return yc;Ef=1;var t=typeof Element<"u",e=typeof Map=="function",n=typeof Set=="function",r=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function s(i,o){if(i===o)return!0;if(i&&o&&typeof i=="object"&&typeof o=="object"){if(i.constructor!==o.constructor)return!1;var a,c,l;if(Array.isArray(i)){if(a=i.length,a!=o.length)return!1;for(c=a;c--!==0;)if(!s(i[c],o[c]))return!1;return!0}var u;if(e&&i instanceof Map&&o instanceof Map){if(i.size!==o.size)return!1;for(u=i.entries();!(c=u.next()).done;)if(!o.has(c.value[0]))return!1;for(u=i.entries();!(c=u.next()).done;)if(!s(c.value[1],o.get(c.value[0])))return!1;return!0}if(n&&i instanceof Set&&o instanceof Set){if(i.size!==o.size)return!1;for(u=i.entries();!(c=u.next()).done;)if(!o.has(c.value[0]))return!1;return!0}if(r&&ArrayBuffer.isView(i)&&ArrayBuffer.isView(o)){if(a=i.length,a!=o.length)return!1;for(c=a;c--!==0;)if(i[c]!==o[c])return!1;return!0}if(i.constructor===RegExp)return i.source===o.source&&i.flags===o.flags;if(i.valueOf!==Object.prototype.valueOf&&typeof i.valueOf=="function"&&typeof o.valueOf=="function")return i.valueOf()===o.valueOf();if(i.toString!==Object.prototype.toString&&typeof i.toString=="function"&&typeof o.toString=="function")return i.toString()===o.toString();if(l=Object.keys(i),a=l.length,a!==Object.keys(o).length)return!1;for(c=a;c--!==0;)if(!Object.prototype.hasOwnProperty.call(o,l[c]))return!1;if(t&&i instanceof Element)return!1;for(c=a;c--!==0;)if(!((l[c]==="_owner"||l[c]==="__v"||l[c]==="__o")&&i.$$typeof)&&!s(i[l[c]],o[l[c]]))return!1;return!0}return i!==i&&o!==o}return yc=function(o,a){try{return s(o,a)}catch(c){if((c.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw c}},yc}var YR=JR();const XR=tu(YR);var vc,_f;function QR(){if(_f)return vc;_f=1;var t=function(e,n,r,s,i,o,a,c){if(!e){var l;if(n===void 0)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[r,s,i,o,a,c],h=0;l=new Error(n.replace(/%s/g,function(){return u[h++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}};return vc=t,vc}var eA=QR();const Tf=tu(eA);var bc,Cf;function tA(){return Cf||(Cf=1,bc=function(e,n,r,s){var i=r?r.call(s,e,n):void 0;if(i!==void 0)return!!i;if(e===n)return!0;if(typeof e!="object"||!e||typeof n!="object"||!n)return!1;var o=Object.keys(e),a=Object.keys(n);if(o.length!==a.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(n),l=0;l<o.length;l++){var u=o[l];if(!c(u))return!1;var h=e[u],f=n[u];if(i=r?r.call(s,h,f,u):void 0,i===!1||i===void 0&&h!==f)return!1}return!0}),bc}var nA=tA();const rA=tu(nA);var Hy=(t=>(t.BASE="base",t.BODY="body",t.HEAD="head",t.HTML="html",t.LINK="link",t.META="meta",t.NOSCRIPT="noscript",t.SCRIPT="script",t.STYLE="style",t.TITLE="title",t.FRAGMENT="Symbol(react.fragment)",t))(Hy||{}),xc={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},Rf=Object.values(Hy),Ca={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},zy=Object.entries(Ca).reduce((t,[e,n])=>(t[n]=e,t),{}),pt="data-rh",Cr={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},Rr=(t,e)=>{for(let n=t.length-1;n>=0;n-=1){const r=t[n];if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}return null},sA=t=>{let e=Rr(t,"title");const n=Rr(t,Cr.TITLE_TEMPLATE);if(Array.isArray(e)&&(e=e.join("")),n&&e)return n.replace(/%s/g,()=>e);const r=Rr(t,Cr.DEFAULT_TITLE);return e||r||void 0},iA=t=>Rr(t,Cr.ON_CHANGE_CLIENT_STATE)||(()=>{}),wc=(t,e)=>e.filter(n=>typeof n[t]<"u").map(n=>n[t]).reduce((n,r)=>({...n,...r}),{}),oA=(t,e)=>e.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,r)=>{if(!n.length){const s=Object.keys(r);for(let i=0;i<s.length;i+=1){const a=s[i].toLowerCase();if(t.indexOf(a)!==-1&&r[a])return n.concat(r)}}return n},[]),aA=t=>console&&typeof console.warn=="function"&&console.warn(t),hs=(t,e,n)=>{const r={};return n.filter(s=>Array.isArray(s[t])?!0:(typeof s[t]<"u"&&aA(`Helmet: ${t} should be of type "Array". Instead found type "${typeof s[t]}"`),!1)).map(s=>s[t]).reverse().reduce((s,i)=>{const o={};i.filter(c=>{let l;const u=Object.keys(c);for(let f=0;f<u.length;f+=1){const p=u[f],g=p.toLowerCase();e.indexOf(g)!==-1&&!(l==="rel"&&c[l].toLowerCase()==="canonical")&&!(g==="rel"&&c[g].toLowerCase()==="stylesheet")&&(l=g),e.indexOf(p)!==-1&&(p==="innerHTML"||p==="cssText"||p==="itemprop")&&(l=p)}if(!l||!c[l])return!1;const h=c[l].toLowerCase();return r[l]||(r[l]={}),o[l]||(o[l]={}),r[l][h]?!1:(o[l][h]=!0,!0)}).reverse().forEach(c=>s.push(c));const a=Object.keys(o);for(let c=0;c<a.length;c+=1){const l=a[c],u={...r[l],...o[l]};r[l]=u}return s},[]).reverse()},cA=(t,e)=>{if(Array.isArray(t)&&t.length){for(let n=0;n<t.length;n+=1)if(t[n][e])return!0}return!1},lA=t=>({baseTag:oA(["href"],t),bodyAttributes:wc("bodyAttributes",t),defer:Rr(t,Cr.DEFER),encode:Rr(t,Cr.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:wc("htmlAttributes",t),linkTags:hs("link",["rel","href"],t),metaTags:hs("meta",["name","charset","http-equiv","property","itemprop"],t),noscriptTags:hs("noscript",["innerHTML"],t),onChangeClientState:iA(t),scriptTags:hs("script",["src","innerHTML"],t),styleTags:hs("style",["cssText"],t),title:sA(t),titleAttributes:wc("titleAttributes",t),prioritizeSeoTags:cA(t,Cr.PRIORITIZE_SEO_TAGS)}),Wy=t=>Array.isArray(t)?t.join(""):t,uA=(t,e)=>{const n=Object.keys(t);for(let r=0;r<n.length;r+=1)if(e[n[r]]&&e[n[r]].includes(t[n[r]]))return!0;return!1},kc=(t,e)=>Array.isArray(t)?t.reduce((n,r)=>(uA(r,e)?n.priority.push(r):n.default.push(r),n),{priority:[],default:[]}):{default:t,priority:[]},Af=(t,e)=>({...t,[e]:void 0}),dA=["noscript","script","style"],Al=(t,e=!0)=>e===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),qy=t=>Object.keys(t).reduce((e,n)=>{const r=typeof t[n]<"u"?`${n}="${t[n]}"`:`${n}`;return e?`${e} ${r}`:r},""),hA=(t,e,n,r)=>{const s=qy(n),i=Wy(e);return s?`<${t} ${pt}="true" ${s}>${Al(i,r)}</${t}>`:`<${t} ${pt}="true">${Al(i,r)}</${t}>`},fA=(t,e,n=!0)=>e.reduce((r,s)=>{const i=s,o=Object.keys(i).filter(l=>!(l==="innerHTML"||l==="cssText")).reduce((l,u)=>{const h=typeof i[u]>"u"?u:`${u}="${Al(i[u],n)}"`;return l?`${l} ${h}`:h},""),a=i.innerHTML||i.cssText||"",c=dA.indexOf(t)===-1;return`${r}<${t} ${pt}="true" ${o}${c?"/>":`>${a}</${t}>`}`},""),Ky=(t,e={})=>Object.keys(t).reduce((n,r)=>{const s=Ca[r];return n[s||r]=t[r],n},e),pA=(t,e,n)=>{const r={key:e,[pt]:!0},s=Ky(n,r);return[X.createElement("title",s,e)]},ho=(t,e)=>e.map((n,r)=>{const s={key:r,[pt]:!0};return Object.keys(n).forEach(i=>{const a=Ca[i]||i;if(a==="innerHTML"||a==="cssText"){const c=n.innerHTML||n.cssText;s.dangerouslySetInnerHTML={__html:c}}else s[a]=n[i]}),X.createElement(t,s)}),rt=(t,e,n=!0)=>{switch(t){case"title":return{toComponent:()=>pA(t,e.title,e.titleAttributes),toString:()=>hA(t,e.title,e.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>Ky(e),toString:()=>qy(e)};default:return{toComponent:()=>ho(t,e),toString:()=>fA(t,e,n)}}},mA=({metaTags:t,linkTags:e,scriptTags:n,encode:r})=>{const s=kc(t,xc.meta),i=kc(e,xc.link),o=kc(n,xc.script);return{priorityMethods:{toComponent:()=>[...ho("meta",s.priority),...ho("link",i.priority),...ho("script",o.priority)],toString:()=>`${rt("meta",s.priority,r)} ${rt("link",i.priority,r)} ${rt("script",o.priority,r)}`},metaTags:s.default,linkTags:i.default,scriptTags:o.default}},gA=t=>{const{baseTag:e,bodyAttributes:n,encode:r=!0,htmlAttributes:s,noscriptTags:i,styleTags:o,title:a="",titleAttributes:c,prioritizeSeoTags:l}=t;let{linkTags:u,metaTags:h,scriptTags:f}=t,p={toComponent:()=>[],toString:()=>""};return l&&({priorityMethods:p,linkTags:u,metaTags:h,scriptTags:f}=mA(t)),{priority:p,base:rt("base",e,r),bodyAttributes:rt("bodyAttributes",n,r),htmlAttributes:rt("htmlAttributes",s,r),link:rt("link",u,r),meta:rt("meta",h,r),noscript:rt("noscript",i,r),script:rt("script",f,r),style:rt("style",o,r),title:rt("title",{title:a,titleAttributes:c},r)}},Pl=gA,Zi=[],Ku=!!(typeof window<"u"&&window.document&&window.document.createElement),Il=class{constructor(t,e){dt(this,"instances",[]);dt(this,"canUseDOM",Ku);dt(this,"context");dt(this,"value",{setHelmet:t=>{this.context.helmet=t},helmetInstances:{get:()=>this.canUseDOM?Zi:this.instances,add:t=>{(this.canUseDOM?Zi:this.instances).push(t)},remove:t=>{const e=(this.canUseDOM?Zi:this.instances).indexOf(t);(this.canUseDOM?Zi:this.instances).splice(e,1)}}});this.context=t,this.canUseDOM=e||!1,e||(t.helmet=Pl({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},yA=parseInt(X.version.split(".")[0],10),Ol=yA>=19,vA={},Gy=X.createContext(vA),Wn,bA=(Wn=class extends m.Component{constructor(n){super(n);dt(this,"helmetData");Ol?this.helmetData=null:this.helmetData=new Il(this.props.context||{},Wn.canUseDOM)}render(){return Ol?X.createElement(X.Fragment,null,this.props.children):X.createElement(Gy.Provider,{value:this.helmetData.value},this.props.children)}},dt(Wn,"canUseDOM",Ku),Wn),mr=(t,e)=>{const n=document.head||document.querySelector("head"),r=n.querySelectorAll(`${t}[${pt}]`),s=[].slice.call(r),i=[];let o;return e&&e.length&&e.forEach(a=>{const c=document.createElement(t);for(const l in a)if(Object.prototype.hasOwnProperty.call(a,l))if(l==="innerHTML")c.innerHTML=a.innerHTML;else if(l==="cssText"){const u=a.cssText;c.appendChild(document.createTextNode(u))}else{const u=l,h=typeof a[u]>"u"?"":a[u];c.setAttribute(l,h)}c.setAttribute(pt,"true"),s.some((l,u)=>(o=u,c.isEqualNode(l)))?s.splice(o,1):i.push(c)}),s.forEach(a=>{var c;return(c=a.parentNode)==null?void 0:c.removeChild(a)}),i.forEach(a=>n.appendChild(a)),{oldTags:s,newTags:i}},Nl=(t,e)=>{const n=document.getElementsByTagName(t)[0];if(!n)return;const r=n.getAttribute(pt),s=r?r.split(","):[],i=[...s],o=Object.keys(e);for(const a of o){const c=e[a]||"";n.getAttribute(a)!==c&&n.setAttribute(a,c),s.indexOf(a)===-1&&s.push(a);const l=i.indexOf(a);l!==-1&&i.splice(l,1)}for(let a=i.length-1;a>=0;a-=1)n.removeAttribute(i[a]);s.length===i.length?n.removeAttribute(pt):n.getAttribute(pt)!==o.join(",")&&n.setAttribute(pt,o.join(","))},xA=(t,e)=>{typeof t<"u"&&document.title!==t&&(document.title=Wy(t)),Nl("title",e)},Pf=(t,e)=>{const{baseTag:n,bodyAttributes:r,htmlAttributes:s,linkTags:i,metaTags:o,noscriptTags:a,onChangeClientState:c,scriptTags:l,styleTags:u,title:h,titleAttributes:f}=t;Nl("body",r),Nl("html",s),xA(h,f);const p={baseTag:mr("base",n),linkTags:mr("link",i),metaTags:mr("meta",o),noscriptTags:mr("noscript",a),scriptTags:mr("script",l),styleTags:mr("style",u)},g={},y={};Object.keys(p).forEach(v=>{const{newTags:S,oldTags:b}=p[v];S.length&&(g[v]=S),b.length&&(y[v]=p[v].oldTags)}),e&&e(),c(t,g,y)},fs=null,wA=t=>{fs&&cancelAnimationFrame(fs),t.defer?fs=requestAnimationFrame(()=>{Pf(t,()=>{fs=null})}):(Pf(t),fs=null)},kA=wA,If=class extends m.Component{constructor(){super(...arguments);dt(this,"rendered",!1)}shouldComponentUpdate(e){return!rA(e,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:e}=this.props.context;e.remove(this),this.emitChange()}emitChange(){const{helmetInstances:e,setHelmet:n}=this.props.context;let r=null;const s=lA(e.get().map(i=>{const{context:o,...a}=i.props;return a}));bA.canUseDOM?kA(s):Pl&&(r=Pl(s)),n(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:e}=this.props.context;e.add(this),this.emitChange()}render(){return this.init(),null}},fo=[],Of=t=>{const e={};for(const n of Object.keys(t))e[zy[n]||n]=t[n];return e},Dn=t=>{const e={};for(const n of Object.keys(t)){const r=Ca[n];e[r||n]=t[n]}return e},Nf=(t,e)=>{if(!Ku)return;const n=document.getElementsByTagName(t)[0];if(!n)return;const r="data-rh-managed",s=n.getAttribute(r),i=s?s.split(","):[],o=Object.keys(e);for(const a of i)o.includes(a)||n.removeAttribute(a);for(const a of o){const c=e[a];c==null||c===!1?n.removeAttribute(a):c===!0?n.setAttribute(a,""):n.setAttribute(a,String(c))}o.length>0?n.setAttribute(r,o.join(",")):n.removeAttribute(r)},Sc=()=>{const t={},e={};for(const n of fo){const{htmlAttributes:r,bodyAttributes:s}=n.props;r&&Object.assign(t,Of(r)),s&&Object.assign(e,Of(s))}Nf("html",t),Nf("body",e)},SA=class extends m.Component{componentDidMount(){fo.push(this),Sc()}componentDidUpdate(){Sc()}componentWillUnmount(){const t=fo.indexOf(this);t!==-1&&fo.splice(t,1),Sc()}resolveTitle(){const{title:t,titleTemplate:e,defaultTitle:n}=this.props;return t&&e?e.replace(/%s/g,()=>Array.isArray(t)?t.join(""):t):t||n||void 0}renderTitle(){const t=this.resolveTitle();if(t===void 0)return null;const e=this.props.titleAttributes||{};return X.createElement("title",Dn(e),t)}renderBase(){const{base:t}=this.props;return t?X.createElement("base",Dn(t)):null}renderMeta(){const{meta:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>X.createElement("meta",{key:n,...Dn(e)}))}renderLink(){const{link:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>X.createElement("link",{key:n,...Dn(e)}))}renderScript(){const{script:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>{const{innerHTML:r,...s}=e,i=Dn(s);return r&&(i.dangerouslySetInnerHTML={__html:r}),X.createElement("script",{key:n,...i})})}renderStyle(){const{style:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>{const{cssText:r,...s}=e,i=Dn(s);return r&&(i.dangerouslySetInnerHTML={__html:r}),X.createElement("style",{key:n,...i})})}renderNoscript(){const{noscript:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>{const{innerHTML:r,...s}=e,i=Dn(s);return r&&(i.dangerouslySetInnerHTML={__html:r}),X.createElement("noscript",{key:n,...i})})}render(){return X.createElement(X.Fragment,null,this.renderTitle(),this.renderBase(),this.renderMeta(),this.renderLink(),this.renderScript(),this.renderStyle(),this.renderNoscript())}},Zc,EA=(Zc=class extends m.Component{shouldComponentUpdate(t){return!XR(Af(this.props,"helmetData"),Af(t,"helmetData"))}mapNestedChildrenToProps(t,e){if(!e)return null;switch(t.type){case"script":case"noscript":return{innerHTML:e};case"style":return{cssText:e};default:throw new Error(`<${t.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(t,e,n,r){return{...e,[t.type]:[...e[t.type]||[],{...n,...this.mapNestedChildrenToProps(t,r)}]}}mapObjectTypeChildren(t,e,n,r){switch(t.type){case"title":return{...e,[t.type]:r,titleAttributes:{...n}};case"body":return{...e,bodyAttributes:{...n}};case"html":return{...e,htmlAttributes:{...n}};default:return{...e,[t.type]:{...n}}}}mapArrayTypeChildrenToProps(t,e){let n={...e};return Object.keys(t).forEach(r=>{n={...n,[r]:t[r]}}),n}warnOnInvalidChildren(t,e){return Tf(Rf.some(n=>t.type===n),typeof t.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${Rf.join(", ")} are allowed. Helmet does not support rendering <${t.type}> elements. Refer to our API for more information.`),Tf(!e||typeof e=="string"||Array.isArray(e)&&!e.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${t.type}>. Did you forget to wrap your children in braces? ( <${t.type}>{\`\`}</${t.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(t,e){let n={};return X.Children.forEach(t,r=>{if(!r||!r.props)return;const{children:s,...i}=r.props,o=Object.keys(i).reduce((c,l)=>(c[zy[l]||l]=i[l],c),{});let{type:a}=r;switch(typeof a=="symbol"?a=a.toString():this.warnOnInvalidChildren(r,s),a){case"Symbol(react.fragment)":e=this.mapChildrenToProps(s,e);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(r,n,o,s);break;default:e=this.mapObjectTypeChildren(r,e,o,s);break}}),this.mapArrayTypeChildrenToProps(n,e)}render(){const{children:t,...e}=this.props;let n={...e},{helmetData:r}=e;if(t&&(n=this.mapChildrenToProps(t,n)),r&&!(r instanceof Il)){const s=r;r=new Il(s.context,!0),delete n.helmetData}return Ol?X.createElement(SA,{...n}):r?X.createElement(If,{...n,context:r.value}):X.createElement(Gy.Consumer,null,s=>X.createElement(If,{...n,context:s}))}},dt(Zc,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),Zc);const Lf="senditgo-v38-cookie-consent",jf="--cookie-consent-offset",Zy=720;function Df(t){return t<=Zy}function _A(t){return t<=0?0:Math.round(t)}function Jy(t,e,n){if(n<=0){t.removeProperty(jf),e.style.paddingBottom="";return}const r=`${n}px`;t.setProperty(jf,r),e.style.paddingBottom=r}function Mf(t,e){Jy(t,e,0)}const TA=T(ze.div)`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background: var(--v29-card);
  border-top: 1px solid var(--v29-line-soft);
  box-shadow: var(--v29-popover-shadow);
  font-family: ${G};
  color: var(--v29-text);
  padding: 12px clamp(16px, 3vw, 32px) max(12px, env(safe-area-inset-bottom, 0px));
  display: flex;
  justify-content: center;
`,CA=T.div`
  width: 100%;
  max-width: 1180px;
  display: flex;
  align-items: ${t=>t.$stack?"stretch":"center"};
  justify-content: space-between;
  flex-direction: ${t=>t.$stack?"column":"row"};
  gap: ${t=>t.$stack?"12px":"20px"};
  text-align: ${t=>t.$stack?"center":"left"};
`,RA=T.p`
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
`,AA=T.div`
  display: flex;
  align-items: center;
  justify-content: ${t=>t.$stack?"center":"flex-end"};
  gap: 8px;
  flex-shrink: 0;
`,Ff=T.button`
  appearance: none;
  border: none;
  cursor: pointer;
  min-height: 44px;
  padding: 8px 18px;
  border-radius: var(--v29-radius-button);
  font-family: ${G};
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
`;function PA(){const[t,e]=m.useState(()=>typeof window>"u"?!1:Df(window.innerWidth));return m.useEffect(()=>{const n=window.matchMedia(`(max-width: ${Zy}px)`),r=()=>e(Df(window.innerWidth));return r(),n.addEventListener("change",r),()=>n.removeEventListener("change",r)},[]),t}const IA=()=>{const[t,e]=m.useState(()=>{try{return localStorage.getItem(Lf)||null}catch{return null}}),[n,r]=m.useState(!1),s=m.useRef(null),i=PA();m.useEffect(()=>{if(t!==null)return;const c=window.setTimeout(()=>r(!0),1100);return()=>window.clearTimeout(c)},[t]);const o=t===null&&n;m.useEffect(()=>{if(!o){Mf(document.documentElement.style,document.body);return}const c=s.current;if(!c)return;const l=()=>{Jy(document.documentElement.style,document.body,_A(c.offsetHeight))};l();const u=new ResizeObserver(l);return u.observe(c),()=>{u.disconnect(),Mf(document.documentElement.style,document.body)}},[o,i]);const a=c=>{e(c);try{localStorage.setItem(Lf,c)}catch{}};return d.jsx(zu,{children:o&&d.jsx(TA,{ref:s,role:"region","aria-label":"Cookie consent",initial:{y:"100%"},animate:{y:0},exit:{y:"100%"},transition:{duration:.35,ease:Hn},children:d.jsxs(CA,{$stack:i,children:[d.jsxs(RA,{children:[d.jsx("span",{className:"lede",children:"We use a few optional analytics cookies"})," to see how this page performs — nothing is set until you choose. Decline and only the essentials run. Read our ",d.jsx(ct,{to:"/privacy",children:"Privacy Policy"}),"."]}),d.jsxs(AA,{$stack:i,children:[d.jsx(Ff,{$variant:"decline",type:"button",onClick:()=>a("declined"),children:"Decline"}),d.jsx(Ff,{$variant:"accept",type:"button",onClick:()=>a("accepted"),children:"Accept"})]})]})},"consent")})},OA=T.footer`
  background: var(--v29-page);
  border-top: 1px solid var(--v29-line-soft);
  padding: 16px 0;
  font-family: ${G};
`,NA=T.div`
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
`,LA=T.div`
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
`,jA=T.nav`
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
      color: ${ef};
    }
    &:focus-visible {
      outline: 2px solid ${ef};
      outline-offset: 3px;
    }
  }
  @media (max-width: 720px) {
    justify-content: flex-start;
  }
`,DA=()=>d.jsx(OA,{children:d.jsxs(NA,{children:[d.jsx(LA,{children:d.jsx("p",{children:"© 2026 SenditGo. All rights reserved."})}),d.jsxs(jA,{"aria-label":"Footer",children:[d.jsx("a",{href:"https://www.senditgo.com/privacy/",children:"Privacy Policy"}),d.jsx(ct,{to:"/contact",children:"Contact Us"})]})]})}),Yy={portalLogin:"FF_PORTAL_LOGIN",guestTrack:"FF_GUEST_TRACK",aboutPage:"FF_ABOUT_PAGE",aboutV1:"FF_ABOUT_V1",homeAudienceSwitch:"FF_HOME_AUDIENCE_SWITCH",consigneeTrack:"FF_CONSIGNEE_TRACK",loginDestinations:"FF_LOGIN_DESTINATIONS",nextStopMap:"FF_NEXT_STOP_MAP"},Xy="/portal/login";function Qy(t){if(typeof window>"u")return!1;const e=Yy[t],n=new URLSearchParams(window.location.search);if(n.has(e))return n.get(e)==="true";try{return localStorage.getItem(e)==="true"}catch{return!1}}function fM(){if(typeof window>"u")return;const t=new URLSearchParams(window.location.search);for(const e of Object.values(Yy))if(t.has(e))try{localStorage.setItem(e,t.get(e)==="true"?"true":"false")}catch{}}function Ll(t){return Qy(t)}function ev(){return Qy("portalLogin")?Xy:"/"}const $f=Object.freeze({production:"https://app.senditgo.com",uat:"https://tms-uat.senditgo.com",development:"https://tms-dev.holieninnovation.com.tw"}),MA="/fleet/login",FA="/company/login",$A=Object.freeze({development:"https://tms-dev.holieninnovation.com.tw/company/login"});function tv(t,e,n){const r=Object.prototype.hasOwnProperty.call($f,e)?$f[e]:null;if(!r||typeof t!="string"||t.trim()==="")return null;let s;try{s=new URL(t.trim())}catch{return null}return s.protocol!=="https:"||s.username||s.password||s.origin!==r||s.pathname!==n||s.search!==""||s.hash!==""?null:`${s.origin}${s.pathname}`}function VA(t,e){return tv(t,e,MA)}function UA(t,e){return tv(t,e,FA)}function BA(t){const e=[];if(t.portalLoginOn&&e.push({role:"shipper",href:Xy,external:!1}),t.loginDestinationsOn){const n=VA(t.carrierLoginUrl,t.mode);n&&e.push({role:"carrier",href:n,external:!0});const r=UA(t.consigneeLoginUrl,t.mode);r&&e.push({role:"consignee",href:r,external:!0})}return e}function pM(t,e){return typeof t!="string"||!t.startsWith("/")||t.startsWith("//")||t.startsWith("/\\")||[...t].some(n=>n.charCodeAt(0)<32)?e:t}function nv(){const t=Ll("portalLogin"),e=Ll("loginDestinations");return BA({portalLoginOn:t,loginDestinationsOn:e,carrierLoginUrl:"https://app.senditgo.com/fleet/login",consigneeLoginUrl:$A.production,mode:"production"})}const Vo={LIST:"ord_ls",ADD:"ord_add",IMPORT:"ord_imp",LIST_OWN:"ord_ls_own",LIST_SUB:"ord_ls_sub",LIST_ALL:"ord_ls_all"},HA={ROLE_LIST:"perm_role_ls",ROLE_ADD:"perm_role_add",ROLE_EDIT:"perm_role_edt",ROLE_DELETE:"perm_role_del",USER_LIST:"perm_asst_ls",USER_ADD:"perm_asst_add",USER_EDIT:"perm_asst_edt",USER_SUSPEND:"perm_asst_blk"};function zA(){return[...Object.values(Vo),...Object.values(HA)]}function WA(){return zA()}const Vf=t=>{let e;const n=new Set,r=(l,u)=>{const h=typeof l=="function"?l(e):l;if(!Object.is(h,e)){const f=e;e=u??(typeof h!="object"||h===null)?h:Object.assign({},e,h),n.forEach(p=>p(e,f))}},s=()=>e,a={setState:r,getState:s,getInitialState:()=>c,subscribe:l=>(n.add(l),()=>n.delete(l))},c=e=t(r,s,a);return a},qA=(t=>t?Vf(t):Vf),KA=t=>t;function GA(t,e=KA){const n=X.useSyncExternalStore(t.subscribe,X.useCallback(()=>e(t.getState()),[t,e]),()=>e(t.getInitialState()));return X.useDebugValue(n),n}const Uf=t=>{const e=qA(t),n=r=>GA(e,r);return Object.assign(n,e),n},ZA=(t=>t?Uf(t):Uf);function JA(t,e){let n;try{n=t()}catch{return}return{getItem:s=>{var i;const o=c=>c===null?null:JSON.parse(c,void 0),a=(i=n.getItem(s))!=null?i:null;return a instanceof Promise?a.then(o):o(a)},setItem:(s,i)=>n.setItem(s,JSON.stringify(i,void 0)),removeItem:s=>n.removeItem(s)}}const jl=t=>e=>{try{const n=t(e);return n instanceof Promise?n:{then(r){return jl(r)(n)},catch(r){return this}}}catch(n){return{then(r){return this},catch(r){return jl(r)(n)}}}},YA=(t,e)=>(n,r,s)=>{let i={storage:JA(()=>window.localStorage),partialize:v=>v,version:0,merge:(v,S)=>({...S,...v}),...e},o=!1,a=0;const c=new Set,l=new Set;let u=i.storage;if(!u)return t((...v)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),n(...v)},r,s);const h=()=>{const v=i.partialize({...r()});return u.setItem(i.name,{state:v,version:i.version})},f=s.setState;s.setState=(...v)=>(f(...v),h());const p=t((...v)=>(n(...v),h()),r,s);s.getInitialState=()=>p;let g;const y=()=>{var v,S;if(!u)return;const b=++a;o=!1,c.forEach(w=>{var E;return w((E=r())!=null?E:p)});const x=((S=i.onRehydrateStorage)==null?void 0:S.call(i,(v=r())!=null?v:p))||void 0;return jl(u.getItem.bind(u))(i.name).then(w=>{if(w)if(typeof w.version=="number"&&w.version!==i.version){if(i.migrate){const E=i.migrate(w.state,w.version);return E instanceof Promise?E.then(_=>[!0,_]):[!0,E]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,w.state];return[!1,void 0]}).then(w=>{var E;if(b!==a)return;const[_,C]=w;if(g=i.merge(C,(E=r())!=null?E:p),n(g,!0),_)return h()}).then(()=>{b===a&&(x==null||x(r(),void 0),g=r(),o=!0,l.forEach(w=>w(g)))}).catch(w=>{b===a&&(x==null||x(void 0,w))})};return s.persist={setOptions:v=>{i={...i,...v},v.storage&&(u=v.storage)},clearStorage:()=>{++a,u==null||u.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>y(),hasHydrated:()=>o,onHydrate:v=>(c.add(v),()=>{c.delete(v)}),onFinishHydration:v=>(l.add(v),()=>{l.delete(v)})},i.skipHydration||y(),g||p},XA=YA;function rv(t,e){return function(){return t.apply(e,arguments)}}const{toString:QA}=Object.prototype,{getPrototypeOf:Jt}=Object,{iterator:_i,toStringTag:sv}=Symbol,Yt=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),iv=t=>typeof t=="string"&&(t==="__proto__"||t==="constructor"||t==="prototype"),Ra=(t,e,n)=>t===Object.prototype||!n&&e===null,eP=t=>{if(!Object.isExtensible(t))return!1;const e=Object.getOwnPropertyNames(t);return Object.getOwnPropertySymbols&&e.push(...Object.getOwnPropertySymbols(t)),e.every(n=>{if(iv(n))return!1;const r=Object.getOwnPropertyDescriptor(t,n);return!!r&&r.configurable&&r.writable===!0})},Gu=(t,e)=>{let n=t;const r=[];for(;n!=null;){if(r.indexOf(n)!==-1)return!1;r.push(n);const s=Jt(n);if(Ra(n,s,n===t))return!1;if(Yt(n,e))return!0;n=s}return!1},tP=(t,e)=>t!=null&&Gu(t,e)?t[e]:void 0,nP=t=>{if(t==null||typeof t!="object"&&typeof t!="function")return t;const e=Jt(t);if(e===null&&eP(t))return t;const n=Object.create(null),r=Object.create(null),s=[];let i=t;for(;i!=null&&s.indexOf(i)===-1;){s.push(i);const o=i===t?e:Jt(i);if(Ra(i,o,i===t))break;const a=Object.getOwnPropertyNames(i);Object.getOwnPropertySymbols&&a.push(...Object.getOwnPropertySymbols(i));for(const c of a)iv(c)||Yt(r,c)||(n[c]=t[c],r[c]=!0);i=o}return n},Zu=(t=>e=>{const n=QA.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),lt=t=>(t=t.toLowerCase(),e=>Zu(e)===t),Aa=t=>e=>typeof e===t,{isArray:er}=Array,tr=Aa("undefined");function es(t){return t!==null&&!tr(t)&&t.constructor!==null&&!tr(t.constructor)&&Ge(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const ov=lt("ArrayBuffer");function rP(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&ov(t.buffer),e}const sP=Aa("string"),Ge=Aa("function"),iP=Aa("number"),ts=t=>t!==null&&typeof t=="object",oP=t=>t===!0||t===!1,po=t=>{if(!ts(t))return!1;const e=Jt(t);return(e===null||e===Object.prototype||Jt(e)===null)&&(Ra(t,e,!0)||!Yt(t,sv)&&!Yt(t,_i))},aP=t=>{if(!ts(t)||es(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},cP=lt("Date"),lP=lt("File"),uP=t=>!!(t&&typeof t.uri<"u"),dP=t=>t&&typeof t.getParts<"u",hP=lt("Blob"),fP=lt("FileList"),pP=lt("Set"),mP=t=>ts(t)&&Ge(t.pipe);function gP(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Bf=gP(),Hf=typeof Bf.FormData<"u"?Bf.FormData:void 0,yP=t=>{if(!t)return!1;if(Hf&&t instanceof Hf)return!0;const e=Jt(t);if(!e||e===Object.prototype||!Ge(t.append))return!1;const n=Zu(t);return n==="formdata"||n==="object"&&Ge(t.toString)&&t.toString()==="[object FormData]"},vP=lt("URLSearchParams"),[bP,xP,wP,kP]=["ReadableStream","Request","Response","Headers"].map(lt),SP=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ti(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),er(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{if(es(t))return;const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(r=0;r<o;r++)a=i[r],e.call(null,t[a],a,t)}}function EP(t,e){if(es(t))return null;e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const zn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,av=t=>!tr(t)&&t!==zn;function Dl(...t){const{caseless:e,skipUndefined:n}=av(this)&&this||{},r={},s=e?Object.create(null):null,i=(o,a)=>{if(a==="__proto__"||a==="constructor"||a==="prototype")return;let c=a;if(s&&typeof a=="string"){const u=a.toLowerCase(),h=s[u];h!==void 0&&Yt(r,h)?c=h:s[u]=a}const l=Yt(r,c)?r[c]:void 0;po(l)&&po(o)?r[c]=Dl(l,o):po(o)?r[c]=Dl({},o):er(o)?r[c]=o.slice():(!n||!tr(o))&&(r[c]=o)};for(let o=0,a=t.length;o<a;o++){const c=t[o];if(!c||es(c)||(Ti(c,i),typeof c!="object"||er(c)||!Object.getOwnPropertySymbols))continue;const l=Object.getOwnPropertySymbols(c);for(let u=0;u<l.length;u++){const h=l[u];DP.call(c,h)&&i(c[h],h)}}return r}const _P=(t,e,n,{allOwnKeys:r}={})=>(Ti(e,(s,i)=>{n&&Ge(s)?Object.defineProperty(t,i,{__proto__:null,value:rv(s,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,i,{__proto__:null,value:s,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),t),TP=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),CP=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),Object.defineProperty(t.prototype,"constructor",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{__proto__:null,value:e.prototype}),n&&Object.assign(t.prototype,n)},RP=(t,e,n,r)=>{let s,i,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Jt(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},AP=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},PP=t=>{if(!t)return null;if(er(t))return t;let e=t.length;if(!Number.isSafeInteger(e)||e<0||e>4294967295)return null;const n=new Set,r=new Set;let s=t;for(;s!=null&&n.size<e;){if(r.has(s))return null;r.add(s);const o=Jt(s);if(Ra(s,o,s===t))break;Object.getOwnPropertyNames(s).forEach(a=>{const c=+a;Number.isInteger(c)&&c>=0&&c<e&&String(c)===a&&Yt(s,a)&&n.add(c)}),s=o}if(n.size!==e)return null;const i=new Array(e);for(;e-- >0;)i[e]=t[e];return i},IP=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Jt(Uint8Array)),OP=(t,e)=>{const r=(t&&t[_i]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},NP=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},LP=lt("HTMLFormElement"),jP=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),{propertyIsEnumerable:DP}=Object.prototype,MP=lt("RegExp"),cv=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};Ti(n,(s,i)=>{let o;(o=e(s,i,t))!==!1&&(r[i]=o||s)}),Object.defineProperties(t,r)},FP=t=>{cv(t,(e,n)=>{if(Ge(t)&&["arguments","caller","callee"].includes(n))return!1;const r=t[n];if(Ge(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},$P=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return er(t)?r(t):r(String(t).split(e)),n},VP=()=>{},UP=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function BP(t){return!!(t&&Ge(t.append)&&t[sv]==="FormData"&&t[_i])}const HP=t=>{const e=new WeakSet,n=r=>{if(ts(r)){if(e.has(r))return;if(es(r))return r;if(!("toJSON"in r)){e.add(r);let s;if(pP(r)){s=[];for(const i of r){const o=n(i);!tr(o)&&s.push(o)}}else s=er(r)?[]:{},Ti(r,(i,o)=>{const a=n(i);!tr(a)&&(s[o]=a)});return e.delete(r),s}}return r};return n(t)},zP=lt("AsyncFunction"),WP=t=>t&&(ts(t)||Ge(t))&&Ge(t.then)&&Ge(t.catch),lv=((t,e)=>t?setImmediate:e?((n,r)=>(zn.addEventListener("message",({source:s,data:i})=>{s===zn&&i===n&&r.length&&r.shift()()},!1),s=>{r.push(s),zn.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Ge(zn.postMessage)),qP=typeof queueMicrotask<"u"?queueMicrotask.bind(zn):typeof process<"u"&&process.nextTick||lv,uv=t=>t!=null&&Ge(t[_i]),KP=t=>t!=null&&Gu(t,_i)&&uv(t),k={isArray:er,isArrayBuffer:ov,isBuffer:es,isFormData:yP,isArrayBufferView:rP,isString:sP,isNumber:iP,isBoolean:oP,isObject:ts,isPlainObject:po,isEmptyObject:aP,isReadableStream:bP,isRequest:xP,isResponse:wP,isHeaders:kP,isUndefined:tr,isDate:cP,isFile:lP,isReactNativeBlob:uP,isReactNative:dP,isBlob:hP,isRegExp:MP,isFunction:Ge,isStream:mP,isURLSearchParams:vP,isTypedArray:IP,isFileList:fP,forEach:Ti,merge:Dl,extend:_P,trim:SP,stripBOM:TP,inherits:CP,toFlatObject:RP,kindOf:Zu,kindOfTest:lt,endsWith:AP,toArray:PP,forEachEntry:OP,matchAll:NP,isHTMLForm:LP,hasOwnProperty:Yt,hasOwnProp:Yt,hasOwnInPrototypeChain:Gu,getSafeProp:tP,toSafeFlatObject:nP,reduceDescriptors:cv,freezeMethods:FP,toObjectSet:$P,toCamelCase:jP,noop:VP,toFiniteNumber:UP,findKey:EP,global:zn,isContextDefined:av,isSpecCompliantForm:BP,toJSONObject:HP,isAsyncFn:zP,isThenable:WP,setImmediate:lv,asap:qP,isIterable:uv,isSafeIterable:KP},GP=k.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ZP=t=>{const e=Object.create(null);let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim();const a=k.hasOwnProp(e,n);!n||a&&k.hasOwnProp(GP,n)||(n==="set-cookie"?a?e[n].push(r):e[n]=[r]:e[n]=a?e[n]+", "+r:r)}),e};function JP(t){let e=0,n=t.length;for(;e<n;){const r=t.charCodeAt(e);if(r!==9&&r!==32)break;e+=1}for(;n>e;){const r=t.charCodeAt(n-1);if(r!==9&&r!==32)break;n-=1}return e===0&&n===t.length?t:t.slice(e,n)}const YP=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),XP=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function Ju(t,e){return k.isArray(t)?t.map(n=>Ju(n,e)):JP(String(t).replace(e,""))}const QP=t=>Ju(t,YP),eI=t=>Ju(t,XP);function dv(t){const e=Object.create(null);return k.forEach(t.toJSON(),(n,r)=>{e[r]=eI(n)}),e}const zf=Symbol("internals");function ps(t){return t&&String(t).trim().toLowerCase()}function mo(t){return t===!1||t==null?t:k.isArray(t)?t.map(mo):QP(String(t))}function tI(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const nI=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function Ec(t){let e=0,n=t.length;for(;e<n;){const r=t.charCodeAt(e);if(r!==9&&r!==32)break;e+=1}for(;n>e;){const r=t.charCodeAt(n-1);if(r!==9&&r!==32)break;n-=1}return e===0&&n===t.length?t:t.slice(e,n)}function rI(t){const e=t.length-1;if(e<1||t.charCodeAt(0)!==34||t.charCodeAt(e)!==34)return t;let n="";for(let r=1;r<e;r++){const s=t.charCodeAt(r);if(s===34||s===92&&(r+=1,r>=e))return t;n+=t[r]}return n}function sI(t){const e=Object.create(null),n=String(t);let r=0,s=!1,i=!1;function o(a){const c=Ec(n.slice(r,a)),l=c.indexOf("=");if(l<1)return;const u=Ec(c.slice(0,l));if(!nI.test(u))return;const h=u.toLowerCase();if(h==="__proto__"||h==="constructor"||h==="prototype")return;const f=Ec(c.slice(l+1));e[h]=rI(f)}for(let a=0;a<n.length;a++){const c=n.charCodeAt(a);s?i?i=!1:c===92?i=!0:c===34&&(s=!1):c===34?s=!0:(c===44||c===59)&&(o(a),r=a+1)}return o(n.length),e}const iI=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim()),oI="__Proto__",Wf=t=>t==="__proto__"?oI:t;function _c(t,e,n,r,s){if(k.isFunction(r))return r.call(t,e,n);if(s&&(e=n),!!k.isString(e)){if(k.isString(r))return e.indexOf(r)!==-1;if(k.isRegExp(r))return r.test(e)}}function aI(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function cI(t,e){const n=k.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{__proto__:null,value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}let je=class{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(a,c,l){const u=ps(c);if(!u)return;const h=k.findKey(s,u);(!h||s[h]===void 0||l===!0||l===void 0&&s[h]!==!1)&&(s[Wf(h||c)]=mo(a))}const o=(a,c)=>k.forEach(a,(l,u)=>i(l,u,c));if(k.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(k.isString(e)&&(e=e.trim())&&!iI(e))o(ZP(e),n);else if(k.isObject(e)&&k.isSafeIterable(e)){let a=Object.create(null),c,l;for(const u of e){if(!k.isArray(u))throw new TypeError("Object iterator must return a key-value pair");l=u[0],k.hasOwnProp(a,l)?(c=a[l],a[l]=k.isArray(c)?[...c,u[1]]:[c,u[1]]):a[l]=u[1]}o(a,n)}else e!=null&&i(n,e,r);return this}get(e,n){if(e=ps(e),e){const r=k.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return tI(s);if(k.isFunction(n))return n.call(this,s,r);if(k.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=ps(e),e){const r=k.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||_c(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=ps(o),o){const a=k.findKey(r,o);a&&(!n||_c(r,r[a],a,n))&&(delete r[a],s=!0)}}return k.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||_c(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r=Object.create(null);return k.forEach(this,(s,i)=>{const o=k.findKey(r,i);if(o){n[o]=mo(s),delete n[i];return}const a=Wf(e?aI(i):String(i).trim());a!==i&&delete n[i],n[a]=mo(s),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return k.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&k.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){const e=this.get("set-cookie");return k.isArray(e)?e:e==null||e===!1?[]:[e]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static parseParameters(e){return sI(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[zf]=this[zf]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=ps(o);r[a]||(cI(s,o),r[a]=!0)}return k.isArray(e)?e.forEach(i):i(e),this}};je.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);k.reduceDescriptors(je.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});k.freezeMethods(je);const Uo="[REDACTED ****]";function lI(t){if(k.hasOwnProp(t,"toJSON"))return!0;let e=Object.getPrototypeOf(t);for(;e&&e!==Object.prototype;){if(k.hasOwnProp(e,"toJSON"))return!0;e=Object.getPrototypeOf(e)}return!1}function uI(t,e){const n=new Set(e.map(i=>String(i).toLowerCase())),r=[],s=i=>{if(i===null||typeof i!="object"||k.isBuffer(i))return i;if(r.indexOf(i)!==-1)return;i instanceof je&&(i=i.toJSON()),r.push(i);let o;if(k.isArray(i))o=[],i.forEach((a,c)=>{const l=s(a);k.isUndefined(l)||(o[c]=l)});else{if(!k.isPlainObject(i)&&lI(i))return r.pop(),i;o=Object.create(null);for(const[a,c]of Object.entries(i)){const l=n.has(a.toLowerCase())?Uo:s(c);k.isUndefined(l)||(o[a]=l)}}return r.pop(),o};return s(t)}function qf(t){try{return String(t)}catch{return""}}function dI(t){return t.errors.map(n=>{try{return n&&n.message?qf(n.message):qf(n)}catch{return""}}).filter(Boolean).join("; ")||t.name||"AggregateError"}const hI=`
Caused by: `,Ml=Symbol("causeStack");function fI(t,e){const n=k.hasOwnProp(t,Ml)&&t[Ml];return n&&e.endsWith(n)?e.length-n.length:-1}function pI(t,e){try{const n=e&&e.stack;if(typeof n!="string"||!n)return;const r=t.stack;if(typeof r!="string"||!r)return;const s=hI+n;t.stack=r+s,Object.defineProperty(t,Ml,{__proto__:null,value:s})}catch{}}let I=class hv extends Error{static from(e,n,r,s,i,o){let a=e.message;!a&&k.isArray(e.errors)&&e.errors.length&&(a=dI(e));const c=new hv(a,n||e.code,r,s,i);return Object.defineProperty(c,"cause",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),c.name=e.name,pI(c,e),e.status!=null&&c.status==null&&(c.status=e.status),o&&Object.assign(c,o),c}constructor(e,n,r,s,i){super(e),Object.defineProperty(this,"message",{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),r&&(this.config=r),s&&(this.request=s),i&&(this.response=i,this.status=i.status)}toJSON(){const e=this.config,n=e&&k.hasOwnProp(e,"redact")?e.redact:void 0,r=k.isArray(n)&&n.length>0?uI(e,n):k.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:r,code:this.code,status:this.status}}};I.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";I.ERR_BAD_OPTION="ERR_BAD_OPTION";I.ECONNABORTED="ECONNABORTED";I.ETIMEDOUT="ETIMEDOUT";I.ECONNREFUSED="ECONNREFUSED";I.ERR_NETWORK="ERR_NETWORK";I.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";I.ERR_DEPRECATED="ERR_DEPRECATED";I.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";I.ERR_BAD_REQUEST="ERR_BAD_REQUEST";I.ERR_CANCELED="ERR_CANCELED";I.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";I.ERR_INVALID_URL="ERR_INVALID_URL";I.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const mI=null,fv=100;function Fl(t){return k.isPlainObject(t)||k.isArray(t)}function pv(t){return k.endsWith(t,"[]")?t.slice(0,-2):t}function Tc(t,e,n){return t?t.concat(e).map(function(s,i){return s=pv(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function gI(t){return k.isArray(t)&&!t.some(Fl)}const yI=k.toFlatObject(k,{},null,function(e){return/^is[A-Z]/.test(e)});function Pa(t,e,n){if(!k.isObject(t))throw new TypeError("target must be an object");e=e||new FormData;const r=(b,x)=>{const w=k.getSafeProp(n,b);return k.isUndefined(w)?x:w},s=r("metaTokens",!0),i=r("visitor")||y,o=r("dots",!1),a=r("indexes",!1),c=r("Blob")||typeof Blob<"u"&&Blob,l=r("maxDepth",fv),u=c&&k.isSpecCompliantForm(e),h=[];if(!k.isFunction(i))throw new TypeError("visitor must be a function");function f(b){if(b===null)return"";if(k.isDate(b))return b.toISOString();if(k.isBoolean(b))return b.toString();if(!u&&k.isBlob(b))throw new I("Blob is not supported. Use a Buffer instead.");if(k.isArrayBuffer(b)||k.isTypedArray(b)){if(u&&typeof c=="function")return new c([b]);throw new I("Blob is not supported. Use a Buffer instead.",I.ERR_NOT_SUPPORT)}return b}function p(b){if(b>l)throw new I("Object is too deeply nested ("+b+" levels). Max depth: "+l,I.ERR_FORM_DATA_DEPTH_EXCEEDED)}function g(b,x){if(l===1/0)return JSON.stringify(b);const w=[];return JSON.stringify(b,function(_,C){if(!k.isObject(C))return C;for(;w.length&&w[w.length-1]!==this;)w.pop();return w.push(C),p(x+w.length-1),C})}function y(b,x,w){let E=b;if(k.isReactNative(e)&&k.isReactNativeBlob(b))return e.append(Tc(w,x,o),f(b)),!1;if(b&&!w&&typeof b=="object"){if(k.endsWith(x,"{}"))x=s?x:x.slice(0,-2),b=g(b,1);else if(k.isArray(b)&&gI(b)||(k.isFileList(b)||k.endsWith(x,"[]"))&&(E=k.toArray(b)))return x=pv(x),E.forEach(function(C,R){!(k.isUndefined(C)||C===null)&&e.append(a===!0?Tc([x],R,o):a===null?x:x+"[]",f(C))}),!1}return Fl(b)?!0:(e.append(Tc(w,x,o),f(b)),!1)}const v=Object.assign(yI,{defaultVisitor:y,convertValue:f,isVisitable:Fl});function S(b,x,w=0){if(!k.isUndefined(b)){if(p(w),h.indexOf(b)!==-1)throw new Error("Circular reference detected in "+x.join("."));h.push(b),k.forEach(b,function(_,C){(!(k.isUndefined(_)||_===null)&&i.call(e,_,k.isString(C)?C.trim():C,x,v))===!0&&S(_,x?x.concat(C):[C],w+1)}),h.pop()}}if(!k.isObject(t))throw new TypeError("data must be an object");return S(t),e}function Kf(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(t).replace(/[!'()~]|%20/g,function(r){return e[r]})}function Yu(t,e){this._pairs=[],t&&Pa(t,this,e)}const mv=Yu.prototype;mv.append=function(e,n){this._pairs.push([e,n])};mv.toString=function(e){const n=e?r=>e.call(this,r,Kf):Kf;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function vI(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function gv(t,e,n){if(!e)return t;t=t||"";const r=k.isFunction(n)?{serialize:n}:n,s=k.getSafeProp(r,"encode")||vI,i=k.getSafeProp(r,"serialize");let o;if(i?o=i(e,r):o=k.isURLSearchParams(e)?e.toString():new Yu(e,r).toString(s),o){const a=t.indexOf("#");a!==-1&&(t=t.slice(0,a)),t+=(t.indexOf("?")===-1?"?":"&")+o}return t}const ms=Symbol("internals");function yv(t){return t?t.length:0}function Gf(t){if(t)for(;t.length&&t[t.length-1]===null;)t.pop()}function bI(t){return typeof t=="string"&&t!==""&&String(Number(t))===t?Number(t):t}function gs(t,e){const n=t.handlers,r=yv(n);n!==e.handlersRef?(e.handlersRef=n,e.handlerEntries.clear()):r!==e.handlersLength&&(r?e.handlerEntries.forEach(function(i,o){n[i.index]!==i.handler&&e.handlerEntries.delete(o)}):e.handlerEntries.clear()),e.handlersLength=r}class Zf{constructor(){this.handlers=[],this[ms]={handlersRef:this.handlers,handlersLength:this.handlers.length,handlerEntries:new Map,iterationDepth:0,nextId:0}}use(e,n,r){const s={fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null},i=this[ms];this.handlers==null&&(this.handlers=[]),gs(this,i);const o=i.nextId++;return this.handlers.push(s),i.handlerEntries.set(o,{handler:s,index:this.handlers.length-1}),i.handlersLength=this.handlers.length,o}eject(e){const n=this[ms];gs(this,n);const r=bI(e),s=n.handlerEntries.get(r);if(s){if(n.handlerEntries.delete(r),this.handlers[s.index]!==s.handler)return;this.handlers[s.index]=null,n.iterationDepth||(Gf(this.handlers),n.handlersLength=this.handlers.length)}}clear(){this.handlers&&(this.handlers=[],gs(this,this[ms]))}forEach(e){const n=this[ms];gs(this,n),n.iterationDepth++;try{k.forEach(this.handlers,function(s){s!==null&&e(s)})}finally{--n.iterationDepth||(gs(this,n),Gf(this.handlers),n.handlersLength=yv(this.handlers))}}}const Xu={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0,encodeBasicAuthUsername:!1},xI=typeof URLSearchParams<"u"?URLSearchParams:Yu,wI=typeof FormData<"u"?FormData:null,kI=typeof Blob<"u"?Blob:null,SI={isBrowser:!0,classes:{URLSearchParams:xI,FormData:wI,Blob:kI},protocols:["http","https","file","blob","url","data"]},Qu=typeof window<"u"&&typeof document<"u",$l=typeof navigator=="object"&&navigator||void 0,EI=Qu&&(!$l||["ReactNative","NativeScript","NS"].indexOf($l.product)<0),_I=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",TI=Qu&&window.location.href||"http://localhost",CI=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Qu,hasStandardBrowserEnv:EI,hasStandardBrowserWebWorkerEnv:_I,navigator:$l,origin:TI},Symbol.toStringTag,{value:"Module"})),Oe={...CI,...SI};function RI(t,e){return Pa(t,new Oe.classes.URLSearchParams,{visitor:function(n,r,s,i){return Oe.isNode&&k.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...e})}const Jf=fv;function vv(t){if(t>Jf)throw new I("FormData field is too deeply nested ("+t+" levels). Max depth: "+Jf,I.ERR_FORM_DATA_DEPTH_EXCEEDED)}function AI(t){const e=[],n=/[^.[\]]+|\[([^.[\]]*)]/g;let r;for(;(r=n.exec(t))!==null;)vv(e.length),e.push(r[0]==="[]"?"":r[1]||r[0]);return e}function bv(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function xv(t){if(!k.isArray(t))return t;const e=Object.keys(t);return e.length!==t.length||e.some((n,r)=>n!==String(r))?bv(t):t}function PI(t){const e=[t];for(;e.length;){const n=e.pop();Object.keys(n).forEach(r=>{const s=n[r]=xv(n[r]);(k.isArray(s)||k.isPlainObject(s))&&e.push(s)})}return t}function wv(t){function e(n,r,s,i){vv(i);let o=n[i++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&k.isArray(s)?s.length:o,c?(k.hasOwnProp(s,o)?(s[o]=xv(s[o]),s[o]=k.isArray(s[o])?s[o].concat(r):[s[o],r]):s[o]=r,!a):((!k.hasOwnProp(s,o)||!k.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&k.isArray(s[o])&&(s[o]=bv(s[o])),!a)}if(k.isFormData(t)&&k.isFunction(t.entries)){const n={};return k.forEachEntry(t,(r,s)=>{e(AI(r),s,n,0)}),PI(n)}return null}const kv=Object.freeze(["get","delete","head","options","post","put","patch","purge","link","unlink","query"]),gr=(t,e)=>t!=null&&k.hasOwnProp(t,e)?t[e]:void 0;function II(t,e,n){if(k.isString(t))try{return(e||JSON.parse)(t),k.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const Ci={transitional:Xu,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=k.isObject(e);if(i&&k.isHTMLForm(e)&&(e=new FormData(e)),k.isFormData(e))return s?JSON.stringify(wv(e)):e;if(k.isArrayBuffer(e)||k.isBuffer(e)||k.isStream(e)||k.isFile(e)||k.isBlob(e)||k.isReadableStream(e))return e;if(k.isArrayBufferView(e))return e.buffer;if(k.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){const c=gr(this,"formSerializer");if(r.indexOf("application/x-www-form-urlencoded")>-1)return RI(e,c).toString();if((a=k.isFileList(e))||r.indexOf("multipart/form-data")>-1){const l=gr(this,"env"),u=l&&l.FormData;return Pa(a?{"files[]":e}:e,u&&new u,c)}}return i||s?(n.setContentType("application/json",!1),II(e)):e}],transformResponse:[function(e){const n=gr(this,"transitional")||Ci.transitional,r=n&&n.forcedJSONParsing,s=gr(this,"responseType"),i=s==="json";if(k.isResponse(e)||k.isReadableStream(e))return e;if(e&&k.isString(e)&&(r&&!s||i)){const a=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e,gr(this,"parseReviver"))}catch(c){if(a)throw c.name==="SyntaxError"?I.from(c,I.ERR_BAD_RESPONSE,this,null,gr(this,"response")):c}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Oe.classes.FormData,Blob:Oe.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};k.forEach(kv,t=>{Ci.headers[t]={}});function Cc(t,e){const n=this||Ci,r=e||n,s=je.from(r.headers);let i=r.data;return k.forEach(t,function(a){i=a.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function Sv(t){return!!(t&&t.__CANCEL__)}let Ri=class extends I{constructor(e,n,r){super(e??"canceled",I.ERR_CANCELED,n,r),this.name="CanceledError",this.__CANCEL__=!0}};function Ev(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new I("Request failed with status code "+n.status,n.status>=400&&n.status<500?I.ERR_BAD_REQUEST:I.ERR_BAD_RESPONSE,n.config,n.request,n))}const OI=/[\t\n\r]/g;function _v(t){if(typeof t!="string")return t;let e=0;for(;e<t.length&&t.charCodeAt(e)<=32;)e++;return t.slice(e).replace(OI,"")}function Rc(t){const e=/^([-+\w]{1,25}):(?:\/\/)?/.exec(t);return e&&e[1].toLowerCase()||""}const Yf=t=>{try{return decodeURIComponent(t)}catch{return t}},Tv=Oe.hasStandardBrowserEnv?{write(t,e,n,r,s,i,o){if(typeof document>"u")return;const a=[`${t}=${encodeURIComponent(e)}`];k.isNumber(n)&&a.push(`expires=${new Date(n).toUTCString()}`),k.isString(r)&&a.push(`path=${r}`),k.isString(s)&&a.push(`domain=${s}`),i===!0&&a.push("secure"),k.isString(o)&&a.push(`SameSite=${o}`),document.cookie=a.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie;if(!e)return null;const n=e.split(";");for(let r=0;r<n.length;r++){const s=n[r].replace(/^\s+/,""),i=s.indexOf("=");if(i!==-1&&s.slice(0,i)===t)return Yf(s.slice(i+1))}return null},async readAsync(t){try{const e=typeof window<"u"&&window.cookieStore;if(e&&k.isFunction(e.get)){const n=await e.get(t);return n?Yf(n.value):null}}catch{}return this.read(t)},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},async readAsync(){return null},remove(){}};function NI(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),u=r[i];o||(o=l),n[s]=c,r[s]=l;let h=i,f=0;for(;h!==s;)f+=n[h++],h=h%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),l-o<e)return;const p=u&&l-u;return p?Math.round(f*1e3/p):void 0}}function LI(t,e){let n=0,r=1e3/e,s,i;const o=(u,h=Date.now())=>{n=h,s=null,i&&(clearTimeout(i),i=null),t(...u)};return[(...u)=>{const h=Date.now(),f=h-n;f>=r?o(u,h):(s=u,i||(i=setTimeout(()=>{i=null,o(s)},r-f)))},()=>s&&o(s),(...u)=>o(u)]}const Bo=(t,e,n=3)=>{let r=0;const s=NI(50,250);return LI(i=>{if(!i||!k.isNumber(i.loaded))return;const o=i.loaded,a=i.lengthComputable?i.total:void 0,c=Math.max(0,a!=null?Math.min(o,a):o),l=Math.max(0,c-r),u=s(l);r=Math.max(r,c);const h={loaded:c,total:a,progress:a?c/a:void 0,bytes:l,rate:u||void 0,estimated:u&&a?(a-c)/u:void 0,event:i,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(h)},n)},Xf=(t,e)=>{const n=t!=null;return[r=>e[0]({lengthComputable:n,total:t,loaded:r}),e[1]]},Qf=(t,e=k.asap)=>(...n)=>e(()=>t(...n)),jI=Oe.hasStandardBrowserEnv?(t=>e=>(e=new URL(e,document.baseURI||Oe.origin),t.protocol===e.protocol&&t.host===e.host&&t.port===e.port))(new URL(Oe.origin)):()=>!0;function DI(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function MI(t,e){if(!e)return t;let n=t.length;for(;n>0&&t.charCodeAt(n-1)===47;)n--;return t.slice(0,n)+"/"+e.replace(/^\/+/,"")}const FI=/^https?:(?!\/\/)/i;function $I(t){return t&&t.replace(/(^|&)([^=&]*=)?[^&]+/g,(e,n,r="")=>`${n}${r}${Uo}`)}function VI(t){const e=t.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${Uo}@`),n=e.indexOf("#"),s=(n===-1?e:e.slice(0,n)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${Uo}`);return n===-1?s:`${s}#${$I(e.slice(n+1))}`}function ep(t,e){if(typeof t=="string"){const n=_v(t);if(FI.test(n))throw new I(`Invalid URL ${JSON.stringify(VI(n))}: missing "//" after protocol`,I.ERR_INVALID_URL,e)}}function Cv(t,e,n,r){ep(e,r);let s=!DI(e);return t&&(s||n===!1)?(ep(t,r),MI(t,e)):e}function UI(t){const e=[{value:t}],n=new WeakSet,r=new WeakSet;for(;e.length;){const{value:s,done:i}=e.pop();if(!k.isPlainObject(s)&&!k.isArray(s))continue;if(i){n.delete(s);continue}if(n.has(s))throw new I("Circular reference detected in params",I.ERR_BAD_OPTION_VALUE);if(r.has(s))continue;r.add(s),n.add(s),e.push({value:s,done:!0});const o=Object.keys(s);Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor&&Object.getOwnPropertySymbols(s).forEach(a=>{const c=Object.getOwnPropertyDescriptor(s,a);c&&c.enumerable&&o.push(a)}),o.forEach(a=>{if(a==="__proto__"||a==="constructor"||a==="prototype"){const c=Object.getOwnPropertyDescriptor(s,a);c&&k.hasOwnProp(c,"value")&&e.push({value:c.value})}else e.push({value:s[a]})})}}const tp=t=>t instanceof je?{...t}:t,Vl=t=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(t).concat(Object.getOwnPropertySymbols(t).filter(e=>{const n=Object.getOwnPropertyDescriptor(t,e);return n&&n.enumerable})):Object.keys(t);function BI(t,e){const n=[],r=new WeakMap,s={};function i(a,c){if(!k.isPlainObject(c))return k.isArray(c)?c.slice():c;const l=k.isPlainObject(a)?a:s;let u=r.get(c);if(u||(u=new WeakMap,r.set(c,u)),u.has(l))return u.get(l);const h={};return u.set(l,h),n.push({base:l,source:c,result:h}),h}const o=k.isUndefined(e)?i(void 0,t):i(t,e);for(;n.length;){const{base:a,source:c,result:l}=n.pop(),u=new Set(Vl(a)),h=new Set(Vl(c));new Set([...u,...h]).forEach(p=>{if(p==="__proto__"||p==="constructor"||p==="prototype")return;const g=h.has(p),y=g?c[p]:void 0,v=(!g||k.isPlainObject(y))&&u.has(p)?a[p]:void 0;l[p]=g?i(v,y):i(void 0,v)})}return UI(o),o}function _n(t,e,n,r){return k.isPlainObject(t)&&k.isPlainObject(e)?k.merge.call({caseless:r},t,e):k.isPlainObject(e)?k.merge({},e):k.isArray(e)?e.slice():e}function Rv(t,e,n,r){if(k.isUndefined(e)){if(!k.isUndefined(t))return _n(void 0,t,n,r)}else return _n(t,e,n,r)}function Ac(t,e){if(!k.isUndefined(e))return _n(void 0,e)}function pe(t,e){if(k.isUndefined(e)){if(!k.isUndefined(t))return _n(void 0,t)}else return _n(void 0,e)}function HI(t,e,n){const r=k.hasOwnProp(e,"transitional")?e.transitional:void 0;if(!k.isUndefined(r))if(k.isPlainObject(r)){if(k.hasOwnProp(r,n))return r[n]}else return;const s=k.hasOwnProp(t,"transitional")?t.transitional:void 0;if(k.isPlainObject(s)&&k.hasOwnProp(s,n))return s[n]}function Ul(t,e,n,r,s){if(k.hasOwnProp(s,n))return _n(t,e);if(k.hasOwnProp(r,n))return _n(void 0,t)}function zI(t,e,n){return Rv(tp(t),tp(e),n,!0)}const WI=Object.freeze({__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0}),np={url:Ac,method:Ac,data:Ac,baseURL:pe,transformRequest:pe,transformResponse:pe,params:BI,paramsSerializer:pe,timeout:pe,timeoutErrorMessage:pe,withCredentials:pe,withXSRFToken:pe,adapter:pe,responseType:pe,xsrfCookieName:pe,xsrfHeaderName:pe,onUploadProgress:pe,onDownloadProgress:pe,decompress:pe,maxContentLength:pe,maxBodyLength:pe,beforeRedirect:pe,transport:pe,httpAgent:pe,httpsAgent:pe,cancelToken:pe,socketPath:pe,allowedSocketPaths:pe,responseEncoding:pe,validateStatus:Ul,headers:zI};function nr(t,e){t=t||{},e=e||{};const n=Object.create(null);Object.defineProperty(n,"hasOwnProperty",WI);const r=Vl({...t,...e});for(let s=0,i=r.length;s<i;s++){const o=r[s];if(o==="__proto__"||o==="constructor"||o==="prototype")continue;const a=k.hasOwnProp(np,o)?np[o]:Rv,c=k.hasOwnProp(t,o)?t[o]:void 0,l=k.hasOwnProp(e,o)?e[o]:void 0,u=a===Ul?a(c,l,o,t,e):a(c,l,o);k.isUndefined(u)&&a!==Ul||(n[o]=u)}return k.hasOwnProp(e,"validateStatus")&&k.isUndefined(e.validateStatus)&&HI(t,e,"validateStatusUndefinedResolves")===!1&&(k.hasOwnProp(t,"validateStatus")?n.validateStatus=_n(void 0,t.validateStatus):delete n.validateStatus),n}const qI=["content-type","content-length"];function KI(t,e,n){if(n!=="content-only"){t.set(e);return}Object.entries(e||{}).forEach(([r,s])=>{qI.includes(r.toLowerCase())&&t.set(r,s)})}const rp=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16))),GI=t=>Tv.read(t);function Av(t,e=GI){const n=nr({},t),r=p=>k.hasOwnProp(n,p)?n[p]:void 0,s=r("data");let i=r("withXSRFToken");const o=r("xsrfHeaderName"),a=r("xsrfCookieName");let c=r("headers");const l=r("auth"),u=r("baseURL"),h=r("allowAbsoluteUrls"),f=r("url");if(n.headers=c=je.from(c),n.url=gv(Cv(u,f,h,n),r("params"),r("paramsSerializer")),l){const p=k.getSafeProp(l,"username")||"",g=k.getSafeProp(l,"password")||"",y=r("transitional"),v=y&&k.hasOwnProp(y,"encodeBasicAuthUsername")&&y.encodeBasicAuthUsername===!0;try{c.set("Authorization","Basic "+btoa((v?rp(p):p)+":"+(g?rp(g):"")))}catch(S){throw I.from(S,I.ERR_BAD_OPTION_VALUE,t)}}if(k.isFormData(s)){const p=k.getSafeProp(s,"getHeaders");Oe.hasStandardBrowserEnv||Oe.hasStandardBrowserWebWorkerEnv||k.isReactNative(s)?c.setContentType(void 0):k.isFunction(p)&&KI(c,p.call(s),r("formDataHeaderPolicy"))}if(Oe.hasStandardBrowserEnv&&(k.isFunction(i)&&(i=i(n)),i===!0||i==null&&jI(n.url))){const g=o&&a&&e(a);g&&c.set(o,g)}return n}const ZI=typeof XMLHttpRequest<"u",JI=ZI&&function(t){return new Promise(function(n,r){let s;try{const R=Oe.hasStandardBrowserEnv&&typeof window<"u"&&window.cookieStore;s=R&&k.isFunction(R.get)}catch{}let i;const o=Av(t,s?R=>(i=R,null):void 0);let a=o.data;const c=je.from(o.headers).normalize();let{responseType:l,onUploadProgress:u,onDownloadProgress:h}=o,f,p,g,y,v,S,b;function x(){clearTimeout(p);try{v&&v()}catch(R){setTimeout(()=>{throw R})}try{S&&S()}catch(R){setTimeout(()=>{throw R})}w&&(y&&w.removeEventListener("progress",y),w.upload&&(g&&w.upload.removeEventListener("progress",g),v&&w.upload.removeEventListener("loadend",v))),o.cancelToken&&o.cancelToken.unsubscribe(f),o.signal&&o.signal.removeEventListener("abort",f)}let w=new XMLHttpRequest;w.open(o.method.toUpperCase(),o.url,!0),w.timeout=o.timeout;function E(R){if(!w)return;if(w.status===0&&(Rc(_v(o.url))||Rc(Oe.origin))!=="file"&&!(w.responseURL&&w.responseURL.startsWith("file:"))){r(new I("Request aborted",I.ECONNABORTED,t,w)),x(),w=null;return}try{R?b&&b(R):S&&S()}catch(q){setTimeout(()=>{throw q})}if(!w)return;const O=je.from("getAllResponseHeaders"in w&&w.getAllResponseHeaders()),B={data:!l||l==="text"||l==="json"?w.responseText:w.response,status:w.status,statusText:w.statusText,headers:O,config:t,request:w};Ev(function(H){n(H),x()},function(H){r(H),x()},B),w=null}if("onloadend"in w?w.onloadend=E:w.onreadystatechange=function(){!w||w.readyState!==4||w.status===0&&!(w.responseURL&&w.responseURL.startsWith("file:"))||setTimeout(E)},w.onabort=function(){w&&(r(new I("Request aborted",I.ECONNABORTED,t,w)),x(),w=null)},w.onerror=function(O){const $=O&&O.message?O.message:"Network Error",B=new I($,I.ERR_NETWORK,t,w);B.event=O||null,r(B),x(),w=null},w.ontimeout=function(){if(!w)return;let O=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const $=o.transitional||Xu;o.timeoutErrorMessage&&(O=o.timeoutErrorMessage),r(new I(O,$.clarifyTimeoutError?I.ETIMEDOUT:I.ECONNABORTED,t,w)),x(),w=null},a===void 0&&c.setContentType(null),k.isUndefined(o.withCredentials)||(w.withCredentials=!!o.withCredentials),l&&l!=="json"&&(w.responseType=o.responseType),h&&([y,S,b]=Bo(h,!0),w.addEventListener("progress",y)),u&&w.upload&&([g,v]=Bo(u),w.upload.addEventListener("progress",g),w.upload.addEventListener("loadend",v)),o.cancelToken||o.signal){if(f=R=>{if(!w)return;r(!R||R.type?new Ri(null,t,w):R);const O=w;x(),w=null,O.abort()},o.cancelToken&&o.cancelToken.subscribe(f),!w)return;o.signal&&(o.signal.aborted?f():o.signal.addEventListener("abort",f))}if(!w)return;const _=Rc(o.url);if(_&&!Oe.protocols.includes(_)){r(new I("Unsupported protocol "+_+":",I.ERR_BAD_REQUEST,t)),x();return}const C=()=>{w&&("setRequestHeader"in w&&k.forEach(dv(c),function(O,$){w.setRequestHeader($,O)}),w.send(a||null))};if(i){const R=typeof performance<"u"&&k.isFunction(performance.now)?()=>performance.now():Date.now,O=w.timeout>0?R()+Number(w.timeout):void 0,$=()=>{if(!w)return;const B=w;B.ontimeout(),B.abort()};if(O!==void 0){const B=()=>{const q=O-R();q>0?p=setTimeout(B,Math.min(q,2147483647)):$()};B()}Tv.readAsync(i).then(B=>{if(w){if(O!==void 0&&R()>=O){$();return}if(B){const q=k.hasOwnProp(o,"xsrfHeaderName")&&o.xsrfHeaderName;c.set(q,B)}C()}}).catch(B=>{w&&(r(I.from(B,null,t,w)),x(),w=null)})}else C()})},YI=(t,e)=>{if(t=t?t.filter(Boolean):[],!e&&!t.length)return;const n=new AbortController;let r=!1;const s=function(c){if(!r){r=!0,o();const l=c instanceof Error?c:this.reason;n.abort(l instanceof I?l:new Ri(l instanceof Error?l.message:l))}};let i=e&&setTimeout(()=>{i=null,s(new I(`timeout of ${e}ms exceeded`,I.ETIMEDOUT))},e);const o=()=>{t&&(i&&clearTimeout(i),i=null,t.forEach(c=>{const l=k.getSafeProp(c,"unsubscribe");k.isFunction(l)?l.call(c,s):c.removeEventListener("abort",s)}),t=null)};t.forEach(c=>{if(!r){if(c.aborted){s.call(c);return}c.addEventListener("abort",s,{once:!0})}});const{signal:a}=n;return a.unsubscribe=()=>k.asap(o),a},XI=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let r=0,s;for(;r<n;)s=r+e,yield t.slice(r,s),r=s},QI=async function*(t,e){for await(const n of eO(t))yield*XI(n,e)},eO=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:r}=await e.read();if(n)break;yield r}}finally{await e.cancel()}},sp=(t,e,n,r)=>{const s=QI(t,e);let i=0,o,a=c=>{o||(o=!0,r&&r(c))};return new ReadableStream({async pull(c){try{const{done:l,value:u}=await s.next();if(l){a(),c.close();return}let h=u.byteLength;if(n){let f=i+=h;n(f)}c.enqueue(new Uint8Array(u))}catch(l){throw a(l),l}},cancel(c){return a(c),s.return()}},{highWaterMark:2})},cn=`\r
`,ip=t=>String(t).replace(/\r\n|\r|\n/g,cn),op=t=>String(t).replace(/[\r\n"]/g,e=>e==="\r"?"%0D":e===`
`?"%0A":"%22"),ys=(t,e)=>{let n=0;for(let r=0;r<t.length;r++){const s=t.charCodeAt(r);e&&(s===13||s===10)?(s===13&&t.charCodeAt(r+1)===10&&r++,n+=2):s<128?n++:s<2048?n+=2:s>=55296&&s<=56319&&t.charCodeAt(r+1)>=56320&&t.charCodeAt(r+1)<=57343?(n+=4,r++):n+=3}return n};class go extends TypeError{constructor(e,n){super(e),this.name="FormDataError",this.reason=n}}function tO(t,e,n,r,s){if(!k.isFunction(e))throw new go("Blob is not supported","blob");if(!k.isString(s)||!/^[A-Za-z0-9'()+_,./:=? -]{1,70}$/.test(s)||/ $/.test(s))throw new go("Invalid multipart boundary","boundary");const i="--"+s+"--"+cn;let o=i.length;const a=[],c=u=>{if(o+u>n)throw r()};c(0);for(const[u,h]of t){const f=k.isString(h),p=f?ys(h,!0):h.size;if(!Number.isFinite(p)||p<0)throw new go("Unsupported FormData part size","part");c(p+ys(u,!0)+(!f&&h.name?ys(h.name,!1):0)+(!f&&h.type?ys(h.type,!1):0));let g="--"+s+cn+'Content-Disposition: form-data; name="'+op(ip(u))+'"';f||(g+='; filename="'+op(k.isString(h.name)?h.name:"blob")+'"'+cn+"Content-Type: "+String(h.type||"application/octet-stream").replace(/[\r\n]/g,"")),g+=cn+cn;const y=ys(g,!1)+p+cn.length;c(y),o+=y,a.push({header:g,value:h,isString:f})}const l=[];for(const u of a)l.push(u.header,u.isString?ip(u.value):u.value,cn);return l.push(i),new e(l,{type:"multipart/form-data; boundary="+s})}function nO(t,e,n,r,s){if(!k.isFunction(e))throw new I("Blob is not supported",I.ERR_NOT_SUPPORT);if(s===void 0)if(k.isFunction(Oe.generateString))s="axios-"+Oe.generateString(36,"0123456789abcdef");else{const i=k.global.crypto;if(!i||!k.isFunction(i.getRandomValues))throw new I("Random byte generation is not supported",I.ERR_NOT_SUPPORT);const o=new Uint8Array(18);i.getRandomValues(o),s="axios-"+Array.from(o,a=>("0"+a.toString(16)).slice(-2)).join("")}try{return tO(t,e,n,r,s)}catch(i){if(i instanceof go){const o=i.reason==="boundary"?I.ERR_BAD_OPTION_VALUE:I.ERR_BAD_REQUEST;throw new I(i.message,o)}throw i}}const ap=t=>t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102,Pv=(t,e,n)=>e+2<n&&ap(t.charCodeAt(e+1))&&ap(t.charCodeAt(e+2)),cp=t=>t<=57?t-48:(t&223)-55,rO=t=>t>=65&&t<=90||t>=97&&t<=122||t>=48&&t<=57||t===43||t===47||t===45||t===95,sO=t=>t===9||t===10||t===12||t===13||t===32,iO=t=>{const e=Math.floor(t/4),n=t%4;return e*3+(n===2?1:n===3?2:0)},oO=t=>{const e=t.length;let n=0;return e>0&&t.charCodeAt(e-1)===61&&(n++,e>1&&t.charCodeAt(e-2)===61&&n++),Math.floor((e-n)*3/4)},aO=t=>{const e=t.length;let n=0,r=0,s=!1;for(let i=0;i<e;i++){let o=t.charCodeAt(i);if(o===37&&Pv(t,i,e)&&(o=cp(t.charCodeAt(i+1))*16+cp(t.charCodeAt(i+2)),i+=2),!sO(o)){if(o===61){r++;continue}if(!rO(o)||r>0){s=!0;continue}n++}}return s||r>2||r>0&&(n+r)%4!==0||n%4===1?oO(t):iO(n)},cO=(t,e,n)=>{if(!t||typeof t!="string"||!/^data:/i.test(t))return 0;const r=t.indexOf(",");if(r<0)return 0;const s=t.slice(5,r),i=t.slice(r+1);if(n.test(s))return e(i);let a=0;for(let c=0,l=i.length;c<l;c++){const u=i.charCodeAt(c);if(u===37&&Pv(i,c,l))a+=1,c+=2;else if(u<128)a+=1;else if(u<2048)a+=2;else if(u>=55296&&u<=56319&&c+1<l){const h=i.charCodeAt(c+1);h>=56320&&h<=57343?(a+=4,c++):a+=3}else a+=3}return a};function lO(t){const e=typeof t=="string"?t.indexOf("#"):-1;return cO(e===-1?t:t.slice(0,e),aO,/; *base64[\t\n\f\r ]*$/i)}const ed="1.21.0",lp=64*1024,up={cache:"default",redirect:"follow",referrer:"about:client",referrerPolicy:"",mode:"cors",integrity:"",keepalive:!1,priority:"auto",window:null},{isFunction:Ji}=k,uO=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16))),dp=t=>{if(!k.isString(t))return t;try{return decodeURIComponent(t)}catch{return t}},Yi=(t,...e)=>{try{return!!t(...e)}catch{return!1}},dO=t=>{const e=t.indexOf("://");let n=t;return e!==-1&&(n=n.slice(e+3)),n.includes("@")||n.includes(":")},hO=t=>{const e=k.global!==void 0&&k.global!==null?k.global:globalThis,{ReadableStream:n,TextEncoder:r}=e;t=k.merge.call({skipUndefined:!0},{Request:e.Request,Response:e.Response,Blob:e.Blob},t);const s=k.hasOwnProp(t,"fetch")?t.fetch:void 0,{Request:i,Response:o,Blob:a}=t,c=s?Ji(s):typeof fetch=="function",l=Ji(i),u=Ji(o);if(!c)return!1;const h=c&&Ji(n),f=c&&(typeof r=="function"?(x=>w=>x.encode(w))(new r):async x=>new Uint8Array(await new i(x).arrayBuffer())),p=l&&h&&Yi(()=>{let x=!1;const w=new i(Oe.origin,{body:new n,method:"POST",get duplex(){return x=!0,"half"}}),E=w.headers.has("Content-Type");return w.body!=null&&w.body.cancel(),x&&!E}),g=u&&h&&Yi(()=>k.isReadableStream(new o("").body)),y=Object.assign(Object.create(null),up);l&&!Yi(()=>new i(Oe.origin,y))&&(delete y.cache,Yi(()=>new i(Oe.origin,y))||(y.cache=up.cache));const v={stream:g&&(x=>x.body)};c&&["text","arrayBuffer","blob","formData","stream"].forEach(x=>{!v[x]&&(v[x]=(w,E)=>{let _=w&&w[x];if(_)return _.call(w);throw new I(`Response type '${x}' is not supported`,I.ERR_NOT_SUPPORT,E)})});const S=async x=>{if(x==null)return 0;if(k.isBlob(x))return x.size;if(k.isArrayBufferView(x)||k.isArrayBuffer(x))return x.byteLength;if(k.isURLSearchParams(x)&&(x=x+""),k.isString(x))return(await f(x)).byteLength},b=async(x,w)=>{const E=k.toFiniteNumber(x.getContentLength());return E??S(w)};return async x=>{let{url:w,method:E,data:_,signal:C,cancelToken:R,timeout:O,onDownloadProgress:$,onUploadProgress:B,responseType:q,headers:H,withCredentials:ee="same-origin",fetchOptions:oe,maxContentLength:te,maxBodyLength:he,maxRedirects:le}=Av(x);const U=k.isNumber(te)&&te>-1,P=k.isNumber(he)&&he>-1,D=J=>k.hasOwnProp(x,J)?x[J]:void 0;let de=s||fetch;q=q?(q+"").toLowerCase():"text";let we=YI([C,R&&R.toAbortSignal()],O),M=null;const Ee=we&&we.unsubscribe&&(()=>{we.unsubscribe()});let _e,Te=null,ke=null;const Je=()=>new I("Request body larger than maxBodyLength limit",I.ERR_BAD_REQUEST,x,M);try{let J;const Ce=D("auth");if(Ce){const se=k.getSafeProp(Ce,"username")||"",Ve=k.getSafeProp(Ce,"password")||"";J={username:se,password:Ve}}let Ke;if(dO(w)){if(Ke=new URL(w,Oe.origin),!J&&(Ke.username||Ke.password)){const se=dp(Ke.username),Ve=dp(Ke.password);J={username:se,password:Ve}}(Ke.username||Ke.password)&&(Ke.username="",Ke.password="",w=Ke.href)}if(J&&(H.delete("authorization"),H.set("Authorization","Basic "+btoa(uO((J.username||"")+":"+(J.password||""))))),U&&Ke&&Ke.protocol==="data:"&&lO(Ke.href)>te)throw new I("maxContentLength size of "+te+" exceeded",I.ERR_BAD_RESPONSE,x,M);const Di=k.isSpecCompliantForm(_)&&je.from(D("headers")).getContentType();let Mi;if(k.isString(Di)&&/^multipart\/form-data(?:\s*;|$)/i.test(Di.trim())){const se=je.parseParameters(Di);k.hasOwnProp(se,"boundary")&&(Mi=se.boundary)}if(k.isSpecCompliantForm(_)&&E!=="get"&&E!=="head"&&(P||B&&p||Mi!==void 0)&&(_=nO(_,a,P?he:1/0,Je,Mi),H.setContentType(Mi===void 0?_.type:Di),_e=_.size),P&&E!=="get"&&E!=="head"){const se=await S(_);if(typeof se=="number"&&isFinite(se)&&(_e=se,se>he))throw Je()}const Fi=P&&(k.isReadableStream(_)||k.isStream(_)),xd=(se,Ve,ur)=>sp(se,lp,Nn=>{if(P&&Nn>he)throw Te=Je();Ve&&Ve(Nn)},ur);if(p&&E!=="get"&&E!=="head"&&(B||Fi)){if(_e=_e??await b(H,_),_e!==0||Fi){let se=new i(w,{method:"POST",body:_,duplex:"half"}),Ve;if(k.isFormData(_)&&(Ve=se.headers.get("content-type"))&&H.setContentType(Ve),se.body){const[ur,Nn]=B&&Xf(_e,Bo(Qf(B)))||[];_=xd(se.body,ur,Nn)}}}else if(Fi&&!l&&h&&E!=="get"&&E!=="head")_=xd(_);else if(Fi&&l&&!p&&E!=="get"&&E!=="head")throw new I("Stream request bodies are not supported by the current fetch implementation",I.ERR_NOT_SUPPORT,x,M);k.isString(ee)||(ee=ee?"include":"omit");const cb=l&&"credentials"in i.prototype;if(k.isFormData(_)){const se=H.getContentType();se&&/^multipart\/form-data/i.test(se)&&!/boundary=/i.test(se)&&H.delete("content-type")}H.set("User-Agent","axios/"+ed,!1);const ut=oe==null?oe:Object.assign(Object.create(null),oe);ut&&(delete ut.body,delete ut.headers,delete ut.method,delete ut.signal,delete ut.duplex,delete ut.credentials);const Dt=Object.assign(Object.create(null),ut,{signal:we,method:E.toUpperCase(),headers:dv(H.normalize()),body:_,duplex:"half",credentials:cb?ee:void 0});l&&(k.forEach(y,(se,Ve)=>{Dt[Ve]===void 0&&(Dt[Ve]=se)}),Dt.signal===void 0&&(Dt.signal=null),Dt.body===void 0&&(Dt.body=null)),le===0&&(Dt.redirect="manual",ut&&(ut.redirect="manual")),M=l&&new i(w,Dt);let Mt=await(l?de(M,ut):de(w,Dt));const wd=je.from(Mt.headers);if(U){const se=k.toFiniteNumber(wd.getContentLength());if(se!=null&&se>te)throw new I("maxContentLength size of "+te+" exceeded",I.ERR_BAD_RESPONSE,x,M)}const $a=g&&(q==="stream"||q==="response");if(g&&Mt.body&&($||U||$a&&Ee)){const se={};["status","statusText","headers"].forEach(rs=>{se[rs]=Mt[rs]});const Ve=k.toFiniteNumber(wd.getContentLength()),[ur,Nn]=$&&Xf(Ve,Bo(Qf($),!0))||[];let kd=0;const lb=rs=>{if(U&&(kd=rs,kd>te))throw ke=new I("maxContentLength size of "+te+" exceeded",I.ERR_BAD_RESPONSE,x,M);ur&&ur(rs)};Mt=new o(sp(Mt.body,lp,lb,()=>{Nn&&Nn(),Ee&&Ee()}),se)}q=q||"text";let Ft=await v[k.findKey(v,q)||"text"](Mt,x);if(U&&!g&&!$a){let se;if(Ft!=null&&(typeof Ft.byteLength=="number"?se=Ft.byteLength:typeof Ft.size=="number"?se=Ft.size:typeof Ft=="string"&&(se=typeof r=="function"?new r().encode(Ft).byteLength:Ft.length)),typeof se=="number"&&se>te)throw new I("maxContentLength size of "+te+" exceeded",I.ERR_BAD_RESPONSE,x,M)}return!$a&&Ee&&Ee(),await new Promise((se,Ve)=>{Ev(se,Ve,{data:Ft,headers:je.from(Mt.headers),status:Mt.status,statusText:Mt.statusText,config:x,request:M})})}catch(J){if(Ee&&Ee(),we&&we.aborted&&we.reason instanceof I){const Ce=we.reason;throw Ce.config=x,M&&(Ce.request=M),J!==Ce&&Object.defineProperty(Ce,"cause",{__proto__:null,value:J,writable:!0,enumerable:!1,configurable:!0}),Ce}if(Te)throw M&&!Te.request&&(Te.request=M),Te;if(ke)throw ke;if(J instanceof I)throw M&&!J.request&&(J.request=M),J;if(J&&J.name==="TypeError"&&/Load failed|fetch/i.test(J.message)){const Ce=new I("Network Error",I.ERR_NETWORK,x,M,J&&J.response);throw Object.defineProperty(Ce,"cause",{__proto__:null,value:J.cause||J,writable:!0,enumerable:!1,configurable:!0}),Ce}throw I.from(J,J&&J.code,x,M,J&&J.response)}}},fO=new Map,Iv=t=>{const e=Object.create(null),n=t&&k.hasOwnProp(t,"env")&&t.env;["fetch","Request","Response","Blob"].forEach(p=>{n&&k.hasOwnProp(n,p)&&(e[p]=n[p])});const{fetch:r,Request:s,Response:i,Blob:o}=e,a=[s,i,r,o];let c=a.length,l=c,u,h,f=fO;for(;l--;)u=a[l],h=f.get(u),h===void 0&&f.set(u,h=l?new Map:hO(e)),f=h;return h};Iv();const td={http:mI,xhr:JI,fetch:{get:Iv}};k.forEach(td,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{__proto__:null,value:e})}catch{}Object.defineProperty(t,"adapterName",{__proto__:null,value:e})}});const hp=t=>`- ${t}`,pO=t=>k.isFunction(t)||t===null||t===!1;function mO(t,e){t=k.isArray(t)?t:[t];const{length:n}=t;let r,s;const i={};for(let o=0;o<n;o++){r=t[o];let a;if(s=r,!pO(r)&&(s=td[(a=String(r)).toLowerCase()],s===void 0))throw new I(`Unknown adapter '${a}'`);if(s&&(k.isFunction(s)||(s=s.get(e))))break;i[a||"#"+o]=s}if(!s){const o=Object.entries(i).map(([c,l])=>`adapter ${c} `+(l===!1?"is not supported by the environment":"is not available in the build"));let a=n?o.length>1?`since :
`+o.map(hp).join(`
`):" "+hp(o[0]):"as no adapter specified";throw new I("There is no suitable adapter to dispatch the request "+a,I.ERR_NOT_SUPPORT)}return s}const Ov={getAdapter:mO,adapters:td};function Pc(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Ri(null,t)}function fp(t){return Math.max(0,Date.now()-t)}function Ic(t){const e=k.toSafeFlatObject(t);Pc(e),e.headers=je.from(k.getSafeProp(e,"headers")),e.data=Cc.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1);const n=Ov.getAdapter(e.adapter||Ci.adapter,e),r=Date.now();return n(e).then(function(i){Pc(e),i.duration=fp(r),e.response=i;try{i.data=Cc.call(e,e.transformResponse,i)}finally{delete e.response}return i.headers=je.from(i.headers),i},function(i){if(!Sv(i)&&(Pc(e),i&&i.response)){i.response.duration=fp(r),e.response=i.response;try{i.response.data=Cc.call(e,e.transformResponse,i.response)}finally{delete e.response}i.response.headers=je.from(i.response.headers)}return Promise.reject(i)})}const Ia={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Ia[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const pp={};Ia.transitional=function(e,n,r){function s(i,o){return"[Axios v"+ed+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(e===!1)throw new I(s(o," has been removed"+(n?" in "+n:"")),I.ERR_DEPRECATED);return n&&!pp[o]&&(pp[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};Ia.spelling=function(e){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};function gO(t,e,n){if(typeof t!="object"||t===null)throw new I("options must be an object",I.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=Object.prototype.hasOwnProperty.call(e,i)?e[i]:void 0;if(o){const a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new I("option "+i+" must be "+c,I.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new I("Unknown option "+i,I.ERR_BAD_OPTION)}}const yo={assertOptions:gO,validators:Ia},De=yo.validators,Oc=t=>{if(t==null||k.isPlainObject(t)||t instanceof je)return!0;try{return k.isObject(t)&&k.getSafeProp(t,Symbol.toStringTag)==="AxiosHeaders"&&["toJSON","set","get","has","delete","clear","normalize","concat","toString",Symbol.iterator].every(e=>k.isFunction(k.getSafeProp(t,e)))}catch{return!1}};let Zn=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Zf,response:new Zf}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error)try{let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const i=s.stack;let o="";if(typeof i=="string"){const a=i.indexOf(`
`);o=a===-1?"":i.slice(a+1)}if(!r.stack)r.stack=o;else if(o){const a=o.indexOf(`
`),c=a===-1?-1:o.indexOf(`
`,a+1),l=c===-1?o:o.slice(c+1),u=String(r.stack),h=fI(r,u),f=h===-1?u:u.slice(0,h),p=h===-1?"":u.slice(h);f.endsWith(l)||(r.stack=f+`
`+o+p)}}catch{}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=nr(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&yo.assertOptions(r,{silentJSONParsing:De.transitional(De.boolean),forcedJSONParsing:De.transitional(De.boolean),clarifyTimeoutError:De.transitional(De.boolean),legacyInterceptorReqResOrdering:De.transitional(De.boolean),advertiseZstdAcceptEncoding:De.transitional(De.boolean),validateStatusUndefinedResolves:De.transitional(De.boolean),encodeBasicAuthUsername:De.transitional(De.boolean)},!1),s!=null&&(k.isFunction(s)?n.paramsSerializer={serialize:s}:yo.assertOptions(s,{encode:De.function,serialize:De.function},!0)),n.allowAbsoluteUrls!==void 0||(k.hasOwnProp(this.defaults,"allowAbsoluteUrls")&&this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),yo.assertOptions(n,{baseUrl:De.spelling("baseURL"),withXsrfToken:De.spelling("withXSRFToken")},!0),n.method=(k.getSafeProp(n,"method")||k.getSafeProp(this.defaults,"method")||"get").toLowerCase();const o=k.getSafeProp(i,"common"),a=k.getSafeProp(i,n.method),c=i&&k.merge(Oc(o)?o:void 0,Oc(a)?a:void 0);i&&k.forEach(kv.concat("common"),v=>{Oc(k.getSafeProp(i,v))&&delete i[v]}),n.headers=je.concat(c,i);const l=[];let u=!0;this.interceptors.request.forEach(function(S){if(typeof S.runWhen=="function"&&S.runWhen(n)===!1)return;u=u&&S.synchronous;const b=n.transitional||Xu;b&&b.legacyInterceptorReqResOrdering?l.unshift(S.fulfilled,S.rejected):l.push(S.fulfilled,S.rejected)});const h=[];this.interceptors.response.forEach(function(S){h.push(S.fulfilled,S.rejected)});let f,p=0,g;if(!u){const v=[Ic.bind(this),void 0];for(v.unshift(...l),v.push(...h),g=v.length,f=Promise.resolve(n);p<g;)f=f.then(v[p++],v[p++]);return f}g=l.length;let y=n;for(;p<g;){const v=l[p++],S=l[p++];try{y=v?v(y):y}catch(b){if(!S){f=Promise.reject(b);break}try{const x=S.call(this,b);k.isThenable(x)&&(f=Promise.resolve(x).then(()=>Ic.call(this,y)))}catch(x){f=Promise.reject(x)}break}}if(!f)try{f=Ic.call(this,y)}catch(v){f=Promise.reject(v)}for(p=0,g=h.length;p<g;)f=f.then(h[p++],h[p++]);return f}getUri(e){e=nr(this.defaults,e);const n=Cv(e.baseURL,e.url,e.allowAbsoluteUrls,e);return gv(n,e.params,e.paramsSerializer)}};k.forEach(["delete","get","head","options"],function(e){Zn.prototype[e]=async function(n,r){return this.request(nr(r||{},{method:e,url:n,data:r&&k.hasOwnProp(r,"data")?r.data:void 0}))}});k.forEach(["post","put","patch","query"],function(e){function n(r){return async function(i,o,a){return this.request(nr(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Zn.prototype[e]=n(),e!=="query"&&(Zn.prototype[e+"Form"]=n(!0))});let yO=class Nv{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,a){r.reason||(r.reason=new Ri(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=r=>{e.abort(r)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new Nv(function(s){e=s}),cancel:e}}};function vO(t){return function(n){return t.apply(null,n)}}function bO(t){return k.isObject(t)&&t.isAxiosError===!0}const vo={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,ContentTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,UnprocessableContent:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(vo).forEach(([t,e])=>{vo[e]===void 0&&(vo[e]=t)});function Lv(t){const e=new Zn(t),n=rv(Zn.prototype.request,e);return k.extend(n,Zn.prototype,e,{allOwnKeys:!0}),k.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return Lv(nr(t,s))},n}const be=Lv(Ci);be.Axios=Zn;be.CanceledError=Ri;be.CancelToken=yO;be.isCancel=Sv;be.VERSION=ed;be.toFormData=Pa;be.AxiosError=I;be.Cancel=be.CanceledError;be.all=function(e){return Promise.all(e)};be.spread=vO;be.isAxiosError=bO;be.mergeConfig=nr;be.AxiosHeaders=je;be.formToJSON=t=>wv(k.isHTMLForm(t)?new FormData(t):t);be.getAdapter=Ov.getAdapter;be.HttpStatusCode=vo;be.default=be;const{Axios:vM,AxiosError:bM,CanceledError:xM,isCancel:wM,CancelToken:kM,VERSION:SM,all:EM,Cancel:_M,isAxiosError:TM,spread:CM,toFormData:RM,AxiosHeaders:AM,HttpStatusCode:PM,formToJSON:IM,getAdapter:OM,mergeConfig:NM,create:LM}=be;function Ho(t){const e=document.cookie.split("; ").find(n=>n.startsWith(`${encodeURIComponent(t)}=`));if(e)return decodeURIComponent(e.slice(e.indexOf("=")+1))}function mp(t,e,n={}){const{maxAge:r,path:s="/",secure:i=!1,sameSite:o="strict"}=n;let a=`${encodeURIComponent(t)}=${encodeURIComponent(e)}`;a+=`; path=${s}`,a+=`; samesite=${o}`,typeof r=="number"&&(a+=`; max-age=${Math.floor(r)}`),i&&(a+="; Secure"),document.cookie=a}function gp(t,e="/"){document.cookie=`${encodeURIComponent(t)}=; path=${e}; max-age=0`}function jv(){gp("X-Token"),gp("X-Refresh-Token"),Hr.getState().logout()}function gn(){jv();const t=ev();window.location.pathname!==t&&(window.location.href=t)}const xO=7,Dv=200,Mv=[5,201,202,204],wO=["/api/company/verifyToken","/api/company/refreshToken"],kO={baseURL:void 0},st=be.create(kO);let Ar=!1,Bl=[];function Fv(t){Bl.push(t)}function zo(t){Bl.forEach(e=>e(t)),Bl=[]}async function $v(){var t,e;try{const n=st.defaults.headers.common["X-Refresh-Token"]||Ho("X-Refresh-Token");if(!n)return null;const r=await be.post(`${vf?"/apis":""}/api/company/refreshToken`,{refreshToken:n},{headers:{"Content-type":"application/json;charset-UTF-8","X-Refresh-Token":n}});if(((t=r.data)==null?void 0:t.code)===0&&((e=r.data)!=null&&e.data)){const{token:s,refresh:i}=r.data.data;st.defaults.headers.common.Token=s,st.defaults.headers.common["X-Refresh-Token"]=i;const o={sameSite:"strict",maxAge:86400,secure:!vf};return mp("X-Token",s,o),mp("X-Refresh-Token",i,o),s}return null}catch{return null}}function SO(t){if(typeof FormData<"u"&&t.data instanceof FormData?(t.headers.delete("Content-Type"),t.headers.delete("Content-type")):t.headers["Content-type"]="application/json;charset-UTF-8",!t.headers.get("Token")){const n=st.defaults.headers.common.Token||Ho("X-Token");n&&t.headers.set("Token",n)}if(!t.headers.get("X-Refresh-Token")){const n=st.defaults.headers.common["X-Refresh-Token"]||Ho("X-Refresh-Token");n&&t.headers.set("X-Refresh-Token",n)}return t}st.interceptors.request.use(SO,t=>Promise.reject(t));const Vv=t=>wO.some(e=>t===e||t.endsWith(e)),Uv=(t,e)=>t===xO&&["session","login","another","terminated","kicked"].some(n=>e.includes(n)),EO=async t=>{var s;const e=t.data,n=Number(e==null?void 0:e.code),r=t.config;if(n>0){const i=(r==null?void 0:r.url)||"";if(!Vv(i)){const o=((s=e==null?void 0:e.message)==null?void 0:s.toLowerCase())||"";if(Uv(n,o))return gn(),new Promise(()=>{});if(n===Dv){const a=r;if(a._retried)return gn(),new Promise(()=>{});if(!Ar){Ar=!0;const c=await $v();return Ar=!1,c?(zo(c),a._retried=!0,a.headers.Token=c,st(a)):(zo(null),gn(),new Promise(()=>{}))}return new Promise((c,l)=>{Fv(u=>{if(!u){l(e);return}a._retried=!0,a.headers.Token=u,c(st(a))})})}if(Mv.includes(n))return gn(),new Promise(()=>{})}throw e}return e},_O=async t=>{var o,a;const e=t,n=(o=e.response)==null?void 0:o.data,r=Number(n==null?void 0:n.code),s=e.config,i=(s==null?void 0:s.url)||"";if(n&&!Vv(i)){const c=((a=n==null?void 0:n.message)==null?void 0:a.toLowerCase())||"";if(Uv(r,c))return gn(),new Promise(()=>{});if(r===Dv&&s){const l=s;if(l._retried)return gn(),new Promise(()=>{});if(!Ar){Ar=!0;const u=await $v();return Ar=!1,u?(zo(u),l._retried=!0,l.headers.Token=u,st(l)):(zo(null),gn(),new Promise(()=>{}))}return new Promise((u,h)=>{Fv(f=>{if(!f){h(t);return}l._retried=!0,l.headers.Token=f,u(st(l))})})}if(Mv.includes(r))return gn(),new Promise(()=>{})}return Promise.reject(t)};st.interceptors.response.use(EO,_O);const TO=()=>{};var yp={};/**
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
 */const Bv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},CO=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Hv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(f=64)),r.push(n[u],n[h],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Bv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):CO(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new RO;const f=i<<2|a>>4;if(r.push(f),l!==64){const p=a<<4&240|l>>2;if(r.push(p),h!==64){const g=l<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class RO extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const AO=function(t){const e=Bv(t);return Hv.encodeByteArray(e,!0)},zv=function(t){return AO(t).replace(/\./g,"")},Wv=function(t){try{return Hv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function PO(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const IO=()=>PO().__FIREBASE_DEFAULTS__,OO=()=>{if(typeof process>"u"||typeof yp>"u")return;const t=yp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},NO=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Wv(t[1]);return e&&JSON.parse(e)},nd=()=>{try{return TO()||IO()||OO()||NO()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},LO=t=>{var e,n;return(n=(e=nd())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},qv=()=>{var t;return(t=nd())==null?void 0:t.config},Kv=t=>{var e;return(e=nd())==null?void 0:e[`_${t}`]};/**
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
 */class Gv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function We(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jO(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(We())}function DO(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function MO(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function FO(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $O(){const t=We();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function VO(){try{return typeof indexedDB=="object"}catch{return!1}}function UO(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const BO="FirebaseError";class In extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=BO,Object.setPrototypeOf(this,In.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ai.prototype.create)}}class Ai{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?HO(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new In(s,a,r)}}function HO(t,e){try{let n=0,r="";for(;n<t.length;){const s=t.indexOf("{$",n);if(s===-1){r+=t.substring(n);break}const i=t.indexOf("}",s+2);if(i===-1){r+=t.substring(n);break}const o=t.substring(s+2,i),a=e[o];r+=t.substring(n,s)+(a!=null?String(a):`<${o}?>`),n=i+1}return r}catch{return t}}function zO(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Vr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(vp(i)&&vp(o)){if(!Vr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function vp(t){return t!==null&&typeof t=="object"}/**
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
 */function ns(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function WO(t,e){const n=new qO(t,e);return n.subscribe.bind(n)}class qO{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");KO(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Nc),s.error===void 0&&(s.error=Nc),s.complete===void 0&&(s.complete=Nc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function KO(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Nc(){}/**
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
 */function lr(t){return t&&t._delegate?t._delegate:t}/**
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
 */function rd(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function GO(t){return(await fetch(t,{credentials:"include"})).ok}class Ur{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Vn="[DEFAULT]";/**
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
 */class ZO{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Gv;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(YO(e))try{this.getOrInitializeService({instanceIdentifier:Vn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Vn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vn){return this.instances.has(e)}getOptions(e=Vn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:JO(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vn){return this.component?this.component.multipleInstances?e:Vn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function JO(t){return t===Vn?void 0:t}function YO(t){return t.instantiationMode==="EAGER"}/**
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
 */class XO{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ZO(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const QO={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},eN=fe.INFO,tN={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},nN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=tN[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zv{constructor(e){this.name=e,this._logLevel=eN,this._logHandler=nN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?QO[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const rN=(t,e)=>e.some(n=>t instanceof n);let bp,xp;function sN(){return bp||(bp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function iN(){return xp||(xp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jv=new WeakMap,Hl=new WeakMap,Yv=new WeakMap,Lc=new WeakMap,sd=new WeakMap;function oN(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(wn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Jv.set(n,t)}).catch(()=>{}),sd.set(e,t),e}function aN(t){if(Hl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Hl.set(t,e)}let zl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Hl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Yv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return wn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function cN(t){zl=t(zl)}function lN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(jc(this),e,...n);return Yv.set(r,e.sort?e.sort():[e]),wn(r)}:iN().includes(t)?function(...e){return t.apply(jc(this),e),wn(Jv.get(this))}:function(...e){return wn(t.apply(jc(this),e))}}function uN(t){return typeof t=="function"?lN(t):(t instanceof IDBTransaction&&aN(t),rN(t,sN())?new Proxy(t,zl):t)}function wn(t){if(t instanceof IDBRequest)return oN(t);if(Lc.has(t))return Lc.get(t);const e=uN(t);return e!==t&&(Lc.set(t,e),sd.set(e,t)),e}const jc=t=>sd.get(t);function dN(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=wn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(wn(o.result),c.oldVersion,c.newVersion,wn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const hN=["get","getKey","getAll","getAllKeys","count"],fN=["put","add","delete","clear"],Dc=new Map;function wp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Dc.get(e))return Dc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=fN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||hN.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Dc.set(e,i),i}cN(t=>({...t,get:(e,n,r)=>wp(e,n)||t.get(e,n,r),has:(e,n)=>!!wp(e,n)||t.has(e,n)}));/**
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
 */class pN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(mN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function mN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wl="@firebase/app",kp="0.16.2";/**
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
 */const Xt=new Zv("@firebase/app"),gN="@firebase/app-compat",yN="@firebase/analytics-compat",vN="@firebase/analytics",bN="@firebase/app-check-compat",xN="@firebase/app-check",wN="@firebase/auth",kN="@firebase/auth-compat",SN="@firebase/database",EN="@firebase/data-connect",_N="@firebase/database-compat",TN="@firebase/functions",CN="@firebase/functions-compat",RN="@firebase/installations",AN="@firebase/installations-compat",PN="@firebase/messaging",IN="@firebase/messaging-compat",ON="@firebase/performance",NN="@firebase/performance-compat",LN="@firebase/remote-config",jN="@firebase/remote-config-compat",DN="@firebase/storage",MN="@firebase/storage-compat",FN="@firebase/firestore",$N="@firebase/ai",VN="@firebase/firestore-compat",UN="firebase",BN="12.19.0";/**
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
 */const ql="[DEFAULT]",HN={[Wl]:"fire-core",[gN]:"fire-core-compat",[vN]:"fire-analytics",[yN]:"fire-analytics-compat",[xN]:"fire-app-check",[bN]:"fire-app-check-compat",[wN]:"fire-auth",[kN]:"fire-auth-compat",[SN]:"fire-rtdb",[EN]:"fire-data-connect",[_N]:"fire-rtdb-compat",[TN]:"fire-fn",[CN]:"fire-fn-compat",[RN]:"fire-iid",[AN]:"fire-iid-compat",[PN]:"fire-fcm",[IN]:"fire-fcm-compat",[ON]:"fire-perf",[NN]:"fire-perf-compat",[LN]:"fire-rc",[jN]:"fire-rc-compat",[DN]:"fire-gcs",[MN]:"fire-gcs-compat",[FN]:"fire-fst",[VN]:"fire-fst-compat",[$N]:"fire-vertex","fire-js":"fire-js",[UN]:"fire-js-all"};/**
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
 */const Wo=new Map,zN=new Map,Kl=new Map;function Sp(t,e){try{t.container.addComponent(e)}catch(n){Xt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Zs(t){const e=t.name;if(Kl.has(e))return Xt.debug(`There were multiple attempts to register component ${e}.`),!1;Kl.set(e,t);for(const n of Wo.values())Sp(n,t);for(const n of zN.values())Sp(n,t);return!0}function Xv(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ct(t){return t==null?!1:t.settings!==void 0}/**
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
 */const WN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ht=new Ai("app","Firebase",WN);/**
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
 */class qN{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ur("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ht.create("app-deleted",{appName:this._name})}}/**
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
 */const Pi=BN;function Qv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:ql,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Ht.create("bad-app-name",{appName:String(s)});if(n||(n=qv()),!n)throw Ht.create("no-options");const i=Wo.get(s);if(i)if(Vr(n,i.options)){if(Vr(r,i.config))return i;throw Ht.create("duplicate-app",{appName:s,mismatchedParam:"config",oldValue:JSON.stringify(i.config),newValue:JSON.stringify(r)})}else throw Ht.create("duplicate-app",{appName:s,mismatchedParam:"options",oldValue:JSON.stringify(i.options),newValue:JSON.stringify(n)});const o=new XO(s);for(const c of Kl.values())o.addComponent(c);const a=new qN(n,r,o);return Wo.set(s,a),a}function KN(t=ql){const e=Wo.get(t);if(!e&&t===ql&&qv())return Qv();if(!e)throw Ht.create("no-app",{appName:t});return e}function Pr(t,e,n){let r=HN[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xt.warn(o.join(" "));return}Zs(new Ur(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const GN="firebase-heartbeat-database",ZN=1,Js="firebase-heartbeat-store";let Mc=null;function e0(){return Mc||(Mc=dN(GN,ZN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Js)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ht.create("idb-open",{originalErrorMessage:t.message})})),Mc}async function JN(t){try{const n=(await e0()).transaction(Js),r=await n.objectStore(Js).get(t0(t));return await n.done,r}catch(e){if(e instanceof In)Xt.warn(e.message);else{const n=Ht.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Xt.warn(n.message)}}}async function Ep(t,e){try{const r=(await e0()).transaction(Js,"readwrite");await r.objectStore(Js).put(e,t0(t)),await r.done}catch(n){if(n instanceof In)Xt.warn(n.message);else{const r=Ht.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Xt.warn(r.message)}}}function t0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const YN=1024,XN=30;class QN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new tL(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=_p();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>XN){const o=nL(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Xt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=_p(),{heartbeatsToSend:r,unsentEntries:s}=eL(this._heartbeatsCache.heartbeats),i=zv(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Xt.warn(n),""}}}function _p(){return new Date().toISOString().substring(0,10)}function eL(t,e=YN){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Tp(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Tp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class tL{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return VO()?UO().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await JN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ep(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ep(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Tp(t){return zv(JSON.stringify({version:2,heartbeats:t})).length}function nL(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function rL(t){Zs(new Ur("platform-logger",e=>new pN(e),"PRIVATE")),Zs(new Ur("heartbeat",e=>new QN(e),"PRIVATE")),Pr(Wl,kp,t),Pr(Wl,kp,"esm2020"),Pr("fire-js","")}/**
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
 */rL("");var sL="firebase",iL="12.19.0";/**
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
 */Pr(sL,iL,"app");function n0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const oL=n0,r0=new Ai("auth","Firebase",n0());/**
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
 */const qo=new Zv("@firebase/auth");function bo(t,...e){qo.logLevel<=fe.WARN&&qo.warn(`Auth (${Pi}): ${t}`,...e)}function xo(t,...e){qo.logLevel<=fe.ERROR&&qo.error(`Auth (${Pi}): ${t}`,...e)}/**
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
 */function Qt(t,...e){throw od(t,...e)}function Ye(t,...e){return od(t,...e)}function id(t,e,n){const r={...oL(),[e]:n};return new Ai("auth","Firebase",r).create(e,{appName:t.name})}function kn(t){return id(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function od(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return r0.create(t,...e)}function j(t,e,...n){if(!t)throw od(e,...n)}function zt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xo(e),new Error(e)}function en(t,e){t||zt(e)}/**
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
 */function Gl(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function s0(){return Cp()==="http:"||Cp()==="https:"}function Cp(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function aL(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(s0()||MO()||"connection"in navigator)?navigator.onLine:!0}function cL(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ii{constructor(e,n){this.shortDelay=e,this.longDelay=n,en(n>e,"Short delay should be less than long delay!"),this.isMobile=jO()||FO()}get(){return aL()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ad(t,e){en(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class i0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const lL={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const uL=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],dL=new Ii(3e4,6e4);function jt(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Et(t,e,n,r,s={}){return o0(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ns({...o,key:t.config.apiKey}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const l={method:e,headers:c,...i};return DO()||(l.referrerPolicy="strict-origin-when-cross-origin"),t.emulatorConfig&&rd(t.emulatorConfig.host)&&(l.credentials="include"),i0.fetch()(await a0(t,t.config.apiHost,n,a),l)})}async function o0(t,e,n){t._canInitEmulator=!1;const r={...lL,...e};try{const s=new fL(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ss(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ss(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ss(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ss(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw id(t,u,l);Qt(t,u)}}catch(s){if(s instanceof In)throw s;Qt(t,"network-request-failed",{message:String(s)})}}async function Oa(t,e,n,r,s={}){const i=await Et(t,e,n,r,s);return"mfaPendingCredential"in i&&Qt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function a0(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?ad(t.config,s):`${t.config.apiScheme}://${s}`;return uL.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function hL(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class fL{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ye(this.auth,"network-request-failed")),dL.get())})}}function Ss(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ye(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */function Rp(t){return t!==void 0&&t.getResponse!==void 0}function Ap(t){return t!==void 0&&t.enterprise!==void 0}class c0{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return hL(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
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
 */async function pL(t){return(await Et(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function l0(t,e){return Et(t,"GET","/v2/recaptchaConfig",jt(t,e))}/**
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
 */async function mL(t,e){return Et(t,"POST","/v1/accounts:delete",e)}async function Ko(t,e){return Et(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ds(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function gL(t,e=!1){const n=lr(t),r=await n.getIdToken(e),s=cd(r);j(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ds(Fc(s.auth_time)),issuedAtTime:Ds(Fc(s.iat)),expirationTime:Ds(Fc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Fc(t){return Number(t)*1e3}function cd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return xo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Wv(n);return s?JSON.parse(s):(xo("Failed to decode base64 JWT payload"),null)}catch(s){return xo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Pp(t){const e=cd(t);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ys(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof In&&yL(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function yL({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class vL{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Zl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ds(this.lastLoginAt),this.creationTime=Ds(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Go(t){var h;const e=t.auth,n=await t.getIdToken(),r=await Ys(t,Ko(e,{idToken:n}));j(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(h=s.providerUserInfo)!=null&&h.length?u0(s.providerUserInfo):[],o=xL(t.providerData,i),a=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),l=a?c:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Zl(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,u)}async function bL(t){const e=lr(t);await Go(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xL(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function u0(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function wL(t,e){const n=await o0(t,{},async()=>{const r=ns({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await a0(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:r};return t.emulatorConfig&&rd(t.emulatorConfig.host)&&(c.credentials="include"),i0.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function kL(t,e){return Et(t,"POST","/v2/accounts:revokeToken",jt(t,e))}/**
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
 */class Ir{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Pp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){j(e.length!==0,"internal-error");const n=Pp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(j(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await wL(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ir;return r&&(j(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(j(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(j(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ir,this.toJSON())}_performRefresh(){return zt("not implemented")}}/**
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
 */function rn(t,e){j(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class mt{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new vL(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Zl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ys(this,this.stsTokenManager.getToken(this.auth,e));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return gL(this,e)}reload(){return bL(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new mt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Go(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ct(this.auth.app))return Promise.reject(kn(this.auth));const e=await this.getIdToken();return await Ys(this,mL(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,c=n._redirectEventId??void 0,l=n.createdAt??void 0,u=n.lastLoginAt??void 0,{uid:h,emailVerified:f,isAnonymous:p,providerData:g,stsTokenManager:y}=n;j(h&&y,e,"internal-error");const v=Ir.fromJSON(this.name,y);j(typeof h=="string",e,"internal-error"),rn(r,e.name),rn(s,e.name),j(typeof f=="boolean",e,"internal-error"),j(typeof p=="boolean",e,"internal-error"),rn(i,e.name),rn(o,e.name),rn(a,e.name),rn(c,e.name),rn(l,e.name),rn(u,e.name);const S=new mt({uid:h,auth:e,email:s,emailVerified:f,displayName:r,isAnonymous:p,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:v,createdAt:l,lastLoginAt:u});return g&&Array.isArray(g)&&(S.providerData=g.map(b=>({...b}))),c&&(S._redirectEventId=c),S}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ir;s.updateFromServerResponse(n);const i=new mt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Go(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];j(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?u0(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new Ir;a.updateFromIdToken(r);const c=new mt({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Zl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
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
 */const Ip=new Map;function Wt(t){en(t instanceof Function,"Expected a class definition");let e=Ip.get(t);return e?(en(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ip.set(t,e),e)}/**
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
 */class d0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}d0.type="NONE";const Op=d0;/**
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
 */function wo(t,e,n){return`firebase:${t}:${e}:${n}`}class Jn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=wo(this.userKey,s.apiKey,i),this.fullPersistenceKey=wo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ko(this.auth,{idToken:e}).catch(()=>{});return n?mt._fromGetAccountInfoResponse(this.auth,n,e):null}return mt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(e,n,r="authUser"){if(!n.length)return new Jn(Wt(Op),e,r);const s=(await Promise.all(n.map(async l=>{try{if(await l._isAvailable())return l}catch{return}}))).filter(l=>l);let i=s[0]||Wt(Op);const o=wo(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){let h;if(typeof u=="string"){const f=await Ko(e,{idToken:u}).catch(()=>{});if(!f)break;h=await mt._fromGetAccountInfoResponse(e,f,u)}else h=mt._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Jn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Jn(i,e,r))}}/**
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
 */function Np(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(m0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(h0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(y0(e))return"Blackberry";if(v0(e))return"Webos";if(f0(e))return"Safari";if((e.includes("chrome/")||p0(e))&&!e.includes("edge/"))return"Chrome";if(g0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function h0(t=We()){return/firefox\//i.test(t)}function f0(t=We()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function p0(t=We()){return/crios\//i.test(t)}function m0(t=We()){return/iemobile/i.test(t)}function g0(t=We()){return/android/i.test(t)}function y0(t=We()){return/blackberry/i.test(t)}function v0(t=We()){return/webos/i.test(t)}function ld(t=We()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function SL(t=We()){var e;return ld(t)&&!!((e=window.navigator)!=null&&e.standalone)}function EL(){return $O()&&document.documentMode===10}function b0(t=We()){return ld(t)||g0(t)||v0(t)||y0(t)||/windows phone/i.test(t)||m0(t)}/**
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
 */function x0(t,e=[]){let n;switch(t){case"Browser":n=Np(We());break;case"Worker":n=`${Np(We())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Pi}/${r}`}/**
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
 */class _L{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function TL(t,e={}){return Et(t,"GET","/v2/passwordPolicy",jt(t,e))}/**
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
 */const CL=6;class RL{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??CL,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class AL{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lp(this),this.idTokenSubscription=new Lp(this),this.beforeStateQueue=new _L(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=r0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Wt(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted){try{this.persistenceManager=await Jn.create(this,e)}catch(o){bo(`Failed to initialize persistence: ${o}`),this.persistenceManager=await Jn.create(this,[])}finally{(r=this._resolvePersistenceManagerAvailable)==null||r.call(this)}if(!this._deleted){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(n)}catch(o){bo(`Failed to initialize current user: ${o}`),await this.directlySetCurrentUser(null).catch(()=>{})}this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ko(this,{idToken:e}),r=await mt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Ct(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Go(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=cL()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ct(this.app))return Promise.reject(kn(this));const n=e?lr(e):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ct(this.app)?Promise.reject(kn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ct(this.app)?Promise.reject(kn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Wt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await TL(this),n=new RL(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ai("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await kL(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Wt(e)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await Jn.create(this,[Wt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(j(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}).catch(c=>{if(!o)if(typeof n!="function"&&n.error)n.error(c);else if(r)r(c);else throw c}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){if(this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,this.persistenceManager)try{e?await this.persistenceManager.setCurrentUser(e):await this.persistenceManager.removeCurrentUser()}catch(n){const r=(n==null?void 0:n.message)||String(n),s=id(this,"internal-error",`An internal AuthError has occurred: ${r}`);throw s.customData={originalError:n},s}}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=x0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Ct(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&bo(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function On(t){return lr(t)}class Lp{constructor(e){this.auth=e,this.observer=null,this.addObserver=WO(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Oi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function PL(t){Oi=t}function ud(t){return Oi.loadJS(t)}function IL(){return Oi.recaptchaV2Script}function OL(){return Oi.recaptchaEnterpriseScript}function NL(){return Oi.gapiScript}function w0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */const LL=500,jL=6e4,Xi=1e12;class DL{constructor(e){this.auth=e,this.counter=Xi,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new $L(e,this.auth.name,n||{})),this.counter++,r}reset(e){var r;const n=e||Xi;(r=this._widgets.get(n))==null||r.delete(),this._widgets.delete(n)}getResponse(e){var r;const n=e||Xi;return((r=this._widgets.get(n))==null?void 0:r.getResponse())||""}async execute(e){var r;const n=e||Xi;return(r=this._widgets.get(n))==null||r.execute(),""}}class ML{constructor(){this.enterprise=new FL}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class FL{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class $L{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const s=typeof e=="string"?document.getElementById(e):e;j(s,"argument-error",{appName:n}),this.container=s,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=VL(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},jL)},LL))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function VL(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const UL="recaptcha-enterprise",Ms="NO_RECAPTCHA",jp="onFirebaseAuthREInstanceReady";class Ut{constructor(e){this.type=UL,this.auth=On(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{l0(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new c0(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Ap(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(Ms)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new ML().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(async a=>{if(!n&&Ap(window.grecaptcha)&&Ut.scriptInjectionDeferred)await Ut.scriptInjectionDeferred.promise,s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=OL();c.length!==0&&(c+=a+`&onload=${jp}`),Ut.scriptInjectionDeferred=new Gv,window[jp]=()=>{var l;(l=Ut.scriptInjectionDeferred)==null||l.resolve()},ud(c).then(()=>{var l;return(l=Ut.scriptInjectionDeferred)==null?void 0:l.promise}).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}Ut.scriptInjectionDeferred=null;async function $c(t,e,n,r=!1,s=!1){const i=new Ut(t);let o;if(s)o=Ms;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Vc(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("PHONE_PROVIDER")){const o=await $c(t,e,n);return r(t,o).catch(async a=>{var c;if(((c=t._getRecaptchaConfig())==null?void 0:c.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(a.code==="auth/missing-recaptcha-token"||a.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const l=await $c(t,e,n,!1,!0);return r(t,l)}return Promise.reject(a)})}else{const o=await $c(t,e,n,!1,!0);return r(t,o)}}async function BL(t){const e=On(t),n=await l0(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new c0(n);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new Ut(e).verify()}/**
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
 */function HL(t,e){const n=Xv(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Vr(i,e??{}))return s;Qt(s,"already-initialized")}return n.initialize({options:e})}function zL(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Wt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function WL(t,e,n){const r=On(t);j(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=k0(e),{host:o,port:a}=qL(e),c=a===null?"":`:${a}`,l={url:`${i}//${o}${c}/`},u=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){j(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),j(Vr(l,r.config.emulator)&&Vr(u,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=l,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,rd(o)?GO(`${i}//${o}${c}`):KL()}function k0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function qL(t){const e=k0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Dp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Dp(o)}}}function Dp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function KL(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class dd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return zt("not implemented")}_getIdTokenResponse(e){return zt("not implemented")}_linkToIdToken(e,n){return zt("not implemented")}_getReauthenticationResolver(e){return zt("not implemented")}}/**
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
 */async function Or(t,e){return Oa(t,"POST","/v1/accounts:signInWithIdp",jt(t,e))}/**
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
 */const GL="http://localhost";class rr extends dd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new rr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new rr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Or(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Or(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Or(e,n)}buildRequest(){const e={requestUri:GL,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ns(n)}return e}}/**
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
 */async function Mp(t,e){return Et(t,"POST","/v1/accounts:sendVerificationCode",jt(t,e))}async function ZL(t,e){return Oa(t,"POST","/v1/accounts:signInWithPhoneNumber",jt(t,e))}async function JL(t,e){const n=await Oa(t,"POST","/v1/accounts:signInWithPhoneNumber",jt(t,e));if(n.temporaryProof)throw Ss(t,"account-exists-with-different-credential",n);return n}const YL={USER_NOT_FOUND:"user-not-found"};async function XL(t,e){const n={...e,operation:"REAUTH"};return Oa(t,"POST","/v1/accounts:signInWithPhoneNumber",jt(t,n),YL)}/**
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
 */class Fs extends dd{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Fs({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Fs({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return ZL(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return JL(e,{idToken:n,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return XL(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:s}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:s}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:s,temporaryProof:i}=e;return!r&&!n&&!s&&!i?null:new Fs({verificationId:n,verificationCode:r,phoneNumber:s,temporaryProof:i})}}/**
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
 */class S0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ni extends S0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class un extends Ni{constructor(){super("facebook.com")}static credential(e){return rr._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return un.credential(e.oauthAccessToken)}catch{return null}}}un.FACEBOOK_SIGN_IN_METHOD="facebook.com";un.PROVIDER_ID="facebook.com";/**
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
 */class dn extends Ni{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return rr._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return dn.credential(n,r)}catch{return null}}}dn.GOOGLE_SIGN_IN_METHOD="google.com";dn.PROVIDER_ID="google.com";/**
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
 */class hn extends Ni{constructor(){super("github.com")}static credential(e){return rr._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hn.credential(e.oauthAccessToken)}catch{return null}}}hn.GITHUB_SIGN_IN_METHOD="github.com";hn.PROVIDER_ID="github.com";/**
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
 */class fn extends Ni{constructor(){super("twitter.com")}static credential(e,n){return rr._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return fn.credential(n,r)}catch{return null}}}fn.TWITTER_SIGN_IN_METHOD="twitter.com";fn.PROVIDER_ID="twitter.com";/**
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
 */class Br{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await mt._fromIdTokenResponse(e,r,s),o=Fp(r);return new Br({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Fp(r);return new Br({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Fp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Zo extends In{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Zo.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Zo(e,n,r,s)}}function E0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Zo._fromErrorAndOperation(t,i,e,r):i})}async function QL(t,e,n=!1){const r=await Ys(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Br._forOperation(t,"link",r)}/**
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
 */async function ej(t,e,n=!1){const{auth:r}=t;if(Ct(r.app))return Promise.reject(kn(r));const s="reauthenticate";try{const i=await Ys(t,E0(r,s,e,t),n);j(i.idToken,r,"internal-error");const o=cd(i.idToken);j(o,r,"internal-error");const{sub:a}=o;return j(t.uid===a,r,"user-mismatch"),Br._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Qt(r,"user-mismatch"),i}}/**
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
 */async function _0(t,e,n=!1){if(Ct(t.app))return Promise.reject(kn(t));const r="signIn",s=await E0(t,r,e),i=await Br._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function tj(t,e){return _0(On(t),e)}function nj(t,e,n,r){return lr(t).onIdTokenChanged(e,n,r)}function rj(t,e,n){return lr(t).beforeAuthStateChanged(e,n)}/**
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
 */function $p(t,e){return Et(t,"POST","/v2/accounts/mfaEnrollment:start",jt(t,e))}const Jo="__sak";/**
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
 */class T0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Jo,"1"),this.storage.removeItem(Jo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const sj=1e3,ij=10;class C0 extends T0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=b0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);EL()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,ij):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},sj)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}C0.type="LOCAL";const oj=C0;/**
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
 */class R0 extends T0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}R0.type="SESSION";const A0=R0;/**
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
 */function aj(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Na{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Na(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await aj(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Na.receivers=[];/**
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
 */function hd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class cj{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=hd("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ae(){return window}function lj(t){Ae().location.href=t}/**
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
 */function fd(){return typeof Ae().WorkerGlobalScope<"u"&&typeof Ae().importScripts=="function"}async function uj(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dj(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function hj(){return fd()?self:null}/**
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
 */const P0="firebaseLocalStorageDb",fj=1,Yo="firebaseLocalStorage",I0="fbase_key";class Li{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function La(t,e){return t.transaction([Yo],e?"readwrite":"readonly").objectStore(Yo)}function pj(){const t=indexedDB.deleteDatabase(P0);return new Li(t).toPromise()}function O0(){const t=indexedDB.open(P0,fj);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Yo,{keyPath:I0})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Yo)?e(r):(r.close(),await pj(),e(await O0()))})})}async function Vp(t,e,n){const r=La(t,!0).put({[I0]:e,value:n});return new Li(r).toPromise()}async function mj(t,e){const n=La(t,!1).get(e),r=await new Li(n).toPromise();return r===void 0?null:r.value}function Up(t,e){const n=La(t,!0).delete(e);return new Li(n).toPromise()}const gj=800,yj=3;class N0{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=O0(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>yj)throw r;if(this.dbPromise){const s=this.dbPromise;this.dbPromise=null;try{(await s).close()}catch{}}}}async initializeServiceWorkerMessaging(){return fd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Na._getInstance(hj()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await uj(),!this.activeServiceWorker)return;this.sender=new cj(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dj()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await Vp(e,Jo,"1"),await Up(e,Jo)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Vp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>mj(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Up(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{const e=await this._withRetries(s=>{const i=La(s,!1).getAll();return new Li(i).toPromise()});if(this.isClosing)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}catch(e){return this.isClosing||bo(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gj)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}N0.type="LOCAL";const vj=N0;/**
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
 */function Bp(t,e){return Et(t,"POST","/v2/accounts/mfaSignIn:start",jt(t,e))}/**
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
 */const Uc=w0("rcb"),bj=new Ii(3e4,6e4);class xj{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=Ae().grecaptcha)!=null&&e.render)}load(e,n=""){return j(wj(n),e,"argument-error"),this.shouldResolveImmediately(n)&&Rp(Ae().grecaptcha)?Promise.resolve(Ae().grecaptcha):new Promise((r,s)=>{const i=Ae().setTimeout(()=>{s(Ye(e,"network-request-failed"))},bj.get());Ae()[Uc]=()=>{Ae().clearTimeout(i),delete Ae()[Uc];const a=Ae().grecaptcha;if(!a||!Rp(a)){s(Ye(e,"internal-error"));return}const c=a.render;a.render=(l,u)=>{const h=c(l,u);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${IL()}?${ns({onload:Uc,render:"explicit",hl:n})}`;ud(o).catch(()=>{clearTimeout(i),s(Ye(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!((n=Ae().grecaptcha)!=null&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function wj(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class kj{async load(e){return new DL(e)}clearedOneInstance(){}}/**
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
 */const $s="recaptcha",Sj={theme:"light",type:"image"};class jM{constructor(e,n,r={...Sj}){this.parameters=r,this.type=$s,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=On(e),this.isInvisible=this.parameters.size==="invisible",j(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const s=typeof n=="string"?document.getElementById(n):n;j(s,this.auth,"argument-error"),this.container=s,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new kj:new xj,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(s=>{const i=o=>{o&&(this.tokenChangeListeners.delete(i),s(o))};this.tokenChangeListeners.add(i),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){j(!this.parameters.sitekey,this.auth,"argument-error"),j(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),j(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Ae()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){j(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){j(s0()&&!fd(),this.auth,"internal-error"),await Ej(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await pL(this.auth);j(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return j(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Ej(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class _j{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Fs._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function DM(t,e,n){if(Ct(t.app))return Promise.reject(kn(t));const r=On(t),s=await Tj(r,e,lr(n));return new _j(s,i=>tj(r,i))}async function Tj(t,e,n){var r;if(!t._getRecaptchaConfig())try{await BL(t)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const i=s.session;if("phoneNumber"in s){j(i.type==="enroll",t,"internal-error");const o={idToken:i.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Vc(t,o,"mfaSmsEnrollment",async(u,h)=>{if(h.phoneEnrollmentInfo.captchaResponse===Ms){j((n==null?void 0:n.type)===$s,u,"argument-error");const f=await Bc(u,h,n);return $p(u,f)}return $p(u,h)},"PHONE_PROVIDER").catch(u=>Promise.reject(u))).phoneSessionInfo.sessionInfo}else{j(i.type==="signin",t,"internal-error");const o=((r=s.multiFactorHint)==null?void 0:r.uid)||s.multiFactorUid;j(o,t,"missing-multi-factor-info");const a={mfaPendingCredential:i.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Vc(t,a,"mfaSmsSignIn",async(h,f)=>{if(f.phoneSignInInfo.captchaResponse===Ms){j((n==null?void 0:n.type)===$s,h,"argument-error");const p=await Bc(h,f,n);return Bp(h,p)}return Bp(h,f)},"PHONE_PROVIDER").catch(h=>Promise.reject(h))).phoneResponseInfo.sessionInfo}}else{const i={phoneNumber:s.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Vc(t,i,"sendVerificationCode",async(l,u)=>{if(u.captchaResponse===Ms){j((n==null?void 0:n.type)===$s,l,"argument-error");const h=await Bc(l,u,n);return Mp(l,h)}return Mp(l,u)},"PHONE_PROVIDER").catch(l=>Promise.reject(l))).sessionInfo}}finally{n==null||n._reset()}}async function Bc(t,e,n){j(n.type===$s,t,"argument-error");const r=await n.verify();j(typeof r=="string",t,"argument-error");const s={...e};if("phoneEnrollmentInfo"in s){const i=s.phoneEnrollmentInfo.phoneNumber,o=s.phoneEnrollmentInfo.captchaResponse,a=s.phoneEnrollmentInfo.clientType,c=s.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(s,{phoneEnrollmentInfo:{phoneNumber:i,recaptchaToken:r,captchaResponse:o,clientType:a,recaptchaVersion:c}}),s}else if("phoneSignInInfo"in s){const i=s.phoneSignInInfo.captchaResponse,o=s.phoneSignInInfo.clientType,a=s.phoneSignInInfo.recaptchaVersion;return Object.assign(s,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:i,clientType:o,recaptchaVersion:a}}),s}else return Object.assign(s,{recaptchaToken:r}),s}/**
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
 */function Cj(t,e){return e?Wt(e):(j(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class pd extends dd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Or(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Or(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Or(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Rj(t){return _0(t.auth,new pd(t),t.bypassAuthState)}function Aj(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),ej(n,new pd(t),t.bypassAuthState)}async function Pj(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),QL(n,new pd(t),t.bypassAuthState)}/**
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
 */class L0{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Rj;case"linkViaPopup":case"linkViaRedirect":return Pj;case"reauthViaPopup":case"reauthViaRedirect":return Aj;default:Qt(this.auth,"internal-error")}}resolve(e){en(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){en(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Ij=new Ii(2e3,1e4);class Sr extends L0{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Sr.currentPopupAction&&Sr.currentPopupAction.cancel(),Sr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){en(this.filter.length===1,"Popup operations only handle one event");const e=hd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ye(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Ye(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Sr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ye(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ij.get())};e()}}Sr.currentPopupAction=null;/**
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
 */const Oj="pendingRedirect",ko=new Map;class Nj extends L0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ko.get(this.auth._key());if(!e){try{const r=await Lj(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ko.set(this.auth._key(),e)}return this.bypassAuthState||ko.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Lj(t,e){const n=Mj(e),r=Dj(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function jj(t,e){ko.set(t._key(),e)}function Dj(t){return Wt(t._redirectPersistence)}function Mj(t){return wo(Oj,t.config.apiKey,t.name)}async function Fj(t,e,n=!1){if(Ct(t.app))return Promise.reject(kn(t));const r=On(t),s=Cj(r,e),o=await new Nj(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const $j=600*1e3;class Vj{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Uj(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!j0(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ye(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$j&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hp(e))}saveEventToCache(e){this.cachedEventUids.add(Hp(e)),this.lastProcessedEventTime=Date.now()}}function Hp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function j0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Uj(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return j0(t);default:return!1}}/**
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
 */async function Bj(t,e={}){return Et(t,"GET","/v1/projects",e)}/**
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
 */const Hj=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zj=/^https?/;async function Wj(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Bj(t);for(const n of e)try{if(qj(n))return}catch{}Qt(t,"unauthorized-domain")}function qj(t){const e=Gl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!zj.test(n))return!1;if(Hj.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Kj=new Ii(3e4,6e4);function zp(){const t=Ae().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Gj(t){return new Promise((e,n)=>{var s,i,o;function r(){zp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zp(),n(Ye(t,"network-request-failed"))},timeout:Kj.get()})}if((i=(s=Ae().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=Ae().gapi)!=null&&o.load)r();else{const a=w0("iframefcb");return Ae()[a]=()=>{gapi.load?r():n(Ye(t,"network-request-failed"))},ud(`${NL()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw So=null,e})}let So=null;function Zj(t){return So=So||Gj(t),So}/**
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
 */const Jj=new Ii(5e3,15e3),Yj="__/auth/iframe",Xj="emulator/auth/iframe",Qj={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},e4=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function t4(t){const e=t.config;j(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ad(e,Xj):`https://${t.config.authDomain}/${Yj}`,r={apiKey:e.apiKey,appName:t.name,v:Pi},s=e4.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ns(r).slice(1)}`}async function n4(t){const e=await Zj(t),n=Ae().gapi;return j(n,t,"internal-error"),e.open({where:document.body,url:t4(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Qj,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ye(t,"network-request-failed"),a=Ae().setTimeout(()=>{i(o)},Jj.get());function c(){Ae().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const r4={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},s4=500,i4=600,o4="_blank",a4="http://localhost";class Wp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function c4(t,e,n,r=s4,s=i4){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c={...r4,width:r.toString(),height:s.toString(),top:i,left:o},l=We().toLowerCase();n&&(a=p0(l)?o4:n),h0(l)&&(e=e||a4,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[p,g])=>`${f}${p}=${g},`,"");if(SL(l)&&a!=="_self")return l4(e||"",a),new Wp(null);const h=window.open(e||"",a,u);j(h,t,"popup-blocked");try{h.focus()}catch{}return new Wp(h)}function l4(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const u4="__/auth/handler",d4="emulator/auth/handler",h4=encodeURIComponent("fac");async function qp(t,e,n,r,s,i){j(t.config.authDomain,t,"auth-domain-config-required"),j(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Pi,eventId:s};if(e instanceof S0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",zO(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof Ni){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${h4}=${encodeURIComponent(c)}`:"";return`${f4(t)}?${ns(a).slice(1)}${l}`}function f4({config:t}){return t.emulator?ad(t,d4):`https://${t.authDomain}/${u4}`}/**
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
 */const Hc="webStorageSupport";class p4{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=A0,this._completeRedirectFn=Fj,this._overrideRedirectResult=jj}async _openPopup(e,n,r,s){var o;en((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await qp(e,n,r,Gl(),s);return c4(e,i,hd())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await qp(e,n,r,Gl(),s);return lj(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(en(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await n4(e),r=new Vj(e);return n.register("authEvent",s=>(j(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Hc,{type:Hc},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Hc];i!==void 0&&n(!!i),Qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Wj(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return b0()||f0()||ld()}}const m4=p4;var Kp="@firebase/auth",Gp="1.13.6";/**
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
 */class g4{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function y4(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function v4(t){Zs(new Ur("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;j(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:x0(t)},l=new AL(r,s,i,c);return zL(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Zs(new Ur("auth-internal",e=>{const n=On(e.getProvider("auth").getImmediate());return(r=>new g4(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pr(Kp,Gp,y4(t)),Pr(Kp,Gp,"esm2020")}/**
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
 */const b4=300,x4=Kv("authIdTokenMaxAge")||b4;let Zp=null;const w4=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>x4)return;const s=n==null?void 0:n.token;Zp!==s&&(Zp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function k4(t=KN()){const e=Xv(t,"auth");if(e.isInitialized())return e.getImmediate();const n=HL(t,{popupRedirectResolver:m4,persistence:[vj,oj,A0]}),r=Kv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=w4(i.toString());rj(n,o,()=>o(n.currentUser)),nj(n,a=>o(a))}}const s=LO("auth");return s&&WL(n,`http://${s}`),n}function S4(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}PL({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ye("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",S4().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});v4("Browser");const E4={apiKey:yR,authDomain:vR,projectId:bR,storageBucket:xR,messagingSenderId:wR,appId:kR,measurementId:SR},_4=Qv(E4),D0=k4(_4),T4=()=>typeof window>"u"?!1:["localhost","127.0.0.1","[::1]"].includes(window.location.hostname);T4()&&(D0.settings.appVerificationDisabledForTesting=!0);function C4(t){return t.includes(Vo.LIST_ALL)?"all":t.includes(Vo.LIST_SUB)?"sub":"own"}const R4="/api/company/orders/claim";async function A4(t){try{return(await st.post(R4,{phone:t})).data.claimedOrderIds??[]}catch(e){return console.error("[portal auth] claimOrders failed",e),[]}}const Hr=ZA()(XA(t=>({token:null,refresh:null,uid:null,name:null,companyUid:null,permissionList:[],login:e=>{var r,s;t({token:e.token,refresh:e.refresh,uid:e.uid,name:e.name,companyUid:e.companyUid??null,permissionList:e.permission.length>0?e.permission:WA()});const n=((r=e.verifiedPhone)==null?void 0:r.trim())||((s=D0.currentUser)==null?void 0:s.phoneNumber)||"";n&&A4(n)},logout:()=>t({token:null,refresh:null,uid:null,name:null,companyUid:null,permissionList:[]})}),{name:`${gR}:portal-auth`,onRehydrateStorage:()=>t=>{t!=null&&t.token&&!Ho("X-Token")&&t.logout()}})),P4=()=>Hr(t=>t.token!==null),I4=t=>Hr(e=>e.permissionList.includes(t)),MM=()=>Hr(t=>C4(t.permissionList)),M0=V`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background: var(--v29-primary-fill);
  color: var(--v29-on-primary);
  font-family: ${nn};
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
`,O4=T(ct)`
  ${M0}
`,F0=T.div`
  position: relative;
`,N4=T.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid var(--v29-line);
  background: var(--v29-primary);
  color: var(--v29-on-primary);
  font-family: ${G};
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
`,$0=T(ze.div)`
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  min-width: 220px;
  padding: 8px;
  border-radius: 12px;
  background: var(--v29-card);
  border: 1px solid var(--v29-line-soft);
  box-shadow: var(--v29-popover-shadow);
  font-family: ${G};
`,L4=T.div`
  padding: 8px 10px 10px;
  border-bottom: 1px solid var(--v29-line-soft);
  margin-bottom: 6px;
  font-size: 13px;
  font-weight: 600;
  color: var(--v29-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ja=`
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
`,j4=T(ct)`
  ${ja}
  font-family: ${G};
`,D4=T.button`
  ${ja}
  font-family: ${G};
`,M4=T.button`
  ${M0}
  svg {
    width: 12px;
    height: 12px;
    transition: transform 0.2s ease;
  }
  &[aria-expanded='true'] svg {
    transform: rotate(180deg);
  }
`,F4=T.a`
  display: inline-flex;
  align-items: center;
  min-height: 36px;
  padding: 0 4px;
  font-family: ${G};
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
`,$4=T(ct)`
  ${ja}
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  font-family: ${G};
`,V4=T.a`
  ${ja}
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  font-family: ${G};
`,U4=T.span`
  font-weight: 600;
`,B4=T.span`
  font-size: 12px;
  /* the full text colour: the muted grey drops below AA on the hover tint */
  color: var(--v29-text);
  opacity: 0.85;
`,H4=({destinations:t})=>{const{t:e}=xe(),[n,r]=m.useState(!1),s=m.useRef(null),i=m.useRef(null);if(m.useEffect(()=>{if(!n)return;const o=c=>{var l;(l=s.current)!=null&&l.contains(c.target)||r(!1)},a=c=>{var l;c.key==="Escape"&&(r(!1),(l=i.current)==null||l.focus())};return document.addEventListener("pointerdown",o),document.addEventListener("keydown",a),()=>{document.removeEventListener("pointerdown",o),document.removeEventListener("keydown",a)}},[n]),t.length===0)return null;if(t.length===1){const[o]=t;return o.external?d.jsx(F4,{href:o.href,"data-login-role":o.role,children:e(`common:loginRole.${o.role}.login`)}):d.jsx(O4,{to:o.href,"data-login-role":o.role,children:e("common:signIn")})}return d.jsxs(F0,{ref:s,onBlur:o=>{var a;n&&!((a=s.current)!=null&&a.contains(o.relatedTarget))&&r(!1)},children:[d.jsxs(M4,{ref:i,type:"button","aria-expanded":n,"aria-controls":"nav-signin-destinations",onClick:()=>r(o=>!o),children:[e("common:signIn"),d.jsx("svg",{viewBox:"0 0 12 12","aria-hidden":"true",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:d.jsx("path",{d:"M2.5 4.5 6 8l3.5-3.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),d.jsx(zu,{children:n&&d.jsx($0,{id:"nav-signin-destinations",initial:{opacity:0,y:-6},animate:{opacity:1,y:0},exit:{opacity:0,y:-6},transition:{duration:.18,ease:Hn},children:t.map(o=>{const a=d.jsxs(d.Fragment,{children:[d.jsx(U4,{children:e(`common:loginRole.${o.role}.label`)}),d.jsx(B4,{children:e(`common:loginRole.${o.role}.hint`)})]});return o.external?d.jsx(V4,{href:o.href,"data-login-role":o.role,children:a},o.role):d.jsx($4,{to:o.href,"data-login-role":o.role,onClick:()=>r(!1),children:a},o.role)})})})]})},z4=T.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px 10px;
  font-size: 14px;
  color: var(--v29-muted);
`,W4=T.button`
  border: none;
  background: transparent;
  padding: 2px 6px;
  border-radius: 6px;
  font-family: ${G};
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
`,q4=()=>{const{t,i18n:e}=xe(),n=Hr(g=>g.token),r=Hr(g=>g.name),[s,i]=m.useState(!1),o=I4(Vo.LIST),a=m.useRef(null),c=fa(),l=nv();if(m.useEffect(()=>{if(!s)return;const g=v=>{var S;(S=a.current)!=null&&S.contains(v.target)||i(!1)},y=v=>{v.key==="Escape"&&i(!1)};return document.addEventListener("pointerdown",g),document.addEventListener("keydown",y),()=>{document.removeEventListener("pointerdown",g),document.removeEventListener("keydown",y)}},[s]),!n)return d.jsx(H4,{destinations:l});const u=(r??"?").trim().charAt(0).toUpperCase()||"?",h=e.language,f=Rl.length>1,p=g=>{mR(g)};return d.jsxs(F0,{ref:a,children:[d.jsx(N4,{"aria-label":t("common:accountMenu"),"aria-expanded":s,onClick:()=>i(g=>!g),children:u}),d.jsx(zu,{children:s&&d.jsxs($0,{initial:{opacity:0,y:-6},animate:{opacity:1,y:0},exit:{opacity:0,y:-6},transition:{duration:.18,ease:Hn},children:[d.jsx(L4,{children:r}),o&&d.jsx(j4,{to:"/portal/orders",onClick:()=>i(!1),children:t("common:orders")}),f&&d.jsxs(z4,{children:[d.jsx("span",{children:t("common:language")}),d.jsx("span",{children:Rl.map(g=>d.jsx(W4,{$active:h===g,onClick:()=>p(g),children:fR[g]},g))})]}),d.jsx(D4,{onClick:()=>{i(!1),jv(),c(ev(),{replace:!0})},children:t("common:signOut")})]})})]})},K4=T.nav`
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
    --brand-logo-color: ${Ry};
  }

  @media (max-width: 720px) {
    padding: 12px 20px;
  }
`,G4=T.div`
  display: flex;
  align-items: center;
  gap: 16px;
  @media (max-width: 480px) {
    gap: 8px;
  }
`,Z4=T.span`
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
`,J4=T.button`
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
`,Y4=T(ct)`
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 8px;
  font-family: ${nn};
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
`,X4=({theme:t,onToggleTheme:e,audience:n="public"})=>{const{t:r}=xe(),{pathname:s}=at(),i=P4(),o=s.startsWith("/portal")&&i,a=nv(),c=a.length>0,l=a.some(h=>h.role==="shipper"),u=n==="receiver";return d.jsxs(K4,{children:[d.jsx(ct,{to:"/","aria-label":r("common:brandHome"),style:{display:"inline-flex"},children:d.jsxs(Z4,{$compact:c&&!u,children:[d.jsx("span",{className:"nav-wordmark","aria-hidden":"true",children:d.jsx(tf,{height:28,ariaLabel:""})}),d.jsx("span",{className:"nav-mark","aria-hidden":"true",children:d.jsx(tf,{height:28,variant:"mark",ariaLabel:""})})]})}),d.jsxs(G4,{children:[d.jsx(J4,{onClick:e,"aria-label":r("common:toggleTheme"),children:t==="dark"?d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[d.jsx("circle",{cx:"12",cy:"12",r:"5"}),d.jsx("path",{d:"M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"})]}):d.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:d.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})}),!o&&!u&&d.jsx(Y4,{to:"/contact",$ghost:l,$hideOnNarrow:l,children:r("common:getEarlyAccess")}),!u&&(c||i)&&d.jsx(q4,{})]})]})},Q4=T.div`
  background: var(--v29-page);
  color: var(--v29-text);
  font-family: ${G};
  -webkit-font-smoothing: antialiased;
  transition: background 0.3s ease, color 0.3s ease;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;T.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 clamp(20px, 4vw, 48px);
  width: 100%;
`;const FM=T.section`
  position: relative;
  padding: clamp(72px, 11vh, 128px) 0;
  background: ${t=>t.$alt?"var(--v29-surface-alt)":"transparent"};
`,$M=T.p`
  font-family: ${G};
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
    display: block;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${Ws};
    ${t=>t.$glow&&`box-shadow: 0 0 6px ${Ws};`}
  }
`,VM=T.h2`
  font-family: ${nn};
  font-style: italic;
  font-weight: 700;
  font-size: clamp(1.9rem, 1.3rem + 2.6vw, 3rem);
  letter-spacing: 0.01em;
  line-height: 1.08;
  margin: 0 0 16px;
  color: var(--v29-text);
`,UM=T.p`
  font-size: clamp(1rem, 0.95rem + 0.3vw, 1.125rem);
  line-height: 1.65;
  color: var(--v29-muted);
  max-width: 56ch;
  margin: 0;
`;T(ct)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  border-radius: 8px;
  background: var(--v29-primary-fill);
  color: #fff;
  font-family: ${nn};
  font-style: italic;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.2s ease;
  &:hover {
    background: var(--v29-primary-fill);
    transform: translateY(-1px);
  }
`;T.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  border-radius: 8px;
  border: 1.5px solid rgba(255, 255, 255, 0.55);
  background: transparent;
  color: #fff;
  font-family: ${nn};
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
`;const e3={legalName:"Senditgo Co., Ltd.",jurisdiction:"Taiwan, R.O.C.",address:"24F.-6, No. 213, Chaofu Rd., Xitun Dist., Taichung City, Taiwan (R.O.C.)",supportEmail:"info@holieninnovation.com.tw"},md={public:"sg-track-lookup",consignee:"sg-track-delivery-lookup"},t3=["sendit-go.track.recentlyTracked.v1"];function n3(t,e){try{sessionStorage.setItem(md[t],e)}catch{}}function r3(t){try{return sessionStorage.getItem(md[t])}catch{return null}}function s3(t){try{sessionStorage.removeItem(md[t])}catch{}}function i3(){try{for(const t of t3)localStorage.removeItem(t)}catch{}}const ue=t=>V`
  @media (max-width: ${Vy}px) {
    ${t}
  }
`,Xs=T.span`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  border: 0;
`,o3=T.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* the shared SiteNav is fixed: 16px + 41px CTA + 16px + 1px hairline */
  padding-top: 74px;
  @media (max-width: 720px) {
    padding-top: 69px;
  }
`,gd=T.div`
  width: 100%;
  max-width: calc(1288px + 2 * clamp(16px, 5.3vw, 76px));
  margin: 0 auto;
  padding: 0 clamp(16px, 5.3vw, 76px);
  ${ue(V`
    padding: 0 16px;
  `)}
`,a3=({title:t,audience:e,children:n})=>{const{mode:r,toggleTheme:s}=pi();return m.useEffect(()=>{i3()},[]),d.jsxs(d.Fragment,{children:[d.jsx(FT,{}),d.jsxs(EA,{children:[d.jsx("title",{children:t}),d.jsx("meta",{name:"robots",content:"noindex"})]}),d.jsxs(Q4,{children:[d.jsx(X4,{theme:r,onToggleTheme:s,audience:e}),d.jsx(o3,{children:d.jsx(NR,{children:n})}),d.jsx(DA,{}),d.jsx(IA,{})]})]})},c3=T.section`
  background: var(--trk-band);
  /* white band on a white page: a hairline marks where the header ends */
  border-bottom: 1px solid var(--trk-border);
  padding: 28px 0 21px;
  ${ue(V`
    padding: 20px 0 18px;
  `)}
`,l3=T.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding-left: 4px;
  ${ue(V`
    gap: 8px;
    padding-left: 2px;
  `)}
`,u3=T(ct)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: ${G};
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
    outline: 2px solid ${Ie.blue};
    outline-offset: 2px;
  }

  ${ue(V`
    font-size: 12px;
    line-height: 15px;
    min-height: 44px;
    margin: -14px 0;
  `)}
`,d3=T.p`
  margin: 0;
  font-family: ${G};
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  /* #007FFF as 12px text on the band is 3.6:1; text uses the primary ink */
  color: var(--trk-link);
`,h3=T.h1`
  margin: 0;
  font-family: ${nn};
  font-style: italic;
  font-weight: 700;
  font-size: 62px;
  /* the reference's 98px text box at 62px (567:846) */
  line-height: 98px;
  color: var(--trk-ink);

  &:focus {
    outline: none;
  }

  ${ue(V`
    font-size: 40px;
    line-height: 49px;
  `)}
`,f3=T.p`
  margin: 0;
  font-family: ${G};
  font-size: 18px;
  line-height: 22px;
  color: var(--trk-muted);
  ${ue(V`
    font-size: 13px;
    line-height: 17px;
    max-width: 340px;
  `)}
`,p3=({title:t,subtitle:e,eyebrow:n,backTo:r,focusTitle:s})=>{const i=m.useRef(null);return m.useEffect(()=>{var o;s&&((o=i.current)==null||o.focus())},[s]),d.jsx(c3,{"data-testid":"track-title-band",children:d.jsx(gd,{children:d.jsxs(l3,{children:[r&&d.jsxs(u3,{to:r.to,children:[d.jsx(fb,{"aria-hidden":"true"}),r.label]}),n&&d.jsx(d3,{children:n}),d.jsx(h3,{ref:i,tabIndex:s?-1:void 0,children:t}),d.jsx(f3,{children:e})]})})})},V0=T.div`
  padding: 0 0 48px;
  ${ue(V`
    padding: 16px 0 32px;
  `)}
`,yd=T.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${ue(V`
    gap: 14px;
  `)}
`,It=T.section`
  background: var(--trk-card);
  border: 1px solid var(--trk-border);
  border-radius: 14px;
  padding: 22px 26px 27px;
  min-width: 0;
  ${ue(V`
    border-radius: 12px;
    padding: 16px;
  `)}
`,vd=T.h2`
  margin: 0 0 18px;
  font-family: ${nn};
  font-style: italic;
  font-weight: 700;
  font-size: 30px;
  /* the reference's 47px title box (567:873 / 567:893) */
  line-height: 47px;
  color: var(--trk-ink);
  ${ue(V`
    font-size: 22px;
    line-height: 1.25;
    margin-bottom: 10px;
  `)}
`,Ot=T.span`
  font-family: ${G};
  font-size: 11px;
  font-weight: 700;
  line-height: 13px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--trk-muted);
  ${ue(V`
    font-size: 10px;
    line-height: 12px;
  `)}
`,m3={amber:V`
    background: var(--trk-chip-amber-bg);
    color: var(--trk-amber-ink);
    --dot: ${Ie.amber};
  `,blue:V`
    background: var(--trk-chip-blue-bg);
    color: var(--trk-blue-ink);
    --dot: ${Ie.blue};
  `,red:V`
    background: var(--trk-chip-red-bg);
    color: var(--trk-red-ink);
    --dot: var(--trk-red-ink);
  `},g3=T.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 999px;
  font-family: ${G};
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  white-space: nowrap;
  ${({$tone:t})=>m3[t]}

  &::before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--dot);
    flex-shrink: 0;
  }

  ${ue(V`
    gap: 6px;
    padding: 6px 10px;
    font-size: 11px;
    line-height: 13px;

    &::before {
      width: 8px;
      height: 8px;
    }
  `)}
`,y3=({shipment:t,taxonomy:e})=>{const{t:n}=xe(),r=By(t,e);return d.jsx(g3,{$tone:r.tone,"data-testid":"status-chip","data-tone":r.tone,children:n(r.labelKey)})},v3=T.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-height: 60px;
  ${ue(V`
    min-height: 54px;
    align-items: flex-start;
  `)}
`,b3=T.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`,x3=T.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,w3=T.span`
  font-family: ${G};
  font-size: 30px;
  font-weight: 700;
  line-height: 36px;
  color: var(--trk-ink);
  letter-spacing: 0.01em;
  ${ue(V`
    font-size: 20px;
    line-height: 24px;
  `)}
`,k3=T.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: ${Ie.blue};
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background: var(--trk-tint);
  }

  &:focus-visible {
    outline: 2px solid ${Ie.blue};
    outline-offset: 2px;
  }

  ${ue(V`
    width: 44px;
    height: 44px;
    margin: -10px -10px -10px -6px;

    svg {
      width: 18px;
      height: 18px;
    }
  `)}
`,U0=({shipment:t,taxonomy:e})=>{const{t:n}=xe(),[r,s]=m.useState("idle"),i=async()=>{try{await navigator.clipboard.writeText(t.orderId),s("copied")}catch{s("failed")}window.setTimeout(()=>s("idle"),4e3)};return d.jsxs(v3,{children:[d.jsxs(b3,{children:[d.jsx(Ot,{children:n("tracking:guest.summary.trackingNumber")}),d.jsxs(x3,{children:[d.jsx(w3,{"data-testid":"tracking-number",children:t.orderId}),d.jsx(k3,{type:"button",onClick:i,"aria-label":n("tracking:guest.summary.copy"),children:r==="copied"?d.jsx(hb,{"aria-hidden":"true"}):d.jsx(e1,{"aria-hidden":"true"})}),d.jsx(Xs,{role:"status","aria-live":"polite",children:r==="copied"?n("tracking:guest.summary.copied"):r==="failed"?n("tracking:guest.summary.copyFailed"):""})]})]}),d.jsx(y3,{shipment:t,taxonomy:e})]})},S3=T.div`
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
  ${({$neutral:t})=>ue(V`
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
`,E3=T.span`
  align-self: center;
  width: 1px;
  height: 60px;
  background: var(--trk-border);
  ${ue(V`
    display: none;
  `)}
`,Jp=T.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;

  .value {
    font-family: ${G};
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    color: var(--trk-ink);
  }

  .sub {
    font-family: ${G};
    font-size: 13px;
    line-height: 16px;
    color: var(--trk-muted);
  }

  ${({$primary:t})=>ue(V`
      gap: 3px;
      ${t?V`
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
          `:V`
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
`;function _3(t){return t.travelHistory[t.travelHistory.length-1]??null}function T3(t){const e=t.travelHistory.find(n=>n.activity==="signed")??t.travelHistory.find(n=>n.activity==="completed")??t.travelHistory.find(n=>n.activity==="arrived");return(e==null?void 0:e.time)??null}function C3(t){var e,n;return((e=t.travelHistory.find(r=>r.activity==="cancelled"))==null?void 0:e.time)??((n=t.exceptions.find(r=>r.type==="cancelled"))==null?void 0:n.occurredAt)??null}function Da(t,e=new Date){const{t:n}=xe(),r=t.timezone,s=$y(t.destination);if(t.stage==="delivered"||t.stage==="completed"){const u=T3(t);return{label:n("tracking:guest.eta.deliveredLabel"),value:u?`${bt(u,r)}, ${Si(u,r)}`:n("tracking:guest.eta.deliveredLabel"),sub:[u?bt(u,r,!0):null,s].filter(Boolean).join(" · "),neutral:!1}}if(t.stage==="cancelled"){const u=C3(t);return{label:n("tracking:guest.eta.cancelledLabel"),value:u?bt(u,r,!0):n("tracking:guest.eta.cancelledLabel"),sub:n("tracking:guest.eta.cancelledNote"),neutral:!0}}const i=t.estimatedDelivery;if(!i)return{label:n("tracking:guest.eta.label"),value:n("tracking:guest.eta.toBeConfirmed"),sub:[n("tracking:guest.eta.toBeConfirmedNote"),s].filter(Boolean).join(" · "),neutral:!1};const o=CR(i.date,r,e);if(o<0)return{label:n("tracking:guest.eta.label"),value:n("tracking:guest.eta.toBeConfirmed"),sub:[n("tracking:guest.eta.previouslyExpected",{date:Gi(i.date,!0)}),s].filter(Boolean).join(" · "),neutral:!1};const a=TR(i.date,r,e),c=i.timeWindow??"",l=a?n(`tracking:guest.eta.${a}${c}`):c?n(`tracking:guest.eta.day${c}`,{day:Gi(i.date,o>7)}):Gi(i.date,o>7);return{label:n("tracking:guest.eta.label"),value:l,sub:[Gi(i.date,!0),s].filter(Boolean).join(" · "),neutral:!1}}const R3=({shipment:t,now:e})=>{const{t:n}=xe(),r=Da(t,e),s=_3(t),i=t.timezone;return d.jsxs(S3,{"data-testid":"eta-panel",$neutral:r.neutral,children:[d.jsxs(Jp,{$primary:!0,children:[d.jsx(Ot,{children:r.label}),d.jsx("span",{className:"value","data-testid":"eta-value",children:r.value}),r.sub&&d.jsx("span",{className:"sub",children:r.sub})]}),d.jsx(E3,{"aria-hidden":"true"}),d.jsxs(Jp,{children:[d.jsx(Ot,{children:n("tracking:guest.latest.label")}),d.jsx("span",{className:"value","data-testid":"latest-value",children:n(s?`tracking:guest.activity.${s.activity}`:"tracking:guest.latest.none")}),s&&d.jsx("span",{className:"sub",children:[bt(s.time,i,!0),Si(s.time,i),Ei(s.location)].filter(Boolean).join(" · ")})]})]})},A3=T.dl`
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
  ${ue(V`
    gap: 0;
  `)}
`,P3=T.div`
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
    font-family: ${G};
    font-size: 14px;
    line-height: 17px;
    color: var(--trk-ink);
  }

  ${ue(V`
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
`;function B0(t){const{t:e}=xe(),n=t.timezone,r=[];r.push(["trackingNumber",e("tracking:guest.details.trackingNumber"),t.orderId]),r.push(["shipDate",e("tracking:guest.details.shipDate"),t.shipDate?bt(t.shipDate,n,!0):t.stage==="cancelled"?"—":e("tracking:guest.details.notShipped")]),t.carrierName&&r.push(["carrier",e("tracking:guest.details.carrier"),t.carrierName]),r.push(["origin",e("tracking:guest.details.origin"),Ei(t.origin)??"—"]),r.push(["destination",e("tracking:guest.details.destination"),$y(t.destination)??"—"]);const s=e("tracking:guest.details.packageCount",{count:t.packages.current}),i=t.packages.affected>0?` · ${e("tracking:guest.details.affected",{count:t.packages.affected})}`:"";return r.push(["packages",e("tracking:guest.details.packages"),`${s}${i}`]),t.proofType&&r.push(["proof",e("tracking:guest.details.proof"),e(`tracking:guest.details.proofType.${t.proofType}`)]),r}const I3=({shipment:t})=>{const{t:e}=xe(),n=B0(t);return d.jsxs(It,{"data-testid":"details-card","aria-labelledby":"trk-details-title",children:[d.jsx(vd,{id:"trk-details-title",children:e("tracking:guest.details.title")}),d.jsx(A3,{children:n.map(([r,s,i])=>d.jsxs(P3,{"data-row":r,children:[d.jsx("dt",{children:d.jsx(Ot,{children:s})}),d.jsx("dd",{children:i})]},r))})]})},O3=T.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 12px;
  /* header lands 12px under the 47px title, as in 567:894 */
  margin: -18px 0 -12px;
  table-layout: fixed;
  font-family: ${G};

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

  ${ue(V`
    display: none;
  `)}
`,N3=T.ol`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  font-family: ${G};

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
`,L3=T.div`
  display: none;
  ${ue(V`
    display: block;
  `)}
`,H0=({shipment:t,testId:e})=>{const{t:n}=xe(),r=t.timezone,s=[...t.travelHistory].reverse();return d.jsx(N3,{"data-testid":e,children:s.map((i,o)=>d.jsxs("li",{children:[d.jsx("span",{className:"what",children:n(`tracking:guest.activity.${i.activity}`)}),d.jsx("span",{className:"when",children:[bt(i.time,r),Si(i.time,r),Ei(i.location)].filter(Boolean).join(" · ")})]},`${i.time}-${i.activity}-${o}`))})},j3=T.p`
  margin: 0;
  font-family: ${G};
  font-size: 14px;
  color: var(--trk-muted);
`,D3=({shipment:t})=>{const{t:e}=xe(),n=t.timezone,r=[...t.travelHistory].reverse();return d.jsxs(It,{"data-testid":"history-card","aria-labelledby":"trk-history-title",children:[d.jsx(vd,{id:"trk-history-title",children:e("tracking:guest.history.title")}),r.length===0?d.jsx(j3,{children:e("tracking:guest.history.empty")}):d.jsxs(d.Fragment,{children:[d.jsxs(O3,{"data-testid":"history-table",children:[d.jsxs("colgroup",{children:[d.jsx("col",{className:"when"}),d.jsx("col",{className:"what"}),d.jsx("col",{className:"where"})]}),d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{scope:"col",children:e("tracking:guest.history.date")}),d.jsx("th",{scope:"col",children:e("tracking:guest.history.activity")}),d.jsx("th",{scope:"col",children:e("tracking:guest.history.location")})]})}),d.jsx("tbody",{children:r.map((s,i)=>d.jsxs("tr",{className:i===0?"latest":void 0,children:[d.jsxs("td",{className:"when",children:[bt(s.time,n,!0),d.jsx("br",{}),Si(s.time,n)]}),d.jsx("td",{className:"what",children:e(`tracking:guest.activity.${s.activity}`)}),d.jsx("td",{className:"where",children:Ei(s.location)??"—"})]},`${s.time}-${s.activity}-${i}`))})]}),d.jsx(L3,{children:d.jsx(H0,{shipment:t,testId:"history-list"})})]})]})},M3=T.h2`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 10px;
  font-family: ${G};
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: var(--trk-ink);

  svg {
    width: 20px;
    height: 20px;
    color: ${Ie.amber};
    flex-shrink: 0;
  }
`,F3=T.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-family: ${G};
  font-size: 14px;
  line-height: 1.45;
  color: var(--trk-ink);

  .when {
    color: var(--trk-muted);
    font-size: 13px;
  }
`;function z0(t){return`mailto:${e3.supportEmail}?subject=${encodeURIComponent(t)}`}const Ma=T.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 46px;
  padding: 0 18px;
  border-radius: 8px;
  border: 1px solid var(--trk-border);
  background: var(--trk-card);
  font-family: ${G};
  font-size: 14px;
  font-weight: 600;
  color: var(--trk-ink);
  text-decoration: none;
  cursor: pointer;

  &:hover {
    border-color: ${Ie.blue};
  }

  &:focus-visible {
    outline: 2px solid ${Ie.blue};
    outline-offset: 2px;
  }
`,$3=T.div`
  margin-top: 12px;
`,W0=({shipment:t,showContact:e=!0})=>{const{t:n}=xe(),r=t.exceptions.filter(i=>i.type!=="cancelled"||t.stage!=="cancelled");if(r.length===0)return null;const s=t.timezone;return d.jsxs(It,{"data-testid":"exceptions-card","aria-labelledby":"trk-exceptions-title",role:"region",children:[d.jsxs(M3,{id:"trk-exceptions-title",children:[d.jsx(Xx,{"aria-hidden":"true"}),n("tracking:guest.exceptions.title")]}),d.jsx(F3,{children:r.map((i,o)=>d.jsxs("li",{children:[n(`tracking:guest.exceptions.${i.type}`,{count:i.count??1})," ",i.occurredAt&&d.jsx("span",{className:"when",children:bt(i.occurredAt,s,!0)})]},`${i.type}-${o}`))}),e&&d.jsx($3,{children:d.jsx(Ma,{href:z0(`Delivery update — ${t.orderId}`),children:n("tracking:guest.exceptions.contact")})})]})},V3=T.form`
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
    border-color: ${Ie.blue};
    box-shadow: 0 0 0 3px rgba(0, 127, 255, 0.18);
  }

  > svg {
    width: 22px;
    height: 22px;
    color: var(--trk-muted);
    flex-shrink: 0;
  }

  ${ue(V`
    padding-left: 12px;
  `)}
`,U3=T.input`
  flex: 1;
  min-width: 0;
  height: 46px;
  border: 0;
  outline: none;
  background: transparent;
  font-family: ${G};
  font-size: 17px;
  color: var(--trk-ink);
  text-transform: uppercase;

  &::placeholder {
    text-transform: none;
    color: var(--trk-muted);
  }
`,B3=_x`
  to {
    transform: rotate(360deg);
  }
`,H3=T.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.35);
  border-top-color: #ffffff;
  animation: ${B3} 0.8s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    border-color: #ffffff;
  }
`,z3=T.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 48px;
  min-width: 144px;
  padding: 0 22px;
  border: 0;
  border-radius: 8px;
  background: ${Ie.primaryFill};
  color: ${Ie.onPrimary};
  font-family: ${nn};
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
    outline: 2px solid ${Ie.blue};
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover:not([aria-disabled='true']) {
      transform: none;
    }
  }

  ${ue(V`
    min-width: 96px;
    padding: 0 16px;
  `)}
`,W3=T.p`
  margin: 8px 0 0;
  font-family: ${G};
  font-size: 13px;
  line-height: 1.4;
  color: ${({$tone:t})=>t==="error"?"var(--trk-red-ink)":t==="notice"?"var(--trk-ink)":"var(--trk-muted)"};
  font-weight: ${({$tone:t})=>t==="notice"?600:400};
`;function q3(t,e){return!t||t.kind==="ok"?null:{tone:t.kind==="format"||t.kind==="notFound"?"error":"notice",text:e(`tracking:guest.error.${t.kind}`)}}const K3=({value:t,onChange:e,onSubmit:n,busy:r,message:s})=>{const{t:i}=xe(),o=(s==null?void 0:s.tone)??"hint";return d.jsxs("div",{children:[d.jsxs(V3,{role:"search",noValidate:!0,onSubmit:a=>{a.preventDefault(),!r&&n()},children:[d.jsx(r1,{"aria-hidden":"true"}),d.jsx(U3,{id:"trk-order-id",name:"orderId",value:t,onChange:a=>e(a.target.value),placeholder:i("tracking:guest.entry.placeholder"),"aria-label":i("tracking:guest.entry.inputLabel"),"aria-describedby":"trk-order-id-hint","aria-invalid":o==="error"?!0:void 0,autoComplete:"off",autoCapitalize:"characters",spellCheck:!1,maxLength:32}),d.jsxs(z3,{type:"submit","aria-disabled":r||void 0,"aria-busy":r||void 0,children:[r&&d.jsx(H3,{"aria-hidden":"true"}),i(r?"tracking:guest.entry.submitBusy":"tracking:guest.entry.submit")]})]}),d.jsx(W3,{id:"trk-order-id-hint",role:s?"alert":void 0,$tone:o,children:(s==null?void 0:s.text)??i("tracking:guest.entry.hint")}),d.jsx(Xs,{role:"status","aria-live":"polite",children:r?i("tracking:guest.entry.busyStatus"):""})]})},Qi=T.span`
  display: block;
  width: ${({$w:t})=>t};
  height: ${({$h:t})=>t??14}px;
  border-radius: 6px;
  background: var(--trk-rail-future);
`,G3=T(It)`
  display: flex;
  flex-direction: column;
  gap: 18px;
`,q0=()=>{const{t}=xe();return d.jsxs(G3,{"aria-busy":"true","aria-label":t("tracking:guest.error.loading"),"data-testid":"result-loading",children:[d.jsx(Qi,{$w:"140px",$h:11}),d.jsx(Qi,{$w:"260px",$h:30}),d.jsx(Qi,{$w:"100%",$h:16}),d.jsx(Qi,{$w:"100%",$h:72})]})},Z3=T.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  font-family: ${G};
  font-size: 15px;
  line-height: 1.5;
  color: var(--trk-ink);

  p {
    margin: 0;
  }
`,J3=({text:t,onRetry:e,testId:n,children:r})=>{const{t:s}=xe();return d.jsx(It,{"data-testid":n,role:"alert",children:d.jsxs(Z3,{children:[d.jsx("p",{children:t}),e&&d.jsxs(Ma,{as:"button",type:"button",onClick:e,children:[d.jsx(t1,{"aria-hidden":"true",width:16,height:16}),s("tracking:guest.error.retry")]}),r]})})},Y3="modulepreload",X3=function(t){return"/tms-official-web-preview/"+t},Yp={},Q3=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let o=function(l){return Promise.all(l.map(u=>Promise.resolve(u).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=o(n.map(l=>{if(l=X3(l),l in Yp)return;Yp[l]=!0;const u=l.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":Y3,u||(f.as="script"),f.crossOrigin="",f.href=l,c&&f.setAttribute("nonce",c),document.head.appendChild(f),u)return new Promise((p,g)=>{f.addEventListener("load",p),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})};var ie;(function(t){t.assertEqual=s=>s;function e(s){}t.assertIs=e;function n(s){throw new Error}t.assertNever=n,t.arrayToEnum=s=>{const i={};for(const o of s)i[o]=o;return i},t.getValidEnumValues=s=>{const i=t.objectKeys(s).filter(a=>typeof s[s[a]]!="number"),o={};for(const a of i)o[a]=s[a];return t.objectValues(o)},t.objectValues=s=>t.objectKeys(s).map(function(i){return s[i]}),t.objectKeys=typeof Object.keys=="function"?s=>Object.keys(s):s=>{const i=[];for(const o in s)Object.prototype.hasOwnProperty.call(s,o)&&i.push(o);return i},t.find=(s,i)=>{for(const o of s)if(i(o))return o},t.isInteger=typeof Number.isInteger=="function"?s=>Number.isInteger(s):s=>typeof s=="number"&&isFinite(s)&&Math.floor(s)===s;function r(s,i=" | "){return s.map(o=>typeof o=="string"?`'${o}'`:o).join(i)}t.joinValues=r,t.jsonStringifyReplacer=(s,i)=>typeof i=="bigint"?i.toString():i})(ie||(ie={}));var Jl;(function(t){t.mergeShapes=(e,n)=>({...e,...n})})(Jl||(Jl={}));const L=ie.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),pn=t=>{switch(typeof t){case"undefined":return L.undefined;case"string":return L.string;case"number":return isNaN(t)?L.nan:L.number;case"boolean":return L.boolean;case"function":return L.function;case"bigint":return L.bigint;case"symbol":return L.symbol;case"object":return Array.isArray(t)?L.array:t===null?L.null:t.then&&typeof t.then=="function"&&t.catch&&typeof t.catch=="function"?L.promise:typeof Map<"u"&&t instanceof Map?L.map:typeof Set<"u"&&t instanceof Set?L.set:typeof Date<"u"&&t instanceof Date?L.date:L.object;default:return L.unknown}},A=ie.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),e5=t=>JSON.stringify(t,null,2).replace(/"([^"]+)":/g,"$1:");class Xe extends Error{constructor(e){super(),this.issues=[],this.addIssue=r=>{this.issues=[...this.issues,r]},this.addIssues=(r=[])=>{this.issues=[...this.issues,...r]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const n=e||function(i){return i.message},r={_errors:[]},s=i=>{for(const o of i.issues)if(o.code==="invalid_union")o.unionErrors.map(s);else if(o.code==="invalid_return_type")s(o.returnTypeError);else if(o.code==="invalid_arguments")s(o.argumentsError);else if(o.path.length===0)r._errors.push(n(o));else{let a=r,c=0;for(;c<o.path.length;){const l=o.path[c];c===o.path.length-1?(a[l]=a[l]||{_errors:[]},a[l]._errors.push(n(o))):a[l]=a[l]||{_errors:[]},a=a[l],c++}}};return s(this),r}static assert(e){if(!(e instanceof Xe))throw new Error(`Not a ZodError: ${e}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,ie.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=n=>n.message){const n={},r=[];for(const s of this.issues)s.path.length>0?(n[s.path[0]]=n[s.path[0]]||[],n[s.path[0]].push(e(s))):r.push(e(s));return{formErrors:r,fieldErrors:n}}get formErrors(){return this.flatten()}}Xe.create=t=>new Xe(t);const zr=(t,e)=>{let n;switch(t.code){case A.invalid_type:t.received===L.undefined?n="Required":n=`Expected ${t.expected}, received ${t.received}`;break;case A.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(t.expected,ie.jsonStringifyReplacer)}`;break;case A.unrecognized_keys:n=`Unrecognized key(s) in object: ${ie.joinValues(t.keys,", ")}`;break;case A.invalid_union:n="Invalid input";break;case A.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${ie.joinValues(t.options)}`;break;case A.invalid_enum_value:n=`Invalid enum value. Expected ${ie.joinValues(t.options)}, received '${t.received}'`;break;case A.invalid_arguments:n="Invalid function arguments";break;case A.invalid_return_type:n="Invalid function return type";break;case A.invalid_date:n="Invalid date";break;case A.invalid_string:typeof t.validation=="object"?"includes"in t.validation?(n=`Invalid input: must include "${t.validation.includes}"`,typeof t.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${t.validation.position}`)):"startsWith"in t.validation?n=`Invalid input: must start with "${t.validation.startsWith}"`:"endsWith"in t.validation?n=`Invalid input: must end with "${t.validation.endsWith}"`:ie.assertNever(t.validation):t.validation!=="regex"?n=`Invalid ${t.validation}`:n="Invalid";break;case A.too_small:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at least":"more than"} ${t.minimum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at least":"over"} ${t.minimum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(t.minimum))}`:n="Invalid input";break;case A.too_big:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at most":"less than"} ${t.maximum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at most":"under"} ${t.maximum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="bigint"?n=`BigInt must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly":t.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(t.maximum))}`:n="Invalid input";break;case A.custom:n="Invalid input";break;case A.invalid_intersection_types:n="Intersection results could not be merged";break;case A.not_multiple_of:n=`Number must be a multiple of ${t.multipleOf}`;break;case A.not_finite:n="Number must be finite";break;default:n=e.defaultError,ie.assertNever(t)}return{message:n}};let K0=zr;function t5(t){K0=t}function Xo(){return K0}const Qo=t=>{const{data:e,path:n,errorMaps:r,issueData:s}=t,i=[...n,...s.path||[]],o={...s,path:i};if(s.message!==void 0)return{...s,path:i,message:s.message};let a="";const c=r.filter(l=>!!l).slice().reverse();for(const l of c)a=l(o,{data:e,defaultError:a}).message;return{...s,path:i,message:a}},n5=[];function N(t,e){const n=Xo(),r=Qo({issueData:e,data:t.data,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,n,n===zr?void 0:zr].filter(s=>!!s)});t.common.issues.push(r)}class Be{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,n){const r=[];for(const s of n){if(s.status==="aborted")return K;s.status==="dirty"&&e.dirty(),r.push(s.value)}return{status:e.value,value:r}}static async mergeObjectAsync(e,n){const r=[];for(const s of n){const i=await s.key,o=await s.value;r.push({key:i,value:o})}return Be.mergeObjectSync(e,r)}static mergeObjectSync(e,n){const r={};for(const s of n){const{key:i,value:o}=s;if(i.status==="aborted"||o.status==="aborted")return K;i.status==="dirty"&&e.dirty(),o.status==="dirty"&&e.dirty(),i.value!=="__proto__"&&(typeof o.value<"u"||s.alwaysSet)&&(r[i.value]=o.value)}return{status:e.value,value:r}}}const K=Object.freeze({status:"aborted"}),Er=t=>({status:"dirty",value:t}),qe=t=>({status:"valid",value:t}),Yl=t=>t.status==="aborted",Xl=t=>t.status==="dirty",Qs=t=>t.status==="valid",ei=t=>typeof Promise<"u"&&t instanceof Promise;function ea(t,e,n,r){if(typeof e=="function"?t!==e||!0:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e.get(t)}function G0(t,e,n,r,s){if(typeof e=="function"?t!==e||!0:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return e.set(t,n),n}var F;(function(t){t.errToObj=e=>typeof e=="string"?{message:e}:e||{},t.toString=e=>typeof e=="string"?e:e==null?void 0:e.message})(F||(F={}));var Es,_s;class Nt{constructor(e,n,r,s){this._cachedPath=[],this.parent=e,this.data=n,this._path=r,this._key=s}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const Xp=(t,e)=>{if(Qs(e))return{success:!0,data:e.value};if(!t.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new Xe(t.common.issues);return this._error=n,this._error}}};function Q(t){if(!t)return{};const{errorMap:e,invalid_type_error:n,required_error:r,description:s}=t;if(e&&(n||r))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:s}:{errorMap:(o,a)=>{var c,l;const{message:u}=t;return o.code==="invalid_enum_value"?{message:u??a.defaultError}:typeof a.data>"u"?{message:(c=u??r)!==null&&c!==void 0?c:a.defaultError}:o.code!=="invalid_type"?{message:a.defaultError}:{message:(l=u??n)!==null&&l!==void 0?l:a.defaultError}},description:s}}class re{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return pn(e.data)}_getOrReturnCtx(e,n){return n||{common:e.parent.common,data:e.data,parsedType:pn(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new Be,ctx:{common:e.parent.common,data:e.data,parsedType:pn(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const n=this._parse(e);if(ei(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(e){const n=this._parse(e);return Promise.resolve(n)}parse(e,n){const r=this.safeParse(e,n);if(r.success)return r.data;throw r.error}safeParse(e,n){var r;const s={common:{issues:[],async:(r=n==null?void 0:n.async)!==null&&r!==void 0?r:!1,contextualErrorMap:n==null?void 0:n.errorMap},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:pn(e)},i=this._parseSync({data:e,path:s.path,parent:s});return Xp(s,i)}async parseAsync(e,n){const r=await this.safeParseAsync(e,n);if(r.success)return r.data;throw r.error}async safeParseAsync(e,n){const r={common:{issues:[],contextualErrorMap:n==null?void 0:n.errorMap,async:!0},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:pn(e)},s=this._parse({data:e,path:r.path,parent:r}),i=await(ei(s)?s:Promise.resolve(s));return Xp(r,i)}refine(e,n){const r=s=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(s):n;return this._refinement((s,i)=>{const o=e(s),a=()=>i.addIssue({code:A.custom,...r(s)});return typeof Promise<"u"&&o instanceof Promise?o.then(c=>c?!0:(a(),!1)):o?!0:(a(),!1)})}refinement(e,n){return this._refinement((r,s)=>e(r)?!0:(s.addIssue(typeof n=="function"?n(r,s):n),!1))}_refinement(e){return new kt({schema:this,typeName:W.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return Pt.create(this,this._def)}nullable(){return An.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return xt.create(this,this._def)}promise(){return qr.create(this,this._def)}or(e){return si.create([this,e],this._def)}and(e){return ii.create(this,e,this._def)}transform(e){return new kt({...Q(this._def),schema:this,typeName:W.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const n=typeof e=="function"?e:()=>e;return new ui({...Q(this._def),innerType:this,defaultValue:n,typeName:W.ZodDefault})}brand(){return new bd({typeName:W.ZodBranded,type:this,...Q(this._def)})}catch(e){const n=typeof e=="function"?e:()=>e;return new di({...Q(this._def),innerType:this,catchValue:n,typeName:W.ZodCatch})}describe(e){const n=this.constructor;return new n({...this._def,description:e})}pipe(e){return ji.create(this,e)}readonly(){return hi.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const r5=/^c[^\s-]{8,}$/i,s5=/^[0-9a-z]+$/,i5=/^[0-9A-HJKMNP-TV-Z]{26}$/,o5=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,a5=/^[a-z0-9_-]{21}$/i,c5=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,l5=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,u5="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let zc;const d5=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,h5=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,f5=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,Z0="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",p5=new RegExp(`^${Z0}$`);function J0(t){let e="([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";return t.precision?e=`${e}\\.\\d{${t.precision}}`:t.precision==null&&(e=`${e}(\\.\\d+)?`),e}function m5(t){return new RegExp(`^${J0(t)}$`)}function Y0(t){let e=`${Z0}T${J0(t)}`;const n=[];return n.push(t.local?"Z?":"Z"),t.offset&&n.push("([+-]\\d{2}:?\\d{2})"),e=`${e}(${n.join("|")})`,new RegExp(`^${e}$`)}function g5(t,e){return!!((e==="v4"||!e)&&d5.test(t)||(e==="v6"||!e)&&h5.test(t))}class gt extends re{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==L.string){const i=this._getOrReturnCtx(e);return N(i,{code:A.invalid_type,expected:L.string,received:i.parsedType}),K}const r=new Be;let s;for(const i of this._def.checks)if(i.kind==="min")e.data.length<i.value&&(s=this._getOrReturnCtx(e,s),N(s,{code:A.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),r.dirty());else if(i.kind==="max")e.data.length>i.value&&(s=this._getOrReturnCtx(e,s),N(s,{code:A.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),r.dirty());else if(i.kind==="length"){const o=e.data.length>i.value,a=e.data.length<i.value;(o||a)&&(s=this._getOrReturnCtx(e,s),o?N(s,{code:A.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}):a&&N(s,{code:A.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}),r.dirty())}else if(i.kind==="email")l5.test(e.data)||(s=this._getOrReturnCtx(e,s),N(s,{validation:"email",code:A.invalid_string,message:i.message}),r.dirty());else if(i.kind==="emoji")zc||(zc=new RegExp(u5,"u")),zc.test(e.data)||(s=this._getOrReturnCtx(e,s),N(s,{validation:"emoji",code:A.invalid_string,message:i.message}),r.dirty());else if(i.kind==="uuid")o5.test(e.data)||(s=this._getOrReturnCtx(e,s),N(s,{validation:"uuid",code:A.invalid_string,message:i.message}),r.dirty());else if(i.kind==="nanoid")a5.test(e.data)||(s=this._getOrReturnCtx(e,s),N(s,{validation:"nanoid",code:A.invalid_string,message:i.message}),r.dirty());else if(i.kind==="cuid")r5.test(e.data)||(s=this._getOrReturnCtx(e,s),N(s,{validation:"cuid",code:A.invalid_string,message:i.message}),r.dirty());else if(i.kind==="cuid2")s5.test(e.data)||(s=this._getOrReturnCtx(e,s),N(s,{validation:"cuid2",code:A.invalid_string,message:i.message}),r.dirty());else if(i.kind==="ulid")i5.test(e.data)||(s=this._getOrReturnCtx(e,s),N(s,{validation:"ulid",code:A.invalid_string,message:i.message}),r.dirty());else if(i.kind==="url")try{new URL(e.data)}catch{s=this._getOrReturnCtx(e,s),N(s,{validation:"url",code:A.invalid_string,message:i.message}),r.dirty()}else i.kind==="regex"?(i.regex.lastIndex=0,i.regex.test(e.data)||(s=this._getOrReturnCtx(e,s),N(s,{validation:"regex",code:A.invalid_string,message:i.message}),r.dirty())):i.kind==="trim"?e.data=e.data.trim():i.kind==="includes"?e.data.includes(i.value,i.position)||(s=this._getOrReturnCtx(e,s),N(s,{code:A.invalid_string,validation:{includes:i.value,position:i.position},message:i.message}),r.dirty()):i.kind==="toLowerCase"?e.data=e.data.toLowerCase():i.kind==="toUpperCase"?e.data=e.data.toUpperCase():i.kind==="startsWith"?e.data.startsWith(i.value)||(s=this._getOrReturnCtx(e,s),N(s,{code:A.invalid_string,validation:{startsWith:i.value},message:i.message}),r.dirty()):i.kind==="endsWith"?e.data.endsWith(i.value)||(s=this._getOrReturnCtx(e,s),N(s,{code:A.invalid_string,validation:{endsWith:i.value},message:i.message}),r.dirty()):i.kind==="datetime"?Y0(i).test(e.data)||(s=this._getOrReturnCtx(e,s),N(s,{code:A.invalid_string,validation:"datetime",message:i.message}),r.dirty()):i.kind==="date"?p5.test(e.data)||(s=this._getOrReturnCtx(e,s),N(s,{code:A.invalid_string,validation:"date",message:i.message}),r.dirty()):i.kind==="time"?m5(i).test(e.data)||(s=this._getOrReturnCtx(e,s),N(s,{code:A.invalid_string,validation:"time",message:i.message}),r.dirty()):i.kind==="duration"?c5.test(e.data)||(s=this._getOrReturnCtx(e,s),N(s,{validation:"duration",code:A.invalid_string,message:i.message}),r.dirty()):i.kind==="ip"?g5(e.data,i.version)||(s=this._getOrReturnCtx(e,s),N(s,{validation:"ip",code:A.invalid_string,message:i.message}),r.dirty()):i.kind==="base64"?f5.test(e.data)||(s=this._getOrReturnCtx(e,s),N(s,{validation:"base64",code:A.invalid_string,message:i.message}),r.dirty()):ie.assertNever(i);return{status:r.value,value:e.data}}_regex(e,n,r){return this.refinement(s=>e.test(s),{validation:n,code:A.invalid_string,...F.errToObj(r)})}_addCheck(e){return new gt({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...F.errToObj(e)})}url(e){return this._addCheck({kind:"url",...F.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...F.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...F.errToObj(e)})}nanoid(e){return this._addCheck({kind:"nanoid",...F.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...F.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...F.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...F.errToObj(e)})}base64(e){return this._addCheck({kind:"base64",...F.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...F.errToObj(e)})}datetime(e){var n,r;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,offset:(n=e==null?void 0:e.offset)!==null&&n!==void 0?n:!1,local:(r=e==null?void 0:e.local)!==null&&r!==void 0?r:!1,...F.errToObj(e==null?void 0:e.message)})}date(e){return this._addCheck({kind:"date",message:e})}time(e){return typeof e=="string"?this._addCheck({kind:"time",precision:null,message:e}):this._addCheck({kind:"time",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,...F.errToObj(e==null?void 0:e.message)})}duration(e){return this._addCheck({kind:"duration",...F.errToObj(e)})}regex(e,n){return this._addCheck({kind:"regex",regex:e,...F.errToObj(n)})}includes(e,n){return this._addCheck({kind:"includes",value:e,position:n==null?void 0:n.position,...F.errToObj(n==null?void 0:n.message)})}startsWith(e,n){return this._addCheck({kind:"startsWith",value:e,...F.errToObj(n)})}endsWith(e,n){return this._addCheck({kind:"endsWith",value:e,...F.errToObj(n)})}min(e,n){return this._addCheck({kind:"min",value:e,...F.errToObj(n)})}max(e,n){return this._addCheck({kind:"max",value:e,...F.errToObj(n)})}length(e,n){return this._addCheck({kind:"length",value:e,...F.errToObj(n)})}nonempty(e){return this.min(1,F.errToObj(e))}trim(){return new gt({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new gt({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new gt({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isDate(){return!!this._def.checks.find(e=>e.kind==="date")}get isTime(){return!!this._def.checks.find(e=>e.kind==="time")}get isDuration(){return!!this._def.checks.find(e=>e.kind==="duration")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(e=>e.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get isBase64(){return!!this._def.checks.find(e=>e.kind==="base64")}get minLength(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxLength(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}}gt.create=t=>{var e;return new gt({checks:[],typeName:W.ZodString,coerce:(e=t==null?void 0:t.coerce)!==null&&e!==void 0?e:!1,...Q(t)})};function y5(t,e){const n=(t.toString().split(".")[1]||"").length,r=(e.toString().split(".")[1]||"").length,s=n>r?n:r,i=parseInt(t.toFixed(s).replace(".","")),o=parseInt(e.toFixed(s).replace(".",""));return i%o/Math.pow(10,s)}class Tn extends re{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==L.number){const i=this._getOrReturnCtx(e);return N(i,{code:A.invalid_type,expected:L.number,received:i.parsedType}),K}let r;const s=new Be;for(const i of this._def.checks)i.kind==="int"?ie.isInteger(e.data)||(r=this._getOrReturnCtx(e,r),N(r,{code:A.invalid_type,expected:"integer",received:"float",message:i.message}),s.dirty()):i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(r=this._getOrReturnCtx(e,r),N(r,{code:A.too_small,minimum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),s.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(r=this._getOrReturnCtx(e,r),N(r,{code:A.too_big,maximum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),s.dirty()):i.kind==="multipleOf"?y5(e.data,i.value)!==0&&(r=this._getOrReturnCtx(e,r),N(r,{code:A.not_multiple_of,multipleOf:i.value,message:i.message}),s.dirty()):i.kind==="finite"?Number.isFinite(e.data)||(r=this._getOrReturnCtx(e,r),N(r,{code:A.not_finite,message:i.message}),s.dirty()):ie.assertNever(i);return{status:s.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,F.toString(n))}gt(e,n){return this.setLimit("min",e,!1,F.toString(n))}lte(e,n){return this.setLimit("max",e,!0,F.toString(n))}lt(e,n){return this.setLimit("max",e,!1,F.toString(n))}setLimit(e,n,r,s){return new Tn({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:r,message:F.toString(s)}]})}_addCheck(e){return new Tn({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:F.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:F.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:F.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:F.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:F.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:F.toString(n)})}finite(e){return this._addCheck({kind:"finite",message:F.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:F.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:F.toString(e)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&ie.isInteger(e.value))}get isFinite(){let e=null,n=null;for(const r of this._def.checks){if(r.kind==="finite"||r.kind==="int"||r.kind==="multipleOf")return!0;r.kind==="min"?(n===null||r.value>n)&&(n=r.value):r.kind==="max"&&(e===null||r.value<e)&&(e=r.value)}return Number.isFinite(n)&&Number.isFinite(e)}}Tn.create=t=>new Tn({checks:[],typeName:W.ZodNumber,coerce:(t==null?void 0:t.coerce)||!1,...Q(t)});class Cn extends re{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==L.bigint){const i=this._getOrReturnCtx(e);return N(i,{code:A.invalid_type,expected:L.bigint,received:i.parsedType}),K}let r;const s=new Be;for(const i of this._def.checks)i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(r=this._getOrReturnCtx(e,r),N(r,{code:A.too_small,type:"bigint",minimum:i.value,inclusive:i.inclusive,message:i.message}),s.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(r=this._getOrReturnCtx(e,r),N(r,{code:A.too_big,type:"bigint",maximum:i.value,inclusive:i.inclusive,message:i.message}),s.dirty()):i.kind==="multipleOf"?e.data%i.value!==BigInt(0)&&(r=this._getOrReturnCtx(e,r),N(r,{code:A.not_multiple_of,multipleOf:i.value,message:i.message}),s.dirty()):ie.assertNever(i);return{status:s.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,F.toString(n))}gt(e,n){return this.setLimit("min",e,!1,F.toString(n))}lte(e,n){return this.setLimit("max",e,!0,F.toString(n))}lt(e,n){return this.setLimit("max",e,!1,F.toString(n))}setLimit(e,n,r,s){return new Cn({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:r,message:F.toString(s)}]})}_addCheck(e){return new Cn({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:F.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:F.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:F.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:F.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:F.toString(n)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}}Cn.create=t=>{var e;return new Cn({checks:[],typeName:W.ZodBigInt,coerce:(e=t==null?void 0:t.coerce)!==null&&e!==void 0?e:!1,...Q(t)})};class ti extends re{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==L.boolean){const r=this._getOrReturnCtx(e);return N(r,{code:A.invalid_type,expected:L.boolean,received:r.parsedType}),K}return qe(e.data)}}ti.create=t=>new ti({typeName:W.ZodBoolean,coerce:(t==null?void 0:t.coerce)||!1,...Q(t)});class sr extends re{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==L.date){const i=this._getOrReturnCtx(e);return N(i,{code:A.invalid_type,expected:L.date,received:i.parsedType}),K}if(isNaN(e.data.getTime())){const i=this._getOrReturnCtx(e);return N(i,{code:A.invalid_date}),K}const r=new Be;let s;for(const i of this._def.checks)i.kind==="min"?e.data.getTime()<i.value&&(s=this._getOrReturnCtx(e,s),N(s,{code:A.too_small,message:i.message,inclusive:!0,exact:!1,minimum:i.value,type:"date"}),r.dirty()):i.kind==="max"?e.data.getTime()>i.value&&(s=this._getOrReturnCtx(e,s),N(s,{code:A.too_big,message:i.message,inclusive:!0,exact:!1,maximum:i.value,type:"date"}),r.dirty()):ie.assertNever(i);return{status:r.value,value:new Date(e.data.getTime())}}_addCheck(e){return new sr({...this._def,checks:[...this._def.checks,e]})}min(e,n){return this._addCheck({kind:"min",value:e.getTime(),message:F.toString(n)})}max(e,n){return this._addCheck({kind:"max",value:e.getTime(),message:F.toString(n)})}get minDate(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e!=null?new Date(e):null}}sr.create=t=>new sr({checks:[],coerce:(t==null?void 0:t.coerce)||!1,typeName:W.ZodDate,...Q(t)});class ta extends re{_parse(e){if(this._getType(e)!==L.symbol){const r=this._getOrReturnCtx(e);return N(r,{code:A.invalid_type,expected:L.symbol,received:r.parsedType}),K}return qe(e.data)}}ta.create=t=>new ta({typeName:W.ZodSymbol,...Q(t)});class ni extends re{_parse(e){if(this._getType(e)!==L.undefined){const r=this._getOrReturnCtx(e);return N(r,{code:A.invalid_type,expected:L.undefined,received:r.parsedType}),K}return qe(e.data)}}ni.create=t=>new ni({typeName:W.ZodUndefined,...Q(t)});class ri extends re{_parse(e){if(this._getType(e)!==L.null){const r=this._getOrReturnCtx(e);return N(r,{code:A.invalid_type,expected:L.null,received:r.parsedType}),K}return qe(e.data)}}ri.create=t=>new ri({typeName:W.ZodNull,...Q(t)});class Wr extends re{constructor(){super(...arguments),this._any=!0}_parse(e){return qe(e.data)}}Wr.create=t=>new Wr({typeName:W.ZodAny,...Q(t)});class Yn extends re{constructor(){super(...arguments),this._unknown=!0}_parse(e){return qe(e.data)}}Yn.create=t=>new Yn({typeName:W.ZodUnknown,...Q(t)});class tn extends re{_parse(e){const n=this._getOrReturnCtx(e);return N(n,{code:A.invalid_type,expected:L.never,received:n.parsedType}),K}}tn.create=t=>new tn({typeName:W.ZodNever,...Q(t)});class na extends re{_parse(e){if(this._getType(e)!==L.undefined){const r=this._getOrReturnCtx(e);return N(r,{code:A.invalid_type,expected:L.void,received:r.parsedType}),K}return qe(e.data)}}na.create=t=>new na({typeName:W.ZodVoid,...Q(t)});class xt extends re{_parse(e){const{ctx:n,status:r}=this._processInputParams(e),s=this._def;if(n.parsedType!==L.array)return N(n,{code:A.invalid_type,expected:L.array,received:n.parsedType}),K;if(s.exactLength!==null){const o=n.data.length>s.exactLength.value,a=n.data.length<s.exactLength.value;(o||a)&&(N(n,{code:o?A.too_big:A.too_small,minimum:a?s.exactLength.value:void 0,maximum:o?s.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:s.exactLength.message}),r.dirty())}if(s.minLength!==null&&n.data.length<s.minLength.value&&(N(n,{code:A.too_small,minimum:s.minLength.value,type:"array",inclusive:!0,exact:!1,message:s.minLength.message}),r.dirty()),s.maxLength!==null&&n.data.length>s.maxLength.value&&(N(n,{code:A.too_big,maximum:s.maxLength.value,type:"array",inclusive:!0,exact:!1,message:s.maxLength.message}),r.dirty()),n.common.async)return Promise.all([...n.data].map((o,a)=>s.type._parseAsync(new Nt(n,o,n.path,a)))).then(o=>Be.mergeArray(r,o));const i=[...n.data].map((o,a)=>s.type._parseSync(new Nt(n,o,n.path,a)));return Be.mergeArray(r,i)}get element(){return this._def.type}min(e,n){return new xt({...this._def,minLength:{value:e,message:F.toString(n)}})}max(e,n){return new xt({...this._def,maxLength:{value:e,message:F.toString(n)}})}length(e,n){return new xt({...this._def,exactLength:{value:e,message:F.toString(n)}})}nonempty(e){return this.min(1,e)}}xt.create=(t,e)=>new xt({type:t,minLength:null,maxLength:null,exactLength:null,typeName:W.ZodArray,...Q(e)});function yr(t){if(t instanceof ye){const e={};for(const n in t.shape){const r=t.shape[n];e[n]=Pt.create(yr(r))}return new ye({...t._def,shape:()=>e})}else return t instanceof xt?new xt({...t._def,type:yr(t.element)}):t instanceof Pt?Pt.create(yr(t.unwrap())):t instanceof An?An.create(yr(t.unwrap())):t instanceof Lt?Lt.create(t.items.map(e=>yr(e))):t}class ye extends re{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),n=ie.objectKeys(e);return this._cached={shape:e,keys:n}}_parse(e){if(this._getType(e)!==L.object){const l=this._getOrReturnCtx(e);return N(l,{code:A.invalid_type,expected:L.object,received:l.parsedType}),K}const{status:r,ctx:s}=this._processInputParams(e),{shape:i,keys:o}=this._getCached(),a=[];if(!(this._def.catchall instanceof tn&&this._def.unknownKeys==="strip"))for(const l in s.data)o.includes(l)||a.push(l);const c=[];for(const l of o){const u=i[l],h=s.data[l];c.push({key:{status:"valid",value:l},value:u._parse(new Nt(s,h,s.path,l)),alwaysSet:l in s.data})}if(this._def.catchall instanceof tn){const l=this._def.unknownKeys;if(l==="passthrough")for(const u of a)c.push({key:{status:"valid",value:u},value:{status:"valid",value:s.data[u]}});else if(l==="strict")a.length>0&&(N(s,{code:A.unrecognized_keys,keys:a}),r.dirty());else if(l!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const l=this._def.catchall;for(const u of a){const h=s.data[u];c.push({key:{status:"valid",value:u},value:l._parse(new Nt(s,h,s.path,u)),alwaysSet:u in s.data})}}return s.common.async?Promise.resolve().then(async()=>{const l=[];for(const u of c){const h=await u.key,f=await u.value;l.push({key:h,value:f,alwaysSet:u.alwaysSet})}return l}).then(l=>Be.mergeObjectSync(r,l)):Be.mergeObjectSync(r,c)}get shape(){return this._def.shape()}strict(e){return F.errToObj,new ye({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(n,r)=>{var s,i,o,a;const c=(o=(i=(s=this._def).errorMap)===null||i===void 0?void 0:i.call(s,n,r).message)!==null&&o!==void 0?o:r.defaultError;return n.code==="unrecognized_keys"?{message:(a=F.errToObj(e).message)!==null&&a!==void 0?a:c}:{message:c}}}:{}})}strip(){return new ye({...this._def,unknownKeys:"strip"})}passthrough(){return new ye({...this._def,unknownKeys:"passthrough"})}extend(e){return new ye({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new ye({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:W.ZodObject})}setKey(e,n){return this.augment({[e]:n})}catchall(e){return new ye({...this._def,catchall:e})}pick(e){const n={};return ie.objectKeys(e).forEach(r=>{e[r]&&this.shape[r]&&(n[r]=this.shape[r])}),new ye({...this._def,shape:()=>n})}omit(e){const n={};return ie.objectKeys(this.shape).forEach(r=>{e[r]||(n[r]=this.shape[r])}),new ye({...this._def,shape:()=>n})}deepPartial(){return yr(this)}partial(e){const n={};return ie.objectKeys(this.shape).forEach(r=>{const s=this.shape[r];e&&!e[r]?n[r]=s:n[r]=s.optional()}),new ye({...this._def,shape:()=>n})}required(e){const n={};return ie.objectKeys(this.shape).forEach(r=>{if(e&&!e[r])n[r]=this.shape[r];else{let i=this.shape[r];for(;i instanceof Pt;)i=i._def.innerType;n[r]=i}}),new ye({...this._def,shape:()=>n})}keyof(){return X0(ie.objectKeys(this.shape))}}ye.create=(t,e)=>new ye({shape:()=>t,unknownKeys:"strip",catchall:tn.create(),typeName:W.ZodObject,...Q(e)});ye.strictCreate=(t,e)=>new ye({shape:()=>t,unknownKeys:"strict",catchall:tn.create(),typeName:W.ZodObject,...Q(e)});ye.lazycreate=(t,e)=>new ye({shape:t,unknownKeys:"strip",catchall:tn.create(),typeName:W.ZodObject,...Q(e)});class si extends re{_parse(e){const{ctx:n}=this._processInputParams(e),r=this._def.options;function s(i){for(const a of i)if(a.result.status==="valid")return a.result;for(const a of i)if(a.result.status==="dirty")return n.common.issues.push(...a.ctx.common.issues),a.result;const o=i.map(a=>new Xe(a.ctx.common.issues));return N(n,{code:A.invalid_union,unionErrors:o}),K}if(n.common.async)return Promise.all(r.map(async i=>{const o={...n,common:{...n.common,issues:[]},parent:null};return{result:await i._parseAsync({data:n.data,path:n.path,parent:o}),ctx:o}})).then(s);{let i;const o=[];for(const c of r){const l={...n,common:{...n.common,issues:[]},parent:null},u=c._parseSync({data:n.data,path:n.path,parent:l});if(u.status==="valid")return u;u.status==="dirty"&&!i&&(i={result:u,ctx:l}),l.common.issues.length&&o.push(l.common.issues)}if(i)return n.common.issues.push(...i.ctx.common.issues),i.result;const a=o.map(c=>new Xe(c));return N(n,{code:A.invalid_union,unionErrors:a}),K}}get options(){return this._def.options}}si.create=(t,e)=>new si({options:t,typeName:W.ZodUnion,...Q(e)});const $t=t=>t instanceof ai?$t(t.schema):t instanceof kt?$t(t.innerType()):t instanceof ci?[t.value]:t instanceof Rn?t.options:t instanceof li?ie.objectValues(t.enum):t instanceof ui?$t(t._def.innerType):t instanceof ni?[void 0]:t instanceof ri?[null]:t instanceof Pt?[void 0,...$t(t.unwrap())]:t instanceof An?[null,...$t(t.unwrap())]:t instanceof bd||t instanceof hi?$t(t.unwrap()):t instanceof di?$t(t._def.innerType):[];class Fa extends re{_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==L.object)return N(n,{code:A.invalid_type,expected:L.object,received:n.parsedType}),K;const r=this.discriminator,s=n.data[r],i=this.optionsMap.get(s);return i?n.common.async?i._parseAsync({data:n.data,path:n.path,parent:n}):i._parseSync({data:n.data,path:n.path,parent:n}):(N(n,{code:A.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),K)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,n,r){const s=new Map;for(const i of n){const o=$t(i.shape[e]);if(!o.length)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const a of o){if(s.has(a))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);s.set(a,i)}}return new Fa({typeName:W.ZodDiscriminatedUnion,discriminator:e,options:n,optionsMap:s,...Q(r)})}}function Ql(t,e){const n=pn(t),r=pn(e);if(t===e)return{valid:!0,data:t};if(n===L.object&&r===L.object){const s=ie.objectKeys(e),i=ie.objectKeys(t).filter(a=>s.indexOf(a)!==-1),o={...t,...e};for(const a of i){const c=Ql(t[a],e[a]);if(!c.valid)return{valid:!1};o[a]=c.data}return{valid:!0,data:o}}else if(n===L.array&&r===L.array){if(t.length!==e.length)return{valid:!1};const s=[];for(let i=0;i<t.length;i++){const o=t[i],a=e[i],c=Ql(o,a);if(!c.valid)return{valid:!1};s.push(c.data)}return{valid:!0,data:s}}else return n===L.date&&r===L.date&&+t==+e?{valid:!0,data:t}:{valid:!1}}class ii extends re{_parse(e){const{status:n,ctx:r}=this._processInputParams(e),s=(i,o)=>{if(Yl(i)||Yl(o))return K;const a=Ql(i.value,o.value);return a.valid?((Xl(i)||Xl(o))&&n.dirty(),{status:n.value,value:a.data}):(N(r,{code:A.invalid_intersection_types}),K)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([i,o])=>s(i,o)):s(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}}ii.create=(t,e,n)=>new ii({left:t,right:e,typeName:W.ZodIntersection,...Q(n)});class Lt extends re{_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==L.array)return N(r,{code:A.invalid_type,expected:L.array,received:r.parsedType}),K;if(r.data.length<this._def.items.length)return N(r,{code:A.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),K;!this._def.rest&&r.data.length>this._def.items.length&&(N(r,{code:A.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const i=[...r.data].map((o,a)=>{const c=this._def.items[a]||this._def.rest;return c?c._parse(new Nt(r,o,r.path,a)):null}).filter(o=>!!o);return r.common.async?Promise.all(i).then(o=>Be.mergeArray(n,o)):Be.mergeArray(n,i)}get items(){return this._def.items}rest(e){return new Lt({...this._def,rest:e})}}Lt.create=(t,e)=>{if(!Array.isArray(t))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Lt({items:t,typeName:W.ZodTuple,rest:null,...Q(e)})};class oi extends re{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==L.object)return N(r,{code:A.invalid_type,expected:L.object,received:r.parsedType}),K;const s=[],i=this._def.keyType,o=this._def.valueType;for(const a in r.data)s.push({key:i._parse(new Nt(r,a,r.path,a)),value:o._parse(new Nt(r,r.data[a],r.path,a)),alwaysSet:a in r.data});return r.common.async?Be.mergeObjectAsync(n,s):Be.mergeObjectSync(n,s)}get element(){return this._def.valueType}static create(e,n,r){return n instanceof re?new oi({keyType:e,valueType:n,typeName:W.ZodRecord,...Q(r)}):new oi({keyType:gt.create(),valueType:e,typeName:W.ZodRecord,...Q(n)})}}class ra extends re{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==L.map)return N(r,{code:A.invalid_type,expected:L.map,received:r.parsedType}),K;const s=this._def.keyType,i=this._def.valueType,o=[...r.data.entries()].map(([a,c],l)=>({key:s._parse(new Nt(r,a,r.path,[l,"key"])),value:i._parse(new Nt(r,c,r.path,[l,"value"]))}));if(r.common.async){const a=new Map;return Promise.resolve().then(async()=>{for(const c of o){const l=await c.key,u=await c.value;if(l.status==="aborted"||u.status==="aborted")return K;(l.status==="dirty"||u.status==="dirty")&&n.dirty(),a.set(l.value,u.value)}return{status:n.value,value:a}})}else{const a=new Map;for(const c of o){const l=c.key,u=c.value;if(l.status==="aborted"||u.status==="aborted")return K;(l.status==="dirty"||u.status==="dirty")&&n.dirty(),a.set(l.value,u.value)}return{status:n.value,value:a}}}}ra.create=(t,e,n)=>new ra({valueType:e,keyType:t,typeName:W.ZodMap,...Q(n)});class ir extends re{_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==L.set)return N(r,{code:A.invalid_type,expected:L.set,received:r.parsedType}),K;const s=this._def;s.minSize!==null&&r.data.size<s.minSize.value&&(N(r,{code:A.too_small,minimum:s.minSize.value,type:"set",inclusive:!0,exact:!1,message:s.minSize.message}),n.dirty()),s.maxSize!==null&&r.data.size>s.maxSize.value&&(N(r,{code:A.too_big,maximum:s.maxSize.value,type:"set",inclusive:!0,exact:!1,message:s.maxSize.message}),n.dirty());const i=this._def.valueType;function o(c){const l=new Set;for(const u of c){if(u.status==="aborted")return K;u.status==="dirty"&&n.dirty(),l.add(u.value)}return{status:n.value,value:l}}const a=[...r.data.values()].map((c,l)=>i._parse(new Nt(r,c,r.path,l)));return r.common.async?Promise.all(a).then(c=>o(c)):o(a)}min(e,n){return new ir({...this._def,minSize:{value:e,message:F.toString(n)}})}max(e,n){return new ir({...this._def,maxSize:{value:e,message:F.toString(n)}})}size(e,n){return this.min(e,n).max(e,n)}nonempty(e){return this.min(1,e)}}ir.create=(t,e)=>new ir({valueType:t,minSize:null,maxSize:null,typeName:W.ZodSet,...Q(e)});class Nr extends re{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==L.function)return N(n,{code:A.invalid_type,expected:L.function,received:n.parsedType}),K;function r(a,c){return Qo({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Xo(),zr].filter(l=>!!l),issueData:{code:A.invalid_arguments,argumentsError:c}})}function s(a,c){return Qo({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Xo(),zr].filter(l=>!!l),issueData:{code:A.invalid_return_type,returnTypeError:c}})}const i={errorMap:n.common.contextualErrorMap},o=n.data;if(this._def.returns instanceof qr){const a=this;return qe(async function(...c){const l=new Xe([]),u=await a._def.args.parseAsync(c,i).catch(p=>{throw l.addIssue(r(c,p)),l}),h=await Reflect.apply(o,this,u);return await a._def.returns._def.type.parseAsync(h,i).catch(p=>{throw l.addIssue(s(h,p)),l})})}else{const a=this;return qe(function(...c){const l=a._def.args.safeParse(c,i);if(!l.success)throw new Xe([r(c,l.error)]);const u=Reflect.apply(o,this,l.data),h=a._def.returns.safeParse(u,i);if(!h.success)throw new Xe([s(u,h.error)]);return h.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new Nr({...this._def,args:Lt.create(e).rest(Yn.create())})}returns(e){return new Nr({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,n,r){return new Nr({args:e||Lt.create([]).rest(Yn.create()),returns:n||Yn.create(),typeName:W.ZodFunction,...Q(r)})}}class ai extends re{get schema(){return this._def.getter()}_parse(e){const{ctx:n}=this._processInputParams(e);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}ai.create=(t,e)=>new ai({getter:t,typeName:W.ZodLazy,...Q(e)});class ci extends re{_parse(e){if(e.data!==this._def.value){const n=this._getOrReturnCtx(e);return N(n,{received:n.data,code:A.invalid_literal,expected:this._def.value}),K}return{status:"valid",value:e.data}}get value(){return this._def.value}}ci.create=(t,e)=>new ci({value:t,typeName:W.ZodLiteral,...Q(e)});function X0(t,e){return new Rn({values:t,typeName:W.ZodEnum,...Q(e)})}class Rn extends re{constructor(){super(...arguments),Es.set(this,void 0)}_parse(e){if(typeof e.data!="string"){const n=this._getOrReturnCtx(e),r=this._def.values;return N(n,{expected:ie.joinValues(r),received:n.parsedType,code:A.invalid_type}),K}if(ea(this,Es)||G0(this,Es,new Set(this._def.values)),!ea(this,Es).has(e.data)){const n=this._getOrReturnCtx(e),r=this._def.values;return N(n,{received:n.data,code:A.invalid_enum_value,options:r}),K}return qe(e.data)}get options(){return this._def.values}get enum(){const e={};for(const n of this._def.values)e[n]=n;return e}get Values(){const e={};for(const n of this._def.values)e[n]=n;return e}get Enum(){const e={};for(const n of this._def.values)e[n]=n;return e}extract(e,n=this._def){return Rn.create(e,{...this._def,...n})}exclude(e,n=this._def){return Rn.create(this.options.filter(r=>!e.includes(r)),{...this._def,...n})}}Es=new WeakMap;Rn.create=X0;class li extends re{constructor(){super(...arguments),_s.set(this,void 0)}_parse(e){const n=ie.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(e);if(r.parsedType!==L.string&&r.parsedType!==L.number){const s=ie.objectValues(n);return N(r,{expected:ie.joinValues(s),received:r.parsedType,code:A.invalid_type}),K}if(ea(this,_s)||G0(this,_s,new Set(ie.getValidEnumValues(this._def.values))),!ea(this,_s).has(e.data)){const s=ie.objectValues(n);return N(r,{received:r.data,code:A.invalid_enum_value,options:s}),K}return qe(e.data)}get enum(){return this._def.values}}_s=new WeakMap;li.create=(t,e)=>new li({values:t,typeName:W.ZodNativeEnum,...Q(e)});class qr extends re{unwrap(){return this._def.type}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==L.promise&&n.common.async===!1)return N(n,{code:A.invalid_type,expected:L.promise,received:n.parsedType}),K;const r=n.parsedType===L.promise?n.data:Promise.resolve(n.data);return qe(r.then(s=>this._def.type.parseAsync(s,{path:n.path,errorMap:n.common.contextualErrorMap})))}}qr.create=(t,e)=>new qr({type:t,typeName:W.ZodPromise,...Q(e)});class kt extends re{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===W.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:n,ctx:r}=this._processInputParams(e),s=this._def.effect||null,i={addIssue:o=>{N(r,o),o.fatal?n.abort():n.dirty()},get path(){return r.path}};if(i.addIssue=i.addIssue.bind(i),s.type==="preprocess"){const o=s.transform(r.data,i);if(r.common.async)return Promise.resolve(o).then(async a=>{if(n.value==="aborted")return K;const c=await this._def.schema._parseAsync({data:a,path:r.path,parent:r});return c.status==="aborted"?K:c.status==="dirty"||n.value==="dirty"?Er(c.value):c});{if(n.value==="aborted")return K;const a=this._def.schema._parseSync({data:o,path:r.path,parent:r});return a.status==="aborted"?K:a.status==="dirty"||n.value==="dirty"?Er(a.value):a}}if(s.type==="refinement"){const o=a=>{const c=s.refinement(a,i);if(r.common.async)return Promise.resolve(c);if(c instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return a};if(r.common.async===!1){const a=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return a.status==="aborted"?K:(a.status==="dirty"&&n.dirty(),o(a.value),{status:n.value,value:a.value})}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(a=>a.status==="aborted"?K:(a.status==="dirty"&&n.dirty(),o(a.value).then(()=>({status:n.value,value:a.value}))))}if(s.type==="transform")if(r.common.async===!1){const o=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!Qs(o))return o;const a=s.transform(o.value,i);if(a instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:a}}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(o=>Qs(o)?Promise.resolve(s.transform(o.value,i)).then(a=>({status:n.value,value:a})):o);ie.assertNever(s)}}kt.create=(t,e,n)=>new kt({schema:t,typeName:W.ZodEffects,effect:e,...Q(n)});kt.createWithPreprocess=(t,e,n)=>new kt({schema:e,effect:{type:"preprocess",transform:t},typeName:W.ZodEffects,...Q(n)});class Pt extends re{_parse(e){return this._getType(e)===L.undefined?qe(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}Pt.create=(t,e)=>new Pt({innerType:t,typeName:W.ZodOptional,...Q(e)});class An extends re{_parse(e){return this._getType(e)===L.null?qe(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}An.create=(t,e)=>new An({innerType:t,typeName:W.ZodNullable,...Q(e)});class ui extends re{_parse(e){const{ctx:n}=this._processInputParams(e);let r=n.data;return n.parsedType===L.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}ui.create=(t,e)=>new ui({innerType:t,typeName:W.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...Q(e)});class di extends re{_parse(e){const{ctx:n}=this._processInputParams(e),r={...n,common:{...n.common,issues:[]}},s=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return ei(s)?s.then(i=>({status:"valid",value:i.status==="valid"?i.value:this._def.catchValue({get error(){return new Xe(r.common.issues)},input:r.data})})):{status:"valid",value:s.status==="valid"?s.value:this._def.catchValue({get error(){return new Xe(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}}di.create=(t,e)=>new di({innerType:t,typeName:W.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...Q(e)});class sa extends re{_parse(e){if(this._getType(e)!==L.nan){const r=this._getOrReturnCtx(e);return N(r,{code:A.invalid_type,expected:L.nan,received:r.parsedType}),K}return{status:"valid",value:e.data}}}sa.create=t=>new sa({typeName:W.ZodNaN,...Q(t)});const v5=Symbol("zod_brand");class bd extends re{_parse(e){const{ctx:n}=this._processInputParams(e),r=n.data;return this._def.type._parse({data:r,path:n.path,parent:n})}unwrap(){return this._def.type}}class ji extends re{_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.common.async)return(async()=>{const i=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return i.status==="aborted"?K:i.status==="dirty"?(n.dirty(),Er(i.value)):this._def.out._parseAsync({data:i.value,path:r.path,parent:r})})();{const s=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return s.status==="aborted"?K:s.status==="dirty"?(n.dirty(),{status:"dirty",value:s.value}):this._def.out._parseSync({data:s.value,path:r.path,parent:r})}}static create(e,n){return new ji({in:e,out:n,typeName:W.ZodPipeline})}}class hi extends re{_parse(e){const n=this._def.innerType._parse(e),r=s=>(Qs(s)&&(s.value=Object.freeze(s.value)),s);return ei(n)?n.then(s=>r(s)):r(n)}unwrap(){return this._def.innerType}}hi.create=(t,e)=>new hi({innerType:t,typeName:W.ZodReadonly,...Q(e)});function Q0(t,e={},n){return t?Wr.create().superRefine((r,s)=>{var i,o;if(!t(r)){const a=typeof e=="function"?e(r):typeof e=="string"?{message:e}:e,c=(o=(i=a.fatal)!==null&&i!==void 0?i:n)!==null&&o!==void 0?o:!0,l=typeof a=="string"?{message:a}:a;s.addIssue({code:"custom",...l,fatal:c})}}):Wr.create()}const b5={object:ye.lazycreate};var W;(function(t){t.ZodString="ZodString",t.ZodNumber="ZodNumber",t.ZodNaN="ZodNaN",t.ZodBigInt="ZodBigInt",t.ZodBoolean="ZodBoolean",t.ZodDate="ZodDate",t.ZodSymbol="ZodSymbol",t.ZodUndefined="ZodUndefined",t.ZodNull="ZodNull",t.ZodAny="ZodAny",t.ZodUnknown="ZodUnknown",t.ZodNever="ZodNever",t.ZodVoid="ZodVoid",t.ZodArray="ZodArray",t.ZodObject="ZodObject",t.ZodUnion="ZodUnion",t.ZodDiscriminatedUnion="ZodDiscriminatedUnion",t.ZodIntersection="ZodIntersection",t.ZodTuple="ZodTuple",t.ZodRecord="ZodRecord",t.ZodMap="ZodMap",t.ZodSet="ZodSet",t.ZodFunction="ZodFunction",t.ZodLazy="ZodLazy",t.ZodLiteral="ZodLiteral",t.ZodEnum="ZodEnum",t.ZodEffects="ZodEffects",t.ZodNativeEnum="ZodNativeEnum",t.ZodOptional="ZodOptional",t.ZodNullable="ZodNullable",t.ZodDefault="ZodDefault",t.ZodCatch="ZodCatch",t.ZodPromise="ZodPromise",t.ZodBranded="ZodBranded",t.ZodPipeline="ZodPipeline",t.ZodReadonly="ZodReadonly"})(W||(W={}));const x5=(t,e={message:`Input not instance of ${t.name}`})=>Q0(n=>n instanceof t,e),eb=gt.create,tb=Tn.create,w5=sa.create,k5=Cn.create,nb=ti.create,S5=sr.create,E5=ta.create,_5=ni.create,T5=ri.create,C5=Wr.create,R5=Yn.create,A5=tn.create,P5=na.create,I5=xt.create,O5=ye.create,N5=ye.strictCreate,L5=si.create,j5=Fa.create,D5=ii.create,M5=Lt.create,F5=oi.create,$5=ra.create,V5=ir.create,U5=Nr.create,B5=ai.create,H5=ci.create,z5=Rn.create,W5=li.create,q5=qr.create,Qp=kt.create,K5=Pt.create,G5=An.create,Z5=kt.createWithPreprocess,J5=ji.create,Y5=()=>eb().optional(),X5=()=>tb().optional(),Q5=()=>nb().optional(),eD={string:(t=>gt.create({...t,coerce:!0})),number:(t=>Tn.create({...t,coerce:!0})),boolean:(t=>ti.create({...t,coerce:!0})),bigint:(t=>Cn.create({...t,coerce:!0})),date:(t=>sr.create({...t,coerce:!0}))},tD=K;var Z=Object.freeze({__proto__:null,defaultErrorMap:zr,setErrorMap:t5,getErrorMap:Xo,makeIssue:Qo,EMPTY_PATH:n5,addIssueToContext:N,ParseStatus:Be,INVALID:K,DIRTY:Er,OK:qe,isAborted:Yl,isDirty:Xl,isValid:Qs,isAsync:ei,get util(){return ie},get objectUtil(){return Jl},ZodParsedType:L,getParsedType:pn,ZodType:re,datetimeRegex:Y0,ZodString:gt,ZodNumber:Tn,ZodBigInt:Cn,ZodBoolean:ti,ZodDate:sr,ZodSymbol:ta,ZodUndefined:ni,ZodNull:ri,ZodAny:Wr,ZodUnknown:Yn,ZodNever:tn,ZodVoid:na,ZodArray:xt,ZodObject:ye,ZodUnion:si,ZodDiscriminatedUnion:Fa,ZodIntersection:ii,ZodTuple:Lt,ZodRecord:oi,ZodMap:ra,ZodSet:ir,ZodFunction:Nr,ZodLazy:ai,ZodLiteral:ci,ZodEnum:Rn,ZodNativeEnum:li,ZodPromise:qr,ZodEffects:kt,ZodTransformer:kt,ZodOptional:Pt,ZodNullable:An,ZodDefault:ui,ZodCatch:di,ZodNaN:sa,BRAND:v5,ZodBranded:bd,ZodPipeline:ji,ZodReadonly:hi,custom:Q0,Schema:re,ZodSchema:re,late:b5,get ZodFirstPartyTypeKind(){return W},coerce:eD,any:C5,array:I5,bigint:k5,boolean:nb,date:S5,discriminatedUnion:j5,effect:Qp,enum:z5,function:U5,instanceof:x5,intersection:D5,lazy:B5,literal:H5,map:$5,nan:w5,nativeEnum:W5,never:A5,null:T5,nullable:G5,number:tb,object:O5,oboolean:Q5,onumber:X5,optional:K5,ostring:Y5,pipeline:J5,preprocess:Z5,promise:q5,record:F5,set:V5,strictObject:N5,string:eb,symbol:E5,transformer:Qp,tuple:M5,undefined:_5,union:L5,unknown:R5,void:P5,NEVER:tD,ZodIssueCode:A,quotelessJson:e5,ZodError:Xe});const Wc=Z.tuple([Z.number().min(-180).max(180),Z.number().min(-90).max(90)]),qc=Z.string().datetime({offset:!0}),nD=["not_next_stop","verification_required","gps_unavailable","driver_offline","trip_completed","expired","resequenced"];Z.object({eligible:Z.literal(!1),reason:Z.enum(nD)}).strict();Z.object({eligible:Z.literal(!0),expiresAt:qc,driver:Z.object({position:Wc,capturedAt:qc,heading:Z.number().min(0).max(360).nullable().optional()}).strict(),destination:Z.object({position:Wc}).strict(),approach:Z.object({coordinates:Z.array(Wc).min(2).max(1e3),source:Z.string().min(1)}).strict().nullable().optional(),eta:Z.object({minutes:Z.number().int().min(0).max(240),computedAt:qc}).strict().nullable().optional(),driverDisplay:Z.object({initials:Z.string().regex(/^[A-Z]{1,2}$/)}).strict().nullable().optional()}).strict();const rD=async()=>({kind:"unsupported"}),sD=120*1e3;function rb(t,e){return e-Date.parse(t.driver.capturedAt)>sD}function iD(t,e){return e>=Date.parse(t.expiresAt)}const em=30*1e3,oD=60*1e3,aD=15*1e3,cD=2**31-1,lD=2;async function uD(){return rD}const tm=()=>({wasEligible:!1,freshStreak:0,recovering:!1,staleData:null});function dD(t,e,n){switch(t.kind){case"unsupported":return{view:{status:"off"},keepPolling:!1};case"not_eligible":switch(t.reason){case"gps_unavailable":case"driver_offline":return n.wasEligible=!0,n.freshStreak=0,{view:{status:"unavailable",reason:t.reason},keepPolling:!0};case"expired":case"resequenced":return n.wasEligible?{view:{status:"ended",reason:t.reason},keepPolling:!0}:{view:{status:"off"},keepPolling:!0};case"trip_completed":return{view:{status:"off"},keepPolling:!1};default:return{view:{status:"off"},keepPolling:!0}}case"eligible":return n.wasEligible=!0,iD(t.data,e)?{view:{status:"ended",reason:"expired"},keepPolling:!0}:rb(t.data,e)?(n.freshStreak=0,n.recovering=!0,n.staleData=t.data,{view:{status:"stale",data:t.data},keepPolling:!0}):(n.freshStreak+=1,n.recovering&&n.freshStreak<lD?{view:{status:"stale",data:n.staleData??t.data},keepPolling:!0}:(n.recovering=!1,n.staleData=null,{view:{status:"live",data:t.data},keepPolling:!0}));case"refused":return{view:n.wasEligible?{status:"error",reason:"refused"}:{status:"off"},keepPolling:!1};case"rate_limited":return{view:n.wasEligible?{status:"rate_limited",retryAfter:e+oD}:{status:"off"},keepPolling:!1};default:return{view:n.wasEligible?{status:"error",reason:"failed"}:{status:"off"},keepPolling:!1}}}function hD({enabled:t,orderId:e,stage:n,accessToken:r,source:s}){const[i,o]=m.useState({status:"off"}),[a,c]=m.useState(0),l=m.useRef(i);l.current=i;const u=m.useRef(tm()),h=t&&n==="in_transit";m.useEffect(()=>{u.current=tm()},[h,e,r]);const f=`${h}|${e}|${r??""}`,p=m.useRef(f);m.useEffect(()=>{if(p.current!==f&&(p.current=f,o({status:"off"})),!h){o({status:"off"});return}let y=!0,v,S;const b=_=>{o(_)},x=_=>{if(S&&clearTimeout(S),_.status!=="live"&&_.status!=="stale")return;const C=Date.parse(_.data.expiresAt)-Date.now();S=setTimeout(()=>{y&&b({status:"ended",reason:"expired"})},Math.min(Math.max(0,C),cD))},w=async()=>{if(typeof document<"u"&&document.hidden){v=setTimeout(w,em);return}let _;try{_=await(s??await uD())({orderId:e,accessToken:r})}catch{_={kind:"error"}}if(!y)return;const{view:C,keepPolling:R}=dD(_,Date.now(),u.current);b(C),x(C),R&&(v=setTimeout(w,em))};w();const E=setInterval(()=>{const _=l.current;_.status==="live"&&rb(_.data,Date.now())&&(u.current.freshStreak=0,u.current.recovering=!0,u.current.staleData=_.data,b({status:"stale",data:_.data}))},aD);return()=>{y=!1,v&&clearTimeout(v),S&&clearTimeout(S),clearInterval(E)}},[h,e,r,s,a,f]);const g=m.useCallback(()=>c(y=>y+1),[]);return{view:p.current===f?i:{status:"off"},retry:g}}const fD=m.lazy(()=>Q3(()=>import("./NextStopMapCanvas-BCI-UpAi.js"),__vite__mapDeps([0,1,2]))),pD=T.div`
  display: grid;
  gap: 16px;
  grid-template-columns: minmax(0, 1fr);
  ${({$wide:t})=>t&&V`
      @media (min-width: 900px) {
        grid-template-columns: minmax(0, 360fr) minmax(0, 808fr);
        align-items: stretch;
      }
    `}
`,nm=T.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
`,mD=T(Ot)`
  color: var(--trk-link);
`,gD=T.p`
  margin: 0;
  font-family: ${G};
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  color: var(--trk-ink);
`,rm=T.p`
  margin: 0;
  font-family: ${G};
  font-size: 13px;
  line-height: 18px;
  color: var(--trk-muted);
`,sm=T.p`
  margin: 0;
  font-family: ${G};
  font-size: 15px;
  line-height: 21px;
  color: var(--trk-ink);
`;T.p`
  align-self: flex-start;
  margin: 4px 0 0;
  padding: 3px 10px;
  border-radius: 999px;
  border: 1px dashed var(--trk-border);
  font-family: ${G};
  font-size: 12px;
  font-weight: 600;
  color: var(--trk-muted);
`;const yD=T.div`
  height: ${({$wide:t})=>t?"342px":"300px"};
  ${ue(V`
    height: 220px;
  `)}
`,vD=T.div`
  height: 100%;
  border-radius: 12px;
  border: 1px solid var(--trk-border);
  background: var(--trk-section);
`,bD=T.button`
  align-self: flex-start;
  min-height: 36px;
  padding: 6px 14px;
  border: 1px solid var(--trk-border);
  border-radius: 8px;
  background: var(--trk-card);
  color: var(--trk-ink);
  font-family: ${G};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  &:focus-visible {
    outline: 2px solid ${Ie.blue};
    outline-offset: 2px;
  }
  @media (pointer: coarse) {
    min-height: 44px;
  }
`;class xD extends X.Component{constructor(){super(...arguments);dt(this,"state",{failed:!1})}static getDerivedStateFromError(){return{failed:!0}}render(){return this.state.failed?this.props.fallback:this.props.children}}function wD(t,e){const[n,r]=m.useState(()=>Date.now());return m.useEffect(()=>{if(!e)return;r(Date.now());const s=setInterval(()=>r(Date.now()),t);return()=>clearInterval(s)},[t,e]),n}function Kc(t,e){return Math.max(0,Math.round((e-Date.parse(t))/6e4))}const sb=({enabled:t,shipment:e,audience:n,layout:r,accessToken:s,source:i})=>{const{t:o}=xe(),{view:a,retry:c}=hD({enabled:t,orderId:e.orderId,stage:e.stage,accessToken:s,source:i}),l=wD(15*1e3,a.status!=="off"),u=!1,h=x=>`tracking:guest.nextStop.${n}.${x}`,f=x=>{switch(x.status){case"live":return x.data.eta?o("tracking:guest.nextStop.etaMinutes",{count:x.data.eta.minutes}):o("tracking:guest.nextStop.etaSoon");case"stale":return o("tracking:guest.nextStop.stale",{count:Math.max(1,Kc(x.data.driver.capturedAt,l))});case"unavailable":return o("tracking:guest.nextStop.unavailable");case"ended":return o("tracking:guest.nextStop.ended");case"error":return o(x.reason==="refused"?"tracking:guest.nextStop.errorRefused":"tracking:guest.nextStop.errorFailed");case"rate_limited":return o("tracking:guest.nextStop.rateLimited");default:return""}},[p,g]=m.useState(""),y=m.useRef("off");if(m.useEffect(()=>{a.status!==y.current&&(y.current=a.status,g(a.status==="off"?"":f(a)))},[a]),a.status==="off")return null;if(a.status==="ended"||a.status==="error"||a.status==="rate_limited"){const x=a.status==="error"||a.status==="rate_limited"&&l>=a.retryAfter;return d.jsxs(It,{"data-testid":"next-stop-card","data-state":a.status,"aria-label":o("tracking:guest.nextStop.liveLocation"),children:[d.jsx(Xs,{role:"status","aria-live":"polite",children:p}),d.jsxs(nm,{children:[d.jsx(Ot,{children:o("tracking:guest.nextStop.liveLocation")}),d.jsx(sm,{"data-testid":"next-stop-message",children:f(a)}),x&&d.jsx(bD,{type:"button",onClick:c,children:o("tracking:guest.nextStop.retry")})]})]})}const v=a.status==="live",S=r==="wide"&&v,b=d.jsx(rm,{"data-testid":"next-stop-map-unavailable",children:o(h("mapUnavailable"))});return d.jsxs(It,{"data-testid":"next-stop-card","data-state":a.status,"aria-labelledby":"trk-next-stop-title",children:[d.jsx(Xs,{role:"status","aria-live":"polite",children:p}),d.jsxs(pD,{$wide:S,children:[d.jsxs(nm,{children:[d.jsx(mD,{children:o(h(v?"eyebrowLive":"eyebrowNext"))}),d.jsx(vd,{id:"trk-next-stop-title",children:o(h("title"))}),a.status==="live"?d.jsxs(d.Fragment,{children:[d.jsx(gD,{"data-testid":"next-stop-eta",children:f(a)}),d.jsx(rm,{children:Kc(a.data.driver.capturedAt,l)===0?o("tracking:guest.nextStop.updatedNow"):o("tracking:guest.nextStop.updated",{count:Kc(a.data.driver.capturedAt,l)})})]}):d.jsx(sm,{"data-testid":"next-stop-message",children:f(a)}),u]}),v&&d.jsx(xD,{fallback:b,children:d.jsx(yD,{$wide:r==="wide",children:d.jsx(m.Suspense,{fallback:d.jsx(vD,{"aria-hidden":"true"}),children:d.jsx(fD,{data:a.data,title:o(h("mapRegion"))})})})})]})]})},kD=T(It)`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 24px 28px 22px;
  ${ue(V`
    gap: 12px;
    padding: 16px 14px 14px;
  `)}
`,SD=T.div`
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
`;T.p`
  align-self: flex-start;
  margin: 0;
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px dashed var(--trk-border);
  font-family: ${G};
  font-size: 12px;
  font-weight: 600;
  color: var(--trk-muted);
`;const ib=()=>null,ED=({shipment:t,asOf:e})=>{const{t:n}=xe(),r=qu(t,"public");return d.jsxs(kD,{"data-testid":"summary-card","aria-label":n("tracking:guest.summary.progress"),children:[d.jsx(U0,{shipment:t,taxonomy:"public"}),r&&d.jsx(Uy,{milestones:r,timezone:t.timezone,label:n("tracking:guest.summary.progress")}),d.jsx(R3,{shipment:t,now:e})]})},ob=({result:t,onRetry:e,backTo:n})=>{const{t:r}=xe(),s=t.kind;return d.jsx(J3,{testId:`lookup-${s}`,text:r(`tracking:guest.error.${s}`),onRetry:s==="unavailable"?e:void 0,children:n&&d.jsx(Ma,{as:ct,to:n,children:r("tracking:guest.result.back")})})},BM=({loading:t,result:e,onRetry:n,nextStopMapOn:r,asOf:s})=>d.jsx(V0,{children:d.jsx(gd,{children:d.jsxs(yd,{children:[d.jsx(ib,{}),t&&d.jsx(q0,{}),!t&&(e==null?void 0:e.kind)==="ok"&&d.jsxs(d.Fragment,{children:[d.jsx(ED,{shipment:e.shipment,asOf:s}),d.jsx(W0,{shipment:e.shipment}),d.jsx(sb,{enabled:r,shipment:e.shipment,audience:"public",layout:"wide"}),d.jsxs(SD,{children:[d.jsx(I3,{shipment:e.shipment}),d.jsx(D3,{shipment:e.shipment})]})]}),!t&&e&&e.kind!=="ok"&&d.jsx(ob,{result:e,onRetry:n,backTo:"/track"})]})})}),_D={baseURL:void 0},ab=be.create(_D),TD=async t=>{const e=t.data;if(Number(e==null?void 0:e.code)>0)throw e;return e};ab.interceptors.response.use(TD,t=>Promise.reject(t));const CD="/api/v2/guest/shipment/track",im=["created","scheduled","ready_for_pickup","in_transit","delivered","completed","cancelled"],RD=["order_created","scheduled","picked_up","arrived","signed","completed","rescheduled","item_exception","cancelled"],AD=["rescheduled","items_missing","items_damaged","wrong_delivery","cancelled"],Gc=Z.object({suburb:Z.string(),state:Z.string(),postcode:Z.string()}),PD=Z.object({orderId:Z.string(),carrierName:Z.string().nullable(),stage:Z.enum(im),badge:Z.enum([...im,"exception"]),proofType:Z.enum(["signature","contactless","qrcode"]).nullable(),estimatedDelivery:Z.object({date:Z.string(),timeWindow:Z.enum(["AM","PM"]).nullable()}).nullable(),shipDate:Z.string().nullable(),origin:Gc.nullable(),destination:Gc.nullable(),packages:Z.object({current:Z.number().int(),affected:Z.number().int()}),timezone:Z.string().nullable().transform(t=>t??""),exceptions:Z.array(Z.object({type:Z.enum(AD),occurredAt:Z.string().nullable(),count:Z.number().int().optional()})),travelHistory:Z.array(Z.object({time:Z.string(),activity:Z.enum(RD),location:Gc.nullable()}))}),ID=/name|phone|mobile|email|street|address|driver|^lat|lat$|lng|latitude|longitude|coordinate|polyline|^path$|gps|position|route|^stops?$|^plan|vehicle|plate|signature|photo|image|price|pricing|^uid$|uid$/i,OD=new Set(["carrierName"]);function eu(t,e=""){return Array.isArray(t)?t.flatMap((n,r)=>eu(n,`${e}[${r}]`)):t&&typeof t=="object"?Object.entries(t).flatMap(([n,r])=>{const s=e?`${e}.${n}`:n;return[...!OD.has(n)&&ID.test(n)?[s]:[],...eu(r,s)]}):[]}function ND(t){const e=t.trim();return/^[A-Za-z0-9]{1,9}$/.test(e)?e.toUpperCase():null}function om(t){const e=Number(t==null?void 0:t.code);if(e===39)return{kind:"notFound"};if(e===7)return{kind:"format"};if(e!==0)return{kind:"unavailable"};if(eu(t==null?void 0:t.data).length>0)return{kind:"unavailable"};const n=PD.safeParse(t==null?void 0:t.data);return n.success?{kind:"ok",shipment:n.data}:{kind:"unavailable"}}async function LD(t){var e;try{const n=await ab.post(CD,{orderId:t});return om(n)}catch(n){return((e=n==null?void 0:n.response)==null?void 0:e.status)===429?{kind:"rateLimited"}:n&&typeof n=="object"&&"code"in n&&typeof n.code=="number"?om(n):{kind:"unavailable"}}}function jD(t){const[e,n]=m.useState(()=>t!=null&&t.shipment?{kind:"done",orderId:t.orderId,result:{kind:"ok",shipment:t.shipment}}:{kind:"idle"}),r=m.useRef(0),s=m.useRef(!0);m.useEffect(()=>(s.current=!0,()=>{s.current=!1}),[]);const i=m.useCallback(async a=>{const c=++r.current,l=ND(a);if(!l){const h={kind:"format"};return n({kind:"done",orderId:a.trim(),result:h}),h}n({kind:"loading",orderId:l});const u=await LD(l);return!s.current||c!==r.current?null:(n({kind:"done",orderId:l,result:u}),u)},[]),o=m.useRef(t&&!t.shipment?t.orderId:null);return m.useEffect(()=>{if(o.current){const a=o.current;o.current=null,i(a)}},[i]),{state:e,lookup:i}}const DD=T.div`
  display: grid;
  /* 567:463 / 567:507: the status column is 830px, flush with the search bar */
  grid-template-columns: minmax(0, 830px) minmax(0, 1fr);
  gap: 14px;
  align-items: start;
  @media (max-width: 1024px) {
    grid-template-columns: minmax(0, 1fr);
  }
`,MD=T.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,FD=T(It)`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 24px 26px;
  ${ue(V`
    gap: 12px;
    padding: 16px 14px 14px;
  `)}
`,$D=T.p`
  margin: -6px 0 4px;
  font-family: ${G};
  font-size: 26px;
  font-weight: 700;
  line-height: 31px;
  color: var(--trk-ink);
  ${ue(V`
    font-size: 20px;
    line-height: 24px;
  `)}
`,am=T.p`
  margin: -8px 0 0;
  font-family: ${G};
  font-size: ${({$strong:t})=>t?18:14}px;
  font-weight: ${({$strong:t})=>t?600:400};
  line-height: 1.3;
  color: ${({$strong:t})=>t?"var(--trk-ink)":"var(--trk-muted)"};
  ${({$strong:t})=>ue(V`
      font-size: ${t?15:12}px;
    `)}
`,cm=T(It)`
  padding: 22px;
  ${ue(V`
    padding: 16px;
  `)}
`,lm=T(Ot).attrs({as:"h2"})`
  display: block;
  margin: 0;
`,VD=T.dl`
  margin: 10px 0 0;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    min-height: 38px;
  }

  dt {
    font-family: ${G};
    font-size: 12px;
    color: var(--trk-muted);
  }

  dd {
    margin: 0;
    font-family: ${G};
    font-size: 13px;
    text-align: right;
    color: var(--trk-ink);
  }
`,UD=T.p`
  margin: 12px 0 14px;
  font-family: ${G};
  font-size: 14px;
  line-height: 1.45;
  color: var(--trk-muted);
`,BD=T(Ma)`
  width: 100%;
`,HD=T.div`
  width: min(100%, 830px);
`,zD=T.details`
  summary {
    cursor: pointer;
    font-family: ${G};
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
`;function WD(t,e){const n=Da(t,e),r=B0(t).filter(([i])=>i!=="shipDate"),s=r.findIndex(([i])=>i==="packages");return r.splice(s<0?r.length:s,0,["eta",n.label,n.value]),r}const qD=({shipment:t,nextStopMapOn:e,nextStopPanel:n,asOf:r})=>{const{t:s}=xe(),i=Da(t,r),o=WD(t,r),a=qu(t,"consignee"),c=t.travelHistory[t.travelHistory.length-1]??null,l=t.timezone,u=t.travelHistory.length;return d.jsxs(DD,{children:[d.jsxs(yd,{children:[d.jsxs(FD,{"data-testid":"consignee-status-card",children:[d.jsx(U0,{shipment:t,taxonomy:"consignee"}),d.jsx(Ot,{children:i.label}),d.jsx($D,{"data-testid":"eta-value",children:i.value}),a&&d.jsx(Uy,{milestones:a,timezone:l,label:s("tracking:guest.summary.progress")}),d.jsx(Ot,{children:s("tracking:guest.latest.label")}),d.jsx(am,{$strong:!0,"data-testid":"latest-value",children:s(c?`tracking:guest.activity.${c.activity}`:"tracking:guest.latest.none")}),c&&d.jsx(am,{children:[bt(c.time,l,!0),Si(c.time,l),Ei(c.location)].filter(Boolean).join(" · ")}),u>0&&d.jsxs(zD,{"data-testid":"consignee-history",children:[d.jsx("summary",{children:s("tracking:guest.consignee.historyToggle",{count:u})}),d.jsx(H0,{shipment:t})]})]}),d.jsx(W0,{shipment:t,showContact:!1}),n??d.jsx(sb,{enabled:e,shipment:t,audience:"receiver",layout:"column"})]}),d.jsxs(MD,{children:[d.jsxs(cm,{"data-testid":"consignee-details-card","aria-labelledby":"trk-c1-details",children:[d.jsx(lm,{id:"trk-c1-details",children:s("tracking:guest.details.title")}),d.jsx(VD,{children:o.map(([h,f,p])=>d.jsxs("div",{"data-row":h,children:[d.jsx("dt",{children:f}),d.jsx("dd",{children:p})]},h))})]}),d.jsxs(cm,{"data-testid":"consignee-help-card","aria-labelledby":"trk-c1-help",children:[d.jsx(lm,{id:"trk-c1-help",children:s("tracking:guest.help.title")}),d.jsx(UD,{children:s("tracking:guest.help.body")}),d.jsx(BD,{href:z0(`Delivery question — ${t.orderId}`),children:s("tracking:guest.help.contact")})]})]})]})},KD=({shipment:t,loading:e})=>{const{t:n}=xe();return d.jsx(Xs,{role:"status","aria-live":"polite","data-testid":"consignee-announcer",children:e?n("tracking:guest.error.loading"):t?d.jsx(GD,{shipment:t}):""})},GD=({shipment:t})=>{const{t:e}=xe(),n=Da(t),r=By(t,"consignee");return d.jsx(d.Fragment,{children:e("tracking:guest.consignee.resultStatus",{status:e(r.labelKey),label:n.label,value:n.value})})},HM=()=>{const{t}=xe(),e=Ll("nextStopMap"),[n]=m.useState(()=>r3("consignee")),{state:r,lookup:s}=jD(n?{orderId:n}:null),[i,o]=m.useState(n??""),a=async h=>{const f=await s(h);f&&(f.kind==="ok"?n3("consignee",f.shipment.orderId):(f.kind==="notFound"||f.kind==="format")&&s3("consignee"))};m.useEffect(()=>{r.kind==="done"&&r.result.kind==="ok"&&o(r.result.shipment.orderId)},[r]);const c=r.kind==="done"?r.result:null,l=r.kind==="done"?r.orderId:i,u=(c==null?void 0:c.kind)==="format"?q3(c,t):null;return d.jsxs(a3,{title:t("tracking:guest.pageTitle.consignee"),audience:"receiver",children:[d.jsx(p3,{eyebrow:t("tracking:guest.consignee.eyebrow"),title:t("tracking:guest.consignee.title"),subtitle:t("tracking:guest.consignee.subtitle")}),d.jsx(V0,{children:d.jsx(gd,{children:d.jsxs(yd,{style:{paddingTop:18},children:[d.jsx(ib,{}),d.jsx(HD,{children:d.jsx(K3,{value:i,onChange:o,onSubmit:()=>void a(i),busy:r.kind==="loading",message:u})}),d.jsx(KD,{loading:r.kind==="loading",shipment:(c==null?void 0:c.kind)==="ok"?c.shipment:null}),r.kind==="loading"&&d.jsx(q0,{}),(c==null?void 0:c.kind)==="ok"&&d.jsx(qD,{shipment:c.shipment,nextStopMapOn:e}),c&&c.kind!=="ok"&&c.kind!=="format"&&d.jsx(ob,{result:c,onRetry:()=>void a(l)})]})})})]})};export{Z as $,P4 as A,rM as B,IA as C,cM as D,$M as E,hM as F,Hn as G,VM as H,_x as I,Vo as J,HA as K,UM as L,uM as M,q4 as N,Ws as O,aM as P,xe as Q,t1 as R,FT as S,YD as T,G as U,at as V,Hr as W,Mw as X,st as Y,be as Z,Q3 as _,uu as a,Xx as a0,eM as a1,MM as a2,Ll as a3,sb as a4,NR as a5,fa as a6,pM as a7,vf as a8,jM as a9,fM as aA,EA as aB,bA as aC,qD as aD,D0 as aa,DM as ab,mp as ac,sM as ad,zA as ae,I4 as af,Qy as ag,tM as ah,ev as ai,jD as aj,a3 as ak,p3 as al,V0 as am,gd as an,yd as ao,ib as ap,K3 as aq,q3 as ar,n3 as as,HM as at,QD as au,PD as av,r3 as aw,BM as ax,nM as ay,dw as az,tf as b,lM as c,VC as d,XD as e,u1 as f,AC as g,PC as h,dM as i,h1 as j,Sx as k,T as l,Q4 as m,X4 as n,DA as o,FM as p,Ry as q,nn as r,pb as s,ct as t,pi as u,e3 as v,ef as w,oM as x,ze as y,nv as z};
