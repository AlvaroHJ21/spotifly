import React from 'react';
import Sidebar from '../ui/Sidebar';

interface Props {
    children: React.ReactNode | React.ReactNode[];
}

export default function HomeLayout({ children }: Props) {
    return (
        <div className="flex">
            <div className="flex-1">
                <Sidebar />
            </div>
            <div className="flex-[5] bg-gradient-to-t from-[#18181d] via-[#18181d] to-black">{children}</div>
        </div>
    );
}
