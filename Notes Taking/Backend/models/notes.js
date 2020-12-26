const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    title:{
        type:String,
        required:[true, 'Title is required']
    },
    details:{
        type:String,
        required:[true, 'Details is required']
    },
    timeDetail:{
        type:String,
        required:[true, 'Time Details is required']
    }
});

const Notes = mongoose.model('notes', NoteSchema);
module.exports = Notes;