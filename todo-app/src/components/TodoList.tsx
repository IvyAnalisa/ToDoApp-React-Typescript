
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




