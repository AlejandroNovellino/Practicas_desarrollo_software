"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteStateHappy = void 0;
var ConcreteStateMad_1 = require("./ConcreteStateMad");
var ConcreteStateHappy = /** @class */ (function () {
    function ConcreteStateHappy() {
    }
    ConcreteStateHappy.prototype.changeState = function (context) {
        context.changeState(new ConcreteStateMad_1.ConcreteStateMad());
    };
    ConcreteStateHappy.prototype.handle = function (context) {
        console.log("Hi i am happy right now :D");
        // now change the state if necessary
        this.changeState(context);
    };
    return ConcreteStateHappy;
}());
exports.ConcreteStateHappy = ConcreteStateHappy;
