import { BsFillPlayFill } from 'react-icons/bs';
import { MdAddBox } from 'react-icons/md';

export default function TopCharts() {
    return (
        <div className="p-6 text-white bg-[#202026] rounded-lg flex flex-col gap-8">
            <header className="flex justify-between">
                <h1>Top Charts</h1>
                <p className="text-sm text-gray-400">See all</p>
            </header>
            <div className='flex flex-col gap-4'>
                <ChartItem />
                <ChartItem />
                <ChartItem />
                <ChartItem />
            </div>
        </div>
    );
}

function ChartItem() {
    return (
        <div className="flex items-center gap-4">
            <p>01</p>
            <img
                className="object-cover w-12 h-12 rounded-lg"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                alt=""
            />
            <div className="flex flex-col flex-1">
                <h2>Havana</h2>
                <p>Camila Cabello</p>
            </div>
            <p>3:45</p>
            <div className="border-[1px] border-gray-400 text-primary w-8 h-8 flex justify-center items-center rounded-lg">
                <BsFillPlayFill />
            </div>
            <MdAddBox />
        </div>
    );
}
