import React from 'react';
import './App.css';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const App = (props) => {
  return (
    <div>
      <TodoList />
      <TodoForm />
    </div>
  );
};

export default App;
