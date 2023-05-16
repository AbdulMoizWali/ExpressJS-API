const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    text:{
        type:String,
        required: true,
    },
});

const StudentModel = mongoose.model('student', StudentSchema);

module.exports = StudentModel;