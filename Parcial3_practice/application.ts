import { ParamObject, User, Ticket } from "./domain";

// ISservice
export interface IService<TCommand> {
	execute(params: TCommand): void;
}

export class GetTicketService implements IService<ParamObject> {
	execute(params: ParamObject): void {
		// simulate getting the user by id with repository
		console.log(params.userId);
		let user: User = new User("Yong Ju");
		// simulate creating and saving the ticket with the repository and factory
		let ticket: Ticket = new Ticket(user.id);
		console.log(`This is the ticket id: ${ticket.id}`);
		// this should generate the domain event
		// here we can return
	}
}

// aspects
export abstract class IServiceDecorator<TCommand>
	implements IService<TCommand>
{
	serviceToDecorate: IService<TCommand>;

	constructor(service: IService<TCommand>) {
		this.serviceToDecorate = service;
	}

	execute(params: TCommand): void {
		this.serviceToDecorate.execute(params);
	}
}

export class LoggingDecorator extends IServiceDecorator<ParamObject> {
	logger: ILogger;

	constructor(service: IService<ParamObject>, logger: ILogger) {
		super(service);
		this.logger = logger;
	}

	execute(params: ParamObject): void {
		this.serviceToDecorate.execute(params);

		this.logger.logging(params.userId, "This is from logger");
	}
}

// logger
export interface ILogger {
	logging(userId: String, message: string);
}
