const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const port = 8000;


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());



require('./routes/product.routes')(app);

require('./config/mongoose.config')




app.listen(port, ()=> console.log(`Running on port: ${port}`));




































// const express = require('express');
// const cors = require('cors');
// const app = express();
// const port = 8000;


// //from config
// require('./config/mongoose.config');


// //need cors to allow multi-server requests
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));

// //needed from routes:
// require('./routes/product.routes')(app);
    


// app.listen(port, () => console.log(`Listening on port: ${port}`) );
