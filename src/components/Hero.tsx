import React from 'react'
import Navbar from './Navbar'
import '../app/styles/Hero.css'
const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/project3.jpeg)] bg-cover'
    style ={{backgroundSize:"35%",backgroundPosition:"left 100px top 300px"}}
    >
     <Navbar/> 
     <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
<div className='hidden lg:block'></div>
<div className='text-[300px]sm:text-[500px]font-bold leading-tight flex justify-center items-center'>
<div>
  <p data-aos="zoom-in-up">I am</p>
  <p  data-aos="zoom-in-up">Shamsa</p>
  <p  data-aos="zoom-in-up">Saleem</p>
</div>
</div>
     </div>
    </div>
  )
}

export default Hero
