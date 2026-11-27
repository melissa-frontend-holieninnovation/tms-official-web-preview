const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/NextStopMapCanvas-BOFmsEw8.js","assets/client-CG7M8TvS.js","assets/FleetImpact-DJmzwwMU.js","assets/FleetImpact-CTUOmyCT.css","assets/index-BCtHRY-a.js","assets/index-BU_go55w.css","assets/CarrierProvider-BFmhrA0k.js","assets/Status-ByVcXxNe.js","assets/arrow-left-CKYADNOU.js","assets/check-t_v-wtVN.js","assets/index-jPvTCT1d.js","assets/CheckOutlined-CfUlAc83.js"])))=>i.map(i=>d[i]);
var kt=Object.defineProperty;var vt=(t,e,r)=>e in t?kt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var Q=(t,e,r)=>vt(t,typeof e!="symbol"?e+"":e,r);import{H as yt,S as wt,C as $t,u as k,n as jt,_ as St}from"./index-BCtHRY-a.js";import{c as ut,j as a,r as h,R as Et}from"./client-CG7M8TvS.js";import{J as c,u as Ct,S as Tt,_ as _t,Q as Dt,H as u,a9 as At,R as Nt,U as I,ad as zt}from"./FleetImpact-DJmzwwMU.js";import{a_ as C,a$ as x,B as Rt,bv as Lt,bw as It,I as Mt,e as Pt,bf as $,D as Bt,K as Ft,b0 as pt,bx as Ht}from"./CarrierProvider-BFmhrA0k.js";import{S as Ot}from"./Status-ByVcXxNe.js";import{A as Kt}from"./arrow-left-CKYADNOU.js";import{C as Ut}from"./check-t_v-wtVN.js";import{z as f}from"./index-jPvTCT1d.js";import{R as Gt}from"./CheckOutlined-CfUlAc83.js";const qt=ut("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),Vt=ut("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]),L=8,Zt=c.ol`
  position: relative;
  margin: 0;
  padding: 0;
  list-style: none;
`,Xt=c.li`
  position: relative;
  display: grid;
  grid-template-columns: ${L}px minmax(0, 1fr);
  column-gap: ${C.textActionGap}px;
  padding-bottom: ${C.toolbarGroupGap}px;
  &:last-child { padding-bottom: 0; }
  /* The spine: from under this tick to the next one. */
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    left: ${L/2}px;
    top: ${L*2}px;
    bottom: 0;
    width: 1px;
    background: ${x("color-border-subtle")};
  }
  & .hi-tick {
    width: ${L}px;
    height: ${L}px;
    margin-top: ${C.stackTight+2}px;
    background: ${x("color-draw-edge")};
  }
  &:first-child .hi-tick { background: ${x("color-action")}; }
  & time { display: block; font-size: 12px; line-height: 16px; color: ${x("color-text-secondary")}; font-variant-numeric: tabular-nums; }
  & p { margin: 0; font-size: 14px; line-height: 20px; color: ${x("color-text-primary")}; }
  & .hi-meta { font-size: 12px; line-height: 16px; color: ${x("color-text-secondary")}; }
`;function Yt({items:t,label:e="History"}){return a.jsx(Zt,{"aria-label":e,"data-history":!0,children:t.map(r=>a.jsxs(Xt,{children:[a.jsx("span",{className:"hi-tick","aria-hidden":!0,style:{borderRadius:0}}),a.jsxs("div",{children:[a.jsx("time",{children:r.time}),a.jsx("p",{children:r.text}),r.meta&&a.jsx("div",{className:"hi-meta",children:r.meta})]})]},r.key))})}const tt="Australia/Sydney";function Jt(t){if(!t)return tt;try{return new Intl.DateTimeFormat("en-AU",{timeZone:t}).format(0),t}catch{return tt}}function Z(t,e,r){const i={};for(const n of new Intl.DateTimeFormat("en-AU",{timeZone:Jt(e),...r}).formatToParts(t))i[n.type]=n.value;return i}const Wt=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function T(t,e,r=!1){const i=Z(new Date(t),e,{weekday:"short",day:"numeric",month:"numeric",year:"numeric"}),n=Wt[Number(i.month)-1]??i.month;return`${i.weekday}, ${Number(i.day)} ${n}${r?` ${i.year}`:""}`}function X(t,e){const r=Z(new Date(t),e,{hour:"numeric",minute:"2-digit",hour12:!0});return`${r.hour}:${r.minute} ${(r.dayPeriod??"").toUpperCase()}`.trim()}function gt(t,e){const r=Z(t,e,{year:"numeric",month:"2-digit",day:"2-digit"});return`${r.year}-${r.month}-${r.day}`}function P(t,e=!1){return T(`${t}T12:00:00.000Z`,"UTC",e)}function Qt(t,e,r=new Date){const i=gt(r,e);if(t===i)return"today";const[n,o,l]=i.split("-").map(Number),s=new Date(Date.UTC(n,o-1,l+1)).toISOString().slice(0,10);return t===s?"tomorrow":null}function te(t,e,r=new Date){const[i,n,o]=gt(r,e).split("-").map(Number),[l,s,p]=t.split("-").map(Number);return Math.round((Date.UTC(l,s-1,p)-Date.UTC(i,n-1,o))/864e5)}function Y(t){return t?`${t.suburb}, ${t.state}`:null}function xt(t){return t?`${t.suburb} ${t.state} ${t.postcode}`.trim():null}const J={public:"sg-track-lookup",consignee:"sg-track-delivery-lookup"},ee=["sendit-go.track.recentlyTracked.v1"];function jr(t,e){try{sessionStorage.setItem(J[t],e)}catch{}}function Sr(t){try{return sessionStorage.getItem(J[t])}catch{return null}}function Er(t){try{sessionStorage.removeItem(J[t])}catch{}}function re(){try{for(const t of ee)localStorage.removeItem(t)}catch{}}const ae=["in_transit","delivered","completed"],ie=["delivered","completed"];function K(t,...e){for(const r of e){const i=t.travelHistory.find(n=>n.activity===r);if(i)return i.time}return null}function U(t){const e=t.travelHistory[t.travelHistory.length-1];return e?e.time:null}function ne(t){return t==="delivered"?"flag":t==="inTransit"?"truck":"box"}function et(t,e,r,i,n={}){return t.map((o,l)=>{const s=l<e?"done":l===e?"current":"future",p=s==="done"?"check":s==="current"&&r==="amber"?"truck":ne(o);return{key:o,labelKey:`tracking:guest.milestone.${s==="current"&&n[o]?n[o]:o}`,state:s,tone:s==="current"?r:"blue",icon:p,at:s==="future"?null:i[o]??null}})}const rt=["orderCreated","pickedUp","inTransit","delivered"],at=["preparing","inTransit","delivered"];function oe(t,e){const{stage:r}=t;if(r==="cancelled")return null;const i=K(t,"order_created"),n=K(t,"picked_up"),o=K(t,"signed","completed","arrived"),l=ie.includes(r),s=ae.includes(r);if(e==="public"){const g=l?rt.length:s?2:1;return et(rt,g,g===2?"amber":"blue",{orderCreated:i,pickedUp:s||l?n:null,inTransit:l?n:U(t),delivered:o},{pickedUp:"awaitingPickup"})}const p=l?at.length:s?1:0;return et(at,p,p===1?"amber":"blue",{preparing:s||l?i:U(t),inTransit:l?n:U(t),delivered:o})}function se(t,e){const r=oe(t,e);if(!r)return{labelKey:"tracking:guest.chip.cancelled",tone:"red"};const i=r.find(n=>n.state==="current");return i?{labelKey:i.labelKey,tone:i.tone}:{labelKey:"tracking:guest.milestone.delivered",tone:"blue"}}const N={blue:"#007FFF",amber:"#EA8118"},le=640,ce=c.div`
  --trk-page: var(--color-bg-canvas);
  --trk-band: var(--color-bg-canvas);
  --trk-card: var(--color-bg-surface);
  --trk-section: var(--color-bg-sunken);
  --trk-border: var(--color-border-subtle);
  --trk-ink: var(--color-text-primary);
  --trk-label-ink: var(--color-text-primary);
  --trk-muted: var(--color-text-secondary);
  --trk-tint: var(--color-fill-hover);
  --trk-link: var(--color-action-text);
  --trk-blue-ink: var(--color-action-text);
  --trk-red-ink: var(--color-status-danger-text);
  --trk-amber-ink: var(--color-status-warning-text);
  --trk-eta-label-mobile: var(--color-text-secondary);
  --trk-chip-red-bg: var(--color-status-danger-bg);
  --trk-chip-amber-bg: var(--color-status-warning-bg);
  --trk-chip-blue-bg: var(--color-status-info-bg);
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
`,w=t=>u`
  @media (max-width: ${le}px) {
    ${t}
  }
`,F=c.span`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  border: 0;
`,de=c.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* the shared SiteNav is fixed: 16px + 41px CTA + 16px + 1px hairline */
  padding-top: 74px;
  @media (max-width: 720px) {
    padding-top: 69px;
  }
