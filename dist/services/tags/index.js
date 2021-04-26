"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getAllTags = function () {
    var tagsConfig = [
        {
            "key": "icu_bed",
            "name": "ICU-Beds"
        }, {
            "key": "plasma_donors",
            "name": "Plasma Donors"
        }, {
            "key": "oxygen_cylinder",
            "name": "Oxygen Cylinder"
        }, {
            "key": "oxygen_refill",
            "name": "Oxygen Refill"
        }
    ];
    return tagsConfig;
};
exports.default = {
    getAllTags: getAllTags
};
