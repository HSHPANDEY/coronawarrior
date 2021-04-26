"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var _server = '127.0.0.1:27017';
var _database = 'covid';
var Database = /** @class */ (function () {
    function Database(config) {
        this._connect(config.server, config.database);
    }
    Database.prototype._connect = function (server, database) {
        if (server === void 0) { server = _server; }
        if (database === void 0) { database = _database; }
        mongoose_1.default.connect("mongodb://" + server + "/" + database)
            .then(function () {
            console.log("mongo server connected");
        })
            .catch(function (err) {
            console.log("mongoose server connection error");
        });
    };
    return Database;
}());
module.exports = Database;
