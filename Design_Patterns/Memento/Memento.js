"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Memento = void 0;
var Memento = /** @class */ (function () {
    function Memento(state) {
        this.state = state;
    }
    // Method to get the saved state
    Memento.prototype.getState = function () {
        return this.state;
    };
    return Memento;
}());
exports.Memento = Memento;
