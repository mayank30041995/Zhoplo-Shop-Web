const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv/config');
 
app.use(cors());
app.options('*', cors())


//middleware
app.use(express.json());
app.use(morgan('tiny'));


//Routes
const categoriesRoutes = require('./routes/categories');

const api = process.env.API_URL;

app.use(`${api}/categories`, categoriesRoutes);

//Database
mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    dbName: 'zhoplo'
})
.then(()=>{
    console.log('Database Connection is ready...')
})
.catch((err)=> {
    console.log(err);
})

//Server
app.listen(3000, ()=>{

    console.log('server is running http://localhost:3000');
})