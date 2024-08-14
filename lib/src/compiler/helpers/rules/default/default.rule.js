"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultRule = void 0;
var regex_1 = require("../../regex/regex");
var DefaultRule = /** @class */ (function () {
    function DefaultRule() {
        this.regex = regex_1.VariablesRegex;
    }
    DefaultRule.prototype.canApply = function (expr) {
        return this.regex.test(expr);
    };
    DefaultRule.prototype.apply = function (key, object) {
        return object[key];
    };
    return DefaultRule;
}());
exports.DefaultRule = DefaultRule;
