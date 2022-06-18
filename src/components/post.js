import { textAlign } from "@mui/system";
import React from "react";
import axios from "axios";
import { Modal } from "bootstrap";

import PostButtons from "./PostButtons";
import { useState } from "react";
import { colors } from "@mui/material";

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
  state_user
}) => {
  
  const handleSubmit = async (event) => {
    event.preventDefault()

      delete state.user.password_confirmation;
      var x =  axios.post('http://localhost:8000/users', state).then((response) =>{
        console.log(x)
        if(x.status === 201){
          window.location.href("/login")
        }else{
          alert('')
        }
      })
      console.log('data', x)
      console.log('data', state)
      
  //}

  }
  const [state, setstate] = useState(() => (
    {
      user: {
        first_name: null,
        last_name: "",
        username: null, //email
        password: null,
        password_confirmation: null
      },
      telefono: null,
      numero_documento: null,
      pais: null,
      ciudad: null,
    }

  ));

  const [comm, setComm] = useState(() => (
    {
        text:'',
        date:null,
        post:null,
        user: localStorage.getItem('user'),
    }))

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
  };

  const reportUser = async () => {
    console.log(Post);
    var x = await axios.patch(
      "http://127.0.0.1:8000/user/report/" + String(user_post_id),
      {
        action: "report",
      }
    );
    console.log();
    console.log(x.status);
    if (x.status === 200) {
      window.alert("El usuario ha sido reportado");
      window.location.href = "/";
    } else {
      window.alert("Error. Verifica los datos");
    }
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

  const user = async () => {
      localStorage.setItem("user_profile", user_post_id),
      localStorage.setItem("user_profile_name", username_str),
      localStorage.setItem("user_is_active", is_active),
      localStorage.setItem("user_tel", tel),
      localStorage.setItem("user_email", email)
      redirect()     
  };

  const redirect = () => {
    window.location.href = '/user-profile'
  }

  const comment = async (event) => {

    event.preventDefault()
    var x = await axios.post("http://127.0.0.1:8000/comment/create",comm);
    console.log("estado",x.status);
    console.log("comment",comm);

    if (x.status === 201) {
      window.alert("Tu comentario ha sido registrado");
      window.location.href = "/";

    } else {

      window.alert("Error. Verifica los datos");

    }
  };

  const pausePost = async (event) => {

    event.preventDefault()
    var x = await axios.patch(
      "http://127.0.0.1:8000/post/deshabilitar/" + String(post_config_id),
      {
        state_user:null
      }
    );
    console.log("estado",x.status);
    console.log("tipo dato usuario post", typeof user_post_id);
    console.log("usuario post",user_post_id);
    console.log("tipo dato usuario sesión", typeof Number(localStorage.getItem('user')));
    console.log("usuario sesion",localStorage.getItem('user'));
    if (x.status === 200) {
      window.alert("Tu post ha sido cambiado de estado");
      window.location.href = "/";

    } else {

      window.alert("Error. Verifica los datos");

    }
  };

  return (
    <div
      className="card mb-3 m-2"
      style={{ width: "674px", height: "max-content" }}
    >
      <div className="row g-0">
        <div className="col-md-2 col-rows-2">
          <div className="row">
            <div className="col-sm" style={{paddingLeft: "6px"}}>
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
                    height: "90%",
                    position : "5px",
                    marginTop : "2px"
                  }}
                  onClick = {reportUser}           
                />
            </span>
            </div>
              <div className="col-sm">
            </div>
              <div className="col-sm">
              {user_post_id === Number(localStorage.getItem('user')) ? (
                  <span 
                  title='Habilitar Post'
                  style={{
                    width: "100%",
                    height: "100%",
                    marginTop: "10px"
                  }}
                  >
                    <img
                        id="Config"
                        src={"https://icon-library.com/images/pause-play-icon/pause-play-icon-28.jpg"}
                        className="img-fluid"
                        alt="report icon"
                        style={{
                          width: "80%",
                          height: "80%",
                          position : "5px",
                          marginTop : "2px",
                          marginLeft: "0px"
                        }}
                        data-toggle="dropdown"
                        onClick = {pausePost}           
                      />
                </span>     
                ) : (
                  null
                )}      
          </div>
            <img
              src={photo}
              className="img-fluid-center"
              alt="..."
              style={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "50%",
                borderRadius: "50%",
                backgroundSize: "100% auto",
                height: "100px",
                margin: "5px"
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
          <div className="row">
            <div className="col-sm">
            </div>
            <div className="col-sm">
            </div>
            <div className="col-sm">
            </div>
            
          </div>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <h6 className="card-text">{date}</h6>
            <p className="card-text">{description}</p>
            <div>
                {image===null || image==="" ? (
                  null
                ) : (
                  (image.split(',').map( img => (
                    <img src={img} alt={img} key={img} width="80%"></img>
                  )))     
                )}
            </div>
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
                <div class="col-1" style= {{
                    marginLeft: "0px",
                    marginTop: "0px",
                    padding: "0%",
                    }}>
                {user_post_id === Number(localStorage.getItem('user')) && state_user === "ACTIVO" ? (
                    <img
                    id="active"
                    src={"https://cdn-icons-png.flaticon.com/512/1828/1828640.png"}
                    className="img-fluid"
                    style={{
                      width: "1.5rem",
                      height: "1.5rem",
                      marginLeft: "25%",
                      marginTop: "0px",
                    }}
                    />

                ) : (
                  null
                )}
                {user_post_id === Number(localStorage.getItem('user')) && state_user === "INACTIVO" ? (
                    <img
                    id="inactive"
                    src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/White_X_in_red_background.svg/1200px-White_X_in_red_background.svg.png"}
                    className="img-fluid"
                    style={{
                      width: "1.3rem",
                      height: "1.3rem",
                      marginLeft: "25%",
                      marginTop: "0px",
                    }}
                    />

                ) : (
                  null
                )}
                </div>
                <div class="col-3"style= {{
                    marginLeft: "0.5%",
                    marginTop: "0.5%",
                    padding: "0%"
                    }}>
                {user_post_id === Number(localStorage.getItem('user')) ? (               
                    <p>{state_user}</p>
                ) : (
                  null
                )}
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