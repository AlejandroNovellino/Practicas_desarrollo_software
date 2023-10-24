"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subject = void 0;
// Some implementations of observer defines a abstract class for the subjects
var Subject = /** @class */ (function () {
    function Subject(state) {
        this.state = state;
        this.observers = new Array();
    }
    Subject.prototype.updateObservers = function () {
        var _this = this;
        this.observers.forEach(function (observer) {
            observer.update(_this);
        });
    };
    Subject.prototype.addObserver = function (newObserver) {
        this.observers.push(newObserver);
    };
    Subject.prototype.removeObserver = function (observerToRemove) {
        this.observers = this.observers.filter(function (observer) { return observer != observerToRemove; });
    };
    return Subject;
}());
exports.Subject = Subject;
