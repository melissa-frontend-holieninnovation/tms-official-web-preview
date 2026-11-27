import{j as t}from"./client-CG7M8TvS.js";import{U as n,J as o}from"./FleetImpact-ICMP2wHR.js";import{P as l,B as s}from"./CarrierProvider-Dgr8sZrv.js";import{S as a}from"./Status-DPLHxPfP.js";import{P as c}from"./PortalShell-DBZvm5h0.js";import{u as d}from"./index-DHTIBHqk.js";const p=[{id:"on-account",status:"available"},{id:"stripe-card",status:"pending"}],r=o.h3`
  font-family: ${n};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-text-secondary);
  margin: 40px 0 14px;
`,x=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  gap: 16px;
`,g=s,m=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 10px;
`,h=o.h4`
  font-family: ${n};
  font-size: 16px;
  font-weight: 700;
  color: var(--color-text-primary);
  margin: 0;
`,f=o.p`
  font-family: ${n};
  font-size: 14px;
  line-height: 1.65;
  color: var(--color-text-secondary);
  margin: 0;
`,b=o.ol`
  margin: 0;
  padding: 0;
  list-style: none;
  counter-reset: billing-step;
  display: grid;
  gap: 12px;
`,u=o.li`
  display: flex;
  gap: 14px;
  align-items: flex-start;
  font-family: ${n};
  font-size: 14px;
  line-height: 1.65;
  color: var(--color-text-secondary);
  max-width: 72ch;

  strong {
    color: var(--color-text-primary);
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
    background: color-mix(in srgb, var(--color-action-text) 10%, transparent);
    color: var(--color-action-text);
    font-size: 13px;
    font-weight: 700;
  }
`,y=o.div`
  margin-top: 28px;
  border-radius: 12px;
  background: var(--color-bg-raised);
  padding: 18px 20px;
  font-family: ${n};
  font-size: 13.5px;
  line-height: 1.65;
  color: var(--color-text-secondary);
  max-width: 78ch;

  strong {
    color: var(--color-text-primary);
    font-weight: 600;
  }
`,T=()=>{const{t:i}=d("portal");return t.jsxs(c,{children:[t.jsx(l,{eyebrow:i("common.eyebrow"),title:i("billing.title"),description:i("billing.lead")}),t.jsx(r,{children:i("billing.methodsTitle")}),t.jsx(x,{children:p.map(e=>t.jsxs(g,{children:[t.jsxs(m,{children:[t.jsx(h,{children:i(`billing.methods.${e.id}.name`)}),t.jsx(a,{status:i(`billing.status.${e.status}`),tone:e.status==="available"?"info":"neutral"})]}),t.jsx(f,{children:i(`billing.methods.${e.id}.body`)})]},e.id))}),t.jsx(r,{children:i("billing.howTitle")}),t.jsx(b,{children:["secure","intent","confirm","receipt"].map(e=>t.jsx(u,{children:t.jsxs("span",{children:[t.jsx("strong",{children:i(`billing.how.${e}.title`)})," — ",i(`billing.how.${e}.body`)]})},e))}),t.jsxs(y,{children:[t.jsx("strong",{children:i("billing.readinessTitle")})," ",i("billing.readinessBody")]})]})};export{T as default};
