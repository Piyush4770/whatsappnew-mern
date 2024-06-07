import './App.css';
import React from 'react';
import Sidebar from './Sidebar.js';
import Chat from './Chat.js';

function App() {
  return (
    <div className="app">
      {/* <h1>Lets build a whatsapp clone</h1> */}
      <div className='app__body'>
      <Sidebar/>
      <Chat/>
      </div>
      
      
    </div>
  );
}

export default App;
