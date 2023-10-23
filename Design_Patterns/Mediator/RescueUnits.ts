import { IRescueUnitsMediator } from "./Mediator";

export abstract class RescueUnit {
	/**
	 * Rescue units parent class
	 */
	protected mediator: IRescueUnitsMediator;
	// Method who calls the mediator.notify method to communicate with the others
	// Rescue units through the mediator
	abstract notifyMessage(): void;
	// Method to respond to a message in mediator
	abstract notifyMessageReception(): string;
}

export abstract class AirRescueUnit extends RescueUnit {
	constructor() {
		super();
	}
}

export class RescueHelicopter extends AirRescueUnit {
	constructor(mediator: IRescueUnitsMediator) {
		super();

		this.mediator = mediator;
	}

	notifyMessage(): void {
		this.mediator.notify(this, "peopleFound");
	}

	notifyMessageReception(): string {
		return `Copy and clear! Helicopter rescue unit confirms message`;
	}
}

export abstract class LandRescueUnit extends RescueUnit {
	constructor() {
		super();
	}
}

export class RescueJeep extends LandRescueUnit {
	constructor(mediator: IRescueUnitsMediator) {
		super();

		this.mediator = mediator;
	}

	notifyMessage(): void {
		this.mediator.notify(this, "peopleFound");
	}

	notifyMessageReception(): string {
		return `Copy and clear! Jeep rescue unit confirms message`;
	}
}
