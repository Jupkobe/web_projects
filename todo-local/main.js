(()=>{"use strict";const e=new Set,t=new WeakMap,n=new WeakMap,o=new WeakMap,i=new WeakMap,r=new WeakMap,a=new WeakMap,s=new WeakMap,l=new WeakSet;let d,c=0,u=0;const f="__aa_tgt",m="__aa_del",p="__aa_new";function g(e){clearTimeout(s.get(e));const n=M(e),r=T(n)?500:n.duration;s.set(e,setTimeout((async()=>{const n=o.get(e);try{await(null==n?void 0:n.finished),t.set(e,S(e)),function(e){const n=i.get(e);null==n||n.disconnect();let o=t.get(e),r=0;o||(o=S(e),t.set(e,o));const{offsetWidth:a,offsetHeight:s}=d,l=[o.top-5,a-(o.left+5+o.width),s-(o.top+5+o.height),o.left-5].map((e=>-1*Math.floor(e)+"px")).join(" "),c=new IntersectionObserver((()=>{++r>1&&g(e)}),{root:d,threshold:1,rootMargin:l});c.observe(e),i.set(e,c)}(e)}catch{}}),r))}function h(e){setTimeout((()=>{r.set(e,setInterval((()=>y(g.bind(null,e))),2e3))}),Math.round(2e3*Math.random()))}function y(e){"function"==typeof requestIdleCallback?requestIdleCallback((()=>e())):requestAnimationFrame((()=>e()))}let v,w;function b(e,t){t||f in e?t&&!(f in t)&&Object.defineProperty(t,f,{value:e}):Object.defineProperty(e,f,{value:e})}function E(e){return Number(e.replace(/[^0-9.\-]/g,""))}function S(e){const t=e.getBoundingClientRect(),{x:n,y:o}=function(e){let t=e.parentElement;for(;t;){if(t.scrollLeft||t.scrollTop)return{x:t.scrollLeft,y:t.scrollTop};t=t.parentElement}return{x:0,y:0}}(e);return{top:t.top+o,left:t.left+n,width:t.width,height:t.height}}function L(e,t,n){let o=t.width,i=t.height,r=n.width,a=n.height;const s=getComputedStyle(e);if("content-box"===s.getPropertyValue("box-sizing")){const e=E(s.paddingTop)+E(s.paddingBottom)+E(s.borderTopWidth)+E(s.borderBottomWidth),t=E(s.paddingLeft)+E(s.paddingRight)+E(s.borderRightWidth)+E(s.borderLeftWidth);o-=t,r-=t,i-=e,a-=e}return[o,r,i,a].map(Math.round)}function M(e){return f in e&&a.has(e[f])?a.get(e[f]):{duration:250,easing:"ease-in-out"}}function N(e){if(f in e)return e[f]}function O(e){const t=N(e);return!!t&&l.has(t)}function x(e,...t){t.forEach((t=>t(e,a.has(e))));for(let n=0;n<e.children.length;n++){const o=e.children.item(n);o&&t.forEach((e=>e(o,a.has(o))))}}function C(e){return Array.isArray(e)?e:[e]}function T(e){return"function"==typeof e}function W(e){p in e&&delete e[p];const n=S(e);t.set(e,n);const i=M(e);if(!O(e))return;let r;if("function"!=typeof i)r=e.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:1.5*i.duration,easing:"ease-in"});else{const[t]=C(i(e,"add",n));r=new Animation(t),r.play()}o.set(e,r),r.addEventListener("finish",g.bind(null,e))}function I(e,r){var a;e.remove(),t.delete(e),n.delete(e),o.delete(e),null===(a=i.get(e))||void 0===a||a.disconnect(),setTimeout((()=>{if(m in e&&delete e[m],Object.defineProperty(e,p,{value:!0,configurable:!0}),r&&e instanceof HTMLElement)for(const t in r)e.style[t]=""}),0)}function k(e){const t=document.querySelector("#todo-list"),n=document.createElement("div");n.className="todo",n.dataset.id=e.id,n.dataset.completed=e.completed,n.innerHTML=`<p>${e.title}</p> <i class="fa-solid fa-xmark"></i>`,e.completed?(n.classList.add("completed"),t.append(n)):t.prepend(n)}"undefined"!=typeof window&&(d=document.documentElement,v=new MutationObserver((e=>{const i=function(e){return!e.reduce(((e,t)=>[...e,...Array.from(t.addedNodes),...Array.from(t.removedNodes)]),[]).every((e=>"#comment"===e.nodeName))&&e.reduce(((e,t)=>{if(!1===e)return!1;if(t.target instanceof Element){if(b(t.target),!e.has(t.target)){e.add(t.target);for(let n=0;n<t.target.children.length;n++){const o=t.target.children.item(n);if(o){if(m in o)return!1;b(t.target,o),e.add(o)}}}if(t.removedNodes.length)for(let o=0;o<t.removedNodes.length;o++){const i=t.removedNodes[o];if(m in i)return!1;i instanceof Element&&(e.add(i),b(t.target,i),n.set(i,[t.previousSibling,t.nextSibling]))}}return e}),new Set)}(e);i&&i.forEach((e=>function(e){var i;const r=e.isConnected,a=t.has(e);r&&n.has(e)&&n.delete(e),o.has(e)&&(null===(i=o.get(e))||void 0===i||i.cancel()),p in e?W(e):a&&r?function(e){const n=t.get(e),i=S(e);if(!O(e))return t.set(e,i);let r;if(!n)return;const a=M(e);if("function"!=typeof a){const t=n.left-i.left,o=n.top-i.top,[s,l,d,c]=L(e,n,i),u={transform:`translate(${t}px, ${o}px)`},f={transform:"translate(0, 0)"};s!==l&&(u.width=`${s}px`,f.width=`${l}px`),d!==c&&(u.height=`${d}px`,f.height=`${c}px`),r=e.animate([u,f],{duration:a.duration,easing:a.easing})}else{const[t]=C(a(e,"remain",n,i));r=new Animation(t),r.play()}o.set(e,r),t.set(e,i),r.addEventListener("finish",g.bind(null,e))}(e):a&&!r?function(e){var i;if(!n.has(e)||!t.has(e))return;const[r,a]=n.get(e);Object.defineProperty(e,m,{value:!0,configurable:!0});const s=window.scrollX,l=window.scrollY;if(a&&a.parentNode&&a.parentNode instanceof Element?a.parentNode.insertBefore(e,a):r&&r.parentNode?r.parentNode.appendChild(e):null===(i=N(e))||void 0===i||i.appendChild(e),!O(e))return I(e);const[f,p,g,h]=function(e){const n=t.get(e),[o,,i]=L(e,n,S(e));let r=e.parentElement;for(;r&&("static"===getComputedStyle(r).position||r instanceof HTMLBodyElement);)r=r.parentElement;r||(r=document.body);const a=getComputedStyle(r),s=t.get(r)||S(r);return[Math.round(n.top-s.top)-E(a.borderTopWidth),Math.round(n.left-s.left)-E(a.borderLeftWidth),o,i]}(e),y=M(e),v=t.get(e);s===c&&l===u||function(e,t,n,o){const i=c-t,r=u-n,a=document.documentElement.style.scrollBehavior;if("smooth"===getComputedStyle(d).scrollBehavior&&(document.documentElement.style.scrollBehavior="auto"),window.scrollTo(window.scrollX+i,window.scrollY+r),!e.parentElement)return;const s=e.parentElement;let l=s.clientHeight,f=s.clientWidth;const m=performance.now();!function e(){requestAnimationFrame((()=>{if(!T(o)){const t=l-s.clientHeight,n=f-s.clientWidth;m+o.duration>performance.now()?(window.scrollTo({left:window.scrollX-n,top:window.scrollY-t}),l=s.clientHeight,f=s.clientWidth,e()):document.documentElement.style.scrollBehavior=a}}))}()}(e,s,l,y);let w,b={position:"absolute",top:`${f}px`,left:`${p}px`,width:`${g}px`,height:`${h}px`,margin:"0",pointerEvents:"none",transformOrigin:"center",zIndex:"100"};if(T(y)){const[t,n]=C(y(e,"remove",v));!1!==(null==n?void 0:n.styleReset)&&(b=(null==n?void 0:n.styleReset)||b,Object.assign(e.style,b)),w=new Animation(t),w.play()}else Object.assign(e.style,b),w=e.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:y.duration,easing:"ease-out"});o.set(e,w),w.addEventListener("finish",I.bind(null,e,b))}(e):W(e)}(e)))})),w=new ResizeObserver((n=>{n.forEach((n=>{n.target===d&&(clearTimeout(s.get(d)),s.set(d,setTimeout((()=>{e.forEach((e=>x(e,(e=>y((()=>g(e)))))))}),100))),t.has(n.target)&&g(n.target)}))})),window.addEventListener("scroll",(()=>{u=window.scrollY,c=window.scrollX})),w.observe(d)),localStorage.getItem("todos")||localStorage.setItem("todos",JSON.stringify([])),function(t,n={}){v&&w&&(window.matchMedia("(prefers-reduced-motion: reduce)").matches&&!T(n)&&!n.disrespectUserMotionPreference||(l.add(t),"static"===getComputedStyle(t).position&&Object.assign(t.style,{position:"relative"}),x(t,g,h,(e=>null==w?void 0:w.observe(e))),T(n)?a.set(t,n):a.set(t,{duration:250,easing:"ease-in-out",...n}),v.observe(t,{childList:!0}),e.add(t))),Object.freeze({parent:t,enable:()=>{l.add(t)},disable:()=>{l.delete(t)},isEnabled:()=>l.has(t)})}(document.querySelector("#todo-list"),{duration:150,easing:"ease-in-out",disrespectUserMotionPreference:!1}),document.addEventListener("DOMContentLoaded",(function(){const e=JSON.parse(localStorage.getItem("todos"));document.querySelector("#todo-list").innerHTML="",e.forEach((e=>{k(e)}))})),document.querySelector("form").addEventListener("submit",(function(e){let t;if(e.preventDefault(),e.target.firstElementChild.value){if(t=e.target.firstElementChild.value,e.target.firstElementChild.value="","burhanaltintop"==t)return document.body.style.backgroundImage="url('/burhan_altintop.jpg')",void setTimeout((()=>{document.body.style.backgroundImage=""}),5e3);!function(e){const t=JSON.parse(localStorage.getItem("todos"));let n;n=t.length?t[t.length-1].id+1:1;let o={title:e,id:n,completed:!1};t.push(o),localStorage.setItem("todos",JSON.stringify(t)),k(o)}(t)}})),document.querySelector("#todo-list").addEventListener("click",(function(e){if("I"!=e.target.tagName)return;const t=e.target.parentElement;!function(e){let t=JSON.parse(localStorage.getItem("todos"));t=t.filter((t=>t.id!=e)),localStorage.setItem("todos",JSON.stringify(t))}(t.dataset.id),function(e){document.querySelector("#todo-list").removeChild(e)}(t)})),document.querySelector("#todo-list").addEventListener("click",(function(e){if(!e.target.classList.contains("todo")&&"P"!=e.target.tagName)return;const t=e.target.closest("div");!function(e){const t=JSON.parse(localStorage.getItem("todos"));t.forEach((t=>{t.id==e&&(t.completed=!t.completed)})),localStorage.setItem("todos",JSON.stringify(t))}(t.dataset.id),function(e){const t=document.querySelector("#todo-list");"false"==e.dataset.completed?(e.classList.add("completed"),e.dataset.completed="true",t.removeChild(e),t.append(e)):(e.classList.remove("completed"),e.dataset.completed="false",t.removeChild(e),t.prepend(e))}(t)}))})();