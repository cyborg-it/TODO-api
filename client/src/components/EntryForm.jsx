import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {entryDataReducerAction} from '../actions/index'

const EntryForm = () => {
    const dispatch = useDispatch()
    const entryData = useSelector(state => state.entryData)

    const titleChangeHandler = (event) => {
        event.preventDefault()
        dispatch(entryDataReducerAction({
            title : event.target.value
        }))
    }

    const descriptionChangeHandler = (event) => {
        event.preventDefault()
        dispatch(entryDataReducerAction({
            description : event.target.value
        }))
        
    } 

    const submitData = (event) => {
        event.preventDefault()
        console.log(entryData)
    }

    return (
        <div className="card">
            <h4 className="m-5">Create a TODO</h4>
            <form action="" onSubmit={submitData}>
                <div className="container">
                    <div className="mb-3">
                        <input type="text" name="title" className="form-control" placeholder="title" onChange={titleChangeHandler} />
                    </div>
                    <div className="mb-3">
                        <input type="text" name="desctiption" className="form-control" placeholder="description" onChange={descriptionChangeHandler} />
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
