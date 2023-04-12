import Link from 'next/link';
import { BiSearch } from 'react-icons/bi';
import { IoMdNotifications } from 'react-icons/io';
import { MdSettings } from 'react-icons/md';
import { useEffect, useState } from 'react';
import spotifyProvider from '@/providers/spotifyProvider';
import { UserResponse } from '../../interfaces/UserResponse';
import InputSearch from './InputSearch';

export default function Appbar() {

    const [user, setUser] = useState<UserResponse>();

    useEffect(() => {
        
        spotifyProvider.getMyInfo().then((user: UserResponse) => setUser(user));
    
      return () => {
        
      }
    }, [])
    
    return (
        <div className="relative z-50 flex items-center justify-between px-8 py-4 text-white">
            <div className="flex items-center gap-12">
                {/* nav links */}
                <nav className="flex gap-6">
                    <Link
                        href={'/explore'}
                        className="text-sm font-semibold uppercase text-primary"
                    >
                        music
                    </Link>
                    <Link
                        href={'/explore'}
                        className="text-sm font-semibold text-gray-400 uppercase"
                    >
                        podcast
                    </Link>
                    <Link
                        href={'/explore'}
                        className="text-sm font-semibold text-gray-400 uppercase"
                    >
                        live
                    </Link>
                </nav>

                {/* Input Search */}
                <InputSearch />
            </div>

            {/* Notification Settings and Perfil */}
            <div className="flex items-center gap-4">
                <div className="relative">
                    <IoMdNotifications className="cursor-pointer" size={24} />
                    <div className="absolute top-0 right-0 w-3 h-3 rounded-full bg-primary"></div>
                </div>
                <MdSettings className="cursor-pointer" size={24} />
                <div className="bg-[#25252d] flex items-center rounded-md overflow-hidden cursor-pointer">
                    <div className="p-2 bg-[#32323d] rounded-md">
                        <img
                            className="object-cover w-8 h-8 rounded-md"
                            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                            alt="perfil"
                        />
                    </div>
                    <div className="p-2">
                        <p>{user?.display_name}</p>
                        <p className="text-[12px] text-gray-400">{user?.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
