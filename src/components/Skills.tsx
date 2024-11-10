import React from 'react'
import '../app/styles/Skills.css'

const Skills = () => {
  return (
    <div id ='skills'className='container.div'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div data-aos="zoom-in-up">
  <h2 className='text-10xl md:text-5xl'>Technologies I work with</h2>
  <p className='text-pink-600 pt-2'> I have a solid foundation in web development,specializing in HTML,CSS and Javascript.My experience extends to using frameworks like React and Next.Js to create dynamicand users friendly applications </p>
        </div>
        <div>
  <div className='grid grid-cols-2 text-accent text-4xl sm: text-3xl'>
    <div className='space-y-2'>
    <h2  data-aos="zoom-in-up">Typescript</h2>
    <h2  data-aos="zoom-in-up">React.Js</h2>
    <h2  data-aos="zoom-in-up">Next.Js</h2>
    </div>
             <div className='space-y-2'>
              <h2 data-aos="zoom-in-up">Tailwind</h2>
              <h2 data-aos="zoom-in-up">CSS</h2>
              <h2 data-aos="zoom-in-up">Node.Js</h2>
        </div>
        </div>
        </div>
        </div>
        </div>
  )
}

export default Skills
