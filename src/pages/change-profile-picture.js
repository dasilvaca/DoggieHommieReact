import React, { useState, useEffect } from "react";
import { FaArrowAltCircleUp, FaRegShareSquare } from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LayOut from "../Layout/LayOut";
import { height } from "@mui/system";
import { change_picture_url } from "../api";


const ChangeProfilePicture = () => {
  const [state, setState] = useState(() => ({
    image: null,
    previewImage : null
  }));
  const userId = parseInt(localStorage.getItem("user"))


  const handleSubmit = async (event) => {
    event.preventDefault()
    // var x = await axios.post('http://localhost:8000/post/', post_req)//, fetch)
    // var x = await axios.patch(`https://backdoggiehommie.herokuapp.com/changePicture/${userId}`, state.image)//, fetch)
    var x = await axios.patch(`${change_picture_url}/${userId}`, state.image)


    if (x.status === 200) {
        window.alert("Has cambiado tu foto de perfil")
        localStorage.setItem('user_picture',data["profile_picture"])
        window.location.href = '/profile'
    } else {
      window.alert("Ops. Algo salió mal, estamos trabajando en eso")
    }
    console.log('data', x)
}

  const onFileChange = (event) => {
    const file = event.target.files[0];
    const preview = URL.createObjectURL(file);
    const filename = file.name
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      const imgData = reader.result.toString().split(',')[1];
    console.log("name: "+filename)
    console.log("data: "+ imgData)
    setState({
      image: {imgName : filename, data : imgData},
      previewImage : preview
    });
  };
  }
  return (
    <LayOut>
      <div
        className="container-fluid"
        style={{
          height: "100vh",
          background:
            "linear-gradient(180deg, #44CCCC 0%, rgba(76, 44, 206, 0.93) 100%)",
        }}
      >
        <div
          className="row justify-content-center align-items-center"
          style={{ height: "100%" }}
        >
          <div
            className="card rounded p-5"
            style={{
              width: "1200px",
              height: "max-content",
              borderRadius: "46px",
            }}
          >
            <div className="row pb-5">
              <div
                className="col-6 d-flex justify-content-start"
                id="nombre"
                style={{
                  whiteSpace: "pre",
                  fontStyle: "normal",
                  fontFamily: "DM Sans, sans-serif",
                  fontSize: "42px",
                  lineHeight: "1.2",
                  textAlign: "center",
                }}
              >
                <h1> Cambiar Foto de Perfil</h1>
              </div>
            </div>

            <div className="row pb-5 align-items-center">
              <div className="col-6">

                <img src={state.previewImage} id="profileImage"
                style={{
                  borderRadius: "50%",
                  width : "25rem",
                  height:  "25rem",
                  backgroundSize: "cover"
                  
                }}
                ></img>
              </div>

              <div className="col">
                <h1>Añade una foto</h1>

                <input
                  type="file"
                  //accept='image/*'
                  className="form-control mb-3"
                  id="post-foto"
                  aria-describedby="dni_help"
                  name="post-foto"
                  onChange={(e) => onFileChange(e)}
                />

                <button
                  type="button"
                  className="btn-primary bton"
                  onClick={handleSubmit}
                  style={{
                    backgroundColor: "rgb(28, 28, 141)",
                    textAlign: "center",
                    borderRadius: "8",
                  }}
                >
                  Guardar
                </button>
              </div>
            </div>

            <div className="row pb-5"></div>
          </div>
        </div>
      </div>
    </LayOut>
  );
};

export default ChangeProfilePicture;
