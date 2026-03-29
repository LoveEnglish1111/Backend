const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudysetsSchema = new Schema({
    user_id: {type : String, required : true},
    title: {type : String, required : true},
    category: {type : String, required : true},
    description: {type : String, required : true},
    total: {type : Number, required : true},
    learned: {type : Number, required : true},
    reviews: {type : Number, required : true},
});

module.exports = mongoose.model("Studysets", StudysetsSchema,"studySets");