'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var etpl = (function () {
    var templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var escapes = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
    };
    var escaper = /\\|'|\r|\n|\u2028|\u2029/g;
    var escapeChar = function (match) { return "\\" + escapes[match]; };
    var templateFun = function (text) {
        var matcher = RegExp([
            templateSettings.escape.source,
            templateSettings.interpolate.source,
            templateSettings.evaluate.source
        ].join("|") + "|$", "g");
        var index = 0;
        var source = "__p+='";
        text.replace(matcher, function (match, escape, interpolate, evaluate, offset) {
            source += text.slice(index, offset).replace(escaper, escapeChar);
            index = offset + match.length;
            if (escape) {
                source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
            }
            else if (interpolate) {
                source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
            }
            else if (evaluate) {
                source += "';\n" + evaluate + "\n__p+='";
            }
            return match;
        });
        source += "';\n";
        source =
            "var __t,__p='',__j=Array.prototype.join," +
                "print=function(){__p+=__j.call(arguments,'');};\n" +
                "with(obj||{}){\n" + source + "}\n" +
                "return __p;\n";
        try {
            var render = new Function("obj", source);
            console.log(render);
        }
        catch (e) {
            e.source = source;
            throw e;
        }
        function template(data) {
            return render.call(this, data);
        }
        template.source = "function(obj){\n" + source + "}";
        return template;
    };
    return templateFun;
})();

exports.default = etpl;
//# sourceMappingURL=etpl.cjs.js.map
