"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrintService = void 0;
var PrintService = /** @class */ (function () {
    function PrintService(service) {
        this.service = service;
    }
    PrintService.prototype.print = function (command) {
        this.service.execute(command);
    };
    return PrintService;
}());
exports.PrintService = PrintService;
