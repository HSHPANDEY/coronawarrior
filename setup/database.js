const mongoose = require('mongoose');

const _server = '127.0.0.1:27017';
const _database = 'covid';

class Database {
  constructor(config = {}) {
    const ENV = process.env.NODE_ENV;
    
    this._connect(config.server, config.database);
  }

  _connect (server = _server, database = _database) {
    mongoose.connect(`mongodb://${server}/${database}`)
    .then(() => {
      console.log("mongo server connected");
    })
    .catch(err => {
      console.log("mongoose server connection error");
    })
  }
}

module.exports = new Database();