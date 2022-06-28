import React, { useEffect, useState } from 'react';
import Avatar from "../assets/img/Avatar.jpg";
import LayOut from "../Layout/LayOut";
import ProfilePic from "../assets/img/4.png";
import { Link } from "react-router-dom";
import axios from "axios";
import Posts from '../components/posts';
import { notification_getAll_url } from '../api';

export const Notificacion = () => {
    const [notifications, setNotifications] = useState([]);

    const getNotification = async () => {
        const { data } = await axios.get(
            // `http://127.0.0.1:8000/notification/getAll/${localStorage.getItem("user")}` //?limit=20
            `${notification_getAll_url}/${localStorage.getItem("user")}`

        );
        console.log(data)
        setNotifications(data.results);
      };

      useEffect(() => {
        getNotification();
      }, []);


    return (
        <LayOut>
            <div style={{ borderStyle: "solid", color: "rgb(74, 159, 205)" ,borderWidth:"1px", borderRadius: "5px",padding: "2%", paddingLeft: "3%", margin: "0"}} >
                  <strong><h2 class="mb-1" style={{color: "rgb(74, 159, 205)" }}> Notificaciones</h2></strong>
             <ul  class="list-group">
                  {notifications===null || notifications==="" ? (
                    <h2 class="mb-1" > nop </h2>      
                  ) : (
                    (notifications.map( notification => (
                      <div class="list-group comment"style={{ borderStyle: "solid",  borderWidth:"1px" , borderRadius: "15px"}}>
                        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                          <div class="d-flex w-100 justify-content-between">
                            <h5><b class="mb-1" style={{color: "#c6ab7c"}}>{notification.text}.</b></h5>
                            <small>{notification.date}</small>
                          </div>
                          <h6>Ve a tu publicación y revisa ahora!</h6>

                        </a>
                      </div>
                    ))   
                  ))}
                  </ul>
            </div>
            

        </LayOut>
        
    )





}