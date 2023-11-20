// Service implementation
var ConsoleMessageWriter = /** @class */ (function () {
    function ConsoleMessageWriter() {
    }
    ConsoleMessageWriter.prototype.execute = function (message) {
        console.log(message);
    };
    return ConsoleMessageWriter;
}());
var Salutation = /** @class */ (function () {
    // Dependency injection of the service in the constructor
    function Salutation(serviceProvider) {
        if (!serviceProvider)
            throw new Error("No service injected on constructor");
        this.serviceProvider = serviceProvider;
    }
    Salutation.prototype.salutation = function () {
        this.serviceProvider.execute("Hello DI");
    };
    return Salutation;
}());
var MainExample1 = /** @class */ (function () {
    function MainExample1() {
    }
    MainExample1.execute = function () {
        var service = new ConsoleMessageWriter();
        var salutation = new Salutation(service);
        salutation.salutation();
    };
    return MainExample1;
}());
MainExample1.execute();
