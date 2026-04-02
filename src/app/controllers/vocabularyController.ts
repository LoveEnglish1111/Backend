// const StudysetsSchema = require("../models/Studysets");
const vocabularySchema = require("../models/Vocabulary")
import { Response, Request } from 'express';

class vocabularyController {
    // [POST]
    async createVocabulary(req: Request, res: Response) {
        const flashCard_id = req.query.flashCard_id;
        const newVocabularyData = req.body.newVocabularyData;
        const total = req.body.total;
        const MarkLearned = "0".repeat(total);
        const data = await vocabularySchema.create({
            flashCard_id : flashCard_id,
            Vocabulary : newVocabularyData,
            MarkLearned : MarkLearned
        });

        res.send(data);
    }
    
    // [GET]
    async getVocabulary(req: Request, res: Response) {
        const flashCard_id = req.query.flashCard_id;
        const Data = await vocabularySchema.findOne({flashCard_id : flashCard_id});
        res.send(Data);
    }

    // [PUT]
    async updateVocabulary(req: Request, res: Response) {
        const newVocabularyData = req.body;
        console.log(newVocabularyData);
        const result = await vocabularySchema.updateOne(
            {_id : newVocabularyData._id},
            newVocabularyData
        )
        res.send(result);
    }

    // [DELETE]
    async deleteVocabulary(req: Request, res: Response) {
        const flashCard_id = req.query.flashCard_id;
        await vocabularySchema.deleteOne({
            flashCard_id : flashCard_id
        })
        res.send("Success");
    }
};

module.exports = new vocabularyController;