import mongoose from 'mongoose';
import config from './../config/default';
import log from './../logger';

function connect() {
	const dbUrl: string = config.dbUri;

	return mongoose
		.connect(dbUrl)
		.then(() => log.info('Database connected'))
		.catch(error => log.error('Database error', error));
}

export default connect;
