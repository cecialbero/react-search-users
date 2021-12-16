import React, { useReducer } from 'react';
import axios from 'axios';
import { GET_USERS } from './../types';
import UsersContext from './usersContext';
import UsersReducer from './usersReducer';


const UsersState = props => {
    const initialState = {
        users: []
    }

    const [state, dispatch] = useReducer(UsersReducer, initialState);

    const getUsers = async username => {
        const res = await axios.get(`https://api.github.com/search/users?q=${username} in:login`);
        dispatch({ type: GET_USERS, payload: res.data.items });
    }

    return <UsersContext.Provider value={{
        users: state.users,
        getUsers
    }}>
            {props.children}
        </UsersContext.Provider>
}

export default UsersState