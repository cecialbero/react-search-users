import React from 'react';

const Results = ({ users }) => {
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