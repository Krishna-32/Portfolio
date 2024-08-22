import express from 'express';
import test2 from './test2.js';

const result = test2();
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send(`Hello World31!,\n result : ${result}`);
});

app.post('/', (req, res) => {
  res.send(`Hey this is POST`);
});


app.listen(port, () => {
  console.log(`Port : ${port}`);
});
