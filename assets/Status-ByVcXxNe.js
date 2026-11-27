import{j as l}from"./client-CG7M8TvS.js";import{J as o,a9 as $,H as a}from"./FleetImpact-DJmzwwMU.js";import{by as n,bz as s,a$ as e,bA as r,bB as i,bf as x,bC as m,bx as w,bD as k,bE as p,bF as v,bG as y}from"./CarrierProvider-BFmhrA0k.js";const T={"In Transit":"live","Picked up":"live","On route":"live",Scheduled:"info",Assigned:"info",Active:"info",Submitted:"info",Pending:"warning",Unassigned:"warning","On leave":"warning",Exception:"danger",Failed:"danger",Revoked:"danger",Completed:"neutral",Delivered:"neutral",Done:"neutral",Draft:"draft",Inactive:"off",Cancelled:"off"},S=$`
  0% { transform: scale(1); opacity: 0.5; }
  70% { transform: scale(2.4); opacity: 0; }
  100% { transform: scale(2.4); opacity: 0; }
`,z={live:e("color-action-text"),info:e("color-action-text"),warning:e("color-accent-orange"),danger:e("color-status-danger-text"),neutral:e("color-icon-quiet"),draft:e("color-draw-edge"),off:e("color-draw-edge")},A=o.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  flex: none;
  max-width: 100%;
  ${s("status")}
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.08em;
  height: ${({$size:t})=>t==="sm"?n.tag:n.tagMd}px;
  padding: 0;
  color: ${({$tone:t})=>t==="danger"?e("color-status-danger-text"):e("color-text-primary")};
  --dot: ${({$tone:t})=>z[t]};
  & .bk-label { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  & .bk-dot {
    position: relative;
    flex: none;
    width: 6px;
    height: 6px;
    border-radius: 0;
    background: var(--dot);
  }
  & .bk-dot.bk-pulse::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 0;
    background: var(--dot);
    animation: ${S} 2s ease-out infinite;
  }
  @media (prefers-reduced-motion: reduce) {
    & .bk-dot.bk-pulse::after { animation: none; display: none; }
  }
