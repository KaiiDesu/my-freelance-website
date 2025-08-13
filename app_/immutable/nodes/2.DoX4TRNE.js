import"../chunks/DsnmJJEf.js";import"../chunks/DiFqsUBp.js";import{ac as ve,w as Le,a5 as U,x as I,H as ze,y as Ce,g as x,at as Ee,ae as Me,af as Ae,ag as le,a4 as Z,G as j,a0 as Te,a6 as Ie,C as X,aj as Ne,ah as Oe,aO as We,aK as R,aP as oe,aa as fe,j as De,aQ as He,ak as ue,al as Se,aR as Pe,aS as Re,aT as G,F as me,a2 as $e,aU as Fe,a9 as je,aV as qe,Z as Be,am as Ye,b as ee,an as Ke,e as Ve,aW as Ue,J as S,L as B,M as H,N as A,O as T,aX as q,P as E,ar as W,S as re,T as se,aY as ce,R as pe,K as Ze,$ as Ge}from"../chunks/CJ9M0SER.js";import{p as Je,b as te,i as Qe}from"../chunks/DwzVqF4A.js";import{t as F,s as D,f as K,a as he}from"../chunks/BjoFFc1N.js";import{i as ie}from"../chunks/CWoxmhXP.js";import{b as $}from"../chunks/BdWlYubr.js";import{e as V,s as be}from"../chunks/BUAz8zZ8.js";import{o as ge,a as Xe}from"../chunks/BeD1NL7Z.js";function xe(r,i){return i}function et(r,i,e){for(var t=r.items,n=[],s=i.length,a=0;a<s;a++)Fe(i[a].e,n,!0);var u=s>0&&n.length===0&&e!==null;if(u){var g=e.parentNode;je(g),g.append(e),t.clear(),O(r,i[0].prev,i[s-1].next)}qe(n,()=>{for(var f=0;f<s;f++){var y=i[f];u||(t.delete(y.k),O(r,y.prev,y.next)),me(y.e,!u)}})}function we(r,i,e,t,n,s=null){var a=r,u={flags:i,items:new Map,first:null};{var g=r;a=I?U(ze(g)):g.appendChild(ve())}I&&Ce();var f=null,y=!1,z=new Map,v=Ee(()=>{var m=e();return De(m)?m:m==null?[]:fe(m)}),w,h;function l(){tt(h,w,u,z,a,n,i,t,e),s!==null&&(w.length===0?f?ue(f):f=X(()=>s(a)):f!==null&&Se(f,()=>{f=null}))}Le(()=>{h??=Be,w=x(v);var m=w.length;if(y&&m===0)return;y=m===0;let o=!1;if(I){var d=Me(a)===Ae;d!==(m===0)&&(a=le(),U(a),Z(!1),o=!0)}if(I){for(var c=null,p,b=0;b<m;b++){if(j.nodeType===Te&&j.data===Ie){a=j,o=!0,Z(!1);break}var L=w[b],C=t(L,b);p=ae(j,u,c,null,L,C,b,n,i,e),u.items.set(C,p),c=p}m>0&&U(le())}if(I)m===0&&s&&(f=X(()=>s(a)));else if(Ne()){var k=new Set,_=Oe;for(b=0;b<m;b+=1){L=w[b],C=t(L,b);var M=u.items.get(C)??z.get(C);M?_e(M,L,b):(p=ae(null,u,null,null,L,C,b,n,i,e,!0),z.set(C,p)),k.add(C)}for(const[N,P]of u.items)k.has(N)||_.skipped_effects.add(P.e);_.add_callback(l)}else l();o&&Z(!0),x(v)}),I&&(a=j)}function tt(r,i,e,t,n,s,a,u,g){var f=i.length,y=e.items,z=e.first,v=z,w,h=null,l=[],m=[],o,d,c,p;for(p=0;p<f;p+=1){if(o=i[p],d=u(o,p),c=y.get(d),c===void 0){var b=t.get(d);if(b!==void 0){t.delete(d),y.set(d,b);var L=h?h.next:v;O(e,h,b),O(e,b,L),J(b,L,n),h=b}else{var C=v?v.e.nodes_start:n;h=ae(C,e,h,h===null?e.first:h.next,o,d,p,s,a,g)}y.set(d,h),l=[],m=[],v=h.next;continue}if(_e(c,o,p),(c.e.f&G)!==0&&ue(c.e),c!==v){if(w!==void 0&&w.has(c)){if(l.length<m.length){var k=m[0],_;h=k.prev;var M=l[0],N=l[l.length-1];for(_=0;_<l.length;_+=1)J(l[_],k,n);for(_=0;_<m.length;_+=1)w.delete(m[_]);O(e,M.prev,N.next),O(e,h,M),O(e,N,k),v=k,h=N,p-=1,l=[],m=[]}else w.delete(c),J(c,v,n),O(e,c.prev,c.next),O(e,c,h===null?e.first:h.next),O(e,h,c),h=c;continue}for(l=[],m=[];v!==null&&v.k!==d;)(v.e.f&G)===0&&(w??=new Set).add(v),m.push(v),v=v.next;if(v===null)continue;c=v}l.push(c),h=c,v=c.next}if(v!==null||w!==void 0){for(var P=w===void 0?[]:fe(w);v!==null;)(v.e.f&G)===0&&P.push(v),v=v.next;var ne=P.length;if(ne>0){var Y=f===0?n:null;et(e,P,Y)}}r.first=e.first&&e.first.e,r.last=h&&h.e;for(var ke of t.values())me(ke.e);t.clear()}function _e(r,i,e,t){We(r.v,i),r.i=e}function ae(r,i,e,t,n,s,a,u,g,f,y){var z=(g&Pe)!==0,v=(g&Re)===0,w=z?v?R(n,!1,!1):oe(n):n,h=(g&He)===0?a:oe(a),l={i:h,v:w,k:s,a:null,e:null,prev:e,next:t};try{if(r===null){var m=document.createDocumentFragment();m.append(r=ve())}return l.e=X(()=>u(r,w,h,f),I),l.e.prev=e&&e.e,l.e.next=t&&t.e,e===null?y||(i.first=l):(e.next=l,e.e.next=l.e),t!==null&&(t.prev=l,t.e.prev=l.e),l}finally{}}function J(r,i,e){for(var t=r.next?r.next.e.nodes_start:e,n=i?i.e.nodes_start:e,s=r.e.nodes_start;s!==null&&s!==t;){var a=$e(s);n.before(s),s=a}}function O(r,i,e){i===null?r.first=e:(i.next=e,i.e.next=e&&e.e),e!==null&&(e.prev=i,e.e.prev=i&&i.e)}function Q(r,i,e){Ye(()=>{var t=ee(()=>i(r,e?.())||{});if(e&&t?.update){var n=!1,s={};Ke(()=>{var a=e();Ve(a),n&&Ue(s,a)&&(s=a,t.update(a))}),n=!0}if(t?.destroy)return()=>t.destroy()})}const de=[...` 	
\r\f \v\uFEFF`];function at(r,i,e){var t=r==null?"":""+r;if(i&&(t=t?t+" "+i:i),e){for(var n in e)if(e[n])t=t?t+" "+n:n;else if(t.length)for(var s=n.length,a=0;(a=t.indexOf(n,a))>=0;){var u=a+s;(a===0||de.includes(t[a-1]))&&(u===t.length||de.includes(t[u]))?t=(a===0?"":t.substring(0,a))+t.substring(u+1):a=u}}return t===""?null:t}function rt(r,i){return r==null?null:String(r)}function ye(r,i,e,t,n,s){var a=r.__className;if(I||a!==e||a===void 0){var u=at(e,t,s);(!I||u!==r.getAttribute("class"))&&(u==null?r.removeAttribute("class"):r.className=u),r.__className=e}else if(s&&n!==s)for(var g in s){var f=!!s[g];(n==null||f!==!!n[g])&&r.classList.toggle(g,f)}return s}function st(r,i,e,t){var n=r.__style;if(I||n!==i){var s=rt(i);(!I||s!==r.getAttribute("style"))&&(s==null?r.removeAttribute("style"):r.style.cssText=s),r.__style=i}return t}var it=S('<section class="hero-section svelte-3dzc6l"><h1 class="hero-title svelte-3dzc6l">Looking for a <span class="hero-title-accent svelte-3dzc6l">Site?</span></h1> <p class="hero-desc svelte-3dzc6l">Here, you can find modern, clean, and organized websites for a business.</p> <div class="sp svelte-3dzc6l"><a class="sparkle-button svelte-3dzc6l" style="text-decoration:none;"><span class="spark svelte-3dzc6l"></span> <span class="backdrop svelte-3dzc6l"></span> <svg class="sparkle svelte-3dzc6l" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" class="svelte-3dzc6l"></path><path d="M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40725 20.1216 6.71398 19.5796 7.14639 19.147C7.5788 18.7144 8.12065 18.4075 8.714 18.259L9.75 18L8.714 17.741C8.12065 17.5925 7.5788 17.2856 7.14639 16.853C6.71398 16.4204 6.40725 15.8784 6.259 15.285L6 14.25Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" class="svelte-3dzc6l"></path><path d="M6.5 4L6.303 4.5915C6.24777 4.75718 6.15472 4.90774 6.03123 5.03123C5.90774 5.15472 5.75718 5.24777 5.5915 5.303L5 5.5L5.5915 5.697C5.75718 5.75223 5.90774 5.84528 6.03123 5.96877C6.15472 6.09226 6.24777 6.24282 6.303 6.4085L6.5 7L6.697 6.4085C6.75223 6.24282 6.84528 6.09226 6.96877 5.96877C7.09226 5.84528 7.24282 5.75223 7.4085 5.697L8 5.5L7.4085 5.303C7.24282 5.24777 7.09226 5.15472 6.96877 5.03123C6.84528 4.90774 6.75223 4.75718 6.697 4.5915L6.5 4Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" class="svelte-3dzc6l"></path></svg> <span class="text svelte-3dzc6l">Contact Me</span></a> <div class="bodydrop svelte-3dzc6l"></div> <span aria-hidden="true" class="particle-pen svelte-3dzc6l"></span></div></section>');function nt(r){let i=$+"/contact";var e=it(),t=A(e),n=T(t,2),s=T(n,2),a=A(s);q(4),E(s),E(e),B(()=>D(a,"href",i)),F(1,t,()=>K,()=>({y:40,duration:700})),F(1,n,()=>he,()=>({delay:200,duration:600})),F(1,s,()=>K,()=>({y:20,delay:400,duration:600})),H(r,e)}var lt=S('<section id="about" class="w-full py-16 flex flex-col items-center px-2 sm:px-0"><h2 class="text-3xl font-bold mb-4 sm:text-4xl text-center">About</h2> <p class="max-w-xl text-center text-gray-0 text-base sm:text-lg">I create modern, animated websites using advanced AI tools, delivering unique and engaging online experiences tailored to your business.</p></section>');function ot(r){var i=lt();F(1,i,()=>he),H(r,i)}var ct=S('<li><a class="menu-link svelte-13e88bs"> </a></li>'),dt=S('<nav class="menu-bar svelte-13e88bs"><div class="menu-brand svelte-13e88bs">KaiiDesu</div> <button class="menu-mobile-btn svelte-13e88bs" aria-label="Open menu"><svg width="28" height="28" fill="none" stroke="white" stroke-width="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"></path></svg></button> <ul></ul></nav>');function vt(r,i){let e=Je(i,"menuItems",12);e([{name:"Home",href:$+"/"},{name:"About",href:"#about"},{name:"Contact",href:$+"/contact"}]);let t=R(!1);function n(){W(t,!x(t))}var s=dt(),a=T(A(s),2),u=T(a,2);we(u,5,e,xe,(g,f)=>{var y=ct(),z=A(y),v=A(z,!0);E(z),E(y),B(()=>{D(z,"href",(x(f),ee(()=>x(f).href))),be(v,(x(f),ee(()=>x(f).name)))}),V("click",z,()=>{W(t,!1)}),H(g,y)}),E(u),E(s),B(()=>ye(u,1,`menu-list ${x(t)?"open":""}`,"svelte-13e88bs")),V("click",a,n),F(1,s,()=>K,()=>({y:-60,duration:700})),H(r,s)}var ft=S('<canvas class="fixed inset-0 w-full h-full z-0 pointer-events-none" style="background:black;"></canvas>');function ut(r,i){re(i,!1);let e=R(),t,n;const s=3,a=4,u=[];for(let o=0;o<a;o++)for(let d=0;d<a;d++)for(let c=0;c<a;c++){const p=o/(a-1)*2-1,b=d/(a-1)*2-1,L=c/(a-1)*2-1;u.push([p,b,L])}const g=[];function f(o,d,c){return o*a*a+d*a+c}for(let o=0;o<a;o++)for(let d=0;d<a;d++)for(let c=0;c<a;c++)o<a-1&&g.push([f(o,d,c),f(o+1,d,c)]),d<a-1&&g.push([f(o,d,c),f(o,d+1,c)]),c<a-1&&g.push([f(o,d,c),f(o,d,c+1)]);function y([o,d,c],p,b,L){let C=o*Math.cos(L)-d*Math.sin(L),k=o*Math.sin(L)+d*Math.cos(L),_=c,M=k*Math.cos(p)-_*Math.sin(p),N=k*Math.sin(p)+_*Math.cos(p),P=C*Math.cos(b)+N*Math.sin(b);const Y=320/(-C*Math.sin(b)+N*Math.cos(b)+8);return[P*s*Y,M*s*Y]}let z={x:0,y:0,rotOffset:0};function v(){z={x:0,y:0,rotOffset:0}}let w=0;const h=1e3/30;function l(o){if(o-w<h){n=requestAnimationFrame(l);return}w=o,t.clearRect(0,0,x(e).width,x(e).height);const{x:d,y:c,rotOffset:p}=z;t.save(),t.translate(x(e).width/2+d,x(e).height/2+c);const b=o*5e-4+.7+p,L=o*5e-4+.7+p*.7,C=o*5e-4+.7+p*.3,k=u.map(([_,M,N])=>y([_,M,N],b,L,C));t.save(),t.strokeStyle="rgba(0,0,0,0.0)",t.shadowColor="rgba(0,180,255,0.5)",t.shadowBlur=12,t.lineWidth=3;for(const[_,M]of g)t.beginPath(),t.moveTo(k[_][0],k[_][1]),t.lineTo(k[M][0],k[M][1]),t.stroke();t.restore(),t.save(),t.strokeStyle="rgba(0,180,255,0.85)",t.lineWidth=1.2;for(const[_,M]of g)t.beginPath(),t.moveTo(k[_][0],k[_][1]),t.lineTo(k[M][0],k[M][1]),t.stroke();t.restore(),t.restore(),n=requestAnimationFrame(l)}ge(()=>{const o=x(e).getContext("2d");if(!o)return;t=o;function d(){ce(e,x(e).width=window.innerWidth),ce(e,x(e).height=window.innerHeight),v()}return d(),window.addEventListener("resize",d),n=requestAnimationFrame(l),()=>{window.removeEventListener("resize",d),cancelAnimationFrame(n)}}),ie();var m=ft();te(m,o=>W(e,o),()=>x(e)),H(r,m),se()}var mt=S('<div><img class="cardlet-img svelte-1a92n1b"/> <span class="card-label svelte-1a92n1b"> </span> <a target="_blank" rel="noopener" class="cardlet-btn svelte-1a92n1b">Preview</a></div>'),pt=S('<div class="main svelte-1a92n1b" tabindex="0"></div> <div class="arrow-controls svelte-1a92n1b"><button aria-label="Previous card" class="svelte-1a92n1b">&larr;</button> <button aria-label="Next card" class="svelte-1a92n1b">&rarr;</button></div>',1);function ht(r,i){re(i,!1);let e=R(-1),t=R(),n=R();ge(()=>{document.addEventListener("mousedown",s),document.addEventListener("touchstart",s)}),Xe(()=>{document.removeEventListener("mousedown",s),document.removeEventListener("touchstart",s)});function s(v){!x(t)?.contains(v.target)&&!x(n)?.contains(v.target)&&W(e,-1)}let a=[{img:$+"/example.jpg",alt:"Example Website 1",link:"https://example.com",label:"Example Website 1"},{img:$+"/example.jpg",alt:"Example Website 2",link:"https://example.com",label:"Example Website 2"},{img:$+"/example.jpg",alt:"Example Website 3",link:"https://example.com",label:"Example Website 3"}];ie();var u=pt(),g=pe(u);we(g,5,()=>a,xe,(v,w,h)=>{var l=mt();let m;D(l,"id",`c${h+1}`);var o=A(l),d=T(o,2),c=A(d,!0);E(d);var p=T(d,2);E(l),B(b=>{m=ye(l,1,"card svelte-1a92n1b",null,m,b),st(l,`z-index: ${x(e)===h?10:3-h};`),D(o,"src",x(w).img),D(o,"alt",x(w).alt),be(c,x(w).label),D(p,"href",x(w).link)},[()=>({"active-card":x(e)===h})]),H(v,l)}),E(g),te(g,v=>W(t,v),()=>x(t));var f=T(g,2),y=A(f),z=T(y,2);E(f),te(f,v=>W(n,v),()=>x(n)),V("click",y,()=>W(e,(x(e)+2)%3)),V("click",z,()=>W(e,(x(e)+1)%3)),H(r,u),se()}var bt=S('<div class="cardlet-container"><div class="cardlet-grid"><div class="cardlet cardlet-hidden"><img alt="Example Website 1" class="cardlet-img"/> <a href="https://example.com" target="_blank" rel="noopener" class="cardlet-btn">Preview</a></div> <div class="cardlet cardlet-hidden"><img alt="Example Website 2" class="cardlet-img"/> <a href="https://example.com" target="_blank" rel="noopener" class="cardlet-btn">Preview</a></div> <div class="cardlet cardlet-hidden"><img alt="Example Website 3" class="cardlet-img"/> <a href="https://example.com" target="_blank" rel="noopener" class="cardlet-btn">Preview</a></div></div></div>'),gt=S(`<!> <div class="relative min-h-screen w-full bg-black"><!> <main class="text-white flex flex-col items-center justify-center pt-24 relative z-10"><!> <!> <!> <style>html {
      box-sizing: border-box;
    }
    *, *:before, *:after {
      box-sizing: inherit;
    }
    .cardlet-container {
      width: 100vw;
      max-width: 100vw;
      overflow-x: hidden;
    }
    .cardlet-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      width: 100%;
      min-width: 0;
      justify-items: center;
    }
    @media (max-width: 900px) {
      .cardlet-grid {
        gap: 1.2rem;
      }
      .cardlet {
        padding: 0.7rem;
        font-size: 0.95rem;
      }
      .cardlet-img {
        height: 5.5rem;
      }
      .cardlet-container {
        padding: 1.5rem 0.5rem;
      }
    }
    @media (max-width: 600px) {
      .cardlet-container {
        margin-top: 0.7rem;
        margin-bottom: 0.7rem;
        padding: 0.5rem 0.1rem;
      }
      .cardlet-grid {
        gap: 0.3rem;
        width: 100%;
        min-width: 0;
        grid-template-columns: repeat(3, 1fr);
      }
      .cardlet {
        width: 100%;
        max-width: 200px;
        min-width: 0;
        padding: 0.3rem;
        font-size: 0.8rem;
        max-height: 200px;
      }
      .cardlet-img {
        height: 2.8rem;
        margin-bottom: 0.3rem;
      }
      .cardlet-btn {
        padding: 0.3rem 0.7rem;
        font-size: 0.85rem;
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
}</style></main></div>`,1);function Mt(r,i){re(i,!1);let e=$+"/example.jpg",t=R(!1);if(typeof window<"u"){const l=()=>W(t,window.innerWidth<=600);l(),window.addEventListener("resize",l)}function n(l,m={delay:0}){let o;const d=p=>{p.forEach(b=>{b.isIntersecting?o=setTimeout(()=>{l.classList.add("cardlet-visible"),l.classList.remove("cardlet-hidden")},m.delay||0):(clearTimeout(o),l.classList.remove("cardlet-visible"),l.classList.add("cardlet-hidden"))})},c=new IntersectionObserver(d,{threshold:.15});return c.observe(l),{update(p){m=p},destroy(){c.disconnect(),clearTimeout(o)}}}ie();var s=gt();Ze(l=>{Ge.title="Homepage | KaiiDesu"});var a=pe(s);vt(a,{});var u=T(a,2),g=A(u);ut(g,{});var f=T(g,2),y=A(f);nt(y);var z=T(y,2);ot(z);var v=T(z,2);{var w=l=>{ht(l,{})},h=l=>{var m=bt(),o=A(m),d=A(o),c=A(d);q(2),E(d),Q(d,(k,_)=>n?.(k,_),()=>({delay:0}));var p=T(d,2),b=A(p);q(2),E(p),Q(p,(k,_)=>n?.(k,_),()=>({delay:350}));var L=T(p,2),C=A(L);q(2),E(L),Q(L,(k,_)=>n?.(k,_),()=>({delay:700})),E(o),E(m),B(()=>{D(c,"src",e),D(b,"src",e),D(C,"src",e)}),H(l,m)};Qe(v,l=>{x(t)?l(w):l(h,!1)})}q(4),E(f),E(u),F(1,f,()=>K,()=>({y:60,duration:700})),H(r,s),se()}export{Mt as component};
