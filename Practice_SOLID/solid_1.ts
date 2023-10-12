// Testing different things
let message: string = "Hello";
//let testTypeDeclaration: string = "Test message";

const func = () => "Hello i am arrow function";

console.log(message);

console.log(`This is the arrow function ${func()}`);

console.log(`This is the arrow function ${(() => {
	return "Hello i am arrow function";
})()}
`);

//console.log(testTypeDeclaration);
let tuple: [number, string, boolean] = [7, "hello", true];

// Testing generics in functions as objects

function testingObjectsAsGenerics<genericType>(obj: genericType): void {
	console.log(obj);
}

testingObjectsAsGenerics({
	param_1: "Hello",
	param_2: 2,
});
