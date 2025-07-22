
export default function Heading(props) {
  return (
    <>
    <h1 className={` my-4 fw-bolder fs-2 text-uppercase ${props.textColor} text-center`}>{props.title}</h1>
    <div className={`d-flex justify-content-center align-items-center mb-3 ${props.textColor}`}>
        <div className={`line ${props.bgColor}`}></div>
    <i className={`fa-solid fa-star mx-3`}></i>
    <div className={`line ${props.bgColor}`}></div>
    </div>
    

    </>
  )
}
