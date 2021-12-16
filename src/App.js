import React from 'react';
import UsersState from './context/Users/UsersState';
import Search from './components/Search';
import Results from './components/Results';

import './App.scss';

const App = () => {
  return (
    <UsersState>
      <section>
        <Search />
        <Results />
      </section>
    </UsersState>
  );
}

export default App;
