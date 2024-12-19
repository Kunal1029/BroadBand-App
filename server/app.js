const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes.js'); 
const adminRoutes = require('./routes/adminRoutes.js'); 
const  connectDB  = require('./db/connectDB.js'); 

const app = express()
const port = process.env.PORT || 3000
 

//cors policy
app.use(cors())

//Json
app.use(express.json())

// Load Routes
app.use('/api/user', userRoutes)
app.use('/admin', adminRoutes)

app.disable("x-powered-by");

app.get('/',(req,res)=>{
    res.send("Heelo")
})


app.listen(port,()=>{
    connectDB();
    console.log(`server listening at port ${process.env.PORT}`)
})
