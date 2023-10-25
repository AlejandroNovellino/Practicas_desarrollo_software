"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConcreteComponent_1 = require("./ConcreteComponent");
var Decorator_1 = require("./Decorator");
var Decorator_2 = require("./Decorator");
var component = new ConcreteComponent_1.ConcreteComponent();
var decorator1 = new Decorator_1.ConcreteDecorator1(component);
var decorator2 = new Decorator_2.ConcreteDecorator2(decorator1);
decorator2.execute();
