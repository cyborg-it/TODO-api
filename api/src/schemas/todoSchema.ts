import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
    task: {
        task: String,
        required: true,
        unique: true
    },
    done: {
        type: Boolean
    }
}, { timestamps: true});

export default TodoSchema;