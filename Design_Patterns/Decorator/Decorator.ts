import { Component } from "./Component";

export abstract class BaseDecorator implements Component {
	wrappee: Component;

	constructor(component: Component) {
		this.wrappee = component;
	}

	execute(): void {
		this.wrappee.execute();
	}
}

export class ConcreteDecorator1 extends BaseDecorator {
	constructor(component: Component) {
		super(component);
	}

	// Execute the base behavior
	execute(): void {
		super.execute();
		this.addedBehavior();
	}

	// Added behavior of the concrete decorator
	private addedBehavior(): void {
		console.log(`Added behavior of concrete decorator 1`);
	}
}

export class ConcreteDecorator2 extends BaseDecorator {
	constructor(component: Component) {
		super(component);
	}

	// Execute the base behavior
	execute(): void {
		super.execute();
		this.addedBehavior();
	}

	// Added behavior of the concrete decorator
	private addedBehavior(): void {
		console.log(`Added behavior of concrete decorator 2`);
	}
}
