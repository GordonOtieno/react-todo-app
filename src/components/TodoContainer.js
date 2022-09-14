import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

function TodoContainer() {
  const [todos, setTodos] = useState([]);

  const handleChange = (id) => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleTodoUpdate = (title, id) => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          title,
        };
      }
      return todo;
    }));
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <>
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodo={addTodoItem} />
          <TodosList
            todos={todos}
            handleChange={handleChange}
            handleDelete={handleDelete}
            handleTodoUpdate={handleTodoUpdate}
          />
        </div>
      </div>
    </>
  );
}

export default TodoContainer;
