import {
	AbstractFactory,
	ConcreteFactory1,
	ConcreteFactory2,
} from "./AbstractFactory";

class AbstractFactoryClient {
	// Should by private with the get method
	public factory1: AbstractFactory;
	public factory2: AbstractFactory;

	constructor() {
		this.factory1 = new ConcreteFactory1();
		this.factory2 = new ConcreteFactory2();
	}
}

let client: AbstractFactoryClient = new AbstractFactoryClient();

console.log(typeof client.factory1.createProductA());
console.log(typeof client.factory1.createProductB());
console.log(typeof client.factory2.createProductA());
console.log(typeof client.factory2.createProductA());
