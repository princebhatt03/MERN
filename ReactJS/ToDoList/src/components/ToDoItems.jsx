import React from 'react';

const ToDoItems = props => {
  const { title, description } = props.todo;

  return (
    <div className="mb-4 p-5 border rounded-md shadow-md bg-white">
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
      <button
        className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        onClick={() => props.onDelete(props.todo)}>
        Delete
      </button>
    </div>
  );
};

export default ToDoItems;
