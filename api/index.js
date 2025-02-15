import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/userroute.js';
import authRoute from './routes/authroute.js'
dotenv.config();
const mongourl = process.env.MONGO_URL;

const app = express();
mongoose.connect(mongourl).then(()=>{
    console.log('Database is connected');
}).catch((err)=>{
    console.log(err);
});
app.use(express.json());


app.listen(3000 , () =>{
console.log('Server is running on port 3000'); 
})

app.use('/api/user' , userRoute);
app.use('/api/auth' , authRoute);