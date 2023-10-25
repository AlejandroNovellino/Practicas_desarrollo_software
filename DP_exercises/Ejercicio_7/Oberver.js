var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Subject = /** @class */ (function () {
    function Subject() {
        this.observers = new Array();
    }
    Subject.prototype.insert = function (o) {
        this.observers.push(o);
    };
    Subject.prototype.notify = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var o = _a[_i];
            o.update(this);
        }
    };
    return Subject;
}());
var Clock = /** @class */ (function (_super) {
    __extends(Clock, _super);
    function Clock(time) {
        var _this = _super.call(this) || this;
        _this.time = time;
        return _this;
    }
    Clock.prototype.setState = function (time) {
        this.time = time;
        this.notify();
    };
    Clock.prototype.getState = function () {
        return this.time;
    };
    return Clock;
}(Subject));
var Time_in = /** @class */ (function () {
    function Time_in(time, time_differ, place) {
        this.time = time + time_differ;
        this.time_differ = time_differ;
        this.place = place;
    }
    Time_in.prototype.update = function (context) {
        this.time = context.time + this.time_differ;
    };
    return Time_in;
}());
//-----------------------------------
var App = /** @class */ (function () {
    function App() {
        this.clock = new Clock(12);
        this.times_in = new Array();
    }
    App.prototype.test = function () {
        var new_time_in = new Time_in(24, 12, "France");
        this.times_in.push(new_time_in);
        this.clock.insert(new_time_in);
        var new_time_in_2 = new Time_in(24, -12, "Madrid");
        this.times_in.push(new_time_in_2);
        this.clock.insert(new_time_in_2);
        console.log("Clock state:");
        console.log(this.clock);
        console.log("Times_in states:");
        console.log(this.times_in);
        console.log("\nUpdating clock state\n");
        this.clock.setState(64);
        console.log("Clock state:");
        console.log(this.clock);
        console.log("Times_in states:");
        console.log(this.times_in);
    };
    return App;
}());
var app = new App();
app.test();
