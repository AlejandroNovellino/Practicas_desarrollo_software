export interface Component {
	// Function list of the elements
	// Remember in composite the interface must have
	// all the methods so subtypes can be use
	// this pattern do not respect LSP

	// Adds a component to the composite object
	add(newSon: Component);
	// Get child
	getChildren();
	// Method that does something depending of the problem
	execute();
}

// Class that generates the composite element
export class Composite implements Component {
	private name: string;
	private sons: Component[];

	constructor(name: string) {
		this.name = name;
		this.sons = new Array<Component>();
	}

	add(newSon) {
		this.sons.push(newSon);
	}

	getChildren() {
		return this.sons;
	}

	execute() {
		console.log(`Hi my name is ${this.name}`);
		for (let element of this.sons) {
			element.execute();
		}
	}
}

// Leaf class
export class Leaf implements Component {
	private name: string;

	constructor(name: string) {
		this.name = name;
	}

	// Method that is not implemented in the leaf
	add(newSon) {}
	// Method that is not implemented in the leaf
	getChildren() {}

	execute() {
		console.log(`Hi my name is ${this.name}`);
	}
}
