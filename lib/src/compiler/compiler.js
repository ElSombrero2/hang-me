"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Compiler = void 0;
var flatter_1 = require("./helpers/flatter/flatter");
var regex_1 = require("./helpers/regex/regex");
var default_rule_1 = require("./helpers/rules/default/default.rule");
var functions_rule_1 = require("./helpers/rules/functions/functions.rule");
var Compiler = /** @class */ (function () {
    function Compiler() {
        this.rules = [new functions_rule_1.FunctionsRule(), new default_rule_1.DefaultRule()];
        this.flatter = new flatter_1.Flatter();
    }
    Compiler.prototype.compile = function (str, obj) {
        var e_1, _a;
        var flatted = this.flatter.flat(obj);
        var result = str;
        var _loop_1 = function (match) {
            var _d = __read(match, 2), expr = _d[0], key = _d[1];
            var rule = this_1.rules.find(function (rule) { return rule.canApply(expr); });
            if (rule) {
                var sanitizedExpr = expr
                    .replace(RegExp("\\[", "g"), "\\[")
                    .replace(RegExp("\\]", "g"), "\\]");
                result = result.replace(RegExp(sanitizedExpr, "g"), rule.apply(key, flatted));
            }
        };
        var this_1 = this;
        try {
            for (var _b = __values(str.matchAll(regex_1.Regex)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var match = _c.value;
                _loop_1(match);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return result;
    };
    return Compiler;
}());
exports.Compiler = Compiler;
