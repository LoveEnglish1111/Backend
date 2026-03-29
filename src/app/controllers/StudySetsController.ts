const StudysetsSchema = require("../models/Studysets");
import { Response } from 'express';

class StudySetsController {
    // [GET]
    async index(req : Response, res) {
        const user_id = req.query.user_id;
        const Data = await StudysetsSchema.find({user_id : user_id});
        res.send(Data);
    }
};

module.exports = new StudySetsController;