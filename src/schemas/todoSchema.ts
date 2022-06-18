import { object, string, bool } from 'yup';

const payload = {
	body: object({
		task: string().required('task name is required'),
		done: bool().required('is completed or not flag is required'),
	}),
};

export const createTodoSchama = object({
	...payload,
});
