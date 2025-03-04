import React from 'react'

const Profile = () => {
    return (
        <div className='w-full lg:w-[30%] h-[450px] flex flex-col items-center p-5 bg-gray-800 text-white md:m-4 mt-2 rounded-xl'>
            {/* <h2>Profile</h2> */}
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="" className='w-40 rounded-xl' />
            <h1 className='text-3xl font-bold mt-5'>Abhishek Ghuge</h1>
            <h1 className='text-xl  mt-5 text-gray-200'>Front End Developer</h1>
            <h1 className='text-xl  mt-5 text-gray-200'>Chh Sambhaji Nagar, Maharashtra</h1>
            <div className='mt-5'>
                <button className='bg-blue-700 py-1 px-4 border border-blue-700 rounded-md mr-3'>Follow</button>
                <button className='bg-white text-blue-700 border-2 border-blue-700 py-1 px-4 rounded-md'>Message</button>

            </div>
        </div>
    )
}

export default Profile