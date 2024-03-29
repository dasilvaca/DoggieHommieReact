import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { updateUser_url, user_id_url } from "../api";
import ProfilePic from "../assets/img/4.png";
import Avatar from "../assets/img/Avatar.jpg";
import axios from "axios";

const CreatePost = () => {
  const [state, setState] = useState(() => ({
    profilePicture: null,
  }));

  const getUser = async () => {
    try {
      const { data } = await axios.get(
        `${user_id_url}/${parseInt(localStorage.getItem("user"))}`
      );
      console.log("user: " + data["profile_picture"]);

      setState({
        profilePicture: data["profile_picture"],
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return localStorage.getItem("username") ? (
    <>
      <div className="container justify-content-center">
        <div className="row justify-content-center">
          <div
            className="card mb-3 mt-2"
            style={{
              width: "674px",
              height: "max-content",
              paddingBottom: "8px",
            }}
          >
            <div className="row g-0" style={{ marginTop: "10px" }}>
              <div className="col-1">
                <img
                  src={state.profilePicture ? state.profilePicture : Avatar}
                  className="createPostProfilePic"
                />
              </div>
              <div className="col-11 col-rows-2">
                <div className="row justify-content-center">
                  <h3>Añadir publicación</h3>
                </div>
                <div className="row">
                  <Link to="/new-post" style={{ textDecoration: "None" }}>
                    <input
                      style={{}}
                      type="text"
                      className="form-control"
                      placeholder="Ingresa los datos"
                      onClick={() => {
                        return true;
                      }}
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="row g-0"></div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default CreatePost;
