'use client'

import { useEffect } from 'react';
import { useAuth } from '@/src/context/auth.context';
import { useRouter } from 'next/navigation';
import SideBar from '@/src/components/layout/sidebar';
import Header from '@/src/components/ui/header';

interface IProps {
    children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
    const { isAuthenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated) {
            router.replace('/login');
        }
    }, [isAuthenticated, router]);

    return (
        <div className="flex h-screen w-screen overflow-y-clip">
            {/* Sidebar */}
            <div className=" w-[250px] border-r border-gray-300 bg-white">
                <SideBar />
            </div>

            {/* Main Content */}
            <div className="flex  overflow-auto flex-col flex-1 h-full">
                <Header />

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;
