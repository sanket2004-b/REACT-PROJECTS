import React from "react";
import "./usercard.css";
import react from "../assets/react.svg";

const usercard=()=>{
    return (
        <div className='user-container'>
            <p id="user-name">Sanket</p>
            <img id="user-img" src={react}alt="sanket" />
            <p id="user-disc"> hello guys this is my first react project</p>

        </div>
    )
}

export default usercard;