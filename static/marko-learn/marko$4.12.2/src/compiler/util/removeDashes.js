$_mod.def("/marko$4.12.2/src/compiler/util/removeDashes", function(require, exports, module, __filename, __dirname) { module.exports = function removeDashes(str) {
    return str.replace(/-([a-z])/g, function(match, lower) {
        return lower.toUpperCase();
    });
};

});