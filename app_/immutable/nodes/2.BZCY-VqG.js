import"../chunks/DsnmJJEf.js";import"../chunks/BGwLgIr8.js";import{as as ie,w as he,al as Y,x as N,H as be,y as ge,g as z,a2 as xe,aC as _e,aD as we,aE as te,ak as K,G as D,ag as ye,am as ke,C as G,aH as Ce,aF as Le,aO as ze,aK as ee,aP as re,aq as le,j as Me,aQ as Ee,aI as oe,aJ as Te,aR as Ae,aS as Ie,aT as U,F as ce,ai as He,aU as Ne,ap as Oe,aV as Fe,a0 as Re,U as Se,b as Q,V as De,e as Pe,aW as $e,J as S,L as W,M as R,N as T,O as H,aX as P,P as E,_ as Z,S as de,T as fe,aY as se,K as qe,R as We,$ as Be}from"../chunks/D490pdKm.js";import{t as F,s as $,f as B,a as ve}from"../chunks/Bp_IqHu8.js";import{i as ue}from"../chunks/S9qqoXJ6.js";import{b as V}from"../chunks/Dcmhmkut.js";import{e as ne,s as Ve}from"../chunks/Dy96g0Iq.js";import{p as Ye,b as Ke}from"../chunks/C4jaGGye.js";import{o as Ue}from"../chunks/DKvazNUS.js";function je(n,s){return s}function Je(n,s,e){for(var a=n.items,c=[],l=s.length,r=0;r<l;r++)Ne(s[r].e,c,!0);var h=l>0&&c.length===0&&e!==null;if(h){var _=e.parentNode;Oe(_),_.append(e),a.clear(),I(n,s[0].prev,s[l-1].next)}Fe(c,()=>{for(var m=0;m<l;m++){var y=s[m];h||(a.delete(y.k),I(n,y.prev,y.next)),ce(y.e,!h)}})}function Ge(n,s,e,a,c,l=null){var r=n,h={flags:s,items:new Map,first:null};{var _=n;r=N?Y(be(_)):_.appendChild(ie())}N&&ge();var m=null,y=!1,C=new Map,d=xe(()=>{var b=e();return Me(b)?b:b==null?[]:le(b)}),g,p;function v(){Qe(p,g,h,C,r,c,s,a,e),l!==null&&(g.length===0?m?oe(m):m=G(()=>l(r)):m!==null&&Te(m,()=>{m=null}))}he(()=>{p??=Re,g=z(d);var b=g.length;if(y&&b===0)return;y=b===0;let i=!1;if(N){var o=_e(r)===we;o!==(b===0)&&(r=te(),Y(r),K(!1),i=!0)}if(N){for(var t=null,f,u=0;u<b;u++){if(D.nodeType===ye&&D.data===ke){r=D,i=!0,K(!1);break}var k=g[u],L=a(k,u);f=X(D,h,t,null,k,L,u,c,s,e),h.items.set(L,f),t=f}b>0&&Y(te())}if(N)b===0&&l&&(m=G(()=>l(r)));else if(Ce()){var w=new Set,x=Le;for(u=0;u<b;u+=1){k=g[u],L=a(k,u);var M=h.items.get(L)??C.get(L);M?me(M,k,u):(f=X(null,h,null,null,k,L,u,c,s,e,!0),C.set(L,f)),w.add(L)}for(const[A,O]of h.items)w.has(A)||x.skipped_effects.add(O.e);x.add_callback(v)}else v();i&&K(!0),z(d)}),N&&(r=D)}function Qe(n,s,e,a,c,l,r,h,_){var m=s.length,y=e.items,C=e.first,d=C,g,p=null,v=[],b=[],i,o,t,f;for(f=0;f<m;f+=1){if(i=s[f],o=h(i,f),t=y.get(o),t===void 0){var u=a.get(o);if(u!==void 0){a.delete(o),y.set(o,u);var k=p?p.next:d;I(e,p,u),I(e,u,k),j(u,k,c),p=u}else{var L=d?d.e.nodes_start:c;p=X(L,e,p,p===null?e.first:p.next,i,o,f,l,r,_)}y.set(o,p),v=[],b=[],d=p.next;continue}if(me(t,i,f),(t.e.f&U)!==0&&oe(t.e),t!==d){if(g!==void 0&&g.has(t)){if(v.length<b.length){var w=b[0],x;p=w.prev;var M=v[0],A=v[v.length-1];for(x=0;x<v.length;x+=1)j(v[x],w,c);for(x=0;x<b.length;x+=1)g.delete(b[x]);I(e,M.prev,A.next),I(e,p,M),I(e,A,w),d=w,p=A,f-=1,v=[],b=[]}else g.delete(t),j(t,d,c),I(e,t.prev,t.next),I(e,t,p===null?e.first:p.next),I(e,p,t),p=t;continue}for(v=[],b=[];d!==null&&d.k!==o;)(d.e.f&U)===0&&(g??=new Set).add(d),b.push(d),d=d.next;if(d===null)continue;t=d}v.push(t),p=t,d=t.next}if(d!==null||g!==void 0){for(var O=g===void 0?[]:le(g);d!==null;)(d.e.f&U)===0&&O.push(d),d=d.next;var ae=O.length;if(ae>0){var q=m===0?c:null;Je(e,O,q)}}n.first=e.first&&e.first.e,n.last=p&&p.e;for(var pe of a.values())ce(pe.e);a.clear()}function me(n,s,e,a){ze(n.v,s),n.i=e}function X(n,s,e,a,c,l,r,h,_,m,y){var C=(_&Ae)!==0,d=(_&Ie)===0,g=C?d?ee(c,!1,!1):re(c):c,p=(_&Ee)===0?r:re(r),v={i:p,v:g,k:l,a:null,e:null,prev:e,next:a};try{if(n===null){var b=document.createDocumentFragment();b.append(n=ie())}return v.e=G(()=>h(n,g,p,m),N),v.e.prev=e&&e.e,v.e.next=a&&a.e,e===null?y||(s.first=v):(e.next=v,e.e.next=v.e),a!==null&&(a.prev=v,a.e.prev=v.e),v}finally{}}function j(n,s,e){for(var a=n.next?n.next.e.nodes_start:e,c=s?s.e.nodes_start:e,l=n.e.nodes_start;l!==null&&l!==a;){var r=He(l);c.before(l),l=r}}function I(n,s,e){s===null?n.first=e:(s.next=e,s.e.next=e&&e.e),e!==null&&(e.prev=s,e.e.prev=s&&s.e)}function J(n,s,e){Se(()=>{var a=Q(()=>s(n,e?.())||{});if(e&&a?.update){var c=!1,l={};De(()=>{var r=e();Pe(r),c&&$e(l,r)&&(l=r,a.update(r))}),c=!0}if(a?.destroy)return()=>a.destroy()})}function Ze(n,s,e){var a=n==null?"":""+n;return a=a?a+" "+s:s,a===""?null:a}function Xe(n,s,e,a,c,l){var r=n.__className;if(N||r!==e||r===void 0){var h=Ze(e,a);(!N||h!==n.getAttribute("class"))&&(h==null?n.removeAttribute("class"):n.className=h),n.__className=e}return l}var ea=S('<section class="hero-section svelte-3dzc6l"><h1 class="hero-title svelte-3dzc6l">Looking for a <span class="hero-title-accent svelte-3dzc6l">Site?</span></h1> <p class="hero-desc svelte-3dzc6l">Here, you can find modern, clean, and organized websites for a business.</p> <div class="sp svelte-3dzc6l"><a class="sparkle-button svelte-3dzc6l" style="text-decoration:none;"><span class="spark svelte-3dzc6l"></span> <span class="backdrop svelte-3dzc6l"></span> <svg class="sparkle svelte-3dzc6l" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" class="svelte-3dzc6l"></path><path d="M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40725 20.1216 6.71398 19.5796 7.14639 19.147C7.5788 18.7144 8.12065 18.4075 8.714 18.259L9.75 18L8.714 17.741C8.12065 17.5925 7.5788 17.2856 7.14639 16.853C6.71398 16.4204 6.40725 15.8784 6.259 15.285L6 14.25Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" class="svelte-3dzc6l"></path><path d="M6.5 4L6.303 4.5915C6.24777 4.75718 6.15472 4.90774 6.03123 5.03123C5.90774 5.15472 5.75718 5.24777 5.5915 5.303L5 5.5L5.5915 5.697C5.75718 5.75223 5.90774 5.84528 6.03123 5.96877C6.15472 6.09226 6.24777 6.24282 6.303 6.4085L6.5 7L6.697 6.4085C6.75223 6.24282 6.84528 6.09226 6.96877 5.96877C7.09226 5.84528 7.24282 5.75223 7.4085 5.697L8 5.5L7.4085 5.303C7.24282 5.24777 7.09226 5.15472 6.96877 5.03123C6.84528 4.90774 6.75223 4.75718 6.697 4.5915L6.5 4Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" class="svelte-3dzc6l"></path></svg> <span class="text svelte-3dzc6l">Contact Me</span></a> <div class="bodydrop svelte-3dzc6l"></div> <span aria-hidden="true" class="particle-pen svelte-3dzc6l"></span></div></section>');function aa(n){let s=V+"/contact";var e=ea(),a=T(e),c=H(a,2),l=H(c,2),r=T(l);P(4),E(l),E(e),W(()=>$(r,"href",s)),F(1,a,()=>B,()=>({y:40,duration:700})),F(1,c,()=>ve,()=>({delay:200,duration:600})),F(1,l,()=>B,()=>({y:20,delay:400,duration:600})),R(n,e)}var ta=S('<section id="about" class="w-full py-16 flex flex-col items-center px-2 sm:px-0"><h2 class="text-3xl font-bold mb-4 sm:text-4xl text-center">About</h2> <p class="max-w-xl text-center text-gray-0 text-base sm:text-lg">I create modern, animated websites using advanced AI tools, delivering unique and engaging online experiences tailored to your business.</p></section>');function ra(n){var s=ta();F(1,s,()=>ve),R(n,s)}var sa=S('<li><a class="menu-link svelte-13e88bs"> </a></li>'),na=S('<nav class="menu-bar svelte-13e88bs"><div class="menu-brand svelte-13e88bs">KaiiDesu</div> <button class="menu-mobile-btn svelte-13e88bs" aria-label="Open menu"><svg width="28" height="28" fill="none" stroke="white" stroke-width="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"></path></svg></button> <ul></ul></nav>');function ia(n,s){let e=Ye(s,"menuItems",12);e([{name:"Home",href:V+"/"},{name:"About",href:"#about"},{name:"Contact",href:V+"/contact"}]);let a=ee(!1);function c(){Z(a,!z(a))}var l=na(),r=H(T(l),2),h=H(r,2);Ge(h,5,e,je,(_,m)=>{var y=sa(),C=T(y),d=T(C,!0);E(C),E(y),W(()=>{$(C,"href",(z(m),Q(()=>z(m).href))),Ve(d,(z(m),Q(()=>z(m).name)))}),ne("click",C,()=>{Z(a,!1)}),R(_,y)}),E(h),E(l),W(()=>Xe(h,1,`menu-list ${z(a)?"open":""}`,"svelte-13e88bs")),ne("click",r,c),F(1,l,()=>B,()=>({y:-60,duration:700})),R(n,l)}var la=S('<canvas class="fixed inset-0 w-full h-full z-0 pointer-events-none" style="background:black;"></canvas>');function oa(n,s){de(s,!1);let e=ee(),a,c;const l=3,r=4,h=[];for(let i=0;i<r;i++)for(let o=0;o<r;o++)for(let t=0;t<r;t++){const f=i/(r-1)*2-1,u=o/(r-1)*2-1,k=t/(r-1)*2-1;h.push([f,u,k])}const _=[];function m(i,o,t){return i*r*r+o*r+t}for(let i=0;i<r;i++)for(let o=0;o<r;o++)for(let t=0;t<r;t++)i<r-1&&_.push([m(i,o,t),m(i+1,o,t)]),o<r-1&&_.push([m(i,o,t),m(i,o+1,t)]),t<r-1&&_.push([m(i,o,t),m(i,o,t+1)]);function y([i,o,t],f,u,k){let L=i*Math.cos(k)-o*Math.sin(k),w=i*Math.sin(k)+o*Math.cos(k),x=t,M=w*Math.cos(f)-x*Math.sin(f),A=w*Math.sin(f)+x*Math.cos(f),O=L*Math.cos(u)+A*Math.sin(u);const q=320/(-L*Math.sin(u)+A*Math.cos(u)+8);return[O*l*q,M*l*q]}let C={x:0,y:0,rotOffset:0};function d(){C={x:0,y:0,rotOffset:0}}let g=0;const p=1e3/30;function v(i){if(i-g<p){c=requestAnimationFrame(v);return}g=i,a.clearRect(0,0,z(e).width,z(e).height);const{x:o,y:t,rotOffset:f}=C;a.save(),a.translate(z(e).width/2+o,z(e).height/2+t);const u=i*5e-4+.7+f,k=i*5e-4+.7+f*.7,L=i*5e-4+.7+f*.3,w=h.map(([x,M,A])=>y([x,M,A],u,k,L));a.save(),a.strokeStyle="rgba(0,0,0,0.0)",a.shadowColor="rgba(0,180,255,0.5)",a.shadowBlur=12,a.lineWidth=3;for(const[x,M]of _)a.beginPath(),a.moveTo(w[x][0],w[x][1]),a.lineTo(w[M][0],w[M][1]),a.stroke();a.restore(),a.save(),a.strokeStyle="rgba(0,180,255,0.85)",a.lineWidth=1.2;for(const[x,M]of _)a.beginPath(),a.moveTo(w[x][0],w[x][1]),a.lineTo(w[M][0],w[M][1]),a.stroke();a.restore(),a.restore(),c=requestAnimationFrame(v)}Ue(()=>{const i=z(e).getContext("2d");if(!i)return;a=i;function o(){se(e,z(e).width=window.innerWidth),se(e,z(e).height=window.innerHeight),d()}return o(),window.addEventListener("resize",o),c=requestAnimationFrame(v),()=>{window.removeEventListener("resize",o),cancelAnimationFrame(c)}}),ue();var b=la();Ke(b,i=>Z(e,i),()=>z(e)),R(n,b),fe()}var ca=S(`<!> <div class="relative min-h-screen w-full bg-black"><!> <main class="text-white flex flex-col items-center justify-center pt-24 relative z-10"><!> <!> <div class="cardlet-container"><div class="cardlet-grid"><div class="cardlet cardlet-hidden"><img alt="Example Website 1" class="cardlet-img"/> <a href="https://example.com" target="_blank" rel="noopener" class="cardlet-btn">Preview</a></div> <div class="cardlet cardlet-hidden"><img alt="Example Website 2" class="cardlet-img"/> <a href="https://example.com" target="_blank" rel="noopener" class="cardlet-btn">Preview</a></div> <div class="cardlet cardlet-hidden"><img alt="Example Website 3" class="cardlet-img"/> <a href="https://example.com" target="_blank" rel="noopener" class="cardlet-btn">Preview</a></div></div></div> <style>@media (max-width: 900px) {
      .cardlet-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
      .cardlet {
        width: 100%;
        max-width: 95vw;
      }
      .cardlet-img {
        height: 8rem;
      }
      .cardlet-container {
        padding: 1.5rem 0.5rem;
      }
    }
    @media (max-width: 600px) {
      .cardlet-container {
        margin-top: 1.2rem;
        margin-bottom: 1.2rem;
        padding: 1rem 0.25rem;
      }
      .cardlet {
        padding: 1rem;
        font-size: 0.95rem;
      }
      .cardlet-img {
        height: 6rem;
      }
    }</style> <style>.cardlet-container {
  background: rgba(255,255,255,0.8);
  box-shadow: 0 8px 32px 0 rgba(0,0,0,0.10);
  padding: 2.5rem 1.5rem;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200rem;
}
.cardlet-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  justify-items: center;
}
.cardlet {
  background: #18181b;
  border: 1.5px solid #232323;
  border-radius: 1rem;
  box-shadow: 0 6px 32px 0 rgba(0,0,0,0.25);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 340px;
  opacity: 1;
  transform: translateY(0);
  transition: opacity 1.2s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1), box-shadow 0.3s cubic-bezier(.4,0,.2,1);
}

.cardlet:hover {
  transform: translateY(-18px) scale(1.07) rotate(-2deg);
  box-shadow:
    0 0 24px 4px #2356a8,
    0 0 12px 0 rgba(35,86,168,0.18),
    0 0 2px 0 #3a4e7c;
  filter: brightness(1.03) saturate(1.06) drop-shadow(0 0 6px #2356a8);
  z-index: 3;
}

.cardlet-hidden {
  opacity: 0;
  transform: translateY(60px);
  pointer-events: none;
}
.cardlet-visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}
.cardlet-img {
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  width: 100%;
  height: 10rem;
  object-fit: cover;
  background: #232323;
  border: 1.5px solid #232323;
}
.cardlet-btn {
  margin-top: 0.5rem;
  display: inline-block;
  padding: 0.5rem 1.25rem;
  background: #fff;
  color: #18181b;
  font-weight: 600;
  border-radius: 9999px;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.10);
  transition: background 0.2s, color 0.2s;
  text-decoration: none;
}
.cardlet-btn:hover {
  background: #f3f4f6;
  color: #18181b;
}</style></main></div>`,1);function xa(n,s){de(s,!1);let e=V+"/example.jpg";function a(t,f={delay:0}){let u;const k=w=>{w.forEach(x=>{x.isIntersecting?u=setTimeout(()=>{t.classList.add("cardlet-visible"),t.classList.remove("cardlet-hidden")},f.delay||0):(clearTimeout(u),t.classList.remove("cardlet-visible"),t.classList.add("cardlet-hidden"))})},L=new IntersectionObserver(k,{threshold:.15});return L.observe(t),{update(w){f=w},destroy(){L.disconnect(),clearTimeout(u)}}}ue();var c=ca();qe(t=>{Be.title="Homepage | KaiiDesu"});var l=We(c);ia(l,{});var r=H(l,2),h=T(r);oa(h,{});var _=H(h,2),m=T(_);aa(m);var y=H(m,2);ra(y);var C=H(y,2),d=T(C),g=T(d),p=T(g);P(2),E(g),J(g,(t,f)=>a?.(t,f),()=>({delay:0}));var v=H(g,2),b=T(v);P(2),E(v),J(v,(t,f)=>a?.(t,f),()=>({delay:350}));var i=H(v,2),o=T(i);P(2),E(i),J(i,(t,f)=>a?.(t,f),()=>({delay:700})),E(d),E(C),P(4),E(_),E(r),W(()=>{$(p,"src",e),$(b,"src",e),$(o,"src",e)}),F(1,_,()=>B,()=>({y:60,duration:700})),R(n,c),fe()}export{xa as component};
