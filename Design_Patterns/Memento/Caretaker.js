"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CareTaker = void 0;
var Originator_1 = require("./Originator");
var CareTaker = /** @class */ (function () {
    function CareTaker(originatorState) {
        this.originator = new Originator_1.Originator(originatorState);
        this.history = new Array();
    }
    // Save the state of the originator
    CareTaker.prototype.saveState = function () {
        var memento = this.originator.save();
        this.history.push(memento);
    };
    // Method to restore the sate of the originator
    CareTaker.prototype.undo = function () {
        if (this.history.length != 0) {
            this.originator.restore(this.history.pop());
        }
    };
    // Test method to verify
    CareTaker.prototype.test = function (newState) {
        // Save the state of the originator
        console.log("Saving the state");
        this.saveState();
        console.log("Originator state:");
        console.log(this.originator);
        console.log("History:");
        console.log(this.history);
        console.log("\n");
        // Change the state
        console.log("Changing the state");
        this.originator.setState(newState);
        console.log("Originator state:");
        console.log(this.originator);
        console.log("History:");
        console.log(this.history);
        console.log("\n");
        // Undo
        console.log("Restoring the state");
        this.undo();
        console.log("Originator state:");
        console.log(this.originator);
        console.log("History:");
        console.log(this.history);
    };
    return CareTaker;
}());
exports.CareTaker = CareTaker;
