import React from 'react'
import Heading from '../Heading/Heading'

export default function Contact() {
  return <>
    <div className="container h-100 py-5">
             <Heading title='conatct section' textColor="textSecondColor" bgColor="bgSecondColor" />


      <form className='w-50 mx-auto'>
        <label htmlFor="userName">User Name</label>
        <input className='form-control mb-3 mt-0' id='userName' type="text" placeholder='User Name' />
        <label htmlFor="userAge"> User Age</label>
        <input className='form-control mb-3 mt-0' id='userAge' type="number" placeholder='User Age' />
        <label htmlFor="userEmail">User Email</label>
        <input className='form-control mb-3 mt-0' id='userEmail' type="email" placeholder='User Email' />
        <label htmlFor="UserPass">User Password </label>
        <input className='form-control mb-3 mt-0' id='UserPass' type="password" placeholder='User Password' />

        <button className='contact-btn btn my-3' type='submit'>Send messages</button>
      </form>
    </div>

  </>
}
