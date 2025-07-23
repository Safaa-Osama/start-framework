import React, { useState } from 'react'
import Heading from '../Heading/Heading'

export default function Contact() {
  const [uname, setUname] = useState('');
  const [age, setAge] = useState('');
  const [mail, setMial] = useState('');
  const [pass, setpass] = useState('');

  return <>
    <div className="container h-100 py-5">
      <Heading title='conatct section' textColor="textSecondColor" bgColor="bgSecondColor" />


      <form className='w-50 mx-auto'>
        <label htmlFor="userName" className={`position-relative top-0 transition ${uname ? 'activate' : ''}`}>User Name</label>
        <input onChange={(e) => setUname(e.target.value)} className='form-control mb-3 mt-1 position-relative' id='userName' type="text" placeholder='User Name' />
        <label htmlFor="userAge" onChange={(e) => setValue(e.target.value)} className={`position-relative top-0 transition ${age ? 'activate' : ''}`}> User Age</label>
        <input  onChange={(e) => setAge(e.target.value)} className='form-control mb-3 mt-0' id='userAge' type="number" placeholder='User Age' />
        <label htmlFor="userEmail"  className={`position-relative top-0 transition ${mail ? 'activate' : ''}`}>User Email</label>
        <input  onChange={(e) => setMial(e.target.value)} className='form-control mb-3 mt-0' id='userEmail' type="email" placeholder='User Email' />
        <label htmlFor="UserPass"  className={`position-relative top-0 transition ${pass ? 'activate' : ''}`}>User Password </label>
        <input onChange={(e) => setpass(e.target.value)}  className='form-control mb-3 mt-0' id='UserPass' type="password" placeholder='User Password' />

        <button className='contact-btn btn my-3' type='submit'>Send messages</button>
      </form>
    </div>

  </>
}
