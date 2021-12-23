import React from 'react';
import UsersState from './context/Users/UsersState';
import AlertState from './context/Alert/AlertState';
import Search from './components/Search';
import Results from './components/Results';
import Alert from './layout/Alert';

import './App.scss';

const App = () => {
  
  return (
    <UsersState>
    <AlertState>
      <section>
        <Alert />
        <Search />
        <Results />
      </section>
    </AlertState>
    </UsersState>
  );
}

export default App;
