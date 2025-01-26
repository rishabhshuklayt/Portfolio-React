import React from 'react'
import BarCard from './Cards/BarCard'

function Achivements() {
  return (
    <div className='bg-slate-100 pb-4'>
    <div className='mt-10 container mx-auto '>
        <h1 className='text-2xl text-center pt-3'>**Here's My Achivements**</h1>
        <div className='flex  flex-wrap justify-center flex-row mt-10 gap-5'>
            <BarCard />
            <BarCard />
            <BarCard />
            <BarCard />
            <BarCard />
            <BarCard />
        </div>
    </div>
    </div>
  )
}

export default Achivements