import React, { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../hookReduser/TodoContext';
import FormHook from './formHook/FormHook';
import ListGroupHook from './listGroupHook/ListGroupHook';

const TodoListHooks = () => {
    const {fetchEvents,addEvent,events} = useContext(TodoContext); //получаю флаг загрузки и другие для использования

    const [draggble, setDragglbe] = useState(events);

    // useEffect( ()=> {
    //     setDragglbe(events);
    //     fetchEvents();
    //     console.log('useEffect events:',events)
    //     console.log('useEffect draggble:',draggble)
    // }, [])  // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            TodoList with HOOKS
            <FormHook addEvent = {addEvent}/>
            <ListGroupHook draggble={draggble} setDragglbe={setDragglbe}/>
        </div>
    );
};

export default TodoListHooks;