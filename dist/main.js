!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);let n=[];const o=(e,t)=>({name:e,todos:t}),d=e=>{n=JSON.parse(localStorage.getItem("projects")),n.push(e),localStorage.setItem("projects",JSON.stringify(n))},a=document.querySelector("#projects-content"),c=(document.querySelector("#todos-content"),e=>{for(;a.hasChildNodes();)a.removeChild(a.lastChild);let t=document.createElement("div");t.classList.add("project-container"),e.forEach(e=>l(t,e)),a.appendChild(t),i()}),l=(e,t)=>{let r=document.createElement("div");r.classList.add("project-item"),r.innerHTML=t.name,r.addEventListener("click",e=>{return s((t=e.target.value,n[n.indexOf(t)].todos));var t}),e.appendChild(r)},i=()=>{let e=document.createElement("button");e.classList.add("add-button"),e.innerHTML="Add Project",e.addEventListener("click",()=>u()),a.appendChild(e)},u=()=>{let e=document.querySelector(".add-button");e&&a.removeChild(e);let t=document.createElement("div");t.classList.add("add-project-form-div");let r=document.createElement("input");r.classList.add("add-project-form-input"),r.type="text",r.placeholder="Please, input name",t.appendChild(r);let n=document.createElement("input");n.classList.add("add-project-form-submit"),n.type="Submit",n.innerHTML="Submit",n.addEventListener("click",()=>{d(o(r.value,[])),c(JSON.parse(localStorage.getItem("projects")))}),t.appendChild(n),a.appendChild(t)},s=e=>e.forEach(e=>p(e)),p=e=>{};JSON.parse(localStorage.getItem("projects"))||d(o("Default project",[])),c(JSON.parse(localStorage.getItem("projects")))}]);