import React, { useState } from 'react';

const AddTodo = props => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const submitHandler = e => {
    e.preventDefault(); //Prevent page refresh
    // Validate input
    if (!title || !description) {
      alert('Please fill out both fields');
      return;
    }
    props.onAdd({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md mt-10">
      <h2 className="text-xl font-semibold mb-4 text-center">Add a New ToDo</h2>
      <form onSubmit={submitHandler}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Enter ToDo title"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Enter ToDo description"></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all">
          Add ToDo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