`;function R({status:t,tone:u,pulse:h=!1,size:b="md",variant:O,...f}){const d=u??T[t]??"neutral";return l.jsxs(A,{$tone:d,$size:b,"data-brand-part":"status-chip","data-tone":d,"data-variant":"text",title:t,...f,children:[l.jsx("span",{className:h?"bk-dot bk-pulse":"bk-dot","aria-hidden":!0}),l.jsx("span",{className:"bk-label",children:t})]})}const g={neutral:[e("color-fill-neutral"),e("color-text-primary")],info:[e("color-status-info-bg"),e("color-status-info-text")],danger:[e("color-status-danger-bg"),e("color-status-danger-text")],warning:[e("color-status-warning-bg"),e("color-status-warning-text")],pickup:[i.pickup.bg,i.pickup.text]};o.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  flex: none;
  height: 24px;
  padding: 0 8px;
  border-radius: ${r.tag}px;
  ${s("status")}
  font-size: 12px;
  line-height: 16px;
  white-space: nowrap;
  background: ${({$tone:t})=>g[t][0]};
  color: ${({$tone:t})=>g[t][1]};
  box-shadow: ${({$tone:t})=>t==="neutral"?`inset 0 0 0 1px ${e("color-border-subtle")}`:"none"};
  & .anticon { font-size: 12px; }
  /* The warning tag carries the amber square the time tags use, so the colour is never the only signal. */
  ${({$tone:t})=>t==="warning"&&a`&::before { content: ''; flex: none; width: 6px; height: 6px; background: ${e("color-accent-orange")}; }`}
  /* The pickup teal on the dark theme: the light tint would glare, so the tag takes the map's dark twin on a transparent fill. */
  ${({$tone:t})=>t==="pickup"&&a`:root[data-theme='dark'] & { background: transparent; color: ${i.pickup.dark}; box-shadow: inset 0 0 0 1px ${i.pickup.dark}; }`}
`;o.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  max-width: 100%;
  white-space: nowrap;
  height: ${n.control.md}px;
  padding: 0 12px 0 4px;
  border: 0;
  border-radius: ${r.control}px;
  background: ${e("color-bg-surface")};
  box-shadow: inset 0 0 0 1px ${e("color-border-subtle")};
  font-family: ${x.ui};
  color: ${e("color-text-primary")};
  text-align: left;
  ${m}
  /* Read-only, a person is just the squared avatar and the name: no frame, so a column of people is not a column of boxes. */
  ${({$interactive:t})=>!t&&a`
      height: auto;
      padding: 0;
      background: transparent;
      box-shadow: none;
    `}
  ${({$interactive:t})=>t&&a`
      ${w}
      cursor: pointer;
      &:hover { background: ${e("color-fill-hover")}; box-shadow: inset 0 0 0 1px ${e("color-indicator")}; }
      &[aria-pressed='true'] { background: ${e("color-fill-selected")}; box-shadow: inset 0 0 0 1px ${e("color-indicator")}; }
    `}
  & .bk-av {
    ${k(n.avatar.sm+2)}
    background: ${({$leave:t})=>t?e("color-avatar-leave-bg"):e("color-avatar-bg")};
    color: ${({$leave:t})=>t?e("color-avatar-leave-text"):e("color-avatar-text")};
  }
  & .bk-nm { font-size: 14px; line-height: 20px; font-weight: 600; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  & .bk-cd { flex: none; font-size: 12px; line-height: 16px; color: ${e("color-text-secondary")}; font-variant-numeric: tabular-nums; white-space: nowrap; }
`;const C={action:a`
    background: transparent;
    color: ${e("color-action-text")};
    padding: 0;
  `,quiet:a`
    background: transparent;
    color: inherit;
    opacity: 0.8;
    padding: 0;
  `,warning:a`
    background: ${e("color-status-warning-bg")};
    color: ${e("color-status-warning-text")};
    box-shadow: inset 0 0 0 1px ${e("color-accent-orange")};
  `,danger:a`
    background: ${e("color-danger-solid")};
    color: ${e("color-text-on-action")};
  `};o.span`
  display: inline-grid;
  place-items: center;
  flex: none;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: ${r.tag}px;
  font-family: ${x.ui};
  font-style: normal;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  letter-spacing: 0;
  font-variant-numeric: tabular-nums;
  ${({$tone:t})=>C[t]}
`;o.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  flex: none;
  height: ${n.tagMd}px;
  padding: ${p.tag[0]}px ${p.tag[1]}px;
  border-radius: ${r.tag}px;
  background: transparent;
  color: ${e("color-action-text")};
  box-shadow: inset 0 0 0 ${v.hairline}px ${e("color-border-button")};
  ${s("status",y.eyebrow)}
  font-weight: 700;
`;const c={changed:{word:"Changed",fill:e("color-status-warning-bg"),ink:e("color-status-warning-text"),dot:e("color-accent-orange")},gone:{word:"No longer possible",fill:e("color-status-danger-bg"),ink:e("color-status-danger-text"),dot:e("color-status-danger-text")}};o.span`
  display: inline-grid;
  gap: 4px;
  justify-items: start;
  min-width: 0;
  & .cf-sentence { font-size: 14px; line-height: 22px; color: ${e("color-text-primary")}; }
`;o.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  flex: none;
  height: ${n.tagMd}px;
  padding: 0 8px;
  border-radius: ${r.tag}px;
  background: ${({$kind:t})=>c[t].fill};
  color: ${({$kind:t})=>c[t].ink};
  ${s("status")}
  font-size: 12px;
  line-height: 16px;
  white-space: nowrap;
  &::before { content: ''; flex: none; width: 6px; height: 6px; background: ${({$kind:t})=>c[t].dot}; }
`;export{R as S};
