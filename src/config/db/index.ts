const mongoose = require("mongoose");
import config from "../../config";

async function connect() {
    try {
        await mongoose.connect(config.mongoURI); 
        console.log("Connect successfully!!!");
    }
    catch (error) {
        console.log("connect Failure!!!");
    }
}

module.exports = {connect};