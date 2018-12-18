/*!
* etpl.js v1.0.0
* (c) 2018-2018 ZF
* Released under the MIT License.
*/
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(e.etpl={})}("undefined"!=typeof self?self:this,function(e){"use strict";var u,n,_,p,t=(u={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},n={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},_=/\\|'|\r|\n|\u2028|\u2029/g,p=function(e){return"\\"+n[e]},function(o){var e=RegExp([u.escape.source,u.interpolate.source,u.evaluate.source].join("|")+"|$","g"),c=0,i="__p+='";o.replace(e,function(e,n,t,r,u){return i+=o.slice(c,u).replace(_,p),c=u+e.length,n?i+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'":t?i+="'+\n((__t=("+t+"))==null?'':__t)+\n'":r&&(i+="';\n"+r+"\n__p+='"),e}),i="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\nwith(obj||{}){\n"+(i+="';\n")+"}\n";try{var n=new Function("obj",i)}catch(r){throw r.source=i,r}function t(e){return n.call(this,e)}return t.source="function(obj){\n"+i+"}",t});e["default"]=t,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=etpl.umd.js.map
