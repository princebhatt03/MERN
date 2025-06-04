import React from 'react';
import TodoItem from './ToDoItems';

const ToDos = props => {
  return (
    <div className="mt-20 container p-6 sticky z-10 w-full">
      <h3 className="text-xl font-bold mb-4 text-center">ToDos List</h3>
      {props.todos.length === 0 && (
        <div className="text-gray-500 text-center">No ToDos available</div>
      )}
      {props.todos.map((todo, index) => (
        <TodoItem
          key={todo.id || index}
          todo={todo}
          onDelete={props.onDelete}
        />
      ))}
    </div>
  );
};

export default ToDos;
