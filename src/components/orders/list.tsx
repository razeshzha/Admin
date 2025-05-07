/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import Table from "../ui/table"
import { createColumnHelper } from '@tanstack/react-table'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getAllOrders, deleteOrder } from '@/src/api/order'
import { Actions } from "../ui/table-actions"
import toast from 'react-hot-toast'

type Order = {
  _id: string
  user: { name: string, email: string }
  total: number
  status: 'pending' | 'shipped' | 'delivered'
  createdAt: string
}

export const OrderList = () => {
  const columnHelper = createColumnHelper<Order>()
  const queryClient = useQueryClient()

  const { data, isLoading } = useQuery({
    queryFn: getAllOrders,
    queryKey: ['orders']
  })

  const { mutate } = useMutation({
    mutationFn: deleteOrder,
    onSuccess(data) {
      if (data.success) toast.success(data.message)
      queryClient.invalidateQueries({ queryKey: ['orders'] })
    },
    onError(error: any) {
      toast.error(error?.message)
    }
  })

  const handleDelete = (id: string) => mutate(id)

  const columns = [
    columnHelper.accessor(row => row.user.name, { id: 'user', header: 'User', cell: info => info.getValue() }),
    columnHelper.accessor('total', { header: 'Total', cell: info => `Rs. ${info.getValue()}` }),
    columnHelper.accessor('status', { header: 'Status', cell: info => info.getValue() }),
    columnHelper.accessor('createdAt', {
      header: 'Date',
      cell: info => new Date(info.getValue()).toLocaleDateString()
    }),
    columnHelper.accessor('_id', {
      header: 'Actions',
      cell: info => (
        <Actions
          handleDelete={() => handleDelete(info.row.original._id)}
          updateLink={`/order/update/${info.row.original._id}`}
        />
      )
    }),
  ]

  if (isLoading) return <div>Loading</div>

  return <Table columns={columns} data={data?.data?.data ?? []} />
}
