import{c as L,r as p,j as e}from"./client-CG7M8TvS.js";import{J as i,U as d}from"./FleetImpact-DzR-t73u.js";import{A as x,r as F}from"./api-B1EnflDK.js";import{s as h,u as B}from"./index-BWGKOkW2.js";import{P as _,S as g,a as y,N as k,b as I,e as z,d as A,g as R,h as D}from"./CarrierProvider-CyLOKBxZ.js";import{T as M,P as J}from"./PortalTables-SaRUNEcZ.js";import{P as H}from"./PortalShell-CPH9ENH7.js";const V=L("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]),W=r=>{const l=new FormData;return l.append("file",r),h.post(x.IMPORTS,l)},q=r=>h.get(F(x.IMPORT_JOB,{jobId:r})),Q=(r,l="all")=>h.get(F(x.IMPORT_JOB_ROWS,{jobId:r}),{params:{status:l}}),G=()=>h.get(x.IMPORTS_TEMPLATE),$=i.div`
  display: grid;
  gap: 18px;
`,K=i.div`
  display: grid;
  gap: 14px;
`,X=i.div`
  position: relative;
  display: grid;
  gap: 8px;
`,Y=i.label`
  font-family: ${d};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-secondary);
  cursor: pointer;
`,Z=i.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
`,ee=i.div`
  display: grid;
  gap: 10px;
  justify-items: start;
`,re=i.div`
  display: flex;
  align-items: center;
  gap: 10px;
  box-sizing: border-box;
  min-height: 42px;
  max-width: 100%;
  padding: 10px 12px;
  border-radius: var(--v29-radius-field);
  border: 1px solid var(--color-border-subtle);
  background: var(--color-bg-canvas);
  font-family: ${d};
  font-size: 14px;
  color: var(--color-text-primary);

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  svg {
    flex-shrink: 0;
    width: 18px;
    height: 18px;
    color: var(--color-text-secondary);
  }
`,te=i.p`
  margin: 0;
  font-family: ${d};
  font-size: 14px;
  line-height: 1.55;
  color: var(--color-status-danger-text);
`,oe=i.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
`,ie=i.div`
  display: grid;
  gap: 4px;
  font-family: ${d};

  strong {
    font-size: 15px;
    color: var(--color-text-primary);
  }

  span {
    font-size: 13px;
    color: var(--color-text-secondary);
  }
`,se=i.div`
  display: inline-flex;
  gap: 4px;
  padding: 4px;
  margin-bottom: 14px;
  border-radius: 11px;
  background: var(--color-bg-raised);
  border: 1px solid var(--color-border-subtle);
`,b=i.button`
  appearance: none;
  cursor: pointer;
  border: none;
  border-radius: 7px;
  padding: 7px 12px;
  font-family: ${d};
  font-size: 13px;
  font-weight: 600;
  color: ${r=>r.$active?"var(--color-action-text)":"var(--color-text-secondary)"};
  background: ${r=>r.$active?"var(--color-bg-surface)":"transparent"};
  box-shadow: ${r=>r.$active?"var(--shadow-card)":"none"};

  &:focus-visible {
    outline: 2px solid var(--color-action-text);
    outline-offset: 2px;
  }
`,ae=i.span`
  display: inline-block;
  padding: 3px 8px;
  border: none;
  border-radius: var(--v29-radius-tag);
  font-family: ${d};
  font-size: 12px;
  font-weight: 600;
  color: ${r=>r.$invalid?"var(--color-status-danger-text)":"var(--color-action-text)"};
  background: ${r=>r.$invalid?"var(--color-status-danger-bg)":"color-mix(in srgb, var(--color-action-text) 10%, transparent)"};
