import React, { useState } from "react";
import house from '../../assets/Images/poert1.png'
import cake from '../../assets/Images/port2.png'
import home from '../../assets/Images/port3.png'
import Heading from "../Heading/Heading";
import LightBox from "../LightBox/LightBox";



export default function Portofolio() {
  const [opened, setOpened] = useState(false);
  const [imageSec, setImageSec] = useState(house);

  return (
    <>
      <div className="container">
        <Heading title="portfolio component" textColor="c" bgColor="bgSecondColor" />

        <div className="row g-4 my-3">
          <div className="col-lg-4 col-md-6">
            <div className="inner position-relative">
              <img className="w-100 img-thumbnail" src={house} alt="first image" />
              <div onClick={() => { setImageSec(house); setOpened(true); }} className="layer bg-opacity-25 position-absolute start-0 end-0 top-0 bottom-0
               d-none justify-content-center align-items-center bgMainColor text-center text-white">
                <i class="fa-solid fa-plus fa-4x"></i>
              </div>

              {/* <div className={`d-flex justify-content-center align-items-center light-box position-fixed start-0 top-0 vh-100 w-100 ${!opened && 'd-none'}`}>
                <img className="w-25" src={house} alt="house" />
              </div> */}
            </div>
          </div>

           <div className="col-lg-4 col-md-6">
            <div className="inner position-relative">
              <img className="w-100 img-thumbnail" src={cake} alt="second image" />
              <div onClick={() => { setImageSec(cake); setOpened(true); }} className="layer bg-opacity-25 position-absolute start-0 end-0 top-0 bottom-0
               d-none justify-content-center align-items-center bgMainColor text-center text-white">
                <i class="fa-solid fa-plus fa-4x"></i>
              </div>

              <div className={`d-flex justify-content-center align-items-center light-box position-fixed start-0 top-0 vh-100 w-100 ${!opened && 'd-none'}`}>
                <img className="w-25" src={cake} alt="cake" />
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="inner position-relative">
              <img className="w-100 img-thumbnail" src={home} alt="first image" />
              <div onClick={() => { setImageSec(home); setOpened(true); }} className="layer bg-opacity-25 position-absolute start-0 end-0 top-0 bottom-0
               d-none justify-content-center align-items-center bgMainColor text-center text-white">
                <i class="fa-solid fa-plus fa-4x"></i>
              </div>

              <div className={`d-flex justify-content-center align-items-center light-box position-fixed start-0 top-0 vh-100 w-100 ${!opened && 'd-none'}`}>
                <img className="w-25" src={home} alt="home" />
              </div>
            </div>
          </div>
        </div>

        <LightBox opened={opened} image={imageSec} />

       <div className="row g-4 my-3">
          <div className="col-lg-4 col-md-6">
            <div className="inner position-relative">
              <img className="w-100 img-thumbnail" src={house} alt="first image" />
              <div onClick={() => { setImageSec(house); setOpened(true); }} className="layer bg-opacity-25 position-absolute start-0 end-0 top-0 bottom-0
               d-none justify-content-center align-items-center bgMainColor text-center text-white">
                <i class="fa-solid fa-plus fa-4x"></i>
              </div>

              <div className={`d-flex justify-content-center align-items-center light-box position-fixed start-0 top-0 vh-100 w-100 ${!opened && 'd-none'}`}>
                <img className="w-25" src={house} alt="house" />
              </div>
            </div>
          </div>

           <div className="col-lg-4 col-md-6">
            <div className="inner position-relative">
              <img className="w-100 img-thumbnail" src={cake} alt="second image" />
              <div onClick={() => { setImageSec(cake); setOpened(true); }} className="layer bg-opacity-25 position-absolute start-0 end-0 top-0 bottom-0
               d-none justify-content-center align-items-center bgMainColor text-center text-white">
                <i class="fa-solid fa-plus fa-4x"></i>
              </div>

              <div className={`d-flex justify-content-center align-items-center light-box position-fixed start-0 top-0 vh-100 w-100 ${!opened && 'd-none'}`}>
                <img className="w-25" src={cake} alt="cake" />
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="inner position-relative">
              <img className="w-100 img-thumbnail" src={home} alt="first image" />
              <div onClick={() => { setImageSec(home); setOpened(true); }} className="layer bg-opacity-25 position-absolute start-0 end-0 top-0 bottom-0
               d-none justify-content-center align-items-center bgMainColor text-center text-white">
                <i class="fa-solid fa-plus fa-4x"></i>
              </div>

              <div className={`d-flex justify-content-center align-items-center light-box position-fixed start-0 top-0 vh-100 w-100 ${!opened && 'd-none'}`}>
                <img className="w-25" src={home} alt="home" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
