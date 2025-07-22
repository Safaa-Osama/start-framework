import React from 'react'

export default function LightBox(props) {
  return (
    <>
    <div className={`d-flex align-content-center justify-content-center light-box position-fixed start-0 top-0 vh-100 w-100 ${!props.opened && 'd-none'}`}>
                  <img src={props.image} alt="" />
                  </div>
    </>
  )
}
