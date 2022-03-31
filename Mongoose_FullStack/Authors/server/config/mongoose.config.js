//configuring mongoose and mongo
//connect to mongodb using mongoose
const mongoose = require("mongoose");
const db_name = "author_db"
//importing


//mongo db is the databse and mongoose is the interface that connects
mongoose.connect(`mongodb+srv://root:root@march-db-cluster.dn6up.mongodb.net/${db_name}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));

