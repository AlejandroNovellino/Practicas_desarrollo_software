"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductB2 = exports.ProductB1 = exports.AbstractProductB = exports.ProductA2 = exports.ProductA1 = exports.AbstractProductA = void 0;
var AbstractProductA = /** @class */ (function () {
    function AbstractProductA() {
    }
    return AbstractProductA;
}());
exports.AbstractProductA = AbstractProductA;
var ProductA1 = /** @class */ (function (_super) {
    __extends(ProductA1, _super);
    function ProductA1() {
        return _super.call(this) || this;
    }
    return ProductA1;
}(AbstractProductA));
exports.ProductA1 = ProductA1;
var ProductA2 = /** @class */ (function (_super) {
    __extends(ProductA2, _super);
    function ProductA2() {
        return _super.call(this) || this;
    }
    return ProductA2;
}(AbstractProductA));
exports.ProductA2 = ProductA2;
var AbstractProductB = /** @class */ (function () {
    function AbstractProductB() {
    }
    return AbstractProductB;
}());
exports.AbstractProductB = AbstractProductB;
var ProductB1 = /** @class */ (function (_super) {
    __extends(ProductB1, _super);
    function ProductB1() {
        return _super.call(this) || this;
    }
    return ProductB1;
}(AbstractProductB));
exports.ProductB1 = ProductB1;
var ProductB2 = /** @class */ (function (_super) {
    __extends(ProductB2, _super);
    function ProductB2() {
        return _super.call(this) || this;
    }
    return ProductB2;
}(AbstractProductB));
exports.ProductB2 = ProductB2;
