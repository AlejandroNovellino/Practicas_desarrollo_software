import { CareTaker } from "./Caretaker";

let careTaker = new CareTaker<Object>({
	name: "Hi i am the first originator state",
	age: 0,
});

careTaker.test({
	name: "Hi i am the new originator state :D",
	age: 1,
});
