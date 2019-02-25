const mongoose = require("mongoose");
// const Bcrypt = require('bcrypt')


const nameSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    imageURL: String,
    socialID: String
});

const User = mongoose.model("User", nameSchema);

const insertMany = (data) => {
    return User.insertMany(data);
};

module.exports = {
    user: User,
    insertMany : insertMany
};