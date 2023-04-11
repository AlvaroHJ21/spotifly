import { MdOutlineQueueMusic, MdKeyboardArrowUp } from 'react-icons/md';
import { BsFillPlayFill } from 'react-icons/bs';
import { FiRepeat } from 'react-icons/fi';
import { TbPlayerSkipBackFilled, TbPlayerSkipForwardFilled, TbArrowsCross } from 'react-icons/tb';

export default function Reproductor() {
    return (
        <div className="text-white bg-[#202026] rounded-lg overflow-hidden flex flex-col gap-8">
            <header className="flex justify-between p-6 ">
                <h1>Player</h1>
                <MdOutlineQueueMusic size={24}/>
            </header>
            <div className="flex flex-col items-center gap-8">
                <img
                    className="h-40 rounded-lg w-60"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    alt=""
                />
                <div className="text-center">
                    <h1 className="text-3xl">Butterfly Effect</h1>
                    <p className="text-xl">Travis Scott</p>
                    <p className="text-sm">Best of 2020</p>
                </div>

                {/* Time Line */}
                <div className="flex w-full max-w-sm gap-8">
                    <p>2:45</p>
                    <div className="flex items-center flex-1">
                        <div className="flex-1 h-1 bg-white"></div>
                        <div className="w-6 h-6 border-4 border-white rounded-full"></div>
                        <div className="flex-1 h-1 bg-gray-500"></div>
                    </div>
                    <p>1:02</p>
                </div>

                {/* Player Controllers */}
                <div className="flex flex-col w-full gap-4 pt-8 pb-6 bg-primary">
                    <div className="flex items-center justify-center gap-8">
                        <FiRepeat size={24} className="cursor-pointer"/>
                        <TbPlayerSkipBackFilled size={24} className="cursor-pointer"/>
                        <div className="flex items-center justify-center w-12 h-12 bg-white rounded-lg text-primary">
                            <BsFillPlayFill size={24} className="cursor-pointer"/>
                        </div>
                        <TbPlayerSkipForwardFilled size={24} className="cursor-pointer"/>
                        <TbArrowsCross size={24} className="cursor-pointer"/>
                    </div>
                    <div className="flex flex-col items-center cursor-pointer">
                        <MdKeyboardArrowUp />
                        <p className="text-sm font-semibold uppercase">Lyrics</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
