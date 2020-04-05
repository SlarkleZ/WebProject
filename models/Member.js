const mongoose = require('mongoose')

const MemberSchema = new mongoose.Schema({

    username: {
        type: String,
        unique: true,
        required: true
    },
    admin:{
        type: Boolean,
        default: false
    },
    password: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    DoB: {
        type: Date,
        required: true
    },
    gender: {
        //Male or Female
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    tel: {
        type: String,
        default : 'None'
    },
    ProfilePic: {
        //Path to local file
        type: String,
        default : 'None'
    }

})

module.exports = mongoose.model('Member', MemberSchema)