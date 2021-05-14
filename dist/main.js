var MyLibrary;(()=>{"use strict";var e={859:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,"footer h3{font-size:.95em;text-shadow:1px 1px black;color:white;text-align:center;bottom:0;width:100%;position:fixed;background-color:#2d3142;margin-bottom:0;left:0;padding-top:1em;padding-bottom:1em}\n",""]);const i=r},269:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,"form{display:flex;flex-direction:column;align-items:center;margin-top:15vh}form #input_box{margin-top:5vh;width:30vw;font-size:.9em}form #submit_button{padding-left:1em;padding-right:1em;padding-top:.25em;padding-bottom:.25em;text-align:center;margin-top:1em;border:none;font-size:.9em;border-radius:5%;box-shadow:1px 2px black;background-color:#ef8354;color:white}form #submit_button:hover{background-color:#bfc0c0;box-shadow:2px 4px black}#output_container{display:flex;flex-direction:column;margin-top:10vh;margin-left:auto;margin-right:auto;align-items:center;background-color:#ef8354;color:white;padding:1em;box-shadow:1px 3px black;border-radius:5%}#output_container h2{margin-top:.15em;margin-bottom:.15em;text-shadow:1px 2px black}#output_container ul{text-align:left}#output_container li{list-style:none;line-height:1.5em}\n",""]);const i=r},603:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,"header{width:100%;position:fixed;top:0;left:0;background-color:#2d3142;padding-top:.15em;padding-bottom:.15em}h1{text-align:center;font-size:2.25em;color:white}\n",""]);const i=r},830:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,"body{background-color:#4f5d75;width:100vw;height:100vh}@media only screen and (max-width: 600px){body{font-size:12px}}\n",""]);const i=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);o&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},379:(e,t,n)=>{var o,r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},o=[],r=0;r<e.length;r++){var c=e[r],l=t.base?c[0]+t.base:c[0],d=n[l]||0,s="".concat(l," ").concat(d);n[l]=d+1;var u=a(s),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:s,updater:h(p,t),references:1}),o.push(s)}return o}function l(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,s=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function u(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=s(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var f=null,m=0;function h(e,t){var n,o,r;if(t.singleton){var i=m++;n=f||(f=l(t)),o=u.bind(null,n,i,!1),r=u.bind(null,n,i,!0)}else n=l(t),o=p.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=a(n[o]);i[r].references--}for(var l=c(e,t),d=0;d<n.length;d++){var s=a(n[d]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}n=l}}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};(()=>{n.r(o),n.d(o,{apiCall:()=>e,outPut:()=>l,postRequest:()=>t});const e=()=>{fetch("http://localhost:3090/callData").then((e=>e.json())).then((e=>MyLibrary.postRequest(e.application_id,e.application_key))).then(MyLibrary.outPut).catch((e=>console.log("error",e)))},t=async(e,t)=>{const n=new FormData;n.append("key",t),n.append("url",document.getElementById("input_box").value),n.append("lang","en");const o={method:"POST",body:n,redirect:"follow"},a=await fetch(e,o);try{const e={status:a.status,body:await a.json()};r={Agreement:e.body.agreement,Confidence:e.body.confidence,Irony:e.body.irony,Subjectivity:e.body.subjectivity,Score:e.body.score_tag},i=e.body.status.code,console.log(r),console.log(e.status,e.body),console.log(e.body.status.code)}catch(e){console.log("error",e)}};let r={Agreement:"",Confidence:"",Irony:"",Subjectivity:"",Score:""},i="",a=!1,c="";const l=()=>{var e;if(e=document.getElementById("input_box").value,c=/^https?:\/\/\S{4,}$/.test(e),!1===c&&"212"===i||!document.getElementById("input_box").value)alert("Please insert a correct URL address");else if(!1===a){let e=Object.keys(r).length;const t=document.createElement("ul"),n=document.createAttribute("id");n.value="list",t.setAttributeNode(n),document.getElementById("output_container").appendChild(t);for(let t=0;t<e;t++){let e=document.createElement("li");e.textContent=Object.keys(r)[t]+": "+Object.values(r)[t],document.getElementById("list").appendChild(e)[t]}a=!0,s()}else{const e=document.querySelectorAll("li");for(let t=0;t<e.length;t++)e[t].textContent=Object.keys(r)[t]+": "+Object.values(r)[t]}},d=document.getElementById("input_box");d.addEventListener("click",(()=>{d.placeholder?d.placeholder="":d.value=""}));const s=()=>{let e=document.getElementById("output_container");"none"===e.style.display&&(e.style.display="flex")};var u=n(379),p=n.n(u),f=n(859);p()(f.Z,{insert:"head",singleton:!1}),f.Z.locals;var m=n(269);p()(m.Z,{insert:"head",singleton:!1}),m.Z.locals;var h=n(603);p()(h.Z,{insert:"head",singleton:!1}),h.Z.locals;var b=n(830);p()(b.Z,{insert:"head",singleton:!1}),b.Z.locals})(),MyLibrary=o})();