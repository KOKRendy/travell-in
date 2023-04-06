export default function Footer() {
    return (
        <div className='bg-[#558fd2] p-10 flex flex-col items-center'>
            <input type="text" className='rounded-md md:w-1/2 p-2' placeholder='insertyouremail@gmail.com' />
            <div className='flex md:flex-row flex-col p-4'>
                <button className='bg-white text-[#2475d2] p-2 m-2 rounded-full'>Create New Account</button>
                <button className='bg-[#2475d2] text-white p-2 m-2 rounded-full'>Login to Exiting Account</button>
            </div>
            <div className='text-center text-white'>
                <p>Design Damarbumi, Creator of this website Rendy</p>
                <h1 className='font-bold text-3xl'>Travell-in</h1>
            </div>
        </div>
    )
}