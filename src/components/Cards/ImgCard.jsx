import React from 'react'

function ImgCard({img, title}) {
  return (
    <div className='w-80 bg-gray-200 p-3 rounded-sm'>
    <div className=' flex'>
        {/* <img src="https://certifier.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fcertifier%2Fimage%2Fupload%2Fv1709650100%2F51_participation_formal_darkviolet_landscape_ff5e55e81a.png&w=3840&q=100" alt="" srcset="" width={300} height={200} /> */}
        <img src={img} alt="" srcset="" width={300} height={200} />
    </div>
    <h1 className='bg-gray-800 text-center font-light text-white'>{title}</h1>
    </div>
  )
}

export default ImgCard