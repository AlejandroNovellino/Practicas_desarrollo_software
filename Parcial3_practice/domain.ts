// Ticket
export class Ticket {
	id: TicketId;
	userId: UserId;

	constructor(userId: UserId) {
		this.id = new UserId(Math.random());
		this.userId = userId;
	}
}

export class TicketId {
	value: number;

	constructor(value: number) {
		this.value = value;
	}
}

// User
export class User {
	id: UserId;
	name: UserName;

	constructor(name: string) {
		this.id = new UserId(Math.random());
		this.name = new UserName(name);
	}
}

export class UserId {
	value: number;

	constructor(value: number) {
		this.value = value;
	}
}

export class UserName {
	value: string;

	constructor(value: string) {
		this.value = value;
	}
}

// parameter object
export class ParamObject {
	userId: string;

	constructor(value: string) {
		this.userId = value;
	}
}

// Result
export class Result<T> {
	result: T;
	error?: Error;
	isError: boolean = false;

	constructor(r: T) {
		this.result = r;
	}

	setResult(r: T) {
		this.result = r;
	}
	setError(e: Error) {
		this.error = e;
	}
}
