const mongoose = require('mongoose');
const validator = require('validator');

// Define the user schema
const userSchema = new mongoose.Schema({
    name: String ,
    email :{
        type: String,
        required: true
    }

});

// Create the User model
const User1 = mongoose.model('User', userSchema);

// Export the User model using CommonJS syntax
module.exports = User1;

