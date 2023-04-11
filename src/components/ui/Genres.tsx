import React from 'react';

export default function Genres() {
    return (
        <div className="p-6 text-white bg-[#202026] rounded-lg flex flex-col gap-8">
            <header className="flex justify-between">
                <h1>Genres</h1>
                <p className="text-sm text-gray-400">See all</p>
            </header>
            <div className='flex flex-col gap-4 font-bold'>
                <div className='flex gap-4'>
                    <div className='flex-1 px-6 py-4 bg-[#476A88] rounded-lg'>Dance Beat</div>
                    <div className='flex-1 px-6 py-4 bg-[#A59983] rounded-lg'>Electro Pop</div>
                </div>
                <div className='flex gap-4'>
                    <div className='flex-[2] py-4 px-6 bg-[#A24C33] rounded-lg'>Alternative Indie</div>
                    <div className='flex-1 px-6 py-4 rounded-lg bg-[#0D4044]'>Hip Hop</div>
                </div>
                <div className='flex gap-4'>
                    <div className='flex-1 px-6 py-4 rounded-lg bg-[#A87794]'>Classical Period</div>
                    <div className='flex-1 px-6 py-4 rounded-lg bg-[#5546AA]'>Hip Hop Rap</div>
                </div>
            </div>
        </div>
    );
}
