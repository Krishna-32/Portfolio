import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { userRouter } from './routes/users.js';

const app = express()
const port = 3001
mongoose.connect('mongodb://localhost:27017/pokedex')

app.use(express.json())
app.use(cors())
app.use('/auth', userRouter)

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))