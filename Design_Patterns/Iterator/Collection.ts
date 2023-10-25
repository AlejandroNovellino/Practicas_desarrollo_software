import { Iterator } from "./Iterator";

// Interface for collections
export interface IterableCollection<T> {
	createIterator(): Iterator<T>;
}
