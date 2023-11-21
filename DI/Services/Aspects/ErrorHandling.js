"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandingAspect = void 0;
var IDecorator_1 = require("../DI_Decorator/IDecorator");
var ErrorHandingAspect = /** @class */ (function (_super) {
    __extends(ErrorHandingAspect, _super);
    // constructor
    function ErrorHandingAspect(command) {
        return _super.call(this, command) || this;
    }
    // method of the aspect
    ErrorHandingAspect.prototype.execute = function (command) {
        try {
            // execute the super command
            _super.prototype.execute.call(this, command);
        }
        catch (error) {
            // catch the error
            console.log("Error executing command ".concat(command));
        }
    };
    return ErrorHandingAspect;
}(IDecorator_1.ICommandServiceDecorator));
exports.ErrorHandingAspect = ErrorHandingAspect;
