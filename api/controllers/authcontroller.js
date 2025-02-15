import User from '../models/usermodel.js';
import bcryptjs from 'bcryptjs';
export const signup = async (req , res)=>{
    const {username  , email , password} = req.body;

    if(!username || !email || !password || username ===''|| password ==='' , email ===''){
        return res.status(400).json({error : 'All fields are required'});
    }
    const hashedPassword = bcryptjs.hashSync(password , 10);
    const newUser = new User({
        username , email , password : hashedPassword,
    });
    try{
        await newUser.save().then((user)=>{
            res.status(200).json({message : 'User created successfully'});
        });
    } catch(err){
        res.status(500).json({message : err.message});
    }
}