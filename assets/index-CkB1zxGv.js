const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DeliveryTrackingReview-DzTPYQsr.js","assets/client-CHJZYcBI.js","assets/ConsigneeView-DGl5DZb_.js","assets/ConsigneeView-DEbI8T9s.css","assets/googleMapLoader-BSXzeEKU.js","assets/DeliveryTrackingReview-BL3Yi7L0.css"])))=>i.map(i=>d[i]);
import{c as Se,R as F,j as e,r as b,p as ve,C as ir,A as Pn,b as Ai}from"./client-CHJZYcBI.js";import{k as Ri,l as i,E as Re,L as Ce,u as ar,S as sr,m as Tn,n as Ln,o as or,C as lr,H as Fe,p as Ci,U as j,q as Nn,r as me,t as ke,v as z,O as ce,_ as Oi,w as we,x as Et,y as Pi,a as Ti,z as Li,A as dr,b as kr,N as Ni,G as Mi,M as Di,s as Gt,c as Fi,D as zi,e as Bi,P as Ui,F as _i,I as Gi,J as q,K as L,Q as Z,V as ae,W as tt,X as qi,R as Wi,Y as Q,Z as Hi,$ as u,a0 as Mn,a1 as cr,a2 as Dn,a3 as pr,a4 as Ki,a5 as Vi,a6 as mt,a7 as Yi,a8 as Sr,a9 as Qi,aa as Er,ab as Zi,ac as Ir,ad as Xi,ae as Ji,af as Ne,ag as rt,ah as fe,ai as ea,aj as Fn,ak as zn,al as Bn,am as ta,an as ra,ao as na,ap as ia,aq as aa,ar as sa,as as oa,at as la,au as da,av as ca,aw as pa,ax as ha,T as ua,B as ma,ay as xa,az as _,aA as ga,aB as fa,aC as va}from"./ConsigneeView-DGl5DZb_.js";const ya=Se("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),ba=Se("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]),ja=Se("FilePlus",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"12",x2:"12",y1:"18",y2:"12",key:"1tsf04"}],["line",{x1:"9",x2:"15",y1:"15",y2:"15",key:"110plj"}]]),wa=Se("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),ka=Se("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]),$r=Se("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]),Sa=Se("ShieldCheck",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]),Ea=Se("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]),Ia=Se("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]),$a=Se("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]),Aa=Ri`
  body {
    background-color: ${t=>t.theme.background};
    color: ${t=>t.theme.text.primary};
  }
`;var Ra=Object.defineProperty,It=Object.getOwnPropertySymbols,Un=Object.prototype.hasOwnProperty,_n=Object.prototype.propertyIsEnumerable,Ar=(t,r,n)=>r in t?Ra(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,Zt=(t,r)=>{for(var n in r||(r={}))Un.call(r,n)&&Ar(t,n,r[n]);if(It)for(var n of It(r))_n.call(r,n)&&Ar(t,n,r[n]);return t},Xt=(t,r)=>{var n={};for(var a in t)Un.call(t,a)&&r.indexOf(a)<0&&(n[a]=t[a]);if(t!=null&&It)for(var a of It(t))r.indexOf(a)<0&&_n.call(t,a)&&(n[a]=t[a]);return n};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var Ve;(t=>{const r=class C{constructor(s,l,o,c){if(this.version=s,this.errorCorrectionLevel=l,this.modules=[],this.isFunction=[],s<C.MIN_VERSION||s>C.MAX_VERSION)throw new RangeError("Version value out of range");if(c<-1||c>7)throw new RangeError("Mask value out of range");this.size=s*4+17;let p=[];for(let v=0;v<this.size;v++)p.push(!1);for(let v=0;v<this.size;v++)this.modules.push(p.slice()),this.isFunction.push(p.slice());this.drawFunctionPatterns();const y=this.addEccAndInterleave(o);if(this.drawCodewords(y),c==-1){let v=1e9;for(let m=0;m<8;m++){this.applyMask(m),this.drawFormatBits(m);const w=this.getPenaltyScore();w<v&&(c=m,v=w),this.applyMask(m)}}h(0<=c&&c<=7),this.mask=c,this.applyMask(c),this.drawFormatBits(c),this.isFunction=[]}static encodeText(s,l){const o=t.QrSegment.makeSegments(s);return C.encodeSegments(o,l)}static encodeBinary(s,l){const o=t.QrSegment.makeBytes(s);return C.encodeSegments([o],l)}static encodeSegments(s,l,o=1,c=40,p=-1,y=!0){if(!(C.MIN_VERSION<=o&&o<=c&&c<=C.MAX_VERSION)||p<-1||p>7)throw new RangeError("Invalid value");let v,m;for(v=o;;v++){const k=C.getNumDataCodewords(v,l)*8,$=g.getTotalBits(s,v);if($<=k){m=$;break}if(v>=c)throw new RangeError("Data too long")}for(const k of[C.Ecc.MEDIUM,C.Ecc.QUARTILE,C.Ecc.HIGH])y&&m<=C.getNumDataCodewords(v,k)*8&&(l=k);let w=[];for(const k of s){n(k.mode.modeBits,4,w),n(k.numChars,k.mode.numCharCountBits(v),w);for(const $ of k.getData())w.push($)}h(w.length==m);const I=C.getNumDataCodewords(v,l)*8;h(w.length<=I),n(0,Math.min(4,I-w.length),w),n(0,(8-w.length%8)%8,w),h(w.length%8==0);for(let k=236;w.length<I;k^=253)n(k,8,w);let E=[];for(;E.length*8<w.length;)E.push(0);return w.forEach((k,$)=>E[$>>>3]|=k<<7-($&7)),new C(v,l,E,p)}getModule(s,l){return 0<=s&&s<this.size&&0<=l&&l<this.size&&this.modules[l][s]}getModules(){return this.modules}drawFunctionPatterns(){for(let o=0;o<this.size;o++)this.setFunctionModule(6,o,o%2==0),this.setFunctionModule(o,6,o%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const s=this.getAlignmentPatternPositions(),l=s.length;for(let o=0;o<l;o++)for(let c=0;c<l;c++)o==0&&c==0||o==0&&c==l-1||o==l-1&&c==0||this.drawAlignmentPattern(s[o],s[c]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(s){const l=this.errorCorrectionLevel.formatBits<<3|s;let o=l;for(let p=0;p<10;p++)o=o<<1^(o>>>9)*1335;const c=(l<<10|o)^21522;h(c>>>15==0);for(let p=0;p<=5;p++)this.setFunctionModule(8,p,a(c,p));this.setFunctionModule(8,7,a(c,6)),this.setFunctionModule(8,8,a(c,7)),this.setFunctionModule(7,8,a(c,8));for(let p=9;p<15;p++)this.setFunctionModule(14-p,8,a(c,p));for(let p=0;p<8;p++)this.setFunctionModule(this.size-1-p,8,a(c,p));for(let p=8;p<15;p++)this.setFunctionModule(8,this.size-15+p,a(c,p));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let s=this.version;for(let o=0;o<12;o++)s=s<<1^(s>>>11)*7973;const l=this.version<<12|s;h(l>>>18==0);for(let o=0;o<18;o++){const c=a(l,o),p=this.size-11+o%3,y=Math.floor(o/3);this.setFunctionModule(p,y,c),this.setFunctionModule(y,p,c)}}drawFinderPattern(s,l){for(let o=-4;o<=4;o++)for(let c=-4;c<=4;c++){const p=Math.max(Math.abs(c),Math.abs(o)),y=s+c,v=l+o;0<=y&&y<this.size&&0<=v&&v<this.size&&this.setFunctionModule(y,v,p!=2&&p!=4)}}drawAlignmentPattern(s,l){for(let o=-2;o<=2;o++)for(let c=-2;c<=2;c++)this.setFunctionModule(s+c,l+o,Math.max(Math.abs(c),Math.abs(o))!=1)}setFunctionModule(s,l,o){this.modules[l][s]=o,this.isFunction[l][s]=!0}addEccAndInterleave(s){const l=this.version,o=this.errorCorrectionLevel;if(s.length!=C.getNumDataCodewords(l,o))throw new RangeError("Invalid argument");const c=C.NUM_ERROR_CORRECTION_BLOCKS[o.ordinal][l],p=C.ECC_CODEWORDS_PER_BLOCK[o.ordinal][l],y=Math.floor(C.getNumRawDataModules(l)/8),v=c-y%c,m=Math.floor(y/c);let w=[];const I=C.reedSolomonComputeDivisor(p);for(let k=0,$=0;k<c;k++){let D=s.slice($,$+m-p+(k<v?0:1));$+=D.length;const xe=C.reedSolomonComputeRemainder(D,I);k<v&&D.push(0),w.push(D.concat(xe))}let E=[];for(let k=0;k<w[0].length;k++)w.forEach(($,D)=>{(k!=m-p||D>=v)&&E.push($[k])});return h(E.length==y),E}drawCodewords(s){if(s.length!=Math.floor(C.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let l=0;for(let o=this.size-1;o>=1;o-=2){o==6&&(o=5);for(let c=0;c<this.size;c++)for(let p=0;p<2;p++){const y=o-p,m=(o+1&2)==0?this.size-1-c:c;!this.isFunction[m][y]&&l<s.length*8&&(this.modules[m][y]=a(s[l>>>3],7-(l&7)),l++)}}h(l==s.length*8)}applyMask(s){if(s<0||s>7)throw new RangeError("Mask value out of range");for(let l=0;l<this.size;l++)for(let o=0;o<this.size;o++){let c;switch(s){case 0:c=(o+l)%2==0;break;case 1:c=l%2==0;break;case 2:c=o%3==0;break;case 3:c=(o+l)%3==0;break;case 4:c=(Math.floor(o/3)+Math.floor(l/2))%2==0;break;case 5:c=o*l%2+o*l%3==0;break;case 6:c=(o*l%2+o*l%3)%2==0;break;case 7:c=((o+l)%2+o*l%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[l][o]&&c&&(this.modules[l][o]=!this.modules[l][o])}}getPenaltyScore(){let s=0;for(let p=0;p<this.size;p++){let y=!1,v=0,m=[0,0,0,0,0,0,0];for(let w=0;w<this.size;w++)this.modules[p][w]==y?(v++,v==5?s+=C.PENALTY_N1:v>5&&s++):(this.finderPenaltyAddHistory(v,m),y||(s+=this.finderPenaltyCountPatterns(m)*C.PENALTY_N3),y=this.modules[p][w],v=1);s+=this.finderPenaltyTerminateAndCount(y,v,m)*C.PENALTY_N3}for(let p=0;p<this.size;p++){let y=!1,v=0,m=[0,0,0,0,0,0,0];for(let w=0;w<this.size;w++)this.modules[w][p]==y?(v++,v==5?s+=C.PENALTY_N1:v>5&&s++):(this.finderPenaltyAddHistory(v,m),y||(s+=this.finderPenaltyCountPatterns(m)*C.PENALTY_N3),y=this.modules[w][p],v=1);s+=this.finderPenaltyTerminateAndCount(y,v,m)*C.PENALTY_N3}for(let p=0;p<this.size-1;p++)for(let y=0;y<this.size-1;y++){const v=this.modules[p][y];v==this.modules[p][y+1]&&v==this.modules[p+1][y]&&v==this.modules[p+1][y+1]&&(s+=C.PENALTY_N2)}let l=0;for(const p of this.modules)l=p.reduce((y,v)=>y+(v?1:0),l);const o=this.size*this.size,c=Math.ceil(Math.abs(l*20-o*10)/o)-1;return h(0<=c&&c<=9),s+=c*C.PENALTY_N4,h(0<=s&&s<=2568888),s}getAlignmentPatternPositions(){if(this.version==1)return[];{const s=Math.floor(this.version/7)+2,l=this.version==32?26:Math.ceil((this.version*4+4)/(s*2-2))*2;let o=[6];for(let c=this.size-7;o.length<s;c-=l)o.splice(1,0,c);return o}}static getNumRawDataModules(s){if(s<C.MIN_VERSION||s>C.MAX_VERSION)throw new RangeError("Version number out of range");let l=(16*s+128)*s+64;if(s>=2){const o=Math.floor(s/7)+2;l-=(25*o-10)*o-55,s>=7&&(l-=36)}return h(208<=l&&l<=29648),l}static getNumDataCodewords(s,l){return Math.floor(C.getNumRawDataModules(s)/8)-C.ECC_CODEWORDS_PER_BLOCK[l.ordinal][s]*C.NUM_ERROR_CORRECTION_BLOCKS[l.ordinal][s]}static reedSolomonComputeDivisor(s){if(s<1||s>255)throw new RangeError("Degree out of range");let l=[];for(let c=0;c<s-1;c++)l.push(0);l.push(1);let o=1;for(let c=0;c<s;c++){for(let p=0;p<l.length;p++)l[p]=C.reedSolomonMultiply(l[p],o),p+1<l.length&&(l[p]^=l[p+1]);o=C.reedSolomonMultiply(o,2)}return l}static reedSolomonComputeRemainder(s,l){let o=l.map(c=>0);for(const c of s){const p=c^o.shift();o.push(0),l.forEach((y,v)=>o[v]^=C.reedSolomonMultiply(y,p))}return o}static reedSolomonMultiply(s,l){if(s>>>8||l>>>8)throw new RangeError("Byte out of range");let o=0;for(let c=7;c>=0;c--)o=o<<1^(o>>>7)*285,o^=(l>>>c&1)*s;return h(o>>>8==0),o}finderPenaltyCountPatterns(s){const l=s[1];h(l<=this.size*3);const o=l>0&&s[2]==l&&s[3]==l*3&&s[4]==l&&s[5]==l;return(o&&s[0]>=l*4&&s[6]>=l?1:0)+(o&&s[6]>=l*4&&s[0]>=l?1:0)}finderPenaltyTerminateAndCount(s,l,o){return s&&(this.finderPenaltyAddHistory(l,o),l=0),l+=this.size,this.finderPenaltyAddHistory(l,o),this.finderPenaltyCountPatterns(o)}finderPenaltyAddHistory(s,l){l[0]==0&&(s+=this.size),l.pop(),l.unshift(s)}};r.MIN_VERSION=1,r.MAX_VERSION=40,r.PENALTY_N1=3,r.PENALTY_N2=3,r.PENALTY_N3=40,r.PENALTY_N4=10,r.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],r.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],t.QrCode=r;function n(x,s,l){if(s<0||s>31||x>>>s)throw new RangeError("Value out of range");for(let o=s-1;o>=0;o--)l.push(x>>>o&1)}function a(x,s){return(x>>>s&1)!=0}function h(x){if(!x)throw new Error("Assertion error")}const d=class G{constructor(s,l,o){if(this.mode=s,this.numChars=l,this.bitData=o,l<0)throw new RangeError("Invalid argument");this.bitData=o.slice()}static makeBytes(s){let l=[];for(const o of s)n(o,8,l);return new G(G.Mode.BYTE,s.length,l)}static makeNumeric(s){if(!G.isNumeric(s))throw new RangeError("String contains non-numeric characters");let l=[];for(let o=0;o<s.length;){const c=Math.min(s.length-o,3);n(parseInt(s.substring(o,o+c),10),c*3+1,l),o+=c}return new G(G.Mode.NUMERIC,s.length,l)}static makeAlphanumeric(s){if(!G.isAlphanumeric(s))throw new RangeError("String contains unencodable characters in alphanumeric mode");let l=[],o;for(o=0;o+2<=s.length;o+=2){let c=G.ALPHANUMERIC_CHARSET.indexOf(s.charAt(o))*45;c+=G.ALPHANUMERIC_CHARSET.indexOf(s.charAt(o+1)),n(c,11,l)}return o<s.length&&n(G.ALPHANUMERIC_CHARSET.indexOf(s.charAt(o)),6,l),new G(G.Mode.ALPHANUMERIC,s.length,l)}static makeSegments(s){return s==""?[]:G.isNumeric(s)?[G.makeNumeric(s)]:G.isAlphanumeric(s)?[G.makeAlphanumeric(s)]:[G.makeBytes(G.toUtf8ByteArray(s))]}static makeEci(s){let l=[];if(s<0)throw new RangeError("ECI assignment value out of range");if(s<128)n(s,8,l);else if(s<16384)n(2,2,l),n(s,14,l);else if(s<1e6)n(6,3,l),n(s,21,l);else throw new RangeError("ECI assignment value out of range");return new G(G.Mode.ECI,0,l)}static isNumeric(s){return G.NUMERIC_REGEX.test(s)}static isAlphanumeric(s){return G.ALPHANUMERIC_REGEX.test(s)}getData(){return this.bitData.slice()}static getTotalBits(s,l){let o=0;for(const c of s){const p=c.mode.numCharCountBits(l);if(c.numChars>=1<<p)return 1/0;o+=4+p+c.bitData.length}return o}static toUtf8ByteArray(s){s=encodeURI(s);let l=[];for(let o=0;o<s.length;o++)s.charAt(o)!="%"?l.push(s.charCodeAt(o)):(l.push(parseInt(s.substring(o+1,o+3),16)),o+=2);return l}};d.NUMERIC_REGEX=/^[0-9]*$/,d.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,d.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";let g=d;t.QrSegment=d})(Ve||(Ve={}));(t=>{(r=>{const n=class{constructor(h,d){this.ordinal=h,this.formatBits=d}};n.LOW=new n(0,1),n.MEDIUM=new n(1,0),n.QUARTILE=new n(2,3),n.HIGH=new n(3,2),r.Ecc=n})(t.QrCode||(t.QrCode={}))})(Ve||(Ve={}));(t=>{(r=>{const n=class{constructor(h,d){this.modeBits=h,this.numBitsCharCount=d}numCharCountBits(h){return this.numBitsCharCount[Math.floor((h+7)/17)]}};n.NUMERIC=new n(1,[10,12,14]),n.ALPHANUMERIC=new n(2,[9,11,13]),n.BYTE=new n(4,[8,16,16]),n.KANJI=new n(8,[8,10,12]),n.ECI=new n(7,[0,0,0]),r.Mode=n})(t.QrSegment||(t.QrSegment={}))})(Ve||(Ve={}));var et=Ve;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var Ca={L:et.QrCode.Ecc.LOW,M:et.QrCode.Ecc.MEDIUM,Q:et.QrCode.Ecc.QUARTILE,H:et.QrCode.Ecc.HIGH},Gn=128,qn="L",Wn="#FFFFFF",Hn="#000000",Kn=!1,Vn=1,Oa=4,Pa=0,Ta=.1;function Yn(t,r=0){const n=[];return t.forEach(function(a,h){let d=null;a.forEach(function(g,x){if(!g&&d!==null){n.push(`M${d+r} ${h+r}h${x-d}v1H${d+r}z`),d=null;return}if(x===a.length-1){if(!g)return;d===null?n.push(`M${x+r},${h+r} h1v1H${x+r}z`):n.push(`M${d+r},${h+r} h${x+1-d}v1H${d+r}z`);return}g&&d===null&&(d=x)})}),n.join("")}function Qn(t,r){return t.slice().map((n,a)=>a<r.y||a>=r.y+r.h?n:n.map((h,d)=>d<r.x||d>=r.x+r.w?h:!1))}function La(t,r,n,a){if(a==null)return null;const h=t.length+n*2,d=Math.floor(r*Ta),g=h/r,x=(a.width||d)*g,s=(a.height||d)*g,l=a.x==null?t.length/2-x/2:a.x*g,o=a.y==null?t.length/2-s/2:a.y*g,c=a.opacity==null?1:a.opacity;let p=null;if(a.excavate){let v=Math.floor(l),m=Math.floor(o),w=Math.ceil(x+l-v),I=Math.ceil(s+o-m);p={x:v,y:m,w,h:I}}const y=a.crossOrigin;return{x:l,y:o,h:s,w:x,excavation:p,opacity:c,crossOrigin:y}}function Na(t,r){return r!=null?Math.max(Math.floor(r),0):t?Oa:Pa}function Zn({value:t,level:r,minVersion:n,includeMargin:a,marginSize:h,imageSettings:d,size:g,boostLevel:x}){let s=F.useMemo(()=>{const v=(Array.isArray(t)?t:[t]).reduce((m,w)=>(m.push(...et.QrSegment.makeSegments(w)),m),[]);return et.QrCode.encodeSegments(v,Ca[r],n,void 0,void 0,x)},[t,r,n,x]);const{cells:l,margin:o,numCells:c,calculatedImageSettings:p}=F.useMemo(()=>{let y=s.getModules();const v=Na(a,h),m=y.length+v*2,w=La(y,g,v,d);return{cells:y,margin:v,numCells:m,calculatedImageSettings:w}},[s,g,d,a,h]);return{qrcode:s,margin:o,cells:l,numCells:c,calculatedImageSettings:p}}var Ma=(function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0})(),Da=F.forwardRef(function(r,n){const a=r,{value:h,size:d=Gn,level:g=qn,bgColor:x=Wn,fgColor:s=Hn,includeMargin:l=Kn,minVersion:o=Vn,boostLevel:c,marginSize:p,imageSettings:y}=a,m=Xt(a,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","marginSize","imageSettings"]),{style:w}=m,I=Xt(m,["style"]),E=y==null?void 0:y.src,k=F.useRef(null),$=F.useRef(null),D=F.useCallback(ne=>{k.current=ne,typeof n=="function"?n(ne):n&&(n.current=ne)},[n]),[xe,Ee]=F.useState(!1),{margin:re,cells:R,numCells:N,calculatedImageSettings:P}=Zn({value:h,level:g,minVersion:o,boostLevel:c,includeMargin:l,marginSize:p,imageSettings:y,size:d});F.useEffect(()=>{if(k.current!=null){const ne=k.current,J=ne.getContext("2d");if(!J)return;let se=R;const he=$.current,Ue=P!=null&&he!==null&&he.complete&&he.naturalHeight!==0&&he.naturalWidth!==0;Ue&&P.excavation!=null&&(se=Qn(R,P.excavation));const _e=window.devicePixelRatio||1;ne.height=ne.width=d*_e;const S=d/N*_e;J.scale(S,S),J.fillStyle=x,J.fillRect(0,0,N,N),J.fillStyle=s,Ma?J.fill(new Path2D(Yn(se,re))):R.forEach(function(H,X){H.forEach(function(Oe,Pe){Oe&&J.fillRect(Pe+re,X+re,1,1)})}),P&&(J.globalAlpha=P.opacity),Ue&&J.drawImage(he,P.x+re,P.y+re,P.w,P.h)}}),F.useEffect(()=>{Ee(!1)},[E]);const W=Zt({height:d,width:d},w);let ge=null;return E!=null&&(ge=F.createElement("img",{src:E,key:E,style:{display:"none"},onLoad:()=>{Ee(!0)},ref:$,crossOrigin:P==null?void 0:P.crossOrigin})),F.createElement(F.Fragment,null,F.createElement("canvas",Zt({style:W,height:d,width:d,ref:D,role:"img"},I)),ge)});Da.displayName="QRCodeCanvas";var Xn=F.forwardRef(function(r,n){const a=r,{value:h,size:d=Gn,level:g=qn,bgColor:x=Wn,fgColor:s=Hn,includeMargin:l=Kn,minVersion:o=Vn,boostLevel:c,title:p,marginSize:y,imageSettings:v}=a,m=Xt(a,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","title","marginSize","imageSettings"]),{margin:w,cells:I,numCells:E,calculatedImageSettings:k}=Zn({value:h,level:g,minVersion:o,boostLevel:c,includeMargin:l,marginSize:y,imageSettings:v,size:d});let $=I,D=null;v!=null&&k!=null&&(k.excavation!=null&&($=Qn(I,k.excavation)),D=F.createElement("image",{href:v.src,height:k.h,width:k.w,x:k.x+w,y:k.y+w,preserveAspectRatio:"none",opacity:k.opacity,crossOrigin:k.crossOrigin}));const xe=Yn($,w);return F.createElement("svg",Zt({height:d,width:d,viewBox:`0 0 ${E} ${E}`,ref:n,role:"img"},m),!!p&&F.createElement("title",null,p),F.createElement("path",{fill:x,d:`M0,0 h${E}v${E}H0z`,shapeRendering:"crispEdges"}),F.createElement("path",{fill:s,d:xe,shapeRendering:"crispEdges"}),D)});Xn.displayName="QRCodeSVG";const Fa=i.main`
  flex: 1;
  width: 100%;
  max-width: 760px;
  min-width: 0;
  margin: 0 auto;
  padding: 120px 32px 96px;

  @media (max-width: 720px) {
    padding: 96px 20px 64px;
  }
`,Ye=Re,nt=i(Fe).attrs({as:"h1"})``,xt=Ce,O=i(Ci)`
  padding: 0 0 44px 0;

  h2 {
    font-size: 22px;
    font-weight: 700;
    margin: 0 0 14px;
    color: var(--v29-text);
  }
  p,
  li {
    font-size: 15px;
    line-height: 1.7;
    color: var(--v29-muted);
  }
  p {
    margin: 0 0 12px;
  }
  ul {
    margin: 0 0 12px;
    padding-left: 20px;
  }
  li {
    margin-bottom: 6px;
  }
  strong {
    color: var(--v29-text);
    font-weight: 600;
  }
  a {
    color: var(--v29-text);
    text-decoration: underline;
    text-decoration-color: var(--v29-line);
    text-underline-offset: 3px;
    text-decoration-thickness: 1px;
    transition: text-decoration-color 0.15s ease;
  }
  a:hover {
    text-decoration-color: var(--v29-text);
  }
`,ze=({children:t})=>{const{mode:r,toggleTheme:n}=ar();return e.jsxs(e.Fragment,{children:[e.jsx(sr,{}),e.jsxs(Tn,{children:[e.jsx(Ln,{theme:r,onToggleTheme:n}),e.jsx(Fa,{children:t}),e.jsx(or,{}),e.jsx(lr,{})]})]})},Rr="https://apps.apple.com/app/sendit-go/id000000000",Cr="https://play.google.com/store/apps/details?id=tw.com.holieninnovation.senditgo",za=()=>{if(typeof navigator>"u")return"other";const t=navigator.userAgent||"",r=navigator.platform==="MacIntel"&&(navigator.maxTouchPoints??0)>1;return/iPad|iPhone|iPod/.test(t)||r?"ios":/Android/i.test(t)?"android":"other"},Ba=i.div`
  display: grid;
  gap: 14px;
  width: 100%;
  max-width: 420px;
  margin: 32px auto 24px;
`,Or=i.a`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 14px 28px;
  border-radius: 8px;
  background: var(--v29-primary);
  color: #fff;
  font-family: ${j};
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.15s ease, background 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 4px 14px color-mix(in srgb, var(--v29-primary) 25%, transparent);

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background: var(--v29-primary-hover);
    transform: translateY(-1px);
    box-shadow: 0 6px 20px color-mix(in srgb, var(--v29-primary) 35%, transparent);
  }

  .small {
    display: block;
    font-size: 10px;
    color: rgba(255, 255, 255, 0.75);
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: 2px;
  }
  .big {
    display: block;
    font-size: 17px;
    font-weight: 600;
    letter-spacing: -0.005em;
  }
`,Pr=i.span`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`,Ua=i.p`
  font-family: ${j};
  font-size: 13px;
  color: var(--v29-muted);
  margin: 16px 0 0;
  text-align: center;
`,_a=i.div`
  margin: 40px auto 0;
  display: grid;
  justify-items: center;
  gap: 12px;
`,Ga=i.div`
  background: #FFFFFF;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid var(--v29-line-soft);
  box-shadow: 0 4px 24px -8px rgba(0, 0, 0, 0.15);
  line-height: 0;
`,qa=i.span`
  font-family: ${j};
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--v29-muted);
`,Wa=()=>e.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:e.jsx("path",{d:"M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.49-.12-1.1.473-2.25 1.182-2.99.795-.85 2.142-1.49 2.982-1.58zM20.93 17.49c-.45 1.04-.66 1.5-1.24 2.42-.81 1.28-1.96 2.86-3.38 2.88-1.26.01-1.59-.82-3.3-.82s-2.07.81-3.3.83c-1.42.02-2.49-1.39-3.31-2.66-2.28-3.55-2.52-7.71-1.11-9.92.99-1.55 2.55-2.45 4.02-2.45 1.5 0 2.45.82 3.69.82 1.21 0 1.95-.82 3.69-.82 1.32 0 2.71.72 3.7 1.96-3.25 1.78-2.72 6.42-.49 7.74z"})}),Ha=()=>e.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:e.jsx("path",{d:"M17.6 9.48l1.84-3.18a.4.4 0 0 0-.69-.4l-1.86 3.23a11.85 11.85 0 0 0-9.78 0L5.25 5.9a.4.4 0 0 0-.69.4l1.84 3.18A11.49 11.49 0 0 0 .5 19h23a11.49 11.49 0 0 0-5.9-9.52zM7 15.25a1.06 1.06 0 1 1 1.06-1.06A1.06 1.06 0 0 1 7 15.25zm10 0a1.06 1.06 0 1 1 1.06-1.06A1.06 1.06 0 0 1 17 15.25z"})}),Ka=()=>{const[t,r]=b.useState("other");b.useEffect(()=>{const a=za();r(a),a==="ios"?window.location.replace(Rr):a==="android"&&window.location.replace(Cr)},[]);const n=b.useMemo(()=>typeof window<"u"?`${window.location.origin}${ve("/install")}`:"https://senditgo.com/install",[]);return e.jsxs(ze,{children:[e.jsxs(Ba,{children:[e.jsxs(Or,{href:Rr,"aria-label":"Download on the App Store",children:[e.jsx(Pr,{children:e.jsx(Wa,{})}),e.jsxs("span",{children:[e.jsx("span",{className:"small",children:"Download on the"}),e.jsx("span",{className:"big",children:"App Store"})]})]}),e.jsxs(Or,{href:Cr,"aria-label":"Get it on Google Play",children:[e.jsx(Pr,{children:e.jsx(Ha,{})}),e.jsxs("span",{children:[e.jsx("span",{className:"small",children:"Get it on"}),e.jsx("span",{className:"big",children:"Google Play"})]})]})]}),t==="other"&&e.jsx(Ua,{children:"On a desktop? Scan the code below with your phone."}),e.jsxs(_a,{children:[e.jsx(Ga,{children:e.jsx(Xn,{value:n,size:144,level:"M",bgColor:"#FFFFFF",fgColor:Nn,"aria-label":"Scan to install the SenditGo driver app"})}),e.jsx(qa,{children:"Scan to install"})]})]})},ie="[PLACEHOLDER — Yi]",Le={eyebrow:"About",title:`${ie} — the one line that says what SenditGo is for`,belief:`${ie} — one sentence on what we believe about delivery work and why this company exists.`,blocks:[{heading:"Where we started",body:`${ie} — the origin: what was broken for fleet operators, and what made it worth building software for.`},{heading:"How we work",body:`${ie} — how the team builds and supports the product, and what a customer can expect from us day to day.`},{heading:"Where we are going",body:`${ie} — the direction over the next few years, in plain terms and without dates we cannot keep.`}],valuesHeading:"What we hold to",values:[{heading:`${ie} — value one`,body:`${ie} — one or two lines on what it means in practice.`},{heading:`${ie} — value two`,body:`${ie} — one or two lines on what it means in practice.`},{heading:`${ie} — value three`,body:`${ie} — one or two lines on what it means in practice.`},{heading:`${ie} — value four`,body:`${ie} — one or two lines on what it means in practice.`}],closing:{heading:"Work with us",body:`${ie} — the closing invitation, and where to go next.`}},Va=i.p`
  margin: 0 0 24px;
  padding: 12px 16px;
  border-left: 3px solid ${"var(--v29-primary)"};
  background: color-mix(in srgb, var(--v29-primary) 8%, transparent);
  font-family: ${j};
  font-size: 13.5px;
  color: var(--v29-text);
`,Ya=i.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 8px;
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`,Qa=i.div`
  padding: 20px;
  border-radius: var(--v29-radius-container, 16px);
  background: var(--v29-card);
  box-shadow: var(--v29-card-shadow);
  h3 {
    margin: 0 0 8px;
    font-family: ${j};
    font-size: 15px;
    font-weight: 700;
    color: var(--v29-text);
  }
  p {
    margin: 0;
    font-family: ${j};
    font-size: 14px;
    line-height: 1.6;
    color: var(--v29-muted);
  }
`,Za=()=>e.jsxs(ze,{children:[e.jsx(Ye,{children:Le.eyebrow}),e.jsx(nt,{children:Le.title}),e.jsxs(Va,{children:["This page is a structure waiting for its words. Every line marked"," ",e.jsx("strong",{children:ie})," is a slot, not copy."]}),e.jsx(xt,{children:Le.belief}),Le.blocks.map(t=>e.jsxs(O,{children:[e.jsx("h2",{children:t.heading}),e.jsx("p",{children:t.body})]},t.heading)),e.jsxs(O,{children:[e.jsx("h2",{children:Le.valuesHeading}),e.jsx(Ya,{children:Le.values.map((t,r)=>e.jsxs(Qa,{children:[e.jsx("h3",{children:t.heading}),e.jsx("p",{children:t.body})]},r))})]}),e.jsxs(O,{children:[e.jsx("h2",{children:Le.closing.heading}),e.jsx("p",{children:Le.closing.body})]})]}),$e="[PLACEHOLDER — Yi]",T={eyebrow:"About",title:"Moving delivery forward.",opening:"We believe running a delivery operation should feel clear, connected and manageable — even when everything around it is moving.",beliefSlot:`${$e}: final one-line company belief / purpose statement.`,whoWeAre:"SenditGo builds technology for the people who plan, manage and carry out delivery every day. We bring the moving parts of an operation together so teams can spend less time working around disconnected systems and more time getting things where they need to go.",reality:{heading:"Built for the reality of delivery",body:["Delivery doesn't happen in a perfect environment. Plans change. Orders change. Drivers move. Customers are waiting. Managers need to make decisions with the information they have right now.","SenditGo exists to make that work simpler.","Our aim is to give operators and drivers a shared view of what is happening — from orders and shifts to routes, delivery progress and proof of delivery — and make the next action easier to understand."],slot:`${$e}: what problem do we ultimately want SenditGo to solve for the industry? 1–2 sentences.`},heading:{heading:"Where we're heading",body:"We see a future where delivery operations don't have to be held together by spreadsheets, manual handovers and information scattered between different systems.",slot:`${$e}: long-term ambition for SenditGo.`,pull:"We want reliable, intelligent delivery technology to feel like part of the operation itself — quietly helping people make better decisions, respond faster and keep goods moving."},origin:{heading:"It started with a real operational problem",body:["SenditGo began by looking closely at the everyday problems inside transportation and logistics: information living in different places, repeated manual work, limited visibility and software that doesn't always reflect what happens in the field.","Instead of treating those as separate problems, we started building a connected system around the operation as a whole.","Today, that means bringing fleet management, delivery operations and the driver experience together across web and mobile."],slot:`${$e}: 2–3 factual sentences about the real origin of SenditGo. No legal-company history required.`},howWeBuild:{heading:"How we choose to build",intro:"These are not HR slogans. Each one should tell a customer something about the kind of company they are dealing with.",values:[{heading:"Solve the real problem",body:"We start with what people are actually trying to get done. Technology matters when it improves the work, not simply because it is new."},{heading:"Make complexity feel simple",body:"Logistics is complex enough. We do the difficult work behind the scenes so the experience in front of the user can stay clear."},{heading:"Build for the people doing the work",body:"Drivers, operators and managers experience the same operation differently. We listen to the people using the product and design around the realities of their day."},{heading:"Own the outcome",body:"Shipping a feature isn't the finish line. We care about whether what we build works in practice and makes the operation better."},{heading:"Improve together",body:"Good products come from different perspectives. We share what we know, challenge ideas constructively and keep learning from customers and one another."}],extraSlot:{heading:`${$e}: optional SenditGo-specific value`,body:`${$e}: adapted from responsibility / resourcefulness / partnership / global perspective — in SenditGo words, not a parent-company paste.`}},standard:{heading:"The standard we're working toward",slot:`${$e}: a short statement describing what success looks like for SenditGo.`,example:"Delivery technology that people can trust without having to think about it.",body:"When the system is doing its job, teams have the information they need, drivers know what comes next, managers can respond to change, and the technology stays out of the way."},stillBuilding:{heading:"And we're still building",body:"What we have today is one part of a much longer journey.",slot:`${$e}: what SenditGo wants to become over the next several years, without dates, market-size claims or unreleased product promises.`,close:"We'll continue listening to the people running real operations, improving what already exists and exploring where better technology can remove the next source of friction."},invite:{heading:"Come build what moves next",body:"The best delivery systems aren't built from assumptions. They're shaped by the people running operations, solving problems and moving things every day.",slot:`${$e}: final CTA depending on what this page should drive.`}},Xa=i.h1`
  font-family: ${me};
  font-style: italic;
  font-weight: 700;
  font-size: clamp(1.9rem, 1.3rem + 2.6vw, 3rem);
  letter-spacing: 0.01em;
  line-height: 1.08;
  margin: 0 0 16px;
  color: var(--v29-text);
`,Ja=i.p`
  margin: 0 0 28px;
  padding: 12px 16px;
  border-left: 3px solid var(--v29-primary);
  background: color-mix(in srgb, var(--v29-primary) 8%, transparent);
  font-family: ${j};
  font-size: 13.5px;
  color: var(--v29-text);
`,Ge=i.p`
  margin: 16px 0 0;
  padding: 12px 16px;
  border-left: 3px solid color-mix(in srgb, var(--v29-muted) 50%, transparent);
  background: color-mix(in srgb, var(--v29-muted) 8%, transparent);
  font-family: ${j};
  font-size: 13.5px;
  line-height: 1.55;
  color: var(--v29-muted);
`,Tr=i.blockquote`
  margin: 20px 0 0;
  padding: 4px 0 4px 20px;
  border-left: 3px solid var(--v29-primary);
  font-family: ${me};
  font-size: 20px;
  font-weight: 900;
  line-height: 1.35;
  color: var(--v29-text);
`,es=i.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 16px;
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`,Lr=i.div`
  padding: 20px;
  border-radius: var(--v29-radius-container, 16px);
  background: var(--v29-card);
  box-shadow: var(--v29-card-shadow);
  h3 {
    margin: 0 0 8px;
    font-family: ${j};
    font-size: 15px;
    font-weight: 700;
    color: var(--v29-text);
  }
  p {
    margin: 0;
    font-family: ${j};
    font-size: 14px;
    line-height: 1.6;
    color: var(--v29-muted);
  }
`,ts=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
`,rs=i(ke)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 20px;
  border-radius: 999px;
  background: var(--v29-primary);
  color: var(--v29-on-primary);
  font-family: ${j};
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  &:hover {
    background: var(--v29-primary-hover);
  }
`,ns=()=>e.jsxs(ze,{children:[e.jsxs(Ja,{children:["Demo only — ",e.jsx("code",{children:"/about-v1"}),". Live ",e.jsx("code",{children:"/about"})," is unchanged and still dark."]}),e.jsx(Ye,{children:T.eyebrow}),e.jsx(Xa,{children:T.title}),e.jsx(xt,{children:T.opening}),e.jsx(Ge,{children:T.beliefSlot}),e.jsx(O,{children:e.jsx("p",{children:T.whoWeAre})}),e.jsxs(O,{children:[e.jsx("h2",{children:T.reality.heading}),T.reality.body.map(t=>e.jsx("p",{children:t},t)),e.jsx(Ge,{children:T.reality.slot})]}),e.jsxs(O,{children:[e.jsx("h2",{children:T.heading.heading}),e.jsx("p",{children:T.heading.body}),e.jsx(Ge,{children:T.heading.slot}),e.jsx(Tr,{children:T.heading.pull})]}),e.jsxs(O,{children:[e.jsx("h2",{children:T.origin.heading}),T.origin.body.map(t=>e.jsx("p",{children:t},t)),e.jsx(Ge,{children:T.origin.slot})]}),e.jsxs(O,{children:[e.jsx("h2",{children:T.howWeBuild.heading}),e.jsx("p",{children:T.howWeBuild.intro}),e.jsxs(es,{children:[T.howWeBuild.values.map(t=>e.jsxs(Lr,{children:[e.jsx("h3",{children:t.heading}),e.jsx("p",{children:t.body})]},t.heading)),e.jsxs(Lr,{children:[e.jsx("h3",{children:T.howWeBuild.extraSlot.heading}),e.jsx("p",{children:T.howWeBuild.extraSlot.body})]})]})]}),e.jsxs(O,{children:[e.jsx("h2",{children:T.standard.heading}),e.jsx(Ge,{children:T.standard.slot}),e.jsx(Tr,{children:T.standard.example}),e.jsx("p",{style:{marginTop:16},children:T.standard.body})]}),e.jsxs(O,{children:[e.jsx("h2",{children:T.stillBuilding.heading}),e.jsx("p",{children:T.stillBuilding.body}),e.jsx(Ge,{children:T.stillBuilding.slot}),e.jsx("p",{children:T.stillBuilding.close})]}),e.jsxs(O,{children:[e.jsx("h2",{children:T.invite.heading}),e.jsx("p",{children:T.invite.body}),e.jsx(Ge,{children:T.invite.slot}),e.jsx(ts,{children:e.jsx(rs,{to:"/contact",children:"Talk to us"})})]})]}),is=()=>e.jsxs(ze,{children:[e.jsx(Ye,{children:"About us"}),e.jsx(nt,{children:"One connected delivery operation."}),e.jsx(xt,{children:"SenditGo brings route planning, dispatch, live tracking and proof of delivery together for local and last-mile fleets."}),e.jsxs(O,{style:{paddingTop:40},children:[e.jsx("h2",{children:"Built around the delivery day."}),e.jsx("p",{children:"Build runs, assign orders and review the day in Order Management. Drivers follow their run and record delivery details, while dispatchers keep track of progress in one place."})]}),e.jsxs(O,{children:[e.jsx("h2",{children:"Meet SAM, your planning engine."}),e.jsx("p",{children:"SAM stands for Smart Adaptive Model. It brings your delivery requirements and available vehicles together to help you build a workable route plan."}),e.jsx("p",{children:"Delivery locations and time windows, your warehouse and vehicle capacity give the plan its starting point. You review the proposed plan in Order Management and stay in control of what goes out."})]}),e.jsxs(O,{children:[e.jsx("h2",{children:"Talk through your operation."}),e.jsxs("p",{children:["Tell us about your fleet, your delivery day and what you need from your next system. ",e.jsx(ke,{to:"/contact",children:"Talk to us"})," about a demo, pricing or integrations."]})]})]}),as=["demo","pricing","solution","integrations","general"],Nr={name:"fleet_size",label:"How many vehicles?",type:"select",required:!0,options:["1–5","6–20","21–50","51–200","More than 200"]},bt={name:"company",label:"Company",type:"text",required:!0,autoComplete:"organization"},Jn={demo:{type:"demo",label:"Book a product demo",lede:"Tell us a little about your operation and we will bring the right screens.",fields:[bt,Nr,{name:"preferred_time",label:"When suits you?",type:"text",required:!1,hint:"A day and a rough time is enough. We will confirm by email."}]},pricing:{type:"pricing",label:"Plans and pricing",lede:"Pricing depends on how many vehicles you run, so start there.",fields:[bt,Nr,{name:"start_date",label:"When are you looking to start?",type:"text",required:!1}]},solution:{type:"solution",label:"Find the right solution",lede:"Describe the job you are trying to do and we will tell you honestly whether we fit.",fields:[bt,{name:"operation",label:"What does your delivery day look like?",type:"textarea",required:!0,hint:"Types of drops, how many a day, what goes wrong most often."}]},integrations:{type:"integrations",label:"Integrations",lede:"Tell us what you already run and we will tell you how it connects.",fields:[bt,{name:"system_name",label:"Which system?",type:"text",required:!0,hint:"The order, warehouse or accounting system you want connected."},{name:"integration_need",label:"What should move between them?",type:"textarea",required:!1}]},general:{type:"general",label:"General",lede:"Anything else — we read every one.",fields:[{name:"message",label:"Your message",type:"textarea",required:!0}]}};as.map(t=>({value:t,label:Jn[t].label}));function Jt(t){return t?Jn[t].fields:[]}function ss(t,r,n){const a=[];t||a.push("enquiry_type"),n.name.trim()||a.push("name"),os(n.email)||a.push("email");for(const h of Jt(t))h.required&&!(r[h.name]??"").trim()&&a.push(h.name);return a}function os(t){const r=t.trim();return r.length>4&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r)}i.form`
  display: grid;
  gap: 16px;
  font-family: ${j};
  max-width: 640px;
`;i.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;i.div`
  display: grid;
  gap: 6px;
`;i.label`
  font-size: 13px;
  font-weight: 600;
  color: var(--v29-text);
`;const hr=`
  width: 100%;
  padding: 13px 15px;
  border-radius: var(--v29-radius-field, 12px);
  font-size: 16px;
  font-family: inherit;
  background: var(--v29-page);
  border: 1px solid var(--v29-line-soft);
  color: var(--v29-text);
  &::placeholder { color: var(--v29-muted); }
  &:focus {
    outline: none;
    background: var(--v29-card);
    border-color: var(--v29-primary);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--v29-primary) 20%, transparent);
  }
  &[aria-invalid='true'] {
    border-color: var(--v29-danger, #c0392b);
  }
`;i.input`
  ${hr}
`;i.textarea`
  ${hr};
  min-height: 120px;
  resize: vertical;
`;i.select`
  ${hr};
  appearance: none;
  background-image: var(--v29-select-caret);
  background-repeat: no-repeat;
  background-position: right 14px center;
  padding-right: 42px;
`;i.p`
  margin: 0;
  font-size: 12.5px;
  color: var(--v29-muted);
`;i.p`
  margin: 0;
  font-size: 13px;
  color: var(--v29-muted);
`;i.p`
  margin: 0;
  font-size: 13.5px;
  color: var(--v29-danger, #c0392b);
`;i.p`
  margin: 0;
  font-size: 14px;
  color: var(--v29-success, #1b7f4b);
`;i.button`
  justify-self: start;
  padding: 13px 26px;
  border-radius: var(--v29-radius-button, 8px);
  background: var(--v29-primary-fill);
  color: var(--v29-on-primary);
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  min-height: 44px;
  &:hover:not(:disabled) {
    background: var(--v29-primary-fill);
    transform: translateY(-1px);
  }
  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
  &:focus-visible {
    outline: 2px solid var(--v29-primary);
    outline-offset: 2px;
  }
`;const ls=()=>{var w;const[t,r]=b.useState(""),[n,a]=b.useState(""),[h,d]=b.useState(""),[g,x]=b.useState(""),[s,l]=b.useState({}),[o,c]=b.useState(!1);o&&ss(t,s,{name:n,email:h});const[p,y]=b.useState("idle");b.useId(),b.useRef(null);const v=b.useRef(null),m=(w=Jt(t)[0])==null?void 0:w.name;return b.useEffect(()=>{var E;if(!t||!m)return;const I=(E=v.current)==null?void 0:E.querySelector(`[name="${m}"]`);I==null||I.focus()},[t,m]),{...Object.fromEntries(Jt(t).map(I=>[I.name,I.label]))},e.jsxs(ze,{children:[e.jsx(Ye,{children:"Contact"}),e.jsx(nt,{children:"Talk to us."}),e.jsx(O,{children:e.jsxs("p",{children:["Email ",e.jsx("a",{href:`mailto:${z.supportEmail}`,children:z.supportEmail})," to contact the SenditGo team."]})})]})},ds=i.p`
  font-family: ${j};
  font-size: 13px;
  color: var(--v29-muted);
  margin: 0 0 32px;
  letter-spacing: 0.02em;
`,Mr=i.div`
  max-width: 100%;
  overflow-x: auto;
  &:focus-visible {
    outline: 2px solid var(--v29-primary);
    outline-offset: 2px;
  }
`,Dr=i.p`
  @media (min-width: 561px) {
    display: none;
  }
`,Fr=i.table`
  width: 100%;
  border-collapse: collapse;
  @media (max-width: 560px) {
    min-width: 520px;
  }
  margin: 8px 0 16px;
  font-family: ${j};
  font-size: 14.5px;
  line-height: 1.6;

  th,
  td {
    text-align: left;
    padding: 12px 14px;
    border-bottom: 1px solid var(--v29-line-soft);
    vertical-align: top;
    color: var(--v29-muted);
  }
  th {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--v29-muted);
  }
  td strong {
    color: var(--v29-text);
    font-weight: 600;
  }
`,cs=()=>e.jsxs(ze,{children:[e.jsx(Ye,{children:"Privacy"}),e.jsx(nt,{children:"Privacy policy."}),e.jsx(ds,{children:"Last updated: 18 May 2026"}),e.jsxs(xt,{children:["This policy explains what ",z.legalName," collects through the SenditGo driver app and this website, why, how long we keep it, and the rights you have. The data controller is ",z.legalName]}),e.jsx(O,{children:e.jsxs("p",{children:["For a summary of the app’s data collection and protections, see"," ",e.jsx("a",{href:ve("/data-safety"),children:"Data safety"}),". To remove your account and its associated data, see ",e.jsx("a",{href:ve("/account-deletion"),children:"Delete account"}),"."]})}),e.jsxs(O,{children:[e.jsx("h2",{children:"1. Who we are"}),e.jsxs("p",{children:["SenditGo is operated by ",z.legalName,", a company registered in"," ",z.jurisdiction," with its principal address at ",z.address,". We are the developer of record on the App Store and Google Play and the entity responsible for handling personal information under the Australian Privacy Act 1988 (Cth). For any privacy question, reach us at"," ",e.jsx("a",{href:`mailto:${z.supportEmail}`,children:z.supportEmail}),"."]})]}),e.jsxs(O,{children:[e.jsx("h2",{id:"privacy-collection",children:"2. What we collect"}),e.jsx("p",{children:"We collect only the data needed to run a dispatch operation — no advertising profiles, no sale to third parties."}),e.jsx(Dr,{id:"privacy-collection-hint",children:"Swipe or scroll sideways to read the table."}),e.jsx(Mr,{role:"region","aria-labelledby":"privacy-collection","aria-describedby":"privacy-collection-hint",tabIndex:0,children:e.jsxs(Fr,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Category"}),e.jsx("th",{children:"Examples"}),e.jsx("th",{children:"Why"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Account"})}),e.jsx("td",{children:"Mobile number, name, email, employer (your operator)"}),e.jsx("td",{children:"Sign-in, identifying you to your operator"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Location"})}),e.jsx("td",{children:"GPS coordinates while a shift is active"}),e.jsx("td",{children:"Live driver tracking, ETA, geofence events"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Delivery content"})}),e.jsx("td",{children:"Photos, signatures, notes captured at the door"}),e.jsx("td",{children:"Proof of delivery for your operator and their customer"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Device & usage"})}),e.jsx("td",{children:"Device model, OS version, app version, crash logs"}),e.jsx("td",{children:"Stability, diagnostics, security"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Communications"})}),e.jsx("td",{children:"In-app messages between driver and dispatcher"}),e.jsx("td",{children:"Operational coordination"})]})]})]})})]}),e.jsxs(O,{children:[e.jsx("h2",{children:"3. How we use it"}),e.jsxs("ul",{children:[e.jsx("li",{children:"To run the dispatch service: assign jobs, track progress, record proof of delivery."}),e.jsx("li",{children:"To keep the app secure: detect abuse, verify sign-ins, prevent fraud."}),e.jsx("li",{children:"To improve the product: diagnose crashes, measure feature usage in aggregate."}),e.jsx("li",{children:"To meet legal obligations under the Privacy Act 1988 (Cth) and applicable tax law."})]}),e.jsxs("p",{children:["We do ",e.jsx("strong",{children:"not"})," use your data for behavioural advertising and we do not sell it."]})]}),e.jsxs(O,{children:[e.jsx("h2",{children:"4. Legal basis"}),e.jsx("p",{children:"Under the Australian Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs), we process personal information because it is necessary to perform the dispatch service you (or your employer on your behalf) signed up for, to comply with our legal obligations, and — for product improvement and security — for our legitimate interests in operating a reliable, safe service. Where required (e.g. for any optional analytics cookies on this website), we ask for consent and you can withdraw it at any time."})]}),e.jsxs(O,{children:[e.jsx("h2",{children:"5. Who sees your data"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Your operator"})," (the company running the SenditGo back-office that you drive for) — they see your shift activity, route, and proof-of-delivery records. They are a separate data controller for their business records."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Service providers"})," we use to run the platform: cloud hosting (currently AWS, region asia-east), map tiles (Mapbox), push notification delivery (Apple/Google), and crash reporting. Each is bound by a written data-processing agreement."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Authorities"})," if compelled by a valid legal order under Australian law."]})]}),e.jsxs("p",{children:["A current list of sub-processors is available on request via"," ",e.jsx("a",{href:`mailto:${z.supportEmail}`,children:z.supportEmail}),"."]})]}),e.jsxs(O,{children:[e.jsx("h2",{children:"6. International transfers"}),e.jsx("p",{children:"Our primary infrastructure is hosted in the Asia-Pacific region. Limited categories of data (e.g. crash reports, push delivery metadata) may be processed by service providers operating from other jurisdictions; in every case the provider is bound by a data-processing agreement and we rely on standard contractual clauses or equivalent safeguards where required."})]}),e.jsxs(O,{children:[e.jsx("h2",{id:"privacy-retention",children:"7. How long we keep it"}),e.jsx(Dr,{id:"privacy-retention-hint",children:"Swipe or scroll sideways to read the table."}),e.jsx(Mr,{role:"region","aria-labelledby":"privacy-retention","aria-describedby":"privacy-retention-hint",tabIndex:0,children:e.jsxs(Fr,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Data"}),e.jsx("th",{children:"Retention"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Active account data"}),e.jsx("td",{children:"Until you delete your account"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Location pings"}),e.jsx("td",{children:"90 days, then aggregated for trend reporting (no longer linked to you)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Proof-of-delivery records"}),e.jsx("td",{children:"Retained by your operator per their own retention policy; typically 5–7 years for tax records"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Crash and diagnostic logs"}),e.jsx("td",{children:"180 days"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Backups"}),e.jsx("td",{children:"Rolling 90-day encrypted backups; deleted data expires within this window"})]})]})]})})]}),e.jsxs(O,{children:[e.jsx("h2",{children:"8. Your rights"}),e.jsx("p",{children:"You can:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Ask what we hold about you and request a copy."}),e.jsx("li",{children:"Correct anything inaccurate."}),e.jsxs("li",{children:["Delete your account and associated personal data — see the"," ",e.jsx("a",{href:ve("/account-deletion"),children:"account deletion page"})," for the in-app and web paths."]}),e.jsx("li",{children:"Object to specific processing where we rely on legitimate interest."}),e.jsx("li",{children:"Lodge a complaint with the relevant supervisory authority."})]}),e.jsxs("p",{children:["To exercise any of these, email"," ",e.jsx("a",{href:`mailto:${z.supportEmail}`,children:z.supportEmail}),". We respond within 30 days."]})]}),e.jsxs(O,{children:[e.jsx("h2",{children:"9. Children"}),e.jsx("p",{children:"SenditGo is a workplace app for professional drivers and dispatchers. It is not directed at, and we do not knowingly collect data from, anyone under 16."})]}),e.jsxs(O,{children:[e.jsx("h2",{children:"10. Security"}),e.jsx("p",{children:"Traffic is encrypted in transit (TLS 1.2+). Production data is encrypted at rest. Access is restricted by role and audited. We rotate secrets and patch dependencies on a regular cycle. If we ever experience a breach affecting your personal data, we will notify you and the relevant authority in line with applicable law."})]}),e.jsxs(O,{children:[e.jsx("h2",{children:"11. Changes to this policy"}),e.jsx("p",{children:"We will update this policy as the product and the law evolve. The “Last updated” date at the top of this page reflects the latest revision. Material changes will be highlighted in the app and on the home page before they take effect."})]}),e.jsxs(O,{children:[e.jsx("h2",{children:"12. Contact"}),e.jsxs("p",{children:[z.legalName,e.jsx("br",{}),z.address,e.jsx("br",{}),"Email:"," ",e.jsx("a",{href:`mailto:${z.supportEmail}`,children:z.supportEmail})]})]})]});i.form`
  display: grid;
  gap: 14px;
  font-family: ${j};
`;i.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;const ei=`
  width: 100%;
  padding: 14px 16px;
  border-radius: 12px;
  font-size: 15px;
  font-family: ${j};
  transition: border-color 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;

  &:focus {
    outline: none;
  }
`;i.input`
  ${ei};
  background: var(--v29-page);
  border: 1px solid var(--v29-line-soft);
  color: var(--v29-text);

  &::placeholder {
    color: var(--v29-muted);
  }
  &:focus {
    background: var(--v29-card);
    border-color: var(--v29-primary);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--v29-primary) 20%, transparent);
  }
`;i.textarea`
  ${ei};
  background: var(--v29-page);
  border: 1px solid var(--v29-line-soft);
  color: var(--v29-text);
  min-height: 120px;
  resize: vertical;

  &::placeholder {
    color: var(--v29-muted);
  }
  &:focus {
    background: var(--v29-card);
    border-color: var(--v29-primary);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--v29-primary) 20%, transparent);
  }
`;i.button`
  justify-self: end;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 26px;
  border-radius: 8px;
  background: var(--v29-primary);
  color: #fff;
  font-family: ${j};
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.01em;
  border: none;
  cursor: pointer;
  transition: transform 0.15s ease, background 0.15s ease;

  &:hover:not(:disabled) {
    background: var(--v29-primary-hover);
    transform: translateY(-1px);
  }
  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`;i.p`
  margin: 4px 0 0;
  font-family: ${j};
  font-size: 14px;
  color: ${t=>t.$kind==="success"?"var(--v29-success, #1B7F4B)":"var(--v29-danger, #C0392B)"};
`;i.p`
  margin: -8px 0 0;
  font-family: ${j};
  font-size: 13px;
  color: var(--v29-danger, #C0392B);
`;i.ol`
  counter-reset: step;
  list-style: none;
  margin: 0 0 24px;
  padding: 0;
  display: grid;
  gap: 12px;
`;i.li`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  font-family: ${j};
  font-size: 15px;
  line-height: 1.65;
  color: var(--v29-muted);

  strong {
    color: var(--v29-text);
    font-weight: 600;
  }

  &::before {
    counter-increment: step;
    content: counter(step);
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    margin-top: 1px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: var(--v29-primary);
    color: #FFF;
    font-family: ${j};
    font-size: 13px;
    font-weight: 600;
    display: grid;
    place-items: center;
  }

  strong {
    color: var(--v29-text);
    font-weight: 600;
  }
`;i.div`
  background: var(--v29-card);
  border-radius: 14px;
  padding: 16px 20px;
  font-family: ${j};
  font-size: 14.5px;
  line-height: 1.65;
  color: var(--v29-muted);
  margin: 0 0 16px;
  box-shadow: 0 4px 24px -8px rgba(0, 0, 0, 0.15);
  border: 1px solid var(--v29-line-soft);
`;i.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin: 12px 0 16px;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;i.div`
  border-radius: 14px;
  padding: 20px 22px;
  background: var(--v29-card);
  box-shadow: 0 4px 24px -8px rgba(0, 0, 0, 0.15);
  border: 1px solid var(--v29-line-soft);

  h3 {
    margin: 0 0 10px;
    font-family: ${j};
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--v29-muted);
  }
  ul {
    margin: 0;
    padding-left: 18px;
    font-family: ${j};
    font-size: 14px;
    line-height: 1.6;
    color: var(--v29-muted);
  }
  li {
    margin-bottom: 6px;
  }
`;i.div`
  background: var(--v29-card);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 24px -8px rgba(0, 0, 0, 0.15);
  border: 1px solid var(--v29-line-soft);
`;const ps=()=>e.jsxs(ze,{children:[e.jsx(Ye,{children:"Account support"}),e.jsx(nt,{children:"Delete your account."}),e.jsx(O,{children:e.jsxs("p",{children:["For help with your account, email ",e.jsx("a",{href:`mailto:${z.supportEmail}`,children:z.supportEmail}),"."]})})]}),zr=i.table`
  width: 100%;
  border-collapse: collapse;
  margin: 8px 0 16px;
  font-family: ${j};
  font-size: 14.5px;
  line-height: 1.6;

  th, td {
    text-align: left;
    padding: 14px 16px;
    border-bottom: 1px solid var(--v29-line-soft);
    vertical-align: top;
    color: var(--v29-muted);
  }
  th {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--v29-muted);
  }
  tbody tr:last-child td {
    border-bottom: none;
  }
  strong {
    color: var(--v29-text);
    font-weight: 600;
  }
`,oe=i.span`
  display: inline-flex;
  font-family: ${j};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 999px;
  /* Pills must stay on a single line — wrapping ("Active shift /
     only") reads as unintentional and looks unprofessional next to
     the firm one-word badges around it. */
  white-space: nowrap;
  background: ${t=>t.$tone==="yes"?"var(--v29-primary)":t.$tone==="no"?"rgba(234, 129, 24, 0.12)":"var(--v29-line-soft)"};
  color: ${t=>t.$tone==="yes"?"#FFFFFF":t.$tone==="no"?ce:"var(--v29-text)"};
`,hs=i.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin: 12px 0 32px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`,qt=i.div`
  background: var(--v29-card);
  border-radius: 16px;
  padding: 20px 22px;
  font-family: ${j};
  box-shadow: 0 4px 24px -8px rgba(0, 0, 0, 0.15);
  border: 1px solid var(--v29-line-soft);

  strong {
    display: block;
    color: var(--v29-text);
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 6px;
    letter-spacing: 0.01em;
  }
  span {
    font-size: 13.5px;
    color: var(--v29-muted);
    line-height: 1.6;
  }
`,us=()=>e.jsxs(ze,{children:[e.jsx(Ye,{children:"Data Safety Disclosure"}),e.jsx(nt,{children:"What we collect, why, and who receives it."}),e.jsxs(xt,{children:["This Disclosure sets out the categories of personal data that"," ",z.legalName," (“Senditgo”, “we” or “us”) collects through the SenditGo driver application, the purposes for which it is processed, and the third parties with whom it is shared. It is published in conjunction with, and maintained to mirror, the data declarations made in our Apple App Store and Google Play listings, in accordance with the Australian Privacy Act 1988 (Cth), the Australian Privacy Principles, and applicable store policies."]}),e.jsxs(hs,{children:[e.jsxs(qt,{children:[e.jsx("strong",{children:"No third-party advertising"}),e.jsx("span",{children:"Senditgo does not serve third-party advertising within the application and does not construct advertising or behavioural profiles from user data."})]}),e.jsxs(qt,{children:[e.jsx("strong",{children:"No sale of personal data"}),e.jsx("span",{children:"Senditgo does not sell, rent, or otherwise transfer personal data to data brokers, marketing intermediaries, or unaffiliated third parties."})]}),e.jsxs(qt,{children:[e.jsx("strong",{children:"Encryption in transit and at rest"}),e.jsx("span",{children:"Communications between the application and our servers are protected by TLS 1.2 or higher. Production data is encrypted at rest under managed keys."})]})]}),e.jsxs(O,{children:[e.jsx("h2",{children:"Data we collect"}),e.jsxs(zr,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Purpose"}),e.jsx("th",{children:"Required?"}),e.jsx("th",{children:"Linked to you"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Mobile number"})}),e.jsx("td",{children:"Account creation, OTP sign-in"}),e.jsx("td",{children:e.jsx(oe,{$tone:"yes",children:"Required"})}),e.jsx("td",{children:e.jsx(oe,{$tone:"yes",children:"Yes"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Name & email"})}),e.jsx("td",{children:"Identifying you to your operator, contact"}),e.jsx("td",{children:e.jsx(oe,{$tone:"yes",children:"Required"})}),e.jsx("td",{children:e.jsx(oe,{$tone:"yes",children:"Yes"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Precise location"})}),e.jsx("td",{children:"Live driver tracking, ETA, geofence events"}),e.jsx("td",{children:e.jsx(oe,{$tone:"opt",children:"Active shift only"})}),e.jsx("td",{children:e.jsx(oe,{$tone:"yes",children:"Yes"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Photos & signatures"})}),e.jsx("td",{children:"Proof of delivery captured at the door"}),e.jsx("td",{children:e.jsx(oe,{$tone:"opt",children:"Per delivery"})}),e.jsx("td",{children:e.jsx(oe,{$tone:"yes",children:"Yes"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"In-app messages"})}),e.jsx("td",{children:"Driver ↔ dispatcher coordination"}),e.jsx("td",{children:e.jsx(oe,{$tone:"opt",children:"Optional"})}),e.jsx("td",{children:e.jsx(oe,{$tone:"yes",children:"Yes"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Device & app info"})}),e.jsx("td",{children:"Crash reports, performance diagnostics"}),e.jsx("td",{children:e.jsx(oe,{$tone:"yes",children:"Required"})}),e.jsx("td",{children:e.jsx(oe,{$tone:"opt",children:"Pseudonymous"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Push notification token"})}),e.jsx("td",{children:"Job assignments, dispatcher messages"}),e.jsx("td",{children:e.jsx(oe,{$tone:"opt",children:"Optional"})}),e.jsx("td",{children:e.jsx(oe,{$tone:"yes",children:"Yes"})})]})]})]})]}),e.jsxs(O,{children:[e.jsx("h2",{children:"Who we share data with"}),e.jsxs(zr,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Recipient"}),e.jsx("th",{children:"What they receive"}),e.jsx("th",{children:"Why"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Your operator"})}),e.jsx("td",{children:"Shift activity, route, proof-of-delivery records"}),e.jsx("td",{children:"Running their dispatch operation; their legitimate business records"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Cloud hosting (AWS)"})}),e.jsx("td",{children:"All production data, encrypted"}),e.jsx("td",{children:"Infrastructure provider, bound by data-processing agreement"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Map tiles (Mapbox)"})}),e.jsx("td",{children:"Anonymised location to fetch map tiles"}),e.jsx("td",{children:"Render maps inside the app"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Push delivery (Apple/Google)"})}),e.jsx("td",{children:"Push token + payload metadata"}),e.jsx("td",{children:"Deliver notifications to your device"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Crash reporting"})}),e.jsx("td",{children:"Crash stack trace, device model, OS version"}),e.jsx("td",{children:"Diagnose and fix bugs"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Authorities"})}),e.jsx("td",{children:"Only what a valid legal order under Australian law requires"}),e.jsx("td",{children:"Legal compliance"})]})]})]})]}),e.jsxs(O,{children:[e.jsx("h2",{children:"User controls"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Location."})," Precise location is collected only while a shift is active. Users may revoke the operating system location permission at any time, in which case the application reverts to a reduced-precision mode."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Push notifications."})," Notifications are optional and may be disabled in system settings without affecting other functionality."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Account and data deletion."})," Deletion is available both in-application and via the web. See the dedicated"," ",e.jsx("a",{href:ve("/account-deletion"),children:"account deletion"})," page for the relevant procedure."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Access, correction, and complaint."})," Users may exercise their statutory rights under the Australian Privacy Act 1988 (Cth) — including the right to lodge a complaint with the Office of the Australian Information Commissioner (OAIC) — as described in the ",e.jsx("a",{href:ve("/privacy"),children:"privacy policy"}),"."]})]})]}),e.jsxs(O,{children:[e.jsx("h2",{children:"Publication and reconciliation"}),e.jsxs("p",{children:["This page constitutes the authoritative record of Senditgo’s data declarations. Identical content is published in the"," ",e.jsx("strong",{children:"Data Safety"})," section of our Google Play listing and in the ",e.jsx("strong",{children:"Privacy Nutrition Labels"})," on our Apple App Store listing. Where a discrepancy is identified between this page and the store declarations, the matter may be reported to"," ",e.jsx("a",{href:`mailto:${z.supportEmail}`,children:z.supportEmail})," ","and Senditgo will reconcile the records within fourteen (14) days."]})]}),e.jsxs(O,{children:[e.jsx("h2",{children:"Further information"}),e.jsxs("p",{children:["For a fuller description of how personal data is collected, the legal bases on which it is processed, retention periods, international transfers, and the rights available to users, please refer to the",e.jsx("a",{href:ve("/privacy"),children:" Senditgo Privacy Policy"}),". General enquiries may be directed to"," ",e.jsx("a",{href:`mailto:${z.supportEmail}`,children:z.supportEmail}),"."]})]})]}),jt={hero:ve("/videos/broll/broll-hero-melbourne-dusk.mp4"),cta:ve("/videos/broll/broll-warehouse-aisle.mp4"),heroPoster:ve("/images/broll/broll-hero-melbourne-dusk-poster.jpg"),ctaPoster:ve("/images/broll/broll-warehouse-aisle-poster.jpg")},ms=i.div`
  background: var(--v29-page);
  color: var(--v29-text);
  font-family: ${j};
  -webkit-font-smoothing: antialiased;
  transition: background 0.3s ease, color 0.3s ease;

  &[data-motion-paused='true'] *,
  &[data-motion-paused='true'] *::before,
  &[data-motion-paused='true'] *::after {
    animation-play-state: paused !important;
  }
`,xs=F.lazy(()=>Oi(()=>import("./DeliveryTrackingReview-DzTPYQsr.js"),__vite__mapDeps([0,1,2,3,4,5]))),Me=i.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 clamp(20px, 4vw, 48px);
`,ht=i.section`
  position: relative;
  padding: clamp(72px, 11vh, 128px) 0;
  background: ${t=>t.$alt?"var(--v29-surface-alt)":"transparent"};
