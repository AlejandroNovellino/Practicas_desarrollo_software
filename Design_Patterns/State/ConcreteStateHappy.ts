import { ConcreteStateMad } from "./ConcreteStateMad";
import { Context } from "./Context";
import { IState } from "./IState";

export class ConcreteStateHappy implements IState {
	constructor() {}

	changeState(context: Context): void {
		context.changeState(new ConcreteStateMad());
	}

	handle(context: Context): void {
		console.log(`Hi i am happy right now :D`);
		// now change the state if necessary
		this.changeState(context);
	}
}
