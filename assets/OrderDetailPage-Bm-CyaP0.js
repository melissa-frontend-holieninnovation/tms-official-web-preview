import{c as T,r as j,j as e,R as D}from"./client-CG7M8TvS.js";import{J as s,U as m,a8 as R,X as H,Q as W}from"./FleetImpact-D666L5_c.js";import{g as V}from"./apiRoutes-KIAJf1KC.js";import{u as w,a as X,b as Z,c as q}from"./index-DCSFVpKP.js";import{S as y,a as v,b as k,M as K,d as A,D as G,f as Q,N as J,e as Y,i as ee,K as te,P as re,g as ne,h as ie}from"./CarrierProvider-DhAnU5QC.js";import{A as M,D as ae,N as se,T as oe}from"./DeliveryProgress-CtmDmGYd.js";import{s as le,S as _}from"./StatusPill-DkrItMpS.js";import{P as ce}from"./PortalShell-C5Ir9nqR.js";import{T as de,P as pe}from"./PortalTables-Dtu0XXJs.js";import{A as he}from"./arrow-left-CKYADNOU.js";import"./api-B1EnflDK.js";import"./index-jPvTCT1d.js";import"./Status-DKt8rNyR.js";import"./check-t_v-wtVN.js";import"./CheckOutlined-C9GD3mKe.js";const xe=T("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),ue=T("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]),ge=T("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]),P=["orderCreated","scheduled","readyForPickup","inTransit","delivered","completed"],me={1:0,2:1,3:2,4:3,5:3,6:3,7:3,8:3,9:0,10:4,11:4,12:5,13:5,14:0,15:5,16:0};function fe(t,r){return t==="cancelled"?"tracking:headline.cancelled":t==="exception"?"tracking:headline.exception":`tracking:headline.${P[r]??"inTransit"}`}function z(t){const r=le(t),n=r==="danger"?"cancelled":r==="warning"?"exception":"normal",i=me[t]??0;return{stepIndex:i,variant:n,showStepper:n!=="cancelled",headlineKey:fe(n,i)}}const ye=new Intl.DateTimeFormat("en-AU",{weekday:"long",day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});function be(t){const r=new Date(`${t}T00:00:00Z`);return Number.isNaN(r.getTime())?t:ye.format(r)}const L=s.div`
  margin: 0 0 16px;
`,je=s.img`
  display: block;
  width: 100%;
  max-width: 320px;
  height: auto;
  border-radius: 8px;
  border: 1px solid var(--color-border-subtle);
`,ve=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 320px;
  min-height: 120px;
  padding: 16px;
  border-radius: 8px;
  border: 1px dashed var(--color-border-subtle);
  background: var(--color-bg-raised);
  color: var(--color-text-secondary);
  font-family: ${m};
  font-size: 13px;
  text-align: center;
`,we=({pod:t})=>{const{t:r}=w(),[n,i]=j.useState(!1);return t?e.jsx(y,{children:e.jsxs(v,{children:[e.jsx(k,{children:r("tracking:pod.title","Proof of Delivery")}),t.photoUrl&&!n&&e.jsx(L,{children:e.jsx(je,{src:t.photoUrl,alt:r("tracking:pod.photoAlt"),onError:()=>i(!0)})}),t.photoUrl&&n&&e.jsx(L,{children:e.jsx(ve,{children:r("tracking:pod.photoUnavailable")})}),e.jsxs(K,{children:[e.jsxs("div",{children:[e.jsx("dt",{children:r("tracking:activity.deliveredSigned")}),e.jsx("dd",{children:be(t.deliveredAt)})]}),t.signedByInitial&&e.jsxs("div",{children:[e.jsx("dt",{children:r("tracking:pod.signedBy","Signed By")}),e.jsx("dd",{children:t.signedByInitial})]})]})]})}):null},ke=s.ul`
  display: grid;
  gap: 12px;
  margin: 14px 0 0;
  padding: 0;
  list-style: none;
`,Se=s.li`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  padding: 14px 16px;
  border-radius: 8px;
  border-left: 3px solid var(--color-status-warning-text);
  background: var(--color-status-warning-bg);
`,Te=s.p`
  margin: 0;
  flex: 1 1 260px;
  font-family: ${m};
  font-size: 14px;
  line-height: 1.5;
  color: var(--color-text-primary);
`,Ae=s(A)`
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
  border-color: var(--color-status-warning-text);

  &:hover:not(:disabled) {
    border-color: var(--color-status-warning-text);
    /* A solid-ish amber wash (mixed into the card, not the translucent row
     * tint) so the neutral label still clears AA on hover. */
    background: color-mix(in srgb, var(--color-status-warning-text) 12%, var(--color-bg-surface));
  }

  &:focus-visible {
    outline-color: var(--color-status-warning-text);
  }
`,Pe=s(k)`
  color: var(--color-status-warning-text);

  svg {
    color: var(--color-status-warning-text);
  }
`,C="tracking-exceptions-title",De=({items:t})=>{const{t:r}=w();return t.length===0?null:e.jsx(y,{"aria-labelledby":C,children:e.jsxs(v,{children:[e.jsxs(Pe,{id:C,children:[e.jsx(M,{"aria-hidden":"true"}),r("tracking:exception.badgeLabel",{count:t.length})]}),e.jsx(ke,{children:t.map((n,i)=>e.jsxs(Se,{children:[e.jsx(Te,{children:r(`tracking:exception.${n.subReasonKey}.reason`)}),n.supportHref&&e.jsx(Ae,{as:"a",href:n.supportHref,children:r("tracking:help.contactSupport")})]},`${n.subReasonKey}-${i}`))})]})})};function Le({step:t}){const{t:r}=w();return t.showStepper?e.jsx(ae,{current:t.stepIndex,label:r("tracking:guest.summary.progress"),steps:P.map(n=>({key:n,label:r(`tracking:step.${n}`)}))}):null}const Ce=s.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
`,Ee=s.p`
  margin: 12px 0 0;
  font-family: ${m};
  font-size: 15px;
  line-height: 1.5;
  color: var(--color-text-primary);
`,E=s.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin: 12px 0 0;
  padding: 14px 16px;
  border-radius: 8px;
  border-left: 3px solid
    ${({$tone:t})=>t==="danger"?"var(--color-status-danger-text)":"var(--color-status-warning-text)"};
  background: ${({$tone:t})=>t==="danger"?"var(--color-status-danger-bg)":"var(--color-status-warning-bg)"};
  font-family: ${m};
  font-size: 15px;
  line-height: 1.5;
  color: var(--color-text-primary);

  svg {
    flex-shrink: 0;
    width: 18px;
    height: 18px;
    margin-top: 1px;
    color: ${({$tone:t})=>t==="danger"?"var(--color-status-danger-text)":"var(--color-status-warning-text)"};
  }
`,Ie=s(Q)`
  margin-top: 6px;
`,$e=s.div`
  margin-top: 14px;
`,Be=s.div`
  margin-top: 18px;
`,Fe=new Intl.DateTimeFormat("en-AU",{day:"numeric",month:"short",year:"numeric"});function Oe(t){const r=new Date(t);return Number.isNaN(r.getTime())?t:Fe.format(r)}const Ue=({statusId:t,eta:r,latestEvent:n})=>{const{t:i}=w(),o=t!=null?z(t):void 0;return e.jsx(y,{children:e.jsxs(v,{children:[e.jsxs(Ce,{children:[e.jsx(G,{children:i("tracking:guest.summary.progress")}),t!=null&&e.jsx(_,{statusId:t})]}),o&&(o.variant==="cancelled"?e.jsxs(E,{$tone:"danger",role:"alert",children:[e.jsx(ge,{"aria-hidden":"true"}),e.jsx("span",{children:i(o.headlineKey)})]}):o.variant==="exception"?e.jsxs(E,{$tone:"warning",role:"status",children:[e.jsx(M,{"aria-hidden":"true"}),e.jsx("span",{children:i(o.headlineKey)})]}):e.jsx(Ee,{children:i(o.headlineKey)})),n&&e.jsxs(Ie,{children:[i(n.activityKey)," · ",Oe(n.date)," ·"," ",n.locationLabel]}),r&&e.jsx($e,{children:e.jsx(K,{children:e.jsxs("div",{children:[e.jsx("dt",{children:i("tracking:facts.estimatedDelivery")}),e.jsx("dd",{children:r.window?`${r.dateLabel} (${r.window})`:r.dateLabel})]})})}),o&&e.jsx(Be,{children:e.jsx(Le,{step:o})})]})})},I=3,$=new Intl.DateTimeFormat("en-AU",{weekday:"long",day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}),Ne=new Intl.DateTimeFormat("en-AU",{weekday:"short",day:"numeric",month:"short",timeZone:"UTC"});function S(t,r){const n=new Date(`${t}T00:00:00Z`);return Number.isNaN(n.getTime())?t:r.format(n)}function Ke(t){return[...t].sort((r,n)=>r.date===n.date?0:r.date>n.date?-1:1)}function Me(t){const r=[];return t.forEach(n=>{const i=r[r.length-1];i&&i.date===n.date?i.events.push(n):r.push({date:n.date,events:[n]})}),r}const _e=s.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0 0 18px;
`,ze=s.span`
  font-family: ${m};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-text-secondary);
