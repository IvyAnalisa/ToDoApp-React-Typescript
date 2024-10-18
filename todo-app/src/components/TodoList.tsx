// src/components/TodoList.tsx
import React from 'react';


interface TodoListProps {
  todos: {
    text: string;
    isCompleted: boolean;
  }[];
  toggleComplete: (index: number) => void;
  deleteTodo: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <>
      {todos.map((todo, index) => (
        <tr key={index}>
          <td>
          <span style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
          </td>
          
            
          
          <td>{todo.isCompleted ? 'Completed' : 'In progress'}</td>
          <td>
            <button id= 'complete-btn' onClick={() => toggleComplete(index)}>
              {todo.isCompleted ? 'Undo' : 'Complete'}
            </button>
            <button id='delete-btn' onClick={() => deleteTodo(index)}>Delete</button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default TodoList;




/*

import React from 'react';
import TodoItem from './TodoItem';

interface Todo {
  text: string;
  isCompleted: boolean;
}

interface TodoListProps {
  todos: Todo[]; // Define `todos` as an array of Todo objects
  toggleComplete: (index: number) => void;
  deleteTodo: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <td>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo.text} // Pass the text as a string
          isCompleted={todo.isCompleted} // Pass the isCompleted property
          toggleComplete={() => toggleComplete(index)}
          deleteTodo={() => deleteTodo(index)}
        />
      ))}
    </td>
  );
};

export default TodoList;
*/
