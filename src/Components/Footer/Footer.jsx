import React from "react";

export default function Footer() {
  // console.log(Footer.clienthieght);
  return <>
      <div className="footer_ container-fluid mt-3">
        <div className="text-center row container text-white mx-auto">

          <div className="col-lg-4">
            <div className="inner d-flex flex-column justify-content-center align-content-center">
              <p className="fs-3 text-uppercase">LOCATION</p>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="inner d-flex flex-column justify-content-center align-content-center ">
              <p className="fs-3 text-uppercase">AROUND THE WEB</p>
              <div className="icons">
                <div>
                  <ul className="d-flex align-content-center justify-content-center"> 
                    <li>
                      <i className="fa-brands fa-facebook" />
                    </li>
                    <li>
                      <i class="fa-brands fa-twitter" />
                    </li>
                    <li>
                      <i class="fa-brands fa-linkedin" />
                    </li>
                    <li>
                      <i class="fa-solid fa-globe" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="inner">
              <p className="fs-3 text-uppercase">ABOUT FREELANCER</p>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>

        </div>
      </div>

    
        <div className="row">
          <p className="py-4 copyright">Copyright © Your Website 2021</p>
        </div>
  </>
  
}
