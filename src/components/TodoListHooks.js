import React, { useContext} from 'react';
import { TodoContext } from '../hookReduser/TodoContext';
import FormHook from './formHook/FormHook';
import ListGroupHook from './listGroupHook/ListGroupHook';

const TodoListHooks = () => {
    const {addEvent} = useContext(TodoContext); //получаю флаг загрузки и другие для использования

    return (
        <div>
            <h2>TodoList with HOOKS</h2>
            <FormHook addEvent = {addEvent}/>
            <h3>This is list draggable</h3>
            <ListGroupHook />
        </div>
    );
};

export default TodoListHooks;