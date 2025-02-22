const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{type: 'string', required: true},
    email:{type: 'string', required: true},
    password:{type: 'string', required: true},
    role:{type: 'string', required: true, enum: ['admin', 'user']}
})

const userModel = mongoose.model('user', userSchema)
module.exports = userModel