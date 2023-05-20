const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const sequelize = require('./database')
const loginRouter = require('./routes/loginRoute')
const reuseRouter = require('./routes/reuseRoute')

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors());


// API ROUTES
app.use('/inventory', reuseRouter)
app.use('/login-homepage', loginRouter)

const PORT = process.env.PORT || 5000

sequelize.sync()
    .then((data)=>{
        console.log("Database Connected");
        app.listen(PORT, ()=>{
            console.log(`Server running on PORT ${PORT}`);
        })
    })
    .catch((err)=>{
        console.error("Error With Syncing the DB");
    })