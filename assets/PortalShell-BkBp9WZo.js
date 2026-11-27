import{j as a}from"./client-CG7M8TvS.js";import{bv as l}from"./CarrierProvider-CpE_XQGk.js";import{X as x,J as o,U as d,ab as c,u as m,S as h,_ as g}from"./FleetImpact-BQ1idsUg.js";import{u as v,a as u,l as f,m as b,S as w,C as y}from"./index-oZuyHLEH.js";const j=o.nav`
  position: sticky;
  top: 92px;
  align-self: start;
  display: grid;
  gap: 18px;
  padding: 16px 12px 18px 0;
  border-right: 1px solid var(--color-border-subtle);

  @media (max-width: 980px) {
    position: static;
    display: flex;
    align-items: flex-start;
    gap: 20px;
    padding: 12px 0;
    border-right: none;
    border-bottom: 1px solid var(--color-border-subtle);
    overflow-x: auto;
  }

  @media (max-width: 640px) {
    flex-wrap: wrap;
    gap: 6px;
    padding: 8px 0;
    overflow-x: visible;
  }
`,k=o.div`
  padding: 0 8px 2px;
  font-family: ${d};
  font-size: 13px;
  font-weight: 700;
  color: var(--color-text-primary);

  @media (max-width: 980px) {
    display: none;
  }
`,$=o.div`
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
`,L=o.span`
  padding: 0 8px;
  font-family: ${d};
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-text-secondary);

  @media (max-width: 640px) {
    display: none;
  }
`,S=o.div`
  display: grid;
  gap: 2px;

  @media (max-width: 980px) {
    display: flex;
    gap: 4px;
  }

  @media (max-width: 640px) {
    display: contents;
  }
`,T=o(c)`
  display: inline-flex;
  align-items: center;
  min-height: 40px;
  padding: 9px 10px;
  border-radius: 7px;
  border: 1px solid transparent;
  font-family: ${d};
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0;
  text-transform: none;
  text-decoration: none;
  color: var(--color-text-secondary);
  white-space: nowrap;
  transition: color 0.15s ease, border-color 0.15s ease,
    background 0.15s ease;

  &:hover {
    color: var(--color-text-primary);
    background: var(--color-bg-raised);
  }
  &:focus-visible {
    outline: 2px solid var(--color-action-text);
    outline-offset: 2px;
  }
  &.active,
  &[data-active='true'] {
    color: var(--color-action-text);
    border-color: color-mix(in srgb, var(--color-action-text) 18%, transparent);
    background: color-mix(in srgb, var(--color-action-text) 10%, transparent);
  }
`,A=()=>{const{t:e}=v("portal"),{pathname:r}=x(),p=u(t=>t.permissionList),s=r==="/portal/orders"||r.startsWith("/portal/orders/")&&r!=="/portal/orders/new"&&r!=="/portal/orders/import",n=f.map(t=>({...t,items:t.items.filter(i=>i.permission===null||p.includes(i.permission))})).filter(t=>t.items.length>0);return n.length===0?null:a.jsxs(j,{"aria-label":e("nav.ariaLabel"),children:[a.jsx(k,{children:e("nav.platform")}),n.map(t=>a.jsxs($,{children:[a.jsx(L,{children:e(t.labelKey)}),a.jsx(S,{children:t.items.map(i=>a.jsx(T,{to:i.path,end:i.path==="/portal/orders","data-active":i.path==="/portal/orders"&&s?"true":void 0,children:e(i.labelKey)},i.id))})]},t.id))]})},P=o.main`
  flex: 1;
  background: var(--color-bg-canvas);
  width: 100%;
  padding: ${e=>e.$authenticated?"72px 0 0":"120px clamp(20px, 4vw, 48px) 96px"};

  @media (max-width: 720px) {
    padding: ${e=>e.$authenticated?"72px 0 0":"96px 20px 64px"};
  }
`,C=o.div`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 20px clamp(16px, 2vw, 32px) 40px;

  @media (max-width: 980px) {
    padding: 18px 20px 48px;
  }
`,G=o.div`
  display: grid;
  grid-template-columns: 208px minmax(0, 1fr);
  gap: 24px;
  align-items: start;
  color: var(--color-text-primary);

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    gap: 18px;
    padding: 0 0 24px;
  }
`,I=o.div`
  min-width: 0;
`,F=({children:e,publicChrome:r=!1})=>{const p=b(),{mode:s,toggleTheme:n}=m(),t=p&&!r;return a.jsxs(a.Fragment,{children:[a.jsx(h,{}),a.jsx(l,{mode:s,children:a.jsxs(g,{children:[a.jsx(w,{theme:s,onToggleTheme:n}),a.jsx(P,{$authenticated:t,children:t?a.jsx(C,{children:a.jsxs(G,{children:[a.jsx(A,{}),a.jsx(I,{children:e})]})}):e}),a.jsx(y,{})]})})]})};export{F as P};
