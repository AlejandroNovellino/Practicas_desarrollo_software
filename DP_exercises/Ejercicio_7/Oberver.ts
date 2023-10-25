abstract class Subject {
	observers: Array<Observer>;

	constructor() {
		this.observers = new Array<Observer>();
	}

	insert(o: Observer) {
		this.observers.push(o);
	}
	notify() {
		for (let o of this.observers) {
			o.update(this);
		}
	}
}

class Clock extends Subject {
	time: number;

	constructor(time: number) {
		super();
		this.time = time;
	}

	setState(time: number): void {
		this.time = time;
		this.notify();
	}

	getState(): number {
		return this.time;
	}
}

//-----------------------------------------
interface Observer {
	update(context);
}

class Time_in implements Observer {
	time: number;
	time_differ: number;
	place: string;

	constructor(time, time_differ, place) {
		this.time = time + time_differ;
		this.time_differ = time_differ;
		this.place = place;
	}

	update(context) {
		this.time = context.time + this.time_differ;
	}
}

//-----------------------------------
class App {
	clock: Clock;
	times_in: Array<Observer>;

	constructor() {
		this.clock = new Clock(12);
		this.times_in = new Array<Time_in>();
	}

	test() {
		let new_time_in = new Time_in(24, 12, "France");
		this.times_in.push(new_time_in);
		this.clock.insert(new_time_in);

		let new_time_in_2 = new Time_in(24, -12, "Madrid");
		this.times_in.push(new_time_in_2);
		this.clock.insert(new_time_in_2);

		console.log(`Clock state:`);
		console.log(this.clock);
		console.log(`Times_in states:`);
		console.log(this.times_in);

		console.log(`\nUpdating clock state\n`);
		this.clock.setState(64);

		console.log(`Clock state:`);
		console.log(this.clock);
		console.log(`Times_in states:`);
		console.log(this.times_in);
	}
}

let app = new App();
app.test();
