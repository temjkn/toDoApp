let store = {
    _state : {
        todoList : [
            {id : 1, text : 'Cras justo odioCras justo odio1212123'},
            {id : 2, text : 'Cras justo odioCras justo odio1212123'},
            {id : 3, text : 'Cras justo odioCras justo odio1212123'}
        ]
    },
    dispatch(action) {
        this._state.todoList = todoListReducer(this._state.todoList, action);
    }
}