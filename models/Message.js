const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// i think it would be better if we had a seperate module for chapters and in chapter we take the order and the id of course
const MessageShema = new mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
      name: {
        type: String, //filename
      },
      email: {
        type: String, //filename
      },
      message: {
        type: String, //filename
      },
    
    });
let Message = mongoose.model("Message", MessageShema);
module.exports = Message;
