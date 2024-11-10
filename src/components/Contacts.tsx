import React from 'react'
import { MdOutlineAttachEmail } from "react-icons/md";
import { BsTelephoneInbound } from "react-icons/bs";
import '../app/styles/Contact.css'

const Contacts = () => {
  return (
    <div id ='Contacts' className='contact.div'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
          <h2 className='text-5xl' data-aos="zoom-in-up">Get in touch</h2>
          <p className='text-pink-600 text-[22px] pt-2' data-aos="zoom-in-up">
            Drop me a line,give me a call,or send me a message by submitting the form.
          </p>
          <div className='flex gap-3 items-center' data-aos="zoom-in-up">
            <MdOutlineAttachEmail size ={30} />laibakhan12183@yahoo.com
          </div>
          <div className='flex gap-3 items-center'data-aos="zoom-in-up">
            <BsTelephoneInbound size ={30} />(0214405409)
            </div>

        </div>
        <div className='space-y-8'>
          <div className='flex flex-col gap-1'data-aos="zoom-in-up">
            <label htmlFor ="name">Name</label>
            <input type ="text"
            className='h-[40px] bg-tranparent border border-accent'
            id='name'/>
          </div>
          <div className='flex flex-col gap-1' data-aos="zoom-in-up">
            <label htmlFor ="email">Email</label>
            <input type ="text"
            className='h-[40px] bg-tranparent border border-accent'
            id='email'/>
          </div>
          <div className='flex flex-col gap-1' data-aos="zoom-in-up">
            <label htmlFor ="message">Message</label>
            <textarea 
            className='bg-tranparent border border-accent'
            id='message' rows ={8}>
            </textarea>
          </div>
          <button className='bg-accent p-2 px-6' data-aos="zoom-in-up">Send</button>
        </div>
      </div>
      </div>
  )
}

export default Contacts

