"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrintToConsole = exports.PrintToConsoleService = void 0;
var PrintToConsoleService = /** @class */ (function () {
    function PrintToConsoleService() {
    }
    PrintToConsoleService.prototype.execute = function (command) {
        // in theory this method should change the app state
        console.log(command.message);
    };
    return PrintToConsoleService;
}());
exports.PrintToConsoleService = PrintToConsoleService;
// Param object for the service
var PrintToConsole = /** @class */ (function () {
    function PrintToConsole(message) {
        this.message = message;
    }
    PrintToConsole.prototype.getMessage = function () {
        return this.message;
    };
    PrintToConsole.prototype.setMessage = function (message) {
        this.message = message;
    };
    return PrintToConsole;
}());
exports.PrintToConsole = PrintToConsole;
