import { textAlign } from '@mui/system'
import React from 'react';
import axios from 'axios';
/* import { FaArrowAltCircleUp, FaRegShareSquare } from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai";
import { ArrowRight } from 'react-bootstrap-icons';

 */



const Post = ({ photo, title, description, username_str, post_report_id}) => {
  const report = async () => {
    console.log(post_report_id)
    var x = await axios.patch("http://127.0.0.1:8000/post/RUD/" + String(post_report_id))
    console.log(x.status)
    if (x.status === 200) {
      window.alert("El post ha sido reportado")
      window.location.href = '/'
    }else{
      window.alert("Error. Verifica los datos")
    }
    
  }

  const payment = async () => {
    console.log(post_report_id)
  }

  return (
    <div className="card mb-3 m-2" style={{ width: "674px", height: "max-content" }}>
      <div className="row g-0">
        <div className="col-md-2 col-rows-2" >
          <div className='row'>
            <img src={photo} className="img-fluid" alt="..."
              style={{
                backgroundRepeat: "no-repeat", backgroundPosition: "50%",
                borderRadius: "50%",
                backgroundSize: "100% auto",
                height: "100px",
                margin: "10px",
              }} />
              <p style={{textAlign : "center", color:"#4A9FCD"}}><strong> {username_str}</strong> </p>
          </div>
          <div className='row row-cols-3 mb-2'>
            <div className='col'>
              <img src={"https://icon-library.com/images/arrow-up-icon-png/arrow-up-icon-png-0.jpg"} className="img-fluid" alt="UpVote icon" />
            </div>
            <div className='col'>
              <img 
              id="donate" 
              src={"https://cdn-icons-png.flaticon.com/512/21/21004.png"} 
              className="img-fluid" 
              alt="Donar icon"
              onClick={payment}
              />
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
        <img id='ReportPost' src={"http://cdn.onlinewebfonts.com/svg/img_152201.png"} className="img-fluid" alt="report icon" style={{width : "2rem", height:"2rem", marginLeft:"30px", marginTop:"20px"}} onClick={report} />
      </div>
    </div>
  )
}

export default Post