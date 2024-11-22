import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors';
import router from './routes/userRoutes.js';
import { connectDB } from './db/connectDB.js';
import bodyParser from "body-parser";

const app = express()
const port = process.env.PORT


//cors policy
app.use(cors())

//Json
app.use(express.json())

// Load Routes
app.use('/api/user', router)
app.disable("x-powered-by");


app.listen(port,()=>{
    connectDB();
    console.log(`server listening at port ${process.env.PORT}`)
})
