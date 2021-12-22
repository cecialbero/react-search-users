import React, { useReducer } from 'react';
import axios from 'axios';
import UsersContext from './usersContext';
import UsersReducer from './usersReducer';
import { GET_USERS } from './../types';

const UsersState = props => {
    const initialState = {
        users: []
    }

    const [state, dispatch] = useReducer(UsersReducer, initialState);

    const getUsers = async username => {
        const res = await axios.get(`https://api.github.com/search/users?q=${username}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET} in:login&per_page=9`);

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