var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t),t.register("2YGUk",(function(e,n){document.addEventListener("DOMContentLoaded",(function(){let e=document.querySelector("#toTop");window.addEventListener("scroll",(function(){pageYOffset>100?e.classList.add("show"):e.classList.remove("show")})),e.onclick=function(e){e.preventDefault(),function(e,n=700){const o=document.scrollingElement||document.documentElement,t=o.scrollTop,r=e-t,l=+new Date,i=function(){const c=+new Date-l;var d,s,a;o.scrollTop=parseInt((d=c,s=t,a=r,(d/=n/2)<1?a/2*d*d+s:-a/2*(--d*(d-2)-1)+s)),c<n?requestAnimationFrame(i):o.scrollTop=e};i()}(0,400)}}))})),t("2YGUk");
//# sourceMappingURL=header-library.31356487.js.map