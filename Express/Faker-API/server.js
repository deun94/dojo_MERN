//for the backend

//=======================importing express and faker===================

const express = require("express"); //import express so we can use express features

const app = express();//create an instance of express and stroe it in the variable "app"
const port = 8000; //indicate port number ex) localhost: 8000
const {faker} = require(`@faker-js/faker`);//import faker

//======================================================faker
// const { faker } = require('@faker-js/faker');

// make sure these lines are above any app.get or app.post code blocks. These next two lines help our app to work with post data
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


// req is short for request
// res is short for response

//=============================classes
class User {
    constructor() {
        this._id = faker.random.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
        // this.helper = faker.helpers.userCard();
    }
}
//==================creating instance of a user
const newUser = new User();
console.log(newUser);
//==========================need class address since it has child elements

class Address {
    constructor(){
        this.street = faker.address.streetAddress();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.country();
    }
}
//=====================initiate new instance of address
const newAddress = new Address();


//=========================class of compnay ==============
class Company {
    constructor() {
        this._id = faker.random.number();
        this.companyName = faker.company.companyName();
        //utilize address class
        this.address = newAddress;
    }
}
//============================initiate new instance of company
const newCompany = new Company();
console.log(newCompany);

//===============================routes
// app.get("/api", (req, res) => {
//     res.json({msg: "Our express api server is now sending this over to the browser"});
// });


// app.get("/api/:users/:new", (req, res) => {
//     if(req.params.users === "users"){
//         res.send(`User First Name: ${newUser.firstName}; User Last Name: ${newUser.lastName}`);
//     }
//     if(req.params.users === "companies"){
//         res.send(`Company name: ${newCompany.companyName}`);
//     }
//     if(req.params.users === "user" && req.params.new === "company"){
//         res.send(`User First Name: ${newUser.firstName}; Company name: ${newCompany.companyName}`);
//     }
//     // req.body = newUser;
//     // console.log(req.body);
//     // return res.status(201).json({newUser: newUser});
    
//     });
// // const server = app.listen(8000, () =>
// //     console.log(`Server is locked and loaded on port ${server.address().port}!`)
// );

app.get("/api/users/new", (req, res) => {
    let user = new User();
    res.json({ results: user });
  });
  
  app.get("/api/companies/new", (req, res) => {
    let company = new Company();
    res.json({ results: company });
  });
  
  app.get("/api/user/company", (req, res) => {
    let user = new User();
    let company = new Company();
    res.json({
      user: user,
      company: company,
     });
  });
  
//============================bottom of the file
app.listen( port, () => console.log(`Listening on port : ${port}`));