const express = require("express");
const app = express();
const port = 8000;

//1) tell the server to configure the mongodb by going into the right folder path
//you can do this for everything for modularization since this is the main file

require("./server/config/mongoose.config")


//backend default

// app.get("/api/hello", (req,res) =>{
//     res.json({msg:"Hello World"})
// })

// //2_ tell the server to get the routes file

//3. for post requrest

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
//for the routes
require("./server/routes/joke.routes")(app)
// app.use(express.json(), express.urlencoded({ extended: true }));
    
// const AllMyJokeRoutes = require("./server/routes/joke.routes");
// AllMyJokeRoutes(app);




app.listen( port, () => console.log(`Listening on port: ${port}`));