`,gs=i(ht)`
  padding-bottom: clamp(20px, 2.5vw, 36px);
`,lt=i.p`
  font-family: ${j};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--v29-eyebrow-text);
  margin: 0 0 14px;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${ce};
    ${t=>t.$glow&&`box-shadow: 0 0 6px ${ce};`}
  }
`,fs=i.section`
  position: relative;
  z-index: 5;
  background: var(--v29-surface-alt);
  padding: clamp(96px, 14vh, 150px) 0;
  border-top: 1px solid var(--v29-line-soft);
`,vs=i.div`
  margin: 0 0 clamp(48px, 8vh, 88px);
`,ys=i.h2`
  font-family: ${me};
  font-style: italic;
  font-weight: 700;
  font-size: clamp(1.9rem, 1.3rem + 2.6vw, 3rem);
  letter-spacing: 0.01em;
  line-height: 1.08;
  color: var(--v29-text);
  margin: 0;
  max-width: 18ch;
  .accent {
    color: var(--v29-accent-text);
  }
`,bs=i.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: clamp(14px, 1.4vw, 20px);
  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`,te=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  min-height: 260px;
  padding: 32px 24px 24px;
  text-decoration: none;
  color: var(--v29-text);
  background: var(--v29-card);
  border: 1px solid var(--v29-line-soft);
  border-radius: 16px;
  box-shadow: var(--v29-card-shadow);
  transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;

  &:hover,
  &:focus-visible {
    transform: translateY(-2px);
    border-color: var(--v29-line);
    box-shadow: var(--v29-card-shadow-hover);
  }
  /* Keyboard focus shows the same ring as the page's other controls. */
  &:focus-visible {
    outline: 2px solid var(--v29-primary);
    outline-offset: 2px;
  }

  &:hover > *,
  &:focus-visible > * {
    animation-play-state: running;
  }
