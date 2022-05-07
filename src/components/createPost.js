import React from "react";
import ProfilePic from '../assets/img/4.png'

const CreatePost = () => {
    return (
        <>
            <div className="container justify-content-center">
                <div className="row justify-content-center">
                    <div className="card mb-3 mt-2" style={{ width: "674px", height: "max-content" }}>
                        <div className="row g-0" style={{marginTop:"10px"}}>
                            <div className="col-1">
                                <img src={ProfilePic} className="createPostProfilePic" />
                            </div>
                            <div className="col-11">
                                <input style={{}} type="text" className="form-control" placeholder="What's on your mind?" />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default CreatePost;