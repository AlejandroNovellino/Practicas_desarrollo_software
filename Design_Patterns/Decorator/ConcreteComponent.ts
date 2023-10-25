import { Component } from "./Component";

export class ConcreteComponent implements Component {
	constructor() {}

	execute(): void {
		console.log(`Inside concrete component`);
	}
}
