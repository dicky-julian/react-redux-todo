import { VISIBILITY_FILTERS } from '../constants';

export const getTodosState = store => store.todos;

export const getTodoList = store => getTodosState(store) ? getTodosState(store).allIds : [];

export const getTodoById = (store, id) => getTodosState ? { ...getTodosState(store).byIds[id], id} : {};

export const getTodos = store => getTodoList(store).map(id => getTodoById(store, id));

export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
    const allTodos = getTodos(store);
    console.log(getTodoList(store));
    getTodosState(store) ? console.log('ada') : console.log("tidak ada");
    console.log("////////////////////////");
    switch (visibilityFilter) {
        case VISIBILITY_FILTERS.COMPLETED:
            return allTodos.filter(todo => todo.completed);
        case VISIBILITY_FILTERS.INCOMPLETE:
            return allTodos.filter(todo => !todo.completed);
        case VISIBILITY_FILTERS.ALL:
        default:
            return allTodos;
    }
}