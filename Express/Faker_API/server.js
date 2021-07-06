const express = require("express");
var faker = require('faker');
const app = express();
const port = 8000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


class Users {
    constructor() {
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

// var zipCode = faker.address.zipCode();
// var streetAddress = faker.address.streetAddress();
// var city = faker.address.city();
// var state = faker.address.state();
// var country = faker.address.country();


class Companies {
    constructor() {
        this.companyName = faker.company.companyName();
        this.department = faker.commerce.department();
        this.address = {
            // this.zipCode: zipCode,  way to do this without individually declaring variables? Nesting...
            streetAddress:faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        };
    }
}

// ES6
// const createUser = () => { 
//   return {
//     firstName: faker.name.firstName(),
//     lastName: faker.name.lastName(),
//     phoneNumber: faker.phone.phoneNumber(),
//     email: faker.internet.email(),
//     password: faker.internet.password()
//   }
// }


// const createCompany = () => {
//   return {
//     companyName: faker.company.companyName(),
//     department: faker.commerce.department(),
//     // using an object to group all of the address data together
//     //    We can create and group whatever data we want using faker
//     address: {
//       streetAddress: faker.address.streetAddress(),
//       city: faker.address.city(),
//       state: faker.address.state(),
//       zip: faker.address.zipCode(),
//       country: faker.address.country(),
//     }
//   }
// }


app.get("/api/users/new", (request, response) => {
  response.json(new Users())
});

app.get("/api/companies/new", (request, response) => {
    response.json(new Companies());
    console.log("hello"); //nothing here... how many responses can we fit? Doesn't work inside of res.json either?
  });

  app.get("/api/company/new", (request, response) => {
    response.json([
      new Companies(),
      new Users(),
    ]);
  });


app.listen(8000, () => {
  console.log("You have successfully connected on port 8000");
});