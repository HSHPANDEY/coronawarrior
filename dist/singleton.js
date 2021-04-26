"use strict";
// const _ = require('lodash');
var data = {};
function addToSingleton(key, value) {
    data[key] = value;
    return value;
}
function getSingleton(key) {
    return data[key];
}
module.exports = {
    addToSingleton: addToSingleton,
    getSingleton: getSingleton
};
