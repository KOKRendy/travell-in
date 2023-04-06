import Image from 'next/image'
import Link from "next/link";
import { Router, useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter()
    return (
        <nav className='flex justify-center items-center w-screen relative p-4'>
            <a href="/" className='mr-auto md:pl-10 flex items-center'>
                <Image src={'/image/logo.png'} width={40} height={40} alt={''} />
                <h1 className='text-3xl font-bold text-[#3D3D3D]'>Travell-In</h1>
            </a>
            <div className='absolute md:block hidden'>
                <div className={router.pathname == '/login' ? "hidden" : ""}>
                    <div className={router.pathname == '/register' ? "hidden" : ""}>
                        <ul className='flex text-center gap-3 text-[#3D3D3D]'>
                            <li className={router.pathname == '/tour' ? "text-[#7db9ff]" : ""}>
                                <Link href={'/tour'}>
                                    Tour
                                </Link>
                            </li>
                            <li className={router.pathname == '/shop' ? "text-[#7db9ff]" : ""}>
                                <Link href={'/shop'}>
                                    Shop
                                </Link>
                            </li>
                            <li className={router.pathname == '/gallery' ? "text-[#7db9ff]" : ""}>
                                <Link href={'/gallery'}>
                                    Gallery
                                </Link>
                            </li>
                            <li className={router.pathname == '/about' ? "text-[#7db9ff]" : ""}>
                                <Link href={'/about'}>
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={'ml-auto md:block hidden'}>
                <a className='m-4 text-[#7db9ff]' href="">Sign in</a>
                <button className='bg-[#7db9ff] p-1 rounded-xl text-white'>Create An Account</button>
            </div>
        </nav>
    )
}