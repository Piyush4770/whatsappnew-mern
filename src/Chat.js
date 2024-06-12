import React, {useState} from "react";
import './Chat.css';
import { Avatar, IconButton } from '@mui/material';
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import AttachFile from "@mui/icons-material/AttachFile";
import MoreVert from "@mui/icons-material/MoreVert";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import axios from './axios.js';
import SendIcon from '@mui/icons-material/Send';

function Chat({ messages }){

    const [input, setInput] = useState("");
    // const [visibel, setVisible] = useState(false);
    const [showButton, setShowButton] = useState(false);

    const handleChange = (e) => {
      setInput(e.target.value);
      setShowButton(e.target.value !== ''); // Show button if input is not empty
    };
    const sendMessage = (e) => {
        e.preventDefault();
        const now = new Date();

        // Format the date and time as a string
        // Example format: "MM/DD/YYYY, HH:MM:SS AM/PM"
        const timestamp = now.toLocaleString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });
        axios.post('/messages/new', {
            message: input,
            name: "Piyush",
            timestamp: timestamp,
            received: false
        });
        // console.log("You typed >>>", e.target.value);
        setInput("");
        setShowButton(false); // Hide button after sending message
    };

    return(
        <div className="chat">
            <div className="chat__header">
                <Avatar/>
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
            {messages.map((message) => (
    <p className={`chat__message ${!message.received && "chat__receiver"}`}>
    <span className="chat__name">{message.name}</span>
    {message.message}
    <span className="chat__timestamp">{message.timestamp}</span>
</p>
))}
            </div>
            
            <div className="chat__footer">
                <InsertEmoticonIcon/>
                <form>
                    <input value={input} 
                    onChange={handleChange}
                    placeholder="Type a message" type="text"/>
                    <button onClick={sendMessage} type="submit" style={{display: showButton ? 'inline-block' : 'none' , outline: 'none', border: 0}}><SendIcon className="sendIcon"></SendIcon></button>
                </form>
                <MicIcon/>
            </div>
        </div>
    );
}

export default Chat;