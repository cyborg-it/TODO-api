import React from 'react'
import { Link } from 'react-router-dom'

const Navigator = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">TODO-APP</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse  justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link className="nav-link" to="/">View TODO List</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/todo/create">Create TODO</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/todo/create/multiple">
                            <span className="ml-2">Create Multiple TODO</span>
                            <span style={{ margin: "0px 0px 0px 5px" }} className="d-inline-block badge bg-danger mr-2">beta</span>
                        </Link></li>

                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navigator