`,wt=i.div`
  text-align: center;
  .label {
    font-family: ${me};
    font-size: clamp(1.15rem, 1rem + 0.5vw, 1.3rem);
    font-weight: 700;
    font-style: italic;
    letter-spacing: -0.01em;
    line-height: 1.2;
    color: var(--v29-text);
    margin: 0;
  }
  .desc {
    font-family: ${j};
    font-size: 14px;
    line-height: 1.6;
    color: var(--v29-muted);
    margin: 12px 0 0;
  }
`,Tt=i.div`
  position: relative;
  width: 160px;
  height: 160px;
  overflow: visible;
`,js=i(Tt)`
  .radar-grid {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: none;
  }
  .grid-circle {
    stroke: var(--v29-line-soft);
    stroke-width: 1;
    opacity: 0.6;
  }
  .grid-axis {
    stroke: var(--v29-line-soft);
    stroke-width: 1;
    opacity: 0.5;
    stroke-dasharray: 2 4;
  }
  .radar-sweep {
    position: absolute;
    top: 10%;
    left: 10%;
    width: 80%;
    height: 80%;
    border-radius: 50%;
    background: conic-gradient(
      from 0deg,
      rgba(0, 127, 255, 0.25) 0%,
      rgba(0, 127, 255, 0.08) 15%,
      transparent 40%,
      transparent 100%
    );
    z-index: 2;
    animation: radarScan 4s linear infinite;
    transform-origin: center;
  }
  .radar-node {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    z-index: 3;
  }
  .n1 {
    top: 35%;
    left: 65%;
    background: ${ce};
    animation: radarPing1 4s linear infinite;
  }
  .n2 {
    top: 70%;
    left: 60%;
    background: ${we};
    animation: radarPing2 4s linear infinite;
  }
  .n3 {
    top: 60%;
    left: 30%;
    background: ${ce};
    animation: radarPing3 4s linear infinite;
  }
  .n4 {
    top: 25%;
    left: 40%;
    background: ${we};
    animation: radarPing4 4s linear infinite;
  }
  .radar-sweep,
  .n1,
  .n2,
  .n3,
  .n4 {
    animation-play-state: paused;
  }
  @keyframes radarScan {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes radarPing1 {
    0%,
    8% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.8);
    }
    12.5% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1.3);
    }
    22%,
    100% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.8);
    }
  }
  @keyframes radarPing2 {
    0%,
    35% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.8);
    }
    40% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1.3);
    }
    50%,
    100% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.8);
    }
  }
  @keyframes radarPing3 {
    0%,
    57% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.8);
    }
    62.5% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1.3);
    }
    72%,
    100% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.8);
    }
  }
  @keyframes radarPing4 {
    0%,
    85% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.8);
    }
    90% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1.3);
    }
    98%,
    100% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.8);
    }
  }
  ${te}:focus-visible &,
  ${te}[data-play='on'] & {
    .radar-sweep,
    .n1,
    .n2,
    .n3,
    .n4 {
      animation-play-state: running;
    }
  }
  /* Only where there is something to hover with: on a touch screen a tap
     leaves :hover stuck, and the picture would loop until the next tap. */
  @media (hover: hover) {
    ${te}:hover & {
      .radar-sweep,
      .n1,
      .n2,
      .n3,
      .n4 {
        animation-play-state: running;
      }
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .radar-sweep,
    .n1,
    .n2,
    .n3,
    .n4 {
      animation: none;
    }
    .n1,
    .n3 {
      opacity: 0.8;
    }
  }
`,ws=i(Tt)`
  svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    fill: none;
  }
  .axis {
    stroke: var(--v29-line-soft);
    stroke-width: 1.5;
    stroke-linecap: round;
  }
  .bar {
    fill: rgba(0, 127, 255, 0.14);
    stroke: ${we};
    stroke-width: 1.5;
    stroke-opacity: 0.55;
    transform-box: fill-box;
    transform-origin: bottom;
  }
  .b4 {
    fill: rgba(0, 127, 255, 0.5);
    stroke-opacity: 1;
  }
  .trend,
  .trend-head {
    stroke: ${ce};
    stroke-width: 2.5;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  .trend {
    stroke-dasharray: 116;
    stroke-dashoffset: 0;
  }
  .b2 {
    animation: costDrop2 4s ease-in-out infinite;
  }
  .b3 {
    animation: costDrop3 4s ease-in-out infinite;
  }
  .b4 {
    animation: costDrop4 4s ease-in-out infinite;
  }
  .trend {
    animation: costTrend 4s ease-in-out infinite;
  }
  .trend-head {
    animation: costHead 4s ease-in-out infinite;
  }
  .b2,
  .b3,
  .b4,
  .trend,
  .trend-head {
    animation-play-state: paused;
  }
  /* 0% is the finished picture, so the paused plate reads correctly. */
  @keyframes costDrop2 {
    0%,
    70%,
    100% {
      transform: scaleY(1);
    }
    12%,
    24% {
      transform: scaleY(1.31);
    }
  }
  @keyframes costDrop3 {
    0%,
    70%,
    100% {
      transform: scaleY(1);
    }
    12%,
    24% {
      transform: scaleY(1.83);
    }
  }
  @keyframes costDrop4 {
    0%,
    70%,
    100% {
      transform: scaleY(1);
    }
    12%,
    24% {
      transform: scaleY(2.8);
    }
  }
  @keyframes costTrend {
    0%,
    70%,
    100% {
      stroke-dashoffset: 0;
    }
    12%,
    24% {
      stroke-dashoffset: 116;
    }
  }
  @keyframes costHead {
    0%,
    72%,
    100% {
      opacity: 1;
    }
    12%,
    62% {
      opacity: 0;
    }
  }
  ${te}:focus-visible &,
  ${te}[data-play='on'] & {
    .b2,
    .b3,
    .b4,
    .trend,
    .trend-head {
      animation-play-state: running;
    }
  }
  @media (hover: hover) {
    ${te}:hover & {
      .b2,
      .b3,
      .b4,
      .trend,
      .trend-head {
        animation-play-state: running;
      }
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .b2,
    .b3,
    .b4,
    .trend,
    .trend-head {
      animation: none;
    }
  }
`,ks=i(Tt)`
  svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    fill: none;
  }
  .orbit {
    transform-origin: 80px 80px;
    animation: returnLoop 6s linear infinite;
    animation-play-state: paused;
  }
  .loop,
  .loop-head {
    stroke: ${we};
    stroke-width: 2.5;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-opacity: 0.75;
  }
  .house {
    fill: rgba(0, 127, 255, 0.12);
    stroke: ${we};
    stroke-width: 2;
    stroke-linejoin: round;
  }
  .check {
    stroke: ${ce};
    stroke-width: 3;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  @keyframes returnLoop {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  ${te}:focus-visible &,
  ${te}[data-play='on'] & {
    .orbit {
      animation-play-state: running;
    }
  }
  @media (hover: hover) {
    ${te}:hover & {
      .orbit {
        animation-play-state: running;
      }
    }
  }
  /* On a touch screen the turn starts by itself, so it is over within five
     seconds like the other three. */
  @media (hover: none), (pointer: coarse) {
    .orbit {
      animation-duration: 5s;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .orbit {
      animation: none;
    }
  }
`,Ss=i(Tt)`
  svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    fill: none;
  }
  .face {
    fill: rgba(0, 127, 255, 0.05);
    stroke: var(--v29-line-soft);
    stroke-width: 1.5;
  }
  .tick {
    stroke: var(--v29-muted);
    stroke-width: 1.5;
    stroke-linecap: round;
    opacity: 0.55;
  }
  .saved {
    stroke: ${ce};
    stroke-width: 6;
    stroke-linecap: round;
    stroke-dasharray: 118;
    stroke-dashoffset: 0;
    animation: timeSaved 5s ease-in-out infinite;
  }
  .hand {
    stroke: var(--v29-text);
    stroke-width: 3;
    stroke-linecap: round;
  }
  .hand-moving {
    transform-origin: 80px 80px;
    transform: rotate(120deg);
    animation: timeHand 5s ease-in-out infinite;
  }
  .pin {
    fill: ${we};
  }
  .saved,
  .hand-moving {
    animation-play-state: paused;
  }
  /* 0% is the finished picture, so the paused plate reads correctly. The
     hand only ever turns anticlockwise: it winds back to twelve, holds,
     fades, and reappears at four. */
  @keyframes timeSaved {
    0%,
    8% {
      stroke-dashoffset: 0;
      opacity: 1;
    }
    58%,
    74% {
      stroke-dashoffset: 118;
      opacity: 1;
    }
    80% {
      stroke-dashoffset: 118;
      opacity: 0;
    }
    80.01% {
      stroke-dashoffset: 0;
      opacity: 0;
    }
    92%,
    100% {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }
  @keyframes timeHand {
    0%,
    8% {
      transform: rotate(120deg);
      opacity: 1;
    }
    58%,
    74% {
      transform: rotate(0deg);
      opacity: 1;
    }
    80% {
      transform: rotate(0deg);
      opacity: 0;
    }
    80.01% {
      transform: rotate(120deg);
      opacity: 0;
    }
    92%,
    100% {
      transform: rotate(120deg);
      opacity: 1;
    }
  }
  ${te}:focus-visible &,
  ${te}[data-play='on'] & {
    .saved,
    .hand-moving {
      animation-play-state: running;
    }
  }
  @media (hover: hover) {
    ${te}:hover & {
      .saved,
      .hand-moving {
        animation-play-state: running;
      }
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .saved,
    .hand-moving {
      animation: none;
    }
  }
`,kt=i.h2`
  font-family: ${me};
  font-style: italic;
  font-weight: 700;
  font-size: clamp(1.9rem, 1.3rem + 2.6vw, 3rem);
  letter-spacing: 0.01em;
  line-height: 1.08;
  margin: 0 0 16px;
  color: var(--v29-text);
`,dt=i.p`
  font-size: clamp(1rem, 0.95rem + 0.3vw, 1.125rem);
  line-height: 1.65;
  color: var(--v29-muted);
  max-width: 56ch;
  margin: 0;
`,Es=i.nav`
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 60;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px clamp(20px, 4vw, 48px);
  background: var(--v29-nav);
  backdrop-filter: saturate(140%) blur(18px);
  -webkit-backdrop-filter: saturate(140%) blur(18px);
  border-bottom: 1px solid var(--v29-line-soft);
  /* Guide rule: on dark, the logomark keeps full colour and only the
     logotype reverses to white (BrandLogo reads --brand-logo-color). */
  --brand-logo-color: #ffffff;
  [data-theme='light'] & {
    --brand-logo-color: ${Nn};
  }
`,Is=i.div`
  display: flex;
  align-items: center;
  gap: 12px;
  @media (max-width: 480px) {
    gap: 8px;
  }
`,$s=i.span`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  .nav-mark {
    display: none;
  }
  @media (max-width: 480px) {
    ${({$compact:t})=>t?`
      .nav-wordmark { display: none; }
      .nav-mark { display: inline-flex; }
    `:""}
  }
`,As=i.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid var(--v29-line);
  background: transparent;
  color: ${we};
  cursor: pointer;
  transition: border-color 0.25s ease, background 0.25s ease;
  svg {
    width: 16px;
    height: 16px;
    display: block;
  }
  &:hover {
    border-color: ${we};
    background: rgba(0, 127, 255, 0.08);
  }
  &:focus-visible {
    outline: 2px solid ${we};
    outline-offset: 2px;
  }
  @media (max-width: 480px) {
    width: 44px;
    height: 44px;
  }
`,Rs=i(ke)`
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 8px;
  font-family: ${me};
  font-style: italic;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
  @media (max-width: 480px) {
    min-height: 44px;
    ${({$hideOnNarrow:t})=>t?"display: none;":""}
  }
  /* Narrow phones: a tighter button, so its words stay on one line down to
     about 350 px and the logo keeps some air beside it. */
  @media (max-width: 380px) {
    padding: 10px 12px;
    letter-spacing: 0.06em;
  }
  ${({$ghost:t})=>t?`
    border: 1.5px solid var(--v29-line);
    background: transparent;
    color: var(--v29-text);
    &:hover {
      border-color: var(--v29-primary);
      background: color-mix(in srgb, var(--v29-primary) 8%, transparent);
      transform: translateY(-1px);
    }
    &:focus-visible {
      outline: 2px solid var(--v29-primary);
      outline-offset: 2px;
    }
  `:`
    background: ${Et};
    color: #fff;
    &:hover { background: ${Et}; transform: translateY(-1px); }
    &:focus-visible {
      outline: 2px solid var(--v29-primary);
      outline-offset: 2px;
    }
  `}
`,Cs=i.header`
  position: relative;
  min-height: 100vh;
  padding-bottom: var(--cookie-consent-offset, 0px);
  display: flex;
  align-items: center;
  background: #071120;
`,Os=i.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
`,Ps=i.div`
  position: absolute;
  inset: 0;
  background: rgba(7, 17, 32, 0.55);
`,Ts=i(Me)`
  position: relative;
  z-index: 2;
  width: 100%;
  padding-top: 120px;
  padding-bottom: 72px;
`,Ls=i(Pi.div)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border-radius: 999px;
  border: 1px solid rgba(0, 127, 255, 0.25);
  background: rgba(12, 27, 51, 0.6);
  backdrop-filter: blur(12px);
  color: #f4f7fb;
  font-family: ${j};
  font-size: 11.5px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 28px;
  align-self: flex-start;
  width: fit-content;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);

  /* Two lines on phones, breaking between the two sentences. */
  @media (max-width: 464px) {
    max-width: 308px;
    align-items: flex-start;
    border-radius: 18px;
    .dot {
      margin-top: 5px;
    }
  }

  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${ce};
    flex-shrink: 0;
    box-shadow: 0 0 8px ${ce};
    animation: badge-pulse 2s infinite ease-in-out;
    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  }

  @keyframes badge-pulse {
    0% {
      transform: scale(1);
      box-shadow: 0 0 4px ${ce};
      opacity: 1;
    }
    50% {
      transform: scale(1.4);
      box-shadow: 0 0 12px ${ce};
      opacity: 0.8;
    }
    100% {
      transform: scale(1);
      box-shadow: 0 0 4px ${ce};
      opacity: 1;
    }
  }
`,Ns=i.h1`
  font-family: ${me};
  font-style: italic;
  font-weight: 700;
  /* The second term keeps "Fleet-wide" whole on a phone-width column. */
  font-size: clamp(2rem, min(1.6rem + 5.2vw, (100vw - 40px) / 8.45), 5rem);
  line-height: 1.04;
  letter-spacing: 0.005em;
  color: #fff;
  margin: 0 0 20px;
  max-width: 17ch;
  .go {
    color: ${we};
  }
`,Ms=i.p`
  font-size: clamp(1.05rem, 1rem + 0.35vw, 1.2rem);
  line-height: 1.6;
  color: #c3d2e6;
  max-width: 52ch;
  margin: 0 0 36px;
`,Br=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 48px;
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
    a {
      justify-content: center;
      min-height: 48px;
    }
  }
`,Ur=i(ke)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  border-radius: 8px;
  background: ${Et};
  color: #fff;
  font-family: ${me};
  font-style: italic;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.2s ease;
  &:hover {
    background: ${Et};
    transform: translateY(-1px);
  }
`,Ds=i.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  border-radius: 8px;
  border: 1.5px solid rgba(255, 255, 255, 0.55);
  background: transparent;
  color: #fff;
  font-family: ${me};
  font-style: italic;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: #fff;
  }
`,Fs=i.div`
  display: grid;
  grid-template-columns: minmax(0,1.23fr) minmax(0,.85fr);
  column-gap: clamp(36px, 6vw, 88px);
  align-items: end;
  > :first-child { grid-column: 1 / -1; }
  h2, p:last-child { margin: 0; }
  h2 { max-width: 20ch; text-wrap: balance; }
  @media (max-width: 760px) { grid-template-columns: 1fr; gap: 12px; }
`,zs=i.div`
  margin: clamp(28px, 4.5vw, 66px) 0 clamp(22px, 3vw, 38px);
`,Bs=i.section`
  position: relative;
  min-height: clamp(320px, 52vh, 520px);
  display: flex;
  align-items: center;
  background: #071120;
  overflow: hidden;
`,Us=i.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.45;
`,_s=i(Me)`
  position: relative;
  z-index: 2;
  text-align: center;
  padding-top: 72px;
  padding-bottom: 72px;
  h2 {
    font-family: ${me};
    font-style: italic;
    font-weight: 700;
    font-size: clamp(2.2rem, 1.5rem + 3.6vw, 3.8rem);
    color: #fff;
    margin: 0 0 14px;
  }
  p {
    color: #c3d2e6;
    font-size: 1.05rem;
    margin: 0 0 32px;
  }
`,Gs="(hover: none), (pointer: coarse)",_r=.6;function qs(){const t=b.useRef(null);return b.useEffect(()=>{const r=t.current;if(!r||typeof IntersectionObserver!="function"||typeof window.matchMedia!="function"||!window.matchMedia(Gs).matches)return;const n=[...r.children],a=new IntersectionObserver(g=>{g.forEach(x=>{x.intersectionRatio>=_r&&(x.target.dataset.play="on")})},{threshold:_r}),h=g=>{g.currentTarget.dataset.play="on"},d=g=>{delete g.currentTarget.dataset.play};return n.forEach(g=>{a.observe(g),g.addEventListener("click",h),g.addEventListener("animationiteration",d)}),()=>{a.disconnect(),n.forEach(g=>{g.removeEventListener("click",h),g.removeEventListener("animationiteration",d),delete g.dataset.play})}},[]),t}function Ws(){const t=b.useRef(null),[r,n]=F.useState(!1);return b.useEffect(()=>{if(!t.current)return;const a=new IntersectionObserver(([h])=>{h.isIntersecting&&(n(!0),a.disconnect())},{rootMargin:"440px 0px"});return a.observe(t.current),()=>a.disconnect()},[]),e.jsx(ht,{as:"div",id:"delivery-tracking",ref:t,children:e.jsx(Me,{style:{minHeight:440},children:r&&e.jsx(F.Suspense,{fallback:null,children:e.jsx(xs,{initialAudience:"Consignee",sectionId:"home-tracking"})})})})}const Hs=()=>{const t=Ti(),r=b.useRef(null);b.useLayoutEffect(()=>{const c=()=>{var y;const p=window.location.hash.slice(1);if(["sam","sam-steps","fleet-walkthrough","fleet-toolkit","sam-options","fleet-recordings","activity","fleet-insights","fleet-features","platform","delivery-proof","delivery-tracking"].includes(p)){const v=["fleet-walkthrough","fleet-toolkit","fleet-recordings","fleet-insights"].includes(p)?"console":p==="sam-options"?"sam":p==="delivery-proof"?"platform":p;(y=document.getElementById(v))==null||y.scrollIntoView({block:"start",behavior:"instant"})}};return c(),window.addEventListener("hashchange",c),()=>window.removeEventListener("hashchange",c)},[]);const n=qs(),{mode:a,toggleTheme:h}=ar(),d=Li(),g=d.length>0,x=d.some(c=>c.role==="shipper"),s=dr(),l=b.useRef(null),o=b.useRef(null);return b.useEffect(()=>{var m;const c=[...((m=r.current)==null?void 0:m.querySelectorAll("video[data-page-video]"))??[]],p=w=>{var k;const I=w.getBoundingClientRect(),E=I.bottom>0&&I.top<window.innerHeight;t||document.hidden||!E||w.dataset.active==="false"?w.pause():(k=w.play())==null||k.catch(()=>{})},y=new IntersectionObserver(w=>{w.forEach(I=>p(I.target))}),v=()=>c.forEach(p);return c.forEach(w=>y.observe(w)),v(),document.addEventListener("visibilitychange",v),()=>{y.disconnect(),document.removeEventListener("visibilitychange",v),c.forEach(w=>w.pause())}},[t,a]),e.jsxs(ms,{ref:r,"data-motion-paused":t,children:[e.jsx(sr,{}),e.jsxs(Es,{ref:o,children:[e.jsxs($s,{$compact:g,role:"img","aria-label":"SenditGo",children:[e.jsx("span",{className:"nav-wordmark","aria-hidden":"true",children:e.jsx(kr,{height:30,ariaLabel:""})}),e.jsx("span",{className:"nav-mark","aria-hidden":"true",children:e.jsx(kr,{height:30,variant:"mark",ariaLabel:""})})]}),e.jsxs(Is,{children:[e.jsx(As,{onClick:h,"aria-label":"Toggle dark / light",children:a==="dark"?e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"12",cy:"12",r:"4"}),e.jsx("path",{d:"M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"})]}):e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})}),e.jsx(Rs,{to:"/contact",$ghost:x,$hideOnNarrow:x,children:"Get early access"}),(g||s)&&e.jsx(Ni,{})]})]}),e.jsxs(Cs,{children:[e.jsx(Os,{"data-page-video":!0,src:jt.hero,autoPlay:!t,loop:!0,muted:!0,playsInline:!0,preload:"auto",poster:jt.heroPoster}),e.jsx(Ps,{}),e.jsxs(Ts,{children:[e.jsxs(Ls,{initial:t?!1:{opacity:0,y:-12},animate:{opacity:1,y:0},transition:t?{duration:0}:{duration:.8,ease:Mi,delay:.08},children:[e.jsx("span",{className:"dot"}),"Intelligent transport management. Launching 2027."]}),e.jsxs(Ns,{children:["Set the outcome. Fleet-wide intelligence handles the rest",e.jsx("span",{className:"go",children:"."})]}),e.jsx(Ms,{children:"SenditGo’s AI, SAM, weighs thousands of combinations across every stop, window and driver, then hands back a dispatch-ready plan in seconds—with the routes, allocations and knock-on effects already considered."}),e.jsxs(Br,{children:[e.jsx(Ur,{to:"/contact",children:"Get early access"}),e.jsx(Ds,{onClick:c=>{var p;c.preventDefault(),(p=l.current)==null||p.scrollIntoView({behavior:t?"auto":"smooth",block:"start"})},href:"#console",children:"See it in action"})]})]})]}),e.jsx(ht,{"aria-labelledby":"network-title",id:"console",ref:l,children:e.jsxs(Me,{children:[e.jsxs("div",{style:{textAlign:"center",maxWidth:680,margin:"0 auto"},children:[e.jsx(lt,{$glow:!0,style:{justifyContent:"center"},children:"The network"}),e.jsx(kt,{id:"network-title",children:"Nothing slips past you"}),e.jsx(dt,{style:{margin:"0 auto"},children:"Every driver, route and delivery stays live in one clear view. If something starts slipping, SenditGo flags it early so dispatch can act before it becomes a customer problem."}),e.jsx(dt,{style:{margin:"18px auto 0"},children:"Customers track their own delivery, live — a running ETA the whole way, and a map that opens to their driver the moment they’re next in line."})]}),e.jsx(Di,{})]})}),e.jsx(ht,{id:"sam","aria-labelledby":"sam-title",$alt:!0,children:e.jsxs(Me,{children:[e.jsxs(Fs,{children:[e.jsx(lt,{children:Gt.eyebrow}),e.jsx(kt,{id:"sam-title",children:Gt.title}),e.jsx(dt,{children:Gt.copy})]}),e.jsx(zs,{children:e.jsx(Fi,{sceneId:"dispatch-scene",reducedMotion:t,renderScene:c=>e.jsx(zi,{stage:c})})})]})}),e.jsx(ht,{"aria-labelledby":"product-features-title",children:e.jsxs(Me,{children:[e.jsx(lt,{children:"One connected system"}),e.jsx(kt,{id:"product-features-title",children:"Smart underneath. Simple on top."}),e.jsx(dt,{children:"Everything a serious operation runs on, working as one"}),e.jsx(Bi,{})]})}),e.jsx(Ui,{navRef:o}),e.jsx(fs,{id:"features",children:e.jsxs(Me,{children:[e.jsxs(vs,{children:[e.jsx(lt,{$glow:!0,children:"The difference it makes"}),e.jsxs(ys,{children:["Not just smarter runs. ",e.jsx("br",{}),"A"," ",e.jsx("span",{className:"accent",children:"smarter operation."})]}),e.jsx(dt,{style:{margin:"18px 0 0"},children:"When the planning runs itself, everything downstream gets easier — your costs, your day, your customers, your peace of mind."})]}),e.jsxs(bs,{ref:n,children:[e.jsxs(te,{role:"group",tabIndex:0,"aria-label":"Stop fighting fires",children:[e.jsxs(js,{children:[e.jsx("div",{className:"radar-sweep"}),e.jsxs("svg",{className:"radar-grid",viewBox:"0 0 160 160","aria-hidden":"true",children:[e.jsx("circle",{className:"grid-circle",cx:"80",cy:"80",r:"70"}),e.jsx("circle",{className:"grid-circle",cx:"80",cy:"80",r:"48"}),e.jsx("circle",{className:"grid-circle",cx:"80",cy:"80",r:"26"}),e.jsx("line",{className:"grid-axis",x1:"80",y1:"8",x2:"80",y2:"152"}),e.jsx("line",{className:"grid-axis",x1:"8",y1:"80",x2:"152",y2:"80"}),e.jsx("circle",{cx:"80",cy:"80",r:"2.5",fill:ce})]}),e.jsx("div",{className:"radar-node n1"}),e.jsx("div",{className:"radar-node n2"}),e.jsx("div",{className:"radar-node n3"}),e.jsx("div",{className:"radar-node n4"})]}),e.jsxs(wt,{children:[e.jsx("p",{className:"label",children:"Stop fighting fires"}),e.jsx("p",{className:"desc",children:"Run the day, don’t rescue it. Catch the slipping run, the missed drop, the driver gone quiet — before any of it catches you."})]})]}),e.jsxs(te,{role:"group",tabIndex:0,"aria-label":"Leaner costs",children:[e.jsx(ws,{children:e.jsxs("svg",{viewBox:"0 0 160 160","aria-hidden":"true",children:[e.jsx("line",{className:"axis",x1:"24",y1:"128",x2:"142",y2:"128"}),e.jsx("rect",{className:"bar b1",x:"32",y:"44",width:"18",height:"84",rx:"3"}),e.jsx("rect",{className:"bar b2",x:"60",y:"64",width:"18",height:"64",rx:"3"}),e.jsx("rect",{className:"bar b3",x:"88",y:"82",width:"18",height:"46",rx:"3"}),e.jsx("rect",{className:"bar b4",x:"116",y:"98",width:"18",height:"30",rx:"3"}),e.jsx("path",{className:"trend",d:"M 30 26 L 58 46 L 86 64 L 128 82"}),e.jsx("path",{className:"trend-head",d:"M 115 85 L 129 82.5 L 123 70"})]})}),e.jsxs(wt,{children:[e.jsx("p",{className:"label",children:"Leaner costs"}),e.jsx("p",{className:"desc",children:"Every run, tuned to cost less. Shorter routes and smarter allocation add up — across a day, a week, a fleet."})]})]}),e.jsxs(te,{role:"group",tabIndex:0,"aria-label":"Customers who come back",children:[e.jsx(ks,{children:e.jsxs("svg",{viewBox:"0 0 160 160","aria-hidden":"true",children:[e.jsxs("g",{className:"orbit",children:[e.jsx("path",{className:"loop",d:"M 80 22 A 58 58 0 1 1 29.8 51"}),e.jsx("path",{className:"loop-head",d:"M 18.9 56.1 L 29.8 51 L 30.9 63"})]}),e.jsx("path",{className:"house",d:"M 56 102 V 77 L 80 57 L 104 77 V 102 Z"}),e.jsx("path",{className:"check",d:"M 68 83 L 77 92 L 93 74"})]})}),e.jsxs(wt,{children:[e.jsx("p",{className:"label",children:"Customers who come back"}),e.jsx("p",{className:"desc",children:"Delivery they can count on. On-time drops, live tracking, proof at the door — the reliability that turns a one-off into a regular."})]})]}),e.jsxs(te,{role:"group",tabIndex:0,"aria-label":"Time back in your week",children:[e.jsx(Ss,{children:e.jsxs("svg",{viewBox:"0 0 160 160","aria-hidden":"true",children:[e.jsx("circle",{className:"face",cx:"80",cy:"80",r:"56"}),e.jsx("line",{className:"tick",x1:"80",y1:"30",x2:"80",y2:"36"}),e.jsx("line",{className:"tick",x1:"130",y1:"80",x2:"124",y2:"80"}),e.jsx("line",{className:"tick",x1:"80",y1:"130",x2:"80",y2:"124"}),e.jsx("line",{className:"tick",x1:"30",y1:"80",x2:"36",y2:"80"}),e.jsx("path",{className:"saved",d:"M 80 24 A 56 56 0 0 1 128.5 108"}),e.jsx("line",{className:"hand",x1:"80",y1:"80",x2:"80",y2:"40"}),e.jsx("line",{className:"hand hand-moving",x1:"80",y1:"80",x2:"80",y2:"46"}),e.jsx("circle",{className:"pin",cx:"80",cy:"80",r:"4"})]})}),e.jsxs(wt,{children:[e.jsx("p",{className:"label",children:"Time back in your week"}),e.jsx("p",{className:"desc",children:"Hours you’d have spent planning, returned. The engine handles the heavy lifting, so you run the business instead of the whiteboard."})]})]})]})]})}),e.jsx(Ws,{}),e.jsx(gs,{id:"activity","aria-labelledby":"activity-title",children:e.jsxs(Me,{children:[e.jsx(lt,{children:"On the road · Illustrative figures"}),e.jsx(kt,{id:"activity-title",children:"One fleet, before and after."}),e.jsx(_i,{})]})}),e.jsxs(Bs,{children:[e.jsx(Us,{"data-page-video":!0,src:jt.cta,loop:!0,muted:!0,playsInline:!0,preload:"none",poster:jt.ctaPoster}),e.jsxs(_s,{children:[e.jsx("h2",{children:"Your smartest runs start here."}),e.jsx("p",{children:"Set the outcome — early access is open now."}),e.jsx(Br,{style:{justifyContent:"center",marginBottom:0},children:e.jsx(Ur,{to:"/contact",children:"Get early access"})})]})]}),e.jsx(or,{}),e.jsx(lr,{})]})},it=i.header`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 22px;

  h2 {
    margin-bottom: 10px;
    font-size: 40px;
    line-height: 1.05;
  }

  p {
    max-width: 68ch;
  }

  @media (max-width: 720px) {
    align-items: stretch;
    flex-direction: column;

    h2 {
      font-size: 32px;
    }
  }
`,ut=i.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  flex-wrap: wrap;
`,M=i.section`
  border-radius: var(--v29-radius-container);
  border: 1px solid var(--v29-line-soft);
  background: var(--v29-card);
  box-shadow: var(--v29-card-shadow);
  overflow: hidden;
