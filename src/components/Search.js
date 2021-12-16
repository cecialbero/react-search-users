import React, { useState, useContext } from 'react';
import UsersContext from './../context/Users/usersContext';

const Search = () => {
    const usersContext = useContext(UsersContext);
    const [username, setUsername] = useState('');

    const handleOnChange = ({ target }) => {
        setUsername(target.value)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        usersContext.getUsers(username);
        setUsername('');
    }

    return (
        <form className='search-container' onSubmit={handleOnSubmit}>
            <input
            type='search'
            value={username}
            name='username'
            placeholder='Enter a github username'
            arial-label='Enter a github username'
            onChange={handleOnChange}/>

            <button type='submit'>Search</button>
        </form>
    )
}

export default Search