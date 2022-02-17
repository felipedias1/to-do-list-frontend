import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
/* import Tasks from './pages/Tasks'; */

function App() {
  return (
    <div>
      <Switch>
        {/* <Route exact path="/tasks" component={ Tasks } /> */}
        <Route path="/" component={ Login } />
      </Switch>
    </div>
  );
}

export default App;
