
// const _ = require('lodash');

const data = {};

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