`,B=i.div`
  padding: 22px 24px;

  @media (max-width: 720px) {
    padding: 20px;
  }
`,Ks=i.div`
  display: flex;
  align-items: flex-end;
  gap: 14px;
  flex-wrap: wrap;
  padding: 18px;
  border-bottom: 1px solid var(--v29-line-soft);
  background: var(--v29-raised);
`,V=i.label`
  display: grid;
  gap: 6px;
  min-width: 180px;
  font-family: ${j};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--v29-muted);
`,je=i.span.attrs({"aria-hidden":!0})`
  color: var(--v29-danger);
  margin-left: 2px;
`,ee=i.input`
  width: 100%;
  min-height: 42px;
  padding: 10px 12px;
  border-radius: var(--v29-radius-field);
  border: 1px solid var(--v29-line-soft);
  background: var(--v29-page);
  color: var(--v29-text);
  font-family: ${j};
  font-size: 14px;
  letter-spacing: 0;

  &:focus {
    outline: none;
    border-color: var(--v29-primary);
    box-shadow: 0 0 0 3px
      color-mix(in srgb, var(--v29-primary) 18%, transparent);
  }
`,ti=i.select`
  appearance: none;
  min-height: 42px;
  padding: 10px 40px 10px 12px;
  border-radius: var(--v29-radius-button);
  border: 1px solid var(--v29-line-soft);
  background: var(--v29-page) var(--v29-select-caret) no-repeat right 12px
    center / 16px 16px;
  color: var(--v29-text);
  font-family: ${j};
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: var(--v29-primary);
    box-shadow: 0 0 0 3px
      color-mix(in srgb, var(--v29-primary) 18%, transparent);
  }
`,Vs=i.textarea`
  width: 100%;
  min-height: 96px;
  padding: 12px;
  border-radius: var(--v29-radius-field);
  border: 1px solid var(--v29-line-soft);
  background: var(--v29-page);
  color: var(--v29-text);
  font-family: ${j};
  font-size: 14px;
  line-height: 1.5;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: var(--v29-primary);
    box-shadow: 0 0 0 3px
      color-mix(in srgb, var(--v29-primary) 18%, transparent);
  }
`,De=i.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 42px;
  padding: 10px 18px;
  border: none;
  border-radius: var(--v29-radius-button);
  background: var(--v29-primary);
  color: var(--v29-on-primary);
  font-family: ${me};
  font-style: italic;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.2s ease;

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover:not(:disabled) {
    background: var(--v29-primary-hover);
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid var(--v29-primary);
    outline-offset: 2px;
  }

  &:disabled {
    background: var(--v29-line-soft);
    color: var(--v29-muted);
    cursor: not-allowed;
  }
`,U=i.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 42px;
  padding: 10px 16px;
  border-radius: var(--v29-radius-button);
  border: 1px solid var(--v29-line-soft);
  background: transparent;
  color: var(--v29-text);
  font-family: ${j};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: border-color 0.2s ease, background 0.2s ease;

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover:not(:disabled) {
    border-color: var(--v29-primary);
    background: color-mix(in srgb, var(--v29-primary) 8%, transparent);
  }

  &:focus-visible {
    outline: 2px solid var(--v29-primary);
    outline-offset: 2px;
  }

  &:disabled {
    color: var(--v29-muted);
    cursor: not-allowed;
  }
`,ct=i(U)`
  border-color: var(--v29-danger);
  color: var(--v29-danger);

  &:hover:not(:disabled) {
    border-color: var(--v29-danger);
    background: var(--v29-danger-bg);
  }

  &:focus-visible {
    outline-color: var(--v29-danger);
  }
`,Ys=i.label`
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 40px;
  padding: 4px 6px;
  border-radius: 7px;
  font-family: ${j};
  font-size: 14px;
  color: var(--v29-text);
  cursor: pointer;

  &:hover {
    background: color-mix(in srgb, var(--v29-primary) 6%, transparent);
  }

  input {
    width: 16px;
    height: 16px;
    accent-color: var(--v29-primary);
    cursor: pointer;
  }

  input:focus-visible {
    outline: 2px solid var(--v29-primary);
    outline-offset: 2px;
  }
`,Y=i.h3`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 14px;
  font-family: ${j};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--v29-muted);

  svg {
    width: 16px;
    height: 16px;
  }
`,de=i.div`
  padding: 54px 24px;
  text-align: center;
  font-family: ${j};
  color: var(--v29-muted);
  font-size: 15px;
`,Qs=i.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`,Gr=i.div`
  display: grid;
  gap: 6px;
  font-family: ${j};

  strong {
    color: var(--v29-text);
    font-size: 15px;
  }

  span {
    color: var(--v29-muted);
    font-size: 14px;
    line-height: 1.5;
  }
`,Zs=i.table`
  width: 100%;
  min-width: 680px;
  border-collapse: collapse;
  font-family: ${j};
  font-size: 14px;

  th,
  td {
    padding: 12px 14px;
    border-bottom: 1px solid var(--v29-line-soft);
    text-align: left;
  }

  th {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--v29-muted);
    background: var(--v29-raised);
  }

  td {
    color: var(--v29-text);
  }
`,Lt=i.dl`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 16px;
  margin: 0;

  div {
    display: grid;
    gap: 5px;
  }

  dt {
    font-family: ${j};
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--v29-muted);
  }

  dd {
    margin: 0;
    font-family: ${j};
    font-size: 14px;
    color: var(--v29-text);
  }
`,$t=i.p`
  margin: 0;
  padding: 14px 16px;
  border-radius: var(--v29-radius-container);
  background: color-mix(in srgb, var(--v29-primary) 9%, transparent);
  color: var(--v29-text);
  font-family: ${j};
  font-size: 14px;
  line-height: 1.55;
`,Xs=Gi`
  0%, 100% { opacity: 0.55; }
  50% { opacity: 1; }
`,ue=i.div`
  height: 52px;
  margin: 10px 18px;
  border-radius: var(--v29-radius-field);
  background: var(--v29-line-soft);
  animation: ${Xs} 1.4s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,le=i.p`
  margin: 0;
  font-family: ${j};
  font-size: 14px;
  line-height: 1.55;
  color: ${t=>t.$danger?"var(--v29-danger)":"var(--v29-muted)"};
`,ri=[{id:"operations",labelKey:"nav.groups.operations",items:[{id:"orders",labelKey:"nav.orders",path:"/portal/orders",permission:q.LIST},{id:"create-order",labelKey:"nav.createOrder",path:"/portal/orders/new",permission:q.ADD},{id:"import-orders",labelKey:"nav.importOrders",path:"/portal/orders/import",permission:q.IMPORT}]},{id:"finance",labelKey:"nav.groups.finance",items:[{id:"billing",labelKey:"nav.billing",path:"/portal/billing",permission:null}]},{id:"admin",labelKey:"nav.groups.admin",items:[{id:"users-roles",labelKey:"nav.usersRoles",path:"/portal/admin/users",permission:L.USER_LIST}]}],Js=i.nav`
  position: sticky;
  top: 92px;
  align-self: start;
  display: grid;
  gap: 18px;
  padding: 16px 12px 18px 0;
  border-right: 1px solid var(--v29-line-soft);

  @media (max-width: 980px) {
    position: static;
    display: flex;
    align-items: flex-start;
    gap: 20px;
    padding: 12px 0;
    border-right: none;
    border-bottom: 1px solid var(--v29-line-soft);
    overflow-x: auto;
  }

  @media (max-width: 640px) {
    flex-wrap: wrap;
    gap: 6px;
    padding: 8px 0;
    overflow-x: visible;
  }
`,eo=i.div`
  padding: 0 8px 2px;
  font-family: ${j};
  font-size: 13px;
  font-weight: 700;
  color: var(--v29-text);

  @media (max-width: 980px) {
    display: none;
  }
`,to=i.div`
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
`,ro=i.span`
  padding: 0 8px;
  font-family: ${j};
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--v29-muted);

  @media (max-width: 640px) {
    display: none;
  }
`,no=i.div`
  display: grid;
  gap: 2px;

  @media (max-width: 980px) {
    display: flex;
    gap: 4px;
  }

  @media (max-width: 640px) {
    display: contents;
  }
`,io=i(qi)`
  display: inline-flex;
  align-items: center;
  min-height: 40px;
  padding: 9px 10px;
  border-radius: 7px;
  border: 1px solid transparent;
  font-family: ${j};
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0;
  text-transform: none;
  text-decoration: none;
  color: var(--v29-muted);
  white-space: nowrap;
  transition: color 0.15s ease, border-color 0.15s ease,
    background 0.15s ease;

  &:hover {
    color: var(--v29-text);
    background: var(--v29-raised);
  }
  &:focus-visible {
    outline: 2px solid var(--v29-primary);
    outline-offset: 2px;
  }
  &.active,
  &[data-active='true'] {
    color: var(--v29-primary);
    border-color: color-mix(in srgb, var(--v29-primary) 18%, transparent);
    background: color-mix(in srgb, var(--v29-primary) 10%, transparent);
  }
`,ao=()=>{const{t}=Z("portal"),{pathname:r}=ae(),n=tt(d=>d.permissionList),a=r==="/portal/orders"||r.startsWith("/portal/orders/")&&r!=="/portal/orders/new"&&r!=="/portal/orders/import",h=ri.map(d=>({...d,items:d.items.filter(g=>g.permission===null||n.includes(g.permission))})).filter(d=>d.items.length>0);return h.length===0?null:e.jsxs(Js,{"aria-label":t("nav.ariaLabel"),children:[e.jsx(eo,{children:t("nav.platform")}),h.map(d=>e.jsxs(to,{children:[e.jsx(ro,{children:t(d.labelKey)}),e.jsx(no,{children:d.items.map(g=>e.jsx(io,{to:g.path,end:g.path==="/portal/orders","data-active":g.path==="/portal/orders"&&a?"true":void 0,children:t(g.labelKey)},g.id))})]},d.id))]})},so=i.main`
  flex: 1;
  width: 100%;
  padding: ${t=>t.$authenticated?"72px 0 0":"120px clamp(20px, 4vw, 48px) 96px"};

  @media (max-width: 720px) {
    padding: ${t=>t.$authenticated?"72px 0 0":"96px 20px 64px"};
  }
`,oo=i.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 28px clamp(20px, 3vw, 44px) 56px;

  @media (max-width: 980px) {
    padding: 18px 20px 48px;
  }
`,lo=i.div`
  display: grid;
  grid-template-columns: 236px minmax(0, 1fr);
  gap: 28px;
  border-radius: 12px;
  border: 1px solid var(--v29-line-soft);
  background: var(--v29-card);
  box-shadow: var(--v29-shell-shadow);
  padding: 24px clamp(20px, 2.4vw, 32px) 32px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    gap: 18px;
    padding: 16px 18px 24px;
  }
`,co=i.div`
  min-width: 0;
`,Be=({children:t,publicChrome:r=!1})=>{const n=dr(),{mode:a,toggleTheme:h}=ar(),d=n&&!r;return e.jsxs(e.Fragment,{children:[e.jsx(sr,{}),e.jsxs(Tn,{children:[e.jsx(Ln,{theme:a,onToggleTheme:h}),e.jsx(so,{$authenticated:d,children:d?e.jsx(oo,{children:e.jsxs(lo,{children:[e.jsx(ao,{}),e.jsx(co,{children:t})]})}):t}),!d&&e.jsx(or,{}),e.jsx(lr,{})]})]})},qr={senderName:"",senderMobile:"",senderAddress:"",senderPostcode:"",recipientName:"",recipientMobile:"",recipientAddress:"",recipientPostcode:"",packages:"1",weight:"",reference:"",notes:""},Wr=i.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`,Wt=i.div`
  grid-column: 1 / -1;
`,po=i.form`
  display: grid;
  gap: 18px;
`,ho=t=>{const r=Number(t.packages);return!!(t.senderName.trim()&&t.senderAddress.trim()&&t.recipientName.trim()&&t.recipientAddress.trim()&&Number.isFinite(r)&&r>0)},uo=()=>{const{t}=Z(),[r,n]=b.useState(qr),[a,h]=b.useState("idle"),d=s=>l=>{n(o=>({...o,[s]:l.target.value})),h("idle")},g=s=>{s.preventDefault(),h(ho(r)?"ready":"error")},x=()=>{n(qr),h("idle")};return e.jsxs(Be,{children:[e.jsx(it,{children:e.jsxs("div",{children:[e.jsx(Re,{children:t("portal:common.eyebrow")}),e.jsx(Fe,{children:t("portal:createOrder.title")}),e.jsx(Ce,{children:t("portal:createOrder.lead")})]})}),e.jsxs(po,{onSubmit:g,children:[e.jsx(M,{children:e.jsx(B,{children:e.jsx($t,{children:t("portal:createOrder.backendNotice")})})}),e.jsx(M,{children:e.jsxs(B,{children:[e.jsx(Y,{children:t("portal:createOrder.sectionContact")}),e.jsxs(Wr,{children:[e.jsxs(V,{children:[t("portal:createOrder.senderName"),e.jsx(je,{children:"*"}),e.jsx(ee,{"aria-required":"true",value:r.senderName,onChange:d("senderName")})]}),e.jsxs(V,{children:[t("portal:createOrder.senderMobile"),e.jsx(ee,{inputMode:"tel",value:r.senderMobile,onChange:d("senderMobile")})]}),e.jsx(Wt,{children:e.jsxs(V,{children:[t("portal:createOrder.senderAddress"),e.jsx(je,{children:"*"}),e.jsx(ee,{"aria-required":"true",value:r.senderAddress,onChange:d("senderAddress")})]})}),e.jsxs(V,{children:[t("portal:createOrder.senderPostcode"),e.jsx(ee,{value:r.senderPostcode,onChange:d("senderPostcode")})]}),e.jsxs(V,{children:[t("portal:createOrder.recipientName"),e.jsx(je,{children:"*"}),e.jsx(ee,{"aria-required":"true",value:r.recipientName,onChange:d("recipientName")})]}),e.jsxs(V,{children:[t("portal:createOrder.recipientMobile"),e.jsx(ee,{inputMode:"tel",value:r.recipientMobile,onChange:d("recipientMobile")})]}),e.jsx(Wt,{children:e.jsxs(V,{children:[t("portal:createOrder.recipientAddress"),e.jsx(je,{children:"*"}),e.jsx(ee,{"aria-required":"true",value:r.recipientAddress,onChange:d("recipientAddress")})]})}),e.jsxs(V,{children:[t("portal:createOrder.recipientPostcode"),e.jsx(ee,{value:r.recipientPostcode,onChange:d("recipientPostcode")})]})]})]})}),e.jsx(M,{children:e.jsxs(B,{children:[e.jsx(Y,{children:t("portal:createOrder.sectionPackage")}),e.jsxs(Wr,{children:[e.jsxs(V,{children:[t("portal:createOrder.packages"),e.jsx(je,{children:"*"}),e.jsx(ee,{"aria-required":"true",inputMode:"numeric",min:"1",type:"number",value:r.packages,onChange:d("packages")})]}),e.jsxs(V,{children:[t("portal:createOrder.weight"),e.jsx(ee,{inputMode:"decimal",min:"0",step:"0.1",type:"number",value:r.weight,onChange:d("weight")})]}),e.jsxs(V,{children:[t("portal:createOrder.reference"),e.jsx(ee,{value:r.reference,onChange:d("reference")})]}),e.jsx(Wt,{children:e.jsxs(V,{children:[t("portal:createOrder.notes"),e.jsx(Vs,{value:r.notes,onChange:d("notes")})]})})]})]})}),e.jsxs(ut,{children:[e.jsxs(U,{type:"button",onClick:x,children:[e.jsx(Wi,{"aria-hidden":"true"}),t("common:clearForm")]}),e.jsxs(De,{type:"submit",children:[e.jsx(ja,{"aria-hidden":"true"}),t("portal:createOrder.prepareDraft")]})]}),a==="error"&&e.jsx(le,{$danger:!0,role:"alert",children:t("portal:createOrder.required")}),a==="ready"&&e.jsx(M,{children:e.jsxs(B,{children:[e.jsx(Y,{children:t("portal:createOrder.draftReady")}),e.jsxs(Lt,{children:[e.jsxs("div",{children:[e.jsx("dt",{children:t("portal:createOrder.senderName")}),e.jsx("dd",{children:r.senderName})]}),e.jsxs("div",{children:[e.jsx("dt",{children:t("portal:createOrder.recipientName")}),e.jsx("dd",{children:r.recipientName})]}),e.jsxs("div",{children:[e.jsx("dt",{children:t("portal:createOrder.packages")}),e.jsx("dd",{children:r.packages})]}),e.jsxs("div",{children:[e.jsx("dt",{children:t("portal:createOrder.reference")}),e.jsx("dd",{children:r.reference.trim()||"-"})]})]})]})})]})]})},pe={VERIFY_TOKEN:"/api/company/verifyToken",SALES_ORDER_LIST:"/api/company/salesOrderList",SALES_ORDER:"/api/company/salesOrder/:salesOrderId",IMPORTS:"/api/company/imports",IMPORTS_TEMPLATE:"/api/company/imports/template",IMPORT_JOB:"/api/company/imports/:jobId",IMPORT_JOB_ROWS:"/api/company/imports/:jobId/rows",RBAC_ROLES:"/api/company/rbac/roles",RBAC_ROLE:"/api/company/rbac/roles/:roleId",ASSISTANT:"/api/company/assistant"};function gt(t,r){return Object.entries(r).reduce((n,[a,h])=>n.replace(`:${a}`,encodeURIComponent(h)),t)}const mo=t=>{const r=new FormData;return r.append("file",t),Q.post(pe.IMPORTS,r)},xo=t=>Q.get(gt(pe.IMPORT_JOB,{jobId:t})),go=(t,r="all")=>Q.get(gt(pe.IMPORT_JOB_ROWS,{jobId:t}),{params:{status:r}}),fo=()=>Q.get(pe.IMPORTS_TEMPLATE),He=i.div`
  overflow-x: auto;
