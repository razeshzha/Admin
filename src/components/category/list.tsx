/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import Table from "../ui/table"
import {
    createColumnHelper,

  } from '@tanstack/react-table'

import {useQuery,useMutation,useQueryClient} from '@tanstack/react-query'
import {getAllCategory,deleteCategory} from '@/api/category'
import { Actions } from "../ui/table-actions"
import toast from "react-hot-toast"




  type Category = {
    _id:string,
    name: string
    description: string
    createdAt: string
    updatedAt: string
   
  }



 

export const CategoryList = () =>{
    const columnHelper = createColumnHelper<Category>()
  const queryClient = useQueryClient()
    const {data,isLoading} = useQuery({
      queryFn:getAllCategory,
      queryKey:['categories']
    })

    const {isPending,mutate} = useMutation({
      mutationFn:deleteCategory,
      onSuccess(data) {

        if(data.success){
          toast.success(data?.message)
        }

        queryClient.invalidateQueries({queryKey:['categories']})
      },
      onError(error) {
        toast.error(error?.message)
      },

    })



    const handleDelete = (id:string) =>{
      console.log('delete',id)
      mutate(id)
    }

const columns = [
  columnHelper.accessor('name', {
    cell: info => info.getValue(),
    header: () => <span>Category Name</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor(row => row.description, {
    id: 'description',
    cell: info => <i>{info.getValue() ?? '-'}</i>,
    header: () => <span>Description</span>,
    footer: info => info.column.id,
  }),
 
  columnHelper.accessor('createdAt', {
    header: () => <span>Created At</span>,
    cell: info => <i>{new Date(info.getValue()).toLocaleDateString('en-US',{
        year:'numeric',
        month:'long',
        day:'numeric'
    })}</i>,
  }),
  columnHelper.accessor('updatedAt', {
    header: 'Updated At',
    cell: info => <i>{new Date(info.getValue()).toLocaleDateString('en-US',{
        year:'numeric',
        month:'long',
        day:'numeric'
    })}</i>,

  }),

  columnHelper.accessor('_id', {
    header: 'Actions',
    cell: info => {
      return <Actions 
      handleDelete={() =>{handleDelete(info.row.original._id)}} 
      updateLink={`/category/update/${info.row.original._id}`} 
      />
    }

  }),
  
]

if(isLoading){
  return <div>Loading</div>
}

    return (
        <div>
            <Table  columns={columns} data={data?.data?.data ?? []}/>
        </div>
    )
}