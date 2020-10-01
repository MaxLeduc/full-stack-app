"use strict";
var express = require("express");
var PrimeNumber = require("./prime-number");
var app = express();
var port = 8080;
app.use("/prime-number", PrimeNumber);
app.listen(port, function () {
    console.log("App listening on http://localhost:" + port);
});
//# sourceMappingURL=server.js.map