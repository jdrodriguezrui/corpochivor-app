(this["webpackJsonptpi-corpochivor-app"]=this["webpackJsonptpi-corpochivor-app"]||[]).push([[16],{131:function(t,e,n){"use strict";n.r(e),n.d(e,"ion_tab",(function(){return l})),n.d(e,"ion_tabs",(function(){return h}));var r=n(3),i=n.n(r),a=n(5),s=n(7),o=n(9),c=n(14),u=n(142),l=function(){function t(e){Object(s.a)(this,t),Object(c.o)(this,e),this.loaded=!1,this.active=!1}return Object(o.a)(t,[{key:"componentWillLoad",value:function(){var t=Object(a.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.active){t.next=3;break}return t.next=3,this.setActive();case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"setActive",value:function(){var t=Object(a.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.prepareLazyLoaded();case 2:this.active=!0;case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"changeActive",value:function(t){t&&this.prepareLazyLoaded()}},{key:"prepareLazyLoaded",value:function(){if(!this.loaded&&null!=this.component){this.loaded=!0;try{return Object(u.a)(this.delegate,this.el,this.component,["ion-page"])}catch(t){console.error(t)}}return Promise.resolve(void 0)}},{key:"render",value:function(){var t=this.tab,e=this.active,n=this.component;return Object(c.j)(c.c,{role:"tabpanel","aria-hidden":e?null:"true","aria-labelledby":"tab-button-".concat(t),class:{"ion-page":void 0===n,"tab-hidden":!e}},Object(c.j)("slot",null))}},{key:"el",get:function(){return Object(c.k)(this)}}],[{key:"watchers",get:function(){return{active:["changeActive"]}}}]),t}();l.style=":host(.tab-hidden){display:none !important}";var h=function(){function t(e){var n=this;Object(s.a)(this,t),Object(c.o)(this,e),this.ionNavWillLoad=Object(c.g)(this,"ionNavWillLoad",7),this.ionTabsWillChange=Object(c.g)(this,"ionTabsWillChange",3),this.ionTabsDidChange=Object(c.g)(this,"ionTabsDidChange",3),this.transitioning=!1,this.useRouter=!1,this.onTabClicked=function(t){var e=t.detail,r=e.href,i=e.tab;if(n.useRouter&&void 0!==r){var a=document.querySelector("ion-router");a&&a.push(r)}else n.select(i)}}return Object(o.a)(t,[{key:"componentWillLoad",value:function(){var t=Object(a.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.useRouter||(this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]")),this.useRouter){t.next=6;break}if(!((e=this.tabs).length>0)){t.next=6;break}return t.next=6,this.select(e[0]);case 6:this.ionNavWillLoad.emit();case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentWillRender",value:function(){var t=this.el.querySelector("ion-tab-bar");if(t){var e=this.selectedTab?this.selectedTab.tab:void 0;t.selectedTab=e}}},{key:"select",value:function(){var t=Object(a.a)(i.a.mark((function t(e){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=b(this.tabs,e),this.shouldSwitch(n)){t.next=3;break}return t.abrupt("return",!1);case 3:return t.next=5,this.setActive(n);case 5:return t.next=7,this.notifyRouter();case 7:return this.tabSwitch(),t.abrupt("return",!0);case 9:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getTab",value:function(){var t=Object(a.a)(i.a.mark((function t(e){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",b(this.tabs,e));case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getSelected",value:function(){return Promise.resolve(this.selectedTab?this.selectedTab.tab:void 0)}},{key:"setRouteId",value:function(){var t=Object(a.a)(i.a.mark((function t(e){var n,r=this;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=b(this.tabs,e),this.shouldSwitch(n)){t.next=3;break}return t.abrupt("return",{changed:!1,element:this.selectedTab});case 3:return t.next=5,this.setActive(n);case 5:return t.abrupt("return",{changed:!0,element:this.selectedTab,markVisible:function(){return r.tabSwitch()}});case 6:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getRouteId",value:function(){var t=Object(a.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.selectedTab&&this.selectedTab.tab,t.abrupt("return",void 0!==e?{id:e,element:this.selectedTab}:void 0);case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"setActive",value:function(t){return this.transitioning?Promise.reject("transitioning already happening"):(this.transitioning=!0,this.leavingTab=this.selectedTab,this.selectedTab=t,this.ionTabsWillChange.emit({tab:t.tab}),t.active=!0,Promise.resolve())}},{key:"tabSwitch",value:function(){var t=this.selectedTab,e=this.leavingTab;this.leavingTab=void 0,this.transitioning=!1,t&&e!==t&&(e&&(e.active=!1),this.ionTabsDidChange.emit({tab:t.tab}))}},{key:"notifyRouter",value:function(){if(this.useRouter){var t=document.querySelector("ion-router");if(t)return t.navChanged("forward")}return Promise.resolve(!1)}},{key:"shouldSwitch",value:function(t){var e=this.selectedTab;return void 0!==t&&t!==e&&!this.transitioning}},{key:"render",value:function(){return Object(c.j)(c.c,{onIonTabButtonClick:this.onTabClicked},Object(c.j)("slot",{name:"top"}),Object(c.j)("div",{class:"tabs-inner"},Object(c.j)("slot",null)),Object(c.j)("slot",{name:"bottom"}))}},{key:"tabs",get:function(){return Array.from(this.el.querySelectorAll("ion-tab"))}},{key:"el",get:function(){return Object(c.k)(this)}}]),t}(),b=function(t,e){var n="string"===typeof e?t.find((function(t){return t.tab===e})):e;return n||console.error('tab with id: "'.concat(n,'" does not exist')),n};h.style=":host{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;contain:layout size style;z-index:0}.tabs-inner{position:relative;-ms-flex:1;flex:1;contain:layout size style}"},142:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return o}));var r=n(3),i=n.n(r),a=n(5),s=function(){var t=Object(a.a)(i.a.mark((function t(e,n,r,a,s){var o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=2;break}return t.abrupt("return",e.attachViewToDom(n,r,s,a));case 2:if("string"===typeof r||r instanceof HTMLElement){t.next=4;break}throw new Error("framework delegate is missing");case 4:if(o="string"===typeof r?n.ownerDocument&&n.ownerDocument.createElement(r):r,a&&a.forEach((function(t){return o.classList.add(t)})),s&&Object.assign(o,s),n.appendChild(o),!o.componentOnReady){t.next=11;break}return t.next=11,o.componentOnReady();case 11:return t.abrupt("return",o);case 12:case"end":return t.stop()}}),t)})));return function(e,n,r,i,a){return t.apply(this,arguments)}}(),o=function(t,e){if(e){if(t){var n=e.parentElement;return t.removeViewFromDom(n,e)}e.remove()}return Promise.resolve()}}}]);
//# sourceMappingURL=16.7ea631f9.chunk.js.map