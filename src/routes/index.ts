import express, { Response, Request } from 'express';
import log from './../logger/index';
import todoRouter from './todo';

const router = express();

router.get('/', (req: Request, res: Response) => {
	const payload: {
		message: string;
		author: string;
	} = {
		message: 'TODO api v0.1',
		author: 'Md.zahid rahman',
	};
	log.info(payload);
	res.status(200).json(payload);
});

router.use('/todo', todoRouter);

export default router;
