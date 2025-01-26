import React from 'react'

function Home() {
  return (
    <div className='h-auto'>
        <section className=' p-10 flex justify-around' >
            <div className='mt-10  line space-y-4 text-center '>
                <h1 className='text-7xl font-extralight  leading-normal '>Hey, I'm <br className='' /> Rishabh Shukla</h1>
                <p className='text-3xl font-extralight'>Full Stack web 3.0 Developer</p>
                <p className='text-xl font-extralight'>Founder, Freelancer, App developer</p>
                <div className='flex gap-4 justify-center items-center'>
                <button className='border rounded-lg bg-gray-500 text-white px-3 py-2'>Contact</button>
                <button className='border rounded-lg border-gray-300 px-3 py-2'>Resume</button>
                </div>

            </div>
           
        </section>
    </div>
  )
}

export default Home