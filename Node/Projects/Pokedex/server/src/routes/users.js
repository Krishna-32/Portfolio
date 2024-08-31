import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import UserModel from '../model/Users.js';

const router = express.Router();

//? Reister
router.post('/register', async (req, res) => {
    const {username, password} = req.body;
    const user = await UserModel.findOne({username});

    if(user){
        return res.status(409).send('User already exists!')
    }

    if(password.length < 8){
        return res.send('Password must be at least 8 characters long!')
    }

    const hashedPass = await bcrypt.hash(password, 10);
    const newUser = new UserModel({username, password: hashedPass})
    await newUser.save()

    res.send("User registered successfully!")
})

//? Login
router.post('/login', async (req,res) => {
    const {username, password} = req.body;
    const user = await UserModel.findOne({username})

    if(!user){
        return res.send('User not found!')
    }

    const isPassValid = await bcrypt.compare(password, user.password)
    
    if(!isPassValid){
        return res.send('Invalid username or password!')
    }

    const token = jwt.sign({id: user._id}, 'secret')
    res.json({token, username, userID: user._id})
})


export {router as userRouter};