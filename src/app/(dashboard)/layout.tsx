'use client'

import { useEffect } from 'react';
import { useAuth } from '@/context/auth.context';
import { useRouter } from 'next/navigation';
import SideBar from '@/components/layout/sidebar';
import Header from '@/components/ui/header';

interface IProps {
    children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
    const { isAuthenticated } = useAuth();
    const router = useRouter();

    // Run the redirect on the client-side only
    useEffect(() => {
        if (!isAuthenticated) {
            router.replace('/login');
        }
    }, [isAuthenticated, router]);

    return (
        <div className='flex h-full w-full'>
            <div className='h-full w-[250px] border-r border-gray-400'>
                {/* <Header /> */}
                <SideBar />
            </div>
            <div className='mb-10 w-full flex flex-col flex-1'>
                <Header/>
                <div className='flex-1'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;
