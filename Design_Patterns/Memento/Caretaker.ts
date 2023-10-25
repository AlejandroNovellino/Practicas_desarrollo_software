import { Memento } from "./Memento";
import { Originator } from "./Originator";

export class CareTaker<T> {
	/**
	 * The Caretaker knows not only “when” and “why” to capture the originator’s state,
	 * but also when the state should be restored.
	 */
	originator: Originator<T>;
	history: Memento<T>[];

	constructor(originatorState: T) {
		this.originator = new Originator<T>(originatorState);
		this.history = new Array<Memento<T>>();
	}

	// Save the state of the originator
	saveState(): void {
		let memento = this.originator.save();
		this.history.push(memento);
	}

	// Method to restore the sate of the originator
	undo(): void {
		if (this.history.length != 0) {
			this.originator.restore(this.history.pop() as Memento<T>);
		}
	}

	// Test method to verify
	test(newState: T): void {
		// Save the state of the originator
		console.log(`Saving the state`);
		this.saveState();
		console.log(`Originator state:`);
		console.log(this.originator);
		console.log(`History:`);
		console.log(this.history);
		console.log(`\n`);
		// Change the state
		console.log(`Changing the state`);
		this.originator.setState(newState);
		console.log(`Originator state:`);
		console.log(this.originator);
		console.log(`History:`);
		console.log(this.history);
		console.log(`\n`);
		// Undo
		console.log(`Restoring the state`);
		this.undo();
		console.log(`Originator state:`);
		console.log(this.originator);
		console.log(`History:`);
		console.log(this.history);
	}
}
