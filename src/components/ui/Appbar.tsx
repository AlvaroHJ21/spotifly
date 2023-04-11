import Link from 'next/link';
import { BiSearch } from 'react-icons/bi';
import { IoMdNotifications } from 'react-icons/io';
import { MdSettings } from 'react-icons/md';

export default function Appbar() {
    return (
        <div className="z-10 flex items-center justify-between px-8 py-4 text-white">
            <div className="flex items-center gap-12">
                {/* nav links */}
                <nav className="flex gap-6">
                    <Link href={'/explore'} className="text-sm font-semibold uppercase text-primary">
                        music
                    </Link>
                    <Link href={'/explore'} className="text-sm font-semibold text-gray-400 uppercase">
                        podcast
                    </Link>
                    <Link href={'/explore'} className="text-sm font-semibold text-gray-400 uppercase">
                        live
                    </Link>
                </nav>

                {/* Input Search */}
                <div className="relative flex items-center">
                    <input
                        type="text"
                        className="w-full px-4 py-2 pl-12 bg-[#1d1d1d] border-[1px] border-gray-500 rounded-md outline-none placeholder:text-sm"
                        placeholder="Type her to seach"
                        // value={query}
                        // onChange={(e) => setQuery(e.target.value)}
                    />
                    <BiSearch size={16} className="absolute left-0 ml-4" />
                </div>
            </div>

            {/* Notification Settings and Perfil */}
            <div className="flex items-center gap-4">
                <div className='relative'>
                    <IoMdNotifications className="cursor-pointer" size={24} />
                    <div className='absolute top-0 right-0 w-3 h-3 rounded-full bg-primary'></div>
                </div>
                <MdSettings className="cursor-pointer" size={24} />
                <div className="bg-[#25252d] flex items-center rounded-md overflow-hidden cursor-pointer">
                    <div className="p-2 bg-[#32323d] rounded-md">
                        <img
                            className="object-cover w-8 h-8 rounded-md"
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                            alt="perfil"
                        />
                    </div>
                    <div className="p-2">
                        <p>Emily Isabella</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