`,ue=c.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 clamp(16px, 3vw, 32px);
  ${w(u`
    padding: 0 16px;
  `)}
`,Cr=({title:t,audience:e,children:r})=>{const{mode:i,toggleTheme:n}=Ct();return h.useEffect(()=>{re()},[]),a.jsxs(a.Fragment,{children:[a.jsx(Tt,{}),a.jsxs(yt,{children:[a.jsx("title",{children:t}),a.jsx("meta",{name:"robots",content:"noindex"})]}),a.jsx(Lt,{mode:i,children:a.jsxs(_t,{children:[a.jsx(wt,{theme:i,onToggleTheme:n,audience:e}),a.jsx(de,{children:a.jsx(ce,{children:r})}),a.jsx($t,{})]})})]})},pe=c.section`
  background: var(--color-bg-canvas);
  padding: 24px 0 0;
`,Tr=({title:t,subtitle:e,eyebrow:r,backTo:i,focusTitle:n})=>{const o=h.useRef(null);return h.useEffect(()=>{var l;if(n){const s=(l=o.current)==null?void 0:l.querySelector("h1");s==null||s.setAttribute("tabindex","-1"),s==null||s.focus()}},[n]),a.jsx(pe,{"data-testid":"track-title-band",children:a.jsx(ue,{ref:o,children:a.jsx(It,{eyebrow:i?a.jsxs(Dt,{to:i.to,children:[a.jsx(Kt,{size:14,"aria-hidden":!0})," ",i.label]}):r,title:t,description:e})})})},_r=c.div`
  padding: 0 0 48px;
  ${w(u`
    padding: 16px 0 32px;
  `)}
`,Dr=c.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${w(u`
    gap: 14px;
  `)}
`,A=Rt,W=c(Bt)`
  margin: 0 0 12px;
