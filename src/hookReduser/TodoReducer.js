
export const LOADING = 'LOADING';
export const FETCH_EVENTS = 'FETCH_EVENTS';
export const ADD_EVENT = 'ADD_EVENT';
export const REMOVE_EVENT = 'REMOVE_EVENT';


export const TodoReducer = (state, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state, loading : true
            }
        case FETCH_EVENTS:
            return {
                ...state,
                events : action.payload,
                loading: false
            }
        case ADD_EVENT:
            let file = action.payload.file ? action.payload.file : null
            let newEvent = {
                id:Date.now(),
                text: action.payload.text,
                file: file
                }
            return {
                ...state,
                events : [...state.events, newEvent],
                loading: false
            }
        case REMOVE_EVENT:
            return{
                ...state,
                events: state.events.filter(item => item.id !== action.id),
                loading: false
            }
        default:
            return state
    }
}