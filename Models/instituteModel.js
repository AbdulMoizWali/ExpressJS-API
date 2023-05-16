const mongoose = require("mongoose");

const InstituteSchema = new mongoose.Schema({
    text:{
        type:String,
        required: true,
    },
});

const InstituteModel = mongoose.model('institute', InstituteSchema);

module.exports = InstituteModel;