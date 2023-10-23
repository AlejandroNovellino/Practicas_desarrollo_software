"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteFactory2 = exports.ConcreteFactory1 = void 0;
var Products_1 = require("./Products");
var ConcreteFactory1 = /** @class */ (function () {
    /*
    Concrete factory for type 1 products
  */
    function ConcreteFactory1() {
    }
    // Creates product A version 1
    ConcreteFactory1.prototype.createProductA = function () {
        return new Products_1.ProductA1();
    };
    // Creates product B version 1
    ConcreteFactory1.prototype.createProductB = function () {
        return new Products_1.ProductB1();
    };
    return ConcreteFactory1;
}());
exports.ConcreteFactory1 = ConcreteFactory1;
var ConcreteFactory2 = /** @class */ (function () {
    /*
    Concrete factory for type 1 products
  */
    function ConcreteFactory2() {
    }
    // Creates product A version 1
    ConcreteFactory2.prototype.createProductA = function () {
        return new Products_1.ProductA2();
    };
    // Creates product B version 1
    ConcreteFactory2.prototype.createProductB = function () {
        return new Products_1.ProductB2();
    };
    return ConcreteFactory2;
}());
exports.ConcreteFactory2 = ConcreteFactory2;
