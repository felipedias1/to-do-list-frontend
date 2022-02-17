import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Tasks from './pages/Tasks';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" component={ Login } />
        <Route exact path="/tasks" component={ Tasks } />  
      </Routes>
    </div>
  );
}

export default App;
