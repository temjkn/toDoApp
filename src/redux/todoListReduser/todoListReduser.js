
const ADD_EVENT = 'ADD_EVENT';
const REMOVE_EVENT = 'REMOVE_EVENT';

let initialStore = {
    todoList : [
        {id : 1, text : 'Cras justo odioCras justo odio12121'},
        {id : 2, text : 'Cras justo odioCras justo odio12'},
        {id : 3, text : 'Cras justo odioCras justo odio3'}
    ]
}
 const todoListReduser = (state = initialStore,action) => {

    switch(action.type){
        case ADD_EVENT :{
            let newEvent = {
                id: Date.now(),
                text: action.newText
            }
            return {
                ...state,
                todoList : [...state.todoList,newEvent]
            }
        }
        case REMOVE_EVENT : {
            return {
                ...state,
                todoList : state.todoList.filter(item => item.id !== action.id)
            }
        }
        default:
            return state;
    }
}


//creator для страницы постов
export const addEventActionCreator = (newText) => ({type : ADD_EVENT, newText}); //создаю обьект для dispatch
export const removeEventActionCreator = (id) => ({type : REMOVE_EVENT, id}); //создаю обьект для dispatch

export default todoListReduser;