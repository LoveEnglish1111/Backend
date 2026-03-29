// const StudysetsSchema = require("../models/Studysets");
const vocabularySchema = require("../models/Vocabulary")
import { Response } from 'express';

class vocabularyController {
    // [GET]
    async index(req : Response, res) {
        const flashCard_id = req.query.flashCard_id;
        const Data = await vocabularySchema.find({flashCard_id : flashCard_id});
        res.send(Data);
    }
};

module.exports = new vocabularyController;