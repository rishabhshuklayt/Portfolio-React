import React from 'react'
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
function Socials() {
  return (
    
        <ul className='flex text-lg  p-5 gap-10  '>
        <li>
    <a href="https://github.com/rishabhshuklayt" target="_blank" rel="noopener noreferrer">
      <FaGithub />
    </a>
  </li>
  <li>
    <a href="https://www.linkedin.com/in/rishabhshukla07/" target="_blank" rel="noopener noreferrer">
      <CiLinkedin />
    </a>
  </li>
  <li>
    <a href="https://www.instagram.com/rishabh_y.t/" target="_blank" rel="noopener noreferrer">
      <FaInstagram />
    </a>
  </li>
  <li>
    <a href="https://twitter.com/rishabhshuklayt" target="_blank" rel="noopener noreferrer">
      <FaXTwitter />
    </a>
  </li>
  <li>
    <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
      <FaWhatsapp />
    </a>
  </li>
      </ul>
    
  )
}

export default Socials