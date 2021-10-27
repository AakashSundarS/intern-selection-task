const mongoose = require("mongoose");
const { connectConfig } = require("../../config/mongo");

mongoose.connect(connectConfig.url, {});
