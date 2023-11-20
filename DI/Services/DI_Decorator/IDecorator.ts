import { ICommandService } from "../ICommandService/ICommandService";

export abstract class ICommandServiceDecorator<T>
	implements ICommandService<T>
{
	decoratee: ICommandService<T>;

	// constructor DI
	constructor(decoratee: ICommandService<T>) {
		this.decoratee = decoratee;
	}
	// method to execute
	execute(command: T): void {
		this.decoratee.execute(command);
	}
}
