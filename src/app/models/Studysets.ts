const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Studysets = new Schema({
    id: {type : Number},
    title: {type : String},
    category: {type : String},
    description: {type : String},
    total: {type : Number},
    learned: {type : Number},
    reviews: {type : Number},
});

module.exports = mongoose.module("Studysets", Studysets);