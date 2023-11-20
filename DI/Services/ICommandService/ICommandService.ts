export interface ICommandService<T> {
	execute(command: T): void;
}
