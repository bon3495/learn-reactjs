import React from 'react';
import PropTypes from 'prop-types';

RemoveTodo.propTypes = {
  todoList: PropTypes.array,
};

RemoveTodo.defaultProps = {
  todoList: [],
};

function RemoveTodo({ todoList, onRemoveTodo }) {
  const handleRemoveTodo = todo => {
    onRemoveTodo(todo);
  };

  return (
    <ul>
      {todoList.map(todo => (
        <li key={todo} onClick={handleRemoveTodo.bind(null, todo)}>
          {todo}
        </li>
      ))}
    </ul>
  );
}

export default RemoveTodo;
