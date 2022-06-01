import { textAlign } from "@mui/system";
import React from "react";
import axios from "axios";
import { Modal } from "bootstrap";

import PostButtons from "./PostButtons";

const Post = ({
  photo,
  title,
  description,
  username_str,
  post_config_id,
  user_post_id,
  upvotes,
  date
}) => {
  const report = async () => {
    console.log(post_config_id);
    var x = await axios.patch(
      "http://127.0.0.1:8000/post/RUD/" + String(post_config_id),
      {
        action: "report",
      }
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
    console.log(Post);
    var x = await axios.patch(
      "http://127.0.0.1:8000/user/report/" + String(user_post_id),
      {
        action: "report",
      }
    );
    console.log(x.status);
    if (x.status === 200) {
      window.alert("El usuario ha sido reportado");
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
        userID: localStorage.getItem("user"),
        action: "upvote",
      }
    );
    console.log(upRequest.status);
    if (upRequest.status === 200) {
      console.log(upRequest.data);
      window.alert(upRequest.data.mensaje);
      window.location.href = "/";
    }
  };

  const payment = async () => {
    console.log(post_report_id);
  };

  const user = async () => {
      localStorage.setItem("user_profile", user_post_id),
      localStorage.setItem("user_profile_name", username_str),
      redirect()     
  };

  const redirect = () => {
    window.location.href = '/user-profile'
  }

  return (
    <div
      className="card mb-3 m-2"
      style={{ width: "674px", height: "max-content" }}
    >
      <div className="row g-0">
        <div className="col-md-2 col-rows-2">
          <div className="row">
          <span 
          title='Reportar Usuario'
          style={{
            width: "40%",
            height: "40%",
            marginTop: "10px"
          }}
          >
              <img
              id="ReportUser"
              src={"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Antu_dialog-warning.svg/2048px-Antu_dialog-warning.svg.png"}
              className="img-fluid"
              alt="report icon"
              style={{
                width: "100%",
                height: "100%",
                position : "5px",
                marginTop : "2px"
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
                margin: "5px",
              }}
            />
           <button class = "btn info" style={{ textAlign: "center", color: "#4A9FCD" }} onClick={user}>
              <strong> {username_str}</strong>{" "}
            </button>
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
            <h4 className="card-title">{title}</h4>
            <h6 className="card-text">{date}</h6>
            <p className="card-text">{description}</p>
            <div class="container">
              <div class="row">
                <div class="col-1" style= {{
                    marginLeft: "0px",
                    marginTop: "0px",
                    padding: "0%",
                    }}>
                  <img
                  id="up"
                  src={"https://www.actoterapeutico.com.ar/ebook/imagenes/top.png"}
                  className="img-fluid"
                  style={{
                    width: "1.5rem",
                    height: "1.5rem",
                    marginLeft: "25%",
                    marginTop: "0px",
                  }}
                  />
                </div>
                <div class="col-1"style= {{
                    marginLeft: "0.5%",
                    marginTop: "0.5%",
                    padding: "0%"
                    }}>
                  {upvotes}
                </div>
              </div>
            </div>
            
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
          onClick={report}
        />
        
        
        
      </div>
      
    </div>
  );
};

export default Post;