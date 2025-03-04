import React from 'react'

const Projects = () => {
    return (
        <div className='w-full lg:w-[70%] flex flex-col items-center bg-gray-800 text-white md:m-4 mt-2 rounded-lg md:xl'>
            <div className='flex flex-col w-full lg:p-6'>
                <div className='flex  py-6  border-b border-gray-700 justify-around'>
                    <h1 className='text-lg md:text-2xl font-bold w-[30%] '>Project Name</h1>
                    <h1 className='text-lg md:text-2xl font-bold w-[30%] '>Technologies</h1>
                </div>
                <div className='flex  py-6 border-b border-gray-700 justify-around'>
                    <h1 className='text-lg md:xl w-[30%] '>Event Management</h1>
                    <h1 className='text-lg md:xl w-[30%] '>HTML, CSS, JavaScript</h1>
                </div>
                <div className='flex  py-6 border-b border-gray-700 justify-around'>
                    <h1 className='text-lg md:xl w-[30%] '>Calculator</h1>
                    <h1 className='text-lg md:xl w-[30%] '>HTML, CSS, JavaScript</h1>
                </div>
                <div className='flex py-6 justify-around'>
                    <h1 className='text-lg md:xl w-[30%] '>Portfolio</h1>
                    <h1 className='text-lg md:xl w-[30%] '>React, Tailwind</h1>
                </div>
            </div>
        </div >
    )
}

export default Projects