`,z=c.span`
  font-family: ${$.ui};
  font-size: 11px;
  font-weight: 700;
  line-height: 13px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--trk-muted);
  ${w(u`
    font-size: 10px;
    line-height: 12px;
  `)}
`,ge=({shipment:t,taxonomy:e})=>{const{t:r}=k(),i=se(t,e),n=t.stage==="cancelled"?"off":t.stage==="completed"||t.stage==="delivered"?"neutral":t.stage==="in_transit"?"live":"info";return a.jsx(Ot,{status:r(i.labelKey),tone:n,"data-testid":"status-chip"})},xe=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-height: 60px;
  ${w(u`
    min-height: 54px;
    align-items: flex-start;
  `)}
`,fe=c.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`,he=c.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,me=c.span`
  font-family: ${$.ui};
  font-size: 30px;
  font-weight: 700;
  line-height: 36px;
  color: var(--trk-ink);
  letter-spacing: 0.01em;
  ${w(u`
    font-size: 20px;
    line-height: 24px;
  `)}
`,be=c.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: ${N.blue};
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background: var(--trk-tint);
  }

  &:focus-visible {
    outline: 2px solid ${N.blue};
    outline-offset: 2px;
  }

  ${w(u`
    width: 44px;
    height: 44px;
    margin: -10px -10px -10px -6px;

    svg {
      width: 18px;
      height: 18px;
    }
  `)}
`,Ar=({shipment:t,taxonomy:e})=>{const{t:r}=k(),[i,n]=h.useState("idle"),o=async()=>{try{await navigator.clipboard.writeText(t.orderId),n("copied")}catch{n("failed")}window.setTimeout(()=>n("idle"),4e3)};return a.jsxs(xe,{children:[a.jsxs(fe,{children:[a.jsx(z,{children:r("tracking:guest.summary.trackingNumber")}),a.jsxs(he,{children:[a.jsx(me,{"data-testid":"tracking-number",children:t.orderId}),a.jsx(be,{type:"button",onClick:o,"aria-label":r("tracking:guest.summary.copy"),children:i==="copied"?a.jsx(Ut,{"aria-hidden":"true"}):a.jsx(Vt,{"aria-hidden":"true"})}),a.jsx(F,{role:"status","aria-live":"polite",children:i==="copied"?r("tracking:guest.summary.copied"):i==="failed"?r("tracking:guest.summary.copyFailed"):""})]})]}),a.jsx(ge,{shipment:t,taxonomy:e})]})},ke=c.div`
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
  ${({$neutral:t})=>w(u`
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
`,ve=c.span`
  align-self: center;
  width: 1px;
  height: 60px;
  background: var(--trk-border);
  ${w(u`
    display: none;
  `)}
