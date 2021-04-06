const express = require("express");
const port = 8000;

var faker = require('faker');
const app = express();

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

var zipCode = faker.address.zipCode();
var streetAddress = faker.address.streetAddress();
var city = faker.address.city();
var state = faker.address.state();
var country = faker.address.country();


class Companies {
    constructor() {
        this.companyName = faker.company.companyName();
        this.department = faker.commerce.department();
        this.address = {
            // this.zipCode: zipCode,  way to do this without individually declaring variables? Nesting...
            streetAddress,
            city,
            state,
            zipCode,
            country
        };
    }
}


app.get("/api/users/new", (request, response) => {
  response.json(new Users())
});

app.get("/api/companies/new", (request, response) => {
    response.json(new Companies())
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