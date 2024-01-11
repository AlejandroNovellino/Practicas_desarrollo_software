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
exports.LoggingDecorator = exports.IServiceDecorator = exports.GetTicketService = void 0;
var domain_1 = require("./domain");
var GetTicketService = /** @class */ (function () {
    function GetTicketService() {
    }
    GetTicketService.prototype.execute = function (params) {
        // simulate getting the user by id with repository
        console.log(params.userId);
        var user = new domain_1.User("Yong Ju");
        // simulate creating and saving the ticket with the repository and factory
        var ticket = new domain_1.Ticket(user.id);
        console.log("This is the ticket id: ".concat(ticket.id));
        // this should generate the domain event
        // here we can return
        return new domain_1.Result(user);
    };
    return GetTicketService;
}());
exports.GetTicketService = GetTicketService;
// aspects
var IServiceDecorator = /** @class */ (function () {
    function IServiceDecorator(service) {
        this.serviceToDecorate = service;
    }
    IServiceDecorator.prototype.execute = function (params) {
        return this.serviceToDecorate.execute(params);
    };
    return IServiceDecorator;
}());
exports.IServiceDecorator = IServiceDecorator;
var LoggingDecorator = /** @class */ (function (_super) {
    __extends(LoggingDecorator, _super);
    function LoggingDecorator(service, logger) {
        var _this = _super.call(this, service) || this;
        _this.logger = logger;
        return _this;
    }
    LoggingDecorator.prototype.execute = function (params) {
        var serviceResponse = this.serviceToDecorate.execute(params);
        if (serviceResponse.isError) {
            return serviceResponse;
        }
        else {
            this.logger.logging(serviceResponse.result.id.value.toString(), "This is from logger");
            return serviceResponse;
        }
    };
    return LoggingDecorator;
}(IServiceDecorator));
exports.LoggingDecorator = LoggingDecorator;
