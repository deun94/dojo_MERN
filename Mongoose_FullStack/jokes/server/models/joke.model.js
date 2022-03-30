const mongoose = require('mongoose');

//create a "table" or collection in mongo db 
const JokeSchema = new mongoose.Schema(
    {
        setup: {
            type: String, 
            required : [true, "Setup is required for the joke!"],
            minlength: [10, "Setup must be at least 10 characters long!"]
        },
        punchline: {
            type: String, 
            required : [true, "punchline is required for the joke!"],
            minlength: [2, "punchline must be at least 2 characters long!"]
        }
    },
    {timestamps: true}

    //this is like created AT and updated AT
);

//connecting the collection above to be forming the table called joke in the databse
const Joke = mongoose.model('Joke', JokeSchema);


//export it so files can communicate with this file
module.exports = Joke;
