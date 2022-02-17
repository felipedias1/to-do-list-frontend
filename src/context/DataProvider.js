import React, { useState }  from 'react';
import DataContext from './DataContext';

function DataProvider({ children }) {
  const [ userLogin, setUserLogin ] = useState({});
  const [ allTasks, setAllTAsks ] = useState({});

  const contextValue = { 
    userLogin, setUserLogin,
    allTasks, setAllTAsks,
  };
  
  return (
    <div>
      <DataContext.Provider value={ contextValue }>
        { children }
      </DataContext.Provider>
    </div>
  );
}

export default DataProvider;