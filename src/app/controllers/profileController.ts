// const UserSchema = require("../models/User");
const { LearningHistory, Achievement } = require("../models/profile");
import { Response } from 'express';

class profileController {
    // [GET]
    async index(req : Response, res) {
        const user_id = req.query.user_id;
        const learningHistoryData = await LearningHistory.find({user_id : user_id});
        const achievementData = await Achievement.find({user_id : user_id});
        return res.send({learningHistoryData, achievementData});
    }
};

module.exports = new profileController;