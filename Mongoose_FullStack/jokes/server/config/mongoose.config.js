//configuring mongoose and mongo
//connect to mongodb using mongoose
const mongoose = require("mongoose");
//importing


//mongo db is the databse and mongoose is the interface that connects
mongoose.connect('mongodb+srv://root:root@march-db-cluster.dn6up.mongodb.net/jokes_db?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));

