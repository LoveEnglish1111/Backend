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
    async login(req, res) {
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

    // [SET]
    async createAccount(req, res) {
        const formData = req.body;
        // Form validation
        if (!formData.fullName.trim()) {
            error(res, 400, "Full name is required", "username");
            return;
        }
        else if (formData.fullName.trim().length < 2) {
            error(res, 400, "Full name must be at least 2 characters", "username");
            return;
        }

        if (!formData.email) {
            error(res, 400, "Email is required", "email");
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            error(res, 400, "Please enter a valid email", "email");
            return;
        }

        if (!formData.password) {
            error(res, 400, "Password is required", "password");
            return;
        }
        if (formData.password.length < 6) {
            error(res, 400, "Password must be at least 6 characters", "password");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            error(res, 400, "Passwords do not match", "password");
            return;
        }

        const UsernameExist = await UserSchema.findOne({"username" : formData.fullName})
        
        if (UsernameExist != null) {
            error(res, 400, "Username already exists", "username");
            return;
        } 

        const EmailExist = await UserSchema.findOne({"email" : formData.email});
        if (EmailExist != null) {
            error(res, 400, "Email already exists", "email");
            return;
        }

        const formattedDate = new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
        const newUser = await UserSchema.create({
            username : formData.fullName,
            email : formData.email,
            password : formData.password,
            avatar : " ",
            role : "user",
            level : "beginner",
            bio : " ",
            joinDate : formattedDate
        })

        return res.json(newUser);
    }
};

module.exports = new authController;