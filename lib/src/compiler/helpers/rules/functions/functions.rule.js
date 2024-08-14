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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionsRule = void 0;
var regex_1 = require("../../regex/regex");
var FunctionsRule = /** @class */ (function () {
    function FunctionsRule() {
        this.regex = regex_1.FunctionsRegex;
    }
    FunctionsRule.prototype.canApply = function (expr) {
        return this.regex.test(expr);
    };
    FunctionsRule.prototype.apply = function (expr, object) {
        var _a = __read(expr.split(": "), 2), functionName = _a[0], rawArgs = _a[1];
        var args = rawArgs.split(" ").reduce(function (array, key) {
            object[key] && array.push(object[key]);
            return array;
        }, []);
        return object[functionName].apply(undefined, args);
    };
    return FunctionsRule;
}());
exports.FunctionsRule = FunctionsRule;
