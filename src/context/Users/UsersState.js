import React, { useReducer } from 'react';
import axios from 'axios';
import UsersContext from './usersContext';
import UsersReducer from './usersReducer';
import { GET_USERS, LOADING } from './../types';

const UsersState = props => {
    const initialState = {
        users: [],
        loading: false
    }

    const [state, dispatch] = useReducer(UsersReducer, initialState);

    const getUsers = async username => {
        setLoading();

        const res = await axios.get(`https://api.github.com/search/users?q=${username}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET} in:login`);

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