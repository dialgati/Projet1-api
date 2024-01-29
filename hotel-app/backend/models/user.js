// const mongoose = require("mongoose");

// const EmployeeSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String
// })

// const EmployeeModel = mongoose.model("employees", EmployeeSchema)
// module.exports = EmployeeModel
// const postSchema = mongoose.Schema(
//   {
//     message: {
//       type: String,
//       required: true,
//     },
//     author: {
//       type: String,
//       required: true,
//     },
//     likers: {
//       type: [String],
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// module.exports = mongoose.model("post", postSchema);
const mongoose = require ('mongoose');
const jwt = require ('jsonwebtoken')
const Joi = require('joi');
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
});

userSchema.methods.generateAuthToken =function(){
 const token = jwt.sign({_id:this._id}, process.env.JWTPRIVATEKEY, {expiresin:"7d"});
 return token
}

const User = mongoose.model("user", userSchema);

const validate = (data) => {
    const schema = Joi.object({
      firstName: Joi.string().required().label("First Name"),
      lastName: Joi.string().required().label("Last Name"),
      email: Joi.string().email().required().label("Email"),
      password: passwordComplexity().required().label("Password"),
    });
    return schema.validate(data)
};

module.exports = {User,validate};