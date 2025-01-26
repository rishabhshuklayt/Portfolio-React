import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { GoLinkExternal } from "react-icons/go";

function Card({title, discription, live, github}) {
  return (
    <>
    <div className='bg-gray-200 p-5  m-5 rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
        <h1 className='text-xl'>{title}</h1>
        <p className='text-sm font-light mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error quia vero corporis itaque deserunt similique aspernatur et vitae, nesciunt perspiciatis.</p>
        <div className='mt-2 flex gap-2 justify-end'>
        <button className='bg-black text-white p-2 rounded-lg  '><GoLinkExternal /></button>
        <button className='bg-black text-white p-2 rounded-lg  '><FaGithub /></button>
        </div>
    </div>
    </>
  )
}

export default Card