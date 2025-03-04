import React from 'react'

const UserInfo = () => {
    const UserData = 
        {
            name: 'Abhishek Ghuge',
            email: 'abhi420@gmail.com',
            phone: '1234567890',
            role: 'Front End Developer',
            location: 'Chh Sambhaji Nagar, Maharashtra',
        }
    

  return (
    <div className='w-full lg:w-[70%] h-[450px] flex flex-col items-center bg-gray-800 text-white md:m-4 mt-2 rounded-xl'>
            <div className='flex w-full p-7 border-b border-gray-700'>
                <h1 className='text-xl md:text-2xl font-bold w-[30%] '>Full Name</h1>
                <h1 className='text-xl w-[70%]'>{UserData.name}</h1>
            </div>
            <div className='flex w-full p-7 border-b border-gray-700'>
                <h1 className='text-xl md:text-2xl font-bold w-[30%] '>Email</h1>
                <h1 className='text-xl w-[70%]'>{UserData.email}</h1>
            </div>
            <div className='flex w-full p-7 border-b border-gray-700'>
                <h1 className='text-xl md:text-2xl font-bold w-[30%] '>Phone</h1>
                <h1 className='text-xl w-[70%]'>{UserData.phone}</h1>
            </div>
            <div className='flex w-full p-7 border-b border-gray-700'>
                <h1 className='text-xl md:text-2xl font-bold w-[30%] '>Role</h1>
                <h1 className='text-xl w-[70%]'>{UserData.role}</h1>
            </div>
            <div className='flex w-full p-7 '>
                <h1 className='text-xl md:text-2xl font-bold w-[30%] '>Location</h1>
                <h1 className='text-xl w-[70%]'>{UserData.location}</h1>
            </div>
    </div>
  )
}

export default UserInfo