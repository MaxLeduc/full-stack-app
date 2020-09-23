const express = require("express");
const app = express();
const port = 3000;

app.use("/prime-number", require("./prime-number"));

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
