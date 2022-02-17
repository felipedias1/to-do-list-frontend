import React, { useState }  from 'react';
import DataContext from './DataContext';

function DataProvider({ children }) {
  const [ userLogin, setUserLogin ] = useState({});

  const contextValue = { 
    userLogin, setUserLogin,
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