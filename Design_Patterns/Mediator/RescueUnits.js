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
exports.RescueJeep = exports.LandRescueUnit = exports.RescueHelicopter = exports.AirRescueUnit = exports.RescueUnit = void 0;
var RescueUnit = /** @class */ (function () {
    function RescueUnit() {
    }
    return RescueUnit;
}());
exports.RescueUnit = RescueUnit;
var AirRescueUnit = /** @class */ (function (_super) {
    __extends(AirRescueUnit, _super);
    function AirRescueUnit() {
        return _super.call(this) || this;
    }
    return AirRescueUnit;
}(RescueUnit));
exports.AirRescueUnit = AirRescueUnit;
var RescueHelicopter = /** @class */ (function (_super) {
    __extends(RescueHelicopter, _super);
    function RescueHelicopter(mediator) {
        var _this = _super.call(this) || this;
        _this.mediator = mediator;
        return _this;
    }
    RescueHelicopter.prototype.notifyMessage = function () {
        this.mediator.notify(this, "peopleFound");
    };
    RescueHelicopter.prototype.notifyMessageReception = function () {
        return "Copy and clear! Helicopter rescue unit confirms message";
    };
    return RescueHelicopter;
}(AirRescueUnit));
exports.RescueHelicopter = RescueHelicopter;
var LandRescueUnit = /** @class */ (function (_super) {
    __extends(LandRescueUnit, _super);
    function LandRescueUnit() {
        return _super.call(this) || this;
    }
    return LandRescueUnit;
}(RescueUnit));
exports.LandRescueUnit = LandRescueUnit;
var RescueJeep = /** @class */ (function (_super) {
    __extends(RescueJeep, _super);
    function RescueJeep(mediator) {
        var _this = _super.call(this) || this;
        _this.mediator = mediator;
        return _this;
    }
    RescueJeep.prototype.notifyMessage = function () {
        this.mediator.notify(this, "peopleFound");
    };
    RescueJeep.prototype.notifyMessageReception = function () {
        return "Copy and clear! Jeep rescue unit confirms message";
    };
    return RescueJeep;
}(LandRescueUnit));
exports.RescueJeep = RescueJeep;
