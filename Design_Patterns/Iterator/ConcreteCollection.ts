import { IterableCollection } from "./Collection";
import { Iterator, ConcreteIterator } from "./Iterator";

// Concrete collection to iterate over it
// It functions as a wrapper for an array to implement the iterator
// in practice the ConcreteCollection will be the Array class for this example
export class ConcreteCollection<T> implements IterableCollection<T> {
	list: Array<T>;

	constructor(list: Array<T>) {
		this.list = list;
	}

	createIterator(): Iterator<T> {
		return new ConcreteIterator(this);
	}

	getList() {
		return this.list;
	}
}
