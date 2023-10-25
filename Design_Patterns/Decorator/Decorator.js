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
exports.ConcreteDecorator2 = exports.ConcreteDecorator1 = exports.BaseDecorator = void 0;
var BaseDecorator = /** @class */ (function () {
    function BaseDecorator(component) {
        this.wrappee = component;
    }
    BaseDecorator.prototype.execute = function () {
        this.wrappee.execute();
    };
    return BaseDecorator;
}());
exports.BaseDecorator = BaseDecorator;
var ConcreteDecorator1 = /** @class */ (function (_super) {
    __extends(ConcreteDecorator1, _super);
    function ConcreteDecorator1(component) {
        return _super.call(this, component) || this;
    }
    // Execute the base behavior
    ConcreteDecorator1.prototype.execute = function () {
        _super.prototype.execute.call(this);
        this.addedBehavior();
    };
    // Added behavior of the concrete decorator
    ConcreteDecorator1.prototype.addedBehavior = function () {
        console.log("Added behavior of concrete decorator 1");
    };
    return ConcreteDecorator1;
}(BaseDecorator));
exports.ConcreteDecorator1 = ConcreteDecorator1;
var ConcreteDecorator2 = /** @class */ (function (_super) {
    __extends(ConcreteDecorator2, _super);
    function ConcreteDecorator2(component) {
        return _super.call(this, component) || this;
    }
    // Execute the base behavior
    ConcreteDecorator2.prototype.execute = function () {
        _super.prototype.execute.call(this);
        this.addedBehavior();
    };
    // Added behavior of the concrete decorator
    ConcreteDecorator2.prototype.addedBehavior = function () {
        console.log("Added behavior of concrete decorator 2");
    };
    return ConcreteDecorator2;
}(BaseDecorator));
exports.ConcreteDecorator2 = ConcreteDecorator2;
