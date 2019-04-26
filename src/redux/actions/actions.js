import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from "./actionTypes";

let nextTodoId = 0;

export const addTodo = ({input,weight}) => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content: input,
    weight: parseInt(weight) || 0 
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
