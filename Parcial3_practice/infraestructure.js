"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.logging = function (userId, message) {
        console.log("Message ".concat(userId, " asnd ").concat(message));
    };
    return Logger;
}());
exports.Logger = Logger;
