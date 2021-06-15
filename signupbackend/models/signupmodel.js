const mongoose = require('mongoose');

const signedUpTemplate=new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
    
})

module.exports = mongoose.model('usersTable',signedUpTemplate);

