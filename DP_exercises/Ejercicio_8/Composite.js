var Kit = /** @class */ (function () {
    function Kit(code) {
        this.code = code;
        this.kitElements = new Array();
    }
    Kit.prototype.addElement = function (component) {
        this.kitElements.push(component);
    };
    Kit.prototype.getPrice = function () {
        var totalPrice = 0;
        for (var _i = 0, _a = this.kitElements; _i < _a.length; _i++) {
            var element = _a[_i];
            totalPrice += element.getPrice();
        }
        console.log("Price of this branch is: ".concat(totalPrice - new CalculateDiscount().execute(totalPrice)));
        return totalPrice - new CalculateDiscount().execute(totalPrice);
    };
    return Kit;
}());
var KitElement = /** @class */ (function () {
    function KitElement(code, price) {
        this.code = code;
        this.price = price;
    }
    KitElement.prototype.getPrice = function () {
        return this.price;
    };
    return KitElement;
}());
var CalculateDiscount = /** @class */ (function () {
    function CalculateDiscount() {
    }
    CalculateDiscount.prototype.execute = function (price) {
        return price * 0.1;
    };
    return CalculateDiscount;
}());
var Exercise8Test = /** @class */ (function () {
    function Exercise8Test() {
    }
    Exercise8Test.prototype.test = function () {
        var root = new Kit(1);
        // Create a branch
        var branch = new Kit(2);
        branch.addElement(new KitElement(1, 10));
        branch.addElement(new KitElement(2, 20));
        root.addElement(branch);
        // Adds leaf to the root
        root.addElement(new KitElement(3, 10));
        root.addElement(new KitElement(4, 20));
        console.log(root);
        console.log(root.getPrice());
    };
    return Exercise8Test;
}());
var testExercise8 = new Exercise8Test();
testExercise8.test();
