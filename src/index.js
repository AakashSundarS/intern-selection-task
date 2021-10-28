// load env variables from .env file
require("dotenv").config();

const app = require("./server.js");

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("listening at ", PORT);
});
