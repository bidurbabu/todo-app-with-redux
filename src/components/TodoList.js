import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { getTodosSorted } from "../redux/selectors/selectors";


const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos && todos.length
      ? todos.map((todo, index) => {
          return <Todo key={`todo-${todo.id}`} todo={todo} />;
        })
      : "No todos, yay!"}
  </ul>
);

const mapStateToProps = state => {
  const todos = getTodosSorted(state);
  return { todos };
};
export default connect(mapStateToProps)(TodoList);
