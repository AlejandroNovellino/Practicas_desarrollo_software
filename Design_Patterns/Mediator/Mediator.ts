import { RescueUnit, RescueJeep, RescueHelicopter } from "./RescueUnits";

export interface IRescueUnitsMediator {
	notify(sender: RescueUnit, event: string);
}

export class AirRescueUnitsMediator implements IRescueUnitsMediator {
	private helicopter: RescueHelicopter;
	private jeep: RescueJeep;

	constructor() {}

	createUnits(): void {
		this.helicopter = new RescueHelicopter(this);
		this.jeep = new RescueJeep(this);
	}

	notify(sender: RescueUnit, event: string) {
		if (sender == this.helicopter && event == "peopleFound") {
			console.log(`Helicopter found the people`);
			console.log(this.jeep.notifyMessageReception());
		} else if (sender == this.jeep && event == "peopleFound") {
			console.log(`Jeep found the people`);
			console.log(this.helicopter.notifyMessageReception());
		}
	}

	getHelicopter() {
		return this.helicopter;
	}

	getJeep() {
		return this.jeep;
	}
}
