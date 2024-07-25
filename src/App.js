import './App.css';
import CustomTest from './CustomTest';
import { useState } from 'react';
function App() {
  const[showpop,setshowpop]=useState(false);
  function handlePopup(){
    setshowpop(!showpop);
    
  }function onclose(){
      setshowpop(false)
    }
  return (
    <div className="App">
      {!showpop&&<button onClick={handlePopup}>Open Model PopUp</button>}
      {showpop&&<CustomTest id="modal" header="Its header data" body="its Body Data" footer="its Footer area data" onclose={onclose}/>}
    </div>
  );
}

export default App;
