const express = require("express");
const app = express();

const body = require("body-parser");
app.use(body.json());

const port = 5000;
app.listen(port, (req, res) => {
  console.log(`Server Start PORT:${port}`);
});

app.use("/api", require("./routes/router"));
