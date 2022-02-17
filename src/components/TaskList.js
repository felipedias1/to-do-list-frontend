import React, { useContext, useEffect } from 'react';
import api from '../services/api';
import DataContext from '../context/DataContext';

function TaskList() {
  const { userLogin } = useContext(DataContext);
  const { allTasks, setAllTasks } = useContext(DataContext);
  const { token } = userLogin.dataUser;

  /* useEffect(() => {
      const response = api.get('/task', null,
      { headers: { 'authorization': token } })
      setAllTasks([...response.dataUser]);
      console.log(response);
  }, []); */

  
  return (
    <h1> TASKLIST </h1>
  )
};

export default TaskList;