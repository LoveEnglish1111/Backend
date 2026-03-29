const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const learningHistorysSchema = new Schema({
    user_id : {type : String, required: true},
    date : {type : String, required: true},
    items : {type : Number, required: true},
    hours : {type : Number, required: true}
});

const achivementsSchema = new Schema({
    user_id : {type : String, required: true},
    name : {type : String, required: true},
    type : {type : String, required: true},
    description : {type : String, required: true},
    unlocked : {type : Boolean, required: true},
    progress : {type : Number, required: true}
});

const LearningHistory  = mongoose.model("learningHistorys", learningHistorysSchema, "learningHistorys");
const Achievement = mongoose.model("achievements",achivementsSchema,"achievements");

module.exports = {
    LearningHistory, Achievement
}