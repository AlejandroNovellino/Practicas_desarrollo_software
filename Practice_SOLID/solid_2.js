var DeleteCourseCommand = /** @class */ (function () {
    function DeleteCourseCommand() {
    }
    DeleteCourseCommand.prototype.execute = function (param) {
        var outputMessage = "Hello from 'execute' method in class 'DeleteCourseCommand' Called with param ".concat(param);
        console.log(outputMessage);
    };
    return DeleteCourseCommand;
}());
var UpdateCourseCommand = /** @class */ (function () {
    function UpdateCourseCommand() {
    }
    UpdateCourseCommand.prototype.execute = function (param) {
        var outputMessage = "Hello from 'execute' method in class 'UpdateCourseCommand' Called with param ".concat(param);
        console.log(outputMessage);
    };
    return UpdateCourseCommand;
}());
// Testing how to solve multiples types as params to execute
var MultipleGenericsTest = /** @class */ (function () {
    function MultipleGenericsTest() {
    }
    MultipleGenericsTest.prototype.execute = function (param) {
        var outputMessage = "\nHello from 'execute' method in class 'MultipleGenericsTest' Called with param ".concat(param === null || param === void 0 ? void 0 : param.param_1, " and ").concat(param === null || param === void 0 ? void 0 : param.param_2, "\n");
        console.log(outputMessage);
    };
    return MultipleGenericsTest;
}());
var FunctionsTesterInSolid2 = /** @class */ (function () {
    function FunctionsTesterInSolid2() {
        this.commands = {};
        var aux = typeof DeleteCourseCommand;
        this.commands[aux] = new DeleteCourseCommand();
        aux = typeof DeleteCourseCommand;
        this.commands[aux] = new UpdateCourseCommand();
        aux = typeof DeleteCourseCommand;
        this.commands[aux] = new MultipleGenericsTest();
    }
    FunctionsTesterInSolid2.prototype.executeCommand = function (commandType, params) {
        this.commands[commandType].execute(params);
    };
    return FunctionsTesterInSolid2;
}());
var solid2Tester = new FunctionsTesterInSolid2();
solid2Tester.executeCommand(typeof MultipleGenericsTest, {
    param_1: "Param 1",
    param_2: 10,
});
