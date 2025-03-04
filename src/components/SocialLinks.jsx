import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

const SocialLinks = () => {
    return (
        <div className='w-full lg:w-[30%] h-72 flex flex-col  p-5 bg-gray-800 text-white md:m-4 mt-2 rounded-xl'>
            <div className='flex items-center mt-5 '>
                <FaGithub className='text-2xl' />
                <h1 className='pl-3 text-xl '>Github</h1>
            </div>
            <div className='flex items-center mt-5 '>
                <FaSquareInstagram className='text-2xl' />
                <h1 className='pl-3 text-xl'>Instagram</h1>
            </div>
            <div className='flex items-center mt-5 '>
                <FaYoutube className='text-2xl' />
                <h1 className='pl-3 text-xl'>Youtube</h1>
            </div>
            <div className='flex items-center mt-5 '>
                <FaLinkedin className='text-2xl' />
                <h1 className='pl-3 text-xl'>LinkedIn</h1>
            </div>
            <div className='flex items-center mt-5 '>
                <CgWebsite className='text-2xl' />
                <h1 className='pl-3 text-xl'>Website</h1>
            </div>
        </div>
    )
}

export default SocialLinks