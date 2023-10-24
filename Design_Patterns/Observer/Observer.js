"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteObserver = void 0;
var ConcreteObserver = /** @class */ (function () {
    function ConcreteObserver(name) {
        this.name = name;
    }
    ConcreteObserver.prototype.update = function (subject) {
        console.log("Hello from ".concat(this.name));
        console.log(subject.state);
    };
    return ConcreteObserver;
}());
exports.ConcreteObserver = ConcreteObserver;
