import './App.css';
import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar.js';
import Chat from './Chat.js';
import Pusher from 'pusher-js';
import axios from './axios.js';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/messages/sync')
    .then(response => {
      console.log(response.data);
      setMessages(response.data);
    });
    
  }, []);
  

  useEffect(() => {
    const pusher = new Pusher('a30598705f7a495a7f74', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMesage) {
      alert(JSON.stringify(newMesage));
      setMessages(messages => [...messages, newMesage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages]);

  console.log(messages);
  return (
    <div className="app">
      {/* <h1>Lets build a whatsapp clone</h1> */}
      <div className='app__body'>
      <Sidebar/>
      <Chat messages= {messages}/>
      </div>
      
      
    </div>
  );
}

export default App;
