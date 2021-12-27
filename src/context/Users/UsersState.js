import React, { useReducer } from 'react';
import axios from 'axios';
import UsersContext from './usersContext';
import UsersReducer from './usersReducer';
import { GET_USERS, LOADING } from './../types';

let githubClientId;
let githubClientSecret;

if(process.env.NODE_ENV !== 'production') {
    githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET
} else {
    githubClientId = process.env.GITHUB_CLIENT_ID;
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET
}

const UsersState = props => {
    const initialState = {
        users: [],
        loading: false
    }

    const [state, dispatch] = useReducer(UsersReducer, initialState);

    const getUsers = async username => {
        setLoading();

        const res = await axios.get(`https://api.github.com/search/users?q=${username}&client_id=${githubClientId}&client_secret=${githubClientSecret} in:login`);

        dispatch({ type: GET_USERS, payload: res.data.items });
    }

    const setLoading = () => dispatch({ type: LOADING });

    return <UsersContext.Provider value={{
        users: state.users,
        loading: state.loading,
        getUsers
    }}>
            {props.children}
        </UsersContext.Provider>
}

export default UsersState