import React from 'react'

export default function LightBox(props) {
  return (
    <> 
      <div
        onClick={() => props.setOpened(false)}
        className={`z-2 d-flex align-items-center justify-content-center light-box position-fixed start-0 top-0 vh-100 w-100 ${!props.opened ? 'd-none' : ''}`}
      >
        <img className='w-50 h-75' src={props.image} alt="image show" />
      </div>
    </>
  );
}
