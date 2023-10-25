"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Caretaker_1 = require("./Caretaker");
var careTaker = new Caretaker_1.CareTaker({
    name: "Hi i am the first originator state",
    age: 0,
});
careTaker.test({
    name: "Hi i am the new originator state :D",
    age: 1,
});
