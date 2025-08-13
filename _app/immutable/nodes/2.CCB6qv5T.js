import"../chunks/DsnmJJEf.js";import"../chunks/CXc7-ejB.js";import{as as re,w as he,al as V,x as S,H as pe,y as me,g as M,a3 as be,aD as xe,aE as ge,aF as ee,ak as Y,G as O,ag as _e,am as ye,C as G,aI as we,aG as ke,aP as Ce,aL as se,aQ as ae,aq as ne,j as Le,aR as Me,aJ as ie,aK as Ee,aS as Te,aT as Ie,aU as B,F as le,ai as Ae,aV as ze,ap as He,aW as Fe,a1 as Se,V as De,b as Q,W as Ne,e as Re,aX as Oe,P as R,L as J,M as N,O as I,N as H,aY as P,Q as T,T as oe,U as ce,aZ as te,a0 as Pe,K as We,S as $e,$ as qe}from"../chunks/D41NLSgW.js";import{t as D,s as W,f as q,a as de}from"../chunks/BjvcVbEc.js";import{i as fe}from"../chunks/Bmr411QL.js";import{b as j}from"../chunks/D4kJz-6S.js";import{s as je}from"../chunks/Dwdvhhqm.js";import{p as Ve,b as Ye}from"../chunks/CPiGYwnI.js";import{o as Be}from"../chunks/C1SK-MwC.js";function Ke(o,s){return s}function Ue(o,s,e){for(var a=o.items,l=[],c=s.length,r=0;r<c;r++)ze(s[r].e,l,!0);var g=c>0&&l.length===0&&e!==null;if(g){var x=e.parentNode;He(x),x.append(e),a.clear(),z(o,s[0].prev,s[c-1].next)}Fe(l,()=>{for(var p=0;p<c;p++){var k=s[p];g||(a.delete(k.k),z(o,k.prev,k.next)),le(k.e,!g)}})}function Ge(o,s,e,a,l,c=null){var r=o,g={flags:s,items:new Map,first:null};{var x=o;r=S?V(pe(x)):x.appendChild(re())}S&&me();var p=null,k=!1,E=new Map,f=be(()=>{var m=e();return Le(m)?m:m==null?[]:ne(m)}),b,h;function v(){Qe(h,b,g,E,r,l,s,a,e),c!==null&&(b.length===0?p?ie(p):p=G(()=>c(r)):p!==null&&Ee(p,()=>{p=null}))}he(()=>{h??=Se,b=M(f);var m=b.length;if(k&&m===0)return;k=m===0;let n=!1;if(S){var i=xe(r)===ge;i!==(m===0)&&(r=ee(),V(r),Y(!1),n=!0)}if(S){for(var t=null,d,u=0;u<m;u++){if(O.nodeType===_e&&O.data===ye){r=O,n=!0,Y(!1);break}var w=b[u],C=a(w,u);d=Z(O,g,t,null,w,C,u,l,s,e),g.items.set(C,d),t=d}m>0&&V(ee())}if(S)m===0&&c&&(p=G(()=>c(r)));else if(we()){var y=new Set,_=ke;for(u=0;u<m;u+=1){w=b[u],C=a(w,u);var L=g.items.get(C)??E.get(C);L?ve(L,w,u):(d=Z(null,g,null,null,w,C,u,l,s,e,!0),E.set(C,d)),y.add(C)}for(const[A,F]of g.items)y.has(A)||_.skipped_effects.add(F.e);_.add_callback(v)}else v();n&&Y(!0),M(f)}),S&&(r=O)}function Qe(o,s,e,a,l,c,r,g,x){var p=s.length,k=e.items,E=e.first,f=E,b,h=null,v=[],m=[],n,i,t,d;for(d=0;d<p;d+=1){if(n=s[d],i=g(n,d),t=k.get(i),t===void 0){var u=a.get(i);if(u!==void 0){a.delete(i),k.set(i,u);var w=h?h.next:f;z(e,h,u),z(e,u,w),K(u,w,l),h=u}else{var C=f?f.e.nodes_start:l;h=Z(C,e,h,h===null?e.first:h.next,n,i,d,c,r,x)}k.set(i,h),v=[],m=[],f=h.next;continue}if(ve(t,n,d),(t.e.f&B)!==0&&ie(t.e),t!==f){if(b!==void 0&&b.has(t)){if(v.length<m.length){var y=m[0],_;h=y.prev;var L=v[0],A=v[v.length-1];for(_=0;_<v.length;_+=1)K(v[_],y,l);for(_=0;_<m.length;_+=1)b.delete(m[_]);z(e,L.prev,A.next),z(e,h,L),z(e,A,y),f=y,h=A,d-=1,v=[],m=[]}else b.delete(t),K(t,f,l),z(e,t.prev,t.next),z(e,t,h===null?e.first:h.next),z(e,h,t),h=t;continue}for(v=[],m=[];f!==null&&f.k!==i;)(f.e.f&B)===0&&(b??=new Set).add(f),m.push(f),f=f.next;if(f===null)continue;t=f}v.push(t),h=t,f=t.next}if(f!==null||b!==void 0){for(var F=b===void 0?[]:ne(b);f!==null;)(f.e.f&B)===0&&F.push(f),f=f.next;var X=F.length;if(X>0){var $=p===0?l:null;Ue(e,F,$)}}o.first=e.first&&e.first.e,o.last=h&&h.e;for(var ue of a.values())le(ue.e);a.clear()}function ve(o,s,e,a){Ce(o.v,s),o.i=e}function Z(o,s,e,a,l,c,r,g,x,p,k){var E=(x&Te)!==0,f=(x&Ie)===0,b=E?f?se(l,!1,!1):ae(l):l,h=(x&Me)===0?r:ae(r),v={i:h,v:b,k:c,a:null,e:null,prev:e,next:a};try{if(o===null){var m=document.createDocumentFragment();m.append(o=re())}return v.e=G(()=>g(o,b,h,p),S),v.e.prev=e&&e.e,v.e.next=a&&a.e,e===null?k||(s.first=v):(e.next=v,e.e.next=v.e),a!==null&&(a.prev=v,a.e.prev=v.e),v}finally{}}function K(o,s,e){for(var a=o.next?o.next.e.nodes_start:e,l=s?s.e.nodes_start:e,c=o.e.nodes_start;c!==null&&c!==a;){var r=Ae(c);l.before(c),c=r}}function z(o,s,e){s===null?o.first=e:(s.next=e,s.e.next=e&&e.e),e!==null&&(e.prev=s,e.e.prev=s&&s.e)}function U(o,s,e){De(()=>{var a=Q(()=>s(o,e?.())||{});if(e&&a?.update){var l=!1,c={};Ne(()=>{var r=e();Re(r),l&&Oe(c,r)&&(c=r,a.update(r))}),l=!0}if(a?.destroy)return()=>a.destroy()})}var Ze=R('<section class="hero-section svelte-1h7lba2"><h1 class="hero-title svelte-1h7lba2">Looking for a <span class="hero-title-accent svelte-1h7lba2">Site?</span></h1> <p class="hero-desc svelte-1h7lba2">Here, you can find modern, clean, and organized websites for a business.</p> <div class="sp svelte-1h7lba2"><a class="sparkle-button svelte-1h7lba2" style="text-decoration:none;"><span class="spark svelte-1h7lba2"></span> <span class="backdrop svelte-1h7lba2"></span> <svg class="sparkle svelte-1h7lba2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" class="svelte-1h7lba2"></path><path d="M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40725 20.1216 6.71398 19.5796 7.14639 19.147C7.5788 18.7144 8.12065 18.4075 8.714 18.259L9.75 18L8.714 17.741C8.12065 17.5925 7.5788 17.2856 7.14639 16.853C6.71398 16.4204 6.40725 15.8784 6.259 15.285L6 14.25Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" class="svelte-1h7lba2"></path><path d="M6.5 4L6.303 4.5915C6.24777 4.75718 6.15472 4.90774 6.03123 5.03123C5.90774 5.15472 5.75718 5.24777 5.5915 5.303L5 5.5L5.5915 5.697C5.75718 5.75223 5.90774 5.84528 6.03123 5.96877C6.15472 6.09226 6.24777 6.24282 6.303 6.4085L6.5 7L6.697 6.4085C6.75223 6.24282 6.84528 6.09226 6.96877 5.96877C7.09226 5.84528 7.24282 5.75223 7.4085 5.697L8 5.5L7.4085 5.303C7.24282 5.24777 7.09226 5.15472 6.96877 5.03123C6.84528 4.90774 6.75223 4.75718 6.697 4.5915L6.5 4Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" class="svelte-1h7lba2"></path></svg> <span class="text svelte-1h7lba2">Contact Me</span></a> <div class="bodydrop svelte-1h7lba2"></div> <span aria-hidden="true" class="particle-pen svelte-1h7lba2"></span></div></section>');function Je(o){let s=j+"/contact";var e=Ze(),a=I(e),l=H(a,2),c=H(l,2),r=I(c);P(4),T(c),T(e),J(()=>W(r,"href",s)),D(1,a,()=>q,()=>({y:40,duration:700})),D(1,l,()=>de,()=>({delay:200,duration:600})),D(1,c,()=>q,()=>({y:20,delay:400,duration:600})),N(o,e)}var Xe=R('<section id="about" class="w-full py-16 flex flex-col items-center"><h2 class="text-3xl font-bold mb-4">About</h2> <p class="max-w-xl text-center text-gray-0">I create modern, animated websites using advanced AI tools, delivering unique and engaging online experiences tailored to your business.</p></section>');function ea(o){var s=Xe();D(1,s,()=>de),N(o,s)}var aa=R('<li><a class="menu-link svelte-1xinjny"> </a></li>'),ta=R('<nav class="menu-bar svelte-1xinjny"><div class="menu-brand svelte-1xinjny">KaiiDesu</div> <ul class="menu-list svelte-1xinjny"></ul></nav>');function ra(o,s){let e=Ve(s,"menuItems",12);e([{name:"Home",href:j+"/"},{name:"About",href:"#about"},{name:"Contact",href:j+"/contact"}]);var a=ta(),l=H(I(a),2);Ge(l,5,e,Ke,(c,r)=>{var g=aa(),x=I(g),p=I(x,!0);T(x),T(g),J(()=>{W(x,"href",(M(r),Q(()=>M(r).href))),je(p,(M(r),Q(()=>M(r).name)))}),N(c,g)}),T(l),T(a),D(1,a,()=>q,()=>({y:-60,duration:700})),N(o,a)}var sa=R('<canvas class="fixed inset-0 w-full h-full z-0 pointer-events-none" style="background:black;"></canvas>');function na(o,s){oe(s,!1);let e=se(),a,l;const c=3,r=4,g=[];for(let n=0;n<r;n++)for(let i=0;i<r;i++)for(let t=0;t<r;t++){const d=n/(r-1)*2-1,u=i/(r-1)*2-1,w=t/(r-1)*2-1;g.push([d,u,w])}const x=[];function p(n,i,t){return n*r*r+i*r+t}for(let n=0;n<r;n++)for(let i=0;i<r;i++)for(let t=0;t<r;t++)n<r-1&&x.push([p(n,i,t),p(n+1,i,t)]),i<r-1&&x.push([p(n,i,t),p(n,i+1,t)]),t<r-1&&x.push([p(n,i,t),p(n,i,t+1)]);function k([n,i,t],d,u,w){let C=n*Math.cos(w)-i*Math.sin(w),y=n*Math.sin(w)+i*Math.cos(w),_=t,L=y*Math.cos(d)-_*Math.sin(d),A=y*Math.sin(d)+_*Math.cos(d),F=C*Math.cos(u)+A*Math.sin(u);const $=320/(-C*Math.sin(u)+A*Math.cos(u)+8);return[F*c*$,L*c*$]}let E={x:0,y:0,rotOffset:0};function f(){E={x:0,y:0,rotOffset:0}}let b=0;const h=1e3/30;function v(n){if(n-b<h){l=requestAnimationFrame(v);return}b=n,a.clearRect(0,0,M(e).width,M(e).height);const{x:i,y:t,rotOffset:d}=E;a.save(),a.translate(M(e).width/2+i,M(e).height/2+t);const u=n*5e-4+.7+d,w=n*5e-4+.7+d*.7,C=n*5e-4+.7+d*.3,y=g.map(([_,L,A])=>k([_,L,A],u,w,C));a.save(),a.strokeStyle="rgba(0,0,0,0.0)",a.shadowColor="rgba(0,180,255,0.5)",a.shadowBlur=12,a.lineWidth=3;for(const[_,L]of x)a.beginPath(),a.moveTo(y[_][0],y[_][1]),a.lineTo(y[L][0],y[L][1]),a.stroke();a.restore(),a.save(),a.strokeStyle="rgba(0,180,255,0.85)",a.lineWidth=1.2;for(const[_,L]of x)a.beginPath(),a.moveTo(y[_][0],y[_][1]),a.lineTo(y[L][0],y[L][1]),a.stroke();a.restore(),a.restore(),l=requestAnimationFrame(v)}Be(()=>{const n=M(e).getContext("2d");if(!n)return;a=n;function i(){te(e,M(e).width=window.innerWidth),te(e,M(e).height=window.innerHeight),f()}return i(),window.addEventListener("resize",i),l=requestAnimationFrame(v),()=>{window.removeEventListener("resize",i),cancelAnimationFrame(l)}}),fe();var m=sa();Ye(m,n=>Pe(e,n),()=>M(e)),N(o,m),ce()}var ia=R(`<!> <div class="relative min-h-screen w-full bg-black"><!> <main class="text-white flex flex-col items-center justify-center pt-24 relative z-10"><!> <!> <div class="cardlet-container"><div class="cardlet-grid"><div class="cardlet cardlet-hidden"><img alt="Example Website 1" class="cardlet-img"/> <a href="https://example.com" target="_blank" rel="noopener" class="cardlet-btn">Preview</a></div> <div class="cardlet cardlet-hidden"><img alt="Example Website 2" class="cardlet-img"/> <a href="https://example.com" target="_blank" rel="noopener" class="cardlet-btn">Preview</a></div> <div class="cardlet cardlet-hidden"><img alt="Example Website 3" class="cardlet-img"/> <a href="https://example.com" target="_blank" rel="noopener" class="cardlet-btn">Preview</a></div></div></div> <style>.cardlet-container {
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
}</style></main></div>`,1);function ma(o,s){oe(s,!1);let e=j+"/example.jpg";function a(t,d={delay:0}){let u;const w=y=>{y.forEach(_=>{_.isIntersecting?u=setTimeout(()=>{t.classList.add("cardlet-visible"),t.classList.remove("cardlet-hidden")},d.delay||0):(clearTimeout(u),t.classList.remove("cardlet-visible"),t.classList.add("cardlet-hidden"))})},C=new IntersectionObserver(w,{threshold:.15});return C.observe(t),{update(y){d=y},destroy(){C.disconnect(),clearTimeout(u)}}}fe();var l=ia();We(t=>{qe.title="Homepage | KaiiDesu"});var c=$e(l);ra(c,{});var r=H(c,2),g=I(r);na(g,{});var x=H(g,2),p=I(x);Je(p);var k=H(p,2);ea(k);var E=H(k,2),f=I(E),b=I(f),h=I(b);P(2),T(b),U(b,(t,d)=>a?.(t,d),()=>({delay:0}));var v=H(b,2),m=I(v);P(2),T(v),U(v,(t,d)=>a?.(t,d),()=>({delay:350}));var n=H(v,2),i=I(n);P(2),T(n),U(n,(t,d)=>a?.(t,d),()=>({delay:700})),T(f),T(E),P(2),T(x),T(r),J(()=>{W(h,"src",e),W(m,"src",e),W(i,"src",e)}),D(1,x,()=>q,()=>({y:60,duration:700})),N(o,l),ce()}export{ma as component};
