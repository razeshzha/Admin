import { LuPenLine } from "react-icons/lu";
import { IoTrashOutline } from "react-icons/io5";
import React from 'react'
import Link from "next/link";

interface IProps {
    updateLink: string;
    handleDelete:() => void
}

export const Actions:React.FC<IProps> = ({updateLink,handleDelete}) =>{
    return (
        <div className='flex justify-center items-center gap-3'>
            <Link href={updateLink}>
                <LuPenLine size={23} className='text-green-500'/>
            </Link>
            <button onClick={handleDelete} className='w-fit cursor-pointer'>
                <IoTrashOutline size={22} className='text-red-500' />
            </button>
            
        </div>
    )
}