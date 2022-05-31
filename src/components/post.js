import { textAlign } from '@mui/system'
import React from 'react';
import axios from 'axios';
import { Modal } from 'bootstrap';
/* import { FaArrowAltCircleUp, FaRegShareSquare } from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai";
import { ArrowRight } from 'react-bootstrap-icons';

 */



const Post = ({ photo, title, description, username_str, post_report_id }) => {
  const report = async () => {
    console.log(post_report_id)
    var x = await axios.patch("http://127.0.0.1:8000/post/RUD/" + String(post_report_id))
    console.log(x.status)
    if (x.status === 200) {
      window.alert("El post ha sido reportado")
      window.location.href = '/'
    } else {
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
            <p style={{ textAlign: "center", color: "#4A9FCD" }}><strong> {username_str}</strong> </p>
          </div>
          {/* <div className='row row-cols-3 mb-2'>
            <div className='col'>
              <img src={"https://icon-library.com/images/arrow-up-icon-png/arrow-up-icon-png-0.jpg"} className="img-fluid" alt="UpVote icon" />
            </div>
            <div className='col'>

              <img
                src={"https://cdn-icons-png.flaticon.com/512/21/21004.png"}
                className="img-fluid"
                alt="Donar icon"
                onClick={payment}
                data-toggle="modal"
                data-target="#exampleModalCenter"
              />


              <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      ...
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className='col'>
              <img src={"https://cdn0.iconfinder.com/data/icons/multimedia-261/32/Send-512.png"} className="img-fluid" alt="Share icon" />
            </div>
          </div>
        </div> */}

          <div className="btn-group" style={{ height: "32px", width: "100%", marginBottom: "6px", padding: 0 }}>
            <button type="button" className="btn btn-outline-secondary" style={{ padding: "5px", top: 0, bottom: 0 }}>
              <svg xmlns="http://www.w3.org/2000/svg" style={{ margin: "0", width: "25px", height: "25px", position: 'initial', padding: "0", paddingBottom: "3px" }} fill="currentColor" className="bi bi-arrow-up-square" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"></path>
              </svg>
              <span className="visually-hidden">Button</span>
            </button>
            <button type="button" className="btn btn-outline-secondary" style={{ padding: "5px" }}>
              <svg xmlns="http://www.w3.org/2000/svg" style={{ margin: "0", width: "25px", height: "25px", position: 'initial', padding: "0", paddingBottom: "3px" }} fill="currentColor" className="bi bi-cash" viewBox="0 0 16 16">
                <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
                <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z"></path>
              </svg>
              <span className="visually-hidden">Button</span>
            </button>
            <button type="button" className="btn btn-outline-secondary" style={{ padding: "5px" }}>
              <svg xmlns="http://www.w3.org/2000/svg" style={{ margin: "0", width: "25px", height: "25px", position: 'initial', padding: "0", paddingBottom: "3px" }} fill="currentColor" className="bi bi-share" viewBox="0 0 16 16">
                <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"></path>
              </svg>
              <span className="visually-hidden">Button</span>
            </button>
          </div>

        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title" >{title}</h5>
            <p className="card-text">{description}</p>
          </div>
        </div>
        <img id='ReportPost' src={"http://cdn.onlinewebfonts.com/svg/img_152201.png"} className="img-fluid" alt="report icon" style={{ width: "2rem", height: "2rem", marginLeft: "30px", marginTop: "20px" }} onClick={report} />
      </div>
    </div>
  )
}

export default Post