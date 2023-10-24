"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Composite_1 = require("./Composite");
var Client = /** @class */ (function () {
    function Client() {
    }
    return Client;
}());
var client = new Client();
client.elements = new Composite_1.Composite("composite 1");
client.elements.add(new Composite_1.Composite("composite 2"));
client.elements.add(new Composite_1.Leaf("leaf 1"));
client.elements.getChildren()[0].add(new Composite_1.Leaf("leaf 2"));
client.elements.execute();
