import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ToDos from './components/ToDos';
import AddTodo from './components/AddTodos';

const App = () => {
  let initTodos;
  if (localStorage.getItem('todos') === null) {
    initTodos = [];
  } else {
    initTodos = JSON.parse(localStorage.getItem('todos'));
  }
  const onDelete = todo => {
    // console.log('Delete function called for:', todos);
    setTodos(
      todos.filter(e => {
        return e !== todo;
      })
    );
    localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
  };

  const onAdd = todo => {
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const newTodo = {
      sno: sno,
      title: todo.title,
      description: todo.description,
    };
    setTodos([...todos, newTodo]);
    console.log('Added new todo:', newTodo);
    localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
  };

  const [todos, setTodos] = useState([initTodos]);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Header />
      <br />
      <AddTodo onAdd={onAdd} />
      <ToDos
        todos={todos}
        onDelete={onDelete}
      />
      <Footer />
    </>
  );
};

export default App;
