import React, { useContext, useEffect } from 'react';
import { TodoContext } from '../hookReduser/TodoContext';
import FormHook from './formHook/FormHook';
import ListGroupHook from './listGroupHook/ListGroupHook';

const TodoListHooks = () => {
    const {fetchEvents,addEvent,removeEvent,events,loading} = useContext(TodoContext); //получаю флаг загрузки и другие для использования
    useEffect( ()=> {
        fetchEvents()
    }, [])  // eslint-disable-line react-hooks/exhaustive-deps

    const onDragEnd = (result) =>{
        // dropped outside the list
        console.log(result)
        // if(!result.destination) {
        //     return; 
        // }
    }
    return (
        <div>
            TodoList with HOOKS
            <FormHook addEvent = {addEvent}/>
            <ListGroupHook
                events = {events}
                removeEvent = {removeEvent}
                loading = {loading}
                onDragEnd ={onDragEnd}
            />
        </div>
    );
};

export default TodoListHooks;