`,it=c.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;

  .value {
    font-family: ${$.ui};
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    color: var(--trk-ink);
  }

  .sub {
    font-family: ${$.ui};
    font-size: 13px;
    line-height: 16px;
    color: var(--trk-muted);
  }

  ${({$primary:t})=>w(u`
      gap: 3px;
      ${t?u`
            padding: 10px 12px 12px;
            border-radius: 9px;
            background: var(--eta-mobile-bg);
            ${z} {
              color: var(--eta-mobile-label);
            }
            .value {
              font-size: 17px;
              line-height: 21px;
            }
          `:u`
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
`;function ye(t){return t.travelHistory[t.travelHistory.length-1]??null}function we(t){const e=t.travelHistory.find(r=>r.activity==="signed")??t.travelHistory.find(r=>r.activity==="completed")??t.travelHistory.find(r=>r.activity==="arrived");return(e==null?void 0:e.time)??null}function $e(t){var e,r;return((e=t.travelHistory.find(i=>i.activity==="cancelled"))==null?void 0:e.time)??((r=t.exceptions.find(i=>i.type==="cancelled"))==null?void 0:r.occurredAt)??null}function je(t,e=new Date){const{t:r}=k(),i=t.timezone,n=xt(t.destination);if(t.stage==="delivered"||t.stage==="completed"){const d=we(t);return{label:r("tracking:guest.eta.deliveredLabel"),value:d?`${T(d,i)}, ${X(d,i)}`:r("tracking:guest.eta.deliveredLabel"),sub:[d?T(d,i,!0):null,n].filter(Boolean).join(" · "),neutral:!1}}if(t.stage==="cancelled"){const d=$e(t);return{label:r("tracking:guest.eta.cancelledLabel"),value:d?T(d,i,!0):r("tracking:guest.eta.cancelledLabel"),sub:r("tracking:guest.eta.cancelledNote"),neutral:!0}}const o=t.estimatedDelivery;if(!o)return{label:r("tracking:guest.eta.label"),value:r("tracking:guest.eta.toBeConfirmed"),sub:[r("tracking:guest.eta.toBeConfirmedNote"),n].filter(Boolean).join(" · "),neutral:!1};const l=te(o.date,i,e);if(l<0)return{label:r("tracking:guest.eta.label"),value:r("tracking:guest.eta.toBeConfirmed"),sub:[r("tracking:guest.eta.previouslyExpected",{date:P(o.date,!0)}),n].filter(Boolean).join(" · "),neutral:!1};const s=Qt(o.date,i,e),p=o.timeWindow??"",g=s?r(`tracking:guest.eta.${s}${p}`):p?r(`tracking:guest.eta.day${p}`,{day:P(o.date,l>7)}):P(o.date,l>7);return{label:r("tracking:guest.eta.label"),value:g,sub:[P(o.date,!0),n].filter(Boolean).join(" · "),neutral:!1}}const Nr=({shipment:t,now:e})=>{const{t:r}=k(),i=je(t,e),n=ye(t),o=t.timezone;return a.jsxs(ke,{"data-testid":"eta-panel",$neutral:i.neutral,children:[a.jsxs(it,{$primary:!0,children:[a.jsx(z,{children:i.label}),a.jsx("span",{className:"value","data-testid":"eta-value",children:i.value}),i.sub&&a.jsx("span",{className:"sub",children:i.sub})]}),a.jsx(ve,{"aria-hidden":"true"}),a.jsxs(it,{children:[a.jsx(z,{children:r("tracking:guest.latest.label")}),a.jsx("span",{className:"value","data-testid":"latest-value",children:r(n?`tracking:guest.activity.${n.activity}`:"tracking:guest.latest.none")}),n&&a.jsx("span",{className:"sub",children:[T(n.time,o,!0),X(n.time,o),Y(n.location)].filter(Boolean).join(" · ")})]})]})},Se=c(Ft)`
  dd { white-space: normal; overflow-wrap: anywhere; }
`;function Ee(t){const{t:e}=k(),r=t.timezone,i=[];i.push(["trackingNumber",e("tracking:guest.details.trackingNumber"),t.orderId]),i.push(["shipDate",e("tracking:guest.details.shipDate"),t.shipDate?T(t.shipDate,r,!0):t.stage==="cancelled"?"—":e("tracking:guest.details.notShipped")]),t.carrierName&&i.push(["carrier",e("tracking:guest.details.carrier"),t.carrierName]),i.push(["origin",e("tracking:guest.details.origin"),Y(t.origin)??"—"]),i.push(["destination",e("tracking:guest.details.destination"),xt(t.destination)??"—"]);const n=e("tracking:guest.details.packageCount",{count:t.packages.current}),o=t.packages.affected>0?` · ${e("tracking:guest.details.affected",{count:t.packages.affected})}`:"";return i.push(["packages",e("tracking:guest.details.packages"),`${n}${o}`]),t.proofType&&i.push(["proof",e("tracking:guest.details.proof"),e(`tracking:guest.details.proofType.${t.proofType}`)]),i}const zr=({shipment:t,receiver:e})=>{const{t:r}=k(),i=Ee(t).filter(([n])=>n!=="trackingNumber"&&(!e||n!=="shipDate"));return a.jsxs(A,{"data-testid":"details-card","aria-labelledby":"trk-details-title",children:[a.jsx(W,{id:"trk-details-title",children:r("tracking:guest.details.title")}),a.jsx(Se,{columns:2,items:i.map(([,n,o])=>({label:n,value:o}))})]})},Ce=({shipment:t,testId:e})=>{const{t:r}=k(),i=[...t.travelHistory].reverse().map((n,o)=>({key:`${n.time}-${n.activity}-${o}`,time:[T(n.time,t.timezone,!0),X(n.time,t.timezone)].filter(Boolean).join(" · "),text:r(`tracking:guest.activity.${n.activity}`),meta:Y(n.location)}));return a.jsx("div",{"data-testid":e,children:a.jsx(Yt,{items:i,label:r("tracking:guest.history.title")})})},Rr=({shipment:t})=>{const{t:e}=k();return a.jsxs(A,{"data-testid":"history-card","aria-labelledby":"trk-history-title",children:[a.jsx(W,{id:"trk-history-title",children:e("tracking:guest.history.title")}),t.travelHistory.length?a.jsx(Ce,{shipment:t,testId:"history-list"}):a.jsx("p",{children:e("tracking:guest.history.empty")})]})},Te=c.h2`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 10px;
  font-family: ${$.ui};
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: var(--trk-ink);

  svg {
    width: 20px;
    height: 20px;
    color: ${N.amber};
    flex-shrink: 0;
  }
`,_e=c.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-family: ${$.ui};
  font-size: 14px;
  line-height: 1.45;
  color: var(--trk-ink);

  .when {
    color: var(--trk-muted);
    font-size: 13px;
  }
`;function De(t){return`mailto:${jt.supportEmail}?subject=${encodeURIComponent(t)}`}const ft=c.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 46px;
  padding: 0 18px;
  border-radius: 8px;
  border: 1px solid var(--trk-border);
  background: var(--trk-card);
  font-family: ${$.ui};
  font-size: 14px;
  font-weight: 600;
  color: var(--trk-ink);
  text-decoration: none;
  cursor: pointer;

  &:hover {
    border-color: ${N.blue};
  }

  &:focus-visible {
    outline: 2px solid ${N.blue};
    outline-offset: 2px;
  }
`,Ae=c.div`
  margin-top: 12px;
`,Lr=({shipment:t,showContact:e=!0})=>{const{t:r}=k(),i=t.exceptions.filter(o=>o.type!=="cancelled"||t.stage!=="cancelled");if(i.length===0)return null;const n=t.timezone;return a.jsxs(A,{"data-testid":"exceptions-card","aria-labelledby":"trk-exceptions-title",role:"region",children:[a.jsxs(Te,{id:"trk-exceptions-title",children:[a.jsx(qt,{"aria-hidden":"true"}),r("tracking:guest.exceptions.title")]}),a.jsx(_e,{children:i.map((o,l)=>a.jsxs("li",{children:[r(`tracking:guest.exceptions.${o.type}`,{count:o.count??1})," ",o.occurredAt&&a.jsx("span",{className:"when",children:T(o.occurredAt,n,!0)})]},`${o.type}-${l}`))}),e&&a.jsx(Ae,{children:a.jsx(ft,{href:De(`Delivery update — ${t.orderId}`),children:r("tracking:guest.exceptions.contact")})})]})},Ne=c.form`
  display: flex;
  align-items: center;
  gap: 8px;
  max-width: 600px;
  & .ant-input { min-width: 0; }
  @media (max-width: 420px) {
    flex-wrap: wrap;
    > .ant-input { flex: 1 1 160px; }
  }
`,ze=At`
  to {
    transform: rotate(360deg);
  }
`,Re=c.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.35);
  border-top-color: #ffffff;
  animation: ${ze} 0.8s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    border-color: #ffffff;
  }
