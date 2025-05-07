"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LuLayoutDashboard } from 'react-icons/lu';
import { FaList, FaBox, FaShoppingCart, FaUsers } from 'react-icons/fa';

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { label: 'Dashboard', href: '/', icon: <LuLayoutDashboard size={20} /> },
    { label: 'Category', href: '/category', icon: <FaList size={20} /> },
    { label: 'Products', href: '/products', icon: <FaBox size={20} /> },
    { label: 'Orders', href: '/orders', icon: <FaShoppingCart size={20} /> },
    { label: 'Users', href: '/users', icon: <FaUsers size={20} /> },
  ];

  return (
    <div className='h-full w-[250px] py-4 border-r border-gray-300 bg-blue-700'>
      <div className='px-4 mb-6'>
        <h2 className='text-2xl font-bold tracking-wider'>Admin</h2>
      </div>

      {/* Sidebar Menu */}
      <nav className='flex flex-col gap-2 px-4'>
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 p-2 rounded-md transition-colors
              ${pathname === item.href ? "bg-gray-300 text-black font-semibold" : "hover:text-blue-500"}`}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default Sidebar;
