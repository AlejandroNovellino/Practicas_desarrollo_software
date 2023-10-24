import { Observer } from "./Observer";

// Some implementations of observer defines a abstract class for the subjects

export class Subject {
	// State of the subject
	state: object;
	// Observers of the subject
	observers: Observer[];

	constructor(state: object) {
		this.state = state;
		this.observers = new Array<Observer>();
	}

	updateObservers() {
		this.observers.forEach(observer => {
			observer.update(this);
		});
	}

	addObserver(newObserver: Observer) {
		this.observers.push(newObserver);
	}

	removeObserver(observerToRemove: Observer) {
		this.observers = this.observers.filter(
			observer => observer != observerToRemove
		);
	}
}
