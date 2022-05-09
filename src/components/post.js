import React from 'react'
import { FaArrowAltCircleUp, FaRegShareSquare } from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai";


const Post = ({ photo, title, description }) => {
  return (
    <div className="card mb-3 mt-2" style={{ width: "674px", height: "max-content" }}>
      <div className="row g-0">
        <div className="col-md-2 col-rows-2" >
          <div className='row'>
            <img src={photo} className="img-fluid" alt="..."
              style={{
                backgroundRepeat: "no-repeat", backgroundPosition: "50%",
                borderRadius: "50%",
                backgroundSize: "100% auto",
                height: "100px",
                margin: "10px"
              }} />
          </div>
          <div className='row row-cols-3'>
            {/* <div className='col'> <FaArrowAltCircleUp /> </div>
            <div className='col'> <AiOutlineDollar /> </div>
            <div className='col'> <FaRegShareSquare /> </div> */}
          </div>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title" >{title}</h5>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post