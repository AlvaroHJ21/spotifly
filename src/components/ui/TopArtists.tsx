import { useEffect, useState } from 'react';
import spotifyProvider from '@/providers/spotifyProvider';
import { Artist } from '../../interfaces/ArtistsResponse';

export default function TopArtists() {

    const [topArtists, setTopArtists] = useState<Artist[]>([])

    useEffect(() => {

        spotifyProvider.getTopArtists().then((data: Artist[]) => setTopArtists([...data]));

        return () => {};
    }, []);


    return (
        <div className="p-6 text-white bg-[#202026] rounded-lg flex flex-col gap-8">
            <header className="flex justify-between">
                <h1>Top Artists</h1>
                <p className='text-sm text-gray-400'>See all</p>
            </header>
            {/* List */}
            <div className="flex gap-6">
                {topArtists.map((artist, index) => (
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
    const { name } = artist;
    return (
        <div className='flex flex-col items-center gap-2'>
            <img className="object-cover w-20 h-16 rounded-lg" src={artist.images[1].url} alt="imagen del artista" />
            <div className="flex flex-col items-center">
                <h4 className='text-xs'>{name}</h4>
                <p className="text-[10px] text-gray-400">Popularity: {artist.popularity}</p>
            </div>
        </div>
    );
}
