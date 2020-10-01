const express = require("express");

const PrimeNumber = require("./prime-number");

const app = express();
const port = 8080;

app.use("/prime-number", PrimeNumber);

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
