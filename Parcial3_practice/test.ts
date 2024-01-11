import { GetTicketService, ILogger, LoggingDecorator } from "./application";
import { ParamObject } from "./domain";
import { Logger } from "./infraestructure";

// testing the code

// base service
let service: GetTicketService = new GetTicketService();
// decorate
// logger
let logger: ILogger = new Logger();
let serviceDecorated: LoggingDecorator = new LoggingDecorator(service, logger);

serviceDecorated.execute(new ParamObject('user "id" of the param object'));
