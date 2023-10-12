class Mapper {
	constructor() {}

	// Map function
	// map for
	map<Type>(elementsList: Type[], functionToExecuteForEachElement): Type[] {
		return elementsList.map(element =>
			functionToExecuteForEachElement(element)
		);
	}
}

let numbersArray: number[] = [1, 2, 3, 4];

let mapper = new Mapper();
console.log(mapper.map(numbersArray, x => x * 2));

// Tester of classes, to do
class Tester {
	mapper!: Mapper;

	constructor() {
		this.mapper = new Mapper();
	}
}
