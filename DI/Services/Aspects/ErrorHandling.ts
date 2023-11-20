import { ICommandServiceDecorator } from "../DI_Decorator/IDecorator";
import { ICommandService } from "../ICommandService/ICommandService";

export class ErrorHandingAspect<T> extends ICommandServiceDecorator<T> {
	// constructor
	constructor(command: ICommandService<T>) {
		super(command);
	}

	// method of the aspect
	execute(command: T): void {
		try {
			super.execute(command);
		} catch (error) {
			console.log(`Error executing command ${super.decoratee}`);
		}
	}
}
