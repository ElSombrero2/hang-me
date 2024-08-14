"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Regex = exports.FunctionsRegex = exports.VariablesRegex = exports.ArrayRegex = void 0;
exports.ArrayRegex = /\[[\d]*\]/;
exports.VariablesRegex = RegExp("([.a-zA-Z_]([\\w.])*([\\w])(".concat(exports.ArrayRegex.source, ")?)*"));
exports.FunctionsRegex = RegExp("[a-zA-Z_]([\\w])*[\\w]: (".concat(exports.VariablesRegex.source, "\\s?)*"));
exports.Regex = RegExp("{{(".concat(exports.VariablesRegex.source, "|").concat(exports.FunctionsRegex.source, ")}}"), 'g');
