import React, { useState } from 'react';
import RemoveTodo from './components/RemoveTodo/RemoveTodo';
import TodoList from './components/TodoList/TodoList';

const DUMMY_TODOLIST = [
  {
    id: 1,
    title: 'Eat',
    status: 'new',
  },
  {
    id: 2,
    title: 'Sleep',
    status: 'completed',
  },
  {
    id: 3,
    title: 'Code',
    status: 'new',
  },
];

const TODOLIST_2 = ['hello', 'world', '2021'];

TodoFeature.propTypes = {};

function TodoFeature() {
  const [todoList, setTodoList] = useState(DUMMY_TODOLIST);
  const [filterStatus, setFilterStatus] = useState('all');

  const handleChangeStatus = todoId => {
    // clone current array to the new one
    const newTodoList = [...todoList];
    const idx = newTodoList.findIndex(todo => todo.id === todoId);

    // toggle state
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
    };

    // update state
    setTodoList(newTodoList);
  };

  const handleShowAll = () => {
    setFilterStatus('all');
  };

  const handleShowCompleted = () => {
    setFilterStatus('completed');
  };

  const handleShowNew = () => {
    setFilterStatus('new');
  };

  const renderedTodoList = todoList.filter(
    todo => filterStatus === 'all' || filterStatus === todo.status
  );

  const [todoList2, setTodoList2] = useState(TODOLIST_2);
  const handleRemoveTodo = todo => {
    const newTodoList = todoList2.filter(t => t !== todo);
    setTodoList2(newTodoList);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <TodoList
        todoList={renderedTodoList}
        onChangeStatus={handleChangeStatus}
      />
      <div>
        <button onClick={handleShowAll}>Show All</button>
        <button onClick={handleShowCompleted}>Show Completed</button>
        <button onClick={handleShowNew}>Show New</button>
      </div>
      <RemoveTodo todoList={todoList2} onRemoveTodo={handleRemoveTodo} />
    </div>
  );
}

export default TodoFeature;
