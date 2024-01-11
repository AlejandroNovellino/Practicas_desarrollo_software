import { ParamObject, User, Ticket, Result } from "./domain";

// ISservice
export interface IService<TCommand, ReturnT> {
	execute(params: TCommand): Result<ReturnT>;
}

export class GetTicketService implements IService<ParamObject, User> {
	execute(params: ParamObject): Result<User> {
		// simulate getting the user by id with repository
		console.log(params.userId);
		let user: User = new User("Yong Ju");
		// simulate creating and saving the ticket with the repository and factory
		let ticket: Ticket = new Ticket(user.id);
		console.log(`This is the ticket id: ${ticket.id}`);
		// this should generate the domain event
		// here we can return
		return new Result(user);
	}
}

// aspects
export abstract class IServiceDecorator<TCommand, ReturnT>
	implements IService<TCommand, ReturnT>
{
	serviceToDecorate: IService<TCommand, ReturnT>;

	constructor(service: IService<TCommand, ReturnT>) {
		this.serviceToDecorate = service;
	}

	execute(params: TCommand): Result<ReturnT> {
		return this.serviceToDecorate.execute(params);
	}
}

export class LoggingDecorator extends IServiceDecorator<ParamObject, User> {
	logger: ILogger;

	constructor(service: IService<ParamObject, User>, logger: ILogger) {
		super(service);
		this.logger = logger;
	}

	execute(params: ParamObject): Result<User> {
		let serviceResponse = this.serviceToDecorate.execute(params);
		if (serviceResponse.isError) {
			return serviceResponse;
		} else {
			this.logger.logging(
				serviceResponse.result.id.value.toString(),
				"This is from logger"
			);
			return serviceResponse;
		}
	}
}

// logger
export interface ILogger {
	logging(userId: String, message: string);
}
