"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteIterator = void 0;
// Concrete iterator for the concrete collection
var ConcreteIterator = /** @class */ (function () {
    function ConcreteIterator(collection) {
        this.iterableCollection = collection;
        this.currentIndex = 0;
    }
    // Update the current state of the iterator
    ConcreteIterator.prototype.getNext = function () {
        this.currentIndex = this.currentIndex + 1;
    };
    // Verify if it has more elements in the collection
    ConcreteIterator.prototype.hasMore = function () {
        return this.currentIndex >= this.iterableCollection.getList().length
            ? false
            : true;
    };
    // Returns the first element
    ConcreteIterator.prototype.getFirst = function () {
        return this.iterableCollection.getList()[0];
    };
    // Return the current element
    ConcreteIterator.prototype.getCurrentElement = function () {
        return this.iterableCollection.getList()[this.currentIndex];
    };
    return ConcreteIterator;
}());
exports.ConcreteIterator = ConcreteIterator;
