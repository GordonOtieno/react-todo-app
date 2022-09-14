import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaPlusCircle } from 'react-icons/fa';

function InputTodo({ addTodo }) {
  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    if (title.trim()) {
      e.preventDefault();
      addTodo(title);
      setTitle('');
    } else {
      alert('Please write item');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        value={title}
        onChange={handleChange}
        placeholder="Add Todo..."
      />
      <button type="submit" className="input-submit">
        <FaPlusCircle
          style={{ color: 'darkcyan', fontSize: '20px', marginTop: '2px' }}
        />
      </button>
    </form>
  );
}

InputTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default InputTodo;
