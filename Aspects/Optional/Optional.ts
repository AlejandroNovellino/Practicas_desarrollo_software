export class Optional<T> {
	value: T;

	constructor(value) {
		this.value = value;
	}

	hasValue(): boolean {
		return this.value ? true : false;
	}

	getValue(): T {
		if (!this.value) throw new Error("No value in the optional");
		return this.value;
	}
}
