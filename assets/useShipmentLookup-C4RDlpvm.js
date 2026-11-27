import{j as s,r as c}from"./client-CG7M8TvS.js";import{Q as y,J as f,H as v,U as E}from"./FleetImpact-DJmzwwMU.js";import{D as _,o as C,C as T,c as I,S as R,R as $,i as w,N as A,H as N,j as M,F as P,k as D,g as G,h as L,E as U,p as z,n as H}from"./DeliveryProgress-Ce3RsDkX.js";import{u as g,k as F}from"./index-BCtHRY-a.js";import{z as r}from"./index-jPvTCT1d.js";function K({milestones:e,timezone:t,label:n}){const{t:a}=g(),i=e.findIndex(o=>o.state==="current");return s.jsx(_,{testId:"milestone-rail",label:n,current:i===-1?e.length:i,steps:e.map(o=>({key:o.key,label:a(o.labelKey),done:o.state==="done",sub:o.at?C(o.at,t):void 0}))})}const O=f(H)`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 24px 28px 22px;
  ${z(v`
    gap: 12px;
    padding: 16px 14px 14px;
  `)}
`,Y=f.div`
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
  gap: 16px;
  /* content-driven heights (2026-10-20): each card is as tall as its own
     content, so a long history no longer stretches Details into empty space
     (213px at 1440 with seven events). Neither card has a fixed height. */
  align-items: start;
  @media (max-width: 760px) {
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
`;const q=()=>null,B=({shipment:e,asOf:t})=>{const{t:n}=g(),a=G(e,"public");return s.jsxs(O,{"data-testid":"summary-card","aria-label":n("tracking:guest.summary.progress"),children:[s.jsx(L,{shipment:e,taxonomy:"public"}),s.jsx(U,{shipment:e,now:t}),a&&s.jsx(K,{milestones:a,timezone:e.timezone,label:n("tracking:guest.summary.progress")})]})},W=({result:e,onRetry:t,backTo:n})=>{const{t:a}=g(),i=e.kind;return s.jsx(P,{testId:`lookup-${i}`,text:a(`tracking:guest.error.${i}`),onRetry:i==="unavailable"?t:void 0,children:n&&s.jsx(D,{as:y,to:n,children:a("tracking:guest.result.back")})})},ue=({loading:e,result:t,onRetry:n,nextStopMapOn:a,asOf:i})=>s.jsx(T,{children:s.jsx(I,{children:s.jsxs(R,{children:[s.jsx(q,{}),e&&s.jsx($,{}),!e&&(t==null?void 0:t.kind)==="ok"&&s.jsxs(s.Fragment,{children:[s.jsx(B,{shipment:t.shipment,asOf:i}),s.jsx(w,{shipment:t.shipment}),s.jsx(A,{enabled:a,shipment:t.shipment,audience:"public",layout:"wide"}),s.jsxs(Y,{children:[s.jsx(N,{shipment:t.shipment}),s.jsx(M,{shipment:t.shipment})]})]}),!e&&t&&t.kind!=="ok"&&s.jsx(W,{result:t,onRetry:n,backTo:"/track"})]})})}),J={baseURL:void 0},j=F.create(J),Q=async e=>{const t=e.data;if(Number(t==null?void 0:t.code)>0)throw t;return t};j.interceptors.response.use(Q,e=>Promise.reject(e));const V="/api/v2/guest/shipment/track",k=["created","scheduled","ready_for_pickup","in_transit","delivered","completed","cancelled"],X=["order_created","scheduled","picked_up","arrived","signed","completed","rescheduled","item_exception","cancelled"],Z=["rescheduled","items_missing","items_damaged","wrong_delivery","cancelled"],p=r.object({suburb:r.string(),state:r.string(),postcode:r.string()}),ee=r.object({orderId:r.string(),carrierName:r.string().nullable(),stage:r.enum(k),badge:r.enum([...k,"exception"]),proofType:r.enum(["signature","contactless","qrcode"]).nullable(),estimatedDelivery:r.object({date:r.string(),timeWindow:r.enum(["AM","PM"]).nullable()}).nullable(),shipDate:r.string().nullable(),origin:p.nullable(),destination:p.nullable(),packages:r.object({current:r.number().int(),affected:r.number().int()}),timezone:r.string().nullable().transform(e=>e??""),exceptions:r.array(r.object({type:r.enum(Z),occurredAt:r.string().nullable(),count:r.number().int().optional()})),travelHistory:r.array(r.object({time:r.string(),activity:r.enum(X),location:p.nullable()}))}),te=/name|phone|mobile|email|street|address|driver|^lat|lat$|lng|latitude|longitude|coordinate|polyline|^path$|gps|position|route|^stops?$|^plan|vehicle|plate|signature|photo|image|price|pricing|^uid$|uid$/i,ne=new Set(["carrierName"]);function m(e,t=""){return Array.isArray(e)?e.flatMap((n,a)=>m(n,`${t}[${a}]`)):e&&typeof e=="object"?Object.entries(e).flatMap(([n,a])=>{const i=t?`${t}.${n}`:n;return[...!ne.has(n)&&te.test(n)?[i]:[],...m(a,i)]}):[]}function re(e){const t=e.trim();return/^[A-Za-z0-9]{1,9}$/.test(t)?t.toUpperCase():null}function b(e){const t=Number(e==null?void 0:e.code);if(t===39)return{kind:"notFound"};if(t===7)return{kind:"format"};if(t!==0)return{kind:"unavailable"};if(m(e==null?void 0:e.data).length>0)return{kind:"unavailable"};const n=ee.safeParse(e==null?void 0:e.data);return n.success?{kind:"ok",shipment:n.data}:{kind:"unavailable"}}async function se(e){var t;try{const n=await j.post(V,{orderId:e});return b(n)}catch(n){return((t=n==null?void 0:n.response)==null?void 0:t.status)===429?{kind:"rateLimited"}:n&&typeof n=="object"&&"code"in n&&typeof n.code=="number"?b(n):{kind:"unavailable"}}}function le(e){const[t,n]=c.useState(()=>e!=null&&e.shipment?{kind:"done",orderId:e.orderId,result:{kind:"ok",shipment:e.shipment}}:{kind:"idle"}),a=c.useRef(0),i=c.useRef(!0);c.useEffect(()=>(i.current=!0,()=>{i.current=!1}),[]);const o=c.useCallback(async d=>{const S=++a.current,u=re(d);if(!u){const h={kind:"format"};return n({kind:"done",orderId:d.trim(),result:h}),h}n({kind:"loading",orderId:u});const x=await se(u);return!i.current||S!==a.current?null:(n({kind:"done",orderId:u,result:x}),x)},[]),l=c.useRef(e&&!e.shipment?e.orderId:null);return c.useEffect(()=>{if(l.current){const d=l.current;l.current=null,o(d)}},[o]),{state:t,lookup:o}}export{ue as G,W as L,q as M,Y as S,K as a,ee as g,le as u};
