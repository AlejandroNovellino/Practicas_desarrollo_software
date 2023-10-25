"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array1 = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
var initialValue = 0;
var sumWithInitial = array1.reduce(function (accumulator, currentValue) { return accumulator + currentValue; });
console.log(sumWithInitial);
var Reducer = /** @class */ (function () {
    function Reducer() {
    }
    Reducer.prototype.redux = function (collection, functionToCall) {
        // Get the iterator and a accumulator of the same type
        var concreteIterator = collection.createIterator();
        var accumulator = concreteIterator.getFirst();
        for (; concreteIterator.hasMore(); concreteIterator.getNext()) {
            accumulator = functionToCall.apply(accumulator, concreteIterator.getCurrentElement());
        }
        return accumulator;
    };
    return Reducer;
}());
