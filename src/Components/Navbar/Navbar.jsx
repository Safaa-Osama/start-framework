import React from 'react'
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
const [reduceNav, setreduceNav] = useState(true)
useEffect(() => {
  //didmount
 // const scrollEvent = ()=>setreduceNav(window.scrollY < 50);
  window.addEventListener(
    "scroll", ()=>{
      if(window.scrollY > 50) {
        setreduceNav(false);
      }else{
        setreduceNav(true);
      }
    }
  )

  return () => {
    //didunmoumt
    window.removeEventListener(
    "scroll", ()=>{
      if(window.scrollY > 50) {
        setreduceNav(false);
      }else{
        setreduceNav(true);
      }
    }
  )
  }
}, [])

  return (
        <nav className={`navbar navbar-expand-lg container-fluid position-fixed top-0 start-0 end-0 z-1
           ${reduceNav ? 'py-4' : '' }`}>
        <div className="container">
          <Link className=" fs-2 navbar-brand text-uppercase text-white logo" to={'/'}>start Framework</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link text-white text-uppercase" to={'about'}>about</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white text-uppercase" to={'/portofolio'}>portofolio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white text-uppercase" to={'/contact'}>contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}
