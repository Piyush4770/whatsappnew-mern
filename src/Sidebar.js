import React from 'react';
import './Sidebar.css';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { Avatar, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatIcon from '@mui/icons-material/Chat';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import SidebarChat from './SidebarChat';

function Sidebar() {   
    return(
        <div className='sidebar'> 
            <div className='sidebar__header'>
                <Avatar src='https://shorturl.at/Ahw62'></Avatar>
                <div className='sidebar_headerRight'>
                <IconButton>
                    <DonutLargeIcon/>
                </IconButton>
                <IconButton>
                    <ChatIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className='sidebar__searchContainer'>
                    <SearchOutlined/>
                    <input placeholder='Search or start new chat' type='text'/>
                </div>
            </div>
            <div className='sidebar__chat'>
                <SidebarChat/>               
                <SidebarChat/>               
                <SidebarChat/>               
            </div>
        </div>
    );
}

export default Sidebar;