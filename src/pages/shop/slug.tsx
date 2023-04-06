import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function ShopSlug() {
    return (
        <>
            <Head>
                <title>Travell-In</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/image/logo.png" />
            </Head>
            <Navbar />
            <div className='md:flex w-3/5 mx-auto text-[#3D3D3D] mt-10'>
                <div className='flex justify-center'>
                <Image className='border rounded-xl ' src={'/image/Baju.png'} alt={'Kaos'} width={200} height={200} />
                </div>
                <div className='md:pl-6 flex flex-col justify-center md:mt-0 mt-4'>
                    <h1 className='font-bold'>Kaos Pantai Pacitan Paradise</h1>
                    <h1 className='text-[#7db9ff] font-bold mt-3 mb-3'>Rp75.000</h1>
                    <p className='text-sm'>10 Terjual-Dikirim dari Pacitan</p>
                    <p className='text-sm'>Pilihan Size:M,L,XL</p>
                    <p className='text-sm'>Pilihan Warna:Navy, Hitam, Putih, Biru, Turkish, Misty</p>
                </div>
            </div>
            <div className='border rounded-xl md:w-3/5 w-4/5 mx-auto mt-5 mb-5 p-4'>
                <h3>Deskripsi Produk</h3>
                <br />
                <p>Bahan Combed 30s</p>
                <p>Sablon plastisol</p>
                <br />
                <p>Spesifikasi Produk:</p>
                <p>-Model: O neck short sleeve</p>
                <p>Pala: Regular Fit</p>
                <p>-Gender: Unisex</p>
                <br />
                <p>-Kain: 100% cotton combed 30s</p>
                <p>-Handfeel: Supersoft</p>
                <p>-Gramasi: 150-160 gr/m2</p>
                <br />
                <p>Spesifikasi Jahitan:</p>
                <p>-Pundak jahit double rantai</p>
                <p>BIS jahit double stick</p>
                <p>-Obras rapi dan kuat</p>
            </div>
            <div className="flex justify-center mb-9">
                <button className="text-white p-2 md:w-1/2 w-4/5 rounded-md bg-[#7db9ff]">Login/Register Untuk Melakukan Pemesanan</button>
            </div>
            <Footer />
        </>
    )
}