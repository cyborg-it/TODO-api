import axios from 'axios'
import React, { useEffect } from 'react'
import SingleTodo from './SingleTodo'
import {todoListReducerAction} from '../actions/index'
import { useDispatch, useSelector } from 'react-redux'
const SERVER_API = process.env.REACT_APP_SERVER_API


const TodoList = () => {
    const dispatch = useDispatch()
    const todoList = useSelector(state => state.todoList)
    
    useEffect(() => {
        const getTodoList = async () => {
            try{
                let result = await axios.get(`${SERVER_API}/todo/list`)
                dispatch(todoListReducerAction(result.data))
            }
            catch(error) {
                console.error(error)
            }
        }
        getTodoList()
    },[])

    console.log(todoList)

    const renderTodoList = todoList.map((todo) => {
        return <SingleTodo data={todo}></SingleTodo>
    })
    return (
        <div className="card">
            <div>
                <table className="table table-borderless text-center">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">status</th>
                            <th scope="col">action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTodoList}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TodoList
