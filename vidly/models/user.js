const Joi = require("joi");
const mongoose = require("mongoose");

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 55,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 55,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
});

function validateUser(user) {
  const schema = {
    name: Joi.string().min(5).max(55).required(),
    email: Joi.string().min(5).max(55).required().email(),
    password: Joi.string().min(5).max(255).required(),
  };

  return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;