`,Ke=i.table`
  width: 100%;
  min-width: 720px;
  border-collapse: collapse;
  font-family: ${j};
  font-size: 14px;

  th,
  td {
    padding: 13px 16px;
    border-bottom: 1px solid var(--v29-line-soft);
    text-align: left;
    vertical-align: top;
  }

  th {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--v29-muted);
    background: var(--v29-raised);
    white-space: nowrap;
  }

  td {
    color: var(--v29-text);
  }

  tbody tr:last-child td {
    border-bottom: none;
  }
`,Hr=i.div`
  display: grid;
  gap: 18px;
`,vo=i.div`
  display: grid;
  gap: 14px;
`,yo=i.div`
  position: relative;
  display: grid;
  gap: 8px;
`,bo=i.label`
  font-family: ${j};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--v29-muted);
  cursor: pointer;
`,jo=i.input`
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
`,wo=i.div`
  display: grid;
  gap: 10px;
  justify-items: start;
`,ko=i.div`
  display: flex;
  align-items: center;
  gap: 10px;
  box-sizing: border-box;
  min-height: 42px;
  max-width: 100%;
  padding: 10px 12px;
  border-radius: var(--v29-radius-field);
  border: 1px solid var(--v29-line-soft);
  background: var(--v29-page);
  font-family: ${j};
  font-size: 14px;
  color: var(--v29-text);

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  svg {
    flex-shrink: 0;
    width: 18px;
    height: 18px;
    color: var(--v29-muted);
  }
`,So=i.p`
  margin: 0;
  font-family: ${j};
  font-size: 14px;
  line-height: 1.55;
  color: var(--v29-danger);
`,Eo=i.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
`,Io=i.div`
  display: grid;
  gap: 4px;
  font-family: ${j};

  strong {
    font-size: 15px;
    color: var(--v29-text);
  }

  span {
    font-size: 13px;
    color: var(--v29-muted);
  }
`,$o=i.div`
  display: inline-flex;
  gap: 4px;
  padding: 4px;
  margin-bottom: 14px;
  border-radius: 11px;
  background: var(--v29-raised);
  border: 1px solid var(--v29-line-soft);
`,Ht=i.button`
  appearance: none;
  cursor: pointer;
  border: none;
  border-radius: 7px;
  padding: 7px 12px;
  font-family: ${j};
  font-size: 13px;
  font-weight: 600;
  color: ${t=>t.$active?"var(--v29-primary)":"var(--v29-muted)"};
  background: ${t=>t.$active?"var(--v29-card)":"transparent"};
  box-shadow: ${t=>t.$active?"var(--v29-card-shadow)":"none"};

  &:focus-visible {
    outline: 2px solid var(--v29-primary);
    outline-offset: 2px;
  }
`,Ao=i.span`
  display: inline-block;
  padding: 3px 8px;
  border: none;
  border-radius: var(--v29-radius-tag);
  font-family: ${j};
  font-size: 12px;
  font-weight: 600;
  color: ${t=>t.$invalid?"var(--v29-danger)":"var(--v29-primary)"};
  background: ${t=>t.$invalid?"var(--v29-danger-bg)":"color-mix(in srgb, var(--v29-primary) 10%, transparent)"};
`,Ro=i.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 180px;
  max-width: 320px;
  color: var(--v29-muted);
  font-size: 13px;
  line-height: 1.4;

  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span:first-child {
    color: var(--v29-text);
  }
`,Co=i.button`
  border: none;
  background: transparent;
  min-height: 36px;
  padding: 0 8px;
  border-radius: var(--v29-radius-button);
  color: var(--v29-muted);
  font-family: ${j};
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    color: var(--v29-text);
  }

  &:focus-visible {
    outline: 2px solid var(--v29-primary);
    outline-offset: 2px;
  }
`,Oo=t=>typeof t=="object"&&t!==null&&"code"in t&&"message"in t,Kr="import-orders-csv-file",Vr="import-orders-choose-file",Yr="import-orders-csv-label",Po=()=>{const{t}=Z(),r=b.useRef(null),n=b.useRef(!1),[a,h]=b.useState(""),[d,g]=b.useState({kind:"idle"}),[x,s]=b.useState(""),l=m=>{if(Oo(m)){const w=m.data&&typeof m.data=="object"?m.data.missing:void 0;if(m.message==="missing columns")return t("portal:importOrders.missingColumns",{columns:(w??[]).join(", ")});if(m.message==="no rows")return t("portal:importOrders.noRows");if(m.code===130)return t("portal:importOrders.fileFormat")}return t("portal:importOrders.uploadFailed")},o=async(m,w)=>{const[I,E]=await Promise.all([xo(m),go(m,w)]);g({kind:"ready",summary:I.data,rows:E.data.rows,filter:w})},c=async m=>{var I;const w=(I=m.target.files)==null?void 0:I[0];if(!w){m.target.value="";return}if(n.current){m.target.value="";return}n.current=!0,s(""),h(w.name),g({kind:"uploading"});try{const E=await mo(w);await o(E.data.jobId,"all")}catch(E){g({kind:"error",message:l(E)})}finally{n.current=!1,m.target.value=""}},p=async m=>{if(!(d.kind!=="ready"||d.filter===m))try{await o(d.summary.jobId,m)}catch{g({kind:"error",message:t("portal:importOrders.jobMissing")})}},y=async()=>{try{const m=await fo(),w=new Blob([m.data.csv],{type:"text/csv;charset=utf-8"}),I=URL.createObjectURL(w),E=document.createElement("a");E.href=I,E.download=m.data.filename,E.click(),URL.revokeObjectURL(I),s("")}catch{const m=t("portal:importOrders.templateFailed");if(d.kind==="ready"){s(m);return}g({kind:"error",message:m})}},v=()=>{h(""),s(""),g({kind:"idle"})};return e.jsxs(Be,{children:[e.jsx(it,{children:e.jsxs("div",{children:[e.jsx(Re,{children:t("portal:common.eyebrow")}),e.jsx(Fe,{children:t("portal:importOrders.title")}),e.jsx(Ce,{children:t("portal:importOrders.lead")})]})}),e.jsxs(Hr,{children:[e.jsx(M,{children:e.jsx(B,{children:e.jsx($t,{children:t("portal:importOrders.backendNotice")})})}),e.jsx(M,{children:e.jsx(B,{children:e.jsxs(vo,{children:[e.jsx(Y,{children:t("portal:importOrders.columnsTitle")}),e.jsx($t,{children:t("portal:importOrders.columnsBody")}),e.jsxs(yo,{children:[e.jsx(bo,{id:Yr,htmlFor:Kr,children:t("portal:importOrders.uploadLabel")}),e.jsx(jo,{id:Kr,ref:r,accept:".csv,text/csv",type:"file",tabIndex:-1,"aria-labelledby":`${Yr} ${Vr}`,onChange:c}),e.jsxs(wo,{children:[e.jsx(De,{id:Vr,type:"button",onClick:()=>{var m;return(m=r.current)==null?void 0:m.click()},children:t("portal:importOrders.chooseFile")}),a?e.jsxs(ko,{"aria-live":"polite",children:[e.jsx(Ea,{"aria-hidden":"true"}),e.jsx("span",{title:a,children:a})]}):null,e.jsx(U,{type:"button",onClick:y,children:t("portal:importOrders.downloadTemplate")})]})]}),(d.kind==="error"||x)&&e.jsx(So,{role:"alert",children:d.kind==="error"?d.message:x})]})})}),e.jsx(M,{children:e.jsxs(B,{children:[e.jsx(Y,{children:t("portal:importOrders.previewTitle")}),d.kind==="uploading"&&e.jsxs("div",{"aria-busy":"true","aria-label":t("common:loading"),children:[e.jsx(ue,{}),e.jsx(ue,{})]}),(d.kind==="idle"||d.kind==="error")&&e.jsx(de,{children:t("portal:importOrders.previewEmpty")}),d.kind==="ready"&&e.jsxs(Hr,{children:[e.jsxs(Eo,{children:[e.jsxs(Io,{children:[e.jsx("strong",{children:t("portal:importOrders.sessionTitle",{id:d.summary.jobId})}),e.jsxs("span",{children:[t("portal:importOrders.sessionFile",{name:d.summary.fileName})," · ",t("portal:importOrders.sessionCounts",{valid:d.summary.validRows,invalid:d.summary.invalidRows,total:d.summary.totalRows})]})]}),e.jsx(Co,{type:"button",onClick:v,children:t("portal:importOrders.clearSession")})]}),e.jsxs($o,{"aria-label":t("portal:importOrders.previewTitle"),children:[e.jsx(Ht,{type:"button","aria-pressed":d.filter==="all",$active:d.filter==="all",onClick:()=>{p("all")},children:t("portal:importOrders.filterAll")}),d.summary.validRows>0&&e.jsx(Ht,{type:"button","aria-pressed":d.filter==="valid",$active:d.filter==="valid",onClick:()=>{p("valid")},children:t("portal:importOrders.filterValid")}),d.summary.invalidRows>0&&e.jsx(Ht,{type:"button","aria-pressed":d.filter==="invalid",$active:d.filter==="invalid",onClick:()=>{p("invalid")},children:t("portal:importOrders.filterInvalid")})]}),e.jsx(He,{children:e.jsxs(Ke,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:t("portal:orders.colStatus")}),e.jsx("th",{scope:"col",children:t("portal:importOrders.colInvoice")}),e.jsx("th",{scope:"col",children:t("portal:importOrders.colRoute")}),e.jsx("th",{scope:"col",children:t("portal:importOrders.colPickup")}),e.jsx("th",{scope:"col",children:t("portal:importOrders.colDelivery")}),e.jsx("th",{scope:"col",children:t("portal:importOrders.colQty")}),e.jsx("th",{scope:"col",children:t("portal:importOrders.colWeight")}),e.jsx("th",{scope:"col",children:t("portal:importOrders.colReason")})]})}),e.jsx("tbody",{children:d.rows.map(m=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(Ao,{$invalid:m.status==="invalid",children:m.status==="invalid"?t("portal:importOrders.rowInvalid"):t("portal:importOrders.rowValid")})}),e.jsx("td",{children:m.invoiceNumber||"—"}),e.jsx("td",{children:e.jsxs(Ro,{title:`${m.senderAddress} → ${m.recipientAddress}`,"aria-label":`${m.senderName} ${t("portal:orders.routeTo")} ${m.recipientName}`,children:[e.jsxs("span",{"aria-hidden":"true",children:[m.senderName," · ",m.senderAddress]}),e.jsxs("span",{"aria-hidden":"true",children:["→ ",m.recipientName," · ",m.recipientAddress]})]})}),e.jsx("td",{children:m.pickupDate||"—"}),e.jsx("td",{children:m.deliveryDate||"—"}),e.jsx("td",{children:m.qty||"—"}),e.jsx("td",{children:m.weight||"—"}),e.jsx("td",{children:m.rejectReasons.length?m.rejectReasons.join(", "):"—"})]},m.rowId))})]})})]})]})})]})]})};function To(t,r){let n={...t};for(let a of r)delete n[a];return n}var Lo=/:([a-zA-Z_][a-zA-Z0-9_]*)/g;function No(t){let r=t.url,n=t.params;return n&&(r=r.replace(Lo,(a,h)=>h in n?`${n[h]}`:a)),r}function Qr(t,r,n){return t.find(a=>a.method===r&&a.path===n)}function Mo(t){let r=new FormData;for(let n in t)r.append(n,t[n]);return{data:r}}var At=class extends Error{constructor(t,r,n,a){super(t),this.config=r,this.data=n,this.cause=a}},Do={name:"form-data",request:async(t,r)=>{if(typeof r.data!="object"||Array.isArray(r.data))throw new At("Zodios: multipart/form-data body must be an object",r);let n=Mo(r.data);return{...r,data:n.data,headers:{...r.headers,...n.headers}}}};function Fo(){return Do}var zo={name:"form-url",request:async(t,r)=>{if(typeof r.data!="object"||Array.isArray(r.data))throw new At("Zodios: application/x-www-form-urlencoded body must be an object",r);return{...r,data:new URLSearchParams(r.data).toString(),headers:{...r.headers,"Content-Type":"application/x-www-form-urlencoded"}}}};function Bo(){return zo}function Zr(t,r){return{request:async(n,a)=>({...a,headers:{...a.headers,[t]:r}})}}function Xr(t){return[!0,"response","all"].includes(t)}function Jr(t){return[!0,"request","all"].includes(t)}function Uo({validate:t,transform:r,sendDefaults:n}){return{name:"zod-validation",request:Jr(t)?async(a,h)=>{let d=Qr(a,h.method,h.url);if(!d)throw new Error(`No endpoint found for ${h.method} ${h.url}`);let{parameters:g}=d;if(!g)return h;let x={...h,queries:{...h.queries},headers:{...h.headers},params:{...h.params}},s={Query:c=>{var p;return(p=x.queries)==null?void 0:p[c]},Body:c=>x.data,Header:c=>{var p;return(p=x.headers)==null?void 0:p[c]},Path:c=>{var p;return(p=x.params)==null?void 0:p[c]}},l={Query:(c,p)=>x.queries[c]=p,Body:(c,p)=>x.data=p,Header:(c,p)=>x.headers[c]=p,Path:(c,p)=>x.params[c]=p},o=Jr(r);for(let c of g){let{name:p,schema:y,type:v}=c,m=s[v](p);if(n||m!==void 0){let w=await y.safeParseAsync(m);if(!w.success)throw new At(`Zodios: Invalid ${v} parameter '${p}'`,h,m,w.error);o&&l[v](p,w.data)}}return x}:void 0,response:Xr(t)?async(a,h,d)=>{var g,x,s,l;let o=Qr(a,h.method,h.url);if(!o)throw new Error(`No endpoint found for ${h.method} ${h.url}`);if((x=(g=d.headers)==null?void 0:g["content-type"])!=null&&x.includes("application/json")||(l=(s=d.headers)==null?void 0:s["content-type"])!=null&&l.includes("application/vnd.api+json")){let c=await o.response.safeParseAsync(d.data);if(!c.success)throw new At(`Zodios: Invalid response from endpoint '${o.method} ${o.path}'
status: ${d.status} ${d.statusText}
cause:
${c.error.message}
received:
${JSON.stringify(d.data,null,2)}`,h,d.data,c.error);Xr(r)&&(d.data=c.data)}return d}:void 0}}var en=class{constructor(t,r){this.plugins=[],this.key=`${t}-${r}`}indexOf(t){return this.plugins.findIndex(r=>(r==null?void 0:r.name)===t)}use(t){if(t.name){let r=this.indexOf(t.name);if(r!==-1)return this.plugins[r]=t,{key:this.key,value:r}}return this.plugins.push(t),{key:this.key,value:this.plugins.length-1}}eject(t){if(typeof t=="string"){let r=this.indexOf(t);if(r===-1)throw new Error(`Plugin with name '${t}' not found`);this.plugins[r]=void 0}else{if(t.key!==this.key)throw new Error(`Plugin with key '${t.key}' is not registered for endpoint '${this.key}'`);this.plugins[t.value]=void 0}}async interceptRequest(t,r){let n=r;for(let a of this.plugins)a!=null&&a.request&&(n=await a.request(t,n));return n}async interceptResponse(t,r,n){let a=n;for(let h=this.plugins.length-1;h>=0;h--){let d=this.plugins[h];d&&(a=a.then(d!=null&&d.response?g=>d.response(t,r,g):void 0,d!=null&&d.error?g=>d.error(t,r,g):void 0))}return a}count(){return this.plugins.reduce((t,r)=>r?t+1:t,0)}};function ni(t){let r=new Set;for(let a of t){let h=`${a.method} ${a.path}`;if(r.has(h))throw new Error(`Zodios: Duplicate path '${h}'`);r.add(h)}let n=new Set;for(let a of t)if(a.alias){if(n.has(a.alias))throw new Error(`Zodios: Duplicate alias '${a.alias}'`);n.add(a.alias)}for(let a of t)if(a.parameters&&a.parameters.filter(h=>h.type==="Body").length>1)throw new Error(`Zodios: Multiple body parameters in endpoint '${a.path}'`)}function _o(t){return ni(t),t}var Go=class{constructor(t,r,n){this.endpointPlugins=new Map;let a;if(!t)throw Array.isArray(r)?new Error("Zodios: missing base url"):new Error("Zodios: missing api description");let h;if(typeof t=="string"&&Array.isArray(r))h=t,this.api=r,a=n||{};else if(Array.isArray(t)&&!Array.isArray(r))this.api=t,a=r||{};else throw new Error("Zodios: api must be an array");ni(this.api),this.options={validate:!0,transform:!0,sendDefaults:!1,...a},this.options.axiosInstance?this.axiosInstance=this.options.axiosInstance:this.axiosInstance=Hi.create({...this.options.axiosConfig}),h&&(this.axiosInstance.defaults.baseURL=h),this.injectAliasEndpoints(),this.initPlugins(),[!0,"all","request","response"].includes(this.options.validate)&&this.use(Uo(this.options))}initPlugins(){this.endpointPlugins.set("any-any",new en("any","any")),this.api.forEach(t=>{let r=new en(t.method,t.path);switch(t.requestFormat){case"binary":r.use(Zr("Content-Type","application/octet-stream"));break;case"form-data":r.use(Fo());break;case"form-url":r.use(Bo());break;case"text":r.use(Zr("Content-Type","text/plain"));break}this.endpointPlugins.set(`${t.method}-${t.path}`,r)})}getAnyEndpointPlugins(){return this.endpointPlugins.get("any-any")}findAliasEndpointPlugins(t){let r=this.api.find(n=>n.alias===t);if(r)return this.endpointPlugins.get(`${r.method}-${r.path}`)}findEnpointPlugins(t,r){return this.endpointPlugins.get(`${t}-${r}`)}get baseURL(){return this.axiosInstance.defaults.baseURL}get axios(){return this.axiosInstance}use(...t){if(typeof t[0]=="object")return this.getAnyEndpointPlugins().use(t[0]);if(typeof t[0]=="string"&&typeof t[1]=="object"){let r=this.findAliasEndpointPlugins(t[0]);if(!r)throw new Error(`Zodios: no alias '${t[0]}' found to register plugin`);return r.use(t[1])}else if(typeof t[0]=="string"&&typeof t[1]=="string"&&typeof t[2]=="object"){let r=this.findEnpointPlugins(t[0],t[1]);if(!r)throw new Error(`Zodios: no endpoint '${t[0]} ${t[1]}' found to register plugin`);return r.use(t[2])}throw new Error("Zodios: invalid plugin registration")}eject(t){var r;if(typeof t=="string"){this.getAnyEndpointPlugins().eject(t);return}(r=this.endpointPlugins.get(t.key))==null||r.eject(t)}injectAliasEndpoints(){this.api.forEach(t=>{t.alias&&(["post","put","patch","delete"].includes(t.method)?this[t.alias]=(r,n)=>this.request({...n,method:t.method,url:t.path,data:r}):this[t.alias]=r=>this.request({...r,method:t.method,url:t.path}))})}async request(t){let r=t,n=this.getAnyEndpointPlugins(),a=this.findEnpointPlugins(r.method,r.url);r=await n.interceptRequest(this.api,r),a&&(r=await a.interceptRequest(this.api,r));let h=this.axiosInstance.request({...To(r,["params","queries"]),url:No(r),params:r.queries});return a&&(h=a.interceptResponse(this.api,r,h)),h=n.interceptResponse(this.api,r,h),(await h).data}async get(t,...[r]){return this.request({...r,method:"get",url:t})}async post(t,r,...[n]){return this.request({...n,method:"post",url:t,data:r})}async put(t,r,...[n]){return this.request({...n,method:"put",url:t,data:r})}async patch(t,r,...[n]){return this.request({...n,method:"patch",url:t,data:r})}async delete(t,r,...[n]){return this.request({...n,method:"delete",url:t,data:r})}},qo=Go;const ii=u.object({name:u.string().optional(),score:u.number().nullish(),roles:u.array(u.number().int()).optional(),roleId:u.number().int().optional(),statusId:u.number().int().optional(),comment:u.string().optional(),token:u.string(),refresh:u.string(),permissionId:u.number().int().optional(),permission:u.array(u.string())}).passthrough(),Wo=u.object({salesOrderId:u.string(),salesOrderStatusId:u.number().int(),pickup:u.string().optional(),delivery:u.string().optional(),createdTime:u.string().optional(),price:u.number().optional(),packages:u.number().int().optional(),pickedup:u.number().int().optional(),timeZone:u.string().optional(),drivers:u.array(u.object({driverId:u.string(),driver:u.string(),chatroomId:u.string()}).partial().passthrough()).nullish(),createdByUid:u.string().optional(),consigneePhone:u.string().optional()}).passthrough(),ai=u.object({total:u.number().int(),page:u.number().int().optional(),salesOrders:u.array(Wo)}).passthrough(),Rt=u.object({name:u.string(),firstName:u.string(),middleName:u.string(),lastName:u.string(),mobile:u.string(),address:u.string(),postcode:u.string(),cityId:u.number().int()}).partial().passthrough(),si=u.object({sid:u.string(),weight:u.number().optional(),height:u.number().optional(),width:u.number().optional(),length:u.number().optional(),pricing:u.number().optional(),salesOrderStatusId:u.number().int().optional()}).passthrough(),Ho=u.object({salesOrderId:u.string(),salesOrderStatusId:u.number().int().optional(),sender:Rt.optional(),recipient:Rt.optional(),createDate:u.string().optional(),pickupDate:u.string().optional(),deliveryDate:u.string().optional(),comment:u.string().optional(),fleetUid:u.string().optional(),driverId:u.string().optional(),driver:u.string().optional(),timeZone:u.string().optional(),chatroomId:u.string().optional(),packages:u.array(si).optional()}).passthrough(),Ct=u.object({roleId:u.number().int(),roleName:u.string(),permissions:u.array(u.string()),memberCount:u.number().int(),isSystem:u.boolean().optional()}).passthrough(),oi=u.object({roles:u.array(Ct)}).passthrough(),tn=u.object({roleName:u.string().min(1),permissions:u.array(u.string()).min(1)}).passthrough();u.object({}).partial().passthrough();const Ot=u.object({uid:u.string(),name:u.string(),email:u.string().optional(),roleId:u.number().int(),roleName:u.string().optional(),statusId:u.number().int().optional()}).passthrough(),li=u.object({total:u.number().int(),users:u.array(Ot)}).passthrough(),Ko=u.object({name:u.string(),email:u.string().optional(),roleId:u.number().int()}).passthrough(),Vo=u.object({uid:u.string(),roleId:u.number().int().optional(),statusId:u.number().int().optional()}).passthrough(),ur=u.object({id:u.number().int(),phone:u.string(),roleId:u.number().int(),roleName:u.string().optional(),invitedAt:u.string(),expiresAt:u.string()}).passthrough(),di=u.object({invites:u.array(ur)}).passthrough(),Yo=u.object({phone:u.string(),roleId:u.number().int()}).passthrough(),Qo=u.object({id:u.number().int(),actor:u.string(),action:u.string(),target:u.string(),when:u.string()}).passthrough(),Zo=u.object({entries:u.array(Qo)}).passthrough(),ye={ApiVerifyTokenResponse:ii,ApiSalesOrderListResponse:ai,ApiSalesOrderDetail:Ho,ApiRole:Ct,ApiRoleListResponse:oi,ApiAssistantUser:Ot,ApiAssistantListResponse:li,ApiInvite:ur,ApiInviteListResponse:di},Xo=_o([{method:"get",path:"/company/assistant",alias:"getAssistantList",requestFormat:"json",response:li},{method:"post",path:"/company/assistant",alias:"postAssistant",requestFormat:"json",parameters:[{name:"body",type:"Body",schema:Ko}],response:Ot},{method:"put",path:"/company/assistant",alias:"putAssistant",requestFormat:"json",parameters:[{name:"body",type:"Body",schema:Vo}],response:Ot},{method:"get",path:"/company/rbac/audit",alias:"getAuditLog",requestFormat:"json",response:Zo},{method:"get",path:"/company/rbac/invites",alias:"getInviteList",requestFormat:"json",response:di},{method:"post",path:"/company/rbac/invites",alias:"postInvite",requestFormat:"json",parameters:[{name:"body",type:"Body",schema:Yo}],response:ur},{method:"delete",path:"/company/rbac/invites/:inviteId",alias:"deleteInvite",requestFormat:"json",parameters:[{name:"inviteId",type:"Path",schema:u.number().int()}],response:u.object({}).partial().passthrough()},{method:"get",path:"/company/rbac/roles",alias:"getRoleList",description:`Path mirrors the company app&#x27;s RBAC_ROLES constant so the real tenant API drops in. The portal expects &#x60;permissions&#x60; (grant codes) and &#x60;memberCount&#x60; embedded per role — the delete guard reads memberCount, so no separate delete-check round-trip is needed at portal scale. Permission note: the portal calls this holding perm_role_ls, but ALSO holding only perm_asst_add / perm_asst_edt (the add-user and edit-user role selects need options) — the backend must let the read-list ride those write codes, or the selects render optionless for such grants.
`,requestFormat:"json",response:oi},{method:"post",path:"/company/rbac/roles",alias:"postRole",requestFormat:"json",parameters:[{name:"body",type:"Body",schema:tn}],response:Ct},{method:"put",path:"/company/rbac/roles/:roleId",alias:"putRole",requestFormat:"json",parameters:[{name:"body",type:"Body",schema:tn},{name:"roleId",type:"Path",schema:u.number().int()}],response:Ct},{method:"delete",path:"/company/rbac/roles/:roleId",alias:"deleteRole",requestFormat:"json",parameters:[{name:"roleId",type:"Path",schema:u.number().int()}],response:u.object({}).partial().passthrough()},{method:"get",path:"/company/salesOrder/:salesOrderId",alias:"getSalesOrder",requestFormat:"json",parameters:[{name:"salesOrderId",type:"Path",schema:u.string()}],response:u.object({salesOrderId:u.string(),salesOrderStatusId:u.number().int().optional(),sender:Rt.optional(),recipient:Rt.optional(),createDate:u.string().optional(),pickupDate:u.string().optional(),deliveryDate:u.string().optional(),comment:u.string().optional(),fleetUid:u.string().optional(),driverId:u.string().optional(),driver:u.string().optional(),timeZone:u.string().optional(),chatroomId:u.string().optional(),packages:u.array(si).optional()}).passthrough()},{method:"get",path:"/company/salesOrderList",alias:"getSalesOrderList",requestFormat:"json",parameters:[{name:"page",type:"Query",schema:u.number().int()},{name:"limit",type:"Query",schema:u.number().int().optional()},{name:"salesOrderStatusId",type:"Query",schema:u.number().int().optional()},{name:"searchCol",type:"Query",schema:u.number().int().optional()},{name:"content",type:"Query",schema:u.string().optional()},{name:"sortCol",type:"Query",schema:u.number().int().optional()},{name:"sort",type:"Query",schema:u.boolean().optional()},{name:"scope",type:"Query",schema:u.enum(["own","sub","all"]).optional()}],response:ai},{method:"post",path:"/company/verifyToken",alias:"postVerifyToken",requestFormat:"json",parameters:[{name:"body",type:"Body",schema:u.object({token:u.string()}).passthrough()}],response:ii}]);new qo(Xo);function be(t,r){return n=>{const a=t.safeParse(n.data);if(a.success)return{...n,data:a.data};const h=g=>!g||typeof g!="object"?{type:typeof g}:{keys:Object.keys(g)},d={endpoint:r,issues:a.error.issues,received:h(n.data)};return console.error("[api drift]",d),n}}const Jo=t=>Q.post(pe.VERIFY_TOKEN,t).then(be(ye.ApiVerifyTokenResponse,"postVerifyToken")).then(r=>(Q.defaults.headers.common.Token=r.data.token,Q.defaults.headers.common["X-Refresh-Token"]=r.data.refresh,r)),el=t=>Q.get(pe.SALES_ORDER_LIST,{params:t}).then(be(ye.ApiSalesOrderListResponse,"getSalesOrderList")),tl=t=>Q.get(gt(pe.SALES_ORDER,{salesOrderId:t})).then(be(ye.ApiSalesOrderDetail,"getSalesOrder")),ci=()=>Q.get(pe.RBAC_ROLES).then(be(ye.ApiRoleListResponse,"getRoleList")),rl=t=>Q.post(pe.RBAC_ROLES,t).then(be(ye.ApiRole,"postRole")),nl=(t,r)=>Q.put(gt(pe.RBAC_ROLE,{roleId:String(t)}),r).then(be(ye.ApiRole,"putRole")),il=t=>Q.delete(gt(pe.RBAC_ROLE,{roleId:String(t)})),al=()=>Q.get(pe.ASSISTANT).then(be(ye.ApiAssistantListResponse,"getAssistantList")),sl=t=>Q.post(pe.ASSISTANT,t).then(be(ye.ApiAssistantUser,"postAssistant")),rn=t=>Q.put(pe.ASSISTANT,t).then(be(ye.ApiAssistantUser,"putAssistant")),ol={1:"neutral",2:"neutral",3:"active",4:"active",5:"active",6:"active",7:"active",8:"active",9:"danger",10:"done",11:"done",12:"warning",13:"done",14:"danger",15:"done",16:"danger"},ll=i.span`
  display: inline-block;
  max-width: 100%;
  padding: 3px 8px;
  border: none;
  border-radius: var(--v29-radius-tag);
  font-family: ${j};
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: middle;

  ${({$tone:t})=>{switch(t){case"active":return"color: var(--v29-primary); background: color-mix(in srgb, var(--v29-primary) 10%, transparent);";case"done":return"color: var(--v29-on-primary); background: var(--v29-primary);";case"warning":return"color: var(--v29-warning); background: var(--v29-warning-bg);";case"danger":return"color: var(--v29-danger); background: var(--v29-danger-bg);";default:return"color: var(--v29-muted); background: var(--v29-line-soft);"}}}
