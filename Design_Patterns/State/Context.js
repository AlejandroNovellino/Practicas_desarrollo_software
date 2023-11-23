"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = void 0;
var ConcreteStateHappy_1 = require("./ConcreteStateHappy");
var Context = /** @class */ (function () {
    function Context() {
        this.state = new ConcreteStateHappy_1.ConcreteStateHappy();
    }
    Context.prototype.changeState = function (state) {
        this.state = state;
    };
    return Context;
}());
exports.Context = Context;
