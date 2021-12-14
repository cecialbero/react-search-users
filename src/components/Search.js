import React, { useState } from 'react';

const Search = (props) => {
    const [login, setLogin] = useState('');

    const handleOnChange = ({ target }) => {
        setLogin(target.value)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        props.getsLogin(login);
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input
            type='search'
            value={login}
            name='login'
            onChange={handleOnChange}/>

            <button type='submit'>Search</button>
        </form>
    )
}

export default Search