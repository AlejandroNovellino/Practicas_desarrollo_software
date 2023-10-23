import { AirRescueUnitsMediator } from "./Mediator";

let mediator = new AirRescueUnitsMediator();
mediator.createUnits();

mediator.getJeep().notifyMessage();
