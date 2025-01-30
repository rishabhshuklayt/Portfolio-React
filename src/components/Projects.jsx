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
        <Card title={"CampusRoutes"} discription={'"CampusRoutes tracks buses in real-time, alerts students when buses are nearby, shows available seats, and helps buses locate students for efficient pickups.".'} />
        <Card title={"NFC-DigiMenu"} discription={'NFC-enabled digital menu provides instant access to the menu by scanning a QR code or tapping a phone, offering a contactless dining experience and displaying the restaurant location'}/>
        <Card title={"Institute ERP - Freelance"} discription={'The ERP system manages student data, tracks academic progress, and automates certificate generation, streamlining administrative tasks and ensuring smooth operations.'}/>
        <Card title={"DigiPass - A Gatepass Management System"} discription={'The Gatepass Management System streamlines the process of issuing and tracking gate passes, ensuring smooth and secure movement within the campus'}/>
        <Card title={"Camping Booking"} discription={'The Camping Booking Website allows users to easily browse, book, and manage camping site reservations, offering a seamless experience for outdoor enthusiasts.'}/>
        <Card title={"TaxiCO - Freelance"} discription={'TAXICO is a taxi booking platform that enables users to quickly book rides, track driver locations, and enjoy a hassle-free transportation experience'}/>
        </div>
        <div className='container mx-auto w-5/6 text-center bg-gray-200 rounded-lg'>
            <h1>Feel Free To Contribute And Fork Any Open Soruce Code As you please !!<button className='bg-black text-center text-white p-2 text-xs rounded-lg m-2 inline-flex items-center gap-2'>View More<FaArrowRightLong />
            </button></h1>
        
        </div>
    </div>
  )
}

export default Projects