`,pi=t=>ol[t]??"neutral",Pt=({statusId:t})=>{const{t:r}=Z();return e.jsx(ll,{$tone:pi(t),children:r(`salesOrderStatusId:${t}`,String(t))})},Nt=["orderCreated","scheduled","readyForPickup","inTransit","delivered","completed"],dl={1:0,2:1,3:2,4:3,5:3,6:3,7:3,8:3,9:0,10:4,11:4,12:5,13:5,14:0,15:5,16:0};function cl(t,r){return t==="cancelled"?"tracking:headline.cancelled":t==="exception"?"tracking:headline.exception":`tracking:headline.${Nt[r]??"inTransit"}`}function hi(t){const r=pi(t),n=r==="danger"?"cancelled":r==="warning"?"exception":"normal",a=dl[t]??0;return{stepIndex:a,variant:n,showStepper:n!=="cancelled",headlineKey:cl(n,a)}}const pl=new Intl.DateTimeFormat("en-AU",{weekday:"long",day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});function hl(t){const r=new Date(`${t}T00:00:00Z`);return Number.isNaN(r.getTime())?t:pl.format(r)}const nn=i.div`
  margin: 0 0 16px;
`,ul=i.img`
  display: block;
  width: 100%;
  max-width: 320px;
  height: auto;
  border-radius: 8px;
  border: 1px solid var(--v29-line-soft);
`,ml=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 320px;
  min-height: 120px;
  padding: 16px;
  border-radius: 8px;
  border: 1px dashed var(--v29-line-soft);
  background: var(--v29-raised);
  color: var(--v29-muted);
  font-family: ${j};
  font-size: 13px;
  text-align: center;
`,xl=({pod:t})=>{const{t:r}=Z(),[n,a]=b.useState(!1);return t?e.jsx(M,{children:e.jsxs(B,{children:[e.jsx(Y,{children:r("tracking:pod.title","Proof of Delivery")}),t.photoUrl&&!n&&e.jsx(nn,{children:e.jsx(ul,{src:t.photoUrl,alt:r("tracking:pod.photoAlt"),onError:()=>a(!0)})}),t.photoUrl&&n&&e.jsx(nn,{children:e.jsx(ml,{children:r("tracking:pod.photoUnavailable")})}),e.jsxs(Lt,{children:[e.jsxs("div",{children:[e.jsx("dt",{children:r("tracking:activity.deliveredSigned")}),e.jsx("dd",{children:hl(t.deliveredAt)})]}),t.signedByInitial&&e.jsxs("div",{children:[e.jsx("dt",{children:r("tracking:pod.signedBy","Signed By")}),e.jsx("dd",{children:t.signedByInitial})]})]})]})}):null},gl=i.ul`
  display: grid;
  gap: 12px;
  margin: 14px 0 0;
  padding: 0;
  list-style: none;
`,fl=i.li`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  padding: 14px 16px;
  border-radius: 8px;
  border-left: 3px solid var(--v29-warning);
  background: var(--v29-warning-bg);
`,vl=i.p`
  margin: 0;
  flex: 1 1 260px;
  font-family: ${j};
  font-size: 14px;
  line-height: 1.5;
  color: var(--v29-text);
`,yl=i(U)`
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
  border-color: var(--v29-warning);

  &:hover:not(:disabled) {
    border-color: var(--v29-warning);
    /* A solid-ish amber wash (mixed into the card, not the translucent row
     * tint) so the neutral label still clears AA on hover. */
    background: color-mix(in srgb, var(--v29-warning) 12%, var(--v29-card));
  }

  &:focus-visible {
    outline-color: var(--v29-warning);
  }
`,bl=i(Y)`
  color: var(--v29-warning);

  svg {
    color: var(--v29-warning);
  }
`,an="tracking-exceptions-title",jl=({items:t})=>{const{t:r}=Z();return t.length===0?null:e.jsx(M,{"aria-labelledby":an,children:e.jsxs(B,{children:[e.jsxs(bl,{id:an,children:[e.jsx(Mn,{"aria-hidden":"true"}),r("tracking:exception.badgeLabel",{count:t.length})]}),e.jsx(gl,{children:t.map((n,a)=>e.jsxs(fl,{children:[e.jsx(vl,{children:r(`tracking:exception.${n.subReasonKey}.reason`)}),n.supportHref&&e.jsx(yl,{as:"a",href:n.supportHref,children:r("tracking:help.contactSupport")})]},`${n.subReasonKey}-${a}`))})]})})};function wl(t,r){return t<r?"done":t===r&&r<Nt.length-1?"current":t===r?"done":"future"}const kl=i.ol`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 2px;
  margin: 0;
  padding: 0;
  list-style: none;
`,Sl=i.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  min-width: 0;
  text-align: center;

  &:not(:first-child)::before {
    content: '';
    position: absolute;
    top: 11px;
    left: -50%;
    width: 100%;
    height: 2px;
    background: ${({$state:t})=>t==="future"?"var(--v29-line-soft)":"var(--v29-primary)"};
  }
`,El=i.span`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  font-family: ${j};
  font-size: 11px;
  font-weight: 700;
  box-sizing: border-box;

  ${({$state:t})=>{switch(t){case"done":return"background: var(--v29-primary); color: var(--v29-on-primary); border: 2px solid var(--v29-primary);";case"current":return"background: var(--v29-warning-bg); color: var(--v29-warning); border: 2px solid var(--v29-warning);";default:return"background: var(--v29-line-soft); color: var(--v29-muted); border: 2px solid transparent;"}}}
`,Il=i.span`
  font-family: ${j};
  font-size: 11px;
  line-height: 1.3;
  overflow-wrap: break-word;
  color: ${({$state:t})=>t==="future"?"var(--v29-muted)":"var(--v29-text)"};
  font-weight: ${({$state:t})=>t==="current"?700:500};
`,$l=({step:t})=>{const{t:r}=Z();return t.showStepper?e.jsx(kl,{children:Nt.map((n,a)=>{const h=wl(a,t.stepIndex);return e.jsxs(Sl,{$state:h,"aria-current":h==="current"?"step":void 0,children:[e.jsx(El,{$state:h,"aria-hidden":"true",children:h==="future"?a+1:e.jsx(ir,{size:13,strokeWidth:3})}),e.jsx(Il,{$state:h,children:r(`tracking:step.${n}`)})]},n)})}):null},Al=i.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
`,Rl=i.span`
  display: block;
  font-family: ${j};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--v29-muted);
`,Cl=i.span`
  display: block;
  margin-top: 4px;
  font-family: ${j};
  font-size: 20px;
  font-weight: 700;
  color: var(--v29-text);
  word-break: break-word;
`,Ol=i.p`
  margin: 12px 0 0;
  font-family: ${j};
  font-size: 15px;
  line-height: 1.5;
  color: var(--v29-text);
`,sn=i.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin: 12px 0 0;
  padding: 14px 16px;
  border-radius: 8px;
  border-left: 3px solid
    ${({$tone:t})=>t==="danger"?"var(--v29-danger)":"var(--v29-warning)"};
  background: ${({$tone:t})=>t==="danger"?"var(--v29-danger-bg)":"var(--v29-warning-bg)"};
  font-family: ${j};
  font-size: 15px;
  line-height: 1.5;
  color: var(--v29-text);

  svg {
    flex-shrink: 0;
    width: 18px;
    height: 18px;
    margin-top: 1px;
    color: ${({$tone:t})=>t==="danger"?"var(--v29-danger)":"var(--v29-warning)"};
  }
`,Pl=i(le)`
  margin-top: 6px;
`,Tl=i.div`
  margin-top: 14px;
`,Ll=i.div`
  margin-top: 18px;
`,Nl=new Intl.DateTimeFormat("en-AU",{day:"numeric",month:"short",year:"numeric"});function Ml(t){const r=new Date(t);return Number.isNaN(r.getTime())?t:Nl.format(r)}const Dl=({salesOrderId:t,statusId:r,eta:n,latestEvent:a})=>{const{t:h}=Z(),d=r!=null?hi(r):void 0;return e.jsx(M,{children:e.jsxs(B,{children:[e.jsxs(Al,{children:[e.jsxs("div",{children:[e.jsx(Rl,{children:h("portal:orders.colOrderId")}),e.jsx(Cl,{children:t})]}),r!=null&&e.jsx(Pt,{statusId:r})]}),d&&(d.variant==="cancelled"?e.jsxs(sn,{$tone:"danger",role:"alert",children:[e.jsx($a,{"aria-hidden":"true"}),e.jsx("span",{children:h(d.headlineKey)})]}):d.variant==="exception"?e.jsxs(sn,{$tone:"warning",role:"status",children:[e.jsx(Mn,{"aria-hidden":"true"}),e.jsx("span",{children:h(d.headlineKey)})]}):e.jsx(Ol,{children:h(d.headlineKey)})),a&&e.jsxs(Pl,{children:[h(a.activityKey)," · ",Ml(a.date)," ·"," ",a.locationLabel]}),n&&e.jsx(Tl,{children:e.jsx(Lt,{children:e.jsxs("div",{children:[e.jsx("dt",{children:h("tracking:facts.estimatedDelivery")}),e.jsx("dd",{children:n.window?`${n.dateLabel} (${n.window})`:n.dateLabel})]})})}),d&&e.jsx(Ll,{children:e.jsx($l,{step:d})})]})})},on=3,ln=new Intl.DateTimeFormat("en-AU",{weekday:"long",day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}),Fl=new Intl.DateTimeFormat("en-AU",{weekday:"short",day:"numeric",month:"short",timeZone:"UTC"});function Kt(t,r){const n=new Date(`${t}T00:00:00Z`);return Number.isNaN(n.getTime())?t:r.format(n)}function zl(t){return[...t].sort((r,n)=>r.date===n.date?0:r.date>n.date?-1:1)}function Bl(t){const r=[];return t.forEach(n=>{const a=r[r.length-1];a&&a.date===n.date?a.events.push(n):r.push({date:n.date,events:[n]})}),r}const Ul=i.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0 0 18px;
`,_l=i.span`
  font-family: ${j};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--v29-muted);
`,Gl=i.span`
  font-family: ${j};
  font-size: 14px;
  color: var(--v29-text);
`,ql=i(He)`
  @media (max-width: 640px) {
    display: none;
  }
`,Wl=i(Ke)`
  min-width: 560px;
`,Hl=i.span`
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`,dn=i.span`
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--v29-primary) 12%, transparent);
  color: var(--v29-primary);
  font-family: ${j};
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;
`,Kl=i.div`
  display: none;

  @media (max-width: 640px) {
    display: grid;
    gap: 4px;
  }
`,Vl=i.p`
  margin: 14px 0 4px;
  padding: 8px 2px 4px;
  font-family: ${j};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--v29-muted);
  border-bottom: 1px solid var(--v29-line-soft);

  &:first-child {
    margin-top: 0;
  }
`,Yl=i.div`
  display: grid;
  gap: 4px;
  padding: 10px 2px;
  border-bottom: 1px solid var(--v29-line-soft);
  font-family: ${j};

  &:last-child {
    border-bottom: none;
  }
`,Ql=i.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  color: var(--v29-text);
  font-size: 14px;
  font-weight: 600;
`,Zl=i.p`
  margin: 0;
  color: var(--v29-muted);
  font-size: 13px;
`,Xl=i.div`
  margin-top: 16px;
`,Jl=({events:t,eta:r})=>{const{t:n}=Z(),[a,h]=b.useState(!1),d=b.useMemo(()=>zl(t??[]),[t]),g=d.length>on,x=a?d:d.slice(0,on),s=b.useMemo(()=>Bl(x),[x]);return d.length===0&&!r?null:e.jsx(M,{children:e.jsxs(B,{children:[e.jsx(Y,{children:n("tracking:timeline.title","Shipment History")}),r&&e.jsxs(Ul,{children:[e.jsx(_l,{children:n("tracking:facts.estimatedDelivery")}),e.jsxs(Gl,{children:[r.dateLabel,r.window?` · ${r.window}`:""]})]}),d.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(ql,{children:e.jsxs(Wl,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:n("tracking:timeline.colTime","Time")}),e.jsx("th",{scope:"col",children:n("tracking:timeline.colActivity","Activity")}),e.jsx("th",{scope:"col",children:n("tracking:timeline.colLocation","Location")})]})}),e.jsx("tbody",{children:s.map((l,o)=>e.jsxs(F.Fragment,{children:[e.jsx("tr",{children:e.jsx("th",{colSpan:3,children:Kt(l.date,ln)})}),l.events.map((c,p)=>{const y=o===0&&p===0;return e.jsxs("tr",{children:[e.jsx("td",{children:Kt(c.date,Fl)}),e.jsx("td",{children:e.jsxs(Hl,{children:[n(c.activityKey),y&&e.jsx(dn,{children:n("tracking:timeline.latest","Latest")})]})}),e.jsx("td",{children:c.locationLabel})]},`${c.date}-${c.activityKey}-${p}`)})]},l.date))})]})}),e.jsx(Kl,{children:s.map((l,o)=>e.jsxs(F.Fragment,{children:[e.jsx(Vl,{children:Kt(l.date,ln)}),l.events.map((c,p)=>{const y=o===0&&p===0;return e.jsxs(Yl,{children:[e.jsxs(Ql,{children:[n(c.activityKey),y&&e.jsx(dn,{children:n("tracking:timeline.latest","Latest")})]}),e.jsx(Zl,{children:c.locationLabel})]},`${c.date}-${c.activityKey}-${p}`)})]},l.date))}),g&&e.jsx(Xl,{children:e.jsx(U,{type:"button","aria-expanded":a,onClick:()=>h(l=>!l),children:a?e.jsxs(e.Fragment,{children:[e.jsx(ba,{"aria-hidden":"true"}),n("tracking:timeline.showLess","Show Less")]}):e.jsxs(e.Fragment,{children:[e.jsx(ya,{"aria-hidden":"true"}),n("tracking:timeline.viewFullHistory","View Full History")]})})})]})]})})},ed=i.div`
  display: grid;
  gap: 18px;
`,td=i.div`
  overflow-x: auto;
`,rd=i.div`
  margin-top: 14px;
`,cn=new Intl.NumberFormat("en-AU",{style:"currency",currency:"AUD"});function nd(t){return t.destinationStreet??t.destinationSuburbStatePostcode}const id=({projection:t,level:r,onRequestTier2:n,eta:a,timeline:h,pod:d,exceptions:g})=>{const{t:x}=Z(),s=t.salesOrderStatusId,l=nd(t),o=t.packages??[],c=!!(t.shipperName||t.recipientName),p=o.some(m=>m.weightKg!=null),y=o.some(m=>m.pricing!=null),v=o.some(m=>m.salesOrderStatusId!=null);return e.jsxs(ed,{children:[e.jsx(Dl,{salesOrderId:t.salesOrderId,statusId:s,eta:a}),g&&e.jsx(jl,{items:g}),e.jsx(M,{children:e.jsx(B,{children:e.jsxs(Lt,{children:[t.shipDate&&e.jsxs("div",{children:[e.jsx("dt",{children:x("tracking:facts.shipDate")}),e.jsx("dd",{children:t.shipDate})]}),t.originCityCountry&&e.jsxs("div",{children:[e.jsx("dt",{children:x("tracking:facts.origin")}),e.jsx("dd",{children:t.originCityCountry})]}),l&&e.jsxs("div",{children:[e.jsx("dt",{children:x("tracking:facts.destination")}),e.jsx("dd",{children:l})]}),e.jsxs("div",{children:[e.jsx("dt",{children:x("tracking:facts.packages")}),e.jsx("dd",{children:t.packageCount})]}),t.totalWeightKg!=null&&e.jsxs("div",{children:[e.jsx("dt",{children:x("tracking:facts.weight")}),e.jsx("dd",{children:x("portal:orders.weightKg",{weight:t.totalWeightKg})})]}),t.totalPricing!=null&&e.jsxs("div",{children:[e.jsx("dt",{children:x("portal:orders.packagePrice")}),e.jsx("dd",{children:cn.format(t.totalPricing)})]}),t.comment&&e.jsxs("div",{children:[e.jsx("dt",{children:x("portal:orders.comment")}),e.jsx("dd",{children:t.comment})]})]})})}),h&&e.jsx(Jl,{events:h}),d&&e.jsx(xl,{pod:d}),r==="guest_t1"&&n&&e.jsx(M,{children:e.jsxs(B,{children:[e.jsx(Y,{children:x("tracking:tier2.gateTitle")}),e.jsx($t,{children:x("tracking:tier2.gateBody")}),e.jsx(rd,{children:e.jsx(De,{type:"button",onClick:n,children:x("tracking:tier2.verifyButton")})})]})}),c&&e.jsxs(Qs,{children:[t.shipperName&&e.jsx(M,{children:e.jsxs(B,{children:[e.jsx(Y,{children:x("portal:orders.sender")}),e.jsxs(Gr,{children:[e.jsx("strong",{children:t.shipperName}),t.senderPhone&&e.jsx("span",{children:t.senderPhone})]})]})}),t.recipientName&&e.jsx(M,{children:e.jsxs(B,{children:[e.jsx(Y,{children:x("portal:orders.recipient")}),e.jsxs(Gr,{children:[e.jsx("strong",{children:t.recipientName}),t.recipientPhone&&e.jsx("span",{children:t.recipientPhone})]})]})})]}),o.length>0&&e.jsx(M,{children:e.jsxs(B,{children:[e.jsx(Y,{children:x("portal:orders.packagesTitle")}),e.jsx(td,{children:e.jsxs(Zs,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:x("portal:orders.packageId")}),p&&e.jsx("th",{scope:"col",children:x("portal:orders.packageWeight")}),y&&e.jsx("th",{scope:"col",children:x("portal:orders.packagePrice")}),v&&e.jsx("th",{scope:"col",children:x("portal:orders.colStatus")})]})}),e.jsx("tbody",{children:o.map(m=>e.jsxs("tr",{children:[e.jsx("td",{children:m.sid}),p&&e.jsx("td",{children:m.weightKg!=null?x("portal:orders.weightKg",{weight:m.weightKg}):"—"}),y&&e.jsx("td",{children:m.pricing!=null?cn.format(m.pricing):"—"}),v&&e.jsx("td",{children:m.salesOrderStatusId!=null?e.jsx(Pt,{statusId:m.salesOrderStatusId}):"—"})]},m.sid))})]})})]})})]})};function ad({isAuthenticated:t,isOwner:r,orderScope:n,guestTier:a}){return r?"owner":n==="sub"||n==="all"?"staff":"guest_t1"}const sd=new Set(["NSW","VIC","QLD","WA","SA","TAS","NT","ACT"]);function pn(t){const r=typeof(t==null?void 0:t.address)=="string"?t.address.trim():"",n=typeof(t==null?void 0:t.postcode)=="string"?t.postcode.trim():"";if(!r)return{};const a=r.split(",").map(s=>s.trim()).filter(Boolean),h=a.length>1?a[a.length-1]:a[0],d=a.length>1?a.slice(0,-1).join(", "):void 0,g=[r,n].filter(Boolean).join(" ").trim()||void 0,x=[h,n].filter(Boolean).join(" ").trim()||void 0;return{street:d,suburbState:h,full:g,coarse:x}}function hn(t){if(!t)return;const r=t.split(" ").filter(Boolean),n=r[r.length-1];return n&&sd.has(n.toUpperCase())?r.slice(0,-1).join(" ").trim()||void 0:t}function od(t,r){const n=10**r;return Math.round(t*n)/n}function un(t,r){const n=t.filter(a=>typeof a=="number");if(n.length)return od(n.reduce((a,h)=>a+h,0),r)}function ld(t,r){let n={sid:t.sid,salesOrderStatusId:t.salesOrderStatusId};return r!=="guest_t1"&&typeof t.weight=="number"&&(n={...n,weightKg:t.weight}),r==="owner"&&typeof t.pricing=="number"&&(n={...n,pricing:t.pricing}),n}function dd(t,r){var g,x,s,l;const n=t.packages??[],a=pn(t.sender),h=pn(t.recipient);let d={salesOrderId:t.salesOrderId,salesOrderStatusId:t.salesOrderStatusId,shipDate:t.pickupDate,packageCount:n.length,originCityCountry:hn(a.suburbState)?`${hn(a.suburbState)}, Australia`:void 0,destinationSuburbStatePostcode:h.coarse,packages:n.map(o=>ld(o,r))};return r!=="guest_t1"&&(d={...d,destinationStreet:h.full,shipperName:(g=t.sender)==null?void 0:g.name,recipientName:(x=t.recipient)==null?void 0:x.name,totalWeightKg:un(n.map(o=>o.weight),1)}),r==="owner"&&(d={...d,senderPhone:(s=t.sender)==null?void 0:s.mobile,recipientPhone:(l=t.recipient)==null?void 0:l.mobile,comment:t.comment,totalPricing:un(n.map(o=>o.pricing),2)}),d}const cd=i(Vi)`
  flex: none;
  &::before { display: none; }
`,pd=i(ke)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 42px;
  padding: 10px 16px;
  border-radius: 8px;
  border: 1px solid var(--v29-line);
  color: var(--v29-text);
  font-family: ${j};
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover {
    border-color: var(--v29-primary);
  }

  &:focus-visible {
    outline: 2px solid var(--v29-primary);
    outline-offset: 2px;
  }
`;function hd(t){const r=t==null?void 0:t.createdByUid;return typeof r=="string"?r:void 0}const ud=()=>{const{t}=Z(),{salesOrderId:r=""}=cr(),n=ae(),[a,h]=b.useState({kind:"loading"}),d=tt(y=>y.uid),g=Dn(),x=pr("nextStopMap"),s=b.useCallback(()=>{h({kind:"loading"}),tl(r).then(y=>h({kind:"ready",detail:y.data})).catch(()=>h({kind:"error"}))},[r]);b.useEffect(()=>{s()},[s]);const l=a.kind==="ready"?a.detail:null,o=hd(l),p=ad({isAuthenticated:!0,isOwner:!!(d&&o&&o===d),orderScope:g});return e.jsxs(Be,{children:[e.jsxs(it,{children:[e.jsxs("div",{children:[e.jsx(Re,{children:t("portal:common.eyebrow")}),e.jsx(Fe,{children:t("portal:orders.detailTitle",{id:r})}),e.jsx(Ce,{children:t("portal:orders.detailLead")})]}),e.jsxs(pd,{to:{pathname:"/portal/orders",search:n.search},children:[e.jsx(Pn,{"aria-hidden":"true"}),t("portal:orders.backToOrders")]})]}),a.kind==="loading"&&e.jsx(M,{children:e.jsx(B,{"aria-busy":"true","aria-label":t("common:loading"),children:e.jsx(ue,{})})}),a.kind==="error"&&e.jsx(M,{children:e.jsxs(de,{role:"alert",children:[t("portal:orders.detailLoadFailed"),e.jsx(U,{type:"button",onClick:s,children:t("common:retry")})]})}),l&&e.jsx(id,{projection:dd(l,p),level:p}),x&&(p==="owner"||p==="staff")&&(l==null?void 0:l.salesOrderId)===r&&Nt[hi(l.salesOrderStatusId??0).stepIndex]==="inTransit"&&e.jsx(cd,{children:e.jsx(Ki,{enabled:!0,shipment:{orderId:r,stage:"in_transit"},audience:"public",layout:"wide"})})]})},md=[{id:"on-account",status:"available"},{id:"stripe-card",status:"pending"}],xd=i.header`
  margin-bottom: 34px;
`,mn=i.h3`
  font-family: ${j};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--v29-muted);
  margin: 40px 0 14px;
`,gd=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
`,fd=i.div`
  border-radius: 16px;
  border: 1px solid var(--v29-line-soft);
  background: var(--v29-card);
  box-shadow: var(--v29-card-shadow);
  padding: 22px 24px;
`,vd=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 10px;
`,yd=i.h4`
  font-family: ${j};
  font-size: 16px;
  font-weight: 700;
  color: var(--v29-text);
  margin: 0;
`,bd=i.p`
  font-family: ${j};
  font-size: 14px;
  line-height: 1.65;
  color: var(--v29-muted);
  margin: 0;
`,jd=i.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 3px 10px;
  border-radius: 999px;
  font-family: ${j};
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: currentColor;
  }

  ${({$status:t})=>t==="available"?"color: var(--v29-primary); background: color-mix(in srgb, var(--v29-primary) 10%, transparent);":"color: var(--v29-muted); background: var(--v29-line-soft);"}
`,wd=i.ol`
  margin: 0;
  padding: 0;
  list-style: none;
  counter-reset: billing-step;
  display: grid;
  gap: 12px;
`,kd=i.li`
  display: flex;
  gap: 14px;
  align-items: flex-start;
  font-family: ${j};
  font-size: 14px;
  line-height: 1.65;
  color: var(--v29-muted);
  max-width: 72ch;

  strong {
    color: var(--v29-text);
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
    background: color-mix(in srgb, var(--v29-primary) 10%, transparent);
    color: var(--v29-primary);
    font-size: 13px;
    font-weight: 700;
  }
`,Sd=i.div`
  margin-top: 28px;
  border-radius: 12px;
  background: var(--v29-raised);
  padding: 18px 20px;
  font-family: ${j};
  font-size: 13.5px;
  line-height: 1.65;
  color: var(--v29-muted);
  max-width: 78ch;

  strong {
    color: var(--v29-text);
    font-weight: 600;
  }
`,Ed=()=>{const{t}=Z("portal");return e.jsxs(Be,{children:[e.jsxs(xd,{children:[e.jsx(Re,{children:t("common.eyebrow")}),e.jsx(Fe,{children:t("billing.title")}),e.jsx(Ce,{children:t("billing.lead")})]}),e.jsx(mn,{children:t("billing.methodsTitle")}),e.jsx(gd,{children:md.map(r=>e.jsxs(fd,{children:[e.jsxs(vd,{children:[e.jsx(yd,{children:t(`billing.methods.${r.id}.name`)}),e.jsx(jd,{$status:r.status,children:t(`billing.status.${r.status}`)})]}),e.jsx(bd,{children:t(`billing.methods.${r.id}.body`)})]},r.id))}),e.jsx(mn,{children:t("billing.howTitle")}),e.jsx(wd,{children:["secure","intent","confirm","receipt"].map(r=>e.jsx(kd,{children:e.jsxs("span",{children:[e.jsx("strong",{children:t(`billing.how.${r}.title`)})," — ",t(`billing.how.${r}.body`)]})},r))}),e.jsxs(Sd,{children:[e.jsx("strong",{children:t("billing.readinessTitle")})," ",t("billing.readinessBody")]})]})};class pt extends Error{}pt.prototype.name="InvalidTokenError";function Id(t){return decodeURIComponent(atob(t).replace(/(.)/g,(r,n)=>{let a=n.charCodeAt(0).toString(16).toUpperCase();return a.length<2&&(a="0"+a),"%"+a}))}function $d(t){let r=t.replace(/-/g,"+").replace(/_/g,"/");switch(r.length%4){case 0:break;case 2:r+="==";break;case 3:r+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return Id(r)}catch{return atob(r)}}function Ad(t,r){if(typeof t!="string")throw new pt("Invalid token specified: must be a string");r||(r={});const n=r.header===!0?0:1,a=t.split(".")[n];if(typeof a!="string")throw new pt(`Invalid token specified: missing part #${n+1}`);let h;try{h=$d(a)}catch(d){throw new pt(`Invalid token specified: invalid base64 for part #${n+1} (${d.message})`)}try{return JSON.parse(h)}catch(d){throw new pt(`Invalid token specified: invalid json for part #${n+1} (${d.message})`)}}const Rd={name:"SenditGo"},xn="portal-recaptcha-container",Cd=i.div`
  display: flex;
  justify-content: center;
  padding-top: clamp(8px, 6vh, 64px);
`,Od=i.div`
  width: 100%;
  max-width: 440px;
  padding: 36px 32px 32px;
  border-radius: 16px;
  background: var(--v29-card);
  border: 1px solid var(--v29-line-soft);
  box-shadow: var(--v29-card-shadow);
`,Pd=i.h1`
  font-family: ${me};
  font-style: italic;
  font-weight: 700;
  font-size: 28px;
  letter-spacing: 0.01em;
  line-height: 1.15;
  margin: 0 0 10px;
  color: var(--v29-text);
`,gn=i.label`
  display: block;
  font-family: ${j};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--v29-muted);
  margin: 26px 0 8px;
`,mr=`
  font-family: ${j};
  font-size: 15px;
  padding: 14px 16px;
  border-radius: 12px;
  background: var(--v29-page);
  border: 1px solid var(--v29-line-soft);
  color: var(--v29-text);
  transition: border-color 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
  &::placeholder { color: var(--v29-muted); }
  &:focus {
    outline: none;
    background: var(--v29-card);
    border-color: var(--v29-primary);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--v29-primary) 20%, transparent);
  }
`,Td=i.div`
  display: flex;
  gap: 10px;
`,Ld=i.span`
  ${mr};
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  color: var(--v29-muted);
  user-select: none;
`,Nd=i.input`
  ${mr};
  flex: 1;
  min-width: 0;
`,Md=i.input`
  ${mr};
  width: 100%;
  text-align: center;
  font-size: 22px;
  letter-spacing: 0.45em;
  font-variant-numeric: tabular-nums;
