import { MdFavorite } from 'react-icons/md';

import HomeLayout from '@/components/layouts/HomeLayout';
import Appbar from '@/components/ui/Appbar';
import TopArtists from '@/components/ui/TopArtists';
import Genres from '@/components/ui/Genres';
import TopCharts from '@/components/ui/TopCharts';
import Reproductor from '@/components/ui/Reproductor';

import woman1 from '../../assets/img/woman1.jpg';
import woman2 from '../../assets/img/woman2.jpg';
import woman3 from '../../assets/img/woman3.png';
import woman4 from '../../assets/img/woman4.png';
import woman5 from '../../assets/img/woman5.png';

export default function index() {
    return (
        <HomeLayout>
            <div className="relative flex flex-col min-h-screen">
                <div className='absolute top-0 right-0 z-0 opacity-40'>
                    <img className='w-[400px]' src={woman5.src} alt="" />
                </div>
                <Appbar />
                <div className="z-10 flex flex-col flex-1">
                    {/* Header Texts and buttons */}
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
                            <button className="px-4 py-2 text-sm rounded-full bg-primary">
                                Listen Now
                            </button>
                            <button className="flex items-center justify-center w-8 h-8 border-2 border-white rounded-full text-primary">
                                <MdFavorite size={16} />
                            </button>
                        </div>
                    </div>

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
                </div>
            </div>
        </HomeLayout>
    );
}
