!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var l in n)("object"==typeof exports?exports:e)[l]=n[l]}}("undefined"!=typeof self?self:this,(function(){return function(){"use strict";var e={},t={inline:["$","$"],display:["$$","$$"]},n=function(e,n){void 0===n&&(n=t);for(var l=e.querySelectorAll(".katex-mathml + .katex-html"),r=0;r<l.length;r++){var i=l[r];i.remove?i.remove(null):i.parentNode.removeChild(i)}for(var o=e.querySelectorAll(".katex-mathml"),a=0;a<o.length;a++){var d=o[a],f=d.querySelector("annotation");f&&(d.replaceWith?d.replaceWith(f):d.parentNode.replaceChild(f,d),f.innerHTML=n.inline[0]+f.innerHTML+n.inline[1])}for(var c=e.querySelectorAll(".katex-display annotation"),s=0;s<c.length;s++){var p=c[s];p.innerHTML=n.display[0]+p.innerHTML.substr(n.inline[0].length,p.innerHTML.length-n.inline[0].length-n.inline[1].length)+n.display[1]}return e};return document.addEventListener("copy",(function(e){var t=window.getSelection();if(!t.isCollapsed){var l=t.getRangeAt(0).cloneContents();if(l.querySelector(".katex-mathml")){for(var r=[],i=0;i<l.childNodes.length;i++)r.push(l.childNodes[i].outerHTML);e.clipboardData.setData("text/html",r.join("")),e.clipboardData.setData("text/plain",n(l).textContent),e.preventDefault()}}})),e=e.default}()}));