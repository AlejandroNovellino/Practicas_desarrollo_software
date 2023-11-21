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
			// execute the super command
			super.execute(command);
		} catch (error) {
			// catch the error
			console.log(`Error executing command ${command}`);
		}
	}
}
