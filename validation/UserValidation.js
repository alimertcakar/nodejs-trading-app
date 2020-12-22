const Joi = require("joi");
const User = require("../models/UserModel");

const UserSchema = Joi.object().keys({
    username: Joi.string()
        .alphanum()
        .min(5)
        .max(25)
        .required(),
    password: Joi.string()
        .alphanum()
        .min(8)
        .max(32)
        .required()
})


module.exports = UserSchema;