import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import classes from './TodoList.module.scss';

TodoList.propTypes = {
  todoList: PropTypes.array,
  onChangeStatus: PropTypes.func,
};

TodoList.defaultProps = {
  todoList: [],
  onChangeStatus: null,
};

function TodoList({ todoList, onChangeStatus }) {
  const handleChangeStatus = todoId => {
    if (!onChangeStatus) return;
    onChangeStatus(todoId);
  };

  return (
    <ul className={classes['list-item']}>
      {todoList.map(todo => (
        <li
          key={todo.id}
          onClick={handleChangeStatus.bind(null, todo.id)}
          className={classnames({
            [classes.completed]: todo.status === 'completed',
          })}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
