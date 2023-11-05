"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Optional = void 0;
var Optional = /** @class */ (function () {
    function Optional(value) {
        this.value = value;
    }
    Optional.prototype.hasValue = function () {
        return this.value ? true : false;
    };
    Optional.prototype.getValue = function () {
        if (!this.value)
            throw new Error("No value in the optional");
        return this.value;
    };
    return Optional;
}());
exports.Optional = Optional;
