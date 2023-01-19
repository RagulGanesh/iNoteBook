const mongoose = require('mongoose');

const NotesSchema = new Schema({
    title : {
        title: String,
        required : true,
    },
    description : {
        title: String,
        required : true,
    },
    tag : {
        title: String,
        default : "General",
    },
    date : {
        title: Date,
        default : Date.now,
    },
});

module.exports = mongoose.model('notes',NotesSchema)