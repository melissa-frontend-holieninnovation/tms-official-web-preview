import{c as ie,r as i,j as e}from"./client-CG7M8TvS.js";import{Q as Ve,J as h,U as Le}from"./FleetImpact-TI7flhUD.js";import{e as ft,b as It,v as st,f as Ge,h as St,i as Rt,s as it}from"./apiRoutes-DCZcBwxc.js";import{h as m,P as c,i as Et,u as rt,a as Ct,j as R,s as Ue}from"./index-Djqw0akA.js";import{P as Lt,S as K,a as q,b as _,g as E,h as N,d as y,f as x,bl as W,e as ke,F as z,R as ee,T as be,H as ve}from"./CarrierProvider-CfWM4CGS.js";import{T as te,P as ne}from"./PortalTables-CyMmq9B-.js";import{P as Ut}from"./PortalShell-DOEEzvvX.js";import{B as Ot}from"./Select-IbSZ9-5e.js";import{C as lt}from"./check-t_v-wtVN.js";import"./api-B1EnflDK.js";import"./index-jPvTCT1d.js";import"./CheckOutlined-ijjMcJg_.js";const Tt=ie("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),Qe=ie("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]),At=ie("ShieldCheck",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]),Dt=ie("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]),Pt=Et(),wt=[m.LIST,m.ADD,m.IMPORT,m.LIST_ALL,c.USER_LIST,c.USER_ADD,c.USER_EDIT,c.USER_SUSPEND],_t=[m.LIST,m.ADD,m.LIST_SUB],Nt=[m.LIST,m.LIST_OWN],Se=[{id:"owner",nameKey:"portal:roles.owner.name",descriptionKey:"portal:roles.owner.desc",permissions:Pt,scope:"all"},{id:"manager",nameKey:"portal:roles.manager.name",descriptionKey:"portal:roles.manager.desc",permissions:wt,scope:"all"},{id:"staff",nameKey:"portal:roles.staff.name",descriptionKey:"portal:roles.staff.desc",permissions:_t,scope:"sub"},{id:"viewer",nameKey:"portal:roles.viewer.name",descriptionKey:"portal:roles.viewer.desc",permissions:Nt,scope:"own"}],Oe=[{id:"viewOrders",labelKey:"portal:roles.capabilities.viewOrders",group:"orders",codes:[m.LIST]},{id:"createOrders",labelKey:"portal:roles.capabilities.createOrders",group:"orders",codes:[m.ADD]},{id:"importOrders",labelKey:"portal:roles.capabilities.importOrders",group:"orders",codes:[m.IMPORT]},{id:"companyOrders",labelKey:"portal:roles.capabilities.companyOrders",group:"orders",codes:[m.LIST_ALL,m.LIST_SUB]},{id:"inviteMembers",labelKey:"portal:roles.capabilities.inviteMembers",group:"team",codes:[c.USER_ADD]},{id:"suspendMembers",labelKey:"portal:roles.capabilities.suspendMembers",group:"team",codes:[c.USER_SUSPEND]},{id:"manageRoles",labelKey:"portal:roles.capabilities.manageRoles",group:"team",codes:[c.ROLE_ADD,c.ROLE_EDIT,c.ROLE_DELETE]}],Ft=(t,r)=>r.codes.some(l=>t.permissions.includes(l)),Bt=[c.ROLE_ADD,c.ROLE_EDIT,c.ROLE_DELETE],Re=t=>!!t&&Bt.some(r=>t.permissions.includes(r)),at=t=>t.statusId===void 0||t.statusId===1,Ee=(t,r)=>t.find(l=>l.roleId===r),$t=(t,r,l)=>t.filter(o=>o.uid!==l&&at(o)&&Re(Ee(r,o.roleId))).length,Je=(t,r,l,o)=>{const g=r.roleId??t.roleId,C=r.statusId??t.statusId??1,v=at(t)&&Re(Ee(o,t.roleId)),u=C===1&&Re(Ee(o,g));return v&&!u&&$t(l,o,t.uid)===0},Ye=t=>!!t&&typeof t=="object"&&t.reason==="lastOwner",Mt=(t,r)=>Oe.filter(l=>l.codes.some(o=>t.includes(o))&&!l.codes.some(o=>r.includes(o))),Kt=t=>t.length===0?"":t.length===1?t[0]:`${t.slice(0,-1).join(", ")} and ${t[t.length-1]}`,qt=t=>!!t.isSystem,Wt=(t,r)=>r.codes.some(l=>t.includes(l)),zt=(t,r)=>t.length===r.length&&t.every(l=>r.includes(l)),Ze=t=>Se.find(r=>zt(r.permissions,t)),Te="/api/company/rbac/invites",Ht=()=>Ue.get(Te).then(st(it.ApiInviteListResponse,"getInviteList")),Xe=t=>Ue.post(Te,t).then(st(it.ApiInvite,"postInvite")),et=t=>Ue.delete(`${Te}/${t}`),Vt=h.div`
  display: grid;
  gap: 8px;
`,Gt=h.details`
  font-family: ${Le};
  font-size: 13px;

  summary {
    cursor: pointer;
    color: var(--color-action-text);
    font-weight: 700;
  }

  summary:focus-visible {
    outline: 2px solid var(--color-action-text);
    outline-offset: 2px;
  }
`,Qt=h.ul`
  margin: 8px 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 6px;

  li {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--color-text-primary);
  }

  svg {
    width: 15px;
    height: 15px;
    color: var(--color-action-text);
    flex-shrink: 0;
  }
