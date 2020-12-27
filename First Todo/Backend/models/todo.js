const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    task:{
        type:String,
        required:[true, 'Task is required']
    }
    // ,
    // status:{
    //     type:String,
    //     required:[true, 'Status is required']
    // }
});

const Todo = mongoose.model('todo', TodoSchema);
module.exports = Todo;