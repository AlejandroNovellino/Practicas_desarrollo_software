"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteStateMad = void 0;
var ConcreteStateHappy_1 = require("./ConcreteStateHappy");
var ConcreteStateMad = /** @class */ (function () {
    function ConcreteStateMad() {
    }
    ConcreteStateMad.prototype.changeState = function (context) {
        context.changeState(new ConcreteStateHappy_1.ConcreteStateHappy());
    };
    ConcreteStateMad.prototype.handle = function (context) {
        console.log("Hi i am mad right now :|");
        // now change the state if necessary
        this.changeState(context);
    };
    return ConcreteStateMad;
}());
exports.ConcreteStateMad = ConcreteStateMad;
