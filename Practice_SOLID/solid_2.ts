interface ICommand<genericType> {
	execute: (param: genericType) => void;
}

class DeleteCourseCommand<genericType> implements ICommand<genericType> {
	constructor() {}

	execute(param: genericType): void {
		let outputMessage: string = `Hello from 'execute' method in class 'DeleteCourseCommand' Called with param ${param}`;
		console.log(outputMessage);
	}
}

class UpdateCourseCommand<genericType> implements ICommand<genericType> {
	constructor() {}

	execute(param: genericType): void {
		let outputMessage: string = `Hello from 'execute' method in class 'UpdateCourseCommand' Called with param ${param}`;
		console.log(outputMessage);
	}
}

// Testing how to solve multiples types as params to execute
class MultipleGenericsTest<genericType> implements ICommand<genericType> {
	constructor() {}

	execute(param: genericType): void {
		let outputMessage: string = `\nHello from 'execute' method in class 'MultipleGenericsTest' Called with param ${
			(param as MultipleGenericsTestType)?.param_1
		} and ${(param as MultipleGenericsTestType)?.param_2}\n`;

		console.log(outputMessage);
	}
}

// Testing generics in functions as objects
type MultipleGenericsTestType = {
	param_1: string;
	param_2: number;
};

class FunctionsTesterInSolid2 {
	commands: object;

	constructor() {
		this.commands = {};

		let aux = typeof DeleteCourseCommand;
		this.commands[aux] = new DeleteCourseCommand<string>();

		aux = typeof DeleteCourseCommand;
		this.commands[aux] = new UpdateCourseCommand<string>();

		aux = typeof DeleteCourseCommand;
		this.commands[aux] = new MultipleGenericsTest<MultipleGenericsTestType>();
	}

	executeCommand(commandType: string, params): void {
		this.commands[commandType].execute(params);
	}
}

let solid2Tester = new FunctionsTesterInSolid2();
solid2Tester.executeCommand(typeof MultipleGenericsTest, {
	param_1: "Param 1",
	param_2: 10,
});
