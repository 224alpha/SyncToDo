var mongoose = require("../services/connection");


var UserSchema = new mongoose.Schema({
    name : {
        required : true,
        type : String
    },
    email:{
        required : true,
        type : String
    }
},
{ 
    timestamps: {}
});


var User = mongoose.model(`user`,UserSchema);


module.exports = User;
