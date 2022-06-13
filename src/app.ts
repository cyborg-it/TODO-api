import express, {Application, Request, Response} from 'express';
import mongoose, {Mongoose} from 'mongoose'
import indexRouter from './routes/index'
const app: Application = express();
const port: number = 3002;

app.use('/api', indexRouter);

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.listen(port, async () => {
    const connection: Mongoose = await mongoose.connect('mongodb://localhost:27017/todo_db');
    if(connection) console.log('database connected ...')
    console.log(`server listening on port ${port}`)
})