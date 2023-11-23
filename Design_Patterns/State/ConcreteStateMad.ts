import { ConcreteStateHappy } from "./ConcreteStateHappy";
import { Context } from "./Context";
import { IState } from "./IState";

export class ConcreteStateMad implements IState {
	constructor() {}

	changeState(context: Context): void {
		context.changeState(new ConcreteStateHappy());
	}

	handle(context: Context): void {
		console.log(`Hi i am mad right now :|`);
		// now change the state if necessary
		this.changeState(context);
	}
}
