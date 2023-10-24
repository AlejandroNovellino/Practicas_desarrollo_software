import { Component, Composite, Leaf } from "./Composite";

class Client {
	public elements: Component;

	constructor() {}
}

let client: Client = new Client();

client.elements = new Composite("composite 1");
client.elements.add(new Composite("composite 2"));
client.elements.add(new Leaf("leaf 1"));

client.elements.getChildren()[0].add(new Leaf("leaf 2"));

client.elements.execute();
