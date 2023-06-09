import Head from "next/head"
import Image from "next/image"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function TourSlug() {
    return (
        <>
            <Head>
                <title>Travell-In</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/image/logo.png" />
            </Head>
            <Navbar />
            <div className="text-[#3D3D3D] md:w-3/5 w-4/5 mx-auto mt-20">
                <Image className="mx-auto rounded-md" src={"/image/Clungup.png"} width={800} height={100} alt={"Gambar"} />
                <div className="p-4">
                    <h1 className="font-bold text-2xl">Clungup Mangrove Conservation (CMC)</h1>
                    <div className="mt-5 mb-10">
                        <p>
                            Waktu Buka: Jum'at-Rabu, 24 Jam
                        </p>
                        <p>
                            Kategori: <a href="" className="underline" >Wisata Bahari</a>, 
                            <a href="" className="underline" >Wisata Keluarga</a>, 
                            <a href="" className="underline" >Wisata Edukasi</a>
                        </p>
                        <p>
                            Lokasi: Jl, Sedang Biru, Tambakrejo, Sumbermanjing Wetan, Kabupaten Malang, Jawa Timur 65176
                        </p>
                    </div>
                    <hr />
                    <h1 className="text-2xl font-bold mt-5 mb-5">Overview</h1>
                    <p className="mb-7">
                        Clungup Mangrove Conservation Tiga Warna (CMC Tiga Warna) terletak di Desa Tambakrejo, Kecamatan Sumbermanjing Wetan, Kabupaten Malang. Ekowisata ini dikelola oleh masyarakat lokal Sendang Biru yang tergabung dalam Yayasan Bhakti Alam Sendang Biru. Jumlah masyarakat yang terlibat mencapai 107 orang
                    </p>
                    <p className="mb-7">
                        Kawasan CMC Tiga Warna dibagi menjadi dua area konservasi yaitu area konservasi Mangrove (Pantai Clungup dan Pantai Gatra) dan area konservasi terumbu karang (Pantai Sapana, Pantai Mini, Pantai Batu Pecah dan Pantai Tiga Warna). Total luasan area mencapai 117 Ha terdiri dari 71 ha mangrove, 10 ha terumbu karang dan 36 ha hutan lindung.
                    </p>
                    <p className="mb-10">
                        Karakteristik destinasi ekowisata CMC Tiga Warna yakni perpaduan antara hutan mangrove  yang menyatu dengan Landscape Underwater Conservation. Dengan karakteristik tersebut wisatawan yang berkunjung ke CMC Tiga Warna akan merasa aman dan menyatu dengan kelestarian alam, jauh dari kebisingan, dan dapat mengoptimalkan private time for gathering.
                    </p>
                </div>
                <div className="flex justify-center mb-9">
                    <button className="text-white p-2 w-4/5 rounded-md bg-[#7db9ff]">Login/Register Untuk Melakukan Pemesanan</button>
                </div>
            </div>
            <Footer />
        </>
    )
}