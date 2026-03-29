const mongoose = require("mongoose");
import config from "../../config";

async function connect() {
    try {
        await mongoose.connect("mongodb+srv://XcodeHanji:GqjcMPQ5XyKM5EZH@cluster0.wcfrs.mongodb.net/LoveEnglish"); 
        console.log("Connect successfully!!!");
    }
    catch (error) {
        console.log("connect Failure!!!");
    }
}

module.exports = {connect};