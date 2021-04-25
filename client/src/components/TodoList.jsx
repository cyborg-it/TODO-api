import React from 'react'
import SingleTodo from './SingleTodo'

const TodoList = () => {
    return (
        <div className="card">
            <h4 className="m-5">
                List of TODO's
</h4>
            <div>
                <table class="table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">status</th>
                            <th scope="col">action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <SingleTodo></SingleTodo>
                        <SingleTodo></SingleTodo>
                        <SingleTodo></SingleTodo>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TodoList
