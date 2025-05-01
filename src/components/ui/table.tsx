/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import * as React from 'react'


import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'






interface IProps {
    columns:any[],
    data:any[]
}


function Table({columns,data}:IProps) {
//   const [data] = React.useState(() => [...defaultData])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className=" border border-gray-300 shadow-md mx-10 rounded-md min-h-[400px] overflow-auto">
      <table className=' w-full flex-1 tracking-wider'>
        <thead className='py-8 border-b border-gray-300 bg-blue-500 text-white overflow-auto min-w-[100px] md:w-auto'>
          {table.getHeaderGroups().map(headerGroup => (
            <tr   key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th className='py-2' key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className='min-h-[400px]'>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td className='text-center py-2 min-w-[100px] md:w-auto' key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext() )  ?? '-'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        {/* <tfoot>
          {table.getFooterGroups().map(footerGroup => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot> */}
      </table>
      <div className="h-4" />

    </div>
  )
}

export default Table
