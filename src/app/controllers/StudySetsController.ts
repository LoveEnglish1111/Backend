const StudysetsSchema = require("../models/Studysets");
import { Request, Response } from 'express';

class StudySetsController {
    // [POST]
    async createStudySet(req: Request, res: Response) {
        const newStudySet = req.body.newStudyData;
        const total = req.body.total;
        const user_id = req.body.user_id;

        newStudySet.total = total;
        newStudySet.learned = 0;
        newStudySet.reviews = 0;
        newStudySet.user_id = user_id;
        const data = await StudysetsSchema.create(newStudySet);
        res.send(data);
    }

    // [GET]
    async getStudySet(req : Request, res : Response) {
        const user_id = req.query.user_id;
        const Data = await StudysetsSchema.find({user_id : user_id});
        res.send(Data);
    }

    async updateStudySet(req: Request, res: Response) {
        const newStudySet = req.body;
        const result = await StudysetsSchema.updateOne(
            {_id : newStudySet._id},
            newStudySet
        )
        res.send(result);
    }

    async deleteStudySet(req: Request, res: Response) {
        const flashCard_id = req.query.flashCard_id;
        await StudysetsSchema.deleteOne({_id : flashCard_id})
        res.send("Success");
    }
};

module.exports = new StudySetsController;