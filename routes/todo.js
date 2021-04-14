const router = require('express').Router();
const Todo = require('../models/Todo');
const httpStatus = require('http-status-codes');

// GET ALL THE TODOS
router.get('/list', async (req,res) => {
    try {
        let todoList = await Todo.find();
        if(todoList) {
            res.status(httpStatus.OK).json(todoList)
        }
 
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error);
    }
});

// GET A TODO by ID
router.get('/:id', async (req,res) => {
    let {id} = req.params;
    try{
        let findASingleTodo = await Todo.findById({_id:id});
        if(findASingleTodo) {
            res.status(httpStatus.OK).json(findASingleTodo)
        }
    }catch(error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error)
    }
});

// POST A TODO
router.post('/create', async (req,res) => {
    
    try {
        const newTodo = new Todo(req.body);
        let createTodo = await newTodo.save();
        if(createTodo) {
            res.status(httpStatus.CREATED).json({
                message : "TODO was created successfully"
            })
        }
        
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error);
    }
});

// POST MULTIPLE TODO
router.post('/create/all', async (req,res) => {
    try {
        let createTodos = await Todo.insertMany(req.body)
        if(createTodos) {
            res.status(httpStatus.CREATED).json({
                message : "TODO's were created successfully"
            });
        }
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error);
    }

   
});

// UPDATE A TODO
router.patch('/update/:id', async (req,res) => {
    let {id} = req.params;
    try {
        let updateTodo = await Todo.findByIdAndUpdate({
            _id:id
        },{
            $set:req.body
        },{
            useFindAndModify:false
        });

        if(updateTodo) {
            throw res.status(httpStatus.OK).json({
                message : "TODO is updated successfully"
            })
        }
    } catch (error) {
        console.log(error)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error)
    }
});

// DELETE A TODO
router.delete('/delete/:id', async (req,res) => {
    let {id} = req.params;
    try{
        let deleteASingleTodo = await Todo.deleteOne({_id:id});
        if(deleteASingleTodo) {
            res.status(httpStatus.OK).json({
                message : "TODO was deleted successfully"
            })
        }
    }catch(error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error)
    }
});


module.exports = router;