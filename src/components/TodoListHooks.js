import React, { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../hookReduser/TodoContext';
import FormHook from './formHook/FormHook';
import ListGroupHook from './listGroupHook/ListGroupHook';

const TodoListHooks = () => {
    const {fetchEvents,addEvent,events} = useContext(TodoContext); //получаю флаг загрузки и другие для использования

    const [draggble, setDragglbe] = useState([]);

    useEffect( ()=> {
        fetchEvents()
        setDragglbe(events)
        console.log('setDragglbe', draggble)
    }, !events)  // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            TodoList with HOOKS
            <FormHook addEvent = {addEvent}/>
            <ListGroupHook draggble={draggble} setDragglbe={setDragglbe}/>
        </div>
    );
};

export default TodoListHooks;