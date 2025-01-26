import React from 'react'
import Socials from './Socials'

function Contact() {
  return (
    <>
    <div className='text-center  p-5 mt-5'>
        <h1>Get in touch</h1>
        <p className='text-sm font-light p-4' >Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at : rishabhshuklayt@gmail.com</p>
       <a href="mailto:rishabhshuklayt@gmail.com"> <button className='bg-gray-300 text-sm font-light rounded-lg p-2'>Email me !</button></a>  
        

          
        {/* <p className='text-sm font-light p-4'>Connect with me on social media</p> */}
        <div className='flex justify-center'>
        <Socials />
        </div>
        </div>
    </>
  )
}

export default Contact