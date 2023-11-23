import { Context } from "./Context";

export interface IState {
	changeState(context: Context): void;
	// state specific work
	handle(context: Context): void;
}
