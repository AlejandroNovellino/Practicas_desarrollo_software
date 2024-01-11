"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParamObject = exports.UserName = exports.UserId = exports.User = exports.TicketId = exports.Ticket = void 0;
// Ticket
var Ticket = /** @class */ (function () {
    function Ticket(userId) {
        this.id = new UserId(Math.random());
        this.userId = userId;
    }
    return Ticket;
}());
exports.Ticket = Ticket;
var TicketId = /** @class */ (function () {
    function TicketId(value) {
        this.value = value;
    }
    return TicketId;
}());
exports.TicketId = TicketId;
// User
var User = /** @class */ (function () {
    function User(name) {
        this.id = new UserId(Math.random());
        this.name = new UserName(name);
    }
    return User;
}());
exports.User = User;
var UserId = /** @class */ (function () {
    function UserId(value) {
        this.value = value;
    }
    return UserId;
}());
exports.UserId = UserId;
var UserName = /** @class */ (function () {
    function UserName(value) {
        this.value = value;
    }
    return UserName;
}());
exports.UserName = UserName;
// parameter object
var ParamObject = /** @class */ (function () {
    function ParamObject(value) {
        this.userId = value;
    }
    return ParamObject;
}());
exports.ParamObject = ParamObject;
