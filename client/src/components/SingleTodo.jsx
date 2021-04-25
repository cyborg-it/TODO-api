import React from 'react';

const SingleTodo = () => {
    return (
        <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td> <p className="badge bg-success">active</p> </td>
            <td >
                <a className="btn btn-dark" style={{ marginRight: "10px" }}>edit</a>
                <a className="btn btn-danger">delete</a>
            </td>
        </tr>
    )
}

export default SingleTodo;