import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import UserModel from '../model/Users.js';

const router = express.Router();



export {router as userRouter};