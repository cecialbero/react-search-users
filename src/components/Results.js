import React, { useContext } from 'react';
import UsersContext from './../context/Users/usersContext';

const Results = () => {
    const usersContext = useContext(UsersContext);
    const { users } = usersContext;

    return (
        <table>
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
    )
}

export default Results