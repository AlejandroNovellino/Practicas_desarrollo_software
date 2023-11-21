import { ErrorHandingAspect } from "./Services/Aspects/ErrorHandling";
import {
	PrintToConsole,
	PrintToConsoleService,
} from "./Services/CommandServices/PrintToConsoleService";
import { PrintService } from "./Services/ServiceCallers/PrintService";

class Main {
	static testingPrintService(): void {
		// creating the services
		let baseService = new PrintToConsoleService();
		// decorating the service
		let decoratedService = new ErrorHandingAspect<PrintToConsole>(baseService);
		// creating the service caller
		let printService = new PrintService(decoratedService);
		// calling the service
		printService.print(new PrintToConsole(`Hi this is the message to print`));
	}
}

// executing the test
Main.testingPrintService();
