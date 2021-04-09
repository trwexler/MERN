const express = require("express");
const mongoose = require("mongoose");

// start our server / create the express app object
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connecting to the mongo DB database for this app
const db_name = "student";

mongoose.connect("mongodb://localhost/" + db_name, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Successfully connected with the " + db_name + " database."))
  .catch((err) => {
    console.log('An error occurred while connecting with the ' + db_name + ' database.');
    console.log(err);
  });

// Setup a collection to store documents
// Step 1:  Create a schema to be a template for documents
const StudentSchema = new mongoose.Schema(
  // define the fields in the document that we expect
  //    both optional AND required fields
  {
    name: String,
    age: Number,
    email: String,
  },
  // options on how data is stored
  {
    timestamps: true,
  }
)

// Step 2: instantiate the model for the routes to use the DB
const modelName = "Student";

// modelname is used for the collection name inside of the database
//    The modelname is changed to be lowercase and plural for the collection name
const Student = mongoose.model(modelName, StudentSchema);


// routes go here
app.get("/", (request, response) => {
  return response.send("Hello, world!");
});

// create a student document



// get all of the student documents
app.get("/students", (req, res) => {
  // an empty object will return ALL documents in the collection
  Student.find({})
    .then( (allStudentDocs) => {
      console.log(allStudentDocs);
      res.json(allStudentDocs);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    })
})

// This MUST be the last line of code in the file - no routes below this line
app.listen(8000, () =>
  console.log("You have successfully connected to port 8000"))