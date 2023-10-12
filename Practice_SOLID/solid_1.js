// Testing different things
var message = "Hello";
//let testTypeDeclaration: string = "Test message";
var func = function () { return "Hello i am arrow function"; };
console.log(message);
console.log("This is the arrow function ".concat(func()));
console.log("This is the arrow function ".concat((function () {
    return "Hello i am arrow function";
})(), "\n"));
//console.log(testTypeDeclaration);
var tuple = [7, "hello", true];
// Testing generics in functions as objects
function testingObjectsAsGenerics(obj) {
    console.log(obj);
}
testingObjectsAsGenerics({
    param_1: "Hello",
    param_2: 2,
});
