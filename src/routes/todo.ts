import express, { Request, Response } from 'express';
import todoService from '../services/todo';
import log from './../logger';
import { responseHandler } from './../utils/responseHandler';
const router = express.Router();

router.get('/all', (req: Request, res: Response) => {
	res.json({
		message: "all TODO's",
	});
});

router.post('/create', async (req: Request, res: Response) => {
	try {
		const response = await todoService.createTodo(req.body);
		log.info('TODO created successfully ...');
		if (response) res.status(201).json(responseHandler(201, 'create TODO api', response));
	} catch (error) {
		log.error(error);
		res.status(400).json(responseHandler(400, 'something went wrong', error));
	}
});

router.get('/find-all', async (req: Request, res: Response) => {
	try {
		const response = await todoService.findTodos();
		log.info('TODO all data ...');
		if (response) res.status(200).json(responseHandler(200, 'all list TODO api', response));
	} catch (error) {
		log.error(error);
		res.status(400).json(responseHandler(400, 'something went wrong', error));
	}
})

router.get('/find/:id', async (req: Request, res: Response) => {
	const {id} = req.params;
	try {
		const response = await todoService.findOneTodos(id);
		log.info('TODO single data ...');
		if (response) res.status(200).json(responseHandler(200, 'single TODO api', response));
	} catch (error) {
		log.error(error);
		res.status(400).json(responseHandler(400, 'something went wrong', error));
	}
})


router.patch('/update', async (req: Request, res: Response) => {
	const {id} = req.params;
	try {
		const response = await todoService.updateTodo(id, req.body);
		log.info('TODO all data ...');
		if (response) res.status(200).json(responseHandler(200, 'all list TODO api', response));
	} catch (error) {
		log.error(error);
		res.status(400).json(responseHandler(400, 'something went wrong', error));
	}
})


router.delete('/delete', async (req: Request, res: Response) => {
	const {id} = req.params;
	try {
		const response = await todoService.deleteTodo(id);
		log.info('TODO delete data ...');
		if (response) res.status(200).json(responseHandler(200, 'delete TODO api', response));
	} catch (error) {
		log.error(error);
		res.status(400).json(responseHandler(400, 'something went wrong', error));
	}
})

export default router;
