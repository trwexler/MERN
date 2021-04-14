const express = require('express');
const app = express();
const port = 8000;


app.use(express.json());
app.use(express.urlencoded({extended:true}))

//configs and all that data
require('./config/mongoose.config');


//access to routes

require('./routes/movie.routes')(app);



app.listen(port, ()=> console.log(`Running on port: ${port}`));
