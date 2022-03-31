const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema(
    {
    name: { 
        type: String,
        minlength: [3, "name of the author must be at leat three characters long!!"]},
    title: {type: String}
}, 
{ timestamps: true }
);
const Author =  mongoose.model('Author', AuthorSchema);


//export it so files can communicate with this file
module.exports = Author;


