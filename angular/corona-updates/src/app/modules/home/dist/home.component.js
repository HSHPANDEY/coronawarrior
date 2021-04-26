"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomeComponent = void 0;
var core_1 = require("@angular/core");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.queries = [
            { label: 'Oxygen Cylinders', value: 'OC', active: true },
            { label: 'Hospital Beds', value: 'HB', active: true },
            { label: 'Vaccine', value: 'VC', active: true },
            { label: 'Plasma Donors', value: 'PD', active: true }
        ];
        this.state = 1;
    }
    HomeComponent.prototype.ngOnInit = function () {
        //this.searchQuery();
    };
    HomeComponent.prototype.serachAgain = function () {
        if (this.state == 0) {
            this.state = 1;
        }
    };
    HomeComponent.prototype.searchQuery = function () {
        if (this.state == 1) {
            this.state = 0;
        }
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
