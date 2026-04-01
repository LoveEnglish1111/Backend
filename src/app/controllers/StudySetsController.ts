const StudysetsSchema = require("../models/Studysets");
import { Request, Response } from 'express';

class StudySetsController {
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
};

module.exports = new StudySetsController;