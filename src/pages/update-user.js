import React, { useState, useEffect } from "react";
import { FaArrowAltCircleUp, FaRegShareSquare } from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
import LayOut from "../Layout/LayOut";

function UpdateUser({ userId }) {
  //  const [isLoading, setIsLoading] = useState(true);
  // const [data, setData] = useState(() => ({}));
  const [user, setUser] = useState(() => ({
    name: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    id : ""
  }));
  const getUser = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8000/updateUser/${parseInt(localStorage.getItem("user"))}`
      );
      console.log(data)
      setUser({
        name: data.user.first_name,
        country: data.pais,
        city: data.ciudad,
        phone: data.telefono,
        email: data.user.username,
        id : data.numero_documento
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = {
      telefono: user.phone,
      ciudad: user.city,
      pais: user.country,
    };
    try {
      var x = await axios.patch(
        `http://localhost:8000/updateUser/${parseInt(localStorage.getItem("user"))}`,
        payload
      );
    } catch (error) {
      console.log(error.response.data);
    }
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
                <h1> {user.name}</h1>
                {/* <h1> {data["user"]} </h1> */}
              </div>

              <div className="col-6 d-flex justify-content-end">
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
                <div className="col ">
                  <label className="my-3 w-100">
                    Nombre Completo
                    <input
                      disabled
                      className="my-3 w-100"
                      placeholder="nombre"
                      value={user.name}
                      onChange={(e) => {
                        setUser({ ...user, name: e.target.value });
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
                  </label>
                  <label className="my-3 w-100">
                    País
                    <input
                      className="my-3 w-100"
                      placeholder="País"
                      value={user.country}
                      onChange={(e) => {
                        setUser({ ...user, country: e.target.value });
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
                  </label>
                </div>

                <div className="col">
                  <label className="my-3 w-100">
                    Teléfono
                    <input
                      type="phone"
                      className="my-3 w-100"
                      placeholder="telefono"
                      value={user.phone}
                      onChange={(e) => {
                        setUser({ ...user, phone: e.target.value });
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
                  </label>
                  <label className="my-3 w-100">Ciudad
                  <input
                    className="my-3 w-100"
                    placeholder="Ciudad"
                    value={user.city}
                    onChange={(e) => {
                      setUser({ ...user, city: e.target.value });
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
                  
                  </label>
                </div>

                <div className="col">
                  <label className="my-3 w-100">
                    Email
                    <input
                      disabled
                      type="email"
                      className="my-3 w-100"
                      placeholder="Email"
                      value={user.email}
                      onChange={(e) => {
                        setUser({ ...user, email: e.target.value });
                      }}
                      style={{
                        borderRadius: "6px",
                        borderWidth: "1px",

                        backgroundColor: "rgb(235, 235, 235)",
                        focusColor: "rgb(0, 153, 255)",
                        lineHeight: "1.4",
                        padding: "10px",
                        caretColor: "rgb(51, 51, 51)",
                        fontFamily: "DM Sans, sans-serif",
                        textColor: "rgb(51, 51, 51)",
                      }}
                    ></input>
                  </label>

                  <label className="my-3 w-100">
                    Número Documento
                    <input
                      disabled
                      type="email"
                      className="my-3 w-100"
                      placeholder="Numero Documento"
                      value={user.id}
                      onChange={(e) => {
                        setUser({ ...user, id: e.target.value });
                      }}
                      style={{
                        borderRadius: "6px",
                        borderWidth: "1px",

                        backgroundColor: "rgb(235, 235, 235)",
                        focusColor: "rgb(0, 153, 255)",
                        lineHeight: "1.4",
                        padding: "10px",
                        caretColor: "rgb(51, 51, 51)",
                        fontFamily: "DM Sans, sans-serif",
                        textColor: "rgb(51, 51, 51)",
                      }}
                    ></input>
                  </label>



                </div>
              </div>
            <div className="row pt-5 justify-content-between">
              <div className="col-4">
                <button
                  type="button"
                  className="btn-primary bton"
                  style={{
                    backgroundColor: "rgb(28, 28, 141)",
                    textAlign: "center",
                    borderRadius: "8",
                  }}
                >
                  Cambiar contraseña
                </button>
              </div>
          
              <div className="col-4">
                  <input
                    type="submit"
                    className="btn-primary bton"
                    placeholder="Guardar"
                    value="Guardar"
                    style={{
                      backgroundColor: "rgb(28, 28, 141)",
                      padding: "10px",
                    }}
                  ></input>

              </div>
            </div>
            </form>

          </div>
        </div>
      </div>
    </LayOut>
  );
}

export const Foo = function UpdateUsers() {
  return <h1> foo </h1>;
};

export default UpdateUser;
