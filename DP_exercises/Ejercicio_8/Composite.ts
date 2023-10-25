interface Component {
	getPrice(): number;
}

class Kit implements Component {
	code: number;
	kitElements: Array<Component>;

	constructor(code: number) {
		this.code = code;
		this.kitElements = new Array<Component>();
	}

	addElement(component: Component) {
		this.kitElements.push(component);
	}

	getPrice(): number {
		let totalPrice: number = 0;
		for (let element of this.kitElements) {
			totalPrice += element.getPrice();
		}

		console.log(
			`Price of this branch is: ${
				totalPrice - new CalculateDiscount().execute(totalPrice)
			}`
		);

		return totalPrice - new CalculateDiscount().execute(totalPrice);
	}
}

class KitElement implements Component {
	code: number;
	price: number;

	constructor(code: number, price: number) {
		this.code = code;
		this.price = price;
	}

	getPrice(): number {
		return this.price;
	}
}

class CalculateDiscount {
	execute(price: number) {
		return price * 0.1;
	}
}

class Exercise8Test {
	test() {
		let root = new Kit(1);

		// Create a branch
		let branch = new Kit(2);
		branch.addElement(new KitElement(1, 10));
		branch.addElement(new KitElement(2, 20));
		root.addElement(branch);

		// Adds leaf to the root
		root.addElement(new KitElement(3, 10));
		root.addElement(new KitElement(4, 20));

		console.log(root);
		console.log(root.getPrice());
	}
}

let testExercise8 = new Exercise8Test();
testExercise8.test();
