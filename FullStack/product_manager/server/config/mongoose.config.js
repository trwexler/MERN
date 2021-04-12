const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/productManagementDB',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}
).then(()=>{console.log('everything good')})
.catch((err)=>console.log("Something went wrong with the db", err));







































// const mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost/productManagementDB", {
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
// })
//     .then( () => console.log("Established a connection to the database"))
//     .catch( () => console.log("Something went wrong when connecting to the database", err));