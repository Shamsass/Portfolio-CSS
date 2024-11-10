import React from 'react'
import '../app/styles/Heading.css'
interface propType{
  title:string;
}
const Heading:React.FC<propType> = ({title}) => {
  return (
    <div className='container.div'>
     <p className='border-b-4 inline-block pb-2'>{title}</p> 
    </div>
  )
}

export default Heading
