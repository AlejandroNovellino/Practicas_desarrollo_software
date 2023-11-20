import { ICommandService } from "../ICommandService/ICommandService";

class PrintToConsoleService implements ICommandService<PrintToConsole> {
	execute(command: PrintToConsole): void {
		// in theory this method should change the app state
		console.log(command.message);
	}
}

// Param object for the service
class PrintToConsole {
	// class attributes
	message: String;

	constructor(message: String) {
		this.message = message;
	}

	getMessage(): String {
		return this.message;
	}

	setMessage(message: String): void {
		this.message = message;
	}
}