`,le=i.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 180px;
  max-width: 320px;
  color: var(--color-text-secondary);
  font-size: 13px;
  line-height: 1.4;

  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span:first-child {
    color: var(--color-text-primary);
  }
`,ne=i.button`
  border: none;
  background: transparent;
  min-height: 36px;
  padding: 0 8px;
  border-radius: var(--v29-radius-button);
  color: var(--color-text-secondary);
  font-family: ${d};
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    color: var(--color-text-primary);
  }

  &:focus-visible {
    outline: 2px solid var(--color-action-text);
    outline-offset: 2px;
  }
`,de=r=>typeof r=="object"&&r!==null&&"code"in r&&"message"in r,S="import-orders-csv-file",T="import-orders-choose-file",P="import-orders-csv-label",ve=()=>{const{t:r}=B(),l=p.useRef(null),u=p.useRef(!1),[f,j]=p.useState(""),[o,c]=p.useState({kind:"idle"}),[O,m]=p.useState(""),C=t=>{if(de(t)){const s=t.data&&typeof t.data=="object"?t.data.missing:void 0;if(t.message==="missing columns")return r("portal:importOrders.missingColumns",{columns:(s??[]).join(", ")});if(t.message==="no rows")return r("portal:importOrders.noRows");if(t.code===130)return r("portal:importOrders.fileFormat")}return r("portal:importOrders.uploadFailed")},w=async(t,s)=>{const[n,a]=await Promise.all([q(t),Q(t,s)]);c({kind:"ready",summary:n.data,rows:a.data.rows,filter:s})},E=async t=>{var n;const s=(n=t.target.files)==null?void 0:n[0];if(!s){t.target.value="";return}if(u.current){t.target.value="";return}u.current=!0,m(""),j(s.name),c({kind:"uploading"});try{const a=await W(s);await w(a.data.jobId,"all")}catch(a){c({kind:"error",message:C(a)})}finally{u.current=!1,t.target.value=""}},v=async t=>{if(!(o.kind!=="ready"||o.filter===t))try{await w(o.summary.jobId,t)}catch{c({kind:"error",message:r("portal:importOrders.jobMissing")})}},N=async()=>{try{const t=await G(),s=new Blob([t.data.csv],{type:"text/csv;charset=utf-8"}),n=URL.createObjectURL(s),a=document.createElement("a");a.href=n,a.download=t.data.filename,a.click(),URL.revokeObjectURL(n),m("")}catch{const t=r("portal:importOrders.templateFailed");if(o.kind==="ready"){m(t);return}c({kind:"error",message:t})}},U=()=>{j(""),m(""),c({kind:"idle"})};return e.jsxs(H,{children:[e.jsx(_,{eyebrow:r("portal:common.eyebrow"),title:r("portal:importOrders.title"),description:r("portal:importOrders.lead")}),e.jsxs($,{children:[e.jsx(g,{children:e.jsx(y,{children:e.jsx(k,{children:r("portal:importOrders.backendNotice")})})}),e.jsx(g,{children:e.jsx(y,{children:e.jsxs(K,{children:[e.jsx(I,{children:r("portal:importOrders.columnsTitle")}),e.jsx(k,{children:r("portal:importOrders.columnsBody")}),e.jsxs(X,{children:[e.jsx(Y,{id:P,htmlFor:S,children:r("portal:importOrders.uploadLabel")}),e.jsx(Z,{id:S,ref:l,accept:".csv,text/csv",type:"file",tabIndex:-1,"aria-labelledby":`${P} ${T}`,onChange:E}),e.jsxs(ee,{children:[e.jsx(z,{id:T,type:"button",onClick:()=>{var t;return(t=l.current)==null?void 0:t.click()},children:r("portal:importOrders.chooseFile")}),f?e.jsxs(re,{"aria-live":"polite",children:[e.jsx(V,{"aria-hidden":"true"}),e.jsx("span",{title:f,children:f})]}):null,e.jsx(A,{type:"button",onClick:N,children:r("portal:importOrders.downloadTemplate")})]})]}),(o.kind==="error"||O)&&e.jsx(te,{role:"alert",children:o.kind==="error"?o.message:O})]})})}),e.jsx(g,{children:e.jsxs(y,{children:[e.jsx(I,{children:r("portal:importOrders.previewTitle")}),o.kind==="uploading"&&e.jsxs("div",{"aria-busy":"true","aria-label":r("common:loading"),children:[e.jsx(R,{}),e.jsx(R,{})]}),(o.kind==="idle"||o.kind==="error")&&e.jsx(D,{children:r("portal:importOrders.previewEmpty")}),o.kind==="ready"&&e.jsxs($,{children:[e.jsxs(oe,{children:[e.jsxs(ie,{children:[e.jsx("strong",{children:r("portal:importOrders.sessionTitle",{id:o.summary.jobId})}),e.jsxs("span",{children:[r("portal:importOrders.sessionFile",{name:o.summary.fileName})," · ",r("portal:importOrders.sessionCounts",{valid:o.summary.validRows,invalid:o.summary.invalidRows,total:o.summary.totalRows})]})]}),e.jsx(ne,{type:"button",onClick:U,children:r("portal:importOrders.clearSession")})]}),e.jsxs(se,{"aria-label":r("portal:importOrders.previewTitle"),children:[e.jsx(b,{type:"button","aria-pressed":o.filter==="all",$active:o.filter==="all",onClick:()=>{v("all")},children:r("portal:importOrders.filterAll")}),o.summary.validRows>0&&e.jsx(b,{type:"button","aria-pressed":o.filter==="valid",$active:o.filter==="valid",onClick:()=>{v("valid")},children:r("portal:importOrders.filterValid")}),o.summary.invalidRows>0&&e.jsx(b,{type:"button","aria-pressed":o.filter==="invalid",$active:o.filter==="invalid",onClick:()=>{v("invalid")},children:r("portal:importOrders.filterInvalid")})]}),e.jsx(M,{children:e.jsxs(J,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:r("portal:orders.colStatus")}),e.jsx("th",{scope:"col",children:r("portal:importOrders.colInvoice")}),e.jsx("th",{scope:"col",children:r("portal:importOrders.colRoute")}),e.jsx("th",{scope:"col",children:r("portal:importOrders.colPickup")}),e.jsx("th",{scope:"col",children:r("portal:importOrders.colDelivery")}),e.jsx("th",{scope:"col",children:r("portal:importOrders.colQty")}),e.jsx("th",{scope:"col",children:r("portal:importOrders.colWeight")}),e.jsx("th",{scope:"col",children:r("portal:importOrders.colReason")})]})}),e.jsx("tbody",{children:o.rows.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(ae,{$invalid:t.status==="invalid",children:t.status==="invalid"?r("portal:importOrders.rowInvalid"):r("portal:importOrders.rowValid")})}),e.jsx("td",{children:t.invoiceNumber||"—"}),e.jsx("td",{children:e.jsxs(le,{title:`${t.senderAddress} → ${t.recipientAddress}`,"aria-label":`${t.senderName} ${r("portal:orders.routeTo")} ${t.recipientName}`,children:[e.jsxs("span",{"aria-hidden":"true",children:[t.senderName," · ",t.senderAddress]}),e.jsxs("span",{"aria-hidden":"true",children:["→ ",t.recipientName," · ",t.recipientAddress]})]})}),e.jsx("td",{children:t.pickupDate||"—"}),e.jsx("td",{children:t.deliveryDate||"—"}),e.jsx("td",{children:t.qty||"—"}),e.jsx("td",{children:t.weight||"—"}),e.jsx("td",{children:t.rejectReasons.length?t.rejectReasons.join(", "):"—"})]},t.rowId))})]})})]})]})})]})]})};export{ve as default};
