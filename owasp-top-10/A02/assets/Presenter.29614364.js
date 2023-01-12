import{o as u,c as v,a as e,r as $,u as z,b as f,d as S,i as C,e as b,n as x,t as N,f as y,g as h,h as s,j as P,k as R,l as H,m as L,p as I,q as D,s as j,v as E,w as F,x as m,y as T,z as V,_ as A,A as U,B as W,C as k,D as q,F as O,E as Y,G as Z,H as B,I as G,J,K,L as Q,M as X,N as ee,O as te,P as se,Q as oe,S as ne,R as le,T as ae,U as ie,V as ce,W as re}from"./index.ac155d9f.js";import{_ as ue}from"./DrawingControls.vue_vue_type_script_setup_true_lang.d98f5a91.js";const de={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},_e=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),me=[_e];function pe(t,n){return u(),v("svg",de,me)}const ve={name:"carbon-renew",render:pe},he={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},fe=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),xe=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),ge=[fe,xe];function we(t,n){return u(),v("svg",he,ge)}const ke={name:"carbon-time",render:we},$e="/owasp-top-10/A02/assets/logo-title-horizontal.96c3c915.png";function ye(){const t=$(Date.now()),n=z({interval:1e3}),d=f(()=>{const o=(n.value-t.value)/1e3,a=Math.floor(o%60).toString().padStart(2,"0");return`${Math.floor(o/60).toString().padStart(2,"0")}:${a}`});function i(){t.value=n.value}return{timer:d,resetTimer:i}}const Se=["innerHTML"],Ce=["textContent"],be=S({__name:"NoteViewer",props:{class:null,noteHtml:null,note:null},emits:["click"],setup(t){const n=t;return C(b),(d,i)=>t.noteHtml?(u(),v("div",{key:0,class:x(["prose overflow-auto outline-none",n.class]),onClick:i[0]||(i[0]=o=>d.$emit("click")),innerHTML:t.noteHtml},null,10,Se)):(u(),v("div",{key:1,class:x(["prose overflow-auto outline-none",n.class]),onClick:i[1]||(i[1]=o=>d.$emit("click")),textContent:N(t.note)},null,10,Ce))}}),Me=S({__name:"NoteStatic",props:{class:null},setup(t){const n=t;C(b);const d=f(()=>{var o,a,l;return(l=(a=(o=y.value)==null?void 0:o.meta)==null?void 0:a.slide)==null?void 0:l.note}),i=f(()=>{var o,a,l;return(l=(a=(o=y.value)==null?void 0:o.meta)==null?void 0:a.slide)==null?void 0:l.notesHTML});return(o,a)=>(u(),h(be,{class:x(n.class),note:s(d),"note-html":s(i)},null,8,["class","note","note-html"]))}}),g=t=>(Y("data-v-63376833"),t=t(),Z(),t),He={class:"bg-main h-full slidev-presenter"},Te={class:"grid-container"},Ve={class:"grid-section top flex"},Ae=g(()=>e("img",{src:$e,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2"},null,-1)),Be=g(()=>e("div",{class:"flex-auto"},null,-1)),Ne={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},ze=g(()=>e("div",{class:"context"}," current ",-1)),Pe={class:"relative grid-section next flex flex-col p-2 lg:p-4"},Re=g(()=>e("div",{class:"context"}," next ",-1)),Le={class:"grid-section note overflow-auto"},Ie={class:"grid-section bottom"},De={class:"progress-bar"},je=S({__name:"Presenter",setup(t){C(b);const n=$();P(),R(n);const d=H.titleTemplate.replace("%s",H.title||"Slidev");L({title:`Presenter - ${d}`});const{timer:i,resetTimer:o}=ye(),a=$([]),l=f(()=>B.value<G.value?{route:y.value,clicks:B.value+1}:J.value?{route:K.value,clicks:0}:null);return I(()=>{const M=n.value.querySelector("#slide-content"),r=D(j()),w=E();F(()=>{if(!w.value||X.value||!ee.value)return;const _=M.getBoundingClientRect(),c=(r.x-_.left)/_.width*100,p=(r.y-_.top)/_.height*100;if(!(c<0||c>100||p<0||p>100))return{x:c,y:p}},_=>{Q.cursor=_})}),(M,r)=>{const w=ke,_=ve;return u(),v(O,null,[e("div",He,[e("div",Te,[e("div",Ve,[Ae,Be,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:r[0]||(r[0]=(...c)=>s(o)&&s(o)(...c))},[m(w,{class:"absolute"}),m(_,{class:"absolute opacity-0"})]),e("div",Ne,N(s(i)),1)]),e("div",{ref_key:"main",ref:n,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:T(s(te))},[m(A,{key:"main",class:"h-full w-full"},{default:V(()=>[m(se,{context:"presenter"})]),_:1}),ze],4),e("div",Pe,[s(l)?(u(),h(A,{key:"next",class:"h-full w-full"},{default:V(()=>{var c;return[m(s(ne),{is:(c=s(l).route)==null?void 0:c.component,"clicks-elements":a.value,"onUpdate:clicks-elements":r[1]||(r[1]=p=>a.value=p),clicks:s(l).clicks,"clicks-disabled":!1,class:x(s(oe)(s(l).route)),route:s(l).route,context:"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):U("v-if",!0),Re]),e("div",Le,[(u(),h(Me,{key:1,class:"w-full h-full overflow-auto p-2 lg:p-4"}))]),e("div",Ie,[m(le,{persist:!0})]),(u(),h(ue,{key:0}))]),e("div",De,[e("div",{class:"progress h-2px bg-primary transition-all",style:T({width:`${(s(ae)-1)/(s(ie)-1)*100}%`})},null,4)])]),m(ce),m(q,{modelValue:s(k),"onUpdate:modelValue":r[2]||(r[2]=c=>W(k)?k.value=c:null)},null,8,["modelValue"])],64)}}});const Ue=re(je,[["__scopeId","data-v-63376833"]]);export{Ue as default};
