
import thunkMiddleware from "redux-thunk";
import todoListReduser from "./todoListReduser/todoListReduser";

const { createStore, combineReducers, applyMiddleware } = require("redux");

//combineReducers - собириает в кучу редюсеры
let redusers = combineReducers({
    todoList : todoListReduser
});

//createStore - создает стор
//applyMiddleware(thunkMiddleware) - конструкция для промежуточного слоя thunkCreator
let store = createStore(redusers,applyMiddleware(thunkMiddleware));

export default store;