import React from 'react'
import { FaArrowAltCircleUp, FaRegShareSquare } from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai";
import { ArrowRight } from 'react-bootstrap-icons';


const Post = ({ photo, title, description }) => {
  return (
    // <div className="card mb-3 mt-2 my_card">
    //   <div className='row'>
    //     <div className='col-2'>
    //     <img src={photo} className="img-fluid" alt="ProfilePhoto"
    //            style={{
    //              backgroundRepeat: "no-repeat", backgroundPosition: "50%",
    //              borderRadius: "50%",
    //              backgroundSize: "100% auto",
    //              height: "100px",
    //              margin: "10px"
    //            }} />
    //     </div>
    //     <div className='col-10'>
    //       <div className='row'>  
    //         <div className='col-10'>
    //           {title}
    //         </div>
    //         <div className='col-2'>
    //         <img src={"https://www.iconpacks.net/icons/2/free-arrow-up-icon-2826-thumb.png"} className="img-fluid" alt="..." />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className='row'>
    //     <div className='col-2'></div>
    //     <div className='col-10'>
    //       {description}
    //     </div>
    //   </div>
    // </div>







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
              <p> Nombre de Usuario </p>
          </div>
          <div className='row row-cols-3'>
            <div className='col'>
              <img src={"https://icon-library.com/images/arrow-up-icon-png/arrow-up-icon-png-0.jpg"} className="img-fluid" alt="UpVote icon" />
            </div>
            <div className='col'>
              <img src={"https://cdn-icons-png.flaticon.com/512/21/21004.png"} className="img-fluid" alt="Donar icon" />
            </div>
            <div className='col'>
              <img src={"https://cdn0.iconfinder.com/data/icons/multimedia-261/32/Send-512.png"} className="img-fluid" alt="Share icon" />
            </div>
          </div>
        </div>
        
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title" >{title}</h5>
            <p className="card-text">{description}</p>
          </div>
        </div>
        <img src={"http://cdn.onlinewebfonts.com/svg/img_193335.png"} className="img-fluid" alt="report icon" style={{width : "2rem", height:"2rem", marginLeft:"20px"}} />
      </div>
    </div>
  )
}

export default Post