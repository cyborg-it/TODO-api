import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {demoReducerAction} from '../actions/index'

const Demo = () => {
    const dispatch = useDispatch()
    const demoOne = useSelector({})
    useEffect(() => {
        dispatch(demoReducerAction({
            data:"Hello TODO app"
        }));    
    },[]);

    return (
        <div>
            <h1>Demo page {demoOne.data}</h1>
        </div>
    )
}

export default Demo
