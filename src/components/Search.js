import React, { useState } from 'react';

const Search = (props) => {
    const [username, setUsername] = useState('');

    const handleOnChange = ({ target }) => {
        setUsername(target.value)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        props.getUsers(username);
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input
            type='search'
            value={username}
            name='username'
            placeholder='Enter a github username'
            onChange={handleOnChange}/>

            <button type='submit'>Search</button>
        </form>
    )
}

export default Search