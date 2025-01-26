import React from 'react'
import Card from './Cards/Card'
import { FaArrowRightLong } from "react-icons/fa6";

function Projects() {
  return (
    <div className='h-auto '>
        <div className='text-center p-5 text-2xl'>
            <h1>**Here's What I've Built**</h1>
        </div>
        <div className='flex flex-wrap flex-row justify-center'>
        <Card title={"CampusRoutes"} />
        <Card title={"NFC-DigiMenu"}/>
        <Card title={"Institute ERP - Freelance"}/>
        <Card title={"DigiPass - A Gatepass Management System"}/>
        <Card title={"Camping Booking"}/>
        <Card title={"TaxiCO - Freelance"}/>
        </div>
        <div className='container mx-auto w-5/6 text-center bg-gray-200 rounded-lg'>
            <h1>Feel Free To Contribute And Fork Any Open Soruce Code As you please !!<button className='bg-black text-center text-white p-2 text-xs rounded-lg m-2 inline-flex items-center gap-2'>View More<FaArrowRightLong />
            </button></h1>
        
        </div>
    </div>
  )
}

export default Projects