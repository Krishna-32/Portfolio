import express from 'express';
import mongoose from 'mongoose';
import schema from "./models/schema.js"

const app = express()
const port = 3001
mongoose.connect('mongodb://127.0.0.1:27017/test');

app.set('view engine', 'ejs')

const random = (arr) => {
    let rno = Math.floor(Math.random() * arr.length);
    return arr[rno];
}

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/generate', async (req, res) => {

    await schema.deleteMany({})

    let rNames = ['Fyura', 'Hinata', 'Alice', 'Bob', 'Charlie', 'Diana', 'Eve', 'Frank', 'Grace', 'Henry'];
    const genders = ['Male', 'Female']


    for (let index = 0; index < 15; index++) {
        let create = await schema.create({
            name: random(rNames),
            age: Math.floor(Math.random() * 20),
            gender: genders[Math.floor(Math.random() * genders.length)],
            hasPP: Math.random() > 0.5
        })

        console.log(schema);
        
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})
