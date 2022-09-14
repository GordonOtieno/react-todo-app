import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';
import styles from './TodoItem.module.css';

function TodoItem({
  todo,
  handleChange,
  handleDelete,
  handleTodoUpdate,
}) {
  const [editing, setEditing] = useState(false);
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const handleEditing = () => {
    setEditing(true);
  };

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleUpdatedDone = (e) => {
    if (e.key === 'Enter') {
      setEditing(false);
    }
  };

  return (
    <li key={todo.id} className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          checked={todo.completed}
          className={styles.checkbox}
          onChange={() => handleChange(todo.id)}
        />
        <button type="button" onClick={() => handleDelete(todo.id)}>
          <FaTrash style={{ color: 'orangered', fontSize: '16px' }} />
        </button>
        <span style={todo.completed ? completedStyle : null}>{todo.title}</span>
      </div>
      <input
        type="text"
        style={editMode}
        className={styles.textInput}
        value={todo.title}
        onChange={(e) => handleTodoUpdate(e.target.value, todo.id)}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.isRequired,
  handleChange: PropTypes.isRequired,
  handleDelete: PropTypes.isRequired,
  handleTodoUpdate: PropTypes.isRequired,
};

export default TodoItem;
