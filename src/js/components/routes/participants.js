import React from 'react';
import styled from 'styled-components';
import { useTable, useSortBy } from 'react-table';
import { timestampToDateTime } from '../../lib/utils';

const Styles = styled.div`
    table {
        border-spacing: 0;
        border: 1px solid black;
        margin: 20px auto;

        tr {
            :last-child {
                td {
                    border-bottom: 0;
                }
            }
        }

        th,
        td {
            margin: 0;
            padding: 0.5rem;
            border-bottom: 1px solid black;
            border-right: 1px solid black;
            font-family: Tahoma;
            font-size: 16px;
            line-height: 16px;

            :last-child {
                border-right: 0;
            }
        }
    }
`;

function Table({ columns, data }) {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable(
            {
                columns,
                data,
                initialState: { sortBy: [{ id: 'createdAt', desc: true }] },
            },
            useSortBy,
        );

    // We don't want to render all 2000 rows for this example, so cap
    // it at 20 for this use case
    // const firstPageRows = rows.slice(0, 20);

    // пагинация не для MVP
    const firstPageRows = rows;

    const upBlack = (
        <span key='up-black' style={{ color: 'black' }}>
            &uarr;
        </span>
    );
    const upRed = (
        <span key='up-red' style={{ color: 'red' }}>
            &uarr;
        </span>
    );
    const downBlack = (
        <span key='down-black' style={{ color: 'black' }}>
            &darr;
        </span>
    );
    const downRed = (
        <span key='down-red' style={{ color: 'red' }}>
            &darr;
        </span>
    );

    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th
                                {...column.getHeaderProps(
                                    column.getSortByToggleProps(),
                                )}
                            >
                                {column.render('Header')}{' '}
                                {!column.disableSortBy
                                    ? typeof column.isSortedDesc == 'boolean'
                                        ? column.isSortedDesc
                                            ? [downRed, upBlack]
                                            : [downBlack, upRed]
                                        : [downBlack, upBlack]
                                    : null}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {firstPageRows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return (
                                    <td {...cell.getCellProps()}>
                                        {cell.render('Cell')}
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

const Participants = props => {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Список участников забега',
                disableSortBy: true,
                columns: [
                    {
                        Header: 'ФИО',
                        accessor: 'name',
                        disableSortBy: true,
                    },
                    {
                        Header: 'Дата заявки',
                        accessor: 'createdAt',
                        Cell: ({ value }) => timestampToDateTime(value),
                    },
                    {
                        Header: 'Эл. почта',
                        accessor: 'email',
                        disableSortBy: true,
                    },
                    {
                        Header: 'Дистанция, км',
                        accessor: 'distance',
                    },
                    {
                        Header: 'Сумма, руб',
                        accessor: 'payment',
                    },
                ],
            },
        ],
        [],
    );

    const data = React.useMemo(() => props.list, []);

    return (
        <Styles>
            <Table columns={columns} data={data} />
        </Styles>
    );
};

export default Participants;
