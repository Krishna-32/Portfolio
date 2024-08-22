import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import a from './logic.js';
import ejs from 'ejs'

const app = express();
const port = 3001;
const fn = a(5);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render("index", { number : 5, table : fn});
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
