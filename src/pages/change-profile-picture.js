import React, { useState, useEffect } from "react";
import { FaArrowAltCircleUp, FaRegShareSquare } from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LayOut from "../Layout/LayOut";

const ChangeProfilePicture = () => {

    const [profilePicture, setprofilePicture] = useState(() => ({
        image : null
      }));


  const onFileChange = (event) => {
    const preview = event.target.files[0];
    const reader = new FileReader();
    const filename = preview.name;
    reader.readAsDataURL(preview);
    reader.onloadend = () => {
      const data = reader.result.toString().split(",")[1];
      console.log("data: " + data);
      setprofilePicture({
        image : preview
      });

    };
  };

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

            <div className="row pb-5">
              <div className="col-6">
                <h1>image</h1>
                <img
                  src= "{profilePicture.image}"
                  className="rounded float-left"
                  alt="profilePicture"
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
                  //onClick={handleSubmit}
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
