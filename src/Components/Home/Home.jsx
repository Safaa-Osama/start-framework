import React from 'react'
import Heading from '../Heading/Heading'
import profile from '../../assets/Images/avataaars.svg'
import { useEffect } from 'react';


export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);
  
  return (
    <>
    <div className="d-flex m-top flex-column justify-content-center align-items-center py-5 bgMainColor">
        <img className='w-20' src={profile} alt="profile" />
        <Heading title="start framework" textColor="text-white" bgColor="bg-white" />
        <p className="text-white">Graphic Artist - Web Designer - Illustrator</p>

    </div>
    </>
  )
}
