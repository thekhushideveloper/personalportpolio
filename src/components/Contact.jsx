import React from 'react'

export default function Contact() {
    const CONTACT ={
        address:"18/72 B Gayatri Nagar Kanpur ,Uttar Pradesh, 209861",
        PhoneNo :"+91 8708557708",
        email : "thekhushideveloper@gmail.com"
        
    }
  return (
    <div>
      <h1 className='my-20 text-center text-4xl'>Get in Touch</h1>

      <div className='text-center my-10 tracking-tighter'>
        <p className='my-4'>{CONTACT.address}</p>
        <p className='my-4'>{CONTACT.PhoneNo}</p>
        <a className='my-4 border-b' href='/#'>{CONTACT.email}</a>

      </div>
</div>
  )
}
