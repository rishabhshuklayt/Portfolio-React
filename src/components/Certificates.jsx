import React from 'react'
import ImgCard from './Cards/ImgCard'

function Certificates() {
  return (
    <div className='mt-5'>
        <h1 className='text-center text-3xl p-5'>**Here's My Certificates**</h1>
        <div className='flex flex-wrap justify-center gap-5 mx-auto container'>
            <ImgCard title={"complition In SQL DB"} img={'https://certifier.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fcertifier%2Fimage%2Fupload%2Fv1666477479%2Flarge_blue_formal_certificate_of_webinar_portrait_12913_c0ab6376ac.png&w=1920&q=100'} />
            <ImgCard title={"Complition of Internship in Avenariya"} img={'https://certifier.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fcertifier%2Fimage%2Fupload%2Fv1664719792%2Flarge_burgundy_formal_certificate_of_course_landscape_12928_2d04bef58a.png&w=1920&q=100'} />
            <ImgCard title={"Certification Of Ethical Hacking"} img={'https://certifier.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fcertifier%2Fimage%2Fupload%2Fv1666477479%2Flarge_green_formal_certificate_of_webinar_landscape_12934_d9ebe1ae9f.png&w=1920&q=100'}  />
            <ImgCard title={"certification of MERN stack DEV"} img={'https://certifier.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fcertifier%2Fimage%2Fupload%2Fv1666183864%2Flarge_blue_modern_certificate_of_recognition_landscape_12949_a3384c55f2.png&w=1920&q=100'} />
            <ImgCard title={"DEvOPS Complition"} img={'https://certifier.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fcertifier%2Fimage%2Fupload%2Fv1663861577%2Flarge_orange_modern_certificate_of_recognition_landscape_12386_742f658ba7.png&w=1920&q=100'} />
            <ImgCard title={"complition In SQL DB"} img={'https://certifier.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fcertifier%2Fimage%2Fupload%2Fv1663861578%2Flarge_blue_modern_certificate_of_recognition_landscape_12385_442a650d39.png&w=1920&q=100'}/>
        </div>
    </div>
  )
}

export default Certificates