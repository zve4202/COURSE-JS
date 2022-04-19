(()=>{"use strict";var r,e,n,t,o,a,i,s,c,l,u,f,d,p,m={82:r=>{r.exports=function(r){var e=[];return e.toString=function(){return this.map((function(e){var n=r(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(r,n,t){"string"==typeof r&&(r=[[null,r,""]]);var o={};if(t)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<r.length;s++){var c=[].concat(r[s]);t&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},490:r=>{var e=[];function n(r){for(var n=-1,t=0;t<e.length;t++)if(e[t].identifier===r){n=t;break}return n}function t(r,t){for(var a={},i=[],s=0;s<r.length;s++){var c=r[s],l=t.base?c[0]+t.base:c[0],u=a[l]||0,f="".concat(l," ").concat(u);a[l]=u+1;var d=n(f),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)e[d].references++,e[d].updater(p);else{var m=o(p,t);t.byIndex=s,e.splice(s,0,{identifier:f,updater:m,references:1})}i.push(f)}return i}function o(r,e){var n=e.domAPI(e);return n.update(r),function(e){if(e){if(e.css===r.css&&e.media===r.media&&e.sourceMap===r.sourceMap&&e.supports===r.supports&&e.layer===r.layer)return;n.update(r=e)}else n.remove()}}r.exports=function(r,o){var a=t(r=r||[],o=o||{});return function(r){r=r||[];for(var i=0;i<a.length;i++){var s=n(a[i]);e[s].references--}for(var c=t(r,o),l=0;l<a.length;l++){var u=n(a[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=c}}},184:r=>{var e={};r.exports=function(r,n){var t=function(r){if(void 0===e[r]){var n=document.querySelector(r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(r){n=null}e[r]=n}return e[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}},320:r=>{r.exports=function(r){var e=document.createElement("style");return r.setAttributes(e,r.attributes),r.insert(e,r.options),e}},139:(r,e,n)=>{r.exports=function(r){var e=n.nc;e&&r.setAttribute("nonce",e)}},712:r=>{r.exports=function(r){var e=r.insertStyleElement(r);return{update:function(n){!function(r,e,n){var t="";n.supports&&(t+="@supports (".concat(n.supports,") {")),n.media&&(t+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(t+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),t+=n.css,o&&(t+="}"),n.media&&(t+="}"),n.supports&&(t+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(t,r,e.options)}(e,r,n)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(e)}}}},67:r=>{r.exports=function(r,e){if(e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}},919:(r,e,n)=>{n.d(e,{Z:()=>a});var t=n(82),o=n.n(t)()((function(r){return r[1]}));o.push([r.id,"root {\r\n    --main-background: black;\r\n    --text-color: #ffffff;\r\n    --js-image-size: 200px;\r\n}\r\n\r\nh2 {\r\n    margin: 0;\r\n}\r\n\r\nbody {\r\n    padding: 0;\r\n    margin: 0;\r\n    background: var(--main-background);\r\n    min-height: 100vh;\r\n    height: 100vh;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    text-align: center;\r\n    color: var(--text-color);\r\n}\r\n\r\n.js-block {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.js-image {\r\n    width: var(--js-image-size);\r\n    height: var(--js-image-size);\r\n}\r\n\r\n.main-title {\r\n    color: var(--text-color);\r\n    font-size: 5rem;\r\n    line-height: 5.5rem;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.founded-text {\r\n    color: var(--text-color);\r\n    font-size: 2rem;\r\n    line-height: 2.5rem;\r\n}\r\n\r\n.today-date {\r\n    color: var(--text-color);\r\n    font-size: 2rem;\r\n    line-height: 2.5rem;\r\n    font-style: italic;\r\n}\r\n\r\n#timer {\r\n    color: var(--text-color);\r\n    font-size: 2.5rem;\r\n    line-height: 3rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.timer-text {\r\n    line-height: 3rem;\r\n    margin-bottom: 15px;\r\n    padding: 0 20px;\r\n}",""]);const a=o}},v={};function h(r){var e=v[r];if(void 0!==e)return e.exports;var n=v[r]={id:r,exports:{}};return m[r](n,n.exports,h),n.exports}h.n=r=>{var e=r&&r.__esModule?()=>r.default:()=>r;return h.d(e,{a:e}),e},h.d=(r,e)=>{for(var n in e)h.o(e,n)&&!h.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:e[n]})},h.o=(r,e)=>Object.prototype.hasOwnProperty.call(r,e),r=h(490),e=h.n(r),n=h(712),t=h.n(n),o=h(184),a=h.n(o),i=h(139),s=h.n(i),c=h(320),l=h.n(c),u=h(67),f=h.n(u),d=h(919),(p={}).styleTagTransform=f(),p.setAttributes=s(),p.insert=a().bind(null,"head"),p.domAPI=t(),p.insertStyleElement=l(),e()(d.Z,p),d.Z&&d.Z.locals&&d.Z.locals,console.log("__work__")})();