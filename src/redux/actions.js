import { ADD_TODO, TOOGLE_TODO, SET_FILTER } from './actionTypes';

let nextTodoId = 0;

export const addTodo = content => ({
    type: ADD_TODO,
    payload: {
        id: ++nextTodoId,
        content
    }
});

export const toogleTodo = id => ({
    type: TOOGLE_TODO,
    payload: {id}
});

export const setFilter = filter => ({
    type: SET_FILTER,
    payload: {filter}
});