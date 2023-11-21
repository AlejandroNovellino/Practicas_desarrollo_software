"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorHandling_1 = require("./Services/Aspects/ErrorHandling");
var PrintToConsoleService_1 = require("./Services/CommandServices/PrintToConsoleService");
var PrintService_1 = require("./Services/ServiceCallers/PrintService");
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.testingPrintService = function () {
        // creating the services
        var baseService = new PrintToConsoleService_1.PrintToConsoleService();
        // decorating the service
        var decoratedService = new ErrorHandling_1.ErrorHandingAspect(baseService);
        // creating the service caller
        var printService = new PrintService_1.PrintService(decoratedService);
        // calling the service
        printService.print(new PrintToConsoleService_1.PrintToConsole("Hi this is the message to print"));
    };
    return Main;
}());
// executing the test
Main.testingPrintService();
