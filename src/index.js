import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import DataProvider from './context/DataProvider';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <DataProvider>
      <App />
    </DataProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