`,fn=i.span`
  display: inline-block;
  width: 14px;
  height: 14px;
  margin-right: 8px;
  border-radius: 50%;
  border: 2px solid color-mix(in srgb, var(--v29-on-primary) 35%, transparent);
  border-top-color: var(--v29-on-primary);
  animation: portal-login-spin 0.7s linear infinite;
  vertical-align: -2px;

  @keyframes portal-login-spin {
    to { transform: rotate(360deg); }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,vn=i.button`
  width: 100%;
  margin-top: 26px;
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  background: var(--v29-primary);
  color: var(--v29-on-primary);
  font-family: ${me};
  font-style: italic;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
  &:hover:not(:disabled) {
    background: var(--v29-primary-hover);
    transform: translateY(-1px);
  }
  &:focus-visible {
    outline: 2px solid var(--v29-primary);
    outline-offset: 2px;
  }
  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`,yn=i.button`
  border: none;
  background: transparent;
  padding: 4px 6px;
  font-family: ${j};
  font-size: 13px;
  color: var(--v29-primary);
  cursor: pointer;
  border-radius: 6px;
  &:hover {
    text-decoration: underline;
  }
  &:focus-visible {
    outline: 2px solid var(--v29-primary);
    outline-offset: 1px;
  }
  &:disabled {
    color: var(--v29-muted);
    cursor: not-allowed;
    text-decoration: none;
  }
`,Dd=i.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
`,bn=i.p`
  margin: 14px 0 0;
  font-family: ${j};
  font-size: 13.5px;
  color: var(--v29-danger);
`,Fd=i.p`
  margin: 6px 0 0;
  font-family: ${j};
  font-size: 13.5px;
  color: var(--v29-muted);
`;i.div`
  margin-top: 18px;
  text-align: center;
`;const zd=()=>{var re;const{t}=Z(),r=mt(),n=ae(),a=tt(R=>R.login),h=tt(R=>R.token),[d,g]=b.useState("phone"),[x,s]=b.useState(""),[l,o]=b.useState(""),[c,p]=b.useState(!1),[y,v]=b.useState(null),m=b.useRef(null),w=b.useRef(null),I=Yi((re=n.state)==null?void 0:re.from,"/portal/orders");b.useEffect(()=>{h&&r(I,{replace:!0})},[h]),b.useEffect(()=>()=>{var R;(R=m.current)==null||R.clear(),m.current=null},[]);const E=()=>`+61${x.replace(/[^\d]/g,"").replace(/^0/,"")}`,k=R=>{const N=Ad(R.data.token),W=Number.isFinite(N.exp)?N.exp-Math.floor(Date.now()/1e3):86400,ne={maxAge:Math.max(60,W),secure:!Sr,sameSite:"strict"};Ir("X-Token",R.data.token,ne),Ir("X-Refresh-Token",R.data.refresh,ne),a({token:R.data.token,refresh:R.data.refresh,uid:N.uid,name:R.data.name||N.name||"",companyUid:N.companyUid,permission:R.data.permission??[]}),r(I,{replace:!0})},$=R=>{const N=R==null?void 0:R.code;return typeof N=="number"&&N>0?t(`statusCode:${N}`,t("portal:login.loginFailed")):t("portal:login.loginFailed")},D=async()=>{var N,P;if(v(null),x.replace(/[^\d]/g,"").length<8){v(t("portal:login.invalidPhone"));return}p(!0);try{(N=m.current)==null||N.clear(),m.current=new Qi(Er,xn,{size:"invisible"}),w.current=await Zi(Er,E(),m.current),o(""),g("otp")}catch(W){console.error("[portal login] send code failed",W.code),v(t("portal:login.sendFailed")),(P=m.current)==null||P.clear(),m.current=null}finally{p(!1)}},xe=async R=>{R.preventDefault(),await D()},Ee=async R=>{if(R.preventDefault(),v(null),l.replace(/[^\d]/g,"").length!==6){v(t("portal:login.invalidOtp"));return}if(!w.current){g("phone");return}p(!0);try{const P=await(await w.current.confirm(l)).user.getIdToken(),W=await Jo({token:P});k(W)}catch(N){const P=N==null?void 0:N.code;v(typeof P=="string"?t("portal:login.otpFailed"):$(N))}finally{p(!1)}};return e.jsx(Be,{children:e.jsx(Cd,{children:e.jsxs(Od,{children:[e.jsx(Re,{children:t("portal:common.eyebrow")}),e.jsx(Pd,{children:t("portal:login.title",{brand:Rd.name})}),e.jsx(Ce,{children:t("portal:login.lead")}),d==="phone"?e.jsxs("form",{onSubmit:xe,noValidate:!0,children:[e.jsx(gn,{htmlFor:"portal-login-mobile",children:t("portal:login.mobileLabel")}),e.jsxs(Td,{children:[e.jsx(Ld,{"aria-hidden":"true",children:"+61"}),e.jsx(Nd,{id:"portal-login-mobile",type:"tel",inputMode:"tel",autoComplete:"tel",placeholder:t("portal:login.mobilePlaceholder"),value:x,onChange:R=>s(R.target.value)})]}),y&&e.jsx(bn,{role:"alert",children:y}),e.jsxs(vn,{type:"submit",disabled:c,"aria-busy":c,children:[c&&e.jsx(fn,{"aria-hidden":"true"}),t("portal:login.sendCode")]})]}):e.jsxs("form",{onSubmit:Ee,noValidate:!0,children:[e.jsx(gn,{htmlFor:"portal-login-otp",children:t("portal:login.otpLabel")}),e.jsx(Md,{id:"portal-login-otp",type:"text",inputMode:"numeric",autoComplete:"one-time-code",maxLength:6,placeholder:"••••••",value:l,onChange:R=>o(R.target.value.replace(/[^\d]/g,""))}),e.jsx(Fd,{children:t("portal:login.otpHint",{phone:E()})}),y&&e.jsx(bn,{role:"alert",children:y}),e.jsxs(vn,{type:"submit",disabled:c,"aria-busy":c,children:[c&&e.jsx(fn,{"aria-hidden":"true"}),t("portal:login.verify")]}),e.jsxs(Dd,{children:[e.jsx(yn,{type:"button",disabled:c,onClick:()=>{g("phone"),o(""),v(null)},children:t("portal:login.changeNumber")}),e.jsx(yn,{type:"button",disabled:c,onClick:()=>{D()},children:t("portal:login.resend")})]})]}),Sr,e.jsx("div",{id:xn})]})})})},Vt=5,Bd=[1,2,3,8,11,12,13,9,14,16],Ud=i(He)`
  @media (max-width: 640px) {
    display: none;
  }
`,_d=i(Ke)`
  tbody tr {
    cursor: pointer;
    transition: background 0.15s ease;
  }
  tbody tr:hover,
  tbody tr:focus-within {
    background: color-mix(in srgb, var(--v29-primary) 5%, transparent);
  }
`,jn=i(ke)`
  color: var(--v29-text);
  font-weight: 600;
  white-space: nowrap;
  text-decoration: none;

  &:hover {
    color: var(--v29-primary);
    text-decoration-color: currentColor;
  }
  &:focus-visible {
    outline: 2px solid var(--v29-primary);
    outline-offset: 2px;
    border-radius: 4px;
  }
`,Gd=i.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 200px;
  max-width: 340px;
  color: var(--v29-muted);
  font-size: 13px;
  line-height: 1.4;

  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span:first-child {
    color: var(--v29-text);
  }
`,ui=i.span`
  font-variant-numeric: tabular-nums;
`,wn=i(ui)`
  display: inline-block;
  min-width: 132px;
  white-space: nowrap;
`,qd=i.p`
  margin: 0;
  font-family: ${j};
  font-size: 13px;
  color: var(--v29-muted);
`,Wd=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 18px;
  border-top: 1px solid var(--v29-line-soft);
  background: var(--v29-raised);

  @media (max-width: 640px) {
    align-items: stretch;
    flex-direction: column;
  }
`,Hd=i.div`
  display: flex;
  gap: 8px;
`,Kd=i.button`
  border: none;
  background: transparent;
  min-height: 42px;
  padding: 0 10px;
  border-radius: var(--v29-radius-button);
  color: var(--v29-muted);
  font-family: ${j};
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.15s ease;

  &:hover {
    color: var(--v29-text);
  }

  &:focus-visible {
    outline: 2px solid var(--v29-primary);
    outline-offset: 2px;
  }
`,Vd=i.div`
  display: none;

  @media (max-width: 640px) {
    display: grid;
  }
`,Yd=i.article`
  display: grid;
  gap: 12px;
  padding: 16px 18px;
  border-bottom: 1px solid var(--v29-line-soft);
  font-family: ${j};
  cursor: pointer;
  transition: background 0.15s ease;

  &:hover,
  &:focus-within,
  &:active {
    background: color-mix(in srgb, var(--v29-primary) 5%, transparent);
  }
`,Qd=i.div`
  display: grid;
  justify-items: start;
  gap: 8px;
  min-width: 0;
`,Zd=i.div`
  display: grid;
  gap: 4px;
  color: var(--v29-muted);
  font-size: 14px;
  line-height: 1.45;

  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span:first-child {
    color: var(--v29-text);
  }
`,Xd=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  color: var(--v29-muted);
  font-size: 13px;
`,Jd=i.div`
  display: inline-flex;
  gap: 4px;
  padding: 4px;
  margin-bottom: 18px;
  border-radius: 11px;
  background: var(--v29-raised);
  border: 1px solid var(--v29-line-soft);
`,kn=i.button`
  appearance: none;
  cursor: pointer;
  border: none;
  border-radius: 7px;
  padding: 9px 16px;
  font-family: ${j};
  font-size: 13.5px;
  font-weight: 600;
  white-space: nowrap;
  color: ${t=>t.$active?"var(--v29-primary)":"var(--v29-muted)"};
  background: ${t=>t.$active?"var(--v29-card)":"transparent"};
  box-shadow: ${t=>t.$active?"var(--v29-card-shadow)":"none"};
  transition: color 0.15s ease, background 0.15s ease;

  &:hover {
    color: ${t=>t.$active?"var(--v29-primary)":"var(--v29-text)"};
  }
  &:focus-visible {
    outline: 2px solid var(--v29-primary);
    outline-offset: 2px;
  }
`,ec=()=>{const{t}=Z(),[r,n]=Xi(),[a,h]=b.useState({kind:"loading"}),d=Number(r.get("page")??"1"),g=Number.isFinite(d)&&d>0?Math.floor(d):1,x=r.get("q")??"",s=r.get("status")??"",l=s?Number(s):void 0,o=l!==void 0&&Number.isFinite(l)?l:void 0,[c,p]=b.useState(x),y=mt(),v=ae(),m=S=>({pathname:`/portal/orders/${S}`,search:v.search}),w=Dn(),I=w!=="own",E=r.get("scope")==="company"?"company":"mine",k=I?E:"mine";b.useEffect(()=>{p(x)},[x]);const $=b.useCallback(()=>{h({kind:"loading"}),el({page:g,limit:Vt,salesOrderStatusId:o,searchCol:x?1:void 0,content:x||void 0,sortCol:1,sort:!1,scope:k==="company"?w:"own"}).then(H=>{h({kind:"ready",rows:H.data.salesOrders??[],total:H.data.total??0})}).catch(()=>{h({kind:"error"})})},[g,x,o,k,w]);b.useEffect(()=>{$()},[$]);const D=S=>{const H=S.page??g,X=S.query??x,Oe=S.status??s,Pe=S.tab??k,Ie=new URLSearchParams;H>1&&Ie.set("page",String(H)),X.trim()&&Ie.set("q",X.trim()),Oe&&Ie.set("status",Oe),Pe==="company"&&Ie.set("scope","company"),n(Ie)},xe=()=>{const S=c.trim();S!==x&&D({page:1,query:S})},Ee=S=>{S.preventDefault(),xe()},re=()=>{p(""),D({page:1,query:"",status:""})},R=!!(x||s),N=(S,H)=>{var X;S.defaultPrevented||S.metaKey||S.ctrlKey||S.shiftKey||S.altKey||(X=window.getSelection())!=null&&X.toString()||y(m(H))},P=S=>{S!==k&&D({page:1,tab:S})},W=b.useRef(null),ge=b.useRef(null),ne=S=>{var X;if(!I||S.key!=="ArrowLeft"&&S.key!=="ArrowRight")return;S.preventDefault();const H=k==="mine"?"company":"mine";P(H),(X=(H==="mine"?W:ge).current)==null||X.focus()},J=a.kind==="ready"?a.total:0,se=J===0?0:(g-1)*Vt+1,he=Math.min(g*Vt,J),Ue=g>1,_e=he<J;return e.jsxs(Be,{children:[e.jsx(it,{children:e.jsxs("div",{children:[e.jsx(Re,{children:t("portal:common.eyebrow")}),e.jsx(Fe,{id:"orders-heading",children:t("portal:orders.title")}),e.jsx(Ce,{children:t("portal:orders.lead")})]})}),I&&e.jsxs(Jd,{role:"tablist","aria-labelledby":"orders-heading",onKeyDown:ne,children:[e.jsx(kn,{ref:W,type:"button",role:"tab",id:"orders-tab-mine","aria-selected":k==="mine","aria-controls":"orders-panel",tabIndex:k==="mine"?0:-1,$active:k==="mine",onClick:()=>P("mine"),children:t("portal:admin.scopeOwn")}),e.jsx(kn,{ref:ge,type:"button",role:"tab",id:"orders-tab-company","aria-selected":k==="company","aria-controls":"orders-panel",tabIndex:k==="company"?0:-1,$active:k==="company",onClick:()=>P("company"),children:t("portal:admin.scopeCompany")})]}),e.jsxs(M,{id:"orders-panel",role:I?"tabpanel":void 0,"aria-labelledby":I?k==="mine"?"orders-tab-mine":"orders-tab-company":void 0,children:[e.jsx("form",{onSubmit:Ee,children:e.jsxs(Ks,{children:[e.jsxs(V,{children:[t("portal:orders.searchLabel"),e.jsx(ee,{type:"search",inputMode:"search",value:c,placeholder:t("portal:orders.searchPlaceholder"),onChange:S=>p(S.target.value),onBlur:xe})]}),e.jsxs(V,{children:[t("portal:orders.statusLabel"),e.jsxs(ti,{value:s,onChange:S=>D({page:1,status:S.target.value}),children:[e.jsx("option",{value:"",children:t("portal:orders.allStatuses")}),Bd.map(S=>e.jsx("option",{value:S,children:t(`salesOrderStatusId:${S}`,String(S))},S))]})]}),R&&e.jsx(Kd,{type:"button",onClick:re,children:t("portal:orders.clearFilters")})]})}),a.kind==="loading"&&e.jsxs("div",{"aria-busy":"true","aria-label":t("common:loading"),children:[e.jsx(ue,{}),e.jsx(ue,{}),e.jsx(ue,{})]}),a.kind==="error"&&e.jsxs(de,{role:"alert",children:[t("portal:orders.loadFailed"),e.jsx("br",{}),e.jsx(U,{onClick:$,children:t("common:retry")})]}),a.kind==="ready"&&a.rows.length===0&&e.jsx(de,{children:x||s?e.jsxs(e.Fragment,{children:[t("portal:orders.emptyFiltered"),e.jsx(U,{type:"button",onClick:re,children:t("portal:orders.clearFilters")})]}):t("portal:orders.empty")}),a.kind==="ready"&&a.rows.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(Ud,{children:e.jsxs(_d,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:t("portal:orders.colOrderId")}),e.jsx("th",{scope:"col",children:t("portal:orders.colRoute")}),e.jsx("th",{scope:"col",children:t("portal:orders.colCreated")}),e.jsx("th",{scope:"col",children:t("portal:orders.colPackages")}),e.jsx("th",{scope:"col",children:t("portal:orders.colStatus")})]})}),e.jsx("tbody",{children:a.rows.map(S=>e.jsxs("tr",{onClick:H=>N(H,S.salesOrderId),children:[e.jsx("td",{children:e.jsx(jn,{to:m(S.salesOrderId),children:S.salesOrderId})}),e.jsx("td",{children:e.jsxs(Gd,{title:`${S.pickup} → ${S.delivery}`,"aria-label":`${S.pickup} ${t("portal:orders.routeTo")} ${S.delivery}`,children:[e.jsx("span",{"aria-hidden":"true",children:S.pickup}),e.jsxs("span",{"aria-hidden":"true",children:["→ ",S.delivery]})]})}),e.jsx("td",{children:e.jsx(wn,{children:S.createdTime})}),e.jsx("td",{children:e.jsx(ui,{children:S.packages})}),e.jsx("td",{children:e.jsx(Pt,{statusId:S.salesOrderStatusId})})]},S.salesOrderId))})]})}),e.jsx(Vd,{children:a.rows.map(S=>e.jsxs(Yd,{onClick:H=>N(H,S.salesOrderId),children:[e.jsxs(Qd,{children:[e.jsx(jn,{to:m(S.salesOrderId),children:S.salesOrderId}),e.jsx(Pt,{statusId:S.salesOrderStatusId})]}),e.jsxs(Zd,{"aria-label":`${S.pickup} ${t("portal:orders.routeTo")} ${S.delivery}`,children:[e.jsx("span",{"aria-hidden":"true",children:S.pickup}),e.jsxs("span",{"aria-hidden":"true",children:["→ ",S.delivery]})]}),e.jsxs(Xd,{children:[e.jsx(wn,{children:S.createdTime}),e.jsxs("span",{children:[S.packages," ",t("portal:orders.packageAbbrev")]})]})]},S.salesOrderId))})]}),a.kind==="ready"&&a.rows.length>0&&e.jsxs(Wd,{children:[e.jsx(qd,{children:t("portal:orders.showingRange",{from:se,to:he,total:J})}),e.jsxs(Hd,{children:[e.jsx(U,{type:"button",disabled:!Ue,onClick:()=>D({page:g-1}),children:t("portal:orders.prevPage")}),e.jsx(U,{type:"button",disabled:!_e,onClick:()=>D({page:g+1}),children:t("portal:orders.nextPage")})]})]})]})]})},tc=[{id:"orders",labelKey:"portal:admin.groupOrders",codes:Object.values(q)},{id:"users",labelKey:"portal:admin.groupUsers",codes:[L.USER_LIST,L.USER_ADD,L.USER_EDIT,L.USER_SUSPEND]},{id:"roles",labelKey:"portal:admin.groupRoles",codes:[L.ROLE_LIST,L.ROLE_ADD,L.ROLE_EDIT,L.ROLE_DELETE]}],rc=i.form`
  display: grid;
  gap: 18px;
`,nc=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 18px;
`,ic=i.fieldset`
  margin: 0;
  padding: 0;
  border: none;
  display: grid;
  gap: 2px;
  align-content: start;
`,ac=i.legend`
  padding: 0 0 8px;
  font-family: ${j};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--v29-muted);
`,sc=i(ke)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: ${j};
  font-size: 14px;
  font-weight: 600;
  color: var(--v29-primary);
  text-decoration: none;

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover {
    text-decoration: underline;
  }
`,Sn=()=>{const{t}=Z(),r=mt(),{roleId:n}=cr(),a=n!==void 0,[h,d]=b.useState(a?{kind:"loading"}:{kind:"ready",role:null}),[g,x]=b.useState(""),[s,l]=b.useState(new Set),[o,c]=b.useState(!1),[p,y]=b.useState(null),v=b.useRef(0),m=b.useCallback(()=>{if(!a)return;const E=++v.current;d({kind:"loading"}),ci().then(k=>{if(v.current!==E)return;const $=k.data.roles.find(D=>D.roleId===Number(n));if(!$){d({kind:"not-found"});return}if($.isSystem){d({kind:"locked"});return}x($.roleName),l(new Set($.permissions)),d({kind:"ready",role:$})}).catch(()=>{v.current===E&&d({kind:"error"})})},[a,n]);b.useEffect(()=>{m()},[m]),b.useEffect(()=>{a||(x(""),l(new Set),d({kind:"ready",role:null}),y(null))},[a]);const w=E=>{l(k=>{const $=new Set(k);return $.has(E)?$.delete(E):$.add(E),$}),y(null)},I=E=>{if(E.preventDefault(),!g.trim()||s.size===0){y(t("portal:admin.roleFormRequired"));return}c(!0),y(null);const k={roleName:g.trim(),permissions:Array.from(s)};(a?nl(Number(n),k):rl(k)).then(()=>r("/portal/admin/users")).catch(()=>{y(t("portal:admin.roleFormSaveFailed")),c(!1)})};return e.jsxs(Be,{children:[e.jsxs(it,{children:[e.jsxs("div",{children:[e.jsx(Re,{children:t("portal:common.eyebrow")}),e.jsx(Fe,{children:t(a?"portal:admin.roleFormEditTitle":"portal:admin.roleFormCreateTitle")}),e.jsx(Ce,{children:t("portal:admin.roleFormLead")})]}),e.jsxs(sc,{to:"/portal/admin/users",children:[e.jsx(Pn,{"aria-hidden":"true"}),t("portal:admin.backToAdmin")]})]}),h.kind==="loading"&&e.jsx(M,{children:e.jsx(de,{"aria-busy":"true",children:t("common:loading")})}),h.kind==="error"&&e.jsx(M,{children:e.jsxs(de,{role:"alert",children:[t("portal:admin.roleFormLoadFailed"),e.jsx(U,{type:"button",onClick:m,children:t("common:retry")})]})}),h.kind==="not-found"&&e.jsx(M,{children:e.jsx(de,{children:t("portal:admin.roleFormNotFound")})}),h.kind==="locked"&&e.jsx(M,{children:e.jsx(de,{children:t("portal:admin.roleFormSystem")})}),h.kind==="ready"&&e.jsxs(rc,{onSubmit:I,children:[e.jsx(M,{children:e.jsx(B,{children:e.jsxs(V,{children:[e.jsxs("span",{children:[t("portal:admin.roleName"),e.jsx(je,{children:"*"})]}),e.jsx(ee,{"aria-required":"true",value:g,onChange:E=>{x(E.target.value),y(null)}})]})})}),e.jsx(M,{children:e.jsxs(B,{children:[e.jsx(Y,{children:t("portal:admin.permissions")}),e.jsx(nc,{children:tc.map(E=>e.jsxs(ic,{children:[e.jsx(ac,{children:t(E.labelKey)}),E.codes.map(k=>e.jsxs(Ys,{children:[e.jsx("input",{type:"checkbox",checked:s.has(k),onChange:()=>w(k)}),t(`portal:permissions.${k}`,k)]},k))]},E.id))})]})}),e.jsxs(ut,{children:[e.jsx(U,{as:ke,to:"/portal/admin/users",children:t("common:cancel")}),e.jsxs(De,{type:"submit",disabled:o,children:[e.jsx(ka,{"aria-hidden":"true"}),t(a?"portal:admin.saveChanges":"portal:admin.createRole")]})]}),p&&e.jsx(le,{$danger:!0,role:"alert",children:p})]})]})},oc=Ji(),lc=[q.LIST,q.ADD,q.IMPORT,q.LIST_ALL,L.USER_LIST,L.USER_ADD,L.USER_EDIT,L.USER_SUSPEND],dc=[q.LIST,q.ADD,q.LIST_SUB],cc=[q.LIST,q.LIST_OWN],er=[{id:"owner",nameKey:"portal:roles.owner.name",descriptionKey:"portal:roles.owner.desc",permissions:oc,scope:"all"},{id:"manager",nameKey:"portal:roles.manager.name",descriptionKey:"portal:roles.manager.desc",permissions:lc,scope:"all"},{id:"staff",nameKey:"portal:roles.staff.name",descriptionKey:"portal:roles.staff.desc",permissions:dc,scope:"sub"},{id:"viewer",nameKey:"portal:roles.viewer.name",descriptionKey:"portal:roles.viewer.desc",permissions:cc,scope:"own"}],xr=[{id:"viewOrders",labelKey:"portal:roles.capabilities.viewOrders",group:"orders",codes:[q.LIST]},{id:"createOrders",labelKey:"portal:roles.capabilities.createOrders",group:"orders",codes:[q.ADD]},{id:"importOrders",labelKey:"portal:roles.capabilities.importOrders",group:"orders",codes:[q.IMPORT]},{id:"companyOrders",labelKey:"portal:roles.capabilities.companyOrders",group:"orders",codes:[q.LIST_ALL,q.LIST_SUB]},{id:"inviteMembers",labelKey:"portal:roles.capabilities.inviteMembers",group:"team",codes:[L.USER_ADD]},{id:"suspendMembers",labelKey:"portal:roles.capabilities.suspendMembers",group:"team",codes:[L.USER_SUSPEND]},{id:"manageRoles",labelKey:"portal:roles.capabilities.manageRoles",group:"team",codes:[L.ROLE_ADD,L.ROLE_EDIT,L.ROLE_DELETE]}],pc=(t,r)=>r.codes.some(n=>t.permissions.includes(n)),hc=[L.ROLE_ADD,L.ROLE_EDIT,L.ROLE_DELETE],tr=t=>!!t&&hc.some(r=>t.permissions.includes(r)),mi=t=>t.statusId===void 0||t.statusId===1,rr=(t,r)=>t.find(n=>n.roleId===r),uc=(t,r,n)=>t.filter(a=>a.uid!==n&&mi(a)&&tr(rr(r,a.roleId))).length,En=(t,r,n,a)=>{const h=r.roleId??t.roleId,d=r.statusId??t.statusId??1,g=mi(t)&&tr(rr(a,t.roleId)),x=d===1&&tr(rr(a,h));return g&&!x&&uc(n,a,t.uid)===0},In=t=>!!t&&typeof t=="object"&&t.reason==="lastOwner",mc=(t,r)=>xr.filter(n=>n.codes.some(a=>t.includes(a))&&!n.codes.some(a=>r.includes(a))),xc=t=>t.length===0?"":t.length===1?t[0]:`${t.slice(0,-1).join(", ")} and ${t[t.length-1]}`,gc=t=>!!t.isSystem,fc=(t,r)=>r.codes.some(n=>t.includes(n)),vc=(t,r)=>t.length===r.length&&t.every(n=>r.includes(n)),$n=t=>er.find(r=>vc(r.permissions,t)),gr="/api/company/rbac/invites",yc=()=>Q.get(gr).then(be(ye.ApiInviteListResponse,"getInviteList")),An=t=>Q.post(gr,t).then(be(ye.ApiInvite,"postInvite")),Rn=t=>Q.delete(`${gr}/${t}`),bc=i.div`
  display: grid;
  gap: 8px;
`,jc=i.details`
  font-family: ${j};
  font-size: 13px;

  summary {
    cursor: pointer;
    color: var(--v29-primary);
    font-weight: 700;
  }

  summary:focus-visible {
    outline: 2px solid var(--v29-primary);
    outline-offset: 2px;
  }
`,wc=i.ul`
  margin: 8px 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 6px;

  li {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--v29-text);
  }

  svg {
    width: 15px;
    height: 15px;
    color: var(--v29-primary);
    flex-shrink: 0;
  }
`,kc=i.span`
  display: inline-flex;
  color: ${t=>t.$active?"var(--v29-primary)":"var(--v29-muted)"};

  svg {
    width: 16px;
    height: 16px;
  }
`,Sc=i.div`
  margin-top: 26px;
  padding-top: 22px;
  border-top: 1px solid var(--v29-line-soft);
`,Yt=({value:t,onChange:r,roleOptions:n,placeholder:a,ariaLabel:h,ariaRequired:d})=>{const{t:g}=Z(),x=n.find(o=>String(o.roleId)===t),s=x?$n(x.permissions):void 0,l=x?xr.filter(o=>fc(x.permissions,o)):[];return e.jsxs(bc,{children:[e.jsxs(ti,{"aria-label":h,"aria-required":d,value:t,onChange:o=>r(o.target.value),children:[a&&e.jsx("option",{value:"",children:a}),n.map(o=>{const c=$n(o.permissions);return e.jsx("option",{value:o.roleId,children:c?g(c.nameKey):o.roleName},o.roleId)})]}),x&&e.jsxs(e.Fragment,{children:[s&&e.jsx(le,{children:g(s.descriptionKey)}),e.jsxs(jc,{children:[e.jsx("summary",{children:g("portal:admin.permissions")}),e.jsx(wc,{children:l.map(o=>e.jsxs("li",{children:[e.jsx(ir,{"aria-hidden":"true"}),g(o.labelKey)]},o.id))})]})]})]})},Ec=i.div`
  display: grid;
  gap: 18px;
`,Cn=i.div`
  display: grid;
  grid-template-columns: ${t=>t.$single?"1fr":"minmax(0, 1.3fr) minmax(280px, 0.7fr)"};
  gap: 18px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,On=i.form`
  display: grid;
  gap: 14px;
