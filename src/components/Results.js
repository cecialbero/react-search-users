import React, { useContext } from 'react';
import { useTable, useSortBy, usePagination } from 'react-table';
import UsersContext from './../context/Users/usersContext';
import Spinner from './../layout/Spinner';

import './Results.scss';

const Results = () => {
    const usersContext = useContext(UsersContext);
    const { users, loading } = usersContext;

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
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        pageOptions,
        state: { pageIndex },
    } = useTable({ columns, data, initialState: { pageSize: 9 } }, useSortBy, usePagination)

    console.log(1, canNextPage)
    console.log(2, canPreviousPage)

    return (

        loading ? <div className='spinner-wrapper'><Spinner /></div>

        :

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
                                                ? <i className="fas fa-sort-down"></i>
                                                : <i className="fas fa-sort-up"></i>
                                            : ''}
                                    </p>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            { (canNextPage || canPreviousPage) && <div className="pagination">
                    <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                        {'<<'}
                    </button>{' '}
                    <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                        {'<'}
                    </button>{' '}
                    <button onClick={() => nextPage()} disabled={!canNextPage}>
                        {'>'}
                    </button>{' '}
                    <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                        {'>>'}
                    </button>{' '}
                    <span>
                        Page{' '}
                        <strong>
                            {pageIndex + 1} of {pageOptions.length}
                        </strong>{' '}
                    </span>
                </div>
            }
        </div>
    )
}

export default Results