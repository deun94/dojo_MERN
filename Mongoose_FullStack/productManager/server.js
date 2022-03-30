const express = require('express');
const app = express();
const port = 8000;
    
//cors import for the backend to talk to the front end and make it the full stack

const cors = require("cors")

//post request
app.use( express.json());
app.use(express.urlencoded({extended: true}));

//use cors
app.use(cors());

//mongoose connect
require("./server/config/mongoose.config");
//enable routes
require("./server/routes/product.routes")(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );
