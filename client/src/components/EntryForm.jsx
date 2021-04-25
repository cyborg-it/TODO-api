import React from 'react'

const EntryForm = () => {
    return (
        <div className="card">
            <h4 className="m-5">Create a TODO</h4>
            <form action="">
                <div className="container">
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="title" />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="description" />
                    </div>
                    <div className="mb-3">
                        <input type="submit" className="form-control btn btn-danger" placeholder="description" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EntryForm
