const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

//configs and all that data
require('./config/mongoose.config');


//access to routes

require('./routes/movie.routes')(app);



app.listen(port, ()=> console.log(`Running on port: ${port}`));
