import React from "react"
import axios from "axios"
import DonationModal from "./MakeDonationModal"


const PostButtons = ({ title, description, username_str, post_config_id, user_post_id, upvotes}) => {


    const upvote = async () => {

        var upRequest = await axios.patch(
            "http://127.0.0.1:8000/post/RUD/" + String(post_config_id),
            {
                userID: localStorage.getItem("user"),
                upvote: true,
            }
        );
        console.log(upRequest.status);
        if (upRequest.status === 200) {
            console.log(upRequest.data)
            window.alert(upRequest.data.mensaje);
            window.location.href = "/";
        }
    };

    return (
        localStorage.getItem('username') ? (
            <div className="btn-group" style={{ height: "32px", width: "100%", marginBottom: "6px", padding: 0 }}>
                <button type="button" className="btn btn-outline-secondary" style={{padding: "5px", top: 0, bottom: 0 }} onClick={upvote} >
                    <svg xmlns="http://www.w3.org/2000/svg" style={{ margin: "0", width: "25px", height: "25px", position: 'initial', padding: "0", paddingBottom: "3px" }} fill="currentColor" className="bi bi-arrow-up-square" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"></path>
                    </svg>
                    {/* <p style={{position: "absolute", margin : '0px 0px 0px 0px', background : "#FF5733", borderRadius : "25px"}}>{upvotes}</p> */}
                    <span className="visually-hidden">Button</span>
                </button>
                <p style={{
                        position: "absolute",
                        margin : '0px 0px 0px 28px',
                        zIndex : "900",
                        padding : "0px",
                        background : "#FFFF",
                        borderRadius : "20px",
                        borderStyle : "solid",
                        color : "#FF5783"
                    }}>
                        {upvotes}
                    </p>
                <button type="button" className="btn btn-outline-secondary" style={{ padding: "5px" }} data-bs-toggle="modal" data-bs-target={"#exampleModal" + post_config_id}>
                    <svg xmlns="http://www.w3.org/2000/svg" style={{ margin: "0", width: "25px", height: "25px", position: 'initial', padding: "0", paddingBottom: "3px" }} fill="currentColor" className="bi bi-cash" viewBox="0 0 16 16">
                        <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
                        <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z"></path>
                    </svg>
                    <span className="visually-hidden">Button</span>
                </button>
                <button type="button" className="btn btn-outline-secondary" style={{ padding: "5px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" style={{ margin: "0", width: "25px", height: "25px", position: 'initial', padding: "0", paddingBottom: "3px" }} fill="currentColor" className="bi bi-share" viewBox="0 0 16 16">
                        <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"></path>
                    </svg>
                    <span className="visually-hidden">Button</span>
                </button>

            <DonationModal 
            post_config_id={post_config_id} 
            title={title} 
            description={description} 
            username_str={username_str}
            user_post_id={user_post_id}
            />
                
            </div>
        )
            : (
                <></>
            )
    )
}

export default PostButtons