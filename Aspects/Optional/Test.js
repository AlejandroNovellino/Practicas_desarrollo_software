"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Optional_1 = require("./Optional");
var OptionalTest = /** @class */ (function () {
    function OptionalTest() {
    }
    OptionalTest.prototype.test = function (elementToFind, elements) {
        var getElement = function (elements, elementToFind) {
            return new Optional_1.Optional(elements.filter(function (element) { return element == elementToFind; })[0]);
        };
        var myOptional = getElement(elements, elementToFind);
        try {
            console.log("Hi this is your element: ".concat(myOptional.getValue()));
            console.log(myOptional);
        }
        catch (error) {
            console.log("Ups an error ocurred, the optional has no value");
            console.log(error.name);
            console.log(myOptional);
        }
    };
    return OptionalTest;
}());
var test = new OptionalTest();
test.test(9, [1, 2, 3, 4, 5]);
