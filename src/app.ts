import express, { Application, Request, Response } from 'express';
import mongoose, { Mongoose } from 'mongoose';
import indexRouter from './routes/index';
import config from './config/default';
const morgan = require('morgan');
const app: Application = express();
const port: number = config.port;

app.use(morgan('dev'));
app.use('/api', indexRouter);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, async () => {
	const connection: Mongoose = await mongoose.connect(config.dbUri);
	if (connection) console.log('database connected ...');
	console.log(`server listening on port ${port}`);
});
