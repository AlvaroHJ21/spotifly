import React from 'react';

interface Artist {
    img: string;
    name: string;
    reproductions: string;
}

const artists: Artist[] = [
    {
        img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        name: 'Travis Scott',
        reproductions: '44M',
    },
    {
        img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        name: 'Travis Scott',
        reproductions: '44M',
    },
    {
        img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        name: 'Travis Scott',
        reproductions: '44M',
    },
    {
        img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        name: 'Travis Scott',
        reproductions: '44M',
    },
    {
        img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        name: 'Travis Scott',
        reproductions: '44M',
    },
    {
        img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        name: 'Travis Scott',
        reproductions: '44M',
    },
];

export default function TopArtists() {
    return (
        <div className="p-6 text-white bg-[#202026] rounded-lg flex flex-col gap-8">
            <header className="flex justify-between">
                <h1>Top Artists</h1>
                <p className='text-sm text-gray-400'>See all</p>
            </header>
            {/* List */}
            <div className="flex gap-6">
                {artists.map((artist, index) => (
                    <Card key={index} artist={artist} />
                ))}
            </div>
        </div>
    );
}
interface Props {
    artist: Artist;
}

export function Card({ artist }: Props) {
    const { img, name, reproductions } = artist;
    return (
        <div className='flex flex-col items-center gap-2'>
            <img className="object-cover w-20 h-16 rounded-lg" src={img} alt="imagen del artista" />
            <div className="flex flex-col items-center">
                <h4 className='text-xs'>{name}</h4>
                <p className="text-[10px] text-gray-400">{reproductions} Plays</p>
            </div>
        </div>
    );
}
