import { Context } from "./Context";

let context = new Context();
// lets execute the handle and change state 2 times
context.state.handle(context);
context.state.handle(context);