`,Le=c.p`
  margin: 8px 0 0;
  font-family: ${$.ui};
  font-size: 13px;
  line-height: 1.4;
  color: ${({$tone:t})=>t==="error"?"var(--trk-red-ink)":t==="notice"?"var(--trk-ink)":"var(--trk-muted)"};
  font-weight: ${({$tone:t})=>t==="notice"?600:400};
`;function Ir(t,e){return!t||t.kind==="ok"?null:{tone:t.kind==="format"||t.kind==="notFound"?"error":"notice",text:e(`tracking:guest.error.${t.kind}`)}}const Mr=({value:t,onChange:e,onSubmit:r,busy:i,message:n})=>{const{t:o}=k(),l=(n==null?void 0:n.tone)??"hint";return a.jsxs("div",{children:[a.jsxs(Ne,{role:"search",noValidate:!0,onSubmit:s=>{s.preventDefault(),!i&&r()},children:[a.jsx(Mt,{id:"trk-order-id",name:"orderId",value:t,onChange:s=>e(s.target.value),placeholder:o("tracking:guest.entry.placeholder"),"aria-label":o("tracking:guest.entry.inputLabel"),"aria-describedby":"trk-order-id-hint","aria-invalid":l==="error"?!0:void 0,autoComplete:"off",autoCapitalize:"characters",spellCheck:!1,maxLength:32}),a.jsxs(Pt,{type:"submit","aria-disabled":i||void 0,"aria-busy":i||void 0,children:[i&&a.jsx(Re,{"aria-hidden":"true"}),o(i?"tracking:guest.entry.submitBusy":"tracking:guest.entry.submit")]})]}),a.jsx(Le,{id:"trk-order-id-hint",role:n?"alert":void 0,$tone:l,children:(n==null?void 0:n.text)??o("tracking:guest.entry.hint")}),a.jsx(F,{role:"status","aria-live":"polite",children:i?o("tracking:guest.entry.busyStatus"):""})]})},B=c.span`
  display: block;
  width: ${({$w:t})=>t};
  height: ${({$h:t})=>t??14}px;
  border-radius: 6px;
  background: var(--trk-rail-future);
`,Ie=c(A)`
  display: flex;
  flex-direction: column;
  gap: 18px;
