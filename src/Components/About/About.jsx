import React from 'react'
import Heading from '../Heading/Heading'

export default function About() {
  return <>
    <div className="about_ m-top container-fluid d-flex flex-column align-items-center justify-content-center vh-custom">
                  <Heading title='about component' textColor="text-white" bgColor="bg-white" />

      <div className="row container mx-auto">
        <div className="col-lg-6 p-3">
          <p className='text-white'>Freelancer is a free bootstrap theme created by Route. 
            The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
        </div>
         <div className="col-lg-6 p-3">
          <p className='text-white'>
            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, 
            CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
          </p>
        </div>
      </div>
    </div>
  </>
}
