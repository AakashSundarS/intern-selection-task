const connectConfig = {
    url: process.env.MONGO_URI || "mongodb://127.0.0.1:27017"
};


module.exports = { connectConfig };