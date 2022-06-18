import mongoose from 'mongoose';

export interface TodoDocument extends mongoose.Document {
	task: string;
	done: boolean;
	createdAt: Date;
	updatedAt: Date;
}

const TodoSchema = new mongoose.Schema(
	{
		task: {
			type: String,
			required: true,
			unique: true,
		},
		done: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

const Todo = mongoose.model<TodoDocument>('Todo', TodoSchema);

export default Todo;
