"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flatter = void 0;
var Flatter = /** @class */ (function () {
    function Flatter() {
        this.stack = [];
    }
    Flatter.prototype.flat = function (object) {
        var _this = this;
        this.stack.push({ current: object, key: null });
        var result = {};
        var _loop_1 = function () {
            var _a = this_1.stack.pop(), current = _a.current, key = _a.key;
            if (Array.isArray(current)) {
                result[key] = current;
                Object.keys(current).forEach(function (k) {
                    return _this.getCurrentNode(current[k], "".concat(key, "[").concat(k, "]"), result);
                });
            }
            else {
                Object.keys(current).forEach(function (k) {
                    return _this.getCurrentNode(current[k], (key ? "".concat(key, ".") : "") + k, result);
                });
            }
        };
        var this_1 = this;
        do {
            _loop_1();
        } while (this.stack.length);
        return result;
    };
    Flatter.prototype.getCurrentNode = function (current, key, result) {
        if (typeof current === "object") {
            this.stack.push({ current: current, key: key });
        }
        else {
            result[key] = current;
        }
    };
    return Flatter;
}());
exports.Flatter = Flatter;
