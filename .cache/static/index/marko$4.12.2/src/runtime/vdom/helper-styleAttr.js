$_mod.def("/marko$4.12.2/src/runtime/vdom/helper-styleAttr", function(require, exports, module, __filename, __dirname) { var dashedNames = {};

/**
 * Helper for generating the string for a style attribute
 * @param  {[type]} style [description]
 * @return {[type]}       [description]
 */
module.exports = function styleHelper(style) {
    if (!style) {
        return null;
    }

    var type = typeof style;

    if (type !== "string") {
        var styles = "";

        if (Array.isArray(style)) {
            for (var i = 0, len = style.length; i < len; i++) {
                var next = styleHelper(style[i]);
                if (next)
                    styles += next + (next[next.length - 1] !== ";" ? ";" : "");
            }
        } else if (type === "object") {
            for (var name in style) {
                var value = style[name];
                if (value != null) {
                    if (typeof value === "number" && value) {
                        value += "px";
                    }

                    var nameDashed = dashedNames[name];
                    if (!nameDashed) {
                        nameDashed = dashedNames[name] = name
                            .replace(/([A-Z])/g, "-$1")
                            .toLowerCase();
                    }
                    styles += nameDashed + ":" + value + ";";
                }
            }
        }

        return styles || null;
    }

    return style;
};

});