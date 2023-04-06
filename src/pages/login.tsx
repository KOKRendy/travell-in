import Head from "next/head"
import Navbar from "@/components/Navbar"

export default function Login() {
    return (
        <>
            <Head>
                <title>Travell-In</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/image/logo.png" />
            </Head>
            <Navbar />
            <div className="bg-[url(/image/background.png)] bg-[center_top_1rem] h-[85vh] md:bg-[length:850px_500px] bg-[length:600px_500px] bg-no-repeat flex justify-center items-center text-[#3D3D3D] md:p-0 p-3">
                <div className="border rounded-xl md:w-[30%] md:h-max bg-white text-center p-6 shadow-xl">
                    <div className="w-4/5 h-full mx-auto flex flex-col justify-center">
                        <h1 className="text-2xl font-bold mb-3">User Login</h1>
                        <p className="text-sm mb-10">Hey, masukan detail informasimu untuk melakukan aktivitas sign in</p>
                        <input type="email" placeholder="Masukan Email" className="border p-2 rounded-md mb-3" />
                        <input type="password" placeholder="Password" className="border p-2 rounded-md mb-10"/>
                        <button className="p-2 border rounded-md bg-[#7db9ff] text-white">Sign In</button>
                        <p className="text-xs mt-6">Belum memiliki akun? <b className="font-bold">Buat Sekarang!</b></p>
                    </div>
                </div>
            </div>
        </>
    )
}