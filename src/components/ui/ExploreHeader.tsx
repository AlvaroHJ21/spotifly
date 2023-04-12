import React from 'react';

import { MdFavorite } from 'react-icons/md';

export default function ExploreHeader() {
    return (
        <div className="flex flex-col gap-8 px-8 py-8 pb-12 text-white">
            <h2 className="">Trending New Hits</h2>

            <div className="flex flex-col gap-4 ps-4">
                <h1 className="text-5xl font-bold">In My Feelings</h1>
                <div className="flex gap-4">
                    <p className="">Camila Cabello</p>{' '}
                    <p className="text-gray-500">63 Million Plays</p>
                </div>
            </div>

            <div className="flex gap-4 ps-4">
                <button className="px-4 py-2 text-sm rounded-full bg-primary">Listen Now</button>
                <button className="flex items-center justify-center w-8 h-8 border-2 border-white rounded-full text-primary">
                    <MdFavorite size={16} />
                </button>
            </div>
        </div>
    );
}
