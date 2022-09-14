import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodosList({
  todos,
  handleChange,
  handleDelete,
  handleTodoUpdate,
}) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChange={handleChange}
          handleDelete={handleDelete}
          handleTodoUpdate={handleTodoUpdate}
        />
      ))}
    </ul>
  );
}

TodosList.propTypes = {
  todos: PropTypes.isRequired,
  handleChange: PropTypes.isRequired,
  handleDelete: PropTypes.isRequired,
  handleTodoUpdate: PropTypes.isRequired,
};

export default TodosList;
