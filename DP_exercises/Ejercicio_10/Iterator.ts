interface MyIterator<T> {
	hasMore(): boolean;
	getNext(): void;
	getCurrentElement(): T;
	getFirst(): T;
}

class MyForwardIterator<T> implements MyIterator<T> {
	collection: Vector<T>;
	currentIndex: number;

	constructor(collection: Vector<T>) {
		this.collection = collection;
		this.currentIndex = 0;
	}

	hasMore(): boolean {
		return this.currentIndex >= this.collection.getElements().length
			? false
			: true;
	}
	getNext(): void {
		this.currentIndex = this.currentIndex + 1;
	}
	getCurrentElement(): T {
		return this.collection.getElements()[this.currentIndex];
	}
	getFirst(): T {
		return this.collection.getElements()[0];
	}
}

class MyReverseIterator<T> implements MyIterator<T> {
	collection: Vector<T>;
	currentIndex: number;

	constructor(collection: Vector<T>) {
		this.collection = collection;
		this.currentIndex = collection.getElements().length - 1;
	}

	hasMore(): boolean {
		return this.currentIndex < 0 ? false : true;
	}
	getNext(): void {
		this.currentIndex = this.currentIndex - 1;
	}
	getCurrentElement(): T {
		return this.collection.getElements()[this.currentIndex];
	}
	getFirst(): T {
		return this.collection.getElements()[this.currentIndex];
	}
}

//----------------------------------------------------
interface IterableCollection<T> {
	createForwardIterator(): MyIterator<T>;
	createReverseIterator(): MyIterator<T>;
}

class Vector<T> implements IterableCollection<T> {
	elements: Array<T>;

	constructor() {
		this.elements = new Array<T>();
	}

	createForwardIterator(): MyIterator<T> {
		return new MyForwardIterator<T>(this);
	}

	createReverseIterator(): MyIterator<T> {
		return new MyReverseIterator<T>(this);
	}

	getElements(): Array<T> {
		return this.elements;
	}
}

//-----------------------------------------------------
class Test {
	collection: Vector<string>;

	constructor() {
		this.collection = new Vector<string>();
	}

	test() {
		this.collection.getElements().push("Hello");
		this.collection.getElements().push("my");
		this.collection.getElements().push("darling");

		// Forward iterator test
		console.log(`\nTesting forward iterator:`);
		let forwardIterator = this.collection.createForwardIterator();
		for (
			forwardIterator.getFirst();
			forwardIterator.hasMore();
			forwardIterator.getNext()
		) {
			console.log(forwardIterator.getCurrentElement());
		}

		// It functions too as
		/*
		for (; forwardIterator.hasMore(); forwardIterator.getNext()) {
			console.log(forwardIterator.getCurrentElement());
		}
		*/

		// Reverse iterator test
		console.log(`\nTesting reverse iterator:`);
		let reverseIterator = this.collection.createReverseIterator();
		for (
			reverseIterator.getFirst();
			reverseIterator.hasMore();
			reverseIterator.getNext()
		) {
			console.log(reverseIterator.getCurrentElement());
		}
	}
}

let test = new Test();
test.test();
