import React from 'react'
import Logo1 from '../assets/logo.jpg'
import{Link} from 'react-scroll'



function Navbar() {
  return (
    <div className='fixed w-full h-[90px] flex justify-between items-center px-4 bg-[#19191b] text-gray-300'> 
        <div>
            <img style={{width: '138px'}} src={Logo1} alt="Logo Proserco" />
        </div>

   {/*Buttons nav bar */}
   <ul className='hidden md:flex'>
        <li>
            <Link to="homemain" smooth={true} offset={50} duration={500}>
                Home
            </Link>
        </li>
        <li>
            <Link to="about" smooth={true} offset={50} duration={500}>
                About
            </Link>
        </li>
        <li>
            <Link to="skills" smooth={true} offset={50} duration={500}>
                Skills
            </Link>
        </li>
        <li>
            <Link to="projects" smooth={true} offset={50} duration={500}>
                Projects
            </Link>
        </li>
        <li>
            <Link to="contact-form" smooth={true} offset={50} duration={500}>
                Contact
            </Link>
         </li>
                </ul>
    </div>
  )
}

export default Navbar