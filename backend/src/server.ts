const express = require("express");
const cors = require("cors");

const PrimeNumber = require("./prime-number");

const app = express();
const port = 8080;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use("/prime-number", cors(), PrimeNumber);

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
