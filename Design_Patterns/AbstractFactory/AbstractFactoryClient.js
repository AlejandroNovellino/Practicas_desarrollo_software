"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractFactory_1 = require("./AbstractFactory");
var AbstractFactoryClient = /** @class */ (function () {
    function AbstractFactoryClient() {
        this.factory1 = new AbstractFactory_1.ConcreteFactory1();
        this.factory2 = new AbstractFactory_1.ConcreteFactory2();
    }
    return AbstractFactoryClient;
}());
var client = new AbstractFactoryClient();
console.log(typeof client.factory1.createProductA());
console.log(typeof client.factory1.createProductB());
console.log(typeof client.factory2.createProductA());
console.log(typeof client.factory2.createProductA());
