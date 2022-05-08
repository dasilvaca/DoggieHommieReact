import React from "react";
import { Link } from "react-router-dom";
import ProfilePic from '../assets/img/4.png'

const CreatePost = () => {

    return (
        <>
            <div className="container justify-content-center">
                <div className="row justify-content-center">
                    <div className="card mb-3 mt-2" style={{ width: "674px", height: "max-content", paddingBottom: "8px" }}>
                        <div className="row g-0" style={{ marginTop: "10px" }}>
                            <div className="col-1">
                                <img src={ProfilePic} className="createPostProfilePic" />
                            </div>
                            <div className="col-11 col-rows-2">
                                <div className="row justify-content-center">
                                    <h3>Añadir publicacion</h3>
                                </div>
                                <div className="row">
                                <Link to="/new-post" style={{textDecoration: "None"}}>
                                    <input style={{}} type="text" className="form-control" placeholder="Ask for help" onClick={{}} />
                                </Link>
                                </div>
                            </div>
                        </div>
                        <div className="row g-0">
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default CreatePost;