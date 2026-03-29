const UserSchema = require("../models/User");

class authController {
    // [GET]
    async index(req, res) {
        const user = await UserSchema.find({});
        res.send(user);
    }
};

module.exports = new authController;