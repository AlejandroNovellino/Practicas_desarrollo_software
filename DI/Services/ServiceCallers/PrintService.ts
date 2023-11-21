import { PrintToConsole } from "../CommandServices/PrintToConsoleService";
import { ICommandService } from "../ICommandService/ICommandService";

export class PrintService {
	service: ICommandService<PrintToConsole>;

	constructor(service: ICommandService<PrintToConsole>) {
		this.service = service;
	}

	print(command: PrintToConsole): void {
		this.service.execute(command);
	}
}
