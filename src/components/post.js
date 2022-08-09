import { textAlign } from "@mui/system";
import React, { useState } from "react";

import axios from "axios";
// import { Modal } from "bootstrap";
import Modal from "./donateModal";
/* import { FaArrowAltCircleUp, FaRegShareSquare } from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai";
import { ArrowRight } from 'react-bootstrap-icons';
 */
import Avatar from "../assets/img/Avatar.jpg";
import {
  comment_create_url,
  post_RUD_url,
  users_url,
  user_report_url,
} from "../api";

import PostButtons from "./PostButtons";

const Post = ({
  photo,
  title,
  description,
  username_str,
  post_config_id,
  user_post_id,
  upvotes,
  date,
  is_active,
  tel,
  email,
  image,
  comments,
  state_user,
}) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    delete state.user.password_confirmation;
    // 'http://localhost:8000/users'
    var x = axios.post(`${users_url}`, state).then((response) => {
      console.log(x);
      if (x.status === 201) {
        window.location.href("/login");
      } else {
        alert("");
      }
    });
    console.log("data", x);
    console.log("data", state);

    //}
  };

  const [state, setstate] = useState(() => ({
    user: {
      first_name: null,
      last_name: "",
      username: null, //email
      password: null,
      password_confirmation: null,
    },
    telefono: null,
    numero_documento: null,
    pais: null,
    ciudad: null,
  }));

  const [comm, setComm] = useState(() => ({
    text: "",
    date: null,
    post: null,
    user: localStorage.getItem("user"),
  }));

  const report = async () => {
    //var x = await axios.patch("https://backdoggiehommie.herokuapp.com/post/RUD/" + String(post_config_id))
    // "https://backdoggiehommie.herokuapp.com/post/RUD/" +
    // String(post_report_id)
    var x = await axios.patch(`${post_RUD_url}/${post_config_id}`,{
      action: "report"
    })
    console.log(x.status);
    if (x.status === 200) {
      window.alert("El post ha sido reportado");
      window.location.href = "/";
    } else {
      window.alert("Error. Verifica los datos");
    }
  };

  const reportUser = async () => {
    console.log(Post);
    // "http://127.0.0.1:8000/user/report/"
    var x = await axios.patch(`${user_report_url}/${user_post_id}`, {
      action: "report",
    });
    console.log(x.status);
    if (x.status === 200) {
      window.alert("El usuario ha sido reportado");
      window.location.href = "/";
    } else {
      window.alert("Error. Verifica los datos");
    }
  };

  const upvote = async () => {
    // "http://127.0.0.1:8000/post/RUD/"
    var upRequest = await axios.patch(`${post_RUD_url}/${post_config_id}`, {
      userID: localStorage.getItem("user"),
      action: "upvote",
    });
    console.log(upRequest.status);
    if (upRequest.status === 200) {
      console.log(upRequest.data);
      window.alert(upRequest.data.mensaje);
      window.location.href = "/";
    }
  };

  const user = async () => {
    localStorage.setItem("user_profile", user_post_id),
      localStorage.setItem("user_profile_name", username_str),
      localStorage.setItem("user_is_active", is_active),
      localStorage.setItem("user_tel", tel),
      localStorage.setItem("user_email", email);
    redirect();
  };

  const redirect = () => {
    window.location.href = "/user-profile";
  };

  const comment = async (event) => {
    // http://127.0.0.1:8000/comment/create
    event.preventDefault();
    var x = await axios.post(`${comment_create_url}`, comm);
    console.log("estado", x.status);
    console.log("comment", comm);
    if (x.status === 201) {
      window.alert("Tu comentario ha sido registrado");
      window.location.href = "/";
    } else {
      window.alert("Error. Verifica los datos");
    }
  };

  const pausePost = async (event) => {
    event.preventDefault();
    var x = await axios.patch(
      'https://backdoggiehommie.herokuapp.com/post/deshabilitar/' + String(post_config_id),
      {
        state_user: null,
      }
    );
    console.log("estado", x.status);
    console.log("tipo dato usuario post", typeof user_post_id);
    console.log("usuario post", user_post_id);
    console.log(
      "tipo dato usuario sesión",
      typeof Number(localStorage.getItem("user"))
    );
    console.log("usuario sesion", localStorage.getItem("user"));
    if (x.status === 200) {
      window.alert("Tu post ha sido cambiado de estado");
      window.location.href = "/";
    } else {
      window.alert("Error. Verifica los datos");
    }
  };

  const [showPayment, setShowPayment] = useState(false);

  return (
    <div
      className="card mb-3 m-2"
      style={{ width: "674px", height: "max-content" }}
    >
      <div className="row g-0">
        <div className="col-md-2 col-rows-2">
          <div className="row">
            <div className="col-sm" style={{paddingLeft: "6px"}}>
            {user_post_id !== Number(localStorage.getItem('user')) ? (
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
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Antu_dialog-warning.svg/2048px-Antu_dialog-warning.svg.png"
                  }
                  className="img-fluid"
                  alt="report icon"
                  style={{
                    width: "100%",
                    height: "90%",
                    position: "5px",
                    marginTop: "2px",
                  }}
                  onClick={reportUser}
                />
            </span>):(null)}
            </div>
            <div className="col-sm"></div>
            <div className="col-sm">
              {user_post_id === Number(localStorage.getItem("user")) ? (
                <span
                  title="Habilitar Post"
                  style={{
                    width: "100%",
                    height: "100%",
                    marginTop: "10px",
                  }}
                >
                  <img
                    id="Config"
                    src={
                      "https://icon-library.com/images/pause-play-icon/pause-play-icon-28.jpg"
                    }
                    className="img-fluid"
                    alt="report icon"
                    style={{
                      width: "80%",
                      height: "80%",
                      position: "5px",
                      marginTop: "2px",
                      marginLeft: "0px",
                    }}
                    data-toggle="dropdown"
                    onClick={pausePost}
                  />
                </span>
              ) : null}
            </div>

            <img
              src={photo ? photo : Avatar}
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
            <button
              class="btn info"
              style={{ textAlign: "center", color: "#4A9FCD" }}
              onClick={user}
            >
              <strong> {username_str}</strong>{" "}
            </button>
            {/* <p style={{ textAlign: "center", color: "#4A9FCD" }}></p> */}
            <PostButtons
              post_config_id={post_config_id}
              title={title}
              description={description}
              username_str={username_str}
              user_post_id={user_post_id}
              upvotes={upvotes}
            />
            <div className="row">
              <div className="col-sm"></div>
              <div className="col-sm"></div>
              <div className="col-sm"></div>
            </div>
          </div>

          {/* <div
            className="btn-group"
            style={{
              height: "32px",
              width: "100%",
              marginBottom: "6px",
              padding: 0,
            }}
            id="up_vote"
          >
            <button
              type="button"
              className="btn btn-outline-secondary"
              style={{ padding: "5px", top: 0, bottom: 0 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  margin: "0",
                  width: "25px",
                  height: "25px",
                  position: "initial",
                  padding: "0",
                  paddingBottom: "3px",
                }}
                fill="currentColor"
                className="bi bi-arrow-up-square"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
                ></path>
              </svg>
            </button>

            <button
              type="button"
              className="btn btn-outline-secondary"
              style={{ padding: "5px" }}
              id="donate"
              onClick={() => {
                setShowPayment(true);
                console.log("aaaa");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  margin: "0",
                  width: "25px",
                  height: "25px",
                  position: "initial",
                  padding: "0",
                  paddingBottom: "3px",
                }}
                fill="currentColor"
                className="bi bi-cash"
                viewBox="0 0 16 16"
              >
                <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
                <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z"></path>
              </svg>
            </button>

            <Modal show={showPayment} />

            <button
              type="button"
              className="btn btn-outline-secondary"
              style={{ padding: "5px" }}
              id="share"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  margin: "0",
                  width: "25px",
                  height: "25px",
                  position: "initial",
                  padding: "0",
                  paddingBottom: "3px",
                }}
                fill="currentColor"
                className="bi bi-share"
                viewBox="0 0 16 16"
              >
                <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"></path>
              </svg>
            </button>
          </div> */}
        </div>

        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <div>
              {image === null || image === ""
                ? null
                : image
                    .split(",")
                    .map((img) => (
                      <img src={img} alt={img} key={img} width="80%"></img>
                    ))}
            </div>
            <div class="container">
              <div class="row">
                <div
                  class="col-1"
                  style={{
                    marginLeft: "0px",
                    marginTop: "0px",
                    padding: "0%",
                  }}
                >
                  <img
                    id="up"
                    src={
                      "https://www.actoterapeutico.com.ar/ebook/imagenes/top.png"
                    }
                    className="img-fluid"
                    style={{
                      width: "1.5rem",
                      height: "1.5rem",
                      marginLeft: "25%",
                      marginTop: "0px",
                    }}
                  />
                </div>
                <div
                  class="col-1"
                  style={{
                    marginLeft: "0.5%",
                    marginTop: "0.5%",
                    padding: "0%",
                  }}
                >
                  {upvotes}
                </div>
                <div
                  class="col-1"
                  style={{
                    marginLeft: "0px",
                    marginTop: "0px",
                    padding: "0%",
                  }}
                >
                  {user_post_id === Number(localStorage.getItem("user")) &&
                  state_user === "ACTIVO" ? (
                    <img
                      id="active"
                      src={
                        "https://cdn-icons-png.flaticon.com/512/1828/1828640.png"
                      }
                      className="img-fluid"
                      style={{
                        width: "1.5rem",
                        height: "1.5rem",
                        marginLeft: "25%",
                        marginTop: "0px",
                      }}
                    />
                  ) : null}
                  {user_post_id === Number(localStorage.getItem("user")) &&
                  state_user === "INACTIVO" ? (
                    <img
                      id="inactive"
                      src={
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/White_X_in_red_background.svg/1200px-White_X_in_red_background.svg.png"
                      }
                      className="img-fluid"
                      style={{
                        width: "1.3rem",
                        height: "1.3rem",
                        marginLeft: "25%",
                        marginTop: "0px",
                      }}
                    />
                  ) : null}
                </div>
                <div
                  class="col-3"
                  style={{
                    marginLeft: "0.5%",
                    marginTop: "0.5%",
                    padding: "0%",
                  }}
                >
                  {user_post_id === Number(localStorage.getItem("user")) ? (
                    <p>{state_user}</p>
                  ) : null}
                </div>

              </div>
            </div>
          </div>
          {/* div de card body */}
        </div>
        {user_post_id !== Number(localStorage.getItem('user')) ? (
        <span 
        title='Report Post'
        style={{
          width: "10%",
          height: "10%"
        }}>
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
        </span>):(null)}
        {/*Commment form*/}
        <form onSubmit={comment} style= {{paddingBottom: "5%"}}>
              <div className="form-group text-start">
                <div style={{ borderStyle: "solid", color: "rgb(74, 159, 205)" ,borderWidth:"1px", borderRadius: "5px",padding: "2%", paddingLeft: "3%", margin: "0"}} >
                  <strong><h3 class="mb-1" style={{color: "rgb(74, 159, 205)" }}> Comentarios</h3></strong>     
                  <ul  class="list-group">
                  {comments===null || comments==="" ? (
                    <h2 class="mb-1" > </h2>      
                  ) : (
                    (comments.map( comment => (
                      <div class="list-group comment"style={{ borderStyle: "solid",  borderWidth:"1px" , borderRadius: "15px"}}>
                        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                          <div class="d-flex w-100 justify-content-between">
                            <h5><b class="mb-1" style={{color: "#c6ab7c"}}>{comment.userData.user.first_name}</b></h5>
                            <small>{comment.date}</small>
                          </div>
                          <p class="mb-1">{comment.text}</p>
                        </a>
                      </div>
                    ))   
                  ))}
                  </ul>
                  <div className='row row-cols-2'
                style={{
                  padding: "0px",
                }}>
                  <div className='col-9'
                  style={{
                    marginBottom: "10px"

                  }}>
                    <input class= "comment"
                      type="text"
                      className="form-control"
                      id="input_comment"
                      placeholder="Añade un comentario"
                      name="comentario"
                      style={{
                        borderStyle: "solid", 
                        borderWidth:"1px" ,
                        borderRadius: "15px",
                        margin: "10px",
                        paddingLeft: "15px",
                        width: "100%",
                        height: "100%"
                      }}
                      onChange={(e) => { setComm({ ...comm, text:e.target.value, post: post_config_id})}}
                    />
                  </div>
                  <div className="col-1"
                  style={{
                    marginTop: "13px",
                  }} >
                    <button class="btn btn-outline-primary" style={{ color: "#4A9FCD", borderRadius: "10px"}}>
                      <strong> Comentar </strong>{" "}
                    </button>
                  </div>
                </div>
                </div>

              </div>
            </form>
        {/*Commment end form*/}


      </div>
    </div>
  );
};

export default Post;
