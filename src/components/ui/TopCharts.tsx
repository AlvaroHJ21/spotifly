import { BsFillPlayFill } from 'react-icons/bs';
import { MdAddBox } from 'react-icons/md';
import { useEffect, useState } from 'react';
import spotifyProvider from '@/providers/spotifyProvider';
import { Track } from '@/interfaces/TracksResponse';

export default function TopCharts() {

    const [tracks, setTracks] = useState<Track[]>([])

    useEffect(() => {

        spotifyProvider.getTopTracks().then((data: Track[]) => setTracks([...data]));

        return () => {};
    }, []);

    return (
        <div className="p-6 text-white bg-[#202026] rounded-lg flex flex-col gap-8">
            <header className="flex justify-between">
                <h1>Top Charts</h1>
                <p className="text-sm text-gray-400">See all</p>
            </header>
            <div className="flex flex-col gap-4">
                {tracks.map((track, index) => (
                    <ChartItem key={track.id} track={track} />
                ))}
            </div>
        </div>
    );
}

interface Props {
    track: Track;
}

function ChartItem({ track }: Props) {
    return (
        <div className="flex items-center gap-4">
            <p>01</p>
            <img
                className="object-cover w-12 h-12 rounded-lg"
                src={track.album.images[0].url}
                alt=""
            />
            <div className="flex flex-col flex-1">
                <h2>{track.name}</h2>
                <p>{track.artists[0].name}</p>
            </div>
            <p>3:45</p>
            <div className="border-[1px] border-gray-400 text-primary w-8 h-8 flex justify-center items-center rounded-lg">
                <BsFillPlayFill />
            </div>
            <MdAddBox />
        </div>
    );
}
