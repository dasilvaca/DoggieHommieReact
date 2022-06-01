import { textAlign } from '@mui/system'
import React from 'react';
import axios from 'axios';
import { Modal } from 'bootstrap';

import PostButtons from './PostButtons';


const Post = ({ photo, title, description, username_str, post_config_id, user_post_id, upvotes}) => {
  const reportPost = async () => {
    console.log(post_config_id);
    var x = await axios.patch(
      "http://127.0.0.1:8000/post/RUD/" + String(post_config_id)
    );
    console.log(x.status);
    if (x.status === 200) {
      window.alert("El post ha sido reportado");
      window.location.href = "/";
    } else {
      window.alert("Error. Verifica los datos");
    }
    const [showPayment, setShowPayment] = useState(false);
  };

  const reportUser = async () => {
    console.log(post_config_id);
    var x = await axios.patch(
      "http://127.0.0.1:8000/post/RUD/" + String(post_config_id)
    );
    console.log(x.status);
    if (x.status === 200) {
      window.alert("El post ha sido reportado");
      window.location.href = "/";
    } else {
      window.alert("Error. Verifica los datos");
    }
    const [showPayment, setShowPayment] = useState(false);
  };

  const upvote = async () => {

    var upRequest = await axios.patch(
      "http://127.0.0.1:8000/post/RUD/" + String(post_config_id),
      {
        userID : localStorage.getItem("user"),
        upvote: true,
      }
    );
    console.log(upRequest.status);
    if (upRequest.status === 200) {
      console.log(upRequest.data)
      window.alert(upRequest.data.mensaje);
      window.location.href = "/";
    }
  };

  
  

  const payment = async () => {
    console.log(post_report_id)

  }

  return (
    <div

      className="card mb-3 m-2"
      style={{ width: "674px", height: "max-content" }}
    >

      <div className="row g-0">
        <div className="col-md-2 col-rows-2">
          <div className="row">
            {/* <p style={{position : "relative"}}>Hola mundo</p> */}
            <span title='Reportar Usuario'>
              <img
                id="ReportUser"
                src={"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Antu_dialog-warning.svg/2048px-Antu_dialog-warning.svg.png"}
                className="img-fluid"
                alt="report icon"
                style={{
                  width: "2rem",
                  position : "fixed",
                  marginTop : "12px"
                }}
                onClick = {reportUser}
              />
            </span>

            <img
              src={photo}
              className="img-fluid"
              alt="..."
              style={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "50%",
                borderRadius: "50%",
                backgroundSize: "100% auto",
                height: "100px",
                margin: "10px",
              }}
            />
            <p style={{ textAlign: "center", color: "#4A9FCD" }}>
              <strong> {username_str}</strong>{" "}
            </p>
          </div>
          <PostButtons
            post_config_id={post_config_id} 
            title={title} 
            description={description} 
            username_str={username_str} 
            user_post_id={user_post_id}
            upvotes = {upvotes}
          />

        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
          </div>
        </div>
        <img
          id="ReportPost"
          src={"http://cdn.onlinewebfonts.com/svg/img_152201.png"}
          className="img-fluid"
          alt="report icon"
          style={{
            width: "2rem",
            height: "2rem",
            marginLeft: "30px",
            marginTop: "20px",
          }}
          onClick={reportPost}
        />
      </div>

    </div>
  );
        
};

export default Post;
