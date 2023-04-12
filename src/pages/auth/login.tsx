import { useRouter } from 'next/router';
import { FormEvent, useState, useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';

const client_id = 'e6cada96b034423ab1267abc6a495bf3';
const client_secret = '03262928f72e42958889c0e9240c9584';
const redirect_uri = 'https://spotifly-dusky.vercel.app/auth/login';
const scopes =
    'user-read-private user-read-email playlist-read-private user-top-read user-read-recently-played';
const spoty_url = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=${redirect_uri}&scope=${scopes}`;

export default function login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const spotyCode = urlParams.get('code');
        if (spotyCode) {
            autenticateUser(spotyCode);
        }
    }, []);

    const autenticateUser = (spotyCode: string) => {
        try {
            // console.log(spotyCode);
            const searchParams = new URLSearchParams({
                grant_type: 'authorization_code',
                code: spotyCode,
                redirect_uri: redirect_uri,
                client_id: client_id,
                client_secret: client_secret,
            });
            // console.log(searchParams);

            fetch('https://accounts.spotify.com/api/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                },
                body: searchParams,
            })
                .then((response) => response.json())

                // axios.post("https://accounts.spotify.com/api/token", searchParams)

                .then((res) => {
                    // Global.access_token = res.data.access_token
                    // Global.refresh_token = res.data.refresh_token
                    console.log(res);
                    localStorage.setItem('access_token', res.access_token);
                    localStorage.setItem('refresh_token', res.refresh_token);

                    // navigate("/playlists");
                    router.replace("/explore");

                    // window.location.replace("/playlists?access_token="+Global.access_token);
                });
        } catch (error) {
            console.log(error);
        }
    };

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log({
            email,
            password,
        });

        // await spotifyApi.getToken();

        // router.replace("/home")

        window.location.replace(spoty_url);
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
