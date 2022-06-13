import mongoose from 'mongoose';
import TodoSchema from './../schemas/todoSchema';

const Todo = mongoose.model('Todo', TodoSchema);

export default Todo;