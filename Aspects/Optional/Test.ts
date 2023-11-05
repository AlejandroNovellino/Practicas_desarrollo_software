import { Optional } from "./Optional";

class OptionalTest<T> {
	test(elementToFind: T, elements: T[]) {
		let getElement = (elements: T[], elementToFind: T): Optional<T> => {
			return new Optional(
				elements.filter(element => element == elementToFind)[0]
			);
		};

		let myOptional = getElement(elements, elementToFind);
		try {
			console.log(`Hi this is your element: ${myOptional.getValue()}`);
			console.log(myOptional);
		} catch (error) {
			console.log("Ups an error ocurred, the optional has no value");
			console.log(error.name);
			console.log(myOptional);
		}
	}
}

let test = new OptionalTest();
test.test(9, [1, 2, 3, 4, 5]);
