import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'
import {entryTitleDataReducerAction,entryDescriptionDataReducerAction} from '../actions/index'
const SERVER_API = process.env.REACT_APP_SERVER_API

const EntryForm = () => {
    const dispatch = useDispatch()
    const title = useSelector(state => state.title)
    const description = useSelector(state => state.description)

    const titleChangeHandler = (event) => {
        event.preventDefault()
        dispatch(entryTitleDataReducerAction( event.target.value
        ))
    }

    const descriptionChangeHandler = (event) => {
        event.preventDefault()
        dispatch(entryDescriptionDataReducerAction(
            event.target.value
        ))
        
    } 

    const submitData = async (event) => {
        event.preventDefault()
        const data = {
            title,
            description
        };

        try{
            const result = await axios.post(`${SERVER_API}/todo/create`,data)
            console.log(result.data)
            
        }catch(error) {
            console.error(error)
        }
    }

    return (
        <div className="card mb-2">
            <form action="" onSubmit={submitData} class="m-5">
                <div className="container">
                    <div className="mb-3">
                        <input type="text" name="title" className="form-control" placeholder="title" onChange={titleChangeHandler} />
                    </div>
                    <div className="mb-3">
                        <input type="text" name="desctiption" className="form-control" placeholder="description" onChange={descriptionChangeHandler} />
                    </div>
                    <div>
                        <input type="submit" className="form-control btn btn-danger" placeholder="description" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EntryForm
