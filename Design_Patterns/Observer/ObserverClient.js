"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observer_1 = require("./Observer");
var Subject_1 = require("./Subject");
var observer1 = new Observer_1.ConcreteObserver("Observer 1");
var observer2 = new Observer_1.ConcreteObserver("Observer 2");
var subject1 = new Subject_1.Subject({
    name: "Subject1",
    description: "I am a test subject",
});
subject1.addObserver(observer1);
subject1.addObserver(observer2);
subject1.updateObservers();
