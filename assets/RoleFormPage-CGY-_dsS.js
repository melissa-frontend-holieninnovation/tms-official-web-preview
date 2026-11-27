import{c as P,r as n,j as e}from"./client-CG7M8TvS.js";import{M as w,a8 as D,U as v,J as p,Q as O}from"./FleetImpact-BnE9hibi.js";import{b as _,c as A,d as C}from"./apiRoutes-DA9l80q9.js";import{u as U,P as i,h as G}from"./index-CCpVht0B.js";import{P as B,S as c,h as x,d as q,a as b,F as M,R as z,T as H,b as K,bk as $,H as J,e as Q,f as V}from"./CarrierProvider-DjkDP_hA.js";import{P as W}from"./PortalShell-CfQgG6B5.js";import{A as X}from"./arrow-left-CKYADNOU.js";import"./api-B1EnflDK.js";import"./index-jPvTCT1d.js";const Y=P("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]),Z=[{id:"orders",labelKey:"portal:admin.groupOrders",codes:Object.values(G)},{id:"users",labelKey:"portal:admin.groupUsers",codes:[i.USER_LIST,i.USER_ADD,i.USER_EDIT,i.USER_SUSPEND]},{id:"roles",labelKey:"portal:admin.groupRoles",codes:[i.ROLE_LIST,i.ROLE_ADD,i.ROLE_EDIT,i.ROLE_DELETE]}],ee=p.form`
  display: grid;
  gap: 18px;
`,re=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 18px;
`,te=p.fieldset`
  margin: 0;
  padding: 0;
  border: none;
  display: grid;
  gap: 2px;
  align-content: start;
`,ae=p.legend`
  padding: 0 0 8px;
  font-family: ${v};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-secondary);
`,E=p(O)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: ${v};
  font-size: 14px;
  font-weight: 600;
  color: var(--color-action-text);
  text-decoration: none;

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover {
    text-decoration: underline;
  }
`,ue=()=>{const{t:r}=U(),L=w(),{roleId:u}=D(),s=u!==void 0,[m,l]=n.useState(s?{kind:"loading"}:{kind:"ready",role:null}),[h,f]=n.useState(""),[g,S]=n.useState(new Set),[F,k]=n.useState(!1),[R,d]=n.useState(null),j=n.useRef(0),y=n.useCallback(()=>{if(!s)return;const t=++j.current;l({kind:"loading"}),_().then(a=>{if(j.current!==t)return;const o=a.data.roles.find(T=>T.roleId===Number(u));if(!o){l({kind:"not-found"});return}if(o.isSystem){l({kind:"locked"});return}f(o.roleName),S(new Set(o.permissions)),l({kind:"ready",role:o})}).catch(()=>{j.current===t&&l({kind:"error"})})},[s,u]);n.useEffect(()=>{y()},[y]),n.useEffect(()=>{s||(f(""),S(new Set),l({kind:"ready",role:null}),d(null))},[s]);const I=t=>{S(a=>{const o=new Set(a);return o.has(t)?o.delete(t):o.add(t),o}),d(null)},N=t=>{if(t.preventDefault(),!h.trim()||g.size===0){d(r("portal:admin.roleFormRequired"));return}k(!0),d(null);const a={roleName:h.trim(),permissions:Array.from(g)};(s?A(Number(u),a):C(a)).then(()=>L("/portal/admin/users")).catch(()=>{d(r("portal:admin.roleFormSaveFailed")),k(!1)})};return e.jsxs(W,{children:[e.jsx(B,{eyebrow:r("portal:common.eyebrow"),title:r(s?"portal:admin.roleFormEditTitle":"portal:admin.roleFormCreateTitle"),description:r("portal:admin.roleFormLead"),action:e.jsxs(E,{to:"/portal/admin/users",children:[e.jsx(X,{"aria-hidden":"true"}),r("portal:admin.backToAdmin")]})}),m.kind==="loading"&&e.jsx(c,{children:e.jsx(x,{"aria-busy":"true",children:r("common:loading")})}),m.kind==="error"&&e.jsx(c,{children:e.jsxs(x,{role:"alert",children:[r("portal:admin.roleFormLoadFailed"),e.jsx(q,{type:"button",onClick:y,children:r("common:retry")})]})}),m.kind==="not-found"&&e.jsx(c,{children:e.jsx(x,{children:r("portal:admin.roleFormNotFound")})}),m.kind==="locked"&&e.jsx(c,{children:e.jsx(x,{children:r("portal:admin.roleFormSystem")})}),m.kind==="ready"&&e.jsxs(ee,{onSubmit:N,children:[e.jsx(c,{children:e.jsx(b,{children:e.jsxs(M,{children:[e.jsxs("span",{children:[r("portal:admin.roleName"),e.jsx(z,{children:"*"})]}),e.jsx(H,{"aria-required":"true",value:h,onChange:t=>{f(t.target.value),d(null)}})]})})}),e.jsx(c,{children:e.jsxs(b,{children:[e.jsx(K,{children:r("portal:admin.permissions")}),e.jsx(re,{children:Z.map(t=>e.jsxs(te,{children:[e.jsx(ae,{children:r(t.labelKey)}),t.codes.map(a=>e.jsxs($,{children:[e.jsx("input",{type:"checkbox",checked:g.has(a),onChange:()=>I(a)}),r(`portal:permissions.${a}`,a)]},a))]},t.id))})]})}),e.jsxs(J,{children:[e.jsx(E,{to:"/portal/admin/users",children:r("common:cancel")}),e.jsxs(Q,{type:"submit",disabled:F,children:[e.jsx(Y,{"aria-hidden":"true"}),r(s?"portal:admin.saveChanges":"portal:admin.createRole")]})]}),R&&e.jsx(V,{$danger:!0,role:"alert",children:R})]})]})};export{ue as default};
