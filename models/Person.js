const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PersonSchema = new Schema({
    name:{
        type: String,
        
        },
    age: Number,
    favoriteFoode:[String]   
   });
   

module.exports =Person=  mongoose.model("persons", PersonSchema);