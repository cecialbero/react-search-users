import React, { useContext } from 'react';
import UsersContext from './../context/Users/usersContext';

import './Results.scss';

const Results = () => {
    const usersContext = useContext(UsersContext);
    const { users } = usersContext;

    console.log(users)

    return (
        <>
            {
                users.length != 0 && <table cellPadding='0' cellSpacing='0'>
                    <thead>
                        <tr>
                            <td>Avatar Url</td>
                            <td>Login</td>
                            <td>Type</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        users.map(user => {
                            return (
                                <tr key={user.id}>
                                    <td>{user.avatar_url}</td>
                                    <td>{user.login}</td>
                                    <td>{user.type}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            }
        </>
    )
}

export default Results