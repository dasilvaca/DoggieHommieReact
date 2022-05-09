import React, { useState } from "react";
import { FaArrowAltCircleUp, FaRegShareSquare } from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";

function UpdateUser() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    // delete state.user.password_confirmation;
    var x = await axios.post("http://localhost:8000/updateUser/3", state);
    console.log("data", x);
    console.log("data", state)```
      if (x.status === 200) {
        localStorage.setItem('token', x.data.token)
        localStorage.setItem('user', JSON.stringify(x.data.user))
        window.location.href = '/login'
      }
      ```;
  };
  const [state, setstate] = useState(() => ({
    name: null, //the entire name
    pais: null,
    telefono: null,
    ciudad: null,
  }));

  return (
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
            width: "674px",
            height: "max-content",
            borderRadius: "46px",
          }}
        >
          <div className="row">
            <div
              className="col-6"
              style={{
                whiteSpace: "pre",
                fontStyle: "normal",
                fontFamily: "DM Sans, sans-serif",
                fontSize: "42px",
                lineHeight: "1.2",
                textAlign: "center",
              }}
            >
              <h1>Daniel Perez</h1>
              <h2>Bogotá D.C</h2>
            </div>

            <div className="col-6">
              <h1
                style={{
                  fontWeight: "700",
                  fontFamily: "DM Sans, sans-serif",
                  fontStyle: "normal",
                }}
              >
                Editar Perfil
              </h1>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="row pb-5">
              <div className="col-4 ">
                <input
                  className="my-3"
                  placeholder="Nombre"
                  onChange={(e) => {
                    setstate({ ...state, name: e.target.value });
                    console.log(state);
                  }}
                  style={{
                    borderRadius: "6px",
                    borderWidth: "1",
                    backgroundColor: "rgb(235, 235, 235)",
                    focusColor: "rgb(0, 153, 255)",
                    lineHeight: "1.4",
                    padding: "10px",
                    caretColor: "rgb(51, 51, 51)",
                    fontFamily: "DM Sans, sans-serif",
                    textColor: "rgb(51, 51, 51)",
                  }}
                ></input>
                <input
                  className="my-3"
                  placeholder="País"
                  onChange={(e) => setstate({ ...state, pais: e.target.value })}
                  style={{
                    borderRadius: "6px",
                    borderWidth: "1",
                    backgroundColor: "rgb(235, 235, 235)",
                    focusColor: "rgb(0, 153, 255)",
                    lineHeight: "1.4",
                    padding: "10px",
                    caretColor: "rgb(51, 51, 51)",
                    fontFamily: "DM Sans, sans-serif",
                    textColor: "rgb(51, 51, 51)",
                  }}
                ></input>
              </div>

              <div className="col-4">
                <input
                  type="phone"
                  className="my-3"
                  placeholder="Celular"
                  onChange={(e) =>
                    setstate({ ...state, telefono: e.target.value })
                  }
                  style={{
                    borderRadius: "6px",
                    borderWidth: "1",
                    backgroundColor: "rgb(235, 235, 235)",
                    focusColor: "rgb(0, 153, 255)",
                    lineHeight: "1.4",
                    padding: "10px",
                    caretColor: "rgb(51, 51, 51)",
                    fontFamily: "DM Sans, sans-serif",
                    textColor: "rgb(51, 51, 51)",
                  }}
                ></input>
                <input
                  className="my-3"
                  placeholder="Ciudad"
                  onChange={(e) =>
                    setstate({ ...state, ciudad: e.target.value })
                  }
                  style={{
                    borderRadius: "6px",
                    borderWidth: "1",
                    backgroundColor: "rgb(235, 235, 235)",
                    focusColor: "rgb(0, 153, 255)",
                    lineHeight: "1.4",
                    padding: "10px",
                    caretColor: "rgb(51, 51, 51)",
                    fontFamily: "DM Sans, sans-serif",
                    textColor: "rgb(51, 51, 51)",
                  }}
                ></input>
                <input
                type="submit"
                className="btn-primary bton"
                placeholder="Guardar"
                value="Guardar"
                style={{ backgroundColor: "rgb(28, 28, 141)" }}
              >
              </input>

                
              </div>

              <div className="col-4">
              <input
                  type="email"
                  className="my-3"
                  placeholder="Email"
                  onChange={(e) =>
                    setstate({ ...state, telefono: e.target.value })
                  }
                  style={{
                    borderRadius: "6px",
                    borderWidth: "1",
                    backgroundColor: "rgb(235, 235, 235)",
                    focusColor: "rgb(0, 153, 255)",
                    lineHeight: "1.4",
                    padding: "10px",
                    caretColor: "rgb(51, 51, 51)",
                    fontFamily: "DM Sans, sans-serif",
                    textColor: "rgb(51, 51, 51)",
                  }}
                ></input>

              </div>
            </div>
          </form>

          <div className="row pt-5">
            <div className="col-6">
              <button
                type="button"
                className="btn btn-primary"
                style={{
                  backgroundColor: "rgb(28, 28, 141)",
                  textAlign: "center",
                  borderRadius: "8",
                }}
              >
              Cambiar contraseña
              </button>
            </div>
            <div className="col-6">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const Foo = function UpdateUsers() {
  return <h1> foo </h1>;
};

export default UpdateUser;
