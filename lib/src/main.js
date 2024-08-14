"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = main;
var mock_1 = require("./__mock__/mock");
var compiler_1 = require("./compiler/compiler");
function main() {
    console.time("Compiler test");
    var compiler = new compiler_1.Compiler();
    console.log(compiler.compile(mock_1.Text, __assign(__assign({}, mock_1.SourceObject), mock_1.MockFunctions)));
    console.timeEnd("Compiler test");
}
