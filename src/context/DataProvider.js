import React from 'react';
import DataContext from './DataContext';

function DataProvider({ children }) {
  const contextValue = { };
  
  return (
    <div>
      <DataContext.Provider value={ contextValue }>
        { children }
      </DataContext.Provider>
    </div>
  );
}

export default DataProvider;