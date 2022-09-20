import React from 'react';
import './TodoItem.css'

const TodoItem = ({label, important = false}) => {

  const style = {
    color: important ? 'steelblue' : 'black',
    fontWeight: important ? 'bold' : 'normal'
  };

  return (
    <span className="todo-list-item">
      <span
        className="todo-list-item-label"
        style={style}>
        {label}
      </span>

      <div>
        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right">
        <i className="bi bi-trash"></i>
      </button>

       <button
         type="button"
         className="btn btn-outline-success btn-sm float-right">
        <i className="bi bi-exclamation"></i>
      </button>
      </div>
    </span>
  );
};

export default TodoItem;
