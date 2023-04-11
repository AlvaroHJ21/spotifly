import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import spotifyApi from '../../api/spotifyApi';

export default function login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log({
            email,
            password,
        });

        await spotifyApi.getToken();
        
        router.replace("/home")
        
    }

    return (
        <div className="">
            <div className="flex flex-col min-h-screen justify-center gap-8 items-center m-auto w-[400px]">
                <h1 className="text-6xl font-bold text-white">
                    Spoti<span className="text-primary">Fly</span>
                </h1>

                {/* Button */}
                <button className="flex items-center justify-center w-full gap-4 py-2 font-semibold bg-white rounded-md shadow-lg">
                    <FcGoogle size={24} />
                    Sign in with Google
                </button>

                {/* Separator */}
                <div className="flex items-center w-full gap-2 text-gray-500">
                    <div className="h-[1px] flex-1 bg-gray-500"></div>
                    OR
                    <div className="h-[1px] flex-1 bg-gray-500"></div>
                </div>

                {/* Form */}
                <div className="w-full">
                    <form onSubmit={handleSubmit} className="flex flex-col w-full gap-8">
                        <input
                            className="px-4 py-2 bg-[#333333] text-white outline-none placeholder:text-gray-400"
                            type="text"
                            placeholder="Email or username"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            className="px-4 py-2 bg-[#333333] text-white outline-none placeholder:text-gray-400"
                            type="text"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        {/* Remember me */}
                        <div className="flex items-center justify-between w-full">
                            <p className="text-gray-300">Remember me</p>

                            <div className="flex justify-end w-10 h-6 rounded-full bg-primary">
                                <div className="w-6 h-6 bg-white rounded-full"></div>
                            </div>
                        </div>

                        {/* Button Login */}
                        <button
                            className="py-2 font-semibold text-white uppercase rounded-full bg-primary"
                            type="submit"
                        >
                            Login in
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
