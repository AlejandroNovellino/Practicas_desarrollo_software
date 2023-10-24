import { Subject } from "./Subject";

export interface Observer {
	// Some implementations of observer save the state of the subject that is watching
	// state : object
	// Method that is call by the subject to notify a change
	update(subject: Subject): void;
}

export class ConcreteObserver implements Observer {
	name: string;

	constructor(name: string) {
		this.name = name;
	}

	update(subject: Subject): void {
		console.log(`Hello from ${this.name}`);
		console.log(subject.state);
	}
}
