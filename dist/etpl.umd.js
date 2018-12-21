/*!
* etpl.js v1.0.1
* github:https://github.com/fan19900404/ETpl.js#readme
* (c) 2018-2018 ZF
* Released under the MIT License.
*/
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(e.etpl={})}("undefined"!=typeof self?self:this,function(e){"use strict";var r,n,i,l,t=(r={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},n={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},i=/\\|'|\r|\n|\u2028|\u2029/g,l=function(e){return"\\"+n[e]},function(u){var e=RegExp([r.escape.source,r.interpolate.source,r.evaluate.source].join("|")+"|$","g"),c=0,_="__p+='";u.replace(e,function(e,n,t,o,r){return _+=u.slice(c,r).replace(i,l),c=r+e.length,n?_+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'":t?_+="'+\n((__t=("+t+"))==null?'':__t)+\n'":o&&(_+="';\n"+o+"\n__p+='"),e}),_="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\nwith(obj||{}){\n"+(_+="';\n")+"}\nreturn __p;\n";try{var n=new Function("obj",_);console.log(n)}catch(o){throw o.source=_,o}function t(e){return n.call(this,e)}return t.source="function(obj){\n"+_+"}",t});e["default"]=t,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=etpl.umd.js.map
