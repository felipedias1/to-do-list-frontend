import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Tasks from './pages/Tasks';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/tasks" element={<Tasks />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
