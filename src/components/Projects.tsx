import React from 'react'
import Heading from './Heading';
import Card from './Card';
import '../app/styles/Projects.css'
const data =[
  {
    id:0,
  title:"Resume builder",
  desc:"Html and typescript",
  img:"/project1.jpeg",
  tags:["Html","css","Typescript"],

},
{
  id: 1,
  title:"Dynamic Resume Builder",
  desc:"html ,css and typescript powered website",
  img:"/project2.jpeg",
  tags: ["Next.Js","Node","CSS","Typescript"],
},
{
  id: 2,
  title:"Interactive portfolio",
  desc:"Html,css and typescript powered website",
  img:"/project3.jpeg",
  tags: ["Html","CSS","Typescript"],
  
},
{
  id: 3,
  title:"Sixblogs",
  desc:"A Next.Js and typescript powered website",
  img:"/project4.jpeg",
  tags: ["Next.Js","Node","CSS","Typescript"],

  
},

]

const Projects = () => {
  return (
    <div id='Projects'className='container pt-1'>
     <Heading title='My Projects'/>
     <div className='grid gap-1 xl:gap-0 xl:gap-y-1 md:grid-cols-1 lg:grid-cols-2 place-items-center'>
      {data.map((el)=>(<Card
      key={el.id}
      title={el.title}
      desc={el.desc}
      img={el.img}
      tags={el.tags}
      />))}
     </div>
    </div>
  )
}

export default Projects
