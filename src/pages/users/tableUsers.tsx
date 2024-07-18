import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
    getSortedRowModel,
    SortingState,
    getPaginationRowModel,
    Table,
} from '@tanstack/react-table';
import { useState } from 'react';

type Person = {
    id: number
    name: string
    email: string
    pairs: string[],
    lastSeenOnline: string
}

const columnHelper = createColumnHelper<Person>();

const columns = [
    columnHelper.accessor('id', {
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('name', {
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor((row) => row.email, {
        id: 'email',
        cell: (info) => <i>{info.getValue()}</i>,
        header: () => <span>Email</span>,
    }),
    columnHelper.accessor('pairs', {
        header: () => 'Pairs',
        cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor('lastSeenOnline', {
        header: () => 'Last activity',
        cell: (info) => info.renderValue()
    })
];

const UsersTable = (props: any) => {
    const table = props.table as Table<Person>

    const tempFunc = (data: any) => {
        props.selectUser(data)
    }

    return (
        <div id="page-wrap" className="m-auto flex flex-col h-screen w-[90vw] py-24">
            <table style={{ backgroundColor: "white" }}>
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr
                            key={headerGroup.id}
                            style={{
                                color: "black"
                            }}
                            className="border-b text-800 uppercase"
                        >
                            {headerGroup.headers.map((header) => (
                                <th
                                    key={header.id}
                                    className="px-4 pr-2 py-4 font-medium text-left"
                                >
                                    {header.isPlaceholder ? null : (
                                        <div
                                            {...{
                                                className: header.column.getCanSort()
                                                    ? 'cursor-pointer select-none flex min-w-[36px]'
                                                    : '',
                                                onClick: header.column.getToggleSortingHandler(),
                                            }}
                                        >
                                            {flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                            {{
                                                asc: <span className="pl-2">↑</span>,
                                                desc: <span className="pl-2">↓</span>,
                                            }[header.column.getIsSorted() as string] ?? null}
                                        </div>
                                    )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody style={{
                    color: "black"
                }}>
                    {table.getRowModel().rows.map((row) => (
                        <tr onClick={() => {
                            tempFunc(row.original)
                        }} key={row.id} className="border-b cursor-pointer">
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id} className="px-4 pt-[14px] pb-[18px]">
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex sm:flex-row flex-col w-full mt-8 items-center gap-2 text-xs">
                <div className="sm:mr-auto sm:mb-0 mb-2">
                    <span className="mr-2">Items per page</span>
                    <select
                        style={{
                            backgroundColor: "white",
                            color: "black"
                        }}
                        className="border p-1 rounded w-16 border-gray-200 cursor-pointer"
                        value={table.getState().pagination.pageSize}
                        onChange={(e) => {
                            table.setPageSize(+(e.target.value));
                        }}
                    >
                        {[10, 20, 30, 40].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                                {pageSize}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex gap-2">
                    <button
                        style={{
                            backgroundColor: "white",
                            color: "black"
                        }}
                        className={`${!table.getCanPreviousPage()
                            ? 'bg-gray-100 '
                            : 'bg-gray-200 cursor-pointer bg-gray-100'
                            } rounded p-1 `}
                        onClick={() => table.setPageIndex(0)}
                        disabled={!table.getCanPreviousPage()}
                    >
                        <span className="w-5 h-5">{'<<'}</span>
                    </button>
                    <button
                        style={{
                            backgroundColor: "white",
                            color: "black"
                        }}
                        className={`${!table.getCanPreviousPage()
                            ? 'bg-gray-100'
                            : 'bg-gray-200 cursor-pointer bg-gray-100'
                            } rounded p-1`}
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        <span className="w-5 h-5">{'<'}</span>
                    </button>
                    <span className="flex items-center gap-1">
                        <input
                            style={{
                                backgroundColor: "white",
                                color: "black"
                            }}
                            min={1}
                            max={table.getPageCount()}
                            type="number"
                            value={table.getState().pagination.pageIndex + 1}
                            onChange={(e) => {
                                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                                table.setPageIndex(page);
                            }}
                            className="border p-1 rounded w-10"
                        />
                        <span style={{
                            color: "black"
                        }}> of {table.getPageCount()}</span>
                    </span>
                    <button
                        style={{
                            backgroundColor: "white",
                            color: "black"
                        }}
                        className={`${!table.getCanNextPage()
                            ? 'bg-gray-100'
                            : 'bg-gray-200 cursor-pointer bg-gray-100'
                            } rounded p-1`}
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        <span className="w-5 h-5">{'>'}</span>
                    </button>
                    <button
                        style={{
                            backgroundColor: "white",
                            color: "black"
                        }}
                        className={`${!table.getCanNextPage()
                            ? 'bg-gray-100'
                            : 'bg-gray-200 cursor-pointer bg-gray-100'
                            } rounded p-1`}
                        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                        disabled={!table.getCanNextPage()}
                    >
                        <span className="w-5 h-5">{'>>'}</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UsersTable