`,Jt=h.span`
  display: inline-flex;
  color: ${t=>t.$active?"var(--color-action-text)":"var(--color-text-secondary)"};

  svg {
    width: 16px;
    height: 16px;
  }
`,Yt=h.div`
  margin-top: 26px;
  padding-top: 22px;
  border-top: 1px solid var(--color-border-subtle);
`,fe=({value:t,onChange:r,roleOptions:l,placeholder:o,ariaLabel:g,ariaRequired:C})=>{const{t:v}=rt(),u=l.find(a=>String(a.roleId)===t),L=u?Ze(u.permissions):void 0,U=u?Oe.filter(a=>Wt(u.permissions,a)):[];return e.jsxs(Vt,{children:[e.jsx(Ot,{"aria-label":g,"aria-required":C,value:t||void 0,placeholder:o,onChange:r,options:l.map(a=>{const O=Ze(a.permissions);return{value:String(a.roleId),label:O?v(O.nameKey):a.roleName}})}),u&&e.jsxs(e.Fragment,{children:[L&&e.jsx(x,{children:v(L.descriptionKey)}),e.jsxs(Gt,{children:[e.jsx("summary",{children:v("portal:admin.permissions")}),e.jsx(Qt,{children:U.map(a=>e.jsxs("li",{children:[e.jsx(lt,{"aria-hidden":"true"}),v(a.labelKey)]},a.id))})]})]})]})},Zt=h.div`
  display: grid;
  gap: 18px;
`,tt=h.div`
  display: grid;
  grid-template-columns: ${t=>t.$single?"1fr":"minmax(0, 1.3fr) minmax(280px, 0.7fr)"};
  gap: 18px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,nt=h.form`
  display: grid;
  gap: 14px;
`,Xt=h.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`,Ce=h.span`
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding: 5px 9px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--color-action-text) 9%, transparent);
  color: var(--color-action-text);
  font-family: ${Le};
  font-size: 12px;
  font-weight: 700;
`,se=h(Ce)`
  background: var(--color-border-subtle);
  color: var(--color-text-secondary);
