"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Leaf = exports.Composite = void 0;
// Class that generates the composite element
var Composite = /** @class */ (function () {
    function Composite(name) {
        this.name = name;
        this.sons = new Array();
    }
    Composite.prototype.add = function (newSon) {
        this.sons.push(newSon);
    };
    Composite.prototype.getChildren = function () {
        return this.sons;
    };
    Composite.prototype.execute = function () {
        console.log("Hi my name is ".concat(this.name));
        for (var _i = 0, _a = this.sons; _i < _a.length; _i++) {
            var element = _a[_i];
            element.execute();
        }
    };
    return Composite;
}());
exports.Composite = Composite;
// Leaf class
var Leaf = /** @class */ (function () {
    function Leaf(name) {
        this.name = name;
    }
    // Method that is not implemented in the leaf
    Leaf.prototype.add = function (newSon) { };
    // Method that is not implemented in the leaf
    Leaf.prototype.getChildren = function () { };
    Leaf.prototype.execute = function () {
        console.log("Hi my name is ".concat(this.name));
    };
    return Leaf;
}());
exports.Leaf = Leaf;
