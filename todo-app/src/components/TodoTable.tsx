// src/components/TodoTable.tsx
import React from 'react';
import TodoList from './TodoList'; // Importera TodoList-komponenten

interface Todo {
  text: string;
  isCompleted: boolean;
}

interface TodoTableProps {
  todos: Todo[];
  toggleComplete: (index: number) => void;
  deleteTodo: (index: number) => void;
}

const TodoTable: React.FC<TodoTableProps> = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <table id="todo-table">
      <thead>
        <tr>
          <th>List things must do</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
      </tbody>
    </table>
  );
};

export default TodoTable;
