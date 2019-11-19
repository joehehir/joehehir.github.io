parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"VEgq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={atom:"GPS ",size:{atom:4,preamble:8,frame:36},struct:[["unused-10",-10],["longitude",-4],["longitude-cardinal",-1],["latitude",-4],["latitude-cardinal",-1],["speed",-4],["index",-4],["unused-4",-4],["set",-4]]};exports.default=e;
},{}],"r0Xo":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return new DataView(new Uint8Array(e).buffer).getUint32(0,t)},t={uint8ArrayToUint32:e};exports.default=t;
},{}],"WPMU":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("./definition.js")),r=e(require("./utility.js"));function e(t){return t&&t.__esModule?t:{default:t}}function n(t){return u(t)||i(t)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function i(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function u(t){if(Array.isArray(t)){for(var r=0,e=new Array(t.length);r<t.length;r++)e[r]=t[r];return e}}var a=function(e,o){var i=t.default.size,u=function(t,r,e){for(var n=r.join(),o=e.length;o-=t;)if(n===e.slice(o,o+t).join())return o;return null}(i.atom,e,o),a=u||null;if(a){var l={length:[a-i.atom,a],atom:function(t){return[a-i.atom,a+i.atom+t]}},f=r.default.uint8ArrayToUint32(o.slice.apply(o,n(l.length)));return o.slice.apply(o,n(l.atom(f)))}return null};exports.default=a;
},{"./definition.js":"VEgq","./utility.js":"r0Xo"}],"PxO0":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./utility.js"));function t(e){return e&&e.__esModule?e:{default:e}}var n=function(e){for(var t=function(e){return"".concat(e).split("").reverse().join("")},n={"geocode-dd":function(e){return 2!==e.length?e:"".concat(e[1]).concat(e[0].toString().replace(/(\d{5})$/,".$1"))},"geocode-dms":function(e){if(2!==e.length)return e;var n=t(t(e[0]).replace(/^(\d{1})(\d{2})(\d{2})/,"$1.$2'$3°"));return"".concat(n,'"').concat(e[1])},speed:function(e){return"".concat(Math.round(+(e[0]/1e3).toFixed(1))," km/h")}},r=arguments.length,o=new Array(r>1?r-1:0),d=1;d<r;d++)o[d-1]=arguments[d];return n[e](o)},r=function(t){return{index:e.default.uint8ArrayToUint32(t.index,1),speed:n("speed",e.default.uint8ArrayToUint32(t.speed,1)),latitude:n("geocode-dd",e.default.uint8ArrayToUint32(t.latitude,1),String.fromCodePoint(t["latitude-cardinal"])),longitude:n("geocode-dd",e.default.uint8ArrayToUint32(t.longitude,1),String.fromCodePoint(t["longitude-cardinal"]))}};exports.default=r;
},{"./utility.js":"r0Xo"}],"xtMI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r=e(require("./format-frame.js"));function e(r){return r&&r.__esModule?r:{default:r}}function t(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),t.push.apply(t,n)}return t}function n(r){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?t(n,!0).forEach(function(e){o(r,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):t(n).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}function o(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function u(r,e){return c(r)||a(r,e)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function a(r,e){if(Symbol.iterator in Object(r)||"[object Arguments]"===Object.prototype.toString.call(r)){var t=[],n=!0,o=!1,u=void 0;try{for(var i,a=r[Symbol.iterator]();!(n=(i=a.next()).done)&&(t.push(i.value),!e||t.length!==e);n=!0);}catch(c){o=!0,u=c}finally{try{n||null==a.return||a.return()}finally{if(o)throw u}}return t}}function c(r){if(Array.isArray(r))return r}var f=function(e,t,i){for(var a=[],c=function(c){var f=Array.from(i.slice(c,c+e));if(f.length!==e||1!==f[0])return"break";var l=t.reduce(function(r,e){var t=u(e,2),i=t[0],a=t[1];return n({},r,o({},i,f.splice(a)))},{});a.push((0,r.default)(l))},f=0;f<i.length;f+=e){if("break"===c(f))break}return a};exports.default=f;
},{"./format-frame.js":"PxO0"}],"qkDY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=function(t,e){var n=function(t){return new Date(1e3*t).toISOString().replace(/.*(\d{2}:\d{2}:\d{2}.\d{3}).*/,"$1")};return{srt:function(t){return t.reduce(function(t,e){return t.concat("".concat("\n").concat(e.index).concat("\n").concat(n(e.index)," --\x3e ").concat(n(++e.index)).concat("\n").concat(e.speed," ").concat(e.latitude," ").concat(e.longitude).concat("\n"))},"")}}[t](e)},e=function(e,n){var c=t(e,n);return URL.createObjectURL(new Blob([c],{type:"text/plain"}))};exports.default=e;
},{}],"pkXN":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=u(require("./definition.js")),t=u(require("./extract-atom.js")),r=u(require("./unpack-atom-data.js")),a=u(require("./output-object-url.js"));function u(e){return e&&e.__esModule?e:{default:e}}var l=function(u){var l=u.target._caller,d=new Uint8Array(u.target.result),f=new TextEncoder("utf-8").encode(e.default.atom),i=(0,t.default)(f,d);if(i){i=i.slice(e.default.size.preamble);var o=(0,r.default)(e.default.size.frame,e.default.struct,i);l.setObjectURL((0,a.default)(l.ext,o))}};exports.default=l;
},{"./definition.js":"VEgq","./extract-atom.js":"WPMU","./unpack-atom-data.js":"xtMI","./output-object-url.js":"qkDY"}],"Ba9H":[function(require,module,exports) {
"use strict";function e(e,o){return n(e)||r(e,o)||t()}function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function r(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(l){o=!0,a=l}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return r}}function n(e){if(Array.isArray(e))return e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o=function(t){for(var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=document.createElement(t),a=Object.entries(r),i=0;i<a.length;i++){var u=e(a[i],2),l=u[0],c=u[1];o.setAttribute(l,c)}if("string"==typeof n)o.append(document.createTextNode(n));else if(Array.isArray(n))for(var f=0;f<n.length;f++){var d=n[f];"string"==typeof d?o.append(document.createTextNode(d)):d instanceof Node&&o.append(d)}return o};exports.default=o;
},{}],"utvS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("../extractor/index.js")),t=r(require("./h-script.js"));function r(e){return e&&e.__esModule?e:{default:e}}function n(e){return c(e)||o(e)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function o(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function c(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}var s=function(r){var a=r.file,o=r.ext,c=r.nodes,s="".concat(a.name.replace(/[^\.]+$/,"")).concat(o),l=(0,t.default)("pre"),i=(0,t.default)("a",{class:"link",download:s},s),u=(0,t.default)("li",{class:"mai-gps-extractor__li"},[(0,t.default)("span",{class:"name"},a.name),l,i]);c.ul.append(u);var d,f,p=(d=new FileReader,f=[99,79,59,39,19],Object.entries({error:function(e){console.error("[component/FileListItem.js] error:",e),document.createRange().selectNodeContents(c.error).deleteContents()},load:e.default,progress:function(e){var t=Math.round(e.loaded/e.total*100),r=f.find(function(e){return t>e});r&&e.target._caller.setProgress("--".concat(r))}}).forEach(function(e){return d.addEventListener.apply(d,n(e).concat([!1]))}),d),m=function(e){return l.classList.add(e)};p._caller={setObjectURL:function(e){i.setAttribute("href",e),m("--99")},setProgress:m,ext:o},p.readAsArrayBuffer(a)};exports.default=s;
},{"../extractor/index.js":"pkXN","./h-script.js":"Ba9H"}],"gFLk":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./component/FileListItem.js")),r=t(require("./component/h-script.js"));function t(e){return e&&e.__esModule?e:{default:e}}function n(e,r){return i(e)||a(e,r)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function a(e,r){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var t=[],n=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(t.push(i.value),!r||t.length!==r);n=!0);}catch(s){o=!0,a=s}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return t}}function i(e){if(Array.isArray(e))return e}var u=function(t){var o=function(r){var n=r.dataTransfer;n&&(r.stopPropagation(),r.preventDefault());var o=n?n.files:r.target.files;if(o&&o.length){var a=t.accept,i=t.ext,u=t.nodes,s=u.error,l=u.ul,f=!0,c=!1,d=void 0;try{for(var p,v=o[Symbol.iterator]();!(f=(p=v.next()).done);f=!0){var y=p.value;y.type.match(a)&&new e.default({file:y,ext:i,nodes:{error:s,ul:l}})}}catch(h){c=!0,d=h}finally{try{f||null==v.return||v.return()}finally{if(c)throw d}}}},a=function(e){return"string"==typeof e&&e.length},i={accept:function(e){return Array.isArray(e)&&e.length&&e.every(function(e){return a(e)})},ext:function(e){return a(e)},nodes:function(e){return Object.values(e).every(function(e){return e instanceof Node})}};if(Object.entries(i).every(function(e){var r=n(e,2),o=r[0],a=r[1];return t[o]&&a(t[o])})){var u=t.nodes,s=u.input,l=u.form;s.addEventListener("change",o,!1),l.addEventListener("drop",o,!1),l.addEventListener("dragover",function(e){e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="copy"},!1,{passive:!0})}else if(console.error("[input.js] args:",t),t.nodes&&t.nodes.error&&i.nodes(t)){var f=(0,r.default)("p",void 0,["Either I messed up or you're using an obsolete web browser. If you think there's something that I can improve then please let me know. Otherwise, try updating your web browser.",(0,r.default)("a",{class:"link",href:"https://www.mozilla.org/firefox/new/"},"Firefox"),"or",(0,r.default)("a",{class:"link",href:"https://www.google.com/chrome/"},"Chrome"),"are good options."]);t.nodes.error.append(f)}};exports.default=u;
},{"./component/FileListItem.js":"utvS","./component/h-script.js":"Ba9H"}],"H99C":[function(require,module,exports) {
"use strict";var e=r(require("./input.js"));function r(e){return e&&e.__esModule?e:{default:e}}function t(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function n(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?t(n,!0).forEach(function(r){o(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var c=["error","form","input","ul"].reduce(function(e,r){return n({},e,o({},r,document.getElementById("mai-gps-extractor__".concat(r))))},{});["File","FileList","FileReader"].every(function(e){return window[e]})?(0,e.default)({accept:["video/mp4"],ext:"srt",nodes:c}):(0,e.default)({nodes:c});
},{"./input.js":"gFLk"}]},{},["H99C"], null)