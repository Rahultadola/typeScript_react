import { useState } from 'react';

import TodosContextProvider from './store/todo-context';
import NewTodo from './components/NewTodo'
import Todos from './components/Todos';
import Todo from './models/todo';

import './App.css';


function App() {
  
  return (
    <TodosContextProvider>
        <NewTodo />
        <Todos />
    </TodosContextProvider>
  );
}

export default App;
