(this["webpackJsonptpi-corpochivor-app"]=this["webpackJsonptpi-corpochivor-app"]||[]).push([[47],{122:function(t,n,i){"use strict";i.r(n),i.d(n,"ion_ripple_effect",(function(){return u}));var a=i(17),e=i(3),o=i.n(e),r=i(5),c=i(7),s=i(9),f=i(14),l=i(15),u=function(){function t(n){Object(c.a)(this,t),Object(f.o)(this,n),this.type="bounded"}return Object(s.a)(t,[{key:"addRipple",value:function(){var t=Object(r.a)(o.a.mark((function t(n,i){var a=this;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){Object(f.h)((function(){var e=a.el.getBoundingClientRect(),o=e.width,r=e.height,c=Math.sqrt(o*o+r*r),s=Math.max(r,o),l=a.unbounded?s:c+p,u=Math.floor(s*d),b=l/u,h=n-e.left,k=i-e.top;a.unbounded&&(h=.5*o,k=.5*r);var w=h-.5*u,v=k-.5*u,y=.5*o-h,g=.5*r-k;Object(f.f)((function(){var n=document.createElement("div");n.classList.add("ripple-effect");var i=n.style;i.top=v+"px",i.left=w+"px",i.width=i.height=u+"px",i.setProperty("--final-scale","".concat(b)),i.setProperty("--translate-end","".concat(y,"px, ").concat(g,"px")),(a.el.shadowRoot||a.el).appendChild(n),setTimeout((function(){t((function(){m(n)}))}),325)}))}))})));case 1:case"end":return t.stop()}}),t)})));return function(n,i){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t,n=Object(l.b)(this);return Object(f.j)(f.c,{role:"presentation",class:(t={},Object(a.a)(t,n,!0),Object(a.a)(t,"unbounded",this.unbounded),t)})}},{key:"unbounded",get:function(){return"unbounded"===this.type}},{key:"el",get:function(){return Object(f.k)(this)}}]),t}(),m=function(t){t.classList.add("fade-out"),setTimeout((function(){t.remove()}),200)},p=10,d=.5;u.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}"}}]);
//# sourceMappingURL=47.cc099095.chunk.js.map