import todoModel, { TodoDocument } from './../models/todo';
import { DocumentDefinition, QueryOptions, UpdateQuery } from 'mongoose';

class Todo {
	async createTodo(payload: DocumentDefinition<TodoDocument>) {
		return await todoModel.create(payload);
	}

    async findTodos() {
        return await todoModel.find({})
    }

    async findOneTodos(id: string) {
        return await todoModel.findById({
            _id: id
        })
    }

    async deleteTodo(id: string) {
        return await todoModel.deleteOne({
            _id: id
        })
    }

    async updateTodo(id: string, payload: DocumentDefinition<TodoDocument>) {
        return await todoModel.updateOne({
            _id: id
        }, payload, {
            new: true
        })
    }
}

export default new Todo();
