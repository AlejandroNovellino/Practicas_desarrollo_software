var Mapper = /** @class */ (function () {
    function Mapper() {
    }
    // Map function
    Mapper.prototype.map = function (elementsList, functionToExecuteForEachElement) {
        return elementsList.map(function (element) {
            return functionToExecuteForEachElement(element);
        });
    };
    return Mapper;
}());
var numbersArray = [1, 2, 3, 4];
var mapper = new Mapper();
console.log(mapper.map(numbersArray, function (x) { return x * 2; }));
// Tester of classes, to do
var Tester = /** @class */ (function () {
    function Tester() {
        this.mapper = new Mapper();
    }
    return Tester;
}());
