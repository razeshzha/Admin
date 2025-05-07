/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import Table from "../ui/table"
import { createColumnHelper } from '@tanstack/react-table'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getAllUsers, deleteUser } from '@/src/api/user'
import { Actions } from "../ui/table-actions"
import toast from 'react-hot-toast'

type User = {
  _id: string
  name: string
  email: string
  role: 'user' | 'admin'
  createdAt: string
  updatedAt: string
}

export const UserList = () => {
  const columnHelper = createColumnHelper<User>()
  const queryClient = useQueryClient()

  const { data, isLoading } = useQuery({
    queryFn: getAllUsers,
    queryKey: ['users']
  })

  const { mutate } = useMutation({
    mutationFn: deleteUser,
    onSuccess(data) {
      if (data.success) toast.success(data.message)
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
    onError(error: any) {
      toast.error(error?.message)
    }
  })

  const handleDelete = (id: string) => mutate(id)

  const columns = [
    columnHelper.accessor('name', { header: 'Name', cell: info => info.getValue() }),
    columnHelper.accessor('email', { header: 'Email', cell: info => info.getValue() }),
    columnHelper.accessor('role', { header: 'Role', cell: info => info.getValue() }),
    columnHelper.accessor('createdAt', {
      header: 'Created At',
      cell: info => new Date(info.getValue()).toLocaleDateString()
    }),
    columnHelper.accessor('_id', {
      header: 'Actions',
      cell: info => (
        <Actions
          handleDelete={() => handleDelete(info.row.original._id)}
          updateLink={`/user/update/${info.row.original._id}`}
        />
      )
    }),
  ]

  if (isLoading) return <div>Loading</div>

  return <Table columns={columns} data={data?.data?.data ?? []} />
}
