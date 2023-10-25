"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Originator = void 0;
var Memento_1 = require("./Memento");
var Originator = /** @class */ (function () {
    function Originator(state) {
        this.state = state;
    }
    // Set the new state of the originator
    Originator.prototype.setState = function (state) {
        this.state = state;
    };
    // Create a Memento to save current state
    Originator.prototype.save = function () {
        return new Memento_1.Memento(this.state);
    };
    // Restore state from a given Memento
    Originator.prototype.restore = function (memento) {
        this.state = memento.getState();
    };
    return Originator;
}());
exports.Originator = Originator;
