import React, { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoTable from './components/TodoTable';

import './App.css';

interface Todo {
  text: string;
  isCompleted: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Hämta todos från localStorage när appen mountas
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  // Spara todos till localStorage när `todos` ändras
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todoText: string) => {
    const newTodo: Todo = { text: todoText, isCompleted: false };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const deleteTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>Todo App</h1>
      
      <TodoInput addTodo={addTodo} />
      <TodoTable todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
