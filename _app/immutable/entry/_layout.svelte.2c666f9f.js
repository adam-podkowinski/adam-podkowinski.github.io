import{S as F,i as K,s as H,e as G,b as g,v as X,d as $,C as b,f as Y,g as p,h as c,D as Z,k as d,l as _,m,E as x,F as ee,G as te,H as ae,I as se,J as le,q as A,a as C,r as I,c as D,n as h,K as u,o as re,y as P,z as V,A as T,B as z}from"../chunks/index.a8c43b42.js";import{f as J,S as ne}from"../chunks/Saos.89ba249d.js";function U(i){let e,l,a,t;const s=i[2].default,r=Z(s,i,i[1],null);return{c(){e=d("div"),r&&r.c()},l(o){e=_(o,"DIV",{});var n=m(e);r&&r.l(n),n.forEach(c)},m(o,n){g(o,e,n),r&&r.m(e,null),t=!0},p(o,n){r&&r.p&&(!t||n&2)&&x(r,s,o,o[1],t?te(s,o[1],n,null):ee(o[1]),null)},i(o){t||(p(r,o),ae(()=>{a&&a.end(1),l=se(e,J,{y:-10,duration:500,delay:500}),l.start()}),t=!0)},o(o){$(r,o),l&&l.invalidate(),a=le(e,J,{y:10,duration:500}),t=!1},d(o){o&&c(e),r&&r.d(o),o&&a&&a.end()}}}function oe(i){let e=i[0],l,a,t=U(i);return{c(){t.c(),l=G()},l(s){t.l(s),l=G()},m(s,r){t.m(s,r),g(s,l,r),a=!0},p(s,[r]){r&1&&H(e,e=s[0])?(X(),$(t,1,1,b),Y(),t=U(s),t.c(),p(t,1),t.m(l.parentNode,l)):t.p(s,r)},i(s){a||(p(t),a=!0)},o(s){$(t),a=!1},d(s){s&&c(l),t.d(s)}}}function ie(i,e,l){let{$$slots:a={},$$scope:t}=e,{pathname:s}=e;return i.$$set=r=>{"pathname"in r&&l(0,s=r.pathname),"$$scope"in r&&l(1,t=r.$$scope)},[s,t,a]}class fe extends F{constructor(e){super(),K(this,e,ie,oe,H,{pathname:0})}}function ce(i){let e,l,a,t,s,r,o,n,f,v,k,w,E,M;return{c(){e=d("header"),l=d("nav"),a=d("ul"),t=d("li"),s=d("a"),r=A("Home"),o=C(),n=d("li"),f=d("a"),v=A("My Work"),k=C(),w=d("li"),E=d("a"),M=A("Contact"),this.h()},l(S){e=_(S,"HEADER",{class:!0});var L=m(e);l=_(L,"NAV",{});var q=m(l);a=_(q,"UL",{class:!0});var y=m(a);t=_(y,"LI",{class:!0});var N=m(t);s=_(N,"A",{href:!0});var O=m(s);r=I(O,"Home"),O.forEach(c),N.forEach(c),o=D(y),n=_(y,"LI",{});var R=m(n);f=_(R,"A",{href:!0,target:!0,rel:!0});var W=m(f);v=I(W,"My Work"),W.forEach(c),R.forEach(c),k=D(y),w=_(y,"LI",{});var j=m(w);E=_(j,"A",{href:!0});var B=m(E);M=I(B,"Contact"),B.forEach(c),j.forEach(c),y.forEach(c),q.forEach(c),L.forEach(c),this.h()},h(){h(s,"href","#top"),h(t,"class","lg:flex-1"),h(f,"href","https://github.com/adam-podkowinski"),h(f,"target","_blank"),h(f,"rel","noreferrer"),h(E,"href","#contact"),h(a,"class","flex lg:gap-16 justify-between"),h(e,"class","py-9 lg:py-10 border-b-2 border-slate-800 page-spacing sticky top-0 text-md tracking-widest uppercase")},m(S,L){g(S,e,L),u(e,l),u(l,a),u(a,t),u(t,s),u(s,r),u(a,o),u(a,n),u(n,f),u(f,v),u(a,k),u(a,w),u(w,E),u(E,M)},p:b,i:b,o:b,d(S){S&&c(e)}}}class ue extends F{constructor(e){super(),K(this,e,null,ce,H,{})}}function de(i){let e,l,a,t,s,r;return{c(){e=d("footer"),l=d("p"),a=A("Adam Podkowiński©"),t=C(),s=d("p"),r=A("Site created with SvelteKit + TailwindCSS"),this.h()},l(o){e=_(o,"FOOTER",{class:!0});var n=m(e);l=_(n,"P",{});var f=m(l);a=I(f,"Adam Podkowiński©"),f.forEach(c),t=D(n),s=_(n,"P",{});var v=m(s);r=I(v,"Site created with SvelteKit + TailwindCSS"),v.forEach(c),n.forEach(c),this.h()},h(){h(e,"class","lg:px-40 px-8 bg-slate-800/30 py-9 lg:py-10 shadow-sm shadow-slate-800/40 text-md")},m(o,n){g(o,e,n),u(e,l),u(l,a),u(e,t),u(e,s),u(s,r)},p:b,i:b,o:b,d(o){o&&c(e)}}}class _e extends F{constructor(e){super(),K(this,e,null,de,H,{})}}function Q(i){let e,l,a,t,s,r,o;return l=new ne({props:{once:!0,animation:"slide-in-top .4s cubic-bezier(0.35, 0.5, 0.65, 0.95) both",$$slots:{default:[me]},$$scope:{ctx:i}}}),t=new fe({props:{pathname:i[0].pathname,$$slots:{default:[he]},$$scope:{ctx:i}}}),r=new _e({}),{c(){e=d("div"),P(l.$$.fragment),a=C(),P(t.$$.fragment),s=C(),P(r.$$.fragment),this.h()},l(n){e=_(n,"DIV",{class:!0});var f=m(e);V(l.$$.fragment,f),a=D(f),V(t.$$.fragment,f),f.forEach(c),s=D(n),V(r.$$.fragment,n),this.h()},h(){h(e,"class","min-h-screen bg-gradient-to-b from-slate-800/70 to-slate-900")},m(n,f){g(n,e,f),T(l,e,null),u(e,a),T(t,e,null),g(n,s,f),T(r,n,f),o=!0},p(n,f){const v={};f&8&&(v.$$scope={dirty:f,ctx:n}),l.$set(v);const k={};f&1&&(k.pathname=n[0].pathname),f&8&&(k.$$scope={dirty:f,ctx:n}),t.$set(k)},i(n){o||(p(l.$$.fragment,n),p(t.$$.fragment,n),p(r.$$.fragment,n),o=!0)},o(n){$(l.$$.fragment,n),$(t.$$.fragment,n),$(r.$$.fragment,n),o=!1},d(n){n&&c(e),z(l),z(t),n&&c(s),z(r,n)}}}function me(i){let e,l;return e=new ue({}),{c(){P(e.$$.fragment)},l(a){V(e.$$.fragment,a)},m(a,t){T(e,a,t),l=!0},i(a){l||(p(e.$$.fragment,a),l=!0)},o(a){$(e.$$.fragment,a),l=!1},d(a){z(e,a)}}}function he(i){let e,l;const a=i[2].default,t=Z(a,i,i[3],null);return{c(){e=d("div"),t&&t.c(),this.h()},l(s){e=_(s,"DIV",{class:!0});var r=m(e);t&&t.l(r),r.forEach(c),this.h()},h(){h(e,"class","z-[2]")},m(s,r){g(s,e,r),t&&t.m(e,null),l=!0},p(s,r){t&&t.p&&(!l||r&8)&&x(t,a,s,s[3],l?te(a,s[3],r,null):ee(s[3]),null)},i(s){l||(p(t,s),l=!0)},o(s){$(t,s),l=!1},d(s){s&&c(e),t&&t.d(s)}}}function pe(i){let e,l,a=i[1]&&Q(i);return{c(){e=d("div"),a&&a.c(),this.h()},l(t){e=_(t,"DIV",{class:!0});var s=m(e);a&&a.l(s),s.forEach(c),this.h()},h(){h(e,"class","bg-slate-900 text-blue-300 min-h-screen relative")},m(t,s){g(t,e,s),a&&a.m(e,null),l=!0},p(t,[s]){t[1]?a?(a.p(t,s),s&2&&p(a,1)):(a=Q(t),a.c(),p(a,1),a.m(e,null)):a&&(X(),$(a,1,1,()=>{a=null}),Y())},i(t){l||(p(a),l=!0)},o(t){$(a),l=!1},d(t){t&&c(e),a&&a.d()}}}function $e(i,e,l){let{$$slots:a={},$$scope:t}=e,s=!1;re(()=>l(1,s=!0));let{data:r}=e;return i.$$set=o=>{"data"in o&&l(0,r=o.data),"$$scope"in o&&l(3,t=o.$$scope)},[r,s,a,t]}class ke extends F{constructor(e){super(),K(this,e,$e,pe,H,{data:0})}}export{ke as default};
