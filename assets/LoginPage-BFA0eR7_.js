import{r as s,j as o}from"./client-CG7M8TvS.js";import{u as J,a as R,d as W,I as D,R as G,f as L,e as q,g as $}from"./index-DcY9VUCH.js";import{M as K,X as Q,J as r,U as y}from"./FleetImpact-CqoBoVCC.js";import{p as Y}from"./apiRoutes-B1GqQCOm.js";import{P as Z,B as ee,I as _,e as te}from"./CarrierProvider-DI5BnCuL.js";import{P as oe}from"./PortalShell-DRhPh3ku.js";import"./api-B1EnflDK.js";import"./index-jPvTCT1d.js";class x extends Error{}x.prototype.name="InvalidTokenError";function ne(t){return decodeURIComponent(atob(t).replace(/(.)/g,(a,i)=>{let l=i.charCodeAt(0).toString(16).toUpperCase();return l.length<2&&(l="0"+l),"%"+l}))}function re(t){let a=t.replace(/-/g,"+").replace(/_/g,"/");switch(a.length%4){case 0:break;case 2:a+="==";break;case 3:a+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return ne(a)}catch{return atob(a)}}function ae(t,a){if(typeof t!="string")throw new x("Invalid token specified: must be a string");a||(a={});const i=a.header===!0?0:1,l=t.split(".")[i];if(typeof l!="string")throw new x(`Invalid token specified: missing part #${i+1}`);let f;try{f=re(l)}catch(g){throw new x(`Invalid token specified: invalid base64 for part #${i+1} (${g.message})`)}try{return JSON.parse(f)}catch(g){throw new x(`Invalid token specified: invalid json for part #${i+1} (${g.message})`)}}const ie={name:"SenditGo"},A="portal-recaptcha-container",le=r.div`
  display: flex;
  justify-content: center;
  padding-top: clamp(8px, 6vh, 64px);
`,se=r(ee)`width: 100%; max-width: 440px;`,F=r.label`
  display: block;
  font-family: ${y};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-text-secondary);
  margin: 26px 0 8px;
`,ce=r.div`
  display: flex;
  gap: 10px;
`,de=r.span`
  padding-inline: 12px;
  background: var(--color-bg-sunken);
  border-radius: 6px;
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  color: var(--color-text-secondary);
  user-select: none;
`,pe=r(_)`
  flex: 1;
  min-width: 0;
`,ue=r(_)`
  width: 100%;
  text-align: center;
  font-size: 22px;
  letter-spacing: 0.45em;
  font-variant-numeric: tabular-nums;
`,N=r.span`
  display: inline-block;
  width: 14px;
  height: 14px;
  margin-right: 8px;
  border-radius: 50%;
  border: 2px solid color-mix(in srgb, var(--color-text-on-action) 35%, transparent);
  border-top-color: var(--color-text-on-action);
  animation: portal-login-spin 0.7s linear infinite;
  vertical-align: -2px;

  @keyframes portal-login-spin {
    to { transform: rotate(360deg); }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,U=r(te)`width: 100%; margin-top: 24px;`,O=r.button`
  border: none;
  background: transparent;
  padding: 4px 6px;
  font-family: ${y};
  font-size: 13px;
  color: var(--color-action-text);
  cursor: pointer;
  border-radius: 6px;
  &:hover {
    text-decoration: underline;
  }
  &:focus-visible {
    outline: 2px solid var(--color-action-text);
    outline-offset: 1px;
  }
  &:disabled {
    color: var(--color-text-secondary);
    cursor: not-allowed;
    text-decoration: none;
  }
