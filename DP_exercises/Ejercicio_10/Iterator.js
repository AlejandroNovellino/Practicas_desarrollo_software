var MyForwardIterator = /** @class */ (function () {
    function MyForwardIterator(collection) {
        this.collection = collection;
        this.currentIndex = 0;
    }
    MyForwardIterator.prototype.hasMore = function () {
        return this.currentIndex >= this.collection.getElements().length
            ? false
            : true;
    };
    MyForwardIterator.prototype.getNext = function () {
        this.currentIndex = this.currentIndex + 1;
    };
    MyForwardIterator.prototype.getCurrentElement = function () {
        return this.collection.getElements()[this.currentIndex];
    };
    MyForwardIterator.prototype.getFirst = function () {
        return this.collection.getElements()[0];
    };
    return MyForwardIterator;
}());
var MyReverseIterator = /** @class */ (function () {
    function MyReverseIterator(collection) {
        this.collection = collection;
        this.currentIndex = collection.getElements().length - 1;
    }
    MyReverseIterator.prototype.hasMore = function () {
        return this.currentIndex < 0 ? false : true;
    };
    MyReverseIterator.prototype.getNext = function () {
        this.currentIndex = this.currentIndex - 1;
    };
    MyReverseIterator.prototype.getCurrentElement = function () {
        return this.collection.getElements()[this.currentIndex];
    };
    MyReverseIterator.prototype.getFirst = function () {
        return this.collection.getElements()[this.currentIndex];
    };
    return MyReverseIterator;
}());
var Vector = /** @class */ (function () {
    function Vector() {
        this.elements = new Array();
    }
    Vector.prototype.createForwardIterator = function () {
        return new MyForwardIterator(this);
    };
    Vector.prototype.createReverseIterator = function () {
        return new MyReverseIterator(this);
    };
    Vector.prototype.getElements = function () {
        return this.elements;
    };
    return Vector;
}());
//-----------------------------------------------------
var Test = /** @class */ (function () {
    function Test() {
        this.collection = new Vector();
    }
    Test.prototype.test = function () {
        this.collection.getElements().push("Hello");
        this.collection.getElements().push("my");
        this.collection.getElements().push("darling");
        // Forward iterator test
        console.log("\nTesting forward iterator:");
        var forwardIterator = this.collection.createForwardIterator();
        for (forwardIterator.getFirst(); forwardIterator.hasMore(); forwardIterator.getNext()) {
            console.log(forwardIterator.getCurrentElement());
        }
        // It functions too as
        /*
        for (; forwardIterator.hasMore(); forwardIterator.getNext()) {
            console.log(forwardIterator.getCurrentElement());
        }
        */
        // Reverse iterator test
        console.log("\nTesting reverse iterator:");
        var reverseIterator = this.collection.createReverseIterator();
        for (reverseIterator.getFirst(); reverseIterator.hasMore(); reverseIterator.getNext()) {
            console.log(reverseIterator.getCurrentElement());
        }
    };
    return Test;
}());
var test = new Test();
test.test();
