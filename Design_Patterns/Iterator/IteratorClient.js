"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConcreteCollection_1 = require("./ConcreteCollection");
var collection = new ConcreteCollection_1.ConcreteCollection([
    "Hi",
    " ",
    "i",
    " ",
    "am",
    " ",
    "collection",
]);
var iterator = collection.createIterator();
for (iterator.getFirst(); iterator.hasMore(); iterator.getNext()) {
    console.log(iterator.getCurrentElement());
}
