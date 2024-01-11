"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var application_1 = require("./application");
var domain_1 = require("./domain");
var infraestructure_1 = require("./infraestructure");
// testing the code
// base service
var service = new application_1.GetTicketService();
// decorate
// logger
var logger = new infraestructure_1.Logger();
var serviceDecorated = new application_1.LoggingDecorator(service, logger);
var result = serviceDecorated.execute(new domain_1.ParamObject('user "id" of the param object'));
console.log("Final response: ".concat(result.result.name.value));
