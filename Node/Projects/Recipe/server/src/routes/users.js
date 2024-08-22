import express from "express";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import UserModel from "../models/Users.js";

const router = express.Router();

router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });
    
    if(user){
        return res.send( "User already exists!" )
    } 

    const hashedPass = await bcrypt.hash(password, 10);

    const newUser = new UserModel({ username, password: hashedPass })
    await newUser.save();

    res.send("User Registered Successfully!");
})

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });

    if(!user){
        return res.send("User not found");
    }

    const isPassValid = await bcrypt.compare(password, user.password);

    if(!isPassValid){
        return res.send("Invalid Username or Password");
    }

    const token = jwt.sign({ id: user._id }, "secret");
    res.json({ token, userID: user._id });
})

export { router as userRouter };