import { ILogger } from "./application";

export class Logger implements ILogger {
	logging(userId: String, message: string) {
		console.log(`Message ${userId} asnd ${message}`);
	}
}
