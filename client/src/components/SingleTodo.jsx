import React from 'react';

const SingleTodo = ({data}) => {
    console.log(data)
    const editLink = `/edit/${data._id}`
    const deleteLink = `/delete/${data._id}`
    return (
        <tr>
            <td>{data.title}</td>
            <td>{data.description}</td>
            <td> <p className="badge bg-success">active</p> </td>
            <td >
                <a href={editLink} className="btn btn-dark" style={{ marginRight: "10px" }}>edit</a>
                <a href={deleteLink} className="btn btn-danger">delete</a>
            </td>
        </tr>
    )
}

export default SingleTodo;