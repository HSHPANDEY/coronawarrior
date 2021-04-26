"use strict";
var express = require("express");
var app = express();
var PORT = 9000;
app.listen(PORT, function () {
    console.log("server running on port " + PORT);
});
app.get("/getSearchFormConfig", function (req, res, next) {
    console.log("working fine");
});
