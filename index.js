"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var transition={};transition.install=function(t,e){var u=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},l=void 0,s=void 0,f=void 0,m=void 0,h={x:0,y:0},o={x:0,y:0},p=void 0;function n(){var e=this.$el.classList;if(e){var n=[];Object.keys(e).forEach(function(t){n.push(e[t])});var a=!1;if(n.map(function(t){"animated"===t&&(a=!0)}),a){var t=document.createElement("div");if(t.id="vueg-background",!m.disable){var i=document.getElementById("vueg-background");i||(document.body.appendChild(t),i=t),i.innerHTML="",i.classList=[],i.appendChild(this.$el),i.scrollLeft=o.x,i.scrollTop=o.y}}}}function a(t){"mousedown"===t.type?(h.x=t.pageX,h.y=t.pageY):(h.x=t.touches[0].pageX,h.y=t.touches[0].pageY)}function v(){m={duration:"0.3",firstEntryDisable:!1,firstEntryDuration:".6",forwardAnim:"fadeInRight",backAnim:"fadeInLeft",sameDepthDisable:!1,tabs:[],tabsDisable:!1,disable:!1,shadow:!0,nuxt:!1}}v(),Object.keys(u).forEach(function(t){m[t]=u[t]}),t.directive("transition",{inserted:function(t,e,n,a){!function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this,e=arguments[1];if(!t)return;if(!l)return;if(!e)return;if(!e.parentElement)return;if(1!==e.nodeType)return;v(),Object.keys(u).forEach(function(t){m[t]=u[t]});var n=t.$data.vuegConfig;n&&Object.keys(n).forEach(function(t){m[t]=n[t]});if(m.disable)return f="";m.shadow&&(e.style.boxShadow="0 3px 10px rgba(0, 0, 0, .156863), 0 3px 10px rgba(0, 0, 0, .227451)");"first"===f&&(e.style.animationDuration=m.firstEntryDuration+"s",e.classList.add("fadeIn"));f&&(e.style.animationDuration=m.duration+"s");e.classList.add("animated");var a=["touchPoint"],i=void 0;switch(f){case"forward":i=m.forwardAnim;break;case"back":i=m.backAnim}i&&e.classList.add(i);var o=void 0,r=document.head||document.getElementsByTagName("head")[0],s=void 0;(o=document.getElementById("vueg-style"))||((o=document.createElement("style")).type="text/css",o.id="vueg-style",r.appendChild(o));if(-1!==a.findIndex(function(t){return t===i}))switch(i){case"touchPoint":var d={x:document.documentElement.clientWidth/2,y:document.documentElement.clientHeight/2};s=".touchPoint{\n                                max-height:"+document.documentElement.clientHeight+"px!important;\n                                overflow:hidden;\n                                animation-name:touchPoint;\n                                position: relative;\n                                animation-timing-function: linear;\n                            }\n                            @keyframes touchPoint {\n                                from {\n                                    opacity:0.5;\n                                    transform: scale3d(0, 0, 0);\n                                    left:"+(-d.x+h.x)+"px;\n                                    top:"+(-d.y+h.y)+"px;\n                                }\n                                to{ \n                                    opacity:1;\n                                    transform: scale3d(1, 1, 1);\n                                    left:0;\n                                    top:0;\n                                }\n                            }";var c=document.createTextNode(s);o.appendChild(c)}setTimeout(function(){e.classList.remove(m.forwardAnim),e.classList.remove(m.backAnim),e.style.animationDuration="0s",e.style.boxShadow=null;var t=document.getElementById("vueg-background");t&&(t.innerHTML=""),m.nuxt&&p&&(t=p.$el)&&t.parentElement.removeChild(t),-1!==a.findIndex(function(t){return t===i})&&(o.innerHTML="")},1e3*m.duration+300),setTimeout(function(){e.classList.remove("fadeIn")},1e3*m.firstEntryDuration)}(n.componentInstance,t)}}),t.mixin({beforeDestroy:m.nuxt?null:n,deactivated:m.nuxt?null:n,beforeRouteEnter:function(t,e,n){o={x:window.pageXOffset,y:window.pageYOffset},n()},beforeRouteLeave:function(t,e,n){p=this,n()},transition:m.nuxt?{mode:null,css:!1,leave:function(t,e){setTimeout(e,1e3*m.firstEntryDuration)}}:null}),e.beforeEach(function(e,n,t){var a=(l=e).path.split("/").length,i=n.path.split("/").length;if("/"!==e.path.charAt(e.path.length-1)&&(a+=1),"/"!==n.path.charAt(n.path.length-1)&&(i+=1),f=i<a?"forward":"back",a===i&&(f=s===e.path?"back":"forward",m.sameDepthDisable&&(f=""),s=n.path),e.path===n.path&&e.path===s&&(f="first"),m.firstEntryDisable&&"first"===f&&(f=""),n.name&&e.name){var o=m.tabs.findIndex(function(t){return t.name===n.name}),r=m.tabs.findIndex(function(t){return t.name===e.name});m.tabsDisable||-1===o||-1===r?-1!==o&&-1!==r&&(f=""):(o<r&&(f="forward"),r<o&&(f="back"),r===o&&(f=""))}t()}),document.addEventListener("mousedown",a),document.addEventListener("touchstart",a)},exports.default=transition;