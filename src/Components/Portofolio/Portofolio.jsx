import React, { useState, useEffect} from "react";
import house from '../../assets/Images/poert1.png'
import cake from '../../assets/Images/port2.png'
import home from '../../assets/Images/port3.png'
import Heading from "../Heading/Heading";
import LightBox from "../LightBox/LightBox";



export default function Portofolio() {
  const [opened, setOpened] = useState(false);
  const [imageSec, setImageSec] = useState(house);

  useEffect(() => {
    document.title = "Portofolio";
  }, []);
  

  return (
    <>
      <div className="m-top container">
        <Heading title="portfolio component" textColor="textSecondColor" bgColor="bgSecondColor" />

        <div className="row mt-5 g-4 my-3">
          <div className="col-lg-4 col-md-6">
            <div className="inner position-relative">
              <img className="w-100 rounded-3" src={house} alt="first image" />
              <div onClick={() => { setImageSec(house); setOpened(true); }} className="layer rounded-3 position-absolute start-0 end-0 top-0 bottom-0
               d-flex justify-content-center align-items-center bgMainColor text-center text-white">
                <i className="fa-solid fa-plus fa-4x"></i>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="inner position-relative">
              <img className="w-100 rounded-3" src={cake} alt="first image" />
              <div onClick={() => { setImageSec(cake); setOpened(true); }} className="layer rounded-3 position-absolute start-0 end-0 top-0 bottom-0
               d-flex justify-content-center align-items-center bgMainColor text-center text-white">
                <i className="fa-solid fa-plus fa-4x img-show"></i>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="inner position-relative">
              <img className="w-100 rounded-3" src={home} alt="first image" />
              <div onClick={() => { setImageSec(home); setOpened(true); }} className="layer rounded-3 position-absolute start-0 end-0 top-0 bottom-0
               d-flex justify-content-center align-items-center bgMainColor text-center text-white">
                <i className="fa-solid fa-plus fa-4x img-show"></i>
              </div>
            </div>
          </div>
        </div>

        <LightBox opened={opened} setOpened={setOpened} image={imageSec} />

        <div className="row g-4 my-3">
          <div className="col-lg-4 col-md-6">
            <div className="inner position-relative">
              <img className="w-100 rounded-3" src={house} alt="first image" />
              <div onClick={() => { setImageSec(house); setOpened(true); }} className="layer rounded-3 position-absolute start-0 end-0 top-0 bottom-0
               d-flex justify-content-center align-items-center bgMainColor text-center text-white">
                <i className="fa-solid fa-plus fa-4x img-show"></i>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="inner position-relative">
              <img className="w-100 rounded-3" src={cake} alt="first image" />
              <div onClick={() => { setImageSec(cake); setOpened(true); }} className="layer rounded-3 position-absolute start-0 end-0 top-0 bottom-0
               d-flex justify-content-center align-items-center bgMainColor text-center text-white">
                <i className="fa-solid fa-plus fa-4x img-show"></i>
              </div>



            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="inner position-relative">
              <img className="w-100 rounded-3" src={home} alt="first image" />
              <div onClick={() => { setImageSec(home); setOpened(true); }} className="layer rounded-3 position-absolute start-0 end-0 top-0 bottom-0
               d-flex justify-content-center align-items-center bgMainColor text-center text-white">
                <i className="fa-solid fa-plus fa-4x img-show"></i>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
