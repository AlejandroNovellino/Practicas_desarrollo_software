import {
	AbstractProductA,
	ProductA1,
	ProductA2,
	AbstractProductB,
	ProductB1,
	ProductB2,
} from "./Products";

export interface AbstractFactory {
	createProductA(): AbstractProductA;
	createProductB(): AbstractProductB;
}

export class ConcreteFactory1 implements AbstractFactory {
	/* 
    Concrete factory for type 1 products
  */
	constructor() {}

	// Creates product A version 1
	createProductA(): AbstractProductA {
		return new ProductA1();
	}

	// Creates product B version 1
	createProductB() {
		return new ProductB1();
	}
}

export class ConcreteFactory2 implements AbstractFactory {
	/* 
    Concrete factory for type 1 products
  */
	constructor() {}

	// Creates product A version 1
	createProductA(): AbstractProductA {
		return new ProductA2();
	}

	// Creates product B version 1
	createProductB() {
		return new ProductB2();
	}
}
