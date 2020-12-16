import React, { useReducer } from 'react';
import axios from 'axios';
import { TodoContext } from './TodoContext';
import { TodoReducer } from './TodoReducer';
import {FETCH_EVENTS,ADD_EVENT, REMOVE_EVENT,LOADING} from './TodoReducer';

const url = 'https://neat-dynamo-234320-default-rtdb.firebaseio.com/';

export const TodoState = ({children}) =>{
    const initialState = {
        events: [],
        loading : true
        // events : [
        //     {id: 1, text: 'reducer work!1'},
        //     {id: 2, text: 'reducer work!2'},
        //     {id: 3, text: 'reducer work!3'},
        //     {id: 4, text: 'reducer work!4'}
        // ]
    }

    const [state,dispatch] = useReducer(TodoReducer, initialState);

    const loading = () => dispatch({type: LOADING})

    const fetchEvents = async () => {
        loading();
        const result = await axios.get(`${url}events.json`);
        const payload = Object.keys(result.data).map( key =>{
            return {
                ...result.data[key],
                id: key
            }
        });
        dispatch({type:FETCH_EVENTS, payload})
    }

    const addEvent = async (text, file) => {
        loading();
        let id = Date.now()
        let event = {text, file,id}
        await axios.post(`${url}events.json`, event);
        const payload = {
            ...event
        }
        dispatch({type:ADD_EVENT, payload})
    }
    const removeEvent = async(id) => {
        loading();
        await axios.delete(`${url}events/${id}.json`);
        dispatch({type:REMOVE_EVENT, id})
    }
    const changeDataIndex = async (arr) => {
        let json = JSON.stringify(arr)
        console.log('changeDataIndex',json)

    }
    return (
        <TodoContext.Provider value = {{
            fetchEvents,
            addEvent,
            removeEvent,
            changeDataIndex,
            loading : state.loading,
            events : state.events
        }}
        >
            {children}
        </TodoContext.Provider>
    )
}