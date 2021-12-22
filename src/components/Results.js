import React, { useContext } from 'react';
import { useTable, useSortBy } from 'react-table';
import UsersContext from './../context/Users/usersContext';

import './Results.scss';

const Results = () => {
    const usersContext = useContext(UsersContext);
    const { users } = usersContext;

    const usersData = (users) => {
        let cols = [];
        users.forEach(user => {
            cols = [...cols, {
                col1: user.avatar_url,
                col2: user.login,
                col3: user.type
            }]
        })
        return cols
    }

    const data = React.useMemo(() => usersData(users), [users])

    const columns = React.useMemo(
        () => [
            {
                Header: 'Avatar Url',
                accessor: 'col1',
            },
            {
                Header: 'Login',
                accessor: 'col2',
            },
            {
                Header: 'Type',
                accessor: 'col3'
            }
        ],
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data }, useSortBy)

    return (
            users.length !== 0 && <div className='table-wrapper' role='table' arial-label='results table'>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    <p>{column.render('Header')}
                                        {column.isSorted
                                        ? column.isSortedDesc
                                            ? <i class="fas fa-sort-down"></i>
                                            : <i class="fas fa-sort-up"></i>
                                        : ''}
                                    </p>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <td {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Results