`,fe=r.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
`,B=r.p`
  margin: 14px 0 0;
  font-family: ${y};
  font-size: 13.5px;
  color: var(--color-status-danger-text);
`,ge=r.p`
  margin: 6px 0 0;
  font-family: ${y};
  font-size: 13.5px;
  color: var(--color-text-secondary);
`;r.div`
  margin-top: 18px;
  text-align: center;
`;const Ce=()=>{var T;const{t}=J(),a=K(),i=Q(),l=R(e=>e.login),f=R(e=>e.token),[g,v]=s.useState("phone"),[w,z]=s.useState(""),[k,j]=s.useState(""),[c,h]=s.useState(!1),[b,d]=s.useState(null),p=s.useRef(null),C=s.useRef(null),S=W((T=i.state)==null?void 0:T.from,"/portal/orders");s.useEffect(()=>{f&&a(S,{replace:!0})},[f]),s.useEffect(()=>()=>{var e;(e=p.current)==null||e.clear(),p.current=null},[]);const I=()=>`+61${w.replace(/[^\d]/g,"").replace(/^0/,"")}`,M=e=>{const n=ae(e.data.token),m=Number.isFinite(n.exp)?n.exp-Math.floor(Date.now()/1e3):86400,P={maxAge:Math.max(60,m),secure:!D,sameSite:"strict"};$("X-Token",e.data.token,P),$("X-Refresh-Token",e.data.refresh,P),l({token:e.data.token,refresh:e.data.refresh,uid:n.uid,name:e.data.name||n.name||"",companyUid:n.companyUid,permission:e.data.permission??[]}),a(S,{replace:!0})},V=e=>{const n=e==null?void 0:e.code;return typeof n=="number"&&n>0?t(`statusCode:${n}`,t("portal:login.loginFailed")):t("portal:login.loginFailed")},E=async()=>{var n,u;if(d(null),w.replace(/[^\d]/g,"").length<8){d(t("portal:login.invalidPhone"));return}h(!0);try{(n=p.current)==null||n.clear(),p.current=new G(L,A,{size:"invisible"}),C.current=await q(L,I(),p.current),j(""),v("otp")}catch(m){console.error("[portal login] send code failed",m.code),d(t("portal:login.sendFailed")),(u=p.current)==null||u.clear(),p.current=null}finally{h(!1)}},H=async e=>{e.preventDefault(),await E()},X=async e=>{if(e.preventDefault(),d(null),k.replace(/[^\d]/g,"").length!==6){d(t("portal:login.invalidOtp"));return}if(!C.current){v("phone");return}h(!0);try{const u=await(await C.current.confirm(k)).user.getIdToken(),m=await Y({token:u});M(m)}catch(n){const u=n==null?void 0:n.code;d(typeof u=="string"?t("portal:login.otpFailed"):V(n))}finally{h(!1)}};return o.jsx(oe,{children:o.jsx(le,{children:o.jsxs(se,{children:[o.jsx(Z,{eyebrow:t("portal:common.eyebrow"),title:t("portal:login.title",{brand:ie.name}),description:t("portal:login.lead")}),g==="phone"?o.jsxs("form",{onSubmit:H,noValidate:!0,children:[o.jsx(F,{htmlFor:"portal-login-mobile",children:t("portal:login.mobileLabel")}),o.jsxs(ce,{children:[o.jsx(de,{"aria-hidden":"true",children:"+61"}),o.jsx(pe,{id:"portal-login-mobile",type:"tel",inputMode:"tel",autoComplete:"tel",placeholder:t("portal:login.mobilePlaceholder"),value:w,onChange:e=>z(e.target.value)})]}),b&&o.jsx(B,{role:"alert",children:b}),o.jsxs(U,{type:"submit",disabled:c,"aria-busy":c,children:[c&&o.jsx(N,{"aria-hidden":"true"}),t("portal:login.sendCode")]})]}):o.jsxs("form",{onSubmit:X,noValidate:!0,children:[o.jsx(F,{htmlFor:"portal-login-otp",children:t("portal:login.otpLabel")}),o.jsx(ue,{id:"portal-login-otp",type:"text",inputMode:"numeric",autoComplete:"one-time-code",maxLength:6,placeholder:"••••••",value:k,onChange:e=>j(e.target.value.replace(/[^\d]/g,""))}),o.jsx(ge,{children:t("portal:login.otpHint",{phone:I()})}),b&&o.jsx(B,{role:"alert",children:b}),o.jsxs(U,{type:"submit",disabled:c,"aria-busy":c,children:[c&&o.jsx(N,{"aria-hidden":"true"}),t("portal:login.verify")]}),o.jsxs(fe,{children:[o.jsx(O,{type:"button",disabled:c,onClick:()=>{v("phone"),j(""),d(null)},children:t("portal:login.changeNumber")}),o.jsx(O,{type:"button",disabled:c,onClick:()=>{E()},children:t("portal:login.resend")})]})]}),D,o.jsx("div",{id:A})]})})})};export{Ce as default};
