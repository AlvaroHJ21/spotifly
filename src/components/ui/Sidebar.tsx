import { IconType } from 'react-icons';
import { MdExplore, MdPhotoAlbum, MdFavorite } from 'react-icons/md';
import { AiFillSound, AiFillFolder, AiFillPlayCircle } from 'react-icons/ai';
import { RiAlbumFill } from 'react-icons/ri';
import { FaMicrophone } from 'react-icons/fa';
import { BiRadio, BiHistory, BiAddToQueue } from 'react-icons/bi';
import Link from 'next/link';

interface SidebarItem {
    name: string;
    icon?: React.ReactNode;
    path?: string;
    active?: boolean;
}

interface SectionSidebarItems {
    category: string;
    items: SidebarItem[];
}

const sections: SectionSidebarItems[] = [
    {
        category: 'Menu',
        items: [
            {
                name: 'Explore',
                icon: <MdExplore />,
                active: true,
                path: "/explore"
            },
            {
                name: 'Geners',
                icon: <AiFillSound />,
            },
            {
                name: 'Albums',
                icon: <RiAlbumFill />,
            },
            {
                name: 'Artists',
                icon: <FaMicrophone />,
            },
            {
                name: 'Radio',
                icon: <BiRadio />,
            },
        ],
    },
    {
        category: 'Library',
        items: [
            {
                name: 'Recent',
                icon: <BiHistory />,
            },
            {
                name: 'Albums',
                icon: <MdPhotoAlbum />,
            },
            {
                name: 'Favorites',
                icon: <MdFavorite />,
            },
            {
                name: 'Local',
                icon: <AiFillFolder />,
            },
        ],
    },
    {
        category: 'Playlist',
        items: [
            {
                name: 'Create New',
                icon: <BiAddToQueue />,
            },
            {
                name: 'Design Flow',
                icon: <AiFillPlayCircle />,
            },
            {
                name: 'Best of 2023',
                icon: <AiFillPlayCircle />,
            },
        ],
    },
];

export default function Sidebar() {
    return (
        <aside className="py-12 text-white min-h-screen bg-[#18181d]">
            <div className="flex flex-col gap-12">
                {/* Logo */}
                <div className="px-12">
                    <h2 className="font-black">
                        Spoti<span className="text-primary">Fly</span>
                    </h2>
                </div>

                {/* Menu */}
                {sections.map(({ category, items }) => (
                    <div key={category} className="">
                        <h3 className="mb-4 text-sm font-semibold text-gray-500 uppercase ps-12">
                            {category}
                        </h3>
                        <div className="flex flex-col gap-2 cursor-pointer">
                            {items.map(({ name, icon, active, path }) => (
                                <Link
                                    href={path ? path : '/'}
                                    key={name}
                                    className={`flex items-center gap-4 ps-12 ${
                                        active ? 'text-primary' : 'text-white'
                                    }`}
                                >
                                    {icon}
                                    <p className="flex-1">{name}</p>
                                    {active && (
                                        <div className="self-stretch w-1 rounded-full bg-primary"></div>
                                    )}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    );
}
