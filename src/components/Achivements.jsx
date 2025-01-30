import React from 'react'
import BarCard from './Cards/BarCard'

function Achivements() {
  return (
    <div className='bg-slate-100 pb-4'>
    <div className='mt-10 container mx-auto '>
        <h1 className='text-2xl text-center pt-3'>**Here's My Achivements**</h1>
        <div className='flex  flex-wrap justify-center flex-row mt-10 gap-5'>
        <BarCard place={'ASTEP | BSSITM | BBAU | Indian Council of Social Science Research (ICSSR)'} title={'Participant in International and National Conferences'} />
        <BarCard place={'AICTE | MIC | Ministery Of Education | Gov of India | Integral Univeristy | BSSITM   '} title={'Project "sheCure" selected for IDE Bootcamp Edition 2, 2024'} />
        <BarCard place={'BSSITM | INNOVISTA '} title={'Appointed as Secretary of the Technical Society "INNOVISTA" '}/>
        <BarCard place={'BSSITM'} title={' #1 Ranker in Internal Smart India Hackathon'} />
        <BarCard place={'BSSITM | TechFest'} title={' #1 Ranker in Project Building Competition'} />
        <BarCard place={'BSSITM'} title={'Secured #1 Position in Tech Debate Competition'} />
       
        <BarCard place={'BSSITM'} title={'Recognized as #1 Presenter in PPT Presentation'} />
       
        {/* <BarCard place={'BSSITM '} title={' In a % Days BootCamp '}/> */}
       


        </div>
    </div>
    </div>
  )
}

export default Achivements