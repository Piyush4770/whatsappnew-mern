import './App.css';
import Sidebar from './Sidebar.js';
import Chat from './Chat,js';

function App() {
  return (
    <div className="app">
      {/* <h1>Lets build a whatsapp clone</h1> */}

      <Sidebar/>
      <Chat/>
      
    </div>
  );
}

export default App;
