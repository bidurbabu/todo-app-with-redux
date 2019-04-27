import { ADD_TODO, TOGGLE_TODO, SET_FILTER, SET_SORT_FILTER } from "./actionTypes";

let nextTodoId = 0;

export const addTodo = ({ input, weight, priority }) => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content: input,
    weight: parseInt(weight) || 10,
    priority: parseInt(priority) || 20
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });

export const setSortFilter = filter => ({
  type: SET_SORT_FILTER,
  payload: { filter }
});
