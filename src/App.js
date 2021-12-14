import React, { useState } from 'react';
import axios from 'axios';
import Search from './components/Search';
import Results from './components/Results';

import './App.scss';

const App = () => {
  const [ users, setUsers ] = useState([])

  const getUsers = (username) => {
    axios({
      url: `https://api.github.com/search/users?q=${username} in:login`
    })
    .then((res) => {
      setUsers(res.data.items)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <section>
      <Search getUsers={getUsers}/>
      <Results users={users}/>
    </section>
  );
}

export default App;
