import { PrintToConsole } from "../CommandServices/PrintToConsoleService";
import { ICommandServiceDecorator } from "../DI_Decorator/IDecorator";
import { ICommandService } from "../ICommandService/ICommandService";

interface IPushSender<T> {
	sendPush(element: T);
}

export class PushSender implements IPushSender<PrintToConsole> {
	sendPush(element: PrintToConsole) {
		console.log(` Hi from PushSender, pushing ${element.message}`);
	}
}

export class PushDecorator<T> extends ICommandServiceDecorator<T> {
	sender: IPushSender<PrintToConsole>;

	constructor(
		service: ICommandService<T>,
		sender: IPushSender<PrintToConsole>
	) {
		super(service);
		this.sender = sender;
	}

	execute(command: T): void {
		this.sender.sendPush(PrintToConsole.fromGenericToClass(command));
		super.execute(command);
	}
}
