const UserSchema = require("../models/User");
import { Response } from 'express';

function error(res : Response, statusCode : number, message : string, At : string) {
    res.status(statusCode);
    res.send({
        statusCode : statusCode,
        message : message,
        At : At
    });
}

class authController {
    // [GET]
    async index(req, res) {
        const isValidEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
        const Email : string = req.query.email;
        const Password : string = req.query.password;
        
        if (!Email.trim()) {
            error(res, 400, "Email is required", "Email");
            return;
        } else if (!isValidEmail(Email)) {
            error(res, 400, "Please enter a valid email address", "Email");
            return;
        }

        if (!Password) {
            error(res, 400, "Password is required", "Password");
            return;
        } else if (Password.length < 6) {
            error(res, 400, "Password must be at least 6 characters", "Password");
            return;
        }

        const user = await UserSchema.findOne({"email" : Email, "password" : Password});
        if (user == null) {
            error(res, 400, "Incorrect Email or Password","Both");
            return;
        }

        return res.send(user);
    }
};

module.exports = new authController;