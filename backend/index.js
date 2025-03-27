import express from 'express'; // if we use import then package.json we will use  below "main":"index.js"   "type":"module"
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import route from './routes/userRoute.js';

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 3000;
const URL = process.env.MONGOURL;

mongoose.connect(URL).then(()=>{
    console.log("Db connected successfully");

    app.listen(PORT,()=>{
        console.log(`Server is running on port: ${PORT}`);
    })
}).catch(error =>console.log(error));

//Routes passs
app.use("/api",route)


