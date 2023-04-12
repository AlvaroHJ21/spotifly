import { FormEvent, useState, useEffect } from 'react';

import { BiSearch } from 'react-icons/bi';
import { MdClose } from 'react-icons/md';
import { useDebounce } from 'use-debounce';

import spotifyProvider from '@/providers/spotifyProvider';
import { Track } from '@/interfaces/TracksResponse';

export default function InputSearch() {
    const [query, setQuery] = useState('');

    const [value] = useDebounce(query, 300);

    const [results, setResults] = useState<Track[]>([]);

    const [isClearTextVisible, setIsClearTextVisible] = useState(false)

    useEffect(() => {
        if (query.length === 0) setResults([]);
        if (query.length > 0) setIsClearTextVisible(true);
    }, [query])
    

    useEffect(() => {
        if(value.length === 0) return;
        spotifyProvider.searchTracks(value).then((res: Track[]) => setResults([...res]));
        return () => {};
    }, [value])
    

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(query);
        spotifyProvider.searchTracks(query).then((res: Track[]) => setResults([...res]));
    }

    function handleClearText() {
        setQuery('');
        setResults([]);
        setIsClearTextVisible(false);
    }

    return (
        <div className="relative flex flex-col">
            <form onSubmit={handleSubmit} className="relative flex items-center">
                <input
                    type="text"
                    className="w-full px-4 py-2 pl-12 bg-[#1d1d1d] border-[1px] border-gray-500 rounded-md outline-none placeholder:text-sm"
                    placeholder="Type her to seach"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <BiSearch size={16} className="absolute left-0 ml-4" />
                {isClearTextVisible && <MdClose onClick={handleClearText} size={16} className="absolute right-0 mr-4 cursor-pointer" />}
                
            </form>
            {query.length > 0 && (
                <div className="absolute p-8 bg-black rounded-lg shadow-lg top-12 w-[500px] -left-20 flex flex-col gap-4">
                    Resultados
                    {results.map((track) => (
                        <ChartItem key={track.id} track={track} />
                    ))}
                </div>
            )}
        </div>
    );
}

interface Props {
    track: Track;
}

function ChartItem({ track }: Props) {
    return (
        <div className="flex items-center gap-4 cursor-pointer">
            {/* <p>01</p> */}
            <img
                className="object-cover w-12 h-12 rounded-lg"
                src={track.album.images[0].url}
                alt=""
            />
            <div className="flex flex-col flex-1">
                <h2>{track.name}</h2>
                <p className='text-xs'>{track.artists[0].name}</p>
            </div>
            <p>3:45</p>
        </div>
    );
}
