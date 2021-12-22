import React, { useState, useContext } from 'react';
import AlertContext from './../context/Alert/alertContext';
import UsersContext from './../context/Users/usersContext';

const Search = () => {
    const usersContext = useContext(UsersContext);
    const alertContext = useContext(AlertContext);
    const [username, setUsername] = useState('');

    const handleOnChange = ({ target }) => {
        setUsername(target.value)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if(username === '') {
            alertContext.setAlert('Please, enter a github username', 'info');
        } else {
            usersContext.getUsers(username);
            setUsername('');
        }
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

            <button type='submit'>Submit</button>
        </form>
    )
}

export default Search