import React, { useState } from 'react'

import { BiSearch } from 'react-icons/bi';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

import { SpotifySearchResponse } from '../../interfaces/SearchSpotifyResponse';
import HomeLayout from '../../components/layouts/HomeLayout';

async function getDataByQuery(query: string): Promise<SpotifySearchResponse> {
    const API = 'https://api.spotify.com/v1/search';
    const resp = await fetch(API + `?q=${query}&type=album,track`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization:
                'Bearer BQCKiwk6dYGtYQVhLEeid5-1OFB2XPsyox83fEHosCp1MYvyynm8Kw0Iw9U4msFlWxKDFWK5dOxQkWD2gy59Z47_zhFJy1Pbvte5fgKmUrKWFJD0T2Z9',
        },
    });
    const data: SpotifySearchResponse = await resp.json();
    console.log(data);
    return data;
}

export default function index() {

    const [query, setQuery] = useState('');
    const [data, setData] = useState<SpotifySearchResponse>();
    const [favorites, setFavorites] = useState<string[]>([]);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (query.length > 0) {
            //Busqueda
            setData(await getDataByQuery(query));
        }
    }

    function handleToggleFavorite(id: string) {
        //ver si existe en el arreglo
        if (favorites.includes(id)) {
            setFavorites(favorites.filter((f) => f !== id));
        } else {
            setFavorites([...favorites, id]);
        }
    }
  return (
    <HomeLayout>


        {/* Content */}
        <div className="container w-[90%] m-auto py-8 dark:text-white">
        <div className="flex flex-col gap-4">
            <form onSubmit={handleSubmit} className="w-full">
                <div className="relative flex items-center">
                    <input
                        type="text"
                        className="w-full px-4 py-2 pl-12 bg-transparent border-2 border-gray-200 rounded-full outline-none"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <BiSearch size={24} className="absolute left-0 ml-4" />
                </div>
                {/* <div>
                    <select name="type" id="type">
                        <option value="album">Album</option>
                        <option value="track">Canción</option>
                    </select>
                </div> */}
            </form>
            <p className="py-4">
                Resultados de: <span className="font-bold">{query}</span>
            </p>
        </div>
        <div className="flex flex-col md:flex-row md:gap-4">
            <div className="md:flex-1">
                <h2 className="mb-2 text-2xl font-black">Albums</h2>
                <div className="space-y-4">
                    {data?.albums.items.map((item) => (
                        <div
                            key={item.id}
                            className="flex overflow-hidden rounded-md shadow-md backdrop-blur-sm"
                        >
                            <div className="w-32 h-32 shrink-0">
                                <img
                                    className="w-full h-full"
                                    src={item.images[0].url}
                                    alt=""
                                    width={item.images[0].width}
                                    height={item.images[0].height}
                                />
                            </div>
                            <div className="flex-1 p-4">
                                <h3 className="font-bold">{item.name}</h3>
                                <div className="flex">
                                    {item.artists.map((artist, index) => {
                                        if (index == item.artists.length - 1) {
                                            return <p key={artist.id}>{artist.name}</p>;
                                        }
                                        return <p key={artist.id}>{artist.name}, </p>;
                                    })}
                                </div>
                            </div>
                            <div className="p-4 pl-0">
                                {favorites.includes(item.id) ? (
                                    <MdFavorite
                                        onClick={() => handleToggleFavorite(item.id)}
                                        size={24}
                                        className="cursor-pointer"
                                    />
                                ) : (
                                    <MdFavoriteBorder
                                        onClick={() => handleToggleFavorite(item.id)}
                                        size={24}
                                        className="cursor-pointer"
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="md:flex-1">
                <h2 className="mb-2 text-2xl font-black">Canciones</h2>
                <div className="space-y-4">
                    {data?.tracks.items.map((item) => (
                        <div
                            key={item.id}
                            className="flex overflow-hidden rounded-md shadow-md backdrop-blur-sm"
                        >
                            <div className="w-32 h-32 shrink-0">
                                <img
                                    className="w-full h-full"
                                    src={item.album.images[1].url}
                                    alt=""
                                    width={item.album.images[1].width}
                                    height={item.album.images[1].height}
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold">{item.name}</h3>
                                <div className="flex">
                                    {item.artists.map((artist, index) => {
                                        if (index == item.artists.length - 1) {
                                            return <p key={artist.id}>{artist.name}</p>;
                                        }
                                        return <p key={artist.id}>{artist.name}, </p>;
                                    })}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    </HomeLayout>
    
);
}
