import React from 'react';

interface TodoItemProps {
    todo: string;
    status: string;
    onDelete: () => void;
    onComplete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, status, onDelete, onComplete }) => {
    return (
        <tr>
            <td>{todo}</td>
            <td>{status}</td>
            <td>
                <button onClick={onDelete} style={{ marginRight: '5px' }}>Delete</button>
                <button onClick={onComplete}>Complete</button>
            </td>
        </tr>
    );
};

export default TodoItem;


/*
import React from 'react';

interface TodoItemProps {
  todo: string; // The main text of the todo
  isCompleted: boolean; // A boolean to indicate if the todo is completed
  toggleComplete: () => void; // Function to toggle completion
  deleteTodo: () => void; // Function to delete the todo
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, isCompleted, toggleComplete, deleteTodo }) => {
  return (
    <td className={isCompleted ? 'completed' : ''}>
      
      <span style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}> 
        {todo}
      </span>
      <input type="checkbox" checked={isCompleted} onChange={toggleComplete} />
      <button className="delete-btn" onClick={deleteTodo}>Ta bort</button>
    </td>
    
  );
};

export default TodoItem;
*/
