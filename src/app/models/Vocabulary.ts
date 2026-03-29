const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VocabularySchema = new Schema({
    flashCard_id : {type : String, required : true},
    Vocabulary: [
        {en: String, vn : String}
    ]
});

module.exports = mongoose.model("Vocabulary", VocabularySchema, "Vocabulary");