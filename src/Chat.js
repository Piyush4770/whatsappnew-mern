import React from "react";
import './Chat.css';
import { Avatar } from '@mui/material';

function Chat(){
    return(
        <div className="chat">
            <div className="chat__header">
                <Avatar/>
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at...</p>
                </div>
            </div>
        </div>
    );
}

export default Chat;