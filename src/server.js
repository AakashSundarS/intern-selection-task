const express = require("express");
const formRouter = require("./routes/form");

require("./db/connect");

const app = express();

app.use(express.json());
app.use("/form", formRouter);

module.exports = app;
