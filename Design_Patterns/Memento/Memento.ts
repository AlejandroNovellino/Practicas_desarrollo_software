export class Memento<T> {
	// State to save of the Originator
	state: T;

	constructor(state: T) {
		this.state = state;
	}

	// Method to get the saved state
	getState(): T {
		return this.state;
	}
}
