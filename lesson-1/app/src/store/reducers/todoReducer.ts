import { TodoAction, TodoActionTypes, TodoState } from "../../types/todo";

const InitialState:TodoState = {
    todos: [],
    page: 1,
    error: null,
    limit: 10,
    loading: false,
}

export const todoReducer = (state = InitialState, action: TodoAction): TodoState => {
    switch (action.type) {
        case TodoActionTypes.FETCH_TODOS:
            return {...state, loading: true}
        case TodoActionTypes.FETCH_TODOS_SUCCESS:
            return {...state, loading: false, todos: action.payload}
        case TodoActionTypes.FETCH_TODOS_ERROR:
            return {...state, loading:false, error: action.payload}
        case TodoActionTypes.FETCH_TODO_PAGES:
            return {...state, page: action.payload}
        default:
            return state
    }
}