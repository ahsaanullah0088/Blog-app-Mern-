import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const mongourl = process.env.MONGO_URL;

const app = express();
mongoose.connect(mongourl).then(()=>{
    console.log('Database is connected');
}).catch((err)=>{
    console.log(err);
});

app.listen(3000 , () =>{
console.log('Server is running on port 3000'); 
})