import { ConcreteComponent } from "./ConcreteComponent";
import { ConcreteDecorator1 } from "./Decorator";
import { ConcreteDecorator2 } from "./Decorator";

let component = new ConcreteComponent();
let decorator1 = new ConcreteDecorator1(component);
let decorator2 = new ConcreteDecorator2(decorator1);

decorator2.execute();
