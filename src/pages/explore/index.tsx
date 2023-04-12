import { useEffect } from 'react';

import { HomeLayout } from '@/components/layouts';
import { Appbar, ExploreGrid, ExploreHeader } from '@/components/ui';
import spotifyProvider from '@/providers/spotifyProvider';
import woman5 from '../../assets/img/woman5.png';

export default function index() {
    useEffect(() => {

        spotifyProvider.getTopArtists();

        return () => {};
    }, []);

    return (
        <HomeLayout>
            <div className="relative flex flex-col min-h-screen">
                {/* Imagen de fondo */}
                <div className="absolute top-[-160px] right-0 z-0 opacity-40">
                    <img className="w-[600px]" src={woman5.src} alt="" />
                </div>

                <Appbar />

                <div className="z-10 flex flex-col flex-1">
                    <ExploreHeader />

                    <ExploreGrid />
                </div>
            </div>
        </HomeLayout>
    );
}
