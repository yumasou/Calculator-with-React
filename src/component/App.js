import "../App.css";
import React from 'react'
import Keylist from "./Keylist";
import Inputfield from "./Inputfield";
import { evaluate } from "mathjs";
function App() {
  const [data,setdata]=React.useState("")
  return (
    <div className="App">
      <h1 className="my-2 d-flex col-lg-4 mx-auto">Hein's calculator</h1>
      <Inputfield data={data}/>
      <Keylist data={data} setdata={setdata} eva={evaluate}/>
    </div>
  );
}

export default App;