`,Re=s.span`
  font-family: ${m};
  font-size: 14px;
  color: var(--color-text-primary);
`,He=s(de)`
  @media (max-width: 640px) {
    display: none;
  }
`,We=s(pe)`
  min-width: 560px;
`,Ve=s.span`
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`,B=s.span`
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--color-action-text) 12%, transparent);
  color: var(--color-action-text);
  font-family: ${m};
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;
`,Xe=s.div`
  display: none;

  @media (max-width: 640px) {
    display: grid;
    gap: 4px;
  }
`,Ze=s.p`
  margin: 14px 0 4px;
  padding: 8px 2px 4px;
  font-family: ${m};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-secondary);
  border-bottom: 1px solid var(--color-border-subtle);

  &:first-child {
    margin-top: 0;
  }
`,qe=s.div`
  display: grid;
  gap: 4px;
  padding: 10px 2px;
  border-bottom: 1px solid var(--color-border-subtle);
  font-family: ${m};

  &:last-child {
    border-bottom: none;
  }
`,Ge=s.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  color: var(--color-text-primary);
  font-size: 14px;
  font-weight: 600;
`,Qe=s.p`
  margin: 0;
  color: var(--color-text-secondary);
  font-size: 13px;
`,Je=s.div`
  margin-top: 16px;
`,Ye=({events:t,eta:r})=>{const{t:n}=w(),[i,o]=j.useState(!1),c=j.useMemo(()=>Ke(t??[]),[t]),x=c.length>I,u=i?c:c.slice(0,I),a=j.useMemo(()=>Me(u),[u]);return c.length===0&&!r?null:e.jsx(y,{children:e.jsxs(v,{children:[e.jsx(k,{children:n("tracking:timeline.title","Shipment History")}),r&&e.jsxs(_e,{children:[e.jsx(ze,{children:n("tracking:facts.estimatedDelivery")}),e.jsxs(Re,{children:[r.dateLabel,r.window?` · ${r.window}`:""]})]}),c.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(He,{children:e.jsxs(We,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:n("tracking:timeline.colTime","Time")}),e.jsx("th",{scope:"col",children:n("tracking:timeline.colActivity","Activity")}),e.jsx("th",{scope:"col",children:n("tracking:timeline.colLocation","Location")})]})}),e.jsx("tbody",{children:a.map((p,h)=>e.jsxs(D.Fragment,{children:[e.jsx("tr",{children:e.jsx("th",{colSpan:3,children:S(p.date,$)})}),p.events.map((d,f)=>{const g=h===0&&f===0;return e.jsxs("tr",{children:[e.jsx("td",{children:S(d.date,Ne)}),e.jsx("td",{children:e.jsxs(Ve,{children:[n(d.activityKey),g&&e.jsx(B,{children:n("tracking:timeline.latest","Latest")})]})}),e.jsx("td",{children:d.locationLabel})]},`${d.date}-${d.activityKey}-${f}`)})]},p.date))})]})}),e.jsx(Xe,{children:a.map((p,h)=>e.jsxs(D.Fragment,{children:[e.jsx(Ze,{children:S(p.date,$)}),p.events.map((d,f)=>{const g=h===0&&f===0;return e.jsxs(qe,{children:[e.jsxs(Ge,{children:[n(d.activityKey),g&&e.jsx(B,{children:n("tracking:timeline.latest","Latest")})]}),e.jsx(Qe,{children:d.locationLabel})]},`${d.date}-${d.activityKey}-${f}`)})]},p.date))}),x&&e.jsx(Je,{children:e.jsx(A,{type:"button","aria-expanded":i,onClick:()=>o(p=>!p),children:i?e.jsxs(e.Fragment,{children:[e.jsx(ue,{"aria-hidden":"true"}),n("tracking:timeline.showLess","Show Less")]}):e.jsxs(e.Fragment,{children:[e.jsx(xe,{"aria-hidden":"true"}),n("tracking:timeline.viewFullHistory","View Full History")]})})})]})]})})},et=s.div`
  display: grid;
  gap: 16px;
  min-width: 0;
`,tt=s(te)`
  dd { white-space: normal; overflow-wrap: anywhere; }
`,rt=s.div`
  overflow-x: auto;
`,nt=s.div`
  margin-top: 14px;
`,F=new Intl.NumberFormat("en-AU",{style:"currency",currency:"AUD"});function it(t){return t.destinationStreet??t.destinationSuburbStatePostcode}const at=({projection:t,level:r,onRequestTier2:n,eta:i,timeline:o,pod:c,exceptions:x,approachMap:u})=>{const{t:a}=w(),p=t.salesOrderStatusId,h=it(t),d=t.packages??[],f=d.some(l=>l.weightKg!=null),g=d.some(l=>l.pricing!=null),b=d.some(l=>l.salesOrderStatusId!=null);return e.jsxs(et,{children:[e.jsx(Ue,{statusId:p,eta:i}),x&&e.jsx(De,{items:x}),u,o&&e.jsx(Ye,{events:o}),c&&e.jsx(we,{pod:c}),e.jsx(y,{children:e.jsxs(v,{children:[e.jsx(k,{children:a("tracking:guest.details.title")}),e.jsx(tt,{items:[{label:a("portal:orders.sender"),value:t.shipperName,hint:t.senderPhone},{label:a("portal:orders.recipient"),value:t.recipientName,hint:t.recipientPhone},{label:a("tracking:facts.shipDate"),value:t.shipDate},{label:a("tracking:facts.origin"),value:t.originCityCountry},{label:a("tracking:facts.destination"),value:h},{label:a("tracking:facts.packages"),value:t.packageCount},{label:a("tracking:facts.weight"),value:t.totalWeightKg!=null?a("portal:orders.weightKg",{weight:t.totalWeightKg}):void 0},{label:a("portal:orders.packagePrice"),value:t.totalPricing!=null?F.format(t.totalPricing):void 0},{label:a("portal:orders.comment"),value:t.comment}].filter(l=>l.value!=null&&l.value!=="")})]})}),r==="guest_t1"&&n&&e.jsx(y,{children:e.jsxs(v,{children:[e.jsx(k,{children:a("tracking:tier2.gateTitle")}),e.jsx(J,{children:a("tracking:tier2.gateBody")}),e.jsx(nt,{children:e.jsx(Y,{type:"button",onClick:n,children:a("tracking:tier2.verifyButton")})})]})}),d.length>0&&e.jsx(y,{children:e.jsxs(v,{children:[e.jsx(k,{children:a("portal:orders.packagesTitle")}),e.jsx(rt,{children:e.jsxs(ee,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:a("portal:orders.packageId")}),f&&e.jsx("th",{scope:"col",children:a("portal:orders.packageWeight")}),g&&e.jsx("th",{scope:"col",children:a("portal:orders.packagePrice")}),b&&e.jsx("th",{scope:"col",children:a("portal:orders.colStatus")})]})}),e.jsx("tbody",{children:d.map(l=>e.jsxs("tr",{children:[e.jsx("td",{children:l.sid}),f&&e.jsx("td",{children:l.weightKg!=null?a("portal:orders.weightKg",{weight:l.weightKg}):"—"}),g&&e.jsx("td",{children:l.pricing!=null?F.format(l.pricing):"—"}),b&&e.jsx("td",{children:l.salesOrderStatusId!=null?e.jsx(_,{statusId:l.salesOrderStatusId}):"—"})]},l.sid))})]})})]})})]})};function st({isAuthenticated:t,isOwner:r,orderScope:n,guestTier:i}){return r?"owner":n==="sub"||n==="all"?"staff":"guest_t1"}const ot=new Set(["NSW","VIC","QLD","WA","SA","TAS","NT","ACT"]);function O(t){const r=typeof(t==null?void 0:t.address)=="string"?t.address.trim():"",n=typeof(t==null?void 0:t.postcode)=="string"?t.postcode.trim():"";if(!r)return{};const i=r.split(",").map(a=>a.trim()).filter(Boolean),o=i.length>1?i[i.length-1]:i[0],c=i.length>1?i.slice(0,-1).join(", "):void 0,x=[r,n].filter(Boolean).join(" ").trim()||void 0,u=[o,n].filter(Boolean).join(" ").trim()||void 0;return{street:c,suburbState:o,full:x,coarse:u}}function U(t){if(!t)return;const r=t.split(" ").filter(Boolean),n=r[r.length-1];return n&&ot.has(n.toUpperCase())?r.slice(0,-1).join(" ").trim()||void 0:t}function lt(t,r){const n=10**r;return Math.round(t*n)/n}function N(t,r){const n=t.filter(i=>typeof i=="number");if(n.length)return lt(n.reduce((i,o)=>i+o,0),r)}function ct(t,r){let n={sid:t.sid,salesOrderStatusId:t.salesOrderStatusId};return r!=="guest_t1"&&typeof t.weight=="number"&&(n={...n,weightKg:t.weight}),r==="owner"&&typeof t.pricing=="number"&&(n={...n,pricing:t.pricing}),n}function dt(t,r){var x,u,a,p;const n=t.packages??[],i=O(t.sender),o=O(t.recipient);let c={salesOrderId:t.salesOrderId,salesOrderStatusId:t.salesOrderStatusId,shipDate:t.pickupDate,packageCount:n.length,originCityCountry:U(i.suburbState)?`${U(i.suburbState)}, Australia`:void 0,destinationSuburbStatePostcode:o.coarse,packages:n.map(h=>ct(h,r))};return r!=="guest_t1"&&(c={...c,destinationStreet:o.full,shipperName:(x=t.sender)==null?void 0:x.name,recipientName:(u=t.recipient)==null?void 0:u.name,totalWeightKg:N(n.map(h=>h.weight),1)}),r==="owner"&&(c={...c,senderPhone:(a=t.sender)==null?void 0:a.mobile,recipientPhone:(p=t.recipient)==null?void 0:p.mobile,comment:t.comment,totalPricing:N(n.map(h=>h.pricing),2)}),c}const pt=s(oe)`
  flex: none;
  &::before { display: none; }
`,ht=s(W)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 42px;
  padding: 10px 16px;
  border-radius: 8px;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-primary);
  font-family: ${m};
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover {
    border-color: var(--color-action-text);
  }

  &:focus-visible {
    outline: 2px solid var(--color-action-text);
    outline-offset: 2px;
  }
