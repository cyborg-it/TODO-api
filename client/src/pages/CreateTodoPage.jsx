import React from 'react'
import EntryForm from '../components/EntryForm'
import Navigator from '../components/Navigator'

const CreateTodoPage = () => {
    return (
        <div>
            <Navigator></Navigator>
            <div className="container text-center">
                <h1 className="m-5">Create TODO</h1>
                <div className="row">
                    <div className="col-xl-6 offset-3">
                        <EntryForm></EntryForm>
                        <button className="btn btn-danger m-2">add more list</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateTodoPage
