import{Y as q,S as F,i as G,s as H,k as E,l as I,m as S,h as d,n as _,b as D,v as R,d as h,f as Y,g as y,V as j,o as z,D as V,E as L,F as M,G as O}from"./index.60a46ca1.js";function A(l){const t=l-1;return t*t*t+1}function T(l,{delay:t=0,duration:n=400,easing:i=q}={}){const u=+getComputedStyle(l).opacity;return{delay:t,duration:n,easing:i,css:o=>`opacity: ${o*u}`}}function U(l,{delay:t=0,duration:n=400,easing:i=A,x:u=0,y:o=0,opacity:e=0}={}){const s=getComputedStyle(l),a=+s.opacity,c=s.transform==="none"?"":s.transform,f=a*(1-e);return{delay:t,duration:n,easing:i,css:(v,g)=>`
			transform: ${c} translate(${(1-v)*u}px, ${(1-v)*o}px);
			opacity: ${a-f*g}`}}function J(l){let t,n,i;const u=l[10].default,o=V(u,l,l[9],null);return{c(){t=E("div"),o&&o.c(),this.h()},l(e){t=I(e,"DIV",{style:!0});var s=S(t);o&&o.l(s),s.forEach(d),this.h()},h(){_(t,"style",n="animation: "+l[1]+"; "+l[3])},m(e,s){D(e,t,s),o&&o.m(t,null),i=!0},p(e,s){o&&o.p&&(!i||s&512)&&L(o,u,e,e[9],i?O(u,e[9],s,null):M(e[9]),null),(!i||s&10&&n!==(n="animation: "+e[1]+"; "+e[3]))&&_(t,"style",n)},i(e){i||(y(o,e),i=!0)},o(e){h(o,e),i=!1},d(e){e&&d(t),o&&o.d(e)}}}function K(l){let t,n,i;const u=l[10].default,o=V(u,l,l[9],null);return{c(){t=E("div"),o&&o.c(),this.h()},l(e){t=I(e,"DIV",{style:!0});var s=S(t);o&&o.l(s),s.forEach(d),this.h()},h(){_(t,"style",n="animation: "+l[0]+"; "+l[3])},m(e,s){D(e,t,s),o&&o.m(t,null),i=!0},p(e,s){o&&o.p&&(!i||s&512)&&L(o,u,e,e[9],i?O(u,e[9],s,null):M(e[9]),null),(!i||s&9&&n!==(n="animation: "+e[0]+"; "+e[3]))&&_(t,"style",n)},i(e){i||(y(o,e),i=!0)},o(e){h(o,e),i=!1},d(e){e&&d(t),o&&o.d(e)}}}function N(l){let t,n,i,u;const o=[K,J],e=[];function s(a,c){return a[4]?0:1}return n=s(l),i=e[n]=o[n](l),{c(){t=E("div"),i.c(),this.h()},l(a){t=I(a,"DIV",{id:!0,style:!0});var c=S(t);i.l(c),c.forEach(d),this.h()},h(){_(t,"id",l[5]),_(t,"style",l[2])},m(a,c){D(a,t,c),e[n].m(t,null),u=!0},p(a,[c]){let f=n;n=s(a),n===f?e[n].p(a,c):(R(),h(e[f],1,1,()=>{e[f]=null}),Y(),i=e[n],i?i.p(a,c):(i=e[n]=o[n](a),i.c()),y(i,1),i.m(t,null)),(!u||c&4)&&_(t,"style",a[2])},i(a){u||(y(i),u=!0)},o(a){h(i),u=!1},d(a){a&&d(t),e[n].d()}}}function P(l,t,n){let{$$slots:i={},$$scope:u}=t,{animation:o="none"}=t,{animation_out:e="none; opacity: 0"}=t,{once:s=!1}=t,{top:a=0}=t,{bottom:c=0}=t,{css_observer:f=""}=t,{css_animation:v=""}=t;const g=j();let m=!0;const C=`__saos-${Math.random()}__`;function B(r){const b=`${-c}px 0px ${-a}px 0px`,w=new IntersectionObserver(p=>{n(4,m=p[0].isIntersecting),m&&s&&w.unobserve(r)},{rootMargin:b});return w.observe(r),()=>w.unobserve(r)}function k(r){const b=r.getBoundingClientRect();return n(4,m=b.top+a<window.innerHeight&&b.bottom-c>0),m&&s&&window.removeEventListener("scroll",verify),window.addEventListener("scroll",k),()=>window.removeEventListener("scroll",k)}return z(()=>{const r=document.getElementById(C);return IntersectionObserver?B(r):k(r)}),l.$$set=r=>{"animation"in r&&n(0,o=r.animation),"animation_out"in r&&n(1,e=r.animation_out),"once"in r&&n(6,s=r.once),"top"in r&&n(7,a=r.top),"bottom"in r&&n(8,c=r.bottom),"css_observer"in r&&n(2,f=r.css_observer),"css_animation"in r&&n(3,v=r.css_animation),"$$scope"in r&&n(9,u=r.$$scope)},l.$$.update=()=>{l.$$.dirty&16&&g("update",{observing:m})},[o,e,f,v,m,C,s,a,c,u,i]}class W extends F{constructor(t){super(),G(this,t,P,N,H,{animation:0,animation_out:1,once:6,top:7,bottom:8,css_observer:2,css_animation:3})}}export{W as S,T as a,U as f};
