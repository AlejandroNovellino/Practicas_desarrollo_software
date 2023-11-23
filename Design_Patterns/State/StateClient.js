"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Context_1 = require("./Context");
var context = new Context_1.Context();
// lets execute the handle and change state 2 times
context.state.handle(context);
context.state.handle(context);
