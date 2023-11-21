"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICommandServiceDecorator = void 0;
var ICommandServiceDecorator = /** @class */ (function () {
    // constructor DI
    function ICommandServiceDecorator(decoratee) {
        this.decoratee = decoratee;
    }
    // method to execute
    ICommandServiceDecorator.prototype.execute = function (command) {
        this.decoratee.execute(command);
    };
    return ICommandServiceDecorator;
}());
exports.ICommandServiceDecorator = ICommandServiceDecorator;
