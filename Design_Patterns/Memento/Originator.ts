import { Memento } from "./Memento";

export class Originator<T> {
	// State of the object
	state: T;

	constructor(state: T) {
		this.state = state;
	}

	// Set the new state of the originator
	setState(state: T) {
		this.state = state;
	}

	// Create a Memento to save current state
	save(): Memento<T> {
		return new Memento<T>(this.state);
	}

	// Restore state from a given Memento
	restore(memento: Memento<T>) {
		this.state = memento.getState();
	}
}
