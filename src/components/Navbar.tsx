import React from 'react'
import '../app/styles/Navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  return (
    <div className='container.div'>
      <div className='flex justify-between items-center'>
<div className='text-xl font-medium'>Shamsa Saleem</div>
       <ul className ='gap-10 lg:gap-10 hidden md:flex'>
        <li className='menueLink'><a href ='#hero'>Home</a></li>
        <li className='menueLink'><a href ='#about'>About</a></li>
        <li className='menueLink'><a href ='#project'>Projects</a></li>
        <li className='menueLink'><a href ='#skills'>Skills</a></li>
        <li className='menueLink'><a href ='#contact'>Contact</a></li>
       </ul>
       <GiHamburgerMenu className='md-hidden' size={50}/>
      </div>
    </div>
  )
}

export default Navbar