`;function xt(t){const r=t==null?void 0:t.createdByUid;return typeof r=="string"?r:void 0}const Lt=()=>{const{t}=w(),{salesOrderId:r=""}=R(),n=H(),[i,o]=j.useState({kind:"loading"}),c=X(b=>b.uid),x=Z(),u=q("nextStopMap"),a=j.useRef(null),p=j.useCallback(()=>{const b=Symbol();a.current=b,o({kind:"loading"}),V(r).then(({data:l})=>{b===a.current&&o(l.salesOrderId===r?{kind:"ready",detail:l}:{kind:"error"})}).catch(()=>{b===a.current&&o({kind:"error"})})},[r]);j.useEffect(()=>(p(),()=>{a.current=null}),[p]);const h=i.kind==="ready"?i.detail:null,d=xt(h),g=st({isAuthenticated:!0,isOwner:!!(c&&d&&d===c),orderScope:x});return e.jsxs(ce,{children:[e.jsx(re,{eyebrow:t("portal:common.eyebrow"),title:t("portal:orders.detailTitle",{id:r}),description:t("portal:orders.detailLead"),action:e.jsxs(ht,{to:{pathname:"/portal/orders",search:n.search},children:[e.jsx(he,{"aria-hidden":"true"}),t("portal:orders.backToOrders")]})}),i.kind==="loading"&&e.jsx(y,{children:e.jsx(v,{"aria-busy":"true","aria-label":t("common:loading"),children:e.jsx(ne,{})})}),i.kind==="error"&&e.jsx(y,{children:e.jsxs(ie,{role:"alert",children:[t("portal:orders.detailLoadFailed"),e.jsx(A,{type:"button",onClick:p,children:t("common:retry")})]})}),(h==null?void 0:h.salesOrderId)===r&&e.jsx(at,{projection:dt(h,g),level:g,approachMap:u&&(g==="owner"||g==="staff")&&P[z(h.salesOrderStatusId??0).stepIndex]==="inTransit"&&e.jsx(pt,{children:e.jsx(se,{enabled:!0,shipment:{orderId:r,stage:"in_transit"},audience:"public",layout:"wide"})})})]})};export{Lt as default};
