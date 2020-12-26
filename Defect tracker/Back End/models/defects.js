const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const defectSchema = new Schema({
    category:{
        type:String,
        required:[true, 'Category is required']
    },
    description:{
        type:String,
        required:[true, 'Description is required']
    },
    priority:{
        type:String,
        required:[true, 'Priority is required']
    },
    status:{
        type:String,
        required:[true, 'Status is required']
    }
});

const Defect = mongoose.model('defect', defectSchema);
module.exports = Defect;