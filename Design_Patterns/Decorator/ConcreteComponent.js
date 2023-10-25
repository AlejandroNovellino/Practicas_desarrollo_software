"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteComponent = void 0;
var ConcreteComponent = /** @class */ (function () {
    function ConcreteComponent() {
    }
    ConcreteComponent.prototype.execute = function () {
        console.log("Inside concrete component");
    };
    return ConcreteComponent;
}());
exports.ConcreteComponent = ConcreteComponent;
