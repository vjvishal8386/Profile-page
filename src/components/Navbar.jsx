import React from 'react'

const Navbar = () => {
  return (
    <div className='  flex  items-center p-5 bg-gray-800 text-cyan-500 md:m-4 mt-2 rounded-xl'>
        <h2>Home /</h2>
        <h2 className='ml-1'>User /</h2>
        <h2 className='ml-1 text-gray-500'>User Profile</h2>
    </div>
  )
}

export default Navbar