"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirRescueUnitsMediator = void 0;
var RescueUnits_1 = require("./RescueUnits");
var AirRescueUnitsMediator = /** @class */ (function () {
    function AirRescueUnitsMediator() {
    }
    AirRescueUnitsMediator.prototype.createUnits = function () {
        this.helicopter = new RescueUnits_1.RescueHelicopter(this);
        this.jeep = new RescueUnits_1.RescueJeep(this);
    };
    AirRescueUnitsMediator.prototype.notify = function (sender, event) {
        if (sender == this.helicopter && event == "peopleFound") {
            console.log("Helicopter found the people");
            console.log(this.jeep.notifyMessageReception());
        }
        else if (sender == this.jeep && event == "peopleFound") {
            console.log("Jeep found the people");
            console.log(this.helicopter.notifyMessageReception());
        }
    };
    AirRescueUnitsMediator.prototype.getHelicopter = function () {
        return this.helicopter;
    };
    AirRescueUnitsMediator.prototype.getJeep = function () {
        return this.jeep;
    };
    return AirRescueUnitsMediator;
}());
exports.AirRescueUnitsMediator = AirRescueUnitsMediator;
