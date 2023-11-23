import { ConcreteStateHappy } from "./ConcreteStateHappy";
import { IState } from "./IState";

export class Context {
	state: IState;

	constructor() {
		this.state = new ConcreteStateHappy();
	}

	changeState(state: IState): void {
		this.state = state;
	}
}