`,Pr=()=>{const{t}=k();return a.jsxs(Ie,{"aria-busy":"true","aria-label":t("tracking:guest.error.loading"),"data-testid":"result-loading",children:[a.jsx(B,{$w:"140px",$h:11}),a.jsx(B,{$w:"260px",$h:30}),a.jsx(B,{$w:"100%",$h:16}),a.jsx(B,{$w:"100%",$h:72})]})},Me=c.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  font-family: ${$.ui};
  font-size: 15px;
  line-height: 1.5;
  color: var(--trk-ink);

  p {
    margin: 0;
  }
`,Br=({text:t,onRetry:e,testId:r,children:i})=>{const{t:n}=k();return a.jsx(A,{"data-testid":r,role:"alert",children:a.jsxs(Me,{children:[a.jsx("p",{children:t}),e&&a.jsxs(ft,{as:"button",type:"button",onClick:e,children:[a.jsx(Nt,{"aria-hidden":"true",width:16,height:16}),n("tracking:guest.error.retry")]}),i]})})},G=f.tuple([f.number().min(-180).max(180),f.number().min(-90).max(90)]),q=f.string().datetime({offset:!0}),Pe=["not_next_stop","verification_required","gps_unavailable","driver_offline","trip_completed","expired","resequenced"];f.object({eligible:f.literal(!1),reason:f.enum(Pe)}).strict();f.object({eligible:f.literal(!0),expiresAt:q,driver:f.object({position:G,capturedAt:q,heading:f.number().min(0).max(360).nullable().optional()}).strict(),destination:f.object({position:G}).strict(),approach:f.object({coordinates:f.array(G).min(2).max(1e3),source:f.string().min(1)}).strict().nullable().optional(),eta:f.object({minutes:f.number().int().min(0).max(240),computedAt:q}).strict().nullable().optional(),driverDisplay:f.object({initials:f.string().regex(/^[A-Z]{1,2}$/)}).strict().nullable().optional()}).strict();const Be=async()=>({kind:"unsupported"}),Fe=120*1e3;function ht(t,e){return e-Date.parse(t.driver.capturedAt)>Fe}function He(t,e){return e>=Date.parse(t.expiresAt)}const nt=30*1e3,Oe=60*1e3,Ke=15*1e3,Ue=2**31-1,Ge=2;async function qe(){return Be}const ot=()=>({wasEligible:!1,freshStreak:0,recovering:!1,staleData:null});function Ve(t,e,r){switch(t.kind){case"unsupported":return{view:{status:"off"},keepPolling:!1};case"not_eligible":switch(t.reason){case"gps_unavailable":case"driver_offline":return r.wasEligible=!0,r.freshStreak=0,{view:{status:"unavailable",reason:t.reason},keepPolling:!0};case"expired":case"resequenced":return r.wasEligible?{view:{status:"ended",reason:t.reason},keepPolling:!0}:{view:{status:"off"},keepPolling:!0};case"trip_completed":return{view:{status:"off"},keepPolling:!1};default:return{view:{status:"off"},keepPolling:!0}}case"eligible":return r.wasEligible=!0,He(t.data,e)?{view:{status:"ended",reason:"expired"},keepPolling:!0}:ht(t.data,e)?(r.freshStreak=0,r.recovering=!0,r.staleData=t.data,{view:{status:"stale",data:t.data},keepPolling:!0}):(r.freshStreak+=1,r.recovering&&r.freshStreak<Ge?{view:{status:"stale",data:r.staleData??t.data},keepPolling:!0}:(r.recovering=!1,r.staleData=null,{view:{status:"live",data:t.data},keepPolling:!0}));case"refused":return{view:r.wasEligible?{status:"error",reason:"refused"}:{status:"off"},keepPolling:!1};case"rate_limited":return{view:r.wasEligible?{status:"rate_limited",retryAfter:e+Oe}:{status:"off"},keepPolling:!1};default:return{view:r.wasEligible?{status:"error",reason:"failed"}:{status:"off"},keepPolling:!1}}}function Ze({enabled:t,orderId:e,stage:r,accessToken:i,source:n}){const[o,l]=h.useState({status:"off"}),[s,p]=h.useState(0),g=h.useRef(o);g.current=o;const d=h.useRef(ot()),v=t&&r==="in_transit";h.useEffect(()=>{d.current=ot()},[v,e,i]);const b=`${v}|${e}|${i??""}`,j=h.useRef(b);h.useEffect(()=>{if(j.current!==b&&(j.current=b,l({status:"off"})),!v){l({status:"off"});return}let S=!0,E,_;const R=m=>{l(m)},y=m=>{if(_&&clearTimeout(_),m.status!=="live"&&m.status!=="stale")return;const M=Date.parse(m.data.expiresAt)-Date.now();_=setTimeout(()=>{S&&R({status:"ended",reason:"expired"})},Math.min(Math.max(0,M),Ue))},O=async()=>{if(typeof document<"u"&&document.hidden){E=setTimeout(O,nt);return}let m;try{m=await(n??await qe())({orderId:e,accessToken:i})}catch{m={kind:"error"}}if(!S)return;const{view:M,keepPolling:bt}=Ve(m,Date.now(),d.current);R(M),y(M),bt&&(E=setTimeout(O,nt))};O();const mt=setInterval(()=>{const m=g.current;m.status==="live"&&ht(m.data,Date.now())&&(d.current.freshStreak=0,d.current.recovering=!0,d.current.staleData=m.data,R({status:"stale",data:m.data}))},Ke);return()=>{S=!1,E&&clearTimeout(E),_&&clearTimeout(_),clearInterval(mt)}},[v,e,i,n,s,b]);const H=h.useCallback(()=>p(S=>S+1),[]);return{view:j.current===b?o:{status:"off"},retry:H}}const Xe=h.lazy(()=>St(()=>import("./NextStopMapCanvas-BOFmsEw8.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]))),Ye=c.div`
  display: grid;
  gap: 16px;
  grid-template-columns: minmax(0, 1fr);
  ${({$wide:t})=>t&&u`
      @media (min-width: 900px) {
        grid-template-columns: minmax(0, 360fr) minmax(0, 808fr);
        align-items: stretch;
      }
    `}
`,st=c.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
`,Je=c(z)`
  color: var(--trk-link);
`,We=c.p`
  margin: 0;
  font-family: ${I};
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  color: var(--trk-ink);
`,lt=c.p`
  margin: 0;
  font-family: ${I};
  font-size: 13px;
  line-height: 18px;
  color: var(--trk-muted);
`,ct=c.p`
  margin: 0;
  font-family: ${I};
  font-size: 15px;
  line-height: 21px;
  color: var(--trk-ink);
`;c.p`
  align-self: flex-start;
  margin: 4px 0 0;
  padding: 3px 10px;
  border-radius: 999px;
  border: 1px dashed var(--trk-border);
  font-family: ${I};
  font-size: 12px;
  font-weight: 600;
  color: var(--trk-muted);
`;const Qe=c.div`
  height: ${({$wide:t})=>t?"342px":"300px"};
  ${w(u`
    height: 220px;
  `)}
`,tr=c.div`
  height: 100%;
  border-radius: 12px;
  border: 1px solid var(--trk-border);
  background: var(--trk-section);
`,er=c.button`
  align-self: flex-start;
  min-height: 36px;
  padding: 6px 14px;
  border: 1px solid var(--trk-border);
  border-radius: 8px;
  background: var(--trk-card);
  color: var(--trk-ink);
  font-family: ${I};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  &:focus-visible {
    outline: 2px solid ${N.blue};
    outline-offset: 2px;
  }
  @media (pointer: coarse) {
    min-height: 44px;
  }
`;class rr extends Et.Component{constructor(){super(...arguments);Q(this,"state",{failed:!1})}static getDerivedStateFromError(){return{failed:!0}}render(){return this.state.failed?this.props.fallback:this.props.children}}function ar(t,e){const[r,i]=h.useState(()=>Date.now());return h.useEffect(()=>{if(!e)return;i(Date.now());const n=setInterval(()=>i(Date.now()),t);return()=>clearInterval(n)},[t,e]),r}function V(t,e){return Math.max(0,Math.round((e-Date.parse(t))/6e4))}const Fr=({enabled:t,shipment:e,audience:r,layout:i,accessToken:n,source:o})=>{const{t:l}=k(),{view:s,retry:p}=Ze({enabled:t,orderId:e.orderId,stage:e.stage,accessToken:n,source:o}),g=ar(15*1e3,s.status!=="off"),d=!1,v=y=>`tracking:guest.nextStop.${r}.${y}`,b=y=>{switch(y.status){case"live":return y.data.eta?l("tracking:guest.nextStop.etaMinutes",{count:y.data.eta.minutes}):l("tracking:guest.nextStop.etaSoon");case"stale":return l("tracking:guest.nextStop.stale",{count:Math.max(1,V(y.data.driver.capturedAt,g))});case"unavailable":return l("tracking:guest.nextStop.unavailable");case"ended":return l("tracking:guest.nextStop.ended");case"error":return l(y.reason==="refused"?"tracking:guest.nextStop.errorRefused":"tracking:guest.nextStop.errorFailed");case"rate_limited":return l("tracking:guest.nextStop.rateLimited");default:return""}},[j,H]=h.useState(""),S=h.useRef("off");if(h.useEffect(()=>{s.status!==S.current&&(S.current=s.status,H(s.status==="off"?"":b(s)))},[s]),s.status==="off")return null;if(s.status==="ended"||s.status==="error"||s.status==="rate_limited"){const y=s.status==="error"||s.status==="rate_limited"&&g>=s.retryAfter;return a.jsxs(A,{"data-testid":"next-stop-card","data-state":s.status,"aria-label":l("tracking:guest.nextStop.liveLocation"),children:[a.jsx(F,{role:"status","aria-live":"polite",children:j}),a.jsxs(st,{children:[a.jsx(z,{children:l("tracking:guest.nextStop.liveLocation")}),a.jsx(ct,{"data-testid":"next-stop-message",children:b(s)}),y&&a.jsx(er,{type:"button",onClick:p,children:l("tracking:guest.nextStop.retry")})]})]})}const E=s.status==="live",_=i==="wide"&&E,R=a.jsx(lt,{"data-testid":"next-stop-map-unavailable",children:l(v("mapUnavailable"))});return a.jsxs(A,{"data-testid":"next-stop-card","data-state":s.status,"aria-labelledby":"trk-next-stop-title",children:[a.jsx(F,{role:"status","aria-live":"polite",children:j}),a.jsxs(Ye,{$wide:_,children:[a.jsxs(st,{children:[a.jsx(Je,{children:l(v(E?"eyebrowLive":"eyebrowNext"))}),a.jsx(W,{id:"trk-next-stop-title",children:l(v("title"))}),s.status==="live"?a.jsxs(a.Fragment,{children:[a.jsx(We,{"data-testid":"next-stop-eta",children:b(s)}),a.jsx(lt,{children:V(s.data.driver.capturedAt,g)===0?l("tracking:guest.nextStop.updatedNow"):l("tracking:guest.nextStop.updated",{count:V(s.data.driver.capturedAt,g)})})]}):a.jsx(ct,{"data-testid":"next-stop-message",children:b(s)}),d]}),E&&a.jsx(rr,{fallback:R,children:a.jsx(Qe,{$wide:i==="wide",children:a.jsx(h.Suspense,{fallback:a.jsx(tr,{"aria-hidden":"true"}),children:a.jsx(Xe,{data:s.data,title:l(v("mapRegion"))})})})})]})]})},D={wizard:24,compact:20},ir=c.ol`
  display: flex;
  align-items: flex-start;
  margin: 0;
  padding: 0;
  list-style: none;
  min-width: 0;
`,nr=c.li`
  position: relative;
  /* A wizard step takes its own words plus an equal share of the spare room, so every connector is the same length
     whatever the labels' lengths; a compact track keeps equal columns. */
  flex: ${({$compact:t})=>t?"1 1 0":"1 1 auto"};
  min-width: 0;
  display: flex;
  ${({$compact:t})=>t?u`flex-direction: column; align-items: center; text-align: center; gap: ${C.stackTight}px;`:u`flex-direction: row; align-items: center; gap: ${C.inlineGap}px;`}
  &:last-child { flex: ${({$compact:t})=>t?"1 1 0":"0 0 auto"}; }
`,or=c.span`
  ${({$compact:t,$done:e})=>t?u`
          position: absolute;
          top: ${D.compact/2-1}px;
          left: calc(50% + ${D.compact/2+4}px);
          right: calc(-50% + ${D.compact/2+4}px);
          height: 2px;
          background: ${e?x("color-action"):x("color-border-subtle")};
        `:u`
          flex: 1 1 auto;
          min-width: 16px;
          height: 1px;
          margin: 0 ${C.inlineGap}px;
          background: ${e?x("color-action"):x("color-border-subtle")};
        `}
`,sr=c.span`
  flex: none;
  display: inline-grid;
  place-items: center;
  width: ${({$compact:t})=>t?D.compact:D.wizard}px;
  height: ${({$compact:t})=>t?D.compact:D.wizard}px;
  border-radius: ${pt.tag}px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  /* Done is a square outline with a tick, never a filled box (a filled square reads as a ticked checkbox). */
  ${({$state:t,$now:e})=>t==="done"?u`box-shadow: inset 0 0 0 1.5px ${x("color-action-text")}; color: ${x("color-action-text")}; ${e?u`background: ${x("color-fill-selected")};`:""}`:t==="now"?u`box-shadow: inset 0 0 0 1.5px ${x("color-action-text")}; color: ${x("color-action-text")};`:u`box-shadow: inset 0 0 0 1px ${x("color-border-control")}; color: ${x("color-text-secondary")};`}
  & .anticon { font-size: 12px; }
  /* On a compact track "now" is a filled 8px square inside the edge. */
  & .st-now { width: 8px; height: 8px; border-radius: 0; background: ${x("color-action-text")}; }
`,lr=c.span`
  min-width: 0;
  font-size: ${({$compact:t})=>t?12:13}px;
  line-height: ${({$compact:t})=>t?16:18}px;
  font-weight: 600;
  color: ${({$state:t})=>t==="next"?x("color-text-secondary"):x("color-text-primary")};
  ${({$now:t,$compact:e})=>t&&!e&&u`
      box-shadow: inset 0 -2px 0 ${x("color-action")};
      padding-bottom: ${C.stackTight}px;
    `}
  & small { display: block; font-size: 12px; line-height: 16px; font-weight: 400; color: ${x("color-text-secondary")}; }
`,cr=c.button`
  display: inline-flex;
  align-items: center;
  gap: ${C.inlineGap}px;
  min-width: 0;
  white-space: nowrap;
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
  border-radius: ${pt.tag}px;
  ${Ht}
`;function dr({steps:t,current:e,onStep:r,compact:i=!1,label:n="Steps",className:o,testId:l}){return a.jsx(ir,{$compact:i,"aria-label":n,className:o,"data-stepper":i?"compact":"wizard","data-testid":l,children:t.map((s,p)=>{const g=p===e,d=s.done??p<e?"done":g?"now":"next",v=a.jsx(sr,{$state:d,$compact:i,$now:g,"aria-hidden":!0,children:d==="done"?a.jsx(Gt,{}):i&&d==="now"?a.jsx("span",{className:"st-now"}):i?null:p+1}),b=a.jsxs(lr,{$state:d,$compact:i,$now:g,children:[s.label,s.sub&&a.jsx("small",{children:s.sub})]}),j=!!r&&d==="done"&&!g;return a.jsxs(nr,{$compact:i,"aria-current":g?"step":void 0,"data-step-state":d,"data-step-current":g||void 0,children:[j?a.jsxs(cr,{type:"button",onClick:()=>r==null?void 0:r(p),children:[v,b]}):a.jsxs(a.Fragment,{children:[v,b]}),p<t.length-1&&a.jsx(or,{$done:d==="done",$compact:i,"aria-hidden":!0})]},s.key)})})}function dt(t){return a.jsx("svg",{viewBox:"106.147 26.99 14.656 13.858","aria-hidden":"true",focusable:"false",...t,children:a.jsx("path",{fill:"currentColor",d:zt})})}const ur=c.div`
  position: relative;
  overflow: hidden;
  height: 14px;
  margin-bottom: 10px;
  border-radius: 4px;
  background: var(--color-border-subtle);

  .progress-now, .progress-done { position: absolute; inset-block: 0; left: 0; }
  .progress-now { width: var(--current-edge); background: var(--current-fill); }
  .progress-done { width: var(--complete-edge); background: var(--color-action); }
  .progress-point {
    clip-path: polygon(0 0, calc(100% - 7px) 0, 100% 50%, calc(100% - 7px) 100%, 0 100%);
  }
  svg { position: absolute; right: 4px; top: 2px; width: 10.6px; height: 10px; color: white; }
`,pr=c(dr)`
  @media (max-width: 680px) {
    ${({$dense:t})=>t&&`
      li > span:nth-child(2) { max-width: 170%; width: max-content; }
      li:first-child > span:nth-child(2) { align-self: flex-start; text-align: left; }
      li:last-child > span:nth-child(2) { align-self: flex-end; text-align: right; }
      li:nth-child(even) > span:nth-child(2) { margin-top: 36px; }
    `}
  }
`;function Hr({current:t,steps:e,label:r,testId:i}){var p,g;const n=e.length,o=t>=n||t===n-1&&((p=e[t])==null?void 0:p.key)==="completed",l=o?n:t,s=((g=e[t])==null?void 0:g.key)==="inTransit"?"var(--color-accent-orange)":"var(--color-action)";return a.jsxs("div",{children:[a.jsxs(ur,{"aria-hidden":"true","data-tracking-progress":!0,style:{"--complete-edge":`${100*l/n}%`,"--current-edge":`${100*Math.min(t+1,n)/n}%`,"--current-fill":s},children:[!o&&a.jsx("span",{className:"progress-now progress-point",children:!l&&a.jsx(dt,{})}),l>0&&a.jsx("span",{className:o?"progress-done":"progress-done progress-point",children:a.jsx(dt,{})})]}),a.jsx(pr,{$dense:e.length>4,compact:!0,current:t,label:r,steps:e,testId:i})]})}export{qt as A,_r as C,Hr as D,Nr as E,Br as F,Rr as H,Fr as N,Pr as R,Dr as S,ce as T,F as V,Cr as a,Tr as b,ue as c,Mr as d,Sr as e,Er as f,oe as g,Ar as h,Lr as i,zr as j,ft as k,De as l,se as m,A as n,T as o,w as p,jr as r,Ir as s,je as u};
