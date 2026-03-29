const User = require("../models/User.ts");
class authController {
    // [GET]
    async index(req, res) {
        try {
            const users = await User.find({});
            res.json(users);
            // res.send("Hello world");
        } catch (err) {
            res.status(500).json(err);
        }
    }
};

module.exports = new authController;