`,Ie=h.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;

  button,
  a {
    min-height: 34px;
    padding: 6px 12px;
    font-size: 13px;
  }
`,en=h.div`
  display: flex;
  gap: 8px;
`,tn=h.span`
  display: inline-flex;
  align-items: center;
  min-height: 42px;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid var(--color-border-subtle);
  background: var(--color-bg-raised);
  color: var(--color-text-secondary);
  font-family: ${Le};
  font-size: 14px;
  user-select: none;
`,nn=new Intl.DateTimeFormat("en-AU",{day:"numeric",month:"short",year:"numeric"}),sn=t=>{const r=new Date(t);return Number.isNaN(r.getTime())?t:nn.format(r)},yn=()=>{const{t}=rt(),r=Ct(n=>n.uid),l=R(c.USER_ADD),o=R(c.USER_EDIT),g=R(c.USER_SUSPEND),C=R(c.ROLE_LIST),v=R(c.ROLE_ADD),u=R(c.ROLE_EDIT),L=R(c.ROLE_DELETE),U=C||l||o||g,[a,O]=i.useState({kind:"loading"}),[p,re]=i.useState({kind:"loading"}),[I,le]=i.useState({name:"",email:"",roleId:""}),[dt,Ae]=i.useState(!1),[H,T]=i.useState(null),[De,ae]=i.useState(null),[Pe,we]=i.useState(""),[de,_e]=i.useState(!1),[V,k]=i.useState(null),[j,F]=i.useState(null),[Ne,Fe]=i.useState(null),[b,G]=i.useState(null),[Be,$e]=i.useState(!1),[Q,oe]=i.useState(null),[S,ce]=i.useState({kind:"loading"}),[J,pe]=i.useState({mobile:"",roleId:""}),[ot,Me]=i.useState(!1),[Y,A]=i.useState(null),[Z,D]=i.useState(null),[Ke,X]=i.useState(null),me=i.useRef(0),he=i.useRef(0),ue=i.useRef(0),P=i.useCallback(()=>{const n=++me.current;O({kind:"loading"}),ft().then(s=>{me.current===n&&O({kind:"ready",users:s.data.users})}).catch(()=>{me.current===n&&O({kind:"error"})})},[]),f=i.useCallback(()=>{const n=++he.current;re({kind:"loading"}),It().then(s=>{he.current===n&&re({kind:"ready",roles:s.data.roles})}).catch(()=>{he.current===n&&re({kind:"error"})})},[]),w=i.useCallback(()=>{const n=++ue.current;ce({kind:"loading"}),Ht().then(s=>{ue.current===n&&ce({kind:"ready",invites:s.data.invites})}).catch(()=>{ue.current===n&&ce({kind:"error"})})},[]);i.useEffect(()=>{P()},[P]),i.useEffect(()=>{U&&f()},[U,f]),i.useEffect(()=>{w()},[w]);const xe=p.kind==="ready"?p.roles:[],qe=n=>s=>{le(d=>({...d,[n]:s.target.value})),T(null)},ct=n=>{le(s=>({...s,roleId:n})),T(null)},pt=n=>{n.preventDefault();const s=Number(I.roleId);if(!I.name.trim()||!s){T({kind:"error",text:t("portal:admin.addUserRequired")});return}Ae(!0),T(null),St({name:I.name.trim(),email:I.email.trim(),roleId:s}).then(d=>{T({kind:"success",text:t("portal:admin.addUserSuccess",{name:d.data.name})}),le({name:"",email:"",roleId:""}),P(),U&&f()}).catch(()=>T({kind:"error",text:t("portal:admin.addUserFailed")})).finally(()=>Ae(!1))},mt=n=>{ae(n.uid),we(String(n.roleId)),k(null),F(null)},ht=(n,s)=>{_e(!0),Ge({uid:n.uid,roleId:s}).then(d=>{k({kind:"success",text:t("portal:admin.userUpdated",{name:d.data.name,role:d.data.roleName})}),ae(null),F(null),P(),U&&f()}).catch(d=>k({kind:"error",text:Ye(d)?t("portal:admin.lastOwnerBlock"):t("portal:admin.userUpdateFailed")})).finally(()=>_e(!1))},We=n=>{const s=Number(Pe);if(!s){k({kind:"error",text:t("portal:admin.rolesUnavailable")});return}const d=p.kind==="ready"?p.roles:[],B=a.kind==="ready"?a.users:[];if(Je(n,{roleId:s},B,d)){k({kind:"error",text:t("portal:admin.lastOwnerBlock")});return}const $=n.uid===r,vt=(j==null?void 0:j.uid)===n.uid;if($&&!vt&&s!==n.roleId){const ye=d.find(M=>M.roleId===n.roleId),ge=d.find(M=>M.roleId===s),He=Mt((ye==null?void 0:ye.permissions)??[],(ge==null?void 0:ge.permissions)??[]);if(He.length>0){F({uid:n.uid,message:t("portal:admin.selfDemoteConfirm",{capabilities:Kt(He.map(M=>t(M.labelKey)))})});return}}ht(n,s)},je=n=>n.statusId===void 0||n.statusId===1,ze=n=>{const s=je(n)?2:1,d=p.kind==="ready"?p.roles:[],B=a.kind==="ready"?a.users:[];if(Je(n,{statusId:s},B,d)){k({kind:"error",text:t("portal:admin.lastOwnerBlock")});return}Fe(n.uid),Ge({uid:n.uid,statusId:s}).then(()=>{k(null),P()}).catch($=>k({kind:"error",text:Ye($)?t("portal:admin.lastOwnerBlock"):t("portal:admin.userUpdateFailed")})).finally(()=>Fe(null))},ut=n=>{n.preventDefault();const s=Number(J.roleId),d=J.mobile.replace(/[^\d]/g,"");if(!d||!s){A({kind:"error",text:t("portal:admin.inviteRequired","Enter a mobile number and pick a role.")});return}const B=`+61${d.replace(/^0/,"")}`;Me(!0),A(null),Xe({phone:B,roleId:s}).then($=>{A({kind:"success",text:t("portal:admin.inviteSentNotice",{phone:$.data.phone,defaultValue:"Invite sent to {{phone}}."})}),pe({mobile:"",roleId:""}),w()}).catch(()=>A({kind:"error",text:t("portal:admin.inviteSendFailed","We couldn't send that invite. Try again.")})).finally(()=>Me(!1))},xt=n=>{X(n.id),D(null),Xe({phone:n.phone,roleId:n.roleId}).then(()=>et(n.id)).then(()=>{D(null),w()}).catch(()=>D({kind:"error",text:t("portal:admin.inviteResendFailed","We couldn't resend that invite. Try again.")})).finally(()=>X(null))},jt=n=>{X(n.id),D(null),et(n.id).then(()=>{D(null),w()}).catch(()=>D({kind:"error",text:t("portal:admin.inviteRevokeFailed","We couldn't revoke that invite. Try again.")})).finally(()=>X(null))},yt=n=>{if(oe(null),n.memberCount>0){G({roleId:n.roleId,kind:"blocked",memberCount:n.memberCount});return}G({roleId:n.roleId,kind:"confirm"})},gt=n=>{$e(!0),Rt(n.roleId).then(()=>{oe({kind:"success",text:t("portal:admin.roleDeleted")}),G(null),f()}).catch(()=>oe({kind:"error",text:t("portal:admin.deleteFailed")})).finally(()=>$e(!1))},kt=o||g?5:4,bt=l?5:4;return e.jsxs(Ut,{children:[e.jsx(Lt,{eyebrow:t("portal:common.eyebrow"),title:t("portal:admin.title"),description:t("portal:admin.lead")}),e.jsxs(Zt,{children:[e.jsxs(tt,{$single:!l,children:[e.jsx(K,{children:e.jsxs(q,{children:[e.jsx(_,{children:t("portal:admin.usersTitle")}),a.kind==="loading"&&e.jsxs("div",{"aria-busy":"true","aria-label":t("common:loading"),children:[e.jsx(E,{}),e.jsx(E,{}),e.jsx(E,{})]}),a.kind==="error"&&e.jsxs(N,{role:"alert",children:[t("portal:admin.usersLoadFailed"),e.jsx(y,{type:"button",onClick:P,children:t("common:retry")})]}),a.kind==="ready"&&a.users.length===0&&e.jsx(N,{children:t("portal:admin.usersEmpty")}),a.kind==="ready"&&a.users.length>0&&e.jsx(te,{children:e.jsxs(ne,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:t("portal:admin.name")}),e.jsx("th",{scope:"col",children:t("portal:admin.email")}),e.jsx("th",{scope:"col",children:t("portal:admin.role")}),e.jsx("th",{scope:"col",children:t("portal:admin.status")}),(o||g)&&e.jsx("th",{scope:"col",children:t("portal:admin.actions")})]})}),e.jsxs("tbody",{children:[a.users.map(n=>e.jsxs("tr",{children:[e.jsxs("td",{children:[n.name," ",n.uid===r&&e.jsx(se,{children:t("portal:admin.you")})]}),e.jsx("td",{children:n.email||"-"}),e.jsx("td",{children:De===n.uid?e.jsx(fe,{ariaLabel:t("portal:admin.role"),value:Pe,onChange:s=>{we(s),F(null),k(null)},roleOptions:xe}):n.roleName||"-"}),e.jsx("td",{children:je(n)?e.jsx(Ce,{children:t("portal:admin.active")}):e.jsx(se,{children:t("portal:admin.suspended")})}),(o||g)&&e.jsx("td",{children:e.jsx(Ie,{children:De===n.uid?e.jsxs(e.Fragment,{children:[(j==null?void 0:j.uid)===n.uid&&e.jsx(x,{$danger:!0,role:"alert",children:j.message}),(j==null?void 0:j.uid)===n.uid?e.jsx(W,{type:"button",disabled:de,onClick:()=>We(n),children:t("portal:admin.saveUser")}):e.jsx(ke,{type:"button",disabled:de,onClick:()=>We(n),children:t("portal:admin.saveUser")}),e.jsx(y,{type:"button",disabled:de,onClick:()=>{ae(null),F(null)},children:t("common:cancel")})]}):e.jsxs(e.Fragment,{children:[o&&e.jsx(y,{type:"button",onClick:()=>mt(n),children:t("portal:admin.editUser")}),g&&(je(n)?e.jsx(W,{type:"button",disabled:Ne===n.uid,onClick:()=>ze(n),children:t("portal:admin.suspend")}):e.jsx(y,{type:"button",disabled:Ne===n.uid,onClick:()=>ze(n),children:t("portal:admin.reactivate")}))]})})})]},n.uid)),V&&e.jsx("tr",{children:e.jsx("td",{colSpan:kt,children:e.jsx(x,{$danger:V.kind==="error",role:V.kind==="error"?"alert":"status",children:V.text})})})]})]})})]})}),l&&e.jsx(K,{children:e.jsxs(q,{children:[e.jsx(_,{children:t("portal:admin.addUserTitle")}),e.jsxs(nt,{onSubmit:pt,children:[e.jsxs(z,{children:[e.jsxs("span",{children:[t("portal:admin.name"),e.jsx(ee,{children:"*"})]}),e.jsx(be,{"aria-required":"true",value:I.name,onChange:qe("name")})]}),e.jsxs(z,{children:[t("portal:admin.email"),e.jsx(be,{inputMode:"email",type:"email",value:I.email,onChange:qe("email")})]}),e.jsxs(z,{children:[e.jsxs("span",{children:[t("portal:admin.role"),e.jsx(ee,{children:"*"})]}),e.jsx(fe,{ariaRequired:!0,value:I.roleId,onChange:ct,roleOptions:xe,placeholder:t("portal:admin.selectRole")})]}),p.kind==="error"&&e.jsxs(x,{$danger:!0,role:"alert",children:[t("portal:admin.rolesUnavailable")," ",e.jsx(y,{type:"button",onClick:f,children:t("common:retry")})]}),e.jsx(ve,{children:e.jsxs(ke,{type:"submit",disabled:dt,children:[e.jsx(Qe,{"aria-hidden":"true"}),t("portal:admin.addUser")]})}),H&&e.jsx(x,{$danger:H.kind==="error",role:H.kind==="error"?"alert":"status",children:H.text})]})]})})]}),e.jsxs(tt,{$single:!l,children:[e.jsx(K,{children:e.jsxs(q,{children:[e.jsxs(_,{children:[e.jsx(Dt,{"aria-hidden":"true"}),t("portal:admin.pending")]}),S.kind==="loading"&&e.jsxs("div",{"aria-busy":"true","aria-label":t("common:loading"),children:[e.jsx(E,{}),e.jsx(E,{})]}),S.kind==="error"&&e.jsxs(N,{role:"alert",children:[t("portal:admin.invitesLoadFailed","We couldn't load invites."),e.jsx(y,{type:"button",onClick:w,children:t("common:retry")})]}),S.kind==="ready"&&S.invites.length===0&&e.jsx(N,{children:t("portal:admin.invitesEmpty","No pending invites.")}),S.kind==="ready"&&S.invites.length>0&&e.jsx(te,{children:e.jsxs(ne,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:t("portal:admin.invitePhone")}),e.jsx("th",{scope:"col",children:t("portal:admin.role")}),e.jsx("th",{scope:"col",children:t("portal:admin.status")}),e.jsx("th",{scope:"col",children:t("portal:admin.expiresOn","Expires")}),l&&e.jsx("th",{scope:"col",children:t("portal:admin.actions")})]})}),e.jsxs("tbody",{children:[S.invites.map(n=>e.jsxs("tr",{children:[e.jsx("td",{children:n.phone}),e.jsx("td",{children:n.roleName||"-"}),e.jsx("td",{children:e.jsx(se,{children:t("portal:admin.pending")})}),e.jsx("td",{children:sn(n.expiresAt)}),l&&e.jsx("td",{children:e.jsxs(Ie,{children:[e.jsx(y,{type:"button",disabled:Ke===n.id,onClick:()=>xt(n),children:t("portal:admin.resend")}),e.jsx(W,{type:"button",disabled:Ke===n.id,onClick:()=>jt(n),children:t("portal:admin.revoke")})]})})]},n.id)),Z&&e.jsx("tr",{children:e.jsx("td",{colSpan:bt,children:e.jsx(x,{$danger:Z.kind==="error",role:Z.kind==="error"?"alert":"status",children:Z.text})})})]})]})})]})}),l&&e.jsx(K,{children:e.jsxs(q,{children:[e.jsx(_,{children:t("portal:admin.inviteSectionTitle","Invite by Phone")}),e.jsxs(nt,{onSubmit:ut,children:[e.jsxs(z,{children:[e.jsxs("span",{children:[t("portal:admin.invitePhone"),e.jsx(ee,{children:"*"})]}),e.jsxs(en,{children:[e.jsx(tn,{"aria-hidden":"true",children:"+61"}),e.jsx(be,{type:"tel",inputMode:"tel",autoComplete:"tel","aria-required":"true",value:J.mobile,onChange:n=>{pe(s=>({...s,mobile:n.target.value})),A(null)}})]})]}),e.jsxs(z,{children:[e.jsxs("span",{children:[t("portal:admin.role"),e.jsx(ee,{children:"*"})]}),e.jsx(fe,{ariaRequired:!0,value:J.roleId,onChange:n=>{pe(s=>({...s,roleId:n})),A(null)},roleOptions:xe,placeholder:t("portal:admin.selectRole")})]}),p.kind==="error"&&e.jsxs(x,{$danger:!0,role:"alert",children:[t("portal:admin.rolesUnavailable")," ",e.jsx(y,{type:"button",onClick:f,children:t("common:retry")})]}),e.jsx(ve,{children:e.jsxs(ke,{type:"submit",disabled:ot,children:[e.jsx(Qe,{"aria-hidden":"true"}),t("portal:admin.sendInvite","Send Invite")]})}),Y&&e.jsx(x,{$danger:Y.kind==="error",role:Y.kind==="error"?"alert":"status",children:Y.text})]})]})})]}),C&&e.jsx(K,{children:e.jsxs(q,{children:[e.jsxs(_,{children:[e.jsx(At,{"aria-hidden":"true"}),t("portal:admin.rolesTitle")]}),p.kind==="loading"&&e.jsxs("div",{"aria-busy":"true","aria-label":t("common:loading"),children:[e.jsx(E,{}),e.jsx(E,{})]}),p.kind==="error"&&e.jsxs(N,{role:"alert",children:[t("portal:admin.rolesLoadFailed"),e.jsx(y,{type:"button",onClick:f,children:t("common:retry")})]}),p.kind==="ready"&&p.roles.length===0&&e.jsx(N,{children:t("portal:admin.rolesEmpty")}),p.kind==="ready"&&p.roles.length>0&&e.jsx(te,{children:e.jsxs(ne,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:t("portal:admin.role")}),e.jsx("th",{scope:"col",children:t("portal:admin.permissions")}),e.jsx("th",{scope:"col",children:t("portal:admin.members")}),(u||L)&&e.jsx("th",{scope:"col",children:t("portal:admin.actions")})]})}),e.jsx("tbody",{children:p.roles.map(n=>e.jsxs("tr",{children:[e.jsxs("td",{children:[n.roleName," ",n.isSystem&&e.jsx(se,{children:t("portal:admin.systemRole")})]}),e.jsx("td",{children:e.jsx(Xt,{children:n.permissions.map(s=>e.jsx(Ce,{children:t(`portal:permissions.${s}`,s)},s))})}),e.jsx("td",{children:n.memberCount}),(u||L)&&e.jsx("td",{children:qt(n)?null:e.jsx(Ie,{children:(b==null?void 0:b.roleId)===n.roleId&&b.kind==="confirm"?e.jsxs(e.Fragment,{children:[e.jsx(x,{$danger:!0,children:t("portal:admin.deleteConfirm")}),e.jsx(W,{type:"button",disabled:Be,onClick:()=>gt(n),children:t("portal:admin.confirmDelete")}),e.jsx(y,{type:"button",disabled:Be,onClick:()=>G(null),children:t("common:cancel")})]}):e.jsxs(e.Fragment,{children:[u&&e.jsx(Ve,{to:`/portal/admin/roles/${n.roleId}`,children:t("portal:admin.editRole")}),L&&e.jsx(W,{type:"button",onClick:()=>yt(n),children:t("portal:admin.deleteRole")}),(b==null?void 0:b.roleId)===n.roleId&&b.kind==="blocked"&&e.jsx(x,{$danger:!0,role:"alert",children:t("portal:admin.deleteBlocked",{count:b.memberCount})})]})})})]},n.roleId))})]})}),e.jsxs(Yt,{children:[e.jsx(_,{children:t("portal:admin.permissions")}),e.jsx(te,{children:e.jsxs(ne,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col"}),Se.map(n=>e.jsx("th",{scope:"col",children:t(n.nameKey)},n.id))]})}),e.jsx("tbody",{children:Oe.map(n=>e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:t(n.labelKey)}),Se.map(s=>{const d=Ft(s,n);return e.jsx("td",{children:e.jsx(Jt,{$active:d,children:d?e.jsx(lt,{"aria-hidden":"true"}):e.jsx("span",{"aria-hidden":"true",children:"–"})})},s.id)})]},n.id))})]})})]}),Q&&e.jsx(x,{$danger:Q.kind==="error",role:Q.kind==="error"?"alert":"status",children:Q.text}),v&&e.jsx(ve,{children:e.jsxs(Ve,{to:"/portal/admin/roles/new",children:[e.jsx(Tt,{"aria-hidden":"true"}),t("portal:admin.createRole")]})})]})})]})]})};export{yn as default};
