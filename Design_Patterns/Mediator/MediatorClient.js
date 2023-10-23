"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mediator_1 = require("./Mediator");
var mediator = new Mediator_1.AirRescueUnitsMediator();
mediator.createUnits();
mediator.getJeep().notifyMessage();
