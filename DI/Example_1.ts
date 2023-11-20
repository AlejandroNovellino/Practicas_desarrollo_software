// Service interface
interface IMessageWriter {
	execute(message: String);
}

// Service implementation
class ConsoleMessageWriter implements IMessageWriter {
	execute(message: String) {
		console.log(message);
	}
}

class Salutation {
	private readonly serviceProvider: IMessageWriter;

	// Dependency injection of the service in the constructor
	constructor(serviceProvider: IMessageWriter) {
		if (!serviceProvider) throw new Error("No service injected on constructor");

		this.serviceProvider = serviceProvider;
	}

	salutation(): void {
		this.serviceProvider.execute("Hello DI");
	}
}

class MainExample1 {
	static execute(): void {
		let service: IMessageWriter = new ConsoleMessageWriter();
		let salutation = new Salutation(service);
		salutation.salutation();
	}
}

MainExample1.execute();
