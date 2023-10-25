import { IterableCollection } from "../Design_Patterns/Iterator/Collection";
import { Iterator } from "../Design_Patterns/Iterator/Iterator";

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
	(accumulator, currentValue) => accumulator + currentValue
);

console.log(sumWithInitial);
// Expected output: 10

//-----------------------------------------------
interface ReduxFunction<E> {
	apply(e1: E, e2: E): E;
}

class Reducer<A> {
	public redux(
		collection: IterableCollection<A>,
		functionToCall: ReduxFunction<A>
	): A {
		// Get the iterator and a accumulator of the same type
		let concreteIterator = collection.createIterator();
		let accumulator: A = concreteIterator.getFirst();

		for (; concreteIterator.hasMore(); concreteIterator.getNext()) {
			accumulator = functionToCall.apply(
				accumulator,
				concreteIterator.getCurrentElement()
			);
		}

		return accumulator;
	}
}
