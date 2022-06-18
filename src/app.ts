import express, { Application, Request, Response } from 'express';
import indexRouter from './routes/index';
import config from './config/default';
import connect from './database/connect';
import log from './logger';
const morgan = require('morgan');
const app: Application = express();
const port: number = config.port;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.use('/api', indexRouter);
app.listen(port, async () => {
	log.info(`server listening on port ${port}`);
	connect();
});

export default app
