import React from 'react'


function BarCard({place, title}) {
  return (
    <div className='bg-gray-200 rounded-lg p-4 w-full sm:w-auto'>
        
        <div className='w-full sm:w-auto'>
            <p className='text-xs font-light '>{place}</p>
            <h1 className='font-light mt-2 '>{title}</h1>
        </div>
        
    </div>
  )
}

export default BarCard