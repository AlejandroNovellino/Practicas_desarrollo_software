import { ConcreteCollection } from "./ConcreteCollection";
// Interface of the iterator
export interface Iterator<T> {
	getNext();
	hasMore(): boolean;
	getFirst(): T;
	getCurrentElement(): T;
}

// Concrete iterator for the concrete collection
export class ConcreteIterator<T> implements Iterator<T> {
	iterableCollection: ConcreteCollection<T>;
	currentIndex: number;

	constructor(collection: ConcreteCollection<T>) {
		this.iterableCollection = collection;
		this.currentIndex = 0;
	}

	// Update the current state of the iterator
	getNext() {
		this.currentIndex = this.currentIndex + 1;
	}

	// Verify if it has more elements in the collection
	hasMore(): boolean {
		return this.currentIndex >= this.iterableCollection.getList().length
			? false
			: true;
	}

	// Returns the first element
	getFirst() {
		return this.iterableCollection.getList()[0];
	}

	// Return the current element
	getCurrentElement(): T {
		return this.iterableCollection.getList()[this.currentIndex];
	}
}
