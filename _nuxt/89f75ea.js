(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{302:function(t,e,n){var content=n(305);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(59).default)("e7207b0a",content,!0,{sourceMap:!1})},303:function(t,e,n){"use strict";n.r(e);var o=n(0).a.extend({data:function(){return{showMenu:!1,windowWidth:1280}},computed:{isMobile:function(){return this.windowWidth<=768}},mounted:function(){var t=this;this.windowWidth=window.innerWidth,window.addEventListener("resize",(function(){t.windowWidth=window.innerWidth}))},methods:{toggleMenu:function(){this.showMenu=!this.showMenu}}}),l=(n(304),n(36)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-end",class:{"w-full":t.isMobile}},[n("transition",{attrs:{name:"menu"}},[t.showMenu||!t.isMobile?n("nav",{staticClass:"p-6 bg-primary-transparent w-screen md:w-full"},[t.isMobile?n("button",{staticClass:"dark:text-white text-3xl p-4 absolute top-0 right-0",on:{click:t.toggleMenu}},[n("font-awesome-icon",{attrs:{icon:["fas","times"]}})],1):t._e(),t._v(" "),n("ul",{staticClass:"flex flex-row justify-between text-lg uppercase text-white",class:{"flex-col":t.isMobile,"space-x-2":!t.isMobile}},[n("li",[n("nuxt-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/posts"}},[t._v("Blog")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:{path:"/",hash:"#skills"}}},[t._v("Skills")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:{path:"/",hash:"#projects"}}},[t._v("Projekte")])],1)])]):t._e()]),t._v(" "),!t.showMenu|!t.isMobile?n("button",{staticClass:"dark:text-white text-3xl p-4 absolute top-0 right-0",on:{click:t.toggleMenu}},[t.isMobile?n("font-awesome-icon",{attrs:{icon:["fas","bars"]}}):t._e()],1):t._e()],1)}),[],!1,null,"0390a1c8",null);e.default=component.exports},304:function(t,e,n){"use strict";n(302)},305:function(t,e,n){var o=n(58)((function(i){return i[1]}));o.push([t.i,".menu-enter-active[data-v-0390a1c8],.menu-leave-active[data-v-0390a1c8]{transition:all 1s;transition-timing-function:ease-out;opacity:1;transform:translateY(0)}.menu-enter[data-v-0390a1c8],.menu-leave-to[data-v-0390a1c8]{opacity:0;transform:translateY(-200px)}",""]),o.locals={},t.exports=o}}]);