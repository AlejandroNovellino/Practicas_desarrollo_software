import { ConcreteCollection } from "./ConcreteCollection";
import { ConcreteIterator } from "./Iterator";

let collection: ConcreteCollection<string> = new ConcreteCollection<string>([
	"Hi",
	" ",
	"i",
	" ",
	"am",
	" ",
	"collection",
]);

let iterator = collection.createIterator();

for (iterator.getFirst(); iterator.hasMore(); iterator.getNext()) {
	console.log(iterator.getCurrentElement());
}