`,Ic=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`,nr=i.span`
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding: 5px 9px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--v29-primary) 9%, transparent);
  color: var(--v29-primary);
  font-family: ${j};
  font-size: 12px;
  font-weight: 700;
`,St=i(nr)`
  background: var(--v29-line-soft);
  color: var(--v29-muted);
`,Qt=i.div`
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
`,$c=i.div`
  display: flex;
  gap: 8px;
`,Ac=i.span`
  display: inline-flex;
  align-items: center;
  min-height: 42px;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid var(--v29-line-soft);
  background: var(--v29-raised);
  color: var(--v29-muted);
  font-family: ${j};
  font-size: 14px;
  user-select: none;
`,Rc=new Intl.DateTimeFormat("en-AU",{day:"numeric",month:"short",year:"numeric"}),Cc=t=>{const r=new Date(t);return Number.isNaN(r.getTime())?t:Rc.format(r)},Oc=()=>{const{t}=Z(),r=tt(f=>f.uid),n=Ne(L.USER_ADD),a=Ne(L.USER_EDIT),h=Ne(L.USER_SUSPEND),d=Ne(L.ROLE_LIST),g=Ne(L.ROLE_ADD),x=Ne(L.ROLE_EDIT),s=Ne(L.ROLE_DELETE),l=d||n||a||h,[o,c]=b.useState({kind:"loading"}),[p,y]=b.useState({kind:"loading"}),[v,m]=b.useState({name:"",email:"",roleId:""}),[w,I]=b.useState(!1),[E,k]=b.useState(null),[$,D]=b.useState(null),[xe,Ee]=b.useState(""),[re,R]=b.useState(!1),[N,P]=b.useState(null),[W,ge]=b.useState(null),[ne,J]=b.useState(null),[se,he]=b.useState(null),[Ue,_e]=b.useState(!1),[S,H]=b.useState(null),[X,Oe]=b.useState({kind:"loading"}),[Pe,Ie]=b.useState({mobile:"",roleId:""}),[xi,fr]=b.useState(!1),[ft,Qe]=b.useState(null),[vt,Ze]=b.useState(null),[vr,yt]=b.useState(null),Mt=b.useRef(0),Dt=b.useRef(0),Ft=b.useRef(0),Xe=b.useCallback(()=>{const f=++Mt.current;c({kind:"loading"}),al().then(A=>{Mt.current===f&&c({kind:"ready",users:A.data.users})}).catch(()=>{Mt.current===f&&c({kind:"error"})})},[]),Te=b.useCallback(()=>{const f=++Dt.current;y({kind:"loading"}),ci().then(A=>{Dt.current===f&&y({kind:"ready",roles:A.data.roles})}).catch(()=>{Dt.current===f&&y({kind:"error"})})},[]),Je=b.useCallback(()=>{const f=++Ft.current;Oe({kind:"loading"}),yc().then(A=>{Ft.current===f&&Oe({kind:"ready",invites:A.data.invites})}).catch(()=>{Ft.current===f&&Oe({kind:"error"})})},[]);b.useEffect(()=>{Xe()},[Xe]),b.useEffect(()=>{l&&Te()},[l,Te]),b.useEffect(()=>{Je()},[Je]);const zt=p.kind==="ready"?p.roles:[],yr=f=>A=>{m(K=>({...K,[f]:A.target.value})),k(null)},gi=f=>{m(A=>({...A,roleId:f})),k(null)},fi=f=>{f.preventDefault();const A=Number(v.roleId);if(!v.name.trim()||!A){k({kind:"error",text:t("portal:admin.addUserRequired")});return}I(!0),k(null),sl({name:v.name.trim(),email:v.email.trim(),roleId:A}).then(K=>{k({kind:"success",text:t("portal:admin.addUserSuccess",{name:K.data.name})}),m({name:"",email:"",roleId:""}),Xe(),l&&Te()}).catch(()=>k({kind:"error",text:t("portal:admin.addUserFailed")})).finally(()=>I(!1))},vi=f=>{D(f.uid),Ee(String(f.roleId)),P(null),ge(null)},yi=(f,A)=>{R(!0),rn({uid:f.uid,roleId:A}).then(K=>{P({kind:"success",text:t("portal:admin.userUpdated",{name:K.data.name,role:K.data.roleName})}),D(null),ge(null),Xe(),l&&Te()}).catch(K=>P({kind:"error",text:In(K)?t("portal:admin.lastOwnerBlock"):t("portal:admin.userUpdateFailed")})).finally(()=>R(!1))},br=f=>{const A=Number(xe);if(!A){P({kind:"error",text:t("portal:admin.rolesUnavailable")});return}const K=p.kind==="ready"?p.roles:[],at=o.kind==="ready"?o.users:[];if(En(f,{roleId:A},at,K)){P({kind:"error",text:t("portal:admin.lastOwnerBlock")});return}const st=f.uid===r,$i=(W==null?void 0:W.uid)===f.uid;if(st&&!$i&&A!==f.roleId){const Ut=K.find(ot=>ot.roleId===f.roleId),_t=K.find(ot=>ot.roleId===A),wr=mc((Ut==null?void 0:Ut.permissions)??[],(_t==null?void 0:_t.permissions)??[]);if(wr.length>0){ge({uid:f.uid,message:t("portal:admin.selfDemoteConfirm",{capabilities:xc(wr.map(ot=>t(ot.labelKey)))})});return}}yi(f,A)},Bt=f=>f.statusId===void 0||f.statusId===1,jr=f=>{const A=Bt(f)?2:1,K=p.kind==="ready"?p.roles:[],at=o.kind==="ready"?o.users:[];if(En(f,{statusId:A},at,K)){P({kind:"error",text:t("portal:admin.lastOwnerBlock")});return}J(f.uid),rn({uid:f.uid,statusId:A}).then(()=>{P(null),Xe()}).catch(st=>P({kind:"error",text:In(st)?t("portal:admin.lastOwnerBlock"):t("portal:admin.userUpdateFailed")})).finally(()=>J(null))},bi=f=>{f.preventDefault();const A=Number(Pe.roleId),K=Pe.mobile.replace(/[^\d]/g,"");if(!K||!A){Qe({kind:"error",text:t("portal:admin.inviteRequired","Enter a mobile number and pick a role.")});return}const at=`+61${K.replace(/^0/,"")}`;fr(!0),Qe(null),An({phone:at,roleId:A}).then(st=>{Qe({kind:"success",text:t("portal:admin.inviteSentNotice",{phone:st.data.phone,defaultValue:"Invite sent to {{phone}}."})}),Ie({mobile:"",roleId:""}),Je()}).catch(()=>Qe({kind:"error",text:t("portal:admin.inviteSendFailed","We couldn't send that invite. Try again.")})).finally(()=>fr(!1))},ji=f=>{yt(f.id),Ze(null),An({phone:f.phone,roleId:f.roleId}).then(()=>Rn(f.id)).then(()=>{Ze(null),Je()}).catch(()=>Ze({kind:"error",text:t("portal:admin.inviteResendFailed","We couldn't resend that invite. Try again.")})).finally(()=>yt(null))},wi=f=>{yt(f.id),Ze(null),Rn(f.id).then(()=>{Ze(null),Je()}).catch(()=>Ze({kind:"error",text:t("portal:admin.inviteRevokeFailed","We couldn't revoke that invite. Try again.")})).finally(()=>yt(null))},ki=f=>{if(H(null),f.memberCount>0){he({roleId:f.roleId,kind:"blocked",memberCount:f.memberCount});return}he({roleId:f.roleId,kind:"confirm"})},Si=f=>{_e(!0),il(f.roleId).then(()=>{H({kind:"success",text:t("portal:admin.roleDeleted")}),he(null),Te()}).catch(()=>H({kind:"error",text:t("portal:admin.deleteFailed")})).finally(()=>_e(!1))},Ei=a||h?5:4,Ii=n?5:4;return e.jsxs(Be,{children:[e.jsx(it,{children:e.jsxs("div",{children:[e.jsx(Re,{children:t("portal:common.eyebrow")}),e.jsx(Fe,{children:t("portal:admin.title")}),e.jsx(Ce,{children:t("portal:admin.lead")})]})}),e.jsxs(Ec,{children:[e.jsxs(Cn,{$single:!n,children:[e.jsx(M,{children:e.jsxs(B,{children:[e.jsx(Y,{children:t("portal:admin.usersTitle")}),o.kind==="loading"&&e.jsxs("div",{"aria-busy":"true","aria-label":t("common:loading"),children:[e.jsx(ue,{}),e.jsx(ue,{}),e.jsx(ue,{})]}),o.kind==="error"&&e.jsxs(de,{role:"alert",children:[t("portal:admin.usersLoadFailed"),e.jsx(U,{type:"button",onClick:Xe,children:t("common:retry")})]}),o.kind==="ready"&&o.users.length===0&&e.jsx(de,{children:t("portal:admin.usersEmpty")}),o.kind==="ready"&&o.users.length>0&&e.jsx(He,{children:e.jsxs(Ke,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:t("portal:admin.name")}),e.jsx("th",{scope:"col",children:t("portal:admin.email")}),e.jsx("th",{scope:"col",children:t("portal:admin.role")}),e.jsx("th",{scope:"col",children:t("portal:admin.status")}),(a||h)&&e.jsx("th",{scope:"col",children:t("portal:admin.actions")})]})}),e.jsxs("tbody",{children:[o.users.map(f=>e.jsxs("tr",{children:[e.jsxs("td",{children:[f.name," ",f.uid===r&&e.jsx(St,{children:t("portal:admin.you")})]}),e.jsx("td",{children:f.email||"-"}),e.jsx("td",{children:$===f.uid?e.jsx(Yt,{ariaLabel:t("portal:admin.role"),value:xe,onChange:A=>{Ee(A),ge(null),P(null)},roleOptions:zt}):f.roleName||"-"}),e.jsx("td",{children:Bt(f)?e.jsx(nr,{children:t("portal:admin.active")}):e.jsx(St,{children:t("portal:admin.suspended")})}),(a||h)&&e.jsx("td",{children:e.jsx(Qt,{children:$===f.uid?e.jsxs(e.Fragment,{children:[(W==null?void 0:W.uid)===f.uid&&e.jsx(le,{$danger:!0,role:"alert",children:W.message}),(W==null?void 0:W.uid)===f.uid?e.jsx(ct,{type:"button",disabled:re,onClick:()=>br(f),children:t("portal:admin.saveUser")}):e.jsx(De,{type:"button",disabled:re,onClick:()=>br(f),children:t("portal:admin.saveUser")}),e.jsx(U,{type:"button",disabled:re,onClick:()=>{D(null),ge(null)},children:t("common:cancel")})]}):e.jsxs(e.Fragment,{children:[a&&e.jsx(U,{type:"button",onClick:()=>vi(f),children:t("portal:admin.editUser")}),h&&(Bt(f)?e.jsx(ct,{type:"button",disabled:ne===f.uid,onClick:()=>jr(f),children:t("portal:admin.suspend")}):e.jsx(U,{type:"button",disabled:ne===f.uid,onClick:()=>jr(f),children:t("portal:admin.reactivate")}))]})})})]},f.uid)),N&&e.jsx("tr",{children:e.jsx("td",{colSpan:Ei,children:e.jsx(le,{$danger:N.kind==="error",role:N.kind==="error"?"alert":"status",children:N.text})})})]})]})})]})}),n&&e.jsx(M,{children:e.jsxs(B,{children:[e.jsx(Y,{children:t("portal:admin.addUserTitle")}),e.jsxs(On,{onSubmit:fi,children:[e.jsxs(V,{children:[e.jsxs("span",{children:[t("portal:admin.name"),e.jsx(je,{children:"*"})]}),e.jsx(ee,{"aria-required":"true",value:v.name,onChange:yr("name")})]}),e.jsxs(V,{children:[t("portal:admin.email"),e.jsx(ee,{inputMode:"email",type:"email",value:v.email,onChange:yr("email")})]}),e.jsxs(V,{children:[e.jsxs("span",{children:[t("portal:admin.role"),e.jsx(je,{children:"*"})]}),e.jsx(Yt,{ariaRequired:!0,value:v.roleId,onChange:gi,roleOptions:zt,placeholder:t("portal:admin.selectRole")})]}),p.kind==="error"&&e.jsxs(le,{$danger:!0,role:"alert",children:[t("portal:admin.rolesUnavailable")," ",e.jsx(U,{type:"button",onClick:Te,children:t("common:retry")})]}),e.jsx(ut,{children:e.jsxs(De,{type:"submit",disabled:w,children:[e.jsx($r,{"aria-hidden":"true"}),t("portal:admin.addUser")]})}),E&&e.jsx(le,{$danger:E.kind==="error",role:E.kind==="error"?"alert":"status",children:E.text})]})]})})]}),e.jsxs(Cn,{$single:!n,children:[e.jsx(M,{children:e.jsxs(B,{children:[e.jsxs(Y,{children:[e.jsx(Ia,{"aria-hidden":"true"}),t("portal:admin.pending")]}),X.kind==="loading"&&e.jsxs("div",{"aria-busy":"true","aria-label":t("common:loading"),children:[e.jsx(ue,{}),e.jsx(ue,{})]}),X.kind==="error"&&e.jsxs(de,{role:"alert",children:[t("portal:admin.invitesLoadFailed","We couldn't load invites."),e.jsx(U,{type:"button",onClick:Je,children:t("common:retry")})]}),X.kind==="ready"&&X.invites.length===0&&e.jsx(de,{children:t("portal:admin.invitesEmpty","No pending invites.")}),X.kind==="ready"&&X.invites.length>0&&e.jsx(He,{children:e.jsxs(Ke,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:t("portal:admin.invitePhone")}),e.jsx("th",{scope:"col",children:t("portal:admin.role")}),e.jsx("th",{scope:"col",children:t("portal:admin.status")}),e.jsx("th",{scope:"col",children:t("portal:admin.expiresOn","Expires")}),n&&e.jsx("th",{scope:"col",children:t("portal:admin.actions")})]})}),e.jsxs("tbody",{children:[X.invites.map(f=>e.jsxs("tr",{children:[e.jsx("td",{children:f.phone}),e.jsx("td",{children:f.roleName||"-"}),e.jsx("td",{children:e.jsx(St,{children:t("portal:admin.pending")})}),e.jsx("td",{children:Cc(f.expiresAt)}),n&&e.jsx("td",{children:e.jsxs(Qt,{children:[e.jsx(U,{type:"button",disabled:vr===f.id,onClick:()=>ji(f),children:t("portal:admin.resend")}),e.jsx(ct,{type:"button",disabled:vr===f.id,onClick:()=>wi(f),children:t("portal:admin.revoke")})]})})]},f.id)),vt&&e.jsx("tr",{children:e.jsx("td",{colSpan:Ii,children:e.jsx(le,{$danger:vt.kind==="error",role:vt.kind==="error"?"alert":"status",children:vt.text})})})]})]})})]})}),n&&e.jsx(M,{children:e.jsxs(B,{children:[e.jsx(Y,{children:t("portal:admin.inviteSectionTitle","Invite by Phone")}),e.jsxs(On,{onSubmit:bi,children:[e.jsxs(V,{children:[e.jsxs("span",{children:[t("portal:admin.invitePhone"),e.jsx(je,{children:"*"})]}),e.jsxs($c,{children:[e.jsx(Ac,{"aria-hidden":"true",children:"+61"}),e.jsx(ee,{type:"tel",inputMode:"tel",autoComplete:"tel","aria-required":"true",value:Pe.mobile,onChange:f=>{Ie(A=>({...A,mobile:f.target.value})),Qe(null)}})]})]}),e.jsxs(V,{children:[e.jsxs("span",{children:[t("portal:admin.role"),e.jsx(je,{children:"*"})]}),e.jsx(Yt,{ariaRequired:!0,value:Pe.roleId,onChange:f=>{Ie(A=>({...A,roleId:f})),Qe(null)},roleOptions:zt,placeholder:t("portal:admin.selectRole")})]}),p.kind==="error"&&e.jsxs(le,{$danger:!0,role:"alert",children:[t("portal:admin.rolesUnavailable")," ",e.jsx(U,{type:"button",onClick:Te,children:t("common:retry")})]}),e.jsx(ut,{children:e.jsxs(De,{type:"submit",disabled:xi,children:[e.jsx($r,{"aria-hidden":"true"}),t("portal:admin.sendInvite","Send Invite")]})}),ft&&e.jsx(le,{$danger:ft.kind==="error",role:ft.kind==="error"?"alert":"status",children:ft.text})]})]})})]}),d&&e.jsx(M,{children:e.jsxs(B,{children:[e.jsxs(Y,{children:[e.jsx(Sa,{"aria-hidden":"true"}),t("portal:admin.rolesTitle")]}),p.kind==="loading"&&e.jsxs("div",{"aria-busy":"true","aria-label":t("common:loading"),children:[e.jsx(ue,{}),e.jsx(ue,{})]}),p.kind==="error"&&e.jsxs(de,{role:"alert",children:[t("portal:admin.rolesLoadFailed"),e.jsx(U,{type:"button",onClick:Te,children:t("common:retry")})]}),p.kind==="ready"&&p.roles.length===0&&e.jsx(de,{children:t("portal:admin.rolesEmpty")}),p.kind==="ready"&&p.roles.length>0&&e.jsx(He,{children:e.jsxs(Ke,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:t("portal:admin.role")}),e.jsx("th",{scope:"col",children:t("portal:admin.permissions")}),e.jsx("th",{scope:"col",children:t("portal:admin.members")}),(x||s)&&e.jsx("th",{scope:"col",children:t("portal:admin.actions")})]})}),e.jsx("tbody",{children:p.roles.map(f=>e.jsxs("tr",{children:[e.jsxs("td",{children:[f.roleName," ",f.isSystem&&e.jsx(St,{children:t("portal:admin.systemRole")})]}),e.jsx("td",{children:e.jsx(Ic,{children:f.permissions.map(A=>e.jsx(nr,{children:t(`portal:permissions.${A}`,A)},A))})}),e.jsx("td",{children:f.memberCount}),(x||s)&&e.jsx("td",{children:gc(f)?null:e.jsx(Qt,{children:(se==null?void 0:se.roleId)===f.roleId&&se.kind==="confirm"?e.jsxs(e.Fragment,{children:[e.jsx(le,{$danger:!0,children:t("portal:admin.deleteConfirm")}),e.jsx(ct,{type:"button",disabled:Ue,onClick:()=>Si(f),children:t("portal:admin.confirmDelete")}),e.jsx(U,{type:"button",disabled:Ue,onClick:()=>he(null),children:t("common:cancel")})]}):e.jsxs(e.Fragment,{children:[x&&e.jsx(U,{as:ke,to:`/portal/admin/roles/${f.roleId}`,children:t("portal:admin.editRole")}),s&&e.jsx(ct,{type:"button",onClick:()=>ki(f),children:t("portal:admin.deleteRole")}),(se==null?void 0:se.roleId)===f.roleId&&se.kind==="blocked"&&e.jsx(le,{$danger:!0,role:"alert",children:t("portal:admin.deleteBlocked",{count:se.memberCount})})]})})})]},f.roleId))})]})}),e.jsxs(Sc,{children:[e.jsx(Y,{children:t("portal:admin.permissions")}),e.jsx(He,{children:e.jsxs(Ke,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col"}),er.map(f=>e.jsx("th",{scope:"col",children:t(f.nameKey)},f.id))]})}),e.jsx("tbody",{children:xr.map(f=>e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:t(f.labelKey)}),er.map(A=>{const K=pc(A,f);return e.jsx("td",{children:e.jsx(kc,{$active:K,children:K?e.jsx(ir,{"aria-hidden":"true"}):e.jsx("span",{"aria-hidden":"true",children:"–"})})},A.id)})]},f.id))})]})})]}),S&&e.jsx(le,{$danger:S.kind==="error",role:S.kind==="error"?"alert":"status",children:S.text}),g&&e.jsx(ut,{children:e.jsxs(De,{as:ke,to:"/portal/admin/roles/new",children:[e.jsx(wa,{"aria-hidden":"true"}),t("portal:admin.createRole")]})})]})})]})]})},Ae=({children:t})=>{const r=dr(),n=ae();if(!r){const a=rt("portalLogin");return e.jsx(fe,{to:ea(),replace:!0,state:a?{from:`${n.pathname}${n.search}`}:void 0})}return e.jsx(e.Fragment,{children:t})},qe=({children:t,code:r})=>Ne(r)?e.jsx(e.Fragment,{children:t}):e.jsx(fe,{to:"/portal",replace:!0}),Pc=()=>{const{t}=Z(),r=mt(),{state:n,lookup:a}=Fn(),[h,d]=b.useState(""),g=async()=>{const s=await a(h);(s==null?void 0:s.kind)==="ok"&&(oa("public",s.shipment.orderId),r("/track/result",{state:{orderId:s.shipment.orderId,shipment:s.shipment}}))},x=n.kind==="done"?n.result:null;return e.jsxs(zn,{title:t("tracking:guest.pageTitle.entry"),audience:"public",children:[e.jsx(Bn,{eyebrow:t("tracking:guest.entry.eyebrow"),title:t("tracking:guest.entry.title"),subtitle:t("tracking:guest.entry.subtitle")}),e.jsx(ta,{children:e.jsx(ra,{children:e.jsxs(na,{style:{paddingTop:24},children:[e.jsx(ia,{}),e.jsx(aa,{value:h,onChange:d,onSubmit:g,busy:n.kind==="loading",message:sa(x,t)})]})})})]})},Tc=()=>{const{t}=Z(),r=ae(),n=mt(),a=da(),h=pr("nextStopMap"),d=r.state??null,[g]=b.useState(()=>{const c=typeof(d==null?void 0:d.orderId)=="string"?d.orderId:null;if(c){const y=a==="PUSH"?ca.safeParse(d==null?void 0:d.shipment):null;return{orderId:c,shipment:y!=null&&y.success?y.data:null}}const p=pa("public");return p?{orderId:p,shipment:null}:null}),{state:x,lookup:s}=Fn(g);if(b.useEffect(()=>{(d==null?void 0:d.shipment)!==void 0&&g&&n(r.pathname,{replace:!0,state:{orderId:g.orderId}})},[]),!g)return e.jsx(fe,{to:"/track",replace:!0});const l=x.kind!=="done",o=x.kind==="done"?x.result:null;return e.jsxs(zn,{title:t("tracking:guest.pageTitle.result"),audience:"public",children:[e.jsx(Bn,{backTo:{to:"/track",label:t("tracking:guest.result.back")},title:t("tracking:guest.result.title"),subtitle:t("tracking:guest.result.subtitle"),focusTitle:!0}),e.jsx(ha,{loading:l,result:o,onRetry:()=>void s(g.orderId),nextStopMapOn:h})]})},Lc=()=>{const{token:t=""}=cr(),{search:r}=ae(),n=pr("consigneeTrack");return t==="result"?e.jsx(Tc,{}):t==="delivery"?n?e.jsx(la,{}):e.jsx(fe,{to:{pathname:"/track",search:r},replace:!0}):e.jsx(fe,{to:{pathname:"/track",search:r},replace:!0})},Nc=i.div`
  min-height: 100vh;
  background-color: ${t=>t.theme.background};
  color: ${t=>t.theme.text.primary};
  transition: background-color 0.3s ease, color 0.3s ease;
`,Mc="https://www.senditgo.com",We={"/":{title:"SenditGo — Transportation Management System",description:"SenditGo — intelligent transport management, launching 2027. Our AI, SAM, weighs thousands of combinations and hands back a dispatch-ready plan in seconds. Get early access."},"/install":{title:"Get the SenditGo driver app",description:"Install the SenditGo driver app for iOS or Android — scan the QR code or tap your store to download and start running deliveries."},"/company":{title:"About SenditGo",description:"SenditGo is intelligent transport management for local and last-mile fleets, launching 2027."},"/about":{title:"About SenditGo",description:"Who SenditGo is, how we work, and where we are going — intelligent transport management for local and last-mile fleets."},"/about-v1":{title:"About SenditGo — story demo",description:"Local demo of the SenditGo story About page. Not a shipping surface."},"/contact":{title:"Contact SenditGo",description:"Book a product demo, ask about plans and pricing, integrations, or find the right solution for your fleet."},"/privacy":{title:"Privacy Policy — SenditGo",description:"How SenditGo collects, uses, and protects personal and operational data across its fleet platform and driver app."},"/account-deletion":{title:"Account & Data Deletion — SenditGo",description:"How to request deletion of your SenditGo account and the associated data, and what gets removed."},"/data-safety":{title:"Data Safety — SenditGo",description:"How SenditGo handles, secures, and shares operational and location data across the platform and driver app."},"/portal/login":{title:"Sign In — SenditGo",description:"Sign in to the SenditGo portal."},"/portal/orders":{title:"Orders — SenditGo",description:"Track and manage your SenditGo orders."},"/portal/orders/new":{title:"Create Order — SenditGo",description:"Prepare a shipment draft in the SenditGo portal."},"/portal/orders/import":{title:"Import Orders — SenditGo",description:"Validate a CSV order batch before import."},"/portal/orders/:salesOrderId":{title:"Order Detail — SenditGo",description:"Review SenditGo order tracking, handoff, and package detail."},"/portal/billing":{title:"Billing & Payments — SenditGo",description:"How your SenditGo account is billed and paid."},"/portal/admin/users":{title:"Users & Roles — SenditGo",description:"Manage portal users, roles, and permissions in SenditGo."},"/portal/admin/roles/new":{title:"Create Role — SenditGo",description:"Create a portal role and choose its permissions."},"/portal/admin/roles/:roleId":{title:"Edit Role — SenditGo",description:"Edit a portal role and its permissions."}};function Dc(t){const r=t.toLowerCase();return r.startsWith("/track/")?We["/track"]??We["/"]:r.startsWith("/portal/orders/")&&r!=="/portal/orders/new"&&r!=="/portal/orders/import"?We["/portal/orders/:salesOrderId"]:r.startsWith("/portal/admin/roles/")?r==="/portal/admin/roles/new"?We["/portal/admin/roles/new"]:We["/portal/admin/roles/:roleId"]:We[r]??We["/"]}function Fc(){const{pathname:t}=ae(),r=t.replace(/\/+$/,"")||"/",n=Dc(r),a=`${Mc}${r}`,h=t.toLowerCase(),d=h.startsWith("/portal"),g=h.startsWith("/track/"),x=h==="/about-v1";return e.jsxs(fa,{children:[e.jsx("title",{children:n.title}),e.jsx("meta",{name:"description",content:n.description}),e.jsx("link",{rel:"canonical",href:a}),(d||g||x)&&e.jsx("meta",{name:"robots",content:"noindex"}),e.jsx("meta",{property:"og:title",content:n.title}),e.jsx("meta",{property:"og:description",content:n.description}),e.jsx("meta",{property:"og:url",content:a}),e.jsx("meta",{name:"twitter:title",content:n.title}),e.jsx("meta",{name:"twitter:description",content:n.description})]})}function zc(){const{search:t}=ae();return b.useEffect(()=>{ga()},[t]),null}function Bc(){const{search:t}=ae();return rt("aboutPage")?e.jsx(Za,{}):e.jsx(fe,{to:{pathname:"/company",search:t},replace:!0})}function Uc(){const{search:t}=ae();return rt("aboutV1")?e.jsx(ns,{}):e.jsx(fe,{to:{pathname:"/",search:t},replace:!0})}function _c(){const{search:t}=ae();return rt("guestTrack")?e.jsx(Pc,{}):e.jsx(fe,{to:{pathname:"/",search:t},replace:!0})}function Gc(){const{search:t}=ae();return rt("guestTrack")?e.jsx(Lc,{}):e.jsx(fe,{to:{pathname:"/",search:t},replace:!0})}function qc(){const{search:t}=ae();return e.jsx(fe,{to:{pathname:"/",search:t},replace:!0})}function Wc(){const{search:t}=ae();return rt("portalLogin")?e.jsx(zd,{}):e.jsx(fe,{to:{pathname:"/",search:t},replace:!0})}function Hc(){var n;const t=tt(a=>a.permissionList),r=((n=ri.flatMap(a=>a.items).find(a=>a.permission===null||t.includes(a.permission)))==null?void 0:n.path)??"/portal/billing";return e.jsx(fe,{to:r,replace:!0})}function Kc(){return e.jsxs(ua,{children:[e.jsx(Aa,{}),e.jsx(Nc,{children:e.jsxs(ma,{basename:"/tms-official-web-preview/",children:[e.jsx(zc,{}),e.jsx(Fc,{}),e.jsxs(xa,{children:[e.jsx(_,{path:"/",element:e.jsx(Hs,{})}),e.jsx(_,{path:"/install",element:e.jsx(Ka,{})}),e.jsx(_,{path:"/company",element:e.jsx(is,{})}),e.jsx(_,{path:"/about",element:e.jsx(Bc,{})}),e.jsx(_,{path:"/about-v1",element:e.jsx(Uc,{})}),e.jsx(_,{path:"/contact",element:e.jsx(ls,{})}),e.jsx(_,{path:"/privacy",element:e.jsx(cs,{})}),e.jsx(_,{path:"/account-deletion",element:e.jsx(ps,{})}),e.jsx(_,{path:"/data-safety",element:e.jsx(us,{})}),e.jsx(_,{path:"/portal/login",caseSensitive:!0,element:e.jsx(Wc,{})}),e.jsx(_,{path:"/track",caseSensitive:!0,element:e.jsx(_c,{})}),e.jsx(_,{path:"/track/:token",caseSensitive:!0,element:e.jsx(Gc,{})}),e.jsx(_,{caseSensitive:!0,path:"/portal/orders",element:e.jsx(Ae,{children:e.jsx(qe,{code:q.LIST,children:e.jsx(ec,{})})})}),e.jsx(_,{caseSensitive:!0,path:"/portal/orders/new",element:e.jsx(Ae,{children:e.jsx(qe,{code:q.ADD,children:e.jsx(uo,{})})})}),e.jsx(_,{caseSensitive:!0,path:"/portal/orders/import",element:e.jsx(Ae,{children:e.jsx(qe,{code:q.IMPORT,children:e.jsx(Po,{})})})}),e.jsx(_,{caseSensitive:!0,path:"/portal/orders/:salesOrderId",element:e.jsx(Ae,{children:e.jsx(qe,{code:q.LIST,children:e.jsx(ud,{})})})}),e.jsx(_,{caseSensitive:!0,path:"/portal/billing",element:e.jsx(Ae,{children:e.jsx(Ed,{})})}),e.jsx(_,{caseSensitive:!0,path:"/portal/admin/users",element:e.jsx(Ae,{children:e.jsx(qe,{code:L.USER_LIST,children:e.jsx(Oc,{})})})}),e.jsx(_,{caseSensitive:!0,path:"/portal/admin/roles/new",element:e.jsx(Ae,{children:e.jsx(qe,{code:L.ROLE_ADD,children:e.jsx(Sn,{})})})}),e.jsx(_,{caseSensitive:!0,path:"/portal/admin/roles/:roleId",element:e.jsx(Ae,{children:e.jsx(qe,{code:L.ROLE_EDIT,children:e.jsx(Sn,{})})})}),e.jsx(_,{path:"/portal",caseSensitive:!0,element:e.jsx(Ae,{children:e.jsx(Hc,{})})}),e.jsx(_,{path:"*",element:e.jsx(qc,{})})]})]})})]})}async function Vc(){}Vc().then(()=>{Ai.createRoot(document.getElementById("root")).render(e.jsx(F.StrictMode,{children:e.jsx(va,{children:e.jsx(Kc,{})})}))});
