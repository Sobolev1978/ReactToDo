import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({todos}) => {

  return (
    <ul>
      {
        todos.map((todo) => {

          const {id, ...todoPros} = todo

          return (
            <ul className="list-group todo-list">
              <li
                key={todo.id}
                className="list-group-item"
              >
                <TodoItem {...todoPros} />
              </li>
            </ul>
          )
        })
      }
    </ul>
  )
}

export default TodoList;
