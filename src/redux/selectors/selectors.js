import { VISIBILITY_FILTERS, SORT_FILTERS } from "../../constants";
import sortFilter from "../reducers/sortFilter";

export const getTodosState = store => store.todos;

export const getTodoList = store =>
  getTodosState(store) ? getTodosState(store).allIds : [];

export const getTodoById = (store, id) =>
  getTodosState(store) ? { ...getTodosState(store).byIds[id], id } : {};


export const getTodos = store =>
  getTodoList(store).map(id => getTodoById(store, id));

export const getTodosByVisibilityFilter = (store) => {
  const visibilityFilter = store.visibilityFilter;
  const allTodos = getTodos(store);
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.COMPLETED:
      return allTodos.filter(todo => todo.completed);
    case VISIBILITY_FILTERS.INCOMPLETE:
      return allTodos.filter(todo => !todo.completed);
    case VISIBILITY_FILTERS.ALL:
    default:
      return allTodos;
  }
};

export const getTodosSorted = (store) => {
  const todos = getTodosByVisibilityFilter(store);
  const sortFilter = store.sortFilter;
  switch (sortFilter) {
    case SORT_FILTERS.ASCENDING:
      return todos.sort((a,b) => a.weight - b.weight);
    case SORT_FILTERS.DESCENDING:
      return todos.sort((a,b) => b.weight - a.weight);
    case SORT_FILTERS.NONE:
    default:
      return todos;
  }
};


const getWeight = (total, currentValue) => {
  return total + currentValue;
};

export const getTotalWeight = store => {
  const allIds = getTodoList(store);
  return allIds.map(id => getTodoById(store,id).weight).reduce(getWeight, 0);
};
