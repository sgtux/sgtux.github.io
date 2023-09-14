import{o as d,e as y,f as e,d as P,q as w,z as k,v as p,A as T,_ as z,B as C,C as H,D as M,c as b,a as R,E as A,G as N,H as D,I,J as E,K as L,L as j,M as q,N as F,O,P as U,s as W,Q as Z,R as G,g as o,l as r,t as J,n as g,i as $,S as V,T as B,m as K,U as Q,j as X,V as x,W as Y,X as ee,F as se,Y as te,Z as oe,$ as le,a0 as ae,a1 as ne,a2 as ie,a3 as ce}from"./index-b4673ef9.js";import{N as re}from"./NoteDisplay-d32b1afd.js";import ue from"./DrawingControls-a40a2246.js";const de={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},_e=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),pe=[_e];function ve(i,u){return d(),y("svg",de,pe)}const me={name:"carbon-renew",render:ve},he={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},fe=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),ge=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),xe=[fe,ge];function we(i,u){return d(),y("svg",he,xe)}const ke={name:"carbon-time",render:we},ye="/workshop-checklist/assets/logo-title-horizontal-96c3c915.png",Se=P({__name:"NoteStatic",props:{class:{type:String,required:!1}},setup(i){const u=i,m=w(()=>{var l,a,s;return(s=(a=(l=k.value)==null?void 0:l.meta)==null?void 0:a.slide)==null?void 0:s.note}),h=w(()=>{var l,a,s;return(s=(a=(l=k.value)==null?void 0:l.meta)==null?void 0:a.slide)==null?void 0:s.noteHTML});return(l,a)=>(d(),p(re,{class:T(u.class),note:m.value,"note-html":h.value},null,8,["class","note","note-html"]))}}),Ce=z(Se,[["__file","/home/tux/projects/slidev-presentations/workshop-checklist/node_modules/@slidev/client/internals/NoteStatic.vue"]]),v=i=>(ie("data-v-574fd206"),i=i(),ce(),i),be={class:"bg-main h-full slidev-presenter"},Ne={class:"grid-container"},$e={class:"grid-section top flex"},Ve=v(()=>e("img",{src:ye,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2",style:{height:"3.5rem"}},null,-1)),Be=v(()=>e("div",{class:"flex-auto"},null,-1)),Pe={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},Te=v(()=>e("div",{class:"context"}," current ",-1)),ze=v(()=>e("div",{class:"context"}," next ",-1)),He={class:"grid-section note overflow-auto"},Me={class:"grid-section bottom"},Re={class:"progress-bar"},Ae=P({__name:"Presenter",setup(i){const u=C();H(),M(u);const m=b.titleTemplate.replace("%s",b.title||"Slidev");R({title:`Presenter - ${m}`});const{timer:h,resetTimer:l}=A(),a=C([]),s=w(()=>N.value<D.value?{route:k.value,clicks:N.value+1}:I.value?{route:E.value,clicks:0}:null);return L(),j(()=>{const S=u.value.querySelector("#slide-content"),n=q(F()),f=O();U(()=>{if(!f.value||Z.value||!G.value)return;const c=S.getBoundingClientRect(),t=(n.x-c.left)/c.width*100,_=(n.y-c.top)/c.height*100;if(!(t<0||t>100||_<0||_>100))return{x:t,y:_}},c=>{W.cursor=c})}),(S,n)=>{const f=ke,c=me;return d(),y(se,null,[e("div",be,[e("div",Ne,[e("div",$e,[Ve,Be,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:n[0]||(n[0]=(...t)=>o(l)&&o(l)(...t))},[r(f,{class:"absolute"}),r(c,{class:"absolute opacity-0"})]),e("div",Pe,J(o(h)),1)]),e("div",{ref_key:"main",ref:u,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:g(o($))},[r(B,{key:"main",class:"h-full w-full"},{default:V(()=>[r(te,{context:"presenter"})]),_:1}),Te],4),e("div",{class:"relative grid-section next flex flex-col p-2 lg:p-4",style:g(o($))},[s.value?(d(),p(B,{key:"next",class:"h-full w-full"},{default:V(()=>{var t;return[r(o(le),{is:(t=s.value.route)==null?void 0:t.component,"clicks-elements":a.value,"onUpdate:clicksElements":n[1]||(n[1]=_=>a.value=_),clicks:s.value.clicks,"clicks-disabled":!1,class:T(o(oe)(s.value.route)),route:s.value.route,context:"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):K("v-if",!0),ze],4),e("div",He,[(d(),p(Ce,{key:2,class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4"}))]),e("div",Me,[r(ae,{persist:!0})]),(d(),p(ue,{key:0}))]),e("div",Re,[e("div",{class:"progress h-2px bg-primary transition-all",style:g({width:`${(o(Q)-1)/(o(X)-1)*100}%`})},null,4)])]),r(ne),r(ee,{modelValue:o(x),"onUpdate:modelValue":n[2]||(n[2]=t=>Y(x)?x.value=t:null)},null,8,["modelValue"])],64)}}});const Le=z(Ae,[["__scopeId","data-v-574fd206"],["__file","/home/tux/projects/slidev-presentations/workshop-checklist/node_modules/@slidev/client/internals/Presenter.vue"]]);export{Le as default};