"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteCollection = void 0;
var Iterator_1 = require("./Iterator");
// Concrete collection to iterate over it
// It functions as a wrapper for an array to implement the iterator
// in practice the ConcreteCollection will be the Array class for this example
var ConcreteCollection = /** @class */ (function () {
    function ConcreteCollection(list) {
        this.list = list;
    }
    ConcreteCollection.prototype.createIterator = function () {
        return new Iterator_1.ConcreteIterator(this);
    };
    ConcreteCollection.prototype.getList = function () {
        return this.list;
    };
    return ConcreteCollection;
}());
exports.ConcreteCollection = ConcreteCollection;
