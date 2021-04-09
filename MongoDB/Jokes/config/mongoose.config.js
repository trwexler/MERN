const mongoose = require("mongoose");

const db_name = "joke";

mongoose.connect("mongodb://localhost:/" + db_name, {
  useNewUrlParser:true,
  useUnifiedTopology:true,
})
.then(()=> console.log("Successfully connected with the " + db_name + " database."))
.catch((err)=>{
  console.log("An error has occured while connecting to the database named" + db_name);
  console.log(err);
});

