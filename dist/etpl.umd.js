/*!
* etpl.js v1.0.1
* github:https://github.com/fan19900404/ETpl.js#readme
* (c) 2018-2018 ZF
* Released under the MIT License.
*/
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(e.etpl={})}("undefined"!=typeof self?self:this,function(e){"use strict";var u,n,i,p,t=(u={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},n={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},i=/\\|'|\r|\n|\u2028|\u2029/g,p=function(e){return"\\"+n[e]},function(o){var e=RegExp([u.escape.source,u.interpolate.source,u.evaluate.source].join("|")+"|$","g"),c=0,_="__p+='";o.replace(e,function(e,n,t,r,u){return _+=o.slice(c,u).replace(i,p),c=u+e.length,n?_+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'":t?_+="'+\n((__t=("+t+"))==null?'':__t)+\n'":r&&(_+="';\n"+r+"\n__p+='"),e}),_="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\nwith(obj||{}){\n"+(_+="';\n")+"}\nreturn __p;\n";try{var n=new Function("obj",_)}catch(r){throw r.source=_,r}function t(e){return n.call(this,e)}return t.source="function(obj){\n"+_+"}",t});e["default"]=t,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=etpl.umd.js.map
