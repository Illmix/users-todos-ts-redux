import React from 'react';
import UserList from "./components/UserList";
import TodoList from "./components/TodoList";
import "./App.css"
function App() {
  return (
    <div className="container">
        <UserList/>
        <TodoList/>
    </div>
  );
}

export default App;
