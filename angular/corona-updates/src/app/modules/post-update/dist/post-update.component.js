"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PostUpdateComponent = void 0;
var core_1 = require("@angular/core");
var PostUpdateComponent = /** @class */ (function () {
    function PostUpdateComponent() {
        this.queries = [
            { label: 'Oxygen Cylinders', value: 'OC', active: true },
            { label: 'Hospital Beds', value: 'HB', active: true },
            { label: 'Vaccine', value: 'VC', active: true },
            { label: 'Plasma Donors', value: 'PD', active: true }
        ];
    }
    PostUpdateComponent.prototype.ngOnInit = function () {
    };
    PostUpdateComponent.prototype.postUpdate = function () {
    };
    PostUpdateComponent = __decorate([
        core_1.Component({
            selector: 'app-post-update',
            templateUrl: './post-update.component.html',
            styleUrls: ['./post-update.component.scss']
        })
    ], PostUpdateComponent);
    return PostUpdateComponent;
}());
exports.PostUpdateComponent = PostUpdateComponent;
