import { ConcreteObserver, Observer } from "./Observer";
import { Subject } from "./Subject";

let observer1: Observer = new ConcreteObserver("Observer 1");
let observer2: Observer = new ConcreteObserver("Observer 2");

let subject1: Subject = new Subject({
	name: "Subject1",
	description: `I am a test subject`,
});

subject1.addObserver(observer1);
subject1.addObserver(observer2);

subject1.updateObservers();
