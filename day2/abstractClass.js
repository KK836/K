"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractNamespace;
(function (AbstractNamespace) {
    var Vehicle = /** @class */ (function () {
        function Vehicle(wheelCount) {
            this.wheelCount = wheelCount;
        }
        return Vehicle;
    }());
    var Motocycle = /** @class */ (function (_super) {
        __extends(Motocycle, _super);
        function Motocycle() {
            return _super.call(this, 2) || this;
        }
        Motocycle.prototype.updateWheelCount = function (newWheelCount) {
            this.wheelCount = newWheelCount;
            console.log("Automobile has ".concat(this.wheelCount));
        };
        Motocycle.prototype.showNumberOfWheels = function () {
            console.log("Automobile moved ".concat(this.wheelCount));
            console.log("AutoMobile " + this.wheelCount + "moved");
        };
        return Motocycle;
    }(Vehicle));
    var motorCycle = new Motocycle();
    motorCycle.updateWheelCount(6);
    motorCycle.showNumberOfWheels(); //expect moved 6
})(AbstractNamespace || (AbstractNamespace = {}));
