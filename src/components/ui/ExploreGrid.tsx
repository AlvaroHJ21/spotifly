import { useEffect, useState } from 'react';

import Genres from './Genres';
import Reproductor from './Reproductor';
import TopArtists from './TopArtists';
import TopCharts from './TopCharts';
import spotifyProvider from '@/providers/spotifyProvider';

export default function ExploreGrid() {
    return (
        <div className="flex flex-1 gap-6 px-8 ">
            <div className="flex flex-col gap-6 flex-[3]">
                {/* Top Artists */}
                <div className="">
                    <TopArtists />
                </div>

                <div className="flex gap-6">
                    {/* Genres */}
                    <div className="flex-[2]">
                        <Genres />
                    </div>
                    {/* Top Charts */}
                    <div className="flex-[3]">
                        <TopCharts />
                    </div>
                </div>
            </div>

            {/* Reproductor */}
            <div className="flex-[2]">
                <Reproductor />
            </div>
        </div>
    );
}
